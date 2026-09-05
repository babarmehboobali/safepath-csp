import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D3.02";

export const classFields: ClassFields = {
  hook: "A supervisor wants a JHA “for the whole plant” so they can skip task planning on a filter change beside an open nip. You are the CSP. The question is what a JHA is allowed to decide.",
  hookOilGas: `A supervisor wants a JHA âfor the whole trainâ so they can skip task planning on a filter change beside live well-control energy. You are the CSP. The question is what a JHA is allowed to decide.`,
  hookConstruction: `A superintendent wants a JHA âfor the whole siteâ so they can skip task planning on a leading-edge deck pour. You are the CSP. The question is what a JHA is allowed to decide.`,
  rule: "A JHA/JSA breaks one job into steps, names hazards per step, and selects controls per hierarchy for that job. It is not a PHA, not a permit, not a toolbox slogan, and not permission to skip an still-open design change. If the drawing can still move the valve to grade, the JHA does not freeze the ladder.",
  modelCaption:
    "Three columns: Job step → Hazard (energy) → Control (hierarchy row). A side note: “whole plant” is the wrong scope. Caption: one job, one sequence, controls that actually change the energy at that step.",
  workedCase:
    "Filter change on Mixer 4. Steps: isolate, open housing, swap element, reseal, test. Hazards: stored pressure, nip if jogged, solvent splash, struck-by cover. Controls: LOTO + try-out (isolate energy), interlock already specified — do not “JHA around” a missing guard, face shield only for residual splash after substitution of solvent was rejected in writing. A plant-wide JHA titled “maintenance” that lists “be careful” fails the tool.",
  trapsJson: traps(
    "Writing one JHA for the whole facility.",
    "Using the JHA to authorize PPE while a design relocation is still open.",
    "Treating a signed JHA as a confined-space permit or LOTO.",
  ),
  contrastJson: contrast([
    { looksLike: "JHA / JSA", actually: "Task-level steps × hazards × hierarchy controls" },
    { looksLike: "PHA / HAZOP", actually: "Process unit / deviation analysis — different scope" },
    { looksLike: "Permit (hot work, CSE, LOTO)", actually: "Authorization to start a controlled job — not the analysis" },
    { looksLike: "Toolbox talk", actually: "Communication of the JHA, not a substitute for the breakdown" },
  ]),
  mustScoreJson: mustScore(
    "JHA breaks the job into steps, hazards, and controls before work.",
    "Controls follow hierarchy for each hazard step.",
    "Involve people who do the job; paper JHA by strangers fails.",
    "Update JHA after tools, materials, or conditions change.",
    "Permit work still needs task-level hazard thinking.",
    "Emergency actions belong in the plan when credible.",
    "A signed JHA that ignores a visible hazard is false assurance.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "steps are missing a changing condition", pick: "revise the JHA before starting" },
    { ifStem: "controls are PPE-only while guarding is open", pick: "raise hierarchy in the JHA" },
    { ifStem: "workers who do the job were never consulted", pick: "involve them and correct the analysis" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "a new tool arrived mid-shift", pick: "stop and update the JHA" },
  ),

  brief: `A JHA/JSA breaks one job into steps, names hazards per step, and selects controls per hierarchy for that job. It is not a PHA, not a permit, not a toolbox slogan, and not permission to skip an still-open design change. If the drawing can still move the valve to grade, the JHA does not freeze If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
A JHA/JSA breaks one job into steps, names hazards per step, and selects controls per hierarchy for that job. It is not a PHA, not a permit, not a toolbox slogan, and not permission to skip an still-open design change. If the drawing can still move the valve to grade, the JHA does not freeze the ladder. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
A supervisor wants a JHA âfor the whole plantâ so they can skip task planning on a filter change beside an open nip. You are the CSP. The question is what a JHA is allowed to decide. Oil-and-gas skin: A supervisor wants a JHA âfor the whole trainâ so they can skip task planning on a filter change beside live well-control energy. You are the CSP. Construction skin: A superintendent wants a JHA âfor the whole siteâ so they can skip task planning on a leading-edge deck pour. You are the CSP. Work the case: Filter change on Mixer 4. Steps: isolate, open housing, swap element, reseal, test. Hazards: stored pressure, nip if jogged, solvent splash, struck-by cover. Controls: LOTO + try-out (isolate energy), interlock already specified â do not âJHA aroundâ a missing guard, face shield only for residual splash after substitution of solvent was rejected in writing. A plant-wide JHA titled âmaintenanceâ that lists âbe carefulâ fails the tool. Classic traps: Writing one JHA for the whole facility.; Using the JHA to authorize PPE while a design relocation is still open.; Treating a signed JHA as a confined-space permit or LOTO.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for jha. Verify whether a higher system or design fix is still open. Contrast labels: JHA / JSA is actually Task-level steps × hazards × hierarchy controls; PHA / HAZOP is actually Process unit / deviation analysis — different scope; Permit (hot work, CSE, LOTO) is actually Authorization to start a controlled job — not the analysis; Toolbox talk is actually Communication of the JHA, not a substitute for the breakdown. If the stem shows steps are missing a changing condition, pick revise the JHA before starting. If the stem shows controls are PPE-only while guarding is open, pick raise hierarchy in the JHA. If the stem shows workers who do the job were never consulted, pick involve them and correct the analysis. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows a new tool arrived mid-shift, pick stop and update the JHA. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `JHA — one job or the whole plant? Can it replace a guard sits in CSP-11 Domain 3 Risk Management. The exam tests whether you apply the rule when a package already looks complete. Core rule: A JHA/JSA breaks one job into steps, names hazards per step, and selects controls per hierarchy for that job. It is not a PHA, not a permit, not a toolbox slogan, and not permission to skip an still-open design change. If the drawing can still move the valve to grade, the JHA does not freeze the ladder. Field context: A supervisor wants a JHA âfor the whole plantâ so they can skip task planning on a filter change beside an open nip. You are the CSP. The question is what a JHA is allowed to decide. The oil-and-gas skin shifts the same decision into production pressure: A supervisor wants a JHA âfor the whole trainâ so they can skip task planning on a filter change beside live well-control energy. You are the CSP. The construction skin shifts it into schedule and trade stacking: A superintendent wants a JHA âfor the whole siteâ so they can skip task planning on a leading-edge deck pour. You are the CSP. Model caption for this class: Three columns: Job step â Hazard (energy) â Control (hierarchy row). A side note: âwhole plantâ is the wrong scope. Caption: one job, one sequence, controls that actually change the energy at that step. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) JHA breaks the job into steps, hazards, and controls before work. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Controls follow hierarchy for each hazard step. (3) Involve people who do the job; paper JHA by strangers fails. (4) Update JHA after tools, materials, or conditions change. (5) Permit work still needs task-level hazard thinking. (6) Emergency actions belong in the plan when credible. (7) A signed JHA that ignores a visible hazard is false assurance. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Filter change on Mixer 4. Steps: isolate, open housing, swap element, reseal, test. Hazards: stored pressure, nip if jogged, solvent splash, struck-by cover. Controls: LOTO + try-out (isolate energy), interlock already specified â do not âJHA aroundâ a missing guard, face shield only for residual splash after substitution of solvent was rejected in writing. A plant-wide JHA titled âmaintenanceâ that lists âbe carefulâ fails the tool. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Writing one JHA for the whole facility.; Using the JHA to authorize PPE while a design relocation is still open.; Treating a signed JHA as a confined-space permit or LOTO.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “JHA / JSA” is really Task-level steps × hazards × hierarchy controls; “PHA / HAZOP” is really Process unit / deviation analysis — different scope; “Permit (hot work, CSE, LOTO)” is really Authorization to start a controlled job — not the analysis; “Toolbox talk” is really Communication of the JHA, not a substitute for the breakdown. Stem-if-then map: if steps are missing a changing condition → revise the JHA before starting; if controls are PPE-only while guarding is open → raise hierarchy in the JHA; if workers who do the job were never consulted → involve them and correct the analysis; if two answers work → higher hierarchy / system / design; if a new tool arrived mid-shift → stop and update the JHA. Scoring favors evidence, owners, verification, and hierarchy-smart controls on jha. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "JHA — one job or the whole plant? Can it replace a guard?",
  cardBack:
    "One job, steps × hazards × hierarchy. Not a PHA, not a permit, not PtD. If design is still open, change the design. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence says one job broken into steps with hierarchy controls, and says JHA is not a PHA, permit, or license to skip design.",
};

export const items: ClassItem[] = [
  exam(T, "Best JHA scope for changing a pressurized filter beside an unguarded coupling?", [
    "One JHA titled “the plant.”",
    "This filter-change job, sequenced, with LOTO/energy and a still-open guard/interlock named as the higher control — not a plant-wide slogan.",
    "A HAZOP of the entire solvent unit only.",
    "A hot-work permit instead of analysis.",
  ], 1, "STEM/TOOL: JHA is one job. Plant-wide is the attractive miss.", "STEM", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "A JHA/JSA breaks one job into steps, names hazards per step, and selects controls per hierarchy for that job. It is not a PHA, not a permit, not a toolbox slogan, and not permission to skip an still-open design change... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Valve at 4.2 m. Drawings can still add a platform. Crew offers a JHA plus harness. Best CSP comment?", [
    "Approve the JHA — analysis beats steel.",
    "Relocate or platform on the drawing (PtD/hierarchy). JHA+PPE is residual, not the design answer.",
    "Approve if the JHA is signed in ink.",
    "Approve if RPN of “fall” is below 100.",
  ], 1, "HIER: JHA cannot freeze a still-open design change.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "A JHA/JSA breaks one job into steps, names hazards per step, and selects controls per hierarchy for that job. It is not a PHA, not a permit, not a toolbox slogan, and not permission to skip an still-open design change... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Team uses a filter-change JHA as the PHA for a distillation column because “both are hazard analyses.” Problem?", [
    "None — JHA satisfies PSM PHA.",
    "Wrong tool/scope: PHA/HAZOP is process-unit deviations; JHA is a job sequence.",
    "They should have used TRIR.",
    "They should have used a 16-section SDS as the PHA.",
  ], 1, "TOOL: JHA vs PHA.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "A JHA/JSA breaks one job into steps, names hazards per step, and selects controls per hierarchy for that job. It is not a PHA, not a permit, not a toolbox slogan, and not permission to skip an still-open design change... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A signed JHA is posted at a manhole. No attendant, no permit, no atmospheric test. Supervisor: “JHA covers confined space.” Best response?", [
    "Accept — JHA is a permit equivalent.",
    "Reject: JHA is not a CSE permit. Permit, test, attendant, rescue remain.",
    "Accept if the JHA lists “don’t pass out.”",
    "Accept if insurance was notified.",
  ], 1, "TOOL/STEM: analysis ≠ authorization.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "A JHA/JSA breaks one job into steps, names hazards per step, and selects controls per hierarchy for that job. It is not a PHA, not a permit, not a toolbox slogan, and not permission to skip an still-open design change... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Control column for “open housing” lists only nitrile gloves. A closed quick-change design is still on the table. Error?", [
    "None — gloves are a JHA control.",
    "HIER: specify the closed design; gloves are residual.",
    "UNIT — nitrile is the wrong polymer math.",
    "TIME — gloves expire in 8 hours.",
  ], 1, "Hierarchy inside the JHA control column.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "A JHA/JSA breaks one job into steps, names hazards per step, and selects controls per hierarchy for that job. It is not a PHA, not a permit, not a toolbox slogan, and not permission to skip an still-open design change... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Last sentence: the coupling guard was welded on yesterday; remaining hazard is residual splash after aqueous substitution was rejected. Best remaining JHA control emphasis?", [
    "Re-open substitution in the JHA as if the freeze did not exist.",
    "PPE/face shield and procedure for residual splash — stem closed the higher rows — plus verify the new guard.",
    "Skip the JHA because engineering is done.",
    "Buy an umbrella policy as the control column.",
  ], 1, "STEM: honor the freeze; remaining row is residual admin/PPE plus verify engineering.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "A JHA/JSA breaks one job into steps, names hazards per step, and selects controls per hierarchy for that job. It is not a PHA, not a permit, not a toolbox slogan, and not permission to skip an still-open design change... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Finance skips a $40k interlock because “we have a JHA.” Classification?", [
    "Good ROI — analysis is a control.",
    "FIN/HIER: a worksheet is not risk transfer and not a guard.",
    "Good — JHA is loss prevention.",
    "Good if the deductible is high.",
  ], 1, "FIN: paperwork is not retain/transfer/reduce of energy.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "A JHA/JSA breaks one job into steps, names hazards per step, and selects controls per hierarchy for that job. It is not a PHA, not a permit, not a toolbox slogan, and not permission to skip an still-open design change... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a municipal water-plant retrofit. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: When is FTA preferred over JHA.", [
    "Sequencing a single filter change.",
    "A top event that needs two independent barriers to fail together.",
    "Listing PPE for a grind step.",
    "Writing a toolbox opener.",
  ], 1, "TOOL: combinations → FTA. Job sequence → JHA.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "A JHA/JSA breaks one job into steps, names hazards per step, and selects controls per hierarchy for that job. It is not a PHA, not a permit, not a toolbox slogan, and not permission to skip an still-open design change... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "An amputation occurs on the job the JHA covered. Team delays OSHA to “revise the JHA first.” Clock?", [
    "JHA revision pauses 1904.",
    "Amputation: 24 hours to OSHA. Revising the JHA is not the clock and is not the investigation.",
    "8 hours because JHA was signed.",
    "7 days covers both.",
  ], 1, "TIME: 24-hour amputation notification.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "A JHA/JSA breaks one job into steps, names hazards per step, and selects controls per hierarchy for that job. It is not a PHA, not a permit, not a toolbox slogan, and not permission to skip an still-open design change... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Severity on a JHA is scored 5 on an unlabeled 1–5 scale and then treated as “50% chance of fatality.” Error?", [
    "None — 5 means 50%.",
    "FORM: an ordinal step score is not a probability unless the stem calibrated it.",
    "UNIT — they used meters.",
    "PELTLV — they used a REL.",
  ], 1, "FORM: ordinal ≠ P(event).", "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "A JHA/JSA breaks one job into steps, names hazards per step, and selects controls per hierarchy for that job. It is not a PHA, not a permit, not a toolbox slogan, and not permission to skip an still-open design change... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a refinery coker outage. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Best people to build the step list.", [
    "Only Legal, after an incident.",
    "Workers who do the job, including maintainers and night shift, observed against the real sequence.",
    "Only Finance, for ROI of each step.",
    "Only a vendor brochure order.",
  ], 1, "STEM: real sequence, real users of the design.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "A JHA/JSA breaks one job into steps, names hazards per step, and selects controls per hierarchy for that job. It is not a PHA, not a permit, not a toolbox slogan, and not permission to skip an still-open design change... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Two remaining answers after isolation is specified: add a second person as spotter, or specify an interlocked cover that is still purchasable this quarter. JHA control pick?", [
    "Spotter — admin is a full control.",
    "Interlocked cover — higher hierarchy; spotter is residual if anything remains.",
    "Neither — JHA cannot recommend hardware.",
    "Insurance rider.",
  ], 1, "HIER: JHA recommends the highest feasible control, including design.", "HIER", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "A JHA/JSA breaks one job into steps, names hazards per step, and selects controls per hierarchy for that job. It is not a PHA, not a permit, not a toolbox slogan, and not permission to skip an still-open design change... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
