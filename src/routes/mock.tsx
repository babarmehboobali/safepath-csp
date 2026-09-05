import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Shell } from "@/components/lesson/Shell";
import { CbtSitting } from "@/components/lesson/CbtSitting";
import type { BankItem } from "@/lib/safepath/bank";
import { pickWeighted } from "@/lib/safepath/bank";
import { timerMinutesFor } from "@/lib/safepath/assessment";
import { readSession, recordExam } from "@/lib/safepath/session";

export const Route = createFileRoute("/mock")({ component: Mock });

function Mock() {
  const [items, setItems] = useState<BankItem[] | null>(null);
  const [length, setLength] = useState(0);
  const [busy, setBusy] = useState(false);

  function launch(n: 50 | 100 | 200) {
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
        title={`Mock examination · ${length} items`}
        items={items}
        minutes={timerMinutesFor(length)}
        onSubmit={(result) => recordExam(result.score, result.total, "mock")}
      />
    );
  }

  return (
    <Shell>
      <div className="sp-wrap space-y-8">
        <div>
          <p className="sp-kicker">Mock examination</p>
          <h1 className="sp-title mt-2 text-4xl">Computer-based practice sitting.</h1>
          <p className="mt-3 max-w-2xl text-fg-muted">
            50 / 100 / 200 items at official weights. One item on screen. Flag, review, calculator. Cards and formula
            desk hidden. No explanations until submit. Practice only — not Pearson VUE software.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {([
            [50, "82.5 minutes", "Half-length pulse"],
            [100, "2 hours 45 minutes", "Mid-length sitting"],
            [200, "5 hours 30 minutes", "Full-length mock"],
          ] as const).map(([n, time, label]) => (
            <article key={n} className="sp-card p-6">
              <p className="sp-kicker">{label}</p>
              <h2 className="mt-2 font-serif text-2xl">{n} items</h2>
              <p className="mt-2 text-sm text-fg-muted">{time}. Clock does not pause on break.</p>
              <button type="button" className="sp-btn sp-btn-primary mt-5" disabled={busy} onClick={() => launch(n)}>
                {busy && length === n ? "Building sitting…" : `Launch ${n}`}
              </button>
            </article>
          ))}
        </div>
      </div>
    </Shell>
  );
}
