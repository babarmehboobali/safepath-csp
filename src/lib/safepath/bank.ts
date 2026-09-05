import { CLASS_PACKS } from "@/content/classes";
import type { ClassItem } from "@/content/classes/types";
import { extraBankItems } from "@/content/questions/csp-bank";
import { catalogForTrack } from "@/lib/safepath/catalog";
import { CSP_DOMAIN_WEIGHTS } from "@/lib/safepath/domains";
import type { TrackId } from "@/lib/safepath/session";

export type BankItem = {
  classId: number;
  title: string;
  domain: number;
  item: ClassItem;
};

export type PracticeDifficulty = "balanced" | "exam" | "challenging" | "hard";

export const PRACTICE_DIFFICULTIES: Record<PracticeDifficulty, { label: string; description: string; mix: string }> = {
  balanced: { label: "Balanced", description: "Concept recall plus applied scenarios.", mix: "25% fundamental · 60% applied · 15% advanced" },
  exam: { label: "CSP exam-style", description: "Application-heavy mix for serious exam preparation.", mix: "10% fundamental · 55% applied · 35% advanced" },
  challenging: { label: "Challenging", description: "More judgment, ambiguity, calculations and competing controls.", mix: "5% fundamental · 45% applied · 50% advanced" },
  hard: { label: "Hard", description: "Advanced-heavy training for candidates who already know the basics.", mix: "0% fundamental · 35% applied · 65% advanced" },
};

const DIFFICULTY_TARGETS: Record<PracticeDifficulty, [number, number, number]> = {
  balanced: [25, 60, 15],
  exam: [10, 55, 35],
  challenging: [5, 45, 50],
  hard: [0, 35, 65],
};

const CACHE: Partial<Record<TrackId, BankItem[]>> = {};

export function classesForTrack(track: TrackId) {
  return catalogForTrack(track);
}

export function nextOpenClass(completed: number[], track: TrackId) {
  return classesForTrack(track).find((row) => !completed.includes(row.id)) ?? classesForTrack(track)[0];
}

export function bankForTrack(track: TrackId): BankItem[] {
  const hit = CACHE[track];
  if (hit) return hit;
  const rows: BankItem[] = [];
  for (const row of classesForTrack(track)) {
    const pack = CLASS_PACKS[row.id];
    if (!pack) continue;
    for (const item of pack.items) rows.push({ classId: row.id, title: row.title, domain: row.domain, item });
  }
  CACHE[track] = rows.concat(extraBankItems());
  return CACHE[track]!;
}

function difficultyBucket(row: BankItem): 0 | 1 | 2 {
  if (row.item.difficulty === "Expert" || row.item.difficultyLevel === "Advanced Engineering") return 2;
  if (row.item.difficulty === "Foundation" || row.item.difficultyLevel === "Fundamental") return 0;
  return 1;
}

function weightedPool(bank: BankItem[]) {
  const weighted: BankItem[] = [];
  for (const row of bank) {
    const w = CSP_DOMAIN_WEIGHTS[row.domain as keyof typeof CSP_DOMAIN_WEIGHTS] ?? 10;
    const copies = Math.max(1, Math.round(w / 8));
    for (let i = 0; i < copies; i += 1) weighted.push(row);
  }
  return weighted;
}

function uniqueKey(row: BankItem) {
  return `${row.classId}:${row.item.stem.slice(0, 64)}`;
}

function takeRandom(pool: BankItem[], count: number, used: Set<string>) {
  const out: BankItem[] = [];
  let guard = 0;
  while (out.length < count && pool.length && guard < count * 80) {
    guard += 1;
    const row = pool[Math.floor(Math.random() * pool.length)];
    if (!row) continue;
    const key = uniqueKey(row);
    if (used.has(key)) continue;
    used.add(key);
    out.push(row);
  }
  return out;
}

export function pickByDomain(count: number, domain: number, track: TrackId, difficulty: PracticeDifficulty = "balanced"): BankItem[] {
  const bank = bankForTrack(track).filter((row) => row.domain === domain);
  const pool = bank.length ? bank : bankForTrack(track);
  return pickWithDifficulty(count, pool, difficulty);
}

export function pickWeighted(count: number, track: TrackId, difficulty: PracticeDifficulty = "balanced"): BankItem[] {
  return pickWithDifficulty(count, bankForTrack(track), difficulty);
}

export function pickWithDifficulty(count: number, bank: BankItem[], difficulty: PracticeDifficulty = "balanced"): BankItem[] {
  if (!bank.length) return [];
  const targets = DIFFICULTY_TARGETS[difficulty];
  const used = new Set<string>();
  const out: BankItem[] = [];
  const weighted = weightedPool(bank);
  const buckets: [BankItem[], BankItem[], BankItem[]] = [[], [], []];
  for (const row of weighted) buckets[difficultyBucket(row)].push(row);

  const counts = targets.map((pct) => Math.round((count * pct) / 100));
  while (counts.reduce((a, b) => a + b, 0) < count) {
    const best = [0, 1, 2].sort((a, b) => buckets[b].length - buckets[a].length)[0]!;
    counts[best] += 1;
  }
  for (const bucket of [2, 1, 0] as const) out.push(...takeRandom(buckets[bucket], counts[bucket]!, used));

  if (out.length < count) out.push(...takeRandom(weighted.filter((row) => !used.has(uniqueKey(row))), count - out.length, used));
  if (out.length < count) out.push(...takeRandom(bank.filter((row) => !used.has(uniqueKey(row))), count - out.length, used));
  return out.slice(0, count);
}
