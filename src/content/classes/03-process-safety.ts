import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D1.02";

export const classFields: ClassFields = {
  hook: "A 4,000-gal solvent reactor is being added to the batch plant. Operations wants more gas detectors and a bigger fire team. You are on the P&ID review. The question is whether that inventory must sit in the building at all.",
  hookOilGas: `A 4,000-gal solvent surge drum is being added to a process unit. Operations wants more gas detectors and a bigger fire team. You are on the P&ID review. The question is whether that inventory must sit in the unit at all.`,
  hookConstruction: `A 4,000-gal solvent storage tank is being added to a site batch plant. Operations wants more gas detectors and a bigger fire team. You are on the P&ID review. The question is whether that inventory must sit on the pad at all.`,
  rule: "Inherent safety first: minimize, substitute, moderate, simplify. Then independent protection layers that fail differently. Detectors and the fire team are outer rings — they are not a substitute for inventory, relief, and SIS.",
  modelCaption:
    "Onion of layers from the center out: Process (inherent) → BPCS / basic control → Alarms and admin → SIS → Relief and passive (dikes, fireproofing) → Emergency response. Caption: each ring must still work if the inner ring fails; the fire team is not an IPL if it is not independent, timely, and adequate.",
  workedCase:
    "4,000-gal flammable batch. (1) Cut inventory or go aqueous? (2) If solvent remains, size relief independent of the BPCS, add SIS on independent sensors, dike the pad. (3) Detectors and ERT last. “More LEL heads” loses if inventory can still drop.",
  trapsJson: traps(
    "Calling more detectors process safety.",
    "Using the same transmitter for control and SIS.",
    "Treating the fire brigade as an independent protection layer with no timing or capacity analysis.",
  ),
  contrastJson: contrast([
    { looksLike: "Extra LEL detectors", actually: "Outer ring / detection — not inherent safety" },
    { looksLike: "Cut batch 4,000 → 400 gal", actually: "Minimize / inherent safety" },
    { looksLike: "SIS on independent sensors", actually: "Independent protection layer" },
    { looksLike: "Same PLC does control and trip", actually: "Not independent — shared failure mode" },
  ]),
  mustScoreJson: mustScore(
    "Inherent safety first: minimize, substitute, moderate, simplify.",
    "Independent protection layers must fail differently.",
    "Shared transmitters or shared PLC logic are not independent.",
    "Detectors and the fire team are outer rings.",
    "Relief and dikes still need correct sizing and independence.",
    "More LEL heads lose if inventory can still drop.",
    "Emergency response is not a substitute for SIS and relief.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "inventory can still be cut or chemistry substituted", pick: "inherent safety before more detectors" },
    { ifStem: "the same transmitter feeds control and SIS", pick: "reject \u2014 not independent" },
    { ifStem: "operations wants a bigger fire team only", pick: "fund inner layers first" },
    { ifStem: "solvent remains after minimize", pick: "relief, SIS, and dike before ERT expansion" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
  ),

  brief: `Inherent safety first: minimize, substitute, moderate, simplify. Then independent protection layers that fail differently. Detectors and the fire team are outer rings â they are not a substitute for inventory, relief, and SIS. If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Inherent safety first: minimize, substitute, moderate, simplify. Then independent protection layers that fail differently. Detectors and the fire team are outer rings â they are not a substitute for inventory, relief, and SIS. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
A 4,000-gal solvent reactor is being added to the batch plant. Operations wants more gas detectors and a bigger fire team. You are on the P&ID review. The question is whether that inventory must sit in the building at all. Oil-and-gas skin: A 4,000-gal solvent surge drum is being added to a process unit. The question is whether that inventory must sit in the unit at all. Construction skin: A 4,000-gal solvent storage tank is being added to a site batch plant. The question is whether that inventory must sit on the pad at all. Work the case: 4,000-gal flammable batch. (1) Cut inventory or go aqueous? (2) If solvent remains, size relief independent of the BPCS, add SIS on independent sensors, dike the pad. (3) Detectors and ERT last. âMore LEL headsâ loses if inventory can still drop. Classic traps: Calling more detectors process safety.; Using the same transmitter for control and SIS.; Treating the fire brigade as an independent protection layer with no timing or capacity analysis.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for process safety. Verify whether a higher system or design fix is still open. Contrast labels: Extra LEL detectors is actually Outer ring / detection — not inherent safety; Cut batch 4,000 → 400 gal is actually Minimize / inherent safety; SIS on independent sensors is actually Independent protection layer; Same PLC does control and trip is actually Not independent — shared failure mode. If the stem shows inventory can still be cut or chemistry substituted, pick inherent safety before more detectors. If the stem shows the same transmitter feeds control and SIS, pick reject \u2014 not independent. If the stem shows operations wants a bigger fire team only, pick fund inner layers first. If the stem shows solvent remains after minimize, pick relief, SIS, and dike before ERT expansion. If the stem shows two answers work, pick higher hierarchy / system / design. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Process safety — shrink the center or stack independent rings sits in CSP-11 Domain 1 Applied Safety Technology. The exam tests whether you apply the rule when a package already looks complete. Core rule: Inherent safety first: minimize, substitute, moderate, simplify. Then independent protection layers that fail differently. Detectors and the fire team are outer rings â they are not a substitute for inventory, relief, and SIS. Field context: A 4,000-gal solvent reactor is being added to the batch plant. Operations wants more gas detectors and a bigger fire team. You are on the P&ID review. The question is whether that inventory must sit in the building at all. The oil-and-gas skin shifts the same decision into production pressure: A 4,000-gal solvent surge drum is being added to a process unit. The question is whether that inventory must sit in the unit at all. The construction skin shifts it into schedule and trade stacking: A 4,000-gal solvent storage tank is being added to a site batch plant. The question is whether that inventory must sit on the pad at all. Model caption for this class: Onion of layers from the center out: Process (inherent) â BPCS / basic control â Alarms and admin â SIS â Relief and passive (dikes, fireproofing) â Emergency response. Caption: each ring must still work if the inner ring fails; the fire team is not an IPL if it is not independent, timely, and adequate. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Inherent safety first: minimize, substitute, moderate, simplify. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Independent protection layers must fail differently. (3) Shared transmitters or shared PLC logic are not independent. (4) Detectors and the fire team are outer rings. (5) Relief and dikes still need correct sizing and independence. (6) More LEL heads lose if inventory can still drop. (7) Emergency response is not a substitute for SIS and relief. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: 4,000-gal flammable batch. (1) Cut inventory or go aqueous? (2) If solvent remains, size relief independent of the BPCS, add SIS on independent sensors, dike the pad. (3) Detectors and ERT last. âMore LEL headsâ loses if inventory can still drop. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Calling more detectors process safety.; Using the same transmitter for control and SIS.; Treating the fire brigade as an independent protection layer with no timing or capacity analysis.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Extra LEL detectors” is really Outer ring / detection — not inherent safety; “Cut batch 4,000 → 400 gal” is really Minimize / inherent safety; “SIS on independent sensors” is really Independent protection layer; “Same PLC does control and trip” is really Not independent — shared failure mode. Stem-if-then map: if inventory can still be cut or chemistry substituted → inherent safety before more detectors; if the same transmitter feeds control and SIS → reject \u2014 not independent; if operations wants a bigger fire team only → fund inner layers first; if solvent remains after minimize → relief, SIS, and dike before ERT expansion; if two answers work → higher hierarchy / system / design. Scoring favors evidence, owners, verification, and hierarchy-smart controls on process safety. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Process safety — shrink the center or stack independent rings?",
  cardBack:
    "Inherent safety first (minimize / substitute / moderate / simplify). Then independent layers. Attractive wrong answer: more detectors or a bigger fire team while inventory can still drop. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence includes inherent safety (inventory/substitute) and independent layers that do not share failure modes, with emergency response last.",
};

export const items: ClassItem[] = [
  exam(T, "P&ID review for a new 4,000-gal solvent batch. Operations budget is either ten additional LEL heads and an expanded ERT, or a 400-gal semi-batch with the same annual throughput. Best process-safety recommendation?", [
    "Install the extra LEL heads — detection is process safety.",
    "Specify 400-gal semi-batch to minimize inventory.",
    "Expand the fire team and keep 4,000 gal.",
    "Add a spill SOP only.",
  ], 1, "Minimize at the center of the onion. Detectors and ERT are outer rings around an inventory you did not have to keep.", "HIER", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "OSHA 29 CFR 1910.119 Process Safety Management",
      fieldTakeaway: "Inherent safety first: minimize, substitute, moderate, simplify. Then independent protection layers that fail differently. Detectors and the fire team are outer rings — they are not a substitute for inventory, relief,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "The BPCS already trips the feed on high level. The project proposes to use the same level transmitter as the SIS high-high. Best CSP comment?", [
    "Approve — two setpoints on one transmitter are two layers.",
    "Reject — SIS must be independent of the BPCS sensor/logic/final element or it is not a separate layer.",
    "Approve if the alarm is loud.",
    "Replace SIS with a bigger dike only.",
  ], 1, "Independence is the scoring key. One transmitter with two alarms is one failure mode.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "OSHA 29 CFR 1910.119 Process Safety Management",
      fieldTakeaway: "Inherent safety first: minimize, substitute, moderate, simplify. Then independent protection layers that fail differently. Detectors and the fire team are outer rings — they are not a substitute for inventory, relief,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Which analysis is the right design aid to test whether a proposed SIS, relief valve, and dike actually make a 10⁻⁴/yr target before the P&ID is frozen?", [
    "FMEA scored only on operator PPE donning.",
    "Behavior-based observation after startup.",
    "LOPA (or equivalent independent-layer review) on the remaining scenarios, with findings written onto the P&ID.",
    "Wait for the first loss of containment, then FTA.",
  ], 2, "LOPA/layer review is the tool that still changes the drawing. FMEA on PPE and post-event FTA are the wrong tool and the wrong time.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "OSHA 29 CFR 1910.119 Process Safety Management",
      fieldTakeaway: "Inherent safety first: minimize, substitute, moderate, simplify. Then independent protection layers that fail differently. Detectors and the fire team are outer rings — they are not a substitute for inventory, relief,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Aqueous substitute is feasible. Project manager wants to keep solvent and “meet the PEL with better ventilation.” Best CSP position?", [
    "Ventilation to the PEL is enough; PEL is the process-safety standard.",
    "Specify aqueous; a PEL is a legal exposure limit, not permission to keep avoidable inventory.",
    "Keep solvent because the TLV is only advisory.",
    "Keep solvent and add medical surveillance.",
  ], 1, "PEL vs TLV is a side show. Inherent substitution still open beats exposure management.", "PELTLV",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "OSHA 29 CFR 1910.119 Process Safety Management",
      fieldTakeaway: "Inherent safety first: minimize, substitute, moderate, simplify. Then independent protection layers that fail differently. Detectors and the fire team are outer rings — they are not a substitute for inventory, relief,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Finance offers extra property insurance instead of a relief-valve upgrade that the HAZOP marked as inadequate. Best position?", [
    "Accept insurance as an independent protection layer.",
    "Reject: insurance is risk financing, not a process-safety layer. Size the relief.",
    "Keep the undersized valve and raise the deductible.",
    "Call the premium a leading process-safety metric.",
  ], 1, "Transfer/share is not an IPL. FIN distractor beside a design decision.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "OSHA 29 CFR 1910.119 Process Safety Management",
      fieldTakeaway: "Inherent safety first: minimize, substitute, moderate, simplify. Then independent protection layers that fail differently. Detectors and the fire team are outer rings — they are not a substitute for inventory, relief,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Last sentence: “Client specification freezes 4,000-gal solvent inventory.” Remaining budget: independent SIS and sized relief, or ten more detectors and a larger ERT. Best remaining move?", [
    "Detectors and ERT — inventory is frozen so outer rings become the center.",
    "Independent SIS and sized relief — highest remaining engineered layers.",
    "Cancel the unit.",
    "A spill drill only.",
  ], 1, "The last sentence closed minimize. Remaining design is independent engineered layers, not a busier outer ring.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "OSHA 29 CFR 1910.119 Process Safety Management",
      fieldTakeaway: "Inherent safety first: minimize, substitute, moderate, simplify. Then independent protection layers that fail differently. Detectors and the fire team are outer rings — they are not a substitute for inventory, relief,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Which pair shares a failure mode and therefore does not count as two layers?", [
    "Spring-loaded relief valve and a remote dike.",
    "BPCS interlock and an SIS that copies the same transmitter into the same PLC.",
    "SIS with dedicated sensors and a sized relief valve.",
    "Inventory reduction and a fireproofed structure.",
  ], 1, "Same brain, same sensor: one layer wearing two nameplates.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "OSHA 29 CFR 1910.119 Process Safety Management",
      fieldTakeaway: "Inherent safety first: minimize, substitute, moderate, simplify. Then independent protection layers that fail differently. Detectors and the fire team are outer rings — they are not a substitute for inventory, relief,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A runaway scenario needs a relief path. The team proposes a procedure: “operator opens the vent within 3 minutes of the alarm.” Best CSP comment at design review?", [
    "Credit the procedure as an IPL equivalent to a relief valve.",
    "Do not credit an operator action with an unproven 3-minute window as a substitute for sized relief hardware.",
    "Credit it if the alarm is red.",
    "Credit it if the operator is a supervisor.",
  ], 1, "Admin action with heroic timing is not a relief device. Outer ring, not the center.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "OSHA 29 CFR 1910.119 Process Safety Management",
      fieldTakeaway: "Inherent safety first: minimize, substitute, moderate, simplify. Then independent protection layers that fail differently. Detectors and the fire team are outer rings — they are not a substitute for inventory, relief,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Moderate the hazard on a new hydrogenation. Which option is inherent/moderate rather than add-on detection?", [
    "Additional hydrogen detectors in the aisle.",
    "Lower operating pressure and a smaller in-plant hydrogen inventory, with tube-trailer kept outside.",
    "A louder hydrogen alarm.",
    "A larger ERT.",
  ], 1, "Lower pressure and less on-site inventory moderate the hazard. Detectors are outer rings.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "OSHA 29 CFR 1910.119 Process Safety Management",
      fieldTakeaway: "Inherent safety first: minimize, substitute, moderate, simplify. Then independent protection layers that fail differently. Detectors and the fire team are outer rings — they are not a substitute for inventory, relief,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "HAZOP is scheduled after steel is ordered “to document residual risk.” Best use of process-safety analysis?", [
    "Keep that schedule — documentation is the purpose.",
    "Pull the HAZOP forward so findings can still change layout, inventory, and P&IDs.",
    "Replace HAZOP with a PPE FMEA.",
    "Skip analysis and buy more detectors.",
  ], 1, "Analysis that cannot change the drawing is a binder, not process safety.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "OSHA 29 CFR 1910.119 Process Safety Management",
      fieldTakeaway: "Inherent safety first: minimize, substitute, moderate, simplify. Then independent protection layers that fail differently. Detectors and the fire team are outer rings — they are not a substitute for inventory, relief,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A diked pad is 40 ft by 20 ft by 2 ft high. The tank footprint is 8 ft by 8 ft and the stem requires subtracting it. What net containment volume should the CSP check before calling the dike “adequate”?", [
    "1,600 ft³ (ignoring footprint).",
    "1,536 ft³ (L×W×H minus 64 ft² × 2 ft).",
    "800 m³ (mixed units).",
    "64 ft³ (footprint only).",
  ], 1, "V = 40×20×2 = 1,600; subtract 8×8×2 = 64; net 1,536 ft³. UNIT/STEM: mixed SI or forgetting the last-sentence footprint.", "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "OSHA 29 CFR 1910.119 Process Safety Management",
      fieldTakeaway: "Inherent safety first: minimize, substitute, moderate, simplify. Then independent protection layers that fail differently. Detectors and the fire team are outer rings — they are not a substitute for inventory, relief,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a refinery coker outage. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Least consistent with process-safety design.", [
    "Substitute a non-reactive solvent in concept.",
    "Independent SIS and sized relief on the remaining solvent service.",
    "A laminated “think process safety” card after three near-misses, with no P&ID change.",
    "Remote siting of the remaining inventory.",
  ], 2, "A poster after near-misses is not a layer and not inherent safety.", "HIER", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "OSHA 29 CFR 1910.119 Process Safety Management",
      fieldTakeaway: "Inherent safety first: minimize, substitute, moderate, simplify. Then independent protection layers that fail differently. Detectors and the fire team are outer rings — they are not a substitute for inventory, relief,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
