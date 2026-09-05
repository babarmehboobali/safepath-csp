import { useEffect, useMemo, useState } from "react";
import type { ClassItem } from "@/content/classes/types";
import { getLessonQuestions } from "@/lib/safepath/lesson-questions";

type DrillMode = "core" | "mastery" | "full";
type DrillRow = { id?: string; classId: number; item: ClassItem };

function shuffle<T>(rows: T[]): T[] { const next = [...rows]; for (let i = next.length - 1; i > 0; i -= 1) { const j = Math.floor(Math.random() * (i + 1)); [next[i], next[j]] = [next[j]!, next[i]!]; } return next; }

export function Drill({ items, onDone }: { items: ClassItem[]; onDone?: (score: number, total: number) => void }) {
  const fallbackRows = useMemo<DrillRow[]>(() => items.map((item, index) => ({ id: `local-${index}`, classId: 0, item })), [items]);
  const [bank, setBank] = useState<DrillRow[]>(fallbackRows);
  const [loadingBank, setLoadingBank] = useState(true);
  const [bankError, setBankError] = useState(false);
  const [mode, setMode] = useState<DrillMode>("mastery");
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState<number[]>([]);

  useEffect(() => {
    let live = true;
    setLoadingBank(true);
    setBankError(false);
    const classId = typeof window !== "undefined" ? Number(window.location.pathname.split("/").pop()) : Number.NaN;
    if (!Number.isInteger(classId) || classId < 1) { setLoadingBank(false); return () => { live = false; }; }
    getLessonQuestions({ data: { classId } }).then((rows) => { if (live) setBank(rows.length ? shuffle(rows) : fallbackRows); }).catch(() => { if (live) { setBankError(true); setBank(fallbackRows); } }).finally(() => { if (live) setLoadingBank(false); });
    return () => { live = false; };
  }, [fallbackRows]);

  const pool = useMemo(() => { const limit = mode === "core" ? 8 : mode === "mastery" ? 15 : bank.length; return bank.slice(0, Math.min(limit, bank.length)); }, [bank, mode]);
  useEffect(() => { setIndex(0); setPicked(null); setScore(0); setAnswered([]); }, [mode, bank]);

  const row = pool[index];
  if (!row) return <div className="sp-drill-empty"><span>✓</span><p>{loadingBank ? "Loading this lesson's matched question bank…" : "No drill items in this class yet."}</p></div>;
  const item = row.item;
  const correct = picked !== null && picked === item.answerIndex;
  const answeredCount = answered.length + (picked !== null && !answered.includes(index) ? 1 : 0);
  const liveScore = score + (picked === item.answerIndex && !answered.includes(index) ? 1 : 0);
  const progress = pool.length ? Math.round(((index + (picked !== null ? 1 : 0)) / pool.length) * 100) : 0;
  const remaining = Math.max(0, bank.length - pool.length);

  function choose(i: number) { if (picked !== null) return; const isCorrect = i === item.answerIndex; setPicked(i); setAnswered((rows) => rows.includes(index) ? rows : [...rows, index]); if (isCorrect) setScore((n) => n + 1); if (index === pool.length - 1) onDone?.(score + (isCorrect ? 1 : 0), pool.length); }
  function next() { if (picked === null || index >= pool.length - 1) return; setPicked(null); setIndex((n) => n + 1); }
  function previous() { if (index === 0) return; setPicked(null); setIndex((n) => n - 1); }

  return <div className="sp-drill-shell">
    <div className="sp-drill-progress-head"><div><span className="sp-drill-eyebrow">Lesson-matched question bank</span><strong>Question {index + 1}<small> of {pool.length}</small></strong></div><div className="sp-drill-score"><span>Score</span><b>{liveScore}/{answeredCount || 0}</b><em>{answeredCount ? `${Math.round((liveScore / answeredCount) * 100)}%` : "Ready"}</em></div></div>
    <div className="sp-drill-progress"><span style={{ width: `${progress}%` }} /></div>
    <div className="mb-4 rounded-xl border border-border bg-bg p-3"><div className="flex flex-wrap items-center justify-between gap-2"><div><p className="text-xs font-semibold uppercase tracking-[0.12em] text-fg-subtle">Practice depth</p><p className="mt-1 text-sm text-fg-muted">{loadingBank ? "Checking Neon for every question mapped to this lesson…" : `${bank.length} questions are mapped to this lesson.`}{bankError ? " Using the local lesson pack while the bank reconnects." : ""}</p></div><div className="flex flex-wrap gap-2" role="group" aria-label="Practice depth">{(["core", "mastery", "full"] as const).map((option) => { const label = option === "core" ? "Core 8" : option === "mastery" ? `Mastery ${Math.min(15, bank.length)}` : `Full bank ${bank.length}`; const active = mode === option; return <button key={option} type="button" className={`sp-btn ${active ? "sp-btn-primary" : "sp-btn-ghost"}`} onClick={() => setMode(option)} aria-pressed={active} disabled={option === "full" && bank.length <= 8}>{label}</button>; })}</div></div>{mode !== "full" && bank.length > pool.length ? <p className="mt-2 text-xs text-fg-subtle">{remaining} additional matched questions remain. Choose <strong>Full bank</strong> to work through every question for this lesson.</p> : null}</div>
    <div className="sp-drill-meta"><span>{item.difficultyLevel ?? item.difficulty}</span><span>Matched to this lesson</span></div>
    {item.scenarioText ? <div className="sp-drill-scenario"><span>SCENARIO</span><p>{item.scenarioText}</p></div> : null}
    <h3 className="sp-drill-question">{item.stem}</h3>
    {item.standardReference ? <p className="sp-drill-reference">{item.standardReference}</p> : null}
    <div className="sp-drill-options" role="radiogroup" aria-label="Answer choices">{item.options.map((option, i) => { const shown = picked !== null; const isAnswer = i === item.answerIndex; const isPicked = picked === i; const state = !shown ? "" : isAnswer ? "is-correct" : isPicked ? "is-wrong" : "is-muted"; return <button key={`${row.id ?? row.classId}-${i}`} type="button" className={`sp-drill-option ${state}`} onClick={() => choose(i)} disabled={shown} aria-pressed={isPicked}><span className="sp-drill-option-letter">{String.fromCharCode(65 + i)}</span><span className="sp-drill-option-copy"><span>{option}</span>{shown && isAnswer ? <small>Best answer</small> : null}{shown && isPicked && !isAnswer ? <small>Your choice</small> : null}</span><span className="sp-drill-option-status" aria-hidden="true">{shown && isAnswer ? "✓" : shown && isPicked ? "×" : "→"}</span></button>; })}</div>
    {picked !== null ? <section className={`sp-drill-feedback ${correct ? "is-correct" : "is-wrong"}`} aria-live="polite"><div className="sp-drill-feedback-top"><span className="sp-drill-feedback-icon">{correct ? "✓" : "!"}</span><div><span className="sp-drill-feedback-label">{correct ? "Correct decision" : "Review the control hierarchy"}</span><strong>{correct ? "Highest remaining control." : "There is a stronger control."}</strong></div></div><p className="sp-drill-explanation">{item.explanation}</p>{item.optionTraps?.[picked] ? <div className="sp-drill-trap"><span>TRAP TO REMEMBER</span><p>{item.optionTraps[picked]}</p></div> : null}{item.fieldTakeaway ? <div className="sp-drill-field"><span>FIELD MOVE</span><p>{item.fieldTakeaway}</p></div> : null}{item.stepByStepMath ? <div className="sp-drill-math"><span>{item.stepByStepMath.formula}</span><p>{item.stepByStepMath.ti30KeystrokeSequence}</p></div> : null}</section> : <div className="sp-drill-prompt"><span>Choose one answer</span><p>Commit first. The coaching explanation appears after you answer.</p></div>}
    <div className="sp-drill-controls"><button type="button" className="sp-btn sp-btn-ghost" onClick={previous} disabled={index === 0}>← Previous</button><div className="sp-drill-dots" aria-label={`Question ${index + 1} of ${pool.length}`}>{pool.map((_, i) => <span key={i} className={i === index ? "is-current" : i < index ? "is-done" : ""} />)}</div>{index < pool.length - 1 ? <button type="button" className="sp-btn sp-btn-primary" onClick={next} disabled={picked === null}>Next question →</button> : <span className="sp-drill-finished">✓ Drill recorded</span>}</div>
  </div>;
}
