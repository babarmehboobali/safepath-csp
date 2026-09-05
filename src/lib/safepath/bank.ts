import { CLASS_PACKS } from "@/content/classes";
import type { ClassItem } from "@/content/classes/types";
import { catalogForTrack } from "@/lib/safepath/catalog";
import { CSP_DOMAIN_WEIGHTS } from "@/lib/safepath/domains";
import type { TrackId } from "@/lib/safepath/session";

export type BankItem = {
  classId: number;
  title: string;
  domain: number;
  item: ClassItem;
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
    for (const item of pack.items) {
      rows.push({ classId: row.id, title: row.title, domain: row.domain, item });
    }
  }
  CACHE[track] = rows;
  return rows;
}

export function pickByDomain(count: number, domain: number, track: TrackId): BankItem[] {
  const bank = bankForTrack(track).filter((row) => row.domain === domain);
  const pool = bank.length ? bank : bankForTrack(track);
  const out: BankItem[] = [];
  const used = new Set<string>();
  let guard = 0;
  while (out.length < count && guard < count * 20) {
    guard += 1;
    const row = pool[Math.floor(Math.random() * pool.length)];
    if (!row) continue;
    const key = `${row.classId}:${row.item.stem.slice(0, 40)}`;
    if (used.has(key)) continue;
    used.add(key);
    out.push(row);
  }
  while (out.length < count) out.push(pool[out.length % pool.length]!);
  return out.slice(0, count);
}

export function pickWeighted(count: number, track: TrackId): BankItem[] {
  const bank = bankForTrack(track);
  if (!bank.length) return [];
  const weighted: BankItem[] = [];
  for (const row of bank) {
    const w = CSP_DOMAIN_WEIGHTS[row.domain as keyof typeof CSP_DOMAIN_WEIGHTS] ?? 10;
    const copies = Math.max(1, Math.round(w / 8));
    for (let i = 0; i < copies; i += 1) weighted.push(row);
  }
  const out: BankItem[] = [];
  const used = new Set<string>();
  let guard = 0;
  while (out.length < count && guard < count * 30) {
    guard += 1;
    const row = weighted[Math.floor(Math.random() * weighted.length)];
    if (!row) continue;
    const key = `${row.classId}:${row.item.stem.slice(0, 48)}`;
    if (used.has(key)) continue;
    used.add(key);
    out.push(row);
  }
  while (out.length < count) {
    out.push(bank[out.length % bank.length]!);
  }
  return out.slice(0, count);
}
