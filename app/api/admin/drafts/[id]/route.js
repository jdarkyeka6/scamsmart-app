import { NextResponse } from "next/server";
import { requireAdmin, getDraft, saveDraft, getLive, setLive } from "@/app/lib/adminStore";

export async function GET(req, { params }) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false }, { status: 403 });
  const draft = await getDraft(params.id);
  if (!draft) return NextResponse.json({ ok: false, error: "Not found" }, { status: 404 });
  return NextResponse.json({ ok: true, draft });
}

// Publish draft → merges into LIVE (adds sections at end)
export async function POST(req, { params }) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false }, { status: 403 });

  const draft = await getDraft(params.id);
  if (!draft) return NextResponse.json({ ok: false, error: "Not found" }, { status: 404 });

  const live = await getLive();

  const draftSections = draft.data?.sections || [];
  if (!Array.isArray(live.sections)) live.sections = [];

  // Simple publish rule: append sections
  live.sections = [...live.sections, ...draftSections];

  await setLive(live);

  draft.status = "published";
  await saveDraft(draft);

  return NextResponse.json({ ok: true, addedSections: draftSections.length });
}
