import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { MediaQualityPicker } from "@/components/lesson/Clip";
import { FlagTopic } from "@/components/lesson/FlagTopic";
import { DisplaySettingsPanel } from "@/components/DisplaySettingsPanel";
import { useAppearance } from "@/components/AppearanceProvider";
import { hydrateSession } from "@/lib/safepath/session";
import { CATALOG } from "@/lib/safepath/catalog";

const LINKS = [
  { to: "/dashboard", label: "Dashboard" },
  { to: "/studio", label: "Study" },
  { to: "/practice", label: "Practice" },
  { to: "/mock", label: "Mock Exams" },
  { to: "/games", label: "Flashcards" },
  { to: "/ready", label: "Progress" },
] as const;

const SIDEBAR = [
  { to: "/", label: "Study Home", icon: "⌂" },
  { to: "/studio", label: "All Modules", icon: "▦" },
  { to: "/studio", label: "Current Module", icon: "▣" },
  { to: "/studio", label: "Study Notes", icon: "▤" },
  { to: "/ready", label: "Key Points", icon: "✣" },
  { to: "/practice", label: "Practice Questions", icon: "✓" },
  { to: "/games", label: "Flashcards", icon: "▣" },
  { to: "/mock", label: "Mock Exams", icon: "◉" },
  { to: "/bank", label: "Question Bank", icon: "▥" },
  { to: "/domains", label: "CSP-11 Domains", icon: "◈" },
  { to: "/plan", label: "Study Plan", icon: "⌘" },
  { to: "/calculator", label: "Calculator", icon: "Σ" },
  { to: "/eligibility", label: "CSP Eligibility Checker", icon: "✓" },
  { to: "/csp-guide", label: "CSP Application Guide", icon: "▤" },
  { to: "/exam-booking", label: "Book / Schedule Exam", icon: "◷" },
  { to: "/exam-day", label: "Exam Day Guide", icon: "◉" },
  { to: "/account", label: "Account", icon: "♧" },
] as const;

const TOOL_FINDER = [
  { to: "/eligibility", label: "CSP Eligibility Checker", keywords: "eligibility qualify requirements bachelor degree experience credential NEBOSH TSP" },
  { to: "/csp-guide", label: "CSP Application Guide", keywords: "application BCSP CSP requirements fees roadmap credential" },
  { to: "/exam-booking", label: "Book / Schedule CSP Exam", keywords: "book booking schedule Pearson VUE exam test center appointment" },
  { to: "/exam-day", label: "Exam Day Guide", keywords: "exam day calculator pacing CBT Pearson VUE" },
  { to: "/dashboard", label: "Dashboard", keywords: "dashboard home overview progress" },
  { to: "/studio", label: "Study Modules & Notes", keywords: "study lessons modules notes learning" },
  { to: "/practice", label: "Practice Questions", keywords: "practice questions quiz drills" },
  { to: "/mock", label: "Mock Exams", keywords: "mock exam simulation challenging hard" },
  { to: "/games", label: "Flashcards", keywords: "flashcards cards memory recall" },
  { to: "/bank", label: "Question Bank", keywords: "question bank questions" },
  { to: "/domains", label: "CSP-11 Domains", keywords: "CSP 11 domains blueprint task areas" },
  { to: "/plan", label: "Study Plan", keywords: "plan schedule deadline study planner" },
  { to: "/ready", label: "Progress & Readiness", keywords: "progress readiness score completion" },
  { to: "/calculator", label: "TI-30XS Calculator", keywords: "calculator math scientific" },
  { to: "/formulas", label: "Formula Reference", keywords: "formulas equation reference" },
  { to: "/assess", label: "Self-Assessment", keywords: "assessment self assessment diagnostic" },
  { to: "/coach", label: "AI CSP Coach", keywords: "coach AI help explain" },
  { to: "/library", label: "Reference Library", keywords: "library resources references" },
  { to: "/topics", label: "Topic Explorer", keywords: "topics explorer safety topics" },
  { to: "/flags", label: "Flagged Topics", keywords: "flags flagged review topics" },
  { to: "/ergo", label: "Ergonomics Lab", keywords: "ergonomics lab" },
  { to: "/tox", label: "Toxicology Lab", keywords: "toxicology tox lab" },
  { to: "/math", label: "Math Desk", keywords: "math calculations" },
] as const;

export function Shell({ children }: { children: React.ReactNode }) {
  const [done, setDone] = useState(0);
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);
  const [toolQuery, setToolQuery] = useState("");
  const [finderOpen, setFinderOpen] = useState(false);
  const { appearance, display } = useAppearance();
  const location = useLocation();
  const referenceTheme = appearance === "csp-green" || appearance === "professional";
  const lessonMatch = location.pathname.match(/^\/learn\/(\d+)/);
  const lessonEntry = lessonMatch ? CATALOG.find((row) => row.id === Number(lessonMatch[1])) : undefined;
  const moduleLabel = lessonEntry ? `Module ${String(lessonEntry.domain).padStart(2, "0")}` : "Learning path";
  const filteredTools = useMemo(() => {
    const query = toolQuery.trim().toLowerCase();
    if (!query) return TOOL_FINDER.slice(0, 8);
    return TOOL_FINDER.filter((tool) => `${tool.label} ${tool.keywords}`.toLowerCase().includes(query)).slice(0, 10);
  }, [toolQuery]);

  useEffect(() => {
    void hydrateSession().then((s) => {
      setDone(s.completed.length);
      setName(s.name);
    });
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setFinderOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const first = name.split(" ")[0];
  const sidebarOn = referenceTheme && display.sidebar !== "hidden";
  const selectTool = () => {
    setFinderOpen(false);
    setToolQuery("");
  };

  return (
    <div className={`sp-shell ${referenceTheme ? "sp-shell-professional" : ""} ${appearance === "csp-green" ? "sp-shell-csp-green" : ""} ${display.sidebar === "right" ? "sp-shell-sidebar-right" : ""}`}>
      <a href="#main-content" className="sp-skip-link">Skip to main content</a>
      <header className="sticky top-0 z-30 border-b border-border bg-bg/92 backdrop-blur-xl">
        <div className="sp-wrap flex items-center gap-3 py-3">
          <Link to="/" className="sp-brand flex shrink-0 items-center gap-2 font-semibold tracking-tight" aria-label="SafePath CSP home">
            <img src="/brand/logo-mark.png" alt="" width={36} height={36} className="h-9 w-9 object-contain" />
            <span><span className="block">SafePath CSP</span>{referenceTheme ? <span className="block text-[10px] font-normal opacity-80">Your AI-Powered CSP Coach</span> : null}</span>
          </Link>

          <div className="relative ml-auto hidden w-[240px] md:block lg:w-[280px]">
            <label htmlFor="tool-finder" className="sr-only">Search SafePath tools</label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-fg-subtle" aria-hidden="true">⌕</span>
              <input
                id="tool-finder"
                value={toolQuery}
                onChange={(event) => { setToolQuery(event.target.value); setFinderOpen(true); }}
                onFocus={() => setFinderOpen(true)}
                placeholder="Find a tool…"
                className="w-full rounded-xl border border-border bg-bg-soft py-2 pl-9 pr-3 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                aria-expanded={finderOpen}
                aria-controls="tool-finder-results"
                autoComplete="off"
              />
            </div>
            {finderOpen ? (
              <div id="tool-finder-results" className="absolute left-0 right-0 top-[calc(100%+8px)] overflow-hidden rounded-2xl border border-border bg-bg shadow-xl" role="listbox" aria-label="SafePath tools">
                <div className="border-b border-border px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-fg-subtle">Tools & study features</div>
                {filteredTools.length ? filteredTools.map((tool) => (
                  <Link key={tool.to} to={tool.to} role="option" className="block border-b border-border/60 px-3 py-2.5 text-sm last:border-0 hover:bg-bg-soft" onClick={selectTool}>
                    <span className="block font-medium text-fg">{tool.label}</span>
                    <span className="mt-0.5 block text-xs text-fg-subtle">Open tool</span>
                  </Link>
                )) : <div className="px-3 py-4 text-sm text-fg-subtle">No matching tool. Try “eligibility”, “exam”, “practice”, “calculator”, or “plan”.</div>}
              </div>
            ) : null}
          </div>

          <nav className="sp-top-nav hidden items-center gap-1 text-sm lg:flex" aria-label="Primary navigation">
            {LINKS.map((row) => <Link key={row.to} to={row.to} className="sp-btn sp-btn-ghost px-3">{row.label}</Link>)}
            <Link to="/eligibility" className="sp-btn sp-btn-primary px-3">Eligibility</Link>
            {done ? <span className="px-2 font-mono text-xs text-fg-subtle" aria-label={`${done} lessons complete`}>{done} complete</span> : null}
            <DisplaySettingsPanel />
            <Link to={first ? "/account" : "/login"} className="sp-btn sp-btn-primary px-3">{first || "Log in"}</Link>
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <DisplaySettingsPanel />
            <button type="button" className="sp-btn sp-btn-ghost px-3" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((v) => !v)}>Menu</button>
          </div>
        </div>

        <div className="sp-wrap pb-3 md:hidden">
          <label htmlFor="mobile-tool-finder" className="sr-only">Search SafePath tools</label>
          <input
            id="mobile-tool-finder"
            value={toolQuery}
            onChange={(event) => { setToolQuery(event.target.value); setFinderOpen(true); }}
            onFocus={() => setFinderOpen(true)}
            placeholder="Find a tool or feature…"
            className="w-full rounded-xl border border-border bg-bg-soft px-3 py-2.5 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
            autoComplete="off"
          />
          {finderOpen ? (
            <div className="mt-2 overflow-hidden rounded-2xl border border-border bg-bg shadow-xl" role="listbox" aria-label="SafePath tools">
              {filteredTools.map((tool) => <Link key={tool.to} to={tool.to} role="option" className="block border-b border-border/60 px-3 py-2.5 text-sm last:border-0 hover:bg-bg-soft" onClick={selectTool}>{tool.label}</Link>)}
              {!filteredTools.length ? <div className="px-3 py-3 text-sm text-fg-subtle">No matching tool.</div> : null}
            </div>
          ) : null}
        </div>

        {open ? <div id="mobile-navigation" className="sp-wrap flex flex-col gap-2 pb-4 lg:hidden" aria-label="Mobile navigation">
          {LINKS.map((row) => <Link key={row.to} to={row.to} className="sp-btn sp-btn-ghost" onClick={() => setOpen(false)}>{row.label}</Link>)}
          <Link to="/eligibility" className="sp-btn sp-btn-primary" onClick={() => setOpen(false)}>CSP Eligibility Checker</Link>
          <Link to="/csp-guide" className="sp-btn sp-btn-ghost" onClick={() => setOpen(false)}>CSP Application Guide</Link>
          <Link to="/exam-booking" className="sp-btn sp-btn-ghost" onClick={() => setOpen(false)}>Book / Schedule Exam</Link>
          <Link to="/plan" className="sp-btn sp-btn-ghost" onClick={() => setOpen(false)}>Study Plan</Link>
          <Link to="/domains" className="sp-btn sp-btn-ghost" onClick={() => setOpen(false)}>CSP-11 Domains</Link>
          <Link to={first ? "/account" : "/login"} className="sp-btn sp-btn-primary" onClick={() => setOpen(false)}>{first || "Log in"}</Link>
        </div> : null}
      </header>

      {lessonEntry ? <FlagTopic classId={lessonEntry.id} /> : null}
      <div className={sidebarOn ? "sp-professional-layout" : ""}>
        {sidebarOn ? <aside className="sp-professional-sidebar" aria-label="Study navigation">
          <div className="sp-sidebar-section-title">Study</div>
          {SIDEBAR.slice(0, 8).map((row, index) => {
            const isCurrentModule = index === 2;
            const active = isCurrentModule ? Boolean(lessonEntry) : location.pathname === row.to;
            const label = isCurrentModule ? moduleLabel : row.label;
            return <Link key={`${row.to}-${row.label}`} to={row.to} className={`sp-sidebar-link ${active ? "is-active" : ""} ${isCurrentModule && lessonEntry ? "is-module" : ""}`}><span className="sp-sidebar-icon" aria-hidden="true">{row.icon}</span><span>{label}</span></Link>;
          })}
          <div className="sp-sidebar-section-title sp-sidebar-tools">Tools</div>
          {SIDEBAR.slice(8).map((row) => <Link key={`${row.to}-${row.label}`} to={row.to} className={`sp-sidebar-link ${location.pathname === row.to ? "is-active" : ""}`}><span className="sp-sidebar-icon" aria-hidden="true">{row.icon}</span><span>{row.label}</span></Link>)}
        </aside> : null}

        <div className={sidebarOn ? "sp-professional-content" : ""}>
          <main id="main-content" className="flex-1 py-8 sm:py-12" tabIndex={-1}>{children}</main>
          <footer className="border-t border-border py-8"><div className="sp-wrap grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div><p className="font-semibold">SafePath CSP</p><p className="mt-2 text-sm text-fg-subtle">Independent CSP-11 study. Not affiliated with BCSP or Pearson VUE.</p></div>
            <div className="grid gap-1 text-sm text-fg-muted"><p className="font-medium text-fg">Study</p><Link to="/dashboard">Dashboard</Link><Link to="/plan">Plan</Link><Link to="/today">Today</Link><Link to="/assess">Self-assessment</Link><Link to="/mock">Mock exam</Link><Link to="/studio">Learning</Link></div>
            <div className="grid gap-1 text-sm text-fg-muted"><p className="font-medium text-fg">CSP Candidate</p><Link to="/eligibility">Eligibility Checker</Link><Link to="/csp-guide">Application Guide</Link><Link to="/exam-booking">Book / Schedule Exam</Link><Link to="/exam-day">Exam Day</Link><Link to="/domains">CSP-11 Domains</Link></div>
            <div className="grid gap-1 text-sm text-fg-muted"><p className="font-medium text-fg">Tools & Account</p><Link to="/games">Games</Link><Link to="/practice">Practice</Link><Link to="/bank">Bank</Link><Link to="/calculator">Calculator</Link><Link to="/formulas">Formulas</Link><Link to="/account">Account</Link><Link to="/ergo">Ergo lab</Link><Link to="/tox">Tox lab</Link><Link to="/math">Math desk</Link><Link to="/disclaimer">Disclaimer</Link><Link to="/contact">Contact / suggestions</Link><Link to="/about">About</Link><div className="pt-3"><MediaQualityPicker /></div></div>
          </div></footer>
        </div>
      </div>
    </div>
  );
}
