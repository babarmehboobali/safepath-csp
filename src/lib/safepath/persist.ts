const COOKIE = "safepath_seat";
const IDB_NAME = "safepath-csp";
const IDB_STORE = "kv";

export function persistGet(key: string): string | null {
  if (typeof window === "undefined") return null;
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

export function persistSet(key: string, value: string) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, value);
  } catch {
    /* quota */
  }
  void idbSet(key, value);
}

export function persistDel(key: string) {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(key);
  } catch {
    /* ignore */
  }
  void idbDel(key);
}

export async function persistHydrate(key: string): Promise<string | null> {
  const local = persistGet(key);
  if (local) return local;
  const fromIdb = await idbGet(key);
  if (fromIdb) {
    try {
      localStorage.setItem(key, fromIdb);
    } catch {
      /* ignore */
    }
    return fromIdb;
  }
  return null;
}

export function rememberEmail(email: string) {
  if (typeof document === "undefined") return;
  const value = encodeURIComponent(email.trim().toLowerCase());
  const parts = [`${COOKIE}=${value}`, "Path=/", "Max-Age=31536000", "SameSite=Lax"];
  const host = window.location.hostname;
  if (host.endsWith("safepath-csp.com")) parts.push("Domain=.safepath-csp.com");
  document.cookie = parts.join("; ");
}

export function forgottenEmail() {
  if (typeof document === "undefined") return;
  const parts = [`${COOKIE}=`, "Path=/", "Max-Age=0"];
  const host = window.location.hostname;
  if (host.endsWith("safepath-csp.com")) parts.push("Domain=.safepath-csp.com");
  document.cookie = parts.join("; ");
}

export function rememberedEmail() {
  if (typeof document === "undefined") return "";
  const hit = document.cookie.split(";").map((p) => p.trim()).find((p) => p.startsWith(`${COOKIE}=`));
  if (!hit) return "";
  try {
    return decodeURIComponent(hit.slice(COOKIE.length + 1));
  } catch {
    return "";
  }
}

function openDb(): Promise<IDBDatabase | null> {
  return new Promise((resolve) => {
    if (typeof indexedDB === "undefined") return resolve(null);
    const req = indexedDB.open(IDB_NAME, 1);
    req.onupgradeneeded = () => {
      if (!req.result.objectStoreNames.contains(IDB_STORE)) req.result.createObjectStore(IDB_STORE);
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => resolve(null);
  });
}

async function idbGet(key: string): Promise<string | null> {
  const db = await openDb();
  if (!db) return null;
  return new Promise((resolve) => {
    const tx = db.transaction(IDB_STORE, "readonly");
    const req = tx.objectStore(IDB_STORE).get(key);
    req.onsuccess = () => resolve(typeof req.result === "string" ? req.result : null);
    req.onerror = () => resolve(null);
  });
}

async function idbSet(key: string, value: string) {
  const db = await openDb();
  if (!db) return;
  db.transaction(IDB_STORE, "readwrite").objectStore(IDB_STORE).put(value, key);
}

async function idbDel(key: string) {
  const db = await openDb();
  if (!db) return;
  db.transaction(IDB_STORE, "readwrite").objectStore(IDB_STORE).delete(key);
}
