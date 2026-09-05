import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D6.02";
const explain = (core: string, calc: string, standards: string, distractors: string) =>
  `Core Rule: ${core} Calculation Steps: ${calc} Standards Cited: ${standards} Why Each Distractor Fails: ${distractors}`;

export const classFields: ClassFields = {
  hook:
    "A clinic reports 40 cases of dermatitis among 200 workers this year and calls the problem “prevalence.” Another report compares 12 new cases in exposed workers with 4 new cases in an unexposed group. You are the CSP. The task is to distinguish incidence from prevalence, measure association correctly, and decide whether a prevention program changed risk.",
  hookOilGas: `A camp records 15 new gastrointestinal cases among 300 workers during a 3-day outbreak, while another dashboard shows 40 workers currently sick. Operations mixes attack rate, prevalence, and incidence. You are the CSP. The decision is which measure answers which operational question and what action the data justify.`,
  hookConstruction: `A project compares respiratory symptoms in workers assigned to a demolition area with workers on the office side. Management reports âdouble the prevalenceâ and calls that causation. You are the CSP. The task is to distinguish association from causation and use the correct epidemiologic measure.`,
  rule:
    "Incidence counts new cases over a defined population/time at risk; prevalence describes existing cases at a point or over a period. Relative Risk compares risk in exposed versus unexposed groups: RR = Ie/Iu. Risk difference = Ie−Iu. Odds Ratio compares odds and is especially common in case-control designs. Attack rate is an outbreak-specific cumulative incidence measure over the outbreak period. Association is not proof of causation; assess temporality, dose-response, bias, confounding, chance, and alternative explanations. Public-health controls should target the source/transmission pathway as well as individual protection.",
  modelCaption:
    "Epidemiology flow: DEFINE POPULATION → DEFINE CASE → COUNT NEW/EXISTING → CHOOSE DENOMINATOR → CALCULATE INCIDENCE/PREVALENCE/RR/OR → CHECK BIAS/CONFUNDING → CONTROL SOURCE/TRANSMISSION → REASSESS. Side note: association ≠ causation.",
  workedCase:
    "Outbreak example: 15 new cases occur among 300 workers exposed to contaminated water during a defined 3-day period. Attack rate = 15/300 = 0.05 = 5%. In an unexposed comparison group of 200 workers, 4 become ill: 4/200 = 0.02 = 2%. Relative risk = 0.05/0.02 = 2.5. Risk difference = 0.05−0.02 = 0.03, or 3 percentage points. The data show an association in this simplified scenario; they do not by themselves prove that water exposure is the only cause. Investigate timing, other exposures, case definition, and bias before declaring causation.",
  trapsJson: traps(
    "Using all existing cases to calculate incidence.",
    "Calling RR a proof of causation without considering bias/confounding/temporality.",
    "Using the total workforce rather than the population at risk when the study design provides a narrower denominator.",
  ),
  contrastJson: contrast([
    { looksLike: "Incidence", actually: "New cases over a defined at-risk population/time" },
    { looksLike: "Prevalence", actually: "Existing cases at a point/period" },
    { looksLike: "RR", actually: "Risk in exposed divided by risk in unexposed" },
    { looksLike: "Risk difference", actually: "Absolute excess risk: exposed risk − unexposed risk" },
    { looksLike: "Association", actually: "Statistical relationship that still requires causal evaluation" },
  ]),
  mustScoreJson: mustScore(
    "Public health/epidemiology: rates, populations at risk, association vs causation.",
    "Standardize rates; watch healthy worker effects and confounders.",
    "Surveillance systems detect clusters that need investigation.",
    "Interventions evaluated with appropriate designs when possible.",
    "Communication of risk must be accurate and actionable.",
    "Workplace exposures can create community impacts.",
    "Hierarchy still applies to control inferred causes.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "raw counts compared across unequal populations", pick: "use rates" },
    { ifStem: "correlation treated as proof of cause", pick: "seek stronger causal evidence" },
    { ifStem: "cluster found", pick: "investigate systematically" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "exposure cause likely and control open", pick: "control while investigating" },
  ),

  brief: `Incidence counts new cases over a defined population/time at risk; prevalence describes existing cases at a point or over a period. Relative Risk compares risk in exposed versus unexposed groups: RR = Ie/Iu. Risk difference = IeâIu. Odds Ratio compares odds and is especially common in case-control designs. Attack rate is an outbreak-specific cumulative incidence If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Incidence counts new cases over a defined population/time at risk; prevalence describes existing cases at a point or over a period. Relative Risk compares risk in exposed versus unexposed groups: RR = Ie/Iu. Risk difference = IeâIu. Odds Ratio compares odds and is especially common in case-control designs. Attack rate is an outbreak-specific cumulative incidence measure over the outbreak period. Association is not proof of causation; assess temporality, dose-response, bias, confounding, chance, and alternative explanations. Public-health controls should target the source/transmission pathway as well as individual protection. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
A clinic reports 40 cases of dermatitis among 200 workers this year and calls the problem âprevalence.â Another report compares 12 new cases in exposed workers with 4 new cases in an unexposed group. You are the CSP. The task is to distinguish incidence from prevalence, measure association correctly, and decide whether a prevention program changed risk. Oil-and-gas skin: A camp records 15 new gastrointestinal cases among 300 workers during a 3-day outbreak, while another dashboard shows 40 workers currently sick. Operations mixes attack rate, prevalence, and incidence. You are the CSP. The decision is which measure answers which operational question and what action the data justify. Construction skin: A project compares respiratory symptoms in workers assigned to a demolition area with workers on the office side. Management reports âdouble the prevalenceâ and calls that causation. You are the CSP. The task is to distinguish association from causation and use the correct epidemiologic measure. Work the case: Outbreak example: 15 new cases occur among 300 workers exposed to contaminated water during a defined 3-day period. Attack rate = 15/300 = 0.05 = 5%. In an unexposed comparison group of 200 workers, 4 become ill: 4/200 = 0.02 = 2%. Relative risk = 0.05/0.02 = 2.5. Risk difference = 0.05â0.02 = 0.03, or 3 percentage points. The data show an association in this simplified scenario; they do not by themselves prove that water exposure is the only cause. Investigate timing, other exposures, case definition, and bias before declaring causation. Classic traps: Using all existing cases to calculate incidence.; Calling RR a proof of causation without considering bias/confounding/temporality.; Using the total workforce rather than the population at risk when the study design provides a narrower denominator.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for public health epidemiology. Verify whether a higher system or design fix is still open. Contrast labels: Incidence is actually New cases over a defined at-risk population/time; Prevalence is actually Existing cases at a point/period; RR is actually Risk in exposed divided by risk in unexposed; Risk difference is actually Absolute excess risk: exposed risk − unexposed risk; Association is actually Statistical relationship that still requires causal evaluation. If the stem shows raw counts compared across unequal populations, pick use rates. If the stem shows correlation treated as proof of cause, pick seek stronger causal evidence. If the stem shows cluster found, pick investigate systematically. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows exposure cause likely and control open, pick control while investigating. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`
  ,
  deep: `Epidemiology — which denominator answers the question sits in CSP-11 Domain 6 Occupational Health and Ergonomics. The exam tests whether you apply the rule when a package already looks complete. Core rule: Incidence counts new cases over a defined population/time at risk; prevalence describes existing cases at a point or over a period. Relative Risk compares risk in exposed versus unexposed groups: RR = Ie/Iu. Risk difference = IeâIu. Odds Ratio compares odds and is especially common in case-control designs. Attack rate is an outbreak-specific cumulative incidence measure over the outbreak period. Association is not proof of causation; assess temporality, dose-response, bias, confounding, chance, and alternative explanations. Public-health controls should target the source/transmission pathway as well as individual protection. Field context: A clinic reports 40 cases of dermatitis among 200 workers this year and calls the problem âprevalence.â Another report compares 12 new cases in exposed workers with 4 new cases in an unexposed group. You are the CSP. The task is to distinguish incidence from prevalence, measure association correctly, and decide whether a prevention program changed risk. The oil-and-gas skin shifts the same decision into production pressure: A camp records 15 new gastrointestinal cases among 300 workers during a 3-day outbreak, while another dashboard shows 40 workers currently sick. Operations mixes attack rate, prevalence, and incidence. You are the CSP. The decision is which measure answers which operational question and what action the data justify. The construction skin shifts it into schedule and trade stacking: A project compares respiratory symptoms in workers assigned to a demolition area with workers on the office side. Management reports âdouble the prevalenceâ and calls that causation. You are the CSP. The task is to distinguish association from causation and use the correct epidemiologic measure. Model caption for this class: Epidemiology flow: DEFINE POPULATION â DEFINE CASE â COUNT NEW/EXISTING â CHOOSE DENOMINATOR â CALCULATE INCIDENCE/PREVALENCE/RR/OR â CHECK BIAS/CONFUNDING â CONTROL SOURCE/TRANSMISSION â REASSESS. Side note: association â  causation. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Public health/epidemiology: rates, populations at risk, association vs causation. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Standardize rates; watch healthy worker effects and confounders. (3) Surveillance systems detect clusters that need investigation. (4) Interventions evaluated with appropriate designs when possible. (5) Communication of risk must be accurate and actionable. (6) Workplace exposures can create community impacts. (7) Hierarchy still applies to control inferred causes. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Outbreak example: 15 new cases occur among 300 workers exposed to contaminated water during a defined 3-day period. Attack rate = 15/300 = 0.05 = 5%. In an unexposed comparison group of 200 workers, 4 become ill: 4/200 = 0.02 = 2%. Relative risk = 0.05/0.02 = 2.5. Risk difference = 0.05â0.02 = 0.03, or 3 percentage points. The data show an association in this simplified scenario; they do not by themselves prove that water exposure is the only cause. Investigate timing, other exposures, case definition, and bias before declaring causation. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Using all existing cases to calculate incidence.; Calling RR a proof of causation without considering bias/confounding/temporality.; Using the total workforce rather than the population at risk when the study design provides a narrower denominator.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Incidence” is really New cases over a defined at-risk population/time; “Prevalence” is really Existing cases at a point/period; “RR” is really Risk in exposed divided by risk in unexposed; “Risk difference” is really Absolute excess risk: exposed risk − unexposed risk; “Association” is really Statistical relationship that still requires causal evaluation. Stem-if-then map: if raw counts compared across unequal populations → use rates; if correlation treated as proof of cause → seek stronger causal evidence; if cluster found → investigate systematically; if two answers work → higher hierarchy / system / design; if exposure cause likely and control open → control while investigating. Scoring favors evidence, owners, verification, and hierarchy-smart controls on public health epidemiology. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Epidemiology — which denominator answers the question?",
  cardBack:
    "Incidence = new cases in an at-risk population/time. Prevalence = existing cases. RR compares risk exposed vs unexposed. Risk difference shows absolute excess risk. Association is not automatically causation.",
  teachBackKey:
    "Pass if the answer distinguishes incidence/prevalence, can calculate a simple RR, and names at least one threat to causal inference.",
};

export const items: ClassItem[] = [
  exam(T, "Forty workers currently have dermatitis out of 200 workers. Which measure is being described?", [
    "Point prevalence-style proportion.",
    "Incidence rate of new cases only.",
    "Relative risk.",
    "Risk difference.",
  ], 0, explain(
    "Existing cases at a defined point describe prevalence rather than new-case incidence.",
    "40/200=0.20=20% currently affected.",
    "CSP-11 D6.02 epidemiology and statistics.",
    "B requires new cases/time; C requires an exposed and unexposed comparison; D also requires two risks."
  ), "FORM", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Incidence counts new cases over a defined population/time at risk; prevalence describes existing cases at a point or over a period. Relative Risk compares risk in exposed versus unexposed groups: RR = Ie/Iu. Risk diff... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A cohort records 15 new cases among 300 exposed workers during a defined outbreak. What is the attack rate?", [
    "2%.",
    "5%.",
    "20%.",
    "50%.",
  ], 1, explain(
    "Attack rate is a cumulative-incidence measure for a defined outbreak population.",
    "15/300=0.05=5%.",
    "CSP-11 D6.02 epidemiology.",
    "A divides by a different denominator; C multiplies by four; D multiplies by ten."
  ), "FORM", "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Incidence counts new cases over a defined population/time at risk; prevalence describes existing cases at a point or over a period. Relative Risk compares risk in exposed versus unexposed groups: RR = Ie/Iu. Risk diff... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Exposed risk is 5%; unexposed risk is 2%. Relative risk?", [
    "0.4.",
    "2.5.",
    "3 percentage points.",
    "7.",
  ], 1, explain(
    "Relative risk is risk in the exposed group divided by risk in the unexposed group.",
    "RR=0.05/0.02=2.5.",
    "CSP-11 D6.02 epidemiology and risk-factor analysis.",
    "A reverses the groups; C is the risk difference, not RR; D adds or otherwise miscombines the risks."
  ), "FORM", "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Incidence counts new cases over a defined population/time at risk; prevalence describes existing cases at a point or over a period. Relative Risk compares risk in exposed versus unexposed groups: RR = Ie/Iu. Risk diff... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "For the same 5% versus 2% risks, what is the absolute risk difference?", [
    "2.5.",
    "0.4.",
    "3 percentage points.",
    "7 percentage points.",
  ], 2, explain(
    "Risk difference is exposed risk minus unexposed risk.",
    "0.05−0.02=0.03=3 percentage points.",
    "CSP-11 D6.02 risk interpretation.",
    "A is RR; B is unexposed/exposed; D adds the two risks."
  ), "FORM", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Incidence counts new cases over a defined population/time at risk; prevalence describes existing cases at a point or over a period. Relative Risk compares risk in exposed versus unexposed groups: RR = Ie/Iu. Risk diff... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A case-control study is being planned. Which association measure is commonly appropriate?", [
    "Odds ratio.",
    "Attack rate only.",
    "Fire load.",
    "TWA.",
  ], 0, explain(
    "Odds ratios are commonly used for case-control designs because sampling is based on outcome status.",
    "No arithmetic; choose the measure consistent with study design.",
    "CSP-11 D6.02 epidemiology.",
    "B is an outbreak cumulative-incidence concept; C is fire protection; D is exposure averaging."
  ), "TOOL", "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Incidence counts new cases over a defined population/time at risk; prevalence describes existing cases at a point or over a period. Relative Risk compares risk in exposed versus unexposed groups: RR = Ie/Iu. Risk diff... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A study finds RR=3.2 for a solvent and dermatitis. What is the best conclusion?", [
    "The solvent is proven to be the only cause.",
    "The exposure is associated with higher observed risk in this study; assess bias, confounding, temporality, and other explanations before claiming causation.",
    "There is no association because RR is below 5.",
    "RR automatically gives the number of preventable cases.",
  ], 1, explain(
    "Relative risk quantifies association; causal inference requires more evaluation.",
    "Interpret RR=3.2 as about 3.2 times the observed risk, then evaluate study validity and causality.",
    "CSP-11 D6.02 epidemiology and public-health interpretation.",
    "A overclaims causation; C invents a threshold; D confuses relative and absolute measures."
  ), "STEM", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Incidence counts new cases over a defined population/time at risk; prevalence describes existing cases at a point or over a period. Relative Risk compares risk in exposed versus unexposed groups: RR = Ie/Iu. Risk diff... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A condition has low incidence but remains present for years. Which measure could still be high?", [
    "Prevalence.",
    "Attack rate.",
    "RR only.",
    "Risk difference only.",
  ], 0, explain(
    "Long duration can allow existing cases to accumulate, increasing prevalence even when incidence is low.",
    "Choose the measure of existing burden rather than new events.",
    "CSP-11 D6.02 epidemiology.",
    "B is a short-outbreak measure; C and D require exposure-group comparisons."
  ), "STEM", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Incidence counts new cases over a defined population/time at risk; prevalence describes existing cases at a point or over a period. Relative Risk compares risk in exposed versus unexposed groups: RR = Ie/Iu. Risk diff... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A worker survey asks about symptoms among the 100 employees currently assigned to a dusty process. What should the CSP clarify before interpreting the result?", [
    "Only the average age.",
    "Case definition, denominator, sampling method, exposure definition, and timing.",
    "Only the company logo.",
    "Only the PPE brand.",
  ], 1, explain(
    "Epidemiologic interpretation depends on who is counted, what counts as a case, exposure classification, and when data were collected.",
    "Document numerator, denominator, inclusion criteria, exposure window, and time point.",
    "CSP-11 D6.02 epidemiology and statistics.",
    "A, C, and D are incomplete metadata that do not establish the study structure."
  ), "TOOL", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Incidence counts new cases over a defined population/time at risk; prevalence describes existing cases at a point or over a period. Relative Risk compares risk in exposed versus unexposed groups: RR = Ie/Iu. Risk diff... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Why can confounding create a misleading exposure-disease association?", [
    "It always reduces risk to zero.",
    "A third factor can be related to both exposure and outcome and distort the observed relationship.",
    "It changes units from ppm to mg/m³.",
    "It is identical to prevalence.",
  ], 1, explain(
    "Confounding is an alternative explanatory pathway that can distort the apparent exposure effect.",
    "Identify a third variable associated with exposure and outcome and test whether controlling for it changes the association.",
    "CSP-11 D6.02 public-health statistics.",
    "A is false; C is a unit-conversion issue; D is a disease-burden measure, not a causal distortion."
  ), "TOOL", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Incidence counts new cases over a defined population/time at risk; prevalence describes existing cases at a point or over a period. Relative Risk compares risk in exposed versus unexposed groups: RR = Ie/Iu. Risk diff... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "If exposed risk is 10% and unexposed risk is 8%, which measure tells you the excess absolute risk?", [
    "RR=1.25.",
    "Risk difference=2 percentage points.",
    "OR=1.02 automatically.",
    "Prevalence=18%.",
  ], 1, explain(
    "Risk difference is the absolute change in risk between groups.",
    "0.10−0.08=0.02=2 percentage points; RR=1.25 is relative risk.",
    "CSP-11 D6.02 epidemiology.",
    "A gives RR, not absolute difference; C is unsupported; D adds risks and mislabels prevalence."
  ), "FORM", "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Incidence counts new cases over a defined population/time at risk; prevalence describes existing cases at a point or over a period. Relative Risk compares risk in exposed versus unexposed groups: RR = Ie/Iu. Risk diff... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A respiratory outbreak follows a process upset. Which control approach is most consistent with public-health prevention?", [
    "Only issue respirators and collect no environmental information.",
    "Define cases, identify exposure/transmission pathways, control the source/pathway, and monitor new cases.",
    "Count only severe cases and ignore mild ones.",
    "Assume temporal association proves the source.",
  ], 1, explain(
    "Public-health response combines surveillance and exposure/transmission control rather than relying on one PPE intervention.",
    "Case definition → case finding → exposure assessment → source/pathway control → follow-up surveillance.",
    "CSP-11 D6.02 public-health and epidemiology; hierarchy principles.",
    "A is PPE-only; C creates biased case ascertainment; D skips causal evaluation."
  ), "HIER", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Incidence counts new cases over a defined population/time at risk; prevalence describes existing cases at a point or over a period. Relative Risk compares risk in exposed versus unexposed groups: RR = Ie/Iu. Risk diff... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A site has 6 new cases in 300 workers during a 1-month period. Which is the simplest cumulative-incidence proportion?", [
    "0.02 or 2%.",
    "0.5%.",
    "50%.",
    "18%.",
  ], 0, explain(
    "Cumulative incidence is new cases divided by the population at risk over the defined period when the simplified problem gives that denominator.",
    "6/300=0.02=2%.",
    "CSP-11 D6.02 epidemiology arithmetic.",
    "B, C, and D use unsupported scaling or arithmetic."
  ), "FORM", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Incidence counts new cases over a defined population/time at risk; prevalence describes existing cases at a point or over a period. Relative Risk compares risk in exposed versus unexposed groups: RR = Ie/Iu. Risk diff... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
