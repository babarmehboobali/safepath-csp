import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D1.06";

export const classFields: ClassFields = {
  hook: "PIT tip-over is a line-of-action leaving the stability triangle — moment arithmetic, not folklore speed alone.",
  hookOilGas: `Warehouse PIT with offset load on a ramp: compute moments from stem forces/distances.`,
  hookConstruction: `Rough-terrain fork use: stability triangle + moment arms from stem.`,
  rule: "Moment = Force × perpendicular distance. Stability when resultant load line stays inside the stability triangle (or stem-named base). Speed, ramp grade, and off-center loads move the line. No universal tip-speed equation — use stem data. Nameplate ≠ net capacity for attachments/people.",
  modelCaption: "Forces×arms → net moment; keep resultant inside triangle.",
  workedCase: "Vertical load 4,000 lb through center; lateral disturbance 500 lb at 4 ft height equivalent arm per stem → overturning moment 500×4=2,000 ft·lb. Resisting moment from geometry stem 3,000 ft·lb → still stable with margin 1,000. If resisting falls to 1,500, tips.",
  trapsJson: traps(
    "Speed-only tip theory",
    "Ignoring ramp/offset",
    "Treating nameplate as net with people in basket on forks",
  ),
  contrastJson: contrast([
    { looksLike: "Stability triangle", actually: "Geometric base" },
    { looksLike: "Moment", actually: "Force×arm" },
    { looksLike: "Nameplate capacity", actually: "Not net for all configs" },
    { looksLike: "Ramp effect", actually: "Shifts line of action" },
    { looksLike: "Offset load", actually: "Adds overturning" },
    { looksLike: "Aerial lift", actually: "Different machine/rules" },
  ]),
  mustScoreJson: mustScore(
    "PIT stability: load moment vs capacity; load center and height matter.",
    "Attachments change capacity \u2014 use the right chart.",
    "Lateral tip and longitudinal tip modes.",
    "Speed, turns, and ramps reduce stability margin.",
    "Pedestrian separation still hierarchy-critical.",
    "Do not exceed chart \u2014 hope is not engineering.",
    "Calculator: moments carefully; closest value.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "load center extended", pick: "derate/use correct chart \u2014 may not lift" },
    { ifStem: "attachment installed", pick: "use attachment capacity chart" },
    { ifStem: "pedestrians in aisle", pick: "engineered separation" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "numbers for moment given", pick: "compute and compare to capacity" },
  ),

  brief: `Moment = Force Ã perpendicular distance. Stability when resultant load line stays inside the stability triangle (or stem-named base). Speed, ramp grade, and off-center loads move the line. No universal tip-speed equation â use stem data. Nameplate â net capacity for attachments/people. If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Moment = Force Ã perpendicular distance. Stability when resultant load line stays inside the stability triangle (or stem-named base). Speed, ramp grade, and off-center loads move the line. No universal tip-speed equation â use stem data. Nameplate â  net capacity for attachments/people. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
PIT tip-over is a line-of-action leaving the stability triangle â moment arithmetic, not folklore speed alone. Oil-and-gas skin: Warehouse PIT with offset load on a ramp: compute moments from stem forces/distances. Construction skin: Rough-terrain fork use: stability triangle + moment arms from stem. Work the case: Vertical load 4,000 lb through center; lateral disturbance 500 lb at 4 ft height equivalent arm per stem â overturning moment 500Ã4=2,000 ftÂ·lb. Resisting moment from geometry stem 3,000 ftÂ·lb â still stable with margin 1,000. If resisting falls to 1,500, tips. Classic traps: Speed-only tip theory; Ignoring ramp/offset; Treating nameplate as net with people in basket on forks. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for pit stability moment. Verify whether a higher system or design fix is still open. Contrast labels: Stability triangle is actually Geometric base; Moment is actually Force×arm; Nameplate capacity is actually Not net for all configs; Ramp effect is actually Shifts line of action; Offset load is actually Adds overturning. If the stem shows load center extended, pick derate/use correct chart \u2014 may not lift. If the stem shows attachment installed, pick use attachment capacity chart. If the stem shows pedestrians in aisle, pick engineered separation. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows numbers for moment given, pick compute and compare to capacity. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `PIT stability triangle / moment sits in CSP-11 Domain 1 Applied Safety Technology. The exam tests whether you apply the rule when a package already looks complete. Core rule: Moment = Force Ã perpendicular distance. Stability when resultant load line stays inside the stability triangle (or stem-named base). Speed, ramp grade, and off-center loads move the line. No universal tip-speed equation â use stem data. Nameplate â  net capacity for attachments/people. Field context: PIT tip-over is a line-of-action leaving the stability triangle â moment arithmetic, not folklore speed alone. The oil-and-gas skin shifts the same decision into production pressure: Warehouse PIT with offset load on a ramp: compute moments from stem forces/distances. The construction skin shifts it into schedule and trade stacking: Rough-terrain fork use: stability triangle + moment arms from stem. Model caption for this class: ForcesÃarms â net moment; keep resultant inside triangle. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) PIT stability: load moment vs capacity; load center and height matter. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Attachments change capacity — use the right chart. (3) Lateral tip and longitudinal tip modes. (4) Speed, turns, and ramps reduce stability margin. (5) Pedestrian separation still hierarchy-critical. (6) Do not exceed chart — hope is not engineering. (7) Calculator: moments carefully; closest value. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Vertical load 4,000 lb through center; lateral disturbance 500 lb at 4 ft height equivalent arm per stem â overturning moment 500Ã4=2,000 ftÂ·lb. Resisting moment from geometry stem 3,000 ftÂ·lb â still stable with margin 1,000. If resisting falls to 1,500, tips. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Speed-only tip theory; Ignoring ramp/offset; Treating nameplate as net with people in basket on forks. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Stability triangle” is really Geometric base; “Moment” is really Force×arm; “Nameplate capacity” is really Not net for all configs; “Ramp effect” is really Shifts line of action; “Offset load” is really Adds overturning; “Aerial lift” is really Different machine/rules. Stem-if-then map: if load center extended → derate/use correct chart \u2014 may not lift; if attachment installed → use attachment capacity chart; if pedestrians in aisle → engineered separation; if two answers work → higher hierarchy / system / design; if numbers for moment given → compute and compare to capacity. Scoring favors evidence, owners, verification, and hierarchy-smart controls on pit stability moment. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "PIT stability triangle / moment?",
  cardBack: "M=F×d; 500×4=2000 vs resisting stem moment. Study only.",
  teachBackKey: "Computes moment and explains triangle line-of-action.",
  formulaSlug: "pit-moment",
};

export const items: ClassItem[] = [
  exam(
    "CSP-11 D1.06",
    "You are the CSP reviewing a live decision at a grain elevator maintenance day. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: 500 lb × 4 ft arm. Moment.",
    [
      "2,000 ft·lb",
      "125",
      "504",
      "0",
    ],
    0,
    "Core Rule: F×d. Calculation Steps: 2000. Standards Cited: Moment. Why Each Distractor Fails: 2,000 ft·lb: Correct: 2000 | 125: Fails: Divided | 504: Fails: Added | 0: Fails: Zero",
    "FORM",
    "Exam",
    [
      "Correct: 2000",
      "Fails: Divided",
      "Fails: Added",
      "Fails: Zero",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Moment = Force × perpendicular distance. Stability when resultant load line stays inside the stability triangle (or stem-named base). Speed, ramp grade, and off-center loads move the line. No universal tip-speed equat... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.06",
    "You are the CSP reviewing a live decision at a hospital utility plant shutdown. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Resultant leaves triangle means.",
    [
      "Guaranteed safe",
      "Tip-over tendency",
      "Only EMR issue",
      "Only noise issue",
    ],
    1,
    "Core Rule: Geometry. Calculation Steps: Stability. Standards Cited: PIT. Why Each Distractor Fails: Tip-over tendency: Correct: Tips | Guaranteed safe: Fails: False | Only EMR issue: Fails: FIN | Only noise issue: Fails: Wrong",
    "TOOL",
    "Exam",
    [
      "Fails: False",
      "Correct: Tips",
      "Fails: FIN",
      "Fails: Wrong",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Moment = Force × perpendicular distance. Stability when resultant load line stays inside the stability triangle (or stem-named base). Speed, ramp grade, and off-center loads move the line. No universal tip-speed equat... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.06",
    "You are the CSP reviewing a live decision at a food packaging SKU change. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Nameplate with people on forks.",
    [
      "Always OK",
      "Always increases capacity",
      "Not automatically authorized — config matters",
      "Sets K for light curtains",
    ],
    2,
    "Core Rule: Config/net capacity. Calculation Steps: Misuse. Standards Cited: PIT/aerial contrast. Why Each Distractor Fails: Not automatically authorized — config matters: Correct: Config | Always OK: Fails: False | Always increases capacity: Fails: False | Sets K for light curtains: Fails: Wrong domain",
    "STEM",
    "Exam",
    [
      "Fails: False",
      "Fails: False",
      "Correct: Config",
      "Fails: Wrong domain",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Moment = Force × perpendicular distance. Stability when resultant load line stays inside the stability triangle (or stem-named base). Speed, ramp grade, and off-center loads move the line. No universal tip-speed equat... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.06",
    "You are the CSP reviewing a live decision at a semiconductor tool install. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Ramp effect primarily.",
    [
      "Deletes gravity",
      "Sets TRIR",
      "Sets LFL",
      "Shifts line of action / stability margin",
    ],
    3,
    "Core Rule: Geometry change. Calculation Steps: Ramp. Standards Cited: PIT. Why Each Distractor Fails: Shifts line of action / stability margin: Correct: Shifts | Deletes gravity: Fails: False | Sets TRIR: Fails: Wrong | Sets LFL: Fails: Wrong",
    "STEM",
    "Exam",
    [
      "Fails: False",
      "Fails: Wrong",
      "Fails: Wrong",
      "Correct: Shifts",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Moment = Force × perpendicular distance. Stability when resultant load line stays inside the stability triangle (or stem-named base). Speed, ramp grade, and off-center loads move the line. No universal tip-speed equat... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.06",
    "You are the CSP reviewing a live decision at an offshore fabrication night shift. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Resisting 3,000; overturning 2,000. Margin.",
    [
      "1,000 ft·lb stable (per stem compare)",
      "5,000",
      "0",
      "-1000",
    ],
    0,
    "Core Rule: Subtract. Calculation Steps: 1000. Standards Cited: Compare. Why Each Distractor Fails: 1,000 ft·lb stable (per stem compare): Correct: 1000 | 5,000: Fails: Sum | 0: Fails: Equal | -1000: Fails: Opposite",
    "FORM",
    "Exam",
    [
      "Correct: 1000",
      "Fails: Sum",
      "Fails: Equal",
      "Fails: Opposite",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Moment = Force × perpendicular distance. Stability when resultant load line stays inside the stability triangle (or stem-named base). Speed, ramp grade, and off-center loads move the line. No universal tip-speed equat... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.06",
    "You are the CSP reviewing a live decision at a municipal water-plant retrofit. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Speed-only tip explanation misses.",
    [
      "All physics",
      "Load offset, ramp, CG geometry",
      "Moment definition",
      "Force units",
    ],
    1,
    "Core Rule: Multi-factor. Calculation Steps: Folklore. Standards Cited: PIT. Why Each Distractor Fails: Load offset, ramp, CG geometry: Correct: Misses factors | All physics: Fails: False | Moment definition: Fails: Not the miss | Force units: Fails: Not",
    "STEM",
    "Exam",
    [
      "Fails: False",
      "Correct: Misses factors",
      "Fails: Not the miss",
      "Fails: Not",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Moment = Force × perpendicular distance. Stability when resultant load line stays inside the stability triangle (or stem-named base). Speed, ramp grade, and off-center loads move the line. No universal tip-speed equat... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.06",
    "You are the CSP reviewing a live decision at a plastics compounding turnaround. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Aerial lift vs PIT.",
    [
      "Identical always",
      "Both use Le Chatelier",
      "Different machine rules and stability models",
      "Both use SPCC 110%",
    ],
    2,
    "Core Rule: Contrast. Calculation Steps: Class 13. Standards Cited: Equipment. Why Each Distractor Fails: Different machine rules and stability models: Correct: Different | Identical always: Fails: False | Both use Le Chatelier: Fails: Wrong | Both use SPCC 110%: Fails: Myth",
    "TOOL",
    "Exam",
    [
      "Fails: False",
      "Fails: Wrong",
      "Correct: Different",
      "Fails: Myth",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Moment = Force × perpendicular distance. Stability when resultant load line stays inside the stability triangle (or stem-named base). Speed, ramp grade, and off-center loads move the line. No universal tip-speed equat... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.06",
    "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Off-center 800 lb at 2.5 ft. Overturning moment.",
    [
      "800",
      "2.5",
      "0.003",
      "2,000 ft·lb",
    ],
    3,
    "Core Rule: 800×2.5. Calculation Steps: 2000. Standards Cited: Moment. Why Each Distractor Fails: 2,000 ft·lb: Correct: 2000 | 800: Fails: Force | 2.5: Fails: Arm | 0.003: Fails: Nonsense",
    "FORM",
    "Exam",
    [
      "Fails: Force",
      "Fails: Arm",
      "Fails: Nonsense",
      "Correct: 2000",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Moment = Force × perpendicular distance. Stability when resultant load line stays inside the stability triangle (or stem-named base). Speed, ramp grade, and off-center loads move the line. No universal tip-speed equat... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.06",
    "You are the CSP reviewing a live decision at a refinery coker outage. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Best control if tip risk from elevated CG load.",
    [
      "Lower/center load or engineering config change",
      "Faster travel",
      "More horn use only",
      "Hide near-misses",
    ],
    0,
    "Core Rule: Engineering/geometry. Calculation Steps: Controls. Standards Cited: PIT. Why Each Distractor Fails: Lower/center load or engineering config change: Correct: Geometry | Faster travel: Fails: Worse | More horn use only: Fails: Admin weak | Hide near-misses: Fails: FIN",
    "HIER",
    "Exam",
    [
      "Correct: Geometry",
      "Fails: Worse",
      "Fails: Admin weak",
      "Fails: FIN",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Moment = Force × perpendicular distance. Stability when resultant load line stays inside the stability triangle (or stem-named base). Speed, ramp grade, and off-center loads move the line. No universal tip-speed equat... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.06",
    "You are the CSP reviewing a live decision at a bridge deck pour laydown yard. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Stability triangle teaching image.",
    [
      "Fire triangle",
      "Three-point geometric base under the truck",
      "Dust pentagon",
      "VPP plaque",
    ],
    1,
    "Core Rule: Geometry. Calculation Steps: Concept. Standards Cited: PIT. Why Each Distractor Fails: Three-point geometric base under the truck: Correct: Triangle | Fire triangle: Fails: Wrong | Dust pentagon: Fails: Wrong | VPP plaque: Fails: Wrong",
    "TOOL",
    "Exam",
    [
      "Fails: Wrong",
      "Correct: Triangle",
      "Fails: Wrong",
      "Fails: Wrong",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Moment = Force × perpendicular distance. Stability when resultant load line stays inside the stability triangle (or stem-named base). Speed, ramp grade, and off-center loads move the line. No universal tip-speed equat... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.06",
    "You are the CSP reviewing a live decision at a pharma suite changeover. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Attachment changes capacity. Action.",
    [
      "Ignore",
      "Double capacity",
      "Use manufacturer derate / new nameplate basis",
      "Use TRIR",
    ],
    2,
    "Core Rule: Attachments. Calculation Steps: Capacity. Standards Cited: PIT. Why Each Distractor Fails: Use manufacturer derate / new nameplate basis: Correct: Derate | Ignore: Fails: False | Double capacity: Fails: False | Use TRIR: Fails: Wrong",
    "STEM",
    "Exam",
    [
      "Fails: False",
      "Fails: False",
      "Correct: Derate",
      "Fails: Wrong",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Moment = Force × perpendicular distance. Stability when resultant load line stays inside the stability triangle (or stem-named base). Speed, ramp grade, and off-center loads move the line. No universal tip-speed equat... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.06",
    "You are the CSP reviewing a live decision at a warehouse second-shift startup. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: VERIFY leftover.",
    [
      "Always 5 mph tip",
      "OSHA tattoos tip speed",
      "ISO 22301 sets tip speed",
      "No universal tip-speed equation — stem data only",
    ],
    3,
    "Core Rule: Honesty. Calculation Steps: Limits. Standards Cited: PIT. Why Each Distractor Fails: No universal tip-speed equation — stem data only: Correct: VERIFY | Always 5 mph tip: Fails: False | OSHA tattoos tip speed: Fails: False | ISO 22301 sets tip speed: Fails: Wrong domain",
    "STEM",
    "Exam",
    [
      "Fails: False",
      "Fails: False",
      "Fails: Wrong domain",
      "Correct: VERIFY",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Moment = Force × perpendicular distance. Stability when resultant load line stays inside the stability triangle (or stem-named base). Speed, ramp grade, and off-center loads move the line. No universal tip-speed equat... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];

