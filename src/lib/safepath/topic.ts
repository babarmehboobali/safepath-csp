import type { CatalogEntry } from "@/lib/safepath/catalog";
import { CSP_DOMAIN_NAMES, CSP_DOMAIN_WEIGHTS, DOMAIN_SHORT } from "@/lib/safepath/domains";

export const DOMAIN_THESIS: Record<number, string> = {
  1: "Applied safety technology: pick the highest control still open in the stem — design, energy, people, and plant conditions.",
  2: "Program management: owners, evidence, and verification. A binder is not a control.",
  3: "Risk management: identify, analyze, treat. Money and registers serve the hierarchy; they do not replace it.",
  4: "Emergency management: objectives, span, and life safety before restoration of the process.",
  5: "Environmental management: contain at the source, then classify, then report. A kit is not the statute.",
  6: "Occupational health and applied science: match the table, the units, and the decision the number will change.",
  7: "Training: competence is observed performance, not a roster. Design the evaluation before the slides.",
};

export function topicFor(entry: CatalogEntry, rule: string) {
  const domainName = CSP_DOMAIN_NAMES[entry.domain as keyof typeof CSP_DOMAIN_NAMES];
  const short = DOMAIN_SHORT[entry.domain as keyof typeof DOMAIN_SHORT];
  const thesis = DOMAIN_THESIS[entry.domain] ?? "";
  const first = rule.split(/(?<=\.)\s+/)[0]?.trim() ?? rule;
  return {
    domainName,
    short,
    weight: CSP_DOMAIN_WEIGHTS[entry.domain as keyof typeof CSP_DOMAIN_WEIGHTS],
    thesis,
    sentence: `${entry.title} is a Domain ${entry.domain} (${short}) topic. ${first}`,
  };
}

export function stripTemplateSlop(raw: string) {
  return raw
    .replace(/^[^.]*how sits in CSP-11 Domain \d+[^.]*\.\s*/i, "")
    .replace(/^[^.]*sits in CSP-11 Domain \d+[^.]*\.\s*/i, "")
    .replace(/\s*The exam tests whether you apply the rule when a package already looks complete\.\s*/gi, " ")
    .replace(/\s*Calculator discipline still matters when numbers appear:[^.]*formula sheet\.\s*/gi, " ")
    .replace(/\s*Shared keys, shared instruments, and shared assumptions create false independence\.\s*/gi, " ")
    .replace(/\s*Hold that sentence once\.\s*/gi, " ")
    .replace(/\s*Reject polished paperwork when a higher system or design fix remains\.\s*/gi, " ")
    .replace(/\s{2,}/g, " ")
    .trim();
}
