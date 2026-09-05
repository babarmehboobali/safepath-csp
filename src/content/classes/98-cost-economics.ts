import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D2.11";
const explain = (core: string, calc: string, standards: string, distractors: string) =>
  `Core Rule: ${core} Calculation Steps: ${calc} Standards Cited: ${standards} Why Each Distractor Fails: ${distractors}`;

export const classFields: ClassFields = {
  hook:
    "You can buy a guarding upgrade for $90,000 that avoids an expected $180,000 annual loss exposure, but Finance wants a five-year comparison, maintenance cost, and a discount rate. Another manager proposes insurance instead. You are the CSP. The question is how to turn a safety recommendation into a defensible economic decision without treating safety as just a price tag.",
  hookOilGas: `A drilling operation can spend $120,000 on a remote isolation system that reduces expected annual loss exposure by $70,000 and recurring maintenance by $10,000. Management wants a payback calculation and a transfer-to-insurance alternative. You are the CSP. The decision must include benefit definition, life-cycle cost, residual risk, and the limits of monetizing safety.`,
  hookConstruction: `A project can spend $60,000 on engineered edge protection or keep a manual system. The project manager wants ROI only. You are the CSP. The correct analysis includes expected loss, recurring costs, payback, and whether the control is required independent of the financial case.`,
  rule:
    "Separate compliance necessity from economic preference. For optional investments, define costs and benefits, use comparable time periods, include recurring and life-cycle costs, and state assumptions. Simple ROI = (Benefit − Cost) / Cost. Payback = Initial Cost / Annual Net Benefit. For multi-year cash flows, NPV discounts future cash flows: NPV = Σ CF_t/(1+r)^t − Initial Investment. Avoid double-counting avoided losses and do not put a fake dollar value on every life-safety judgment. Economic analysis supports choices among viable controls; it does not justify illegal or unacceptably unsafe conditions.",
  modelCaption:
    "Decision frame: REQUIRED CONTROL? → yes/no. If optional: DEFINE BENEFITS → INITIAL COST → RECURRING COST → EXPECTED LOSS CHANGE → LIFE-CYCLE CASH FLOWS → ROI/PAYBACK/NPV → SENSITIVITY → DECISION. Side note: insurance = financing/transfer, not prevention.",
  workedCase:
    "Illustrative five-year cash-flow case: engineered control costs $90,000 today. It is expected to avoid $180,000 of annual losses and has $30,000 annual operating/maintenance cost, so annual net benefit = $180,000−$30,000 = $150,000. Simple first-year ROI = (150,000−90,000)/90,000 = 0.6667 = 66.67%. Simple payback = 90,000/150,000 = 0.60 years. For a 5-year NPV at 10%, assuming $150,000 net cash flow each year and no salvage: NPV = −90,000 + 150,000/1.1 + 150,000/1.1² + 150,000/1.1³ + 150,000/1.1⁴ + 150,000/1.1⁵ ≈ −90,000 + 136,364 + 123,967 + 112,697 + 102,452 + 93,138 = $478,618. This is an illustrative financial model; real safety decisions must include compliance, uncertainty, and non-monetized risk.",
  trapsJson: traps(
    "Calling insurance a hazard control rather than risk financing/transfer.",
    "Dividing annual benefit by initial cost and calling the result payback.",
    "Double-counting avoided incidents as both an expected-loss benefit and a separate monetized safety premium without evidence.",
  ),
  contrastJson: contrast([
    { looksLike: "ROI", actually: "Return relative to investment: (Benefit−Cost)/Cost" },
    { looksLike: "Payback", actually: "Time required to recover initial cost from net benefit" },
    { looksLike: "NPV", actually: "Discounted multi-year cash-flow value" },
    { looksLike: "Insurance", actually: "Risk financing/transfer — not hazard elimination" },
    { looksLike: "Compliance control", actually: "Not optional just because ROI is low" },
  ]),
  mustScoreJson: mustScore(
    "Cost/economic analysis: lifecycle cost, ROI, cost-benefit with honest assumptions.",
    "Include avoided losses and ongoing admin costs of lower controls.",
    "Legal requirements are not optional when ROI is weak.",
    "Discounting and time horizons can change rankings \u2014 disclose assumptions.",
    "Engineering may win on lifecycle even if CAPEX is higher.",
    "Insurance premiums \u2260 hazard control benefit alone.",
    "Present residual risk with the money story.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "cheap PPE vs open engineering on lifecycle", pick: "compare lifecycle \u2014 often engineering wins" },
    { ifStem: "required control has poor ROI", pick: "fund the requirement" },
    { ifStem: "benefits asserted without measures", pick: "define measurable benefits" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "only first-cost compared", pick: "include operating/recurring costs" },
  ),

  brief: `Separate compliance necessity from economic preference. For optional investments, define costs and benefits, use comparable time periods, include recurring and life-cycle costs, and state assumptions. Simple ROI = (Benefit â Cost) / Cost. Payback = Initial Cost / Annual Net Benefit. For multi-year cash flows, NPV discounts future cash flows: NPV = Î£ CF_t/(1+r)^t â If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Separate compliance necessity from economic preference. For optional investments, define costs and benefits, use comparable time periods, include recurring and life-cycle costs, and state assumptions. Simple ROI = (Benefit â Cost) / Cost. Payback = Initial Cost / Annual Net Benefit. For multi-year cash flows, NPV discounts future cash flows: NPV = Î£ CF_t/(1+r)^t â Initial Investment. Avoid double-counting avoided losses and do not put a fake dollar value on every life-safety judgment. Economic analysis supports choices among viable controls; it does not justify illegal or unacceptably unsafe conditions. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
You can buy a guarding upgrade for $90,000 that avoids an expected $180,000 annual loss exposure, but Finance wants a five-year comparison, maintenance cost, and a discount rate. Another manager proposes insurance instead. You are the CSP. The question is how to turn a safety recommendation into a defensible economic decision without treating safety as just a price tag. Oil-and-gas skin: A drilling operation can spend $120,000 on a remote isolation system that reduces expected annual loss exposure by $70,000 and recurring maintenance by $10,000. Management wants a payback calculation and a transfer-to-insurance alternative. You are the CSP. The decision must include benefit definition, life-cycle cost, residual risk, and the limits of monetizing safety. Construction skin: A project can spend $60,000 on engineered edge protection or keep a manual system. The project manager wants ROI only. You are the CSP. The correct analysis includes expected loss, recurring costs, payback, and whether the control is required independent of the financial case. Work the case: Illustrative five-year cash-flow case: engineered control costs $90,000 today. It is expected to avoid $180,000 of annual losses and has $30,000 annual operating/maintenance cost, so annual net benefit = $180,000â$30,000 = $150,000. Simple first-year ROI = (150,000â90,000)/90,000 = 0.6667 = 66.67%. Simple payback = 90,000/150,000 = 0.60 years. For a 5-year NPV at 10%, assuming $150,000 net cash flow each year and no salvage: NPV = â90,000 + 150,000/1.1 + 150,000/1.1Â² + 150,000/1.1Â³ + 150,000/1.1â´ + 150,000/1.1âµ â â90,000 + 136,364 + 123,967 + 112,697 + 102,452 + 93,138 = $478,618. This is an illustrative financial model; real safety decisions must include compliance, uncertainty, and non-monetized risk. Classic traps: Calling insurance a hazard control rather than risk financing/transfer.; Dividing annual benefit by initial cost and calling the result payback.; Double-counting avoided incidents as both an expected-loss benefit and a separate monetized safety premium without evidence.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for cost economics. Verify whether a higher system or design fix is still open. Contrast labels: ROI is actually Return relative to investment: (Benefit−Cost)/Cost; Payback is actually Time required to recover initial cost from net benefit; NPV is actually Discounted multi-year cash-flow value; Insurance is actually Risk financing/transfer — not hazard elimination; Compliance control is actually Not optional just because ROI is low. If the stem shows cheap PPE vs open engineering on lifecycle, pick compare lifecycle \u2014 often engineering wins. If the stem shows required control has poor ROI, pick fund the requirement. If the stem shows benefits asserted without measures, pick define measurable benefits. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows only first-cost compared, pick include operating/recurring costs. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.` ,
  deep: `Cost analysis — ROI, payback, NPV, or insurance sits in CSP-11 Domain 2 Management Systems. The exam tests whether you apply the rule when a package already looks complete. Core rule: Separate compliance necessity from economic preference. For optional investments, define costs and benefits, use comparable time periods, include recurring and life-cycle costs, and state assumptions. Simple ROI = (Benefit â Cost) / Cost. Payback = Initial Cost / Annual Net Benefit. For multi-year cash flows, NPV discounts future cash flows: NPV = Î£ CF_t/(1+r)^t â Initial Investment. Avoid double-counting avoided losses and do not put a fake dollar value on every life-safety judgment. Economic analysis supports choices among viable controls; it does not justify illegal or unacceptably unsafe conditions. Field context: You can buy a guarding upgrade for $90,000 that avoids an expected $180,000 annual loss exposure, but Finance wants a five-year comparison, maintenance cost, and a discount rate. Another manager proposes insurance instead. You are the CSP. The question is how to turn a safety recommendation into a defensible economic decision without treating safety as just a price tag. The oil-and-gas skin shifts the same decision into production pressure: A drilling operation can spend $120,000 on a remote isolation system that reduces expected annual loss exposure by $70,000 and recurring maintenance by $10,000. Management wants a payback calculation and a transfer-to-insurance alternative. You are the CSP. The decision must include benefit definition, life-cycle cost, residual risk, and the limits of monetizing safety. The construction skin shifts it into schedule and trade stacking: A project can spend $60,000 on engineered edge protection or keep a manual system. The project manager wants ROI only. You are the CSP. The correct analysis includes expected loss, recurring costs, payback, and whether the control is required independent of the financial case. Model caption for this class: Decision frame: REQUIRED CONTROL? â yes/no. If optional: DEFINE BENEFITS â INITIAL COST â RECURRING COST â EXPECTED LOSS CHANGE â LIFE-CYCLE CASH FLOWS â ROI/PAYBACK/NPV â SENSITIVITY â DECISION. Side note: insurance = financing/transfer, not prevention. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Cost/economic analysis: lifecycle cost, ROI, cost-benefit with honest assumptions. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Include avoided losses and ongoing admin costs of lower controls. (3) Legal requirements are not optional when ROI is weak. (4) Discounting and time horizons can change rankings — disclose assumptions. (5) Engineering may win on lifecycle even if CAPEX is higher. (6) Insurance premiums ≠ hazard control benefit alone. (7) Present residual risk with the money story. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Illustrative five-year cash-flow case: engineered control costs $90,000 today. It is expected to avoid $180,000 of annual losses and has $30,000 annual operating/maintenance cost, so annual net benefit = $180,000â$30,000 = $150,000. Simple first-year ROI = (150,000â90,000)/90,000 = 0.6667 = 66.67%. Simple payback = 90,000/150,000 = 0.60 years. For a 5-year NPV at 10%, assuming $150,000 net cash flow each year and no salvage: NPV = â90,000 + 150,000/1.1 + 150,000/1.1Â² + 150,000/1.1Â³ + 150,000/1.1â´ + 150,000/1.1âµ â â90,000 + 136,364 + 123,967 + 112,697 + 102,452 + 93,138 = $478,618. This is an illustrative financial model; real safety decisions must include compliance, uncertainty, and non-monetized risk. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Calling insurance a hazard control rather than risk financing/transfer.; Dividing annual benefit by initial cost and calling the result payback.; Double-counting avoided incidents as both an expected-loss benefit and a separate monetized safety premium without evidence.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “ROI” is really Return relative to investment: (Benefit−Cost)/Cost; “Payback” is really Time required to recover initial cost from net benefit; “NPV” is really Discounted multi-year cash-flow value; “Insurance” is really Risk financing/transfer — not hazard elimination; “Compliance control” is really Not optional just because ROI is low. Stem-if-then map: if cheap PPE vs open engineering on lifecycle → compare lifecycle \u2014 often engineering wins; if required control has poor ROI → fund the requirement; if benefits asserted without measures → define measurable benefits; if two answers work → higher hierarchy / system / design; if only first-cost compared → include operating/recurring costs. Scoring favors evidence, owners, verification, and hierarchy-smart controls on cost economics. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Cost analysis — ROI, payback, NPV, or insurance?",
  cardBack:
    "Required controls are not optional. For viable options: define cash flows, include recurring cost, calculate the requested metric, test assumptions, and distinguish insurance/risk transfer from hazard control.",
  teachBackKey:
    "Pass if the answer distinguishes ROI/payback/NPV, includes recurring costs, and states that insurance does not replace hazard control.",
};

export const items: ClassItem[] = [
  exam(T, "A control costs $90,000 and produces $150,000 of annual net benefit. Simple payback?", [
    "0.60 years.",
    "1.67 years.",
    "60 years.",
    "$240,000.",
  ], 0, explain(
    "Payback is initial cost divided by annual net benefit.",
    "$90,000/$150,000=0.60 years.",
    "CSP-11 D2.11 economic analysis.",
    "B is benefit/cost; C misplaces the decimal; D adds values instead of calculating time."
  ), "FIN", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Separate compliance necessity from economic preference. For optional investments, define costs and benefits, use comparable time periods, include recurring and life-cycle costs, and state assumptions. Simple ROI = (Be... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Initial cost is $90,000; annual net benefit is $150,000. Simple first-year ROI?", [
    "60.0%.",
    "66.67%.",
    "166.67%.",
    "0.60%.",
  ], 1, explain(
    "Simple ROI here is (Benefit−Cost)/Cost when benefit and cost refer to the first-year comparable cash flows.",
    "(150,000−90,000)/90,000=60,000/90,000=0.6667=66.67%.",
    "CSP-11 D2.11 ROI/cost-benefit analysis.",
    "A is benefit/cost−? not the requested formula; C reports benefit/cost without subtracting cost; D is the payback-style decimal in the wrong units."
  ), "FIN", "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Separate compliance necessity from economic preference. For optional investments, define costs and benefits, use comparable time periods, include recurring and life-cycle costs, and state assumptions. Simple ROI = (Be... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A legally required machine guard has a negative ROI. What is the best CSP conclusion?", [
    "Do not install it.",
    "Install the required control; ROI does not repeal a legal or necessary safety requirement.",
    "Buy insurance instead.",
    "Average ROI with another project.",
  ], 1, explain(
    "Compliance and unacceptable risk are not optional investments that can be rejected on ROI alone.",
    "Classify the requirement first; use economics only to compare permissible implementation options.",
    "CSP-11 D2.11 plus safety/compliance principles.",
    "A makes finance the gate for compliance; C is risk transfer not control; D averages incomparable decisions."
  ), "HIER", "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Separate compliance necessity from economic preference. For optional investments, define costs and benefits, use comparable time periods, include recurring and life-cycle costs, and state assumptions. Simple ROI = (Be... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a warehouse second-shift startup. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: What is the primary difference between payback and NPV.", [
    "Payback is discounted value; NPV is elapsed time.",
    "Payback estimates recovery time; NPV discounts multi-period cash flows into a present value.",
    "They are identical.",
    "NPV is only for insurance.",
  ], 1, explain(
    "Payback and NPV answer different economic questions.",
    "Payback = initial investment/net benefit; NPV = discounted sum of future cash flows minus initial investment.",
    "CSP-11 D2.11 economic analysis.",
    "A reverses the concepts; C is false; D misclassifies NPV."
  ), "FORM", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Separate compliance necessity from economic preference. For optional investments, define costs and benefits, use comparable time periods, include recurring and life-cycle costs, and state assumptions. Simple ROI = (Be... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A control has a $50,000 purchase cost and $10,000 annual maintenance. Which cost is missing if a manager computes benefit only against $50,000?", [
    "No missing cost.",
    "Recurring life-cycle cost.",
    "The employee's blood pressure.",
    "The fire rating only.",
  ], 1, explain(
    "Life-cycle analysis should include relevant recurring operating and maintenance costs.",
    "Include purchase/installation plus the stated annual maintenance in the cash-flow model.",
    "CSP-11 D2.11 budgeting and life-cycle economic reasoning.",
    "A ignores recurring cost; C is unrelated; D may matter technically but is not the omitted economic item given."
  ), "FIN", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Separate compliance necessity from economic preference. For optional investments, define costs and benefits, use comparable time periods, include recurring and life-cycle costs, and state assumptions. Simple ROI = (Be... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A site buys insurance instead of an engineered containment upgrade. Which description is accurate?", [
    "Insurance eliminates the hazard.",
    "Insurance is risk financing/transfer and does not substitute for hazard control.",
    "Insurance is an engineering control.",
    "Insurance lowers concentration.",
  ], 1, explain(
    "Risk transfer changes financial consequences; it does not physically remove or control the hazard.",
    "Classify the treatment as financing/transfer rather than prevention or protection.",
    "CSP-11 D3.03 financial risk mitigation; D2.11 economics.",
    "A, C, and D assign a physical hazard-control function to a financial instrument."
  ), "FIN", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Separate compliance necessity from economic preference. For optional investments, define costs and benefits, use comparable time periods, include recurring and life-cycle costs, and state assumptions. Simple ROI = (Be... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Five-year NPV at 10% uses $150,000 net benefit each year and a $90,000 initial cost. Which setup is correct?", [
    "−90,000 + 150,000/(1.10)^1 + ... + 150,000/(1.10)^5.",
    "90,000 + 150,000×5 with no time value.",
    "−90,000 + 150,000×10.",
    "150,000/90,000 only.",
  ], 0, explain(
    "NPV discounts each future cash flow back to the present and subtracts the initial investment.",
    "NPV = −90,000 + Σ[150,000/(1.10)^t], t=1..5.",
    "CSP-11 D2.11 discounted cash-flow analysis.",
    "B ignores discounting; C misuses the 10% rate; D is a simple ratio, not NPV."
  ), "FORM", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Separate compliance necessity from economic preference. For optional investments, define costs and benefits, use comparable time periods, include recurring and life-cycle costs, and state assumptions. Simple ROI = (Be... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Expected avoided loss is $200,000/year, but a manager also adds the same $200,000 as a separate guaranteed productivity benefit without evidence. Problem?", [
    "None; double counting is conservative.",
    "Potential double counting and unsupported benefit assumption.",
    "ROI always requires two benefits.",
    "The control becomes free.",
  ], 1, explain(
    "Benefits should be evidence-based and not counted twice under different labels.",
    "Trace each benefit source and exclude duplicates or unsupported assumptions.",
    "CSP-11 D2.11 cost/benefit analysis.",
    "A confuses double counting with conservatism; C is false; D does not follow from the assumption."
  ), "FIN", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Separate compliance necessity from economic preference. For optional investments, define costs and benefits, use comparable time periods, include recurring and life-cycle costs, and state assumptions. Simple ROI = (Be... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A safety project has uncertain avoided-loss benefits. Which method best tests model robustness?", [
    "Hide the uncertainty.",
    "Sensitivity analysis on key assumptions.",
    "Round every number to zero.",
    "Use the largest possible benefit only.",
  ], 1, explain(
    "Sensitivity analysis shows how conclusions change when important assumptions change.",
    "Recalculate ROI/NPV using plausible high/low benefit, cost, or maintenance assumptions.",
    "CSP-11 D2.11 economic analysis and risk-informed decision making.",
    "A suppresses uncertainty; C destroys information; D biases the decision upward."
  ), "FORM", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Separate compliance necessity from economic preference. For optional investments, define costs and benefits, use comparable time periods, include recurring and life-cycle costs, and state assumptions. Simple ROI = (Be... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A control costs $120,000 and reduces annual operating cost by $30,000. Ignoring other benefits, simple payback from this saving alone?", [
    "0.25 years.",
    "4 years.",
    "30 years.",
    "150,000 years.",
  ], 1, explain(
    "Payback uses initial cost divided by annual net benefit.",
    "$120,000/$30,000=4 years.",
    "CSP-11 D2.11 payback analysis.",
    "A inverts the relationship; C multiplies; D adds cost and benefit."
  ), "FIN", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Separate compliance necessity from economic preference. For optional investments, define costs and benefits, use comparable time periods, include recurring and life-cycle costs, and state assumptions. Simple ROI = (Be... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Which choice best describes procurement's role in a safety investment?", [
    "Procurement can remove the legal requirement if the bid is expensive.",
    "Procurement helps source and compare compliant options; safety requirements and performance criteria should be defined before price-only selection.",
    "Lowest price always wins.",
    "Safety should enter only after purchase.",
  ], 1, explain(
    "Procurement is a resource-allocation process within defined technical and compliance requirements.",
    "Define performance/safety criteria → obtain comparable bids → evaluate total cost and suitability → select and verify.",
    "CSP-11 D2.11 procurement/budgeting principles.",
    "A invents procurement authority over compliance; C ignores technical suitability; D puts requirements too late."
  ), "HIER", "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Separate compliance necessity from economic preference. For optional investments, define costs and benefits, use comparable time periods, include recurring and life-cycle costs, and state assumptions. Simple ROI = (Be... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A project has NPV +$480,000 but leaves a required hazard control incomplete. Is the positive NPV enough to approve the project?", [
    "Yes, positive NPV always overrides safety.",
    "No. The project must first satisfy required safety/risk controls; economic results can compare acceptable options.",
    "Yes, if insurance covers the hazard.",
    "Yes, if the payback is under one year.",
  ], 1, explain(
    "Economic attractiveness does not override required hazard controls or unacceptable risk.",
    "Check compliance and risk acceptability first, then use NPV/ROI to compare viable alternatives.",
    "CSP-11 D2.11 and D3 risk-management principles.",
    "A makes NPV absolute; C confuses transfer with control; D treats payback as a safety waiver."
  ), "HIER", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Separate compliance necessity from economic preference. For optional investments, define costs and benefits, use comparable time periods, include recurring and life-cycle costs, and state assumptions. Simple ROI = (Be... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
