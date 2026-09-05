import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D4.02";

export const classFields: ClassFields = {
  hook: "A plant fire has three people calling themselves “in charge,” a safety intern buying foam on a personal card, and a span of 18 direct reports to the night supervisor. You are the CSP. The question is how ICS is supposed to look.",
  hookOilGas: `A well-control event has three people calling themselves âin charge,â a safety intern buying inhibitors on a personal card, and a span of 18 direct reports to the night company man. You are the CSP. The question is how ICS is supposed to look.`,
  hookConstruction: `A tower-crane incident has three people calling themselves âin charge,â a safety intern buying shoring on a personal card, and a span of 18 direct reports to the night superintendent. You are the CSP. The question is how ICS is supposed to look.`,
  rule: "ICS is the incident operating system: one Incident Commander, command staff (PIO, Safety Officer, Liaison), general staff (Operations, Planning, Logistics, Finance/Admin). Unity of command (one boss), span of control typically 3–7, modular expansion. ICS runs the incident; it is not the ERP contents list, not BCP, and not an org chart for ordinary Tuesdays. Safety Officer reports to IC and can halt unsafe work.",
  modelCaption:
    "Org: IC at top. Command staff: PIO, Safety, Liaison. General staff row: Operations | Planning | Logistics | Finance/Admin. Caption: one IC, span 3–7, Safety can stop the tactic. Finance/Admin is incident money — not headcount of evacuees.",
  workedCase:
    "Still fire. Night supervisor is initial IC, transfers to a qualified IC at the post when the team arrives. Operations runs isolation and suppression. Planning tracks resources and the IAP. Logistics gets foam and rehab. Finance/Admin tracks time/procurement. Safety Officer stops a volunteer from entering a vapor cloud. PIO speaks; nobody else tweets tanks of numbers. Span: when Operations has 12 crews, add a Branch or Division. Do not build ICS to restore invoicing — that is BCP.",
  trapsJson: traps(
    "Three Incident Commanders “to be inclusive.”",
    "Putting Safety Officer under HR instead of IC.",
    "Using ICS Finance/Admin as the evacuation headcount team.",
  ),
  contrastJson: contrast([
    { looksLike: "ICS", actually: "Modular command system for this incident" },
    { looksLike: "ERP", actually: "Site playbook that says how ICS is stood up" },
    { looksLike: "BCP", actually: "Business restoration — different object" },
    { looksLike: "Everyday org chart", actually: "Not automatically the ICS; titles may transfer" },
  ]),
  mustScoreJson: mustScore(
    "ICS provides modular command: Incident Commander, Command Staff, General Staff sections.",
    "Unity of command and manageable span of control matter.",
    "Expand/contract the organization with incident complexity.",
    "Transfer of command is formal with briefing.",
    "Integrated communications and common terminology reduce chaos.",
    "Safety Officer advises on responder risk \u2014 not optional decoration.",
    "ICS is for response management; it does not replace prevention hierarchy.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "span of control is excessive", pick: "add supervisors / expand structure" },
    { ifStem: "two bosses give conflicting orders", pick: "restore unity of command" },
    { ifStem: "command transfers without briefing", pick: "formalize transfer with briefing" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "Safety Officer is skipped on a complex incident", pick: "staff the Safety Officer role" },
  ),

  brief: `ICS is the incident operating system: one Incident Commander, command staff (PIO, Safety Officer, Liaison), general staff (Operations, Planning, Logistics, Finance/Admin). Unity of command (one boss), span of control typically 3â7, modular expansion. ICS runs the incident; it is not the ERP contents list, not BCP, and not an org chart for ordinary Tuesdays. Safety If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
ICS is the incident operating system: one Incident Commander, command staff (PIO, Safety Officer, Liaison), general staff (Operations, Planning, Logistics, Finance/Admin). Unity of command (one boss), span of control typically 3â7, modular expansion. ICS runs the incident; it is not the ERP contents list, not BCP, and not an org chart for ordinary Tuesdays. Safety Officer reports to IC and can halt unsafe work. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
A plant fire has three people calling themselves âin charge,â a safety intern buying foam on a personal card, and a span of 18 direct reports to the night supervisor. You are the CSP. The question is how ICS is supposed to look. Oil-and-gas skin: A well-control event has three people calling themselves âin charge,â a safety intern buying inhibitors on a personal card, and a span of 18 direct reports to the night company man. You are the CSP. Construction skin: A tower-crane incident has three people calling themselves âin charge,â a safety intern buying shoring on a personal card, and a span of 18 direct reports to the night superintendent. You are the CSP. Work the case: Still fire. Night supervisor is initial IC, transfers to a qualified IC at the post when the team arrives. Operations runs isolation and suppression. Planning tracks resources and the IAP. Logistics gets foam and rehab. Finance/Admin tracks time/procurement. Safety Officer stops a volunteer from entering a vapor cloud. PIO speaks; nobody else tweets tanks of numbers. Span: when Operations has 12 crews, add a Branch or Division. Do not build ICS to restore invoicing â that is BCP. Classic traps: Three Incident Commanders “to be inclusive.”; Putting Safety Officer under HR instead of IC.; Using ICS Finance/Admin as the evacuation headcount team.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for ics. Verify whether a higher system or design fix is still open. Contrast labels: ICS is actually Modular command system for this incident; ERP is actually Site playbook that says how ICS is stood up; BCP is actually Business restoration — different object; Everyday org chart is actually Not automatically the ICS; titles may transfer. If the stem shows span of control is excessive, pick add supervisors / expand structure. If the stem shows two bosses give conflicting orders, pick restore unity of command. If the stem shows command transfers without briefing, pick formalize transfer with briefing. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows Safety Officer is skipped on a complex incident, pick staff the Safety Officer role. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `ICS — who does Safety report to? What is span of control sits in CSP-11 Domain 4 Emergency Management. The exam tests whether you apply the rule when a package already looks complete. Core rule: ICS is the incident operating system: one Incident Commander, command staff (PIO, Safety Officer, Liaison), general staff (Operations, Planning, Logistics, Finance/Admin). Unity of command (one boss), span of control typically 3â7, modular expansion. ICS runs the incident; it is not the ERP contents list, not BCP, and not an org chart for ordinary Tuesdays. Safety Officer reports to IC and can halt unsafe work. Field context: A plant fire has three people calling themselves âin charge,â a safety intern buying foam on a personal card, and a span of 18 direct reports to the night supervisor. You are the CSP. The question is how ICS is supposed to look. The oil-and-gas skin shifts the same decision into production pressure: A well-control event has three people calling themselves âin charge,â a safety intern buying inhibitors on a personal card, and a span of 18 direct reports to the night company man. You are the CSP. The construction skin shifts it into schedule and trade stacking: A tower-crane incident has three people calling themselves âin charge,â a safety intern buying shoring on a personal card, and a span of 18 direct reports to the night superintendent. You are the CSP. Model caption for this class: Org: IC at top. Command staff: PIO, Safety, Liaison. General staff row: Operations | Planning | Logistics | Finance/Admin. Caption: one IC, span 3â7, Safety can stop the tactic. Finance/Admin is incident money â not headcount of evacuees. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) ICS provides modular command: Incident Commander, Command Staff, General Staff sections. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Unity of command and manageable span of control matter. (3) Expand/contract the organization with incident complexity. (4) Transfer of command is formal with briefing. (5) Integrated communications and common terminology reduce chaos. (6) Safety Officer advises on responder risk — not optional decoration. (7) ICS is for response management; it does not replace prevention hierarchy. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Still fire. Night supervisor is initial IC, transfers to a qualified IC at the post when the team arrives. Operations runs isolation and suppression. Planning tracks resources and the IAP. Logistics gets foam and rehab. Finance/Admin tracks time/procurement. Safety Officer stops a volunteer from entering a vapor cloud. PIO speaks; nobody else tweets tanks of numbers. Span: when Operations has 12 crews, add a Branch or Division. Do not build ICS to restore invoicing â that is BCP. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Three Incident Commanders “to be inclusive.”; Putting Safety Officer under HR instead of IC.; Using ICS Finance/Admin as the evacuation headcount team.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “ICS” is really Modular command system for this incident; “ERP” is really Site playbook that says how ICS is stood up; “BCP” is really Business restoration — different object; “Everyday org chart” is really Not automatically the ICS; titles may transfer. Stem-if-then map: if span of control is excessive → add supervisors / expand structure; if two bosses give conflicting orders → restore unity of command; if command transfers without briefing → formalize transfer with briefing; if two answers work → higher hierarchy / system / design; if Safety Officer is skipped on a complex incident → staff the Safety Officer role. Scoring favors evidence, owners, verification, and hierarchy-smart controls on ics. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "ICS — who does Safety report to? What is span of control?",
  cardBack:
    "One IC. Safety Officer reports to IC and can stop tactics. Command staff PIO/Safety/Liaison. General staff Ops/Planning/Logistics/Finance. Span ~3–7. Not ERP, not BCP. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence names one IC, the four general staff functions, Safety reporting to IC with stop-work, and span of control about 3–7.",
};

export const items: ClassItem[] = [
  exam(T, "Three managers each declare “I am IC” to be inclusive. Best ICS correction?", [
    "Keep three ICs — NIMS wants diversity of command.",
    "One IC (or a single unified command with shared objectives) — unity of command. Brief and transfer if needed.",
    "Let Finance/Admin be the third IC.",
    "Let the broker be IC.",
  ], 1, "STEM: one IC / unified command, not three ICs.", "STEM", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "ICS is the incident operating system: one Incident Commander, command staff (PIO, Safety Officer, Liaison), general staff (Operations, Planning, Logistics, Finance/Admin). Unity of command (one boss), span of control... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Where does the Incident Safety Officer sit, and what unique authority?", [
    "Under HR; advisory only.",
    "Reports to IC; monitors responder hazards and can stop unsafe tactics.",
    "Under Logistics with food.",
    "Under Finance/Admin with claims.",
  ], 1, "STEM: Safety → IC, stop-work on tactics.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "ICS is the incident operating system: one Incident Commander, command staff (PIO, Safety Officer, Liaison), general staff (Operations, Planning, Logistics, Finance/Admin). Unity of command (one boss), span of control... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Night Operations has 16 crews reporting to one Section Chief. Best structural move?", [
    "Keep the span — ICS forbids deputies.",
    "Add Divisions/Groups/Branches so span of control is about 3–7.",
    "Make all 16 into ICs.",
    "Move them under Finance/Admin.",
  ], 1, "STEM: span of control 3–7, modular expansion.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "ICS is the incident operating system: one Incident Commander, command staff (PIO, Safety Officer, Liaison), general staff (Operations, Planning, Logistics, Finance/Admin). Unity of command (one boss), span of control... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Which function writes the Incident Action Plan for this operational period?", [
    "BCP team restoring invoicing.",
    "Planning Section.",
    "Finance/Admin claims desk.",
    "The OSHA 300 keeper.",
  ], 1, "TOOL: ICS Planning vs BCP vs claims.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "ICS is the incident operating system: one Incident Commander, command staff (PIO, Safety Officer, Liaison), general staff (Operations, Planning, Logistics, Finance/Admin). Unity of command (one boss), span of control... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Operations wants 12 firefighters into a vapor cloud. Remote isolation valve is on the P&ID and reachable. Safety Officer should?", [
    "Cheer — ICS means send people.",
    "Stop the entry tactic; prefer engineered/remote isolation (hierarchy inside tactics).",
    "Defer to Finance because overtime is high.",
    "Defer to the broker.",
  ], 1, "HIER: Safety can stop; design isolation beats entry.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "ICS is the incident operating system: one Incident Commander, command staff (PIO, Safety Officer, Liaison), general staff (Operations, Planning, Logistics, Finance/Admin). Unity of command (one boss), span of control... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a warehouse second-shift startup. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Ransomware has darkened the HMI. Who is IC — the CISO.", [
    "Yes — cyber incidents cannot use ICS.",
    "No: ICS still applies. IC may be operations; CISO advises. Operations isolates analog; Logistics gets non-domain comms. Cyber is a constraint, not automatic IC.",
    "Yes, and Safety reports to the CISO.",
    "The umbrella carrier is IC.",
  ], 1, "STEM: cyber inside ICS, not “IT is IC.”", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "ICS is the incident operating system: one Incident Commander, command staff (PIO, Safety Officer, Liaison), general staff (Operations, Planning, Logistics, Finance/Admin). Unity of command (one boss), span of control... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "ICS Finance/Admin is tasked to run the parking-lot headcount. Problem?", [
    "None — Finance counts people.",
    "Wrong function: headcount is ERP assembly / Operations-Planning. Finance/Admin is incident money, time, procurement, claims.",
    "None if they also buy foam.",
    "None if TRIR is used as the headcount.",
  ], 1, "TOOL: Finance/Admin ≠ life-safety accounting.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "ICS is the incident operating system: one Incident Commander, command staff (PIO, Safety Officer, Liaison), general staff (Operations, Planning, Logistics, Finance/Admin). Unity of command (one boss), span of control... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A responder is killed during the incident. Team delays OSHA until the ICS 214s are typed. Clock?", [
    "ICS forms pause 1904.",
    "Fatality: 8 hours to OSHA. ICS paperwork is not the clock.",
    "24 hours because it is “incident time.”",
    "7 days.",
  ], 1, "TIME: 8-hour fatality notification.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "ICS is the incident operating system: one Incident Commander, command staff (PIO, Safety Officer, Liaison), general staff (Operations, Planning, Logistics, Finance/Admin). Unity of command (one boss), span of control... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Unified command with city fire and the plant is best described as?", [
    "Two ICs giving opposite orders to the same crew.",
    "Co-located jurisdictional leads sharing objectives in one structure; each person still has one supervisor.",
    "The insurer joining as a third IC.",
    "BCP taking Operations.",
  ], 1, "STEM: unified command ≠ multiple bosses per person.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "ICS is the incident operating system: one Incident Commander, command staff (PIO, Safety Officer, Liaison), general staff (Operations, Planning, Logistics, Finance/Admin). Unity of command (one boss), span of control... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Wrong tool: running an FMEA RPN workshop in the command post instead of standing up Operations during an active leak. Comment?", [
    "Accept — RPN is ICS Planning.",
    "TOOL: active incident needs ICS tactics now; FMEA is a design/analyze tool, not the operating system.",
    "Accept if RPN < 100.",
    "Accept if Planning is bored.",
  ], 1, "TOOL: FMEA vs ICS.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "ICS is the incident operating system: one Incident Commander, command staff (PIO, Safety Officer, Liaison), general staff (Operations, Planning, Logistics, Finance/Admin). Unity of command (one boss), span of control... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Foam purchase on a personal card because “Logistics isn’t stood up.” Best system fix?", [
    "Keep hero cards — culture.",
    "Stand up Logistics/Finance procurement under ICS; personal cards are not a supply chain.",
    "Have PIO buy foam on camera.",
    "Have the broker buy foam as transfer.",
  ], 1, "STEM: modular ICS includes Logistics. FIN if they thought the carrier supplies foam.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "ICS is the incident operating system: one Incident Commander, command staff (PIO, Safety Officer, Liaison), general staff (Operations, Planning, Logistics, Finance/Admin). Unity of command (one boss), span of control... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Retain a huge deductible AND transfer via umbrella, but never name an IC. Which two strategies were funded, and the ICS miss?", [
    "Reduce + avoid; ICS is optional.",
    "Retain + transfer; missing the command system that actually runs Reduce tactics.",
    "Two loss-prevention strategies.",
    "Avoid + reduce.",
  ], 1, "FIN: two financing strategies in one stem do not create an IC.", "FIN", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "ICS is the incident operating system: one Incident Commander, command staff (PIO, Safety Officer, Liaison), general staff (Operations, Planning, Logistics, Finance/Admin). Unity of command (one boss), span of control... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
