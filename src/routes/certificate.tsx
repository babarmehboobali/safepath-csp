import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Shell } from "@/components/lesson/Shell";
import { readSession } from "@/lib/safepath/session";

export const Route = createFileRoute("/certificate")({ component: Certificate });

function Certificate() {
  const [session, setSession] = useState(readSession());
  useEffect(() => setSession(readSession()), []);
  const last = session.exams[0];

  return (
    <Shell>
      <div className="sp-wrap max-w-2xl space-y-6">
        <div>
          <p className="sp-kicker">Practice certificate</p>
          <h1 className="sp-title mt-2 text-4xl">A study record. Not a credential.</h1>
        </div>
        <div className="sp-card space-y-3 p-8 text-center">
          <p className="sp-kicker">SafePath CSP</p>
          <p className="font-serif text-3xl">{session.name || "Candidate"}</p>
          {last ? (
            <>
              <p className="text-fg-muted">
                Completed a {last.kind ?? "practice"} sitting at {last.score}/{last.total} ({last.pct ?? 0}%).
              </p>
              <p className="text-sm text-fg-subtle">{new Date(last.at).toLocaleString()}</p>
            </>
          ) : (
            <p className="text-fg-muted">No sitting stored on this device yet.</p>
          )}
          <p className="text-sm text-fg-subtle">Independent study record only. Not BCSP. Not a pass.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link to="/mock" className="sp-btn sp-btn-primary">Sit a mock</Link>
          <Link to="/assess" className="sp-btn sp-btn-ghost">Self-assessment</Link>
        </div>
      </div>
    </Shell>
  );
}
