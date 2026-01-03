"use client";
import { useEffect, useMemo, useState } from "react";

export default function AdminPage() {
  const [tab, setTab] = useState("drafts");
  const [status, setStatus] = useState("");
  const [drafts, setDrafts] = useState([]);
  const [activeDraft, setActiveDraft] = useState(null);

  const [bans, setBans] = useState({});
  const [banEmail, setBanEmail] = useState("");
  const [banMinutes, setBanMinutes] = useState(60);

  const [metrics, setMetrics] = useState({});

  async function refreshDrafts() {
    const res = await fetch("/api/admin/drafts");
    const j = await res.json();
    if (j.ok) setDrafts(j.items);
  }

  async function loadDraft(id) {
    const res = await fetch(`/api/admin/drafts/${id}`);
    const j = await res.json();
    if (j.ok) setActiveDraft(j.draft);
  }

  async function uploadJsonFile(file) {
    setStatus("Reading file...");
    const text = await file.text();

    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch {
      setStatus("Invalid JSON ❌");
      return;
    }

    setStatus("Uploading draft...");
    const res = await fetch("/api/admin/drafts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ filename: file.name, data: parsed }),
    });
    const j = await res.json();

    if (j.ok) {
      setStatus("Uploaded ✅ (draft created)");
      await refreshDrafts();
    } else {
      setStatus("Upload failed: " + (j.error || "unknown"));
    }
  }

  async function publishDraft(id) {
    setStatus("Publishing...");
    const res = await fetch(`/api/admin/drafts/${id}`, { method: "POST" });
    const j = await res.json();
    if (j.ok) {
      setStatus(`Published ✅ Added ${j.addedSections} sections`);
      await refreshDrafts();
      await loadDraft(id);
    } else {
      setStatus("Publish failed: " + (j.error || "unknown"));
    }
  }

  async function deleteDraft(id) {
    if (!confirm("Delete this draft?")) return;
    const res = await fetch(`/api/admin/drafts?id=${encodeURIComponent(id)}`, { method: "DELETE" });
    const j = await res.json();
    if (j.ok) {
      setActiveDraft(null);
      await refreshDrafts();
    }
  }

  async function refreshBans() {
    const res = await fetch("/api/admin/bans");
    const j = await res.json();
    if (j.ok) setBans(j.bans || {});
  }

  async function banUser() {
    setStatus("Banning...");
    const res = await fetch("/api/admin/bans", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: banEmail, minutes: Number(banMinutes) }),
    });
    const j = await res.json();
    if (j.ok) {
      setStatus("Banned ✅");
      setBanEmail("");
      await refreshBans();
    } else {
      setStatus("Ban failed: " + (j.error || "unknown"));
    }
  }

  async function unban(email) {
    const res = await fetch(`/api/admin/bans?email=${encodeURIComponent(email)}`, { method: "DELETE" });
    const j = await res.json();
    if (j.ok) await refreshBans();
  }

  async function refreshMetrics() {
    const res = await fetch("/api/admin/metrics");
    const j = await res.json();
    if (j.ok) setMetrics(j.metrics || {});
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    // After logout, middleware should block
    window.location.reload();
  }

  useEffect(() => {
    refreshDrafts();
    refreshBans();
    refreshMetrics();
  }, []);

  const draftPreview = useMemo(() => {
    const sections = activeDraft?.data?.sections || [];
    let totalLessons = 0;
    let totalQuestions = 0;

    for (const s of sections) {
      const lessons = s.lessons || [];
      totalLessons += lessons.length;
      for (const l of lessons) totalQuestions += (l.questions || []).length;
    }

    return { sections, totalLessons, totalQuestions };
  }, [activeDraft]);

  return (
    <main style={{ maxWidth: 1100, margin: "30px auto", padding: 20 }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center" }}>
        <div>
          <h1 style={{ fontSize: 30, fontWeight: 900 }}>ScamSmart Admin</h1>
          <div style={{ opacity: 0.8 }}>{status}</div>
        </div>
        <button onClick={logout} style={{ padding: "10px 14px", borderRadius: 10 }}>
          Log out
        </button>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", gap: 10, marginTop: 18, flexWrap: "wrap" }}>
        <TabBtn active={tab === "drafts"} onClick={() => setTab("drafts")}>Draft Review</TabBtn>
        <TabBtn active={tab === "bans"} onClick={() => setTab("bans")}>Bans</TabBtn>
        <TabBtn active={tab === "metrics"} onClick={() => setTab("metrics")}>Analytics</TabBtn>
      </div>

      {/* Drafts */}
      {tab === "drafts" && (
        <section style={{ marginTop: 18, display: "grid", gridTemplateColumns: "360px 1fr", gap: 16 }}>
          <div style={{ border: "1px solid rgba(255,255,255,0.12)", borderRadius: 14, padding: 14 }}>
            <h2 style={{ fontSize: 16, fontWeight: 800 }}>Upload JSON → Draft</h2>
            <input
              type="file"
              accept=".json,application/json"
              style={{ marginTop: 10 }}
              onChange={(e) => e.target.files?.[0] && uploadJsonFile(e.target.files[0])}
            />

            <div style={{ marginTop: 16, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h3 style={{ fontSize: 14, fontWeight: 800 }}>Drafts</h3>
              <button onClick={refreshDrafts} style={{ padding: "6px 10px", borderRadius: 10 }}>Refresh</button>
            </div>

            <div style={{ marginTop: 10, display: "grid", gap: 10 }}>
              {drafts.map((d) => (
                <button
                  key={d.id}
                  onClick={() => loadDraft(d.id)}
                  style={{
                    textAlign: "left",
                    padding: 10,
                    borderRadius: 12,
                    border: "1px solid rgba(255,255,255,0.12)",
                    opacity: activeDraft?.id === d.id ? 1 : 0.85,
                  }}
                >
                  <div style={{ fontWeight: 800 }}>{d.filename}</div>
                  <div style={{ fontSize: 12, opacity: 0.75 }}>{d.uploadedAt}</div>
                  <div style={{ fontSize: 12, opacity: 0.75 }}>Status: {d.status}</div>
                </button>
              ))}
              {!drafts.length && <div style={{ opacity: 0.7 }}>No drafts yet.</div>}
            </div>
          </div>

          <div style={{ border: "1px solid rgba(255,255,255,0.12)", borderRadius: 14, padding: 14 }}>
            <h2 style={{ fontSize: 16, fontWeight: 800 }}>Review</h2>

            {!activeDraft ? (
              <div style={{ marginTop: 10, opacity: 0.75 }}>
                Pick a draft on the left to review.
              </div>
            ) : (
              <>
                <div style={{ marginTop: 10, display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <Pill label={`Sections: ${draftPreview.sections.length}`} />
                  <Pill label={`Lessons: ${draftPreview.totalLessons}`} />
                  <Pill label={`Questions: ${draftPreview.totalQuestions}`} />
                  <Pill label={`Status: ${activeDraft.status}`} />
                </div>

                <div style={{ marginTop: 12, display: "flex", gap: 10 }}>
                  <button
                    onClick={() => publishDraft(activeDraft.id)}
                    style={{ padding: "10px 14px", borderRadius: 10 }}
                    disabled={activeDraft.status === "published"}
                  >
                    Publish to Live
                  </button>

                  <button
                    onClick={() => deleteDraft(activeDraft.id)}
                    style={{ padding: "10px 14px", borderRadius: 10 }}
                  >
                    Delete draft
                  </button>
                </div>

                <div style={{ marginTop: 16 }}>
                  <h3 style={{ fontSize: 14, fontWeight: 900 }}>Preview (first 3 sections)</h3>
                  <div style={{ marginTop: 10, display: "grid", gap: 10 }}>
                    {draftPreview.sections.slice(0, 3).map((s, i) => (
                      <div key={i} style={{ padding: 12, borderRadius: 12, border: "1px solid rgba(255,255,255,0.12)" }}>
                        <div style={{ fontWeight: 900 }}>{s.title || `Section ${i + 1}`}</div>
                        <div style={{ opacity: 0.75 }}>{(s.lessons || []).length} lessons</div>
                        <details style={{ marginTop: 8 }}>
                          <summary style={{ cursor: "pointer" }}>Show first lesson + questions</summary>
                          <div style={{ marginTop: 8, opacity: 0.9 }}>
                            {s.lessons?.[0] ? (
                              <>
                                <div style={{ fontWeight: 800 }}>{s.lessons[0].title || "Lesson 1"}</div>
                                <ul style={{ marginTop: 6 }}>
                                  {(s.lessons[0].questions || []).slice(0, 10).map((q, qi) => (
                                    <li key={qi} style={{ opacity: 0.85 }}>{q.prompt || q.question || JSON.stringify(q).slice(0, 120)}</li>
                                  ))}
                                </ul>
                              </>
                            ) : (
                              <div>No lessons in this section.</div>
                            )}
                          </div>
                        </details>
                      </div>
                    ))}
                    {draftPreview.sections.length > 3 && <div style={{ opacity: 0.7 }}>…and more sections in this draft.</div>}
                  </div>
                </div>
              </>
            )}
          </div>
        </section>
      )}

      {/* Bans */}
      {tab === "bans" && (
        <section style={{ marginTop: 18, border: "1px solid rgba(255,255,255,0.12)", borderRadius: 14, padding: 14 }}>
          <h2 style={{ fontSize: 16, fontWeight: 800 }}>Bans (by email)</h2>
          <div style={{ marginTop: 10, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <input
              value={banEmail}
              onChange={(e) => setBanEmail(e.target.value)}
              placeholder="user@email.com"
              style={{ padding: 10, borderRadius: 10, minWidth: 260 }}
            />
            <input
              type="number"
              value={banMinutes}
              onChange={(e) => setBanMinutes(e.target.value)}
              style={{ padding: 10, borderRadius: 10, width: 140 }}
              min={1}
            />
            <button onClick={banUser} style={{ padding: "10px 14px", borderRadius: 10 }}>Ban</button>
            <button onClick={refreshBans} style={{ padding: "10px 14px", borderRadius: 10 }}>Refresh</button>
          </div>

          <div style={{ marginTop: 14, display: "grid", gap: 10 }}>
            {Object.keys(bans).length === 0 && <div style={{ opacity: 0.7 }}>No bans.</div>}
            {Object.entries(bans).map(([email, until]) => {
              const ms = Number(until);
              const remainingMin = Math.max(0, Math.round((ms - Date.now()) / 60000));
              return (
                <div key={email} style={{ display: "flex", justifyContent: "space-between", gap: 10, padding: 12, borderRadius: 12, border: "1px solid rgba(255,255,255,0.12)" }}>
                  <div>
                    <div style={{ fontWeight: 900 }}>{email}</div>
                    <div style={{ opacity: 0.8, fontSize: 13 }}>Remaining: {remainingMin} min</div>
                  </div>
                  <button onClick={() => unban(email)} style={{ padding: "10px 14px", borderRadius: 10 }}>
                    Unban
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Metrics */}
      {tab === "metrics" && (
        <section style={{ marginTop: 18, border: "1px solid rgba(255,255,255,0.12)", borderRadius: 14, padding: 14 }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "center" }}>
            <h2 style={{ fontSize: 16, fontWeight: 800 }}>Analytics (counts only)</h2>
            <button onClick={refreshMetrics} style={{ padding: "10px 14px", borderRadius: 10 }}>Refresh</button>
          </div>

          <div style={{ marginTop: 12, display: "grid", gap: 10 }}>
            <MetricRow label="Total lesson_completed" value={metrics["total:lesson_completed"] || 0} />
            <MetricRow label="Total question_answered" value={metrics["total:question_answered"] || 0} />
            <MetricRow label="Total signup" value={metrics["total:signup"] || 0} />
            <MetricRow label="Total signin" value={metrics["total:signin"] || 0} />
          </div>

          <p style={{ marginTop: 12, opacity: 0.75, fontSize: 13 }}>
            This stores **only counts**, not emails or names. Privacy-safe ✅
          </p>
        </section>
      )}
    </main>
  );
}

function TabBtn({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 12px",
        borderRadius: 999,
        border: "1px solid rgba(255,255,255,0.12)",
        opacity: active ? 1 : 0.7,
        fontWeight: 800,
      }}
    >
      {children}
    </button>
  );
}

function Pill({ label }) {
  return (
    <span style={{ padding: "6px 10px", borderRadius: 999, border: "1px solid rgba(255,255,255,0.12)", opacity: 0.9 }}>
      {label}
    </span>
  );
}

function MetricRow({ label, value }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", gap: 10, padding: 12, borderRadius: 12, border: "1px solid rgba(255,255,255,0.12)" }}>
      <div style={{ fontWeight: 800 }}>{label}</div>
      <div style={{ fontWeight: 900 }}>{value}</div>
    </div>
  );
}
