export type AngleMode = "DEG" | "RAD";

const FUNCS: Record<string, (x: number, mode: AngleMode) => number> = {
  sin: (x, m) => Math.sin(toRad(x, m)),
  cos: (x, m) => Math.cos(toRad(x, m)),
  tan: (x, m) => Math.tan(toRad(x, m)),
  asin: (x, m) => fromRad(Math.asin(x), m),
  acos: (x, m) => fromRad(Math.acos(x), m),
  atan: (x, m) => fromRad(Math.atan(x), m),
  log: (x) => Math.log10(x),
  ln: (x) => Math.log(x),
  sqrt: (x) => Math.sqrt(x),
  recip: (x) => 1 / x,
  abs: (x) => Math.abs(x),
  square: (x) => x * x,
};

function toRad(x: number, mode: AngleMode) {
  return mode === "DEG" ? (x * Math.PI) / 180 : x;
}
function fromRad(x: number, mode: AngleMode) {
  return mode === "DEG" ? (x * 180) / Math.PI : x;
}

type Tok =
  | { t: "num"; v: number }
  | { t: "op"; v: string }
  | { t: "lp" }
  | { t: "rp" }
  | { t: "fn"; v: string }
  | { t: "pi" }
  | { t: "ans" }
  | { t: "pct" };

function tokenize(src: string): Tok[] {
  const s = src.replace(/\s+/g, "").replace(/π/g, "pi").replace(/EE/gi, "e");
  const out: Tok[] = [];
  let i = 0;
  while (i < s.length) {
    const c = s[i];
    if (/[0-9.]/.test(c) || (c === "e" && /[0-9.]/.test(s[i - 1] || ""))) {
      let j = i;
      if (s[j] === ".") j++;
      while (/[0-9]/.test(s[j] || "")) j++;
      if (s[j] === "." && /[0-9]/.test(s[j + 1] || "")) {
        j++;
        while (/[0-9]/.test(s[j] || "")) j++;
      }
      if (s[j] === "e" || s[j] === "E") {
        j++;
        if (s[j] === "+" || s[j] === "-") j++;
        while (/[0-9]/.test(s[j] || "")) j++;
      }
      out.push({ t: "num", v: Number(s.slice(i, j)) });
      i = j;
      continue;
    }
    if (s.slice(i, i + 2) === "pi") {
      out.push({ t: "pi" });
      i += 2;
      continue;
    }
    if (s.slice(i, i + 3).toLowerCase() === "ans") {
      out.push({ t: "ans" });
      i += 3;
      continue;
    }
    const names = ["asin", "acos", "atan", "sin", "cos", "tan", "sqrt", "recip", "log", "ln", "abs", "square"];
    const fn = names.find((n) => s.slice(i, i + n.length).toLowerCase() === n);
    if (fn) {
      out.push({ t: "fn", v: fn });
      i += fn.length;
      continue;
    }
    if (c === "(") {
      out.push({ t: "lp" });
      i++;
      continue;
    }
    if (c === ")") {
      out.push({ t: "rp" });
      i++;
      continue;
    }
    if (c === "%") {
      out.push({ t: "pct" });
      i++;
      continue;
    }
    if ("+-*/^×÷−".includes(c)) {
      const v = c === "×" ? "*" : c === "÷" || c === "/" ? "/" : c === "−" ? "-" : c;
      out.push({ t: "op", v });
      i++;
      continue;
    }
    throw new Error(`Unexpected ${c}`);
  }
  return out;
}

function parse(tokens: Tok[], ans: number, mode: AngleMode): number {
  let i = 0;
  function peek() {
    return tokens[i];
  }
  function eat() {
    return tokens[i++];
  }

  function expr(): number {
    let v = term();
    while (peek()?.t === "op" && (peek() as { v: string }).v === "+" || peek()?.t === "op" && (peek() as { v: string }).v === "-") {
      const op = (eat() as { v: string }).v;
      const r = term();
      v = op === "+" ? v + r : v - r;
    }
    return v;
  }

  function term(): number {
    let v = unary();
    while (peek()?.t === "op" && ("*/".includes((peek() as { v: string }).v))) {
      const op = (eat() as { v: string }).v;
      const r = unary();
      v = op === "*" ? v * r : v / r;
    }
    return v;
  }

  function unary(): number {
    if (peek()?.t === "op" && (peek() as { v: string }).v === "-") {
      eat();
      return -unary();
    }
    if (peek()?.t === "op" && (peek() as { v: string }).v === "+") {
      eat();
      return unary();
    }
    return power();
  }

  function power(): number {
    let v = postfix();
    if (peek()?.t === "op" && (peek() as { v: string }).v === "^") {
      eat();
      v = v ** power();
    }
    return v;
  }

  function postfix(): number {
    let v = primary();
    while (peek()?.t === "pct") {
      eat();
      v = v / 100;
    }
    return v;
  }

  function primary(): number {
    const tok = peek();
    if (!tok) throw new Error("Unexpected end");
    if (tok.t === "num") {
      eat();
      return tok.v;
    }
    if (tok.t === "pi") {
      eat();
      return Math.PI;
    }
    if (tok.t === "ans") {
      eat();
      return ans;
    }
    if (tok.t === "fn") {
      eat();
      if (peek()?.t !== "lp") throw new Error("Expected (");
      eat();
      const arg = expr();
      if (peek()?.t !== "rp") throw new Error("Expected )");
      eat();
      const fn = FUNCS[tok.v];
      if (!fn) throw new Error("Unknown function");
      return fn(arg, mode);
    }
    if (tok.t === "lp") {
      eat();
      const v = expr();
      if (peek()?.t !== "rp") throw new Error("Expected )");
      eat();
      return v;
    }
    throw new Error("Bad token");
  }

  const v = expr();
  if (i !== tokens.length) throw new Error("Trailing input");
  if (!Number.isFinite(v)) throw new Error("Math error");
  return v;
}

export function evaluate(expression: string, mode: AngleMode, ans: number): number {
  const tokens = tokenize(expression);
  return parse(tokens, ans, mode);
}

export function toFraction(x: number): { n: number; d: number } | null {
  if (!Number.isFinite(x)) return null;
  const sign = x < 0 ? -1 : 1;
  x = Math.abs(x);
  if (Math.abs(x - Math.round(x)) < 1e-10) return { n: sign * Math.round(x), d: 1 };
  let n = [1, 0];
  let d = [0, 1];
  let a = x;
  for (let k = 0; k < 12; k++) {
    const fl = Math.floor(a);
    const nn = fl * n[0] + n[1];
    const dd = fl * d[0] + d[1];
    n = [nn, n[0]];
    d = [dd, d[0]];
    const approx = nn / dd;
    if (Math.abs(x - approx) < 1e-10 || dd > 10000) return { n: sign * nn, d: dd };
    a = 1 / (a - fl);
    if (!Number.isFinite(a)) return { n: sign * nn, d: dd };
  }
  return { n: sign * n[0], d: d[0] };
}

export function formatResult(v: number, fraction: boolean): string {
  if (fraction) {
    const f = toFraction(v);
    if (f && f.d !== 1 && f.d < 1000) return `${f.n}/${f.d}`;
  }
  if (Math.abs(v) >= 1e10 || (Math.abs(v) > 0 && Math.abs(v) < 1e-6)) {
    return v.toExponential(6).replace(/e\+?/, "E");
  }
  const s = v.toPrecision(10);
  return String(Number(s));
}
