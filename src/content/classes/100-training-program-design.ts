import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D7.02";
const explain = (core: string, calc: string, standards: string, distractors: string) =>
  `Core Rule: ${core} Calculation Steps: ${calc} Standards Cited: ${standards} Why Each Distractor Fails: ${distractors}`;

export const classFields: ClassFields = {
  hook:
    "An organization wants an 80-slide LOTO course because three near misses occurred. The existing class has a 30-question quiz, attendance is 100%, and field observations show workers still skip verification. You are the CSP. The task is to design training around the performance gap rather than around slide count.",
  hookOilGas: `A drilling contractor wants a generic two-hour LOTO presentation for 200 workers after isolation near-misses. The real issue is that crews cannot identify all energy sources and do not demonstrate try-out. You are the CSP. Build the program around competence and field performance, not attendance.`,
  hookConstruction: `A construction project plans a generic fall-protection seminar after three incidents. The workers' actual tasks involve leading edges, MEWPs, anchors, and rescue. You are the CSP. The design decision is whether the program targets the real performance requirement and provides the right practice and evaluation.`,
  rule:
    "Training-program development follows a disciplined sequence: needs assessment → measurable objectives → content/design → delivery method and materials → practice/feedback → assessment/evaluation → improvement. Objectives should describe observable performance, conditions, and criteria when appropriate. Match modality to the task: knowledge may use classroom/online learning; psychomotor or high-risk skills require realistic practice, demonstration, simulation, coaching, or OJT. Attendance is not competence, and a quiz is not proof of field performance by itself.",
  modelCaption:
    "Program design loop: NEED → OBJECTIVE → CONTENT → PRACTICE → FEEDBACK → ASSESSMENT → FIELD PERFORMANCE → IMPROVE. Under it: KNOW / SHOW / APPLY. A red cross over “attendance = competence.”",
  workedCase:
    "Illustrative evaluation arithmetic: 50 workers complete a knowledge test; 46 pass = 92%. A practical isolation demonstration is required for competence, and 40 of the 50 pass it correctly on the first attempt = 80%. If the program's competency criterion is successful demonstration, reporting “92% competent” would be wrong. The defensible result is 80% first-attempt practical competence, with 10 needing remediation/retest. The gap tells you to improve practice/coaching rather than simply add more slides.",
  trapsJson: traps(
    "Using attendance as the competency measure.",
    "Writing vague objectives such as “understand LOTO” instead of observable performance.",
    "Choosing online slides for a task that requires hands-on demonstration and safe equipment practice.",
  ),
  contrastJson: contrast([
    { looksLike: "Attendance", actually: "Exposure to the program — not competence" },
    { looksLike: "Quiz pass rate", actually: "Evidence of some knowledge, not automatically field performance" },
    { looksLike: "Objective", actually: "Observable performance with conditions/criteria where appropriate" },
    { looksLike: "Simulation/OJT", actually: "Practice matched to task performance" },
    { looksLike: "Evaluation", actually: "Evidence used to judge and improve the program" },
  ]),
  mustScoreJson: mustScore(
    "Training program design: needs \u2192 objectives \u2192 content \u2192 delivery \u2192 evaluation \u2192 records.",
    "Curriculum maps to roles and critical tasks.",
    "Qualify designers/trainers; validate content.",
    "Integrate hierarchy messages \u2014 never train PPE-first as doctrine when engineering open.",
    "Evaluate transfer and results, not only reaction.",
    "Governance updates programs after MoC/incidents.",
    "Resources and schedule must match risk.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "program skips needs assessment", pick: "assess needs first" },
    { ifStem: "PPE-first doctrine in materials", pick: "rewrite to hierarchy" },
    { ifStem: "no transfer evaluation", pick: "add on-job effectiveness checks" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "MoC ignored in curriculum", pick: "update program" },
  ),

  brief: `Training-program development follows a disciplined sequence: needs assessment â measurable objectives â content/design â delivery method and materials â practice/feedback â assessment/evaluation â improvement. Objectives should describe observable performance, conditions, and criteria when appropriate. Match modality to the task: knowledge may use classroom/online learning; psychomotor or high-risk skills require realistic practice, demonstration, simulation, coaching, or If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Training-program development follows a disciplined sequence: needs assessment â measurable objectives â content/design â delivery method and materials â practice/feedback â assessment/evaluation â improvement. Objectives should describe observable performance, conditions, and criteria when appropriate. Match modality to the task: knowledge may use classroom/online learning; psychomotor or high-risk skills require realistic practice, demonstration, simulation, coaching, or OJT. Attendance is not competence, and a quiz is not proof of field performance by itself. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
An organization wants an 80-slide LOTO course because three near misses occurred. The existing class has a 30-question quiz, attendance is 100%, and field observations show workers still skip verification. You are the CSP. The task is to design training around the performance gap rather than around slide count. Oil-and-gas skin: A drilling contractor wants a generic two-hour LOTO presentation for 200 workers after isolation near-misses. The real issue is that crews cannot identify all energy sources and do not demonstrate try-out. You are the CSP. Build the program around competence and field performance, not attendance. Construction skin: A construction project plans a generic fall-protection seminar after three incidents. The workers' actual tasks involve leading edges, MEWPs, anchors, and rescue. You are the CSP. The design decision is whether the program targets the real performance requirement and provides the right practice and evaluation. Work the case: Illustrative evaluation arithmetic: 50 workers complete a knowledge test; 46 pass = 92%. A practical isolation demonstration is required for competence, and 40 of the 50 pass it correctly on the first attempt = 80%. If the program's competency criterion is successful demonstration, reporting â92% competentâ would be wrong. The defensible result is 80% first-attempt practical competence, with 10 needing remediation/retest. The gap tells you to improve practice/coaching rather than simply add more slides. Classic traps: Using attendance as the competency measure.; Writing vague objectives such as “understand LOTO” instead of observable performance.; Choosing online slides for a task that requires hands-on demonstration and safe equipment practice.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for training program design. Verify whether a higher system or design fix is still open. Contrast labels: Attendance is actually Exposure to the program — not competence; Quiz pass rate is actually Evidence of some knowledge, not automatically field performance; Objective is actually Observable performance with conditions/criteria where appropriate; Simulation/OJT is actually Practice matched to task performance; Evaluation is actually Evidence used to judge and improve the program. If the stem shows program skips needs assessment, pick assess needs first. If the stem shows PPE-first doctrine in materials, pick rewrite to hierarchy. If the stem shows no transfer evaluation, pick add on-job effectiveness checks. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows MoC ignored in curriculum, pick update program. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Training design — slides, quiz, or demonstrated competence sits in CSP-11 Domain 7 Training and Competency. The exam tests whether you apply the rule when a package already looks complete. Core rule: Training-program development follows a disciplined sequence: needs assessment â measurable objectives â content/design â delivery method and materials â practice/feedback â assessment/evaluation â improvement. Objectives should describe observable performance, conditions, and criteria when appropriate. Match modality to the task: knowledge may use classroom/online learning; psychomotor or high-risk skills require realistic practice, demonstration, simulation, coaching, or OJT. Attendance is not competence, and a quiz is not proof of field performance by itself. Field context: An organization wants an 80-slide LOTO course because three near misses occurred. The existing class has a 30-question quiz, attendance is 100%, and field observations show workers still skip verification. You are the CSP. The task is to design training around the performance gap rather than around slide count. The oil-and-gas skin shifts the same decision into production pressure: A drilling contractor wants a generic two-hour LOTO presentation for 200 workers after isolation near-misses. The real issue is that crews cannot identify all energy sources and do not demonstrate try-out. You are the CSP. Build the program around competence and field performance, not attendance. The construction skin shifts it into schedule and trade stacking: A construction project plans a generic fall-protection seminar after three incidents. The workers' actual tasks involve leading edges, MEWPs, anchors, and rescue. You are the CSP. The design decision is whether the program targets the real performance requirement and provides the right practice and evaluation. Model caption for this class: Program design loop: NEED â OBJECTIVE â CONTENT â PRACTICE â FEEDBACK â ASSESSMENT â FIELD PERFORMANCE â IMPROVE. Under it: KNOW / SHOW / APPLY. A red cross over âattendance = competence.â Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Training program design: needs → objectives → content → delivery → evaluation → records. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Curriculum maps to roles and critical tasks. (3) Qualify designers/trainers; validate content. (4) Integrate hierarchy messages — never train PPE-first as doctrine when engineering open. (5) Evaluate transfer and results, not only reaction. (6) Governance updates programs after MoC/incidents. (7) Resources and schedule must match risk. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Illustrative evaluation arithmetic: 50 workers complete a knowledge test; 46 pass = 92%. A practical isolation demonstration is required for competence, and 40 of the 50 pass it correctly on the first attempt = 80%. If the program's competency criterion is successful demonstration, reporting â92% competentâ would be wrong. The defensible result is 80% first-attempt practical competence, with 10 needing remediation/retest. The gap tells you to improve practice/coaching rather than simply add more slides. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Using attendance as the competency measure.; Writing vague objectives such as “understand LOTO” instead of observable performance.; Choosing online slides for a task that requires hands-on demonstration and safe equipment practice.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Attendance” is really Exposure to the program — not competence; “Quiz pass rate” is really Evidence of some knowledge, not automatically field performance; “Objective” is really Observable performance with conditions/criteria where appropriate; “Simulation/OJT” is really Practice matched to task performance; “Evaluation” is really Evidence used to judge and improve the program. Stem-if-then map: if program skips needs assessment → assess needs first; if PPE-first doctrine in materials → rewrite to hierarchy; if no transfer evaluation → add on-job effectiveness checks; if two answers work → higher hierarchy / system / design; if MoC ignored in curriculum → update program. Scoring favors evidence, owners, verification, and hierarchy-smart controls on training program design. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Training design — slides, quiz, or demonstrated competence?",
  cardBack:
    "Needs assessment → measurable objectives → task-matched content/method → practice → assessment → field-performance evidence → improvement. Attendance and quiz scores are not automatic competence.",
  teachBackKey:
    "Pass if the answer includes measurable objectives, task-matched practice/evaluation, and the distinction between attendance, knowledge, and field competence.",
};

export const items: ClassItem[] = [
  exam(T, "Which sequence is the strongest training-program design sequence?", [
    "Slides → attendance → certificate → needs assessment.",
    "Needs assessment → objectives → design/content → practice/delivery → assessment/evaluation → improvement.",
    "Quiz → logo → procurement → attendance.",
    "Training vendor → lunch → certificate → audit.",
  ], 1, explain(
    "A training program should be designed from a real need and measurable outcome, then delivered and evaluated.",
    "Follow the lifecycle in the order stated; each stage informs the next.",
    "CSP-11 D7.02 and ANSI/ASSP Z490.1 program-management concepts.",
    "A starts with media and treats attendance as proof; C and D are administrative sequences without a learning-design logic."
  ), "TOOL", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Training-program development follows a disciplined sequence: needs assessment → measurable objectives → content/design → delivery method and materials → practice/feedback → assessment/evaluation → improvement. Objecti... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A LOTO objective says “understand isolation.” What is the best improvement?", [
    "Make the font larger.",
    "Rewrite it as observable performance with conditions and criteria.",
    "Add more animations.",
    "Delete the assessment.",
  ], 1, explain(
    "Good objectives make the expected learner performance observable and assessable.",
    "Specify what the learner must do, under what conditions, and what counts as acceptable performance.",
    "CSP-11 D7.02 training-program development and adult-learning practice.",
    "A and C change presentation cosmetics; D removes evidence rather than improving the objective."
  ), "TOOL", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Training-program development follows a disciplined sequence: needs assessment → measurable objectives → content/design → delivery method and materials → practice/feedback → assessment/evaluation → improvement. Objecti... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Fifty workers take a practical LOTO demonstration; 40 pass first time. First-attempt practical competence rate?", [
    "40%.",
    "50%.",
    "80%.",
    "92%.",
  ], 2, explain(
    "Competence rate uses the number meeting the practical criterion divided by those assessed.",
    "40/50=0.80=80%.",
    "CSP-11 D7.02/D7.04 training measurement.",
    "A drops the zero; B reports the denominator; D is the knowledge-test result in the scenario, not the practical rate."
  ), "FORM", "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Training-program development follows a disciplined sequence: needs assessment → measurable objectives → content/design → delivery method and materials → practice/feedback → assessment/evaluation → improvement. Objecti... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A course has 46/50 quiz passes but only 40/50 successful hands-on demonstrations. Which figure should be called first-attempt practical competence?", [
    "46/50=92%.",
    "40/50=80%.",
    "100% because everyone attended.",
    "50/50=100%.",
  ], 1, explain(
    "When competence is defined by practical demonstration, the practical result is the relevant measure.",
    "40/50=80%; the 92% figure describes the quiz outcome, not practical competence.",
    "CSP-11 D7.02 training design and D7.04 effectiveness.",
    "A measures knowledge; C measures attendance; D is the denominator treated as the numerator."
  ), "FORM", "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Training-program development follows a disciplined sequence: needs assessment → measurable objectives → content/design → delivery method and materials → practice/feedback → assessment/evaluation → improvement. Objecti... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A lockout task requires hands-on verification. Which delivery method is most directly suited to the final competence demonstration?", [
    "Hands-on practice/simulation/OJT with performance observation.",
    "A longer slide deck only.",
    "A poster.",
    "An attendance sheet.",
  ], 0, explain(
    "A psychomotor/high-risk task should be practiced and assessed in a way that resembles the required performance.",
    "Use demonstration → guided practice → supervised performance → assessment.",
    "CSP-11 D7.02/D7.05 training methods; ANSI/ASSP Z490.1 concepts.",
    "B, C, and D cannot by themselves demonstrate safe physical performance."
  ), "TOOL", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Training-program development follows a disciplined sequence: needs assessment → measurable objectives → content/design → delivery method and materials → practice/feedback → assessment/evaluation → improvement. Objecti... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Workers fail because the machine has no physical energy-isolation point. Best CSP diagnosis before buying training?", [
    "Training alone will fix it.",
    "The problem may be system/design-related; address the engineering deficiency before treating training as the complete control.",
    "Increase the quiz score.",
    "Add a certificate.",
  ], 1, explain(
    "Training is not a substitute for a missing engineering control.",
    "Separate knowledge/skill gaps from equipment/design deficiencies and address the root control problem.",
    "CSP-11 D7.02 plus hierarchy/PtD principles in Domain 1.",
    "A, C, and D are administrative responses to an engineering constraint."
  ), "HIER", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Training-program development follows a disciplined sequence: needs assessment → measurable objectives → content/design → delivery method and materials → practice/feedback → assessment/evaluation → improvement. Objecti... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "An online module teaches fall-protection terminology, but final qualification requires anchor selection and rescue practice. Best design?", [
    "Online module only.",
    "Online knowledge module plus supervised practical demonstration and scenario-based assessment.",
    "Attendance certificate only.",
    "Email a PDF.",
  ], 1, explain(
    "Use online delivery for knowledge and add practice/assessment for physical high-risk skills.",
    "Knowledge prerequisite → demonstration → guided practice → scenario assessment.",
    "CSP-11 D7.02/D7.05.",
    "A, C, and D leave the performance requirement unverified."
  ), "TOOL", "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Training-program development follows a disciplined sequence: needs assessment → measurable objectives → content/design → delivery method and materials → practice/feedback → assessment/evaluation → improvement. Objecti... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Which evidence best shows transfer to the workplace after training?", [
    "Attendance percentage.",
    "Post-course satisfaction score.",
    "Field observation showing the worker consistently performs the target task correctly.",
    "Number of slides delivered.",
  ], 2, explain(
    "Transfer is demonstrated by workplace performance, not merely reaction or exposure to training.",
    "Observe the actual task against the objective and defined criteria.",
    "CSP-11 D7.04 training effectiveness.",
    "A measures attendance; B measures reaction; D measures content volume."
  ), "TOOL", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Training-program development follows a disciplined sequence: needs assessment → measurable objectives → content/design → delivery method and materials → practice/feedback → assessment/evaluation → improvement. Objecti... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A course satisfaction score rises from 4.2 to 4.8/5, but field LOTO errors do not change. What should the CSP conclude?", [
    "Training is proven effective.",
    "Reaction improved, but effectiveness/transfer is not demonstrated; investigate learning and workplace performance.",
    "The field errors no longer matter.",
    "Add more satisfaction questions only.",
  ], 1, explain(
    "Learner reaction is not the same as learning or job performance.",
    "Compare knowledge, demonstrations, observations, and outcome/control evidence against the objective.",
    "CSP-11 D7.04 effectiveness and D7.02 program design.",
    "A confuses reaction with effectiveness; C ignores the safety outcome; D stays at the wrong evidence level."
  ), "STEM", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Training-program development follows a disciplined sequence: needs assessment → measurable objectives → content/design → delivery method and materials → practice/feedback → assessment/evaluation → improvement. Objecti... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A needs assessment identifies that supervisors fail to coach field isolation. Which objective is most aligned?", [
    "Supervisors will enjoy the course.",
    "Supervisors will conduct and document a competent coaching observation using defined criteria.",
    "Supervisors will attend a two-hour lecture.",
    "Supervisors will receive a certificate.",
  ], 1, explain(
    "Training objectives should target the identified performance requirement.",
    "Define the observable coaching action and evidence required to demonstrate it.",
    "CSP-11 D7.02 measurable training objectives.",
    "A, C, and D describe reaction/exposure/administration rather than the desired coaching behavior."
  ), "TOOL", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Training-program development follows a disciplined sequence: needs assessment → measurable objectives → content/design → delivery method and materials → practice/feedback → assessment/evaluation → improvement. Objecti... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A refresher is triggered every year because the calendar says so, despite stable high competence and no process change. Which design principle is stronger?", [
    "Use needs/risk/evidence to determine refresher content and frequency rather than calendar habit alone.",
    "Always repeat the full course monthly.",
    "Never retrain anyone.",
    "Replace training with a poster.",
  ], 0, explain(
    "Training should respond to needs, changes, performance evidence, and risk rather than arbitrary repetition alone.",
    "Review incidents, observations, changes, assessment results, and regulatory/organizational requirements to determine the need.",
    "CSP-11 D7.01/D7.02/D7.03 continuous-improvement logic.",
    "B wastes resources without evidence; C is unsafe/absolute; D replaces learning with passive communication."
  ), "TIME", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Training-program development follows a disciplined sequence: needs assessment → measurable objectives → content/design → delivery method and materials → practice/feedback → assessment/evaluation → improvement. Objecti... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A training budget is cut by 30%. Which element should be protected first for a high-risk physical task?", [
    "The lunch event.",
    "The evidence-producing practice and competence assessment needed to achieve the objective.",
    "The slide animations.",
    "The certificate paper.",
  ], 1, explain(
    "When resources are constrained, preserve the activity directly tied to the safety-critical performance objective.",
    "Prioritize practice/assessment and critical content; reduce cosmetic or low-value delivery features first.",
    "CSP-11 D2.11 resource analysis plus D7.02 training-program design.",
    "A, C, and D consume resources without directly establishing critical competence."
  ), "HIER", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Training-program development follows a disciplined sequence: needs assessment → measurable objectives → content/design → delivery method and materials → practice/feedback → assessment/evaluation → improvement. Objecti... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
