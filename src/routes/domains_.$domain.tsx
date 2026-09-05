import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { Shell } from "@/components/lesson/Shell";
import { CATALOG } from "@/lib/safepath/catalog";
import { CSP_DOMAIN_DETAILS, CSP_DOMAIN_NAMES, CSP_DOMAIN_WEIGHTS, DOMAIN_SHORT } from "@/lib/safepath/domains";

export const Route = createFileRoute("/domains/$domain")({
  component: DomainDetail,
  head: ({ params }) => {
    const id = Number(params.domain) as 1 | 2 | 3 | 4 | 5 | 6 | 7;
    const name = CSP_DOMAIN_NAMES[id];
    return { meta: [
      { title: `${name} | SafePath CSP` },
      { name: "description", content: `CSP-11 Domain ${params.domain}: ${name}. Published scope, SafePath classes, study lens, and practice priorities.` },
    ] };
  },
});

const DOMAIN_IDS = [1, 2, 3, 4, 5, 6, 7] as const;
type DomainId = (typeof DOMAIN_IDS)[number];

function getDomainId(value: string): DomainId {
  const id = Number(value);
  if (!DOMAIN_IDS.includes(id as DomainId)) throw redirect({ to: "/domains" });
  return id as DomainId;
}

function DomainDetail() {
  const { domain } = Route.useParams();
  const id = getDomainId(domain);
  const detail = CSP_DOMAIN_DETAILS[id];
  const classCount = CATALOG.filter((row) => row.domain === id).length;
  const previous = id > 1 ? id - 1 : 7;
  const next = id < 7 ? id + 1 : 1;

  return (
    <Shell>
      <div className={`sp-wrap sp-domain-detail sp-domain-tone-${detail.color}`}>
        <section className="sp-domain-hero">
          <div className="sp-domain-hero-main">
            <div className="sp-domain-sign" aria-hidden="true"><span className="sp-domain-sign-icon">{detail.icon}</span><span>D{id}</span></div>
            <div><p className="sp-kicker">CSP-11 · Domain {id} · {CSP_DOMAIN_WEIGHTS[id]}% of blueprint</p><h1 className="sp-title mt-2">{CSP_DOMAIN_NAMES[id]}</h1><p className="sp-domain-tagline">{detail.tagline}</p><p className="mt-4 max-w-3xl text-pretty text-fg-muted">{detail.summary}</p><div className="mt-5 flex flex-wrap gap-3"><Link to="/studio" className="sp-btn sp-btn-primary">Study {DOMAIN_SHORT[id]}</Link><Link to="/drill" className="sp-btn sp-btn-ghost">Domain drill</Link><Link to="/blueprint" className="sp-btn sp-btn-ghost">Full blueprint</Link></div></div>
          </div>
          <div className="sp-domain-stat-card"><span className="sp-domain-stat-label">SafePath catalog</span><strong>{classCount}</strong><span>classes mapped to this domain</span><div className="sp-domain-weight-bar" aria-label={`${CSP_DOMAIN_WEIGHTS[id]} percent blueprint weight`}><span style={{ width: `${CSP_DOMAIN_WEIGHTS[id] * 4}%` }} /></div><small>{CSP_DOMAIN_WEIGHTS[id]}% published CSP-11 weight</small></div>
        </section>

        <section className="sp-domain-section"><div className="sp-domain-section-heading"><div><p className="sp-kicker">What to master</p><h2 className="sp-title text-3xl">The study lens</h2></div><span className="sp-domain-pill">{detail.focus.length} focus areas</span></div><div className="sp-domain-focus-grid">{detail.focus.map((topic, index) => <div className="sp-domain-focus" key={topic}><span>{String(index + 1).padStart(2, "0")}</span><strong>{topic}</strong></div>)}</div></section>

        <section className="sp-domain-grid"><article className="sp-domain-panel sp-domain-panel-accent"><p className="sp-kicker">Exam thinking</p><h2 className="font-serif text-2xl">Skills to practice</h2><ul className="sp-domain-list">{detail.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></article><article className="sp-domain-panel"><p className="sp-kicker">Field translation</p><h2 className="font-serif text-2xl">How SafePath should train you</h2><div className="sp-domain-method"><div><b>01</b><span>See the situation</span></div><div><b>02</b><span>Identify the hazard or gap</span></div><div><b>03</b><span>Choose the defensible control</span></div><div><b>04</b><span>Drill the decision until it is automatic</span></div></div></article></section>

        <section className="sp-domain-section"><div className="sp-domain-section-heading"><div><p className="sp-kicker">Blueprint map</p><h2 className="sp-title text-3xl">What BCSP lists in this domain</h2></div><span className="sp-domain-source-badge">CSP11 · V.2024.04.24</span></div><div className="sp-domain-task-grid">{detail.tasks.map((task, index) => <article className="sp-domain-task" key={task}><div className="sp-domain-task-number">{index + 1}</div><p>{task}</p></article>)}</div><p className="sp-domain-source">Domain scope is based on the public BCSP CSP11 Examination Blueprint, version 2024.04.24. SafePath paraphrases the published knowledge/skill statements for study use and is independent of BCSP.</p></section>

        <section className="sp-domain-nav"><Link to="/domains/$domain" params={{ domain: String(previous) }} className="sp-domain-nav-card"><span>Previous domain</span><strong>D{previous} · {DOMAIN_SHORT[previous]}</strong></Link><Link to="/domains" className="sp-btn sp-btn-ghost">All seven domains</Link><Link to="/domains/$domain" params={{ domain: String(next) }} className="sp-domain-nav-card sp-domain-nav-next"><span>Next domain</span><strong>D{next} · {DOMAIN_SHORT[next]}</strong></Link></section>
      </div>
    </Shell>
  );
}
