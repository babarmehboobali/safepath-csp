import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D5.01";

export const classFields: ClassFields = {
  hook: "A plant wants a “world-class spill program”: more kits, more pigs, and a bigger vacuum truck — while still buying a solvent they could drop and a tank with no dike. You are the CSP. The question is what pollution prevention is versus spill response.",
  hookOilGas: `A pad wants a âworld-class spill programâ: more kits, more pigs, and a bigger vacuum truck â while still using a chemical they could drop and a tank with no dike. You are the CSP. The question is what pollution prevention is versus spill response.`,
  hookConstruction: `A site wants a âworld-class spill programâ: more kits and a bigger vac truck â while still using a diesel tank with no dike and a solvent they could drop. You are the CSP. The question is what pollution prevention is versus spill response.`,
  rule: "P2 (pollution prevention) is source reduction: do not generate the waste or the spill energy. Then engineering containment (dikes, closed transfer). Spill kits and vacuum trucks are residual response — loss reduction after release, not P2. SPCC-style thinking: prevention + containment sized to the stem, then response. If two answers work, take higher hierarchy / system / design.",
  modelCaption:
    "Pyramid: Source reduction → reuse/recycle → treat → dispose/respond. A dike box: V = L×W×H minus footprint/freeboard if the stem says so. Kits tagged “after the release.” Caption: a fatter kit is not P2.",
  workedCase:
    "2,000 gal solvent tank, no dike, kits along the curb. P2: aqueous substitute (source reduction) or smaller inventory. Then closed unload and a dike. Stem: basin 10×8×2 m, subtract tank footprint 12 m², 0.3 m freeboard. Do not report 10×8×2 as available volume. Kits stay for residual. EPCRA/RQ reporting is a clock, not a kit.",
  trapsJson: traps(
    "Calling more absorbent “pollution prevention.”",
    "Ignoring freeboard/footprint in dike volume.",
    "Letting a vacuum-truck contract replace a dike or a substitute.",
  ),
  contrastJson: contrast([
    { looksLike: "P2 / source reduction", actually: "Do not create the waste or the inventory" },
    { looksLike: "Containment / dike", actually: "Engineering loss reduction of a release" },
    { looksLike: "Spill kit / vac truck", actually: "Response after the energy left the tank" },
    { looksLike: "RQ / EPCRA notice", actually: "Reporting clock — not a control" },
  ]),
  mustScoreJson: mustScore(
    "Pollution prevention prefers source reduction over treatment and disposal.",
    "Spill prevention: inventory control, secondary containment, procedures, inspections.",
    "SPCC-style thinking: know oil locations, prevent discharges, plan response.",
    "Response equipment without prevention is incomplete.",
    "Drain protection and notification timelines matter in spills.",
    "MoC for new tanks/processes updates prevention plans.",
    "Hierarchy: eliminate/reduce materials when open before relying on spill kits.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "only spill kits are funded while source reduction is open", pick: "prefer P2/source reduction" },
    { ifStem: "secondary containment is undersized", pick: "correct containment design" },
    { ifStem: "drains are unprotected during transfer", pick: "protect pathways to the environment" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "a new tank is added", pick: "update spill prevention plans via MoC" },
  ),

  brief: `P2 (pollution prevention) is source reduction: do not generate the waste or the spill energy. Then engineering containment (dikes, closed transfer). Spill kits and vacuum trucks are residual response â loss reduction after release, not P2. SPCC-style thinking: prevention + containment sized to the stem, then response. If two answers work, take higher hierarchy / If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
P2 (pollution prevention) is source reduction: do not generate the waste or the spill energy. Then engineering containment (dikes, closed transfer). Spill kits and vacuum trucks are residual response â loss reduction after release, not P2. SPCC-style thinking: prevention + containment sized to the stem, then response. If two answers work, take higher hierarchy / system / design. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. Field move
A plant wants a âworld-class spill programâ: more kits, more pigs, and a bigger vacuum truck â while still buying a solvent they could drop and a tank with no dike. You are the CSP. The question is what pollution prevention is versus spill response. Oil-and-gas skin: A pad wants a âworld-class spill programâ: more kits, more pigs, and a bigger vacuum truck â while still using a chemical they could drop and a tank with no dike. You are the CSP. Construction skin: A site wants a âworld-class spill programâ: more kits and a bigger vac truck â while still using a diesel tank with no dike and a solvent they could drop. You are the CSP. Work the case: 2,000 gal solvent tank, no dike, kits along the curb. P2: aqueous substitute (source reduction) or smaller inventory. Then closed unload and a dike. Stem: basin 10Ã8Ã2 m, subtract tank footprint 12 mÂ², 0.3 m freeboard. Do not report 10Ã8Ã2 as available volume. Kits stay for residual. EPCRA/RQ reporting is a clock, not a kit. Classic traps: Calling more absorbent “pollution prevention.”; Ignoring freeboard/footprint in dike volume.; Letting a vacuum-truck contract replace a dike or a substitute.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for p2 spills. Verify whether a higher system or design fix is still open. Contrast labels: P2 / source reduction is actually Do not create the waste or the inventory; Containment / dike is actually Engineering loss reduction of a release; Spill kit / vac truck is actually Response after the energy left the tank; RQ / EPCRA notice is actually Reporting clock — not a control. If the stem shows only spill kits are funded while source reduction is open, pick prefer P2/source reduction. If the stem shows secondary containment is undersized, pick correct containment design. If the stem shows drains are unprotected during transfer, pick protect pathways to the environment. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows a new tank is added, pick update spill prevention plans via MoC. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `P2 vs kits — is a fatter pig source reduction? Dike math trap sits in CSP-11 Domain 5 Environmental Management. The exam tests whether you apply the rule when a package already looks complete. Core rule: P2 (pollution prevention) is source reduction: do not generate the waste or the spill energy. Then engineering containment (dikes, closed transfer). Spill kits and vacuum trucks are residual response â loss reduction after release, not P2. SPCC-style thinking: prevention + containment sized to the stem, then response. If two answers work, take higher hierarchy / system / design. Field context: A plant wants a âworld-class spill programâ: more kits, more pigs, and a bigger vacuum truck â while still buying a solvent they could drop and a tank with no dike. You are the CSP. The question is what pollution prevention is versus spill response. The oil-and-gas skin shifts the same decision into production pressure: A pad wants a âworld-class spill programâ: more kits, more pigs, and a bigger vacuum truck â while still using a chemical they could drop and a tank with no dike. You are the CSP. The construction skin shifts it into schedule and trade stacking: A site wants a âworld-class spill programâ: more kits and a bigger vac truck â while still using a diesel tank with no dike and a solvent they could drop. You are the CSP. Model caption for this class: Pyramid: Source reduction â reuse/recycle â treat â dispose/respond. A dike box: V = LÃWÃH minus footprint/freeboard if the stem says so. Kits tagged âafter the release.â Caption: a fatter kit is not P2. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Pollution prevention prefers source reduction over treatment and disposal. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Spill prevention: inventory control, secondary containment, procedures, inspections. (3) SPCC-style thinking: know oil locations, prevent discharges, plan response. (4) Response equipment without prevention is incomplete. (5) Drain protection and notification timelines matter in spills. (6) MoC for new tanks/processes updates prevention plans. (7) Hierarchy: eliminate/reduce materials when open before relying on spill kits. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: 2,000 gal solvent tank, no dike, kits along the curb. P2: aqueous substitute (source reduction) or smaller inventory. Then closed unload and a dike. Stem: basin 10Ã8Ã2 m, subtract tank footprint 12 mÂ², 0.3 m freeboard. Do not report 10Ã8Ã2 as available volume. Kits stay for residual. EPCRA/RQ reporting is a clock, not a kit. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Calling more absorbent “pollution prevention.”; Ignoring freeboard/footprint in dike volume.; Letting a vacuum-truck contract replace a dike or a substitute.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “P2 / source reduction” is really Do not create the waste or the inventory; “Containment / dike” is really Engineering loss reduction of a release; “Spill kit / vac truck” is really Response after the energy left the tank; “RQ / EPCRA notice” is really Reporting clock — not a control. Stem-if-then map: if only spill kits are funded while source reduction is open → prefer P2/source reduction; if secondary containment is undersized → correct containment design; if drains are unprotected during transfer → protect pathways to the environment; if two answers work → higher hierarchy / system / design; if a new tank is added → update spill prevention plans via MoC. Scoring favors evidence, owners, verification, and hierarchy-smart controls on p2 spills. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "P2 vs kits — is a fatter pig source reduction? Dike math trap?",
  cardBack:
    "P2 = don’t make it. Dike = engineering. Kit = residual response. V = L×W×H minus what the last sentence subtracts. Insurance ≠ containment. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence says P2 is source reduction, kits are residual, and dike volume must honor footprint/freeboard when given.",
  formulaSlug: "dike-volume",
};

export const items: ClassItem[] = [
  exam(T, "Plant funds more absorbent pigs instead of dropping a solvent that still has an aqueous substitute. Best P2 call?", [
    "Pigs are P2 because they prevent spread.",
    "Specify the substitute (source reduction). Pigs are residual response, not P2.",
    "Pigs plus a larger umbrella equal P2.",
    "Pigs plus a JHA equal P2.",
  ], 1, "HIER: source reduction beats kits.", "HIER", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "P2 (pollution prevention) is source reduction: do not generate the waste or the spill energy. Then engineering containment (dikes, closed transfer). Spill kits and vacuum trucks are residual response — loss reduction... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Basin 10 m × 8 m × 2 m. Last sentence: subtract 12 m² tank footprint and keep 0.3 m freeboard. Available height 1.7 m. Best volume?", [
    "160 m³ using gross 10×8×2.",
    "(80 − 12) × 1.7 = 115.6 m³, honoring footprint and freeboard.",
    "80 × 2 = 160 ignoring freeboard but claiming footprint.",
    "12 × 2 = 24 m³ using only the footprint.",
  ], 1, "STEM/FORM: last sentence constrained V = (A_basin − A_tank)×h_net.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "P2 (pollution prevention) is source reduction: do not generate the waste or the spill energy. Then engineering containment (dikes, closed transfer). Spill kits and vacuum trucks are residual response — loss reduction... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Designer uses 10 ft × 8 ft × 2 m mixed units as 160 without converting. Error?", [
    "None — numbers are numbers.",
    "UNIT: do not multiply feet by meters. Convert to one system first.",
    "PELTLV.",
    "TIME — 8-hour TWA of solvent.",
  ], 1, "UNIT: mixed length units in V = L×W×H.", "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "P2 (pollution prevention) is source reduction: do not generate the waste or the spill energy. Then engineering containment (dikes, closed transfer). Spill kits and vacuum trucks are residual response — loss reduction... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "SPCC-style dike vs spill kit: which is the engineering loss-reduction control for a tank still in service?", [
    "More pigs in a cart.",
    "Sized secondary containment (and closed valves) — kits remain residual.",
    "A vacuum-truck retainer only.",
    "A GHS pictogram on the tank.",
  ], 1, "HIER: dike vs kit.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "P2 (pollution prevention) is source reduction: do not generate the waste or the spill energy. Then engineering containment (dikes, closed transfer). Spill kits and vacuum trucks are residual response — loss reduction... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Last sentence: substitute frozen; remaining spend is a dike or a 12-month vac-truck retainer. Best remaining?", [
    "Vac-truck — response is P2.",
    "Dike (engineering containment); vac-truck is residual response.",
    "Neither — freeze kills all Reduce.",
    "Only extra insurance.",
  ], 1, "STEM closed source reduction; remaining engineering is the dike.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "P2 (pollution prevention) is source reduction: do not generate the waste or the spill energy. Then engineering containment (dikes, closed transfer). Spill kits and vacuum trucks are residual response — loss reduction... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Environmental policy offered instead of the dike. Classify.", [
    "Reduce — policy is containment.",
    "Transfer instead of Reduce. A policy does not hold 115 m³.",
    "Avoid — policy deletes the tank.",
    "P2 — claims prevent spills.",
  ], 1, "FIN: insurance ≠ dike.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "P2 (pollution prevention) is source reduction: do not generate the waste or the spill energy. Then engineering containment (dikes, closed transfer). Spill kits and vacuum trucks are residual response — loss reduction... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Worker hospitalized by the splash. Team calls NRC for the RQ and skips OSHA because “this is environmental.” Clock?", [
    "RQ calls replace 1904.",
    "Hospitalization: 24 hours to OSHA. EPCRA/NRC is a parallel environmental clock, not a substitute.",
    "8 hours because all spills are fatalities.",
    "7 days covers both.",
  ], 1, "TIME: 24-hour OSHA hospitalization remains.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "P2 (pollution prevention) is source reduction: do not generate the waste or the spill energy. Then engineering containment (dikes, closed transfer). Spill kits and vacuum trucks are residual response — loss reduction... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Recycling 8 drums of still-optional virgin solvent leftovers is presented as top-tier P2. Comment?", [
    "Correct — recycle is the top of P2.",
    "Recycling is below source reduction. If the virgin solvent is still optional, not buying it is P2.",
    "Correct if the drums are universal waste.",
    "Correct if SDS Section 13 says recycle.",
  ], 1, "HIER: P2 hierarchy inside environmental.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "P2 (pollution prevention) is source reduction: do not generate the waste or the spill energy. Then engineering containment (dikes, closed transfer). Spill kits and vacuum trucks are residual response — loss reduction... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Stormwater dike valve found open. Team buys more kits at the outfall. Best Monitor/Treat?", [
    "Kits at the outfall equal a closed valve.",
    "Close/lock/manage the valve (restore the containment); kits are not the defeated engineering.",
    "Paint the valve yellow ALARP.",
    "Transfer the creek.",
  ], 1, "STEM: defeated dike drain is the control.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "P2 (pollution prevention) is source reduction: do not generate the waste or the spill energy. Then engineering containment (dikes, closed transfer). Spill kits and vacuum trucks are residual response — loss reduction... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Wrong tool: FMEA RPN of “operator misses pig” as the P2 plan. Comment?", [
    "Accept — RPN is source reduction.",
    "TOOL: P2 is source reduction/containment design, not an RPN of grabbing absorbent.",
    "Accept if RPN < 100.",
    "Accept if ICS Logistics owns pigs.",
  ], 1, "TOOL: FMEA of kits ≠ P2.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "P2 (pollution prevention) is source reduction: do not generate the waste or the spill energy. Then engineering containment (dikes, closed transfer). Spill kits and vacuum trucks are residual response — loss reduction... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "RQ math: someone treats 100 lb RQ as 100 kg and delays notice. Error flavor?", [
    "None — lb and kg are close enough.",
    "UNIT: 100 lb is not 100 kg. Thresholds are unit-specific.",
    "FORM — they should have used ROI.",
    "PELTLV — they used a TLV as RQ.",
  ], 1, "UNIT: lb vs kg on reportable quantity.", "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "P2 (pollution prevention) is source reduction: do not generate the waste or the spill energy. Then engineering containment (dikes, closed transfer). Spill kits and vacuum trucks are residual response — loss reduction... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Two funded moves: higher pollution deductible AND extra umbrella, tank still undiked with a live substitute. Pair and miss?", [
    "Avoid + reduce; kits optional.",
    "Retain + transfer; missing P2/reduce (substitute and/or dike).",
    "Two dikes.",
    "Prevention + protection complete.",
  ], 1, "FIN: two financing strategies in one stem do not contain solvent.", "FIN", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "P2 (pollution prevention) is source reduction: do not generate the waste or the spill energy. Then engineering containment (dikes, closed transfer). Spill kits and vacuum trucks are residual response — loss reduction... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
