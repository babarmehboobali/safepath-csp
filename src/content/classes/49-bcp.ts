import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D4.02";

export const classFields: ClassFields = {
  hook: "After a still fire, leadership wants “the BCP” to be the evacuation list, and they want invoicing restored before the fire-pump power feed is. You are the CSP. The question is what business continuity actually is, and where utilities and cyber sit.",
  hookOilGas: `After a separator fire, leadership wants âthe BCPâ to be the muster list, and they want nominations restored before firewater is. You are the CSP. The question is what business continuity actually is, and where utilities and cyber sit.`,
  hookConstruction: `After a crane incident, leadership wants âthe BCPâ to be the assembly list, and they want billing restored before temp-power and tower-crane weather limits are. You are the CSP. The question is what business continuity actually is, and where utilities and cyber sit.`,
  rule: "BCP/COOP continues or restores critical business functions after a disruption. Start with BIA: which functions, RTO (how soon), RPO (how much data loss). Alternate site, people, IT, suppliers, utilities, and cyber recovery belong here. ERP/ICS stabilize life safety and energy first — BCP does not evacuate people. If two answers work, take the system that restores a safety-critical utility before a billing server.",
  modelCaption:
    "Two columns: ERP/ICS (people, isolate, suppress) vs BCP (BIA → RTO/RPO → alternate processing, IT, suppliers, utilities restore, cyber rebuild). Arrow: ERP first, then BCP. Caption: invoicing is not assembly; fire-pump power is both — ERP degraded mode and BCP restore.",
  workedCase:
    "Fire takes Building A and the only 480 V feed. ERP: evac, IC, suppress, account for people. BCP: BIA said filling and release testing are critical (RTO 24 h), invoicing RTO 72 h, historian RPO 4 h. Restore generator to fire pump and to the SIS first, then a cold site for filling, then ERP-not-BCP tasks are already done. Ransomware variant: ERP if HMI is dark now; BCP for rebuilding the domain and the order book from the RPO snapshot.",
  trapsJson: traps(
    "Calling the EAP/ERP a BCP.",
    "Restoring payroll/invoicing before safety-critical utilities.",
    "Omitting cyber and single-feed utilities from the BIA.",
  ),
  contrastJson: contrast([
    { looksLike: "ERP / ICS", actually: "Life safety and incident tactics now" },
    { looksLike: "BCP", actually: "Restore critical functions to RTO/RPO after or beside the incident" },
    { looksLike: "RTO", actually: "Time until the function must be up" },
    { looksLike: "RPO", actually: "Maximum tolerable data loss (time) — not a people headcount" },
  ]),
  mustScoreJson: mustScore(
    "BCP keeps critical functions running through disruption: BIAs, strategies, plans, tests.",
    "BIA identifies critical processes, RTOs, and dependencies.",
    "Strategies may include alternate sites, redundancy, and manual workarounds.",
    "IT disaster recovery is a subset \u2014 people and supply chains matter too.",
    "Test and exercise the BCP; untested plans fail.",
    "Link BCP to emergency response and crisis communication.",
    "Do not confuse BCP with ignoring prevention of the initiating event.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "no BIA exists", pick: "perform BIA before buying fancy alternate sites" },
    { ifStem: "only IT backup is planned", pick: "cover people, facilities, and suppliers too" },
    { ifStem: "plan is never exercised", pick: "schedule tests/exercises" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "prevention of the outage is still open", pick: "prefer prevention alongside BCP" },
  ),

  brief: `BCP/COOP continues or restores critical business functions after a disruption. Start with BIA: which functions, RTO (how soon), RPO (how much data loss). Alternate site, people, IT, suppliers, utilities, and cyber recovery belong here. ERP/ICS stabilize life safety and energy first â BCP does not evacuate people. If two answers work, take the system that If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
BCP/COOP continues or restores critical business functions after a disruption. Start with BIA: which functions, RTO (how soon), RPO (how much data loss). Alternate site, people, IT, suppliers, utilities, and cyber recovery belong here. ERP/ICS stabilize life safety and energy first â BCP does not evacuate people. If two answers work, take the system that restores a safety-critical utility before a billing server. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
After a still fire, leadership wants âthe BCPâ to be the evacuation list, and they want invoicing restored before the fire-pump power feed is. You are the CSP. The question is what business continuity actually is, and where utilities and cyber sit. Oil-and-gas skin: After a separator fire, leadership wants âthe BCPâ to be the muster list, and they want nominations restored before firewater is. You are the CSP. Construction skin: After a crane incident, leadership wants âthe BCPâ to be the assembly list, and they want billing restored before temp-power and tower-crane weather limits are. You are the CSP. Work the case: Fire takes Building A and the only 480 V feed. ERP: evac, IC, suppress, account for people. BCP: BIA said filling and release testing are critical (RTO 24 h), invoicing RTO 72 h, historian RPO 4 h. Restore generator to fire pump and to the SIS first, then a cold site for filling, then ERP-not-BCP tasks are already done. Ransomware variant: ERP if HMI is dark now; BCP for rebuilding the domain and the order book from the RPO snapshot. Classic traps: Calling the EAP/ERP a BCP.; Restoring payroll/invoicing before safety-critical utilities.; Omitting cyber and single-feed utilities from the BIA.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for bcp. Verify whether a higher system or design fix is still open. Contrast labels: ERP / ICS is actually Life safety and incident tactics now; BCP is actually Restore critical functions to RTO/RPO after or beside the incident; RTO is actually Time until the function must be up; RPO is actually Maximum tolerable data loss (time) — not a people headcount. If the stem shows no BIA exists, pick perform BIA before buying fancy alternate sites. If the stem shows only IT backup is planned, pick cover people, facilities, and suppliers too. If the stem shows plan is never exercised, pick schedule tests/exercises. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows prevention of the outage is still open, pick prefer prevention alongside BCP. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `BCP vs ERP — RTO or assembly? Fire-pump power or invoicing first sits in CSP-11 Domain 4 Emergency Management. The exam tests whether you apply the rule when a package already looks complete. Core rule: BCP/COOP continues or restores critical business functions after a disruption. Start with BIA: which functions, RTO (how soon), RPO (how much data loss). Alternate site, people, IT, suppliers, utilities, and cyber recovery belong here. ERP/ICS stabilize life safety and energy first â BCP does not evacuate people. If two answers work, take the system that restores a safety-critical utility before a billing server. Field context: After a still fire, leadership wants âthe BCPâ to be the evacuation list, and they want invoicing restored before the fire-pump power feed is. You are the CSP. The question is what business continuity actually is, and where utilities and cyber sit. The oil-and-gas skin shifts the same decision into production pressure: After a separator fire, leadership wants âthe BCPâ to be the muster list, and they want nominations restored before firewater is. You are the CSP. The construction skin shifts it into schedule and trade stacking: After a crane incident, leadership wants âthe BCPâ to be the assembly list, and they want billing restored before temp-power and tower-crane weather limits are. You are the CSP. Model caption for this class: Two columns: ERP/ICS (people, isolate, suppress) vs BCP (BIA â RTO/RPO â alternate processing, IT, suppliers, utilities restore, cyber rebuild). Arrow: ERP first, then BCP. Caption: invoicing is not assembly; fire-pump power is both â ERP degraded mode and BCP restore. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) BCP keeps critical functions running through disruption: BIAs, strategies, plans, tests. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) BIA identifies critical processes, RTOs, and dependencies. (3) Strategies may include alternate sites, redundancy, and manual workarounds. (4) IT disaster recovery is a subset — people and supply chains matter too. (5) Test and exercise the BCP; untested plans fail. (6) Link BCP to emergency response and crisis communication. (7) Do not confuse BCP with ignoring prevention of the initiating event. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Fire takes Building A and the only 480 V feed. ERP: evac, IC, suppress, account for people. BCP: BIA said filling and release testing are critical (RTO 24 h), invoicing RTO 72 h, historian RPO 4 h. Restore generator to fire pump and to the SIS first, then a cold site for filling, then ERP-not-BCP tasks are already done. Ransomware variant: ERP if HMI is dark now; BCP for rebuilding the domain and the order book from the RPO snapshot. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Calling the EAP/ERP a BCP.; Restoring payroll/invoicing before safety-critical utilities.; Omitting cyber and single-feed utilities from the BIA.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “ERP / ICS” is really Life safety and incident tactics now; “BCP” is really Restore critical functions to RTO/RPO after or beside the incident; “RTO” is really Time until the function must be up; “RPO” is really Maximum tolerable data loss (time) — not a people headcount. Stem-if-then map: if no BIA exists → perform BIA before buying fancy alternate sites; if only IT backup is planned → cover people, facilities, and suppliers too; if plan is never exercised → schedule tests/exercises; if two answers work → higher hierarchy / system / design; if prevention of the outage is still open → prefer prevention alongside BCP. Scoring favors evidence, owners, verification, and hierarchy-smart controls on bcp. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "BCP vs ERP — RTO or assembly? Fire-pump power or invoicing first?",
  cardBack:
    "BCP restores functions to RTO/RPO after BIA. ERP/ICS does life safety. Utilities and cyber sit in both, different jobs. Safety-critical utility before billing. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence distinguishes BCP (RTO/RPO, functions) from ERP/ICS (life safety), and places utilities/cyber in BCP restore without letting invoicing outrank a fire pump.",
};

export const items: ClassItem[] = [
  exam(T, "Leadership labels the evacuation roster “our BCP.” Best correction?", [
    "Accept — assembly is continuity.",
    "Reject: that roster is ERP. BCP is BIA-driven restore of critical functions to RTO/RPO.",
    "Accept if ICS Finance owns it.",
    "Accept if the broker co-signed.",
  ], 1, "TOOL: ERP vs BCP.", "TOOL", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "BCP/COOP continues or restores critical business functions after a disruption. Start with BIA: which functions, RTO (how soon), RPO (how much data loss). Alternate site, people, IT, suppliers, utilities, and cyber rec... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "One remaining generator can power the fire pump or the invoicing server. Scene still hot. Best restore?", [
    "Invoicing — RTO of billing was 4 hours.",
    "Fire pump (safety-critical utility). ERP/suppression outranks BCP billing; RTO of invoicing waits.",
    "Split the generator — neither gets starting current.",
    "Neither — wait for the umbrella.",
  ], 1, "HIER/STEM: safety utility before billing.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "BCP/COOP continues or restores critical business functions after a disruption. Start with BIA: which functions, RTO (how soon), RPO (how much data loss). Alternate site, people, IT, suppliers, utilities, and cyber rec... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "RTO 24 h, RPO 4 h. Team reports “we will lose at most 24 h of data.” Error?", [
    "None — RTO equals RPO.",
    "FORM: RTO is time to restore the function; RPO is maximum data-loss age (4 h). They swapped them.",
    "UNIT — they used meters.",
    "TIME — they used the 8-hour OSHA clock as RPO.",
  ], 1, "FORM: RTO vs RPO.", "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "BCP/COOP continues or restores critical business functions after a disruption. Start with BIA: which functions, RTO (how soon), RPO (how much data loss). Alternate site, people, IT, suppliers, utilities, and cyber rec... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Ransomware wipes the domain and blinds the HMI. Which two plans fire, and in what spirit?", [
    "BCP only — cyber is never ERP.",
    "ERP/ICS now for analog isolation and life safety; BCP for rebuild/restore to RTO/RPO. Cyber sits in both.",
    "Insurance binder only.",
    "JHA only.",
  ], 1, "STEM: cyber in ERP (loss of control) and BCP (restore).", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "BCP/COOP continues or restores critical business functions after a disruption. Start with BIA: which functions, RTO (how soon), RPO (how much data loss). Alternate site, people, IT, suppliers, utilities, and cyber rec... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "BIA omitted the single 480 V feed and the sole-source nitrogen blanket. Consequence?", [
    "None — utilities are ERP-only trivia.",
    "BCP will not restore dependencies it never listed; single utilities belong in the BIA (and degraded modes in the ERP).",
    "None if RPO is 0.",
    "None if TRIR is 0.",
  ], 1, "STEM: utilities inside BIA/BCP.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "BCP/COOP continues or restores critical business functions after a disruption. Start with BIA: which functions, RTO (how soon), RPO (how much data loss). Alternate site, people, IT, suppliers, utilities, and cyber rec... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Strategy options: design a dual electrical feed this year, or buy a larger business-interruption policy. Best continuity Reduce?", [
    "The policy — transfer is RTO.",
    "Dual feed (system/design loss-reduction of downtime). Policy is transfer of money after the outage.",
    "Raise the deductible (retain as RTO).",
    "A poster about laptops.",
  ], 1, "HIER/FIN: engineering the utility beats transfer-as-BCP.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "BCP/COOP continues or restores critical business functions after a disruption. Start with BIA: which functions, RTO (how soon), RPO (how much data loss). Alternate site, people, IT, suppliers, utilities, and cyber rec... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Last sentence: cold site can run filling in 18 h but historians restore in 48 h; RPO required is 4 h. Status?", [
    "Fine — 18 h beats RTO 24 h, ignore RPO.",
    "RTO of filling may pass; RPO fails if 48 h-old historians exceed 4 h loss — both constraints must be met.",
    "Fine if invoicing is up.",
    "Fine if ICS Planning writes it on an ICS 202.",
  ], 1, "STEM: last sentence gave both RTO-relevant and RPO numbers.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "BCP/COOP continues or restores critical business functions after a disruption. Start with BIA: which functions, RTO (how soon), RPO (how much data loss). Alternate site, people, IT, suppliers, utilities, and cyber rec... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Who is IC of the fire while BCP leadership restores a warehouse?", [
    "BCP lead becomes IC automatically.",
    "ICS IC keeps the fire; BCP lead restores functions without stealing command. Two structures, one scene-stability gate.",
    "The broker is IC.",
    "Finance/Admin is IC.",
  ], 1, "TOOL: ICS vs BCP governance.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "BCP/COOP continues or restores critical business functions after a disruption. Start with BIA: which functions, RTO (how soon), RPO (how much data loss). Alternate site, people, IT, suppliers, utilities, and cyber rec... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A hospitalization occurs at the alternate site during restore. Team delays OSHA because “we are in BCP mode.” Clock?", [
    "BCP pauses 1904.",
    "Hospitalization: 24 hours to OSHA. Alternate-site work is still work.",
    "8 hours because BCP is always a fatality clock.",
    "7 days.",
  ], 1, "TIME: 24-hour hospitalization notification.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "BCP/COOP continues or restores critical business functions after a disruption. Start with BIA: which functions, RTO (how soon), RPO (how much data loss). Alternate site, people, IT, suppliers, utilities, and cyber rec... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Backup tapes have never been restored. RPO is advertised as 1 h. Problem?", [
    "None — advertised RPO is a control.",
    "Untested restore is a paper RPO; Monitor/exercise the restore or the BCP is fiction.",
    "None if the umbrella includes cyber.",
    "None if RTO is painted on the tapes.",
  ], 1, "STEM: untested backups are not a recovery strategy.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "BCP/COOP continues or restores critical business functions after a disruption. Start with BIA: which functions, RTO (how soon), RPO (how much data loss). Alternate site, people, IT, suppliers, utilities, and cyber rec... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Wrong tool: a packaging FMEA RPN as the entire BIA. Comment?", [
    "Accept — RPN is impact.",
    "TOOL: BIA is function/dependency/RTO/RPO. FMEA is single-point modes, not continuity of the enterprise.",
    "Accept if RPN < 100.",
    "Accept if it is bound with the ERP.",
  ], 1, "TOOL: FMEA ≠ BIA.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "BCP/COOP continues or restores critical business functions after a disruption. Start with BIA: which functions, RTO (how soon), RPO (how much data loss). Alternate site, people, IT, suppliers, utilities, and cyber rec... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Board funds a higher BI deductible AND a larger cyber policy the same morning, still no dual feed. Which two strategies, and the BCP miss?", [
    "Avoid + reduce; utilities are complete.",
    "Retain + transfer; missing Reduce of the utility (dual feed/generator) that actually moves RTO.",
    "Two prevention engineering controls.",
    "Avoid + reduce.",
  ], 1, "FIN: two financing strategies in one stem do not restore a feed.", "FIN", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "BCP/COOP continues or restores critical business functions after a disruption. Start with BIA: which functions, RTO (how soon), RPO (how much data loss). Alternate site, people, IT, suppliers, utilities, and cyber rec... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
