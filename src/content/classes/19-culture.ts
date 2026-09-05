import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D2.03";

export const classFields: ClassFields = {
  hook: "TRIR fell after a poster campaign and a pizza-for-zero-injuries contest. Supervisors now hide first aids. You are the CSP. The question is whether culture moved or reporting died.",
  hookOilGas: `A platformâs TRIR fell after a âzero harmâ banner and a bonus for no recordables. Supervisors now walk past pinched-finger first aids. You are the CSP. The question is whether culture moved or reporting died.`,
  hookConstruction: `A jobâs TRIR fell after a banner and a crew bonus for no recordables. Foremen now walk past first aids. You are the CSP. The question is whether culture moved or reporting died.`,
  rule: "Culture is shared assumptions about what gets rewarded, punished, and told. Climate is this week’s mood. Compliance is the legal floor. Just culture reports error and holds reckless conduct. Do not treat a lagging-rate drop as culture if silence rose.",
  modelCaption:
    "Three nested boxes: Compliance (rules) inside Climate (this week) inside Culture (what we really do when no one audits). Side arrow: psychological safety and just culture feed reporting. Caption: a pizza contest can shrink the inner box by starving the arrow.",
  workedCase:
    "A mill stops a line for an interlock fault and the superintendent thanks the operator in the daily huddle. That is culture. A mill that posts “safety first” and then overtime-punishes the same stop is climate theater. Measure near-miss quality and stop-the-job use, not banner count.",
  trapsJson: traps(
    "Reading a TRIR drop as culture when reporting collapsed.",
    "Slogans and contests as the culture program.",
    "Blaming “bad apples” while production incentives punish stops.",
  ),
  contrastJson: contrast([
    { looksLike: "Zero-injury bonus", actually: "Incentive that can suppress reporting — not a culture control" },
    { looksLike: "Just culture", actually: "Learn from error; still discipline reckless disregard" },
    { looksLike: "Climate survey this month", actually: "Mood snapshot — useful, not the same as culture" },
    { looksLike: "CSP owns culture", actually: "Line leaders model it; EHS designs the system and evidence" },
  ]),
  mustScoreJson: mustScore(
    "Culture is what people do when nobody is scoring them \u2014 shaped by systems.",
    "Leadership actions and resource decisions beat slogans.",
    "Reporting systems must protect people who raise concerns.",
    "Incentives that punish downtime can punish hazard reporting.",
    "Culture change without hierarchy and design work is theater.",
    "Measure behaviors and system reliability, not poster counts.",
    "Just culture separates human error, at-risk behavior, and recklessness.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "only a slogan campaign is proposed", pick: "fix systems, incentives, and leadership actions" },
    { ifStem: "reporting is punished by production metrics", pick: "realign incentives and protect reporters" },
    { ifStem: "a design control is still open", pick: "do not call culture a substitute for hierarchy" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "a reckless act is treated like a slip", pick: "apply just-culture distinctions" },
  ),

  brief: `Culture is shared assumptions about what gets rewarded, punished, and told. Climate is this weekâs mood. Compliance is the legal floor. Just culture reports error and holds reckless conduct. Do not treat a lagging-rate drop as culture if silence rose. If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Culture is shared assumptions about what gets rewarded, punished, and told. Climate is this weekâs mood. Compliance is the legal floor. Just culture reports error and holds reckless conduct. Do not treat a lagging-rate drop as culture if silence rose. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
TRIR fell after a poster campaign and a pizza-for-zero-injuries contest. Supervisors now hide first aids. You are the CSP. The question is whether culture moved or reporting died. Oil-and-gas skin: A platformâs TRIR fell after a âzero harmâ banner and a bonus for no recordables. Supervisors now walk past pinched-finger first aids. You are the CSP. Construction skin: A jobâs TRIR fell after a banner and a crew bonus for no recordables. Foremen now walk past first aids. You are the CSP. Work the case: A mill stops a line for an interlock fault and the superintendent thanks the operator in the daily huddle. That is culture. A mill that posts âsafety firstâ and then overtime-punishes the same stop is climate theater. Measure near-miss quality and stop-the-job use, not banner count. Classic traps: Reading a TRIR drop as culture when reporting collapsed.; Slogans and contests as the culture program.; Blaming “bad apples” while production incentives punish stops.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for culture. Verify whether a higher system or design fix is still open. Contrast labels: Zero-injury bonus is actually Incentive that can suppress reporting — not a culture control; Just culture is actually Learn from error; still discipline reckless disregard; Climate survey this month is actually Mood snapshot — useful, not the same as culture; CSP owns culture is actually Line leaders model it; EHS designs the system and evidence. If the stem shows only a slogan campaign is proposed, pick fix systems, incentives, and leadership actions. If the stem shows reporting is punished by production metrics, pick realign incentives and protect reporters. If the stem shows a design control is still open, pick do not call culture a substitute for hierarchy. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows a reckless act is treated like a slip, pick apply just-culture distinctions. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Culture — TRIR fell after a zero-injury contest. Did culture move sits in CSP-11 Domain 2 Management Systems. The exam tests whether you apply the rule when a package already looks complete. Core rule: Culture is shared assumptions about what gets rewarded, punished, and told. Climate is this weekâs mood. Compliance is the legal floor. Just culture reports error and holds reckless conduct. Do not treat a lagging-rate drop as culture if silence rose. Field context: TRIR fell after a poster campaign and a pizza-for-zero-injuries contest. Supervisors now hide first aids. You are the CSP. The question is whether culture moved or reporting died. The oil-and-gas skin shifts the same decision into production pressure: A platformâs TRIR fell after a âzero harmâ banner and a bonus for no recordables. Supervisors now walk past pinched-finger first aids. You are the CSP. The construction skin shifts it into schedule and trade stacking: A jobâs TRIR fell after a banner and a crew bonus for no recordables. Foremen now walk past first aids. You are the CSP. Model caption for this class: Three nested boxes: Compliance (rules) inside Climate (this week) inside Culture (what we really do when no one audits). Side arrow: psychological safety and just culture feed reporting. Caption: a pizza contest can shrink the inner box by starving the arrow. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Culture is what people do when nobody is scoring them — shaped by systems. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Leadership actions and resource decisions beat slogans. (3) Reporting systems must protect people who raise concerns. (4) Incentives that punish downtime can punish hazard reporting. (5) Culture change without hierarchy and design work is theater. (6) Measure behaviors and system reliability, not poster counts. (7) Just culture separates human error, at-risk behavior, and recklessness. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: A mill stops a line for an interlock fault and the superintendent thanks the operator in the daily huddle. That is culture. A mill that posts âsafety firstâ and then overtime-punishes the same stop is climate theater. Measure near-miss quality and stop-the-job use, not banner count. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Reading a TRIR drop as culture when reporting collapsed.; Slogans and contests as the culture program.; Blaming “bad apples” while production incentives punish stops.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Zero-injury bonus” is really Incentive that can suppress reporting — not a culture control; “Just culture” is really Learn from error; still discipline reckless disregard; “Climate survey this month” is really Mood snapshot — useful, not the same as culture; “CSP owns culture” is really Line leaders model it; EHS designs the system and evidence. Stem-if-then map: if only a slogan campaign is proposed → fix systems, incentives, and leadership actions; if reporting is punished by production metrics → realign incentives and protect reporters; if a design control is still open → do not call culture a substitute for hierarchy; if two answers work → higher hierarchy / system / design; if a reckless act is treated like a slip → apply just-culture distinctions. Scoring favors evidence, owners, verification, and hierarchy-smart controls on culture. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Culture — TRIR fell after a zero-injury contest. Did culture move?",
  cardBack:
    "Not if reporting died. Culture is what gets rewarded when it costs production. Just culture learns from error and still holds reckless conduct. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence distinguishes culture from climate/compliance, rejects rate-only proof, and names just culture as learning plus accountability for reckless acts.",
};

export const items: ClassItem[] = [
  exam(T, "TRIR dropped 40% in a quarter after a pizza-for-zero contest. First-aid logs and near-miss tickets also dropped 70%. Best CSP reading?", [
    "Culture transformed — publish the success.",
    "Reporting likely suppressed; do not treat the TRIR drop as culture until voice and first-aid capture recover.",
    "The contest is a leading indicator of leadership.",
    "Lower TRIR means the hierarchy is complete.",
  ], 1, "A lagging-rate drop with collapsing capture is silence, not culture.", "STEM", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Culture is shared assumptions about what gets rewarded, punished, and told. Climate is this week’s mood. Compliance is the legal floor. Just culture reports error and holds reckless conduct. Do not treat a lagging-rat... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "An operator stops a press for a failed interlock and misses a shipment. Production wants discipline for “hurting the team.” Best culture-consistent call?", [
    "Discipline the operator to protect the metric.",
    "Thank the stop, restore the interlock before restart, and review the incentive that made the shipment outrank the guard.",
    "Hang a new “safety first” banner.",
    "Convert the event to a first aid to save TRIR.",
  ], 1, "Culture is modeled in the consequence of a costly correct stop. Hardware plus incentive, not a banner.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Culture is shared assumptions about what gets rewarded, punished, and told. Climate is this week’s mood. Compliance is the legal floor. Just culture reports error and holds reckless conduct. Do not treat a lagging-rat... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Which is a just-culture response to a nurse who skipped a barcode scan during a documented double-staffing failure and a broken scanner?", [
    "Terminate for a “never event” regardless of context.",
    "Fix staffing and the scanner (system), coach the workaround, and reserve severe discipline for reckless disregard.",
    "Ignore it because just culture means no accountability.",
    "Pay a bonus to the unit for a clean month.",
  ], 1, "Just culture redesigns the trap and still distinguishes reckless conduct from system-induced error.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Culture is shared assumptions about what gets rewarded, punished, and told. Climate is this week’s mood. Compliance is the legal floor. Just culture reports error and holds reckless conduct. Do not treat a lagging-rat... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A site uses FMEA detection scores as its “culture dashboard,” funding better posters because detection ranked worst. Stop-the-job is still punished. What went wrong?", [
    "Nothing — RPN measures culture.",
    "Wrong tool: FMEA detection is not a culture metric, and posters do not restore voice.",
    "They should have used ppm conversions.",
    "They should have used 24.45 L at a different temperature.",
  ], 1, "TOOL: RPN/detection is not culture. Voice and incentives are.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Culture is shared assumptions about what gets rewarded, punished, and told. Climate is this week’s mood. Compliance is the legal floor. Just culture reports error and holds reckless conduct. Do not treat a lagging-rat... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Finance cites a lower workers-comp premium as proof that culture improved. Investigations still stop at “employee failed to wear PPE\" while substitution of the chemical is open. Best CSP position?", [
    "Accept premium as the culture KPI.",
    "Reject: premium is financing, not culture; open substitution and blame-only investigations are the culture evidence.",
    "Raise the deductible to improve culture further.",
    "Transfer remaining risk and close the SMS.",
  ], 1, "FIN: insurance cost is not a culture measure. Hierarchy and learning quality are.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Culture is shared assumptions about what gets rewarded, punished, and told. Climate is this week’s mood. Compliance is the legal floor. Just culture reports error and holds reckless conduct. Do not treat a lagging-rat... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "The last sentence says the zero-recordable bonus is frozen in a three-year labor agreement. Best remaining system move?", [
    "Give up — culture cannot move until the contract expires.",
    "Separate medical/reporting from the bonus administration, add a protected near-miss channel, and fund guards that do not rely on heroics.",
    "Hide first aids until the contract ends.",
    "Replace the SMS with slogans.",
  ], 1, "STEM closed the bonus. Remaining system/design still beats silence.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Culture is shared assumptions about what gets rewarded, punished, and told. Climate is this week’s mood. Compliance is the legal floor. Just culture reports error and holds reckless conduct. Do not treat a lagging-rat... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Which indicator is most leading for culture of reporting?", [
    "TRIR.",
    "Quality and volume of near-miss and stop-the-job reports without retaliation, plus time to restore failed engineering.",
    "DART only.",
    "Number of framed values statements.",
  ], 1, "Leading traces of voice and hardware restoration beat lagging rates and posters.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Culture is shared assumptions about what gets rewarded, punished, and told. Climate is this week’s mood. Compliance is the legal floor. Just culture reports error and holds reckless conduct. Do not treat a lagging-rat... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A climate survey is green. Night shift still bypasses a light curtain because the reset is on a 10-minute walk. Best action?", [
    "Publish the survey as culture excellence.",
    "Relocate/redesign the reset and treat bypass as a system signal, not a personality defect.",
    "Add a poster at the curtain.",
    "Count the bypass as a leading success because production rose.",
  ], 1, "Climate ≠ culture. Engineering the workaround away is the higher row.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Culture is shared assumptions about what gets rewarded, punished, and told. Climate is this week’s mood. Compliance is the legal floor. Just culture reports error and holds reckless conduct. Do not treat a lagging-rat... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Who is accountable for operational culture on a production unit?", [
    "Only the CSP — culture is an EHS specialty.",
    "The line leader; EHS designs the system, measures, and challenge.",
    "The insurer.",
    "The poster vendor.",
  ], 1, "Leadership accountability sits on the line. EHS is typically consulted/supporting, not the A for production culture.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Culture is shared assumptions about what gets rewarded, punished, and told. Climate is this week’s mood. Compliance is the legal floor. Just culture reports error and holds reckless conduct. Do not treat a lagging-rat... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A supervisor delays recording a recordable until the next month so the crew wins the quarterly bonus. The injury was a Friday amputation. Which clocks did they also risk besides ethics?", [
    "Only the 300A posting window in February.",
    "1904: 7 calendar days to record, and 24 hours to report the amputation to OSHA — a bonus month is not a clock.",
    "8-hour TWA sampling clock.",
    "1910.1020 thirty-year medical clock only.",
  ], 1, "TIME: recording is 7 days; amputation notification is 24 hours. Culture gaming collides with legal clocks.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Culture is shared assumptions about what gets rewarded, punished, and told. Climate is this week’s mood. Compliance is the legal floor. Just culture reports error and holds reckless conduct. Do not treat a lagging-rat... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Samples are under the PEL but over the TLV the site adopted. Supervisors tell crews “OSHA says we’re fine.” Culture implication?", [
    "Correct — legal equals cultural commitment.",
    "The site taught that published internal criteria can be ignored; that is a culture and PELTLV failure.",
    "Issue pizza.",
    "Switch to ISO 14001 language.",
  ], 1, "Ignoring your own TLV criterion teaches that written standards are theater.", "PELTLV",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Culture is shared assumptions about what gets rewarded, punished, and told. Climate is this week’s mood. Compliance is the legal floor. Just culture reports error and holds reckless conduct. Do not treat a lagging-rat... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A mill calculates “culture TRIR” with 80 employees × 40 h × 50 weeks in the denominator but uses that number even though overtime added 40,000 extra hours. Rate looks better than last year. Error?", [
    "None — headcount formula is always 200,000.",
    "FORM: TRIR uses actual hours worked, not theoretical 200,000-per-100 without the extra overtime hours in EH.",
    "They should have used 100,000.",
    "They should have used median instead of TRIR.",
  ], 1, "FORM: EH is actual hours. Dropping overtime hours inflates the success story.", "FORM", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Culture is shared assumptions about what gets rewarded, punished, and told. Climate is this week’s mood. Compliance is the legal floor. Just culture reports error and holds reckless conduct. Do not treat a lagging-rat... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
