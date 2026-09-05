import { createFileRoute, Link } from "@tanstack/react-router";
import { APPEARANCE_STYLES, useAppearance, type AppearanceId } from "@/components/AppearanceProvider";
import { Shell } from "@/components/lesson/Shell";

export const Route = createFileRoute("/appearance")({ component: Appearance });

function Appearance() {
  const { appearance, setAppearance } = useAppearance();

  return (
    <Shell>
      <div className="sp-wrap appearance-page">
        <div className="appearance-head">
          <div>
            <Link to="/account" className="appearance-back">← Account</Link>
            <p className="sp-kicker mt-5">Appearance</p>
            <h1 className="sp-title mt-2 text-4xl sm:text-5xl">Choose your study style.</h1>
            <p className="mt-3 max-w-2xl text-fg-muted">
              Pick the look that feels best for your learning. Your choice is saved on this device and follows you around SafePath.
            </p>
          </div>
          <div className="appearance-status" aria-live="polite">
            <span className="appearance-status-dot" />
            {APPEARANCE_STYLES.find((style) => style.id === appearance)?.label} selected
          </div>
        </div>

        <section className="appearance-grid" aria-label="Website styles">
          {APPEARANCE_STYLES.map((style) => (
            <StyleCard key={style.id} styleId={style.id} selected={appearance === style.id} onSelect={setAppearance} />
          ))}
        </section>

        <div className="appearance-preview sp-card">
          <div>
            <p className="sp-kicker">Live preview</p>
            <h2 className="sp-title mt-2 text-2xl">Your SafePath learning experience</h2>
            <p className="mt-2 text-sm text-fg-muted">The selected style applies across lessons, practice, flashcards, dashboards, and account pages.</p>
          </div>
          <div className="appearance-preview-ui" aria-hidden="true">
            <div className="appearance-preview-bar" />
            <div className="appearance-preview-body">
              <div className="appearance-preview-side"><i /><i /><i /><i /></div>
              <div className="appearance-preview-content"><b>Must-score</b><span /><span /><span /></div>
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
    <button
      type="button"
      className={`appearance-card ${selected ? "is-selected" : ""} appearance-card-${styleId}`}
      onClick={() => onSelect(styleId)}
      aria-pressed={selected}
    >
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
