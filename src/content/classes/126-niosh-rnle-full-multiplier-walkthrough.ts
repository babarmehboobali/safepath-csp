import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D6.04";

export const classFields: ClassFields = {
  hook: "Stem supplies LC and six multipliers. Multiply for RWL, divide load for LI, then redesign the job. Do not treat 51 lb as the RWL and do not call LI a PEL.",
  hookOilGas: "Drum on a skid: stem gives HM, VM, DM, AM, FM, CM. Compute, then move the drum closer or add a lift — not a back-belt talk.",
  hookConstruction: "Block placement with stem table values. Same product. Improve reach and frequency before coaching.",
  rule: "RWL=LC×Π(multipliers) from stem factors. LI=Load/RWL. LI>1 → redesign. RNLE is recommended practice, not an OSHA PEL. Back belts are not a multiplier.",
  modelCaption: "RWL=LC×HM×VM×DM×AM×FM×CM. LI=Load/RWL. Caption: multiply, pick closest, redesign the largest penalty.",
  workedCase: "(1) 51×0.89×0.87×0.85×0.95×0.94×1.00≈29.97 lb. (2) Load 40 → LI≈1.33. (3) Improve HM (bring closer) or cut load. Losing answer: RWL=51, or back belts as primary.",
  trapsJson: traps(
    "Using LC as RWL.",
    "Averaging multipliers.",
    "Treating LI as an OSHA PEL or fixing LI with back belts.",
  ),
  contrastJson: contrast([
    { looksLike: "RWL", actually: "Recommended weight limit — product" },
    { looksLike: "LI", actually: "Load/RWL" },
    { looksLike: "LC", actually: "Load constant from stem (often 51 lb)" },
    { looksLike: "OSHA PEL", actually: "Legal limit — different tool" },
    { looksLike: "Multiplier", actually: "Stem factor typically ≤1" },
    { looksLike: "Job redesign", actually: "Preferred when LI>1" },
  ]),
  mustScoreJson: mustScore(
    "RWL = LC × HM × VM × DM × AM × FM × CM.",
    "LI = Load/RWL; LI>1 signals redesign.",
    "Multiply factors; do not average.",
    "Use only stem-supplied factors/tables.",
    "RNLE is not an OSHA PEL.",
    "Improve geometry/load/frequency before coaching.",
    "Back belts are not a multiplier.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "multipliers given", pick: "multiply for RWL then LI" },
    { ifStem: "LI>1", pick: "redesign job — load or geometry" },
    { ifStem: "back belts proposed", pick: "reject as primary" },
    { ifStem: "23 kg mixed into a 51 lb stem", pick: "do not mix units" },
    { ifStem: "equation does not apply per stem", pick: "say so and redesign qualitatively" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" }
  ),
  brief: `Multiply stem factors for RWL; LI=Load/RWL; redesign if LI>1. Not a PEL. Exam default: if two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
RWL = LC × HM × VM × DM × AM × FM × CM when the stem supplies LC and each multiplier. Typical teaching LC=51 lb (23 kg in a metric stem — do not mix). LI = Load / RWL. LI>1 means the job exceeds the recommended weight under those assumptions. Multiply; do not average multipliers. This is NIOSH recommended practice, not an OSHA PEL. Redesign the job (improve multipliers, cut load, add aids) rather than coaching or back belts.

Field move
Worked: LC=51; HM=0.89; VM=0.87; DM=0.85; AM=0.95; FM=0.94; CM=1.00. Product of multipliers ≈0.588; RWL≈51×0.588≈30.0 lb. Load=40 → LI≈1.33. Losing answers: RWL=51, averaging multipliers to 0.92, treating LI as a PEL, or a back-belt program as the primary fix.

Exam
If two answers work, take higher hierarchy / system / design. FORM traps: using LC as RWL, adding instead of multiplying, mixing 23 kg into a pound stem. Last sentence may still allow a lift table, shorter reach, or fewer lifts — take the redesign. Redraw the decision sequence for NIOSH RNLE multipliers before looking at options. Cost and convenience will sell a lower control that looks busy. Attractive wrong answers on NIOSH RNLE multipliers are usually competent lower-row programs, busy paperwork, or a funded contract. Read the last sentence for constraints that close a higher control, then take the best remaining system or design fix for NIOSH RNLE multipliers. When capital or authority remains, spend it on the highest remaining hardware or independent layer, then use administrative controls and PPE only for residual NIOSH RNLE multipliers risk. Do not let schedule pressure invert the NIOSH RNLE multipliers sequence. Verification is a test with an owner, not a calendar invite. If two answers both look professional, take higher hierarchy / system / design on NIOSH RNLE multipliers. Teach-back restates the NIOSH RNLE multipliers rule, the sequence, and the verification step in one spoken sentence. Contrast pairs keep NIOSH RNLE multipliers labels honest when a look-alike program uses the right vocabulary on the wrong row. Tool choice still matters: pick the method that can still change the NIOSH RNLE multipliers design, not the fashionable late worksheet.
`,
  deep: `The Revised NIOSH Lifting Equation is a job-analysis tool. The load constant is the maximum recommended weight under ideal conditions. Each multiplier ≤1 reduces RWL for horizontal reach, vertical location, travel distance, asymmetry, frequency, and coupling. You do not pirate handbook tables on the exam; you use the factors the stem gives. If a factor is missing, you cannot invent it. If the stem says the equation does not apply (one-handed, unstable load, high speed, significant heat, etc.), say so and redesign qualitatively.

Calculator path: write RWL=LC×HM×VM×DM×AM×FM×CM. Multiply in a consistent order. Keep extra digits until the end, then pick the closest option. LI=Load/RWL. LI of 1.0 is the recommended limit under the assumptions, not a legal PEL. LI>1 is a signal to change the job. Frequency and horizontal multipliers often dominate. Asymmetry (twisting) is AM. Coupling (handles) is CM. A poor coupling cannot be fixed with a poster.

Hierarchy of the fix: cut the load (smaller unit, two-person with engineered aid, mechanical lift), improve geometry (HM, VM, DM, AM) with a table, turntable, or relocate the pallet, reduce frequency, then train as residual. Back belts are not a multiplier. Job rotation without changing geometry may change FM only if frequency actually drops. Team lifting is not automatically half the load — the stem must support it.

If two answers work, take higher hierarchy / system / design. Units: 51 lb vs 23 kg. Do not convert unless asked. Teach-back: name the product, name LI, name the multiplier you would improve first, and name that RNLE is not an OSHA PEL. Oil-and-gas drum handling, construction block placement, and manufacturing case packing all use the same product. If two answers improve the file, take the one that also changes geometry or load. Scoring on NIOSH RNLE multipliers favors evidence, owners, verification, and hierarchy-smart controls rather than binders that look complete. Last-sentence constraints may freeze a higher NIOSH RNLE multipliers control; then take the best remaining fix and verify it instead of wishing the freeze away. Shared assumptions and checkbox closures create false assurance on NIOSH RNLE multipliers; name the assumption and test it. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet. Hold the exam default on NIOSH RNLE multipliers: if two answers work, take higher hierarchy / system / design, and reject polished paperwork when a higher system or design fix remains. In teach-back, name the NIOSH RNLE multipliers decision, the highest open control, and the verification step without reciting fake clause trivia. Field skins change the equipment, not the logic: a skid, a site tent, and a paint line still fail the same NIOSH RNLE multipliers test. A funded lower-row contract does not freeze a higher NIOSH RNLE multipliers row the stem still leaves open. Design the next job so the NIOSH RNLE multipliers control is obvious, then still implement it, then still verify it. Do not restart NIOSH RNLE multipliers from the bottom because PPE and training are what the plant already knows how to buy. Units, clocks, and tool names are traps only when you skip the last sentence on NIOSH RNLE multipliers. Walk the NIOSH RNLE multipliers sequence until it is automatic, then apply the last sentence, then pick the higher remaining row. Independent engineered layers beat detection, watchstanders, and emergency response when those layers are still open on NIOSH RNLE multipliers. Paper, PPE, and insurance can sit beside a NIOSH RNLE multipliers control; they do not replace it. If production already started in the last sentence, the NIOSH RNLE multipliers answer is often stop, restore the gate, then proceed — not a memo. Name the NIOSH RNLE multipliers rule in one sentence, then name the verification, then name the attractive wrong answer you will refuse. A last-sentence freeze on NIOSH RNLE multipliers shrinks open rows; it does not invert them or authorize a skip to PPE.
`,
  cardFront: "RNLE — RWL product and LI?",
  cardBack: "RWL≈29.97 lb; LI≈1.33 for 40 lb. Multiply, don’t average. Redesign, don’t belt. Study only.",
  teachBackKey: "Pass if RWL is the product of stem factors, LI is Load/RWL, and back belts are rejected as primary.",
  formulaSlug: "niosh-rwl",
};

export const items: ClassItem[] = [
  exam(
    "CSP-11 D6.04",
    "LC=51; factors 0.89, 0.87, 0.85, 0.95, 0.94, 1.00. RWL≈?",
    [
      "≈29.97 lb",
      "51 lb (LC as RWL)",
      "≈40 lb (the load)",
      "≈0.92 lb (averaged then misused)",
    ],
    0,
    "Core Rule: Product of LC and multipliers. Calculation Steps: 51×0.89×0.87×0.85×0.95×0.94×1.00≈29.97. Standards Cited: RNLE RWL. Why Each Distractor Fails: ≈29.97 lb: Correct: Product. | 51 lb (LC as RWL): Fails: LC trap. | ≈40 lb (the load): Fails: Load trap. | ≈0.92 lb (averaged then misused): Fails: Average trap.",
    "FORM",
    "Exam",
    [
      "Correct: Product.",
      "Fails: LC trap.",
      "Fails: Load trap.",
      "Fails: Average trap.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "RWL=LC×Π(multipliers) from stem factors. LI=Load/RWL. LI>1 → redesign. RNLE is recommended practice, not an OSHA PEL. Back belts are not a multiplier. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D6.04",
    "You are the CSP reviewing a live decision at a hospital utility plant shutdown. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: RWL≈29.97 lb, load=40 lb. LI≈.",
    [
      "0.75 (inverted)",
      "≈1.33",
      "40",
      "51",
    ],
    1,
    "Core Rule: LI=Load/RWL. Calculation Steps: 40/29.97≈1.33. Standards Cited: Lifting index. Why Each Distractor Fails: 0.75 (inverted): Fails: Inverted. | ≈1.33: Correct: Load over RWL. | 40: Fails: Copied load. | 51: Fails: Copied LC.",
    "FORM",
    "Exam",
    [
      "Fails: Inverted.",
      "Correct: Load over RWL.",
      "Fails: Copied load.",
      "Fails: Copied LC.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "RWL=LC×Π(multipliers) from stem factors. LI=Load/RWL. LI>1 → redesign. RNLE is recommended practice, not an OSHA PEL. Back belts are not a multiplier. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D6.04",
    "You are the CSP reviewing a live decision at a food packaging SKU change. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Why not average the six multipliers.",
    [
      "NIOSH requires averaging.",
      "Average equals LI.",
      "RWL is a product; each penalty multiplies.",
      "Average is a PEL.",
    ],
    2,
    "Core Rule: Product not mean. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Multiplier algebra. Why Each Distractor Fails: NIOSH requires averaging.: Fails: Does not. | Average equals LI.: Fails: No. | RWL is a product; each penalty multiplies.: Correct: Multiply. | Average is a PEL.: Fails: No.",
    "FORM",
    "Foundation",
    [
      "Fails: Does not.",
      "Fails: No.",
      "Correct: Multiply.",
      "Fails: No.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "RWL=LC×Π(multipliers) from stem factors. LI=Load/RWL. LI>1 → redesign. RNLE is recommended practice, not an OSHA PEL. Back belts are not a multiplier. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D6.04",
    "You are the CSP reviewing a live decision at a semiconductor tool install. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: LI=1.33, back belts proposed as the fix. Best move.",
    [
      "Belts as engineering.",
      "Belts as a new LC=70.",
      "Declare LI a PEL and stop.",
      "Redesign load/geometry/frequency; belts are not a multiplier.",
    ],
    3,
    "Core Rule: Belts are not RNLE controls. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Redesign vs belts. Why Each Distractor Fails: Belts as engineering.: Fails: Not engineering. | Belts as a new LC=70.: Fails: Not a new LC. | Declare LI a PEL and stop.: Fails: LI is not a PEL. | Redesign load/geometry/frequency; belts are not a multiplier.: Correct: Change the job.",
    "HIER",
    "Exam",
    [
      "Fails: Not engineering.",
      "Fails: Not a new LC.",
      "Fails: LI is not a PEL.",
      "Correct: Change the job.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "RWL=LC×Π(multipliers) from stem factors. LI=Load/RWL. LI>1 → redesign. RNLE is recommended practice, not an OSHA PEL. Back belts are not a multiplier. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D6.04",
    "Stem is in pounds with LC=51. Candidate uses 23 kg unconverted. Miss?",
    [
      "UNIT — mixed LC systems.",
      "HIER — kg is a hierarchy row.",
      "TIME — kg is a clock.",
      "FIN — kg is a deductible.",
    ],
    0,
    "Core Rule: 51 lb vs 23 kg are sibling constants, not mixers. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: LC units. Why Each Distractor Fails: UNIT — mixed LC systems.: Correct: Stay in the stem system. | HIER — kg is a hierarchy row.: Fails: Not a row. | TIME — kg is a clock.: Fails: Not a clock. | FIN — kg is a deductible.: Fails: Not finance.",
    "UNIT",
    "Exam",
    [
      "Correct: Stay in the stem system.",
      "Fails: Not a row.",
      "Fails: Not a clock.",
      "Fails: Not finance.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "RWL=LC×Π(multipliers) from stem factors. LI=Load/RWL. LI>1 → redesign. RNLE is recommended practice, not an OSHA PEL. Back belts are not a multiplier. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D6.04",
    "Largest penalty is HM=0.50 (long reach); others ≈1. Best redesign?",
    [
      "A back-belt talk.",
      "Bring the load closer / lift table to cut horizontal reach.",
      "Increase frequency to compensate.",
      "Treat HM as a PEL.",
    ],
    1,
    "Core Rule: Improve the worst multiplier. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Geometry first. Why Each Distractor Fails: A back-belt talk.: Fails: Not a multiplier. | Bring the load closer / lift table to cut horizontal reach.: Correct: Cut reach. | Increase frequency to compensate.: Fails: Worse FM. | Treat HM as a PEL.: Fails: Not a PEL.",
    "HIER",
    "Exam",
    [
      "Fails: Not a multiplier.",
      "Correct: Cut reach.",
      "Fails: Worse FM.",
      "Fails: Not a PEL.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "RWL=LC×Π(multipliers) from stem factors. LI=Load/RWL. LI>1 → redesign. RNLE is recommended practice, not an OSHA PEL. Back belts are not a multiplier. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D6.04",
    "You are the CSP reviewing a live decision at a plastics compounding turnaround. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: RNLE versus OSHA PEL. Best statement.",
    [
      "LI=1 is a PEL.",
      "LC=51 is a PEL.",
      "RNLE is recommended practice; it is not an OSHA legal PEL.",
      "HM is a TLV.",
    ],
    2,
    "Core Rule: Legal vs advisory tools. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: RNLE ≠ PEL. Why Each Distractor Fails: LI=1 is a PEL.: Fails: Not a PEL. | LC=51 is a PEL.: Fails: Not a PEL. | RNLE is recommended practice; it is not an OSHA legal PEL.: Correct: Recommended, not a PEL. | HM is a TLV.: Fails: Not a TLV.",
    "PELTLV",
    "Exam",
    [
      "Fails: Not a PEL.",
      "Fails: Not a PEL.",
      "Correct: Recommended, not a PEL.",
      "Fails: Not a TLV.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "RWL=LC×Π(multipliers) from stem factors. LI=Load/RWL. LI>1 → redesign. RNLE is recommended practice, not an OSHA PEL. Back belts are not a multiplier. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D6.04",
    "Closest: RWL=29.97 lb. Options 30 lb, 51 lb, 40 lb, 23 lb. Pick?",
    [
      "51 lb",
      "40 lb",
      "23 lb",
      "30 lb",
    ],
    3,
    "Core Rule: Pick closest rounded value. Calculation Steps: 29.97 nearest 30. Standards Cited: Closest-value. Why Each Distractor Fails: 51 lb: Fails: LC. | 40 lb: Fails: Load. | 23 lb: Fails: kg sibling. | 30 lb: Correct: Nearest.",
    "FORM",
    "Exam",
    [
      "Fails: LC.",
      "Fails: Load.",
      "Fails: kg sibling.",
      "Correct: Nearest.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "RWL=LC×Π(multipliers) from stem factors. LI=Load/RWL. LI>1 → redesign. RNLE is recommended practice, not an OSHA PEL. Back belts are not a multiplier. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D6.04",
    "Stem says one-handed lift of an unstable drum; still offers RNLE with all multipliers=1. Best action?",
    [
      "Equation may not apply; redesign qualitatively (aid, two-hand stable load).",
      "RWL=51 and proceed as if ideal.",
      "Average a fake multiplier of 0.5.",
      "Call it SPCC.",
    ],
    0,
    "Core Rule: Applicability is a last-sentence constraint. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: RNLE limits. Why Each Distractor Fails: Equation may not apply; redesign qualitatively (aid, two-hand stable load).: Correct: Out of scope → redesign. | RWL=51 and proceed as if ideal.: Fails: Ideal LC misuse. | Average a fake multiplier of 0.5.: Fails: Invented factor. | Call it SPCC.: Fails: Wrong statute.",
    "STEM",
    "Expert",
    [
      "Correct: Out of scope → redesign.",
      "Fails: Ideal LC misuse.",
      "Fails: Invented factor.",
      "Fails: Wrong statute.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "RWL=LC×Π(multipliers) from stem factors. LI=Load/RWL. LI>1 → redesign. RNLE is recommended practice, not an OSHA PEL. Back belts are not a multiplier. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D6.04",
    "Team lift offered as automatically half the load for LI. Critique?",
    [
      "Always halve LC to 25.5.",
      "Only if the stem supports sharing; do not assume 50% without data.",
      "Always double LI.",
      "Team lifts are PELs.",
    ],
    1,
    "Core Rule: Do not invent a 50% rule. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Team lift. Why Each Distractor Fails: Always halve LC to 25.5.: Fails: Invented LC. | Only if the stem supports sharing; do not assume 50% without data.: Correct: Stem must support it. | Always double LI.: Fails: Invented LI. | Team lifts are PELs.: Fails: Not a PEL.",
    "STEM",
    "Exam",
    [
      "Fails: Invented LC.",
      "Correct: Stem must support it.",
      "Fails: Invented LI.",
      "Fails: Not a PEL.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "RWL=LC×Π(multipliers) from stem factors. LI=Load/RWL. LI>1 → redesign. RNLE is recommended practice, not an OSHA PEL. Back belts are not a multiplier. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D6.04",
    "Two answers: coaching on lift technique, or a lift table that improves VM and HM. Pick:",
    [
      "Coaching as equivalent engineering.",
      "Back belts as equivalent.",
      "The lift table — higher design.",
      "Insurance as equivalent.",
    ],
    2,
    "Core Rule: If two answers work, take higher hierarchy / system / design. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Design vs coaching. Why Each Distractor Fails: Coaching as equivalent engineering.: Fails: Admin. | Back belts as equivalent.: Fails: Not a multiplier. | The lift table — higher design.: Correct: Geometry hardware. | Insurance as equivalent.: Fails: Transfer.",
    "HIER",
    "Expert",
    [
      "Fails: Admin.",
      "Fails: Not a multiplier.",
      "Correct: Geometry hardware.",
      "Fails: Transfer.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "RWL=LC×Π(multipliers) from stem factors. LI=Load/RWL. LI>1 → redesign. RNLE is recommended practice, not an OSHA PEL. Back belts are not a multiplier. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D6.04",
    "Frequency doubles, FM drops from 0.94 to 0.75, other factors unchanged, LC=51, other Π=0.625 without FM. New RWL≈?",
    [
      "≈30 lb (old FM)",
      "51",
      "0.75",
      "≈24 lb",
    ],
    3,
    "Core Rule: Replace FM in the product. Calculation Steps: 51×0.625×0.75≈23.9 ≈24. Standards Cited: FM change. Why Each Distractor Fails: ≈30 lb (old FM): Fails: Old RWL. | 51: Fails: LC. | 0.75: Fails: Copied FM. | ≈24 lb: Correct: New product.",
    "FORM",
    "Exam",
    [
      "Fails: Old RWL.",
      "Fails: LC.",
      "Fails: Copied FM.",
      "Correct: New product.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "RWL=LC×Π(multipliers) from stem factors. LI=Load/RWL. LI>1 → redesign. RNLE is recommended practice, not an OSHA PEL. Back belts are not a multiplier. Verify the critical step before accepting a lower-tier control.",
    }
  ),
];

