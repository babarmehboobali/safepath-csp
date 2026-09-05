import type { CatalogEntry } from "@/lib/safepath/catalog";
import { CSP_DOMAIN_NAMES, CSP_DOMAIN_WEIGHTS, DOMAIN_SHORT } from "@/lib/safepath/domains";
import { guideForTask } from "@/lib/safepath/bcsp-curriculum";

export const DOMAIN_THESIS: Record<number, string> = {
  1: "Applied safety technology: choose the strongest practical control that the situation still allows.",
  2: "Program management: set expectations, assign owners, use evidence, and verify that the system works.",
  3: "Risk management: identify the hazard, understand the risk, choose controls, and keep watching the risk.",
  4: "Emergency management: protect life first, coordinate the response, then restore critical operations safely.",
  5: "Environmental management: prevent releases, control materials and waste, and reduce environmental impact.",
  6: "Occupational health and applied science: measure the hazard correctly, understand what the numbers mean, and choose the right control.",
  7: "Training: identify the real performance need, teach it clearly, practice it, and prove that people can do the job safely.",
};

export function topicFor(entry: CatalogEntry, rule: string) {
  const domainName = CSP_DOMAIN_NAMES[entry.domain as keyof typeof CSP_DOMAIN_NAMES];
  const short = DOMAIN_SHORT[entry.domain as keyof typeof DOMAIN_SHORT];
  const domainThesis = DOMAIN_THESIS[entry.domain] ?? "";
  const task = guideForTask(entry.taskCode);
  const thesis = task
    ? `${domainThesis} ${task.plain}`
    : domainThesis;
  const first = rule.split(/(?<=\.)\s+/)[0]?.trim() ?? rule;
  return {
    domainName,
    short,
    weight: CSP_DOMAIN_WEIGHTS[entry.domain as keyof typeof CSP_DOMAIN_WEIGHTS],
    thesis,
    taskLabel: task?.label ?? entry.taskCode,
    taskPlain: task?.plain ?? first,
    learningTargets: task?.targets ?? [first],
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
