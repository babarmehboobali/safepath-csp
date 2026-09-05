import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D6.01";

export const classFields: ClassFields = {
  hook: "A crew is pouring on a 95 °F black roof. Supervisor offers salt tablets and “hydrate harder,” and the trailer HVAC is in economizer with a gas-fired heater backdrafting. You are the CSP. The question is WBGT/work-rest and indoor air as design, not a tablet as engineering.",
  hookOilGas: `A crew is pulling a tower on a 95 Â°F pad. Supervisor offers salt tablets and âhydrate harder,â and a nearby building HVAC economizer is backdrafting a heater. You are the CSP. The question is WBGT/work-rest and indoor air as design, not a tablet as engineering.`,
  hookConstruction: `A crew is pouring on a 95 Â°F black roof. Supervisor offers salt tablets and âhydrate harder,â and the job-shack heater is backdrafting. You are the CSP. The question is WBGT/work-rest and indoor air as design, not a tablet as engineering.`,
  rule: "Heat: WBGT indexes humidity and radiant load — indoor WBGT = 0.7 Tnwb + 0.3 Tg; outdoor with sun adds 0.1 Tdb. Work-rest, shade, cool rest area, acclimatization, and stop-work beat salt tablets. Cold: wind chill, wet clothing, hypothermia/frostbite, warm-up schedule. IAQ: source control, then ventilation (Q=VA / outdoor air), then filtration; CO from backdrafting is a life-safety source problem. If two answers work, take higher hierarchy / system / design.",
  modelCaption: "Three panels: WBGT mix (0.7 wet / 0.3 globe) | COLD wind+wet | IAQ stack SOURCE → VENT → FILTER. Salt tablet and “open a window” tagged last. Caption: environment is a designed exposure.",
  workedCase: "Roof pour, Tnwb 28 °C, Tg 36 °C, sun. Outdoor WBGT = 0.7×28 + 0.2×36 + 0.1×Tdb. Even without Tdb, radiant/humidity dominate. Controls: shift work to morning, shade, cool rest, water/rest/shade program, stop at symptoms — not salt tablets as engineering. Job shack: CO from a backdrafting heater is source control (vent the appliance, CO alarm) not an N95.",
  brief: `Heat: WBGT indexes humidity and radiant load â indoor WBGT = 0.7 Tnwb + 0.3 Tg; outdoor with sun adds 0.1 Tdb. Work-rest, shade, cool rest area, acclimatization, and stop-work beat salt tablets. Cold: wind chill, wet clothing, hypothermia/frostbite, warm-up schedule. IAQ: source control, then ventilation (Q=VA / outdoor air), then filtration; CO from backdrafting If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Heat: WBGT indexes humidity and radiant load â indoor WBGT = 0.7 Tnwb + 0.3 Tg; outdoor with sun adds 0.1 Tdb. Work-rest, shade, cool rest area, acclimatization, and stop-work beat salt tablets. Cold: wind chill, wet clothing, hypothermia/frostbite, warm-up schedule. IAQ: source control, then ventilation (Q=VA / outdoor air), then filtration; CO from backdrafting is a life-safety source problem. If two answers work, take higher hierarchy / system / design. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. Field move
A crew is pouring on a 95 Â°F black roof. Supervisor offers salt tablets and âhydrate harder,â and the trailer HVAC is in economizer with a gas-fired heater backdrafting. You are the CSP. The question is WBGT/work-rest and indoor air as design, not a tablet as engineering. Oil-and-gas skin: A crew is pulling a tower on a 95 Â°F pad. Supervisor offers salt tablets and âhydrate harder,â and a nearby building HVAC economizer is backdrafting a heater. You are the CSP. Construction skin: A crew is pouring on a 95 Â°F black roof. Supervisor offers salt tablets and âhydrate harder,â and the job-shack heater is backdrafting. You are the CSP. Work the case: Roof pour, Tnwb 28 Â°C, Tg 36 Â°C, sun. Outdoor WBGT = 0.7Ã28 + 0.2Ã36 + 0.1ÃTdb. Even without Tdb, radiant/humidity dominate. Controls: shift work to morning, shade, cool rest, water/rest/shade program, stop at symptoms â not salt tablets as engineering. Job shack: CO from a backdrafting heater is source control (vent the appliance, CO alarm) not an N95. Classic traps: Salt tablets or extra PPE as the heat-stress engineering control.; Using dry-bulb alone when the stem gives wet-bulb and globe.; Treating CO/backdraft as an “IAQ comfort” filter problem.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for heat cold iaq. Verify whether a higher system or design fix is still open. Contrast labels: WBGT is actually Weighted wet-bulb + globe (+ dry-bulb in sun) — not dry-bulb folklore; Work-rest / shade / cool area is actually Admin + some engineering — still above salt tablets; Salt tablets is actually Not a hierarchy control; can harm; Cold wind chill / wet is actually Heat loss drivers — dry insulation, breaks, dry clothes; IAQ source control is actually Stop the emitter (backdraft, VOC) before a comfort filter. If the stem shows heat stroke suspected, pick emergency cooling/medical \u2014 not just water break. If the stem shows IAQ complaints and only fragrance added, pick find/control sources and ventilate. If the stem shows engineering cooling is open, pick prefer engineering over PPE packs alone. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows new workers on first hot days, pick acclimatize and adjust work/rest. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Indoor WBGT weights? Salt tablets vs shade? CO a filter problem sits in CSP-11 Domain 6 Occupational Health and Ergonomics. The exam tests whether you apply the rule when a package already looks complete. Core rule: Heat: WBGT indexes humidity and radiant load â indoor WBGT = 0.7 Tnwb + 0.3 Tg; outdoor with sun adds 0.1 Tdb. Work-rest, shade, cool rest area, acclimatization, and stop-work beat salt tablets. Cold: wind chill, wet clothing, hypothermia/frostbite, warm-up schedule. IAQ: source control, then ventilation (Q=VA / outdoor air), then filtration; CO from backdrafting is a life-safety source problem. If two answers work, take higher hierarchy / system / design. Field context: A crew is pouring on a 95 Â°F black roof. Supervisor offers salt tablets and âhydrate harder,â and the trailer HVAC is in economizer with a gas-fired heater backdrafting. You are the CSP. The question is WBGT/work-rest and indoor air as design, not a tablet as engineering. The oil-and-gas skin shifts the same decision into production pressure: A crew is pulling a tower on a 95 Â°F pad. Supervisor offers salt tablets and âhydrate harder,â and a nearby building HVAC economizer is backdrafting a heater. You are the CSP. The construction skin shifts it into schedule and trade stacking: A crew is pouring on a 95 Â°F black roof. Supervisor offers salt tablets and âhydrate harder,â and the job-shack heater is backdrafting. You are the CSP. Model caption for this class: Three panels: WBGT mix (0.7 wet / 0.3 globe) | COLD wind+wet | IAQ stack SOURCE â VENT â FILTER. Salt tablet and âopen a windowâ tagged last. Caption: environment is a designed exposure. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Heat: water, rest, shade, acclimatization, work/rest cycles; engineer cooling when open. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Cold: dry insulation, layering, warm-up, wind protection; design out exposure when open. (3) IAQ: source control and ventilation before air fresheners. (4) WBGT and clothing adjustments appear in heat stems — read carefully. (5) Emergency response for heat stroke differs from exhaustion. (6) Do not treat fans alone as adequate in extreme humid heat without evaluation. (7) Hierarchy: eliminate/reduce environmental load before PPE-only. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Roof pour, Tnwb 28 Â°C, Tg 36 Â°C, sun. Outdoor WBGT = 0.7Ã28 + 0.2Ã36 + 0.1ÃTdb. Even without Tdb, radiant/humidity dominate. Controls: shift work to morning, shade, cool rest, water/rest/shade program, stop at symptoms â not salt tablets as engineering. Job shack: CO from a backdrafting heater is source control (vent the appliance, CO alarm) not an N95. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Salt tablets or extra PPE as the heat-stress engineering control.; Using dry-bulb alone when the stem gives wet-bulb and globe.; Treating CO/backdraft as an “IAQ comfort” filter problem.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “WBGT” is really Weighted wet-bulb + globe (+ dry-bulb in sun) — not dry-bulb folklore; “Work-rest / shade / cool area” is really Admin + some engineering — still above salt tablets; “Salt tablets” is really Not a hierarchy control; can harm; “Cold wind chill / wet” is really Heat loss drivers — dry insulation, breaks, dry clothes; “IAQ source control” is really Stop the emitter (backdraft, VOC) before a comfort filter. Stem-if-then map: if heat stroke suspected → emergency cooling/medical \u2014 not just water break; if IAQ complaints and only fragrance added → find/control sources and ventilate; if engineering cooling is open → prefer engineering over PPE packs alone; if two answers work → higher hierarchy / system / design; if new workers on first hot days → acclimatize and adjust work/rest. Scoring favors evidence, owners, verification, and hierarchy-smart controls on heat cold iaq. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Indoor WBGT weights? Salt tablets vs shade? CO a filter problem?",
  cardBack: "Indoor WBGT = 0.7 wet-bulb + 0.3 globe. Shade/work-rest/stop beat tablets. CO = source/vent, not N95. Study only — not allowed in the test center.",
  teachBackKey: "Pass if the sentence gives WBGT weights, rejects salt tablets as engineering, and says IAQ starts at source control (CO not a comfort filter).",
  trapsJson: traps(
    "Salt tablets or extra PPE as the heat-stress engineering control.",
    "Using dry-bulb alone when the stem gives wet-bulb and globe.",
    "Treating CO/backdraft as an “IAQ comfort” filter problem.",
  ),
  contrastJson: contrast([
    { looksLike: "WBGT", actually: "Weighted wet-bulb + globe (+ dry-bulb in sun) — not dry-bulb folklore" },
    { looksLike: "Work-rest / shade / cool area", actually: "Admin + some engineering — still above salt tablets" },
    { looksLike: "Salt tablets", actually: "Not a hierarchy control; can harm" },
    { looksLike: "Cold wind chill / wet", actually: "Heat loss drivers — dry insulation, breaks, dry clothes" },
    { looksLike: "IAQ source control", actually: "Stop the emitter (backdraft, VOC) before a comfort filter" },
  ]),
  mustScoreJson: mustScore(
    "Heat: water, rest, shade, acclimatization, work/rest cycles; engineer cooling when open.",
    "Cold: dry insulation, layering, warm-up, wind protection; design out exposure when open.",
    "IAQ: source control and ventilation before air fresheners.",
    "WBGT and clothing adjustments appear in heat stems \u2014 read carefully.",
    "Emergency response for heat stroke differs from exhaustion.",
    "Do not treat fans alone as adequate in extreme humid heat without evaluation.",
    "Hierarchy: eliminate/reduce environmental load before PPE-only.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "heat stroke suspected", pick: "emergency cooling/medical \u2014 not just water break" },
    { ifStem: "IAQ complaints and only fragrance added", pick: "find/control sources and ventilate" },
    { ifStem: "engineering cooling is open", pick: "prefer engineering over PPE packs alone" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "new workers on first hot days", pick: "acclimatize and adjust work/rest" },
  ),

  formulaSlug: null,
};

export const items: ClassItem[] = [
  exam(
    T,
    "You are the CSP reviewing a live decision at a grain elevator maintenance day. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Indoor WBGT: Tnwb 28 °C, Tg 32 °C. Value.",
    [
      "32 °C using globe only.",
      "29.2 °C. 0.7×28 + 0.3×32 = 19.6 + 9.6. Keystrokes: 0.7 × 28 = 19.6; 0.3 × 32 = 9.6; + = 29.2.",
      "30 °C average (28+32)/2.",
      "28 °C wet-bulb only.",
    ],
    1,
    "FORM: indoor WBGT = 0.7 Tnwb + 0.3 Tg.",
    "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Heat: WBGT indexes humidity and radiant load — indoor WBGT = 0.7 Tnwb + 0.3 Tg; outdoor with sun adds 0.1 Tdb. Work-rest, shade, cool rest area, acclimatization, and stop-work beat salt tablets. Cold: wind chill, wet... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Supervisor issues salt tablets as the heat-stress control while shade and morning pours are open. Best CSP comment?",
    [
      "Approve tablets — they are engineering.",
      "Reject tablets as the control. Move the work, provide shade/cool rest, water, work-rest, stop-work. Tablets are not hierarchy.",
      "Approve if WBGT equals OSHA PEL 90 dBA.",
      "Approve Tyvek to “sweat out toxins.”",
    ],
    1,
    "HIER: schedule/shade vs tablets.",
    "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Heat: WBGT indexes humidity and radiant load — indoor WBGT = 0.7 Tnwb + 0.3 Tg; outdoor with sun adds 0.1 Tdb. Work-rest, shade, cool rest area, acclimatization, and stop-work beat salt tablets. Cold: wind chill, wet... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at a food packaging SKU change. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Outdoor with sun: Tnwb 28, Tg 36, Tdb 34. WBGT.",
    [
      "Indoor formula 0.7×28+0.3×36 = 30.4 (wrong weights).",
      "29.6 °C. 0.7×28 + 0.2×36 + 0.1×34 = 19.6+7.2+3.4. Keystrokes: 0.7×28=19.6; 0.2×36=7.2; 0.1×34=3.4; + = 29.6.",
      "34 °C dry-bulb bravado.",
      "36 °C globe only.",
    ],
    1,
    "FORM: sun formula uses 0.7 / 0.2 / 0.1. STEM if indoor weights used.",
    "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Heat: WBGT indexes humidity and radiant load — indoor WBGT = 0.7 Tnwb + 0.3 Tg; outdoor with sun adds 0.1 Tdb. Work-rest, shade, cool rest area, acclimatization, and stop-work beat salt tablets. Cold: wind chill, wet... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Job-shack CO from a backdrafting heater. N95s issued for “IAQ.” Best action?",
    [
      "Keep N95 — they capture CO.",
      "Source control: stop backdraft, vent the appliance, CO alarm, evacuate if symptomatic. N95 does not remove CO.",
      "MERV-13 only.",
      "Salt tablets bind CO.",
    ],
    1,
    "HIER/STEM: CO is source/vent, not a filter facepiece.",
    "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Heat: WBGT indexes humidity and radiant load — indoor WBGT = 0.7 Tnwb + 0.3 Tg; outdoor with sun adds 0.1 Tdb. Work-rest, shade, cool rest area, acclimatization, and stop-work beat salt tablets. Cold: wind chill, wet... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "ACGIH heat TLV used as an OSHA numbered PEL in a citation file. Error?",
    [
      "None — TLV is OSHA heat PEL.",
      "PELTLV: heat TLVs are advisory; OSHA heat is general duty/program, not “90 dBA.” Use the object the stem asked.",
      "UNIT — they used °F as ppm.",
      "TIME — 15-minute STEL of heat.",
    ],
    1,
    "PELTLV: advisory heat TLV vs legal framework.",
    "PELTLV",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Heat: WBGT indexes humidity and radiant load — indoor WBGT = 0.7 Tnwb + 0.3 Tg; outdoor with sun adds 0.1 Tdb. Work-rest, shade, cool rest area, acclimatization, and stop-work beat salt tablets. Cold: wind chill, wet... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Cold: wet cotton + wind. Team adds a fan “for IAQ” on the exposed deck. Issue?",
    [
      "Fan is the cold-stress control.",
      "STEM: wind increases heat loss. Dry insulation, wind break, warm-up — don’t add wind to wet workers.",
      "Fan replaces WBGT.",
      "Fan is Q=VA heat engineering.",
    ],
    1,
    "STEM: wind chill vs a comfort fan.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Heat: WBGT indexes humidity and radiant load — indoor WBGT = 0.7 Tnwb + 0.3 Tg; outdoor with sun adds 0.1 Tdb. Work-rest, shade, cool rest area, acclimatization, and stop-work beat salt tablets. Cold: wind chill, wet... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Last sentence: pour can start at 06:00 instead of 14:00. Tablets vs schedule?",
    [
      "Tablets — tradition.",
      "Change the schedule (avoid peak WBGT). Last sentence left elimination open.",
      "Tyvek + tablets.",
      "Ignore WBGT because OSHA PEL is 50 μg/m³.",
    ],
    1,
    "STEM + HIER: last sentence allowed time-shifting the exposure.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Heat: WBGT indexes humidity and radiant load — indoor WBGT = 0.7 Tnwb + 0.3 Tg; outdoor with sun adds 0.1 Tdb. Work-rest, shade, cool rest area, acclimatization, and stop-work beat salt tablets. Cold: wind chill, wet... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "WBGT calculated in °C then compared to a °F table without conversion. Error?",
    [
      "None — 29.2 equals 29.2 °F.",
      "UNIT: 29.2 °C ≠ 29.2 °F. Convert or use the matching table. (°C × 9/5) + 32.",
      "FORM — they should have used 24.45.",
      "FIN — they used ROI.",
    ],
    1,
    "UNIT: °C vs °F tables.",
    "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Heat: WBGT indexes humidity and radiant load — indoor WBGT = 0.7 Tnwb + 0.3 Tg; outdoor with sun adds 0.1 Tdb. Work-rest, shade, cool rest area, acclimatization, and stop-work beat salt tablets. Cold: wind chill, wet... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Wrong tool: FTA of the water-cooler brand instead of a heat plan. Comment?",
    [
      "Accept — FTA is WBGT.",
      "TOOL: WBGT/work-rest, schedule, shade, stop-work. A cooler-brand fault tree is not a heat program.",
      "Accept if top event is 90 dBA.",
      "Accept if salt is in the cooler.",
    ],
    1,
    "TOOL: FTA ≠ heat-stress program.",
    "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Heat: WBGT indexes humidity and radiant load — indoor WBGT = 0.7 Tnwb + 0.3 Tg; outdoor with sun adds 0.1 Tdb. Work-rest, shade, cool rest area, acclimatization, and stop-work beat salt tablets. Cold: wind chill, wet... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Two funded moves: extra umbrella AND extra tablets; shade structure still open. Pair and miss?",
    [
      "Avoid + reduce; tablets are shade.",
      "Transfer + non-control; missing Reduce (shade/schedule/vent).",
      "Two WBGTs.",
      "CO + N95 complete IAQ.",
    ],
    1,
    "FIN: insurance plus tablets skip environment design.",
    "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Heat: WBGT indexes humidity and radiant load — indoor WBGT = 0.7 Tnwb + 0.3 Tg; outdoor with sun adds 0.1 Tdb. Work-rest, shade, cool rest area, acclimatization, and stop-work beat salt tablets. Cold: wind chill, wet... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Heat-stroke hospitalization; team files only a WBGT log. OSHA clock?",
    [
      "WBGT log is the 8-hour clock.",
      "Hospitalization: 24 hours to OSHA. Thermal logs are parallel.",
      "7 days.",
      "No clock if tablets were issued.",
    ],
    1,
    "TIME: 24-hour hospitalization.",
    "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Heat: WBGT indexes humidity and radiant load — indoor WBGT = 0.7 Tnwb + 0.3 Tg; outdoor with sun adds 0.1 Tdb. Work-rest, shade, cool rest area, acclimatization, and stop-work beat salt tablets. Cold: wind chill, wet... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "IAQ complaint: odor only, no CO, source is an open solvent drum at the intake. Best first control?",
    [
      "MERV-16 and continue the drum.",
      "Source control: close/move the drum, then ventilation. Filters are last for a known solvent source.",
      "N95 for the whole floor as IAQ.",
      "Salt tablets for odor.",
    ],
    1,
    "HIER: source then Q=VA, not a filter theater.",
    "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Heat: WBGT indexes humidity and radiant load — indoor WBGT = 0.7 Tnwb + 0.3 Tg; outdoor with sun adds 0.1 Tdb. Work-rest, shade, cool rest area, acclimatization, and stop-work beat salt tablets. Cold: wind chill, wet... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];

