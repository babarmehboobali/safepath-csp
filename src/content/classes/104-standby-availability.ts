import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D2.06";

export const classFields: ClassFields = {
  hook: "A standby diesel and a primary motor share a mission. Someone multiplies reliabilities as if both must run, then confuses MTBF with availability.",
  hookOilGas: `On a production platform or plant, standby availability shows up when operations push throughput while a higher control is still open. Active parallel: Rp=1-(1-R1)(1-R2). Prefer a system/design fix over a polished lower-row program that keeps the wells online.`,
  hookConstruction: `On a busy jobsite, standby availability shows up when schedule pressure sells a permit, rotation, or PPE package while design still can change. Active parallel: Rp=1-(1-R1)(1-R2). Discriminate the open row before you laminate another card.`,
  rule: "Active parallel: Rp=1-(1-R1)(1-R2). Standby (perfect switching, inactive until needed) is a different model — do not blindly use active-parallel on a cold spare without the stem. Availability A=MTBF/(MTBF+MTTR) for the simple alternating renewals model. MTTR is repair time, not MTBF.",
  modelCaption: "Identify framework → compute with stem units → reject distractors → prefer system/design when tied.",
  workedCase: "MTBF=980 h, MTTR=20 h → A=980/1000=0.98. Two active parallel units at R=0.90 → Rp=1-0.1×0.1=0.99. Multiplying 0.9×0.9=0.81 is the series trap.",
  trapsJson: traps("Multiplying redundant reliabilities (series trap).", "Using MTTR as MTBF.", "Treating availability as mission R(t)."),
  contrastJson: contrast([
    { looksLike: "MTBF", actually: "Mean up time between failures" },
    { looksLike: "MTTR", actually: "Mean repair/restoration time" },
    { looksLike: "Availability", actually: "MTBF/(MTBF+MTTR)" },
    { looksLike: "Active parallel", actually: "Both able to run; one suffices" },
    { looksLike: "Cold standby", actually: "Spare inactive until switched" },
  ]),
  mustScoreJson: mustScore(
    "Availability approximates uptime/(uptime+downtime); standby systems need successful switchover.",
    "Hidden failures need proof tests.",
    "Cold/hot/warm standby assumptions change math \u2014 read stem.",
    "Common-cause can defeat standby redundancy.",
    "Maintenance strategies affect achieved availability.",
    "Safety functions may need higher integrity than production availability metrics.",
    "Eliminate demand when open.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "standby never tested", pick: "proof-test switchover" },
    { ifStem: "shared failure mode across standby", pick: "reduce common-cause" },
    { ifStem: "availability numbers given", pick: "apply the stem formula carefully" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "hazard removable", pick: "prefer elimination" },
  ),

  brief: `Active parallel: Rp=1-(1-R1)(1-R2). Standby (perfect switching, inactive until needed) is a different model â do not blindly use active-parallel on a cold spare without the stem. Availability A=MTBF/(MTBF+MTTR) for the simple alternating renewals model. MTTR is repair time, not MTBF. If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Active parallel: Rp=1-(1-R1)(1-R2). Standby (perfect switching, inactive until needed) is a different model â do not blindly use active-parallel on a cold spare without the stem. Availability A=MTBF/(MTBF+MTTR) for the simple alternating renewals model. MTTR is repair time, not MTBF. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
A standby diesel and a primary motor share a mission. Someone multiplies reliabilities as if both must run, then confuses MTBF with availability. Oil-and-gas skin: On a production platform or plant, standby availability shows up when operations push throughput while a higher control is still open. Active parallel: Rp=1-(1-R1)(1-R2). Prefer a system/design fix over a polished lower-row program that keeps the wells online. Construction skin: On a busy jobsite, standby availability shows up when schedule pressure sells a permit, rotation, or PPE package while design still can change. Discriminate the open row before you laminate another card. Work the case: MTBF=980 h, MTTR=20 h â A=980/1000=0.98. Two active parallel units at R=0.90 â Rp=1-0.1Ã0.1=0.99. Multiplying 0.9Ã0.9=0.81 is the series trap. Classic traps: Multiplying redundant reliabilities (series trap).; Using MTTR as MTBF.; Treating availability as mission R(t).. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for standby availability. Verify whether a higher system or design fix is still open. Contrast labels: MTBF is actually Mean up time between failures; MTTR is actually Mean repair/restoration time; Availability is actually MTBF/(MTBF+MTTR); Active parallel is actually Both able to run; one suffices; Cold standby is actually Spare inactive until switched. If the stem shows standby never tested, pick proof-test switchover. If the stem shows shared failure mode across standby, pick reduce common-cause. If the stem shows availability numbers given, pick apply the stem formula carefully. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows hazard removable, pick prefer elimination. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Availability vs active parallel sits in CSP-11 Domain 2 Management Systems. The exam tests whether you apply the rule when a package already looks complete. Core rule: Active parallel: Rp=1-(1-R1)(1-R2). Standby (perfect switching, inactive until needed) is a different model â do not blindly use active-parallel on a cold spare without the stem. Availability A=MTBF/(MTBF+MTTR) for the simple alternating renewals model. MTTR is repair time, not MTBF. Field context: A standby diesel and a primary motor share a mission. Someone multiplies reliabilities as if both must run, then confuses MTBF with availability. The oil-and-gas skin shifts the same decision into production pressure: On a production platform or plant, standby availability shows up when operations push throughput while a higher control is still open. Active parallel: Rp=1-(1-R1)(1-R2). Prefer a system/design fix over a polished lower-row program that keeps the wells online. The construction skin shifts it into schedule and trade stacking: On a busy jobsite, standby availability shows up when schedule pressure sells a permit, rotation, or PPE package while design still can change. Discriminate the open row before you laminate another card. Model caption for this class: Identify framework â compute with stem units â reject distractors â prefer system/design when tied. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Availability approximates uptime/(uptime+downtime); standby systems need successful switchover. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Hidden failures need proof tests. (3) Cold/hot/warm standby assumptions change math — read stem. (4) Common-cause can defeat standby redundancy. (5) Maintenance strategies affect achieved availability. (6) Safety functions may need higher integrity than production availability metrics. (7) Eliminate demand when open. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: MTBF=980 h, MTTR=20 h â A=980/1000=0.98. Two active parallel units at R=0.90 â Rp=1-0.1Ã0.1=0.99. Multiplying 0.9Ã0.9=0.81 is the series trap. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Multiplying redundant reliabilities (series trap).; Using MTTR as MTBF.; Treating availability as mission R(t).. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “MTBF” is really Mean up time between failures; “MTTR” is really Mean repair/restoration time; “Availability” is really MTBF/(MTBF+MTTR); “Active parallel” is really Both able to run; one suffices; “Cold standby” is really Spare inactive until switched. Stem-if-then map: if standby never tested → proof-test switchover; if shared failure mode across standby → reduce common-cause; if availability numbers given → apply the stem formula carefully; if two answers work → higher hierarchy / system / design; if hazard removable → prefer elimination. Scoring favors evidence, owners, verification, and hierarchy-smart controls on standby availability. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Availability vs active parallel?",
  cardBack: "A=MTBF/(MTBF+MTTR); Rp=1-(1-R1)(1-R2). Study only.",
  teachBackKey: "State A formula and active-parallel formula; warn standby≠active without stem.",
  formulaSlug: "availability",
};

export const items: ClassItem[] = [
  exam(
    T,
    "A diesel shows MTBF = 980 h and MTTR = 20 h on the stem. Closest steady-state availability A = MTBF/(MTBF+MTTR)?",
    [
      "0.98",
      "0.90",
      "0.50",
      "1.20",
    ],
    0,
    "Core Rule: classify the last sentence, then apply the topic rule. Calculation Steps: None unless numbers appear — then compute carefully. Standards Cited: CSP-11 teaching for this class. Why Each Distractor Fails: 0.98: Correct: 980/1000 = 0.98. | 0.90: Used the wrong ratio or dropped MTTR. | 0.50: Would require MTBF≈MTTR — not this stem. | 1.20: Availability cannot exceed 1.",
    "FORM",
    "Exam",
    [
      "Correct: 980/1000 = 0.98.",
      "Used the wrong ratio or dropped MTTR.",
      "Would require MTBF≈MTTR — not this stem.",
      "Availability cannot exceed 1.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Active parallel: Rp=1-(1-R1)(1-R2). Standby (perfect switching, inactive until needed) is a different model — do not blindly use active-parallel on a cold spare without the stem. Availability A=MTBF/(MTBF+MTTR) for th... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at a semiconductor tool install. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Stem gives MTBF = 1990 h and MTTR = 10 h. What is A.",
    [
      "0.995",
      "0.90",
      "0.50",
      "2.0",
    ],
    0,
    "Core Rule: classify the last sentence, then apply the topic rule. Calculation Steps: None unless numbers appear — then compute carefully. Standards Cited: CSP-11 teaching for this class. Why Each Distractor Fails: 0.995: Correct: 1990/2000 = 0.995. | 0.90: Understates availability. | 0.50: Implies equal up/down — not given. | 2.0: Impossible — A ≤ 1.",
    "FORM",
    "Exam",
    [
      "Correct: 1990/2000 = 0.995.",
      "Understates availability.",
      "Implies equal up/down — not given.",
      "Impossible — A ≤ 1.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Active parallel: Rp=1-(1-R1)(1-R2). Standby (perfect switching, inactive until needed) is a different model — do not blindly use active-parallel on a cold spare without the stem. Availability A=MTBF/(MTBF+MTTR) for th... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Two independent active-parallel pumps each have R = 0.90. What is system Rp = 1−(1−R)^2?",
    [
      "0.99",
      "0.81",
      "0.90",
      "1.80",
    ],
    0,
    "Core Rule: classify the last sentence, then apply the topic rule. Calculation Steps: None unless numbers appear — then compute carefully. Standards Cited: CSP-11 teaching for this class. Why Each Distractor Fails: 0.99: Correct: 1−0.1×0.1 = 0.99. | 0.81: Multiplied reliabilities as if series. | 0.90: Copied a single unit. | 1.80: Summed reliabilities — invalid.",
    "FORM",
    "Exam",
    [
      "Correct: 1−0.1×0.1 = 0.99.",
      "Multiplied reliabilities as if series.",
      "Copied a single unit.",
      "Summed reliabilities — invalid.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Active parallel: Rp=1-(1-R1)(1-R2). Standby (perfect switching, inactive until needed) is a different model — do not blindly use active-parallel on a cold spare without the stem. Availability A=MTBF/(MTBF+MTTR) for th... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Two units in series: R1 = 0.95, R2 = 0.90. Series reliability?",
    [
      "0.855",
      "0.99",
      "1.85",
      "0.05",
    ],
    0,
    "Core Rule: classify the last sentence, then apply the topic rule. Calculation Steps: None unless numbers appear — then compute carefully. Standards Cited: CSP-11 teaching for this class. Why Each Distractor Fails: 0.855: Correct: 0.95×0.90 = 0.855. | 0.99: Used active-parallel formula. | 1.85: Added reliabilities. | 0.05: Used unreliability alone.",
    "FORM",
    "Exam",
    [
      "Correct: 0.95×0.90 = 0.855.",
      "Used active-parallel formula.",
      "Added reliabilities.",
      "Used unreliability alone.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Active parallel: Rp=1-(1-R1)(1-R2). Standby (perfect switching, inactive until needed) is a different model — do not blindly use active-parallel on a cold spare without the stem. Availability A=MTBF/(MTBF+MTTR) for th... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Availability is reported as 0.98 for a critical blower. Roughly what does that mean?",
    [
      "About 2% of time unavailable on the long-run model",
      "Never fails",
      "Fails 98% of days",
      "MTTR is zero",
    ],
    0,
    "Core Rule: classify the last sentence, then apply the topic rule. Calculation Steps: None unless numbers appear — then compute carefully. Standards Cited: CSP-11 teaching for this class. Why Each Distractor Fails: About 2% of time unavailable on the long-run model: Correct: long-run fraction down ≈ 1−A = 0.02. | Never fails: A<1 still allows downtime. | Fails 98% of days: Misreads 0.98 as failure rate. | MTTR is zero: MTTR zero would force A=1.",
    "STEM",
    "Exam",
    [
      "Correct: long-run fraction down ≈ 1−A = 0.02.",
      "A<1 still allows downtime.",
      "Misreads 0.98 as failure rate.",
      "MTTR zero would force A=1.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Active parallel: Rp=1-(1-R1)(1-R2). Standby (perfect switching, inactive until needed) is a different model — do not blindly use active-parallel on a cold spare without the stem. Availability A=MTBF/(MTBF+MTTR) for th... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "A cold spare diesel has imperfect transfer switching. Best CSP move on the stem?",
    [
      "Model the switch and switching reliability — do not pretend active-parallel",
      "Blindly multiply as active parallel",
      "Ignore the spare",
      "Set A=1 by policy",
    ],
    0,
    "Core Rule: classify the last sentence, then apply the topic rule. Calculation Steps: None unless numbers appear — then compute carefully. Standards Cited: CSP-11 teaching for this class. Why Each Distractor Fails: Model the switch and switching reliability — do not pretend active-parallel: Correct: imperfect switching needs its own model — not blind active-parallel. | Blindly multiply as active parallel: Active-parallel overstates a cold spare. | Ignore the spare: Ignoring the spare wastes a strategy. | Set A=1 by policy: Policy cannot invent A=1.",
    "STEM",
    "Exam",
    [
      "Correct: imperfect switching needs its own model — not blind active-parallel.",
      "Active-parallel overstates a cold spare.",
      "Ignoring the spare wastes a strategy.",
      "Policy cannot invent A=1.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Active parallel: Rp=1-(1-R1)(1-R2). Standby (perfect switching, inactive until needed) is a different model — do not blindly use active-parallel on a cold spare without the stem. Availability A=MTBF/(MTBF+MTTR) for th... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "MTBF is fixed by the installed machine. Which action raises availability most directly?",
    [
      "Cut MTTR with parts, skill, and access",
      "Buy posters",
      "Raise λ on purpose",
      "Delete the spare",
    ],
    0,
    "Core Rule: classify the last sentence, then apply the topic rule. Calculation Steps: None unless numbers appear — then compute carefully. Standards Cited: CSP-11 teaching for this class. Why Each Distractor Fails: Cut MTTR with parts, skill, and access: Correct: shorter MTTR raises A when MTBF is fixed. | Buy posters: Posters do not change A. | Raise λ on purpose: Raising failure rate hurts A. | Delete the spare: Deleting spare removes redundancy.",
    "HIER",
    "Exam",
    [
      "Correct: shorter MTTR raises A when MTBF is fixed.",
      "Posters do not change A.",
      "Raising failure rate hurts A.",
      "Deleting spare removes redundancy.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Active parallel: Rp=1-(1-R1)(1-R2). Standby (perfect switching, inactive until needed) is a different model — do not blindly use active-parallel on a cold spare without the stem. Availability A=MTBF/(MTBF+MTTR) for th... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at a bridge deck pour laydown yard. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Stem: MTBF = 500 h, MTTR = 500 h. Availability.",
    [
      "0.50",
      "1.00",
      "0.00",
      "2.00",
    ],
    0,
    "Core Rule: classify the last sentence, then apply the topic rule. Calculation Steps: None unless numbers appear — then compute carefully. Standards Cited: CSP-11 teaching for this class. Why Each Distractor Fails: 0.50: Correct: 500/1000 = 0.50. | 1.00: Would require MTTR=0. | 0.00: Would require MTBF=0. | 2.00: Impossible A>1.",
    "FORM",
    "Exam",
    [
      "Correct: 500/1000 = 0.50.",
      "Would require MTTR=0.",
      "Would require MTBF=0.",
      "Impossible A>1.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Active parallel: Rp=1-(1-R1)(1-R2). Standby (perfect switching, inactive until needed) is a different model — do not blindly use active-parallel on a cold spare without the stem. Availability A=MTBF/(MTBF+MTTR) for th... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Two 'independent' parallel fans share one starter and one power feed. Best critique?",
    [
      "Common-cause dependence — independence assumption fails",
      "Automatic A=1",
      "Series math is mandatory",
      "Ignore shared energy",
    ],
    0,
    "Core Rule: classify the last sentence, then apply the topic rule. Calculation Steps: None unless numbers appear — then compute carefully. Standards Cited: CSP-11 teaching for this class. Why Each Distractor Fails: Common-cause dependence — independence assumption fails: Correct: shared starter/feed is common-cause — not independent. | Automatic A=1: Shared energy prevents A=1. | Series math is mandatory: Series is not forced by the critique. | Ignore shared energy: Shared energy is the point.",
    "STEM",
    "Exam",
    [
      "Correct: shared starter/feed is common-cause — not independent.",
      "Shared energy prevents A=1.",
      "Series is not forced by the critique.",
      "Shared energy is the point.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Active parallel: Rp=1-(1-R1)(1-R2). Standby (perfect switching, inactive until needed) is a different model — do not blindly use active-parallel on a cold spare without the stem. Availability A=MTBF/(MTBF+MTTR) for th... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Standby reliability is marginal and a higher design change is still open. Prefer?",
    [
      "Improve design/redundancy at the source over paperwork",
      "More posters",
      "Longer MTTR",
      "Delete monitoring",
    ],
    0,
    "Core Rule: classify the last sentence, then apply the topic rule. Calculation Steps: None unless numbers appear — then compute carefully. Standards Cited: CSP-11 teaching for this class. Why Each Distractor Fails: Improve design/redundancy at the source over paperwork: Correct: design/redundancy beats paperwork when still open. | More posters: Posters are lower-row theater. | Longer MTTR: Longer MTTR hurts A. | Delete monitoring: Deleting monitoring removes detection.",
    "HIER",
    "Exam",
    [
      "Correct: design/redundancy beats paperwork when still open.",
      "Posters are lower-row theater.",
      "Longer MTTR hurts A.",
      "Deleting monitoring removes detection.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Active parallel: Rp=1-(1-R1)(1-R2). Standby (perfect switching, inactive until needed) is a different model — do not blindly use active-parallel on a cold spare without the stem. Availability A=MTBF/(MTBF+MTTR) for th... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Stem uses R(t)=e^(−λt) with λ=1/MTBF. Required modeling assumption?",
    [
      "Constant hazard / memoryless exponential as stated",
      "Wear-out bathtub ignored always forever",
      "A must be 1",
      "MTTR equals MTBF",
    ],
    0,
    "Core Rule: classify the last sentence, then apply the topic rule. Calculation Steps: None unless numbers appear — then compute carefully. Standards Cited: CSP-11 teaching for this class. Why Each Distractor Fails: Constant hazard / memoryless exponential as stated: Correct: exponential constant-hazard as the stem states. | Wear-out bathtub ignored always forever: Bathtub wear-out is a different model. | A must be 1: Reliability model ≠ A=1. | MTTR equals MTBF: No such identity required.",
    "FORM",
    "Exam",
    [
      "Correct: exponential constant-hazard as the stem states.",
      "Bathtub wear-out is a different model.",
      "Reliability model ≠ A=1.",
      "No such identity required.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Active parallel: Rp=1-(1-R1)(1-R2). Standby (perfect switching, inactive until needed) is a different model — do not blindly use active-parallel on a cold spare without the stem. Availability A=MTBF/(MTBF+MTTR) for th... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Two answers both improve mission success: a validated redundant train versus a laminated availability poster. Prefer?",
    [
      "Redundant/system design over poster theater",
      "Poster theater",
      "Ignore switching",
      "Force series everywhere",
    ],
    0,
    "Core Rule: classify the last sentence, then apply the topic rule. Calculation Steps: None unless numbers appear — then compute carefully. Standards Cited: CSP-11 teaching for this class. Why Each Distractor Fails: Redundant/system design over poster theater: Correct: redundant/system design beats poster theater. | Poster theater: Poster does not create uptime. | Ignore switching: Switching can dominate cold-spare reality. | Force series everywhere: Series everywhere is not the rule.",
    "HIER",
    "Exam",
    [
      "Correct: redundant/system design beats poster theater.",
      "Poster does not create uptime.",
      "Switching can dominate cold-spare reality.",
      "Series everywhere is not the rule.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Active parallel: Rp=1-(1-R1)(1-R2). Standby (perfect switching, inactive until needed) is a different model — do not blindly use active-parallel on a cold spare without the stem. Availability A=MTBF/(MTBF+MTTR) for th... Verify the critical step before accepting a lower-tier control.",
    }
  )
];
