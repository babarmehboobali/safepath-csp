import { createFileRoute } from "@tanstack/react-router";
import { auth } from "@/lib/auth/server";

/**
 * Better Auth catch-all HTTP endpoint.
 *
 * Better Auth owns the complete /api/auth/* contract (credential auth,
 * sessions, OAuth initiation and OAuth callbacks). TanStack Start must forward
 * both GET and POST requests to auth.handler; without this route the browser
 * receives a 404 from Vercel for /api/auth/sign-in/oauth2 and Google sign-in
 * cannot start.
 */
export const Route = createFileRoute("/api/auth/$")({
  server: {
    handlers: {
      GET: async ({ request }) => auth.handler(request),
      POST: async ({ request }) => auth.handler(request),
    },
  },
});
