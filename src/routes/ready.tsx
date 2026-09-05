import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo } from "react";
import { Shell } from "@/components/lesson/Shell";
import { DOMAIN_SHORT } from "@/lib/safepath/domains";
import { lessonIsProper, predictReadiness } from "@/lib/safepath/readiness";
import { readSession } from "@/lib/safepath/session";

export const Route = createFileRoute("/ready")({ component: Ready });

const BAND: Record<string, string> = {
  "not-ready": "Not ready",
  building: "Building",
  approaching: "Approaching",
  capable: "Exam-capable range",
};

function Ready() {
  const session = readSession();
  const report = useMemo(() => predictReadiness(session), [session]);
  const proper = session.completed.filter((id) => lessonIsProper(session.lessons[id])).length;

  return (
    <Shell>
      <div className="sp-wrap space-y-8">
        <div>
          <p className="sp-kicker">Readiness</p>
          <h1 className="sp-title mt-2 text-4xl">{report.pct}%</h1>
          <p className="mt-2 max-w-2xl text-fg-muted">{report.line}</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <article className="sp-card p-5">
            <p className="sp-kicker">Band</p>
            <p className="mt-2 font-serif text-2xl">{BAND[report.band]}</p>
          </article>
          <article className="sp-card p-5">
            <p className="sp-kicker">Proper classes</p>
            <p className="mt-2 font-serif text-2xl">{proper}</p>
            <p className="text-sm text-fg-muted">All slides + drill ≥70%</p>
          </article>
          <article className="sp-card p-5">
            <p className="sp-kicker">Exam evidence</p>
            <p className="mt-2 font-serif text-2xl">{report.exams}%</p>
          </article>
          <article className="sp-card p-5">
            <p className="sp-kicker">Domain coverage</p>
            <p className="mt-2 font-serif text-2xl">{report.balance}%</p>
          </article>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-bg-elevated">
          <div className="h-full bg-accent" style={{ width: `${report.pct}%` }} />
        </div>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {report.domains.map((row) => (
            <div key={row.domain} className="sp-card p-4">
              <p className="font-mono text-xs text-accent">D{row.domain} · {row.weight}%</p>
              <p className="mt-1 font-medium">{DOMAIN_SHORT[row.domain as keyof typeof DOMAIN_SHORT]}</p>
              <p className="text-sm text-fg-muted">{row.done}/{row.need} proper</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-fg-subtle">
          This is a study model on this device: proper class completion, recent sittings (mocks weighted higher), domain balance, study days. It is not a BCSP score and not a pass promise.
          {" "}
          <Link to="/assess">Self-assessment</Link>
          {" · "}
          <Link to="/mock">Mock</Link>
        </p>
      </div>
    </Shell>
  );
}
