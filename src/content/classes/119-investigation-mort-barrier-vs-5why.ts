import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D2.04";

export const classFields: ClassFields = {
  hook: "Five-Why already blamed the operator. Three safeguards were supposed to sit between the hazard and the harm. Escalate to barrier/MORT logic — do not add a sixth why.",
  hookOilGas: "A loss on a skid with a defeated trip, a bypassed alarm, and a missing blind. 5-Why landed on hurry-up culture. Map the barriers.",
  hookConstruction: "A dropped load with a missing exclusion zone, a failed tagline, and no rated hoist. 5-Why blamed the rigger. Map missing versus failed barriers.",
  rule: "Match the tool to the question. 5-Why for one chain; barrier/MORT for multi-control socio-technical failures. CAPA must restore a higher barrier, not a poster.",
  modelCaption: "Hazard → intended barriers → harm. Mark each barrier missing / failed / bypassed / effective. Side door: 5-Why drills one failed barrier after the map exists.",
  workedCase: "(1) Preserve scene and timeline. (2) Map three intended barriers: guard, interlock, procedure — two missing, one bypassed. (3) Use barrier/MORT, not a sixth why. CAPA specifies the guard and restores the interlock. Losing answer: retraining the injured person as the primary action.",
  trapsJson: traps(
    "Stopping 5-Why at operator error.",
    "Using FMEA as an incident reconstruction.",
    "CAPA that only retrains while a guard can still be specified.",
  ),
  contrastJson: contrast([
    { looksLike: "5-Why", actually: "Single causal chain drill" },
    { looksLike: "Barrier analysis", actually: "Missing vs failed vs bypassed controls" },
    { looksLike: "MORT-style", actually: "Control omission plus management-system omission" },
    { looksLike: "FTA", actually: "Deductive TOP-event combinations" },
    { looksLike: "FMEA", actually: "Design-stage failure modes — not reconstruction" },
    { looksLike: "Bowtie", actually: "Picture of threats, barriers, consequences" },
  ]),
  mustScoreJson: mustScore(
    "Match the investigation tool to the question.",
    "5-Why is for a single chain, not a multi-barrier event.",
    "Barrier analysis marks missing / failed / bypassed / effective.",
    "MORT-style asks management-system omissions, not only the last act.",
    "CAPA must restore or add a higher barrier.",
    "FMEA is not an incident reconstruction.",
    "Preserve evidence and timeline before tool fashion.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "five-why already blamed the operator", pick: "escalate to barrier/MORT" },
    { ifStem: "stem asks how combinations produced a TOP event", pick: "FTA, not 5-Why" },
    { ifStem: "design-stage failure modes", pick: "FMEA" },
    { ifStem: "several safeguards were supposed to protect", pick: "map barriers first" },
    { ifStem: "CAPA is retraining only", pick: "specify or restore a higher barrier" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" }
  ),
  brief: `Match tool to question. 5-Why is linear; barrier/MORT is multi-control. CAPA restores a higher barrier. Exam default: if two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Pick the investigation tool that matches the question you need answered. 5-Why is a linear drill for a single causal chain when the system is simple and barriers are obvious. Barrier analysis and MORT-style logic ask which controls were missing, failed, or never specified, and how management-system factors allowed that. Do not use 5-Why as a substitute for a multi-barrier, multi-actor event. Corrective action must restore or add a higher barrier, not a poster.

Field move
After a lost-time event with several failed safeguards, map intended barriers (design, engineered, human, supervisory) and mark missing versus failed versus bypassed. Use 5-Why only to drill one failed barrier once the map exists. MORT-style overlay keeps you from stopping at operator error. CAPA that retrains the injured person while a guard can still be specified is the losing answer. Preserve evidence, interview, and timeline first; tool choice comes after the question is clear.

Exam
If two answers work, take higher hierarchy / system / design. TOOL is the error code: FTA for how combinations of faults yield a TOP event; 5-Why for a single chain; barrier/MORT for control failures in a socio-technical system; FMEA for design-stage failure modes. A fashionable late FTA does not replace barrier mapping on an already-built incident. Last sentence may say five why already blamed the operator — then escalate the method, do not add a sixth why. Redraw the decision sequence for investigation tool choice before looking at options. Cost and convenience will sell a lower control that looks busy. Attractive wrong answers on investigation tool choice are usually competent lower-row programs, busy paperwork, or a funded contract. Read the last sentence for constraints that close a higher control, then take the best remaining system or design fix for investigation tool choice. When capital or authority remains, spend it on the highest remaining hardware or independent layer, then use administrative controls and PPE only for residual investigation tool choice risk. Do not let schedule pressure invert the investigation tool choice sequence. Verification is a test with an owner, not a calendar invite. If two answers both look professional, take higher hierarchy / system / design on investigation tool choice.
`,
  deep: `Domain 2 investigation items punish method fashion. 5-Why is fast and seductive. It works when one chain dominates and you already know the barrier that failed. It fails when several barriers were supposed to protect, when latent conditions sit in design and supervision, and when why five times still lands on a person. Barrier analysis lists the intended controls between hazard and harm, then scores each as present and effective, present and failed, or never provided. That map drives CAPA toward restoring or adding the highest failed or missing barrier.

MORT (Management Oversight and Risk Tree) and its cousins push one step further: they ask whether the barrier failure was a specific control omission or a management-system omission (resources, criteria, implementation, verification). You do not need to recite a clause number. You need to refuse an investigation that stops at the injured person’s last act. ICAM, TapRooT-style root-cause trees, and 5-Why can all be used well or badly. The exam key is fit-for-purpose: match the tool to the event complexity and to whether you are looking at a design-stage risk or an after-loss event.

Contrast with sister tools. FTA is deductive from a TOP event through AND/OR gates to basic events — excellent for quantifying or structuring how combinations produce a loss, weaker as the only human-factors method. ETA is inductive from an initiating event through success/failure of barriers. FMEA is a design-stage worksheet of failure modes, not an incident reconstruction. Bowtie is a picture of threats, barriers, and consequences. A safety case argues that risk is acceptable given the controls. None of these is a 5-Why pad.

Scoring favors evidence, owners, and hierarchy-smart CAPA. Preserve the scene, equipment, and data. Build a timeline. Map barriers. Then pick the tool that answers the remaining question. Retraining the operator is administrative around a missing guard. A new SOP around a defeated interlock is paperwork around engineering that was never restored.

If two answers work, take higher hierarchy / system / design. If the last sentence already ran 5-Why to complacency, the next move is barrier/MORT (or FTA if the stem asks how combinations produced the TOP), not a sixth why. If two answers add documents, take the one that also specifies or restores a higher control. Teach-back: name the event question, the matching tool, and the highest barrier the CAPA will change. Scoring on investigation tool choice favors evidence, owners, verification, and hierarchy-smart controls rather than binders that look complete. Last-sentence constraints may freeze a higher investigation tool choice control; then take the best remaining fix and verify it instead of wishing the freeze away. Shared assumptions and checkbox closures create false assurance on investigation tool choice; name the assumption and test it. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet. Hold the exam default on investigation tool choice: if two answers work, take higher hierarchy / system / design, and reject polished paperwork when a higher system or design fix remains. In teach-back, name the investigation tool choice decision, the highest open control, and the verification step without reciting fake clause trivia. Field skins change the equipment, not the logic: a skid, a site tent, and a paint line still fail the same investigation tool choice test. A funded lower-row contract does not freeze a higher investigation tool choice row the stem still leaves open. Design the next job so the investigation tool choice control is obvious, then still implement it, then still verify it. Do not restart investigation tool choice from the bottom because PPE and training are what the plant already knows how to buy. Units, clocks, and tool names are traps only when you skip the last sentence on investigation tool choice. Walk the investigation tool choice sequence until it is automatic, then apply the last sentence, then pick the higher remaining row.
`,
  cardFront: "Investigation lab — 5-Why or barrier/MORT?",
  cardBack: "Map barriers first. 5-Why drills one chain. MORT asks management omissions. CAPA = higher barrier, not a sixth why. Study only.",
  teachBackKey: "Pass if the sentence matches tool to question and says CAPA restores a higher barrier.",
  formulaSlug: null,
};

export const items: ClassItem[] = [
  exam(
    "CSP-11 D2.04",
    "A simple slip with one obvious missing barrier and no other actors. Best first tool?",
    [
      "5-Why on that single chain after the facts are clear.",
      "Full FTA with quantified cut sets as the only method.",
      "FMEA of a future design.",
      "Ignore investigation because TRIR is low.",
    ],
    0,
    "Core Rule: Simple single-chain events can use 5-Why. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Tool fit. Why Each Distractor Fails: 5-Why on that single chain after the facts are clear.: Correct: Linear drill fits a simple chain. | Full FTA with quantified cut sets as the only method.: Fails: Over-tooled. | FMEA of a future design.: Fails: Wrong time horizon. | Ignore investigation because TRIR is low.: Fails: Rate is not the investigation.",
    "TOOL",
    "Foundation",
    [
      "Correct: Linear drill fits a simple chain.",
      "Fails: Over-tooled.",
      "Fails: Wrong time horizon.",
      "Fails: Rate is not the investigation.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Match the tool to the question. 5-Why for one chain; barrier/MORT for multi-control socio-technical failures. CAPA must restore a higher barrier, not a poster. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.04",
    "Lost-time event: guard missing, interlock bypassed, procedure silent. 5-Why already concluded complacency. Best next method?",
    [
      "Add a sixth why to the same chain.",
      "Barrier/MORT-style map of missing, failed, and bypassed controls, including management-system omissions.",
      "Close the file — complacency is a root cause.",
      "Run FMEA on the injured person’s gloves.",
    ],
    1,
    "Core Rule: Escalate when 5-Why lands on a person. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Barrier vs 5-Why. Why Each Distractor Fails: Add a sixth why to the same chain.: Fails: More why is not more method. | Barrier/MORT-style map of missing, failed, and bypassed controls, including management-system omissions.: Correct: Multi-barrier socio-technical event. | Close the file — complacency is a root cause.: Fails: Person is not the system. | Run FMEA on the injured person’s gloves.: Fails: FMEA is not reconstruction.",
    "TOOL",
    "Exam",
    [
      "Fails: More why is not more method.",
      "Correct: Multi-barrier socio-technical event.",
      "Fails: Person is not the system.",
      "Fails: FMEA is not reconstruction.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Match the tool to the question. 5-Why for one chain; barrier/MORT for multi-control socio-technical failures. CAPA must restore a higher barrier, not a poster. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.04",
    "Stem asks how combinations of a failed trip AND a failed relief produced overpressure. Best tool?",
    [
      "5-Why only.",
      "Kirkpatrick Level 1 smile sheet.",
      "Fault tree from the TOP event with AND/OR structure.",
      "SPCC freeboard calc.",
    ],
    2,
    "Core Rule: Combinations of faults → FTA. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: FTA vs 5-Why. Why Each Distractor Fails: 5-Why only.: Fails: Linear chain misses combinations. | Kirkpatrick Level 1 smile sheet.: Fails: Wrong domain. | Fault tree from the TOP event with AND/OR structure.: Correct: Deductive TOP-event logic. | SPCC freeboard calc.: Fails: Wrong domain.",
    "TOOL",
    "Exam",
    [
      "Fails: Linear chain misses combinations.",
      "Fails: Wrong domain.",
      "Correct: Deductive TOP-event logic.",
      "Fails: Wrong domain.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Match the tool to the question. 5-Why for one chain; barrier/MORT for multi-control socio-technical failures. CAPA must restore a higher barrier, not a poster. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.04",
    "Which CAPA best matches hierarchy after a missing guard is found?",
    [
      "Retrain the injured person as the primary action.",
      "A new poster.",
      "Increase insurance.",
      "Specify and install the guard; procedure and briefing only for residual.",
    ],
    3,
    "Core Rule: CAPA restores the higher barrier. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Hierarchy in CAPA. Why Each Distractor Fails: Retrain the injured person as the primary action.: Fails: Admin around missing hardware. | A new poster.: Fails: Admin. | Increase insurance.: Fails: Transfer. | Specify and install the guard; procedure and briefing only for residual.: Correct: Engineering first.",
    "HIER",
    "Exam",
    [
      "Fails: Admin around missing hardware.",
      "Fails: Admin.",
      "Fails: Transfer.",
      "Correct: Engineering first.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Match the tool to the question. 5-Why for one chain; barrier/MORT for multi-control socio-technical failures. CAPA must restore a higher barrier, not a poster. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.04",
    "FMEA is offered as the investigation of a past injury. Best critique?",
    [
      "FMEA is a design-stage failure-mode worksheet, not an incident reconstruction.",
      "FMEA always replaces barrier analysis after a loss.",
      "FMEA is a legal PEL.",
      "FMEA is the same as 5-Why.",
    ],
    0,
    "Core Rule: Wrong time horizon for FMEA. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Tool contrast. Why Each Distractor Fails: FMEA is a design-stage failure-mode worksheet, not an incident reconstruction.: Correct: Design-stage vs after-loss. | FMEA always replaces barrier analysis after a loss.: Fails: It does not replace. | FMEA is a legal PEL.: Fails: Not a PEL. | FMEA is the same as 5-Why.: Fails: Different tools.",
    "TOOL",
    "Foundation",
    [
      "Correct: Design-stage vs after-loss.",
      "Fails: It does not replace.",
      "Fails: Not a PEL.",
      "Fails: Different tools.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Match the tool to the question. 5-Why for one chain; barrier/MORT for multi-control socio-technical failures. CAPA must restore a higher barrier, not a poster. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.04",
    "You are the CSP reviewing a live decision at a pharma suite changeover. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Barrier marked present but defeated. Best label.",
    [
      "Never provided, so only training is needed.",
      "Failed or bypassed — restore independence, do not only rewrite the SOP.",
      "Effective — because it exists on paper.",
      "Irrelevant because TRIR is average.",
    ],
    1,
    "Core Rule: Present-but-defeated is failed/bypassed. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Barrier scoring. Why Each Distractor Fails: Never provided, so only training is needed.: Fails: It was provided and defeated. | Failed or bypassed — restore independence, do not only rewrite the SOP.: Correct: Restore the barrier. | Effective — because it exists on paper.: Fails: Paper ≠ effective. | Irrelevant because TRIR is average.: Fails: Rate is not the barrier.",
    "STEM",
    "Exam",
    [
      "Fails: It was provided and defeated.",
      "Correct: Restore the barrier.",
      "Fails: Paper ≠ effective.",
      "Fails: Rate is not the barrier.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Match the tool to the question. 5-Why for one chain; barrier/MORT for multi-control socio-technical failures. CAPA must restore a higher barrier, not a poster. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.04",
    "Last sentence: five-why blamed hurry-up culture. Three engineered safeguards were never specified. Best move?",
    [
      "Stop at culture-as-root.",
      "Add only a banner about rushing.",
      "Treat culture as a contributor; specify the missing engineered barriers as primary CAPA.",
      "Wait for the next FTA software purchase.",
    ],
    2,
    "Core Rule: Culture talk does not replace missing hardware. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Last-sentence CAPA. Why Each Distractor Fails: Stop at culture-as-root.: Fails: Stops at a person-system slogan. | Add only a banner about rushing.: Fails: Admin. | Treat culture as a contributor; specify the missing engineered barriers as primary CAPA.: Correct: Specify missing engineering. | Wait for the next FTA software purchase.: Fails: Tool fashion later.",
    "HIER",
    "Expert",
    [
      "Fails: Stops at a person-system slogan.",
      "Fails: Admin.",
      "Correct: Specify missing engineering.",
      "Fails: Tool fashion later.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Match the tool to the question. 5-Why for one chain; barrier/MORT for multi-control socio-technical failures. CAPA must restore a higher barrier, not a poster. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.04",
    "You are the CSP reviewing a live decision at a grain elevator maintenance day. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: MORT-style question that 5-Why often skips.",
    [
      "What color was the poster?",
      "What is the mixture LFL?",
      "What is the NIOSH exchange rate?",
      "Were resources, criteria, implementation, and verification of the barrier adequate?",
    ],
    3,
    "Core Rule: Management-system overlay. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: MORT teaching. Why Each Distractor Fails: What color was the poster?: Fails: Trivia. | What is the mixture LFL?: Fails: Wrong class. | What is the NIOSH exchange rate?: Fails: Wrong class. | Were resources, criteria, implementation, and verification of the barrier adequate?: Correct: Oversight and risk-tree overlay.",
    "TOOL",
    "Exam",
    [
      "Fails: Trivia.",
      "Fails: Wrong class.",
      "Fails: Wrong class.",
      "Correct: Oversight and risk-tree overlay.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Match the tool to the question. 5-Why for one chain; barrier/MORT for multi-control socio-technical failures. CAPA must restore a higher barrier, not a poster. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.04",
    "You are the CSP reviewing a live decision at a hospital utility plant shutdown. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Preserve-first step before tool choice.",
    [
      "Secure scene, equipment, data, and a timeline.",
      "Pick FTA because it is fashionable.",
      "Delete DCS trends to save disk.",
      "Interview only after CAPA is written.",
    ],
    0,
    "Core Rule: Evidence before fashion. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Investigation sequence. Why Each Distractor Fails: Secure scene, equipment, data, and a timeline.: Correct: Preserve then analyze. | Pick FTA because it is fashionable.: Fails: Fashion. | Delete DCS trends to save disk.: Fails: Destroys evidence. | Interview only after CAPA is written.: Fails: Backwards.",
    "STEM",
    "Exam",
    [
      "Correct: Preserve then analyze.",
      "Fails: Fashion.",
      "Fails: Destroys evidence.",
      "Fails: Backwards.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Match the tool to the question. 5-Why for one chain; barrier/MORT for multi-control socio-technical failures. CAPA must restore a higher barrier, not a poster. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.04",
    "You are the CSP reviewing a live decision at a food packaging SKU change. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: ETA is the better cousin when the stem is:.",
    [
      "How can overpressure occur from combinations of faults.",
      "Given a leak as initiator, what happens if detection, isolation, and deluge succeed or fail.",
      "Design-stage RPN ranking only.",
      "Adult-learning style inventory.",
    ],
    1,
    "Core Rule: ETA is inductive from an initiator. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: ETA vs FTA. Why Each Distractor Fails: How can overpressure occur from combinations of faults.: Fails: That is FTA. | Given a leak as initiator, what happens if detection, isolation, and deluge succeed or fail.: Correct: Initiator plus barrier branches. | Design-stage RPN ranking only.: Fails: That is FMEA. | Adult-learning style inventory.: Fails: Wrong domain.",
    "TOOL",
    "Exam",
    [
      "Fails: That is FTA.",
      "Correct: Initiator plus barrier branches.",
      "Fails: That is FMEA.",
      "Fails: Wrong domain.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Match the tool to the question. 5-Why for one chain; barrier/MORT for multi-control socio-technical failures. CAPA must restore a higher barrier, not a poster. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.04",
    "Two answers: a sixth why ending in try harder, or a barrier map that specifies a guard. Pick:",
    [
      "The sixth why.",
      "A new insurance rider.",
      "The barrier map that specifies the guard.",
      "A smile sheet.",
    ],
    2,
    "Core Rule: If two answers work, take higher hierarchy / system / design. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Exam default. Why Each Distractor Fails: The sixth why.: Fails: Person-as-root. | A new insurance rider.: Fails: Transfer. | The barrier map that specifies the guard.: Correct: Higher barrier. | A smile sheet.: Fails: Wrong tool.",
    "HIER",
    "Exam",
    [
      "Fails: Person-as-root.",
      "Fails: Transfer.",
      "Correct: Higher barrier.",
      "Fails: Wrong tool.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Match the tool to the question. 5-Why for one chain; barrier/MORT for multi-control socio-technical failures. CAPA must restore a higher barrier, not a poster. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.04",
    "ICAM or similar systemic methods are closest to which teaching point?",
    [
      "Replace all engineering with culture talks.",
      "Treat 5-Why as illegal.",
      "Skip evidence preservation.",
      "Look beyond the last act to conditions, organizational factors, and missing defenses.",
    ],
    3,
    "Core Rule: Systemic methods still require barriers and evidence. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Systemic investigation. Why Each Distractor Fails: Replace all engineering with culture talks.: Fails: Does not delete engineering. | Treat 5-Why as illegal.: Fails: 5-Why can still fit simple chains. | Skip evidence preservation.: Fails: Evidence still first. | Look beyond the last act to conditions, organizational factors, and missing defenses.: Correct: Beyond the last act.",
    "TOOL",
    "Expert",
    [
      "Fails: Does not delete engineering.",
      "Fails: 5-Why can still fit simple chains.",
      "Fails: Evidence still first.",
      "Correct: Beyond the last act.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Match the tool to the question. 5-Why for one chain; barrier/MORT for multi-control socio-technical failures. CAPA must restore a higher barrier, not a poster. Verify the critical step before accepting a lower-tier control.",
    }
  ),
];

