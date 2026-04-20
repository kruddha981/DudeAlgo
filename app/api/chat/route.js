import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are DudeAlgo AI — a friendly, patient, and encouraging DSA tutor. Your role is to help beginners understand Data Structures and Algorithms.

Rules:
- Always explain concepts in simple, beginner-friendly language
- Use real-world analogies to make concepts relatable
- Keep responses concise but thorough (max 300 words)
- Use bullet points and code snippets when helpful
- Include time/space complexity when relevant
- Use emojis sparingly to keep it fun
- If a question is not about DSA or programming, politely redirect
- Format with markdown: **bold**, \`code\`, bullet points
- End with an encouraging note or a follow-up question

You are an expert in: Arrays, Linked Lists, Stacks, Queues, Trees, Graphs, Hash Tables, Heaps, Sorting, Searching, Dynamic Programming, Recursion, Greedy Algorithms, and Big O Notation.`;

export async function POST(request) {
  try {
    const { message, history } = await request.json();
    const trimmedMessage = typeof message === "string" ? message.trim() : "";

    if (!trimmedMessage) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    if (trimmedMessage.length > 800) {
      return NextResponse.json(
        { error: "Message is too long. Keep it under 800 characters." },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Gemini API key is not configured. Add GEMINI_API_KEY to your .env.local file." },
        { status: 500 }
      );
    }

    const ai = new GoogleGenAI({ apiKey });

    // Build conversation history for context
    const contents = [];
    
    if (history && Array.isArray(history)) {
      for (const msg of history.slice(-8)) {
        if (!msg || typeof msg.text !== "string") continue;
        const normalizedText = msg.text.trim().slice(0, 1200);
        if (!normalizedText) continue;

        contents.push({
          role: msg.role === "ai" ? "model" : "user",
          parts: [{ text: normalizedText }],
        });
      }
    }

    contents.push({
      role: "user",
      parts: [{ text: trimmedMessage }],
    });

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        maxOutputTokens: 1024,
        temperature: 0.65,
        topP: 0.9,
      },
    });

    const text = response.text || "I couldn't generate a response. Please try again!";

    return NextResponse.json({ response: text });
  } catch (error) {
    console.error("Gemini API error:", error);

    const message = error?.message || "";
    const errorMessage = message.includes("API_KEY")
      ? "Invalid API key. Please check your GEMINI_API_KEY in .env.local."
      : message.includes("429")
      ? "Rate limit reached. Please wait a moment and try again."
      : "Something went wrong with the AI. Please try again!";

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
