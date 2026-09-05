import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D4.03";

export const classFields: ClassFields = {
  hook: "Beyond Q=K√P: Hazen-Williams friction and pump churn/rated/150% points — no density tables.",
  hookOilGas: `Rack change raises demand; pump curve and pipe friction decide if the pump still clears duty.`,
  hookConstruction: `Temp standpipe feed with known C, d, Q: compute pf/ft and read pump test points.`,
  rule: "Q=K√P for orifice. HW teaching: pf=(4.52 Q^1.85)/(C^1.85 d^4.87) psi/ft (VERIFY 4.52). Pump points: churn/shutoff (≈0 flow, high P), rated, 150% rated flow (lower P). Pump nameplate ≠ proven demand after MOC.",
  modelCaption: "Orifice Q=K√P; HW pf/ft; pump churn→rated→150%.",
  workedCase: "K=5.6,P=7 → Q≈14.8 gpm. HW Q=150,C=120,d=2.5 → pf≈0.0788 psi/ft; ×100 ft≈7.88 psi. Rated 500 gpm → 150% = 750 gpm.",
  trapsJson: traps(
    "Forgot √ in Q=K√P",
    "Churn pressure at rated flow",
    "Universal density from memory",
  ),
  contrastJson: contrast([
    { looksLike: "Churn/shutoff", actually: "Near-zero flow, high P" },
    { looksLike: "Rated point", actually: "Nameplate flow@P" },
    { looksLike: "150% flow", actually: "Test point, lower P" },
    { looksLike: "Q=K√P", actually: "Orifice" },
    { looksLike: "HW pf", actually: "Friction per length" },
    { looksLike: "Alarm", actually: "Notification ≠ gpm demand" },
  ]),
  mustScoreJson: mustScore(
    "Hazen-Williams estimates friction losses in water-based fire protection piping.",
    "C-factor depends on pipe material/condition \u2014 do not invent C.",
    "Pump curves must meet system demand including hose streams when required.",
    "Elevation head matters.",
    "Pick closest listed gpm/psi values.",
    "Impairments and closed valves destroy calculated performance.",
    "Design for the hazard commodity.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "C-factor wrong for pipe type", pick: "select correct C" },
    { ifStem: "elevation ignored", pick: "include elevation head" },
    { ifStem: "pump cannot meet demand", pick: "resize/adjust system" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "valve found closed in ITM", pick: "restore and investigate impairment" },
  ),

  brief: `Q=KâP for orifice. HW teaching: pf=(4.52 Q^1.85)/(C^1.85 d^4.87) psi/ft (VERIFY 4.52). Pump points: churn/shutoff (â0 flow, high P), rated, 150% rated flow (lower P). Pump nameplate â  proven demand after MOC. If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Q=KâP for orifice. HW teaching: pf=(4.52 Q^1.85)/(C^1.85 d^4.87) psi/ft (VERIFY 4.52). Pump points: churn/shutoff (â0 flow, high P), rated, 150% rated flow (lower P). Pump nameplate â  proven demand after MOC. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
Beyond Q=KâP: Hazen-Williams friction and pump churn/rated/150% points â no density tables. Oil-and-gas skin: Rack change raises demand; pump curve and pipe friction decide if the pump still clears duty. Construction skin: Temp standpipe feed with known C, d, Q: compute pf/ft and read pump test points. Work the case: K=5.6,P=7 â Qâ14.8 gpm. HW Q=150,C=120,d=2.5 â pfâ0.0788 psi/ft; Ã100 ftâ7.88 psi. Rated 500 gpm â 150% = 750 gpm. Classic traps: Forgot √ in Q=K√P; Churn pressure at rated flow; Universal density from memory. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for hazen williams fire pump. Verify whether a higher system or design fix is still open. Contrast labels: Churn/shutoff is actually Near-zero flow, high P; Rated point is actually Nameplate flow@P; 150% flow is actually Test point, lower P; Q=K√P is actually Orifice; HW pf is actually Friction per length. If the stem shows C-factor wrong for pipe type, pick select correct C. If the stem shows elevation ignored, pick include elevation head. If the stem shows pump cannot meet demand, pick resize/adjust system. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows valve found closed in ITM, pick restore and investigate impairment. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `HW friction? Churn vs 150% sits in CSP-11 Domain 4 Emergency Management. The exam tests whether you apply the rule when a package already looks complete. Core rule: Q=KâP for orifice. HW teaching: pf=(4.52 Q^1.85)/(C^1.85 d^4.87) psi/ft (VERIFY 4.52). Pump points: churn/shutoff (â0 flow, high P), rated, 150% rated flow (lower P). Pump nameplate â  proven demand after MOC. Field context: Beyond Q=KâP: Hazen-Williams friction and pump churn/rated/150% points â no density tables. The oil-and-gas skin shifts the same decision into production pressure: Rack change raises demand; pump curve and pipe friction decide if the pump still clears duty. The construction skin shifts it into schedule and trade stacking: Temp standpipe feed with known C, d, Q: compute pf/ft and read pump test points. Model caption for this class: Orifice Q=KâP; HW pf/ft; pump churnâratedâ150%. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Hazen-Williams estimates friction losses in water-based fire protection piping. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) C-factor depends on pipe material/condition — do not invent C. (3) Pump curves must meet system demand including hose streams when required. (4) Elevation head matters. (5) Pick closest listed gpm/psi values. (6) Impairments and closed valves destroy calculated performance. (7) Design for the hazard commodity. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: K=5.6,P=7 â Qâ14.8 gpm. HW Q=150,C=120,d=2.5 â pfâ0.0788 psi/ft; Ã100 ftâ7.88 psi. Rated 500 gpm â 150% = 750 gpm. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Forgot √ in Q=K√P; Churn pressure at rated flow; Universal density from memory. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Churn/shutoff” is really Near-zero flow, high P; “Rated point” is really Nameplate flow@P; “150% flow” is really Test point, lower P; “Q=K√P” is really Orifice; “HW pf” is really Friction per length; “Alarm” is really Notification ≠ gpm demand. Stem-if-then map: if C-factor wrong for pipe type → select correct C; if elevation ignored → include elevation head; if pump cannot meet demand → resize/adjust system; if two answers work → higher hierarchy / system / design; if valve found closed in ITM → restore and investigate impairment. Scoring favors evidence, owners, verification, and hierarchy-smart controls on hazen williams fire pump. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "HW friction? Churn vs 150%?",
  cardBack: "14.8 gpm; pf≈0.079 psi/ft example; 150%=1.5×rated flow. Study only.",
  teachBackKey: "Computes Q=K√P with sqrt; states HW units; maps pump points.",
  formulaSlug: "hazen-williams-pump",
};

export const items: ClassItem[] = [
  exam(
    "CSP-11 D4.03",
    "You are the CSP reviewing a live decision at a hospital utility plant shutdown. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: K=5.6, P=7 psi. Q.",
    [
      "≈14.8 gpm",
      "39.2 (no sqrt)",
      "2.12",
      "7.0",
    ],
    0,
    "Core Rule: Q=K√P. Calculation Steps: 5.6×√7≈14.82. Standards Cited: Orifice. Why Each Distractor Fails: ≈14.8 gpm: Correct: 14.8 | 39.2 (no sqrt): Fails: No sqrt | 2.12: Fails: Divided | 7.0: Fails: P",
    "FORM",
    "Exam",
    [
      "Correct: 14.8",
      "Fails: No sqrt",
      "Fails: Divided",
      "Fails: P",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Q=K√P for orifice. HW teaching: pf=(4.52 Q^1.85)/(C^1.85 d^4.87) psi/ft (VERIFY 4.52). Pump points: churn/shutoff (≈0 flow, high P), rated, 150% rated flow (lower P). Pump nameplate ≠ proven demand after MOC. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D4.03",
    "You are the CSP reviewing a live decision at a food packaging SKU change. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Larger C (smoother), other inputs fixed. pf.",
    [
      "Increases",
      "Decreases",
      "No change",
      "Becomes negative",
    ],
    1,
    "Core Rule: C in denominator. Calculation Steps: Inspect HW. Standards Cited: HW. Why Each Distractor Fails: Decreases: Correct: Down | Increases: Fails: Wrong | No change: Fails: False | Becomes negative: Fails: Nonsense",
    "FORM",
    "Exam",
    [
      "Fails: Wrong",
      "Correct: Down",
      "Fails: False",
      "Fails: Nonsense",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Q=K√P for orifice. HW teaching: pf=(4.52 Q^1.85)/(C^1.85 d^4.87) psi/ft (VERIFY 4.52). Pump points: churn/shutoff (≈0 flow, high P), rated, 150% rated flow (lower P). Pump nameplate ≠ proven demand after MOC. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D4.03",
    "You are the CSP reviewing a live decision at a semiconductor tool install. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Rated 500 gpm. 150% test flow.",
    [
      "500",
      "333",
      "750 gpm",
      "150",
    ],
    2,
    "Core Rule: 1.5×500. Calculation Steps: Multiply. Standards Cited: VERIFY NFPA 20. Why Each Distractor Fails: 750 gpm: Correct: 750 | 500: Fails: Rated | 333: Fails: 2/3 | 150: Fails: Percent#",
    "FORM",
    "Exam",
    [
      "Fails: Rated",
      "Fails: 2/3",
      "Correct: 750",
      "Fails: Percent#",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Q=K√P for orifice. HW teaching: pf=(4.52 Q^1.85)/(C^1.85 d^4.87) psi/ft (VERIFY 4.52). Pump points: churn/shutoff (≈0 flow, high P), rated, 150% rated flow (lower P). Pump nameplate ≠ proven demand after MOC. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D4.03",
    "You are the CSP reviewing a live decision at an offshore fabrication night shift. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Churn/shutoff means.",
    [
      "150% flow",
      "Rated flow",
      "Hose demand",
      "Near-zero flow, high pressure",
    ],
    3,
    "Core Rule: Shutoff end. Calculation Steps: Curve literacy. Standards Cited: NFPA 20 concepts. Why Each Distractor Fails: Near-zero flow, high pressure: Correct: Churn | 150% flow: Fails: Other | Rated flow: Fails: Rated | Hose demand: Fails: Demand",
    "TOOL",
    "Exam",
    [
      "Fails: Other",
      "Fails: Rated",
      "Fails: Demand",
      "Correct: Churn",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Q=K√P for orifice. HW teaching: pf=(4.52 Q^1.85)/(C^1.85 d^4.87) psi/ft (VERIFY 4.52). Pump points: churn/shutoff (≈0 flow, high P), rated, 150% rated flow (lower P). Pump nameplate ≠ proven demand after MOC. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D4.03",
    "You are the CSP reviewing a live decision at a municipal water-plant retrofit. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: pf≈0.079 psi/ft; 200 ft same pipe. Friction.",
    [
      "≈15.8 psi",
      "0.079",
      "79",
      "1.58",
    ],
    0,
    "Core Rule: pf×L. Calculation Steps: 0.079×200≈15.8. Standards Cited: HW apply. Why Each Distractor Fails: ≈15.8 psi: Correct: 15.8 | 0.079: Fails: Per foot | 79: Fails: ×1000 | 1.58: Fails: /10",
    "FORM",
    "Exam",
    [
      "Correct: 15.8",
      "Fails: Per foot",
      "Fails: ×1000",
      "Fails: /10",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Q=K√P for orifice. HW teaching: pf=(4.52 Q^1.85)/(C^1.85 d^4.87) psi/ft (VERIFY 4.52). Pump points: churn/shutoff (≈0 flow, high P), rated, 150% rated flow (lower P). Pump nameplate ≠ proven demand after MOC. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D4.03",
    "You are the CSP reviewing a live decision at a plastics compounding turnaround. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Nameplate alone does not prove.",
    [
      "That rated point exists",
      "Site demand still met after commodity/MOC change",
      "Churn measurable",
      "Water is liquid",
    ],
    1,
    "Core Rule: Demand from design. Calculation Steps: MOC. Standards Cited: System vs plate. Why Each Distractor Fails: Site demand still met after commodity/MOC change: Correct: Caution | That rated point exists: Fails: True-ish | Churn measurable: Fails: True | Water is liquid: Fails: Joke",
    "STEM",
    "Exam",
    [
      "Fails: True-ish",
      "Correct: Caution",
      "Fails: True",
      "Fails: Joke",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Q=K√P for orifice. HW teaching: pf=(4.52 Q^1.85)/(C^1.85 d^4.87) psi/ft (VERIFY 4.52). Pump points: churn/shutoff (≈0 flow, high P), rated, 150% rated flow (lower P). Pump nameplate ≠ proven demand after MOC. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D4.03",
    "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Forgot √ for K=5.6 P=7 yields trap.",
    [
      "14.8",
      "2.12",
      "39.2",
      "5.6",
    ],
    2,
    "Core Rule: 5.6×7. Calculation Steps: Attractive wrong. Standards Cited: Orifice. Why Each Distractor Fails: 39.2: Correct: Trap value | 14.8: Fails: Correct Q | 2.12: Fails: Other | 5.6: Fails: K",
    "FORM",
    "Exam",
    [
      "Fails: Correct Q",
      "Fails: Other",
      "Correct: Trap value",
      "Fails: K",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Q=K√P for orifice. HW teaching: pf=(4.52 Q^1.85)/(C^1.85 d^4.87) psi/ft (VERIFY 4.52). Pump points: churn/shutoff (≈0 flow, high P), rated, 150% rated flow (lower P). Pump nameplate ≠ proven demand after MOC. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D4.03",
    "You are the CSP reviewing a live decision at a refinery coker outage. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Larger d, Q and C fixed. pf tends to.",
    [
      "Rise sharply",
      "Stay fixed",
      "Go negative",
      "Fall (d^4.87 in denominator)",
    ],
    3,
    "Core Rule: Diameter dominates. Calculation Steps: Exponents. Standards Cited: HW. Why Each Distractor Fails: Fall (d^4.87 in denominator): Correct: Falls | Rise sharply: Fails: Wrong | Stay fixed: Fails: False | Go negative: Fails: No",
    "FORM",
    "Exam",
    [
      "Fails: Wrong",
      "Fails: False",
      "Fails: No",
      "Correct: Falls",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Q=K√P for orifice. HW teaching: pf=(4.52 Q^1.85)/(C^1.85 d^4.87) psi/ft (VERIFY 4.52). Pump points: churn/shutoff (≈0 flow, high P), rated, 150% rated flow (lower P). Pump nameplate ≠ proven demand after MOC. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D4.03",
    "You are the CSP reviewing a live decision at a bridge deck pour laydown yard. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Alarm-only vs suppression flow.",
    [
      "Notification ≠ hydraulic demand",
      "Alarm supplies gpm",
      "Alarm replaces pump",
      "Alarm sets K",
    ],
    0,
    "Core Rule: Roles differ. Calculation Steps: Detection≠discharge. Standards Cited: FP roles. Why Each Distractor Fails: Notification ≠ hydraulic demand: Correct: Correct | Alarm supplies gpm: Fails: False | Alarm replaces pump: Fails: False | Alarm sets K: Fails: False",
    "TOOL",
    "Exam",
    [
      "Correct: Correct",
      "Fails: False",
      "Fails: False",
      "Fails: False",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Q=K√P for orifice. HW teaching: pf=(4.52 Q^1.85)/(C^1.85 d^4.87) psi/ft (VERIFY 4.52). Pump points: churn/shutoff (≈0 flow, high P), rated, 150% rated flow (lower P). Pump nameplate ≠ proven demand after MOC. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D4.03",
    "You are the CSP reviewing a live decision at a pharma suite changeover. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: K=8.0, P=16 psi. Q.",
    [
      "128",
      "32 gpm",
      "8",
      "16",
    ],
    1,
    "Core Rule: 8×√16=32. Calculation Steps: √16=4. Standards Cited: Orifice. Why Each Distractor Fails: 32 gpm: Correct: 32 | 128: Fails: K×P | 8: Fails: K | 16: Fails: P",
    "FORM",
    "Exam",
    [
      "Fails: K×P",
      "Correct: 32",
      "Fails: K",
      "Fails: P",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Q=K√P for orifice. HW teaching: pf=(4.52 Q^1.85)/(C^1.85 d^4.87) psi/ft (VERIFY 4.52). Pump points: churn/shutoff (≈0 flow, high P), rated, 150% rated flow (lower P). Pump nameplate ≠ proven demand after MOC. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D4.03",
    "You are the CSP reviewing a live decision at a warehouse second-shift startup. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Why VERIFY 4.52.",
    [
      "It is OSHA law",
      "Never in fire books",
      "Handbook forms/units vary",
      "Equals √P",
    ],
    2,
    "Core Rule: Unit-sensitive. Calculation Steps: Honesty. Standards Cited: References. Why Each Distractor Fails: Handbook forms/units vary: Correct: VERIFY | It is OSHA law: Fails: False | Never in fire books: Fails: False | Equals √P: Fails: False",
    "UNIT",
    "Exam",
    [
      "Fails: False",
      "Fails: False",
      "Correct: VERIFY",
      "Fails: False",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Q=K√P for orifice. HW teaching: pf=(4.52 Q^1.85)/(C^1.85 d^4.87) psi/ft (VERIFY 4.52). Pump points: churn/shutoff (≈0 flow, high P), rated, 150% rated flow (lower P). Pump nameplate ≠ proven demand after MOC. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D4.03",
    "You are the CSP reviewing a live decision at a grain elevator maintenance day. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: 150% flow pressure vs rated on normal curve.",
    [
      "Always higher",
      "Exactly equal",
      "Undefined",
      "Typically lower at higher flow",
    ],
    3,
    "Core Rule: Curve slopes down. Calculation Steps: Shape. Standards Cited: Teaching. Why Each Distractor Fails: Typically lower at higher flow: Correct: Lower P | Always higher: Fails: Wrong | Exactly equal: Fails: False | Undefined: Fails: No",
    "STEM",
    "Exam",
    [
      "Fails: Wrong",
      "Fails: False",
      "Fails: No",
      "Correct: Lower P",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Q=K√P for orifice. HW teaching: pf=(4.52 Q^1.85)/(C^1.85 d^4.87) psi/ft (VERIFY 4.52). Pump points: churn/shutoff (≈0 flow, high P), rated, 150% rated flow (lower P). Pump nameplate ≠ proven demand after MOC. Verify the critical step before accepting a lower-tier control.",
    }
  ),
];

