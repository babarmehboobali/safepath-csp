import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D1.06";

export const classFields: ClassFields = {
  hook: "Narrow-aisle turret trucks will share the aisle with pedestrians. The warehouse wants horns and high-visibility vests. You are the CSP on the layout. The question is whether a person must walk in the same slot as a 3,000-lb mast.",
  hookOilGas: `Narrow-aisle turret trucks in a warehouse will share the aisle with pedestrians. Operations wants horns and high-visibility vests. You are the CSP on the layout. The question is whether a person must walk in the same slot as a 3,000-lb mast.`,
  hookConstruction: `Rough-terrain forklifts will share a path with pedestrians. The site wants horns and high-visibility vests. You are the CSP on the layout. The question is whether a person must walk in the same slot as a 3,000-lb mast.`,
  rule: "Separate pedestrians by design (guarded walkways, no-go aisles, end-of-aisle barriers). Then operating rules (mast low, seat belt, travel with load upgrade). Aerial: fall protection in boom lifts; stay inside scissor-lift guardrails. Training is required and is not the top of the hierarchy.",
  modelCaption:
    "Aisle plan view: truck zone vs pedestrian walkway with a physical barrier, end-of-aisle stop, no pedestrian in the turret aisle. Side callout: boom lift with PFAS to the designated anchorage; scissor lift with feet on the floor of the platform. Caption: a vest is not a barrier; standing on a mid-rail is not “aerial work.”",
  workedCase:
    "Turret trucks + pedestrians. (1) Make the narrow aisle a no-pedestrian zone with end barriers and pick faces that do not require walking the slot. (2) Then horns, lights, speed limits, belts. (3) Training last. If an aerial boom is used to pick a high bay, PFAS to the boom’s designated point — the scissor-lift habit of “the rails are enough” does not transfer to a boom.",
  trapsJson: traps(
    "Vests as pedestrian separation.",
    "Standing on a scissor mid-rail, or no PFAS in a boom lift.",
    "Using a PIT as a personnel lift without a designed platform.",
  ),
  contrastJson: contrast([
    { looksLike: "Horns and vests in a shared aisle", actually: "Admin / PPE around a layout that still mixes bodies and masts" },
    { looksLike: "No-pedestrian turret aisle with barriers", actually: "Engineering separation" },
    { looksLike: "PFAS in a boom lift", actually: "Fall arrest because the boom can throw you" },
    { looksLike: "Feet on the scissor platform, rails up", actually: "Using the engineered guardrail" },
  ]),
  mustScoreJson: mustScore(
    "Separate pedestrians by design: guarded walkways, no-go aisles, end-of-aisle barriers.",
    "Operate within capacity charts; tip-overs follow load center and height.",
    "Aerial lifts need fall prevention appropriate to the configuration and gated platforms.",
    "Seat belts and restraints on PITs matter when tip or collision risk appears.",
    "Horn and light programs lose to layout that removes blind corners.",
    "Inspect and remove defective equipment before coaching the operator alone.",
    "Pedestrian vests are residual beside engineered segregation.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "aisle geometry can still change", pick: "engineered pedestrian separation" },
    { ifStem: "load center or height exceeds stability", pick: "change the lift plan \u2014 do not hope" },
    { ifStem: "aerial gate is tied open", pick: "restore the gate/fall prevention before use" },
    { ifStem: "only training is offered after a tip-over near a rack", pick: "fix layout, speed, and equipment limits first" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
  ),

  brief: `Separate pedestrians by design (guarded walkways, no-go aisles, end-of-aisle barriers). Then operating rules (mast low, seat belt, travel with load upgrade). Aerial: fall protection in boom lifts; stay inside scissor-lift guardrails. Training is required and is not the top of the hierarchy. If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Separate pedestrians by design (guarded walkways, no-go aisles, end-of-aisle barriers). Then operating rules (mast low, seat belt, travel with load upgrade). Aerial: fall protection in boom lifts; stay inside scissor-lift guardrails. Training is required and is not the top of the hierarchy. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
Narrow-aisle turret trucks will share the aisle with pedestrians. The warehouse wants horns and high-visibility vests. You are the CSP on the layout. The question is whether a person must walk in the same slot as a 3,000-lb mast. Oil-and-gas skin: Narrow-aisle turret trucks in a warehouse will share the aisle with pedestrians. Operations wants horns and high-visibility vests. Construction skin: Rough-terrain forklifts will share a path with pedestrians. The site wants horns and high-visibility vests. Work the case: Turret trucks + pedestrians. (1) Make the narrow aisle a no-pedestrian zone with end barriers and pick faces that do not require walking the slot. (2) Then horns, lights, speed limits, belts. (3) Training last. If an aerial boom is used to pick a high bay, PFAS to the boomâs designated point â the scissor-lift habit of âthe rails are enoughâ does not transfer to a boom. Classic traps: Vests as pedestrian separation.; Standing on a scissor mid-rail, or no PFAS in a boom lift.; Using a PIT as a personnel lift without a designed platform.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for pit aerial. Verify whether a higher system or design fix is still open. Contrast labels: Horns and vests in a shared aisle is actually Admin / PPE around a layout that still mixes bodies and masts; No-pedestrian turret aisle with barriers is actually Engineering separation; PFAS in a boom lift is actually Fall arrest because the boom can throw you; Feet on the scissor platform, rails up is actually Using the engineered guardrail. If the stem shows aisle geometry can still change, pick engineered pedestrian separation. If the stem shows load center or height exceeds stability, pick change the lift plan \u2014 do not hope. If the stem shows aerial gate is tied open, pick restore the gate/fall prevention before use. If the stem shows only training is offered after a tip-over near a rack, pick fix layout, speed, and equipment limits first. If the stem shows two answers work, pick higher hierarchy / system / design. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `PIT / aerial — who shares the envelope sits in CSP-11 Domain 1 Applied Safety Technology. The exam tests whether you apply the rule when a package already looks complete. Core rule: Separate pedestrians by design (guarded walkways, no-go aisles, end-of-aisle barriers). Then operating rules (mast low, seat belt, travel with load upgrade). Aerial: fall protection in boom lifts; stay inside scissor-lift guardrails. Training is required and is not the top of the hierarchy. Field context: Narrow-aisle turret trucks will share the aisle with pedestrians. The warehouse wants horns and high-visibility vests. You are the CSP on the layout. The question is whether a person must walk in the same slot as a 3,000-lb mast. The oil-and-gas skin shifts the same decision into production pressure: Narrow-aisle turret trucks in a warehouse will share the aisle with pedestrians. Operations wants horns and high-visibility vests. The construction skin shifts it into schedule and trade stacking: Rough-terrain forklifts will share a path with pedestrians. The site wants horns and high-visibility vests. Model caption for this class: Aisle plan view: truck zone vs pedestrian walkway with a physical barrier, end-of-aisle stop, no pedestrian in the turret aisle. Side callout: boom lift with PFAS to the designated anchorage; scissor lift with feet on the floor of the platform. Caption: a vest is not a barrier; standing on a mid-rail is not âaerial work.â Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Separate pedestrians by design: guarded walkways, no-go aisles, end-of-aisle barriers. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Operate within capacity charts; tip-overs follow load center and height. (3) Aerial lifts need fall prevention appropriate to the configuration and gated platforms. (4) Seat belts and restraints on PITs matter when tip or collision risk appears. (5) Horn and light programs lose to layout that removes blind corners. (6) Inspect and remove defective equipment before coaching the operator alone. (7) Pedestrian vests are residual beside engineered segregation. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Turret trucks + pedestrians. (1) Make the narrow aisle a no-pedestrian zone with end barriers and pick faces that do not require walking the slot. (2) Then horns, lights, speed limits, belts. (3) Training last. If an aerial boom is used to pick a high bay, PFAS to the boomâs designated point â the scissor-lift habit of âthe rails are enoughâ does not transfer to a boom. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Vests as pedestrian separation.; Standing on a scissor mid-rail, or no PFAS in a boom lift.; Using a PIT as a personnel lift without a designed platform.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Horns and vests in a shared aisle” is really Admin / PPE around a layout that still mixes bodies and masts; “No-pedestrian turret aisle with barriers” is really Engineering separation; “PFAS in a boom lift” is really Fall arrest because the boom can throw you; “Feet on the scissor platform, rails up” is really Using the engineered guardrail. Stem-if-then map: if aisle geometry can still change → engineered pedestrian separation; if load center or height exceeds stability → change the lift plan \u2014 do not hope; if aerial gate is tied open → restore the gate/fall prevention before use; if only training is offered after a tip-over near a rack → fix layout, speed, and equipment limits first; if two answers work → higher hierarchy / system / design. Scoring favors evidence, owners, verification, and hierarchy-smart controls on pit aerial. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "PIT / aerial — who shares the envelope?",
  cardBack:
    "Separate pedestrians. Belts, mast low. Boom PFAS; scissor rails. Attractive wrong answer: vests in a shared turret aisle, or forks as an elevator. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence includes pedestrian separation by design and the boom vs scissor fall-protection difference.",
};

export const items: ClassItem[] = [
  exam(T, "Turret trucks will share a narrow aisle with pedestrians. Layout can still add barriers and a no-pedestrian rule for that aisle. Warehouse wants horns and vests. Best control?", [
    "Vests and horns as primary.",
    "Make the aisle a no-pedestrian zone with physical end barriers; horns/vests for residual elsewhere.",
    "A spotter in every slot.",
    "Faster trucks to reduce exposure time.",
  ], 1, "Separate by design. Vests are PPE in the mast’s envelope.", "HIER", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "OSHA 1910.178; ANSI/SAIA A92 aerial concepts",
      fieldTakeaway: "Separate pedestrians by design (guarded walkways, no-go aisles, end-of-aisle barriers). Then operating rules (mast low, seat belt, travel with load upgrade). Aerial: fall protection in boom lifts; stay inside scissor-... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Operator wants to lift a coworker on a pallet to change a lamp. Best CSP position?", [
    "Allow if both wear vests.",
    "Do not use forks as a personnel lift. Use a designed aerial platform or lower the lamp task.",
    "Allow if they travel slowly.",
    "Allow on night shift.",
  ], 1, "Personnel lifting needs a designed platform. A pallet is not one.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "OSHA 1910.178; ANSI/SAIA A92 aerial concepts",
      fieldTakeaway: "Separate pedestrians by design (guarded walkways, no-go aisles, end-of-aisle barriers). Then operating rules (mast low, seat belt, travel with load upgrade). Aerial: fall protection in boom lifts; stay inside scissor-... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Boom lift at 30 ft. Worker says scissor-lift rules apply so rails are enough and no PFAS. Best comment?", [
    "Agree — all aerials are rails-only.",
    "Boom-supported work typically requires PFAS to the designated anchorage; scissor-rail practice does not transfer.",
    "Agree if the boom is slow.",
    "Harness tied to the rail of a scissor, applied to a boom, is the same.",
  ], 1, "STEM: machine family is the last-sentence constraint.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "OSHA 1910.178; ANSI/SAIA A92 aerial concepts",
      fieldTakeaway: "Separate pedestrians by design (guarded walkways, no-go aisles, end-of-aisle barriers). Then operating rules (mast low, seat belt, travel with load upgrade). Aerial: fall protection in boom lifts; stay inside scissor-... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Scissor-lift worker stands on the mid-rail to gain 2 ft. Best control?", [
    "Allow if tied off to the rail.",
    "Feet on the platform, rails up. Get a taller lift or a designed reach; climbing the rail defeats the guard.",
    "Allow if a spotter watches.",
    "Allow under 8 minutes.",
  ], 1, "The rail is the engineering control. TIME (8 min) is a distractor.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "OSHA 1910.178; ANSI/SAIA A92 aerial concepts",
      fieldTakeaway: "Separate pedestrians by design (guarded walkways, no-go aisles, end-of-aisle barriers). Then operating rules (mast low, seat belt, travel with load upgrade). Aerial: fall protection in boom lifts; stay inside scissor-... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Truck capacity is 3,000 lb at 24 in load center. Attachment moves the center to 24 cm. What should the CSP flag?", [
    "Nothing — 24 is 24, capacity unchanged.",
    "24 cm is about 9.4 in, not 24 in — UNIT. Recalculate capacity at the real center; do not use the 24 in plate blindly.",
    "Capacity increases at 24 cm.",
    "Switch to RAD.",
  ], 1, "Load-center units change capacity. Attractive wrong is “24 = 24.”", "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "OSHA 1910.178; ANSI/SAIA A92 aerial concepts",
      fieldTakeaway: "Separate pedestrians by design (guarded walkways, no-go aisles, end-of-aisle barriers). Then operating rules (mast low, seat belt, travel with load upgrade). Aerial: fall protection in boom lifts; stay inside scissor-... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Seat-belt interlock can be specified on new PITs. Fleet prefers a “belt policy” only. Best spec?", [
    "Policy only — interlocks annoy operators.",
    "Specify the interlock (and still train); a policy is admin around a missing belt.",
    "Remove belts so policy is easier.",
    "Vests instead of belts.",
  ], 1, "Hardware on the truck beats a poster.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "OSHA 1910.178; ANSI/SAIA A92 aerial concepts",
      fieldTakeaway: "Separate pedestrians by design (guarded walkways, no-go aisles, end-of-aisle barriers). Then operating rules (mast low, seat belt, travel with load upgrade). Aerial: fall protection in boom lifts; stay inside scissor-... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Last sentence: “Racking is already installed; the aisle cannot be widened.” Best remaining pedestrian control?", [
    "Widen anyway.",
    "Close the aisle to pedestrians with end gates/barriers and pick protocols that do not require walking the slot.",
    "Vests only.",
    "Hope.",
  ], 1, "Last sentence closed width. Remaining design is exclusion, not vests-only.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "OSHA 1910.178; ANSI/SAIA A92 aerial concepts",
      fieldTakeaway: "Separate pedestrians by design (guarded walkways, no-go aisles, end-of-aisle barriers). Then operating rules (mast low, seat belt, travel with load upgrade). Aerial: fall protection in boom lifts; stay inside scissor-... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Which analysis belongs before the turret trucks are purchased?", [
    "FTA after the first pedestrian fatality.",
    "Layout and traffic study: aisle type, pedestrian exclusion, floor, and machine class written into the spec.",
    "FMEA on vest color.",
    "Observation of horn use after go-live only.",
  ], 1, "The study must still change the machine and the aisle rules.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "OSHA 1910.178; ANSI/SAIA A92 aerial concepts",
      fieldTakeaway: "Separate pedestrians by design (guarded walkways, no-go aisles, end-of-aisle barriers). Then operating rules (mast low, seat belt, travel with load upgrade). Aerial: fall protection in boom lifts; stay inside scissor-... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Traveling with the load raised to “see better.” Best rule vs design?", [
    "Allow — visibility is safety.",
    "Travel with load low; if visibility is the issue, specify cameras/mirrors and a layout that does not require a high load to see.",
    "Travel faster so the high load is brief.",
    "Remove the mast.",
  ], 1, "Stability and struck-by. High travel is a behavior around a visibility design problem.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "OSHA 1910.178; ANSI/SAIA A92 aerial concepts",
      fieldTakeaway: "Separate pedestrians by design (guarded walkways, no-go aisles, end-of-aisle barriers). Then operating rules (mast low, seat belt, travel with load upgrade). Aerial: fall protection in boom lifts; stay inside scissor-... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A telehandler is used to lift a load over people “because it is not a crane.” Best CSP comment?", [
    "Telehandlers never follow lift rules.",
    "No one under the load; apply the same struck-by exclusion and, if used as a crane, the crane/rigging rules. The nameplate does not cancel physics.",
    "Hard hats make it acceptable.",
    "Faster lift.",
  ], 1, "Struck-by exclusion is not optional because of branding.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "OSHA 1910.178; ANSI/SAIA A92 aerial concepts",
      fieldTakeaway: "Separate pedestrians by design (guarded walkways, no-go aisles, end-of-aisle barriers). Then operating rules (mast low, seat belt, travel with load upgrade). Aerial: fall protection in boom lifts; stay inside scissor-... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Finance prefers extra insurance over end-of-aisle barriers. Best position?", [
    "Insurance separates pedestrians.",
    "Reject: specify the barriers. Insurance is FIN, not a walkway.",
    "Raise deductibles.",
    "Buy nicer vests with the delta.",
  ], 1, "FIN vs HIER.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "OSHA 1910.178; ANSI/SAIA A92 aerial concepts",
      fieldTakeaway: "Separate pedestrians by design (guarded walkways, no-go aisles, end-of-aisle barriers). Then operating rules (mast low, seat belt, travel with load upgrade). Aerial: fall protection in boom lifts; stay inside scissor-... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a plastics compounding turnaround. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Least consistent with PIT/aerial hierarchy.", [
    "No-pedestrian turret aisles.",
    "PFAS in boom lifts.",
    "A laminated “watch for forklifts” card after three struck-by cases, with no layout change.",
    "Seat-belt interlocks on new trucks.",
  ], 2, "A poster after injuries is not separation.", "HIER", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "OSHA 1910.178; ANSI/SAIA A92 aerial concepts",
      fieldTakeaway: "Separate pedestrians by design (guarded walkways, no-go aisles, end-of-aisle barriers). Then operating rules (mast low, seat belt, travel with load upgrade). Aerial: fall protection in boom lifts; stay inside scissor-... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
