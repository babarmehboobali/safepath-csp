import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D1.04";

export const classFields: ClassFields = {
  hook: "A warehouse mezzanine will add 40 people. The architect wants one stair “because sprinklers are going in.” You are the CSP on the permit set. The question is whether those 40 people still have two ways out that they can actually use.",
  hookOilGas: `A warehouse mezzanine in a process warehouse will add 40 people. The architect wants one stair because sprinklers are going in. You are the CSP on the permit set. The question is whether those 40 people still have two ways out that they can actually use.`,
  hookConstruction: `A site warehouse mezzanine will add 40 people. The architect wants one stair because sprinklers are going in. You are the CSP on the permit set. The question is whether those 40 people still have two ways out that they can actually use.`,
  rule: "Means of egress = exit access + exit + exit discharge. Number of exits, travel distance, common path, and door swing follow occupant load. Sprinklers help; they do not erase a second way out when the stem still requires it. Unlocked, unobstructed, obvious.",
  modelCaption:
    "Three linked boxes: Exit access (path on the floor) → Exit (protected stair or door) → Exit discharge (to the public way). A dead-end / common-path callout on the access box. Caption: sprinklers sit beside the path; they are not a stair.",
  workedCase:
    "Mezzanine +40 people, one stair proposed. (1) Occupant load from area and use. (2) If two exits are required by load or travel, specify the second stair. (3) Doors swing with travel, no padlock during occupancy, discharge not into a fenced dock. “We sprinkled it” loses if the second exit is still required.",
  trapsJson: traps(
    "Calling sprinklers a substitute for a missing second exit.",
    "Chocking a fire door for airflow.",
    "Padlocking an egress door on the night shift “for security.”",
  ),
  contrastJson: contrast([
    { looksLike: "Sprinklers instead of a second stair", actually: "Fire protection is not a means of egress" },
    { looksLike: "Two remote stairs sized for the load", actually: "Means of egress" },
    { looksLike: "Padlock on an exit after 6 p.m.", actually: "Locked means of egress — a life-safety fail" },
    { looksLike: "Fire door chocked open", actually: "Protection of the exit was defeated" },
  ]),
  mustScoreJson: mustScore(
    "Means of egress equals exit access plus exit plus exit discharge.",
    "Number of exits, travel distance, common path, and dead ends matter.",
    "Exit doors unlock in the direction of egress \u2014 no unapproved locks.",
    "Occupant load drives capacity; do not block aisles with storage.",
    "Emergency lighting and exit marking support evacuation.",
    "Fire-rated assemblies and opening protectives maintain compartmentation.",
    "Drill performance verifies the plan the drawings claim.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "an exit is chained or blocked by pallets", pick: "clear and restore the egress path immediately" },
    { ifStem: "travel distance or common path exceeds limits", pick: "add exits or redesign layout \u2014 not a longer drill speech" },
    { ifStem: "occupant load increases with a renovation", pick: "recalculate exits and capacity" },
    { ifStem: "only a louder alarm is proposed for a blocked stair", pick: "fix the stair \u2014 detection does not replace egress" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
  ),

  brief: `Means of egress = exit access + exit + exit discharge. Number of exits, travel distance, common path, and door swing follow occupant load. Sprinklers help; they do not erase a second way out when the stem still requires it. Unlocked, unobstructed, obvious. If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Means of egress = exit access + exit + exit discharge. Number of exits, travel distance, common path, and door swing follow occupant load. Sprinklers help; they do not erase a second way out when the stem still requires it. Unlocked, unobstructed, obvious. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
A warehouse mezzanine will add 40 people. The architect wants one stair âbecause sprinklers are going in.â You are the CSP on the permit set. The question is whether those 40 people still have two ways out that they can actually use. Oil-and-gas skin: A warehouse mezzanine in a process warehouse will add 40 people. The architect wants one stair because sprinklers are going in. You are the CSP on the permit set. Construction skin: A site warehouse mezzanine will add 40 people. Work the case: Mezzanine +40 people, one stair proposed. (1) Occupant load from area and use. (2) If two exits are required by load or travel, specify the second stair. (3) Doors swing with travel, no padlock during occupancy, discharge not into a fenced dock. âWe sprinkled itâ loses if the second exit is still required. Classic traps: Calling sprinklers a substitute for a missing second exit.; Chocking a fire door for airflow.; Padlocking an egress door on the night shift “for security.”. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for life safety. Verify whether a higher system or design fix is still open. Contrast labels: Sprinklers instead of a second stair is actually Fire protection is not a means of egress; Two remote stairs sized for the load is actually Means of egress; Padlock on an exit after 6 p.m. is actually Locked means of egress — a life-safety fail; Fire door chocked open is actually Protection of the exit was defeated. If the stem shows an exit is chained or blocked by pallets, pick clear and restore the egress path immediately. If the stem shows travel distance or common path exceeds limits, pick add exits or redesign layout \u2014 not a longer drill speech. If the stem shows occupant load increases with a renovation, pick recalculate exits and capacity. If the stem shows only a louder alarm is proposed for a blocked stair, pick fix the stair \u2014 detection does not replace egress. If the stem shows two answers work, pick higher hierarchy / system / design. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Life safety — can they actually get out sits in CSP-11 Domain 1 Applied Safety Technology. The exam tests whether you apply the rule when a package already looks complete. Core rule: Means of egress = exit access + exit + exit discharge. Number of exits, travel distance, common path, and door swing follow occupant load. Sprinklers help; they do not erase a second way out when the stem still requires it. Unlocked, unobstructed, obvious. Field context: A warehouse mezzanine will add 40 people. The architect wants one stair âbecause sprinklers are going in.â You are the CSP on the permit set. The question is whether those 40 people still have two ways out that they can actually use. The oil-and-gas skin shifts the same decision into production pressure: A warehouse mezzanine in a process warehouse will add 40 people. The architect wants one stair because sprinklers are going in. You are the CSP on the permit set. The construction skin shifts it into schedule and trade stacking: A site warehouse mezzanine will add 40 people. Model caption for this class: Three linked boxes: Exit access (path on the floor) â Exit (protected stair or door) â Exit discharge (to the public way). A dead-end / common-path callout on the access box. Caption: sprinklers sit beside the path; they are not a stair. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Means of egress equals exit access plus exit plus exit discharge. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Number of exits, travel distance, common path, and dead ends matter. (3) Exit doors unlock in the direction of egress — no unapproved locks. (4) Occupant load drives capacity; do not block aisles with storage. (5) Emergency lighting and exit marking support evacuation. (6) Fire-rated assemblies and opening protectives maintain compartmentation. (7) Drill performance verifies the plan the drawings claim. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Mezzanine +40 people, one stair proposed. (1) Occupant load from area and use. (2) If two exits are required by load or travel, specify the second stair. (3) Doors swing with travel, no padlock during occupancy, discharge not into a fenced dock. âWe sprinkled itâ loses if the second exit is still required. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Calling sprinklers a substitute for a missing second exit.; Chocking a fire door for airflow.; Padlocking an egress door on the night shift “for security.”. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Sprinklers instead of a second stair” is really Fire protection is not a means of egress; “Two remote stairs sized for the load” is really Means of egress; “Padlock on an exit after 6 p.m.” is really Locked means of egress — a life-safety fail; “Fire door chocked open” is really Protection of the exit was defeated. Stem-if-then map: if an exit is chained or blocked by pallets → clear and restore the egress path immediately; if travel distance or common path exceeds limits → add exits or redesign layout \u2014 not a longer drill speech; if occupant load increases with a renovation → recalculate exits and capacity; if only a louder alarm is proposed for a blocked stair → fix the stair \u2014 detection does not replace egress; if two answers work → higher hierarchy / system / design. Scoring favors evidence, owners, verification, and hierarchy-smart controls on life safety. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Life safety — can they actually get out?",
  cardBack:
    "Exit access + exit + discharge. Occupant load, two ways out, unlocked. Attractive wrong answer: “we sprinkled it” or a padlock for security. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence includes the three parts of means of egress and says sprinklers do not replace a required second exit.",
};

export const items: ClassItem[] = [
  exam(T, "Mezzanine adds 40 people. Architect proposes one stair because sprinklers are going in. Occupant load and travel still point to two exits. Best CSP comment?", [
    "Approve one stair — sprinklers substitute for the second exit.",
    "Specify a second remote stair (or reduce occupant load). Sprinklers are not a means of egress.",
    "Add more extinguishers instead of a stair.",
    "Rely on a better fire drill.",
  ], 1, "Protection is not a path. Two ways out when the stem still requires them.", "HIER", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "NFPA 101 Life Safety Code egress concepts",
      fieldTakeaway: "Means of egress = exit access + exit + exit discharge. Number of exits, travel distance, common path, and door swing follow occupant load. Sprinklers help; they do not erase a second way out when the stem still requir... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Night-shift security padlocks the warehouse exit to stop shrinkage. Best life-safety position?", [
    "Approve after 6 p.m. — occupancy is low.",
    "Occupied buildings do not get padlocked exits. Use listed delayed-egress or access control that still fail-safe to open.",
    "Approve if a manager has the key in a car.",
    "Approve if sprinklers are on.",
  ], 1, "Locked egress is a fail. Time of day is not a code path.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "NFPA 101 Life Safety Code egress concepts",
      fieldTakeaway: "Means of egress = exit access + exit + exit discharge. Number of exits, travel distance, common path, and door swing follow occupant load. Sprinklers help; they do not erase a second way out when the stem still requir... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A fire door on the protected stair is chocked open for forklift airflow. Best control?", [
    "Leave it — airflow is production.",
    "Remove the chock; specify hold-opens that release on alarm if the door must be open operationally.",
    "Paint the chock red.",
    "Add a second chock.",
  ], 1, "The exit’s protection is the door. A chock is a defeated engineering control.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "NFPA 101 Life Safety Code egress concepts",
      fieldTakeaway: "Means of egress = exit access + exit + exit discharge. Number of exits, travel distance, common path, and door swing follow occupant load. Sprinklers help; they do not erase a second way out when the stem still requir... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Occupant load is calculated from 8,000 ft² at 200 ft²/person storage. Closest load to use for egress sizing?", [
    "8 people (used 1,000 ft²/person).",
    "40 people (8,000 / 200).",
    "8,000 people (forgot to divide).",
    "40 m² treated as 40 people.",
  ], 1, "Load = area / factor. UNIT/FORM: 8,000/200 = 40. Attractive wrong is skipping the divide.", "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "NFPA 101 Life Safety Code egress concepts",
      fieldTakeaway: "Means of egress = exit access + exit + exit discharge. Number of exits, travel distance, common path, and door swing follow occupant load. Sprinklers help; they do not erase a second way out when the stem still requir... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Common path of travel on the mezzanine exceeds the stem’s stated limit. One extra remote stair would cut it in half. Best action?", [
    "Add more exit signs on the same path.",
    "Add the remote stair (or relocate the work) so the common path drops below the limit.",
    "Add a louder alarm.",
    "Add a fire watch after 24 hours.",
  ], 1, "The constraint is path geometry. Signs do not shorten a common path.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "NFPA 101 Life Safety Code egress concepts",
      fieldTakeaway: "Means of egress = exit access + exit + exit discharge. Number of exits, travel distance, common path, and door swing follow occupant load. Sprinklers help; they do not erase a second way out when the stem still requir... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Exit discharge dumps into a fenced yard whose only gate is chained. Best comment?", [
    "Discharge is optional if the stair is wide.",
    "Means of egress includes discharge to the public way; unchain/design a listed, unobstructed discharge.",
    "Sprinklers in the yard fix it.",
    "A map in the break room fixes it.",
  ], 1, "Three parts. Discharge is the one teams forget.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "NFPA 101 Life Safety Code egress concepts",
      fieldTakeaway: "Means of egress = exit access + exit + exit discharge. Number of exits, travel distance, common path, and door swing follow occupant load. Sprinklers help; they do not erase a second way out when the stem still requir... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a warehouse second-shift startup. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Which is least consistent with life-safety design.", [
    "Two remote exits sized for occupant load.",
    "Doors that swing with travel where required.",
    "A laminated “in case of fire, run” card after three blocked-exit near misses, with no layout change.",
    "Unobstructed aisles marked and enforced as part of the drawing.",
  ], 2, "A poster after near-misses is not egress.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "NFPA 101 Life Safety Code egress concepts",
      fieldTakeaway: "Means of egress = exit access + exit + exit discharge. Number of exits, travel distance, common path, and door swing follow occupant load. Sprinklers help; they do not erase a second way out when the stem still requir... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Last sentence: “The AHJ will accept one exit if occupant load stays under 10.” Current plan is 40. Best remaining move?", [
    "Keep 40 and one stair because sprinklers.",
    "Cut the mezzanine occupancy under 10 or add the second exit — obey the last-sentence constraint.",
    "Keep 40 and add extinguishers.",
    "Keep 40 and report fires within 8 hours.",
  ], 1, "STEM: the last sentence gave the trade. Occupancy or exits, not sprinklers.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "NFPA 101 Life Safety Code egress concepts",
      fieldTakeaway: "Means of egress = exit access + exit + exit discharge. Number of exits, travel distance, common path, and door swing follow occupant load. Sprinklers help; they do not erase a second way out when the stem still requir... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Fire alarm vs second stair when both are in the budget but only one will be funded this quarter, and two exits are required. Best spend?", [
    "Alarm only — detection is egress.",
    "Second stair — the required means of egress beats a better alarm when you must choose.",
    "A nicer strobe.",
    "Insurance.",
  ], 1, "If two answers work, take system/design. The stair is the path.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "NFPA 101 Life Safety Code egress concepts",
      fieldTakeaway: "Means of egress = exit access + exit + exit discharge. Number of exits, travel distance, common path, and door swing follow occupant load. Sprinklers help; they do not erase a second way out when the stem still requir... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Which analysis belongs on the permit set, not after occupancy?", [
    "Injury log after the first blocked exit.",
    "Occupant-load, travel, common-path, and door-swing review written onto the drawings.",
    "FMEA on sign fonts.",
    "FTA after a fire.",
  ], 1, "Life-safety analysis must still change the stair locations.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "NFPA 101 Life Safety Code egress concepts",
      fieldTakeaway: "Means of egress = exit access + exit + exit discharge. Number of exits, travel distance, common path, and door swing follow occupant load. Sprinklers help; they do not erase a second way out when the stem still requir... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "After a small fire with no injury, a supervisor delays the OSHA-style report “because we have 24 hours” and also delays unlocking a chained discharge “until corporate arrives.” Separate the issues.", [
    "Both clocks are 24 hours, so the chain can wait.",
    "Reporting clocks (8 vs 24 h) are not egress: unlock the discharge now; reporting is a different TIME problem.",
    "Wait 8 hours to unlock.",
    "Wait 24 hours to unlock.",
  ], 1, "TIME vs life safety. Do not import recordkeeping clocks onto a locked gate.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "NFPA 101 Life Safety Code egress concepts",
      fieldTakeaway: "Means of egress = exit access + exit + exit discharge. Number of exits, travel distance, common path, and door swing follow occupant load. Sprinklers help; they do not erase a second way out when the stem still requir... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Finance prefers extra property insurance instead of a second stair that the load requires. Best position?", [
    "Insurance is an equivalent exit.",
    "Reject: insurance finances the loss; specify the stair.",
    "Keep one stair and a nicer alarm.",
    "Call the premium a leading life-safety metric.",
  ], 1, "FIN is not a means of egress.", "FIN", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "NFPA 101 Life Safety Code egress concepts",
      fieldTakeaway: "Means of egress = exit access + exit + exit discharge. Number of exits, travel distance, common path, and door swing follow occupant load. Sprinklers help; they do not erase a second way out when the stem still requir... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
