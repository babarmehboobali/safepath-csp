import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D6.01";

export const classFields: ClassFields = {
  hook: "A compressor deck is 100 dBA. Operations cites “OSHA gives 2 hours at 100, so an 8-hour shift is only 400% — NIOSH 15 minutes is a guideline, skip it.” You are the CSP. The question is which table the last sentence named, and whether muffs beat a quieter machine.",
  hookOilGas: `A compressor deck is 100 dBA. Operations cites âOSHA gives 2 hours at 100, so an 8-hour shift is only 400% â NIOSH 15 minutes is a guideline, skip it.â You are the CSP on the pad. The question is which table the last sentence named, and whether muffs beat a quieter machine.`,
  hookConstruction: `A pile-drive zone is 100 dBA. The superintendent cites âOSHA gives 2 hours at 100, so a full shift is only 400% â NIOSH 15 minutes is a guideline, skip it.â You are the CSP. The question is which table the last sentence named, and whether muffs beat a quieter machine.`,
  rule: "OSHA and NIOSH noise are two matched pairs. OSHA: criterion 90 dBA, 5 dB exchange, PEL 90, action level 85. T = 8 / 2^((L−90)/5). NIOSH: criterion 85 dBA, 3 dB exchange, REL 85. T = 8 / 2^((L−85)/3). Dose D = 100 × Σ(Ci/Ti). Do not mix tables (UNIT). 85 dBA is OSHA’s action level, not OSHA’s PEL (PELTLV). Quiet the source / enclose / distance before HPD. If two answers work, take higher hierarchy / system / design.",
  modelCaption:
    "Two columns. OSHA: 90 dBA / 5 dB — 95 dBA → 4 h; 100 dBA → 2 h. NIOSH: 85 dBA / 3 dB — 88 dBA → 4 h; 100 dBA → 0.25 h. Caption: exchange rate is a unit system. Muffs sit under both tables tagged LAST.",
  workedCase:
    "100 dBA OSHA: (100−90)/5 = 2 doublings → T = 8/4 = 2 hours. An 8-hour shift is 400% dose. NIOSH at 100: (100−85)/3 = 5 doublings → T = 8/32 = 0.25 h (15 min). Using NIOSH 15 min as the OSHA citation number is UNIT/PELTLV. A quieter compressor or an enclosure is still higher than a muff program. Keystrokes OSHA: 100 − 90 = 10; ÷ 5 = 2; 2 y^x 2 = 4; 8 ÷ 4 = 2. DEG is irrelevant to 2^x.",
  trapsJson: traps(
    "Using NIOSH 3 dB allowable times on an OSHA 5 dB stem (UNIT).",
    "Calling 85 dBA the OSHA PEL (it is the action level / NIOSH REL).",
    "Muffs as equivalent to buying a quieter machine when substitution/engineering is still open.",
  ),
  contrastJson: contrast([
    { looksLike: "OSHA PEL 90 dBA / 5 dB", actually: "Legal 8-hour PEL and exchange for OSHA dose/TWA" },
    { looksLike: "OSHA action level 85 dBA", actually: "Hearing conservation trigger — not the PEL" },
    { looksLike: "NIOSH REL 85 dBA / 3 dB", actually: "Advisory recommendation — different table" },
    { looksLike: "Dose 100%", actually: "At criterion for that table, not “inaudible”" },
    { looksLike: "Hearing protectors", actually: "PPE — last; NRR is not a redesigned source" },
  ]),
  mustScoreJson: mustScore(
    "OSHA noise often uses 90 dBA PEL criterion with 5 dB exchange; action level 85 dBA.",
    "NIOSH REL commonly 85 dBA with 3 dB exchange \u2014 more protective duration math.",
    "Do not mix exchange rates mid-problem.",
    "HCP triggers differ from PEL citation logic \u2014 read the stem.",
    "Hierarchy: quieter equipment/enclosure before muffs.",
    "Dose adds Ci/Ti \u2014 do not average dB carelessly.",
    "Calculator: 2^n relationships for exchange steps.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "stem asks OSHA allowable time", pick: "use OSHA exchange/criterion in the stem" },
    { ifStem: "stem asks NIOSH REL", pick: "use 3 dB exchange at 85" },
    { ifStem: "quieter tool still available", pick: "muffs lose" },
    { ifStem: "two times at two levels", pick: "add Ci/Ti doses" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
  ),

  brief: `OSHA and NIOSH noise are two matched pairs. OSHA: criterion 90 dBA, 5 dB exchange, PEL 90, action level 85. T = 8 / 2^((Lâ90)/5). NIOSH: criterion 85 dBA, 3 dB exchange, REL 85. T = 8 / 2^((Lâ85)/3). Dose D = 100 Ã Î£(Ci/Ti). Do not mix tables (UNIT). 85 dBA is OSHAâs action If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
OSHA and NIOSH noise are two matched pairs. OSHA: criterion 90 dBA, 5 dB exchange, PEL 90, action level 85. T = 8 / 2^((Lâ90)/5). NIOSH: criterion 85 dBA, 3 dB exchange, REL 85. T = 8 / 2^((Lâ85)/3). Dose D = 100 Ã Î£(Ci/Ti). Do not mix tables (UNIT). 85 dBA is OSHAâs action level, not OSHAâs PEL (PELTLV). Quiet the source / enclose / distance before HPD. If two answers work, take higher hierarchy / system / design. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. Field move
A compressor deck is 100 dBA. Operations cites âOSHA gives 2 hours at 100, so an 8-hour shift is only 400% â NIOSH 15 minutes is a guideline, skip it.â You are the CSP. The question is which table the last sentence named, and whether muffs beat a quieter machine. Oil-and-gas skin: A compressor deck is 100 dBA. Operations cites âOSHA gives 2 hours at 100, so an 8-hour shift is only 400% â NIOSH 15 minutes is a guideline, skip it.â You are the CSP on the pad. Construction skin: A pile-drive zone is 100 dBA. The superintendent cites âOSHA gives 2 hours at 100, so a full shift is only 400% â NIOSH 15 minutes is a guideline, skip it.â You are the CSP. Work the case: 100 dBA OSHA: (100â90)/5 = 2 doublings â T = 8/4 = 2 hours. An 8-hour shift is 400% dose. NIOSH at 100: (100â85)/3 = 5 doublings â T = 8/32 = 0.25 h (15 min). Using NIOSH 15 min as the OSHA citation number is UNIT/PELTLV. A quieter compressor or an enclosure is still higher than a muff program. Keystrokes OSHA: 100 â 90 = 10; Ã· 5 = 2; 2 y^x 2 = 4; 8 Ã· 4 = 2. DEG is irrelevant to 2^x. Classic traps: Using NIOSH 3 dB allowable times on an OSHA 5 dB stem (UNIT).; Calling 85 dBA the OSHA PEL (it is the action level / NIOSH REL).; Muffs as equivalent to buying a quieter machine when substitution/engineering is still open.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for osha niosh noise. Verify whether a higher system or design fix is still open. Contrast labels: OSHA PEL 90 dBA / 5 dB is actually Legal 8-hour PEL and exchange for OSHA dose/TWA; OSHA action level 85 dBA is actually Hearing conservation trigger — not the PEL; NIOSH REL 85 dBA / 3 dB is actually Advisory recommendation — different table; Dose 100% is actually At criterion for that table, not “inaudible”; Hearing protectors is actually PPE — last; NRR is not a redesigned source. If the stem shows stem asks OSHA allowable time, pick use OSHA exchange/criterion in the stem. If the stem shows stem asks NIOSH REL, pick use 3 dB exchange at 85. If the stem shows quieter tool still available, pick muffs lose. If the stem shows two times at two levels, pick add Ci/Ti doses. If the stem shows two answers work, pick higher hierarchy / system / design. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `OSHA 5 dB / 90 vs NIOSH 3 dB / 85 — 100 dBA allowed time sits in CSP-11 Domain 6 Occupational Health and Ergonomics. The exam tests whether you apply the rule when a package already looks complete. Core rule: OSHA and NIOSH noise are two matched pairs. OSHA: criterion 90 dBA, 5 dB exchange, PEL 90, action level 85. T = 8 / 2^((Lâ90)/5). NIOSH: criterion 85 dBA, 3 dB exchange, REL 85. T = 8 / 2^((Lâ85)/3). Dose D = 100 Ã Î£(Ci/Ti). Do not mix tables (UNIT). 85 dBA is OSHAâs action level, not OSHAâs PEL (PELTLV). Quiet the source / enclose / distance before HPD. If two answers work, take higher hierarchy / system / design. Field context: A compressor deck is 100 dBA. Operations cites âOSHA gives 2 hours at 100, so an 8-hour shift is only 400% â NIOSH 15 minutes is a guideline, skip it.â You are the CSP. The question is which table the last sentence named, and whether muffs beat a quieter machine. The oil-and-gas skin shifts the same decision into production pressure: A compressor deck is 100 dBA. Operations cites âOSHA gives 2 hours at 100, so an 8-hour shift is only 400% â NIOSH 15 minutes is a guideline, skip it.â You are the CSP on the pad. The construction skin shifts it into schedule and trade stacking: A pile-drive zone is 100 dBA. The superintendent cites âOSHA gives 2 hours at 100, so a full shift is only 400% â NIOSH 15 minutes is a guideline, skip it.â You are the CSP. Model caption for this class: Two columns. OSHA: 90 dBA / 5 dB â 95 dBA â 4 h; 100 dBA â 2 h. NIOSH: 85 dBA / 3 dB â 88 dBA â 4 h; 100 dBA â 0.25 h. Caption: exchange rate is a unit system. Muffs sit under both tables tagged LAST. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) OSHA noise often uses 90 dBA PEL criterion with 5 dB exchange; action level 85 dBA. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) NIOSH REL commonly 85 dBA with 3 dB exchange — more protective duration math. (3) Do not mix exchange rates mid-problem. (4) HCP triggers differ from PEL citation logic — read the stem. (5) Hierarchy: quieter equipment/enclosure before muffs. (6) Dose adds Ci/Ti — do not average dB carelessly. (7) Calculator: 2^n relationships for exchange steps. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: 100 dBA OSHA: (100â90)/5 = 2 doublings â T = 8/4 = 2 hours. An 8-hour shift is 400% dose. NIOSH at 100: (100â85)/3 = 5 doublings â T = 8/32 = 0.25 h (15 min). Using NIOSH 15 min as the OSHA citation number is UNIT/PELTLV. A quieter compressor or an enclosure is still higher than a muff program. Keystrokes OSHA: 100 â 90 = 10; Ã· 5 = 2; 2 y^x 2 = 4; 8 Ã· 4 = 2. DEG is irrelevant to 2^x. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Using NIOSH 3 dB allowable times on an OSHA 5 dB stem (UNIT).; Calling 85 dBA the OSHA PEL (it is the action level / NIOSH REL).; Muffs as equivalent to buying a quieter machine when substitution/engineering is still open.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “OSHA PEL 90 dBA / 5 dB” is really Legal 8-hour PEL and exchange for OSHA dose/TWA; “OSHA action level 85 dBA” is really Hearing conservation trigger — not the PEL; “NIOSH REL 85 dBA / 3 dB” is really Advisory recommendation — different table; “Dose 100%” is really At criterion for that table, not “inaudible”; “Hearing protectors” is really PPE — last; NRR is not a redesigned source. Stem-if-then map: if stem asks OSHA allowable time → use OSHA exchange/criterion in the stem; if stem asks NIOSH REL → use 3 dB exchange at 85; if quieter tool still available → muffs lose; if two times at two levels → add Ci/Ti doses; if two answers work → higher hierarchy / system / design. Scoring favors evidence, owners, verification, and hierarchy-smart controls on osha niosh noise. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "OSHA 5 dB / 90 vs NIOSH 3 dB / 85 — 100 dBA allowed time?",
  cardBack:
    "OSHA 100 dBA → 2 h. NIOSH 100 dBA → 15 min. 95 OSHA → 4 h. AL 85 ≠ PEL 90. Quiet source before muffs. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence states OSHA 90/5 versus NIOSH 85/3 as matched pairs, gives 95 dBA OSHA = 4 h or 100 dBA OSHA = 2 h vs NIOSH 15 min, and says muffs are last.",
  formulaSlug: "osha-niosh-noise",
};

export const items: ClassItem[] = [
  exam(T, "You are the CSP reviewing a live decision at a municipal water-plant retrofit. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: OSHA allowable time at a constant 100 dBA.", [
    "8 hours because PEL is “about 90.”",
    "2 hours. T = 8 / 2^((100−90)/5) = 8/4 = 2. Keystrokes: 100 − 90 = 10; ÷ 5 = 2; 2 y^x 2 = 4; 8 ÷ 4 = 2.",
    "15 minutes using NIOSH 3 dB.",
    "4 hours mixing 5 dB from 85.",
  ], 1, "UNIT: OSHA 5 dB from 90. Two doublings → quarter the 8 hours.", "UNIT", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA and NIOSH noise are two matched pairs. OSHA: criterion 90 dBA, 5 dB exchange, PEL 90, action level 85. T = 8 / 2^((L−90)/5). NIOSH: criterion 85 dBA, 3 dB exchange, REL 85. T = 8 / 2^((L−85)/3). Dose D = 100 × Σ(... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a plastics compounding turnaround. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: NIOSH allowable time at a constant 100 dBA.", [
    "2 hours because OSHA says 2.",
    "0.25 h (15 min). T = 8 / 2^((100−85)/3) = 8/32 = 0.25. Keystrokes: 100 − 85 = 15; ÷ 3 = 5; 2 y^x 5 = 32; 8 ÷ 32 = 0.25.",
    "8 hours because 100 is a round number.",
    "4 hours using OSHA 95 folklore.",
  ], 1, "UNIT: NIOSH 3 dB from 85. Five doublings.", "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA and NIOSH noise are two matched pairs. OSHA: criterion 90 dBA, 5 dB exchange, PEL 90, action level 85. T = 8 / 2^((L−90)/5). NIOSH: criterion 85 dBA, 3 dB exchange, REL 85. T = 8 / 2^((L−85)/3). Dose D = 100 × Σ(... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: OSHA allowable time at 95 dBA.", [
    "8 hours.",
    "4 hours. T = 8 / 2^((95−90)/5) = 8/2 = 4. Keystrokes: 95 − 90 = 5; ÷ 5 = 1; 2 y^x 1 = 2; 8 ÷ 2 = 4.",
    "2 hours using 3 dB.",
    "15 minutes.",
  ], 1, "One OSHA doubling from 90.", "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA and NIOSH noise are two matched pairs. OSHA: criterion 90 dBA, 5 dB exchange, PEL 90, action level 85. T = 8 / 2^((L−90)/5). NIOSH: criterion 85 dBA, 3 dB exchange, REL 85. T = 8 / 2^((L−85)/3). Dose D = 100 × Σ(... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A mechanic is at 95 dBA for 8 hours. Operations says 85 dBA is the OSHA PEL so the job is “only 10 over.” Best flag?", [
    "Agree — PEL is 85.",
    "PELTLV: OSHA PEL is 90 dBA 8-h TWA; 85 is the action level (and NIOSH REL). 8 h at 95 is 200% OSHA dose, TWA 95.",
    "Agree if NIOSH is used for citations.",
    "Agree if muffs are worn.",
  ], 1, "85 is not the OSHA PEL. Muffs do not rewrite the PEL.", "PELTLV",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA and NIOSH noise are two matched pairs. OSHA: criterion 90 dBA, 5 dB exchange, PEL 90, action level 85. T = 8 / 2^((L−90)/5). NIOSH: criterion 85 dBA, 3 dB exchange, REL 85. T = 8 / 2^((L−85)/3). Dose D = 100 × Σ(... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Last sentence: “Use the NIOSH recommended duration at 88 dBA.” Which T?", [
    "8 hours using OSHA from 90.",
    "4 hours. NIOSH T = 8 / 2^((88−85)/3) = 8/2 = 4. STEM named NIOSH.",
    "4 hours using OSHA 95 (wrong table, coincidentally 4).",
    "15 minutes using NIOSH 100.",
  ], 1, "STEM: last sentence named NIOSH. 88 is one 3 dB doubling from 85.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA and NIOSH noise are two matched pairs. OSHA: criterion 90 dBA, 5 dB exchange, PEL 90, action level 85. T = 8 / 2^((L−90)/5). NIOSH: criterion 85 dBA, 3 dB exchange, REL 85. T = 8 / 2^((L−85)/3). Dose D = 100 × Σ(... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a pharma suite changeover. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: OSHA: 4 h at 90 dBA and 4 h at 95 dBA. Closest dose.", [
    "100% averaging 90 and 95 as 92.5 dBA without exchange.",
    "150%. D = 100 × (4/8 + 4/4) = 100 × (0.5 + 1) = 150. T90=8, T95=4.",
    "200% treating both periods as 95.",
    "50% adding 4+4 over 16.",
  ], 1, "FORM: dose adds time fractions Ci/Ti, not decibels.", "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA and NIOSH noise are two matched pairs. OSHA: criterion 90 dBA, 5 dB exchange, PEL 90, action level 85. T = 8 / 2^((L−90)/5). NIOSH: criterion 85 dBA, 3 dB exchange, REL 85. T = 8 / 2^((L−85)/3). Dose D = 100 × Σ(... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "OSHA dose is 150%. Closest TWA (dBA)? TWA ≈ 90 + 16.61 log10(D/100).", [
    "90 dBA because 150 is “about 100.”",
    "93. 16.61 × log10(1.5) ≈ 16.61 × 0.1761 ≈ 2.92; 90 + 2.92 ≈ 92.9 → closest 93. Keystrokes: 1.5 LOG × 16.61 + 90 =. Use LOG not LN.",
    "150 dBA reading dose as TWA.",
    "85 dBA using NIOSH criterion.",
  ], 1, "FORM: TWA from dose uses log10. LN is a calculator trap.", "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA and NIOSH noise are two matched pairs. OSHA: criterion 90 dBA, 5 dB exchange, PEL 90, action level 85. T = 8 / 2^((L−90)/5). NIOSH: criterion 85 dBA, 3 dB exchange, REL 85. T = 8 / 2^((L−85)/3). Dose D = 100 × Σ(... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A quieter tool drops the job from 100 to 90 dBA OSHA. Muffs were the proposed control. Best CSP call?", [
    "Keep muffs — PPE is simpler.",
    "Specify the quieter tool (source control). HPD is residual if anything remains at 90.",
    "Keep muffs and extra insurance (FIN).",
    "Keep muffs; report in 8 hours (TIME).",
  ], 1, "Hierarchy: quiet the source. FIN/TIME distractors.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA and NIOSH noise are two matched pairs. OSHA: criterion 90 dBA, 5 dB exchange, PEL 90, action level 85. T = 8 / 2^((L−90)/5). NIOSH: criterion 85 dBA, 3 dB exchange, REL 85. T = 8 / 2^((L−85)/3). Dose D = 100 × Σ(... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a hospital utility plant shutdown. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Which table mix is the UNIT error.", [
    "OSHA T at 95 using 90 and 5 dB.",
    "NIOSH T at 88 using 90 dBA and 5 dB (OSHA pair on a NIOSH question).",
    "NIOSH T at 88 using 85 and 3 dB.",
    "OSHA T at 100 using 90 and 5 dB.",
  ], 1, "Matched pairs. 90-with-5 on a NIOSH stem is the mix.", "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA and NIOSH noise are two matched pairs. OSHA: criterion 90 dBA, 5 dB exchange, PEL 90, action level 85. T = 8 / 2^((L−90)/5). NIOSH: criterion 85 dBA, 3 dB exchange, REL 85. T = 8 / 2^((L−85)/3). Dose D = 100 × Σ(... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Which analysis belongs before buying a $40k muff vending machine?", [
    "FTA after the first STS, then more muffs.",
    "Noise survey plus hierarchy review (quieter tool / enclosure / distance) written into the purchase — muff vending is residual PPE logistics.",
    "FMEA on earplug color.",
    "JHA only on how to fill the vending hopper.",
  ], 1, "Wrong tool if it cannot change the source. Color FMEA is TOOL abuse.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA and NIOSH noise are two matched pairs. OSHA: criterion 90 dBA, 5 dB exchange, PEL 90, action level 85. T = 8 / 2^((L−90)/5). NIOSH: criterion 85 dBA, 3 dB exchange, REL 85. T = 8 / 2^((L−85)/3). Dose D = 100 × Σ(... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Acoustic trauma sends a worker to in-patient hospitalization. Someone files “we have 8 hours because it is noise.” Best TIME call?", [
    "Noise injuries are never 1904.39.",
    "1904.39: in-patient hospitalization is 24 hours (fatality 8 hours). Hearing conservation clocks are not reporting clocks.",
    "8 hours for everything involving ears.",
    "15 minutes using NIOSH 100 dBA.",
  ], 1, "TIME: 8 h fatality vs 24 h hospitalization. Not an exchange-rate number.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA and NIOSH noise are two matched pairs. OSHA: criterion 90 dBA, 5 dB exchange, PEL 90, action level 85. T = 8 / 2^((L−90)/5). NIOSH: criterion 85 dBA, 3 dB exchange, REL 85. T = 8 / 2^((L−85)/3). Dose D = 100 × Σ(... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at an offshore fabrication night shift. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Least consistent with OSHA vs NIOSH noise control.", [
    "Quieter compressor specified on the PO.",
    "OSHA dose using 90/5; NIOSH advice using 85/3 — never mixed.",
    "A laminated “wear your muffs” card after three STS events, with a 100 dBA unenclosed machine unchanged.",
    "Enclosure and distance before HPD.",
  ], 2, "A poster is not an exchange rate and not source control.", "HIER", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA and NIOSH noise are two matched pairs. OSHA: criterion 90 dBA, 5 dB exchange, PEL 90, action level 85. T = 8 / 2^((L−90)/5). NIOSH: criterion 85 dBA, 3 dB exchange, REL 85. T = 8 / 2^((L−85)/3). Dose D = 100 × Σ(... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
