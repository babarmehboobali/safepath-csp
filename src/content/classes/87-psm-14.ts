import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D1.02";

export const classFields: ClassFields = {
  hook: "A covered process will start Monday. PSI is a vendor brochure, the PHA is last year’s JHA, contractors arrive unbriefed, a pump was swapped Friday with no MoC, and someone wants to “do PSSR after first production.” You are the CSP. The question is which of the 14 elements is missing — and it is usually more than one.",
  hookOilGas: `A covered process on the pad will start Monday. PSI is a vendor brochure, the PHA is last yearâs JHA, contractors arrive unbriefed, a pump was swapped Friday with no MoC, and someone wants to âdo PSSR after first production.â You are the CSP. The question is which of the 14 elements is missing â and it is usually more than one.`,
  hookConstruction: `A covered process at a plant turnaround will start Monday. PSI is a vendor brochure, the PHA is last yearâs JHA, contractors arrive unbriefed, a pump was swapped Friday with no MoC, and someone wants to âdo PSSR after first production.â You are the CSP. The question is which of the 14 elements is missing â and it is usually more than one.`,
  rule: "OSHA process safety (1910.119 family) is fourteen elements, not a binder labeled PSM. Covered processes (threshold highly hazardous chemicals / flammables as the stem states) need all fourteen: employee participation, PSI, PHA, operating procedures, training, contractors, PSSR, mechanical integrity, hot work, MoC, incident investigation, emergency planning and response, compliance audits, trade secrets. A JHA is not a PHA. A brochure is not PSI. A swap is MoC. PSSR is before start-up, not after the first batch. If two answers work, take the element that still changes the process design or information over a poster.",
  modelCaption:
    "Fourteen tiles in two rows: Participation · PSI · PHA · Procedures · Training · Contractors · PSSR · MI · Hot work · MoC · Investigation · Emergency · Audit · Trade secrets. A red stamp on PSSR: BEFORE first chemical. Caption: missing one element is a missing process — a JHA is not PHA; a swap is MoC.",
  workedCase:
    "Monday start. (1) PSI: P&IDs, materials, technology, equipment — not a brochure. (2) PHA on the current design (HAZOP/what-if), with team and hierarchy recommendations. (3) Friday pump swap: MoC before it ran, then PSI/PHA/procedures/training updated. (4) Contractors: host informs of hazards; contractor informs host of unique hazards; both train. (5) PSSR: confirm PHA recommendations, procedures, training, MI, before introducing highly hazardous chemical — not after first production. (6) Emergency planning ties to the ERP (Class 47/88), not “call 911.” Employee participation and trade secrets sit under access to information — they are not optional footnotes.",
  trapsJson: traps(
    "Calling last year’s JHA a PHA, or a vendor brochure PSI.",
    "PSSR after first production, or a like-for-like pump swap with no MoC.",
    "Training posters as a substitute for MI, procedures, or contractor control.",
  ),
  contrastJson: contrast([
    { looksLike: "Vendor brochure", actually: "Not PSI — need process, materials, and equipment information" },
    { looksLike: "JHA on one task", actually: "Not a PHA on the covered process" },
    { looksLike: "Friday pump swap “like for like”", actually: "MoC until proven identical — then still update PSI if needed" },
    { looksLike: "PSSR after first batch", actually: "Too late — PSSR is before start-up / before introducing the chemical" },
    { looksLike: "Call 911 poster", actually: "Not emergency planning and response for a covered process" },
  ]),
  mustScoreJson: mustScore(
    "PSM 14 elements form an integrated process safety system \u2014 not a buffet of favorites.",
    "PSI, PHA, operating procedures, training, contractors, pre-startup, MI, hot work, MoC, incident, emergency, compliance audits, trade secrets \u2014 know roles.",
    "MoC and MI failures repeatedly appear in incident lessons.",
    "Contractor control is a PSM element, not optional hospitality.",
    "PSI must be accurate for PHA and procedures to work.",
    "Hierarchy and inherent safety feed PSI/PHA recommendations.",
    "Audit findings need closure.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "MoC skipped for a procedure change", pick: "perform MoC" },
    { ifStem: "PSI drawings wrong", pick: "correct PSI before relying on PHA" },
    { ifStem: "contractor uncontrolled on covered process", pick: "apply contractor element controls" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "audit findings age without CAPA", pick: "close findings" },
  ),

  brief: `OSHA process safety (1910.119 family) is fourteen elements, not a binder labeled PSM. Covered processes (threshold highly hazardous chemicals / flammables as the stem states) need all fourteen: employee participation, PSI, PHA, operating procedures, training, contractors, PSSR, mechanical integrity, hot work, MoC, incident investigation, emergency planning and response, compliance audits, trade secrets. A JHA is If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
OSHA process safety (1910.119 family) is fourteen elements, not a binder labeled PSM. Covered processes (threshold highly hazardous chemicals / flammables as the stem states) need all fourteen: employee participation, PSI, PHA, operating procedures, training, contractors, PSSR, mechanical integrity, hot work, MoC, incident investigation, emergency planning and response, compliance audits, trade secrets. A JHA is not a PHA. A brochure is not PSI. A swap is MoC. PSSR is before start-up, not after the first batch. If two answers work, take the element that still changes the process design or information over a poster. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
A covered process will start Monday. PSI is a vendor brochure, the PHA is last yearâs JHA, contractors arrive unbriefed, a pump was swapped Friday with no MoC, and someone wants to âdo PSSR after first production.â You are the CSP. The question is which of the 14 elements is missing â and it is usually more than one. Oil-and-gas skin: A covered process on the pad will start Monday. Construction skin: A covered process at a plant turnaround will start Monday. Work the case: Monday start. (1) PSI: P&IDs, materials, technology, equipment â not a brochure. (2) PHA on the current design (HAZOP/what-if), with team and hierarchy recommendations. (3) Friday pump swap: MoC before it ran, then PSI/PHA/procedures/training updated. (4) Contractors: host informs of hazards; contractor informs host of unique hazards; both train. (5) PSSR: confirm PHA recommendations, procedures, training, MI, before introducing highly hazardous chemical â not after first production. (6) Emergency planning ties to the ERP (Class 47/88), not âcall 911.â Employee participation and trade secrets sit under access to information â they are not optional footnotes. Classic traps: Calling last year’s JHA a PHA, or a vendor brochure PSI.; PSSR after first production, or a like-for-like pump swap with no MoC.; Training posters as a substitute for MI, procedures, or contractor control.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for psm 14. Verify whether a higher system or design fix is still open. Contrast labels: Vendor brochure is actually Not PSI — need process, materials, and equipment information; JHA on one task is actually Not a PHA on the covered process; Friday pump swap “like for like” is actually MoC until proven identical — then still update PSI if needed; PSSR after first batch is actually Too late — PSSR is before start-up / before introducing the chemical; Call 911 poster is actually Not emergency planning and response for a covered process. If the stem shows MoC skipped for a procedure change, pick perform MoC. If the stem shows PSI drawings wrong, pick correct PSI before relying on PHA. If the stem shows contractor uncontrolled on covered process, pick apply contractor element controls. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows audit findings age without CAPA, pick close findings. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `PSM 14 — is a JHA a PHA? When is PSSR sits in CSP-11 Domain 1 Applied Safety Technology. The exam tests whether you apply the rule when a package already looks complete. Core rule: OSHA process safety (1910.119 family) is fourteen elements, not a binder labeled PSM. Covered processes (threshold highly hazardous chemicals / flammables as the stem states) need all fourteen: employee participation, PSI, PHA, operating procedures, training, contractors, PSSR, mechanical integrity, hot work, MoC, incident investigation, emergency planning and response, compliance audits, trade secrets. A JHA is not a PHA. A brochure is not PSI. A swap is MoC. PSSR is before start-up, not after the first batch. If two answers work, take the element that still changes the process design or information over a poster. Field context: A covered process will start Monday. PSI is a vendor brochure, the PHA is last yearâs JHA, contractors arrive unbriefed, a pump was swapped Friday with no MoC, and someone wants to âdo PSSR after first production.â You are the CSP. The question is which of the 14 elements is missing â and it is usually more than one. The oil-and-gas skin shifts the same decision into production pressure: A covered process on the pad will start Monday. The construction skin shifts it into schedule and trade stacking: A covered process at a plant turnaround will start Monday. Model caption for this class: Fourteen tiles in two rows: Participation Â· PSI Â· PHA Â· Procedures Â· Training Â· Contractors Â· PSSR Â· MI Â· Hot work Â· MoC Â· Investigation Â· Emergency Â· Audit Â· Trade secrets. A red stamp on PSSR: BEFORE first chemical. Caption: missing one element is a missing process â a JHA is not PHA; a swap is MoC. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) PSM 14 elements form an integrated process safety system — not a buffet of favorites. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) PSI, PHA, operating procedures, training, contractors, pre-startup, MI, hot work, MoC, incident, emergency, compliance audits, trade secrets — know roles. (3) MoC and MI failures repeatedly appear in incident lessons. (4) Contractor control is a PSM element, not optional hospitality. (5) PSI must be accurate for PHA and procedures to work. (6) Hierarchy and inherent safety feed PSI/PHA recommendations. (7) Audit findings need closure. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Monday start. (1) PSI: P&IDs, materials, technology, equipment â not a brochure. (2) PHA on the current design (HAZOP/what-if), with team and hierarchy recommendations. (3) Friday pump swap: MoC before it ran, then PSI/PHA/procedures/training updated. (4) Contractors: host informs of hazards; contractor informs host of unique hazards; both train. (5) PSSR: confirm PHA recommendations, procedures, training, MI, before introducing highly hazardous chemical â not after first production. (6) Emergency planning ties to the ERP (Class 47/88), not âcall 911.â Employee participation and trade secrets sit under access to information â they are not optional footnotes. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Calling last year’s JHA a PHA, or a vendor brochure PSI.; PSSR after first production, or a like-for-like pump swap with no MoC.; Training posters as a substitute for MI, procedures, or contractor control.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Vendor brochure” is really Not PSI — need process, materials, and equipment information; “JHA on one task” is really Not a PHA on the covered process; “Friday pump swap “like for like”” is really MoC until proven identical — then still update PSI if needed; “PSSR after first batch” is really Too late — PSSR is before start-up / before introducing the chemical; “Call 911 poster” is really Not emergency planning and response for a covered process. Stem-if-then map: if MoC skipped for a procedure change → perform MoC; if PSI drawings wrong → correct PSI before relying on PHA; if contractor uncontrolled on covered process → apply contractor element controls; if two answers work → higher hierarchy / system / design; if audit findings age without CAPA → close findings. Scoring favors evidence, owners, verification, and hierarchy-smart controls on psm 14. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "PSM 14 — is a JHA a PHA? When is PSSR?",
  cardBack:
    "Fourteen elements. PSI ≠ brochure. PHA ≠ JHA. Swap = MoC. PSSR before first chemical. Contractors, MI, hot work, investigation, EPR, audit, trade secrets, participation. Attractive wrong answer: poster after first batch. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence names PSM as fourteen elements, gives at least PSI ≠ brochure / PHA ≠ JHA / MoC on changes / PSSR before start-up, and does not treat a poster as an element.",
};

export const items: ClassItem[] = [
  exam(T, "Covered process. PSI in the file is a vendor marketing brochure. Best flag?", [
    "Brochure equals PSI — vendor is liable.",
    "PSI requires process, materials, and equipment information (hazards, technology, P&IDs, design bases). A brochure is not PSI.",
    "Brochure plus a JHA is PSI.",
    "Skip PSI if insurance is current (FIN).",
  ], 1, "PSI is an information element, not marketing.", "STEM", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA process safety (1910.119 family) is fourteen elements, not a binder labeled PSM. Covered processes (threshold highly hazardous chemicals / flammables as the stem states) need all fourteen: employee participation,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "PHA on file is last year’s JHA for changing a gasket. Best flag?", [
    "JHA is always an acceptable PHA method.",
    "A task JHA is not a process PHA. Use an appropriate PHA method on the covered process (HAZOP/what-if/etc.) so deviations can still change design.",
    "JHA plus RPN on vest color is a PHA.",
    "FTA after the first release can replace the PHA forever.",
  ], 1, "Wrong object. JHA ≠ PHA (TOOL as element mix-up).", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA process safety (1910.119 family) is fourteen elements, not a binder labeled PSM. Covered processes (threshold highly hazardous chemicals / flammables as the stem states) need all fourteen: employee participation,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Friday: pump swapped “like for like.” Monday: start-up. No MoC packet. Best element catch?", [
    "No MoC needed if the model number looks similar.",
    "MoC applies to process changes including equipment. Prove identical or run MoC; update PSI/PHA/procedures/training as needed; PSSR before introducing chemical.",
    "Cover it with a toolbox talk (training element only).",
    "Cover it with extra insurance.",
  ], 1, "A swap is MoC until proven otherwise. Training/FIN are not MoC.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA process safety (1910.119 family) is fourteen elements, not a binder labeled PSM. Covered processes (threshold highly hazardous chemicals / flammables as the stem states) need all fourteen: employee participation,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Team wants PSSR after the first production batch “when we know what broke.” Best CSP call?", [
    "Approve — PSSR is a lessons-learned meeting.",
    "Reject: PSSR is before start-up / before introducing highly hazardous chemicals. Confirm PHA items, procedures, training, MI first.",
    "Approve if done within 8 hours of the batch (TIME).",
    "Approve if contractors already left.",
  ], 1, "PSSR timing is the element. TIME is a distractor.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA process safety (1910.119 family) is fourteen elements, not a binder labeled PSM. Covered processes (threshold highly hazardous chemicals / flammables as the stem states) need all fourteen: employee participation,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Host did not brief specialty contractors on covered-process hazards. Contractors did not brief the host on their unique hazards. Which element?", [
    "Trade secrets — hide the hazards.",
    "Contractors element: two-way hazard communication and training. Host and contractor both own pieces.",
    "Employee participation only — contractors are not people.",
    "Hot work — contractors only exist during welding.",
  ], 1, "Contractors is its own element, not a footnote to training.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA process safety (1910.119 family) is fourteen elements, not a binder labeled PSM. Covered processes (threshold highly hazardous chemicals / flammables as the stem states) need all fourteen: employee participation,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "PHA recommends an interlocked isolation that is still purchasable. Team closes the PHA with “train operators to stand back.” Best flag?", [
    "Training satisfies any PHA recommendation.",
    "Hierarchy still applies inside the PHA element. Specify the isolation; training is residual. Closing with PPE/admin while engineering is open is a failed PHA close.",
    "Insurance satisfies the recommendation (FIN).",
    "Wait 24 hours then train (TIME).",
  ], 1, "HIER inside PSM. A trained person is not isolation.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA process safety (1910.119 family) is fourteen elements, not a binder labeled PSM. Covered processes (threshold highly hazardous chemicals / flammables as the stem states) need all fourteen: employee participation,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Relief valves are past their test interval. Procedures and training are current. Which element is failing first?", [
    "Training — people should notice.",
    "Mechanical integrity — inspection/test/maintenance of critical equipment. Current SOPs do not recertify a relief valve.",
    "Trade secrets — hide the dates.",
    "Hot work — relief is a welding topic.",
  ], 1, "MI is not a procedure. Attractive wrong blames training.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA process safety (1910.119 family) is fourteen elements, not a binder labeled PSM. Covered processes (threshold highly hazardous chemicals / flammables as the stem states) need all fourteen: employee participation,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A fatality on a covered process. Legal reports under 1904.39 in 8 hours and says “PSM investigation is optional because we already called OSHA.” Best flag?", [
    "Reporting replaces investigation.",
    "TIME vs element: 1904.39 is the reporting clock. PSM incident investigation is a separate element (start promptly — the stem’s 48-hour flavor). You may need both.",
    "Investigation replaces the 8-hour call.",
    "Wait 24 hours because hospitalizations use 24.",
  ], 1, "Do not mix 1904 clocks with the investigation element.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA process safety (1910.119 family) is fourteen elements, not a binder labeled PSM. Covered processes (threshold highly hazardous chemicals / flammables as the stem states) need all fourteen: employee participation,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Management withholds PHA findings from operators citing trade secrets. Best CSP position?", [
    "Approve — trade secrets trump all.",
    "Trade secrets cannot block employee access to PSI/PHA information needed for safe work. Participation includes that access.",
    "Approve if they attend a picnic (participation).",
    "Approve if contractors already know.",
  ], 1, "Trade secrets is an element with a limit: no blocking of safety information.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA process safety (1910.119 family) is fourteen elements, not a binder labeled PSM. Covered processes (threshold highly hazardous chemicals / flammables as the stem states) need all fourteen: employee participation,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Emergency element on file is a “call 911” sticker. The process can release a toxic cloud. Best remaining work?", [
    "Sticker is EPR for PSM.",
    "Emergency planning and response must address the covered-process scenarios (and tie to a real ERP). Call-911 is not a plan.",
    "Sticker plus insurance (FIN).",
    "Sticker plus 8-hour OSHA call tree only (TIME).",
  ], 1, "EPR is a plan, not a sticker. Ties to Class 47/88.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA process safety (1910.119 family) is fourteen elements, not a binder labeled PSM. Covered processes (threshold highly hazardous chemicals / flammables as the stem states) need all fourteen: employee participation,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Which analysis belongs inside the PHA element before start-up?", [
    "FMEA on the color of the PSM binder.",
    "A process-appropriate PHA method (HAZOP/what-if/FTA/FMEA as fitted) on the current design, with hierarchy-ranked recommendations that PSSR can check.",
    "JHA only on how to print the PSSR form.",
    "Pareto of lunch-room near misses.",
  ], 1, "Right tool, right object, still able to change the process.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA process safety (1910.119 family) is fourteen elements, not a binder labeled PSM. Covered processes (threshold highly hazardous chemicals / flammables as the stem states) need all fourteen: employee participation,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a refinery coker outage. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Least consistent with the 14 elements.", [
    "MoC on the Friday pump swap, PSI updated, PSSR before chemical in.",
    "Contractor briefing both directions.",
    "A laminated 14-tile poster after first production, with brochure-PSI, JHA-as-PHA, and overdue relief tests unchanged.",
    "Employee access to PHA findings.",
  ], 2, "A poster is not fourteen living elements.", "HIER", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA process safety (1910.119 family) is fourteen elements, not a binder labeled PSM. Covered processes (threshold highly hazardous chemicals / flammables as the stem states) need all fourteen: employee participation,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
