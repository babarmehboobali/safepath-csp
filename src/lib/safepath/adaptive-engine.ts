export type ErrorType =
  | "knowledge-gap"
  | "misapplication"
  | "distractor-trap"
  | "calculation"
  | "reading"
  | "risk-priority"
  | "overconfidence"
  | "slow-reasoning";

export type AdaptiveAttempt = {
  questionId?: string;
  domain: string;
  topic: string;
  competency?: string;
  difficulty: number;
  correct: boolean;
  responseTimeSeconds?: number;
  confidence?: number;
  errorType?: ErrorType;
  attemptedAt: string | Date;
};

export type CompetencyState = {
  domain: string;
  topic: string;
  attempts: number;
  accuracy: number;
  recentAccuracy: number;
  avgResponseTimeSeconds: number | null;
  averageDifficulty: number;
  weaknessScore: number;
  masteryScore: number;
  confidenceCalibration: number | null;
  recommendedDifficulty: number;
  recommendedAction: "learn" | "repair" | "practice" | "review" | "challenge";
};

const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n));

function recencyWeight(date: string | Date, now = Date.now()) {
  const ageDays = Math.max(0, (now - new Date(date).getTime()) / 86_400_000);
  return Math.exp(-ageDays / 21);
}

function confidenceError(attempts: AdaptiveAttempt[]) {
  const rows = attempts.filter((r) => Number.isFinite(r.confidence));
  if (!rows.length) return null;
  return rows.reduce((sum, r) => sum + Math.abs((r.confidence ?? 50) / 100 - (r.correct ? 1 : 0)), 0) / rows.length;
}

export function scoreCompetency(attempts: AdaptiveAttempt[], now = Date.now()): CompetencyState[] {
  const groups = new Map<string, AdaptiveAttempt[]>();
  for (const attempt of attempts) {
    const key = `${attempt.domain}\u0000${attempt.topic}`;
    const bucket = groups.get(key) ?? [];
    bucket.push(attempt);
    groups.set(key, bucket);
  }

  return [...groups.values()].map((rows) => {
    const ordered = [...rows].sort((a, b) => new Date(a.attemptedAt).getTime() - new Date(b.attemptedAt).getTime());
    const recent = ordered.slice(-10);
    const accuracy = ordered.filter((r) => r.correct).length / ordered.length;
    const recentAccuracy = recent.filter((r) => r.correct).length / recent.length;
    const weightedTotal = ordered.reduce((sum, r) => sum + recencyWeight(r.attemptedAt, now), 0) || 1;
    const weightedErrors = ordered.reduce((sum, r) => sum + (r.correct ? 0 : recencyWeight(r.attemptedAt, now)), 0);
    const avgResponse = ordered.filter((r) => Number.isFinite(r.responseTimeSeconds)).reduce((sum, r, _, a) => sum + (r.responseTimeSeconds ?? 0) / a.length, 0);
    const avgDifficulty = ordered.reduce((sum, r) => sum + clamp(r.difficulty, 1, 5), 0) / ordered.length;
    const slowPenalty = avgResponse > 0 ? clamp((avgResponse - 90) / 180, 0, 1) : 0;
    const repeatPenalty = ordered.length >= 3 && ordered.slice(-3).every((r) => !r.correct) ? 0.25 : 0;
    const confidenceGap = confidenceError(ordered);
    const overconfidencePenalty = ordered.filter((r) => !r.correct && (r.confidence ?? 0) >= 80).length / Math.max(1, ordered.length);
    const weaknessScore = clamp(
      (weightedErrors / weightedTotal) * 0.48 +
      (1 - recentAccuracy) * 0.22 +
      slowPenalty * 0.08 +
      repeatPenalty * 0.10 +
      overconfidencePenalty * 0.12,
      0,
      1,
    );
    const masteryScore = clamp(1 - weaknessScore, 0, 1);
    const last = ordered.at(-1)!;
    let recommendedDifficulty = clamp(Math.round(last.difficulty), 1, 5);
    if (recentAccuracy >= 0.85 && slowPenalty < 0.25 && overconfidencePenalty < 0.15) recommendedDifficulty = clamp(recommendedDifficulty + 1, 1, 5);
    else if (recentAccuracy < 0.55 || repeatPenalty > 0) recommendedDifficulty = clamp(recommendedDifficulty - 1, 1, 5);

    let recommendedAction: CompetencyState["recommendedAction"] = "review";
    if (ordered.length < 3) recommendedAction = "learn";
    else if (weaknessScore >= 0.65) recommendedAction = "repair";
    else if (weaknessScore >= 0.40) recommendedAction = "practice";
    else if (masteryScore >= 0.85 && recentAccuracy >= 0.85) recommendedAction = "challenge";

    return {
      domain: last.domain,
      topic: last.topic,
      attempts: ordered.length,
      accuracy,
      recentAccuracy,
      avgResponseTimeSeconds: avgResponse || null,
      averageDifficulty: avgDifficulty,
      weaknessScore,
      masteryScore,
      confidenceCalibration: confidenceGap === null ? null : 1 - confidenceGap,
      recommendedDifficulty,
      recommendedAction,
    };
  }).sort((a, b) => b.weaknessScore - a.weaknessScore);
}

export function selectNextDifficulty(state: CompetencyState | undefined): number {
  return state?.recommendedDifficulty ?? 3;
}

export function buildNextActions(states: CompetencyState[], limit = 3) {
  return states.slice(0, limit).map((state) => {
    if (state.recommendedAction === "learn") return { type: "concept-refresh", domain: state.domain, topic: state.topic, count: 1, difficulty: 1 };
    if (state.recommendedAction === "repair") return { type: "repair-session", domain: state.domain, topic: state.topic, count: 10, difficulty: Math.max(1, state.recommendedDifficulty - 1) };
    if (state.recommendedAction === "challenge") return { type: "interleaved-challenge", domain: state.domain, topic: state.topic, count: 8, difficulty: state.recommendedDifficulty };
    return { type: "targeted-practice", domain: state.domain, topic: state.topic, count: 10, difficulty: state.recommendedDifficulty };
  });
}

export function domainScores(attempts: AdaptiveAttempt[]) {
  const groups = new Map<string, AdaptiveAttempt[]>();
  for (const a of attempts) groups.set(a.domain, [...(groups.get(a.domain) ?? []), a]);
  return [...groups.entries()].map(([domain, rows]) => ({
    domain,
    attempts: rows.length,
    accuracy: rows.filter((r) => r.correct).length / rows.length,
  })).sort((a, b) => b.accuracy - a.accuracy);
}

export type ReviewRating = "again" | "hard" | "good" | "easy";

export function nextReview(previousIntervalDays: number, rating: ReviewRating, streak: number, now = new Date()) {
  const multipliers: Record<ReviewRating, number> = { again: 0.25, hard: 1.25, good: 2.5, easy: 4 };
  const minimum: Record<ReviewRating, number> = { again: 0.05, hard: 1, good: 2, easy: 4 };
  const nextInterval = clamp(Math.round(Math.max(minimum[rating], previousIntervalDays || 1) * multipliers[rating] * (1 + Math.min(streak, 5) * 0.05) * 10) / 10, 0.05, 365);
  const dueAt = new Date(now.getTime() + nextInterval * 86_400_000);
  return { intervalDays: nextInterval, dueAt };
}

export function masteryGate(attempts: AdaptiveAttempt[]) {
  if (!attempts.length) return { mastered: false, score: 0, reason: "No evidence yet" };
  const states = scoreCompetency(attempts);
  const state = states[0]!;
  const sessions = new Set(attempts.map((a) => new Date(a.attemptedAt).toISOString().slice(0, 10))).size;
  const scenarioEvidence = attempts.filter((a) => a.competency?.toLowerCase().includes("scenario") || a.competency?.toLowerCase().includes("application")).length;
  const mastered = state.accuracy >= 0.85 && state.recentAccuracy >= 0.85 && attempts.length >= 10 && sessions >= 3 && scenarioEvidence >= 3 && state.confidenceCalibration !== null && state.confidenceCalibration >= 0.75;
  return {
    mastered,
    score: Math.round(state.masteryScore * 100),
    reason: mastered ? "Evidence supports durable mastery" : "Need more accurate, distributed, applied evidence",
  };
}
