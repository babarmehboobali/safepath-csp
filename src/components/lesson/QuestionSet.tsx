import { useState } from "react";
import { Link } from "@tanstack/react-router";
import type { BankItem } from "@/lib/safepath/bank";

export function QuestionSet({
  items,
  onDone,
}: {
  items: BankItem[];
  onDone?: (score: number, total: number) => void;
}) {
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const row = items[index];

  if (!row) return <p className="text-fg-muted">No items in this set.</p>;

  if (finished) {
    return (
      <div className="sp-card space-y-4 p-6">
        <p className="sp-kicker">Set complete</p>
        <p className="font-serif text-3xl">
          {score} / {items.length}
        </p>
        <p className="text-sm text-fg-muted">Treat every miss as a class to reopen. Highest remaining control still wins.</p>
        <div className="flex flex-wrap gap-2">
          <Link to="/studio" className="sp-btn sp-btn-primary">Back to studio</Link>
          <Link to="/plan" className="sp-btn sp-btn-ghost">Plan</Link>
        </div>
      </div>
    );
  }

  function choose(i: number) {
    if (picked !== null) return;
    setPicked(i);
    if (i === row.item.answerIndex) setScore((n) => n + 1);
  }

  function next() {
    if (index >= items.length - 1) {
      setFinished(true);
      onDone?.(score, items.length);
      return;
    }
    setPicked(null);
    setIndex((n) => n + 1);
  }

  const item = row.item;
  const correct = picked !== null && picked === item.answerIndex;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <p className="sp-kicker">
          Item {index + 1} / {items.length} · Class {row.classId} · {row.title}
        </p>
        <p className="font-mono text-xs text-fg-subtle">Score {score}</p>
      </div>
      <h3 className="font-serif text-2xl leading-snug">{item.stem}</h3>
      <div className="grid gap-2">
        {item.options.map((option, i) => {
          const shown = picked !== null;
          const tone =
            shown && i === item.answerIndex
              ? "border-ok bg-ok/10"
              : shown && picked === i
                ? "border-bad bg-bad/10"
                : "border-border";
          return (
            <button
              key={`${row.classId}-${i}`}
              type="button"
              className={`rounded-lg border px-4 py-3 text-left ${tone}`}
              onClick={() => choose(i)}
              disabled={picked !== null}
            >
              <span className="mr-2 font-mono text-xs text-fg-subtle">{String.fromCharCode(65 + i)}</span>
              {option}
            </button>
          );
        })}
      </div>
      {picked !== null ? (
        <div className="rounded-lg border border-border bg-bg px-4 py-3 text-sm text-fg-muted">
          <p className="font-medium text-fg">{correct ? "Highest remaining control." : "Trap caught."}</p>
          <p className="mt-1">{item.explanation}</p>
        </div>
      ) : null}
      <button type="button" className="sp-btn sp-btn-primary" onClick={next} disabled={picked === null}>
        {index >= items.length - 1 ? "Finish" : "Next"}
      </button>
    </div>
  );
}
