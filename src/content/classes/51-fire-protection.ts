import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D4.03";

export const classFields: ClassFields = {
  hook: "A warehouse boasts “we are protected” because someone bought 40 ABC extinguishers, while the wet-pipe system is shut, fire doors are chocked, and egress is blocked by pallets. You are the CSP. The question is what fire protection actually is.",
  hookOilGas: `A pad boasts âwe are protectedâ because someone bought 40 ABC extinguishers, while deluge is isolated, fire doors are chocked, and the muster path is blocked by totes. You are the CSP. The question is what fire protection actually is.`,
  hookConstruction: `A high-rise job boasts âwe are protectedâ because someone bought 40 ABC extinguishers, while standpipes are dry without a plan, fire doors are chocked, and egress is blocked by pallets. You are the CSP. The question is what fire protection actually is.`,
  rule: "Fire protection is detection, alarm, suppression (automatic and manual), compartmentation, and egress support after a fire can start. Active (sprinklers, pumps, detection) and passive (ratings, dampers, doors) must both work. Protection does not retire prevention. A shut valve or a chocked door is not a system. If two answers work, take the designed system (sprinkler/compartment/egress) over more cans.",
  modelCaption:
    "Layers: Detection/alarm → Suppression (sprinkler/standpipe/extinguisher) → Compartment (walls/doors/dampers) → Egress. A closed OS&Y tagged “off = no protection.” Caption: cans are residual manual tools, not the building system.",
  workedCase:
    "Warehouse occupancy. Protection: wet-pipe per occupancy, fire pump on a reliable feed (ERP/BCP utilities), detection where required, rated separations, self-closing doors not chocked, extinguishers as occupant-use residual, egress per life safety (Class 11). Finding: main drain test skipped, 18 doors chocked, pallets in the aisle. That is not “protected.” Prevention (Class 50) still owns fuel/ignition. Do not trade sprinklers for a policy.",
  trapsJson: traps(
    "Calling a pile of extinguishers a suppression system.",
    "Chocking fire doors “for airflow” and claiming compartmentation.",
    "Using protection to skip hot-work and segregation.",
  ),
  contrastJson: contrast([
    { looksLike: "Protection", actually: "Detect, suppress, compartment, support egress" },
    { looksLike: "Prevention", actually: "Take a tetrahedron leg off before ignition" },
    { looksLike: "Active", actually: "Needs water, power, detection, moving parts" },
    { looksLike: "Passive", actually: "Ratings and doors that work without a pump" },
  ]),
  mustScoreJson: mustScore(
    "Protection detects, suppresses, contains, and notifies after ignition.",
    "Detection, sprinklers, extinguishers, fire walls, and alarms are protection tools.",
    "Design protection to the hazard; maintenance keeps it reliable.",
    "Impairment programs control taken-out-of-service systems.",
    "Egress and compartmentation support life safety during fire.",
    "Protection complements prevention \u2014 it does not replace open prevention.",
    "Water supply and inspection/testing/maintenance are part of protection reliability.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "sprinklers are impaired without a program", pick: "run a formal impairment program" },
    { ifStem: "prevention is still open", pick: "do not rely on protection alone" },
    { ifStem: "detection exists without notification path", pick: "complete the protection chain" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "ITM is overdue on water-based systems", pick: "restore inspection/testing/maintenance" },
  ),

  brief: `Fire protection is detection, alarm, suppression (automatic and manual), compartmentation, and egress support after a fire can start. Active (sprinklers, pumps, detection) and passive (ratings, dampers, doors) must both work. Protection does not retire prevention. A shut valve or a chocked door is not a system. If two answers work, take the designed system (sprinkler/compartment/egress) If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Fire protection is detection, alarm, suppression (automatic and manual), compartmentation, and egress support after a fire can start. Active (sprinklers, pumps, detection) and passive (ratings, dampers, doors) must both work. Protection does not retire prevention. A shut valve or a chocked door is not a system. If two answers work, take the designed system (sprinkler/compartment/egress) over more cans. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
A warehouse boasts âwe are protectedâ because someone bought 40 ABC extinguishers, while the wet-pipe system is shut, fire doors are chocked, and egress is blocked by pallets. You are the CSP. The question is what fire protection actually is. Oil-and-gas skin: A pad boasts âwe are protectedâ because someone bought 40 ABC extinguishers, while deluge is isolated, fire doors are chocked, and the muster path is blocked by totes. You are the CSP. Construction skin: A high-rise job boasts âwe are protectedâ because someone bought 40 ABC extinguishers, while standpipes are dry without a plan, fire doors are chocked, and egress is blocked by pallets. You are the CSP. Work the case: Warehouse occupancy. Protection: wet-pipe per occupancy, fire pump on a reliable feed (ERP/BCP utilities), detection where required, rated separations, self-closing doors not chocked, extinguishers as occupant-use residual, egress per life safety (Class 11). Finding: main drain test skipped, 18 doors chocked, pallets in the aisle. That is not âprotected.â Prevention (Class 50) still owns fuel/ignition. Do not trade sprinklers for a policy. Classic traps: Calling a pile of extinguishers a suppression system.; Chocking fire doors “for airflow” and claiming compartmentation.; Using protection to skip hot-work and segregation.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for fire protection. Verify whether a higher system or design fix is still open. Contrast labels: Protection is actually Detect, suppress, compartment, support egress; Prevention is actually Take a tetrahedron leg off before ignition; Active is actually Needs water, power, detection, moving parts; Passive is actually Ratings and doors that work without a pump. If the stem shows sprinklers are impaired without a program, pick run a formal impairment program. If the stem shows prevention is still open, pick do not rely on protection alone. If the stem shows detection exists without notification path, pick complete the protection chain. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows ITM is overdue on water-based systems, pick restore inspection/testing/maintenance. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Fire protection — do extra cans replace a shut sprinkler valve sits in CSP-11 Domain 4 Emergency Management. The exam tests whether you apply the rule when a package already looks complete. Core rule: Fire protection is detection, alarm, suppression (automatic and manual), compartmentation, and egress support after a fire can start. Active (sprinklers, pumps, detection) and passive (ratings, dampers, doors) must both work. Protection does not retire prevention. A shut valve or a chocked door is not a system. If two answers work, take the designed system (sprinkler/compartment/egress) over more cans. Field context: A warehouse boasts âwe are protectedâ because someone bought 40 ABC extinguishers, while the wet-pipe system is shut, fire doors are chocked, and egress is blocked by pallets. You are the CSP. The question is what fire protection actually is. The oil-and-gas skin shifts the same decision into production pressure: A pad boasts âwe are protectedâ because someone bought 40 ABC extinguishers, while deluge is isolated, fire doors are chocked, and the muster path is blocked by totes. You are the CSP. The construction skin shifts it into schedule and trade stacking: A high-rise job boasts âwe are protectedâ because someone bought 40 ABC extinguishers, while standpipes are dry without a plan, fire doors are chocked, and egress is blocked by pallets. You are the CSP. Model caption for this class: Layers: Detection/alarm â Suppression (sprinkler/standpipe/extinguisher) â Compartment (walls/doors/dampers) â Egress. A closed OS&Y tagged âoff = no protection.â Caption: cans are residual manual tools, not the building system. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Protection detects, suppresses, contains, and notifies after ignition. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Detection, sprinklers, extinguishers, fire walls, and alarms are protection tools. (3) Design protection to the hazard; maintenance keeps it reliable. (4) Impairment programs control taken-out-of-service systems. (5) Egress and compartmentation support life safety during fire. (6) Protection complements prevention — it does not replace open prevention. (7) Water supply and inspection/testing/maintenance are part of protection reliability. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Warehouse occupancy. Protection: wet-pipe per occupancy, fire pump on a reliable feed (ERP/BCP utilities), detection where required, rated separations, self-closing doors not chocked, extinguishers as occupant-use residual, egress per life safety (Class 11). Finding: main drain test skipped, 18 doors chocked, pallets in the aisle. That is not âprotected.â Prevention (Class 50) still owns fuel/ignition. Do not trade sprinklers for a policy. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Calling a pile of extinguishers a suppression system.; Chocking fire doors “for airflow” and claiming compartmentation.; Using protection to skip hot-work and segregation.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Protection” is really Detect, suppress, compartment, support egress; “Prevention” is really Take a tetrahedron leg off before ignition; “Active” is really Needs water, power, detection, moving parts; “Passive” is really Ratings and doors that work without a pump. Stem-if-then map: if sprinklers are impaired without a program → run a formal impairment program; if prevention is still open → do not rely on protection alone; if detection exists without notification path → complete the protection chain; if two answers work → higher hierarchy / system / design; if ITM is overdue on water-based systems → restore inspection/testing/maintenance. Scoring favors evidence, owners, verification, and hierarchy-smart controls on fire protection. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Fire protection — do extra cans replace a shut sprinkler valve?",
  cardBack:
    "Detect, suppress, compartment, egress. Active + passive + ITM. Cans are residual. Protection ≠ prevention. Impaired system ≠ protected. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence lists detection/suppression/compartmentation/egress, says ITM keeps it real, and says protection does not retire prevention.",
};

export const items: ClassItem[] = [
  exam(T, "40 new ABC extinguishers; wet-pipe OS&Y is shut; fire doors chocked. Is the building “protected”?", [
    "Yes — count of cans is NFPA 13.",
    "No: automatic suppression is off and compartmentation is defeated. Cans are residual manual tools.",
    "Yes if the umbrella is extra.",
    "Yes if hot work is banned forever.",
  ], 1, "STEM: in-service systems, not a hardware pile.", "STEM", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Fire protection is detection, alarm, suppression (automatic and manual), compartmentation, and egress support after a fire can start. Active (sprinklers, pumps, detection) and passive (ratings, dampers, doors) must bo... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Best protection action while prevention (substitution) is still open for a flammable washer?", [
    "Skip sprinklers because prevention will happen someday.",
    "Do both: substitute/segregate (prevention) and keep occupancy-appropriate suppression (protection) for residual.",
    "Skip prevention because 13 exists.",
    "Buy only a policy.",
  ], 1, "HIER: prevention still first, protection still required for residual.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Fire protection is detection, alarm, suppression (automatic and manual), compartmentation, and egress support after a fire can start. Active (sprinklers, pumps, detection) and passive (ratings, dampers, doors) must bo... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "ABC extinguishers staged on a combustible-metal (Class D) process. Problem?", [
    "None — ABC is universal.",
    "Wrong agent: Class D needs a D-rated agent. ABC is the attractive miss.",
    "None if sprinklers are extra-hazard.",
    "None if ICS Logistics bought them.",
  ], 1, "TOOL: agent vs class of fire.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Fire protection is detection, alarm, suppression (automatic and manual), compartmentation, and egress support after a fire can start. Active (sprinklers, pumps, detection) and passive (ratings, dampers, doors) must bo... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Last sentence: sprinkler impairment for 10 days of tie-in; production wants to ship at full combustible load with “cans and hope.” Best remaining protection?", [
    "Ship — cans equal 13.",
    "Impairment procedure: minimize fuel, hot-work ban, fire watch / backup suppression as specified — do not pretend cans equal the system.",
    "Raise the deductible and ship.",
    "Turn the ERP into a BCP and ship.",
  ], 1, "STEM: impairment is a named residual, not a skip.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Fire protection is detection, alarm, suppression (automatic and manual), compartmentation, and egress support after a fire can start. Active (sprinklers, pumps, detection) and passive (ratings, dampers, doors) must bo... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a hospital utility plant shutdown. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Passive vs active: which is passive protection.", [
    "Fire pump.",
    "Rated fire barrier and a self-closing door that is not chocked.",
    "Smoke detector.",
    "Wet-pipe riser.",
  ], 1, "STEM: passive = ratings/doors. Active needs water/power/detection.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Fire protection is detection, alarm, suppression (automatic and manual), compartmentation, and egress support after a fire can start. Active (sprinklers, pumps, detection) and passive (ratings, dampers, doors) must bo... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Fire pump on the same single feed as production, no generator. Protection independence?", [
    "Fine — one feed is ordinary.",
    "Utilities: first fault kills suppression. Dual feed/generator belongs in protection + ERP/BCP.",
    "Fine if ABC cans exist.",
    "Fine if RTO of invoicing is 4 h.",
  ], 1, "STEM: water/power are part of protection.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Fire protection is detection, alarm, suppression (automatic and manual), compartmentation, and egress support after a fire can start. Active (sprinklers, pumps, detection) and passive (ratings, dampers, doors) must bo... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "ITM skipped for 24 months because “we have never had a fire, so density is conservative.” Comment?", [
    "Accept — lagging fire count is ITM.",
    "Monitor miss: NFPA 25-style inspection/testing is how protection stays real; TRIR/fire-count is not a main drain test.",
    "Accept if RPN of “valve” is low.",
    "Accept if the broker smiled.",
  ], 1, "TOOL: lagging fire count ≠ ITM.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Fire protection is detection, alarm, suppression (automatic and manual), compartmentation, and egress support after a fire can start. Active (sprinklers, pumps, detection) and passive (ratings, dampers, doors) must bo... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Insurer offers a credit if sprinklers stay, and a larger credit if the plant drops the hot-work program. Best CSP position?", [
    "Drop hot work — credits are prevention.",
    "Keep prevention + protection. Credit is transfer-adjacent money, not a tetrahedron leg. Hot work stays.",
    "Drop sprinklers instead.",
    "Raise the deductible and drop both.",
  ], 1, "FIN: insurance credit ≠ permission to retire prevention.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Fire protection is detection, alarm, suppression (automatic and manual), compartmentation, and egress support after a fire can start. Active (sprinklers, pumps, detection) and passive (ratings, dampers, doors) must bo... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Hospitalization from a warehouse fire. Team delays OSHA to print NFPA 25 reports. Clock?", [
    "25 reports pause 1904.",
    "Hospitalization: 24 hours to OSHA. ITM forms are not the clock.",
    "8 hours because fire is always fatality.",
    "7 days.",
  ], 1, "TIME: 24-hour hospitalization notification.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Fire protection is detection, alarm, suppression (automatic and manual), compartmentation, and egress support after a fire can start. Active (sprinklers, pumps, detection) and passive (ratings, dampers, doors) must bo... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Egress aisle blocked by a new sprinkler cage of spare heads. Life-safety vs protection?", [
    "Heads outrank egress.",
    "Protection must not kill egress. Move the cage; blocked exit is the wrong “protection.”",
    "Lock the exit for security as extra protection.",
    "Count it as compartmentation.",
  ], 1, "HIER/STEM: life safety egress vs storage of protection parts.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Fire protection is detection, alarm, suppression (automatic and manual), compartmentation, and egress support after a fire can start. Active (sprinklers, pumps, detection) and passive (ratings, dampers, doors) must bo... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Designer sizes a rectangular dike for foam concentrate spill as L×W×H = 10×4×2 m but uses diameter 4 m as if it were a cylinder radius. Error flavor?", [
    "None — 4 is 4.",
    "UNIT/FORM: they mixed rectangle math with cylinder radius; use the stem’s shape and do not treat width as radius.",
    "PELTLV.",
    "TIME — 8-hour TWA of foam.",
  ], 1, "UNIT/FORM: shape and radius vs width.", "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Fire protection is detection, alarm, suppression (automatic and manual), compartmentation, and egress support after a fire can start. Active (sprinklers, pumps, detection) and passive (ratings, dampers, doors) must bo... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Two funded moves: extra umbrella AND extra cans, OS&Y still shut. Classify the pair and the miss.", [
    "Prevention + protection complete.",
    "Transfer + fake manual protection; missing in-service automatic protection and prevention of fuel.",
    "Two loss-prevention engineering controls.",
    "Avoid + reduce.",
  ], 1, "FIN: financing + cans, system still off.", "FIN", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Fire protection is detection, alarm, suppression (automatic and manual), compartmentation, and egress support after a fire can start. Active (sprinklers, pumps, detection) and passive (ratings, dampers, doors) must bo... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
