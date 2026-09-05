import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { MediaQualityPicker } from "@/components/lesson/Clip";
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
  { to: "/mock", label: "Quizzes", icon: "◉" },
  { to: "/bank", label: "Glossary", icon: "▥" },
  { to: "/plan", label: "Mind Maps", icon: "⌘" },
  { to: "/calculator", label: "Downloads", icon: "⇩" },
  { to: "/account", label: "Bookmarks", icon: "♧" },
] as const;

export function Shell({ children }: { children: React.ReactNode }) {
  const [done, setDone] = useState(0);
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);
  const { appearance } = useAppearance();
  const location = useLocation();
  const referenceTheme = appearance === "csp-green" || appearance === "professional";
  const lessonMatch = location.pathname.match(/^\/learn\/(\d+)/);
  const lessonEntry = lessonMatch ? CATALOG.find((row) => row.id === Number(lessonMatch[1])) : undefined;
  const moduleLabel = lessonEntry ? `Module ${String(lessonEntry.domain).padStart(2, "0")}` : "Learning path";

  useEffect(() => {
    void hydrateSession().then((s) => { setDone(s.completed.length); setName(s.name); });
  }, []);

  const first = name.split(" ")[0];

  return (
    <div className={`sp-shell ${referenceTheme ? "sp-shell-professional" : ""} ${appearance === "csp-green" ? "sp-shell-csp-green" : ""}`}>
      <header className="sticky top-0 z-20 border-b border-border bg-bg/92 backdrop-blur-xl">
        <div className="sp-wrap flex items-center gap-3 py-3">
          <Link to="/" className="sp-brand flex items-center gap-2 font-semibold tracking-tight"><img src="/brand/logo-mark.png" alt="" width={36} height={36} className="h-9 w-9 object-contain" /><span><span className="block">SafePath CSP</span>{referenceTheme ? <span className="block text-[10px] font-normal opacity-80">Your AI-Powered CSP Coach</span> : null}</span></Link>
          <nav className="sp-top-nav ml-auto hidden items-center gap-1 text-sm lg:flex">{LINKS.map((row) => <Link key={row.to} to={row.to} className="sp-btn sp-btn-ghost px-3">{row.label}</Link>)}{done ? <span className="px-2 font-mono text-xs text-fg-subtle">{done} complete</span> : null}<Link to={first ? "/account" : "/login"} className="sp-btn sp-btn-primary px-3">{first || "Log in"}</Link></nav>
          <button type="button" className="sp-btn sp-btn-ghost ml-auto px-3 lg:hidden" onClick={() => setOpen((v) => !v)}>Menu</button>
        </div>
        {open ? <div className="sp-wrap flex flex-col gap-2 pb-4 lg:hidden">{LINKS.map((row) => <Link key={row.to} to={row.to} className="sp-btn sp-btn-ghost" onClick={() => setOpen(false)}>{row.label}</Link>)}<Link to={first ? "/account" : "/login"} className="sp-btn sp-btn-primary" onClick={() => setOpen(false)}>{first || "Log in"}</Link></div> : null}
      </header>

      <div className={referenceTheme ? "sp-professional-layout" : ""}>
        {referenceTheme ? <aside className="sp-professional-sidebar" aria-label="Study navigation">
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

        <div className={referenceTheme ? "sp-professional-content" : ""}>
          <main className="flex-1 py-8 sm:py-12">{children}</main>
          <footer className="border-t border-border py-8"><div className="sp-wrap grid gap-6 sm:grid-cols-2 lg:grid-cols-4"><div><p className="font-semibold">SafePath CSP</p><p className="mt-2 text-sm text-fg-subtle">Independent CSP-11 study. Not affiliated with BCSP or Pearson VUE.</p></div><div className="grid gap-1 text-sm text-fg-muted"><p className="font-medium text-fg">Study</p><Link to="/dashboard">Dashboard</Link><Link to="/plan">Plan</Link><Link to="/today">Today</Link><Link to="/assess">Self-assessment</Link><Link to="/mock">Mock exam</Link><Link to="/studio">Learning</Link></div><div className="grid gap-1 text-sm text-fg-muted"><p className="font-medium text-fg">Tools</p><Link to="/games">Games</Link><Link to="/practice">Practice</Link><Link to="/bank">Bank</Link><Link to="/calculator">Calculator</Link><Link to="/exam-day">Exam day</Link></div><div className="grid gap-1 text-sm text-fg-muted"><p className="font-medium text-fg">Account</p><Link to="/login">Log in / reset</Link><Link to="/account">Seat</Link><Link to="/ergo">Ergo lab</Link><Link to="/tox">Tox lab</Link><Link to="/math">Math desk</Link><Link to="/disclaimer">Disclaimer</Link><Link to="/contact">Contact / suggestions</Link><Link to="/about">About</Link><div className="pt-3"><MediaQualityPicker /></div></div></div></footer>
        </div>
      </div>
    </div>
  );
}
