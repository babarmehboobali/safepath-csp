import { persistGet, persistHydrate, persistSet, rememberEmail, forgottenEmail } from "./persist";

const KEY = "safepath.studio.v1";
const KEY_STABLE = "safepath.studio";
export type TrackId = "compact" | "recommended" | "maximum";
export type IndustryId = "general" | "oil" | "build";
export type ExamRecord = { at: number; score: number; total: number; kind?: "mock" | "assess" | "practice"; pct?: number };
export type LessonRecord = { slides: string[]; drillScore: number; drillTotal: number; at: number };
export type StudioSession = { email: string; name: string; agreed: boolean; completed: number[]; track: TrackId; industry: IndustryId; exams: ExamRecord[]; studyDates: string[]; knownCards: number[]; missed: number[]; lessons: Record<number, LessonRecord>; flaggedClasses: number[] };
function empty(): StudioSession { return { email: "", name: "", agreed: false, completed: [], track: "recommended", industry: "general", exams: [], studyDates: [], knownCards: [], missed: [], lessons: {}, flaggedClasses: [] }; }
function dayKey(d = new Date()) { return d.toISOString().slice(0, 10); }
export function readSession(): StudioSession {
  if (typeof window === "undefined") return empty();
  try {
    const raw = persistGet(KEY) || persistGet(KEY_STABLE); if (!raw) return empty();
    const parsed = JSON.parse(raw) as Partial<StudioSession>;
    return { email: String(parsed.email || ""), name: String(parsed.name || ""), agreed: Boolean(parsed.agreed), completed: Array.isArray(parsed.completed) ? parsed.completed.map(Number) : [], track: parsed.track === "compact" || parsed.track === "maximum" ? parsed.track : "recommended", industry: parsed.industry === "oil" || parsed.industry === "build" ? parsed.industry : "general", exams: Array.isArray(parsed.exams) ? parsed.exams.map((row) => ({ at: Number(row.at) || Date.now(), score: Number(row.score) || 0, total: Number(row.total) || 0, kind: row.kind, pct: row.pct })) : [], studyDates: Array.isArray(parsed.studyDates) ? parsed.studyDates.map(String) : [], knownCards: Array.isArray(parsed.knownCards) ? parsed.knownCards.map(Number) : [], missed: Array.isArray(parsed.missed) ? parsed.missed.map(Number) : [], lessons: parsed.lessons && typeof parsed.lessons === "object" ? parsed.lessons as Record<number, LessonRecord> : {}, flaggedClasses: Array.isArray(parsed.flaggedClasses) ? Array.from(new Set(parsed.flaggedClasses.map(Number).filter((id) => Number.isFinite(id) && id > 0))) : [] };
  } catch { return empty(); }
}

/** Browser persistence is a cache only. Neon is authoritative after authentication. */
export function writeSession(next: StudioSession) {
  persistSet(KEY, JSON.stringify(next)); persistSet(KEY_STABLE, JSON.stringify(next));
  if (next.email) { rememberEmail(next.email); void import("./seats-api").then((api) => api.cloudSaveProgress({ data: next })).catch(() => undefined); }
}

export async function hydrateSession() {
  const raw = (await persistHydrate(KEY)) || (await persistHydrate(KEY_STABLE)); if (raw && !persistGet(KEY)) persistSet(KEY, raw);
  const local = readSession(); if (!local.email) return local;
  try {
    const { cloudLoadProgress } = await import("./seats-api");
    const remote = await cloudLoadProgress({ data: {} });
    if (remote && typeof remote === "object") {
      const merged: StudioSession = { ...local, ...remote, email: String(remote.email || local.email), name: String(remote.name || local.name), completed: Array.from(new Set([...(remote.completed || []), ...local.completed])), exams: [...(remote.exams || []), ...local.exams].slice(0, 16), studyDates: Array.from(new Set([...(remote.studyDates || []), ...local.studyDates])), knownCards: Array.from(new Set([...(remote.knownCards || []), ...local.knownCards])), missed: Array.from(new Set([...(remote.missed || []), ...local.missed])).slice(0, 80), lessons: { ...(remote.lessons || {}), ...local.lessons }, agreed: Boolean(remote.agreed || local.agreed), flaggedClasses: Array.from(new Set([...(remote.flaggedClasses || []), ...local.flaggedClasses])).slice(0, 132) };
      persistSet(KEY, JSON.stringify(merged)); persistSet(KEY_STABLE, JSON.stringify(merged)); return merged;
    }
  } catch { /* local cache remains usable while signed out/offline */ }
  return local;
}

export function markStudy() { const s = readSession(); const key = dayKey(); if (!s.studyDates.includes(key)) s.studyDates = [key, ...s.studyDates].slice(0, 60); writeSession(s); return s; }
export function streakCount(dates = readSession().studyDates) { const set = new Set(dates); let n = 0; const d = new Date(); for (let i = 0; i < 60; i += 1) { if (!set.has(dayKey(d))) break; n += 1; d.setDate(d.getDate() - 1); } return n; }
export function touchLesson(classId: number, slide: string) { const s = markStudy(); const row = s.lessons[classId] ?? { slides: [], drillScore: 0, drillTotal: 0, at: Date.now() }; if (!row.slides.includes(slide)) row.slides = [...row.slides, slide]; row.at = Date.now(); s.lessons[classId] = row; writeSession(s); return row; }
export function recordDrill(classId: number, score: number, total: number) { const s = markStudy(); const row = s.lessons[classId] ?? { slides: [], drillScore: 0, drillTotal: 0, at: Date.now() }; row.drillScore = score; row.drillTotal = total; row.at = Date.now(); if (!row.slides.includes("drill")) row.slides = [...row.slides, "drill"]; s.lessons[classId] = row; writeSession(s); return row; }
export function markComplete(classId: number) { const s = markStudy(); if (!s.completed.includes(classId)) s.completed.push(classId); writeSession(s); return s; }
export function recordExam(score: number, total: number, kind: ExamRecord["kind"] = "practice") { const s = markStudy(); s.exams = [{ at: Date.now(), score, total, kind, pct: total ? Math.round((score / total) * 100) : 0 }, ...s.exams].slice(0, 16); writeSession(s); return s; }
export function recordMissed(classIds: number[]) { const s = markStudy(); const set = new Set(s.missed); classIds.forEach((id) => set.add(id)); s.missed = Array.from(set).slice(0, 80); writeSession(s); return s; }
export function markCardKnown(classId: number) { const s = markStudy(); if (!s.knownCards.includes(classId)) s.knownCards.push(classId); writeSession(s); return s; }
export function toggleFlaggedClass(classId: number) { const s = readSession(); const set = new Set(s.flaggedClasses); if (set.has(classId)) set.delete(classId); else set.add(classId); s.flaggedClasses = Array.from(set).sort((a, b) => a - b); writeSession(s); return s; }
export function isClassFlagged(classId: number) { return readSession().flaggedClasses.includes(classId); }
export function signOut() { const keep = readSession(); persistSet(KEY, JSON.stringify({ ...keep, email: "" })); persistSet(KEY_STABLE, JSON.stringify({ ...keep, email: "" })); forgottenEmail(); }
