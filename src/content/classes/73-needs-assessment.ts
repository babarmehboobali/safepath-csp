import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D7.01";

export const classFields: ClassFields = {
  hook: "A director wants “fall protection training for everyone by Friday” because a video went viral. No incident data, no task analysis, no audience split between connectors and designers. You are the CSP. The question is what problem the training is supposed to solve.",
  hookOilGas: `A director wants âH2S training for everyone by Fridayâ because a video went viral. No incident data, no task analysis, no split between board operators and visitors. You are the CSP. The question is what problem the training is supposed to solve.`,
  hookConstruction: `A director wants âfall protection training for everyone by Fridayâ because a video went viral. No incident data, no task analysis, no split between connectors and office staff. You are the CSP. The question is what problem the training is supposed to solve.`,
  rule: "Needs assessment before content: name the performance gap (knowledge vs skill vs motivation vs environment/design). Use data (incidents, observations, sampling, regulations, audience). If the gap is a missing guard, training is the wrong object (HIER). If two answers work, take higher hierarchy / system / design, then train the residual.",
  modelCaption: "Funnel: BUSINESS/LEGAL REQUIREMENT → PERFORMANCE GAP (K / skill / will / design) → AUDIENCE/TASK → OBJECTIVES. A viral video tagged “not a needs assessment.” Caption: don’t buy a class to replace a guard.",
  workedCase: "Falls: connectors at leading edges vs accountants in cubicles are different audiences. Data: three near-misses on unguarded edges, drawings still show no cable. Needs assessment: design gap first (PtD/guardrail), then skill gap for PFAS that remain. “Everyone by Friday” skips audience, task, and hierarchy.",
  brief: `Needs assessment before content: name the performance gap (knowledge vs skill vs motivation vs environment/design). Use data (incidents, observations, sampling, regulations, audience). If the gap is a missing guard, training is the wrong object (HIER). If two answers work, take higher hierarchy / system / design, then train the residual. If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Needs assessment before content: name the performance gap (knowledge vs skill vs motivation vs environment/design). Use data (incidents, observations, sampling, regulations, audience). If the gap is a missing guard, training is the wrong object (HIER). If two answers work, take higher hierarchy / system / design, then train the residual. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
A director wants âfall protection training for everyone by Fridayâ because a video went viral. No incident data, no task analysis, no audience split between connectors and designers. You are the CSP. The question is what problem the training is supposed to solve. Oil-and-gas skin: A director wants âH2S training for everyone by Fridayâ because a video went viral. No incident data, no task analysis, no split between board operators and visitors. You are the CSP. Construction skin: A director wants âfall protection training for everyone by Fridayâ because a video went viral. No incident data, no task analysis, no split between connectors and office staff. You are the CSP. Work the case: Falls: connectors at leading edges vs accountants in cubicles are different audiences. Data: three near-misses on unguarded edges, drawings still show no cable. Needs assessment: design gap first (PtD/guardrail), then skill gap for PFAS that remain. âEveryone by Fridayâ skips audience, task, and hierarchy. Classic traps: Buying a course because a video went viral (no gap defined).; Using training to paper over a still-open engineering control.; One module for all audiences and all tasks.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for needs assessment. Verify whether a higher system or design fix is still open. Contrast labels: Needs assessment is actually Define gap, audience, task, legal driver — before slides; Viral / “everyone” is actually A communication urge — not analysis; Knowledge gap is actually Don’t know — training may help; Design/environment gap is actually Can’t succeed even if they know — hierarchy first; Objective is actually Observable performance after training — not “aware of safety”. If the stem shows gap is a missing interlock, pick engineer \u2014 do not train as primary. If the stem shows no needs assessment done, pick assess before building courses. If the stem shows MoC changed tasks, pick reassess training needs. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows only favorite topics are listed, pick prioritize risk-based needs. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `First step before “train everyone by Friday”? Can training replace a guardrail sits in CSP-11 Domain 7 Training and Competency. The exam tests whether you apply the rule when a package already looks complete. Core rule: Needs assessment before content: name the performance gap (knowledge vs skill vs motivation vs environment/design). Use data (incidents, observations, sampling, regulations, audience). If the gap is a missing guard, training is the wrong object (HIER). If two answers work, take higher hierarchy / system / design, then train the residual. Field context: A director wants âfall protection training for everyone by Fridayâ because a video went viral. No incident data, no task analysis, no audience split between connectors and designers. You are the CSP. The question is what problem the training is supposed to solve. The oil-and-gas skin shifts the same decision into production pressure: A director wants âH2S training for everyone by Fridayâ because a video went viral. No incident data, no task analysis, no split between board operators and visitors. You are the CSP. The construction skin shifts it into schedule and trade stacking: A director wants âfall protection training for everyone by Fridayâ because a video went viral. No incident data, no task analysis, no split between connectors and office staff. You are the CSP. Model caption for this class: Funnel: BUSINESS/LEGAL REQUIREMENT â PERFORMANCE GAP (K / skill / will / design) â AUDIENCE/TASK â OBJECTIVES. A viral video tagged ânot a needs assessment.â Caption: donât buy a class to replace a guard. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Training needs assessment finds skill/knowledge gaps that training can fix — and flags gaps that need design/engineering instead. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Do not prescribe training for a missing guard. (3) Use performance data, incidents, audits, and interviews as inputs. (4) Prioritize high-risk tasks and regulatory required training. (5) Objectives follow from needs — not from a favorite slide deck. (6) Reassess after MoC and incidents. (7) Hierarchy: fix the system first when open; train for residual. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Falls: connectors at leading edges vs accountants in cubicles are different audiences. Data: three near-misses on unguarded edges, drawings still show no cable. Needs assessment: design gap first (PtD/guardrail), then skill gap for PFAS that remain. âEveryone by Fridayâ skips audience, task, and hierarchy. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Buying a course because a video went viral (no gap defined).; Using training to paper over a still-open engineering control.; One module for all audiences and all tasks.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Needs assessment” is really Define gap, audience, task, legal driver — before slides; “Viral / “everyone”” is really A communication urge — not analysis; “Knowledge gap” is really Don’t know — training may help; “Design/environment gap” is really Can’t succeed even if they know — hierarchy first; “Objective” is really Observable performance after training — not “aware of safety”. Stem-if-then map: if gap is a missing interlock → engineer \u2014 do not train as primary; if no needs assessment done → assess before building courses; if MoC changed tasks → reassess training needs; if two answers work → higher hierarchy / system / design; if only favorite topics are listed → prioritize risk-based needs. Scoring favors evidence, owners, verification, and hierarchy-smart controls on needs assessment. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "First step before “train everyone by Friday”? Can training replace a guardrail?",
  cardBack: "Needs assessment: gap, audience, task, legal driver. Knowledge ≠ design gap. Training is admin — it does not replace open engineering. Study only — not allowed in the test center.",
  teachBackKey: "Pass if the sentence says define the performance gap and audience before content, and that a design/environment gap is not solved by a class.",
  trapsJson: traps(
    "Buying a course because a video went viral (no gap defined).",
    "Using training to paper over a still-open engineering control.",
    "One module for all audiences and all tasks.",
  ),
  contrastJson: contrast([
    { looksLike: "Needs assessment", actually: "Define gap, audience, task, legal driver — before slides" },
    { looksLike: "Viral / “everyone”", actually: "A communication urge — not analysis" },
    { looksLike: "Knowledge gap", actually: "Don’t know — training may help" },
    { looksLike: "Design/environment gap", actually: "Can’t succeed even if they know — hierarchy first" },
    { looksLike: "Objective", actually: "Observable performance after training — not “aware of safety”" },
  ]),
  mustScoreJson: mustScore(
    "Training needs assessment finds skill/knowledge gaps that training can fix \u2014 and flags gaps that need design/engineering instead.",
    "Do not prescribe training for a missing guard.",
    "Use performance data, incidents, audits, and interviews as inputs.",
    "Prioritize high-risk tasks and regulatory required training.",
    "Objectives follow from needs \u2014 not from a favorite slide deck.",
    "Reassess after MoC and incidents.",
    "Hierarchy: fix the system first when open; train for residual.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "gap is a missing interlock", pick: "engineer \u2014 do not train as primary" },
    { ifStem: "no needs assessment done", pick: "assess before building courses" },
    { ifStem: "MoC changed tasks", pick: "reassess training needs" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "only favorite topics are listed", pick: "prioritize risk-based needs" },
  ),

  formulaSlug: null,
};

export const items: ClassItem[] = [
  exam(
    T,
    "Director orders fall training for everyone by Friday after a viral video. No data, no audience split. Best first CSP move?",
    [
      "Buy the longest LMS package today.",
      "Needs assessment: name the gap (design vs knowledge vs skill), audience, and legal driver. Don’t start with “everyone.”",
      "Skip assessment if the video had good music.",
      "Issue back belts as the assessment.",
    ],
    1,
    "STEM: analysis before content.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "ANSI/ASSP Z490.1 training criteria (public)",
      fieldTakeaway: "Needs assessment before content: name the performance gap (knowledge vs skill vs motivation vs environment/design). Use data (incidents, observations, sampling, regulations, audience). If the gap is a missing guard, t... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Assessment shows unguarded roof edge; drawings can still add a cable. Team wants a 4-hour PFAS class as the fix. Best comment?",
    [
      "Class is PtD.",
      "Design the cable/guardrail (hierarchy still open). Train residual PFAS use only where the edge cannot yet be guarded.",
      "Class plus a viral video equals needs assessment.",
      "Class replaces 1910.140.",
    ],
    1,
    "HIER: training doesn’t replace open engineering.",
    "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "ANSI/ASSP Z490.1 training criteria (public)",
      fieldTakeaway: "Needs assessment before content: name the performance gap (knowledge vs skill vs motivation vs environment/design). Use data (incidents, observations, sampling, regulations, audience). If the gap is a missing guard, t... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Connectors vs office staff on “fall training for all.” Issue?",
    [
      "None — one module is cheaper.",
      "STEM: different tasks/audiences. Office staff may need awareness of roof access rules; connectors need skill on anchors. “All” hides the gap.",
      "None if both sign a roster.",
      "None if AI generated the slides.",
    ],
    1,
    "STEM: audience/task split is the assessment.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "ANSI/ASSP Z490.1 training criteria (public)",
      fieldTakeaway: "Needs assessment before content: name the performance gap (knowledge vs skill vs motivation vs environment/design). Use data (incidents, observations, sampling, regulations, audience). If the gap is a missing guard, t... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Workers can recite the rule but the tool still forces a twist. Gap type?",
    [
      "Knowledge — more slides.",
      "Environment/design gap. More knowledge training will not fix a tool that requires the awkward posture. Redesign, then residual practice.",
      "Motivation only — yell louder.",
      "TLV gap.",
    ],
    1,
    "STEM: knowing ≠ being able when the job is designed badly.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "ANSI/ASSP Z490.1 training criteria (public)",
      fieldTakeaway: "Needs assessment before content: name the performance gap (knowledge vs skill vs motivation vs environment/design). Use data (incidents, observations, sampling, regulations, audience). If the gap is a missing guard, t... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Wrong tool: FMEA RPN of “Legal sad” as the training needs assessment. Comment?",
    [
      "Accept — RPN is ADDIE.",
      "TOOL: use incident/observation/task/audience data. An RPN of feelings is not a needs analysis.",
      "Accept if RPN < 100.",
      "Accept if the LMS has SCORM.",
    ],
    1,
    "TOOL: FMEA of Legal ≠ needs assessment.",
    "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "ANSI/ASSP Z490.1 training criteria (public)",
      fieldTakeaway: "Needs assessment before content: name the performance gap (knowledge vs skill vs motivation vs environment/design). Use data (incidents, observations, sampling, regulations, audience). If the gap is a missing guard, t... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Two funded moves: extra umbrella AND extra LMS seats; the guardrail is still open. Pair and miss?",
    [
      "Avoid + reduce; LMS is a guardrail.",
      "Transfer + admin; missing Reduce (install the rail). Training spend is not the assessment output that was needed.",
      "Two audiences.",
      "PEL + TLV complete D7.",
    ],
    1,
    "FIN: insurance plus seats skip engineering.",
    "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "ANSI/ASSP Z490.1 training criteria (public)",
      fieldTakeaway: "Needs assessment before content: name the performance gap (knowledge vs skill vs motivation vs environment/design). Use data (incidents, observations, sampling, regulations, audience). If the gap is a missing guard, t... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at a hospital utility plant shutdown. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Objective written as “be aware of safety.” Problem.",
    [
      "None — awareness is measurable.",
      "STEM: objectives need observable performance and a criterion. Awareness is not a testable end-state.",
      "None if the viral video is attached.",
      "None if ROI is 60%.",
    ],
    1,
    "STEM: fuzzy objectives fail assessment-to-design.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "ANSI/ASSP Z490.1 training criteria (public)",
      fieldTakeaway: "Needs assessment before content: name the performance gap (knowledge vs skill vs motivation vs environment/design). Use data (incidents, observations, sampling, regulations, audience). If the gap is a missing guard, t... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Legal driver is 1910.134 fit testing. Team assesses a need for “general PPE culture slides” only. Miss?",
    [
      "Culture slides are fit tests.",
      "STEM: the named standard requires a specific performance (fit). Assessment must include that task, not a vibe module.",
      "Culture slides are 1910.95.",
      "Culture slides are Q=VA.",
    ],
    1,
    "STEM: legal task vs vibe training.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "ANSI/ASSP Z490.1 training criteria (public)",
      fieldTakeaway: "Needs assessment before content: name the performance gap (knowledge vs skill vs motivation vs environment/design). Use data (incidents, observations, sampling, regulations, audience). If the gap is a missing guard, t... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Motivation gap: they know, the guard exists, they bypass it for speed. Best assessment output?",
    [
      "Another lecture on the 29 CFR number.",
      "Not a knowledge class. Address supervision, job design/time, and consequences; keep a short skill refresh only if needed.",
      "Buy AI videos until morale improves.",
      "Lower the PEL.",
    ],
    1,
    "STEM: will/environment ≠ knowledge.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "ANSI/ASSP Z490.1 training criteria (public)",
      fieldTakeaway: "Needs assessment before content: name the performance gap (knowledge vs skill vs motivation vs environment/design). Use data (incidents, observations, sampling, regulations, audience). If the gap is a missing guard, t... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Hospitalization; team files only a purchase order for a course. OSHA clock?",
    [
      "LMS PO is the 8-hour clock.",
      "Hospitalization: 24 hours to OSHA. A training purchase is parallel, not 1904.",
      "7 days because Domain 7.",
      "No clock if needs assessment is pending.",
    ],
    1,
    "TIME: 24-hour hospitalization vs a course PO.",
    "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "ANSI/ASSP Z490.1 training criteria (public)",
      fieldTakeaway: "Needs assessment before content: name the performance gap (knowledge vs skill vs motivation vs environment/design). Use data (incidents, observations, sampling, regulations, audience). If the gap is a missing guard, t... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "IH data show silica AL exceeded. Training-only needs statement. Issue?",
    [
      "Training lowers μg/m³.",
      "HIER: assessment must include engineering/work-practice (Table 1/LEV). A class is residual, not the control.",
      "Training is the PEL.",
      "Training is 24.45.",
    ],
    1,
    "HIER: exposure data point to control, not only to slides.",
    "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "ANSI/ASSP Z490.1 training criteria (public)",
      fieldTakeaway: "Needs assessment before content: name the performance gap (knowledge vs skill vs motivation vs environment/design). Use data (incidents, observations, sampling, regulations, audience). If the gap is a missing guard, t... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at a plastics compounding turnaround. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Best needs-assessment question.",
    [
      "Which vendor has the most modules?",
      "What performance is missing, for whom, on which task, and is the job even doable as designed?",
      "What is the ACGIH TLV of training?",
      "How fast can everyone be rostered?",
    ],
    1,
    "STEM: gap/audience/task/design is the class rule.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "ANSI/ASSP Z490.1 training criteria (public)",
      fieldTakeaway: "Needs assessment before content: name the performance gap (knowledge vs skill vs motivation vs environment/design). Use data (incidents, observations, sampling, regulations, audience). If the gap is a missing guard, t... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];

