import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D6.01";

export const classFields: ClassFields = {
  hook: "A tech wants to “get it done” standing at 2 ft from a 8 mR/h source because a paper gown is in the SDS. Distance can still change. You are the CSP. The question is time, distance, shielding — not a gown as a half-life.",
  hookOilGas: `A tech wants to âget it doneâ standing at 2 ft from a radiography camera on a pipeline weld because a paper gown is in the SDS. Distance can still change. You are the CSP. The question is time, distance, shielding â not a gown as a half-life.`,
  hookConstruction: `A tech wants to âget it doneâ standing at 2 ft from a density gauge on a compaction lift because a paper gown is in the SDS. Distance can still change. You are the CSP. The question is time, distance, shielding â not a gown as a half-life.`,
  rule: "Ionizing: minimize TIME, maximize DISTANCE (inverse square I1 d1² = I2 d2²), add SHIELDING (half-value layer). Stay time = dose limit / dose rate. Non-ionizing (laser, RF, UV, microwave) is a different set of controls — don’t apply inverse square as if every lamp were a point gamma source. Hierarchy: remove/lock the source, then geometry/shield, then admin time, then PPE. If two answers work, take higher hierarchy / system / design.",
  modelCaption: "Three levers: TIME (stay = limit/rate) | DISTANCE (double d → ¼ intensity) | SHIELD (HVL layers). A gown tagged “not HVL.” Caption: inverse square is geometry, not PPE.",
  workedCase: "8 mR/h at 2 ft. At 4 ft: 8 × (2/4)² = 2 mR/h. Limit 100 mrem (≈100 mR tissue-equivalent for this exam style): stay at 2 ft = 100/8 = 12.5 h; at 4 ft = 50 h. Doubling distance beats a paper gown. Half-life of a nuclide is not stay time. Don’t use 24.45 on mR/h (UNIT).",
  brief: `Ionizing: minimize TIME, maximize DISTANCE (inverse square I1 d1Â² = I2 d2Â²), add SHIELDING (half-value layer). Stay time = dose limit / dose rate. Non-ionizing (laser, RF, UV, microwave) is a different set of controls â donât apply inverse square as if every lamp were a point gamma source. Hierarchy: remove/lock the source, then geometry/shield, If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Ionizing: minimize TIME, maximize DISTANCE (inverse square I1 d1Â² = I2 d2Â²), add SHIELDING (half-value layer). Stay time = dose limit / dose rate. Non-ionizing (laser, RF, UV, microwave) is a different set of controls â donât apply inverse square as if every lamp were a point gamma source. Hierarchy: remove/lock the source, then geometry/shield, then admin time, then PPE. If two answers work, take higher hierarchy / system / design. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. Field move
A tech wants to âget it doneâ standing at 2 ft from a 8 mR/h source because a paper gown is in the SDS. Distance can still change. You are the CSP. The question is time, distance, shielding â not a gown as a half-life. Oil-and-gas skin: A tech wants to âget it doneâ standing at 2 ft from a radiography camera on a pipeline weld because a paper gown is in the SDS. You are the CSP. Construction skin: A tech wants to âget it doneâ standing at 2 ft from a density gauge on a compaction lift because a paper gown is in the SDS. You are the CSP. Work the case: 8 mR/h at 2 ft. At 4 ft: 8 Ã (2/4)Â² = 2 mR/h. Limit 100 mrem (â100 mR tissue-equivalent for this exam style): stay at 2 ft = 100/8 = 12.5 h; at 4 ft = 50 h. Doubling distance beats a paper gown. Half-life of a nuclide is not stay time. Donât use 24.45 on mR/h (UNIT). Classic traps: Treating a lab coat as shielding / HVL.; Forgetting inverse square (using linear half-distance).; Mixing non-ionizing laser OD with gamma inverse square.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for radiation. Verify whether a higher system or design fix is still open. Contrast labels: Time is actually Stay time = dose limit / dose rate — admin after geometry; Distance is actually Inverse square for a point source: 2× distance → ¼ intensity; Shielding is actually HVL / TVL of a specified material — not a paper gown; Half-life is actually Nuclide decay — not the worker’s stay time; Non-ionizing is actually Laser/RF/UV controls — different physics than I∝1/d² gamma. If the stem shows only PPE is offered while remote handling is open, pick increase distance/engineering first. If the stem shows wrong instrument for the radiation type, pick select appropriate survey/dosimetry. If the stem shows ALARA is ignored for convenience, pick reduce time/increase shielding/distance. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows laser class requires engineered interlocks, pick implement engineered controls. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Double the distance — what happens to intensity? Stay time formula sits in CSP-11 Domain 6 Occupational Health and Ergonomics. The exam tests whether you apply the rule when a package already looks complete. Core rule: Ionizing: minimize TIME, maximize DISTANCE (inverse square I1 d1Â² = I2 d2Â²), add SHIELDING (half-value layer). Stay time = dose limit / dose rate. Non-ionizing (laser, RF, UV, microwave) is a different set of controls â donât apply inverse square as if every lamp were a point gamma source. Hierarchy: remove/lock the source, then geometry/shield, then admin time, then PPE. If two answers work, take higher hierarchy / system / design. Field context: A tech wants to âget it doneâ standing at 2 ft from a 8 mR/h source because a paper gown is in the SDS. Distance can still change. You are the CSP. The question is time, distance, shielding â not a gown as a half-life. The oil-and-gas skin shifts the same decision into production pressure: A tech wants to âget it doneâ standing at 2 ft from a radiography camera on a pipeline weld because a paper gown is in the SDS. You are the CSP. The construction skin shifts it into schedule and trade stacking: A tech wants to âget it doneâ standing at 2 ft from a density gauge on a compaction lift because a paper gown is in the SDS. You are the CSP. Model caption for this class: Three levers: TIME (stay = limit/rate) | DISTANCE (double d â Â¼ intensity) | SHIELD (HVL layers). A gown tagged ânot HVL.â Caption: inverse square is geometry, not PPE. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Time, distance, shielding for ionizing; control non-ionizing by design and limits. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Justify exposures ALARA — not casual. (3) Survey meters and dosimetry match the radiation type. (4) Licensed activities follow program controls and posting. (5) Non-ionizing: lasers, RF, UV need class-specific controls. (6) Hierarchy: eliminate sources/remote operations before PPE-only. (7) Emergency procedures for sealed source damage matter. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: 8 mR/h at 2 ft. At 4 ft: 8 Ã (2/4)Â² = 2 mR/h. Limit 100 mrem (â100 mR tissue-equivalent for this exam style): stay at 2 ft = 100/8 = 12.5 h; at 4 ft = 50 h. Doubling distance beats a paper gown. Half-life of a nuclide is not stay time. Donât use 24.45 on mR/h (UNIT). Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Treating a lab coat as shielding / HVL.; Forgetting inverse square (using linear half-distance).; Mixing non-ionizing laser OD with gamma inverse square.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Time” is really Stay time = dose limit / dose rate — admin after geometry; “Distance” is really Inverse square for a point source: 2× distance → ¼ intensity; “Shielding” is really HVL / TVL of a specified material — not a paper gown; “Half-life” is really Nuclide decay — not the worker’s stay time; “Non-ionizing” is really Laser/RF/UV controls — different physics than I∝1/d² gamma. Stem-if-then map: if only PPE is offered while remote handling is open → increase distance/engineering first; if wrong instrument for the radiation type → select appropriate survey/dosimetry; if ALARA is ignored for convenience → reduce time/increase shielding/distance; if two answers work → higher hierarchy / system / design; if laser class requires engineered interlocks → implement engineered controls. Scoring favors evidence, owners, verification, and hierarchy-smart controls on radiation. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Double the distance — what happens to intensity? Stay time formula?",
  cardBack: "Inverse square: 2× distance → ¼ rate. Stay = limit/rate. Shield = HVL, not a gown. Half-life ≠ stay. Study only — not allowed in the test center.",
  teachBackKey: "Pass if the sentence states time-distance-shielding, inverse square (double distance, quarter intensity), and stay time = limit/rate.",
  trapsJson: traps(
    "Treating a lab coat as shielding / HVL.",
    "Forgetting inverse square (using linear half-distance).",
    "Mixing non-ionizing laser OD with gamma inverse square.",
  ),
  contrastJson: contrast([
    { looksLike: "Time", actually: "Stay time = dose limit / dose rate — admin after geometry" },
    { looksLike: "Distance", actually: "Inverse square for a point source: 2× distance → ¼ intensity" },
    { looksLike: "Shielding", actually: "HVL / TVL of a specified material — not a paper gown" },
    { looksLike: "Half-life", actually: "Nuclide decay — not the worker’s stay time" },
    { looksLike: "Non-ionizing", actually: "Laser/RF/UV controls — different physics than I∝1/d² gamma" },
  ]),
  mustScoreJson: mustScore(
    "Time, distance, shielding for ionizing; control non-ionizing by design and limits.",
    "Justify exposures ALARA \u2014 not casual.",
    "Survey meters and dosimetry match the radiation type.",
    "Licensed activities follow program controls and posting.",
    "Non-ionizing: lasers, RF, UV need class-specific controls.",
    "Hierarchy: eliminate sources/remote operations before PPE-only.",
    "Emergency procedures for sealed source damage matter.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "only PPE is offered while remote handling is open", pick: "increase distance/engineering first" },
    { ifStem: "wrong instrument for the radiation type", pick: "select appropriate survey/dosimetry" },
    { ifStem: "ALARA is ignored for convenience", pick: "reduce time/increase shielding/distance" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "laser class requires engineered interlocks", pick: "implement engineered controls" },
  ),

  formulaSlug: null,
};

export const items: ClassItem[] = [
  exam(
    T,
    "You are the CSP reviewing a live decision at a warehouse second-shift startup. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: 8 mR/h at 2 ft. Intensity at 4 ft (point source).",
    [
      "4 mR/h (linear half).",
      "2 mR/h. I2 = 8 × (2/4)² = 8 × 0.25. Keystrokes: 2 ÷ 4 = 0.5; x² = 0.25; × 8 = 2.",
      "8 mR/h (distance doesn’t matter).",
      "0.5 mR/h using (4/2)² in the wrong slot.",
    ],
    1,
    "FORM: inverse square, not linear.",
    "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Ionizing: minimize TIME, maximize DISTANCE (inverse square I1 d1² = I2 d2²), add SHIELDING (half-value layer). Stay time = dose limit / dose rate. Non-ionizing (laser, RF, UV, microwave) is a different set of controls... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at a grain elevator maintenance day. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Dose limit 100 mrem, rate 20 mR/h. Stay time.",
    [
      "2000 hours (they multiplied).",
      "5 hours. Stay = 100 / 20. Keystrokes: 100 ÷ 20 = 5. Do not report 300 minutes as “5 mR” (UNIT).",
      "100 hours.",
      "20 minutes treating mR/h as mR/min.",
    ],
    1,
    "FORM: stay = limit/rate. UNIT if min/h mixed.",
    "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Ionizing: minimize TIME, maximize DISTANCE (inverse square I1 d1² = I2 d2²), add SHIELDING (half-value layer). Stay time = dose limit / dose rate. Non-ionizing (laser, RF, UV, microwave) is a different set of controls... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Paper gown offered as the HVL for a gamma camera. Best comment?",
    [
      "Approve — SDS Section 8 is shielding.",
      "Reject: shielding is specified material/HVL. A gown is not a tenth-value layer. Increase distance, add real shield, or shutter the source.",
      "Approve if the gown is lead-colored.",
      "Approve if stay time is infinite.",
    ],
    1,
    "HIER: geometry/shield vs PPE theater.",
    "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Ionizing: minimize TIME, maximize DISTANCE (inverse square I1 d1² = I2 d2²), add SHIELDING (half-value layer). Stay time = dose limit / dose rate. Non-ionizing (laser, RF, UV, microwave) is a different set of controls... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at a food packaging SKU change. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: 100 mCi, half-life 6 h. Activity after 12 h.",
    [
      "50 mCi (one half-life used twice as one).",
      "25 mCi. Two half-lives: 100 × 0.5². Keystrokes: 12 ÷ 6 = 2; 0.5 y^x 2 = 0.25; × 100 = 25.",
      "6 mCi using T½ as activity.",
      "12 mCi using clock hours as mCi.",
    ],
    1,
    "FORM: A = A0 × (1/2)^(t/T½). Two half-lives → quarter.",
    "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Ionizing: minimize TIME, maximize DISTANCE (inverse square I1 d1² = I2 d2²), add SHIELDING (half-value layer). Stay time = dose limit / dose rate. Non-ionizing (laser, RF, UV, microwave) is a different set of controls... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Last sentence: a 4 ft handle is available; tech is at 2 ft in a gown. Best control still open?",
    [
      "Thicker gown.",
      "Use the handle / double distance (≈¼ rate) or shutter. Distance is still open in the stem.",
      "Ignore inverse square because OSHA PEL is 90 dBA.",
      "Buy insurance.",
    ],
    1,
    "STEM + HIER: last sentence left distance open.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Ionizing: minimize TIME, maximize DISTANCE (inverse square I1 d1² = I2 d2²), add SHIELDING (half-value layer). Stay time = dose limit / dose rate. Non-ionizing (laser, RF, UV, microwave) is a different set of controls... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Laser Class 4 interlock vs applying gamma inverse square to a diffuse UV bar. Issue?",
    [
      "None — all photons use I∝1/d² as the only control.",
      "TOOL/STEM: non-ionizing laser/UV controls (class, OD, interlock, no specular) are not a point-isotope inverse-square problem.",
      "None if a gown is worn.",
      "None if stay time is 8 hours.",
    ],
    1,
    "TOOL: ionizing geometry ≠ laser OD.",
    "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Ionizing: minimize TIME, maximize DISTANCE (inverse square I1 d1² = I2 d2²), add SHIELDING (half-value layer). Stay time = dose limit / dose rate. Non-ionizing (laser, RF, UV, microwave) is a different set of controls... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at a municipal water-plant retrofit. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Analyst converts 8 mR/h to ppm with 24.45. Error.",
    [
      "None — 24.45 is universal.",
      "UNIT: dose rate is not a molar gas concentration. 24.45 belongs to ppm↔mg/m³.",
      "TIME — 24.45 hours stay.",
      "FIN — 24.45% ROI.",
    ],
    1,
    "UNIT: radiation ≠ ppm.",
    "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Ionizing: minimize TIME, maximize DISTANCE (inverse square I1 d1² = I2 d2²), add SHIELDING (half-value layer). Stay time = dose limit / dose rate. Non-ionizing (laser, RF, UV, microwave) is a different set of controls... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Public advisory dose used as the occupational legal limit in a citation file. Error?",
    [
      "None — public is stricter so it is OSHA.",
      "PELTLV: use the occupational limit the stem/regulator named; public/advisory numbers are not automatically the worker legal limit.",
      "FORM — inverse square on the file cabinet.",
      "TIME — 24-hour public dose.",
    ],
    1,
    "PELTLV: legal occupational vs advisory/public.",
    "PELTLV",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Ionizing: minimize TIME, maximize DISTANCE (inverse square I1 d1² = I2 d2²), add SHIELDING (half-value layer). Stay time = dose limit / dose rate. Non-ionizing (laser, RF, UV, microwave) is a different set of controls... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Two funded moves: extra umbrella AND extra gowns; a lockable shutter is still open. Pair and miss?",
    [
      "Avoid + reduce; gowns are HVL.",
      "Transfer + PPE; missing Reduce (shutter, distance, real shield).",
      "Two half-lives.",
      "Stay time + half-life complete Control.",
    ],
    1,
    "FIN: insurance plus gowns skip source control.",
    "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Ionizing: minimize TIME, maximize DISTANCE (inverse square I1 d1² = I2 d2²), add SHIELDING (half-value layer). Stay time = dose limit / dose rate. Non-ionizing (laser, RF, UV, microwave) is a different set of controls... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Wrong tool: noise 5 dB exchange applied to mR/h because “both are TWA.” Comment?",
    [
      "Accept — 5 dB is ALARA.",
      "TOOL: noise exchange rates are not radiation stay-time math. Use limit/rate and inverse square.",
      "Accept if 90 mR/h = PEL.",
      "Accept if NIOSH 3 dB is used.",
    ],
    1,
    "TOOL: noise formulas ≠ radiation.",
    "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Ionizing: minimize TIME, maximize DISTANCE (inverse square I1 d1² = I2 d2²), add SHIELDING (half-value layer). Stay time = dose limit / dose rate. Non-ionizing (laser, RF, UV, microwave) is a different set of controls... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Hospitalization from a source-handling injury; team files only a dosimeter printout. OSHA clock?",
    [
      "Dosimetry is the 8-hour clock.",
      "Hospitalization: 24 hours to OSHA. Badge reports are parallel (NRC may add another clock).",
      "7 days.",
      "No clock if inverse square was posted.",
    ],
    1,
    "TIME: 24-hour hospitalization.",
    "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Ionizing: minimize TIME, maximize DISTANCE (inverse square I1 d1² = I2 d2²), add SHIELDING (half-value layer). Stay time = dose limit / dose rate. Non-ionizing (laser, RF, UV, microwave) is a different set of controls... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at a pharma suite changeover. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Rate 8 mR/h at 2 ft. At 6 ft.",
    [
      "2.67 mR/h (linear 8×2/6).",
      "0.89 mR/h. 8 × (2/6)² = 8 × 4/36 = 32/36. Keystrokes: 2 ÷ 6 = 0.333; x² = 0.111; × 8 ≈ 0.889 → closest 0.89.",
      "8 mR/h.",
      "4 mR/h.",
    ],
    1,
    "FORM: inverse square; pick closest rounded.",
    "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Ionizing: minimize TIME, maximize DISTANCE (inverse square I1 d1² = I2 d2²), add SHIELDING (half-value layer). Stay time = dose limit / dose rate. Non-ionizing (laser, RF, UV, microwave) is a different set of controls... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];

