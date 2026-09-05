import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D1.03";

export const classFields: ClassFields = {
  hook: "A conveyor nip is exposed during jam clearing. Operations wants “don’t wear loose clothing” posters and cut-resistant sleeves. You are the CSP. The question is whether the nip must be reachable while the belt can move.",
  hookOilGas: `A belt conveyor nip on a load-out is exposed during jam clearing. Operations wants posters and cut-resistant sleeves. You are the CSP. The question is whether the nip must be reachable while the belt can move.`,
  hookConstruction: `A site conveyor nip is exposed during jam clearing. Operations wants posters and cut-resistant sleeves. You are the CSP. The question is whether the nip must be reachable while the belt can move.`,
  rule: "Guard the nip for production. LOTO for service. Struck-by: separate people from loads, energy, and vehicles by design (barriers, exclusion zones, restraints, covers), not by yelling. Clothing rules are last.",
  modelCaption:
    "Two columns: Caught-in (in-running nip, point of operation, rotating parts, collapsing excavation) vs Struck-by (falling object, flying chip, swinging load, vehicle). Under both: Guard / separate / isolate, then admin, then PPE. Caption: sleeves do not replace a guard; a spotter does not replace a barrier.",
  workedCase:
    "Conveyor jam. (1) Production mode: nip guarded, interlocked. (2) Service: isolate and lock, then clear. (3) If jams are frequent, design a clearing port that keeps the body out of the zone. Posters about loose clothing are what you add after the guard, not instead of it.",
  trapsJson: traps(
    "Cut-resistant sleeves as machine guarding.",
    "Spotter instead of vehicle/load barriers.",
    "Reaching past a muted light curtain because “it’s only a second.”",
  ),
  contrastJson: contrast([
    { looksLike: "Sleeves and a clothing poster", actually: "PPE / admin around an unguarded nip" },
    { looksLike: "Fixed/interlocked guard on the nip", actually: "Engineering for production" },
    { looksLike: "LOTO then clear the jam", actually: "Isolation for service" },
    { looksLike: "Spotter for a backing truck", actually: "Administrative — design the path or the restraint" },
  ]),
  mustScoreJson: mustScore(
    "Guard the nip and point of operation for production.",
    "LOTO for service \u2014 a spotter is not a guard.",
    "Separate people from loads, vehicles, and released energy.",
    "Stored energy (springs, gravity, pneumatics) counts in caught-in logic.",
    "Floor tape loses to fixed barriers and interlocks still on the option sheet.",
    "Struck-by controls include exclusion zones, restraints, and engineered stops.",
    "PPE does not replace a missing guard during production.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "the guard is removed for production speed", pick: "stop and restore safeguarding before running" },
    { ifStem: "service requires hands in the machine", pick: "full LOTO \u2014 not inch-mode with a spotter" },
    { ifStem: "pedestrians share an aisle with PIT traffic", pick: "engineered separation before vests alone" },
    { ifStem: "a suspended load can swing into a walkway", pick: "exclusion zone and control \u2014 not hope" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
  ),

  brief: `Guard the nip for production. LOTO for service. Struck-by: separate people from loads, energy, and vehicles by design (barriers, exclusion zones, restraints, covers), not by yelling. Clothing rules are last. If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Guard the nip for production. LOTO for service. Struck-by: separate people from loads, energy, and vehicles by design (barriers, exclusion zones, restraints, covers), not by yelling. Clothing rules are last. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
A conveyor nip is exposed during jam clearing. Operations wants âdonât wear loose clothingâ posters and cut-resistant sleeves. You are the CSP. The question is whether the nip must be reachable while the belt can move. Oil-and-gas skin: A belt conveyor nip on a load-out is exposed during jam clearing. Operations wants posters and cut-resistant sleeves. You are the CSP. Construction skin: A site conveyor nip is exposed during jam clearing. You are the CSP. Work the case: Conveyor jam. (1) Production mode: nip guarded, interlocked. (2) Service: isolate and lock, then clear. (3) If jams are frequent, design a clearing port that keeps the body out of the zone. Posters about loose clothing are what you add after the guard, not instead of it. Classic traps: Cut-resistant sleeves as machine guarding.; Spotter instead of vehicle/load barriers.; Reaching past a muted light curtain because “it’s only a second.”. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for caught struck. Verify whether a higher system or design fix is still open. Contrast labels: Sleeves and a clothing poster is actually PPE / admin around an unguarded nip; Fixed/interlocked guard on the nip is actually Engineering for production; LOTO then clear the jam is actually Isolation for service; Spotter for a backing truck is actually Administrative — design the path or the restraint. If the stem shows the guard is removed for production speed, pick stop and restore safeguarding before running. If the stem shows service requires hands in the machine, pick full LOTO \u2014 not inch-mode with a spotter. If the stem shows pedestrians share an aisle with PIT traffic, pick engineered separation before vests alone. If the stem shows a suspended load can swing into a walkway, pick exclusion zone and control \u2014 not hope. If the stem shows two answers work, pick higher hierarchy / system / design. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Caught-in / struck-by — is the body in the energy path sits in CSP-11 Domain 1 Applied Safety Technology. The exam tests whether you apply the rule when a package already looks complete. Core rule: Guard the nip for production. LOTO for service. Struck-by: separate people from loads, energy, and vehicles by design (barriers, exclusion zones, restraints, covers), not by yelling. Clothing rules are last. Field context: A conveyor nip is exposed during jam clearing. Operations wants âdonât wear loose clothingâ posters and cut-resistant sleeves. You are the CSP. The question is whether the nip must be reachable while the belt can move. The oil-and-gas skin shifts the same decision into production pressure: A belt conveyor nip on a load-out is exposed during jam clearing. Operations wants posters and cut-resistant sleeves. You are the CSP. The construction skin shifts it into schedule and trade stacking: A site conveyor nip is exposed during jam clearing. You are the CSP. Model caption for this class: Two columns: Caught-in (in-running nip, point of operation, rotating parts, collapsing excavation) vs Struck-by (falling object, flying chip, swinging load, vehicle). Under both: Guard / separate / isolate, then admin, then PPE. Caption: sleeves do not replace a guard; a spotter does not replace a barrier. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Guard the nip and point of operation for production. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) LOTO for service — a spotter is not a guard. (3) Separate people from loads, vehicles, and released energy. (4) Stored energy (springs, gravity, pneumatics) counts in caught-in logic. (5) Floor tape loses to fixed barriers and interlocks still on the option sheet. (6) Struck-by controls include exclusion zones, restraints, and engineered stops. (7) PPE does not replace a missing guard during production. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Conveyor jam. (1) Production mode: nip guarded, interlocked. (2) Service: isolate and lock, then clear. (3) If jams are frequent, design a clearing port that keeps the body out of the zone. Posters about loose clothing are what you add after the guard, not instead of it. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Cut-resistant sleeves as machine guarding.; Spotter instead of vehicle/load barriers.; Reaching past a muted light curtain because “it’s only a second.”. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Sleeves and a clothing poster” is really PPE / admin around an unguarded nip; “Fixed/interlocked guard on the nip” is really Engineering for production; “LOTO then clear the jam” is really Isolation for service; “Spotter for a backing truck” is really Administrative — design the path or the restraint. Stem-if-then map: if the guard is removed for production speed → stop and restore safeguarding before running; if service requires hands in the machine → full LOTO \u2014 not inch-mode with a spotter; if pedestrians share an aisle with PIT traffic → engineered separation before vests alone; if a suspended load can swing into a walkway → exclusion zone and control \u2014 not hope; if two answers work → higher hierarchy / system / design. Scoring favors evidence, owners, verification, and hierarchy-smart controls on caught struck. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Caught-in / struck-by — is the body in the energy path?",
  cardBack:
    "Guard for production, LOTO for service, separate people from loads and vehicles. Attractive wrong answer: sleeves, posters, or a spotter while the nip or path is still open. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence includes guard the danger zone for production / LOTO for service / separate people from struck-by energy by design.",
};

export const items: ClassItem[] = [
  exam(T, "Conveyor nip is reached to clear jams with the belt live. Operations proposes sleeves and a clothing poster. Best control?", [
    "Approve sleeves as the primary guard.",
    "Guard/interlock the nip for production and LOTO before anyone enters the zone; design a clearing method that keeps the body out.",
    "A spotter who yells “stop.”",
    "Slow the belt and keep reaching in.",
  ], 1, "Sleeves are PPE around a live nip. Guard and isolate.", "HIER", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "OSHA 1910.212 machine guarding",
      fieldTakeaway: "Guard the nip for production. LOTO for service. Struck-by: separate people from loads, energy, and vehicles by design (barriers, exclusion zones, restraints, covers), not by yelling. Clothing rules are last. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A light curtain is muted so an operator can straighten a part during the cycle. Best CSP comment?", [
    "Approve — muting during the cycle is production minor servicing.",
    "Stop: muting to put a body in the point of operation defeats the presence sensor. Fix the process or use a designed stop-time mode; do not reach in live.",
    "Approve if sleeves are cut-resistant.",
    "Approve if the cycle is under 8 seconds.",
  ], 1, "Defeated safeguarding is not a mode. TIME (8 s) is a distractor.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "OSHA 1910.212 machine guarding",
      fieldTakeaway: "Guard the nip for production. LOTO for service. Struck-by: separate people from loads, energy, and vehicles by design (barriers, exclusion zones, restraints, covers), not by yelling. Clothing rules are last. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Pedestrians and forklifts share an aisle. Warehouse wants horns and vests. Layout can still add a guarded walkway. Best control?", [
    "Vests and horns as the primary package.",
    "Physical separation (guarded walkway / no-go aisle); horns and vests only for residual.",
    "A spotter at every intersection instead of barriers.",
    "Faster forklifts so exposure time drops.",
  ], 1, "Separate by design. Vests are PPE; spotters are admin.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "OSHA 1910.212 machine guarding",
      fieldTakeaway: "Guard the nip for production. LOTO for service. Struck-by: separate people from loads, energy, and vehicles by design (barriers, exclusion zones, restraints, covers), not by yelling. Clothing rules are last. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A load is suspended while two workers stand under it to guide the landing. Best control?", [
    "Hard hats make the line of fire acceptable.",
    "No one under the load; use tag lines from outside the fall zone and a designed landing guide.",
    "A spotter under the load.",
    "Faster landing to reduce time under the load.",
  ], 1, "Struck-by from above is exclusion, not helmets as the plan.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "OSHA 1910.212 machine guarding",
      fieldTakeaway: "Guard the nip for production. LOTO for service. Struck-by: separate people from loads, energy, and vehicles by design (barriers, exclusion zones, restraints, covers), not by yelling. Clothing rules are last. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Rotating shaft coupling is unguarded “because maintenance needs access.” Best life-cycle comment?", [
    "Leave it open and issue sleeves.",
    "Specify a guard that is interlocked or requires a tool, plus a designed maintenance access that is used under LOTO.",
    "Paint the coupling yellow.",
    "Train on long hair.",
  ], 1, "Maintainers are users. An open coupling is not an access plan.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "OSHA 1910.212 machine guarding",
      fieldTakeaway: "Guard the nip for production. LOTO for service. Struck-by: separate people from loads, energy, and vehicles by design (barriers, exclusion zones, restraints, covers), not by yelling. Clothing rules are last. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Last sentence: “The press cannot be guarded without making the current part geometry impossible, and the part is customer-frozen.” Best remaining control?", [
    "Sleeves as primary.",
    "Two-hand control / presence sensing with validated stopping time, plus LOTO for inner work — highest remaining engineering.",
    "A poster.",
    "Insurance.",
  ], 1, "Last sentence closed a full fixed barrier. Remaining engineering still beats PPE.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "OSHA 1910.212 machine guarding",
      fieldTakeaway: "Guard the nip for production. LOTO for service. Struck-by: separate people from loads, energy, and vehicles by design (barriers, exclusion zones, restraints, covers), not by yelling. Clothing rules are last. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Chips fly from a mill. Operator wants better safety glasses only. The drawing can still take a chip guard. Best control?", [
    "Glasses as primary.",
    "Chip/splash guard on the machine, then eye protection for residual.",
    "A face-shield poster.",
    "Job rotation so each person is hit less often.",
  ], 1, "Guard the trajectory. Glasses are PPE.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "OSHA 1910.212 machine guarding",
      fieldTakeaway: "Guard the nip for production. LOTO for service. Struck-by: separate people from loads, energy, and vehicles by design (barriers, exclusion zones, restraints, covers), not by yelling. Clothing rules are last. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a bridge deck pour laydown yard. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Which tool belongs before a new conveyor is installed.", [
    "FTA after the first amputation.",
    "Design-stage guarding/JHA of nips, take-ups, and jam-clear methods written into the layout.",
    "FMEA on sleeve brands.",
    "Observation of clothing after start-up only.",
  ], 1, "Guarding must still be able to change the frame.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "OSHA 1910.212 machine guarding",
      fieldTakeaway: "Guard the nip for production. LOTO for service. Struck-by: separate people from loads, energy, and vehicles by design (barriers, exclusion zones, restraints, covers), not by yelling. Clothing rules are last. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A stack of pallets is 12 ft and unstable. Workers walk the base. Best control?", [
    "Hard hats.",
    "Restack to a stable height, wrap/band, and keep people out of the collapse line with layout.",
    "A spotter who warns of lean.",
    "Faster walking.",
  ], 1, "Unstable gravity is caught-in/struck-by. Hats do not hold pallets.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "OSHA 1910.212 machine guarding",
      fieldTakeaway: "Guard the nip for production. LOTO for service. Struck-by: separate people from loads, energy, and vehicles by design (barriers, exclusion zones, restraints, covers), not by yelling. Clothing rules are last. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Backup alarm on a truck is proposed instead of a dock restraint and a designed pedestrian path. Best CSP position?", [
    "Alarm is equivalent engineering.",
    "Specify restraint and path; an alarm is a warning (admin-ish), not separation.",
    "Alarm plus vests only.",
    "Remove pedestrians by policy only.",
  ], 1, "Warnings are not barriers. Design the path and the truck-to-dock interface.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "OSHA 1910.212 machine guarding",
      fieldTakeaway: "Guard the nip for production. LOTO for service. Struck-by: separate people from loads, energy, and vehicles by design (barriers, exclusion zones, restraints, covers), not by yelling. Clothing rules are last. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A hydraulic ram can drop during die change. Best additional control besides electrical LOTO?", [
    "A sign.",
    "Mechanical block rated for the ram, applied as isolation of gravity.",
    "Sleeves.",
    "A second horn.",
  ], 1, "Gravity is energy. Block it.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "OSHA 1910.212 machine guarding",
      fieldTakeaway: "Guard the nip for production. LOTO for service. Struck-by: separate people from loads, energy, and vehicles by design (barriers, exclusion zones, restraints, covers), not by yelling. Clothing rules are last. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Finance prefers extra insurance over interlocked guards on a new line. Best position?", [
    "Insurance transfers the amputation, so it is equivalent.",
    "Reject: insurance is risk financing. Specify the guards.",
    "Raise the deductible and skip guards.",
    "Call the premium a leading indicator of guarding.",
  ], 1, "FIN distractor. Guards are the control.", "FIN", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "OSHA 1910.212 machine guarding",
      fieldTakeaway: "Guard the nip for production. LOTO for service. Struck-by: separate people from loads, energy, and vehicles by design (barriers, exclusion zones, restraints, covers), not by yelling. Clothing rules are last. Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
