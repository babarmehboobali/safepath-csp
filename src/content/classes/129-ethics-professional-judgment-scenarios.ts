import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D2.12";

export const classFields: ClassFields = {
  hook: "A VP wants your name on a PSSR you did not walk and a trip left in bypass for the quarter. Production bonus depends on it. Duty is truth and the independent layer — not the bonus.",
  hookOilGas: "Overnight bypass of a high-level trip for a tanker window. You are asked to backdate MoC. Refuse, restore the trip, document.",
  hookConstruction: "Superintendent wants a false excavation inspection so pouring can start. Refuse, protect the crew, document.",
  rule: "Tell the truth, stay inside competence, protect people, refuse to sign a lie. Silence for a bonus is not professional judgment. Keep higher controls in service.",
  modelCaption: "Duty: workers/public + truth + competence. Pressure arrows: production, bonus, client. Output: refuse, escalate, document, keep the higher control.",
  workedCase: "(1) Trip in bypass; PSSR unsigned; bonus at risk. (2) Refuse to sign; restore or keep the trip; escalate with facts. (3) Do not backdate. Losing answer: sign, stay silent, recommend extra PPE only.",
  trapsJson: traps(
    "Signing what you did not verify.",
    "Treating a bonus as a duty.",
    "Recommending only PPE while an independent layer is still open.",
  ),
  contrastJson: contrast([
    { looksLike: "Duty", actually: "Workers/public, truth, competence" },
    { looksLike: "Pressure", actually: "Production, bonus, client, fear" },
    { looksLike: "Competence limit", actually: "Get qualified help — do not guess" },
    { looksLike: "Conflict of interest", actually: "Disclose and recuse" },
    { looksLike: "Confidentiality", actually: "Not a cloak for imminent harm" },
    { looksLike: "Stamp/signature", actually: "Means you actually reviewed it" },
  ]),
  mustScoreJson: mustScore(
    "People and truthful risk communication outrank convenience and gain.",
    "Do not sign what you did not verify.",
    "Do not practice beyond competence.",
    "Disclose conflicts; recuse.",
    "Escalate concealment of hazards; document facts.",
    "Confidentiality is not cover-up of imminent harm.",
    "Recommending only PPE while engineering is open is an ethics+HIER miss.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "asked to sign unverified work", pick: "refuse" },
    { ifStem: "beyond competence", pick: "obtain qualified help" },
    { ifStem: "bonus for concealment", pick: "duty over bonus; escalate" },
    { ifStem: "independent layer still open", pick: "keep or install it — not PPE-only advice" },
    { ifStem: "records requested destroyed", pick: "preserve; do not destroy" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" }
  ),
  brief: `Truth, competence, people first. Refuse to sign a lie. Keep higher controls. Exam default: if two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Professional judgment puts people and truthful risk communication above convenience, production, and personal gain. Do not conceal known hazards, falsify records, practice beyond competence, or accept a brief that requires you to sign a lie. If a higher control is still open, recommending only PPE or silence is both a HIER miss and an ethics miss. When in conflict, protect workers and the public, tell the truth, and document.

Field move
Scenarios: leadership wants an unsigned PSSR, a defeated trip, a hidden OSHA log, or your stamp on a design you did not review. Refuse the lie. Escalate through the duty path. Withdraw if the organization requires misconduct. Competence limits: do not invent a structural calc you cannot defend. Conflicts of interest: disclose and recuse. Confidentiality is not a cloak for covering up imminent harm.

Exam
If two answers work, take higher hierarchy / system / design. Last sentence may freeze ‘job at risk if you speak.’ The exam still wants the ethical duty, not the career-preserving silence. If two answers both communicate, take the one that also keeps the higher control in service. Redraw the decision sequence for ethics and professional judgment before looking at options. Cost and convenience will sell a lower control that looks busy. Attractive wrong answers on ethics and professional judgment are usually competent lower-row programs, busy paperwork, or a funded contract. Read the last sentence for constraints that close a higher control, then take the best remaining system or design fix for ethics and professional judgment. When capital or authority remains, spend it on the highest remaining hardware or independent layer, then use administrative controls and PPE only for residual ethics and professional judgment risk. Do not let schedule pressure invert the ethics and professional judgment sequence. Verification is a test with an owner, not a calendar invite. If two answers both look professional, take higher hierarchy / system / design on ethics and professional judgment. Teach-back restates the ethics and professional judgment rule, the sequence, and the verification step in one spoken sentence. Contrast pairs keep ethics and professional judgment labels honest when a look-alike program uses the right vocabulary on the wrong row.
`,
  deep: `CSP-11 ethics items are not etiquette. They are decision items under pressure. The public and the workforce are the primary beneficiaries of the credential’s judgment. Production, client happiness, and personal advancement are real pressures and are not the ranking. Fabricating sample results, backdating a lockout, omitting a recordable, or signing a PSSR you did not walk is misconduct even if a VP requested it.

Competence is an ethical boundary. If the stem asks for a pressure-vessel redesign and you are not that engineer, the move is to obtain qualified help, not to guess a thickness. If you are competent, you still do not rubber-stamp a contractor’s unverified calc. Conflicts: vendor entertainment tied to a specification, a spouse’s firm bidding, a bonus for ‘zero incidents’ that punishes reporting. Disclose, recuse, redesign the incentive. Confidentiality and attorney-client issues do not require you to let an imminent uncontrolled hazard continue without action consistent with duty and law.

Speaking-up path: local supervision, then safety leadership, then residual risk accepted only by someone with authority who has the facts, then board/regulator/whistleblower paths when concealment continues. Document facts, not insults. Do not destroy records. Do not coach people to lie to an inspector. After an incident, preservation of evidence is both investigation quality and ethics.

Hierarchy and ethics rhyme. If two answers work, take higher hierarchy / system / design. Recommending only administrative controls while an independent layer can still be installed is a professional-judgment failure, not merely a technical miss. Teach-back: name the duty (truth, competence, workers/public), name the pressure, name the action (refuse, escalate, document), and name the higher control you will not abandon. Oil-and-gas production bonuses, construction schedule LDs, and manufacturing OEE all try to buy silence. The scoring key does not sell. Scoring on ethics and professional judgment favors evidence, owners, verification, and hierarchy-smart controls rather than binders that look complete. Last-sentence constraints may freeze a higher ethics and professional judgment control; then take the best remaining fix and verify it instead of wishing the freeze away. Shared assumptions and checkbox closures create false assurance on ethics and professional judgment; name the assumption and test it. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet. Hold the exam default on ethics and professional judgment: if two answers work, take higher hierarchy / system / design, and reject polished paperwork when a higher system or design fix remains. In teach-back, name the ethics and professional judgment decision, the highest open control, and the verification step without reciting fake clause trivia. Field skins change the equipment, not the logic: a skid, a site tent, and a paint line still fail the same ethics and professional judgment test. A funded lower-row contract does not freeze a higher ethics and professional judgment row the stem still leaves open. Design the next job so the ethics and professional judgment control is obvious, then still implement it, then still verify it. Do not restart ethics and professional judgment from the bottom because PPE and training are what the plant already knows how to buy. Units, clocks, and tool names are traps only when you skip the last sentence on ethics and professional judgment. Walk the ethics and professional judgment sequence until it is automatic, then apply the last sentence, then pick the higher remaining row. Independent engineered layers beat detection, watchstanders, and emergency response when those layers are still open on ethics and professional judgment. Paper, PPE, and insurance can sit beside a ethics and professional judgment control; they do not replace it. If production already started in the last sentence, the ethics and professional judgment answer is often stop, restore the gate, then proceed — not a memo. Name the ethics and professional judgment rule in one sentence, then name the verification, then name the attractive wrong answer you will refuse.
`,
  cardFront: "Ethics — bonus or duty?",
  cardBack: "Do not sign a lie. Stay in competence. Escalate concealment. PPE-only advice while a trip can stay in service fails. Study only.",
  teachBackKey: "Pass if duty (truth/competence/people) is named, signing a lie is refused, and a still-open higher control is kept.",
  formulaSlug: null,
};

export const items: ClassItem[] = [
  exam(
    "CSP-11 D2.12",
    "Asked to sign a PSSR walk you did not perform. Best action?",
    [
      "Refuse to sign; complete or obtain a real walkdown.",
      "Sign to keep the bonus.",
      "Sign and add a smiley.",
      "Destroy the unsigned form.",
    ],
    0,
    "Core Rule: Signature means verification. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Honesty of records. Why Each Distractor Fails: Refuse to sign; complete or obtain a real walkdown.: Correct: Do not sign a lie. | Sign to keep the bonus.: Fails: Bonus ≠ duty. | Sign and add a smiley.: Fails: Stickers ≠ walkdown. | Destroy the unsigned form.: Fails: Destroying records is worse.",
    "STEM",
    "Foundation",
    [
      "Correct: Do not sign a lie.",
      "Fails: Bonus ≠ duty.",
      "Fails: Stickers ≠ walkdown.",
      "Fails: Destroying records is worse.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Tell the truth, stay inside competence, protect people, refuse to sign a lie. Silence for a bonus is not professional judgment. Keep higher controls in service. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.12",
    "Trip in bypass; leadership wants extra PPE and silence. Independent trip can be restored today. Best judgment?",
    [
      "PPE as the only recommendation.",
      "Restore the trip; PPE is residual; do not conceal.",
      "Silence until the bonus posts.",
      "Backdate MoC as a courtesy.",
    ],
    1,
    "Core Rule: Ethics plus hierarchy. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Concealment vs independent layer. Why Each Distractor Fails: PPE as the only recommendation.: Fails: PPE-only is the miss. | Restore the trip; PPE is residual; do not conceal.: Correct: Keep the layer. | Silence until the bonus posts.: Fails: Bonus is pressure. | Backdate MoC as a courtesy.: Fails: Falsifying records.",
    "HIER",
    "Expert",
    [
      "Fails: PPE-only is the miss.",
      "Correct: Keep the layer.",
      "Fails: Bonus is pressure.",
      "Fails: Falsifying records.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Tell the truth, stay inside competence, protect people, refuse to sign a lie. Silence for a bonus is not professional judgment. Keep higher controls in service. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.12",
    "Stem asks a structural calc outside your competence. Best move?",
    [
      "Guess to be helpful.",
      "Sign the contractor’s unverified number.",
      "Obtain a qualified engineer; do not guess a thickness.",
      "Ignore the vessel.",
    ],
    2,
    "Core Rule: Competence boundary. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Practice limits. Why Each Distractor Fails: Guess to be helpful.: Fails: Guessing is misconduct. | Sign the contractor’s unverified number.: Fails: Rubber stamp. | Obtain a qualified engineer; do not guess a thickness.: Correct: Get qualified help. | Ignore the vessel.: Fails: Abandonment.",
    "STEM",
    "Exam",
    [
      "Fails: Guessing is misconduct.",
      "Fails: Rubber stamp.",
      "Correct: Get qualified help.",
      "Fails: Abandonment.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Tell the truth, stay inside competence, protect people, refuse to sign a lie. Silence for a bonus is not professional judgment. Keep higher controls in service. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.12",
    "Spouse’s firm bids on a spec you will evaluate. Best ethics move?",
    [
      "Stay silent and award to them.",
      "Invent a technical fail for them without review.",
      "Destroy the bid.",
      "Disclose and recuse from the selection.",
    ],
    3,
    "Core Rule: Conflict: disclose/recuse. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: COI. Why Each Distractor Fails: Stay silent and award to them.: Fails: Concealment. | Invent a technical fail for them without review.: Fails: Opposite bias. | Destroy the bid.: Fails: Records. | Disclose and recuse from the selection.: Correct: Out of the decision.",
    "STEM",
    "Exam",
    [
      "Fails: Concealment.",
      "Fails: Opposite bias.",
      "Fails: Records.",
      "Correct: Out of the decision.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Tell the truth, stay inside competence, protect people, refuse to sign a lie. Silence for a bonus is not professional judgment. Keep higher controls in service. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.12",
    "OSHA log omitted a recordable to protect a prize. Best action?",
    [
      "Correct the log; stop the concealment; fix the prize design.",
      "Keep the prize logic.",
      "Coach others to omit.",
      "Shred last year’s logs.",
    ],
    0,
    "Core Rule: Truthful records; 1904 is not optional. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Recordkeeping ethics. Why Each Distractor Fails: Correct the log; stop the concealment; fix the prize design.: Correct: Correct and redesign incentive. | Keep the prize logic.: Fails: Incentive caused the lie. | Coach others to omit.: Fails: Coaching lies. | Shred last year’s logs.: Fails: Destruction.",
    "TIME",
    "Exam",
    [
      "Correct: Correct and redesign incentive.",
      "Fails: Incentive caused the lie.",
      "Fails: Coaching lies.",
      "Fails: Destruction.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Tell the truth, stay inside competence, protect people, refuse to sign a lie. Silence for a bonus is not professional judgment. Keep higher controls in service. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.12",
    "Attorney says say nothing while an uncontrolled live hazard continues. Best professional path?",
    [
      "Let the hazard run until trial.",
      "Take action consistent with duty and law to protect people; do not use privilege as a cloak for ongoing harm.",
      "Falsify a permit.",
      "Post only a meme.",
    ],
    1,
    "Core Rule: Imminent harm vs silence. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Confidentiality limits. Why Each Distractor Fails: Let the hazard run until trial.: Fails: Cloak. | Take action consistent with duty and law to protect people; do not use privilege as a cloak for ongoing harm.: Correct: Protect people. | Falsify a permit.: Fails: Another lie. | Post only a meme.: Fails: Admin theater.",
    "STEM",
    "Expert",
    [
      "Fails: Cloak.",
      "Correct: Protect people.",
      "Fails: Another lie.",
      "Fails: Admin theater.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Tell the truth, stay inside competence, protect people, refuse to sign a lie. Silence for a bonus is not professional judgment. Keep higher controls in service. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.12",
    "Inspector on site. Leadership wants you to hide the bypassed interlock. Best action?",
    [
      "Lie to protect the site.",
      "Coach operators to lie.",
      "Do not lie or conceal; present facts; restore the interlock.",
      "Delete DCS trends.",
    ],
    2,
    "Core Rule: Do not deceive a regulator. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Inspection honesty. Why Each Distractor Fails: Lie to protect the site.: Fails: Misconduct. | Coach operators to lie.: Fails: Misconduct. | Do not lie or conceal; present facts; restore the interlock.: Correct: Truth + restore. | Delete DCS trends.: Fails: Spoliation.",
    "STEM",
    "Exam",
    [
      "Fails: Misconduct.",
      "Fails: Misconduct.",
      "Correct: Truth + restore.",
      "Fails: Spoliation.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Tell the truth, stay inside competence, protect people, refuse to sign a lie. Silence for a bonus is not professional judgment. Keep higher controls in service. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.12",
    "Two answers: a truthful residual-risk memo that keeps the trip in service, or a cheerful email that conceals the bypass. Pick:",
    [
      "The cheerful concealment.",
      "A bonus slide.",
      "A coupon for muffs as the only control.",
      "The truthful memo that keeps the trip.",
    ],
    3,
    "Core Rule: If two answers work, take higher hierarchy / system / design. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Truth plus higher control. Why Each Distractor Fails: The cheerful concealment.: Fails: Concealment. | A bonus slide.: Fails: Pressure artifact. | A coupon for muffs as the only control.: Fails: PPE-only. | The truthful memo that keeps the trip.: Correct: Duty + layer.",
    "HIER",
    "Exam",
    [
      "Fails: Concealment.",
      "Fails: Pressure artifact.",
      "Fails: PPE-only.",
      "Correct: Duty + layer.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Tell the truth, stay inside competence, protect people, refuse to sign a lie. Silence for a bonus is not professional judgment. Keep higher controls in service. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.12",
    "Vendor offers a trip if you specify only their weaker guard. Best move?",
    [
      "Refuse the personal benefit; specify the adequate guard.",
      "Take the trip and specify the weak guard.",
      "Take the trip and stay silent.",
      "Ask for cash instead.",
    ],
    0,
    "Core Rule: Do not sell the spec. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Gifts/COI. Why Each Distractor Fails: Refuse the personal benefit; specify the adequate guard.: Correct: Refuse + adequate control. | Take the trip and specify the weak guard.: Fails: Bribe + HIER miss. | Take the trip and stay silent.: Fails: Bribe. | Ask for cash instead.: Fails: Worse.",
    "STEM",
    "Exam",
    [
      "Correct: Refuse + adequate control.",
      "Fails: Bribe + HIER miss.",
      "Fails: Bribe.",
      "Fails: Worse.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Tell the truth, stay inside competence, protect people, refuse to sign a lie. Silence for a bonus is not professional judgment. Keep higher controls in service. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.12",
    "You made an honest error in a report. Best ethics move?",
    [
      "Hide it.",
      "Correct it promptly to the people who used it.",
      "Blame an intern in writing without facts.",
      "Shred all copies and deny.",
    ],
    1,
    "Core Rule: Correct honest errors. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Correction. Why Each Distractor Fails: Hide it.: Fails: Concealment. | Correct it promptly to the people who used it.: Correct: Prompt correction. | Blame an intern in writing without facts.: Fails: Unfair blame. | Shred all copies and deny.: Fails: Destruction.",
    "STEM",
    "Foundation",
    [
      "Fails: Concealment.",
      "Correct: Prompt correction.",
      "Fails: Unfair blame.",
      "Fails: Destruction.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Tell the truth, stay inside competence, protect people, refuse to sign a lie. Silence for a bonus is not professional judgment. Keep higher controls in service. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.12",
    "Zero-incident bonus that punishes reporting. Professional judgment?",
    [
      "Praise it as leading culture.",
      "Tighten the punishment.",
      "Redesign the incentive; it creates concealment pressure.",
      "Apply it to contractors only.",
    ],
    2,
    "Core Rule: Incentives that buy silence are unethical design. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Incentive ethics. Why Each Distractor Fails: Praise it as leading culture.: Fails: It is not culture. | Tighten the punishment.: Fails: Worse. | Redesign the incentive; it creates concealment pressure.: Correct: Change the prize. | Apply it to contractors only.: Fails: Still harmful.",
    "STEM",
    "Exam",
    [
      "Fails: It is not culture.",
      "Fails: Worse.",
      "Correct: Change the prize.",
      "Fails: Still harmful.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Tell the truth, stay inside competence, protect people, refuse to sign a lie. Silence for a bonus is not professional judgment. Keep higher controls in service. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.12",
    "Withdrawal/resignation is on the table because the org requires you to sign false PSSRs. Best framing?",
    [
      "The first move before any conversation.",
      "Never allowed.",
      "Only allowed if insurance pays.",
      "A last-resort after refuse/escalate/document when misconduct is required to stay.",
    ],
    3,
    "Core Rule: Withdrawal is last, not first, and not never. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Withdrawal. Why Each Distractor Fails: The first move before any conversation.: Fails: Too early. | Never allowed.: Fails: Not never. | Only allowed if insurance pays.: Fails: Insurance irrelevant. | A last-resort after refuse/escalate/document when misconduct is required to stay.: Correct: After the duty path.",
    "STEM",
    "Expert",
    [
      "Fails: Too early.",
      "Fails: Not never.",
      "Fails: Insurance irrelevant.",
      "Correct: After the duty path.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Tell the truth, stay inside competence, protect people, refuse to sign a lie. Silence for a bonus is not professional judgment. Keep higher controls in service. Verify the critical step before accepting a lower-tier control.",
    }
  ),
];

