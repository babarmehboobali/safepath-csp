import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D1.07";

export const classFields: ClassFields = {
  hook: "A collaborative robot will share a bench with an assembler. The integrator wants a yellow chain and “slow speed.” You are on the risk assessment. The question is whether a painted chain is safeguarding.",
  hookOilGas: `A collaborative robot will share a bench with a technician on a process skid. The integrator wants a yellow chain and slow speed. You are on the risk assessment. The question is whether a painted chain is safeguarding.`,
  hookConstruction: `A collaborative robot will share a bench in a site fab shop. The integrator wants a yellow chain and slow speed. You are on the risk assessment. The question is whether a painted chain is safeguarding.`,
  rule: "Safeguarding matches the task: fixed guard, interlock, light curtain, area scanner, or validated collaborative limits. Yellow chain and training are not safeguarding. Production mode is not teach mode. Hand tools: right tool, guards on, no homemade “PPE as a guard.” Deep robotics is a later Maximum class — here you apply the hierarchy to the cell.",
  modelCaption:
    "Four boxes of safeguarding, left to right: Fixed barrier → Interlocked guard → Presence sensing (curtain/scanner) → Validated collaborative speed/force with a defined space. A red “chain / poster” sticker marked NOT A GUARD. Caption: if a body can reach the hazard in production, the chain failed the drawing.",
  workedCase:
    "Cobot at a shared bench. (1) Can the robot be fenced and feed the assembler through a window? That is still the best. (2) If true collaboration is required, validated force/speed, defined workspace, and stopping performance — not a yellow chain. (3) Teach/jog is a different mode with enabling device and reduced speed. Service is LOTO. Hand grinders in the same cell keep guards on; a glove is not a wheel guard.",
  trapsJson: traps(
    "Yellow chain as a robot guard.",
    "Assuming “collaborative” means no risk assessment.",
    "Removing a tool guard because it slows production.",
  ),
  contrastJson: contrast([
    { looksLike: "Yellow chain and slow speed", actually: "Admin / hope — not validated safeguarding" },
    { looksLike: "Interlocked fence or validated cobot limits", actually: "Engineering safeguarding" },
    { looksLike: "Teach mode in production", actually: "Wrong mode — enabling device and reduced speed are not a production plan" },
    { looksLike: "Glove instead of a grinder guard", actually: "PPE around a missing tool guard" },
  ]),
  mustScoreJson: mustScore(
    "Safeguarding matches the task: fixed guard, interlock, light curtain, area scanner, or validated collaborative limits.",
    "Remove guards only under LOTO \u2014 never for production rate.",
    "Robot cells need interlocked perimeter and designed maintenance modes.",
    "Two-hand controls and presence-sensing devices require proper distance and stop performance.",
    "Floor tape is not a safeguard for an industrial robot.",
    "Collaborative robot claims still need risk assessment and validated limits.",
    "Hand tools need the right tool, condition, and guards where designed.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "a guard is removed to clear jams on the run", pick: "stop and LOTO \u2014 restore safeguarding" },
    { ifStem: "robot cell uses only floor tape", pick: "require interlocked fencing or validated alternative" },
    { ifStem: "light curtain distance is too short for stop time", pick: "increase distance or improve stopping \u2014 do not hope" },
    { ifStem: "maintenance needs access inside the cell", pick: "designed maintenance mode with energy control" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
  ),

  brief: `Safeguarding matches the task: fixed guard, interlock, light curtain, area scanner, or validated collaborative limits. Yellow chain and training are not safeguarding. Production mode is not teach mode. Hand tools: right tool, guards on, no homemade âPPE as a guard.â Deep robotics is a later Maximum class â here you apply the hierarchy to the If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Safeguarding matches the task: fixed guard, interlock, light curtain, area scanner, or validated collaborative limits. Yellow chain and training are not safeguarding. Production mode is not teach mode. Hand tools: right tool, guards on, no homemade âPPE as a guard.â Deep robotics is a later Maximum class â here you apply the hierarchy to the cell. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
A collaborative robot will share a bench with an assembler. The integrator wants a yellow chain and âslow speed.â You are on the risk assessment. The question is whether a painted chain is safeguarding. Oil-and-gas skin: A collaborative robot will share a bench with a technician on a process skid. The integrator wants a yellow chain and slow speed. You are on the risk assessment. Construction skin: A collaborative robot will share a bench in a site fab shop. Work the case: Cobot at a shared bench. (1) Can the robot be fenced and feed the assembler through a window? That is still the best. (2) If true collaboration is required, validated force/speed, defined workspace, and stopping performance â not a yellow chain. (3) Teach/jog is a different mode with enabling device and reduced speed. Service is LOTO. Hand grinders in the same cell keep guards on; a glove is not a wheel guard. Classic traps: Yellow chain as a robot guard.; Assuming “collaborative” means no risk assessment.; Removing a tool guard because it slows production.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for tools machines. Verify whether a higher system or design fix is still open. Contrast labels: Yellow chain and slow speed is actually Admin / hope — not validated safeguarding; Interlocked fence or validated cobot limits is actually Engineering safeguarding; Teach mode in production is actually Wrong mode — enabling device and reduced speed are not a production plan; Glove instead of a grinder guard is actually PPE around a missing tool guard. If the stem shows a guard is removed to clear jams on the run, pick stop and LOTO \u2014 restore safeguarding. If the stem shows robot cell uses only floor tape, pick require interlocked fencing or validated alternative. If the stem shows light curtain distance is too short for stop time, pick increase distance or improve stopping \u2014 do not hope. If the stem shows maintenance needs access inside the cell, pick designed maintenance mode with energy control. If the stem shows two answers work, pick higher hierarchy / system / design. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Tools / robots — is the chain a guard sits in CSP-11 Domain 1 Applied Safety Technology. The exam tests whether you apply the rule when a package already looks complete. Core rule: Safeguarding matches the task: fixed guard, interlock, light curtain, area scanner, or validated collaborative limits. Yellow chain and training are not safeguarding. Production mode is not teach mode. Hand tools: right tool, guards on, no homemade âPPE as a guard.â Deep robotics is a later Maximum class â here you apply the hierarchy to the cell. Field context: A collaborative robot will share a bench with an assembler. The integrator wants a yellow chain and âslow speed.â You are on the risk assessment. The question is whether a painted chain is safeguarding. The oil-and-gas skin shifts the same decision into production pressure: A collaborative robot will share a bench with a technician on a process skid. The integrator wants a yellow chain and slow speed. You are on the risk assessment. The construction skin shifts it into schedule and trade stacking: A collaborative robot will share a bench in a site fab shop. Model caption for this class: Four boxes of safeguarding, left to right: Fixed barrier â Interlocked guard â Presence sensing (curtain/scanner) â Validated collaborative speed/force with a defined space. A red âchain / posterâ sticker marked NOT A GUARD. Caption: if a body can reach the hazard in production, the chain failed the drawing. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Safeguarding matches the task: fixed guard, interlock, light curtain, area scanner, or validated collaborative limits. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Remove guards only under LOTO — never for production rate. (3) Robot cells need interlocked perimeter and designed maintenance modes. (4) Two-hand controls and presence-sensing devices require proper distance and stop performance. (5) Floor tape is not a safeguard for an industrial robot. (6) Collaborative robot claims still need risk assessment and validated limits. (7) Hand tools need the right tool, condition, and guards where designed. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Cobot at a shared bench. (1) Can the robot be fenced and feed the assembler through a window? That is still the best. (2) If true collaboration is required, validated force/speed, defined workspace, and stopping performance â not a yellow chain. (3) Teach/jog is a different mode with enabling device and reduced speed. Service is LOTO. Hand grinders in the same cell keep guards on; a glove is not a wheel guard. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Yellow chain as a robot guard.; Assuming “collaborative” means no risk assessment.; Removing a tool guard because it slows production.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Yellow chain and slow speed” is really Admin / hope — not validated safeguarding; “Interlocked fence or validated cobot limits” is really Engineering safeguarding; “Teach mode in production” is really Wrong mode — enabling device and reduced speed are not a production plan; “Glove instead of a grinder guard” is really PPE around a missing tool guard. Stem-if-then map: if a guard is removed to clear jams on the run → stop and LOTO \u2014 restore safeguarding; if robot cell uses only floor tape → require interlocked fencing or validated alternative; if light curtain distance is too short for stop time → increase distance or improve stopping \u2014 do not hope; if maintenance needs access inside the cell → designed maintenance mode with energy control; if two answers work → higher hierarchy / system / design. Scoring favors evidence, owners, verification, and hierarchy-smart controls on tools machines. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Tools / robots — is the chain a guard?",
  cardBack:
    "Safeguard to the task. Collaborative means validated, not yellow. Teach ≠ production. Tool guards stay on. Attractive wrong answer: chain, slow speed, and a glove. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence includes safeguarding matched to the task, chain is not a guard, and teach mode is not production.",
};

export const items: ClassItem[] = [
  exam(T, "Cobot will share a bench. Integrator proposes a yellow chain and slow speed. Fencing with a pass-through window is still possible. Best CSP recommendation?", [
    "Approve the chain — collaborative means people can be there.",
    "Specify a fence/window if the task allows; if true collaboration remains, require validated force/speed/space — not a chain.",
    "Approve tape instead of chain.",
    "Approve a poster on robot awareness.",
  ], 1, "Chain is not safeguarding. Fence or validate. Hierarchy still prefers separation.", "HIER", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "OSHA 1910 Subpart O machinery and machine guarding",
      fieldTakeaway: "Safeguarding matches the task: fixed guard, interlock, light curtain, area scanner, or validated collaborative limits. Yellow chain and training are not safeguarding. Production mode is not teach mode. Hand tools: rig... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Operator will run production in teach mode at full speed “to keep cycle time.” Best comment?", [
    "Approve — teach is a production mode.",
    "Reject: teach/jog is a reduced-speed, enabling-device mode. Production needs automatic mode behind the chosen safeguard.",
    "Approve if the chain is up.",
    "Approve under 8 seconds per cycle.",
  ], 1, "STEM: mode is the constraint. TIME (8 s) is a distractor.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "OSHA 1910 Subpart O machinery and machine guarding",
      fieldTakeaway: "Safeguarding matches the task: fixed guard, interlock, light curtain, area scanner, or validated collaborative limits. Yellow chain and training are not safeguarding. Production mode is not teach mode. Hand tools: rig... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Angle grinder guard is removed because it marks the work. Best control?", [
    "Allow — quality first.",
    "Keep the guard; change the tool or the fixture. A glove is not a wheel guard.",
    "Allow with extra gloves.",
    "Allow on night shift.",
  ], 1, "Tool guards stay. PPE does not replace them.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "OSHA 1910 Subpart O machinery and machine guarding",
      fieldTakeaway: "Safeguarding matches the task: fixed guard, interlock, light curtain, area scanner, or validated collaborative limits. Yellow chain and training are not safeguarding. Production mode is not teach mode. Hand tools: rig... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Light curtain stopping time is 0.4 s. Integrator uses 0.4 min in the safety-distance formula. What happened?", [
    "Nothing — 0.4 is 0.4.",
    "UNIT: 0.4 min is 24 s, not 0.4 s. The distance will be wrong by a factor of 60; recompute in seconds.",
    "Use RAD.",
    "0.4 s = 0.4 m always.",
  ], 1, "Stopping-time units. Attractive wrong treats 0.4 as dimensionless.", "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "OSHA 1910 Subpart O machinery and machine guarding",
      fieldTakeaway: "Safeguarding matches the task: fixed guard, interlock, light curtain, area scanner, or validated collaborative limits. Yellow chain and training are not safeguarding. Production mode is not teach mode. Hand tools: rig... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A CNC door interlock is taped over so chips can be brushed during cycle. Best CSP position?", [
    "Approve — it is only chips.",
    "Remove the bypass. Chips during cycle are a process/design problem (chip conveyor, interlocked door). Taped interlocks are defeated guards.",
    "Approve with sleeves.",
    "Approve if a spotter watches the tape.",
  ], 1, "Defeated interlock is not a mode.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "OSHA 1910 Subpart O machinery and machine guarding",
      fieldTakeaway: "Safeguarding matches the task: fixed guard, interlock, light curtain, area scanner, or validated collaborative limits. Yellow chain and training are not safeguarding. Production mode is not teach mode. Hand tools: rig... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Last sentence: “The assembler must share the bench; a full fence is not feasible.” Best remaining control?", [
    "Yellow chain.",
    "Validated collaborative application (force, speed, pressure, stopping, defined space) plus residual PPE; chain is still not the safeguard.",
    "Training only.",
    "Insurance.",
  ], 1, "STEM closed the fence. Remaining engineering is validation, not chain.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "OSHA 1910 Subpart O machinery and machine guarding",
      fieldTakeaway: "Safeguarding matches the task: fixed guard, interlock, light curtain, area scanner, or validated collaborative limits. Yellow chain and training are not safeguarding. Production mode is not teach mode. Hand tools: rig... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Service on the robot requires a person in the cell with power available for jog. Best energy control?", [
    "Production automatic mode with a chain.",
    "Designed maintenance mode: enabling device, reduced speed, and LOTO for work that does not need power. Do not service in automatic.",
    "Sleeves.",
    "A second chain.",
  ], 1, "Life-cycle: maintainers are users. Mode + LOTO.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "OSHA 1910 Subpart O machinery and machine guarding",
      fieldTakeaway: "Safeguarding matches the task: fixed guard, interlock, light curtain, area scanner, or validated collaborative limits. Yellow chain and training are not safeguarding. Production mode is not teach mode. Hand tools: rig... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a municipal water-plant retrofit. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Which analysis belongs before the cobot is installed.", [
    "FTA after the first crush injury.",
    "Task-based risk assessment that selects fence vs presence sensing vs collaborative validation, written into the cell design.",
    "FMEA on chain color.",
    "Observation of slow speed after go-live only.",
  ], 1, "The assessment must still change the cell.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "OSHA 1910 Subpart O machinery and machine guarding",
      fieldTakeaway: "Safeguarding matches the task: fixed guard, interlock, light curtain, area scanner, or validated collaborative limits. Yellow chain and training are not safeguarding. Production mode is not teach mode. Hand tools: rig... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A press with a two-hand control is used one-handed because the other hand holds the part. Best control?", [
    "Allow — two-hand is a suggestion.",
    "Redesign nest/fixture so both hands are on the controls or use a guard/presence sensor; one-handed use defeats the control.",
    "A glove on the holding hand.",
    "A poster.",
  ], 1, "Two-hand control only works if both hands are actually required.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "OSHA 1910 Subpart O machinery and machine guarding",
      fieldTakeaway: "Safeguarding matches the task: fixed guard, interlock, light curtain, area scanner, or validated collaborative limits. Yellow chain and training are not safeguarding. Production mode is not teach mode. Hand tools: rig... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Finance prefers extra insurance instead of an interlocked fence. Best position?", [
    "Insurance is a safeguard.",
    "Reject: specify the fence (or validated alternative). Insurance is FIN.",
    "Raise the deductible.",
    "Buy a nicer chain.",
  ], 1, "FIN vs safeguarding.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "OSHA 1910 Subpart O machinery and machine guarding",
      fieldTakeaway: "Safeguarding matches the task: fixed guard, interlock, light curtain, area scanner, or validated collaborative limits. Yellow chain and training are not safeguarding. Production mode is not teach mode. Hand tools: rig... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "RPM of a grinding wheel is 6,600. Tool is marked 6,600 rpm but a drawing note says 6,600 rps. Best flag?", [
    "6,600 is 6,600.",
    "UNIT: rps vs rpm is a factor of 60. Do not mount a wheel off its rating; believe the tool/wheel ratings in consistent units.",
    "Use RAD as rpm.",
    "6,600 rps is safer.",
  ], 1, "UNIT on rotational speed. Over-speed is a bursting wheel (struck-by).", "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "OSHA 1910 Subpart O machinery and machine guarding",
      fieldTakeaway: "Safeguarding matches the task: fixed guard, interlock, light curtain, area scanner, or validated collaborative limits. Yellow chain and training are not safeguarding. Production mode is not teach mode. Hand tools: rig... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a bridge deck pour laydown yard. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Least consistent with machine/robot safeguarding.", [
    "Interlocked perimeter on a full-speed robot.",
    "Validated cobot limits when sharing is required.",
    "A laminated “robots can hurt you” card after three near-misses, with the yellow chain unchanged.",
    "Tool guards kept on grinders.",
  ], 2, "A poster is not a safeguard.", "HIER", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "OSHA 1910 Subpart O machinery and machine guarding",
      fieldTakeaway: "Safeguarding matches the task: fixed guard, interlock, light curtain, area scanner, or validated collaborative limits. Yellow chain and training are not safeguarding. Production mode is not teach mode. Hand tools: rig... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
