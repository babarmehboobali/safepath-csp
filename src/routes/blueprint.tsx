import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Shell } from "@/components/lesson/Shell";
import { CATALOG } from "@/lib/safepath/catalog";
import { CSP_DOMAIN_NAMES, CSP_DOMAIN_WEIGHTS, DOMAIN_SHORT } from "@/lib/safepath/domains";
import { stillForClass } from "@/lib/safepath/media";

export const Route = createFileRoute("/blueprint")({ component: Blueprint });

function Blueprint() {
  const [domain, setDomain] = useState(1);
  const rows = useMemo(() => CATALOG.filter((row) => row.domain === domain), [domain]);

  return (
    <Shell>
      <div className="sp-wrap space-y-8">
        <div>
          <p className="sp-kicker">CSP-11 blueprint</p>
          <h1 className="sp-title mt-2 text-4xl">Seven domains. Public weights.</h1>
          <p className="mt-3 max-w-2xl text-fg-muted">
            Domain 1 and Domain 2 carry half the exam. Open a domain, then a class. Study time follows the sitting.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {([1, 2, 3, 4, 5, 6, 7] as const).map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => setDomain(d)}
              className={`sp-card p-4 text-left ${domain === d ? "ring-2 ring-accent" : ""}`}
            >
              <p className="font-mono text-xs text-accent">
                D{d} · {CSP_DOMAIN_WEIGHTS[d]}%
              </p>
              <p className="mt-1 font-medium">{DOMAIN_SHORT[d]}</p>
              <p className="mt-1 text-sm text-fg-muted">{CSP_DOMAIN_NAMES[d]}</p>
            </button>
          ))}
        </div>
        <p className="text-sm text-fg-muted">{rows.length} classes in Domain {domain}.</p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {rows.map((row) => (
            <Link
              key={row.id}
              to="/learn/$id"
              params={{ id: String(row.id) }}
              className="sp-card overflow-hidden text-inherit no-underline"
            >
              <img src={stillForClass(row.id, row.domain)} alt="" className="aspect-video w-full object-cover" />
              <div className="p-5">
                <p className="font-mono text-xs text-fg-subtle">Class {row.id} · {row.taskCode}</p>
                <p className="mt-2 font-serif text-xl">{row.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Shell>
  );
}
