import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D6.01";

export const classFields: ClassFields = {
  hook: "A welding bay is “ventilated” by a wall fan. Industrial hygiene wants 100 fpm at a 12-inch round hood 18 inches off the plume, and operations says “Q is 100 times 12.” You are the CSP. The question is Q = V × A with the diameter in feet, and whether a fan in the wall is capture.",
  hookOilGas: `A hot-work bay on a skid is âventilatedâ by a wall fan. IH wants 100 fpm at a 12-inch round hood 18 inches off the plume, and operations says âQ is 100 times 12.â You are the CSP. The question is Q = V Ã A with the diameter in feet, and whether a fan in the wall is capture.`,
  hookConstruction: `A site welding tent is âventilatedâ by a barrel fan. IH wants 100 fpm at a 12-inch round hood 18 inches off the plume, and the superintendent says âQ is 100 times 12.â You are the CSP. The question is Q = V Ã A with the diameter in feet, and whether a barrel fan is capture.`,
  rule: "Q = V × A. A is the face or duct area in consistent units (ft² with fpm → cfm). For a round duct, r = D/2 in feet; A = πr². Inches are not feet; diameter is not radius; in² needs /144. Capture at the source beats dilution; enclosing beats capturing; a wall fan is not a hood. Make-up air is part of the system. If substitution of the process is still open, ventilation is not the first answer. If two answers work, take higher hierarchy / system / design.",
  modelCaption:
    "Left: enclosing hood around the process (best remaining engineering). Center: capturing hood with Q = V × A, r = D/2 in feet. Right: dilution / wall fan tagged LAST among ventilation types. Caption: 12 in @ 2000 fpm → Q ≈ 1,571 cfm — D as r → 6,283 (×4 miss).",
  workedCase:
    "12-inch round duct, V = 2000 fpm. D = 12/12 = 1 ft; r = 0.5 ft; A = π(0.5)² ≈ 0.785 ft²; Q = 2000 × 0.785 ≈ 1,571 cfm. Keystrokes: 1 ÷ 2 = ; x² ; × π × 2000 =. Wrong: 2000 × 12 = 24,000 (inches as feet); 2000 × π(1)² = 6,283 (diameter as radius). A wall fan moving 1,571 cfm past the welder is dilution, not capture. If the process can be welded in a booth or substituted (mechanical fastener), that beats a bigger fan.",
  trapsJson: traps(
    "Q = V × D (using diameter as area) or treating inches as feet.",
    "Calling a wall/barrel fan “local exhaust” because air is moving.",
    "A beautiful LEV design while a non-emitting process was still open (HIER).",
  ),
  contrastJson: contrast([
    { looksLike: "Enclosing hood / booth", actually: "Best remaining ventilation — contains the source" },
    { looksLike: "Capturing hood with Q = VA", actually: "Engineering — only if V and A are in one unit system" },
    { looksLike: "Dilution / wall fan", actually: "Last among ventilation types; not capture" },
    { looksLike: "12 in duct × 2000 fpm = 24,000", actually: "UNIT miss — A is ft², not inches" },
    { looksLike: "Respirator instead of a hood", actually: "PPE — last if a hood is still open" },
  ]),
  mustScoreJson: mustScore(
    "Ventilation: know dilution vs local exhaust and make-up air needs.",
    "Q=VA and capture principles appear with UNIT discipline.",
    "LEV needs hood design, duct velocity, and maintenance of fans/filters.",
    "Do not confuse comfort fans with exposure control.",
    "Recirculation rules depend on contaminant and listing.",
    "Smoke tests and measurements verify performance.",
    "Hierarchy: eliminate/substitute before endless cfm.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "comfort fan proposed as LEV", pick: "design real local exhaust" },
    { ifStem: "filters overloaded and capture fails", pick: "maintain and restore performance" },
    { ifStem: "substitution of solvent open", pick: "prefer substitution before more airflow alone" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "Q=VA numbers given", pick: "compute carefully with unit consistency" },
  ),

  brief: `Q = V Ã A. A is the face or duct area in consistent units (ftÂ² with fpm â cfm). For a round duct, r = D/2 in feet; A = ÏrÂ². Inches are not feet; diameter is not radius; inÂ² needs /144. Capture at the source beats dilution; enclosing beats capturing; a wall fan If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Q = V Ã A. A is the face or duct area in consistent units (ftÂ² with fpm â cfm). For a round duct, r = D/2 in feet; A = ÏrÂ². Inches are not feet; diameter is not radius; inÂ² needs /144. Capture at the source beats dilution; enclosing beats capturing; a wall fan is not a hood. Make-up air is part of the system. If substitution of the process is still open, ventilation is not the first answer. If two answers work, take higher hierarchy / system / design. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. Field move
A welding bay is âventilatedâ by a wall fan. Industrial hygiene wants 100 fpm at a 12-inch round hood 18 inches off the plume, and operations says âQ is 100 times 12.â You are the CSP. The question is Q = V Ã A with the diameter in feet, and whether a fan in the wall is capture. Oil-and-gas skin: A hot-work bay on a skid is âventilatedâ by a wall fan. IH wants 100 fpm at a 12-inch round hood 18 inches off the plume, and operations says âQ is 100 times 12.â You are the CSP. Construction skin: A site welding tent is âventilatedâ by a barrel fan. IH wants 100 fpm at a 12-inch round hood 18 inches off the plume, and the superintendent says âQ is 100 times 12.â You are the CSP. The question is Q = V Ã A with the diameter in feet, and whether a barrel fan is capture. Work the case: 12-inch round duct, V = 2000 fpm. D = 12/12 = 1 ft; r = 0.5 ft; A = Ï(0.5)Â² â 0.785 ftÂ²; Q = 2000 Ã 0.785 â 1,571 cfm. Keystrokes: 1 Ã· 2 = ; xÂ² ; Ã Ï Ã 2000 =. Wrong: 2000 Ã 12 = 24,000 (inches as feet); 2000 Ã Ï(1)Â² = 6,283 (diameter as radius). A wall fan moving 1,571 cfm past the welder is dilution, not capture. If the process can be welded in a booth or substituted (mechanical fastener), that beats a bigger fan. Classic traps: Q = V × D (using diameter as area) or treating inches as feet.; Calling a wall/barrel fan “local exhaust” because air is moving.; A beautiful LEV design while a non-emitting process was still open (HIER).. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for ventilation. Verify whether a higher system or design fix is still open. Contrast labels: Enclosing hood / booth is actually Best remaining ventilation — contains the source; Capturing hood with Q = VA is actually Engineering — only if V and A are in one unit system; Dilution / wall fan is actually Last among ventilation types; not capture; 12 in duct × 2000 fpm = 24,000 is actually UNIT miss — A is ft², not inches; Respirator instead of a hood is actually PPE — last if a hood is still open. If the stem shows comfort fan proposed as LEV, pick design real local exhaust. If the stem shows filters overloaded and capture fails, pick maintain and restore performance. If the stem shows substitution of solvent open, pick prefer substitution before more airflow alone. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows Q=VA numbers given, pick compute carefully with unit consistency. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Q = VA — 12-in duct at 2000 fpm? Is a wall fan capture sits in CSP-11 Domain 6 Occupational Health and Ergonomics. The exam tests whether you apply the rule when a package already looks complete. Core rule: Q = V Ã A. A is the face or duct area in consistent units (ftÂ² with fpm â cfm). For a round duct, r = D/2 in feet; A = ÏrÂ². Inches are not feet; diameter is not radius; inÂ² needs /144. Capture at the source beats dilution; enclosing beats capturing; a wall fan is not a hood. Make-up air is part of the system. If substitution of the process is still open, ventilation is not the first answer. If two answers work, take higher hierarchy / system / design. Field context: A welding bay is âventilatedâ by a wall fan. Industrial hygiene wants 100 fpm at a 12-inch round hood 18 inches off the plume, and operations says âQ is 100 times 12.â You are the CSP. The question is Q = V Ã A with the diameter in feet, and whether a fan in the wall is capture. The oil-and-gas skin shifts the same decision into production pressure: A hot-work bay on a skid is âventilatedâ by a wall fan. IH wants 100 fpm at a 12-inch round hood 18 inches off the plume, and operations says âQ is 100 times 12.â You are the CSP. The construction skin shifts it into schedule and trade stacking: A site welding tent is âventilatedâ by a barrel fan. IH wants 100 fpm at a 12-inch round hood 18 inches off the plume, and the superintendent says âQ is 100 times 12.â You are the CSP. The question is Q = V Ã A with the diameter in feet, and whether a barrel fan is capture. Model caption for this class: Left: enclosing hood around the process (best remaining engineering). Center: capturing hood with Q = V Ã A, r = D/2 in feet. Right: dilution / wall fan tagged LAST among ventilation types. Caption: 12 in @ 2000 fpm â Q â 1,571 cfm â D as r â 6,283 (Ã4 miss). Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Ventilation: know dilution vs local exhaust and make-up air needs. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Q=VA and capture principles appear with UNIT discipline. (3) LEV needs hood design, duct velocity, and maintenance of fans/filters. (4) Do not confuse comfort fans with exposure control. (5) Recirculation rules depend on contaminant and listing. (6) Smoke tests and measurements verify performance. (7) Hierarchy: eliminate/substitute before endless cfm. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: 12-inch round duct, V = 2000 fpm. D = 12/12 = 1 ft; r = 0.5 ft; A = Ï(0.5)Â² â 0.785 ftÂ²; Q = 2000 Ã 0.785 â 1,571 cfm. Keystrokes: 1 Ã· 2 = ; xÂ² ; Ã Ï Ã 2000 =. Wrong: 2000 Ã 12 = 24,000 (inches as feet); 2000 Ã Ï(1)Â² = 6,283 (diameter as radius). A wall fan moving 1,571 cfm past the welder is dilution, not capture. If the process can be welded in a booth or substituted (mechanical fastener), that beats a bigger fan. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Q = V × D (using diameter as area) or treating inches as feet.; Calling a wall/barrel fan “local exhaust” because air is moving.; A beautiful LEV design while a non-emitting process was still open (HIER).. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Enclosing hood / booth” is really Best remaining ventilation — contains the source; “Capturing hood with Q = VA” is really Engineering — only if V and A are in one unit system; “Dilution / wall fan” is really Last among ventilation types; not capture; “12 in duct × 2000 fpm = 24,000” is really UNIT miss — A is ft², not inches; “Respirator instead of a hood” is really PPE — last if a hood is still open. Stem-if-then map: if comfort fan proposed as LEV → design real local exhaust; if filters overloaded and capture fails → maintain and restore performance; if substitution of solvent open → prefer substitution before more airflow alone; if two answers work → higher hierarchy / system / design; if Q=VA numbers given → compute carefully with unit consistency. Scoring favors evidence, owners, verification, and hierarchy-smart controls on ventilation. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Q = VA — 12-in duct at 2000 fpm? Is a wall fan capture?",
  cardBack:
    "D = 1 ft, r = 0.5, A ≈ 0.785, Q ≈ 1,571 cfm. Inches are not feet; D is not r. Enclose/capture beats dilution. Attractive wrong answer: 24,000 or 6,283, or a respirator instead of a hood. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence states Q = V × A with r = D/2 in feet, gives the 12-in / 2000 fpm ≈ 1,571 cfm example or the unit pitfall, and says enclosing/capture beats a wall fan (and substitution beats LEV if still open).",
  formulaSlug: "q-va",
};

export const items: ClassItem[] = [
  exam(T, "You are the CSP reviewing a live decision at a semiconductor tool install. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: 12-in round duct, V = 2000 fpm. Closest Q (cfm).", [
    "6,283 using diameter as radius (A = π(1)²).",
    "1,571. D = 1 ft, r = 0.5, A = π(0.5)² ≈ 0.785; Q = 2000 × 0.785 ≈ 1571. Keystrokes: 1 ÷ 2 = ; x² ; × π × 2000 = 1570.8 → closest 1,571.",
    "24,000 using A = 12 in.",
    "2,000 ignoring area.",
  ], 1, "UNIT: D in feet, r = D/2. Diameter-as-radius is ×4.", "UNIT", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Q = V × A. A is the face or duct area in consistent units (ft² with fpm → cfm). For a round duct, r = D/2 in feet; A = πr². Inches are not feet; diameter is not radius; in² needs /144. Capture at the source beats dilu... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "6-in round hood face, V = 100 fpm. Closest Q at the face (cfm)?", [
    "1,884 using D = 6 ft.",
    "20. D = 0.5 ft, r = 0.25, A ≈ 0.196 ft²; Q ≈ 19.6 → closest 20. Keystrokes: 6 ÷ 12 = 0.5; ÷ 2 = 0.25; x² × π × 100 ≈ 19.6.",
    "100 because V is already 100.",
    "314 using r = 1 ft.",
  ], 1, "Inches to feet before squaring. Attractive wrong skips /12.", "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Q = V × A. A is the face or duct area in consistent units (ft² with fpm → cfm). For a round duct, r = D/2 in feet; A = πr². Inches are not feet; diameter is not radius; in² needs /144. Capture at the source beats dilu... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Rectangular hood 8 in × 18 in, V = 150 fpm. Closest Q (cfm)?", [
    "21,600 using A = 8 × 18 in² as ft².",
    "150. A = (8/12)×(18/12) = 0.667 × 1.5 = 1.00 ft²; Q = 150 × 1.00 = 150. Keystrokes: 8 ÷ 12 × 18 ÷ 12 × 150 = 150.",
    "150 × π (round-duct habit).",
    "1.5 cfm forgetting V.",
  ], 1, "in² / 144, or convert each side to feet first.", "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Q = V × A. A is the face or duct area in consistent units (ft² with fpm → cfm). For a round duct, r = D/2 in feet; A = πr². Inches are not feet; diameter is not radius; in² needs /144. Capture at the source beats dilu... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A welding bay uses a wall fan. A welding booth with LEV is still purchasable. Best control?", [
    "Keep the wall fan — moving air is ventilation.",
    "Specify an enclosing booth / capturing hood at the plume. A wall fan is dilution, not local exhaust.",
    "Keep the fan and add a paper mask.",
    "Keep the fan and buy extra insurance.",
  ], 1, "Enclosing/capture beats dilution. PPE/FIN are last.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Q = V × A. A is the face or duct area in consistent units (ft² with fpm → cfm). For a round duct, r = D/2 in feet; A = πr². Inches are not feet; diameter is not radius; in² needs /144. Capture at the source beats dilu... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Last sentence: “An aqueous cleaner is still available; the solvent washer will otherwise need 2,000 cfm LEV.” Best CSP call?", [
    "Install the 2,000 cfm LEV — engineering is always preferred.",
    "Specify the aqueous process (substitution). LEV around a solvent you did not have to buy is the lower remaining control.",
    "Respirators instead of either.",
    "Delay both 24 hours (TIME).",
  ], 1, "STEM left substitution open. Beautiful Q does not beat PtD.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Q = V × A. A is the face or duct area in consistent units (ft² with fpm → cfm). For a round duct, r = D/2 in feet; A = πr². Inches are not feet; diameter is not radius; in² needs /144. Capture at the source beats dilu... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Technician computes Q using A = πr² with r = 12 in for a 12-in duct. Flag?", [
    "Correct — r equals D for ducts.",
    "UNIT: r = D/2. Using r = D quadruples A and Q (the 6,283 vs 1,571 miss at 2000 fpm).",
    "Correct if the calculator is in RAD.",
    "Correct if Q is in gpm.",
  ], 1, "Diameter as radius is the classic Q miss.", "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Q = V × A. A is the face or duct area in consistent units (ft² with fpm → cfm). For a round duct, r = D/2 in feet; A = πr². Inches are not feet; diameter is not radius; in² needs /144. Capture at the source beats dilu... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Exhaust is 3,000 cfm. Building is tight; hood capture collapsed. Best missing piece?", [
    "A laminated “keep doors closed” card.",
    "Designed make-up air of about the same order so the hood still sees its Q. Starved exhaust is not a hood.",
    "A bigger respirator cartridge.",
    "Report the collapse within 8 hours (TIME).",
  ], 1, "Make-up air is part of the ventilation system.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Q = V × A. A is the face or duct area in consistent units (ft² with fpm → cfm). For a round duct, r = D/2 in feet; A = πr². Inches are not feet; diameter is not radius; in² needs /144. Capture at the source beats dilu... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Canopy hood over a welder’s head pulls the plume through the breathing zone. Best redesign?", [
    "Increase canopy Q and call it capture.",
    "Move to a welding booth or a capturing hood at the arc so the plume does not cross the face. Canopies are receiving hoods for hot rising air, not welding.",
    "Add a paper mask under the canopy.",
    "Keep the canopy; insurance covers fume (FIN).",
  ], 1, "Wrong hood type. More Q on a bad geometry still crosses the face.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Q = V × A. A is the face or duct area in consistent units (ft² with fpm → cfm). For a round duct, r = D/2 in feet; A = πr². Inches are not feet; diameter is not radius; in² needs /144. Capture at the source beats dilu... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Dust-transport duct uses V = 200 fpm because “that was the capture velocity on the hood drawing.” What happened?", [
    "Fine — one V for the whole system.",
    "FORM/STEM: transport velocity in the duct is not hood-face capture velocity. Dust needs a higher duct V so it does not settle; size Q and A for that duty.",
    "Fine if DEG is on.",
    "Fine if Kst < 200.",
  ], 1, "Two different velocities. Attractive wrong reuses the hood number.", "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Q = V × A. A is the face or duct area in consistent units (ft² with fpm → cfm). For a round duct, r = D/2 in feet; A = πr². Inches are not feet; diameter is not radius; in² needs /144. Capture at the source beats dilu... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a grain elevator maintenance day. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Which analysis belongs before the duct is hung.", [
    "FTA after the first overexposure, then a fan.",
    "Process/hood design review (capture vs enclose, make-up air, Q=VA with unit check) written into the drawing.",
    "FMEA on fan color.",
    "JHA only on how to fill out the respirator card.",
  ], 1, "The tool must still change the hood. Respirator JHA is the wrong first tool.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Q = V × A. A is the face or duct area in consistent units (ft² with fpm → cfm). For a round duct, r = D/2 in feet; A = πr². Inches are not feet; diameter is not radius; in² needs /144. Capture at the source beats dilu... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Q calculated as 1,571 cfm. Options are 1,500, 1,570, 1,600, 6,280. Exam instruction: closest rounded value. Pick?", [
    "6,280 — always pick the diameter-as-radius number.",
    "1,570 (or 1,571 if listed). Compute full precision then pick the nearest option; do not “round” to the UNIT trap.",
    "1,500 because the exam likes round hundreds.",
    "1,600 because 2000 × 0.8.",
  ], 1, "Closest rounded after a correct Q=VA. 6,280 is the ×4 miss.", "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Q = V × A. A is the face or duct area in consistent units (ft² with fpm → cfm). For a round duct, r = D/2 in feet; A = πr². Inches are not feet; diameter is not radius; in² needs /144. Capture at the source beats dilu... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a food packaging SKU change. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Least consistent with ventilation control.", [
    "Enclosing booth sized with Q = VA in feet.",
    "Capturing hood at the plume plus make-up air.",
    "A laminated “stand upwind” card after three overexposures, with the wall fan unchanged and substitution still open.",
    "Substitution to a non-emitting process.",
  ], 2, "A poster is not a hood.", "HIER", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Q = V × A. A is the face or duct area in consistent units (ft² with fpm → cfm). For a round duct, r = D/2 in feet; A = πr². Inches are not feet; diameter is not radius; in² needs /144. Capture at the source beats dilu... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
