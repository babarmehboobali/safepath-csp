import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D2.01";
const explain = (core: string, calc: string, standards: string, distractors: string) =>
  `Core Rule: ${core} Calculation Steps: ${calc} Standards Cited: ${standards} Why Each Distractor Fails: ${distractors}`;

export const classFields: ClassFields = {
  hook:
    "A corporate dashboard says the site is “best in class” because its total recordables fell from 12 to 9. Headcount and hours also changed, contractors were reclassified, and a peer site uses normalized rates. You are the CSP. The question is whether the comparison is actually meaningful and what action the benchmark should drive.",
  hookOilGas: `A drilling contractor reports fewer recordables this year and claims âbest in class.â Crew hours, rig count, and contractor boundaries changed. You are the CSP. The task is to normalize the metric, compare like with like, and use the gap to choose action rather than celebrate an unadjusted count.`,
  hookConstruction: `A construction project reports 6 injuries versus 9 last year and declares success, even though hours doubled. Another project reports a lower normalized rate. You are the CSP. The decision is whether the raw count, normalized rate, or peer benchmark is the defensible management metric.`,
  rule:
    "Benchmarking compares like metrics against an internal baseline, peer, industry, or target using a consistent definition and normalization basis. Raw counts can mislead when exposure-hours, workforce mix, operations, or reporting definitions change. A benchmark is not automatically a target; it is evidence that should trigger gap analysis, root-cause review, and an action plan. Avoid cherry-picking favorable peers and verify that definitions are comparable.",
  modelCaption:
    "Benchmark ladder: DEFINE METRIC → NORMALIZE DENOMINATOR → VERIFY SCOPE/DEFINITIONS → COMPARE BASELINE/PEERS → EXPLAIN GAP → PRIORITIZE ACTION → RECHECK. Side panel: raw count ≠ rate; target ≠ benchmark; better rate ≠ better control if reporting changes.",
  workedCase:
    "A site has 6 recordable cases and 600,000 work-hours. A peer has 8 cases and 1,000,000 hours. Using the common 200,000-hour normalization: Site rate = (6×200,000)/600,000 = 2.0. Peer rate = (8×200,000)/1,000,000 = 1.6. The site has fewer raw cases but a higher normalized rate. If management used raw counts only, it would draw the wrong conclusion. Next step is to validate scope/definitions, identify why the normalized gap exists, then target the drivers.",
  trapsJson: traps(
    "Comparing raw counts between sites with different hours worked.",
    "Calling a peer benchmark a guaranteed safety target without checking definitions and context.",
    "Celebrating an improved rate when contractor scope or reporting rules changed.",
  ),
  contrastJson: contrast([
    { looksLike: "6 cases vs 8 cases", actually: "Raw count — not normalized performance" },
    { looksLike: "2.0 vs 1.6", actually: "Normalized rates on the same denominator" },
    { looksLike: "Best peer", actually: "A benchmark that still requires scope/definition verification" },
    { looksLike: "Lower rate", actually: "Outcome metric that does not prove the control system is stronger" },
    { looksLike: "Gap", actually: "Comparison that should trigger diagnosis and action" },
  ]),
  mustScoreJson: mustScore(
    "Benchmarking compares performance to peers/best practices to find gaps.",
    "Normalize metrics (hours, exposure) before crowing about rates.",
    "Leading and lagging both belong in benchmarking sets.",
    "Do not copy a peer\u2019s PPE program while their engineering differs.",
    "Context and industry differences matter.",
    "Use benchmarks to drive hierarchy-smart improvements.",
    "Vanity rankings without action are theater.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "rates compared without hours normalization", pick: "normalize before concluding" },
    { ifStem: "peer success was engineering; you copy posters", pick: "copy the effective control type" },
    { ifStem: "benchmarking with no action plan", pick: "convert gaps into owned CAPA" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "only lagging compared", pick: "include leading control-health metrics" },
  ),

  brief: `Benchmarking compares like metrics against an internal baseline, peer, industry, or target using a consistent definition and normalization basis. Raw counts can mislead when exposure-hours, workforce mix, operations, or reporting definitions change. A benchmark is not automatically a target; it is evidence that should trigger gap analysis, root-cause review, and an action plan. Avoid cherry-picking If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Benchmarking compares like metrics against an internal baseline, peer, industry, or target using a consistent definition and normalization basis. Raw counts can mislead when exposure-hours, workforce mix, operations, or reporting definitions change. A benchmark is not automatically a target; it is evidence that should trigger gap analysis, root-cause review, and an action plan. Avoid cherry-picking favorable peers and verify that definitions are comparable. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
A corporate dashboard says the site is âbest in classâ because its total recordables fell from 12 to 9. Headcount and hours also changed, contractors were reclassified, and a peer site uses normalized rates. You are the CSP. The question is whether the comparison is actually meaningful and what action the benchmark should drive. Oil-and-gas skin: A drilling contractor reports fewer recordables this year and claims âbest in class.â Crew hours, rig count, and contractor boundaries changed. You are the CSP. The task is to normalize the metric, compare like with like, and use the gap to choose action rather than celebrate an unadjusted count. Construction skin: A construction project reports 6 injuries versus 9 last year and declares success, even though hours doubled. Another project reports a lower normalized rate. You are the CSP. The decision is whether the raw count, normalized rate, or peer benchmark is the defensible management metric. Work the case: A site has 6 recordable cases and 600,000 work-hours. A peer has 8 cases and 1,000,000 hours. Using the common 200,000-hour normalization: Site rate = (6Ã200,000)/600,000 = 2.0. Peer rate = (8Ã200,000)/1,000,000 = 1.6. The site has fewer raw cases but a higher normalized rate. If management used raw counts only, it would draw the wrong conclusion. Next step is to validate scope/definitions, identify why the normalized gap exists, then target the drivers. Classic traps: Comparing raw counts between sites with different hours worked.; Calling a peer benchmark a guaranteed safety target without checking definitions and context.; Celebrating an improved rate when contractor scope or reporting rules changed.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for benchmarking performance. Verify whether a higher system or design fix is still open. Contrast labels: 6 cases vs 8 cases is actually Raw count — not normalized performance; 2.0 vs 1.6 is actually Normalized rates on the same denominator; Best peer is actually A benchmark that still requires scope/definition verification; Lower rate is actually Outcome metric that does not prove the control system is stronger; Gap is actually Comparison that should trigger diagnosis and action. If the stem shows rates compared without hours normalization, pick normalize before concluding. If the stem shows peer success was engineering; you copy posters, pick copy the effective control type. If the stem shows benchmarking with no action plan, pick convert gaps into owned CAPA. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows only lagging compared, pick include leading control-health metrics. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Benchmarking — fewer cases or better normalized performance sits in CSP-11 Domain 2 Management Systems. The exam tests whether you apply the rule when a package already looks complete. Core rule: Benchmarking compares like metrics against an internal baseline, peer, industry, or target using a consistent definition and normalization basis. Raw counts can mislead when exposure-hours, workforce mix, operations, or reporting definitions change. A benchmark is not automatically a target; it is evidence that should trigger gap analysis, root-cause review, and an action plan. Avoid cherry-picking favorable peers and verify that definitions are comparable. Field context: A corporate dashboard says the site is âbest in classâ because its total recordables fell from 12 to 9. Headcount and hours also changed, contractors were reclassified, and a peer site uses normalized rates. You are the CSP. The question is whether the comparison is actually meaningful and what action the benchmark should drive. The oil-and-gas skin shifts the same decision into production pressure: A drilling contractor reports fewer recordables this year and claims âbest in class.â Crew hours, rig count, and contractor boundaries changed. You are the CSP. The task is to normalize the metric, compare like with like, and use the gap to choose action rather than celebrate an unadjusted count. The construction skin shifts it into schedule and trade stacking: A construction project reports 6 injuries versus 9 last year and declares success, even though hours doubled. Another project reports a lower normalized rate. You are the CSP. The decision is whether the raw count, normalized rate, or peer benchmark is the defensible management metric. Model caption for this class: Benchmark ladder: DEFINE METRIC â NORMALIZE DENOMINATOR â VERIFY SCOPE/DEFINITIONS â COMPARE BASELINE/PEERS â EXPLAIN GAP â PRIORITIZE ACTION â RECHECK. Side panel: raw count â  rate; target â  benchmark; better rate â  better control if reporting changes. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Benchmarking compares performance to peers/best practices to find gaps. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Normalize metrics (hours, exposure) before crowing about rates. (3) Leading and lagging both belong in benchmarking sets. (4) Do not copy a peer’s PPE program while their engineering differs. (5) Context and industry differences matter. (6) Use benchmarks to drive hierarchy-smart improvements. (7) Vanity rankings without action are theater. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: A site has 6 recordable cases and 600,000 work-hours. A peer has 8 cases and 1,000,000 hours. Using the common 200,000-hour normalization: Site rate = (6Ã200,000)/600,000 = 2.0. Peer rate = (8Ã200,000)/1,000,000 = 1.6. The site has fewer raw cases but a higher normalized rate. If management used raw counts only, it would draw the wrong conclusion. Next step is to validate scope/definitions, identify why the normalized gap exists, then target the drivers. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Comparing raw counts between sites with different hours worked.; Calling a peer benchmark a guaranteed safety target without checking definitions and context.; Celebrating an improved rate when contractor scope or reporting rules changed.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “6 cases vs 8 cases” is really Raw count — not normalized performance; “2.0 vs 1.6” is really Normalized rates on the same denominator; “Best peer” is really A benchmark that still requires scope/definition verification; “Lower rate” is really Outcome metric that does not prove the control system is stronger; “Gap” is really Comparison that should trigger diagnosis and action. Stem-if-then map: if rates compared without hours normalization → normalize before concluding; if peer success was engineering; you copy posters → copy the effective control type; if benchmarking with no action plan → convert gaps into owned CAPA; if two answers work → higher hierarchy / system / design; if only lagging compared → include leading control-health metrics. Scoring favors evidence, owners, verification, and hierarchy-smart controls on benchmarking performance. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Benchmarking — fewer cases or better normalized performance?",
  cardBack:
    "Normalize comparable data, verify definitions/scope, explain the gap, act, and recheck. Example: 6/600k → 2.0; 8/1M → 1.6. Fewer raw cases can still mean worse normalized performance.",
  teachBackKey:
    "Pass if the answer states normalize + verify comparability + diagnose + act, and explains why raw counts can mislead.",
};

export const items: ClassItem[] = [
  exam(T, "Site A has 6 recordables in 600,000 hours. Site B has 8 in 1,000,000 hours. Using a 200,000-hour basis, which normalized rate is higher?", [
    "A: 1.2; B: 1.6.",
    "A: 2.0; B: 1.6.",
    "A: 6; B: 8, so B is higher.",
    "A: 600,000; B: 1,000,000.",
  ], 1, explain(
    "Normalize both sites to the same hours basis before comparing performance.",
    "A=(6×200,000)/600,000=2.0; B=(8×200,000)/1,000,000=1.6.",
    "CSP-11 D2.01 benchmarking; normalized safety-rate methodology.",
    "A reverses/changes the arithmetic; C compares raw counts; D reports denominators rather than rates."
  ), "FORM", "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Benchmarking compares like metrics against an internal baseline, peer, industry, or target using a consistent definition and normalization basis. Raw counts can mislead when exposure-hours, workforce mix, operations,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A plant's recordable rate improved after all contractors were removed from the denominator. Best interpretation?", [
    "Guaranteed performance improvement.",
    "The scope/definition changed, so the apparent improvement may not represent a true performance improvement.",
    "The benchmark is automatically valid.",
    "A lower rate always proves stronger controls.",
  ], 1, explain(
    "Comparable scope and definitions are prerequisites for meaningful benchmarks.",
    "Check the population and denominator before comparing the old and new rates.",
    "CSP-11 D2.01 benchmarking and gap-analysis principles.",
    "A and D overstate what one rate can prove; C ignores the definition change."
  ), "STEM", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Benchmarking compares like metrics against an internal baseline, peer, industry, or target using a consistent definition and normalization basis. Raw counts can mislead when exposure-hours, workforce mix, operations,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Which is the best first step when two peer sites use the same metric name but different case definitions?", [
    "Average the numbers.",
    "Harmonize/verify definitions and scope before comparing the metrics.",
    "Choose the site with the lower number.",
    "Discard all safety metrics.",
  ], 1, explain(
    "Comparable definitions are necessary before benchmarking.",
    "Document numerator, denominator, inclusion rules, and population, then calculate/comparison.",
    "CSP-11 D2.01 benchmark comparison.",
    "A creates a precise average from incompatible data; C is cherry-picking; D overreacts."
  ), "TOOL", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Benchmarking compares like metrics against an internal baseline, peer, industry, or target using a consistent definition and normalization basis. Raw counts can mislead when exposure-hours, workforce mix, operations,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A benchmark shows a site's exposure rate is twice the peer median. What should happen next?", [
    "Immediately punish supervisors.",
    "Validate the comparison, diagnose the drivers, and develop a prioritized action plan.",
    "Rename the metric.",
    "Ignore the peer because it is a different company.",
  ], 1, explain(
    "A gap should drive diagnosis and action, not a reflexive blame response.",
    "Verify comparability → identify causes → prioritize controls/resources → remeasure.",
    "CSP-11 D2.01 and Domain 2 performance-management principles.",
    "A skips causal analysis; C hides the signal; D discards useful benchmark evidence without testing comparability."
  ), "HIER", "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Benchmarking compares like metrics against an internal baseline, peer, industry, or target using a consistent definition and normalization basis. Raw counts can mislead when exposure-hours, workforce mix, operations,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A site's total cases fall from 12 to 9 while hours fall from 900,000 to 300,000. What is the safest conclusion?", [
    "Performance improved because 9 < 12.",
    "The raw count alone is insufficient; calculate the normalized rate before judging performance.",
    "Performance worsened because 12 is a larger number.",
    "No metric can compare sites.",
  ], 1, explain(
    "Changing exposure hours make raw counts unsuitable for direct performance comparison.",
    "Compute the same normalized rate for both periods using the metric's defined denominator.",
    "CSP-11 D2.01 benchmarking and normalized-rate reasoning.",
    "A and C ignore the denominator; D rejects a standard management technique."
  ), "FORM", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Benchmarking compares like metrics against an internal baseline, peer, industry, or target using a consistent definition and normalization basis. Raw counts can mislead when exposure-hours, workforce mix, operations,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A peer site's lower incident rate may be caused partly by under-reporting. What should the CSP do?", [
    "Use it as the gold standard anyway.",
    "Check reporting quality/definitions and triangulate with other leading and lagging evidence.",
    "Delete the peer.",
    "Only compare raw counts instead.",
  ], 1, explain(
    "A benchmark is credible only when its measurement system is credible.",
    "Review definitions, reporting completeness, audit evidence, and complementary indicators.",
    "CSP-11 D2.01 and D2.07 measurement principles.",
    "A accepts potentially biased data; C discards evidence; D makes comparability worse."
  ), "TOOL", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Benchmarking compares like metrics against an internal baseline, peer, industry, or target using a consistent definition and normalization basis. Raw counts can mislead when exposure-hours, workforce mix, operations,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Benchmark target is 1.5, current rate is 2.1. What is the absolute gap?", [
    "0.6 rate units.",
    "0.714 percent.",
    "3.6 rate units.",
    "21.0 rate units.",
  ], 0, explain(
    "An absolute benchmark gap is current minus target when both are expressed in the same metric units.",
    "2.1−1.5=0.6 rate units.",
    "CSP-11 D2.01 gap analysis.",
    "B is a percentage conversion not requested; C adds; D misplaces the decimal scale."
  ), "FORM", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Benchmarking compares like metrics against an internal baseline, peer, industry, or target using a consistent definition and normalization basis. Raw counts can mislead when exposure-hours, workforce mix, operations,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Which action is the strongest use of a benchmark result?", [
    "Publish the ranking and stop.",
    "Use the comparison to identify the performance gap, determine causes, implement controls, and remeasure.",
    "Change the denominator until the ranking improves.",
    "Reward only the site with the lowest number regardless of scope.",
  ], 1, explain(
    "Benchmarking supports continuous performance improvement rather than scorekeeping alone.",
    "Benchmark → gap → causal analysis → action → verification.",
    "CSP-11 D2.01 and management-system improvement logic.",
    "A stops before action; C is metric manipulation; D incentivizes misleading comparisons."
  ), "HIER", "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Benchmarking compares like metrics against an internal baseline, peer, industry, or target using a consistent definition and normalization basis. Raw counts can mislead when exposure-hours, workforce mix, operations,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A contractor's work-hours are excluded at the site but included at the peer. Which benchmark conclusion is defensible?", [
    "The peer is definitely safer.",
    "The comparison is not yet valid until the scope is aligned or the limitation is explicitly handled.",
    "The site must have zero risk.",
    "The denominator does not matter.",
  ], 1, explain(
    "A benchmark requires comparable populations and exposure denominators.",
    "Align the included workforce or clearly adjust the comparison according to the metric definition.",
    "CSP-11 D2.01 benchmark integrity.",
    "A infers safety from an invalid comparison; C is absolute; D ignores normalization."
  ), "STEM", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Benchmarking compares like metrics against an internal baseline, peer, industry, or target using a consistent definition and normalization basis. Raw counts can mislead when exposure-hours, workforce mix, operations,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A site's rate is 20% above the benchmark. Management wants to cut inspections to reduce cost. Best CSP response?", [
    "Agree because cost is the only objective.",
    "Use the benchmark gap to identify the actual risk drivers and choose effective controls; cutting assurance solely to hide the gap is not a valid improvement.",
    "Delete the benchmark.",
    "Double the denominator.",
  ], 1, explain(
    "Benchmarking should inform risk-based action, not metric manipulation or arbitrary cost cutting.",
    "Validate the gap, identify causes, evaluate control options and resource tradeoffs, then remeasure.",
    "CSP-11 D2.01 and Domain 2 management-analysis principles.",
    "A ignores safety performance; C suppresses evidence; D manipulates the metric."
  ), "FIN", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Benchmarking compares like metrics against an internal baseline, peer, industry, or target using a consistent definition and normalization basis. Raw counts can mislead when exposure-hours, workforce mix, operations,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Which is a leading indicator rather than a lagging benchmark outcome?", [
    "Recordable injury rate.",
    "Fatality count.",
    "Percentage of critical safeguards verified on schedule.",
    "Lost-time cases.",
  ], 2, explain(
    "Leading indicators monitor conditions/actions believed to influence future outcomes.",
    "No calculation; classify whether the metric describes preventive activity/control health versus an outcome.",
    "CSP-11 D2.07 leading/lagging indicators.",
    "A, B, and D are outcome measures; C monitors a preventive control condition."
  ), "TOOL", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Benchmarking compares like metrics against an internal baseline, peer, industry, or target using a consistent definition and normalization basis. Raw counts can mislead when exposure-hours, workforce mix, operations,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A site claims “best in class” after beating one peer. Best CSP wording?", [
    "Best in the industry, proven.",
    "Better than the selected peer on the defined metric, subject to scope/definition and broader benchmark verification.",
    "Zero risk.",
    "Guaranteed future performance.",
  ], 1, explain(
    "A single peer comparison supports a limited comparative claim, not a universal safety ranking.",
    "State the metric, peer, period, and comparability limitations.",
    "CSP-11 D2.01 benchmark interpretation.",
    "A overgeneralizes; C claims impossible certainty; D predicts the future without evidence."
  ), "STEM", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Benchmarking compares like metrics against an internal baseline, peer, industry, or target using a consistent definition and normalization basis. Raw counts can mislead when exposure-hours, workforce mix, operations,... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
