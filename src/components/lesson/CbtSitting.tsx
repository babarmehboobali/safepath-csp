import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import type { BankItem } from "@/lib/safepath/bank";
import { CalcPad } from "@/components/lesson/CalcPad";
import { FormulaReferenceDrawer } from "@/components/lesson/FormulaReferenceDrawer";
import { readinessFor } from "@/lib/safepath/assessment";
import { CSP_DOMAIN_NAMES, DOMAIN_SHORT } from "@/lib/safepath/domains";
import { recordMissed } from "@/lib/safepath/session";

type Phase = "intro" | "sitting" | "review" | "confirm" | "result";
const LETTERS = ["A", "B", "C", "D"] as const;

function clock(total: number) {
  const s = Math.max(0, Math.floor(total));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

export type SittingResult = {
  score: number;
  total: number;
  pct: number;
  timedOut: boolean;
  domainScores: Record<number, number>;
};

export function CbtSitting({
  title,
  items,
  minutes,
  onSubmit,
}: {
  title: string;
  items: BankItem[];
  minutes: number;
  onSubmit?: (result: SittingResult) => void;
}) {
  const n = items.length;
  const [phase, setPhase] = useState<Phase>("intro");
  const [i, setI] = useState(0);
  const [answers, setAnswers] = useState<Array<number | null>>(() => items.map(() => null));
  const [flagged, setFlagged] = useState<boolean[]>(() => items.map(() => false));
  const [seen, setSeen] = useState<boolean[]>(() => items.map(() => false));
  const [remain, setRemain] = useState(Math.round(minutes * 60));
  const [calcOpen, setCalcOpen] = useState(false);
  const [refOpen, setRefOpen] = useState(false);
  const [highlightOn, setHighlightOn] = useState(false);
  const [struck, setStruck] = useState<boolean[][]>(() => items.map((row) => row.item.options.map(() => false)));
  const [breakOpen, setBreakOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const [flagWarn, setFlagWarn] = useState(false);
  const [result, setResult] = useState<SittingResult | null>(null);
  const done = useRef(false);
  const snap = useRef({ answers, flagged });
  snap.current = { answers, flagged };

  const item = items[i];
  const answered = answers.filter((a) => a != null).length;
  const flaggedN = flagged.filter(Boolean).length;
  const pace = n ? `~${Math.round((minutes * 60) / n)} s/item` : "";

  useEffect(() => {
    if (phase === "sitting") {
      setSeen((prev) => {
        if (prev[i]) return prev;
        const next = [...prev];
        next[i] = true;
        return next;
      });
      setNotes("");
      setFlagWarn(false);
    }
  }, [i, phase]);

  useEffect(() => {
    if (phase === "intro" || phase === "result" || done.current) return;
    if (remain <= 0) {
      finish(true);
      return;
    }
    const t = window.setTimeout(() => setRemain((r) => r - 1), 1000);
    return () => window.clearTimeout(t);
  }, [remain, phase]);

  function finish(timedOut: boolean) {
    if (done.current) return;
    done.current = true;
    const acc: Record<number, { ok: number; n: number }> = {};
    let score = 0;
    items.forEach((row, idx) => {
      const pick = snap.current.answers[idx];
      const ok = pick === row.item.answerIndex;
      if (ok) score += 1;
      acc[row.domain] = acc[row.domain] ?? { ok: 0, n: 0 };
      acc[row.domain].n += 1;
      if (ok) acc[row.domain].ok += 1;
    });
    const domainScores: Record<number, number> = {};
    for (const [k, v] of Object.entries(acc)) {
      domainScores[Number(k)] = v.n ? Math.round((v.ok / v.n) * 100) : 0;
    }
    recordMissed(
      items.filter((row, idx) => snap.current.answers[idx] !== row.item.answerIndex).map((row) => row.classId),
    );
    const payload: SittingResult = {
      score,
      total: n,
      pct: n ? Math.round((score / n) * 100) : 0,
      timedOut,
      domainScores,
    };
    setResult(payload);
    setPhase("result");
    onSubmit?.(payload);
  }

  function jump(idx: number) {
    setI(idx);
    setPhase("sitting");
    setBreakOpen(false);
  }

  function toggleFlag() {
    if (answers[i] == null) {
      setFlagWarn(true);
      return;
    }
    setFlagWarn(false);
    setFlagged((prev) => {
      const next = [...prev];
      next[i] = !next[i];
      return next;
    });
  }

  const header = (
    <header className="exam-header">
      <div className="exam-header-inner">
        <p className="exam-brand">Safepath CSP practice examination</p>
        {phase !== "intro" && phase !== "result" ? (
          <>
            <p className="exam-meta">
              {phase === "sitting" ? `Item ${i + 1} of ${n}` : "Review"}
              {pace ? ` · ${pace}` : ""}
            </p>
            <p className={`exam-clock ${remain <= 300 ? "exam-clock-low" : ""}`}>{clock(remain)}</p>
            <button type="button" className="exam-header-btn" onClick={() => setCalcOpen(true)}>Calculator</button>
            <button type="button" className="exam-header-btn" onClick={() => setHighlightOn((v) => !v)}>
              {highlightOn ? "Highlighter on" : "Highlight"}
            </button>
            <button type="button" className="exam-header-btn" onClick={() => setBreakOpen(true)}>Break</button>
            <button type="button" className="exam-header-btn" onClick={() => setPhase("review")}>Review</button>
            <button type="button" className="exam-header-btn exam-header-btn-end" onClick={() => setPhase("confirm")}>
              End Exam
            </button>
          </>
        ) : (
          <p className="exam-meta">
            {n} items · {minutes} min{pace ? ` · ${pace}` : ""}
          </p>
        )}
      </div>
    </header>
  );

  const calcModal = calcOpen ? (
    <div className="exam-modal" role="dialog" aria-modal="true" aria-label="Practice calculator">
      <div className="exam-modal-panel">
        <div className="exam-modal-bar">
          <span>Practice calculator (TI-30XS-style) — not Pearson software</span>
          <button type="button" className="exam-header-btn" onClick={() => setCalcOpen(false)}>Close</button>
        </div>
        <div className="exam-modal-body">
          <CalcPad />
        </div>
      </div>
    </div>
  ) : null;

  const breakOverlay = breakOpen ? (
    <div className="exam-break" role="dialog" aria-modal="true">
      <div className="exam-break-panel">
        <h2>Break overlay</h2>
        <p>
          The timer <strong>does not pause</strong>. Time remaining: <strong>{clock(remain)}</strong>
        </p>
        <p className="exam-fine">Practice overlay only — not an official Pearson break screen.</p>
        <button type="button" className="exam-btn-primary" onClick={() => setBreakOpen(false)}>Resume exam</button>
      </div>
    </div>
  ) : null;

  const navigator = (
    <nav className="exam-nav" aria-label="Item navigator">
      <p className="exam-nav-legend">
        <span className="exam-pill exam-pill-current">Current</span>
        <span className="exam-pill exam-pill-answered">Answered</span>
        <span className="exam-pill exam-pill-flag">Flagged</span>
        <span className="exam-pill">Blank</span>
      </p>
      <div className="exam-nav-grid">
        {items.map((_, idx) => {
          const current = phase === "sitting" && idx === i;
          const cls = [
            "exam-nav-cell",
            current ? "is-current" : "",
            answers[idx] != null ? "is-answered" : "",
            flagged[idx] ? "is-flagged" : "",
          ].filter(Boolean).join(" ");
          return (
            <button key={idx} type="button" className={cls} onClick={() => jump(idx)}>
              {idx + 1}
              {flagged[idx] ? <span className="exam-flag-dot" /> : null}
            </button>
          );
        })}
      </div>
    </nav>
  );

  if (phase === "intro") {
    return (
      <div className="exam-root">
        {header}
        <main className="exam-intro">
          <h1>Practice examination</h1>
          <p className="exam-lead">
            {title}. Navigation matches a typical CBT pattern. This is not a BCSP examination and is not Pearson VUE software.
          </p>
          <ul>
            <li>One item on screen. Select, change, skip, or flag for review.</li>
            <li>Previous / Next stay available until you confirm submit. Review is available anytime.</li>
            <li>Select an answer before you flag. If time ends, blanks stay blank.</li>
            <li>Closed book. No class notes during the sitting.</li>
            <li>Practice calculator from the header — labeled practice, not Pearson.</li>
            <li>DEG not RAD unless the stem requires radians. Closest rounded listed value.</li>
            <li>The break overlay does not stop the clock.</li>
            <li>Length {n} items. Time allowed {minutes} minutes ({clock(Math.round(minutes * 60))}){pace ? ` · ${pace}` : ""}.</li>
          </ul>
          <div className="exam-intro-actions">
            <button type="button" className="exam-btn-primary" onClick={() => setPhase("sitting")}>Start</button>
            <Link to="/mock" className="exam-btn-secondary">Return</Link>
          </div>
        </main>
        {calcModal}
      </div>
    );
  }

  if (phase === "result" && result) {
    const ready = readinessFor(result.pct, result.domainScores, result.timedOut);
    return (
      <div className="exam-root exam-results">
        {header}
        <main className="exam-intro">
          <h1>{ready.label}</h1>
          <p className="exam-lead">{ready.blurb}</p>
          <p className="exam-stem">{result.score}/{result.total} · {result.pct}%</p>
          {result.timedOut ? <p className="exam-banner">Clock expired. Unanswered items scored incorrect.</p> : null}
          <ul className="exam-score-list">
            {([1, 2, 3, 4, 5, 6, 7] as const).map((d) => (
              <li key={d}>
                D{d} {DOMAIN_SHORT[d]} — {result.domainScores[d] ?? 0}% · {CSP_DOMAIN_NAMES[d]}
              </li>
            ))}
          </ul>
          <div className="exam-intro-actions">
            <Link to="/certificate" className="exam-btn-primary">Practice certificate</Link>
            <Link to="/plan" className="exam-btn-secondary">Open plan</Link>
            <Link to="/studio" className="exam-btn-secondary">Learning</Link>
          </div>
        </main>
      </div>
    );
  }

  if (phase === "confirm") {
    return (
      <div className="exam-root">
        {header}
        <main className="exam-intro">
          <h1>Submit examination?</h1>
          <p className="exam-lead">
            You cannot return after submit. Answered: {answered} of {n}. Blank: {n - answered}. Flagged: {flaggedN}.
          </p>
          <div className="exam-intro-actions">
            <button type="button" className="exam-btn-primary" onClick={() => finish(false)}>Confirm submit — cannot return</button>
            <button type="button" className="exam-btn-secondary" onClick={() => setPhase("review")}>Back to review</button>
            <button type="button" className="exam-btn-secondary" onClick={() => setPhase("sitting")}>Return to items</button>
          </div>
        </main>
        {calcModal}
        {breakOverlay}
      </div>
    );
  }

  if (phase === "review") {
    const unanswered = items.map((_, idx) => (answers[idx] == null ? idx : -1)).filter((idx) => idx >= 0);
    const flaggedIdx = items.map((_, idx) => (flagged[idx] ? idx : -1)).filter((idx) => idx >= 0);
    return (
      <div className="exam-root">
        {header}
        <div className="exam-layout">
          {navigator}
          <main className="exam-main">
            <h1>Review before submit</h1>
            <p>
              Unanswered: <strong>{n - answered}</strong>. Flagged: <strong>{flaggedN}</strong>. Answered: <strong>{answered}</strong> of {n}.
              Opened {seen.filter(Boolean).length} of {n}.
            </p>
            <p className="exam-fine">Select an answer before you flag. Click an item number to open it.</p>
            {unanswered.length ? (
              <p>
                Jump to blank:{" "}
                {unanswered.map((idx) => (
                  <button key={idx} type="button" className="exam-jump" onClick={() => jump(idx)}>{idx + 1}</button>
                ))}
              </p>
            ) : <p>Every item has a response.</p>}
            {flaggedIdx.length ? (
              <p>
                Jump to flagged:{" "}
                {flaggedIdx.map((idx) => (
                  <button key={idx} type="button" className="exam-jump" onClick={() => jump(idx)}>{idx + 1}</button>
                ))}
              </p>
            ) : <p>No items flagged for review.</p>}
            <div className="exam-intro-actions">
              <button type="button" className="exam-btn-primary" onClick={() => setPhase("confirm")}>Proceed to submit</button>
              <button type="button" className="exam-btn-secondary" onClick={() => setPhase("sitting")}>Return to items</button>
            </div>
          </main>
        </div>
        {calcModal}
        {breakOverlay}
      </div>
    );
  }

  if (!item) return null;

  return (
    <div className="exam-root">
      {header}
      <div className="exam-layout">
        {navigator}
        <div className="exam-col">
          <main className="exam-main">
            <p
              className={`exam-stem ${highlightOn ? "exam-stem-mark" : ""}`}
              onMouseUp={() => {
                if (!highlightOn) return;
                const sel = window.getSelection();
                if (!sel || sel.isCollapsed) return;
                try {
                  document.execCommand("hiliteColor", false, "#fff59d");
                } catch {
                  /* selection highlight best-effort */
                }
              }}
            >
              {item.item.stem}
            </p>
            <p className="exam-fine">Highlight: turn on, select stem text. Right-click an option to strike it.</p>
            <div className="exam-options" role="radiogroup" aria-label="Answer choices">
              {item.item.options.map((option, idx) => {
                const selected = answers[i] === idx;
                const dead = struck[i]?.[idx];
                return (
                  <label
                    key={`${item.classId}-${idx}`}
                    className={`exam-option ${selected ? "is-selected" : ""} ${dead ? "is-struck" : ""}`}
                    onContextMenu={(e) => {
                      e.preventDefault();
                      setStruck((prev) => {
                        const next = prev.map((row) => [...row]);
                        const row = next[i] ?? item.item.options.map(() => false);
                        row[idx] = !row[idx];
                        next[i] = row;
                        return next;
                      });
                    }}
                  >
                    <input
                      type="radio"
                      name={`exam-${i}`}
                      checked={selected}
                      onChange={() => {
                        setFlagWarn(false);
                        setAnswers((prev) => {
                          const next = [...prev];
                          next[i] = idx;
                          return next;
                        });
                      }}
                    />
                    <span className="exam-letter">{LETTERS[idx]}</span>
                    <span>{option}</span>
                  </label>
                );
              })}
            </div>
            <p className="exam-fine">
              Select an answer before you flag. No instant scoring during the sitting. You may change this answer until you confirm submit.
            </p>
            {flagWarn ? (
              <p className="exam-fine" role="alert" style={{ color: "#b45309", fontWeight: 600 }}>
                Select an answer before you flag for review.
              </p>
            ) : null}
            <label className="exam-notes">
              <span className="exam-fine">Practice notes (clears when you leave this item)</span>
              <textarea className="exam-notes-box" rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Scratch work for this item only" />
            </label>
          </main>
          <footer className="exam-footer">
            <button type="button" className="exam-btn-secondary" disabled={i === 0} onClick={() => setI((x) => Math.max(0, x - 1))}>
              Previous
            </button>
            <button type="button" className={`exam-btn-secondary ${flagged[i] ? "is-flag-on" : ""}`} onClick={toggleFlag}>
              {flagged[i] ? "Flagged" : "Flag for review"}
            </button>
            <button type="button" className="exam-btn-secondary" onClick={() => setPhase("review")}>Review</button>
            <button type="button" className="exam-btn-primary" disabled={i + 1 >= n} onClick={() => setI((x) => Math.min(n - 1, x + 1))}>
              Next
            </button>
          </footer>
        </div>
      </div>
      {calcModal}
      {breakOverlay}
      <FormulaReferenceDrawer open={refOpen} onClose={() => setRefOpen(false)} />
    </div>
  );
}
