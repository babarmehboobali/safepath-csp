import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D2.09";

export const classFields: ClassFields = {
  hook: "Legal wants a 40-page “policy” that contains every SOP, every form, and a promise to “comply with all laws.” Supervisors cannot find the energy-control rule. You are the CSP. The question is what belongs in a policy versus a plan versus a procedure.",
  hookOilGas: `Corporate legal wants a 40-page âpolicyâ that swallows every offshore SOP. The OIM cannot find the isolation rule. You are the CSP. The question is what belongs in a policy versus a plan versus a procedure.`,
  hookConstruction: `The GCâs legal team wants a 40-page âpolicyâ that swallows every site SOP. Foremen cannot find the fall-protection rule. You are the CSP. The question is what belongs in a policy versus a plan versus a procedure.`,
  rule: "Policy = intent, scope, and non-negotiables signed by the accountable leader. Plan = who, when, resources, measures for a period or project. Procedure = how a task is done. Mixing them into one novel hides the control. Hierarchy still governs what the documents require.",
  modelCaption:
    "Three stacked documents: thin Policy (commitment, scope, hierarchy default), Plan (objectives, owners, budget, dates), Procedure (steps, isolation points, PPE last). Arrows down = increasing detail. Caption: if the policy is thicker than the procedure, you inverted the stack.",
  workedCase:
    "Policy: we apply the hierarchy; line leaders are accountable; workers may stop work. Annual plan: mixer interlock funded Q2, owner Engineering, measure function-test pass. Procedure: LOTO steps for that mixer. A 40-page policy that restates 1910.147 verbatim is not a plan and not a usable procedure.",
  trapsJson: traps(
    "A policy that is actually a procedure manual.",
    "A plan with no owner, date, or resource.",
    "“Comply with all applicable laws” as the only sentence.",
  ),
  contrastJson: contrast([
    { looksLike: "Policy", actually: "Intent and accountabilities — stable, short" },
    { looksLike: "Plan", actually: "Time-bound conversion of standards/objectives into work" },
    { looksLike: "Procedure / SOP", actually: "Task steps, energy points, criteria" },
    { looksLike: "Record", actually: "Evidence the procedure ran — not a policy" },
  ]),
  mustScoreJson: mustScore(
    "Policies set direction; plans assign owners, resources, and measures.",
    "A signed policy without an operational plan is incomplete.",
    "Plans must reference hierarchy-smart controls for significant risks.",
    "Keep plans current through MoC and audit findings.",
    "Communicate plans to people who must act \u2014 not only to the binder.",
    "Conflict between plans needs an explicit governing document.",
    "Effectiveness review closes the loop.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "only a policy poster exists", pick: "build an owned operational plan" },
    { ifStem: "two plans conflict", pick: "name the governing plan and resolve" },
    { ifStem: "MoC changed the process", pick: "update the plan before normalizing" },
    { ifStem: "no owner is named", pick: "assign accountability before launch" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
  ),

  brief: `Policy = intent, scope, and non-negotiables signed by the accountable leader. Plan = who, when, resources, measures for a period or project. Procedure = how a task is done. Mixing them into one novel hides the control. Hierarchy still governs what the documents require. If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Policy = intent, scope, and non-negotiables signed by the accountable leader. Plan = who, when, resources, measures for a period or project. Procedure = how a task is done. Mixing them into one novel hides the control. Hierarchy still governs what the documents require. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
Legal wants a 40-page âpolicyâ that contains every SOP, every form, and a promise to âcomply with all laws.â Supervisors cannot find the energy-control rule. You are the CSP. The question is what belongs in a policy versus a plan versus a procedure. Oil-and-gas skin: Corporate legal wants a 40-page âpolicyâ that swallows every offshore SOP. The OIM cannot find the isolation rule. You are the CSP. Construction skin: The GCâs legal team wants a 40-page âpolicyâ that swallows every site SOP. Foremen cannot find the fall-protection rule. You are the CSP. Work the case: Policy: we apply the hierarchy; line leaders are accountable; workers may stop work. Annual plan: mixer interlock funded Q2, owner Engineering, measure function-test pass. Procedure: LOTO steps for that mixer. A 40-page policy that restates 1910.147 verbatim is not a plan and not a usable procedure. Classic traps: A policy that is actually a procedure manual.; A plan with no owner, date, or resource.; “Comply with all applicable laws” as the only sentence.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for plans policies. Verify whether a higher system or design fix is still open. Contrast labels: Policy is actually Intent and accountabilities — stable, short; Plan is actually Time-bound conversion of standards/objectives into work; Procedure / SOP is actually Task steps, energy points, criteria; Record is actually Evidence the procedure ran — not a policy. If the stem shows only a policy poster exists, pick build an owned operational plan. If the stem shows two plans conflict, pick name the governing plan and resolve. If the stem shows MoC changed the process, pick update the plan before normalizing. If the stem shows no owner is named, pick assign accountability before launch. If the stem shows two answers work, pick higher hierarchy / system / design. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Policy vs plan vs procedure — which is the 40-pager sits in CSP-11 Domain 2 Management Systems. The exam tests whether you apply the rule when a package already looks complete. Core rule: Policy = intent, scope, and non-negotiables signed by the accountable leader. Plan = who, when, resources, measures for a period or project. Procedure = how a task is done. Mixing them into one novel hides the control. Hierarchy still governs what the documents require. Field context: Legal wants a 40-page âpolicyâ that contains every SOP, every form, and a promise to âcomply with all laws.â Supervisors cannot find the energy-control rule. You are the CSP. The question is what belongs in a policy versus a plan versus a procedure. The oil-and-gas skin shifts the same decision into production pressure: Corporate legal wants a 40-page âpolicyâ that swallows every offshore SOP. The OIM cannot find the isolation rule. You are the CSP. The construction skin shifts it into schedule and trade stacking: The GCâs legal team wants a 40-page âpolicyâ that swallows every site SOP. Foremen cannot find the fall-protection rule. You are the CSP. Model caption for this class: Three stacked documents: thin Policy (commitment, scope, hierarchy default), Plan (objectives, owners, budget, dates), Procedure (steps, isolation points, PPE last). Arrows down = increasing detail. Caption: if the policy is thicker than the procedure, you inverted the stack. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Policies set direction; plans assign owners, resources, and measures. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) A signed policy without an operational plan is incomplete. (3) Plans must reference hierarchy-smart controls for significant risks. (4) Keep plans current through MoC and audit findings. (5) Communicate plans to people who must act — not only to the binder. (6) Conflict between plans needs an explicit governing document. (7) Effectiveness review closes the loop. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Policy: we apply the hierarchy; line leaders are accountable; workers may stop work. Annual plan: mixer interlock funded Q2, owner Engineering, measure function-test pass. Procedure: LOTO steps for that mixer. A 40-page policy that restates 1910.147 verbatim is not a plan and not a usable procedure. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: A policy that is actually a procedure manual.; A plan with no owner, date, or resource.; “Comply with all applicable laws” as the only sentence.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Policy” is really Intent and accountabilities — stable, short; “Plan” is really Time-bound conversion of standards/objectives into work; “Procedure / SOP” is really Task steps, energy points, criteria; “Record” is really Evidence the procedure ran — not a policy. Stem-if-then map: if only a policy poster exists → build an owned operational plan; if two plans conflict → name the governing plan and resolve; if MoC changed the process → update the plan before normalizing; if no owner is named → assign accountability before launch; if two answers work → higher hierarchy / system / design. Scoring favors evidence, owners, verification, and hierarchy-smart controls on plans policies. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Policy vs plan vs procedure — which is the 40-pager?",
  cardBack:
    "If the policy is thicker than the SOP, you inverted the stack. Policy = intent. Plan = owners/dates/money. Procedure = steps. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence assigns intent to policy, time-bound resources to plan, and task steps to procedure, and says a 40-page policy is a failure of document design.",
};

export const items: ClassItem[] = [
  exam(T, "A 40-page “policy” contains every SOP and form. Supervisors cannot find LOTO. Best CSP redesign?", [
    "Keep one novel — ISO likes thickness.",
    "Short policy (intent/accountability/hierarchy), a plan with owners/dates, and separate controlled procedures for tasks.",
    "Delete procedures and keep only the policy.",
    "Replace all documents with RPN tables.",
  ], 1, "Separate the jobs of policy, plan, and procedure.", "STEM", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Policy = intent, scope, and non-negotiables signed by the accountable leader. Plan = who, when, resources, measures for a period or project. Procedure = how a task is done. Mixing them into one novel hides the control... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Which sentence belongs in policy rather than procedure?", [
    "Close valve V-12, bleed, try-out the start button.",
    "Line leaders are accountable for applying the hierarchy; workers have stop-work authority without retaliation.",
    "Torque the flange to 80 ft-lb.",
    "Sample the outfall at 06:00.",
  ], 1, "Policy is intent and accountability, not valve steps.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Policy = intent, scope, and non-negotiables signed by the accountable leader. Plan = who, when, resources, measures for a period or project. Procedure = how a task is done. Mixing them into one novel hides the control... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "The policy authorizes “PPE as the primary control.” Substitution is still open on the coating line. Best correction?", [
    "Keep it — policy may override hierarchy.",
    "Rewrite: hierarchy is the default; PPE is last. The coating plan must still consider substitution.",
    "Add more PPE catalog pages.",
    "Move the sentence to 14001.",
  ], 1, "HIER belongs in the policy default.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Policy = intent, scope, and non-negotiables signed by the accountable leader. Plan = who, when, resources, measures for a period or project. Procedure = how a task is done. Mixing them into one novel hides the control... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "An “annual plan” restates ISO 45001 clauses with no owners, dates, or budget. What is it?", [
    "A complete plan.",
    "Still a quote — not a plan until conversion to work and resources (Class 18).",
    "A procedure.",
    "A 1904 log.",
  ], 1, "Plans need who/when/money/measure.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Policy = intent, scope, and non-negotiables signed by the accountable leader. Plan = who, when, resources, measures for a period or project. Procedure = how a task is done. Mixing them into one novel hides the control... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A team replaces the energy-isolation procedure with an FMEA spreadsheet because RPN is “more scientific.” Error?", [
    "None — FMEA is the modern SOP.",
    "Wrong tool: FMEA ranks modes; a procedure must give isolation steps a worker can execute.",
    "They should have used a bowtie as the SOP.",
    "They should have used TRIR as the SOP.",
  ], 1, "TOOL: analysis worksheets are not task procedures.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Policy = intent, scope, and non-negotiables signed by the accountable leader. Plan = who, when, resources, measures for a period or project. Procedure = how a task is done. Mixing them into one novel hides the control... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Finance wants the policy to say insurance limits are the organization’s primary risk control. Best position?", [
    "Accept — transfer belongs in the OHS policy headline.",
    "Reject: policy should commit to hierarchy and legal duties; insurance is financing, not the control strategy.",
    "Accept if the limit is high.",
    "Accept if TRIR is low.",
  ], 1, "FIN: financing ≠ policy control strategy.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Policy = intent, scope, and non-negotiables signed by the accountable leader. Plan = who, when, resources, measures for a period or project. Procedure = how a task is done. Mixing them into one novel hides the control... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Last sentence: corporate counsel will not shorten the 40-page policy this year. Best remaining field control?", [
    "Leave crews with only the 40-pager.",
    "Issue a one-page operational policy plus a procedure index and current SOPs at the point of work; keep lobbying to split the novel.",
    "Hide the 40-pager and have no policy.",
    "Replace SOPs with posters.",
  ], 1, "STEM froze the novel. Remaining system is usable documents at the workface.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Policy = intent, scope, and non-negotiables signed by the accountable leader. Plan = who, when, resources, measures for a period or project. Procedure = how a task is done. Mixing them into one novel hides the control... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Procedure at the mixer still shows the old pump after MoC. Document type that failed?", [
    "Policy intent.",
    "Controlled procedure / after-column MoC — the record of how to isolate is stale.",
    "The 300A.",
    "The 14001 certificate.",
  ], 1, "Procedures must match the field.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Policy = intent, scope, and non-negotiables signed by the accountable leader. Plan = who, when, resources, measures for a period or project. Procedure = how a task is done. Mixing them into one novel hides the control... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a bridge deck pour laydown yard. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Which is a record rather than a policy.", [
    "Signed hierarchy commitment.",
    "Completed try-out log from this morning’s isolation.",
    "Annual HSE plan objectives.",
    "Stop-work authority statement.",
  ], 1, "Records evidence that a procedure ran.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Policy = intent, scope, and non-negotiables signed by the accountable leader. Plan = who, when, resources, measures for a period or project. Procedure = how a task is done. Mixing them into one novel hides the control... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Policy promises “evaluate compliance.” The plan has no legal-register owner and no 1904 clock training. Gap?", [
    "None — the promise is enough.",
    "Plan failed to convert the policy: assign the register, include 8 h / 24 h / 7 d clocks.",
    "Policy should list every 1910 paragraph.",
    "Clocks belong only in 14001.",
  ], 1, "TIME: 1904 clocks belong in the operational plan/procedures, not only in poetry.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Policy = intent, scope, and non-negotiables signed by the accountable leader. Plan = who, when, resources, measures for a period or project. Procedure = how a task is done. Mixing them into one novel hides the control... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A procedure sets APR as mandatory while a non-isocyanate substitute is on the approved list. Best document fix?", [
    "Keep PPE mandatory — procedures outrank hierarchy.",
    "Revise the plan/procedure to specify the substitute; PPE only for residual if substitution is documented closed.",
    "Move the PPE rule into the policy headline.",
    "Add the PEL as a substitute for substitution.",
  ], 1, "HIER in the procedure, not PPE-first.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Policy = intent, scope, and non-negotiables signed by the accountable leader. Plan = who, when, resources, measures for a period or project. Procedure = how a task is done. Mixing them into one novel hides the control... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Personal samples under PEL, over the TLV the policy adopted. Procedure says “stop only at PEL.” Issue?", [
    "PEL always wins over the organization’s own policy.",
    "PELTLV: the policy/SMS criterion (TLV) is a requirement you claimed; the procedure under-implements it.",
    "TLVs belong only in 14001.",
    "TLVs replace 1904.",
  ], 1, "Documents must match the criterion the organization adopted.", "PELTLV", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Policy = intent, scope, and non-negotiables signed by the accountable leader. Plan = who, when, resources, measures for a period or project. Procedure = how a task is done. Mixing them into one novel hides the control... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
