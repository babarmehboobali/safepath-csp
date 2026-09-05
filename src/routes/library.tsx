import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/lesson/Shell";
import { CATALOG } from "@/lib/safepath/catalog";
import { DOMAIN_SHORT } from "@/lib/safepath/domains";
import { stillForClass } from "@/lib/safepath/media";

export const Route = createFileRoute("/library")({ component: Library });

function Library() {
  const featured = CATALOG.filter((row) => row.id <= 16 || row.isDeep);
  return (
    <Shell>
      <div className="sp-wrap space-y-8">
        <div>
          <p className="sp-kicker">CSP study library</p>
          <h1 className="sp-title mt-2 text-4xl">Core classes and deep labs.</h1>
          <p className="mt-2 max-w-2xl text-fg-muted">
            The same 130-class catalog as Studio, grouped for browsing. Open any card to the visual lesson.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link to="/studio" className="sp-btn sp-btn-primary">Full studio</Link>
          <Link to="/topics" className="sp-btn sp-btn-ghost">Topic map</Link>
          <Link to="/blueprint" className="sp-btn sp-btn-ghost">Blueprint</Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((row) => (
            <Link key={row.id} to="/learn/$id" params={{ id: String(row.id) }} className="sp-card overflow-hidden text-inherit no-underline">
              <img src={stillForClass(row.id, row.domain)} alt="" className="aspect-video w-full object-cover" />
              <div className="p-4">
                <p className="font-mono text-xs text-fg-subtle">Class {row.id} · {DOMAIN_SHORT[row.domain as keyof typeof DOMAIN_SHORT]}</p>
                <p className="mt-1 font-serif text-xl">{row.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Shell>
  );
}
