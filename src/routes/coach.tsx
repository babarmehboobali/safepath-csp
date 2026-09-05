import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Shell } from "@/components/lesson/Shell";
import { QuestionSet } from "@/components/lesson/QuestionSet";
import { CATALOG } from "@/lib/safepath/catalog";
import { pickByDomain, pickWeighted } from "@/lib/safepath/bank";
import { DOMAIN_SHORT } from "@/lib/safepath/domains";
import { readSession } from "@/lib/safepath/session";
import { DOMAIN_THESIS } from "@/lib/safepath/topic";

export const Route = createFileRoute("/coach")({ component: Coach });

const RIGOR = [
  "Name the formula and the units before you touch the pad.",
  "Keep intermediate values unrounded. Round only the listed choice.",
  "DEG unless the stem requires radians.",
  "Do not mix OSHA 5 dB with NIOSH 3 dB on the same line.",
  "PEL is legal. TLV/REL are advisory. Do not swap the names.",
];

function Coach() {
  const session = readSession();
  const [domain, setDomain] = useState(0);
  const [seed, setSeed] = useState(0);

  const weak = useMemo(() => {
    const tally: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 };
    for (const id of session.missed) {
      const row = CATALOG.find((item) => item.id === id);
      if (row) tally[row.domain] = (tally[row.domain] ?? 0) + 1;
    }
    return ([1, 2, 3, 4, 5, 6, 7] as number[]).sort((a, b) => (tally[b] ?? 0) - (tally[a] ?? 0))[0] ?? 6;
  }, [session.missed]);

  const items = useMemo(() => {
    const track = session.track;
    if (domain) return pickByDomain(6, domain, track);
    if (session.missed.length) return pickByDomain(6, weak, track);
    return pickWeighted(6, track);
  }, [domain, seed, weak, session.missed.length, session.track]);

  const focus = domain || weak;

  return (
    <Shell>
      <div className="sp-wrap space-y-8">
        <div>
          <p className="sp-kicker">Coach</p>
          <h1 className="sp-title mt-2 text-4xl">Why before what.</h1>
          <p className="mt-2 max-w-2xl text-fg-muted">
            Study method aligned to Yates, Manuele (Z10 / SIF), and Finucane calculation discipline. This desk is not BCSP and not a chatbot.
          </p>
        </div>

        <article className="sp-card space-y-3 p-6">
          <p className="sp-kicker">Focus domain</p>
          <p className="font-serif text-2xl">D{focus} · {DOMAIN_SHORT[focus as keyof typeof DOMAIN_SHORT]}</p>
          <p className="text-pretty leading-7">{DOMAIN_THESIS[focus]}</p>
          <p className="text-sm text-fg-muted">
            {session.missed.length ? `${session.missed.length} stored misses on this device.` : "No misses yet. Blueprint-weighted drill until you miss."}
          </p>
        </article>

        <div className="flex flex-wrap gap-2">
          <button type="button" className={`sp-btn px-3 text-sm ${domain === 0 ? "sp-btn-primary" : "sp-btn-ghost"}`} onClick={() => setDomain(0)}>
            Adaptive
          </button>
          {[1, 2, 3, 4, 5, 6, 7].map((d) => (
            <button key={d} type="button" className={`sp-btn px-3 text-sm ${domain === d ? "sp-btn-primary" : "sp-btn-ghost"}`} onClick={() => setDomain(d)}>
              D{d}
            </button>
          ))}
        </div>

        <section className="sp-card p-6">
          <p className="sp-kicker">Finucane rigor</p>
          <ul className="mt-3 grid gap-2 text-sm">
            {RIGOR.map((row) => (
              <li key={row} className="rounded-md border border-border bg-bg px-3 py-2">{row}</li>
            ))}
          </ul>
        </section>

        <div>
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <h2 className="font-serif text-2xl">Targeted drill</h2>
            <button type="button" className="sp-btn sp-btn-ghost" onClick={() => setSeed((n) => n + 1)}>New set</button>
          </div>
          <QuestionSet items={items} />
        </div>

        <p className="text-sm text-fg-subtle">
          After each item, read the rationale before the next stem. Then open the class.
          {" "}
          <Link to="/studio">Learning</Link>
          {" · "}
          <Link to="/practice">Practice</Link>
        </p>
      </div>
    </Shell>
  );
}
