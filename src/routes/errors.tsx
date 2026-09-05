import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Shell } from "@/components/lesson/Shell";
import { QuestionSet } from "@/components/lesson/QuestionSet";
import { bankForTrack } from "@/lib/safepath/bank";
import type { BankItem } from "@/lib/safepath/bank";
import { readSession } from "@/lib/safepath/session";

export const Route = createFileRoute("/errors")({ component: Errors });

const CODES = [
  ["HIER", "Lower-row control while a higher row is open"],
  ["PELTLV", "Legal limit confused with a guideline"],
  ["TOOL", "Wrong analysis tool"],
  ["UNIT", "Unit or exchange-rate mix"],
  ["STEM", "Missed the last-sentence freeze"],
  ["FORM", "Wrong formula"],
  ["FIN", "Avoid / retain / share / transfer mix"],
  ["TIME", "Reporting clock mix"],
] as const;

function Errors() {
  const [code, setCode] = useState<(typeof CODES)[number][0]>("HIER");
  const items = useMemo(() => {
    const bank = bankForTrack(readSession().track);
    const hit = bank.filter((row) => row.item.errorCode === code);
    const pool: BankItem[] = hit.length ? hit : bank;
    return pool.slice(0, 8);
  }, [code]);

  return (
    <Shell>
      <div className="sp-wrap space-y-6">
        <div>
          <p className="sp-kicker">Error-code gym</p>
          <h1 className="sp-title mt-2 text-4xl">Drill the trap you keep walking into.</h1>
        </div>
        <div className="flex flex-wrap gap-2">
          {CODES.map(([id, label]) => (
            <button
              key={id}
              type="button"
              className={`sp-btn ${code === id ? "sp-btn-primary" : "sp-btn-ghost"}`}
              onClick={() => setCode(id)}
            >
              {id}
            </button>
          ))}
        </div>
        <p className="text-sm text-fg-muted">{CODES.find((row) => row[0] === code)?.[1]}</p>
        <QuestionSet key={code} items={items} />
      </div>
    </Shell>
  );
}
