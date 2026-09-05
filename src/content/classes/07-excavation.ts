import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D1.03";

export const classFields: ClassFields = {
  hook: "A 7-ft trench for a utility in Type C soil. The superintendent wants a vertical wall and a spotter because “it is only a two-hour job.” You are the CSP. The question is whether the soil and the depth still require a protective system.",
  hookOilGas: `A 7-ft trench for a flowline in Type C soil. The superintendent wants a vertical wall and a spotter because âit is only a two-hour job.â You are the CSP. The question is whether the soil and the depth still require a protective system.`,
  hookConstruction: `A 7-ft trench for a site utility in Type C soil. The superintendent wants a vertical wall and a spotter because âit is only a two-hour job.â You are the CSP. The question is whether the soil and the depth still require a protective system.`,
  rule: "A competent person classifies the soil. Type C is 1½ H : 1 V or a shield/shore. Protect at 5 ft (and less if the competent person says so). Egress within 25 ft once 4 ft deep. Spoil at least 2 ft from the edge. Water, surcharge, and vibration rewrite the classification.",
  modelCaption:
    "Side view of a Type C trench: 1½ horizontal to 1 vertical slope on each face, spoil pile ≥ 2 ft back from the edge, ladder in the excavation with the top above the landing, worker in the protected zone. Caption: a spotter on the bank is not a protective system; 7 ft × 1.5 = 10.5 ft of setback each side if you slope Type C.",
  workedCase:
    "7-ft Type C, two-hour window. (1) Competent person classifies — do not guess Type A because the job is short. (2) Slope 1.5:1 (10.5 ft each side) or drop a shield rated for the depth. (3) Ladder within 25 ft, spoil 2 ft back, keep water and equipment surcharge off the crest. A spotter is watching a collapse, not preventing one.",
  trapsJson: traps(
    "Calling a spotter a protective system.",
    "Using Type A slopes in previously disturbed Type C.",
    "Mixing 1.5:1 with 1:1 or treating 7 ft of depth as 7 ft of horizontal setback.",
  ),
  contrastJson: contrast([
    { looksLike: "Spotter on the bank", actually: "Administrative — not a protective system" },
    { looksLike: "Type C sloped 1½:1 or a rated shield", actually: "Engineering / protective system" },
    { looksLike: "Spoil piled at the lip “for convenience”", actually: "Surcharge at the crest — increases collapse risk" },
    { looksLike: "“Only two hours”", actually: "Time is not a soil classification" },
  ]),
  mustScoreJson: mustScore(
    "A competent person classifies soil and inspects as conditions change.",
    "Type C soil needs 1.5 H:1 V sloping or a shield/shore \u2014 not hope.",
    "Protect at 5 ft (and earlier when the competent person requires).",
    "Keep spoil and equipment back from the edge.",
    "Provide safe access/egress and atmospheric checks when needed.",
    "Water, vibration, and surcharge can downgrade protection mid-shift.",
    "A trench box is engineering; a spotter is not a shield.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "soil is Type C or unclassified after rain", pick: "1.5:1 slope or a shield/shore \u2014 do not stand in an unprotected wall" },
    { ifStem: "depth is at or above 5 ft without protection", pick: "install sloping, benching if allowed, or a shield before entry" },
    { ifStem: "spoil is at the lip", pick: "move spoil back and recheck surcharge" },
    { ifStem: "the stem offers a spotter instead of a box", pick: "reject \u2014 a spotter is not a protective system" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
  ),

  brief: `A competent person classifies the soil. Type C is 1Â½ H : 1 V or a shield/shore. Protect at 5 ft (and less if the competent person says so). Egress within 25 ft once 4 ft deep. Spoil at least 2 ft from the edge. Water, surcharge, and vibration rewrite the classification. If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
A competent person classifies the soil. Type C is 1Â½ H : 1 V or a shield/shore. Protect at 5 ft (and less if the competent person says so). Egress within 25 ft once 4 ft deep. Spoil at least 2 ft from the edge. Water, surcharge, and vibration rewrite the classification. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
A 7-ft trench for a utility in Type C soil. The superintendent wants a vertical wall and a spotter because âit is only a two-hour job.â You are the CSP. The question is whether the soil and the depth still require a protective system. Oil-and-gas skin: A 7-ft trench for a flowline in Type C soil. Construction skin: A 7-ft trench for a site utility in Type C soil. Work the case: 7-ft Type C, two-hour window. (1) Competent person classifies â do not guess Type A because the job is short. (2) Slope 1.5:1 (10.5 ft each side) or drop a shield rated for the depth. (3) Ladder within 25 ft, spoil 2 ft back, keep water and equipment surcharge off the crest. A spotter is watching a collapse, not preventing one. Classic traps: Calling a spotter a protective system.; Using Type A slopes in previously disturbed Type C.; Mixing 1.5:1 with 1:1 or treating 7 ft of depth as 7 ft of horizontal setback.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for excavation. Verify whether a higher system or design fix is still open. Contrast labels: Spotter on the bank is actually Administrative — not a protective system; Type C sloped 1½:1 or a rated shield is actually Engineering / protective system; Spoil piled at the lip “for convenience” is actually Surcharge at the crest — increases collapse risk; “Only two hours” is actually Time is not a soil classification. If the stem shows soil is Type C or unclassified after rain, pick 1.5:1 slope or a shield/shore \u2014 do not stand in an unprotected wall. If the stem shows depth is at or above 5 ft without protection, pick install sloping, benching if allowed, or a shield before entry. If the stem shows spoil is at the lip, pick move spoil back and recheck surcharge. If the stem shows the stem offers a spotter instead of a box, pick reject \u2014 a spotter is not a protective system. If the stem shows two answers work, pick higher hierarchy / system / design. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Excavation — what holds the wall sits in CSP-11 Domain 1 Applied Safety Technology. The exam tests whether you apply the rule when a package already looks complete. Core rule: A competent person classifies the soil. Type C is 1Â½ H : 1 V or a shield/shore. Protect at 5 ft (and less if the competent person says so). Egress within 25 ft once 4 ft deep. Spoil at least 2 ft from the edge. Water, surcharge, and vibration rewrite the classification. Field context: A 7-ft trench for a utility in Type C soil. The superintendent wants a vertical wall and a spotter because âit is only a two-hour job.â You are the CSP. The question is whether the soil and the depth still require a protective system. The oil-and-gas skin shifts the same decision into production pressure: A 7-ft trench for a flowline in Type C soil. The construction skin shifts it into schedule and trade stacking: A 7-ft trench for a site utility in Type C soil. Model caption for this class: Side view of a Type C trench: 1Â½ horizontal to 1 vertical slope on each face, spoil pile â¥ 2 ft back from the edge, ladder in the excavation with the top above the landing, worker in the protected zone. Caption: a spotter on the bank is not a protective system; 7 ft Ã 1.5 = 10.5 ft of setback each side if you slope Type C. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) A competent person classifies soil and inspects as conditions change. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Type C soil needs 1.5 H:1 V sloping or a shield/shore — not hope. (3) Protect at 5 ft (and earlier when the competent person requires). (4) Keep spoil and equipment back from the edge. (5) Provide safe access/egress and atmospheric checks when needed. (6) Water, vibration, and surcharge can downgrade protection mid-shift. (7) A trench box is engineering; a spotter is not a shield. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: 7-ft Type C, two-hour window. (1) Competent person classifies â do not guess Type A because the job is short. (2) Slope 1.5:1 (10.5 ft each side) or drop a shield rated for the depth. (3) Ladder within 25 ft, spoil 2 ft back, keep water and equipment surcharge off the crest. A spotter is watching a collapse, not preventing one. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Calling a spotter a protective system.; Using Type A slopes in previously disturbed Type C.; Mixing 1.5:1 with 1:1 or treating 7 ft of depth as 7 ft of horizontal setback.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Spotter on the bank” is really Administrative — not a protective system; “Type C sloped 1½:1 or a rated shield” is really Engineering / protective system; “Spoil piled at the lip “for convenience”” is really Surcharge at the crest — increases collapse risk; ““Only two hours”” is really Time is not a soil classification. Stem-if-then map: if soil is Type C or unclassified after rain → 1.5:1 slope or a shield/shore \u2014 do not stand in an unprotected wall; if depth is at or above 5 ft without protection → install sloping, benching if allowed, or a shield before entry; if spoil is at the lip → move spoil back and recheck surcharge; if the stem offers a spotter instead of a box → reject \u2014 a spotter is not a protective system; if two answers work → higher hierarchy / system / design. Scoring favors evidence, owners, verification, and hierarchy-smart controls on excavation. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Excavation — what holds the wall?",
  cardBack:
    "Competent person, Type C 1.5:1 or shield, spoil 2 ft back, egress 4 ft/25 ft. Attractive wrong answer: spotter on a two-hour vertical cut. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence includes competent person + protective system (slope/shore/shield) and says a spotter is not the system.",
};

export const items: ClassItem[] = [
  exam(T, "7-ft trench, Type C, two-hour job. Superintendent wants vertical walls and a spotter. Best CSP position?", [
    "Approve — duration under two hours waives the protective system.",
    "Require a Type C protective system (1½:1 slope or a rated shield/shore). A spotter is not the system.",
    "Allow vertical walls if everyone has a hard hat.",
    "Allow if the competent person watches from a truck.",
  ], 1, "Time is not a classification. Type C at 7 ft needs a protective system.", "HIER", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "OSHA 1926 Subpart P Excavations",
      fieldTakeaway: "A competent person classifies the soil. Type C is 1½ H : 1 V or a shield/shore. Protect at 5 ft (and less if the competent person says so). Egress within 25 ft once 4 ft deep. Spoil at least 2 ft from the edge. Water,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Type C trench, 7 ft deep, will be sloped. Horizontal setback each side?", [
    "7 ft (1:1, using depth as setback).",
    "10.5 ft (1.5 × 7).",
    "4.5 ft (0.75:1 Type A leftover).",
    "7 m (mixed units).",
  ], 1, "Type C is 1½ H : 1 V. 1.5 × 7 = 10.5 ft. Attractive wrong: 7 ft or 7 m.", "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "OSHA 1926 Subpart P Excavations",
      fieldTakeaway: "A competent person classifies the soil. Type C is 1½ H : 1 V or a shield/shore. Protect at 5 ft (and less if the competent person says so). Egress within 25 ft once 4 ft deep. Spoil at least 2 ft from the edge. Water,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a semiconductor tool install. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Trench is 4.2 ft deep and 40 ft long. How much egress.", [
    "None — egress starts at 5 ft.",
    "A ladder or other means of egress so that no more than 25 ft of lateral travel is required.",
    "One rope at the midpoint.",
    "Workers can climb the Type C slope without a ladder even if it is not sloped.",
  ], 1, "Egress at 4 ft, 25 ft lateral. 5 ft is the protective-system trigger, not the ladder trigger.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "OSHA 1926 Subpart P Excavations",
      fieldTakeaway: "A competent person classifies the soil. Type C is 1½ H : 1 V or a shield/shore. Protect at 5 ft (and less if the competent person says so). Egress within 25 ft once 4 ft deep. Spoil at least 2 ft from the edge. Water,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Spoil is being piled at the lip so the loader does not have to travel. Best CSP comment?", [
    "Approve — spoil at the lip is a convenience control.",
    "Keep spoil at least 2 ft from the edge (and farther if it surcharges the wall). The lip is the wrong parking place.",
    "Approve if a spotter stands on the spoil.",
    "Approve for Type C only.",
  ], 1, "2-ft rule plus surcharge. Convenience is not a protective system.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "OSHA 1926 Subpart P Excavations",
      fieldTakeaway: "A competent person classifies the soil. Type C is 1½ H : 1 V or a shield/shore. Protect at 5 ft (and less if the competent person says so). Egress within 25 ft once 4 ft deep. Spoil at least 2 ft from the edge. Water,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Soil was previously disturbed and is running with water after a storm. Foreman wants to keep yesterday’s Type A classification. Best action?", [
    "Keep Type A — classifications last 24 hours.",
    "Reclassify; water and prior disturbance remove Type A. Protect to the new class before anyone re-enters.",
    "Wait 8 hours and keep Type A.",
    "Wait 24 hours and keep Type A.",
  ], 1, "Water and disturbance change the class. TIME distractors (8 vs 24 h) are not soil mechanics.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "OSHA 1926 Subpart P Excavations",
      fieldTakeaway: "A competent person classifies the soil. Type C is 1½ H : 1 V or a shield/shore. Protect at 5 ft (and less if the competent person says so). Egress within 25 ft once 4 ft deep. Spoil at least 2 ft from the edge. Water,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A trench box is rated to 8 ft. The cut is 10 ft with 2 ft of spoil-looking soil above the box. Best use?", [
    "Use it — 8 is close to 10.",
    "Do not use a box above its rating; get a box rated for the actual depth or change the method.",
    "Use it if a spotter counts to 8.",
    "Use it if workers wear harnesses in the box.",
  ], 1, "Rating is a STEM constraint. Harnesses in a trench are not a substitute for a rated shield.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "OSHA 1926 Subpart P Excavations",
      fieldTakeaway: "A competent person classifies the soil. Type C is 1½ H : 1 V or a shield/shore. Protect at 5 ft (and less if the competent person says so). Egress within 25 ft once 4 ft deep. Spoil at least 2 ft from the edge. Water,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Heavy equipment will operate beside the excavation. Best additional control?", [
    "A horn.",
    "Keep surcharge back; use shoring/shield designed for the extra load; barrier the edge so the machine cannot drive in.",
    "A high-visibility vest on the operator only.",
    "Hope the Type C slope holds.",
  ], 1, "Surcharge and struck-by/caught-in are design. A vest is PPE.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "OSHA 1926 Subpart P Excavations",
      fieldTakeaway: "A competent person classifies the soil. Type C is 1½ H : 1 V or a shield/shore. Protect at 5 ft (and less if the competent person says so). Egress within 25 ft once 4 ft deep. Spoil at least 2 ft from the edge. Water,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a refinery coker outage. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Which analysis belongs before the bucket hits soil.", [
    "First-aid after the cave-in.",
    "Utility locate, soil plan, water/surcharge review, and selection of slope vs shield written into the work plan.",
    "FMEA on shovel color.",
    "FTA after the first near-miss only.",
  ], 1, "The plan must still be able to change the method. Post-event FTA is the wrong time.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "OSHA 1926 Subpart P Excavations",
      fieldTakeaway: "A competent person classifies the soil. Type C is 1½ H : 1 V or a shield/shore. Protect at 5 ft (and less if the competent person says so). Egress within 25 ft once 4 ft deep. Spoil at least 2 ft from the edge. Water,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Last sentence: “Right-of-way is only 6 ft wide, so 1.5:1 slopes will not fit at 7 ft.” Best remaining protective system?", [
    "Vertical cut plus a spotter.",
    "A rated trench shield or hydraulic shoring for Type C at that depth.",
    "Type A slopes squeezed into 6 ft.",
    "No protection because the job is short.",
  ], 1, "When sloping is closed by the last sentence, shore or shield. Do not invent Type A.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "OSHA 1926 Subpart P Excavations",
      fieldTakeaway: "A competent person classifies the soil. Type C is 1½ H : 1 V or a shield/shore. Protect at 5 ft (and less if the competent person says so). Egress within 25 ft once 4 ft deep. Spoil at least 2 ft from the edge. Water,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Atmosphere in a 9-ft trench near a sewer. Competent person smells something. Best next control?", [
    "Continue — trenches are never permit spaces.",
    "Test before entry and ventilate/isolate as required; a trench can have a hazardous atmosphere.",
    "Issue half-masks and keep digging.",
    "Wait 8 hours and re-enter without testing.",
  ], 1, "Hazardous atmosphere is a stop. PPE does not replace the test.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "OSHA 1926 Subpart P Excavations",
      fieldTakeaway: "A competent person classifies the soil. Type C is 1½ H : 1 V or a shield/shore. Protect at 5 ft (and less if the competent person says so). Egress within 25 ft once 4 ft deep. Spoil at least 2 ft from the edge. Water,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Finance wants to skip trench boxes on a two-week Type C job and “put a laborer on watch.” Best position?", [
    "A watcher is cheaper, therefore equivalent.",
    "Specify the protective system; a laborer is not a shield.",
    "Buy extra insurance instead of boxes.",
    "Issue helmets only.",
  ], 1, "People are not protective systems. FIN/HIER: insurance and watchers do not hold soil.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "OSHA 1926 Subpart P Excavations",
      fieldTakeaway: "A competent person classifies the soil. Type C is 1½ H : 1 V or a shield/shore. Protect at 5 ft (and less if the competent person says so). Egress within 25 ft once 4 ft deep. Spoil at least 2 ft from the edge. Water,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Type C slope math using 2.1 m depth. Horizontal setback in meters?", [
    "2.1 m (1:1).",
    "3.15 m (1.5 × 2.1).",
    "10.5 ft reported as 10.5 m.",
    "1.4 m (2.1 / 1.5).",
  ], 1, "Same 1.5:1 ratio in SI. Attractive wrong is mixing a remembered 10.5 ft into meters.", "UNIT", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "OSHA 1926 Subpart P Excavations",
      fieldTakeaway: "A competent person classifies the soil. Type C is 1½ H : 1 V or a shield/shore. Protect at 5 ft (and less if the competent person says so). Egress within 25 ft once 4 ft deep. Spoil at least 2 ft from the edge. Water,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
