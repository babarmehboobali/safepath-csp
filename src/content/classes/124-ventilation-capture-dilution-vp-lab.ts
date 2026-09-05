import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D6.01";

export const classFields: ClassFields = {
  hook: "A hood sits off the plume. You need Q=V(10X²+A), a dilution ln, and VP=(V/4005)² — not Q=VA alone, not log10, and not a missing square.",
  hookOilGas: "Skid hot-work hood offset from the plume: distance tax, purge ln, duct VP. Inches to feet; ln not log10.",
  hookConstruction: "Tent welding hood offset: X in feet, unflanged unless the stem says flanged, make-up air for the tent.",
  rule: "Unflanged Q=V(10X²+A) with X in feet. Dilution t=-(V/Q)ln(C2/C1). VP=(V/4005)². Capture beats dilution; substitution still wins if open.",
  modelCaption: "Q=VA face; Q=V(10X²+A) unflanged distance; t=-(V/Q)ln(C2/C1); VP=(V/4005)². Caption: X in feet; ln; square VP.",
  workedCase: "(1) Unflanged V=100, X=1 ft, A=0.5 → Q=1,050 cfm. (2) Dilution 10,000 ft³ / 2,000 cfm / 200→20 ppm: t≈11.51 min. (3) VP@2000 fpm≈0.249 in. wg. Losing answers: 50 cfm from VA, log10 giving 5 min, VP=0.50 without square, or a comfort fan while a substitute is open.",
  trapsJson: traps(
    "log10 vs ln on dilution.",
    "Dropping 10X² or putting X in inches.",
    "VP without squaring, or flanged 7.5 without the stem.",
  ),
  contrastJson: contrast([
    { looksLike: "Q=VA", actually: "Face or duct only" },
    { looksLike: "Q=V(10X²+A)", actually: "Unflanged capture with distance" },
    { looksLike: "Q=V(7.5X²+A)", actually: "Flanged only if stem says" },
    { looksLike: "ln", actually: "Natural log on purge" },
    { looksLike: "log10", actually: "FORM trap" },
    { looksLike: "VP=(V/4005)²", actually: "Square it" },
  ]),
  mustScoreJson: mustScore(
    "Unflanged: Q=V(10X²+A), X in feet.",
    "Flanged 7.5 only if the stem says flanged.",
    "Dilution/purge uses ln, not log10.",
    "VP=(V/4005)² — square it.",
    "Capture at source beats room dilution.",
    "Make-up air; rebalance after change.",
    "Substitution still beats endless horsepower.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "unflanged distance X given", pick: "Q=V(10X²+A), X in feet" },
    { ifStem: "flanged in the last sentence", pick: "use 7.5 not 10" },
    { ifStem: "purge from C1 to C2", pick: "t=-(V/Q)ln(C2/C1)" },
    { ifStem: "velocity pressure asked", pick: "square V/4005" },
    { ifStem: "chemical can still change", pick: "substitute" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" }
  ),
  brief: `10X² unflanged with X in feet; ln not log10; square VP; capture beats dilution. Exam default: if two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Face flow is Q=VA. Unflanged capture teaching: Q=V(10X²+A) with X in feet. Flanged teaching often Q=V(7.5X²+A) only if the stem says flanged. Dilution purge t=-(V/Q)ln(C2/C1) uses natural log, not log10. Velocity pressure VP=(V/4005)² in. wg for standard air — square it. Capture at the source beats room dilution; substitution still beats both if open.

Field move
A hood 1 ft off an unflanged 0.5 ft² opening at 100 fpm capture is Q=100(10×1+0.5)=1,050 cfm, not 50 from VA only and not 10,500 from inches. Dilution of 10,000 ft³ at 2,000 cfm from 200 to 20 ppm: t=-(10000/2000)ln(20/200)=-5×ln(0.1)≈11.51 min. VP at 2000 fpm is (2000/4005)²≈0.249 in. wg, not 0.50 from forgetting the square.

Exam
If two answers work, take higher hierarchy / system / design. FORM traps: log10, dropping 10X², not squaring VP, using flanged 7.5 without the stem. UNIT traps: X in inches. Last sentence may still allow a non-volatile substitute — take it. Redraw the decision sequence for ventilation capture dilution VP before looking at options. Cost and convenience will sell a lower control that looks busy. Attractive wrong answers on ventilation capture dilution VP are usually competent lower-row programs, busy paperwork, or a funded contract. Read the last sentence for constraints that close a higher control, then take the best remaining system or design fix for ventilation capture dilution VP. When capital or authority remains, spend it on the highest remaining hardware or independent layer, then use administrative controls and PPE only for residual ventilation capture dilution VP risk. Do not let schedule pressure invert the ventilation capture dilution VP sequence. Verification is a test with an owner, not a calendar invite. If two answers both look professional, take higher hierarchy / system / design on ventilation capture dilution VP. Teach-back restates the ventilation capture dilution VP rule, the sequence, and the verification step in one spoken sentence. Contrast pairs keep ventilation capture dilution VP labels honest when a look-alike program uses the right vocabulary on the wrong row. Tool choice still matters: pick the method that can still change the ventilation capture dilution VP design, not the fashionable late worksheet.
`,
  deep: `This lab is the exam’s ventilation calculator. Three forms live together. Q=VA is face or duct flow. The Dalla Valle-style unflanged capture form Q=V(10X²+A) charges you for distance: X is the centerline distance in feet from hood face to the point of capture, A is hood opening area in ft², V is the capture velocity at X. Put X in feet. Inches make a 144-fold disaster if you also mishandle the square. Flanged hoods are often taught as Q=V(7.5X²+A). Do not borrow 7.5 unless the stem says flanged.

Dilution or purge of a well-mixed room toward a lower concentration uses a natural logarithm: C2 = C1 e^(-Qt/V) so t = -(V/Q) ln(C2/C1). Log10 is the classic FORM trap (ln(0.1)≈2.303, log10(0.1)=1). If the stem is a steady outdoor dilution or a simple ACH item, do not force the purge equation. Make-up air and transport velocity are design, not extra log terms.

Velocity pressure for standard air in US customary is VP=(V/4005)² inches of water. V=4005 fpm → VP=1. V=2000 → VP≈0.25. Forgetting the square yields ≈0.50. Using 4005 on a metric stem is a UNIT miss. Pitot traverses still need the stem’s air density note if it is not standard.

Hierarchy: a tighter hood, less distance, substitution of the chemical, or enclosure beats adding fan horsepower forever. If two answers work, take higher hierarchy / system / design. Do not starve combustion appliances or slam doors — provide make-up air. Rebalance after MoC. Teach-back: name the form (VA vs 10X² vs ln vs VP square), name the unit conversion, name the higher control still open. Scoring on ventilation capture dilution VP favors evidence, owners, verification, and hierarchy-smart controls rather than binders that look complete. Last-sentence constraints may freeze a higher ventilation capture dilution VP control; then take the best remaining fix and verify it instead of wishing the freeze away. Shared assumptions and checkbox closures create false assurance on ventilation capture dilution VP; name the assumption and test it. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet. Hold the exam default on ventilation capture dilution VP: if two answers work, take higher hierarchy / system / design, and reject polished paperwork when a higher system or design fix remains. In teach-back, name the ventilation capture dilution VP decision, the highest open control, and the verification step without reciting fake clause trivia. Field skins change the equipment, not the logic: a skid, a site tent, and a paint line still fail the same ventilation capture dilution VP test. A funded lower-row contract does not freeze a higher ventilation capture dilution VP row the stem still leaves open. Design the next job so the ventilation capture dilution VP control is obvious, then still implement it, then still verify it. Do not restart ventilation capture dilution VP from the bottom because PPE and training are what the plant already knows how to buy. Units, clocks, and tool names are traps only when you skip the last sentence on ventilation capture dilution VP. Walk the ventilation capture dilution VP sequence until it is automatic, then apply the last sentence, then pick the higher remaining row. Independent engineered layers beat detection, watchstanders, and emergency response when those layers are still open on ventilation capture dilution VP. Paper, PPE, and insurance can sit beside a ventilation capture dilution VP control; they do not replace it. If production already started in the last sentence, the ventilation capture dilution VP answer is often stop, restore the gate, then proceed — not a memo. Name the ventilation capture dilution VP rule in one sentence, then name the verification, then name the attractive wrong answer you will refuse. A last-sentence freeze on ventilation capture dilution VP shrinks open rows; it does not invert them or authorize a skip to PPE. Keep ventilation capture dilution VP labels honest: a look-alike program can use the right vocabulary while sitting on the wrong row or the wrong statute.
`,
  cardFront: "Q=V(10X²+A); dilution ln; VP square?",
  cardBack: "1,050 cfm; t≈11.51 min; VP≈0.249. Traps: inches, log10, no square. Study only.",
  teachBackKey: "Pass if unflanged form uses X in feet, dilution uses ln, and VP is squared.",
  formulaSlug: "q-va",
};

export const items: ClassItem[] = [
  exam(
    "CSP-11 D6.01",
    "You are the CSP reviewing a live decision at a pharma suite changeover. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Unflanged V=100 fpm, X=1 ft, A=0.5 ft². Q=V(10X²+A).",
    [
      "1,050 cfm",
      "50 cfm (VA only on 0.5)",
      "800 cfm (flanged 7.5 without stem)",
      "10,500 (X in inches mishandled)",
    ],
    0,
    "Core Rule: 10X²+A=10.5; ×100=1050. Calculation Steps: 10(1)²+0.5=10.5; 100×10.5=1,050. Standards Cited: Unflanged capture teaching. Why Each Distractor Fails: 1,050 cfm: Correct: Distance tax included. | 50 cfm (VA only on 0.5): Fails: Dropped 10X². | 800 cfm (flanged 7.5 without stem): Fails: Wrong form. | 10,500 (X in inches mishandled): Fails: Inch trap.",
    "FORM",
    "Exam",
    [
      "Correct: Distance tax included.",
      "Fails: Dropped 10X².",
      "Fails: Wrong form.",
      "Fails: Inch trap.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Unflanged Q=V(10X²+A) with X in feet. Dilution t=-(V/Q)ln(C2/C1). VP=(V/4005)². Capture beats dilution; substitution still wins if open. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D6.01",
    "Purge 10,000 ft³ at 2,000 cfm from 200 to 20 ppm. t=-(V/Q)ln(C2/C1) ≈?",
    [
      "5 min (log10)",
      "≈11.51 min",
      "2 min (V/Q only)",
      "11.51 h (unit slip)",
    ],
    1,
    "Core Rule: ln(0.1)≈-2.3026; ×5≈11.51 min. Calculation Steps: -(10000/2000)ln(0.1)=-5×(-2.3026)=11.51 min. Standards Cited: Dilution ln. Why Each Distractor Fails: 5 min (log10): Fails: log10 trap. | ≈11.51 min: Correct: Natural log. | 2 min (V/Q only): Fails: Forgot ln. | 11.51 h (unit slip): Fails: Hours vs minutes.",
    "FORM",
    "Exam",
    [
      "Fails: log10 trap.",
      "Correct: Natural log.",
      "Fails: Forgot ln.",
      "Fails: Hours vs minutes.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Unflanged Q=V(10X²+A) with X in feet. Dilution t=-(V/Q)ln(C2/C1). VP=(V/4005)². Capture beats dilution; substitution still wins if open. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D6.01",
    "You are the CSP reviewing a live decision at a grain elevator maintenance day. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: VP at 2000 fpm, standard air. VP=(V/4005)² ≈.",
    [
      "≈0.50 (not squared)",
      "2.000",
      "≈0.249 in. wg",
      "4005",
    ],
    2,
    "Core Rule: Square the ratio. Calculation Steps: (2000/4005)²≈0.249. Standards Cited: VP teaching. Why Each Distractor Fails: ≈0.50 (not squared): Fails: Missing square. | 2.000: Fails: Copied V. | ≈0.249 in. wg: Correct: Squared. | 4005: Fails: Copied constant.",
    "FORM",
    "Exam",
    [
      "Fails: Missing square.",
      "Fails: Copied V.",
      "Correct: Squared.",
      "Fails: Copied constant.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Unflanged Q=V(10X²+A) with X in feet. Dilution t=-(V/Q)ln(C2/C1). VP=(V/4005)². Capture beats dilution; substitution still wins if open. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D6.01",
    "You are the CSP reviewing a live decision at a hospital utility plant shutdown. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Stem says flanged hood. Which capture form.",
    [
      "Always 10 even if flanged.",
      "Q=VA only, always.",
      "VP formula.",
      "Q=V(7.5X²+A) if that is the stem’s flanged teaching.",
    ],
    3,
    "Core Rule: Flanged vs unflanged is a last-sentence constraint. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Flanged form. Why Each Distractor Fails: Always 10 even if flanged.: Fails: Wrong form. | Q=VA only, always.: Fails: Face only. | VP formula.: Fails: Wrong formula. | Q=V(7.5X²+A) if that is the stem’s flanged teaching.: Correct: 7.5 when stem says flanged.",
    "STEM",
    "Exam",
    [
      "Fails: Wrong form.",
      "Fails: Face only.",
      "Fails: Wrong formula.",
      "Correct: 7.5 when stem says flanged.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Unflanged Q=V(10X²+A) with X in feet. Dilution t=-(V/Q)ln(C2/C1). VP=(V/4005)². Capture beats dilution; substitution still wins if open. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D6.01",
    "X given as 12 inches, unflanged, V=100, A=0.5 ft². Correct X in the form?",
    [
      "X=1 ft, so Q=1,050 cfm",
      "X=12, Q=144,050 fantasy",
      "X=0, Q=50",
      "Ignore A",
    ],
    0,
    "Core Rule: Inches to feet before squaring. Calculation Steps: 12 in = 1 ft; 10(1)²+0.5=10.5; ×100=1050. Standards Cited: UNIT pitfall. Why Each Distractor Fails: X=1 ft, so Q=1,050 cfm: Correct: Convert first. | X=12, Q=144,050 fantasy: Fails: Inches in the square. | X=0, Q=50: Fails: Dropped distance. | Ignore A: Fails: Dropped area.",
    "UNIT",
    "Exam",
    [
      "Correct: Convert first.",
      "Fails: Inches in the square.",
      "Fails: Dropped distance.",
      "Fails: Dropped area.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Unflanged Q=V(10X²+A) with X in feet. Dilution t=-(V/Q)ln(C2/C1). VP=(V/4005)². Capture beats dilution; substitution still wins if open. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D6.01",
    "Comfort wall fan offered instead of a capture hood while substitution is also open. Pick:",
    [
      "Comfort fan as equivalent LEV.",
      "Substitute if open; else capture hood — not a comfort fan as LEV.",
      "log10 dilution as equivalent capture.",
      "Respirators as the first row.",
    ],
    1,
    "Core Rule: If two answers work, take higher hierarchy / system / design. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Capture vs dilution vs substitution. Why Each Distractor Fails: Comfort fan as equivalent LEV.: Fails: Not LEV. | Substitute if open; else capture hood — not a comfort fan as LEV.: Correct: Higher remaining control. | log10 dilution as equivalent capture.: Fails: Wrong form plus lower row. | Respirators as the first row.: Fails: PPE first.",
    "HIER",
    "Expert",
    [
      "Fails: Not LEV.",
      "Correct: Higher remaining control.",
      "Fails: Wrong form plus lower row.",
      "Fails: PPE first.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Unflanged Q=V(10X²+A) with X in feet. Dilution t=-(V/Q)ln(C2/C1). VP=(V/4005)². Capture beats dilution; substitution still wins if open. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D6.01",
    "You are the CSP reviewing a live decision at an offshore fabrication night shift. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: ln vs log10 on C2/C1=0.1.",
    [
      "They are identical.",
      "log10 is always required.",
      "ln(0.1)≈2.30 in magnitude; log10(0.1)=1 — using log10 understates t.",
      "ln is a PEL.",
    ],
    2,
    "Core Rule: Natural log in the purge derivation. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: ln pitfall. Why Each Distractor Fails: They are identical.: Fails: Not identical. | log10 is always required.: Fails: Not required. | ln(0.1)≈2.30 in magnitude; log10(0.1)=1 — using log10 understates t.: Correct: Different bases. | ln is a PEL.: Fails: Not a PEL.",
    "FORM",
    "Foundation",
    [
      "Fails: Not identical.",
      "Fails: Not required.",
      "Correct: Different bases.",
      "Fails: Not a PEL.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Unflanged Q=V(10X²+A) with X in feet. Dilution t=-(V/Q)ln(C2/C1). VP=(V/4005)². Capture beats dilution; substitution still wins if open. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D6.01",
    "Make-up air missing; doors slam and a heater backdrafts after a new exhaust fan. Best fix?",
    [
      "Chain the doors as engineering.",
      "Turn the fan faster.",
      "A poster about doors.",
      "Provide make-up air; do not just chain the doors.",
    ],
    3,
    "Core Rule: Make-up air is part of the ventilation system. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Make-up air. Why Each Distractor Fails: Chain the doors as engineering.: Fails: Admin/hardware fight. | Turn the fan faster.: Fails: Worse imbalance. | A poster about doors.: Fails: Admin. | Provide make-up air; do not just chain the doors.: Correct: System design.",
    "HIER",
    "Exam",
    [
      "Fails: Admin/hardware fight.",
      "Fails: Worse imbalance.",
      "Fails: Admin.",
      "Correct: System design.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Unflanged Q=V(10X²+A) with X in feet. Dilution t=-(V/Q)ln(C2/C1). VP=(V/4005)². Capture beats dilution; substitution still wins if open. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D6.01",
    "Transport velocity for dust is too low; dust drops in ducts. Best system move?",
    [
      "Raise transport velocity / redesign duct — not a broom program as primary.",
      "Broom program as LEV.",
      "log10 the dust.",
      "Ignore because VP was 1.0 somewhere.",
    ],
    0,
    "Core Rule: Dust needs transport velocity. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Transport vs capture. Why Each Distractor Fails: Raise transport velocity / redesign duct — not a broom program as primary.: Correct: Redesign flow. | Broom program as LEV.: Fails: Admin around a duct. | log10 the dust.: Fails: Nonsense. | Ignore because VP was 1.0 somewhere.: Fails: VP at one point ≠ transport everywhere.",
    "STEM",
    "Exam",
    [
      "Correct: Redesign flow.",
      "Fails: Admin around a duct.",
      "Fails: Nonsense.",
      "Fails: VP at one point ≠ transport everywhere.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Unflanged Q=V(10X²+A) with X in feet. Dilution t=-(V/Q)ln(C2/C1). VP=(V/4005)². Capture beats dilution; substitution still wins if open. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D6.01",
    "Closest: t=11.51 min. Options 11.5 min, 5 min, 2 min, 12 h. Pick?",
    [
      "5 min",
      "11.5 min",
      "2 min",
      "12 h",
    ],
    1,
    "Core Rule: Closest rounded value. Calculation Steps: 11.51 nearest 11.5, not 5 from log10. Standards Cited: Closest-value. Why Each Distractor Fails: 5 min: Fails: log10. | 11.5 min: Correct: Nearest. | 2 min: Fails: V/Q. | 12 h: Fails: Unit slip.",
    "FORM",
    "Exam",
    [
      "Fails: log10.",
      "Correct: Nearest.",
      "Fails: V/Q.",
      "Fails: Unit slip.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Unflanged Q=V(10X²+A) with X in feet. Dilution t=-(V/Q)ln(C2/C1). VP=(V/4005)². Capture beats dilution; substitution still wins if open. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D6.01",
    "Q=VA on a 12-inch round duct at 2000 fpm. A=πr² with r=0.5 ft. Q≈?",
    [
      "≈6,283 (diameter as radius)",
      "2000 cfm",
      "≈1,571 cfm",
      "12 cfm",
    ],
    2,
    "Core Rule: r=D/2 in feet. Calculation Steps: A=π(0.5)²≈0.785; ×2000≈1,571. Standards Cited: Q=VA duct. Why Each Distractor Fails: ≈6,283 (diameter as radius): Fails: D as r. | 2000 cfm: Fails: Copied V. | ≈1,571 cfm: Correct: Correct r. | 12 cfm: Fails: Copied D.",
    "UNIT",
    "Exam",
    [
      "Fails: D as r.",
      "Fails: Copied V.",
      "Correct: Correct r.",
      "Fails: Copied D.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Unflanged Q=V(10X²+A) with X in feet. Dilution t=-(V/Q)ln(C2/C1). VP=(V/4005)². Capture beats dilution; substitution still wins if open. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D6.01",
    "After MoC adds a branch, the original hood starves. Best next step?",
    [
      "SOP only.",
      "Faster fan blindly without checking make-up and transport.",
      "Call it SPCC.",
      "Rebalance / redesign the system; do not only write a new SOP.",
    ],
    3,
    "Core Rule: Ventilation systems need rebalance after change. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: MoC + LEV. Why Each Distractor Fails: SOP only.: Fails: Admin around imbalance. | Faster fan blindly without checking make-up and transport.: Fails: May starve rooms or drop dust. | Call it SPCC.: Fails: Wrong statute. | Rebalance / redesign the system; do not only write a new SOP.: Correct: Rebalance.",
    "STEM",
    "Expert",
    [
      "Fails: Admin around imbalance.",
      "Fails: May starve rooms or drop dust.",
      "Fails: Wrong statute.",
      "Correct: Rebalance.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Unflanged Q=V(10X²+A) with X in feet. Dilution t=-(V/Q)ln(C2/C1). VP=(V/4005)². Capture beats dilution; substitution still wins if open. Verify the critical step before accepting a lower-tier control.",
    }
  ),
];

