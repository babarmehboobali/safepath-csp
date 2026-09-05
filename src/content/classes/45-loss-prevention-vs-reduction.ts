import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D3.03";

export const classFields: ClassFields = {
  hook: "Finance labels sprinklers “loss prevention” and a grounding program “loss reduction,” then offers both as equivalent to a larger umbrella. You are the CSP. The question is which control changes frequency, which changes severity, and which of those is not insurance.",
  hookOilGas: `Finance labels deluge âloss preventionâ and bonding âloss reduction,â then offers both as equivalent to a larger umbrella. You are the CSP. The question is which control changes frequency, which changes severity, and which of those is not insurance.`,
  hookConstruction: `Finance labels a fire-rated hoistway âloss preventionâ and housekeeping of scrap lumber âloss reduction,â then offers both as equivalent to a larger OCIP. You are the CSP. The question is which control changes frequency, which changes severity, and which of those is not insurance.`,
  rule: "Inside Reduce: loss prevention cuts frequency (stop the event from starting — ignition control, substitution, guarding, bonding). Loss reduction cuts severity after ignition or release (sprinklers, dikes, deluge, emergency isolation, medical). Both are controls. Transfer/retain are not either. A stem that names both prevention and reduction is asking you to keep them distinct and still above insurance.",
  modelCaption:
    "Timeline: before event (prevention: remove fuel/ignition/energy) → event → after start (reduction: suppress, contain, treat). A side box “umbrella” stamped FIN. Caption: two Reduce tactics in one drawing; neither is a policy.",
  workedCase:
    "Flammable washer. Prevention: aqueous substitute (frequency → ~0) and bonding/grounding if solvent remains. Reduction: automatic sprinklers, drainage to a closed tank, emergency stops. Finance packet: deductible up (retain) + umbrella (transfer). CSP: name prevention and reduction as the Reduce pair; do not let the retain+transfer pair impersonate them. Sprinklers do not make substitution optional if substitution is still open.",
  trapsJson: traps(
    "Calling insurance “loss prevention.”",
    "Calling sprinklers “prevention” when they act after ignition.",
    "Skipping prevention because reduction (foam, ER) looks cheaper this quarter.",
  ),
  contrastJson: contrast([
    { looksLike: "Loss prevention", actually: "Lower frequency — event does not start" },
    { looksLike: "Loss reduction", actually: "Lower severity — event is smaller after it starts" },
    { looksLike: "Retain / transfer", actually: "Who pays — not frequency or severity of energy" },
    { looksLike: "Avoid", actually: "Do not run the activity at all — strongest prevention" },
  ]),
  mustScoreJson: mustScore(
    "Loss prevention lowers frequency; loss reduction lowers severity after start.",
    "Sprinklers often reduce severity; eliminating fuel prevents the fire loss.",
    "Both can be valid; hierarchy and residual risk decide the mix.",
    "Do not label severity reducers as prevention when the stem asks prevention.",
    "Detection without control may be weak reduction.",
    "Design can achieve prevention earlier than emergency reduction.",
    "Measure the outcome you claimed (frequency vs severity).",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "the stem asks prevention and offers only sprinklers", pick: "prefer fuel/ignition elimination when open" },
    { ifStem: "frequency remains high after severity reducers", pick: "add prevention controls" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "only detection is proposed", pick: "add prevention or mitigation that actually reduces loss" },
    { ifStem: "design can remove the energy", pick: "prevention by design" },
  ),

  brief: `Inside Reduce: loss prevention cuts frequency (stop the event from starting â ignition control, substitution, guarding, bonding). Loss reduction cuts severity after ignition or release (sprinklers, dikes, deluge, emergency isolation, medical). Both are controls. Transfer/retain are not either. A stem that names both prevention and reduction is asking you to keep them distinct and still If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Inside Reduce: loss prevention cuts frequency (stop the event from starting â ignition control, substitution, guarding, bonding). Loss reduction cuts severity after ignition or release (sprinklers, dikes, deluge, emergency isolation, medical). Both are controls. Transfer/retain are not either. A stem that names both prevention and reduction is asking you to keep them distinct and still above insurance. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
Finance labels sprinklers âloss preventionâ and a grounding program âloss reduction,â then offers both as equivalent to a larger umbrella. You are the CSP. The question is which control changes frequency, which changes severity, and which of those is not insurance. Oil-and-gas skin: Finance labels deluge âloss preventionâ and bonding âloss reduction,â then offers both as equivalent to a larger umbrella. You are the CSP. Construction skin: Finance labels a fire-rated hoistway âloss preventionâ and housekeeping of scrap lumber âloss reduction,â then offers both as equivalent to a larger OCIP. You are the CSP. Work the case: Flammable washer. Prevention: aqueous substitute (frequency â ~0) and bonding/grounding if solvent remains. Reduction: automatic sprinklers, drainage to a closed tank, emergency stops. Finance packet: deductible up (retain) + umbrella (transfer). CSP: name prevention and reduction as the Reduce pair; do not let the retain+transfer pair impersonate them. Sprinklers do not make substitution optional if substitution is still open. Classic traps: Calling insurance “loss prevention.”; Calling sprinklers “prevention” when they act after ignition.; Skipping prevention because reduction (foam, ER) looks cheaper this quarter.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for loss prevention vs reduction. Verify whether a higher system or design fix is still open. Contrast labels: Loss prevention is actually Lower frequency — event does not start; Loss reduction is actually Lower severity — event is smaller after it starts; Retain / transfer is actually Who pays — not frequency or severity of energy; Avoid is actually Do not run the activity at all — strongest prevention. If the stem shows the stem asks prevention and offers only sprinklers, pick prefer fuel/ignition elimination when open. If the stem shows frequency remains high after severity reducers, pick add prevention controls. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows only detection is proposed, pick add prevention or mitigation that actually reduces loss. If the stem shows design can remove the energy, pick prevention by design. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Sprinklers vs bonding vs umbrella — prevention, reduction, or transfer sits in CSP-11 Domain 3 Risk Management. The exam tests whether you apply the rule when a package already looks complete. Core rule: Inside Reduce: loss prevention cuts frequency (stop the event from starting â ignition control, substitution, guarding, bonding). Loss reduction cuts severity after ignition or release (sprinklers, dikes, deluge, emergency isolation, medical). Both are controls. Transfer/retain are not either. A stem that names both prevention and reduction is asking you to keep them distinct and still above insurance. Field context: Finance labels sprinklers âloss preventionâ and a grounding program âloss reduction,â then offers both as equivalent to a larger umbrella. You are the CSP. The question is which control changes frequency, which changes severity, and which of those is not insurance. The oil-and-gas skin shifts the same decision into production pressure: Finance labels deluge âloss preventionâ and bonding âloss reduction,â then offers both as equivalent to a larger umbrella. You are the CSP. The construction skin shifts it into schedule and trade stacking: Finance labels a fire-rated hoistway âloss preventionâ and housekeeping of scrap lumber âloss reduction,â then offers both as equivalent to a larger OCIP. You are the CSP. Model caption for this class: Timeline: before event (prevention: remove fuel/ignition/energy) â event â after start (reduction: suppress, contain, treat). A side box âumbrellaâ stamped FIN. Caption: two Reduce tactics in one drawing; neither is a policy. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Loss prevention lowers frequency; loss reduction lowers severity after start. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Sprinklers often reduce severity; eliminating fuel prevents the fire loss. (3) Both can be valid; hierarchy and residual risk decide the mix. (4) Do not label severity reducers as prevention when the stem asks prevention. (5) Detection without control may be weak reduction. (6) Design can achieve prevention earlier than emergency reduction. (7) Measure the outcome you claimed (frequency vs severity). (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Flammable washer. Prevention: aqueous substitute (frequency â ~0) and bonding/grounding if solvent remains. Reduction: automatic sprinklers, drainage to a closed tank, emergency stops. Finance packet: deductible up (retain) + umbrella (transfer). CSP: name prevention and reduction as the Reduce pair; do not let the retain+transfer pair impersonate them. Sprinklers do not make substitution optional if substitution is still open. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Calling insurance “loss prevention.”; Calling sprinklers “prevention” when they act after ignition.; Skipping prevention because reduction (foam, ER) looks cheaper this quarter.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Loss prevention” is really Lower frequency — event does not start; “Loss reduction” is really Lower severity — event is smaller after it starts; “Retain / transfer” is really Who pays — not frequency or severity of energy; “Avoid” is really Do not run the activity at all — strongest prevention. Stem-if-then map: if the stem asks prevention and offers only sprinklers → prefer fuel/ignition elimination when open; if frequency remains high after severity reducers → add prevention controls; if two answers work → higher hierarchy / system / design; if only detection is proposed → add prevention or mitigation that actually reduces loss; if design can remove the energy → prevention by design. Scoring favors evidence, owners, verification, and hierarchy-smart controls on loss prevention vs reduction. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Sprinklers vs bonding vs umbrella — prevention, reduction, or transfer?",
  cardBack:
    "Bonding/substitution = prevention (frequency). Sprinklers/dikes = reduction (severity). Umbrella/deductible = transfer/retain. Prevention still outranks reduction-only when open. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence distinguishes frequency-prevention from severity-reduction, gives an example of each, and says neither is insurance.",
};

export const items: ClassItem[] = [
  exam(T, "One sentence names bonding/grounding of the washer AND automatic sprinklers. Classify the pair.", [
    "Two transfer strategies.",
    "Loss prevention (ignition/frequency) + loss reduction (severity after ignition) — a coherent Reduce pair, not insurance.",
    "Two retain strategies.",
    "Prevention twice; sprinklers stop ignition.",
  ], 1, "FIN: two Reduce tactics in one stem — frequency then severity.", "FIN", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Inside Reduce: loss prevention cuts frequency (stop the event from starting — ignition control, substitution, guarding, bonding). Loss reduction cuts severity after ignition or release (sprinklers, dikes, deluge, emer... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Same washer. Finance adds a third move: $25M umbrella. Combined with sprinklers, what pair is that, and what may still be missing?", [
    "Prevention + reduction; nothing missing.",
    "Reduction + transfer; prevention (substitute/ignition control) may still be open and is not the umbrella.",
    "Avoid + retain.",
    "Two loss-prevention strategies.",
  ], 1, "FIN: sprinklers = reduction, umbrella = transfer. Name both; prevention may still be owed.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Inside Reduce: loss prevention cuts frequency (stop the event from starting — ignition control, substitution, guarding, bonding). Loss reduction cuts severity after ignition or release (sprinklers, dikes, deluge, emer... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Substitution to aqueous cleaner is still open. Team funds only deluge because “reduction is the modern half.” Best CSP call?", [
    "Accept — reduction equals prevention.",
    "Specify substitution (prevention / higher hierarchy); deluge is residual reduction, not a skip pass.",
    "Accept if ROI of deluge is higher.",
    "Accept if the deductible falls.",
  ], 1, "HIER: open prevention outranks reduction-only.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Inside Reduce: loss prevention cuts frequency (stop the event from starting — ignition control, substitution, guarding, bonding). Loss reduction cuts severity after ignition or release (sprinklers, dikes, deluge, emer... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Which is loss prevention rather than reduction or transfer?", [
    "Larger umbrella limit.",
    "Removing the flammable solvent so the fire does not start.",
    "Dike around the tank.",
    "Raising the deductible.",
  ], 1, "FIN: substitution prevents the event. Dike reduces severity. Policy/deductible are money.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Inside Reduce: loss prevention cuts frequency (stop the event from starting — ignition control, substitution, guarding, bonding). Loss reduction cuts severity after ignition or release (sprinklers, dikes, deluge, emer... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Which is loss reduction rather than prevention.", [
    "Bonding/grounding.",
    "Automatic sprinklers sized for the occupancy after ignition.",
    "Hot-work permit that removes ignition sources.",
    "Cancelling the solvent process (avoid).",
  ], 1, "FIN: sprinklers act after ignition — severity. Bonding/hot work/avoid are frequency/avoid.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Inside Reduce: loss prevention cuts frequency (stop the event from starting — ignition control, substitution, guarding, bonding). Loss reduction cuts severity after ignition or release (sprinklers, dikes, deluge, emer... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A dike is sized 1.1 × tank volume. Stem last sentence: subtract tank footprint and keep 1 ft freeboard. Designer uses L×W×H of the basin only. Error type?", [
    "None — gross basin is always enough.",
    "STEM/UNIT: missed the last-sentence constraints (displacement and freeboard) on a reduction control.",
    "PELTLV — they used a TLV as volume.",
    "TIME — they used 8 hours of rain only.",
  ], 1, "STEM: last sentence constrained the reduction math (dike volume).", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Inside Reduce: loss prevention cuts frequency (stop the event from starting — ignition control, substitution, guarding, bonding). Loss reduction cuts severity after ignition or release (sprinklers, dikes, deluge, emer... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a bridge deck pour laydown yard. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Guard on an open nip: prevention or reduction.", [
    "Reduction — it treats after amputation.",
    "Prevention — it stops the caught event from occurring (frequency), not an insurance form.",
    "Transfer — the manufacturer pays.",
    "Retain — workers keep the risk.",
  ], 1, "FIN/HIER: guarding is prevention of contact.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Inside Reduce: loss prevention cuts frequency (stop the event from starting — ignition control, substitution, guarding, bonding). Loss reduction cuts severity after ignition or release (sprinklers, dikes, deluge, emer... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "ROI of sprinklers uses Gain = full $80k fire loss avoided, but frequency was only cut in severity 50% and a preventable substitute was ignored. Issues?", [
    "None — always use full fire loss.",
    "FORM/FIN: do not count full avoidance for a reduction-only control, and do not skip open prevention when computing the best Reduce package.",
    "UNIT — they used meters of hose.",
    "TIME — they used 24.45.",
  ], 1, "FORM: Gain must match what the control actually changes.", "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Inside Reduce: loss prevention cuts frequency (stop the event from starting — ignition control, substitution, guarding, bonding). Loss reduction cuts severity after ignition or release (sprinklers, dikes, deluge, emer... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Last sentence: substitution frozen. Remaining spend is deluge vs extra umbrella. Best Reduce move?", [
    "Umbrella — transfer is reduction by another name.",
    "Deluge (loss reduction engineering); umbrella is transfer of residual money.",
    "Neither — freeze kills Reduce.",
    "Raise the deductible (retain as reduction).",
  ], 1, "STEM closed prevention-by-substitute; remaining Reduce is severity engineering.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Inside Reduce: loss prevention cuts frequency (stop the event from starting — ignition control, substitution, guarding, bonding). Loss reduction cuts severity after ignition or release (sprinklers, dikes, deluge, emer... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "In-patient hospitalization after a flash fire. Team delays OSHA to finish the “prevention vs reduction” slide. Clock?", [
    "Slides pause 1904.",
    "Hospitalization: 24 hours to OSHA. Classification of sprinklers is not a clock.",
    "8 hours because fire is always a fatality clock.",
    "7 days.",
  ], 1, "TIME: 24-hour hospitalization notification.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Inside Reduce: loss prevention cuts frequency (stop the event from starting — ignition control, substitution, guarding, bonding). Loss reduction cuts severity after ignition or release (sprinklers, dikes, deluge, emer... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Wrong tool: team runs an FMEA RPN on PPE donning and calls the cartridge “loss prevention of a toxic still release” while two SIS loops are the real barriers. Comment?", [
    "Accept — cartridges prevent releases.",
    "TOOL/HIER: a still release is a process top event (FTA/LOPA/SIS). Cartridges are residual PPE, not prevention of the release.",
    "Accept if RPN drops.",
    "Accept if the umbrella includes pollution.",
  ], 1, "TOOL: do not let PPE RPN impersonate process prevention.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Inside Reduce: loss prevention cuts frequency (stop the event from starting — ignition control, substitution, guarding, bonding). Loss reduction cuts severity after ignition or release (sprinklers, dikes, deluge, emer... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Pair in one stem: higher captive retention AND a signed hold-harmless, tank inventory unchanged. Classify, and the missing Reduce half.", [
    "Prevention + reduction.",
    "Retain + transfer; missing both prevention and reduction of the release/fire.",
    "Avoid + reduce.",
    "Two loss-reduction engineering controls.",
  ], 1, "FIN: two financing strategies in one stem, zero Reduce.", "FIN", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Inside Reduce: loss prevention cuts frequency (stop the event from starting — ignition control, substitution, guarding, bonding). Loss reduction cuts severity after ignition or release (sprinklers, dikes, deluge, emer... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
