import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/lesson/Shell";
import { CATALOG } from "@/lib/safepath/catalog";
import { CSP_DOMAIN_DETAILS, CSP_DOMAIN_NAMES, CSP_DOMAIN_WEIGHTS, DOMAIN_SHORT } from "@/lib/safepath/domains";

export const Route = createFileRoute("/domains/")({ component: Domains });

const IDS = [1, 2, 3, 4, 5, 6, 7] as const;

function Domains() {
  return (
    <Shell>
      <div className="sp-wrap space-y-6">
        <div>
          <p className="sp-kicker">CSP-11 domain explorer</p>
          <h1 className="sp-title mt-2 text-4xl">Seven domains. One complete blueprint.</h1>
          <p className="mt-3 max-w-3xl text-pretty text-fg-muted">
            Open any domain for its published scope, SafePath class count, study lens, and a practical breakdown of the skills to master.
          </p>
        </div>
        <div className="sp-domain-home-grid">
          {IDS.map((d) => {
            const n = CATALOG.filter((row) => row.domain === d).length;
            const detail = CSP_DOMAIN_DETAILS[d];
            return (
              <Link key={d} to="/domains/$domain" params={{ domain: String(d) }} className={`sp-domain-home-card sp-domain-home-${d} no-underline`}>
                <div className="sp-domain-home-top">
                  <span className="sp-domain-home-icon" aria-hidden="true">{detail.icon}</span>
                  <span>D{d}</span>
                  <span>{CSP_DOMAIN_WEIGHTS[d]}%</span>
                </div>
                <div className="sp-domain-home-copy">
                  <strong>{DOMAIN_SHORT[d]}</strong>
                  <span>{CSP_DOMAIN_NAMES[d]}</span>
                </div>
                <div className="sp-domain-home-footer">
                  <span>{n} classes</span>
                  <span>Open domain →</span>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="flex flex-wrap gap-3">
          <Link to="/blueprint" className="sp-btn sp-btn-ghost">Open public blueprint</Link>
          <Link to="/studio" className="sp-btn sp-btn-primary">Start learning</Link>
        </div>
      </div>
    </Shell>
  );
}
