import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D3.02";

export const classFields: ClassFields = {
  hook: "Operations wants a “quick PHA” so they can skip HAZOP: a supervisor checklist and last year’s mixer FMEA. The unit has two independent SIS loops on a toxic inventory. You are the CSP. The question is which method the process actually owes.",
  hookOilGas: `Operations wants a âquick PHAâ so they can skip HAZOP: a supervisor checklist and last yearâs separator FMEA. The train has two independent SIS loops on H2S inventory. You are the CSP. The question is which method the process actually owes.`,
  hookConstruction: `A plant-mod on a live chemical unit wants a âquick PHAâ so they can skip HAZOP during a shutdown tie-in. Two independent SIS loops protect a toxic inventory. You are the CSP. The question is which method the process actually owes.`,
  rule: "A PHA is a systematic process-unit analysis (HAZOP, what-if, checklist, FMEA, FTA, etc.) matched to complexity. PSM 1910.119 expects an initial PHA and revalidation on time (typically 5 years) by a team that includes operations. A JHA is not a PHA. RPN is not a HAZOP. Combinations of independent barriers need FTA/bowtie, not a single-point worksheet.",
  modelCaption:
    "Unit box in the center. Methods around it: HAZOP (guidewords), What-if, Checklist, FMEA (single-point), FTA (AND/OR combinations). Caption: pick the method that can see the failure logic the unit actually has. Revalidate — do not immortalize a 2014 node list.",
  workedCase:
    "Flammable flavor still. Nodes: feed, still, condenser, receiver, vent. HAZOP on “no flow / more temperature / reverse” finds a missing independent high-temp trip. FMEA of the pump seal is useful but will not show two trips failing together — that cut set is FTA. JHA for “swap packing” is a different job. Revalidation is due at 5 years or after significant MoC, not when TRIR looks good.",
  trapsJson: traps(
    "Calling a JHA or a toolbox talk a PHA.",
    "Using only FMEA RPN on a two-barrier SIS problem.",
    "Skipping revalidation because “nothing exploded.”",
  ),
  contrastJson: contrast([
    { looksLike: "PHA", actually: "Process-unit systematic analysis — method matched to complexity" },
    { looksLike: "JHA", actually: "Job steps, not nodes and deviations" },
    { looksLike: "FMEA", actually: "Single-point modes; optional PHA method, not automatic SIS logic" },
    { looksLike: "FTA / bowtie", actually: "Combinations and barrier demonstration" },
  ]),
  mustScoreJson: mustScore(
    "PHA examines process hazards systematically (what-if, HAZOP, checklist, etc.).",
    "Choose the method that fits complexity and life-cycle stage.",
    "Recommendations need owners and closure tracking.",
    "PHA team competence and diversity matter.",
    "Revalidate on MoC, incidents, and scheduled cycles.",
    "Independent layers and hierarchy should appear in recommendations.",
    "A PHA that cannot change design is late theater.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "design can still change", pick: "run PHA early enough to influence drawings" },
    { ifStem: "recommendations have no owners", pick: "assign owners and due dates" },
    { ifStem: "only checklist is used on a complex reactive process", pick: "select a richer method" },
    { ifStem: "MoC altered chemistry", pick: "revalidate PHA" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
  ),

  brief: `A PHA is a systematic process-unit analysis (HAZOP, what-if, checklist, FMEA, FTA, etc.) matched to complexity. PSM 1910.119 expects an initial PHA and revalidation on time (typically 5 years) by a team that includes operations. A JHA is not a PHA. RPN is not a HAZOP. Combinations of independent barriers need FTA/bowtie, not a single-point If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
A PHA is a systematic process-unit analysis (HAZOP, what-if, checklist, FMEA, FTA, etc.) matched to complexity. PSM 1910.119 expects an initial PHA and revalidation on time (typically 5 years) by a team that includes operations. A JHA is not a PHA. RPN is not a HAZOP. Combinations of independent barriers need FTA/bowtie, not a single-point worksheet. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
Operations wants a âquick PHAâ so they can skip HAZOP: a supervisor checklist and last yearâs mixer FMEA. The unit has two independent SIS loops on a toxic inventory. You are the CSP. The question is which method the process actually owes. Oil-and-gas skin: Operations wants a âquick PHAâ so they can skip HAZOP: a supervisor checklist and last yearâs separator FMEA. The train has two independent SIS loops on H2S inventory. You are the CSP. Construction skin: A plant-mod on a live chemical unit wants a âquick PHAâ so they can skip HAZOP during a shutdown tie-in. Two independent SIS loops protect a toxic inventory. You are the CSP. Work the case: Flammable flavor still. Nodes: feed, still, condenser, receiver, vent. HAZOP on âno flow / more temperature / reverseâ finds a missing independent high-temp trip. FMEA of the pump seal is useful but will not show two trips failing together â that cut set is FTA. JHA for âswap packingâ is a different job. Revalidation is due at 5 years or after significant MoC, not when TRIR looks good. Classic traps: Calling a JHA or a toolbox talk a PHA.; Using only FMEA RPN on a two-barrier SIS problem.; Skipping revalidation because “nothing exploded.”. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for pha. Verify whether a higher system or design fix is still open. Contrast labels: PHA is actually Process-unit systematic analysis — method matched to complexity; JHA is actually Job steps, not nodes and deviations; FMEA is actually Single-point modes; optional PHA method, not automatic SIS logic; FTA / bowtie is actually Combinations and barrier demonstration. If the stem shows design can still change, pick run PHA early enough to influence drawings. If the stem shows recommendations have no owners, pick assign owners and due dates. If the stem shows only checklist is used on a complex reactive process, pick select a richer method. If the stem shows MoC altered chemistry, pick revalidate PHA. If the stem shows two answers work, pick higher hierarchy / system / design. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `PHA — HAZOP or JHA? When is FTA the method sits in CSP-11 Domain 3 Risk Management. The exam tests whether you apply the rule when a package already looks complete. Core rule: A PHA is a systematic process-unit analysis (HAZOP, what-if, checklist, FMEA, FTA, etc.) matched to complexity. PSM 1910.119 expects an initial PHA and revalidation on time (typically 5 years) by a team that includes operations. A JHA is not a PHA. RPN is not a HAZOP. Combinations of independent barriers need FTA/bowtie, not a single-point worksheet. Field context: Operations wants a âquick PHAâ so they can skip HAZOP: a supervisor checklist and last yearâs mixer FMEA. The unit has two independent SIS loops on a toxic inventory. You are the CSP. The question is which method the process actually owes. The oil-and-gas skin shifts the same decision into production pressure: Operations wants a âquick PHAâ so they can skip HAZOP: a supervisor checklist and last yearâs separator FMEA. The train has two independent SIS loops on H2S inventory. You are the CSP. The construction skin shifts it into schedule and trade stacking: A plant-mod on a live chemical unit wants a âquick PHAâ so they can skip HAZOP during a shutdown tie-in. Two independent SIS loops protect a toxic inventory. You are the CSP. Model caption for this class: Unit box in the center. Methods around it: HAZOP (guidewords), What-if, Checklist, FMEA (single-point), FTA (AND/OR combinations). Caption: pick the method that can see the failure logic the unit actually has. Revalidate â do not immortalize a 2014 node list. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) PHA examines process hazards systematically (what-if, HAZOP, checklist, etc.). Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Choose the method that fits complexity and life-cycle stage. (3) Recommendations need owners and closure tracking. (4) PHA team competence and diversity matter. (5) Revalidate on MoC, incidents, and scheduled cycles. (6) Independent layers and hierarchy should appear in recommendations. (7) A PHA that cannot change design is late theater. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Flammable flavor still. Nodes: feed, still, condenser, receiver, vent. HAZOP on âno flow / more temperature / reverseâ finds a missing independent high-temp trip. FMEA of the pump seal is useful but will not show two trips failing together â that cut set is FTA. JHA for âswap packingâ is a different job. Revalidation is due at 5 years or after significant MoC, not when TRIR looks good. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Calling a JHA or a toolbox talk a PHA.; Using only FMEA RPN on a two-barrier SIS problem.; Skipping revalidation because “nothing exploded.”. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “PHA” is really Process-unit systematic analysis — method matched to complexity; “JHA” is really Job steps, not nodes and deviations; “FMEA” is really Single-point modes; optional PHA method, not automatic SIS logic; “FTA / bowtie” is really Combinations and barrier demonstration. Stem-if-then map: if design can still change → run PHA early enough to influence drawings; if recommendations have no owners → assign owners and due dates; if only checklist is used on a complex reactive process → select a richer method; if MoC altered chemistry → revalidate PHA; if two answers work → higher hierarchy / system / design. Scoring favors evidence, owners, verification, and hierarchy-smart controls on pha. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "PHA — HAZOP or JHA? When is FTA the method?",
  cardBack:
    "PHA is unit-level and method-matched. JHA ≠ PHA. Two independent barriers → FTA. Revalidate (often 5 years) and after significant MoC. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence says PHA is process-unit analysis with a matched method, JHA is not a PHA, combinations need FTA, and recommendations still follow hierarchy.",
};

export const items: ClassItem[] = [
  exam(T, "A toxic still is protected by two independent SIS loops. The “PHA” delivered is a pump FMEA with RPNs. Best CSP comment?", [
    "Accept — FMEA is always an acceptable PHA.",
    "Wrong primary method: the top event is an AND of two barriers — use HAZOP plus FTA/bowtie, not RPN alone.",
    "Accept if the highest RPN is below 100.",
    "Replace it with a filter-change JHA.",
  ], 1, "TOOL: combinations are not single-point FMEA.", "TOOL", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "A PHA is a systematic process-unit analysis (HAZOP, what-if, checklist, FMEA, FTA, etc.) matched to complexity. PSM 1910.119 expects an initial PHA and revalidation on time (typically 5 years) by a team that includes... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Supervisor offers a signed JHA for “work in the still house” as the PSM PHA. Problem?", [
    "None — JHA satisfies 1910.119 PHA.",
    "Wrong tool/scope: JHA is a job sequence; PHA is systematic process-unit analysis.",
    "None if the JHA includes a 5×5.",
    "None if TRIR is 0.",
  ], 1, "TOOL: JHA vs PHA.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "A PHA is a systematic process-unit analysis (HAZOP, what-if, checklist, FMEA, FTA, etc.) matched to complexity. PSM 1910.119 expects an initial PHA and revalidation on time (typically 5 years) by a team that includes... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "HAZOP recommendation options still open: reduce inventory (inherently safer) or add a third alarm. Best recommendation?", [
    "Third alarm — detection is a PHA product.",
    "Reduce inventory / inherently safer; alarms are additional layers, not a substitute for less energy.",
    "Insurance credit for the alarm.",
    "A new JHA instead of inventory change.",
  ], 1, "HIER: PHA findings still climb the hierarchy.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "A PHA is a systematic process-unit analysis (HAZOP, what-if, checklist, FMEA, FTA, etc.) matched to complexity. PSM 1910.119 expects an initial PHA and revalidation on time (typically 5 years) by a team that includes... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Initial PHA was 2018. It is 2026. No revalidation. “Nothing happened.” Status?", [
    "Fine — events trigger revalidation only.",
    "Overdue: typical PSM revalidation is at least every 5 years, and sooner after significant MoC — absence of explosions is not a method.",
    "Fine if the insurer concurs.",
    "Fine if FTA was never used.",
  ], 1, "TIME/STEM: 5-year revalidation is a clock, not a vibe.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "A PHA is a systematic process-unit analysis (HAZOP, what-if, checklist, FMEA, FTA, etc.) matched to complexity. PSM 1910.119 expects an initial PHA and revalidation on time (typically 5 years) by a team that includes... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Last sentence: MoC last month doubled toxic inventory. Five-year PHA anniversary is in 3 years. Best action?", [
    "Wait for the anniversary — clocks beat inventory.",
    "Revisit the PHA now; significant inventory MoC is a now-review, not a 3-year wait.",
    "Add PPE only until 2029.",
    "Transfer the extra inventory by contract.",
  ], 1, "STEM: MoC can pull revalidation forward.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "A PHA is a systematic process-unit analysis (HAZOP, what-if, checklist, FMEA, FTA, etc.) matched to complexity. PSM 1910.119 expects an initial PHA and revalidation on time (typically 5 years) by a team that includes... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Finance drops a recommended independent high-high trip because the umbrella premium falls if they install extra cameras. Comment?", [
    "Accept — cheaper detection is LOPA.",
    "FIN/HIER: premium change is transfer/financing; cameras are detection, not an independent SIS replacement.",
    "Accept if ROI of cameras exceeds the trip.",
    "Accept if RPN of “camera” is lower.",
  ], 1, "FIN: insurance credit ≠ layer of protection.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "A PHA is a systematic process-unit analysis (HAZOP, what-if, checklist, FMEA, FTA, etc.) matched to complexity. PSM 1910.119 expects an initial PHA and revalidation on time (typically 5 years) by a team that includes... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Which method matches “what happens if we lose cooling AND the high-temp trip?”", [
    "A single pump FMEA row.",
    "FTA (or equivalent combination logic), informed by HAZOP deviations.",
    "A 5×5 occupational matrix only.",
    "A confined-space permit.",
  ], 1, "TOOL: AND combinations → FTA.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "A PHA is a systematic process-unit analysis (HAZOP, what-if, checklist, FMEA, FTA, etc.) matched to complexity. PSM 1910.119 expects an initial PHA and revalidation on time (typically 5 years) by a team that includes... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "PHA team is one EHS intern with a vendor checklist, no operations. Adequacy?", [
    "Adequate — checklists are always enough.",
    "Inadequate team and possibly inadequate method: need process experience on the team and a method matched to complexity.",
    "Adequate if the intern used RPN.",
    "Adequate if Legal signs.",
  ], 1, "STEM: team composition is part of PHA quality.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "A PHA is a systematic process-unit analysis (HAZOP, what-if, checklist, FMEA, FTA, etc.) matched to complexity. PSM 1910.119 expects an initial PHA and revalidation on time (typically 5 years) by a team that includes... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A PHA node score of 20 on a 5×5 is entered as 20% probability in a quantified LOPA. Error?", [
    "None — 20 means 20%.",
    "FORM: ordinal matrix scores are not calibrated frequencies unless the stem says they are.",
    "UNIT — they used feet.",
    "PELTLV — they used a TLV as a frequency.",
  ], 1, "FORM: score ≠ frequency.", "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "A PHA is a systematic process-unit analysis (HAZOP, what-if, checklist, FMEA, FTA, etc.) matched to complexity. PSM 1910.119 expects an initial PHA and revalidation on time (typically 5 years) by a team that includes... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "During HAZOP fieldwork a worker is hospitalized overnight from a splash. Team finishes the node list before calling OSHA. Clock?", [
    "PHA products pause 1904.",
    "In-patient hospitalization: 24 hours to OSHA. HAZOP minutes are not the clock.",
    "8 hours for all PHA injuries.",
    "7 days only.",
  ], 1, "TIME: 24-hour hospitalization notification.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "A PHA is a systematic process-unit analysis (HAZOP, what-if, checklist, FMEA, FTA, etc.) matched to complexity. PSM 1910.119 expects an initial PHA and revalidation on time (typically 5 years) by a team that includes... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "When is a simple checklist most defensible as the PHA method?", [
    "Two independent SIS loops on a toxic still.",
    "A low-complexity, well-understood packaged unit where the stem says the checklist covers the known deviations — not as a dodge on a major-accident combinational problem.",
    "Any time Finance is in a hurry.",
    "Anytime a JHA already exists.",
  ], 1, "TOOL: method matched to complexity.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "A PHA is a systematic process-unit analysis (HAZOP, what-if, checklist, FMEA, FTA, etc.) matched to complexity. PSM 1910.119 expects an initial PHA and revalidation on time (typically 5 years) by a team that includes... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Two remaining PHA actions: substitute to a non-flammable process fluid (still open) or add foam and PPE. Best finding to issue?", [
    "Foam and PPE — mitigative layers complete a PHA.",
    "Substitution/inherently safer fluid; foam/PPE are residual protection, not the preferred recommendation.",
    "Neither — PHA cannot change materials.",
    "Buy a larger umbrella.",
  ], 1, "HIER inside PHA recommendations.", "HIER", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "A PHA is a systematic process-unit analysis (HAZOP, what-if, checklist, FMEA, FTA, etc.) matched to complexity. PSM 1910.119 expects an initial PHA and revalidation on time (typically 5 years) by a team that includes... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
