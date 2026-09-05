import { useState } from "react";
import { LANG_META, lookupTerm, missingNative, sense, type GlossLang } from "@/lib/safepath/glossary";

export function DefinedText({
  text,
  lang,
  enabled,
  className,
}: {
  text: string;
  lang: GlossLang;
  enabled: boolean;
  className?: string;
}) {
  const [active, setActive] = useState<{ word: string; x: number; y: number } | null>(null);
  if (!enabled) return <span className={className}>{text}</span>;
  const parts = text.split(/(\s+)/);

  return (
    <span className={className} dir={lang === "ar" || lang === "ur" ? "rtl" : "ltr"}>
      {parts.map((part, i) => {
        if (/^\s+$/.test(part)) return <span key={i}>{part}</span>;
        const hit = lookupTerm(part);
        return (
          <span
            key={`${part}-${i}`}
            role="button"
            tabIndex={0}
            className={hit ? "cursor-help rounded-sm border-b border-dotted border-accent" : "cursor-help"}
            onMouseEnter={(e) => setActive({ word: part, x: e.clientX, y: e.clientY })}
            onMouseLeave={() => setActive(null)}
            onClick={(e) => setActive({ word: part, x: e.clientX, y: e.clientY })}
          >
            {part}
          </span>
        );
      })}
      {active ? <GlossPop word={active.word} lang={lang} /> : null}
    </span>
  );
}

function GlossPop({ word, lang }: { word: string; lang: GlossLang }) {
  const hit = lookupTerm(word);
  const body = hit
    ? sense(hit.entry, lang)
    : lang === "ar"
      ? "لا يوجد تعريف تقني مخزن لهذه الكلمة."
      : lang === "ur"
        ? "اس لفظ کی تکنیکی تعریف محفوظ نہیں۔"
        : "No stored CSP definition for this word. Try PEL, TLV, LOTO, hierarchy, MoC.";
  return (
    <span className="fixed bottom-6 left-1/2 z-40 w-[min(36rem,calc(100%-2rem))] -translate-x-1/2 rounded-lg border border-border bg-bg-elevated p-4 shadow-xl" dir={LANG_META[lang].dir}>
      <span className="block font-mono text-xs uppercase tracking-[0.14em] text-accent">{word.replace(/[^a-zA-Z0-9/+\-]/g, "")}</span>
      <span className="mt-2 block text-sm leading-7">{body}</span>
      {hit && missingNative(hit.entry, lang) && lang !== "en" ? (
        <span className="mt-2 block text-xs text-fg-subtle">Native technical pack not stored yet. Showing English sense.</span>
      ) : null}
    </span>
  );
}

