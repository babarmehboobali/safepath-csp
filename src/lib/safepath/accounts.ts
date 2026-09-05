import { persistGet, persistHydrate, persistSet } from "./persist";

const KEY = "safepath.accounts.v1";
const KEY_STABLE = "safepath.accounts";

export type Account = {
  email: string;
  name: string;
  passHash: string;
  created: number;
};

function parseMap(raw: string | null): Record<string, Account> {
  if (!raw) return {};
  try {
    return JSON.parse(raw) as Record<string, Account>;
  } catch {
    return {};
  }
}

function readAll(): Record<string, Account> {
  if (typeof window === "undefined") return {};
  const a = parseMap(persistGet(KEY));
  const b = parseMap(persistGet(KEY_STABLE));
  return { ...b, ...a };
}

function writeAll(map: Record<string, Account>) {
  const raw = JSON.stringify(map);
  persistSet(KEY, raw);
  persistSet(KEY_STABLE, raw);
}

export async function hydrateAccounts() {
  const raw = (await persistHydrate(KEY)) || (await persistHydrate(KEY_STABLE));
  if (raw && !persistGet(KEY)) persistSet(KEY, raw);
}

export async function hashPass(password: string) {
  const data = new TextEncoder().encode(`safepath:${password}`);
  const buf = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export function findAccount(email: string) {
  return readAll()[email.trim().toLowerCase()] ?? null;
}

export async function registerAccount(name: string, email: string, password: string) {
  const key = email.trim().toLowerCase();
  if (!name.trim()) throw new Error("Enter your name.");
  if (!key || !key.includes("@")) throw new Error("Enter a valid email.");
  if (password.length < 8) throw new Error("Password must be at least 8 characters.");
  await hydrateAccounts();
  const map = readAll();
  if (map[key]) throw new Error("That email already has a seat. Log in.");
  map[key] = {
    email: key,
    name: name.trim(),
    passHash: await hashPass(password),
    created: Date.now(),
  };
  writeAll(map);
  void import("./seats-api").then((api) => api.cloudUpsertSeat({ data: map[key] })).catch(() => undefined);
  return map[key];
}

export async function loginAccount(email: string, password: string, name?: string) {
  const key = email.trim().toLowerCase();
  await hydrateAccounts();
  const map = readAll();
  let row = map[key];
  const hash = await hashPass(password);
  if (!row) {
    try {
      const { cloudFindSeat } = await import("./seats-api");
      const remote = await cloudFindSeat({ data: { email: key } });
      if (remote && remote.passHash === hash) {
        map[key] = remote;
        writeAll(map);
        row = remote;
      }
    } catch {
      /* local only */
    }
  }
  if (!row) throw new Error("No seat for that email. Create one.");
  if (hash !== row.passHash) throw new Error("Email or password is wrong.");
  if (name?.trim()) {
    row.name = name.trim();
    writeAll(map);
    void import("./seats-api").then((api) => api.cloudUpsertSeat({ data: row })).catch(() => undefined);
  }
  return row;
}

export async function resetAccount(email: string, password: string) {
  const key = email.trim().toLowerCase();
  await hydrateAccounts();
  const map = readAll();
  const row = map[key];
  if (!row) throw new Error("No seat for that email.");
  if (password.length < 8) throw new Error("Password must be at least 8 characters.");
  row.passHash = await hashPass(password);
  writeAll(map);
  void import("./seats-api").then((api) => api.cloudUpsertSeat({ data: row })).catch(() => undefined);
  return row;
}
