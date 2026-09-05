import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D2.04";

export const classFields: ClassFields = {
  hook: "Investigation that stops at 'employee error' fails the CSP. MORT/barrier analysis asks which barrier should have worked, why it failed, and which management system allowed that.",
  hookOilGas: `Process release investigation: list barriers (detection, isolation, shutdown, PPE) and find the broken AND in the control set.`,
  hookConstruction: `Fall incident: guardrail missing, monitor absent, harness misused â barrier logic before blame.`,
  rule: "Facts→sequence→barriers→system→fix→prove. Barrier analysis: identify planned barriers, which failed/absent/bypassed, and upstream system causes. MORT-flavored thinking uses AND logic across barriers. Investigation ≠ audit. Root ≠ every contributing factor. CAPA must match causes; overdue CAPA is a leading signal.",
  modelCaption: "Event → barriers (worked/failed/missing) → system gaps → CAPA with effectiveness check.",
  workedCase: "Scaffold fall: intended barriers = complete deck, guardrail, PFAS, competent person check. Deck incomplete (failed), guardrail absent, PFAS not worn (failed), inspection checkbox signed without presence (system). Fix: redesign access so incomplete deck cannot be occupied; verify with field observation — not a memo alone.",
  trapsJson: traps(
    "Stopping at worker error",
    "Treating audit as investigation",
    "CAPA that restates the injury",
  ),
  contrastJson: contrast([
    { looksLike: "Investigation", actually: "Learn causes of an event" },
    { looksLike: "Audit", actually: "Sample conformity to standards" },
    { looksLike: "Root cause", actually: "System-level necessary cause" },
    { looksLike: "Contributing factor", actually: "Influenced but not alone sufficient" },
    { looksLike: "Barrier failed", actually: "Present but ineffective" },
    { looksLike: "Barrier missing", actually: "Never installed/armed" },
  ]),
  mustScoreJson: mustScore(
    "MORT/barrier analysis maps controls that should have stopped the unwanted energy.",
    "Find missing, failed, or bypassed barriers \u2014 not only blame.",
    "Barriers include design, engineered, human, and supervisory layers.",
    "Recommendations restore or add hierarchy-smart barriers.",
    "Timeline plus barrier chart beats narrative-only reports.",
    "Independence of barriers matters.",
    "Interim barriers while permanent fixes pending.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "analysis stops at operator error", pick: "continue to missing barriers" },
    { ifStem: "barrier was bypassed routinely", pick: "fix the system that allowed bypass" },
    { ifStem: "only new procedure proposed while design barrier open", pick: "restore/add engineered barrier" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "permanent fix delayed", pick: "install interim barrier" },
  ),

  brief: `Factsâsequenceâbarriersâsystemâfixâprove. Barrier analysis: identify planned barriers, which failed/absent/bypassed, and upstream system causes. MORT-flavored thinking uses AND logic across barriers. Investigation â audit. Root â every contributing factor. CAPA must match causes; overdue CAPA is a leading signal. If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Factsâsequenceâbarriersâsystemâfixâprove. Barrier analysis: identify planned barriers, which failed/absent/bypassed, and upstream system causes. MORT-flavored thinking uses AND logic across barriers. Investigation â  audit. Root â  every contributing factor. CAPA must match causes; overdue CAPA is a leading signal. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
Investigation that stops at 'employee error' fails the CSP. MORT/barrier analysis asks which barrier should have worked, why it failed, and which management system allowed that. Oil-and-gas skin: Process release investigation: list barriers (detection, isolation, shutdown, PPE) and find the broken AND in the control set. Construction skin: Fall incident: guardrail missing, monitor absent, harness misused â barrier logic before blame. Work the case: Scaffold fall: intended barriers = complete deck, guardrail, PFAS, competent person check. Deck incomplete (failed), guardrail absent, PFAS not worn (failed), inspection checkbox signed without presence (system). Fix: redesign access so incomplete deck cannot be occupied; verify with field observation â not a memo alone. Classic traps: Stopping at worker error; Treating audit as investigation; CAPA that restates the injury. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for mort barrier analysis. Verify whether a higher system or design fix is still open. Contrast labels: Investigation is actually Learn causes of an event; Audit is actually Sample conformity to standards; Root cause is actually System-level necessary cause; Contributing factor is actually Influenced but not alone sufficient; Barrier failed is actually Present but ineffective. If the stem shows analysis stops at operator error, pick continue to missing barriers. If the stem shows barrier was bypassed routinely, pick fix the system that allowed bypass. If the stem shows only new procedure proposed while design barrier open, pick restore/add engineered barrier. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows permanent fix delayed, pick install interim barrier. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `MORT/barrier: what failed, why system allowed it sits in CSP-11 Domain 2 Management Systems. The exam tests whether you apply the rule when a package already looks complete. Core rule: Factsâsequenceâbarriersâsystemâfixâprove. Barrier analysis: identify planned barriers, which failed/absent/bypassed, and upstream system causes. MORT-flavored thinking uses AND logic across barriers. Investigation â  audit. Root â  every contributing factor. CAPA must match causes; overdue CAPA is a leading signal. Field context: Investigation that stops at 'employee error' fails the CSP. MORT/barrier analysis asks which barrier should have worked, why it failed, and which management system allowed that. The oil-and-gas skin shifts the same decision into production pressure: Process release investigation: list barriers (detection, isolation, shutdown, PPE) and find the broken AND in the control set. The construction skin shifts it into schedule and trade stacking: Fall incident: guardrail missing, monitor absent, harness misused â barrier logic before blame. Model caption for this class: Event â barriers (worked/failed/missing) â system gaps â CAPA with effectiveness check. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) MORT/barrier analysis maps controls that should have stopped the unwanted energy. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Find missing, failed, or bypassed barriers — not only blame. (3) Barriers include design, engineered, human, and supervisory layers. (4) Recommendations restore or add hierarchy-smart barriers. (5) Timeline plus barrier chart beats narrative-only reports. (6) Independence of barriers matters. (7) Interim barriers while permanent fixes pending. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Scaffold fall: intended barriers = complete deck, guardrail, PFAS, competent person check. Deck incomplete (failed), guardrail absent, PFAS not worn (failed), inspection checkbox signed without presence (system). Fix: redesign access so incomplete deck cannot be occupied; verify with field observation â not a memo alone. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Stopping at worker error; Treating audit as investigation; CAPA that restates the injury. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Investigation” is really Learn causes of an event; “Audit” is really Sample conformity to standards; “Root cause” is really System-level necessary cause; “Contributing factor” is really Influenced but not alone sufficient; “Barrier failed” is really Present but ineffective; “Barrier missing” is really Never installed/armed. Stem-if-then map: if analysis stops at operator error → continue to missing barriers; if barrier was bypassed routinely → fix the system that allowed bypass; if only new procedure proposed while design barrier open → restore/add engineered barrier; if two answers work → higher hierarchy / system / design; if permanent fix delayed → install interim barrier. Scoring favors evidence, owners, verification, and hierarchy-smart controls on mort barrier analysis. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "MORT/barrier: what failed, why system allowed it?",
  cardBack: "Facts→barriers→system→CAPA→prove. Study only.",
  teachBackKey: "Maps barriers to failed/missing and names a system fix with proof.",
  formulaSlug: null,
};

export const items: ClassItem[] = [
  exam(
    "CSP-11 D2.04",
    "You are the CSP reviewing a live decision at a semiconductor tool install. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Best next step after sequence is clear.",
    [
      "Identify which barriers failed/missing/bypassed",
      "Write disciplinary memo only",
      "Close as act of God",
      "Skip to insurance",
    ],
    0,
    "Core Rule: Barriers before blame. Calculation Steps: Method. Standards Cited: Investigation practice. Why Each Distractor Fails: Identify which barriers failed/missing/bypassed: Correct: Barriers | Write disciplinary memo only: Fails: Blame-only | Close as act of God: Fails: Not analysis | Skip to insurance: Fails: FIN miss",
    "TOOL",
    "Exam",
    [
      "Correct: Barriers",
      "Fails: Blame-only",
      "Fails: Not analysis",
      "Fails: FIN miss",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Facts→sequence→barriers→system→fix→prove. Barrier analysis: identify planned barriers, which failed/absent/bypassed, and upstream system causes. MORT-flavored thinking uses AND logic across barriers. Investigation ≠ a... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.04",
    "You are the CSP reviewing a live decision at an offshore fabrication night shift. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Investigation vs audit.",
    [
      "Identical",
      "Event learning vs conformity sampling",
      "Audit finds root of one injury always",
      "Investigation issues ISO cert",
    ],
    1,
    "Core Rule: Different purposes. Calculation Steps: Contrast. Standards Cited: D2.04. Why Each Distractor Fails: Event learning vs conformity sampling: Correct: Contrast | Identical: Fails: False | Audit finds root of one injury always: Fails: False | Investigation issues ISO cert: Fails: False",
    "TOOL",
    "Exam",
    [
      "Fails: False",
      "Correct: Contrast",
      "Fails: False",
      "Fails: False",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Facts→sequence→barriers→system→fix→prove. Barrier analysis: identify planned barriers, which failed/absent/bypassed, and upstream system causes. MORT-flavored thinking uses AND logic across barriers. Investigation ≠ a... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.04",
    "Three independent barriers each P(fail)=0.1. Approx P(all fail) if independent AND?",
    [
      "0.3",
      "0.1",
      "0.001",
      "1.0",
    ],
    2,
    "Core Rule: Product for AND failures. Calculation Steps: 0.1^3=0.001. Standards Cited: Boolean bridge. Why Each Distractor Fails: 0.001: Correct: 0.001 | 0.3: Fails: Sum | 0.1: Fails: One | 1.0: Fails: Certain",
    "FORM",
    "Exam",
    [
      "Fails: Sum",
      "Fails: One",
      "Correct: 0.001",
      "Fails: Certain",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Facts→sequence→barriers→system→fix→prove. Barrier analysis: identify planned barriers, which failed/absent/bypassed, and upstream system causes. MORT-flavored thinking uses AND logic across barriers. Investigation ≠ a... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.04",
    "You are the CSP reviewing a live decision at a plastics compounding turnaround. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Checkbox signed without field presence is mainly.",
    [
      "Only worker root",
      "Proof barriers worked",
      "FIN transfer success",
      "System/verification barrier failure",
    ],
    3,
    "Core Rule: Paper ≠ control. Calculation Steps: System cause. Standards Cited: Integrity. Why Each Distractor Fails: System/verification barrier failure: Correct: System | Only worker root: Fails: Incomplete | Proof barriers worked: Fails: False | FIN transfer success: Fails: Wrong",
    "STEM",
    "Exam",
    [
      "Fails: Incomplete",
      "Fails: False",
      "Fails: Wrong",
      "Correct: System",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Facts→sequence→barriers→system→fix→prove. Barrier analysis: identify planned barriers, which failed/absent/bypassed, and upstream system causes. MORT-flavored thinking uses AND logic across barriers. Investigation ≠ a... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.04",
    "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: CAPA that only says 'be more careful' fails because.",
    [
      "Does not change a barrier/system",
      "It is always enough",
      "It improves MTBF math",
      "It is ISO required wording",
    ],
    0,
    "Core Rule: Design/system beats slogans. Calculation Steps: CAPA quality. Standards Cited: Effectiveness. Why Each Distractor Fails: Does not change a barrier/system: Correct: Weak CAPA | It is always enough: Fails: False | It improves MTBF math: Fails: Wrong tool | It is ISO required wording: Fails: False",
    "HIER",
    "Exam",
    [
      "Correct: Weak CAPA",
      "Fails: False",
      "Fails: Wrong tool",
      "Fails: False",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Facts→sequence→barriers→system→fix→prove. Barrier analysis: identify planned barriers, which failed/absent/bypassed, and upstream system causes. MORT-flavored thinking uses AND logic across barriers. Investigation ≠ a... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.04",
    "You are the CSP reviewing a live decision at a refinery coker outage. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: MORT-flavored question.",
    [
      "Who to fire first",
      "What barrier was supposed to work and why didn't it?",
      "What PPE brand?",
      "What EMR is",
    ],
    1,
    "Core Rule: Barrier logic. Calculation Steps: Method. Standards Cited: Investigation. Why Each Distractor Fails: What barrier was supposed to work and why didn't it?: Correct: MORT lens | Who to fire first: Fails: Blame | What PPE brand?: Fails: PPE first | What EMR is: Fails: Metrics",
    "TOOL",
    "Exam",
    [
      "Fails: Blame",
      "Correct: MORT lens",
      "Fails: PPE first",
      "Fails: Metrics",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Facts→sequence→barriers→system→fix→prove. Barrier analysis: identify planned barriers, which failed/absent/bypassed, and upstream system causes. MORT-flavored thinking uses AND logic across barriers. Investigation ≠ a... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.04",
    "You are the CSP reviewing a live decision at a bridge deck pour laydown yard. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Overdue CAPA indicator type.",
    [
      "Lagging injury only",
      "Neither",
      "Leading (process) signal",
      "Insurance only",
    ],
    2,
    "Core Rule: Process health. Calculation Steps: Leading vs lagging. Standards Cited: D2.07 bridge. Why Each Distractor Fails: Leading (process) signal: Correct: Leading | Lagging injury only: Fails: Lagging | Neither: Fails: False | Insurance only: Fails: FIN",
    "TOOL",
    "Exam",
    [
      "Fails: Lagging",
      "Fails: False",
      "Correct: Leading",
      "Fails: FIN",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Facts→sequence→barriers→system→fix→prove. Barrier analysis: identify planned barriers, which failed/absent/bypassed, and upstream system causes. MORT-flavored thinking uses AND logic across barriers. Investigation ≠ a... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.04",
    "You are the CSP reviewing a live decision at a pharma suite changeover. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Common-cause that defeats 'independent' barriers.",
    [
      "Different colors of hard hats",
      "Separate vendors always suffice",
      "OR gate math",
      "Shared power/procedure/supervisor defeating all",
    ],
    3,
    "Core Rule: Independence assumption. Calculation Steps: Common cause. Standards Cited: Boolean. Why Each Distractor Fails: Shared power/procedure/supervisor defeating all: Correct: CCF | Different colors of hard hats: Fails: Cosmetic | Separate vendors always suffice: Fails: Not enough | OR gate math: Fails: Different",
    "STEM",
    "Exam",
    [
      "Fails: Cosmetic",
      "Fails: Not enough",
      "Fails: Different",
      "Correct: CCF",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Facts→sequence→barriers→system→fix→prove. Barrier analysis: identify planned barriers, which failed/absent/bypassed, and upstream system causes. MORT-flavored thinking uses AND logic across barriers. Investigation ≠ a... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.04",
    "You are the CSP reviewing a live decision at a warehouse second-shift startup. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Root vs contributing.",
    [
      "Root is necessary system-level; contributing influences",
      "All factors are roots",
      "Root is the injured person",
      "Contributing is unused",
    ],
    0,
    "Core Rule: Definitions. Calculation Steps: Clarity. Standards Cited: Analysis. Why Each Distractor Fails: Root is necessary system-level; contributing influences: Correct: Defs | All factors are roots: Fails: False | Root is the injured person: Fails: Blame | Contributing is unused: Fails: False",
    "TOOL",
    "Exam",
    [
      "Correct: Defs",
      "Fails: False",
      "Fails: Blame",
      "Fails: False",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Facts→sequence→barriers→system→fix→prove. Barrier analysis: identify planned barriers, which failed/absent/bypassed, and upstream system causes. MORT-flavored thinking uses AND logic across barriers. Investigation ≠ a... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.04",
    "You are the CSP reviewing a live decision at a grain elevator maintenance day. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Best effectiveness check for a barrier CAPA.",
    [
      "Email acknowledgment",
      "Field verification that the barrier works under real conditions",
      "Training attendance only",
      "Insurance premium drop alone",
    ],
    1,
    "Core Rule: Prove the fix. Calculation Steps: Effectiveness. Standards Cited: CAPA. Why Each Distractor Fails: Field verification that the barrier works under real conditions: Correct: Prove | Email acknowledgment: Fails: Weak | Training attendance only: Fails: Attendance≠competence | Insurance premium drop alone: Fails: FIN",
    "STEM",
    "Exam",
    [
      "Fails: Weak",
      "Correct: Prove",
      "Fails: Attendance≠competence",
      "Fails: FIN",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Facts→sequence→barriers→system→fix→prove. Barrier analysis: identify planned barriers, which failed/absent/bypassed, and upstream system causes. MORT-flavored thinking uses AND logic across barriers. Investigation ≠ a... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.04",
    "You are the CSP reviewing a live decision at a hospital utility plant shutdown. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: FTA connection to barrier analysis.",
    [
      "FTA replaces CAPA",
      "FTA is only for finance",
      "Failed barriers can be AND/OR gates to the top event",
      "ETA is identical always",
    ],
    2,
    "Core Rule: Boolean link. Calculation Steps: Class 23/113. Standards Cited: System safety. Why Each Distractor Fails: Failed barriers can be AND/OR gates to the top event: Correct: Link | FTA replaces CAPA: Fails: False | FTA is only for finance: Fails: False | ETA is identical always: Fails: FTA≠ETA",
    "TOOL",
    "Exam",
    [
      "Fails: False",
      "Fails: False",
      "Correct: Link",
      "Fails: FTA≠ETA",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Facts→sequence→barriers→system→fix→prove. Barrier analysis: identify planned barriers, which failed/absent/bypassed, and upstream system causes. MORT-flavored thinking uses AND logic across barriers. Investigation ≠ a... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.04",
    "You are the CSP reviewing a live decision at a food packaging SKU change. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Attractive wrong culture answer after injury.",
    [
      "Fix barriers and systems",
      "Learn and verify",
      "Support reporting",
      "Punish reporting to protect EMR",
    ],
    3,
    "Core Rule: Insurance≠control. Calculation Steps: Culture trap. Standards Cited: Ethics/metrics. Why Each Distractor Fails: Punish reporting to protect EMR: Correct: Trap FIN | Fix barriers and systems: Fails: Good | Learn and verify: Fails: Good | Support reporting: Fails: Good",
    "FIN",
    "Exam",
    [
      "Fails: Good",
      "Fails: Good",
      "Fails: Good",
      "Correct: Trap FIN",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Facts→sequence→barriers→system→fix→prove. Barrier analysis: identify planned barriers, which failed/absent/bypassed, and upstream system causes. MORT-flavored thinking uses AND logic across barriers. Investigation ≠ a... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];

