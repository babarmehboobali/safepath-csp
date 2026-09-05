import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Shell } from "@/components/lesson/Shell";
import { QuestionSet } from "@/components/lesson/QuestionSet";
import { bankForTrack, nextOpenClass } from "@/lib/safepath/bank";
import { stillForClass } from "@/lib/safepath/media";
import { markStudy, readSession, streakCount } from "@/lib/safepath/session";

export const Route = createFileRoute("/today")({ component: Today });

function Today() {
  const [session, setSession] = useState(readSession());
  useEffect(() => {
    setSession(markStudy());
  }, []);
  const next = nextOpenClass(session.completed, session.track);
  const qotd = useMemo(() => {
    const bank = bankForTrack(session.track);
    if (!bank.length) return [];
    const idx = new Date().getUTCDate() % bank.length;
    return [bank[idx]!];
  }, [session.track]);

  return (
    <Shell>
      <div className="sp-wrap space-y-8">
        <div>
          <p className="sp-kicker">Today</p>
          <h1 className="sp-title mt-2 text-4xl">One class. One item. Keep the streak.</h1>
          <p className="mt-2 text-fg-muted">{streakCount(session.studyDates)}-day study streak on this device.</p>
        </div>
        {next ? (
          <Link to="/learn/$id" params={{ id: String(next.id) }} className="sp-card grid overflow-hidden text-inherit no-underline lg:grid-cols-2">
            <img src={stillForClass(next.id, next.domain)} alt="" className="aspect-video w-full object-cover" />
            <div className="p-6">
              <p className="sp-kicker">Today’s class</p>
              <p className="mt-2 font-serif text-3xl">{next.title}</p>
              <p className="mt-2 text-sm text-fg-muted">Class {next.id} · {next.taskCode}</p>
            </div>
          </Link>
        ) : null}
        <div>
          <p className="sp-kicker">Question of the day</p>
          <div className="mt-3">
            <QuestionSet items={qotd} />
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link to="/warmup" className="sp-btn sp-btn-ghost">Warm-up</Link>
          <Link to="/cards" className="sp-btn sp-btn-ghost">Cards</Link>
          <Link to="/assess" className="sp-btn sp-btn-primary">Self-assessment</Link>
        </div>
      </div>
    </Shell>
  );
}
