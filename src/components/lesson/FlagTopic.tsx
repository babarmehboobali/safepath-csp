import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { isClassFlagged, toggleFlaggedClass } from "@/lib/safepath/session";
import { CATALOG } from "@/lib/safepath/catalog";

export function FlagTopic({ classId }: { classId: number }) {
  const [flagged, setFlagged] = useState(false);
  const [count, setCount] = useState(0);
  const entry = CATALOG.find((row) => row.id === classId);

  useEffect(() => {
    const session = window.setTimeout(() => {
      const raw = localStorage.getItem("safepath.studio.v1") || localStorage.getItem("safepath.studio");
      try {
        const parsed = raw ? JSON.parse(raw) : {};
        const ids = Array.isArray(parsed.flaggedClasses) ? parsed.flaggedClasses : [];
        setCount(ids.length);
      } catch { setCount(0); }
      setFlagged(isClassFlagged(classId));
    }, 0);
    return () => window.clearTimeout(session);
  }, [classId]);

  if (!entry) return null;

  function toggle() {
    const next = toggleFlaggedClass(classId);
    setFlagged(next.flaggedClasses.includes(classId));
    setCount(next.flaggedClasses.length);
  }

  return (
    <div className="sp-flag-topic" aria-label="Review focus">
      <button type="button" className={`sp-flag-button ${flagged ? "is-flagged" : ""}`} onClick={toggle} aria-pressed={flagged} title={flagged ? "Remove this topic from review focus" : "Flag this topic for future review"}>
        <span className="sp-flag-icon" aria-hidden="true">{flagged ? "★" : "☆"}</span>
        <span>{flagged ? "Flagged for review" : "Flag for review"}</span>
      </button>
      {count > 0 ? <Link to="/studio" className="sp-flag-count">{count} topic{count === 1 ? "" : "s"} flagged</Link> : null}
    </div>
  );
}
