import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D1.03";

export const classFields: ClassFields = {
  hook: "A 12-ft process tank needs annual inspection. The contractor wants to pop the lid, wear a half-mask, and finish before lunch. You are the CSP. The question is whether this is a permit-required confined space and whether the atmosphere has been made right.",
  hookOilGas: `A 12-ft process vessel needs annual inspection. The contractor wants to pop the lid, wear a half-mask, and finish before lunch. You are the CSP. The question is whether this is a permit-required confined space and whether the atmosphere has been made right.`,
  hookConstruction: `A 12-ft tank on a site plant needs annual inspection. The contractor wants to pop the lid, wear a half-mask, and finish before lunch. You are the CSP. The question is whether this is a permit-required confined space and whether the atmosphere has been made right.`,
  rule: "Identify the space (limited entry, not designed for continuous occupancy, large enough to enter). If permit-required, isolate, ventilate, test in order oxygen → LEL → toxic, attendant, retrieval. The attendant is not the rescue team. PPE does not cancel the permit.",
  modelCaption:
    "Tank side view: manway, isolation blinds on process lines, mechanical ventilation in, attendant outside with the permit and a radio, retrieval tripod over the opening. Test-order banner: O₂ then LEL then toxic. Caption: a half-mask is not a ventilation plan; the attendant does not climb in.",
  workedCase:
    "Annual tank inspection. (1) It is a confined space; residue and configuration make it permit-required. (2) Isolate energy and product, drain, ventilate, test O₂-LEL-toxics, permit, attendant, non-entry retrieval. (3) If the contractor’s plan is “half-mask and lunch,” stop. Do not send the attendant in as rescue without a team, practice, and equipment.",
  trapsJson: traps(
    "Testing toxics first, or skipping oxygen.",
    "Using the attendant as the rescue team.",
    "Calling a half-mask a substitute for isolation and ventilation.",
  ),
  contrastJson: contrast([
    { looksLike: "Half-mask and a quick entry", actually: "PPE around an uncontrolled atmosphere" },
    { looksLike: "Isolate, ventilate, test O₂→LEL→toxic", actually: "Permit-space control order" },
    { looksLike: "Attendant climbing in when the entrant waves", actually: "Two victims — attendant is not rescue" },
    { looksLike: "Non-entry retrieval tripod ready", actually: "Designed rescue that does not add a body" },
  ]),
  mustScoreJson: mustScore(
    "Identify: limited entry, not designed for continuous occupancy, large enough to enter.",
    "Permit-required if atmospheric, engulfment, configuration, or other serious hazards exist.",
    "Test atmosphere before entry; ventilate; isolate energies; attendant required for permit spaces.",
    "Rescue plan before entry \u2014 not after someone is down.",
    "A blower alone does not erase an IDLH atmosphere without verification.",
    "Reclassify only with hazard elimination, not with hope and a radio.",
    "Non-permit spaces can become permit-required when conditions change.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "hazards can be eliminated so the space is reclassified", pick: "eliminate and document \u2014 do not permit for convenience" },
    { ifStem: "entry is needed with atmospheric or engulfment hazards", pick: "full permit program, attendant, and rescue" },
    { ifStem: "someone proposes entry to see if the air is bad", pick: "reject \u2014 test from outside first" },
    { ifStem: "rescue is assumed to be dialing 911 only", pick: "require a practiced rescue plan before entry" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
  ),

  brief: `Identify the space (limited entry, not designed for continuous occupancy, large enough to enter). If permit-required, isolate, ventilate, test in order oxygen â LEL â toxic, attendant, retrieval. The attendant is not the rescue team. PPE does not cancel the permit. If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Identify the space (limited entry, not designed for continuous occupancy, large enough to enter). If permit-required, isolate, ventilate, test in order oxygen â LEL â toxic, attendant, retrieval. The attendant is not the rescue team. PPE does not cancel the permit. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
A 12-ft process tank needs annual inspection. The contractor wants to pop the lid, wear a half-mask, and finish before lunch. You are the CSP. The question is whether this is a permit-required confined space and whether the atmosphere has been made right. Oil-and-gas skin: A 12-ft process vessel needs annual inspection. You are the CSP. Construction skin: A 12-ft tank on a site plant needs annual inspection. You are the CSP. Work the case: Annual tank inspection. (1) It is a confined space; residue and configuration make it permit-required. (2) Isolate energy and product, drain, ventilate, test Oâ-LEL-toxics, permit, attendant, non-entry retrieval. (3) If the contractorâs plan is âhalf-mask and lunch,â stop. Do not send the attendant in as rescue without a team, practice, and equipment. Classic traps: Testing toxics first, or skipping oxygen.; Using the attendant as the rescue team.; Calling a half-mask a substitute for isolation and ventilation.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for confined space. Verify whether a higher system or design fix is still open. Contrast labels: Half-mask and a quick entry is actually PPE around an uncontrolled atmosphere; Isolate, ventilate, test O₂→LEL→toxic is actually Permit-space control order; Attendant climbing in when the entrant waves is actually Two victims — attendant is not rescue; Non-entry retrieval tripod ready is actually Designed rescue that does not add a body. If the stem shows hazards can be eliminated so the space is reclassified, pick eliminate and document \u2014 do not permit for convenience. If the stem shows entry is needed with atmospheric or engulfment hazards, pick full permit program, attendant, and rescue. If the stem shows someone proposes entry to see if the air is bad, pick reject \u2014 test from outside first. If the stem shows rescue is assumed to be dialing 911 only, pick require a practiced rescue plan before entry. If the stem shows two answers work, pick higher hierarchy / system / design. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Confined space — must a body go in sits in CSP-11 Domain 1 Applied Safety Technology. The exam tests whether you apply the rule when a package already looks complete. Core rule: Identify the space (limited entry, not designed for continuous occupancy, large enough to enter). If permit-required, isolate, ventilate, test in order oxygen â LEL â toxic, attendant, retrieval. The attendant is not the rescue team. PPE does not cancel the permit. Field context: A 12-ft process tank needs annual inspection. The contractor wants to pop the lid, wear a half-mask, and finish before lunch. You are the CSP. The question is whether this is a permit-required confined space and whether the atmosphere has been made right. The oil-and-gas skin shifts the same decision into production pressure: A 12-ft process vessel needs annual inspection. You are the CSP. The construction skin shifts it into schedule and trade stacking: A 12-ft tank on a site plant needs annual inspection. You are the CSP. Model caption for this class: Tank side view: manway, isolation blinds on process lines, mechanical ventilation in, attendant outside with the permit and a radio, retrieval tripod over the opening. Test-order banner: Oâ then LEL then toxic. Caption: a half-mask is not a ventilation plan; the attendant does not climb in. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Identify: limited entry, not designed for continuous occupancy, large enough to enter. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Permit-required if atmospheric, engulfment, configuration, or other serious hazards exist. (3) Test atmosphere before entry; ventilate; isolate energies; attendant required for permit spaces. (4) Rescue plan before entry — not after someone is down. (5) A blower alone does not erase an IDLH atmosphere without verification. (6) Reclassify only with hazard elimination, not with hope and a radio. (7) Non-permit spaces can become permit-required when conditions change. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Annual tank inspection. (1) It is a confined space; residue and configuration make it permit-required. (2) Isolate energy and product, drain, ventilate, test Oâ-LEL-toxics, permit, attendant, non-entry retrieval. (3) If the contractorâs plan is âhalf-mask and lunch,â stop. Do not send the attendant in as rescue without a team, practice, and equipment. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Testing toxics first, or skipping oxygen.; Using the attendant as the rescue team.; Calling a half-mask a substitute for isolation and ventilation.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Half-mask and a quick entry” is really PPE around an uncontrolled atmosphere; “Isolate, ventilate, test O₂→LEL→toxic” is really Permit-space control order; “Attendant climbing in when the entrant waves” is really Two victims — attendant is not rescue; “Non-entry retrieval tripod ready” is really Designed rescue that does not add a body. Stem-if-then map: if hazards can be eliminated so the space is reclassified → eliminate and document \u2014 do not permit for convenience; if entry is needed with atmospheric or engulfment hazards → full permit program, attendant, and rescue; if someone proposes entry to see if the air is bad → reject \u2014 test from outside first; if rescue is assumed to be dialing 911 only → require a practiced rescue plan before entry; if two answers work → higher hierarchy / system / design. Scoring favors evidence, owners, verification, and hierarchy-smart controls on confined space. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Confined space — must a body go in?",
  cardBack:
    "Identify. Isolate, ventilate, test O₂→LEL→toxic, attendant, retrieval. Attractive wrong answer: half-mask before lunch, or sending the attendant in. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence includes identify permit vs non-permit / isolate-ventilate-test in order / attendant is not rescue.",
};

export const items: ClassItem[] = [
  exam(T, "Contractor plan for a 12-ft process tank: pop the lid, half-mask, done before lunch. Residue can off-gas. Best CSP position?", [
    "Approve — a half-mask is the hierarchy for tanks.",
    "Treat as permit-required: isolate, ventilate, test O₂ then LEL then toxic, attendant, retrieval. A mask does not cancel the permit.",
    "Approve if they finish within 8 hours.",
    "Approve if they finish within 24 hours.",
  ], 1, "PPE is last. TIME (8 vs 24 h) is a distractor; this is an entry control problem.", "HIER", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "OSHA 1910.146 permit-required confined spaces",
      fieldTakeaway: "Identify the space (limited entry, not designed for continuous occupancy, large enough to enter). If permit-required, isolate, ventilate, test in order oxygen → LEL → toxic, attendant, retrieval. The attendant is not... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at an offshore fabrication night shift. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Correct initial test order before entry.", [
    "Toxic, then LEL, then oxygen.",
    "Oxygen, then LEL / flammable, then toxic.",
    "LEL only if you smell something.",
    "Whatever the last user left the meter on.",
  ], 1, "O₂ first because flammable readings are not trustworthy in the wrong oxygen. Attractive wrong is toxics-first because “that’s the chemical we worry about.”", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "OSHA 1910.146 permit-required confined spaces",
      fieldTakeaway: "Identify the space (limited entry, not designed for continuous occupancy, large enough to enter). If permit-required, isolate, ventilate, test in order oxygen → LEL → toxic, attendant, retrieval. The attendant is not... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Oxygen reading is 19.5. A technician treats it as 19.5 ppm and says it is “tiny.” Best comment?", [
    "Agree — 19.5 ppm is negligible.",
    "19.5% oxygen is the low-alarm convention in many programs; 19.5 ppm is a toxic-scale UNIT error. Do not mix % and ppm.",
    "19.5 always means LEL.",
    "Convert 19.5% to 19.5 mmHg and enter.",
  ], 1, "UNIT: % oxygen vs ppm toxic. 19.5 ppm as a substitute for 19.5% is the field miss.", "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "OSHA 1910.146 permit-required confined spaces",
      fieldTakeaway: "Identify the space (limited entry, not designed for continuous occupancy, large enough to enter). If permit-required, isolate, ventilate, test in order oxygen → LEL → toxic, attendant, retrieval. The attendant is not... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Entrant stops answering. Attendant is a former firefighter. Best immediate action?", [
    "Attendant enters with a half-mask to pull the person out.",
    "Summon the designated rescue team and do not add a second unprotected entrant; use retrieval if already rigged.",
    "Wait 8 hours to see if they wake.",
    "Wait 24 hours then file a report.",
  ], 1, "Attendant is not the rescue team. TIME codes are for reporting clocks, not rescue delay.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "OSHA 1910.146 permit-required confined spaces",
      fieldTakeaway: "Identify the space (limited entry, not designed for continuous occupancy, large enough to enter). If permit-required, isolate, ventilate, test in order oxygen → LEL → toxic, attendant, retrieval. The attendant is not... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A camera and clean-in-place can inspect the tank without entry. Inspection has always been “a person inside.” Best PtD move?", [
    "Keep sending a person — tradition is a control.",
    "Specify remote inspection to eliminate entry.",
    "Keep entry but add a better poster.",
    "Keep entry and drop the attendant.",
  ], 1, "Eliminate the entry if the work still gets done. Tradition is not a hierarchy row.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "OSHA 1910.146 permit-required confined spaces",
      fieldTakeaway: "Identify the space (limited entry, not designed for continuous occupancy, large enough to enter). If permit-required, isolate, ventilate, test in order oxygen → LEL → toxic, attendant, retrieval. The attendant is not... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Agitator can still start. Space has been ventilated and tested. What is still missing?", [
    "Nothing — good air is enough.",
    "Isolation/LOTO of the agitator (and process lines) so mechanical energy cannot surprise the entrant.",
    "A second half-mask.",
    "A longer lunch.",
  ], 1, "Atmosphere is not the only permit hazard. Isolate energy.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "OSHA 1910.146 permit-required confined spaces",
      fieldTakeaway: "Identify the space (limited entry, not designed for continuous occupancy, large enough to enter). If permit-required, isolate, ventilate, test in order oxygen → LEL → toxic, attendant, retrieval. The attendant is not... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Last sentence: “Welding will be performed inside after the initial acceptable test.” Best action?", [
    "Keep the original non-permit label.",
    "Re-evaluate: welding can create a hazardous atmosphere; control as permit-required with ventilation and monitoring for the new hazard.",
    "Rely on the morning test for the whole shift.",
    "Issue sunglasses.",
  ], 1, "The last sentence changed the work. Reclassify. Morning test is not a welding control.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "OSHA 1910.146 permit-required confined spaces",
      fieldTakeaway: "Identify the space (limited entry, not designed for continuous occupancy, large enough to enter). If permit-required, isolate, ventilate, test in order oxygen → LEL → toxic, attendant, retrieval. The attendant is not... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a pharma suite changeover. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Which analysis belongs before the annual tank outage.", [
    "FTA after the first fatality.",
    "Entry planning: isolation points, ventilation, test method, rescue, and whether entry can be designed out.",
    "FMEA on mask color.",
    "Observation of lunch timing.",
  ], 1, "The plan must still be able to change isolation and rescue.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "OSHA 1910.146 permit-required confined spaces",
      fieldTakeaway: "Identify the space (limited entry, not designed for continuous occupancy, large enough to enter). If permit-required, isolate, ventilate, test in order oxygen → LEL → toxic, attendant, retrieval. The attendant is not... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Non-entry retrieval tripod will snag on internal baffles. Best rescue design?", [
    "Skip rescue planning.",
    "Plan a designated entry rescue team with practice, plus ventilation/isolation to make entry survivable; do not pretend the tripod works.",
    "Tell the attendant to “do their best.”",
    "File the rescue plan after 24 hours.",
  ], 1, "STEM: last constraint (baffles) kills the default tripod. Design the actual rescue.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "OSHA 1910.146 permit-required confined spaces",
      fieldTakeaway: "Identify the space (limited entry, not designed for continuous occupancy, large enough to enter). If permit-required, isolate, ventilate, test in order oxygen → LEL → toxic, attendant, retrieval. The attendant is not... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "LEL reads 8% of LEL in 20.9% oxygen. A supervisor says “8% oxygen, get out.” What happened?", [
    "Correct — 8% oxygen is immediately dangerous.",
    "UNIT/STEM mix-up: 8% of LEL is not 8% oxygen. Still control flammables toward 0% LEL, but do not treat the LEL reading as oxygen.",
    "8% of LEL equals 8 ppm.",
    "Ignore LEL whenever oxygen is 20.9%.",
  ], 1, "Attractive field panic: reading the wrong scale. Know %LEL vs %O₂ vs ppm.", "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "OSHA 1910.146 permit-required confined spaces",
      fieldTakeaway: "Identify the space (limited entry, not designed for continuous occupancy, large enough to enter). If permit-required, isolate, ventilate, test in order oxygen → LEL → toxic, attendant, retrieval. The attendant is not... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Host employer vs contractor: who owns the permit-space program?", [
    "Whoever arrives first.",
    "Host coordinates spaces, hazards, and entry; contractor executes its program; both verify isolation and rescue. Do not assume the other party did it.",
    "Only the contractor, always.",
    "Only OSHA, always.",
  ], 1, "Coordination is the control. Attractive wrong is dumping it entirely on the contractor.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "OSHA 1910.146 permit-required confined spaces",
      fieldTakeaway: "Identify the space (limited entry, not designed for continuous occupancy, large enough to enter). If permit-required, isolate, ventilate, test in order oxygen → LEL → toxic, attendant, retrieval. The attendant is not... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Finance wants to skip ventilation equipment and “just use SAR.” Isolation is still possible. Best position?", [
    "SAR is always the top control in tanks.",
    "Isolate and ventilate first; SAR is PPE for residual, not a license to skip making the atmosphere right.",
    "Skip both and work faster.",
    "Insurance instead of air movers.",
  ], 1, "Hierarchy inside the space: engineering the atmosphere beats living in a hose.", "HIER", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "OSHA 1910.146 permit-required confined spaces",
      fieldTakeaway: "Identify the space (limited entry, not designed for continuous occupancy, large enough to enter). If permit-required, isolate, ventilate, test in order oxygen → LEL → toxic, attendant, retrieval. The attendant is not... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
