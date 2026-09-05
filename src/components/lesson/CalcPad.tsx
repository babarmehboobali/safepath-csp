import { useState } from "react";
import { evaluate, formatResult, type AngleMode } from "@/lib/safepath/ti30";

const KEYS: { label: string; insert?: string; action?: string }[] = [
  { label: "DEG", action: "mode" },
  { label: "π", insert: "pi" },
  { label: "(", insert: "(" },
  { label: ")", insert: ")" },
  { label: "√", insert: "sqrt(" },
  { label: "x²", insert: "^(2)" },
  { label: "y^x", insert: "^" },
  { label: "sin", insert: "sin(" },
  { label: "cos", insert: "cos(" },
  { label: "tan", insert: "tan(" },
  { label: "log", insert: "log(" },
  { label: "ln", insert: "ln(" },
  { label: "7", insert: "7" },
  { label: "8", insert: "8" },
  { label: "9", insert: "9" },
  { label: "÷", insert: "/" },
  { label: "4", insert: "4" },
  { label: "5", insert: "5" },
  { label: "6", insert: "6" },
  { label: "×", insert: "*" },
  { label: "1", insert: "1" },
  { label: "2", insert: "2" },
  { label: "3", insert: "3" },
  { label: "−", insert: "-" },
  { label: "0", insert: "0" },
  { label: ".", insert: "." },
  { label: "ANS", insert: "ANS" },
  { label: "+", insert: "+" },
  { label: "CE", action: "ce" },
  { label: "C", action: "c" },
  { label: "=", action: "eq" },
];

export function CalcPad() {
  const [expr, setExpr] = useState("");
  const [out, setOut] = useState("0");
  const [mode, setMode] = useState<AngleMode>("DEG");
  const [ans, setAns] = useState(0);
  const [err, setErr] = useState<string | null>(null);

  function insert(s: string) {
    setExpr((e) => e + s);
    setErr(null);
  }

  function run() {
    try {
      const v = evaluate(expr.replace(/ANS/g, String(ans)), mode, ans);
      setAns(v);
      setOut(formatResult(v, false));
      setErr(null);
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Error");
    }
  }

  function handle(k: (typeof KEYS)[number]) {
    if (k.action === "mode") return setMode((m) => (m === "DEG" ? "RAD" : "DEG"));
    if (k.action === "eq") return run();
    if (k.action === "ce") return setExpr((e) => e.slice(0, -1));
    if (k.action === "c") {
      setExpr("");
      setOut("0");
      setErr(null);
      return;
    }
    if (k.insert) insert(k.insert);
  }

  return (
    <div className="sp-card p-5">
      <div className="flex items-center justify-between text-xs">
        <span className="font-mono text-accent">{mode}</span>
        <span className="text-fg-subtle">Practice look-alike · not Pearson software</span>
      </div>
      <p className="mt-3 min-h-8 font-mono text-sm text-fg-muted">{expr || " "}</p>
      <p className="font-serif text-4xl tabular-nums">{out}</p>
      {err ? <p className="mt-2 text-sm text-bad">{err}</p> : null}
      <div className="mt-4 grid grid-cols-4 gap-2">
        {KEYS.map((k) => (
          <button
            key={k.label}
            type="button"
            className={`sp-btn min-w-0 px-0 ${k.action === "eq" ? "sp-btn-primary" : "sp-btn-ghost"}`}
            onClick={() => handle(k)}
          >
            {k.label}
          </button>
        ))}
      </div>
    </div>
  );
}
