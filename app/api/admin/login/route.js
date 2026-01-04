import { cookies } from 'next/headers'

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'scamsmart2025'

export async function POST(request) {
  const { password } = await request.json()

  if (password === ADMIN_PASSWORD) {
    cookies().set('admin_auth', 'true', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7 // 7 days
    })

    return Response.json({ ok: true })
  }

  return Response.json({ ok: false, error: 'Invalid password' }, { status: 401 })
}