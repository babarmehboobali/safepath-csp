import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Shell } from "@/components/lesson/Shell";
import { readSession, signOut, writeSession, type IndustryId, type TrackId } from "@/lib/safepath/session";
import { useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/settings")({ component: Settings });

function Settings() {
  const navigate = useNavigate();
  const [session, setSession] = useState(readSession());
  useEffect(() => setSession(readSession()), []);
  function save(patch: Partial<typeof session>) {
    const next = { ...readSession(), ...patch };
    writeSession(next);
    setSession(next);
  }
  return (
    <Shell>
      <div className="sp-wrap max-w-2xl space-y-6">
        <div>
          <p className="sp-kicker">Settings</p>
          <h1 className="sp-title mt-2 text-4xl">Same seat controls as Account.</h1>
        </div>
        <div className="flex flex-wrap gap-2">
          {(["compact", "recommended", "maximum"] as TrackId[]).map((track) => (
            <button key={track} type="button" className={`sp-btn ${session.track === track ? "sp-btn-primary" : "sp-btn-ghost"}`} onClick={() => save({ track })}>
              {track}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {([["general", "Field"], ["oil", "Oil and gas"], ["build", "Construction"]] as [IndustryId, string][]).map(([id, label]) => (
            <button key={id} type="button" className={`sp-btn ${session.industry === id ? "sp-btn-primary" : "sp-btn-ghost"}`} onClick={() => save({ industry: id })}>
              {label}
            </button>
          ))}
        </div>
        <button type="button" className="sp-btn sp-btn-ghost" onClick={() => { signOut(); navigate({ to: "/" }); }}>
          Sign out
        </button>
      </div>
    </Shell>
  );
}
