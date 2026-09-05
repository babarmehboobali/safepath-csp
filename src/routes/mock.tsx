import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Shell } from "@/components/lesson/Shell";
import { CbtSitting } from "@/components/lesson/CbtSitting";
import type { BankItem, PracticeDifficulty } from "@/lib/safepath/bank";
import { PRACTICE_DIFFICULTIES, pickWeighted } from "@/lib/safepath/bank";
import { timerMinutesFor } from "@/lib/safepath/assessment";
import { readSession, recordExam } from "@/lib/safepath/session";

export const Route = createFileRoute("/mock")({ component: Mock });

const DIFFICULTY_ORDER: PracticeDifficulty[] = ["exam", "challenging", "hard"];

function Mock() {
  const [items, setItems] = useState<BankItem[] | null>(null);
  const [length, setLength] = useState(0);
  const [busy, setBusy] = useState(false);
  const [difficulty, setDifficulty] = useState<PracticeDifficulty>("challenging");

  function launch(n: 50 | 100 | 200) {
    setBusy(true);
    setLength(n);
    window.setTimeout(() => {
      setItems(pickWeighted(n, readSession().track, difficulty));
      setBusy(false);
    }, 30);
  }

  if (items?.length) {
    return (
      <CbtSitting
        title={`Mock examination · ${length} items · ${PRACTICE_DIFFICULTIES[difficulty].label}`}
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
          <p className="mt-3 max-w-3xl text-fg-muted">
            50 / 100 / 200 items with CSP-11 domain weighting, one-best-answer CBT presentation, timed pacing, review and flagging. Choose the challenge level before you launch. SafePath does not reproduce protected Pearson VUE or BCSP questions.
          </p>
        </div>

        <section className="sp-mock-difficulty" aria-labelledby="mock-difficulty-title">
          <div className="sp-mock-difficulty-head">
            <div><p className="sp-kicker">Difficulty</p><h2 id="mock-difficulty-title">How hard should this sitting feel?</h2><p>These are SafePath training mixes based on the difficulty labels already attached to the question bank. BCSP/Pearson VUE do not publish a selectable difficulty percentage for the live CSP exam.</p></div><strong>{PRACTICE_DIFFICULTIES[difficulty].label}</strong></div>
          <div className="sp-mock-difficulty-grid">
            {DIFFICULTY_ORDER.map((id) => { const meta = PRACTICE_DIFFICULTIES[id]; return <button key={id} type="button" className={`sp-mock-difficulty-option ${difficulty === id ? "is-selected" : ""}`} onClick={() => setDifficulty(id)} aria-pressed={difficulty === id}><span>{id === "exam" ? "E" : id === "challenging" ? "C" : "H"}</span><div><b>{meta.label}</b><small>{meta.description}</small><em>{meta.mix}</em></div><i>{difficulty === id ? "✓" : ""}</i></button>; })}
          </div>
        </section>

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
              <p className="mt-2 text-xs text-fg-subtle">Difficulty: <strong>{PRACTICE_DIFFICULTIES[difficulty].label}</strong></p>
              <button type="button" className="sp-btn sp-btn-primary mt-5" disabled={busy} onClick={() => launch(n)}>
                {busy && length === n ? "Building sitting…" : `Launch ${n}`}
              </button>
            </article>
          ))}
        </div>

        <section className="sp-card p-5 text-sm text-fg-muted">
          <strong className="text-fg">Exam-method guardrails</strong>
          <ul className="mt-2 list-disc space-y-1 pl-5"><li>Four choices with one best answer; each item is independent.</li><li>No explanations, notes, cards or formula desk during the sitting.</li><li>Calculator is available in the CBT header and the timer keeps running.</li><li>200-item mode uses the official 5.5-hour CSP timing; 50/100 are scaled practice sittings.</li><li>Domain selection follows the CSP-11 blueprint weights; difficulty is a SafePath training control, not a claimed Pearson VUE setting.</li></ul>
        </section>
      </div>
    </Shell>
  );
}
