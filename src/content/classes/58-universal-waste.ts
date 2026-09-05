import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D5.03";

export const classFields: ClassFields = {
  hook: "A storeroom wants every drum of still bottoms, every aerosol, every lamp, and a leaking car battery labeled “universal waste” so the 90-day LQG clock disappears. You are the CSP. The question is what actually qualifies, and what the streamlined rules still require.",
  hookOilGas: `A warehouse wants every drum of still bottoms, every aerosol, every lamp, and a leaking equipment battery labeled âuniversal wasteâ so the 90-day LQG clock disappears. You are the CSP. The question is what actually qualifies, and what the streamlined rules still require.`,
  hookConstruction: `A conex wants every drum of paint thinner, every aerosol, every lamp, and a leaking battery labeled âuniversal wasteâ so the 90-day LQG clock disappears. You are the CSP. The question is what actually qualifies, and what the streamlined rules still require.`,
  rule: "Universal waste is a defined subset (batteries, pesticides, mercury-containing equipment, lamps, and aerosol cans under the federal rule) with streamlined accumulation (often 1 year), labeling, and handler duties — not a magic hat for listed still bottoms. Leaking/damaged items may fall out of the UW path into full hazardous waste. P2 still prefers not generating the lamps/aerosols. It is not household hazardous waste and not used oil.",
  modelCaption:
    "Five boxes: Batteries | Pesticides | Mercury equipment | Lamps | Aerosol cans. A still-bottoms drum stamped “not UW.” A leaking battery stamped “full RCRA.” Caption: streamlined, not optional; 1 year is still a clock.",
  workedCase:
    "Spent fluorescent lamps, intact nickel-cadmium batteries, and aerosol cans: manage as UW — label “Universal Waste — Lamps,” keep closed, 1-year accumulation unless the stem’s state is shorter, send to a UW handler. A cracked dripping battery: contain as hazardous waste, not UW. Still bottoms: Class 57, not UW. Do not crush lamps in the parking lot “to save space” unless the stem’s rule allows a drum-top crusher as a UW handler activity.",
  trapsJson: traps(
    "Relabeling listed process waste as universal to dodge 90 days.",
    "Leaving UW unlabeled in a trailer for 18 months.",
    "Treating a leaking battery as still UW without containment.",
  ),
  contrastJson: contrast([
    { looksLike: "Universal waste", actually: "Defined federal/state list with streamlined handler rules" },
    { looksLike: "LQG hazardous waste", actually: "90-day listed/characteristic process wastes (Class 57)" },
    { looksLike: "Household HW", actually: "Different exclusion — not the plant storeroom" },
    { looksLike: "Used oil", actually: "Separate 279-style path — not automatically UW" },
  ]),
  mustScoreJson: mustScore(
    "Universal waste streamlines management for common hazardous wastes like batteries, lamps, some pesticides, mercury devices (jurisdiction-specific).",
    "Still label, contain, and limit accumulation time.",
    "Do not break lamps casually \u2014 containment of releases matters.",
    "Employee training and destination facilities still required.",
    "Universal waste is not a free dumpster designation for all waste.",
    "Keep streams identified and not mixed into trash.",
    "Hierarchy: reduce lamp/battery counts via design when open.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "fluorescent lamps go into regular trash", pick: "manage as universal/hazardous per rules" },
    { ifStem: "batteries are unmarked in a gaylord forever", pick: "label and respect accumulation limits" },
    { ifStem: "broken lamp dust is swept without controls", pick: "contain release and clean properly" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "LED substitution is open", pick: "reduce lamp waste by design" },
  ),

  brief: `Universal waste is a defined subset (batteries, pesticides, mercury-containing equipment, lamps, and aerosol cans under the federal rule) with streamlined accumulation (often 1 year), labeling, and handler duties â not a magic hat for listed still bottoms. Leaking/damaged items may fall out of the UW path into full hazardous waste. P2 still prefers not generating If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Universal waste is a defined subset (batteries, pesticides, mercury-containing equipment, lamps, and aerosol cans under the federal rule) with streamlined accumulation (often 1 year), labeling, and handler duties â not a magic hat for listed still bottoms. Leaking/damaged items may fall out of the UW path into full hazardous waste. P2 still prefers not generating the lamps/aerosols. It is not household hazardous waste and not used oil. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
A storeroom wants every drum of still bottoms, every aerosol, every lamp, and a leaking car battery labeled âuniversal wasteâ so the 90-day LQG clock disappears. You are the CSP. The question is what actually qualifies, and what the streamlined rules still require. Oil-and-gas skin: A warehouse wants every drum of still bottoms, every aerosol, every lamp, and a leaking equipment battery labeled âuniversal wasteâ so the 90-day LQG clock disappears. You are the CSP. Construction skin: A conex wants every drum of paint thinner, every aerosol, every lamp, and a leaking battery labeled âuniversal wasteâ so the 90-day LQG clock disappears. You are the CSP. Work the case: Spent fluorescent lamps, intact nickel-cadmium batteries, and aerosol cans: manage as UW â label âUniversal Waste â Lamps,â keep closed, 1-year accumulation unless the stemâs state is shorter, send to a UW handler. A cracked dripping battery: contain as hazardous waste, not UW. Still bottoms: Class 57, not UW. Do not crush lamps in the parking lot âto save spaceâ unless the stemâs rule allows a drum-top crusher as a UW handler activity. Classic traps: Relabeling listed process waste as universal to dodge 90 days.; Leaving UW unlabeled in a trailer for 18 months.; Treating a leaking battery as still UW without containment.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for universal waste. Verify whether a higher system or design fix is still open. Contrast labels: Universal waste is actually Defined federal/state list with streamlined handler rules; LQG hazardous waste is actually 90-day listed/characteristic process wastes (Class 57); Household HW is actually Different exclusion — not the plant storeroom; Used oil is actually Separate 279-style path — not automatically UW. If the stem shows fluorescent lamps go into regular trash, pick manage as universal/hazardous per rules. If the stem shows batteries are unmarked in a gaylord forever, pick label and respect accumulation limits. If the stem shows broken lamp dust is swept without controls, pick contain release and clean properly. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows LED substitution is open, pick reduce lamp waste by design. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Universal waste — are still bottoms UW? 90 days or 1 year sits in CSP-11 Domain 5 Environmental Management. The exam tests whether you apply the rule when a package already looks complete. Core rule: Universal waste is a defined subset (batteries, pesticides, mercury-containing equipment, lamps, and aerosol cans under the federal rule) with streamlined accumulation (often 1 year), labeling, and handler duties â not a magic hat for listed still bottoms. Leaking/damaged items may fall out of the UW path into full hazardous waste. P2 still prefers not generating the lamps/aerosols. It is not household hazardous waste and not used oil. Field context: A storeroom wants every drum of still bottoms, every aerosol, every lamp, and a leaking car battery labeled âuniversal wasteâ so the 90-day LQG clock disappears. You are the CSP. The question is what actually qualifies, and what the streamlined rules still require. The oil-and-gas skin shifts the same decision into production pressure: A warehouse wants every drum of still bottoms, every aerosol, every lamp, and a leaking equipment battery labeled âuniversal wasteâ so the 90-day LQG clock disappears. You are the CSP. The construction skin shifts it into schedule and trade stacking: A conex wants every drum of paint thinner, every aerosol, every lamp, and a leaking battery labeled âuniversal wasteâ so the 90-day LQG clock disappears. You are the CSP. Model caption for this class: Five boxes: Batteries | Pesticides | Mercury equipment | Lamps | Aerosol cans. A still-bottoms drum stamped ânot UW.â A leaking battery stamped âfull RCRA.â Caption: streamlined, not optional; 1 year is still a clock. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Universal waste streamlines management for common hazardous wastes like batteries, lamps, some pesticides, mercury devices (jurisdiction-specific). Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Still label, contain, and limit accumulation time. (3) Do not break lamps casually — containment of releases matters. (4) Employee training and destination facilities still required. (5) Universal waste is not a free dumpster designation for all waste. (6) Keep streams identified and not mixed into trash. (7) Hierarchy: reduce lamp/battery counts via design when open. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Spent fluorescent lamps, intact nickel-cadmium batteries, and aerosol cans: manage as UW â label âUniversal Waste â Lamps,â keep closed, 1-year accumulation unless the stemâs state is shorter, send to a UW handler. A cracked dripping battery: contain as hazardous waste, not UW. Still bottoms: Class 57, not UW. Do not crush lamps in the parking lot âto save spaceâ unless the stemâs rule allows a drum-top crusher as a UW handler activity. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Relabeling listed process waste as universal to dodge 90 days.; Leaving UW unlabeled in a trailer for 18 months.; Treating a leaking battery as still UW without containment.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Universal waste” is really Defined federal/state list with streamlined handler rules; “LQG hazardous waste” is really 90-day listed/characteristic process wastes (Class 57); “Household HW” is really Different exclusion — not the plant storeroom; “Used oil” is really Separate 279-style path — not automatically UW. Stem-if-then map: if fluorescent lamps go into regular trash → manage as universal/hazardous per rules; if batteries are unmarked in a gaylord forever → label and respect accumulation limits; if broken lamp dust is swept without controls → contain release and clean properly; if two answers work → higher hierarchy / system / design; if LED substitution is open → reduce lamp waste by design. Scoring favors evidence, owners, verification, and hierarchy-smart controls on universal waste. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Universal waste — are still bottoms UW? 90 days or 1 year?",
  cardBack:
    "Defined list: batteries, pesticides, mercury equipment, lamps, aerosols (federal). Streamlined 1-year typical. Not listed process waste. Leakers may be full HW. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence names the UW categories, says it is streamlined not a dodge for process waste, and notes leaking items may exit UW.",
};

export const items: ClassItem[] = [
  exam(T, "Still bottoms labeled “Universal Waste — Solvent” to dodge LQG 90 days. Legal?", [
    "Yes — any liquid can be UW.",
    "No: still bottoms are not a UW category. Keep them on the hazardous-waste clock and manifest path.",
    "Yes if the SDS says irritant.",
    "Yes if recycling is planned in 11 months.",
  ], 1, "STEM: UW list is closed; process waste stays Class 57.", "STEM", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "Universal waste is a defined subset (batteries, pesticides, mercury-containing equipment, lamps, and aerosol cans under the federal rule) with streamlined accumulation (often 1 year), labeling, and handler duties — no... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a municipal water-plant retrofit. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Intact spent fluorescent lamps. Best streamlined path.", [
    "LQG 90-day only, always, no UW option.",
    "Universal waste lamps: label, closed containers, typical 1-year accumulation, UW handler — unless the stem’s state is stricter.",
    "Household HW because offices have lamps.",
    "Storm drain — glass is inert.",
  ], 1, "STEM: lamps are a core UW category.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "Universal waste is a defined subset (batteries, pesticides, mercury-containing equipment, lamps, and aerosol cans under the federal rule) with streamlined accumulation (often 1 year), labeling, and handler duties — no... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Battery is cracked and dripping KOH. Team ships it as intact UW batteries. Comment?", [
    "Fine — once a battery, always UW.",
    "Leaking/damaged: contain and manage residues as hazardous waste; do not offer dripping UW as if intact.",
    "Fine if the 1-year clock just started.",
    "Fine if GHS corrosive is on the pallet.",
  ], 1, "STEM: damage can exit the UW path.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "Universal waste is a defined subset (batteries, pesticides, mercury-containing equipment, lamps, and aerosol cans under the federal rule) with streamlined accumulation (often 1 year), labeling, and handler duties — no... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "LED retrofit is still open vs a larger UW lamp trailer. Best P2?", [
    "Trailer — UW is source reduction.",
    "Specify LEDs so spent-mercury lamps stop; UW is residual management of lamps you still generate.",
    "Trailer plus extra umbrella.",
    "Crush lamps on the parking lot as P2.",
  ], 1, "HIER: not generating the lamp beats a prettier UW drum.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "Universal waste is a defined subset (batteries, pesticides, mercury-containing equipment, lamps, and aerosol cans under the federal rule) with streamlined accumulation (often 1 year), labeling, and handler duties — no... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Last sentence: this state did not adopt aerosol-can universal waste. Cans at the site?", [
    "Still UW federally everywhere.",
    "Honor the stem: manage as hazardous waste (or the state’s actual path), not as UW.",
    "Household HW automatically.",
    "Puncturing over the drain is the state substitute.",
  ], 1, "STEM: last sentence removed the aerosol UW option.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "Universal waste is a defined subset (batteries, pesticides, mercury-containing equipment, lamps, and aerosol cans under the federal rule) with streamlined accumulation (often 1 year), labeling, and handler duties — no... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a bridge deck pour laydown yard. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: UW lamps unlabeled in a trailer for 18 months. Clock.", [
    "Fine — UW has no clock.",
    "Overdue: typical accumulation is 1 year. Streamlined is not timeless.",
    "Fine until 90 days then it becomes LQG retroactively.",
    "Fine if the broker has a photo.",
  ], 1, "TIME: UW 1-year accumulation is still a clock.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "Universal waste is a defined subset (batteries, pesticides, mercury-containing equipment, lamps, and aerosol cans under the federal rule) with streamlined accumulation (often 1 year), labeling, and handler duties — no... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Used oil dumped into the UW battery tote “to simplify.” Issue?", [
    "Fine — both are streamlined.",
    "Wrong path: used oil is not automatically UW. Mixing can create a worse waste and a TOOL miss.",
    "Fine if pH is 7.",
    "Fine if the tote says “Universal Waste — Mix.”",
  ], 1, "TOOL: used oil vs UW.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "Universal waste is a defined subset (batteries, pesticides, mercury-containing equipment, lamps, and aerosol cans under the federal rule) with streamlined accumulation (often 1 year), labeling, and handler duties — no... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Recycling rebate offered if you skip labeling. Classify.", [
    "Reduce — rebate is a label.",
    "FIN: a credit does not waive handler labeling/closed-container duties.",
    "Avoid — rebate deletes lamps.",
    "Transfer — rebate is a TSDF.",
  ], 1, "FIN: money ≠ UW label.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "Universal waste is a defined subset (batteries, pesticides, mercury-containing equipment, lamps, and aerosol cans under the federal rule) with streamlined accumulation (often 1 year), labeling, and handler duties — no... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Worker hospitalized when a box of broken lamps is dumped. Team cites “UW so OSHA does not apply.” Clock?", [
    "UW pauses 1904.",
    "Hospitalization: 24 hours to OSHA. UW status is environmental, not an OSHA waiver.",
    "8 hours because mercury is always a fatality.",
    "7 days.",
  ], 1, "TIME: 24-hour OSHA hospitalization.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "Universal waste is a defined subset (batteries, pesticides, mercury-containing equipment, lamps, and aerosol cans under the federal rule) with streamlined accumulation (often 1 year), labeling, and handler duties — no... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Household hazardous-waste day vs plant UW: plant storeroom lamps?", [
    "Take them to HHW day — plants are households.",
    "Plant lamps are handler UW (or HW), not household HHW.",
    "Pour them in the MSW dumpster.",
    "Mail them without packaging.",
  ], 1, "STEM: household exclusion is not the plant.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "Universal waste is a defined subset (batteries, pesticides, mercury-containing equipment, lamps, and aerosol cans under the federal rule) with streamlined accumulation (often 1 year), labeling, and handler duties — no... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Crushing lamps on asphalt to “reduce volume” with no authorization. Status?", [
    "Always allowed UW treatment.",
    "Likely illegal treatment / a release. Only crush if the stem’s rule authorizes the handler activity; pavement is not a drum-top crusher.",
    "P2 by definition.",
    "A BCP RTO tactic.",
  ], 1, "STEM: treatment limits inside UW.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "Universal waste is a defined subset (batteries, pesticides, mercury-containing equipment, lamps, and aerosol cans under the federal rule) with streamlined accumulation (often 1 year), labeling, and handler duties — no... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Two funded moves: extra umbrella AND extra UW stickers, still-bottoms still in the UW cage. Pair and miss?", [
    "Avoid + reduce; stickers reclassify.",
    "Retain/transfer + cosmetics; missing actual RCRA management of a non-UW process waste.",
    "Two 90-day clocks complete.",
    "HHW + used oil complete.",
  ], 1, "FIN: financing + stickers in one stem do not make still bottoms UW.", "FIN", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "Universal waste is a defined subset (batteries, pesticides, mercury-containing equipment, lamps, and aerosol cans under the federal rule) with streamlined accumulation (often 1 year), labeling, and handler duties — no... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
