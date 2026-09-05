import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import appCss from "../styles.css?url";

const SITE = "https://safepath-csp.com";
const TITLE = "SafePath CSP | CSP Exam Prep";
const DESC =
  "Independent CSP exam prep: visual lessons, self-assessment, and CBT-style mock exams across all seven CSP-11 domains. Start free.";

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE}/#org`,
      name: "SafePath CSP",
      url: SITE,
      email: "suggestions@safepath-csp.com",
      logo: `${SITE}/brand/logo-mark.png`,
      description: "Independent Certified Safety Professional (CSP-11) study software. Not affiliated with BCSP or Pearson VUE.",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#site`,
      url: SITE,
      name: "SafePath CSP",
      description: DESC,
      publisher: { "@id": `${SITE}/#org` },
      inLanguage: "en-US",
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE}/#app`,
      name: "SafePath CSP",
      applicationCategory: "EducationalApplication",
      operatingSystem: "Web",
      url: SITE,
      description: DESC,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      publisher: { "@id": `${SITE}/#org` },
    },
  ],
};

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#07110d" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
      { name: "mobile-web-app-capable", content: "yes" },
      { name: "format-detection", content: "telephone=no" },
      { name: "author", content: "SafePath CSP" },
      { name: "keywords", content: "CSP exam prep, Certified Safety Professional, CSP-11, BCSP study, safety certification, mock CSP exam, industrial hygiene formulas" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "SafePath CSP" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE}/` },
      { property: "og:image", content: `${SITE}/og.jpg` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: `${SITE}/og.jpg` },
    ],
    links: [
      { rel: "canonical", href: `${SITE}/` },
      { rel: "icon", type: "image/png", href: "/brand/logo-mark.png" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Serif:wght@500;600&display=swap",
      },
    ],
  }),
  component: () => (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
