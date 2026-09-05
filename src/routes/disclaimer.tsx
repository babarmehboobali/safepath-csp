import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/lesson/Shell";

export const Route = createFileRoute("/disclaimer")({ component: Disclaimer });

function Disclaimer() {
  return (
    <Shell>
      <div className="sp-wrap max-w-3xl space-y-6">
        <p className="sp-kicker">Disclaimer</p>
        <h1 className="sp-title text-4xl">Study aid. Not a pass guarantee.</h1>
        <div className="sp-card space-y-3 p-6 text-fg-muted">
          <p>SafePath is independent of BCSP and Pearson VUE. Completing classes or mocks does not guarantee a score.</p>
          <p>Eligibility is decided by BCSP. Practice certificates are study records only.</p>
          <p>The on-screen calculator is a look-alike, not Pearson software or TI firmware.</p>
        </div>
        <Link to="/about" className="sp-btn sp-btn-ghost">Full honesty notice</Link>
      </div>
    </Shell>
  );
}
