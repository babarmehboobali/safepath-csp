import { getSql } from "@/lib/db";
import { getSessionUser, requireUserId } from "@/lib/auth/verify.server";
import type { StudioSession } from "./session";

async function ready() {
  const sql = await getSql();
  await sql.query(`
    create table if not exists safepath_progress (
      email text primary key,
      payload jsonb not null,
      updated timestamptz not null default now()
    )
  `);
  return sql;
}

/** Legacy compatibility endpoint: passwords are no longer accepted or stored here. */
export async function serverUpsertSeat(row: { email?: string; name?: string }) {
  const user = await getSessionUser();
  if (!user) throw new Error("Unauthorized");
  if (row.email && user.email && row.email.trim().toLowerCase() !== user.email.toLowerCase()) throw new Error("Forbidden");
  const sql = await ready();
  await sql.query(
    `insert into safepath_progress (email, payload, updated)
     values ($1, $2::jsonb, now())
     on conflict (email) do update set payload = jsonb_set(safepath_progress.payload, '{name}', to_jsonb($2::text), true), updated = now()`,
    [user.email, JSON.stringify(row.name ?? user.email)],
  );
}

/** No password hash is ever returned to the browser. */
export async function serverFindSeat() {
  const user = await getSessionUser();
  if (!user) throw new Error("Unauthorized");
  return user.email ? { email: user.email, name: user.email } : null;
}

export async function serverSaveProgress(session: StudioSession) {
  const user = await getSessionUser();
  if (!user?.email) throw new Error("Unauthorized");
  // The browser may send a cached email, but it can never choose the Neon row.
  // The authenticated Better Auth identity is the authority.
  const safeSession: StudioSession = { ...session, email: user.email };
  const sql = await ready();
  await sql.query(
    `insert into safepath_progress (email, payload, updated)
     values ($1, $2::jsonb, now())
     on conflict (email) do update set payload = excluded.payload, updated = now()`,
    [user.email.toLowerCase(), JSON.stringify(safeSession)],
  );
}

export async function serverLoadProgress() {
  const user = await getSessionUser();
  if (!user?.email) throw new Error("Unauthorized");
  await requireUserId();
  const sql = await ready();
  const rows = await sql.query<{ payload: StudioSession | string }>(
    `select payload from safepath_progress where email = $1`,
    [user.email.toLowerCase()],
  );
  const raw = rows[0]?.payload;
  if (!raw) return null;
  return typeof raw === "string" ? (JSON.parse(raw) as StudioSession) : raw;
}
