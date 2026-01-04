import { NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { supabaseAdmin } from '@/lib/supabaseAdmin'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

function utcDayString() {
  const now = new Date()
  const y = now.getUTCFullYear()
  const m = String(now.getUTCMonth() + 1).padStart(2, '0')
  const d = String(now.getUTCDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

export async function POST(request) {
  try {
    const { message, context } = await request.json()

    // Get auth header
    const authHeader = request.headers.get('authorization')
    const token = authHeader?.startsWith('Bearer ') ? authHeader.slice(7) : null
    
    if (!token) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }

    // Verify user with token
    const { data: { user }, error: authError } = await supabaseAdmin.auth.getUser(token)
    if (authError || !user) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
    }

    const userId = user.id
    const day = utcDayString()

    // Check if user is premium
    const { data: progress } = await supabaseAdmin
      .from('user_progress')
      .select('is_premium')
      .eq('user_id', userId)
      .maybeSingle()

    const isPremium = progress?.is_premium || false

    // If not premium, check usage limits
    if (!isPremium) {
      const { data: usage } = await supabaseAdmin
        .from('user_usage')
        .select('messages_used')
        .eq('user_id', userId)
        .eq('day', day)
        .maybeSingle()

      const used = usage?.messages_used || 0

      if (used >= 5) {
        return NextResponse.json({
          error: 'Daily free limit reached (5/day). Upgrade to Premium for unlimited messages!',
          code: 'LIMIT_REACHED',
          remaining: 0
        }, { status: 429 })
      }

      // Increment usage
      const nextUsed = used + 1
      await supabaseAdmin
        .from('user_usage')
        .upsert({ user_id: userId, day, messages_used: nextUsed })
    }

    // Call Claude API
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1000,
      messages: [{
        role: 'user',
        content: `You are Mibo, a friendly AI assistant helping people learn about scams. 
        
Context: ${context || 'General scam education'}

User question: ${message}

Respond in a helpful, friendly way. Keep responses concise (2-3 sentences). Use emojis when appropriate.`
      }]
    })

    return NextResponse.json({ 
      reply: response.content[0].text 
    })
  } catch (error) {
    console.error('Chat error:', error)
    return NextResponse.json({ 
      error: 'Sorry, I had trouble processing that!' 
    }, { status: 500 })
  }
}