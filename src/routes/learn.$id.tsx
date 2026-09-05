import { createFileRoute, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Shell } from "@/components/lesson/Shell";
import { LessonStudio } from "@/components/lesson/LessonStudio";
import type { ClassPack } from "@/content/classes/types";
import { CATALOG } from "@/lib/safepath/catalog";

export const Route = createFileRoute("/learn/$id")({
  component: Learn,
});

function Learn() {
  const { id } = Route.useParams();
  const classId = Number(id);
  const entry = CATALOG.find((row) => row.id === classId);
  const [pack, setPack] = useState<ClassPack | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let live = true;
    setPack(null);
    setFailed(false);
    import("@/content/classes")
      .then((mod) => {
        if (!live) return;
        const next = mod.CLASS_PACKS[classId];
        if (!next) setFailed(true);
        else setPack(next);
      })
      .catch(() => {
        if (live) setFailed(true);
      });
    return () => {
      live = false;
    };
  }, [classId]);

  if (!entry) throw notFound();
  if (failed) throw notFound();
  if (!pack) {
    return (
      <Shell>
        <div className="sp-wrap">
          <p className="sp-kicker">Class {classId}</p>
          <h1 className="sp-title mt-2 text-3xl">{entry.title}</h1>
          <p className="mt-3 text-fg-muted">Loading the class packet…</p>
        </div>
      </Shell>
    );
  }
  const next = CATALOG.find((row) => row.id === classId + 1);
  return (
    <Shell>
      <LessonStudio entry={entry} pack={pack} nextId={next?.id} />
    </Shell>
  );
}
