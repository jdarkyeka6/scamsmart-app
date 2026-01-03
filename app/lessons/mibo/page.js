"use client";

import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function MiboLessonPage() {
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);
  const [usage, setUsage] = useState(null);

  const [messages, setMessages] = useState([
    { role: "assistant", text: "Welcome to the Mibo lesson 🙂 Ask me anything about scams!" },
  ]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const authHeaders = useMemo(() => {
    if (!token) return {};
    return { Authorization: `Bearer ${token}` };
  }, [token]);

  async function refreshSessionAndUsage() {
    setLoading(true);
    setError("");

    const { data } = await supabase.auth.getSession();
    const t = data?.session?.access_token || null;
    setToken(t);

    if (!t) {
      setUsage(null);
      setLoading(false);
      return;
    }

    const r = await fetch("/api/usage", { headers: { Authorization: `Bearer ${t}` }, cache: "no-store" });
    const j = await r.json();
    if (!r.ok) setError(j?.error || "Failed to load usage");
    else setUsage(j);

    setLoading(false);
  }

  useEffect(() => {
    refreshSessionAndUsage();

    const { data: sub } = supabase.auth.onAuthStateChange(() => {
      refreshSessionAndUsage();
    });

    return () => sub?.subscription?.unsubscribe?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function send() {
    if (!input.trim() || sending) return;
    setError("");

    if (!token) {
      setError("Please log in first, then come back to this lesson.");
      return;
    }

    const text = input.trim();
    setInput("");
    setSending(true);
    setMessages((m) => [...m, { role: "user", text }]);

    const r = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json", ...authHeaders },
      body: JSON.stringify({ message: text }),
    });

    const j = await r.json();

    if (!r.ok) {
      setError(j?.error || "Something went wrong.");
      if (j?.code === "LIMIT_REACHED") {
        setMessages((m) => [
          ...m,
          { role: "assistant", text: "You hit the free daily limit 😅 Upgrade for unlimited, or come back tomorrow." },
        ]);
      }
      setSending(false);
      await refreshSessionAndUsage();
      return;
    }

    setMessages((m) => [...m, { role: "assistant", text: j.reply }]);
    setSending(false);

    setUsage((u) => (u ? { ...u, plan: j.plan, used: j.used, remaining: j.remaining } : u));
    await refreshSessionAndUsage();
  }

  return (
    <main style={{ padding: 20, maxWidth: 900, margin: "0 auto", fontFamily: "system-ui" }}>
      <h1 style={{ marginBottom: 6 }}>Lesson: Mibo Chat Coach</h1>

      <div style={{ marginBottom: 14, opacity: 0.85 }}>
        {loading ? (
          <span>Loading…</span>
        ) : !token ? (
          <span>Not logged in. Log in, then return to this lesson.</span>
        ) : usage?.plan === "paid" ? (
          <span>✅ Paid: unlimited messages</span>
        ) : (
          <span>
            Free: <b>{usage?.remaining ?? "?"}</b> / 5 messages left today{" "}
            <a href="/upgrade" style={{ marginLeft: 10 }}>Upgrade</a>
          </span>
        )}
      </div>

      <div style={{ border: "1px solid #ddd", borderRadius: 12, padding: 12, height: 420, overflow: "auto" }}>
        {messages.map((m, i) => (
          <div key={i} style={{ margin: "10px 0" }}>
            <div style={{ fontSize: 12, opacity: 0.7 }}>{m.role.toUpperCase()}</div>
            <div style={{ whiteSpace: "pre-wrap" }}>{m.text}</div>
          </div>
        ))}
      </div>

      {error ? <div style={{ marginTop: 10, color: "crimson" }}>{error}</div> : null}

      <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Ask Mibo…"
          style={{ flex: 1, padding: 12, borderRadius: 10, border: "1px solid #ddd" }}
          disabled={sending || !token}
        />
        <button
          onClick={send}
          disabled={sending || !token}
          style={{ padding: "12px 16px", borderRadius: 10, border: "1px solid #ddd" }}
        >
          {sending ? "Sending…" : "Send"}
        </button>
      </div>
    </main>
  );
}
