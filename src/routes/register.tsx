import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Shell } from "@/components/lesson/Shell";
import { registerAccount } from "@/lib/safepath/accounts";
import { readSession, writeSession } from "@/lib/safepath/session";

export const Route = createFileRoute("/register")({ component: Register });

const NOTICE =
  "I acknowledge that SafePath CSP is in an active development and testing phase. Content and availability may change. No payment is required during this phase.";

function Register() {
  const navigate = useNavigate();
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!agreed) {
      setError("Tick the development acknowledgement to continue.");
      return;
    }
    const fd = new FormData(e.currentTarget);
    const password = String(fd.get("password") || "");
    const confirm = String(fd.get("confirm") || "");
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }
    setBusy(true);
    setError(null);
    try {
      const row = await registerAccount(String(fd.get("name") || ""), String(fd.get("email") || ""), password);
      writeSession({ ...readSession(), email: row.email, name: row.name, agreed: true });
      navigate({ to: "/onboarding" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not create the seat.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <Shell>
      <div className="sp-wrap max-w-lg space-y-5">
        <div>
          <p className="sp-kicker">Register</p>
          <h1 className="sp-title mt-2 text-4xl">Name, email, password.</h1>
        </div>
        <form className="sp-card space-y-4 p-6" onSubmit={submit}>
          <label className="block text-sm">Name<input className="sp-field mt-1" name="name" required autoComplete="name" /></label>
          <label className="block text-sm">Email<input className="sp-field mt-1" name="email" type="email" required autoComplete="email" /></label>
          <label className="block text-sm">Password<input className="sp-field mt-1" name="password" type="password" required minLength={8} autoComplete="new-password" /></label>
          <label className="block text-sm">Confirm password<input className="sp-field mt-1" name="confirm" type="password" required minLength={8} autoComplete="new-password" /></label>
          <label className="flex items-start gap-3 text-sm text-fg-muted">
            <input type="checkbox" className="mt-1 accent-accent" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
            <span>{NOTICE}</span>
          </label>
          {error ? <p className="text-sm text-bad">{error}</p> : null}
          <button type="submit" className="sp-btn sp-btn-primary w-full" disabled={!agreed || busy}>
            {busy ? "Working…" : "Create seat"}
          </button>
        </form>
        <p className="text-sm text-fg-muted">
          Already have a seat? <Link to="/login" className="text-accent">Log in</Link>
        </p>
      </div>
    </Shell>
  );
}
