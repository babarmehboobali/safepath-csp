import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D5.01";

export const classFields: ClassFields = {
  hook: "Kill the 'SPCC = 110% always' myth. Federal containment idea: largest container plus precipitation freeboard — VERIFY 40 CFR 112.8(c)(2) wording.",
  hookOilGas: `Tank farm dikes: size to largest tank + rain freeboard, not a universal 110% rule of thumb.`,
  hookConstruction: `Temp fuel skid: secondary containment volume from stem data; refuse 110% autopilot.`,
  rule: "P2 prefers source reduction over cleanup. SPCC bulk storage secondary containment teaching: capacity for largest single container plus freeboard for precipitation when the stem/federal idea applies — not a universal 110% formula unless the stem's site standard says 110%. Applicability is threshold-based (VERIFY). SPCC ≠ RCRA ≠ HAZWOPER.",
  modelCaption: "Largest tank volume + freeboard rain volume − deductions per stem; mythbust 110%.",
  workedCase: "Largest tank 10,000 gal; freeboard rain on dike floor 20 ft × 40 ft × 0.5 ft = 400 ft^3. 400×7.48≈2,992 gal. Required idea ≈10,000+2,992=12,992 gal (illustrative; ignore displacements if stem says). 110% of 10,000=11,000 underestimates rain in this stem.",
  trapsJson: traps(
    "Universal 110%",
    "Ignoring freeboard rain",
    "Mixing SPCC with RCRA clocks",
  ),
  contrastJson: contrast([
    { looksLike: "Largest+freeboard", actually: "Federal SPCC idea teaching" },
    { looksLike: "110% rule of thumb", actually: "Only if stem/site standard says" },
    { looksLike: "SPCC", actually: "Oil pollution prevention" },
    { looksLike: "RCRA", actually: "Hazardous waste" },
    { looksLike: "HAZWOPER", actually: "Emergency response" },
    { looksLike: "P2", actually: "Source reduction first" },
  ]),
  mustScoreJson: mustScore(
    "SPCC freeboard: containment volume includes precipitation allowance when required.",
    "Size to largest tank plus freeboard/rain per applicable rule in stem.",
    "Convert ft3 to gallons with 7.48.",
    "Drainage valves must be normally closed/controlled.",
    "Inspect dikes after storms.",
    "Response gear complements \u2014 does not replace \u2014 containment.",
    "Minimize oil inventory when open.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "rain freeboard specified", pick: "include allowance in volume" },
    { ifStem: "ft3 to gallons", pick: "multiply by 7.48" },
    { ifStem: "drain valve left open", pick: "control drainage \u2014 normally closed practice" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "kits only while dike undersized", pick: "fix containment" },
  ),

  brief: `P2 prefers source reduction over cleanup. SPCC bulk storage secondary containment teaching: capacity for largest single container plus freeboard for precipitation when the stem/federal idea applies â not a universal 110% formula unless the stem's site standard says 110%. Applicability is threshold-based (VERIFY). SPCC â RCRA â HAZWOPER. If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
P2 prefers source reduction over cleanup. SPCC bulk storage secondary containment teaching: capacity for largest single container plus freeboard for precipitation when the stem/federal idea applies â not a universal 110% formula unless the stem's site standard says 110%. Applicability is threshold-based (VERIFY). SPCC â  RCRA â  HAZWOPER. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
Kill the 'SPCC = 110% always' myth. Federal containment idea: largest container plus precipitation freeboard â VERIFY 40 CFR 112.8(c)(2) wording. Oil-and-gas skin: Tank farm dikes: size to largest tank + rain freeboard, not a universal 110% rule of thumb. Construction skin: Temp fuel skid: secondary containment volume from stem data; refuse 110% autopilot. Work the case: Largest tank 10,000 gal; freeboard rain on dike floor 20 ft Ã 40 ft Ã 0.5 ft = 400 ft^3. 400Ã7.48â2,992 gal. Required idea â10,000+2,992=12,992 gal (illustrative; ignore displacements if stem says). 110% of 10,000=11,000 underestimates rain in this stem. Classic traps: Universal 110%; Ignoring freeboard rain; Mixing SPCC with RCRA clocks. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for spcc freeboard. Verify whether a higher system or design fix is still open. Contrast labels: Largest+freeboard is actually Federal SPCC idea teaching; 110% rule of thumb is actually Only if stem/site standard says; SPCC is actually Oil pollution prevention; RCRA is actually Hazardous waste; HAZWOPER is actually Emergency response. If the stem shows rain freeboard specified, pick include allowance in volume. If the stem shows ft3 to gallons, pick multiply by 7.48. If the stem shows drain valve left open, pick control drainage \u2014 normally closed practice. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows kits only while dike undersized, pick fix containment. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `SPCC: largest + freeboard, not always 110%. sits in CSP-11 Domain 5 Environmental Management. The exam tests whether you apply the rule when a package already looks complete. Core rule: P2 prefers source reduction over cleanup. SPCC bulk storage secondary containment teaching: capacity for largest single container plus freeboard for precipitation when the stem/federal idea applies â not a universal 110% formula unless the stem's site standard says 110%. Applicability is threshold-based (VERIFY). SPCC â  RCRA â  HAZWOPER. Field context: Kill the 'SPCC = 110% always' myth. Federal containment idea: largest container plus precipitation freeboard â VERIFY 40 CFR 112.8(c)(2) wording. The oil-and-gas skin shifts the same decision into production pressure: Tank farm dikes: size to largest tank + rain freeboard, not a universal 110% rule of thumb. The construction skin shifts it into schedule and trade stacking: Temp fuel skid: secondary containment volume from stem data; refuse 110% autopilot. Model caption for this class: Largest tank volume + freeboard rain volume â deductions per stem; mythbust 110%. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) SPCC freeboard: containment volume includes precipitation allowance when required. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Size to largest tank plus freeboard/rain per applicable rule in stem. (3) Convert ft3 to gallons with 7.48. (4) Drainage valves must be normally closed/controlled. (5) Inspect dikes after storms. (6) Response gear complements — does not replace — containment. (7) Minimize oil inventory when open. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Largest tank 10,000 gal; freeboard rain on dike floor 20 ft Ã 40 ft Ã 0.5 ft = 400 ft^3. 400Ã7.48â2,992 gal. Required idea â10,000+2,992=12,992 gal (illustrative; ignore displacements if stem says). 110% of 10,000=11,000 underestimates rain in this stem. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Universal 110%; Ignoring freeboard rain; Mixing SPCC with RCRA clocks. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Largest+freeboard” is really Federal SPCC idea teaching; “110% rule of thumb” is really Only if stem/site standard says; “SPCC” is really Oil pollution prevention; “RCRA” is really Hazardous waste; “HAZWOPER” is really Emergency response; “P2” is really Source reduction first. Stem-if-then map: if rain freeboard specified → include allowance in volume; if ft3 to gallons → multiply by 7.48; if drain valve left open → control drainage \u2014 normally closed practice; if two answers work → higher hierarchy / system / design; if kits only while dike undersized → fix containment. Scoring favors evidence, owners, verification, and hierarchy-smart controls on spcc freeboard. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "SPCC: largest + freeboard, not always 110%.",
  cardBack: "10k + ~2992 rain ≈12,992 vs 11,000 myth. Study only.",
  teachBackKey: "States largest+freeboard and rejects universal 110%.",
  formulaSlug: "spcc-containment",
};

export const items: ClassItem[] = [
  exam(
    "CSP-11 D5.01",
    "You are the CSP reviewing a live decision at a municipal water-plant retrofit. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Federal SPCC bulk idea (teaching).",
    [
      "Largest container + precipitation freeboard",
      "Always exactly 110%",
      "RCRA 90-day rule",
      "OSHA PEL",
    ],
    0,
    "Core Rule: Largest+freeboard. Calculation Steps: Per stem/federal idea. Standards Cited: VERIFY 112.8(c)(2). Why Each Distractor Fails: Largest container + precipitation freeboard: Correct: Correct | Always exactly 110%: Fails: Myth | RCRA 90-day rule: Fails: Wrong regime | OSHA PEL: Fails: Wrong",
    "FORM",
    "Exam",
    [
      "Correct: Correct",
      "Fails: Myth",
      "Fails: Wrong regime",
      "Fails: Wrong",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "P2 prefers source reduction over cleanup. SPCC bulk storage secondary containment teaching: capacity for largest single container plus freeboard for precipitation when the stem/federal idea applies — not a universal 1... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D5.01",
    "10,000 gal tank; rain freeboard 2,992 gal. Approx need?",
    [
      "11,000 (110%)",
      "≈12,992 gal",
      "10,000",
      "2,992",
    ],
    1,
    "Core Rule: Sum. Calculation Steps: 10000+2992. Standards Cited: Teaching. Why Each Distractor Fails: ≈12,992 gal: Correct: 12992 | 11,000 (110%): Fails: Myth undersize | 10,000: Fails: Tank only | 2,992: Fails: Rain only",
    "FORM",
    "Exam",
    [
      "Fails: Myth undersize",
      "Correct: 12992",
      "Fails: Tank only",
      "Fails: Rain only",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "P2 prefers source reduction over cleanup. SPCC bulk storage secondary containment teaching: capacity for largest single container plus freeboard for precipitation when the stem/federal idea applies — not a universal 1... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D5.01",
    "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: 20×40×0.5 ft freeboard volume in gallons (×7.48).",
    [
      "400 gal",
      "7.48 gal",
      "≈2,992 gal",
      "20 gal",
    ],
    2,
    "Core Rule: ft^3×7.48. Calculation Steps: 400×7.48≈2992. Standards Cited: Unit convert. Why Each Distractor Fails: ≈2,992 gal: Correct: 2992 | 400 gal: Fails: Left in ft3 | 7.48 gal: Fails: Factor | 20 gal: Fails: Dim",
    "UNIT",
    "Exam",
    [
      "Fails: Left in ft3",
      "Fails: Factor",
      "Correct: 2992",
      "Fails: Dim",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "P2 prefers source reduction over cleanup. SPCC bulk storage secondary containment teaching: capacity for largest single container plus freeboard for precipitation when the stem/federal idea applies — not a universal 1... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D5.01",
    "You are the CSP reviewing a live decision at a refinery coker outage. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Why 110% myth fails here.",
    [
      "110% is always larger",
      "EPA forbids freeboard",
      "OSHA requires 110%",
      "Rain freeboard can exceed 10% of tank",
    ],
    3,
    "Core Rule: Compare numbers. Calculation Steps: 1000 vs 2992. Standards Cited: Mythbust. Why Each Distractor Fails: Rain freeboard can exceed 10% of tank: Correct: Exceeds | 110% is always larger: Fails: False | EPA forbids freeboard: Fails: False | OSHA requires 110%: Fails: False",
    "STEM",
    "Exam",
    [
      "Fails: False",
      "Fails: False",
      "Fails: False",
      "Correct: Exceeds",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "P2 prefers source reduction over cleanup. SPCC bulk storage secondary containment teaching: capacity for largest single container plus freeboard for precipitation when the stem/federal idea applies — not a universal 1... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D5.01",
    "You are the CSP reviewing a live decision at a bridge deck pour laydown yard. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: P2 priority.",
    [
      "Source reduction over cleanup",
      "Always more absorbent pads",
      "Larger dikes first always",
      "Insurance first",
    ],
    0,
    "Core Rule: P2 hierarchy. Calculation Steps: Prevention. Standards Cited: D5.01. Why Each Distractor Fails: Source reduction over cleanup: Correct: P2 | Always more absorbent pads: Fails: Reactive | Larger dikes first always: Fails: Not always first | Insurance first: Fails: FIN",
    "HIER",
    "Exam",
    [
      "Correct: P2",
      "Fails: Reactive",
      "Fails: Not always first",
      "Fails: FIN",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "P2 prefers source reduction over cleanup. SPCC bulk storage secondary containment teaching: capacity for largest single container plus freeboard for precipitation when the stem/federal idea applies — not a universal 1... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D5.01",
    "You are the CSP reviewing a live decision at a pharma suite changeover. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: SPCC vs RCRA.",
    [
      "Identical",
      "Oil prevention vs hazardous waste management",
      "Both are OSHA",
      "Both are NFPA 70E",
    ],
    1,
    "Core Rule: Regimes differ. Calculation Steps: Contrast. Standards Cited: EPA. Why Each Distractor Fails: Oil prevention vs hazardous waste management: Correct: Contrast | Identical: Fails: False | Both are OSHA: Fails: False | Both are NFPA 70E: Fails: False",
    "TOOL",
    "Exam",
    [
      "Fails: False",
      "Correct: Contrast",
      "Fails: False",
      "Fails: False",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "P2 prefers source reduction over cleanup. SPCC bulk storage secondary containment teaching: capacity for largest single container plus freeboard for precipitation when the stem/federal idea applies — not a universal 1... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D5.01",
    "Site standard says 110% and exceeds freeboard calc. Follow?",
    [
      "Ignore site standard",
      "Always federal minimum only if lower",
      "Follow the more protective stem/site requirement",
      "Use EMR",
    ],
    2,
    "Core Rule: More protective wins when required. Calculation Steps: Site vs federal. Standards Cited: Compliance. Why Each Distractor Fails: Follow the more protective stem/site requirement: Correct: Site | Ignore site standard: Fails: Wrong | Always federal minimum only if lower: Fails: Incomplete | Use EMR: Fails: FIN",
    "STEM",
    "Exam",
    [
      "Fails: Wrong",
      "Fails: Incomplete",
      "Correct: Site",
      "Fails: FIN",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "P2 prefers source reduction over cleanup. SPCC bulk storage secondary containment teaching: capacity for largest single container plus freeboard for precipitation when the stem/federal idea applies — not a universal 1... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D5.01",
    "You are the CSP reviewing a live decision at a grain elevator maintenance day. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: HAZWOPER vs SPCC mix error code.",
    [
      "UNIT",
      "TIME",
      "PELTLV",
      "TOOL",
    ],
    3,
    "Core Rule: Wrong framework. Calculation Steps: Emergency vs prevention plan. Standards Cited: Classify. Why Each Distractor Fails: TOOL: Correct: TOOL | UNIT: Fails: No | TIME: Fails: No | PELTLV: Fails: No",
    "TOOL",
    "Exam",
    [
      "Fails: No",
      "Fails: No",
      "Fails: No",
      "Correct: TOOL",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "P2 prefers source reduction over cleanup. SPCC bulk storage secondary containment teaching: capacity for largest single container plus freeboard for precipitation when the stem/federal idea applies — not a universal 1... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D5.01",
    "You are the CSP reviewing a live decision at a hospital utility plant shutdown. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Applicability thresholds.",
    [
      "VERIFY current EPA criteria — do not invent gallons",
      "Always 55 gallons",
      "Always any oil drop",
      "OSHA 1910.147",
    ],
    0,
    "Core Rule: VERIFY. Calculation Steps: Applicability. Standards Cited: 112. Why Each Distractor Fails: VERIFY current EPA criteria — do not invent gallons: Correct: VERIFY | Always 55 gallons: Fails: False | Always any oil drop: Fails: False | OSHA 1910.147: Fails: LOTO",
    "STEM",
    "Exam",
    [
      "Correct: VERIFY",
      "Fails: False",
      "Fails: False",
      "Fails: LOTO",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "P2 prefers source reduction over cleanup. SPCC bulk storage secondary containment teaching: capacity for largest single container plus freeboard for precipitation when the stem/federal idea applies — not a universal 1... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D5.01",
    "Dike displacements (tanks inside dike) when stem includes them?",
    [
      "Ignore always",
      "Subtract per stem method",
      "Add twice",
      "Use 110% only",
    ],
    1,
    "Core Rule: Net free volume. Calculation Steps: Stem method. Standards Cited: Containment. Why Each Distractor Fails: Subtract per stem method: Correct: Net | Ignore always: Fails: Miss | Add twice: Fails: Wrong | Use 110% only: Fails: Myth",
    "FORM",
    "Exam",
    [
      "Fails: Miss",
      "Correct: Net",
      "Fails: Wrong",
      "Fails: Myth",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "P2 prefers source reduction over cleanup. SPCC bulk storage secondary containment teaching: capacity for largest single container plus freeboard for precipitation when the stem/federal idea applies — not a universal 1... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D5.01",
    "You are the CSP reviewing a live decision at a semiconductor tool install. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Best exam whisper.",
    [
      "110% is law always",
      "Freeboard is optional lore",
      "If stem wants federal SPCC idea, do not autopick 110%",
      "SPCC equals TRI Form R",
    ],
    2,
    "Core Rule: Mythbust. Calculation Steps: Exam day. Standards Cited: SPCC. Why Each Distractor Fails: If stem wants federal SPCC idea, do not autopick 110%: Correct: Whisper | 110% is law always: Fails: Myth | Freeboard is optional lore: Fails: False | SPCC equals TRI Form R: Fails: EPCRA mix",
    "STEM",
    "Exam",
    [
      "Fails: Myth",
      "Fails: False",
      "Correct: Whisper",
      "Fails: EPCRA mix",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "P2 prefers source reduction over cleanup. SPCC bulk storage secondary containment teaching: capacity for largest single container plus freeboard for precipitation when the stem/federal idea applies — not a universal 1... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D5.01",
    "Cleanup pads as only answer while elimination of leak source open?",
    [
      "Correct",
      "UNIT",
      "TIME",
      "HIER miss",
    ],
    3,
    "Core Rule: Source first. Calculation Steps: P2. Standards Cited: Hierarchy. Why Each Distractor Fails: HIER miss: Correct: HIER | Correct: Fails: No | UNIT: Fails: No | TIME: Fails: No",
    "HIER",
    "Exam",
    [
      "Fails: No",
      "Fails: No",
      "Fails: No",
      "Correct: HIER",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "P2 prefers source reduction over cleanup. SPCC bulk storage secondary containment teaching: capacity for largest single container plus freeboard for precipitation when the stem/federal idea applies — not a universal 1... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];

