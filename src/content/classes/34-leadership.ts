import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D2.12";

export const classFields: ClassFields = {
  hook: "The VP records a “safety first” video, then emails “make the shipment — we’ll fix the interlock next quarter.” You are the CSP. The question is what leadership looks like when it costs production.",
  hookOilGas: `The asset manager records a âsafety firstâ video, then radios âkeep the well online â weâll fix the ESD next quarter.â You are the CSP. The question is what leadership looks like when it costs production.`,
  hookConstruction: `The PM records a âsafety firstâ video, then texts âkeep hanging iron â weâll fix the cable next quarter.â You are the CSP. The question is what leadership looks like when it costs production.`,
  rule: "Leadership is visible decisions under scarcity: time, money, and schedule. ISO 45001 clause 5 and Z10 put accountability on line leaders, not on the CSP as the A. Resources, participation, stop-work support, and hierarchy funding are the evidence. A video is climate theater.",
  modelCaption:
    "Balance scale: left pan “schedule/cost,” right pan “hierarchy/stop-work.” A leader figure holding the fulcrum. Caption: whoever moves the fulcrum when the guard is down is the leader — not the person in the video.",
  workedCase:
    "Interlock failed. Leader stops the line, funds the repair overtime, thanks the operator who called it, and puts design-out of the defeat on the capital list. Opposite: video plus “make the shipment.” The CSP can advise and escalate; the CSP cannot rent a spine.",
  trapsJson: traps(
    "Outsourcing leadership to the CSP or the insurer.",
    "Slogans and bonuses for zeros as leadership.",
    "Funding PPE while refusing the interlock as a “business decision” with no residual statement.",
  ),
  contrastJson: contrast([
    { looksLike: "Video / poster", actually: "Communication — not a decision under scarcity" },
    { looksLike: "Accountable leader", actually: "The line A who can stop work and allocate money" },
    { looksLike: "CSP", actually: "Typically C/R for system design, not A for production" },
    { looksLike: "Insurance", actually: "Financing — not leadership of controls" },
  ]),
  mustScoreJson: mustScore(
    "Leadership allocates attention, money, and consequences \u2014 not slogans.",
    "Visible engagement on high-risk work beats banquet speeches.",
    "Leaders must receive bad news safely or reporting dies.",
    "Resource decisions reveal true priorities.",
    "Hold the line on hierarchy when production pressures rise.",
    "Accountabilities must be clear for critical controls.",
    "Leadership review uses leading and lagging data to act.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "leaders only sponsor a poster campaign", pick: "require resources and presence on critical controls" },
    { ifStem: "bad news is punished", pick: "protect reporting and fix the incentive" },
    { ifStem: "production asks to bypass an interlock", pick: "leader upholds the control" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "no owner exists for a critical safeguard", pick: "assign leadership accountability" },
  ),

  brief: `Leadership is visible decisions under scarcity: time, money, and schedule. ISO 45001 clause 5 and Z10 put accountability on line leaders, not on the CSP as the A. Resources, participation, stop-work support, and hierarchy funding are the evidence. A video is climate theater. If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Leadership is visible decisions under scarcity: time, money, and schedule. ISO 45001 clause 5 and Z10 put accountability on line leaders, not on the CSP as the A. Resources, participation, stop-work support, and hierarchy funding are the evidence. A video is climate theater. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
The VP records a âsafety firstâ video, then emails âmake the shipment â weâll fix the interlock next quarter.â You are the CSP. The question is what leadership looks like when it costs production. Oil-and-gas skin: The asset manager records a âsafety firstâ video, then radios âkeep the well online â weâll fix the ESD next quarter.â You are the CSP. Construction skin: The PM records a âsafety firstâ video, then texts âkeep hanging iron â weâll fix the cable next quarter.â You are the CSP. Work the case: Interlock failed. Leader stops the line, funds the repair overtime, thanks the operator who called it, and puts design-out of the defeat on the capital list. Opposite: video plus âmake the shipment.â The CSP can advise and escalate; the CSP cannot rent a spine. Classic traps: Outsourcing leadership to the CSP or the insurer.; Slogans and bonuses for zeros as leadership.; Funding PPE while refusing the interlock as a “business decision” with no residual statement.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for leadership. Verify whether a higher system or design fix is still open. Contrast labels: Video / poster is actually Communication — not a decision under scarcity; Accountable leader is actually The line A who can stop work and allocate money; CSP is actually Typically C/R for system design, not A for production; Insurance is actually Financing — not leadership of controls. If the stem shows leaders only sponsor a poster campaign, pick require resources and presence on critical controls. If the stem shows bad news is punished, pick protect reporting and fix the incentive. If the stem shows production asks to bypass an interlock, pick leader upholds the control. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows no owner exists for a critical safeguard, pick assign leadership accountability. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Leadership — video vs “make the shipment.” Which counts sits in CSP-11 Domain 2 Management Systems. The exam tests whether you apply the rule when a package already looks complete. Core rule: Leadership is visible decisions under scarcity: time, money, and schedule. ISO 45001 clause 5 and Z10 put accountability on line leaders, not on the CSP as the A. Resources, participation, stop-work support, and hierarchy funding are the evidence. A video is climate theater. Field context: The VP records a âsafety firstâ video, then emails âmake the shipment â weâll fix the interlock next quarter.â You are the CSP. The question is what leadership looks like when it costs production. The oil-and-gas skin shifts the same decision into production pressure: The asset manager records a âsafety firstâ video, then radios âkeep the well online â weâll fix the ESD next quarter.â You are the CSP. The construction skin shifts it into schedule and trade stacking: The PM records a âsafety firstâ video, then texts âkeep hanging iron â weâll fix the cable next quarter.â You are the CSP. Model caption for this class: Balance scale: left pan âschedule/cost,â right pan âhierarchy/stop-work.â A leader figure holding the fulcrum. Caption: whoever moves the fulcrum when the guard is down is the leader â not the person in the video. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Leadership allocates attention, money, and consequences — not slogans. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Visible engagement on high-risk work beats banquet speeches. (3) Leaders must receive bad news safely or reporting dies. (4) Resource decisions reveal true priorities. (5) Hold the line on hierarchy when production pressures rise. (6) Accountabilities must be clear for critical controls. (7) Leadership review uses leading and lagging data to act. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Interlock failed. Leader stops the line, funds the repair overtime, thanks the operator who called it, and puts design-out of the defeat on the capital list. Opposite: video plus âmake the shipment.â The CSP can advise and escalate; the CSP cannot rent a spine. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Outsourcing leadership to the CSP or the insurer.; Slogans and bonuses for zeros as leadership.; Funding PPE while refusing the interlock as a “business decision” with no residual statement.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Video / poster” is really Communication — not a decision under scarcity; “Accountable leader” is really The line A who can stop work and allocate money; “CSP” is really Typically C/R for system design, not A for production; “Insurance” is really Financing — not leadership of controls. Stem-if-then map: if leaders only sponsor a poster campaign → require resources and presence on critical controls; if bad news is punished → protect reporting and fix the incentive; if production asks to bypass an interlock → leader upholds the control; if two answers work → higher hierarchy / system / design; if no owner exists for a critical safeguard → assign leadership accountability. Scoring favors evidence, owners, verification, and hierarchy-smart controls on leadership. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Leadership — video vs “make the shipment.” Which counts?",
  cardBack:
    "The scarce-resource decision. Line leaders are A; CSP is not a rented spine. Fund hierarchy and stop-work, not slogans. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence says leadership is decisions under scarcity (resources, stop-work, hierarchy) by the line-accountable role, not videos or outsourcing to the CSP.",
};

export const items: ClassItem[] = [
  exam(T, "VP video says safety first. Same-day email: ship with the interlock defeated. Which is the leadership evidence?", [
    "The video.",
    "The email — scarce-resource decision overrode the interlock; that is the culture being modeled.",
    "The poster count.",
    "The insurance limit.",
  ], 1, "Believe the decision that cost (or refused to cost) production.", "STEM", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Leadership is visible decisions under scarcity: time, money, and schedule. ISO 45001 clause 5 and Z10 put accountability on line leaders, not on the CSP as the A. Resources, participation, stop-work support, and hiera... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Who is accountable for stopping a unit when a guard fails on nights?", [
    "Only the CSP, 24/7.",
    "The night line leader (A); EHS is C/on-call support.",
    "The insurer’s loss-control engineer.",
    "The registrar.",
  ], 1, "Line A, not outsourced leadership.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Leadership is visible decisions under scarcity: time, money, and schedule. ISO 45001 clause 5 and Z10 put accountability on line leaders, not on the CSP as the A. Resources, participation, stop-work support, and hiera... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A leader can fund substitution of a solvent or a respirator campaign. Best leadership application of hierarchy?", [
    "Respirator campaign — visible PPE is leadership.",
    "Substitution (or enclosure) first; PPE for residual.",
    "A new video.",
    "A higher umbrella policy.",
  ], 1, "HIER: leadership funds the highest open row.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Leadership is visible decisions under scarcity: time, money, and schedule. ISO 45001 clause 5 and Z10 put accountability on line leaders, not on the CSP as the A. Resources, participation, stop-work support, and hiera... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Leader wants only FMEA RPN slides in management review, dropping MoC temps and stop-work metrics. Problem?", [
    "None — RPN is leadership’s dashboard.",
    "Wrong tool diet: RPN is not leadership evidence of system health; include barrier and voice metrics.",
    "They should use 14001 aspects only.",
    "They should use 24.45.",
  ], 1, "TOOL: RPN-only briefings hide leadership duties.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Leadership is visible decisions under scarcity: time, money, and schedule. ISO 45001 clause 5 and Z10 put accountability on line leaders, not on the CSP as the A. Resources, participation, stop-work support, and hiera... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Leader proposes to “show leadership” by increasing the liability limit instead of repairing ESD valves. Best CSP counsel?", [
    "Agree — transfer is a leadership control.",
    "Disagree: insurance is financing; repairing/upgrading ESD is leadership of the barrier.",
    "Agree if the premium is publicized.",
    "Agree if TRIR is low.",
  ], 1, "FIN: transfer ≠ leadership of energy control.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Leadership is visible decisions under scarcity: time, money, and schedule. ISO 45001 clause 5 and Z10 put accountability on line leaders, not on the CSP as the A. Resources, participation, stop-work support, and hiera... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Last sentence: the VP is airborne; the superintendent is the only person who can stop the job. Interlock failed. Best remaining leadership act?", [
    "Wait for the VP video to finish rendering.",
    "Superintendent stops the job and funds the restore — they are the A on the floor now.",
    "Ask the CSP to secretly sign as A.",
    "Offer pizza to keep running.",
  ], 1, "STEM: the present A must act.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Leadership is visible decisions under scarcity: time, money, and schedule. ISO 45001 clause 5 and Z10 put accountability on line leaders, not on the CSP as the A. Resources, participation, stop-work support, and hiera... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Stop-work by an operator delays a shipment. Leader’s just-culture-consistent response?", [
    "Discipline for hurting the team.",
    "Thank the stop, restore the control, review the incentive that made the shipment tempting.",
    "Hide the delay from the board.",
    "Convert the event to first aid.",
  ], 1, "Leadership is the consequence of a costly correct stop.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Leadership is visible decisions under scarcity: time, money, and schedule. ISO 45001 clause 5 and Z10 put accountability on line leaders, not on the CSP as the A. Resources, participation, stop-work support, and hiera... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Management review attended by the CSP only, with a signed “leadership” page. 45001/Z10 issue?", [
    "Fine — CSP is top management.",
    "Top management must actually review; a proxy signature is not leadership.",
    "Fine if TRIR is attached.",
    "Fine if 19011 was cited.",
  ], 1, "Leadership clause is not delegable as a signature stamp.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Leadership is visible decisions under scarcity: time, money, and schedule. ISO 45001 clause 5 and Z10 put accountability on line leaders, not on the CSP as the A. Resources, participation, stop-work support, and hiera... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A leader delays recording a Friday amputation until Monday’s stock call is over. Clocks?", [
    "Stock calls pause 1904.",
    "Amputation: 24 hours to OSHA; 7 calendar days to record. Leadership does not own a pause button.",
    "8 hours for amputation.",
    "Employment + 30 years is the notification clock.",
  ], 1, "TIME: 24 h severe + 7 d record.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Leadership is visible decisions under scarcity: time, money, and schedule. ISO 45001 clause 5 and Z10 put accountability on line leaders, not on the CSP as the A. Resources, participation, stop-work support, and hiera... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Samples under PEL, over the TLV the leader signed in policy. Leader tells crews “OSHA says we’re fine.” Issue?", [
    "Correct legal leadership.",
    "PELTLV plus leadership: they taught that signed criteria are optional.",
    "TLVs are 14001 only.",
    "TLVs replace 1904.",
  ], 1, "Leaders cannot wink past their own SMS criterion.", "PELTLV",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Leadership is visible decisions under scarcity: time, money, and schedule. ISO 45001 clause 5 and Z10 put accountability on line leaders, not on the CSP as the A. Resources, participation, stop-work support, and hiera... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a food packaging SKU change. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Which is the strongest leading evidence of leadership.", [
    "TRIR.",
    "Time-to-restore failed critical barriers and percent of stops without retaliation.",
    "Number of town halls.",
    "Premium decrease.",
  ], 1, "Barrier restore + voice, not lagging rates or speeches.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Leadership is visible decisions under scarcity: time, money, and schedule. ISO 45001 clause 5 and Z10 put accountability on line leaders, not on the CSP as the A. Resources, participation, stop-work support, and hiera... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A leader funds 10,000 observation cards and refuses $15k for a guard still on the purchase list. Best CSP challenge?", [
    "Praise the leading-indicator volume.",
    "Leadership is inverted: observations of an open nip do not outrank specifying the guard.",
    "Ask for more cards.",
    "Ask for RPN on the cards.",
  ], 1, "HIER: leadership buys the control, not the census of the hazard.", "HIER", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Leadership is visible decisions under scarcity: time, money, and schedule. ISO 45001 clause 5 and Z10 put accountability on line leaders, not on the CSP as the A. Resources, participation, stop-work support, and hiera... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
