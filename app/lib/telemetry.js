export async function track(event, { sectionId, lessonId } = {}) {
  try {
    await fetch("/api/telemetry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ event, sectionId, lessonId }),
    });
  } catch {
    // ignore (privacy-safe + non-critical)
  }
}
