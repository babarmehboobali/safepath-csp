import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/lesson/Shell";

export const Route = createFileRoute("/exam-booking")({ component: ExamBooking });

const STEPS = [
  ["01", "Apply to BCSP", "Sign in to BCSP My Profile and submit the CSP application."],
  ["02", "Receive eligibility", "BCSP must review the application and notify you that you are eligible to sit."],
  ["03", "Pay exam authorization", "Purchase the CSP examination authorization. BCSP currently lists $350 for a single CSP examination; verify the current fee before payment."],
  ["04", "Open Pearson from BCSP", "BCSP says scheduling is completed through the Pearson VUE single-sign-on option in your BCSP My Profile."],
  ["05", "Choose location/date/time", "Select an available Pearson Professional Center appointment. The actual seat availability is live and can change."],
  ["06", "Keep confirmation", "Save the Pearson appointment confirmation and follow the test-center identification/security instructions."],
];

function ExamBooking() {
  return (
    <Shell>
      <div className="sp-wrap max-w-5xl space-y-8">
        <header>
          <p className="sp-kicker">CSP candidate center · scheduling</p>
          <h1 className="sp-title mt-2 text-4xl sm:text-5xl">Book your CSP exam through the correct route</h1>
          <p className="mt-4 max-w-3xl text-pretty text-lg leading-8 text-fg-muted">There is no SafePath booking system and there is no fixed annual CSP exam date. BCSP authorizes the exam; Pearson VUE provides the appointment inventory.</p>
        </header>

        <div className="sp-card border-2 border-accent/30 bg-accent/5 p-6">
          <h2 className="font-serif text-2xl">The important part</h2>
          <p className="mt-3 text-sm leading-7 text-fg-muted"><strong className="text-fg">Do not expect Pearson to show you a bookable CSP appointment before BCSP authorization.</strong> Pearson's official BCSP page says candidates must first apply through BCSP, be notified of eligibility, and pay the examination authorization fee. BCSP then provides the Pearson scheduling path through My Profile.</p>
          <div className="mt-5 flex flex-wrap gap-3"><a className="sp-btn sp-btn-primary" href="https://www.bcsp.org/" target="_blank" rel="noreferrer">Open BCSP My Profile</a><a className="sp-btn sp-btn-ghost" href="https://www.pearsonvue.com/us/en/bcsp.html" target="_blank" rel="noreferrer">Open Pearson BCSP page</a></div>
        </div>

        <section className="sp-card p-6">
          <p className="sp-kicker">Correct sequence</p>
          <h2 className="sp-title mt-2 text-3xl">BCSP → authorization → Pearson</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">{STEPS.map(([n, title, body]) => <article key={n} className="rounded-xl border border-line p-5"><span className="font-mono text-xs text-accent">{n}</span><h3 className="mt-2 font-serif text-xl">{title}</h3><p className="mt-2 text-sm leading-6 text-fg-muted">{body}</p></article>)}</div>
        </section>

        <section className="sp-card p-6">
          <p className="sp-kicker">Why dates are not listed here</p>
          <h2 className="sp-title mt-2 text-3xl">Your exam date is an appointment, not a yearly event</h2>
          <p className="mt-3 text-sm leading-7 text-fg-muted">BCSP says you have one year from approval of your application to sit for the certification exam, and its CSP page directs candidates to schedule an available Pearson appointment. Therefore SafePath should not publish a fabricated “September 2026 CSP exam date.” Your actual date/time/location must come from the authorized Pearson scheduling flow.</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-line p-4"><strong>Plan ahead</strong><p className="mt-1 text-sm text-fg-muted">BCSP recommends scheduling early to improve the chance of getting the preferred appointment.</p></div>
            <div className="rounded-xl border border-line p-4"><strong>Retake spacing</strong><p className="mt-1 text-sm text-fg-muted">BCSP states another appointment must be at least six weeks from the last exam attempt.</p></div>
            <div className="rounded-xl border border-line p-4"><strong>Live availability</strong><p className="mt-1 text-sm text-fg-muted">Center, date and time are controlled by Pearson's current inventory.</p></div>
          </div>
        </section>

        <section className="sp-card p-6">
          <p className="sp-kicker">Pakistan</p>
          <h2 className="sp-title mt-2 text-3xl">Lahore Pearson Professional Center</h2>
          <p className="mt-3 text-sm leading-7 text-fg-muted">Pearson announced a company-owned Pearson Professional Center in Lahore in February 2025. That confirms the center exists; it does not guarantee that a CSP appointment is available for your authorization. Use the live BCSP → Pearson flow to verify CSP availability.</p>
          <a className="mt-4 inline-flex sp-btn sp-btn-ghost" href="https://www.pearsonvue.com/us/en/about/news/2025/pearson-professional-center-opens-in-lahore-pakistan.html" target="_blank" rel="noreferrer">Pearson Lahore announcement</a>
        </section>

        <section className="sp-card p-6">
          <p className="sp-kicker">Exam day</p>
          <h2 className="sp-title mt-2 text-3xl">What to expect</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">{[
            "Computer-delivered CSP examination",
            "5.5-hour published exam duration",
            "Four answer choices with one correct/best answer",
            "On-screen TI-30XS scientific calculator",
            "Whiteboard/marker for working calculations",
            "Government-issued identification requirements apply",
            "No personal calculator or normal study materials in the secure testing room",
            "Official result available when the exam is submitted",
          ].map((x) => <li key={x} className="rounded-xl border border-line p-4 text-sm">✓ {x}</li>)}</ul>
        </section>

        <div className="flex flex-wrap gap-3"><Link to="/eligibility" className="sp-btn sp-btn-ghost">Back to eligibility</Link><Link to="/csp-guide" className="sp-btn sp-btn-ghost">CSP application guide</Link><Link to="/mock" className="sp-btn sp-btn-primary">Prepare with a mock exam</Link></div>

        <footer className="sp-card p-5 text-xs leading-6 text-fg-muted">Official-source basis checked 5 September 2026. SafePath cannot create, reserve, modify, or guarantee Pearson appointments. Use BCSP My Profile and Pearson's official BCSP scheduling route for live availability.</footer>
      </div>
    </Shell>
  );
}
