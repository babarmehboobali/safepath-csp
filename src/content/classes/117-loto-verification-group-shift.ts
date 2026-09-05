import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D1.03";

export const classFields: ClassFields = {
  hook: "A mixer jam. Production wants a quick inch with the guard open, a spotter, and one shop lock for the whole crew because shift change is in twenty minutes. The question is whether anyone is still exposed to unexpected energy.",
  hookOilGas: "A pump jam on a process skid. Production wants a live inch, a radio watch, and one operations lock left on the hasp for nights. Ask whether residual pressure, rotation, or gravity still reaches a person.",
  hookConstruction: "A site batch-plant mixer jam. The superintendent wants a spotter, a muted curtain, and one gang lock overnight. Ask whether exposure still exists and who holds personal control.",
  rule: "Exposure requires full LOTO: isolate every energy, personal lock, dissipate, verify by try-out. Group and shift work multiply personal locks; they do not replace them. A spotter is not a lock.",
  modelCaption: "Energy types in a row. Sequence: Shutdown → Isolate → Lock/Tag → Dissipate → Verify. Side loop: group box and shift transfer keep personal locks continuous.",
  workedCase: "(1) Guard open on a mixer jam is service with exposure — not minor servicing. (2) Isolate electrical and residual mechanical/gravity; each craft applies a personal lock to the group box. (3) Dump, try the start, then clear. Incoming shift applies locks before outgoing locks come off. Losing answer: a spotter during a live inch, or one shop lock left overnight.",
  trapsJson: traps(
    "Calling a spotter group LOTO.",
    "Inch-mode with the guard open as minor servicing.",
    "One shop lock for the whole crew or overnight.",
  ),
  contrastJson: contrast([
    { looksLike: "Spotter during a live inch", actually: "Administrative — not isolation" },
    { looksLike: "Personal lock plus try-out", actually: "LOTO sequence" },
    { looksLike: "One departmental lock overnight", actually: "Not each-person control" },
    { looksLike: "Cord-and-plug in exclusive control", actually: "Narrow exception — not for hard-wired mixers" },
    { looksLike: "Group box with each lock", actually: "Group LOTO done right" },
    { looksLike: "Muted light curtain", actually: "Exposure — exception closed" },
  ]),
  mustScoreJson: mustScore(
    "Service with exposure requires full LOTO.",
    "Isolate every energy type, not only electrical.",
    "Each person applies a personal lock; group box multiplies locks.",
    "Verify zero energy by try-out; a smooth handle is not a test.",
    "Shift change transfers personal locks before outgoing locks come off.",
    "Cord-and-plug and minor servicing are narrow exceptions.",
    "A spotter is not an energy-isolating device.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "hands are in the machine or the guard is open", pick: "require full LOTO" },
    { ifStem: "multiple workers share one isolation point", pick: "each applies a personal lock" },
    { ifStem: "the stem offers inch-mode or a spotter", pick: "reject the exception" },
    { ifStem: "shift change is in the last sentence", pick: "incoming locks on before outgoing locks off" },
    { ifStem: "only the breaker is locked", pick: "look for pneumatic, thermal, or gravity" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" }
  ),
  brief: `Exposure equals full LOTO. Personal locks, group box, shift transfer, try-out. Spotters and shop locks fail. Design isolation points. Exam default: if two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
If a person is exposed to unexpected energization or stored energy during service, isolate every energy type, apply a personal lock, dissipate or block, and verify zero energy by try-out. Group LOTO means each person holds a personal lock on a hasp or group box. Shift change transfers personal locks; it does not leave a shop lock overnight. A spotter, radio check-in, or muted safeguard is not isolation. Exceptions (cord-and-plug exclusive control, true minor servicing with the safeguard still protecting) are narrow.

Field move
A mixer jam with the guard open is service with exposure. Do not approve a live inch with a spotter. Shut down, isolate electrical plus residual mechanical or gravity, apply the personal lock, dump, try the start, then clear. For multi-craft work, use a group box so each lock holds the isolation. Incoming shift applies locks before outgoing locks come off. Contractors verify host isolation and still apply a personal lock. Design lockable valves, pin points, and bleed valves in sight of the work. A 120 V drill with the plug in exclusive control can meet the narrow exception; a hard-wired mixer cannot borrow it.

Exam
If two answers work, take higher hierarchy / system / design. Hardware that makes isolation possible beats a better tag. Frequency of jams does not create the minor-servicing exception when the safeguard is muted. Training is not an energy-isolating device. A tag with three names is not three locks. Verification is a test: attempt a normal start, prove absence of voltage, block gravity. When the last sentence is a muted curtain, reject the exception. When it is exclusive control of a plug, the exception can hold for that tool only. After the breaker is locked, ask what else can still move: air, oil, steam, gravity, charge. Oil-and-gas skins hide residual pressure in blinds and pig receivers; construction skins hide gravity in suspended loads; manufacturing skins hide stored rotation in flywheels. Walk shutdown, isolate, lock, dissipate, verify every time, then service, then each person removes only their own lock. A missing energy type is a missing isolation even when the electrical disconnect looks perfect.
`,
  deep: `Class 5 taught the basic LOTO sequence. This lab is verification, group control, and shift transfer — the places the exam hides remaining exposure. OSHA’s 1910.147 logic is exposure-driven: if unexpected start-up or stored energy can still reach a person, the exception is closed. Minor servicing assumes the safeguard still protects and the task is routine, repetitive, and integral to production. Muting a light curtain to reach a nip is exposure. A spotter is administrative theater around live energy. Cut-resistant sleeves do not replace isolation.

Group LOTO is personal control multiplied, not a shared shop key. A hasp or lockbox lets each worker’s lock hold the isolation. Each person removes only their own lock to leave. One departmental lock with the key in a supervisor’s pocket is not each-employee protection. A tag listing three names is not three locks. Radio check-in is not a lock. Contractors still verify the host isolation and apply a personal lock to the group device. The host coordinates energy sources; the contractor does not inherit a verbal all-clear.

Shift change is where unexpected energization is designed in. Continuity of personal control means incoming workers apply their locks before day-shift locks come off. Leaving a shop lock and texting the night supervisor is not transfer. Removing all locks so the night crew can start fresh is an unexpected-start setup. Document the transfer. Walk down isolation points. Try-out again after transfer if the procedure requires it — a smooth handle is not a test.

Energy is plural. Gravity will drop the ram after hydraulics dump. Pneumatic will cycle the cylinder after the breaker opens. Thermal will steam the jacket. Capacitors will bite after the disconnect opens. A complete isolation lists them; a complete verification tests them. Try-out finds the wrong breaker. Checking absence of voltage on the circuit that was actually isolated, attempting a normal start after lock application, and blocking the ram against gravity are verification. A sign that says ram may drop is admin around a falling ram. Specify a mechanical block as part of isolation.

Design still sits above paper. Locate disconnects in sight of the work. Provide lockable valves, trapped-key interlocks, pin points, and bleed valves that themselves lock. Trapped-key makes LOTO possible; it does not replace personal locks during service. Skipping lockable hardware and training harder is administrative control around isolation that was never installed.

If two answers work, take higher hierarchy / system / design. When two answers isolate, take the one that also verifies. When two answers verify, take the one that also provides each-person control. If the last sentence is a muted curtain and a jam every ten minutes, reject the exception. If it is a cord-and-plug tool in exclusive control, keep the exception on that tool only. Teach-back: name every energy, name personal lock, name try-out, name how shift and contractors keep personal control. Do not import the drill-and-plug exception onto a hard-wired mixer because someone is in a hurry. QR codes on non-lockable valves are not locks, and a higher liability policy is not isolation. If exposure exists, the exception is closed and the shop lock is closed. Make isolation obvious in the next design, then still lock it, then still prove zero energy before a hand enters the zone. Oil-and-gas residual pressure, construction suspended loads, and manufacturing stored rotation all fail the same test: if it can still move, it is not verified. Other employers need coordination on who owns the isolation, how the group box works, and how shift change is documented — a tag without a lock is still not a lock. Removing all locks so the night crew can start fresh is how unexpected energization is scheduled into the job. When capital remains, spend it on lockable isolation hardware in sight of the work, then still apply personal locks and try-out rather than a prettier tag. Walk the sequence until it is automatic: shutdown, isolate, lock, dump, verify, then service.
`,
  cardFront: "LOTO lab — group, shift, verify?",
  cardBack: "Each person, personal lock, try-out. Shift: incoming on before outgoing off. Attractive wrong: spotter, shop lock, muted curtain as minor servicing. Study only.",
  teachBackKey: "Pass if the sentence includes isolate all energy / personal lock / try-out, and names group-box and shift-transfer rules.",
  formulaSlug: null,
};

export const items: ClassItem[] = [
  exam(
    "CSP-11 D1.03",
    "You are the CSP reviewing a live decision at a semiconductor tool install. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: What is the minimum verification step after locks are applied.",
    [
      "Try a normal start / prove zero energy on the isolated circuit.",
      "Read the procedure title.",
      "Ask a spotter to watch.",
      "Wait thirty seconds.",
    ],
    0,
    "Core Rule: Verify is a test, not a pause. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: 1910.147-style sequence. Why Each Distractor Fails: Try a normal start / prove zero energy on the isolated circuit.: Correct: try-out / prove zero. | Read the procedure title.: Paper is not a test. | Ask a spotter to watch.: A spotter is not verification. | Wait thirty seconds.: Time is not a test.",
    "STEM",
    "Foundation",
    [
      "Correct: try-out / prove zero.",
      "Paper is not a test.",
      "A spotter is not verification.",
      "Time is not a test.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Exposure requires full LOTO: isolate every energy, personal lock, dissipate, verify by try-out. Group and shift work multiply personal locks; they do not replace them. A spotter is not a lock. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.03",
    "Three crafts will clear a jammed mixer with the guard open. Isolation is one breaker. Best group method?",
    [
      "One shop lock; supervisor keeps the key.",
      "A hasp or group box so each person applies a personal lock.",
      "A tag with three names.",
      "Radio check-in every five minutes.",
    ],
    1,
    "Core Rule: Group LOTO multiplies personal locks. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Group lockout teaching. Why Each Distractor Fails: One shop lock; supervisor keeps the key.: Not each-person control. | A hasp or group box so each person applies a personal lock.: Correct: each lock holds isolation. | A tag with three names.: A tag is not three locks. | Radio check-in every five minutes.: Admin around live energy if isolation is not personally held.",
    "STEM",
    "Exam",
    [
      "Not each-person control.",
      "Correct: each lock holds isolation.",
      "A tag is not three locks.",
      "Admin around live energy if isolation is not personally held.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Exposure requires full LOTO: isolate every energy, personal lock, dissipate, verify by try-out. Group and shift work multiply personal locks; they do not replace them. A spotter is not a lock. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.03",
    "Day shift is leaving in twenty minutes. Night shift will continue the same isolation. Correct transfer?",
    [
      "Leave the shop lock and text the night supervisor.",
      "Remove all locks so night can start fresh.",
      "Incoming workers apply their locks before outgoing locks come off.",
      "A verbal all-clear at the gate.",
    ],
    2,
    "Core Rule: Personal control must be continuous across the shift boundary. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Shift transfer. Why Each Distractor Fails: Leave the shop lock and text the night supervisor.: Shop lock is not transfer. | Remove all locks so night can start fresh.: Creates unexpected energization. | Incoming workers apply their locks before outgoing locks come off.: Correct: incoming on first. | A verbal all-clear at the gate.: Verbal is not a lock.",
    "TIME",
    "Exam",
    [
      "Shop lock is not transfer.",
      "Creates unexpected energization.",
      "Correct: incoming on first.",
      "Verbal is not a lock.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Exposure requires full LOTO: isolate every energy, personal lock, dissipate, verify by try-out. Group and shift work multiply personal locks; they do not replace them. A spotter is not a lock. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.03",
    "Production wants a live inch with a muted light curtain and a designated spotter because the jam happens every ten minutes. Best decision?",
    [
      "Approve as minor servicing — frequency creates the exception.",
      "Reject: muted safeguard plus exposure is full LOTO.",
      "Approve if the spotter is a supervisor.",
      "Approve with cut-resistant sleeves.",
    ],
    1,
    "Core Rule: Frequency does not create the exception when the safeguard is muted. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Minor servicing limits. Why Each Distractor Fails: Approve as minor servicing — frequency creates the exception.: Frequency is not a magic exception. | Reject: muted safeguard plus exposure is full LOTO.: Correct: exposure closed the exception. | Approve if the spotter is a supervisor.: Rank is not isolation. | Approve with cut-resistant sleeves.: PPE is not isolation.",
    "HIER",
    "Exam",
    [
      "Frequency is not a magic exception.",
      "Correct: exposure closed the exception.",
      "Rank is not isolation.",
      "PPE is not isolation.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Exposure requires full LOTO: isolate every energy, personal lock, dissipate, verify by try-out. Group and shift work multiply personal locks; they do not replace them. A spotter is not a lock. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.03",
    "A 120 V cord-and-plug drill is in exclusive control of the user. A hard-wired mixer jam is on the next bench. Which statement is true?",
    [
      "Both may use the cord-and-plug exception.",
      "The drill may meet the narrow exception; the mixer may not borrow it.",
      "Neither ever requires LOTO.",
      "The mixer exception is broader because it is production equipment.",
    ],
    1,
    "Core Rule: Do not import the plug exception onto hard-wired equipment. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Exception scope. Why Each Distractor Fails: Both may use the cord-and-plug exception.: Mixer is not cord-and-plug exclusive control. | The drill may meet the narrow exception; the mixer may not borrow it.: Correct: exception stays on the drill. | Neither ever requires LOTO.: Exposure still exists on the mixer. | The mixer exception is broader because it is production equipment.: Production status does not widen the exception.",
    "STEM",
    "Exam",
    [
      "Mixer is not cord-and-plug exclusive control.",
      "Correct: exception stays on the drill.",
      "Exposure still exists on the mixer.",
      "Production status does not widen the exception.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Exposure requires full LOTO: isolate every energy, personal lock, dissipate, verify by try-out. Group and shift work multiply personal locks; they do not replace them. A spotter is not a lock. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.03",
    "Breaker locked. Residual air can still cycle a cylinder into the work zone. Best next isolation?",
    [
      "A sign: cylinder may move.",
      "Lockable dump/bleed and a block if gravity or stored air remains, then verify.",
      "A spotter at the cylinder.",
      "Rely on the locked breaker as covering all energy.",
    ],
    1,
    "Core Rule: Energy is plural; electrical isolation is not enough. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Stored energy. Why Each Distractor Fails: A sign: cylinder may move.: Admin around stored energy. | Lockable dump/bleed and a block if gravity or stored air remains, then verify.: Correct: dump/block/verify. | A spotter at the cylinder.: Spotter is not isolation. | Rely on the locked breaker as covering all energy.: Missing energy type.",
    "HIER",
    "Exam",
    [
      "Admin around stored energy.",
      "Correct: dump/block/verify.",
      "Spotter is not isolation.",
      "Missing energy type.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Exposure requires full LOTO: isolate every energy, personal lock, dissipate, verify by try-out. Group and shift work multiply personal locks; they do not replace them. A spotter is not a lock. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.03",
    "Host isolated a skid and applied a group lock. A contractor will enter. Best contractor action?",
    [
      "Trust the host verbal all-clear and start.",
      "Verify isolation and apply a personal lock to the group device.",
      "Apply a tag only.",
      "Use the host supervisor’s key as needed.",
    ],
    1,
    "Core Rule: Contractors still verify and personally lock. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Multi-employer LOTO. Why Each Distractor Fails: Trust the host verbal all-clear and start.: Verbal is not a lock. | Verify isolation and apply a personal lock to the group device.: Correct: verify + personal lock. | Apply a tag only.: Tag ≠ lock. | Use the host supervisor’s key as needed.: Shared key destroys personal control.",
    "STEM",
    "Exam",
    [
      "Verbal is not a lock.",
      "Correct: verify + personal lock.",
      "Tag ≠ lock.",
      "Shared key destroys personal control.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Exposure requires full LOTO: isolate every energy, personal lock, dissipate, verify by try-out. Group and shift work multiply personal locks; they do not replace them. A spotter is not a lock. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.03",
    "Which option is higher hierarchy / system / design when isolation is currently a non-lockable valve plus a tag?",
    [
      "A better tag color.",
      "More LOTO training hours.",
      "Install a lockable valve / trapped-key isolation point, then still lock and verify.",
      "A higher liability limit.",
    ],
    2,
    "Core Rule: Design isolation hardware, then still do LOTO. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: PtD + LOTO. Why Each Distractor Fails: A better tag color.: Paper. | More LOTO training hours.: Admin around missing hardware. | Install a lockable valve / trapped-key isolation point, then still lock and verify.: Correct: hardware then LOTO. | A higher liability limit.: Insurance is not isolation.",
    "HIER",
    "Expert",
    [
      "Paper.",
      "Admin around missing hardware.",
      "Correct: hardware then LOTO.",
      "Insurance is not isolation.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Exposure requires full LOTO: isolate every energy, personal lock, dissipate, verify by try-out. Group and shift work multiply personal locks; they do not replace them. A spotter is not a lock. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.03",
    "Try-out is skipped because the disconnect handle moved smoothly. The miss is:",
    [
      "Acceptable if the handle felt firm.",
      "A verification failure — try the start / prove zero energy.",
      "Covered by a toolbox talk.",
      "Covered by PPE.",
    ],
    1,
    "Core Rule: Smooth handle is not a test. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Verification. Why Each Distractor Fails: Acceptable if the handle felt firm.: Feel is not proof. | A verification failure — try the start / prove zero energy.: Correct: verification is a test. | Covered by a toolbox talk.: Talk is not try-out. | Covered by PPE.: PPE is not try-out.",
    "STEM",
    "Foundation",
    [
      "Feel is not proof.",
      "Correct: verification is a test.",
      "Talk is not try-out.",
      "PPE is not try-out.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Exposure requires full LOTO: isolate every energy, personal lock, dissipate, verify by try-out. Group and shift work multiply personal locks; they do not replace them. A spotter is not a lock. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.03",
    "Last sentence: the light curtain is muted and a hand is in the nip. Best label?",
    [
      "Minor servicing exception open.",
      "Production mode equivalent to LOTO.",
      "Service with exposure — full LOTO required.",
      "Spotter-equivalent isolation.",
    ],
    2,
    "Core Rule: Muted safeguard + hand in nip = exposure. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Last-sentence exposure test. Why Each Distractor Fails: Minor servicing exception open.: Exception closed. | Production mode equivalent to LOTO.: Production mode is not isolation. | Service with exposure — full LOTO required.: Correct. | Spotter-equivalent isolation.: Spotter ≠ isolation.",
    "STEM",
    "Exam",
    [
      "Exception closed.",
      "Production mode is not isolation.",
      "Correct.",
      "Spotter ≠ isolation.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Exposure requires full LOTO: isolate every energy, personal lock, dissipate, verify by try-out. Group and shift work multiply personal locks; they do not replace them. A spotter is not a lock. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.03",
    "You are the CSP reviewing a live decision at a hospital utility plant shutdown. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: A tag with three names hangs on a single shop lock. This is:.",
    [
      "Valid group LOTO.",
      "Each-person control.",
      "Not three locks — personal control is missing.",
      "Equivalent to a group box.",
    ],
    2,
    "Core Rule: Names on a tag are not personal locks. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Group LOTO look-alike. Why Each Distractor Fails: Valid group LOTO.: Invalid. | Each-person control.: Missing. | Not three locks — personal control is missing.: Correct. | Equivalent to a group box.: A box still needs each lock.",
    "STEM",
    "Exam",
    [
      "Invalid.",
      "Missing.",
      "Correct.",
      "A box still needs each lock.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Exposure requires full LOTO: isolate every energy, personal lock, dissipate, verify by try-out. Group and shift work multiply personal locks; they do not replace them. A spotter is not a lock. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.03",
    "After hydraulics are dumped, a ram can still fall. Best additional control?",
    [
      "A sign on the ram.",
      "A watchstander.",
      "Earmuffs.",
      "A mechanical block specified as part of isolation, then verify.",
    ],
    3,
    "Core Rule: Gravity is an energy type; block it. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Stored gravity. Why Each Distractor Fails: A sign on the ram.: Admin around gravity. | A watchstander.: Admin around gravity. | Earmuffs.: Irrelevant PPE. | A mechanical block specified as part of isolation, then verify.: Correct: block + verify.",
    "HIER",
    "Expert",
    [
      "Admin around gravity.",
      "Admin around gravity.",
      "Irrelevant PPE.",
      "Correct: block + verify.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Exposure requires full LOTO: isolate every energy, personal lock, dissipate, verify by try-out. Group and shift work multiply personal locks; they do not replace them. A spotter is not a lock. Verify the critical step before accepting a lower-tier control.",
    }
  ),
];

