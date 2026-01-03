import { NextResponse } from "next/server";
import { kv } from "@vercel/kv";
import { requireAdmin, KEYS } from "@/app/lib/adminStore";

export async function GET(req) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false }, { status: 403 });

  const bans = await kv.hgetall(KEYS.BANS);
  // bans is like { "email": "timestampMs" }
  return NextResponse.json({ ok: true, bans: bans || {} });
}

// Ban: { email, minutes }
export async function POST(req) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false }, { status: 403 });

  const body = await req.json().catch(() => null);
  const email = (body?.email || "").toLowerCase().trim();
  const minutes = Number(body?.minutes || 0);

  if (!email || !minutes || minutes <= 0) {
    return NextResponse.json({ ok: false, error: "Need email + minutes" }, { status: 400 });
  }

  const bannedUntil = Date.now() + minutes * 60_000;
  await kv.hset(KEYS.BANS, { [email]: String(bannedUntil) });

  return NextResponse.json({ ok: true, bannedUntil });
}

// Unban: /api/admin/bans?email=...
export async function DELETE(req) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false }, { status: 403 });

  const { searchParams } = new URL(req.url);
  const email = (searchParams.get("email") || "").toLowerCase().trim();
  if (!email) return NextResponse.json({ ok: false, error: "Missing email" }, { status: 400 });

  await kv.hdel(KEYS.BANS, email);
  return NextResponse.json({ ok: true });
}
