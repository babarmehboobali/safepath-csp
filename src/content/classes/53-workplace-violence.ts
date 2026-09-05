import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D4.05";

export const classFields: ClassFields = {
  hook: "A retail GM wants a one-hour “be nice” video as the workplace-violence program while cash is still handled at an open counter at 02:00 with a broken lock. You are the CSP. The question is which controls actually sit on this energy.",
  hookOilGas: `A camp GM wants a one-hour âbe niceâ video as the workplace-violence program while night drivers still fuel alone at an open kiosk with a broken lock. You are the CSP. The question is which controls actually sit on this energy.`,
  hookConstruction: `A GC wants a one-hour âbe niceâ video as the workplace-violence program while the site pay window is still cash at an open table on the street with a broken lock. You are the CSP. The question is which controls actually sit on this energy.`,
  rule: "Workplace violence is a foreseeable energy (criminal, customer/client, worker-on-worker, personal/domestic). Treat it with hierarchy: eliminate cash/attractants, engineer barriers, lighting, access control, panic/CCTV that actually calls, admin (staffing, hours, visitor control, threat assessment), then training. Run-Hide-Fight is last-resort occupant action, not a substitute for design. OSHA general-duty logic applies where the hazard is recognized.",
  modelCaption:
    "Types I–IV across the top. Hierarchy down: eliminate attractant → barriers/access/lighting → staffing/threat process → training/Run-Hide-Fight residual. Caption: a video does not lock the door. Panic buttons need a living receiver.",
  workedCase:
    "Night retail. Type I criminal robbery is predictable. Controls: cashless or drop-safe (eliminate attractant), counter barrier and controlled entry after 22:00, lighting and cameras that record and are monitored, two-person staffing, panic to a live source, no isolated back-room cash count. Training in de-escalation and Run-Hide-Fight is residual. Domestic (Type IV) needs a threat-assessment path and parking/access help, not a poster. Do not trade the lock for an EAP slogan.",
  trapsJson: traps(
    "Calling a civility video the program while the lock is broken.",
    "Treating Run-Hide-Fight as Prevention through Design.",
    "Ignoring Type IV domestic threats as “not work.”",
  ),
  contrastJson: contrast([
    { looksLike: "Type I", actually: "Criminal, no legitimate relationship — robbery" },
    { looksLike: "Type II", actually: "Customer/client/patient toward worker" },
    { looksLike: "Type III / IV", actually: "Worker-on-worker / personal or domestic relation" },
    { looksLike: "Run-Hide-Fight", actually: "Last-resort occupant tactics — not a barrier" },
  ]),
  mustScoreJson: mustScore(
    "Workplace violence prevention includes hazard assessment, controls, reporting, and response.",
    "Engineering: access control, visibility, barriers, panic systems where justified.",
    "Administrative: staffing, cash handling rules, visitor control, training.",
    "Zero-tolerance posters alone are not a program.",
    "Domestic violence spillover needs a plan when risk is credible.",
    "Post-incident support and investigation feed CAPA.",
    "Hierarchy still prefers design controls that reduce exposure to violence risk.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "only a poster is proposed", pick: "assess risks and implement engineering/admin controls" },
    { ifStem: "cash handling creates robbery exposure", pick: "redesign process and access controls" },
    { ifStem: "reporting is punished", pick: "protect reporters and fix culture/systems" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "layout creates isolated high-risk areas", pick: "engineer visibility/access controls" },
  ),

  brief: `Workplace violence is a foreseeable energy (criminal, customer/client, worker-on-worker, personal/domestic). Treat it with hierarchy: eliminate cash/attractants, engineer barriers, lighting, access control, panic/CCTV that actually calls, admin (staffing, hours, visitor control, threat assessment), then training. Run-Hide-Fight is last-resort occupant action, not a substitute for design. OSHA general-duty logic applies where the hazard is recognized. If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Workplace violence is a foreseeable energy (criminal, customer/client, worker-on-worker, personal/domestic). Treat it with hierarchy: eliminate cash/attractants, engineer barriers, lighting, access control, panic/CCTV that actually calls, admin (staffing, hours, visitor control, threat assessment), then training. Run-Hide-Fight is last-resort occupant action, not a substitute for design. OSHA general-duty logic applies where the hazard is recognized. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
A retail GM wants a one-hour âbe niceâ video as the workplace-violence program while cash is still handled at an open counter at 02:00 with a broken lock. You are the CSP. The question is which controls actually sit on this energy. Oil-and-gas skin: A camp GM wants a one-hour âbe niceâ video as the workplace-violence program while night drivers still fuel alone at an open kiosk with a broken lock. You are the CSP. Construction skin: A GC wants a one-hour âbe niceâ video as the workplace-violence program while the site pay window is still cash at an open table on the street with a broken lock. You are the CSP. Work the case: Night retail. Type I criminal robbery is predictable. Controls: cashless or drop-safe (eliminate attractant), counter barrier and controlled entry after 22:00, lighting and cameras that record and are monitored, two-person staffing, panic to a live source, no isolated back-room cash count. Training in de-escalation and Run-Hide-Fight is residual. Domestic (Type IV) needs a threat-assessment path and parking/access help, not a poster. Do not trade the lock for an EAP slogan. Classic traps: Calling a civility video the program while the lock is broken.; Treating Run-Hide-Fight as Prevention through Design.; Ignoring Type IV domestic threats as “not work.”. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for workplace violence. Verify whether a higher system or design fix is still open. Contrast labels: Type I is actually Criminal, no legitimate relationship — robbery; Type II is actually Customer/client/patient toward worker; Type III / IV is actually Worker-on-worker / personal or domestic relation; Run-Hide-Fight is actually Last-resort occupant tactics — not a barrier. If the stem shows only a poster is proposed, pick assess risks and implement engineering/admin controls. If the stem shows cash handling creates robbery exposure, pick redesign process and access controls. If the stem shows reporting is punished, pick protect reporters and fix culture/systems. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows layout creates isolated high-risk areas, pick engineer visibility/access controls. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Workplace violence — is Run-Hide-Fight a lock? What are Types I–IV sits in CSP-11 Domain 4 Emergency Management. The exam tests whether you apply the rule when a package already looks complete. Core rule: Workplace violence is a foreseeable energy (criminal, customer/client, worker-on-worker, personal/domestic). Treat it with hierarchy: eliminate cash/attractants, engineer barriers, lighting, access control, panic/CCTV that actually calls, admin (staffing, hours, visitor control, threat assessment), then training. Run-Hide-Fight is last-resort occupant action, not a substitute for design. OSHA general-duty logic applies where the hazard is recognized. Field context: A retail GM wants a one-hour âbe niceâ video as the workplace-violence program while cash is still handled at an open counter at 02:00 with a broken lock. You are the CSP. The question is which controls actually sit on this energy. The oil-and-gas skin shifts the same decision into production pressure: A camp GM wants a one-hour âbe niceâ video as the workplace-violence program while night drivers still fuel alone at an open kiosk with a broken lock. You are the CSP. The construction skin shifts it into schedule and trade stacking: A GC wants a one-hour âbe niceâ video as the workplace-violence program while the site pay window is still cash at an open table on the street with a broken lock. You are the CSP. Model caption for this class: Types IâIV across the top. Hierarchy down: eliminate attractant â barriers/access/lighting â staffing/threat process â training/Run-Hide-Fight residual. Caption: a video does not lock the door. Panic buttons need a living receiver. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Workplace violence prevention includes hazard assessment, controls, reporting, and response. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Engineering: access control, visibility, barriers, panic systems where justified. (3) Administrative: staffing, cash handling rules, visitor control, training. (4) Zero-tolerance posters alone are not a program. (5) Domestic violence spillover needs a plan when risk is credible. (6) Post-incident support and investigation feed CAPA. (7) Hierarchy still prefers design controls that reduce exposure to violence risk. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Night retail. Type I criminal robbery is predictable. Controls: cashless or drop-safe (eliminate attractant), counter barrier and controlled entry after 22:00, lighting and cameras that record and are monitored, two-person staffing, panic to a live source, no isolated back-room cash count. Training in de-escalation and Run-Hide-Fight is residual. Domestic (Type IV) needs a threat-assessment path and parking/access help, not a poster. Do not trade the lock for an EAP slogan. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Calling a civility video the program while the lock is broken.; Treating Run-Hide-Fight as Prevention through Design.; Ignoring Type IV domestic threats as “not work.”. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Type I” is really Criminal, no legitimate relationship — robbery; “Type II” is really Customer/client/patient toward worker; “Type III / IV” is really Worker-on-worker / personal or domestic relation; “Run-Hide-Fight” is really Last-resort occupant tactics — not a barrier. Stem-if-then map: if only a poster is proposed → assess risks and implement engineering/admin controls; if cash handling creates robbery exposure → redesign process and access controls; if reporting is punished → protect reporters and fix culture/systems; if two answers work → higher hierarchy / system / design; if layout creates isolated high-risk areas → engineer visibility/access controls. Scoring favors evidence, owners, verification, and hierarchy-smart controls on workplace violence. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Workplace violence — is Run-Hide-Fight a lock? What are Types I–IV?",
  cardBack:
    "I criminal, II client, III coworker, IV personal. Hierarchy: attractant, barriers/access, staffing/threat team, then training. Run-Hide-Fight is last. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence names types I–IV, applies hierarchy (cash/access/barriers before videos), and calls Run-Hide-Fight last-resort, not design.",
};

export const items: ClassItem[] = [
  exam(T, "Night counter, cash, broken lock. Program offered: a 1-hour civility video. Best CSP position?", [
    "Accept — training is PtD for violence.",
    "Fix access/lock, reduce cash attractant, barrier/staffing; video is residual. A broken lock is an open engineering row.",
    "Accept if Run-Hide-Fight is in the video.",
    "Accept if the umbrella is extra.",
  ], 1, "HIER: lock/cash/barrier beat a video.", "HIER", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Workplace violence is a foreseeable energy (criminal, customer/client, worker-on-worker, personal/domestic). Treat it with hierarchy: eliminate cash/attractants, engineer barriers, lighting, access control, panic/CCTV... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A terminated employee’s badge still opens the gate for 11 days. Type and miss?", [
    "Type I only; badges are BCP.",
    "Type III risk plus MoC of access — a live badge is a defeated control.",
    "Type II client violence only.",
    "Not work-related — termination ended duty.",
  ], 1, "STEM: access MoC after termination.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Workplace violence is a foreseeable energy (criminal, customer/client, worker-on-worker, personal/domestic). Treat it with hierarchy: eliminate cash/attractants, engineer barriers, lighting, access control, panic/CCTV... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Run-Hide-Fight is listed as the only “engineering control” in the register. Comment?", [
    "Correct — hiding is engineering.",
    "Wrong: occupant tactics are last-resort admin/PPE-like behavior, not barriers. Engineer locks, rooms, and attractants.",
    "Correct if ICS Ops owns it.",
    "Correct if RPN of “run” is low.",
  ], 1, "HIER: RHF is not a lock.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Workplace violence is a foreseeable energy (criminal, customer/client, worker-on-worker, personal/domestic). Treat it with hierarchy: eliminate cash/attractants, engineer barriers, lighting, access control, panic/CCTV... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Healthcare Type II: patient-on-nurse. Best system control still open vs a poster?", [
    "Poster in the break room.",
    "Alarm, staffing, room design/sight lines, weapons search policy as applicable — design and system before a poster.",
    "A civility video for the patient only.",
    "Transfer via extra malpractice only.",
  ], 1, "HIER: Type II still climbs the pyramid.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Workplace violence is a foreseeable energy (criminal, customer/client, worker-on-worker, personal/domestic). Treat it with hierarchy: eliminate cash/attractants, engineer barriers, lighting, access control, panic/CCTV... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Last sentence: brand freeze on cashless. Remaining options: drop-safe + barrier + two-person close, or a longer video. Best remaining?", [
    "Longer video — freeze kills engineering.",
    "Drop-safe, barrier, two-person close — cashless is frozen, not access/engineering.",
    "Neither — wait for brand.",
    "Raise the deductible.",
  ], 1, "STEM: freeze one row, remaining engineering still open.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Workplace violence is a foreseeable energy (criminal, customer/client, worker-on-worker, personal/domestic). Treat it with hierarchy: eliminate cash/attractants, engineer barriers, lighting, access control, panic/CCTV... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Domestic (Type IV) threat: manager posts the worker’s protection-order details on the break-room board. Issue?", [
    "Fine — awareness is the control.",
    "Privacy vs protection: act on access/parking/escorts without broadcasting private details.",
    "Fine if the umbrella includes cyber.",
    "Fine if it is also in the risk register medical column.",
  ], 1, "STEM: residual privacy duty (Class 32 theme).", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Workplace violence is a foreseeable energy (criminal, customer/client, worker-on-worker, personal/domestic). Treat it with hierarchy: eliminate cash/attractants, engineer barriers, lighting, access control, panic/CCTV... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Panic buttons installed but the receiver desk was eliminated in a layoff. Status of that “engineering”?", [
    "Fine — buttons are inherent.",
    "Monitor miss: a button with no living receiver is a defeated control, like a dark camera.",
    "Fine if RHF is trained.",
    "Fine if Finance/Admin owns the buttons in ICS.",
  ], 1, "STEM: utilities/people who make the control work.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Workplace violence is a foreseeable energy (criminal, customer/client, worker-on-worker, personal/domestic). Treat it with hierarchy: eliminate cash/attractants, engineer barriers, lighting, access control, panic/CCTV... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Homicide at the night counter. Team delays OSHA to finish the civility roster. Clock?", [
    "Rosters pause 1904.",
    "Fatality: 8 hours to OSHA. Training records are not the clock.",
    "24 hours because it is violence not “industrial.”",
    "7 days.",
  ], 1, "TIME: 8-hour fatality notification.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Workplace violence is a foreseeable energy (criminal, customer/client, worker-on-worker, personal/domestic). Treat it with hierarchy: eliminate cash/attractants, engineer barriers, lighting, access control, panic/CCTV... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Wrong tool: packaging FMEA RPN on “smile missed” as the violence PHA. Comment?", [
    "Accept — RPN is threat assessment.",
    "TOOL: threat assessment + hierarchy on attractants/access is the method. RPN of smiling is not.",
    "Accept if RPN < 100.",
    "Accept if it is bound with the EAP.",
  ], 1, "TOOL: FMEA of courtesy ≠ violence program.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Workplace violence is a foreseeable energy (criminal, customer/client, worker-on-worker, personal/domestic). Treat it with hierarchy: eliminate cash/attractants, engineer barriers, lighting, access control, panic/CCTV... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Extra liability policy offered instead of repairing the lock. Classify.", [
    "Reduce — policy is a barrier.",
    "Transfer instead of Reduce. The lock is engineering; the policy is money.",
    "Avoid — policy closes the store.",
    "Prevention — claims prevent bullets.",
  ], 1, "FIN: insurance ≠ lock.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Workplace violence is a foreseeable energy (criminal, customer/client, worker-on-worker, personal/domestic). Treat it with hierarchy: eliminate cash/attractants, engineer barriers, lighting, access control, panic/CCTV... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Active-assailant ERP vs BCP: what belongs in the ERP now?", [
    "Next quarter’s invoicing RTO.",
    "Lockdown/evac decision, comms, IC/liaison with police, accounting for people — BCP restores operations after.",
    "Only the civility video link.",
    "Only the umbrella number.",
  ], 1, "TOOL: ERP vs BCP in a violence event.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Workplace violence is a foreseeable energy (criminal, customer/client, worker-on-worker, personal/domestic). Treat it with hierarchy: eliminate cash/attractants, engineer barriers, lighting, access control, panic/CCTV... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Two funded moves: higher deductible AND extra umbrella, lock still broken. Pair and miss?", [
    "Avoid + reduce; lock is optional.",
    "Retain + transfer; missing Reduce (lock/access/cash) of the violence energy.",
    "Two engineering barriers.",
    "Prevention + protection complete.",
  ], 1, "FIN: two financing strategies in one stem do not lock the door.", "FIN", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Workplace violence is a foreseeable energy (criminal, customer/client, worker-on-worker, personal/domestic). Treat it with hierarchy: eliminate cash/attractants, engineer barriers, lighting, access control, panic/CCTV... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
