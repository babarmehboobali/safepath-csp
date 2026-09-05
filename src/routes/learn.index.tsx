import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/lesson/Shell";
import { CATALOG } from "@/lib/safepath/catalog";
import { DOMAIN_SHORT } from "@/lib/safepath/domains";
import { stillForClass } from "@/lib/safepath/media";

export const Route = createFileRoute("/learn/")({ component: LearnIndex });

function LearnIndex() {
  return (
    <Shell>
      <div className="sp-wrap space-y-6">
        <div>
          <p className="sp-kicker">Learn</p>
          <h1 className="sp-title mt-2 text-4xl">Open any class.</h1>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {CATALOG.slice(0, 24).map((row) => (
            <Link key={row.id} to="/learn/$id" params={{ id: String(row.id) }} className="sp-card overflow-hidden text-inherit no-underline">
              <img src={stillForClass(row.id, row.domain)} alt="" className="aspect-video w-full object-cover" />
              <div className="p-4">
                <p className="font-mono text-xs text-fg-subtle">Class {row.id} · {DOMAIN_SHORT[row.domain as keyof typeof DOMAIN_SHORT]}</p>
                <p className="mt-1">{row.title}</p>
              </div>
            </Link>
          ))}
        </div>
        <Link to="/studio" className="sp-btn sp-btn-primary">All 130 in Learning</Link>
      </div>
    </Shell>
  );
}
