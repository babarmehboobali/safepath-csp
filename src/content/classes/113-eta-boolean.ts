import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D2.06";

export const classFields: ClassFields = {
  hook: "An event tree asks for the probability of a consequence path. Someone adds when they should multiply along a path, or multiplies across mutually exclusive end states incorrectly.",
  hookOilGas: `On a production platform or plant, eta boolean shows up when operations push throughput while a higher control is still open. Event tree analysis (ETA): initiate â ordered branch successes/failures â path probability = product along the path (independent branches as assumed). Prefer a system/design fix over a polished lower-row program that keeps the wells online.`,
  hookConstruction: `On a busy jobsite, eta boolean shows up when schedule pressure sells a permit, rotation, or PPE package while design still can change. Event tree analysis (ETA): initiate â ordered branch successes/failures â path probability = product along the path (independent branches as assumed). Discriminate the open row before you laminate another card.`,
  rule: "Event tree analysis (ETA): initiate → ordered branch successes/failures → path probability = product along the path (independent branches as assumed). End states that partition the sample space sum to ~1. Boolean success/failure labels must match the gate logic stated.",
  modelCaption: "Framework → compute/classify → reject distractors → prefer system/design.",
  workedCase: "Initiator frequency λ=0.01/y. Branch survival 0.9 then mitigation fail 0.2 → path = 0.01×0.9×0.2=0.0018/y (if stem uses frequency×probabilities).",
  trapsJson: traps("Adding branch probabilities along a path.", "Forgetting initiator frequency.", "Treating dependent branches as independent without stem."),
  contrastJson: contrast([
    { looksLike: "Path probability", actually: "Product along branches" },
    { looksLike: "End-state set", actually: "Often partitions — sums ≈1" },
    { looksLike: "Success branch", actually: "As labeled" },
    { looksLike: "Failure branch", actually: "As labeled" },
    { looksLike: "FTA vs ETA", actually: "Causes vs event progression" },
  ]),
  mustScoreJson: mustScore(
    "ETA develops forward from an initiating event through success/failure branches.",
    "Boolean combinations of branch probabilities need independence honesty.",
    "Protective layers appear as success branches that avert outcomes.",
    "Common-cause can correlate branches.",
    "Use ETA results to improve barriers earlier.",
    "Wrong tool if the need is only component FMEA without sequence.",
    "Hierarchy: remove initiating events when open.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "initiating event can be eliminated", pick: "prefer elimination" },
    { ifStem: "branches assumed independent wrongly", pick: "model dependence" },
    { ifStem: "need sequence from initiator", pick: "ETA appropriate" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "layer success probability optimistic", pick: "challenge with proof-test data" },
  ),

  brief: `Event tree analysis (ETA): initiate â ordered branch successes/failures â path probability = product along the path (independent branches as assumed). End states that partition the sample space sum to ~1. Boolean success/failure labels must match the gate logic stated. If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Event tree analysis (ETA): initiate â ordered branch successes/failures â path probability = product along the path (independent branches as assumed). End states that partition the sample space sum to ~1. Boolean success/failure labels must match the gate logic stated. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
An event tree asks for the probability of a consequence path. Someone adds when they should multiply along a path, or multiplies across mutually exclusive end states incorrectly. Oil-and-gas skin: On a production platform or plant, eta boolean shows up when operations push throughput while a higher control is still open. Event tree analysis (ETA): initiate â ordered branch successes/failures â path probability = product along the path (independent branches as assumed). Prefer a system/design fix over a polished lower-row program that keeps the wells online. Construction skin: On a busy jobsite, eta boolean shows up when schedule pressure sells a permit, rotation, or PPE package while design still can change. Discriminate the open row before you laminate another card. Work the case: Initiator frequency Î»=0.01/y. Branch survival 0.9 then mitigation fail 0.2 â path = 0.01Ã0.9Ã0.2=0.0018/y (if stem uses frequencyÃprobabilities). Classic traps: Adding branch probabilities along a path.; Forgetting initiator frequency.; Treating dependent branches as independent without stem.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for eta boolean. Verify whether a higher system or design fix is still open. Contrast labels: Path probability is actually Product along branches; End-state set is actually Often partitions — sums ≈1; Success branch is actually As labeled; Failure branch is actually As labeled; FTA vs ETA is actually Causes vs event progression. If the stem shows initiating event can be eliminated, pick prefer elimination. If the stem shows branches assumed independent wrongly, pick model dependence. If the stem shows need sequence from initiator, pick ETA appropriate. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows layer success probability optimistic, pick challenge with proof-test data. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `ETA Boolean path product sits in CSP-11 Domain 2 Management Systems. The exam tests whether you apply the rule when a package already looks complete. Core rule: Event tree analysis (ETA): initiate â ordered branch successes/failures â path probability = product along the path (independent branches as assumed). End states that partition the sample space sum to ~1. Boolean success/failure labels must match the gate logic stated. Field context: An event tree asks for the probability of a consequence path. Someone adds when they should multiply along a path, or multiplies across mutually exclusive end states incorrectly. The oil-and-gas skin shifts the same decision into production pressure: On a production platform or plant, eta boolean shows up when operations push throughput while a higher control is still open. Event tree analysis (ETA): initiate â ordered branch successes/failures â path probability = product along the path (independent branches as assumed). Prefer a system/design fix over a polished lower-row program that keeps the wells online. The construction skin shifts it into schedule and trade stacking: On a busy jobsite, eta boolean shows up when schedule pressure sells a permit, rotation, or PPE package while design still can change. Discriminate the open row before you laminate another card. Model caption for this class: Framework â compute/classify â reject distractors â prefer system/design. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) ETA develops forward from an initiating event through success/failure branches. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Boolean combinations of branch probabilities need independence honesty. (3) Protective layers appear as success branches that avert outcomes. (4) Common-cause can correlate branches. (5) Use ETA results to improve barriers earlier. (6) Wrong tool if the need is only component FMEA without sequence. (7) Hierarchy: remove initiating events when open. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Initiator frequency Î»=0.01/y. Branch survival 0.9 then mitigation fail 0.2 â path = 0.01Ã0.9Ã0.2=0.0018/y (if stem uses frequencyÃprobabilities). Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Adding branch probabilities along a path.; Forgetting initiator frequency.; Treating dependent branches as independent without stem.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Path probability” is really Product along branches; “End-state set” is really Often partitions — sums ≈1; “Success branch” is really As labeled; “Failure branch” is really As labeled; “FTA vs ETA” is really Causes vs event progression. Stem-if-then map: if initiating event can be eliminated → prefer elimination; if branches assumed independent wrongly → model dependence; if need sequence from initiator → ETA appropriate; if two answers work → higher hierarchy / system / design; if layer success probability optimistic → challenge with proof-test data. Scoring favors evidence, owners, verification, and hierarchy-smart controls on eta boolean. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "ETA Boolean path product?",
  cardBack: "Multiply along path; sum exclusive ends. Study only.",
  teachBackKey: "Compute a path product and state the sum rule.",
  formulaSlug: "eta-path",
};

export const items: ClassItem[] = [
  exam(
    T,
    "An event tree path has two independent success probabilities 0.9 then 0.8 on one path. Path probability?",
    [
      "0.72",
      "1.70",
      "0.10",
      "0.98",
    ],
    0,
    "Core Rule: classify the last sentence, then apply the topic rule. Calculation Steps: None unless numbers appear — then compute carefully. Standards Cited: CSP-11 teaching for this class. Why Each Distractor Fails: 0.72: Correct: independent AND multiplies — 0.9×0.8=0.72. | 1.70: Added along the path — wrong. | 0.10: Used a single failure probability. | 0.98: Used parallel success formula incorrectly.",
    "FORM",
    "Exam",
    [
      "Correct: independent AND multiplies — 0.9×0.8=0.72.",
      "Added along the path — wrong.",
      "Used a single failure probability.",
      "Used parallel success formula incorrectly.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Event tree analysis (ETA): initiate → ordered branch successes/failures → path probability = product along the path (independent branches as assumed). End states that partition the sample space sum to ~1. Boolean succ... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Initiating event 0.02/y times path conditional probability 0.15. Consequence frequency?",
    [
      "0.003 /y",
      "0.17 /y",
      "0.02 /y",
      "1.15 /y",
    ],
    0,
    "Core Rule: classify the last sentence, then apply the topic rule. Calculation Steps: None unless numbers appear — then compute carefully. Standards Cited: CSP-11 teaching for this class. Why Each Distractor Fails: 0.003 /y: Correct: 0.02×0.15=0.003 /y. | 0.17 /y: Added rates — wrong. | 0.02 /y: Dropped the path probability. | 1.15 /y: Nonsensical sum.",
    "FORM",
    "Exam",
    [
      "Correct: 0.02×0.15=0.003 /y.",
      "Added rates — wrong.",
      "Dropped the path probability.",
      "Nonsensical sum.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Event tree analysis (ETA): initiate → ordered branch successes/failures → path probability = product along the path (independent branches as assumed). End states that partition the sample space sum to ~1. Boolean succ... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Two mutually exclusive end states are listed as 0.4 and 0.6. What must be true?",
    [
      "They partition the outcome space for that initiator (sum to 1 here)",
      "You must multiply them",
      "They are the same state",
      "Availability is 0.4",
    ],
    0,
    "Core Rule: classify the last sentence, then apply the topic rule. Calculation Steps: None unless numbers appear — then compute carefully. Standards Cited: CSP-11 teaching for this class. Why Each Distractor Fails: They partition the outcome space for that initiator (sum to 1 here): Correct: exclusive end states that cover the space sum to 1 here. | You must multiply them: Multiply is for AND along a path, not exclusive ends. | They are the same state: Distinct states. | Availability is 0.4: Availability is a different metric.",
    "STEM",
    "Exam",
    [
      "Correct: exclusive end states that cover the space sum to 1 here.",
      "Multiply is for AND along a path, not exclusive ends.",
      "Distinct states.",
      "Availability is a different metric.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Event tree analysis (ETA): initiate → ordered branch successes/failures → path probability = product along the path (independent branches as assumed). End states that partition the sample space sum to ~1. Boolean succ... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "A candidate adds 0.9+0.8 along a single ETA path of independent successes. Diagnosis?",
    [
      "Wrong operator — independent successes on one path multiply",
      "Correct sum rule always",
      "Required by FTA",
      "Required by SWPPP",
    ],
    0,
    "Core Rule: classify the last sentence, then apply the topic rule. Calculation Steps: None unless numbers appear — then compute carefully. Standards Cited: CSP-11 teaching for this class. Why Each Distractor Fails: Wrong operator — independent successes on one path multiply: Correct: AND along a path multiplies; adding is the miss. | Correct sum rule always: Sum is for exclusive OR ends, not this path. | Required by FTA: FTA cut sets are a different picture. | Required by SWPPP: SWPPP is unrelated.",
    "FORM",
    "Exam",
    [
      "Correct: AND along a path multiplies; adding is the miss.",
      "Sum is for exclusive OR ends, not this path.",
      "FTA cut sets are a different picture.",
      "SWPPP is unrelated.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Event tree analysis (ETA): initiate → ordered branch successes/failures → path probability = product along the path (independent branches as assumed). End states that partition the sample space sum to ~1. Boolean succ... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "A branch is labeled Boolean 'OK' after a safeguard succeeds. Meaning on the tree?",
    [
      "That branch follows the success outcome of the asked event",
      "MTTR is zero",
      "PEL is met",
      "RTO is zero",
    ],
    0,
    "Core Rule: classify the last sentence, then apply the topic rule. Calculation Steps: None unless numbers appear — then compute carefully. Standards Cited: CSP-11 teaching for this class. Why Each Distractor Fails: That branch follows the success outcome of the asked event: Correct: 'OK' marks the success branch of that event. | MTTR is zero: Not an MTTR claim. | PEL is met: Not an OEL claim. | RTO is zero: Not an RTO claim.",
    "STEM",
    "Exam",
    [
      "Correct: 'OK' marks the success branch of that event.",
      "Not an MTTR claim.",
      "Not an OEL claim.",
      "Not an RTO claim.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Event tree analysis (ETA): initiate → ordered branch successes/failures → path probability = product along the path (independent branches as assumed). End states that partition the sample space sum to ~1. Boolean succ... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at an offshore fabrication night shift. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Quick contrast: when do you reach for ETA versus FTA.",
    [
      "ETA: forward from initiator through pivotal events; FTA: top-down logic to a top event",
      "They are identical always",
      "ETA is only IH sampling",
      "FTA is only SWPPP",
    ],
    0,
    "Core Rule: classify the last sentence, then apply the topic rule. Calculation Steps: None unless numbers appear — then compute carefully. Standards Cited: CSP-11 teaching for this class. Why Each Distractor Fails: ETA: forward from initiator through pivotal events; FTA: top-down logic to a top event: Correct: ETA forward; FTA top-down to a top event. | They are identical always: Related system-safety tools, not identical. | ETA is only IH sampling: IH sampling is not ETA. | FTA is only SWPPP: SWPPP is not FTA.",
    "TOOL",
    "Exam",
    [
      "Correct: ETA forward; FTA top-down to a top event.",
      "Related system-safety tools, not identical.",
      "IH sampling is not ETA.",
      "SWPPP is not FTA.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Event tree analysis (ETA): initiate → ordered branch successes/failures → path probability = product along the path (independent branches as assumed). End states that partition the sample space sum to ~1. Boolean succ... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Two branches share an undeclared common support system but the stem treats them as independent. Best move?",
    [
      "Reject independence — model dependence or get stem support",
      "Multiply anyway",
      "Add anyway",
      "Set frequency to zero",
    ],
    0,
    "Core Rule: classify the last sentence, then apply the topic rule. Calculation Steps: None unless numbers appear — then compute carefully. Standards Cited: CSP-11 teaching for this class. Why Each Distractor Fails: Reject independence — model dependence or get stem support: Correct: undeclared dependence breaks independence. | Multiply anyway: Multiplying anyway overstates split success. | Add anyway: Adding anyway is still wrong here. | Set frequency to zero: Zeroing hides risk.",
    "STEM",
    "Exam",
    [
      "Correct: undeclared dependence breaks independence.",
      "Multiplying anyway overstates split success.",
      "Adding anyway is still wrong here.",
      "Zeroing hides risk.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Event tree analysis (ETA): initiate → ordered branch successes/failures → path probability = product along the path (independent branches as assumed). End states that partition the sample space sum to ~1. Boolean succ... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at a plastics compounding turnaround. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Path factors 0.5 × 0.5 × 0.4. Path probability.",
    [
      "0.10",
      "1.40",
      "0.50",
      "0.00",
    ],
    0,
    "Core Rule: classify the last sentence, then apply the topic rule. Calculation Steps: None unless numbers appear — then compute carefully. Standards Cited: CSP-11 teaching for this class. Why Each Distractor Fails: 0.10: Correct: 0.5×0.5×0.4=0.10. | 1.40: Added the factors. | 0.50: Stopped after one factor. | 0.00: Not given as impossible.",
    "FORM",
    "Exam",
    [
      "Correct: 0.5×0.5×0.4=0.10.",
      "Added the factors.",
      "Stopped after one factor.",
      "Not given as impossible.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Event tree analysis (ETA): initiate → ordered branch successes/failures → path probability = product along the path (independent branches as assumed). End states that partition the sample space sum to ~1. Boolean succ... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Listed end-state probabilities are 0.45 and 0.45 and the stem never says they are exclusive. Concern?",
    [
      "They may overlap or omit states — do not force a sum-to-1 story",
      "Always multiply to 0.2025 as the answer",
      "Always treat as A=0.9",
      "Always ignore the initiator",
    ],
    0,
    "Core Rule: classify the last sentence, then apply the topic rule. Calculation Steps: None unless numbers appear — then compute carefully. Standards Cited: CSP-11 teaching for this class. Why Each Distractor Fails: They may overlap or omit states — do not force a sum-to-1 story: Correct: without exclusivity/completeness, do not force partition math. | Always multiply to 0.2025 as the answer: Multiplying end states is not the default. | Always treat as A=0.9: Availability is unrelated. | Always ignore the initiator: Initiator still matters.",
    "STEM",
    "Exam",
    [
      "Correct: without exclusivity/completeness, do not force partition math.",
      "Multiplying end states is not the default.",
      "Availability is unrelated.",
      "Initiator still matters.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Event tree analysis (ETA): initiate → ordered branch successes/failures → path probability = product along the path (independent branches as assumed). End states that partition the sample space sum to ~1. Boolean succ... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "ETA shows a high-consequence path still open and a design change can remove the initiator. Prefer?",
    [
      "Remove/reduce the initiator or pivotal failure by design when open",
      "Poster the ETA only",
      "Only buy insurance",
      "Only shorten the tree drawing",
    ],
    0,
    "Core Rule: classify the last sentence, then apply the topic rule. Calculation Steps: None unless numbers appear — then compute carefully. Standards Cited: CSP-11 teaching for this class. Why Each Distractor Fails: Remove/reduce the initiator or pivotal failure by design when open: Correct: design out initiator/pivotal failure when open. | Poster the ETA only: A poster is not control. | Only buy insurance: Insurance is transfer — not the highest open fix. | Only shorten the tree drawing: Drawing length is not risk control.",
    "HIER",
    "Exam",
    [
      "Correct: design out initiator/pivotal failure when open.",
      "A poster is not control.",
      "Insurance is transfer — not the highest open fix.",
      "Drawing length is not risk control.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Event tree analysis (ETA): initiate → ordered branch successes/failures → path probability = product along the path (independent branches as assumed). End states that partition the sample space sum to ~1. Boolean succ... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "On-screen calculator, ETA multiplications of decimals. Best tip?",
    [
      "Multiply conditionals carefully; watch scientific notation; pick closest option",
      "Always add first",
      "Always use radians",
      "Invent a formula sheet",
    ],
    0,
    "Core Rule: classify the last sentence, then apply the topic rule. Calculation Steps: None unless numbers appear — then compute carefully. Standards Cited: CSP-11 teaching for this class. Why Each Distractor Fails: Multiply conditionals carefully; watch scientific notation; pick closest option: Correct: careful multiplication / closest option. | Always add first: Adding is the classic ETA miss. | Always use radians: Radians are for trig items. | Invent a formula sheet: No invented sheet.",
    "FORM",
    "Exam",
    [
      "Correct: careful multiplication / closest option.",
      "Adding is the classic ETA miss.",
      "Radians are for trig items.",
      "No invented sheet.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Event tree analysis (ETA): initiate → ordered branch successes/failures → path probability = product along the path (independent branches as assumed). End states that partition the sample space sum to ~1. Boolean succ... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Two answers both cut risk: validated independent protection that breaks the path versus a laminated ETA poster. Prefer?",
    [
      "Independent protection / design that breaks the path",
      "Laminated poster",
      "Assume dependence is fine",
      "Drop the initiator term",
    ],
    0,
    "Core Rule: classify the last sentence, then apply the topic rule. Calculation Steps: None unless numbers appear — then compute carefully. Standards Cited: CSP-11 teaching for this class. Why Each Distractor Fails: Independent protection / design that breaks the path: Correct: protection/design that breaks the path. | Laminated poster: Poster does not break the path. | Assume dependence is fine: Dependence must be justified. | Drop the initiator term: Dropping the initiator hides frequency.",
    "HIER",
    "Exam",
    [
      "Correct: protection/design that breaks the path.",
      "Poster does not break the path.",
      "Dependence must be justified.",
      "Dropping the initiator hides frequency.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Event tree analysis (ETA): initiate → ordered branch successes/failures → path probability = product along the path (independent branches as assumed). End states that partition the sample space sum to ~1. Boolean succ... Verify the critical step before accepting a lower-tier control.",
    }
  )
];
