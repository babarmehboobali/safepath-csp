import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D1.03";

export const classFields: ClassFields = {
  hook: "A mixer jam. Production wants a “quick inch” with the guard open and a spotter. You are asked to approve a minor-servicing exception. The question is whether the employee is exposed to unexpected energization.",
  hookOilGas: "A pump jam on a process skid. Production wants a “quick inch” with the guard open and a spotter. You are asked to approve a minor-servicing exception. The question is whether the employee is exposed to unexpected energization.",
  hookConstruction: "A mixer jam on a site batch plant. Production wants a “quick inch” with the guard open and a spotter. You are asked to approve a minor-servicing exception. The question is whether the employee is exposed to unexpected energization.",
  rule: "If the employee is exposed to unexpected energization or stored energy, isolate every energy type, lock, dissipate, and verify zero energy. Exceptions are narrow. Each person holds a personal lock. A spotter is not a lock.",
  modelCaption: "Energy types in a row (electrical, mechanical, hydraulic, pneumatic, thermal, chemical, gravity/stored). Sequence under them: Shutdown → Isolate → Lock/Tag → Dissipate → Verify (try-out). Caption: a missing energy type is a missing isolation; a missing verify is not LOTO.",
  workedCase: "(1) Guard open on a mixer jam is service with exposure — not minor servicing while the guard holds. (2) Isolate electrical and residual mechanical/gravity in the agitator; apply a personal lock. (3) Dissipate, try the start, then clear. Losing answer: a spotter during a live inch, or one shop lock for the whole crew.",
  trapsJson: traps(
    "Calling a spotter “group LOTO.”",
    "Inch-mode with the guard open as a minor-servicing exception.",
    "One shop lock for the whole crew.",
  ),
  contrastJson: contrast([
    { looksLike: "Spotter during a live inch", actually: "Administrative — not isolation" },
    { looksLike: "Personal lock plus try-out", actually: "LOTO sequence" },
    { looksLike: "One departmental lock left on the hasp overnight", actually: "Not each-person control" },
    { looksLike: "Cord-and-plug in exclusive control", actually: "Narrow exception — not for hard-wired mixers" },
  ]),
  mustScoreJson: mustScore(
    "Service with exposure requires full LOTO.",
    "Isolate every energy type, not only electrical.",
    "Each person applies a personal lock.",
    "Verify zero energy by try-out; a smooth handle is not a test.",
    "Cord-and-plug and minor servicing are narrow exceptions.",
    "A spotter is not an energy-isolating device.",
    "A shop lock is not each-person control.",
    "Gravity and stored energy need blocks or dumps, not signs."
  ),
    stemIfThenJson: stemIfThen(
    { ifStem: "hands are in the machine or the guard is open", pick: "require full LOTO" },
    { ifStem: "multiple workers share one isolation point", pick: "each applies a personal lock" },
    { ifStem: "the stem offers inch-mode or a spotter", pick: "reject the exception" },
    { ifStem: "only the breaker is locked", pick: "look for pneumatic, thermal, or gravity" },
    { ifStem: "shift change is in the last sentence", pick: "transfer personal locks before work resumes" },
    { ifStem: "two answers isolate", pick: "the one that also verifies zero energy" },
  ),
  brief: `Service with exposure equals full LOTO. Isolate every energy, personal lock, dump, try. Exceptions are narrow. Each person, personal lock. A spotter is not a lock. Design isolation points. Exam default: if two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
If the employee is exposed to unexpected energization or stored energy during service, isolate every energy type, apply a personal lock, dissipate, and verify zero energy by try-out. Cord-and-plug and minor servicing are narrow exceptions — not a shortcut around jam-clearing with the guard open. Group LOTO means each person holds a personal lock. A spotter is not an energy-isolating device. A shop lock with one key in a supervisor’s pocket is not each-employee protection. Energy is plural: electrical, mechanical, hydraulic, pneumatic, thermal, chemical, gravity, and stored charge.

Field move
A mixer jam with the guard open is service with exposure. Do not approve a live “inch” with a spotter. Shut down, isolate electrical and residual mechanical or gravity in the agitator, apply the personal lock, dump residual, try the start, then clear. Locate disconnects in sight of the work. Provide lockable valves, pin points, and bleed valves that can themselves be locked. Shift change transfers personal locks; it does not leave a departmental lock overnight. Contractors still apply a personal lock to the host group device after verifying isolation. A 120 V drill with the plug in exclusive control can meet the narrow exception — a hard-wired mixer cannot borrow that exception because someone is in a hurry.

Exam
If two answers work, take higher hierarchy / system / design — lockable isolation hardware and trapped-key systems beat a better tag. Frequency of jams does not create the minor-servicing exception when the safeguard is muted. Training is not an isolating device. Finance cannot replace lockable valves with a higher liability limit. 1904 clocks still run if an unexpected start already injured someone. Verification is a test, not a smooth handle: attempt a normal start, prove absence of voltage, and block gravity. When the last sentence is a muted curtain, reject the exception. When it is exclusive control of a plug on a cord-and-plug tool, the exception can hold for that tool only.

A missing energy type is a missing isolation. After the breaker is locked, ask what else can still move: air, oil, steam, gravity, charge. Group LOTO is personal control multiplied, not a shared shop key. Cord-and-plug exclusive control is the one exception the exam will offer as a look-alike for a hard-wired mixer — do not import it. If two answers isolate, take the one that also verifies.
`,
  deep: `The exam sells two attractive wrong answers in LOTO. First, the exception: “just a second,” “inch mode,” “the operator is right there,” “we do this every ten minutes.” If the employee is exposed to unexpected start-up or stored energy, the exception is closed. OSHA’s minor-servicing language assumes the safeguard still protects and the task is routine, repetitive, and integral to production — not a hand in the bowl. Muting a light curtain to reach a nip is exposure. A spotter is administrative theater around live energy. Cut-resistant sleeves do not replace isolation. Second, the shop lock: one key in the supervisor’s pocket is not each-employee protection. Group lockout uses a hasp or box so each worker’s lock holds the isolation, and each person removes only their own lock to leave. A tag with three names is not three locks. Radio check-in is not a lock.

Energy is plural. Gravity will drop the ram after hydraulics dump. Pneumatic will cycle the cylinder after the breaker opens. Thermal will steam the jacket. Chemical lines will still flow. Capacitors will bite after the disconnect opens. A complete isolation procedure lists them; a complete verification tests them. Try-out is not optional theater — it is how you find the wrong breaker. Assuming the handle moved smoothly is not a test. Checking absence of voltage on the circuit that was actually isolated, attempting a normal start after lock application, and blocking the ram against gravity are verification. A sign that says “ram may drop” is admin around a falling ram. Specify a mechanical block as part of isolation. Stored electrical energy needs a proving unit and a grounded dump when the procedure requires it, not a five-second wait.

Design still matters, which is why this class sits next to hierarchy and Prevention through Design. Locate disconnects in sight of the work. Provide lockable valves, trapped-key interlocks, pin points for gravity, and bleed valves that can themselves be locked. Trapped-key and safeguard interlocking make LOTO possible; they do not replace personal locks during service. Skipping lockable hardware and “just training harder” is an administrative control around isolation that was never installed. Finance cannot replace valves with a higher liability limit. QR codes on non-lockable valves are not locks.

Other employers and contractors need coordination: who owns the isolation, how a group box works, how shift change is documented. A tag without a lock is not a lock. Continuity of personal control across a shift means incoming workers apply their locks before day-shift locks come off. Leaving a shop lock and texting the night supervisor is not transfer. Removing all locks so the night crew can “start fresh” is an unexpected-energization setup. The host coordinates energy sources; the contractor still verifies and applies a personal lock.

When two answers work, take the option that isolates and verifies over the option that warns and watches. Hardware first. Then still lock and try. If the last sentence is a muted curtain and a jam every ten minutes, reject the exception. If the last sentence is a 120 V drill with the plug in exclusive control, the narrow exception can hold — do not import it to a hard-wired mixer. Tool choice: design-stage review of isolation points into the P&ID beats waiting for the first unexpected-start injury and then running FTA. FMEA on tag color is the wrong tool. 1904 still owns the clock if the unauthorized inch already amputated a fingertip: 24 hours, not next month with CAPA. Units rarely appear here; the “math” is whether exposure exists and whether every energy type was actually isolated and verified.

Walk the sequence until it is automatic: shutdown, isolate every listed energy, personal lock, dissipate or block, verify by try-out. Then service. Then each person removes only their own lock. The attractive field story is always speed: inch it, watch it, shop-lock it, tag it. The scoring key is exposure. If exposure exists, the exception is closed and the shop lock is closed. If exposure does not exist because the plug is in exclusive control, the exception is narrow and stays on that tool. Design the next mixer so isolation is obvious, then still lock it. That is the class in one line: make LOTO possible, then actually do LOTO, then prove zero energy before a hand enters the zone.`,
  cardFront: "LOTO — exposed to unexpected energy?",
  cardBack: "Isolate every energy, personal lock, dissipate, verify. Attractive wrong answer: spotter, shop lock, or “minor servicing” with the guard open. Study only — not allowed in the test center.",
  teachBackKey: "Pass if the sentence includes isolate all energy types / personal lock / verify zero energy, and names exceptions as narrow.",
  formulaSlug: null,
};

export const items: ClassItem[] = [
  exam(
    T,
    "Mixer jam. Guard is open. Production wants a live “inch” with a spotter. Best CSP position?",
    [
      "Approve the exception — a spotter is equivalent to LOTO.",
      "Require full isolation, personal lock, dissipate, and try-out before anyone reaches in.",
      "Allow inch mode if the operator has been with the company five years.",
      "Replace LOTO with cut-resistant sleeves.",
    ],
    1,
    "Hands in the mixer is service with exposure. A spotter is not an energy-isolating device.",
    "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "OSHA 1910.147 Control of Hazardous Energy",
      fieldTakeaway: "If the employee is exposed to unexpected energization or stored energy, isolate every energy type, lock, dissipate, and verify zero energy. Exceptions are narrow. Each person holds a personal lock. A spotter is not a... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Three mechanics will work on the same conveyor. Isolation is at one breaker. Best group method?",
    [
      "Hasp or group box so each mechanic applies a personal lock before entering, and removes only their own lock to leave.",
      "One shop lock; supervisor keeps the only key.",
      "A tag with three names.",
      "Radio check-in every 15 minutes instead of locks.",
    ],
    0,
    "Each person must hold the isolation. A shop lock is the attractive field shortcut.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "OSHA 1910.147 Control of Hazardous Energy",
      fieldTakeaway: "If the employee is exposed to unexpected energization or stored energy, isolate every energy type, lock, dissipate, and verify zero energy. Exceptions are narrow. Each person holds a personal lock. A spotter is not a... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "A 120 V drill is cord-and-plug. The employee unplugs it and keeps the plug in exclusive control while changing the bit. Is this the LOTO exception?",
    [
      "No — all cord-and-plug tools still need a lock on the panel.",
      "Only if a spotter watches the outlet.",
      "Yes — exclusive control of the plug can meet the exception for that tool.",
      "Only if the drill is over 2 horsepower.",
    ],
    2,
    "Cord-and-plug under exclusive control is the narrow exception. Do not import it to hard-wired equipment.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "OSHA 1910.147 Control of Hazardous Energy",
      fieldTakeaway: "If the employee is exposed to unexpected energization or stored energy, isolate every energy type, lock, dissipate, and verify zero energy. Exceptions are narrow. Each person holds a personal lock. A spotter is not a... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "After the electrical disconnect is locked, a pneumatic cylinder can still stroke. What did the procedure miss?",
    [
      "Nothing — electrical LOTO covers all energy.",
      "A louder horn.",
      "A second electrical lock on the same hasp.",
      "Pneumatic isolation and dump; residual stored energy is its own isolation point.",
    ],
    3,
    "Energy is plural. Missing pneumatic isolation is a missing step, not extra electrical theater.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "OSHA 1910.147 Control of Hazardous Energy",
      fieldTakeaway: "If the employee is exposed to unexpected energization or stored energy, isolate every energy type, lock, dissipate, and verify zero energy. Exceptions are narrow. Each person holds a personal lock. A spotter is not a... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Shift change at a locked-out reactor. Night shift arrives. Best transfer?",
    [
      "Leave the day-shift shop lock and text the night supervisor.",
      "Orderly transfer so the incoming workers apply their personal locks before day-shift locks come off and work resumes.",
      "Remove all locks so the night crew can “start fresh.”",
      "Replace locks with a permit on the control-room desk.",
    ],
    1,
    "Continuity of personal control across the shift. Shop lock plus a text is not transfer.",
    "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "OSHA 1910.147 Control of Hazardous Energy",
      fieldTakeaway: "If the employee is exposed to unexpected energization or stored energy, isolate every energy type, lock, dissipate, and verify zero energy. Exceptions are narrow. Each person holds a personal lock. A spotter is not a... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Which is least consistent with verification of isolation?",
    [
      "Attempt a normal start after lock application.",
      "Test for absence of voltage on the circuit that was isolated.",
      "Assuming the correct breaker was opened because the handle moved smoothly.",
      "Checking that the ram is blocked against gravity.",
    ],
    2,
    "A smooth handle is not a test. Verify the actual energy is gone.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "OSHA 1910.147 Control of Hazardous Energy",
      fieldTakeaway: "If the employee is exposed to unexpected energization or stored energy, isolate every energy type, lock, dissipate, and verify zero energy. Exceptions are narrow. Each person holds a personal lock. A spotter is not a... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "A trapped-key interlock can be specified on a new mixer so the guard key is captured until the isolation key is turned. Operations prefers a padlock procedure only. Best remaining design call?",
    [
      "Procedure only — hardware interlocks are decorative.",
      "Specify the trapped-key system, then still apply personal LOTO for service.",
      "Skip LOTO because the key is trapped.",
      "Use a spotter instead of either.",
    ],
    1,
    "Design the isolation to be usable, then still lock and verify. Hardware helps; it does not retire personal locks during service.",
    "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "OSHA 1910.147 Control of Hazardous Energy",
      fieldTakeaway: "If the employee is exposed to unexpected energization or stored energy, isolate every energy type, lock, dissipate, and verify zero energy. Exceptions are narrow. Each person holds a personal lock. A spotter is not a... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Contractor will enter a robot cell. Host employees already hold a group box. Best coordination?",
    [
      "Contractor works under the host’s shop lock without a personal lock.",
      "Contractor uses only a verbal briefing.",
      "Contractor applies a personal lock to the group device after verifying isolation; host coordinates the energy sources.",
      "Contractor tags the robot teach pendant and skips isolation.",
    ],
    2,
    "Other-employer LOTO still requires personal control of the isolation.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "OSHA 1910.147 Control of Hazardous Energy",
      fieldTakeaway: "If the employee is exposed to unexpected energization or stored energy, isolate every energy type, lock, dissipate, and verify zero energy. Exceptions are narrow. Each person holds a personal lock. A spotter is not a... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Minor-servicing exception is claimed for clearing jams every ten minutes with the light curtain muted. Best CSP comment?",
    [
      "Approve — frequency proves it is integral to production.",
      "Reject: muting the safeguard to reach the nip is exposure to unexpected motion, so LOTO (or an engineered jam-clear mode that keeps the person out of the zone) is required.",
      "Approve if gloves are cut-resistant.",
      "Approve if a JSA is posted.",
    ],
    1,
    "Frequency does not create the exception when the guard is defeated.",
    "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "OSHA 1910.147 Control of Hazardous Energy",
      fieldTakeaway: "If the employee is exposed to unexpected energization or stored energy, isolate every energy type, lock, dissipate, and verify zero energy. Exceptions are narrow. Each person holds a personal lock. A spotter is not a... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "A hydraulic press ram can drop under gravity after hydraulic pressure is dumped. Best additional control?",
    [
      "A sign that says “ram may drop.”",
      "A second tag on the hydraulic valve.",
      "Hearing protection.",
      "Mechanical block / pin designed for the ram, applied as part of isolation.",
    ],
    3,
    "Gravity is stored energy. Block it. A sign is admin around a falling ram.",
    "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "OSHA 1910.147 Control of Hazardous Energy",
      fieldTakeaway: "If the employee is exposed to unexpected energization or stored energy, isolate every energy type, lock, dissipate, and verify zero energy. Exceptions are narrow. Each person holds a personal lock. A spotter is not a... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Which tool actually improves LOTO design before the line is installed?",
    [
      "Design-stage review of isolation points, line-of-sight disconnects, and stored-energy dumps into the P&ID/layout.",
      "Wait for the first unexpected-start injury, then FTA.",
      "FMEA on tag color.",
      "Observation of lock use after the first recordable only.",
    ],
    0,
    "Isolation points must still be able to move on the drawing.",
    "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "OSHA 1910.147 Control of Hazardous Energy",
      fieldTakeaway: "If the employee is exposed to unexpected energization or stored energy, isolate every energy type, lock, dissipate, and verify zero energy. Exceptions are narrow. Each person holds a personal lock. A spotter is not a... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Finance wants to skip lockable valves and “just train harder” on a new chemical line. Best position?",
    [
      "Training can replace lockable isolation hardware.",
      "Use insurance instead of valves.",
      "Specify lockable isolation; training is administrative around hardware that was never installed.",
      "Post QR codes on non-lockable valves.",
    ],
    2,
    "Hardware first. Training is not an isolating device.",
    "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "OSHA 1910.147 Control of Hazardous Energy",
      fieldTakeaway: "If the employee is exposed to unexpected energization or stored energy, isolate every energy type, lock, dissipate, and verify zero energy. Exceptions are narrow. Each person holds a personal lock. A spotter is not a... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "A capacitor bank remains after the disconnect is locked. Best verification before a technician lands a hand on the bus?",
    [
      "Assume discharge because the handle is down.",
      "A laminated shock poster at the cabinet.",
      "Test for absence of voltage with a proving unit, and apply a grounded dump if the procedure requires it.",
      "Wait five seconds and proceed.",
    ],
    2,
    "Stored electrical energy is its own isolation. Try-out and a proving test beat a timer and a poster.",
    "STEM",
    "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "OSHA 1910.147 Control of Hazardous Energy",
      fieldTakeaway: "If the employee is exposed to unexpected energization or stored energy, isolate every energy type, lock, dissipate, and verify zero energy. Exceptions are narrow. Each person holds a personal lock. A spotter is not a... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Unauthorized live inch amputates a fingertip at 22:00. CAPA is scheduled next month. OSHA notification?",
    [
      "Next month with CAPA.",
      "Within 24 hours of the amputation; LOTO failure does not pause 1904.",
      "Within 8 hours because it was mechanical.",
      "Within 7 days only.",
    ],
    1,
    "The 24-hour amputation clock is independent of the lockout investigation.",
    "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "OSHA 1910.147 Control of Hazardous Energy",
      fieldTakeaway: "If the employee is exposed to unexpected energization or stored energy, isolate every energy type, lock, dissipate, and verify zero energy. Exceptions are narrow. Each person holds a personal lock. A spotter is not a... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];

