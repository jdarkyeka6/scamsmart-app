import { kv } from "@vercel/kv";

export function requireAdmin(req) {
  return req.cookies.get("ss_admin")?.value === "1";
}

export function nowISO() {
  return new Date().toISOString();
}

// Keys
export const KEYS = {
  LIVE: "scamsmart:live:lessons_v1",          // published content
  DRAFT_INDEX: "scamsmart:drafts:index_v1",   // list of draft ids
  DRAFT_PREFIX: "scamsmart:drafts:item:",     // item storage
  BANS: "scamsmart:bans_v1",                  // hash: email -> bannedUntilMs
  METRICS: "scamsmart:metrics_v1",            // hash counters
};

// Draft format:
// { id, filename, uploadedAt, status: "draft"|"published", data }
export async function listDrafts() {
  return (await kv.lrange(KEYS.DRAFT_INDEX, 0, -1)) || [];
}

export async function getDraft(id) {
  return await kv.get(KEYS.DRAFT_PREFIX + id);
}

export async function saveDraft(draft) {
  await kv.set(KEYS.DRAFT_PREFIX + draft.id, draft);
  // add to list if not already present
  const ids = await listDrafts();
  if (!ids.includes(draft.id)) {
    await kv.lpush(KEYS.DRAFT_INDEX, draft.id);
  }
}

export async function deleteDraft(id) {
  await kv.del(KEYS.DRAFT_PREFIX + id);
  // remove from list
  await kv.lrem(KEYS.DRAFT_INDEX, 0, id);
}

export async function getLive() {
  return (await kv.get(KEYS.LIVE)) || { sections: [] };
}

export async function setLive(data) {
  await kv.set(KEYS.LIVE, data);
}
