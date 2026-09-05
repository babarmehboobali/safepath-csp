import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D2.12";
const explain = (core: string, calc: string, standards: string, distractors: string) =>
  `Core Rule: ${core} Calculation Steps: ${calc} Standards Cited: ${standards} Why Each Distractor Fails: ${distractors}`;

export const classFields: ClassFields = {
  hook:
    "A manager asks the CSP to sign a safety report that says a solvent change is acceptable even though the CSP has not reviewed the chemistry. The manager offers a bonus and asks the CSP to keep a contractor's falsified training record confidential. You are deciding what to say, what to document, and when professional duty overrides organizational convenience.",
  hookOilGas: `A drilling contractor pressures the CSP to sign off a barrier-critical inspection from photos that do not show the test. The supervisor says the client will never know. You are deciding between loyalty to a manager and professional responsibility to people, environment, and truthful records.`,
  hookConstruction: `A project executive wants a safety report to show 100% training completion before turnover although several workers have not demonstrated competence. The CSP is offered schedule relief for signing it. The ethical decision is whether the record is truthful and whether the CSP is qualified to make the claim.`,
  rule:
    "Professional ethics starts with paramount protection of people, environment, and property; honesty, fairness, impartiality, competence, truthful public statements, accurate qualifications, conflict-of-interest control, and professional development. A CSP should not sign beyond personal competence or create a misleading record to satisfy management. Confidentiality is not a license to conceal imminent unacceptable risk or falsification from an appropriate authority. When facts are incomplete, say what is known, what is not known, and what verification is required.",
  modelCaption:
    "Ethical decision path: FACTS → DUTY/PEOPLE → COMPETENCE → CONFLICT → TRUTHFUL RECORD → APPROPRIATE ESCALATION. At each branch ask: Is the statement factual? Am I qualified? Is my judgment independent? Is there unacceptable danger? What evidence will I retain?",
  workedCase:
    "Illustrative evidence scoring: a report claims 100% training completion for 40 workers. Attendance records show 40 signatures, but practical demonstrations are documented for only 32. If the report's claim is “100% trained and competent,” the verified competency fraction is 32/40 = 0.80 = 80%, so the truthful statement cannot be 100%. The ethical control is not to massage the denominator or redefine competence after the fact; report the 80% verified demonstration status, identify the eight gaps, and correct the system. The arithmetic is simple; the professional judgment is the test.",
  trapsJson: traps(
    "Assuming a manager's instruction makes an inaccurate statement ethical.",
    "Using confidentiality to justify concealing an imminent unacceptable risk or falsified professional record.",
    "Accepting work outside competence and then signing a report because the deadline is urgent.",
  ),
  contrastJson: contrast([
    { looksLike: "Loyalty to employer", actually: "Balanced with public/worker/environmental duty and truthful judgment" },
    { looksLike: "Confidentiality", actually: "Important, but not a shield for deception or unacceptable danger" },
    { looksLike: "Qualification", actually: "Must be represented accurately" },
    { looksLike: "Signature", actually: "Professional representation of facts/responsibility" },
    { looksLike: "Conflict disclosure", actually: "Protection of independent professional judgment" },
  ]),
  mustScoreJson: mustScore(
    "Ethics: protect people, tell the truth, stay within competence, avoid conflicts.",
    "Do not falsify records or hide imminent hazards for production.",
    "Professional judgment documents basis and residual risk.",
    "Push back on illegal or reckless instructions \u2014 escalate appropriately.",
    "Confidentiality has limits when serious harm is foreseeable.",
    "Vendor gifts and conflicts need management.",
    "Hierarchy and legal duties outrank convenience ethics of silence.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "asked to hide an imminent hazard", pick: "refuse and escalate to protect people" },
    { ifStem: "asked to sign outside competence", pick: "decline or get qualified support" },
    { ifStem: "record falsification requested", pick: "refuse" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "conflict of interest in vendor selection", pick: "disclose and recuse as needed" },
  ),

  brief: `Professional ethics starts with paramount protection of people, environment, and property; honesty, fairness, impartiality, competence, truthful public statements, accurate qualifications, conflict-of-interest control, and professional development. A CSP should not sign beyond personal competence or create a misleading record to satisfy management. Confidentiality is not a license to conceal imminent unacceptable risk or falsification from an If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Professional ethics starts with paramount protection of people, environment, and property; honesty, fairness, impartiality, competence, truthful public statements, accurate qualifications, conflict-of-interest control, and professional development. A CSP should not sign beyond personal competence or create a misleading record to satisfy management. Confidentiality is not a license to conceal imminent unacceptable risk or falsification from an appropriate authority. When facts are incomplete, say what is known, what is not known, and what verification is required. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
A manager asks the CSP to sign a safety report that says a solvent change is acceptable even though the CSP has not reviewed the chemistry. The manager offers a bonus and asks the CSP to keep a contractor's falsified training record confidential. You are deciding what to say, what to document, and when professional duty overrides organizational convenience. Oil-and-gas skin: A drilling contractor pressures the CSP to sign off a barrier-critical inspection from photos that do not show the test. The supervisor says the client will never know. You are deciding between loyalty to a manager and professional responsibility to people, environment, and truthful records. Construction skin: A project executive wants a safety report to show 100% training completion before turnover although several workers have not demonstrated competence. The CSP is offered schedule relief for signing it. The ethical decision is whether the record is truthful and whether the CSP is qualified to make the claim. Work the case: Illustrative evidence scoring: a report claims 100% training completion for 40 workers. Attendance records show 40 signatures, but practical demonstrations are documented for only 32. If the report's claim is â100% trained and competent,â the verified competency fraction is 32/40 = 0.80 = 80%, so the truthful statement cannot be 100%. The ethical control is not to massage the denominator or redefine competence after the fact; report the 80% verified demonstration status, identify the eight gaps, and correct the system. The arithmetic is simple; the professional judgment is the test. Classic traps: Assuming a manager's instruction makes an inaccurate statement ethical.; Using confidentiality to justify concealing an imminent unacceptable risk or falsified professional record.; Accepting work outside competence and then signing a report because the deadline is urgent.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for ethics professional judgment. Verify whether a higher system or design fix is still open. Contrast labels: Loyalty to employer is actually Balanced with public/worker/environmental duty and truthful judgment; Confidentiality is actually Important, but not a shield for deception or unacceptable danger; Qualification is actually Must be represented accurately; Signature is actually Professional representation of facts/responsibility; Conflict disclosure is actually Protection of independent professional judgment. If the stem shows asked to hide an imminent hazard, pick refuse and escalate to protect people. If the stem shows asked to sign outside competence, pick decline or get qualified support. If the stem shows record falsification requested, pick refuse. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows conflict of interest in vendor selection, pick disclose and recuse as needed. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Ethics — who owns the truth in the safety report sits in CSP-11 Domain 2 Management Systems. The exam tests whether you apply the rule when a package already looks complete. Core rule: Professional ethics starts with paramount protection of people, environment, and property; honesty, fairness, impartiality, competence, truthful public statements, accurate qualifications, conflict-of-interest control, and professional development. A CSP should not sign beyond personal competence or create a misleading record to satisfy management. Confidentiality is not a license to conceal imminent unacceptable risk or falsification from an appropriate authority. When facts are incomplete, say what is known, what is not known, and what verification is required. Field context: A manager asks the CSP to sign a safety report that says a solvent change is acceptable even though the CSP has not reviewed the chemistry. The manager offers a bonus and asks the CSP to keep a contractor's falsified training record confidential. You are deciding what to say, what to document, and when professional duty overrides organizational convenience. The oil-and-gas skin shifts the same decision into production pressure: A drilling contractor pressures the CSP to sign off a barrier-critical inspection from photos that do not show the test. The supervisor says the client will never know. You are deciding between loyalty to a manager and professional responsibility to people, environment, and truthful records. The construction skin shifts it into schedule and trade stacking: A project executive wants a safety report to show 100% training completion before turnover although several workers have not demonstrated competence. The CSP is offered schedule relief for signing it. The ethical decision is whether the record is truthful and whether the CSP is qualified to make the claim. Model caption for this class: Ethical decision path: FACTS â DUTY/PEOPLE â COMPETENCE â CONFLICT â TRUTHFUL RECORD â APPROPRIATE ESCALATION. At each branch ask: Is the statement factual? Am I qualified? Is my judgment independent? Is there unacceptable danger? What evidence will I retain? Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Ethics: protect people, tell the truth, stay within competence, avoid conflicts. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Do not falsify records or hide imminent hazards for production. (3) Professional judgment documents basis and residual risk. (4) Push back on illegal or reckless instructions — escalate appropriately. (5) Confidentiality has limits when serious harm is foreseeable. (6) Vendor gifts and conflicts need management. (7) Hierarchy and legal duties outrank convenience ethics of silence. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Illustrative evidence scoring: a report claims 100% training completion for 40 workers. Attendance records show 40 signatures, but practical demonstrations are documented for only 32. If the report's claim is â100% trained and competent,â the verified competency fraction is 32/40 = 0.80 = 80%, so the truthful statement cannot be 100%. The ethical control is not to massage the denominator or redefine competence after the fact; report the 80% verified demonstration status, identify the eight gaps, and correct the system. The arithmetic is simple; the professional judgment is the test. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Assuming a manager's instruction makes an inaccurate statement ethical.; Using confidentiality to justify concealing an imminent unacceptable risk or falsified professional record.; Accepting work outside competence and then signing a report because the deadline is urgent.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Loyalty to employer” is really Balanced with public/worker/environmental duty and truthful judgment; “Confidentiality” is really Important, but not a shield for deception or unacceptable danger; “Qualification” is really Must be represented accurately; “Signature” is really Professional representation of facts/responsibility; “Conflict disclosure” is really Protection of independent professional judgment. Stem-if-then map: if asked to hide an imminent hazard → refuse and escalate to protect people; if asked to sign outside competence → decline or get qualified support; if record falsification requested → refuse; if two answers work → higher hierarchy / system / design; if conflict of interest in vendor selection → disclose and recuse as needed. Scoring favors evidence, owners, verification, and hierarchy-smart controls on ethics professional judgment. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Ethics — who owns the truth in the safety report?",
  cardBack:
    "The professional must report facts truthfully, stay within competence, protect people/environment/property, disclose conflicts, and resist pressure to misrepresent training, risk, qualifications, or test results.",
  teachBackKey:
    "Pass if the answer includes truthful reporting, competence limits, conflict control, and paramount protection of people/environment/property.",
};

export const items: ClassItem[] = [
  exam(T, "A manager asks a CSP to sign a report claiming an exposure study is complete. The CSP has not reviewed the sampling records. What is the ethical response?", [
    "Sign because the manager assumes responsibility.",
    "Do not represent the study as complete; verify the evidence or clearly state the limitation.",
    "Sign but change the font to make it obvious.",
    "Delete the report.",
  ], 1, explain(
    "A professional statement must be factual and within the professional's knowledge and competence.",
    "Identify missing evidence, obtain/review it, or accurately disclose the limitation.",
    "BCSP Code of Ethics: truthful statements and competence.",
    "A transfers but does not remove the professional representation; C is deceptive; D destroys the record rather than correcting it."
  ), "STEM", "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Professional ethics starts with paramount protection of people, environment, and property; honesty, fairness, impartiality, competence, truthful public statements, accurate qualifications, conflict-of-interest control... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Forty workers signed attendance records; 32 have documented hands-on demonstrations. What percentage have verified demonstration evidence?", [
    "20%.",
    "32%.",
    "80%.",
    "100%.",
  ], 2, explain(
    "Use the verified evidence denominator when making a competency statement.",
    "32/40=0.80=80%.",
    "BCSP Code of Ethics on truthful representation; training/competency evidence principles.",
    "A and B confuse raw counts with percentages; D turns attendance into verified competency."
  ), "FORM", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Professional ethics starts with paramount protection of people, environment, and property; honesty, fairness, impartiality, competence, truthful public statements, accurate qualifications, conflict-of-interest control... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A CSP receives a bonus if a safety report concludes that a high-risk change is acceptable. Best first ethical action?", [
    "Keep the bonus secret.",
    "Recognize and disclose/manage the conflict so professional judgment remains independent.",
    "Accept the bonus because it is legal compensation.",
    "Increase the bonus and sign faster.",
  ], 1, explain(
    "Conflicts that could compromise professional judgment should be disclosed and managed.",
    "Identify the incentive, disclose it to the appropriate party, and use recusal/independent review when necessary.",
    "BCSP Code of Ethics: integrity, impartiality, and conflicts of interest.",
    "A hides the issue; C assumes legality makes the judgment independent; D worsens the conflict."
  ), "FIN", "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Professional ethics starts with paramount protection of people, environment, and property; honesty, fairness, impartiality, competence, truthful public statements, accurate qualifications, conflict-of-interest control... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A CSP is asked to approve a chemical compatibility assessment but lacks the necessary chemical-engineering competence. Best response?", [
    "Approve because safety managers are expected to know everything.",
    "Decline the technical sign-off and involve a qualified competent person while retaining appropriate CSP coordination.",
    "Approve and add a disclaimer that the CSP is not qualified.",
    "Guess based on a similar solvent.",
  ], 1, explain(
    "Professional assignments should be accepted only when the individual is qualified for the specific field involved.",
    "Identify the competence gap, obtain qualified technical support, and document the basis of the decision.",
    "BCSP Code of Ethics on undertaking assignments only when qualified.",
    "A ignores scope; C still makes the unqualified representation; D replaces competence with guessing."
  ), "TOOL", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Professional ethics starts with paramount protection of people, environment, and property; honesty, fairness, impartiality, competence, truthful public statements, accurate qualifications, conflict-of-interest control... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A falsified inspection record shows a safety-critical barrier was tested when it was not. A supervisor says the record is confidential. What is the CSP's best ethical framing?", [
    "Confidentiality always prohibits escalation.",
    "The CSP should preserve objective evidence and use the appropriate reporting/escalation path because falsification and unacceptable risk are not cured by secrecy.",
    "Delete the record.",
    "Change the test date without telling anyone.",
  ], 1, explain(
    "Confidentiality must be balanced with professional duty to address danger and misconduct.",
    "Preserve the evidence, document the facts, and escalate through the appropriate organizational/professional/legal path.",
    "BCSP Code of Ethics on paramount safety, truthful conduct, and professional misconduct.",
    "A treats confidentiality as absolute; C destroys evidence; D falsifies again."
  ), "STEM", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Professional ethics starts with paramount protection of people, environment, and property; honesty, fairness, impartiality, competence, truthful public statements, accurate qualifications, conflict-of-interest control... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Which statement is the most defensible professional qualification claim?", [
    "I am an expert in every safety discipline.",
    "I have four years of experience, a CSP, and specialized training in the specific field I am reporting on.",
    "My title proves I am qualified in chemical engineering.",
    "The client believes I am qualified, so the claim is accurate.",
  ], 1, explain(
    "Professional credentials and experience should be represented accurately without overstating scope.",
    "Compare each claim against verifiable education, experience, and credentials.",
    "BCSP Code of Ethics on accurate representation of qualifications.",
    "A is overbroad; C substitutes title for qualification; D makes truth dependent on client belief."
  ), "STEM", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Professional ethics starts with paramount protection of people, environment, and property; honesty, fairness, impartiality, competence, truthful public statements, accurate qualifications, conflict-of-interest control... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A public statement says an exposure is “safe” based on one unrepresentative area sample. Best ethical correction?", [
    "Keep “safe” because the number was low.",
    "State the evidence accurately, describe the sampling limitation, and avoid a broader claim than the data support.",
    "Delete the sampling date.",
    "Call the sample a personal sample after the fact.",
  ], 1, explain(
    "Public/professional statements should be objective and truthful, with conclusions limited to the evidence.",
    "Describe the sample type and limitation; do not generalize beyond what the data can support.",
    "BCSP Code of Ethics on objective and truthful public statements.",
    "A overgeneralizes; C reduces traceability; D fabricates evidence."
  ), "STEM", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Professional ethics starts with paramount protection of people, environment, and property; honesty, fairness, impartiality, competence, truthful public statements, accurate qualifications, conflict-of-interest control... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A client wants a cheaper consultant but asks the CSP to keep a known hazard out of the report to preserve the contract. Best response?", [
    "Remove it to protect the business relationship.",
    "Report the hazard objectively and address it through the appropriate professional/management path.",
    "Charge a higher fee and then remove it.",
    "Mention it verbally but omit it from the record.",
  ], 1, explain(
    "Commercial pressure does not justify hiding a material safety risk from the professional record.",
    "Document the fact and the basis, communicate it to the relevant decision makers, and escalate when required.",
    "BCSP Code of Ethics on paramount protection and impartiality.",
    "A and C sacrifice judgment for money; D creates a misleading record."
  ), "FIN", "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Professional ethics starts with paramount protection of people, environment, and property; honesty, fairness, impartiality, competence, truthful public statements, accurate qualifications, conflict-of-interest control... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A colleague reports misconduct by another certificant. Which response best fits professional ethics?", [
    "Ignore it because it is not your department.",
    "Take appropriate steps to bring substantiated misconduct to the attention of BCSP as applicable.",
    "Post it publicly before verifying facts.",
    "Destroy the evidence to avoid conflict.",
  ], 1, explain(
    "The Code addresses action regarding professional misconduct while requiring objective conduct.",
    "Verify facts, preserve evidence, and follow the appropriate professional reporting path.",
    "BCSP Code of Ethics provision on professional misconduct.",
    "A ignores duty; C risks an unverified public allegation; D destroys evidence."
  ), "TOOL", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Professional ethics starts with paramount protection of people, environment, and property; honesty, fairness, impartiality, competence, truthful public statements, accurate qualifications, conflict-of-interest control... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A CSP is pressured to approve a control that reduces schedule delay but leaves a fatal hazard unaddressed. Which principle has priority?", [
    "Schedule.",
    "Safety and health of people, with truthful advice about the unacceptable risk.",
    "Client satisfaction.",
    "Budget only.",
  ], 1, explain(
    "BCSP ethics places protection of people, environment, and property at the forefront of professional duties.",
    "Identify the residual risk, communicate it objectively, and recommend appropriate controls.",
    "BCSP Code of Ethics, paramount safety/health/environment/property duty.",
    "A, C, and D put organizational convenience ahead of professional duty."
  ), "HIER", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Professional ethics starts with paramount protection of people, environment, and property; honesty, fairness, impartiality, competence, truthful public statements, accurate qualifications, conflict-of-interest control... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A CSP discovers a personal relationship with a vendor whose equipment the CSP is evaluating. What is the best first step?", [
    "Hide the relationship because the equipment is good.",
    "Disclose the potential conflict and manage independence through the appropriate process.",
    "Give the vendor the contract immediately.",
    "Change the evaluation score without documentation.",
  ], 1, explain(
    "Conflicts should be disclosed and managed to protect independent professional judgment.",
    "Identify the relationship, disclose it, and use recusal or independent review as appropriate.",
    "BCSP Code of Ethics on conflicts of interest and integrity.",
    "A hides the conflict; C abuses it; D creates an undocumented manipulation."
  ), "FIN", "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Professional ethics starts with paramount protection of people, environment, and property; honesty, fairness, impartiality, competence, truthful public statements, accurate qualifications, conflict-of-interest control... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A CSP makes a technical mistake in a report and discovers it after distribution. Best ethical action?", [
    "Quietly replace the file.",
    "Correct the error transparently, notify affected recipients as appropriate, and preserve the correction trail.",
    "Blame the analyst regardless of facts.",
    "Delete all copies.",
  ], 1, explain(
    "Integrity includes correcting professional errors honestly rather than creating a false record.",
    "Identify the error, determine impact, correct the report, communicate the correction, and retain traceability.",
    "BCSP Code of Ethics on honesty, integrity, and truthful statements.",
    "A and D impair record integrity; C shifts accountability without facts."
  ), "STEM", "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Professional ethics starts with paramount protection of people, environment, and property; honesty, fairness, impartiality, competence, truthful public statements, accurate qualifications, conflict-of-interest control... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
