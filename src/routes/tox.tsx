import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Shell } from "@/components/lesson/Shell";
import { QuestionSet } from "@/components/lesson/QuestionSet";
import { bankForTrack } from "@/lib/safepath/bank";
import { readSession } from "@/lib/safepath/session";

export const Route = createFileRoute("/tox")({ component: Tox });

const POINTS = [
  ["PEL vs TLV vs REL", "PEL is legal. TLV is ACGIH advisory. REL is NIOSH advisory. Meeting a PEL does not close a still-open substitute."],
  ["ppm vs mg/m³", "mg/m³ = (ppm × MW) / 24.45 at 25 °C. Dusts and fibers are not ppm."],
  ["TWA / STEL / C", "TWA is the shift. STEL is a short peak. C is a ceiling. Do not average a ceiling."],
  ["Dose vs exposure", "Exposure is what is in the air. Dose is what the body takes. Controls sit on exposure first."],
];

function Tox() {
  const [open, setOpen] = useState(false);
  const items = useMemo(() => {
    if (!open) return [];
    const bank = bankForTrack(readSession().track);
    const hit = bank.filter((row) =>
      /PEL|TLV|REL|ppm|mg\/m|TWA|toxic|silica|benzene|asbestos/i.test(row.item.stem + row.title),
    );
    return (hit.length ? hit : bank).slice(0, 8);
  }, [open]);

  return (
    <Shell>
      <div className="sp-wrap space-y-8">
        <div>
          <p className="sp-kicker">Toxicology lab</p>
          <h1 className="sp-title mt-2 text-4xl">Limits are not the hierarchy.</h1>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {POINTS.map(([title, body]) => (
            <article key={title} className="sp-card p-5">
              <p className="font-serif text-xl">{title}</p>
              <p className="mt-2 text-sm text-fg-muted">{body}</p>
            </article>
          ))}
        </div>
        <button type="button" className="sp-btn sp-btn-primary" onClick={() => setOpen(true)}>
          Open 8 tox items
        </button>
        {open ? <QuestionSet items={items} /> : null}
        <Link to="/learn/$id" params={{ id: "68" }} className="sp-btn sp-btn-ghost">Toxicology class</Link>
      </div>
    </Shell>
  );
}
