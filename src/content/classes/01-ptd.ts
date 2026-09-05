import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D1.01";

export const classFields: ClassFields = {
  hook: "A project team is buying a new solvent line. Engineering wants extra exhaust and more PPE. You are the CSP on design review. The question is whether the hazard must exist at all.",
  hookOilGas:
    "A project team is specifying solvent service on a new process unit. Engineering wants extra exhaust and more PPE. You are the CSP on design review. The question is whether the hazard must exist at all.",
  hookConstruction:
    "A project team is specifying a new site wash station. Engineering wants extra exhaust and more PPE. You are the CSP on design review. The question is whether the hazard must exist at all.",
  rule: "Prevention through Design moves control to the decision that creates the hazard: material, layout, energy, process. If a safer substance or layout is still possible, that beats add-on ventilation and PPE. Include maintainers in the life cycle: concept → design → build → operate/maintain/retire.",
  modelCaption:
    "Four boxes in time: Concept/material → Detailed design → Build/commission → Operate/maintain/retire. Under the first two: ELIMINATE / SUBSTITUTE. Under the last two: ENGINEERING / ADMIN / PPE. Caption: cost of change rises as you move right.",
  workedCase:
    "(1) Ask whether the flammable solvent washer can leave — aqueous or non-flammable cleaner. (2) If solvent remains, enclose and interlock the washer on the drawing. (3) Only then LEL sensors, fire watch, schedule, and respirators. Losing answer: buy better respirators while substitution or enclosure is still open.",
  trapsJson: traps(
    "Calling a new glove PtD.",
    "Beautiful LEV while a water-based process was available.",
    "Ignoring maintainers who must enter an unguarded cell.",
  ),
  contrastJson: contrast([
    { looksLike: "New respirator program", actually: "PPE — last on the hierarchy" },
    { looksLike: "Change to aqueous cleaner", actually: "Substitution / PtD at concept" },
    { looksLike: "Enclose the washer", actually: "Engineering — still design if drawings can change" },
    { looksLike: "Toolbox talk", actually: "Administrative" },
  ]),
  mustScoreJson: mustScore(
    "PtD moves control to the decision that creates the hazard.",
    "Life cycle includes maintainers: concept → design → build → operate/maintain/retire.",
    "If a safer material or layout is still open, that beats add-on LEV and PPE.",
    "Cost of change rises after construction — last sentence can freeze a row.",
    "A poster after injuries is not Prevention through Design.",
    "Insurance and medical surveillance finance residual risk; they do not remove the hazard.",
    "Analysis must still be able to change the drawing.",
    "Exam default: if two answers work, take higher hierarchy / system / design.",
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "a safer chemical or layout is still on the option sheet", pick: "substitution or elimination" },
    { ifStem: "the purchase order froze the machine but the room can still change", pick: "enclosure and engineered ventilation" },
    { ifStem: "maintenance jogs from an unprotected side", pick: "designed access and interlocks for maintainers" },
    { ifStem: "finance offers insurance instead of the safer process", pick: "reject — insurance is not PtD" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "the last sentence says the drawing is frozen", pick: "the highest remaining engineered add-on, not a training card" },
  ),
  brief: `PtD = remove the hazard in concept and design. Prefer eliminate/substitute. Think maintenance. Cost rises after construction. If the stem still allows a different process or layout, that is the answer. Exam default: if two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Prevention through Design moves control to the decision that creates the hazard — material, layout, energy, or process. If a safer substance or layout is still possible, that beats add-on ventilation and PPE. Keep maintainers inside the life cycle: concept → design → build → operate/maintain/retire. PtD uses the hierarchy of controls; it does not replace it. The exam will sell you a late-cycle control dressed as design: detectors, permits, respirators, and posters that look busy while an earlier decision is still open.

Field move
On design review for a new solvent line, engineering asks for extra exhaust and more PPE. Ask first whether the hazard must exist. Aqueous cleaner or a non-flammable process is substitution at concept. If solvent remains, enclose and interlock on the drawing. Sensors, fire watch, and respirators come last. Relocate a mezzanine valve to grade while steel is unordered. Specify 24 V at the operator station while the electrical drawing is open. Design rear interlocks for maintenance jog modes so maintainers are not an afterthought. Specify a quieter press or enclose noise on the drawing before you fund custom muffs. Interlock a vehicle restraint and dock leveler to the overhead door rather than staffing an open pit with a spotter. Redraw the four time boxes before you look at options: eliminate and substitute early; engineering, admin, and PPE later. Cost of change rises as you move right.

Exam
If two answers work, take higher hierarchy / system / design. The last sentence can freeze a row: "PO issued and non-cancellable," "customer-specified chemistry," "drawing freeze yesterday." Then take the highest remaining engineered control, not a laminated poster. A think-safety card after three recordables is not PtD. Extra liability insurance is risk financing, not hazard removal. Medical surveillance documents exposure; it does not erase substitution while a safer process is still listed. Design-stage JHA / what-if must still be able to change the drawing — waiting for the first lost-time before FTA is the wrong time. Brownfield constraints shrink open rows; they do not invert the pyramid. When capital remains after a freeze, spend it on enclosure and engineered ventilation, then use admin and PPE only for residual.`,
  deep: `NIOSH describes Prevention through Design as addressing occupational safety and health in the design of facilities, processes, equipment, tools, and work organization across the life cycle. It uses the hierarchy of controls; it does not replace it. CSP-11 Domain 1 Applied Safety Technology-cycle decision when the package already includes detectors, permits, and PPE. The attractive wrong answer is almost always a competent late-cycle program that looks funded, audited, and professional.

Life cycle is the scoring key. Concept and material selection still allow elimination and substitution. Detailed design still allows layout, energy, enclosure, and access choices. After steel is ordered or a purchase order is non-cancellable, remaining degrees of freedom shrink to engineering add-ons, then administrative programs, then PPE. Maintainers are users of the design. A robot cell with a light curtain only on the operator side fails PtD if maintenance jogs from the rear with power on. Walk-in filter access beats a housing that becomes a permit-required confined space after construction. Loading docks that show trucks backing to an open pit still own a design choice: specify restraint and interlocked levelers rather than staffing the hazard with a spotter and wheel chocks. Floor slope to a contained drain before construction is PtD; a mop bucket after the first spill is not.

Cost of change explains why the last sentence matters. If the drawing is not frozen, relocate the mezzanine valve to grade. If the solvent cannot be dropped on a brownfield unit, take the dedicated ventilated room rather than portable fans and PPE. If adhesive Y is not a sensitizer and X is, specify Y at design freeze even if clamp time grows. Specify energy at the point of use while the electrical drawing is open: 24 V at the operator station beats 480 V plus arc-rated shirts. Specify a quieter press on the purchase sheet before you build a hearing-conservation empire around a 110 dBA machine that has not been ordered. When the PO for the wrong washer is already non-cancellable, remaining PtD is enclose, ventilate, and interlock — not classroom training alone. When capital remains after a freeze, spend it on the highest remaining hardware, then use admin and PPE only for residual.

Do not call a laminated think-safety card after three recordables "PtD." That is a poster after injuries. Do not wait for the first lost-time before running FTA; design-stage JHA / what-if must still be able to change the drawing. Do not accept extra liability insurance as a substitute for removing the flammable atmosphere — that is risk financing, not hazard control. Medical surveillance and fit testing document residual exposure after higher rows are closed; they do not authorize skipping a still-open substitute. Residual risk is allowed after higher rows are honestly closed. Brownfield units and customer-specified chemistry shrink the open rows; then you take the highest remaining hardware and say so. A PEL or TLV number is not permission to skip substitution while a safer process is still on the approved list.

Units rarely appear in this class, but the calculator pitfall still applies later in the catalog: pick the closest rounded value, DEG not RAD, and do not invent a formula sheet. For PtD items the "math" is which row the last sentence left open. Tool choice belongs where it can still change the layout — FMEA scored only on cartridge change and observation cards after occupancy do not climb the pyramid. Process-safety inventory decisions rhyme with this class: minimize and substitute before you fund more detectors and a bigger fire team. Compare two layouts while both are still pencil marks: grade-level mixers versus a mezzanine, aqueous washer versus solvent, enclosed robot versus floor tape. Write the chosen control into the drawing, the purchase order, and the maintenance access package. Exam default: if two answers work, take higher hierarchy / system / design. Hold that sentence on every Domain 1 stem.`,
  cardFront: "PtD — what decision do you control?",
  cardBack:
    "Rule: control the decision that creates the hazard. Life cycle includes maintainers. Attractive wrong answer: more PPE or more sensors. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence includes design-stage control / life cycle including maintenance / eliminate or substitute before PPE.",
  formulaSlug: null,
};

export const items: ClassItem[] = [
  exam(T, "New parts washer: A = flammable solvent + LEL + LEV + respirators. B = heated aqueous detergent in a closed interlocked cabinet, 18% higher capital. Best PtD recommendation?", [
    "Approve A and tighten cartridge change.",
    "Approve B to remove the flammable atmosphere.",
    "Approve A plus fire watch.",
    "Delay both and require only classroom training.",
  ], 1, "Substitution at concept beats layers around the original solvent.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "NIOSH Prevention through Design; hierarchy of controls",
      fieldTakeaway: "Prevention through Design moves control to the decision that creates the hazard: material, layout, energy, process. If a safer substance or layout is still possible, that beats add-on ventilation and PPE. Include main... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Mezzanine valve at 4.2 m with no platform. Operations: we will use a ladder. Strongest PtD comment?", [
    "Harnesses and 100% tie-off.",
    "Relocate valve to grade or add a fixed platform on the drawing.",
    "Add a JSA to commissioning.",
    "Train night shift on ladder angle.",
  ], 1, "The drawing still creates work at height.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "NIOSH Prevention through Design; hierarchy of controls",
      fieldTakeaway: "Prevention through Design moves control to the decision that creates the hazard: material, layout, energy, process. If a safer substance or layout is still possible, that beats add-on ventilation and PPE. Include main... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Robot cell has a light curtain only on the operator side. Maintenance jogs from the rear with power on. Best life-cycle design change?", [
    "Authorized-persons sign.",
    "Rear interlocked gate and designed maintenance mode.",
    "Spotter.",
    "Cut-resistant sleeves.",
  ], 1, "Maintainers are users of the design.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "NIOSH Prevention through Design; hierarchy of controls",
      fieldTakeaway: "Prevention through Design moves control to the decision that creates the hazard: material, layout, energy, process. If a safer substance or layout is still possible, that beats add-on ventilation and PPE. Include main... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a pharma suite changeover. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: NIOSH PtD is best described as:.", [
    "Better hard hats at procurement.",
    "Addressing safety in design of facilities, processes, equipment, tools, and work across the life cycle.",
    "An OSHA citation type.",
    "A replacement for the hierarchy.",
  ], 1, "PtD uses the hierarchy; it does not replace it.", "STEM", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "NIOSH Prevention through Design; hierarchy of controls",
      fieldTakeaway: "Prevention through Design moves control to the decision that creates the hazard: material, layout, energy, process. If a safer substance or layout is still possible, that beats add-on ventilation and PPE. Include main... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Adhesive X is a sensitizer; Y is not but needs 10 more minutes clamp time. Production wants X. Best CSP position at design freeze?", [
    "Accept X plus medical surveillance.",
    "Specify Y.",
    "Accept X plus respirators.",
    "Let each shift choose.",
  ], 1, "Material choice is PtD substitution.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "NIOSH Prevention through Design; hierarchy of controls",
      fieldTakeaway: "Prevention through Design moves control to the decision that creates the hazard: material, layout, energy, process. If a safer substance or layout is still possible, that beats add-on ventilation and PPE. Include main... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Brownfield cannot drop the solvent. Budget allows either a dedicated ventilated room or portable fans plus PPE. Best remaining PtD move?", [
    "Fans and supplied-air.",
    "Dedicated room and engineered ventilation.",
    "Stop all washing.",
    "SOP only and call it ALARP.",
  ], 1, "When substitution is closed, use remaining design degrees of freedom.", "HIER", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "NIOSH Prevention through Design; hierarchy of controls",
      fieldTakeaway: "Prevention through Design moves control to the decision that creates the hazard: material, layout, energy, process. If a safer substance or layout is still possible, that beats add-on ventilation and PPE. Include main... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a hospital utility plant shutdown. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Least consistent with PtD.", [
    "Lower-voltage control in concept.",
    "Walk-in access for weekly filters.",
    "Laminated think-safety card after three recordables.",
    "Floor sloped to a contained drain before construction.",
  ], 2, "A poster after injuries is not design.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "NIOSH Prevention through Design; hierarchy of controls",
      fieldTakeaway: "Prevention through Design moves control to the decision that creates the hazard: material, layout, energy, process. If a safer substance or layout is still possible, that beats add-on ventilation and PPE. Include main... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Best use of analysis as a design aid before steel is ordered?", [
    "Wait for first lost-time then FTA.",
    "Design-stage review (JHA / what-if) on both layouts into the drawing.",
    "Observation cards for the contractor only.",
    "Buy software and skip the review.",
  ], 1, "Analysis must still be able to change the drawing.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "NIOSH Prevention through Design; hierarchy of controls",
      fieldTakeaway: "Prevention through Design moves control to the decision that creates the hazard: material, layout, energy, process. If a safer substance or layout is still possible, that beats add-on ventilation and PPE. Include main... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A stamping line is still on the drawing board. Production wants the existing 110 dBA press because operators already have muffs. Best CSP recommendation?", [
    "Keep the press and upgrade to custom-molded earplugs.",
    "Rotate operators every two hours and call it administrative PtD.",
    "Specify a quieter press or enclose the source on the drawing.",
    "Add a hearing-conservation SOP to commissioning only.",
  ], 2, "Noise is still a purchase and layout decision. Hearing conservation is not PtD while a quieter machine can be specified.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "NIOSH Prevention through Design; hierarchy of controls",
      fieldTakeaway: "Prevention through Design moves control to the decision that creates the hazard: material, layout, energy, process. If a safer substance or layout is still possible, that beats add-on ventilation and PPE. Include main... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Loading-dock concept shows trucks backing to an open pit. Operations proposes a spotter and wheel chocks. Strongest PtD comment?", [
    "High-visibility vests and a toolbox talk.",
    "Specify a vehicle restraint and dock leveler interlocked to the overhead door on the drawing.",
    "Driver-only procedure with cameras and no hardware.",
    "Require a JSA at first receipt.",
  ], 1, "The pit and the uncontrolled truck are still on the drawing. Interlock the restraint; do not staff the hazard.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "NIOSH Prevention through Design; hierarchy of controls",
      fieldTakeaway: "Prevention through Design moves control to the decision that creates the hazard: material, layout, energy, process. If a safer substance or layout is still possible, that beats add-on ventilation and PPE. Include main... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A solvent substitution study is complete and aqueous cleaner is approved. The last sentence of the capital request says the purchase order for the original solvent washer has already been issued and is non-cancellable. Best remaining move?", [
    "Specify aqueous anyway and ignore the issued PO.",
    "Accept the washer as-is with only classroom training.",
    "Use remaining design freedom: enclose, ventilate, and interlock the purchased washer; do not call PPE the primary control.",
    "Cancel the entire project and wait for next year.",
  ], 2, "The last sentence closed substitution. Remaining PtD is enclosure and engineered ventilation, not a training card.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "NIOSH Prevention through Design; hierarchy of controls",
      fieldTakeaway: "Prevention through Design moves control to the decision that creates the hazard: material, layout, energy, process. If a safer substance or layout is still possible, that beats add-on ventilation and PPE. Include main... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Before steel is ordered for a new mixing mezzanine, which analysis actually serves PtD?", [
    "Wait for the first recordable, then FTA.",
    "FMEA scored only on PPE cartridge-change intervals.",
    "Design-stage what-if / JHA comparing grade-level mixers versus the mezzanine, with findings written into the drawing.",
    "Behavior observation of the contractor after occupancy.",
  ], 2, "The tool must still be able to change the layout. Post-injury FTA and PPE FMEA are the wrong time and the wrong target.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "NIOSH Prevention through Design; hierarchy of controls",
      fieldTakeaway: "Prevention through Design moves control to the decision that creates the hazard: material, layout, energy, process. If a safer substance or layout is still possible, that beats add-on ventilation and PPE. Include main... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Finance offers to buy extra liability insurance rather than fund the aqueous substitution already shown as feasible. Best CSP position?", [
    "Accept insurance — risk transfer is equivalent to PtD.",
    "Reject the swap: insurance finances residual risk; it does not remove the flammable atmosphere. Specify the safer process.",
    "Keep the solvent and raise the deductible.",
    "Call the insurance premium “loss prevention capital.”",
  ], 1, "Insurance is risk financing (transfer/share), not hazard removal. PtD still owns the material decision.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "NIOSH Prevention through Design; hierarchy of controls",
      fieldTakeaway: "Prevention through Design moves control to the decision that creates the hazard: material, layout, energy, process. If a safer substance or layout is still possible, that beats add-on ventilation and PPE. Include main... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Control-voltage decision is still open: 24 VDC or 480 VAC at the operator station. Maintenance prefers 480 so extra transformers are not needed. Best PtD call?", [
    "480 VAC plus arc-rated PPE and an energized-work permit.",
    "Specify 24 VDC at the point of use.",
    "480 VAC plus a laminated shock poster.",
    "Let each cell choose after startup.",
  ], 1, "Energy at the point of use is still a design choice. Lower voltage beats PPE around 480 V.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "NIOSH Prevention through Design; hierarchy of controls",
      fieldTakeaway: "Prevention through Design moves control to the decision that creates the hazard: material, layout, energy, process. If a safer substance or layout is still possible, that beats add-on ventilation and PPE. Include main... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
