import { classCountForTrack } from "@/lib/safepath/catalog";
import { readSession, writeSession, type TrackId } from "@/lib/safepath/session";

const TRACKS: { id: TrackId; title: string; range: string; line: string }[] = [
  { id: "compact", title: "Compact · 47", range: "All 7 domains · 47 classes", line: "Same domains, shorter list. About 12/12/7/4/3/5/4 classes across D1–D7. Notes stay precise." },
  { id: "recommended", title: "Recommended · 78", range: "All 7 domains · 78 classes", line: "Full core in every domain. Standard notes. No extra labs." },
  { id: "maximum", title: "Deep · 130", range: "All 7 domains · 130 classes", line: "Core plus labs. Full packet notes on every topic." },
];

export function TrackPicker({
  track,
  onChange,
}: {
  track: TrackId;
  onChange: (track: TrackId) => void;
}) {
  function pick(next: TrackId) {
    const session = readSession();
    writeSession({ ...session, track: next });
    onChange(next);
  }

  const current = TRACKS.find((row) => row.id === track) ?? TRACKS[1]!;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {TRACKS.map((row) => (
          <button
            key={row.id}
            type="button"
            className={`sp-btn ${track === row.id ? "sp-btn-primary" : "sp-btn-ghost"}`}
            onClick={() => pick(row.id)}
          >
            {row.title}
          </button>
        ))}
      </div>
      <article className="sp-card space-y-2 p-5">
        <p className="sp-kicker">What this choice does</p>
        <p className="font-serif text-2xl">{current.range}</p>
        <p className="text-pretty text-fg-muted">{current.line}</p>
        <p className="text-sm text-fg-subtle">
          Every track keeps D1–D7. 47 / 78 / 130 is how many classes and how deep the notes go — not a delete. This seat uses {classCountForTrack(track)} packets.
        </p>
      </article>
    </div>
  );
}

export function labelForTrack(track: TrackId) {
  if (track === "compact") return "Compact";
  if (track === "maximum") return "Deep";
  return "Recommended";
}

export function bandForClass(id: number) {
  if (id <= 47) return "Compact";
  if (id <= 78) return "Recommended";
  return "Deep lab";
}
