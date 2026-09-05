-- Password reset support for the SafePath credential flow.
-- Keep reset tokens server-side and store only a hash of the token.
create table if not exists "PasswordResetToken" (
  "id" text primary key,
  "userId" text not null,
  "tokenHash" text not null unique,
  "expiresAt" timestamp not null,
  "createdAt" timestamp not null default now()
);

create index if not exists "PasswordResetToken_userId_idx"
  on "PasswordResetToken" ("userId");

create index if not exists "PasswordResetToken_expiresAt_idx"
  on "PasswordResetToken" ("expiresAt");
