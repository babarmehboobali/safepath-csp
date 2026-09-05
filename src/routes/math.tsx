import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Shell } from "@/components/lesson/Shell";

export const Route = createFileRoute("/math")({ component: MathDesk });

function field(label: string, value: string, set: (v: string) => void) {
  return (
    <label className="block text-sm">
      {label}
      <input className="sp-field mt-1" value={value} onChange={(e) => set(e.target.value)} />
    </label>
  );
}

function MathDesk() {
  const [n, setN] = useState("4");
  const [eh, setEh] = useState("250000");
  const [c1, setC1] = useState("80");
  const [t1, setT1] = useState("3");
  const [c2, setC2] = useState("40");
  const [t2, setT2] = useState("5");
  const [v, setV] = useState("2000");
  const [dIn, setDIn] = useState("12");
  const [level, setLevel] = useState("95");
  const trir = (Number(n) * 200000) / Number(eh || 1);
  const twa = (Number(c1) * Number(t1) + Number(c2) * Number(t2)) / 8;
  const rFt = Number(dIn) / 24;
  const q = Number(v) * Math.PI * rFt * rFt;
  const oshaT = 8 / 2 ** ((Number(level) - 90) / 5);
  const nioshT = 8 / 2 ** ((Number(level) - 85) / 3);

  return (
    <Shell>
      <div className="sp-wrap space-y-8">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="sp-kicker">Math desk</p>
            <h1 className="sp-title mt-2 text-4xl">Name the formula. Then compute.</h1>
          </div>
          <Link to="/calculator" className="sp-btn sp-btn-ghost">TI pad</Link>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          <article className="sp-card space-y-3 p-5">
            <p className="font-serif text-xl">TRIR</p>
            {field("Recordables N", n, setN)}
            {field("Hours EH", eh, setEh)}
            <p className="font-mono text-accent">{Number.isFinite(trir) ? trir.toFixed(2) : "—"}</p>
          </article>
          <article className="sp-card space-y-3 p-5">
            <p className="font-serif text-xl">8-hour TWA</p>
            {field("C1", c1, setC1)}
            {field("T1 hours", t1, setT1)}
            {field("C2", c2, setC2)}
            {field("T2 hours", t2, setT2)}
            <p className="font-mono text-accent">{Number.isFinite(twa) ? twa.toFixed(1) : "—"}</p>
          </article>
          <article className="sp-card space-y-3 p-5">
            <p className="font-serif text-xl">Q = VA (round duct)</p>
            {field("V fpm", v, setV)}
            {field("Diameter inches", dIn, setDIn)}
            <p className="font-mono text-accent">{Number.isFinite(q) ? `${q.toFixed(0)} cfm` : "—"}</p>
            <p className="text-xs text-fg-subtle">Radius is diameter / 24 feet. Diameter-as-radius is the trap.</p>
          </article>
          <article className="sp-card space-y-3 p-5">
            <p className="font-serif text-xl">Noise duration</p>
            {field("Level dBA", level, setLevel)}
            <p className="font-mono text-accent">OSHA 5 dB: {Number.isFinite(oshaT) ? `${oshaT.toFixed(2)} h` : "—"}</p>
            <p className="font-mono text-accent">NIOSH 3 dB: {Number.isFinite(nioshT) ? `${nioshT.toFixed(2)} h` : "—"}</p>
          </article>
        </div>
      </div>
    </Shell>
  );
}
