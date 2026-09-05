import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Shell } from "@/components/lesson/Shell";
import { readSession, signOut, writeSession, type IndustryId, type TrackId } from "@/lib/safepath/session";

export const Route = createFileRoute("/account")({ component: Account });

function Account() {
  const navigate = useNavigate();
  const [session, setSession] = useState(readSession());

  useEffect(() => {
    setSession(readSession());
  }, []);

  function save(patch: Partial<typeof session>) {
    const next = { ...readSession(), ...patch };
    writeSession(next);
    setSession(next);
  }

  return (
    <Shell>
      <div className="sp-wrap max-w-2xl space-y-6">
        <div>
          <p className="sp-kicker">Account</p>
          <h1 className="sp-title mt-2 text-4xl">Seat and plan.</h1>
        </div>
        <form
          className="sp-card space-y-3 p-6"
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            save({
              name: String(fd.get("name") || session.name),
              email: String(fd.get("email") || session.email).trim().toLowerCase(),
            });
          }}
        >
          <label className="block text-sm">
            Name
            <input name="name" defaultValue={session.name} className="sp-field mt-1" />
          </label>
          <label className="block text-sm">
            Email
            <input name="email" type="email" defaultValue={session.email} className="sp-field mt-1" />
          </label>
          <p className="text-sm text-fg-muted">
            Agreement: {session.agreed ? "accepted" : "not yet accepted"}. Reset and login stay on this device until you
            publish the live account layer.
          </p>
          <button type="submit" className="sp-btn sp-btn-primary">Save</button>
        </form>
        <div className="sp-card space-y-3 p-6">
          <p className="font-medium">Track</p>
          <div className="flex flex-wrap gap-2">
            {(["compact", "recommended", "maximum"] as TrackId[]).map((track) => (
              <button
                key={track}
                type="button"
                className={`sp-btn ${session.track === track ? "sp-btn-primary" : "sp-btn-ghost"}`}
                onClick={() => save({ track })}
              >
                {track}
              </button>
            ))}
          </div>
          <p className="pt-2 font-medium">Field skin</p>
          <div className="flex flex-wrap gap-2">
            {([
              ["general", "Field"],
              ["oil", "Oil and gas"],
              ["build", "Construction"],
            ] as [IndustryId, string][]).map(([id, label]) => (
              <button
                key={id}
                type="button"
                className={`sp-btn ${session.industry === id ? "sp-btn-primary" : "sp-btn-ghost"}`}
                onClick={() => save({ industry: id })}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        <button
          type="button"
          className="sp-btn sp-btn-ghost"
          onClick={() => {
            signOut();
            navigate({ to: "/" });
          }}
        >
          Sign out
        </button>
      </div>
    </Shell>
  );
}
