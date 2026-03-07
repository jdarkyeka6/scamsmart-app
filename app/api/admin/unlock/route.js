// app/api/admin/unlock/route.js
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

// In-memory rate limiter
const rateLimitMap = new Map()
const RATE_LIMIT = 5           // max attempts
const RATE_WINDOW = 60 * 1000  // per 60 seconds
const LOCKOUT_TIME = 15 * 60 * 1000 // 15 min lockout after limit hit

function isRateLimited(ip) {
  const now = Date.now()
  const entry = rateLimitMap.get(ip) || { count: 0, windowStart: now, lockedUntil: 0 }

  // Check if still locked out
  if (entry.lockedUntil && now < entry.lockedUntil) {
    return true
  }

  // Reset window if expired
  if (now - entry.windowStart > RATE_WINDOW) {
    entry.count = 0
    entry.windowStart = now
    entry.lockedUntil = 0
  }

  entry.count++

  // Lock out if over limit
  if (entry.count > RATE_LIMIT) {
    entry.lockedUntil = now + LOCKOUT_TIME
    rateLimitMap.set(ip, entry)
    return true
  }

  rateLimitMap.set(ip, entry)
  return false
}

export async function POST(request) {
  try {
    // Get IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 'unknown'

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many attempts — try again later." },
        { status: 429 }
      )
    }

    const body = await request.json()
    const { password } = body

    if (!password) {
      return NextResponse.json({ error: "Password required." }, { status: 400 })
    }

    const ADMIN_SECRET = process.env.ADMIN_SECRET

    if (!ADMIN_SECRET) {
      console.error("ADMIN_SECRET env var not set!")
      return NextResponse.json({ error: "Server misconfiguration." }, { status: 500 })
    }

    if (password !== ADMIN_SECRET) {
      return NextResponse.json({ error: "Incorrect password." }, { status: 401 })
    }

    // Correct password — set admin cookie
    const cookieStore = await cookies()
    cookieStore.set("ss_admin", "1", {
      path: "/",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7 // 1 week
    })

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error("Admin unlock error:", error)
    return NextResponse.json({ error: "Server error." }, { status: 500 })
  }
}