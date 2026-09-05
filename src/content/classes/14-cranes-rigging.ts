import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D1.06";

export const classFields: ClassFields = {
  hook: "An 8,000-lb gearbox must move. The rigger wants a two-leg chain at 30° from horizontal because the hook cannot get high enough, and says “it is a 4-ton hoist so we are fine.” You are the CSP. The question is whether the sling and the chart still match the load.",
  hookOilGas: `An 8,000-lb exchanger bundle must move. The rigger wants a two-leg chain at 30Â° from horizontal because the hook cannot get high enough, and says it is a 4-ton hoist so we are fine. You are the CSP. The question is whether the sling and the chart still match the load.`,
  hookConstruction: `An 8,000-lb gearbox must move on site. The rigger wants a two-leg chain at 30Â° from horizontal because the hook cannot get high enough, and says it is a 4-ton hoist so we are fine. You are the CSP. The question is whether the sling and the chart still match the load.`,
  rule: "Chart capacity is not net capacity. Sling tension rises as the angle to horizontal falls. Below 30° is a red flag. Keep people out from under the load. Power lines: clearance or de-energize. A critical lift is extra plan, not extra hope. Calculator in DEG.",
  modelCaption:
    "Two-leg sling: load W in the middle, legs at angle θ to the horizontal. Tension in each leg T = (W/2) / sin(θ). Side sketch: 60° vs 30° — at 30°, T = W per leg. Caption: a 4-ton hoist does not make a 30° two-leg on 8,000 lb “fine.” Use DEG, not RAD.",
  workedCase:
    "8,000 lb, two-leg, 30° to horizontal. sin(30°) = 0.5, so T = 4,000 / 0.5 = 8,000 lb in EACH leg. A 4-ton (8,000 lb) hoist at the hook may still be at capacity before you add rigging weight, and each leg is seeing the full load. Raise the hook or use a spreader so the angle increases. Nobody under the load. Tag lines from outside the fall zone.",
  trapsJson: traps(
    "Using cosine instead of sine, or RAD instead of DEG.",
    "Treating hoist nameplate as net capacity after deductions.",
    "Standing under the load to “guide it.”",
  ),
  contrastJson: contrast([
    { looksLike: "4-ton hoist, so 8,000 lb is fine at any sling angle", actually: "Nameplate ≠ net; angle multiplies leg tension" },
    { looksLike: "Two-leg at 30° from horizontal", actually: "Each leg sees the full load (sin 30° = 0.5)" },
    { looksLike: "People under the load with hard hats", actually: "Struck-by — exclusion, not hats" },
    { looksLike: "Critical-lift meeting without a plan", actually: "Admin theater unless the chart, path, and exclusions change" },
  ]),
  mustScoreJson: mustScore(
    "Chart capacity is not net capacity after deductions and geometry.",
    "Sling tension rises as the angle to horizontal falls.",
    "Below about 30 degrees to horizontal, tension climbs sharply \u2014 redesign the hitch.",
    "Critical lifts need planning, competent/qualified roles, and exclusion zones.",
    "Inspect wire rope, slings, and hardware; damaged gear is out of service.",
    "Tag lines control loads; people under loads are wrong.",
    "Wind, outriggers, and ground bearing affect mobile crane stability.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "sling angle is low", pick: "recalculate tension or steepen the angle \u2014 do not guess" },
    { ifStem: "people are in the fall zone", pick: "clear the zone before the lift" },
    { ifStem: "load approaches chart limits after deductions", pick: "change the plan or crane \u2014 do not run to the line" },
    { ifStem: "a damaged sling is still soft to the touch", pick: "remove from service" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
  ),

  brief: `Chart capacity is not net capacity. Sling tension rises as the angle to horizontal falls. Below 30Â° is a red flag. Keep people out from under the load. Power lines: clearance or de-energize. A critical lift is extra plan, not extra hope. Calculator in DEG. If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Chart capacity is not net capacity. Sling tension rises as the angle to horizontal falls. Below 30Â° is a red flag. Keep people out from under the load. Power lines: clearance or de-energize. A critical lift is extra plan, not extra hope. Calculator in DEG. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
An 8,000-lb gearbox must move. The rigger wants a two-leg chain at 30Â° from horizontal because the hook cannot get high enough, and says âit is a 4-ton hoist so we are fine.â You are the CSP. The question is whether the sling and the chart still match the load. Oil-and-gas skin: An 8,000-lb exchanger bundle must move. The rigger wants a two-leg chain at 30Â° from horizontal because the hook cannot get high enough, and says it is a 4-ton hoist so we are fine. You are the CSP. Construction skin: An 8,000-lb gearbox must move on site. You are the CSP. Work the case: 8,000 lb, two-leg, 30Â° to horizontal. sin(30Â°) = 0.5, so T = 4,000 / 0.5 = 8,000 lb in EACH leg. A 4-ton (8,000 lb) hoist at the hook may still be at capacity before you add rigging weight, and each leg is seeing the full load. Raise the hook or use a spreader so the angle increases. Nobody under the load. Tag lines from outside the fall zone. Classic traps: Using cosine instead of sine, or RAD instead of DEG.; Treating hoist nameplate as net capacity after deductions.; Standing under the load to “guide it.”. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for cranes rigging. Verify whether a higher system or design fix is still open. Contrast labels: 4-ton hoist, so 8,000 lb is fine at any sling angle is actually Nameplate ≠ net; angle multiplies leg tension; Two-leg at 30° from horizontal is actually Each leg sees the full load (sin 30° = 0.5); People under the load with hard hats is actually Struck-by — exclusion, not hats; Critical-lift meeting without a plan is actually Admin theater unless the chart, path, and exclusions change. If the stem shows sling angle is low, pick recalculate tension or steepen the angle \u2014 do not guess. If the stem shows people are in the fall zone, pick clear the zone before the lift. If the stem shows load approaches chart limits after deductions, pick change the plan or crane \u2014 do not run to the line. If the stem shows a damaged sling is still soft to the touch, pick remove from service. If the stem shows two answers work, pick higher hierarchy / system / design. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Cranes — what does the leg actually see sits in CSP-11 Domain 1 Applied Safety Technology. The exam tests whether you apply the rule when a package already looks complete. Core rule: Chart capacity is not net capacity. Sling tension rises as the angle to horizontal falls. Below 30Â° is a red flag. Keep people out from under the load. Power lines: clearance or de-energize. A critical lift is extra plan, not extra hope. Calculator in DEG. Field context: An 8,000-lb gearbox must move. The rigger wants a two-leg chain at 30Â° from horizontal because the hook cannot get high enough, and says âit is a 4-ton hoist so we are fine.â You are the CSP. The question is whether the sling and the chart still match the load. The oil-and-gas skin shifts the same decision into production pressure: An 8,000-lb exchanger bundle must move. The rigger wants a two-leg chain at 30Â° from horizontal because the hook cannot get high enough, and says it is a 4-ton hoist so we are fine. You are the CSP. The construction skin shifts it into schedule and trade stacking: An 8,000-lb gearbox must move on site. You are the CSP. Model caption for this class: Two-leg sling: load W in the middle, legs at angle Î¸ to the horizontal. Tension in each leg T = (W/2) / sin(Î¸). Side sketch: 60Â° vs 30Â° â at 30Â°, T = W per leg. Caption: a 4-ton hoist does not make a 30Â° two-leg on 8,000 lb âfine.â Use DEG, not RAD. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Chart capacity is not net capacity after deductions and geometry. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Sling tension rises as the angle to horizontal falls. (3) Below about 30 degrees to horizontal, tension climbs sharply — redesign the hitch. (4) Critical lifts need planning, competent/qualified roles, and exclusion zones. (5) Inspect wire rope, slings, and hardware; damaged gear is out of service. (6) Tag lines control loads; people under loads are wrong. (7) Wind, outriggers, and ground bearing affect mobile crane stability. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: 8,000 lb, two-leg, 30Â° to horizontal. sin(30Â°) = 0.5, so T = 4,000 / 0.5 = 8,000 lb in EACH leg. A 4-ton (8,000 lb) hoist at the hook may still be at capacity before you add rigging weight, and each leg is seeing the full load. Raise the hook or use a spreader so the angle increases. Nobody under the load. Tag lines from outside the fall zone. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Using cosine instead of sine, or RAD instead of DEG.; Treating hoist nameplate as net capacity after deductions.; Standing under the load to “guide it.”. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “4-ton hoist, so 8,000 lb is fine at any sling angle” is really Nameplate ≠ net; angle multiplies leg tension; “Two-leg at 30° from horizontal” is really Each leg sees the full load (sin 30° = 0.5); “People under the load with hard hats” is really Struck-by — exclusion, not hats; “Critical-lift meeting without a plan” is really Admin theater unless the chart, path, and exclusions change. Stem-if-then map: if sling angle is low → recalculate tension or steepen the angle \u2014 do not guess; if people are in the fall zone → clear the zone before the lift; if load approaches chart limits after deductions → change the plan or crane \u2014 do not run to the line; if a damaged sling is still soft to the touch → remove from service; if two answers work → higher hierarchy / system / design. Scoring favors evidence, owners, verification, and hierarchy-smart controls on cranes rigging. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Cranes — what does the leg actually see?",
  cardBack:
    "Net chart, sling T = (W/2)/sin(θ) in DEG, nobody under the load. Attractive wrong answer: “4-ton hoist so we are fine” at 30°. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence includes net vs nameplate capacity, sling-angle tension, DEG not RAD, and exclusion under the load.",
};

export const items: ClassItem[] = [
  exam(T, "8,000-lb gearbox, two equal legs, 30° to horizontal. Tension in each leg?", [
    "4,000 lb (forgot the angle).",
    "8,000 lb (T = (W/2)/sin(30°) = 4,000/0.5).",
    "2,000 lb (divided twice).",
    "8,000 kg treated as 8,000 lb.",
  ], 1, "sin(30°)=0.5 so each leg sees the full load. Attractive wrong is 4,000 lb.", "FORM", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "OSHA 1926 Subpart CC; ASME B30 rigging concepts",
      fieldTakeaway: "Chart capacity is not net capacity. Sling tension rises as the angle to horizontal falls. Below 30° is a red flag. Keep people out from under the load. Power lines: clearance or de-energize. A critical lift is extra p... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Same problem, calculator left in RAD. sin(30) in radians is about 0.99. What happens if you use that?", [
    "You get the right 8,000 lb anyway.",
    "You compute T ≈ 4,040 lb and think the 4-ton hoist and legs are comfortable — a DEG/RAD UNIT miss.",
    "You get 30 lb.",
    "RAD is required for sling angles.",
  ], 1, "TI-30XS-style pitfall: DEG not RAD. 30° vs 30 rad.", "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "OSHA 1926 Subpart CC; ASME B30 rigging concepts",
      fieldTakeaway: "Chart capacity is not net capacity. Sling tension rises as the angle to horizontal falls. Below 30° is a red flag. Keep people out from under the load. Power lines: clearance or de-energize. A critical lift is extra p... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Rigger says the hoist is 4-ton so 8,000 lb is fine at 30°. Best CSP comment?", [
    "Agree — nameplate equals net.",
    "Disagree: check net chart after deductions, and each 30° leg is seeing 8,000 lb. Raise the hook or use a spreader.",
    "Agree if the chain looks new.",
    "Agree if a spotter watches the hoist.",
  ], 1, "Nameplate ≠ net; angle multiplies. HIER: change geometry, do not hope.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "OSHA 1926 Subpart CC; ASME B30 rigging concepts",
      fieldTakeaway: "Chart capacity is not net capacity. Sling tension rises as the angle to horizontal falls. Below 30° is a red flag. Keep people out from under the load. Power lines: clearance or de-energize. A critical lift is extra p... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Two workers stand under the gearbox to align bolt holes. Best control?", [
    "Hard hats make it acceptable.",
    "No one under the load; use alignment pins/guides and tag lines from outside the fall zone.",
    "Faster landing.",
    "A second whistle.",
  ], 1, "Struck-by exclusion. Hats are not a load path.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "OSHA 1926 Subpart CC; ASME B30 rigging concepts",
      fieldTakeaway: "Chart capacity is not net capacity. Sling tension rises as the angle to horizontal falls. Below 30° is a red flag. Keep people out from under the load. Power lines: clearance or de-energize. A critical lift is extra p... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Power line is in the planned swing. A dedicated spotter is offered. De-energizing or relocating the crane is still possible. Best control?", [
    "Spotter as primary.",
    "De-energize or relocate so the envelope never enters the line’s approach distance; spotter only as residual.",
    "A rubber mat.",
    "A high-visibility vest on the boom.",
  ], 1, "Eliminate contact. A spotter is admin around a live line.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "OSHA 1926 Subpart CC; ASME B30 rigging concepts",
      fieldTakeaway: "Chart capacity is not net capacity. Sling tension rises as the angle to horizontal falls. Below 30° is a red flag. Keep people out from under the load. Power lines: clearance or de-energize. A critical lift is extra p... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Last sentence: “Headroom cannot increase; 30° is the best angle you will get.” Best remaining move?", [
    "Proceed with 4,000 lb legs.",
    "Size legs and hardware for 8,000 lb each, verify net crane capacity, keep people out — or split the load / use a spreader that works in the same headroom if it actually improves the angle.",
    "A toolbox talk on hope.",
    "Insurance.",
  ], 1, "STEM closed headroom. Remaining control is hardware sized to the real tension.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "OSHA 1926 Subpart CC; ASME B30 rigging concepts",
      fieldTakeaway: "Chart capacity is not net capacity. Sling tension rises as the angle to horizontal falls. Below 30° is a red flag. Keep people out from under the load. Power lines: clearance or de-energize. A critical lift is extra p... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Load is 3,600 kg. Crew treats it as 3,600 lb because “pounds and kilos are close.” Best flag?", [
    "3,600 is 3,600.",
    "3,600 kg ≈ 7,940 lb — UNIT. Using 3,600 lb under-rigs by about half.",
    "3,600 kg ≈ 360 lb.",
    "Ignore mass on Earth.",
  ], 1, "kg vs lb. Attractive field rounding is deadly here.", "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "OSHA 1926 Subpart CC; ASME B30 rigging concepts",
      fieldTakeaway: "Chart capacity is not net capacity. Sling tension rises as the angle to horizontal falls. Below 30° is a red flag. Keep people out from under the load. Power lines: clearance or de-energize. A critical lift is extra p... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a semiconductor tool install. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Which analysis belongs before the gearbox is unbolted.", [
    "FTA after it drops.",
    "Lift plan: weight, CG, chart, radius, sling angles in DEG, path, exclusion, and power lines, written before the lift.",
    "FMEA on tag-line color.",
    "Observation of the thud.",
  ], 1, "The plan must still be able to change the crane location and rigging.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "OSHA 1926 Subpart CC; ASME B30 rigging concepts",
      fieldTakeaway: "Chart capacity is not net capacity. Sling tension rises as the angle to horizontal falls. Below 30° is a red flag. Keep people out from under the load. Power lines: clearance or de-energize. A critical lift is extra p... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A choke hitch on a 2-in pin with a 2-in sling body (D/d = 1). Manufacturer requires D/d ≥ 5 for full rating. Best action?", [
    "Use full vertical rating anyway.",
    "Derate or change the hitch/hardware so D/d meets the manufacturer; do not invent capacity.",
    "Double the speed of the lift.",
    "Add a hard hat.",
  ], 1, "STEM: manufacturer constraint. FORM if you ignore D/d.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "OSHA 1926 Subpart CC; ASME B30 rigging concepts",
      fieldTakeaway: "Chart capacity is not net capacity. Sling tension rises as the angle to horizontal falls. Below 30° is a red flag. Keep people out from under the load. Power lines: clearance or de-energize. A critical lift is extra p... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Finance prefers extra insurance instead of a spreader bar that would raise the sling angle. Best position?", [
    "Insurance reduces leg tension.",
    "Reject: specify the spreader (or equivalent geometry). Insurance is FIN, not rigging.",
    "Raise the deductible.",
    "A nicer chain with the delta.",
  ], 1, "FIN vs geometry.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "OSHA 1926 Subpart CC; ASME B30 rigging concepts",
      fieldTakeaway: "Chart capacity is not net capacity. Sling tension rises as the angle to horizontal falls. Below 30° is a red flag. Keep people out from under the load. Power lines: clearance or de-energize. A critical lift is extra p... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Outriggers are not fully extended because of a curb. Operator will “just boom up a little.” Best CSP position?", [
    "Allow — boom-up always increases capacity.",
    "Do not lift off the chart. Reposition, crib, or get a crane that fits; a curb is not a license to invent capacity.",
    "Allow if the load is 8,000 lb on a 4-ton hoist.",
    "Allow with a spotter.",
  ], 1, "Chart is the law of the machine. STEM: last constraint (outriggers).", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "OSHA 1926 Subpart CC; ASME B30 rigging concepts",
      fieldTakeaway: "Chart capacity is not net capacity. Sling tension rises as the angle to horizontal falls. Below 30° is a red flag. Keep people out from under the load. Power lines: clearance or de-energize. A critical lift is extra p... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Least consistent with crane/rigging control.", [
    "Written lift plan with net capacity.",
    "Exclusion zone under the path.",
    "A laminated “lift safe” card after three dropped loads, with no change to angles or charts.",
    "Sling angles kept well above 30° to horizontal.",
  ], 2, "A poster after drops is not a chart.", "HIER", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "OSHA 1926 Subpart CC; ASME B30 rigging concepts",
      fieldTakeaway: "Chart capacity is not net capacity. Sling tension rises as the angle to horizontal falls. Below 30° is a red flag. Keep people out from under the load. Power lines: clearance or de-energize. A critical lift is extra p... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
