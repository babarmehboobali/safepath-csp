import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D1.01";

export const classFields: ClassFields = {
  hook: "A spray booth already has a permit, a fit-test calendar, and a new APR contract. The stem still offers a waterborne substitute and a robotic enclosure. Discriminate which row is still open — not which program looks busiest.",
  hookOilGas: "A coating skid already has a permit, fit-testing, and a new SAR contract. The P&ID still allows a non-NCO coating and an enclosed robot. Discriminate the open row.",
  hookConstruction: "A site paint tent already has a spray permit and cartridge change-out cards. The spec still allows powder coat and a rented downdraft booth. Discriminate the open row.",
  rule: "Elimination, then substitution, then engineering, then administrative, then PPE. The last sentence can close a row; take the highest remaining. A polished lower-row program is the usual distractor.",
  modelCaption: "Five-row inverted pyramid. Caption: circle the last-sentence freeze, then pick the highest row still open. Cost and convenience sell the lower row.",
  workedCase: "(1) List open rows: waterborne substitute still on the approved list; robotic booth still on the capital plan; permit and APR already bought. (2) Substitution is the highest open row — specify the waterborne. (3) If the last sentence had frozen chemistry yesterday, take the robotic enclosure instead. Losing answer: accelerate fit testing because the contract is already signed.",
  trapsJson: traps(
    "Calling a PE-written permit engineering.",
    "Treating a met PEL as permission to skip a still-open substitute.",
    "Buying better cartridges while enclosure or substitution is still open.",
  ),
  contrastJson: contrast([
    { looksLike: "New APR / SAR program", actually: "PPE — last on the pyramid" },
    { looksLike: "Waterborne or powder coat still on the list", actually: "Substitution" },
    { looksLike: "Robotic enclosed booth on the drawing", actually: "Engineering" },
    { looksLike: "Spray permit / JSA / rotation", actually: "Administrative" },
    { looksLike: "Higher insurance limit", actually: "Risk transfer — not a hierarchy row" },
    { looksLike: "Design freeze yesterday", actually: "Last-sentence close of a higher row" },
  ]),
  mustScoreJson: mustScore(
    "Order: elimination → substitution → engineering → administrative → PPE.",
    "If a higher row is still open in the stem, that is the answer.",
    "A permit is administrative even if a PE wrote it.",
    "A respirator program is PPE, not a management-system win.",
    "PEL/TLV compliance is not permission to skip a still-open substitute.",
    "The last sentence can close a row — take the highest remaining.",
    "Insurance and medical surveillance are not hierarchy rows.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "substitution is still open", pick: "the safer chemical or process" },
    { ifStem: "design freeze closed substitution", pick: "remaining engineering that still bolts on" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "PEL is met but a substitute exists", pick: "still substitute" },
    { ifStem: "only PPE and a permit remain after a true freeze", pick: "engineering first if any hardware can still be added" },
    { ifStem: "FMEA ranks PPE worst", pick: "do not skip a still-open higher control" }
  ),
  brief: `Walk the pyramid top-down. Last sentence can freeze a row. Take the highest remaining. Permits are admin; respirators are PPE. PEL is not a skip ticket. Exam default: if two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Walk the hierarchy as a forced ranking, not a menu: elimination, substitution, engineering, administrative, PPE. This lab is discrimination — which row is still open after the last sentence. A permit, fit-test calendar, or respirator contract can look like a complete program and still sit on a lower row. If a higher row remains available in the stem, that is the answer. If two answers work, take higher hierarchy / system / design. The last sentence can freeze chemistry, capital, or layout; then take the highest remaining row, not a wish to restart the project.

Field move
On a paint line already wearing a spray permit and a new APR contract, ask whether the isocyanate can leave. Powder coat or a non-NCO waterborne is substitution. A robotic enclosed booth is engineering. The permit is administrative. The respirator is PPE. Redraw the inverted pyramid before you look at options. Cost, schedule, and “we already bought cartridges” will sell the lower row. Meeting a PEL with PPE is not a win if substitution is still on the approved-materials list. A PE-authored JSA is still administrative. Insurance and medical surveillance are not hierarchy rows. If the machine has not been ordered, specify or enclose it; do not commission a hearing-conservation empire around a 110 dBA blower you can still refuse.

Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for a freeze: design freeze yesterday, customer-specified solvent, non-cancellable purchase order. Then take remaining engineering that still bolts on, not a poster and not a fantasy new vessel. Attractive wrong answers are competent lower-row programs. Brownfield constraints shrink open rows; they do not invert the pyramid. When capital remains after a freeze, spend it on enclosure and capture, then use admin and PPE only for residual. Tool choice belongs here: a design-stage JHA can still change layout; observation cards after occupancy cannot climb. Residual risk is allowed only after higher rows are honestly closed. Circle the constraint, name the open row, and verify it on the approved list or the bolt pattern. Do not let a funded lower-row contract freeze a higher row the stem still leaves open.
`,
  deep: `CSP-11 Domain 1 tests whether you can still see a higher row when a field package looks finished. This lab is not a second lecture on the names of the five rows. It is a discrimination drill: the stem will hand you two or three plausible programs and one last sentence that either leaves a higher row open or honestly closes it. NIOSH and ANSI/ASSP Z10 treat the hierarchy as default logic because controls that sit closer to the source fail less often at 02:00. Prevention through Design uses the same ranking earlier in the life cycle. Here you apply it to whatever degrees of freedom remain.

Elimination removes the energy, the chemical, or the height. Specifying pre-cleaned parts so the washer never arrives is elimination. Moving a mezzanine mixer to grade so the ladder never arrives is elimination of work at height. Substitution trades a hazard for a lesser one — aqueous cleaner for solvent, 24 V for 480 V, powder coat for an isocyanate liquid, a quieter pump for a 110 dBA blower. Engineering is hardware that still works if the operator is tired: guards, LEV, interlocks, robotic enclosure, a validated light curtain with stopping time. Administrative is paper and people: permits, rotation, training, signs, JSAs. PPE is on the skin. A supplied-air program with medical clearance and cartridge change-out looks like a management system. It is still PPE.

The attractive wrong answer is almost always a competent lower-row program. A hot-work permit written by a PE is still administrative. An FMEA that scores “operator fails to don respirator” as the worst RPN does not authorize skipping a chemical that can still leave. Finance offering a higher insurance limit is risk transfer, not a hierarchy row. A hearing-conservation empire written into commissioning does not beat specifying a quieter machine that has not been ordered. Cut-resistant sleeves lose to a guard still on the option sheet. Floor tape around a robot that can still be fenced is administrative theater.

Last-sentence discipline is how this class is scored. If substitution is still open, take it. If the last sentence froze the chemistry yesterday and only field-installable add-ons remain, a bolt-on enclosure beats a poster. If two answers isolate people from energy, take the one that also changes the source or the layout. Do not restart the pyramid from the bottom because PPE is what the plant already knows how to buy. PEL versus TLV is a legal-versus-advisory pair, not a license to skip a still-open substitute. Mixing them is a PELTLV miss sitting next to a HIER miss. Personal samples at 40% of the PEL do not freeze substitution that is still on the list.

Process-safety layers of protection are not the same drawing, but the heuristic rhymes: independent engineered layers beat detection and emergency response. Light curtains with validated stopping time are engineering. Heat at high WBGT is still an HVAC problem while exhaust can change. Rest schedules and cooling vests are lower rows. A trapped-key interlock is engineering that makes later LOTO possible; it is not a reason to start with gloves. When you teach this back, name the open row, name the last-sentence freeze if any, and name the verification: the substitute is on the approved list, the enclosure still bolts, the permit is only residual. If two answers work, take higher hierarchy / system / design. Hold that sentence on every stem. Reject polished paperwork when a higher system or design fix remains. Units rarely appear here; the math is which row the last sentence left open. Oil-and-gas skins will sell a SAR contract around a coating that can still change. Construction skins will sell a permit around a booth that can still be rented as an enclosure. Manufacturing skins will sell audiograms around a blower that can still be specified quiet. In every skin, name the open row and the verification step before you look at the option letters.
`,
  cardFront: "Hierarchy lab — which row is still open after the last sentence?",
  cardBack: "Elimination → substitution → engineering → admin → PPE. Attractive wrong answer: a polished permit or respirator program while a substitute or enclosure is still possible. Study only.",
  teachBackKey: "Pass if the sentence names the five-row order, says to take the highest row still open, and uses the last sentence as a freeze check.",
  formulaSlug: null,
};

export const items: ClassItem[] = [
  exam(
    "CSP-11 D1.01",
    "Which list is the hierarchy of controls in the correct forced order?",
    [
      "PPE, administrative, engineering, substitution, elimination.",
      "Elimination, substitution, engineering, administrative, PPE.",
      "Engineering, elimination, PPE, administrative, substitution.",
      "Administrative, engineering, substitution, PPE, elimination.",
    ],
    1,
    "Core Rule: Forced ranking from source to body. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: NIOSH / Z10 hierarchy teaching. Why Each Distractor Fails: PPE, administrative, engineering, substitution, elimination.: Inverted order — starts at the body. | Elimination, substitution, engineering, administrative, PPE.: Correct: source-first ranking. | Engineering, elimination, PPE, administrative, substitution.: Scrambled rows. | Administrative, engineering, substitution, PPE, elimination.: Starts at paper.",
    "HIER",
    "Foundation",
    [
      "Inverted order — starts at the body.",
      "Correct: source-first ranking.",
      "Scrambled rows.",
      "Starts at paper.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Elimination, then substitution, then engineering, then administrative, then PPE. The last sentence can close a row; take the highest remaining. A polished lower-row program is the usual distractor. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.01",
    "Isocyanate coating A is already in the plant. Waterborne B has no NCO group but adds 8 minutes oven time. Production wants A plus a full SAR program by Monday. Best control?",
    [
      "Specify B to remove the isocyanate hazard.",
      "Approve A and accelerate fit testing.",
      "Keep A and add a spray permit only.",
      "Let each shift pick A or B.",
    ],
    0,
    "Core Rule: Substitution is still open. SAR is PPE around a chemical you did not have to keep. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Hierarchy; PtD. Why Each Distractor Fails: Specify B to remove the isocyanate hazard.: Correct: substitute while it is open. | Approve A and accelerate fit testing.: PPE around a keepable chemical. | Keep A and add a spray permit only.: Admin around a keepable chemical. | Let each shift pick A or B.: Optional substitution is not control.",
    "HIER",
    "Exam",
    [
      "Correct: substitute while it is open.",
      "PPE around a keepable chemical.",
      "Admin around a keepable chemical.",
      "Optional substitution is not control.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Elimination, then substitution, then engineering, then administrative, then PPE. The last sentence can close a row; take the highest remaining. A polished lower-row program is the usual distractor. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.01",
    "A PE writes a spray permit and a laminated JSA for a booth that can still be enclosed. Best characterization of the permit?",
    [
      "Engineering, because a PE stamped it.",
      "Elimination, because it prevents unauthorized spray.",
      "Administrative — paper that depends on behavior.",
      "PPE, because it mentions respirators.",
    ],
    2,
    "Core Rule: Authorship does not climb the pyramid. A permit is administrative. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Hierarchy discrimination. Why Each Distractor Fails: Engineering, because a PE stamped it.: Stamp ≠ hardware. | Elimination, because it prevents unauthorized spray.: A permit does not remove the energy. | Administrative — paper that depends on behavior.: Correct: admin row. | PPE, because it mentions respirators.: The permit is not on the body.",
    "HIER",
    "Exam",
    [
      "Stamp ≠ hardware.",
      "A permit does not remove the energy.",
      "Correct: admin row.",
      "The permit is not on the body.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Elimination, then substitution, then engineering, then administrative, then PPE. The last sentence can close a row; take the highest remaining. A polished lower-row program is the usual distractor. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.01",
    "Stem last sentence: “Detailed design freeze was yesterday; only field-installable add-ons remain.” Best remaining control for an open mixer that throws mist?",
    [
      "Switch to a non-hazardous powder that requires a new vessel.",
      "Stop production permanently as the only ethical option.",
      "A poster on PPE donning.",
      "Local enclosure and capture hood that still bolt to the existing mixer.",
    ],
    3,
    "Core Rule: Last sentence closed substitution that needs a new vessel. Bolt-on enclosure is remaining engineering. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Last-sentence freeze + hierarchy. Why Each Distractor Fails: Switch to a non-hazardous powder that requires a new vessel.: Closed by the freeze. | Stop production permanently as the only ethical option.: Not required while engineering remains. | A poster on PPE donning.: Admin around open hardware. | Local enclosure and capture hood that still bolt to the existing mixer.: Correct: remaining engineering.",
    "STEM",
    "Exam",
    [
      "Closed by the freeze.",
      "Not required while engineering remains.",
      "Admin around open hardware.",
      "Correct: remaining engineering.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Elimination, then substitution, then engineering, then administrative, then PPE. The last sentence can close a row; take the highest remaining. A polished lower-row program is the usual distractor. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.01",
    "Personal samples sit at 40% of the PEL and 90% of the TLV. A non-isocyanate substitute is still on the approved-materials list. Best move?",
    [
      "Declare victory because the PEL is met.",
      "Treat the TLV as a legal ceiling and stop.",
      "Substitute while it is still open.",
      "Add only a medical surveillance program.",
    ],
    2,
    "Core Rule: PEL is legal, TLV is advisory; neither skips an open substitute. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: PEL vs TLV; hierarchy. Why Each Distractor Fails: Declare victory because the PEL is met.: PEL is not a skip ticket. | Treat the TLV as a legal ceiling and stop.: TLV is not a statute. | Substitute while it is still open.: Correct: substitute. | Add only a medical surveillance program.: Surveillance is not a row that climbs.",
    "PELTLV",
    "Exam",
    [
      "PEL is not a skip ticket.",
      "TLV is not a statute.",
      "Correct: substitute.",
      "Surveillance is not a row that climbs.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Elimination, then substitution, then engineering, then administrative, then PPE. The last sentence can close a row; take the highest remaining. A polished lower-row program is the usual distractor. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.01",
    "Brownfield unit: solvent is customer-specified and the vessel cannot change. Capital remains for a dedicated ventilated room or for portable fans plus SAR. Best remaining move?",
    [
      "Fans and supplied-air as the primary package.",
      "Stop all work and wait for a new contract year.",
      "Dedicated room and engineered ventilation; SAR only for residual.",
      "SOP only and call it ALARP.",
    ],
    2,
    "Core Rule: Substitution closed. Remaining design freedom is enclosure and engineered ventilation. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Hierarchy under constraint. Why Each Distractor Fails: Fans and supplied-air as the primary package.: PPE-first while engineering remains. | Stop all work and wait for a new contract year.: Not required while capital remains. | Dedicated room and engineered ventilation; SAR only for residual.: Correct: remaining engineering. | SOP only and call it ALARP.: Paper around open hardware.",
    "HIER",
    "Expert",
    [
      "PPE-first while engineering remains.",
      "Not required while capital remains.",
      "Correct: remaining engineering.",
      "Paper around open hardware.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Elimination, then substitution, then engineering, then administrative, then PPE. The last sentence can close a row; take the highest remaining. A polished lower-row program is the usual distractor. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.01",
    "Finance offers a higher liability limit instead of specifying a quieter blower that has not been purchased. The insurance move is:",
    [
      "Elimination of noise.",
      "Engineering.",
      "A hierarchy row equal to substitution.",
      "Risk transfer — not a hierarchy row.",
    ],
    3,
    "Core Rule: Insurance transfers financial consequence; it does not control the hazard. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Financial four vs hierarchy. Why Each Distractor Fails: Elimination of noise.: Does not remove the blower. | Engineering.: A policy is not hardware. | A hierarchy row equal to substitution.: Not substitution. | Risk transfer — not a hierarchy row.: Correct: transfer ≠ control.",
    "FIN",
    "Exam",
    [
      "Does not remove the blower.",
      "A policy is not hardware.",
      "Not substitution.",
      "Correct: transfer ≠ control.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Elimination, then substitution, then engineering, then administrative, then PPE. The last sentence can close a row; take the highest remaining. A polished lower-row program is the usual distractor. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.01",
    "Commissioning plan includes a full hearing-conservation program around a 110 dBA blower that has not been ordered. A 82 dBA model is still on the bid sheet. Best control?",
    [
      "Keep the 110 dBA unit and fund audiograms.",
      "Specify the quieter machine.",
      "Keep the loud unit and add earmuffs as the primary control.",
      "Keep the loud unit and add a noise permit.",
    ],
    1,
    "Core Rule: Substitution of a quieter machine is still open. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Hierarchy at purchase. Why Each Distractor Fails: Keep the 110 dBA unit and fund audiograms.: HCP is admin/PPE around an unpurchased machine. | Specify the quieter machine.: Correct: specify quieter. | Keep the loud unit and add earmuffs as the primary control.: PPE around an open substitute. | Keep the loud unit and add a noise permit.: Admin around an open substitute.",
    "HIER",
    "Exam",
    [
      "HCP is admin/PPE around an unpurchased machine.",
      "Correct: specify quieter.",
      "PPE around an open substitute.",
      "Admin around an open substitute.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Elimination, then substitution, then engineering, then administrative, then PPE. The last sentence can close a row; take the highest remaining. A polished lower-row program is the usual distractor. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.01",
    "A robot cell can still take a hard fence and a validated light curtain. Operations prefers yellow chain, vests, and a horn. Best control?",
    [
      "Yellow chain and vests as equivalent safeguarding.",
      "Horn plus a safety observer.",
      "Hard fence and validated light curtain with stopping-time check.",
      "A laminated think-safety card at the teach pendant.",
    ],
    2,
    "Core Rule: Safeguarding hardware is engineering; chain and vests are admin/PPE. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Machine safeguarding vs hierarchy. Why Each Distractor Fails: Yellow chain and vests as equivalent safeguarding.: Not safeguarding. | Horn plus a safety observer.: Admin around open hardware. | Hard fence and validated light curtain with stopping-time check.: Correct: engineering. | A laminated think-safety card at the teach pendant.: Admin.",
    "HIER",
    "Exam",
    [
      "Not safeguarding.",
      "Admin around open hardware.",
      "Correct: engineering.",
      "Admin.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Elimination, then substitution, then engineering, then administrative, then PPE. The last sentence can close a row; take the highest remaining. A polished lower-row program is the usual distractor. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.01",
    "An FMEA scores “operator fails to don respirator” as the worst RPN. A safer coating is still available. Best reading?",
    [
      "The FMEA authorizes skipping substitution.",
      "RPN on PPE use does not outrank a still-open substitute.",
      "RPN is a legal PEL.",
      "Increase detection by adding cameras and keep the coating.",
    ],
    1,
    "Core Rule: Tool output does not invert the hierarchy. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: FMEA vs hierarchy. Why Each Distractor Fails: The FMEA authorizes skipping substitution.: RPN is not a skip ticket. | RPN on PPE use does not outrank a still-open substitute.: Correct: hierarchy still governs. | RPN is a legal PEL.: RPN is not a PEL. | Increase detection by adding cameras and keep the coating.: Detection is a weak lever around an open substitute.",
    "TOOL",
    "Expert",
    [
      "RPN is not a skip ticket.",
      "Correct: hierarchy still governs.",
      "RPN is not a PEL.",
      "Detection is a weak lever around an open substitute.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Elimination, then substitution, then engineering, then administrative, then PPE. The last sentence can close a row; take the highest remaining. A polished lower-row program is the usual distractor. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.01",
    "A parts washer can be eliminated by specifying pre-cleaned supplier parts at a 6% piece-price increase. Operations wants to keep washing and add gloves. Best choice?",
    [
      "Keep washing and upgrade gloves.",
      "Eliminate the washer by specifying pre-cleaned parts.",
      "Keep washing and add a permit.",
      "Keep washing and add a toolbox talk.",
    ],
    1,
    "Core Rule: Elimination is still open. Gloves are PPE around a washer you do not need. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: PtD / hierarchy. Why Each Distractor Fails: Keep washing and upgrade gloves.: PPE around an eliminable washer. | Eliminate the washer by specifying pre-cleaned parts.: Correct: eliminate. | Keep washing and add a permit.: Admin around an eliminable washer. | Keep washing and add a toolbox talk.: Admin around an eliminable washer.",
    "HIER",
    "Exam",
    [
      "PPE around an eliminable washer.",
      "Correct: eliminate.",
      "Admin around an eliminable washer.",
      "Admin around an eliminable washer.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Elimination, then substitution, then engineering, then administrative, then PPE. The last sentence can close a row; take the highest remaining. A polished lower-row program is the usual distractor. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.01",
    "Two options both reduce exposure: a downdraft enclosure still on the drawing, and a well-run SAR program already funded. Stem does not freeze design. Pick:",
    [
      "SAR, because it is already funded.",
      "Split the difference: half enclosure, half SAR as co-primaries.",
      "The downdraft enclosure; SAR only for residual.",
      "A new permit instead of either.",
    ],
    2,
    "Core Rule: If two answers work, take higher hierarchy / system / design. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Exam default. Why Each Distractor Fails: SAR, because it is already funded.: Funding does not climb. | Split the difference: half enclosure, half SAR as co-primaries.: Co-primary PPE is not the rule. | The downdraft enclosure; SAR only for residual.: Correct: higher row. | A new permit instead of either.: Admin is lower than both.",
    "HIER",
    "Exam",
    [
      "Funding does not climb.",
      "Co-primary PPE is not the rule.",
      "Correct: higher row.",
      "Admin is lower than both.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Elimination, then substitution, then engineering, then administrative, then PPE. The last sentence can close a row; take the highest remaining. A polished lower-row program is the usual distractor. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.01",
    "You are the CSP reviewing a live decision at a food packaging SKU change. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Which of the following is PPE rather than engineering.",
    [
      "A bolted local enclosure.",
      "A validated light curtain.",
      "A downdraft booth on the drawing.",
      "A supplied-air respirator with change-out schedule.",
    ],
    3,
    "Core Rule: Hardware off the body is engineering; on the body is PPE. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Row labels. Why Each Distractor Fails: A bolted local enclosure.: Engineering. | A validated light curtain.: Engineering. | A downdraft booth on the drawing.: Engineering. | A supplied-air respirator with change-out schedule.: Correct: on the body.",
    "HIER",
    "Foundation",
    [
      "Engineering.",
      "Engineering.",
      "Engineering.",
      "Correct: on the body.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Elimination, then substitution, then engineering, then administrative, then PPE. The last sentence can close a row; take the highest remaining. A polished lower-row program is the usual distractor. Verify the critical step before accepting a lower-tier control.",
    }
  ),
];

