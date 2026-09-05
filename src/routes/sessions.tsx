import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Shell } from "@/components/lesson/Shell";
import { readSession } from "@/lib/safepath/session";

export const Route = createFileRoute("/sessions")({ component: Sessions });

function Sessions() {
  const [s, setS] = useState(readSession());
  useEffect(() => setS(readSession()), []);
  return (
    <Shell>
      <div className="sp-wrap space-y-6">
        <div>
          <p className="sp-kicker">Sessions</p>
          <h1 className="sp-title mt-2 text-4xl">Every sitting stored here.</h1>
        </div>
        <div className="grid gap-3">
          {s.exams.length ? s.exams.map((row) => (
            <article key={row.at} className="sp-card flex flex-wrap items-center justify-between gap-3 p-5">
              <div>
                <p className="font-medium">{(row.kind ?? "practice").toUpperCase()}</p>
                <p className="text-sm text-fg-subtle">{new Date(row.at).toLocaleString()}</p>
              </div>
              <p className="font-serif text-2xl tabular-nums">{row.score}/{row.total} · {row.pct ?? 0}%</p>
            </article>
          )) : <p className="text-fg-muted">No sittings yet.</p>}
        </div>
        <div className="flex flex-wrap gap-2">
          <Link to="/flags" className="sp-btn sp-btn-ghost">Flags log</Link>
          <Link to="/certificate" className="sp-btn sp-btn-primary">Certificate</Link>
        </div>
      </div>
    </Shell>
  );
}
