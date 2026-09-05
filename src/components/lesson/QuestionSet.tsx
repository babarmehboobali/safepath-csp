import { useEffect, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import type { BankItem } from "@/lib/safepath/bank";
import { recordAttempt } from "@/lib/safepath/session";
import type { ErrorType } from "@/lib/safepath/adaptive-engine";

type DisplayOption = { text: string; originalIndex: number };

function shuffleOptions(options: string[], seed: number): DisplayOption[] {
  const copy = options.map((text, originalIndex) => ({ text, originalIndex }));
  let state = Math.max(1, seed);
  for (let i = copy.length - 1; i > 0; i -= 1) {
    state = (state * 48271) % 2147483647;
    const j = state % (i + 1);
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function errorTypeFor(row: BankItem): ErrorType | undefined {
  if (!row.item.errorCode) return undefined;
  const code = row.item.errorCode.toUpperCase();
  if (code.includes("UNIT") || code.includes("FORM") || code.includes("CALC")) return "calculation";
  if (code.includes("TIME") || code.includes("SPEED")) return "slow-reasoning";
  if (code.includes("HIER") || code.includes("PRIOR")) return "risk-priority";
  if (code.includes("STEM") || code.includes("READ")) return "reading";
  if (code.includes("PEL") || code.includes("TLV") || code.includes("TRAP") || code.includes("TOOL")) return "distractor-trap";
  return "misapplication";
}

function difficultyFor(row: BankItem): number {
  if (row.item.difficulty === "Expert" || row.item.difficultyLevel === "Advanced Engineering") return 5;
  if (row.item.difficulty === "Foundation" || row.item.difficultyLevel === "Fundamental") return 1;
  return 3;
}

export function QuestionSet({ items, onDone }: { items: BankItem[]; onDone?: (score: number, total: number) => void }) {
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [confidence, setConfidence] = useState<number | null>(null);
  const [startedAt, setStartedAt] = useState(() => Date.now());
  const row = items[index];

  const displayOptions = useMemo(() => {
    if (!row) return [];
    const stableSeed = Math.abs(`${row.classId}-${index}-${row.item.stem}`.split("").reduce((a, c) => ((a * 31) + c.charCodeAt(0)) | 0, 7));
    return shuffleOptions(row.item.options, stableSeed || 7);
  }, [row, index]);

  useEffect(() => {
    setPicked(null);
    setConfidence(null);
    setStartedAt(Date.now());
  }, [index]);

  if (!row) return <p className="text-fg-muted">No items in this set.</p>;

  if (finished) return (
    <div className="sp-card space-y-4 p-6">
      <p className="sp-kicker">Set complete</p>
      <p className="font-serif text-3xl">{score} / {items.length}</p>
      <p className="text-sm text-fg-muted">Answer positions were randomized and response time, confidence and error signals were recorded for adaptive coaching.</p>
      <div className="flex flex-wrap gap-2"><Link to="/studio" className="sp-btn sp-btn-primary">Back to studio</Link><Link to="/plan" className="sp-btn sp-btn-ghost">Plan</Link></div>
    </div>
  );

  function choose(displayIndex: number) {
    if (picked !== null) return;
    const selected = displayOptions[displayIndex];
    if (!selected) return;
    const isCorrect = selected.originalIndex === row.item.answerIndex;
    setPicked(displayIndex);
    if (isCorrect) setScore((n) => n + 1);
    recordAttempt({
      classId: row.classId,
      domain: row.domain,
      topic: row.title,
      competency: row.item.scenarioText ? "scenario-application" : row.item.difficulty === "Expert" ? "advanced-judgment" : "knowledge-application",
      difficulty: difficultyFor(row),
      correct: isCorrect,
      responseTimeSeconds: Math.max(1, Math.round((Date.now() - startedAt) / 1000)),
      confidence: (confidence ?? 0) * 20,
      errorType: isCorrect ? undefined : errorTypeFor(row),
    });
  }

  function next() {
    if (index >= items.length - 1) { setFinished(true); onDone?.(score, items.length); return; }
    setIndex((n) => n + 1);
  }

  const selected = picked === null ? null : displayOptions[picked];
  const correct = selected !== null && selected?.originalIndex === row.item.answerIndex;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3"><p className="sp-kicker">Item {index + 1} / {items.length} · Class {row.classId} · {row.title}</p><p className="font-mono text-xs text-fg-subtle">Score {score}</p></div>
      <h3 className="font-serif text-2xl leading-snug">{row.item.stem}</h3>
      <div className="grid gap-2">
        {displayOptions.map((option, displayIndex) => {
          const shown = picked !== null;
          const tone = shown && option.originalIndex === row.item.answerIndex ? "border-ok bg-ok/10" : shown && picked === displayIndex ? "border-bad bg-bad/10" : "border-border";
          return <button key={`${row.classId}-${index}-${option.originalIndex}`} type="button" className={`rounded-lg border px-4 py-3 text-left ${tone}`} onClick={() => choose(displayIndex)} disabled={picked !== null}><span className="mr-2 font-mono text-xs text-fg-subtle">{String.fromCharCode(65 + displayIndex)}</span>{option.text}</button>;
        })}
      </div>
      {picked === null ? <div className="flex flex-wrap items-center gap-2"><span className="text-sm text-fg-muted">Confidence before answering:</span>{[1,2,3,4,5].map((level) => <button key={level} type="button" aria-label={`Confidence ${level} of 5`} onClick={() => setConfidence(level)} className={confidence === level ? "sp-btn sp-btn-primary" : "sp-btn sp-btn-ghost"}>{level}</button>)}</div> : null}
      {picked !== null ? <div className="rounded-lg border border-border bg-bg px-4 py-3 text-sm text-fg-muted"><p className="font-medium text-fg">{correct ? "Correct — highest remaining control." : "Incorrect — now diagnose the trap."}</p><p className="mt-1">{row.item.explanation}</p>{!correct && row.item.errorCode ? <p className="mt-2 font-mono text-xs text-accent">Error signal: {row.item.errorCode}</p> : null}</div> : null}
      <button type="button" className="sp-btn sp-btn-primary" onClick={next} disabled={picked === null}>{index >= items.length - 1 ? "Finish" : "Next"}</button>
    </div>
  );
}
