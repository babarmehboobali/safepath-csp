import { createFileRoute, Link } from "@tanstack/react-router";
import { Clip } from "@/components/lesson/Clip";
import { Shell } from "@/components/lesson/Shell";
import { CSP_DOMAIN_NAMES, CSP_DOMAIN_WEIGHTS, DOMAIN_SHORT } from "@/lib/safepath/domains";

export const Route = createFileRoute("/")({ component: Home });

const FEATURED = [
  { id: "2", still: "/lessons/hierarchy.jpg", video: "/lessons/hierarchy.mp4", title: "Hierarchy of Controls", line: "Highest remaining row wins." },
  { id: "4", still: "/lessons/electrical.jpg", video: "/lessons/electrical.mp4", title: "Electrical", line: "Treat it live until try-out." },
  { id: "6", still: "/lessons/falls.jpg", video: "/lessons/falls.mp4", title: "Falls", line: "Anchor, connector, harness." },
  { id: "5", still: "/lessons/loto.jpg", video: "/lessons/loto.mp4", title: "LOTO", line: "Isolate, lock, then try-out." },
] as const;

const MORE = [
  { id: "7", still: "/lessons/excavation.jpg", title: "Excavation", line: "Slope, shore, or shield." },
  { id: "9", still: "/lessons/confined.jpg", title: "Confined space", line: "Atmosphere before entry." },
  { id: "51", still: "/lessons/fire.jpg", title: "Fire protection", line: "Detect, suppress, egress." },
  { id: "48", still: "/lessons/ics.jpg", title: "ICS", line: "One commander. Then span." },
] as const;

const GET = [
  { title: "130 visual classes", body: "Compact 47, Recommended 78, or Maximum 130. Every class has a field picture, a decision rule, and a drill." },
  { title: "Self-assessment", body: "50 or 100 blueprint-weighted items, then a seven-domain readiness report." },
  { title: "Mock exam", body: "50 / 100 / 200 CBT sittings. One item, flag, review, calculator. Clock does not pause." },
  { title: "Honest study", body: "Independent of BCSP and Pearson VUE. No pass guarantee. The desks are here. The hours are yours." },
];

const STEPS = [
  { n: "01", title: "Scene", body: "A plant picture or motion clip plus the field hook — manufacturing, oil and gas, or construction." },
  { n: "02", title: "Rule", body: "The decision sentence and contrast pairs. Looks-like versus actually." },
  { n: "03", title: "Model", body: "A still plus a diagram: pyramid, isolation strip, ICS span, fire tetrahedron, capture, noise, lift." },
  { n: "04", title: "Drill", body: "One stem. Four options. Explanation, field move, and keystrokes when the item is math." },
];

const DESKS = [
  { to: "/plan", title: "Study plan", line: "Dates, domain order, week map." },
  { to: "/assess", title: "Self-assessment", line: "50 or 100 items. Domain report." },
  { to: "/mock", title: "Mock exam", line: "50 / 100 / 200. CBT layout." },
  { to: "/exam", title: "Short CBT", line: "25 items. Same chrome." },
  { to: "/warmup", title: "Warm-up", line: "Eight items. No clock." },
  { to: "/games", title: "Games", line: "Match, buckets, pyramid, snap, signs." },
  { to: "/cards", title: "Memory cards", line: "Front / back from every class." },
  { to: "/bank", title: "Question bank", line: "Search original stems." },
  { to: "/errors", title: "Error-code gym", line: "HIER, UNIT, FORM, STEM." },
  { to: "/challenge", title: "Challenge", line: "Expert items only." },
  { to: "/dashboard", title: "Dashboard", line: "Seat, streak, next class, misses." },
  { to: "/drill", title: "Domain drill", line: "Eight items from one domain." },
  { to: "/domains", title: "Domains", line: "Seven CSP-11 weights and class counts." },
  { to: "/learn", title: "Learn index", line: "Open any class from a grid." },
  { to: "/sessions", title: "Sessions", line: "Every stored sitting." },
  { to: "/register", title: "Register", line: "Create a seat. Agreement required." },
  { to: "/formulas", title: "Formula desk", line: "Named expressions and pitfalls." },
  { to: "/math", title: "Math desk", line: "TRIR, TWA, and Q=VA solvers." },
  { to: "/studio", title: "Learning", line: "Learning studio. 130 visual classes." },
  { to: "/library", title: "Study library", line: "Core plus deep labs." },
  { to: "/topics", title: "Topic map", line: "Every class under its domain." },
  { to: "/blueprint", title: "Blueprint", line: "Seven domains. Public weights." },
  { to: "/calculator", title: "Calculator", line: "DEG pad. Not Pearson software." },
  { to: "/ergo", title: "Ergonomics lab", line: "Teaching posture score, then the control." },
  { to: "/tox", title: "Toxicology lab", line: "PEL / TLV / TWA contrasts plus items." },
  { to: "/exam-day", title: "Exam day", line: "Clock, whiteboard, closest value." },
  { to: "/eligibility", title: "Eligibility", line: "Planning screen, not a ruling." },
  { to: "/certificate", title: "Certificate", line: "Study record, not a credential." },
  { to: "/flags", title: "Sittings log", line: "Scores stored on this device." },
  { to: "/onboarding", title: "Onboarding", line: "Track and field skin." },
  { to: "/about", title: "Honest study", line: "Independent. No pass promise." },
] as const;

function Home() {
  return (
    <Shell>
      <div className="space-y-16 sm:space-y-20">
        <section className="sp-wrap grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:items-center">
          <div className="relative z-10 min-w-0">
            <p className="sp-kicker">SafePath CSP</p>
            <h1 className="sp-title mt-3 max-w-xl text-4xl sm:text-5xl">See the control before you pick the answer.</h1>
            <p className="mt-4 max-w-xl text-pretty text-fg-muted">
              Visual lessons, self-assessment, and a mock exam in CBT layout. Blueprint weights 25 / 25 / 15 / 9 / 6 / 10 / 10.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/studio" className="sp-btn sp-btn-primary">Learning</Link>
              <Link to="/games" className="sp-btn sp-btn-ghost">Games</Link>
              <Link to="/assess" className="sp-btn sp-btn-ghost">Self-assessment</Link>
              <Link to="/mock" className="sp-btn sp-btn-ghost">Mock exam</Link>
            </div>
          </div>
          <div className="sp-card min-w-0 overflow-hidden">
            <Clip src="/lessons/hierarchy.mp4" poster="/lessons/hierarchy.jpg" title="preview" />
            <div className="p-5">
              <p className="sp-kicker">Class 2 · D1.01</p>
              <p className="mt-1 font-serif text-2xl">Hierarchy of Controls</p>
              <p className="mt-2 text-sm text-fg-muted">A polished permit is still administrative. Highest remaining row wins.</p>
            </div>
          </div>
        </section>

        <section className="sp-wrap space-y-4">
          <div>
            <p className="sp-kicker">Domain signs</p>
            <h2 className="sp-title mt-2 text-3xl">Seven zones. Tap a sign.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {([1, 2, 3, 4, 5, 6, 7] as const).map((d) => (
              <Link key={d} to="/studio" className="game-sign p-4 no-underline">
                <p className="font-mono text-xs tracking-[0.16em] text-[#f0d24a]">D{d} · {CSP_DOMAIN_WEIGHTS[d]}%</p>
                <p className="mt-2 font-serif text-xl">{DOMAIN_SHORT[d]}</p>
                <p className="mt-1 text-sm text-[#d7e6d4]">{CSP_DOMAIN_NAMES[d]}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="sp-wrap grid gap-6 lg:grid-cols-2">
          <div>
            <h2 className="sp-title text-3xl">CSP exam prep built around the control.</h2>
            <p className="mt-3 text-pretty leading-7 text-fg-muted">
              SafePath CSP is independent Certified Safety Professional study software for CSP-11. Lessons walk hierarchy of
              controls, LOTO, industrial hygiene formulas, ISO 45001, and emergency management — then you sit a CBT-style
              mock exam. Not BCSP. Not Pearson VUE. No pass promise.
            </p>
          </div>
          <div>
            <h2 className="sp-title text-3xl">What you can do here</h2>
            <ul className="mt-3 grid gap-2 text-fg-muted">
              <li>Study Compact, Recommended, or Deep tracks across all seven exam domains.</li>
              <li>Run a self-assessment and a timed mock with flag, review, and a formula drawer.</li>
              <li>Drill noise dose, ventilation Q=VA, TRIR, and other high-miss calculations.</li>
            </ul>
          </div>
        </section>

        <section className="sp-wrap space-y-4">
          <h2 className="sp-title text-3xl">CSP study questions</h2>
          <dl className="grid gap-4">
            <div className="sp-card p-5">
              <dt className="font-serif text-xl">Is this official BCSP or examCORE?</dt>
              <dd className="mt-2 text-sm text-fg-muted">No. SafePath is independent study. Completing a class does not certify you.</dd>
            </div>
            <div className="sp-card p-5">
              <dt className="font-serif text-xl">Does it cover all CSP-11 domains?</dt>
              <dd className="mt-2 text-sm text-fg-muted">Yes. Safety principles, program management, risk, emergency, environment, occupational health, and training — at the published weights.</dd>
            </div>
            <div className="sp-card p-5">
              <dt className="font-serif text-xl">How do I start CSP exam prep here?</dt>
              <dd className="mt-2 text-sm text-fg-muted">Open Learning, pick Compact or Recommended, then sit a self-assessment. Suggestions go to suggestions@safepath-csp.com.</dd>
            </div>
          </dl>
        </section>

        <section id="desks" className="sp-wrap scroll-mt-24 space-y-6">
          <div>
            <p className="sp-kicker">All desks</p>
            <h2 className="sp-title mt-2 text-3xl sm:text-4xl">Self-assessment, mock exam, and the rest of the stack.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {DESKS.map((row) => (
              <Link key={row.to} to={row.to} className="sp-card p-5 text-inherit no-underline">
                <p className="font-serif text-xl">{row.title}</p>
                <p className="mt-2 text-sm text-fg-muted">{row.line}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="sp-wrap grid gap-3 sm:grid-cols-3">
          {[
            ["130", "classes across seven domains"],
            ["200", "item full mock in CBT chrome"],
            ["7", "domain scores on every diagnostic"],
          ].map(([stat, label]) => (
            <div key={label} className="sp-card px-5 py-4">
              <p className="font-serif text-3xl tabular-nums">{stat}</p>
              <p className="mt-1 text-sm text-fg-muted">{label}</p>
            </div>
          ))}
        </section>

        <section id="what-you-get" className="sp-wrap scroll-mt-24 space-y-6">
          <div>
            <p className="sp-kicker">What you get</p>
            <h2 className="sp-title mt-2 text-3xl sm:text-4xl">A study stack, not a question dump.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {GET.map((card) => (
              <article key={card.title} className="sp-card p-5">
                <h3 className="font-serif text-xl">{card.title}</h3>
                <p className="mt-2 text-sm text-pretty text-fg-muted">{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="how-class" className="sp-wrap scroll-mt-24 space-y-6">
          <div>
            <p className="sp-kicker">How a class works</p>
            <h2 className="sp-title mt-2 text-3xl sm:text-4xl">Same rhythm every module.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step) => (
              <article key={step.n} className="sp-card p-5">
                <p className="font-mono text-xs text-accent">{step.n}</p>
                <h3 className="mt-2 font-serif text-xl">{step.title}</h3>
                <p className="mt-2 text-sm text-pretty text-fg-muted">{step.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="lessons" className="sp-wrap scroll-mt-24 space-y-6">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="sp-kicker">Open a picture</p>
              <h2 className="sp-title mt-2 text-3xl sm:text-4xl">Start with a control you can see.</h2>
            </div>
            <Link to="/studio" className="sp-btn sp-btn-ghost">All 130 classes</Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {FEATURED.map((row) => (
              <Link
                key={row.id}
                to="/learn/$id"
                params={{ id: row.id }}
                className="sp-card overflow-hidden text-inherit no-underline"
              >
                <Clip src={row.video} poster={row.still} title={row.title} />
                <div className="p-5">
                  <p className="font-mono text-xs text-fg-subtle">Class {row.id}</p>
                  <p className="mt-1 font-serif text-2xl">{row.title}</p>
                  <p className="mt-2 text-sm text-fg-muted">{row.line}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {MORE.map((row) => (
              <Link
                key={row.id}
                to="/learn/$id"
                params={{ id: row.id }}
                className="sp-card overflow-hidden text-inherit no-underline"
              >
                <img src={row.still} alt="" className="aspect-video w-full object-cover" />
                <div className="p-4">
                  <p className="font-serif text-lg">{row.title}</p>
                  <p className="mt-1 text-sm text-fg-muted">{row.line}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section id="blueprint" className="sp-wrap scroll-mt-24 space-y-6">
          <div>
            <p className="sp-kicker">CSP-11 blueprint</p>
            <h2 className="sp-title mt-2 text-3xl sm:text-4xl">Seven domains. Public weights.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {([1, 2, 3, 4, 5, 6, 7] as const).map((d) => (
              <Link key={d} to="/blueprint" className="sp-card p-4 text-inherit no-underline">
                <p className="font-mono text-xs text-accent">
                  D{d} · {CSP_DOMAIN_WEIGHTS[d]}%
                </p>
                <p className="mt-2 font-medium">{DOMAIN_SHORT[d]}</p>
                <p className="mt-1 text-sm text-fg-muted">{CSP_DOMAIN_NAMES[d]}</p>
              </Link>
            ))}
          </div>
        </section>

        <section id="tracks" className="sp-wrap scroll-mt-24">
          <div className="sp-card grid gap-0 overflow-hidden lg:grid-cols-3">
            {[
              ["Compact", "47 classes", "Core applied safety and the first pass through each domain."],
              ["Recommended", "78 classes", "Full core catalog before maximum labs and deep engineering."],
              ["Maximum", "130 classes", "Deep labs: hierarchy discrimination, LOTO mastery, fire hydraulics, RNLE."],
            ].map(([name, count, body]) => (
              <div key={name} className="border-b border-border p-6 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0">
                <p className="sp-kicker">{name}</p>
                <p className="mt-2 font-serif text-3xl">{count}</p>
                <p className="mt-2 text-sm text-fg-muted">{body}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Shell>
  );
}
