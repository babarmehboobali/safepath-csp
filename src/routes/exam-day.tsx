import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/lesson/Shell";

export const Route = createFileRoute("/exam-day")({ component: ExamDay });

function ExamDay() {
  return (
    <Shell>
      <div className="sp-wrap max-w-3xl space-y-8">
        <div>
          <p className="sp-kicker">Exam day</p>
          <h1 className="sp-title mt-2 text-4xl">Habits before the test center.</h1>
        </div>
        <div className="sp-card space-y-3 p-6 text-fg-muted">
          <p>On-screen calculator emulating TI-30XS. Generally no personal calculator.</p>
          <p>Whiteboard provided. No formula sheet. Formula often sits in the stem.</p>
          <p>Closed book. Some items may be pretest and unscored.</p>
          <p>Pick the closest rounded value. DEG, not RAD. Learn the fraction-decimal toggle.</p>
          <p>If two answers work, take higher hierarchy / system / design.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link to="/mock" className="sp-btn sp-btn-primary">Open mock exam</Link>
          <Link to="/calculator" className="sp-btn sp-btn-ghost">Practice calculator</Link>
        </div>
      </div>
    </Shell>
  );
}
