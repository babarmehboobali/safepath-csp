import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D4.01";

export const classFields: ClassFields = {
  hook: "Ransomware locks the PLC network at 02:10. The emergency coordinator wants to “keep the line running on last setpoints,” disable the SIS so valves stay open, and treat it as an IT ticket — not an ERP activation. Life-safety lighting is on the same domain. You are the CSP. The question is whether cyber is an emergency, and whether production beats fail-safe.",
  hookOilGas: `Ransomware locks the well-pad RTU network at 02:10. The coordinator wants to âkeep wells on last setpoints,â disable the SIS so shutdown valves stay open, and treat it as an IT ticket â not an ERP activation. Gas detection is on the same domain. You are the CSP. The question is whether cyber is an emergency, and whether production beats fail-safe.`,
  hookConstruction: `Ransomware locks the tower-crane and site-access controllers at 02:10. The superintendent wants to âkeep lifts on last setpoints,â defeat interlocks so the crane stays live, and treat it as an IT ticket â not an ERP activation. Site alarms are on the same domain. You are the CSP. The question is whether cyber is an emergency, and whether production beats fail-safe.`,
  rule: "A cyber event that takes control, safety, utilities, or life-safety systems is an emergency: activate the ERP, not only the IT ticket queue. ICS/SCADA and safety instrumented functions must fail to a designed safe state — do not defeat SIS/BPCS to “keep running.” ERP (what we do tonight) is not BCP (how we operate tomorrow) and not a cyber IR playbook used in isolation. Manual gauges, radios, and staffing are residual only after fail-safe. If two answers work, take fail-safe / isolation / designed degraded mode over a heroic bypass.",
  modelCaption:
    "Three stacked boxes: ERP (tonight — people, isolation, fail-safe, 911/ICS) · CYBER IR (contain, preserve, rebuild) · BCP (tomorrow’s operations). Side: SIS/BPCS — FAIL SAFE, a red sticker DEFEAT TO KEEP RUNNING. Caption: ransomware on a PLC is an emergency with a keyboard.",
  workedCase:
    "02:10 ransomware on the PLC domain. (1) Treat as ERP: account for people, isolate energy you no longer trust, start the ICS structure, notify. (2) Do not defeat the SIS to hold valves open — designed fail-safe (close, vent, stop) beats last-known setpoints. (3) Life-safety (fire alarm, egress lighting, gas detection) on the same domain: assume they may be lying; use independent means. (4) IT/cyber IR contains the malware and preserves logs — they do not run the shutdown. (5) BCP tomorrow: manual operations only if a written degraded mode exists; otherwise stay down. A radio and a clipboard are residual, not a license to run blind.",
  trapsJson: traps(
    "Treating ransomware on ICS as “IT only” and skipping ERP activation.",
    "Defeating SIS/interlocks to keep production on last setpoints.",
    "Calling BCP or a cyber IR playbook a substitute for tonight’s ERP (people, isolation, fail-safe).",
  ),
  contrastJson: contrast([
    { looksLike: "IT ticket only", actually: "Wrong if control, safety, utilities, or life-safety are in play — activate ERP" },
    { looksLike: "Defeat SIS to keep running", actually: "HIER invert — fail-safe is the design; bypass is the emergency" },
    { looksLike: "ERP", actually: "Tonight: people, isolation, command, notifications" },
    { looksLike: "Cyber IR", actually: "Contain/eradicate/preserve — supports ERP, does not replace it" },
    { looksLike: "BCP", actually: "Tomorrow’s operations — not the 02:10 decision" },
  ]),
  mustScoreJson: mustScore(
    "Cyber impacts physical ERP/ICS when OT and IT failures disrupt response.",
    "Include cyber scenarios in continuity and emergency planning when credible.",
    "Access control, segmentation, and backups are engineered cyber controls.",
    "Do not assume phones/radios work if the stem kills infrastructure.",
    "Manual fallback procedures need practice.",
    "Vendor remote access is a common weak point.",
    "Hierarchy: reduce dependence on single digital paths for critical safety functions.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "ERP assumes always-on cellular during outage", pick: "add resilient communications/manual fallbacks" },
    { ifStem: "OT remote vendor access unrestricted", pick: "segment and control access" },
    { ifStem: "no cyber scenario in drills", pick: "exercise cyber-impacted response" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "single digital path for critical trip", pick: "add independence/fallback" },
  ),

  brief: `A cyber event that takes control, safety, utilities, or life-safety systems is an emergency: activate the ERP, not only the IT ticket queue. ICS/SCADA and safety instrumented functions must fail to a designed safe state â do not defeat SIS/BPCS to âkeep running.â ERP (what we do tonight) is not BCP (how we operate tomorrow) If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
A cyber event that takes control, safety, utilities, or life-safety systems is an emergency: activate the ERP, not only the IT ticket queue. ICS/SCADA and safety instrumented functions must fail to a designed safe state â do not defeat SIS/BPCS to âkeep running.â ERP (what we do tonight) is not BCP (how we operate tomorrow) and not a cyber IR playbook used in isolation. Manual gauges, radios, and staffing are residual only after fail-safe. If two answers work, take fail-safe / isolation / designed degraded mode over a heroic bypass. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
Ransomware locks the PLC network at 02:10. The emergency coordinator wants to âkeep the line running on last setpoints,â disable the SIS so valves stay open, and treat it as an IT ticket â not an ERP activation. Life-safety lighting is on the same domain. You are the CSP. The question is whether cyber is an emergency, and whether production beats fail-safe. Oil-and-gas skin: Ransomware locks the well-pad RTU network at 02:10. The coordinator wants to âkeep wells on last setpoints,â disable the SIS so shutdown valves stay open, and treat it as an IT ticket â not an ERP activation. Gas detection is on the same domain. You are the CSP. Construction skin: Ransomware locks the tower-crane and site-access controllers at 02:10. The superintendent wants to âkeep lifts on last setpoints,â defeat interlocks so the crane stays live, and treat it as an IT ticket â not an ERP activation. Site alarms are on the same domain. You are the CSP. Work the case: 02:10 ransomware on the PLC domain. (1) Treat as ERP: account for people, isolate energy you no longer trust, start the ICS structure, notify. (2) Do not defeat the SIS to hold valves open â designed fail-safe (close, vent, stop) beats last-known setpoints. (3) Life-safety (fire alarm, egress lighting, gas detection) on the same domain: assume they may be lying; use independent means. (4) IT/cyber IR contains the malware and preserves logs â they do not run the shutdown. (5) BCP tomorrow: manual operations only if a written degraded mode exists; otherwise stay down. A radio and a clipboard are residual, not a license to run blind. Classic traps: Treating ransomware on ICS as “IT only” and skipping ERP activation.; Defeating SIS/interlocks to keep production on last setpoints.; Calling BCP or a cyber IR playbook a substitute for tonight’s ERP (people, isolation, fail-safe).. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for cyber in erp. Verify whether a higher system or design fix is still open. Contrast labels: IT ticket only is actually Wrong if control, safety, utilities, or life-safety are in play — activate ERP; Defeat SIS to keep running is actually HIER invert — fail-safe is the design; bypass is the emergency; ERP is actually Tonight: people, isolation, command, notifications; Cyber IR is actually Contain/eradicate/preserve — supports ERP, does not replace it; BCP is actually Tomorrow’s operations — not the 02:10 decision. If the stem shows ERP assumes always-on cellular during outage, pick add resilient communications/manual fallbacks. If the stem shows OT remote vendor access unrestricted, pick segment and control access. If the stem shows no cyber scenario in drills, pick exercise cyber-impacted response. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows single digital path for critical trip, pick add independence/fallback. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Ransomware on the PLC — IT ticket or ERP? Defeat the SIS sits in CSP-11 Domain 4 Emergency Management. The exam tests whether you apply the rule when a package already looks complete. Core rule: A cyber event that takes control, safety, utilities, or life-safety systems is an emergency: activate the ERP, not only the IT ticket queue. ICS/SCADA and safety instrumented functions must fail to a designed safe state â do not defeat SIS/BPCS to âkeep running.â ERP (what we do tonight) is not BCP (how we operate tomorrow) and not a cyber IR playbook used in isolation. Manual gauges, radios, and staffing are residual only after fail-safe. If two answers work, take fail-safe / isolation / designed degraded mode over a heroic bypass. Field context: Ransomware locks the PLC network at 02:10. The emergency coordinator wants to âkeep the line running on last setpoints,â disable the SIS so valves stay open, and treat it as an IT ticket â not an ERP activation. Life-safety lighting is on the same domain. You are the CSP. The question is whether cyber is an emergency, and whether production beats fail-safe. The oil-and-gas skin shifts the same decision into production pressure: Ransomware locks the well-pad RTU network at 02:10. The coordinator wants to âkeep wells on last setpoints,â disable the SIS so shutdown valves stay open, and treat it as an IT ticket â not an ERP activation. Gas detection is on the same domain. You are the CSP. The construction skin shifts it into schedule and trade stacking: Ransomware locks the tower-crane and site-access controllers at 02:10. The superintendent wants to âkeep lifts on last setpoints,â defeat interlocks so the crane stays live, and treat it as an IT ticket â not an ERP activation. Site alarms are on the same domain. You are the CSP. Model caption for this class: Three stacked boxes: ERP (tonight â people, isolation, fail-safe, 911/ICS) Â· CYBER IR (contain, preserve, rebuild) Â· BCP (tomorrowâs operations). Side: SIS/BPCS â FAIL SAFE, a red sticker DEFEAT TO KEEP RUNNING. Caption: ransomware on a PLC is an emergency with a keyboard. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Cyber impacts physical ERP/ICS when OT and IT failures disrupt response. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Include cyber scenarios in continuity and emergency planning when credible. (3) Access control, segmentation, and backups are engineered cyber controls. (4) Do not assume phones/radios work if the stem kills infrastructure. (5) Manual fallback procedures need practice. (6) Vendor remote access is a common weak point. (7) Hierarchy: reduce dependence on single digital paths for critical safety functions. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: 02:10 ransomware on the PLC domain. (1) Treat as ERP: account for people, isolate energy you no longer trust, start the ICS structure, notify. (2) Do not defeat the SIS to hold valves open â designed fail-safe (close, vent, stop) beats last-known setpoints. (3) Life-safety (fire alarm, egress lighting, gas detection) on the same domain: assume they may be lying; use independent means. (4) IT/cyber IR contains the malware and preserves logs â they do not run the shutdown. (5) BCP tomorrow: manual operations only if a written degraded mode exists; otherwise stay down. A radio and a clipboard are residual, not a license to run blind. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Treating ransomware on ICS as “IT only” and skipping ERP activation.; Defeating SIS/interlocks to keep production on last setpoints.; Calling BCP or a cyber IR playbook a substitute for tonight’s ERP (people, isolation, fail-safe).. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “IT ticket only” is really Wrong if control, safety, utilities, or life-safety are in play — activate ERP; “Defeat SIS to keep running” is really HIER invert — fail-safe is the design; bypass is the emergency; “ERP” is really Tonight: people, isolation, command, notifications; “Cyber IR” is really Contain/eradicate/preserve — supports ERP, does not replace it; “BCP” is really Tomorrow’s operations — not the 02:10 decision. Stem-if-then map: if ERP assumes always-on cellular during outage → add resilient communications/manual fallbacks; if OT remote vendor access unrestricted → segment and control access; if no cyber scenario in drills → exercise cyber-impacted response; if two answers work → higher hierarchy / system / design; if single digital path for critical trip → add independence/fallback. Scoring favors evidence, owners, verification, and hierarchy-smart controls on cyber in erp. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Ransomware on the PLC — IT ticket or ERP? Defeat the SIS?",
  cardBack:
    "ICS cyber is an emergency: activate ERP. Fail-safe; do not bypass SIS to keep running. IR contains; BCP is tomorrow. Attractive wrong answer: last setpoints and an IT ticket. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence treats ICS/cyber loss as an ERP emergency, requires fail-safe rather than SIS defeat, and separates ERP (tonight) from IR (contain) and BCP (tomorrow).",
};

export const items: ClassItem[] = [
  exam(T, "Ransomware locks the PLC network. Coordinator wants an IT ticket only; no ERP. Life-safety and process control share the domain. Best CSP call?", [
    "IT-only — no fire, no ERP.",
    "Activate the ERP: loss of control and possibly life-safety is an emergency. Cyber IR supports; it does not replace tonight’s command, accounting for people, and isolation.",
    "Wait 8 hours to see if anyone dies (TIME).",
    "Keep running; insurance will pay (FIN).",
  ], 1, "Cyber on ICS is an emergency initiator. TIME/FIN are not activation criteria.", "HIER", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "A cyber event that takes control, safety, utilities, or life-safety systems is an emergency: activate the ERP, not only the IT ticket queue. ICS/SCADA and safety instrumented functions must fail to a designed safe sta... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Operations wants to jumper the SIS so valves stay open on last setpoints during the cyber event. Best comment?", [
    "Approve — last setpoints are a designed mode.",
    "Reject: fail to the designed safe state. Defeating SIS to keep production is the emergency, not the control.",
    "Approve for 24 hours (TIME).",
    "Approve if cyber insurance is in force (FIN).",
  ], 1, "Fail-safe beats keep-running. Bypass is HIER inverted.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "A cyber event that takes control, safety, utilities, or life-safety systems is an emergency: activate the ERP, not only the IT ticket queue. ICS/SCADA and safety instrumented functions must fail to a designed safe sta... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Last sentence: “BCP recovery time is 15 minutes, so keep the line up.” Best flag?", [
    "RTO is permission to defeat safety.",
    "STEM/UNIT: RTO is a BCP recovery target, not a license to run without control. Tonight is ERP fail-safe; BCP is how you operate tomorrow if a written degraded mode exists.",
    "15 minutes is a STEL — keep running until then.",
    "15 minutes is the 1904.39 clock.",
  ], 1, "Do not import BCP minutes onto a live unsafe process.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "A cyber event that takes control, safety, utilities, or life-safety systems is an emergency: activate the ERP, not only the IT ticket queue. ICS/SCADA and safety instrumented functions must fail to a designed safe sta... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Fire alarm and gas detection sit on the ransomed domain. Best ERP assumption?", [
    "Alarms are still trusted — they are safety devices.",
    "Treat them as untrusted. Use independent means, conservative evacuation, and fail-safe process isolation. Dirty-domain detectors can lie.",
    "Ignore evacuation because detectors might false-alarm.",
    "Wait for IT to restore the domain before any isolation.",
  ], 1, "Common-cause loss of detection. Conservative fail-safe.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "A cyber event that takes control, safety, utilities, or life-safety systems is an emergency: activate the ERP, not only the IT ticket queue. ICS/SCADA and safety instrumented functions must fail to a designed safe sta... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a food packaging SKU change. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Who owns tonight’s shutdown decision.", [
    "The malware vendor.",
    "Incident Commander under the ERP/ICS. Cyber lead is technical support (contain/preserve), not a veto over fail-safe.",
    "Finance, because of ransom (FIN).",
    "Whoever answers the 8-hour OSHA phone (TIME).",
  ], 1, "ICS command vs IR support. FIN/TIME do not own isolation.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "A cyber event that takes control, safety, utilities, or life-safety systems is an emergency: activate the ERP, not only the IT ticket queue. ICS/SCADA and safety instrumented functions must fail to a designed safe sta... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Which document is the wrong first document at 02:10 with a live unsafe process?", [
    "ERP / ICS activation checklist.",
    "A brand-new HAZOP of ransomware, started at 02:15, while SIS is jumpered and people are unaccounted.",
    "Cyber IR containment steps in parallel with fail-safe.",
    "Accountability and isolation procedures.",
  ], 1, "TOOL: do not start a PHA while the emergency is unstabilized.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "A cyber event that takes control, safety, utilities, or life-safety systems is an emergency: activate the ERP, not only the IT ticket queue. ICS/SCADA and safety instrumented functions must fail to a designed safe sta... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Utilities (site power, instrument air) may also be hit. Best ERP design?", [
    "Assume utilities are fine if the office Wi-Fi is down.",
    "Annex utilities as ERP scenarios: loss of air/power/nitrogen is a process emergency. Fail-safe those energy sources; do not assume independence.",
    "Buy extra insurance for utilities (FIN) instead of an annex.",
    "Report utility loss within 8 hours as a fatality (TIME).",
  ], 1, "Utilities are emergency initiators, not IT trivia.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "A cyber event that takes control, safety, utilities, or life-safety systems is an emergency: activate the ERP, not only the IT ticket queue. ICS/SCADA and safety instrumented functions must fail to a designed safe sta... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A written, drilled degraded mode uses local gauges and radios with the process already in a safe state. Use?", [
    "Never — any manual mode is illegal.",
    "Yes, as residual after fail-safe, if the ERP/BCP actually wrote and drilled it. A clipboard is not permission to restart a live SIS-defeated line.",
    "Yes, including SIS jumpers.",
    "Yes, instead of accounting for people.",
  ], 1, "Degraded mode is designed residual, not a bypass culture.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "A cyber event that takes control, safety, utilities, or life-safety systems is an emergency: activate the ERP, not only the IT ticket queue. ICS/SCADA and safety instrumented functions must fail to a designed safe sta... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a plastics compounding turnaround. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Ransom demand arrives. First CSP-relevant move.", [
    "Pay immediately — FIN is the emergency.",
    "People and energy first: ERP, fail-safe, accountability. Ransom/insurance is a parallel legal/FIN track, not the isolation step.",
    "Ignore people until Legal signs.",
    "Wait 24 hours because it is “like a hospitalization.”",
  ], 1, "FIN is not fail-safe. Do not lead with the wallet.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "A cyber event that takes control, safety, utilities, or life-safety systems is an emergency: activate the ERP, not only the IT ticket queue. ICS/SCADA and safety instrumented functions must fail to a designed safe sta... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "No injuries yet. Someone skips ERP “because 1904.39 has not started.” Best TIME flag?", [
    "Correct — no clock, no emergency.",
    "1904.39 starts only if a fatality (8 h) or hospital/amputation/eye (24 h) later occurs. Loss of control is still an ERP now. Do not wait for a body to start command.",
    "Correct — wait 8 hours then ERP.",
    "Correct — wait 24 hours then BCP.",
  ], 1, "Reporting clocks are not ERP activation clocks.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "A cyber event that takes control, safety, utilities, or life-safety systems is an emergency: activate the ERP, not only the IT ticket queue. ICS/SCADA and safety instrumented functions must fail to a designed safe sta... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Vendor remote-access account is how the ransomware entered. Daylight control after the emergency?", [
    "Give the vendor a permanent domain admin as a thank-you.",
    "MoC/PtD: segregate ICS, control remote access, least privilege. Tonight still fail-safe; tomorrow close the path that made ERP necessary.",
    "A laminated “don’t click” card only.",
    "Extra cyber insurance only (FIN).",
  ], 1, "After the night, design the access. A poster is not segmentation.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "A cyber event that takes control, safety, utilities, or life-safety systems is an emergency: activate the ERP, not only the IT ticket queue. ICS/SCADA and safety instrumented functions must fail to a designed safe sta... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a bridge deck pour laydown yard. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Least consistent with cyber-in-ERP.", [
    "ERP activation on ICS ransomware with fail-safe isolation.",
    "Cyber IR containment under ICS command.",
    "A laminated “IT will handle it” card, SIS jumpered, people unaccounted, BCP RTO used as a reason to keep running.",
    "Independent comms and conservative evacuation when detection shares the dirty domain.",
  ], 2, "IT-only plus bypass is the anti-ERP.", "HIER", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "A cyber event that takes control, safety, utilities, or life-safety systems is an emergency: activate the ERP, not only the IT ticket queue. ICS/SCADA and safety instrumented functions must fail to a designed safe sta... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
