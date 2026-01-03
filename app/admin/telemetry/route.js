import { NextResponse } from "next/server";
import { kv } from "@vercel/kv";
import { KEYS } from "@/app/lib/adminStore";

export async function POST(req) {
  const body = await req.json().catch(() => null);

  // Only allow a small set of event names (privacy-safe)
  const event = body?.event;
  const allowed = ["lesson_completed", "question_answered", "signup", "signin"];
  if (!allowed.includes(event)) return NextResponse.json({ ok: false }, { status: 400 });

  // Optional: include sectionId/lessonId but NO emails / names
  const sectionId = body?.sectionId || "unknown";
  const lessonId = body?.lessonId || "unknown";

  const day = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

  // Counters:
  // total:lesson_completed
  // day:2026-01-03:lesson_completed
  // day:...:lesson_completed:section:...
  await kv.hincrby(KEYS.METRICS, `total:${event}`, 1);
  await kv.hincrby(KEYS.METRICS, `day:${day}:${event}`, 1);
  await kv.hincrby(KEYS.METRICS, `day:${day}:${event}:section:${sectionId}`, 1);
  await kv.hincrby(KEYS.METRICS, `day:${day}:${event}:lesson:${lessonId}`, 1);

  return NextResponse.json({ ok: true });
}
