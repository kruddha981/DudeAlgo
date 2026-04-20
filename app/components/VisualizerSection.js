"use client";
import { useState, useCallback } from "react";

const COLORS = [
  "from-[#7c5cfc] to-[#a78bfa]",
  "from-[#22d3ee] to-[#7c5cfc]",
  "from-[#f472b6] to-[#a78bfa]",
  "from-[#34d399] to-[#22d3ee]",
  "from-[#fb923c] to-[#f472b6]",
  "from-[#7c5cfc] to-[#22d3ee]",
  "from-[#a78bfa] to-[#f472b6]",
  "from-[#22d3ee] to-[#34d399]",
];

export default function VisualizerSection() {
  const [stack, setStack] = useState([
    { id: 1, value: 42, colorIdx: 0 },
    { id: 2, value: 17, colorIdx: 1 },
    { id: 3, value: 85, colorIdx: 2 },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [nextId, setNextId] = useState(4);
  const [removingId, setRemovingId] = useState(null);
  const [message, setMessage] = useState("Stack initialized with 3 elements");
  const [messageType, setMessageType] = useState("info");
  const [xp, setXp] = useState(35);

  const badges = [
    { id: "first_push", label: "First Push", requirement: 40, icon: "🟣" },
    { id: "stack_master", label: "Stack Tamer", requirement: 90, icon: "⚡" },
    { id: "lifo_legend", label: "LIFO Legend", requirement: 140, icon: "🏆" },
  ];

  const showMessage = (text, type = "info") => {
    setMessage(text);
    setMessageType(type);
  };

  const handlePush = useCallback(() => {
    if (stack.length >= 8) {
      showMessage("⚠️ Stack overflow! Maximum 8 elements allowed.", "error");
      return;
    }

    const val = inputValue.trim() ? parseInt(inputValue) || inputValue.trim() : Math.floor(Math.random() * 100);
    const newItem = { id: nextId, value: val, colorIdx: nextId % COLORS.length };

    setStack((prev) => [...prev, newItem]);
    setNextId((n) => n + 1);
    setInputValue("");
    setXp((prev) => Math.min(prev + 8, 160));
    showMessage(`Pushed "${val}" onto the stack → O(1)`, "push");
  }, [inputValue, stack.length, nextId]);

  const handlePop = useCallback(() => {
    if (stack.length === 0) {
      showMessage("⚠️ Stack underflow! Nothing to pop.", "error");
      return;
    }

    const topItem = stack[stack.length - 1];
    setRemovingId(topItem.id);
    showMessage(`Popping "${topItem.value}" from the stack → O(1)`, "pop");
    setXp((prev) => Math.min(prev + 6, 160));

    setTimeout(() => {
      setStack((prev) => prev.slice(0, -1));
      setRemovingId(null);
    }, 350);
  }, [stack]);

  const handleClear = () => {
    setStack([]);
    setXp((prev) => Math.min(prev + 4, 160));
    showMessage("Stack cleared", "info");
  };

  const level = Math.floor(xp / 40) + 1;
  const currentLevelStart = Math.floor(xp / 40) * 40;
  const progressToNext = Math.min(((xp - currentLevelStart) / 40) * 100, 100);

  const messageColors = {
    info: "text-[#7b7b9e]",
    push: "text-[#34d399]",
    pop: "text-[#fb923c]",
    error: "text-[#f87171]",
  };

  return (
    <section id="visualizer" className="relative py-24 sm:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-14">
          <span className="tag bg-[rgba(124,92,252,0.06)] border border-[rgba(124,92,252,0.15)] text-[#a78bfa] mb-6 mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34d399]" />
            Interactive
          </span>
          <h2 className="section-heading mt-6">
            Stack{" "}
            <span className="gradient-text">Visualizer</span>
          </h2>
          <p className="text-[#7b7b9e] mt-5 max-w-lg mx-auto text-[15px] leading-relaxed tracking-tight">
            See the stack data structure in action. Push and pop elements to understand LIFO (Last In, First Out) behavior.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Controls */}
          <div className="glass-card p-7 sm:p-8 flex flex-col gap-6 !hover:transform-none">
            <div>
              <h3 className="text-lg font-bold mb-5 flex items-center gap-2.5 tracking-tight">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7c5cfc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>
                </svg>
                Controls
              </h3>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handlePush()}
                placeholder="Enter value (or random)"
                className="premium-input w-full"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              <button onClick={handlePush} className="glow-btn glow-btn-primary flex-1 min-w-[120px]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                </svg>
                Push
              </button>
              <button onClick={handlePop} className="glow-btn glow-btn-secondary flex-1 min-w-[120px]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                </svg>
                Pop
              </button>
              <button
                onClick={handleClear}
                className="text-[13px] font-medium px-5 py-3 rounded-xl border border-[rgba(248,113,113,0.15)] text-[#f87171] hover:bg-[rgba(248,113,113,0.06)] hover:border-[rgba(248,113,113,0.3)] transition-all duration-400"
              >
                Clear
              </button>
            </div>

            <div className="space-y-3">
              <div className={`text-[13px] font-medium ${messageColors[messageType]} transition-colors duration-300`}>
                {message}
              </div>
              <div className="flex gap-5 text-[11px] text-[#7b7b9e] font-medium">
                <span>Size: <span className="text-white font-bold">{stack.length}</span></span>
                <span>Top: <span className="text-white font-bold">{stack.length > 0 ? stack[stack.length - 1].value : "Empty"}</span></span>
                <span>Type: <span className="text-[#a78bfa] font-bold">LIFO</span></span>
              </div>
            </div>

            <div className="rounded-2xl border border-[rgba(124,92,252,0.12)] bg-[rgba(10,10,24,0.65)] p-4">
              <div className="flex items-center justify-between mb-2.5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#a78bfa]">Progress XP</p>
                <p className="text-[12px] font-bold text-white">Level {level} · {xp} XP</p>
              </div>
              <div className="h-2.5 rounded-full bg-[rgba(124,92,252,0.12)] overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#7c5cfc] via-[#a78bfa] to-[#22d3ee] transition-all duration-500"
                  style={{ width: `${progressToNext}%` }}
                />
              </div>
              <p className="text-[10px] text-[#6d6d92] mt-2">Earn XP by pushing, popping, and practicing stack operations.</p>
            </div>

            <div className="rounded-2xl border border-[rgba(124,92,252,0.12)] bg-[rgba(10,10,24,0.5)] p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#a78bfa] mb-3">Badges</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {badges.map((badge) => {
                  const unlocked = xp >= badge.requirement;
                  return (
                    <div
                      key={badge.id}
                      className={`rounded-xl border px-3 py-2.5 text-center transition-all duration-300 ${
                        unlocked
                          ? "border-[rgba(52,211,153,0.28)] bg-[rgba(52,211,153,0.07)]"
                          : "border-[rgba(124,92,252,0.12)] bg-[rgba(124,92,252,0.04)] opacity-80"
                      }`}
                    >
                      <div className="text-sm">{badge.icon}</div>
                      <p className={`text-[11px] font-semibold mt-1 ${unlocked ? "text-[#bbf7d0]" : "text-[#8a8aac]"}`}>{badge.label}</p>
                      <p className="text-[10px] text-[#63638a]">{badge.requirement} XP</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-auto pt-5 border-t border-[rgba(124,92,252,0.06)]">
              <div className="text-[11px] text-[#4a4a6a] space-y-1.5 font-medium">
                <p>💡 Push adds elements to the <strong className="text-[#7b7b9e]">top</strong> of the stack</p>
                <p>💡 Pop removes the <strong className="text-[#7b7b9e]">topmost</strong> element</p>
                <p>💡 Both operations run in <strong className="text-[#a78bfa]">O(1)</strong> time</p>
              </div>
            </div>
          </div>

          {/* Stack Visual */}
          <div className="glass-card p-7 sm:p-8 flex flex-col !hover:transform-none">
            <h3 className="text-lg font-bold mb-7 flex items-center gap-2.5 tracking-tight">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 12h16"/><path d="M12 4v16"/>
              </svg>
              Stack View
              <span className="text-[11px] text-[#7b7b9e] font-medium ml-auto">← TOP</span>
            </h3>

            <div className="flex-1 flex flex-col-reverse justify-start gap-2 min-h-[340px]">
              {stack.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center text-[#4a4a6a]">
                  <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" className="mb-4 opacity-25">
                    <rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 12h16"/>
                  </svg>
                  <p className="text-[13px] font-medium">Stack is empty</p>
                  <p className="text-[11px] mt-1.5">Push an element to get started</p>
                </div>
              ) : (
                stack.map((item, i) => {
                  const isTop = i === stack.length - 1;
                  const isRemoving = removingId === item.id;

                  return (
                    <div key={item.id} className={`${isRemoving ? "stack-item-exit" : "stack-item"} relative`}>
                      <div
                        className={`relative flex items-center justify-between px-6 py-4 rounded-xl bg-gradient-to-r stack-layer ${COLORS[item.colorIdx]} ${
                          isTop
                            ? "ring-2 ring-white/20 shadow-lg shadow-[rgba(124,92,252,0.2)]"
                            : "opacity-75"
                        }`}
                      >
                        <span className="font-extrabold text-white text-lg tracking-tight">{item.value}</span>
                        <div className="flex items-center gap-2.5">
                          <span className="text-[11px] text-white/50 font-medium">idx {i}</span>
                          {isTop && (
                            <span className="text-[9px] px-2.5 py-1 rounded-full bg-white/15 text-white font-bold uppercase tracking-[0.12em]">
                              TOP
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            <div className="mt-5 pt-4 border-t-2 border-dashed border-[rgba(124,92,252,0.12)]">
              <p className="text-[11px] text-center text-[#4a4a6a] font-medium tracking-wider">─── Stack Base ───</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
