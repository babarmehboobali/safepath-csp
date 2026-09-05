import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Shell } from "@/components/lesson/Shell";
import { readSession, writeSession, type IndustryId, type TrackId } from "@/lib/safepath/session";

export const Route = createFileRoute("/onboarding")({ component: Onboarding });

function Onboarding() {
  const navigate = useNavigate();
  const session = readSession();
  const [track, setTrack] = useState<TrackId>(session.track);
  const [industry, setIndustry] = useState<IndustryId>(session.industry);

  return (
    <Shell>
      <div className="sp-wrap max-w-2xl space-y-6">
        <div>
          <p className="sp-kicker">Onboarding</p>
          <h1 className="sp-title mt-2 text-4xl">Pick a track. Then pick a field skin.</h1>
        </div>
        <div className="flex flex-wrap gap-2">
          {(["compact", "recommended", "maximum"] as TrackId[]).map((id) => (
            <button key={id} type="button" className={`sp-btn ${track === id ? "sp-btn-primary" : "sp-btn-ghost"}`} onClick={() => setTrack(id)}>
              {id}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {([["general", "Field"], ["oil", "Oil and gas"], ["build", "Construction"]] as [IndustryId, string][]).map(([id, label]) => (
            <button key={id} type="button" className={`sp-btn ${industry === id ? "sp-btn-primary" : "sp-btn-ghost"}`} onClick={() => setIndustry(id)}>
              {label}
            </button>
          ))}
        </div>
        <button
          type="button"
          className="sp-btn sp-btn-primary"
          onClick={() => {
            writeSession({ ...readSession(), track, industry });
            navigate({ to: "/today" });
          }}
        >
          Save and open today
        </button>
      </div>
    </Shell>
  );
}
