import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D6.01";

export const classFields: ClassFields = {
  hook: "A vendor hung one badge on a beam for 20 minutes and declared the plant “below the PEL.” Production wants that memo as the exposure file. You are the CSP. The question is whether the sample can answer the OEL you named.",
  hookOilGas: `A contractor hung one badge on a pipe rack for 20 minutes during a sweet-gas leak drill and declared the unit âbelow the PEL.â Production wants that memo as the exposure file. You are the CSP. The question is whether the sample can answer the OEL you named.`,
  hookConstruction: `A sub hung one badge on a scaffold for 20 minutes of grinding and declared the site âbelow the PEL.â The GC wants that memo as the exposure file. You are the CSP. The question is whether the sample can answer the OEL you named.`,
  rule: "A sample is only as good as the question: who, what agent, what averaging time, what volume, what method. Personal breathing-zone ≠ area. TWA media/time ≠ STEL ≠ ceiling ≠ peak. Calibrate, blank, and don’t convert units with the wrong formula. If two answers work, take the design that actually measures the worker.",
  modelCaption: "Three columns: PERSONAL BZ vs AREA vs SOURCE. Beside: TWA 8-h tube | STEL 15-min | CEILING direct-read. Bottom: V = flow × time, blank, cal. Caption: the OEL’s clock picks the method.",
  workedCase: "Isocyanate STEL question. A 6-hour sorbent TWA tube cannot answer a 15-minute STEL. A 20-minute beam badge cannot answer a personal 8-hour TWA. For a TWA: personal BZ, calibrated flow, sufficient volume vs LOD, field blank, full-shift or modeled partial with zeros. Report vs PEL (legal) and note TLV if used as a guideline.",
  brief: `A sample is only as good as the question: who, what agent, what averaging time, what volume, what method. Personal breathing-zone â area. TWA media/time â STEL â ceiling â peak. Calibrate, blank, and donât convert units with the wrong formula. If two answers work, take the design that actually measures the worker. If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
A sample is only as good as the question: who, what agent, what averaging time, what volume, what method. Personal breathing-zone â  area. TWA media/time â  STEL â  ceiling â  peak. Calibrate, blank, and donât convert units with the wrong formula. If two answers work, take the design that actually measures the worker. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
A vendor hung one badge on a beam for 20 minutes and declared the plant âbelow the PEL.â Production wants that memo as the exposure file. You are the CSP. The question is whether the sample can answer the OEL you named. Oil-and-gas skin: A contractor hung one badge on a pipe rack for 20 minutes during a sweet-gas leak drill and declared the unit âbelow the PEL.â Production wants that memo as the exposure file. You are the CSP. Construction skin: A sub hung one badge on a scaffold for 20 minutes of grinding and declared the site âbelow the PEL.â The GC wants that memo as the exposure file. You are the CSP. Work the case: Isocyanate STEL question. A 6-hour sorbent TWA tube cannot answer a 15-minute STEL. A 20-minute beam badge cannot answer a personal 8-hour TWA. For a TWA: personal BZ, calibrated flow, sufficient volume vs LOD, field blank, full-shift or modeled partial with zeros. Report vs PEL (legal) and note TLV if used as a guideline. Classic traps: Using an area or source sample as a personal TWA.; Using a TWA tube to clear a STEL/ceiling.; Volume too small for the LOD, then claiming “non-detect = zero exposure.”. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for sampling. Verify whether a higher system or design fix is still open. Contrast labels: Personal breathing zone is actually On the worker, near the nose/mouth — answers worker dose; Area / source is actually Maps a space or a leak — does not automatically equal dose; TWA sample is actually Matches an 8-hour (or specified) average OEL; STEL / ceiling is actually 15-min or instantaneous design — different media/time; Non-detect is actually Less than LOD for that volume — not proof of zero unless volume was adequate. If the stem shows STEL question but only 8-hour sample discussed, pick match sample duration to the limit type. If the stem shows pump not calibrated, pick calibrate before/after as required. If the stem shows one sample used to clear a whole SEG, pick strengthen strategy before concluding. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows units are mixed ppm and mg/m3, pick convert correctly before compare. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Personal vs area vs STEL vs TWA — what must match sits in CSP-11 Domain 6 Occupational Health and Ergonomics. The exam tests whether you apply the rule when a package already looks complete. Core rule: A sample is only as good as the question: who, what agent, what averaging time, what volume, what method. Personal breathing-zone â  area. TWA media/time â  STEL â  ceiling â  peak. Calibrate, blank, and donât convert units with the wrong formula. If two answers work, take the design that actually measures the worker. Field context: A vendor hung one badge on a beam for 20 minutes and declared the plant âbelow the PEL.â Production wants that memo as the exposure file. You are the CSP. The question is whether the sample can answer the OEL you named. The oil-and-gas skin shifts the same decision into production pressure: A contractor hung one badge on a pipe rack for 20 minutes during a sweet-gas leak drill and declared the unit âbelow the PEL.â Production wants that memo as the exposure file. You are the CSP. The construction skin shifts it into schedule and trade stacking: A sub hung one badge on a scaffold for 20 minutes of grinding and declared the site âbelow the PEL.â The GC wants that memo as the exposure file. You are the CSP. Model caption for this class: Three columns: PERSONAL BZ vs AREA vs SOURCE. Beside: TWA 8-h tube | STEL 15-min | CEILING direct-read. Bottom: V = flow Ã time, blank, cal. Caption: the OELâs clock picks the method. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Sampling strategy matches the question: STEL, TWA, peak, area vs personal. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Calibrate, place correctly, note conditions, and blank as required. (3) SEG logic groups similar exposures. (4) Do not over-conclude from one convenient sample. (5) Laboratory methods and LOQ matter for interpretation. (6) Correct for sampling time vs full shift when required. (7) Calculator: units and time-weighting discipline. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Isocyanate STEL question. A 6-hour sorbent TWA tube cannot answer a 15-minute STEL. A 20-minute beam badge cannot answer a personal 8-hour TWA. For a TWA: personal BZ, calibrated flow, sufficient volume vs LOD, field blank, full-shift or modeled partial with zeros. Report vs PEL (legal) and note TLV if used as a guideline. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Using an area or source sample as a personal TWA.; Using a TWA tube to clear a STEL/ceiling.; Volume too small for the LOD, then claiming “non-detect = zero exposure.”. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Personal breathing zone” is really On the worker, near the nose/mouth — answers worker dose; “Area / source” is really Maps a space or a leak — does not automatically equal dose; “TWA sample” is really Matches an 8-hour (or specified) average OEL; “STEL / ceiling” is really 15-min or instantaneous design — different media/time; “Non-detect” is really Less than LOD for that volume — not proof of zero unless volume was adequate. Stem-if-then map: if STEL question but only 8-hour sample discussed → match sample duration to the limit type; if pump not calibrated → calibrate before/after as required; if one sample used to clear a whole SEG → strengthen strategy before concluding; if two answers work → higher hierarchy / system / design; if units are mixed ppm and mg/m3 → convert correctly before compare. Scoring favors evidence, owners, verification, and hierarchy-smart controls on sampling. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Personal vs area vs STEL vs TWA — what must match?",
  cardBack: "Match the OEL clock and the worker. Personal BZ ≠ area. V = flow × time. Blanks/cal. Non-detect ≠ zero if volume is short. Study only — not allowed in the test center.",
  teachBackKey: "Pass if the sentence says the sample must match the OEL averaging time and the worker’s breathing zone, and that area/short badges do not automatically clear a TWA.",
  trapsJson: traps(
    "Using an area or source sample as a personal TWA.",
    "Using a TWA tube to clear a STEL/ceiling.",
    "Volume too small for the LOD, then claiming “non-detect = zero exposure.”",
  ),
  contrastJson: contrast([
    { looksLike: "Personal breathing zone", actually: "On the worker, near the nose/mouth — answers worker dose" },
    { looksLike: "Area / source", actually: "Maps a space or a leak — does not automatically equal dose" },
    { looksLike: "TWA sample", actually: "Matches an 8-hour (or specified) average OEL" },
    { looksLike: "STEL / ceiling", actually: "15-min or instantaneous design — different media/time" },
    { looksLike: "Non-detect", actually: "Less than LOD for that volume — not proof of zero unless volume was adequate" },
  ]),
  mustScoreJson: mustScore(
    "Sampling strategy matches the question: STEL, TWA, peak, area vs personal.",
    "Calibrate, place correctly, note conditions, and blank as required.",
    "SEG logic groups similar exposures.",
    "Do not over-conclude from one convenient sample.",
    "Laboratory methods and LOQ matter for interpretation.",
    "Correct for sampling time vs full shift when required.",
    "Calculator: units and time-weighting discipline.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "STEL question but only 8-hour sample discussed", pick: "match sample duration to the limit type" },
    { ifStem: "pump not calibrated", pick: "calibrate before/after as required" },
    { ifStem: "one sample used to clear a whole SEG", pick: "strengthen strategy before concluding" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "units are mixed ppm and mg/m3", pick: "convert correctly before compare" },
  ),

  formulaSlug: "twa",
};

export const items: ClassItem[] = [
  exam(
    T,
    "Vendor hung a 20-minute badge on a beam and declared the plant below the 8-hour PEL. Best CSP comment?",
    [
      "Accept — any number beats no number.",
      "Reject: an area, short-duration badge does not answer a personal 8-hour TWA. Design personal BZ full-shift (or justified partial) sampling.",
      "Accept if the badge is yellow.",
      "Accept if the TLV is higher.",
    ],
    1,
    "STEM: wrong location and wrong averaging time.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "A sample is only as good as the question: who, what agent, what averaging time, what volume, what method. Personal breathing-zone ≠ area. TWA media/time ≠ STEL ≠ ceiling ≠ peak. Calibrate, blank, and don’t convert uni... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "The question is a 15-minute isocyanate STEL. Team ran a 6-hour TWA tube. Status?",
    [
      "The TWA tube also clears the STEL.",
      "Wrong design: STEL needs a 15-minute (or specified short-term) sample on the peak task. A long TWA can hide a STEL exceedance.",
      "Ceiling direct-read is forbidden for isocyanates.",
      "Area badge is the STEL method.",
    ],
    1,
    "FORM/STEM: OEL clock picks the sample.",
    "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "A sample is only as good as the question: who, what agent, what averaging time, what volume, what method. Personal breathing-zone ≠ area. TWA media/time ≠ STEL ≠ ceiling ≠ peak. Calibrate, blank, and don’t convert uni... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at a pharma suite changeover. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Pump 2.0 L/min for 4.0 h. Volume.",
    [
      "8 L (they added 2+4+2).",
      "480 L (2.0 × 240 min). Keystrokes: 2 × 4 × 60 = 480.",
      "960 L using a hidden 8-hour assumption.",
      "0.48 m³ treated as 0.48 L (UNIT).",
    ],
    1,
    "FORM: V = flow × time. 4 h = 240 min, not 8 h (STEM).",
    "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "A sample is only as good as the question: who, what agent, what averaging time, what volume, what method. Personal breathing-zone ≠ area. TWA media/time ≠ STEL ≠ ceiling ≠ peak. Calibrate, blank, and don’t convert uni... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Non-detect on a tube whose LOD, at the volume collected, is 2× the PEL. Claim “zero exposure.” Issue?",
    [
      "None — ND is zero.",
      "STEM/FORM: ND means < LOD. If LOD is above the PEL, you did not demonstrate compliance. Increase volume or use a more sensitive method.",
      "None if a field blank was skipped.",
      "None if the sample was area.",
    ],
    1,
    "STEM: inadequate volume cannot clear the PEL.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "A sample is only as good as the question: who, what agent, what averaging time, what volume, what method. Personal breathing-zone ≠ area. TWA media/time ≠ STEL ≠ ceiling ≠ peak. Calibrate, blank, and don’t convert uni... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Personal BZ vs area: grinding task, OEL is worker TWA. Where does the media go?",
    [
      "On the nearest column.",
      "In the worker’s breathing zone for a representative period. Area maps the room; it is not automatically dose.",
      "Inside the tool motor.",
      "In the trailer for “blank climate.”",
    ],
    1,
    "STEM: personal BZ answers worker TWA.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "A sample is only as good as the question: who, what agent, what averaging time, what volume, what method. Personal breathing-zone ≠ area. TWA media/time ≠ STEL ≠ ceiling ≠ peak. Calibrate, blank, and don’t convert uni... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Analyst reports 2.0 mg/m³ but collected 2.0 mg on 0.5 m³ and forgot to divide. True concentration?",
    [
      "2.0 mg/m³ as printed.",
      "4.0 mg/m³ (mass/volume = 2.0/0.5). Keystrokes: 2 ÷ 0.5 = 4.",
      "1.0 mg/m³ (they multiplied).",
      "2.0 ppm because 24.45 cancelled.",
    ],
    1,
    "FORM: C = mass/volume.",
    "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "A sample is only as good as the question: who, what agent, what averaging time, what volume, what method. Personal breathing-zone ≠ area. TWA media/time ≠ STEL ≠ ceiling ≠ peak. Calibrate, blank, and don’t convert uni... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Sample compared only to an ACGIH TLV and used as the OSHA citation file. Error?",
    [
      "None — TLV is OSHA.",
      "PELTLV: well-taken data still must be compared to the legal PEL for citation; TLV is advisory.",
      "UNIT — they used L as m³.",
      "TIME — they used 15 minutes as 8 hours.",
    ],
    1,
    "PELTLV: legal limit vs guideline.",
    "PELTLV",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "A sample is only as good as the question: who, what agent, what averaging time, what volume, what method. Personal breathing-zone ≠ area. TWA media/time ≠ STEL ≠ ceiling ≠ peak. Calibrate, blank, and don’t convert uni... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Flow recorded as 2.0 L/min but the calibrator was in mL/min and the true flow was 2.0 mL/min. Effect?",
    [
      "None — L and mL are exam-identical.",
      "UNIT: 1000-fold volume error, so concentration is 1000× high or low depending on which number is used. Recalculate with consistent units.",
      "FIN — they used ROI.",
      "HIER — they used PPE.",
    ],
    1,
    "UNIT: L vs mL on flow.",
    "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "A sample is only as good as the question: who, what agent, what averaging time, what volume, what method. Personal breathing-zone ≠ area. TWA media/time ≠ STEL ≠ ceiling ≠ peak. Calibrate, blank, and don’t convert uni... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Last sentence: worker doffs the pump at lunch; afternoon unsampled; report claims full-shift TWA. Comment?",
    [
      "Accept — mornings represent afternoons.",
      "STEM: missing period must be handled with a documented rule (zeros, similar task, or resample). You cannot silently claim 8 hours.",
      "Accept if the TLV is a ceiling.",
      "Accept if an area badge ran all day.",
    ],
    1,
    "STEM: last sentence removed the afternoon.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "A sample is only as good as the question: who, what agent, what averaging time, what volume, what method. Personal breathing-zone ≠ area. TWA media/time ≠ STEL ≠ ceiling ≠ peak. Calibrate, blank, and don’t convert uni... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Wrong tool: FTA of the pump brand instead of a sampling strategy. Comment?",
    [
      "Accept — FTA is NIOSH sampling.",
      "TOOL: choose method, media, flow, duration, blanks, and SEGs. A fault tree of the vendor is not a strategy.",
      "Accept if the top event is “PEL.”",
      "Accept if RPN < 100.",
    ],
    1,
    "TOOL: FTA ≠ IH sampling design.",
    "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "A sample is only as good as the question: who, what agent, what averaging time, what volume, what method. Personal breathing-zone ≠ area. TWA media/time ≠ STEL ≠ ceiling ≠ peak. Calibrate, blank, and don’t convert uni... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Insurance quote used instead of any sample to declare “below PEL.” Classify.",
    [
      "Evaluate — premium is IH.",
      "FIN: a policy finances consequence; it does not measure concentration.",
      "Anticipate — brokers smell agents.",
      "Control — umbrellas capture vapor.",
    ],
    1,
    "FIN: insurance ≠ sample.",
    "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "A sample is only as good as the question: who, what agent, what averaging time, what volume, what method. Personal breathing-zone ≠ area. TWA media/time ≠ STEL ≠ ceiling ≠ peak. Calibrate, blank, and don’t convert uni... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Hospitalization after an acute release; team files only the lab chain-of-custody. OSHA clock?",
    [
      "Chain-of-custody is the 8-hour clock.",
      "Hospitalization: 24 hours to OSHA. Lab paperwork is parallel.",
      "7 days because it is sampling.",
      "No clock if the sample was area.",
    ],
    1,
    "TIME: 24-hour hospitalization vs lab forms.",
    "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "A sample is only as good as the question: who, what agent, what averaging time, what volume, what method. Personal breathing-zone ≠ area. TWA media/time ≠ STEL ≠ ceiling ≠ peak. Calibrate, blank, and don’t convert uni... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];

