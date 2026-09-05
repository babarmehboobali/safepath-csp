import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D6.01";

export const classFields: ClassFields = {
  hook: "A hood sits off the plume. You need Q=V(10X^2+A), dilution ln, and VP=(V/4005)^2 — not Q=VA alone.",
  hookOilGas: `Skid hot-work hood offset from plume: distance tax, purge ln, duct VP.`,
  hookConstruction: `Tent welding hood offset: inches to feet; stem form; ln not log10.`,
  rule: "Face Q=VA. Unflanged teaching: Q=V(10X^2+A) with X in feet. Flanged teaching often Q=V(7.5X^2+A). Dilution t=-(V/Q)ln(C2/C1). VP=(V/4005)^2 in. wg (VERIFY 4005). Capture beats dilution; substitution still wins if open.",
  modelCaption: "Q=VA; Q=V(10X^2+A); dilution ln; VP=(V/4005)^2.",
  workedCase: "Unflanged V=100,X=1,A=0.5 -> Q=1,050. Flanged -> 800. Dilution 10k ft^3/2k cfm/200->20 ppm: t≈11.51 min. VP@2000 fpm≈0.249 in. wg.",
  trapsJson: traps(
    "log10 vs ln on dilution",
    "Dropping 10X^2",
    "VP without squaring",
  ),
  contrastJson: contrast([
    { looksLike: "Q=VA", actually: "Face only" },
    { looksLike: "Q=V(10X^2+A)", actually: "Unflanged distance" },
    { looksLike: "Q=V(7.5X^2+A)", actually: "Flanged if stem says" },
    { looksLike: "Dilution ln", actually: "Natural log" },
    { looksLike: "VP=(V/4005)^2", actually: "Velocity pressure" },
    { looksLike: "Wall fan", actually: "Dilution" },
  ]),
  mustScoreJson: mustScore(
    "Deep ventilation: hood capture, duct design, fan laws, make-up air, and balancing.",
    "Transport velocities for dust vs vapors differ \u2014 read the stem.",
    "Fan laws: changing RPM/diameter affects Q, pressure, power \u2014 apply carefully.",
    "Do not starve rooms of make-up air.",
    "Recirculation and filtration limits depend on contaminant.",
    "Commissioning and rebalance after MoC.",
    "Hierarchy: substitute before endless horsepower.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "RPM change given", pick: "apply fan laws with correct exponents" },
    { ifStem: "dust drops in ducts", pick: "check transport velocity" },
    { ifStem: "doors hard to open / combustion appliances affected", pick: "provide make-up air" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "chemistry can change", pick: "prefer substitution" },
  ),

  brief: `Face Q=VA. Unflanged teaching: Q=V(10X^2+A) with X in feet. Flanged teaching often Q=V(7.5X^2+A). Dilution t=-(V/Q)ln(C2/C1). VP=(V/4005)^2 in. wg (VERIFY 4005). Capture beats dilution; substitution still wins if open. If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Face Q=VA. Unflanged teaching: Q=V(10X^2+A) with X in feet. Flanged teaching often Q=V(7.5X^2+A). Dilution t=-(V/Q)ln(C2/C1). VP=(V/4005)^2 in. wg (VERIFY 4005). Capture beats dilution; substitution still wins if open. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
A hood sits off the plume. You need Q=V(10X^2+A), dilution ln, and VP=(V/4005)^2 â not Q=VA alone. Oil-and-gas skin: Skid hot-work hood offset from plume: distance tax, purge ln, duct VP. Construction skin: Tent welding hood offset: inches to feet; stem form; ln not log10. Work the case: Unflanged V=100,X=1,A=0.5 -> Q=1,050. Flanged -> 800. Dilution 10k ft^3/2k cfm/200->20 ppm: tâ11.51 min. VP@2000 fpmâ0.249 in. wg. Classic traps: log10 vs ln on dilution; Dropping 10X^2; VP without squaring. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for ventilation engineering. Verify whether a higher system or design fix is still open. Contrast labels: Q=VA is actually Face only; Q=V(10X^2+A) is actually Unflanged distance; Q=V(7.5X^2+A) is actually Flanged if stem says; Dilution ln is actually Natural log; VP=(V/4005)^2 is actually Velocity pressure. If the stem shows RPM change given, pick apply fan laws with correct exponents. If the stem shows dust drops in ducts, pick check transport velocity. If the stem shows doors hard to open / combustion appliances affected, pick provide make-up air. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows chemistry can change, pick prefer substitution. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Q=V(10X^2+A); dilution ln; VP sits in CSP-11 Domain 6 Occupational Health and Ergonomics. The exam tests whether you apply the rule when a package already looks complete. Core rule: Face Q=VA. Unflanged teaching: Q=V(10X^2+A) with X in feet. Flanged teaching often Q=V(7.5X^2+A). Dilution t=-(V/Q)ln(C2/C1). VP=(V/4005)^2 in. wg (VERIFY 4005). Capture beats dilution; substitution still wins if open. Field context: A hood sits off the plume. You need Q=V(10X^2+A), dilution ln, and VP=(V/4005)^2 â not Q=VA alone. The oil-and-gas skin shifts the same decision into production pressure: Skid hot-work hood offset from plume: distance tax, purge ln, duct VP. The construction skin shifts it into schedule and trade stacking: Tent welding hood offset: inches to feet; stem form; ln not log10. Model caption for this class: Q=VA; Q=V(10X^2+A); dilution ln; VP=(V/4005)^2. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Deep ventilation: hood capture, duct design, fan laws, make-up air, and balancing. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Transport velocities for dust vs vapors differ — read the stem. (3) Fan laws: changing RPM/diameter affects Q, pressure, power — apply carefully. (4) Do not starve rooms of make-up air. (5) Recirculation and filtration limits depend on contaminant. (6) Commissioning and rebalance after MoC. (7) Hierarchy: substitute before endless horsepower. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Unflanged V=100,X=1,A=0.5 -> Q=1,050. Flanged -> 800. Dilution 10k ft^3/2k cfm/200->20 ppm: tâ11.51 min. VP@2000 fpmâ0.249 in. wg. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: log10 vs ln on dilution; Dropping 10X^2; VP without squaring. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Q=VA” is really Face only; “Q=V(10X^2+A)” is really Unflanged distance; “Q=V(7.5X^2+A)” is really Flanged if stem says; “Dilution ln” is really Natural log; “VP=(V/4005)^2” is really Velocity pressure; “Wall fan” is really Dilution. Stem-if-then map: if RPM change given → apply fan laws with correct exponents; if dust drops in ducts → check transport velocity; if doors hard to open / combustion appliances affected → provide make-up air; if two answers work → higher hierarchy / system / design; if chemistry can change → prefer substitution. Scoring favors evidence, owners, verification, and hierarchy-smart controls on ventilation engineering. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet. For ventilation engineering, name the capture hood, the duct velocity check, and the make-up air path before you accept a respirator program as the answer.`,
  cardFront: "Q=V(10X^2+A); dilution ln; VP?",
  cardBack: "1,050 cfm; 11.51 min; VP≈0.249. Study only.",
  teachBackKey: "States unflanged form with X in feet, uses ln, squares V/4005.",
  formulaSlug: "ventilation-advanced",
};

export const items: ClassItem[] = [
  exam(
    "CSP-11 D6.01",
    "You are the CSP reviewing a live decision at a warehouse second-shift startup. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Unflanged V=100,X=1,A=0.5; Q=V(10X^2+A). Q.",
    [
      "1,050 cfm",
      "500 (VA only)",
      "800 (flanged w/o stem)",
      "10,500 (inches)",
    ],
    0,
    "Core Rule: Use unflanged stem form. Calculation Steps: 10.5×100=1050. Standards Cited: IH teaching. Why Each Distractor Fails: 1,050 cfm: Correct: 1050 | 500 (VA only): Fails: Dropped tax | 800 (flanged w/o stem): Fails: Wrong form | 10,500 (inches): Fails: Inch trap",
    "FORM",
    "Exam",
    [
      "Correct: 1050",
      "Fails: Dropped tax",
      "Fails: Wrong form",
      "Fails: Inch trap",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Face Q=VA. Unflanged teaching: Q=V(10X^2+A) with X in feet. Flanged teaching often Q=V(7.5X^2+A). Dilution t=-(V/Q)ln(C2/C1). VP=(V/4005)^2 in. wg (VERIFY 4005). Capture beats dilution; substitution still wins if open. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D6.01",
    "You are the CSP reviewing a live decision at a grain elevator maintenance day. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Flanged form Q=V(7.5X^2+A); V=100,X=1,A=0.5. Q.",
    [
      "1,050",
      "800 cfm",
      "75",
      "8,000",
    ],
    1,
    "Core Rule: Flanged when stem says. Calculation Steps: 8×100=800. Standards Cited: Stem form. Why Each Distractor Fails: 800 cfm: Correct: 800 | 1,050: Fails: Unflanged | 75: Fails: Forgot V | 8,000: Fails: Scaled",
    "STEM",
    "Exam",
    [
      "Fails: Unflanged",
      "Correct: 800",
      "Fails: Forgot V",
      "Fails: Scaled",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Face Q=VA. Unflanged teaching: Q=V(10X^2+A) with X in feet. Flanged teaching often Q=V(7.5X^2+A). Dilution t=-(V/Q)ln(C2/C1). VP=(V/4005)^2 in. wg (VERIFY 4005). Capture beats dilution; substitution still wins if open. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D6.01",
    "You are the CSP reviewing a live decision at a hospital utility plant shutdown. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: 10,000 ft^3, 2,000 cfm, 200→20 ppm. Dilution minutes.",
    [
      "5.0 (log10)",
      "50 (ratio)",
      "≈11.51",
      "2.3",
    ],
    2,
    "Core Rule: Use ln. Calculation Steps: -5 ln(0.1)≈11.51. Standards Cited: Dilution model. Why Each Distractor Fails: ≈11.51: Correct: 11.51 | 5.0 (log10): Fails: log10 | 50 (ratio): Fails: No ln | 2.3: Fails: Incomplete",
    "FORM",
    "Exam",
    [
      "Fails: log10",
      "Fails: No ln",
      "Correct: 11.51",
      "Fails: Incomplete",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Face Q=VA. Unflanged teaching: Q=V(10X^2+A) with X in feet. Flanged teaching often Q=V(7.5X^2+A). Dilution t=-(V/Q)ln(C2/C1). VP=(V/4005)^2 in. wg (VERIFY 4005). Capture beats dilution; substitution still wins if open. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D6.01",
    "You are the CSP reviewing a live decision at a food packaging SKU change. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: V=2,000 fpm; VP=(V/4005)^2.",
    [
      "≈0.499 unsquared",
      "2.0",
      "4005",
      "≈0.249 in. wg",
    ],
    3,
    "Core Rule: Square ratio. Calculation Steps: (2000/4005)^2≈0.249. Standards Cited: VERIFY 4005. Why Each Distractor Fails: ≈0.249 in. wg: Correct: 0.249 | ≈0.499 unsquared: Fails: Must square | 2.0: Fails: Wrong | 4005: Fails: Raw",
    "FORM",
    "Exam",
    [
      "Fails: Must square",
      "Fails: Wrong",
      "Fails: Raw",
      "Correct: 0.249",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Face Q=VA. Unflanged teaching: Q=V(10X^2+A) with X in feet. Flanged teaching often Q=V(7.5X^2+A). Dilution t=-(V/Q)ln(C2/C1). VP=(V/4005)^2 in. wg (VERIFY 4005). Capture beats dilution; substitution still wins if open. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D6.01",
    "You are the CSP reviewing a live decision at a semiconductor tool install. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: X=12 inches for 10X^2. First.",
    [
      "Convert to 1 ft before squaring",
      "Use X=12",
      "Square 12 then /12",
      "X dimensionless",
    ],
    0,
    "Core Rule: Feet required. Calculation Steps: 12 in=1 ft. Standards Cited: Units. Why Each Distractor Fails: Convert to 1 ft before squaring: Correct: Convert | Use X=12: Fails: Inch trap | Square 12 then /12: Fails: Order | X dimensionless: Fails: No",
    "UNIT",
    "Exam",
    [
      "Correct: Convert",
      "Fails: Inch trap",
      "Fails: Order",
      "Fails: No",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Face Q=VA. Unflanged teaching: Q=V(10X^2+A) with X in feet. Flanged teaching often Q=V(7.5X^2+A). Dilution t=-(V/Q)ln(C2/C1). VP=(V/4005)^2 in. wg (VERIFY 4005). Capture beats dilution; substitution still wins if open. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D6.01",
    "You are the CSP reviewing a live decision at an offshore fabrication night shift. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Wall fan 1,050 cfm; booth still open. Best.",
    [
      "Call fan local exhaust",
      "Prefer enclosing booth",
      "Lead with respirator",
      "Ignore make-up air",
    ],
    1,
    "Core Rule: Hierarchy. Calculation Steps: cfm≠capture. Standards Cited: Controls hierarchy. Why Each Distractor Fails: Prefer enclosing booth: Correct: Higher control | Call fan local exhaust: Fails: Not capture | Lead with respirator: Fails: PPE last | Ignore make-up air: Fails: Not best",
    "HIER",
    "Exam",
    [
      "Fails: Not capture",
      "Correct: Higher control",
      "Fails: PPE last",
      "Fails: Not best",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Face Q=VA. Unflanged teaching: Q=V(10X^2+A) with X in feet. Flanged teaching often Q=V(7.5X^2+A). Dilution t=-(V/Q)ln(C2/C1). VP=(V/4005)^2 in. wg (VERIFY 4005). Capture beats dilution; substitution still wins if open. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D6.01",
    "You are the CSP reviewing a live decision at a municipal water-plant retrofit. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: 5,000 ft^3, 1,000 cfm, C2/C1=0.05. t.",
    [
      "log10 story ~15",
      "100",
      "≈14.98 min",
      "2.995",
    ],
    2,
    "Core Rule: -(V/Q)ln. Calculation Steps: -5 ln(0.05)≈14.98. Standards Cited: Dilution. Why Each Distractor Fails: ≈14.98 min: Correct: 14.98 | log10 story ~15: Fails: log10 | 100: Fails: No ln | 2.995: Fails: Incomplete",
    "FORM",
    "Exam",
    [
      "Fails: log10",
      "Fails: No ln",
      "Correct: 14.98",
      "Fails: Incomplete",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Face Q=VA. Unflanged teaching: Q=V(10X^2+A) with X in feet. Flanged teaching often Q=V(7.5X^2+A). Dilution t=-(V/Q)ln(C2/C1). VP=(V/4005)^2 in. wg (VERIFY 4005). Capture beats dilution; substitution still wins if open. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D6.01",
    "You are the CSP reviewing a live decision at a plastics compounding turnaround. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Best contrast pair.",
    [
      "VP = room SP",
      "Q=VA always has 10X^2",
      "ln = log10",
      "Capture hood vs dilution fan",
    ],
    3,
    "Core Rule: Capture≠dilution. Calculation Steps: Meaning. Standards Cited: Types. Why Each Distractor Fails: Capture hood vs dilution fan: Correct: Contrast | VP = room SP: Fails: VP≠SP | Q=VA always has 10X^2: Fails: False | ln = log10: Fails: False",
    "TOOL",
    "Exam",
    [
      "Fails: VP≠SP",
      "Fails: False",
      "Fails: False",
      "Correct: Contrast",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Face Q=VA. Unflanged teaching: Q=V(10X^2+A) with X in feet. Flanged teaching often Q=V(7.5X^2+A). Dilution t=-(V/Q)ln(C2/C1). VP=(V/4005)^2 in. wg (VERIFY 4005). Capture beats dilution; substitution still wins if open. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D6.01",
    "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: V=4005 fpm; VP.",
    [
      "1.0",
      "0.5",
      "4005",
      "2.0",
    ],
    0,
    "Core Rule: (1)^2=1. Calculation Steps: Ratio 1. Standards Cited: VP. Why Each Distractor Fails: 1.0: Correct: 1.0 | 0.5: Fails: Half | 4005: Fails: Raw | 2.0: Fails: Double",
    "UNIT",
    "Exam",
    [
      "Correct: 1.0",
      "Fails: Half",
      "Fails: Raw",
      "Fails: Double",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Face Q=VA. Unflanged teaching: Q=V(10X^2+A) with X in feet. Flanged teaching often Q=V(7.5X^2+A). Dilution t=-(V/Q)ln(C2/C1). VP=(V/4005)^2 in. wg (VERIFY 4005). Capture beats dilution; substitution still wins if open. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D6.01",
    "You are the CSP reviewing a live decision at a refinery coker outage. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Respirator vs open flanged-hood redesign.",
    [
      "Pick respirator",
      "Pick engineering redesign",
      "Only raise dilution time",
      "Ignore X",
    ],
    1,
    "Core Rule: Engineering>PPE. Calculation Steps: Cut distance tax. Standards Cited: Hierarchy. Why Each Distractor Fails: Pick engineering redesign: Correct: Engineering | Pick respirator: Fails: PPE last | Only raise dilution time: Fails: Weak | Ignore X: Fails: Miss",
    "HIER",
    "Exam",
    [
      "Fails: PPE last",
      "Correct: Engineering",
      "Fails: Weak",
      "Fails: Miss",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Face Q=VA. Unflanged teaching: Q=V(10X^2+A) with X in feet. Flanged teaching often Q=V(7.5X^2+A). Dilution t=-(V/Q)ln(C2/C1). VP=(V/4005)^2 in. wg (VERIFY 4005). Capture beats dilution; substitution still wins if open. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D6.01",
    "You are the CSP reviewing a live decision at a bridge deck pour laydown yard. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: A≈0.785, X=0, V=100 unflanged. Q.",
    [
      "1,000",
      "785",
      "78.5 cfm",
      "7.85",
    ],
    2,
    "Core Rule: X=0 → VA. Calculation Steps: 100×0.785=78.5. Standards Cited: Check. Why Each Distractor Fails: 78.5 cfm: Correct: 78.5 | 1,000: Fails: Invented | 785: Fails: ×10 | 7.85: Fails: /10",
    "FORM",
    "Exam",
    [
      "Fails: Invented",
      "Fails: ×10",
      "Correct: 78.5",
      "Fails: /10",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Face Q=VA. Unflanged teaching: Q=V(10X^2+A) with X in feet. Flanged teaching often Q=V(7.5X^2+A). Dilution t=-(V/Q)ln(C2/C1). VP=(V/4005)^2 in. wg (VERIFY 4005). Capture beats dilution; substitution still wins if open. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D6.01",
    "You are the CSP reviewing a live decision at a pharma suite changeover. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Why 5.0 min wrong on 200→20 / 10k/2k.",
    [
      "V/Q should be 10",
      "Inverted ratio to 10",
      "Mixed VP",
      "Used log10 instead of ln",
    ],
    3,
    "Core Rule: ln≠log10. Calculation Steps: Diagnose. Standards Cited: Hygiene. Why Each Distractor Fails: Used log10 instead of ln: Correct: log10 trap | V/Q should be 10: Fails: Wrong | Inverted ratio to 10: Fails: Other | Mixed VP: Fails: N/A",
    "FORM",
    "Exam",
    [
      "Fails: Wrong",
      "Fails: Other",
      "Fails: N/A",
      "Correct: log10 trap",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Face Q=VA. Unflanged teaching: Q=V(10X^2+A) with X in feet. Flanged teaching often Q=V(7.5X^2+A). Dilution t=-(V/Q)ln(C2/C1). VP=(V/4005)^2 in. wg (VERIFY 4005). Capture beats dilution; substitution still wins if open. Verify the critical step before accepting a lower-tier control.",
    }
  ),
];

