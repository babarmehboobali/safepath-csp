import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Shell } from "@/components/lesson/Shell";
import { classesForTrack, nextOpenClass } from "@/lib/safepath/bank";
import { classCountForTrack } from "@/lib/safepath/catalog";
import { stillForClass } from "@/lib/safepath/media";
import { criticalDomains } from "@/lib/safepath/progress";
import { lessonIsProper, predictReadiness } from "@/lib/safepath/readiness";
import { readSession, streakCount } from "@/lib/safepath/session";

export const Route = createFileRoute("/dashboard")({ component: Dashboard });

function Dashboard() {
  const [s, setS] = useState(readSession());
  useEffect(() => setS(readSession()), []);
  const cap = classCountForTrack(s.track);
  const next = nextOpenClass(s.completed, s.track);
  const last = s.exams[0];
  const done = s.completed.length;
  const ready = predictReadiness(s);
  const proper = s.completed.filter((id) => lessonIsProper(s.lessons[id])).length;
  const domainPct = Object.fromEntries(ready.domains.map((row) => [row.domain, row.need ? Math.round((row.done / row.need) * 100) : 0])) as Record<number, number>;
  const weak = criticalDomains(domainPct);

  return (
    <Shell>
      <div className="sp-wrap space-y-8">
        <div>
          <p className="sp-kicker">Dashboard</p>
          <h1 className="sp-title mt-2 text-4xl">{s.name ? `${s.name.split(" ")[0]}’s seat` : "Your study seat"}</h1>
          <p className="mt-2 text-fg-muted">
            {proper} proper / {done} marked · {streakCount(s.studyDates)}-day streak · model {ready.pct}%
          </p>
        </div>
        <Link to="/ready" className="sp-card block p-6 text-inherit no-underline">
          <p className="sp-kicker">Pass model</p>
          <p className="mt-2 font-serif text-4xl">{ready.pct}%</p>
          <p className="mt-2 text-sm text-fg-muted">{ready.line}</p>
        </Link>
        {weak.length ? (
          <div className="sp-card p-5">
            <p className="sp-kicker">Critical exam vulnerability</p>
            <p className="mt-2">Domains under 70% proper coverage: {weak.map((d) => `D${d}`).join(", ")}</p>
          </div>
        ) : null}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Link to="/today" className="sp-card p-5 text-inherit no-underline">Today</Link>
          <Link to="/assess" className="sp-card p-5 text-inherit no-underline">Self-assessment</Link>
          <Link to="/mock" className="sp-card p-5 text-inherit no-underline">Mock exam</Link>
          <Link to="/plan" className="sp-card p-5 text-inherit no-underline">Plan</Link>
        </div>
        {next ? (
          <Link to="/learn/$id" params={{ id: String(next.id) }} className="sp-card grid overflow-hidden text-inherit no-underline lg:grid-cols-2">
            <img src={stillForClass(next.id, next.domain)} alt="" className="aspect-video w-full object-cover" />
            <div className="p-6">
              <p className="sp-kicker">Next class</p>
              <p className="mt-2 font-serif text-3xl">{next.title}</p>
            </div>
          </Link>
        ) : null}
        <div className="sp-card p-5">
          <p className="font-medium">Last sitting</p>
          {last ? (
            <p className="mt-2 text-fg-muted">
              {(last.kind ?? "practice").toUpperCase()} · {last.score}/{last.total} · {last.pct ?? 0}%
            </p>
          ) : (
            <p className="mt-2 text-fg-muted">None stored yet.</p>
          )}
        </div>
        <div>
          <p className="sp-kicker">Missed classes</p>
          <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {s.missed.length
              ? s.missed.slice(0, 9).map((id) => {
                  const row = classesForTrack(s.track).find((c) => c.id === id);
                  return (
                    <Link key={id} to="/learn/$id" params={{ id: String(id) }} className="sp-card p-4 text-inherit no-underline">
                      Class {id} · {row?.title ?? "Open"}
                    </Link>
                  );
                })
              : <p className="text-sm text-fg-muted">Misses land here after a sitting.</p>}
          </div>
        </div>
      </div>
    </Shell>
  );
}
