import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D1.03";
const explain = (core: string, calc: string, standards: string, distractors: string) =>
  `Core Rule: ${core} Calculation Steps: ${calc} Standards Cited: ${standards} Why Each Distractor Fails: ${distractors}`;

export const classFields: ClassFields = {
  hook:
    "A 480 V MCC has an arc-flash label showing 18 cal/cm² at the documented working distance. Maintenance proposes to open the dead-front enclosure energized because “the shutdown takes two hours.” You are the CSP. The decision is whether the energized task is truly justified, then whether the protection matches the calculated hazard.",
  hookOilGas: `A 480 V MCC in a drilling facility has an arc-flash label showing 18 cal/cmÂ² at the documented working distance. Maintenance wants an energized inspection during the production window. You are the CSP. The decision is whether energized work can be designed out before discussing PPE.`,
  hookConstruction: `A temporary 480 V distribution board has an arc-flash study and maintenance wants an energized inspection to avoid a shutdown. You are the CSP. The first question is whether the work must be energized at all, not which arc-rated shirt is in the truck.`,
  rule:
    "Establish an electrically safe work condition whenever practical. Treat justified energized work as an exception requiring documented hazard/risk assessment, qualified personnel, boundaries, controls, and PPE matched to the calculated hazard. Incident energy depends on the electrical system and task conditions; changing working distance, clearing time, configuration, or maintenance state can change the result. An arc-flash boundary is an incident-energy concept; shock approach boundaries are separate. A qualified person is not permission to ignore isolation.",
  modelCaption:
    "Decision funnel: MUST IT BE ENERGIZED? → Can the task be redesigned (IR window, remote racking, outage, test point)? → If yes, STOP and design it out. If a true exception remains: hazard/risk assessment → establish boundaries → qualified worker → controls → arc-rated PPE. Side bar: incident energy ≠ shock approach distance.",
  workedCase:
    "Illustrative engineering check: a panel is labeled 18 cal/cm² at 18 in working distance. A retrofit can move inspection to a closed-door IR window; the worker no longer exposes the open bus, so the preferred control is redesign, not a heavier suit. If the retrofit is unavailable and a justified energized diagnostic remains, use the study/label for the documented task condition. Never substitute an arbitrary PPE rating for the study. For a simple distance sensitivity illustration only, if incident energy followed an inverse-distance approximation, E2 = E1(d1/d2)^2: at 36 in, E2 ≈ 18×(18/36)^2 = 4.5 cal/cm². Real arc-flash calculations depend on the applicable model and system parameters; do not use inverse-square as a universal arc-flash formula.",
  trapsJson: traps(
    "Calling an 8 cal/cm² shirt adequate because the job is short while the label shows 18 cal/cm².",
    "Treating limited/restricted approach boundaries as the arc-flash boundary.",
    "Assuming a qualified electrician makes de-energization optional.",
  ),
  contrastJson: contrast([
    { looksLike: "Qualified + PPE", actually: "Residual controls after the energized exception is justified" },
    { looksLike: "IR window / remote operation", actually: "Engineering design that removes the open-door exposure" },
    { looksLike: "Arc-flash boundary", actually: "Incident-energy concept" },
    { looksLike: "Restricted approach boundary", actually: "Shock protection concept" },
    { looksLike: "18 cal/cm² label", actually: "Task-specific incident-energy information, not a universal PPE shortcut" },
  ]),
  mustScoreJson: mustScore(
    "Arc flash: incident energy, boundaries, and PPE categories after justified energized work.",
    "De-energize remains primary \u2014 labels do not authorize convenience live work.",
    "Working distance and clearing time drive energy calculations.",
    "Maintenance of overcurrent devices affects incident energy.",
    "Remote racking and design reduce exposure.",
    "Shock and arc boundaries are different concepts.",
    "Hierarchy: eliminate exposure by design/isolation.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "de-energizing feasible", pick: "establish electrically safe work condition" },
    { ifStem: "only buy higher PPE while remote racking open", pick: "design out exposure" },
    { ifStem: "clearing time changes", pick: "recalculate incident energy/PPE needs" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "shock boundary confused with arc boundary", pick: "apply each correctly" },
  ),

  brief: `Establish an electrically safe work condition whenever practical. Treat justified energized work as an exception requiring documented hazard/risk assessment, qualified personnel, boundaries, controls, and PPE matched to the calculated hazard. Incident energy depends on the electrical system and task conditions; changing working distance, clearing time, configuration, or maintenance state can change the result. An arc-flash If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Establish an electrically safe work condition whenever practical. Treat justified energized work as an exception requiring documented hazard/risk assessment, qualified personnel, boundaries, controls, and PPE matched to the calculated hazard. Incident energy depends on the electrical system and task conditions; changing working distance, clearing time, configuration, or maintenance state can change the result. An arc-flash boundary is an incident-energy concept; shock approach boundaries are separate. A qualified person is not permission to ignore isolation. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
A 480 V MCC has an arc-flash label showing 18 cal/cmÂ² at the documented working distance. Maintenance proposes to open the dead-front enclosure energized because âthe shutdown takes two hours.â You are the CSP. The decision is whether the energized task is truly justified, then whether the protection matches the calculated hazard. Oil-and-gas skin: A 480 V MCC in a drilling facility has an arc-flash label showing 18 cal/cmÂ² at the documented working distance. Maintenance wants an energized inspection during the production window. You are the CSP. The decision is whether energized work can be designed out before discussing PPE. Construction skin: A temporary 480 V distribution board has an arc-flash study and maintenance wants an energized inspection to avoid a shutdown. You are the CSP. The first question is whether the work must be energized at all, not which arc-rated shirt is in the truck. Work the case: Illustrative engineering check: a panel is labeled 18 cal/cmÂ² at 18 in working distance. A retrofit can move inspection to a closed-door IR window; the worker no longer exposes the open bus, so the preferred control is redesign, not a heavier suit. If the retrofit is unavailable and a justified energized diagnostic remains, use the study/label for the documented task condition. Never substitute an arbitrary PPE rating for the study. For a simple distance sensitivity illustration only, if incident energy followed an inverse-distance approximation, E2 = E1(d1/d2)^2: at 36 in, E2 â 18Ã(18/36)^2 = 4.5 cal/cmÂ². Real arc-flash calculations depend on the applicable model and system parameters; do not use inverse-square as a universal arc-flash formula. Classic traps: Calling an 8 cal/cm² shirt adequate because the job is short while the label shows 18 cal/cm².; Treating limited/restricted approach boundaries as the arc-flash boundary.; Assuming a qualified electrician makes de-energization optional.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for arc flash engineering. Verify whether a higher system or design fix is still open. Contrast labels: Qualified + PPE is actually Residual controls after the energized exception is justified; IR window / remote operation is actually Engineering design that removes the open-door exposure; Arc-flash boundary is actually Incident-energy concept; Restricted approach boundary is actually Shock protection concept; 18 cal/cm² label is actually Task-specific incident-energy information, not a universal PPE shortcut. If the stem shows de-energizing feasible, pick establish electrically safe work condition. If the stem shows only buy higher PPE while remote racking open, pick design out exposure. If the stem shows clearing time changes, pick recalculate incident energy/PPE needs. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows shock boundary confused with arc boundary, pick apply each correctly. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Arc flash — what comes before PPE sits in CSP-11 Domain 1 Applied Safety Technology. The exam tests whether you apply the rule when a package already looks complete. Core rule: Establish an electrically safe work condition whenever practical. Treat justified energized work as an exception requiring documented hazard/risk assessment, qualified personnel, boundaries, controls, and PPE matched to the calculated hazard. Incident energy depends on the electrical system and task conditions; changing working distance, clearing time, configuration, or maintenance state can change the result. An arc-flash boundary is an incident-energy concept; shock approach boundaries are separate. A qualified person is not permission to ignore isolation. Field context: A 480 V MCC has an arc-flash label showing 18 cal/cmÂ² at the documented working distance. Maintenance proposes to open the dead-front enclosure energized because âthe shutdown takes two hours.â You are the CSP. The decision is whether the energized task is truly justified, then whether the protection matches the calculated hazard. The oil-and-gas skin shifts the same decision into production pressure: A 480 V MCC in a drilling facility has an arc-flash label showing 18 cal/cmÂ² at the documented working distance. Maintenance wants an energized inspection during the production window. You are the CSP. The decision is whether energized work can be designed out before discussing PPE. The construction skin shifts it into schedule and trade stacking: A temporary 480 V distribution board has an arc-flash study and maintenance wants an energized inspection to avoid a shutdown. You are the CSP. The first question is whether the work must be energized at all, not which arc-rated shirt is in the truck. Model caption for this class: Decision funnel: MUST IT BE ENERGIZED? â Can the task be redesigned (IR window, remote racking, outage, test point)? â If yes, STOP and design it out. If a true exception remains: hazard/risk assessment â establish boundaries â qualified worker â controls â arc-rated PPE. Side bar: incident energy â  shock approach distance. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Arc flash: incident energy, boundaries, and PPE categories after justified energized work. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) De-energize remains primary — labels do not authorize convenience live work. (3) Working distance and clearing time drive energy calculations. (4) Maintenance of overcurrent devices affects incident energy. (5) Remote racking and design reduce exposure. (6) Shock and arc boundaries are different concepts. (7) Hierarchy: eliminate exposure by design/isolation. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Illustrative engineering check: a panel is labeled 18 cal/cmÂ² at 18 in working distance. A retrofit can move inspection to a closed-door IR window; the worker no longer exposes the open bus, so the preferred control is redesign, not a heavier suit. If the retrofit is unavailable and a justified energized diagnostic remains, use the study/label for the documented task condition. Never substitute an arbitrary PPE rating for the study. For a simple distance sensitivity illustration only, if incident energy followed an inverse-distance approximation, E2 = E1(d1/d2)^2: at 36 in, E2 â 18Ã(18/36)^2 = 4.5 cal/cmÂ². Real arc-flash calculations depend on the applicable model and system parameters; do not use inverse-square as a universal arc-flash formula. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Calling an 8 cal/cm² shirt adequate because the job is short while the label shows 18 cal/cm².; Treating limited/restricted approach boundaries as the arc-flash boundary.; Assuming a qualified electrician makes de-energization optional.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Qualified + PPE” is really Residual controls after the energized exception is justified; “IR window / remote operation” is really Engineering design that removes the open-door exposure; “Arc-flash boundary” is really Incident-energy concept; “Restricted approach boundary” is really Shock protection concept; “18 cal/cm² label” is really Task-specific incident-energy information, not a universal PPE shortcut. Stem-if-then map: if de-energizing feasible → establish electrically safe work condition; if only buy higher PPE while remote racking open → design out exposure; if clearing time changes → recalculate incident energy/PPE needs; if two answers work → higher hierarchy / system / design; if shock boundary confused with arc boundary → apply each correctly. Scoring favors evidence, owners, verification, and hierarchy-smart controls on arc flash engineering. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Arc flash — what comes before PPE?",
  cardBack:
    "Establish an electrically safe work condition; redesign the task if possible. Only after a justified energized exception remains do boundaries, qualified personnel, and hazard-matched PPE become the main controls. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the answer starts with de-energization/design-out, distinguishes arc-flash from shock boundaries, and treats PPE as residual protection after a justified energized exception.",
  formulaSlug: null,
};

export const items: ClassItem[] = [
  exam(T, "An MCC can be fitted with an IR window so the thermography task is performed with the enclosure closed. Maintenance still prefers an energized open-door scan. Best CSP decision?", [
    "Issue a 40 cal/cm² suit and continue the open-door scan.",
    "Specify the IR window and remove the need for the open energized exposure.",
    "Allow the scan because the technician is qualified.",
    "Add a second observer and keep the bus exposed.",
  ], 1, explain(
    "Use engineering design to remove the energized exposure when the task can be performed without opening the enclosure.",
    "No arc-flash calculation is needed to choose the superior control because the task can be redesigned out.",
    "NFPA 70E electrical safety principles; PtD/hierarchy logic.",
    "A fails because PPE does not eliminate the avoidable exposure; C confuses qualification with permission; D adds administration around an exposure that engineering can remove."
  ), "HIER", "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Establish an electrically safe work condition whenever practical. Treat justified energized work as an exception requiring documented hazard/risk assessment, qualified personnel, boundaries, controls, and PPE matched... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A label states 18 cal/cm² at the documented working distance. A worker arrives with 8 cal/cm² clothing and says the task takes 20 seconds. What is the primary concern?", [
    "Duration makes 8 cal/cm² acceptable.",
    "The protection does not match the documented incident-energy hazard, and the energized task itself should be reconsidered.",
    "The only issue is that the worker needs a second person.",
    "The label can be ignored if voltage is 480 V.",
  ], 1, explain(
    "PPE must be appropriate to the hazard, and the first question remains whether energized work is justified.",
    "Compare the stated 18 cal/cm² hazard with the proposed 8 cal/cm² rating; the proposed value is below the documented energy level.",
    "NFPA 70E arc-flash risk-control framework.",
    "A incorrectly treats time as a substitute for hazard assessment; C focuses on staffing rather than the primary hazard; D assumes voltage alone defines incident energy."
  ), "STEM", "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Establish an electrically safe work condition whenever practical. Treat justified energized work as an exception requiring documented hazard/risk assessment, qualified personnel, boundaries, controls, and PPE matched... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Which boundary concept is specifically tied to incident energy rather than electric-shock approach?", [
    "Limited approach boundary.",
    "Restricted approach boundary.",
    "Arc-flash boundary.",
    "Equipment grounding boundary.",
  ], 2, explain(
    "The arc-flash boundary is the incident-energy decision boundary; approach boundaries are shock-related concepts.",
    "No numerical calculation is required; identify the type of hazard the boundary addresses.",
    "NFPA 70E terminology and electrical hazard/risk assessment framework.",
    "A and B address shock approach; D is not the defined incident-energy boundary."
  ), "FORM", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Establish an electrically safe work condition whenever practical. Treat justified energized work as an exception requiring documented hazard/risk assessment, qualified personnel, boundaries, controls, and PPE matched... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A panel is labeled 18 cal/cm² at 18 in. For an illustrative inverse-distance sensitivity only, what would a simple E2=E1(d1/d2)^2 estimate give at 36 in?", [
    "72 cal/cm².",
    "18 cal/cm².",
    "9 cal/cm².",
    "4.5 cal/cm².",
  ], 3, explain(
    "When the question explicitly provides the simplified relationship, doubling distance gives one-quarter of the estimated energy.",
    "E2=18×(18/36)^2=18×0.25=4.5 cal/cm².",
    "The relationship is an illustrative sensitivity exercise, not a universal arc-flash formula; actual studies use the applicable engineering method.",
    "A reverses the distance effect; B ignores the stated relationship; C halves instead of quarters."
  ), "UNIT", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Establish an electrically safe work condition whenever practical. Treat justified energized work as an exception requiring documented hazard/risk assessment, qualified personnel, boundaries, controls, and PPE matched... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "An electrician is qualified and the shutdown is inconvenient but feasible. Which position is strongest?", [
    "Qualified status justifies energized work.",
    "Convenience is a greater hazard than de-energization.",
    "De-energize and establish an electrically safe work condition.",
    "Use PPE and proceed energized.",
  ], 2, explain(
    "A feasible de-energization should be preferred over energized work that is merely more convenient.",
    "There is no calculation; compare the control hierarchy and stated conditions.",
    "NFPA 70E electrical safety program principles; hierarchy of controls.",
    "A and D confuse qualification/PPE with permission; B invents a greater-hazard condition not supported by the stem."
  ), "HIER", "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Establish an electrically safe work condition whenever practical. Treat justified energized work as an exception requiring documented hazard/risk assessment, qualified personnel, boundaries, controls, and PPE matched... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "The same 18 cal/cm² label is used after a major switchgear modification that changed available fault current. Best CSP action?", [
    "Keep the old label permanently.",
    "Update the engineering study/label for the changed system condition before relying on it.",
    "Add thicker gloves only.",
    "Ignore the change because voltage is unchanged.",
  ], 1, explain(
    "Electrical-system modifications can change the conditions underlying the arc-flash assessment.",
    "Trigger engineering review after the change; do not treat the old label as automatically valid.",
    "NFPA 70E hazard/risk assessment concepts; management-of-change principles from the CSP blueprint.",
    "A freezes obsolete information; C is residual PPE rather than engineering validation; D assumes unchanged voltage means unchanged incident energy."
  ), "STEM", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Establish an electrically safe work condition whenever practical. Treat justified energized work as an exception requiring documented hazard/risk assessment, qualified personnel, boundaries, controls, and PPE matched... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Why is a qualified person not automatically entitled to work energized?", [
    "Because qualification is only administrative.",
    "Because qualification establishes ability; the separate question is whether energized work is justified and controlled.",
    "Because qualified persons cannot use PPE.",
    "Because all electrical work is prohibited.",
  ], 1, explain(
    "Qualification is a competency criterion, not a substitute for the energized-work decision.",
    "Separate person qualification from task justification and hazard controls.",
    "NFPA 70E electrical safety framework.",
    "A minimizes qualification; C is false; D overstates the rule."
  ), "STEM", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Establish an electrically safe work condition whenever practical. Treat justified energized work as an exception requiring documented hazard/risk assessment, qualified personnel, boundaries, controls, and PPE matched... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A maintenance strategy installs remote racking so operators do not stand at the equipment during breaker operation. What control category best describes this?", [
    "PPE.",
    "Administrative.",
    "Engineering/design control.",
    "Risk transfer.",
  ], 2, explain(
    "Remote operation changes the physical exposure path and removes the worker from the hazard zone.",
    "No arithmetic is required; classify the control by how it changes exposure.",
    "ANSI/ASSP Z10 hierarchy concepts plus NFPA 70E electrical safety practice.",
    "A adds protection after exposure; B depends on behavior; D finances consequence rather than controlling the hazard."
  ), "HIER", "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Establish an electrically safe work condition whenever practical. Treat justified energized work as an exception requiring documented hazard/risk assessment, qualified personnel, boundaries, controls, and PPE matched... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A study result is 6.2 cal/cm², but the answer choices are 5, 6, 10, and 20. The stem asks for the closest value. Best selection?", [
    "5.",
    "6.",
    "10.",
    "20.",
  ], 1, explain(
    "When the stem asks for the closest value, use the computed result and select the nearest option without premature rounding.",
    "6.2 is 0.2 from 6, 1.2 from 5, 3.8 from 10, and 13.8 from 20.",
    "General CSP quantitative decision-making; use the study/model specified in the question.",
    "A is farther away; C and D are increasingly distant."
  ), "UNIT", "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Establish an electrically safe work condition whenever practical. Treat justified energized work as an exception requiring documented hazard/risk assessment, qualified personnel, boundaries, controls, and PPE matched... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A technician says the restricted approach distance and the arc-flash boundary are interchangeable because both are measured in feet. Best response?", [
    "Correct; any electrical boundary is the same.",
    "Incorrect; the boundaries address different hazards and are not interchangeable.",
    "Correct only above 600 V.",
    "Correct only when PPE exceeds 8 cal/cm².",
  ], 1, explain(
    "Different boundary definitions correspond to different electrical hazards and decision criteria.",
    "No arithmetic is required; classify the boundary by hazard type.",
    "NFPA 70E electrical safety terminology.",
    "A, C, and D invent conditions that do not merge the two concepts."
  ), "STEM", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Establish an electrically safe work condition whenever practical. Treat justified energized work as an exception requiring documented hazard/risk assessment, qualified personnel, boundaries, controls, and PPE matched... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A facility discovers maintenance has not been performed on the breakers used in the arc-flash study. What should the CSP recognize?", [
    "Maintenance cannot affect incident energy.",
    "The calculated clearing behavior may no longer represent field performance, so maintenance status belongs in the risk review.",
    "Only the PPE label matters.",
    "The problem is limited to housekeeping.",
  ], 1, explain(
    "Electrical maintenance can affect whether the modeled protective device operates as expected.",
    "Treat maintenance condition as an input to the risk/engineering review rather than assuming the model always matches field behavior.",
    "NFPA 70E maintenance and hazard assessment concepts; CSP system-management principles.",
    "A ignores clearing performance; C ignores engineering assumptions; D misclassifies a protective-system issue."
  ), "TOOL", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Establish an electrically safe work condition whenever practical. Treat justified energized work as an exception requiring documented hazard/risk assessment, qualified personnel, boundaries, controls, and PPE matched... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A worker proposes a second observer as the main control for an avoidable energized open-door task. What is wrong with the proposal?", [
    "Observers are never useful.",
    "A second observer may be an additional control in a justified task, but it does not replace designing out or de-energizing the exposure.",
    "Observers create arc flash.",
    "Only managers can observe energized work.",
  ], 1, explain(
    "Administrative support can supplement but does not replace higher-order engineering controls.",
    "First ask whether the exposure can be eliminated; only then layer administrative safeguards for the residual task.",
    "Hierarchy of controls; NFPA 70E electrical safety framework.",
    "A is absolute; C is nonsensical; D invents a personnel restriction."
  ), "HIER", "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Establish an electrically safe work condition whenever practical. Treat justified energized work as an exception requiring documented hazard/risk assessment, qualified personnel, boundaries, controls, and PPE matched... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
