import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D2.08";

export const classFields: ClassFields = {
  hook: "Internal “audit” is a 400-line checklist of posters and binder tabs, done by the supervisor of the area, the day before the registrar. You are the CSP. The question is what ISO 19011 actually asks an audit to be.",
  hookOilGas: `Internal âauditâ on the platform is a 400-line checklist of posters, done by the area superintendent the day before the registrar. You are the CSP. The question is what ISO 19011 actually asks an audit to be.`,
  hookConstruction: `Internal âauditâ on the job is a 400-line checklist of posters, done by the superintendent the day before the client audit. You are the CSP. The question is what ISO 19011 actually asks an audit to be.`,
  rule: "ISO 19011 is guidance for auditing management systems: integrity, fair presentation, due professional care, confidentiality, independence, evidence-based and risk-based approach. An audit samples whether the system works in the field. It is not 45001, not 14001, and not a pre-registrar cleanup.",
  modelCaption:
    "Audit process flow: initiate → plan (risk-based scope) → conduct (evidence: interview, observe, record) → report (findings vs criteria) → follow-up. Side badges: independence, competence, confidentiality. Caption: a checklist of posters is not evidence of operational control.",
  workedCase:
    "Scope: operational control of lockout. Criteria: site energy-control procedure + 1910.147. Evidence: watch a try-out, not a binder. Auditor is not the maintenance supervisor whose bonus depends on uptime. Finding: isolation points missing on the new pump (MoC after-column). Follow-up is CAPA with hierarchy, not a new tab.",
  trapsJson: traps(
    "Area boss auditing their own bonus metrics.",
    "Binder tabs as the only evidence.",
    "Treating 19011 as the OHSMS itself.",
  ),
  contrastJson: contrast([
    { looksLike: "19011", actually: "How to audit" },
    { looksLike: "45001 / Z10", actually: "OHS system being audited" },
    { looksLike: "14001", actually: "EMS being audited" },
    { looksLike: "Inspection / walkthrough", actually: "May feed an audit; not automatically a 19011 audit" },
  ]),
  mustScoreJson: mustScore(
    "ISO 19011 guides auditing management systems: principles, managing a program, conducting audits, competence.",
    "Audit evidence must be objective and sampled against criteria.",
    "Independence and ethical conduct matter for credibility.",
    "Findings need clear criteria, evidence, and statement of nonconformity.",
    "Audit programs are risk-based \u2014 higher risk areas get more attention.",
    "Closing meetings and reports communicate without softening critical findings.",
    "Audits drive improvement; they are not a grading game to protect egos.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "auditors only tour offices and skip high-risk operations", pick: "risk-base the plan to sample critical controls" },
    { ifStem: "a finding lacks evidence", pick: "do not issue \u2014 gather objective evidence" },
    { ifStem: "management asks to delete a major finding", pick: "report accurately \u2014 ethics over comfort" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "competence for the technical process is missing", pick: "add competent auditors/technical experts" },
  ),

  brief: `ISO 19011 is guidance for auditing management systems: integrity, fair presentation, due professional care, confidentiality, independence, evidence-based and risk-based approach. An audit samples whether the system works in the field. It is not 45001, not 14001, and not a pre-registrar cleanup. If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
ISO 19011 is guidance for auditing management systems: integrity, fair presentation, due professional care, confidentiality, independence, evidence-based and risk-based approach. An audit samples whether the system works in the field. It is not 45001, not 14001, and not a pre-registrar cleanup. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
Internal âauditâ is a 400-line checklist of posters and binder tabs, done by the supervisor of the area, the day before the registrar. You are the CSP. The question is what ISO 19011 actually asks an audit to be. Oil-and-gas skin: Internal âauditâ on the platform is a 400-line checklist of posters, done by the area superintendent the day before the registrar. You are the CSP. Construction skin: Internal âauditâ on the job is a 400-line checklist of posters, done by the superintendent the day before the client audit. You are the CSP. Work the case: Scope: operational control of lockout. Criteria: site energy-control procedure + 1910.147. Evidence: watch a try-out, not a binder. Auditor is not the maintenance supervisor whose bonus depends on uptime. Finding: isolation points missing on the new pump (MoC after-column). Follow-up is CAPA with hierarchy, not a new tab. Classic traps: Area boss auditing their own bonus metrics.; Binder tabs as the only evidence.; Treating 19011 as the OHSMS itself.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for iso 19011. Verify whether a higher system or design fix is still open. Contrast labels: 19011 is actually How to audit; 45001 / Z10 is actually OHS system being audited; 14001 is actually EMS being audited; Inspection / walkthrough is actually May feed an audit; not automatically a 19011 audit. If the stem shows auditors only tour offices and skip high-risk operations, pick risk-base the plan to sample critical controls. If the stem shows a finding lacks evidence, pick do not issue \u2014 gather objective evidence. If the stem shows management asks to delete a major finding, pick report accurately \u2014 ethics over comfort. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows competence for the technical process is missing, pick add competent auditors/technical experts. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `ISO 19011 — is a binder checklist by the area boss an audit sits in CSP-11 Domain 2 Management Systems. The exam tests whether you apply the rule when a package already looks complete. Core rule: ISO 19011 is guidance for auditing management systems: integrity, fair presentation, due professional care, confidentiality, independence, evidence-based and risk-based approach. An audit samples whether the system works in the field. It is not 45001, not 14001, and not a pre-registrar cleanup. Field context: Internal âauditâ is a 400-line checklist of posters and binder tabs, done by the supervisor of the area, the day before the registrar. You are the CSP. The question is what ISO 19011 actually asks an audit to be. The oil-and-gas skin shifts the same decision into production pressure: Internal âauditâ on the platform is a 400-line checklist of posters, done by the area superintendent the day before the registrar. You are the CSP. The construction skin shifts it into schedule and trade stacking: Internal âauditâ on the job is a 400-line checklist of posters, done by the superintendent the day before the client audit. You are the CSP. Model caption for this class: Audit process flow: initiate â plan (risk-based scope) â conduct (evidence: interview, observe, record) â report (findings vs criteria) â follow-up. Side badges: independence, competence, confidentiality. Caption: a checklist of posters is not evidence of operational control. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) ISO 19011 guides auditing management systems: principles, managing a program, conducting audits, competence. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Audit evidence must be objective and sampled against criteria. (3) Independence and ethical conduct matter for credibility. (4) Findings need clear criteria, evidence, and statement of nonconformity. (5) Audit programs are risk-based — higher risk areas get more attention. (6) Closing meetings and reports communicate without softening critical findings. (7) Audits drive improvement; they are not a grading game to protect egos. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Scope: operational control of lockout. Criteria: site energy-control procedure + 1910.147. Evidence: watch a try-out, not a binder. Auditor is not the maintenance supervisor whose bonus depends on uptime. Finding: isolation points missing on the new pump (MoC after-column). Follow-up is CAPA with hierarchy, not a new tab. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Area boss auditing their own bonus metrics.; Binder tabs as the only evidence.; Treating 19011 as the OHSMS itself.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “19011” is really How to audit; “45001 / Z10” is really OHS system being audited; “14001” is really EMS being audited; “Inspection / walkthrough” is really May feed an audit; not automatically a 19011 audit. Stem-if-then map: if auditors only tour offices and skip high-risk operations → risk-base the plan to sample critical controls; if a finding lacks evidence → do not issue \u2014 gather objective evidence; if management asks to delete a major finding → report accurately \u2014 ethics over comfort; if two answers work → higher hierarchy / system / design; if competence for the technical process is missing → add competent auditors/technical experts. Scoring favors evidence, owners, verification, and hierarchy-smart controls on iso 19011. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "ISO 19011 — is a binder checklist by the area boss an audit?",
  cardBack:
    "No. 19011 audits are independent, competent, evidence-based, risk-based against criteria. 19011 is how to audit; 45001/14001 are what you audit. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence says 19011 is audit guidance (independence, evidence, risk-based) and is not itself the OHS or EMS standard.",
};

export const items: ClassItem[] = [
  exam(T, "You are the CSP reviewing a live decision at a grain elevator maintenance day. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: ISO 19011 is best described as:.", [
    "An OHSMS that replaces 45001.",
    "Guidance on auditing management systems — principles and process — not the SMS itself.",
    "An environmental aspect standard.",
    "OSHA’s 1904 recording rule.",
  ], 1, "19011 is how to audit. Do not confuse with 45001/14001/1904.", "STEM", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ISO 19011 is guidance for auditing management systems: integrity, fair presentation, due professional care, confidentiality, independence, evidence-based and risk-based approach. An audit samples whether the system wo... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "The maintenance superintendent whose bonus is uptime audits LOTO in their own shop using binder tabs only. 19011 issues?", [
    "None — internal always means the boss.",
    "Independence and evidence: do not audit your own bonus; observe try-out in the field.",
    "Only a missing ISO logo.",
    "Only a missing RPN.",
  ], 1, "Independence + evidence-based approach.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ISO 19011 is guidance for auditing management systems: integrity, fair presentation, due professional care, confidentiality, independence, evidence-based and risk-based approach. An audit samples whether the system wo... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Risk-based audit time is scheduled 90% on lunchroom posters and 10% on the open mixer. Problem?", [
    "None — posters are leading indicators.",
    "Risk-based approach failed: high-energy operational control deserved the sample.",
    "19011 requires equal time per clause.",
    "19011 forbids field observation.",
  ], 1, "Risk-based means energy and system risk, not décor.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ISO 19011 is guidance for auditing management systems: integrity, fair presentation, due professional care, confidentiality, independence, evidence-based and risk-based approach. An audit samples whether the system wo... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "An audit finding: unguarded nip. Proposed close: add a checklist row. Best close?", [
    "Checklist row satisfies 19011 follow-up.",
    "Specify/install the guard (hierarchy); the audit follow-up verifies the control, not a new row.",
    "A pizza.",
    "A higher insurance limit.",
  ], 1, "HIER: audit follow-up is effective action, not more paper.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ISO 19011 is guidance for auditing management systems: integrity, fair presentation, due professional care, confidentiality, independence, evidence-based and risk-based approach. An audit samples whether the system wo... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A team calls an FMEA workshop “the 19011 audit” because RPN was updated. Error?", [
    "None — FMEA is the preferred 19011 method.",
    "Wrong tool: FMEA is a design/process analysis; 19011 audit samples the system against criteria with independence.",
    "They should have used 14001 aspects as the audit.",
    "They should have used TRIR as the audit.",
  ], 1, "TOOL: FMEA ≠ audit.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ISO 19011 is guidance for auditing management systems: integrity, fair presentation, due professional care, confidentiality, independence, evidence-based and risk-based approach. An audit samples whether the system wo... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Finance offers to skip independent audits and rely on the insurer’s loss-control visit. Best position?", [
    "Accept — the insurer is always independent enough.",
    "Reject as a substitute SMS audit: insurer visits serve financing; 19011 programs need planned, competent, criteria-based audits of the SMS.",
    "Accept if the premium falls.",
    "Accept if a certificate exists.",
  ], 1, "FIN: insurance inspection ≠ 19011 program.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ISO 19011 is guidance for auditing management systems: integrity, fair presentation, due professional care, confidentiality, independence, evidence-based and risk-based approach. An audit samples whether the system wo... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Last sentence: the only person on site this week is the area boss. Registrar in five days. Best remaining move?", [
    "Have the boss audit themselves and backdate independence.",
    "Bring in an independent internal/external auditor; recuse the boss; do not fake 19011 principles.",
    "Audit only posters to avoid conflict.",
    "Cancel operational sampling forever.",
  ], 1, "STEM limited staffing. Remaining integrity still beats a fake audit.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ISO 19011 is guidance for auditing management systems: integrity, fair presentation, due professional care, confidentiality, independence, evidence-based and risk-based approach. An audit samples whether the system wo... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Audit notes include a worker’s diagnosis copied from the clinic. Handling?", [
    "Post on the audit kanban.",
    "Treat as medical information: 1910.1020 access/privacy; do not publish diagnoses in audit reports.",
    "File with the 300A in the lunchroom.",
    "Email all-hands for “transparency.”",
  ], 1, "Confidentiality principle plus 1910.1020.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ISO 19011 is guidance for auditing management systems: integrity, fair presentation, due professional care, confidentiality, independence, evidence-based and risk-based approach. An audit samples whether the system wo... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a refinery coker outage. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Criteria for an energy-control audit should be:.", [
    "Whatever the auditor remembers.",
    "Stated: site LOTO procedure, 1910.147 (or 1926 as applicable), and relevant MoC documents.",
    "ISO 14001 aspects only.",
    "The TRIR target.",
  ], 1, "Evidence is judged against criteria, not vibes.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ISO 19011 is guidance for auditing management systems: integrity, fair presentation, due professional care, confidentiality, independence, evidence-based and risk-based approach. An audit samples whether the system wo... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a bridge deck pour laydown yard. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Second-party vs third-party in 19011 language:.", [
    "They are the same as OSHA inspections.",
    "Second-party is customer/supplier; third-party is independent certification/external; neither replaces a competent internal program.",
    "Third-party means the area boss.",
    "Second-party means 1904.",
  ], 1, "Relationship labels; still not 1904.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ISO 19011 is guidance for auditing management systems: integrity, fair presentation, due professional care, confidentiality, independence, evidence-based and risk-based approach. An audit samples whether the system wo... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A fatality occurs while auditors are on site. Lead auditor wants to finish the closing meeting before anyone calls OSHA. Clock?", [
    "Closing meeting has priority.",
    "Fatality: 8 hours to OSHA. An audit agenda is not a pause.",
    "24 hours because auditors are present.",
    "7 days.",
  ], 1, "TIME: 8-hour fatality clock.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ISO 19011 is guidance for auditing management systems: integrity, fair presentation, due professional care, confidentiality, independence, evidence-based and risk-based approach. An audit samples whether the system wo... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Competence: an auditor who has never seen a process unit is assigned to audit SIS independence. Best call?", [
    "Competence is only a certificate in 19011 methods.",
    "Need technical competence for the activity; pair with a technically competent auditor or restaff.",
    "A checklist removes the competence need.",
    "RPN training equals SIS competence.",
  ], 1, "19011 competence includes the subject matter.", "STEM", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ISO 19011 is guidance for auditing management systems: integrity, fair presentation, due professional care, confidentiality, independence, evidence-based and risk-based approach. An audit samples whether the system wo... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
