import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D6.01";

export const classFields: ClassFields = {
  hook: "A foreman dry-cuts CMU because “the SDS for the saw says wear a dust mask,” and Table 1 wet methods would slow the pour. You are the CSP. The question is what GHS/SDS actually does versus what a silica rule requires.",
  hookOilGas: `A foreman dry-cuts refractory in a heater because âthe SDS says wear a dust mask,â and wet methods would slow the outage. You are the CSP. The question is what GHS/SDS actually does versus what a silica rule requires.`,
  hookConstruction: `On a busy jobsite, chemical sds silica shows up when schedule pressure sells a permit, rotation, or PPE package while design still can change. SDS/GHS is hazard communication (16 sections): identity, hazards, controls as information â not a substitute for hierarchy or for a substance-specific standard. Discriminate the open row before you laminate another card.`,
  rule: "SDS/GHS is hazard communication (16 sections): identity, hazards, controls as information — not a substitute for hierarchy or for a substance-specific standard. Respirable crystalline silica: OSHA PEL 50 μg/m³ (8-hr TWA), action level 25 μg/m³. Construction Table 1 (wet, shroud, HEPA) can replace monitoring when followed; otherwise objective data or exposure assessment. Don’t dry-cut because Section 8 listed a mask. If two answers work, take higher hierarchy / system / design (don’t generate dust).",
  modelCaption: "Left: 16-section SDS stamped “information.” Center: silica PEL 50 μg/m³ / AL 25. Right: Table 1 wet saw vs dry cut + disposable mask. Caption: SDS ≠ Table 1 ≠ PEL.",
  workedCase: "CMU cut. SDS confirms crystalline silica is present (Recognize). Control: Table 1 wet cutting + shroud, or another specified method; respirator only as the table or assessment requires. Dry cutting plus a filtering facepiece because Section 8 mentioned a mask skips engineering. PEL is 50 μg/m³ not 50 mg/m³ (UNIT) and not a TLV that differs (PELTLV).",
  brief: `SDS/GHS is hazard communication (16 sections): identity, hazards, controls as information â not a substitute for hierarchy or for a substance-specific standard. Respirable crystalline silica: OSHA PEL 50 Î¼g/mÂ³ (8-hr TWA), action level 25 Î¼g/mÂ³. Construction Table 1 (wet, shroud, HEPA) can replace monitoring when followed; otherwise objective data or exposure assessment. Donât dry-cut because If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
SDS/GHS is hazard communication (16 sections): identity, hazards, controls as information â not a substitute for hierarchy or for a substance-specific standard. Respirable crystalline silica: OSHA PEL 50 Î¼g/mÂ³ (8-hr TWA), action level 25 Î¼g/mÂ³. Construction Table 1 (wet, shroud, HEPA) can replace monitoring when followed; otherwise objective data or exposure assessment. Donât dry-cut because Section 8 listed a mask. If two answers work, take higher hierarchy / system / design (donât generate dust). Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
A foreman dry-cuts CMU because âthe SDS for the saw says wear a dust mask,â and Table 1 wet methods would slow the pour. You are the CSP. The question is what GHS/SDS actually does versus what a silica rule requires. Oil-and-gas skin: A foreman dry-cuts refractory in a heater because âthe SDS says wear a dust mask,â and wet methods would slow the outage. You are the CSP. Construction skin: On a busy jobsite, chemical sds silica shows up when schedule pressure sells a permit, rotation, or PPE package while design still can change. SDS/GHS is hazard communication (16 sections): identity, hazards, controls as information â not a substitute for hierarchy or for a substance-specific standard. Discriminate the open row before you laminate another card. Work the case: CMU cut. SDS confirms crystalline silica is present (Recognize). Control: Table 1 wet cutting + shroud, or another specified method; respirator only as the table or assessment requires. Dry cutting plus a filtering facepiece because Section 8 mentioned a mask skips engineering. PEL is 50 Î¼g/mÂ³ not 50 mg/mÂ³ (UNIT) and not a TLV that differs (PELTLV). Classic traps: Treating SDS Section 8 as a permit to skip Table 1 / LEV.; Reading 50 μg/m³ as 50 mg/m³ (1000×).; Using a TLV or construction “dust mask folklore” as the OSHA silica PEL.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for chemical sds silica. Verify whether a higher system or design fix is still open. Contrast labels: SDS / GHS is actually Communication — 16 sections; not the exposure plan by itself; Table 1 / specified control is actually Engineering/work-practice recipe that can stand in for monitoring when fully followed; Silica PEL 50 μg/m³ is actually OSHA legal 8-hour TWA (AL 25 μg/m³); TLV / REL is actually Advisory — PELTLV if used as the citation limit; Disposable “dust mask” is actually PPE — last, and often the wrong APF for dry RCS. If the stem shows dry sweeping silica dust, pick use wet/HEPA methods. If the stem shows only respirators proposed while wet methods open, pick engineer/wet methods first. If the stem shows SDS lists substitution options, pick consider substitution. If the stem shows TLV quoted as legal limit, pick distinguish PEL vs TLV. If the stem shows two answers work, pick higher hierarchy / system / design. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `SDS vs Table 1 vs silica PEL 50 of what unit sits in CSP-11 Domain 6 Occupational Health and Ergonomics. The exam tests whether you apply the rule when a package already looks complete. Core rule: SDS/GHS is hazard communication (16 sections): identity, hazards, controls as information â not a substitute for hierarchy or for a substance-specific standard. Respirable crystalline silica: OSHA PEL 50 Î¼g/mÂ³ (8-hr TWA), action level 25 Î¼g/mÂ³. Construction Table 1 (wet, shroud, HEPA) can replace monitoring when followed; otherwise objective data or exposure assessment. Donât dry-cut because Section 8 listed a mask. If two answers work, take higher hierarchy / system / design (donât generate dust). Field context: A foreman dry-cuts CMU because âthe SDS for the saw says wear a dust mask,â and Table 1 wet methods would slow the pour. You are the CSP. The question is what GHS/SDS actually does versus what a silica rule requires. The oil-and-gas skin shifts the same decision into production pressure: A foreman dry-cuts refractory in a heater because âthe SDS says wear a dust mask,â and wet methods would slow the outage. You are the CSP. The construction skin shifts it into schedule and trade stacking: On a busy jobsite, chemical sds silica shows up when schedule pressure sells a permit, rotation, or PPE package while design still can change. SDS/GHS is hazard communication (16 sections): identity, hazards, controls as information â not a substitute for hierarchy or for a substance-specific standard. Discriminate the open row before you laminate another card. Model caption for this class: Left: 16-section SDS stamped âinformation.â Center: silica PEL 50 Î¼g/mÂ³ / AL 25. Right: Table 1 wet saw vs dry cut + disposable mask. Caption: SDS â  Table 1 â  PEL. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) SDS informs hazards, controls, and PPE — it does not replace hierarchy. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Silica: eliminate/substitute, wet methods, local exhaust, isolation, then respirators. (3) Table 1 / competent person concepts appear in construction silica stems — read carefully. (4) PEL vs TLV/REL confusion is a PELTLV trap. (5) Medical surveillance supports residual risk — not a substitute for exposure control. (6) Housekeeping with HEPA/wet methods beats dry sweeping silica. (7) MoC when introducing silica-generating tasks. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: CMU cut. SDS confirms crystalline silica is present (Recognize). Control: Table 1 wet cutting + shroud, or another specified method; respirator only as the table or assessment requires. Dry cutting plus a filtering facepiece because Section 8 mentioned a mask skips engineering. PEL is 50 Î¼g/mÂ³ not 50 mg/mÂ³ (UNIT) and not a TLV that differs (PELTLV). Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Treating SDS Section 8 as a permit to skip Table 1 / LEV.; Reading 50 μg/m³ as 50 mg/m³ (1000×).; Using a TLV or construction “dust mask folklore” as the OSHA silica PEL.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “SDS / GHS” is really Communication — 16 sections; not the exposure plan by itself; “Table 1 / specified control” is really Engineering/work-practice recipe that can stand in for monitoring when fully followed; “Silica PEL 50 μg/m³” is really OSHA legal 8-hour TWA (AL 25 μg/m³); “TLV / REL” is really Advisory — PELTLV if used as the citation limit; “Disposable “dust mask”” is really PPE — last, and often the wrong APF for dry RCS. Stem-if-then map: if dry sweeping silica dust → use wet/HEPA methods; if only respirators proposed while wet methods open → engineer/wet methods first; if SDS lists substitution options → consider substitution; if TLV quoted as legal limit → distinguish PEL vs TLV; if two answers work → higher hierarchy / system / design. Scoring favors evidence, owners, verification, and hierarchy-smart controls on chemical sds silica. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "SDS vs Table 1 vs silica PEL 50 of what unit?",
  cardBack: "SDS communicates. Silica PEL 50 μg/m³ TWA, AL 25. Table 1 wet/shroud/HEPA when followed. Mask ≠ engineering. μg not mg. Study only — not allowed in the test center.",
  teachBackKey: "Pass if the sentence says SDS is communication not a waiver, silica PEL is 50 μg/m³ with AL 25, and Table 1/engineering beats a dry cut plus dust mask.",
  trapsJson: traps(
    "Treating SDS Section 8 as a permit to skip Table 1 / LEV.",
    "Reading 50 μg/m³ as 50 mg/m³ (1000×).",
    "Using a TLV or construction “dust mask folklore” as the OSHA silica PEL.",
  ),
  contrastJson: contrast([
    { looksLike: "SDS / GHS", actually: "Communication — 16 sections; not the exposure plan by itself" },
    { looksLike: "Table 1 / specified control", actually: "Engineering/work-practice recipe that can stand in for monitoring when fully followed" },
    { looksLike: "Silica PEL 50 μg/m³", actually: "OSHA legal 8-hour TWA (AL 25 μg/m³)" },
    { looksLike: "TLV / REL", actually: "Advisory — PELTLV if used as the citation limit" },
    { looksLike: "Disposable “dust mask”", actually: "PPE — last, and often the wrong APF for dry RCS" },
  ]),
  mustScoreJson: mustScore(
    "SDS informs hazards, controls, and PPE \u2014 it does not replace hierarchy.",
    "Silica: eliminate/substitute, wet methods, local exhaust, isolation, then respirators.",
    "Table 1 / competent person concepts appear in construction silica stems \u2014 read carefully.",
    "PEL vs TLV/REL confusion is a PELTLV trap.",
    "Medical surveillance supports residual risk \u2014 not a substitute for exposure control.",
    "Housekeeping with HEPA/wet methods beats dry sweeping silica.",
    "MoC when introducing silica-generating tasks.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "dry sweeping silica dust", pick: "use wet/HEPA methods" },
    { ifStem: "only respirators proposed while wet methods open", pick: "engineer/wet methods first" },
    { ifStem: "SDS lists substitution options", pick: "consider substitution" },
    { ifStem: "TLV quoted as legal limit", pick: "distinguish PEL vs TLV" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
  ),

  formulaSlug: null,
};

export const items: ClassItem[] = [
  exam(
    T,
    "Foreman dry-cuts CMU because SDS Section 8 lists a dust mask. Best CSP position?",
    [
      "Approve — SDS is Table 1.",
      "Reject: SDS is communication. Follow silica specified controls (wet/shroud/HEPA or assessment). A listed mask does not authorize dry cutting.",
      "Approve if the mask is N95 colored.",
      "Approve if the TLV is 50 mg/m³.",
    ],
    1,
    "HIER: engineering/work practice before PPE; SDS ≠ specified control.",
    "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "SDS/GHS is hazard communication (16 sections): identity, hazards, controls as information — not a substitute for hierarchy or for a substance-specific standard. Respirable crystalline silica: OSHA PEL 50 μg/m³ (8-hr T... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at a pharma suite changeover. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: OSHA respirable crystalline silica 8-hour PEL.",
    [
      "50 mg/m³ (UNIT miss).",
      "50 μg/m³ (0.050 mg/m³) TWA; action level 25 μg/m³.",
      "5 mg/m³ “nuisance dust” as the silica PEL.",
      "The ACGIH TLV automatically.",
    ],
    1,
    "PELTLV/UNIT: legal PEL is 50 μg/m³, not 50 mg and not “whatever TLV is printed.”",
    "PELTLV",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "SDS/GHS is hazard communication (16 sections): identity, hazards, controls as information — not a substitute for hierarchy or for a substance-specific standard. Respirable crystalline silica: OSHA PEL 50 μg/m³ (8-hr T... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Analyst treats 50 μg/m³ as 50 mg/m³ in a report to production. Factor of error?",
    [
      "None — μg equals mg on the CSP.",
      "1000× (UNIT). 50 μg = 0.050 mg. Keystrokes: 50 ÷ 1000 = 0.05 mg/m³.",
      "24.45× because they skipped MW.",
      "8× because they used TWA hours.",
    ],
    1,
    "UNIT: μg vs mg.",
    "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "SDS/GHS is hazard communication (16 sections): identity, hazards, controls as information — not a substitute for hierarchy or for a substance-specific standard. Respirable crystalline silica: OSHA PEL 50 μg/m³ (8-hr T... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Table 1 wet saw is used with the water feed shut off “to keep the pour dry.” Status?",
    [
      "Still Table 1 if the saw brochure shows a hose.",
      "Not Table 1: the listed control must actually be used. You are in objective-data/monitoring land, and dry cutting remains a hierarchy fail.",
      "PPE on the SDS restores Table 1.",
      "A ceiling sample restores Table 1.",
    ],
    1,
    "STEM: Table 1 is performance of the row, not a sticker.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "SDS/GHS is hazard communication (16 sections): identity, hazards, controls as information — not a substitute for hierarchy or for a substance-specific standard. Respirable crystalline silica: OSHA PEL 50 μg/m³ (8-hr T... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Last sentence: prefabricated block can be set without cutting. Dry-cut vs prefab?",
    [
      "Dry-cut — SDS wants a mask photo.",
      "Prefab / don’t generate RCS (higher hierarchy still open).",
      "Dry-cut plus umbrella insurance.",
      "Dry-sweep the slurry.",
    ],
    1,
    "HIER + STEM: last sentence allowed elimination of the cut.",
    "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "SDS/GHS is hazard communication (16 sections): identity, hazards, controls as information — not a substitute for hierarchy or for a substance-specific standard. Respirable crystalline silica: OSHA PEL 50 μg/m³ (8-hr T... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "TLV printed on the SDS used as the OSHA silica citation limit when the PEL differs. Error?",
    [
      "None — GHS makes TLV law.",
      "PELTLV: SDS may list advisory OELs; OSHA silica PEL/AL remain the legal numbers for OSHA.",
      "TIME — 15-minute TLV is the 8-hour PEL.",
      "FIN — SDS is a policy.",
    ],
    1,
    "PELTLV: legal vs guideline on an SDS.",
    "PELTLV",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "SDS/GHS is hazard communication (16 sections): identity, hazards, controls as information — not a substitute for hierarchy or for a substance-specific standard. Respirable crystalline silica: OSHA PEL 50 μg/m³ (8-hr T... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "24.45 conversion run on respirable silica because “all air numbers are ppm.” Error?",
    [
      "None — 24.45 always applies.",
      "UNIT/FORM: 24.45 is for gases/vapors with a MW. Particulate is mass/volume (μg/m³), not molar ppm.",
      "HIER — they used PPE.",
      "TIME — they used 24.45 hours.",
    ],
    1,
    "UNIT: particulate ≠ ppm via 24.45.",
    "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "SDS/GHS is hazard communication (16 sections): identity, hazards, controls as information — not a substitute for hierarchy or for a substance-specific standard. Respirable crystalline silica: OSHA PEL 50 μg/m³ (8-hr T... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Dry sweeping RCS dust because the SDS housekeeping sentence is generic. Best control?",
    [
      "Dry sweep — faster.",
      "HEPA vacuum / wet methods. Dry sweeping is the silica housekeeping fail.",
      "Leaf blower — dilution.",
      "Insurance certificate on the broom.",
    ],
    1,
    "HIER: wet/HEPA vs dry sweep.",
    "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "SDS/GHS is hazard communication (16 sections): identity, hazards, controls as information — not a substitute for hierarchy or for a substance-specific standard. Respirable crystalline silica: OSHA PEL 50 μg/m³ (8-hr T... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Wrong tool: FMEA RPN of “dusty vibes” as the silica exposure assessment. Comment?",
    [
      "Accept — RPN is 1926.1153.",
      "TOOL: Table 1, objective data, or exposure monitoring vs PEL/AL. Mood RPN is not an assessment.",
      "Accept if RPN < 100.",
      "Accept if SDS Section 2 has an exclamation mark.",
    ],
    1,
    "TOOL: FMEA ≠ silica assessment.",
    "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "SDS/GHS is hazard communication (16 sections): identity, hazards, controls as information — not a substitute for hierarchy or for a substance-specific standard. Respirable crystalline silica: OSHA PEL 50 μg/m³ (8-hr T... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Two funded moves: extra umbrella AND extra N95 stock; wet method still open. Pair and miss?",
    [
      "Avoid + reduce; N95 is Table 1 water.",
      "Transfer + PPE; missing Reduce (wet/shroud/HEPA or prefab).",
      "Two PELs.",
      "SDS + GHS complete Control.",
    ],
    1,
    "FIN: insurance plus masks skip engineering.",
    "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "SDS/GHS is hazard communication (16 sections): identity, hazards, controls as information — not a substitute for hierarchy or for a substance-specific standard. Respirable crystalline silica: OSHA PEL 50 μg/m³ (8-hr T... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Hospitalization from a cut-off saw; team files only an SDS update. OSHA clock?",
    [
      "SDS update is the 8-hour clock.",
      "Hospitalization: 24 hours to OSHA. Hazcom paperwork is parallel.",
      "30 years 1910.1020.",
      "No clock if Table 1 was claimed.",
    ],
    1,
    "TIME: 24-hour OSHA hospitalization.",
    "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "SDS/GHS is hazard communication (16 sections): identity, hazards, controls as information — not a substitute for hierarchy or for a substance-specific standard. Respirable crystalline silica: OSHA PEL 50 μg/m³ (8-hr T... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Action level vs PEL for silica: 25 vs 50 μg/m³. Crossing AL means?",
    [
      "Nothing until 50 exactly.",
      "Trigger for the standard’s AL duties (periodic monitoring, medical as specified, plan tightness) — AL is not “ignore.” It is also not a TLV just because 25 matches a guideline you saw.",
      "Immediate OSHA citation at 25 automatically.",
      "Switch units to ppm.",
    ],
    1,
    "STEM: AL vs PEL duties. Don’t relabel AL as TLV (PELTLV).",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "SDS/GHS is hazard communication (16 sections): identity, hazards, controls as information — not a substitute for hierarchy or for a substance-specific standard. Respirable crystalline silica: OSHA PEL 50 μg/m³ (8-hr T... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];

