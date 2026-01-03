"use client";

import { useEffect, useState } from "react";

export default function UsageBadge({ refreshKey = 0 }) {
  const [state, setState] = useState({ loading: true });

  async function load() {
    const r = await fetch("/api/usage", { cache: "no-store" });
    const j = await r.json();
    setState({ loading: false, ...j });
  }

  useEffect(() => {
    load();
  }, [refreshKey]);

  if (state.loading) return null;
  if (state.error) return null;

  if (state.plan === "paid") {
    return <div style={{ fontSize: 12, opacity: 0.8 }}>✅ Paid: unlimited</div>;
  }

  return (
    <div style={{ fontSize: 12, opacity: 0.8 }}>
      Free: {state.remaining} / 5 messages left today
    </div>
  );
}
