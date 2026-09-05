import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D2.14";

export const classFields: ClassFields = {
  hook: "A Pareto of first-aid finger nicks funds a glove campaign. The same chart’s “other” bar hides one amputation energy. You are the CSP. The question is what Pareto is allowed to rank — and what it must not hide.",
  hookOilGas: `A Pareto of first-aid finger nicks funds a glove campaign. The same chart other bar hides one well-control energy. You are the CSP. The question is what Pareto is allowed to rank â and what it must not hide.`,
  hookConstruction: `A Pareto of first-aid finger nicks funds a glove campaign. The same chart other bar hides one fall energy. You are the CSP. The question is what Pareto is allowed to rank â and what it must not hide.`,
  rule: "Pareto ranks categories by frequency or by loss (80/20 is a heuristic, not a law). Sort descending, show cumulative percent. Rank by the stem’s unit (count vs dollars vs days). Do not Pareto leading-checkbox theater. Do not let a tall bar of nicks outrank an open high-energy cause. FORM if you forget to sort or mix units; FIN if you rank by premium instead of energy.",
  modelCaption:
    "Bars descending left to right (frequency or $) with a cumulative-percent line toward 80 percent. A small bar at the right labeled high energy / low count in amber. Caption: height is not hierarchy — check the small deadly bar.",
  workedCase:
    "Counts: nicks 40, strains 25, eye 10, other 5 (the 5 includes a fingertip amputation). A count Pareto funds gloves. A loss Pareto or an energy screen funds the unguarded shear. Do both. Cumulative: 40/80=50 percent, +25=81 percent — 80/20 appeared, and still missed the amputation.",
  trapsJson: traps(
    "Treating 80/20 as a natural law that ends the analysis.",
    "Ranking by easy counts while the stem asked for loss dollars.",
    "Using Pareto to skip a still-open higher control on a short bar.",
  ),
  contrastJson: contrast([
    { looksLike: "Tall bar of first aids", actually: "Volume — not automatically the highest energy" },
    { looksLike: "Short bar / other", actually: "May hide catastrophic energy — split it" },
    { looksLike: "80 percent cumulative", actually: "A heuristic cutoff, not a stop-work on the rest" },
    { looksLike: "Pareto of observation cards", actually: "Often theater — not causes" },
  ]),
  mustScoreJson: mustScore(
    "Pareto prioritizes the vital few causes driving most of the effect.",
    "Use Pareto to focus resources \u2014 then apply hierarchy to those causes.",
    "Bad categorization creates a false vital few.",
    "Do not ignore a rare catastrophic category just because counts are low.",
    "Update Pareto after interventions to see if the vital few moved.",
    "Counts versus weighted severity can change priority.",
    "Pareto is a focusing tool, not a full risk assessment.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "categories are mixed inconsistently", pick: "fix coding before trusting the chart" },
    { ifStem: "a low-count catastrophic cause exists", pick: "do not drop it solely for frequency" },
    { ifStem: "resources scatter across the trivial many", pick: "focus on the vital few with hierarchy-smart fixes" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "after CAPA the same bar dominates", pick: "reassess cause and control effectiveness" },
  ),

  brief: `Pareto ranks categories by frequency or by loss (80/20 is a heuristic, not a law). Sort descending, show cumulative percent. Rank by the stemâs unit (count vs dollars vs days). Do not Pareto leading-checkbox theater. Do not let a tall bar of nicks outrank an open high-energy cause. FORM if you forget to sort or If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Pareto ranks categories by frequency or by loss (80/20 is a heuristic, not a law). Sort descending, show cumulative percent. Rank by the stemâs unit (count vs dollars vs days). Do not Pareto leading-checkbox theater. Do not let a tall bar of nicks outrank an open high-energy cause. FORM if you forget to sort or mix units; FIN if you rank by premium instead of energy. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
A Pareto of first-aid finger nicks funds a glove campaign. The same chartâs âotherâ bar hides one amputation energy. You are the CSP. The question is what Pareto is allowed to rank â and what it must not hide. Oil-and-gas skin: A Pareto of first-aid finger nicks funds a glove campaign. The same chart other bar hides one well-control energy. You are the CSP. Construction skin: A Pareto of first-aid finger nicks funds a glove campaign. The same chart other bar hides one fall energy. You are the CSP. Work the case: Counts: nicks 40, strains 25, eye 10, other 5 (the 5 includes a fingertip amputation). A count Pareto funds gloves. A loss Pareto or an energy screen funds the unguarded shear. Do both. Cumulative: 40/80=50 percent, +25=81 percent â 80/20 appeared, and still missed the amputation. Classic traps: Treating 80/20 as a natural law that ends the analysis.; Ranking by easy counts while the stem asked for loss dollars.; Using Pareto to skip a still-open higher control on a short bar.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for pareto. Verify whether a higher system or design fix is still open. Contrast labels: Tall bar of first aids is actually Volume — not automatically the highest energy; Short bar / other is actually May hide catastrophic energy — split it; 80 percent cumulative is actually A heuristic cutoff, not a stop-work on the rest; Pareto of observation cards is actually Often theater — not causes. If the stem shows categories are mixed inconsistently, pick fix coding before trusting the chart. If the stem shows a low-count catastrophic cause exists, pick do not drop it solely for frequency. If the stem shows resources scatter across the trivial many, pick focus on the vital few with hierarchy-smart fixes. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows after CAPA the same bar dominates, pick reassess cause and control effectiveness. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Pareto — tall nick bar vs short amputation bar. Which gets the money sits in CSP-11 Domain 2 Management Systems. The exam tests whether you apply the rule when a package already looks complete. Core rule: Pareto ranks categories by frequency or by loss (80/20 is a heuristic, not a law). Sort descending, show cumulative percent. Rank by the stemâs unit (count vs dollars vs days). Do not Pareto leading-checkbox theater. Do not let a tall bar of nicks outrank an open high-energy cause. FORM if you forget to sort or mix units; FIN if you rank by premium instead of energy. Field context: A Pareto of first-aid finger nicks funds a glove campaign. The same chartâs âotherâ bar hides one amputation energy. You are the CSP. The question is what Pareto is allowed to rank â and what it must not hide. The oil-and-gas skin shifts the same decision into production pressure: A Pareto of first-aid finger nicks funds a glove campaign. The same chart other bar hides one well-control energy. You are the CSP. The construction skin shifts it into schedule and trade stacking: A Pareto of first-aid finger nicks funds a glove campaign. The same chart other bar hides one fall energy. You are the CSP. Model caption for this class: Bars descending left to right (frequency or $) with a cumulative-percent line toward 80 percent. A small bar at the right labeled high energy / low count in amber. Caption: height is not hierarchy â check the small deadly bar. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Pareto prioritizes the vital few causes driving most of the effect. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Use Pareto to focus resources — then apply hierarchy to those causes. (3) Bad categorization creates a false vital few. (4) Do not ignore a rare catastrophic category just because counts are low. (5) Update Pareto after interventions to see if the vital few moved. (6) Counts versus weighted severity can change priority. (7) Pareto is a focusing tool, not a full risk assessment. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Counts: nicks 40, strains 25, eye 10, other 5 (the 5 includes a fingertip amputation). A count Pareto funds gloves. A loss Pareto or an energy screen funds the unguarded shear. Do both. Cumulative: 40/80=50 percent, +25=81 percent â 80/20 appeared, and still missed the amputation. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Treating 80/20 as a natural law that ends the analysis.; Ranking by easy counts while the stem asked for loss dollars.; Using Pareto to skip a still-open higher control on a short bar.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Tall bar of first aids” is really Volume — not automatically the highest energy; “Short bar / other” is really May hide catastrophic energy — split it; “80 percent cumulative” is really A heuristic cutoff, not a stop-work on the rest; “Pareto of observation cards” is really Often theater — not causes. Stem-if-then map: if categories are mixed inconsistently → fix coding before trusting the chart; if a low-count catastrophic cause exists → do not drop it solely for frequency; if resources scatter across the trivial many → focus on the vital few with hierarchy-smart fixes; if two answers work → higher hierarchy / system / design; if after CAPA the same bar dominates → reassess cause and control effectiveness. Scoring favors evidence, owners, verification, and hierarchy-smart controls on pareto. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Pareto — tall nick bar vs short amputation bar. Which gets the money?",
  cardBack:
    "Honor the unit, sort, cumulative percent. Then split other and apply hierarchy to high energy even if the bar is short. 80/20 is a heuristic. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence says Pareto ranks sorted categories with cumulative percent, 80/20 is a heuristic, and a short high-energy bar still outranks a tall nick bar for control choice.",
};

export const items: ClassItem[] = [
  exam(T, "Counts: nicks 40, strains 25, eye 10, other 5 (includes one amputation on an open shear). Count-only Pareto funds gloves. Best CSP add?", [
    "Gloves only — 80/20 is a law.",
    "Split other and rank energy/loss too; fund guarding the shear even though the bar is short.",
    "Fund posters for all four equally.",
    "Fund insurance for the nicks.",
  ], 1, "HIER: a short deadly bar still gets engineering.", "HIER", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Pareto ranks categories by frequency or by loss (80/20 is a heuristic, not a law). Sort descending, show cumulative percent. Rank by the stem’s unit (count vs dollars vs days). Do not Pareto leading-checkbox theater.... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Totals 80 events. First two bars 40 and 25. Cumulative after two bars?", [
    "40 percent.",
    "81.25 percent (65/80).",
    "80 percent by definition of two bars.",
    "25 percent.",
  ], 1, "FORM: cumulative = running total / grand total.", "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Pareto ranks categories by frequency or by loss (80/20 is a heuristic, not a law). Sort descending, show cumulative percent. Rank by the stem’s unit (count vs dollars vs days). Do not Pareto leading-checkbox theater.... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Stem says rank by dollars. Analyst ranks by ticket count because counts are easier. Error?", [
    "None — count is the official Pareto unit.",
    "STEM/FORM: the unit was dollars; mixing count hides high-loss low-count events.",
    "They should have used 24.45.",
    "They should have used median count as dollars.",
  ], 1, "Honor the unit in the last sentence.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Pareto ranks categories by frequency or by loss (80/20 is a heuristic, not a law). Sort descending, show cumulative percent. Rank by the stem’s unit (count vs dollars vs days). Do not Pareto leading-checkbox theater.... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Bars are drawn unsorted: 10, 40, 5, 25. Cumulative line is then drawn left to right. Problem?", [
    "None — order is cosmetic.",
    "FORM: Pareto requires descending sort before the cumulative line means 80/20.",
    "None if colors are amber.",
    "None if RPN is overlaid.",
  ], 1, "FORM: sort descending first.", "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Pareto ranks categories by frequency or by loss (80/20 is a heuristic, not a law). Sort descending, show cumulative percent. Rank by the stem’s unit (count vs dollars vs days). Do not Pareto leading-checkbox theater.... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A Pareto of observation-card topics (PPE, housekeeping) is used to skip MoC of an expired jumper. Error?", [
    "None — cards are leading.",
    "Wrong input: checkbox theater is not causes; the jumper is the system issue.",
    "Cards replace FTA.",
    "Cards replace 1904.",
  ], 1, "TOOL/STEM: Pareto of theater is not analysis of energy.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Pareto ranks categories by frequency or by loss (80/20 is a heuristic, not a law). Sort descending, show cumulative percent. Rank by the stem’s unit (count vs dollars vs days). Do not Pareto leading-checkbox theater.... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Finance wants a Pareto of insurance premiums by unit and to fund the highest premium with a still-higher limit, not with controls. Best position?", [
    "Accept — premium Pareto is energy ranking.",
    "Reject: premiums are financing; rank loss/energy and fund controls, especially higher-order ones.",
    "Accept if 80 percent of premium is in two units.",
    "Accept if TRIR is low.",
  ], 1, "FIN: premium bars are not hierarchy.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Pareto ranks categories by frequency or by loss (80/20 is a heuristic, not a law). Sort descending, show cumulative percent. Rank by the stem’s unit (count vs dollars vs days). Do not Pareto leading-checkbox theater.... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Last sentence: cutter geometry frozen; remaining spend is a bolt-on guard or a glove campaign on the tall nick bar. Best remaining action?", [
    "Gloves — taller bar always wins.",
    "Bolt-on guard on the shear (short deadly bar) plus residual PPE.",
    "Neither until 80/20 is exact.",
    "A pizza for the nick bar.",
  ], 1, "STEM closed redesign. Remaining engineering on high energy beats the tall nick bar.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Pareto ranks categories by frequency or by loss (80/20 is a heuristic, not a law). Sort descending, show cumulative percent. Rank by the stem’s unit (count vs dollars vs days). Do not Pareto leading-checkbox theater.... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Someone computes 80/20 as P=0.8 that the next injury is in the first two bars, using that to skip the tail forever. Error?", [
    "None — Pareto is a probability model.",
    "FORM: 80/20 is a heuristic on this sample, not P(next event).",
    "They should add the bars as AND.",
    "They should use 100,000 hours.",
  ], 1, "FORM: Pareto percent is not a predictive probability.", "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Pareto ranks categories by frequency or by loss (80/20 is a heuristic, not a law). Sort descending, show cumulative percent. Rank by the stem’s unit (count vs dollars vs days). Do not Pareto leading-checkbox theater.... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Days-away Pareto vs count Pareto disagree: nicks dominate count; one fall dominates days. Stem asked days. Which funds first?", [
    "Nicks, because 80/20 of count.",
    "Fall protection / leading-edge engineering — that is the days-away head.",
    "Average the two Paretos.",
    "Premium Pareto instead.",
  ], 1, "STEM: days was the unit. HIER on the fall energy.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Pareto ranks categories by frequency or by loss (80/20 is a heuristic, not a law). Sort descending, show cumulative percent. Rank by the stem’s unit (count vs dollars vs days). Do not Pareto leading-checkbox theater.... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A death occurs in the other category. Team wants to finish the Pareto redraw before OSHA is called. Clock?", [
    "Pareto updates pause 1904.",
    "Fatality notice is 8 hours; charting is not a clock.",
    "24 hours because other is involved.",
    "7 days.",
  ], 1, "TIME: 8-hour fatality clock.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Pareto ranks categories by frequency or by loss (80/20 is a heuristic, not a law). Sort descending, show cumulative percent. Rank by the stem’s unit (count vs dollars vs days). Do not Pareto leading-checkbox theater.... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Mixing units on one axis: left bars are counts, right bars are dollars, one cumulative line. Error?", [
    "None — dual axis is always valid Pareto.",
    "FORM: one Pareto axis, one unit; make two charts rather than a mixed cumulative.",
    "UNIT — they used meters on dollars.",
    "They should have used PEL.",
  ], 1, "FORM: do not mix count and dollars on one ranked axis.", "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Pareto ranks categories by frequency or by loss (80/20 is a heuristic, not a law). Sort descending, show cumulative percent. Rank by the stem’s unit (count vs dollars vs days). Do not Pareto leading-checkbox theater.... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Vital few are “no gloves” on an isocyanate spray. Substitution of the coating is still open. Best use of the Pareto?", [
    "Buy gloves until 80 percent of actions close.",
    "Treat the tall bar as a symptom; substitute/enclose; gloves are residual.",
    "Pareto forbids substitution.",
    "Convert the bar to RPN and stop.",
  ], 1, "HIER: Pareto ranks symptoms; hierarchy still picks the control.", "HIER", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Pareto ranks categories by frequency or by loss (80/20 is a heuristic, not a law). Sort descending, show cumulative percent. Rank by the stem’s unit (count vs dollars vs days). Do not Pareto leading-checkbox theater.... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
