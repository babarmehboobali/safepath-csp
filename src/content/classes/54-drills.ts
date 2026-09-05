import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D4.02";

export const classFields: ClassFields = {
  hook: "A VP wants “credit for the annual drill” as a 12-minute tabletop in the boardroom, no after-action, and no test of the dark-HMI or dead-power feed. You are the CSP. The question is what a drill is allowed to prove.",
  hookOilGas: `A VP wants âcredit for the annual drillâ as a 12-minute tabletop in the boardroom, no after-action, and no test of the dark-HMI or dead-firewater. You are the CSP. The question is what a drill is allowed to prove.`,
  hookConstruction: `A VP wants âcredit for the annual drillâ as a 12-minute tabletop in the trailer, no after-action, and no test of the muster or dead temp-power. You are the CSP. The question is what a drill is allowed to prove.`,
  rule: "Drills and exercises evaluate the ERP, ICS, BCP, and fire/violence plans against a stated objective. Scale: orientation → tabletop → functional → full-scale. After-action and corrective actions close the loop (Monitor). A sign-in sheet is not a drill. Testing utilities and cyber-dark comms belongs in the objectives if those are credible. Drills do not replace prevention or ITM.",
  modelCaption:
    "Ladder: Seminar → Tabletop → Functional → Full-scale. Side boxes: Objectives | Safety of players | After-action / CAPA. A sign-in sheet stamped “not this.” Caption: pick the scale that can fail the thing you claim is ready.",
  workedCase:
    "Objective: account for people in 8 minutes with radios if the LAN is dead, and start the fire pump on generator. Tabletop cannot prove the generator. Functional/full-scale with a planned power cut can. After-action: assembly downwind, radio battery dead, pump did not start. CAPA: wind-informed lots, battery program, generator ITM. Do not file “annual drill complete” on the sign-in sheet. Do not run a full-scale that creates a real confined-space death to look authentic.",
  trapsJson: traps(
    "Calling a sign-in sheet or a video a drill.",
    "Tabletop claimed as proof of a generator start.",
    "No after-action — so the loop never Treats again.",
  ),
  contrastJson: contrast([
    { looksLike: "Tabletop", actually: "Discussion of decisions — cannot prove hardware" },
    { looksLike: "Functional / full-scale", actually: "Can test comms, ICS span, hardware, headcount" },
    { looksLike: "Training attendance", actually: "Learning event — not an evaluation of the plan" },
    { looksLike: "After-action", actually: "Monitor that feeds CAPA — the point of the drill" },
  ]),
  mustScoreJson: mustScore(
    "Drills and exercises test plans: tabletop, functional, full-scale.",
    "Objectives, evaluators, and after-action items make drills useful.",
    "Include night/weekend and contractor scenarios when credible.",
    "Correct findings through CAPA \u2014 drill theater without fixes fails.",
    "Frequency matches risk and regulatory/system requirements.",
    "ICS and ERP interfaces should be exercised, not only classroom.",
    "Prevention lessons from drills can feed hierarchy improvements.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "drills never produce after-action CAPA", pick: "require after-action and corrective action" },
    { ifStem: "only sunny-day day-shift drills run", pick: "exercise off-shift/credible scenarios" },
    { ifStem: "objectives are undefined", pick: "set measurable drill objectives" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "a drill reveals an egress defect", pick: "fix the facility control \u2014 not only retrain" },
  ),

  brief: `Drills and exercises evaluate the ERP, ICS, BCP, and fire/violence plans against a stated objective. Scale: orientation â tabletop â functional â full-scale. After-action and corrective actions close the loop (Monitor). A sign-in sheet is not a drill. Testing utilities and cyber-dark comms belongs in the objectives if those are credible. Drills do not replace If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Drills and exercises evaluate the ERP, ICS, BCP, and fire/violence plans against a stated objective. Scale: orientation â tabletop â functional â full-scale. After-action and corrective actions close the loop (Monitor). A sign-in sheet is not a drill. Testing utilities and cyber-dark comms belongs in the objectives if those are credible. Drills do not replace prevention or ITM. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
A VP wants âcredit for the annual drillâ as a 12-minute tabletop in the boardroom, no after-action, and no test of the dark-HMI or dead-power feed. You are the CSP. The question is what a drill is allowed to prove. Oil-and-gas skin: A VP wants âcredit for the annual drillâ as a 12-minute tabletop in the boardroom, no after-action, and no test of the dark-HMI or dead-firewater. You are the CSP. Construction skin: A VP wants âcredit for the annual drillâ as a 12-minute tabletop in the trailer, no after-action, and no test of the muster or dead temp-power. You are the CSP. Work the case: Objective: account for people in 8 minutes with radios if the LAN is dead, and start the fire pump on generator. Tabletop cannot prove the generator. Functional/full-scale with a planned power cut can. After-action: assembly downwind, radio battery dead, pump did not start. CAPA: wind-informed lots, battery program, generator ITM. Do not file âannual drill completeâ on the sign-in sheet. Do not run a full-scale that creates a real confined-space death to look authentic. Classic traps: Calling a sign-in sheet or a video a drill.; Tabletop claimed as proof of a generator start.; No after-action — so the loop never Treats again.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for drills. Verify whether a higher system or design fix is still open. Contrast labels: Tabletop is actually Discussion of decisions — cannot prove hardware; Functional / full-scale is actually Can test comms, ICS span, hardware, headcount; Training attendance is actually Learning event — not an evaluation of the plan; After-action is actually Monitor that feeds CAPA — the point of the drill. If the stem shows drills never produce after-action CAPA, pick require after-action and corrective action. If the stem shows only sunny-day day-shift drills run, pick exercise off-shift/credible scenarios. If the stem shows objectives are undefined, pick set measurable drill objectives. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows a drill reveals an egress defect, pick fix the facility control \u2014 not only retrain. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Drills — can a tabletop prove the generator? What closes the loop sits in CSP-11 Domain 4 Emergency Management. The exam tests whether you apply the rule when a package already looks complete. Core rule: Drills and exercises evaluate the ERP, ICS, BCP, and fire/violence plans against a stated objective. Scale: orientation â tabletop â functional â full-scale. After-action and corrective actions close the loop (Monitor). A sign-in sheet is not a drill. Testing utilities and cyber-dark comms belongs in the objectives if those are credible. Drills do not replace prevention or ITM. Field context: A VP wants âcredit for the annual drillâ as a 12-minute tabletop in the boardroom, no after-action, and no test of the dark-HMI or dead-power feed. You are the CSP. The question is what a drill is allowed to prove. The oil-and-gas skin shifts the same decision into production pressure: A VP wants âcredit for the annual drillâ as a 12-minute tabletop in the boardroom, no after-action, and no test of the dark-HMI or dead-firewater. You are the CSP. The construction skin shifts it into schedule and trade stacking: A VP wants âcredit for the annual drillâ as a 12-minute tabletop in the trailer, no after-action, and no test of the muster or dead temp-power. You are the CSP. Model caption for this class: Ladder: Seminar â Tabletop â Functional â Full-scale. Side boxes: Objectives | Safety of players | After-action / CAPA. A sign-in sheet stamped ânot this.â Caption: pick the scale that can fail the thing you claim is ready. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Drills and exercises test plans: tabletop, functional, full-scale. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Objectives, evaluators, and after-action items make drills useful. (3) Include night/weekend and contractor scenarios when credible. (4) Correct findings through CAPA — drill theater without fixes fails. (5) Frequency matches risk and regulatory/system requirements. (6) ICS and ERP interfaces should be exercised, not only classroom. (7) Prevention lessons from drills can feed hierarchy improvements. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Objective: account for people in 8 minutes with radios if the LAN is dead, and start the fire pump on generator. Tabletop cannot prove the generator. Functional/full-scale with a planned power cut can. After-action: assembly downwind, radio battery dead, pump did not start. CAPA: wind-informed lots, battery program, generator ITM. Do not file âannual drill completeâ on the sign-in sheet. Do not run a full-scale that creates a real confined-space death to look authentic. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Calling a sign-in sheet or a video a drill.; Tabletop claimed as proof of a generator start.; No after-action — so the loop never Treats again.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Tabletop” is really Discussion of decisions — cannot prove hardware; “Functional / full-scale” is really Can test comms, ICS span, hardware, headcount; “Training attendance” is really Learning event — not an evaluation of the plan; “After-action” is really Monitor that feeds CAPA — the point of the drill. Stem-if-then map: if drills never produce after-action CAPA → require after-action and corrective action; if only sunny-day day-shift drills run → exercise off-shift/credible scenarios; if objectives are undefined → set measurable drill objectives; if two answers work → higher hierarchy / system / design; if a drill reveals an egress defect → fix the facility control \u2014 not only retrain. Scoring favors evidence, owners, verification, and hierarchy-smart controls on drills. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Drills — can a tabletop prove the generator? What closes the loop?",
  cardBack:
    "Match scale to the claim. Tabletop ≠ hardware. After-action + CAPA is the Monitor/Treat. Inject utilities/cyber if those are credible. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence says exercises test a stated objective at a matching scale, tabletop cannot prove hardware, and after-action/CAPA closes the loop.",
};

export const items: ClassItem[] = [
  exam(T, "VP wants annual-drill credit for a 12-minute boardroom talk, no after-action, no power test. Adequacy for “generator starts the fire pump”?", [
    "Adequate — talk is full-scale.",
    "Inadequate: tabletop cannot prove hardware. Need a functional test of the generator/pump plus after-action/CAPA.",
    "Adequate if everyone signs a roster.",
    "Adequate if the broker attends.",
  ], 1, "STEM/TOOL: scale vs claim.", "STEM", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Drills and exercises evaluate the ERP, ICS, BCP, and fire/violence plans against a stated objective. Scale: orientation → tabletop → functional → full-scale. After-action and corrective actions close the loop (Monitor... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Best scale to test “ICS span stays ≤7 when 16 crews arrive”?", [
    "A silent email.",
    "Functional or full-scale with enough players to force modular expansion — a four-person tabletop cannot span-fail.",
    "A JHA rewrite.",
    "An FMEA RPN workshop.",
  ], 1, "TOOL: the exercise must be able to fail the objective.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Drills and exercises evaluate the ERP, ICS, BCP, and fire/violence plans against a stated objective. Scale: orientation → tabletop → functional → full-scale. After-action and corrective actions close the loop (Monitor... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Dark-HMI / dead-LAN is a credible ransomware case. Drill never injects it. Gap?", [
    "None — cyber is BCP only and not drillable.",
    "Objectives miss: inject analog comms and mechanical isolation or you never tested the ERP cyber content.",
    "None if invoicing RTO is tabletop’d.",
    "None if the umbrella includes cyber.",
  ], 1, "STEM: utilities/cyber belong in drill objectives.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Drills and exercises evaluate the ERP, ICS, BCP, and fire/violence plans against a stated objective. Scale: orientation → tabletop → functional → full-scale. After-action and corrective actions close the loop (Monitor... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "After-action finds assembly was downwind. Next loop move?", [
    "File “drill complete” anyway.",
    "Treat: wind-informed assembly in the ERP, then re-drill that objective. After-action without CAPA is an open Monitor.",
    "Buy extra cans.",
    "Raise the deductible.",
  ], 1, "HIER/STEM: findings must change the system.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Drills and exercises evaluate the ERP, ICS, BCP, and fire/violence plans against a stated objective. Scale: orientation → tabletop → functional → full-scale. After-action and corrective actions close the loop (Monitor... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Full-scale plan would shut the only real fire pump for 3 hours with no impairment watch. Best call?", [
    "Do it — authenticity first.",
    "Do not impair life-safety protection to look good. Use a functional test that keeps protection, or a managed impairment.",
    "Skip all drills forever.",
    "Replace the pump test with a civility video.",
  ], 1, "HIER: real protection outranks theatrical drills.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Drills and exercises evaluate the ERP, ICS, BCP, and fire/violence plans against a stated objective. Scale: orientation → tabletop → functional → full-scale. After-action and corrective actions close the loop (Monitor... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A worker is hospitalized during the drill. Team delays OSHA because “it was simulated.” Clock?", [
    "Simulations pause 1904.",
    "Hospitalization: 24 hours to OSHA. Real harm in a drill is real.",
    "8 hours always, because drills are fatalities.",
    "7 days.",
  ], 1, "TIME: 24-hour hospitalization notification.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Drills and exercises evaluate the ERP, ICS, BCP, and fire/violence plans against a stated objective. Scale: orientation → tabletop → functional → full-scale. After-action and corrective actions close the loop (Monitor... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Insurer discount requires an “annual full-scale.” Plant files the tabletop as full-scale to keep the credit. Issue?", [
    "None — labels are marketing.",
    "Ethics + FIN: a financing credit does not convert a tabletop into hardware proof. Report the scale honestly.",
    "None if RPN is attached.",
    "None if ICS Finance signs.",
  ], 1, "FIN: credit vs honest evaluation.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Drills and exercises evaluate the ERP, ICS, BCP, and fire/violence plans against a stated objective. Scale: orientation → tabletop → functional → full-scale. After-action and corrective actions close the loop (Monitor... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Last sentence: night shift cannot leave the still for a 2-hour evac drill this week; day shift can. Best remaining evaluation?", [
    "Skip all shifts — all or nothing.",
    "Evacuate/functionally drill the available shift, and use a targeted night-shift functional (comms/headcount without abandoning a live still) plus named residual — honor the constraint.",
    "Tabletop for everyone and call it night-proven.",
    "Only the broker’s webinar.",
  ], 1, "STEM: last sentence constrained the still. Do not abandon process safety for a drill brand.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Drills and exercises evaluate the ERP, ICS, BCP, and fire/violence plans against a stated objective. Scale: orientation → tabletop → functional → full-scale. After-action and corrective actions close the loop (Monitor... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Wrong tool: using Pareto of first aids as the after-action of a leak drill. Comment?", [
    "Accept — Pareto is after-action.",
    "TOOL: after-action evaluates drill objectives (headcount, isolation, ICS). Pareto of nicks is a different Domain 2 tool.",
    "Accept if the first bar is “panic.”",
    "Accept if TRIR dropped that day.",
  ], 1, "TOOL: Pareto ≠ drill evaluation.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Drills and exercises evaluate the ERP, ICS, BCP, and fire/violence plans against a stated objective. Scale: orientation → tabletop → functional → full-scale. After-action and corrective actions close the loop (Monitor... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "BCP restore of the order book to RPO 4 h is the claim. Tabletop discussion with no restore attempt. Proof?", [
    "Proved — talking is restoring.",
    "Not proved: restore a dummy snapshot or the RPO is paper. Match scale to IT/cyber BCP claims.",
    "Proved if RTO was mentioned.",
    "Proved if ERP evac was fast.",
  ], 1, "STEM: BCP claims need restore practice.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Drills and exercises evaluate the ERP, ICS, BCP, and fire/violence plans against a stated objective. Scale: orientation → tabletop → functional → full-scale. After-action and corrective actions close the loop (Monitor... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Who can stop an unsafe drill tactic (real entry into a real cloud “for realism”)?", [
    "Nobody — drills suspend Safety Officer.",
    "Incident/exercise Safety Officer (and the CSP) — same hierarchy: do not send people where isolation can be simulated.",
    "Only the broker.",
    "Only Finance/Admin.",
  ], 1, "HIER: Safety stop-work applies to exercises.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Drills and exercises evaluate the ERP, ICS, BCP, and fire/violence plans against a stated objective. Scale: orientation → tabletop → functional → full-scale. After-action and corrective actions close the loop (Monitor... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Two funded moves: extra umbrella AND extra drill pizza, generator still untested. Pair and miss?", [
    "Avoid + reduce; pizza is ITM.",
    "Retain/transfer (policy) plus hospitality; missing the functional test that actually Monitors protection/utilities.",
    "Two hardware proof tests.",
    "Prevention + protection complete.",
  ], 1, "FIN: financing + catering in one stem do not start a generator.", "FIN", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Drills and exercises evaluate the ERP, ICS, BCP, and fire/violence plans against a stated objective. Scale: orientation → tabletop → functional → full-scale. After-action and corrective actions close the loop (Monitor... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
