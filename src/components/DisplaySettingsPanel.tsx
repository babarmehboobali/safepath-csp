import { useState } from "react";
import { ACCENT_COLORS, APPEARANCE_STYLES, useAppearance } from "@/components/AppearanceProvider";

export function DisplaySettingsPanel() {
  const { appearance, setAppearance, accent, setAccent, display, setDisplay, resetDisplay } = useAppearance();
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" className="sp-settings-trigger" onClick={() => setOpen(true)} aria-label="Open display and layout settings" title="Display & layout settings">⚙ <span>Settings</span></button>
      {open ? <div className="sp-settings-backdrop" role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) setOpen(false); }}>
        <aside className="sp-settings-panel" role="dialog" aria-modal="true" aria-label="Display and layout settings">
          <div className="sp-settings-head"><div><p className="sp-kicker">SafePath preferences</p><h2>Display & layout</h2><p>Make the study space fit the way you learn. Changes are saved on this device.</p></div><button type="button" className="sp-settings-close" onClick={() => setOpen(false)} aria-label="Close settings">×</button></div>
          <div className="sp-settings-scroll">
            <section><h3>Website style</h3><div className="sp-settings-theme-grid">{APPEARANCE_STYLES.map((style) => <button key={style.id} type="button" className={`sp-settings-choice ${appearance === style.id ? "is-selected" : ""}`} onClick={() => setAppearance(style.id)}><span>{style.label}</span><small>{style.tone}</small></button>)}</div></section>
            <section><h3>Accent color</h3><div className="sp-settings-color-grid">{ACCENT_COLORS.map((color) => <button key={color.id} type="button" className={`sp-settings-color ${accent === color.id ? "is-selected" : ""}`} onClick={() => setAccent(color.id)}><i style={{ background: color.value }} /><span>{color.label}</span></button>)}</div></section>
            <section><h3>Font size</h3><div className="sp-settings-segment" style={{ gridTemplateColumns: "repeat(4,1fr)" }}>{([["small", "Small"], ["default", "Default"], ["large", "Large"], ["xlarge", "Extra large"]] as const).map(([id, label]) => <button key={id} type="button" className={display.fontScale === id ? "is-selected" : ""} onClick={() => setDisplay("fontScale", id)}>{label}</button>)}</div></section>
            <section><h3>Page density</h3><div className="sp-settings-segment">{([["compact", "Compact"], ["comfortable", "Comfortable"], ["spacious", "Spacious"]] as const).map(([id, label]) => <button key={id} type="button" className={display.density === id ? "is-selected" : ""} onClick={() => setDisplay("density", id)}>{label}</button>)}</div></section>
            <section><h3>Website arrangement</h3><p className="sp-settings-help">Choose where the study navigation appears. Hidden removes the desktop sidebar.</p><div className="sp-settings-segment">{([["left", "Left → Right"], ["right", "Right ← Left"], ["hidden", "No sidebar"]] as const).map(([id, label]) => <button key={id} type="button" className={display.sidebar === id ? "is-selected" : ""} onClick={() => setDisplay("sidebar", id)}>{label}</button>)}</div></section>
            <section><h3>Content width</h3><div className="sp-settings-segment">{([["standard", "Standard"], ["wide", "Wide"], ["full", "Full"]] as const).map(([id, label]) => <button key={id} type="button" className={display.contentWidth === id ? "is-selected" : ""} onClick={() => setDisplay("contentWidth", id)}>{label}</button>)}</div></section>
            <section><h3>Display options</h3><label className="sp-settings-toggle"><span><b>Animations</b><small>Transitions and hover movement</small></span><input type="checkbox" checked={display.showAnimations} onChange={(e) => setDisplay("showAnimations", e.target.checked)} /></label><label className="sp-settings-toggle"><span><b>Sidebar labels</b><small>Show text beside navigation icons</small></span><input type="checkbox" checked={display.showSidebarLabels} onChange={(e) => setDisplay("showSidebarLabels", e.target.checked)} /></label></section>
          </div>
          <div className="sp-settings-footer"><button type="button" className="sp-btn sp-btn-ghost" onClick={resetDisplay}>Reset layout</button><button type="button" className="sp-btn sp-btn-primary" onClick={() => setOpen(false)}>Done</button></div>
        </aside>
      </div> : null}
    </>
  );
}
