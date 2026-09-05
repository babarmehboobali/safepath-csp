import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D4.04";

export const classFields: ClassFields = {
  hook: "A dock lead wants to ship mixed oxidizers and flammables in one van “because they all have diamonds,” skip shipping papers, and skip a security plan because “we’re not a port.” You are the CSP. The question is what transport and security actually require.",
  hookOilGas: `A pad lead wants to truck mixed oxidizers and condensate in one van âbecause they all have diamonds,â skip shipping papers, and skip a security plan because âweâre not a port.â You are the CSP. The question is what transport and security actually require.`,
  hookConstruction: `A PM wants to run mixed oxidizers and solvents to a job in one van âbecause they all have diamonds,â skip shipping papers, and skip a security plan because âweâre not a port.â You are the CSP. The question is what transport and security actually require.`,
  rule: "Off-site transport of hazardous materials follows DOT/49 CFR principles: classification, packaging, marks/labels/placards, shipping papers, training, emergency response information, segregation of incompatibles, and a transportation security plan when the materials/quantities trigger it. Site chemical security (CFATS-style thinking, access, theft/diversion) is not the same as a shipping paper. ERG is a response aid, not a substitute for papers. Hierarchy still prefers not shipping the hazard if substitution is open.",
  modelCaption:
    "Chain: Classify → Package → Mark/label/placard → Shipping papers + ER info → Segregate → Train → Security plan if triggered. A mixed oxidizer/flammable van stamped “incompatible.” Caption: diamonds on the SDS are not a placard, and a port is not the only security trigger.",
  workedCase:
    "Need to move 300 L of flammable solvent and a crate of oxidizer to a sister plant. First: can the sister substitute so the move dies (avoid/prevention)? If not: separate vehicles or approved segregation, UN packagings, correct placards, shipping papers with emergency number, driver training. A security plan if the table of triggering quantities is met (theft/diversion of the oxidizer). CFATS-style site access control is extra if the inventory sits overnight. “We have GHS pictograms on the bottles” is not DOT.",
  trapsJson: traps(
    "Using GHS pictograms as DOT placards.",
    "Mixing incompatibles because both are “hazmat.”",
    "Skipping a security plan because the site is inland.",
  ),
  contrastJson: contrast([
    { looksLike: "GHS / SDS diamond", actually: "Workplace hazard communication — not a transport placard" },
    { looksLike: "DOT placard / UN number / papers", actually: "Transport offeror and carrier duties" },
    { looksLike: "ERG", actually: "First-responder guide — not a shipping paper" },
    { looksLike: "Site chemical security", actually: "Theft/diversion/access — overlaps but is not 49 CFR papers" },
  ]),
  mustScoreJson: mustScore(
    "Classify, package, mark/label, document, and train for hazmat transport.",
    "Security plans address theft/diversion where required.",
    "Emergency response information must travel with the shipment.",
    "Modal rules differ \u2014 read the stem for highway/rail/air/water.",
    "Segregation of incompatibles matters in mixed loads.",
    "Carrier and shipper responsibilities are distinct but overlapping.",
    "Hierarchy: reduce hazmat shipped when substitution/minimization is open.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "shipping papers lack emergency response info", pick: "correct documentation before transport" },
    { ifStem: "incompatibles are co-loaded", pick: "segregate per rules" },
    { ifStem: "security-sensitive material lacks a plan when required", pick: "implement security plan measures" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "minimization of quantity is open", pick: "reduce what must be shipped" },
  ),

  brief: `Off-site transport of hazardous materials follows DOT/49 CFR principles: classification, packaging, marks/labels/placards, shipping papers, training, emergency response information, segregation of incompatibles, and a transportation security plan when the materials/quantities trigger it. Site chemical security (CFATS-style thinking, access, theft/diversion) is not the same as a shipping paper. ERG is a response aid, not a substitute for If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Off-site transport of hazardous materials follows DOT/49 CFR principles: classification, packaging, marks/labels/placards, shipping papers, training, emergency response information, segregation of incompatibles, and a transportation security plan when the materials/quantities trigger it. Site chemical security (CFATS-style thinking, access, theft/diversion) is not the same as a shipping paper. ERG is a response aid, not a substitute for papers. Hierarchy still prefers not shipping the hazard if substitution is open. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
A dock lead wants to ship mixed oxidizers and flammables in one van âbecause they all have diamonds,â skip shipping papers, and skip a security plan because âweâre not a port.â You are the CSP. The question is what transport and security actually require. Oil-and-gas skin: A pad lead wants to truck mixed oxidizers and condensate in one van âbecause they all have diamonds,â skip shipping papers, and skip a security plan because âweâre not a port.â You are the CSP. Construction skin: A PM wants to run mixed oxidizers and solvents to a job in one van âbecause they all have diamonds,â skip shipping papers, and skip a security plan because âweâre not a port.â You are the CSP. Work the case: Need to move 300 L of flammable solvent and a crate of oxidizer to a sister plant. First: can the sister substitute so the move dies (avoid/prevention)? If not: separate vehicles or approved segregation, UN packagings, correct placards, shipping papers with emergency number, driver training. A security plan if the table of triggering quantities is met (theft/diversion of the oxidizer). CFATS-style site access control is extra if the inventory sits overnight. âWe have GHS pictograms on the bottlesâ is not DOT. Classic traps: Using GHS pictograms as DOT placards.; Mixing incompatibles because both are “hazmat.”; Skipping a security plan because the site is inland.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for hazmat transport security. Verify whether a higher system or design fix is still open. Contrast labels: GHS / SDS diamond is actually Workplace hazard communication — not a transport placard; DOT placard / UN number / papers is actually Transport offeror and carrier duties; ERG is actually First-responder guide — not a shipping paper; Site chemical security is actually Theft/diversion/access — overlaps but is not 49 CFR papers. If the stem shows shipping papers lack emergency response info, pick correct documentation before transport. If the stem shows incompatibles are co-loaded, pick segregate per rules. If the stem shows security-sensitive material lacks a plan when required, pick implement security plan measures. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows minimization of quantity is open, pick reduce what must be shipped. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Hazmat transport — is a GHS diamond a placard? Do oxidizers ride with flammables sits in CSP-11 Domain 4 Emergency Management. The exam tests whether you apply the rule when a package already looks complete. Core rule: Off-site transport of hazardous materials follows DOT/49 CFR principles: classification, packaging, marks/labels/placards, shipping papers, training, emergency response information, segregation of incompatibles, and a transportation security plan when the materials/quantities trigger it. Site chemical security (CFATS-style thinking, access, theft/diversion) is not the same as a shipping paper. ERG is a response aid, not a substitute for papers. Hierarchy still prefers not shipping the hazard if substitution is open. Field context: A dock lead wants to ship mixed oxidizers and flammables in one van âbecause they all have diamonds,â skip shipping papers, and skip a security plan because âweâre not a port.â You are the CSP. The question is what transport and security actually require. The oil-and-gas skin shifts the same decision into production pressure: A pad lead wants to truck mixed oxidizers and condensate in one van âbecause they all have diamonds,â skip shipping papers, and skip a security plan because âweâre not a port.â You are the CSP. The construction skin shifts it into schedule and trade stacking: A PM wants to run mixed oxidizers and solvents to a job in one van âbecause they all have diamonds,â skip shipping papers, and skip a security plan because âweâre not a port.â You are the CSP. Model caption for this class: Chain: Classify â Package â Mark/label/placard â Shipping papers + ER info â Segregate â Train â Security plan if triggered. A mixed oxidizer/flammable van stamped âincompatible.â Caption: diamonds on the SDS are not a placard, and a port is not the only security trigger. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Classify, package, mark/label, document, and train for hazmat transport. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Security plans address theft/diversion where required. (3) Emergency response information must travel with the shipment. (4) Modal rules differ — read the stem for highway/rail/air/water. (5) Segregation of incompatibles matters in mixed loads. (6) Carrier and shipper responsibilities are distinct but overlapping. (7) Hierarchy: reduce hazmat shipped when substitution/minimization is open. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Need to move 300 L of flammable solvent and a crate of oxidizer to a sister plant. First: can the sister substitute so the move dies (avoid/prevention)? If not: separate vehicles or approved segregation, UN packagings, correct placards, shipping papers with emergency number, driver training. A security plan if the table of triggering quantities is met (theft/diversion of the oxidizer). CFATS-style site access control is extra if the inventory sits overnight. âWe have GHS pictograms on the bottlesâ is not DOT. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Using GHS pictograms as DOT placards.; Mixing incompatibles because both are “hazmat.”; Skipping a security plan because the site is inland.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “GHS / SDS diamond” is really Workplace hazard communication — not a transport placard; “DOT placard / UN number / papers” is really Transport offeror and carrier duties; “ERG” is really First-responder guide — not a shipping paper; “Site chemical security” is really Theft/diversion/access — overlaps but is not 49 CFR papers. Stem-if-then map: if shipping papers lack emergency response info → correct documentation before transport; if incompatibles are co-loaded → segregate per rules; if security-sensitive material lacks a plan when required → implement security plan measures; if two answers work → higher hierarchy / system / design; if minimization of quantity is open → reduce what must be shipped. Scoring favors evidence, owners, verification, and hierarchy-smart controls on hazmat transport security. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Hazmat transport — is a GHS diamond a placard? Do oxidizers ride with flammables?",
  cardBack:
    "DOT: classify, package, marks/placards, papers, ER info, train, segregate. Security plan if triggered — not only at ports. GHS ≠ DOT. Incompatibles split. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence names classification/packaging/papers/placards/segregation, says GHS is not DOT, and says a security plan is quantity-triggered not port-only.",
};

export const items: ClassItem[] = [
  exam(T, "Dock wants oxidizers and flammables in one van because both bottles show GHS flame/oxidizer pictograms. Best action?", [
    "Ship — GHS diamonds are placards.",
    "Do not mix incompatibles. GHS is workplace communication, not DOT segregation or placarding. Split the load or do not offer it.",
    "Ship if extra ABC cans ride along (protection).",
    "Ship if the umbrella is extra.",
  ], 1, "HIER/TOOL: segregation + GHS ≠ DOT.", "HIER", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Off-site transport of hazardous materials follows DOT/49 CFR principles: classification, packaging, marks/labels/placards, shipping papers, training, emergency response information, segregation of incompatibles, and a... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Shipping papers are skipped because the ERG page is taped to the dash. Adequacy?", [
    "Adequate — ERG is the paper.",
    "Inadequate: shipping papers and emergency-response information are offeror/carrier duties. ERG is a responder aid, not the document.",
    "Adequate if the SDS is in the glove box only.",
    "Adequate on private roads only, always.",
  ], 1, "TOOL: ERG vs shipping papers.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Off-site transport of hazardous materials follows DOT/49 CFR principles: classification, packaging, marks/labels/placards, shipping papers, training, emergency response information, segregation of incompatibles, and a... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Security plan skipped because “we are inland, not a port, and CFATS is somebody else.” Load is a theft-attractive placarded quantity. Comment?", [
    "Correct — only ports write security plans.",
    "Wrong: transportation security plans trigger on materials/quantities, not on saltwater. Site chemical security is a separate overlay.",
    "Correct if the driver has a GHS card.",
    "Correct if ICS Liaison is named.",
  ], 1, "STEM: security is trigger-based, not port-only.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Off-site transport of hazardous materials follows DOT/49 CFR principles: classification, packaging, marks/labels/placards, shipping papers, training, emergency response information, segregation of incompatibles, and a... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Sister plant can switch to a non-regulated cleaner so the 300 L solvent move dies. Best first move?", [
    "Ship anyway — transport is inevitable.",
    "Avoid/substitute: do not create the transport risk if the activity is optional.",
    "Placard extra hard.",
    "Transfer via a hold-harmless and ship mixed.",
  ], 1, "HIER: not shipping is prevention/avoid.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Off-site transport of hazardous materials follows DOT/49 CFR principles: classification, packaging, marks/labels/placards, shipping papers, training, emergency response information, segregation of incompatibles, and a... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Last sentence: the only truck leaves in 20 minutes; segregation cannot be met; extra extinguishers are on the bench. Best offeror decision?", [
    "Go — protection cans complete DOT.",
    "Do not offer the incompatible load. Time pressure is not an exception.",
    "Go if Finance raises the deductible.",
    "Go if the driver reads the ERG aloud.",
  ], 1, "STEM: last sentence froze segregation. Stop the offer.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Off-site transport of hazardous materials follows DOT/49 CFR principles: classification, packaging, marks/labels/placards, shipping papers, training, emergency response information, segregation of incompatibles, and a... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Air cargo vs highway: crate booked on a passenger aircraft using the highway packing instruction. Risk?", [
    "None — DOT is modal-universal.",
    "Wrong tool/mode: air rules are not highway rules. Use the mode actually booked.",
    "None if placarded for highway.",
    "None if RPO is 4 h.",
  ], 1, "TOOL: modal difference.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Off-site transport of hazardous materials follows DOT/49 CFR principles: classification, packaging, marks/labels/placards, shipping papers, training, emergency response information, segregation of incompatibles, and a... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Driver fatality in a hazmat crash. Team delays OSHA to finish the DOT incident form. Clock?", [
    "DOT forms pause 1904.",
    "Fatality: 8 hours to OSHA. DOT notices are parallel, not a substitute clock.",
    "24 hours because it is transportation.",
    "7 days.",
  ], 1, "TIME: 8-hour fatality notification still applies to the employer’s worker.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Off-site transport of hazardous materials follows DOT/49 CFR principles: classification, packaging, marks/labels/placards, shipping papers, training, emergency response information, segregation of incompatibles, and a... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Carrier’s extra liability policy is offered instead of UN specification packaging. Classify.", [
    "Reduce — policy is packaging.",
    "Transfer instead of Reduce. Packaging/containment is the control; insurance is money.",
    "Avoid — policy cancels the trip.",
    "Retain — deductible equals UN.",
  ], 1, "FIN: insurance ≠ packaging.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Off-site transport of hazardous materials follows DOT/49 CFR principles: classification, packaging, marks/labels/placards, shipping papers, training, emergency response information, segregation of incompatibles, and a... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Placard threshold not met; labels on packages still required by the class. Team skips labels because “no placard means no communication.” Error?", [
    "None — placards are the only communication.",
    "STEM: package marks/labels and papers can still apply below a placard threshold.",
    "None if GHS is on the pallet wrap.",
    "None if ERG is in the cab.",
  ], 1, "STEM: placard threshold ≠ silence.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Off-site transport of hazardous materials follows DOT/49 CFR principles: classification, packaging, marks/labels/placards, shipping papers, training, emergency response information, segregation of incompatibles, and a... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Wrong analysis: a JHA for “drive carefully” as the PHA of a bulk chlorine move. Comment?", [
    "Accept — JHA is transport PHA.",
    "TOOL: driving is a job (JHA residual) but offering chlorine is classification/containment/security plus route/process risk — not a slogan JHA.",
    "Accept if RPN < 100.",
    "Accept if ICS Planning wrote it.",
  ], 1, "TOOL: JHA slogan ≠ hazmat offeror system.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Off-site transport of hazardous materials follows DOT/49 CFR principles: classification, packaging, marks/labels/placards, shipping papers, training, emergency response information, segregation of incompatibles, and a... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Flash point 35 °C listed; someone converts as 35 °F and declares combustible not flammable for DOT class. Error?", [
    "None — 35 is 35.",
    "UNIT: 35 °C is 95 °F, not 35 °F. Use the stem unit (and the right scale) before classing.",
    "FORM — they should have used ROI.",
    "PELTLV.",
  ], 1, "UNIT: °C vs °F on flash point.", "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Off-site transport of hazardous materials follows DOT/49 CFR principles: classification, packaging, marks/labels/placards, shipping papers, training, emergency response information, segregation of incompatibles, and a... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Two moves: higher cargo deductible AND extra umbrella, still mixed oxidizer/flammable on one trailer. Pair and miss?", [
    "Avoid + reduce; segregation is optional.",
    "Retain + transfer; missing Reduce (segregate/do not offer) of the incompatibility.",
    "Two specification packagings.",
    "Prevention + protection complete.",
  ], 1, "FIN: two financing strategies in one stem do not segregate.", "FIN", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Off-site transport of hazardous materials follows DOT/49 CFR principles: classification, packaging, marks/labels/placards, shipping papers, training, emergency response information, segregation of incompatibles, and a... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
