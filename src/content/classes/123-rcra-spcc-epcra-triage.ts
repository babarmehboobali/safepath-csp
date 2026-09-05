import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D5.01";

export const classFields: ClassFields = {
  hook: "A diesel AST by a creek, a listed waste drum, and an EHS above TPQ hit the same week. Sort RCRA vs SPCC vs EPCRA before you write a single plan.",
  hookOilGas: "Produced-water vs crude vs listed solvents vs an EHS cylinder. Oil-to-water is SPCC; waste is RCRA; community reporting is EPCRA.",
  hookConstruction: "A site diesel tank, paint-waste drums, and a chlorine cylinder for a temp disinfection skid. Same triage: oil, waste, EHS.",
  rule: "Sort by stuff and trigger: waste→RCRA, oil-to-water→SPCC, community planning/reporting→EPCRA. Then prevent generation, volume, and inventory if those are still open.",
  modelCaption: "Three bins: Waste (RCRA) | Oil to water (SPCC) | Community/release (EPCRA). Arrow out of each bin: prevent first, then the plan.",
  workedCase: "(1) 55-gal spent solvent: identify waste, generator rules — not an SPCC plan. (2) 12,000-gal diesel AST by a creek: SPCC containment/inspections. (3) EHS above TPQ: EPCRA planning notice. Losing answer: one SPCC binder for all three.",
  trapsJson: traps(
    "Writing SPCC for listed hazardous waste.",
    "Using a Tier II as a RCRA manifest.",
    "Treating HAZCOM as EPCRA community reporting.",
  ),
  contrastJson: contrast([
    { looksLike: "RCRA", actually: "Hazardous waste identification and cradle-to-grave" },
    { looksLike: "SPCC", actually: "Oil discharge prevention to waters" },
    { looksLike: "EPCRA 311/312", actually: "Inventory / community right-to-know" },
    { looksLike: "EPCRA 304", actually: "Release reporting" },
    { looksLike: "EPCRA 313 TRI", actually: "Annual toxic release inventory" },
    { looksLike: "OSHA HAZCOM", actually: "Worker right-to-know — cousin, not EPCRA" },
  ]),
  mustScoreJson: mustScore(
    "Triage by stuff: waste / oil / community-EHS-release.",
    "RCRA: listed or characteristic; generator/accumulation/manifest.",
    "SPCC: oil, threshold, discharge to waters, containment.",
    "EPCRA: planning, inventory, release reporting, TRI as asked.",
    "HAZCOM is worker-facing, not community EPCRA.",
    "One plan does not satisfy the other statutes.",
    "Prevention of generation/volume/inventory still wins if open.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "spent solvent / listed or characteristic waste", pick: "RCRA path" },
    { ifStem: "diesel/oil AST and a creek or shore", pick: "SPCC" },
    { ifStem: "EHS at or above TPQ", pick: "EPCRA planning" },
    { ifStem: "release above RQ", pick: "EPCRA/CERCLA-style report — not a late Tier II" },
    { ifStem: "worker SDS training only", pick: "HAZCOM, not community EPCRA" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" }
  ),
  brief: `Waste→RCRA, oil-to-water→SPCC, community/release→EPCRA. Prevent generation and volume first. Exam default: if two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Triage the program by the stuff and the trigger. RCRA (Resource Conservation and Recovery Act teaching) is waste identification, generator status, accumulation, and the cradle-to-grave manifest path. SPCC is oil discharge prevention to navigable waters/adjoining shorelines — tanks, piping, secondary containment, inspections. EPCRA is emergency planning and community right-to-know — inventory, SDS access, and release reporting to SERC/LEPC/fire, plus TRI where the stem asks. Do not write an SPCC plan for a listed hazardous waste drum and call it done.

Field move
A 55-gallon solvent waste drum is a waste question first: characteristic or listed, generator category, closed container, dates, labels, accumulation time. A 12,000-gallon diesel AST near a creek is an SPCC question: oil, threshold, reasonably expected discharge, containment and inspections. A threshold planning quantity of an EHS on site is EPCRA planning. A release above a reportable quantity is EPCRA/CERCLA-style reporting. Hierarchy still prefers not generating the waste and not storing oil over the water over a prettier plan.

Exam
If two answers work, take higher hierarchy / system / design. Last sentence names the media: waste vs oil to water vs community reporting. Attractive wrong answers apply the neighboring statute. If two answers both notify someone, take the one that also prevents the release or the waste. Redraw the decision sequence for RCRA SPCC EPCRA triage before looking at options. Cost and convenience will sell a lower control that looks busy. Attractive wrong answers on RCRA SPCC EPCRA triage are usually competent lower-row programs, busy paperwork, or a funded contract. Read the last sentence for constraints that close a higher control, then take the best remaining system or design fix for RCRA SPCC EPCRA triage. When capital or authority remains, spend it on the highest remaining hardware or independent layer, then use administrative controls and PPE only for residual RCRA SPCC EPCRA triage risk. Do not let schedule pressure invert the RCRA SPCC EPCRA triage sequence. Verification is a test with an owner, not a calendar invite. If two answers both look professional, take higher hierarchy / system / design on RCRA SPCC EPCRA triage. Teach-back restates the RCRA SPCC EPCRA triage rule, the sequence, and the verification step in one spoken sentence.
`,
  deep: `Candidates lose D5 items by grabbing the statute they studied last. This lab is a sorting hat. RCRA cares whether the material is a solid waste and then whether it is hazardous (listed or characteristic: ignitable, corrosive, reactive, toxic). Generator category drives accumulation time and whether a longer-term storage permit logic applies. Satellite accumulation is narrow. The manifest and LDR (land disposal restriction) teaching appear as sequence items, not as trivia hunts for section numbers.

SPCC (40 CFR 112 family concepts) cares about oil. Thresholds the exam uses conceptually: aboveground more than 1,320 gallons in containers ≥55 gallons, or underground more than 42,000 gallons, and a reasonable expectation of discharge to navigable waters or adjoining shorelines. Secondary containment, 110% of the largest tank as a teaching figure when the stem uses it, inspections, and a plan certified at the level the stem requires. A hazardous-waste satellite area is not automatically an SPCC tank farm.

EPCRA has pieces. 302/303: EHS at or above TPQ → emergency planning with SERC/LEPC. 304: release reporting. 311/312: SDS and inventory (Tier I/II teaching). 313: TRI for listed chemicals above thresholds. OSHA HAZCOM is the worker-right-to-know cousin, not the community statute. A 313 form does not replace an SPCC dike. A Tier II does not replace a RCRA manifest.

Prevention still wins. If two answers work, take higher hierarchy / system / design. Do not generate the waste (P2, substitution). Do not put oil next to the creek without containment, or better, reduce volume below the trigger if operations allow. Do not store an EHS above TPQ if a safer inventory is open. Plans are administrative around those design choices. Teach-back: name the stuff (waste, oil, EHS/release), name the trigger, name the program, then name a higher prevention if open. Scoring on RCRA SPCC EPCRA triage favors evidence, owners, verification, and hierarchy-smart controls rather than binders that look complete. Last-sentence constraints may freeze a higher RCRA SPCC EPCRA triage control; then take the best remaining fix and verify it instead of wishing the freeze away. Shared assumptions and checkbox closures create false assurance on RCRA SPCC EPCRA triage; name the assumption and test it. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet. Hold the exam default on RCRA SPCC EPCRA triage: if two answers work, take higher hierarchy / system / design, and reject polished paperwork when a higher system or design fix remains. In teach-back, name the RCRA SPCC EPCRA triage decision, the highest open control, and the verification step without reciting fake clause trivia. Field skins change the equipment, not the logic: a skid, a site tent, and a paint line still fail the same RCRA SPCC EPCRA triage test. A funded lower-row contract does not freeze a higher RCRA SPCC EPCRA triage row the stem still leaves open. Design the next job so the RCRA SPCC EPCRA triage control is obvious, then still implement it, then still verify it. Do not restart RCRA SPCC EPCRA triage from the bottom because PPE and training are what the plant already knows how to buy. Units, clocks, and tool names are traps only when you skip the last sentence on RCRA SPCC EPCRA triage. Walk the RCRA SPCC EPCRA triage sequence until it is automatic, then apply the last sentence, then pick the higher remaining row. Independent engineered layers beat detection, watchstanders, and emergency response when those layers are still open on RCRA SPCC EPCRA triage. Paper, PPE, and insurance can sit beside a RCRA SPCC EPCRA triage control; they do not replace it. If production already started in the last sentence, the RCRA SPCC EPCRA triage answer is often stop, restore the gate, then proceed — not a memo. Name the RCRA SPCC EPCRA triage rule in one sentence, then name the verification, then name the attractive wrong answer you will refuse.
`,
  cardFront: "Triage — RCRA, SPCC, or EPCRA?",
  cardBack: "Waste / oil-to-water / community-release. Attractive wrong: one binder for all three. Study only.",
  teachBackKey: "Pass if the three programs are sorted by stuff/trigger and prevention still outranks a prettier plan.",
  formulaSlug: null,
};

export const items: ClassItem[] = [
  exam(
    "CSP-11 D5.01",
    "Spent ignitable solvent in a 55-gal drum awaiting shipment. Primary program?",
    [
      "RCRA hazardous-waste generator requirements.",
      "SPCC only, because it is a liquid.",
      "EPCRA 313 only.",
      "ISO 22301 only.",
    ],
    0,
    "Core Rule: Waste identification first. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: RCRA vs neighbors. Why Each Distractor Fails: RCRA hazardous-waste generator requirements.: Correct: Characteristic/listed waste path. | SPCC only, because it is a liquid.: Fails: Oil-to-water statute. | EPCRA 313 only.: Fails: TRI is a different trigger. | ISO 22301 only.: Fails: Continuity standard.",
    "STEM",
    "Foundation",
    [
      "Correct: Characteristic/listed waste path.",
      "Fails: Oil-to-water statute.",
      "Fails: TRI is a different trigger.",
      "Fails: Continuity standard.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Sort by stuff and trigger: waste→RCRA, oil-to-water→SPCC, community planning/reporting→EPCRA. Then prevent generation, volume, and inventory if those are still open. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D5.01",
    "12,000-gallon diesel AST within sight of a creek. Primary program?",
    [
      "RCRA satellite accumulation only.",
      "SPCC — oil, threshold, reasonable discharge to waters.",
      "EPCRA 313 automatically.",
      "LOTO.",
    ],
    1,
    "Core Rule: Oil to waters is SPCC. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: SPCC trigger. Why Each Distractor Fails: RCRA satellite accumulation only.: Fails: Not waste by default. | SPCC — oil, threshold, reasonable discharge to waters.: Correct: Oil + threshold + waters. | EPCRA 313 automatically.: Fails: TRI needs listed chemical/threshold. | LOTO.: Fails: Wrong domain.",
    "STEM",
    "Exam",
    [
      "Fails: Not waste by default.",
      "Correct: Oil + threshold + waters.",
      "Fails: TRI needs listed chemical/threshold.",
      "Fails: Wrong domain.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Sort by stuff and trigger: waste→RCRA, oil-to-water→SPCC, community planning/reporting→EPCRA. Then prevent generation, volume, and inventory if those are still open. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D5.01",
    "You are the CSP reviewing a live decision at a warehouse second-shift startup. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: EHS stored above its TPQ. Which EPCRA piece is first.",
    [
      "A RCRA manifest.",
      "A Hazen-Williams calc.",
      "Emergency planning notification to SERC/LEPC (302/303 teaching).",
      "A 5 dB exchange.",
    ],
    2,
    "Core Rule: TPQ → planning. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: EPCRA planning. Why Each Distractor Fails: A RCRA manifest.: Fails: Waste paper. | A Hazen-Williams calc.: Fails: Fire math. | Emergency planning notification to SERC/LEPC (302/303 teaching).: Correct: Planning notification. | A 5 dB exchange.: Fails: Noise math.",
    "STEM",
    "Exam",
    [
      "Fails: Waste paper.",
      "Fails: Fire math.",
      "Correct: Planning notification.",
      "Fails: Noise math.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Sort by stuff and trigger: waste→RCRA, oil-to-water→SPCC, community planning/reporting→EPCRA. Then prevent generation, volume, and inventory if those are still open. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D5.01",
    "Release above a reportable quantity. Best immediate compliance idea?",
    [
      "Wait for next year’s TRI and say nothing now.",
      "Write only a new SDS.",
      "Average the LFL.",
      "Report as required to the listed agencies; then prevent recurrence with a higher control.",
    ],
    3,
    "Core Rule: Release reporting is now, not the annual form. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: EPCRA 304 vs 313. Why Each Distractor Fails: Wait for next year’s TRI and say nothing now.: Fails: 313 is annual inventory/releases, not the 304 call. | Write only a new SDS.: Fails: SDS is HAZCOM. | Average the LFL.: Fails: Wrong class. | Report as required to the listed agencies; then prevent recurrence with a higher control.: Correct: Immediate report + prevention.",
    "TIME",
    "Exam",
    [
      "Fails: 313 is annual inventory/releases, not the 304 call.",
      "Fails: SDS is HAZCOM.",
      "Fails: Wrong class.",
      "Correct: Immediate report + prevention.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Sort by stuff and trigger: waste→RCRA, oil-to-water→SPCC, community planning/reporting→EPCRA. Then prevent generation, volume, and inventory if those are still open. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D5.01",
    "Worker SDS training is in place. Community LEPC never notified of an EHS above TPQ. Gap?",
    [
      "HAZCOM ≠ EPCRA community planning.",
      "HAZCOM always satisfies EPCRA 302.",
      "HAZCOM is SPCC.",
      "HAZCOM is RCRA LDR.",
    ],
    0,
    "Core Rule: Worker vs community audience. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: HAZCOM vs EPCRA. Why Each Distractor Fails: HAZCOM ≠ EPCRA community planning.: Correct: Different statutes/audiences. | HAZCOM always satisfies EPCRA 302.: Fails: Does not satisfy. | HAZCOM is SPCC.: Fails: Not SPCC. | HAZCOM is RCRA LDR.: Fails: Not LDR.",
    "STEM",
    "Exam",
    [
      "Correct: Different statutes/audiences.",
      "Fails: Does not satisfy.",
      "Fails: Not SPCC.",
      "Fails: Not LDR.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Sort by stuff and trigger: waste→RCRA, oil-to-water→SPCC, community planning/reporting→EPCRA. Then prevent generation, volume, and inventory if those are still open. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D5.01",
    "Listed waste, diesel AST by a creek, and an EHS above TPQ. One SPCC binder is offered for all. Critique?",
    [
      "One binder always satisfies RCRA+EPCRA.",
      "Wrong triage — three programs; SPCC does not cover listed waste or EPCRA planning.",
      "SPCC replaces TRI.",
      "SPCC is a PEL.",
    ],
    1,
    "Core Rule: One plan ≠ three statutes. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Triage. Why Each Distractor Fails: One binder always satisfies RCRA+EPCRA.: Fails: False equivalence. | Wrong triage — three programs; SPCC does not cover listed waste or EPCRA planning.: Correct: Sort then apply each. | SPCC replaces TRI.: Fails: Does not replace TRI. | SPCC is a PEL.: Fails: Not a PEL.",
    "STEM",
    "Expert",
    [
      "Fails: False equivalence.",
      "Correct: Sort then apply each.",
      "Fails: Does not replace TRI.",
      "Fails: Not a PEL.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Sort by stuff and trigger: waste→RCRA, oil-to-water→SPCC, community planning/reporting→EPCRA. Then prevent generation, volume, and inventory if those are still open. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D5.01",
    "Best pollution-prevention move still open for the solvent waste?",
    [
      "A prettier manifest as elimination.",
      "A larger SPCC dike as a waste control.",
      "Substitute or change process so the hazardous waste is not generated.",
      "A Tier II as a waste control.",
    ],
    2,
    "Core Rule: P2/substitution beats paperwork. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Hierarchy in D5. Why Each Distractor Fails: A prettier manifest as elimination.: Fails: Manifest is admin. | A larger SPCC dike as a waste control.: Fails: Wrong program. | Substitute or change process so the hazardous waste is not generated.: Correct: Do not generate. | A Tier II as a waste control.: Fails: Wrong program.",
    "HIER",
    "Exam",
    [
      "Fails: Manifest is admin.",
      "Fails: Wrong program.",
      "Correct: Do not generate.",
      "Fails: Wrong program.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Sort by stuff and trigger: waste→RCRA, oil-to-water→SPCC, community planning/reporting→EPCRA. Then prevent generation, volume, and inventory if those are still open. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D5.01",
    "SPCC secondary containment teaching figure when the stem uses 110% of the largest tank:",
    [
      "Containment replaces the need to inspect.",
      "Containment is RCRA LDR.",
      "Containment is a NIOSH REL.",
      "Size containment to the stem’s rule (often 110% of largest) plus freeboard if given; then still prevent the spill.",
    ],
    3,
    "Core Rule: Use the stem’s containment rule. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: SPCC containment. Why Each Distractor Fails: Containment replaces the need to inspect.: Fails: Inspections remain. | Containment is RCRA LDR.: Fails: Wrong statute. | Containment is a NIOSH REL.: Fails: Wrong domain. | Size containment to the stem’s rule (often 110% of largest) plus freeboard if given; then still prevent the spill.: Correct: Stem figure + freeboard if given.",
    "STEM",
    "Exam",
    [
      "Fails: Inspections remain.",
      "Fails: Wrong statute.",
      "Fails: Wrong domain.",
      "Correct: Stem figure + freeboard if given.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Sort by stuff and trigger: waste→RCRA, oil-to-water→SPCC, community planning/reporting→EPCRA. Then prevent generation, volume, and inventory if those are still open. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D5.01",
    "You are the CSP reviewing a live decision at a municipal water-plant retrofit. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Characteristic waste codes conceptually include:.",
    [
      "Ignitable, corrosive, reactive, toxic.",
      "Only oil in waters.",
      "Only EHS TPQs.",
      "Only 5 dB vs 3 dB.",
    ],
    0,
    "Core Rule: D-characteristic family teaching. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: RCRA characteristics. Why Each Distractor Fails: Ignitable, corrosive, reactive, toxic.: Correct: ICRT. | Only oil in waters.: Fails: SPCC. | Only EHS TPQs.: Fails: EPCRA. | Only 5 dB vs 3 dB.: Fails: Noise.",
    "STEM",
    "Foundation",
    [
      "Correct: ICRT.",
      "Fails: SPCC.",
      "Fails: EPCRA.",
      "Fails: Noise.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Sort by stuff and trigger: waste→RCRA, oil-to-water→SPCC, community planning/reporting→EPCRA. Then prevent generation, volume, and inventory if those are still open. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D5.01",
    "You are the CSP reviewing a live decision at a plastics compounding turnaround. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: TRI (313) is best described as:.",
    [
      "The same as 304 release reporting in real time.",
      "Annual toxic-release inventory reporting for listed chemicals above thresholds — not the immediate RQ call.",
      "A replacement for RCRA manifests.",
      "A fire-pump curve.",
    ],
    1,
    "Core Rule: Annual vs immediate. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: 313 vs 304. Why Each Distractor Fails: The same as 304 release reporting in real time.: Fails: 304 is the release call. | Annual toxic-release inventory reporting for listed chemicals above thresholds — not the immediate RQ call.: Correct: Annual inventory/releases. | A replacement for RCRA manifests.: Fails: Not a manifest. | A fire-pump curve.: Fails: Wrong domain.",
    "TIME",
    "Exam",
    [
      "Fails: 304 is the release call.",
      "Correct: Annual inventory/releases.",
      "Fails: Not a manifest.",
      "Fails: Wrong domain.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Sort by stuff and trigger: waste→RCRA, oil-to-water→SPCC, community planning/reporting→EPCRA. Then prevent generation, volume, and inventory if those are still open. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D5.01",
    "Underground oil tanks totaling 50,000 gallons with a pathway to waters. SPCC conceptually?",
    [
      "Never in, because they are underground.",
      "Only RCRA.",
      "In — underground threshold teaching is 42,000 gallons plus discharge expectation.",
      "Only HAZCOM.",
    ],
    2,
    "Core Rule: UG threshold vs AG 1,320 teaching. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: SPCC thresholds. Why Each Distractor Fails: Never in, because they are underground.: Fails: Buried ≠ exempt. | Only RCRA.: Fails: Not automatically waste. | In — underground threshold teaching is 42,000 gallons plus discharge expectation.: Correct: UG >42,000 teaching. | Only HAZCOM.: Fails: Worker standard.",
    "STEM",
    "Expert",
    [
      "Fails: Buried ≠ exempt.",
      "Fails: Not automatically waste.",
      "Correct: UG >42,000 teaching.",
      "Fails: Worker standard.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Sort by stuff and trigger: waste→RCRA, oil-to-water→SPCC, community planning/reporting→EPCRA. Then prevent generation, volume, and inventory if those are still open. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D5.01",
    "Two answers: a complete SPCC plan next to the creek, or relocating/reducing oil so the reasonable-discharge setup goes away. Pick:",
    [
      "The plan as elimination.",
      "A Tier II as elimination.",
      "A manifest as SPCC.",
      "Relocate/reduce if still open; the plan is residual admin around remaining oil.",
    ],
    3,
    "Core Rule: If two answers work, take higher hierarchy / system / design. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Prevention vs plan. Why Each Distractor Fails: The plan as elimination.: Fails: Plan is admin. | A Tier II as elimination.: Fails: Wrong program. | A manifest as SPCC.: Fails: Wrong program. | Relocate/reduce if still open; the plan is residual admin around remaining oil.: Correct: Higher design.",
    "HIER",
    "Expert",
    [
      "Fails: Plan is admin.",
      "Fails: Wrong program.",
      "Fails: Wrong program.",
      "Correct: Higher design.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Sort by stuff and trigger: waste→RCRA, oil-to-water→SPCC, community planning/reporting→EPCRA. Then prevent generation, volume, and inventory if those are still open. Verify the critical step before accepting a lower-tier control.",
    }
  ),
];

