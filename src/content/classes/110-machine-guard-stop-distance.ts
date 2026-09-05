import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D1.07";

export const classFields: ClassFields = {
  hook: "Presence-sensing distance S=K T + C only with stem K,T,C. A yellow chain is not a guard. Cobot sticker ≠ risk assessment.",
  hookOilGas: `Press cell light curtain: compute S; prefer fixed/interlocked guards when feasible.`,
  hookConstruction: `Jobsite saws and fab cells: fence the bite; procedures are not guards.`,
  rule: "S = K×T + C when stem gives the method. K=approach speed constant; T=total stop time; C=intrusion/depth factor per method. Do not drop C. Do not mix in/mm. Hierarchy: eliminate reach → fixed/interlocked guard → safeguarding device → admin/PPE. Robotics need risk assessment before collaborative marketing claims.",
  modelCaption: "S=KT+C; guard hierarchy; robot RA before cobot mode.",
  workedCase: "K=63 in/s, T=0.25 s, C=1.0 in → S=63×0.25+1=15.75+1=16.75 in. Dropping C yields 15.75 (FORM trap). Using 63 mm/s is UNIT trap.",
  trapsJson: traps(
    "Dropping C",
    "Procedure instead of feasible guard",
    "Cobot sticker as residual-risk acceptance",
  ),
  contrastJson: contrast([
    { looksLike: "Fixed/interlocked guard", actually: "Engineering separation" },
    { looksLike: "Presence sensing", actually: "S=KT+C device" },
    { looksLike: "Two-hand control", actually: "Safeguarding — not always equal to fixed" },
    { looksLike: "Yellow chain", actually: "Boundary marker ≠ guard" },
    { looksLike: "Industrial robot", actually: "RA required" },
    { looksLike: "Collaborative claim", actually: "Not automatic safe" },
  ]),
  mustScoreJson: mustScore(
    "Stop-distance / safety distance for presence-sensing devices uses stopping performance and approach speed.",
    "If calculated distance exceeds available space, redesign \u2014 do not hope.",
    "Include deeper penetration factors when the standard/stem requires.",
    "Maintain brakes/clutches that determine stop time.",
    "Bypassing light curtains for production voids the safeguard.",
    "Hierarchy: fixed guards when access rare.",
    "Calculator: use stem formula; closest value.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "distance too short for stop time", pick: "increase distance or improve stopping" },
    { ifStem: "curtain bypassed for rate", pick: "stop \u2014 restore safeguarding" },
    { ifStem: "stop time worsened after maintenance", pick: "revalidate safety distance" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "access rare and fixed guard possible", pick: "prefer fixed guard" },
  ),

  brief: `S = KÃT + C when stem gives the method. K=approach speed constant; T=total stop time; C=intrusion/depth factor per method. Do not drop C. Do not mix in/mm. Hierarchy: eliminate reach â fixed/interlocked guard â safeguarding device â admin/PPE. Robotics need risk assessment before collaborative marketing claims. If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
S = KÃT + C when stem gives the method. K=approach speed constant; T=total stop time; C=intrusion/depth factor per method. Do not drop C. Do not mix in/mm. Hierarchy: eliminate reach â fixed/interlocked guard â safeguarding device â admin/PPE. Robotics need risk assessment before collaborative marketing claims. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
Presence-sensing distance S=K T + C only with stem K,T,C. A yellow chain is not a guard. Cobot sticker â  risk assessment. Oil-and-gas skin: Press cell light curtain: compute S; prefer fixed/interlocked guards when feasible. Construction skin: Jobsite saws and fab cells: fence the bite; procedures are not guards. Work the case: K=63 in/s, T=0.25 s, C=1.0 in â S=63Ã0.25+1=15.75+1=16.75 in. Dropping C yields 15.75 (FORM trap). Using 63 mm/s is UNIT trap. Classic traps: Dropping C; Procedure instead of feasible guard; Cobot sticker as residual-risk acceptance. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for machine guard stop distance. Verify whether a higher system or design fix is still open. Contrast labels: Fixed/interlocked guard is actually Engineering separation; Presence sensing is actually S=KT+C device; Two-hand control is actually Safeguarding — not always equal to fixed; Yellow chain is actually Boundary marker ≠ guard; Industrial robot is actually RA required. If the stem shows distance too short for stop time, pick increase distance or improve stopping. If the stem shows curtain bypassed for rate, pick stop \u2014 restore safeguarding. If the stem shows stop time worsened after maintenance, pick revalidate safety distance. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows access rare and fixed guard possible, pick prefer fixed guard. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `S=KT+C; is a chain a guard sits in CSP-11 Domain 1 Applied Safety Technology. The exam tests whether you apply the rule when a package already looks complete. Core rule: S = KÃT + C when stem gives the method. K=approach speed constant; T=total stop time; C=intrusion/depth factor per method. Do not drop C. Do not mix in/mm. Hierarchy: eliminate reach â fixed/interlocked guard â safeguarding device â admin/PPE. Robotics need risk assessment before collaborative marketing claims. Field context: Presence-sensing distance S=K T + C only with stem K,T,C. A yellow chain is not a guard. Cobot sticker â  risk assessment. The oil-and-gas skin shifts the same decision into production pressure: Press cell light curtain: compute S; prefer fixed/interlocked guards when feasible. The construction skin shifts it into schedule and trade stacking: Jobsite saws and fab cells: fence the bite; procedures are not guards. Model caption for this class: S=KT+C; guard hierarchy; robot RA before cobot mode. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Stop-distance / safety distance for presence-sensing devices uses stopping performance and approach speed. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) If calculated distance exceeds available space, redesign — do not hope. (3) Include deeper penetration factors when the standard/stem requires. (4) Maintain brakes/clutches that determine stop time. (5) Bypassing light curtains for production voids the safeguard. (6) Hierarchy: fixed guards when access rare. (7) Calculator: use stem formula; closest value. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: K=63 in/s, T=0.25 s, C=1.0 in â S=63Ã0.25+1=15.75+1=16.75 in. Dropping C yields 15.75 (FORM trap). Using 63 mm/s is UNIT trap. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Dropping C; Procedure instead of feasible guard; Cobot sticker as residual-risk acceptance. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Fixed/interlocked guard” is really Engineering separation; “Presence sensing” is really S=KT+C device; “Two-hand control” is really Safeguarding — not always equal to fixed; “Yellow chain” is really Boundary marker ≠ guard; “Industrial robot” is really RA required; “Collaborative claim” is really Not automatic safe. Stem-if-then map: if distance too short for stop time → increase distance or improve stopping; if curtain bypassed for rate → stop \u2014 restore safeguarding; if stop time worsened after maintenance → revalidate safety distance; if two answers work → higher hierarchy / system / design; if access rare and fixed guard possible → prefer fixed guard. Scoring favors evidence, owners, verification, and hierarchy-smart controls on machine guard stop distance. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "S=KT+C; is a chain a guard?",
  cardBack: "16.75 in example; chain≠guard; cobot≠RA. Study only.",
  teachBackKey: "Computes S with C visible; rejects chain/cobot traps.",
  formulaSlug: "stop-distance",
};

export const items: ClassItem[] = [
  exam(
    "CSP-11 D1.07",
    "You are the CSP reviewing a live decision at a refinery coker outage. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: K=63 in/s, T=0.25 s, C=1.0 in. S.",
    [
      "16.75 in",
      "15.75 (no C)",
      "63",
      "0.25",
    ],
    0,
    "Core Rule: S=KT+C. Calculation Steps: 15.75+1=16.75. Standards Cited: Stem method. Why Each Distractor Fails: 16.75 in: Correct: 16.75 | 15.75 (no C): Fails: Dropped C | 63: Fails: K | 0.25: Fails: T",
    "FORM",
    "Exam",
    [
      "Correct: 16.75",
      "Fails: Dropped C",
      "Fails: K",
      "Fails: T",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "S = K×T + C when stem gives the method. K=approach speed constant; T=total stop time; C=intrusion/depth factor per method. Do not drop C. Do not mix in/mm. Hierarchy: eliminate reach → fixed/interlocked guard → safegu... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.07",
    "You are the CSP reviewing a live decision at a bridge deck pour laydown yard. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Dropped C trap value here.",
    [
      "16.75",
      "15.75 in",
      "1.0",
      "63.25",
    ],
    1,
    "Core Rule: KT only. Calculation Steps: 63×0.25. Standards Cited: Distractor. Why Each Distractor Fails: 15.75 in: Correct: Trap | 16.75: Fails: Correct S | 1.0: Fails: C | 63.25: Fails: Sum",
    "FORM",
    "Exam",
    [
      "Fails: Correct S",
      "Correct: Trap",
      "Fails: C",
      "Fails: Sum",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "S = K×T + C when stem gives the method. K=approach speed constant; T=total stop time; C=intrusion/depth factor per method. Do not drop C. Do not mix in/mm. Hierarchy: eliminate reach → fixed/interlocked guard → safegu... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.07",
    "You are the CSP reviewing a live decision at a pharma suite changeover. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Yellow chain across a nip.",
    [
      "Equal to interlocked guard",
      "Satisfies 212 always",
      "Not a guard",
      "Sets K",
    ],
    2,
    "Core Rule: Marker≠guard. Calculation Steps: Fence the bite. Standards Cited: Machines. Why Each Distractor Fails: Not a guard: Correct: Not guard | Equal to interlocked guard: Fails: False | Satisfies 212 always: Fails: False | Sets K: Fails: False",
    "HIER",
    "Exam",
    [
      "Fails: False",
      "Fails: False",
      "Correct: Not guard",
      "Fails: False",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "S = K×T + C when stem gives the method. K=approach speed constant; T=total stop time; C=intrusion/depth factor per method. Do not drop C. Do not mix in/mm. Hierarchy: eliminate reach → fixed/interlocked guard → safegu... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.07",
    "You are the CSP reviewing a live decision at a warehouse second-shift startup. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Feasible fixed guard vs two-hand as primary.",
    [
      "Two-hand always higher",
      "PPE first",
      "EMR first",
      "Prefer fixed/interlocked when feasible",
    ],
    3,
    "Core Rule: Hierarchy. Calculation Steps: Engineering. Standards Cited: B11/OSHA thinking. Why Each Distractor Fails: Prefer fixed/interlocked when feasible: Correct: Fixed | Two-hand always higher: Fails: False | PPE first: Fails: PPE | EMR first: Fails: FIN",
    "HIER",
    "Exam",
    [
      "Fails: False",
      "Fails: PPE",
      "Fails: FIN",
      "Correct: Fixed",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "S = K×T + C when stem gives the method. K=approach speed constant; T=total stop time; C=intrusion/depth factor per method. Do not drop C. Do not mix in/mm. Hierarchy: eliminate reach → fixed/interlocked guard → safegu... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.07",
    "K given in mm/s but T in s and answer wanted in inches. Risk?",
    [
      "UNIT conversion miss",
      "None",
      "FORM only",
      "TIME clock",
    ],
    0,
    "Core Rule: Keep units consistent. Calculation Steps: Convert. Standards Cited: S formula. Why Each Distractor Fails: UNIT conversion miss: Correct: UNIT | None: Fails: False | FORM only: Fails: Partial | TIME clock: Fails: No",
    "UNIT",
    "Exam",
    [
      "Correct: UNIT",
      "Fails: False",
      "Fails: Partial",
      "Fails: No",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "S = K×T + C when stem gives the method. K=approach speed constant; T=total stop time; C=intrusion/depth factor per method. Do not drop C. Do not mix in/mm. Hierarchy: eliminate reach → fixed/interlocked guard → safegu... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.07",
    "You are the CSP reviewing a live decision at a hospital utility plant shutdown. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Cobot sticker without risk assessment.",
    [
      "Automatic acceptance",
      "STEM miss — RA still required",
      "Replaces 212",
      "Sets C=0",
    ],
    1,
    "Core Rule: Marketing≠RA. Calculation Steps: Robotics. Standards Cited: RIA/OSHA. Why Each Distractor Fails: STEM miss — RA still required: Correct: Need RA | Automatic acceptance: Fails: False | Replaces 212: Fails: False | Sets C=0: Fails: False",
    "STEM",
    "Exam",
    [
      "Fails: False",
      "Correct: Need RA",
      "Fails: False",
      "Fails: False",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "S = K×T + C when stem gives the method. K=approach speed constant; T=total stop time; C=intrusion/depth factor per method. Do not drop C. Do not mix in/mm. Hierarchy: eliminate reach → fixed/interlocked guard → safegu... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.07",
    "You are the CSP reviewing a live decision at a food packaging SKU change. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: T doubles, K and C fixed. S.",
    [
      "Unchanged",
      "Decreases",
      "Increases by K×ΔT",
      "Becomes C only",
    ],
    2,
    "Core Rule: Linear in T. Calculation Steps: Inspect. Standards Cited: S. Why Each Distractor Fails: Increases by K×ΔT: Correct: Increases | Unchanged: Fails: False | Decreases: Fails: False | Becomes C only: Fails: False",
    "FORM",
    "Exam",
    [
      "Fails: False",
      "Fails: False",
      "Correct: Increases",
      "Fails: False",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "S = K×T + C when stem gives the method. K=approach speed constant; T=total stop time; C=intrusion/depth factor per method. Do not drop C. Do not mix in/mm. Hierarchy: eliminate reach → fixed/interlocked guard → safegu... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.07",
    "You are the CSP reviewing a live decision at a semiconductor tool install. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Point of operation best conceptual control.",
    [
      "Add more signs only",
      "Faster production",
      "Higher EMR",
      "Prevent reach into the bite",
    ],
    3,
    "Core Rule: FENCE THE BITE. Calculation Steps: Design. Standards Cited: Machines. Why Each Distractor Fails: Prevent reach into the bite: Correct: Engineering idea | Add more signs only: Fails: Admin | Faster production: Fails: Not safety | Higher EMR: Fails: FIN",
    "HIER",
    "Exam",
    [
      "Fails: Admin",
      "Fails: Not safety",
      "Fails: FIN",
      "Correct: Engineering idea",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "S = K×T + C when stem gives the method. K=approach speed constant; T=total stop time; C=intrusion/depth factor per method. Do not drop C. Do not mix in/mm. Hierarchy: eliminate reach → fixed/interlocked guard → safegu... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.07",
    "You are the CSP reviewing a live decision at an offshore fabrication night shift. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: K=1600 mm/s, T=0.20 s, C=50 mm. S.",
    [
      "370 mm",
      "320 mm (no C)",
      "1600",
      "50",
    ],
    0,
    "Core Rule: 1600×0.2+50. Calculation Steps: 320+50=370. Standards Cited: Metric stem. Why Each Distractor Fails: 370 mm: Correct: 370 | 320 mm (no C): Fails: Dropped C | 1600: Fails: K | 50: Fails: C",
    "FORM",
    "Exam",
    [
      "Correct: 370",
      "Fails: Dropped C",
      "Fails: K",
      "Fails: C",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "S = K×T + C when stem gives the method. K=approach speed constant; T=total stop time; C=intrusion/depth factor per method. Do not drop C. Do not mix in/mm. Hierarchy: eliminate reach → fixed/interlocked guard → safegu... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.07",
    "You are the CSP reviewing a live decision at a municipal water-plant retrofit. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Presence sensing vs fixed guard.",
    [
      "Identical always",
      "Device with S calc vs physical separation",
      "Chain equals both",
      "Insurance equals both",
    ],
    1,
    "Core Rule: Contrast. Calculation Steps: Methods. Standards Cited: Safeguarding. Why Each Distractor Fails: Device with S calc vs physical separation: Correct: Contrast | Identical always: Fails: False | Chain equals both: Fails: False | Insurance equals both: Fails: FIN",
    "TOOL",
    "Exam",
    [
      "Fails: False",
      "Correct: Contrast",
      "Fails: False",
      "Fails: FIN",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "S = K×T + C when stem gives the method. K=approach speed constant; T=total stop time; C=intrusion/depth factor per method. Do not drop C. Do not mix in/mm. Hierarchy: eliminate reach → fixed/interlocked guard → safegu... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.07",
    "Hand-tool instead of point-of-operation guard when guard feasible?",
    [
      "Correct",
      "UNIT",
      "HIER miss",
      "TIME",
    ],
    2,
    "Core Rule: Guard first. Calculation Steps: 212 thinking. Standards Cited: Tools. Why Each Distractor Fails: HIER miss: Correct: HIER | Correct: Fails: No | UNIT: Fails: No | TIME: Fails: No",
    "HIER",
    "Exam",
    [
      "Fails: No",
      "Fails: No",
      "Correct: HIER",
      "Fails: No",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "S = K×T + C when stem gives the method. K=approach speed constant; T=total stop time; C=intrusion/depth factor per method. Do not drop C. Do not mix in/mm. Hierarchy: eliminate reach → fixed/interlocked guard → safegu... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.07",
    "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: VERIFY note for K.",
    [
      "Always 63 everywhere",
      "OSHA tattoos K",
      "ISO forbids K",
      "Do not hard-code K without stem/method",
    ],
    3,
    "Core Rule: Stem supplies K. Calculation Steps: Honesty. Standards Cited: Methods. Why Each Distractor Fails: Do not hard-code K without stem/method: Correct: VERIFY | Always 63 everywhere: Fails: False | OSHA tattoos K: Fails: False | ISO forbids K: Fails: False",
    "STEM",
    "Exam",
    [
      "Fails: False",
      "Fails: False",
      "Fails: False",
      "Correct: VERIFY",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "S = K×T + C when stem gives the method. K=approach speed constant; T=total stop time; C=intrusion/depth factor per method. Do not drop C. Do not mix in/mm. Hierarchy: eliminate reach → fixed/interlocked guard → safegu... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];

