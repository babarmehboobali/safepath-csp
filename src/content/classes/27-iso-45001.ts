import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D2.08";

export const classFields: ClassFields = {
  hook: "The registrar arrives in six weeks. Operations wants a binder of procedures and a motivational kickoff. You are the CSP. The question is whether ISO 45001 is a PDCA management system or a certificate hunt.",
  hookOilGas: `The registrar arrives at the gas plant in six weeks. The OIM wants a binder and a kickoff. You are the CSP. The question is whether ISO 45001 is a PDCA management system or a certificate hunt.`,
  hookConstruction: `The registrar arrives on the project in six weeks. The GC wants a binder and a kickoff. You are the CSP. The question is whether ISO 45001 is a PDCA management system or a certificate hunt.`,
  rule: "ISO 45001 is an OHS management system on Annex SL: context, leadership, planning, support, operation, performance evaluation, improvement — run as Plan-Do-Check-Act. Worker participation and hierarchy of controls are not optional appendices. A certificate without PDCA evidence is theater.",
  modelCaption:
    "PDCA wheel: Plan (context, risks/opportunities, legal, objectives), Do (support and operation, hierarchy, MoC, emergency), Check (monitor, audit, management review), Act (incidents, CAPA, improvement). Center: leadership and worker participation. Caption: the certificate sits outside the wheel — it is not a step.",
  workedCase:
    "Plan: significant risk is the open mixer; objective is interlock by Q2, not “improve culture.” Do: specify, install, train residual. Check: function-test sample, incident trend, internal audit of operational planning. Act: CAPA on defeats, MoC on the SOP. A kickoff photo is not Plan.",
  trapsJson: traps(
    "Treating certification day as the objective.",
    "Skipping worker participation because leadership already signed the policy.",
    "Putting PPE programs in Operation while substitution is still open.",
  ),
  contrastJson: contrast([
    { looksLike: "Clause 5 Leadership", actually: "Line leaders accountable; EHS enables — not CSP as the A" },
    { looksLike: "Clause 8 Operation", actually: "Hierarchy, MoC, contractors, emergency — the Do" },
    { looksLike: "Clause 9 Performance evaluation", actually: "The Check — monitoring, audit, management review" },
    { looksLike: "ISO 14001", actually: "Environment — do not run OHS on aspect scoring alone" },
  ]),
  mustScoreJson: mustScore(
    "ISO 45001 is a management-system framework: context, leadership, planning, support, operation, evaluation, improvement.",
    "Worker participation and consultation are required elements \u2014 not optional posters.",
    "Risk and opportunity planning must drive operational controls.",
    "Documents without operation are nonconformity waiting to happen.",
    "Internal audit and management review close the PDCA loop.",
    "Hierarchy of controls is expected inside operational planning.",
    "Certification theater without field controls fails the exam answer.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "workers are excluded from hazard consultation", pick: "restore participation \u2014 required element" },
    { ifStem: "only a manual exists with no operational controls", pick: "implement operation and evaluate performance" },
    { ifStem: "a higher control is open in planning", pick: "select it under hierarchy expectations" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "management review never sees audit findings", pick: "feed evaluation into improvement" },
  ),

  brief: `ISO 45001 is an OHS management system on Annex SL: context, leadership, planning, support, operation, performance evaluation, improvement â run as Plan-Do-Check-Act. Worker participation and hierarchy of controls are not optional appendices. A certificate without PDCA evidence is theater. If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
ISO 45001 is an OHS management system on Annex SL: context, leadership, planning, support, operation, performance evaluation, improvement â run as Plan-Do-Check-Act. Worker participation and hierarchy of controls are not optional appendices. A certificate without PDCA evidence is theater. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
The registrar arrives in six weeks. Operations wants a binder of procedures and a motivational kickoff. You are the CSP. The question is whether ISO 45001 is a PDCA management system or a certificate hunt. Oil-and-gas skin: The registrar arrives at the gas plant in six weeks. The OIM wants a binder and a kickoff. You are the CSP. Construction skin: The registrar arrives on the project in six weeks. The GC wants a binder and a kickoff. You are the CSP. Work the case: Plan: significant risk is the open mixer; objective is interlock by Q2, not âimprove culture.â Do: specify, install, train residual. Check: function-test sample, incident trend, internal audit of operational planning. Act: CAPA on defeats, MoC on the SOP. A kickoff photo is not Plan. Classic traps: Treating certification day as the objective.; Skipping worker participation because leadership already signed the policy.; Putting PPE programs in Operation while substitution is still open.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for iso 45001. Verify whether a higher system or design fix is still open. Contrast labels: Clause 5 Leadership is actually Line leaders accountable; EHS enables — not CSP as the A; Clause 8 Operation is actually Hierarchy, MoC, contractors, emergency — the Do; Clause 9 Performance evaluation is actually The Check — monitoring, audit, management review; ISO 14001 is actually Environment — do not run OHS on aspect scoring alone. If the stem shows workers are excluded from hazard consultation, pick restore participation \u2014 required element. If the stem shows only a manual exists with no operational controls, pick implement operation and evaluate performance. If the stem shows a higher control is open in planning, pick select it under hierarchy expectations. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows management review never sees audit findings, pick feed evaluation into improvement. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `ISO 45001 — binder and kickoff. Where is PDCA sits in CSP-11 Domain 2 Management Systems. The exam tests whether you apply the rule when a package already looks complete. Core rule: ISO 45001 is an OHS management system on Annex SL: context, leadership, planning, support, operation, performance evaluation, improvement â run as Plan-Do-Check-Act. Worker participation and hierarchy of controls are not optional appendices. A certificate without PDCA evidence is theater. Field context: The registrar arrives in six weeks. Operations wants a binder of procedures and a motivational kickoff. You are the CSP. The question is whether ISO 45001 is a PDCA management system or a certificate hunt. The oil-and-gas skin shifts the same decision into production pressure: The registrar arrives at the gas plant in six weeks. The OIM wants a binder and a kickoff. You are the CSP. The construction skin shifts it into schedule and trade stacking: The registrar arrives on the project in six weeks. The GC wants a binder and a kickoff. You are the CSP. Model caption for this class: PDCA wheel: Plan (context, risks/opportunities, legal, objectives), Do (support and operation, hierarchy, MoC, emergency), Check (monitor, audit, management review), Act (incidents, CAPA, improvement). Center: leadership and worker participation. Caption: the certificate sits outside the wheel â it is not a step. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) ISO 45001 is a management-system framework: context, leadership, planning, support, operation, evaluation, improvement. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Worker participation and consultation are required elements — not optional posters. (3) Risk and opportunity planning must drive operational controls. (4) Documents without operation are nonconformity waiting to happen. (5) Internal audit and management review close the PDCA loop. (6) Hierarchy of controls is expected inside operational planning. (7) Certification theater without field controls fails the exam answer. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Plan: significant risk is the open mixer; objective is interlock by Q2, not âimprove culture.â Do: specify, install, train residual. Check: function-test sample, incident trend, internal audit of operational planning. Act: CAPA on defeats, MoC on the SOP. A kickoff photo is not Plan. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Treating certification day as the objective.; Skipping worker participation because leadership already signed the policy.; Putting PPE programs in Operation while substitution is still open.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Clause 5 Leadership” is really Line leaders accountable; EHS enables — not CSP as the A; “Clause 8 Operation” is really Hierarchy, MoC, contractors, emergency — the Do; “Clause 9 Performance evaluation” is really The Check — monitoring, audit, management review; “ISO 14001” is really Environment — do not run OHS on aspect scoring alone. Stem-if-then map: if workers are excluded from hazard consultation → restore participation \u2014 required element; if only a manual exists with no operational controls → implement operation and evaluate performance; if a higher control is open in planning → select it under hierarchy expectations; if two answers work → higher hierarchy / system / design; if management review never sees audit findings → feed evaluation into improvement. Scoring favors evidence, owners, verification, and hierarchy-smart controls on iso 45001. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "ISO 45001 — binder and kickoff. Where is PDCA?",
  cardBack:
    "Plan risks/objectives, Do hierarchy/MoC, Check audit/review, Act CAPA. Leadership + worker participation in the hub. Certificate is not a PDCA step. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence maps ISO 45001 to PDCA (plan risks/objectives, do operational hierarchy, check audit/review, act improve) with leadership and worker participation.",
};

export const items: ClassItem[] = [
  exam(T, "You are the CSP reviewing a live decision at a bridge deck pour laydown yard. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Which set is the ISO 45001 PDCA spine.", [
    "Certificate → cake → press release → archive.",
    "Plan (risks, legal, objectives) → Do (operation, hierarchy, MoC) → Check (monitor, audit, review) → Act (CAPA, improve).",
    "FMEA → RPN → cartridge → TRIR.",
    "Aspect → impact → 14001 certificate.",
  ], 1, "PDCA is the system. Certificate theater is not.", "STEM", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ISO 45001 is an OHS management system on Annex SL: context, leadership, planning, support, operation, performance evaluation, improvement — run as Plan-Do-Check-Act. Worker participation and hierarchy of controls are... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Clause 8 operational control: an open mixer, substitution still possible. Draft control is a respirator program. Best 45001-consistent Do?", [
    "Keep respirators as the operational control.",
    "Apply hierarchy: substitute or enclose, then admin/PPE for residual.",
    "Wait for the registrar to pick.",
    "Count posters as operational control.",
  ], 1, "HIER: 45001 operational planning expects hierarchy, not PPE-first.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ISO 45001 is an OHS management system on Annex SL: context, leadership, planning, support, operation, performance evaluation, improvement — run as Plan-Do-Check-Act. Worker participation and hierarchy of controls are... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Leadership signed the policy. No workers were consulted on hazard ID or control selection. PDCA problem?", [
    "None — signature is participation.",
    "Worker participation is required; a signed policy is not consultation.",
    "Participation is only a 14001 idea.",
    "Participation is only a 1904 idea.",
  ], 1, "45001 leadership includes worker participation, not letterhead.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ISO 45001 is an OHS management system on Annex SL: context, leadership, planning, support, operation, performance evaluation, improvement — run as Plan-Do-Check-Act. Worker participation and hierarchy of controls are... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a grain elevator maintenance day. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Where does internal audit sit on the wheel.", [
    "Plan only.",
    "Check — performance evaluation, feeding Act.",
    "Do — it installs guards.",
    "Outside PDCA — audits are the registrar’s job only.",
  ], 1, "Internal audit is Check. Registrar visits are not a substitute for the wheel.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ISO 45001 is an OHS management system on Annex SL: context, leadership, planning, support, operation, performance evaluation, improvement — run as Plan-Do-Check-Act. Worker participation and hierarchy of controls are... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A site runs ISO 14001 aspect scoring to pick OHS controls and drops injury items that are not “aspects.” Error?", [
    "None — Annex SL makes 14001 = 45001.",
    "Wrong tool/standard: 14001 is environmental; OHS planning uses 45001 hazard/risk, not aspect math.",
    "They should have used 24.45.",
    "They should have used 100,000 hours.",
  ], 1, "TOOL: 14001 vs 45001.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ISO 45001 is an OHS management system on Annex SL: context, leadership, planning, support, operation, performance evaluation, improvement — run as Plan-Do-Check-Act. Worker participation and hierarchy of controls are... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Management review packet is only the certificate and TRIR. Missing Check inputs?", [
    "Nothing — those two satisfy clause 9.",
    "Need monitoring of controls, compliance evaluation, audit results, incidents, worker input, progress on objectives — not a plaque.",
    "Need only the insurance premium.",
    "Need only RPN tables.",
  ], 1, "Check is evidence of system health, not a certificate.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ISO 45001 is an OHS management system on Annex SL: context, leadership, planning, support, operation, performance evaluation, improvement — run as Plan-Do-Check-Act. Worker participation and hierarchy of controls are... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Finance wants to skip engineering objectives and buy a larger policy to “meet 45001.” Best position?", [
    "Accept transfer as Plan.",
    "Reject: 45001 objectives and operational control are not risk financing.",
    "Accept if the registrar likes insurance.",
    "Replace Act with the premium.",
  ], 1, "FIN: insurance is not PDCA operational control.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ISO 45001 is an OHS management system on Annex SL: context, leadership, planning, support, operation, performance evaluation, improvement — run as Plan-Do-Check-Act. Worker participation and hierarchy of controls are... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Last sentence: design freeze yesterday; registrar in six weeks. Best remaining Plan/Do?", [
    "Write elimination objectives you cannot execute, to impress the auditor.",
    "Name residual risk honestly and Do the highest remaining engineering (bolt-on) plus participation and MoC of procedures.",
    "Hide the mixer until after the visit.",
    "Convert to 14001 for the visit.",
  ], 1, "STEM closed redesign. Honest residual + remaining hierarchy beats fake objectives.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ISO 45001 is an OHS management system on Annex SL: context, leadership, planning, support, operation, performance evaluation, improvement — run as Plan-Do-Check-Act. Worker participation and hierarchy of controls are... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "An incident CAPA that only retrains, while the interlock is still defeated, fails which PDCA move most directly?", [
    "Plan context of the marketplace.",
    "Act — improvement did not remove the cause; Do/hierarchy also failed.",
    "The registrar’s travel plan.",
    "ISO 19011 document numbering.",
  ], 1, "Act/CAPA plus hierarchy. Training around a defeated interlock is not improvement.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ISO 45001 is an OHS management system on Annex SL: context, leadership, planning, support, operation, performance evaluation, improvement — run as Plan-Do-Check-Act. Worker participation and hierarchy of controls are... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Who is accountable (the A) for 45001 leadership on a production unit?", [
    "The CSP, because it is an OHS standard.",
    "The line leader; EHS is typically C/support.",
    "The insurer.",
    "The poster vendor.",
  ], 1, "Leadership clause sits on the line, not outsourced to EHS.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ISO 45001 is an OHS management system on Annex SL: context, leadership, planning, support, operation, performance evaluation, improvement — run as Plan-Do-Check-Act. Worker participation and hierarchy of controls are... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A fatality occurs during the certification week. Team wants to delay OSHA until the registrar leaves. Clock?", [
    "Registrar week is a recognized pause.",
    "Fatality: 8 hours to OSHA. Certification theater does not move 1904.",
    "24 hours because ISO is involved.",
    "7 days with the 300.",
  ], 1, "TIME: 8-hour fatality clock.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ISO 45001 is an OHS management system on Annex SL: context, leadership, planning, support, operation, performance evaluation, improvement — run as Plan-Do-Check-Act. Worker participation and hierarchy of controls are... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Objectives are all “reduce TRIR 10%.” No objective on installing the mixer interlock. PDCA issue?", [
    "None — lagging rates are the only valid 45001 objectives.",
    "Plan should include objectives on significant risks and hierarchy actions, not only a lagging rate.",
    "Objectives must be ISO 14001 aspects.",
    "Objectives must be RPN < 100.",
  ], 1, "Leading/system objectives for significant hazards, not TRIR-only.", "STEM", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ISO 45001 is an OHS management system on Annex SL: context, leadership, planning, support, operation, performance evaluation, improvement — run as Plan-Do-Check-Act. Worker participation and hierarchy of controls are... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
