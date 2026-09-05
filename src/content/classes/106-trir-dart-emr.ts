import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D2.01";

export const classFields: ClassFields = {
  hook: "One gym for TRIR, DART, severity, and how EMR pressure can warp decisions — without promising any BCSP score.",
  hookOilGas: `Contractor gate uses TRIR; DART tells a different story; EMR is insurance math, not a hierarchy control.`,
  hookConstruction: `GC scorecard mixes TRIR with EMR: keep formulas straight and refuse FIN traps.`,
  rule: "TRIR=(N_recordable×200,000)/EH. DART=(N_DART×200,000)/EH. Severity often (days×200,000)/EH when stem defines days. EMR is experience modification from insurer/NCCI-style weighting (VERIFY weights) — not a control. Recordable ≠ 1904.39 reportable clocks.",
  modelCaption: "Counts×200,000÷hours; TRIR vs DART vs severity; EMR≠hierarchy.",
  workedCase: "6 recordables, 600,000 hours → TRIR=6×200000/600000=2.0. If 4 are DART cases → DART=4×200000/600000≈1.33. 120 lost days → severity=120×200000/600000=40 (stem-defined).",
  trapsJson: traps(
    "Using employees instead of hours",
    "TRIR with DART numerator",
    "Treating EMR improvement as a hazard control",
  ),
  contrastJson: contrast([
    { looksLike: "TRIR", actually: "All recordables rate" },
    { looksLike: "DART", actually: "Days-away/restricted/transfer rate" },
    { looksLike: "Severity", actually: "Days-based intensity" },
    { looksLike: "EMR", actually: "Insurance modifier" },
    { looksLike: "Recordable", actually: "1904.7 logic" },
    { looksLike: "Reportable", actually: "1904.39 clocks" },
  ]),
  mustScoreJson: mustScore(
    "TRIR/DART use (N times 200,000)/hours; EMR is experience modification for insurance.",
    "Normalize by hours; do not compare raw counts across unequal exposure.",
    "DART subsets affect days away/restricted/transfer cases.",
    "Low rates can hide high severity \u2014 read the stem.",
    "Do not manage only to TRIR while leading indicators rot.",
    "Incentives on rates can suppress reporting.",
    "Calculator: careful arithmetic and rounding.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "hours and N given for TRIR", pick: "(N times 200000)/hours" },
    { ifStem: "raw counts compared across sites", pick: "normalize by hours" },
    { ifStem: "bonus for zero TRIR suppresses reporting", pick: "realign incentives" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "only TRIR on dashboard", pick: "add leading indicators" },
  ),

  brief: `TRIR=(N_recordableÃ200,000)/EH. DART=(N_DARTÃ200,000)/EH. Severity often (daysÃ200,000)/EH when stem defines days. EMR is experience modification from insurer/NCCI-style weighting (VERIFY weights) â not a control. Recordable â  1904.39 reportable clocks. If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
TRIR=(N_recordableÃ200,000)/EH. DART=(N_DARTÃ200,000)/EH. Severity often (daysÃ200,000)/EH when stem defines days. EMR is experience modification from insurer/NCCI-style weighting (VERIFY weights) â not a control. Recordable â  1904.39 reportable clocks. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
One gym for TRIR, DART, severity, and how EMR pressure can warp decisions â without promising any BCSP score. Oil-and-gas skin: Contractor gate uses TRIR; DART tells a different story; EMR is insurance math, not a hierarchy control. Construction skin: GC scorecard mixes TRIR with EMR: keep formulas straight and refuse FIN traps. Work the case: 6 recordables, 600,000 hours â TRIR=6Ã200000/600000=2.0. If 4 are DART cases â DART=4Ã200000/600000â1.33. 120 lost days â severity=120Ã200000/600000=40 (stem-defined). Classic traps: Using employees instead of hours; TRIR with DART numerator; Treating EMR improvement as a hazard control. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for trir dart emr. Verify whether a higher system or design fix is still open. Contrast labels: TRIR is actually All recordables rate; DART is actually Days-away/restricted/transfer rate; Severity is actually Days-based intensity; EMR is actually Insurance modifier; Recordable is actually 1904.7 logic. If the stem shows hours and N given for TRIR, pick (N times 200000)/hours. If the stem shows raw counts compared across sites, pick normalize by hours. If the stem shows bonus for zero TRIR suppresses reporting, pick realign incentives. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows only TRIR on dashboard, pick add leading indicators. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `TRIR/DART/severity/EMR sits in CSP-11 Domain 2 Management Systems. The exam tests whether you apply the rule when a package already looks complete. Core rule: TRIR=(N_recordableÃ200,000)/EH. DART=(N_DARTÃ200,000)/EH. Severity often (daysÃ200,000)/EH when stem defines days. EMR is experience modification from insurer/NCCI-style weighting (VERIFY weights) â not a control. Recordable â  1904.39 reportable clocks. Field context: One gym for TRIR, DART, severity, and how EMR pressure can warp decisions â without promising any BCSP score. The oil-and-gas skin shifts the same decision into production pressure: Contractor gate uses TRIR; DART tells a different story; EMR is insurance math, not a hierarchy control. The construction skin shifts it into schedule and trade stacking: GC scorecard mixes TRIR with EMR: keep formulas straight and refuse FIN traps. Model caption for this class: CountsÃ200,000Ã·hours; TRIR vs DART vs severity; EMRâ hierarchy. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) TRIR/DART use (N times 200,000)/hours; EMR is experience modification for insurance. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Normalize by hours; do not compare raw counts across unequal exposure. (3) DART subsets affect days away/restricted/transfer cases. (4) Low rates can hide high severity — read the stem. (5) Do not manage only to TRIR while leading indicators rot. (6) Incentives on rates can suppress reporting. (7) Calculator: careful arithmetic and rounding. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: 6 recordables, 600,000 hours â TRIR=6Ã200000/600000=2.0. If 4 are DART cases â DART=4Ã200000/600000â1.33. 120 lost days â severity=120Ã200000/600000=40 (stem-defined). Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Using employees instead of hours; TRIR with DART numerator; Treating EMR improvement as a hazard control. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “TRIR” is really All recordables rate; “DART” is really Days-away/restricted/transfer rate; “Severity” is really Days-based intensity; “EMR” is really Insurance modifier; “Recordable” is really 1904.7 logic; “Reportable” is really 1904.39 clocks. Stem-if-then map: if hours and N given for TRIR → (N times 200000)/hours; if raw counts compared across sites → normalize by hours; if bonus for zero TRIR suppresses reporting → realign incentives; if two answers work → higher hierarchy / system / design; if only TRIR on dashboard → add leading indicators. Scoring favors evidence, owners, verification, and hierarchy-smart controls on trir dart emr. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "TRIR/DART/severity/EMR?",
  cardBack: "TRIR=2.0 example; DART≈1.33; severity=40; EMR≠control. Study only.",
  teachBackKey: "Computes TRIR/DART; contrasts severity; rejects EMR-as-control.",
  formulaSlug: "trir-dart",
};

export const items: ClassItem[] = [
  exam(
    "CSP-11 D2.01",
    "You are the CSP reviewing a live decision at an offshore fabrication night shift. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: 6 recordables, 600,000 hours. TRIR.",
    [
      "2.0",
      "0.002",
      "6.0",
      "200000",
    ],
    0,
    "Core Rule: N×200000/EH. Calculation Steps: 6×200000/600000=2. Standards Cited: OSHA rate teaching. Why Each Distractor Fails: 2.0: Correct: 2.0 | 0.002: Fails: Forgot 200k | 6.0: Fails: Count | 200000: Fails: Constant",
    "FORM",
    "Exam",
    [
      "Correct: 2.0",
      "Fails: Forgot 200k",
      "Fails: Count",
      "Fails: Constant",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "TRIR=(N_recordable×200,000)/EH. DART=(N_DART×200,000)/EH. Severity often (days×200,000)/EH when stem defines days. EMR is experience modification from insurer/NCCI-style weighting (VERIFY weights) — not a control. Rec... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.01",
    "You are the CSP reviewing a live decision at a municipal water-plant retrofit. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: 4 DART cases, 600,000 hours. DART.",
    [
      "2.0",
      "≈1.33",
      "4.0",
      "0.00067",
    ],
    1,
    "Core Rule: 4×200000/600000. Calculation Steps: ≈1.333. Standards Cited: DART def. Why Each Distractor Fails: ≈1.33: Correct: 1.33 | 2.0: Fails: Used TRIR N | 4.0: Fails: Count | 0.00067: Fails: Forgot 200k",
    "FORM",
    "Exam",
    [
      "Fails: Used TRIR N",
      "Correct: 1.33",
      "Fails: Count",
      "Fails: Forgot 200k",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "TRIR=(N_recordable×200,000)/EH. DART=(N_DART×200,000)/EH. Severity often (days×200,000)/EH when stem defines days. EMR is experience modification from insurer/NCCI-style weighting (VERIFY weights) — not a control. Rec... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.01",
    "120 days, 600,000 hours; severity=(days×200000)/EH. Severity?",
    [
      "120",
      "0.2",
      "40",
      "200000",
    ],
    2,
    "Core Rule: 120×200000/600000. Calculation Steps: 40. Standards Cited: Stem definition. Why Each Distractor Fails: 40: Correct: 40 | 120: Fails: Days | 0.2: Fails: Fraction | 200000: Fails: Constant",
    "FORM",
    "Exam",
    [
      "Fails: Days",
      "Fails: Fraction",
      "Correct: 40",
      "Fails: Constant",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "TRIR=(N_recordable×200,000)/EH. DART=(N_DART×200,000)/EH. Severity often (days×200,000)/EH when stem defines days. EMR is experience modification from insurer/NCCI-style weighting (VERIFY weights) — not a control. Rec... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.01",
    "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: EMR primarily is.",
    [
      "Hierarchy control",
      "OSHA citation class",
      "ISO certificate",
      "Insurance experience modifier",
    ],
    3,
    "Core Rule: Insurance≠control. Calculation Steps: Definition. Standards Cited: Risk finance. Why Each Distractor Fails: Insurance experience modifier: Correct: EMR | Hierarchy control: Fails: Trap | OSHA citation class: Fails: Wrong | ISO certificate: Fails: Wrong",
    "FIN",
    "Exam",
    [
      "Fails: Trap",
      "Fails: Wrong",
      "Fails: Wrong",
      "Correct: EMR",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "TRIR=(N_recordable×200,000)/EH. DART=(N_DART×200,000)/EH. Severity often (days×200,000)/EH when stem defines days. EMR is experience modification from insurer/NCCI-style weighting (VERIFY weights) — not a control. Rec... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.01",
    "Using headcount 100 instead of hours for TRIR errs how?",
    [
      "UNIT/STEM — formula needs employee-hours",
      "Correct shortcut",
      "Always equals TRIR",
      "Required by 1904",
    ],
    0,
    "Core Rule: EH required. Calculation Steps: Formula. Standards Cited: 1904 rates. Why Each Distractor Fails: UNIT/STEM — formula needs employee-hours: Correct: Needs hours | Correct shortcut: Fails: False | Always equals TRIR: Fails: False | Required by 1904: Fails: False",
    "UNIT",
    "Exam",
    [
      "Correct: Needs hours",
      "Fails: False",
      "Fails: False",
      "Fails: False",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "TRIR=(N_recordable×200,000)/EH. DART=(N_DART×200,000)/EH. Severity often (days×200,000)/EH when stem defines days. EMR is experience modification from insurer/NCCI-style weighting (VERIFY weights) — not a control. Rec... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.01",
    "You are the CSP reviewing a live decision at a bridge deck pour laydown yard. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Near-miss reports rise; TRIR flat. Best read.",
    [
      "Automatic crime wave",
      "Possible reporting-culture improvement — investigate quality",
      "Hide reports for EMR",
      "Average into one index",
    ],
    1,
    "Core Rule: Leading signal. Calculation Steps: Culture. Standards Cited: Analysis. Why Each Distractor Fails: Possible reporting-culture improvement — investigate quality: Correct: Investigate | Automatic crime wave: Fails: Blame | Hide reports for EMR: Fails: FIN trap | Average into one index: Fails: FORM",
    "STEM",
    "Exam",
    [
      "Fails: Blame",
      "Correct: Investigate",
      "Fails: FIN trap",
      "Fails: FORM",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "TRIR=(N_recordable×200,000)/EH. DART=(N_DART×200,000)/EH. Severity often (days×200,000)/EH when stem defines days. EMR is experience modification from insurer/NCCI-style weighting (VERIFY weights) — not a control. Rec... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.01",
    "You are the CSP reviewing a live decision at a pharma suite changeover. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Recordable vs 1904.39 reportable.",
    [
      "Identical always",
      "EMR decides both",
      "Different rules/clocks",
      "Only construction differs",
    ],
    2,
    "Core Rule: Clocks differ. Calculation Steps: 1904.7 vs 1904.39. Standards Cited: Class 85 bridge. Why Each Distractor Fails: Different rules/clocks: Correct: Different | Identical always: Fails: False | EMR decides both: Fails: FIN | Only construction differs: Fails: False",
    "TIME",
    "Exam",
    [
      "Fails: False",
      "Fails: FIN",
      "Correct: Different",
      "Fails: False",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "TRIR=(N_recordable×200,000)/EH. DART=(N_DART×200,000)/EH. Severity often (days×200,000)/EH when stem defines days. EMR is experience modification from insurer/NCCI-style weighting (VERIFY weights) — not a control. Rec... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.01",
    "You are the CSP reviewing a live decision at a warehouse second-shift startup. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: TRIR numerator mistakenly uses DART cases. Result.",
    [
      "Always higher",
      "Unchanged",
      "Converts to EMR",
      "Understates TRIR if DART < recordables",
    ],
    3,
    "Core Rule: Wrong N. Calculation Steps: Definitions. Standards Cited: Rates. Why Each Distractor Fails: Understates TRIR if DART < recordables: Correct: Wrong N | Always higher: Fails: No | Unchanged: Fails: No | Converts to EMR: Fails: No",
    "FORM",
    "Exam",
    [
      "Fails: No",
      "Fails: No",
      "Fails: No",
      "Correct: Wrong N",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "TRIR=(N_recordable×200,000)/EH. DART=(N_DART×200,000)/EH. Severity often (days×200,000)/EH when stem defines days. EMR is experience modification from insurer/NCCI-style weighting (VERIFY weights) — not a control. Rec... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.01",
    "You are the CSP reviewing a live decision at a grain elevator maintenance day. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: EH=800,000; N=8. TRIR.",
    [
      "2.0",
      "1.0",
      "8.0",
      "0.01",
    ],
    0,
    "Core Rule: 8×200000/800000. Calculation Steps: 2.0. Standards Cited: Rate. Why Each Distractor Fails: 2.0: Correct: 2.0 | 1.0: Fails: Half | 8.0: Fails: Count | 0.01: Fails: Forgot",
    "FORM",
    "Exam",
    [
      "Correct: 2.0",
      "Fails: Half",
      "Fails: Count",
      "Fails: Forgot",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "TRIR=(N_recordable×200,000)/EH. DART=(N_DART×200,000)/EH. Severity often (days×200,000)/EH when stem defines days. EMR is experience modification from insurer/NCCI-style weighting (VERIFY weights) — not a control. Rec... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.01",
    "You are the CSP reviewing a live decision at a hospital utility plant shutdown. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Best hierarchy response to high TRIR.",
    [
      "Lower EMR by hiding cases",
      "Fix hazards/systems — not EMR optics alone",
      "Punish near-miss reporters",
      "Buy certificates",
    ],
    1,
    "Core Rule: Controls>optics. Calculation Steps: Management. Standards Cited: Ethics. Why Each Distractor Fails: Fix hazards/systems — not EMR optics alone: Correct: Fix | Lower EMR by hiding cases: Fails: FIN illegalish | Punish near-miss reporters: Fails: Culture harm | Buy certificates: Fails: Wrong",
    "HIER",
    "Exam",
    [
      "Fails: FIN illegalish",
      "Correct: Fix",
      "Fails: Culture harm",
      "Fails: Wrong",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "TRIR=(N_recordable×200,000)/EH. DART=(N_DART×200,000)/EH. Severity often (days×200,000)/EH when stem defines days. EMR is experience modification from insurer/NCCI-style weighting (VERIFY weights) — not a control. Rec... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.01",
    "You are the CSP reviewing a live decision at a food packaging SKU change. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Severity uses days; TRIR uses cases. Why both.",
    [
      "Severity replaces TRIR always",
      "Identical math",
      "Intensity vs frequency views",
      "EMR uses both as OSHA rates",
    ],
    2,
    "Core Rule: Different lenses. Calculation Steps: Benchmarking. Standards Cited: D2.01. Why Each Distractor Fails: Intensity vs frequency views: Correct: Both useful | Severity replaces TRIR always: Fails: False | Identical math: Fails: False | EMR uses both as OSHA rates: Fails: False",
    "TOOL",
    "Exam",
    [
      "Fails: False",
      "Fails: False",
      "Correct: Both useful",
      "Fails: False",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "TRIR=(N_recordable×200,000)/EH. DART=(N_DART×200,000)/EH. Severity often (days×200,000)/EH when stem defines days. EMR is experience modification from insurer/NCCI-style weighting (VERIFY weights) — not a control. Rec... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.01",
    "You are the CSP reviewing a live decision at a semiconductor tool install. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: VERIFY note for EMR weights.",
    [
      "Always 0.3/0.7 forever",
      "OSHA publishes EMR",
      "ISO 45001 sets EMR",
      "Jurisdiction/NCCI-style weights vary — do not hard-code",
    ],
    3,
    "Core Rule: VERIFY leftovers. Calculation Steps: Honesty. Standards Cited: Insurance. Why Each Distractor Fails: Jurisdiction/NCCI-style weights vary — do not hard-code: Correct: VERIFY | Always 0.3/0.7 forever: Fails: False | OSHA publishes EMR: Fails: False | ISO 45001 sets EMR: Fails: False",
    "STEM",
    "Exam",
    [
      "Fails: False",
      "Fails: False",
      "Fails: False",
      "Correct: VERIFY",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "TRIR=(N_recordable×200,000)/EH. DART=(N_DART×200,000)/EH. Severity often (days×200,000)/EH when stem defines days. EMR is experience modification from insurer/NCCI-style weighting (VERIFY weights) — not a control. Rec... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];

