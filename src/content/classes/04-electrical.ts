import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D1.03";

export const classFields: ClassFields = {
  hook: "A 480 V MCC needs monthly infrared scans. Maintenance wants to do it energized with 8 cal/cm² shirts because “we have always done it live.” You are the CSP. The question is whether the door must open on an energized bus at all.",
  hookOilGas: `A 480 V MCC in a process unit needs monthly infrared scans. Maintenance wants to do it energized with 8 cal/cmÂ² shirts because âwe have always done it live.â You are the CSP. The question is whether the door must open on an energized bus at all.`,
  hookConstruction: `A 480 V temporary power MCC needs monthly infrared scans. Maintenance wants to do it energized with 8 cal/cmÂ² shirts because âwe have always done it live.â You are the CSP. The question is whether the door must open on an energized bus at all.`,
  rule: "De-energize is the primary electrical control. Energized work is an exception with justification, shock and arc boundaries, and PPE as last. Design the exception out: IR windows, remote racking, 24 V at the point of use, listed equipment, GFCI where it belongs.",
  modelCaption:
    "Nested electrical boundaries around an energized part: Arc-flash boundary (outer, incident-energy based) → Limited approach → Restricted approach. Caption: each boundary is a decision about whether the work must be energized; PPE is what you wear only after the exception is justified. Prefer an IR window so the door stays closed.",
  workedCase:
    "Monthly IR scan. (1) Specify IR windows so the scan happens with the door closed and the bus guarded. (2) If a window cannot be retrofitted this outage, schedule a planned outage. (3) Only then an energized-work permit with calculated incident energy, boundaries, and arc-rated clothing that actually matches the label — not the shirt someone already owns.",
  trapsJson: traps(
    "Calling 8 cal/cm² clothing a plan when the label says 40.",
    "Mixing inches and centimeters on approach distances (42 in ≠ 42 cm).",
    "Treating “qualified person” as permission to skip isolation.",
  ),
  contrastJson: contrast([
    { looksLike: "Energized IR scan in 8 cal/cm² shirts", actually: "PPE around an exception that design can still remove" },
    { looksLike: "IR window specified on the door", actually: "Engineering / PtD — door stays closed" },
    { looksLike: "Planned outage and LOTO", actually: "Elimination of the energized exposure for that task" },
    { looksLike: "“He’s qualified” so live work is fine", actually: "Qualification is not a substitute for de-energizing" },
  ]),
  mustScoreJson: mustScore(
    "De-energize is the primary electrical control.",
    "Energized work is a documented exception, not a habit.",
    "Establish an electrically safe work condition and verify absence of voltage.",
    "Qualified person status does not authorize convenience live work.",
    "Approach boundaries do not outrank feasible isolation.",
    "Arc-rated clothing is PPE around energy you could still remove.",
    "Design remote racking or lower voltage while drawings are open.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "de-energizing is feasible", pick: "establish an electrically safe work condition" },
    { ifStem: "operations wants live troubleshooting for schedule", pick: "reject convenience \u2014 energized is the exception" },
    { ifStem: "only rubber gloves are offered", pick: "isolation and verification first" },
    { ifStem: "drawings can still specify remote racking or lower voltage", pick: "design out exposure" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
  ),

  brief: `De-energize is the primary electrical control. Energized work is an exception with justification, shock and arc boundaries, and PPE as last. Design the exception out: IR windows, remote racking, 24 V at the point of use, listed equipment, GFCI where it belongs. If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
De-energize is the primary electrical control. Energized work is an exception with justification, shock and arc boundaries, and PPE as last. Design the exception out: IR windows, remote racking, 24 V at the point of use, listed equipment, GFCI where it belongs. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
A 480 V MCC needs monthly infrared scans. Maintenance wants to do it energized with 8 cal/cmÂ² shirts because âwe have always done it live.â You are the CSP. The question is whether the door must open on an energized bus at all. Oil-and-gas skin: A 480 V MCC in a process unit needs monthly infrared scans. Construction skin: A 480 V temporary power MCC needs monthly infrared scans. Work the case: Monthly IR scan. (1) Specify IR windows so the scan happens with the door closed and the bus guarded. (2) If a window cannot be retrofitted this outage, schedule a planned outage. (3) Only then an energized-work permit with calculated incident energy, boundaries, and arc-rated clothing that actually matches the label â not the shirt someone already owns. Classic traps: Calling 8 cal/cm² clothing a plan when the label says 40.; Mixing inches and centimeters on approach distances (42 in ≠ 42 cm).; Treating “qualified person” as permission to skip isolation.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for electrical. Verify whether a higher system or design fix is still open. Contrast labels: Energized IR scan in 8 cal/cm² shirts is actually PPE around an exception that design can still remove; IR window specified on the door is actually Engineering / PtD — door stays closed; Planned outage and LOTO is actually Elimination of the energized exposure for that task; “He’s qualified” so live work is fine is actually Qualification is not a substitute for de-energizing. If the stem shows de-energizing is feasible, pick establish an electrically safe work condition. If the stem shows operations wants live troubleshooting for schedule, pick reject convenience \u2014 energized is the exception. If the stem shows only rubber gloves are offered, pick isolation and verification first. If the stem shows drawings can still specify remote racking or lower voltage, pick design out exposure. If the stem shows two answers work, pick higher hierarchy / system / design. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Electrical — must it stay live sits in CSP-11 Domain 1 Applied Safety Technology. The exam tests whether you apply the rule when a package already looks complete. Core rule: De-energize is the primary electrical control. Energized work is an exception with justification, shock and arc boundaries, and PPE as last. Design the exception out: IR windows, remote racking, 24 V at the point of use, listed equipment, GFCI where it belongs. Field context: A 480 V MCC needs monthly infrared scans. Maintenance wants to do it energized with 8 cal/cmÂ² shirts because âwe have always done it live.â You are the CSP. The question is whether the door must open on an energized bus at all. The oil-and-gas skin shifts the same decision into production pressure: A 480 V MCC in a process unit needs monthly infrared scans. The construction skin shifts it into schedule and trade stacking: A 480 V temporary power MCC needs monthly infrared scans. Model caption for this class: Nested electrical boundaries around an energized part: Arc-flash boundary (outer, incident-energy based) â Limited approach â Restricted approach. Caption: each boundary is a decision about whether the work must be energized; PPE is what you wear only after the exception is justified. Prefer an IR window so the door stays closed. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) De-energize is the primary electrical control. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Energized work is a documented exception, not a habit. (3) Establish an electrically safe work condition and verify absence of voltage. (4) Qualified person status does not authorize convenience live work. (5) Approach boundaries do not outrank feasible isolation. (6) Arc-rated clothing is PPE around energy you could still remove. (7) Design remote racking or lower voltage while drawings are open. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Monthly IR scan. (1) Specify IR windows so the scan happens with the door closed and the bus guarded. (2) If a window cannot be retrofitted this outage, schedule a planned outage. (3) Only then an energized-work permit with calculated incident energy, boundaries, and arc-rated clothing that actually matches the label â not the shirt someone already owns. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Calling 8 cal/cm² clothing a plan when the label says 40.; Mixing inches and centimeters on approach distances (42 in ≠ 42 cm).; Treating “qualified person” as permission to skip isolation.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Energized IR scan in 8 cal/cm² shirts” is really PPE around an exception that design can still remove; “IR window specified on the door” is really Engineering / PtD — door stays closed; “Planned outage and LOTO” is really Elimination of the energized exposure for that task; ““He’s qualified” so live work is fine” is really Qualification is not a substitute for de-energizing. Stem-if-then map: if de-energizing is feasible → establish an electrically safe work condition; if operations wants live troubleshooting for schedule → reject convenience \u2014 energized is the exception; if only rubber gloves are offered → isolation and verification first; if drawings can still specify remote racking or lower voltage → design out exposure; if two answers work → higher hierarchy / system / design. Scoring favors evidence, owners, verification, and hierarchy-smart controls on electrical. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Electrical — must it stay live?",
  cardBack:
    "De-energize first. IR windows and 24 V beat energized exceptions. Attractive wrong answer: “qualified person in 8 cal shirts.” Watch mA vs A and in vs cm. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence includes de-energize as primary / design out the exception (IR window, 24 V) / PPE only after a justified energized exception.",
};

export const items: ClassItem[] = [
  exam(T, "Monthly 480 V MCC infrared scans are done with the door open, energized, in 8 cal/cm² shirts. An IR window kit fits this outage. Best CSP recommendation?", [
    "Keep live scans; 8 cal/cm² is industry practice.",
    "Specify IR windows so the scan is performed with the door closed.",
    "Add a second observer and keep the door open.",
    "Switch to a 40 cal/cm² suit and call it elimination.",
  ], 1, "The window removes the energized open-door exposure. A heavier suit is still PPE around an exception design can close.", "HIER", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "NFPA 70E; OSHA 1910 Subpart S",
      fieldTakeaway: "De-energize is the primary electrical control. Energized work is an exception with justification, shock and arc boundaries, and PPE as last. Design the exception out: IR windows, remote racking, 24 V at the point of u... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A panel label reads 40 cal/cm². A technician arrives in 8 cal/cm² clothing because “the job is only a quick voltage check.” Best action?", [
    "Allow the check — qualified persons may down-rate clothing for short tasks.",
    "Stop: clothing must match the incident energy, and voltage testing still requires an electrically safe condition unless a true exception exists.",
    "Allow if a second person watches.",
    "Allow if the panel is only 480 V.",
  ], 1, "cal/cm² on the label is not optional. Short duration is not a control. Attractive field answer is the 8 cal shirt they already own.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "NFPA 70E; OSHA 1910 Subpart S",
      fieldTakeaway: "De-energize is the primary electrical control. Energized work is an exception with justification, shock and arc boundaries, and PPE as last. Design the exception out: IR windows, remote racking, 24 V at the point of u... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Shock current through 1,000 Ω at 120 V. Closest current, and the UNIT trap to avoid?", [
    "0.12 mA (treating 0.12 A as milliamperes).",
    "120 mA (I = V/R = 0.12 A = 120 mA).",
    "120 A (dropping the 1,000 Ω).",
    "1.2 A using 100 Ω from a different table.",
  ], 1, "I = 120/1000 = 0.12 A = 120 mA. The attractive wrong field answer is 0.12 mA — milli vs amp.", "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "NFPA 70E; OSHA 1910 Subpart S",
      fieldTakeaway: "De-energize is the primary electrical control. Energized work is an exception with justification, shock and arc boundaries, and PPE as last. Design the exception out: IR windows, remote racking, 24 V at the point of u... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Restricted approach distance in the stem is 12 inches. A drawing note from a SI vendor lists 12 cm. Best use of the number?", [
    "Treat 12 cm as equivalent — both are “12.”",
    "Keep 12 inches; 12 cm is about 4.7 in and is the UNIT error.",
    "Average them to 12 mm.",
    "Use 12 m because MCC rooms are large.",
  ], 1, "Inches vs centimeters is a classic UNIT miss on approach boundaries.", "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "NFPA 70E; OSHA 1910 Subpart S",
      fieldTakeaway: "De-energize is the primary electrical control. Energized work is an exception with justification, shock and arc boundaries, and PPE as last. Design the exception out: IR windows, remote racking, 24 V at the point of u... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Control voltage at an operator station is still unspecified: 24 VDC or 480 VAC. Maintenance prefers 480 to avoid transformers. Best electrical PtD call?", [
    "480 VAC plus arc-rated PPE.",
    "Specify 24 VDC at the point of use.",
    "480 VAC plus a shock poster.",
    "Let each cell choose after startup.",
  ], 1, "Lower voltage at the point of use is still open. PPE around 480 V loses.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "NFPA 70E; OSHA 1910 Subpart S",
      fieldTakeaway: "De-energize is the primary electrical control. Energized work is an exception with justification, shock and arc boundaries, and PPE as last. Design the exception out: IR windows, remote racking, 24 V at the point of u... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A 480 V motor disconnect is 8 m from the motor. The last sentence says the electrician will be out of sight of the disconnect while working on the motor. Best control?", [
    "Verbal radio confirmation is equivalent to LOTO.",
    "Apply LOTO at the disconnect and verify absence of voltage at the motor; use a hasp/group method if more than one worker.",
    "Tag only, because the disconnect is nearby.",
    "Skip isolation because the person is qualified.",
  ], 1, "Out of sight is a constraint. Isolate, lock, verify. Qualification is not isolation.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "NFPA 70E; OSHA 1910 Subpart S",
      fieldTakeaway: "De-energize is the primary electrical control. Energized work is an exception with justification, shock and arc boundaries, and PPE as last. Design the exception out: IR windows, remote racking, 24 V at the point of u... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Which is least consistent with establishing an electrically safe work condition?", [
    "Identify sources, isolate, lock, verify absence of voltage, try-out.",
    "Opening a breaker without locking and without a test because “it clicked.”",
    "Stored-energy check on capacitors and springs.",
    "IR window so the task never needed an open energized door.",
  ], 1, "A click is not a test. Verification is part of the sequence.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "NFPA 70E; OSHA 1910 Subpart S",
      fieldTakeaway: "De-energize is the primary electrical control. Energized work is an exception with justification, shock and arc boundaries, and PPE as last. Design the exception out: IR windows, remote racking, 24 V at the point of u... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "GFCI protection is proposed to replace equipment grounding on a portable 120 V tool circuit because “GFCI is better.” Best CSP comment?", [
    "Approve — GFCI may replace the equipment ground.",
    "Reject the swap: GFCI is additional protection, not a replacement for grounding/bonding specified in the listing.",
    "Approve if the GFCI is new.",
    "Replace both with double-insulated stickers.",
  ], 1, "GFCI does not retire the ground. Attractive field answer treats GFCI as a full substitute.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "NFPA 70E; OSHA 1910 Subpart S",
      fieldTakeaway: "De-energize is the primary electrical control. Energized work is an exception with justification, shock and arc boundaries, and PPE as last. Design the exception out: IR windows, remote racking, 24 V at the point of u... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Arc-flash study used 18 inches working distance. A technician plans to work at about 18 cm from the same parts. What should the CSP flag?", [
    "Nothing — 18 is 18.",
    "Incident energy rises as working distance falls; 18 cm is not 18 in. Recalculate or increase distance; do not wear the old label blindly.",
    "Energy falls at 18 cm so 8 cal/cm² is extra safe.",
    "Switch the calculator to RAD.",
  ], 1, "Working distance units change the energy. UNIT + FORM flavor: do not treat 18 cm as 18 in.", "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "NFPA 70E; OSHA 1910 Subpart S",
      fieldTakeaway: "De-energize is the primary electrical control. Energized work is an exception with justification, shock and arc boundaries, and PPE as last. Design the exception out: IR windows, remote racking, 24 V at the point of u... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Remote racking is available for this breaker. Operations wants to rack it energized from the front because it is faster. Best control?", [
    "Racking from the front in a 40 cal/cm² suit.",
    "Use remote racking so the worker is outside the arc-flash boundary.",
    "A spotter with a blanket.",
    "A toolbox talk on “don’t stand in front.”",
  ], 1, "Remote racking is engineering that removes the person from the boundary. A suit is PPE around a task that can be relocated.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "NFPA 70E; OSHA 1910 Subpart S",
      fieldTakeaway: "De-energize is the primary electrical control. Energized work is an exception with justification, shock and arc boundaries, and PPE as last. Design the exception out: IR windows, remote racking, 24 V at the point of u... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Which analysis actually serves electrical design before the MCC is purchased?", [
    "Wait for the first arc-flash injury, then FTA.",
    "Specify incident-energy reduction (maintenance switch, remote racking, IR windows) into the purchase, using the study as a design aid.",
    "FMEA on shirt laundering.",
    "Observation cards for electricians after energization only.",
  ], 1, "The study must still be able to change the gear. Post-injury FTA is the wrong time.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "NFPA 70E; OSHA 1910 Subpart S",
      fieldTakeaway: "De-energize is the primary electrical control. Energized work is an exception with justification, shock and arc boundaries, and PPE as last. Design the exception out: IR windows, remote racking, 24 V at the point of u... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Finance prefers extra workers’ comp coverage instead of IR windows on ten MCCs. Best position?", [
    "Accept insurance as equivalent to de-energized scanning.",
    "Reject: insurance finances residual injury cost; it does not close the door. Specify the windows.",
    "Keep live scans and raise the deductible.",
    "Call the premium an engineering control.",
  ], 1, "Risk transfer is not an IR window.", "FIN", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "NFPA 70E; OSHA 1910 Subpart S",
      fieldTakeaway: "De-energize is the primary electrical control. Energized work is an exception with justification, shock and arc boundaries, and PPE as last. Design the exception out: IR windows, remote racking, 24 V at the point of u... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
