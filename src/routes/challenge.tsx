import { createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import { Shell } from "@/components/lesson/Shell";
import { QuestionSet } from "@/components/lesson/QuestionSet";
import { bankForTrack } from "@/lib/safepath/bank";
import { readSession } from "@/lib/safepath/session";

export const Route = createFileRoute("/challenge")({ component: Challenge });

function Challenge() {
  const items = useMemo(() => {
    const bank = bankForTrack(readSession().track);
    const expert = bank.filter((row) => row.item.difficulty === "Expert" || row.item.difficultyLevel === "Advanced Engineering");
    return (expert.length ? expert : bank).slice(0, 12);
  }, []);
  return (
    <Shell>
      <div className="sp-wrap space-y-6">
        <div>
          <p className="sp-kicker">Challenge deck</p>
          <h1 className="sp-title mt-2 text-4xl">Expert items only.</h1>
          <p className="mt-2 text-fg-muted">Use after a clean diagnostic. Still original SafePath items.</p>
        </div>
        <QuestionSet items={items} />
      </div>
    </Shell>
  );
}
