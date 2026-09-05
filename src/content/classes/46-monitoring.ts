import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D3.04";

export const classFields: ClassFields = {
  hook: "A VP wants monitoring to be “TRIR plus the insurance renewal.” The mixer interlock has not been function-tested in 18 months. You are the CSP. The question is what the risk loop actually monitors.",
  hookOilGas: `A VP wants monitoring to be âTRIR plus the insurance renewal.â The well-control barrier has not been function-tested in 18 months. You are the CSP. The question is what the risk loop actually monitors.`,
  hookConstruction: `A VP wants monitoring to be âTRIR plus the OCIP renewal.â Leading-edge anchors have not been inspected since last season. You are the CSP. The question is what the risk loop actually monitors.`,
  rule: "Monitor closes the risk loop: barrier health, residual risk against criteria, and trigger review on change. Leading checks (interlock tests, inspections, inventory vs PHA assumptions, KRI) beat lagging TRIR as monitoring of controls. Insurance premium movement is not barrier health. 1904 clocks are not monitoring. If monitoring shows the control failed, treat again — hierarchy still applies.",
  modelCaption:
    "Loop with Monitor highlighted: Context → Identify → Analyze → Evaluate → Treat → Monitor → back. Callouts: “function test,” “inventory vs assumption,” “KRI,” and a crossed-out “TRIR-only / premium-only.” Caption: watch the control, not only the injury log.",
  workedCase:
    "Mixer 4 interlock specified last quarter. Monitor plan: monthly try-out logged, defeat sampling, downtime of the guard, solvent inventory vs the substituted volume. TRIR is reported separately as a lagging program metric — it does not tell you the interlock works. When a defeat is found, Treat again (redesign defeat-resistant), do not “monitor harder” with a poster. Premium drop at renewal is FIN, not a green barrier.",
  trapsJson: traps(
    "Using TRIR as the only monitor of a specific guard.",
    "Calling a cheaper premium proof that residual risk fell.",
    "Inspecting paperwork cadence while never function-testing the SIS/interlock.",
  ),
  contrastJson: contrast([
    { looksLike: "TRIR / DART", actually: "Lagging site rates — not barrier health for a named control" },
    { looksLike: "Function test / inspection", actually: "Monitoring that the Treat still works" },
    { looksLike: "Premium / deductible", actually: "Financing movement — not residual energy" },
    { looksLike: "1904 clocks", actually: "Legal notification — not the risk-process Monitor step" },
  ]),
  mustScoreJson: mustScore(
    "Monitoring verifies controls and risk assumptions still hold.",
    "Leading checks on critical controls beat lagging-only surprise.",
    "Inspection quality matters \u2014 check-box tours fail.",
    "Triggers for re-assessment include MoC, incidents, and threshold breaches.",
    "Independence of monitoring from the operator of the control strengthens assurance.",
    "Corrective action must follow failed monitoring.",
    "Do not monitor vanity metrics while critical barriers go untested.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "critical safeguard is never proof-tested", pick: "add monitoring of that control" },
    { ifStem: "monitoring finds failure but no CAPA", pick: "open corrective action" },
    { ifStem: "only TRIR is monitored", pick: "add leading control-health measures" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "MoC changed the barrier", pick: "reset monitoring criteria" },
  ),

  brief: `Monitor closes the risk loop: barrier health, residual risk against criteria, and trigger review on change. Leading checks (interlock tests, inspections, inventory vs PHA assumptions, KRI) beat lagging TRIR as monitoring of controls. Insurance premium movement is not barrier health. 1904 clocks are not monitoring. If monitoring shows the control failed, treat again â hierarchy If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Monitor closes the risk loop: barrier health, residual risk against criteria, and trigger review on change. Leading checks (interlock tests, inspections, inventory vs PHA assumptions, KRI) beat lagging TRIR as monitoring of controls. Insurance premium movement is not barrier health. 1904 clocks are not monitoring. If monitoring shows the control failed, treat again â hierarchy still applies. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
A VP wants monitoring to be âTRIR plus the insurance renewal.â The mixer interlock has not been function-tested in 18 months. You are the CSP. The question is what the risk loop actually monitors. Oil-and-gas skin: A VP wants monitoring to be âTRIR plus the insurance renewal.â The well-control barrier has not been function-tested in 18 months. You are the CSP. Construction skin: A VP wants monitoring to be âTRIR plus the OCIP renewal.â Leading-edge anchors have not been inspected since last season. You are the CSP. Work the case: Mixer 4 interlock specified last quarter. Monitor plan: monthly try-out logged, defeat sampling, downtime of the guard, solvent inventory vs the substituted volume. TRIR is reported separately as a lagging program metric â it does not tell you the interlock works. When a defeat is found, Treat again (redesign defeat-resistant), do not âmonitor harderâ with a poster. Premium drop at renewal is FIN, not a green barrier. Classic traps: Using TRIR as the only monitor of a specific guard.; Calling a cheaper premium proof that residual risk fell.; Inspecting paperwork cadence while never function-testing the SIS/interlock.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for monitoring. Verify whether a higher system or design fix is still open. Contrast labels: TRIR / DART is actually Lagging site rates — not barrier health for a named control; Function test / inspection is actually Monitoring that the Treat still works; Premium / deductible is actually Financing movement — not residual energy; 1904 clocks is actually Legal notification — not the risk-process Monitor step. If the stem shows critical safeguard is never proof-tested, pick add monitoring of that control. If the stem shows monitoring finds failure but no CAPA, pick open corrective action. If the stem shows only TRIR is monitored, pick add leading control-health measures. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows MoC changed the barrier, pick reset monitoring criteria. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Monitoring — TRIR or the interlock test? Is a cheaper premium a green barrier sits in CSP-11 Domain 3 Risk Management. The exam tests whether you apply the rule when a package already looks complete. Core rule: Monitor closes the risk loop: barrier health, residual risk against criteria, and trigger review on change. Leading checks (interlock tests, inspections, inventory vs PHA assumptions, KRI) beat lagging TRIR as monitoring of controls. Insurance premium movement is not barrier health. 1904 clocks are not monitoring. If monitoring shows the control failed, treat again â hierarchy still applies. Field context: A VP wants monitoring to be âTRIR plus the insurance renewal.â The mixer interlock has not been function-tested in 18 months. You are the CSP. The question is what the risk loop actually monitors. The oil-and-gas skin shifts the same decision into production pressure: A VP wants monitoring to be âTRIR plus the insurance renewal.â The well-control barrier has not been function-tested in 18 months. You are the CSP. The construction skin shifts it into schedule and trade stacking: A VP wants monitoring to be âTRIR plus the OCIP renewal.â Leading-edge anchors have not been inspected since last season. You are the CSP. Model caption for this class: Loop with Monitor highlighted: Context â Identify â Analyze â Evaluate â Treat â Monitor â back. Callouts: âfunction test,â âinventory vs assumption,â âKRI,â and a crossed-out âTRIR-only / premium-only.â Caption: watch the control, not only the injury log. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Monitoring verifies controls and risk assumptions still hold. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Leading checks on critical controls beat lagging-only surprise. (3) Inspection quality matters — check-box tours fail. (4) Triggers for re-assessment include MoC, incidents, and threshold breaches. (5) Independence of monitoring from the operator of the control strengthens assurance. (6) Corrective action must follow failed monitoring. (7) Do not monitor vanity metrics while critical barriers go untested. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Mixer 4 interlock specified last quarter. Monitor plan: monthly try-out logged, defeat sampling, downtime of the guard, solvent inventory vs the substituted volume. TRIR is reported separately as a lagging program metric â it does not tell you the interlock works. When a defeat is found, Treat again (redesign defeat-resistant), do not âmonitor harderâ with a poster. Premium drop at renewal is FIN, not a green barrier. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Using TRIR as the only monitor of a specific guard.; Calling a cheaper premium proof that residual risk fell.; Inspecting paperwork cadence while never function-testing the SIS/interlock.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “TRIR / DART” is really Lagging site rates — not barrier health for a named control; “Function test / inspection” is really Monitoring that the Treat still works; “Premium / deductible” is really Financing movement — not residual energy; “1904 clocks” is really Legal notification — not the risk-process Monitor step. Stem-if-then map: if critical safeguard is never proof-tested → add monitoring of that control; if monitoring finds failure but no CAPA → open corrective action; if only TRIR is monitored → add leading control-health measures; if two answers work → higher hierarchy / system / design; if MoC changed the barrier → reset monitoring criteria. Scoring favors evidence, owners, verification, and hierarchy-smart controls on monitoring. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Monitoring — TRIR or the interlock test? Is a cheaper premium a green barrier?",
  cardBack:
    "Function-test the control and watch residual assumptions. TRIR is lagging. Premium is FIN. Failed monitor → treat again, hierarchy first. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence says monitoring is barrier health and residual against criteria, not TRIR or premiums, and that failure sends you back to Treat with hierarchy.",
};

export const items: ClassItem[] = [
  exam(T, "You are the CSP reviewing a live decision at an offshore fabrication night shift. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Best Monitor for a newly specified mixer interlock.", [
    "Annual TRIR only.",
    "Logged function tests / try-out and defeat sampling against the residual assumption.",
    "Umbrella premium movement.",
    "A new poster count.",
  ], 1, "Monitor the control. TRIR and premiums are the attractive misses.", "TOOL", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Monitor closes the risk loop: barrier health, residual risk against criteria, and trigger review on change. Leading checks (interlock tests, inspections, inventory vs PHA assumptions, KRI) beat lagging TRIR as monitor... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Broker reports “premium down 12%, so residual fire risk is green.” Fuel load unchanged; sprinklers overdue for inspection. Comment?", [
    "Accept — premium is a leading KRI.",
    "FIN: premium is financing. Overdue inspection is the Monitor miss; fuel load still needs Reduce.",
    "Accept if the deductible also rose (two strategies).",
    "Accept if TRIR is 0.",
  ], 1, "FIN: cheaper premium ≠ barrier health. Two financing moves still miss Reduce monitoring.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Monitor closes the risk loop: barrier health, residual risk against criteria, and trigger review on change. Leading checks (interlock tests, inspections, inventory vs PHA assumptions, KRI) beat lagging TRIR as monitor... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Function test finds the interlock defeated. Engineering can still make it defeat-resistant this quarter. Best next loop move?", [
    "Monitor harder with a toolbox talk.",
    "Treat again: defeat-resistant design; talks are residual. Monitoring sent you back up the hierarchy.",
    "Close the register row as “detected.”",
    "Transfer the defeats via a rider.",
  ], 1, "HIER: failed monitor → Treat at the highest open row.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Monitor closes the risk loop: barrier health, residual risk against criteria, and trigger review on change. Leading checks (interlock tests, inspections, inventory vs PHA assumptions, KRI) beat lagging TRIR as monitor... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Last sentence: proof tests frozen until next turnaround in 14 months; walkdowns are allowed. Best remaining Monitor?", [
    "Claim TRIR covers the SIS until then.",
    "Walkdown/sealed status now, residual named, tests scheduled at turnaround — do not pretend TRIR is a proof test.",
    "Skip Monitor because Treat is frozen.",
    "Buy a larger umbrella and paint the row green.",
  ], 1, "STEM: honor the freeze; remaining honest monitoring plus named residual.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Monitor closes the risk loop: barrier health, residual risk against criteria, and trigger review on change. Leading checks (interlock tests, inspections, inventory vs PHA assumptions, KRI) beat lagging TRIR as monitor... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Analyst divides overdue proof-test weeks (8) into TRIR (1.6) and reports “risk index 5%.” Error?", [
    "None — overdue/TRIR is a standard KRI.",
    "FORM/TOOL: you cannot mint a probability by dividing a rate into overdue weeks; report the overdue tests as themselves.",
    "UNIT — they used meters.",
    "PELTLV — they used a TLV.",
  ], 1, "FORM: do not invent indices from mixed objects.", "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Monitor closes the risk loop: barrier health, residual risk against criteria, and trigger review on change. Leading checks (interlock tests, inspections, inventory vs PHA assumptions, KRI) beat lagging TRIR as monitor... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Which is a process-safety leading Monitor rather than a lagging site rate?", [
    "TRIR.",
    "Overdue SIS proof tests and inhibitor concentration versus the PHA assumption.",
    "DART.",
    "Umbrella attachment point.",
  ], 1, "TOOL: barrier KRIs vs lagging rates.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Monitor closes the risk loop: barrier health, residual risk against criteria, and trigger review on change. Leading checks (interlock tests, inspections, inventory vs PHA assumptions, KRI) beat lagging TRIR as monitor... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "PHA assumed 2,000 lb inventory. Monitor shows 6,000 lb after a silent fill-point change. Best action?", [
    "Ignore — TRIR is unchanged.",
    "Treat/MoC/PHA update now; Monitor just found a broken assumption.",
    "Wait for the 5-year revalidation only.",
    "Transfer the extra 4,000 lb by contract.",
  ], 1, "STEM: Monitor feeds MoC/Treat immediately.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Monitor closes the risk loop: barrier health, residual risk against criteria, and trigger review on change. Leading checks (interlock tests, inspections, inventory vs PHA assumptions, KRI) beat lagging TRIR as monitor... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A camera used as “detection monitoring” has been dark for 6 weeks because of a utility outage. Team still paints Detection healthy. Issue?", [
    "None — cameras are inherent.",
    "Utilities/power to the control are part of Monitor; a dark camera is not detection.",
    "None if the umbrella includes cyber.",
    "None if RPN D was already 2.",
  ], 1, "STEM: you must monitor that the monitor has power.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Monitor closes the risk loop: barrier health, residual risk against criteria, and trigger review on change. Leading checks (interlock tests, inspections, inventory vs PHA assumptions, KRI) beat lagging TRIR as monitor... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Amputation at the mixer during a month with “green” TRIR dashboard. Team delays OSHA to rebuild the dashboard. Clock?", [
    "Dashboards pause 1904.",
    "Amputation: 24 hours to OSHA. Monitoring products are not the clock.",
    "8 hours because TRIR was green.",
    "7 days.",
  ], 1, "TIME: 24-hour amputation notification.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Monitor closes the risk loop: barrier health, residual risk against criteria, and trigger review on change. Leading checks (interlock tests, inspections, inventory vs PHA assumptions, KRI) beat lagging TRIR as monitor... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Two remaining Monitor spends: a defeat-resistant redesign study, or 1,000 extra observation cards. Interlock still defeatable. Best spend?", [
    "Cards — volume is leading.",
    "Defeat-resistant redesign (system/design); cards do not make the barrier healthy.",
    "Neither — Monitor cannot recommend hardware.",
    "A larger captive.",
  ], 1, "HIER inside Monitor outputs.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Monitor closes the risk loop: barrier health, residual risk against criteria, and trigger review on change. Leading checks (interlock tests, inspections, inventory vs PHA assumptions, KRI) beat lagging TRIR as monitor... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Wrong tool: using a packaging FMEA RPN as the only Monitor of two independent SIS loops. Comment?", [
    "Accept — RPN is monitoring.",
    "TOOL: combinations need proof-test/FTA-style barrier monitoring, not a single-point RPN dashboard.",
    "Accept if RPN < 100.",
    "Accept if TRIR is mapped to D.",
  ], 1, "TOOL: FMEA vs barrier proof tests.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Monitor closes the risk loop: barrier health, residual risk against criteria, and trigger review on change. Leading checks (interlock tests, inspections, inventory vs PHA assumptions, KRI) beat lagging TRIR as monitor... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Deductible raised (retain) AND overdue deluge inspection ignored (reduction not monitored). What two strategies are in play, and the Monitor miss?", [
    "Avoid + reduce, fully monitored.",
    "Retain without monitoring Reduce: financing changed, severity control health unknown — inspection is the Monitor.",
    "Two prevention strategies.",
    "Transfer + avoid.",
  ], 1, "FIN: retain named in the same stem as an unmonitored reduction control.", "FIN", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Monitor closes the risk loop: barrier health, residual risk against criteria, and trigger review on change. Leading checks (interlock tests, inspections, inventory vs PHA assumptions, KRI) beat lagging TRIR as monitor... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
