import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Shell } from "@/components/lesson/Shell";

export const Route = createFileRoute("/ergo")({ component: Ergo });

const ARMS = [
  [1, "Upper arm near neutral"],
  [2, "Upper arm 20–45°"],
  [3, "Upper arm 45–90°"],
  [4, "Upper arm past 90°"],
] as const;
const NECK = [
  [1, "Neck 0–10° flexion"],
  [2, "Neck 10–20°"],
  [3, "Neck past 20° or extended"],
] as const;
const TRUNK = [
  [1, "Trunk upright"],
  [2, "Trunk 0–20°"],
  [3, "Trunk 20–60°"],
  [4, "Trunk past 60°"],
] as const;

function Ergo() {
  const [arm, setArm] = useState(2);
  const [neck, setNeck] = useState(2);
  const [trunk, setTrunk] = useState(2);
  const [load, setLoad] = useState(1);
  const score = useMemo(() => Math.min(7, arm + Math.max(neck, trunk) - 1 + load), [arm, neck, trunk, load]);
  const read =
    score <= 2 ? "Acceptable if not prolonged." : score <= 4 ? "Investigate soon." : "Change the task. Do not coach posture only.";

  return (
    <Shell>
      <div className="sp-wrap grid gap-8 lg:grid-cols-2">
        <div>
          <p className="sp-kicker">Ergonomics lab</p>
          <h1 className="sp-title mt-2 text-4xl">Posture estimate. Then the control.</h1>
          <p className="mt-3 text-fg-muted">
            Teaching desk only — not a licensed RULA/REBA instrument. A high score means change the load, the reach, or
            the frequency, not the briefing.
          </p>
          <div className="mt-5 space-y-3">
            <label className="block text-sm">
              Upper arm
              <select className="sp-field mt-1" value={arm} onChange={(e) => setArm(Number(e.target.value))}>
                {ARMS.map(([v, t]) => (
                  <option key={v} value={v}>{t}</option>
                ))}
              </select>
            </label>
            <label className="block text-sm">
              Neck
              <select className="sp-field mt-1" value={neck} onChange={(e) => setNeck(Number(e.target.value))}>
                {NECK.map(([v, t]) => (
                  <option key={v} value={v}>{t}</option>
                ))}
              </select>
            </label>
            <label className="block text-sm">
              Trunk
              <select className="sp-field mt-1" value={trunk} onChange={(e) => setTrunk(Number(e.target.value))}>
                {TRUNK.map(([v, t]) => (
                  <option key={v} value={v}>{t}</option>
                ))}
              </select>
            </label>
            <label className="block text-sm">
              Load / repeat
              <select className="sp-field mt-1" value={load} onChange={(e) => setLoad(Number(e.target.value))}>
                <option value={0}>Light and intermittent</option>
                <option value={1}>Moderate or repeated</option>
                <option value={2}>Heavy, static, or shock</option>
              </select>
            </label>
          </div>
        </div>
        <div className="sp-card p-6">
          <p className="font-mono text-xs text-accent">Teaching score</p>
          <p className="mt-2 font-serif text-5xl tabular-nums">{score}</p>
          <p className="mt-3 text-fg-muted">{read}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Link to="/learn/$id" params={{ id: "70" }} className="sp-btn sp-btn-primary">Ergonomics class</Link>
            <Link to="/learn/$id" params={{ id: "126" }} className="sp-btn sp-btn-ghost">NIOSH RNLE lab</Link>
          </div>
        </div>
      </div>
    </Shell>
  );
}
