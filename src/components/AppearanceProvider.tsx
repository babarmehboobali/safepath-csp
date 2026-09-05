import { createContext, useContext, useEffect, useMemo, useState } from "react";

export const APPEARANCE_STORAGE_KEY = "safepath-appearance";

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

export type AppearanceId = (typeof APPEARANCE_STYLES)[number]["id"];

const AppearanceContext = createContext<{
  appearance: AppearanceId;
  setAppearance: (id: AppearanceId) => void;
} | null>(null);

function isAppearanceId(value: string | null): value is AppearanceId {
  return APPEARANCE_STYLES.some((style) => style.id === value);
}

function applyAppearance(id: AppearanceId) {
  document.documentElement.dataset.spTheme = id;
  document.documentElement.style.colorScheme =
    id === "csp-green" || id === "professional" || id === "modern" || id === "minimal" || id === "ocean" || id === "sunset" || id === "purple"
      ? "light"
      : "dark";
}

export function AppearanceProvider({ children }: { children: React.ReactNode }) {
  const [appearance, setAppearanceState] = useState<AppearanceId>("csp-green");

  useEffect(() => {
    const saved = window.localStorage.getItem(APPEARANCE_STORAGE_KEY);
    const next = isAppearanceId(saved) ? saved : "csp-green";
    setAppearanceState(next);
    applyAppearance(next);
  }, []);

  const setAppearance = (id: AppearanceId) => {
    setAppearanceState(id);
    window.localStorage.setItem(APPEARANCE_STORAGE_KEY, id);
    applyAppearance(id);
  };

  const value = useMemo(() => ({ appearance, setAppearance }), [appearance]);
  return <AppearanceContext.Provider value={value}>{children}</AppearanceContext.Provider>;
}

export function useAppearance() {
  const value = useContext(AppearanceContext);
  if (!value) throw new Error("useAppearance must be used inside AppearanceProvider");
  return value;
}
