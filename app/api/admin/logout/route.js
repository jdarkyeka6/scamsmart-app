import { cookies } from 'next/headers'

export async function POST() {
  cookies().delete('admin_auth')
  return Response.json({ ok: true })
}