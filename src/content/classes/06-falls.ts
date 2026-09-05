import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D1.03";

export const classFields: ClassFields = {
  hook: "A mezzanine edge will be open for pallet pass-through. Operations wants “100% tie-off” with 6-ft lanyards. The drawing is not frozen. You are the CSP. The question is whether anyone must work at that edge at all.",
  hookOilGas: `A pipe-rack platform edge will be open for bundle pass-through. Operations wants â100% tie-offâ with 6-ft lanyards. The drawing is not frozen. You are the CSP. The question is whether anyone must work at that edge at all.`,
  hookConstruction: `A mezzanine edge on a site fabrication shop will be open for pallet pass-through. Operations wants â100% tie-offâ with 6-ft lanyards. The drawing is not frozen. You are the CSP. The question is whether anyone must work at that edge at all.`,
  rule: "Eliminate the height or the opening. Then guardrail / cover / restraint that prevents the fall. PFAS is last and only after you prove clearance. A 6-ft lanyard is not a plan.",
  modelCaption:
    "Fall-clearance stack from the walking surface down: lanyard length + deceleration distance + worker (D-ring to feet) + connector slack + safety margin = required clearance. Caption: if the stack is taller than the floor-to-lower-level distance, the 6-ft lanyard fails before anyone clips on.",
  workedCase:
    "Pallet pass-through on a 16-ft mezzanine. (1) Relocate the opening or add a gate that is closed except during a designed load-in. (2) Guardrail elsewhere. (3) If PFAS remains, run the numbers: 6 ft lanyard + ~3.5 ft pack + ~6 ft worker + ~1 ft connectors + ~2 ft margin ≈ 18.5 ft — a 16-ft story fails. Specify a shorter SRL rated for the edge or take the work to grade.",
  trapsJson: traps(
    "Calling 100% tie-off a design when the drawing can still take a guardrail.",
    "Using a 6-ft lanyard where the math does not fit.",
    "Mixing feet and meters on the same clearance stack.",
  ),
  contrastJson: contrast([
    { looksLike: "100% tie-off with 6-ft lanyards", actually: "PPE — last, and only with clearance" },
    { looksLike: "Guardrail and a closed gate on the pass-through", actually: "Engineering that prevents the fall" },
    { looksLike: "Move the work to grade", actually: "Elimination of the height" },
    { looksLike: "Toolbox talk on tying off", actually: "Administrative" },
  ]),
  mustScoreJson: mustScore(
    "Eliminate the height or the opening when still possible.",
    "Guardrail, cover, or travel restraint that prevents the fall beats arrest.",
    "PFAS catches a fall already in progress \u2014 residual when prevention is open.",
    "Hole covers must be load-rated, secured, and marked.",
    "Check free-fall, swing-fall, clearance, and rescue before trusting arrest.",
    "One hundred percent tie-off loses to a still-buildable guardrail.",
    "Skylights and floor openings need engineered prevention, not caution tape.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "work can move to grade or the hole can be covered", pick: "elimination or a proper cover/guardrail" },
    { ifStem: "harnesses are offered while a guardrail is still buildable", pick: "guardrail or restraint that prevents the fall" },
    { ifStem: "only PFAS is proposed for a permanent opening", pick: "engineer the opening closed or guarded" },
    { ifStem: "swing fall or clearance is inadequate", pick: "redesign anchorage/geometry before issuing harnesses" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
  ),

  brief: `Eliminate the height or the opening. Then guardrail / cover / restraint that prevents the fall. PFAS is last and only after you prove clearance. A 6-ft lanyard is not a plan. If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Eliminate the height or the opening. Then guardrail / cover / restraint that prevents the fall. PFAS is last and only after you prove clearance. A 6-ft lanyard is not a plan. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
A mezzanine edge will be open for pallet pass-through. Operations wants â100% tie-offâ with 6-ft lanyards. The drawing is not frozen. You are the CSP. The question is whether anyone must work at that edge at all. Oil-and-gas skin: A pipe-rack platform edge will be open for bundle pass-through. You are the CSP. Construction skin: A mezzanine edge on a site fabrication shop will be open for pallet pass-through. You are the CSP. Work the case: Pallet pass-through on a 16-ft mezzanine. (1) Relocate the opening or add a gate that is closed except during a designed load-in. (2) Guardrail elsewhere. (3) If PFAS remains, run the numbers: 6 ft lanyard + ~3.5 ft pack + ~6 ft worker + ~1 ft connectors + ~2 ft margin â 18.5 ft â a 16-ft story fails. Specify a shorter SRL rated for the edge or take the work to grade. Classic traps: Calling 100% tie-off a design when the drawing can still take a guardrail.; Using a 6-ft lanyard where the math does not fit.; Mixing feet and meters on the same clearance stack.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for falls. Verify whether a higher system or design fix is still open. Contrast labels: 100% tie-off with 6-ft lanyards is actually PPE — last, and only with clearance; Guardrail and a closed gate on the pass-through is actually Engineering that prevents the fall; Move the work to grade is actually Elimination of the height; Toolbox talk on tying off is actually Administrative. If the stem shows work can move to grade or the hole can be covered, pick elimination or a proper cover/guardrail. If the stem shows harnesses are offered while a guardrail is still buildable, pick guardrail or restraint that prevents the fall. If the stem shows only PFAS is proposed for a permanent opening, pick engineer the opening closed or guarded. If the stem shows swing fall or clearance is inadequate, pick redesign anchorage/geometry before issuing harnesses. If the stem shows two answers work, pick higher hierarchy / system / design. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Falls — prevent the fall or catch it sits in CSP-11 Domain 1 Applied Safety Technology. The exam tests whether you apply the rule when a package already looks complete. Core rule: Eliminate the height or the opening. Then guardrail / cover / restraint that prevents the fall. PFAS is last and only after you prove clearance. A 6-ft lanyard is not a plan. Field context: A mezzanine edge will be open for pallet pass-through. Operations wants â100% tie-offâ with 6-ft lanyards. The drawing is not frozen. You are the CSP. The question is whether anyone must work at that edge at all. The oil-and-gas skin shifts the same decision into production pressure: A pipe-rack platform edge will be open for bundle pass-through. You are the CSP. The construction skin shifts it into schedule and trade stacking: A mezzanine edge on a site fabrication shop will be open for pallet pass-through. You are the CSP. Model caption for this class: Fall-clearance stack from the walking surface down: lanyard length + deceleration distance + worker (D-ring to feet) + connector slack + safety margin = required clearance. Caption: if the stack is taller than the floor-to-lower-level distance, the 6-ft lanyard fails before anyone clips on. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Eliminate the height or the opening when still possible. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Guardrail, cover, or travel restraint that prevents the fall beats arrest. (3) PFAS catches a fall already in progress — residual when prevention is open. (4) Hole covers must be load-rated, secured, and marked. (5) Check free-fall, swing-fall, clearance, and rescue before trusting arrest. (6) One hundred percent tie-off loses to a still-buildable guardrail. (7) Skylights and floor openings need engineered prevention, not caution tape. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Pallet pass-through on a 16-ft mezzanine. (1) Relocate the opening or add a gate that is closed except during a designed load-in. (2) Guardrail elsewhere. (3) If PFAS remains, run the numbers: 6 ft lanyard + ~3.5 ft pack + ~6 ft worker + ~1 ft connectors + ~2 ft margin â 18.5 ft â a 16-ft story fails. Specify a shorter SRL rated for the edge or take the work to grade. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Calling 100% tie-off a design when the drawing can still take a guardrail.; Using a 6-ft lanyard where the math does not fit.; Mixing feet and meters on the same clearance stack.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “100% tie-off with 6-ft lanyards” is really PPE — last, and only with clearance; “Guardrail and a closed gate on the pass-through” is really Engineering that prevents the fall; “Move the work to grade” is really Elimination of the height; “Toolbox talk on tying off” is really Administrative. Stem-if-then map: if work can move to grade or the hole can be covered → elimination or a proper cover/guardrail; if harnesses are offered while a guardrail is still buildable → guardrail or restraint that prevents the fall; if only PFAS is proposed for a permanent opening → engineer the opening closed or guarded; if swing fall or clearance is inadequate → redesign anchorage/geometry before issuing harnesses; if two answers work → higher hierarchy / system / design. Scoring favors evidence, owners, verification, and hierarchy-smart controls on falls. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Falls — prevent the fall or catch it?",
  cardBack:
    "Eliminate height / guardrail / then PFAS with clearance math. Attractive wrong answer: 100% tie-off with a 6-ft lanyard under a 16-ft story. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence includes eliminate or guardrail before PFAS and mentions proving fall clearance.",
  formulaSlug: null,
};

export const items: ClassItem[] = [
  exam(T, "Mezzanine pallet pass-through is still on the drawing. Operations wants 100% tie-off with 6-ft lanyards. Best CSP comment?", [
    "Approve the lanyards as PtD.",
    "Specify a guardrail and a gate that stays closed except during a designed load-in, or relocate the opening.",
    "Add a JSA and keep the open edge.",
    "Paint the edge yellow and issue harnesses.",
  ], 1, "The opening is still a design choice. Guardrail/gate prevents the fall; lanyards catch it.", "HIER", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "OSHA 1910.28 / 1926 Subpart M",
      fieldTakeaway: "Eliminate the height or the opening. Then guardrail / cover / restraint that prevents the fall. PFAS is last and only after you prove clearance. A 6-ft lanyard is not a plan. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Walking surface is 16 ft above the floor. Proposed PFAS: 6-ft lanyard, 3.5-ft deceleration pack, 6-ft D-ring-to-feet, 1-ft connectors, 2-ft margin. Best conclusion?", [
    "18.5 ft required < 16 ft available, so the 6-ft lanyard works.",
    "18.5 ft required > 16 ft available, so the 6-ft lanyard fails; specify a shorter SRL rated for the edge or eliminate the work at height.",
    "Ignore margin because 16 is close to 18.5.",
    "Convert 16 ft to 16 m and it will pass.",
  ], 1, "6+3.5+6+1+2 = 18.5 ft. The story is too short. FORM/UNIT: do not drop the margin or mix meters.", "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "OSHA 1910.28 / 1926 Subpart M",
      fieldTakeaway: "Eliminate the height or the opening. Then guardrail / cover / restraint that prevents the fall. PFAS is last and only after you prove clearance. A 6-ft lanyard is not a plan. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Same stack, but a vendor drawing lists deceleration as 3.5 m instead of 3.5 ft. What should the CSP flag?", [
    "Nothing — 3.5 is 3.5.",
    "3.5 m is about 11.5 ft; mixing SI and imperial blows the clearance. Keep the manufacturer’s foot values or convert every term.",
    "Use 3.5 mm.",
    "Switch the calculator to RAD.",
  ], 1, "UNIT: 3.5 m is not 3.5 ft. One mixed term fails the stack.", "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "OSHA 1910.28 / 1926 Subpart M",
      fieldTakeaway: "Eliminate the height or the opening. Then guardrail / cover / restraint that prevents the fall. PFAS is last and only after you prove clearance. A 6-ft lanyard is not a plan. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A 2-ft by 2-ft floor hole will exist for a week during install. Best control?", [
    "Caution tape.",
    "Secured, marked cover that will take the expected load, or a guardrail around the hole.",
    "A spotter when someone remembers.",
    "Harnesses for everyone in the building.",
  ], 1, "Covers and rails prevent the fall. Tape is admin around a hole.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "OSHA 1910.28 / 1926 Subpart M",
      fieldTakeaway: "Eliminate the height or the opening. Then guardrail / cover / restraint that prevents the fall. PFAS is last and only after you prove clearance. A 6-ft lanyard is not a plan. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Last sentence: “The mezzanine steel is already erected; only field add-ons remain.” Best remaining control for a 12-ft open edge?", [
    "Move the entire mezzanine to grade.",
    "Install guardrail (and a gate at the pass-through) as a field add-on; do not default to 6-ft lanyards without clearance.",
    "A poster on tying off.",
    "Insurance.",
  ], 1, "Last sentence closed relocating the mezzanine. Rails can still be added. PPE is last.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "OSHA 1910.28 / 1926 Subpart M",
      fieldTakeaway: "Eliminate the height or the opening. Then guardrail / cover / restraint that prevents the fall. PFAS is last and only after you prove clearance. A 6-ft lanyard is not a plan. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Travel restraint vs fall arrest for a roof edge where the drawing can still set anchor locations. Best system?", [
    "6-ft shock-absorbing lanyard sized to let the worker go over the edge.",
    "Restraint that physically cannot reach the edge, with anchors placed accordingly.",
    "A monitoring person with a whistle.",
    "Sneakers with good tread.",
  ], 1, "Prevent the fall if the geometry allows. Arrest is last.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "OSHA 1910.28 / 1926 Subpart M",
      fieldTakeaway: "Eliminate the height or the opening. Then guardrail / cover / restraint that prevents the fall. PFAS is last and only after you prove clearance. A 6-ft lanyard is not a plan. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Anchor is proposed in light-gauge roof deck because “5,000 lb is a round number.” Best CSP position?", [
    "Approve — 5,000 lb is a slogan that any deck meets.",
    "Require a designed anchor into structure (or a certified engineered system); the deck is not an anchor because someone said 5,000.",
    "Approve if two people share it.",
    "Approve if the lanyard is new.",
  ], 1, "Anchors are structural. A number in a toolbox talk is not a calculation.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "OSHA 1910.28 / 1926 Subpart M",
      fieldTakeaway: "Eliminate the height or the opening. Then guardrail / cover / restraint that prevents the fall. PFAS is last and only after you prove clearance. A 6-ft lanyard is not a plan. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A scissor lift is used as an elevated work platform. Worker wants to stand on the mid-rail to gain 2 ft. Best control?", [
    "Allow if tied off to the rail.",
    "Stay inside the guardrail; standing on the mid-rail defeats the engineering control. Get a taller lift or a designed platform.",
    "Allow if a spotter watches.",
    "Allow on night shift only.",
  ], 1, "The rail is the control. Climbing it converts a platform back into a fall.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "OSHA 1910.28 / 1926 Subpart M",
      fieldTakeaway: "Eliminate the height or the opening. Then guardrail / cover / restraint that prevents the fall. PFAS is last and only after you prove clearance. A 6-ft lanyard is not a plan. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "PFAS is in use on a tower. Which missing piece makes the system incomplete even if the harness fits?", [
    "A laminated rescue card in the office.",
    "A planned, equipped method to retrieve a suspended worker promptly.",
    "A second whistle.",
    "A company logo on the harness.",
  ], 1, "Rescue is part of fall arrest. A card in the office is not a retrieval plan.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "OSHA 1910.28 / 1926 Subpart M",
      fieldTakeaway: "Eliminate the height or the opening. Then guardrail / cover / restraint that prevents the fall. PFAS is last and only after you prove clearance. A 6-ft lanyard is not a plan. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Which analysis belongs before the mezzanine is fabricated?", [
    "First-aid logs after the first fall.",
    "Design review of openings, rails, gates, and (if PFAS remains) clearance and anchor steel, written onto the drawing.",
    "FMEA on harness webbing color.",
    "Behavior observation of tying off after occupancy only.",
  ], 1, "The review must still be able to change the steel.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "OSHA 1910.28 / 1926 Subpart M",
      fieldTakeaway: "Eliminate the height or the opening. Then guardrail / cover / restraint that prevents the fall. PFAS is last and only after you prove clearance. A 6-ft lanyard is not a plan. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Finance prefers harness kits for 40 people instead of guardrail on a new mezzanine. Best position?", [
    "Harnesses are cheaper so they are the hierarchy winner.",
    "Specify the rail; harness kits are PPE around an edge you are about to build.",
    "Buy insurance instead of either.",
    "Paint the edge and train.",
  ], 1, "Rails are engineering at construction. Kits are PPE.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "OSHA 1910.28 / 1926 Subpart M",
      fieldTakeaway: "Eliminate the height or the opening. Then guardrail / cover / restraint that prevents the fall. PFAS is last and only after you prove clearance. A 6-ft lanyard is not a plan. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A portable ladder is proposed as the standing work platform for a 15-minute valve operation at 4.2 m, every shift, forever. Best PtD/hierarchy comment?", [
    "Ladder plus 100% tie-off is adequate because the task is short.",
    "Relocate the valve to grade or provide a platform/stairs; a ladder is not a designed work position for a standing task.",
    "Issue better boots.",
    "Time the task to under 14 minutes.",
  ], 1, "Duration does not convert a ladder into a platform. Design the access.", "HIER", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "OSHA 1910.28 / 1926 Subpart M",
      fieldTakeaway: "Eliminate the height or the opening. Then guardrail / cover / restraint that prevents the fall. PFAS is last and only after you prove clearance. A 6-ft lanyard is not a plan. Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
