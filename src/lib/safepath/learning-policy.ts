import type { CompetencyState } from "./adaptive-engine";

/**
 * SafePath learning policy.
 *
 * Product principles:
 * 1. Retrieval before rereading whenever possible.
 * 2. Space successful retrieval instead of massing identical questions.
 * 3. Interleave domains after a learner has basic competence.
 * 4. Repair the reason for an error, not merely the question that was missed.
 * 5. Use confidence and response time to detect overconfidence and slow reasoning.
 * 6. Treat blueprint weighting as a planning prior, not as a substitute for individual weakness.
 * 7. Never import a large external question set merely to increase question count.
 */

export type LearningAction = {
  type: "learn" | "repair" | "targeted" | "review" | "interleave" | "challenge";
  title: string;
  reason: string;
  count: number;
  difficulty: number;
};

export function nextLearningActions(states: CompetencyState[], limit = 3): LearningAction[] {
  return states.slice(0, limit).map((state) => {
    if (state.attempts < 3) return {
      type: "learn",
      title: `Learn ${state.topic}`,
      reason: "There is not enough evidence yet to call this mastered.",
      count: 1,
      difficulty: 1,
    };
    if (state.recommendedAction === "repair") return {
      type: "repair",
      title: `Repair ${state.topic}`,
      reason: "Repeated or recent errors are outweighing successful retrieval.",
      count: 10,
      difficulty: Math.max(1, state.recommendedDifficulty - 1),
    };
    if (state.recommendedAction === "challenge") return {
      type: "challenge",
      title: `Challenge ${state.topic}`,
      reason: "Recent accuracy is strong enough for higher-level judgment.",
      count: 8,
      difficulty: state.recommendedDifficulty,
    };
    if (state.masteryScore >= 0.75) return {
      type: "interleave",
      title: `Interleave ${state.topic}`,
      reason: "Mixing related concepts tests discrimination rather than memorization.",
      count: 8,
      difficulty: state.recommendedDifficulty,
    };
    return {
      type: "targeted",
      title: `Practice ${state.topic}`,
      reason: "Targeted retrieval should strengthen the weakest evidence first.",
      count: 10,
      difficulty: state.recommendedDifficulty,
    };
  });
}

export const MASTERY_RULES = {
  minimumAttempts: 10,
  minimumSessions: 3,
  minimumAccuracy: 0.85,
  minimumRecentAccuracy: 0.85,
  minimumAppliedEvidence: 3,
  minimumConfidenceCalibration: 0.75,
};

export const SPACING_DAYS = [1, 3, 7, 14, 30, 60, 120];

export const ERROR_REPAIR_RULES = {
  "knowledge-gap": "re-teach concept, then immediate retrieval",
  "misapplication": "show rule, contrast example, then applied scenario",
  "distractor-trap": "compare best answer against the two strongest distractors",
  calculation: "identify formula, variables, units, calculation and interpretation separately",
  reading: "highlight the qualifier: FIRST, BEST, MOST, LEAST, EXCEPT or NEXT",
  "risk-priority": "rank controls and explain why the chosen action is highest priority",
  overconfidence: "repeat later with confidence prediction before answer",
  "slow-reasoning": "use timed micro-drills after concept repair",
} as const;
