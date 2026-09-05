import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { MediaQualityPicker } from "@/components/lesson/Clip";
import { useAppearance } from "@/components/AppearanceProvider";
import { hydrateSession } from "@/lib/safepath/session";

const LINKS = [
  { to: "/today", label: "Today" },
  { to: "/studio", label: "Learning" },
  { to: "/plan", label: "Plan" },
  { to: "/practice", label: "Practice" },
  { to: "/games", label: "Games" },
  { to: "/coach", label: "Coach" },
  { to: "/ready", label: "Ready" },
  { to: "/assess", label: "Self-assessment" },
  { to: "/mock", label: "Mock" },
] as const;

const SIDEBAR = [
  { to: "/", label: "Study Home", icon: "⌂" },
  { to: "/studio", label: "All Modules", icon: "▦" },
  { to: "/studio", label: "Study Notes", icon: "▤" },
  { to: "/ready", label: "Key Points", icon: "✣" },
  { to: "/practice", label: "Practice Questions", icon: "✓" },
  { to: "/games", label: "Flashcards", icon: "▣" },
  { to: "/mock", label: "Quizzes", icon: "◉" },
  { to: "/bank", label: "Glossary", icon: "▥" },
  { to: "/plan", label: "Mind Maps", icon: "⌘" },
  { to: "/account", label: "Bookmarks", icon: "♧" },
] as const;

export function Shell({ children }: { children: React.ReactNode }) {
  const [done, setDone] = useState(0);
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);
  const { appearance } = useAppearance();
  const professional = appearance === "professional";

  useEffect(() => {
    void hydrateSession().then((s) => {
      setDone(s.completed.length);
      setName(s.name);
    });
  }, []);

  const first = name.split(" ")[0];

  return (
    <div className={`sp-shell ${professional ? "sp-shell-professional" : ""}`}>
      <header className="sticky top-0 z-20 border-b border-border bg-bg/92 backdrop-blur-xl">
        <div className="sp-wrap flex items-center gap-3 py-3">
          <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
            <img src="/brand/logo-mark.png" alt="" width={32} height={32} className="h-8 w-8 object-contain" />
            <span>
              <span className="block">SafePath CSP</span>
              {professional ? <span className="block text-[10px] font-normal opacity-70">Your AI-Powered CSP Coach</span> : null}
            </span>
          </Link>
          <nav className="ml-auto hidden items-center gap-1 text-sm lg:flex">
            {LINKS.map((row) => (
              <Link key={row.to} to={row.to} className="sp-btn sp-btn-ghost px-3">
                {row.label}
              </Link>
            ))}
            {done ? <span className="px-2 font-mono text-xs text-fg-subtle">{done} complete</span> : null}
            <Link to={first ? "/account" : "/login"} className="sp-btn sp-btn-primary px-3">
              {first || "Log in"}
            </Link>
          </nav>
          <button type="button" className="sp-btn sp-btn-ghost ml-auto px-3 lg:hidden" onClick={() => setOpen((v) => !v)}>
            Menu
          </button>
        </div>
        {open ? (
          <div className="sp-wrap flex flex-col gap-2 pb-4 lg:hidden">
            {LINKS.map((row) => (
              <Link key={row.to} to={row.to} className="sp-btn sp-btn-ghost" onClick={() => setOpen(false)}>
                {row.label}
              </Link>
            ))}
            <Link to={first ? "/account" : "/login"} className="sp-btn sp-btn-primary" onClick={() => setOpen(false)}>
              {first || "Log in"}
            </Link>
          </div>
        ) : null}
      </header>

      <div className={professional ? "sp-professional-layout" : ""}>
        {professional ? (
          <aside className="sp-professional-sidebar" aria-label="Study navigation">
            <div className="sp-sidebar-section-title">Study</div>
            {SIDEBAR.slice(0, 7).map((row) => (
              <Link key={`${row.to}-${row.label}`} to={row.to} className="sp-sidebar-link">
                <span className="sp-sidebar-icon" aria-hidden="true">{row.icon}</span>
                <span>{row.label}</span>
              </Link>
            ))}
            <div className="sp-sidebar-section-title sp-sidebar-tools">Tools</div>
            {SIDEBAR.slice(7).map((row) => (
              <Link key={`${row.to}-${row.label}`} to={row.to} className="sp-sidebar-link">
                <span className="sp-sidebar-icon" aria-hidden="true">{row.icon}</span>
                <span>{row.label}</span>
              </Link>
            ))}
          </aside>
        ) : null}

        <div className={professional ? "sp-professional-content" : ""}>
          <main className="flex-1 py-8 sm:py-12">{children}</main>
          <footer className="border-t border-border py-8">
            <div className="sp-wrap grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="font-semibold">SafePath CSP</p>
                <p className="mt-2 text-sm text-fg-subtle">Independent CSP-11 study. Not affiliated with BCSP or Pearson VUE.</p>
              </div>
              <div className="grid gap-1 text-sm text-fg-muted">
                <p className="font-medium text-fg">Study</p>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/plan">Plan</Link>
                <Link to="/today">Today</Link>
                <Link to="/assess">Self-assessment</Link>
                <Link to="/mock">Mock exam</Link>
                <Link to="/studio">Learning</Link>
              </div>
              <div className="grid gap-1 text-sm text-fg-muted">
                <p className="font-medium text-fg">Tools</p>
                <Link to="/games">Games</Link>
                <Link to="/practice">Practice</Link>
                <Link to="/bank">Bank</Link>
                <Link to="/calculator">Calculator</Link>
                <Link to="/exam-day">Exam day</Link>
              </div>
              <div className="grid gap-1 text-sm text-fg-muted">
                <p className="font-medium text-fg">Account</p>
                <Link to="/login">Log in / reset</Link>
                <Link to="/account">Seat</Link>
                <Link to="/ergo">Ergo lab</Link>
                <Link to="/tox">Tox lab</Link>
                <Link to="/math">Math desk</Link>
                <Link to="/disclaimer">Disclaimer</Link>
                <Link to="/contact">Contact / suggestions</Link>
                <Link to="/about">About</Link>
                <div className="pt-3"><MediaQualityPicker /></div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
