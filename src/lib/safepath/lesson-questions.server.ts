import { createServerFn } from "@tanstack/react-start";
import type { ClassItem, DifficultyLevel, ErrorCode, StepByStepMath } from "@/content/classes/types";
import { getSql } from "@/lib/db";

export type LessonQuestion = {
  id: string;
  classId: number;
  item: ClassItem;
};

function parseJson<T>(value: string | null | undefined, fallback: T): T {
  try {
    return value ? (JSON.parse(value) as T) : fallback;
  } catch {
    return fallback;
  }
}

function normalizeDifficulty(value: string): ClassItem["difficulty"] {
  if (value === "Foundation") return "Foundation";
  if (value === "Expert" || value === "Advanced") return "Expert";
  return "Exam";
}

function normalizeDifficultyLevel(value: string | null | undefined, difficulty: ClassItem["difficulty"]): DifficultyLevel {
  if (value === "Fundamental") return "Fundamental";
  if (value === "Advanced Engineering" || value === "Advanced") return "Advanced Engineering";
  if (difficulty === "Foundation") return "Fundamental";
  if (difficulty === "Expert") return "Advanced Engineering";
  return "Applied Scenario";
}

function normalizeErrorCode(value: string): ErrorCode {
  const allowed: ErrorCode[] = ["HIER", "PELTLV", "TOOL", "UNIT", "STEM", "FORM", "FIN", "TIME"];
  return allowed.includes(value as ErrorCode) ? (value as ErrorCode) : "STEM";
}

function toStepByStepMath(value: string | null | undefined): StepByStepMath | undefined {
  if (!value) return undefined;
  const parsed = parseJson<Partial<StepByStepMath> | null>(value, null);
  if (!parsed || typeof parsed !== "object") return undefined;
  if (typeof parsed.formula !== "string" || typeof parsed.ti30KeystrokeSequence !== "string") return undefined;
  return {
    formula: parsed.formula,
    variables: parsed.variables && typeof parsed.variables === "object" ? parsed.variables as Record<string, string> : {},
    derivationSteps: Array.isArray(parsed.derivationSteps) ? parsed.derivationSteps.map(String) : [],
    ti30KeystrokeSequence: parsed.ti30KeystrokeSequence,
  };
}

export const getLessonQuestions = createServerFn({ method: "GET" })
  .validator((data: { classId: number }) => data)
  .handler(async ({ data }): Promise<LessonQuestion[]> => {
    const classId = Number(data.classId);
    if (!Number.isInteger(classId) || classId < 1 || classId > 10000) return [];

    const sql = await getSql();
    const rows = await sql.query<{
      id: string;
      classId: number;
      stem: string;
      optionsJson: string;
      answerIndex: number;
      explanation: string;
      errorCode: string;
      taskCode: string;
      difficulty: string;
      distractorsJson: string | null;
      scenarioText: string | null;
      standardReference: string | null;
      difficultyLevel: string | null;
      optionTrapsJson: string | null;
      fieldTakeaway: string | null;
      mathJson: string | null;
    }>(
      `SELECT "id", "classId", "stem", "optionsJson", "answerIndex", "explanation", "errorCode", "taskCode", "difficulty", "distractorsJson", "scenarioText", "standardReference", "difficultyLevel", "optionTrapsJson", "fieldTakeaway", "mathJson"
       FROM "Question"
       WHERE "classId" = $1
       ORDER BY "id"`,
      [classId],
    );

    return rows.map((row) => {
      const difficulty = normalizeDifficulty(row.difficulty);
      const options = parseJson<string[]>(row.optionsJson, []);
      const distractors = parseJson<[string, string, string, string] | null>(row.distractorsJson, null) ?? undefined;
      const optionTraps = parseJson<[string, string, string, string] | null>(row.optionTrapsJson, null) ?? undefined;
      const item: ClassItem = {
        stem: row.stem,
        options,
        answerIndex: Number(row.answerIndex),
        explanation: row.explanation,
        errorCode: normalizeErrorCode(row.errorCode),
        taskCode: row.taskCode,
        difficulty,
        distractors,
        scenarioText: row.scenarioText ?? undefined,
        standardReference: row.standardReference ?? undefined,
        difficultyLevel: normalizeDifficultyLevel(row.difficultyLevel, difficulty),
        optionTraps,
        fieldTakeaway: row.fieldTakeaway ?? undefined,
        stepByStepMath: toStepByStepMath(row.mathJson),
        authoritativeRationale: row.explanation,
      };
      return { id: row.id, classId: Number(row.classId), item };
    });
  });
