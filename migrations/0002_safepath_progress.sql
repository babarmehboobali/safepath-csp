create table if not exists safepath_seat (
  email text primary key,
  name text not null,
  pass_hash text not null,
  created timestamptz not null default now()
);

create table if not exists safepath_progress (
  email text primary key references safepath_seat (email) on delete cascade,
  payload jsonb not null,
  updated timestamptz not null default now()
);
