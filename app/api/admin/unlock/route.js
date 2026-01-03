import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json().catch(() => null);
  const key = body?.key || "";

  if (!process.env.SCAMSMART_ADMIN_KEY) {
    return NextResponse.json(
      { ok: false, error: "Missing SCAMSMART_ADMIN_KEY env var" },
      { status: 500 }
    );
  }

  if (key !== process.env.SCAMSMART_ADMIN_KEY) {
    return NextResponse.json({ ok: false }, { status: 403 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set("ss_admin", "1", {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days
  });
  return res;
}

export async function GET() {
  return NextResponse.json({ ok: false, error: "Use POST" }, { status: 405 });
}
