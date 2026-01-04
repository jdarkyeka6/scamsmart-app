export async function POST() {
  const response = new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Set-Cookie': 'admin_auth=; Path=/; Max-Age=0'
    }
  })
  return response
}