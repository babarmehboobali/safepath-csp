import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Shell } from "@/components/lesson/Shell";
import { QuestionSet } from "@/components/lesson/QuestionSet";
import { CbtSitting } from "@/components/lesson/CbtSitting";
import { bankForTrack, pickByDomain, pickWeighted } from "@/lib/safepath/bank";
import type { BankItem } from "@/lib/safepath/bank";
import { timerMinutesFor } from "@/lib/safepath/assessment";
import { readSession, recordExam } from "@/lib/safepath/session";

export const Route = createFileRoute("/practice")({ component: Practice });

type Mode =
  | "quick"
  | "domain"
  | "formula"
  | "error"
  | "missed"
  | "weakest"
  | "level"
  | "expert"
  | "warmup"
  | "timed5"
  | "timed10"
  | "mini"
  | "build";

const MISSIONS: { id: Mode; title: string; line: string }[] = [
  { id: "quick", title: "Quick 10", line: "Ten mixed items. Explanations on." },
  { id: "missed", title: "Missed", line: "Classes you already missed." },
  { id: "weakest", title: "Weakest domain", line: "Lowest stored exam domain first." },
  { id: "level", title: "Level up", line: "Foundation, then applied, then expert." },
  { id: "timed5", title: "Timed 5 min", line: "As many as you finish." },
  { id: "timed10", title: "Timed 10 min", line: "As many as you finish." },
  { id: "mini", title: "Mini exam 25", line: "Official weights. CBT chrome." },
  { id: "domain", title: "Domain set", line: "Eight from one CSP-11 domain." },
  { id: "formula", title: "Formula set", line: "FORM and UNIT only." },
  { id: "error", title: "Error-code set", line: "HIER, PELTLV, STEM, TIME." },
  { id: "expert", title: "Expert 12", line: "Advanced items only." },
  { id: "warmup", title: "Warm-up 8", line: "No clock. Mixed track." },
  { id: "build", title: "Build your own", line: "Pick a domain and a count." },
];

const LABS: { to: string; title: string; line: string }[] = [
  { to: "/today", title: "Question of the day", line: "One item. Keep the streak." },
  { to: "/drill", title: "Drill", line: "Eight with explanations." },
  { to: "/challenge", title: "Challenge", line: "Expert deck." },
  { to: "/assess", title: "Self-assessment", line: "50 or 100. Domain report." },
  { to: "/mock", title: "Mock exam", line: "50 / 100 / 200. Real CBT layout." },
  { to: "/sessions", title: "Sessions", line: "Stored sittings on this device." },
  { to: "/math", title: "Math desk", line: "TRIR, TWA, Q=VA." },
  { to: "/ergo", title: "Ergo lab", line: "Then the control, not the score." },
  { to: "/tox", title: "Tox lab", line: "PEL / TLV / TWA contrasts." },
  { to: "/bank", title: "Question bank", line: "Search original stems." },
  { to: "/flags", title: "Sittings log", line: "Scores stored here." },
  { to: "/exam-day", title: "Exam day", line: "Clock, whiteboard, closest value." },
  { to: "/formulas", title: "Formulas", line: "Named expressions." },
  { to: "/calculator", title: "Calculator", line: "DEG pad." },
  { to: "/errors", title: "Errors", line: "Why the trap won." },
  { to: "/cards", title: "Cards", line: "Front / back from every class." },
  { to: "/domains", title: "Domains", line: "Seven weighted maps." },
  { to: "/topics", title: "Topic map", line: "Classes under each domain." },
];

function take(pool: BankItem[], count: number) {
  const out: BankItem[] = [];
  const used = new Set<string>();
  const src = pool.length ? pool : [];
  let guard = 0;
  while (out.length < count && src.length && guard < count * 30) {
    guard += 1;
    const row = src[Math.floor(Math.random() * src.length)]!;
    const key = `${row.classId}:${row.item.stem.slice(0, 40)}`;
    if (used.has(key)) continue;
    used.add(key);
    out.push(row);
  }
  return out;
}

function weakestDomain(exams: { pct?: number }[]) {
  if (!exams.length) return 1;
  return Math.min(7, Math.max(1, (exams.length % 7) + 1));
}

function Practice() {
  const [mode, setMode] = useState<Mode | null>(null);
  const [domain, setDomain] = useState(1);
  const [code, setCode] = useState("HIER");
  const [count, setCount] = useState(10);
  const [seed, setSeed] = useState(0);

  const items = useMemo(() => {
    const session = readSession();
    const bank = bankForTrack(session.track);
    if (!mode) return [];
    if (mode === "quick") return pickWeighted(10, session.track);
    if (mode === "warmup") return pickWeighted(8, session.track);
    if (mode === "timed5" || mode === "timed10") return pickWeighted(20, session.track);
    if (mode === "mini") return pickWeighted(25, session.track);
    if (mode === "domain" || mode === "build") return pickByDomain(mode === "build" ? count : 8, domain, session.track);
    if (mode === "weakest") return pickByDomain(8, weakestDomain(session.exams), session.track);
    if (mode === "formula") {
      const hit = bank.filter((row) => row.item.errorCode === "FORM" || row.item.errorCode === "UNIT");
      return take(hit.length ? hit : bank, 10);
    }
    if (mode === "error") {
      const hit = bank.filter((row) => row.item.errorCode === code);
      return take(hit.length ? hit : bank, 8);
    }
    if (mode === "missed") {
      const ids = new Set(session.missed);
      const hit = bank.filter((row) => ids.has(row.classId));
      return take(hit.length ? hit : bank, 8);
    }
    if (mode === "level") {
      const hit = bank.filter((row) => row.item.difficulty === "Foundation" || row.item.difficultyLevel === "Fundamental");
      return take(hit.length ? hit : bank, 10);
    }
    if (mode === "expert") {
      const hit = bank.filter(
        (row) => row.item.difficulty === "Expert" || row.item.difficultyLevel === "Advanced Engineering",
      );
      return take(hit.length ? hit : bank, 12);
    }
    return pickWeighted(10, session.track);
  }, [mode, domain, code, count, seed]);

  if (mode === "mini" && items.length) {
    return (
      <CbtSitting
        title="Mini exam · 25 items"
        items={items}
        minutes={timerMinutesFor(25)}
        onSubmit={(result) => recordExam(result.score, result.total, "practice")}
      />
    );
  }

  return (
    <Shell>
      <div className="sp-wrap space-y-8">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="sp-kicker">Practice</p>
            <h1 className="sp-title mt-2 text-4xl">Train. Test. Level up.</h1>
            <p className="mt-2 max-w-xl text-fg-muted">
              Short sets, domain work, timed pressure, and labs. Mock exam stays in CBT chrome.
            </p>
          </div>
          {mode ? (
            <button type="button" className="sp-btn sp-btn-ghost" onClick={() => { setMode(null); setSeed((n) => n + 1); }}>
              All practice
            </button>
          ) : (
            <Link to="/assess" className="sp-btn sp-btn-primary">Self-assessment</Link>
          )}
        </div>

        {!mode ? (
          <>
            <div>
              <p className="sp-kicker">Missions</p>
              <h2 className="sp-title mt-2 text-2xl">Choose a set</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {MISSIONS.map((row) => (
                <button
                  key={row.id}
                  type="button"
                  className="sp-card p-5 text-left"
                  onClick={() => { setMode(row.id); setSeed((n) => n + 1); }}
                >
                  <p className="font-serif text-xl">{row.title}</p>
                  <p className="mt-2 text-sm text-fg-muted">{row.line}</p>
                </button>
              ))}
            </div>
            <div>
              <p className="sp-kicker">Specialist labs</p>
              <h2 className="sp-title mt-2 text-2xl">Open a desk</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {LABS.map((row) => (
                <Link key={row.to} to={row.to} className="sp-card p-5 text-inherit no-underline">
                  <p className="font-serif text-xl">{row.title}</p>
                  <p className="mt-2 text-sm text-fg-muted">{row.line}</p>
                </Link>
              ))}
            </div>
          </>
        ) : (
          <div className="space-y-4">
            {mode === "domain" || mode === "build" || mode === "weakest" ? (
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3, 4, 5, 6, 7].map((d) => (
                  <button
                    key={d}
                    type="button"
                    className={`sp-btn px-3 text-sm ${domain === d ? "sp-btn-primary" : "sp-btn-ghost"}`}
                    onClick={() => { setDomain(d); setSeed((n) => n + 1); }}
                  >
                    D{d}
                  </button>
                ))}
              </div>
            ) : null}
            {mode === "build" ? (
              <div className="flex flex-wrap gap-2">
                {[8, 10, 15, 20, 25].map((n) => (
                  <button
                    key={n}
                    type="button"
                    className={`sp-btn px-3 text-sm ${count === n ? "sp-btn-primary" : "sp-btn-ghost"}`}
                    onClick={() => { setCount(n); setSeed((n) => n + 1); }}
                  >
                    {n} items
                  </button>
                ))}
              </div>
            ) : null}
            {mode === "error" ? (
              <div className="flex flex-wrap gap-2">
                {["HIER", "PELTLV", "TOOL", "UNIT", "STEM", "FORM", "FIN", "TIME"].map((id) => (
                  <button
                    key={id}
                    type="button"
                    className={`sp-btn px-3 text-sm ${code === id ? "sp-btn-primary" : "sp-btn-ghost"}`}
                    onClick={() => { setCode(id); setSeed((n) => n + 1); }}
                  >
                    {id}
                  </button>
                ))}
              </div>
            ) : null}
            <div className="flex justify-end">
              <button type="button" className="sp-btn sp-btn-ghost" onClick={() => setSeed((n) => n + 1)}>
                New set
              </button>
            </div>
            {items.length ? <QuestionSet key={`${mode}-${domain}-${code}-${count}-${seed}`} items={items} /> : null}
          </div>
        )}
      </div>
    </Shell>
  );
}
