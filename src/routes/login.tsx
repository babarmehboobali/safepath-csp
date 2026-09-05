import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Clip } from "@/components/lesson/Clip";
import { Shell } from "@/components/lesson/Shell";
import { loginAccount, registerAccount, requestPasswordReset } from "@/lib/safepath/accounts";
import { forgottenEmail, rememberedEmail } from "@/lib/safepath/persist";
import { hydrateSession, readSession, writeSession } from "@/lib/safepath/session";

export const Route = createFileRoute("/login")({ component: Login });

const TERMS = [
  "SafePath CSP is an independent study aid. It is not BCSP, not Pearson VUE, and not official exam software.",
  "Content is in active development and testing. Lessons, items, and availability may change without notice.",
  "No payment is required in this phase. If paid plans are introduced later, they will be disclosed before any charge.",
  "Practice scores and the readiness model are study estimates. They are not a pass promise and not a BCSP result.",
  "Formula drawers, calculators, and highlight tools are teaching aids. They are not the tools you will see on exam day.",
  "You are responsible for checking current BCSP eligibility, blueprint, and exam-day rules.",
];

function Login() {
  const navigate = useNavigate();
  const [agreed, setAgreed] = useState(false);
  const [readOpen, setReadOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [mode, setMode] = useState<"login" | "register" | "reset">("login");
  const [savedEmail, setSavedEmail] = useState("");
  const [stay, setStay] = useState(true);

  useEffect(() => {
    void hydrateSession().then((s) => {
      const email = s.email || rememberedEmail();
      setSavedEmail(email);
      if (s.agreed) setAgreed(true);
    });
  }, []);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!agreed) { setReadOpen(true); setError("Open and accept the agreement before you continue."); return; }
    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("email") || "").trim().toLowerCase();
    const name = String(fd.get("name") || "").trim();
    const password = String(fd.get("password") || "");
    const confirm = String(fd.get("confirm") || "");
    setBusy(true); setError(null); setNotice(null);
    try {
      if (mode === "reset") {
        await requestPasswordReset(email);
        setNotice("If an account exists for that email, a password-reset link has been sent. Check your inbox and spam folder.");
        return;
      }
      if (mode === "register") {
        if (password !== confirm) throw new Error("Passwords do not match.");
        const row = await registerAccount(name, email, password);
        writeSession({ ...readSession(), email: row.email, name: row.name, agreed: true });
        navigate({ to: "/onboarding" });
        return;
      }
      const row = await loginAccount(email, password, stay);
      writeSession({ ...readSession(), email: row.email, name: row.name, agreed: true });
      if (!stay) forgottenEmail();
      navigate({ to: "/today" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not continue.");
    } finally { setBusy(false); }
  }

  return (
    <Shell>
      <div className="sp-wrap grid max-w-5xl gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-center">
        <div className="sp-card overflow-hidden">
          <Clip src="/lessons/hierarchy.mp4" poster="/lessons/hierarchy.jpg" title="preview" />
          <div className="p-6"><p className="sp-kicker">SafePath CSP</p><p className="mt-2 font-serif text-2xl">Your personal CSP coach, with your progress saved securely.</p></div>
        </div>
        <div className="space-y-5">
          <div><p className="sp-kicker">{mode === "reset" ? "Reset password" : mode === "register" ? "Register" : "Log in"}</p><h1 className="sp-title mt-2 text-4xl">{mode === "reset" ? "Recover your seat." : mode === "register" ? "Create your seat." : "Open your seat."}</h1></div>
          <div className="sp-card space-y-3 p-4">
            <p className="text-sm text-fg">{agreed ? "Agreement accepted for this session." : "Read and accept the agreement before continuing."}</p>
            <button type="button" className="sp-btn sp-btn-primary w-full" onClick={() => setReadOpen(true)}>{agreed ? "View agreement" : "Read agreement"}</button>
            <label className="flex items-center gap-3 text-sm text-fg"><input type="checkbox" className="h-4 w-4 accent-accent" checked={agreed} readOnly /><span>I have read and accept the agreement.</span></label>
          </div>
          <form className="sp-card space-y-4 p-6" onSubmit={submit}>
            {mode === "register" ? <label className="block text-sm">Name<input name="name" className="sp-field mt-1" autoComplete="name" required placeholder="Your name" /></label> : null}
            <label className="block text-sm">Email<input name="email" type="email" required className="sp-field mt-1" autoComplete="username" defaultValue={savedEmail} placeholder="you@example.com" /></label>
            {mode !== "reset" ? <label className="block text-sm"><span className="mb-1 flex items-center justify-between">Password{mode === "login" ? <button type="button" className="text-xs font-semibold text-accent" onClick={() => { setMode("reset"); setError(null); setNotice(null); }}>Forgot password?</button> : null}</span><input name="password" type="password" minLength={8} maxLength={128} required className="sp-field" autoComplete={mode === "login" ? "current-password" : "new-password"} /></label> : null}
            {mode === "register" ? <label className="block text-sm">Confirm password<input name="confirm" type="password" minLength={8} maxLength={128} required className="sp-field mt-1" autoComplete="new-password" /></label> : null}
            {error ? <p className="text-sm text-bad">{error}</p> : null}
            {notice ? <p className="rounded-lg border border-ok bg-ok/10 p-3 text-sm">{notice}</p> : null}
            {mode === "login" ? <label className="flex items-center gap-3 text-sm text-fg"><input type="checkbox" checked={stay} onChange={(e) => setStay(e.target.checked)} className="h-4 w-4 accent-accent" />Stay signed in on this device</label> : null}
            <button type="submit" className="sp-btn sp-btn-primary w-full" disabled={busy}>{busy ? "Working…" : mode === "reset" ? "Email reset link" : mode === "register" ? "Create seat" : "Log in"}</button>
            {mode === "login" ? <button type="button" className="sp-btn sp-btn-ghost w-full" onClick={() => { setMode("register"); setError(null); }}>Need an account? Register</button> : <button type="button" className="sp-btn sp-btn-ghost w-full" onClick={() => { setMode("login"); setError(null); setNotice(null); }}>Back to log in</button>}
          </form>
          <p className="text-sm text-fg-subtle">Independent study. <Link to="/about" className="text-accent">Honesty notice</Link> · <Link to="/contact" className="text-accent">Suggestions</Link>.</p>
        </div>
      </div>
      {readOpen ? <div role="dialog" aria-modal="true" aria-labelledby="agree-title" style={{ position: "fixed", inset: 0, zIndex: 80, background: "rgba(12,28,22,0.72)", display: "grid", placeItems: "center", padding: 16 }}><div style={{ width: "min(36rem, 100%)", maxHeight: "90vh", overflow: "auto", background: "#f4efe4", color: "#0c1c16", borderRadius: 16, padding: 24 }}><h2 id="agree-title" style={{ fontFamily: "Georgia, serif", fontSize: 28, margin: "0 0 12px" }}>Development agreement</h2><p style={{ margin: "0 0 16px", lineHeight: 1.6 }}>Read this before you open a seat. SafePath CSP is an independent study aid.</p><ol style={{ margin: "0 0 20px", paddingLeft: 20, lineHeight: 1.7 }}>{TERMS.map((row) => <li key={row} style={{ marginBottom: 10 }}>{row}</li>)}</ol><div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}><button type="button" className="sp-btn sp-btn-primary" onClick={() => { setAgreed(true); setReadOpen(false); setError(null); }}>I have read this and I agree</button><button type="button" className="sp-btn sp-btn-ghost" onClick={() => setReadOpen(false)}>Not now</button></div></div></div> : null}
    </Shell>
  );
}
