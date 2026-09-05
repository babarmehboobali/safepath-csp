import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D2.06";

export const classFields: ClassFields = {
  hook: "A client asks for a safety case on a major fire. The team emails an FMEA with RPNs and a TRIR chart. You are the CSP. The question is what a safety case / bowtie actually has to show.",
  hookOilGas: `A regulator asks for a safety case on a well-control major accident. The team emails an FMEA with RPNs and a TRIR chart. You are the CSP. The question is what a safety case / bowtie actually has to show.`,
  hookConstruction: `A client asks for a safety case on a collapse major accident. The team emails an FMEA with RPNs and a TRIR chart. You are the CSP. The question is what a safety case / bowtie actually has to show.`,
  rule: "A safety case is a reasoned demonstration that barriers around a defined major-accident scenario are suitable and sufficient (often ALARP). A bowtie shows threats, preventive barriers, top event, mitigative barriers, consequences. FTA quantifies combinations. FMEA ranks single-point modes. Do not deliver RPN as a safety case (TOOL).",
  modelCaption:
    "Bowtie: left threats → preventive barriers → knot (top event) → mitigative barriers → right consequences. Caption: each barrier has an owner and a defeat mode. RPN does not hang on the knot.",
  workedCase:
    "Major fire on a solvent tank. Threats: overfill, hot work, electrical. Preventive: independent level, inerting, hot-work MoC. Top event: loss of containment / ignition. Mitigative: detection, deluge, dike, ERT. Demonstration: independence, testing, MoC. An FMEA row on “operator error” is not that picture.",
  trapsJson: traps(
    "Submitting RPN tables as a safety case.",
    "Barriers with no owner, no test, no independence.",
    "Calling insurance or TRIR a mitigative barrier.",
  ),
  contrastJson: contrast([
    { looksLike: "Safety case / bowtie", actually: "Demonstration of barriers on both sides of a top event" },
    { looksLike: "FTA", actually: "Logic/quantification of how the top event becomes true" },
    { looksLike: "FMEA", actually: "Single-point RPN ranking — not a major-accident demonstration" },
    { looksLike: "ALARP", actually: "Further risk reduction grossly disproportionate to the benefit — not “we are tired of spending”" },
  ]),
  mustScoreJson: mustScore(
    "A safety case argues risk is acceptable with evidence \u2014 not slogans.",
    "Claims, arguments, and evidence must connect (CAE thinking).",
    "Operating limits and assumptions must be stated and owned.",
    "Changes that break the argument trigger MoC and case update.",
    "A thick binder without evidence links is not a safety case.",
    "Independence and hierarchy of controls still sit inside the argument.",
    "Emergency response evidence does not replace missing engineered claims.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "evidence does not support the claim", pick: "fix evidence or weaken the claim \u2014 do not paper over" },
    { ifStem: "MoC changed a key assumption", pick: "update the safety case before normalizing" },
    { ifStem: "only ERT capacity is offered as the main claim", pick: "strengthen engineered claims first" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "the case is never reviewed after startup", pick: "set periodic and MoC-triggered review" },
  ),

  brief: `A safety case is a reasoned demonstration that barriers around a defined major-accident scenario are suitable and sufficient (often ALARP). A bowtie shows threats, preventive barriers, top event, mitigative barriers, consequences. FTA quantifies combinations. FMEA ranks single-point modes. Do not deliver RPN as a safety case (TOOL). If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
A safety case is a reasoned demonstration that barriers around a defined major-accident scenario are suitable and sufficient (often ALARP). A bowtie shows threats, preventive barriers, top event, mitigative barriers, consequences. FTA quantifies combinations. FMEA ranks single-point modes. Do not deliver RPN as a safety case (TOOL). Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
A client asks for a safety case on a major fire. The team emails an FMEA with RPNs and a TRIR chart. You are the CSP. The question is what a safety case / bowtie actually has to show. Oil-and-gas skin: A regulator asks for a safety case on a well-control major accident. You are the CSP. Construction skin: A client asks for a safety case on a collapse major accident. You are the CSP. Work the case: Major fire on a solvent tank. Threats: overfill, hot work, electrical. Preventive: independent level, inerting, hot-work MoC. Top event: loss of containment / ignition. Mitigative: detection, deluge, dike, ERT. Demonstration: independence, testing, MoC. An FMEA row on âoperator errorâ is not that picture. Classic traps: Submitting RPN tables as a safety case.; Barriers with no owner, no test, no independence.; Calling insurance or TRIR a mitigative barrier.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for safety case. Verify whether a higher system or design fix is still open. Contrast labels: Safety case / bowtie is actually Demonstration of barriers on both sides of a top event; FTA is actually Logic/quantification of how the top event becomes true; FMEA is actually Single-point RPN ranking — not a major-accident demonstration; ALARP is actually Further risk reduction grossly disproportionate to the benefit — not “we are tired of spending”. If the stem shows evidence does not support the claim, pick fix evidence or weaken the claim \u2014 do not paper over. If the stem shows MoC changed a key assumption, pick update the safety case before normalizing. If the stem shows only ERT capacity is offered as the main claim, pick strengthen engineered claims first. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows the case is never reviewed after startup, pick set periodic and MoC-triggered review. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Safety case — is an FMEA RPN table enough sits in CSP-11 Domain 2 Management Systems. The exam tests whether you apply the rule when a package already looks complete. Core rule: A safety case is a reasoned demonstration that barriers around a defined major-accident scenario are suitable and sufficient (often ALARP). A bowtie shows threats, preventive barriers, top event, mitigative barriers, consequences. FTA quantifies combinations. FMEA ranks single-point modes. Do not deliver RPN as a safety case (TOOL). Field context: A client asks for a safety case on a major fire. The team emails an FMEA with RPNs and a TRIR chart. You are the CSP. The question is what a safety case / bowtie actually has to show. The oil-and-gas skin shifts the same decision into production pressure: A regulator asks for a safety case on a well-control major accident. You are the CSP. The construction skin shifts it into schedule and trade stacking: A client asks for a safety case on a collapse major accident. You are the CSP. Model caption for this class: Bowtie: left threats â preventive barriers â knot (top event) â mitigative barriers â right consequences. Caption: each barrier has an owner and a defeat mode. RPN does not hang on the knot. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) A safety case argues risk is acceptable with evidence — not slogans. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Claims, arguments, and evidence must connect (CAE thinking). (3) Operating limits and assumptions must be stated and owned. (4) Changes that break the argument trigger MoC and case update. (5) A thick binder without evidence links is not a safety case. (6) Independence and hierarchy of controls still sit inside the argument. (7) Emergency response evidence does not replace missing engineered claims. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Major fire on a solvent tank. Threats: overfill, hot work, electrical. Preventive: independent level, inerting, hot-work MoC. Top event: loss of containment / ignition. Mitigative: detection, deluge, dike, ERT. Demonstration: independence, testing, MoC. An FMEA row on âoperator errorâ is not that picture. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Submitting RPN tables as a safety case.; Barriers with no owner, no test, no independence.; Calling insurance or TRIR a mitigative barrier.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Safety case / bowtie” is really Demonstration of barriers on both sides of a top event; “FTA” is really Logic/quantification of how the top event becomes true; “FMEA” is really Single-point RPN ranking — not a major-accident demonstration; “ALARP” is really Further risk reduction grossly disproportionate to the benefit — not “we are tired of spending”. Stem-if-then map: if evidence does not support the claim → fix evidence or weaken the claim \u2014 do not paper over; if MoC changed a key assumption → update the safety case before normalizing; if only ERT capacity is offered as the main claim → strengthen engineered claims first; if two answers work → higher hierarchy / system / design; if the case is never reviewed after startup → set periodic and MoC-triggered review. Scoring favors evidence, owners, verification, and hierarchy-smart controls on safety case. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Safety case — is an FMEA RPN table enough?",
  cardBack:
    "No. Show preventive and mitigative barriers around a defined top event (bowtie), with independence and MoC. FTA for combinations. RPN is the wrong method. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence describes a bowtie/safety case as barrier demonstration on both sides of a top event and flags RPN as the wrong method for that job.",
};

export const items: ClassItem[] = [
  exam(T, "A regulator asks for a safety case on a major fire. The team submits FMEA RPNs and last year’s TRIR. Best CSP call?", [
    "Accept — RPN plus TRIR is a safety case.",
    "Wrong method: deliver a bowtie/case that identifies the top event and demonstrates preventive and mitigative barriers with evidence.",
    "Submit ISO 14001 instead.",
    "Submit a Pareto of paper cuts.",
  ], 1, "TOOL: FMEA/TRIR are not a major-accident demonstration.", "TOOL", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "A safety case is a reasoned demonstration that barriers around a defined major-accident scenario are suitable and sufficient (often ALARP). A bowtie shows threats, preventive barriers, top event, mitigative barriers,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "On a bowtie, where does a dike belong for a tank spill top event?", [
    "Preventive barrier on the far left only.",
    "Mitigative (right of the knot) — it limits consequence after loss of containment.",
    "RPN detection column.",
    "Insurance schedule.",
  ], 1, "Dike is consequence limitation. Preventive would be independent overflow control.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "A safety case is a reasoned demonstration that barriers around a defined major-accident scenario are suitable and sufficient (often ALARP). A bowtie shows threats, preventive barriers, top event, mitigative barriers,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Two independent isolation valves must both fail to reach the top event. Which tool quantifies that combination inside the case?", [
    "FMEA RPN of one valve.",
    "FTA (AND gate / cut set) under that branch of the bowtie.",
    "Mean of last year’s first aids.",
    "OSHA PEL table.",
  ], 1, "TOOL: combinations → FTA, nested in the safety case as needed.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "A safety case is a reasoned demonstration that barriers around a defined major-accident scenario are suitable and sufficient (often ALARP). A bowtie shows threats, preventive barriers, top event, mitigative barriers,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "The only preventive “barrier” on a major fire bowtie is a hot-work video. Substitution to a non-flammable fluid is still open. Best action?", [
    "Keep the video — ALARP is satisfied by training.",
    "Substitute or inherently reduce inventory; video is not a sufficient preventive barrier while design is open.",
    "Move the video to the right-hand side.",
    "Add a pizza barrier.",
  ], 1, "HIER: a safety case does not freeze the pyramid.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "A safety case is a reasoned demonstration that barriers around a defined major-accident scenario are suitable and sufficient (often ALARP). A bowtie shows threats, preventive barriers, top event, mitigative barriers,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "ALARP argument in the stem: further reduction “costs too much” while a standard dike is still unbuilt and affordable relative to the consequence. Best CSP reading?", [
    "ALARP met — cost is subjective.",
    "ALARP not met: a reasonably practicable engineered barrier remains; “we prefer not to spend” is not grossly disproportionate.",
    "ALARP is the same as PEL compliance.",
    "ALARP is a 300-log concept.",
  ], 1, "STEM: ALARP is not fatigue. Open, practicable engineering remains.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "A safety case is a reasoned demonstration that barriers around a defined major-accident scenario are suitable and sufficient (often ALARP). A bowtie shows threats, preventive barriers, top event, mitigative barriers,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Finance lists the umbrella policy as a mitigative barrier on the bowtie. Best correction?", [
    "Keep it — transfer is mitigation.",
    "Remove it: insurance is risk financing, not a physical or engineered barrier on the consequence side.",
    "Move it to preventive.",
    "Replace deluge with the policy.",
  ], 1, "FIN: share/transfer is not a bowtie barrier.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "A safety case is a reasoned demonstration that barriers around a defined major-accident scenario are suitable and sufficient (often ALARP). A bowtie shows threats, preventive barriers, top event, mitigative barriers,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Last sentence: inherent substitution is closed. Remaining choices are an independent overflow and a dike, or labels and a horn. Best safety-case add?", [
    "Labels and horn — cheaper detection.",
    "Independent overflow (preventive) and dike (mitigative) as engineered barriers.",
    "TRIR target as a barrier.",
    "A climate survey.",
  ], 1, "STEM closed substitution. Remaining engineering on both sides beats detection theater.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "A safety case is a reasoned demonstration that barriers around a defined major-accident scenario are suitable and sufficient (often ALARP). A bowtie shows threats, preventive barriers, top event, mitigative barriers,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A barrier is “independent SIS.” It shares the process tap and the same maintenance contract as the BPCS. Problem?", [
    "None — SIS in the name is independence.",
    "Common cause: the case over-claims independence; redesign tap/maintenance or downgrade the claim.",
    "Independence is only an FMEA idea.",
    "Independence is a 1904 idea.",
  ], 1, "STEM: independence is hardware and organization, not a label.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "A safety case is a reasoned demonstration that barriers around a defined major-accident scenario are suitable and sufficient (often ALARP). A bowtie shows threats, preventive barriers, top event, mitigative barriers,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "When is FMEA the better primary tool than a safety case?", [
    "Major-accident demonstration to a regulator.",
    "Ranking single-point failure modes on a new gearbox design list.",
    "Two-barrier AND for a catastrophic top event.",
    "ALARP argument for a refinery case.",
  ], 1, "TOOL: FMEA for single-point lists; safety case/FTA for major accidents/combinations.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "A safety case is a reasoned demonstration that barriers around a defined major-accident scenario are suitable and sufficient (often ALARP). A bowtie shows threats, preventive barriers, top event, mitigative barriers,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "MoC installs a larger pump after the safety case is approved. Drawings and the bowtie are not updated. What failed?", [
    "Nothing — cases are historical.",
    "After-column MoC: the demonstration is now stale; barriers and P&IDs must match the field.",
    "FTA math only.",
    "The 8-hour TWA.",
  ], 1, "MoC after-window keeps the safety case true.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "A safety case is a reasoned demonstration that barriers around a defined major-accident scenario are suitable and sufficient (often ALARP). A bowtie shows threats, preventive barriers, top event, mitigative barriers,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A major-accident fire kills a worker at 02:00. The safety-case team wants a week to refresh the bowtie before OSHA is called. Clock?", [
    "One week is allowed for complex cases.",
    "Fatality: 8 hours to OSHA. The case document is not a pause.",
    "24 hours because fire is not a fatality clock.",
    "7 calendar days.",
  ], 1, "TIME: 8-hour fatality notification.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "A safety case is a reasoned demonstration that barriers around a defined major-accident scenario are suitable and sufficient (often ALARP). A bowtie shows threats, preventive barriers, top event, mitigative barriers,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a plastics compounding turnaround. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Which set is the most complete safety-case kernel.", [
    "Certificate, TRIR, and a slogan.",
    "Defined scenarios, bowtie barriers both sides, independence/testing/MoC evidence, residual risk statement.",
    "RPN table sorted descending.",
    "Workers-comp loss runs only.",
  ], 1, "Demonstration with evidence, not certificates and rates.", "STEM", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "A safety case is a reasoned demonstration that barriers around a defined major-accident scenario are suitable and sufficient (often ALARP). A bowtie shows threats, preventive barriers, top event, mitigative barriers,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
