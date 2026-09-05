import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D7.05";

export const classFields: ClassFields = {
  hook: "A vendor offers an AI chatbot to “replace OJT and the competent person” on a silica cut. The LMS will auto-badge anyone who chats for six minutes. You are the CSP. The question is which delivery method can actually carry the objective — and what AI must not pretend to be.",
  hookOilGas: `A vendor offers an AI chatbot to âreplace OJT and the competent personâ on a confined-space job. The LMS will auto-badge anyone who chats for six minutes. You are the CSP. The question is which delivery method can actually carry the objective â and what AI must not pretend to be.`,
  hookConstruction: `On a busy jobsite, delivery incl ai shows up when schedule pressure sells a permit, rotation, or PPE package while design still can change. Match method to objective: knowledge can use classroom/CBT/AI explainers; skill needs OJT, simulation, or observed practice; high-hazard tasks need a qualified person, not a chatbot badge. Discriminate the open row before you laminate another card.`,
  rule: "Match method to objective: knowledge can use classroom/CBT/AI explainers; skill needs OJT, simulation, or observed practice; high-hazard tasks need a qualified person, not a chatbot badge. AI is a delivery aid (drafts, translation, retrieval) — it is not a competent person, not a fit test, and not a lock. If two answers work, take higher hierarchy / system / design, then pick the delivery that can still observe the skill.",
  modelCaption: "Three lanes: KNOWLEDGE (CBT/AI text) | SKILL (OJT/sim/observe) | HIGH HAZARD (qualified person). A chatbot stamped “not 1910.134 / not competent person.” Caption: method follows the objective.",
  workedCase: "Silica Table 1 wet cutting: AI can translate the job aid. OJT on the saw with water feed on is the skill delivery. A six-minute chat badge is not Table 1, not 1910.134, and not the competent person. Classroom lecture alone cannot prove the water-feed skill.",
  brief: `Match method to objective: knowledge can use classroom/CBT/AI explainers; skill needs OJT, simulation, or observed practice; high-hazard tasks need a qualified person, not a chatbot badge. AI is a delivery aid (drafts, translation, retrieval) â it is not a competent person, not a fit test, and not a lock. If two answers work, take higher If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Match method to objective: knowledge can use classroom/CBT/AI explainers; skill needs OJT, simulation, or observed practice; high-hazard tasks need a qualified person, not a chatbot badge. AI is a delivery aid (drafts, translation, retrieval) â it is not a competent person, not a fit test, and not a lock. If two answers work, take higher hierarchy / system / design, then pick the delivery that can still observe the skill. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
A vendor offers an AI chatbot to âreplace OJT and the competent personâ on a silica cut. The LMS will auto-badge anyone who chats for six minutes. You are the CSP. The question is which delivery method can actually carry the objective â and what AI must not pretend to be. Oil-and-gas skin: A vendor offers an AI chatbot to âreplace OJT and the competent personâ on a confined-space job. You are the CSP. Construction skin: On a busy jobsite, delivery incl ai shows up when schedule pressure sells a permit, rotation, or PPE package while design still can change. Match method to objective: knowledge can use classroom/CBT/AI explainers; skill needs OJT, simulation, or observed practice; high-hazard tasks need a qualified person, not a chatbot badge. Discriminate the open row before you laminate another card. Work the case: Silica Table 1 wet cutting: AI can translate the job aid. OJT on the saw with water feed on is the skill delivery. A six-minute chat badge is not Table 1, not 1910.134, and not the competent person. Classroom lecture alone cannot prove the water-feed skill. Classic traps: AI chatbot as competent person / OJT replacement.; CBT knowledge module as proof of a hands-on skill.; Picking the cheapest delivery regardless of the objective.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for delivery incl ai. Verify whether a higher system or design fix is still open. Contrast labels: CBT / AI explainer is actually Knowledge, translation, drill — not observed skill; OJT / simulation is actually Skill delivery with a qualified coach; Classroom is actually Good for shared why / legal; weak as the only skill proof; Competent person is actually Named human role — not a language model; Badge / roster is actually Attendance ≠ performance. If the stem shows AI content is used unverified for LOTO, pick SME-verify before delivery. If the stem shows only video for a hands-on crane skill, pick add supervised practice. If the stem shows mode mismatches the objective, pick select a better delivery mode. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows chatbot proposed instead of qualified trainer where required, pick keep required human instruction. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Can AI replace OJT or a competent person? Knowledge vs skill delivery sits in CSP-11 Domain 7 Training and Competency. The exam tests whether you apply the rule when a package already looks complete. Core rule: Match method to objective: knowledge can use classroom/CBT/AI explainers; skill needs OJT, simulation, or observed practice; high-hazard tasks need a qualified person, not a chatbot badge. AI is a delivery aid (drafts, translation, retrieval) â it is not a competent person, not a fit test, and not a lock. If two answers work, take higher hierarchy / system / design, then pick the delivery that can still observe the skill. Field context: A vendor offers an AI chatbot to âreplace OJT and the competent personâ on a silica cut. The LMS will auto-badge anyone who chats for six minutes. You are the CSP. The question is which delivery method can actually carry the objective â and what AI must not pretend to be. The oil-and-gas skin shifts the same decision into production pressure: A vendor offers an AI chatbot to âreplace OJT and the competent personâ on a confined-space job. You are the CSP. The construction skin shifts it into schedule and trade stacking: On a busy jobsite, delivery incl ai shows up when schedule pressure sells a permit, rotation, or PPE package while design still can change. Match method to objective: knowledge can use classroom/CBT/AI explainers; skill needs OJT, simulation, or observed practice; high-hazard tasks need a qualified person, not a chatbot badge. Discriminate the open row before you laminate another card. Model caption for this class: Three lanes: KNOWLEDGE (CBT/AI text) | SKILL (OJT/sim/observe) | HIGH HAZARD (qualified person). A chatbot stamped ânot 1910.134 / not competent person.â Caption: method follows the objective. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Delivery mode matches objectives: OJT, classroom, simulation, CBT, microlearning. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) AI tools can support content drafting and tutoring — humans own accuracy and risk decisions. (3) Validate AI-generated safety content before use. (4) High-risk psychomotor skills usually need supervised practice. (5) Recordkeeping of completion/competence remains required. (6) Do not replace required qualified instruction with an unverified chatbot. (7) Hierarchy still sits outside training delivery choices. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Silica Table 1 wet cutting: AI can translate the job aid. OJT on the saw with water feed on is the skill delivery. A six-minute chat badge is not Table 1, not 1910.134, and not the competent person. Classroom lecture alone cannot prove the water-feed skill. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: AI chatbot as competent person / OJT replacement.; CBT knowledge module as proof of a hands-on skill.; Picking the cheapest delivery regardless of the objective.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “CBT / AI explainer” is really Knowledge, translation, drill — not observed skill; “OJT / simulation” is really Skill delivery with a qualified coach; “Classroom” is really Good for shared why / legal; weak as the only skill proof; “Competent person” is really Named human role — not a language model; “Badge / roster” is really Attendance ≠ performance. Stem-if-then map: if AI content is used unverified for LOTO → SME-verify before delivery; if only video for a hands-on crane skill → add supervised practice; if mode mismatches the objective → select a better delivery mode; if two answers work → higher hierarchy / system / design; if chatbot proposed instead of qualified trainer where required → keep required human instruction. Scoring favors evidence, owners, verification, and hierarchy-smart controls on delivery incl ai. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Can AI replace OJT or a competent person? Knowledge vs skill delivery?",
  cardBack: "Knowledge: CBT/AI OK. Skill: OJT/sim with a qualified coach. AI is an aid, not a competent person, fit test, or lock. Study only — not allowed in the test center.",
  teachBackKey: "Pass if the sentence matches method to objective, keeps OJT/observation for skills, and says AI cannot replace a competent person.",
  trapsJson: traps(
    "AI chatbot as competent person / OJT replacement.",
    "CBT knowledge module as proof of a hands-on skill.",
    "Picking the cheapest delivery regardless of the objective.",
  ),
  contrastJson: contrast([
    { looksLike: "CBT / AI explainer", actually: "Knowledge, translation, drill — not observed skill" },
    { looksLike: "OJT / simulation", actually: "Skill delivery with a qualified coach" },
    { looksLike: "Classroom", actually: "Good for shared why / legal; weak as the only skill proof" },
    { looksLike: "Competent person", actually: "Named human role — not a language model" },
    { looksLike: "Badge / roster", actually: "Attendance ≠ performance" },
  ]),
  mustScoreJson: mustScore(
    "Delivery mode matches objectives: OJT, classroom, simulation, CBT, microlearning.",
    "AI tools can support content drafting and tutoring \u2014 humans own accuracy and risk decisions.",
    "Validate AI-generated safety content before use.",
    "High-risk psychomotor skills usually need supervised practice.",
    "Recordkeeping of completion/competence remains required.",
    "Do not replace required qualified instruction with an unverified chatbot.",
    "Hierarchy still sits outside training delivery choices.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "AI content is used unverified for LOTO", pick: "SME-verify before delivery" },
    { ifStem: "only video for a hands-on crane skill", pick: "add supervised practice" },
    { ifStem: "mode mismatches the objective", pick: "select a better delivery mode" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "chatbot proposed instead of qualified trainer where required", pick: "keep required human instruction" },
  ),

  formulaSlug: null,
};

export const items: ClassItem[] = [
  exam(
    T,
    "Vendor AI chatbot will “replace OJT and the competent person” on a silica cut and auto-badge 6-minute chats. Best CSP position?",
    [
      "Accept — AI is 1926.1153.",
      "Reject as the skill/competent-person delivery. AI may translate a job aid; wet-cut OJT and a human competent person remain. A chat badge is not Table 1.",
      "Accept if the model is large.",
      "Accept if smiley sheets are 5/5.",
    ],
    1,
    "STEM: AI is not OJT or a named competent person.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "ANSI/ASSP Z490.1 training criteria (public)",
      fieldTakeaway: "Match method to objective: knowledge can use classroom/CBT/AI explainers; skill needs OJT, simulation, or observed practice; high-hazard tasks need a qualified person, not a chatbot badge. AI is a delivery aid (drafts... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Objective: perform a user seal check. Delivery proposed: CBT only. Status?",
    [
      "CBT is enough — knowledge equals skill.",
      "Need observed practice (OJT/sim). CBT can teach the why; it cannot be the only evidence of the seal check.",
      "AI chat is a fit test.",
      "Classroom lecture is 1910.134 Appendix A.",
    ],
    1,
    "STEM: skill delivery requires practice/observation.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "ANSI/ASSP Z490.1 training criteria (public)",
      fieldTakeaway: "Match method to objective: knowledge can use classroom/CBT/AI explainers; skill needs OJT, simulation, or observed practice; high-hazard tasks need a qualified person, not a chatbot badge. AI is a delivery aid (drafts... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Last sentence: the actual saw with water feed is available this morning. Team keeps only an AI video. Best delivery?",
    [
      "AI video — safer than water.",
      "Structured OJT on the saw (water on), with a qualified coach. Last sentence left the skill environment open.",
      "Chat badge.",
      "80 slides on 24.45.",
    ],
    1,
    "STEM: last sentence opened OJT.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "ANSI/ASSP Z490.1 training criteria (public)",
      fieldTakeaway: "Match method to objective: knowledge can use classroom/CBT/AI explainers; skill needs OJT, simulation, or observed practice; high-hazard tasks need a qualified person, not a chatbot badge. AI is a delivery aid (drafts... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "AI job aid quotes a TLV as the OSHA PEL. Who owns the error?",
    [
      "No one — models are law.",
      "You do. PELTLV in the content is still a legal vs advisory miss. AI drafts; a human verifies OELs.",
      "NIOSH automatically.",
      "The LMS vendor’s FTA.",
    ],
    1,
    "PELTLV: AI output can swap PEL and TLV; you still own it.",
    "PELTLV",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "ANSI/ASSP Z490.1 training criteria (public)",
      fieldTakeaway: "Match method to objective: knowledge can use classroom/CBT/AI explainers; skill needs OJT, simulation, or observed practice; high-hazard tasks need a qualified person, not a chatbot badge. AI is a delivery aid (drafts... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "OJT is “follow Joe.” Joe teaches two-hand recapping. Issue?",
    [
      "Joe is the standard.",
      "Unstructured OJT copies bad practice. Structure: objective, coach standard, checklist, feedback — then Joe’s experience is filtered.",
      "AI should replace Joe with no coach.",
      "Classroom trivia fixes Joe.",
    ],
    1,
    "STEM: OJT quality ≠ shadowing shortcuts.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "ANSI/ASSP Z490.1 training criteria (public)",
      fieldTakeaway: "Match method to objective: knowledge can use classroom/CBT/AI explainers; skill needs OJT, simulation, or observed practice; high-hazard tasks need a qualified person, not a chatbot badge. AI is a delivery aid (drafts... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Knowledge-only objective: locate the SDS QR code. Delivery?",
    [
      "Full confined-space field exercise required.",
      "CBT/AI explainer with a performance check can be enough for a knowledge/location objective. Don’t overbuild — and don’t underbuild skills.",
      "Competent person must watch every QR scan forever.",
      "Noise dosimeter required.",
    ],
    1,
    "STEM: match method to a light knowledge objective.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "ANSI/ASSP Z490.1 training criteria (public)",
      fieldTakeaway: "Match method to objective: knowledge can use classroom/CBT/AI explainers; skill needs OJT, simulation, or observed practice; high-hazard tasks need a qualified person, not a chatbot badge. AI is a delivery aid (drafts... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Missing wet method still open. Perfect OJT on dry cutting proposed. Comment?",
    [
      "OJT makes dry cutting Table 1.",
      "HIER: turn the water on / use Table 1. Delivery cannot launder a skipped engineering control.",
      "AI chatbot is the water feed.",
      "Insurance is the water feed.",
    ],
    1,
    "HIER: delivery ≠ specified control.",
    "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "ANSI/ASSP Z490.1 training criteria (public)",
      fieldTakeaway: "Match method to objective: knowledge can use classroom/CBT/AI explainers; skill needs OJT, simulation, or observed practice; high-hazard tasks need a qualified person, not a chatbot badge. AI is a delivery aid (drafts... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Wrong tool: using FTA software as the forklift skill delivery. Comment?",
    [
      "Accept — FTA is PIT OJT.",
      "TOOL: forklift skill is OJT/evaluation on the equipment (or sim). A fault tree app is analysis, not delivery of that skill.",
      "Accept if RPN < 100.",
      "Accept if AI wrote the FTA.",
    ],
    1,
    "TOOL: analysis software ≠ skill delivery.",
    "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "ANSI/ASSP Z490.1 training criteria (public)",
      fieldTakeaway: "Match method to objective: knowledge can use classroom/CBT/AI explainers; skill needs OJT, simulation, or observed practice; high-hazard tasks need a qualified person, not a chatbot badge. AI is a delivery aid (drafts... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Two funded moves: extra umbrella AND extra AI seats; a practice rig and a coach are still open. Pair and miss?",
    [
      "Avoid + reduce; chat is OJT.",
      "Transfer + content licenses; missing skill delivery (rig + qualified coach) and any open engineering.",
      "Two competent persons.",
      "PEL + TLV complete delivery.",
    ],
    1,
    "FIN: insurance plus AI seats skip OJT.",
    "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "ANSI/ASSP Z490.1 training criteria (public)",
      fieldTakeaway: "Match method to objective: knowledge can use classroom/CBT/AI explainers; skill needs OJT, simulation, or observed practice; high-hazard tasks need a qualified person, not a chatbot badge. AI is a delivery aid (drafts... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Trainee hospitalized during unsupervised “AI-guided” live work. OSHA clock?",
    [
      "Chat log is the 8-hour clock.",
      "Hospitalization: 24 hours to OSHA. An AI transcript is not 1904.",
      "7 days because it was virtual.",
      "No clock if the badge auto-issued.",
    ],
    1,
    "TIME: 24-hour hospitalization.",
    "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "ANSI/ASSP Z490.1 training criteria (public)",
      fieldTakeaway: "Match method to objective: knowledge can use classroom/CBT/AI explainers; skill needs OJT, simulation, or observed practice; high-hazard tasks need a qualified person, not a chatbot badge. AI is a delivery aid (drafts... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Translation: AI renders the procedure into the crew’s language. Best use?",
    [
      "Ship unreviewed — fluency equals accuracy.",
      "Good delivery aid if a qualified person verifies technical meaning. Translation is not automatic competence.",
      "Translation replaces fit testing.",
      "Translation is inverse square.",
    ],
    1,
    "STEM: AI translation is aid + verify.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "ANSI/ASSP Z490.1 training criteria (public)",
      fieldTakeaway: "Match method to objective: knowledge can use classroom/CBT/AI explainers; skill needs OJT, simulation, or observed practice; high-hazard tasks need a qualified person, not a chatbot badge. AI is a delivery aid (drafts... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at a refinery coker outage. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Best rule for delivery including AI.",
    [
      "Cheapest method always.",
      "Match method to the objective: knowledge can be CBT/AI; skill needs OJT/sim and a human qualifier; AI is not a competent person.",
      "Always classroom 8 hours.",
      "Always chatbot.",
    ],
    1,
    "STEM: the class rule.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "ANSI/ASSP Z490.1 training criteria (public)",
      fieldTakeaway: "Match method to objective: knowledge can use classroom/CBT/AI explainers; skill needs OJT, simulation, or observed practice; high-hazard tasks need a qualified person, not a chatbot badge. AI is a delivery aid (drafts... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];

