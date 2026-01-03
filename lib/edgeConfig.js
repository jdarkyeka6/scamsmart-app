import { get } from "@vercel/edge-config";

export async function getLessons() {
  const lessons = await get("lessons");

  return {
    published: lessons?.published ?? [],
    drafts: lessons?.drafts ?? [],
  };
}