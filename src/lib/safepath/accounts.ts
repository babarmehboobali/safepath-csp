const KEY = "safepath.accounts.v1";

export type Account = {
  email: string;
  name: string;
  passHash: string;
  created: number;
};

function readAll(): Record<string, Account> {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(KEY) || "{}") as Record<string, Account>;
  } catch {
    return {};
  }
}

function writeAll(map: Record<string, Account>) {
  localStorage.setItem(KEY, JSON.stringify(map));
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
  const map = readAll();
  if (map[key]) throw new Error("That email already has a seat. Log in.");
  map[key] = {
    email: key,
    name: name.trim(),
    passHash: await hashPass(password),
    created: Date.now(),
  };
  writeAll(map);
  return map[key];
}

export async function loginAccount(email: string, password: string, name?: string) {
  const key = email.trim().toLowerCase();
  const map = readAll();
  const row = map[key];
  if (!row) throw new Error("No seat for that email. Create one.");
  const hash = await hashPass(password);
  if (hash !== row.passHash) throw new Error("Email or password is wrong.");
  if (name?.trim()) {
    row.name = name.trim();
    writeAll(map);
  }
  return row;
}

export async function resetAccount(email: string, password: string) {
  const key = email.trim().toLowerCase();
  const map = readAll();
  const row = map[key];
  if (!row) throw new Error("No seat for that email.");
  if (password.length < 8) throw new Error("Password must be at least 8 characters.");
  row.passHash = await hashPass(password);
  writeAll(map);
  return row;
}
