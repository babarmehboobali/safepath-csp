import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Shell } from "@/components/lesson/Shell";
import { CLASS_PACKS } from "@/content/classes";
import { catalogForTrack } from "@/lib/safepath/catalog";
import type { CatalogEntry } from "@/lib/safepath/catalog";
import { DOMAIN_SHORT } from "@/lib/safepath/domains";
import { stillForClass } from "@/lib/safepath/media";
import { readSession } from "@/lib/safepath/session";

export const Route = createFileRoute("/games")({ component: Games });

type GameId = "match" | "buckets" | "pyramid" | "snap" | "signs";

const GAMES: { id: GameId; title: string; line: string }[] = [
  { id: "match", title: "Memory match", line: "Flip two tiles. Pair the topic with its rule." },
  { id: "buckets", title: "Domain buckets", line: "Drop each topic chip into D1–D7." },
  { id: "pyramid", title: "Pyramid stack", line: "Build Elimination to PPE in five moves." },
  { id: "snap", title: "Same domain?", line: "Two cards. Snap yes or no." },
  { id: "signs", title: "Control signs", line: "Read the field sign. Tap the hierarchy row." },
];

const ROWS = ["Elimination", "Substitution", "Engineering", "Administrative", "PPE"] as const;

type Tile = { id: string; pair: string; text: string; kind: "topic" | "rule" };

function shuffle<T>(list: T[]) {
  const out = [...list];
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j]!, out[i]!];
  }
  return out;
}

function speak(text: string, allowed: boolean) {
  if (!allowed || typeof window === "undefined" || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.rate = 1;
  utter.pitch = 1;
  window.speechSynthesis.speak(utter);
}

function Games() {
  const track = readSession().track;
  const catalog = useMemo(() => catalogForTrack(track), [track]);
  const [game, setGame] = useState<GameId | null>(null);
  const [domain, setDomain] = useState(0);
  const [hits, setHits] = useState(0);
  const [misses, setMisses] = useState(0);
  const [flash, setFlash] = useState<string | null>(null);
  const [voice, setVoice] = useState(true);

  function cheer(kind: "hit" | "miss" | "done") {
    const hitLines = ["Correct", "Yes", "Well done"];
    const missLines = ["Wrong", "Try again", "Not that bucket"];
    const text =
      kind === "done"
        ? "Well done. Board clear."
        : kind === "hit"
          ? hitLines[hits % hitLines.length]!
          : missLines[misses % missLines.length]!;
    setFlash(text);
    speak(text, voice);
    window.setTimeout(() => setFlash((cur) => (cur === text ? null : cur)), 1600);
    if (kind === "hit" || kind === "done") setHits((n) => n + 1);
    if (kind === "miss") setMisses((n) => n + 1);
  }

  const topics = useMemo(
    () => catalog.filter((row) => (domain === 0 ? true : row.domain === domain)),
    [catalog, domain],
  );

  return (
    <Shell>
      <div className="sp-wrap space-y-6">
        <div>
          <p className="sp-kicker">Games</p>
          <h1 className="sp-title mt-2 text-4xl">Boards. Tiles. Not a quiz.</h1>
          <p className="mt-2 max-w-2xl text-fg-muted">
            These are recall boards for CSP-11 topics. Practice stays on Practice. Mocks stay on Mock.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button type="button" className={`sp-btn px-3 text-sm ${voice ? "sp-btn-primary" : "sp-btn-ghost"}`} onClick={() => setVoice((v) => !v)}>
            {voice ? "Voice on" : "Voice off"}
          </button>
          <button type="button" className={`sp-btn px-3 text-sm ${domain === 0 ? "sp-btn-primary" : "sp-btn-ghost"}`} onClick={() => setDomain(0)}>All domains</button>
          {[1, 2, 3, 4, 5, 6, 7].map((d) => (
            <button key={d} type="button" className={`sp-btn px-3 text-sm ${domain === d ? "sp-btn-primary" : "sp-btn-ghost"}`} onClick={() => setDomain(d)}>
              D{d} {DOMAIN_SHORT[d as keyof typeof DOMAIN_SHORT]}
            </button>
          ))}
        </div>
        {flash ? (
          <div className="pointer-events-none fixed inset-0 z-30 grid place-items-center bg-[#07110d]/45">
            <p className={`rounded-full px-8 py-4 font-serif text-4xl ${flash.includes("Wrong") || flash.includes("Try") || flash.includes("Not") ? "bg-accent text-accent-fg" : "bg-ok text-white"}`}>
              {flash}
            </p>
          </div>
        ) : null}

        {!game ? (
          <div className="grid gap-3 sm:grid-cols-2">
            {GAMES.map((row) => (
              <button key={row.id} type="button" className="sp-card p-6 text-left" onClick={() => setGame(row.id)}>
                <p className="font-serif text-2xl">{row.title}</p>
                <p className="mt-2 text-fg-muted">{row.line}</p>
              </button>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            <button type="button" className="sp-btn sp-btn-ghost" onClick={() => setGame(null)}>All boards</button>
            <div className="game-stage">
              <div className="game-hud">
                <span className="game-chip">Hits {hits}</span>
                <span className="game-chip">Miss {misses}</span>
                <span className="game-chip">{game}</span>
              </div>
              {game === "match" ? <MatchBoard topics={topics} onHit={() => cheer("hit")} onMiss={() => cheer("miss")} onDone={() => cheer("done")} /> : null}
              {game === "buckets" ? <BucketBoard topics={topics} onHit={() => cheer("hit")} onMiss={() => cheer("miss")} /> : null}
              {game === "pyramid" ? <PyramidBoard onHit={() => cheer("done")} onMiss={() => cheer("miss")} /> : null}
              {game === "snap" ? <SnapBoard topics={topics} onHit={() => cheer("hit")} onMiss={() => cheer("miss")} /> : null}
              {game === "signs" ? <SignBoard onHit={() => cheer("hit")} onMiss={() => cheer("miss")} /> : null}
            </div>
          </div>
        )}
      </div>
    </Shell>
  );
}

function MatchBoard({ topics, onHit, onMiss, onDone }: { topics: CatalogEntry[]; onHit: () => void; onMiss: () => void; onDone: () => void }) {
  const [round, setRound] = useState(0);
  const tiles = useMemo(() => {
    const pick = shuffle(topics).slice(0, 4);
    const built: Tile[] = [];
    for (const row of pick) {
      const pack = CLASS_PACKS[row.id];
      if (!pack) continue;
      built.push({ id: `t-${row.id}`, pair: String(row.id), text: row.title, kind: "topic" });
      built.push({ id: `r-${row.id}`, pair: String(row.id), text: pack.classFields.rule.slice(0, 90), kind: "rule" });
    }
    return shuffle(built);
  }, [topics, round]);
  const [open, setOpen] = useState<string[]>([]);
  const [done, setDone] = useState<string[]>([]);

  function tap(id: string) {
    if (done.includes(id) || open.includes(id) || open.length === 2) return;
    const next = [...open, id];
    setOpen(next);
    if (next.length < 2) return;
    const a = tiles.find((row) => row.id === next[0]);
    const b = tiles.find((row) => row.id === next[1]);
    window.setTimeout(() => {
      if (a && b && a.pair === b.pair && a.id !== b.id) {
        setDone((rows) => {
          const nextDone = [...rows, a.id, b.id];
          if (nextDone.length === tiles.length) window.setTimeout(onDone, 200);
          else onHit();
          return nextDone;
        });
      } else {
        onMiss();
      }
      setOpen([]);
    }, 500);
  }

  const cleared = done.length === tiles.length && tiles.length > 0;

  return (
    <div className="space-y-4">
      <p className="text-sm text-[#cfe3d4]">Flip two. Topic pairs with its rule.</p>
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {tiles.map((tile) => {
          const show = open.includes(tile.id) || done.includes(tile.id);
          return (
            <button
              key={tile.id}
              type="button"
              onClick={() => tap(tile.id)}
              className={`w-full text-left transition ${show ? "game-tile-face p-4" : "game-tile-back grid place-items-center"}`}
            >
              {show ? (
                <>
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">{tile.kind}</p>
                  <p className="mt-2 text-sm leading-6">{tile.text}</p>
                </>
              ) : (
                <p className="font-serif text-3xl text-fg-subtle">?</p>
              )}
            </button>
          );
        })}
      </div>
      {cleared ? (
        <button type="button" className="sp-btn sp-btn-primary" onClick={() => { setDone([]); setOpen([]); setRound((n) => n + 1); }}>
          New board
        </button>
      ) : null}
    </div>
  );
}

function BucketBoard({ topics, onHit, onMiss }: { topics: CatalogEntry[]; onHit: () => void; onMiss: () => void }) {
  const [held, setHeld] = useState<CatalogEntry | null>(null);
  const [left, setLeft] = useState(() => shuffle(topics).slice(0, 8));
  const chip = held ?? left[0] ?? null;

  function drop(domain: number) {
    if (!chip) return;
    if (chip.domain === domain) {
      onHit();
      setLeft((rows) => rows.filter((row) => row.id !== chip.id));
    } else {
      onMiss();
    }
    setHeld(null);
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-fg-muted">Tap a chip, then tap its domain bucket.</p>
      {chip ? (
        <button type="button" className={`sp-card flex items-center gap-4 p-4 text-left ${held ? "ring-2 ring-accent" : ""}`} onClick={() => setHeld(chip)}>
          <img src={stillForClass(chip.id, chip.domain)} alt="" className="h-16 w-24 rounded-md object-cover" />
          <div>
            <p className="font-serif text-xl">{chip.title}</p>
            <p className="text-sm text-fg-subtle">Tap, then drop on a bucket</p>
          </div>
        </button>
      ) : (
        <button type="button" className="sp-btn sp-btn-primary" onClick={() => setLeft(shuffle(topics).slice(0, 8))}>New chips</button>
      )}
      <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
        {[1, 2, 3, 4, 5, 6, 7].map((d) => (
          <button key={d} type="button" className="game-sign px-3 py-4 text-left" onClick={() => drop(d)}>
            <p className="font-mono text-xs tracking-[0.14em] text-[#f0d24a]">D{d} ZONE</p>
            <p className="mt-1 font-serif text-lg">{DOMAIN_SHORT[d as keyof typeof DOMAIN_SHORT]}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

function PyramidBoard({ onHit, onMiss }: { onHit: () => void; onMiss: () => void }) {
  const [order, setOrder] = useState<string[]>([]);
  const [bag, setBag] = useState(() => shuffle([...ROWS]));

  function place(label: string) {
    if (order.includes(label)) return;
    const next = [...order, label];
    setOrder(next);
    setBag((rows) => rows.filter((row) => row !== label));
    if (next.length === 5) {
      if (next.every((name, i) => name === ROWS[i])) onHit();
      else onMiss();
    }
  }

  return (
    <div className="space-y-5">
      <p className="text-sm text-fg-muted">Stack from the top. Elimination first.</p>
      <div className="grid gap-2">
        {ROWS.map((label, i) => (
          <div key={label} className="pyramid-row text-sm" style={{ width: `${100 - i * 12}%`, marginInline: "auto", opacity: order[i] ? 1 : 0.35 }}>
            {order[i] ?? "—"}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {bag.map((label) => (
          <button key={label} type="button" className="sp-btn sp-btn-primary" onClick={() => place(label)}>
            {label}
          </button>
        ))}
      </div>
      {order.length === 5 ? (
        <button type="button" className="sp-btn sp-btn-ghost" onClick={() => { setOrder([]); setBag(shuffle([...ROWS])); }}>
          Reset stack
        </button>
      ) : null}
    </div>
  );
}

function SnapBoard({ topics, onHit, onMiss }: { topics: CatalogEntry[]; onHit: () => void; onMiss: () => void }) {
  const [pair, setPair] = useState(() => [topics[0], topics[1]] as [CatalogEntry | undefined, CatalogEntry | undefined]);

  function deal() {
    const a = topics[Math.floor(Math.random() * topics.length)];
    const b = topics[Math.floor(Math.random() * topics.length)];
    setPair([a, b]);
  }

  function snap(same: boolean) {
    if (!pair[0] || !pair[1]) return;
    const truth = pair[0].domain === pair[1].domain;
    if (same === truth) onHit();
    else onMiss();
    deal();
  }

  if (!pair[0] || !pair[1]) return <p>Need more topics on this track.</p>;

  return (
    <div className="space-y-4">
      <p className="text-sm text-fg-muted">Same domain? Snap fast.</p>
      <div className="grid gap-3 sm:grid-cols-2">
        {pair.map((row) => (
          <article key={row!.id} className="sp-card overflow-hidden">
            <img src={stillForClass(row!.id, row!.domain)} alt="" className="aspect-video w-full object-cover" />
            <p className="p-4 font-serif text-xl">{row!.title}</p>
          </article>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        <button type="button" className="sp-btn sp-btn-primary" onClick={() => snap(true)}>Same domain</button>
        <button type="button" className="sp-btn sp-btn-ghost" onClick={() => snap(false)}>Different</button>
      </div>
      <p className="text-xs text-fg-subtle">
        <Link to="/learn/$id" params={{ id: String(pair[0].id) }}>Open {pair[0].title}</Link>
      </p>
    </div>
  );
}

const SIGNS = [
  { text: "Remove the solvent from the process.", row: "Elimination" },
  { text: "Swap to an aqueous cleaner.", row: "Substitution" },
  { text: "Put a guard on the nip.", row: "Engineering" },
  { text: "Write a permit and rotate the crew.", row: "Administrative" },
  { text: "Issue cartridges and hope they fit.", row: "PPE" },
];

function SignBoard({ onHit, onMiss }: { onHit: () => void; onMiss: () => void }) {
  const [i, setI] = useState(0);
  const sign = SIGNS[i % SIGNS.length]!;

  return (
    <div className="space-y-5">
      <p className="text-sm text-[#cfe3d4]">Read the plant sign. Tap the row it belongs to.</p>
      <div className="game-sign mx-auto max-w-lg px-6 py-8 text-center">
        <p className="font-mono text-xs tracking-[0.2em] text-[#f0d24a]">FIELD SIGN</p>
        <p className="mt-3 font-serif text-2xl leading-snug">{sign.text}</p>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {ROWS.map((row) => (
          <button
            key={row}
            type="button"
            className="sp-btn sp-btn-primary"
            onClick={() => {
              if (row === sign.row) onHit();
              else onMiss();
              setI((n) => n + 1);
            }}
          >
            {row}
          </button>
        ))}
      </div>
    </div>
  );
}
