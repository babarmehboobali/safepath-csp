import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Shell } from "@/components/lesson/Shell";
import { catalogForTrack, classCountForTrack } from "@/lib/safepath/catalog";
import { CSP_DOMAIN_NAMES, CSP_DOMAIN_WEIGHTS, DOMAIN_SHORT } from "@/lib/safepath/domains";
import { buildWeeks, daysBetween, defaultPlan, readPlan, writePlan, type PlannerMode, type StudyPlan } from "@/lib/safepath/planner";
import { TrackPicker } from "@/components/lesson/TrackPicker";
import { readSession, type TrackId } from "@/lib/safepath/session";

export const Route = createFileRoute("/plan")({ component: Plan });

const MODE_COPY: Record<PlannerMode, string> = {
  adaptive: "Blueprint weights first. Heavier domains stay earlier until they are closed.",
  mix: "All selected domains blend every week instead of finishing one block first.",
  domain: "True domain blocks. Finish D1, then D2, in the order you set.",
  choice: "Your sequence and your selected domains only.",
};

function Plan() {
  const [plan, setPlan] = useState<StudyPlan>(defaultPlan());
  const [completed, setCompleted] = useState<number[]>([]);
  const [track, setTrack] = useState<TrackId>(readSession().track);

  useEffect(() => {
    const session = readSession();
    setPlan(readPlan());
    setCompleted(session.completed);
    setTrack(session.track);
  }, []);

  function save(next: StudyPlan) {
    writePlan(next);
    setPlan(next);
  }

  const weeks = useMemo(() => buildWeeks(plan, track, completed), [plan, track, completed]);
  const days = daysBetween(plan.startDate, plan.examDate);
  const hoursBudget = Math.round(days * plan.dailyHours);
  const hoursNeeded = classCountForTrack(track) * 1.2;
  const cap = classCountForTrack(track);

  function toggleDomain(d: number) {
    const has = plan.domains.includes(d);
    const domains = has ? plan.domains.filter((x) => x !== d) : [...plan.domains, d];
    save({ ...plan, domains: domains.length ? domains : [d] });
  }

  function moveDomain(d: number, dir: -1 | 1) {
    const domains = [...plan.domains];
    const i = domains.indexOf(d);
    if (i < 0) return;
    const j = i + dir;
    if (j < 0 || j >= domains.length) return;
    [domains[i], domains[j]] = [domains[j]!, domains[i]!];
    save({ ...plan, domains });
  }

  return (
    <Shell>
      <div className="sp-wrap space-y-8">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="sp-kicker">Study plan</p>
            <h1 className="sp-title mt-2 text-4xl">Your path to exam day.</h1>
            <p className="mt-2 max-w-2xl text-fg-muted">{MODE_COPY[plan.mode]}</p>
          </div>
          <Link to="/settings" className="sp-btn sp-btn-ghost">Seat settings</Link>
        </div>

        <TrackPicker track={track} onChange={setTrack} />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <label className="sp-card p-4 text-sm">
            <p className="text-fg-subtle">Course start</p>
            <input
              type="date"
              className="sp-field mt-2"
              value={plan.startDate}
              onChange={(e) => save({ ...plan, startDate: e.target.value })}
            />
          </label>
          <label className="sp-card p-4 text-sm">
            <p className="text-fg-subtle">Exam target</p>
            <input
              type="date"
              className="sp-field mt-2"
              value={plan.examDate}
              onChange={(e) => save({ ...plan, examDate: e.target.value })}
            />
          </label>
          <article className="sp-card p-4">
            <p className="text-sm text-fg-subtle">Days remaining</p>
            <p className="mt-2 font-serif text-3xl">{days}</p>
          </article>
          <label className="sp-card p-4 text-sm">
            <p className="text-fg-subtle">Daily study hours</p>
            <input
              type="number"
              min={0.5}
              max={8}
              step={0.5}
              className="sp-field mt-2"
              value={plan.dailyHours}
              onChange={(e) => save({ ...plan, dailyHours: Number(e.target.value) || 1 })}
            />
          </label>
        </div>

        {hoursBudget < hoursNeeded ? (
          <p className="rounded-lg border border-warn/40 bg-bg-elevated p-4 text-sm">
            Pace check: {hoursBudget} scheduled hours is below a {Math.round(hoursNeeded)}-hour planning floor for the {track} track. Raise daily hours or move the date.
          </p>
        ) : null}

        <div>
          <p className="sp-kicker">Planner mode</p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {(["adaptive", "mix", "domain", "choice"] as const).map((mode) => (
              <button
                key={mode}
                type="button"
                className={`sp-card p-4 text-left ${plan.mode === mode ? "ring-2 ring-accent" : ""}`}
                onClick={() => save({ ...plan, mode })}
              >
                <p className="font-medium capitalize">{mode}</p>
                <p className="mt-2 text-sm text-fg-muted">{MODE_COPY[mode]}</p>
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="sp-kicker">Arrange domains</p>
          <h2 className="sp-title mt-2 text-2xl">Select and order D1–D7.</h2>
          <div className="mt-4 grid gap-2">
            {plan.domains.map((d, i) => {
              const rows = catalogForTrack(track).filter((row) => row.domain === d);
              const done = rows.filter((row) => completed.includes(row.id)).length;
              return (
                <div key={d} className="sp-card flex flex-wrap items-center gap-3 p-4">
                  <p className="font-mono text-xs text-accent">#{i + 1}</p>
                  <div className="min-w-48 flex-1">
                    <p className="font-medium">D{d} · {DOMAIN_SHORT[d as keyof typeof DOMAIN_SHORT]} · {CSP_DOMAIN_WEIGHTS[d as keyof typeof CSP_DOMAIN_WEIGHTS]}%</p>
                    <p className="text-sm text-fg-muted">{CSP_DOMAIN_NAMES[d as keyof typeof CSP_DOMAIN_NAMES]} · {done}/{rows.length} complete</p>
                  </div>
                  <button type="button" className="sp-btn sp-btn-ghost px-3" onClick={() => moveDomain(d, -1)}>Up</button>
                  <button type="button" className="sp-btn sp-btn-ghost px-3" onClick={() => moveDomain(d, 1)}>Down</button>
                  <button type="button" className="sp-btn sp-btn-ghost px-3" onClick={() => toggleDomain(d)}>Remove</button>
                </div>
              );
            })}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5, 6, 7].filter((d) => !plan.domains.includes(d)).map((d) => (
              <button key={d} type="button" className="sp-btn sp-btn-ghost" onClick={() => toggleDomain(d)}>
                Add D{d}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="sp-kicker">Week map</p>
          <h2 className="sp-title mt-2 text-2xl">{weeks.length} weeks on the {track} track.</h2>
          <div className="mt-4 grid gap-3">
            {weeks.slice(0, 12).map((week) => (
              <article key={week.week} className="sp-card p-5">
                <p className="font-mono text-xs text-accent">Week {week.week}</p>
                <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
                  {week.items.map((row) => (
                    <Link
                      key={row.id}
                      to="/learn/$id"
                      params={{ id: String(row.id) }}
                      className="rounded-md border border-border bg-bg px-3 py-3 text-sm text-inherit no-underline"
                    >
                      <p className="font-mono text-xs text-fg-subtle">C{row.id} · D{row.domain}</p>
                      <p className="mt-1">{row.title}</p>
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
          {weeks.length > 12 ? <p className="mt-3 text-sm text-fg-muted">{weeks.length - 12} more weeks after this view. Close classes to advance the map.</p> : null}
        </div>
      </div>
    </Shell>
  );
}
