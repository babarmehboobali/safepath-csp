import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D4.03";

export const classFields: ClassFields = {
  hook: "A 50/50 vapor mix and a 6-inch line at 2000 fpm land in the same sitting. Do not average LFL. Do not use diameter as area. Then ask whether the fuel can still leave.",
  hookOilGas: "A compressor skid with mixed hydrocarbon vapors and a firewater branch. Le Chatelier first; Q=VA second; substitution of the fuel still wins if open.",
  hookConstruction: "A tented coating area with mixed solvents and a 1.5-inch hose stream question. Convert inches. Do not average LFL. Remove fuel/ignition if still open.",
  rule: "Q=VA with consistent units. Mixture LFL is Le Chatelier, not an average. Use stem constants for HW/pump. Prevention of fuel/ignition still beats more gpm if open.",
  modelCaption: "Left: A=πr² with r in feet, Q=VA. Right: LFL_mix=1/Σ(y_i/LFL_i). Caption: closest value; then higher prevention if open.",
  workedCase: "(1) 50/50 fuels LFL 1.5% and 5%: 1/(0.5/1.5+0.5/5)=1/(0.333+0.1)=1/0.433≈2.31% not 3.25%. (2) 6-inch ID, r=0.25 ft, A≈0.196 ft², 2000 fpm → Q≈393 cfm, not 12,000. (3) Losing answer: average LFL and specify more foam while a nonflammable process is still open.",
  trapsJson: traps(
    "Averaging component LFLs.",
    "Using diameter as radius or inches as feet in Q=VA.",
    "More gpm as a substitute for removing fuel still on the table.",
  ),
  contrastJson: contrast([
    { looksLike: "Q=VA", actually: "Flow from velocity and area" },
    { looksLike: "Le Chatelier LFL", actually: "1/Σ(y/LFL) — not an average" },
    { looksLike: "Hazen-Williams", actually: "Use the C and form the stem gives" },
    { looksLike: "Arithmetic mean LFL", actually: "FORM trap" },
    { looksLike: "Diameter as radius", actually: "UNIT/FORM trap" },
    { looksLike: "Extra foam", actually: "Protection — not prevention if fuel can leave" },
  ]),
  mustScoreJson: mustScore(
    "Q=VA with r in feet for πr².",
    "LFL_mix = 1/Σ(y_i/LFL_i).",
    "Do not average LFLs.",
    "Use stem C-factors and constants; pick closest.",
    "Elevation ≈ 0.433 psi/ft water when in US customary.",
    "Suppression is not prevention.",
    "If a nonflammable substitute is open, take it.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "mixture LFL with fractions given", pick: "Le Chatelier, not an average" },
    { ifStem: "velocity and diameter given", pick: "convert to feet, πr², Q=VA" },
    { ifStem: "C-factor given", pick: "use that C, not a remembered one" },
    { ifStem: "nonflammable process still open", pick: "substitute before more gpm" },
    { ifStem: "closest value among options", pick: "compute then pick nearest" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" }
  ),
  brief: `Q=VA with feet; Le Chatelier not average; stem constants; prevention over extra gpm. Exam default: if two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Fire protection math on this exam is stem-driven. Q=VA for flow from velocity and area — convert inches to feet before πr². Hazen-Williams-style friction and pump questions use the constants the stem gives; do not pirate a handbook. Mixture LFL uses Le Chatelier: LFL_mix = 1 / Σ(y_i / LFL_i) with mole or volume fractions that sum to 1. Do not average LFL values. Water is not a substitute for removing the fuel or ignition if those are still open.

Field move
A hose or branch line at 2000 fpm in a 6-inch pipe is not 2000×6. Area is πr² with r in feet. A two-component vapor 50/50 with LFL 1.5% and 5% is not 3.25%. It is 1 / (0.5/1.5 + 0.5/5) ≈ 2.31%. Sprinklers, pumps, and foam are protection. Prevention is fuel, oxidizer, ignition. If substitution of a nonflammable process is open, take it.

Exam
If two answers work, take higher hierarchy / system / design. FORM traps: diameter as radius, inches as feet, arithmetic mean of LFLs, forgetting to invert the Le Chatelier sum. UNIT traps: gpm vs cfm vs L/s. Last sentence may give a nonflammable substitute — hydraulics then sit as residual design, not as the first row. Redraw the decision sequence for fire hydraulics and mixture LFL before looking at options. Cost and convenience will sell a lower control that looks busy. Attractive wrong answers on fire hydraulics and mixture LFL are usually competent lower-row programs, busy paperwork, or a funded contract. Read the last sentence for constraints that close a higher control, then take the best remaining system or design fix for fire hydraulics and mixture LFL. When capital or authority remains, spend it on the highest remaining hardware or independent layer, then use administrative controls and PPE only for residual fire hydraulics and mixture LFL risk. Do not let schedule pressure invert the fire hydraulics and mixture LFL sequence. Verification is a test with an owner, not a calendar invite. If two answers both look professional, take higher hierarchy / system / design on fire hydraulics and mixture LFL. Teach-back restates the fire hydraulics and mixture LFL rule, the sequence, and the verification step in one spoken sentence.
`,
  deep: `Class 103 and 108 taught pieces. This lab forces both in one sitting: move water or move vapor, then still ask whether the fire can be designed out. Q=VA is the literacy check. Velocity in fpm times area in ft² gives cfm. A 6-inch ID pipe has r = 0.25 ft, A ≈ 0.196 ft². At 2000 fpm, Q ≈ 393 cfm, not 12,000 from 6×2000 and not 1,570 from using r=0.5 ft (12-inch habit). Write the unit conversion before the keystrokes.

Le Chatelier for lower flammable limit of a mixture, when the stem supplies component LFLs and fractions: LFL_mix = 1 / Σ(y_i/LFL_i). Fractions must be the combustible fractions the stem intends — often volume or mole percent of the fuel mix, normalized. Arithmetic mean is the trap. A 50/50 mix of 1.5% and 5% LFLs is 2.31%, not 3.25%. If air or nitrogen is a diluent, follow the stem: you may be mixing fuels only, then placing that mix in air. Do not invent a third LFL.

Hydraulics of suppression (Hazen-Williams, pump churn vs operating, required vs available density) appear as closest-value items. Use the constants given. C-factor 100 vs 120 changes head loss; using the wrong C is a FORM miss. Net pump pressure is not suction gauge plus wish. Elevation head is 0.433 psi/ft of water column when the stem is in US customary — do not mix kPa without converting.

Hierarchy still sits above the calculator. Foam and extra gpm are protection around a fuel that can still leave. If two answers work, take higher hierarchy / system / design. A nonflammable substitute, inerting, or removing the ignition source in design beats a more precise friction-loss spreadsheet. Teach-back: convert units, pick the right form (Q=VA vs Le Chatelier vs given HW), pick closest, then name the higher prevention still open. Scoring on fire hydraulics and mixture LFL favors evidence, owners, verification, and hierarchy-smart controls rather than binders that look complete. Last-sentence constraints may freeze a higher fire hydraulics and mixture LFL control; then take the best remaining fix and verify it instead of wishing the freeze away. Shared assumptions and checkbox closures create false assurance on fire hydraulics and mixture LFL; name the assumption and test it. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet. Hold the exam default on fire hydraulics and mixture LFL: if two answers work, take higher hierarchy / system / design, and reject polished paperwork when a higher system or design fix remains. In teach-back, name the fire hydraulics and mixture LFL decision, the highest open control, and the verification step without reciting fake clause trivia. Field skins change the equipment, not the logic: a skid, a site tent, and a paint line still fail the same fire hydraulics and mixture LFL test. A funded lower-row contract does not freeze a higher fire hydraulics and mixture LFL row the stem still leaves open. Design the next job so the fire hydraulics and mixture LFL control is obvious, then still implement it, then still verify it. Do not restart fire hydraulics and mixture LFL from the bottom because PPE and training are what the plant already knows how to buy. Units, clocks, and tool names are traps only when you skip the last sentence on fire hydraulics and mixture LFL. Walk the fire hydraulics and mixture LFL sequence until it is automatic, then apply the last sentence, then pick the higher remaining row. Independent engineered layers beat detection, watchstanders, and emergency response when those layers are still open on fire hydraulics and mixture LFL. Paper, PPE, and insurance can sit beside a fire hydraulics and mixture LFL control; they do not replace it. If production already started in the last sentence, the fire hydraulics and mixture LFL answer is often stop, restore the gate, then proceed — not a memo.
`,
  cardFront: "Fire lab — Q=VA and LFL_mix?",
  cardBack: "6-inch 2000 fpm ≈393 cfm. 50/50 of 1.5% & 5% ≈2.31% not 3.25%. Then remove fuel if open. Study only.",
  teachBackKey: "Pass if Le Chatelier is inverted sum not average, Q=VA uses r in feet, and extra gpm loses to open substitution.",
  formulaSlug: "q-va",
};

export const items: ClassItem[] = [
  exam(
    "CSP-11 D4.03",
    "50/50 volume mix of fuels with LFL 1.5% and 5.0%. LFL_mix ≈?",
    [
      "≈2.31%",
      "3.25% (average)",
      "6.5%",
      "1.5% (lower only)",
    ],
    0,
    "Core Rule: Le Chatelier invert sum. Calculation Steps: 1/(0.5/1.5 + 0.5/5)=1/(0.333+0.1)≈2.31%. Standards Cited: Le Chatelier mixture LFL. Why Each Distractor Fails: ≈2.31%: Correct: Inverted sum. | 3.25% (average): Fails: Average trap. | 6.5%: Fails: Added LFLs. | 1.5% (lower only): Fails: Ignored the second fuel.",
    "FORM",
    "Exam",
    [
      "Correct: Inverted sum.",
      "Fails: Average trap.",
      "Fails: Added LFLs.",
      "Fails: Ignored the second fuel.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Q=VA with consistent units. Mixture LFL is Le Chatelier, not an average. Use stem constants for HW/pump. Prevention of fuel/ignition still beats more gpm if open. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D4.03",
    "You are the CSP reviewing a live decision at a bridge deck pour laydown yard. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: 6-inch ID duct, V=2000 fpm. Q=VA ≈.",
    [
      "12,000 (diameter×V)",
      "≈393 cfm (r=0.25 ft)",
      "≈1,570 (r=0.5 ft / 12-inch habit)",
      "2000 cfm",
    ],
    1,
    "Core Rule: Inches to feet; radius half of ID. Calculation Steps: r=0.25 ft; A=π(0.25)²≈0.196; Q≈393. Standards Cited: Q=VA. Why Each Distractor Fails: 12,000 (diameter×V): Fails: Diameter as area. | ≈393 cfm (r=0.25 ft): Correct: Correct conversion. | ≈1,570 (r=0.5 ft / 12-inch habit): Fails: Wrong radius. | 2000 cfm: Fails: Copied velocity.",
    "UNIT",
    "Exam",
    [
      "Fails: Diameter as area.",
      "Correct: Correct conversion.",
      "Fails: Wrong radius.",
      "Fails: Copied velocity.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Q=VA with consistent units. Mixture LFL is Le Chatelier, not an average. Use stem constants for HW/pump. Prevention of fuel/ignition still beats more gpm if open. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D4.03",
    "You are the CSP reviewing a live decision at a pharma suite changeover. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Why not average two LFL values.",
    [
      "Because OSHA forbids decimals.",
      "Because LFL is a PEL.",
      "Le Chatelier uses the reciprocal of the fraction-weighted 1/LFL terms.",
      "Because average is always lower.",
    ],
    2,
    "Core Rule: Form is not the mean. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Le Chatelier literacy. Why Each Distractor Fails: Because OSHA forbids decimals.: Fails: Not a decimal ban. | Because LFL is a PEL.: Fails: LFL is not a PEL. | Le Chatelier uses the reciprocal of the fraction-weighted 1/LFL terms.: Correct: Harmonic-style mix, not arithmetic mean. | Because average is always lower.: Fails: Average is usually higher than true mix LFL here.",
    "FORM",
    "Foundation",
    [
      "Fails: Not a decimal ban.",
      "Fails: LFL is not a PEL.",
      "Correct: Harmonic-style mix, not arithmetic mean.",
      "Fails: Average is usually higher than true mix LFL here.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Q=VA with consistent units. Mixture LFL is Le Chatelier, not an average. Use stem constants for HW/pump. Prevention of fuel/ignition still beats more gpm if open. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D4.03",
    "Nonflammable substitute is still on the approved process list. Extra foam density is also funded. Pick:",
    [
      "Foam first because it is more interesting math.",
      "Average LFL then foam.",
      "Insurance instead of either.",
      "Substitute; foam is residual protection.",
    ],
    3,
    "Core Rule: If two answers work, take higher hierarchy / system / design. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Prevention vs protection. Why Each Distractor Fails: Foam first because it is more interesting math.: Fails: Math fashion. | Average LFL then foam.: Fails: Wrong LFL plus lower row. | Insurance instead of either.: Fails: Transfer. | Substitute; foam is residual protection.: Correct: Fuel can still leave.",
    "HIER",
    "Expert",
    [
      "Fails: Math fashion.",
      "Fails: Wrong LFL plus lower row.",
      "Fails: Transfer.",
      "Correct: Fuel can still leave.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Q=VA with consistent units. Mixture LFL is Le Chatelier, not an average. Use stem constants for HW/pump. Prevention of fuel/ignition still beats more gpm if open. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D4.03",
    "Hazen-Williams C=100 given. Candidate uses C=140 from memory. Miss type?",
    [
      "FORM — used a constant the stem did not give.",
      "HIER — C is a hierarchy row.",
      "TIME — C is a 1904 clock.",
      "PELTLV — C is a TLV.",
    ],
    0,
    "Core Rule: Stem constants only. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: HW pitfall. Why Each Distractor Fails: FORM — used a constant the stem did not give.: Correct: Do not pirate C. | HIER — C is a hierarchy row.: Fails: C is not a row. | TIME — C is a 1904 clock.: Fails: Not a clock. | PELTLV — C is a TLV.: Fails: Not a TLV.",
    "FORM",
    "Exam",
    [
      "Correct: Do not pirate C.",
      "Fails: C is not a row.",
      "Fails: Not a clock.",
      "Fails: Not a TLV.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Q=VA with consistent units. Mixture LFL is Le Chatelier, not an average. Use stem constants for HW/pump. Prevention of fuel/ignition still beats more gpm if open. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D4.03",
    "You are the CSP reviewing a live decision at a hospital utility plant shutdown. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Elevation 20 ft of water. Approx psi.",
    [
      "20 psi",
      "≈8.7 psi (20×0.433)",
      "0.433 psi",
      "200 psi",
    ],
    1,
    "Core Rule: 0.433 psi/ft water. Calculation Steps: 20 × 0.433 = 8.66 ≈ 8.7. Standards Cited: Elevation head. Why Each Distractor Fails: 20 psi: Fails: Forgot 0.433. | ≈8.7 psi (20×0.433): Correct: Product. | 0.433 psi: Fails: Copied the factor. | 200 psi: Fails: Shifted decimal.",
    "FORM",
    "Exam",
    [
      "Fails: Forgot 0.433.",
      "Correct: Product.",
      "Fails: Copied the factor.",
      "Fails: Shifted decimal.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Q=VA with consistent units. Mixture LFL is Le Chatelier, not an average. Use stem constants for HW/pump. Prevention of fuel/ignition still beats more gpm if open. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D4.03",
    "You are the CSP reviewing a live decision at a food packaging SKU change. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Q=VA pitfall when diameter is given in inches.",
    [
      "Treat inches as feet.",
      "Use diameter as radius always.",
      "Convert to feet before πr²; radius is half the diameter.",
      "Skip area and report velocity as flow.",
    ],
    2,
    "Core Rule: Unit conversion first. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Q=VA pitfall. Why Each Distractor Fails: Treat inches as feet.: Fails: That is the pitfall. | Use diameter as radius always.: Fails: That is the pitfall. | Convert to feet before πr²; radius is half the diameter.: Correct: Inches→feet, D/2=r. | Skip area and report velocity as flow.: Fails: That is the pitfall.",
    "UNIT",
    "Foundation",
    [
      "Fails: That is the pitfall.",
      "Fails: That is the pitfall.",
      "Correct: Inches→feet, D/2=r.",
      "Fails: That is the pitfall.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Q=VA with consistent units. Mixture LFL is Le Chatelier, not an average. Use stem constants for HW/pump. Prevention of fuel/ignition still beats more gpm if open. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D4.03",
    "Closest value: Le Chatelier result 2.307%. Options 2.3%, 3.3%, 1.5%, 5.0%. Pick?",
    [
      "3.3%",
      "1.5%",
      "5.0%",
      "2.3%",
    ],
    3,
    "Core Rule: Pick closest rounded value. Calculation Steps: 2.307 closest to 2.3, not 3.3 (the average). Standards Cited: Closest-value rule. Why Each Distractor Fails: 3.3%: Fails: Average trap. | 1.5%: Fails: Component. | 5.0%: Fails: Component. | 2.3%: Correct: Nearest listed.",
    "FORM",
    "Exam",
    [
      "Fails: Average trap.",
      "Fails: Component.",
      "Fails: Component.",
      "Correct: Nearest listed.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Q=VA with consistent units. Mixture LFL is Le Chatelier, not an average. Use stem constants for HW/pump. Prevention of fuel/ignition still beats more gpm if open. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D4.03",
    "Foam and extra gpm vs removing ignition in design while fuel remains. If ignition can be designed out:",
    [
      "Design out ignition and/or fuel; foam is residual.",
      "Foam is elimination.",
      "Extra gpm is substitution.",
      "A pump curve is PPE.",
    ],
    0,
    "Core Rule: Fire triangle prevention beats more water. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Prevention vs suppression. Why Each Distractor Fails: Design out ignition and/or fuel; foam is residual.: Correct: Remove a triangle leg. | Foam is elimination.: Fails: Foam is protection. | Extra gpm is substitution.: Fails: gpm is protection. | A pump curve is PPE.: Fails: Curve is not PPE.",
    "HIER",
    "Exam",
    [
      "Correct: Remove a triangle leg.",
      "Fails: Foam is protection.",
      "Fails: gpm is protection.",
      "Fails: Curve is not PPE.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Q=VA with consistent units. Mixture LFL is Le Chatelier, not an average. Use stem constants for HW/pump. Prevention of fuel/ignition still beats more gpm if open. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D4.03",
    "Two fuels 25% and 75% with LFL 2% and 4%. LFL_mix = 1/(0.25/2 + 0.75/4). Value?",
    [
      "3.0% (naive)",
      "≈3.2%",
      "6%",
      "2%",
    ],
    1,
    "Core Rule: Compute the invert sum. Calculation Steps: 0.25/2=0.125; 0.75/4=0.1875; sum=0.3125; 1/0.3125=3.2%. Standards Cited: Le Chatelier. Why Each Distractor Fails: 3.0% (naive): Fails: Guess. | ≈3.2%: Correct: 3.2%. | 6%: Fails: Added. | 2%: Fails: Copied lower.",
    "FORM",
    "Exam",
    [
      "Fails: Guess.",
      "Correct: 3.2%.",
      "Fails: Added.",
      "Fails: Copied lower.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Q=VA with consistent units. Mixture LFL is Le Chatelier, not an average. Use stem constants for HW/pump. Prevention of fuel/ignition still beats more gpm if open. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D4.03",
    "You are the CSP reviewing a live decision at a plastics compounding turnaround. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Fire pump churn pressure is not the same as:.",
    [
      "A number on a nameplate you may always use.",
      "Irrelevant if C=140.",
      "Operating pressure at required flow — read the stem’s point on the curve.",
      "Always equal to elevation head only.",
    ],
    2,
    "Core Rule: Use the point the stem asks. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Pump curve literacy. Why Each Distractor Fails: A number on a nameplate you may always use.: Fails: Nameplate trap. | Irrelevant if C=140.: Fails: C is pipe, not the definition. | Operating pressure at required flow — read the stem’s point on the curve.: Correct: Churn ≠ duty point. | Always equal to elevation head only.: Fails: Elevation is only one term.",
    "STEM",
    "Expert",
    [
      "Fails: Nameplate trap.",
      "Fails: C is pipe, not the definition.",
      "Correct: Churn ≠ duty point.",
      "Fails: Elevation is only one term.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Q=VA with consistent units. Mixture LFL is Le Chatelier, not an average. Use stem constants for HW/pump. Prevention of fuel/ignition still beats more gpm if open. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D4.03",
    "Mixture LFL calc used mole fractions that did not include the inert the stem said to include. Miss?",
    [
      "Always ignore inerts in every LFL item.",
      "Inerts raise LFL by adding 273.",
      "Inerts are PELs.",
      "STEM — last sentence defined the basis and was ignored.",
    ],
    3,
    "Core Rule: Basis of y_i is a last-sentence constraint. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Fraction basis. Why Each Distractor Fails: Always ignore inerts in every LFL item.: Fails: Not always. | Inerts raise LFL by adding 273.: Fails: Nonsense. | Inerts are PELs.: Fails: Not PELs. | STEM — last sentence defined the basis and was ignored.: Correct: Follow the stem’s mixture basis.",
    "STEM",
    "Expert",
    [
      "Fails: Not always.",
      "Fails: Nonsense.",
      "Fails: Not PELs.",
      "Correct: Follow the stem’s mixture basis.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Q=VA with consistent units. Mixture LFL is Le Chatelier, not an average. Use stem constants for HW/pump. Prevention of fuel/ignition still beats more gpm if open. Verify the critical step before accepting a lower-tier control.",
    }
  ),
];

