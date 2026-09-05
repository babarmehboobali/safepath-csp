import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D4.02";

export const classFields: ClassFields = {
  hook: "Leadership prints a binder labeled BCP that is only an evacuation map. ISO 22301-style continuity needs BIA-driven priorities, RTO/RPO thinking, and exercised recovery — not a shelf binder.",
  hookOilGas: `On a production platform or plant, iso22301 bia bcp shows up when operations push throughput while a higher control is still open. BIA identifies critical activities and impacts over time. Prefer a system/design fix over a polished lower-row program that keeps the wells online.`,
  hookConstruction: `On a busy jobsite, iso22301 bia bcp shows up when schedule pressure sells a permit, rotation, or PPE package while design still can change. BIA identifies critical activities and impacts over time. Discriminate the open row before you laminate another card.`,
  rule: "BIA identifies critical activities and impacts over time. BCP/BCMS (ISO 22301 family concepts) sets continuity strategies to meet recovery objectives. RTO = time to restore activity; RPO = tolerable data loss window. ERP ≠ BCP though they interface. Exercise and improve.",
  modelCaption: "Framework → compute/classify → reject distractors → prefer system/design.",
  workedCase: "BIA shows Order-to-Cash fails hard after 24 h. RTO set to 8 h with alternate site and data RPO 1 h. Evacuation map alone does not meet the RTO.",
  trapsJson: traps("Calling an evacuation map a full BCP.", "Skipping BIA.", "Setting RTO without resource strategies."),
  contrastJson: contrast([
    { looksLike: "BIA", actually: "Impact over time for activities" },
    { looksLike: "RTO", actually: "Restore time objective" },
    { looksLike: "RPO", actually: "Data loss window" },
    { looksLike: "BCP/BCMS", actually: "Continuity strategies/system" },
    { looksLike: "ERP", actually: "Emergency response — related, not identical" },
  ]),
  mustScoreJson: mustScore(
    "ISO 22301: BCMS PDCA with BIA, strategies, plans, exercises, continual improvement.",
    "BIA sets RTOs/RPOs and critical dependencies.",
    "Strategies may be diversify, replicate, backup, insurance \u2014 insurance is not continuity alone.",
    "Exercise and update after tests and changes.",
    "Link to emergency response and crisis comms.",
    "Supply chain dependencies often dominate.",
    "Prevention of disruptions still preferred when open.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "no BIA", pick: "perform BIA before strategy shopping" },
    { ifStem: "only insurance as BCP", pick: "add real continuity strategies" },
    { ifStem: "never exercised", pick: "exercise and improve" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "prevention of outage open", pick: "prefer prevention alongside BCMS" },
  ),

  brief: `BIA identifies critical activities and impacts over time. BCP/BCMS (ISO 22301 family concepts) sets continuity strategies to meet recovery objectives. RTO = time to restore activity; RPO = tolerable data loss window. ERP â  BCP though they interface. Exercise and improve. If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
BIA identifies critical activities and impacts over time. BCP/BCMS (ISO 22301 family concepts) sets continuity strategies to meet recovery objectives. RTO = time to restore activity; RPO = tolerable data loss window. ERP â  BCP though they interface. Exercise and improve. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
Leadership prints a binder labeled BCP that is only an evacuation map. ISO 22301-style continuity needs BIA-driven priorities, RTO/RPO thinking, and exercised recovery â not a shelf binder. Oil-and-gas skin: On a production platform or plant, iso22301 bia bcp shows up when operations push throughput while a higher control is still open. BIA identifies critical activities and impacts over time. Prefer a system/design fix over a polished lower-row program that keeps the wells online. Construction skin: On a busy jobsite, iso22301 bia bcp shows up when schedule pressure sells a permit, rotation, or PPE package while design still can change. Discriminate the open row before you laminate another card. Work the case: BIA shows Order-to-Cash fails hard after 24 h. RTO set to 8 h with alternate site and data RPO 1 h. Evacuation map alone does not meet the RTO. Classic traps: Calling an evacuation map a full BCP.; Skipping BIA.; Setting RTO without resource strategies.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for iso22301 bia bcp. Verify whether a higher system or design fix is still open. Contrast labels: BIA is actually Impact over time for activities; RTO is actually Restore time objective; RPO is actually Data loss window; BCP/BCMS is actually Continuity strategies/system; ERP is actually Emergency response — related, not identical. If the stem shows no BIA, pick perform BIA before strategy shopping. If the stem shows only insurance as BCP, pick add real continuity strategies. If the stem shows never exercised, pick exercise and improve. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows prevention of outage open, pick prefer prevention alongside BCMS. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `ISO 22301 BIA/BCP sits in CSP-11 Domain 4 Emergency Management. The exam tests whether you apply the rule when a package already looks complete. Core rule: BIA identifies critical activities and impacts over time. BCP/BCMS (ISO 22301 family concepts) sets continuity strategies to meet recovery objectives. RTO = time to restore activity; RPO = tolerable data loss window. ERP â  BCP though they interface. Exercise and improve. Field context: Leadership prints a binder labeled BCP that is only an evacuation map. ISO 22301-style continuity needs BIA-driven priorities, RTO/RPO thinking, and exercised recovery â not a shelf binder. The oil-and-gas skin shifts the same decision into production pressure: On a production platform or plant, iso22301 bia bcp shows up when operations push throughput while a higher control is still open. BIA identifies critical activities and impacts over time. Prefer a system/design fix over a polished lower-row program that keeps the wells online. The construction skin shifts it into schedule and trade stacking: On a busy jobsite, iso22301 bia bcp shows up when schedule pressure sells a permit, rotation, or PPE package while design still can change. Discriminate the open row before you laminate another card. Model caption for this class: Framework â compute/classify â reject distractors â prefer system/design. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) ISO 22301: BCMS PDCA with BIA, strategies, plans, exercises, continual improvement. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) BIA sets RTOs/RPOs and critical dependencies. (3) Strategies may be diversify, replicate, backup, insurance — insurance is not continuity alone. (4) Exercise and update after tests and changes. (5) Link to emergency response and crisis comms. (6) Supply chain dependencies often dominate. (7) Prevention of disruptions still preferred when open. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: BIA shows Order-to-Cash fails hard after 24 h. RTO set to 8 h with alternate site and data RPO 1 h. Evacuation map alone does not meet the RTO. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Calling an evacuation map a full BCP.; Skipping BIA.; Setting RTO without resource strategies.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “BIA” is really Impact over time for activities; “RTO” is really Restore time objective; “RPO” is really Data loss window; “BCP/BCMS” is really Continuity strategies/system; “ERP” is really Emergency response — related, not identical. Stem-if-then map: if no BIA → perform BIA before strategy shopping; if only insurance as BCP → add real continuity strategies; if never exercised → exercise and improve; if two answers work → higher hierarchy / system / design; if prevention of outage open → prefer prevention alongside BCMS. Scoring favors evidence, owners, verification, and hierarchy-smart controls on iso22301 bia bcp. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "ISO 22301 BIA/BCP?",
  cardBack: "BIA drives RTO/RPO and continuity strategies; exercise. Study only.",
  teachBackKey: "Define BIA, RTO, RPO, and contrast ERP vs BCP.",
  formulaSlug: null,
};

export const items: ClassItem[] = [
  exam(
    T,
    "Operations ships a spiral-bound 'BCP' that is only an evacuation map. Leadership asks what a BIA must still deliver before strategies are funded.",
    [
      "Identify critical activities and impacts over time",
      "Compute LFL mixtures",
      "Set PEL values",
      "Draw pump churn",
    ],
    0,
    "Core Rule: classify the last sentence, then apply the topic rule. Calculation Steps: None unless numbers appear — then compute carefully. Standards Cited: CSP-11 teaching for this class. Why Each Distractor Fails: Identify critical activities and impacts over time: Correct: BIA maps critical activities and timed impacts. | Compute LFL mixtures: Wrong family — flammable-range math is not continuity analysis. | Set PEL values: Wrong family — OELs are IH, not BIA. | Draw pump churn: Wrong family — hydraulics is not BIA.",
    "STEM",
    "Exam",
    [
      "Correct: BIA maps critical activities and timed impacts.",
      "Wrong family — flammable-range math is not continuity analysis.",
      "Wrong family — OELs are IH, not BIA.",
      "Wrong family — hydraulics is not BIA.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "BIA identifies critical activities and impacts over time. BCP/BCMS (ISO 22301 family concepts) sets continuity strategies to meet recovery objectives. RTO = time to restore activity; RPO = tolerable data loss window.... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Order-to-Cash collapses after a day without systems. The BCMS charter must state a restore-time objective. What does RTO mean here?",
    [
      "Target time to restore an activity after disruption",
      "Random tool option",
      "Relative toxic odor",
      "Riser turn-on",
    ],
    0,
    "Core Rule: classify the last sentence, then apply the topic rule. Calculation Steps: None unless numbers appear — then compute carefully. Standards Cited: CSP-11 teaching for this class. Why Each Distractor Fails: Target time to restore an activity after disruption: Correct: RTO is the restore-time objective for the activity. | Random tool option: Nonsense expansion of RTO. | Relative toxic odor: IH distractor — not continuity vocabulary. | Riser turn-on: Fire-protection distractor — not RTO.",
    "STEM",
    "Exam",
    [
      "Correct: RTO is the restore-time objective for the activity.",
      "Nonsense expansion of RTO.",
      "IH distractor — not continuity vocabulary.",
      "Fire-protection distractor — not RTO.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "BIA identifies critical activities and impacts over time. BCP/BCMS (ISO 22301 family concepts) sets continuity strategies to meet recovery objectives. RTO = time to restore activity; RPO = tolerable data loss window.... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Finance accepts at most one hour of ledger loss after a ransomware event. Which continuity term names that window?",
    [
      "Maximum tolerable data/state loss window",
      "Riser pressure only",
      "Random process order",
      "Required PPE outfit",
    ],
    0,
    "Core Rule: classify the last sentence, then apply the topic rule. Calculation Steps: None unless numbers appear — then compute carefully. Standards Cited: CSP-11 teaching for this class. Why Each Distractor Fails: Maximum tolerable data/state loss window: Correct: RPO is the tolerable data/state loss window. | Riser pressure only: Wrong domain — pressure systems. | Random process order: Nonsense expansion. | Required PPE outfit: PPE is not an RPO.",
    "STEM",
    "Exam",
    [
      "Correct: RPO is the tolerable data/state loss window.",
      "Wrong domain — pressure systems.",
      "Nonsense expansion.",
      "PPE is not an RPO.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "BIA identifies critical activities and impacts over time. BCP/BCMS (ISO 22301 family concepts) sets continuity strategies to meet recovery objectives. RTO = time to restore activity; RPO = tolerable data loss window.... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "A site claims ISO 22301 readiness because every door has an evacuation map. Best evaluation?",
    [
      "Insufficient — continuity needs recovery strategies tied to BIA/objectives",
      "Always enough under ISO 22301 folklore",
      "Same as SPCC",
      "Same as VPP",
    ],
    0,
    "Core Rule: classify the last sentence, then apply the topic rule. Calculation Steps: None unless numbers appear — then compute carefully. Standards Cited: CSP-11 teaching for this class. Why Each Distractor Fails: Insufficient — continuity needs recovery strategies tied to BIA/objectives: Correct: a map is ERP fragment, not a BIA-driven BCP. | Always enough under ISO 22301 folklore: Absolute folklore — maps alone never equal BCMS. | Same as SPCC: SPCC is oil spill prevention — different program. | Same as VPP: VPP is OSHA recognition — not continuity.",
    "STEM",
    "Exam",
    [
      "Correct: a map is ERP fragment, not a BIA-driven BCP.",
      "Absolute folklore — maps alone never equal BCMS.",
      "SPCC is oil spill prevention — different program.",
      "VPP is OSHA recognition — not continuity.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "BIA identifies critical activities and impacts over time. BCP/BCMS (ISO 22301 family concepts) sets continuity strategies to meet recovery objectives. RTO = time to restore activity; RPO = tolerable data loss window.... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "After a release, the IC runs life-safety and notifications while IT spins up an alternate site. How should ERP and BCP relate?",
    [
      "ERP handles immediate life safety/emergency; BCP restores operations — they interface",
      "Identical documents always",
      "ERP is only TRI",
      "BCP is only LOTO",
    ],
    0,
    "Core Rule: classify the last sentence, then apply the topic rule. Calculation Steps: None unless numbers appear — then compute carefully. Standards Cited: CSP-11 teaching for this class. Why Each Distractor Fails: ERP handles immediate life safety/emergency; BCP restores operations — they interface: Correct: ERP is immediate emergency; BCP restores operations; they interface. | Identical documents always: They are related, not identical. | ERP is only TRI: TRI is EPCRA reporting — not ERP. | BCP is only LOTO: LOTO is energy isolation — not BCP.",
    "STEM",
    "Exam",
    [
      "Correct: ERP is immediate emergency; BCP restores operations; they interface.",
      "They are related, not identical.",
      "TRI is EPCRA reporting — not ERP.",
      "LOTO is energy isolation — not BCP.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "BIA identifies critical activities and impacts over time. BCP/BCMS (ISO 22301 family concepts) sets continuity strategies to meet recovery objectives. RTO = time to restore activity; RPO = tolerable data loss window.... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "The board sets RTO = 8 h for Order-to-Cash but funds no alternate site, staff, or data strategy. Best call?",
    [
      "Objective without means — incomplete",
      "Perfect BCMS",
      "Replaces BIA",
      "Equals MTTR always",
    ],
    0,
    "Core Rule: classify the last sentence, then apply the topic rule. Calculation Steps: None unless numbers appear — then compute carefully. Standards Cited: CSP-11 teaching for this class. Why Each Distractor Fails: Objective without means — incomplete: Correct: an RTO without resources/strategies is incomplete. | Perfect BCMS: Not perfect — means are missing. | Replaces BIA: RTO does not replace BIA. | Equals MTTR always: MTTR is repair time, not RTO by definition.",
    "STEM",
    "Exam",
    [
      "Correct: an RTO without resources/strategies is incomplete.",
      "Not perfect — means are missing.",
      "RTO does not replace BIA.",
      "MTTR is repair time, not RTO by definition.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "BIA identifies critical activities and impacts over time. BCP/BCMS (ISO 22301 family concepts) sets continuity strategies to meet recovery objectives. RTO = time to restore activity; RPO = tolerable data loss window.... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "The continuity binder has never been exercised. A tabletop is proposed. Why does the exercise matter?",
    [
      "Finds gaps before a real disruption",
      "Raises C-factor",
      "Computes HW FL",
      "Sets PEL",
    ],
    0,
    "Core Rule: classify the last sentence, then apply the topic rule. Calculation Steps: None unless numbers appear — then compute carefully. Standards Cited: CSP-11 teaching for this class. Why Each Distractor Fails: Finds gaps before a real disruption: Correct: exercises find gaps before a real disruption (PDCA). | Raises C-factor: Friction-loss C-factor is fire hydraulics. | Computes HW FL: Hazen-Williams is not BCMS. | Sets PEL: OELs are not continuity tests.",
    "STEM",
    "Exam",
    [
      "Correct: exercises find gaps before a real disruption (PDCA).",
      "Friction-loss C-factor is fire hydraulics.",
      "Hazen-Williams is not BCMS.",
      "OELs are not continuity tests.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "BIA identifies critical activities and impacts over time. BCP/BCMS (ISO 22301 family concepts) sets continuity strategies to meet recovery objectives. RTO = time to restore activity; RPO = tolerable data loss window.... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "A stem says VERIFY the ISO 22301 edition before citing clause numbers. What does that instruction mean?",
    [
      "Confirm clause/edition expectations from stem/reference",
      "Invent RTO=0 always",
      "Skip BIA",
      "Use Bun scripts only",
    ],
    0,
    "Core Rule: classify the last sentence, then apply the topic rule. Calculation Steps: None unless numbers appear — then compute carefully. Standards Cited: CSP-11 teaching for this class. Why Each Distractor Fails: Confirm clause/edition expectations from stem/reference: Correct: use the stem/reference edition — do not invent clauses. | Invent RTO=0 always: Inventing RTO=0 is not VERIFY discipline. | Skip BIA: Skipping BIA violates the method. | Use Bun scripts only: Tooling distractor — irrelevant.",
    "STEM",
    "Exam",
    [
      "Correct: use the stem/reference edition — do not invent clauses.",
      "Inventing RTO=0 is not VERIFY discipline.",
      "Skipping BIA violates the method.",
      "Tooling distractor — irrelevant.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "BIA identifies critical activities and impacts over time. BCP/BCMS (ISO 22301 family concepts) sets continuity strategies to meet recovery objectives. RTO = time to restore activity; RPO = tolerable data loss window.... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "BIA shows a single-source catalyst supplier with 14-day lead time and RTO = 72 h. Best continuity lever still open?",
    [
      "Alternate supplier/strategy from BIA risk",
      "Poster only",
      "Increase MTTR on purpose",
      "Ignore RPO",
    ],
    0,
    "Core Rule: classify the last sentence, then apply the topic rule. Calculation Steps: None unless numbers appear — then compute carefully. Standards Cited: CSP-11 teaching for this class. Why Each Distractor Fails: Alternate supplier/strategy from BIA risk: Correct: diversify/alternate supply from the BIA risk. | Poster only: Poster is admin theater. | Increase MTTR on purpose: Raising MTTR worsens availability. | Ignore RPO: Ignoring RPO leaves data risk open.",
    "HIER",
    "Exam",
    [
      "Correct: diversify/alternate supply from the BIA risk.",
      "Poster is admin theater.",
      "Raising MTTR worsens availability.",
      "Ignoring RPO leaves data risk open.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "BIA identifies critical activities and impacts over time. BCP/BCMS (ISO 22301 family concepts) sets continuity strategies to meet recovery objectives. RTO = time to restore activity; RPO = tolerable data loss window.... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "RPO is 1 hour for MES recipes, but IT only runs nightly backups. Best evaluation?",
    [
      "Likely miss the RPO",
      "Automatically meet RPO",
      "Equal SWPPP",
      "Equal ETA sum rule",
    ],
    0,
    "Core Rule: classify the last sentence, then apply the topic rule. Calculation Steps: None unless numbers appear — then compute carefully. Standards Cited: CSP-11 teaching for this class. Why Each Distractor Fails: Likely miss the RPO: Correct: 24 h backup cadence cannot honor a 1 h RPO. | Automatically meet RPO: Does not automatically meet a 1 h RPO. | Equal SWPPP: SWPPP is stormwater — unrelated. | Equal ETA sum rule: ETA boolean math is unrelated.",
    "STEM",
    "Exam",
    [
      "Correct: 24 h backup cadence cannot honor a 1 h RPO.",
      "Does not automatically meet a 1 h RPO.",
      "SWPPP is stormwater — unrelated.",
      "ETA boolean math is unrelated.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "BIA identifies critical activities and impacts over time. BCP/BCMS (ISO 22301 family concepts) sets continuity strategies to meet recovery objectives. RTO = time to restore activity; RPO = tolerable data loss window.... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Leadership wants logo merchandise and a binder cover before any analysis. Best first step for continuity?",
    [
      "BIA to know what matters and when impact hits",
      "Buy logo merchandise",
      "Paint pump",
      "File Tier II as BCP",
    ],
    0,
    "Core Rule: classify the last sentence, then apply the topic rule. Calculation Steps: None unless numbers appear — then compute carefully. Standards Cited: CSP-11 teaching for this class. Why Each Distractor Fails: BIA to know what matters and when impact hits: Correct: BIA first — know critical activities and timed impact. | Buy logo merchandise: Merchandise is theater. | Paint pump: Painting a pump is not continuity analysis. | File Tier II as BCP: Tier II is EPCRA inventory — not a BCP.",
    "STEM",
    "Exam",
    [
      "Correct: BIA first — know critical activities and timed impact.",
      "Merchandise is theater.",
      "Painting a pump is not continuity analysis.",
      "Tier II is EPCRA inventory — not a BCP.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "BIA identifies critical activities and impacts over time. BCP/BCMS (ISO 22301 family concepts) sets continuity strategies to meet recovery objectives. RTO = time to restore activity; RPO = tolerable data loss window.... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Two options both look plausible: a polished shelf binder versus an alternate processing capability sized to the RTO. Prefer?",
    [
      "Resilient design/alternate capability over binder theater",
      "Binder theater",
      "Ignoring exercises",
      "Equating ERP and BCP",
    ],
    0,
    "Core Rule: classify the last sentence, then apply the topic rule. Calculation Steps: None unless numbers appear — then compute carefully. Standards Cited: CSP-11 teaching for this class. Why Each Distractor Fails: Resilient design/alternate capability over binder theater: Correct: resilient design/alternate capability beats binder theater. | Binder theater: Binder without capability fails the RTO. | Ignoring exercises: Skipping exercises leaves gaps hidden. | Equating ERP and BCP: ERP ≠ BCP — do not equate them.",
    "HIER",
    "Exam",
    [
      "Correct: resilient design/alternate capability beats binder theater.",
      "Binder without capability fails the RTO.",
      "Skipping exercises leaves gaps hidden.",
      "ERP ≠ BCP — do not equate them.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "BIA identifies critical activities and impacts over time. BCP/BCMS (ISO 22301 family concepts) sets continuity strategies to meet recovery objectives. RTO = time to restore activity; RPO = tolerable data loss window.... Verify the critical step before accepting a lower-tier control.",
    }
  )
];
