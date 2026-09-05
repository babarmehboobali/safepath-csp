import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Shell } from "@/components/lesson/Shell";

export const Route = createFileRoute("/eligibility")({ component: Eligibility });

type Credential = "NEBOSH_IDIP" | "NEBOSH_NDIP" | "TSP" | "ASP" | "GSP" | "CIH" | "CMIOSH" | "CFIOSH" | "CRSP" | "OTHER";

function addYears(value: string, years: number) {
  if (!value) return null;
  const d = new Date(`${value}T00:00:00`);
  if (Number.isNaN(d.getTime())) return null;
  d.setFullYear(d.getFullYear() + years);
  return d;
}

function formatDate(value: Date | null) {
  if (!value) return "—";
  return value.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

function Eligibility() {
  const [degree, setDegree] = useState("yes");
  const [foreignDegree, setForeignDegree] = useState("yes");
  const [years, setYears] = useState("4");
  const [preventative, setPreventative] = useState("50");
  const [credential, setCredential] = useState<Credential>("NEBOSH_IDIP");
  const [neboshResultDate, setNeboshResultDate] = useState("");
  const [tspApplied, setTspApplied] = useState("not-yet");
  const [tspAppliedDate, setTspAppliedDate] = useState("");
  const [tspAwardedDate, setTspAwardedDate] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const tspDeadline = useMemo(() => addYears(neboshResultDate, 1), [neboshResultDate]);
  const tspStatus = useMemo(() => {
    if (credential !== "NEBOSH_IDIP" && credential !== "NEBOSH_NDIP") return null;
    if (!neboshResultDate) return "missing-date";
    const deadline = addYears(neboshResultDate, 1);
    if (tspApplied === "yes") return "applied";
    if (tspApplied === "no") return "missed";
    if (deadline && new Date() > deadline) return "late";
    return "action";
  }, [credential, neboshResultDate, tspApplied]);

  const yearsOk = Number(years) >= 4;
  const preventativeOk = Number(preventative) >= 50;
  const credentialOk = credential !== "OTHER";
  const degreeOk = degree === "yes";
  const preliminary = degreeOk && yearsOk && preventativeOk && credentialOk;

  return (
    <Shell>
      <div className="sp-wrap max-w-5xl space-y-7">
        <header>
          <p className="sp-kicker">CSP candidate center · eligibility</p>
          <h1 className="sp-title mt-2 text-4xl sm:text-5xl">Deep CSP eligibility pathway check</h1>
          <p className="mt-4 max-w-3xl text-pretty text-lg leading-8 text-fg-muted">
            This checker separates the normal CSP qualified-credential route from the Transitional Safety Practitioner (TSP) route. It is a planning aid only; BCSP makes the final eligibility decision.
          </p>
        </header>

        <div className="grid gap-3 sm:grid-cols-3">
          <Link to="/csp-guide" className="sp-card p-5 no-underline"><p className="font-serif text-xl">CSP application guide</p><p className="mt-2 text-sm text-fg-muted">Requirements, documents, fees and process.</p></Link>
          <Link to="/exam-booking" className="sp-card p-5 no-underline"><p className="font-serif text-xl">Exam booking</p><p className="mt-2 text-sm text-fg-muted">BCSP authorization → Pearson scheduling.</p></Link>
          <a href="https://www.bcsp.org/transitional-safety-practitioner-tsp" target="_blank" rel="noreferrer" className="sp-card p-5 no-underline"><p className="font-serif text-xl">Official TSP rules</p><p className="mt-2 text-sm text-fg-muted">Open the current BCSP TSP page.</p></a>
        </div>

        <section className="sp-card p-6">
          <p className="sp-kicker">1 · Core CSP requirements</p>
          <h2 className="sp-title mt-2 text-3xl">Enter your actual situation</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <label className="block text-sm">Do you have at least a bachelor's degree?
              <select className="sp-field mt-1" value={degree} onChange={(e) => setDegree(e.target.value)}><option value="yes">Yes</option><option value="no">No</option></select>
            </label>
            <label className="block text-sm">Was the degree earned outside the United States?
              <select className="sp-field mt-1" value={foreignDegree} onChange={(e) => setForeignDegree(e.target.value)}><option value="yes">Yes</option><option value="no">No</option></select>
            </label>
            <label className="block text-sm">SH&amp;E professional experience (years)
              <input className="sp-field mt-1" type="number" min="0" step="0.1" value={years} onChange={(e) => setYears(e.target.value)} />
            </label>
            <label className="block text-sm">Approximate % of qualifying work that was preventative/professional-level
              <input className="sp-field mt-1" type="number" min="0" max="100" step="1" value={preventative} onChange={(e) => setPreventative(e.target.value)} />
            </label>
          </div>
          <div className="mt-5 rounded-xl border border-line bg-surface-soft p-4 text-sm leading-6 text-fg-muted">
            <strong className="text-fg">Foreign degree:</strong> BCSP says non-U.S. degrees are evaluated for U.S. equivalency during the application process. This is separate from the NEBOSH/TSP pathway and does not mean that a NEBOSH diploma itself needs a U.S. degree equivalency review.
          </div>
        </section>

        <section className="sp-card p-6">
          <p className="sp-kicker">2 · Qualified credential pathway</p>
          <h2 className="sp-title mt-2 text-3xl">Which credential are you using for CSP?</h2>
          <select className="sp-field mt-5" value={credential} onChange={(e) => setCredential(e.target.value as Credential)}>
            <option value="NEBOSH_IDIP">NEBOSH International Diploma (IDip)</option>
            <option value="NEBOSH_NDIP">NEBOSH National Diploma</option>
            <option value="TSP">TSP — Transitional Safety Practitioner</option>
            <option value="ASP">ASP — Associate Safety Professional</option>
            <option value="GSP">GSP — Graduate Safety Practitioner</option>
            <option value="CIH">CIH — Certified Industrial Hygienist</option>
            <option value="CMIOSH">CMIOSH</option>
            <option value="CFIOSH">CFIOSH</option>
            <option value="CRSP">CRSP</option>
            <option value="OTHER">Other / not listed</option>
          </select>

          {(credential === "NEBOSH_IDIP" || credential === "NEBOSH_NDIP") && (
            <div className="mt-5 space-y-5 rounded-2xl border-2 border-accent/30 bg-accent/5 p-5">
              <div>
                <h3 className="font-serif text-2xl">NEBOSH → TSP pathway</h3>
                <p className="mt-2 text-sm leading-6 text-fg-muted">
                  BCSP's published QEP list states that holders of the NEBOSH National or International Diploma can apply for TSP within one year of achieving the credential. The current BCSP TSP page says QEP holders must apply within the program's applicable dates. Verify the live QEP list before relying on a deadline.
                </p>
              </div>
              <label className="block text-sm">When was your NEBOSH result/credential awarded?
                <input className="sp-field mt-1" type="date" value={neboshResultDate} onChange={(e) => setNeboshResultDate(e.target.value)} />
              </label>
              {neboshResultDate && <div className="rounded-xl border border-line bg-surface p-4 text-sm"><strong>One-year TSP application target:</strong> {formatDate(tspDeadline)}<br /><span className="text-fg-muted">This is a planning calculation from the published one-year rule; BCSP's live QEP applicability rules control.</span></div>}
              <label className="block text-sm">Have you applied for TSP?
                <select className="sp-field mt-1" value={tspApplied} onChange={(e) => setTspApplied(e.target.value)}><option value="not-yet">Not yet</option><option value="yes">Yes</option><option value="no">No / I decided not to</option></select>
              </label>
              {tspApplied === "yes" && <label className="block text-sm">TSP application date
                <input className="sp-field mt-1" type="date" value={tspAppliedDate} onChange={(e) => setTspAppliedDate(e.target.value)} />
              </label>}
              <label className="block text-sm">If awarded, TSP award date (optional)
                <input className="sp-field mt-1" type="date" value={tspAwardedDate} onChange={(e) => setTspAwardedDate(e.target.value)} />
              </label>
              {tspStatus === "action" && <div className="rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-950">Action: if you intend to use the TSP route, check the current BCSP QEP list and submit the TSP application within the applicable period.</div>}
              {tspStatus === "late" && <div className="rounded-xl border border-red-300 bg-red-50 p-4 text-sm text-red-900">The one-year planning date has passed. Do not assume you are still eligible for TSP; contact BCSP and verify the current QEP applicable-date rule.</div>}
              {tspStatus === "applied" && <div className="rounded-xl border border-green-300 bg-green-50 p-4 text-sm text-green-950">TSP application recorded. Keep your BCSP confirmation and award date. TSP holders must apply for and pass the CSP examination within six years of the TSP award date.</div>}
              <div className="flex flex-wrap gap-3"><a className="sp-btn sp-btn-primary" href="https://www.bcsp.org/transitional-safety-practitioner-tsp" target="_blank" rel="noreferrer">BCSP TSP page</a><a className="sp-btn sp-btn-ghost" href="https://www.bcsp.org/wp-content/uploads/2022/07/BCSP-TSP-QEP-List.pdf" target="_blank" rel="noreferrer">Open QEP list</a></div>
            </div>
          )}

          {credential === "TSP" && (
            <div className="mt-5 rounded-xl border border-line bg-surface-soft p-5 text-sm leading-6 text-fg-muted">
              <strong className="text-fg">TSP route:</strong> TSP satisfies the CSP qualified-credential requirement. BCSP states that TSP holders must apply for and pass the CSP examination within six years of the date the TSP is awarded. Enter your TSP award date in the dedicated tracking section below if you already hold it.
            </div>
          )}
        </section>

        <section className="sp-card p-6">
          <p className="sp-kicker">3 · Preliminary result</p>
          <h2 className="sp-title mt-2 text-3xl">Your pathway summary</h2>
          <button type="button" className="mt-5 sp-btn sp-btn-primary" onClick={() => setSubmitted(true)}>Run deep check</button>
          {submitted && (
            <div className="mt-5 space-y-4">
              <div className={`rounded-2xl border p-5 ${preliminary ? "border-green-300 bg-green-50" : "border-amber-300 bg-amber-50"}`}>
                <h3 className="font-serif text-2xl">{preliminary ? "Preliminary match — verify with BCSP" : "Requirements appear incomplete"}</h3>
                <ul className="mt-3 space-y-2 text-sm leading-6">
                  <li>{degreeOk ? "✓" : "✗"} Bachelor's degree requirement</li>
                  <li>{yearsOk ? "✓" : "✗"} At least 4 years SH&amp;E experience</li>
                  <li>{preventativeOk ? "✓" : "✗"} At least 50% preventative/professional-level work</li>
                  <li>{credentialOk ? "✓" : "✗"} A BCSP-listed qualified credential/pathway</li>
                  <li>{foreignDegree === "yes" ? "ℹ" : "✓"} {foreignDegree === "yes" ? "Foreign-degree U.S.-equivalency review will be part of the BCSP process" : "No foreign-degree equivalency flag entered"}</li>
                </ul>
              </div>
              {credential.startsWith("NEBOSH") && <div className="rounded-xl border border-accent/30 bg-accent/5 p-5 text-sm leading-6"><strong>Important NEBOSH point:</strong> BCSP's current CSP page lists the NEBOSH National or International Diploma itself as a qualified credential for CSP. The TSP route is an additional pathway for QEP graduates; it is not automatically a mandatory step before CSP when BCSP accepts the diploma directly. If you want TSP, track the one-year application window separately.</div>}
            </div>
          )}
        </section>

        <section className="sp-card p-6">
          <p className="sp-kicker">4 · Exam booking</p>
          <h2 className="sp-title mt-2 text-3xl">Why you cannot book Pearson directly yet</h2>
          <p className="mt-3 max-w-3xl text-pretty leading-7 text-fg-muted">Pearson's BCSP page says you must first apply through BCSP, receive eligibility notification, and pay the examination authorization fee. Scheduling then happens through the Pearson SSO link from your BCSP My Profile. SafePath cannot create or reserve a Pearson appointment.</p>
          <div className="mt-5 flex flex-wrap gap-3"><Link to="/exam-booking" className="sp-btn sp-btn-primary">Open step-by-step booking guide</Link><a className="sp-btn sp-btn-ghost" href="https://www.bcsp.org/certified-safety-professional-csp" target="_blank" rel="noreferrer">Open BCSP CSP</a><a className="sp-btn sp-btn-ghost" href="https://www.pearsonvue.com/us/en/bcsp.html" target="_blank" rel="noreferrer">Open Pearson BCSP</a></div>
        </section>

        <footer className="sp-card p-5 text-xs leading-6 text-fg-muted">
          <strong className="text-fg">Important:</strong> This tool is not an eligibility ruling. BCSP's current rules, QEP/QAP applicable dates, application review, and credential decisions control. SafePath uses official-source information checked 5 September 2026 and should be rechecked before payment or submission.
        </footer>
      </div>
    </Shell>
  );
}
