import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D6.03";

export const classFields: ClassFields = {
  hook: "Lab reports 50 ppm CO and someone “converts” it by calling it 50 mg/m³. Another slide calls a TLV the OSHA PEL because it is smaller. You are the CSP. The question is dose-response plus which number is law.",
  hookOilGas: `Lab reports 50 ppm H2S-adjacent CO in a bay and someone âconvertsâ it by calling it 50 mg/mÂ³. Another slide calls a TLV the OSHA PEL because it is smaller. You are the CSP. The question is dose-response plus which number is law.`,
  hookConstruction: `Lab reports 50 ppm CO in a garage and someone âconvertsâ it by calling it 50 mg/mÂ³. Another slide calls a TLV the OSHA PEL because it is smaller. You are the CSP. The question is dose-response plus which number is law.`,
  rule: "Dose makes the poison: route, duration (acute/chronic), local vs systemic, latency. LD50/LC50 rank animal lethality — they are not worker OELs. OSHA PEL = legal; TLV/REL/WEEL = advisory (PELTLV). STEL/C/peak ≠ 8-hour TWA. Gases: mg/m³ = (ppm × MW) / 24.45 at 25 °C, 1 atm. Mixture: Σ(Ci/OELi) with a unity rule when the stem says additive. If two answers work, take higher hierarchy / system / design.",
  modelCaption: "Left: dose-response curve. Center: PEL (law) vs TLV/REL (guide). Right: mg/m³ = (ppm×MW)/24.45. Caption: smaller number is not automatically the law.",
  workedCase: "CO MW ≈ 28, 50 ppm → mg/m³ = (50×28)/24.45 ≈ 57.3, not 50. OSHA CO PEL 50 ppm (8-hr) is the legal TWA; a different TLV is advisory. Additive solvents: 0.5 + 0.6 = 1.1 → over the mixture unity. Hierarchy still prefers elimination of the source over a prettier OEL table.",
  brief: `Dose makes the poison: route, duration (acute/chronic), local vs systemic, latency. LD50/LC50 rank animal lethality â they are not worker OELs. OSHA PEL = legal; TLV/REL/WEEL = advisory (PELTLV). STEL/C/peak â 8-hour TWA. Gases: mg/mÂ³ = (ppm Ã MW) / 24.45 at 25 Â°C, 1 atm. Mixture: Î£(Ci/OELi) with a unity rule when the stem If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Dose makes the poison: route, duration (acute/chronic), local vs systemic, latency. LD50/LC50 rank animal lethality â they are not worker OELs. OSHA PEL = legal; TLV/REL/WEEL = advisory (PELTLV). STEL/C/peak â  8-hour TWA. Gases: mg/mÂ³ = (ppm Ã MW) / 24.45 at 25 Â°C, 1 atm. Mixture: Î£(Ci/OELi) with a unity rule when the stem says additive. If two answers work, take higher hierarchy / system / design. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. Field move
Lab reports 50 ppm CO and someone âconvertsâ it by calling it 50 mg/mÂ³. Another slide calls a TLV the OSHA PEL because it is smaller. You are the CSP. The question is dose-response plus which number is law. Oil-and-gas skin: Lab reports 50 ppm H2S-adjacent CO in a bay and someone âconvertsâ it by calling it 50 mg/mÂ³. You are the CSP. Construction skin: Lab reports 50 ppm CO in a garage and someone âconvertsâ it by calling it 50 mg/mÂ³. You are the CSP. Work the case: CO MW â 28, 50 ppm â mg/mÂ³ = (50Ã28)/24.45 â 57.3, not 50. OSHA CO PEL 50 ppm (8-hr) is the legal TWA; a different TLV is advisory. Additive solvents: 0.5 + 0.6 = 1.1 â over the mixture unity. Hierarchy still prefers elimination of the source over a prettier OEL table. Classic traps: Treating TLV/REL as the OSHA PEL because it is smaller (PELTLV).; Setting ppm = mg/m³ without MW and 24.45 (UNIT).; Using LD50 as a workplace exposure limit.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for toxicology. Verify whether a higher system or design fix is still open. Contrast labels: PEL is actually OSHA legal limit — citation basis; TLV / REL / WEEL is actually Advisory guidelines — not automatically law; TWA vs STEL vs C is actually 8-h average vs 15-min vs ceiling — different clocks; LD50 / LC50 is actually Animal lethality ranking — not a PEL; ppm vs mg/m³ is actually Need MW and 24.45 (25 °C) — not 1:1. If the stem shows low LD50 is ignored because work is brief, pick still control exposure \u2014 potency matters. If the stem shows sensitizer appears and substitution is open, pick substitute. If the stem shows OEL met but hierarchy higher control open, pick still consider higher control. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows only biomonitoring proposed without controls, pick control exposure first. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `PEL vs TLV? 50 ppm CO in mg/m³ (MW 28) sits in CSP-11 Domain 6 Occupational Health and Ergonomics. The exam tests whether you apply the rule when a package already looks complete. Core rule: Dose makes the poison: route, duration (acute/chronic), local vs systemic, latency. LD50/LC50 rank animal lethality â they are not worker OELs. OSHA PEL = legal; TLV/REL/WEEL = advisory (PELTLV). STEL/C/peak â  8-hour TWA. Gases: mg/mÂ³ = (ppm Ã MW) / 24.45 at 25 Â°C, 1 atm. Mixture: Î£(Ci/OELi) with a unity rule when the stem says additive. If two answers work, take higher hierarchy / system / design. Field context: Lab reports 50 ppm CO and someone âconvertsâ it by calling it 50 mg/mÂ³. Another slide calls a TLV the OSHA PEL because it is smaller. You are the CSP. The question is dose-response plus which number is law. The oil-and-gas skin shifts the same decision into production pressure: Lab reports 50 ppm H2S-adjacent CO in a bay and someone âconvertsâ it by calling it 50 mg/mÂ³. You are the CSP. The construction skin shifts it into schedule and trade stacking: Lab reports 50 ppm CO in a garage and someone âconvertsâ it by calling it 50 mg/mÂ³. You are the CSP. Model caption for this class: Left: dose-response curve. Center: PEL (law) vs TLV/REL (guide). Right: mg/mÂ³ = (ppmÃMW)/24.45. Caption: smaller number is not automatically the law. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Dose-response, routes of entry, acute vs chronic, and target organs drive interpretation. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) LD50/LC50 compare potency — not a free pass for workplace exposure. (3) Sensitization and carcinogenicity change control urgency. (4) Mixtures and potentiation complicate simple comparisons. (5) Biomarkers support evaluation — not a substitute for exposure control. (6) OELs are not bright lines of absolute safety. (7) Hierarchy still applies after the tox story is understood. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: CO MW â 28, 50 ppm â mg/mÂ³ = (50Ã28)/24.45 â 57.3, not 50. OSHA CO PEL 50 ppm (8-hr) is the legal TWA; a different TLV is advisory. Additive solvents: 0.5 + 0.6 = 1.1 â over the mixture unity. Hierarchy still prefers elimination of the source over a prettier OEL table. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Treating TLV/REL as the OSHA PEL because it is smaller (PELTLV).; Setting ppm = mg/m³ without MW and 24.45 (UNIT).; Using LD50 as a workplace exposure limit.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “PEL” is really OSHA legal limit — citation basis; “TLV / REL / WEEL” is really Advisory guidelines — not automatically law; “TWA vs STEL vs C” is really 8-h average vs 15-min vs ceiling — different clocks; “LD50 / LC50” is really Animal lethality ranking — not a PEL; “ppm vs mg/m³” is really Need MW and 24.45 (25 °C) — not 1:1. Stem-if-then map: if low LD50 is ignored because work is brief → still control exposure \u2014 potency matters; if sensitizer appears and substitution is open → substitute; if OEL met but hierarchy higher control open → still consider higher control; if two answers work → higher hierarchy / system / design; if only biomonitoring proposed without controls → control exposure first. Scoring favors evidence, owners, verification, and hierarchy-smart controls on toxicology. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "PEL vs TLV? 50 ppm CO in mg/m³ (MW 28)?",
  cardBack: "PEL = law; TLV/REL = guide (PELTLV). mg/m³ = (ppm×MW)/24.45 → CO 50 ppm ≈ 57.3. LD50 ≠ OEL. Study only — not allowed in the test center.",
  teachBackKey: "Pass if the sentence says PEL is legal and TLV is advisory, writes mg/m³ = (ppm×MW)/24.45, and does not treat LD50 as a workplace limit.",
  trapsJson: traps(
    "Treating TLV/REL as the OSHA PEL because it is smaller (PELTLV).",
    "Setting ppm = mg/m³ without MW and 24.45 (UNIT).",
    "Using LD50 as a workplace exposure limit.",
  ),
  contrastJson: contrast([
    { looksLike: "PEL", actually: "OSHA legal limit — citation basis" },
    { looksLike: "TLV / REL / WEEL", actually: "Advisory guidelines — not automatically law" },
    { looksLike: "TWA vs STEL vs C", actually: "8-h average vs 15-min vs ceiling — different clocks" },
    { looksLike: "LD50 / LC50", actually: "Animal lethality ranking — not a PEL" },
    { looksLike: "ppm vs mg/m³", actually: "Need MW and 24.45 (25 °C) — not 1:1" },
  ]),
  mustScoreJson: mustScore(
    "Dose-response, routes of entry, acute vs chronic, and target organs drive interpretation.",
    "LD50/LC50 compare potency \u2014 not a free pass for workplace exposure.",
    "Sensitization and carcinogenicity change control urgency.",
    "Mixtures and potentiation complicate simple comparisons.",
    "Biomarkers support evaluation \u2014 not a substitute for exposure control.",
    "OELs are not bright lines of absolute safety.",
    "Hierarchy still applies after the tox story is understood.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "low LD50 is ignored because work is brief", pick: "still control exposure \u2014 potency matters" },
    { ifStem: "sensitizer appears and substitution is open", pick: "substitute" },
    { ifStem: "OEL met but hierarchy higher control open", pick: "still consider higher control" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "only biomonitoring proposed without controls", pick: "control exposure first" },
  ),

  formulaSlug: "ppm-mgm3",
};

export const items: ClassItem[] = [
  exam(
    T,
    "OSHA citation file uses a lower ACGIH TLV instead of the OSHA PEL. Error?",
    [
      "None — smaller is always legal.",
      "PELTLV: PEL is the legal limit; TLV is a guideline. Use PEL for the OSHA citation question; you may still manage to a tighter internal target.",
      "UNIT — they used 24.45 on the file name.",
      "TIME — TLV is a 24-hour clock.",
    ],
    1,
    "PELTLV: legal vs advisory is the trap.",
    "PELTLV",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Dose makes the poison: route, duration (acute/chronic), local vs systemic, latency. LD50/LC50 rank animal lethality — they are not worker OELs. OSHA PEL = legal; TLV/REL/WEEL = advisory (PELTLV). STEL/C/peak ≠ 8-hour... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at a semiconductor tool install. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: CO MW = 28. 50 ppm in mg/m³ at 25 °C.",
    [
      "50 mg/m³ (ppm = mg/m³ folklore).",
      "57.3 mg/m³. (50×28)/24.45 = 1400/24.45. Keystrokes: 50 × 28 ÷ 24.45 ≈ 57.26 → closest 57.3.",
      "62.5 mg/m³ using 22.4 (0 °C molar volume).",
      "1.8 mg/m³ using 24.45/ (50×28).",
    ],
    1,
    "UNIT: mg/m³ = (ppm×MW)/24.45, not 1:1.",
    "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Dose makes the poison: route, duration (acute/chronic), local vs systemic, latency. LD50/LC50 rank animal lethality — they are not worker OELs. OSHA PEL = legal; TLV/REL/WEEL = advisory (PELTLV). STEL/C/peak ≠ 8-hour... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at an offshore fabrication night shift. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: 10 ppm H2S, MW 34. mg/m³ at 25 °C.",
    [
      "10 mg/m³.",
      "13.9 mg/m³. (10×34)/24.45. Keystrokes: 10 × 34 ÷ 24.45 ≈ 13.91 → closest 13.9.",
      "24.45 mg/m³.",
      "340 mg/m³ forgetting to divide.",
    ],
    1,
    "UNIT: same conversion. Don’t skip the divide.",
    "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Dose makes the poison: route, duration (acute/chronic), local vs systemic, latency. LD50/LC50 rank animal lethality — they are not worker OELs. OSHA PEL = legal; TLV/REL/WEEL = advisory (PELTLV). STEL/C/peak ≠ 8-hour... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at a municipal water-plant retrofit. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: 57.3 mg/m³ CO, MW 28, back to ppm.",
    [
      "57.3 ppm.",
      "50 ppm. ppm = (mg/m³×24.45)/MW = (57.3×24.45)/28. Keystrokes: 57.3 × 24.45 ÷ 28 ≈ 50.0.",
      "24.45 ppm.",
      "28 ppm using MW as ppm.",
    ],
    1,
    "UNIT: invert the formula.",
    "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Dose makes the poison: route, duration (acute/chronic), local vs systemic, latency. LD50/LC50 rank animal lethality — they are not worker OELs. OSHA PEL = legal; TLV/REL/WEEL = advisory (PELTLV). STEL/C/peak ≠ 8-hour... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at a plastics compounding turnaround. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: LD50 used as the 8-hour worker PEL. Issue.",
    [
      "Fine — LD50 is OSHA.",
      "STEM/TOOL: LD50/LC50 rank acute animal lethality. Worker OELs are PELs/TLVs with different definitions.",
      "Fine if LD50 is in ppm.",
      "Fine if TLV equals LD50.",
    ],
    1,
    "TOOL: LD50 ≠ OEL.",
    "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Dose makes the poison: route, duration (acute/chronic), local vs systemic, latency. LD50/LC50 rank animal lethality — they are not worker OELs. OSHA PEL = legal; TLV/REL/WEEL = advisory (PELTLV). STEL/C/peak ≠ 8-hour... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Additive mixture: 25 ppm of A (PEL 50) and 40 ppm of B (PEL 100), same target. Index?",
    [
      "65 ppm compared to 50 (add concentrations blindly).",
      "0.90. 25/50 + 40/100 = 0.5+0.4. Keystrokes: 25 ÷ 50 = 0.5; 40 ÷ 100 = 0.4; + = 0.90 (under unity).",
      "1.5 using PEL as numerator.",
      "90 ppm × 24.45.",
    ],
    1,
    "FORM: Σ(Ci/PELi). Do not add ppm across different PELs.",
    "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Dose makes the poison: route, duration (acute/chronic), local vs systemic, latency. LD50/LC50 rank animal lethality — they are not worker OELs. OSHA PEL = legal; TLV/REL/WEEL = advisory (PELTLV). STEL/C/peak ≠ 8-hour... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Last sentence: “OSHA citation basis.” TLV 25 ppm, PEL 50 ppm, measured 30 ppm. Result?",
    [
      "Cite because 30 > TLV.",
      "30 is below the PEL — not an OSHA PEL exceedance. TLV may still drive an internal action (PELTLV).",
      "Cite using REL automatically.",
      "Convert 30 ppm to 30 mg/m³ and cite silica.",
    ],
    1,
    "STEM + PELTLV: last sentence asked legal PEL.",
    "PELTLV",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Dose makes the poison: route, duration (acute/chronic), local vs systemic, latency. LD50/LC50 rank animal lethality — they are not worker OELs. OSHA PEL = legal; TLV/REL/WEEL = advisory (PELTLV). STEL/C/peak ≠ 8-hour... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "24.45 used at a stem that specified 0 °C (22.4 L molar volume). Effect on mg/m³ from ppm?",
    [
      "None — 24.45 is sacred at any T.",
      "UNIT: molar volume changes with T. At 0 °C use 22.4 unless the stem says otherwise; mixing 24.45 and 0 °C biases the conversion.",
      "HIER — 24.45 is PPE.",
      "TIME — 24.45 hours.",
    ],
    1,
    "UNIT: 24.45 is 25 °C; 22.4 is 0 °C.",
    "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Dose makes the poison: route, duration (acute/chronic), local vs systemic, latency. LD50/LC50 rank animal lethality — they are not worker OELs. OSHA PEL = legal; TLV/REL/WEEL = advisory (PELTLV). STEL/C/peak ≠ 8-hour... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "STEL exceedance hidden inside an 8-hour TWA that is under the TWA PEL. Status?",
    [
      "TWA under PEL clears STEL.",
      "STEM: TWA, STEL, and ceiling are different OELs. A legal TWA can still fail a STEL.",
      "Ceilings are only for noise.",
      "TLV STEL is the OSHA PEL.",
    ],
    1,
    "STEM: different averaging times.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Dose makes the poison: route, duration (acute/chronic), local vs systemic, latency. LD50/LC50 rank animal lethality — they are not worker OELs. OSHA PEL = legal; TLV/REL/WEEL = advisory (PELTLV). STEL/C/peak ≠ 8-hour... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Two funded moves: extra umbrella AND a prettier TLV poster; substitution of the solvent still open. Pair and miss?",
    [
      "Avoid + reduce; posters metabolize dose.",
      "Transfer + communication; missing Reduce/Avoid (substitute the agent).",
      "Two LD50s.",
      "ppm + mg/m³ complete Control.",
    ],
    1,
    "FIN: insurance plus a poster is not dose control.",
    "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Dose makes the poison: route, duration (acute/chronic), local vs systemic, latency. LD50/LC50 rank animal lethality — they are not worker OELs. OSHA PEL = legal; TLV/REL/WEEL = advisory (PELTLV). STEL/C/peak ≠ 8-hour... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Acute poisoning hospitalization; team files only a TLV table. OSHA clock?",
    [
      "TLV table is the 8-hour clock.",
      "Hospitalization: 24 hours to OSHA. OEL tables are parallel.",
      "Latency of 30 years deletes the clock.",
      "No clock if PEL > TLV.",
    ],
    1,
    "TIME: 24-hour hospitalization.",
    "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Dose makes the poison: route, duration (acute/chronic), local vs systemic, latency. LD50/LC50 rank animal lethality — they are not worker OELs. OSHA PEL = legal; TLV/REL/WEEL = advisory (PELTLV). STEL/C/peak ≠ 8-hour... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Wrong tool: using noise 5 dB exchange to “TWA” a chemical because both say TWA. Comment?",
    [
      "Accept — 5 dB is 24.45.",
      "TOOL: chemical TWA is (ΣCiTi)/8. Noise exchange rates are not chemical toxicology.",
      "Accept if PEL is 90 ppm.",
      "Accept if TLV is 85 ppm.",
    ],
    1,
    "TOOL: noise math ≠ chemical TWA.",
    "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Dose makes the poison: route, duration (acute/chronic), local vs systemic, latency. LD50/LC50 rank animal lethality — they are not worker OELs. OSHA PEL = legal; TLV/REL/WEEL = advisory (PELTLV). STEL/C/peak ≠ 8-hour... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];

