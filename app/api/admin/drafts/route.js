import { NextResponse } from "next/server";
import crypto from "crypto";
import { requireAdmin, nowISO, listDrafts, getDraft, saveDraft, deleteDraft } from "@/app/lib/adminStore";

export async function GET(req) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false }, { status: 403 });

  const ids = await listDrafts();
  const items = [];
  for (const id of ids) {
    const d = await getDraft(id);
    if (d) items.push({ id: d.id, filename: d.filename, uploadedAt: d.uploadedAt, status: d.status });
  }
  // newest first
  items.sort((a, b) => (a.uploadedAt < b.uploadedAt ? 1 : -1));
  return NextResponse.json({ ok: true, items });
}

// Upload a JSON file as a DRAFT
export async function POST(req) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false }, { status: 403 });

  const body = await req.json().catch(() => null);
  const filename = body?.filename || "upload.json";
  const data = body?.data;

  if (!data || !Array.isArray(data.sections)) {
    return NextResponse.json(
      { ok: false, error: "JSON must be { sections: [...] }" },
      { status: 400 }
    );
  }

  const id = crypto.randomBytes(8).toString("hex");
  const draft = {
    id,
    filename,
    uploadedAt: nowISO(),
    status: "draft",
    data,
  };

  await saveDraft(draft);
  return NextResponse.json({ ok: true, id });
}

export async function DELETE(req) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false }, { status: 403 });
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) return NextResponse.json({ ok: false, error: "Missing id" }, { status: 400 });
  await deleteDraft(id);
  return NextResponse.json({ ok: true });
}
