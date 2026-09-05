import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D4.01";

export const classFields: ClassFields = {
  hook: "A plant manager wants the emergency response plan to be “call 911 and the broker.” The site has a toxic still, a single electrical feed, and a PLC that can be locked by ransomware. You are the CSP. The question is what an ERP must actually contain.",
  hookOilGas: `A superintendent wants the emergency response plan to be âcall 911 and the broker.â The pad has H2S, a single power feed, and a control network that can be locked by ransomware. You are the CSP. The question is what an ERP must actually contain.`,
  hookConstruction: `A PM wants the emergency response plan to be âcall 911 and the broker.â The tower crane, a single temp-power feed, and a site Wi-Fi that can be locked by ransomware are in play. You are the CSP. The question is what an ERP must actually contain.`,
  rule: "An ERP/EAP is the life-safety and incident-stabilization plan: authority, communications, evacuation/shelter, accounting for people, rescue/medical, fire/spill/process actions, shutdown, utilities, and cyber as an operational emergency when it kills alarms, access, or shutdown. It is not a BCP (continuity of the business) and not an insurance binder. OSHA 1910.38 minimums still apply where an EAP is required.",
  modelCaption:
    "ERP box with contents: command, comms, evac/assembly, headcount, rescue/medical, fire/spill/process, shutdown, utilities, cyber-as-loss-of-control. A second box labeled BCP tagged “not this class’s object.” Caption: people and stabilize first; payroll systems live in BCP.",
  workedCase:
    "Toxic still leak scenario. ERP: who is IC until ICS is stood up, how alarms go out if the network is down (radio/air horn), wind-informed assembly, headcount, rescue vs no-entry, isolation valves, dump-to-flare or scrubber, loss of power (generator for critical alarms), ransomware play that treats “alarms dark / cannot shutdown from HMI” as an emergency, not an IT ticket only. BCP later restores orders and invoicing. Calling the umbrella carrier is not an evacuation.",
  trapsJson: traps(
    "Calling the insurance binder the ERP.",
    "Omitting utilities and cyber loss-of-control because “IT owns those.”",
    "Using the ERP as a substitute for BCP — or vice versa.",
  ),
  contrastJson: contrast([
    { looksLike: "ERP / EAP", actually: "Life safety + stabilize the incident (people, energy, environment)" },
    { looksLike: "BCP / COOP", actually: "Continue or restore critical business functions (RTO/RPO)" },
    { looksLike: "ICS", actually: "Command system used to run the incident — not the plan contents list" },
    { looksLike: "Insurance / claims", actually: "Transfer after the fact — not evacuation or shutdown" },
  ]),
  mustScoreJson: mustScore(
    "ERP covers roles, notifications, evacuation/shelter, medical, spill/fire actions, resources, and recovery links.",
    "Keep contacts and diagrams current \u2014 stale ERPs fail under stress.",
    "Match plan content to credible site scenarios from risk assessment.",
    "Training and drills prove the ERP is usable.",
    "Coordination with mutual aid and public responders must be explicit.",
    "Media and family notification belong in the plan, not improvisation.",
    "Hierarchy still prefers prevention; ERP is consequence management.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "contacts are outdated", pick: "update ERP directories before the next drill" },
    { ifStem: "a credible scenario is missing", pick: "add scenario-specific actions from risk assessment" },
    { ifStem: "only a binder exists with no drills", pick: "train and drill the ERP" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "prevention is still open for the hazard", pick: "do not use ERP as a substitute for hierarchy" },
  ),

  brief: `An ERP/EAP is the life-safety and incident-stabilization plan: authority, communications, evacuation/shelter, accounting for people, rescue/medical, fire/spill/process actions, shutdown, utilities, and cyber as an operational emergency when it kills alarms, access, or shutdown. It is not a BCP (continuity of the business) and not an insurance binder. OSHA 1910.38 minimums still apply where an EAP is If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
An ERP/EAP is the life-safety and incident-stabilization plan: authority, communications, evacuation/shelter, accounting for people, rescue/medical, fire/spill/process actions, shutdown, utilities, and cyber as an operational emergency when it kills alarms, access, or shutdown. It is not a BCP (continuity of the business) and not an insurance binder. OSHA 1910.38 minimums still apply where an EAP is required. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
A plant manager wants the emergency response plan to be âcall 911 and the broker.â The site has a toxic still, a single electrical feed, and a PLC that can be locked by ransomware. You are the CSP. The question is what an ERP must actually contain. Oil-and-gas skin: A superintendent wants the emergency response plan to be âcall 911 and the broker.â The pad has H2S, a single power feed, and a control network that can be locked by ransomware. You are the CSP. Construction skin: A PM wants the emergency response plan to be âcall 911 and the broker.â The tower crane, a single temp-power feed, and a site Wi-Fi that can be locked by ransomware are in play. You are the CSP. Work the case: Toxic still leak scenario. ERP: who is IC until ICS is stood up, how alarms go out if the network is down (radio/air horn), wind-informed assembly, headcount, rescue vs no-entry, isolation valves, dump-to-flare or scrubber, loss of power (generator for critical alarms), ransomware play that treats âalarms dark / cannot shutdown from HMIâ as an emergency, not an IT ticket only. BCP later restores orders and invoicing. Calling the umbrella carrier is not an evacuation. Classic traps: Calling the insurance binder the ERP.; Omitting utilities and cyber loss-of-control because “IT owns those.”; Using the ERP as a substitute for BCP — or vice versa.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for erp contents. Verify whether a higher system or design fix is still open. Contrast labels: ERP / EAP is actually Life safety + stabilize the incident (people, energy, environment); BCP / COOP is actually Continue or restore critical business functions (RTO/RPO); ICS is actually Command system used to run the incident — not the plan contents list; Insurance / claims is actually Transfer after the fact — not evacuation or shutdown. If the stem shows contacts are outdated, pick update ERP directories before the next drill. If the stem shows a credible scenario is missing, pick add scenario-specific actions from risk assessment. If the stem shows only a binder exists with no drills, pick train and drill the ERP. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows prevention is still open for the hazard, pick do not use ERP as a substitute for hierarchy. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `ERP contents — is the binder enough? Where do cyber and utilities sit sits in CSP-11 Domain 4 Emergency Management. The exam tests whether you apply the rule when a package already looks complete. Core rule: An ERP/EAP is the life-safety and incident-stabilization plan: authority, communications, evacuation/shelter, accounting for people, rescue/medical, fire/spill/process actions, shutdown, utilities, and cyber as an operational emergency when it kills alarms, access, or shutdown. It is not a BCP (continuity of the business) and not an insurance binder. OSHA 1910.38 minimums still apply where an EAP is required. Field context: A plant manager wants the emergency response plan to be âcall 911 and the broker.â The site has a toxic still, a single electrical feed, and a PLC that can be locked by ransomware. You are the CSP. The question is what an ERP must actually contain. The oil-and-gas skin shifts the same decision into production pressure: A superintendent wants the emergency response plan to be âcall 911 and the broker.â The pad has H2S, a single power feed, and a control network that can be locked by ransomware. You are the CSP. The construction skin shifts it into schedule and trade stacking: A PM wants the emergency response plan to be âcall 911 and the broker.â The tower crane, a single temp-power feed, and a site Wi-Fi that can be locked by ransomware are in play. You are the CSP. Model caption for this class: ERP box with contents: command, comms, evac/assembly, headcount, rescue/medical, fire/spill/process, shutdown, utilities, cyber-as-loss-of-control. A second box labeled BCP tagged ânot this classâs object.â Caption: people and stabilize first; payroll systems live in BCP. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) ERP covers roles, notifications, evacuation/shelter, medical, spill/fire actions, resources, and recovery links. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Keep contacts and diagrams current — stale ERPs fail under stress. (3) Match plan content to credible site scenarios from risk assessment. (4) Training and drills prove the ERP is usable. (5) Coordination with mutual aid and public responders must be explicit. (6) Media and family notification belong in the plan, not improvisation. (7) Hierarchy still prefers prevention; ERP is consequence management. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Toxic still leak scenario. ERP: who is IC until ICS is stood up, how alarms go out if the network is down (radio/air horn), wind-informed assembly, headcount, rescue vs no-entry, isolation valves, dump-to-flare or scrubber, loss of power (generator for critical alarms), ransomware play that treats âalarms dark / cannot shutdown from HMIâ as an emergency, not an IT ticket only. BCP later restores orders and invoicing. Calling the umbrella carrier is not an evacuation. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Calling the insurance binder the ERP.; Omitting utilities and cyber loss-of-control because “IT owns those.”; Using the ERP as a substitute for BCP — or vice versa.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “ERP / EAP” is really Life safety + stabilize the incident (people, energy, environment); “BCP / COOP” is really Continue or restore critical business functions (RTO/RPO); “ICS” is really Command system used to run the incident — not the plan contents list; “Insurance / claims” is really Transfer after the fact — not evacuation or shutdown. Stem-if-then map: if contacts are outdated → update ERP directories before the next drill; if a credible scenario is missing → add scenario-specific actions from risk assessment; if only a binder exists with no drills → train and drill the ERP; if two answers work → higher hierarchy / system / design; if prevention is still open for the hazard → do not use ERP as a substitute for hierarchy. Scoring favors evidence, owners, verification, and hierarchy-smart controls on erp contents. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "ERP contents — is the binder enough? Where do cyber and utilities sit?",
  cardBack:
    "Command, comms, evac/headcount, rescue/medical, shutdown, fire/spill, utilities, cyber-as-loss-of-control. Not BCP, not insurance. 1910.38 minimums where an EAP is required. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence lists command/comms/evac/headcount/rescue/shutdown and explicitly places utilities and cyber loss-of-control inside the ERP, distinct from BCP.",
};

export const items: ClassItem[] = [
  exam(T, "Manager wants the ERP to be “call 911 and the broker.” Toxic inventory and a single power feed exist. Best CSP comment?", [
    "Accept — 911 plus claims is modern ERP.",
    "Reject: ERP needs command, comms (including degraded), evac/headcount, rescue/medical, process shutdown, and utilities — insurance is not evacuation.",
    "Accept if the umbrella is $25M.",
    "Accept if a JHA is attached.",
  ], 1, "STEM: contents vs a phone tree. FIN if they thought the broker was Treat.", "STEM", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "An ERP/EAP is the life-safety and incident-stabilization plan: authority, communications, evacuation/shelter, accounting for people, rescue/medical, fire/spill/process actions, shutdown, utilities, and cyber as an ope... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Ransomware encrypts the HMI so operators cannot see alarms or command shutdown from the console. Local mechanical isolation valves still work. ERP action?", [
    "IT ticket only — cyber is never ERP.",
    "Treat as operational emergency: analog comms, mechanical isolation, evac as needed — cyber loss-of-control belongs in the ERP, not only in BCP.",
    "Wait for payroll restoration (BCP) before isolating.",
    "Call the broker first.",
  ], 1, "STEM: cyber inside ERP when it blinds safety functions.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "An ERP/EAP is the life-safety and incident-stabilization plan: authority, communications, evacuation/shelter, accounting for people, rescue/medical, fire/spill/process actions, shutdown, utilities, and cyber as an ope... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Which object restores customer invoicing after the fire is out?", [
    "The ERP evac appendix.",
    "BCP / continuity — ERP stabilized life safety and energy; invoicing is a business function.",
    "The ICS 201 form only.",
    "The OSHA 300.",
  ], 1, "TOOL: ERP vs BCP contrast.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "An ERP/EAP is the life-safety and incident-stabilization plan: authority, communications, evacuation/shelter, accounting for people, rescue/medical, fire/spill/process actions, shutdown, utilities, and cyber as an ope... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "1910.38 EAP is required. Which element is a minimum, not a nice-to-have?", [
    "The insurer’s after-hours claims app.",
    "Procedures for reporting, evacuation, critical shutdown, accounting for people, rescue/medical, and named contacts — plus employee review.",
    "A 200-page PHA reprint.",
    "A Pareto of first aids.",
  ], 1, "STEM: OSHA EAP minimum contents.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "An ERP/EAP is the life-safety and incident-stabilization plan: authority, communications, evacuation/shelter, accounting for people, rescue/medical, fire/spill/process actions, shutdown, utilities, and cyber as an ope... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Fire-pump power is on the same single feed as production. ERP omits loss-of-power. Hazard?", [
    "None — utilities are BCP only.",
    "Utilities belong in the ERP because suppression and alarms may die with the feed; list degraded mode / backup power.",
    "None if the umbrella includes off-premises power.",
    "None if TRIR is 0.",
  ], 1, "STEM: utilities inside ERP.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "An ERP/EAP is the life-safety and incident-stabilization plan: authority, communications, evacuation/shelter, accounting for people, rescue/medical, fire/spill/process actions, shutdown, utilities, and cyber as an ope... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Two remaining isolation options during a leak: remote-operated valve already on the P&ID, or a volunteer with a wrench in the cloud. ERP tactic?", [
    "Wrench — heroics are leadership.",
    "Remote isolation (system/design); entry is residual rescue doctrine, not the preferred shutdown.",
    "Neither until BCP is activated.",
    "Transfer the leak by contract.",
  ], 1, "HIER: engineered shutdown beats a hero.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "An ERP/EAP is the life-safety and incident-stabilization plan: authority, communications, evacuation/shelter, accounting for people, rescue/medical, fire/spill/process actions, shutdown, utilities, and cyber as an ope... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "ERP lists “Finance/Admin will evacuate people.” ICS Finance/Admin actually does what?", [
    "Headcount and rescue.",
    "Incident money/time/procurement — people accounting is Operations/Planning with the ERP assembly procedure, not a claims desk.",
    "Command of the still.",
    "Write the BCP RTO.",
  ], 1, "TOOL: do not confuse ICS Finance with life-safety accounting.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "An ERP/EAP is the life-safety and incident-stabilization plan: authority, communications, evacuation/shelter, accounting for people, rescue/medical, fire/spill/process actions, shutdown, utilities, and cyber as an ope... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A fatality occurs during the response. Team delays OSHA to finish the ERP after-action. Clock?", [
    "After-action pauses 1904.",
    "Fatality: 8 hours to OSHA. ERP paperwork is not the clock.",
    "24 hours because it is “emergency.”",
    "7 days.",
  ], 1, "TIME: 8-hour fatality notification.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "An ERP/EAP is the life-safety and incident-stabilization plan: authority, communications, evacuation/shelter, accounting for people, rescue/medical, fire/spill/process actions, shutdown, utilities, and cyber as an ope... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Deductible raised AND extra umbrella bound the morning of a drill; ERP still has no assembly procedure. Which two strategies were funded, and what is missing?", [
    "Avoid + reduce; ERP is complete.",
    "Retain + transfer; missing the ERP’s life-safety reduce (evac/shutdown design). Financing is not contents.",
    "Two prevention strategies.",
    "Avoid + transfer.",
  ], 1, "FIN: two financing strategies in one stem do not write an ERP.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "An ERP/EAP is the life-safety and incident-stabilization plan: authority, communications, evacuation/shelter, accounting for people, rescue/medical, fire/spill/process actions, shutdown, utilities, and cyber as an ope... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Shelter-in-place vs evacuate: toxic plume, assembly area is downwind per the current wind sock. Best ERP rule?", [
    "Always the south parking lot — it is painted.",
    "Wind-informed assembly or shelter-in-place per procedure; a fixed downwind lot is a STEM miss if the stem gives the sock.",
    "Always evacuate through the release.",
    "Wait for BCP RTO.",
  ], 1, "STEM: last sentence gave wind. Fixed lot can be wrong.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "An ERP/EAP is the life-safety and incident-stabilization plan: authority, communications, evacuation/shelter, accounting for people, rescue/medical, fire/spill/process actions, shutdown, utilities, and cyber as an ope... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Wrong tool: using an FMEA RPN of “operator panics” as the entire ERP. Comment?", [
    "Accept — RPN is a plan.",
    "TOOL: ERP is a playbook of command/comms/evac/shutdown; RPN is not contents.",
    "Accept if RPN < 100.",
    "Accept if it is bound with the policy.",
  ], 1, "TOOL: FMEA ≠ ERP.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "An ERP/EAP is the life-safety and incident-stabilization plan: authority, communications, evacuation/shelter, accounting for people, rescue/medical, fire/spill/process actions, shutdown, utilities, and cyber as an ope... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at an offshore fabrication night shift. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Employee review of the EAP is due when.", [
    "Only at the five-year PHA revalidation.",
    "When developed, when an employee’s responsibilities change, and when the plan changes — not “at insurance renewal.”",
    "Only after a fatality.",
    "Never if ICS is used.",
  ], 1, "TIME/STEM: 1910.38 review triggers.", "TIME", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "An ERP/EAP is the life-safety and incident-stabilization plan: authority, communications, evacuation/shelter, accounting for people, rescue/medical, fire/spill/process actions, shutdown, utilities, and cyber as an ope... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
