import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Shell } from "@/components/lesson/Shell";

export const Route = createFileRoute("/eligibility")({ component: Eligibility });

function Eligibility() {
  const [years, setYears] = useState("4");
  const [cred, setCred] = useState("ASP");
  const [result, setResult] = useState<string | null>(null);

  return (
    <Shell>
      <div className="sp-wrap max-w-2xl space-y-6">
        <div>
          <p className="sp-kicker">Eligibility check</p>
          <h1 className="sp-title mt-2 text-4xl">A planning screen, not a BCSP ruling.</h1>
          <p className="mt-3 text-fg-muted">
            BCSP decides eligibility. This page only helps you gather the story you will put on an application.
          </p>
        </div>
        <form
          className="sp-card space-y-3 p-6"
          onSubmit={(e) => {
            e.preventDefault();
            const y = Number(years);
            if (cred === "GSP" || cred === "ASP" || y >= 4) {
              setResult("You may be in range to start an application. Confirm current BCSP rules before you pay a fee.");
            } else {
              setResult("You may still be building hours. Recheck BCSP pathways rather than treating this screen as a decision.");
            }
          }}
        >
          <label className="block text-sm">
            Years of professional safety practice
            <input className="sp-field mt-1" value={years} onChange={(e) => setYears(e.target.value)} />
          </label>
          <label className="block text-sm">
            Closest credential
            <select className="sp-field mt-1" value={cred} onChange={(e) => setCred(e.target.value)}>
              <option>ASP</option>
              <option>GSP</option>
              <option>TSP</option>
              <option>CIH</option>
              <option>Other</option>
            </select>
          </label>
          <button type="submit" className="sp-btn sp-btn-primary">Review pathway</button>
        </form>
        {result ? <p className="text-fg-muted">{result}</p> : null}
        <Link to="/assess" className="sp-btn sp-btn-ghost">Sit a self-assessment</Link>
      </div>
    </Shell>
  );
}
