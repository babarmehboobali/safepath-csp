import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Shell } from "@/components/lesson/Shell";
import { bankForTrack } from "@/lib/safepath/bank";
import { readSession } from "@/lib/safepath/session";

export const Route = createFileRoute("/bank")({ component: Bank });

function Bank() {
  const [q, setQ] = useState("");
  const rows = useMemo(() => {
    const bank = bankForTrack(readSession().track);
    const needle = q.trim().toLowerCase();
    if (!needle) return bank.slice(0, 24);
    return bank.filter((row) => `${row.title} ${row.item.stem} ${row.item.errorCode}`.toLowerCase().includes(needle)).slice(0, 40);
  }, [q]);

  return (
    <Shell>
      <div className="sp-wrap space-y-6">
        <div>
          <p className="sp-kicker">Question bank</p>
          <h1 className="sp-title mt-2 text-4xl">Search the original items.</h1>
        </div>
        <input value={q} onChange={(e) => setQ(e.target.value)} className="sp-field" placeholder="Search stem, class, or error code" />
        <p className="text-sm text-fg-muted">{rows.length} shown.</p>
        <div className="grid gap-3">
          {rows.map((row) => (
            <article key={`${row.classId}-${row.item.stem.slice(0, 24)}`} className="sp-card p-5">
              <p className="font-mono text-xs text-fg-subtle">
                Class {row.classId} · {row.title} · {row.item.errorCode}
              </p>
              <p className="mt-2">{row.item.stem}</p>
              <Link to="/learn/$id" params={{ id: String(row.classId) }} className="mt-3 inline-flex text-sm text-accent">
                Open class
              </Link>
            </article>
          ))}
        </div>
      </div>
    </Shell>
  );
}
