import { CLASS_PACKS } from "@/content/classes";
import { CATALOG } from "@/lib/safepath/catalog";

export type CardKind = "core" | "apply" | "trap" | "decision" | "teachback";

export type StudyCard = {
  id: string;
  classId: number;
  title: string;
  front: string;
  back: string;
  kind: CardKind;
  domain?: string;
  topic?: string;
};

function parseList(value: unknown): string[] {
  if (Array.isArray(value)) return value.map(String).filter(Boolean);
  if (typeof value !== "string") return [];
  try {
    const parsed = JSON.parse(value);
    if (Array.isArray(parsed)) return parsed.map(String).filter(Boolean);
    if (parsed && typeof parsed === "object") return Object.values(parsed).map(String).filter(Boolean);
  } catch {
    // Some legacy class packs contain plain text rather than JSON.
  }
  return value
    .split(/\n|\r\n|;(?=\s*\w)/)
    .map((s) => s.replace(/^[-•\d.)\s]+/, "").trim())
    .filter(Boolean);
}

function clean(value: unknown, fallback: string) {
  const text = String(value ?? "").replace(/\s+/g, " ").trim();
  return text || fallback;
}

function pushCard(out: StudyCard[], card: Omit<StudyCard, "id">) {
  const id = `${card.classId}:${card.kind}`;
  if (out.some((x) => x.id === id)) return;
  if (card.front.length < 12 || card.back.length < 12) return;
  out.push({ ...card, id });
}

/**
 * Builds retrieval cards from the structured lesson content instead of the old
 * generic 560-card package. Each lesson can contribute different retrieval
 * angles: rule, worked application, trap recognition, decision logic and
 * teach-back. This prevents the old "same answer for every card" pattern.
 */
export function classCards(): StudyCard[] {
  const out: StudyCard[] = [];

  for (const row of CATALOG) {
    const fields = CLASS_PACKS[row.id]?.classFields;
    if (!fields) continue;

    const rule = clean(fields.rule, clean(fields.brief, "Review the governing rule from this lesson."));
    const worked = clean(fields.workedCase, "Apply the lesson rule to a new workplace scenario and show your reasoning.");
    const traps = parseList(fields.trapsJson);
    const must = parseList(fields.mustScoreJson);
    const decisions = parseList(fields.stemIfThenJson);
    const contrast = parseList(fields.contrastJson);
    const teachBack = clean(fields.teachBackKey, "Explain the rule, the strongest evidence, one field example, and one common error.");

    pushCard(out, {
      classId: row.id,
      title: row.title,
      front: `CORE RULE — What is the governing CSP rule for ${row.title}?`,
      back: rule,
      kind: "core",
    });

    pushCard(out, {
      classId: row.id,
      title: row.title,
      front: `APPLY — How would you use the ${row.title} rule in a real workplace decision?`,
      back: worked,
      kind: "apply",
    });

    const trapText = traps.length
      ? `Common traps to reject: ${traps.slice(0, 5).join(" • ")}. Do not choose an attractive lower-level control when the stem leaves a stronger control open.`
      : clean(contrast[0], "Identify the most plausible distractor and explain why it fails the governing rule.");
    pushCard(out, {
      classId: row.id,
      title: row.title,
      front: `TRAPS — What mistake is most likely to make you miss a question on ${row.title}?`,
      back: trapText,
      kind: "trap",
    });

    const decisionText = decisions.length
      ? decisions.slice(0, 6).join(" | ")
      : must.length
        ? must.slice(0, 5).join(" | ")
        : rule;
    pushCard(out, {
      classId: row.id,
      title: row.title,
      front: `DECISION — When the stem changes, what should you do first for ${row.title}?`,
      back: decisionText,
      kind: "decision",
    });

    // Add a fifth card only where the lesson has enough structured material.
    // This naturally produces a variable, non-templated deck rather than
    // forcing identical cards into every lesson.
    if (must.length >= 3 || contrast.length >= 3 || fields.formulaSlug) {
      const teachText = must.length >= 3
        ? `Teach-back checklist: ${must.slice(0, 6).join(" • ")}`
        : contrast.length >= 3
          ? `Distinguish: ${contrast.slice(0, 6).join(" • ")}`
          : `Formula cue: ${fields.formulaSlug}. ${teachBack}`;
      pushCard(out, {
        classId: row.id,
        title: row.title,
        front: `TEACH-BACK — Can you explain ${row.title} without looking at the notes?`,
        back: `${teachText} ${teachBack}`,
        kind: "teachback",
      });
    }
  }

  return out;
}
