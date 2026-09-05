export const READINESS = {
  ready: 75,
  borderline: 65,
  weakDomain: 60,
} as const;

export function readinessFor(score: number, domainScores: Record<number, number>, timedOut = false) {
  const weak = [1, 2, 3, 4, 5, 6, 7].filter((d) => (domainScores[d] ?? 0) < READINESS.weakDomain);
  if (score >= READINESS.ready && weak.length === 0 && !timedOut) {
    return {
      label: "Ready for exam",
      blurb: "Strong overall with no domain under the focused-review line.",
    };
  }
  if (score >= READINESS.borderline && weak.length <= 2 && !timedOut) {
    return {
      label: "Borderline",
      blurb: "Workable base. Repair the weak domains and sit another timed set.",
    };
  }
  return {
    label: "Needs focused review",
    blurb: "Reopen the weakest domains, then sit a weighted diagnostic again.",
  };
}

export function timerMinutesFor(length: number) {
  if (length >= 200) return 330;
  if (length >= 100) return 165;
  if (length >= 50) return 83;
  return Math.max(20, Math.round(length * 1.65));
}
