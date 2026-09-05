import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D3.01";

export const classFields: ClassFields = {
  hook: "A steering committee wants “the risk process done by Friday.” They hand you a stack of JHAs and a completed FMEA and call it ISO 31000. You are the CSP. The question is which steps are still missing before anyone treats a risk.",
  hookOilGas: `A well-work committee wants âthe risk process done by Friday.â They hand you SIMOPS JHAs and a well-control FMEA and call it ISO 31000. You are the CSP. The question is which steps are still missing before anyone treats a risk.`,
  hookConstruction: `A project board wants âthe risk process done by Friday.â They hand you task JHAs and a crane FMEA and call it ISO 31000. You are the CSP. The question is which steps are still missing before anyone treats a risk.`,
  rule: "Risk process is a loop: establish context → identify → analyze → evaluate → treat → monitor/review, with communicate/consult on every arc. JHA, PHA, FMEA, and FTA are tools inside identify/analyze — they are not the loop. Treatment still follows the hierarchy. Closing the loop means monitoring residual risk, not filing the worksheet.",
  modelCaption:
    "Six boxes in a cycle: Context → Identify → Analyze → Evaluate → Treat → Monitor, with a Communicate/Consult ring around all. Caption: a completed FMEA is one analyze tool, not a closed loop. Insurance in Treat is FIN, not a control.",
  workedCase:
    "New mixer line. Context: 24/7 food plant, neighbors, 1910.212, flammable flavor. Identify: nip, solvent, noise. Analyze: likelihood/severity with existing guards. Evaluate: nip is intolerable; solvent is ALARP only after substitution review. Treat: specify interlock and aqueous flavor (hierarchy), name residual, owner, review date. Monitor: interlock defeat checks and solvent inventory — not a quarterly TRIR slide. Buying a policy instead of the interlock is transfer, not treat-as-control.",
  trapsJson: traps(
    "Calling a pile of JHAs “the risk process.”",
    "Stopping after a pretty heat map and never treating or monitoring.",
    "Putting insurance in the Treat column as if it were elimination.",
  ),
  contrastJson: contrast([
    { looksLike: "JHA / JSA", actually: "Task-level identify/analyze tool — not the whole loop" },
    { looksLike: "PHA / HAZOP", actually: "Process-unit identify/analyze tool under PSM or similar" },
    { looksLike: "FMEA RPN", actually: "One analyze ranking aid — not evaluate/treat law" },
    { looksLike: "Insurance in Treat", actually: "Share/transfer of money — residual energy still needs hierarchy" },
  ]),
  mustScoreJson: mustScore(
    "Risk process: identify, analyze, evaluate, treat, monitor/review.",
    "Context and criteria come before scoring theater.",
    "Treatment follows hierarchy \u2014 not a menu of favorite PPE.",
    "Residual risk must be explicit after treatment.",
    "Monitor whether controls work; update after MoC and incidents.",
    "Risk registers without owners are not a process.",
    "Do not confuse hazard lists with completed risk decisions.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "criteria are undefined", pick: "set risk criteria before ranking" },
    { ifStem: "treatment jumps to PPE while engineering is open", pick: "apply hierarchy in treatment" },
    { ifStem: "residual risk is unstated", pick: "document residual risk after treatment" },
    { ifStem: "MoC changed the process", pick: "re-enter the risk process" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
  ),

  brief: `Risk process is a loop: establish context â identify â analyze â evaluate â treat â monitor/review, with communicate/consult on every arc. JHA, PHA, FMEA, and FTA are tools inside identify/analyze â they are not the loop. Treatment still follows the hierarchy. Closing the loop means monitoring residual risk, not filing the worksheet. If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Risk process is a loop: establish context â identify â analyze â evaluate â treat â monitor/review, with communicate/consult on every arc. JHA, PHA, FMEA, and FTA are tools inside identify/analyze â they are not the loop. Treatment still follows the hierarchy. Closing the loop means monitoring residual risk, not filing the worksheet. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
A steering committee wants âthe risk process done by Friday.â They hand you a stack of JHAs and a completed FMEA and call it ISO 31000. You are the CSP. The question is which steps are still missing before anyone treats a risk. Oil-and-gas skin: A well-work committee wants âthe risk process done by Friday.â They hand you SIMOPS JHAs and a well-control FMEA and call it ISO 31000. You are the CSP. Construction skin: A project board wants âthe risk process done by Friday.â They hand you task JHAs and a crane FMEA and call it ISO 31000. You are the CSP. Work the case: New mixer line. Context: 24/7 food plant, neighbors, 1910.212, flammable flavor. Identify: nip, solvent, noise. Analyze: likelihood/severity with existing guards. Evaluate: nip is intolerable; solvent is ALARP only after substitution review. Treat: specify interlock and aqueous flavor (hierarchy), name residual, owner, review date. Monitor: interlock defeat checks and solvent inventory â not a quarterly TRIR slide. Buying a policy instead of the interlock is transfer, not treat-as-control. Classic traps: Calling a pile of JHAs “the risk process.”; Stopping after a pretty heat map and never treating or monitoring.; Putting insurance in the Treat column as if it were elimination.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for risk process. Verify whether a higher system or design fix is still open. Contrast labels: JHA / JSA is actually Task-level identify/analyze tool — not the whole loop; PHA / HAZOP is actually Process-unit identify/analyze tool under PSM or similar; FMEA RPN is actually One analyze ranking aid — not evaluate/treat law; Insurance in Treat is actually Share/transfer of money — residual energy still needs hierarchy. If the stem shows criteria are undefined, pick set risk criteria before ranking. If the stem shows treatment jumps to PPE while engineering is open, pick apply hierarchy in treatment. If the stem shows residual risk is unstated, pick document residual risk after treatment. If the stem shows MoC changed the process, pick re-enter the risk process. If the stem shows two answers work, pick higher hierarchy / system / design. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Risk process loop — which step is not a JHA sits in CSP-11 Domain 3 Risk Management. The exam tests whether you apply the rule when a package already looks complete. Core rule: Risk process is a loop: establish context â identify â analyze â evaluate â treat â monitor/review, with communicate/consult on every arc. JHA, PHA, FMEA, and FTA are tools inside identify/analyze â they are not the loop. Treatment still follows the hierarchy. Closing the loop means monitoring residual risk, not filing the worksheet. Field context: A steering committee wants âthe risk process done by Friday.â They hand you a stack of JHAs and a completed FMEA and call it ISO 31000. You are the CSP. The question is which steps are still missing before anyone treats a risk. The oil-and-gas skin shifts the same decision into production pressure: A well-work committee wants âthe risk process done by Friday.â They hand you SIMOPS JHAs and a well-control FMEA and call it ISO 31000. You are the CSP. The construction skin shifts it into schedule and trade stacking: A project board wants âthe risk process done by Friday.â They hand you task JHAs and a crane FMEA and call it ISO 31000. You are the CSP. Model caption for this class: Six boxes in a cycle: Context â Identify â Analyze â Evaluate â Treat â Monitor, with a Communicate/Consult ring around all. Caption: a completed FMEA is one analyze tool, not a closed loop. Insurance in Treat is FIN, not a control. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Risk process: identify, analyze, evaluate, treat, monitor/review. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Context and criteria come before scoring theater. (3) Treatment follows hierarchy — not a menu of favorite PPE. (4) Residual risk must be explicit after treatment. (5) Monitor whether controls work; update after MoC and incidents. (6) Risk registers without owners are not a process. (7) Do not confuse hazard lists with completed risk decisions. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: New mixer line. Context: 24/7 food plant, neighbors, 1910.212, flammable flavor. Identify: nip, solvent, noise. Analyze: likelihood/severity with existing guards. Evaluate: nip is intolerable; solvent is ALARP only after substitution review. Treat: specify interlock and aqueous flavor (hierarchy), name residual, owner, review date. Monitor: interlock defeat checks and solvent inventory â not a quarterly TRIR slide. Buying a policy instead of the interlock is transfer, not treat-as-control. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Calling a pile of JHAs “the risk process.”; Stopping after a pretty heat map and never treating or monitoring.; Putting insurance in the Treat column as if it were elimination.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “JHA / JSA” is really Task-level identify/analyze tool — not the whole loop; “PHA / HAZOP” is really Process-unit identify/analyze tool under PSM or similar; “FMEA RPN” is really One analyze ranking aid — not evaluate/treat law; “Insurance in Treat” is really Share/transfer of money — residual energy still needs hierarchy. Stem-if-then map: if criteria are undefined → set risk criteria before ranking; if treatment jumps to PPE while engineering is open → apply hierarchy in treatment; if residual risk is unstated → document residual risk after treatment; if MoC changed the process → re-enter the risk process; if two answers work → higher hierarchy / system / design. Scoring favors evidence, owners, verification, and hierarchy-smart controls on risk process. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Risk process loop — which step is not a JHA?",
  cardBack:
    "Context → identify → analyze → evaluate → treat → monitor, communicate throughout. JHA/PHA/FMEA/FTA are tools, not the loop. Treat with hierarchy. Insurance is transfer. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence names the loop steps, says JHA/PHA/FMEA are tools inside it, and says treatment still follows the hierarchy with residual monitored.",
};

export const items: ClassItem[] = [
  exam(T, "A team delivers a binder of JHAs and a color heat map and declares the ISO-style risk process complete. No owners, no residual, no review date. What is missing?", [
    "Nothing — JHA plus a heat map is the loop.",
    "Evaluate against stated criteria, treat (hierarchy), assign residual owners, and monitor/review — a map is not Treat or Monitor.",
    "Only a higher insurance limit.",
    "Only a new TRIR target.",
  ], 1, "STEM/TOOL: worksheets are identify/analyze aids. The loop still owes evaluate, treat, monitor.", "STEM", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Risk process is a loop: establish context → identify → analyze → evaluate → treat → monitor/review, with communicate/consult on every arc. JHA, PHA, FMEA, and FTA are tools inside identify/analyze — they are not the l... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Best tool inside Identify/Analyze when the top event requires two independent SIS loops to fail together?", [
    "A packaging-line JHA.",
    "FTA (or bowtie) — combinations, not a single-point JHA or RPN row.",
    "A 5×5 matrix with no logic.",
    "An insurance application.",
  ], 1, "TOOL: FTA for combinations. JHA/FMEA are the attractive misses.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Risk process is a loop: establish context → identify → analyze → evaluate → treat → monitor/review, with communicate/consult on every arc. JHA, PHA, FMEA, and FTA are tools inside identify/analyze — they are not the l... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Evaluate rates a nip “intolerable.” Treat options still open: interlock the guard or issue cut-resistant sleeves. Best Treat?", [
    "Sleeves — faster residual paperwork.",
    "Interlock/guard by design; sleeves are residual PPE if anything remains.",
    "Raise the deductible and call it Treat.",
    "Wait for next year’s PHA revalidation.",
  ], 1, "HIER: intolerable + open engineering beats PPE and financing.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Risk process is a loop: establish context → identify → analyze → evaluate → treat → monitor/review, with communicate/consult on every arc. JHA, PHA, FMEA, and FTA are tools inside identify/analyze — they are not the l... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Finance writes “Treat = $10M umbrella policy” on an open solvent inventory. Process comment?", [
    "Accept — transfer is a full Treat.",
    "FIN: transfer shares money consequences; it does not remove inventory or ignition. Hierarchy treat is still required.",
    "Accept if ROI of the policy exceeds 12%.",
    "Accept if RPN drops because Detection was relabeled.",
  ], 1, "FIN: insurance is share/transfer, not elimination/engineering.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Risk process is a loop: establish context → identify → analyze → evaluate → treat → monitor/review, with communicate/consult on every arc. JHA, PHA, FMEA, and FTA are tools inside identify/analyze — they are not the l... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Which step belongs in Establish context before scoring?", [
    "Color the heat map first so criteria can be reverse-fit.",
    "State legal/other requirements, scope, and the intolerable/ALARP/acceptable criteria the scores will mean.",
    "Average last year’s TRIR into the severity axis.",
    "Copy another plant’s 5×5 with no owners.",
  ], 1, "STEM: criteria before colors. Reverse-fitting is not context.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Risk process is a loop: establish context → identify → analyze → evaluate → treat → monitor/review, with communicate/consult on every arc. JHA, PHA, FMEA, and FTA are tools inside identify/analyze — they are not the l... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Monitor for a treated mixer nip is best represented by which leading check?", [
    "Annual TRIR only.",
    "Interlock defeat inspections and guard integrity against the residual assumption.",
    "A new poster count.",
    "Umbrella premium changes.",
  ], 1, "Monitor the control/residual. TRIR is lagging and not barrier health.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Risk process is a loop: establish context → identify → analyze → evaluate → treat → monitor/review, with communicate/consult on every arc. JHA, PHA, FMEA, and FTA are tools inside identify/analyze — they are not the l... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Last sentence: substitution of the flavor solvent was frozen yesterday. Remaining Treat options are a closed washer or a cartridge program. Best remaining move in the loop?", [
    "Cartridges — PPE is a Treat.",
    "Closed washer (engineering); name residual; monitor seals — substitution is closed but engineering is not.",
    "Stop the loop until substitution reopens.",
    "Transfer only.",
  ], 1, "STEM closed substitution. Highest remaining row is engineering.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Risk process is a loop: establish context → identify → analyze → evaluate → treat → monitor/review, with communicate/consult on every arc. JHA, PHA, FMEA, and FTA are tools inside identify/analyze — they are not the l... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A fatality occurs in the room during the risk workshop. Team delays OSHA so the heat map can be finished. Clock?", [
    "Workshop products pause 1904.",
    "Fatality: 8 hours to OSHA. The risk loop is not a reporting clock.",
    "24 hours because it is “risk,” not operations.",
    "7 days on the 300 log only.",
  ], 1, "TIME: 8-hour fatality notification. Process meetings do not toll it.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Risk process is a loop: establish context → identify → analyze → evaluate → treat → monitor/review, with communicate/consult on every arc. JHA, PHA, FMEA, and FTA are tools inside identify/analyze — they are not the l... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Analyst converts a 5×5 score of 15 into “15% probability of fatality” and uses it as FTA input. Error?", [
    "None — matrix scores are probabilities.",
    "FORM/TOOL: an ordinal risk score is not P(event) and is the wrong input to a quantified tree unless the stem calibrated it.",
    "UNIT — they used meters.",
    "PELTLV — they used a TLV.",
  ], 1, "FORM: ordinal score ≠ probability. TOOL if they also picked the wrong method.", "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Risk process is a loop: establish context → identify → analyze → evaluate → treat → monitor/review, with communicate/consult on every arc. JHA, PHA, FMEA, and FTA are tools inside identify/analyze — they are not the l... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a plastics compounding turnaround. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Communicate/consult in the loop is best done when.", [
    "After start-up, via a laminated heat map.",
    "On every arc — including workers and maintainers who live the hazard — before Treat is locked.",
    "Only with Finance so transfer pricing is right.",
    "Only with Legal after an OSHA visit.",
  ], 1, "Consultation is not a close-out email.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Risk process is a loop: establish context → identify → analyze → evaluate → treat → monitor/review, with communicate/consult on every arc. JHA, PHA, FMEA, and FTA are tools inside identify/analyze — they are not the l... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Which pairing is a process miss rather than a mere paperwork miss?", [
    "Using the site template font.",
    "Skipping Evaluate/Treat and monitoring only TRIR after a completed FMEA.",
    "Storing the PDF in two folders.",
    "Printing in color.",
  ], 1, "A tool without treat/monitor is an open loop.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Risk process is a loop: establish context → identify → analyze → evaluate → treat → monitor/review, with communicate/consult on every arc. JHA, PHA, FMEA, and FTA are tools inside identify/analyze — they are not the l... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Two answers remain: (1) eliminate the hazardous activity that is still optional in the charter, or (2) keep it and add calibrated detection. Best Treat in this process?", [
    "Detection — it is a loop output.",
    "Eliminate/avoid the optional activity (higher hierarchy / system / design); detection is residual.",
    "Keep it — context already approved the charter.",
    "Transfer it to a contractor with no other change.",
  ], 1, "HIER inside Treat. Optional activity still allows avoidance/elimination.", "HIER", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Risk process is a loop: establish context → identify → analyze → evaluate → treat → monitor/review, with communicate/consult on every arc. JHA, PHA, FMEA, and FTA are tools inside identify/analyze — they are not the l... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
