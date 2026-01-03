// app/api/chat/route.js
import { NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk'; // Or OpenAI

// Initialize AI (Make sure ANTHROPIC_API_KEY is in your Vercel Environment Variables)
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(req) {
  try {
    const { messages } = await req.json();

    // --- REMOVED THE LIMIT CHECK HERE --- 
    // If you had code here checking database counts, I have deleted it.
    
    // Send to AI
    const response = await anthropic.messages.create({
      model: "claude-3-haiku-20240307",
      max_tokens: 300,
      messages: messages,
      system: "You are Mibo, a friendly robot helper who teaches people about scams. Keep answers short and simple.",
    });

    const reply = response.content[0].text;

    return NextResponse.json({ role: 'assistant', content: reply });

  } catch (error) {
    console.error("Chat error:", error);
    return NextResponse.json({ error: "Mibo is sleeping (Error)" }, { status: 500 });
  }
}