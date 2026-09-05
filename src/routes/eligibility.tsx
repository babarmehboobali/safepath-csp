import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Shell } from "@/components/lesson/Shell";

export const Route = createFileRoute("/eligibility")({ component: Eligibility });

type Credential =
  | "ASP"
  | "GSP"
  | "TSP"
  | "CIH"
  | "CMIOSH"
  | "CFIOSH"
  | "CRSP"
  | "ACRC"
  | "CSE"
  | "ITC-ILO"
  | "NEBOSH"
  | "SISO"
  | "India Industrial Safety"
  | "Other";

const CREDENTIALS: Credential[] = [
  "ASP",
  "GSP",
  "TSP",
  "CIH",
  "CMIOSH",
  "CFIOSH",
  "CRSP",
  "ACRC",
  "CSE",
  "ITC-ILO",
  "NEBOSH",
  "SISO",
  "India Industrial Safety",
  "Other",
];

function Eligibility() {
  const [degree, setDegree] = useState<"yes" | "no">("yes");
  const [foreignDegree, setForeignDegree] = useState<"yes" | "no">("yes");
  const [years, setYears] = useState("4");
  const [safetyPct, setSafetyPct] = useState("75");
  const [preventive, setPreventive] = useState<"yes" | "no" | "unsure">("yes");
  const [breadth, setBreadth] = useState<"yes" | "no" | "unsure">("yes");
  const [credential, setCredential] = useState<Credential>("NEBOSH");
  const [credentialCurrent, setCredentialCurrent] = useState<"yes" | "no" | "unsure">("yes");
  const [disclosure, setDisclosure] = useState<"no" | "yes" | "unsure">("no");
  const [checked, setChecked] = useState(false);

  const result = useMemo(() => {
    const y = Number(years);
    const pct = Number(safetyPct);
    const issues: string[] = [];
    const warnings: string[] = [];

    if (degree !== "yes") issues.push("A bachelor's degree (minimum) is required.");
    if (y < 4) issues.push("You currently report less than 4 years of SH&E experience.");
    if (pct < 50) issues.push("You currently report less than 50% preventative, professional-level safety work.");
    if (preventive === "no") issues.push("BCSP requires at least 50% of the qualifying experience to be preventative, professional-level work.");
    if (breadth === "no") issues.push("Your work history may not yet demonstrate the required breadth and depth of safety duties.");
    if (credential === "Other") issues.push("Your selected credential is not confirmed by this checker as a BCSP Qualified Credential.");
    if (credentialCurrent === "no") issues.push("Confirm the credential's current status before relying on it for a CSP application.");

    if (foreignDegree === "yes") warnings.push("BCSP says a degree from outside the United States will be evaluated for U.S. equivalency; keep the required evaluation documents ready.");
    if (preventive === "unsure") warnings.push("Confirm that at least half of your qualifying duties are preventative and professional-level.");
    if (breadth === "unsure") warnings.push("Review your job descriptions and evidence for breadth and depth of safety duties.");
    if (credentialCurrent === "unsure") warnings.push("Confirm the credential is current/acceptable before submitting the application.");
    if (disclosure === "yes") warnings.push("BCSP separately reviews disclosed criminal convictions or professional-license/credential actions and may deny an application.");
    if (disclosure === "unsure") warnings.push("If applicable, read BCSP's disclosure policy and answer the application questions accurately.");

    const hardFail = issues.length > 0;
    const needsReview = warnings.length > 0;
    const status = hardFail ? "not-ready" : needsReview ? "review" : "strong";

    return { issues, warnings, status };
  }, [breadth, credential, credentialCurrent, degree, disclosure, foreignDegree, preventive, safetyPct, years]);

  return (
    <Shell>
      <div className="sp-wrap max-w-4xl space-y-7">
        <div>
          <p className="sp-kicker">CSP application readiness</p>
          <h1 className="sp-title mt-2 text-4xl">Deep CSP eligibility checker</h1>
          <p className="mt-3 max-w-3xl text-pretty leading-7 text-fg-muted">
            This is a preparation tool, not an eligibility ruling. It checks the main published CSP requirements against your answers and shows exactly what you should verify before paying an application fee.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="sp-card p-5"><p className="font-serif text-xl">Education</p><p className="mt-2 text-sm text-fg-muted">Bachelor's degree minimum. Foreign degrees require the BCSP equivalency process.</p></div>
          <div className="sp-card p-5"><p className="font-serif text-xl">Experience</p><p className="mt-2 text-sm text-fg-muted">4 years SH&E experience with at least 50% preventative, professional-level work and breadth/depth.</p></div>
          <div className="sp-card p-5"><p className="font-serif text-xl">Credential</p><p className="mt-2 text-sm text-fg-muted">A BCSP Qualified Credential is required, including NEBOSH National or International Diploma.</p></div>
        </div>

        <form
          className="sp-card space-y-6 p-6"
          onSubmit={(e) => {
            e.preventDefault();
            setChecked(true);
          }}
        >
          <div>
            <p className="sp-kicker">1 · Education</p>
            <label className="mt-2 block text-sm">Do you have at least a bachelor's degree?</label>
            <select className="sp-field mt-1" value={degree} onChange={(e) => setDegree(e.target.value as "yes" | "no")}>
              <option value="yes">Yes</option><option value="no">No</option>
            </select>
            <label className="mt-3 block text-sm">Was the degree awarded outside the United States?</label>
            <select className="sp-field mt-1" value={foreignDegree} onChange={(e) => setForeignDegree(e.target.value as "yes" | "no")}>
              <option value="yes">Yes / I need equivalency guidance</option><option value="no">No</option>
            </select>
          </div>

          <div>
            <p className="sp-kicker">2 · Professional experience</p>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="block text-sm">Years of SH&E experience<input className="sp-field mt-1" inputMode="decimal" value={years} onChange={(e) => setYears(e.target.value)} /></label>
              <label className="block text-sm">Approx. % of work that is safety/SH&E<input className="sp-field mt-1" inputMode="numeric" value={safetyPct} onChange={(e) => setSafetyPct(e.target.value)} /></label>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="mt-3 block text-sm">Is at least 50% preventative, professional-level work?<select className="sp-field mt-1" value={preventive} onChange={(e) => setPreventive(e.target.value as typeof preventive)}><option value="yes">Yes</option><option value="no">No</option><option value="unsure">Not sure</option></select></label>
              <label className="mt-3 block text-sm">Does your experience show breadth and depth of safety duties?<select className="sp-field mt-1" value={breadth} onChange={(e) => setBreadth(e.target.value as typeof breadth)}><option value="yes">Yes</option><option value="no">No</option><option value="unsure">Not sure</option></select></label>
            </div>
          </div>

          <div>
            <p className="sp-kicker">3 · Qualifying credential</p>
            <label className="block text-sm">Select your closest BCSP Qualified Credential<select className="sp-field mt-1" value={credential} onChange={(e) => setCredential(e.target.value as Credential)}>{CREDENTIALS.map((item) => <option key={item}>{item}</option>)}</select></label>
            <label className="mt-3 block text-sm">Is the credential current/acceptable for your application?<select className="sp-field mt-1" value={credentialCurrent} onChange={(e) => setCredentialCurrent(e.target.value as typeof credentialCurrent)}><option value="yes">Yes</option><option value="no">No / expired</option><option value="unsure">Not sure</option></select></label>
          </div>

          <div>
            <p className="sp-kicker">4 · Disclosure review</p>
            <label className="block text-sm">Do you have a criminal conviction or professional-license/credential suspension, revocation, or probation that may need disclosure?<select className="sp-field mt-1" value={disclosure} onChange={(e) => setDisclosure(e.target.value as typeof disclosure)}><option value="no">No</option><option value="yes">Yes</option><option value="unsure">Not sure</option></select></label>
          </div>

          <button type="submit" className="sp-btn sp-btn-primary">Run deep eligibility check</button>
        </form>

        {checked ? (
          <section className="sp-card p-6" aria-live="polite">
            <p className="sp-kicker">Result</p>
            <h2 className="sp-title mt-2 text-3xl">
              {result.status === "strong" ? "Strong preliminary match" : result.status === "review" ? "Likely in range — verify these items" : "Not ready based on the answers entered"}
            </h2>
            {result.issues.length ? <div className="mt-5"><h3 className="font-serif text-xl">Requirements to fix or verify</h3><ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-fg-muted">{result.issues.map((item) => <li key={item}>{item}</li>)}</ul></div> : null}
            {result.warnings.length ? <div className="mt-5"><h3 className="font-serif text-xl">Important review points</h3><ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-fg-muted">{result.warnings.map((item) => <li key={item}>{item}</li>)}</ul></div> : null}
            <div className="mt-5 rounded-xl border border-line bg-surface-soft p-4 text-sm text-fg-muted">
              <strong className="text-fg">Final authority:</strong> BCSP reviews the submitted application and payment and makes the eligibility decision. Do not treat this calculator as an approval.
            </div>
          </section>
        ) : null}

        <section className="sp-card p-6">
          <p className="sp-kicker">Application path</p>
          <div className="mt-4 grid gap-3 md:grid-cols-5">
            {["Check requirements", "Create BCSP profile", "Submit application + fee", "Receive eligibility", "Purchase & schedule exam"].map((step, i) => <div key={step} className="rounded-xl border border-line p-4"><span className="font-mono text-xs text-accent">0{i + 1}</span><p className="mt-2 font-serif">{step}</p></div>)}
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <a className="sp-btn sp-btn-primary" href="https://certification.bcsp.org/" target="_blank" rel="noreferrer">Open BCSP application</a>
            <Link to="/csp-guide" className="sp-btn sp-btn-ghost">Read the CSP application & exam guide</Link>
          </div>
        </section>

        <Link to="/assess" className="sp-btn sp-btn-ghost">Continue to self-assessment</Link>
      </div>
    </Shell>
  );
}
