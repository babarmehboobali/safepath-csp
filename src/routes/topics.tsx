import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/lesson/Shell";
import { CATALOG } from "@/lib/safepath/catalog";
import { CSP_DOMAIN_NAMES, DOMAIN_SHORT } from "@/lib/safepath/domains";

export const Route = createFileRoute("/topics")({ component: Topics });

function Topics() {
  return (
    <Shell>
      <div className="sp-wrap space-y-8">
        <div>
          <p className="sp-kicker">Topic map</p>
          <h1 className="sp-title mt-2 text-4xl">Every class under its domain.</h1>
        </div>
        {([1, 2, 3, 4, 5, 6, 7] as const).map((d) => (
          <section key={d} className="space-y-3">
            <h2 className="font-serif text-2xl">
              D{d} · {DOMAIN_SHORT[d]}
            </h2>
            <p className="text-sm text-fg-muted">{CSP_DOMAIN_NAMES[d]}</p>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {CATALOG.filter((row) => row.domain === d).map((row) => (
                <Link key={row.id} to="/learn/$id" params={{ id: String(row.id) }} className="sp-card p-4 text-inherit no-underline">
                  <p className="font-mono text-xs text-fg-subtle">Class {row.id}</p>
                  <p className="mt-1">{row.title}</p>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </Shell>
  );
}
