/**
 * Lingua Design System — Color Tokens
 *
 * All color values are sourced directly from the design reference.
 * Use these tokens via Tailwind classes: bg-brand-purple, text-semantic-success, etc.
 */

export const colors = {
  // ─── Primary Brand ───────────────────────────────────────────────────────────
  brand: {
    purple: "#6C4EF5",     // lingua-purple
    deepPurple: "#5B3BF6", // lingua-deep-purple
    blue: "#4D8BFF",       // lingua-blue
    green: "#21C16B",      // lingua-green
  },

  // ─── Semantic ────────────────────────────────────────────────────────────────
  semantic: {
    success: "#21C16B",
    warning: "#FFC800",
    streak: "#FF8A00",
    error: "#FF4D4F",
    info: "#4D8BFF",
  },

  // ─── Neutrals ────────────────────────────────────────────────────────────────
  neutral: {
    textPrimary: "#0D132B",
    textSecondary: "#6B7280",
    border: "#E5E7EB",
    surface: "#F6F7FB",
    background: "#FFFFFF",
  },
} as const;

export type ColorToken = typeof colors;
