import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D1.07";

export const classFields: ClassFields = {
  hook: "An integrator labels a six-axis arm “collaborative,” hangs a yellow chain, and sets 250 mm/s. Maintenance will jog from the rear with power on. You are the CSP on the cell acceptance. The question is whether a sticker and a chain are safeguarding.",
  hookOilGas: `An integrator labels a pipe-handling arm âcollaborative,â hangs a yellow chain on the well-pad skid, and sets 250 mm/s. Maintenance will jog from the rear with power on. You are the CSP on the cell acceptance. The question is whether a sticker and a chain are safeguarding.`,
  hookConstruction: `An integrator labels a rebar-tying arm âcollaborative,â hangs a yellow chain in the fab yard, and sets 250 mm/s. Maintenance will jog from the rear with power on. You are the CSP on the cell acceptance. The question is whether a sticker and a chain are safeguarding.`,
  rule: "Robot safeguarding is task-based and mode-based. Automatic production uses a fixed/interlocked barrier, presence sensing with a calculated safety distance, or a validated collaborative application (speed-and-separation or power-and-force limiting with proven stopping performance). A yellow chain, floor tape, and a “collaborative” nameplate are not safeguards. Teach and jog need an enabling device and reduced speed; they are not a production plan. Maintainers are users of the design. If two answers work, take higher hierarchy / system / design.",
  modelCaption:
    "Four production boxes left to right: Fixed / interlocked fence → Light curtain or scanner with S=(K×T)+C → Speed-and-separation monitoring → Power-and-force limiting in a defined space. Under the last two: VALIDATED. A red sticker “CHAIN / POSTER — NOT A GUARD.” Side note: teach ≠ auto. Caption: if a body can reach the hazard in automatic, the drawing failed.",
  workedCase:
    "Shared-bench cobot. (1) Can the arm be fenced and feed parts through a window? Specify the fence — still the best. (2) If true sharing is required, demand ISO/TS 15066-style validation: force, pressure, speed, stopping time, and a defined workspace — not 250 mm/s as folklore. (3) Safety distance for a curtain uses stopping performance in seconds, not minutes. (4) Rear access for maintenance: interlocked gate plus a designed maintenance mode (enabling device, reduced speed) and LOTO when power is not needed. The yellow chain does not appear on the drawing.",
  trapsJson: traps(
    "Treating a yellow chain, tape, or “collaborative” sticker as a safeguard.",
    "Running production in teach/jog at full speed “to keep cycle time.”",
    "Using stopping time in minutes in S = (K × T) + C, or ignoring the rear approach.",
  ),
  contrastJson: contrast([
    { looksLike: "Yellow chain and 250 mm/s", actually: "Admin / hope — not validated safeguarding" },
    { looksLike: "Interlocked fence or validated PFL / SSM", actually: "Engineering matched to the task" },
    { looksLike: "Teach mode in production", actually: "Wrong mode — enabling device and reduced speed are not a production plan" },
    { looksLike: "Awareness training for passers-by", actually: "Administrative residual after the cell is guarded" },
  ]),
  mustScoreJson: mustScore(
    "Robot risk assessment drives safeguarding: perimeter, interlocks, presence sensing, validated stop.",
    "Collaborative modes still need risk assessment and validated limits.",
    "Maintenance modes need designed energy control \u2014 not tape and hope.",
    "Floor tape is not a safeguard.",
    "Safety distance uses stopping performance.",
    "Teach pendants and enabling devices have rules \u2014 read the stem.",
    "Hierarchy: eliminate access to motion when open.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "only floor tape protects an industrial robot", pick: "require interlocked perimeter or validated alternative" },
    { ifStem: "stop time makes curtain too close", pick: "increase distance or improve stopping" },
    { ifStem: "maintenance enters without designed mode", pick: "use designed maintenance energy control" },
    { ifStem: "cobot claim without assessment", pick: "perform risk assessment and validate limits" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
  ),

  brief: `Robot safeguarding is task-based and mode-based. Automatic production uses a fixed/interlocked barrier, presence sensing with a calculated safety distance, or a validated collaborative application (speed-and-separation or power-and-force limiting with proven stopping performance). A yellow chain, floor tape, and a âcollaborativeâ nameplate are not safeguards. Teach and jog need an enabling device and reduced speed; they If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Robot safeguarding is task-based and mode-based. Automatic production uses a fixed/interlocked barrier, presence sensing with a calculated safety distance, or a validated collaborative application (speed-and-separation or power-and-force limiting with proven stopping performance). A yellow chain, floor tape, and a âcollaborativeâ nameplate are not safeguards. Teach and jog need an enabling device and reduced speed; they are not a production plan. Maintainers are users of the design. If two answers work, take higher hierarchy / system / design. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. Field move
An integrator labels a six-axis arm âcollaborative,â hangs a yellow chain, and sets 250 mm/s. Maintenance will jog from the rear with power on. You are the CSP on the cell acceptance. The question is whether a sticker and a chain are safeguarding. Oil-and-gas skin: An integrator labels a pipe-handling arm âcollaborative,â hangs a yellow chain on the well-pad skid, and sets 250 mm/s. Construction skin: An integrator labels a rebar-tying arm âcollaborative,â hangs a yellow chain in the fab yard, and sets 250 mm/s. Work the case: Shared-bench cobot. (1) Can the arm be fenced and feed parts through a window? Specify the fence â still the best. (2) If true sharing is required, demand ISO/TS 15066-style validation: force, pressure, speed, stopping time, and a defined workspace â not 250 mm/s as folklore. (3) Safety distance for a curtain uses stopping performance in seconds, not minutes. (4) Rear access for maintenance: interlocked gate plus a designed maintenance mode (enabling device, reduced speed) and LOTO when power is not needed. The yellow chain does not appear on the drawing. Classic traps: Treating a yellow chain, tape, or “collaborative” sticker as a safeguard.; Running production in teach/jog at full speed “to keep cycle time.”; Using stopping time in minutes in S = (K × T) + C, or ignoring the rear approach.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for robotics deep. Verify whether a higher system or design fix is still open. Contrast labels: Yellow chain and 250 mm/s is actually Admin / hope — not validated safeguarding; Interlocked fence or validated PFL / SSM is actually Engineering matched to the task; Teach mode in production is actually Wrong mode — enabling device and reduced speed are not a production plan; Awareness training for passers-by is actually Administrative residual after the cell is guarded. If the stem shows only floor tape protects an industrial robot, pick require interlocked perimeter or validated alternative. If the stem shows stop time makes curtain too close, pick increase distance or improve stopping. If the stem shows maintenance enters without designed mode, pick use designed maintenance energy control. If the stem shows cobot claim without assessment, pick perform risk assessment and validate limits. If the stem shows two answers work, pick higher hierarchy / system / design. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Robot cell — is the chain a guard? Teach = production sits in CSP-11 Domain 1 Applied Safety Technology. The exam tests whether you apply the rule when a package already looks complete. Core rule: Robot safeguarding is task-based and mode-based. Automatic production uses a fixed/interlocked barrier, presence sensing with a calculated safety distance, or a validated collaborative application (speed-and-separation or power-and-force limiting with proven stopping performance). A yellow chain, floor tape, and a âcollaborativeâ nameplate are not safeguards. Teach and jog need an enabling device and reduced speed; they are not a production plan. Maintainers are users of the design. If two answers work, take higher hierarchy / system / design. Field context: An integrator labels a six-axis arm âcollaborative,â hangs a yellow chain, and sets 250 mm/s. Maintenance will jog from the rear with power on. You are the CSP on the cell acceptance. The question is whether a sticker and a chain are safeguarding. The oil-and-gas skin shifts the same decision into production pressure: An integrator labels a pipe-handling arm âcollaborative,â hangs a yellow chain on the well-pad skid, and sets 250 mm/s. The construction skin shifts it into schedule and trade stacking: An integrator labels a rebar-tying arm âcollaborative,â hangs a yellow chain in the fab yard, and sets 250 mm/s. Model caption for this class: Four production boxes left to right: Fixed / interlocked fence â Light curtain or scanner with S=(KÃT)+C â Speed-and-separation monitoring â Power-and-force limiting in a defined space. Under the last two: VALIDATED. A red sticker âCHAIN / POSTER â NOT A GUARD.â Side note: teach â  auto. Caption: if a body can reach the hazard in automatic, the drawing failed. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Robot risk assessment drives safeguarding: perimeter, interlocks, presence sensing, validated stop. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Collaborative modes still need risk assessment and validated limits. (3) Maintenance modes need designed energy control — not tape and hope. (4) Floor tape is not a safeguard. (5) Safety distance uses stopping performance. (6) Teach pendants and enabling devices have rules — read the stem. (7) Hierarchy: eliminate access to motion when open. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Shared-bench cobot. (1) Can the arm be fenced and feed parts through a window? Specify the fence â still the best. (2) If true sharing is required, demand ISO/TS 15066-style validation: force, pressure, speed, stopping time, and a defined workspace â not 250 mm/s as folklore. (3) Safety distance for a curtain uses stopping performance in seconds, not minutes. (4) Rear access for maintenance: interlocked gate plus a designed maintenance mode (enabling device, reduced speed) and LOTO when power is not needed. The yellow chain does not appear on the drawing. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Treating a yellow chain, tape, or “collaborative” sticker as a safeguard.; Running production in teach/jog at full speed “to keep cycle time.”; Using stopping time in minutes in S = (K × T) + C, or ignoring the rear approach.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Yellow chain and 250 mm/s” is really Admin / hope — not validated safeguarding; “Interlocked fence or validated PFL / SSM” is really Engineering matched to the task; “Teach mode in production” is really Wrong mode — enabling device and reduced speed are not a production plan; “Awareness training for passers-by” is really Administrative residual after the cell is guarded. Stem-if-then map: if only floor tape protects an industrial robot → require interlocked perimeter or validated alternative; if stop time makes curtain too close → increase distance or improve stopping; if maintenance enters without designed mode → use designed maintenance energy control; if cobot claim without assessment → perform risk assessment and validate limits; if two answers work → higher hierarchy / system / design. Scoring favors evidence, owners, verification, and hierarchy-smart controls on robotics deep. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Robot cell — is the chain a guard? Teach = production?",
  cardBack:
    "Safeguard to the task. Collaborative means validated force/speed/space, not yellow. Teach ≠ automatic. S=(K×T)+C in seconds. Maintainers are users. Attractive wrong answer: chain, 250 mm/s folklore, awareness poster. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence includes task-based safeguarding, chain is not a guard, teach is not automatic, and either a fence/curtain distance or validated cobot limits (and a designed maintenance mode).",
};

export const items: ClassItem[] = [
  exam(T, "Integrator proposes a yellow chain and 250 mm/s on a six-axis arm. A fenced cell with a pass-through window still meets cycle time. Best CSP recommendation?", [
    "Approve the chain — collaborative means people may stand in the envelope.",
    "Specify the interlocked fence/window. If true sharing later remains, require validated force/speed/space — not a chain.",
    "Approve floor tape instead of chain.",
    "Approve a robot-awareness poster and extra insurance.",
  ], 1, "Chain is not safeguarding. Hierarchy still prefers separation when the task allows it.", "HIER", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Robot safeguarding is task-based and mode-based. Automatic production uses a fixed/interlocked barrier, presence sensing with a calculated safety distance, or a validated collaborative application (speed-and-separatio... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Operations will run production in teach mode at full speed “to keep cycle time.” Best comment?", [
    "Approve — teach is a listed production mode on most controllers.",
    "Reject: teach/jog is a reduced-speed, enabling-device mode. Automatic production needs the chosen safeguard in automatic.",
    "Approve if the chain is up.",
    "Approve under an 8-second cycle; TIME is the constraint.",
  ], 1, "STEM: mode is the constraint. An 8-second cycle is a TIME distractor, not a safeguard.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Robot safeguarding is task-based and mode-based. Automatic production uses a fixed/interlocked barrier, presence sensing with a calculated safety distance, or a validated collaborative application (speed-and-separatio... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Light-curtain stopping performance T = 0.40 s. The integrator keys 0.40 min into S = (K × T) + C. What happened?", [
    "Nothing — 0.40 is 0.40 in any unit.",
    "UNIT: 0.40 min is 24 s. Distance is wrong by ×60. Recompute T in seconds from the stop-time test.",
    "Use RAD mode and convert T to radians.",
    "0.40 s always equals 0.40 m, so C can be dropped.",
  ], 1, "Stopping-time units. Attractive wrong treats 0.40 as dimensionless.", "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Robot safeguarding is task-based and mode-based. Automatic production uses a fixed/interlocked barrier, presence sensing with a calculated safety distance, or a validated collaborative application (speed-and-separatio... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Last sentence: “The assembler must share the bench; a full fence is not feasible.” Best remaining control?", [
    "Yellow chain at 1 m.",
    "Validated collaborative application (force, pressure, speed, stopping, defined space) plus residual PPE; the chain is still not the safeguard.",
    "Classroom robot-awareness only.",
    "Transfer residual risk to the integrator’s insurance.",
  ], 1, "STEM closed the fence. Remaining engineering is validation, not a chain or FIN.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Robot safeguarding is task-based and mode-based. Automatic production uses a fixed/interlocked barrier, presence sensing with a calculated safety distance, or a validated collaborative application (speed-and-separatio... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Maintenance jogs from the rear. The only light curtain is on the operator side. Best life-cycle design change?", [
    "Authorized-persons sign on the rear panel.",
    "Rear interlocked gate (or equivalent presence sensing) and a designed maintenance mode with enabling device and reduced speed; LOTO when power is not required.",
    "Cut-resistant sleeves and a spotter.",
    "A second yellow chain behind the arm.",
  ], 1, "Maintainers are users of the design. PPE/admin while engineering is open is HIER.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Robot safeguarding is task-based and mode-based. Automatic production uses a fixed/interlocked barrier, presence sensing with a calculated safety distance, or a validated collaborative application (speed-and-separatio... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Which analysis belongs before the cell steel is ordered?", [
    "FTA after the first crush injury, then a chain.",
    "Task-based risk assessment (what-if / robot RA) that selects fence vs curtain vs collaborative validation and writes it into the drawing.",
    "FMEA scoring chain color (RPN on yellow vs red).",
    "Observation cards on slow speed after go-live only.",
  ], 1, "The tool must still be able to change the cell. FTA after injury is the wrong moment.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Robot safeguarding is task-based and mode-based. Automatic production uses a fixed/interlocked barrier, presence sensing with a calculated safety distance, or a validated collaborative application (speed-and-separatio... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Finance prefers extra insurance instead of an interlocked perimeter. Best position?", [
    "Insurance is an equivalent safeguard under ISO 10218.",
    "Reject: specify the fence (or a validated alternative). Insurance is risk financing, not safeguarding.",
    "Raise the deductible and keep the chain.",
    "Buy a nicer nameplate that says collaborative.",
  ], 1, "FIN vs engineering. Extra premium does not stop the arm.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Robot safeguarding is task-based and mode-based. Automatic production uses a fixed/interlocked barrier, presence sensing with a calculated safety distance, or a validated collaborative application (speed-and-separatio... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A sharp metal gripper is mounted on a “power and force limited” arm. Vendor says the robot is certified collaborative. Best CSP flag?", [
    "Accept — the robot certificate covers any end-effector.",
    "Re-validate the application with this gripper and workpiece. A sharp tool can void PFL limits; change the tool or fence the task.",
    "Accept if speed is 250 mm/s.",
    "Accept with Kevlar sleeves as the primary control.",
  ], 1, "Collaborative is the application, including the end-effector. PPE is last.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Robot safeguarding is task-based and mode-based. Automatic production uses a fixed/interlocked barrier, presence sensing with a calculated safety distance, or a validated collaborative application (speed-and-separatio... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Safety distance uses K = 1,600 mm/s, T = 0.25 s, C = 8 mm. Closest S?", [
    "S = 1,600 mm (using K only).",
    "S = (1600 × 0.25) + 8 = 408 mm. Keystrokes: 1600 × 0.25 = 400; + 8 = 408.",
    "S = 1600 × 0.25 × 8 = 3,200 mm (FORM: C multiplied).",
    "S = 1,600 / 0.25 = 6,400 mm.",
  ], 1, "FORM: S = (K × T) + C. Do not multiply C through or drop it.", "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Robot safeguarding is task-based and mode-based. Automatic production uses a fixed/interlocked barrier, presence sensing with a calculated safety distance, or a validated collaborative application (speed-and-separatio... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A standard PLC input is jumpered so the scanner can be bypassed during changeover. Best CSP position?", [
    "Approve — changeover is not production.",
    "Remove the jumper. Safety functions need the specified architecture (the stem’s PLr/SIL). A jumper is a defeated guard; design a monitored mute or a locked-out changeover.",
    "Approve with a toolbox talk.",
    "Approve if jumpered only on night shift.",
  ], 1, "Defeated safety function is not a mode. Design the changeover.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Robot safeguarding is task-based and mode-based. Automatic production uses a fixed/interlocked barrier, presence sensing with a calculated safety distance, or a validated collaborative application (speed-and-separatio... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Hand-guided motion is proposed as the production method because “the operator is always touching the enabling device.” Best comment?", [
    "Approve — enabling device equals a production safeguard.",
    "Reject as a production plan. Enabling-device / hand-guided is a limited mode. Production needs automatic behind the chosen safeguard or a validated collaborative application.",
    "Approve under 8 hours of enabling-device use (TIME).",
    "Approve if TRIR stays below 1.0 (FIN).",
  ], 1, "Mode mismatch. TIME/FIN distractors do not turn teach hardware into a fence.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Robot safeguarding is task-based and mode-based. Automatic production uses a fixed/interlocked barrier, presence sensing with a calculated safety distance, or a validated collaborative application (speed-and-separatio... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a grain elevator maintenance day. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Least consistent with robot safeguarding.", [
    "Interlocked perimeter on a full-speed arm.",
    "Validated PFL when sharing is required, including the gripper.",
    "A laminated “robots can hurt you” card after three near-misses, with the yellow chain unchanged.",
    "Designed reduced-speed maintenance mode plus LOTO when power is not needed.",
  ], 2, "A poster after near-misses is not a safeguard.", "HIER", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Robot safeguarding is task-based and mode-based. Automatic production uses a fixed/interlocked barrier, presence sensing with a calculated safety distance, or a validated collaborative application (speed-and-separatio... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
