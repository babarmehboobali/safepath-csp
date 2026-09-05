import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D5.02";

export const classFields: ClassFields = {
  hook: "A storeroom clerk wants to file SDSs by color, store oxidizers with flammables “because both have diamonds,” and use Section 2 as the only PPE spec. You are the CSP. The question is how GHS and storage actually work.",
  hookOilGas: `A mud-shed clerk wants to file SDSs by color, store oxidizers with flammables âbecause both have diamonds,â and use Section 2 as the only PPE spec. You are the CSP. The question is how GHS and storage actually work.`,
  hookConstruction: `A conex clerk wants to file SDSs by color, store oxidizers with flammables âbecause both have diamonds,â and use Section 2 as the only PPE spec. You are the CSP. The question is how GHS and storage actually work.`,
  rule: "GHS/HazCom: labels (product ID, pictogram, signal word, hazard/precautionary statements, supplier) plus a 16-section SDS. Storage follows incompatibility and quantity — oxidizers away from organics/flammables, acids away from cyanides/bases, flammables in rated cabinets as required. SDS Section 7/9/10 inform storage; Section 8 informs exposure controls/PPE as residual. GHS diamonds are not DOT placards. If two answers work, take substitution/segregation over extra gloves.",
  modelCaption:
    "SDS 16 sections strip with 2 (hazards), 7 (handling/storage), 8 (exposure/PPE), 9 (physical), 13 (disposal) highlighted. A shelf: oxidizer | gap | flammable. Caption: diamonds communicate; they do not make chemicals friends.",
  workedCase:
    "Acetone and 50 lb of an oxidizer on one shelf, GHS flame and flame-over-circle both visible. Storage: split, flammable cabinet for acetone, dry oxidizer cabinet/area, no wooden shelf soaked in acetone. SDS: Section 7 says keep away from combustibles; Section 9 flash point; Section 8 has OELs and PPE as residual. Do not use Section 2 pictograms as the cabinet rating. Substitute acetone if still open (P2/hierarchy).",
  trapsJson: traps(
    "Storing by pictogram color rather than compatibility.",
    "Using GHS as a DOT placard.",
    "Reading only Section 2 and skipping 7/8/9 for storage and controls.",
  ),
  contrastJson: contrast([
    { looksLike: "Section 2", actually: "Hazard identification — not the full storage spec" },
    { looksLike: "Section 7 / 9 / 10", actually: "Handling, physical properties, stability/reactivity for storage" },
    { looksLike: "Section 8", actually: "Exposure controls / PPE — residual after substitution/engineering" },
    { looksLike: "GHS pictogram", actually: "Workplace communication — not a 49 CFR placard" },
  ]),
  mustScoreJson: mustScore(
    "GHS classifies hazards and communicates via labels and SDS.",
    "Storage segregates incompatibles and respects quantity/distance rules.",
    "Flammables need approved containers/cabinets and ignition control.",
    "SDS must be accessible to workers; training makes GHS usable.",
    "Secondary containers need workplace labeling.",
    "Do not store based on alphabet alone when hazards conflict.",
    "Hierarchy: substitute less hazardous chemicals when open.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "incompatibles share a cabinet", pick: "segregate per chemical hazards" },
    { ifStem: "secondary bottle lacks label", pick: "apply workplace labeling" },
    { ifStem: "SDS is locked in an office after hours", pick: "ensure access during work" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "a safer substitute exists", pick: "substitute before fancy storage alone" },
  ),

  brief: `GHS/HazCom: labels (product ID, pictogram, signal word, hazard/precautionary statements, supplier) plus a 16-section SDS. Storage follows incompatibility and quantity â oxidizers away from organics/flammables, acids away from cyanides/bases, flammables in rated cabinets as required. SDS Section 7/9/10 inform storage; Section 8 informs exposure controls/PPE as residual. GHS diamonds are not DOT placards. If two answers If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
GHS/HazCom: labels (product ID, pictogram, signal word, hazard/precautionary statements, supplier) plus a 16-section SDS. Storage follows incompatibility and quantity â oxidizers away from organics/flammables, acids away from cyanides/bases, flammables in rated cabinets as required. SDS Section 7/9/10 inform storage; Section 8 informs exposure controls/PPE as residual. GHS diamonds are not DOT placards. If two answers work, take substitution/segregation over extra gloves. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
A storeroom clerk wants to file SDSs by color, store oxidizers with flammables âbecause both have diamonds,â and use Section 2 as the only PPE spec. You are the CSP. The question is how GHS and storage actually work. Oil-and-gas skin: A mud-shed clerk wants to file SDSs by color, store oxidizers with flammables âbecause both have diamonds,â and use Section 2 as the only PPE spec. You are the CSP. Construction skin: A conex clerk wants to file SDSs by color, store oxidizers with flammables âbecause both have diamonds,â and use Section 2 as the only PPE spec. You are the CSP. Work the case: Acetone and 50 lb of an oxidizer on one shelf, GHS flame and flame-over-circle both visible. Storage: split, flammable cabinet for acetone, dry oxidizer cabinet/area, no wooden shelf soaked in acetone. SDS: Section 7 says keep away from combustibles; Section 9 flash point; Section 8 has OELs and PPE as residual. Do not use Section 2 pictograms as the cabinet rating. Substitute acetone if still open (P2/hierarchy). Classic traps: Storing by pictogram color rather than compatibility.; Using GHS as a DOT placard.; Reading only Section 2 and skipping 7/8/9 for storage and controls.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for ghs storage. Verify whether a higher system or design fix is still open. Contrast labels: Section 2 is actually Hazard identification — not the full storage spec; Section 7 / 9 / 10 is actually Handling, physical properties, stability/reactivity for storage; Section 8 is actually Exposure controls / PPE — residual after substitution/engineering; GHS pictogram is actually Workplace communication — not a 49 CFR placard. If the stem shows incompatibles share a cabinet, pick segregate per chemical hazards. If the stem shows secondary bottle lacks label, pick apply workplace labeling. If the stem shows SDS is locked in an office after hours, pick ensure access during work. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows a safer substitute exists, pick substitute before fancy storage alone. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `GHS storage — oxidizers with flammables? Which SDS sections sits in CSP-11 Domain 5 Environmental Management. The exam tests whether you apply the rule when a package already looks complete. Core rule: GHS/HazCom: labels (product ID, pictogram, signal word, hazard/precautionary statements, supplier) plus a 16-section SDS. Storage follows incompatibility and quantity â oxidizers away from organics/flammables, acids away from cyanides/bases, flammables in rated cabinets as required. SDS Section 7/9/10 inform storage; Section 8 informs exposure controls/PPE as residual. GHS diamonds are not DOT placards. If two answers work, take substitution/segregation over extra gloves. Field context: A storeroom clerk wants to file SDSs by color, store oxidizers with flammables âbecause both have diamonds,â and use Section 2 as the only PPE spec. You are the CSP. The question is how GHS and storage actually work. The oil-and-gas skin shifts the same decision into production pressure: A mud-shed clerk wants to file SDSs by color, store oxidizers with flammables âbecause both have diamonds,â and use Section 2 as the only PPE spec. You are the CSP. The construction skin shifts it into schedule and trade stacking: A conex clerk wants to file SDSs by color, store oxidizers with flammables âbecause both have diamonds,â and use Section 2 as the only PPE spec. You are the CSP. Model caption for this class: SDS 16 sections strip with 2 (hazards), 7 (handling/storage), 8 (exposure/PPE), 9 (physical), 13 (disposal) highlighted. A shelf: oxidizer | gap | flammable. Caption: diamonds communicate; they do not make chemicals friends. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) GHS classifies hazards and communicates via labels and SDS. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Storage segregates incompatibles and respects quantity/distance rules. (3) Flammables need approved containers/cabinets and ignition control. (4) SDS must be accessible to workers; training makes GHS usable. (5) Secondary containers need workplace labeling. (6) Do not store based on alphabet alone when hazards conflict. (7) Hierarchy: substitute less hazardous chemicals when open. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Acetone and 50 lb of an oxidizer on one shelf, GHS flame and flame-over-circle both visible. Storage: split, flammable cabinet for acetone, dry oxidizer cabinet/area, no wooden shelf soaked in acetone. SDS: Section 7 says keep away from combustibles; Section 9 flash point; Section 8 has OELs and PPE as residual. Do not use Section 2 pictograms as the cabinet rating. Substitute acetone if still open (P2/hierarchy). Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Storing by pictogram color rather than compatibility.; Using GHS as a DOT placard.; Reading only Section 2 and skipping 7/8/9 for storage and controls.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Section 2” is really Hazard identification — not the full storage spec; “Section 7 / 9 / 10” is really Handling, physical properties, stability/reactivity for storage; “Section 8” is really Exposure controls / PPE — residual after substitution/engineering; “GHS pictogram” is really Workplace communication — not a 49 CFR placard. Stem-if-then map: if incompatibles share a cabinet → segregate per chemical hazards; if secondary bottle lacks label → apply workplace labeling; if SDS is locked in an office after hours → ensure access during work; if two answers work → higher hierarchy / system / design; if a safer substitute exists → substitute before fancy storage alone. Scoring favors evidence, owners, verification, and hierarchy-smart controls on ghs storage. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "GHS storage — oxidizers with flammables? Which SDS sections?",
  cardBack:
    "Store by compatibility/quantity, not diamond color. SDS 7/9/10 for storage, 8 for residual OELs/PPE. GHS ≠ DOT. PEL ≠ TLV. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence says 16-section SDS, store by incompatibility not pictogram color, and Section 8 PPE is residual after substitution/segregation.",
};

export const items: ClassItem[] = [
  exam(T, "Oxidizers and flammables on one shelf “because both have GHS diamonds.” Best storage move?", [
    "Keep together — diamonds are a compatibility group.",
    "Segregate incompatibles; diamonds communicate hazards, they do not make chemicals compatible. Substitute if still open.",
    "Keep together if extra gloves are issued.",
    "Keep together if DOT placards are added.",
  ], 1, "HIER: segregation/substitution vs pictogram filing.", "HIER", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "GHS/HazCom: labels (product ID, pictogram, signal word, hazard/precautionary statements, supplier) plus a 16-section SDS. Storage follows incompatibility and quantity — oxidizers away from organics/flammables, acids a... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Which SDS sections best inform storage conditions and reactivity?", [
    "Section 2 only.",
    "7 (handling/storage), 9 (physical), 10 (stability/reactivity) — 2 is identification, 8 is exposure/PPE residual.",
    "Section 16 only (other information).",
    "Section 12 only (ecological), always.",
  ], 1, "STEM: which sections do which job.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "GHS/HazCom: labels (product ID, pictogram, signal word, hazard/precautionary statements, supplier) plus a 16-section SDS. Storage follows incompatibility and quantity — oxidizers away from organics/flammables, acids a... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Section 8 lists TLV-TWA 50 ppm. Supervisor treats it as the OSHA PEL you will be cited on. Issue?", [
    "None — TLV is the legal limit.",
    "PELTLV: TLV is advisory ACGIH; PEL is the OSHA legal limit unless the stem says they match.",
    "None if the pictogram is red.",
    "None if it is also the REL.",
  ], 1, "PELTLV: legal vs advisory.", "PELTLV",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "GHS/HazCom: labels (product ID, pictogram, signal word, hazard/precautionary statements, supplier) plus a 16-section SDS. Storage follows incompatibility and quantity — oxidizers away from organics/flammables, acids a... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "GHS flame pictogram used as the highway placard on a tote. Comment?", [
    "Fine — GHS is DOT.",
    "Wrong system: GHS is workplace HazCom; transport uses DOT/UN placards and papers (Class 52).",
    "Fine if Section 14 is blank.",
    "Fine if the ERG is taped on.",
  ], 1, "TOOL: GHS vs DOT.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "GHS/HazCom: labels (product ID, pictogram, signal word, hazard/precautionary statements, supplier) plus a 16-section SDS. Storage follows incompatibility and quantity — oxidizers away from organics/flammables, acids a... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Last sentence: aqueous substitute frozen; remaining storage is a rated flammable cabinet vs a wooden wardrobe plus extra nitrile. Best remaining?", [
    "Wardrobe + nitrile — PPE is storage.",
    "Rated cabinet (engineering storage); nitrile is residual. Wardrobe is not a cabinet.",
    "Neither — freeze kills storage rules.",
    "Only extra insurance.",
  ], 1, "STEM + HIER: remaining engineering storage.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "GHS/HazCom: labels (product ID, pictogram, signal word, hazard/precautionary statements, supplier) plus a 16-section SDS. Storage follows incompatibility and quantity — oxidizers away from organics/flammables, acids a... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Flash point 12 °C reported as 12 °F so the clerk skips the flammable cabinet. Error?", [
    "None — 12 is 12.",
    "UNIT: 12 °C ≈ 54 °F, not 12 °F. Use the stem unit before storing.",
    "FORM — they should have used dike volume.",
    "TIME — 8-hour TWA.",
  ], 1, "UNIT: °C vs °F on flash point.", "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "GHS/HazCom: labels (product ID, pictogram, signal word, hazard/precautionary statements, supplier) plus a 16-section SDS. Storage follows incompatibility and quantity — oxidizers away from organics/flammables, acids a... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Water-reactive stored under a wet-pipe branch because “sprinklers are protection.” Problem?", [
    "None — protection always wins.",
    "Wrong protection for that fuel: water may worsen. Segregate to a dry location / appropriate agent; do not blindly sprinkler water-reactives.",
    "None if ABC cans are nearby.",
    "None if Section 2 shows a flame.",
  ], 1, "STEM: compatibility with the protection agent.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "GHS/HazCom: labels (product ID, pictogram, signal word, hazard/precautionary statements, supplier) plus a 16-section SDS. Storage follows incompatibility and quantity — oxidizers away from organics/flammables, acids a... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Property policy extra limit offered instead of splitting oxidizers from acetone. Classify.", [
    "Reduce — policy is a cabinet.",
    "Transfer instead of Reduce. Segregation is the control.",
    "P2 — claims prevent fires.",
    "Avoid — policy deletes acetone.",
  ], 1, "FIN: insurance ≠ segregation.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "GHS/HazCom: labels (product ID, pictogram, signal word, hazard/precautionary statements, supplier) plus a 16-section SDS. Storage follows incompatibility and quantity — oxidizers away from organics/flammables, acids a... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Worker hospitalized after mixing acid and cyanide that were stored together. Team files only an SDS update. Clock?", [
    "SDS updates pause 1904.",
    "Hospitalization: 24 hours to OSHA. Storage failure is still an occupational event.",
    "8 hours because chemicals are always fatalities.",
    "7 days.",
  ], 1, "TIME: 24-hour hospitalization notification.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "GHS/HazCom: labels (product ID, pictogram, signal word, hazard/precautionary statements, supplier) plus a 16-section SDS. Storage follows incompatibility and quantity — oxidizers away from organics/flammables, acids a... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Signal word Warning vs Danger on two flammables. Clerk stores all Warnings together including an oxidizer Warning. Error?", [
    "None — signal word is compatibility.",
    "Signal word is severity of communication, not a storage family. Compatibility is chemistry.",
    "None if both are Danger.",
    "None if both have the same supplier.",
  ], 1, "STEM: Danger/Warning is not a storage class.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "GHS/HazCom: labels (product ID, pictogram, signal word, hazard/precautionary statements, supplier) plus a 16-section SDS. Storage follows incompatibility and quantity — oxidizers away from organics/flammables, acids a... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Section 8 PPE listed first in a design review while substitution of the sensitizer is still open. Best CSP comment?", [
    "Approve PPE — Section 8 is PtD.",
    "Specify the substitute; Section 8 is residual exposure control/PPE, not permission to skip substitution.",
    "Approve if the TLV is copied into the PEL column.",
    "Approve if diamonds are large.",
  ], 1, "HIER: SDS Section 8 does not outrank substitution.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "GHS/HazCom: labels (product ID, pictogram, signal word, hazard/precautionary statements, supplier) plus a 16-section SDS. Storage follows incompatibility and quantity — oxidizers away from organics/flammables, acids a... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Two funded moves: extra umbrella AND extra nitrile, oxidizer still on the acetone shelf. Pair and miss?", [
    "Avoid + reduce; gloves segregate.",
    "Retain/transfer + residual PPE; missing Reduce (segregate/substitute/cabinet).",
    "Two rated cabinets.",
    "GHS + DOT complete.",
  ], 1, "FIN: two money/PPE moves in one stem do not split incompatibles.", "FIN", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "GHS/HazCom: labels (product ID, pictogram, signal word, hazard/precautionary statements, supplier) plus a 16-section SDS. Storage follows incompatibility and quantity — oxidizers away from organics/flammables, acids a... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
