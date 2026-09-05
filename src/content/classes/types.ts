export type ErrorCode =
  | "HIER"
  | "PELTLV"
  | "TOOL"
  | "UNIT"
  | "STEM"
  | "FORM"
  | "FIN"
  | "TIME";

/** Preferred difficulty labels going forward. Seed still stores legacy difficulty. */
export type DifficultyLevel = "Fundamental" | "Applied Scenario" | "Advanced Engineering";

export type StepByStepMath = {
  formula: string;
  variables: Record<string, string>;
  derivationSteps: string[];
  /** TI-30XS MultiView keystroke trace; DEG mode default unless noted. */
  ti30KeystrokeSequence: string;
};

export type EnhancedFields = {
  scenarioText?: string;
  standardReference?: string;
  difficultyLevel?: DifficultyLevel;
  /** Per-option trap analysis aligned to options[0..3], including the correct option. */
  optionTraps?: [string, string, string, string];
  fieldTakeaway?: string;
  stepByStepMath?: StepByStepMath;
  /** Prefer over explanation when present; explanation remains the seed rationale. */
  authoritativeRationale?: string;
};

export type ClassItem = {
  stem: string;
  options: string[];
  answerIndex: number;
  explanation: string;
  errorCode: ErrorCode;
  taskCode: string;
  difficulty: "Foundation" | "Exam" | "Expert";
  distractors?: [string, string, string, string];
  scenarioText?: string;
  standardReference?: string;
  difficultyLevel?: DifficultyLevel;
  optionTraps?: [string, string, string, string];
  fieldTakeaway?: string;
  stepByStepMath?: StepByStepMath;
  authoritativeRationale?: string;
};

export type ContrastPair = { looksLike: string; actually: string };

export type StemIfThen = { ifStem: string; pick: string };

export type ClassFields = {
  hook: string;
  hookOilGas: string;
  hookConstruction: string;
  rule: string;
  modelCaption: string;
  workedCase: string;
  trapsJson: string;
  contrastJson: string;
  brief: string;
  standard: string;
  deep: string;
  cardFront: string;
  cardBack: string;
  teachBackKey: string;
  formulaSlug?: string | null;
  mustScoreJson?: string;
  stemIfThenJson?: string;
};

export type ClassPack = {
  classFields: ClassFields;
  items: ClassItem[];
};

export function traps(a: string, b: string, c: string): string {
  return JSON.stringify([a, b, c]);
}

export function contrast(pairs: ContrastPair[]): string {
  return JSON.stringify(pairs);
}

export function mustScore(...items: string[]): string {
  return JSON.stringify(items);
}

/** Stem if-then pairs: use object shape { ifStem, pick }, not plain strings. */
export function stemIfThen(...items: StemIfThen[]): string {
  return JSON.stringify(items);
}

export function mapDifficultyLevel(
  difficulty: ClassItem["difficulty"],
  override?: DifficultyLevel,
): DifficultyLevel {
  if (override) return override;
  if (difficulty === "Foundation") return "Fundamental";
  if (difficulty === "Expert") return "Advanced Engineering";
  return "Applied Scenario";
}

function isEnhancedBag(v: unknown): v is EnhancedFields {
  return Boolean(v) && typeof v === "object" && !Array.isArray(v);
}

/**
 * Build a ClassItem. Last two optional args stay backward compatible:
 * - difficulty string, then distractors tuple, then optional EnhancedFields
 * - or EnhancedFields in place of distractors when distractors are omitted
 */
function defaultTraps(
  options: [string, string, string, string],
  answerIndex: number,
  explanation: string,
  distractors?: [string, string, string, string],
): [string, string, string, string] {
  return options.map((opt, i) => {
    if (distractors?.[i]?.trim()) {
      const d = distractors[i]!.trim();
      if (i === answerIndex) return d.toLowerCase().startsWith("correct") ? `Correct — ${explanation}` : `Correct — ${d}. ${explanation}`;
      return d.toLowerCase().startsWith("fails") || d.toLowerCase().startsWith("not")
        ? `Tempting but wrong: ${d}`
        : `Tempting distractor (${opt.slice(0, 80)}): ${d}`;
    }
    if (i === answerIndex) return `Correct — ${explanation}`;
    return `Tempting because it sounds operational (${opt.slice(0, 90)}), but it misses the stem constraint or sits lower on the hierarchy than the key.`;
  }) as [string, string, string, string];
}

function defaultMath(
  stem: string,
  explanation: string,
  errorCode: ErrorCode,
  options: [string, string, string, string],
  answerIndex: number,
): StepByStepMath | undefined {
  if (errorCode !== "FORM" && errorCode !== "UNIT" && errorCode !== "FIN") {
    const looksNumeric = /\b(TWA|TRIR|DART|cfm|ppm|RWL|dose|LFL|Q\s*=)/i.test(stem + explanation) && /\d/.test(stem);
    if (!looksNumeric) return undefined;
  }
  const correct = options[answerIndex] ?? "";
  const ksMatch = /Keystrokes?:\s*([^.]+)/i.exec(correct) || /Keystrokes?:\s*([^\n]+)/i.exec(explanation);
  const ks = ksMatch
    ? ksMatch[1]!.trim()
    : "Clear → enter values left-to-right → [=] → select closest listed option (DEG mode default).";
  let formula = "Apply the stem formula; pick closest listed value";
  const blob = `${stem} ${explanation}`;
  if (/\bTRIR\b/i.test(blob)) formula = "TRIR = (N × 200,000) / EH";
  else if (/\bDART\b/i.test(blob)) formula = "DART = (N × 200,000) / EH";
  else if (/\bTWA\b/i.test(blob)) formula = "TWA = Σ(Ci × Ti) / 8";
  else if (/\bRWL\b/i.test(blob)) formula = "RWL = LC × HM × VM × DM × AM × FM × CM";
  else if (/Q\s*=|cfm/i.test(blob)) formula = "Q = V × A";
  else if (/ppm|mg\/m/i.test(blob)) formula = "mg/m³ = (ppm × MW) / 24.45 at 25 °C";
  else if (/ROI|payback/i.test(blob)) formula = "ROI = (Gain − Cost) / Cost";
  else if (/LFL|LEL/i.test(blob)) formula = "1/LFL_mix = Σ(yi / LFL_i)";
  const nums = stem.match(/-?\d+(?:\.\d+)?/g)?.slice(0, 5) ?? [];
  const variables: Record<string, string> = {};
  nums.forEach((v, i) => {
    variables[String.fromCharCode(97 + i)] = v;
  });
  if (!Object.keys(variables).length) variables.note = "values from stem";
  const derivationSteps = explanation
    .split(/\.\s+/)
    .map((s) => s.trim())
    .filter(Boolean)
    .slice(0, 5);
  return {
    formula,
    variables,
    derivationSteps: derivationSteps.length
      ? derivationSteps
      : ["Identify the formula", "Substitute stem values", "Compute on TI-30XS", "Pick closest option"],
    ti30KeystrokeSequence: `MODE DEG if trig; ${ks}`,
  };
}

function defaultTakeaway(explanation: string): string {
  const core = explanation.length > 180 ? `${explanation.slice(0, 177)}...` : explanation;
  return `${core} Field move: verify the critical control before accepting a lower-tier program.`;
}

export function exam(
  taskCode: string,
  stem: string,
  options: [string, string, string, string],
  answerIndex: 0 | 1 | 2 | 3,
  explanation: string,
  errorCode: ErrorCode,
  difficulty: ClassItem["difficulty"] = "Exam",
  distractorsOrEnhanced?: [string, string, string, string] | EnhancedFields,
  maybeEnhanced?: EnhancedFields,
): ClassItem {
  let distractors: [string, string, string, string] | undefined;
  let enhanced: EnhancedFields | undefined;
  if (isEnhancedBag(distractorsOrEnhanced)) {
    enhanced = distractorsOrEnhanced;
  } else if (distractorsOrEnhanced) {
    distractors = distractorsOrEnhanced;
    enhanced = maybeEnhanced;
  } else if (maybeEnhanced) {
    enhanced = maybeEnhanced;
  }

  const difficultyLevel = mapDifficultyLevel(difficulty, enhanced?.difficultyLevel);
  const optionTraps =
    enhanced?.optionTraps ??
    defaultTraps(options, answerIndex, explanation, distractors);
  const fieldTakeaway = enhanced?.fieldTakeaway ?? defaultTakeaway(explanation);
  const authoritativeRationale = enhanced?.authoritativeRationale ?? explanation;

  return {
    stem,
    options,
    answerIndex,
    explanation: authoritativeRationale,
    errorCode,
    taskCode,
    difficulty,
    distractors,
    scenarioText: enhanced?.scenarioText,
    standardReference: enhanced?.standardReference,
    difficultyLevel,
    optionTraps,
    fieldTakeaway,
    stepByStepMath: enhanced?.stepByStepMath ?? defaultMath(stem, explanation, errorCode, options, answerIndex),
    authoritativeRationale,
  };
}
