import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D1.06";

export const classFields: ClassFields = {
  hook: "Weekly inspection of roof trusses. Maintenance wants two people with a 55-lb tool bag on a ladder. A vendor offers a drone. You are the CSP. The question is whether anyone must climb, and whether 51 lb is a free pass.",
  hookOilGas: `Weekly inspection of pipe-rack supports. Maintenance wants two people with a 55-lb tool bag on a ladder. A vendor offers a drone. You are the CSP. The question is whether anyone must climb, and whether 51 lb is a free pass.`,
  hookConstruction: `Weekly inspection of roof trusses on a site shop. Maintenance wants two people with a 55-lb tool bag on a ladder. A vendor offers a drone. You are the CSP. The question is whether anyone must climb, and whether 51 lb is a free pass.`,
  rule: "Eliminate the climb if a drone or remote camera can do the inspection. Remaining lifts use NIOSH RWL with LC = 51 lb. LI = Load / RWL. 51 lb is not automatically acceptable — multipliers cut it. Drones add struck-by, airspace, and privacy: design the flight box.",
  modelCaption:
    "Two sketches: (1) person on a ladder with a 55-lb bag vs a drone in a boxed flight zone under the trusses. (2) RWL bar: 51 lb × HM × VM × DM × AM × FM × CM. Caption: LC = 51 lb is the starting constant, not the recommended weight. LI > 1 means redesign the lift.",
  workedCase:
    "Weekly truss inspection. (1) Drone or camera from the floor if image quality is enough — eliminates the ladder (Class 6) and the 55-lb carry (this class). (2) If a person still goes up, tools go in a hoist, not a 55-lb bag. (3) If a floor lift remains: RWL = 51 × multipliers. A 51-lb load with HM = 0.8 is already 40.8 lb RWL; LI = 51/40.8 ≈ 1.25 — redesign. Flight box, observer, and no over-people for the drone.",
  trapsJson: traps(
    "Treating 51 lb (or 23 kg) as a legal limit that always passes.",
    "Using 23 kg as 23 lb.",
    "Calling the drone “zero risk” while flying over people.",
  ),
  contrastJson: contrast([
    { looksLike: "51 lb so the lift is fine", actually: "LC = 51 lb; RWL is usually less" },
    { looksLike: "Drone inspection from the floor", actually: "Elimination of the climb and the carry" },
    { looksLike: "Two-person carry of 55 lb up a ladder", actually: "Fall + overexertion stacked" },
    { looksLike: "Drone over an occupied aisle", actually: "New struck-by — design the flight box" },
  ]),
  mustScoreJson: mustScore(
    "Eliminate the climb if a drone or remote camera can do the inspection.",
    "Remaining lifts use NIOSH RWL thinking \u2014 reduce load, distance, frequency, asymmetry.",
    "Design workstations and mechanical aids before back belts.",
    "Team lifts and training are administrative after engineering aids.",
    "Drones introduce new struck-by and fall-object controls \u2014 still hierarchy.",
    "Back belts are not a primary ergonomic control.",
    "High-frequency light lifts can exceed risk of rare heavy lifts.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "a drone or remote tool can replace climbing", pick: "eliminate the height exposure" },
    { ifStem: "RWL multipliers are poor", pick: "change the job \u2014 do not only coach lifting form" },
    { ifStem: "only back belts are proposed", pick: "reject as primary control" },
    { ifStem: "asymmetric reach is in the stem", pick: "redesign layout or use an aid" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
  ),

  brief: `Eliminate the climb if a drone or remote camera can do the inspection. Remaining lifts use NIOSH RWL with LC = 51 lb. LI = Load / RWL. 51 lb is not automatically acceptable â multipliers cut it. Drones add struck-by, airspace, and privacy: design the flight box. If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Eliminate the climb if a drone or remote camera can do the inspection. Remaining lifts use NIOSH RWL with LC = 51 lb. LI = Load / RWL. 51 lb is not automatically acceptable â multipliers cut it. Drones add struck-by, airspace, and privacy: design the flight box. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
Weekly inspection of roof trusses. Maintenance wants two people with a 55-lb tool bag on a ladder. A vendor offers a drone. You are the CSP. The question is whether anyone must climb, and whether 51 lb is a free pass. Oil-and-gas skin: Weekly inspection of pipe-rack supports. A vendor offers a drone. You are the CSP. Construction skin: Weekly inspection of roof trusses on a site shop. A vendor offers a drone. You are the CSP. Work the case: Weekly truss inspection. (1) Drone or camera from the floor if image quality is enough â eliminates the ladder (Class 6) and the 55-lb carry (this class). (2) If a person still goes up, tools go in a hoist, not a 55-lb bag. (3) If a floor lift remains: RWL = 51 Ã multipliers. A 51-lb load with HM = 0.8 is already 40.8 lb RWL; LI = 51/40.8 â 1.25 â redesign. Flight box, observer, and no over-people for the drone. Classic traps: Treating 51 lb (or 23 kg) as a legal limit that always passes.; Using 23 kg as 23 lb.; Calling the drone “zero risk” while flying over people.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for manual drones. Verify whether a higher system or design fix is still open. Contrast labels: 51 lb so the lift is fine is actually LC = 51 lb; RWL is usually less; Drone inspection from the floor is actually Elimination of the climb and the carry; Two-person carry of 55 lb up a ladder is actually Fall + overexertion stacked; Drone over an occupied aisle is actually New struck-by — design the flight box. If the stem shows a drone or remote tool can replace climbing, pick eliminate the height exposure. If the stem shows RWL multipliers are poor, pick change the job \u2014 do not only coach lifting form. If the stem shows only back belts are proposed, pick reject as primary control. If the stem shows asymmetric reach is in the stem, pick redesign layout or use an aid. If the stem shows two answers work, pick higher hierarchy / system / design. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Manual / drones — is 51 lb a pass sits in CSP-11 Domain 1 Applied Safety Technology. The exam tests whether you apply the rule when a package already looks complete. Core rule: Eliminate the climb if a drone or remote camera can do the inspection. Remaining lifts use NIOSH RWL with LC = 51 lb. LI = Load / RWL. 51 lb is not automatically acceptable â multipliers cut it. Drones add struck-by, airspace, and privacy: design the flight box. Field context: Weekly inspection of roof trusses. Maintenance wants two people with a 55-lb tool bag on a ladder. A vendor offers a drone. You are the CSP. The question is whether anyone must climb, and whether 51 lb is a free pass. The oil-and-gas skin shifts the same decision into production pressure: Weekly inspection of pipe-rack supports. A vendor offers a drone. You are the CSP. The construction skin shifts it into schedule and trade stacking: Weekly inspection of roof trusses on a site shop. A vendor offers a drone. You are the CSP. Model caption for this class: Two sketches: (1) person on a ladder with a 55-lb bag vs a drone in a boxed flight zone under the trusses. (2) RWL bar: 51 lb Ã HM Ã VM Ã DM Ã AM Ã FM Ã CM. Caption: LC = 51 lb is the starting constant, not the recommended weight. LI > 1 means redesign the lift. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Eliminate the climb if a drone or remote camera can do the inspection. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Remaining lifts use NIOSH RWL thinking — reduce load, distance, frequency, asymmetry. (3) Design workstations and mechanical aids before back belts. (4) Team lifts and training are administrative after engineering aids. (5) Drones introduce new struck-by and fall-object controls — still hierarchy. (6) Back belts are not a primary ergonomic control. (7) High-frequency light lifts can exceed risk of rare heavy lifts. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Weekly truss inspection. (1) Drone or camera from the floor if image quality is enough â eliminates the ladder (Class 6) and the 55-lb carry (this class). (2) If a person still goes up, tools go in a hoist, not a 55-lb bag. (3) If a floor lift remains: RWL = 51 Ã multipliers. A 51-lb load with HM = 0.8 is already 40.8 lb RWL; LI = 51/40.8 â 1.25 â redesign. Flight box, observer, and no over-people for the drone. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Treating 51 lb (or 23 kg) as a legal limit that always passes.; Using 23 kg as 23 lb.; Calling the drone “zero risk” while flying over people.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “51 lb so the lift is fine” is really LC = 51 lb; RWL is usually less; “Drone inspection from the floor” is really Elimination of the climb and the carry; “Two-person carry of 55 lb up a ladder” is really Fall + overexertion stacked; “Drone over an occupied aisle” is really New struck-by — design the flight box. Stem-if-then map: if a drone or remote tool can replace climbing → eliminate the height exposure; if RWL multipliers are poor → change the job \u2014 do not only coach lifting form; if only back belts are proposed → reject as primary control; if asymmetric reach is in the stem → redesign layout or use an aid; if two answers work → higher hierarchy / system / design. Scoring favors evidence, owners, verification, and hierarchy-smart controls on manual drones. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Manual / drones — is 51 lb a pass?",
  cardBack:
    "LC = 51 lb, not a free-pass limit. LI = Load/RWL. Eliminate the climb with a drone if you can; then box the airspace. Attractive wrong answer: 23 kg treated as 23 lb, or “drones are zero risk.” Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence includes eliminate the climb when possible, RWL from 51 lb with multipliers, and drone flight-box / struck-by.",
  formulaSlug: "niosh-rwl",
};

export const items: ClassItem[] = [
  exam(T, "Weekly truss inspection. Two people, 55-lb tool bag, ladder. A drone can capture the same images. Best CSP recommendation?", [
    "Keep the ladder and add back belts.",
    "Use the drone (flight box, no over-people) to eliminate the climb and the carry.",
    "Keep the ladder; 55 is close to 51 so it is fine.",
    "Keep the ladder and train on lifting.",
  ], 1, "Eliminate height and load. 51 lb is not a pass, and belts are not PtD.", "HIER", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "NIOSH lifting / manual handling guidance",
      fieldTakeaway: "Eliminate the climb if a drone or remote camera can do the inspection. Remaining lifts use NIOSH RWL with LC = 51 lb. LI = Load / RWL. 51 lb is not automatically acceptable — multipliers cut it. Drones add struck-by,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Load = 51 lb. All multipliers = 1 except HM = 0.8. RWL and LI?", [
    "RWL = 51 lb, LI = 1.00 (treated LC as RWL).",
    "RWL = 40.8 lb, LI ≈ 1.25 (51 × 0.8 = 40.8; 51/40.8).",
    "RWL = 23 lb using 23 kg as 23 lb.",
    "RWL = 51 kg.",
  ], 1, "FORM: LC is not RWL. UNIT distractor is 23 lb.", "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "NIOSH lifting / manual handling guidance",
      fieldTakeaway: "Eliminate the climb if a drone or remote camera can do the inspection. Remaining lifts use NIOSH RWL with LC = 51 lb. LI = Load / RWL. 51 lb is not automatically acceptable — multipliers cut it. Drones add struck-by,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A stem gives LC as 23 kg. A technician uses 23 lb in the RWL product. What happened?", [
    "Correct — 23 is 23.",
    "UNIT: 23 kg ≈ 51 lb. Using 23 lb understates LC by about half and invents a tiny RWL or, if they also skip multipliers, a fake pass.",
    "23 kg = 23 N.",
    "Switch to RAD.",
  ], 1, "23 kg is the SI twin of 51 lb, not 23 lb.", "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "NIOSH lifting / manual handling guidance",
      fieldTakeaway: "Eliminate the climb if a drone or remote camera can do the inspection. Remaining lifts use NIOSH RWL with LC = 51 lb. LI = Load / RWL. 51 lb is not automatically acceptable — multipliers cut it. Drones add struck-by,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "LI computes to 1.8. Supervisor says “two people makes LI 0.9.” Best comment?", [
    "Agree — always divide LI by headcount.",
    "Do not blindly halve LI. Two-person lifts have their own coupling and coordination problems; redesign height/weight/hoist rather than assuming 1.8/2.",
    "Agree if they lift on 8-hour shifts.",
    "Agree if they lift on 24-hour shifts.",
  ], 1, "STEM: two-person is not automatic math. TIME distractors.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "NIOSH lifting / manual handling guidance",
      fieldTakeaway: "Eliminate the climb if a drone or remote camera can do the inspection. Remaining lifts use NIOSH RWL with LC = 51 lb. LI = Load / RWL. 51 lb is not automatically acceptable — multipliers cut it. Drones add struck-by,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Drone inspection is approved. Pilot plans to fly the length of an occupied production aisle “because the trusses are there.” Best remaining control?", [
    "Allow — drones are inherently safe.",
    "Box the flight over empty floor or during downtime; treat the aircraft as struck-by. Do not fly over people to save a setup.",
    "Allow if everyone wears hard hats.",
    "Allow if the drone is under 55 lb.",
  ], 1, "Elimination of the climb does not license a new struck-by. Design the airspace.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "NIOSH lifting / manual handling guidance",
      fieldTakeaway: "Eliminate the climb if a drone or remote camera can do the inspection. Remaining lifts use NIOSH RWL with LC = 51 lb. LI = Load / RWL. 51 lb is not automatically acceptable — multipliers cut it. Drones add struck-by,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A 55-lb bag must still go to mezzanine height. A small hoist can be specified. Best control?", [
    "Two-person ladder carry.",
    "Specify the hoist (and a lighter kit); do not carry 55 lb on a ladder.",
    "Back belts.",
    "A stretching poster.",
  ], 1, "Engineer the remaining lift. Ladders plus bags stack Class 6 and 15.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "NIOSH lifting / manual handling guidance",
      fieldTakeaway: "Eliminate the climb if a drone or remote camera can do the inspection. Remaining lifts use NIOSH RWL with LC = 51 lb. LI = Load / RWL. 51 lb is not automatically acceptable — multipliers cut it. Drones add struck-by,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Last sentence: “Client forbids drones over this roof.” Best remaining package?", [
    "Ignore the client and fly.",
    "Eliminate height another way (camera on a pole, inspect from a designed platform) or, if a person must go, engineered access and a hoist for tools — not a 55-lb ladder carry.",
    "55-lb ladder carry because drones are forbidden so hierarchy resets to PPE.",
    "Insurance.",
  ], 1, "STEM closed drones. Remaining design still beats the bag.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "NIOSH lifting / manual handling guidance",
      fieldTakeaway: "Eliminate the climb if a drone or remote camera can do the inspection. Remaining lifts use NIOSH RWL with LC = 51 lb. LI = Load / RWL. 51 lb is not automatically acceptable — multipliers cut it. Drones add struck-by,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Which analysis belongs before the inspection method is frozen?", [
    "First-aid after the first strain.",
    "Compare drone vs pole vs platform vs ladder using hierarchy plus a sample RWL on any remaining lift, written into the procedure.",
    "FMEA on drone color.",
    "FTA after a crash only.",
  ], 1, "The comparison must still be able to change the method.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "NIOSH lifting / manual handling guidance",
      fieldTakeaway: "Eliminate the climb if a drone or remote camera can do the inspection. Remaining lifts use NIOSH RWL with LC = 51 lb. LI = Load / RWL. 51 lb is not automatically acceptable — multipliers cut it. Drones add struck-by,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Horizontal location H = 25 in. A drawing lists H = 25 cm. Effect on HM?", [
    "None — 25 is 25.",
    "HM uses inches in the usual US RWL form; 25 cm ≈ 10 in, not 25 in. Mixing UNIT changes HM and RWL.",
    "Always use RAD.",
    "25 cm = 25 lb.",
  ], 1, "UNIT on H. The attractive wrong is using 25 in the formula without converting.", "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "NIOSH lifting / manual handling guidance",
      fieldTakeaway: "Eliminate the climb if a drone or remote camera can do the inspection. Remaining lifts use NIOSH RWL with LC = 51 lb. LI = Load / RWL. 51 lb is not automatically acceptable — multipliers cut it. Drones add struck-by,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Finance prefers extra medical-treatment insurance instead of a $4k drone kit that removes weekly climbs. Best position?", [
    "Insurance eliminates the climb.",
    "Reject: specify the drone (with a flight box). Insurance is FIN, not inspection design.",
    "Raise deductibles.",
    "Buy back belts with the delta.",
  ], 1, "FIN vs elimination.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "NIOSH lifting / manual handling guidance",
      fieldTakeaway: "Eliminate the climb if a drone or remote camera can do the inspection. Remaining lifts use NIOSH RWL with LC = 51 lb. LI = Load / RWL. 51 lb is not automatically acceptable — multipliers cut it. Drones add struck-by,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Coupling is rated poor (CM = 0.90) because the bag has no handles. Best design move?", [
    "Keep the bag; 0.90 is close to 1.",
    "Add handles or a rigid tote (better CM) and cut the weight — multipliers are clues to redesign, not a tax to absorb.",
    "Ignore CM because LC is 51.",
    "Use 23 lb.",
  ], 1, "Poor coupling is a design hint. Do not worship 51.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "NIOSH lifting / manual handling guidance",
      fieldTakeaway: "Eliminate the climb if a drone or remote camera can do the inspection. Remaining lifts use NIOSH RWL with LC = 51 lb. LI = Load / RWL. 51 lb is not automatically acceptable — multipliers cut it. Drones add struck-by,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a refinery coker outage. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Least consistent with this class.", [
    "Drone inspection with a boxed flight path.",
    "Hoist for remaining parts.",
    "A laminated “lift with your legs” card after three strains, with the 55-lb ladder carry unchanged.",
    "RWL used to justify a lighter kit.",
  ], 2, "A poster is not an RWL and not a drone.", "HIER", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "NIOSH lifting / manual handling guidance",
      fieldTakeaway: "Eliminate the climb if a drone or remote camera can do the inspection. Remaining lifts use NIOSH RWL with LC = 51 lb. LI = Load / RWL. 51 lb is not automatically acceptable — multipliers cut it. Drones add struck-by,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
