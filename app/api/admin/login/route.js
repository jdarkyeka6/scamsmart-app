const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'scamsmart2025'

export async function POST(request) {
  try {
    const { password } = await request.json()

    if (password === ADMIN_PASSWORD) {
      const response = new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Set-Cookie': `admin_auth=true; Path=/; HttpOnly; Max-Age=${60 * 60 * 24 * 7}; SameSite=Lax`
        }
      })
      return response
    }

    return new Response(JSON.stringify({ ok: false, error: 'Invalid password' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    console.error('Login error:', error)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}