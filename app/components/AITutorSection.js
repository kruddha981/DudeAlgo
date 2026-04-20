"use client";
import { useState, useRef, useEffect } from "react";

function formatMessage(text) {
  const escaped = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  return escaped
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/`(.*?)`/g, "<code>$1</code>")
    .replace(/\n/g, "<br/>")
    .replace(/• /g, '<span class="text-[#7c5cfc]">→</span> ')
    .replace(/- /g, '<span class="text-[#7c5cfc]">→</span> ');
}

export default function AITutorSection() {
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Hey there! 👋 I'm your **DudeAlgo AI Tutor**, powered by Gemini. Ask me anything about Data Structures and Algorithms — from basic concepts to complex problem-solving strategies!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState(null);
  const [pendingQuestion, setPendingQuestion] = useState("");
  const chatEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed || isTyping) return;

    const userMessage = { role: "user", text: trimmed };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);
    setPendingQuestion(trimmed);
    setError(null);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: trimmed,
          history: messages.filter((m) => m.role !== "system"),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to get response");
      }

      setMessages((prev) => [...prev, { role: "ai", text: data.response }]);
    } catch (err) {
      setError(err.message);
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: `⚠️ ${err.message}\n\nMake sure your **GEMINI_API_KEY** is set in \`.env.local\` and restart the dev server.`,
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleRetry = () => {
    if (!pendingQuestion || isTyping) return;
    setInput(pendingQuestion);
    setTimeout(() => handleSend(), 40);
  };

  const suggestions = [
    "What is a stack?",
    "Explain Big O notation",
    "How does binary search work?",
    "What is dynamic programming?",
  ];

  return (
    <section id="tutor" className="relative py-24 sm:py-28 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-14">
          <span className="tag bg-[rgba(124,92,252,0.06)] border border-[rgba(124,92,252,0.15)] text-[#a78bfa] mb-6 mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22d3ee]" />
            Powered by Gemini
          </span>
          <h2 className="section-heading mt-6">
            Your Personal{" "}
            <span className="gradient-text">AI Tutor</span>
          </h2>
          <p className="text-[#7b7b9e] mt-5 max-w-lg mx-auto text-[15px] leading-relaxed tracking-tight">
            Ask anything about DSA and get clear, beginner-friendly explanations instantly. Like having a brilliant teacher available 24/7.
          </p>
        </div>

        {/* Chat Container */}
        <div className="glass-card !overflow-hidden !hover:transform-none">
          {/* Chat Header */}
          <div className="flex items-center gap-3.5 px-7 py-5 border-b border-[rgba(124,92,252,0.08)]">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#7c5cfc] via-[#6d28d9] to-[#22d3ee] flex items-center justify-center shadow-lg shadow-[#7c5cfc]/25">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a4 4 0 0 1 4 4c0 1.1-.3 2.1-.8 3h.8a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-1l1 5H8l1-5H8a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h.8A6 6 0 0 1 8 6a4 4 0 0 1 4-4z"/>
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-sm tracking-tight">DudeAlgo AI</h3>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-[#34d399] shadow-[0_0_6px_rgba(52,211,153,0.5)]" />
                <span className="text-[11px] text-[#7b7b9e] font-medium">Online · Gemini-powered</span>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-[430px] overflow-y-auto p-6 sm:p-7 space-y-4.5">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`chat-bubble flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[88%] sm:max-w-[85%] rounded-2xl px-4.5 sm:px-5 py-3.5 sm:py-4 text-[13px] sm:text-[13.5px] leading-relaxed tracking-tight ${
                    msg.role === "user"
                      ? "bg-gradient-to-br from-[#7c5cfc] to-[#5b21b6] text-white rounded-br-lg shadow-lg shadow-[#7c5cfc]/15"
                      : "bg-[rgba(15,15,35,0.7)] border border-[rgba(124,92,252,0.08)] text-[#c8c8d8] rounded-bl-lg"
                  }`}
                >
                  {msg.role === "ai" ? (
                    <div
                      className="chat-markdown"
                      dangerouslySetInnerHTML={{ __html: formatMessage(msg.text) }}
                    />
                  ) : (
                    msg.text
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start chat-bubble">
                <div className="bg-[rgba(15,15,35,0.7)] border border-[rgba(124,92,252,0.08)] rounded-2xl rounded-bl-lg px-6 py-4 flex items-center gap-2.5">
                  <div className="typing-dot" />
                  <div className="typing-dot" />
                  <div className="typing-dot" />
                </div>
              </div>
            )}

            {error && !isTyping && (
              <div className="flex justify-start">
                <button
                  onClick={handleRetry}
                  className="text-[11px] font-medium px-3 py-1.5 rounded-full border border-[rgba(248,113,113,0.2)] text-[#fca5a5] hover:bg-[rgba(248,113,113,0.08)] transition-colors"
                >
                  Retry last question
                </button>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Suggestions */}
          {messages.length <= 1 && (
            <div className="px-7 pb-4 flex flex-wrap gap-2">
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => {
                    setInput(s);
                    setTimeout(() => inputRef.current?.focus(), 50);
                  }}
                  className="text-[11px] font-medium px-3.5 py-2 rounded-full border border-[rgba(124,92,252,0.15)] text-[#a78bfa] hover:bg-[rgba(124,92,252,0.08)] hover:border-[rgba(124,92,252,0.35)] transition-all duration-300"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="flex items-center gap-3 px-6 sm:px-7 py-4.5 sm:py-5 border-t border-[rgba(124,92,252,0.08)]">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask anything about DSA..."
              disabled={isTyping}
              className="premium-input flex-1 disabled:opacity-50"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isTyping}
              className="glow-btn glow-btn-primary !p-3.5 !rounded-xl disabled:opacity-25 disabled:cursor-not-allowed disabled:!shadow-none"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
