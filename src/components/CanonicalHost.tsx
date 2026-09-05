import { useEffect } from "react";

const LIVE = "https://www.safepath-csp.com";

function shouldPin() {
  if (typeof window === "undefined") return false;
  const host = window.location.hostname;
  if (host === "www.safepath-csp.com" || host === "safepath-csp.com") return false;
  if (host === "localhost" || host === "127.0.0.1") return false;
  if (host.endsWith(".grok-sandbox.com") || host.endsWith(".grok.app")) return false;
  if (host.endsWith(".vercel.app")) return true;
  return false;
}

export function CanonicalHost() {
  useEffect(() => {
    if (!shouldPin()) return;
    const next = `${LIVE}${window.location.pathname}${window.location.search}${window.location.hash}`;
    window.location.replace(next);
  }, []);
  return null;
}
