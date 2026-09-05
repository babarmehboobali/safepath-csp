import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D4.03";
const explain = (core: string, calc: string, standards: string, distractors: string) =>
  `Core Rule: ${core} Calculation Steps: ${calc} Standards Cited: ${standards} Why Each Distractor Fails: ${distractors}`;

export const classFields: ClassFields = {
  hook:
    "A warehouse fire-protection review shows sprinklers, a fire pump, alarms, extinguishers, and an impressive emergency team. Yet the commodity hazard changed from ordinary combustibles to higher-challenge storage and the hydraulic basis was never revisited. You are the CSP. The question is whether the system still meets the hazard, not whether the building has enough red equipment.",
  hookOilGas: `A process warehouse adds a new flammable-liquid storage arrangement. The site has hydrants, sprinklers, alarms, extinguishers, and a fire brigade. You are the CSP. The decision is whether the protection system matches the hazard, water supply, detection, separation, and inspection/testing assumptions.`,
  hookConstruction: `A new construction warehouse changes storage height and commodity class after the fire-safety design is approved. The project team says the existing sprinkler layout is adequate because it was signed off. You are the CSP. The question is hazard classification and design verification before occupancy.`,
  rule:
    "Fire protection is a system: prevent ignition and fuel escalation, detect, suppress/control, contain, and support safe response. Sprinkler design is hazard/commodity/configuration driven; the hydraulic demand must be supported by the available water supply and system components. Fire pumps provide pressure/flow support, while alarms and supervision tell people/systems that protection has operated or been impaired. Inspection, testing, and maintenance preserve the assumptions. Do not treat extinguishers, alarms, sprinklers, pumps, and fire brigade staffing as interchangeable layers.",
  modelCaption:
    "Engineering stack: HAZARD/COMMODITY → required suppression/control demand → water source → riser/valves → branch piping → sprinklers. Parallel systems: detection/alarm (NFPA 72) and ITM (NFPA 25). Emergency response is downstream of the engineered protection. Add a red warning: a pump, alarm, and sprinkler are different functions.",
  workedCase:
    "Illustrative sprinkler arithmetic only: assume a selected sprinkler has K = 5.6 gpm/(psi^0.5) and pressure at the sprinkler is 7 psi. Q = K√P = 5.6×√7 = 5.6×2.646 ≈ 14.82 gpm, rounded to 14.8 gpm. If an illustrative calculation required 12 sprinklers at that same pressure, sprinkler flow alone would be 12×14.8 = 177.6 gpm. Add any required hose/other demand only when the governing design standard and scenario say so. This exercise teaches Q=K√P; it is not a design approval or a substitute for the applicable NFPA hydraulic design method.",
  trapsJson: traps(
    "Choosing an extinguisher based only on a broad fire class while ignoring the actual fuel and system hazard.",
    "Assuming a fire pump guarantees enough water without checking the system hydraulic demand and water supply.",
    "Treating a fire alarm as proof that sprinklers will suppress the fire.",
  ),
  contrastJson: contrast([
    { looksLike: "Alarm", actually: "Detection/notification; not automatic suppression" },
    { looksLike: "Fire pump", actually: "Pressure/flow source for the protection system" },
    { looksLike: "Sprinkler", actually: "Automatic suppression/control component" },
    { looksLike: "NFPA 25", actually: "Inspection/testing/maintenance of water-based systems" },
    { looksLike: "NFPA 72", actually: "Fire alarm and signaling system code" },
    { looksLike: "Extinguisher", actually: "First-aid/manual suppression for incipient fires, within its rating" },
  ]),
  mustScoreJson: mustScore(
    "Fire protection engineering: hazard-based design of detection/suppression/water supply.",
    "Occupancy and commodity classification drive density needs.",
    "Hydraulic concepts and reliability of water supplies.",
    "Impairment management is part of engineered performance.",
    "Coordinate with egress and structural fire resistance.",
    "Prevention still preferred when ignition/fuel can be removed.",
    "ITM keeps design performance real.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "commodity changes without redesign review", pick: "re-evaluate protection design" },
    { ifStem: "water supply inadequate", pick: "correct supply before claiming protection" },
    { ifStem: "impairment unmanaged", pick: "formal impairment program" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "fuel can be eliminated", pick: "prevention first" },
  ),

  brief: `Fire protection is a system: prevent ignition and fuel escalation, detect, suppress/control, contain, and support safe response. Sprinkler design is hazard/commodity/configuration driven; the hydraulic demand must be supported by the available water supply and system components. Fire pumps provide pressure/flow support, while alarms and supervision tell people/systems that protection has operated or been impaired. Inspection, If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Fire protection is a system: prevent ignition and fuel escalation, detect, suppress/control, contain, and support safe response. Sprinkler design is hazard/commodity/configuration driven; the hydraulic demand must be supported by the available water supply and system components. Fire pumps provide pressure/flow support, while alarms and supervision tell people/systems that protection has operated or been impaired. Inspection, testing, and maintenance preserve the assumptions. Do not treat extinguishers, alarms, sprinklers, pumps, and fire brigade staffing as interchangeable layers. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
A warehouse fire-protection review shows sprinklers, a fire pump, alarms, extinguishers, and an impressive emergency team. Yet the commodity hazard changed from ordinary combustibles to higher-challenge storage and the hydraulic basis was never revisited. You are the CSP. The question is whether the system still meets the hazard, not whether the building has enough red equipment. Oil-and-gas skin: A process warehouse adds a new flammable-liquid storage arrangement. The site has hydrants, sprinklers, alarms, extinguishers, and a fire brigade. You are the CSP. The decision is whether the protection system matches the hazard, water supply, detection, separation, and inspection/testing assumptions. Construction skin: A new construction warehouse changes storage height and commodity class after the fire-safety design is approved. The project team says the existing sprinkler layout is adequate because it was signed off. You are the CSP. The question is hazard classification and design verification before occupancy. Work the case: Illustrative sprinkler arithmetic only: assume a selected sprinkler has K = 5.6 gpm/(psi^0.5) and pressure at the sprinkler is 7 psi. Q = KâP = 5.6Ãâ7 = 5.6Ã2.646 â 14.82 gpm, rounded to 14.8 gpm. If an illustrative calculation required 12 sprinklers at that same pressure, sprinkler flow alone would be 12Ã14.8 = 177.6 gpm. Add any required hose/other demand only when the governing design standard and scenario say so. This exercise teaches Q=KâP; it is not a design approval or a substitute for the applicable NFPA hydraulic design method. Classic traps: Choosing an extinguisher based only on a broad fire class while ignoring the actual fuel and system hazard.; Assuming a fire pump guarantees enough water without checking the system hydraulic demand and water supply.; Treating a fire alarm as proof that sprinklers will suppress the fire.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for fire protection engineering. Verify whether a higher system or design fix is still open. Contrast labels: Alarm is actually Detection/notification; not automatic suppression; Fire pump is actually Pressure/flow source for the protection system; Sprinkler is actually Automatic suppression/control component; NFPA 25 is actually Inspection/testing/maintenance of water-based systems; NFPA 72 is actually Fire alarm and signaling system code. If the stem shows commodity changes without redesign review, pick re-evaluate protection design. If the stem shows water supply inadequate, pick correct supply before claiming protection. If the stem shows impairment unmanaged, pick formal impairment program. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows fuel can be eliminated, pick prevention first. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Fire protection — equipment count or engineered system sits in CSP-11 Domain 4 Emergency Management. The exam tests whether you apply the rule when a package already looks complete. Core rule: Fire protection is a system: prevent ignition and fuel escalation, detect, suppress/control, contain, and support safe response. Sprinkler design is hazard/commodity/configuration driven; the hydraulic demand must be supported by the available water supply and system components. Fire pumps provide pressure/flow support, while alarms and supervision tell people/systems that protection has operated or been impaired. Inspection, testing, and maintenance preserve the assumptions. Do not treat extinguishers, alarms, sprinklers, pumps, and fire brigade staffing as interchangeable layers. Field context: A warehouse fire-protection review shows sprinklers, a fire pump, alarms, extinguishers, and an impressive emergency team. Yet the commodity hazard changed from ordinary combustibles to higher-challenge storage and the hydraulic basis was never revisited. You are the CSP. The question is whether the system still meets the hazard, not whether the building has enough red equipment. The oil-and-gas skin shifts the same decision into production pressure: A process warehouse adds a new flammable-liquid storage arrangement. The site has hydrants, sprinklers, alarms, extinguishers, and a fire brigade. You are the CSP. The decision is whether the protection system matches the hazard, water supply, detection, separation, and inspection/testing assumptions. The construction skin shifts it into schedule and trade stacking: A new construction warehouse changes storage height and commodity class after the fire-safety design is approved. The project team says the existing sprinkler layout is adequate because it was signed off. You are the CSP. The question is hazard classification and design verification before occupancy. Model caption for this class: Engineering stack: HAZARD/COMMODITY â required suppression/control demand â water source â riser/valves â branch piping â sprinklers. Parallel systems: detection/alarm (NFPA 72) and ITM (NFPA 25). Emergency response is downstream of the engineered protection. Add a red warning: a pump, alarm, and sprinkler are different functions. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Fire protection engineering: hazard-based design of detection/suppression/water supply. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Occupancy and commodity classification drive density needs. (3) Hydraulic concepts and reliability of water supplies. (4) Impairment management is part of engineered performance. (5) Coordinate with egress and structural fire resistance. (6) Prevention still preferred when ignition/fuel can be removed. (7) ITM keeps design performance real. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Illustrative sprinkler arithmetic only: assume a selected sprinkler has K = 5.6 gpm/(psi^0.5) and pressure at the sprinkler is 7 psi. Q = KâP = 5.6Ãâ7 = 5.6Ã2.646 â 14.82 gpm, rounded to 14.8 gpm. If an illustrative calculation required 12 sprinklers at that same pressure, sprinkler flow alone would be 12Ã14.8 = 177.6 gpm. Add any required hose/other demand only when the governing design standard and scenario say so. This exercise teaches Q=KâP; it is not a design approval or a substitute for the applicable NFPA hydraulic design method. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Choosing an extinguisher based only on a broad fire class while ignoring the actual fuel and system hazard.; Assuming a fire pump guarantees enough water without checking the system hydraulic demand and water supply.; Treating a fire alarm as proof that sprinklers will suppress the fire.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Alarm” is really Detection/notification; not automatic suppression; “Fire pump” is really Pressure/flow source for the protection system; “Sprinkler” is really Automatic suppression/control component; “NFPA 25” is really Inspection/testing/maintenance of water-based systems; “NFPA 72” is really Fire alarm and signaling system code; “Extinguisher” is really First-aid/manual suppression for incipient fires, within its rating. Stem-if-then map: if commodity changes without redesign review → re-evaluate protection design; if water supply inadequate → correct supply before claiming protection; if impairment unmanaged → formal impairment program; if two answers work → higher hierarchy / system / design; if fuel can be eliminated → prevention first. Scoring favors evidence, owners, verification, and hierarchy-smart controls on fire protection engineering. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Fire protection — equipment count or engineered system?",
  cardBack:
    "Match the protection to the hazard, then verify hydraulic demand, water supply, detection, and ITM. Q=K√P when given K and P. Do not treat alarms, pumps, sprinklers, extinguishers, and response as interchangeable.",
  teachBackKey:
    "Pass if the answer starts with hazard/commodity, separates sprinkler/alarm/pump/ITM functions, and can calculate Q=K√P from supplied values.",
};

export const items: ClassItem[] = [
  exam(T, "A storage area changes to a different commodity and higher storage arrangement after the sprinkler design was approved. Best CSP action?", [
    "Keep the design because the sprinkler count is unchanged.",
    "Re-evaluate the protection basis against the new hazard, commodity, and storage configuration.",
    "Add portable extinguishers and keep the existing design.",
    "Increase fire-watch staffing only.",
  ], 1, explain(
    "Fire protection adequacy depends on the hazard and configuration, not merely installed device count.",
    "Identify the changed commodity/storage parameters, determine the governing design basis, and verify the system remains adequate.",
    "NFPA 13 fire-sprinkler design principles; CSP fire-protection engineering task.",
    "A assumes unchanged hardware means unchanged demand; C and D are downstream controls that do not validate the automatic system."
  ), "STEM", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Fire protection is a system: prevent ignition and fuel escalation, detect, suppress/control, contain, and support safe response. Sprinkler design is hazard/commodity/configuration driven; the hydraulic demand must be... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A sprinkler has K=5.6 and pressure P=7 psi. Approximate flow?", [
    "2.1 gpm.",
    "14.8 gpm.",
    "39.2 gpm.",
    "177.6 gpm.",
  ], 1, explain(
    "For the supplied sprinkler relationship, Q=K√P.",
    "√7≈2.646; Q=5.6×2.646≈14.82 gpm, so 14.8 gpm.",
    "Illustrative NFPA sprinkler hydraulic relationship; actual design follows the governing NFPA 13 method.",
    "A divides instead of multiplies; C effectively squares pressure without the square root; D is the total for 12 sprinklers from a later calculation, not one sprinkler."
  ), "UNIT", "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Fire protection is a system: prevent ignition and fuel escalation, detect, suppress/control, contain, and support safe response. Sprinkler design is hazard/commodity/configuration driven; the hydraulic demand must be... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Using the same illustrative 14.8 gpm per sprinkler, 12 sprinklers flow approximately how much before any other demand is added?", [
    "14.8 gpm.",
    "26.8 gpm.",
    "177.6 gpm.",
    "2,129.2 gpm.",
  ], 2, explain(
    "Total flow for identical sprinklers at the same pressure is the per-sprinkler flow multiplied by the number of flowing sprinklers.",
    "12×14.8 = 177.6 gpm.",
    "Illustrative NFPA hydraulic calculation concept.",
    "A gives one sprinkler; B has no hydraulic basis; D multiplies twice by 12."
  ), "FORM", "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Fire protection is a system: prevent ignition and fuel escalation, detect, suppress/control, contain, and support safe response. Sprinkler design is hazard/commodity/configuration driven; the hydraulic demand must be... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Which document is most directly associated with inspection, testing, and maintenance of water-based fire protection systems?", [
    "NFPA 72.",
    "NFPA 25.",
    "NFPA 10.",
    "NFPA 20 only.",
  ], 1, explain(
    "ITM of water-based fire protection systems is the primary scope of NFPA 25.",
    "No arithmetic; match function to standard.",
    "NFPA 25 publication scope.",
    "A covers fire alarm/signaling; C portable extinguishers; D is stationary fire pumps, not the full water-based ITM scope."
  ), "TOOL", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Fire protection is a system: prevent ignition and fuel escalation, detect, suppress/control, contain, and support safe response. Sprinkler design is hazard/commodity/configuration driven; the hydraulic demand must be... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A fire pump is running, but the sprinkler network has a closed control valve upstream. Best CSP interpretation?", [
    "Protection is fully available because the pump is running.",
    "The protection is impaired; pump operation cannot overcome a closed valve in the protected path.",
    "The alarm should be ignored because the pump is active.",
    "The extinguisher rating doubles automatically.",
  ], 1, explain(
    "Protection depends on the complete flow path, not merely pump status.",
    "Trace water source → pump → valves → piping → sprinklers; a closed valve interrupts the protection path.",
    "NFPA 25 ITM/impairment principles and NFPA 20 pump function.",
    "A mistakes source pressure for available protection; C ignores impairment; D is unrelated."
  ), "STEM", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Fire protection is a system: prevent ignition and fuel escalation, detect, suppress/control, contain, and support safe response. Sprinkler design is hazard/commodity/configuration driven; the hydraulic demand must be... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Which function belongs primarily to a fire alarm/signaling system?", [
    "Hydraulically supplying sprinklers.",
    "Detecting/signaling fire conditions and initiating required notifications/interfaces.",
    "Providing portable manual extinguishment.",
    "Sizing the fire pump suction line.",
  ], 1, explain(
    "Fire alarm systems detect, signal, and interface with required emergency functions; they do not replace suppression hydraulics.",
    "Classify the system by function rather than equipment appearance.",
    "NFPA 72.",
    "A is pump/water-supply function; C is NFPA 10 territory; D is hydraulic/fire-pump engineering."
  ), "TOOL", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Fire protection is a system: prevent ignition and fuel escalation, detect, suppress/control, contain, and support safe response. Sprinkler design is hazard/commodity/configuration driven; the hydraulic demand must be... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A facility adds a high-challenge liquid storage area. Which first question is most important for protection design?", [
    "How many extinguishers fit on the wall?",
    "What is the commodity/hazard and storage configuration that governs the protection basis?",
    "How many firefighters are on the roster?",
    "What color are the sprinkler pipes?",
  ], 1, explain(
    "Engineering design begins with hazard characterization and the scenario the system must control.",
    "Define liquid characteristics, container arrangement, storage height/configuration, and room/system conditions before selecting protection.",
    "NFPA 13/NFPA 30 hazard-and-storage design concepts.",
    "A, C, and D do not establish the technical design demand."
  ), "HIER", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Fire protection is a system: prevent ignition and fuel escalation, detect, suppress/control, contain, and support safe response. Sprinkler design is hazard/commodity/configuration driven; the hydraulic demand must be... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "An extinguisher is selected for an incipient fire, while the facility also has an automatic sprinkler system. Which statement is best?", [
    "The extinguisher makes the sprinkler unnecessary.",
    "The extinguisher and sprinkler serve different roles; manual first-aid suppression does not replace automatic system design.",
    "The sprinkler rating is increased by the extinguisher rating.",
    "The alarm is now a suppression layer.",
  ], 1, explain(
    "Different protection components are complementary, not interchangeable.",
    "Identify the extinguisher's manual/incipient role and the sprinkler's automatic role.",
    "NFPA 10 and NFPA 13.",
    "A removes a key automatic layer; C has no engineering basis; D confuses signaling with suppression."
  ), "STEM", "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Fire protection is a system: prevent ignition and fuel escalation, detect, suppress/control, contain, and support safe response. Sprinkler design is hazard/commodity/configuration driven; the hydraulic demand must be... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A fire alarm panel shows a sprinkler supervisory signal for a closed valve. What should the CSP recognize?", [
    "Supervisory means the sprinkler has suppressed a fire.",
    "Supervisory means the system condition needs attention; it is not proof of fire suppression.",
    "The pump is guaranteed to be running.",
    "The building is automatically evacuated by the signal alone in every design.",
  ], 1, explain(
    "Supervisory signals report abnormal/unsatisfactory equipment conditions, not fire suppression success.",
    "Interpret the signal by function: a valve supervisory condition indicates protection impairment or status that needs correction.",
    "NFPA 72 signaling concepts and NFPA 25 valve/ITM principles.",
    "A confuses status with suppression; C invents pump state; D assumes an unqualified evacuation sequence."
  ), "STEM", "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Fire protection is a system: prevent ignition and fuel escalation, detect, suppress/control, contain, and support safe response. Sprinkler design is hazard/commodity/configuration driven; the hydraulic demand must be... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A project asks for a larger fire pump solely because the sprinkler system has more sprinklers. What is missing from the decision?", [
    "Nothing; more sprinklers always require a larger pump.",
    "Hydraulic demand and water-supply analysis, including the governing remote-area/design scenario.",
    "Only extinguisher cabinet counts.",
    "Only fire-drill frequency.",
  ], 1, explain(
    "Pump selection follows the required system demand and available supply, not sprinkler count alone.",
    "Determine design flow/pressure, losses, elevation, and available supply, then select equipment consistent with the governing standard.",
    "NFPA 13 and NFPA 20 engineering scopes.",
    "A skips system hydraulics; C and D are not the pump-sizing basis."
  ), "FORM", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Fire protection is a system: prevent ignition and fuel escalation, detect, suppress/control, contain, and support safe response. Sprinkler design is hazard/commodity/configuration driven; the hydraulic demand must be... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A sprinkler pump passed last year's test but the acceptance/design conditions have changed after a system modification. Best action?", [
    "Ignore the change because the pump already passed once.",
    "Reassess the modified system and verify the pump/system still meets the current demand and ITM assumptions.",
    "Replace the pump label only.",
    "Add a fire watch and close the engineering record.",
  ], 1, explain(
    "Engineering changes can invalidate assumptions about flow and pressure; previous testing does not automatically prove current adequacy.",
    "Identify the modified demand, compare it with available pump/water-supply performance, and document the revalidation.",
    "NFPA 20/NFPA 25 and management-of-change principles.",
    "A relies on stale evidence; C is documentation only; D is an interim response, not engineering validation."
  ), "STEM", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Fire protection is a system: prevent ignition and fuel escalation, detect, suppress/control, contain, and support safe response. Sprinkler design is hazard/commodity/configuration driven; the hydraulic demand must be... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Which statement best distinguishes fire protection engineering from emergency response?", [
    "They are identical because both involve firefighters.",
    "Engineering protection reduces/control fire growth through designed systems; emergency response acts on the event after detection/notification.",
    "Response always replaces sprinklers.",
    "Engineering is only posters and drills.",
  ], 1, explain(
    "Engineering systems are designed to control the fire environment before and during response; response manages people and incident operations.",
    "Place each activity on the protection timeline from design through incident response.",
    "NFPA 13/20/25/72 plus CSP emergency-management principles.",
    "A collapses different functions; C makes response a substitute for engineered protection; D misclassifies engineering as administrative."
  ), "HIER", "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Fire protection is a system: prevent ignition and fuel escalation, detect, suppress/control, contain, and support safe response. Sprinkler design is hazard/commodity/configuration driven; the hydraulic demand must be... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
