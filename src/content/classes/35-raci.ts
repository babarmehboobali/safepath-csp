import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D2.13";

export const classFields: ClassFields = {
  hook: "A LOTO matrix lists five Accountable names, including the CSP, the insurer, and “everyone.” A contractor is injured because nobody owned the isolation. You are the CSP. The question is what RACI allows.",
  hookOilGas: `A well-control matrix lists five Accountable names, including the CSP, the insurer, and âeveryone.â A contractor is injured because nobody owned the barrier. You are the CSP. The question is what RACI allows.`,
  hookConstruction: `A hoist matrix lists five Accountable names, including the CSP, the insurer, and âeveryone.â A rigger is injured because nobody owned the lift. You are the CSP. The question is what RACI allows.`,
  rule: "RACI: Responsible (does the work), Accountable (one A — the decision owner), Consulted (two-way), Informed (one-way). The CSP is often C on operational isolations, R on SMS design, not A for production. Multiple A’s equal no A. “Everyone” is not a role.",
  modelCaption:
    "Four columns R A C I. One gold cell in A per row. Caption: if two gold cells appear, the row is broken. CSP sits in C for the isolation row, A only for SMS-design rows they truly own.",
  workedCase:
    "Mixer interlock install: A = engineering manager (spec and accept), R = millwrights, C = EHS and operators, I = production planning. CSP as A fails: they cannot allocate millwrights. After install, operations A owns keeping it undefeated.",
  trapsJson: traps(
    "Multiple A’s “for teamwork.”",
    "CSP as A for every energy in the plant.",
    "Insurer or registrar as A.",
  ),
  contrastJson: contrast([
    { looksLike: "R", actually: "Does the task" },
    { looksLike: "A", actually: "One owner — yes/no and resources" },
    { looksLike: "C", actually: "Advice with dialogue — typical EHS on operations" },
    { looksLike: "I", actually: "FYI, no veto" },
  ]),
  mustScoreJson: mustScore(
    "RACI clarifies Responsible, Accountable, Consulted, Informed for each critical activity.",
    "One Accountable owner \u2014 not a committee fog.",
    "Responsible does the work; Accountable owns the outcome.",
    "Gaps and overlaps in RACI create missed critical controls.",
    "Update RACI after MoC and reorganizations.",
    "Contractors need explicit RACI with the host.",
    "RACI does not replace competence \u2014 it assigns it.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "two people think they are Accountable", pick: "name a single Accountable owner" },
    { ifStem: "a critical control has no Responsible party", pick: "assign Responsible and Accountable" },
    { ifStem: "contractor interfaces are unclear", pick: "write host/contractor RACI" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "org chart changed last week", pick: "refresh RACI before assuming coverage" },
  ),

  brief: `RACI: Responsible (does the work), Accountable (one A â the decision owner), Consulted (two-way), Informed (one-way). The CSP is often C on operational isolations, R on SMS design, not A for production. Multiple Aâs equal no A. âEveryoneâ is not a role. If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
RACI: Responsible (does the work), Accountable (one A â the decision owner), Consulted (two-way), Informed (one-way). The CSP is often C on operational isolations, R on SMS design, not A for production. Multiple Aâs equal no A. âEveryoneâ is not a role. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
A LOTO matrix lists five Accountable names, including the CSP, the insurer, and âeveryone.â A contractor is injured because nobody owned the isolation. You are the CSP. The question is what RACI allows. Oil-and-gas skin: A well-control matrix lists five Accountable names, including the CSP, the insurer, and âeveryone.â A contractor is injured because nobody owned the barrier. You are the CSP. Construction skin: A hoist matrix lists five Accountable names, including the CSP, the insurer, and âeveryone.â A rigger is injured because nobody owned the lift. You are the CSP. Work the case: Mixer interlock install: A = engineering manager (spec and accept), R = millwrights, C = EHS and operators, I = production planning. CSP as A fails: they cannot allocate millwrights. After install, operations A owns keeping it undefeated. Classic traps: Multiple A’s “for teamwork.”; CSP as A for every energy in the plant.; Insurer or registrar as A.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for raci. Verify whether a higher system or design fix is still open. Contrast labels: R is actually Does the task; A is actually One owner — yes/no and resources; C is actually Advice with dialogue — typical EHS on operations; I is actually FYI, no veto. If the stem shows two people think they are Accountable, pick name a single Accountable owner. If the stem shows a critical control has no Responsible party, pick assign Responsible and Accountable. If the stem shows contractor interfaces are unclear, pick write host/contractor RACI. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows org chart changed last week, pick refresh RACI before assuming coverage. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `RACI — how many A’s on a LOTO row sits in CSP-11 Domain 2 Management Systems. The exam tests whether you apply the rule when a package already looks complete. Core rule: RACI: Responsible (does the work), Accountable (one A â the decision owner), Consulted (two-way), Informed (one-way). The CSP is often C on operational isolations, R on SMS design, not A for production. Multiple Aâs equal no A. âEveryoneâ is not a role. Field context: A LOTO matrix lists five Accountable names, including the CSP, the insurer, and âeveryone.â A contractor is injured because nobody owned the isolation. You are the CSP. The question is what RACI allows. The oil-and-gas skin shifts the same decision into production pressure: A well-control matrix lists five Accountable names, including the CSP, the insurer, and âeveryone.â A contractor is injured because nobody owned the barrier. You are the CSP. The construction skin shifts it into schedule and trade stacking: A hoist matrix lists five Accountable names, including the CSP, the insurer, and âeveryone.â A rigger is injured because nobody owned the lift. You are the CSP. Model caption for this class: Four columns R A C I. One gold cell in A per row. Caption: if two gold cells appear, the row is broken. CSP sits in C for the isolation row, A only for SMS-design rows they truly own. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) RACI clarifies Responsible, Accountable, Consulted, Informed for each critical activity. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) One Accountable owner — not a committee fog. (3) Responsible does the work; Accountable owns the outcome. (4) Gaps and overlaps in RACI create missed critical controls. (5) Update RACI after MoC and reorganizations. (6) Contractors need explicit RACI with the host. (7) RACI does not replace competence — it assigns it. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Mixer interlock install: A = engineering manager (spec and accept), R = millwrights, C = EHS and operators, I = production planning. CSP as A fails: they cannot allocate millwrights. After install, operations A owns keeping it undefeated. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Multiple A’s “for teamwork.”; CSP as A for every energy in the plant.; Insurer or registrar as A.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “R” is really Does the task; “A” is really One owner — yes/no and resources; “C” is really Advice with dialogue — typical EHS on operations; “I” is really FYI, no veto. Stem-if-then map: if two people think they are Accountable → name a single Accountable owner; if a critical control has no Responsible party → assign Responsible and Accountable; if contractor interfaces are unclear → write host/contractor RACI; if two answers work → higher hierarchy / system / design; if org chart changed last week → refresh RACI before assuming coverage. Scoring favors evidence, owners, verification, and hierarchy-smart controls on raci. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "RACI — how many A’s on a LOTO row?",
  cardBack:
    "One. Accountable owns the yes/no. CSP is often Consulted on operations. “Everyone” and the insurer are not A. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence defines R/A/C/I, insists on exactly one A, and places the CSP as C on typical operational isolations.",
};

export const items: ClassItem[] = [
  exam(T, "A LOTO row lists A: CSP, superintendent, insurer, “everyone.” Best correction?", [
    "Keep multiple A’s for teamwork.",
    "One A: the line/process owner who can stop work and allocate isolation resources; CSP typically C; insurer not A.",
    "Make the registrar A.",
    "Make TRIR A.",
  ], 1, "Exactly one A, matched to resource control.", "STEM", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "RACI: Responsible (does the work), Accountable (one A — the decision owner), Consulted (two-way), Informed (one-way). The CSP is often C on operational isolations, R on SMS design, not A for production. Multiple A’s e... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Who is typically Accountable for specifying a guard on a new press purchase?", [
    "The CSP as personal A for all machines.",
    "The engineering/operations owner of the purchase, with EHS Consulted on hierarchy.",
    "The insurer.",
    "The observation-card vendor.",
  ], 1, "A sits with the buyer who can write the PO. EHS is C.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "RACI: Responsible (does the work), Accountable (one A — the decision owner), Consulted (two-way), Informed (one-way). The CSP is often C on operational isolations, R on SMS design, not A for production. Multiple A’s e... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Difference between Consulted and Informed.", [
    "None.",
    "C is two-way influence before the decision; I is one-way after.",
    "I can veto; C cannot.",
    "C is only for 14001.",
  ], 1, "C = dialogue; I = FYI.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "RACI: Responsible (does the work), Accountable (one A — the decision owner), Consulted (two-way), Informed (one-way). The CSP is often C on operational isolations, R on SMS design, not A for production. Multiple A’s e... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A contractor works on a host process. Host RACI has no A for coordinating energy control. Result?", [
    "Each worker is automatically A.",
    "A hole: host must A the coordinated energy-control program; employer A’s their people’s locks — multi-employer, not “everyone.”",
    "The insurer becomes A.",
    "ISO 19011 becomes A.",
  ], 1, "Multi-employer accountability cannot be blank.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "RACI: Responsible (does the work), Accountable (one A — the decision owner), Consulted (two-way), Informed (one-way). The CSP is often C on operational isolations, R on SMS design, not A for production. Multiple A’s e... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Team assigns A using worst FMEA RPN so the PPE coordinator is A for a chemical substitution decision. Error?", [
    "None — highest RPN owns A.",
    "Wrong tool: RPN does not assign accountability; A belongs to the person who can change the chemical/process.",
    "They should use 100,000 hours.",
    "They should use 24.45.",
  ], 1, "TOOL: RPN ≠ RACI.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "RACI: Responsible (does the work), Accountable (one A — the decision owner), Consulted (two-way), Informed (one-way). The CSP is often C on operational isolations, R on SMS design, not A for production. Multiple A’s e... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Finance wants the insurance broker as Accountable for machine guarding because they “own risk.” Best CSP position?", [
    "Accept — transfer includes A.",
    "Reject: broker may be I/C for financing; A for the guard is the operational/engineering owner.",
    "Accept if the limit is high.",
    "Accept if the premium falls.",
  ], 1, "FIN: financing role ≠ control A.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "RACI: Responsible (does the work), Accountable (one A — the decision owner), Consulted (two-way), Informed (one-way). The CSP is often C on operational isolations, R on SMS design, not A for production. Multiple A’s e... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Last sentence: only the night superintendent can stop the unit until 07:00. Interlock fails at 02:00. Who is A right now?", [
    "The daytime VP on the RACI poster.",
    "The night superintendent — A follows the person who can actually stop and spend tonight.",
    "The CSP at home as permanent A.",
    "“Everyone on nights.”",
  ], 1, "STEM: live A is the present resource owner.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "RACI: Responsible (does the work), Accountable (one A — the decision owner), Consulted (two-way), Informed (one-way). The CSP is often C on operational isolations, R on SMS design, not A for production. Multiple A’s e... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a grain elevator maintenance day. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: MoC authorization row. Best RACI sketch.", [
    "A = everyone; R = nobody.",
    "A = process owner; R = craft installing; C = EHS and affected operators; I = document control/planning.",
    "A = insurer; R = registrar.",
    "A = RPN; R = TRIR.",
  ], 1, "Process owner authorizes change. EHS is C.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "RACI: Responsible (does the work), Accountable (one A — the decision owner), Consulted (two-way), Informed (one-way). The CSP is often C on operational isolations, R on SMS design, not A for production. Multiple A’s e... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "CSP listed as Responsible for personally performing every try-out in a 2,000-person plant. Problem?", [
    "None — R scales infinitely.",
    "R must be realistic: operators/crafts R the try-out; CSP R the program design/audit sample, not every isolation.",
    "Move the CSP to I only.",
    "Add the CSP as a second A.",
  ], 1, "RACI must match capacity.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "RACI: Responsible (does the work), Accountable (one A — the decision owner), Consulted (two-way), Informed (one-way). The CSP is often C on operational isolations, R on SMS design, not A for production. Multiple A’s e... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A row for 1904 fatality notification has A = “legal next week.” Clock issue?", [
    "Legal cadence is fine.",
    "A must be a named on-duty role that can call OSHA within 8 hours — not a weekly committee.",
    "24 hours is enough if A is legal.",
    "7 days if A is legal.",
  ], 1, "TIME: 8-hour fatality clock needs a live A.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "RACI: Responsible (does the work), Accountable (one A — the decision owner), Consulted (two-way), Informed (one-way). The CSP is often C on operational isolations, R on SMS design, not A for production. Multiple A’s e... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Workers Consulted on control selection under 45001/Z10. Management Informs them after PPE is already bought. Issue?", [
    "I satisfies participation.",
    "Participation required C (or stronger) before the decision; I after the fact is not consultation.",
    "Workers should be A for capital.",
    "Workers should be the insurer.",
  ], 1, "C vs I is the participation miss.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "RACI: Responsible (does the work), Accountable (one A — the decision owner), Consulted (two-way), Informed (one-way). The CSP is often C on operational isolations, R on SMS design, not A for production. Multiple A’s e... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Two directors both marked A so “either can sign the guard PO.” Neither signs; PPE ships. Lesson?", [
    "Two A’s increase reliability.",
    "Two A’s = no A. Pick one accountable signer who can fund the higher-order control.",
    "Make the CSP a third A.",
    "Make RPN the signer.",
  ], 1, "HIER + RACI: split A delayed engineering.", "HIER", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "RACI: Responsible (does the work), Accountable (one A — the decision owner), Consulted (two-way), Informed (one-way). The CSP is often C on operational isolations, R on SMS design, not A for production. Multiple A’s e... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
