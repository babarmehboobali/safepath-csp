import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D2.08";

export const classFields: ClassFields = {
  hook: "VPP vs Z10 vs ISO 45001 vs OSHA — shared PDCA DNA, not interchangeable credentials.",
  hookOilGas: `Contractor asks for 'ISO VPP OSHA cert' as one thing. Separate recognition, consensus, certification, and law.`,
  hookConstruction: `GC prequal confuses VPP star with ISO certificate and Z10 framework.`,
  rule: "OSHA = legal minimum (where it applies). VPP = voluntary OSHA recognition process — not a private ISO certificate and not a legal shield. ISO 45001 = certifiable OH&S MS. ANSI/ASSP Z10 = consensus framework. They share PDCA thinking and are not drop-in replacements on the exam.",
  modelCaption: "Law (OSHA) vs recognition (VPP) vs certifiable MS (45001) vs consensus (Z10).",
  workedCase: "Plant wants 'VPP like ISO.' Answer: VPP is OSHA recognition; 45001 is third-party certification to a standard; Z10 is consensus guidance; OSHA compliance is the legal floor. Passing an ISO audit does not automatically equal VPP, and VPP does not waive OSHA citations by magic.",
  trapsJson: traps(
    "VPP treated as ISO",
    "ISO treated as legal shield",
    "Z10 = OSHA law",
  ),
  contrastJson: contrast([
    { looksLike: "OSHA", actually: "Legal requirements" },
    { looksLike: "VPP", actually: "OSHA voluntary recognition" },
    { looksLike: "ISO 45001", actually: "Certifiable MS" },
    { looksLike: "Z10", actually: "Consensus framework" },
    { looksLike: "Audit", actually: "Evidence-based evaluation" },
    { looksLike: "Inspection", actually: "Compliance look" },
  ]),
  mustScoreJson: mustScore(
    "VPP emphasizes excellence beyond compliance with employee involvement and systems.",
    "Z10 and ISO 45001 are management-system frameworks with PDCA and hierarchy expectations.",
    "Do not treat any certificate as a substitute for field controls.",
    "Participation, risk-based controls, and continual improvement are shared themes.",
    "Compare frameworks by function, not tribal wars.",
    "Audit evidence must match claims.",
    "Hierarchy inside operational controls remains.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "VPP banner but missing interlocks", pick: "fix field controls first" },
    { ifStem: "certificate used to skip hierarchy", pick: "reject" },
    { ifStem: "employee participation absent", pick: "restore participation" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "frameworks compared", pick: "focus on shared PDCA/hierarchy functions" },
  ),

  brief: `OSHA = legal minimum (where it applies). VPP = voluntary OSHA recognition process â not a private ISO certificate and not a legal shield. ISO 45001 = certifiable OH&S MS. ANSI/ASSP Z10 = consensus framework. They share PDCA thinking and are not drop-in replacements on the exam. If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
OSHA = legal minimum (where it applies). VPP = voluntary OSHA recognition process â not a private ISO certificate and not a legal shield. ISO 45001 = certifiable OH&S MS. ANSI/ASSP Z10 = consensus framework. They share PDCA thinking and are not drop-in replacements on the exam. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
VPP vs Z10 vs ISO 45001 vs OSHA â shared PDCA DNA, not interchangeable credentials. Oil-and-gas skin: Contractor asks for 'ISO VPP OSHA cert' as one thing. Separate recognition, consensus, certification, and law. Construction skin: GC prequal confuses VPP star with ISO certificate and Z10 framework. Work the case: Plant wants 'VPP like ISO.' Answer: VPP is OSHA recognition; 45001 is third-party certification to a standard; Z10 is consensus guidance; OSHA compliance is the legal floor. Passing an ISO audit does not automatically equal VPP, and VPP does not waive OSHA citations by magic. Classic traps: VPP treated as ISO; ISO treated as legal shield; Z10 = OSHA law. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for vpp z10 iso45001. Verify whether a higher system or design fix is still open. Contrast labels: OSHA is actually Legal requirements; VPP is actually OSHA voluntary recognition; ISO 45001 is actually Certifiable MS; Z10 is actually Consensus framework; Audit is actually Evidence-based evaluation. If the stem shows VPP banner but missing interlocks, pick fix field controls first. If the stem shows certificate used to skip hierarchy, pick reject. If the stem shows employee participation absent, pick restore participation. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows frameworks compared, pick focus on shared PDCA/hierarchy functions. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `VPP vs Z10 vs 45001 vs OSHA sits in CSP-11 Domain 2 Management Systems. The exam tests whether you apply the rule when a package already looks complete. Core rule: OSHA = legal minimum (where it applies). VPP = voluntary OSHA recognition process â not a private ISO certificate and not a legal shield. ISO 45001 = certifiable OH&S MS. ANSI/ASSP Z10 = consensus framework. They share PDCA thinking and are not drop-in replacements on the exam. Field context: VPP vs Z10 vs ISO 45001 vs OSHA â shared PDCA DNA, not interchangeable credentials. The oil-and-gas skin shifts the same decision into production pressure: Contractor asks for 'ISO VPP OSHA cert' as one thing. Separate recognition, consensus, certification, and law. The construction skin shifts it into schedule and trade stacking: GC prequal confuses VPP star with ISO certificate and Z10 framework. Model caption for this class: Law (OSHA) vs recognition (VPP) vs certifiable MS (45001) vs consensus (Z10). Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) VPP emphasizes excellence beyond compliance with employee involvement and systems. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Z10 and ISO 45001 are management-system frameworks with PDCA and hierarchy expectations. (3) Do not treat any certificate as a substitute for field controls. (4) Participation, risk-based controls, and continual improvement are shared themes. (5) Compare frameworks by function, not tribal wars. (6) Audit evidence must match claims. (7) Hierarchy inside operational controls remains. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Plant wants 'VPP like ISO.' Answer: VPP is OSHA recognition; 45001 is third-party certification to a standard; Z10 is consensus guidance; OSHA compliance is the legal floor. Passing an ISO audit does not automatically equal VPP, and VPP does not waive OSHA citations by magic. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: VPP treated as ISO; ISO treated as legal shield; Z10 = OSHA law. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “OSHA” is really Legal requirements; “VPP” is really OSHA voluntary recognition; “ISO 45001” is really Certifiable MS; “Z10” is really Consensus framework; “Audit” is really Evidence-based evaluation; “Inspection” is really Compliance look. Stem-if-then map: if VPP banner but missing interlocks → fix field controls first; if certificate used to skip hierarchy → reject; if employee participation absent → restore participation; if two answers work → higher hierarchy / system / design; if frameworks compared → focus on shared PDCA/hierarchy functions. Scoring favors evidence, owners, verification, and hierarchy-smart controls on vpp z10 iso45001. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "VPP vs Z10 vs 45001 vs OSHA?",
  cardBack: "Recognition ≠ certificate ≠ law ≠ consensus. Study only.",
  teachBackKey: "Defines each and refuses synonym traps.",
  formulaSlug: null,
};

export const items: ClassItem[] = [
  exam(
    "CSP-11 D2.08",
    "You are the CSP reviewing a live decision at a pharma suite changeover. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: VPP is best described as.",
    [
      "OSHA voluntary recognition",
      "ISO certificate",
      "ANSI Z10 itself",
      "A PEL",
    ],
    0,
    "Core Rule: Recognition. Calculation Steps: Defs. Standards Cited: D2.08. Why Each Distractor Fails: OSHA voluntary recognition: Correct: VPP | ISO certificate: Fails: False | ANSI Z10 itself: Fails: False | A PEL: Fails: False",
    "TOOL",
    "Exam",
    [
      "Correct: VPP",
      "Fails: False",
      "Fails: False",
      "Fails: False",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA = legal minimum (where it applies). VPP = voluntary OSHA recognition process — not a private ISO certificate and not a legal shield. ISO 45001 = certifiable OH&S MS. ANSI/ASSP Z10 = consensus framework. They shar... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.08",
    "You are the CSP reviewing a live decision at a warehouse second-shift startup. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: ISO 45001 is.",
    [
      "OSHA law text",
      "Certifiable OH&S management system standard",
      "VPP star plaque",
      "EMR formula",
    ],
    1,
    "Core Rule: Certification path. Calculation Steps: Defs. Standards Cited: MS. Why Each Distractor Fails: Certifiable OH&S management system standard: Correct: 45001 | OSHA law text: Fails: False | VPP star plaque: Fails: False | EMR formula: Fails: FIN",
    "TOOL",
    "Exam",
    [
      "Fails: False",
      "Correct: 45001",
      "Fails: False",
      "Fails: FIN",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA = legal minimum (where it applies). VPP = voluntary OSHA recognition process — not a private ISO certificate and not a legal shield. ISO 45001 = certifiable OH&S MS. ANSI/ASSP Z10 = consensus framework. They shar... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.08",
    "You are the CSP reviewing a live decision at a grain elevator maintenance day. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Z10 is.",
    [
      "Federal statute",
      "Pearson exam",
      "Consensus framework",
      "Fire pump curve",
    ],
    2,
    "Core Rule: Consensus. Calculation Steps: Defs. Standards Cited: Z10. Why Each Distractor Fails: Consensus framework: Correct: Z10 | Federal statute: Fails: False | Pearson exam: Fails: False | Fire pump curve: Fails: Wrong domain",
    "TOOL",
    "Exam",
    [
      "Fails: False",
      "Fails: False",
      "Correct: Z10",
      "Fails: Wrong domain",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA = legal minimum (where it applies). VPP = voluntary OSHA recognition process — not a private ISO certificate and not a legal shield. ISO 45001 = certifiable OH&S MS. ANSI/ASSP Z10 = consensus framework. They shar... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.08",
    "You are the CSP reviewing a live decision at a hospital utility plant shutdown. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: OSHA on this comparator.",
    [
      "Private certificate",
      "Always identical to 45001",
      "Always identical to VPP",
      "Legal minimum / enforcement floor",
    ],
    3,
    "Core Rule: Law vs voluntary. Calculation Steps: Reflex. Standards Cited: Authority. Why Each Distractor Fails: Legal minimum / enforcement floor: Correct: Law | Private certificate: Fails: False | Always identical to 45001: Fails: False | Always identical to VPP: Fails: False",
    "PELTLV",
    "Exam",
    [
      "Fails: False",
      "Fails: False",
      "Fails: False",
      "Correct: Law",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA = legal minimum (where it applies). VPP = voluntary OSHA recognition process — not a private ISO certificate and not a legal shield. ISO 45001 = certifiable OH&S MS. ANSI/ASSP Z10 = consensus framework. They shar... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.08",
    "You are the CSP reviewing a live decision at a food packaging SKU change. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: ISO audit pass proves VPP.",
    [
      "No — different programs",
      "Yes always",
      "Yes if EMR low",
      "Yes if TRIR=0",
    ],
    0,
    "Core Rule: Not interchangeable. Calculation Steps: Programs. Standards Cited: Contrast. Why Each Distractor Fails: No — different programs: Correct: Different | Yes always: Fails: False | Yes if EMR low: Fails: FIN | Yes if TRIR=0: Fails: Rates",
    "STEM",
    "Exam",
    [
      "Correct: Different",
      "Fails: False",
      "Fails: FIN",
      "Fails: Rates",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA = legal minimum (where it applies). VPP = voluntary OSHA recognition process — not a private ISO certificate and not a legal shield. ISO 45001 = certifiable OH&S MS. ANSI/ASSP Z10 = consensus framework. They shar... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.08",
    "You are the CSP reviewing a live decision at a semiconductor tool install. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Shared DNA across these systems.",
    [
      "Identical legal force",
      "PDCA-style continual improvement thinking",
      "Identical certificates",
      "Identical pump curves",
    ],
    1,
    "Core Rule: PDCA. Calculation Steps: MS literacy. Standards Cited: D2.08. Why Each Distractor Fails: PDCA-style continual improvement thinking: Correct: PDCA | Identical legal force: Fails: False | Identical certificates: Fails: False | Identical pump curves: Fails: Wrong",
    "TOOL",
    "Exam",
    [
      "Fails: False",
      "Correct: PDCA",
      "Fails: False",
      "Fails: Wrong",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA = legal minimum (where it applies). VPP = voluntary OSHA recognition process — not a private ISO certificate and not a legal shield. ISO 45001 = certifiable OH&S MS. ANSI/ASSP Z10 = consensus framework. They shar... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.08",
    "You are the CSP reviewing a live decision at an offshore fabrication night shift. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Treating ISO cert as citation immunity.",
    [
      "True always",
      "True under VPP only",
      "False shield",
      "True under Z10 law",
    ],
    2,
    "Core Rule: Cert≠immunity. Calculation Steps: Legal hygiene. Standards Cited: Ethics. Why Each Distractor Fails: False shield: Correct: Not immune | True always: Fails: False | True under VPP only: Fails: False | True under Z10 law: Fails: Z10≠law",
    "STEM",
    "Exam",
    [
      "Fails: False",
      "Fails: False",
      "Correct: Not immune",
      "Fails: Z10≠law",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA = legal minimum (where it applies). VPP = voluntary OSHA recognition process — not a private ISO certificate and not a legal shield. ISO 45001 = certifiable OH&S MS. ANSI/ASSP Z10 = consensus framework. They shar... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.08",
    "You are the CSP reviewing a live decision at a municipal water-plant retrofit. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Best exam whisper.",
    [
      "Pick VPP for every MS question",
      "Pick 45001 for OSHA law items",
      "Pick Z10 for EPCRA",
      "Name the authority the stem asks for",
    ],
    3,
    "Core Rule: Authority match. Calculation Steps: Exam habit. Standards Cited: Comparator. Why Each Distractor Fails: Name the authority the stem asks for: Correct: Whisper | Pick VPP for every MS question: Fails: Trap | Pick 45001 for OSHA law items: Fails: Trap | Pick Z10 for EPCRA: Fails: Wrong domain",
    "STEM",
    "Exam",
    [
      "Fails: Trap",
      "Fails: Trap",
      "Fails: Wrong domain",
      "Correct: Whisper",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA = legal minimum (where it applies). VPP = voluntary OSHA recognition process — not a private ISO certificate and not a legal shield. ISO 45001 = certifiable OH&S MS. ANSI/ASSP Z10 = consensus framework. They shar... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.08",
    "You are the CSP reviewing a live decision at a plastics compounding turnaround. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: ISO 14001 vs 45001.",
    [
      "Environmental vs OH&S MS",
      "Identical",
      "Both are VPP",
      "Both are SPCC",
    ],
    0,
    "Core Rule: Siblings differ. Calculation Steps: Contrast. Standards Cited: MS. Why Each Distractor Fails: Environmental vs OH&S MS: Correct: Contrast | Identical: Fails: False | Both are VPP: Fails: False | Both are SPCC: Fails: False",
    "TOOL",
    "Exam",
    [
      "Correct: Contrast",
      "Fails: False",
      "Fails: False",
      "Fails: False",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA = legal minimum (where it applies). VPP = voluntary OSHA recognition process — not a private ISO certificate and not a legal shield. ISO 45001 = certifiable OH&S MS. ANSI/ASSP Z10 = consensus framework. They shar... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.08",
    "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Audit vs inspection.",
    [
      "Identical",
      "MS evidence evaluation vs compliance look (typical teaching)",
      "Both are TRI",
      "Both are sling angles",
    ],
    1,
    "Core Rule: Words matter. Calculation Steps: Contrast. Standards Cited: 19011 bridge. Why Each Distractor Fails: MS evidence evaluation vs compliance look (typical teaching): Correct: Contrast | Identical: Fails: False | Both are TRI: Fails: Wrong | Both are sling angles: Fails: Wrong",
    "TOOL",
    "Exam",
    [
      "Fails: False",
      "Correct: Contrast",
      "Fails: Wrong",
      "Fails: Wrong",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA = legal minimum (where it applies). VPP = voluntary OSHA recognition process — not a private ISO certificate and not a legal shield. ISO 45001 = certifiable OH&S MS. ANSI/ASSP Z10 = consensus framework. They shar... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.08",
    "You are the CSP reviewing a live decision at a refinery coker outage. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Contractor prequal 'need ISO VPP OSHA one cert'.",
    [
      "Sell one fake combined cert",
      "Ignore OSHA",
      "Educate: separate law/recognition/cert/consensus",
      "Use 110% SPCC",
    ],
    2,
    "Core Rule: Clarify. Calculation Steps: Communication. Standards Cited: Ethics. Why Each Distractor Fails: Educate: separate law/recognition/cert/consensus: Correct: Educate | Sell one fake combined cert: Fails: Bad | Ignore OSHA: Fails: Bad | Use 110% SPCC: Fails: Myth",
    "STEM",
    "Exam",
    [
      "Fails: Bad",
      "Fails: Bad",
      "Correct: Educate",
      "Fails: Myth",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA = legal minimum (where it applies). VPP = voluntary OSHA recognition process — not a private ISO certificate and not a legal shield. ISO 45001 = certifiable OH&S MS. ANSI/ASSP Z10 = consensus framework. They shar... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.08",
    "You are the CSP reviewing a live decision at a bridge deck pour laydown yard. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: VERIFY leftover.",
    [
      "BCSP pass guarantee",
      "Pearson logo use",
      "Pocket Prep wording copy",
      "Edition years for Z10/45001 transitions",
    ],
    3,
    "Core Rule: VERIFY editions. Calculation Steps: Honesty. Standards Cited: Constraints. Why Each Distractor Fails: Edition years for Z10/45001 transitions: Correct: VERIFY | BCSP pass guarantee: Fails: Forbidden | Pearson logo use: Fails: Forbidden | Pocket Prep wording copy: Fails: Forbidden",
    "STEM",
    "Exam",
    [
      "Fails: Forbidden",
      "Fails: Forbidden",
      "Fails: Forbidden",
      "Correct: VERIFY",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA = legal minimum (where it applies). VPP = voluntary OSHA recognition process — not a private ISO certificate and not a legal shield. ISO 45001 = certifiable OH&S MS. ANSI/ASSP Z10 = consensus framework. They shar... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];

