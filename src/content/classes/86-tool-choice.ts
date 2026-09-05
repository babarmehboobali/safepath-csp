import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D2.06";

export const classFields: ClassFields = {
  hook: "A team has a weekend and five acronyms. They want an FMEA on a single rare pump-seal leak that can cascade to a tank farm, a JHA on a new process unit that does not exist yet, and an FTA on how to fill a permit. You are the CSP. The question is which tool matches the question you are actually asking.",
  hookOilGas: `A team has a weekend and five acronyms. They want an FMEA on a single rare well-control leak that can cascade, a JHA on a process unit that does not exist yet, and an FTA on how to fill a permit. You are the CSP on the pad. The question is which tool matches the question you are actually asking.`,
  hookConstruction: `A team has a weekend and five acronyms. They want an FMEA on a single rare crane-collapse path that can cascade, a JHA on a steel scheme that does not exist yet, and an FTA on how to fill a permit. You are the CSP. The question is which tool matches the question you are actually asking.`,
  rule: "Match the tool to the question. JHA: this job, these steps, this crew — task hazards and controls. PHA (HAZOP/what-if/checklist): this process/unit — deviations, nodes, before it runs. FTA: one TOP unwanted event — how combinations of faults get there (AND/OR, cut sets). FMEA: how each component/function fails, local effects, RPN = S×O×D. Bowtie: one event in the middle — barriers preventing it and barriers mitigating it. A beautiful RPN on the wrong object is still the wrong tool. If two answers work, take higher hierarchy / system / design for the control the right tool recommends.",
  modelCaption:
    "Five boxes. JHA: steps of a job. PHA: nodes of a process. FTA: tree down from one TOP event. FMEA: spreadsheet of components × failure modes (RPN). Bowtie: threats | event | consequences with barriers. Caption: the object of study is the tool. RPN is not a cut set.",
  workedCase:
    "Rare pump-seal leak that can cascade to a tank farm. Question is “how do combinations get to a tank-farm fire?” → FTA (or a bowtie if you need to show prevention vs mitigation barriers on that event). FMEA is the wrong first tool: it will score the seal as a row and miss the AND-gate of leak + ignition + failed isolation. New process unit that does not exist → PHA at design, not a JHA (there is no job yet). How to fill a permit → that is a procedure/job; JHA or a work instruction, not FTA. After the right tool speaks, pick the highest remaining control (hierarchy), not a training row with a pretty RPN.",
  trapsJson: traps(
    "Running FMEA/RPN on a single rare combination event that needs FTA or a bowtie.",
    "Writing a JHA for a unit that does not exist yet (that is a PHA), or a PHA on one mechanic’s next eight steps (that is a JHA).",
    "Using bowtie as a substitute for numbers (RPN or cut sets) when the stem asked for those, or using FTA after the injury when the drawing could still change.",
  ),
  contrastJson: contrast([
    { looksLike: "JHA", actually: "This job’s steps — task-level, existing or imminent work" },
    { looksLike: "PHA (HAZOP / what-if)", actually: "This process/unit — design and deviations before/while it exists" },
    { looksLike: "FTA", actually: "One TOP event — combinations, AND/OR, cut sets" },
    { looksLike: "FMEA", actually: "Each item’s failure modes — local effects, RPN = S×O×D" },
    { looksLike: "Bowtie", actually: "One event, barriers left (prevent) and right (mitigate)" },
  ]),
  mustScoreJson: mustScore(
    "Tool choice: JHA vs PHA vs FTA vs FMEA vs checklist \u2014 match the question.",
    "FTA for how a top event occurs; FMEA for failure modes of components/steps.",
    "Do not run the fashionable tool after decisions are frozen with no change path.",
    "5-why without evidence is not a tool win.",
    "Bowtie and LOPA appear as layer thinking \u2014 independence matters.",
    "Wrong tool is a named error code (TOOL).",
    "Hierarchy outcomes still beat elegant diagrams that change nothing.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "need component failure modes", pick: "FMEA" },
    { ifStem: "need pathways to a defined top event", pick: "FTA" },
    { ifStem: "task-level construction job", pick: "JHA" },
    { ifStem: "tool after freeze with no authority", pick: "reject theater" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
  ),

  brief: `Match the tool to the question. JHA: this job, these steps, this crew â task hazards and controls. PHA (HAZOP/what-if/checklist): this process/unit â deviations, nodes, before it runs. FTA: one TOP unwanted event â how combinations of faults get there (AND/OR, cut sets). FMEA: how each component/function fails, local effects, RPN = SÃOÃD. Bowtie: one If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Match the tool to the question. JHA: this job, these steps, this crew â task hazards and controls. PHA (HAZOP/what-if/checklist): this process/unit â deviations, nodes, before it runs. FTA: one TOP unwanted event â how combinations of faults get there (AND/OR, cut sets). FMEA: how each component/function fails, local effects, RPN = SÃOÃD. Bowtie: one event in the middle â barriers preventing it and barriers mitigating it. A beautiful RPN on the wrong object is still the wrong tool. If two answers work, take higher hierarchy / system / design for the control the right tool recommends. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
A team has a weekend and five acronyms. They want an FMEA on a single rare pump-seal leak that can cascade to a tank farm, a JHA on a new process unit that does not exist yet, and an FTA on how to fill a permit. You are the CSP. The question is which tool matches the question you are actually asking. Oil-and-gas skin: A team has a weekend and five acronyms. They want an FMEA on a single rare well-control leak that can cascade, a JHA on a process unit that does not exist yet, and an FTA on how to fill a permit. You are the CSP on the pad. Construction skin: A team has a weekend and five acronyms. They want an FMEA on a single rare crane-collapse path that can cascade, a JHA on a steel scheme that does not exist yet, and an FTA on how to fill a permit. You are the CSP. Work the case: Rare pump-seal leak that can cascade to a tank farm. Question is âhow do combinations get to a tank-farm fire?â â FTA (or a bowtie if you need to show prevention vs mitigation barriers on that event). FMEA is the wrong first tool: it will score the seal as a row and miss the AND-gate of leak + ignition + failed isolation. New process unit that does not exist â PHA at design, not a JHA (there is no job yet). How to fill a permit â that is a procedure/job; JHA or a work instruction, not FTA. After the right tool speaks, pick the highest remaining control (hierarchy), not a training row with a pretty RPN. Classic traps: Running FMEA/RPN on a single rare combination event that needs FTA or a bowtie.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for tool choice. Verify whether a higher system or design fix is still open. Contrast labels: JHA is actually This job’s steps — task-level, existing or imminent work; PHA (HAZOP / what-if) is actually This process/unit — design and deviations before/while it exists; FTA is actually One TOP event — combinations, AND/OR, cut sets; FMEA is actually Each item’s failure modes — local effects, RPN = S×O×D; Bowtie is actually One event, barriers left (prevent) and right (mitigate). If the stem shows need component failure modes, pick FMEA. If the stem shows need pathways to a defined top event, pick FTA. If the stem shows task-level construction job, pick JHA. If the stem shows tool after freeze with no authority, pick reject theater. If the stem shows two answers work, pick higher hierarchy / system / design. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `FTA vs FMEA vs bowtie vs JHA vs PHA — which object sits in CSP-11 Domain 2 Management Systems. The exam tests whether you apply the rule when a package already looks complete. Core rule: Match the tool to the question. JHA: this job, these steps, this crew â task hazards and controls. PHA (HAZOP/what-if/checklist): this process/unit â deviations, nodes, before it runs. FTA: one TOP unwanted event â how combinations of faults get there (AND/OR, cut sets). FMEA: how each component/function fails, local effects, RPN = SÃOÃD. Bowtie: one event in the middle â barriers preventing it and barriers mitigating it. A beautiful RPN on the wrong object is still the wrong tool. If two answers work, take higher hierarchy / system / design for the control the right tool recommends. Field context: A team has a weekend and five acronyms. They want an FMEA on a single rare pump-seal leak that can cascade to a tank farm, a JHA on a new process unit that does not exist yet, and an FTA on how to fill a permit. You are the CSP. The question is which tool matches the question you are actually asking. The oil-and-gas skin shifts the same decision into production pressure: A team has a weekend and five acronyms. They want an FMEA on a single rare well-control leak that can cascade, a JHA on a process unit that does not exist yet, and an FTA on how to fill a permit. You are the CSP on the pad. The construction skin shifts it into schedule and trade stacking: A team has a weekend and five acronyms. They want an FMEA on a single rare crane-collapse path that can cascade, a JHA on a steel scheme that does not exist yet, and an FTA on how to fill a permit. You are the CSP. Model caption for this class: Five boxes. JHA: steps of a job. PHA: nodes of a process. FTA: tree down from one TOP event. FMEA: spreadsheet of components Ã failure modes (RPN). Bowtie: threats | event | consequences with barriers. Caption: the object of study is the tool. RPN is not a cut set. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Tool choice: JHA vs PHA vs FTA vs FMEA vs checklist — match the question. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) FTA for how a top event occurs; FMEA for failure modes of components/steps. (3) Do not run the fashionable tool after decisions are frozen with no change path. (4) 5-why without evidence is not a tool win. (5) Bowtie and LOPA appear as layer thinking — independence matters. (6) Wrong tool is a named error code (TOOL). (7) Hierarchy outcomes still beat elegant diagrams that change nothing. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Rare pump-seal leak that can cascade to a tank farm. Question is âhow do combinations get to a tank-farm fire?â â FTA (or a bowtie if you need to show prevention vs mitigation barriers on that event). FMEA is the wrong first tool: it will score the seal as a row and miss the AND-gate of leak + ignition + failed isolation. New process unit that does not exist â PHA at design, not a JHA (there is no job yet). How to fill a permit â that is a procedure/job; JHA or a work instruction, not FTA. After the right tool speaks, pick the highest remaining control (hierarchy), not a training row with a pretty RPN. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Running FMEA/RPN on a single rare combination event that needs FTA or a bowtie.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “JHA” is really This job’s steps — task-level, existing or imminent work; “PHA (HAZOP / what-if)” is really This process/unit — design and deviations before/while it exists; “FTA” is really One TOP event — combinations, AND/OR, cut sets; “FMEA” is really Each item’s failure modes — local effects, RPN = S×O×D; “Bowtie” is really One event, barriers left (prevent) and right (mitigate). Stem-if-then map: if need component failure modes → FMEA; if need pathways to a defined top event → FTA; if task-level construction job → JHA; if tool after freeze with no authority → reject theater; if two answers work → higher hierarchy / system / design. Scoring favors evidence, owners, verification, and hierarchy-smart controls on tool choice. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "FTA vs FMEA vs bowtie vs JHA vs PHA — which object?",
  cardBack:
    "JHA = job steps. PHA = process. FTA = one top event / combinations. FMEA = component failures / RPN. Bowtie = prevent vs mitigate barriers. Attractive wrong answer: pretty RPN on the wrong object. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence matches JHA to job steps, PHA to process/unit, FTA to one top event/combinations, FMEA to component failure/RPN, and bowtie to prevent/mitigate barriers around one event.",
};

export const items: ClassItem[] = [
  exam(T, "Question: “How do combinations of failures reach a tank-farm fire?” Best tool?", [
    "FMEA with RPN on tank color.",
    "FTA (top event = tank-farm fire; AND/OR of leak, ignition, failed isolation). A bowtie can display barriers once the event is defined.",
    "JHA on how to hold the fire hose.",
    "Pareto of last year’s paper cuts.",
  ], 1, "One TOP event with combinations is FTA, not RPN.", "TOOL", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Match the tool to the question. JHA: this job, these steps, this crew — task hazards and controls. PHA (HAZOP/what-if/checklist): this process/unit — deviations, nodes, before it runs. FTA: one TOP unwanted event — ho... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A new solvent unit exists only on P&IDs. Best tool before steel is ordered?", [
    "JHA — there is no job, but JHA is always first.",
    "PHA (HAZOP/what-if) on the drawing so nodes and deviations can still change the design.",
    "FTA after the first spill, then a poster.",
    "FMEA on the future operator’s gloves.",
  ], 1, "No process-yet is PHA territory. JHA needs a job.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Match the tool to the question. JHA: this job, these steps, this crew — task hazards and controls. PHA (HAZOP/what-if/checklist): this process/unit — deviations, nodes, before it runs. FTA: one TOP unwanted event — ho... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Tomorrow a mechanic will change a pump seal on an existing, isolated pump. Best tool for that work?", [
    "Unit HAZOP as the job briefing.",
    "JHA / job procedure on the actual steps (energy isolation, stored energy, residual chemicals), plus LOTO. PHA already belongs to the unit, not this seal job.",
    "FTA of global climate.",
    "FMEA RPN on the permit template font.",
  ], 1, "This job, these steps → JHA. HAZOP is the wrong object.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Match the tool to the question. JHA: this job, these steps, this crew — task hazards and controls. PHA (HAZOP/what-if/checklist): this process/unit — deviations, nodes, before it runs. FTA: one TOP unwanted event — ho... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Need to rank how each instrument on a skid fails and the local effect. Best tool?", [
    "FTA with one top event and no component list.",
    "FMEA (function/component × failure mode × S/O/D or the stem’s action priority). RPN is not a cut set.",
    "JHA on walking to the skid.",
    "Bowtie with no named event.",
  ], 1, "Component failure list is FMEA.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Match the tool to the question. JHA: this job, these steps, this crew — task hazards and controls. PHA (HAZOP/what-if/checklist): this process/unit — deviations, nodes, before it runs. FTA: one TOP unwanted event — ho... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Leadership wants a one-page picture of threats that cause a crane collapse and the barriers that reduce consequences after collapse. Best tool?", [
    "FMEA RPN table only.",
    "Bowtie: threats | crane collapse | consequences, prevention barriers left, mitigation barriers right. FTA can feed the left side if combinations matter.",
    "JHA on how to laminate the picture.",
    "PHA on cafeteria menus.",
  ], 1, "Prevent vs mitigate around one event is bowtie.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Match the tool to the question. JHA: this job, these steps, this crew — task hazards and controls. PHA (HAZOP/what-if/checklist): this process/unit — deviations, nodes, before it runs. FTA: one TOP unwanted event — ho... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Team runs an FMEA and uses a low Detection score to claim Severity of a seal fire is now 1. Best flag?", [
    "Correct — D reduces S by definition.",
    "TOOL/FORM: Detection does not rewrite Severity. A detector is not inventory. Cut S with design (less inventory, less energy); D is residual.",
    "Correct if RPN is under 100.",
    "Correct if the JHA agrees.",
  ], 1, "FMEA arithmetic abuse. Detectors are not substitution.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Match the tool to the question. JHA: this job, these steps, this crew — task hazards and controls. PHA (HAZOP/what-if/checklist): this process/unit — deviations, nodes, before it runs. FTA: one TOP unwanted event — ho... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Last sentence: “Show the AND-gate between leak AND ignition AND failed isolation.” Someone delivers an FMEA RPN list. What happened?", [
    "RPN is always the right numeric tool.",
    "TOOL: AND-combinations to a top event are FTA. RPN scores rows independently and will miss the gate.",
    "RPN equals a cut set if S=O=D.",
    "Convert RPN to 24.45.",
  ], 1, "STEM named AND-gate. That is FTA language.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Match the tool to the question. JHA: this job, these steps, this crew — task hazards and controls. PHA (HAZOP/what-if/checklist): this process/unit — deviations, nodes, before it runs. FTA: one TOP unwanted event — ho... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Right tool (PHA) says an interlocked enclosure is still purchasable; the team prefers a training barrier on the bowtie. Best control pick?", [
    "Training — bowtie barriers are all equal.",
    "Specify the enclosure (higher hierarchy). The right tool still recommends design when it is open; a training barrier is residual.",
    "Insurance as a right-side barrier (FIN) instead.",
    "Wait 8 hours to choose (TIME).",
  ], 1, "After TOOL is right, HIER still decides the control.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Match the tool to the question. JHA: this job, these steps, this crew — task hazards and controls. PHA (HAZOP/what-if/checklist): this process/unit — deviations, nodes, before it runs. FTA: one TOP unwanted event — ho... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "FTA is proposed after the first lost-time on a machine whose guard option is still on the vendor sheet. Best comment?", [
    "Wait for more injuries so the tree has data.",
    "Do the analysis now in a form that can still change the purchase (task RA / FMEA / what-if). Post-injury FTA alone is late if steel can still move.",
    "Skip analysis; buy insurance.",
    "JHA on the investigation meeting.",
  ], 1, "Timing is part of tool choice. Change the drawing.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Match the tool to the question. JHA: this job, these steps, this crew — task hazards and controls. PHA (HAZOP/what-if/checklist): this process/unit — deviations, nodes, before it runs. FTA: one TOP unwanted event — ho... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Two FTA leaves share a common-cause power loss but are drawn as independent AND protections. Best flag?", [
    "Fine — two boxes are two protections.",
    "Independence failure: common cause makes the AND gate dishonest. Redesign so protections do not share the same power, or redraw the gate.",
    "Fine if RPN is low.",
    "Fine if a JHA mentions power.",
  ], 1, "Wrong logic inside the right tool is still a miss — independence is the FTA rule.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Match the tool to the question. JHA: this job, these steps, this crew — task hazards and controls. PHA (HAZOP/what-if/checklist): this process/unit — deviations, nodes, before it runs. FTA: one TOP unwanted event — ho... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Finance asks which tool proves extra insurance is equivalent to a guard. Best CSP answer?", [
    "FMEA — raise D until RPN matches a guard.",
    "None of these tools make insurance a safeguard. Insurance is FIN (risk financing). Specify the guard; do not launder FIN through RPN or a bowtie right-side sticker.",
    "FTA — insurance is an AND gate.",
    "JHA — insurance is a step.",
  ], 1, "FIN is not a hazard-analysis output. Do not TOOL-wash financing.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Match the tool to the question. JHA: this job, these steps, this crew — task hazards and controls. PHA (HAZOP/what-if/checklist): this process/unit — deviations, nodes, before it runs. FTA: one TOP unwanted event — ho... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Least consistent with tool choice.", [
    "PHA on a P&ID before HAZOP close-out.",
    "JHA on tomorrow’s confined-space entry.",
    "An FMEA scored on vest color after three combination-cause tank fires, with no FTA/bowtie and the isolation valve unchanged.",
    "Bowtie of a named well-control event with independent barriers.",
  ], 2, "Pretty RPN on the wrong object, after the wrong event type, with no design change.", "TOOL", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Match the tool to the question. JHA: this job, these steps, this crew — task hazards and controls. PHA (HAZOP/what-if/checklist): this process/unit — deviations, nodes, before it runs. FTA: one TOP unwanted event — ho... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
