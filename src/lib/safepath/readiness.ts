import { catalogForTrack, classCountForTrack } from "@/lib/safepath/catalog";
import { CSP_DOMAIN_WEIGHTS } from "@/lib/safepath/domains";
import type { LessonRecord, StudioSession } from "@/lib/safepath/session";

export type ReadyBand = "not-ready" | "building" | "approaching" | "capable";

export type ReadyReport = {
  pct: number;
  band: ReadyBand;
  line: string;
  coverage: number;
  exams: number;
  balance: number;
  habit: number;
  domains: { domain: number; done: number; need: number; weight: number }[];
};

function band(pct: number): ReadyBand {
  if (pct >= 78) return "capable";
  if (pct >= 62) return "approaching";
  if (pct >= 40) return "building";
  return "not-ready";
}

function lineFor(pct: number, bandName: ReadyBand) {
  if (bandName === "capable") return `Model estimate ${pct}%. Sit a full mock before you treat this as exam-capable. Not a BCSP score.`;
  if (bandName === "approaching") return `Model estimate ${pct}%. Close weak domains and one 200-item mock. Not a pass promise.`;
  if (bandName === "building") return `Model estimate ${pct}%. Finish classes properly (all slides + drill ≥70%) and sit a self-assessment.`;
  return `Model estimate ${pct}%. Too little proper completion or exam evidence to talk about passing.`;
}

export function lessonIsProper(row?: LessonRecord) {
  if (!row) return false;
  const slides = row.slides?.length ?? 0;
  const drillOk = row.drillTotal >= 4 && row.drillScore / row.drillTotal >= 0.7;
  return slides >= 6 && drillOk;
}

export function predictReadiness(session: StudioSession): ReadyReport {
  const cap = classCountForTrack(session.track);
  const proper = session.completed.filter((id) => lessonIsProper(session.lessons[id]));
  const coverage = cap ? Math.round((proper.length / cap) * 100) : 0;

  const exams = session.exams.filter((row) => row.total >= 25);
  const examScore = exams.length
    ? Math.round(
        exams.slice(0, 4).reduce((sum, row, i) => {
          const w = row.kind === "mock" ? 3 : row.kind === "assess" ? 2 : 1;
          const decay = 1 - i * 0.12;
          return sum + (row.pct ?? 0) * w * decay;
        }, 0) /
          exams.slice(0, 4).reduce((sum, row, i) => {
            const w = row.kind === "mock" ? 3 : row.kind === "assess" ? 2 : 1;
            return sum + w * (1 - i * 0.12);
          }, 0),
      )
    : 0;

  const pool = catalogForTrack(session.track);
  const domains = [1, 2, 3, 4, 5, 6, 7].map((domain) => {
    const trackPool = pool.filter((row) => row.domain === domain);
    const need = trackPool.length;
    const done = trackPool.filter((row) => proper.includes(row.id)).length;
    return { domain, done, need, weight: CSP_DOMAIN_WEIGHTS[domain as keyof typeof CSP_DOMAIN_WEIGHTS] ?? 10 };
  });

  const coveredWeight = domains.reduce((sum, row) => sum + row.weight * (row.need ? row.done / row.need : 0), 0);
  const balance = Math.round(coveredWeight);

  const habit = Math.min(100, session.studyDates.length * 8);

  const pct = Math.max(
    8,
    Math.min(
      96,
      Math.round(coverage * 0.28 + examScore * 0.52 + balance * 0.14 + habit * 0.06),
    ),
  );

  return {
    pct,
    band: band(pct),
    line: lineFor(pct, band(pct)),
    coverage,
    exams: examScore,
    balance,
    habit,
    domains,
  };
}
