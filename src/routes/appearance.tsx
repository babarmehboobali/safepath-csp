import { createFileRoute, Link } from "@tanstack/react-router";
import { ACCENT_COLORS, APPEARANCE_STYLES, useAppearance, type AppearanceId } from "@/components/AppearanceProvider";
import { Shell } from "@/components/lesson/Shell";

export const Route = createFileRoute("/appearance")({ component: Appearance });

function Appearance() {
  const { appearance, setAppearance, accent, setAccent } = useAppearance();
  const selected = APPEARANCE_STYLES.find((style) => style.id === appearance);

  return (
    <Shell>
      <div className="sp-wrap appearance-page">
        <div className="appearance-head">
          <div>
            <Link to="/account" className="appearance-back">← Account</Link>
            <p className="sp-kicker mt-5">Appearance studio</p>
            <h1 className="sp-title mt-2 text-4xl sm:text-5xl">Build your ideal study view.</h1>
            <p className="mt-3 max-w-2xl text-fg-muted">Choose a complete visual style, then tune its accent color. Your choices are saved on this device and apply across learning, practice, flashcards, dashboards, and account pages.</p>
          </div>
          <div className="appearance-status" aria-live="polite">
            <span className="appearance-status-dot" />
            {selected?.label} · {ACCENT_COLORS.find((item) => item.id === accent)?.label}
          </div>
        </div>

        <section className="appearance-grid" aria-label="Website styles">
          {APPEARANCE_STYLES.map((style) => (
            <StyleCard key={style.id} styleId={style.id} selected={appearance === style.id} onSelect={setAppearance} />
          ))}
        </section>

        <section className="appearance-accent-panel" aria-labelledby="accent-heading">
          <div className="appearance-accent-head">
            <div>
              <p className="sp-kicker">Personalize the interface</p>
              <h2 id="accent-heading">Choose your accent color</h2>
              <p>Use one accent consistently for active navigation, buttons, progress, highlights, and study cues. The layout and typography of your selected theme stay intact.</p>
            </div>
            <button type="button" className="appearance-accent-reset" onClick={() => setAccent("emerald")}>Reset to CSP Green</button>
          </div>
          <div className="appearance-accent-grid" role="group" aria-label="Accent colors">
            {ACCENT_COLORS.map((color) => (
              <button key={color.id} type="button" className={`appearance-accent-option ${accent === color.id ? "is-selected" : ""}`} onClick={() => setAccent(color.id)} aria-pressed={accent === color.id}>
                <span className="appearance-accent-swatch" style={{ background: color.value }} />
                <span className="appearance-accent-label">{color.label}</span>
              </button>
            ))}
          </div>
        </section>

        <div className="appearance-preview sp-card">
          <div>
            <p className="sp-kicker">Live preview</p>
            <h2 className="sp-title mt-2 text-2xl">Your SafePath learning experience</h2>
            <p className="mt-2 text-sm text-fg-muted">The selected style and accent apply across lessons, practice, flashcards, dashboards, and account pages.</p>
          </div>
          <div className="appearance-preview-ui" aria-hidden="true">
            <div className="appearance-preview-bar" />
            <div className="appearance-preview-body">
              <div className="appearance-preview-side"><i /><i /><i /><i /></div>
              <div className="appearance-preview-content"><b>Exam Essentials</b><span /><span /><span /></div>
            </div>
          </div>
        </div>
      </div>
    </Shell>
  );
}

function StyleCard({ styleId, selected, onSelect }: { styleId: AppearanceId; selected: boolean; onSelect: (id: AppearanceId) => void }) {
  const style = APPEARANCE_STYLES.find((item) => item.id === styleId)!;
  return (
    <button type="button" className={`appearance-card ${selected ? "is-selected" : ""} appearance-card-${styleId}`} onClick={() => onSelect(styleId)} aria-pressed={selected}>
      <div className="appearance-mini" aria-hidden="true">
        <div className="appearance-mini-top" />
        <div className="appearance-mini-main">
          <div className="appearance-mini-nav"><i /><i /><i /><i /><i /></div>
          <div className="appearance-mini-note"><b /><span /><span /><span /></div>
        </div>
      </div>
      <div className="appearance-card-copy">
        <div className="appearance-card-title"><strong>{style.label}</strong><span>{style.tone}</span></div>
        <p>{style.description}</p>
      </div>
      <span className="appearance-radio" aria-hidden="true">{selected ? "✓" : ""}</span>
    </button>
  );
}
