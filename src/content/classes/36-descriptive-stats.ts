import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D2.14";

export const classFields: ClassFields = {
  hook: "Nine shops have 2 recordables a year. One shop had 40 after a single event. Leadership wants “the average is fine — fund nothing.” You are the CSP. The question is mean vs median vs the decision the numbers are allowed to make.",
  hookOilGas: `Nine pads have 2 recordables a year. One pad had 40 after a blow-by. Leadership wants âthe average is fine â fund nothing.â You are the CSP. The question is mean vs median vs the decision the numbers are allowed to make.`,
  hookConstruction: `Nine jobs have 2 recordables a year. One job had 40 after a collapse. Leadership wants âthe average is fine â fund nothing.â You are the CSP. The question is mean vs median vs the decision the numbers are allowed to make.`,
  rule: "Mean x̄ = Σx / n. Median is the middle of ordered data (average of two middles if n even). Mode is the most frequent value. Use median (or a trimmed view) when skew/outliers dominate. Statistics describe; they do not waive hierarchy. Do not let a pretty mean hide a plant that is on fire.",
  modelCaption:
    "Dot plot with a cluster at 2 and one point at 40. Arrows: mean pulled toward 40, median still at 2. Caption: report both; fund the outlier’s energy, not the slogan that “the mean is 5.8.”",
  workedCase:
    "Data: 2,2,2,2,2,2,2,2,2,40. n=10, Σ=58, mean=5.8. Ordered, two middles 2 and 2, median=2. Mode=2. The mean is a FORM-correct 5.8 and still a terrible reason to ignore the 40-event site. Investigate and engineer that site.",
  trapsJson: traps(
    "Reporting the mean when the stem asks for median of a skewed set.",
    "Forgetting to sort before the median.",
    "Using the mean as permission to skip a guard.",
  ),
  contrastJson: contrast([
    { looksLike: "Mean", actually: "Σx/n — sensitive to outliers" },
    { looksLike: "Median", actually: "Middle of sorted data — robust to skew" },
    { looksLike: "Mode", actually: "Most frequent value" },
    { looksLike: "Mean of TRIR", actually: "Still lagging, still not a control" },
  ]),
  mustScoreJson: mustScore(
    "Mean, median, and mode summarize differently \u2014 outliers pull the mean.",
    "Range and standard deviation describe spread.",
    "Choose the statistic that matches the question and the distribution.",
    "Do not average incompatible units or categories.",
    "Graphs must not mislead with truncated axes or cherry-picked windows.",
    "Sample versus population language matters in explanations.",
    "Calculator: pick closest rounded listed value.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "outliers dominate the mean", pick: "consider median or investigate outliers" },
    { ifStem: "the stem asks for spread", pick: "use range or standard deviation \u2014 not only the mean" },
    { ifStem: "units differ across datasets", pick: "do not average until converted" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "a chart truncates the axis to exaggerate change", pick: "reject the misleading display" },
  ),

  brief: `Mean xÌ = Î£x / n. Median is the middle of ordered data (average of two middles if n even). Mode is the most frequent value. Use median (or a trimmed view) when skew/outliers dominate. Statistics describe; they do not waive hierarchy. Do not let a pretty mean hide a plant that is on fire. If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Mean xÌ = Î£x / n. Median is the middle of ordered data (average of two middles if n even). Mode is the most frequent value. Use median (or a trimmed view) when skew/outliers dominate. Statistics describe; they do not waive hierarchy. Do not let a pretty mean hide a plant that is on fire. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
Nine shops have 2 recordables a year. One shop had 40 after a single event. Leadership wants âthe average is fine â fund nothing.â You are the CSP. The question is mean vs median vs the decision the numbers are allowed to make. Oil-and-gas skin: Nine pads have 2 recordables a year. One pad had 40 after a blow-by. Construction skin: Nine jobs have 2 recordables a year. One job had 40 after a collapse. Work the case: Data: 2,2,2,2,2,2,2,2,2,40. n=10, Î£=58, mean=5.8. Ordered, two middles 2 and 2, median=2. Mode=2. The mean is a FORM-correct 5.8 and still a terrible reason to ignore the 40-event site. Investigate and engineer that site. Classic traps: Reporting the mean when the stem asks for median of a skewed set.; Forgetting to sort before the median.; Using the mean as permission to skip a guard.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for descriptive stats. Verify whether a higher system or design fix is still open. Contrast labels: Mean is actually Σx/n — sensitive to outliers; Median is actually Middle of sorted data — robust to skew; Mode is actually Most frequent value; Mean of TRIR is actually Still lagging, still not a control. If the stem shows outliers dominate the mean, pick consider median or investigate outliers. If the stem shows the stem asks for spread, pick use range or standard deviation \u2014 not only the mean. If the stem shows units differ across datasets, pick do not average until converted. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows a chart truncates the axis to exaggerate change, pick reject the misleading display. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Mean vs median — 2,2,2,…,40. Which describes the typical shop? Which funds action sits in CSP-11 Domain 2 Management Systems. The exam tests whether you apply the rule when a package already looks complete. Core rule: Mean xÌ = Î£x / n. Median is the middle of ordered data (average of two middles if n even). Mode is the most frequent value. Use median (or a trimmed view) when skew/outliers dominate. Statistics describe; they do not waive hierarchy. Do not let a pretty mean hide a plant that is on fire. Field context: Nine shops have 2 recordables a year. One shop had 40 after a single event. Leadership wants âthe average is fine â fund nothing.â You are the CSP. The question is mean vs median vs the decision the numbers are allowed to make. The oil-and-gas skin shifts the same decision into production pressure: Nine pads have 2 recordables a year. One pad had 40 after a blow-by. The construction skin shifts it into schedule and trade stacking: Nine jobs have 2 recordables a year. One job had 40 after a collapse. Model caption for this class: Dot plot with a cluster at 2 and one point at 40. Arrows: mean pulled toward 40, median still at 2. Caption: report both; fund the outlierâs energy, not the slogan that âthe mean is 5.8.â Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Mean, median, and mode summarize differently — outliers pull the mean. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Range and standard deviation describe spread. (3) Choose the statistic that matches the question and the distribution. (4) Do not average incompatible units or categories. (5) Graphs must not mislead with truncated axes or cherry-picked windows. (6) Sample versus population language matters in explanations. (7) Calculator: pick closest rounded listed value. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Data: 2,2,2,2,2,2,2,2,2,40. n=10, Î£=58, mean=5.8. Ordered, two middles 2 and 2, median=2. Mode=2. The mean is a FORM-correct 5.8 and still a terrible reason to ignore the 40-event site. Investigate and engineer that site. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Reporting the mean when the stem asks for median of a skewed set.; Forgetting to sort before the median.; Using the mean as permission to skip a guard.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Mean” is really Σx/n — sensitive to outliers; “Median” is really Middle of sorted data — robust to skew; “Mode” is really Most frequent value; “Mean of TRIR” is really Still lagging, still not a control. Stem-if-then map: if outliers dominate the mean → consider median or investigate outliers; if the stem asks for spread → use range or standard deviation \u2014 not only the mean; if units differ across datasets → do not average until converted; if two answers work → higher hierarchy / system / design; if a chart truncates the axis to exaggerate change → reject the misleading display. Scoring favors evidence, owners, verification, and hierarchy-smart controls on descriptive stats. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Mean vs median — 2,2,2,…,40. Which describes the typical shop? Which funds action?",
  cardBack:
    "Median ≈ 2 (typical). Mean pulled up by 40. Still engineer the 40-event site. x̄ = Σx/n. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence states mean = Σx/n, median = middle of sorted data, use median for skew, and statistics do not waive hierarchy.",
  formulaSlug: "mean",
};

export const items: ClassItem[] = [
  exam(T, "You are the CSP reviewing a live decision at a plastics compounding turnaround. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Counts: 2, 2, 2, 2, 2, 2, 2, 2, 2, 40. Mean.", [
    "2.",
    "5.8 because 58/10.",
    "40.",
    "21.",
  ], 1, "FORM: x̄ = Σx/n = 58/10 = 5.8.", "FORM", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Mean x̄ = Σx / n. Median is the middle of ordered data (average of two middles if n even). Mode is the most frequent value. Use median (or a trimmed view) when skew/outliers dominate. Statistics describe; they do not... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Same data. Median.", [
    "5.8 without sorting.",
    "2 (sorted; even n, two middles are 2 and 2).",
    "21 (average of 2 and 40).",
    "40.",
  ], 1, "FORM: sort, then middle. Do not average the min and max.", "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Mean x̄ = Σx / n. Median is the middle of ordered data (average of two middles if n even). Mode is the most frequent value. Use median (or a trimmed view) when skew/outliers dominate. Statistics describe; they do not... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Stem asks for the typical shop because of skew, then asks which number to quote to the board.", [
    "Mean 5.8 only, so the 40 disappears.",
    "Median 2 for typical, plus the 40 as a separate site that still needs investigation/engineering.",
    "Mode 40.",
    "Premium average.",
  ], 1, "STEM: typical ≠ hide the outlier. Hierarchy still applies at the 40-event site.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Mean x̄ = Σx / n. Median is the middle of ordered data (average of two middles if n even). Mode is the most frequent value. Use median (or a trimmed view) when skew/outliers dominate. Statistics describe; they do not... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Leadership says mean TRIR is “fine” so the unguarded nip can wait. Best CSP call?", [
    "Agree — mean waives 1910.212.",
    "Reject: a descriptive mean is not a control; specify the guard.",
    "Agree if the median is also fine.",
    "Agree if insurance is cheaper.",
  ], 1, "HIER: statistics do not replace engineering.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Mean x̄ = Σx / n. Median is the middle of ordered data (average of two middles if n even). Mode is the most frequent value. Use median (or a trimmed view) when skew/outliers dominate. Statistics describe; they do not... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Median requested. Analyst reads 2,40,2,2 and reports median 21 without sorting. Error?", [
    "None — order in the stem is sacred.",
    "FORM: sort first (2,2,2,40), then median.",
    "They should have used ROI.",
    "They should have used 24.45.",
  ], 1, "FORM: unsorted median.", "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Mean x̄ = Σx / n. Median is the middle of ordered data (average of two middles if n even). Mode is the most frequent value. Use median (or a trimmed view) when skew/outliers dominate. Statistics describe; they do not... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Five sites’ TRIRs averaged equally even though EH is 20,000 vs 400,000. Issue?", [
    "Fine — mean of rates is always unweighted.",
    "FORM/STEM: a proper combined TRIR uses total N and total EH, not the unweighted mean of rates.",
    "Use 100,000 for small sites.",
    "Use median hours in the TRIR denominator.",
  ], 1, "FORM: do not unweight rates with different exposure.", "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Mean x̄ = Σx / n. Median is the middle of ordered data (average of two middles if n even). Mode is the most frequent value. Use median (or a trimmed view) when skew/outliers dominate. Statistics describe; they do not... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Finance averages insurance premiums across shops and calls that the “mean risk.” Best position?", [
    "Accept — premium mean is exposure.",
    "Reject: premium is financing; it is not a descriptive statistic of energy or incidents.",
    "Accept if mean TRIR matches.",
    "Accept if mode premium is low.",
  ], 1, "FIN: money averages ≠ hazard averages.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Mean x̄ = Σx / n. Median is the middle of ordered data (average of two middles if n even). Mode is the most frequent value. Use median (or a trimmed view) when skew/outliers dominate. Statistics describe; they do not... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Last sentence: “because of the skew, report the median.” Analyst reports 5.8 correctly as the mean. Score?", [
    "Full credit — 5.8 is true.",
    "Wrong statistic: the last sentence asked for median (2).",
    "Full credit if they also compute ROI.",
    "Full credit if they use 100,000.",
  ], 1, "STEM/FORM: answer the statistic asked.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Mean x̄ = Σx / n. Median is the middle of ordered data (average of two middles if n even). Mode is the most frequent value. Use median (or a trimmed view) when skew/outliers dominate. Statistics describe; they do not... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a food packaging SKU change. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Mode of 2,2,2,4,4,40.", [
    "40.",
    "2.",
    "4.",
    "No mode because 40 exists.",
  ], 1, "Mode is the most frequent value (2).", "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Mean x̄ = Σx / n. Median is the middle of ordered data (average of two middles if n even). Mode is the most frequent value. Use median (or a trimmed view) when skew/outliers dominate. Statistics describe; they do not... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a semiconductor tool install. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Even n: 1, 3, 4, 8. Median.", [
    "3.",
    "3.5 — average of 3 and 4 after sorting.",
    "4.",
    "8.",
  ], 1, "FORM: even n uses the average of the two central values.", "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Mean x̄ = Σx / n. Median is the middle of ordered data (average of two middles if n even). Mode is the most frequent value. Use median (or a trimmed view) when skew/outliers dominate. Statistics describe; they do not... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A team uses the mean RPN as the only budget gate and skips substitution on a low-mean, high-severity item. Error?", [
    "None — mean RPN is the SMS.",
    "Wrong tool plus hierarchy: averaging RPN is not a substitute for high-S design action.",
    "They should average PELs.",
    "They should average 8-hour clocks.",
  ], 1, "TOOL + HIER: mean RPN hides S=10 rows.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Mean x̄ = Σx / n. Median is the middle of ordered data (average of two middles if n even). Mode is the most frequent value. Use median (or a trimmed view) when skew/outliers dominate. Statistics describe; they do not... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Days-away: 0,0,0,0,180. Mean vs median for “typical case”?", [
    "Mean 36 describes the typical case better.",
    "Median 0 describes typical; the 180-day case still needs its own investigation — do not let 36 “average away” severity.",
    "Mode 180.",
    "Payback years.",
  ], 1, "Skew: median for typical; still act on the severe case.", "FORM", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Mean x̄ = Σx / n. Median is the middle of ordered data (average of two middles if n even). Mode is the most frequent value. Use median (or a trimmed view) when skew/outliers dominate. Statistics describe; they do not... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
