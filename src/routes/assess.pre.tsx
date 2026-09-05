import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CbtSitting } from "@/components/lesson/CbtSitting";
import { Shell } from "@/components/lesson/Shell";
import { timerMinutesFor } from "@/lib/safepath/assessment";
import type { BankItem } from "@/lib/safepath/bank";
import { pickWeighted } from "@/lib/safepath/bank";
import { readSession, recordExam } from "@/lib/safepath/session";

export const Route = createFileRoute("/assess/pre")({ component: Pre });

function Pre() {
  const [items, setItems] = useState<BankItem[] | null>(null);
  useEffect(() => {
    const t = window.setTimeout(() => setItems(pickWeighted(50, readSession().track)), 30);
    return () => window.clearTimeout(t);
  }, []);
  if (!items?.length) {
    return (
      <Shell>
        <div className="sp-wrap"><p className="sp-kicker">Pre-test</p><h1 className="sp-title mt-2 text-3xl">Building sitting…</h1></div>
      </Shell>
    );
  }
  return (
    <CbtSitting
      title="Pre-test · 50 items"
      items={items}
      minutes={timerMinutesFor(50)}
      onSubmit={(result) => recordExam(result.score, result.total, "assess")}
    />
  );
}
