import { CSP_DOMAIN_WEIGHTS } from "@/lib/safepath/domains";
import { predictReadiness } from "@/lib/safepath/readiness";
import type { StudioSession } from "@/lib/safepath/session";

const CRITICAL = 70;

export function blueprintIndex(domainPct: Record<number, number>) {
  let sum = 0;
  for (const d of [1, 2, 3, 4, 5, 6, 7] as const) {
    sum += ((domainPct[d] ?? 0) * CSP_DOMAIN_WEIGHTS[d]) / 100;
  }
  return Math.round(sum);
}

export function criticalDomains(domainPct: Record<number, number>) {
  return ([1, 2, 3, 4, 5, 6, 7] as const).filter((d) => (domainPct[d] ?? 0) < CRITICAL);
}

export function weightedReadiness(session: StudioSession) {
  const base = predictReadiness(session);
  const domainPct: Record<number, number> = {};
  for (const row of base.domains) {
    domainPct[row.domain] = row.need ? Math.round((row.done / row.need) * 100) : 0;
  }
  const fromExams = session.exams[0]?.pct;
  const index = fromExams != null ? Math.round(base.pct * 0.55 + fromExams * 0.45) : base.pct;
  return {
    ...base,
    index,
    critical: criticalDomains(domainPct).concat(
      session.exams[0] ? [] : [],
    ),
    domainPct,
  };
}
