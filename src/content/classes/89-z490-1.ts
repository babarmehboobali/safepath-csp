import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D7.03";

export const classFields: ClassFields = {
  hook: "After three LOTO near-misses, operations wants an 80-slide lunch-and-learn, a 10-question quiz at 70%, and a signature sheet so “Z490 is done.” Maintainers still have no practice on the actual disconnects. You are the CSP. The question is whether a quiz is a training program.",
  hookOilGas: `After three LOTO near-misses on a skid, operations wants an 80-slide lunch-and-learn, a 10-question quiz at 70%, and a signature sheet so âZ490 is done.â Technicians still have no practice on the actual disconnects. You are the CSP. The question is whether a quiz is a training program.`,
  hookConstruction: `After three LOTO near-misses, the superintendent wants an 80-slide lunch-and-learn, a 10-question quiz at 70%, and a signature sheet so âZ490 is done.â Crews still have no practice on the actual disconnects. You are the CSP. The question is whether a quiz is a training program.`,
  rule: "ANSI/ASSP Z490.1 is a training-program standard, not a quiz score. Accepted practice runs administration, development, delivery, and evaluation: needs assessment, design for adult learners and the actual task, qualified facilitators, delivery (including OJT/practice), and evaluation of learning and of on-the-job performance. A signature sheet is attendance. A 70% quiz is not skill. If the work still requires a designed disconnect and an interlock, training is residual — hierarchy is not repealed by Z490. If two answers work, take higher hierarchy / system / design, then a real program over a slide deck.",
  modelCaption:
    "Four boxes: ADMIN (scope, resources, qualified people) → DEVELOP (needs, objectives, content for the task) → DELIVER (practice/OJT, not monologue) → EVALUATE (learning and on-the-job performance). A red stamp on a quiz sheet: ATTENDANCE ≠ SKILL. Caption: Z490.1 is a program; a signature is not competency.",
  workedCase:
    "LOTO near-misses. (1) Needs: is the gap knowledge, skill, motivation, or a missing designed isolation point? If the disconnect is out of sight, training will not relocate it (Class 5/1). (2) If skill is truly missing: objectives in observable terms (“isolate, lock, try-out this press”), not “understand LOTO.” (3) Delivery: practice on the equipment or a faithful sim; 80 slides after lunch fail andragogy (Class 74). (4) Evaluation: watch a try-out on the job, not only a 10-item quiz. (5) Administration: qualified trainer, records that mean something, refresh when the job or the equipment changes (MoC). AI can draft slides; it cannot sign off a try-out (Class 75).",
  trapsJson: traps(
    "Calling a quiz-and-signature packet a Z490.1 program.",
    "Using training as the primary control when a designed isolation/guard is still open (HIER).",
    "Skipping needs assessment so you train the wrong gap (knowledge vs skill vs workplace design).",
  ),
  contrastJson: contrast([
    { looksLike: "80-slide lunch-and-learn", actually: "Monologue — not adult delivery of a skill" },
    { looksLike: "10-question quiz at 70%", actually: "A knowledge sample — not on-the-job performance" },
    { looksLike: "Signature sheet", actually: "Attendance / administration artifact, not competency" },
    { looksLike: "Z490.1 program", actually: "Admin + develop + deliver + evaluate, tied to the task" },
    { looksLike: "Training as the fix for an unguarded press", actually: "Hierarchy miss — design first" },
  ]),
  mustScoreJson: mustScore(
    "Z490.1 is a training consensus standard covering training program management and delivery quality.",
    "Needs assessment, design, delivery, evaluation, and recordkeeping appear.",
    "Qualified trainers and content validity matter.",
    "Do not confuse Z490.1 with a substitute for hierarchy controls.",
    "Evaluation beyond attendance is expected.",
    "Documentation supports competence systems.",
    "Align training programs to risk and roles.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "Z490.1 used to justify training instead of guarding", pick: "reject \u2014 still engineer" },
    { ifStem: "no evaluation beyond sign-in", pick: "add learning/performance evaluation" },
    { ifStem: "unqualified trainer for high-risk content", pick: "use qualified trainers" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "program lacks needs assessment", pick: "assess needs first" },
  ),

  brief: `ANSI/ASSP Z490.1 is a training-program standard, not a quiz score. Accepted practice runs administration, development, delivery, and evaluation: needs assessment, design for adult learners and the actual task, qualified facilitators, delivery (including OJT/practice), and evaluation of learning and of on-the-job performance. A signature sheet is attendance. A 70% quiz is not skill. If the work If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
ANSI/ASSP Z490.1 is a training-program standard, not a quiz score. Accepted practice runs administration, development, delivery, and evaluation: needs assessment, design for adult learners and the actual task, qualified facilitators, delivery (including OJT/practice), and evaluation of learning and of on-the-job performance. A signature sheet is attendance. A 70% quiz is not skill. If the work still requires a designed disconnect and an interlock, training is residual â hierarchy is not repealed by Z490. If two answers work, take higher hierarchy / system / design, then a real program over a slide deck. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
After three LOTO near-misses, operations wants an 80-slide lunch-and-learn, a 10-question quiz at 70%, and a signature sheet so âZ490 is done.â Maintainers still have no practice on the actual disconnects. You are the CSP. The question is whether a quiz is a training program. Oil-and-gas skin: After three LOTO near-misses on a skid, operations wants an 80-slide lunch-and-learn, a 10-question quiz at 70%, and a signature sheet so âZ490 is done.â Technicians still have no practice on the actual disconnects. You are the CSP. Construction skin: After three LOTO near-misses, the superintendent wants an 80-slide lunch-and-learn, a 10-question quiz at 70%, and a signature sheet so âZ490 is done.â Crews still have no practice on the actual disconnects. You are the CSP. Work the case: LOTO near-misses. (1) Needs: is the gap knowledge, skill, motivation, or a missing designed isolation point? If the disconnect is out of sight, training will not relocate it (Class 5/1). (2) If skill is truly missing: objectives in observable terms (âisolate, lock, try-out this pressâ), not âunderstand LOTO.â (3) Delivery: practice on the equipment or a faithful sim; 80 slides after lunch fail andragogy (Class 74). (4) Evaluation: watch a try-out on the job, not only a 10-item quiz. (5) Administration: qualified trainer, records that mean something, refresh when the job or the equipment changes (MoC). AI can draft slides; it cannot sign off a try-out (Class 75). Classic traps: Calling a quiz-and-signature packet a Z490.1 program.; Using training as the primary control when a designed isolation/guard is still open (HIER).; Skipping needs assessment so you train the wrong gap (knowledge vs skill vs workplace design).. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for z490 1. Verify whether a higher system or design fix is still open. Contrast labels: 80-slide lunch-and-learn is actually Monologue — not adult delivery of a skill; 10-question quiz at 70% is actually A knowledge sample — not on-the-job performance; Signature sheet is actually Attendance / administration artifact, not competency; Z490.1 program is actually Admin + develop + deliver + evaluate, tied to the task; Training as the fix for an unguarded press is actually Hierarchy miss — design first. If the stem shows Z490.1 used to justify training instead of guarding, pick reject \u2014 still engineer. If the stem shows no evaluation beyond sign-in, pick add learning/performance evaluation. If the stem shows unqualified trainer for high-risk content, pick use qualified trainers. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows program lacks needs assessment, pick assess needs first. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Z490.1 — is a quiz a program? Training vs a missing guard sits in CSP-11 Domain 7 Training and Competency. The exam tests whether you apply the rule when a package already looks complete. Core rule: ANSI/ASSP Z490.1 is a training-program standard, not a quiz score. Accepted practice runs administration, development, delivery, and evaluation: needs assessment, design for adult learners and the actual task, qualified facilitators, delivery (including OJT/practice), and evaluation of learning and of on-the-job performance. A signature sheet is attendance. A 70% quiz is not skill. If the work still requires a designed disconnect and an interlock, training is residual â hierarchy is not repealed by Z490. If two answers work, take higher hierarchy / system / design, then a real program over a slide deck. Field context: After three LOTO near-misses, operations wants an 80-slide lunch-and-learn, a 10-question quiz at 70%, and a signature sheet so âZ490 is done.â Maintainers still have no practice on the actual disconnects. You are the CSP. The question is whether a quiz is a training program. The oil-and-gas skin shifts the same decision into production pressure: After three LOTO near-misses on a skid, operations wants an 80-slide lunch-and-learn, a 10-question quiz at 70%, and a signature sheet so âZ490 is done.â Technicians still have no practice on the actual disconnects. You are the CSP. The construction skin shifts it into schedule and trade stacking: After three LOTO near-misses, the superintendent wants an 80-slide lunch-and-learn, a 10-question quiz at 70%, and a signature sheet so âZ490 is done.â Crews still have no practice on the actual disconnects. You are the CSP. Model caption for this class: Four boxes: ADMIN (scope, resources, qualified people) â DEVELOP (needs, objectives, content for the task) â DELIVER (practice/OJT, not monologue) â EVALUATE (learning and on-the-job performance). A red stamp on a quiz sheet: ATTENDANCE â  SKILL. Caption: Z490.1 is a program; a signature is not competency. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Z490.1 is a training consensus standard covering training program management and delivery quality. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Needs assessment, design, delivery, evaluation, and recordkeeping appear. (3) Qualified trainers and content validity matter. (4) Do not confuse Z490.1 with a substitute for hierarchy controls. (5) Evaluation beyond attendance is expected. (6) Documentation supports competence systems. (7) Align training programs to risk and roles. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: LOTO near-misses. (1) Needs: is the gap knowledge, skill, motivation, or a missing designed isolation point? If the disconnect is out of sight, training will not relocate it (Class 5/1). (2) If skill is truly missing: objectives in observable terms (âisolate, lock, try-out this pressâ), not âunderstand LOTO.â (3) Delivery: practice on the equipment or a faithful sim; 80 slides after lunch fail andragogy (Class 74). (4) Evaluation: watch a try-out on the job, not only a 10-item quiz. (5) Administration: qualified trainer, records that mean something, refresh when the job or the equipment changes (MoC). AI can draft slides; it cannot sign off a try-out (Class 75). Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Calling a quiz-and-signature packet a Z490.1 program.; Using training as the primary control when a designed isolation/guard is still open (HIER).; Skipping needs assessment so you train the wrong gap (knowledge vs skill vs workplace design).. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “80-slide lunch-and-learn” is really Monologue — not adult delivery of a skill; “10-question quiz at 70%” is really A knowledge sample — not on-the-job performance; “Signature sheet” is really Attendance / administration artifact, not competency; “Z490.1 program” is really Admin + develop + deliver + evaluate, tied to the task; “Training as the fix for an unguarded press” is really Hierarchy miss — design first. Stem-if-then map: if Z490.1 used to justify training instead of guarding → reject \u2014 still engineer; if no evaluation beyond sign-in → add learning/performance evaluation; if unqualified trainer for high-risk content → use qualified trainers; if two answers work → higher hierarchy / system / design; if program lacks needs assessment → assess needs first. Scoring favors evidence, owners, verification, and hierarchy-smart controls on z490 1. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Z490.1 — is a quiz a program? Training vs a missing guard?",
  cardBack:
    "Program: admin, develop, deliver, evaluate. Needs first. Practice the task. Quiz/signature ≠ skill. Hierarchy still wins if design is open. Attractive wrong answer: 80 slides and 70%. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence describes Z490.1 as a training program (needs, design, delivery/practice, evaluation of performance), says a quiz/signature is not skill, and keeps hierarchy above training when design is still open.",
};

export const items: ClassItem[] = [
  exam(T, "Three LOTO near-misses. An 80-slide lunch deck, 70% quiz, and signature sheet are proposed. Practice on the disconnects is still possible. Best Z490.1-aligned move?", [
    "Approve the packet — a quiz is evaluation.",
    "Needs assessment, then practice-based delivery on the actual isolation/try-out, with on-the-job performance checks. Slides and a 70% quiz are not a program and not skill.",
    "Approve if the quiz is 80% instead of 70%.",
    "Approve if everyone signs within 8 hours (TIME).",
  ], 1, "Quiz-and-signature is attendance theater. Practice the task.", "HIER", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "ANSI/ASSP Z490.1 is a training-program standard, not a quiz score. Accepted practice runs administration, development, delivery, and evaluation: needs assessment, design for adult learners and the actual task, qualifi... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "The press disconnect is out of sight behind a vessel. Training is proposed as the primary fix. Best CSP call?", [
    "Train harder — Z490 repeals hierarchy.",
    "Relocate or redesign the disconnect (PtD). Training cannot create line-of-sight. Residual LOTO skill is trained after the design move.",
    "Quiz on the vessel drawing.",
    "Insurance for missing disconnects (FIN).",
  ], 1, "Z490 does not outrank hierarchy.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "ANSI/ASSP Z490.1 is a training-program standard, not a quiz score. Accepted practice runs administration, development, delivery, and evaluation: needs assessment, design for adult learners and the actual task, qualifi... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Which piece is administration under a Z490.1-style program?", [
    "The 80th slide’s animation.",
    "Scope, resources, qualified developers/instructors, triggers to update when the job/equipment changes, and records that map people to objectives.",
    "The pizza at lunch.",
    "The RPN of the quiz font.",
  ], 1, "Admin is the system around the course, not a decoration.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "ANSI/ASSP Z490.1 is a training-program standard, not a quiz score. Accepted practice runs administration, development, delivery, and evaluation: needs assessment, design for adult learners and the actual task, qualifi... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Learners pass a 10-item quiz but cannot complete try-out on the press. What failed first?", [
    "Nothing — quiz is competency.",
    "Evaluation (and likely delivery/needs): Z490 expects performance on the task, not only knowledge sampling. A quiz is not skill.",
    "1904.39 — they should have reported the quiz score in 8 hours.",
    "PELTLV — 70% is below the PEL.",
  ], 1, "Performance vs knowledge. TIME/PELTLV are distractors.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "ANSI/ASSP Z490.1 is a training-program standard, not a quiz score. Accepted practice runs administration, development, delivery, and evaluation: needs assessment, design for adult learners and the actual task, qualifi... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Last sentence: “The gap is a missing interlock, not knowledge.” Someone still buys a content library. Best flag?", [
    "Libraries satisfy any needs assessment.",
    "STEM: needs said the intervention is design. Buying training (FIN/HIER) treats the wrong gap. Specify the interlock; train residual use after it exists.",
    "Libraries are PHA.",
    "Libraries start the 24-hour clock.",
  ], 1, "Needs assessment can say “do not train — redesign.”", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "ANSI/ASSP Z490.1 is a training-program standard, not a quiz score. Accepted practice runs administration, development, delivery, and evaluation: needs assessment, design for adult learners and the actual task, qualifi... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Who is the better Z490-aligned facilitator for press LOTO practice?", [
    "A charismatic speaker who has never locked the press.",
    "A qualified person who can perform and coach the authentic task (subject-matter plus facilitation), even if their slides are plainer.",
    "A generative-AI avatar with no on-equipment check.",
    "Whoever owns the pizza budget (FIN).",
  ], 1, "Qualified trainer ≠ speaker. AI drafts; it does not try-out.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "ANSI/ASSP Z490.1 is a training-program standard, not a quiz score. Accepted practice runs administration, development, delivery, and evaluation: needs assessment, design for adult learners and the actual task, qualifi... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a municipal water-plant retrofit. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Which analysis belongs before writing objectives.", [
    "FMEA on slide color.",
    "Needs assessment / task analysis (what the job actually requires, including whether training is the right intervention).",
    "FTA after the first quiz failure only.",
    "Pareto of signature-sheet ink.",
  ], 1, "Wrong tool if it cannot set objectives or stop a useless course.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "ANSI/ASSP Z490.1 is a training-program standard, not a quiz score. Accepted practice runs administration, development, delivery, and evaluation: needs assessment, design for adult learners and the actual task, qualifi... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "MoC installs a new energy source. Training records are current as of last year. Best program move?", [
    "Do nothing — annual folklore covers MoC.",
    "Update the program: new objectives, practice on the new isolation, performance check. Z490 administration includes change triggers, not only a calendar.",
    "Wait 8 hours then show the old movie (TIME).",
    "Buy insurance for the new energy (FIN).",
  ], 1, "Change triggers training. Calendar folklore is not MoC.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "ANSI/ASSP Z490.1 is a training-program standard, not a quiz score. Accepted practice runs administration, development, delivery, and evaluation: needs assessment, design for adult learners and the actual task, qualifi... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A site uses 70% as “passing.” Someone treats 70% as a 70 dBA noise PEL. What happened?", [
    "Correct — 70 is always a PEL.",
    "UNIT/PELTLV mix: a quiz cut-score is not an exposure limit. Do not import OEL numbers onto evaluation.",
    "Correct if NIOSH REL is 70.",
    "Correct if 5 dB exchange is applied to scores.",
  ], 1, "Do not mix Domain 6 tables with Domain 7 scores.", "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "ANSI/ASSP Z490.1 is a training-program standard, not a quiz score. Accepted practice runs administration, development, delivery, and evaluation: needs assessment, design for adult learners and the actual task, qualifi... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Effectiveness evidence offered: everyone signed, pizza was rated 5/5. Best Z490-aligned ask?", [
    "Accept — smiles are Level 4.",
    "Ask for on-the-job performance (try-outs completed, near-miss drop on that task). Attendance and smiles are not effectiveness.",
    "Accept if signatures were within 24 hours (TIME).",
    "Accept if the pizza was capitalized (FIN).",
  ], 1, "Evaluation of performance and results, not catering.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "ANSI/ASSP Z490.1 is a training-program standard, not a quiz score. Accepted practice runs administration, development, delivery, and evaluation: needs assessment, design for adult learners and the actual task, qualifi... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Two remaining answers: an interlocked cover still purchasable this quarter, or a Z490-branded e-learning only. Best pick?", [
    "E-learning — standards beat hardware.",
    "Specify the cover (higher hierarchy). Then train residual interaction with the cover under a real program.",
    "E-learning plus extra workers’ compensation (FIN).",
    "Delay both until the next fatality clock (TIME).",
  ], 1, "Z490 never licenses skipping engineering.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "ANSI/ASSP Z490.1 is a training-program standard, not a quiz score. Accepted practice runs administration, development, delivery, and evaluation: needs assessment, design for adult learners and the actual task, qualifi... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a pharma suite changeover. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Least consistent with Z490.1 as accepted training practice.", [
    "Needs assessment that can choose redesign over training.",
    "OJT try-out scored on the authentic disconnect.",
    "An 80-slide monologue, 70% quiz, and signature sheet after three near-misses, with out-of-sight disconnects unchanged.",
    "Qualified facilitator and records mapped to objectives.",
  ], 2, "The packet is the trap the hook named.", "HIER", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "ANSI/ASSP Z490.1 is a training-program standard, not a quiz score. Accepted practice runs administration, development, delivery, and evaluation: needs assessment, design for adult learners and the actual task, qualifi... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
