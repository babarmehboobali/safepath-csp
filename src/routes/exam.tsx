import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Shell } from "@/components/lesson/Shell";
import { CbtSitting } from "@/components/lesson/CbtSitting";
import type { BankItem } from "@/lib/safepath/bank";
import { pickWeighted } from "@/lib/safepath/bank";
import { readSession, recordExam } from "@/lib/safepath/session";

export const Route = createFileRoute("/exam")({ component: Exam });

function Exam() {
  const [items, setItems] = useState<BankItem[] | null>(null);
  const [busy, setBusy] = useState(false);

  if (items?.length) {
    return (
      <CbtSitting
        title="Short CBT · 25 items"
        items={items}
        minutes={41}
        onSubmit={(result) => recordExam(result.score, result.total, "practice")}
      />
    );
  }

  return (
    <Shell>
      <div className="sp-wrap space-y-5">
        <p className="sp-kicker">Short CBT</p>
        <h1 className="sp-title text-4xl">25 items. Same layout as the mock.</h1>
        <p className="max-w-xl text-fg-muted">
          Use this for a quick CBT habit check. Full 50 / 100 / 200 sittings live on Mock examination.
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className="sp-btn sp-btn-primary"
            disabled={busy}
            onClick={() => {
              setBusy(true);
              window.setTimeout(() => {
                setItems(pickWeighted(25, readSession().track));
                setBusy(false);
              }, 30);
            }}
          >
            {busy ? "Building sitting…" : "Begin 25-item sitting"}
          </button>
          <Link to="/mock" className="sp-btn sp-btn-ghost">Full mock exam</Link>
        </div>
      </div>
    </Shell>
  );
}
