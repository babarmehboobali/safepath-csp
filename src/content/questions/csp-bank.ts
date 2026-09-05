import type { ClassItem } from "@/content/classes/types";

export type CspBankQuestion = {
  id: string;
  hashKey: string;
  sessionId: number;
  domainId: number;
  title: string;
  standard: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
};

export const CSP_QUESTION_BANK: CspBankQuestion[] = [
  {
    id: "CSP-Q-0001",
    hashKey: "a_safety_manager_tests_combustible_gas_levels_inside_a_hydrocarbon",
    sessionId: 1,
    domainId: 1,
    title: "Advanced Applied Mathematics & Stat",
    standard: "NFPA 69 / API 2015",
    question:
      "A safety manager tests combustible gas levels inside a hydrocarbon storage vessel. The lower explosive limit (LFL) of the vapor is 1.4% by volume. The portable multi-gas detector reads 25% of the LFL. What is the actual volumetric concentration of the vapor inside the tank?",
    options: ["0.35% by volume", "0.70% by volume", "1.05% by volume", "3.50% by volume"],
    correct: 0,
    explanation:
      "100% LFL is 1.4% by volume. 0.25 × 1.4% = 0.35% by volume.",
  },
  {
    id: "CSP-Q-0002",
    hashKey: "when_evaluating_an_employee_exposed_to_both_n_hexane_and_methyl",
    sessionId: 2,
    domainId: 6,
    title: "Industrial Hygiene & Toxicology",
    standard: "29 CFR 1910.1000 / ACGIH",
    question:
      "When evaluating an employee exposed to both n-hexane and methyl ethyl ketone (MEK), what toxicological phenomenon is of paramount concern to the industrial hygienist?",
    options: [
      "Chemical antagonism neutralizing peripheral neurotoxicity",
      "Potentiation of n-hexane neurotoxicity induced by MEK",
      "Independent toxic action on unrelated organ systems",
      "Complete metabolic inhibition of 2,5-hexanedione production",
    ],
    correct: 1,
    explanation:
      "MEK potentiates n-hexane neurotoxicity by accelerating conversion to 2,5-hexanedione.",
  },
];

export function extraBankItems() {
  return CSP_QUESTION_BANK.map((row) => ({
    classId: 2000 + row.sessionId,
    title: row.title,
    domain: row.domainId,
    item: {
      stem: row.question,
      options: row.options,
      answerIndex: row.correct,
      explanation: row.explanation,
      errorCode: "FORM",
      taskCode: row.id,
      difficulty: "Exam",
      standardReference: row.standard,
      authoritativeRationale: row.explanation,
    } satisfies ClassItem,
  }));
}
