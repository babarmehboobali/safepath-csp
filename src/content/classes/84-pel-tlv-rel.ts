import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D6.01";

export const classFields: ClassFields = {
  hook: "IH reports 45 ppm of a solvent. OSHA PEL is 50 ppm, ACGIH TLV is 20 ppm, NIOSH REL is 25 ppm. Operations says “we are legal — skip the booth.” You are the CSP. The question is which number is the law, which is advice, and whether legality beats substitution.",
  hookOilGas: `IH reports 45 ppm of a benzene-adjacent solvent on a process skid. OSHA PEL is 50 ppm, ACGIH TLV is 20 ppm, NIOSH REL is 25 ppm. Operations says âwe are legal â skip the booth.â You are the CSP. The question is which number is the law, which is advice, and whether legality beats substitution.`,
  hookConstruction: `IH reports 45 ppm of a solvent in a site paint tent. OSHA PEL is 50 ppm, ACGIH TLV is 20 ppm, NIOSH REL is 25 ppm. The superintendent says âwe are legal â skip the booth.â You are the CSP. The question is which number is the law, which is advice, and whether legality beats substitution.`,
  rule: "PEL is the OSHA legal limit. TLV (ACGIH) and REL (NIOSH) are advisory guidelines. A smaller advisory number is not automatically the law (PELTLV). You may run a tighter program; you may not cite a TLV as 1910.1000. Convert with mg/m³ = (ppm × MW) / 24.45 at 25 °C and 1 atm — not 1:1, not 22.4 unless the stem changed T. Particulates/fibers do not use 24.45. LD50 is not an OEL. If substitution or enclosure is still open, “we are under the PEL” loses. If two answers work, take higher hierarchy / system / design.",
  modelCaption:
    "Three boxes: PEL (amber) LEGAL OSHA · TLV / REL (navy) ADVISORY · conversion (navy) mg/m³ = (ppm × MW) / 24.45. Caption: smaller is not automatically the law. 50 ppm CO (MW 28) ≈ 57.3 mg/m³, not 50.",
  workedCase:
    "45 ppm, PEL 50, TLV 20, REL 25. Legal under the OSHA PEL? Yes, if the method matches 8-hour TWA and there is no tighter substance-specific standard in the stem. Good practice? The advisory numbers say no. CSP move: if aqueous or a booth is still open, specify it (hierarchy). If the stem asks “which is legally enforceable,” pick PEL. Conversion gym: CO 50 ppm, MW 28 → mg/m³ = (50 × 28) / 24.45 ≈ 57.3. Keystrokes: 50 × 28 ÷ 24.45 =. Treating 50 ppm as 50 mg/m³ is UNIT.",
  trapsJson: traps(
    "Citing a TLV or REL as the OSHA legal limit (PELTLV).",
    "Treating ppm and mg/m³ as 1:1, or using 22.4 at 25 °C (UNIT).",
    "“We are under the PEL” as a reason to skip substitution or a booth still on the table (HIER).",
  ),
  contrastJson: contrast([
    { looksLike: "PEL", actually: "OSHA legal limit (substance-specific standard if the stem names one)" },
    { looksLike: "TLV (ACGIH)", actually: "Advisory guideline — not 1910.1000 by itself" },
    { looksLike: "REL (NIOSH)", actually: "Advisory recommendation — not the PEL" },
    { looksLike: "50 ppm = 50 mg/m³", actually: "UNIT miss — use (ppm × MW)/24.45 at 25 °C" },
    { looksLike: "LD50", actually: "Acute tox number — not an occupational exposure limit" },
  ]),
  mustScoreJson: mustScore(
    "PEL is legal (OSHA); TLV/REL are advisory guidelines (ACGIH/NIOSH).",
    "Meeting a PEL does not automatically make the higher-hierarchy option optional.",
    "Ceiling/STEL/TWA definitions differ \u2014 match the sample to the limit type.",
    "Skin notation and carcinogen notes change control urgency.",
    "Do not cite TLV as a citation standard unless the stem says so.",
    "Hierarchy and ALARA-like continuous improvement still apply.",
    "Units ppm vs mg/m3 need conversion when required.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "TLV treated as OSHA citation basis", pick: "distinguish PEL vs TLV" },
    { ifStem: "PEL met but substitute open", pick: "still substitute" },
    { ifStem: "STEL exceeded though TWA OK", pick: "address short-term limit" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "ppm vs mg/m3 mismatch", pick: "convert with correct formula" },
  ),

  brief: `PEL is the OSHA legal limit. TLV (ACGIH) and REL (NIOSH) are advisory guidelines. A smaller advisory number is not automatically the law (PELTLV). You may run a tighter program; you may not cite a TLV as 1910.1000. Convert with mg/mÂ³ = (ppm Ã MW) / 24.45 at 25 Â°C and 1 atm â not If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
PEL is the OSHA legal limit. TLV (ACGIH) and REL (NIOSH) are advisory guidelines. A smaller advisory number is not automatically the law (PELTLV). You may run a tighter program; you may not cite a TLV as 1910.1000. Convert with mg/mÂ³ = (ppm Ã MW) / 24.45 at 25 Â°C and 1 atm â not 1:1, not 22.4 unless the stem changed T. Particulates/fibers do not use 24.45. LD50 is not an OEL. If substitution or enclosure is still open, âwe are under the PELâ loses. If two answers work, take higher hierarchy / system / design. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. Field move
IH reports 45 ppm of a solvent. OSHA PEL is 50 ppm, ACGIH TLV is 20 ppm, NIOSH REL is 25 ppm. Operations says âwe are legal â skip the booth.â You are the CSP. The question is which number is the law, which is advice, and whether legality beats substitution. Oil-and-gas skin: IH reports 45 ppm of a benzene-adjacent solvent on a process skid. Construction skin: IH reports 45 ppm of a solvent in a site paint tent. The superintendent says âwe are legal â skip the booth.â You are the CSP. Work the case: 45 ppm, PEL 50, TLV 20, REL 25. Legal under the OSHA PEL? Yes, if the method matches 8-hour TWA and there is no tighter substance-specific standard in the stem. Good practice? The advisory numbers say no. CSP move: if aqueous or a booth is still open, specify it (hierarchy). If the stem asks âwhich is legally enforceable,â pick PEL. Conversion gym: CO 50 ppm, MW 28 â mg/mÂ³ = (50 Ã 28) / 24.45 â 57.3. Keystrokes: 50 Ã 28 Ã· 24.45 =. Treating 50 ppm as 50 mg/mÂ³ is UNIT. Classic traps: Citing a TLV or REL as the OSHA legal limit (PELTLV).; Treating ppm and mg/m³ as 1:1, or using 22.4 at 25 °C (UNIT).; “We are under the PEL” as a reason to skip substitution or a booth still on the table (HIER).. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for pel tlv rel. Verify whether a higher system or design fix is still open. Contrast labels: PEL is actually OSHA legal limit (substance-specific standard if the stem names one); TLV (ACGIH) is actually Advisory guideline — not 1910.1000 by itself; REL (NIOSH) is actually Advisory recommendation — not the PEL; 50 ppm = 50 mg/m³ is actually UNIT miss — use (ppm × MW)/24.45 at 25 °C; LD50 is actually Acute tox number — not an occupational exposure limit. If the stem shows TLV treated as OSHA citation basis, pick distinguish PEL vs TLV. If the stem shows PEL met but substitute open, pick still substitute. If the stem shows STEL exceeded though TWA OK, pick address short-term limit. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows ppm vs mg/m3 mismatch, pick convert with correct formula. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `PEL vs TLV vs REL — which is the law? 50 ppm CO in mg/m³ sits in CSP-11 Domain 6 Occupational Health and Ergonomics. The exam tests whether you apply the rule when a package already looks complete. Core rule: PEL is the OSHA legal limit. TLV (ACGIH) and REL (NIOSH) are advisory guidelines. A smaller advisory number is not automatically the law (PELTLV). You may run a tighter program; you may not cite a TLV as 1910.1000. Convert with mg/mÂ³ = (ppm Ã MW) / 24.45 at 25 Â°C and 1 atm â not 1:1, not 22.4 unless the stem changed T. Particulates/fibers do not use 24.45. LD50 is not an OEL. If substitution or enclosure is still open, âwe are under the PELâ loses. If two answers work, take higher hierarchy / system / design. Field context: IH reports 45 ppm of a solvent. OSHA PEL is 50 ppm, ACGIH TLV is 20 ppm, NIOSH REL is 25 ppm. Operations says âwe are legal â skip the booth.â You are the CSP. The question is which number is the law, which is advice, and whether legality beats substitution. The oil-and-gas skin shifts the same decision into production pressure: IH reports 45 ppm of a benzene-adjacent solvent on a process skid. The construction skin shifts it into schedule and trade stacking: IH reports 45 ppm of a solvent in a site paint tent. The superintendent says âwe are legal â skip the booth.â You are the CSP. Model caption for this class: Three boxes: PEL (amber) LEGAL OSHA Â· TLV / REL (navy) ADVISORY Â· conversion (navy) mg/mÂ³ = (ppm Ã MW) / 24.45. Caption: smaller is not automatically the law. 50 ppm CO (MW 28) â 57.3 mg/mÂ³, not 50. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) PEL is legal (OSHA); TLV/REL are advisory guidelines (ACGIH/NIOSH). Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Meeting a PEL does not automatically make the higher-hierarchy option optional. (3) Ceiling/STEL/TWA definitions differ — match the sample to the limit type. (4) Skin notation and carcinogen notes change control urgency. (5) Do not cite TLV as a citation standard unless the stem says so. (6) Hierarchy and ALARA-like continuous improvement still apply. (7) Units ppm vs mg/m3 need conversion when required. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: 45 ppm, PEL 50, TLV 20, REL 25. Legal under the OSHA PEL? Yes, if the method matches 8-hour TWA and there is no tighter substance-specific standard in the stem. Good practice? The advisory numbers say no. CSP move: if aqueous or a booth is still open, specify it (hierarchy). If the stem asks âwhich is legally enforceable,â pick PEL. Conversion gym: CO 50 ppm, MW 28 â mg/mÂ³ = (50 Ã 28) / 24.45 â 57.3. Keystrokes: 50 Ã 28 Ã· 24.45 =. Treating 50 ppm as 50 mg/mÂ³ is UNIT. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Citing a TLV or REL as the OSHA legal limit (PELTLV).; Treating ppm and mg/m³ as 1:1, or using 22.4 at 25 °C (UNIT).; “We are under the PEL” as a reason to skip substitution or a booth still on the table (HIER).. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “PEL” is really OSHA legal limit (substance-specific standard if the stem names one); “TLV (ACGIH)” is really Advisory guideline — not 1910.1000 by itself; “REL (NIOSH)” is really Advisory recommendation — not the PEL; “50 ppm = 50 mg/m³” is really UNIT miss — use (ppm × MW)/24.45 at 25 °C; “LD50” is really Acute tox number — not an occupational exposure limit. Stem-if-then map: if TLV treated as OSHA citation basis → distinguish PEL vs TLV; if PEL met but substitute open → still substitute; if STEL exceeded though TWA OK → address short-term limit; if two answers work → higher hierarchy / system / design; if ppm vs mg/m3 mismatch → convert with correct formula. Scoring favors evidence, owners, verification, and hierarchy-smart controls on pel tlv rel. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "PEL vs TLV vs REL — which is the law? 50 ppm CO in mg/m³?",
  cardBack:
    "PEL = OSHA legal. TLV/REL = advisory. Smaller is not automatically the law. CO 50 ppm MW 28 ≈ 57.3 mg/m³ via 24.45. Under-PEL does not beat substitution. Attractive wrong answer: “TLV is lower so cite it.” Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence states PEL is the OSHA legal limit, TLV/REL are advisory, smaller is not automatically the law, and names mg/m³ = (ppm × MW)/24.45 (and hierarchy if under-PEL is used as an excuse).",
  formulaSlug: "ppm-mgm3",
};

export const items: ClassItem[] = [
  exam(T, "IH = 45 ppm. PEL = 50, TLV = 20, REL = 25. Which is legally enforceable as the OSHA limit in a generic Z-table stem?", [
    "20 ppm because it is the smallest.",
    "50 ppm PEL. TLV and REL are advisory. Smaller is not automatically the law.",
    "25 ppm because NIOSH writes citations.",
    "45 ppm because that is the measurement.",
  ], 1, "PELTLV: legal vs advisory. Size is not jurisdiction.", "PELTLV", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "PEL is the OSHA legal limit. TLV (ACGIH) and REL (NIOSH) are advisory guidelines. A smaller advisory number is not automatically the law (PELTLV). You may run a tighter program; you may not cite a TLV as 1910.1000. Co... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: CO 50 ppm, MW = 28. Closest mg/m³ at 25 °C.", [
    "50 mg/m³ (1:1).",
    "57. mg/m³ = (50 × 28) / 24.45 ≈ 57.3. Keystrokes: 50 × 28 ÷ 24.45 = 57.26 → closest 57.",
    "1.14 using 24.45 / (50 × 28).",
    "62.5 using 22.4 at 25 °C.",
  ], 1, "UNIT: (ppm × MW)/24.45. Not 1:1; 22.4 is 0 °C.", "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "PEL is the OSHA legal limit. TLV (ACGIH) and REL (NIOSH) are advisory guidelines. A smaller advisory number is not automatically the law (PELTLV). You may run a tighter program; you may not cite a TLV as 1910.1000. Co... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Last sentence: “Report the concentration as ppm.” You have 57.3 mg/m³ CO, MW 28. Closest ppm?", [
    "57 ppm (1:1 reverse).",
    "50. ppm = (mg/m³ × 24.45) / MW = (57.3 × 24.45) / 28 ≈ 50. Keystrokes: 57.3 × 24.45 ÷ 28 ≈ 50.0.",
    "22.4 ppm.",
    "8 ppm using TWA/8 folklore.",
  ], 1, "Invert the same 24.45 relation. STEM named ppm.", "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "PEL is the OSHA legal limit. TLV (ACGIH) and REL (NIOSH) are advisory guidelines. A smaller advisory number is not automatically the law (PELTLV). You may run a tighter program; you may not cite a TLV as 1910.1000. Co... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Operations: “We are under the PEL, cancel the enclosing booth.” Substitution to an aqueous cleaner is still open. Best CSP call?", [
    "Cancel the booth — legal equals acceptable.",
    "Specify substitution (or the booth if substitution dies). Under-PEL does not beat a higher control still on the table.",
    "Cancel and issue cartridges.",
    "Cancel and buy insurance (FIN).",
  ], 1, "HIER: legality is not hierarchy.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "PEL is the OSHA legal limit. TLV (ACGIH) and REL (NIOSH) are advisory guidelines. A smaller advisory number is not automatically the law (PELTLV). You may run a tighter program; you may not cite a TLV as 1910.1000. Co... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A substance-specific OSHA standard in the stem sets a PEL of 1 ppm and an action level of 0.5 ppm. ACGIH TLV is 0.1 ppm. Which number is the OSHA PEL?", [
    "0.1 ppm — smallest always wins.",
    "1 ppm. The action level 0.5 is not the PEL; the TLV is advisory.",
    "0.5 ppm because action levels are PELs.",
    "Whatever NIOSH REL is, unseen.",
  ], 1, "PELTLV inside a substance-specific standard: AL ≠ PEL; TLV ≠ PEL.", "PELTLV",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "PEL is the OSHA legal limit. TLV (ACGIH) and REL (NIOSH) are advisory guidelines. A smaller advisory number is not automatically the law (PELTLV). You may run a tighter program; you may not cite a TLV as 1910.1000. Co... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Welding fume is 4 mg/m³. A technician converts “to ppm” with 24.45 and MW 56. Best flag?", [
    "Correct — all air contaminants use 24.45.",
    "UNIT: particulates/fume are already mass/volume. 24.45 is a gas/vapor molar-volume conversion. Do not invent a ppm for the fume this way.",
    "Correct if DEG is on.",
    "Correct if the PEL is in ppm.",
  ], 1, "24.45 is for gases/vapors at the stated T/P.", "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "PEL is the OSHA legal limit. TLV (ACGIH) and REL (NIOSH) are advisory guidelines. A smaller advisory number is not automatically the law (PELTLV). You may run a tighter program; you may not cite a TLV as 1910.1000. Co... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Someone treats LD50 as the 8-hour occupational limit. Best flag?", [
    "LD50 is a PEL by definition.",
    "LD50 is an acute toxicity number, not an OEL. Use the PEL/TLV/REL the stem named; do not substitute LD50.",
    "LD50 divided by 24.45 is the PEL.",
    "LD50 is the NIOSH REL.",
  ], 1, "Wrong number family. LD50 is not an OEL.", "PELTLV",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "PEL is the OSHA legal limit. TLV (ACGIH) and REL (NIOSH) are advisory guidelines. A smaller advisory number is not automatically the law (PELTLV). You may run a tighter program; you may not cite a TLV as 1910.1000. Co... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "8-hour TWA PEL. Samples: 2 h at 80 ppm, 6 h at 20 ppm. Closest TWA?", [
    "50 ppm averaging 80 and 20 without time.",
    "35. TWA = (80×2 + 20×6)/8 = (160+120)/8 = 35. Keystrokes: 80×2 + 20×6 = 280; ÷ 8 = 35.",
    "80 ppm — worst interval is the TWA.",
    "20 ppm — longest interval is the TWA.",
  ], 1, "FORM: TWA = ΣCiTi / 8 for an 8-hour TWA.", "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "PEL is the OSHA legal limit. TLV (ACGIH) and REL (NIOSH) are advisory guidelines. A smaller advisory number is not automatically the law (PELTLV). You may run a tighter program; you may not cite a TLV as 1910.1000. Co... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A site policy adopts the TLV (lower than PEL) as an internal limit. A supervisor cites employees for “OSHA PEL violations” at the TLV. Best correction?", [
    "TLV is OSHA once adopted by a site.",
    "Keep the tighter site limit as policy if you want — label it correctly. OSHA PEL remains the legal PEL; TLV is still advisory (PELTLV).",
    "Drop the site limit — only PELs may be used internally.",
    "Call the TLV a REL so NIOSH will cite it.",
  ], 1, "You can be stricter. You cannot relabel TLV as PEL.", "PELTLV",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "PEL is the OSHA legal limit. TLV (ACGIH) and REL (NIOSH) are advisory guidelines. A smaller advisory number is not automatically the law (PELTLV). You may run a tighter program; you may not cite a TLV as 1910.1000. Co... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a semiconductor tool install. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Which analysis belongs before arguing 45 vs 50 ppm.", [
    "FTA after the first overexposure, then a memo on PEL vs TLV.",
    "Process review: can the solvent be substituted or enclosed? Numbers come after the hierarchy still open on the drawing.",
    "FMEA on badge color.",
    "JHA only on how to write the citation letter.",
  ], 1, "Wrong first tool if substitution is unasked.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "PEL is the OSHA legal limit. TLV (ACGIH) and REL (NIOSH) are advisory guidelines. A smaller advisory number is not automatically the law (PELTLV). You may run a tighter program; you may not cite a TLV as 1910.1000. Co... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "In-patient hospitalization from a solvent overexposure. Someone files in 8 hours “because STEL is 15 minutes and 8 is closer.” Best TIME call?", [
    "8 hours for all chemical events.",
    "1904.39: in-patient hospitalization is 24 hours (fatality 8). STEL averaging is not a reporting clock.",
    "15 minutes using STEL as the report window.",
    "No report — we were under the PEL.",
  ], 1, "TIME: 8 vs 24 is 1904.39, not an OEL window.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "PEL is the OSHA legal limit. TLV (ACGIH) and REL (NIOSH) are advisory guidelines. A smaller advisory number is not automatically the law (PELTLV). You may run a tighter program; you may not cite a TLV as 1910.1000. Co... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a municipal water-plant retrofit. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Least consistent with PEL / TLV / REL control.", [
    "Cite the OSHA PEL as the legal number; use TLV/REL as tighter health guidance.",
    "Convert gases with 24.45 at 25 °C; skip 24.45 for fume/fibers.",
    "A laminated “we are legal” card after three overexposures, with substitution and a booth still open.",
    "Enclose or substitute even when under the PEL if those options remain.",
  ], 2, "Legal is not hierarchy, and a poster is not an OEL.", "HIER", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "PEL is the OSHA legal limit. TLV (ACGIH) and REL (NIOSH) are advisory guidelines. A smaller advisory number is not automatically the law (PELTLV). You may run a tighter program; you may not cite a TLV as 1910.1000. Co... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
