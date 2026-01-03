"use client";

import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function ChatPage() {
  const [loading, setLoading] = useState(true);
  const [sessionToken, setSessionToken] = useState(null);

  const [usage, setUsage] = useState(null);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Hey 🙂 I’m Mibo. Ask me anything!" },
  ]);

  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const authHeaders = useMemo(() => {
    if (!sessionToken) return {};
    return { Authorization: `Bearer ${sessionToken}` };
  }, [sessionToken]);

  async function loadSessionAndUsage() {
    setLoading(true);
    setError("");

    const { data } = await supabase.auth.getSession();
    const token = data?.session?.access_token || null;

    setSessionToken(token);

    if (!token) {
      setUsage(null);
      setLoading(false);
      return;
    }

    const r = await fetch("/api/usage", { headers: { Authorization: `Bearer ${token}` } });
    const j = await r.json();

    if (!r.ok) setError(j?.error || "Failed to load usage");
    else setUsage(j);

    setLoading(false);
  }

  useEffect(() => {
    loadSessionAndUsage();

    const { data: sub } = supabase.auth.onAuthStateChange(() => {
      loadSessionAndUsage();
    });

    return () => sub?.subscription?.unsubscribe?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function send() {
    if (!input.trim() || sending) return;
    setError("");

    if (!sessionToken) {
      setError("Please log in first.");
      return;
    }

    const userText = input.trim();
    setInput("");
    setSending(true);

    setMessages((m) => [...m, { role: "user", text: userText }]);

    const r = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...authHeaders,
      },
      body: JSON.stringify({ message: userText }),
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
      // Refresh usage anyway
      await loadSessionAndUsage();
      return;
    }

    setMessages((m) => [...m, { role: "assistant", text: j.reply }]);
    setSending(false);

    // Update usage from response + refresh
    setUsage((u) =>
      u
        ? { ...u, plan: j.plan, used: j.used, remaining: j.remaining }
        : u
    );
    await loadSessionAndUsage();
  }

  return (
    <main style={{ padding: 20, maxWidth: 900, margin: "0 auto", fontFamily: "system-ui" }}>
      <h1 style={{ marginBottom: 6 }}>Mibo Chat</h1>

      <div style={{ marginBottom: 14, opacity: 0.85 }}>
        {loading ? (
          <span>Loading…</span>
        ) : !sessionToken ? (
          <span>
            You’re not logged in. (Use your existing login page.) Then come back to <b>/chat</b>.
          </span>
        ) : usage?.plan === "paid" ? (
          <span>✅ Paid: unlimited messages</span>
        ) : (
          <span>
            Free: <b>{usage?.remaining ?? "?"}</b> / 5 messages left today{" "}
            <a href="/upgrade" style={{ marginLeft: 10 }}>Upgrade</a>
          </span>
        )}
      </div>

      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: 12,
          padding: 12,
          height: 420,
          overflow: "auto",
          background: "#fff",
        }}
      >
        {messages.map((m, idx) => (
          <div key={idx} style={{ margin: "10px 0" }}>
            <div style={{ fontSize: 12, opacity: 0.7 }}>{m.role.toUpperCase()}</div>
            <div style={{ whiteSpace: "pre-wrap" }}>{m.text}</div>
          </div>
        ))}
      </div>

      {error ? (
        <div style={{ marginTop: 10, color: "crimson" }}>{error}</div>
      ) : null}

      <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") send();
          }}
          placeholder="Type a message…"
          style={{
            flex: 1,
            padding: 12,
            borderRadius: 10,
            border: "1px solid #ddd",
          }}
          disabled={sending || !sessionToken}
        />
        <button
          onClick={send}
          disabled={sending || !sessionToken}
          style={{
            padding: "12px 16px",
            borderRadius: 10,
            border: "1px solid #ddd",
            background: sending ? "#f5f5f5" : "#fff",
            cursor: sending ? "not-allowed" : "pointer",
          }}
        >
          {sending ? "Sending…" : "Send"}
        </button>
      </div>

      <p style={{ marginTop: 14, opacity: 0.7, fontSize: 12 }}>
        Tip: This page is a safe “limit system test page”. We can style it later 😄
      </p>
    </main>
  );
}
