import { catalogForTrack } from "@/lib/safepath/catalog";
import { CSP_DOMAIN_WEIGHTS } from "@/lib/safepath/domains";
import type { TrackId } from "@/lib/safepath/session";

export type PlannerMode = "adaptive" | "mix" | "domain" | "choice";
export type StudyPlan = { mode: PlannerMode; domains: number[]; examDate: string; startDate: string; dailyHours: number };
export type PlanDeadlineStatus = { today: string; daysRemaining: number; daysElapsed: number; totalDays: number; totalClasses: number; completedClasses: number; remainingClasses: number; actualPct: number; expectedPct: number; gapPct: number; requiredClassesPerDay: number; plannedClassesPerWeek: number; plannedFinishDate: string; daysAheadOrBehind: number; status: "ahead" | "on-track" | "behind" | "deadline-passed" | "plan-too-slow"; label: string; detail: string };

const KEY = "safepath.plan.v1";
const HOURS_PER_CLASS = 1.2;
export const PLANNER_MODES: PlannerMode[] = ["adaptive", "mix", "domain", "choice"];

function localDateString(date = new Date()) { const y = date.getFullYear(); const m = String(date.getMonth() + 1).padStart(2, "0"); const d = String(date.getDate()).padStart(2, "0"); return `${y}-${m}-${d}`; }
function addDays(dateString: string, days: number) { const date = new Date(`${dateString}T00:00:00`); date.setDate(date.getDate() + days); return localDateString(date); }
function signedDaysBetween(a: string, b: string) { const start = new Date(`${a}T00:00:00`).getTime(); const end = new Date(`${b}T00:00:00`).getTime(); return Math.round((end - start) / 86400000); }

export function defaultPlan(): StudyPlan { const start = new Date(); const exam = new Date(); exam.setDate(exam.getDate() + 84); return { mode: "adaptive", domains: [1,2,3,4,5,6,7], examDate: exam.toISOString().slice(0,10), startDate: start.toISOString().slice(0,10), dailyHours: 1.5 }; }
export function readPlan(): StudyPlan { if (typeof window === "undefined") return defaultPlan(); try { const raw = localStorage.getItem(KEY); if (!raw) return defaultPlan(); const parsed = JSON.parse(raw) as Partial<StudyPlan>; const domains = Array.isArray(parsed.domains) ? parsed.domains.map(Number).filter((d) => d >= 1 && d <= 7) : [1,2,3,4,5,6,7]; return { ...defaultPlan(), ...parsed, domains: domains.length ? Array.from(new Set(domains)) : [1,2,3,4,5,6,7], mode: PLANNER_MODES.includes(parsed.mode as PlannerMode) ? parsed.mode as PlannerMode : "adaptive" }; } catch { return defaultPlan(); } }
export function hasSavedPlan(): boolean { if (typeof window === "undefined") return false; return Boolean(localStorage.getItem(KEY)); }
export function writePlan(plan: StudyPlan) { localStorage.setItem(KEY, JSON.stringify(plan)); }
export function daysBetween(a: string, b: string) { return Math.max(0, signedDaysBetween(a,b)); }

export function planDeadlineStatus(plan: StudyPlan, track: TrackId, completed: number[]): PlanDeadlineStatus {
  const pool = catalogForTrack(track);
  const active = plan.domains.length ? plan.domains : [1,2,3,4,5,6,7];
  const plannedRows = pool.filter((row) => active.includes(row.domain));
  const totalClasses = plannedRows.length;
  const completedClasses = plannedRows.filter((row) => completed.includes(row.id)).length;
  const remainingClasses = Math.max(0, totalClasses - completedClasses);
  const today = localDateString();
  const totalDays = Math.max(0, signedDaysBetween(plan.startDate, plan.examDate));
  const daysRemaining = Math.max(0, signedDaysBetween(today, plan.examDate));
  const daysElapsed = Math.max(0, Math.min(totalDays, signedDaysBetween(plan.startDate, today)));
  const actualPct = totalClasses ? Math.round((completedClasses / totalClasses) * 100) : 0;
  const expectedPct = totalDays ? Math.min(100, Math.round((daysElapsed / totalDays) * 100)) : 0;
  const gapPct = actualPct - expectedPct;
  const requiredClassesPerDay = daysRemaining > 0 ? remainingClasses / daysRemaining : remainingClasses;
  const dailyClassCapacity = Math.max(0.1, Number(plan.dailyHours) / HOURS_PER_CLASS);
  const plannedClassesPerWeek = Math.max(1, Math.ceil(dailyClassCapacity * 7));
  const plannedStudyDays = totalClasses ? Math.ceil(totalClasses / dailyClassCapacity) : 0;
  const plannedFinishDate = addDays(plan.startDate, plannedStudyDays);
  const daysAheadOrBehind = signedDaysBetween(plannedFinishDate, plan.examDate);

  let status: PlanDeadlineStatus["status"]; let label: string; let detail: string;
  if (daysRemaining <= 0 && remainingClasses > 0) { status = "deadline-passed"; label = "Deadline missed"; detail = `${remainingClasses} planned ${remainingClasses === 1 ? "class remains" : "classes remain"} after the target date.`; }
  else if (plannedFinishDate > plan.examDate) { status = "plan-too-slow"; label = "Plan misses deadline"; detail = `At ${plan.dailyHours} study hours/day, the planned workload finishes after your exam target.`; }
  else if (remainingClasses === 0) { status = "ahead"; label = "Course complete"; detail = "All classes in your selected plan are complete. Use Practice and Mock Exams for final readiness."; }
  else if (gapPct >= 5) { status = "ahead"; label = "Ahead of plan"; detail = `${actualPct}% complete vs ${expectedPct}% expected by today.`; }
  else if (gapPct >= -5) { status = "on-track"; label = "On track for deadline"; detail = `${actualPct}% complete vs ${expectedPct}% expected by today.`; }
  else { status = "behind"; label = "Behind plan"; detail = `${actualPct}% complete vs ${expectedPct}% expected by today. You need about ${requiredClassesPerDay.toFixed(1)} classes/day to catch up.`; }

  return { today, daysRemaining, daysElapsed, totalDays, totalClasses, completedClasses, remainingClasses, actualPct, expectedPct, gapPct, requiredClassesPerDay, plannedClassesPerWeek, plannedFinishDate, daysAheadOrBehind, status, label, detail };
}

export function buildWeeks(plan: StudyPlan, track: TrackId, completed: number[]) {
  const pool = catalogForTrack(track); const active = plan.domains.length ? plan.domains : [1,2,3,4,5,6,7]; const open = pool.filter((row) => active.includes(row.domain) && !completed.includes(row.id));
  const ordered: typeof open = [];
  if (plan.mode === "domain" || plan.mode === "choice") { for (const d of active) ordered.push(...open.filter((row) => row.domain === d)); }
  else if (plan.mode === "mix") { const buckets = active.map((d) => open.filter((row) => row.domain === d)); let added = true; while (added) { added = false; for (const bucket of buckets) { const next = bucket.shift(); if (next) { ordered.push(next); added = true; } } } }
  else { const weighted = [...open].sort((a,b) => { const wa = CSP_DOMAIN_WEIGHTS[a.domain as keyof typeof CSP_DOMAIN_WEIGHTS] ?? 10; const wb = CSP_DOMAIN_WEIGHTS[b.domain as keyof typeof CSP_DOMAIN_WEIGHTS] ?? 10; if (wb !== wa) return wb-wa; return a.id-b.id; }); ordered.push(...weighted); }
  const totalPlannedClasses = active.reduce((sum,d) => sum + pool.filter((row) => row.domain === d).length, 0);
  const totalDays = Math.max(1, daysBetween(plan.startDate, plan.examDate));
  const perWeek = Math.max(1, Math.ceil((totalPlannedClasses / totalDays) * 7));
  const weeks: { week: number; items: typeof open }[] = [];
  for (let i=0; i<ordered.length; i+=perWeek) weeks.push({ week: weeks.length+1, items: ordered.slice(i,i+perWeek) });
  return weeks;
}
