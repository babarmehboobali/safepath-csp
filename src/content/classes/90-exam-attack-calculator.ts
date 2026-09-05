import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D2.14";

export const classFields: ClassFields = {
  hook: "You sit the CSP-11. The on-screen calculator is still in RAD from the last candidate, there is no formula sheet, the booklet is closed, some items may be pretest and unscored, two answers both “work,” and the stem says “closest value.” You are the CSP in the Pearson seat. The question is attack plan first, then keystrokes.",
  hookOilGas: `You sit the CSP-11 between hitch days. The on-screen calculator is still in RAD, there is no formula sheet, the booklet is closed, some items may be pretest, two answers both âwork,â and the stem says âclosest value.â You are the CSP in the Pearson seat. The question is attack plan first, then keystrokes.`,
  hookConstruction: `You sit the CSP-11 after a night shift. The on-screen calculator is still in RAD, there is no formula sheet, the booklet is closed, some items may be pretest, two answers both âwork,â and the stem says âclosest value.â You are the CSP in the Pearson seat. The question is attack plan first, then keystrokes.`,
  rule: "Attack: closed book; generally no personal calculator (on-screen TI-30XS-style); no formula sheet (formula often in the stem — still match the named table); some items may be pretest — treat every item as live; pick the closest rounded value; DEG not RAD before trig; if two answers work, take higher hierarchy / system / design. Then gym: OSHA 5 dB vs NIOSH 3 dB, Q=VA with r=D/2 in feet, TWA/8, dose Σ(C/T), RWL LC=51 lb, ppm↔mg/m³ with 24.45, TRIR=(N×200,000)/EH, ROI=(Gain−Cost)/Cost, cylinder πr²h, dike LWH (×7.48 if gallons).",
  modelCaption:
    "Checklist strip: CLOSED BOOK · NO FORMULA SHEET · PRETEST = TREAT AS LIVE · DEG ON · CLOSEST ROUNDED · TWO WORK → HIGHER HIERARCHY. Under it, gym tiles: 5 vs 3 dB · Q=VA · 24.45 · 200,000 · 51 lb · πr²h. Caption: Pearson’s look-alike is practice, not the test-center firmware.",
  workedCase:
    "Opening move: MODE → DEG. Read the last sentence before the numbers. If it names NIOSH, leave OSHA’s 5 dB. If two remaining answers are muffs vs quieter tool, take the tool. Compute full precision, then pick the closest option — do not round into the UNIT trap (6,283 instead of 1,571). Worked gym: 12-in @ 2000 fpm → 1,571 cfm; OSHA 95 dBA → 4 h; NIOSH 100 dBA → 0.25 h; CO 50 ppm MW 28 → 57.3 mg/m³; TRIR 3 / 300,000 h → 2.0; RWL 51×0.5 → 25.5 lb; cylinder r=2 ft h=4 ft → ~50.3 ft³. Site calculator is a practice look-alike, not Pearson software.",
  trapsJson: traps(
    "RAD instead of DEG; picking a pretty wrong option instead of the closest rounded correct value.",
    "Mixing OSHA 5 dB with NIOSH 3 dB, ppm with mg/m³ 1:1, diameter as radius, 100,000 instead of 200,000.",
    "Treating pretest as skippable, expecting a formula sheet, or taking PPE/admin when a higher control still works.",
  ),
  contrastJson: contrast([
    { looksLike: "DEG vs RAD", actually: "Trig — check the indicator every sitting" },
    { looksLike: "Closest rounded", actually: "Full precision, then nearest option — not the UNIT trap" },
    { looksLike: "No formula sheet / closed book", actually: "Formula often in the stem; still match the named table" },
    { looksLike: "Pretest items", actually: "May be unscored — still work them; you cannot tell" },
    { looksLike: "Two answers work", actually: "Higher hierarchy / system / design" },
  ]),
  mustScoreJson: mustScore(
    "Exam attack: read the last sentence; classify hierarchy vs calculation vs tool vs limit type.",
    "Calculator: DEG, units, closest listed value, y^x for 2^n.",
    "Flag only after selecting an answer in CBT practice.",
    "Time boxes: do not bleed 10 minutes into a 2-point trap early.",
    "If two answers work, take higher hierarchy / system / design.",
    "Eliminate absolute words and PPE-first when engineering open.",
    "After submit only \u2014 no mid-exam explanations in real CBT mindset.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "two controls both work", pick: "higher hierarchy / system / design" },
    { ifStem: "calculator trig needed", pick: "confirm DEG mode" },
    { ifStem: "answers are close numerically", pick: "recompute and pick closest" },
    { ifStem: "last sentence freezes a higher row", pick: "take best remaining engineered control" },
    { ifStem: "unsure and want to flag", pick: "select best answer first then flag" },
  ),

  brief: `Attack: closed book; generally no personal calculator (on-screen TI-30XS-style); no formula sheet (formula often in the stem â still match the named table); some items may be pretest â treat every item as live; pick the closest rounded value; DEG not RAD before trig; if two answers work, take higher hierarchy / system / design. If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Attack: closed book; generally no personal calculator (on-screen TI-30XS-style); no formula sheet (formula often in the stem â still match the named table); some items may be pretest â treat every item as live; pick the closest rounded value; DEG not RAD before trig; if two answers work, take higher hierarchy / system / design. Then gym: OSHA 5 dB vs NIOSH 3 dB, Q=VA with r=D/2 in feet, TWA/8, dose Î£(C/T), RWL LC=51 lb, ppmâmg/mÂ³ with 24.45, TRIR=(NÃ200,000)/EH, ROI=(GainâCost)/Cost, cylinder ÏrÂ²h, dike LWH (Ã7.48 if gallons). Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
You sit the CSP-11. The on-screen calculator is still in RAD from the last candidate, there is no formula sheet, the booklet is closed, some items may be pretest and unscored, two answers both âwork,â and the stem says âclosest value.â You are the CSP in the Pearson seat. The question is attack plan first, then keystrokes. Oil-and-gas skin: You sit the CSP-11 between hitch days. The on-screen calculator is still in RAD, there is no formula sheet, the booklet is closed, some items may be pretest, two answers both âwork,â and the stem says âclosest value.â You are the CSP in the Pearson seat. Construction skin: You sit the CSP-11 after a night shift. Work the case: Opening move: MODE â DEG. Read the last sentence before the numbers. If it names NIOSH, leave OSHAâs 5 dB. If two remaining answers are muffs vs quieter tool, take the tool. Compute full precision, then pick the closest option â do not round into the UNIT trap (6,283 instead of 1,571). Worked gym: 12-in @ 2000 fpm â 1,571 cfm; OSHA 95 dBA â 4 h; NIOSH 100 dBA â 0.25 h; CO 50 ppm MW 28 â 57.3 mg/mÂ³; TRIR 3 / 300,000 h â 2.0; RWL 51Ã0.5 â 25.5 lb; cylinder r=2 ft h=4 ft â ~50.3 ftÂ³. Site calculator is a practice look-alike, not Pearson software. Classic traps: RAD instead of DEG; picking a pretty wrong option instead of the closest rounded correct value.; Mixing OSHA 5 dB with NIOSH 3 dB, ppm with mg/m³ 1:1, diameter as radius, 100,000 instead of 200,000.; Treating pretest as skippable, expecting a formula sheet, or taking PPE/admin when a higher control still works.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for exam attack calculator. Verify whether a higher system or design fix is still open. Contrast labels: DEG vs RAD is actually Trig — check the indicator every sitting; Closest rounded is actually Full precision, then nearest option — not the UNIT trap; No formula sheet / closed book is actually Formula often in the stem; still match the named table; Pretest items is actually May be unscored — still work them; you cannot tell; Two answers work is actually Higher hierarchy / system / design. If the stem shows two controls both work, pick higher hierarchy / system / design. If the stem shows calculator trig needed, pick confirm DEG mode. If the stem shows answers are close numerically, pick recompute and pick closest. If the stem shows last sentence freezes a higher row, pick take best remaining engineered control. If the stem shows unsure and want to flag, pick select best answer first then flag. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Exam attack: DEG? Sheet? Pretest? Two answers work? 12-in @ 2000 fpm sits in CSP-11 Domain 2 Management Systems. The exam tests whether you apply the rule when a package already looks complete. Core rule: Attack: closed book; generally no personal calculator (on-screen TI-30XS-style); no formula sheet (formula often in the stem â still match the named table); some items may be pretest â treat every item as live; pick the closest rounded value; DEG not RAD before trig; if two answers work, take higher hierarchy / system / design. Then gym: OSHA 5 dB vs NIOSH 3 dB, Q=VA with r=D/2 in feet, TWA/8, dose Î£(C/T), RWL LC=51 lb, ppmâmg/mÂ³ with 24.45, TRIR=(NÃ200,000)/EH, ROI=(GainâCost)/Cost, cylinder ÏrÂ²h, dike LWH (Ã7.48 if gallons). Field context: You sit the CSP-11. The on-screen calculator is still in RAD from the last candidate, there is no formula sheet, the booklet is closed, some items may be pretest and unscored, two answers both âwork,â and the stem says âclosest value.â You are the CSP in the Pearson seat. The question is attack plan first, then keystrokes. The oil-and-gas skin shifts the same decision into production pressure: You sit the CSP-11 between hitch days. The on-screen calculator is still in RAD, there is no formula sheet, the booklet is closed, some items may be pretest, two answers both âwork,â and the stem says âclosest value.â You are the CSP in the Pearson seat. The construction skin shifts it into schedule and trade stacking: You sit the CSP-11 after a night shift. Model caption for this class: Checklist strip: CLOSED BOOK Â· NO FORMULA SHEET Â· PRETEST = TREAT AS LIVE Â· DEG ON Â· CLOSEST ROUNDED Â· TWO WORK â HIGHER HIERARCHY. Under it, gym tiles: 5 vs 3 dB Â· Q=VA Â· 24.45 Â· 200,000 Â· 51 lb Â· ÏrÂ²h. Caption: Pearsonâs look-alike is practice, not the test-center firmware. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Exam attack: read the last sentence; classify hierarchy vs calculation vs tool vs limit type. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Calculator: DEG, units, closest listed value, y^x for 2^n. (3) Flag only after selecting an answer in CBT practice. (4) Time boxes: do not bleed 10 minutes into a 2-point trap early. (5) If two answers work, take higher hierarchy / system / design. (6) Eliminate absolute words and PPE-first when engineering open. (7) After submit only — no mid-exam explanations in real CBT mindset. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Opening move: MODE â DEG. Read the last sentence before the numbers. If it names NIOSH, leave OSHAâs 5 dB. If two remaining answers are muffs vs quieter tool, take the tool. Compute full precision, then pick the closest option â do not round into the UNIT trap (6,283 instead of 1,571). Worked gym: 12-in @ 2000 fpm â 1,571 cfm; OSHA 95 dBA â 4 h; NIOSH 100 dBA â 0.25 h; CO 50 ppm MW 28 â 57.3 mg/mÂ³; TRIR 3 / 300,000 h â 2.0; RWL 51Ã0.5 â 25.5 lb; cylinder r=2 ft h=4 ft â ~50.3 ftÂ³. Site calculator is a practice look-alike, not Pearson software. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: RAD instead of DEG; picking a pretty wrong option instead of the closest rounded correct value.; Mixing OSHA 5 dB with NIOSH 3 dB, ppm with mg/m³ 1:1, diameter as radius, 100,000 instead of 200,000.; Treating pretest as skippable, expecting a formula sheet, or taking PPE/admin when a higher control still works.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “DEG vs RAD” is really Trig — check the indicator every sitting; “Closest rounded” is really Full precision, then nearest option — not the UNIT trap; “No formula sheet / closed book” is really Formula often in the stem; still match the named table; “Pretest items” is really May be unscored — still work them; you cannot tell; “Two answers work” is really Higher hierarchy / system / design. Stem-if-then map: if two controls both work → higher hierarchy / system / design; if calculator trig needed → confirm DEG mode; if answers are close numerically → recompute and pick closest; if last sentence freezes a higher row → take best remaining engineered control; if unsure and want to flag → select best answer first then flag. Scoring favors evidence, owners, verification, and hierarchy-smart controls on exam attack calculator. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Exam attack: DEG? Sheet? Pretest? Two answers work? 12-in @ 2000 fpm?",
  cardBack:
    "DEG not RAD. Closed book, no formula sheet, treat pretest as live, closest rounded. Two work → higher hierarchy. Q≈1,571 cfm. OSHA 95→4 h. 24.45. 200,000. LC=51. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence includes DEG not RAD, closest rounded, closed book / no formula sheet, treat pretest as live, and if two answers work take higher hierarchy — plus at least one gym anchor (Q=VA, 5 vs 3 dB, 24.45, or 200,000).",
};

export const items: ClassItem[] = [
  exam(T, "Sling tension: W = 2000 lb, two legs, θ = 30° to horizontal, T = (W/2)/sin(θ). Calculator was left in RAD. Closest T?", [
    "About −1,012 lb using RAD (sin 30 rad ≈ −0.988).",
    "2,000 lb. MODE → DEG; sin 30° = 0.5; T = 1000 / 0.5 = 2000. Keystrokes: DEG; 30 SIN = 0.5; 2000 ÷ 2 ÷ 0.5 = 2000.",
    "1,000 lb forgetting /sin.",
    "8 hours — report the sling as a fatality clock (TIME).",
  ], 1, "Calculator lab 1: DEG not RAD. TIME is garbage next to a tension.", "UNIT", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Attack: closed book; generally no personal calculator (on-screen TI-30XS-style); no formula sheet (formula often in the stem — still match the named table); some items may be pretest — treat every item as live; pick t... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a hospital utility plant shutdown. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: 12-in round duct, V = 2000 fpm. Closest Q (cfm).", [
    "6,283 using diameter as radius.",
    "1,571. D=1 ft, r=0.5, A=π(0.5)²≈0.785; Q≈1571. Keystrokes: 1 ÷ 2 = ; x² ; × π × 2000 = 1570.8 → closest 1,571.",
    "24,000 using A=12.",
    "200,000 — TRIR base hours as Q.",
  ], 1, "Calculator lab 2: Q=VA, r=D/2 in feet. Closest rounded.", "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Attack: closed book; generally no personal calculator (on-screen TI-30XS-style); no formula sheet (formula often in the stem — still match the named table); some items may be pretest — treat every item as live; pick t... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a food packaging SKU change. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: OSHA allowable time at a constant 95 dBA.", [
    "2 hours using NIOSH 3 dB.",
    "4 hours. T = 8 / 2^((95−90)/5) = 8/2 = 4. Keystrokes: 95 − 90 = 5; ÷ 5 = 1; 2 y^x 1 = 2; 8 ÷ 2 = 4.",
    "8 hours because PEL is “about 90.”",
    "15 minutes using NIOSH 100.",
  ], 1, "Calculator lab 3: OSHA 90/5 matched pair.", "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Attack: closed book; generally no personal calculator (on-screen TI-30XS-style); no formula sheet (formula often in the stem — still match the named table); some items may be pretest — treat every item as live; pick t... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a semiconductor tool install. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: NIOSH allowable time at a constant 100 dBA.", [
    "2 hours because OSHA 100 dBA is 2 h.",
    "0.25 h (15 min). T = 8 / 2^((100−85)/3) = 8/32 = 0.25. Keystrokes: 100 − 85 = 15; ÷ 3 = 5; 2 y^x 5 = 32; 8 ÷ 32 = 0.25.",
    "4 hours mixing 5 dB from 85.",
    "8 hours.",
  ], 1, "Calculator lab 4: NIOSH 85/3. Do not stay on OSHA.", "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Attack: closed book; generally no personal calculator (on-screen TI-30XS-style); no formula sheet (formula often in the stem — still match the named table); some items may be pretest — treat every item as live; pick t... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at an offshore fabrication night shift. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: CO 50 ppm, MW = 28, 25 °C. Closest mg/m³.", [
    "50 mg/m³ (1:1).",
    "57. mg/m³ = (50 × 28) / 24.45 ≈ 57.3. Keystrokes: 50 × 28 ÷ 24.45 = 57.26 → closest 57.",
    "62.5 using 22.4 at 25 °C.",
    "24.45 mg/m³.",
  ], 1, "Calculator lab 5: (ppm × MW)/24.45. Not 1:1.", "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Attack: closed book; generally no personal calculator (on-screen TI-30XS-style); no formula sheet (formula often in the stem — still match the named table); some items may be pretest — treat every item as live; pick t... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "3 recordable cases, 300,000 hours worked. Closest TRIR?", [
    "5.0 mixing DART with TRIR folklore.",
    "2.0. TRIR = (N × 200,000) / EH = (3 × 200,000) / 300,000 = 2.0. Keystrokes: 3 × 200000 ÷ 300000 = 2.",
    "1.0 using 100,000 as the base: (3 × 100,000) / 300,000 = 1.0.",
    "200,000 — reporting the constant as the rate.",
  ], 1, "Calculator lab 6: 200,000 hours base. 1.0 is the 100,000 trap.", "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Attack: closed book; generally no personal calculator (on-screen TI-30XS-style); no formula sheet (formula often in the stem — still match the named table); some items may be pretest — treat every item as live; pick t... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "NIOSH lifting: all multipliers = 0.50, LC = 51 lb. Closest RWL (lb)?", [
    "51 lb — LC is always the RWL.",
    "25.5 lb. RWL = 51 × 0.50 = 25.5. Keystrokes: 51 × 0.5 = 25.5. LC=51 is the constant, not the limit once multipliers apply.",
    "23 lb treating LC as kg without conversion.",
    "102 lb doubling LC.",
  ], 1, "Calculator lab 7: RWL = 51 × multipliers. LC is not automatically RWL.", "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Attack: closed book; generally no personal calculator (on-screen TI-30XS-style); no formula sheet (formula often in the stem — still match the named table); some items may be pretest — treat every item as live; pick t... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Vertical cylinder, r = 2.0 ft, h = 4.0 ft. Closest volume (ft³)? V = πr²h.", [
    "201 using diameter 4 ft as radius.",
    "50.3. V = π(2)²(4) = 16π ≈ 50.27. Keystrokes: 2 x² × π × 4 = 50.27 → closest 50.3.",
    "12.6 using πr² and dropping h.",
    "25.1 using r=2, h=2.",
  ], 1, "Calculator lab 8: πr²h. Diameter-as-radius is ×4.", "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Attack: closed book; generally no personal calculator (on-screen TI-30XS-style); no formula sheet (formula often in the stem — still match the named table); some items may be pretest — treat every item as live; pick t... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "OSHA: 4 h at 90 dBA and 4 h at 95 dBA. Closest dose, then closest TWA? D = 100 × Σ(Ci/Ti); TWA ≈ 90 + 16.61 log10(D/100).", [
    "100% and 90 dBA, averaging 90 and 95 without exchange.",
    "150% and ~93 dBA. D = 100×(4/8 + 4/4) = 150. TWA = 90 + 16.61×log10(1.5) ≈ 92.9 → closest 93. Keystrokes: 4÷8 + 4÷4 = 1.5; ×100 = 150; 1.5 LOG × 16.61 + 90 ≈ 92.9. Use LOG not LN.",
    "200% and 95 dBA, treating both periods as 95.",
    "150% and 150 dBA, reading dose as TWA.",
  ], 1, "Calculator lab 9: dose adds fractions; TWA uses log10.", "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Attack: closed book; generally no personal calculator (on-screen TI-30XS-style); no formula sheet (formula often in the stem — still match the named table); some items may be pretest — treat every item as live; pick t... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Control costs $20,000. Avoided loss (gain) is $50,000. Closest ROI%? ROI = (Gain − Cost) / Cost × 100%.", [
    "40% using Gain/Cost without subtracting Cost (50/20 = 2.5, then folklore).",
    "150%. ROI = (50,000 − 20,000) / 20,000 × 100% = 1.5 × 100% = 150%. Keystrokes: 50000 − 20000 = 30000; ÷ 20000 × 100 = 150.",
    "150 years, labeling ROI as payback.",
    "8 hours — report the purchase (TIME).",
  ], 1, "Calculator lab 10: ROI is (G−C)/C, not payback years and not a 1904 clock.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Attack: closed book; generally no personal calculator (on-screen TI-30XS-style); no formula sheet (formula often in the stem — still match the named table); some items may be pretest — treat every item as live; pick t... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Which sitting fact is correct for the current BCSP/Pearson flavor this course trains?", [
    "Open book with a personal graphing calculator and an official formula sheet; skip any item that “feels like pretest.”",
    "Closed book; on-screen TI-30XS-style calculator (generally no personal calc); no formula sheet (formula often in the stem); some items may be pretest — you cannot tell, so treat every item as live; pick the closest rounded value; DEG not RAD.",
    "Formula sheet is provided if you ask the proctor in the first 8 hours (TIME).",
    "Insurance pays for a retake if you skip pretest items (FIN).",
  ], 1, "Exam-attack card: closed book, no sheet, pretest unknown, closest rounded, DEG.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Attack: closed book; generally no personal calculator (on-screen TI-30XS-style); no formula sheet (formula often in the stem — still match the named table); some items may be pretest — treat every item as live; pick t... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Two remaining answers after the math is correct: issue muffs, or specify a quieter tool that is still on the purchase sheet. Exam default?", [
    "Muffs — PPE is faster and the dose is now “legal.”",
    "Quieter tool. If two answers work, take higher hierarchy / system / design. A perfect TWA does not beat substitution still open in the stem.",
    "Muffs plus extra insurance (FIN).",
    "Wait 24 hours to choose (TIME).",
  ], 1, "Exam-attack card: two work → higher hierarchy. FIN/TIME are not controls.", "HIER", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Attack: closed book; generally no personal calculator (on-screen TI-30XS-style); no formula sheet (formula often in the stem — still match the named table); some items may be pretest — treat every item as live; pick t... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
