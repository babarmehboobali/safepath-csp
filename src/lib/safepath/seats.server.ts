import { getSql } from "@/lib/db";
import type { Account } from "./accounts";
import type { StudioSession } from "./session";

async function ready() {
  const sql = await getSql();
  await sql.query(`
    create table if not exists safepath_seat (
      email text primary key,
      name text not null,
      pass_hash text not null,
      created timestamptz not null default now()
    )
  `);
  await sql.query(`
    create table if not exists safepath_progress (
      email text primary key,
      payload jsonb not null,
      updated timestamptz not null default now()
    )
  `);
  return sql;
}

export async function serverUpsertSeat(row: Account) {
  const sql = await ready();
  await sql.query(
    `insert into safepath_seat (email, name, pass_hash, created)
     values ($1, $2, $3, to_timestamp($4 / 1000.0))
     on conflict (email) do update set name = excluded.name, pass_hash = excluded.pass_hash`,
    [row.email, row.name, row.passHash, row.created],
  );
}

export async function serverFindSeat(email: string) {
  const sql = await ready();
  const rows = await sql.query<{ email: string; name: string; pass_hash: string; created: string }>(
    `select email, name, pass_hash, created from safepath_seat where email = $1`,
    [email.trim().toLowerCase()],
  );
  const row = rows[0];
  if (!row) return null;
  return {
    email: row.email,
    name: row.name,
    passHash: row.pass_hash,
    created: Date.parse(row.created) || Date.now(),
  } satisfies Account;
}

export async function serverSaveProgress(session: StudioSession) {
  if (!session.email) return;
  const sql = await ready();
  await sql.query(
    `insert into safepath_progress (email, payload, updated)
     values ($1, $2::jsonb, now())
     on conflict (email) do update set payload = excluded.payload, updated = now()`,
    [session.email.trim().toLowerCase(), JSON.stringify(session)],
  );
}

export async function serverLoadProgress(email: string) {
  const sql = await ready();
  const rows = await sql.query<{ payload: StudioSession | string }>(
    `select payload from safepath_progress where email = $1`,
    [email.trim().toLowerCase()],
  );
  const raw = rows[0]?.payload;
  if (!raw) return null;
  return typeof raw === "string" ? (JSON.parse(raw) as StudioSession) : raw;
}
