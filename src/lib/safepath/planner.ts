import { catalogForTrack } from "@/lib/safepath/catalog";
import { CSP_DOMAIN_WEIGHTS } from "@/lib/safepath/domains";
import type { TrackId } from "@/lib/safepath/session";

export type PlannerMode = "adaptive" | "mix" | "domain" | "choice";

export type StudyPlan = {
  mode: PlannerMode;
  domains: number[];
  examDate: string;
  startDate: string;
  dailyHours: number;
};

const KEY = "safepath.plan.v1";

export const PLANNER_MODES: PlannerMode[] = ["adaptive", "mix", "domain", "choice"];

export function defaultPlan(): StudyPlan {
  const start = new Date();
  const exam = new Date();
  exam.setDate(exam.getDate() + 84);
  return {
    mode: "adaptive",
    domains: [1, 2, 3, 4, 5, 6, 7],
    examDate: exam.toISOString().slice(0, 10),
    startDate: start.toISOString().slice(0, 10),
    dailyHours: 1.5,
  };
}

export function readPlan(): StudyPlan {
  if (typeof window === "undefined") return defaultPlan();
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return defaultPlan();
    const parsed = JSON.parse(raw) as Partial<StudyPlan>;
    const domains = Array.isArray(parsed.domains)
      ? parsed.domains.map(Number).filter((d) => d >= 1 && d <= 7)
      : [1, 2, 3, 4, 5, 6, 7];
    return {
      ...defaultPlan(),
      ...parsed,
      domains: domains.length ? Array.from(new Set(domains)) : [1, 2, 3, 4, 5, 6, 7],
      mode: PLANNER_MODES.includes(parsed.mode as PlannerMode) ? (parsed.mode as PlannerMode) : "adaptive",
    };
  } catch {
    return defaultPlan();
  }
}

export function writePlan(plan: StudyPlan) {
  localStorage.setItem(KEY, JSON.stringify(plan));
}

export function daysBetween(a: string, b: string) {
  const start = new Date(`${a}T00:00:00`).getTime();
  const end = new Date(`${b}T00:00:00`).getTime();
  return Math.max(0, Math.round((end - start) / 86400000));
}

export function buildWeeks(plan: StudyPlan, track: TrackId, completed: number[]) {
  const pool = catalogForTrack(track);
  const active = plan.domains.length ? plan.domains : [1, 2, 3, 4, 5, 6, 7];
  const open = pool.filter((row) => active.includes(row.domain) && !completed.includes(row.id));

  const ordered: typeof open = [];
  if (plan.mode === "domain" || plan.mode === "choice") {
    for (const d of active) ordered.push(...open.filter((row) => row.domain === d));
  } else if (plan.mode === "mix") {
    const buckets = active.map((d) => open.filter((row) => row.domain === d));
    let added = true;
    while (added) {
      added = false;
      for (const bucket of buckets) {
        const next = bucket.shift();
        if (next) {
          ordered.push(next);
          added = true;
        }
      }
    }
  } else {
    const weighted = [...open].sort((a, b) => {
      const wa = CSP_DOMAIN_WEIGHTS[a.domain as keyof typeof CSP_DOMAIN_WEIGHTS] ?? 10;
      const wb = CSP_DOMAIN_WEIGHTS[b.domain as keyof typeof CSP_DOMAIN_WEIGHTS] ?? 10;
      if (wb !== wa) return wb - wa;
      return a.id - b.id;
    });
    ordered.push(...weighted);
  }

  const perWeek = 5;
  const weeks: { week: number; items: typeof open }[] = [];
  for (let i = 0; i < ordered.length; i += perWeek) {
    weeks.push({ week: weeks.length + 1, items: ordered.slice(i, i + perWeek) });
  }
  return weeks;
}
