import { supabaseAdmin } from "@/lib/supabaseAdmin";

function utcDayString() {
  const now = new Date();
  const y = now.getUTCFullYear();
  const m = String(now.getUTCMonth() + 1).padStart(2, "0");
  const d = String(now.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${d}`; // YYYY-MM-DD
}

async function getUserIdFromBearer(req) {
  const auth = req.headers.get("authorization") || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : null;
  if (!token) return { error: "Missing auth token" };

  const { data, error } = await supabaseAdmin.auth.getUser(token);
  if (error || !data?.user) return { error: "Invalid auth token" };

  return { userId: data.user.id };
}

export async function GET(req) {
  const { userId, error } = await getUserIdFromBearer(req);
  if (error) return Response.json({ error }, { status: 401 });

  const day = utcDayString();

  // Ensure profile exists
  const { data: profile } = await supabaseAdmin
    .from("user_profiles")
    .select("plan")
    .eq("user_id", userId)
    .maybeSingle();

  if (!profile) {
    await supabaseAdmin.from("user_profiles").insert({ user_id: userId, plan: "free" });
  }

  const plan = profile?.plan ?? "free";

  const { data: usage } = await supabaseAdmin
    .from("user_usage")
    .select("messages_used")
    .eq("user_id", userId)
    .eq("day", day)
    .maybeSingle();

  const used = usage?.messages_used ?? 0;
  const remaining = plan === "paid" ? null : Math.max(0, 5 - used);

  return Response.json({ plan, day, used, remaining });
}
