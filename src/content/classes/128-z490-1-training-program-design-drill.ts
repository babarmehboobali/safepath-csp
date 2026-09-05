import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D7.03";

export const classFields: ClassFields = {
  hook: "A vendor video plus a sign-in sheet is labeled Z490.1 compliant. The mixer jam still has no LOTO skill check. Program design is needs, design, delivery, evaluation, competency — not a stamp on attendance.",
  hookOilGas: "Permit CBT with 100% attendance. Field bypasses continue and a trip is still defeated. Improve the program and restore the trip.",
  hookConstruction: "Site orientation DVD. No demonstrated exclusion-zone setup. Redesign the training cycle and the zone hardware.",
  rule: "Z490.1-style programs run a cycle: needs, design, deliver, evaluate, improve. Competency is demonstrated performance. Attendance is not qualification. Training still loses to open engineering.",
  modelCaption: "Needs → design/develop → deliver → evaluate → improve, with competency records. Caption: sign-in ≠ skill; hardware still first.",
  workedCase: "(1) Gap: cannot verify LOTO. (2) Design a practice + try-out check; qualify trainers; record competence. (3) MoC on a new mixer updates the module before startup. Losing answer: stamp Z490 on a sign-in sheet while the guard is muted.",
  trapsJson: traps(
    "Calling attendance competency.",
    "Stamping Z490 on a vendor video without needs assessment.",
    "Training as the primary fix for missing hardware.",
  ),
  contrastJson: contrast([
    { looksLike: "Awareness", actually: "Knows the hazard exists" },
    { looksLike: "Competency", actually: "Demonstrated performance" },
    { looksLike: "Attendance record", actually: "Not qualification" },
    { looksLike: "Needs assessment", actually: "Gap before design" },
    { looksLike: "Management review", actually: "Incidents/MoC update the program" },
    { looksLike: "Z490 stamp on slides", actually: "Name-drop — not a system" },
  ]),
  mustScoreJson: mustScore(
    "Z490.1-style = training management system cycle, not a slide stamp.",
    "Needs assessment before design.",
    "Competency is demonstrated performance.",
    "Attendance is not qualification.",
    "MoC/incidents/audits update training on a real clock.",
    "Trainers qualified in content and delivery.",
    "Program does not outrank open engineering.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "only a sign-in sheet", pick: "not competency" },
    { ifStem: "procedure changed Tuesday", pick: "update training before use/startup" },
    { ifStem: "vendor video labeled Z490", pick: "ask for needs, objectives, evaluation" },
    { ifStem: "skill task", pick: "practice and observation, not slides only" },
    { ifStem: "guard missing", pick: "specify hardware; train residual" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" }
  ),
  brief: `Z490.1-style cycle: needs, design, deliver, evaluate, improve. Competency ≠ attendance. Hardware still first. Exam default: if two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
ANSI/ASSP Z490.1-style training program design is a management system for training, not a stack of slides. Criteria include needs assessment, design, development, delivery, evaluation, and continual improvement with roles and records. Competency is demonstrated performance, not attendance. A Z490-flavored matrix does not climb over a still-open engineering control.

Field move
Build the program like a PDCA: who needs what performance, which objectives, which methods, qualified trainers, evaluation at the right Kirkpatrick level, records that show competence, and management review when incidents or MoC change the job. Do not confuse a sign-in sheet with qualification. Do not use the standard’s name as a magic stamp on a vendor video.

Exam
If two answers work, take higher hierarchy / system / design. Last sentence may freeze ‘training complete’ as attendance only — then the answer is demonstrate performance and still fix the open hardware. If two answers both add records, take the one that also changes the work or proves skill. Redraw the decision sequence for Z490.1 training program design before looking at options. Cost and convenience will sell a lower control that looks busy. Attractive wrong answers on Z490.1 training program design are usually competent lower-row programs, busy paperwork, or a funded contract. Read the last sentence for constraints that close a higher control, then take the best remaining system or design fix for Z490.1 training program design. When capital or authority remains, spend it on the highest remaining hardware or independent layer, then use administrative controls and PPE only for residual Z490.1 training program design risk. Do not let schedule pressure invert the Z490.1 training program design sequence. Verification is a test with an owner, not a calendar invite. If two answers both look professional, take higher hierarchy / system / design on Z490.1 training program design. Teach-back restates the Z490.1 training program design rule, the sequence, and the verification step in one spoken sentence. Contrast pairs keep Z490.1 training program design labels honest when a look-alike program uses the right vocabulary on the wrong row. Tool choice still matters: pick the method that can still change the Z490.1 training program design design, not the fashionable late worksheet.
`,
  deep: `Z490.1 is the exam’s shorthand for a quality training management system. You do not need to recite a clause number. You need the cycle: analyze the job and the gap, design objectives and methods, develop materials, deliver with qualified resources, evaluate, improve. Roles: management provides resources and expects competence; supervisors reinforce; trainers are qualified in both content and delivery; learners practice. Records show who is qualified for what, not who ate the donuts.

Continuous improvement is the D7.03 hook. Incidents, audit findings, MoC, and performance data feed the training system. A procedure changed on Tuesday that is taught in next year’s cycle is a TIME miss. PSSR-required training before startup is a gate, not a backlog. Contractor orientation is part of the program when contractors share the risk. Language, literacy, and disability accommodations are design constraints, not extras.

Competency versus awareness: awareness is ‘this hazard exists.’ Competency is ‘this person can isolate this energy and verify.’ The exam will offer a laminated card as competency. Reject it. Observation, teach-back, and simulated faults beat multiple-choice only when the task is a skill. Refreshers follow risk and performance, not a random calendar alone.

Hierarchy remains. If two answers work, take higher hierarchy / system / design. A beautiful Z490 program around a missing guard is still a missing guard. Use the program to train residual skill after the hardware is specified. Teach-back: name the PDCA-like cycle, name competency as demonstrated performance, name a trigger that updates the program (MoC/incident), and name any higher control still open. Oil-and-gas permit systems, construction orientations, and manufacturing LMS all fail when attendance is reported as qualification. Scoring on Z490.1 training program design favors evidence, owners, verification, and hierarchy-smart controls rather than binders that look complete. Last-sentence constraints may freeze a higher Z490.1 training program design control; then take the best remaining fix and verify it instead of wishing the freeze away. Shared assumptions and checkbox closures create false assurance on Z490.1 training program design; name the assumption and test it. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet. Hold the exam default on Z490.1 training program design: if two answers work, take higher hierarchy / system / design, and reject polished paperwork when a higher system or design fix remains. In teach-back, name the Z490.1 training program design decision, the highest open control, and the verification step without reciting fake clause trivia. Field skins change the equipment, not the logic: a skid, a site tent, and a paint line still fail the same Z490.1 training program design test. A funded lower-row contract does not freeze a higher Z490.1 training program design row the stem still leaves open. Design the next job so the Z490.1 training program design control is obvious, then still implement it, then still verify it. Do not restart Z490.1 training program design from the bottom because PPE and training are what the plant already knows how to buy. Units, clocks, and tool names are traps only when you skip the last sentence on Z490.1 training program design. Walk the Z490.1 training program design sequence until it is automatic, then apply the last sentence, then pick the higher remaining row. Independent engineered layers beat detection, watchstanders, and emergency response when those layers are still open on Z490.1 training program design. Paper, PPE, and insurance can sit beside a Z490.1 training program design control; they do not replace it. If production already started in the last sentence, the Z490.1 training program design answer is often stop, restore the gate, then proceed — not a memo. Name the Z490.1 training program design rule in one sentence, then name the verification, then name the attractive wrong answer you will refuse. A last-sentence freeze on Z490.1 training program design shrinks open rows; it does not invert them or authorize a skip to PPE.
`,
  cardFront: "Z490.1 program — competency or sign-in?",
  cardBack: "Cycle + demonstrated performance. Attractive wrong: Z490 stamp on attendance around a missing guard. Study only.",
  teachBackKey: "Pass if the cycle is named, competency is demonstrated performance, and training is residual to engineering.",
  formulaSlug: null,
};

export const items: ClassItem[] = [
  exam(
    "CSP-11 D7.03",
    "You are the CSP reviewing a live decision at a food packaging SKU change. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Competency in a Z490.1-style program means.",
    [
      "Demonstrated performance of the required task.",
      "A sign-in sheet.",
      "A smile sheet only.",
      "A purchase order for slides.",
    ],
    0,
    "Core Rule: Competence is performance. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Z490 competency. Why Each Distractor Fails: Demonstrated performance of the required task.: Correct: Show the skill. | A sign-in sheet.: Fails: Attendance. | A smile sheet only.: Fails: L1 reaction. | A purchase order for slides.: Fails: Procurement.",
    "STEM",
    "Foundation",
    [
      "Correct: Show the skill.",
      "Fails: Attendance.",
      "Fails: L1 reaction.",
      "Fails: Procurement.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Z490.1-style programs run a cycle: needs, design, deliver, evaluate, improve. Competency is demonstrated performance. Attendance is not qualification. Training still loses to open engineering. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D7.03",
    "Vendor video labeled Z490.1 compliant, no needs assessment. Best critique?",
    [
      "The label automatically satisfies D7.",
      "The name is not the system — start with the performance gap.",
      "Videos are Level 4.",
      "Videos are PELs.",
    ],
    1,
    "Core Rule: Needs first; stamps are not systems. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Name-drop trap. Why Each Distractor Fails: The label automatically satisfies D7.: Fails: Label ≠ compliance of a system. | The name is not the system — start with the performance gap.: Correct: Gap before content. | Videos are Level 4.: Fails: Not results. | Videos are PELs.: Fails: Not a PEL.",
    "STEM",
    "Exam",
    [
      "Fails: Label ≠ compliance of a system.",
      "Correct: Gap before content.",
      "Fails: Not results.",
      "Fails: Not a PEL.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Z490.1-style programs run a cycle: needs, design, deliver, evaluate, improve. Competency is demonstrated performance. Attendance is not qualification. Training still loses to open engineering. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D7.03",
    "Procedure changed Tuesday; next training cycle is next year. PSSR startup is Friday. Best move?",
    [
      "Wait for next year.",
      "A sign-in from last year transfers.",
      "Update and deliver required training before startup — the annual cycle is too slow.",
      "Insurance covers the gap.",
    ],
    2,
    "Core Rule: MoC/PSSR clocks beat the training calendar. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Training clock. Why Each Distractor Fails: Wait for next year.: Fails: Too slow. | A sign-in from last year transfers.: Fails: Old attendance ≠ new procedure. | Update and deliver required training before startup — the annual cycle is too slow.: Correct: Before use. | Insurance covers the gap.: Fails: Transfer.",
    "TIME",
    "Exam",
    [
      "Fails: Too slow.",
      "Fails: Old attendance ≠ new procedure.",
      "Correct: Before use.",
      "Fails: Transfer.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Z490.1-style programs run a cycle: needs, design, deliver, evaluate, improve. Competency is demonstrated performance. Attendance is not qualification. Training still loses to open engineering. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D7.03",
    "Trainer knows the content but cannot facilitate practice. Gap?",
    [
      "Content alone is always enough.",
      "Facilitation is Level 4.",
      "Facilitation is SPCC.",
      "Trainers need delivery skill as well as content.",
    ],
    3,
    "Core Rule: Qualified resources include delivery. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Trainer qualification. Why Each Distractor Fails: Content alone is always enough.: Fails: Not enough. | Facilitation is Level 4.: Fails: Not L4. | Facilitation is SPCC.: Fails: Wrong statute. | Trainers need delivery skill as well as content.: Correct: Content + delivery.",
    "STEM",
    "Exam",
    [
      "Fails: Not enough.",
      "Fails: Not L4.",
      "Fails: Wrong statute.",
      "Correct: Content + delivery.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Z490.1-style programs run a cycle: needs, design, deliver, evaluate, improve. Competency is demonstrated performance. Attendance is not qualification. Training still loses to open engineering. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D7.03",
    "You are the CSP reviewing a live decision at a plastics compounding turnaround. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Awareness vs competency for LOTO.",
    [
      "Awareness: energy can hurt. Competency: this person isolates, locks, and try-outs this machine.",
      "They are identical.",
      "Awareness is engineering.",
      "Competency is a deductible.",
    ],
    0,
    "Core Rule: Different performance levels. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Awareness vs competency. Why Each Distractor Fails: Awareness: energy can hurt. Competency: this person isolates, locks, and try-outs this machine.: Correct: Know vs do. | They are identical.: Fails: Not identical. | Awareness is engineering.: Fails: Not a row. | Competency is a deductible.: Fails: Not finance.",
    "STEM",
    "Exam",
    [
      "Correct: Know vs do.",
      "Fails: Not identical.",
      "Fails: Not a row.",
      "Fails: Not finance.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Z490.1-style programs run a cycle: needs, design, deliver, evaluate, improve. Competency is demonstrated performance. Attendance is not qualification. Training still loses to open engineering. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D7.03",
    "Incident shows a gap in permit skill. Z490-style response?",
    [
      "Hide the incident from the training system.",
      "Feed the incident into needs assessment, redesign practice, re-evaluate L3.",
      "Only buy a new logo.",
      "Only raise insurance.",
    ],
    1,
    "Core Rule: Incidents update the program. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Continual improvement. Why Each Distractor Fails: Hide the incident from the training system.: Fails: Breaks the cycle. | Feed the incident into needs assessment, redesign practice, re-evaluate L3.: Correct: PDCA feed. | Only buy a new logo.: Fails: Admin fashion. | Only raise insurance.: Fails: Transfer.",
    "STEM",
    "Exam",
    [
      "Fails: Breaks the cycle.",
      "Correct: PDCA feed.",
      "Fails: Admin fashion.",
      "Fails: Transfer.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Z490.1-style programs run a cycle: needs, design, deliver, evaluate, improve. Competency is demonstrated performance. Attendance is not qualification. Training still loses to open engineering. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D7.03",
    "Contractor orientation with a DVD and no job-specific isolation practice. Host risk is shared. Best host move?",
    [
      "DVD is always enough for shared LOTO.",
      "Host has no role.",
      "Include contractors in the competency program for the shared tasks.",
      "A COI replaces orientation.",
    ],
    2,
    "Core Rule: Shared risk, shared competence. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Contractors in the program. Why Each Distractor Fails: DVD is always enough for shared LOTO.: Fails: Not enough. | Host has no role.: Fails: Host still owns the process. | Include contractors in the competency program for the shared tasks.: Correct: In-scope competency. | A COI replaces orientation.: Fails: Insurance ≠ skill.",
    "STEM",
    "Exam",
    [
      "Fails: Not enough.",
      "Fails: Host still owns the process.",
      "Correct: In-scope competency.",
      "Fails: Insurance ≠ skill.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Z490.1-style programs run a cycle: needs, design, deliver, evaluate, improve. Competency is demonstrated performance. Attendance is not qualification. Training still loses to open engineering. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D7.03",
    "Two answers: a complete training matrix, or specifying the missing guard plus residual LOTO practice. Pick:",
    [
      "Matrix as elimination.",
      "Sign-in as engineering.",
      "Z490 stamp as a light curtain.",
      "The guard plus residual practice.",
    ],
    3,
    "Core Rule: If two answers work, take higher hierarchy / system / design. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Program vs hardware. Why Each Distractor Fails: Matrix as elimination.: Fails: Admin. | Sign-in as engineering.: Fails: Attendance ≠ hardware. | Z490 stamp as a light curtain.: Fails: Name-drop ≠ safeguard. | The guard plus residual practice.: Correct: Hardware first.",
    "HIER",
    "Expert",
    [
      "Fails: Admin.",
      "Fails: Attendance ≠ hardware.",
      "Fails: Name-drop ≠ safeguard.",
      "Correct: Hardware first.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Z490.1-style programs run a cycle: needs, design, deliver, evaluate, improve. Competency is demonstrated performance. Attendance is not qualification. Training still loses to open engineering. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D7.03",
    "You are the CSP reviewing a live decision at a pharma suite changeover. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Records that belong in the program.",
    [
      "Who is qualified for which task, by what evidence, until when.",
      "Only catering scores.",
      "Only the vendor invoice.",
      "Only TRIR as a training record.",
    ],
    0,
    "Core Rule: Qualification records. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Records. Why Each Distractor Fails: Who is qualified for which task, by what evidence, until when.: Correct: Evidence of competence. | Only catering scores.: Fails: L1. | Only the vendor invoice.: Fails: Procurement. | Only TRIR as a training record.: Fails: Outcome ≠ individual qualification.",
    "STEM",
    "Foundation",
    [
      "Correct: Evidence of competence.",
      "Fails: L1.",
      "Fails: Procurement.",
      "Fails: Outcome ≠ individual qualification.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Z490.1-style programs run a cycle: needs, design, deliver, evaluate, improve. Competency is demonstrated performance. Attendance is not qualification. Training still loses to open engineering. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D7.03",
    "Literacy and language barriers in the workforce. Design implication?",
    [
      "Ignore — Z490 forbids pictograms.",
      "Design methods and evaluation that the workers can actually perform — accommodation is design, not extra credit.",
      "Lecture faster.",
      "Use only English legalese as a filter.",
    ],
    1,
    "Core Rule: Audience is a design input. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Accessibility. Why Each Distractor Fails: Ignore — Z490 forbids pictograms.: Fails: Standard does not forbid clear methods. | Design methods and evaluation that the workers can actually perform — accommodation is design, not extra credit.: Correct: Design for the audience. | Lecture faster.: Fails: Worse. | Use only English legalese as a filter.: Fails: Filter is not training.",
    "STEM",
    "Exam",
    [
      "Fails: Standard does not forbid clear methods.",
      "Correct: Design for the audience.",
      "Fails: Worse.",
      "Fails: Filter is not training.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Z490.1-style programs run a cycle: needs, design, deliver, evaluate, improve. Competency is demonstrated performance. Attendance is not qualification. Training still loses to open engineering. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D7.03",
    "Refreshers based only on a random 5-year calendar while the job changed last month. Critique?",
    [
      "Calendars always beat MoC.",
      "Calendars are PELs.",
      "Risk and change should drive refreshers, not only a stale calendar.",
      "Calendars are FTA.",
    ],
    2,
    "Core Rule: Triggers beat folklore intervals. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Refresher logic. Why Each Distractor Fails: Calendars always beat MoC.: Fails: MoC wins. | Calendars are PELs.: Fails: Not a PEL. | Risk and change should drive refreshers, not only a stale calendar.: Correct: Change/risk triggers. | Calendars are FTA.: Fails: Not FTA.",
    "TIME",
    "Exam",
    [
      "Fails: MoC wins.",
      "Fails: Not a PEL.",
      "Correct: Change/risk triggers.",
      "Fails: Not FTA.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Z490.1-style programs run a cycle: needs, design, deliver, evaluate, improve. Competency is demonstrated performance. Attendance is not qualification. Training still loses to open engineering. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D7.03",
    "Management review of the training program should include?",
    [
      "Only the logo.",
      "Only the catering menu.",
      "Only insurance limits.",
      "Evaluation data, incidents, MoC, resources, and whether competence is actually present.",
    ],
    3,
    "Core Rule: Review the system, not the branding. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Management review. Why Each Distractor Fails: Only the logo.: Fails: Fashion. | Only the catering menu.: Fails: L1. | Only insurance limits.: Fails: Transfer. | Evaluation data, incidents, MoC, resources, and whether competence is actually present.: Correct: System inputs.",
    "STEM",
    "Expert",
    [
      "Fails: Fashion.",
      "Fails: L1.",
      "Fails: Transfer.",
      "Correct: System inputs.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Z490.1-style programs run a cycle: needs, design, deliver, evaluate, improve. Competency is demonstrated performance. Attendance is not qualification. Training still loses to open engineering. Verify the critical step before accepting a lower-tier control.",
    }
  ),
];

