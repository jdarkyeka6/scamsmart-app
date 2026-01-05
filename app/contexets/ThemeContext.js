"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const ThemeContext = createContext(null);

/**
 * ThemeProvider
 * - Persists theme in localStorage ("light" | "dark")
 * - Defaults to system preference if nothing stored
 * - Applies theme to <html> via class "dark"
 */
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark"); // default to dark until we load preference
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Load saved theme first, else system preference
    try {
      const saved = localStorage.getItem("theme");
      if (saved === "light" || saved === "dark") {
        setTheme(saved);
      } else {
        const prefersDark =
          typeof window !== "undefined" &&
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches;
        setTheme(prefersDark ? "dark" : "light");
      }
    } catch {
      // If localStorage is blocked, fall back to dark
      setTheme("dark");
    } finally {
      setMounted(true);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    try {
      localStorage.setItem("theme", theme);
    } catch {
      // ignore
    }

    const root = document.documentElement; // <html>
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
  }, [theme, mounted]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme,
      mounted,
      isDark: theme === "dark",
    }),
    [theme, mounted]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return ctx;
}
