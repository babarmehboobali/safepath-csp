import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D2.06";

export const classFields: ClassFields = {
  hook: "A board wants “the RPN” for a tank overfill that needs two independent level loops to fail together. Someone opens an FMEA spreadsheet. You are the CSP. The question is whether this is an FTA problem.",
  hookOilGas: `A board wants âthe RPNâ for a well-control event that needs two independent barriers to fail together. Someone opens an FMEA spreadsheet. You are the CSP. The question is whether this is an FTA problem.`,
  hookConstruction: `A board wants âthe RPNâ for a collapse that needs two independent shores to fail together. Someone opens an FMEA spreadsheet. You are the CSP. The question is whether this is an FTA problem.`,
  rule: "FTA is top-down: pick the unwanted top event, decompose with AND/OR gates, find cut sets, then quantify if data exist. Use FTA when combinations of failures matter. FMEA is bottom-up single-point ranking (RPN). A bowtie/safety case shows barriers on threat and consequence sides. Wrong method is a TOOL error.",
  modelCaption:
    "Inverted tree: top event rectangle, OR gates spreading causes, AND gates where two barriers must both fail. Caption: a cut set is a minimal set that makes the top event true. RPN does not live on this drawing.",
  workedCase:
    "Tank overfill. Top event: liquid to dike. AND: high-level loop fails AND independent overflow fails. OR under each: sensor, logic, valve. Minimal cut set {sensor A, overflow valve}. Do not average those into one FMEA row and fund a louder horn because detection scored 10.",
  trapsJson: traps(
    "Using RPN on a two-barrier AND combination.",
    "Treating every gate as OR so single failures look sufficient.",
    "Calling FTA a replacement for hierarchy — a cut set is not a permit to skip substitution.",
  ),
  contrastJson: contrast([
    { looksLike: "FTA", actually: "Top-down logic of combinations (AND/OR, cut sets)" },
    { looksLike: "FMEA", actually: "Bottom-up single failure modes, RPN = S×O×D" },
    { looksLike: "Bowtie / safety case", actually: "Barriers on causes and consequences; demonstration to a decision maker" },
    { looksLike: "RPN on an AND gate", actually: "TOOL error — detection score is not P(A and B)" },
  ]),
  mustScoreJson: mustScore(
    "FTA is top-down for a defined top event \u2014 not a brainstorm without a top gate.",
    "AND gates need all inputs; OR gates need any input.",
    "Basic events need credible probabilities or qualitative rankings.",
    "Independence assumptions fail when common-cause is ignored.",
    "FTA informs design and cut sets \u2014 it is not decoration after a decision.",
    "Minimal cut sets show the fewest failures that cause the top event.",
    "Wrong tool: using FMEA alone when the question is how a specific top event occurs.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "the top event is undefined", pick: "define the top event before building gates" },
    { ifStem: "common-cause links two basic events", pick: "model dependence \u2014 do not assume independence" },
    { ifStem: "management wants FTA after the design is frozen with no change path", pick: "reject theater \u2014 FTA must be able to change controls" },
    { ifStem: "the question is single-component failure modes only", pick: "consider FMEA instead of forcing FTA" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
  ),

  brief: `FTA is top-down: pick the unwanted top event, decompose with AND/OR gates, find cut sets, then quantify if data exist. Use FTA when combinations of failures matter. FMEA is bottom-up single-point ranking (RPN). A bowtie/safety case shows barriers on threat and consequence sides. Wrong method is a TOOL error. If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
FTA is top-down: pick the unwanted top event, decompose with AND/OR gates, find cut sets, then quantify if data exist. Use FTA when combinations of failures matter. FMEA is bottom-up single-point ranking (RPN). A bowtie/safety case shows barriers on threat and consequence sides. Wrong method is a TOOL error. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
A board wants âthe RPNâ for a tank overfill that needs two independent level loops to fail together. Someone opens an FMEA spreadsheet. You are the CSP. The question is whether this is an FTA problem. Oil-and-gas skin: A board wants âthe RPNâ for a well-control event that needs two independent barriers to fail together. You are the CSP. Construction skin: A board wants âthe RPNâ for a collapse that needs two independent shores to fail together. You are the CSP. Work the case: Tank overfill. Top event: liquid to dike. AND: high-level loop fails AND independent overflow fails. OR under each: sensor, logic, valve. Minimal cut set {sensor A, overflow valve}. Do not average those into one FMEA row and fund a louder horn because detection scored 10. Classic traps: Using RPN on a two-barrier AND combination.; Treating every gate as OR so single failures look sufficient.; Calling FTA a replacement for hierarchy — a cut set is not a permit to skip substitution.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for fta. Verify whether a higher system or design fix is still open. Contrast labels: FTA is actually Top-down logic of combinations (AND/OR, cut sets); FMEA is actually Bottom-up single failure modes, RPN = S×O×D; Bowtie / safety case is actually Barriers on causes and consequences; demonstration to a decision maker; RPN on an AND gate is actually TOOL error — detection score is not P(A and B). If the stem shows the top event is undefined, pick define the top event before building gates. If the stem shows common-cause links two basic events, pick model dependence \u2014 do not assume independence. If the stem shows management wants FTA after the design is frozen with no change path, pick reject theater \u2014 FTA must be able to change controls. If the stem shows the question is single-component failure modes only, pick consider FMEA instead of forcing FTA. If the stem shows two answers work, pick higher hierarchy / system / design. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `FTA — two independent loops must fail. Is RPN the method sits in CSP-11 Domain 2 Management Systems. The exam tests whether you apply the rule when a package already looks complete. Core rule: FTA is top-down: pick the unwanted top event, decompose with AND/OR gates, find cut sets, then quantify if data exist. Use FTA when combinations of failures matter. FMEA is bottom-up single-point ranking (RPN). A bowtie/safety case shows barriers on threat and consequence sides. Wrong method is a TOOL error. Field context: A board wants âthe RPNâ for a tank overfill that needs two independent level loops to fail together. Someone opens an FMEA spreadsheet. You are the CSP. The question is whether this is an FTA problem. The oil-and-gas skin shifts the same decision into production pressure: A board wants âthe RPNâ for a well-control event that needs two independent barriers to fail together. You are the CSP. The construction skin shifts it into schedule and trade stacking: A board wants âthe RPNâ for a collapse that needs two independent shores to fail together. You are the CSP. Model caption for this class: Inverted tree: top event rectangle, OR gates spreading causes, AND gates where two barriers must both fail. Caption: a cut set is a minimal set that makes the top event true. RPN does not live on this drawing. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) FTA is top-down for a defined top event — not a brainstorm without a top gate. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) AND gates need all inputs; OR gates need any input. (3) Basic events need credible probabilities or qualitative rankings. (4) Independence assumptions fail when common-cause is ignored. (5) FTA informs design and cut sets — it is not decoration after a decision. (6) Minimal cut sets show the fewest failures that cause the top event. (7) Wrong tool: using FMEA alone when the question is how a specific top event occurs. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Tank overfill. Top event: liquid to dike. AND: high-level loop fails AND independent overflow fails. OR under each: sensor, logic, valve. Minimal cut set {sensor A, overflow valve}. Do not average those into one FMEA row and fund a louder horn because detection scored 10. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Using RPN on a two-barrier AND combination.; Treating every gate as OR so single failures look sufficient.; Calling FTA a replacement for hierarchy — a cut set is not a permit to skip substitution.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “FTA” is really Top-down logic of combinations (AND/OR, cut sets); “FMEA” is really Bottom-up single failure modes, RPN = S×O×D; “Bowtie / safety case” is really Barriers on causes and consequences; demonstration to a decision maker; “RPN on an AND gate” is really TOOL error — detection score is not P(A and B). Stem-if-then map: if the top event is undefined → define the top event before building gates; if common-cause links two basic events → model dependence \u2014 do not assume independence; if management wants FTA after the design is frozen with no change path → reject theater \u2014 FTA must be able to change controls; if the question is single-component failure modes only → consider FMEA instead of forcing FTA; if two answers work → higher hierarchy / system / design. Scoring favors evidence, owners, verification, and hierarchy-smart controls on fta. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "FTA — two independent loops must fail. Is RPN the method?",
  cardBack:
    "No. FTA is top-down AND/OR and cut sets. FMEA RPN is single-point ranking. Bowtie/safety case demonstrates barriers. Wrong method = TOOL. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence says FTA is top-down with AND/OR cut sets, FMEA is bottom-up RPN, and using RPN on a combination is the wrong tool.",
};

export const items: ClassItem[] = [
  exam(T, "A tank overfill requires two independent level loops to fail. The team opens FMEA and ranks “operator fails to notice horn” as worst RPN. Best CSP call?", [
    "Keep FMEA — RPN is the universal risk method.",
    "Wrong tool: combinations of independent barriers want FTA (or a quantified bowtie), not a single-point RPN on detection.",
    "Use descriptive statistics on horns.",
    "Use ISO 14001 aspects.",
  ], 1, "TOOL: AND combinations are FTA territory. RPN is not P(A and B).", "TOOL", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "FTA is top-down: pick the unwanted top event, decompose with AND/OR gates, find cut sets, then quantify if data exist. Use FTA when combinations of failures matter. FMEA is bottom-up single-point ranking (RPN). A bowt... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "In an FTA, the top event occurs only if valve A AND valve B fail. Independent P(A)=0.02, P(B)=0.03. Approximate P(top) from that AND?", [
    "0.05 (add).",
    "0.0006 (multiply) if independence holds.",
    "0.02 (take the larger).",
    "RPN = 2 × 3 × detection.",
  ], 1, "FORM: independent AND multiplies. Adding is the attractive wrong arithmetic.", "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "FTA is top-down: pick the unwanted top event, decompose with AND/OR gates, find cut sets, then quantify if data exist. Use FTA when combinations of failures matter. FMEA is bottom-up single-point ranking (RPN). A bowt... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Which drawing is FTA.", [
    "A spreadsheet of components with S, O, D columns.",
    "A top event decomposed through AND/OR gates to basic events and cut sets.",
    "A bowtie with threats on the left and consequences on the right only, no gates.",
    "A Pareto of first aids.",
  ], 1, "FTA is the tree with gates. The others are different tools.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "FTA is top-down: pick the unwanted top event, decompose with AND/OR gates, find cut sets, then quantify if data exist. Use FTA when combinations of failures matter. FMEA is bottom-up single-point ranking (RPN). A bowt... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "An FTA shows an OR of “no dike” OR “dike undersized.” A dike can still be built. The team funds a better detector. Best action?", [
    "Keep the detector — FTA always funds electronics.",
    "Build/size the dike (consequence barrier / engineering) rather than detection-only while that row is open.",
    "Buy insurance and close the tree.",
    "Convert the OR to RPN.",
  ], 1, "HIER still applies after the tree. A dike beats a detector if still open.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "FTA is top-down: pick the unwanted top event, decompose with AND/OR gates, find cut sets, then quantify if data exist. Use FTA when combinations of failures matter. FMEA is bottom-up single-point ranking (RPN). A bowt... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Two “independent” instruments share one tap and one PLC. The FTA models them as AND. Problem?", [
    "None — two nameplates mean independence.",
    "Common cause: the AND overstates independence; model the shared tap/PLC as a common basic event.",
    "They should have used TRIR.",
    "They should have used 7-day recording.",
  ], 1, "STEM: independence is a fact, not a label. Shared hardware is common cause.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "FTA is top-down: pick the unwanted top event, decompose with AND/OR gates, find cut sets, then quantify if data exist. Use FTA when combinations of failures matter. FMEA is bottom-up single-point ranking (RPN). A bowt... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A client wants a safety case demonstrating barriers to a major accident. The team delivers only an FMEA RPN table. What is missing relative to FTA/bowtie?", [
    "Nothing — RPN is a safety case.",
    "A safety case/bowtie must show preventive and mitigative barriers around a defined top event; RPN ranking of parts is the wrong method.",
    "Only a 300A is required.",
    "Only Z10 clause numbers.",
  ], 1, "TOOL: safety case/bowtie vs FMEA. Domain 2 method choice.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "FTA is top-down: pick the unwanted top event, decompose with AND/OR gates, find cut sets, then quantify if data exist. Use FTA when combinations of failures matter. FMEA is bottom-up single-point ranking (RPN). A bowt... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Finance says skip the second independent overflow because insurance covers overfills. FTA shows a single remaining cut set of {sensor A}. Best CSP position?", [
    "Accept transfer as the second barrier.",
    "Reject: insurance is financing, not an independent engineered barrier in the cut set.",
    "Replace the AND with a poster.",
    "Use workers-comp TRIR as P(top).",
  ], 1, "FIN: transfer is not a cut-set barrier.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "FTA is top-down: pick the unwanted top event, decompose with AND/OR gates, find cut sets, then quantify if data exist. Use FTA when combinations of failures matter. FMEA is bottom-up single-point ranking (RPN). A bowt... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Last sentence: budget freeze allows only one add this quarter — a second independent high-level or a louder horn. FTA top event is overfill. Best add?", [
    "Horn — detection always wins in FTA.",
    "Second independent high-level (turns a single cut set into an AND).",
    "Neither — FTA cannot inform spending.",
    "A pizza contest.",
  ], 1, "STEM closed a shopping spree. Remaining engineering independence beats detection.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "FTA is top-down: pick the unwanted top event, decompose with AND/OR gates, find cut sets, then quantify if data exist. Use FTA when combinations of failures matter. FMEA is bottom-up single-point ranking (RPN). A bowt... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "P(demand failure) is 1×10⁻³ per demand. The analyst treats it as 1×10⁻³ per year in a plant that sees 20 demands/year. Error?", [
    "None — per demand equals per year.",
    "UNIT/FORM: demand rate must convert failures per demand into an annual frequency before comparing to a per-year criterion.",
    "They should have used mg/m³.",
    "They should have used 200,000 hours.",
  ], 1, "UNIT: per demand vs per year is a unit/base error.", "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "FTA is top-down: pick the unwanted top event, decompose with AND/OR gates, find cut sets, then quantify if data exist. Use FTA when combinations of failures matter. FMEA is bottom-up single-point ranking (RPN). A bowt... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a food packaging SKU change. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: When is FMEA a better first tool than FTA.", [
    "Two independent SIS loops must both fail to reach a catastrophic top event.",
    "A new gearbox has a list of single-point modes to rank for design review.",
    "A regulator asked for a bowtie demonstration of major-accident barriers.",
    "You need P(A AND B) for two barriers.",
  ], 1, "FMEA fits single-point design lists. Combinations and demonstrations want FTA/bowtie.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "FTA is top-down: pick the unwanted top event, decompose with AND/OR gates, find cut sets, then quantify if data exist. Use FTA when combinations of failures matter. FMEA is bottom-up single-point ranking (RPN). A bowt... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "An FTA basic event is “operator error.” Substitution of the hazardous inventory is still open. Best use of the tree?", [
    "Fund more operator training as the primary cut-set fix.",
    "Treat substitution as removing basic events/energy; training only after the inventory decision.",
    "Ignore the tree and post OSHA PELs.",
    "Multiply RPN by TRIR.",
  ], 1, "HIER: a tree does not outrank substitution still open in the stem.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "FTA is top-down: pick the unwanted top event, decompose with AND/OR gates, find cut sets, then quantify if data exist. Use FTA when combinations of failures matter. FMEA is bottom-up single-point ranking (RPN). A bowt... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A fatality from the top event occurs at 04:00. The FTA team wants two weeks to update the tree before calling OSHA. Clock?", [
    "Two weeks is acceptable if the tree is complex.",
    "Fatality notification is 8 hours; analysis does not pause 1904.",
    "24 hours because FTA is involved.",
    "7 calendar days.",
  ], 1, "TIME: 8-hour fatality clock is independent of FTA schedule.", "TIME", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "FTA is top-down: pick the unwanted top event, decompose with AND/OR gates, find cut sets, then quantify if data exist. Use FTA when combinations of failures matter. FMEA is bottom-up single-point ranking (RPN). A bowt... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
