import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/lesson/Shell";
import { FORMULAS } from "@/lib/safepath/formulas";

export const Route = createFileRoute("/formulas")({ component: FormulasPage });

function FormulasPage() {
  return (
    <Shell>
      <div className="sp-wrap space-y-8">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="sp-kicker">Formula desk</p>
            <h1 className="sp-title mt-2 text-4xl">Name it before you punch keys.</h1>
          </div>
          <Link to="/calculator" className="sp-btn sp-btn-ghost">Calculator</Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {FORMULAS.map((row) => (
            <article key={row.slug} className="sp-card p-5">
              <p className="sp-kicker">{row.name}</p>
              <p className="mt-2 font-mono text-sm text-accent">{row.expression}</p>
              <p className="mt-3 text-sm text-fg-muted">{row.when}</p>
              <p className="mt-2 text-sm">Trap: {row.pitfall}</p>
              <p className="mt-2 text-sm text-fg-subtle">{row.example}</p>
            </article>
          ))}
        </div>
      </div>
    </Shell>
  );
}
