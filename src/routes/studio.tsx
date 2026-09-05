import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Shell } from "@/components/lesson/Shell";
import { catalogForTrack } from "@/lib/safepath/catalog";
import { CSP_DOMAIN_NAMES, CSP_DOMAIN_WEIGHTS, DOMAIN_SHORT } from "@/lib/safepath/domains";
import { stillForClass } from "@/lib/safepath/media";
import { readSession, type TrackId } from "@/lib/safepath/session";
import { TrackPicker, labelForTrack } from "@/components/lesson/TrackPicker";
import { hasSavedPlan, readPlan } from "@/lib/safepath/planner";

export const Route = createFileRoute("/studio")({ component: Studio });
const ALL_DOMAINS = [1, 2, 3, 4, 5, 6, 7] as const;
type StatusFilter = "all" | "remaining" | "done" | "flagged";

function Studio() {
  const [domains, setDomains] = useState<number[]>([...ALL_DOMAINS]);
  const [query, setQuery] = useState("");
  const [done, setDone] = useState<number[]>([]);
  const [flagged, setFlagged] = useState<number[]>([]);
  const [track, setTrack] = useState<TrackId>("recommended");
  const [showDone, setShowDone] = useState<StatusFilter>("all");
  const [planSaved, setPlanSaved] = useState(false);
  const [planSummary, setPlanSummary] = useState("Not created yet");

  function refresh() {
    const session = readSession();
    const saved = hasSavedPlan();
    const plan = readPlan();
    setDone(session.completed); setFlagged(session.flaggedClasses); setTrack(session.track);
    setPlanSaved(saved);
    setPlanSummary(saved ? `${plan.domains.length} domains · ${plan.dailyHours} h/day · ${plan.mode === "domain" ? "domain blocks" : plan.mode === "choice" ? "your order" : plan.mode === "mix" ? "mixed" : "adaptive"}` : "Not created yet");
  }
  useEffect(() => { refresh(); const onFocus = () => refresh(); window.addEventListener("focus", onFocus); return () => window.removeEventListener("focus", onFocus); }, []);

  const pool = catalogForTrack(track);
  const domainCounts = useMemo(() => Object.fromEntries(ALL_DOMAINS.map((d) => [d, pool.filter((row) => row.domain === d).length])) as Record<number, number>, [pool]);
  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return pool.filter((row) => {
      if (domains.length === 0 || !domains.includes(row.domain)) return false;
      if (showDone === "remaining" && done.includes(row.id)) return false;
      if (showDone === "done" && !done.includes(row.id)) return false;
      if (showDone === "flagged" && !flagged.includes(row.id)) return false;
      if (!q) return true;
      return `${row.id} ${row.title} ${row.taskCode}`.toLowerCase().includes(q);
    });
  }, [domains, query, pool, done, flagged, showDone]);

  const continueRow = pool.find((row) => !done.includes(row.id)) ?? pool[0];
  const completedInTrack = pool.filter((row) => done.includes(row.id)).length;
  const completionPct = pool.length ? Math.round((completedInTrack / pool.length) * 100) : 0;
  const allSelected = domains.length === ALL_DOMAINS.length;
  function toggleAllDomains() { setDomains(allSelected ? [] : [...ALL_DOMAINS]); }
  function toggleDomain(domain: number) { setDomains((current) => current.includes(domain) ? current.filter((d) => d !== domain) : [...current, domain].sort((a, b) => a - b)); }

  return (
    <Shell>
      <div className="sp-study-page space-y-7">
        <section className="sp-study-hero">
          <div><p className="sp-kicker">Learning workspace</p><h1>Study with a plan, not a list.</h1><p>Choose your track, focus one or more domains, and move through classes with visible progress. Your study path stays practical and exam-oriented.</p></div>
          <div className="sp-study-hero-actions">
            <Link to="/plan" className={`sp-study-plan-cta ${planSaved ? "is-ready" : ""}`}><span className="sp-study-plan-icon">{planSaved ? "✓" : "⌘"}</span><span><b>{planSaved ? "Study plan ready" : "Build study plan"}</b><small>{planSaved ? planSummary : "Set your date, method & domain order"}</small></span><strong>→</strong></Link>
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search class, task, or title" className="sp-field sp-study-search" aria-label="Search classes" />
          </div>
        </section>
        <section className="sp-study-stats" aria-label="Study progress"><div className="sp-study-stat"><strong>{completedInTrack}</strong><span>Classes completed</span></div><div className="sp-study-stat"><strong>{Math.max(0, pool.length - completedInTrack)}</strong><span>Classes remaining</span></div><div className="sp-study-stat"><strong>{completionPct}%</strong><span>Track progress</span></div><Link to="/plan" className="sp-study-stat sp-study-plan-status"><strong>{planSaved ? "✓" : "→"}</strong><span>{planSaved ? "Plan active" : "Build study plan"}</span></Link></section>
        {continueRow ? <section className="sp-study-continue"><div><p className="sp-kicker">Continue learning</p><h2>{done.length ? "Pick up where you left off" : "Start your first class"}</h2><p>Next suggested class: {continueRow.title} · D{continueRow.domain} · {labelForTrack(track)}</p></div><Link to="/learn/$id" params={{ id: String(continueRow.id) }} className="sp-btn sp-btn-primary">{done.length ? "Continue →" : "Start class →"}</Link></section> : null}
        <TrackPicker track={track} onChange={setTrack} />
        <section className="space-y-3">
          <div className="sp-domain-heading"><div><p className="sp-kicker">CSP-11 domains</p><p className="text-sm text-fg-muted">Select any combination. <strong>All domains</strong> selects all seven; click it again to clear the selection.</p></div><button type="button" className={`sp-btn px-3 text-sm ${allSelected ? "sp-btn-primary" : "sp-btn-ghost"}`} onClick={toggleAllDomains} aria-pressed={allSelected}>{allSelected ? "All domains" : "Select all"}</button></div>
          <div className="sp-domain-grid" role="group" aria-label="CSP-11 domain filters">{ALL_DOMAINS.map((d) => { const on = domains.includes(d); const domainPool = pool.filter((row) => row.domain === d); const domainDone = domainPool.filter((row) => done.includes(row.id)).length; const pct = domainPool.length ? Math.round((domainDone / domainPool.length) * 100) : 0; return <button key={d} type="button" onClick={() => toggleDomain(d)} className={`sp-domain-tile ${on ? "is-active" : ""}`} aria-pressed={on} aria-label={`${CSP_DOMAIN_NAMES[d as keyof typeof CSP_DOMAIN_NAMES]}, ${domainCounts[d] ?? 0} classes, ${on ? "selected" : "not selected"}`}><div className="sp-domain-tile-top"><p className="font-mono text-[10px] text-accent">D{d} · {CSP_DOMAIN_WEIGHTS[d as keyof typeof CSP_DOMAIN_WEIGHTS]}%</p><span className="sp-domain-select-mark" aria-hidden="true">{on ? "✓" : ""}</span></div><p className="mt-1 truncate text-sm font-semibold">{DOMAIN_SHORT[d as keyof typeof DOMAIN_SHORT]}</p><p className="mt-1 text-[11px] text-fg-muted">{domainCounts[d] ?? 0} classes · {domainDone} done</p><div className="sp-domain-progress"><span style={{ width: `${pct}%` }} /></div></button>; })}</div>
          <div className={`sp-domain-selection-summary ${domains.length === 0 ? "is-empty" : ""}`} aria-live="polite"><span>{domains.length === 0 ? "No domain selected" : `${domains.length} of 7 domains selected`}</span><strong>{rows.length} classes shown</strong></div>
        </section>
        <section className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-3"><div><p className="sp-kicker">Class library</p><p className="text-sm text-fg-muted">{rows.length} classes in this view · {labelForTrack(track)}{flagged.length ? ` · ${flagged.length} flagged for review` : ""}</p></div><div className="flex flex-wrap gap-2" role="group" aria-label="Class status filter">{(["all", "remaining", "done", "flagged"] as const).map((id) => <button key={id} type="button" className={`sp-btn px-3 text-xs ${showDone === id ? "sp-btn-primary" : "sp-btn-ghost"}`} onClick={() => setShowDone(id)}>{id === "all" ? "All" : id === "remaining" ? "To study" : id === "done" ? "Completed" : `Flagged${flagged.length ? ` (${flagged.length})` : ""}`}</button>)}</div></div>
          {rows.length ? <div className="sp-class-grid">{rows.map((row) => { const isDone = done.includes(row.id); const isFlagged = flagged.includes(row.id); return <Link key={row.id} to="/learn/$id" params={{ id: String(row.id) }} className={`sp-class-card ${isFlagged ? "is-flagged" : ""}`}><div className="sp-class-card-image-wrap"><img src={stillForClass(row.id, row.domain)} alt="" loading="lazy" />{isFlagged ? <span className="sp-class-flag-badge">★ Review focus</span> : null}</div><div className="sp-class-card-body"><p className="font-mono text-[10px] text-fg-subtle">Class {row.id} · {row.taskCode}</p><p className="sp-class-card-title">{row.title}</p><p className="sp-class-card-meta">{DOMAIN_SHORT[row.domain as keyof typeof DOMAIN_SHORT]} · {labelForTrack(track)} {isDone ? <span className="sp-class-card-badge">✓ Done</span> : null}</p></div></Link>; })}</div> : <div className="sp-card p-8 text-center"><p className="font-serif text-xl">{domains.length === 0 ? "Choose a domain to start studying." : showDone === "flagged" ? "No topics are flagged yet." : "No classes match these filters."}</p><p className="mt-2 text-sm text-fg-muted">{domains.length === 0 ? "Click All domains or select one or more domain cards above." : showDone === "flagged" ? "Open any class and use Flag for review to build your focus list." : "Try another search, domain, or status."}</p></div>}
        </section>
      </div>
    </Shell>
  );
}
