import { NextResponse } from "next/server";
import { requireAdmin } from "@/app/lib/adminStore";

export async function POST(req) {
  // even if not admin, we can clear cookie
  const res = NextResponse.json({ ok: true, wasAdmin: requireAdmin(req) });
  res.cookies.set("ss_admin", "", { path: "/", maxAge: 0 });
  return res;
}
