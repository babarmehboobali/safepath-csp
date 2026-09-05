import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/lesson/Shell";

export const Route = createFileRoute("/csp-guide")({ component: CspGuide });

const QUALIFIED = [
  "ASP",
  "GSP",
  "TSP",
  "CIH",
  "CMIOSH / CFIOSH",
  "CRSP",
  "ACRC Professional Certificate in Safety and Occupational Health",
  "Certified Safety Engineer (CSE) — PRC",
  "ITC-ILO Master in Occupational Safety and Health",
  "NEBOSH National or International Diploma in Occupational Health and Safety",
  "SISO Professional Member",
  "India government Diploma/Certificate in Industrial Safety",
];

const CHECKED = "5 September 2026";

function CspGuide() {
  return (
    <Shell>
      <div className="sp-wrap max-w-5xl space-y-8">
        <header>
          <p className="sp-kicker">CSP application + exam</p>
          <h1 className="sp-title mt-2 text-4xl sm:text-5xl">Your complete CSP roadmap</h1>
          <p className="mt-4 max-w-3xl text-pretty text-lg leading-8 text-fg-muted">
            A plain-English guide to checking eligibility, applying to BCSP, paying the exam authorization, scheduling through Pearson, preparing for the CSP examination, and maintaining the credential.
          </p>
          <p className="mt-3 text-xs text-fg-muted">Official-source check: {CHECKED}. SafePath is independent from BCSP and Pearson VUE.</p>
        </header>

        <div className="grid gap-4 md:grid-cols-4">
          {[
            ["01", "Eligibility", "Degree + 4 years + qualifying credential"],
            ["02", "Application", "BCSP My Profile review and approval"],
            ["03", "Scheduling", "Pearson appointment after authorization"],
            ["04", "Exam", "5.5-hour computer-delivered CSP"],
          ].map(([n, title, body]) => <article key={n} className="sp-card p-5"><span className="font-mono text-xs text-accent">{n}</span><h2 className="mt-2 font-serif text-xl">{title}</h2><p className="mt-2 text-sm text-fg-muted">{body}</p></article>)}
        </div>

        <section className="sp-card p-6">
          <p className="sp-kicker">1 · Published CSP requirements</p>
          <h2 className="sp-title mt-2 text-3xl">Five things must line up</h2>
          <ol className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              ["Bachelor's degree", "At minimum, a bachelor's degree. BCSP states that all education requirements must be met when pursuing the CSP."],
              ["Four years SH&E experience", "At least four years of safety, health, and environment experience."],
              ["50% preventative professional work", "At least 50% of the qualifying experience is/was preventative, professional-level work with breadth and depth of safety duties."],
              ["BCSP Qualified Credential", "You need a credential accepted by BCSP as a qualifying credential."],
              ["CSP examination", "After eligibility, you must pass the CSP exam and then maintain the certification through annual renewal and recertification requirements."],
            ].map(([title, body], i) => <li key={title} className="rounded-xl border border-line p-5"><span className="font-mono text-xs text-accent">0{i + 1}</span><h3 className="mt-2 font-serif text-xl">{title}</h3><p className="mt-2 text-sm leading-6 text-fg-muted">{body}</p></li>)}
          </ol>
          <div className="mt-5 flex flex-wrap gap-3"><Link to="/eligibility" className="sp-btn sp-btn-primary">Run deep eligibility check</Link><a className="sp-btn sp-btn-ghost" href="https://www.bcsp.org/certified-safety-professional-csp" target="_blank" rel="noreferrer">Verify on BCSP</a></div>
        </section>

        <section className="sp-card p-6">
          <p className="sp-kicker">Qualifying credentials</p>
          <h2 className="sp-title mt-2 text-3xl">BCSP's current CSP list</h2>
          <p className="mt-3 text-sm leading-6 text-fg-muted">The current BCSP CSP page explicitly lists the following qualified credentials. This is especially important for international candidates because a qualifying credential is not automatically the same thing as having a safety job title.</p>
          <ul className="mt-5 grid gap-2 sm:grid-cols-2">{QUALIFIED.map((item) => <li key={item} className="rounded-lg border border-line px-4 py-3 text-sm">✓ {item}</li>)}</ul>
          <p className="mt-4 text-xs text-fg-muted">For foreign degrees, BCSP says the degree will be evaluated for U.S. equivalency and requests supporting documentation during the application process.</p>
        </section>

        <section className="sp-card p-6">
          <p className="sp-kicker">Application workflow</p>
          <h2 className="sp-title mt-2 text-3xl">What happens after you decide you qualify?</h2>
          <div className="mt-5 space-y-3">
            {["Create or sign in to your BCSP My Profile account.", "Select Applications and start the CSP application.", "Enter education, experience, qualifying credential, and required disclosures accurately.", "Submit the application and pay the applicable application fee.", "BCSP reviews the application. Eligibility is determined by BCSP, not SafePath.", "Once approved, purchase the examination authorization if it was not already purchased as part of your application/bundle.", "Use the Pearson VUE SSO link from your BCSP profile to select a test center, date, and available appointment time.", "Attend the appointment and complete the CSP exam. Official results are available when you submit the exam."] .map((item, i) => <div key={item} className="flex gap-4 rounded-xl border border-line p-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 font-mono text-xs text-accent">{i + 1}</span><p className="text-sm leading-6 text-fg-muted">{item}</p></div>)}
          </div>
        </section>

        <section className="sp-card p-6">
          <p className="sp-kicker">Fees and timing</p>
          <h2 className="sp-title mt-2 text-3xl">Current published figures</h2>
          <div className="mt-5 overflow-x-auto"><table className="w-full min-w-[620px] text-left text-sm"><thead><tr className="border-b border-line"><th className="px-3 py-3">Item</th><th className="px-3 py-3">Published amount</th><th className="px-3 py-3">Meaning</th></tr></thead><tbody>{[
            ["Application", "$160", "CSP application fee"],
            ["CSP exam", "$350", "Single examination"],
            ["Exam bundle", "$600", "Application/exam bundle option"],
            ["App + exam", "$494", "Application plus single exam combination"],
            ["App + exam bundle", "$744", "Application plus exam bundle combination"],
            ["Eligibility extension", "$100", "Extension fee when applicable"],
            ["Renewal", "$180", "Annual renewal fee"],
            ["Exam time", "5.5 hours", "Published CSP exam duration"],
          ].map(([a,b,c]) => <tr key={a} className="border-b border-line/70"><td className="px-3 py-3 font-medium">{a}</td><td className="px-3 py-3 tabular-nums">{b}</td><td className="px-3 py-3 text-fg-muted">{c}</td></tr>)}</tbody></table></div>
          <p className="mt-4 text-xs text-fg-muted">Fees can change. Verify the amount in BCSP My Profile / current BCSP fee schedule before payment.</p>
        </section>

        <section className="sp-card p-6">
          <p className="sp-kicker">Exam schedule</p>
          <h2 className="sp-title mt-2 text-3xl">There is not a single annual CSP exam calendar</h2>
          <p className="mt-3 max-w-3xl text-pretty leading-7 text-fg-muted">BCSP currently directs approved candidates to schedule through Pearson. The CSP is delivered by computer at Pearson test centers, and candidates can schedule an available appointment. That means SafePath should not invent a fixed “next CSP exam date.” Your actual date, time, and location depend on the seats available after your authorization.</p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-line p-5"><p className="font-serif text-xl">Eligibility first</p><p className="mt-2 text-sm text-fg-muted">Pearson says you must already have applied, been notified of eligibility, and paid the exam authorization fee before scheduling.</p></div>
            <div className="rounded-xl border border-line p-5"><p className="font-serif text-xl">One-year window</p><p className="mt-2 text-sm text-fg-muted">BCSP says eligible candidates have one year from application approval to take and pass the certification exam.</p></div>
            <div className="rounded-xl border border-line p-5"><p className="font-serif text-xl">Retake spacing</p><p className="mt-2 text-sm text-fg-muted">BCSP says an appointment must be at least six weeks from the candidate's last exam attempt when scheduling another attempt.</p></div>
          </div>
          <div className="mt-5 flex flex-wrap gap-3"><a className="sp-btn sp-btn-primary" href="https://www.pearsonvue.com/us/en/bcsp.html" target="_blank" rel="noreferrer">Open Pearson BCSP scheduling</a><a className="sp-btn sp-btn-ghost" href="https://www.bcsp.org/certified-safety-professional-csp" target="_blank" rel="noreferrer">BCSP CSP page</a></div>
        </section>

        <section className="sp-card p-6">
          <p className="sp-kicker">Locations</p>
          <h2 className="sp-title mt-2 text-3xl">Where can I take the CSP?</h2>
          <p className="mt-3 text-pretty leading-7 text-fg-muted">Pearson delivers BCSP exams at test centers around the world. Availability is program- and location-specific, so a center existing in a city does not by itself prove that a CSP seat is available there. Always check the live Pearson/BCSP scheduling flow after authorization.</p>
          <div className="mt-5 rounded-xl border border-line bg-surface-soft p-5">
            <h3 className="font-serif text-xl">Pakistan</h3>
            <p className="mt-2 text-sm leading-6 text-fg-muted">Pearson announced a company-owned Pearson Professional Center in Lahore in February 2025. The center is part of Pearson's high-stakes testing network, but SafePath cannot claim a CSP seat is available there until the BCSP/Pearson scheduling system shows it for your authorization.</p>
            <a className="mt-4 inline-flex sp-btn sp-btn-ghost" href="https://www.pearsonvue.com/us/en/about/news/2025/pearson-professional-center-opens-in-lahore-pakistan.html" target="_blank" rel="noreferrer">Read Pearson Lahore announcement</a>
          </div>
        </section>

        <section className="sp-card p-6">
          <p className="sp-kicker">Exam method</p>
          <h2 className="sp-title mt-2 text-3xl">What SafePath should prepare you to handle</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {["Computer-delivered exam", "Four answer choices", "One correct/best answer", "5.5-hour official duration", "On-screen TI-30XS calculator", "Whiteboard and marker", "Formula policy for mathematical questions", "No penalty for wrong answers", "Mixed difficulty and scenario judgment", "CSP-11 seven-domain weighting"].map((item) => <div key={item} className="rounded-xl border border-line p-4 text-sm">✓ {item}</div>)}
          </div>
          <p className="mt-4 text-xs text-fg-muted">SafePath's difficulty controls and mock lengths are training features. BCSP/Pearson do not publish a selectable “hardness percentage” that candidates can choose for the real exam.</p>
        </section>

        <section className="sp-card p-6">
          <p className="sp-kicker">Before you pay</p>
          <h2 className="sp-title mt-2 text-3xl">Candidate document checklist</h2>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {["Bachelor's degree certificate/transcript information", "Foreign-degree equivalency documentation if applicable", "Employment history with dates and job duties", "Evidence showing the safety/SH&E scope of your work", "Evidence supporting preventative professional-level duties", "BCSP Qualified Credential certificate/status", "Accurate legal name and identification details", "Any required disclosure information", "Payment method and current BCSP fee confirmation"].map((item) => <li key={item} className="rounded-xl border border-line px-4 py-3 text-sm text-fg-muted">□ {item}</li>)}
          </ul>
        </section>

        <div className="flex flex-wrap gap-3"><Link to="/eligibility" className="sp-btn sp-btn-primary">Check my CSP eligibility</Link><Link to="/plan" className="sp-btn sp-btn-ghost">Build my study plan</Link><Link to="/mock" className="sp-btn sp-btn-ghost">Take a CSP mock</Link></div>

        <footer className="sp-card p-5 text-xs leading-6 text-fg-muted">
          <strong className="text-fg">Official sources used:</strong> BCSP CSP credential page, BCSP Credentials At-A-Glance, and Pearson VUE's BCSP examination page. SafePath does not make eligibility decisions, schedule appointments, or represent itself as BCSP/examCORE/Pearson VUE.
        </footer>
      </div>
    </Shell>
  );
}
