import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D1.03";

export const classFields: ClassFields = {
  hook: "A baghouse pulses fine wood dust onto a mezzanine. Operations says “it is just dust, not a flammable liquid — a Type ABC extinguisher and a broom on Fridays are enough.” You are the CSP. The question is whether the pentagon is already built overhead.",
  hookOilGas: `A grain-adjacent additive silo and a dusty compressor deck share a building. Operations says âit is just dust, not hydrocarbon vapor â a Type ABC and a broom on Fridays are enough.â You are the CSP. The question is whether the pentagon is already built overhead.`,
  hookConstruction: `A site fab shop sands MDF and pulses a portable collector onto a mezzanine. The superintendent says âit is just dust â a Type ABC and a broom on Fridays are enough.â You are the CSP. The question is whether the pentagon is already built overhead.`,
  rule: "A combustible-dust flash fire needs fuel (fine dry combustible), oxidizer (air), ignition, and a suspended cloud. An explosion needs the fifth side: confinement. That is the dust pentagon — not the fire triangle. Control the pentagon in design: less dust generated, wet or closed process, housekeeping that actually removes hidden layers, ignition control, then explosion protection (venting, suppression, isolation) sized to Kst/Pmax. A broom and a poster do not vent a room. If two answers work, take higher hierarchy / system / design.",
  modelCaption:
    "Five-sided navy pentagon, amber edges, labeled FUEL · OXIDIZER · IGNITION · DISPERSION · CONFINEMENT. Interior caption: flash fire = four sides; explosion = five. Under the figure: Kst / Pmax drive vent/suppress/isolate — a broom is not a vent.",
  workedCase:
    "Wood dust on the mezzanine. (1) Is it combustible? Particle size, moisture, and a dust-test (Kst, Pmax, PHmax) answer — “wood is organic” is not a test. (2) Can you stop generating or capture at the sander (LEV) so layers never form? That is PtD. (3) Housekeeping: hidden overhead beams, not a Friday aisle sweep. Layers that can be lofted are fuel in waiting. (4) Ignition: classified electrical, hot-work permit, tramp metal. (5) If a cloud in a room or collector is still credible, explosion venting/suppression/isolation on the collector and isolation to the duct — not a bigger extinguisher. The ABC extinguisher is residual firefighting, not explosion protection.",
  trapsJson: traps(
    "Treating combustible dust as “just dirt” or as a fire-triangle problem (missing dispersion and confinement).",
    "Friday aisle sweeping while overhead beams hold the fuel that a primary event will loft.",
    "A bigger portable extinguisher as a substitute for venting, suppression, or isolation on a collector.",
  ),
  contrastJson: contrast([
    { looksLike: "Fire triangle (fuel, air, ignition)", actually: "Incomplete — dust needs dispersion; explosion needs confinement" },
    { looksLike: "Dust pentagon", actually: "Fuel + oxidizer + ignition + dispersion + confinement" },
    { looksLike: "Friday broom in the aisle", actually: "Admin — often misses overhead layers that become the cloud" },
    { looksLike: "Explosion vent / suppress / isolate", actually: "Engineering sized to Kst and Pmax" },
    { looksLike: "Type ABC extinguisher", actually: "Residual firefighting — not an explosion-protection system" },
  ]),
  mustScoreJson: mustScore(
    "Combustible dust needs dust hazard analysis thinking: fuel, suspension, confinement, oxygen, ignition.",
    "Housekeeping and dust collection design prevent clouds and layers.",
    "Explosion protection may include venting, suppression, isolation \u2014 after prevention.",
    "Do not vacuum with household cleaners inappropriate for combustible dust.",
    "Hot work in dust areas needs strict controls.",
    "Tramp metal and ignition source control matter.",
    "Hierarchy: eliminate dustiness and ignition before relying on PPE.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "layers and clouds present with only dust masks proposed", pick: "housekeeping and engineering dust control first" },
    { ifStem: "DHA never done for a dusty process", pick: "analyze dust hazards systematically" },
    { ifStem: "household vacuum used on fine metal dust", pick: "use appropriate industrial methods" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "ignition sources uncontrolled in dust area", pick: "control ignition and hot work" },
  ),

  brief: `A combustible-dust flash fire needs fuel (fine dry combustible), oxidizer (air), ignition, and a suspended cloud. An explosion needs the fifth side: confinement. That is the dust pentagon â not the fire triangle. Control the pentagon in design: less dust generated, wet or closed process, housekeeping that actually removes hidden layers, ignition control, then explosion If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
A combustible-dust flash fire needs fuel (fine dry combustible), oxidizer (air), ignition, and a suspended cloud. An explosion needs the fifth side: confinement. That is the dust pentagon â not the fire triangle. Control the pentagon in design: less dust generated, wet or closed process, housekeeping that actually removes hidden layers, ignition control, then explosion protection (venting, suppression, isolation) sized to Kst/Pmax. A broom and a poster do not vent a room. If two answers work, take higher hierarchy / system / design. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. Field move
A baghouse pulses fine wood dust onto a mezzanine. Operations says âit is just dust, not a flammable liquid â a Type ABC extinguisher and a broom on Fridays are enough.â You are the CSP. The question is whether the pentagon is already built overhead. Oil-and-gas skin: A grain-adjacent additive silo and a dusty compressor deck share a building. Operations says âit is just dust, not hydrocarbon vapor â a Type ABC and a broom on Fridays are enough.â You are the CSP. Construction skin: A site fab shop sands MDF and pulses a portable collector onto a mezzanine. The superintendent says âit is just dust â a Type ABC and a broom on Fridays are enough.â You are the CSP. Work the case: Wood dust on the mezzanine. (1) Is it combustible? Particle size, moisture, and a dust-test (Kst, Pmax, PHmax) answer â âwood is organicâ is not a test. (2) Can you stop generating or capture at the sander (LEV) so layers never form? That is PtD. (3) Housekeeping: hidden overhead beams, not a Friday aisle sweep. Layers that can be lofted are fuel in waiting. (4) Ignition: classified electrical, hot-work permit, tramp metal. (5) If a cloud in a room or collector is still credible, explosion venting/suppression/isolation on the collector and isolation to the duct â not a bigger extinguisher. The ABC extinguisher is residual firefighting, not explosion protection. Classic traps: Treating combustible dust as “just dirt” or as a fire-triangle problem (missing dispersion and confinement).; Friday aisle sweeping while overhead beams hold the fuel that a primary event will loft.; A bigger portable extinguisher as a substitute for venting, suppression, or isolation on a collector.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for combustible dust. Verify whether a higher system or design fix is still open. Contrast labels: Fire triangle (fuel, air, ignition) is actually Incomplete — dust needs dispersion; explosion needs confinement; Dust pentagon is actually Fuel + oxidizer + ignition + dispersion + confinement; Friday broom in the aisle is actually Admin — often misses overhead layers that become the cloud; Explosion vent / suppress / isolate is actually Engineering sized to Kst and Pmax; Type ABC extinguisher is actually Residual firefighting — not an explosion-protection system. If the stem shows layers and clouds present with only dust masks proposed, pick housekeeping and engineering dust control first. If the stem shows DHA never done for a dusty process, pick analyze dust hazards systematically. If the stem shows household vacuum used on fine metal dust, pick use appropriate industrial methods. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows ignition sources uncontrolled in dust area, pick control ignition and hot work. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Dust pentagon — what is the fifth side? Is a broom a vent sits in CSP-11 Domain 1 Applied Safety Technology. The exam tests whether you apply the rule when a package already looks complete. Core rule: A combustible-dust flash fire needs fuel (fine dry combustible), oxidizer (air), ignition, and a suspended cloud. An explosion needs the fifth side: confinement. That is the dust pentagon â not the fire triangle. Control the pentagon in design: less dust generated, wet or closed process, housekeeping that actually removes hidden layers, ignition control, then explosion protection (venting, suppression, isolation) sized to Kst/Pmax. A broom and a poster do not vent a room. If two answers work, take higher hierarchy / system / design. Field context: A baghouse pulses fine wood dust onto a mezzanine. Operations says âit is just dust, not a flammable liquid â a Type ABC extinguisher and a broom on Fridays are enough.â You are the CSP. The question is whether the pentagon is already built overhead. The oil-and-gas skin shifts the same decision into production pressure: A grain-adjacent additive silo and a dusty compressor deck share a building. Operations says âit is just dust, not hydrocarbon vapor â a Type ABC and a broom on Fridays are enough.â You are the CSP. The construction skin shifts it into schedule and trade stacking: A site fab shop sands MDF and pulses a portable collector onto a mezzanine. The superintendent says âit is just dust â a Type ABC and a broom on Fridays are enough.â You are the CSP. Model caption for this class: Five-sided navy pentagon, amber edges, labeled FUEL Â· OXIDIZER Â· IGNITION Â· DISPERSION Â· CONFINEMENT. Interior caption: flash fire = four sides; explosion = five. Under the figure: Kst / Pmax drive vent/suppress/isolate â a broom is not a vent. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Combustible dust needs dust hazard analysis thinking: fuel, suspension, confinement, oxygen, ignition. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Housekeeping and dust collection design prevent clouds and layers. (3) Explosion protection may include venting, suppression, isolation — after prevention. (4) Do not vacuum with household cleaners inappropriate for combustible dust. (5) Hot work in dust areas needs strict controls. (6) Tramp metal and ignition source control matter. (7) Hierarchy: eliminate dustiness and ignition before relying on PPE. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Wood dust on the mezzanine. (1) Is it combustible? Particle size, moisture, and a dust-test (Kst, Pmax, PHmax) answer â âwood is organicâ is not a test. (2) Can you stop generating or capture at the sander (LEV) so layers never form? That is PtD. (3) Housekeeping: hidden overhead beams, not a Friday aisle sweep. Layers that can be lofted are fuel in waiting. (4) Ignition: classified electrical, hot-work permit, tramp metal. (5) If a cloud in a room or collector is still credible, explosion venting/suppression/isolation on the collector and isolation to the duct â not a bigger extinguisher. The ABC extinguisher is residual firefighting, not explosion protection. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Treating combustible dust as “just dirt” or as a fire-triangle problem (missing dispersion and confinement).; Friday aisle sweeping while overhead beams hold the fuel that a primary event will loft.; A bigger portable extinguisher as a substitute for venting, suppression, or isolation on a collector.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Fire triangle (fuel, air, ignition)” is really Incomplete — dust needs dispersion; explosion needs confinement; “Dust pentagon” is really Fuel + oxidizer + ignition + dispersion + confinement; “Friday broom in the aisle” is really Admin — often misses overhead layers that become the cloud; “Explosion vent / suppress / isolate” is really Engineering sized to Kst and Pmax; “Type ABC extinguisher” is really Residual firefighting — not an explosion-protection system. Stem-if-then map: if layers and clouds present with only dust masks proposed → housekeeping and engineering dust control first; if DHA never done for a dusty process → analyze dust hazards systematically; if household vacuum used on fine metal dust → use appropriate industrial methods; if two answers work → higher hierarchy / system / design; if ignition sources uncontrolled in dust area → control ignition and hot work. Scoring favors evidence, owners, verification, and hierarchy-smart controls on combustible dust. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Dust pentagon — what is the fifth side? Is a broom a vent?",
  cardBack:
    "Fuel, oxidizer, ignition, dispersion, confinement. Flash fire = 4; explosion = 5. Hidden layers are fuel. Collectors need vent/suppress/isolate sized to Kst/Pmax. Attractive wrong answer: Friday broom and a bigger ABC. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence names the dust pentagon (including dispersion and confinement), flash fire vs explosion, hidden-layer housekeeping, and vent/suppress/isolate rather than a broom or extinguisher as explosion protection.",
};

export const items: ClassItem[] = [
  exam(T, "A baghouse of fine wood dust is indoors. Operations wants a larger ABC extinguisher and a Friday broom. Explosion venting and isolation are still purchasable. Best CSP recommendation?", [
    "Approve the extinguisher — dust is not a flammable liquid.",
    "Specify capture at the source, designed housekeeping of hidden layers, and explosion protection (vent/suppress/isolate) on the collector. An ABC is residual firefighting, not a vent.",
    "Approve the broom if it is HEPA.",
    "Transfer the residual to property insurance.",
  ], 1, "Hierarchy: LEV and explosion protection beat a broom and FIN.", "HIER", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "A combustible-dust flash fire needs fuel (fine dry combustible), oxidizer (air), ignition, and a suspended cloud. An explosion needs the fifth side: confinement. That is the dust pentagon — not the fire triangle. Cont... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Which statement correctly describes the combustible-dust pentagon?", [
    "Fuel, oxidizer, and ignition — the fire triangle is sufficient.",
    "Fuel, oxidizer, ignition, dispersion (cloud), and confinement. Four sides can flash-fire; five sides can explode.",
    "Fuel and confinement only — oxygen is optional indoors.",
    "Ignition and a broom — housekeeping replaces the pentagon.",
  ], 1, "Pentagon, not triangle. Dispersion and confinement are the dust-specific sides.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "A combustible-dust flash fire needs fuel (fine dry combustible), oxidizer (air), ignition, and a suspended cloud. An explosion needs the fifth side: confinement. That is the dust pentagon — not the fire triangle. Cont... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Overhead I-beams hold 1/8 in of dry organic dust. Aisles are clean. A primary event could loft the layer. Best control emphasis?", [
    "Keep sweeping aisles — OSHA looks at floors.",
    "Remove hidden/overhead accumulations with designed access and classified vacuum; prevent re-deposit with LEV. Aisle shine is not the fuel inventory.",
    "Add a poster about clean floors.",
    "Wait 24 hours then sweep (TIME).",
  ], 1, "Hidden layers are the cloud waiting to happen. TIME is a distractor.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "A combustible-dust flash fire needs fuel (fine dry combustible), oxidizer (air), ignition, and a suspended cloud. An explosion needs the fifth side: confinement. That is the dust pentagon — not the fire triangle. Cont... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Kst is reported as 150 bar·m/s. A technician treats 150 as Pmax in bar and picks a vent panel. What happened?", [
    "Nothing — Kst and Pmax are interchangeable severity numbers.",
    "UNIT/FORM: Kst is deflagration index (bar·m/s); Pmax is maximum explosion pressure (bar). Size protection to the parameter the method actually uses.",
    "150 means 150% dose (noise table).",
    "Use 24.45 as the vent constant.",
  ], 1, "Do not swap Kst and Pmax. Attractive wrong imports noise or ppm constants.", "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "A combustible-dust flash fire needs fuel (fine dry combustible), oxidizer (air), ignition, and a suspended cloud. An explosion needs the fifth side: confinement. That is the dust pentagon — not the fire triangle. Cont... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Last sentence: “The dry grind cannot be wetted this year; a closed transfer and a suppressed collector are still open.” Best remaining move?", [
    "Cancel all grinding.",
    "Specify closed transfer plus suppression/isolation on the collector. Wet substitution is closed; remaining engineering is not a broom.",
    "SOP and a laminated pentagon card only.",
    "Bigger ABC on every column.",
  ], 1, "STEM closed wet process. Remaining design degrees of freedom still beat admin/PPE.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "A combustible-dust flash fire needs fuel (fine dry combustible), oxidizer (air), ignition, and a suspended cloud. An explosion needs the fifth side: confinement. That is the dust pentagon — not the fire triangle. Cont... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Which analysis belongs before the collector is ordered?", [
    "FTA after the first flash fire, then a broom schedule.",
    "Dust-hazard analysis / process hazard review that uses test data (Kst, Pmax) to choose containment, venting, suppression, and isolation on the drawing.",
    "FMEA on broom bristle color.",
    "Pareto of near-miss reports after start-up only.",
  ], 1, "The tool must still change the collector design. FMEA on bristles is TOOL abuse.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "A combustible-dust flash fire needs fuel (fine dry combustible), oxidizer (air), ignition, and a suspended cloud. An explosion needs the fifth side: confinement. That is the dust pentagon — not the fire triangle. Cont... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A metal-dust collector vents into the occupied shop “because outdoor venting is 18% more capital.” Best CSP position?", [
    "Approve indoor venting — people can duck.",
    "Reject: vent to a safe location or use suppression; do not aim a deflagration at occupants. Capital delta does not move the pentagon.",
    "Approve with extra insurance (FIN).",
    "Approve if vented within 8 hours of a pulse (TIME).",
  ], 1, "Vent direction is a design control. FIN/TIME are distractors.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "A combustible-dust flash fire needs fuel (fine dry combustible), oxidizer (air), ignition, and a suspended cloud. An explosion needs the fifth side: confinement. That is the dust pentagon — not the fire triangle. Cont... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A mill can use pellets instead of a fine dry powder, adding 10 minutes per batch. Production wants powder plus a beautiful suppression skid. Best PtD call at design freeze?", [
    "Approve powder plus suppression — engineering is always enough.",
    "Specify pellets (or another less-dispersible form) if they remove or reduce the cloud. Suppression is residual around a fuel you did not have to make.",
    "Approve powder plus N95s.",
    "Let each shift choose.",
  ], 1, "Substitution of the fuel form is higher than add-on explosion protection.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "A combustible-dust flash fire needs fuel (fine dry combustible), oxidizer (air), ignition, and a suspended cloud. An explosion needs the fifth side: confinement. That is the dust pentagon — not the fire triangle. Cont... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Hot work on a dusty silo. Fire watch with an ABC is proposed; isolation, cleaning, and a permit are still available. Best control set?", [
    "ABC and watch only — dust is not a liquid.",
    "Isolate, empty/clean to remove the fuel and cloud, then permit with watch as residual. An extinguisher does not replace isolation.",
    "Skip cleaning if the watch lasts 8 hours (TIME).",
    "Buy insurance for the silo (FIN).",
  ], 1, "Hot work on dust is ignition plus fuel. Isolate and clean first.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "A combustible-dust flash fire needs fuel (fine dry combustible), oxidizer (air), ignition, and a suspended cloud. An explosion needs the fifth side: confinement. That is the dust pentagon — not the fire triangle. Cont... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A rotary airlock is assumed to be deflagration isolation “because it is round and metal.” Best flag?", [
    "Accept — geometry is isolation.",
    "Do not assume. Isolation is a listed/tested function. A rotary valve may pass leakage and flame; specify a tested isolation device if the DHA requires isolation.",
    "Accept if painted amber.",
    "Accept if Kst < 300 without a test method.",
  ], 1, "Looks-like engineering is not tested isolation.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "A combustible-dust flash fire needs fuel (fine dry combustible), oxidizer (air), ignition, and a suspended cloud. An explosion needs the fifth side: confinement. That is the dust pentagon — not the fire triangle. Cont... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Finance prefers extra property insurance instead of isolation on the inlet duct. Best position?", [
    "Insurance is equivalent explosion protection.",
    "Reject: specify isolation (or an equivalent protection method). Insurance pays after the room explodes; it does not isolate the duct.",
    "Raise the deductible.",
    "Paint the duct yellow.",
  ], 1, "FIN vs explosion isolation.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "A combustible-dust flash fire needs fuel (fine dry combustible), oxidizer (air), ignition, and a suspended cloud. An explosion needs the fifth side: confinement. That is the dust pentagon — not the fire triangle. Cont... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a hospital utility plant shutdown. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Least consistent with combustible-dust control.", [
    "Closed transfer and LEV at the sander.",
    "Collector explosion venting to a safe location plus isolation.",
    "A laminated dust-pentagon card after three near-misses, with overhead layers and an unvented indoor collector unchanged.",
    "Designed overhead access and classified vacuuming.",
  ], 2, "A poster is not a vent and does not remove the fifth side.", "HIER", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "A combustible-dust flash fire needs fuel (fine dry combustible), oxidizer (air), ignition, and a suspended cloud. An explosion needs the fifth side: confinement. That is the dust pentagon — not the fire triangle. Cont... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
