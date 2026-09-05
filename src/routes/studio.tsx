import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Shell } from "@/components/lesson/Shell";
import { catalogForTrack } from "@/lib/safepath/catalog";
import { CSP_DOMAIN_NAMES, CSP_DOMAIN_WEIGHTS, DOMAIN_SHORT } from "@/lib/safepath/domains";
import { stillForClass } from "@/lib/safepath/media";
import { readSession, type TrackId } from "@/lib/safepath/session";
import { TrackPicker, labelForTrack } from "@/components/lesson/TrackPicker";

export const Route = createFileRoute("/studio")({ component: Studio });

function Studio() {
  const [domains, setDomains] = useState<number[]>([1, 2, 3, 4, 5, 6, 7]);
  const [query, setQuery] = useState("");
  const [done, setDone] = useState<number[]>([]);
  const [track, setTrack] = useState<TrackId>("recommended");

  useEffect(() => {
    const session = readSession();
    setDone(session.completed);
    setTrack(session.track);
  }, []);

  const pool = catalogForTrack(track);
  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return pool.filter((row) => {
      if (domains.length && !domains.includes(row.domain)) return false;
      if (!q) return true;
      return `${row.id} ${row.title} ${row.taskCode}`.toLowerCase().includes(q);
    });
  }, [domains, query, pool]);

  return (
    <Shell>
      <div className="sp-wrap space-y-8">
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="sp-kicker">Learning</p>
            <h1 className="sp-title mt-2 text-4xl">Pick a track, then a class.</h1>
          </div>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search class, task, or title"
            className="sp-field"
          />
        </div>
        <TrackPicker track={track} onChange={setTrack} />
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-sm text-fg-muted">Domains. All seven is the default. Click more than one.</p>
          <button
            type="button"
            className={`sp-btn px-3 text-sm ${domains.length === 7 ? "sp-btn-primary" : "sp-btn-ghost"}`}
            onClick={() => setDomains([1, 2, 3, 4, 5, 6, 7])}
          >
            All domains
          </button>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4, 5, 6, 7].map((d) => {
            const on = domains.includes(d);
            return (
              <button
                key={d}
                type="button"
                onClick={() => {
                  const next = on ? domains.filter((x) => x !== d) : [...domains, d];
                  setDomains(next.length ? next.sort((a, b) => a - b) : [1, 2, 3, 4, 5, 6, 7]);
                }}
                className={`sp-card p-4 text-left ${on ? "ring-2 ring-accent" : ""}`}
              >
                <p className="font-mono text-xs text-accent">D{d} · {CSP_DOMAIN_WEIGHTS[d as keyof typeof CSP_DOMAIN_WEIGHTS]}%</p>
                <p className="mt-1 font-medium">{DOMAIN_SHORT[d as keyof typeof DOMAIN_SHORT]}</p>
                <p className="mt-1 text-sm text-fg-muted">{CSP_DOMAIN_NAMES[d as keyof typeof CSP_DOMAIN_NAMES]}</p>
              </button>
            );
          })}
        </div>
        <p className="text-sm text-fg-muted">{rows.length} classes in this view.</p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {rows.map((row) => (
            <Link
              key={row.id}
              to="/learn/$id"
              params={{ id: String(row.id) }}
              className="sp-card overflow-hidden text-inherit no-underline"
            >
              <img src={stillForClass(row.id, row.domain)} alt="" className="aspect-video w-full object-cover" loading="lazy" />
              <div className="p-5">
                <p className="font-mono text-xs text-fg-subtle">
                  Class {row.id} · {row.taskCode}
                  {done.includes(row.id) ? " · done" : ""}
                </p>
                <p className="mt-2 font-serif text-xl">{row.title}</p>
                <p className="mt-2 text-sm text-fg-muted">
                  {DOMAIN_SHORT[row.domain as keyof typeof DOMAIN_SHORT]} · {labelForTrack(track)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Shell>
  );
}
