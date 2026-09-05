import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D1.03";

export const classFields: ClassFields = {
  hook: "A 10-ft quench tank. Operations wants life rings and a buddy system. The fill valve can still open from the booth. You are the CSP. The question is whether anyone must be able to fall into water that can still rise.",
  hookOilGas: `A 10-ft produced-water pit. Operations wants life rings and a buddy system. The fill valve can still open from the booth. You are the CSP. The question is whether anyone must be able to fall into water that can still rise.`,
  hookConstruction: `A 10-ft site quench tank. Operations wants life rings and a buddy system. The fill valve can still open from the booth. You are the CSP. The question is whether anyone must be able to fall into water that can still rise.`,
  rule: "People out of the water is design. Isolate fill/drain energy (LOTO). Cover, barrier, or grating. Dike and volume for loss of containment. Flotation and buddy systems are last. Engulfment in pits is a confined-space cousin.",
  modelCaption:
    "Quench tank with hinged grating, fill valve locked closed, overflow to a sized dike, life ring only as a last ring on the drawing. Caption: a life ring is PPE-adjacent around an open pit; lock the fill and cover the hole. Dike volume V = L × W × H (subtract tank footprint if the stem requires it).",
  workedCase:
    "10-ft quench. (1) Grating or guard that takes a person and a pallet. (2) LOTO the fill and overflow so the level cannot rise around a body. (3) Then buddy, rings, retrieval. Size the dike for a dump: 40×20×2 ft = 1,600 ft³; subtract footprint if the last sentence says so. Life rings lose if the pit can still be covered.",
  trapsJson: traps(
    "Calling life rings the primary control on an open process pit.",
    "Forgetting to isolate the fill while someone is in or over the tank.",
    "ft vs m, or diameter as radius, on dike/cylinder volume.",
  ),
  contrastJson: contrast([
    { looksLike: "Life rings and a buddy", actually: "Last-resort rescue / admin" },
    { looksLike: "Locked fill plus a load-rated cover", actually: "Isolation + engineering" },
    { looksLike: "Sized dike after a dump", actually: "Passive containment — not drowning control" },
    { looksLike: "“He’s a strong swimmer”", actually: "Not a hierarchy row" },
  ]),
  mustScoreJson: mustScore(
    "People out of the water is the design preference.",
    "Isolate fill/drain energy with LOTO before entry into basins.",
    "Covers, barriers, or grating prevent falls into water.",
    "Drowning risk exists in shallow industrial water under entanglement or incapacitation.",
    "PFDs are PPE after elimination and barriers are closed.",
    "Cold shock and currents change rescue and exposure assumptions.",
    "Deck openings over water need the same prevention logic as floor holes.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "the task can be done from shore or with remote tools", pick: "keep people out of the water" },
    { ifStem: "entry into a basin is required", pick: "isolate flows, barrier/cover, then PFD/rescue as residual" },
    { ifStem: "only life jackets are proposed for an open pit", pick: "engineer covers/barriers first" },
    { ifStem: "fill valves can still open during work", pick: "LOTO the water energy" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
  ),

  brief: `People out of the water is design. Isolate fill/drain energy (LOTO). Cover, barrier, or grating. Dike and volume for loss of containment. Flotation and buddy systems are last. Engulfment in pits is a confined-space cousin. If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
People out of the water is design. Isolate fill/drain energy (LOTO). Cover, barrier, or grating. Dike and volume for loss of containment. Flotation and buddy systems are last. Engulfment in pits is a confined-space cousin. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
A 10-ft quench tank. Operations wants life rings and a buddy system. The fill valve can still open from the booth. You are the CSP. The question is whether anyone must be able to fall into water that can still rise. Oil-and-gas skin: A 10-ft produced-water pit. You are the CSP. Construction skin: A 10-ft site quench tank. You are the CSP. Work the case: 10-ft quench. (1) Grating or guard that takes a person and a pallet. (2) LOTO the fill and overflow so the level cannot rise around a body. (3) Then buddy, rings, retrieval. Size the dike for a dump: 40Ã20Ã2 ft = 1,600 ftÂ³; subtract footprint if the last sentence says so. Life rings lose if the pit can still be covered. Classic traps: Calling life rings the primary control on an open process pit.; Forgetting to isolate the fill while someone is in or over the tank.; ft vs m, or diameter as radius, on dike/cylinder volume.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for water. Verify whether a higher system or design fix is still open. Contrast labels: Life rings and a buddy is actually Last-resort rescue / admin; Locked fill plus a load-rated cover is actually Isolation + engineering; Sized dike after a dump is actually Passive containment — not drowning control; “He’s a strong swimmer” is actually Not a hierarchy row. If the stem shows the task can be done from shore or with remote tools, pick keep people out of the water. If the stem shows entry into a basin is required, pick isolate flows, barrier/cover, then PFD/rescue as residual. If the stem shows only life jackets are proposed for an open pit, pick engineer covers/barriers first. If the stem shows fill valves can still open during work, pick LOTO the water energy. If the stem shows two answers work, pick higher hierarchy / system / design. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Water — must the pit stay open sits in CSP-11 Domain 1 Applied Safety Technology. The exam tests whether you apply the rule when a package already looks complete. Core rule: People out of the water is design. Isolate fill/drain energy (LOTO). Cover, barrier, or grating. Dike and volume for loss of containment. Flotation and buddy systems are last. Engulfment in pits is a confined-space cousin. Field context: A 10-ft quench tank. Operations wants life rings and a buddy system. The fill valve can still open from the booth. You are the CSP. The question is whether anyone must be able to fall into water that can still rise. The oil-and-gas skin shifts the same decision into production pressure: A 10-ft produced-water pit. You are the CSP. The construction skin shifts it into schedule and trade stacking: A 10-ft site quench tank. You are the CSP. Model caption for this class: Quench tank with hinged grating, fill valve locked closed, overflow to a sized dike, life ring only as a last ring on the drawing. Caption: a life ring is PPE-adjacent around an open pit; lock the fill and cover the hole. Dike volume V = L Ã W Ã H (subtract tank footprint if the stem requires it). Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) People out of the water is the design preference. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Isolate fill/drain energy with LOTO before entry into basins. (3) Covers, barriers, or grating prevent falls into water. (4) Drowning risk exists in shallow industrial water under entanglement or incapacitation. (5) PFDs are PPE after elimination and barriers are closed. (6) Cold shock and currents change rescue and exposure assumptions. (7) Deck openings over water need the same prevention logic as floor holes. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: 10-ft quench. (1) Grating or guard that takes a person and a pallet. (2) LOTO the fill and overflow so the level cannot rise around a body. (3) Then buddy, rings, retrieval. Size the dike for a dump: 40Ã20Ã2 ft = 1,600 ftÂ³; subtract footprint if the last sentence says so. Life rings lose if the pit can still be covered. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Calling life rings the primary control on an open process pit.; Forgetting to isolate the fill while someone is in or over the tank.; ft vs m, or diameter as radius, on dike/cylinder volume.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Life rings and a buddy” is really Last-resort rescue / admin; “Locked fill plus a load-rated cover” is really Isolation + engineering; “Sized dike after a dump” is really Passive containment — not drowning control; ““He’s a strong swimmer”” is really Not a hierarchy row. Stem-if-then map: if the task can be done from shore or with remote tools → keep people out of the water; if entry into a basin is required → isolate flows, barrier/cover, then PFD/rescue as residual; if only life jackets are proposed for an open pit → engineer covers/barriers first; if fill valves can still open during work → LOTO the water energy; if two answers work → higher hierarchy / system / design. Scoring favors evidence, owners, verification, and hierarchy-smart controls on water. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Water — must the pit stay open?",
  cardBack:
    "Cover, isolate fill, then flotation. Dike V = L×W×H; cylinder πr²h; watch ft/m and diameter. Attractive wrong answer: life rings while the fill can still open. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence includes cover/isolate so people are not in the water, with flotation last, and mentions checking dike/cylinder units.",
  formulaSlug: "dike-volume",
};

export const items: ClassItem[] = [
  exam(T, "10-ft quench tank is open. Operations wants life rings and a buddy. Fill can still be opened from the booth. Best control?", [
    "Rings and buddy as the primary package.",
    "Load-rated cover/guarding plus LOTO of the fill so the level cannot rise; rings/buddy for residual.",
    "Hire stronger swimmers.",
    "A poster on drowning.",
  ], 1, "Cover and isolate. Rings are last around an open, live fill.", "HIER", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "OSHA walking-working surfaces",
      fieldTakeaway: "People out of the water is design. Isolate fill/drain energy (LOTO). Cover, barrier, or grating. Dike and volume for loss of containment. Flotation and buddy systems are last. Engulfment in pits is a confined-space co... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Dike is 40 ft by 20 ft by 2 ft. Stem requires subtracting an 8 ft by 8 ft tank footprint. Net volume?", [
    "1,600 ft³ (ignored the last sentence).",
    "1,536 ft³ (1,600 − 64×2).",
    "1,600 m³.",
    "64 ft³.",
  ], 1, "STEM + UNIT: 40×20×2 = 1,600; 8×8×2 = 64; net 1,536 ft³. Attractive wrong ignores footprint or mixes meters.", "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "OSHA walking-working surfaces",
      fieldTakeaway: "People out of the water is design. Isolate fill/drain energy (LOTO). Cover, barrier, or grating. Dike and volume for loss of containment. Flotation and buddy systems are last. Engulfment in pits is a confined-space co... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Vertical tank, diameter 8 ft, liquid height 10 ft. Volume? Closest.", [
    "About 2,010 ft³ using r = 8 ft (diameter as radius).",
    "About 503 ft³ using r = 4 ft (V = πr²h ≈ 3.14×16×10).",
    "80 ft³ (8×10).",
    "About 503 m³ reported as ft³.",
  ], 1, "FORM/UNIT: radius is 4, not 8. π×16×10 ≈ 502.4 ft³.", "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "OSHA walking-working surfaces",
      fieldTakeaway: "People out of the water is design. Isolate fill/drain energy (LOTO). Cover, barrier, or grating. Dike and volume for loss of containment. Flotation and buddy systems are last. Engulfment in pits is a confined-space co... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Worker must change a weir plate from the tank rim. Best access design?", [
    "Stand on the rim with a buddy on the floor.",
    "Platform and guardrail, or do the work from a designed dry access with the tank isolated and drained.",
    "Life jacket only.",
    "Faster job so exposure is under 8 minutes.",
  ], 1, "Work at the rim is a fall-into-water problem. Design access. TIME (8 min) is a distractor.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "OSHA walking-working surfaces",
      fieldTakeaway: "People out of the water is design. Isolate fill/drain energy (LOTO). Cover, barrier, or grating. Dike and volume for loss of containment. Flotation and buddy systems are last. Engulfment in pits is a confined-space co... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a refinery coker outage. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Overflow drain: velocity 2 ft/s, area 0.5 ft². Flow Q.", [
    "0.25 ft³/s (used Q = V/A).",
    "1.0 ft³/s (Q = V×A = 2×0.5).",
    "2.5 m³/s mixed units.",
    "4 ft³/s (doubled).",
  ], 1, "Q = VA. FORM is V/A. UNIT is mixing SI.", "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "OSHA walking-working surfaces",
      fieldTakeaway: "People out of the water is design. Isolate fill/drain energy (LOTO). Cover, barrier, or grating. Dike and volume for loss of containment. Flotation and buddy systems are last. Engulfment in pits is a confined-space co... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Sludge pit meets confined-space criteria and can engulf. Crew wants PFDs only. Best program?", [
    "PFDs cancel permit-space rules.",
    "Treat as permit-required engulfment hazard: isolate inlets, retrieval, no lone wading. PFDs do not replace isolation.",
    "Wait 24 hours after rain.",
    "Wait 8 hours after rain.",
  ], 1, "Engulfment + confined space. TIME clocks are not dewatering.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "OSHA walking-working surfaces",
      fieldTakeaway: "People out of the water is design. Isolate fill/drain energy (LOTO). Cover, barrier, or grating. Dike and volume for loss of containment. Flotation and buddy systems are last. Engulfment in pits is a confined-space co... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Last sentence: “Cover cannot be installed because the quench must stay open for product flow.” Best remaining control?", [
    "Life rings only.",
    "Guardrail/barrier at the edge, LOTO/auto-isolation on unexpected entry, and designed retrieval — highest remaining engineering.",
    "Buddy system only.",
    "Insurance.",
  ], 1, "Last sentence closed the cover. Remaining design still beats rings-only.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "OSHA walking-working surfaces",
      fieldTakeaway: "People out of the water is design. Isolate fill/drain energy (LOTO). Cover, barrier, or grating. Dike and volume for loss of containment. Flotation and buddy systems are last. Engulfment in pits is a confined-space co... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a warehouse second-shift startup. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Which analysis belongs before the tank is set.", [
    "First drowning investigation.",
    "Design review of covers, isolation, overflow routing, dike volume, and whether the open surface is required.",
    "FMEA on life-ring color.",
    "Observation of swimming skill.",
  ], 1, "Volume and covers must still be able to change the civil drawing.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "OSHA walking-working surfaces",
      fieldTakeaway: "People out of the water is design. Isolate fill/drain energy (LOTO). Cover, barrier, or grating. Dike and volume for loss of containment. Flotation and buddy systems are last. Engulfment in pits is a confined-space co... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Dike height is specified as 0.6 m on a drawing that otherwise uses 2 ft freeboard. What should the CSP do before signing “adequate”?", [
    "Treat 0.6 as 2 because both are “about two.”",
    "Convert: 0.6 m ≈ 2.0 ft, then still check L×W×H in one unit system.",
    "Use 0.6 ft.",
    "Use 0.6 in.",
  ], 1, "UNIT: convert, then multiply. 0.6 m is about 2 ft, but 0.6 ft would under-size badly.", "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "OSHA walking-working surfaces",
      fieldTakeaway: "People out of the water is design. Isolate fill/drain energy (LOTO). Cover, barrier, or grating. Dike and volume for loss of containment. Flotation and buddy systems are last. Engulfment in pits is a confined-space co... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A pallet jack can roll toward the open quench. Best control?", [
    "Yell “watch the tank.”",
    "Barrier/curb and a cover so the jack cannot go in; keep the travel path away from the rim.",
    "Life rings sized for pallets.",
    "Faster jacking.",
  ], 1, "Struck-by/fall-into is layout. A shout is admin.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "OSHA walking-working surfaces",
      fieldTakeaway: "People out of the water is design. Isolate fill/drain energy (LOTO). Cover, barrier, or grating. Dike and volume for loss of containment. Flotation and buddy systems are last. Engulfment in pits is a confined-space co... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Finance prefers extra insurance instead of a load-rated cover. Best position?", [
    "Insurance is equivalent to a cover.",
    "Reject: insurance finances a drowning; specify the cover and isolation.",
    "Raise the deductible.",
    "Buy nicer rings with the premium delta.",
  ], 1, "FIN vs HIER. Cover is the control.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "OSHA walking-working surfaces",
      fieldTakeaway: "People out of the water is design. Isolate fill/drain energy (LOTO). Cover, barrier, or grating. Dike and volume for loss of containment. Flotation and buddy systems are last. Engulfment in pits is a confined-space co... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Hot (180 °F) quench. Crew wants better goggles and rings. Fill isolation is still open on the P&ID. Best package?", [
    "Goggles and rings only.",
    "Cover/guard, isolate fill, then thermal PPE for residual splash — temperature does not retire drowning/engulfment design.",
    "Goggles only because heat is the real hazard.",
    "Rings only because drowning is the real hazard.",
  ], 1, "Both energies. Design both. PPE is residual.", "HIER", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "OSHA walking-working surfaces",
      fieldTakeaway: "People out of the water is design. Isolate fill/drain energy (LOTO). Cover, barrier, or grating. Dike and volume for loss of containment. Flotation and buddy systems are last. Engulfment in pits is a confined-space co... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
