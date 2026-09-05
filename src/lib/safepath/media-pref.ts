export type MediaQuality = "poster" | "tap" | "full";

const KEY = "safepath.media.v1";

export function readMediaQuality(): MediaQuality {
  if (typeof window === "undefined") return "tap";
  try {
    const raw = localStorage.getItem(KEY);
    if (raw === "poster" || raw === "tap" || raw === "full") return raw;
  } catch {
    /* ignore */
  }
  const save = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
  if (save) return "poster";
  if (window.matchMedia("(max-width: 640px)").matches) return "tap";
  return "full";
}

export function writeMediaQuality(next: MediaQuality) {
  localStorage.setItem(KEY, next);
  window.dispatchEvent(new Event("safepath-media"));
}
