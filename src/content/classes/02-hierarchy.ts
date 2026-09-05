import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D1.01";

export const classFields: ClassFields = {
  hook: "A paint line is over the isocyanate action level. Production wants a new respirator program and a spray permit by Monday. You are the CSP. The question is whether a higher control is still open.",
  hookOilGas: "A coating skid on a new module is over the isocyanate action level. Production wants a new respirator program and a spray permit by Monday. You are the CSP. The question is whether a higher control is still open.",
  hookConstruction: "A site spray booth for structural steel is over the isocyanate action level. Production wants a new respirator program and a spray permit by Monday. You are the CSP. The question is whether a higher control is still open.",
  rule: "Elimination, then substitution, then engineering, then administrative, then PPE. If a higher row is still open in the stem, that is the answer — a polished permit or respirator program does not climb the pyramid.",
  modelCaption: "Five-row inverted pyramid, widest at the top: Elimination, Substitution, Engineering, Administrative, PPE. Caption: pick the highest row still open in the stem. Cost and reliability generally improve as you move up.",
  workedCase: "(1) Ask whether the isocyanate coating can leave — powder coat or waterborne with no NCO group. (2) If liquid spray remains, specify a robotic enclosed booth with downdraft. (3) Only then LEV upgrades, the spray permit, then air-supplied respirators. Losing answer: buy better cartridges while substitution or enclosure is still open.",
  trapsJson: traps(
    "Calling a new glove the hierarchy.",
    "Beautiful LEV while a non-isocyanate coating was still available.",
    "Treating a permit as engineering because it was written by engineers.",
  ),
  contrastJson: contrast([
    { looksLike: "New APR / SAR program", actually: "PPE — last on the pyramid" },
    { looksLike: "Switch to powder coat or waterborne", actually: "Substitution (or elimination of the NCO hazard)" },
    { looksLike: "Downdraft booth on the drawing", actually: "Engineering" },
    { looksLike: "Spray permit and JSA", actually: "Administrative" },
  ]),
  mustScoreJson: mustScore(
    "Order: elimination → substitution → engineering → administrative → PPE.",
    "If a higher row is still open in the stem, that is the answer.",
    "A permit is administrative even if a PE wrote it.",
    "A respirator program is PPE, not a management-system win.",
    "PEL or TLV compliance is not permission to skip a still-open substitute.",
    "The last sentence can close a row — take the highest remaining.",
    "Insurance and medical surveillance are not hierarchy rows.",
    "Residual risk is allowed only after higher rows are honestly closed."
  ),
    stemIfThenJson: stemIfThen(
    { ifStem: "substitution is still open", pick: "the safer chemical or process" },
    { ifStem: "design freeze or a customer spec closed substitution", pick: "remaining engineering" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "FMEA RPN ranks PPE worst", pick: "do not skip a still-open higher control" },
    { ifStem: "the PEL is met but a substitute exists", pick: "still substitute" },
    { ifStem: "insurance or medical surveillance is offered as the control", pick: "neither is a hierarchy row" },
  ),
  brief: `Walk the pyramid top-down. If the stem still allows eliminate or substitute, that is the answer. Enclosure is engineering. Permits and training are admin. PPE is last. PEL/TLV and insurance do not climb. Exam default: if two answers work, take higher hierarchy / system / design.
`,
  standard: `Rule
The hierarchy is a decision order, not a menu. Walk it top-down every time: elimination, substitution, engineering, administrative, PPE. Elimination removes the hazard. Substitution trades it for a lesser one. Engineering keeps energy away from people without relying on perfect behavior. Administrative controls change how people work. PPE is a last barrier on the body. If a higher row is still open in the stem, that is the answer — even when a lower-row program looks busy, funded, and professional. Cost and reliability generally improve as you move up the pyramid, which is why the exam will sell you a polished lower row.

Field move
On a paint line over the isocyanate action level, production will ask for respirators and a spray permit by Monday. Ask first whether the coating can leave. Powder coat or a non-isocyanate waterborne is substitution, and it can be elimination of the NCO hazard. If liquid spray remains, a robotic enclosed booth is engineering. The permit is administrative. The respirator is PPE. Redraw the inverted pyramid on the page before you look at the options. Meeting a PEL with PPE is not a win if substitution was still on the table. A permit written by a PE is still administrative. Insurance, medical surveillance, and a laminated think-safety card do not climb the pyramid. If the machine has not been ordered, specify or enclose it; do not commission a hearing-conservation empire around a 110 dBA blower you can still refuse.

Exam
If two answers work, take higher hierarchy / system / design. The last sentence can close a row: “design freeze yesterday,” “customer-specified chemistry,” “the purchase order is non-cancellable.” Then take the best remaining engineering, not a wish to start over, and not a jump to cartridges. PEL versus TLV is a legal-versus-advisory pair, not a license to skip a still-open substitute. An FMEA that scores only detection and PPE does not outrank substitution. Residual risk is allowed after higher rows are honestly closed. Brownfield constraints shrink the open rows; they do not invert the pyramid. When the stem offers a fence or floor tape, take the fence. When it offers grade-level layout or a harness, take the layout. Redraw the five rows before you look at A–D. Name the highest row the last sentence left open. That is the scoring key for this class.`,
  deep: `NIOSH and ANSI/ASSP Z10 treat the hierarchy of controls as the default logic for occupational risk. CSP-11 Domain 1 Applied Safety Technology. The pyramid is not a suggestion box. It is a forced ranking of how close the control sits to the source, and how little it depends on a tired person doing the right thing at 02:00. Prevention through Design uses this same ranking earlier in the life cycle; this class uses it on whatever degrees of freedom the stem still leaves open.

Elimination is rare and precious: stop using the energy, the chemical, or the height. Specifying pre-cleaned parts so the washer never arrives is elimination. Relocating a mezzanine mixer to grade so the ladder never arrives is elimination of work at height. Substitution is a material or process change that leaves a lesser hazard — aqueous cleaner for solvent, 24 V for 480 V, a quieter pump for a 110 dBA machine, powder coat for an isocyanate liquid. Engineering is hardware that still works if the operator is tired: guards, ventilation, interlocks, local exhaust, cooling, barriers, robotic enclosure, a validated light curtain with stopping time. Administrative is paper and people: permits, rotation, training, signs, JSAs, rest/shade schedules. PPE is on the skin. A supplied-air respirator program with medical clearance, fit testing, and cartridge change-out looks like a safety management system. It is still PPE.

The attractive wrong answer in this class is almost always a competent lower-row program. A hot-work permit written by a PE is still administrative. An FMEA that scores “operator fails to don respirator” as the worst RPN does not authorize skipping a chemical that can still leave. Finance offering a higher insurance limit is risk transfer, not a hierarchy row. A hearing-conservation program written into commissioning does not beat specifying a quieter machine that has not been ordered. Cut-resistant sleeves and a laminated “keep hands out” card lose to a guard that is still on the option sheet.

Residual risk is allowed after higher rows are honestly closed. Brownfield units, customer-specified chemistry, and historic equipment shrink the open rows. Then you take the highest remaining — dedicated room and LEV, not fans and cartridges — and you say so. Do not confuse “we are under the PEL” with “we chose the right row.” A PEL is a legal limit. A TLV is an advisory guideline. Neither is a substitute for the pyramid, and mixing them is the PELTLV miss sitting next to a HIER miss. Personal samples at 40% of the PEL and 90% of the TLV do not freeze substitution that is still on the approved-materials list.

Process-safety layers of protection are not the same drawing as this pyramid, but the exam heuristic rhymes: independent engineered layers beat detection and emergency response. Light curtains and validated stopping time are engineering. Floor tape, horns, and vests are administrative and PPE around a robot that can still be fenced. Heat at 38 °C WBGT is still an HVAC problem while exhaust can change. Die-cast rest schedules and cooling vests are lower rows. A trapped-key interlock is engineering that makes later LOTO possible; it is not a reason to start with gloves.

Last-sentence discipline is how this class is scored. If the stem still allows eliminate or substitute, that is the answer. If the last sentence froze the chemistry yesterday and only field-installable add-ons remain, a bolt-on enclosure beats a poster. If two answers work, take higher hierarchy / system / design. Do not restart the pyramid from the bottom because PPE is what the plant already knows how to buy. When capital remains after a freeze, spend it on the highest remaining hardware, then use admin and PPE only for residual. Tool choice is part of this class: FTA and design-stage JHA belong where they can still change the layout. Observation cards after occupancy do not climb the pyramid. Units rarely appear here; the “math” is which row the last sentence left open. Hold the five-row order until you can say it without looking. Then apply it to paint lines, presses, docks, and robots the same way.`,
  cardFront: "Hierarchy — which row is still open?",
  cardBack: "Elimination → substitution → engineering → administrative → PPE. Attractive wrong answer: a polished permit or respirator program while a safer chemical or enclosure is still possible. Study only — not allowed in the test center.",
  teachBackKey: "Pass if the sentence names elimination → substitution → engineering → administrative → PPE and says to take the highest row still open.",
  formulaSlug: null,
};

export const items: ClassItem[] = [
  exam(
    T,
    "New paint line. Isocyanate coating A is already in the plant. Waterborne coating B has no NCO group but adds 8 minutes oven time. Production wants A plus a full SAR program by Monday. Best control?",
    [
      "Specify B to remove the isocyanate hazard.",
      "Approve A and accelerate fit testing.",
      "Keep A and add a spray permit only.",
      "Let each shift pick A or B.",
    ],
    0,
    "Substitution is still open. A respirator program is PPE around a chemical you did not have to keep.",
    "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Hierarchy of controls (NIOSH / OSHA training materials)",
      fieldTakeaway: "Elimination, then substitution, then engineering, then administrative, then PPE. If a higher row is still open in the stem, that is the answer — a polished permit or respirator program does not climb the pyramid. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "A new punch press is on the purchase sheet. The vendor’s base model has an unguarded point of operation; the option package adds a fixed barrier interlocked to the clutch. Operations says gloves and a buddy system are cheaper. Best CSP call?",
    [
      "Approve the base model plus cut-resistant gloves.",
      "Approve the base model plus a two-person rule.",
      "Specify the interlocked barrier on the purchase order.",
      "Train on hand placement and call it elimination.",
    ],
    2,
    "The guard is engineering at purchase. Gloves and a buddy are PPE/admin while the drawing can still include the barrier.",
    "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Hierarchy of controls (NIOSH / OSHA training materials)",
      fieldTakeaway: "Elimination, then substitution, then engineering, then administrative, then PPE. If a higher row is still open in the stem, that is the answer — a polished permit or respirator program does not climb the pyramid. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "A 110 dBA blower has not been ordered. Hearing conservation, annual audiograms, and custom muffs are already written into the commissioning plan. Best remaining control?",
    [
      "Implement the HCP as the primary control.",
      "Specify a quieter blower or enclose it on the drawing, then HCP only for residual.",
      "Rotate operators every hour and skip engineering.",
      "Post a noise map and issue disposable plugs.",
    ],
    1,
    "Specify or enclose at purchase. An HCP is administrative/PPE and loses while the machine is still a shopping decision.",
    "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Hierarchy of controls (NIOSH / OSHA training materials)",
      fieldTakeaway: "Elimination, then substitution, then engineering, then administrative, then PPE. If a higher row is still open in the stem, that is the answer — a polished permit or respirator program does not climb the pyramid. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "The last sentence of the stem says the customer contract freezes the isocyanate formulation and substitution is closed. Budget remains for a robotic enclosed booth or for SAR and a permit. Best control?",
    [
      "SAR and a permit — substitution is closed so PPE becomes the top of the hierarchy.",
      "Cancel the contract.",
      "Job rotation only.",
      "Robotic enclosed booth — highest remaining row is engineering.",
    ],
    3,
    "The last sentence closed substitution. Engineering is still open and beats PPE. Do not restart the pyramid from the bottom.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Hierarchy of controls (NIOSH / OSHA training materials)",
      fieldTakeaway: "Elimination, then substitution, then engineering, then administrative, then PPE. If a higher row is still open in the stem, that is the answer — a polished permit or respirator program does not climb the pyramid. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Die-cast cells run 38 °C WBGT. Facilities can add local cooling and exhaust, or issue a water/rest/shade schedule and cooling vests. Design is not frozen. Best control?",
    [
      "Water/rest/shade as the primary program.",
      "Cooling vests as PPE-first.",
      "Engineered cooling and exhaust at the cells; admin/PPE for residual heat.",
      "Medical surveillance only.",
    ],
    2,
    "Heat is still an engineering problem while HVAC and exhaust can change. Rest schedules and vests are lower rows.",
    "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Hierarchy of controls (NIOSH / OSHA training materials)",
      fieldTakeaway: "Elimination, then substitution, then engineering, then administrative, then PPE. If a higher row is still open in the stem, that is the answer — a polished permit or respirator program does not climb the pyramid. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Personal samples on a solvent blend are at 40% of the OSHA PEL and 90% of the ACGIH TLV. Engineering wants to declare victory with half-mask APRs. A less-volatile substitute is still on the approved-materials list. Best CSP position?",
    [
      "APRs are required because the TLV is almost exceeded.",
      "Do nothing because the PEL is not exceeded.",
      "Specify the substitute; PEL vs TLV is not permission to skip a higher row that is still open.",
      "Wait for an OSHA visit.",
    ],
    2,
    "A PEL is a legal limit and a TLV is advisory. Neither replaces substitution that is still available.",
    "PELTLV",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Hierarchy of controls (NIOSH / OSHA training materials)",
      fieldTakeaway: "Elimination, then substitution, then engineering, then administrative, then PPE. If a higher row is still open in the stem, that is the answer — a polished permit or respirator program does not climb the pyramid. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "A team scores an FMEA and picks the row with the worst RPN, which is “operator fails to don respirator.” They fund a better cartridge. Substitution of the chemical is still open. What went wrong?",
    [
      "Nothing — RPN correctly ranked PPE.",
      "Wrong tool use: FMEA detection/PPE scoring was allowed to outrank a still-open higher control.",
      "They should have used TRIR instead.",
      "They should have bought insurance.",
    ],
    1,
    "RPN is an FMEA ranking aid, not a license to skip the hierarchy.",
    "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Hierarchy of controls (NIOSH / OSHA training materials)",
      fieldTakeaway: "Elimination, then substitution, then engineering, then administrative, then PPE. If a higher row is still open in the stem, that is the answer — a polished permit or respirator program does not climb the pyramid. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Which option is least effective as a primary control while a machine guard can still be specified?",
    [
      "Fixed barrier interlocked to motion.",
      "Light curtain with validated stopping time.",
      "Relocation of the nip away from the operator reach envelope.",
      "New cut-resistant sleeves and a laminated “keep hands out” card.",
    ],
    3,
    "Sleeves and a card are PPE/admin. Guards and layout are still open.",
    "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Hierarchy of controls (NIOSH / OSHA training materials)",
      fieldTakeaway: "Elimination, then substitution, then engineering, then administrative, then PPE. If a higher row is still open in the stem, that is the answer — a polished permit or respirator program does not climb the pyramid. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Finance prefers a higher insurance limit on the paint line instead of funding the powder-coat conversion. Best CSP position?",
    [
      "Accept insurance as equivalent to substitution.",
      "Reject the swap: insurance is risk financing, not a hierarchy row. Convert the process.",
      "Keep solvent spray and raise the deductible.",
      "Call the premium a leading indicator.",
    ],
    1,
    "Transfer/share via insurance does not climb the pyramid.",
    "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Hierarchy of controls (NIOSH / OSHA training materials)",
      fieldTakeaway: "Elimination, then substitution, then engineering, then administrative, then PPE. If a higher row is still open in the stem, that is the answer — a polished permit or respirator program does not climb the pyramid. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "A packaging robot can be specified with a full perimeter interlocked fence or with floor tape, horns, and high-visibility vests. Pedestrians currently walk the planned path. Best control?",
    [
      "Perimeter interlocked fence — engineering separation.",
      "Tape, horns, and vests — cheaper administrative package.",
      "Vests plus a spotter.",
      "A daily stretch-and-flex in the aisle.",
    ],
    0,
    "Separate people from the robot with hardware. Tape and vests are admin/PPE.",
    "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Hierarchy of controls (NIOSH / OSHA training materials)",
      fieldTakeaway: "Elimination, then substitution, then engineering, then administrative, then PPE. If a higher row is still open in the stem, that is the answer — a polished permit or respirator program does not climb the pyramid. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Stem last sentence: “Detailed design freeze was yesterday; only field-installable add-ons remain.” Which is the best remaining control for an open mixer that throws mist?",
    [
      "Switch to a non-hazardous powder that requires a new vessel.",
      "Stop production permanently.",
      "A poster on PPE donning.",
      "Local enclosure and capture hood that still bolt to the existing mixer.",
    ],
    3,
    "The last sentence closed substitution that needs a new vessel. A bolt-on enclosure is remaining engineering and beats a poster.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Hierarchy of controls (NIOSH / OSHA training materials)",
      fieldTakeaway: "Elimination, then substitution, then engineering, then administrative, then PPE. If a higher row is still open in the stem, that is the answer — a polished permit or respirator program does not climb the pyramid. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "A parts washer can be eliminated by specifying pre-cleaned supplier parts at a 6% piece-price increase. Operations wants to keep washing and add gloves. Best hierarchy choice?",
    [
      "Keep washing and upgrade gloves.",
      "Eliminate the washer by specifying pre-cleaned parts.",
      "Keep washing and add a permit.",
      "Keep washing and add a toolbox talk.",
    ],
    1,
    "Elimination is still open. Gloves are PPE around a washer you do not need.",
    "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Hierarchy of controls (NIOSH / OSHA training materials)",
      fieldTakeaway: "Elimination, then substitution, then engineering, then administrative, then PPE. If a higher row is still open in the stem, that is the answer — a polished permit or respirator program does not climb the pyramid. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Brownfield unit: the solvent is customer-specified and the vessel cannot change. Capital remains for a dedicated ventilated room or for portable fans plus SAR. Best remaining move?",
    [
      "Fans and supplied-air as the primary package.",
      "Stop all washing and wait for a new contract year.",
      "Dedicated room and engineered ventilation; SAR only for residual.",
      "SOP only and call it ALARP.",
    ],
    2,
    "Substitution is closed. Remaining design freedom is enclosure and engineered ventilation, not PPE-first fans.",
    "HIER",
    "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Hierarchy of controls (NIOSH / OSHA training materials)",
      fieldTakeaway: "Elimination, then substitution, then engineering, then administrative, then PPE. If a higher row is still open in the stem, that is the answer — a polished permit or respirator program does not climb the pyramid. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "A mezzanine mixer is still on the layout. Operations prefers a ladder, harness, and a JSA. Strongest hierarchy comment?",
    [
      "Relocate the mixer to grade or add a fixed platform on the drawing.",
      "Approve harnesses and 100% tie-off as the primary control.",
      "Add the JSA to commissioning and keep the ladder.",
      "Train night shift on ladder angle.",
    ],
    0,
    "Work at height is still a layout decision. Harnesses are PPE around a mezzanine you do not have to keep.",
    "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Hierarchy of controls (NIOSH / OSHA training materials)",
      fieldTakeaway: "Elimination, then substitution, then engineering, then administrative, then PPE. If a higher row is still open in the stem, that is the answer — a polished permit or respirator program does not climb the pyramid. Verify the critical step before accepting a lower-tier control.",
    }
  ),
];

