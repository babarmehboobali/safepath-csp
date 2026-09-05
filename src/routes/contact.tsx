import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Shell } from "@/components/lesson/Shell";

export const Route = createFileRoute("/contact")({ component: Contact });

const TO = "suggestions@safepath-csp.com";
const KINDS = ["Suggestion", "Improvement", "Problem", "Question"] as const;

function Contact() {
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const from = String(fd.get("email") || "").trim();
    const kind = String(fd.get("kind") || "Suggestion");
    const message = String(fd.get("message") || "").trim();
    const subject = `[SafePath CSP] ${kind}${name ? ` — ${name}` : ""}`;
    const body = [
      `Kind: ${kind}`,
      `Name: ${name || "(not given)"}`,
      `Reply-to: ${from || "(not given)"}`,
      "",
      message,
    ].join("\n");
    try {
      const prev = JSON.parse(localStorage.getItem("safepath.suggestions.v1") || "[]") as unknown[];
      prev.unshift({ at: new Date().toISOString(), kind, name, from, message });
      localStorage.setItem("safepath.suggestions.v1", JSON.stringify(prev.slice(0, 20)));
    } catch {
      /* ignore */
    }
    window.location.href = `mailto:${TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <Shell>
      <div className="sp-wrap grid max-w-5xl gap-8 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-4">
          <p className="sp-kicker">Contact</p>
          <h1 className="sp-title text-4xl">Suggestion or improvement.</h1>
          <p className="text-fg-muted">
            Send notes to <a className="text-accent" href={`mailto:${TO}`}>{TO}</a>. Use the box, or write that address
            directly. This is independent study software — not BCSP support.
          </p>
          <ul className="grid gap-2 text-sm text-fg-muted">
            <li>Suggestion — a desk or class that should exist</li>
            <li>Improvement — a board, note, or layout that should change</li>
            <li>Problem — something broken or mismatched</li>
            <li>Question — how a track or exam tool works</li>
          </ul>
        </div>
        <form className="sp-card space-y-4 p-6" onSubmit={submit}>
          <label className="block text-sm">
            Your name
            <input name="name" className="sp-field mt-1" autoComplete="name" placeholder="Optional" />
          </label>
          <label className="block text-sm">
            Your email
            <input name="email" type="email" className="sp-field mt-1" autoComplete="email" placeholder="So we can reply" />
          </label>
          <label className="block text-sm">
            Kind
            <select name="kind" className="sp-field mt-1">
              {KINDS.map((row) => (
                <option key={row}>{row}</option>
              ))}
            </select>
          </label>
          <label className="block text-sm">
            Message
            <textarea name="message" required rows={7} className="sp-field mt-1" placeholder="What should change, and where you saw it." />
          </label>
          {sent ? (
            <p className="text-sm text-ok">
              Your mail app should open addressed to {TO}. If it does not, copy the address and send the note yourself.
            </p>
          ) : null}
          <button type="submit" className="sp-btn sp-btn-primary w-full">
            Send to {TO}
          </button>
          <p className="text-xs text-fg-subtle">
            Opens your email with the address filled in. A copy stays on this device. No payment, no BCSP ticket.
          </p>
        </form>
      </div>
    </Shell>
  );
}
