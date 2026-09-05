import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/lesson/Shell";
import { CATALOG } from "@/lib/safepath/catalog";
import { CSP_DOMAIN_NAMES, CSP_DOMAIN_WEIGHTS, DOMAIN_SHORT } from "@/lib/safepath/domains";

export const Route = createFileRoute("/domains")({ component: Domains });

function Domains() {
  return (
    <Shell>
      <div className="sp-wrap space-y-6">
        <div>
          <p className="sp-kicker">Domains</p>
          <h1 className="sp-title mt-2 text-4xl">Seven CSP-11 domains.</h1>
        </div>
        <div className="grid gap-3 lg:grid-cols-2">
          {([1, 2, 3, 4, 5, 6, 7] as const).map((d) => {
            const n = CATALOG.filter((row) => row.domain === d).length;
            return (
              <Link key={d} to="/drill" className="sp-card p-6 text-inherit no-underline">
                <p className="font-mono text-xs text-accent">D{d} · {CSP_DOMAIN_WEIGHTS[d]}%</p>
                <p className="mt-2 font-serif text-2xl">{DOMAIN_SHORT[d]}</p>
                <p className="mt-2 text-sm text-fg-muted">{CSP_DOMAIN_NAMES[d]} · {n} classes</p>
              </Link>
            );
          })}
        </div>
        <Link to="/blueprint" className="sp-btn sp-btn-ghost">Open blueprint</Link>
      </div>
    </Shell>
  );
}
