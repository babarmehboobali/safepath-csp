import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D2.14";

export const classFields: ClassFields = {
  hook: "A site had zero recordables in 20,000 hours and claims we are 95 percent sure TRIR is 0 forever. You are the CSP. The question is what a confidence interval and a probability are allowed to say.",
  hookOilGas: `A pad had zero recordables in 20,000 hours and claims we are 95 percent sure TRIR is 0 forever. You are the CSP. The question is what a confidence interval and a probability are allowed to say.`,
  hookConstruction: `A job had zero recordables in 20,000 hours and claims we are 95 percent sure TRIR is 0 forever. You are the CSP. The question is what a confidence interval and a probability are allowed to say.`,
  rule: "Independent AND multiplies (P(A and B)=P(A)P(B) if independent). Mutually exclusive OR adds. A 95 percent CI is a long-run coverage claim about the method, not a 95 percent chance the next injury is inside. Zero events in small EH is not proof of zero risk. Probability does not waive hierarchy.",
  modelCaption:
    "Left: Venn — AND overlap, OR union, independence note. Right: CI bar on a rate with a wide interval at small n. Caption: a point estimate of 0 with a wide CI is still we do not know, not victory.",
  workedCase:
    "Two independent barriers fail with P=0.02 and 0.03. P(both)=0.0006. Adding to 0.05 is FORM. A 95 percent CI on TRIR from 0 events in 20,000 hours is wide; do not fund pizza instead of the guard because the point estimate is 0.",
  trapsJson: traps(
    "Adding independent AND probabilities.",
    "Reading 95 percent CI as a 95 percent bet on the next single observation.",
    "Treating n=0 in small hours as certainty.",
  ),
  contrastJson: contrast([
    { looksLike: "Independent AND", actually: "Multiply (if the stem independence is real)" },
    { looksLike: "Mutually exclusive OR", actually: "Add" },
    { looksLike: "95 percent CI", actually: "Method covers the parameter 95 percent of the time in the long run" },
    { looksLike: "P=0 from 0 events", actually: "Point estimate only — CI still wide" },
  ]),
  mustScoreJson: mustScore(
    "Probability quantifies likelihood; independence assumptions must be justified.",
    "Confidence intervals express estimate precision \u2014 not magic certainty.",
    "Do not confuse confidence level with probability a single true value is inside once realized.",
    "Rare high-severity events still need controls despite low frequency.",
    "Bayes-style updating is conceptual \u2014 read the stem carefully.",
    "AND of independent events multiplies; OR adds with care for overlap.",
    "Calculator discipline for powers and decimals.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "events are not independent", pick: "do not multiply as if independent" },
    { ifStem: "severity is catastrophic despite low probability", pick: "still prioritize hierarchy-smart controls" },
    { ifStem: "a CI is wider after a smaller sample", pick: "expect less precision \u2014 do not invent certainty" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "the stem asks a simple independent AND", pick: "multiply the probabilities" },
  ),

  brief: `Independent AND multiplies (P(A and B)=P(A)P(B) if independent). Mutually exclusive OR adds. A 95 percent CI is a long-run coverage claim about the method, not a 95 percent chance the next injury is inside. Zero events in small EH is not proof of zero risk. Probability does not waive hierarchy. If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Independent AND multiplies (P(A and B)=P(A)P(B) if independent). Mutually exclusive OR adds. A 95 percent CI is a long-run coverage claim about the method, not a 95 percent chance the next injury is inside. Zero events in small EH is not proof of zero risk. Probability does not waive hierarchy. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
A site had zero recordables in 20,000 hours and claims we are 95 percent sure TRIR is 0 forever. You are the CSP. The question is what a confidence interval and a probability are allowed to say. Oil-and-gas skin: A pad had zero recordables in 20,000 hours and claims we are 95 percent sure TRIR is 0 forever. You are the CSP. Construction skin: A job had zero recordables in 20,000 hours and claims we are 95 percent sure TRIR is 0 forever. You are the CSP. Work the case: Two independent barriers fail with P=0.02 and 0.03. P(both)=0.0006. Adding to 0.05 is FORM. A 95 percent CI on TRIR from 0 events in 20,000 hours is wide; do not fund pizza instead of the guard because the point estimate is 0. Classic traps: Adding independent AND probabilities.; Reading 95 percent CI as a 95 percent bet on the next single observation.; Treating n=0 in small hours as certainty.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for ci probability. Verify whether a higher system or design fix is still open. Contrast labels: Independent AND is actually Multiply (if the stem independence is real); Mutually exclusive OR is actually Add; 95 percent CI is actually Method covers the parameter 95 percent of the time in the long run; P=0 from 0 events is actually Point estimate only — CI still wide. If the stem shows events are not independent, pick do not multiply as if independent. If the stem shows severity is catastrophic despite low probability, pick still prioritize hierarchy-smart controls. If the stem shows a CI is wider after a smaller sample, pick expect less precision \u2014 do not invent certainty. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows the stem asks a simple independent AND, pick multiply the probabilities. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `CI / probability — 0 events in 20,000 h means P=0 sits in CSP-11 Domain 2 Management Systems. The exam tests whether you apply the rule when a package already looks complete. Core rule: Independent AND multiplies (P(A and B)=P(A)P(B) if independent). Mutually exclusive OR adds. A 95 percent CI is a long-run coverage claim about the method, not a 95 percent chance the next injury is inside. Zero events in small EH is not proof of zero risk. Probability does not waive hierarchy. Field context: A site had zero recordables in 20,000 hours and claims we are 95 percent sure TRIR is 0 forever. You are the CSP. The question is what a confidence interval and a probability are allowed to say. The oil-and-gas skin shifts the same decision into production pressure: A pad had zero recordables in 20,000 hours and claims we are 95 percent sure TRIR is 0 forever. You are the CSP. The construction skin shifts it into schedule and trade stacking: A job had zero recordables in 20,000 hours and claims we are 95 percent sure TRIR is 0 forever. You are the CSP. Model caption for this class: Left: Venn â AND overlap, OR union, independence note. Right: CI bar on a rate with a wide interval at small n. Caption: a point estimate of 0 with a wide CI is still we do not know, not victory. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Probability quantifies likelihood; independence assumptions must be justified. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Confidence intervals express estimate precision — not magic certainty. (3) Do not confuse confidence level with probability a single true value is inside once realized. (4) Rare high-severity events still need controls despite low frequency. (5) Bayes-style updating is conceptual — read the stem carefully. (6) AND of independent events multiplies; OR adds with care for overlap. (7) Calculator discipline for powers and decimals. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Two independent barriers fail with P=0.02 and 0.03. P(both)=0.0006. Adding to 0.05 is FORM. A 95 percent CI on TRIR from 0 events in 20,000 hours is wide; do not fund pizza instead of the guard because the point estimate is 0. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Adding independent AND probabilities.; Reading 95 percent CI as a 95 percent bet on the next single observation.; Treating n=0 in small hours as certainty.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Independent AND” is really Multiply (if the stem independence is real); “Mutually exclusive OR” is really Add; “95 percent CI” is really Method covers the parameter 95 percent of the time in the long run; “P=0 from 0 events” is really Point estimate only — CI still wide. Stem-if-then map: if events are not independent → do not multiply as if independent; if severity is catastrophic despite low probability → still prioritize hierarchy-smart controls; if a CI is wider after a smaller sample → expect less precision \u2014 do not invent certainty; if two answers work → higher hierarchy / system / design; if the stem asks a simple independent AND → multiply the probabilities. Scoring favors evidence, owners, verification, and hierarchy-smart controls on ci probability. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "CI / probability — 0 events in 20,000 h means P=0?",
  cardBack:
    "No. Point estimate 0, wide uncertainty. Independent AND multiplies. 95 percent CI is not a 95 percent bet on the next case. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence multiplies independent ANDs, refuses 0-in-small-n as certainty, and does not treat a 95 percent CI as a 95 percent chance for the next event.",
};

export const items: ClassItem[] = [
  exam(T, "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Independent P(A)=0.02, P(B)=0.03. P(A and B).", [
    "0.05 (add).",
    "0.0006 (multiply).",
    "0.02.",
    "RPN = 6.",
  ], 1, "FORM: independent AND multiplies.", "FORM", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Independent AND multiplies (P(A and B)=P(A)P(B) if independent). Mutually exclusive OR adds. A 95 percent CI is a long-run coverage claim about the method, not a 95 percent chance the next injury is inside. Zero event... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a refinery coker outage. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Mutually exclusive P(A)=0.02, P(B)=0.03. P(A or B).", [
    "0.0006.",
    "0.05 (add).",
    "0.0005.",
    "1.05.",
  ], 1, "FORM: exclusive OR adds.", "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Independent AND multiplies (P(A and B)=P(A)P(B) if independent). Mutually exclusive OR adds. A 95 percent CI is a long-run coverage claim about the method, not a 95 percent chance the next injury is inside. Zero event... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Two loops share a PLC. Analyst multiplies 0.02 x 0.03 and calls them independent. Problem?", [
    "None — nameplates say independent.",
    "Independence failed: common cause; multiplying understates P(both).",
    "They should add premiums instead.",
    "They should use median.",
  ], 1, "STEM: independence is a fact. Shared PLC is common cause.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Independent AND multiplies (P(A and B)=P(A)P(B) if independent). Mutually exclusive OR adds. A 95 percent CI is a long-run coverage claim about the method, not a 95 percent chance the next injury is inside. Zero event... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "0 recordables in 20,000 hours. Claim: 95 percent CI proves TRIR is 0 forever; skip the guard. Best call?", [
    "Agree — n=0 is certainty.",
    "Reject: point estimate 0 with small EH is weak; a CI is not a 95 percent promise of the future; specify the still-open guard.",
    "Agree if premium is low.",
    "Agree if RPN is low.",
  ], 1, "HIER + FORM: statistics do not close an open nip.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Independent AND multiplies (P(A and B)=P(A)P(B) if independent). Mutually exclusive OR adds. A 95 percent CI is a long-run coverage claim about the method, not a 95 percent chance the next injury is inside. Zero event... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A 95 percent CI on a rate is (0.4, 1.2). Someone says there is a 95 percent chance next year TRIR will land in that interval. Error?", [
    "None — that is the definition.",
    "FORM/STEM: a CI is a long-run coverage claim about the parameter, not a 95 percent bet on one next realization.",
    "They should have used 100,000.",
    "They should have used ROI.",
  ], 1, "The popular misreading of 95 percent.", "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Independent AND multiplies (P(A and B)=P(A)P(B) if independent). Mutually exclusive OR adds. A 95 percent CI is a long-run coverage claim about the method, not a 95 percent chance the next injury is inside. Zero event... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "P(at least one failure in 3 independent demands), each P=0.1. Best computation?", [
    "0.3 (add).",
    "1 - (0.9)^3 = 1 - 0.729 = 0.271.",
    "0.001 (multiply).",
    "0.9.",
  ], 1, "FORM: at least one = 1 - P(none).", "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Independent AND multiplies (P(A and B)=P(A)P(B) if independent). Mutually exclusive OR adds. A 95 percent CI is a long-run coverage claim about the method, not a 95 percent chance the next injury is inside. Zero event... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Finance drops both the guard budget and the insurance because P=0 this year. Best position?", [
    "Agree — P=0 is avoid and transfer both.",
    "Reject: a quiet year is not P=0, and dropping a control is not justified by dropping transfer; fund the guard.",
    "Drop only the guard, keep insurance.",
    "Drop only insurance, keep posters.",
  ], 1, "FIN: a probability story is not a license to un-fund controls and financing together.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Independent AND multiplies (P(A and B)=P(A)P(B) if independent). Mutually exclusive OR adds. A 95 percent CI is a long-run coverage claim about the method, not a 95 percent chance the next injury is inside. Zero event... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Last sentence: treat the two valves as independent for the calculation. Earlier: they share a tap. What to do?", [
    "Refuse to calculate.",
    "Multiply as instructed for the numeric, and state residual common-cause because of the shared tap — do not silently add.",
    "Add because of the tap.",
    "Use RPN.",
  ], 1, "STEM: last sentence sets the arithmetic; still name the residual.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Independent AND multiplies (P(A and B)=P(A)P(B) if independent). Mutually exclusive OR adds. A 95 percent CI is a long-run coverage claim about the method, not a 95 percent chance the next injury is inside. Zero event... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "TRIR point estimate uses (1 x 100,000)/200,000 = 0.5, then a CI is built around 0.5. Error?", [
    "None — 100,000 is acceptable.",
    "FORM: TRIR is (N x 200,000)/EH; the point estimate is already wrong, so the CI is centered on a wrong number.",
    "UNIT — feet.",
    "TIME — 8 hours.",
  ], 1, "FORM: wrong TRIR constant poisons the CI.", "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Independent AND multiplies (P(A and B)=P(A)P(B) if independent). Mutually exclusive OR adds. A 95 percent CI is a long-run coverage claim about the method, not a 95 percent chance the next injury is inside. Zero event... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at an offshore fabrication night shift. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Using RPN 720 as if it were P(failure)=720. Error.", [
    "None — RPN is a probability in percent.",
    "Wrong tool: RPN is SxOxD ranking, not a probability.",
    "RPN is a 95 percent CI.",
    "RPN is payback years.",
  ], 1, "TOOL: RPN is not P.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Independent AND multiplies (P(A and B)=P(A)P(B) if independent). Mutually exclusive OR adds. A 95 percent CI is a long-run coverage claim about the method, not a 95 percent chance the next injury is inside. Zero event... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "P(event)=0.01, loss $1M. Someone budgets expected loss $10k and therefore skips a $20k inerting system that would drop P sharply. Expected-value trap?", [
    "Skip — EV says so.",
    "EV of $10k does not waive a catastrophic low-P event or hierarchy; fund reasonably practicable engineering.",
    "Buy only insurance for $9k.",
    "Use median P.",
  ], 1, "HIER/FIN: expected value is not ALARP/hierarchy.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Independent AND multiplies (P(A and B)=P(A)P(B) if independent). Mutually exclusive OR adds. A 95 percent CI is a long-run coverage claim about the method, not a 95 percent chance the next injury is inside. Zero event... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A death occurs. Team waits for a statistically significant investigation sample before the required OSHA call. Clock?", [
    "Significance is required first.",
    "OSHA fatality notice is 8 hours. Probability class does not pause 1904.",
    "24 hours.",
    "7 days.",
  ], 1, "TIME: 8-hour fatality clock.", "TIME", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Independent AND multiplies (P(A and B)=P(A)P(B) if independent). Mutually exclusive OR adds. A 95 percent CI is a long-run coverage claim about the method, not a 95 percent chance the next injury is inside. Zero event... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
