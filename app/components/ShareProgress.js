"use client";

import React, { useMemo, useState } from "react";

/**
 * ShareProgress
 *
 * Props (optional):
 * - title: share title
 * - text: share message
 * - url: share URL (defaults to current page)
 * - stats: { streak, xp, level, rank, solved } (optional - used to build message)
 */
export default function ShareProgress({
  title = "ScamSmart Progress",
  text,
  url,
  stats,
  className = "",
}) {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  const shareUrl = useMemo(() => {
    if (url) return url;
    if (typeof window === "undefined") return "https://scamsmart.click";
    return window.location.href || "https://scamsmart.click";
  }, [url]);

  const shareText = useMemo(() => {
    if (text) return text;

    // Build a friendly default message from stats if provided
    const bits = [];
    if (stats?.level != null) bits.push(`Level ${stats.level}`);
    if (stats?.xp != null) bits.push(`${stats.xp} XP`);
    if (stats?.streak != null) bits.push(`${stats.streak} day streak`);
    if (stats?.solved != null) bits.push(`${stats.solved} questions completed`);
    if (stats?.rank != null) bits.push(`Rank #${stats.rank}`);

    const extra = bits.length ? ` (${bits.join(" • ")})` : "";
    return `I’m learning to spot scams with ScamSmart${extra}. Think before you click 🛡️`;
  }, [text, stats]);

  async function doShare() {
    setError("");

    // Try native share first
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title,
          text: shareText,
          url: shareUrl,
        });
        return;
      } catch (e) {
        // user cancelled is fine; only show real errors
        const msg = String(e?.message || "");
        if (!msg.toLowerCase().includes("abort")) {
          setError("Couldn’t open share sheet. Try copying the link instead.");
        }
      }
    }

    // Fallback: copy to clipboard
    try {
      await navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      setError("Copy failed. You can manually copy the URL from the address bar.");
    }
  }

  const twitterIntent = useMemo(() => {
    const t = encodeURIComponent(`${shareText} ${shareUrl}`);
    return `https://twitter.com/intent/tweet?text=${t}`;
  }, [shareText, shareUrl]);

  const facebookShare = useMemo(() => {
    const u = encodeURIComponent(shareUrl);
    return `https://www.facebook.com/sharer/sharer.php?u=${u}`;
  }, [shareUrl]);

  return (
    <div className={`rounded-2xl border border-white/10 bg-white/5 p-4 ${className}`}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-base font-semibold">Share your progress</div>
          <div className="text-sm opacity-80 mt-1">
            Challenge a friend to beat your streak 💪
          </div>
        </div>

        <button
          type="button"
          onClick={doShare}
          className="rounded-xl px-3 py-2 border border-white/10 bg-white/5 hover:bg-white/10 active:scale-[0.98] transition text-sm"
        >
          {copied ? "✅ Copied!" : "📣 Share"}
        </button>
      </div>

      <div className="mt-3 text-sm opacity-80 whitespace-pre-line">
        {shareText}
        {"\n"}
        <span className="opacity-90">{shareUrl}</span>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        <a
          href={twitterIntent}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl px-3 py-2 border border-white/10 bg-white/5 hover:bg-white/10 text-sm"
        >
          Share on X
        </a>
        <a
          href={facebookShare}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl px-3 py-2 border border-white/10 bg-white/5 hover:bg-white/10 text-sm"
        >
          Share on Facebook
        </a>
      </div>

      {error ? (
        <div className="mt-3 text-sm text-red-300">
          {error}
        </div>
      ) : null}
    </div>
  );
}
