import { createRouter, Link } from "@tanstack/react-router";
import { AppErrorComponent } from "@/lib/error-component";
import { routeTree } from "./routeTree.gen";

function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="sp-kicker">Missing page</p>
      <h1 className="sp-title text-3xl">That path is not in the catalog.</h1>
      <p className="text-fg-muted">Open the main page, the studio, or Hierarchy class 2.</p>
      <div className="flex flex-wrap justify-center gap-2">
        <Link to="/" className="sp-btn sp-btn-primary">Main page</Link>
        <Link to="/studio" className="sp-btn sp-btn-ghost">Studio</Link>
      </div>
    </main>
  );
}

export function getRouter() {
  return createRouter({
    routeTree,
    defaultErrorComponent: AppErrorComponent,
    defaultNotFoundComponent: NotFound,
  });
}
