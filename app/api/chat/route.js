import { NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

export async function POST(request) {
  try {
    const { message, context } = await request.json()

    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1000,
      messages: [{
        role: 'user',
        content: `You are Mibo, a friendly AI assistant helping people learn about scams. Context: ${context || 'General scam education'}. User question: ${message}. Respond in a helpful, friendly way. Keep responses concise (2-3 sentences). Use emojis when appropriate.`
      }]
    })

    return NextResponse.json({
      response: response.content[0].text
    })
  } catch (error) {
    console.error('Chat error:', error)
    return NextResponse.json({
      error: 'Sorry, I had trouble processing that!'
    }, { status: 500 })
  }
}
