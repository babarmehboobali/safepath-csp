import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Shell } from "@/components/lesson/Shell";
import { classCards, type CardKind } from "@/lib/safepath/cards";
import { markCardKnown, readSession } from "@/lib/safepath/session";

export const Route = createFileRoute("/cards")({ component: Cards });

const KIND_LABELS: Record<CardKind, string> = {
  core: "Core rule",
  apply: "Field application",
  trap: "Exam traps",
  decision: "Decision logic",
  teachback: "Teach-back",
};

function shuffle<T>(items: T[]) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function Cards() {
  const source = useMemo(() => classCards(), []);
  const [deck, setDeck] = useState(() => shuffle(source));
  const [i, setI] = useState(0);
  const [flip, setFlip] = useState(false);
  const [filter, setFilter] = useState<"all" | CardKind>("all");
  const [known, setKnown] = useState(() => readSession().knownCards);
  const [sessionKnown, setSessionKnown] = useState(0);

  const filtered = useMemo(
    () => filter === "all" ? deck : deck.filter((card) => card.kind === filter),
    [deck, filter],
  );
  const card = filtered[i] ?? filtered[0];

  function reshuffle(nextFilter = filter) {
    const base = nextFilter === "all" ? source : source.filter((c) => c.kind === nextFilter);
    setDeck(shuffle(base));
    setI(0);
    setFlip(false);
  }

  function next() {
    setFlip(false);
    setI((n) => Math.min(Math.max(filtered.length - 1, 0), n + 1));
  }

  function previous() {
    setFlip(false);
    setI((n) => Math.max(0, n - 1));
  }

  if (!card) return (
    <Shell>
      <div className="sp-wrap"><p>No cards in the catalog yet.</p></div>
    </Shell>
  );

  return (
    <Shell>
      <div className="sp-wrap max-w-4xl space-y-5">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="sp-kicker">CSP retrieval lab</p>
            <h1 className="sp-title mt-2 text-4xl">Recall first. Reveal second.</h1>
            <p className="mt-2 max-w-2xl text-sm text-fg-muted">
              Cards are generated from the structured lesson rules, worked cases, traps and decision maps — not one repeated template.
              The deck is shuffled so you cannot learn by card location or sequence.
            </p>
          </div>
          <button type="button" className="sp-btn sp-btn-ghost" onClick={() => reshuffle()}>
            Shuffle deck
          </button>
        </div>

        <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-6">
          <div className="sp-card p-3"><div className="text-xs text-fg-muted">Cards</div><div className="text-xl font-semibold">{filtered.length}</div></div>
          <div className="sp-card p-3"><div className="text-xs text-fg-muted">Position</div><div className="text-xl font-semibold">{Math.min(i + 1, filtered.length)} / {filtered.length}</div></div>
          <div className="sp-card p-3"><div className="text-xs text-fg-muted">Known classes</div><div className="text-xl font-semibold">{known.length}</div></div>
          <div className="sp-card p-3"><div className="text-xs text-fg-muted">Session known</div><div className="text-xl font-semibold">{sessionKnown}</div></div>
          <div className="sp-card p-3"><div className="text-xs text-fg-muted">Card type</div><div className="text-xl font-semibold">{KIND_LABELS[card.kind]}</div></div>
          <div className="sp-card p-3"><div className="text-xs text-fg-muted">Source</div><div className="text-xl font-semibold">Lesson engine</div></div>
        </div>

        <div className="flex flex-wrap gap-2" aria-label="Flashcard type filter">
          {(["all", "core", "apply", "trap", "decision", "teachback"] as const).map((kind) => (
            <button
              key={kind}
              type="button"
              className={filter === kind ? "sp-btn sp-btn-primary" : "sp-btn sp-btn-ghost"}
              onClick={() => {
                setFilter(kind);
                reshuffle(kind);
              }}
            >
              {kind === "all" ? "All cards" : KIND_LABELS[kind]}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="sp-card w-full min-h-[320px] p-7 text-left transition-transform hover:-translate-y-0.5"
          onClick={() => setFlip((v) => !v)}
          aria-label="Flip flashcard"
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="font-mono text-xs text-fg-subtle">Class {card.classId} · {card.title}</span>
            <span className="rounded-full border px-2.5 py-1 text-xs font-medium text-accent">{KIND_LABELS[card.kind]}</span>
          </div>
          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.16em] text-fg-muted">
            {flip ? "Answer / explanation" : "Active recall"}
          </p>
          <p className="mt-4 font-serif text-2xl leading-relaxed">{flip ? card.back : card.front}</p>
          <p className="mt-8 text-sm text-accent">{flip ? "Tap to hide the answer" : "Tap to reveal — answer in your head first"}</p>
        </button>

        <div className="flex flex-wrap gap-2">
          <button type="button" className="sp-btn sp-btn-ghost" onClick={previous}>Previous</button>
          <button
            type="button"
            className="sp-btn sp-btn-ghost"
            onClick={() => {
              markCardKnown(card.classId);
              setKnown(readSession().knownCards);
              setSessionKnown((n) => n + 1);
              next();
            }}
          >
            Know it
          </button>
          <button type="button" className="sp-btn sp-btn-primary" onClick={next}>Next card</button>
          <Link to="/learn/$id" params={{ id: String(card.classId) }} className="sp-btn sp-btn-ghost">Open class</Link>
        </div>

        <div className="sp-card p-4 text-sm text-fg-muted">
          <strong className="text-fg">Study rule:</strong> do not memorize the answer text. Explain the governing principle, apply it to a changed scenario, identify the distractor trap, and then teach it back. Candidate reports consistently emphasize understanding concepts rather than memorizing practice questions. citeturn0reddit52turn0reddit54
        </div>
      </div>
    </Shell>
  );
}
