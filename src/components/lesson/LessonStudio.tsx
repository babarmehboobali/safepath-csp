import { useEffect, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import type { ClassPack } from "@/content/classes/types";
import type { CatalogEntry } from "@/lib/safepath/catalog";
import { CSP_DOMAIN_NAMES } from "@/lib/safepath/domains";
import { mediaForClass } from "@/lib/safepath/media";
import { lessonIsProper } from "@/lib/safepath/readiness";
import { markComplete, readSession, recordDrill, touchLesson } from "@/lib/safepath/session";
import { topicFor } from "@/lib/safepath/topic";
import { DefinedText } from "./DefinedText";
import { DiagramForClass } from "./Diagrams";
import { practicalFor } from "@/lib/safepath/practical";
import { PracticalWalk } from "./PracticalWalk";
import { Drill } from "./Drill";
import { Clip, MediaQualityPicker } from "./Clip";
import { LANG_META, type GlossLang } from "@/lib/safepath/glossary";

type Slide = "scene" | "rule" | "picture" | "practical" | "case" | "must" | "notes" | "drill";
type Industry = "general" | "oil" | "build";
type NoteLevel = "full" | "brief" | "standard" | "deep";

const SLIDES: { id: Slide; label: string; railLabel: string }[] = [
  { id: "scene", label: "Scene", railLabel: "Scene" },
  { id: "rule", label: "Rule", railLabel: "Rule" },
  { id: "picture", label: "Model", railLabel: "Model" },
  { id: "practical", label: "Practical", railLabel: "Practical" },
  { id: "case", label: "Worked", railLabel: "Worked example" },
  { id: "must", label: "Essentials", railLabel: "Exam essentials" },
  { id: "notes", label: "Notes", railLabel: "Study notes" },
  { id: "drill", label: "Drill", railLabel: "Knowledge drill" },
];

function cleanNote(raw: string) {
  return raw
    .replace(/â/g, "—")
    .replace(/â/g, "–")
    .replace(/â¢/g, "•")
    .replace(/â/g, "→")
    .replace(/â¥/g, "≥")
    .replace(/â¤/g, "≤")
    .replace(/Ã—/g, "×")
    .replace(/Ã·/g, "÷")
    .replace(/Â½/g, "½")
    .replace(/Â°/g, "°")
    .replace(/Â/g, "")
    .replace(/\r/g, "")
    .trim();
}

function noteSections(raw: string) {
  const text = cleanNote(raw);
  const marks = ["Rule", "Field move", "Field context", "Core rule:", "Exam move", "Must-score", "Teach-back"];
  const hits: { title: string; at: number }[] = [];
  for (const title of marks) {
    const at = text.indexOf(title);
    if (at >= 0) hits.push({ title, at });
  }
  hits.sort((a, b) => a.at - b.at);
  if (!hits.length) return [{ title: "Read", body: text }];
  const out: { title: string; body: string }[] = [];
  if (hits[0]!.at > 0) out.push({ title: "Lead", body: text.slice(0, hits[0]!.at).trim() });
  hits.forEach((hit, i) => {
    const end = hits[i + 1]?.at ?? text.length;
    out.push({ title: hit.title.replace(":", ""), body: text.slice(hit.at + hit.title.length, end).trim() });
  });
  return out.filter((row) => row.body);
}

function paragraphs(body: string) {
  const text = cleanNote(body);
  const rows = text
    .split(/\n{2,}/)
    .flatMap((row) => row.split(/\n(?=\s*(?:\d+[.)]|[•●▪◦]|[-–—])\s+)/))
    .map((row) => row.trim())
    .filter(Boolean);
  return rows.length ? rows : [text];
}

function parseList(raw: string): string[] {
  try {
    const v = JSON.parse(raw || "[]");
    return Array.isArray(v) ? v.map(String).map(cleanNote).filter(Boolean) : [];
  } catch {
    return [];
  }
}

function parseContrast(raw: string): { looksLike: string; actually: string }[] {
  try {
    const v = JSON.parse(raw || "[]");
    return Array.isArray(v) ? v : [];
  } catch {
    return [];
  }
}

function NoteArticle({ level, raw, fallback, lang, dictOn }: { level: NoteLevel; raw: string; fallback: string; lang: GlossLang; dictOn: boolean }) {
  const sections = noteSections(raw || fallback);
  const label = level === "brief" ? "Brief" : level === "standard" ? "Standard" : level === "deep" ? "Deep" : "Full study packet";
  const blocks = sections.length
    ? sections.map((row) => ({ ...row, title: row.title === "Read" ? label : row.title }))
    : [{ title: label, body: cleanNote(raw || fallback) }];

  return (
    <article className="sp-notes-article">
      <div className="sp-notes-reading-intro">
        <span className="sp-notes-reading-icon" aria-hidden="true">▤</span>
        <div>
          <p className="sp-kicker">Focused reading</p>
          <p className="sp-notes-reading-title">Read this class as a sequence of ideas, not a wall of text.</p>
        </div>
      </div>
      {blocks.map((block, i) => {
        const paras = paragraphs(block.body);
        const lead = i === 0 ? paras[0] : undefined;
        const rest = i === 0 ? paras.slice(1) : paras;
        return (
          <section key={`${block.title}-${i}`} className="sp-note-section">
            <header className="sp-note-section-header">
              <span className="sp-note-index">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <p className="sp-kicker">Study section</p>
                <h3>{block.title}</h3>
              </div>
            </header>
            {lead ? (
              <p className="sp-note-lead">
                <DefinedText text={lead} lang={lang} enabled={dictOn} />
              </p>
            ) : null}
            <div className="sp-note-prose">
              {rest.map((p) => (
                <p key={p.slice(0, 72)}>
                  <DefinedText text={p} lang={lang} enabled={dictOn} />
                </p>
              ))}
            </div>
          </section>
        );
      })}
    </article>
  );
}

export function LessonStudio({ entry, pack, nextId }: { entry: CatalogEntry; pack: ClassPack; nextId?: number }) {
  const [slide, setSlide] = useState<Slide>("scene");
  const [industry, setIndustry] = useState<Industry>("general");
  const [noteLang, setNoteLang] = useState<GlossLang>("en");
  const [dictOn, setDictOn] = useState(true);
  const [noteLevel, setNoteLevel] = useState<NoteLevel>(() => {
    const track = readSession().track;
    if (track === "compact") return "brief";
    if (track === "maximum") return "full";
    return "standard";
  });
  const [doneMsg, setDoneMsg] = useState<string | null>(null);

  useEffect(() => {
    touchLesson(entry.id, slide);
  }, [entry.id, slide]);

  const media = mediaForClass(entry.id, entry.domain);
  const must = useMemo(() => parseList(pack.classFields.mustScoreJson || "[]"), [pack]);
  const traps = useMemo(() => parseList(pack.classFields.trapsJson), [pack]);
  const contrast = useMemo(() => parseContrast(pack.classFields.contrastJson), [pack]);
  const ifThen = useMemo(() => {
    try {
      const v = JSON.parse(pack.classFields.stemIfThenJson || "[]");
      return Array.isArray(v) ? (v as { ifStem: string; pick: string }[]) : [];
    } catch {
      return [];
    }
  }, [pack]);
  const idx = SLIDES.findIndex((s) => s.id === slide);
  const topic = topicFor(entry, pack.classFields.rule);
  const hook =
    industry === "oil" ? pack.classFields.hookOilGas : industry === "build" ? pack.classFields.hookConstruction : pack.classFields.hook;

  function goToSlide(id: Slide) {
    setDoneMsg(null);
    setSlide(id);
    window.requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  function finishClass() {
    const row = readSession().lessons[entry.id];
    if (!lessonIsProper(row)) {
      setDoneMsg("Not yet. Open every slide and finish the drill at 70% or better.");
      return;
    }
    markComplete(entry.id);
    setDoneMsg("Class recorded as properly complete.");
  }

  const current = SLIDES[idx] ?? SLIDES[0]!;

  return (
    <div className="sp-wrap sp-lesson-workspace">
      <div className="sp-lesson-main">
        <div className="sp-lesson-header">
          <div className="sp-lesson-heading">
            <p className="sp-kicker">Class {entry.id} · D{entry.domain} · {entry.taskCode}</p>
            <h1 className="sp-title">{entry.title}</h1>
            <p className="sp-lesson-domain">{CSP_DOMAIN_NAMES[entry.domain as keyof typeof CSP_DOMAIN_NAMES]}</p>
          </div>
          <div className="sp-industry-switcher" aria-label="Industry context">
            {(["general", "oil", "build"] as const).map((id) => (
              <button key={id} type="button" className={`sp-context-pill ${industry === id ? "is-active" : ""}`} onClick={() => setIndustry(id)}>
                {id === "general" ? "Plant" : id === "oil" ? "Oil & gas" : "Build"}
              </button>
            ))}
          </div>
        </div>

        <div className="sp-lesson-stepper" aria-label="Class sections">
          {SLIDES.map((row, i) => (
            <button key={row.id} type="button" className={`sp-step-button ${slide === row.id ? "is-active" : ""} ${i < idx ? "is-visited" : ""}`} onClick={() => goToSlide(row.id)}>
              <span className="sp-step-number">{String(i + 1).padStart(2, "0")}</span>
              <span>{row.label}</span>
            </button>
          ))}
          <MediaQualityPicker />
        </div>

        <section className="sp-card sp-lesson-card">
          {slide === "scene" ? (
            <div>
              {media.video ? <Clip src={media.video} poster={media.still} title="scene" /> : <img src={media.still} alt="" className="sp-clip-el" />}
              <div className="sp-scene-copy">
                <p className="sp-kicker">Scene · Class {entry.id} · {entry.title}</p>
                <p className="sp-scene-hook">{hook}</p>
                <p className="sp-supporting-text">{media.caption}</p>
              </div>
            </div>
          ) : null}

          {slide === "rule" ? (
            <div className="sp-content-panel">
              <p className="sp-kicker">Core principle</p>
              <p className="sp-hero-statement">{pack.classFields.rule}</p>
              <div className="sp-explanation-card"><span className="sp-explanation-icon" aria-hidden="true">◆</span><div><p className="sp-kicker">Why it matters</p><p>{topic.thesis}</p></div></div>
            </div>
          ) : null}

          {slide === "picture" ? (
            <div className="sp-content-panel">
              <p className="sp-kicker">Mental model</p>
              <img src={media.modelStill || media.still} alt="" className="sp-model-image" />
              <p className="sp-model-caption">{pack.classFields.modelCaption}</p>
              <DiagramForClass classId={entry.id} />
            </div>
          ) : null}

          {slide === "practical" ? (
            practicalFor(entry.id, entry.title, pack.classFields.rule) ? (
              <PracticalWalk pack={practicalFor(entry.id, entry.title, pack.classFields.rule)!} />
            ) : (
              <div className="sp-content-panel">
                <p className="sp-kicker">Field application</p>
                <p className="sp-hero-statement">Apply the principle before adding another control.</p>
                <p className="sp-supporting-text">Use Scene and Model to identify where the hazard can be eliminated or reduced at source.</p>
                {media.video ? <Clip src={media.video} poster={media.still} title="practical" /> : <img src={media.still} alt="" className="sp-clip-el sp-rounded-media" />}
              </div>
            )
          ) : null}

          {slide === "case" ? (
            <div className="sp-content-panel">
              <div className="sp-section-heading-row"><div><p className="sp-kicker">Worked example</p><h2>Think like the CSP</h2></div><span className="sp-section-badge">Apply</span></div>
              <div className="sp-case-scenario"><p>{pack.classFields.workedCase}</p></div>
              {traps.length ? <div className="sp-case-grid">{traps.map((trap, i) => <div key={trap} className="sp-case-point"><span>{String(i + 1).padStart(2, "0")}</span><p>{trap}</p></div>)}</div> : null}
              {contrast.length ? <div className="sp-contrast-grid">{contrast.map((row) => <div key={`${row.looksLike}-${row.actually}`}><p className="sp-kicker">Looks like</p><p>{row.looksLike}</p><p className="sp-kicker">Actually</p><p>{row.actually}</p></div>)}</div> : null}
            </div>
          ) : null}

          {slide === "must" ? (
            <div className="sp-content-panel">
              <div className="sp-section-heading-row"><div><p className="sp-kicker">High-value recall</p><h2>CSP Exam Essentials</h2><p className="sp-section-subtitle">The points you should be able to recall, explain, and apply under exam pressure.</p></div><span className="sp-section-badge">{must.length} points</span></div>
              <div className="sp-essentials-list">
                {must.map((row, i) => (
                  <div key={row} className="sp-essential-item"><span className="sp-essential-number">{String(i + 1).padStart(2, "0")}</span><span className="sp-essential-check" aria-hidden="true">✓</span><p>{row}</p></div>
                ))}
              </div>
              {ifThen.length ? <div className="sp-application-strip"><p className="sp-kicker">Exam decision pattern</p>{ifThen.map((row) => <p key={`${row.ifStem}-${row.pick}`}><strong>If:</strong> {row.ifStem} <strong>→ Pick:</strong> {row.pick}</p>)}</div> : null}
            </div>
          ) : null}

          {slide === "notes" ? (
            <div className="sp-notes-panel">
              <div className="sp-notes-toolbar">
                <div><p className="sp-kicker">Study notes · D{entry.domain} · {topic.weight}%</p><h2>Master the concept</h2><p>{topic.thesis}</p></div>
                <div className="sp-notes-controls">
                  <button type="button" className={`sp-control-button ${dictOn ? "is-active" : ""}`} onClick={() => setDictOn((v) => !v)}>Dictionary {dictOn ? "on" : "off"}</button>
                  <label className="sp-language-field"><span>Language</span><select className="sp-field" value={noteLang} onChange={(e) => setNoteLang(e.target.value as GlossLang)} disabled={!dictOn}>{(Object.keys(LANG_META) as GlossLang[]).map((id) => <option key={id} value={id}>{LANG_META[id].label}</option>)}</select></label>
                </div>
              </div>
              <div className="sp-reading-modes" aria-label="Note depth">
                {(["brief", "standard", "deep", "full"] as const).map((id) => <button key={id} type="button" className={`sp-reading-mode ${noteLevel === id ? "is-active" : ""}`} onClick={() => setNoteLevel(id)}>{id === "full" ? "Full packet" : id[0]!.toUpperCase() + id.slice(1)}<small>{id === "brief" ? "Quick review" : id === "standard" ? "Recommended" : id === "deep" ? "Deep study" : "Everything"}</small></button>)}
              </div>
              <NoteArticle level={noteLevel === "full" ? "deep" : noteLevel} lang={noteLang} dictOn={dictOn} raw={noteLevel === "brief" ? pack.classFields.brief : noteLevel === "standard" ? pack.classFields.standard : noteLevel === "deep" ? pack.classFields.deep : [pack.classFields.brief, pack.classFields.standard, pack.classFields.deep].join("\n\nCore rule:\n")} fallback={pack.classFields.rule} />
            </div>
          ) : null}

          {slide === "drill" ? (
            <div className="sp-content-panel">
              <div className="sp-section-heading-row"><div><p className="sp-kicker">Retrieval practice</p><h2>Prove you can use it</h2><p className="sp-section-subtitle">Answer first. Review the coach explanation second. This turns recognition into recall.</p></div><span className="sp-section-badge">70%+</span></div>
              <Drill items={pack.items} onDone={(score, total) => recordDrill(entry.id, score, total)} />
              <article className="sp-coach-card"><span className="sp-coach-mark">✦</span><div><p className="sp-kicker">Coach cue</p><p className="sp-coach-title">Why before what.</p><p>{pack.classFields.rule}</p><p className="sp-supporting-text">{pack.classFields.teachBackKey}</p></div></article>
            </div>
          ) : null}
        </section>

        <div className="sp-lesson-footer">
          <button type="button" className="sp-btn sp-btn-ghost" disabled={idx === 0} onClick={() => goToSlide(SLIDES[Math.max(0, idx - 1)]!.id)}>← Back</button>
          <div className="sp-progress-indicator"><span className="sp-progress-count">Step {idx + 1} of {SLIDES.length}</span><span className="sp-progress-track"><span style={{ width: `${((idx + 1) / SLIDES.length) * 100}%` }} /></span></div>
          {idx < SLIDES.length - 1 ? <button type="button" className="sp-btn sp-btn-primary" onClick={() => goToSlide(SLIDES[idx + 1]!.id)}>Continue →</button> : <div className="sp-footer-actions"><button type="button" className="sp-btn sp-btn-ghost" onClick={finishClass}>Mark complete</button>{nextId ? <Link to="/learn/$id" params={{ id: String(nextId) }} className="sp-btn sp-btn-primary">Next class →</Link> : <Link to="/studio" className="sp-btn sp-btn-primary">Return to study →</Link>}</div>}
        </div>
        {doneMsg ? <p className="sp-completion-message">{doneMsg}</p> : null}
      </div>

      <aside className="sp-lesson-rail" aria-label="Class navigation">
        <div className="sp-rail-card sp-rail-toc">
          <div className="sp-rail-heading"><span className="sp-rail-heading-mark">▤</span><div><p className="sp-kicker">Class map</p><h2>On this class</h2></div></div>
          <nav>
            {SLIDES.map((row, i) => <button key={row.id} type="button" className={slide === row.id ? "is-active" : ""} onClick={() => goToSlide(row.id)}><span>{String(i + 1).padStart(2, "0")}</span>{row.railLabel}</button>)}
          </nav>
        </div>
        <div className="sp-rail-card sp-rail-tip"><span className="sp-rail-icon">✦</span><div><p className="sp-rail-card-title">Study tip</p><p>Ask: “Can I remove the hazard at the source?” before reaching for PPE.</p></div></div>
        <div className="sp-rail-card sp-rail-remember"><span className="sp-rail-icon">◈</span><div><p className="sp-rail-card-title">Remember</p><p>Good design removes or reduces risk; it does not simply add another layer of PPE.</p></div></div>
        <div className="sp-rail-card sp-rail-next"><p className="sp-kicker">Next best action</p><p className="sp-rail-next-title">{current.id === "drill" ? "Finish the drill and record your result." : `Continue to ${SLIDES[Math.min(idx + 1, SLIDES.length - 1)]!.railLabel}.`}</p><button type="button" className="sp-rail-next-button" onClick={() => goToSlide(SLIDES[Math.min(idx + 1, SLIDES.length - 1)]!.id)}>{idx === SLIDES.length - 1 ? "Review again" : "Continue"} →</button></div>
      </aside>
    </div>
  );
}
