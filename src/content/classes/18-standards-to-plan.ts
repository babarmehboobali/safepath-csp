import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D2.02";

export const classFields: ClassFields = {
  hook: "Legal dropped a 40-page ISO 45001 extract on the plant manager and called it the annual plan. You are the CSP. The question is how a clause becomes owners, resources, and measures.",
  hookOilGas: `Corporate dropped a 40-page ISO 45001 extract on the offshore OIM and called it the annual HSE plan. You are the CSP. The question is how a clause becomes owners, resources, and measures.`,
  hookConstruction: `The GC dropped a 40-page ISO 45001 extract on the site manager and called it the project HSE plan. You are the CSP. The question is how a clause becomes owners, resources, and measures.`,
  rule: "A standard is a requirement set. A plan names who, when, with what resource, and how you will know. Copy-pasted clauses are not a plan. Legal minimums, consensus standards, and your SMS are different sources — label which one you are converting.",
  modelCaption:
    "Four boxes in a row: Source (OSHA / ANSI / ISO / contract) → Clause in plain language → Operational plan (owner, resource, date, measure) → Verify. Caption: if the box has no owner or no measure, it is still a quote.",
  workedCase:
    "Z10 design-review clause. Plan: capital projects > $50k get a hierarchy review by engineering with EHS consulted before detailed design freeze; measure is percent of packages with a signed review. “Comply with Z10” in the policy footer is not that plan.",
  trapsJson: traps(
    "Pasting the standard into the SMS and calling it implementation.",
    "One owner named “everyone.”",
    "Measuring certificate status instead of the control the clause required.",
  ),
  contrastJson: contrast([
    { looksLike: "Policy sentence “we comply with ISO 45001”", actually: "Intent — not a plan" },
    { looksLike: "Clause 8.1.2 copied into a binder", actually: "Still a quote until hierarchy reviews have an owner and a gate" },
    { looksLike: "OSHA 1910 vs ANSI Z244.1", actually: "Law versus consensus — the plan must say which bar you are using" },
    { looksLike: "Certificate on the wall", actually: "A third-party opinion — not operational control" },
  ]),
  mustScoreJson: mustScore(
    "Translate standards into specific site plans with owners and measures.",
    "A binder of PDFs is not an implemented plan.",
    "Map each requirement to a control, procedure, or design decision.",
    "Conflicts between standards need a documented resolution path.",
    "Training follows the plan \u2014 it does not replace missing engineering.",
    "Keep the plan living through MoC and audit findings.",
    "Metrics must show whether the plan works, not only that it exists.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "only a PDF library is proposed", pick: "convert requirements into owned site plans" },
    { ifStem: "two standards conflict", pick: "document the governing requirement and resolve" },
    { ifStem: "training is offered instead of a missing control", pick: "put the control in the plan first" },
    { ifStem: "no measure exists for a key requirement", pick: "add a leading or lagging measure that fits" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
  ),

  brief: `A standard is a requirement set. A plan names who, when, with what resource, and how you will know. Copy-pasted clauses are not a plan. Legal minimums, consensus standards, and your SMS are different sources â label which one you are converting. If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
A standard is a requirement set. A plan names who, when, with what resource, and how you will know. Copy-pasted clauses are not a plan. Legal minimums, consensus standards, and your SMS are different sources â label which one you are converting. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
Legal dropped a 40-page ISO 45001 extract on the plant manager and called it the annual plan. You are the CSP. The question is how a clause becomes owners, resources, and measures. Oil-and-gas skin: Corporate dropped a 40-page ISO 45001 extract on the offshore OIM and called it the annual HSE plan. You are the CSP. Construction skin: The GC dropped a 40-page ISO 45001 extract on the site manager and called it the project HSE plan. You are the CSP. Work the case: Z10 design-review clause. Plan: capital projects > $50k get a hierarchy review by engineering with EHS consulted before detailed design freeze; measure is percent of packages with a signed review. âComply with Z10â in the policy footer is not that plan. Classic traps: Pasting the standard into the SMS and calling it implementation.; One owner named “everyone.”; Measuring certificate status instead of the control the clause required.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for standards to plan. Verify whether a higher system or design fix is still open. Contrast labels: Policy sentence “we comply with ISO 45001” is actually Intent — not a plan; Clause 8.1.2 copied into a binder is actually Still a quote until hierarchy reviews have an owner and a gate; OSHA 1910 vs ANSI Z244.1 is actually Law versus consensus — the plan must say which bar you are using; Certificate on the wall is actually A third-party opinion — not operational control. If the stem shows only a PDF library is proposed, pick convert requirements into owned site plans. If the stem shows two standards conflict, pick document the governing requirement and resolve. If the stem shows training is offered instead of a missing control, pick put the control in the plan first. If the stem shows no measure exists for a key requirement, pick add a leading or lagging measure that fits. If the stem shows two answers work, pick higher hierarchy / system / design. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Standards → plan — what must a clause become sits in CSP-11 Domain 2 Management Systems. The exam tests whether you apply the rule when a package already looks complete. Core rule: A standard is a requirement set. A plan names who, when, with what resource, and how you will know. Copy-pasted clauses are not a plan. Legal minimums, consensus standards, and your SMS are different sources â label which one you are converting. Field context: Legal dropped a 40-page ISO 45001 extract on the plant manager and called it the annual plan. You are the CSP. The question is how a clause becomes owners, resources, and measures. The oil-and-gas skin shifts the same decision into production pressure: Corporate dropped a 40-page ISO 45001 extract on the offshore OIM and called it the annual HSE plan. You are the CSP. The construction skin shifts it into schedule and trade stacking: The GC dropped a 40-page ISO 45001 extract on the site manager and called it the project HSE plan. You are the CSP. Model caption for this class: Four boxes in a row: Source (OSHA / ANSI / ISO / contract) â Clause in plain language â Operational plan (owner, resource, date, measure) â Verify. Caption: if the box has no owner or no measure, it is still a quote. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Translate standards into specific site plans with owners and measures. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) A binder of PDFs is not an implemented plan. (3) Map each requirement to a control, procedure, or design decision. (4) Conflicts between standards need a documented resolution path. (5) Training follows the plan — it does not replace missing engineering. (6) Keep the plan living through MoC and audit findings. (7) Metrics must show whether the plan works, not only that it exists. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Z10 design-review clause. Plan: capital projects > $50k get a hierarchy review by engineering with EHS consulted before detailed design freeze; measure is percent of packages with a signed review. âComply with Z10â in the policy footer is not that plan. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Pasting the standard into the SMS and calling it implementation.; One owner named “everyone.”; Measuring certificate status instead of the control the clause required.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Policy sentence “we comply with ISO 45001”” is really Intent — not a plan; “Clause 8.1.2 copied into a binder” is really Still a quote until hierarchy reviews have an owner and a gate; “OSHA 1910 vs ANSI Z244.1” is really Law versus consensus — the plan must say which bar you are using; “Certificate on the wall” is really A third-party opinion — not operational control. Stem-if-then map: if only a PDF library is proposed → convert requirements into owned site plans; if two standards conflict → document the governing requirement and resolve; if training is offered instead of a missing control → put the control in the plan first; if no measure exists for a key requirement → add a leading or lagging measure that fits; if two answers work → higher hierarchy / system / design. Scoring favors evidence, owners, verification, and hierarchy-smart controls on standards to plan. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Standards → plan — what must a clause become?",
  cardBack:
    "Owner, resource, date, field measure. Attractive wrong: paste the ISO text or measure the certificate. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence says a plan names who, resources, timing, and a field measure, and that a pasted clause is not implementation.",
};

export const items: ClassItem[] = [
  exam(T, "A site “plan” is the ISO 45001 table of contents pasted into a Word file with the plant logo. No owners, no budget, no measures. Best CSP call?", [
    "Accept — the standard is now the plan.",
    "Reject: convert each in-scope clause into owner, resource, date, and a field measure.",
    "Hang the certificate and close the action.",
    "Replace ISO with a poster campaign.",
  ], 1, "A pasted standard is still a quote. Implementation is operational.", "STEM", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "A standard is a requirement set. A plan names who, when, with what resource, and how you will know. Copy-pasted clauses are not a plan. Legal minimums, consensus standards, and your SMS are different sources — label w... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Z10 requires design review using the hierarchy. The draft annual plan funds a four-hour awareness course for operators and nothing for project engineering. Best conversion of the clause?", [
    "Keep the operator course as the Z10 design-review plan.",
    "Put a hierarchy review gate on capital packages before design freeze, with engineering accountable and EHS consulted.",
    "Add a stretch-and-flex to kickoff meetings.",
    "Buy a larger umbrella policy.",
  ], 1, "A design clause converts to a design gate, not to operator training. Higher system/design.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "A standard is a requirement set. A plan names who, when, with what resource, and how you will know. Copy-pasted clauses are not a plan. Legal minimums, consensus standards, and your SMS are different sources — label w... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "The last sentence states the customer specification is the baseline and it exceeds OSHA 1926 on fall protection. The plan currently quotes only 1926. Best action?", [
    "Keep 1926 — law always wins over a spec.",
    "Rebuild the plan against the spec (the named baseline) while still meeting 1926 as a floor.",
    "Use ISO 14001 because it is newer.",
    "Plan to OSHA 300 posting dates only.",
  ], 1, "The plan must convert the baseline the stem named. OSHA remains a floor, not a ceiling.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "A standard is a requirement set. A plan names who, when, with what resource, and how you will know. Copy-pasted clauses are not a plan. Legal minimums, consensus standards, and your SMS are different sources — label w... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A planner uses FMEA RPN to decide which ISO 45001 clauses to convert this year and drops worker-participation because detection is “easy.” What went wrong?", [
    "Nothing — RPN is the ISO implementation method.",
    "Wrong tool: FMEA ranking is not a standards-to-plan filter, and participation is a system requirement, not a detection score.",
    "They should have used cylinder volume.",
    "They should have used a 5 dB exchange rate.",
  ], 1, "TOOL: RPN does not choose which SMS clauses exist.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "A standard is a requirement set. A plan names who, when, with what resource, and how you will know. Copy-pasted clauses are not a plan. Legal minimums, consensus standards, and your SMS are different sources — label w... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "The legal register lists PEL for a solvent. The corporate SMS adopted the TLV as internal criteria. The annual plan funds controls only to the PEL. Best CSP position?", [
    "PEL is enough because it is legal.",
    "The plan must meet the SMS/TLV baseline it claims; PEL-only under-converts the chosen standard.",
    "Issue respirators and stop planning.",
    "Wait for an OSHA letter of interpretation.",
  ], 1, "PELTLV: a legal limit is not the SMS criterion you published.", "PELTLV",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "A standard is a requirement set. A plan names who, when, with what resource, and how you will know. Copy-pasted clauses are not a plan. Legal minimums, consensus standards, and your SMS are different sources — label w... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Finance wants the “plan” to be an increased workers-comp deductible instead of funding the machine-guarding conversion of 1910.212. Best call?", [
    "Accept deductible change as the 1910.212 plan.",
    "Reject: risk financing is not the operational conversion of a guarding requirement.",
    "Keep unguarded machines and buy more first-aid kits.",
    "Call the deductible a leading indicator.",
  ], 1, "FIN: retain/transfer choices do not implement a technical clause.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "A standard is a requirement set. A plan names who, when, with what resource, and how you will know. Copy-pasted clauses are not a plan. Legal minimums, consensus standards, and your SMS are different sources — label w... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Which measure best shows that a confined-space clause was converted to a plan?", [
    "Number of slides in the annual refresher.",
    "Percent of entries with documented isolation, atmospheric test order, attendant, and retrieval — sampled in the field.",
    "Certificate anniversary date.",
    "Count of posters at the manway.",
  ], 1, "A field measure of the control, not of paper volume.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "A standard is a requirement set. A plan names who, when, with what resource, and how you will know. Copy-pasted clauses are not a plan. Legal minimums, consensus standards, and your SMS are different sources — label w... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A construction project plan converts “competent person” language into “anyone on days with a phone.” Best CSP correction?", [
    "Accept — phones equal competence.",
    "Name the competent person role, qualifying criteria, and authority to stop work; resource a backup for nights.",
    "Replace with a general safety orientation.",
    "Add the role to the insurance certificate.",
  ], 1, "Competence is a defined role with authority, not a phone list.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "A standard is a requirement set. A plan names who, when, with what resource, and how you will know. Copy-pasted clauses are not a plan. Legal minimums, consensus standards, and your SMS are different sources — label w... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "The emergency-reporting section of the site plan says “notify OSHA of fatalities within 7 calendar days.” What is wrong?", [
    "Nothing — 7 days is the severe-injury clock.",
    "Wrong clock: 1904 fatality notice is 8 hours; 7 days is the 300 recording window.",
    "It should be 8 hours for amputations too.",
    "It should use TWA hours.",
  ], 1, "TIME: fatality = 8 hours; amputation/hospitalization/eye = 24 hours; 300 log = 7 calendar days.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "A standard is a requirement set. A plan names who, when, with what resource, and how you will know. Copy-pasted clauses are not a plan. Legal minimums, consensus standards, and your SMS are different sources — label w... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "An environmental engineer pastes ISO 14001 aspect-scoring into the OHS plan and drops injury controls that do not score as “aspects.” Best call?", [
    "Accept — 14001 supersedes 45001.",
    "Wrong standard family: convert OHS clauses with an OHS SMS; 14001 does not choose injury controls.",
    "Merge both certificates into one TRIR.",
    "Use RPN on aspects and injuries together.",
  ], 1, "TOOL / STEM: 14001 is environmental. Do not let aspect scoring replace OHS planning.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "A standard is a requirement set. A plan names who, when, with what resource, and how you will know. Copy-pasted clauses are not a plan. Legal minimums, consensus standards, and your SMS are different sources — label w... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A clause on eliminating hazards at source still has budget for substitution of a solvent, or for a respirator program. The plan currently funds only fit testing. Best conversion?", [
    "Keep fit testing as the elimination plan.",
    "Fund the substitute; list respirators only for residual if substitution fails a documented screen.",
    "Fund a larger medical-surveillance contract.",
    "Fund a motivational speaker.",
  ], 1, "Higher hierarchy is the faithful conversion of an elimination/substitution clause.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "A standard is a requirement set. A plan names who, when, with what resource, and how you will know. Copy-pasted clauses are not a plan. Legal minimums, consensus standards, and your SMS are different sources — label w... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Hours worked will be 400,000. The plan sets a “TRIR of 1.0 means two recordable cases.” Check the math.", [
    "Correct: (2 × 200,000) / 400,000 = 1.0.",
    "Incorrect: they used 100,000 in their scratch work; (2 × 200,000) / 400,000 is 1.0 only with the 200,000 constant — confirm they did not plan against 100,000.",
    "TRIR uses 365 days in the denominator.",
    "TRIR uses headcount, not hours.",
  ], 0, "FORM: TRIR = (N × 200,000) / EH. Two cases in 400,000 hours is 1.0. Watch the 100,000 distractor in other stems; here the stated equation is correct.", "FORM", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "A standard is a requirement set. A plan names who, when, with what resource, and how you will know. Copy-pasted clauses are not a plan. Legal minimums, consensus standards, and your SMS are different sources — label w... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
