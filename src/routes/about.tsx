import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/lesson/Shell";

export const Route = createFileRoute("/about")({ component: About });

function About() {
  return (
    <Shell>
      <div className="sp-wrap max-w-3xl space-y-8">
        <div>
          <p className="sp-kicker">About</p>
          <h1 className="sp-title mt-2 text-4xl">Independent CSP-11 study.</h1>
        </div>
        <div className="sp-card space-y-4 p-6 text-fg-muted">
          <p>
            SafePath is a study aid, not a pass guarantee. The CSP is earned by your hours, your judgment, and exam day.
            We give you the desks. You do the work.
          </p>
          <p>
            This system is not BCSP, Pearson VUE, or any other prep vendor. Completing classes, gyms, and sittings does
            not guarantee that you will pass or receive any particular score.
          </p>
          <p>
            Use the catalog, sit weighted drills, and treat every miss as a topic to reopen. A good score is built
            before you enter the test center — not promised by software.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <article className="sp-card p-5">
            <p className="font-serif text-xl">Suggestions</p>
            <p className="mt-2 text-sm text-fg-muted">
              Improvements and problems go to suggestions@safepath-csp.com.
            </p>
            <Link to="/contact" className="mt-3 inline-block text-sm font-semibold text-accent">
              Open the contact box
            </Link>
          </article>
          <article className="sp-card p-5">
            <p className="font-serif text-xl">Development phase</p>
            <p className="mt-2 text-sm text-fg-muted">
              Content and availability may change. No payment is required in this phase. Paid plans, if introduced, will
              be disclosed before any charge.
            </p>
          </article>
          <article className="sp-card p-5">
            <p className="font-serif text-xl">Publish hold</p>
            <p className="mt-2 text-sm text-fg-muted">
              This preview is not the live site. Nothing ships to the public app until you give the go-ahead.
            </p>
          </article>
        </div>
        <Link to="/login" className="sp-btn sp-btn-primary">Log in</Link>
      </div>
    </Shell>
  );
}
