import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are DudeAlgo Code Mentor.
You explain algorithm code to beginners in a simple, step-by-step style.

Rules:
- Stay focused on DSA and programming questions.
- Explain using plain language first, then technical detail.
- Include intuition, dry-run style explanation when useful.
- Mention time and space complexity if relevant.
- Keep response concise (max 280 words).
- End with one short follow-up suggestion for practice.`;

export async function POST(request) {
  try {
    const { algorithm, language, code, question } = await request.json();

    const normalizedQuestion = typeof question === "string" ? question.trim() : "";
    if (!normalizedQuestion) {
      return NextResponse.json({ error: "Question is required" }, { status: 400 });
    }

    if (normalizedQuestion.length > 900) {
      return NextResponse.json(
        { error: "Question is too long. Keep it under 900 characters." },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Gemini API key is missing. Add GEMINI_API_KEY to .env.local." },
        { status: 500 }
      );
    }

    const ai = new GoogleGenAI({ apiKey });

    const prompt = `Algorithm: ${algorithm || "Unknown"}
Language: ${language || "Unknown"}

Code:
${code || "No code provided"}

Student Question:
${normalizedQuestion}`;

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.5,
        maxOutputTokens: 900,
        topP: 0.9,
      },
    });

    return NextResponse.json({
      response: response.text || "I could not generate an explanation. Please try again.",
    });
  } catch (error) {
    console.error("Code help API error:", error);

    const message = error?.message || "";
    const mapped = message.includes("429")
      ? "Rate limit reached. Please wait a bit and retry."
      : message.includes("API_KEY")
      ? "Invalid API key. Check GEMINI_API_KEY in .env.local."
      : "Gemini request failed. Please try again.";

    return NextResponse.json({ error: mapped }, { status: 500 });
  }
}
