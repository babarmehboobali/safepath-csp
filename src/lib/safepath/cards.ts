import { CLASS_PACKS } from "@/content/classes";
import { CATALOG } from "@/lib/safepath/catalog";

export type CardKind = "core" | "apply" | "contrast" | "trap" | "decision" | "teachback" | "formula" | "rapid";
export type CardDifficulty = 1 | 2 | 3 | 4 | 5;

export type StudyCard = {
  id: string;
  classId: number;
  title: string;
  front: string;
  back: string;
  kind: CardKind;
  difficulty: CardDifficulty;
  domain: string;
  tags: string[];
  source: "lesson-structured";
};

function clean(value: unknown) {
  return String(value ?? "")
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function parseList(value: unknown): string[] {
  if (Array.isArray(value)) return value.map(clean).filter(Boolean);
  if (typeof value !== "string") return [];
  try {
    const parsed = JSON.parse(value);
    if (Array.isArray(parsed)) return parsed.map(clean).filter(Boolean);
    if (parsed && typeof parsed === "object") return Object.values(parsed).map(clean).filter(Boolean);
  } catch {
    // Legacy lesson packs may contain plain text.
  }
  return value
    .split(/\n|\r\n|;(?=\s*\w)|\|/)
    .map((s) => clean(s.replace(/^[-•\d.)\s]+/, "")))
    .filter(Boolean);
}

function pushCard(out: StudyCard[], card: Omit<StudyCard, "id">) {
  if (card.front.length < 18 || card.back.length < 18) return;
  const frontKey = card.front.toLowerCase();
  const backKey = card.back.toLowerCase();
  if (out.some((x) => x.front.toLowerCase() === frontKey)) return;
  if (out.some((x) => x.classId === card.classId && x.back.toLowerCase() === backKey)) return;
  out.push({ ...card, id: `${card.classId}:${card.kind}:${out.length}` });
}

function difficulty(kind: CardKind): CardDifficulty {
  if (kind === "rapid" || kind === "core") return 1;
  if (kind === "formula" || kind === "contrast") return 2;
  if (kind === "apply" || kind === "teachback") return 3;
  return 4;
}

/**
 * Compiles structured lesson evidence into varied retrieval experiences.
 * This intentionally does not invent technical facts or manufacture fake
 * distractors. Richer cards come from richer source material.
 */
export function classCards(): StudyCard[] {
  const out: StudyCard[] = [];

  for (const row of CATALOG) {
    const fields = CLASS_PACKS[row.id]?.classFields;
    if (!fields) continue;

    const title = clean(row.title);
    const domain = clean(row.domain) || "CSP";
    const rule = clean(fields.rule) || clean(fields.brief);
    const worked = clean(fields.workedCase);
    const hook = clean(fields.hook) || clean(fields.hookOilGas) || clean(fields.hookConstruction);
    const traps = parseList(fields.trapsJson);
    const must = parseList(fields.mustScoreJson);
    const decisions = parseList(fields.stemIfThenJson);
    const contrasts = parseList(fields.contrastJson);
    const teachBack = clean(fields.teachBackKey);
    const formula = clean(fields.formulaSlug);

    if (rule) pushCard(out, {
      classId: row.id, title,
      front: `CORE RULE — What is the governing rule for ${title}? State the rule and its limiting condition.`,
      back: rule,
      kind: "core", difficulty: difficulty("core"), domain,
      tags: ["rule", "foundation"], source: "lesson-structured",
    });

    if (worked) pushCard(out, {
      classId: row.id, title,
      front: `APPLICATION — Apply ${title} to a workplace decision. What would you verify before accepting the proposed action?`,
      back: worked,
      kind: "apply", difficulty: difficulty("apply"), domain,
      tags: ["application", "field-transfer"], source: "lesson-structured",
    });

    for (const item of contrasts.slice(0, 4)) pushCard(out, {
      classId: row.id, title,
      front: `COMPARE / CONTRAST — In ${title}, explain this distinction without relying on the wording alone: ${item}`,
      back: item,
      kind: "contrast", difficulty: difficulty("contrast"), domain,
      tags: ["contrast", "discrimination"], source: "lesson-structured",
    });

    if (traps.length) pushCard(out, {
      classId: row.id, title,
      front: `EXAM TRAP — Which plausible mistake could cause a competent safety professional to select the wrong answer for ${title}?`,
      back: `Reject these trap patterns: ${traps.slice(0, 6).join(" • ")}. Check the stem's constraints, governing principle, hierarchy and verification evidence before choosing.`,
      kind: "trap", difficulty: difficulty("trap"), domain,
      tags: ["exam-trap", "distractor"], source: "lesson-structured",
    });

    for (const item of decisions.slice(0, 5)) pushCard(out, {
      classId: row.id, title,
      front: `DECISION LOGIC — When the scenario changes, what action follows from this decision map? ${item}`,
      back: item,
      kind: "decision", difficulty: difficulty("decision"), domain,
      tags: ["decision", "scenario"], source: "lesson-structured",
    });

    if (must.length >= 3) pushCard(out, {
      classId: row.id, title,
      front: `TEACH-BACK — Close your notes. Teach the must-score knowledge for ${title} as if coaching another HSE professional.`,
      back: `${must.slice(0, 8).join(" • ")}${teachBack ? ` Teach-back cue: ${teachBack}` : ""}`,
      kind: "teachback", difficulty: difficulty("teachback"), domain,
      tags: ["teach-back", "must-score", "retrieval"], source: "lesson-structured",
    });

    if (formula) pushCard(out, {
      classId: row.id, title,
      front: `FORMULA RECALL — For ${formula}, what is being calculated, what variables/units must be checked, and what condition makes the formula appropriate?`,
      back: worked || rule,
      kind: "formula", difficulty: difficulty("formula"), domain,
      tags: ["formula", "units", "calculator"], source: "lesson-structured",
    });

    if (hook) pushCard(out, {
      classId: row.id, title,
      front: `RAPID RECALL — Give the one-sentence mental model that should come to mind when you see ${title} in a CSP stem.`,
      back: hook,
      kind: "rapid", difficulty: difficulty("rapid"), domain,
      tags: ["rapid", "mental-model"], source: "lesson-structured",
    });
  }

  return out;
}

export function shuffleCards<T>(items: T[], seed = Math.random()): T[] {
  const copy = [...items];
  let state = Math.max(1, Math.floor(Math.abs(seed) * 2147483647));
  for (let i = copy.length - 1; i > 0; i -= 1) {
    state = (state * 48271) % 2147483647;
    const j = state % (i + 1);
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
