import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { resetPassword } from "@/lib/safepath/accounts";
import { Shell } from "@/components/lesson/Shell";

export const Route = createFileRoute("/reset-password")({ component: ResetPassword });

function ResetPassword() {
  const navigate = useNavigate();
  const token = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "").get("token") || "";
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(token ? null : "This password-reset link is missing its token.");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (password !== confirm) { setError("Passwords do not match."); return; }
    setBusy(true); setError(null);
    try {
      await resetPassword(token, password);
      setDone(true);
      window.setTimeout(() => navigate({ to: "/login" }), 1200);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not reset your password.");
    } finally { setBusy(false); }
  }

  return (
    <Shell>
      <div className="sp-wrap max-w-xl py-10">
        <div className="sp-card space-y-6 p-6">
          <div>
            <p className="sp-kicker">Account security</p>
            <h1 className="sp-title mt-2 text-4xl">Reset your password.</h1>
            <p className="mt-2 text-fg-muted">Your reset link is valid for a limited time.</p>
          </div>
          {done ? (
            <div className="rounded-lg border border-ok bg-ok/10 p-4">Password changed. Returning to sign in…</div>
          ) : (
            <form className="space-y-4" onSubmit={submit}>
              <label className="block text-sm">New password<input className="sp-field mt-1" type="password" minLength={8} maxLength={128} value={password} onChange={(e) => setPassword(e.target.value)} required autoComplete="new-password" /></label>
              <label className="block text-sm">Confirm password<input className="sp-field mt-1" type="password" minLength={8} maxLength={128} value={confirm} onChange={(e) => setConfirm(e.target.value)} required autoComplete="new-password" /></label>
              {error ? <p className="text-sm text-bad">{error}</p> : null}
              <button className="sp-btn sp-btn-primary w-full" disabled={busy || !token}>{busy ? "Saving…" : "Set new password"}</button>
              <Link to="/login" className="sp-btn sp-btn-ghost block w-full text-center">Back to log in</Link>
            </form>
          )}
        </div>
      </div>
    </Shell>
  );
}
