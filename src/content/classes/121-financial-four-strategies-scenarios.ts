import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D3.03";

export const classFields: ClassFields = {
  hook: "Finance offers a higher liability limit instead of specifying a non-isocyanate coating still on the approved list. Transfer is not control. Avoid or substitute first.",
  hookOilGas: "A well-control insurance rider is offered instead of keeping an independent high-level trip. The rider moves money. The trip controls the event.",
  hookConstruction: "An OCIP certificate is offered instead of a designed exclusion zone under a lift. Paper transfers; the zone prevents.",
  rule: "Avoid, retain, transfer, control. Insurance moves money after a loss; it does not remove energy. If a higher control is open, take it before financing residual.",
  modelCaption: "Four boxes: Avoid | Control (hierarchy inside) | Retain (funded) | Transfer (policy/contract). Arrow: residual only after control. Caption: a policy is not a guard.",
  workedCase: "(1) New solvent contract is still unsigned — avoidance is open: decline. (2) If already mandatory, substitute/enclose (control). (3) Insure residual only. Losing answer: buy a larger liability limit and keep the isocyanate while a waterborne is still listed.",
  trapsJson: traps(
    "Calling insurance elimination.",
    "Unfunded hope labeled as retention.",
    "A certificate of insurance treated as a guard.",
  ),
  contrastJson: contrast([
    { looksLike: "Avoid", actually: "Do not do the activity" },
    { looksLike: "Retain", actually: "Funded residual you can pay" },
    { looksLike: "Transfer", actually: "Insurance/contract moves money, not energy" },
    { looksLike: "Control", actually: "Prevention/reduction of the event — hierarchy inside" },
    { looksLike: "Deductible", actually: "Retention, not a control" },
    { looksLike: "Captive", actually: "Still the organization’s money" },
  ]),
  mustScoreJson: mustScore(
    "Four strategies: avoid, retain, transfer, control.",
    "Avoidance declines the activity.",
    "Retention must be funded.",
    "Transfer moves money, not energy.",
    "Control uses hierarchy (prevention/reduction).",
    "A policy is not a substitute for an open engineering fix.",
    "Deductibles and captives are retention/financing.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "contract still unsigned", pick: "avoidance is still open" },
    { ifStem: "activity is mandatory in the last sentence", pick: "control the hazard; avoid is closed" },
    { ifStem: "insurance offered while substitute is open", pick: "substitute — transfer is residual" },
    { ifStem: "unfunded residual", pick: "not true retention" },
    { ifStem: "certificate of insurance offered as a guard", pick: "reject — paper is not hardware" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" }
  ),
  brief: `Avoid, retain, transfer, control. Insurance moves money, not energy. Control uses hierarchy. Exam default: if two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
The financial four are avoid, retain, transfer, and control (loss prevention / reduction). Avoid declines the activity. Retain keeps financed risk you can actually fund. Transfer uses insurance or contracts to move financial consequence — it does not remove the energy. Control changes the risk itself, preferably by hierarchy. Do not call a policy a substitute for a still-open engineering fix.

Field move
A new solvent line can be avoided by not taking the contract, retained with a funded reserve if leadership truly accepts the residual, transferred with insurance or hold-harmless language, or controlled by substitution and enclosure. Insurance around an isocyanate you can still replace is the losing answer. Deductibles are retained risk. Captives are still the organization retaining/financing. Certificates of insurance do not install guards.

Exam
If two answers work, take higher hierarchy / system / design. FIN is the error code: mixing prevention with transfer, or treating a higher liability limit as elimination. Last sentence may freeze the activity as mandatory — then avoid is closed and you control or, if residual is truly accepted and funded, retain. If two answers finance the loss, take the one that also prevents it. Redraw the decision sequence for financial four strategies before looking at options. Cost and convenience will sell a lower control that looks busy. Attractive wrong answers on financial four strategies are usually competent lower-row programs, busy paperwork, or a funded contract. Read the last sentence for constraints that close a higher control, then take the best remaining system or design fix for financial four strategies. When capital or authority remains, spend it on the highest remaining hardware or independent layer, then use administrative controls and PPE only for residual financial four strategies risk. Do not let schedule pressure invert the financial four strategies sequence. Verification is a test with an owner, not a calendar invite. If two answers both look professional, take higher hierarchy / system / design on financial four strategies. Teach-back restates the financial four strategies rule, the sequence, and the verification step in one spoken sentence. Contrast pairs keep financial four strategies labels honest when a look-alike program uses the right vocabulary on the wrong row.
`,
  deep: `CSP-11 D3.03 asks you to differentiate financial risk strategies, not to underwrite a policy. Avoidance is a yes/no on the activity. If the plant can refuse the contract, that is the highest financial move because the hazard never arrives. Retention is conscious: funded reserves, deductibles, or a captive that the organization can actually pay. Unfunded hope is not retention; it is denial. Transfer moves money after a loss — insurance, indemnification, additional insured status. The energy, the chemical, and the height stay. Control is loss prevention (stop the event) and loss reduction (limit severity). Hierarchy lives inside control.

The exam sells a beautiful insurance rider while substitution is still open. That is a FIN miss sitting on a HIER miss. A hold-harmless clause with a contractor does not replace host isolation points. A higher limit on the general liability policy does not specify a quieter blower. Workers’ compensation exists whether or not you substitute. Premium discounts for a hearing-conservation program do not beat specifying the 82 dBA machine that has not been ordered.

Sequence the stem. If the activity can still be declined, avoid. If it cannot, control with the highest open row. Transfer and retain the residual you cannot reasonably control, and only if finance can actually pay. Last-sentence freezes: customer-required chemistry, already-signed supply agreement, legal duty to operate. Then avoid is closed. Do not pretend a policy is avoidance. Do not call a deductible a control. Do not call a certificate of insurance a guard.

If two answers work, take higher hierarchy / system / design. Teach-back: name which of the four is still open, name whether the policy moves money or energy, and name the highest remaining control. Oil-and-gas skins will sell you operator extra expense coverage around a trip you can still keep. Construction skins will sell you OCIP paperwork around a missing exclusion zone. Manufacturing skins will sell you a captive around a solvent you can still drop. In each skin, money follows control; it does not replace it. Scoring on financial four strategies favors evidence, owners, verification, and hierarchy-smart controls rather than binders that look complete. Last-sentence constraints may freeze a higher financial four strategies control; then take the best remaining fix and verify it instead of wishing the freeze away. Shared assumptions and checkbox closures create false assurance on financial four strategies; name the assumption and test it. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet. Hold the exam default on financial four strategies: if two answers work, take higher hierarchy / system / design, and reject polished paperwork when a higher system or design fix remains. In teach-back, name the financial four strategies decision, the highest open control, and the verification step without reciting fake clause trivia. Field skins change the equipment, not the logic: a skid, a site tent, and a paint line still fail the same financial four strategies test. A funded lower-row contract does not freeze a higher financial four strategies row the stem still leaves open. Design the next job so the financial four strategies control is obvious, then still implement it, then still verify it. Do not restart financial four strategies from the bottom because PPE and training are what the plant already knows how to buy. Units, clocks, and tool names are traps only when you skip the last sentence on financial four strategies. Walk the financial four strategies sequence until it is automatic, then apply the last sentence, then pick the higher remaining row. Independent engineered layers beat detection, watchstanders, and emergency response when those layers are still open on financial four strategies. Paper, PPE, and insurance can sit beside a financial four strategies control; they do not replace it. If production already started in the last sentence, the financial four strategies answer is often stop, restore the gate, then proceed — not a memo.
`,
  cardFront: "Financial four — policy or control?",
  cardBack: "Avoid / control / retain (funded) / transfer (money only). Attractive wrong: larger limit while a substitute is open. Study only.",
  teachBackKey: "Pass if the four are named and insurance is described as moving money, not energy.",
  formulaSlug: null,
};

export const items: ClassItem[] = [
  exam(
    "CSP-11 D3.03",
    "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Which list is the financial four.",
    [
      "Avoid, retain, transfer, control.",
      "PEL, TLV, REL, WEEL.",
      "FTA, ETA, FMEA, 5-Why.",
      "RTO, RPO, BIA, ICS.",
    ],
    0,
    "Core Rule: Four named strategies. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: D3.03 teaching. Why Each Distractor Fails: Avoid, retain, transfer, control.: Correct: Avoid/retain/transfer/control. | PEL, TLV, REL, WEEL.: Fails: IH limits. | FTA, ETA, FMEA, 5-Why.: Fails: Analysis tools. | RTO, RPO, BIA, ICS.: Fails: Continuity nouns.",
    "FIN",
    "Foundation",
    [
      "Correct: Avoid/retain/transfer/control.",
      "Fails: IH limits.",
      "Fails: Analysis tools.",
      "Fails: Continuity nouns.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Avoid, retain, transfer, control. Insurance moves money after a loss; it does not remove energy. If a higher control is open, take it before financing residual. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D3.03",
    "Contract unsigned. Isocyanate coating vs waterborne. Finance wants a larger liability policy and to sign. Best strategy?",
    [
      "Buy the larger policy as elimination.",
      "Avoid or, if they insist on painting, substitute — do not lead with transfer.",
      "Unfunded hope as retention.",
      "A poster as transfer.",
    ],
    1,
    "Core Rule: Avoid/control beat transfer while open. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Strategy order. Why Each Distractor Fails: Buy the larger policy as elimination.: Fails: Policy ≠ elimination. | Avoid or, if they insist on painting, substitute — do not lead with transfer.: Correct: Activity still declinable; substitute still open. | Unfunded hope as retention.: Fails: Hope ≠ retain. | A poster as transfer.: Fails: Poster ≠ transfer.",
    "FIN",
    "Exam",
    [
      "Fails: Policy ≠ elimination.",
      "Correct: Activity still declinable; substitute still open.",
      "Fails: Hope ≠ retain.",
      "Fails: Poster ≠ transfer.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Avoid, retain, transfer, control. Insurance moves money after a loss; it does not remove energy. If a higher control is open, take it before financing residual. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D3.03",
    "You are the CSP reviewing a live decision at a bridge deck pour laydown yard. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: A deductible on an insurance policy is best labeled:.",
    [
      "Elimination of the hazard.",
      "Engineering.",
      "Retention — the organization keeps that layer of money risk.",
      "PPE.",
    ],
    2,
    "Core Rule: Deductible is retained financial risk. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Retention vs control. Why Each Distractor Fails: Elimination of the hazard.: Fails: Does not remove energy. | Engineering.: Fails: Not hardware. | Retention — the organization keeps that layer of money risk.: Correct: Funded keep of money risk. | PPE.: Fails: Not on the body.",
    "FIN",
    "Exam",
    [
      "Fails: Does not remove energy.",
      "Fails: Not hardware.",
      "Correct: Funded keep of money risk.",
      "Fails: Not on the body.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Avoid, retain, transfer, control. Insurance moves money after a loss; it does not remove energy. If a higher control is open, take it before financing residual. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D3.03",
    "Certificate of insurance offered instead of a designed exclusion zone under a lift. Best reading?",
    [
      "The certificate is elimination.",
      "The certificate is equivalent to a guard.",
      "The certificate is a PEL.",
      "Transfer paperwork is not a control; specify the zone.",
    ],
    3,
    "Core Rule: Paper moves money, not people out of the line of fire. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: COI vs control. Why Each Distractor Fails: The certificate is elimination.: Fails: Not elimination. | The certificate is equivalent to a guard.: Fails: Not a guard. | The certificate is a PEL.: Fails: Not a PEL. | Transfer paperwork is not a control; specify the zone.: Correct: Design the zone.",
    "HIER",
    "Exam",
    [
      "Fails: Not elimination.",
      "Fails: Not a guard.",
      "Fails: Not a PEL.",
      "Correct: Design the zone.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Avoid, retain, transfer, control. Insurance moves money after a loss; it does not remove energy. If a higher control is open, take it before financing residual. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D3.03",
    "Last sentence: customer-required chemistry; contract already signed. Avoidance is:",
    [
      "Closed — control the hazard; transfer/retain only residual.",
      "Still open — just refuse secretly.",
      "Replaced by a larger policy as avoidance.",
      "Replaced by a smile sheet.",
    ],
    0,
    "Core Rule: Last sentence can close avoid. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Freeze. Why Each Distractor Fails: Closed — control the hazard; transfer/retain only residual.: Correct: Mandatory activity. | Still open — just refuse secretly.: Fails: Secret refusal is not a strategy. | Replaced by a larger policy as avoidance.: Fails: Policy ≠ avoid. | Replaced by a smile sheet.: Fails: Wrong tool.",
    "STEM",
    "Expert",
    [
      "Correct: Mandatory activity.",
      "Fails: Secret refusal is not a strategy.",
      "Fails: Policy ≠ avoid.",
      "Fails: Wrong tool.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Avoid, retain, transfer, control. Insurance moves money after a loss; it does not remove energy. If a higher control is open, take it before financing residual. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D3.03",
    "You are the CSP reviewing a live decision at a grain elevator maintenance day. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Captive insurance is best described as:.",
    [
      "Elimination of workplace hazards.",
      "The organization still finances the loss — retention/financing, not a hierarchy row.",
      "An independent engineered layer.",
      "A NIOSH REL.",
    ],
    1,
    "Core Rule: Captive = own money. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Captive. Why Each Distractor Fails: Elimination of workplace hazards.: Fails: Does not eliminate energy. | The organization still finances the loss — retention/financing, not a hierarchy row.: Correct: Still their money. | An independent engineered layer.: Fails: Not a trip. | A NIOSH REL.: Fails: Not an REL.",
    "FIN",
    "Exam",
    [
      "Fails: Does not eliminate energy.",
      "Correct: Still their money.",
      "Fails: Not a trip.",
      "Fails: Not an REL.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Avoid, retain, transfer, control. Insurance moves money after a loss; it does not remove energy. If a higher control is open, take it before financing residual. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D3.03",
    "You are the CSP reviewing a live decision at a hospital utility plant shutdown. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Loss prevention vs loss reduction inside control:.",
    [
      "They are both insurance riders.",
      "They are both PELs.",
      "Prevention stops the event; reduction limits severity once it starts.",
      "They are both 5-Why tools.",
    ],
    2,
    "Core Rule: Prevention vs reduction. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Control split. Why Each Distractor Fails: They are both insurance riders.: Fails: Not insurance. | They are both PELs.: Fails: Not PELs. | Prevention stops the event; reduction limits severity once it starts.: Correct: Event vs severity. | They are both 5-Why tools.: Fails: Not investigation tools.",
    "FIN",
    "Foundation",
    [
      "Fails: Not insurance.",
      "Fails: Not PELs.",
      "Correct: Event vs severity.",
      "Fails: Not investigation tools.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Avoid, retain, transfer, control. Insurance moves money after a loss; it does not remove energy. If a higher control is open, take it before financing residual. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D3.03",
    "Two answers: larger GL limit, or specify a quieter machine still on the bid. Pick:",
    [
      "The larger GL limit as primary.",
      "Unfunded hope.",
      "Earmuffs as elimination.",
      "Specify the quieter machine; insure residual if needed.",
    ],
    3,
    "Core Rule: If two answers work, take higher hierarchy / system / design. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Control over transfer. Why Each Distractor Fails: The larger GL limit as primary.: Fails: Transfer first is the trap. | Unfunded hope.: Fails: Not retention. | Earmuffs as elimination.: Fails: PPE ≠ elimination. | Specify the quieter machine; insure residual if needed.: Correct: Hierarchy inside control.",
    "HIER",
    "Exam",
    [
      "Fails: Transfer first is the trap.",
      "Fails: Not retention.",
      "Fails: PPE ≠ elimination.",
      "Correct: Hierarchy inside control.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Avoid, retain, transfer, control. Insurance moves money after a loss; it does not remove energy. If a higher control is open, take it before financing residual. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D3.03",
    "Hold-harmless clause with a contractor. Host still has a missing lockable isolation point. Best host move?",
    [
      "Install isolation hardware; the clause does not replace host LOTO design.",
      "Rely on the clause as engineering.",
      "Skip host LOTO because the contractor is insured.",
      "Treat the clause as a PEL.",
    ],
    0,
    "Core Rule: Contracts transfer money, not energy. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Indemnity vs hardware. Why Each Distractor Fails: Install isolation hardware; the clause does not replace host LOTO design.: Correct: Host still designs isolation. | Rely on the clause as engineering.: Fails: Clause ≠ hardware. | Skip host LOTO because the contractor is insured.: Fails: Insurance ≠ LOTO. | Treat the clause as a PEL.: Fails: Not a PEL.",
    "HIER",
    "Expert",
    [
      "Correct: Host still designs isolation.",
      "Fails: Clause ≠ hardware.",
      "Fails: Insurance ≠ LOTO.",
      "Fails: Not a PEL.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Avoid, retain, transfer, control. Insurance moves money after a loss; it does not remove energy. If a higher control is open, take it before financing residual. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D3.03",
    "You are the CSP reviewing a live decision at an offshore fabrication night shift. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Unfunded residual labeled retention. Critique.",
    [
      "Unfunded hope is the highest hierarchy row.",
      "Not true retention unless the organization can actually pay.",
      "Unfunded hope is PSSR.",
      "Unfunded hope is a light curtain.",
    ],
    1,
    "Core Rule: Retention is funded. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Retention quality. Why Each Distractor Fails: Unfunded hope is the highest hierarchy row.: Fails: Hope is not a row. | Not true retention unless the organization can actually pay.: Correct: Must be able to pay. | Unfunded hope is PSSR.: Fails: Not PSSR. | Unfunded hope is a light curtain.: Fails: Not engineering.",
    "FIN",
    "Exam",
    [
      "Fails: Hope is not a row.",
      "Correct: Must be able to pay.",
      "Fails: Not PSSR.",
      "Fails: Not engineering.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Avoid, retain, transfer, control. Insurance moves money after a loss; it does not remove energy. If a higher control is open, take it before financing residual. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D3.03",
    "You are the CSP reviewing a live decision at a municipal water-plant retrofit. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Workers’ compensation existing at the site means:.",
    [
      "Elimination of all injuries.",
      "Permission to skip substitution.",
      "A statutory transfer/financing mechanism — it does not choose the hierarchy row.",
      "A substitute for PSSR.",
    ],
    2,
    "Core Rule: Comp is not control. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Comp vs hierarchy. Why Each Distractor Fails: Elimination of all injuries.: Fails: Injuries still happen. | Permission to skip substitution.: Fails: Not a skip ticket. | A statutory transfer/financing mechanism — it does not choose the hierarchy row.: Correct: Money mechanism. | A substitute for PSSR.: Fails: Not PSSR.",
    "FIN",
    "Exam",
    [
      "Fails: Injuries still happen.",
      "Fails: Not a skip ticket.",
      "Correct: Money mechanism.",
      "Fails: Not PSSR.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Avoid, retain, transfer, control. Insurance moves money after a loss; it does not remove energy. If a higher control is open, take it before financing residual. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D3.03",
    "You are the CSP reviewing a live decision at a plastics compounding turnaround. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Best example of avoidance.",
    [
      "Buy more insurance on the same coating.",
      "Add a deductible.",
      "Add cartridges.",
      "Decline the solvent-coating contract so the isocyanate never arrives.",
    ],
    3,
    "Core Rule: Avoid = do not do the activity. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Avoidance example. Why Each Distractor Fails: Buy more insurance on the same coating.: Fails: Transfer. | Add a deductible.: Fails: Retain. | Add cartridges.: Fails: PPE control, not avoid. | Decline the solvent-coating contract so the isocyanate never arrives.: Correct: Activity never starts.",
    "FIN",
    "Exam",
    [
      "Fails: Transfer.",
      "Fails: Retain.",
      "Fails: PPE control, not avoid.",
      "Correct: Activity never starts.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Avoid, retain, transfer, control. Insurance moves money after a loss; it does not remove energy. If a higher control is open, take it before financing residual. Verify the critical step before accepting a lower-tier control.",
    }
  ),
];

