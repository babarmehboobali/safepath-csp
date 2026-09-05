import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Shell } from "@/components/lesson/Shell";
import { QuestionSet } from "@/components/lesson/QuestionSet";
import { pickWeighted } from "@/lib/safepath/bank";
import { readSession } from "@/lib/safepath/session";

export const Route = createFileRoute("/warmup")({ component: Warmup });

function Warmup() {
  const [seed, setSeed] = useState(0);
  const items = useMemo(() => pickWeighted(8, readSession().track), [seed]);
  return (
    <Shell>
      <div className="sp-wrap space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="sp-kicker">Warm-up</p>
            <h1 className="sp-title mt-2 text-4xl">Eight items. No clock.</h1>
            <p className="mt-2 text-fg-muted">Explanations on. Use this before a diagnostic or mock.</p>
          </div>
          <button type="button" className="sp-btn sp-btn-ghost" onClick={() => setSeed((n) => n + 1)}>New warm-up</button>
        </div>
        <QuestionSet key={seed} items={items} />
      </div>
    </Shell>
  );
}
