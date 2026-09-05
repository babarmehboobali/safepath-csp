import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D6.04";

export const classFields: ClassFields = {
  hook: "NIOSH RNLE with stem-supplied multipliers — never pirate the handbook tables; compute RWL and LI from given factors.",
  hookOilGas: `Drum handling on a skid: stem gives HM,VM,DM,AM,FM,CM â compute RWL and lifting index.`,
  hookConstruction: `Block placement: same method with stem table values.`,
  rule: "RWL = LC × HM × VM × DM × AM × FM × CM when stem supplies each factor (and LC). LI = Load / RWL. LI>1 indicates the job exceeds the recommended weight under those assumptions. Couplings, asymmetric lifts, and hot work may invalidate simple use — follow stem limits. This is NIOSH recommended practice, not an OSHA PEL.",
  modelCaption: "RWL=LC×Π(multipliers); LI=Load/RWL.",
  workedCase: "LC=51 lb; HM=0.89; VM=0.87; DM=0.85; AM=0.95; FM=0.94; CM=1.00. RWL=51×0.89×0.87×0.85×0.95×0.94×1.00≈29.97 lb. Load=40 → LI≈40/29.97≈1.33.",
  trapsJson: traps(
    "Using LC as RWL",
    "Averaging multipliers",
    "Treating LI as OSHA PEL",
  ),
  contrastJson: contrast([
    { looksLike: "RWL", actually: "Recommended weight limit" },
    { looksLike: "LI", actually: "Load/RWL" },
    { looksLike: "LC", actually: "Load constant from stem" },
    { looksLike: "OSHA PEL", actually: "Legal limit — different" },
    { looksLike: "Multiplier", actually: "Stem-supplied factor ≤1 typically" },
    { looksLike: "Job redesign", actually: "Preferred when LI>1" },
  ]),
  mustScoreJson: mustScore(
    "NIOSH RNLE: RWL = LC x HM x VM x DM x AM x FM x CM.",
    "LI = Load/RWL; LI>1 indicates increased risk.",
    "Improve multipliers by redesign \u2014 not only coaching.",
    "Asymmetry, frequency, and vertical location often dominate.",
    "Team lifts and aids change the job.",
    "Calculator: multiply carefully; pick closest.",
    "Back belts are not a multiplier fix.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "LI greater than 1", pick: "redesign to improve multipliers/reduce load" },
    { ifStem: "only coaching offered", pick: "change job geometry/frequency" },
    { ifStem: "back belts proposed as fix", pick: "reject as primary" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "numbers for multipliers given", pick: "compute RWL/LI carefully" },
  ),

  brief: `RWL = LC Ã HM Ã VM Ã DM Ã AM Ã FM Ã CM when stem supplies each factor (and LC). LI = Load / RWL. LI>1 indicates the job exceeds the recommended weight under those assumptions. Couplings, asymmetric lifts, and hot work may invalidate simple use â follow stem limits. This is NIOSH If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
RWL = LC Ã HM Ã VM Ã DM Ã AM Ã FM Ã CM when stem supplies each factor (and LC). LI = Load / RWL. LI>1 indicates the job exceeds the recommended weight under those assumptions. Couplings, asymmetric lifts, and hot work may invalidate simple use â follow stem limits. This is NIOSH recommended practice, not an OSHA PEL. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
NIOSH RNLE with stem-supplied multipliers â never pirate the handbook tables; compute RWL and LI from given factors. Oil-and-gas skin: Drum handling on a skid: stem gives HM,VM,DM,AM,FM,CM â compute RWL and lifting index. Construction skin: Block placement: same method with stem table values. Work the case: LC=51 lb; HM=0.89; VM=0.87; DM=0.85; AM=0.95; FM=0.94; CM=1.00. RWL=51Ã0.89Ã0.87Ã0.85Ã0.95Ã0.94Ã1.00â29.97 lb. Load=40 â LIâ40/29.97â1.33. Classic traps: Using LC as RWL; Averaging multipliers; Treating LI as OSHA PEL. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for niosh rnle. Verify whether a higher system or design fix is still open. Contrast labels: RWL is actually Recommended weight limit; LI is actually Load/RWL; LC is actually Load constant from stem; OSHA PEL is actually Legal limit — different; Multiplier is actually Stem-supplied factor ≤1 typically. If the stem shows LI greater than 1, pick redesign to improve multipliers/reduce load. If the stem shows only coaching offered, pick change job geometry/frequency. If the stem shows back belts proposed as fix, pick reject as primary. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows numbers for multipliers given, pick compute RWL/LI carefully. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `RNLE: RWL and LI from stem factors sits in CSP-11 Domain 6 Occupational Health and Ergonomics. The exam tests whether you apply the rule when a package already looks complete. Core rule: RWL = LC Ã HM Ã VM Ã DM Ã AM Ã FM Ã CM when stem supplies each factor (and LC). LI = Load / RWL. LI>1 indicates the job exceeds the recommended weight under those assumptions. Couplings, asymmetric lifts, and hot work may invalidate simple use â follow stem limits. This is NIOSH recommended practice, not an OSHA PEL. Field context: NIOSH RNLE with stem-supplied multipliers â never pirate the handbook tables; compute RWL and LI from given factors. The oil-and-gas skin shifts the same decision into production pressure: Drum handling on a skid: stem gives HM,VM,DM,AM,FM,CM â compute RWL and lifting index. The construction skin shifts it into schedule and trade stacking: Block placement: same method with stem table values. Model caption for this class: RWL=LCÃÎ (multipliers); LI=Load/RWL. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) NIOSH RNLE: RWL = LC x HM x VM x DM x AM x FM x CM. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) LI = Load/RWL; LI>1 indicates increased risk. (3) Improve multipliers by redesign — not only coaching. (4) Asymmetry, frequency, and vertical location often dominate. (5) Team lifts and aids change the job. (6) Calculator: multiply carefully; pick closest. (7) Back belts are not a multiplier fix. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: LC=51 lb; HM=0.89; VM=0.87; DM=0.85; AM=0.95; FM=0.94; CM=1.00. RWL=51Ã0.89Ã0.87Ã0.85Ã0.95Ã0.94Ã1.00â29.97 lb. Load=40 â LIâ40/29.97â1.33. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Using LC as RWL; Averaging multipliers; Treating LI as OSHA PEL. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “RWL” is really Recommended weight limit; “LI” is really Load/RWL; “LC” is really Load constant from stem; “OSHA PEL” is really Legal limit — different; “Multiplier” is really Stem-supplied factor ≤1 typically; “Job redesign” is really Preferred when LI>1. Stem-if-then map: if LI greater than 1 → redesign to improve multipliers/reduce load; if only coaching offered → change job geometry/frequency; if back belts proposed as fix → reject as primary; if two answers work → higher hierarchy / system / design; if numbers for multipliers given → compute RWL/LI carefully. Scoring favors evidence, owners, verification, and hierarchy-smart controls on niosh rnle. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "RNLE: RWL and LI from stem factors?",
  cardBack: "RWL≈29.97 lb; LI≈1.33 for 40 lb. Study only.",
  teachBackKey: "Computes RWL product and LI; says tables must be stem-supplied.",
  formulaSlug: "niosh-rnle",
};

export const items: ClassItem[] = [
  exam(
    "CSP-11 D6.04",
    "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: LC=51; factors 0.89,0.87,0.85,0.95,0.94,1.00. RWL≈.",
    [
      "≈29.97 lb",
      "51 lb",
      "≈40 lb",
      "1.0 lb",
    ],
    0,
    "Core Rule: Product. Calculation Steps: 51×Π≈29.97. Standards Cited: RNLE. Why Each Distractor Fails: ≈29.97 lb: Correct: 29.97 | 51 lb: Fails: LC alone | ≈40 lb: Fails: Load | 1.0 lb: Fails: Nonsense",
    "FORM",
    "Exam",
    [
      "Correct: 29.97",
      "Fails: LC alone",
      "Fails: Load",
      "Fails: Nonsense",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "RWL = LC × HM × VM × DM × AM × FM × CM when stem supplies each factor (and LC). LI = Load / RWL. LI>1 indicates the job exceeds the recommended weight under those assumptions. Couplings, asymmetric lifts, and hot work... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D6.04",
    "You are the CSP reviewing a live decision at a refinery coker outage. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Load=40; RWL≈29.97. LI≈.",
    [
      "0.75",
      "≈1.33",
      "40",
      "29.97",
    ],
    1,
    "Core Rule: 40/29.97. Calculation Steps: ≈1.334. Standards Cited: LI def. Why Each Distractor Fails: ≈1.33: Correct: 1.33 | 0.75: Fails: Inverted | 40: Fails: Load | 29.97: Fails: RWL",
    "FORM",
    "Exam",
    [
      "Fails: Inverted",
      "Correct: 1.33",
      "Fails: Load",
      "Fails: RWL",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "RWL = LC × HM × VM × DM × AM × FM × CM when stem supplies each factor (and LC). LI = Load / RWL. LI>1 indicates the job exceeds the recommended weight under those assumptions. Couplings, asymmetric lifts, and hot work... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D6.04",
    "You are the CSP reviewing a live decision at a bridge deck pour laydown yard. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: LI>1 means.",
    [
      "Automatic OSHA citation",
      "Safe always",
      "Job exceeds RWL under stated assumptions",
      "EMR fix",
    ],
    2,
    "Core Rule: Interpretation. Calculation Steps: RNLE meaning. Standards Cited: Ergo. Why Each Distractor Fails: Job exceeds RWL under stated assumptions: Correct: Exceeds | Automatic OSHA citation: Fails: Not auto | Safe always: Fails: False | EMR fix: Fails: FIN",
    "TOOL",
    "Exam",
    [
      "Fails: Not auto",
      "Fails: False",
      "Correct: Exceeds",
      "Fails: FIN",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "RWL = LC × HM × VM × DM × AM × FM × CM when stem supplies each factor (and LC). LI = Load / RWL. LI>1 indicates the job exceeds the recommended weight under those assumptions. Couplings, asymmetric lifts, and hot work... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D6.04",
    "You are the CSP reviewing a live decision at a pharma suite changeover. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Best response to LI≈1.33 if redesign open.",
    [
      "Only train harder",
      "Accept because <2",
      "Buy insurance",
      "Redesign lift (HIER) — reduce load/improve geometry",
    ],
    3,
    "Core Rule: Engineering first. Calculation Steps: Controls. Standards Cited: Ergo. Why Each Distractor Fails: Redesign lift (HIER) — reduce load/improve geometry: Correct: Redesign | Only train harder: Fails: Admin only | Accept because <2: Fails: Arbitrary | Buy insurance: Fails: FIN",
    "HIER",
    "Exam",
    [
      "Fails: Admin only",
      "Fails: Arbitrary",
      "Fails: FIN",
      "Correct: Redesign",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "RWL = LC × HM × VM × DM × AM × FM × CM when stem supplies each factor (and LC). LI = Load / RWL. LI>1 indicates the job exceeds the recommended weight under those assumptions. Couplings, asymmetric lifts, and hot work... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D6.04",
    "You are the CSP reviewing a live decision at a warehouse second-shift startup. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Why stem-supply multipliers.",
    [
      "Avoid pirating copyrighted tables",
      "NIOSH forbids math",
      "OSHA requires secrecy",
      "EMR rules",
    ],
    0,
    "Core Rule: Originality/legal hygiene. Calculation Steps: Content ethics. Standards Cited: VERIFY. Why Each Distractor Fails: Avoid pirating copyrighted tables: Correct: Hygiene | NIOSH forbids math: Fails: False | OSHA requires secrecy: Fails: False | EMR rules: Fails: FIN",
    "STEM",
    "Exam",
    [
      "Correct: Hygiene",
      "Fails: False",
      "Fails: False",
      "Fails: FIN",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "RWL = LC × HM × VM × DM × AM × FM × CM when stem supplies each factor (and LC). LI = Load / RWL. LI>1 indicates the job exceeds the recommended weight under those assumptions. Couplings, asymmetric lifts, and hot work... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D6.04",
    "You are the CSP reviewing a live decision at a grain elevator maintenance day. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Using LC as RWL ignores.",
    [
      "Only CM",
      "All multipliers",
      "Frequency only",
      "LI definition",
    ],
    1,
    "Core Rule: Must multiply. Calculation Steps: RWL equation. Standards Cited: RNLE. Why Each Distractor Fails: All multipliers: Correct: All | Only CM: Fails: Incomplete | Frequency only: Fails: Incomplete | LI definition: Fails: Different",
    "FORM",
    "Exam",
    [
      "Fails: Incomplete",
      "Correct: All",
      "Fails: Incomplete",
      "Fails: Different",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "RWL = LC × HM × VM × DM × AM × FM × CM when stem supplies each factor (and LC). LI = Load / RWL. LI>1 indicates the job exceeds the recommended weight under those assumptions. Couplings, asymmetric lifts, and hot work... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D6.04",
    "You are the CSP reviewing a live decision at a hospital utility plant shutdown. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: RNLE vs OSHA PEL.",
    [
      "Identical",
      "RNLE is a PEL",
      "Recommended vs legal limit frameworks",
      "PEL uses HM only",
    ],
    2,
    "Core Rule: Legal vs advisory. Calculation Steps: Reflex. Standards Cited: Limits. Why Each Distractor Fails: Recommended vs legal limit frameworks: Correct: Contrast | Identical: Fails: False | RNLE is a PEL: Fails: False | PEL uses HM only: Fails: False",
    "PELTLV",
    "Exam",
    [
      "Fails: False",
      "Fails: False",
      "Correct: Contrast",
      "Fails: False",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "RWL = LC × HM × VM × DM × AM × FM × CM when stem supplies each factor (and LC). LI = Load / RWL. LI>1 indicates the job exceeds the recommended weight under those assumptions. Couplings, asymmetric lifts, and hot work... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D6.04",
    "You are the CSP reviewing a live decision at a food packaging SKU change. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Missing FM in product (set to 1 wrongly) tends to.",
    [
      "Understate always",
      "No effect",
      "Convert to LI directly",
      "Overstate RWL if true FM<1",
    ],
    3,
    "Core Rule: Missing discount. Calculation Steps: Bias. Standards Cited: Calc hygiene. Why Each Distractor Fails: Overstate RWL if true FM<1: Correct: Overstate | Understate always: Fails: Not always | No effect: Fails: False | Convert to LI directly: Fails: Wrong",
    "FORM",
    "Exam",
    [
      "Fails: Not always",
      "Fails: False",
      "Fails: Wrong",
      "Correct: Overstate",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "RWL = LC × HM × VM × DM × AM × FM × CM when stem supplies each factor (and LC). LI = Load / RWL. LI>1 indicates the job exceeds the recommended weight under those assumptions. Couplings, asymmetric lifts, and hot work... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D6.04",
    "You are the CSP reviewing a live decision at a semiconductor tool install. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Load=25; RWL=29.97. LI≈.",
    [
      "≈0.83",
      "1.20",
      "25",
      "0.30",
    ],
    0,
    "Core Rule: 25/29.97. Calculation Steps: ≈0.834. Standards Cited: LI. Why Each Distractor Fails: ≈0.83: Correct: 0.83 | 1.20: Fails: Invertedish | 25: Fails: Load | 0.30: Fails: Guess",
    "FORM",
    "Exam",
    [
      "Correct: 0.83",
      "Fails: Invertedish",
      "Fails: Load",
      "Fails: Guess",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "RWL = LC × HM × VM × DM × AM × FM × CM when stem supplies each factor (and LC). LI = Load / RWL. LI>1 indicates the job exceeds the recommended weight under those assumptions. Couplings, asymmetric lifts, and hot work... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D6.04",
    "You are the CSP reviewing a live decision at an offshore fabrication night shift. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Asymmetric lift not in simple multipliers.",
    [
      "Ignore asymmetry always",
      "STEM — model may not apply; follow stem limits",
      "Use TRIR",
      "Use VP formula",
    ],
    1,
    "Core Rule: Applicability. Calculation Steps: Limitations. Standards Cited: RNLE. Why Each Distractor Fails: STEM — model may not apply; follow stem limits: Correct: Limits | Ignore asymmetry always: Fails: False | Use TRIR: Fails: Wrong domain | Use VP formula: Fails: Wrong",
    "STEM",
    "Exam",
    [
      "Fails: False",
      "Correct: Limits",
      "Fails: Wrong domain",
      "Fails: Wrong",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "RWL = LC × HM × VM × DM × AM × FM × CM when stem supplies each factor (and LC). LI = Load / RWL. LI>1 indicates the job exceeds the recommended weight under those assumptions. Couplings, asymmetric lifts, and hot work... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D6.04",
    "You are the CSP reviewing a live decision at a municipal water-plant retrofit. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: LC=23 kg stem; same multipliers product 0.5875. RWL≈.",
    [
      "23",
      "0.5875",
      "≈13.5 kg",
      "40",
    ],
    2,
    "Core Rule: 23×0.5875. Calculation Steps: 13.5125. Standards Cited: Units as stem. Why Each Distractor Fails: ≈13.5 kg: Correct: 13.5 | 23: Fails: LC | 0.5875: Fails: Product only | 40: Fails: Other unit",
    "FORM",
    "Exam",
    [
      "Fails: LC",
      "Fails: Product only",
      "Correct: 13.5",
      "Fails: Other unit",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "RWL = LC × HM × VM × DM × AM × FM × CM when stem supplies each factor (and LC). LI = Load / RWL. LI>1 indicates the job exceeds the recommended weight under those assumptions. Couplings, asymmetric lifts, and hot work... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D6.04",
    "You are the CSP reviewing a live decision at a plastics compounding turnaround. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Teach-back key includes.",
    [
      "Memorize full NIOSH book pages",
      "Promise BCSP score",
      "Audio on /mock",
      "RWL product + LI + stem-supplied tables only",
    ],
    3,
    "Core Rule: Honest mastery. Calculation Steps: Pedagogy. Standards Cited: Safepath rules. Why Each Distractor Fails: RWL product + LI + stem-supplied tables only: Correct: Key | Memorize full NIOSH book pages: Fails: Bad | Promise BCSP score: Fails: Forbidden | Audio on /mock: Fails: Confirm no audio mock",
    "TOOL",
    "Exam",
    [
      "Fails: Bad",
      "Fails: Forbidden",
      "Fails: Confirm no audio mock",
      "Correct: Key",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "RWL = LC × HM × VM × DM × AM × FM × CM when stem supplies each factor (and LC). LI = Load / RWL. LI>1 indicates the job exceeds the recommended weight under those assumptions. Couplings, asymmetric lifts, and hot work... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];

