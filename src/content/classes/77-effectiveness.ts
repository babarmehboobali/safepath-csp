import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D7.04";

export const classFields: ClassFields = {
  hook: "The LMS dashboard is green: 100% complete, smiley sheets 4.9/5. Last week the same crew failed the live drill and a recordable occurred on the trained task. Leadership calls training “effective.” You are the CSP. The question is which Kirkpatrick-style level actually moved.",
  hookOilGas: `The LMS dashboard is green: 100% complete, smiley sheets 4.9/5. Last week the same crew failed the live well-control drill and a recordable occurred on the trained task. Leadership calls training âeffective.â You are the CSP. The question is which Kirkpatrick-style level actually moved.`,
  hookConstruction: `The LMS dashboard is green: 100% complete, smiley sheets 4.9/5. Last week the same crew failed the live rescue drill and a recordable occurred on the trained task. Leadership calls training âeffective.â You are the CSP. The question is which Kirkpatrick-style level actually moved.`,
  rule: "Effectiveness is behavior and results on the job, not a roster. Kirkpatrick-style: L1 reaction, L2 learning, L3 behavior/transfer, L4 results. L1 cannot prove L3. Transfer needs the workplace (tools, time, supervision) — if the guard is missing, training did not fail physics. If two answers work, take higher hierarchy / system / design, then measure residual skill on the task.",
  modelCaption: "Four rungs: L1 smiley | L2 test/demo | L3 on-the-job observation | L4 incidents/quality/lag+lead. A green LMS tagged “L1/completion only.” Caption: transfer lives at L3 with a usable job.",
  workedCase: "100% CBT + 4.9 smileys (L1, maybe L2 knowledge). Drill fail and a recordable on the same task = L3/L4 not shown. Measure: observe the task with a checklist, then incident/leading indicators. If the davit is still broken, L4 won’t move until design does — don’t blame only the CBT.",
  brief: `Effectiveness is behavior and results on the job, not a roster. Kirkpatrick-style: L1 reaction, L2 learning, L3 behavior/transfer, L4 results. L1 cannot prove L3. Transfer needs the workplace (tools, time, supervision) â if the guard is missing, training did not fail physics. If two answers work, take higher hierarchy / system / design, then measure If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Effectiveness is behavior and results on the job, not a roster. Kirkpatrick-style: L1 reaction, L2 learning, L3 behavior/transfer, L4 results. L1 cannot prove L3. Transfer needs the workplace (tools, time, supervision) â if the guard is missing, training did not fail physics. If two answers work, take higher hierarchy / system / design, then measure residual skill on the task. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
The LMS dashboard is green: 100% complete, smiley sheets 4.9/5. Last week the same crew failed the live drill and a recordable occurred on the trained task. Leadership calls training âeffective.â You are the CSP. The question is which Kirkpatrick-style level actually moved. Oil-and-gas skin: The LMS dashboard is green: 100% complete, smiley sheets 4.9/5. Last week the same crew failed the live well-control drill and a recordable occurred on the trained task. Construction skin: The LMS dashboard is green: 100% complete, smiley sheets 4.9/5. Last week the same crew failed the live rescue drill and a recordable occurred on the trained task. Work the case: 100% CBT + 4.9 smileys (L1, maybe L2 knowledge). Drill fail and a recordable on the same task = L3/L4 not shown. Measure: observe the task with a checklist, then incident/leading indicators. If the davit is still broken, L4 wonât move until design does â donât blame only the CBT. Classic traps: Calling completion/smileys proof of effectiveness.; A knowledge test as proof of transfer (L2 ≠ L3).; Blaming training for a still-open engineering gap.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for effectiveness. Verify whether a higher system or design fix is still open. Contrast labels: L1 reaction is actually Smileys — necessary comfort, not transfer; L2 learning is actually Knowledge/skill in the classroom or sim; L3 behavior is actually On-the-job performance — the effectiveness question; L4 results is actually Incidents, quality, exposure — also need hierarchy; Completion % is actually A roster metric — not L3. If the stem shows attendance is the only metric, pick measure on-job performance. If the stem shows quiz passed but field errors continue, pick check transfer and system barriers. If the stem shows guards missing so training cannot succeed, pick fix the system first. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows high-risk task lacks competence verification, pick add observed demonstration. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Do 4.9 smileys prove training worked? L1 vs L3 sits in CSP-11 Domain 7 Training and Competency. The exam tests whether you apply the rule when a package already looks complete. Core rule: Effectiveness is behavior and results on the job, not a roster. Kirkpatrick-style: L1 reaction, L2 learning, L3 behavior/transfer, L4 results. L1 cannot prove L3. Transfer needs the workplace (tools, time, supervision) â if the guard is missing, training did not fail physics. If two answers work, take higher hierarchy / system / design, then measure residual skill on the task. Field context: The LMS dashboard is green: 100% complete, smiley sheets 4.9/5. Last week the same crew failed the live drill and a recordable occurred on the trained task. Leadership calls training âeffective.â You are the CSP. The question is which Kirkpatrick-style level actually moved. The oil-and-gas skin shifts the same decision into production pressure: The LMS dashboard is green: 100% complete, smiley sheets 4.9/5. Last week the same crew failed the live well-control drill and a recordable occurred on the trained task. The construction skin shifts it into schedule and trade stacking: The LMS dashboard is green: 100% complete, smiley sheets 4.9/5. Last week the same crew failed the live rescue drill and a recordable occurred on the trained task. Model caption for this class: Four rungs: L1 smiley | L2 test/demo | L3 on-the-job observation | L4 incidents/quality/lag+lead. A green LMS tagged âL1/completion only.â Caption: transfer lives at L3 with a usable job. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Effectiveness means learners can perform on the job under real conditions — not only pass a quiz. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Use demonstrations, observations, drills, and leading indicators. (3) Transfer to the workplace needs supervisor support and correct tools/guards present. (4) If performance fails, distinguish training gaps from system gaps. (5) Document competence decisions for high-risk tasks. (6) Refresher timing follows risk and observed decay. (7) Do not declare success from attendance alone. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: 100% CBT + 4.9 smileys (L1, maybe L2 knowledge). Drill fail and a recordable on the same task = L3/L4 not shown. Measure: observe the task with a checklist, then incident/leading indicators. If the davit is still broken, L4 wonât move until design does â donât blame only the CBT. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Calling completion/smileys proof of effectiveness.; A knowledge test as proof of transfer (L2 ≠ L3).; Blaming training for a still-open engineering gap.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “L1 reaction” is really Smileys — necessary comfort, not transfer; “L2 learning” is really Knowledge/skill in the classroom or sim; “L3 behavior” is really On-the-job performance — the effectiveness question; “L4 results” is really Incidents, quality, exposure — also need hierarchy; “Completion %” is really A roster metric — not L3. Stem-if-then map: if attendance is the only metric → measure on-job performance; if quiz passed but field errors continue → check transfer and system barriers; if guards missing so training cannot succeed → fix the system first; if two answers work → higher hierarchy / system / design; if high-risk task lacks competence verification → add observed demonstration. Scoring favors evidence, owners, verification, and hierarchy-smart controls on effectiveness. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Do 4.9 smileys prove training worked? L1 vs L3?",
  cardBack: "L1 reaction ≠ L3 transfer. Effectiveness is observed on-the-job performance and results. Completion % is a roster. Study only — not allowed in the test center.",
  teachBackKey: "Pass if the sentence says smileys/completion are not transfer, names behavior/results as effectiveness, and does not blame training for an open design gap.",
  trapsJson: traps(
    "Calling completion/smileys proof of effectiveness.",
    "A knowledge test as proof of transfer (L2 ≠ L3).",
    "Blaming training for a still-open engineering gap.",
  ),
  contrastJson: contrast([
    { looksLike: "L1 reaction", actually: "Smileys — necessary comfort, not transfer" },
    { looksLike: "L2 learning", actually: "Knowledge/skill in the classroom or sim" },
    { looksLike: "L3 behavior", actually: "On-the-job performance — the effectiveness question" },
    { looksLike: "L4 results", actually: "Incidents, quality, exposure — also need hierarchy" },
    { looksLike: "Completion %", actually: "A roster metric — not L3" },
  ]),
  mustScoreJson: mustScore(
    "Effectiveness means learners can perform on the job under real conditions \u2014 not only pass a quiz.",
    "Use demonstrations, observations, drills, and leading indicators.",
    "Transfer to the workplace needs supervisor support and correct tools/guards present.",
    "If performance fails, distinguish training gaps from system gaps.",
    "Document competence decisions for high-risk tasks.",
    "Refresher timing follows risk and observed decay.",
    "Do not declare success from attendance alone.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "attendance is the only metric", pick: "measure on-job performance" },
    { ifStem: "quiz passed but field errors continue", pick: "check transfer and system barriers" },
    { ifStem: "guards missing so training cannot succeed", pick: "fix the system first" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "high-risk task lacks competence verification", pick: "add observed demonstration" },
  ),

  formulaSlug: null,
};

export const items: ClassItem[] = [
  exam(
    T,
    "LMS 100% complete, smileys 4.9/5; live drill failed and a recordable hit the trained task. Is training effective?",
    [
      "Yes — L1 and completion are L4.",
      "Not shown. L1/completion ≠ L3/L4. Observe the job and track results; fix method/design as the evidence indicates.",
      "Yes if the LMS is green.",
      "Yes if AI delivered it.",
    ],
    1,
    "STEM: reaction/completion are not effectiveness.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "ANSI/ASSP Z490.1 training criteria (public)",
      fieldTakeaway: "Effectiveness is behavior and results on the job, not a roster. Kirkpatrick-style: L1 reaction, L2 learning, L3 behavior/transfer, L4 results. L1 cannot prove L3. Transfer needs the workplace (tools, time, supervision... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at a grain elevator maintenance day. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Which pair is L2 vs L3.",
    [
      "Smileys vs more smileys.",
      "Correct seal-check demo in the class vs workers doing seal checks on the job a week later (observation).",
      "TRIR vs DART as L1.",
      "Slide count vs coffee.",
    ],
    1,
    "STEM: learning vs transfer.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "ANSI/ASSP Z490.1 training criteria (public)",
      fieldTakeaway: "Effectiveness is behavior and results on the job, not a roster. Kirkpatrick-style: L1 reaction, L2 learning, L3 behavior/transfer, L4 results. L1 cannot prove L3. Transfer needs the workplace (tools, time, supervision... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Davit still undersized. L4 incidents continue. Team blames only the CBT. Comment?",
    [
      "CBT causes capacity.",
      "HIER: results need a usable design. Training evaluation cannot excuse an open engineering gap.",
      "Smileys will resize the davit.",
      "ROI of slides is the structural calc.",
    ],
    1,
    "HIER: L4 confounder is the missing control.",
    "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "ANSI/ASSP Z490.1 training criteria (public)",
      fieldTakeaway: "Effectiveness is behavior and results on the job, not a roster. Kirkpatrick-style: L1 reaction, L2 learning, L3 behavior/transfer, L4 results. L1 cannot prove L3. Transfer needs the workplace (tools, time, supervision... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Last sentence: no one observed the live task. Dashboard still “effective.” Status?",
    [
      "Effective — L1 suffices.",
      "STEM: without L3 evidence you cannot claim transfer. Plan on-the-job observation.",
      "Effective if completion is 100%.",
      "Effective if TLV was on the slide.",
    ],
    1,
    "STEM: last sentence removed L3 data.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "ANSI/ASSP Z490.1 training criteria (public)",
      fieldTakeaway: "Effectiveness is behavior and results on the job, not a roster. Kirkpatrick-style: L1 reaction, L2 learning, L3 behavior/transfer, L4 results. L1 cannot prove L3. Transfer needs the workplace (tools, time, supervision... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at a semiconductor tool install. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Training ROI claimed as 4.9/5 × 200,000. Error.",
    [
      "None — smileys are TRIR.",
      "FORM/FIN: ROI=(Gain−Cost)/Cost with a defined gain. Smileys × 200,000 is not ROI and not TRIR.",
      "None if NIOSH 3 dB is used.",
      "None if LC=51.",
    ],
    1,
    "FORM: don’t mix smileys with 200,000-hour bases.",
    "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "ANSI/ASSP Z490.1 training criteria (public)",
      fieldTakeaway: "Effectiveness is behavior and results on the job, not a roster. Kirkpatrick-style: L1 reaction, L2 learning, L3 behavior/transfer, L4 results. L1 cannot prove L3. Transfer needs the workplace (tools, time, supervision... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "L2 quiz uses a TLV as the OSHA PEL and everyone scores 100%. Effectiveness?",
    [
      "L4 achieved.",
      "PELTLV: they learned the wrong object. High L2 on bad content is not effectiveness.",
      "L3 automatic.",
      "L1 is L4.",
    ],
    1,
    "PELTLV: wrong OEL in the test.",
    "PELTLV",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "ANSI/ASSP Z490.1 training criteria (public)",
      fieldTakeaway: "Effectiveness is behavior and results on the job, not a roster. Kirkpatrick-style: L1 reaction, L2 learning, L3 behavior/transfer, L4 results. L1 cannot prove L3. Transfer needs the workplace (tools, time, supervision... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Wrong tool: FMEA RPN of “dashboard green” as the evaluation plan. Comment?",
    [
      "Accept — RPN is Kirkpatrick.",
      "TOOL: specify L1–L4 measures matched to objectives. A color RPN is not an eval plan.",
      "Accept if RPN=4.9.",
      "Accept if AI painted it green.",
    ],
    1,
    "TOOL: FMEA of a dashboard ≠ evaluation.",
    "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "ANSI/ASSP Z490.1 training criteria (public)",
      fieldTakeaway: "Effectiveness is behavior and results on the job, not a roster. Kirkpatrick-style: L1 reaction, L2 learning, L3 behavior/transfer, L4 results. L1 cannot prove L3. Transfer needs the workplace (tools, time, supervision... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Two funded moves: extra umbrella AND extra LMS analytics; job observation still unfunded. Pair and miss?",
    [
      "Avoid + reduce; analytics are L3.",
      "Transfer + L1 dashboards; missing L3 observation (and any open engineering).",
      "Two L4s.",
      "PEL + TLV complete eval.",
    ],
    1,
    "FIN: insurance plus dashboards skip transfer evidence.",
    "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "ANSI/ASSP Z490.1 training criteria (public)",
      fieldTakeaway: "Effectiveness is behavior and results on the job, not a roster. Kirkpatrick-style: L1 reaction, L2 learning, L3 behavior/transfer, L4 results. L1 cannot prove L3. Transfer needs the workplace (tools, time, supervision... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Hospitalization on the trained task; team files only the smiley report. OSHA clock?",
    [
      "Smileys are the 8-hour clock.",
      "Hospitalization: 24 hours to OSHA. L1 forms are not 1904.",
      "7 days because training was complete.",
      "No clock if L2 was 100%.",
    ],
    1,
    "TIME: 24-hour hospitalization.",
    "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "ANSI/ASSP Z490.1 training criteria (public)",
      fieldTakeaway: "Effectiveness is behavior and results on the job, not a roster. Kirkpatrick-style: L1 reaction, L2 learning, L3 behavior/transfer, L4 results. L1 cannot prove L3. Transfer needs the workplace (tools, time, supervision... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Supervisor punishes the correct slow method. L3 stays flat. Best comment?",
    [
      "Buy more slides.",
      "Transfer climate is part of effectiveness. Fix supervision/job design; don’t only reteach the same CBT.",
      "Smileys will change the supervisor.",
      "AI will punish the supervisor.",
    ],
    1,
    "STEM: workplace climate gates L3.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "ANSI/ASSP Z490.1 training criteria (public)",
      fieldTakeaway: "Effectiveness is behavior and results on the job, not a roster. Kirkpatrick-style: L1 reaction, L2 learning, L3 behavior/transfer, L4 results. L1 cannot prove L3. Transfer needs the workplace (tools, time, supervision... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Skill objective evaluated only with a knowledge test. Issue?",
    [
      "Knowledge is skill.",
      "L2 method must match the objective. Skills need a demo/observation, not only MCQs.",
      "MCQs are L4.",
      "MCQs are Q=VA.",
    ],
    1,
    "STEM: mismatch of measure to objective.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "ANSI/ASSP Z490.1 training criteria (public)",
      fieldTakeaway: "Effectiveness is behavior and results on the job, not a roster. Kirkpatrick-style: L1 reaction, L2 learning, L3 behavior/transfer, L4 results. L1 cannot prove L3. Transfer needs the workplace (tools, time, supervision... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at a pharma suite changeover. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Best effectiveness rule.",
    [
      "Green LMS = effective.",
      "Claim effectiveness from on-the-job behavior and results, with hierarchy confounders named. Smileys are not transfer.",
      "Always Level 1 only.",
      "Always skip evaluation.",
    ],
    1,
    "STEM: the class rule.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "ANSI/ASSP Z490.1 training criteria (public)",
      fieldTakeaway: "Effectiveness is behavior and results on the job, not a roster. Kirkpatrick-style: L1 reaction, L2 learning, L3 behavior/transfer, L4 results. L1 cannot prove L3. Transfer needs the workplace (tools, time, supervision... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];

