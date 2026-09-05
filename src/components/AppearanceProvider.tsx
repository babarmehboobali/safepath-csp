import { createContext, useContext, useEffect, useMemo, useState } from "react";

export const APPEARANCE_STORAGE_KEY = "safepath-appearance";
export const ACCENT_STORAGE_KEY = "safepath-accent";

export const APPEARANCE_STYLES = [
  { id: "csp-green", label: "CSP Green", description: "The complete SafePath study layout with balanced typography, spacing, and CSP green accents", tone: "Recommended" },
  { id: "professional", label: "Professional Light", description: "The clean CSP study layout from your reference", tone: "Light" },
  { id: "modern", label: "Modern", description: "Clean, professional, and easy to read", tone: "Light" },
  { id: "classic", label: "Classic", description: "The original SafePath look", tone: "Original" },
  { id: "dark", label: "Dark", description: "Dark mode for low-light study", tone: "Low light" },
  { id: "minimal", label: "Minimal", description: "Simple and distraction free", tone: "Focus" },
  { id: "ocean", label: "Ocean", description: "Cool blue modern style", tone: "Calm" },
  { id: "sunset", label: "Sunset", description: "Warm and vibrant", tone: "Warm" },
  { id: "purple", label: "Purple", description: "Focus and creativity", tone: "Focus" },
  { id: "contrast", label: "High Contrast", description: "Enhanced accessibility", tone: "Accessible" },
] as const;

export const ACCENT_COLORS = [
  { id: "emerald", label: "CSP Emerald", value: "#0b7a43", dark: "#075b35", soft: "#dff1e7", pale: "#f1f8f4" },
  { id: "blue", label: "Safety Blue", value: "#1769aa", dark: "#104d80", soft: "#deecf8", pale: "#f1f7fc" },
  { id: "teal", label: "Teal", value: "#087f7a", dark: "#05615d", soft: "#d9f0ee", pale: "#eff9f8" },
  { id: "amber", label: "Safety Amber", value: "#b36b00", dark: "#7b4900", soft: "#f8e8bf", pale: "#fff9eb" },
  { id: "violet", label: "Violet", value: "#6842a5", dark: "#4b2e7c", soft: "#e9e0f6", pale: "#f7f3fc" },
  { id: "rose", label: "Rose", value: "#b23b63", dark: "#7e2847", soft: "#f5dfe7", pale: "#fcf3f6" },
  { id: "slate", label: "Slate", value: "#425a72", dark: "#2d4053", soft: "#e3e9ef", pale: "#f5f7f9" },
] as const;

export type AppearanceId = (typeof APPEARANCE_STYLES)[number]["id"];
export type AccentId = (typeof ACCENT_COLORS)[number]["id"];

const AppearanceContext = createContext<{
  appearance: AppearanceId;
  setAppearance: (id: AppearanceId) => void;
  accent: AccentId;
  setAccent: (id: AccentId) => void;
} | null>(null);

function isAppearanceId(value: string | null): value is AppearanceId {
  return APPEARANCE_STYLES.some((style) => style.id === value);
}
function isAccentId(value: string | null): value is AccentId {
  return ACCENT_COLORS.some((color) => color.id === value);
}

function applyAppearance(id: AppearanceId, accentId: AccentId) {
  const accent = ACCENT_COLORS.find((item) => item.id === accentId) ?? ACCENT_COLORS[0];
  document.documentElement.dataset.spTheme = id;
  document.documentElement.dataset.spAccent = accentId;
  document.documentElement.style.setProperty("--sp-user-accent", accent.value);
  document.documentElement.style.setProperty("--sp-user-accent-dark", accent.dark);
  document.documentElement.style.setProperty("--sp-user-accent-soft", accent.soft);
  document.documentElement.style.setProperty("--sp-user-accent-pale", accent.pale);
  document.documentElement.style.colorScheme =
    id === "csp-green" || id === "professional" || id === "modern" || id === "minimal" || id === "ocean" || id === "sunset" || id === "purple"
      ? "light"
      : "dark";
}

export function AppearanceProvider({ children }: { children: React.ReactNode }) {
  const [appearance, setAppearanceState] = useState<AppearanceId>("csp-green");
  const [accent, setAccentState] = useState<AccentId>("emerald");

  useEffect(() => {
    const savedAppearance = window.localStorage.getItem(APPEARANCE_STORAGE_KEY);
    const savedAccent = window.localStorage.getItem(ACCENT_STORAGE_KEY);
    const nextAppearance = isAppearanceId(savedAppearance) ? savedAppearance : "csp-green";
    const nextAccent = isAccentId(savedAccent) ? savedAccent : "emerald";
    setAppearanceState(nextAppearance);
    setAccentState(nextAccent);
    applyAppearance(nextAppearance, nextAccent);
  }, []);

  const setAppearance = (id: AppearanceId) => {
    setAppearanceState(id);
    window.localStorage.setItem(APPEARANCE_STORAGE_KEY, id);
    applyAppearance(id, accent);
  };

  const setAccent = (id: AccentId) => {
    setAccentState(id);
    window.localStorage.setItem(ACCENT_STORAGE_KEY, id);
    applyAppearance(appearance, id);
  };

  const value = useMemo(() => ({ appearance, setAppearance, accent, setAccent }), [appearance, accent]);
  return <AppearanceContext.Provider value={value}>{children}</AppearanceContext.Provider>;
}

export function useAppearance() {
  const value = useContext(AppearanceContext);
  if (!value) throw new Error("useAppearance must be used inside AppearanceProvider");
  return value;
}
