import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D5.03";

export const classFields: ClassFields = {
  hook: "A supervisor wants to pour still bottoms down the storm drain “because the SDS says irritant, not waste,” skip the manifest, and keep 90-day LQG drums for 11 months because “recycling is planned.” You are the CSP. The question is how RCRA actually classifies and clocks that material.",
  hookOilGas: `A supervisor wants to pour separator sludge down the pad drain âbecause the SDS says irritant, not waste,â skip the manifest, and keep 90-day LQG drums for 11 months because ârecycling is planned.â You are the CSP. The question is how RCRA actually classifies and clocks that material.`,
  hookConstruction: `A superintendent wants to pour paint waste down the storm drain âbecause the SDS says irritant, not waste,â skip the manifest, and keep 90-day LQG drums for 11 months because ârecycling is planned.â You are the CSP. The question is how RCRA actually classifies and clocks that material.`,
  rule: "Hazardous waste is listed (F, K, P, U) or characteristic (ignitable, corrosive, reactive, toxic). Generator category (VSQG/SQG/LQG) sets accumulation time and duties. Cradle-to-grave: ID, contain, label, accumulate on clock, manifest, licensed TSDF. P2 still beats making the waste. SDS hazard ≠ RCRA status. Universal waste is a different streamlined path (Class 58).",
  modelCaption:
    "Decision: listed? → characteristic I/C/R/T? → generator category → accumulation clock (e.g., 90-day LQG) → manifest → TSDF. Side stamp: “SDS irritant ≠ not a waste.” Caption: the drain is not a TSDF.",
  workedCase:
    "Still bottoms from a listed solvent process: likely F-listed (and ignitable). LQG if counts exceed the stem’s threshold. 90-day accumulation at the site, closed labeled drums, weekly inspection, contingency plan, manifest to TSDF. Do not wait 11 months for a hoped recycler. Do not declare “universal waste” to dodge the listing. P2: substitute so bottoms stop. Drain disposal is illegal treatment/disposal.",
  trapsJson: traps(
    "Using SDS signal word as the RCRA determination.",
    "Ignoring the 90-day LQG clock because recycling is “planned.”",
    "Calling everything universal waste.",
  ),
  contrastJson: contrast([
    { looksLike: "Listed F/K/P/U", actually: "Named wastes from processes or discarded products" },
    { looksLike: "Characteristic D", actually: "Ignitable, corrosive, reactive, toxic by test/property" },
    { looksLike: "LQG 90-day", actually: "Accumulation clock — not a suggested recycling vibe" },
    { looksLike: "Universal waste", actually: "Streamlined subset (Class 58) — not still bottoms" },
  ]),
  mustScoreJson: mustScore(
    "Characterize waste: listed, characteristic, or excluded \u2014 then manage accordingly.",
    "Satellite accumulation and storage area rules differ \u2014 read the stem.",
    "Containers closed, labeled, dated as required.",
    "Manifests and trained personnel for shipments.",
    "Emergency equipment and contingency planning for large quantity contexts.",
    "Do not dilute to dodge characterization without lawful basis.",
    "P2 to reduce waste generation beats end-of-pipe only.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "characterization is skipped", pick: "characterize before disposal decisions" },
    { ifStem: "containers are open in storage", pick: "close and manage per rules" },
    { ifStem: "dates/labels missing", pick: "correct labeling/dating" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "generation can be reduced upstream", pick: "prefer P2" },
  ),

  brief: `Hazardous waste is listed (F, K, P, U) or characteristic (ignitable, corrosive, reactive, toxic). Generator category (VSQG/SQG/LQG) sets accumulation time and duties. Cradle-to-grave: ID, contain, label, accumulate on clock, manifest, licensed TSDF. P2 still beats making the waste. SDS hazard â RCRA status. Universal waste is a different streamlined path (Class 58). If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Hazardous waste is listed (F, K, P, U) or characteristic (ignitable, corrosive, reactive, toxic). Generator category (VSQG/SQG/LQG) sets accumulation time and duties. Cradle-to-grave: ID, contain, label, accumulate on clock, manifest, licensed TSDF. P2 still beats making the waste. SDS hazard â  RCRA status. Universal waste is a different streamlined path (Class 58). Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
A supervisor wants to pour still bottoms down the storm drain âbecause the SDS says irritant, not waste,â skip the manifest, and keep 90-day LQG drums for 11 months because ârecycling is planned.â You are the CSP. The question is how RCRA actually classifies and clocks that material. Oil-and-gas skin: A supervisor wants to pour separator sludge down the pad drain âbecause the SDS says irritant, not waste,â skip the manifest, and keep 90-day LQG drums for 11 months because ârecycling is planned.â You are the CSP. Construction skin: A superintendent wants to pour paint waste down the storm drain âbecause the SDS says irritant, not waste,â skip the manifest, and keep 90-day LQG drums for 11 months because ârecycling is planned.â You are the CSP. Work the case: Still bottoms from a listed solvent process: likely F-listed (and ignitable). LQG if counts exceed the stemâs threshold. 90-day accumulation at the site, closed labeled drums, weekly inspection, contingency plan, manifest to TSDF. Do not wait 11 months for a hoped recycler. Do not declare âuniversal wasteâ to dodge the listing. P2: substitute so bottoms stop. Drain disposal is illegal treatment/disposal. Classic traps: Using SDS signal word as the RCRA determination.; Ignoring the 90-day LQG clock because recycling is “planned.”; Calling everything universal waste.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for hazardous waste. Verify whether a higher system or design fix is still open. Contrast labels: Listed F/K/P/U is actually Named wastes from processes or discarded products; Characteristic D is actually Ignitable, corrosive, reactive, toxic by test/property; LQG 90-day is actually Accumulation clock — not a suggested recycling vibe; Universal waste is actually Streamlined subset (Class 58) — not still bottoms. If the stem shows characterization is skipped, pick characterize before disposal decisions. If the stem shows containers are open in storage, pick close and manage per rules. If the stem shows dates/labels missing, pick correct labeling/dating. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows generation can be reduced upstream, pick prefer P2. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `RCRA — listed vs characteristic? Does “planning to recycle” stop the 90-day clock sits in CSP-11 Domain 5 Environmental Management. The exam tests whether you apply the rule when a package already looks complete. Core rule: Hazardous waste is listed (F, K, P, U) or characteristic (ignitable, corrosive, reactive, toxic). Generator category (VSQG/SQG/LQG) sets accumulation time and duties. Cradle-to-grave: ID, contain, label, accumulate on clock, manifest, licensed TSDF. P2 still beats making the waste. SDS hazard â  RCRA status. Universal waste is a different streamlined path (Class 58). Field context: A supervisor wants to pour still bottoms down the storm drain âbecause the SDS says irritant, not waste,â skip the manifest, and keep 90-day LQG drums for 11 months because ârecycling is planned.â You are the CSP. The question is how RCRA actually classifies and clocks that material. The oil-and-gas skin shifts the same decision into production pressure: A supervisor wants to pour separator sludge down the pad drain âbecause the SDS says irritant, not waste,â skip the manifest, and keep 90-day LQG drums for 11 months because ârecycling is planned.â You are the CSP. The construction skin shifts it into schedule and trade stacking: A superintendent wants to pour paint waste down the storm drain âbecause the SDS says irritant, not waste,â skip the manifest, and keep 90-day LQG drums for 11 months because ârecycling is planned.â You are the CSP. Model caption for this class: Decision: listed? â characteristic I/C/R/T? â generator category â accumulation clock (e.g., 90-day LQG) â manifest â TSDF. Side stamp: âSDS irritant â  not a waste.â Caption: the drain is not a TSDF. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Characterize waste: listed, characteristic, or excluded — then manage accordingly. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Satellite accumulation and storage area rules differ — read the stem. (3) Containers closed, labeled, dated as required. (4) Manifests and trained personnel for shipments. (5) Emergency equipment and contingency planning for large quantity contexts. (6) Do not dilute to dodge characterization without lawful basis. (7) P2 to reduce waste generation beats end-of-pipe only. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Still bottoms from a listed solvent process: likely F-listed (and ignitable). LQG if counts exceed the stemâs threshold. 90-day accumulation at the site, closed labeled drums, weekly inspection, contingency plan, manifest to TSDF. Do not wait 11 months for a hoped recycler. Do not declare âuniversal wasteâ to dodge the listing. P2: substitute so bottoms stop. Drain disposal is illegal treatment/disposal. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Using SDS signal word as the RCRA determination.; Ignoring the 90-day LQG clock because recycling is “planned.”; Calling everything universal waste.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Listed F/K/P/U” is really Named wastes from processes or discarded products; “Characteristic D” is really Ignitable, corrosive, reactive, toxic by test/property; “LQG 90-day” is really Accumulation clock — not a suggested recycling vibe; “Universal waste” is really Streamlined subset (Class 58) — not still bottoms. Stem-if-then map: if characterization is skipped → characterize before disposal decisions; if containers are open in storage → close and manage per rules; if dates/labels missing → correct labeling/dating; if two answers work → higher hierarchy / system / design; if generation can be reduced upstream → prefer P2. Scoring favors evidence, owners, verification, and hierarchy-smart controls on hazardous waste. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "RCRA — listed vs characteristic? Does “planning to recycle” stop the 90-day clock?",
  cardBack:
    "Listed F/K/P/U or I/C/R/T characteristic. LQG accumulation is a real clock. Manifest to TSDF. SDS ≠ determination. Drain ≠ TSDF. P2 first. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence names listed vs characteristic, says generator category sets accumulation time, and says SDS hazard is not the RCRA determination.",
};

export const items: ClassItem[] = [
  exam(T, "Still bottoms from a listed solvent process, SDS “irritant.” Supervisor wants the storm drain. Best determination?", [
    "Not a waste — SDS lacks the word hazardous.",
    "Treat as hazardous waste (likely listed and/or ignitable). The drain is not a TSDF. Manifest and contain.",
    "Universal waste because it is liquid.",
    "Solid waste only if it is a rock.",
  ], 1, "STEM: SDS ≠ RCRA. Drain ≠ disposal facility.", "STEM", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "Hazardous waste is listed (F, K, P, U) or characteristic (ignitable, corrosive, reactive, toxic). Generator category (VSQG/SQG/LQG) sets accumulation time and duties. Cradle-to-grave: ID, contain, label, accumulate on... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "LQG drums on day 88; recycler “might” come in 4 months. Action?", [
    "Wait — planned recycling stops the clock.",
    "Ship within the 90-day accumulation (or a stem-granted extension). Hope is not a clock.",
    "Relabel as universal waste to reset to 1 year.",
    "Pour off 1 quart to become VSQG retroactively for the pile.",
  ], 1, "TIME: LQG 90-day accumulation is real.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "Hazardous waste is listed (F, K, P, U) or characteristic (ignitable, corrosive, reactive, toxic). Generator category (VSQG/SQG/LQG) sets accumulation time and duties. Cradle-to-grave: ID, contain, label, accumulate on... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Best first move while a listed solvent is still optional in the process?", [
    "A prettier drum and a faster TSDF.",
    "P2/substitution so the listed waste is not generated.",
    "A GHS relabel to Warning.",
    "Extra environmental insurance.",
  ], 1, "HIER: source reduction beats waste administration.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "Hazardous waste is listed (F, K, P, U) or characteristic (ignitable, corrosive, reactive, toxic). Generator category (VSQG/SQG/LQG) sets accumulation time and duties. Cradle-to-grave: ID, contain, label, accumulate on... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Characteristic ignitable vs listed: flash point test shows ignitable, and the waste is also F-listed. Status?", [
    "Pick only ignitable — tests beat lists.",
    "It can be both; listing is not erased by also being characteristic. Manage to the applicable requirements.",
    "Neither if the SDS says irritant.",
    "Universal waste automatically.",
  ], 1, "STEM: listed and characteristic can stack.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "Hazardous waste is listed (F, K, P, U) or characteristic (ignitable, corrosive, reactive, toxic). Generator category (VSQG/SQG/LQG) sets accumulation time and duties. Cradle-to-grave: ID, contain, label, accumulate on... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Last sentence: state rule is stricter than federal SQG time. Team uses the federal clock only. Best call?", [
    "Federal always preempts.",
    "Honor the stricter applicable requirement the stem gave — last sentence is the clock.",
    "Average the two clocks.",
    "Use OSHA 8 hours.",
  ], 1, "STEM: last sentence set the stricter clock.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "Hazardous waste is listed (F, K, P, U) or characteristic (ignitable, corrosive, reactive, toxic). Generator category (VSQG/SQG/LQG) sets accumulation time and duties. Cradle-to-grave: ID, contain, label, accumulate on... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Manifest skipped because the TSDF is “a friend” and the policy is extra. Issue?", [
    "Fine — transfer replaces cradle-to-grave.",
    "Cradle-to-grave paperwork remains. Insurance/friendship is not a manifest.",
    "Fine if drums are labeled with GHS only.",
    "Fine if ICS Finance signs.",
  ], 1, "FIN: transfer ≠ RCRA tracking.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "Hazardous waste is listed (F, K, P, U) or characteristic (ignitable, corrosive, reactive, toxic). Generator category (VSQG/SQG/LQG) sets accumulation time and duties. Cradle-to-grave: ID, contain, label, accumulate on... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Worker hospitalized from a drum splash during illegal drain dumping. Team files only an EPA spill call. OSHA clock?", [
    "EPA calls replace 1904.",
    "Hospitalization: 24 hours to OSHA. Environmental notices are parallel.",
    "8 hours because waste is always a fatality.",
    "7 days.",
  ], 1, "TIME: 24-hour OSHA hospitalization.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "Hazardous waste is listed (F, K, P, U) or characteristic (ignitable, corrosive, reactive, toxic). Generator category (VSQG/SQG/LQG) sets accumulation time and duties. Cradle-to-grave: ID, contain, label, accumulate on... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a pharma suite changeover. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: pH 1.8 aqueous waste. Characteristic.", [
    "Toxic only.",
    "Corrosive characteristic (and manage accordingly) — pH is the stem’s property.",
    "Not a waste below pH 2 if the SDS says irritant.",
    "Universal waste acid.",
  ], 1, "STEM: corrosive characteristic from pH.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "Hazardous waste is listed (F, K, P, U) or characteristic (ignitable, corrosive, reactive, toxic). Generator category (VSQG/SQG/LQG) sets accumulation time and duties. Cradle-to-grave: ID, contain, label, accumulate on... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Wrong tool: JHA “pour slowly” as the RCRA determination. Comment?", [
    "Accept — JHA is listing.",
    "TOOL: determination is listed/characteristic vs solid waste. A pour-slowly JHA is a job aid, not the status.",
    "Accept if RPN < 100.",
    "Accept if the drain is named in the JHA.",
  ], 1, "TOOL: JHA ≠ RCRA ID.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "Hazardous waste is listed (F, K, P, U) or characteristic (ignitable, corrosive, reactive, toxic). Generator category (VSQG/SQG/LQG) sets accumulation time and duties. Cradle-to-grave: ID, contain, label, accumulate on... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Satellite accumulation: stem gives 55 gal at the point of generation. Clerk consolidates 200 gal in the hallway for “efficiency.” Issue?", [
    "Fine — hallways are satellite.",
    "Exceeded the stem’s satellite limit and location. Move into the proper accumulation area on the LQG/SQG clock.",
    "Fine if GHS diamonds are large.",
    "Fine if recycling is planned in 11 months.",
  ], 1, "STEM: last sentence gave 55 gal satellite.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "Hazardous waste is listed (F, K, P, U) or characteristic (ignitable, corrosive, reactive, toxic). Generator category (VSQG/SQG/LQG) sets accumulation time and duties. Cradle-to-grave: ID, contain, label, accumulate on... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "UNIT: TCLP result 6.0 mg/L vs a 5.0 mg/L D-code limit, reported as 6.0 ppm “so it is under.” Error?", [
    "None — mg/L equals ppm always in TCLP.",
    "UNIT/STEM: do not casually rename mg/L as a different limit; 6.0 > 5.0 so it fails. The rename was a dodge.",
    "PELTLV — they used a TLV.",
    "FORM — they should have used ROI.",
  ], 1, "UNIT: do not relabel a failing concentration to sneak under a limit.", "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "Hazardous waste is listed (F, K, P, U) or characteristic (ignitable, corrosive, reactive, toxic). Generator category (VSQG/SQG/LQG) sets accumulation time and duties. Cradle-to-grave: ID, contain, label, accumulate on... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Two funded moves: higher pollution deductible AND extra umbrella, still draining listed bottoms. Pair and miss?", [
    "Avoid + reduce; drain is TSDF.",
    "Retain + transfer; missing Reduce/P2 and legal TSDF management.",
    "Two manifests.",
    "Universal + listed complete.",
  ], 1, "FIN: two financing strategies in one stem do not satisfy RCRA.", "FIN", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "Hazardous waste is listed (F, K, P, U) or characteristic (ignitable, corrosive, reactive, toxic). Generator category (VSQG/SQG/LQG) sets accumulation time and duties. Cradle-to-grave: ID, contain, label, accumulate on... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
