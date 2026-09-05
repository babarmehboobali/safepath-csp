import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D7.06";

export const classFields: ClassFields = {
  hook: "Level 1 smile sheets are green. Field observations are unchanged. The guard is still missing. Do not confuse catering scores with results, and do not train around open engineering.",
  hookOilGas: "Permit-to-work CBT has 98% happy faces. Bypasses continue. Escalate to Level 3 and restore the trip — training is residual.",
  hookConstruction: "Stretch-and-flex applause. The lift still has no exclusion zone. Design the zone; evaluate behavior, not the coffee.",
  rule: "Adults need why, relevance, and practice. Kirkpatrick 1–4 is reaction, learning, behavior, results. Smile sheets are not results. Training loses to open engineering.",
  modelCaption: "Needs → objectives → practice with feedback → evaluate L1–L4 honestly. Caption: L1 ≠ L4; training is admin around open hardware.",
  workedCase: "(1) Gap is bypassed interlock plus no observed permit skill. (2) Restore the interlock; train residual permit discrimination with practice. (3) Evaluate L2 teach-back and L3 observation, not only L1. Losing answer: a new video and a smile sheet while the interlock stays defeated.",
  trapsJson: traps(
    "Reporting Level 1 as Level 4.",
    "Skipping needs assessment.",
    "Training as the primary fix for a missing guard.",
  ),
  contrastJson: contrast([
    { looksLike: "Level 1", actually: "Reaction / smile sheet" },
    { looksLike: "Level 2", actually: "Learning — test or teach-back" },
    { looksLike: "Level 3", actually: "Behavior on the job" },
    { looksLike: "Level 4", actually: "Results — honest operational outcomes" },
    { looksLike: "Needs assessment", actually: "What performance gap" },
    { looksLike: "Training", actually: "Administrative — residual to engineering" },
  ]),
  mustScoreJson: mustScore(
    "Adults: relevance, prior experience, apply soon, practice with feedback.",
    "Needs assessment before design.",
    "Kirkpatrick 1 reaction, 2 learning, 3 behavior, 4 results.",
    "Smile sheets are not results.",
    "On-the-job observation is Level 3, not Level 1.",
    "Training is administrative around open engineering.",
    "If the work system punishes correct behavior, fix the design.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "only smile sheets reported", pick: "that is Level 1 — not results" },
    { ifStem: "need to know if they can do it in class", pick: "Level 2" },
    { ifStem: "need to know if they do it on the job", pick: "Level 3 observation" },
    { ifStem: "guard still missing", pick: "engineer first; train residual" },
    { ifStem: "work design punishes the correct act", pick: "fix the job" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" }
  ),
  brief: `Adults need why and practice. Kirkpatrick 1–4; smile sheets ≠ results. Training loses to open engineering. Exam default: if two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Adult learners bring experience, want relevance, and need to apply soon. Design for why, what, how, and practice with feedback. Kirkpatrick’s four levels evaluate a program: 1 reaction, 2 learning, 3 behavior, 4 results. A smile sheet (Level 1) does not prove the plant is safer. Training is administrative; it does not climb over a still-open engineering fix.

Field move
Needs assessment first (what performance gap). Objectives in observable terms. Methods that match the task (hands-on for a skill). Evaluate at the level the stem asks: a quiz is Level 2, on-the-job observation is Level 3, TRIR or quality yield is Level 4 if causally honest. Do not skip to Level 4 vanity metrics from a lunch-and-learn. If the gap is a missing guard, train only as residual.

Exam
If two answers work, take higher hierarchy / system / design. Last sentence may show high Level 1 scores and unchanged field behavior — escalate evaluation and fix the job, not the catering. If two answers improve training, take the one that also changes the work design. Redraw the decision sequence for adult learning and Kirkpatrick evaluation before looking at options. Cost and convenience will sell a lower control that looks busy. Attractive wrong answers on adult learning and Kirkpatrick evaluation are usually competent lower-row programs, busy paperwork, or a funded contract. Read the last sentence for constraints that close a higher control, then take the best remaining system or design fix for adult learning and Kirkpatrick evaluation. When capital or authority remains, spend it on the highest remaining hardware or independent layer, then use administrative controls and PPE only for residual adult learning and Kirkpatrick evaluation risk. Do not let schedule pressure invert the adult learning and Kirkpatrick evaluation sequence. Verification is a test with an owner, not a calendar invite. If two answers both look professional, take higher hierarchy / system / design on adult learning and Kirkpatrick evaluation. Teach-back restates the adult learning and Kirkpatrick evaluation rule, the sequence, and the verification step in one spoken sentence. Contrast pairs keep adult learning and Kirkpatrick evaluation labels honest when a look-alike program uses the right vocabulary on the wrong row.
`,
  deep: `Andragogy is not a personality test. Adults decide to engage when the task is relevant, respectful of prior skill, and immediately usable. Problem-centered beats purely content-centered. They need to know why the procedure exists, then practice the discrimination the exam will actually demand — which row, which energy, which form. Lectures without practice produce Level 1 applause and Level 3 silence.

Kirkpatrick is a ladder of evidence, not a vanity dashboard. Level 1 reaction: satisfaction, catering, ‘would recommend.’ Necessary for logistics, insufficient for safety claims. Level 2 learning: knowledge or skill in a test or teach-back. Level 3 behavior: the skill used on the job, with supervisors and the work system allowing it. Level 4 results: operational outcomes. The causal chain from a 30-minute video to TRIR is usually dishonest. Measure the level the decision needs. A competency sign-off that never watches the work is Level 2 dressed as Level 3.

Design sequence: needs assessment, objectives, methods, delivery (including when AI or CBT is used as a tool not a babysitter), evaluation, improvement. Z490.1-style program design lives next door. This class is the learning science and the evaluation honesty. Mixed methods: tell, show, do, feedback. Spaced practice beats a single dump. Errors in a simulator are cheaper than errors on the unit.

Hierarchy still governs the content. If two answers work, take higher hierarchy / system / design. You cannot Kirkpatrick your way out of a missing interlock. If Level 3 fails because the work design punishes the correct behavior, fix the design. Teach-back: name an adult-learning feature, name the four levels, name which level the stem’s metric actually is, and name any higher control still open. Oil-and-gas permit training, construction stretch-and-flex, and manufacturing LMS modules all fail the same test when Level 1 is reported as results. Scoring on adult learning and Kirkpatrick evaluation favors evidence, owners, verification, and hierarchy-smart controls rather than binders that look complete. Last-sentence constraints may freeze a higher adult learning and Kirkpatrick evaluation control; then take the best remaining fix and verify it instead of wishing the freeze away. Shared assumptions and checkbox closures create false assurance on adult learning and Kirkpatrick evaluation; name the assumption and test it. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet. Hold the exam default on adult learning and Kirkpatrick evaluation: if two answers work, take higher hierarchy / system / design, and reject polished paperwork when a higher system or design fix remains. In teach-back, name the adult learning and Kirkpatrick evaluation decision, the highest open control, and the verification step without reciting fake clause trivia. Field skins change the equipment, not the logic: a skid, a site tent, and a paint line still fail the same adult learning and Kirkpatrick evaluation test. A funded lower-row contract does not freeze a higher adult learning and Kirkpatrick evaluation row the stem still leaves open. Design the next job so the adult learning and Kirkpatrick evaluation control is obvious, then still implement it, then still verify it. Do not restart adult learning and Kirkpatrick evaluation from the bottom because PPE and training are what the plant already knows how to buy. Units, clocks, and tool names are traps only when you skip the last sentence on adult learning and Kirkpatrick evaluation. Walk the adult learning and Kirkpatrick evaluation sequence until it is automatic, then apply the last sentence, then pick the higher remaining row. Independent engineered layers beat detection, watchstanders, and emergency response when those layers are still open on adult learning and Kirkpatrick evaluation. Paper, PPE, and insurance can sit beside a adult learning and Kirkpatrick evaluation control; they do not replace it. If production already started in the last sentence, the adult learning and Kirkpatrick evaluation answer is often stop, restore the gate, then proceed — not a memo.
`,
  cardFront: "Adult learning + Kirkpatrick — which level is the metric?",
  cardBack: "L1 reaction, L2 learning, L3 behavior, L4 results. Attractive wrong: smile sheets as TRIR. Training loses to a still-open guard. Study only.",
  teachBackKey: "Pass if four levels are named, L1 is not L4, and training is residual to engineering.",
  formulaSlug: null,
};

export const items: ClassItem[] = [
  exam(
    "CSP-11 D7.06",
    "You are the CSP reviewing a live decision at a hospital utility plant shutdown. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Kirkpatrick Level 1 measures.",
    [
      "Reaction — satisfaction with the session.",
      "On-the-job behavior.",
      "Unit TRIR as a direct causal score.",
      "Mixture LFL.",
    ],
    0,
    "Core Rule: L1 is reaction. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Kirkpatrick. Why Each Distractor Fails: Reaction — satisfaction with the session.: Correct: Smile sheet layer. | On-the-job behavior.: Fails: That is L3. | Unit TRIR as a direct causal score.: Fails: That is L4 (and usually dishonest from one class). | Mixture LFL.: Fails: Wrong domain.",
    "STEM",
    "Foundation",
    [
      "Correct: Smile sheet layer.",
      "Fails: That is L3.",
      "Fails: That is L4 (and usually dishonest from one class).",
      "Fails: Wrong domain.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Adults need why, relevance, and practice. Kirkpatrick 1–4 is reaction, learning, behavior, results. Smile sheets are not results. Training loses to open engineering. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D7.06",
    "You are the CSP reviewing a live decision at a food packaging SKU change. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: A quiz at the end of class is primarily.",
    [
      "Level 1 only.",
      "Level 2 learning evidence.",
      "Level 4 results.",
      "Level 3 automatically.",
    ],
    1,
    "Core Rule: Knowledge/skill in the classroom is L2. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: L2 vs L3. Why Each Distractor Fails: Level 1 only.: Fails: Not reaction. | Level 2 learning evidence.: Correct: Test/teach-back. | Level 4 results.: Fails: Not operational results. | Level 3 automatically.: Fails: Not on-the-job.",
    "STEM",
    "Exam",
    [
      "Fails: Not reaction.",
      "Correct: Test/teach-back.",
      "Fails: Not operational results.",
      "Fails: Not on-the-job.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Adults need why, relevance, and practice. Kirkpatrick 1–4 is reaction, learning, behavior, results. Smile sheets are not results. Training loses to open engineering. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D7.06",
    "Supervisors observe correct LOTO try-out on the floor for 30 days. That metric is?",
    [
      "Level 1.",
      "Level 2 only.",
      "Level 3 behavior.",
      "SPCC.",
    ],
    2,
    "Core Rule: On-the-job use is L3. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: L3. Why Each Distractor Fails: Level 1.: Fails: Reaction. | Level 2 only.: Fails: Classroom learning only. | Level 3 behavior.: Correct: Behavior. | SPCC.: Fails: Wrong statute.",
    "STEM",
    "Exam",
    [
      "Fails: Reaction.",
      "Fails: Classroom learning only.",
      "Correct: Behavior.",
      "Fails: Wrong statute.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Adults need why, relevance, and practice. Kirkpatrick 1–4 is reaction, learning, behavior, results. Smile sheets are not results. Training loses to open engineering. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D7.06",
    "High L1 scores, unchanged bypass rate, interlock still defeated. Best next move?",
    [
      "Report L1 as L4.",
      "Add only another video.",
      "Increase insurance.",
      "Restore the interlock and evaluate L3; do not buy better catering.",
    ],
    3,
    "Core Rule: Design first; honest evaluation second. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: L1 vs results + hierarchy. Why Each Distractor Fails: Report L1 as L4.: Fails: Dishonest ladder. | Add only another video.: Fails: More L2/L1. | Increase insurance.: Fails: Transfer. | Restore the interlock and evaluate L3; do not buy better catering.: Correct: Hardware plus L3.",
    "HIER",
    "Expert",
    [
      "Fails: Dishonest ladder.",
      "Fails: More L2/L1.",
      "Fails: Transfer.",
      "Correct: Hardware plus L3.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Adults need why, relevance, and practice. Kirkpatrick 1–4 is reaction, learning, behavior, results. Smile sheets are not results. Training loses to open engineering. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D7.06",
    "You are the CSP reviewing a live decision at a municipal water-plant retrofit. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Adult-learning feature the exam expects.",
    [
      "Relevance, respect for experience, problem-centered practice with feedback.",
      "Longer lectures without practice.",
      "Secret objectives.",
      "Punishment as the only motivator.",
    ],
    0,
    "Core Rule: Andragogy teaching points. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Adult learning. Why Each Distractor Fails: Relevance, respect for experience, problem-centered practice with feedback.: Correct: Why + practice. | Longer lectures without practice.: Fails: Opposite. | Secret objectives.: Fails: Opposite. | Punishment as the only motivator.: Fails: Fear is not a design.",
    "STEM",
    "Foundation",
    [
      "Correct: Why + practice.",
      "Fails: Opposite.",
      "Fails: Opposite.",
      "Fails: Fear is not a design.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Adults need why, relevance, and practice. Kirkpatrick 1–4 is reaction, learning, behavior, results. Smile sheets are not results. Training loses to open engineering. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D7.06",
    "Needs assessment skipped; a vendor course is bought because it is popular. Critique?",
    [
      "Popularity is Level 4.",
      "Design without a performance gap is fashion — TOOL/STEM miss.",
      "Popularity is a PEL.",
      "Popularity is FTA.",
    ],
    1,
    "Core Rule: Needs first. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Needs assessment. Why Each Distractor Fails: Popularity is Level 4.: Fails: Not results. | Design without a performance gap is fashion — TOOL/STEM miss.: Correct: Gap before method. | Popularity is a PEL.: Fails: Not a PEL. | Popularity is FTA.: Fails: Not FTA.",
    "TOOL",
    "Exam",
    [
      "Fails: Not results.",
      "Correct: Gap before method.",
      "Fails: Not a PEL.",
      "Fails: Not FTA.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Adults need why, relevance, and practice. Kirkpatrick 1–4 is reaction, learning, behavior, results. Smile sheets are not results. Training loses to open engineering. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D7.06",
    "TRIR dropped the same year as a new video. Best Level 4 claim?",
    [
      "Always credit the video.",
      "TRIR is Level 1.",
      "Do not claim causation without a defensible chain; the video may be unrelated.",
      "TRIR is a 5 dB exchange.",
    ],
    2,
    "Core Rule: L4 needs honest attribution. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: L4 honesty. Why Each Distractor Fails: Always credit the video.: Fails: Vanity. | TRIR is Level 1.: Fails: TRIR is outcome, not reaction. | Do not claim causation without a defensible chain; the video may be unrelated.: Correct: Causal humility. | TRIR is a 5 dB exchange.: Fails: Wrong class.",
    "STEM",
    "Expert",
    [
      "Fails: Vanity.",
      "Fails: TRIR is outcome, not reaction.",
      "Correct: Causal humility.",
      "Fails: Wrong class.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Adults need why, relevance, and practice. Kirkpatrick 1–4 is reaction, learning, behavior, results. Smile sheets are not results. Training loses to open engineering. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D7.06",
    "Work system punishes stopping to lock out. Training tells people to lock out. Best fix?",
    [
      "More Level 1 surveys.",
      "Longer lecture.",
      "A prettier certificate.",
      "Change the job/production pressure so correct behavior is possible; training residual.",
    ],
    3,
    "Core Rule: If the system fights the skill, fix the system. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: L3 barriers. Why Each Distractor Fails: More Level 1 surveys.: Fails: Wrong level. | Longer lecture.: Fails: More L2. | A prettier certificate.: Fails: Admin. | Change the job/production pressure so correct behavior is possible; training residual.: Correct: Design/production system.",
    "HIER",
    "Exam",
    [
      "Fails: Wrong level.",
      "Fails: More L2.",
      "Fails: Admin.",
      "Correct: Design/production system.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Adults need why, relevance, and practice. Kirkpatrick 1–4 is reaction, learning, behavior, results. Smile sheets are not results. Training loses to open engineering. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D7.06",
    "Hands-on practice with feedback vs lecture-only for a skill. Adult-learning pick?",
    [
      "Practice with feedback.",
      "Lecture-only as equivalent.",
      "Smile sheet as equivalent practice.",
      "Insurance as practice.",
    ],
    0,
    "Core Rule: Skills require doing. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Method match. Why Each Distractor Fails: Practice with feedback.: Correct: Do + feedback. | Lecture-only as equivalent.: Fails: Not equivalent. | Smile sheet as equivalent practice.: Fails: L1 ≠ practice. | Insurance as practice.: Fails: Transfer.",
    "STEM",
    "Exam",
    [
      "Correct: Do + feedback.",
      "Fails: Not equivalent.",
      "Fails: L1 ≠ practice.",
      "Fails: Transfer.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Adults need why, relevance, and practice. Kirkpatrick 1–4 is reaction, learning, behavior, results. Smile sheets are not results. Training loses to open engineering. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D7.06",
    "AI chatbot used to replace all practice and all observation. Critique?",
    [
      "AI is automatically Level 4.",
      "AI can support content; it does not by itself provide L3 or replace engineering.",
      "AI is a PEL.",
      "AI is SPCC.",
    ],
    1,
    "Core Rule: Tool, not a babysitter. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Delivery incl. AI. Why Each Distractor Fails: AI is automatically Level 4.: Fails: Not L4. | AI can support content; it does not by itself provide L3 or replace engineering.: Correct: Support not substitute for behavior/hardware. | AI is a PEL.: Fails: Not a PEL. | AI is SPCC.: Fails: Wrong statute.",
    "STEM",
    "Exam",
    [
      "Fails: Not L4.",
      "Correct: Support not substitute for behavior/hardware.",
      "Fails: Not a PEL.",
      "Fails: Wrong statute.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Adults need why, relevance, and practice. Kirkpatrick 1–4 is reaction, learning, behavior, results. Smile sheets are not results. Training loses to open engineering. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D7.06",
    "Two answers: a new LMS module, or specifying the missing guard plus a short residual briefing. Pick:",
    [
      "LMS as elimination.",
      "Smile sheets as engineering.",
      "The guard plus residual briefing.",
      "A captive insurer as training.",
    ],
    2,
    "Core Rule: If two answers work, take higher hierarchy / system / design. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Training vs engineering. Why Each Distractor Fails: LMS as elimination.: Fails: LMS is admin. | Smile sheets as engineering.: Fails: L1 ≠ engineering. | The guard plus residual briefing.: Correct: Higher row. | A captive insurer as training.: Fails: Finance.",
    "HIER",
    "Exam",
    [
      "Fails: LMS is admin.",
      "Fails: L1 ≠ engineering.",
      "Correct: Higher row.",
      "Fails: Finance.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Adults need why, relevance, and practice. Kirkpatrick 1–4 is reaction, learning, behavior, results. Smile sheets are not results. Training loses to open engineering. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D7.06",
    "You are the CSP reviewing a live decision at a grain elevator maintenance day. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Observable objective example.",
    [
      "Appreciate LOTO.",
      "Understand energy.",
      "Be safe.",
      "Given a mixer jam, the worker will apply a personal lock and try-out before reaching in.",
    ],
    3,
    "Core Rule: Objectives are observable performances. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Objectives. Why Each Distractor Fails: Appreciate LOTO.: Fails: Vague. | Understand energy.: Fails: Vague. | Be safe.: Fails: Vague. | Given a mixer jam, the worker will apply a personal lock and try-out before reaching in.: Correct: Observable.",
    "STEM",
    "Exam",
    [
      "Fails: Vague.",
      "Fails: Vague.",
      "Fails: Vague.",
      "Correct: Observable.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Adults need why, relevance, and practice. Kirkpatrick 1–4 is reaction, learning, behavior, results. Smile sheets are not results. Training loses to open engineering. Verify the critical step before accepting a lower-tier control.",
    }
  ),
];

