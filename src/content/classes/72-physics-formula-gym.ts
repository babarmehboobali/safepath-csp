import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D6.06";

export const classFields: ClassFields = {
  hook: "Pearson’s on-screen TI-30XS-style calculator is all you get. The item says “closest value,” the mode is still RAD from the last student, and the stem mixed OSHA 5 dB with a 12-inch duct. You are the CSP sitting the exam. The question is keystrokes, units, and which formula the last sentence named.",
  hookOilGas: `Pearsonâs on-screen TI-30XS-style calculator is all you get. The mode is still RAD, the stem mixed OSHA 5 dB with a 12-inch flare-line duct, and it says âclosest value.â You are the CSP sitting the exam. The question is keystrokes, units, and which formula the last sentence named.`,
  hookConstruction: `Pearsonâs on-screen TI-30XS-style calculator is all you get. The mode is still RAD, the stem mixed OSHA 5 dB with a 12-inch dust duct, and it says âclosest value.â You are the CSP sitting the exam. The question is keystrokes, units, and which formula the last sentence named.`,
  rule: "Practice calculator: DEG not RAD for trig. Pick the closest rounded option. Formula is often in the stem — still match OSHA 5 dB vs NIOSH 3 dB, Q=VA, TWA/8, dose Σ(C/T), RWL=51×multipliers, ppm↔mg/m³ with 24.45, TRIR=(N×200,000)/EH, ROI=(Gain−Cost)/Cost, cylinder πr²h, dike LWH×7.48. r=D/2. If two answers work, take higher hierarchy / system / design after the math.",
  modelCaption: "Calculator overlay: DEG indicator ON | y^x for 2^exchange | LOG for log10 dose | ×π after r² | ×7.48 after ft³. Caption: closest rounded; inches are not feet; 51 lb is LC not always RWL.",
  workedCase: "Work a stack: (1) MODE DEG. (2) 12-in duct 2000 fpm → 1571 cfm. (3) OSHA 95 dBA → T=4 h, 8 h shift → 200% → TWA 95. (4) CO 50 ppm MW28 → 57.3 mg/m³. (5) TRIR 3 / 300,000 h → 2.0. (6) RWL 51×0.5=25.5. Wrong mode, wrong exchange, diameter-as-radius, and 100,000-hour TRIR are the gym’s villains.",
  brief: `Practice calculator: DEG not RAD for trig. Pick the closest rounded option. Formula is often in the stem â still match OSHA 5 dB vs NIOSH 3 dB, Q=VA, TWA/8, dose Î£(C/T), RWL=51Ãmultipliers, ppmâmg/mÂ³ with 24.45, TRIR=(NÃ200,000)/EH, ROI=(GainâCost)/Cost, cylinder ÏrÂ²h, dike LWHÃ7.48. r=D/2. If two answers work, take higher hierarchy / system / design after If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Practice calculator: DEG not RAD for trig. Pick the closest rounded option. Formula is often in the stem â still match OSHA 5 dB vs NIOSH 3 dB, Q=VA, TWA/8, dose Î£(C/T), RWL=51Ãmultipliers, ppmâmg/mÂ³ with 24.45, TRIR=(NÃ200,000)/EH, ROI=(GainâCost)/Cost, cylinder ÏrÂ²h, dike LWHÃ7.48. r=D/2. If two answers work, take higher hierarchy / system / design after the math. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
Pearsonâs on-screen TI-30XS-style calculator is all you get. The item says âclosest value,â the mode is still RAD from the last student, and the stem mixed OSHA 5 dB with a 12-inch duct. You are the CSP sitting the exam. The question is keystrokes, units, and which formula the last sentence named. Oil-and-gas skin: Pearsonâs on-screen TI-30XS-style calculator is all you get. The mode is still RAD, the stem mixed OSHA 5 dB with a 12-inch flare-line duct, and it says âclosest value.â You are the CSP sitting the exam. Construction skin: Pearsonâs on-screen TI-30XS-style calculator is all you get. The mode is still RAD, the stem mixed OSHA 5 dB with a 12-inch dust duct, and it says âclosest value.â You are the CSP sitting the exam. Work the case: Work a stack: (1) MODE DEG. (2) 12-in duct 2000 fpm â 1571 cfm. (3) OSHA 95 dBA â T=4 h, 8 h shift â 200% â TWA 95. (4) CO 50 ppm MW28 â 57.3 mg/mÂ³. (5) TRIR 3 / 300,000 h â 2.0. (6) RWL 51Ã0.5=25.5. Wrong mode, wrong exchange, diameter-as-radius, and 100,000-hour TRIR are the gymâs villains. Classic traps: RAD instead of DEG; ln instead of log10; 2^x skipped for “half it by gut.”; Mixing OSHA 5 dB with NIOSH 3 dB, or ppm with mg/m³ 1:1.; Diameter as radius; 100,000 instead of 200,000; payback years labeled ROI%.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for physics formula gym. Verify whether a higher system or design fix is still open. Contrast labels: DEG vs RAD is actually Trig for slings/angles — check the indicator; OSHA 5 dB / 90 vs NIOSH 3 dB / 85 is actually Matched pair — never mix (UNIT); Q=VA vs πr²h vs LWH is actually Flow vs tank vs dike — different objects; 200,000 vs 100,000 is actually TRIR/DART base hours; Closest rounded is actually Compute full precision then pick the nearest option. If the stem shows formula is unclear, pick state formula and units before calculating. If the stem shows calculator is in radians by mistake, pick switch to degrees when appropriate. If the stem shows two close answer choices, pick compute carefully and pick closest. If the stem shows two answers work on control selection, pick higher hierarchy / system / design. If the stem shows noise exchange rate ambiguous, pick check whether OSHA 5 dB or NIOSH 3 dB is asked. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `DEG or RAD? OSHA 95 dBA T? 12-in duct at 2000 fpm? TRIR base hours sits in CSP-11 Domain 6 Occupational Health and Ergonomics. The exam tests whether you apply the rule when a package already looks complete. Core rule: Practice calculator: DEG not RAD for trig. Pick the closest rounded option. Formula is often in the stem â still match OSHA 5 dB vs NIOSH 3 dB, Q=VA, TWA/8, dose Î£(C/T), RWL=51Ãmultipliers, ppmâmg/mÂ³ with 24.45, TRIR=(NÃ200,000)/EH, ROI=(GainâCost)/Cost, cylinder ÏrÂ²h, dike LWHÃ7.48. r=D/2. If two answers work, take higher hierarchy / system / design after the math. Field context: Pearsonâs on-screen TI-30XS-style calculator is all you get. The item says âclosest value,â the mode is still RAD from the last student, and the stem mixed OSHA 5 dB with a 12-inch duct. You are the CSP sitting the exam. The question is keystrokes, units, and which formula the last sentence named. The oil-and-gas skin shifts the same decision into production pressure: Pearsonâs on-screen TI-30XS-style calculator is all you get. The mode is still RAD, the stem mixed OSHA 5 dB with a 12-inch flare-line duct, and it says âclosest value.â You are the CSP sitting the exam. The construction skin shifts it into schedule and trade stacking: Pearsonâs on-screen TI-30XS-style calculator is all you get. The mode is still RAD, the stem mixed OSHA 5 dB with a 12-inch dust duct, and it says âclosest value.â You are the CSP sitting the exam. Model caption for this class: Calculator overlay: DEG indicator ON | y^x for 2^exchange | LOG for log10 dose | ÃÏ after rÂ² | Ã7.48 after ftÂ³. Caption: closest rounded; inches are not feet; 51 lb is LC not always RWL. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Identify the right formula before punching keys. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Track units through every step; convert before combining. (3) DEG mode unless the stem requires radians. (4) Pick the closest rounded listed value. (5) Common CSP math: noise exchange, TWA, ppm-mg/m3, Q=VA, ROI, RWL pieces, percentages. (6) Write intermediate steps to catch UNIT/FORM traps. (7) Hierarchy questions can sit beside math — read the last sentence. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Work a stack: (1) MODE DEG. (2) 12-in duct 2000 fpm â 1571 cfm. (3) OSHA 95 dBA â T=4 h, 8 h shift â 200% â TWA 95. (4) CO 50 ppm MW28 â 57.3 mg/mÂ³. (5) TRIR 3 / 300,000 h â 2.0. (6) RWL 51Ã0.5=25.5. Wrong mode, wrong exchange, diameter-as-radius, and 100,000-hour TRIR are the gymâs villains. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: RAD instead of DEG; ln instead of log10; 2^x skipped for “half it by gut.”; Mixing OSHA 5 dB with NIOSH 3 dB, or ppm with mg/m³ 1:1.; Diameter as radius; 100,000 instead of 200,000; payback years labeled ROI%.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “DEG vs RAD” is really Trig for slings/angles — check the indicator; “OSHA 5 dB / 90 vs NIOSH 3 dB / 85” is really Matched pair — never mix (UNIT); “Q=VA vs πr²h vs LWH” is really Flow vs tank vs dike — different objects; “200,000 vs 100,000” is really TRIR/DART base hours; “Closest rounded” is really Compute full precision then pick the nearest option. Stem-if-then map: if formula is unclear → state formula and units before calculating; if calculator is in radians by mistake → switch to degrees when appropriate; if two close answer choices → compute carefully and pick closest; if two answers work on control selection → higher hierarchy / system / design; if noise exchange rate ambiguous → check whether OSHA 5 dB or NIOSH 3 dB is asked. Scoring favors evidence, owners, verification, and hierarchy-smart controls on physics formula gym. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "DEG or RAD? OSHA 95 dBA T? 12-in duct at 2000 fpm? TRIR base hours?",
  cardBack: "DEG. OSHA 95 dBA → 4 h. Q≈1571 cfm. TRIR uses 200,000. RWL≤51. 24.45 at 25 °C. Closest rounded. Study only — not allowed in the test center.",
  teachBackKey: "Pass if the sentence says DEG not RAD, closest rounded, OSHA 5 dB vs NIOSH 3 dB as a unit system, and names Q=VA / TWA/8 / 51×multipliers / 24.45 / 200,000 as matched formulas.",
  trapsJson: traps(
    "RAD instead of DEG; ln instead of log10; 2^x skipped for “half it by gut.”",
    "Mixing OSHA 5 dB with NIOSH 3 dB, or ppm with mg/m³ 1:1.",
    "Diameter as radius; 100,000 instead of 200,000; payback years labeled ROI%.",
  ),
  contrastJson: contrast([
    { looksLike: "DEG vs RAD", actually: "Trig for slings/angles — check the indicator" },
    { looksLike: "OSHA 5 dB / 90 vs NIOSH 3 dB / 85", actually: "Matched pair — never mix (UNIT)" },
    { looksLike: "Q=VA vs πr²h vs LWH", actually: "Flow vs tank vs dike — different objects" },
    { looksLike: "200,000 vs 100,000", actually: "TRIR/DART base hours" },
    { looksLike: "Closest rounded", actually: "Compute full precision then pick the nearest option" },
  ]),
  mustScoreJson: mustScore(
    "Identify the right formula before punching keys.",
    "Track units through every step; convert before combining.",
    "DEG mode unless the stem requires radians.",
    "Pick the closest rounded listed value.",
    "Common CSP math: noise exchange, TWA, ppm-mg/m3, Q=VA, ROI, RWL pieces, percentages.",
    "Write intermediate steps to catch UNIT/FORM traps.",
    "Hierarchy questions can sit beside math \u2014 read the last sentence.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "formula is unclear", pick: "state formula and units before calculating" },
    { ifStem: "calculator is in radians by mistake", pick: "switch to degrees when appropriate" },
    { ifStem: "two close answer choices", pick: "compute carefully and pick closest" },
    { ifStem: "two answers work on control selection", pick: "higher hierarchy / system / design" },
    { ifStem: "noise exchange rate ambiguous", pick: "check whether OSHA 5 dB or NIOSH 3 dB is asked" },
  ),

  formulaSlug: null,
};

export const items: ClassItem[] = [
  exam(
    T,
    "Calculator in DEG. sin(30°) for a two-leg sling, W = 2000 lb, θ = 30° to horizontal. Tension each leg T = (W/2)/sin(θ)?",
    [
      "−1,012 lb using RAD mode (sin 30 rad ≈ −0.988).",
      "2,000 lb. DEG: sin 30° = 0.5; T = 1000 / 0.5 = 2000. Keystrokes: MODE → DEG; 30 SIN = 0.5; 2000 ÷ 2 ÷ 0.5 = 2000. Closest 2,000.",
      "1,000 lb forgetting /sin.",
      "3,464 lb using 60° in RAD folklore.",
    ],
    1,
    "UNIT: DEG not RAD. TI-30XS: check DEG indicator before SIN/COS.",
    "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Practice calculator: DEG not RAD for trig. Pick the closest rounded option. Formula is often in the stem — still match OSHA 5 dB vs NIOSH 3 dB, Q=VA, TWA/8, dose Σ(C/T), RWL=51×multipliers, ppm↔mg/m³ with 24.45, TRIR=... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: 12-in round duct, V = 2000 fpm. Closest Q (cfm).",
    [
      "6,283 using diameter as radius.",
      "1,571. A=π(0.5)²≈0.7854; Q=1570.8. Keystrokes: 1 ÷ 2 = ; x² ; × π × 2000 = 1570.8 → closest 1,571.",
      "2,000 ignoring area.",
      "24,000 using A=12.",
    ],
    1,
    "FORM: Q=VA; pick closest rounded. r=D/2 in feet.",
    "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Practice calculator: DEG not RAD for trig. Pick the closest rounded option. Formula is often in the stem — still match OSHA 5 dB vs NIOSH 3 dB, Q=VA, TWA/8, dose Σ(C/T), RWL=51×multipliers, ppm↔mg/m³ with 24.45, TRIR=... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at a refinery coker outage. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: 10-in round duct, V = 1500 fpm. Closest Q.",
    [
      "4,712 cfm using r=10/12 ft as if diameter were radius in feet twice.",
      "818 cfm. D=10/12 ft; r=5/12; A=π(5/12)²≈0.5454; ×1500≈818.1. Keystrokes: 10 ÷ 12 ÷ 2 = 0.4167; x² × π × 1500 ≈ 818.",
      "15,000 cfm.",
      "150 cfm.",
    ],
    1,
    "FORM/UNIT: convert 10 in to feet before πr².",
    "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Practice calculator: DEG not RAD for trig. Pick the closest rounded option. Formula is often in the stem — still match OSHA 5 dB vs NIOSH 3 dB, Q=VA, TWA/8, dose Σ(C/T), RWL=51×multipliers, ppm↔mg/m³ with 24.45, TRIR=... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Chemical TWA: 200 ppm for 2.0 h, then 0 ppm for the remaining 6.0 h of an 8-hour TWA. TWA?",
    [
      "200 ppm dividing by elapsed 2 h.",
      "50 ppm. (200×2 + 0×6)/8 = 400/8. Keystrokes: 200 × 2 ÷ 8 = 50. Divide by 8, not by elapsed sample time, for an 8-hour TWA.",
      "25 ppm using /16.",
      "800 ppm adding 200+600.",
    ],
    1,
    "FORM: 8-hour TWA divides by 8. Unsampled zeros must be stated — here they are.",
    "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Practice calculator: DEG not RAD for trig. Pick the closest rounded option. Formula is often in the stem — still match OSHA 5 dB vs NIOSH 3 dB, Q=VA, TWA/8, dose Σ(C/T), RWL=51×multipliers, ppm↔mg/m³ with 24.45, TRIR=... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "150 ppm for 2 h + 50 ppm for 2 h; last sentence: remaining 4 h unsampled, treat as 0. TWA?",
    [
      "100 ppm averaging 150 and 50 only (/4).",
      "50 ppm. (150×2 + 50×2 + 0)/8 = 400/8. Keystrokes: 150×2=300; 50×2=100; + =400; ÷8=50.",
      "200 ppm adding 150+50.",
      "62.5 ppm inventing a fifth hour.",
    ],
    1,
    "STEM+FORM: last sentence forced zeros into the 8-hour denominator.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Practice calculator: DEG not RAD for trig. Pick the closest rounded option. Formula is often in the stem — still match OSHA 5 dB vs NIOSH 3 dB, Q=VA, TWA/8, dose Σ(C/T), RWL=51×multipliers, ppm↔mg/m³ with 24.45, TRIR=... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "OSHA allowable duration at 105 dBA (5 dB, criterion 90)?",
    [
      "8 hours.",
      "1.00 h. (105−90)/5=3 doublings; T=8/2³=8/8=1. Keystrokes: 105 − 90 ÷ 5 = 3; 2 y^x 3 = 8; 8 ÷ 8 = 1.",
      "0.25 h using NIOSH 3 dB.",
      "2 hours using only two doublings.",
    ],
    1,
    "UNIT: OSHA 5 dB from 90. Three steps of 5 dB → 1 hour.",
    "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Practice calculator: DEG not RAD for trig. Pick the closest rounded option. Formula is often in the stem — still match OSHA 5 dB vs NIOSH 3 dB, Q=VA, TWA/8, dose Σ(C/T), RWL=51×multipliers, ppm↔mg/m³ with 24.45, TRIR=... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "NIOSH allowable duration at 100 dBA (3 dB, criterion 85)?",
    [
      "2 hours using OSHA 5 dB.",
      "0.25 h (15 min). (100−85)/3=5; T=8/2⁵=8/32=0.25. Keystrokes: 100 − 85 = 15; ÷ 3 = 5; 2 y^x 5 = 32; 8 ÷ 32 = 0.25. Closest 0.25 h.",
      "8 hours.",
      "5 hours using the 5 as T.",
    ],
    1,
    "UNIT: NIOSH table. Same 100 dBA is 2 h OSHA vs 15 min NIOSH.",
    "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Practice calculator: DEG not RAD for trig. Pick the closest rounded option. Formula is often in the stem — still match OSHA 5 dB vs NIOSH 3 dB, Q=VA, TWA/8, dose Σ(C/T), RWL=51×multipliers, ppm↔mg/m³ with 24.45, TRIR=... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at a hospital utility plant shutdown. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: OSHA 95 dBA for 8.0 h. Dose.",
    [
      "100% because the shift is 8 h.",
      "200%. T_allow=4 h; D=100×(8/4)=200. Keystrokes: 95 − 90 ÷ 5 = 1; 2 y^x 1 = 2; 8 ÷ 2 = 4; 8 ÷ 4 × 100 = 200.",
      "50%.",
      "95%.",
    ],
    1,
    "FORM: dose uses allowed time from the exchange table, not “shift length = 100%.”",
    "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Practice calculator: DEG not RAD for trig. Pick the closest rounded option. Formula is often in the stem — still match OSHA 5 dB vs NIOSH 3 dB, Q=VA, TWA/8, dose Σ(C/T), RWL=51×multipliers, ppm↔mg/m³ with 24.45, TRIR=... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "OSHA mixed: 1.0 h at 105 dBA (T=1) and 4.0 h at 90 dBA (T=8). Dose?",
    [
      "Average 97.5 dBA without times.",
      "150%. D=100×(1/1 + 4/8)=150. Keystrokes: 1 ÷ 1 = 1; 4 ÷ 8 = 0.5; + × 100 = 150.",
      "100% ignoring 90 dBA.",
      "5% adding 1+4.",
    ],
    1,
    "FORM: add Ci/Ti fractions. Do not average dB.",
    "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Practice calculator: DEG not RAD for trig. Pick the closest rounded option. Formula is often in the stem — still match OSHA 5 dB vs NIOSH 3 dB, Q=VA, TWA/8, dose Σ(C/T), RWL=51×multipliers, ppm↔mg/m³ with 24.45, TRIR=... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at a semiconductor tool install. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: OSHA dose 200%. TWA using 90 + 16.61 log10(D/100).",
    [
      "90 dBA.",
      "95.0 dBA. log10(2)=0.3010; ×16.61≈5.00; +90=95. Keystrokes: 200 ÷ 100 = 2; LOG × 16.61 + 90 ≈ 95.00. Closest 95.",
      "85 dBA using AL.",
      "100 dBA using D as TWA.",
    ],
    1,
    "FORM: TWA from dose. LOG is log10 on TI-30XS (not ln).",
    "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Practice calculator: DEG not RAD for trig. Pick the closest rounded option. Formula is often in the stem — still match OSHA 5 dB vs NIOSH 3 dB, Q=VA, TWA/8, dose Σ(C/T), RWL=51×multipliers, ppm↔mg/m³ with 24.45, TRIR=... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at an offshore fabrication night shift. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: OSHA dose 50%. Same TWA formula.",
    [
      "90 dBA.",
      "85.0 dBA. log10(0.5)=−0.3010; ×16.61≈−5.00; +90=85. Keystrokes: 50 ÷ 100 = 0.5; LOG × 16.61 + 90 ≈ 85.00.",
      "45 dBA half of 90.",
      "50 dBA using dose as TWA.",
    ],
    1,
    "FORM: 50% dose is one 5 dB step below 90 → 85 dBA TWA.",
    "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Practice calculator: DEG not RAD for trig. Pick the closest rounded option. Formula is often in the stem — still match OSHA 5 dB vs NIOSH 3 dB, Q=VA, TWA/8, dose Σ(C/T), RWL=51×multipliers, ppm↔mg/m³ with 24.45, TRIR=... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at a municipal water-plant retrofit. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: NIOSH RWL with all multipliers = 1. Value.",
    [
      "23 lb (kg written as lb).",
      "51 lb. RWL=LC×1. Keystrokes: 51 × 1 = 51. 51 lb is the ceiling, not a geometry-proof limit.",
      "102 lb.",
      "90 lb.",
    ],
    1,
    "FORM: LC = 51 lb only when every multiplier is 1.",
    "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Practice calculator: DEG not RAD for trig. Pick the closest rounded option. Formula is often in the stem — still match OSHA 5 dB vs NIOSH 3 dB, Q=VA, TWA/8, dose Σ(C/T), RWL=51×multipliers, ppm↔mg/m³ with 24.45, TRIR=... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "RWL = 51 × 0.63 × 0.93 × 0.87 (other multipliers 1). Closest RWL?",
    [
      "51 lb.",
      "26 lb. 51×0.63=32.13; ×0.93=29.88; ×0.87=25.996. Keystrokes: 51 × 0.63 × 0.93 × 0.87 ≈ 26.00 → closest 26.",
      "23 lb.",
      "32 lb stopping after 0.63.",
    ],
    1,
    "FORM: multiply all given multipliers; closest rounded 26 lb.",
    "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Practice calculator: DEG not RAD for trig. Pick the closest rounded option. Formula is often in the stem — still match OSHA 5 dB vs NIOSH 3 dB, Q=VA, TWA/8, dose Σ(C/T), RWL=51×multipliers, ppm↔mg/m³ with 24.45, TRIR=... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Load 40 lb, RWL 20 lb. Lifting Index.",
    [
      "20.",
      "2.0. LI=Load/RWL=40/20. Keystrokes: 40 ÷ 20 = 2. LI>1 means redesign pressure.",
      "0.5 inverted.",
      "51.",
    ],
    1,
    "FORM: LI = Load / RWL.",
    "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Practice calculator: DEG not RAD for trig. Pick the closest rounded option. Formula is often in the stem — still match OSHA 5 dB vs NIOSH 3 dB, Q=VA, TWA/8, dose Σ(C/T), RWL=51×multipliers, ppm↔mg/m³ with 24.45, TRIR=... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Convert NIOSH LC 23 kg to pounds (2.20 lb/kg). Closest?",
    [
      "23 lb.",
      "51 lb. 23×2.20=50.6. Keystrokes: 23 × 2.2 = 50.6 → closest 51 (the stated LC).",
      "10.4 lb using ÷2.2.",
      "23 kg used as 23 dBA.",
    ],
    1,
    "UNIT: 23 kg ≈ 51 lb. Never drop kg into a pound stem.",
    "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Practice calculator: DEG not RAD for trig. Pick the closest rounded option. Formula is often in the stem — still match OSHA 5 dB vs NIOSH 3 dB, Q=VA, TWA/8, dose Σ(C/T), RWL=51×multipliers, ppm↔mg/m³ with 24.45, TRIR=... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at a bridge deck pour laydown yard. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Benzene MW = 78.1. 1.00 ppm → mg/m³ at 25 °C (24.45).",
    [
      "1.00 mg/m³.",
      "3.19 mg/m³. (1×78.1)/24.45. Keystrokes: 78.1 ÷ 24.45 ≈ 3.194 → closest 3.19.",
      "78.1 mg/m³.",
      "24.45 mg/m³.",
    ],
    1,
    "UNIT: mg/m³=(ppm×MW)/24.45.",
    "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Practice calculator: DEG not RAD for trig. Pick the closest rounded option. Formula is often in the stem — still match OSHA 5 dB vs NIOSH 3 dB, Q=VA, TWA/8, dose Σ(C/T), RWL=51×multipliers, ppm↔mg/m³ with 24.45, TRIR=... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at a pharma suite changeover. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: SO2 MW = 64.0. 5.00 mg/m³ → ppm at 25 °C.",
    [
      "5.00 ppm.",
      "1.91 ppm. ppm=(mg/m³×24.45)/MW=(5×24.45)/64. Keystrokes: 5 × 24.45 ÷ 64 ≈ 1.910 → closest 1.91.",
      "64 ppm.",
      "0.205 ppm inverted constants.",
    ],
    1,
    "UNIT: invert the conversion. Don’t set ppm=mg/m³.",
    "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Practice calculator: DEG not RAD for trig. Pick the closest rounded option. Formula is often in the stem — still match OSHA 5 dB vs NIOSH 3 dB, Q=VA, TWA/8, dose Σ(C/T), RWL=51×multipliers, ppm↔mg/m³ with 24.45, TRIR=... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Stem specifies 25 °C. 100 ppm, MW 36. mg/m³? (Do not use 22.4.)",
    [
      "161 mg/m³ using 22.4 (0 °C molar volume).",
      "147 mg/m³. (100×36)/24.45 = 3600/24.45 ≈ 147.2. Keystrokes: 100 × 36 ÷ 24.45 ≈ 147.2 → closest 147. 22.4 is 0 °C (UNIT).",
      "36 mg/m³ using MW as concentration.",
      "24.45 mg/m³.",
    ],
    1,
    "UNIT: 24.45 L at 25 °C; 22.4 at 0 °C. Closest 147 mg/m³.",
    "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Practice calculator: DEG not RAD for trig. Pick the closest rounded option. Formula is often in the stem — still match OSHA 5 dB vs NIOSH 3 dB, Q=VA, TWA/8, dose Σ(C/T), RWL=51×multipliers, ppm↔mg/m³ with 24.45, TRIR=... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at a grain elevator maintenance day. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: TRIR: 3 recordables, 300,000 hours. Rate.",
    [
      "1.0 using 100,000 in the numerator.",
      "2.0. (3×200,000)/300,000=2. Keystrokes: 3 × 200000 ÷ 300000 = 2.",
      "0.001.",
      "3.0 using headcount 100.",
    ],
    1,
    "FORM: TRIR=(N×200,000)/EH. 100,000 is the classic miss.",
    "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Practice calculator: DEG not RAD for trig. Pick the closest rounded option. Formula is often in the stem — still match OSHA 5 dB vs NIOSH 3 dB, Q=VA, TWA/8, dose Σ(C/T), RWL=51×multipliers, ppm↔mg/m³ with 24.45, TRIR=... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Same data as TRIR item but analyst uses 100,000 instead of 200,000. Result vs truth?",
    [
      "Still 2.0.",
      "They print 1.0; true TRIR is 2.0. Keystrokes wrong: 3 × 100000 ÷ 300000 = 1. FORM: 100,000 is not the OSHA base.",
      "200.",
      "0.5.",
    ],
    1,
    "FORM: 200,000 hours base, not 100,000.",
    "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Practice calculator: DEG not RAD for trig. Pick the closest rounded option. Formula is often in the stem — still match OSHA 5 dB vs NIOSH 3 dB, Q=VA, TWA/8, dose Σ(C/T), RWL=51×multipliers, ppm↔mg/m³ with 24.45, TRIR=... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at a food packaging SKU change. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: DART: 2 DART cases, 400,000 hours. Rate.",
    [
      "0.5 using 100,000.",
      "1.0. (2×200,000)/400,000=1. Keystrokes: 2 × 200000 ÷ 400000 = 1.",
      "2.0 mixing TRIR cases.",
      "200.",
    ],
    1,
    "FORM: same 200,000 base; N is DART cases only.",
    "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Practice calculator: DEG not RAD for trig. Pick the closest rounded option. Formula is often in the stem — still match OSHA 5 dB vs NIOSH 3 dB, Q=VA, TWA/8, dose Σ(C/T), RWL=51×multipliers, ppm↔mg/m³ with 24.45, TRIR=... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at a semiconductor tool install. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: ROI: Cost $25,000, Gain $40,000 same period. ROI%.",
    [
      "160% using Gain/Cost.",
      "60%. (40k−25k)/25k=0.60. Keystrokes: 40000 − 25000 = 15000; ÷ 25000 × 100 = 60.",
      "37.5% dividing by Gain.",
      "0.63% using payback years as percent.",
    ],
    1,
    "FORM: ROI=(Gain−Cost)/Cost × 100%.",
    "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Practice calculator: DEG not RAD for trig. Pick the closest rounded option. Formula is often in the stem — still match OSHA 5 dB vs NIOSH 3 dB, Q=VA, TWA/8, dose Σ(C/T), RWL=51×multipliers, ppm↔mg/m³ with 24.45, TRIR=... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at an offshore fabrication night shift. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Same $25k cost, $40k annual gain. Payback vs ROI.",
    [
      "60% payback.",
      "0.625 years payback (25/40), which is not 60%. Keystrokes: 25000 ÷ 40000 = 0.625. Label years, not percent.",
      "1.60 years using Gain/Cost as years.",
      "40 years.",
    ],
    1,
    "FORM: payback=Cost/annual gain in years — not ROI%.",
    "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Practice calculator: DEG not RAD for trig. Pick the closest rounded option. Formula is often in the stem — still match OSHA 5 dB vs NIOSH 3 dB, Q=VA, TWA/8, dose Σ(C/T), RWL=51×multipliers, ppm↔mg/m³ with 24.45, TRIR=... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at a municipal water-plant retrofit. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Vertical cylinder D=4.00 ft, h=10.0 ft. Volume ft³.",
    [
      "503 ft³ using r=4.",
      "126 ft³. r=2; π×4×10=40π≈125.66. Keystrokes: 4 ÷ 2 = 2; x² = 4; × π × 10 ≈ 125.66 → closest 126.",
      "40 ft³ using D×h.",
      "80 ft³ using 2πrh as volume.",
    ],
    1,
    "FORM: πr²h, r=D/2; closest rounded 126 ft³.",
    "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Practice calculator: DEG not RAD for trig. Pick the closest rounded option. Formula is often in the stem — still match OSHA 5 dB vs NIOSH 3 dB, Q=VA, TWA/8, dose Σ(C/T), RWL=51×multipliers, ppm↔mg/m³ with 24.45, TRIR=... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at a plastics compounding turnaround. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: 125.66 ft³ × 7.48 gal/ft³. Closest gallons.",
    [
      "126 gal (forgot 7.48).",
      "940 gal. Keystrokes: 125.66 × 7.48 ≈ 939.9 → closest 940.",
      "17 gal dividing by 7.48.",
      "7.48 gal.",
    ],
    1,
    "UNIT: US gallons = ft³ × 7.48. Closest 940.",
    "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Practice calculator: DEG not RAD for trig. Pick the closest rounded option. Formula is often in the stem — still match OSHA 5 dB vs NIOSH 3 dB, Q=VA, TWA/8, dose Σ(C/T), RWL=51×multipliers, ppm↔mg/m³ with 24.45, TRIR=... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Dike 10.0 × 10.0 × 2.00 ft, no subtraction. Gallons.",
    [
      "200 gal treating ft³ as gal.",
      "1,496 gal. 200 ft³ ×7.48. Keystrokes: 10 × 10 × 2 × 7.48 = 1,496.",
      "7.48 gal.",
      "20 gal.",
    ],
    1,
    "FORM: LWH then 7.48.",
    "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Practice calculator: DEG not RAD for trig. Pick the closest rounded option. Formula is often in the stem — still match OSHA 5 dB vs NIOSH 3 dB, Q=VA, TWA/8, dose Σ(C/T), RWL=51×multipliers, ppm↔mg/m³ with 24.45, TRIR=... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at a refinery coker outage. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: 18-in round duct, 2500 fpm. Closest Q.",
    [
      "7,069 cfm using r=1.5 ft (diameter as radius).",
      "4,418 cfm. D=1.5 ft; r=0.75; A=π×0.5625≈1.767; ×2500≈4418. Keystrokes: 18 ÷ 12 ÷ 2 = 0.75; x² × π × 2500 ≈ 4,418.",
      "2,500 cfm.",
      "45,000 cfm using 18 ft.",
    ],
    1,
    "FORM/UNIT: 18 in = 1.5 ft; r=0.75.",
    "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Practice calculator: DEG not RAD for trig. Pick the closest rounded option. Formula is often in the stem — still match OSHA 5 dB vs NIOSH 3 dB, Q=VA, TWA/8, dose Σ(C/T), RWL=51×multipliers, ppm↔mg/m³ with 24.45, TRIR=... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at a bridge deck pour laydown yard. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Sampling 1.50 L/min for 8.00 h. Volume L.",
    [
      "12 L adding 1.5+8+2.5.",
      "720 L. 1.5×480 min. Keystrokes: 1.5 × 8 × 60 = 720.",
      "1.5 L.",
      "0.720 L calling m³ liters wrong way.",
    ],
    1,
    "FORM: V=flow×time; 8 h=480 min.",
    "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Practice calculator: DEG not RAD for trig. Pick the closest rounded option. Formula is often in the stem — still match OSHA 5 dB vs NIOSH 3 dB, Q=VA, TWA/8, dose Σ(C/T), RWL=51×multipliers, ppm↔mg/m³ with 24.45, TRIR=... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at a pharma suite changeover. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Silica PEL 50 μg/m³ in mg/m³.",
    [
      "50 mg/m³.",
      "0.050 mg/m³. Keystrokes: 50 ÷ 1000 = 0.05. UNIT: 1000 μg=1 mg.",
      "50 ppm via 24.45.",
      "0.50 mg/m³ using 100.",
    ],
    1,
    "UNIT: μg vs mg. Don’t run 24.45 on a particulate.",
    "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Practice calculator: DEG not RAD for trig. Pick the closest rounded option. Formula is often in the stem — still match OSHA 5 dB vs NIOSH 3 dB, Q=VA, TWA/8, dose Σ(C/T), RWL=51×multipliers, ppm↔mg/m³ with 24.45, TRIR=... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at a warehouse second-shift startup. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: 12 mR/h at 3.0 ft. Intensity at 9.0 ft (point source).",
    [
      "4.0 mR/h linear 12×3/9.",
      "1.33 mR/h. 12×(3/9)²=12×1/9=1.333. Keystrokes: 3 ÷ 9 = 0.333; x² = 0.111; × 12 = 1.333 → closest 1.33.",
      "12 mR/h.",
      "108 mR/h using (9/3)² in the wrong slot.",
    ],
    1,
    "FORM: inverse square; closest 1.33.",
    "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Practice calculator: DEG not RAD for trig. Pick the closest rounded option. Formula is often in the stem — still match OSHA 5 dB vs NIOSH 3 dB, Q=VA, TWA/8, dose Σ(C/T), RWL=51×multipliers, ppm↔mg/m³ with 24.45, TRIR=... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at a grain elevator maintenance day. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Dose limit 200 mrem, rate 40 mR/h. Stay time.",
    [
      "8,000 h multiplied.",
      "5.00 h. 200/40. Keystrokes: 200 ÷ 40 = 5. Don’t call it 300 min “5 mR” (UNIT).",
      "0.2 h inverted.",
      "40 min treating mR/h as mR/min.",
    ],
    1,
    "FORM: stay=limit/rate. Watch min vs h.",
    "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Practice calculator: DEG not RAD for trig. Pick the closest rounded option. Formula is often in the stem — still match OSHA 5 dB vs NIOSH 3 dB, Q=VA, TWA/8, dose Σ(C/T), RWL=51×multipliers, ppm↔mg/m³ with 24.45, TRIR=... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Additive mixture: 0.40 + 0.70 of two PELs, same target. Index and call?",
    [
      "1.10 ppm as a fake PEL.",
      "1.10 (>1) overexposure on the unity rule. Keystrokes: 0.4 + 0.7 = 1.1. Do not add the ppm values across different PELs.",
      "0.28 multiplied.",
      "40% dose using noise 5 dB.",
    ],
    1,
    "FORM: Σ(Ci/PELi). >1 is over for additive stems.",
    "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Practice calculator: DEG not RAD for trig. Pick the closest rounded option. Formula is often in the stem — still match OSHA 5 dB vs NIOSH 3 dB, Q=VA, TWA/8, dose Σ(C/T), RWL=51×multipliers, ppm↔mg/m³ with 24.45, TRIR=... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "cos(60°) in DEG vs RAD. Horizontal component of 100 lb at 60° to vertical? (use adjacent: 100×cos 60°)",
    [
      "−95.2 lb using RAD (cos 60 rad ≈ −0.952).",
      "50.0 lb. DEG: cos 60°=0.5; 100×0.5=50. Keystrokes: MODE DEG; 60 COS = 0.5; × 100 = 50.",
      "100 lb.",
      "86.6 lb using sin 60 in RAD.",
    ],
    1,
    "UNIT: DEG not RAD for trig. COS 60°=0.5 exactly.",
    "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Practice calculator: DEG not RAD for trig. Pick the closest rounded option. Formula is often in the stem — still match OSHA 5 dB vs NIOSH 3 dB, Q=VA, TWA/8, dose Σ(C/T), RWL=51×multipliers, ppm↔mg/m³ with 24.45, TRIR=... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at a semiconductor tool install. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: 2 y^x ((95−90)/5) as the OSHA doubling factor. Value.",
    [
      "e^1 using ln instead of 2^x.",
      "2.00. Keystrokes: 95 − 90 = 5; ÷ 5 = 1; 2 y^x 1 = 2. Then T=8/2=4 h. Don’t use e^x for exchange doublings.",
      "5.",
      "10 using 10^x.",
    ],
    1,
    "FORM: exchange uses base 2, not e or 10.",
    "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Practice calculator: DEG not RAD for trig. Pick the closest rounded option. Formula is often in the stem — still match OSHA 5 dB vs NIOSH 3 dB, Q=VA, TWA/8, dose Σ(C/T), RWL=51×multipliers, ppm↔mg/m³ with 24.45, TRIR=... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at an offshore fabrication night shift. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: 8 recordables, 1,000,000 hours. TRIR closest.",
    [
      "0.80 using 100,000.",
      "1.60. (8×200,000)/1,000,000=1.6. Keystrokes: 8 × 200000 ÷ 1000000 = 1.6.",
      "8.0.",
      "200.",
    ],
    1,
    "FORM: TRIR with 200,000 base. Closest 1.6.",
    "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Practice calculator: DEG not RAD for trig. Pick the closest rounded option. Formula is often in the stem — still match OSHA 5 dB vs NIOSH 3 dB, Q=VA, TWA/8, dose Σ(C/T), RWL=51×multipliers, ppm↔mg/m³ with 24.45, TRIR=... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at a municipal water-plant retrofit. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: ROI Cost $80,000, Gain $80,000. ROI.",
    [
      "100% using Gain/Cost.",
      "0%. (80−80)/80=0. Keystrokes: 80000 − 80000 = 0; ÷ 80000 × 100 = 0. Payback is infinite/undefined, not 100%.",
      "80%.",
      "1 year labeled 100% ROI.",
    ],
    1,
    "FORM: zero net gain → 0% ROI. Don’t call payback 1.0 yr “100%.”",
    "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Practice calculator: DEG not RAD for trig. Pick the closest rounded option. Formula is often in the stem — still match OSHA 5 dB vs NIOSH 3 dB, Q=VA, TWA/8, dose Σ(C/T), RWL=51×multipliers, ppm↔mg/m³ with 24.45, TRIR=... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at a plastics compounding turnaround. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Sphere tank r=3.00 ft. Volume 4/3 π r³, closest ft³.",
    [
      "113 ft³ using π r² h with h=3 (cylinder).",
      "113 ft³. Sphere V = 4/3 π r³ = 4/3 π × 27 = 36π ≈ 113.1. Keystrokes: 3 y^x 3 = 27; × π × 4 ÷ 3 ≈ 113.1 → closest 113. Do not use cylinder πr²h on a sphere.",
      "27 ft³.",
      "4 ft³.",
    ],
    1,
    "STEM+FORM: last word sphere → 4/3 πr³, closest 113 ft³.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Practice calculator: DEG not RAD for trig. Pick the closest rounded option. Formula is often in the stem — still match OSHA 5 dB vs NIOSH 3 dB, Q=VA, TWA/8, dose Σ(C/T), RWL=51×multipliers, ppm↔mg/m³ with 24.45, TRIR=... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Capture Q needed: V=150 fpm, opening 24 in × 18 in. Closest cfm?",
    [
      "64,800 using in² without /144.",
      "450 cfm. A=(24/12)×(18/12)=2×1.5=3.0 ft²; Q=150×3=450. Keystrokes: 24 ÷ 12 = 2; 18 ÷ 12 = 1.5; × = 3; × 150 = 450.",
      "150 cfm.",
      "4.5 cfm.",
    ],
    1,
    "UNIT: convert the face to ft² then Q=VA.",
    "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Practice calculator: DEG not RAD for trig. Pick the closest rounded option. Formula is often in the stem — still match OSHA 5 dB vs NIOSH 3 dB, Q=VA, TWA/8, dose Σ(C/T), RWL=51×multipliers, ppm↔mg/m³ with 24.45, TRIR=... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Noise: stem asks OSHA T at 90 dBA. Analyst uses NIOSH 85/3 and gets 8 h at 85, then “corrects” to 4 h at 90 NIOSH-style. OSHA T at 90?",
    [
      "4 h mixing NIOSH one-step from 85.",
      "8.00 h. OSHA criterion 90 with 5 dB → T=8 at 90. Keystrokes: 90 − 90 ÷ 5 = 0; 2 y^x 0 = 1; 8 ÷ 1 = 8.",
      "16 h.",
      "15 min.",
    ],
    1,
    "UNIT+STEM: OSHA T at the PEL is 8 h. Don’t import NIOSH steps.",
    "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Practice calculator: DEG not RAD for trig. Pick the closest rounded option. Formula is often in the stem — still match OSHA 5 dB vs NIOSH 3 dB, Q=VA, TWA/8, dose Σ(C/T), RWL=51×multipliers, ppm↔mg/m³ with 24.45, TRIR=... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Closest-answer drill: 40π = 125.6637 ft³. Options 125, 126, 120, 503. Pick?",
    [
      "503 (r=D miss).",
      "126. Keystrokes: 40 × π = 125.6637 → closest 126 (not 125 if the exam says “nearest whole number” and 125.66 is nearer 126). If a stem said 125.7 to one decimal, 125.7. Here nearest whole = 126.",
      "120.",
      "125.000 exactly without π.",
    ],
    1,
    "STEM: pick the closest rounded value. 125.66 → 126 as nearest whole.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Practice calculator: DEG not RAD for trig. Pick the closest rounded option. Formula is often in the stem — still match OSHA 5 dB vs NIOSH 3 dB, Q=VA, TWA/8, dose Σ(C/T), RWL=51×multipliers, ppm↔mg/m³ with 24.45, TRIR=... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];

