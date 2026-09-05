import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Shell } from "@/components/lesson/Shell";
import { CbtSitting } from "@/components/lesson/CbtSitting";
import type { BankItem } from "@/lib/safepath/bank";
import { pickWeighted } from "@/lib/safepath/bank";
import { timerMinutesFor } from "@/lib/safepath/assessment";
import { readSession, recordExam } from "@/lib/safepath/session";

export const Route = createFileRoute("/assess")({ component: Assess });

function Assess() {
  const [items, setItems] = useState<BankItem[] | null>(null);
  const [length, setLength] = useState(0);
  const [busy, setBusy] = useState(false);

  function launch(n: 50 | 100) {
    setBusy(true);
    setLength(n);
    window.setTimeout(() => {
      setItems(pickWeighted(n, readSession().track));
      setBusy(false);
    }, 30);
  }

  if (items?.length) {
    return (
      <CbtSitting
        title={`Self-assessment · ${length} items`}
        items={items}
        minutes={timerMinutesFor(length)}
        onSubmit={(result) => recordExam(result.score, result.total, "assess")}
      />
    );
  }

  return (
    <Shell>
      <div className="sp-wrap space-y-8">
        <div>
          <p className="sp-kicker">Self-assessment</p>
          <h1 className="sp-title mt-2 text-4xl">Know where you stand before exam day.</h1>
          <p className="mt-3 max-w-2xl text-fg-muted">
            A diagnostic sitting modeled on the purpose of a blueprint self-check: strengths, weak domains, and pace.
            Original SafePath items only. Not a BCSP product and not an official score.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          <article className="sp-card p-5">
            <p className="font-serif text-xl">01 · Weighted</p>
            <p className="mt-2 text-sm text-fg-muted">Sampled across Domains 1–7 using CSP-11 public weights.</p>
          </article>
          <article className="sp-card p-5">
            <p className="font-serif text-xl">02 · Pace</p>
            <p className="mt-2 text-sm text-fg-muted">Timed window so you see seconds per item before a full mock.</p>
          </article>
          <article className="sp-card p-5">
            <p className="font-serif text-xl">03 · Report</p>
            <p className="mt-2 text-sm text-fg-muted">Overall percent, seven domain scores, and a readiness label.</p>
          </article>
        </div>
        <div className="flex flex-wrap gap-2 text-sm">
          <a href="/assess/pre" className="sp-btn sp-btn-ghost">Pre-test 50</a>
          <a href="/assess/post" className="sp-btn sp-btn-ghost">Post-test 50</a>
          <a href="/warmup" className="sp-btn sp-btn-ghost">Warm-up</a>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <article className="sp-card p-6">
            <p className="sp-kicker">Full diagnostic</p>
            <h2 className="mt-2 font-serif text-2xl">100-item sitting</h2>
            <p className="mt-2 text-sm text-fg-muted">165-minute pacing window. Clearest baseline across all seven domains.</p>
            <button type="button" className="sp-btn sp-btn-primary mt-5" disabled={busy} onClick={() => launch(100)}>
              {busy && length === 100 ? "Building sitting…" : "Launch 100-item assessment"}
            </button>
          </article>
          <article className="sp-card p-6">
            <p className="sp-kicker">Quick diagnostic</p>
            <h2 className="mt-2 font-serif text-2xl">50-item sitting</h2>
            <p className="mt-2 text-sm text-fg-muted">83-minute window. Use for a check-in or plan recalibration.</p>
            <button type="button" className="sp-btn sp-btn-primary mt-5" disabled={busy} onClick={() => launch(50)}>
              {busy && length === 50 ? "Building sitting…" : "Launch 50-item assessment"}
            </button>
          </article>
        </div>
      </div>
    </Shell>
  );
}
