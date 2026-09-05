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

const SLIDES: { id: Slide; label: string }[] = [
  { id: "scene", label: "Scene" },
  { id: "rule", label: "Rule" },
  { id: "picture", label: "Model" },
  { id: "practical", label: "Practical" },
  { id: "case", label: "Worked" },
  { id: "must", label: "Must-score" },
  { id: "notes", label: "Notes" },
  { id: "drill", label: "Drill" },
];

function cleanNote(raw: string) {
  return raw.replace(/â/g, "—").replace(/\s+/g, " ").trim();
}

function noteSections(raw: string) {
  const text = raw.replace(/â/g, "—");
  const marks = ["Rule", "Field move", "Field context", "Core rule:", "Exam move", "Must-score", "Teach-back"];
  const hits: { title: string; at: number }[] = [];
  for (const title of marks) {
    const at = text.indexOf(title);
    if (at >= 0) hits.push({ title, at });
  }
  hits.sort((a, b) => a.at - b.at);
  if (!hits.length) return [{ title: "Read", body: text.trim() }];
  const out: { title: string; body: string }[] = [];
  if (hits[0]!.at > 0) out.push({ title: "Lead", body: text.slice(0, hits[0]!.at).trim() });
  hits.forEach((hit, i) => {
    const end = hits[i + 1]?.at ?? text.length;
    out.push({ title: hit.title.replace(":", ""), body: text.slice(hit.at + hit.title.length).slice(0, end - hit.at - hit.title.length).trim() });
  });
  return out.filter((row) => row.body);
}

function paragraphs(body: string) {
  return body.split(/\n+/).map((row) => row.trim()).filter(Boolean);
}

function parseList(raw: string): string[] {
  try {
    const v = JSON.parse(raw || "[]");
    return Array.isArray(v) ? v.map(String) : [];
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
  const label = level === "brief" ? "Brief" : level === "standard" ? "Standard" : level === "deep" ? "Deep" : "Read";
  const blocks = sections.length
    ? sections.map((row) => ({ ...row, title: row.title === "Read" ? label : row.title }))
    : [{ title: label, body: cleanNote(raw || fallback) }];
  return (
    <article className="mx-auto max-w-2xl space-y-10">
      {blocks.map((block, i) => {
        const paras = paragraphs(block.body);
        const lead = i === 0 ? paras[0] : undefined;
        const rest = i === 0 ? paras.slice(1) : paras;
        return (
          <section key={`${block.title}-${i}`} className="space-y-4 border-t border-border pt-6 first:border-t-0 first:pt-0">
            <header className="space-y-1">
              <p className="sp-kicker">{String(i + 1).padStart(2, "0")}</p>
              <h2 className="text-balance font-serif text-3xl leading-tight">{block.title}</h2>
            </header>
            {lead ? (
              <p className="text-pretty font-serif text-xl leading-8 text-fg">
                <DefinedText text={lead} lang={lang} enabled={dictOn} />
              </p>
            ) : null}
            {rest.map((p) => (
              <p key={p.slice(0, 56)} className="text-pretty text-base leading-8 text-fg-muted">
                <DefinedText text={p} lang={lang} enabled={dictOn} />
              </p>
            ))}
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

  function finishClass() {
    const row = readSession().lessons[entry.id];
    if (!lessonIsProper(row)) {
      setDoneMsg("Not yet. Open every slide and finish the drill at 70% or better.");
      return;
    }
    markComplete(entry.id);
    setDoneMsg("Class recorded as properly complete.");
  }

  return (
    <div className="sp-wrap space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="sp-kicker">
            Class {entry.id} · D{entry.domain} · {entry.taskCode}
          </p>
          <h1 className="sp-title mt-2 text-3xl">{entry.title}</h1>
          <p className="mt-1 text-sm text-fg-muted">{CSP_DOMAIN_NAMES[entry.domain as keyof typeof CSP_DOMAIN_NAMES]}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {(["general", "oil", "build"] as const).map((id) => (
            <button key={id} type="button" className={`sp-btn px-3 text-sm ${industry === id ? "sp-btn-primary" : "sp-btn-ghost"}`} onClick={() => setIndustry(id)}>
              {id === "general" ? "Plant" : id === "oil" ? "Oil & gas" : "Build"}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {SLIDES.map((row) => (
          <button key={row.id} type="button" className={`sp-btn px-3 text-sm ${slide === row.id ? "sp-btn-primary" : "sp-btn-ghost"}`} onClick={() => setSlide(row.id)}>
            {row.label}
          </button>
        ))}
        <MediaQualityPicker />
      </div>

      <section className="sp-card overflow-hidden">
        {slide === "scene" ? (
          <div>
            {media.video ? (
              <Clip src={media.video} poster={media.still} title="scene" />
            ) : (
              <img src={media.still} alt="" className="sp-clip-el" />
            )}
            <div className="space-y-3 p-5 sm:p-7">
              <p className="sp-kicker">Scene · Class {entry.id} · {entry.title}</p>
              <p className="font-serif text-2xl leading-snug">{hook}</p>
              <p className="text-sm text-fg-muted">{media.caption}</p>
            </div>
          </div>
        ) : null}

        {slide === "rule" ? (
          <div className="space-y-4 p-5 sm:p-7">
            <p className="sp-kicker">Rule</p>
            <p className="font-serif text-3xl leading-tight">{pack.classFields.rule}</p>
            <p className="text-pretty leading-7">{topic.thesis}</p>
          </div>
        ) : null}

        {slide === "picture" ? (
          <div className="space-y-4 p-5 sm:p-7">
            <img src={media.modelStill || media.still} alt="" className="w-full bg-bg object-contain" />
            <p className="sp-kicker">Model · Class {entry.id} · {entry.title}</p>
            <p>{pack.classFields.modelCaption}</p>
            <DiagramForClass classId={entry.id} />
          </div>
        ) : null}

        {slide === "practical" ? (
          practicalFor(entry.id, entry.title, pack.classFields.rule) ? (
            <PracticalWalk pack={practicalFor(entry.id, entry.title, pack.classFields.rule)!} />
          ) : (
            <div className="space-y-3 p-5 sm:p-7">
              <p className="sp-kicker">Practical</p>
              <p className="font-serif text-2xl">Field walk for this class is next. Use Scene and Model until it lands.</p>
              {media.video ? (
                <Clip src={media.video} poster={media.still} title="practical" />
              ) : (
                <img src={media.still} alt="" className="sp-clip-el" />
              )}
            </div>
          )
        ) : null}

        {slide === "case" ? (
          <div className="space-y-4 p-5 sm:p-7">
            <p className="sp-kicker">Worked case</p>
            <p className="whitespace-pre-line leading-relaxed">{pack.classFields.workedCase}</p>
            <ul className="grid gap-2">
              {traps.map((trap) => (
                <li key={trap} className="rounded-lg border border-border bg-bg px-4 py-3 text-sm">{trap}</li>
              ))}
            </ul>
          </div>
        ) : null}

        {slide === "must" ? (
          <div className="space-y-3 p-5 sm:p-7">
            <p className="sp-kicker">Must-score</p>
            <ol className="grid gap-2">
              {must.map((row, i) => (
                <li key={row} className="rounded-lg border border-border bg-bg px-4 py-3">
                  <span className="mr-2 font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                  {row}
                </li>
              ))}
            </ol>
          </div>
        ) : null}

        {slide === "notes" ? (
          <div className="space-y-5 p-5 sm:p-8">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div className="max-w-2xl">
                <p className="sp-kicker">Notes · D{entry.domain} · {topic.weight}%</p>
                <h2 className="mt-2 font-serif text-3xl">{entry.title}</h2>
                <p className="mt-3 text-fg-muted">{topic.thesis}</p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <button type="button" className={`sp-btn px-3 text-sm ${dictOn ? "sp-btn-primary" : "sp-btn-ghost"}`} onClick={() => setDictOn((v) => !v)}>
                  Dictionary {dictOn ? "on" : "off"}
                </button>
                <label className="grid gap-1 text-xs text-fg-subtle">
                  Language
                  <select className="sp-field min-w-44 text-sm text-fg" value={noteLang} onChange={(e) => setNoteLang(e.target.value as GlossLang)} disabled={!dictOn}>
                    {(Object.keys(LANG_META) as GlossLang[]).map((id) => (
                      <option key={id} value={id}>{LANG_META[id].label}</option>
                    ))}
                  </select>
                </label>
                {(["full", "brief", "standard", "deep"] as const).map((id) => (
                  <button key={id} type="button" className={`sp-btn px-3 text-sm ${noteLevel === id ? "sp-btn-primary" : "sp-btn-ghost"}`} onClick={() => setNoteLevel(id)}>
                    {id === "full" ? "Full packet" : id[0]!.toUpperCase() + id.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <NoteArticle
              level={noteLevel === "full" ? "deep" : noteLevel}
              lang={noteLang}
              dictOn={dictOn}
              raw={
                noteLevel === "brief"
                  ? pack.classFields.brief
                  : noteLevel === "standard"
                    ? pack.classFields.standard
                    : noteLevel === "deep"
                      ? pack.classFields.deep
                      : [pack.classFields.brief, pack.classFields.standard, pack.classFields.deep].join("\nCore rule:\n")
              }
              fallback={pack.classFields.rule}
            />
          </div>
        ) : null}

        {slide === "drill" ? (
          <div className="space-y-5 p-5 sm:p-7">
            <Drill items={pack.items} onDone={(score, total) => recordDrill(entry.id, score, total)} />
            <article className="rounded-lg border border-border bg-bg p-5">
              <p className="sp-kicker">Coach</p>
              <p className="mt-2 font-serif text-2xl">Why before what.</p>
              <p className="mt-3 leading-7">{pack.classFields.rule}</p>
              <p className="mt-3 text-sm text-fg-muted">{pack.classFields.teachBackKey}</p>
            </article>
          </div>
        ) : null}
      </section>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <button type="button" className="sp-btn sp-btn-ghost" onClick={() => setSlide(SLIDES[Math.max(0, idx - 1)]!.id)}>Back</button>
        <p className="text-sm text-fg-muted">Step {idx + 1} of {SLIDES.length}</p>
        {idx < SLIDES.length - 1 ? (
          <button type="button" className="sp-btn sp-btn-primary" onClick={() => setSlide(SLIDES[idx + 1]!.id)}>Continue</button>
        ) : (
          <div className="flex flex-wrap gap-2">
            <button type="button" className="sp-btn sp-btn-ghost" onClick={finishClass}>Mark complete</button>
            {nextId ? (
              <Link to="/learn/$id" params={{ id: String(nextId) }} className="sp-btn sp-btn-primary">Next class</Link>
            ) : (
              <Link to="/studio" className="sp-btn sp-btn-primary">Return to studio</Link>
            )}
          </div>
        )}
      </div>
      {doneMsg ? <p className="text-sm text-fg-muted">{doneMsg}</p> : null}
    </div>
  );
}
