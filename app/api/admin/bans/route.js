import { NextResponse } from "next/server";
import { kv } from "@vercel/kv";
import { KEYS } from "@/lib/adminStore";

function requireAdmin(req) {
  const adminAuth = req.cookies.get("admin_auth")?.value;
  return adminAuth === "true";
}

export async function GET(req) {
  if (!requireAdmin(req)) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 403 });
  }

  try {
    const bans = await kv.hgetall(KEYS.BANS);
    return NextResponse.json({ ok: true, bans: bans || {} });
  } catch (error) {
    console.error("Ban GET error:", error);
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  if (!requireAdmin(req)) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 403 });
  }

  try {
    const body = await req.json().catch(() => null);
    const email = (body?.email || "").toLowerCase().trim();
    const minutes = Number(body?.minutes || 0);

    if (!email || !minutes || minutes <= 0) {
      return NextResponse.json({ ok: false, error: "Need email + minutes" }, { status: 400 });
    }

    const bannedUntil = Date.now() + minutes * 60_000;
    await kv.hset(KEYS.BANS, { [email]: String(bannedUntil) });

    return NextResponse.json({ ok: true, bannedUntil });
  } catch (error) {
    console.error("Ban POST error:", error);
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(req) {
  if (!requireAdmin(req)) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 403 });
  }

  try {
    const { searchParams } = new URL(req.url);
    const email = (searchParams.get("email") || "").toLowerCase().trim();
    
    if (!email) {
      return NextResponse.json({ ok: false, error: "Missing email" }, { status: 400 });
    }

    await kv.hdel(KEYS.BANS, email);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Ban DELETE error:", error);
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }
}