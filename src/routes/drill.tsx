import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Shell } from "@/components/lesson/Shell";
import { QuestionSet } from "@/components/lesson/QuestionSet";
import { pickByDomain } from "@/lib/safepath/bank";
import { DOMAIN_SHORT } from "@/lib/safepath/domains";
import { readSession } from "@/lib/safepath/session";

export const Route = createFileRoute("/drill")({ component: Drill });

function Drill() {
  const [domain, setDomain] = useState(1);
  const [seed, setSeed] = useState(0);
  const items = useMemo(() => pickByDomain(8, domain, readSession().track), [domain, seed]);
  return (
    <Shell>
      <div className="sp-wrap space-y-6">
        <div>
          <p className="sp-kicker">Domain drill</p>
          <h1 className="sp-title mt-2 text-4xl">Eight items from one domain.</h1>
        </div>
        <div className="flex flex-wrap gap-2">
          {([1, 2, 3, 4, 5, 6, 7] as const).map((d) => (
            <button
              key={d}
              type="button"
              className={`sp-btn ${domain === d ? "sp-btn-primary" : "sp-btn-ghost"}`}
              onClick={() => { setDomain(d); setSeed((n) => n + 1); }}
            >
              D{d} {DOMAIN_SHORT[d]}
            </button>
          ))}
        </div>
        <QuestionSet key={`${domain}-${seed}`} items={items} />
      </div>
    </Shell>
  );
}
