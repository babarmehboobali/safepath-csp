import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D4.03";

export const classFields: ClassFields = {
  hook: "Mixture LFL with Le Chatelier — not the arithmetic mean. Dust still uses the pentagon, not the triangle.",
  hookOilGas: `Two fuel vapors in a vessel headspace: compute LFL_mix from mole fractions and component LFLs.`,
  hookConstruction: `Solvent blend in a confined area: Le Chatelier before 'average 50% LEL' folklore.`,
  rule: "For fuel mixture mole fractions y_i and component LFLs: 1/LFL_mix = Σ(y_i/LFL_i). Do not average LFLs. Dust explosions need the pentagon (oxygen, confinement, dispersion, fuel, ignition). Substitution still beats bigger fans if open.",
  modelCaption: "1/LFL_mix=Σ(y_i/LFL_i); contrast mean; dust pentagon.",
  workedCase: "y1=0.50 LFL1=5.0%; y2=0.50 LFL2=2.1%. 1/LFL=0.50/5+0.50/2.1=0.10+0.238095=0.338095; LFL≈2.9577%≈2.96%. Mean would wrongly give 3.55%.",
  trapsJson: traps(
    "Arithmetic mean of LFLs",
    "Adding LFLs",
    "Using triangle for dust",
  ),
  contrastJson: contrast([
    { looksLike: "Le Chatelier LFL_mix", actually: "Harmonic-style via Σ y/LFL" },
    { looksLike: "Arithmetic mean", actually: "Wrong for LFL mix" },
    { looksLike: "Gas/vapor triangle", actually: "Not enough for dust" },
    { looksLike: "Dust pentagon", actually: "Adds confinement+dispersion" },
    { looksLike: "LEL monitoring", actually: "Not substitution" },
    { looksLike: "%LEL", actually: "Fraction of LFL" },
  ]),
  mustScoreJson: mustScore(
    "Le Chatelier mixing rule estimates LFL of mixtures from component LFLs and mole fractions.",
    "Use consistent composition basis.",
    "LFL/UEL define flammable range \u2014 inerting/ventilation strategies follow.",
    "Do not treat mixture LFL as simple average without the rule form.",
    "Temperature/pressure shifts can change flammability \u2014 read stem.",
    "Hierarchy: eliminate flammable atmospheres when open.",
    "Calculator: careful fractions and reciprocal form.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "mixture LFL asked", pick: "apply Le Chatelier form carefully" },
    { ifStem: "atmosphere can be inerted/eliminated", pick: "prefer eliminate flammable mix" },
    { ifStem: "wrong basis fractions", pick: "convert to consistent mole/volume basis per stem" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "only hot-work permit without atmosphere control", pick: "control flammable range first" },
  ),

  brief: `For fuel mixture mole fractions y_i and component LFLs: 1/LFL_mix = Î£(y_i/LFL_i). Do not average LFLs. Dust explosions need the pentagon (oxygen, confinement, dispersion, fuel, ignition). Substitution still beats bigger fans if open. If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
For fuel mixture mole fractions y_i and component LFLs: 1/LFL_mix = Î£(y_i/LFL_i). Do not average LFLs. Dust explosions need the pentagon (oxygen, confinement, dispersion, fuel, ignition). Substitution still beats bigger fans if open. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
Mixture LFL with Le Chatelier â not the arithmetic mean. Dust still uses the pentagon, not the triangle. Oil-and-gas skin: Two fuel vapors in a vessel headspace: compute LFL_mix from mole fractions and component LFLs. Construction skin: Solvent blend in a confined area: Le Chatelier before 'average 50% LEL' folklore. Work the case: y1=0.50 LFL1=5.0%; y2=0.50 LFL2=2.1%. 1/LFL=0.50/5+0.50/2.1=0.10+0.238095=0.338095; LFLâ2.9577%â2.96%. Mean would wrongly give 3.55%. Classic traps: Arithmetic mean of LFLs; Adding LFLs; Using triangle for dust. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for le chatelier lfl. Verify whether a higher system or design fix is still open. Contrast labels: Le Chatelier LFL_mix is actually Harmonic-style via Σ y/LFL; Arithmetic mean is actually Wrong for LFL mix; Gas/vapor triangle is actually Not enough for dust; Dust pentagon is actually Adds confinement+dispersion; LEL monitoring is actually Not substitution. If the stem shows mixture LFL asked, pick apply Le Chatelier form carefully. If the stem shows atmosphere can be inerted/eliminated, pick prefer eliminate flammable mix. If the stem shows wrong basis fractions, pick convert to consistent mole/volume basis per stem. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows only hot-work permit without atmosphere control, pick control flammable range first. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Le Chatelier mixture LFL sits in CSP-11 Domain 4 Emergency Management. The exam tests whether you apply the rule when a package already looks complete. Core rule: For fuel mixture mole fractions y_i and component LFLs: 1/LFL_mix = Î£(y_i/LFL_i). Do not average LFLs. Dust explosions need the pentagon (oxygen, confinement, dispersion, fuel, ignition). Substitution still beats bigger fans if open. Field context: Mixture LFL with Le Chatelier â not the arithmetic mean. Dust still uses the pentagon, not the triangle. The oil-and-gas skin shifts the same decision into production pressure: Two fuel vapors in a vessel headspace: compute LFL_mix from mole fractions and component LFLs. The construction skin shifts it into schedule and trade stacking: Solvent blend in a confined area: Le Chatelier before 'average 50% LEL' folklore. Model caption for this class: 1/LFL_mix=Î£(y_i/LFL_i); contrast mean; dust pentagon. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Le Chatelier mixing rule estimates LFL of mixtures from component LFLs and mole fractions. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Use consistent composition basis. (3) LFL/UEL define flammable range — inerting/ventilation strategies follow. (4) Do not treat mixture LFL as simple average without the rule form. (5) Temperature/pressure shifts can change flammability — read stem. (6) Hierarchy: eliminate flammable atmospheres when open. (7) Calculator: careful fractions and reciprocal form. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: y1=0.50 LFL1=5.0%; y2=0.50 LFL2=2.1%. 1/LFL=0.50/5+0.50/2.1=0.10+0.238095=0.338095; LFLâ2.9577%â2.96%. Mean would wrongly give 3.55%. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Arithmetic mean of LFLs; Adding LFLs; Using triangle for dust. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Le Chatelier LFL_mix” is really Harmonic-style via Σ y/LFL; “Arithmetic mean” is really Wrong for LFL mix; “Gas/vapor triangle” is really Not enough for dust; “Dust pentagon” is really Adds confinement+dispersion; “LEL monitoring” is really Not substitution; “%LEL” is really Fraction of LFL. Stem-if-then map: if mixture LFL asked → apply Le Chatelier form carefully; if atmosphere can be inerted/eliminated → prefer eliminate flammable mix; if wrong basis fractions → convert to consistent mole/volume basis per stem; if two answers work → higher hierarchy / system / design; if only hot-work permit without atmosphere control → control flammable range first. Scoring favors evidence, owners, verification, and hierarchy-smart controls on le chatelier lfl. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Le Chatelier mixture LFL?",
  cardBack: "0.5/5+0.5/2.1 → LFL≈2.96% not 3.55%. Study only.",
  teachBackKey: "Writes Σ y/LFL and computes 2.96% example; names pentagon.",
  formulaSlug: "le-chatelier-lfl",
};

export const items: ClassItem[] = [
  exam(
    "CSP-11 D4.03",
    "You are the CSP reviewing a live decision at a plastics compounding turnaround. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: y=0.5/0.5; LFL=5.0% & 2.1%. LFL_mix.",
    [
      "≈2.96%",
      "3.55% mean",
      "7.1% sum",
      "5.0%",
    ],
    0,
    "Core Rule: 1/LFL=Σy/LFL. Calculation Steps: 1/0.338095≈2.96. Standards Cited: Le Chatelier. Why Each Distractor Fails: ≈2.96%: Correct: 2.96 | 3.55% mean: Fails: Mean trap | 7.1% sum: Fails: Sum | 5.0%: Fails: First only",
    "FORM",
    "Exam",
    [
      "Correct: 2.96",
      "Fails: Mean trap",
      "Fails: Sum",
      "Fails: First only",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "For fuel mixture mole fractions y_i and component LFLs: 1/LFL_mix = Σ(y_i/LFL_i). Do not average LFLs. Dust explosions need the pentagon (oxygen, confinement, dispersion, fuel, ignition). Substitution still beats bigg... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D4.03",
    "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Why mean fails.",
    [
      "Mean always safer",
      "LFL mixing is not arithmetic average",
      "OSHA requires mean",
      "Mean equals Le Chatelier",
    ],
    1,
    "Core Rule: Harmonic-like. Calculation Steps: Theory. Standards Cited: Chemistry. Why Each Distractor Fails: LFL mixing is not arithmetic average: Correct: Not avg | Mean always safer: Fails: False | OSHA requires mean: Fails: False | Mean equals Le Chatelier: Fails: False",
    "FORM",
    "Exam",
    [
      "Fails: False",
      "Correct: Not avg",
      "Fails: False",
      "Fails: False",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "For fuel mixture mole fractions y_i and component LFLs: 1/LFL_mix = Σ(y_i/LFL_i). Do not average LFLs. Dust explosions need the pentagon (oxygen, confinement, dispersion, fuel, ignition). Substitution still beats bigg... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D4.03",
    "You are the CSP reviewing a live decision at a refinery coker outage. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Dust needs which model.",
    [
      "Fire triangle only",
      "Only ignition energy",
      "Pentagon (incl. confinement & dispersion)",
      "Only Kst",
    ],
    2,
    "Core Rule: Pentagon. Calculation Steps: Dust. Standards Cited: Class 80 bridge. Why Each Distractor Fails: Pentagon (incl. confinement & dispersion): Correct: Pentagon | Fire triangle only: Fails: Incomplete | Only ignition energy: Fails: Incomplete | Only Kst: Fails: Partial",
    "TOOL",
    "Exam",
    [
      "Fails: Incomplete",
      "Fails: Incomplete",
      "Correct: Pentagon",
      "Fails: Partial",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "For fuel mixture mole fractions y_i and component LFLs: 1/LFL_mix = Σ(y_i/LFL_i). Do not average LFLs. Dust explosions need the pentagon (oxygen, confinement, dispersion, fuel, ignition). Substitution still beats bigg... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D4.03",
    "You are the CSP reviewing a live decision at a bridge deck pour laydown yard. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Bigger fan while aqueous cleaner substitution open.",
    [
      "Correct LEV-first always",
      "UNIT",
      "TIME",
      "HIER miss",
    ],
    3,
    "Core Rule: Substitution open. Calculation Steps: Hierarchy. Standards Cited: Controls. Why Each Distractor Fails: HIER miss: Correct: HIER | Correct LEV-first always: Fails: False | UNIT: Fails: No | TIME: Fails: No",
    "HIER",
    "Exam",
    [
      "Fails: False",
      "Fails: No",
      "Fails: No",
      "Correct: HIER",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "For fuel mixture mole fractions y_i and component LFLs: 1/LFL_mix = Σ(y_i/LFL_i). Do not average LFLs. Dust explosions need the pentagon (oxygen, confinement, dispersion, fuel, ignition). Substitution still beats bigg... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D4.03",
    "You are the CSP reviewing a live decision at a pharma suite changeover. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: y=0.3 & 0.7; LFL=4% & 1.5%. 1/LFL_mix.",
    [
      "0.3/4+0.7/1.5=0.075+0.4667≈0.5417",
      "0.3+0.7",
      "(4+1.5)/2",
      "4×1.5",
    ],
    0,
    "Core Rule: Σy/LFL. Calculation Steps: 0.5417. Standards Cited: Setup. Why Each Distractor Fails: 0.3/4+0.7/1.5=0.075+0.4667≈0.5417: Correct: Setup | 0.3+0.7: Fails: Sum y | (4+1.5)/2: Fails: Mean | 4×1.5: Fails: Product",
    "FORM",
    "Exam",
    [
      "Correct: Setup",
      "Fails: Sum y",
      "Fails: Mean",
      "Fails: Product",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "For fuel mixture mole fractions y_i and component LFLs: 1/LFL_mix = Σ(y_i/LFL_i). Do not average LFLs. Dust explosions need the pentagon (oxygen, confinement, dispersion, fuel, ignition). Substitution still beats bigg... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D4.03",
    "You are the CSP reviewing a live decision at a warehouse second-shift startup. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Then LFL_mix ≈.",
    [
      "0.54%",
      "≈1.85%",
      "5.5%",
      "1.0%",
    ],
    1,
    "Core Rule: 1/0.5417≈1.846. Calculation Steps: Invert. Standards Cited: Calc. Why Each Distractor Fails: ≈1.85%: Correct: 1.85 | 0.54%: Fails: Forgot invert | 5.5%: Fails: Meanish | 1.0%: Fails: Guess",
    "FORM",
    "Exam",
    [
      "Fails: Forgot invert",
      "Correct: 1.85",
      "Fails: Meanish",
      "Fails: Guess",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "For fuel mixture mole fractions y_i and component LFLs: 1/LFL_mix = Σ(y_i/LFL_i). Do not average LFLs. Dust explosions need the pentagon (oxygen, confinement, dispersion, fuel, ignition). Substitution still beats bigg... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D4.03",
    "You are the CSP reviewing a live decision at a grain elevator maintenance day. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: UEL vs LFL role.",
    [
      "Identical",
      "UEL used in Le Chatelier LFL formula same way always",
      "Upper vs lower flammable limits — different ends",
      "UEL replaces oxygen",
    ],
    2,
    "Core Rule: Defs. Calculation Steps: Flammability. Standards Cited: Fire chem. Why Each Distractor Fails: Upper vs lower flammable limits — different ends: Correct: Different | Identical: Fails: False | UEL used in Le Chatelier LFL formula same way always: Fails: Wrong formula | UEL replaces oxygen: Fails: False",
    "TOOL",
    "Exam",
    [
      "Fails: False",
      "Fails: Wrong formula",
      "Correct: Different",
      "Fails: False",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "For fuel mixture mole fractions y_i and component LFLs: 1/LFL_mix = Σ(y_i/LFL_i). Do not average LFLs. Dust explosions need the pentagon (oxygen, confinement, dispersion, fuel, ignition). Substitution still beats bigg... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D4.03",
    "You are the CSP reviewing a live decision at a hospital utility plant shutdown. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Broom as explosion vent.",
    [
      "Acceptable St-1 vent",
      "Equal to suppression",
      "Required by TRI",
      "Not a vent — wrong protection concept",
    ],
    3,
    "Core Rule: Vent≠broom. Calculation Steps: Protection. Standards Cited: Dust. Why Each Distractor Fails: Not a vent — wrong protection concept: Correct: Wrong | Acceptable St-1 vent: Fails: False | Equal to suppression: Fails: False | Required by TRI: Fails: EPCRA",
    "TOOL",
    "Exam",
    [
      "Fails: False",
      "Fails: False",
      "Fails: EPCRA",
      "Correct: Wrong",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "For fuel mixture mole fractions y_i and component LFLs: 1/LFL_mix = Σ(y_i/LFL_i). Do not average LFLs. Dust explosions need the pentagon (oxygen, confinement, dispersion, fuel, ignition). Substitution still beats bigg... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D4.03",
    "You are the CSP reviewing a live decision at a food packaging SKU change. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Mole fractions must sum to.",
    [
      "≈1.0 for the fuel basis used in stem",
      "0",
      "LFL",
      "1000",
    ],
    0,
    "Core Rule: Basis check. Calculation Steps: Fractions. Standards Cited: Stem. Why Each Distractor Fails: ≈1.0 for the fuel basis used in stem: Correct: ~1 | 0: Fails: No | LFL: Fails: No | 1000: Fails: No",
    "UNIT",
    "Exam",
    [
      "Correct: ~1",
      "Fails: No",
      "Fails: No",
      "Fails: No",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "For fuel mixture mole fractions y_i and component LFLs: 1/LFL_mix = Σ(y_i/LFL_i). Do not average LFLs. Dust explosions need the pentagon (oxygen, confinement, dispersion, fuel, ignition). Substitution still beats bigg... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D4.03",
    "Stem gives volume % equal to mole % ideal gas. OK to use as y_i?",
    [
      "Never",
      "Yes when stem equates them",
      "Only for dust",
      "Only solids",
    ],
    1,
    "Core Rule: Stem authority. Calculation Steps: Ideal gas teaching. Standards Cited: Assumptions. Why Each Distractor Fails: Yes when stem equates them: Correct: OK | Never: Fails: False | Only for dust: Fails: Wrong | Only solids: Fails: Wrong",
    "STEM",
    "Exam",
    [
      "Fails: False",
      "Correct: OK",
      "Fails: Wrong",
      "Fails: Wrong",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "For fuel mixture mole fractions y_i and component LFLs: 1/LFL_mix = Σ(y_i/LFL_i). Do not average LFLs. Dust explosions need the pentagon (oxygen, confinement, dispersion, fuel, ignition). Substitution still beats bigg... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D4.03",
    "You are the CSP reviewing a live decision at an offshore fabrication night shift. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Attractive wrong 3.55% is.",
    [
      "Le Chatelier result",
      "1/LFL sum",
      "(5.0+2.1)/2 mean",
      "Kst",
    ],
    2,
    "Core Rule: Recognize trap. Calculation Steps: Mean. Standards Cited: Distractor anatomy. Why Each Distractor Fails: (5.0+2.1)/2 mean: Correct: Mean trap | Le Chatelier result: Fails: That's correct path | 1/LFL sum: Fails: Setup not answer | Kst: Fails: Wrong domain",
    "FORM",
    "Exam",
    [
      "Fails: That's correct path",
      "Fails: Setup not answer",
      "Correct: Mean trap",
      "Fails: Wrong domain",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "For fuel mixture mole fractions y_i and component LFLs: 1/LFL_mix = Σ(y_i/LFL_i). Do not average LFLs. Dust explosions need the pentagon (oxygen, confinement, dispersion, fuel, ignition). Substitution still beats bigg... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D4.03",
    "You are the CSP reviewing a live decision at a municipal water-plant retrofit. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: VERIFY note.",
    [
      "Memorize all LFLs from one vendor bank",
      "Copy NFPA charts into app",
      "Use EMR",
      "Put component LFLs in stem — do not pirate tables",
    ],
    3,
    "Core Rule: Originality. Calculation Steps: Ethics. Standards Cited: Content hygiene. Why Each Distractor Fails: Put component LFLs in stem — do not pirate tables: Correct: VERIFY/original | Memorize all LFLs from one vendor bank: Fails: Bad | Copy NFPA charts into app: Fails: Bad | Use EMR: Fails: FIN",
    "STEM",
    "Exam",
    [
      "Fails: Bad",
      "Fails: Bad",
      "Fails: FIN",
      "Correct: VERIFY/original",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "For fuel mixture mole fractions y_i and component LFLs: 1/LFL_mix = Σ(y_i/LFL_i). Do not average LFLs. Dust explosions need the pentagon (oxygen, confinement, dispersion, fuel, ignition). Substitution still beats bigg... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];

