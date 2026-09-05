import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/lesson/Shell";
import { CalcPad } from "@/components/lesson/CalcPad";

export const Route = createFileRoute("/calculator")({ component: CalculatorPage });

function CalculatorPage() {
  return (
    <Shell>
      <div className="sp-wrap grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="sp-kicker">Practice calculator</p>
          <h1 className="sp-title mt-2 text-4xl">DEG, not RAD.</h1>
          <p className="mt-3 max-w-xl text-fg-muted">
            A study look-alike, not Pearson software and not TI firmware. On the real sitting you get the on-screen
            pad, a whiteboard, and no formula sheet.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-fg-muted">
            <li>Pick the closest rounded listed value.</li>
            <li>Inches are not feet. Diameter is not radius.</li>
            <li>OSHA 5 dB / 90 and NIOSH 3 dB / 85 travel as matched pairs.</li>
            <li>TRIR and DART use 200,000 hours.</li>
          </ul>
          <Link to="/formulas" className="sp-btn sp-btn-ghost mt-6">
            Open formula desk
          </Link>
        </div>
        <CalcPad />
      </div>
    </Shell>
  );
}
