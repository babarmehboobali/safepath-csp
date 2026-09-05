import { useEffect, useState } from "react";
import type { PracticalPack } from "@/lib/safepath/practical";

function speak(text: string, on: boolean) {
  if (!on || typeof window === "undefined" || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.rate = 0.95;
  window.speechSynthesis.speak(utter);
}

export function PracticalWalk({ pack }: { pack: PracticalPack }) {
  const [step, setStep] = useState(0);
  const [voice, setVoice] = useState(true);
  const row = pack.steps[step]!;

  useEffect(() => {
    speak(`${row.title}. ${row.say}`, voice);
    return () => window.speechSynthesis?.cancel();
  }, [step, voice, row.title, row.say]);

  return (
    <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
      <div>
        <img src={pack.still} alt="" className="w-full bg-[#f3f0e7] object-contain" />
        <video className="mt-3 aspect-video w-full object-contain bg-[#0c1c16]" autoPlay muted loop playsInline poster={pack.still} src={pack.video} />
        <p className="px-5 py-3 text-sm text-fg-muted">{row.look}</p>
      </div>
      <div className="space-y-4 p-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="sp-kicker">Practical {step + 1} / {pack.steps.length}</p>
          <button type="button" className={`sp-btn px-3 text-sm ${voice ? "sp-btn-primary" : "sp-btn-ghost"}`} onClick={() => setVoice((v) => !v)}>
            Voice {voice ? "on" : "off"}
          </button>
        </div>
        <p className="font-serif text-3xl leading-tight">{row.title}</p>
        <p className="text-pretty text-lg leading-8">{row.say}</p>
        <ol className="grid gap-2">
          {pack.steps.map((item, i) => (
            <li key={item.title}>
              <button type="button" className={`w-full rounded-md border px-3 py-2 text-left text-sm ${i === step ? "border-accent" : "border-border"}`} onClick={() => setStep(i)}>
                {String(i + 1).padStart(2, "0")} · {item.title}
              </button>
            </li>
          ))}
        </ol>
        <div className="flex gap-2">
          <button type="button" className="sp-btn sp-btn-ghost" onClick={() => setStep((n) => Math.max(0, n - 1))}>Back</button>
          <button type="button" className="sp-btn sp-btn-primary" onClick={() => setStep((n) => Math.min(pack.steps.length - 1, n + 1))}>Next step</button>
        </div>
      </div>
    </div>
  );
}
