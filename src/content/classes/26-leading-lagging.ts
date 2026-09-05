import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D2.07";

export const classFields: ClassFields = {
  hook: "The dashboard is all green: TRIR 0.4. Guards are still defeated, MoC temps are 200 days old, and near-miss tickets vanished after a zero-injury contest. You are the CSP. The question is what is leading and what is lagging.",
  hookOilGas: `The dashboard is all green: TRIR 0.4. ESD tests are overdue, MoC jumpers are 200 days old, and near-miss tickets vanished after a zero-injury bonus. You are the CSP. The question is what is leading and what is lagging.`,
  hookConstruction: `The dashboard is all green: TRIR 0.4. Guardrails are still missing on a leading edge, MoC crane swaps are undocumented, and near-miss tickets vanished after a contest. You are the CSP. The question is what is leading and what is lagging.`,
  rule: "Lagging measures harm that already happened (TRIR, DART, losses). Leading measures the health of controls before harm (completed MoC on time, functional tests, stop-the-job without retaliation, percent of energy isolated correctly). TRIR = (N × 200,000) / EH. A pretty TRIR with dying leading traces is not success.",
  modelCaption:
    "Two columns: LAGGING (TRIR, DART, claims) behind a red line labeled “harm already occurred”; LEADING (barrier tests, MoC cycle time, voice, hierarchy actions) in front of the line. Caption: do not steer with the rear-view mirror alone.",
  workedCase:
    "EH = 400,000, N = 2 recordables → TRIR = (2 × 200,000) / 400,000 = 1.0. If near-misses fell 80% after a contest, do not celebrate 1.0. Pair with: percent of interlocks passing function test, temps past expiration, time to restore a failed guard.",
  trapsJson: traps(
    "Treating TRIR as a leading culture KPI.",
    "Using 100,000 or headcount instead of 200,000 and actual hours.",
    "Counting observation quantity without quality (checkbox tours).",
  ),
  contrastJson: contrast([
    { looksLike: "TRIR / DART", actually: "Lagging rates of recorded harm" },
    { looksLike: "Function-test pass rate on interlocks", actually: "Leading — barrier health" },
    { looksLike: "Zero-injury contest", actually: "Often a suppressor of leading voice" },
    { looksLike: "Insurance premium", actually: "Financing signal — not a leading safety barrier metric" },
  ]),
  mustScoreJson: mustScore(
    "Lagging measures record harm already done; leading measures track inputs that predict risk.",
    "Do not manage only to TRIR while leading indicators rot.",
    "Leading indicators must be actionable and tied to controls.",
    "Vanity leading metrics (poster counts) lose to verification metrics.",
    "Balance scorecards: both leading and lagging have roles.",
    "Incentives on lagging alone can suppress reporting.",
    "Choose measures that hierarchy can improve \u2014 not only paperwork volume.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "only TRIR is on the dashboard", pick: "add actionable leading indicators" },
    { ifStem: "leading metric is poster count", pick: "replace with verification of critical controls" },
    { ifStem: "reporting drops after a lagging-only bonus", pick: "realign incentives" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "a critical safeguard is untested", pick: "make proof-test/completion a leading measure" },
  ),

  brief: `Lagging measures harm that already happened (TRIR, DART, losses). Leading measures the health of controls before harm (completed MoC on time, functional tests, stop-the-job without retaliation, percent of energy isolated correctly). TRIR = (N Ã 200,000) / EH. A pretty TRIR with dying leading traces is not success. If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Lagging measures harm that already happened (TRIR, DART, losses). Leading measures the health of controls before harm (completed MoC on time, functional tests, stop-the-job without retaliation, percent of energy isolated correctly). TRIR = (N Ã 200,000) / EH. A pretty TRIR with dying leading traces is not success. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
The dashboard is all green: TRIR 0.4. Guards are still defeated, MoC temps are 200 days old, and near-miss tickets vanished after a zero-injury contest. You are the CSP. The question is what is leading and what is lagging. Oil-and-gas skin: The dashboard is all green: TRIR 0.4. ESD tests are overdue, MoC jumpers are 200 days old, and near-miss tickets vanished after a zero-injury bonus. You are the CSP. Construction skin: The dashboard is all green: TRIR 0.4. Guardrails are still missing on a leading edge, MoC crane swaps are undocumented, and near-miss tickets vanished after a contest. You are the CSP. Work the case: EH = 400,000, N = 2 recordables â TRIR = (2 Ã 200,000) / 400,000 = 1.0. If near-misses fell 80% after a contest, do not celebrate 1.0. Pair with: percent of interlocks passing function test, temps past expiration, time to restore a failed guard. Classic traps: Treating TRIR as a leading culture KPI.; Using 100,000 or headcount instead of 200,000 and actual hours.; Counting observation quantity without quality (checkbox tours).. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for leading lagging. Verify whether a higher system or design fix is still open. Contrast labels: TRIR / DART is actually Lagging rates of recorded harm; Function-test pass rate on interlocks is actually Leading — barrier health; Zero-injury contest is actually Often a suppressor of leading voice; Insurance premium is actually Financing signal — not a leading safety barrier metric. If the stem shows only TRIR is on the dashboard, pick add actionable leading indicators. If the stem shows leading metric is poster count, pick replace with verification of critical controls. If the stem shows reporting drops after a lagging-only bonus, pick realign incentives. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows a critical safeguard is untested, pick make proof-test/completion a leading measure. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Leading vs lagging — TRIR 0.4 and near-misses gone. Success sits in CSP-11 Domain 2 Management Systems. The exam tests whether you apply the rule when a package already looks complete. Core rule: Lagging measures harm that already happened (TRIR, DART, losses). Leading measures the health of controls before harm (completed MoC on time, functional tests, stop-the-job without retaliation, percent of energy isolated correctly). TRIR = (N Ã 200,000) / EH. A pretty TRIR with dying leading traces is not success. Field context: The dashboard is all green: TRIR 0.4. Guards are still defeated, MoC temps are 200 days old, and near-miss tickets vanished after a zero-injury contest. You are the CSP. The question is what is leading and what is lagging. The oil-and-gas skin shifts the same decision into production pressure: The dashboard is all green: TRIR 0.4. ESD tests are overdue, MoC jumpers are 200 days old, and near-miss tickets vanished after a zero-injury bonus. You are the CSP. The construction skin shifts it into schedule and trade stacking: The dashboard is all green: TRIR 0.4. Guardrails are still missing on a leading edge, MoC crane swaps are undocumented, and near-miss tickets vanished after a contest. You are the CSP. Model caption for this class: Two columns: LAGGING (TRIR, DART, claims) behind a red line labeled âharm already occurredâ; LEADING (barrier tests, MoC cycle time, voice, hierarchy actions) in front of the line. Caption: do not steer with the rear-view mirror alone. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Lagging measures record harm already done; leading measures track inputs that predict risk. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Do not manage only to TRIR while leading indicators rot. (3) Leading indicators must be actionable and tied to controls. (4) Vanity leading metrics (poster counts) lose to verification metrics. (5) Balance scorecards: both leading and lagging have roles. (6) Incentives on lagging alone can suppress reporting. (7) Choose measures that hierarchy can improve — not only paperwork volume. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: EH = 400,000, N = 2 recordables â TRIR = (2 Ã 200,000) / 400,000 = 1.0. If near-misses fell 80% after a contest, do not celebrate 1.0. Pair with: percent of interlocks passing function test, temps past expiration, time to restore a failed guard. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Treating TRIR as a leading culture KPI.; Using 100,000 or headcount instead of 200,000 and actual hours.; Counting observation quantity without quality (checkbox tours).. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “TRIR / DART” is really Lagging rates of recorded harm; “Function-test pass rate on interlocks” is really Leading — barrier health; “Zero-injury contest” is really Often a suppressor of leading voice; “Insurance premium” is really Financing signal — not a leading safety barrier metric. Stem-if-then map: if only TRIR is on the dashboard → add actionable leading indicators; if leading metric is poster count → replace with verification of critical controls; if reporting drops after a lagging-only bonus → realign incentives; if two answers work → higher hierarchy / system / design; if a critical safeguard is untested → make proof-test/completion a leading measure. Scoring favors evidence, owners, verification, and hierarchy-smart controls on leading lagging. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Leading vs lagging — TRIR 0.4 and near-misses gone. Success?",
  cardBack:
    "No. TRIR is lagging: (N × 200,000)/EH. Leading is barrier health and honest voice. Contests can kill leading. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence defines lagging as harm already done, leading as control health before harm, and states TRIR = (N × 200,000)/EH.",
  formulaSlug: "trir",
};

export const items: ClassItem[] = [
  exam(T, "You are the CSP reviewing a live decision at a refinery coker outage. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: 2 recordables, 400,000 hours. TRIR.", [
    "0.5 using 100,000.",
    "1.0 using (2 × 200,000) / 400,000.",
    "2.0 using headcount 100.",
    "0.005 using hours only.",
  ], 1, "FORM: TRIR = (N × 200,000) / EH = 400,000 / 400,000 = 1.0.", "FORM", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Lagging measures harm that already happened (TRIR, DART, losses). Leading measures the health of controls before harm (completed MoC on time, functional tests, stop-the-job without retaliation, percent of energy isola... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "TRIR fell after a zero-recordable bonus. Near-miss tickets and first-aid logs collapsed. Best reading?", [
    "Leading and lagging both improved.",
    "Lagging may be gamed; leading voice died — do not call it success.",
    "The bonus is a leading barrier.",
    "DART is now leading.",
  ], 1, "A lagging drop with collapsing capture is silence.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Lagging measures harm that already happened (TRIR, DART, losses). Leading measures the health of controls before harm (completed MoC on time, functional tests, stop-the-job without retaliation, percent of energy isola... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Which is the strongest leading metric for a press cell?", [
    "TRIR.",
    "Percent of interlocks passing scheduled function tests, and time to restore failures.",
    "Workers-comp premium.",
    "Number of framed posters.",
  ], 1, "Barrier health is leading. Rates, premiums, and posters are not.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Lagging measures harm that already happened (TRIR, DART, losses). Leading measures the health of controls before harm (completed MoC on time, functional tests, stop-the-job without retaliation, percent of energy isola... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Analyst computes TRIR with 80 people × 40 h × 50 weeks as EH but ignores 30,000 overtime hours actually worked. Effect?", [
    "None — theoretical hours are the OSHA definition.",
    "FORM: EH must be actual hours; omitting overtime makes TRIR look better than the field.",
    "UNIT — feet vs meters.",
    "They should have used 24.45.",
  ], 1, "FORM: actual hours in the denominator.", "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Lagging measures harm that already happened (TRIR, DART, losses). Leading measures the health of controls before harm (completed MoC on time, functional tests, stop-the-job without retaliation, percent of energy isola... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Finance presents a lower insurance premium as the plant’s main leading indicator. Guards remain defeated. Best CSP position?", [
    "Accept premium as leading barrier health.",
    "Reject: premium is financing; defeated guards are the leading story.",
    "Raise the deductible to improve the leading KPI.",
    "Transfer remaining risk and celebrate.",
  ], 1, "FIN: insurance cost ≠ leading safety metric.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Lagging measures harm that already happened (TRIR, DART, losses). Leading measures the health of controls before harm (completed MoC on time, functional tests, stop-the-job without retaliation, percent of energy isola... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A team uses FMEA detection RPN as the “leading dashboard” and funds labels. MoC temps are expired. What went wrong?", [
    "Nothing — RPN is the preferred leading KPI.",
    "Wrong tool: detection RPN is not barrier-health leading, and expired temps are the actual leading failure.",
    "They should have used 14001 aspects.",
    "They should have used median TRIR.",
  ], 1, "TOOL: RPN is not a leading-lagging system.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Lagging measures harm that already happened (TRIR, DART, losses). Leading measures the health of controls before harm (completed MoC on time, functional tests, stop-the-job without retaliation, percent of energy isola... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Last sentence: the board will fund only one metric system this year. Best package?", [
    "TRIR-only with a pizza contest.",
    "A small set of barrier-health leadings plus honest TRIR/DART — never contests that pay for zeros.",
    "Poster counts only.",
    "Premium-only.",
  ], 1, "STEM limited the shopping. Pair leading barrier health with honest lagging.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Lagging measures harm that already happened (TRIR, DART, losses). Leading measures the health of controls before harm (completed MoC on time, functional tests, stop-the-job without retaliation, percent of energy isola... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "DART vs TRIR: 4 recordables, 1 of which is days-away, EH=200,000. Values?", [
    "TRIR 2.0 and DART 2.0 — same because all recordables count in both.",
    "TRIR = (4 × 200,000)/200,000 = 4.0; DART = (1 × 200,000)/200,000 = 1.0.",
    "Both use 100,000.",
    "DART uses calendar days in the denominator.",
  ], 1, "FORM: same 200,000 frame; N is different (all recordables vs DART cases).", "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Lagging measures harm that already happened (TRIR, DART, losses). Leading measures the health of controls before harm (completed MoC on time, functional tests, stop-the-job without retaliation, percent of energy isola... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at an offshore fabrication night shift. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Which “leading” program still fails hierarchy.", [
    "Tracking time to restore a failed light curtain and funding the restore.",
    "Hundreds of observations of an unguarded nip while the purchase of a guard is still open.",
    "Percent of MoCs closed before expiration.",
    "Function tests of retrieval gear.",
  ], 1, "HIER: observing an open nip is not a substitute for specifying the guard.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Lagging measures harm that already happened (TRIR, DART, losses). Leading measures the health of controls before harm (completed MoC on time, functional tests, stop-the-job without retaliation, percent of energy isola... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A recordable occurs Friday. The coordinator waits 10 days so this month’s TRIR stays green. Problem?", [
    "None — lagging rates are monthly.",
    "TIME: 1904 recording is 7 calendar days; delaying to protect TRIR is both a clock and a leading-culture failure.",
    "Must record within 8 hours for all recordables.",
    "Must wait for the 300A.",
  ], 1, "TIME: 7-day recording clock is not a dashboard convenience.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Lagging measures harm that already happened (TRIR, DART, losses). Leading measures the health of controls before harm (completed MoC on time, functional tests, stop-the-job without retaliation, percent of energy isola... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Personal samples at 40% PEL / 90% TLV (site criterion). Dashboard claims “leading IH = 100% PEL compliant.” Issue?", [
    "None — PEL is the only leading IH metric.",
    "PELTLV: the site’s TLV criterion is the leading miss; PEL-only greens the board while the SMS criterion is nearly exceeded.",
    "Convert to TRIR.",
    "Ignore IH in leading dashboards.",
  ], 1, "PELTLV on a leading dashboard.", "PELTLV",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Lagging measures harm that already happened (TRIR, DART, losses). Leading measures the health of controls before harm (completed MoC on time, functional tests, stop-the-job without retaliation, percent of energy isola... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Observation program pays $5 per card. Cards explode; almost all say “PPE worn.” Interlock failures are unreported. Best call?", [
    "Quantity of cards is a valid leading KPI.",
    "Quota/pay-per-card is gaming; leading must capture barrier failures, not PPE theater.",
    "Convert cards to TRIR.",
    "Add the cards to the 300 log.",
  ], 1, "Leading quality over countable theater.", "STEM", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Lagging measures harm that already happened (TRIR, DART, losses). Leading measures the health of controls before harm (completed MoC on time, functional tests, stop-the-job without retaliation, percent of energy isola... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
