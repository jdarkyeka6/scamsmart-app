import { NextResponse } from "next/server";
import { kv } from "@vercel/kv";
import { requireAdmin, KEYS } from "@/app/lib/adminStore";

export async function GET(req) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false }, { status: 403 });
  const metrics = await kv.hgetall(KEYS.METRICS);
  return NextResponse.json({ ok: true, metrics: metrics || {} });
}
