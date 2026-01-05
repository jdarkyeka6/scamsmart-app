"use client";

import React from "react";
import { useTheme } from "../contexts/ThemeContext";

/**
 * A simple, dependency-free sun/moon toggle button.
 * If you're using Tailwind, it will look nice out of the box.
 */
export default function DarkModeToggle({ className = "" }) {
  const { isDark, toggleTheme, mounted } = useTheme();

  // Prevent hydration mismatch flicker
  if (!mounted) {
    return (
      <button
        aria-label="Toggle dark mode"
        className={`inline-flex items-center justify-center rounded-xl px-3 py-2 border border-white/10 bg-white/5 ${className}`}
        type="button"
      >
        <span className="opacity-60">⏳</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={`inline-flex items-center gap-2 rounded-xl px-3 py-2 border border-white/10 bg-white/5 hover:bg-white/10 active:scale-[0.98] transition ${className}`}
    >
      <span className="text-lg" aria-hidden="true">
        {isDark ? "🌙" : "☀️"}
      </span>
      <span className="text-sm opacity-80">
        {isDark ? "Dark" : "Light"}
      </span>
    </button>
  );
}
