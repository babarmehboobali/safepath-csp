import { useMemo, useState } from "react";
import type { ClassItem } from "@/content/classes/types";

export function Drill({ items, onDone }: { items: ClassItem[]; onDone?: (score: number, total: number) => void }) {
  const pool = useMemo(() => items.slice(0, 8), [items]);
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState<number[]>([]);
  const item = pool[index];
  if (!item) return <div className="sp-drill-empty"><span>✓</span><p>No drill items in this class yet.</p></div>;
  const correct = picked !== null && picked === item.answerIndex;
  const answeredCount = answered.length + (picked !== null && !answered.includes(index) ? 1 : 0);
  const liveScore = score + (picked === item.answerIndex && !answered.includes(index) ? 1 : 0);
  const progress = pool.length ? Math.round(((index + (picked !== null ? 1 : 0)) / pool.length) * 100) : 0;

  function choose(i: number) {
    if (picked !== null || !item) return;
    const isCorrect = i === item.answerIndex;
    setPicked(i);
    setAnswered((rows) => rows.includes(index) ? rows : [...rows, index]);
    if (isCorrect) setScore((n) => n + 1);
    if (index === pool.length - 1) onDone?.(score + (isCorrect ? 1 : 0), pool.length);
  }

  function next() {
    if (picked === null || index >= pool.length - 1) return;
    setPicked(null);
    setIndex((n) => n + 1);
  }

  function previous() {
    if (index === 0) return;
    setPicked(null);
    setIndex((n) => n - 1);
  }

  return (
    <div className="sp-drill-shell">
      <div className="sp-drill-progress-head">
        <div><span className="sp-drill-eyebrow">Applied scenario</span><strong>Question {index + 1}<small> of {pool.length}</small></strong></div>
        <div className="sp-drill-score"><span>Score</span><b>{liveScore}/{answeredCount || 0}</b><em>{answeredCount ? `${Math.round((liveScore / answeredCount) * 100)}%` : "Ready"}</em></div>
      </div>
      <div className="sp-drill-progress"><span style={{ width: `${progress}%` }} /></div>

      <div className="sp-drill-meta"><span>{item.difficultyLevel ?? item.difficulty}</span>{item.taskCode ? <span>{item.taskCode}</span> : null}</div>
      {item.scenarioText ? <div className="sp-drill-scenario"><span>SCENARIO</span><p>{item.scenarioText}</p></div> : null}
      <h3 className="sp-drill-question">{item.stem}</h3>
      {item.standardReference ? <p className="sp-drill-reference">{item.standardReference}</p> : null}

      <div className="sp-drill-options" role="radiogroup" aria-label="Answer choices">
        {item.options.map((option, i) => {
          const shown = picked !== null;
          const isAnswer = i === item.answerIndex;
          const isPicked = picked === i;
          const state = !shown ? "" : isAnswer ? "is-correct" : isPicked ? "is-wrong" : "is-muted";
          return (
            <button key={`${item.taskCode}-${i}`} type="button" className={`sp-drill-option ${state}`} onClick={() => choose(i)} disabled={shown} aria-pressed={isPicked}>
              <span className="sp-drill-option-letter">{String.fromCharCode(65 + i)}</span>
              <span className="sp-drill-option-copy"><span>{option}</span>{shown && isAnswer ? <small>Best answer</small> : null}{shown && isPicked && !isAnswer ? <small>Your choice</small> : null}</span>
              <span className="sp-drill-option-status" aria-hidden="true">{shown && isAnswer ? "✓" : shown && isPicked ? "×" : "→"}</span>
            </button>
          );
        })}
      </div>

      {picked !== null ? (
        <section className={`sp-drill-feedback ${correct ? "is-correct" : "is-wrong"}`} aria-live="polite">
          <div className="sp-drill-feedback-top"><span className="sp-drill-feedback-icon">{correct ? "✓" : "!"}</span><div><span className="sp-drill-feedback-label">{correct ? "Correct decision" : "Review the control hierarchy"}</span><strong>{correct ? "Highest remaining control." : "There is a stronger control."}</strong></div></div>
          <p className="sp-drill-explanation">{item.explanation}</p>
          {item.optionTraps?.[picked] ? <div className="sp-drill-trap"><span>TRAP TO REMEMBER</span><p>{item.optionTraps[picked]}</p></div> : null}
          {item.fieldTakeaway ? <div className="sp-drill-field"><span>FIELD MOVE</span><p>{item.fieldTakeaway}</p></div> : null}
          {item.stepByStepMath ? <div className="sp-drill-math"><span>{item.stepByStepMath.formula}</span><p>{item.stepByStepMath.ti30KeystrokeSequence}</p></div> : null}
        </section>
      ) : (
        <div className="sp-drill-prompt"><span>Choose one answer</span><p>Commit first. The coaching explanation appears after you answer.</p></div>
      )}

      <div className="sp-drill-controls">
        <button type="button" className="sp-btn sp-btn-ghost" onClick={previous} disabled={index === 0}>← Previous</button>
        <div className="sp-drill-dots" aria-label={`Question ${index + 1} of ${pool.length}`}>{pool.map((_, i) => <span key={i} className={i === index ? "is-current" : i < index ? "is-done" : ""} />)}</div>
        {index < pool.length - 1 ? <button type="button" className="sp-btn sp-btn-primary" onClick={next} disabled={picked === null}>Next question →</button> : <span className="sp-drill-finished">✓ Drill recorded</span>}
      </div>
    </div>
  );
}
