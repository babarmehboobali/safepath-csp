import { useMemo, useState } from "react";
import type { ClassItem } from "@/content/classes/types";

export function Drill({ items, onDone }: { items: ClassItem[]; onDone?: (score: number, total: number) => void }) {
  const pool = useMemo(() => items.slice(0, 8), [items]);
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const item = pool[index];
  if (!item) return <p className="text-fg-muted">No drill items in this class yet.</p>;
  const correct = picked !== null && picked === item.answerIndex;

  function choose(i: number) {
    if (picked !== null || !item) return;
    setPicked(i);
    if (i === item.answerIndex) setScore((n) => n + 1);
    const nextScore = i === item.answerIndex ? score + 1 : score;
    if (index === pool.length - 1) onDone?.(nextScore, pool.length);
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <p className="sp-kicker">Drill {index + 1} / {pool.length}</p>
        <p className="font-mono text-xs text-fg-subtle">
          Score {score}/{pool.length} · {item.difficultyLevel ?? item.difficulty}
        </p>
      </div>
      {item.scenarioText ? <p className="text-sm text-fg-muted">{item.scenarioText}</p> : null}
      <h3 className="font-serif text-2xl leading-snug">{item.stem}</h3>
      {item.standardReference ? <p className="text-xs text-fg-subtle">{item.standardReference}</p> : null}
      <div className="grid gap-2">
        {item.options.map((option, i) => {
          const shown = picked !== null;
          const isAnswer = i === item.answerIndex;
          const tone = shown && isAnswer ? "border-ok bg-ok/10" : shown && picked === i ? "border-bad bg-bad/10" : "border-border";
          return (
            <button
              key={`${item.taskCode}-${i}`}
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
        <div className="space-y-3 rounded-lg border border-border bg-bg px-4 py-3 text-sm text-fg-muted">
          <p className="font-medium text-fg">{correct ? "Highest remaining control." : "Trap caught."}</p>
          <p>{item.explanation}</p>
          {item.optionTraps?.[picked] ? <p>{item.optionTraps[picked]}</p> : null}
          {item.fieldTakeaway ? (
            <p className="text-fg">
              <span className="text-accent">Field move. </span>
              {item.fieldTakeaway}
            </p>
          ) : null}
          {item.stepByStepMath ? (
            <div className="rounded-md border border-border px-3 py-3">
              <p className="font-mono text-xs text-accent">{item.stepByStepMath.formula}</p>
              <p className="mt-2">{item.stepByStepMath.ti30KeystrokeSequence}</p>
            </div>
          ) : null}
        </div>
      ) : null}
      <div className="flex gap-2">
        <button
          type="button"
          className="sp-btn sp-btn-ghost"
          onClick={() => {
            setPicked(null);
            setIndex((n) => Math.max(0, n - 1));
          }}
        >
          Back
        </button>
        <button
          type="button"
          className="sp-btn sp-btn-primary"
          onClick={() => {
            setPicked(null);
            setIndex((n) => Math.min(pool.length - 1, n + 1));
          }}
        >
          Next item
        </button>
      </div>
    </div>
  );
}
