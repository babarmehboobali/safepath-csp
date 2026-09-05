import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Shell } from "@/components/lesson/Shell";
import { classCards, shuffleCards, type CardKind } from "@/lib/safepath/cards";
import { markCardKnown, recordCardReview, readSession, type CardReviewRating } from "@/lib/safepath/session";

export const Route = createFileRoute("/cards")({ component: Cards });
const KIND_LABELS: Record<CardKind, string> = { core: "Core rule", apply: "Application", contrast: "Compare", trap: "Exam trap", decision: "Decision", teachback: "Teach-back", formula: "Formula", rapid: "Rapid recall" };
const RATINGS: Array<{ id: CardReviewRating; label: string; hint: string }> = [
  { id: "again", label: "Again", hint: "Could not retrieve" }, { id: "hard", label: "Hard", hint: "Slow / uncertain" },
  { id: "good", label: "Good", hint: "Correct, normal effort" }, { id: "easy", label: "Easy", hint: "Immediate recall" },
];
type Mode = "all" | "due" | "new" | "weak";

function Cards() {
  const source = useMemo(() => classCards(), []);
  const [deck, setDeck] = useState(() => shuffleCards(source));
  const [index, setIndex] = useState(0);
  const [flip, setFlip] = useState(false);
  const [kindFilter, setKindFilter] = useState<"all" | CardKind>("all");
  const [mode, setMode] = useState<Mode>("all");
  const [startedAt, setStartedAt] = useState(() => Date.now());
  const [known, setKnown] = useState(() => readSession().knownCards);
  const [reviewed, setReviewed] = useState(0);
  const [lastRating, setLastRating] = useState<CardReviewRating | null>(null);
  const session = readSession();
  const latest = useMemo(() => {
    const map = new Map<string, (typeof session.cardReviews)[number]>();
    for (const review of session.cardReviews) {
      const current = map.get(review.cardId);
      if (!current || review.at > current.at) map.set(review.cardId, review);
    }
    return map;
  }, [session.cardReviews]);
  const filtered = useMemo(() => deck.filter((card) => {
    if (kindFilter !== "all" && card.kind !== kindFilter) return false;
    const review = latest.get(card.id);
    if (mode === "due") return Boolean(review && review.dueAt <= Date.now());
    if (mode === "new") return !review;
    if (mode === "weak") return review?.rating === "again" || review?.rating === "hard";
    return true;
  }), [deck, kindFilter, mode, latest]);
  const card = filtered[index] ?? filtered[0];

  function reshuffle() { setDeck(shuffleCards(source)); setIndex(0); setFlip(false); setLastRating(null); setStartedAt(Date.now()); }
  function selectMode(nextMode: Mode) { setMode(nextMode); setIndex(0); setFlip(false); setLastRating(null); setStartedAt(Date.now()); }
  function selectKind(nextKind: "all" | CardKind) { setKindFilter(nextKind); setIndex(0); setFlip(false); setLastRating(null); setStartedAt(Date.now()); }
  function next() { setFlip(false); setLastRating(null); setStartedAt(Date.now()); setIndex((n) => Math.min(Math.max(filtered.length - 1, 0), n + 1)); }
  function rate(rating: CardReviewRating) {
    if (!card || !flip || lastRating) return;
    const seconds = Math.max(1, Math.round((Date.now() - startedAt) / 1000));
    recordCardReview({ cardId: card.id, classId: card.classId, kind: card.kind, rating, responseTimeSeconds: seconds });
    setLastRating(rating); setReviewed((n) => n + 1);
    if (rating === "good" || rating === "easy") { markCardKnown(card.classId); setKnown(readSession().knownCards); }
  }
  if (!card) return <Shell><div className="sp-wrap"><p>No cards match this review mode. Try All or New.</p></div></Shell>;
  return <Shell><div className="sp-wrap max-w-5xl space-y-6">
    <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"><div><p className="sp-kicker">CSP Retrieval & Retention Lab</p><h1 className="sp-title mt-2 text-4xl">Recall. Apply. Discriminate. Retain.</h1><p className="mt-2 max-w-3xl text-sm leading-6 text-fg-muted">Professional retrieval practice built from SafePath lesson evidence. Card wording and learning angle vary so you cannot learn by memorizing position, sequence or a single answer pattern.</p></div><button type="button" className="sp-btn sp-btn-ghost" onClick={reshuffle}>Shuffle</button></header>
    <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5"><div className="sp-card p-4"><div className="text-xs text-fg-muted">Available</div><div className="text-2xl font-semibold">{filtered.length}</div></div><div className="sp-card p-4"><div className="text-xs text-fg-muted">Progress</div><div className="text-2xl font-semibold">{Math.min(index + 1, filtered.length)} / {filtered.length}</div></div><div className="sp-card p-4"><div className="text-xs text-fg-muted">Reviewed</div><div className="text-2xl font-semibold">{reviewed}</div></div><div className="sp-card p-4"><div className="text-xs text-fg-muted">Known classes</div><div className="text-2xl font-semibold">{known.length}</div></div><div className="sp-card p-4"><div className="text-xs text-fg-muted">Difficulty</div><div className="text-2xl font-semibold">L{card.difficulty}/5</div></div></section>
    <div className="flex flex-wrap gap-2" aria-label="Review mode">{(["all", "due", "new", "weak"] as Mode[]).map((m) => <button key={m} type="button" className={mode === m ? "sp-btn sp-btn-primary" : "sp-btn sp-btn-ghost"} onClick={() => selectMode(m)}>{m === "all" ? "All" : m === "due" ? "Due now" : m === "new" ? "New" : "Needs repair"}</button>)}</div>
    <div className="flex flex-wrap gap-2" aria-label="Card type filter">{(["all", "core", "apply", "contrast", "trap", "decision", "teachback", "formula", "rapid"] as const).map((kind) => <button key={kind} type="button" className={kindFilter === kind ? "sp-btn sp-btn-primary" : "sp-btn sp-btn-ghost"} onClick={() => selectKind(kind)}>{kind === "all" ? "All types" : KIND_LABELS[kind]}</button>)}</div>
    <article className="sp-card overflow-hidden"><div className="border-b p-4"><div className="flex flex-wrap items-center justify-between gap-3"><div><div className="font-mono text-xs text-fg-subtle">Class {card.classId} · {card.domain}</div><h2 className="mt-1 text-lg font-semibold">{card.title}</h2></div><div className="flex gap-2 text-xs"><span className="rounded-full border px-3 py-1">{KIND_LABELS[card.kind]}</span><span className="rounded-full border px-3 py-1">Difficulty {card.difficulty}/5</span></div></div></div><button type="button" className="min-h-[360px] w-full p-7 text-left" onClick={() => setFlip((v) => !v)} aria-label="Reveal or hide flashcard answer"><div className="text-xs font-semibold uppercase tracking-[0.18em] text-fg-muted">{flip ? "Reasoning / answer" : "Active recall"}</div><p className="mt-7 max-w-4xl font-serif text-2xl leading-relaxed">{flip ? card.back : card.front}</p><p className="mt-8 text-sm text-accent">{flip ? "Tap to hide" : "Think first. Then reveal."}</p></button><div className="border-t p-4">{!flip ? <p className="text-sm text-fg-muted">Retrieve first. Say the answer aloud if possible. Then reveal and compare your reasoning, not just the wording.</p> : <div><p className="mb-3 text-sm font-semibold">How well did you retrieve it?</p><div className="grid gap-2 sm:grid-cols-4">{RATINGS.map((r) => <button key={r.id} type="button" disabled={Boolean(lastRating)} onClick={() => rate(r.id)} className={lastRating === r.id ? "sp-btn sp-btn-primary text-left" : "sp-btn sp-btn-ghost text-left"}><span className="block font-semibold">{r.label}</span><span className="block text-xs opacity-80">{r.hint}</span></button>)}</div></div>}</div></article>
    <div className="flex flex-wrap gap-2"><button type="button" className="sp-btn sp-btn-ghost" onClick={() => { setFlip(false); setIndex((n) => Math.max(0, n - 1)); }}>Previous</button><button type="button" className="sp-btn sp-btn-primary" onClick={next}>Next card</button><Link to="/learn/$id" params={{ id: String(card.classId) }} className="sp-btn sp-btn-ghost">Open source lesson</Link></div>
    <section className="sp-card p-5 text-sm text-fg-muted"><h3 className="font-semibold text-fg">Retention rule</h3><p className="mt-2 leading-6">Again and Hard send a card back into repair; Good and Easy progressively extend its interval. SafePath records the learner's retrieval rating and response time so future review can be targeted rather than treating every card as equally mastered.</p></section>
  </div></Shell>;
}
