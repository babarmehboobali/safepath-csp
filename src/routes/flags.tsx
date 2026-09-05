import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Shell } from "@/components/lesson/Shell";
import { readSession } from "@/lib/safepath/session";

export const Route = createFileRoute("/flags")({ component: Flags });

function Flags() {
  const [session, setSession] = useState(readSession());
  useEffect(() => setSession(readSession()), []);
  return (
    <Shell>
      <div className="sp-wrap space-y-6">
        <div>
          <p className="sp-kicker">Flags and sittings</p>
          <h1 className="sp-title mt-2 text-4xl">What this device remembers.</h1>
        </div>
        <div className="sp-card p-5">
          <p className="font-medium">{session.completed.length} classes marked complete</p>
          <p className="mt-1 text-sm text-fg-muted">{session.knownCards.length} cards marked known · {session.exams.length} stored sittings</p>
        </div>
        <div className="grid gap-3">
          {session.exams.length ? session.exams.map((row) => (
            <article key={row.at} className="sp-card p-4">
              <p className="font-medium">
                {(row.kind ?? "practice").toUpperCase()} · {row.score}/{row.total} · {row.pct ?? 0}%
              </p>
              <p className="text-sm text-fg-subtle">{new Date(row.at).toLocaleString()}</p>
            </article>
          )) : <p className="text-fg-muted">No sittings yet. Run a warm-up, assessment, or mock.</p>}
        </div>
        <Link to="/certificate" className="sp-btn sp-btn-ghost">Practice certificate</Link>
      </div>
    </Shell>
  );
}
