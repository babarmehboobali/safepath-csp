import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D6.05";

export const classFields: ClassFields = {
  hook: "A tote farm has a dike that “looks big enough.” Someone used diameter as radius on the tank, mixed ft³ with gallons, and sized LEV with Q=VA using inches as feet. You are the CSP. The question is geometry with units — then hierarchy (don’t spill).",
  hookOilGas: `A tank farm has a dike that âlooks big enough.â Someone used diameter as radius, mixed ftÂ³ with barrels, and sized a capture hood with Q=VA using inches as feet. You are the CSP. The question is geometry with units â then hierarchy (donât spill).`,
  hookConstruction: `A fuel tote farm has a dike that âlooks big enough.â Someone used diameter as radius, mixed ftÂ³ with gallons, and sized a dust hood with Q=VA using inches as feet. You are the CSP. The question is geometry with units â then hierarchy (donât spill).`,
  rule: "Containment and ventilation math: Q = V × A (same unit system); cylinder V = π r² h (r = D/2); dike ≈ L × W × H, sometimes minus tank footprint if the stem says so; gallons ≈ ft³ × 7.48. Capture/dilution is not a dike, and a dike is not substitution. If two answers work, take higher hierarchy / system / design (don’t store it, smaller inventory, closed transfer).",
  modelCaption: "Left: Q=VA duct. Center: cylinder πr²h with r=D/2 circled. Right: dike L×W×H × 7.48 gal. Caption: diameter is not radius; inches are not feet.",
  workedCase: "12-in duct, 2000 fpm: A = π(0.5 ft)² = 0.785 ft², Q ≈ 1571 cfm. Tank 6 ft D × 8 ft H: r=3, V=π×9×8≈226 ft³ ≈ 1692 gal. Dike 30×20×3 ft = 1800 ft³ ≈ 13,464 gal. Using D as r explodes the volume. Hierarchy: smaller tote, closed pipe, then dike; dike is loss reduction, not prevention of inventory.",
  brief: `Containment and ventilation math: Q = V Ã A (same unit system); cylinder V = Ï rÂ² h (r = D/2); dike â L Ã W Ã H, sometimes minus tank footprint if the stem says so; gallons â ftÂ³ Ã 7.48. Capture/dilution is not a dike, and a dike is not substitution. If two If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Containment and ventilation math: Q = V Ã A (same unit system); cylinder V = Ï rÂ² h (r = D/2); dike â L Ã W Ã H, sometimes minus tank footprint if the stem says so; gallons â ftÂ³ Ã 7.48. Capture/dilution is not a dike, and a dike is not substitution. If two answers work, take higher hierarchy / system / design (donât store it, smaller inventory, closed transfer). Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
A tote farm has a dike that âlooks big enough.â Someone used diameter as radius on the tank, mixed ftÂ³ with gallons, and sized LEV with Q=VA using inches as feet. You are the CSP. The question is geometry with units â then hierarchy (donât spill). Oil-and-gas skin: A tank farm has a dike that âlooks big enough.â Someone used diameter as radius, mixed ftÂ³ with barrels, and sized a capture hood with Q=VA using inches as feet. You are the CSP. Construction skin: A fuel tote farm has a dike that âlooks big enough.â Someone used diameter as radius, mixed ftÂ³ with gallons, and sized a dust hood with Q=VA using inches as feet. You are the CSP. Work the case: 12-in duct, 2000 fpm: A = Ï(0.5 ft)Â² = 0.785 ftÂ², Q â 1571 cfm. Tank 6 ft D Ã 8 ft H: r=3, V=ÏÃ9Ã8â226 ftÂ³ â 1692 gal. Dike 30Ã20Ã3 ft = 1800 ftÂ³ â 13,464 gal. Using D as r explodes the volume. Hierarchy: smaller tote, closed pipe, then dike; dike is loss reduction, not prevention of inventory. Classic traps: Using diameter as radius (factor of 4 on area).; Mixing in² with fpm, or ft³ with gallons without 7.48.; Calling a dike a substitute for not storing the liquid.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for containment calc. Verify whether a higher system or design fix is still open. Contrast labels: Q = VA is actually Flow = velocity × area — convert diameter to feet first; Cylinder is actually π r² h with r = D/2; Dike box is actually L × W × H; subtract displaced volume only if the stem says; 7.48 gal/ft³ is actually US gallon conversion — not 3.785 without saying liters; Dike / berm is actually Loss reduction / secondary containment — not elimination of inventory. If the stem shows units are ft3 but answers are gallons, pick multiply by 7.48. If the stem shows freeboard/rain is specified, pick include the allowance. If the stem shows largest tank rule ignored, pick size to largest container per stem rule. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows response kits proposed instead of dike while design open, pick engineer containment. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Q=VA for a 12-in duct at 2000 fpm? Why r=D/2 on a tank sits in CSP-11 Domain 6 Occupational Health and Ergonomics. The exam tests whether you apply the rule when a package already looks complete. Core rule: Containment and ventilation math: Q = V Ã A (same unit system); cylinder V = Ï rÂ² h (r = D/2); dike â L Ã W Ã H, sometimes minus tank footprint if the stem says so; gallons â ftÂ³ Ã 7.48. Capture/dilution is not a dike, and a dike is not substitution. If two answers work, take higher hierarchy / system / design (donât store it, smaller inventory, closed transfer). Field context: A tote farm has a dike that âlooks big enough.â Someone used diameter as radius on the tank, mixed ftÂ³ with gallons, and sized LEV with Q=VA using inches as feet. You are the CSP. The question is geometry with units â then hierarchy (donât spill). The oil-and-gas skin shifts the same decision into production pressure: A tank farm has a dike that âlooks big enough.â Someone used diameter as radius, mixed ftÂ³ with barrels, and sized a capture hood with Q=VA using inches as feet. You are the CSP. The construction skin shifts it into schedule and trade stacking: A fuel tote farm has a dike that âlooks big enough.â Someone used diameter as radius, mixed ftÂ³ with gallons, and sized a dust hood with Q=VA using inches as feet. You are the CSP. Model caption for this class: Left: Q=VA duct. Center: cylinder ÏrÂ²h with r=D/2 circled. Right: dike LÃWÃH Ã 7.48 gal. Caption: diameter is not radius; inches are not feet. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Dike/containment volume must hold the largest tank (plus freeboard/rain allowances when required). Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Convert units carefully: ft3 to gallons (×7.48). (3) Do not ignore displacements from other tanks/equipment in the diked area when the stem requires it. (4) Calculator: multiply dimensions, convert, pick closest value. (5) Design containment before relying on spill response alone. (6) Inspect dikes for integrity and open valves/drain controls. (7) Hierarchy: minimize inventory when open. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: 12-in duct, 2000 fpm: A = Ï(0.5 ft)Â² = 0.785 ftÂ², Q â 1571 cfm. Tank 6 ft D Ã 8 ft H: r=3, V=ÏÃ9Ã8â226 ftÂ³ â 1692 gal. Dike 30Ã20Ã3 ft = 1800 ftÂ³ â 13,464 gal. Using D as r explodes the volume. Hierarchy: smaller tote, closed pipe, then dike; dike is loss reduction, not prevention of inventory. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Using diameter as radius (factor of 4 on area).; Mixing in² with fpm, or ft³ with gallons without 7.48.; Calling a dike a substitute for not storing the liquid.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Q = VA” is really Flow = velocity × area — convert diameter to feet first; “Cylinder” is really π r² h with r = D/2; “Dike box” is really L × W × H; subtract displaced volume only if the stem says; “7.48 gal/ft³” is really US gallon conversion — not 3.785 without saying liters; “Dike / berm” is really Loss reduction / secondary containment — not elimination of inventory. Stem-if-then map: if units are ft3 but answers are gallons → multiply by 7.48; if freeboard/rain is specified → include the allowance; if largest tank rule ignored → size to largest container per stem rule; if two answers work → higher hierarchy / system / design; if response kits proposed instead of dike while design open → engineer containment. Scoring favors evidence, owners, verification, and hierarchy-smart controls on containment calc. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Q=VA for a 12-in duct at 2000 fpm? Why r=D/2 on a tank?",
  cardBack: "A=π(0.5)²≈0.785 ft²; Q≈1571 cfm. Cylinder πr²h; gallons≈ft³×7.48. Dike is secondary, not elimination. Study only — not allowed in the test center.",
  teachBackKey: "Pass if the sentence writes Q=VA with consistent units, uses r=D/2 for cylinders, converts ft³×7.48 to gallons, and says a dike is not substitution.",
  trapsJson: traps(
    "Using diameter as radius (factor of 4 on area).",
    "Mixing in² with fpm, or ft³ with gallons without 7.48.",
    "Calling a dike a substitute for not storing the liquid.",
  ),
  contrastJson: contrast([
    { looksLike: "Q = VA", actually: "Flow = velocity × area — convert diameter to feet first" },
    { looksLike: "Cylinder", actually: "π r² h with r = D/2" },
    { looksLike: "Dike box", actually: "L × W × H; subtract displaced volume only if the stem says" },
    { looksLike: "7.48 gal/ft³", actually: "US gallon conversion — not 3.785 without saying liters" },
    { looksLike: "Dike / berm", actually: "Loss reduction / secondary containment — not elimination of inventory" },
  ]),
  mustScoreJson: mustScore(
    "Dike/containment volume must hold the largest tank (plus freeboard/rain allowances when required).",
    "Convert units carefully: ft3 to gallons (\u00d77.48).",
    "Do not ignore displacements from other tanks/equipment in the diked area when the stem requires it.",
    "Calculator: multiply dimensions, convert, pick closest value.",
    "Design containment before relying on spill response alone.",
    "Inspect dikes for integrity and open valves/drain controls.",
    "Hierarchy: minimize inventory when open.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "units are ft3 but answers are gallons", pick: "multiply by 7.48" },
    { ifStem: "freeboard/rain is specified", pick: "include the allowance" },
    { ifStem: "largest tank rule ignored", pick: "size to largest container per stem rule" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "response kits proposed instead of dike while design open", pick: "engineer containment" },
  ),

  formulaSlug: "q-va",
};

export const items: ClassItem[] = [
  exam(
    T,
    "You are the CSP reviewing a live decision at a municipal water-plant retrofit. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Round duct 12 in diameter, V = 2000 fpm. Q.",
    [
      "6,283 cfm using r = 1 ft (diameter as radius).",
      "1,571 cfm. A = π(0.5)² ≈ 0.785 ft²; Q = 2000×0.785 ≈ 1571. Keystrokes: 12 in → 1 ft; 1 ÷ 2 = 0.5; x² = 0.25; × π × 2000 ≈ 1570.8 → closest 1,571.",
      "24,000 cfm using A = 12 ft².",
      "2000 cfm ignoring area.",
    ],
    1,
    "FORM/UNIT: Q=VA; r=D/2 in feet. Pick closest rounded.",
    "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Containment and ventilation math: Q = V × A (same unit system); cylinder V = π r² h (r = D/2); dike ≈ L × W × H, sometimes minus tank footprint if the stem says so; gallons ≈ ft³ × 7.48. Capture/dilution is not a dike... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at a plastics compounding turnaround. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Same duct but analyst leaves diameter as 12 ft. Issue.",
    [
      "None — inches are feet on CSP.",
      "UNIT: 12 in = 1 ft. Using 12 ft diameter makes r=6, A≈113 ft², Q≈226,000 cfm — nonsense.",
      "None if 7.48 is applied to cfm.",
      "None if DEG mode is off.",
    ],
    1,
    "UNIT: in vs ft on diameter.",
    "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Containment and ventilation math: Q = V × A (same unit system); cylinder V = π r² h (r = D/2); dike ≈ L × W × H, sometimes minus tank footprint if the stem says so; gallons ≈ ft³ × 7.48. Capture/dilution is not a dike... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Vertical tank D = 6 ft, h = 8 ft. Volume in ft³.",
    [
      "904 ft³ using r = 6.",
      "226 ft³. r=3; π×9×8 = 72π ≈ 226.2. Keystrokes: 6 ÷ 2 = 3; x² = 9; × π × 8 ≈ 226.2 → closest 226.",
      "48 ft³ using D×h.",
      "151 ft³ using π r h.",
    ],
    1,
    "FORM: V=πr²h, r=D/2.",
    "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Containment and ventilation math: Q = V × A (same unit system); cylinder V = π r² h (r = D/2); dike ≈ L × W × H, sometimes minus tank footprint if the stem says so; gallons ≈ ft³ × 7.48. Capture/dilution is not a dike... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at a refinery coker outage. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: 226 ft³ to US gallons (7.48 gal/ft³).",
    [
      "226 gal (forgot 7.48).",
      "1,690 gal. 226 × 7.48 ≈ 1690.5. Keystrokes: 226 × 7.48 ≈ 1,690. Closest 1,690.",
      "30 gal using 7.48 as divisor wrong way and truncating.",
      "1,690 L calling liters gallons.",
    ],
    1,
    "UNIT: ft³ × 7.48 = gallons.",
    "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Containment and ventilation math: Q = V × A (same unit system); cylinder V = π r² h (r = D/2); dike ≈ L × W × H, sometimes minus tank footprint if the stem says so; gallons ≈ ft³ × 7.48. Capture/dilution is not a dike... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at a bridge deck pour laydown yard. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Dike 30 ft × 20 ft × 3 ft. Gallons (no subtraction).",
    [
      "1,800 gal treating ft³ as gallons.",
      "13,464 gal. 30×20×3=1800 ft³; ×7.48=13,464. Keystrokes: 30 × 20 × 3 × 7.48 = 13,464.",
      "7.48 gal.",
      "180 gal using 0.1 ft height folklore.",
    ],
    1,
    "FORM: LWH then 7.48.",
    "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Containment and ventilation math: Q = V × A (same unit system); cylinder V = π r² h (r = D/2); dike ≈ L × W × H, sometimes minus tank footprint if the stem says so; gallons ≈ ft³ × 7.48. Capture/dilution is not a dike... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Last sentence: subtract a 10 ft × 10 ft tank footprint from the 30×20×3 dike. Net gallons?",
    [
      "13,464 still — footprints never count.",
      "11,220 gal. Footprint volume 10×10×3=300 ft³; net 1500 ft³ ×7.48=11,220. Keystrokes: 30×20×3=1800; 10×10×3=300; − =1500; ×7.48=11,220.",
      "300 gal.",
      "7.48 gal.",
    ],
    1,
    "STEM: last sentence required subtracting displaced volume.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Containment and ventilation math: Q = V × A (same unit system); cylinder V = π r² h (r = D/2); dike ≈ L × W × H, sometimes minus tank footprint if the stem says so; gallons ≈ ft³ × 7.48. Capture/dilution is not a dike... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at a warehouse second-shift startup. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Capture hood: V needed 100 fpm, A = 2.0 ft². Q.",
    [
      "50 cfm (they divided).",
      "200 cfm. Q=VA=100×2. Keystrokes: 100 × 2 = 200.",
      "100 cfm ignoring area.",
      "2 cfm using A as Q.",
    ],
    1,
    "FORM: Q=VA.",
    "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Containment and ventilation math: Q = V × A (same unit system); cylinder V = π r² h (r = D/2); dike ≈ L × W × H, sometimes minus tank footprint if the stem says so; gallons ≈ ft³ × 7.48. Capture/dilution is not a dike... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Dike sized perfectly while a non-liquid process is still available. Best CSP comment?",
    [
      "Keep the inventory — dikes are elimination.",
      "Prefer not storing / smaller inventory / closed transfer (prevention). A dike is secondary containment (loss reduction).",
      "Buy a larger umbrella instead of either.",
      "Use 51 lb LC as the dike height.",
    ],
    1,
    "HIER/FIN: dike ≠ substitution.",
    "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Containment and ventilation math: Q = V × A (same unit system); cylinder V = π r² h (r = D/2); dike ≈ L × W × H, sometimes minus tank footprint if the stem says so; gallons ≈ ft³ × 7.48. Capture/dilution is not a dike... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Area computed in in² (π×6²=113) × 2000 fpm and reported as cfm. Error?",
    [
      "None — in² × fpm is cfm.",
      "UNIT: 113 in² = 113/144 ft² ≈ 0.785 ft². Without /144 the flow is 144× high.",
      "FORM — they should have used 24.45.",
      "TIME — 144 minutes.",
    ],
    1,
    "UNIT: in² vs ft² (divide by 144).",
    "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Containment and ventilation math: Q = V × A (same unit system); cylinder V = π r² h (r = D/2); dike ≈ L × W × H, sometimes minus tank footprint if the stem says so; gallons ≈ ft³ × 7.48. Capture/dilution is not a dike... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Wrong tool: FTA of the dike liner brand instead of volume. Comment?",
    [
      "Accept — FTA is 7.48.",
      "TOOL: compute required volume from tank geometry and the stem’s rule (110%, footprint, etc.). A liner fault tree is not the gallon math.",
      "Accept if RPN < 100.",
      "Accept if Q=VA is painted on the liner.",
    ],
    1,
    "TOOL: FTA ≠ containment volume.",
    "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Containment and ventilation math: Q = V × A (same unit system); cylinder V = π r² h (r = D/2); dike ≈ L × W × H, sometimes minus tank footprint if the stem says so; gallons ≈ ft³ × 7.48. Capture/dilution is not a dike... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Two funded moves: extra umbrella AND extra dike gravel; closed-pipe transfer still open. Pair and miss?",
    [
      "Avoid + reduce; gravel is closed pipe.",
      "Transfer + partial reduction; missing prevention (closed transfer / less inventory).",
      "Two Q=VA.",
      "7.48 + π complete Control.",
    ],
    1,
    "FIN: insurance plus gravel vs a closed system.",
    "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Containment and ventilation math: Q = V × A (same unit system); cylinder V = π r² h (r = D/2); dike ≈ L × W × H, sometimes minus tank footprint if the stem says so; gallons ≈ ft³ × 7.48. Capture/dilution is not a dike... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Spill hospitalization; team files only a dike-volume spreadsheet. OSHA clock?",
    [
      "Spreadsheet is the 8-hour clock.",
      "Hospitalization: 24 hours to OSHA. Gallon math is parallel.",
      "7.48 days.",
      "No clock if Q=VA was posted.",
    ],
    1,
    "TIME: 24-hour hospitalization.",
    "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Containment and ventilation math: Q = V × A (same unit system); cylinder V = π r² h (r = D/2); dike ≈ L × W × H, sometimes minus tank footprint if the stem says so; gallons ≈ ft³ × 7.48. Capture/dilution is not a dike... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];

