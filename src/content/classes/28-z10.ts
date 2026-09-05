import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D2.08";

export const classFields: ClassFields = {
  hook: "A US plant can choose ANSI/ASSP Z10 or chase an ISO 45001 certificate first. Engineering wants Z10’s design-review language. Marketing wants the ISO logo. You are the CSP. The question is what Z10 uniquely insists you actually do.",
  hookOilGas: `A US gas plant can choose Z10 or chase ISO 45001 first. Engineering wants Z10 design-review language. Marketing wants the ISO logo. You are the CSP. The question is what Z10 uniquely insists you actually do.`,
  hookConstruction: `A US constructor can choose Z10 or chase ISO 45001 first. Engineering wants Z10 design-review language. Marketing wants the ISO logo. You are the CSP. The question is what Z10 uniquely insists you actually do.`,
  rule: "ANSI/ASSP Z10 is a US OHSMS aligned to PDCA with unusually explicit hierarchy of controls, design reviews, and risk assessment. It is a management-system standard, not a regulation and not ISO 14001. Use it to force PtD/hierarchy into planning — not as a logo substitute for 45001 or OSHA.",
  modelCaption:
    "PDCA boxes labeled with Z10 accents: Plan includes risk assessment + design review; Do includes hierarchy applied to operations and change; Check includes audits and metrics mix; Act includes CAPA. Side tag: “not OSHA, not 14001, cousin of 45001.”",
  workedCase:
    "Capital package for a new line. Z10-style plan: design review before freeze, hierarchy documented, residual accepted by the accountable leader. Marketing’s 45001 logo campaign without that gate is not Z10 implementation.",
  trapsJson: traps(
    "Treating Z10 as a law.",
    "Skipping design review because a 45001 certificate is on the wall.",
    "Using 14001 aspects to run a Z10 OHSMS.",
  ),
  contrastJson: contrast([
    { looksLike: "Z10", actually: "ANSI/ASSP OHSMS — PDCA, hierarchy, design review" },
    { looksLike: "ISO 45001", actually: "Certifiable ISO OHSMS — cousin, different clause map" },
    { looksLike: "OSHA 1910", actually: "Legal floor — Z10 does not replace it" },
    { looksLike: "ISO 14001", actually: "Environment — wrong family for injury controls" },
  ]),
  mustScoreJson: mustScore(
    "ANSI/ASSP Z10 is an OH&S management-system consensus standard aligned to continual improvement.",
    "Z10 emphasizes management leadership, employee participation, planning, implementation, evaluation, learning.",
    "Risk assessment and hierarchy of controls are central \u2014 not optional annex trivia.",
    "Compatible with ISO 45001 thinking; do not invent a war between them on the exam.",
    "Implementation means operational controls and MoC, not only policy statements.",
    "Evaluation includes audits, incidents, and metrics that drive learning.",
    "Employee participation must be real in design of controls.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "Z10 is treated as a poster policy only", pick: "implement risk assessment and operational controls" },
    { ifStem: "hierarchy is skipped in planning", pick: "apply hierarchy inside Z10 planning/implementation" },
    { ifStem: "employees are excluded from participation", pick: "restore participation mechanisms" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "learning never changes procedures after incidents", pick: "close the learning loop with CAPA" },
  ),

  brief: `ANSI/ASSP Z10 is a US OHSMS aligned to PDCA with unusually explicit hierarchy of controls, design reviews, and risk assessment. It is a management-system standard, not a regulation and not ISO 14001. Use it to force PtD/hierarchy into planning â not as a logo substitute for 45001 or OSHA. If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
ANSI/ASSP Z10 is a US OHSMS aligned to PDCA with unusually explicit hierarchy of controls, design reviews, and risk assessment. It is a management-system standard, not a regulation and not ISO 14001. Use it to force PtD/hierarchy into planning â not as a logo substitute for 45001 or OSHA. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
A US plant can choose ANSI/ASSP Z10 or chase an ISO 45001 certificate first. Engineering wants Z10âs design-review language. Marketing wants the ISO logo. You are the CSP. The question is what Z10 uniquely insists you actually do. Oil-and-gas skin: A US gas plant can choose Z10 or chase ISO 45001 first. Engineering wants Z10 design-review language. You are the CSP. Construction skin: A US constructor can choose Z10 or chase ISO 45001 first. You are the CSP. Work the case: Capital package for a new line. Z10-style plan: design review before freeze, hierarchy documented, residual accepted by the accountable leader. Marketingâs 45001 logo campaign without that gate is not Z10 implementation. Classic traps: Treating Z10 as a law.; Skipping design review because a 45001 certificate is on the wall.; Using 14001 aspects to run a Z10 OHSMS.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for z10. Verify whether a higher system or design fix is still open. Contrast labels: Z10 is actually ANSI/ASSP OHSMS — PDCA, hierarchy, design review; ISO 45001 is actually Certifiable ISO OHSMS — cousin, different clause map; OSHA 1910 is actually Legal floor — Z10 does not replace it; ISO 14001 is actually Environment — wrong family for injury controls. If the stem shows Z10 is treated as a poster policy only, pick implement risk assessment and operational controls. If the stem shows hierarchy is skipped in planning, pick apply hierarchy inside Z10 planning/implementation. If the stem shows employees are excluded from participation, pick restore participation mechanisms. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows learning never changes procedures after incidents, pick close the learning loop with CAPA. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Z10 — logo or design review sits in CSP-11 Domain 2 Management Systems. The exam tests whether you apply the rule when a package already looks complete. Core rule: ANSI/ASSP Z10 is a US OHSMS aligned to PDCA with unusually explicit hierarchy of controls, design reviews, and risk assessment. It is a management-system standard, not a regulation and not ISO 14001. Use it to force PtD/hierarchy into planning â not as a logo substitute for 45001 or OSHA. Field context: A US plant can choose ANSI/ASSP Z10 or chase an ISO 45001 certificate first. Engineering wants Z10âs design-review language. Marketing wants the ISO logo. You are the CSP. The question is what Z10 uniquely insists you actually do. The oil-and-gas skin shifts the same decision into production pressure: A US gas plant can choose Z10 or chase ISO 45001 first. Engineering wants Z10 design-review language. You are the CSP. The construction skin shifts it into schedule and trade stacking: A US constructor can choose Z10 or chase ISO 45001 first. You are the CSP. Model caption for this class: PDCA boxes labeled with Z10 accents: Plan includes risk assessment + design review; Do includes hierarchy applied to operations and change; Check includes audits and metrics mix; Act includes CAPA. Side tag: ânot OSHA, not 14001, cousin of 45001.â Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) ANSI/ASSP Z10 is an OH&S management-system consensus standard aligned to continual improvement. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Z10 emphasizes management leadership, employee participation, planning, implementation, evaluation, learning. (3) Risk assessment and hierarchy of controls are central — not optional annex trivia. (4) Compatible with ISO 45001 thinking; do not invent a war between them on the exam. (5) Implementation means operational controls and MoC, not only policy statements. (6) Evaluation includes audits, incidents, and metrics that drive learning. (7) Employee participation must be real in design of controls. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Capital package for a new line. Z10-style plan: design review before freeze, hierarchy documented, residual accepted by the accountable leader. Marketingâs 45001 logo campaign without that gate is not Z10 implementation. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Treating Z10 as a law.; Skipping design review because a 45001 certificate is on the wall.; Using 14001 aspects to run a Z10 OHSMS.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Z10” is really ANSI/ASSP OHSMS — PDCA, hierarchy, design review; “ISO 45001” is really Certifiable ISO OHSMS — cousin, different clause map; “OSHA 1910” is really Legal floor — Z10 does not replace it; “ISO 14001” is really Environment — wrong family for injury controls. Stem-if-then map: if Z10 is treated as a poster policy only → implement risk assessment and operational controls; if hierarchy is skipped in planning → apply hierarchy inside Z10 planning/implementation; if employees are excluded from participation → restore participation mechanisms; if two answers work → higher hierarchy / system / design; if learning never changes procedures after incidents → close the learning loop with CAPA. Scoring favors evidence, owners, verification, and hierarchy-smart controls on z10. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Z10 — logo or design review?",
  cardBack:
    "ANSI/ASSP OHSMS PDCA. Explicit hierarchy and design/redesign review. Not OSHA, not 14001, cousin of 45001. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence calls Z10 a US OHSMS PDCA with hierarchy and design review, and distinguishes it from OSHA law and from ISO 14001.",
};

export const items: ClassItem[] = [
  exam(T, "You are the CSP reviewing a live decision at a pharma suite changeover. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: What is ANSI/ASSP Z10.", [
    "An OSHA regulation that replaces 1910.",
    "A US OHS management-system standard (PDCA) with strong hierarchy and design-review expectations.",
    "An environmental aspect standard.",
    "An audit-only guideline like 19011 without a system.",
  ], 1, "Z10 is an OHSMS, not a law and not 14001/19011.", "STEM", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ANSI/ASSP Z10 is a US OHSMS aligned to PDCA with unusually explicit hierarchy of controls, design reviews, and risk assessment. It is a management-system standard, not a regulation and not ISO 14001. Use it to force P... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A Z10-aligned capital review still has substitution of a solvent open. The package funds only APRs. Best call?", [
    "APRs satisfy Z10 operational control.",
    "Z10 expects hierarchy: take substitution (or engineering) while it is open.",
    "Z10 forbids substitution.",
    "Z10 defers to insurance.",
  ], 1, "HIER is explicit in Z10 planning/operation.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ANSI/ASSP Z10 is a US OHSMS aligned to PDCA with unusually explicit hierarchy of controls, design reviews, and risk assessment. It is a management-system standard, not a regulation and not ISO 14001. Use it to force P... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Marketing wants ISO 45001 first; engineering wants Z10 design gates on this project’s freeze next month. Best CSP sequencing?", [
    "Skip the design gate — the logo can wait and so can hierarchy.",
    "Hold the Z10-style design/hierarchy review before freeze; certification timing is not a reason to miss PtD.",
    "Run 14001 aspects on the solvent instead.",
    "Use RPN detection to skip the review.",
  ], 1, "STEM: freeze is the clock. Design review before freeze beats a later logo.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ANSI/ASSP Z10 is a US OHSMS aligned to PDCA with unusually explicit hierarchy of controls, design reviews, and risk assessment. It is a management-system standard, not a regulation and not ISO 14001. Use it to force P... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A team uses ISO 14001 aspect scoring as its Z10 risk assessment and drops machine guarding because it is not an “aspect.” Error?", [
    "None — Annex SL unifies them.",
    "Wrong tool/standard family: 14001 environment ≠ Z10 OHS risk assessment.",
    "They should have used 24.45.",
    "They should have used 8-hour TWA as the Z10 metric.",
  ], 1, "TOOL: 14001 vs Z10.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ANSI/ASSP Z10 is a US OHSMS aligned to PDCA with unusually explicit hierarchy of controls, design reviews, and risk assessment. It is a management-system standard, not a regulation and not ISO 14001. Use it to force P... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Z10 design review occurs after the machine has shipped and been installed. Characterization?", [
    "Ideal Plan.",
    "Late — the cheap hierarchy rows were likely lost; still apply remaining engineering, but do not pretend this was PtD on time.",
    "Equivalent to replacement in kind.",
    "A 1904 clock.",
  ], 1, "STEM: after-install review is not the design-review value Z10 aimed at.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ANSI/ASSP Z10 is a US OHSMS aligned to PDCA with unusually explicit hierarchy of controls, design reviews, and risk assessment. It is a management-system standard, not a regulation and not ISO 14001. Use it to force P... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Finance proposes a higher liability limit instead of funding Z10 design-review time on capital jobs. Best position?", [
    "Accept — transfer equals Z10 planning.",
    "Reject: financing is not hierarchy or design review.",
    "Accept if TRIR is already low.",
    "Accept if 45001 is also planned.",
  ], 1, "FIN: insurance ≠ OHSMS planning.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ANSI/ASSP Z10 is a US OHSMS aligned to PDCA with unusually explicit hierarchy of controls, design reviews, and risk assessment. It is a management-system standard, not a regulation and not ISO 14001. Use it to force P... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at an offshore fabrication night shift. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Which pair is the fairest cousin comparison.", [
    "Z10 and 14001 are interchangeable OHSMS documents.",
    "Z10 and ISO 45001 are both OHSMS PDCA; 45001 is the ISO certifiable map, Z10 the ANSI/ASSP map with blunt hierarchy/design language.",
    "Z10 replaces 1904 recording.",
    "Z10 is a bowtie method.",
  ], 1, "Cousins, not clones, and neither is 14001 or 1904.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ANSI/ASSP Z10 is a US OHSMS aligned to PDCA with unusually explicit hierarchy of controls, design reviews, and risk assessment. It is a management-system standard, not a regulation and not ISO 14001. Use it to force P... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Employee participation under Z10 on a control-selection decision. Which is adequate?", [
    "A policy footer that mentions employees.",
    "Workers (or representatives) consulted on hazard ID and control selection, with a record of how input affected the choice.",
    "A pizza after installation.",
    "The CSP deciding alone because Z10 is technical.",
  ], 1, "Participation is consultation on the actual control choice.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ANSI/ASSP Z10 is a US OHSMS aligned to PDCA with unusually explicit hierarchy of controls, design reviews, and risk assessment. It is a management-system standard, not a regulation and not ISO 14001. Use it to force P... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Risk assessment in a Z10 plan for a two-barrier overfill uses only FMEA RPN. Best CSP note?", [
    "RPN is always sufficient under Z10.",
    "Wrong-tool risk: combinations of independent barriers need FTA/bowtie in addition to any FMEA list.",
    "Z10 forbids FTA.",
    "Z10 requires 14001 aspects here.",
  ], 1, "TOOL: Z10 risk assessment must use a method that fits the combination.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ANSI/ASSP Z10 is a US OHSMS aligned to PDCA with unusually explicit hierarchy of controls, design reviews, and risk assessment. It is a management-system standard, not a regulation and not ISO 14001. Use it to force P... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Last sentence: customer spec froze the machine geometry. Z10 review still open for field add-ons. Best remaining hierarchy item?", [
    "Restart elimination of the whole process.",
    "Specify bolt-on interlocks/guards; document residual; do not rubber-stamp PPE-only.",
    "Skip Z10 because freeze canceled the SMS.",
    "Hang the Z10 poster.",
  ], 1, "STEM closed full redesign. Remaining engineering is still Z10-consistent.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ANSI/ASSP Z10 is a US OHSMS aligned to PDCA with unusually explicit hierarchy of controls, design reviews, and risk assessment. It is a management-system standard, not a regulation and not ISO 14001. Use it to force P... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A fatality during a Z10-certified year. Team says Z10 replaces OSHA notification. Clock?", [
    "Z10 certificate pauses 1904.",
    "Fatality still 8 hours to OSHA. Z10 is not a regulatory substitute.",
    "24 hours because Z10 uses the amputation clock for deaths.",
    "7 days.",
  ], 1, "TIME: Z10 ≠ 1904 clocks.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ANSI/ASSP Z10 is a US OHSMS aligned to PDCA with unusually explicit hierarchy of controls, design reviews, and risk assessment. It is a management-system standard, not a regulation and not ISO 14001. Use it to force P... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a bridge deck pour laydown yard. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Z10 evaluation (Check) packet is only TRIR. Missing.", [
    "Nothing — Z10 is lagging-only.",
    "Leading barrier health, audits, design-review completion, incident learning quality, legal compliance — not a single rate.",
    "Only the insurance loss run.",
    "Only registrar logos.",
  ], 1, "Check is a mix, not TRIR theater.", "STEM", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ANSI/ASSP Z10 is a US OHSMS aligned to PDCA with unusually explicit hierarchy of controls, design reviews, and risk assessment. It is a management-system standard, not a regulation and not ISO 14001. Use it to force P... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
