import { NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// In-memory rate limiter (resets on server restart)
// For production, replace with Redis or Upstash
const rateLimitMap = new Map()
const RATE_LIMIT = 20        // max requests
const RATE_WINDOW = 60 * 1000 // per 60 seconds

function isRateLimited(userId) {
  const now = Date.now()
  const userLimit = rateLimitMap.get(userId) || { count: 0, windowStart: now }

  // Reset window if expired
  if (now - userLimit.windowStart > RATE_WINDOW) {
    userLimit.count = 0
    userLimit.windowStart = now
  }

  userLimit.count++
  rateLimitMap.set(userId, userLimit)

  return userLimit.count > RATE_LIMIT
}

const MIBO_SYSTEM_PROMPT = `You are Mibo 🤖, the friendly AI assistant for ScamSmart (scamsmart.click) — an educational platform that teaches people how to spot scams.

## Who you are
- Helpful, warm, and direct — not preachy or alarmist
- You live on ScamSmart. Never flag scamsmart.click or its subpages as suspicious.

## URL Evaluation
You can now search the web to evaluate URLs. When a user asks about a website:
- Actually look it up before giving a verdict
- Give a clear verdict: "looks legit", "be cautious", or "looks suspicious" with specific reasons
- Don't flag sites just because of their TLD (.click, .info etc)
- Major brands (google.com, amazon.com, gov sites) are likely legit unless the URL has clear red flags

## Scam advice
- Be specific, not generic. Name the actual red flags relevant to what the user asked
- Don't assume everything is a scam. Stay calibrated and balanced.
- If unsure, say so honestly

## Tone
- Conversational and confident
- 2-3 sentences max unless the question needs more
- Emojis sparingly (1-2 per message max)`

export async function POST(request) {
  try {
    // ── 1. Auth check ──────────────────────────────────────────────
    const supabase = createRouteHandlerClient({ cookies })
    const { data: { session }, error: sessionError } = await supabase.auth.getSession()

    if (sessionError || !session) {
      return NextResponse.json(
        { error: 'Unauthorized — please sign in to use Mibo.' },
        { status: 401 }
      )
    }

    const userId = session.user.id

    // ── 2. Rate limit check ────────────────────────────────────────
    if (isRateLimited(userId)) {
      return NextResponse.json(
        { error: 'Too many requests — slow down a little! 😅' },
        { status: 429 }
      )
    }

    // ── 3. Parse & validate body ───────────────────────────────────
    const body = await request.json()
    const { message, context, conversationHistory = [] } = body

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json(
        { error: 'Message is required.' },
        { status: 400 }
      )
    }

    // Limit message length to prevent prompt stuffing attacks
    if (message.length > 2000) {
      return NextResponse.json(
        { error: 'Message too long (max 2000 characters).' },
        { status: 400 }
      )
    }

    // Limit conversation history depth to prevent token abuse
    const trimmedHistory = conversationHistory.slice(-10)

    // ── 4. Call Claude ─────────────────────────────────────────────
    const messages = [
      ...trimmedHistory,
      { role: 'user', content: message.trim() }
    ]

    const response = await anthropic.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 1000,
      system: MIBO_SYSTEM_PROMPT + (context ? `\n\nCurrent lesson context: ${context}` : ''),
      tools: [
        {
          type: 'web_search_20250305',
          name: 'web_search'
        }
      ],
      messages
    })

    const textContent = response.content
      .filter(block => block.type === 'text')
      .map(block => block.text)
      .join('')

    return NextResponse.json({ response: textContent })

  } catch (error) {
    console.error('Chat error:', error)
    return NextResponse.json(
      { error: 'Sorry, I had trouble processing that!' },
      { status: 500 }
    )
  }
}