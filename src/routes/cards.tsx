import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Shell } from "@/components/lesson/Shell";
import { classCards } from "@/lib/safepath/cards";
import { markCardKnown, readSession } from "@/lib/safepath/session";

export const Route = createFileRoute("/cards")({ component: Cards });

function Cards() {
  const deck = useMemo(() => classCards(), []);
  const [i, setI] = useState(0);
  const [flip, setFlip] = useState(false);
  const [known, setKnown] = useState(() => readSession().knownCards);
  const card = deck[i];

  if (!card) return (
    <Shell>
      <div className="sp-wrap"><p>No cards in the catalog yet.</p></div>
    </Shell>
  );

  return (
    <Shell>
      <div className="sp-wrap max-w-2xl space-y-5">
        <div>
          <p className="sp-kicker">Memory cards</p>
          <h1 className="sp-title mt-2 text-4xl">Front, then back. Then the class.</h1>
          <p className="mt-2 text-sm text-fg-muted">
            Card {i + 1} of {deck.length} · {known.length} marked known
          </p>
        </div>
        <button type="button" className="sp-card w-full p-8 text-left" onClick={() => setFlip((v) => !v)}>
          <p className="font-mono text-xs text-fg-subtle">Class {card.id} · {card.title}</p>
          <p className="mt-4 font-serif text-2xl">{flip ? card.back : card.front}</p>
          <p className="mt-4 text-sm text-accent">{flip ? "Back" : "Front · tap to flip"}</p>
        </button>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className="sp-btn sp-btn-ghost"
            onClick={() => {
              setFlip(false);
              setI((n) => Math.max(0, n - 1));
            }}
          >
            Back
          </button>
          <button
            type="button"
            className="sp-btn sp-btn-ghost"
            onClick={() => {
              markCardKnown(card.id);
              setKnown(readSession().knownCards);
              setFlip(false);
              setI((n) => Math.min(deck.length - 1, n + 1));
            }}
          >
            Know it
          </button>
          <button
            type="button"
            className="sp-btn sp-btn-primary"
            onClick={() => {
              setFlip(false);
              setI((n) => Math.min(deck.length - 1, n + 1));
            }}
          >
            Next card
          </button>
          <Link to="/learn/$id" params={{ id: String(card.id) }} className="sp-btn sp-btn-ghost">
            Open class
          </Link>
        </div>
      </div>
    </Shell>
  );
}
