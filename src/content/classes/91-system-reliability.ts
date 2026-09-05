import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D2.06";

/**
 * Advanced Sciences and Math — System Reliability
 *
 * The worked examples intentionally use direct reliability equations rather
 * than pretending that the handbook itself supplies field failure data for
 * mechanical equipment. MIL-HDBK-217F is primarily an electronic/electrical
 * reliability-prediction framework; CCPS data/methods are the better fit for
 * process-equipment reliability inputs.
 */
export const classFields: ClassFields = {
  hook:
    "A critical exhaust train has two fans arranged as active parallel redundancy, followed by a flame arrestor and a pressure switch in series. The exam trap is to add reliabilities, multiply the wrong branches, or confuse MTBF with failure rate. Your CSP move is to identify the block logic first, then calculate with disciplined rounding.",
  hookOilGas: `A gas-handling package has two critical exhaust fans in active parallel redundancy, followed by a flame arrestor and pressure switch. One fan can carry the required flow while the other remains available. The CSP question is whether the train meets the required mission reliability and which arithmetic error most changes the answer.`,
  hookConstruction: `A paint-process exhaust train uses two duty-capable fans in active parallel redundancy, then a flame arrestor and pressure switch in series. The field team has mixed up MTBF, lambda, and block reliability. Your job is to identify the logic and calculate the mission reliability correctly.`,
  rule:
    "Series blocks all must work, so Rs = R1 × R2 × … × Rn. Independent active parallel redundancy succeeds if at least one branch works: Rp = 1 − [(1 − R1)(1 − R2)…]. For a constant failure rate, lambda = 1/MTBF and R(t) = exp(−lambda × t). Keep units consistent: if MTBF is hours, lambda is failures/hour and t is hours. Do not add reliabilities in series, do not add MTBFs to get system reliability, and do not treat a redundant pair as if both fans must operate.",
  modelCaption:
    "Block diagram: [Fan A || Fan B] → [Flame arrestor] → [Pressure switch]. Parallel block: 1 − (1−R1)(1−R2). Series train: multiply the redundant-block reliability by each downstream series block.",
  workedCase:
    "Worked example — 500-hour mission. Fan A MTBF = 25,000 h, Fan B MTBF = 16,667 h, flame arrestor MTBF = 50,000 h, pressure switch MTBF = 33,333 h. Step 1: lambdaA = 1/25,000 = 0.00004000 h⁻¹; lambdaB = 1/16,667 ≈ 0.00006000 h⁻¹; lambdaF = 1/50,000 = 0.00002000 h⁻¹; lambdaS = 1/33,333 ≈ 0.00003000 h⁻¹. Step 2 at t=500 h: RA = e^(−0.00004×500) = e^(−0.020000) ≈ 0.98019867; RB = e^(−0.030000) ≈ 0.97044553; RF = e^(−0.010000) ≈ 0.99004983; RS = e^(−0.015000) ≈ 0.98511194. Step 3 parallel fan block: Rp = 1 − [(1−0.98019867)(1−0.97044553)] = 1 − [(0.01980133)(0.02955447)] = 1 − 0.00058522 = 0.99941478. Step 4 series train: Rtrain = 0.99941478 × 0.99004983 × 0.98511194. First 0.99941478 × 0.99004983 ≈ 0.98947044. Then 0.98947044 × 0.98511194 ≈ 0.97473914. Final 500-hour mission reliability ≈ 97.47%. If the exam gives a required reliability of 0.97, the train clears it; if the requirement is 0.98, it does not.",
  trapsJson: traps(
    "Adding branch reliabilities in a parallel bank without capping at 1.0.",
    "Multiplying the two fan reliabilities as though both fans must work for the train to succeed.",
    "Using MTBF directly as lambda, or using months/years for t when lambda is in failures/hour.",
  ),
  contrastJson: contrast([
    { looksLike: "Series", actually: "Every block must survive → multiply reliabilities" },
    { looksLike: "Active parallel", actually: "At least one independent branch works → 1 − product of branch failure probabilities" },
    { looksLike: "MTBF", actually: "Mean time between failures; under the constant-rate exponential model, lambda = 1/MTBF" },
    { looksLike: "lambda", actually: "Failure rate, with inverse-time units" },
    { looksLike: "R(t)", actually: "Mission reliability for constant failure rate = exp(−lambda t)" },
  ]),
  mustScoreJson: mustScore(
    "Reliability: availability, failure rates, redundancy, and common-cause failures.",
    "Series systems fail if any critical element fails; parallel improves availability if independent.",
    "Proof tests and MTBF/MTTR concepts appear \u2014 read definitions carefully.",
    "Independence assumptions fail with shared utilities/humans.",
    "Design redundancy for critical safety functions.",
    "Maintenance quality drives achieved reliability.",
    "Hierarchy: reduce demand on weak components by eliminating hazards.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "shared utility feeds both redundant trains", pick: "treat as common-cause \u2014 not fully independent" },
    { ifStem: "proof test overdue", pick: "restore proof testing" },
    { ifStem: "series safety chain", pick: "any link failure fails the function" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "hazard can be eliminated", pick: "prefer elimination over more redundancy alone" },
  ),

  brief: `Series blocks all must work, so Rs = R1 Ã R2 Ã â¦ Ã Rn. Independent active parallel redundancy succeeds if at least one branch works: Rp = 1 â [(1 â R1)(1 â R2)â¦]. For a constant failure rate, lambda = 1/MTBF and R(t) = exp(âlambda Ã t). Keep units consistent: if MTBF is If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Series blocks all must work, so Rs = R1 Ã R2 Ã â¦ Ã Rn. Independent active parallel redundancy succeeds if at least one branch works: Rp = 1 â [(1 â R1)(1 â R2)â¦]. For a constant failure rate, lambda = 1/MTBF and R(t) = exp(âlambda Ã t). Keep units consistent: if MTBF is hours, lambda is failures/hour and t is hours. Do not add reliabilities in series, do not add MTBFs to get system reliability, and do not treat a redundant pair as if both fans must operate. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
A critical exhaust train has two fans arranged as active parallel redundancy, followed by a flame arrestor and a pressure switch in series. The exam trap is to add reliabilities, multiply the wrong branches, or confuse MTBF with failure rate. Your CSP move is to identify the block logic first, then calculate with disciplined rounding. Oil-and-gas skin: A gas-handling package has two critical exhaust fans in active parallel redundancy, followed by a flame arrestor and pressure switch. One fan can carry the required flow while the other remains available. The CSP question is whether the train meets the required mission reliability and which arithmetic error most changes the answer. Construction skin: A paint-process exhaust train uses two duty-capable fans in active parallel redundancy, then a flame arrestor and pressure switch in series. The field team has mixed up MTBF, lambda, and block reliability. Your job is to identify the logic and calculate the mission reliability correctly. Work the case: Worked example â 500-hour mission. Fan A MTBF = 25,000 h, Fan B MTBF = 16,667 h, flame arrestor MTBF = 50,000 h, pressure switch MTBF = 33,333 h. Step 1: lambdaA = 1/25,000 = 0.00004000 hâ»Â¹; lambdaB = 1/16,667 â 0.00006000 hâ»Â¹; lambdaF = 1/50,000 = 0.00002000 hâ»Â¹; lambdaS = 1/33,333 â 0.00003000 hâ»Â¹. Step 2 at t=500 h: RA = e^(â0.00004Ã500) = e^(â0.020000) â 0.98019867; RB = e^(â0.030000) â 0.97044553; RF = e^(â0.010000) â 0.99004983; RS = e^(â0.015000) â 0.98511194. Step 3 parallel fan block: Rp = 1 â [(1â0.98019867)(1â0.97044553)] = 1 â [(0.01980133)(0.02955447)] = 1 â 0.00058522 = 0.99941478. Step 4 series train: Rtrain = 0.99941478 Ã 0.99004983 Ã 0.98511194. First 0.99941478 Ã 0.99004983 â 0.98947044. Then 0.98947044 Ã 0.98511194 â 0.97473914. Final 500-hour mission reliability â 97.47%. If the exam gives a required reliability of 0.97, the train clears it; if the requirement is 0.98, it does not. Classic traps: Adding branch reliabilities in a parallel bank without capping at 1.0.; Multiplying the two fan reliabilities as though both fans must work for the train to succeed.; Using MTBF directly as lambda, or using months/years for t when lambda is in failures/hour.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for system reliability. Verify whether a higher system or design fix is still open. Contrast labels: Series is actually Every block must survive → multiply reliabilities; Active parallel is actually At least one independent branch works → 1 − product of branch failure probabilities; MTBF is actually Mean time between failures; under the constant-rate exponential model, lambda = 1/MTBF; lambda is actually Failure rate, with inverse-time units; R(t) is actually Mission reliability for constant failure rate = exp(−lambda t). If the stem shows shared utility feeds both redundant trains, pick treat as common-cause \u2014 not fully independent. If the stem shows proof test overdue, pick restore proof testing. If the stem shows series safety chain, pick any link failure fails the function. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows hazard can be eliminated, pick prefer elimination over more redundancy alone. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Series vs active parallel reliability; lambda = 1/MTBF; R(t)=e^(−lambda t). sits in CSP-11 Domain 2 Management Systems. The exam tests whether you apply the rule when a package already looks complete. Core rule: Series blocks all must work, so Rs = R1 Ã R2 Ã â¦ Ã Rn. Independent active parallel redundancy succeeds if at least one branch works: Rp = 1 â [(1 â R1)(1 â R2)â¦]. For a constant failure rate, lambda = 1/MTBF and R(t) = exp(âlambda Ã t). Keep units consistent: if MTBF is hours, lambda is failures/hour and t is hours. Do not add reliabilities in series, do not add MTBFs to get system reliability, and do not treat a redundant pair as if both fans must operate. Field context: A critical exhaust train has two fans arranged as active parallel redundancy, followed by a flame arrestor and a pressure switch in series. The exam trap is to add reliabilities, multiply the wrong branches, or confuse MTBF with failure rate. Your CSP move is to identify the block logic first, then calculate with disciplined rounding. The oil-and-gas skin shifts the same decision into production pressure: A gas-handling package has two critical exhaust fans in active parallel redundancy, followed by a flame arrestor and pressure switch. One fan can carry the required flow while the other remains available. The CSP question is whether the train meets the required mission reliability and which arithmetic error most changes the answer. The construction skin shifts it into schedule and trade stacking: A paint-process exhaust train uses two duty-capable fans in active parallel redundancy, then a flame arrestor and pressure switch in series. The field team has mixed up MTBF, lambda, and block reliability. Your job is to identify the logic and calculate the mission reliability correctly. Model caption for this class: Block diagram: [Fan A || Fan B] â [Flame arrestor] â [Pressure switch]. Parallel block: 1 â (1âR1)(1âR2). Series train: multiply the redundant-block reliability by each downstream series block. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Reliability: availability, failure rates, redundancy, and common-cause failures. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Series systems fail if any critical element fails; parallel improves availability if independent. (3) Proof tests and MTBF/MTTR concepts appear — read definitions carefully. (4) Independence assumptions fail with shared utilities/humans. (5) Design redundancy for critical safety functions. (6) Maintenance quality drives achieved reliability. (7) Hierarchy: reduce demand on weak components by eliminating hazards. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Worked example â 500-hour mission. Fan A MTBF = 25,000 h, Fan B MTBF = 16,667 h, flame arrestor MTBF = 50,000 h, pressure switch MTBF = 33,333 h. Step 1: lambdaA = 1/25,000 = 0.00004000 hâ»Â¹; lambdaB = 1/16,667 â 0.00006000 hâ»Â¹; lambdaF = 1/50,000 = 0.00002000 hâ»Â¹; lambdaS = 1/33,333 â 0.00003000 hâ»Â¹. Step 2 at t=500 h: RA = e^(â0.00004Ã500) = e^(â0.020000) â 0.98019867; RB = e^(â0.030000) â 0.97044553; RF = e^(â0.010000) â 0.99004983; RS = e^(â0.015000) â 0.98511194. Step 3 parallel fan block: Rp = 1 â [(1â0.98019867)(1â0.97044553)] = 1 â [(0.01980133)(0.02955447)] = 1 â 0.00058522 = 0.99941478. Step 4 series train: Rtrain = 0.99941478 Ã 0.99004983 Ã 0.98511194. First 0.99941478 Ã 0.99004983 â 0.98947044. Then 0.98947044 Ã 0.98511194 â 0.97473914. Final 500-hour mission reliability â 97.47%. If the exam gives a required reliability of 0.97, the train clears it; if the requirement is 0.98, it does not. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Adding branch reliabilities in a parallel bank without capping at 1.0.; Multiplying the two fan reliabilities as though both fans must work for the train to succeed.; Using MTBF directly as lambda, or using months/years for t when lambda is in failures/hour.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Series” is really Every block must survive → multiply reliabilities; “Active parallel” is really At least one independent branch works → 1 − product of branch failure probabilities; “MTBF” is really Mean time between failures; under the constant-rate exponential model, lambda = 1/MTBF; “lambda” is really Failure rate, with inverse-time units; “R(t)” is really Mission reliability for constant failure rate = exp(−lambda t). Stem-if-then map: if shared utility feeds both redundant trains → treat as common-cause \u2014 not fully independent; if proof test overdue → restore proof testing; if series safety chain → any link failure fails the function; if two answers work → higher hierarchy / system / design; if hazard can be eliminated → prefer elimination over more redundancy alone. Scoring favors evidence, owners, verification, and hierarchy-smart controls on system reliability. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront:
    "Series vs active parallel reliability; lambda = 1/MTBF; R(t)=e^(−lambda t).",
  cardBack:
    "Series: multiply all required block reliabilities. Active parallel: 1 − product of branch failure probabilities. Example 25,000 h MTBF → lambda 0.00004 h⁻¹. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the learner can state the series and active-parallel equations, convert MTBF to lambda with inverse-time units, and calculate R(t)=e^(−lambda t) without confusing reliability, probability of failure, and MTBF.",
  formulaSlug: null,
};

export const items: ClassItem[] = [
  exam(
    T,
    "A series train has R1 = 0.98, R2 = 0.97, and R3 = 0.99. What is the train reliability?",
    [
      "0.9800 because the strongest block controls the train.",
      "0.9411 because 0.98 × 0.97 × 0.99 = 0.941094 ≈ 0.9411.",
      "0.9994 because the three reliabilities are independent.",
      "2.94 because reliabilities are added in series.",
    ],
    1,
    "Core Rule: Series means every block must work, so multiply all block reliabilities. Calculation Steps: 0.98 × 0.97 = 0.9506; 0.9506 × 0.99 = 0.941094 → 0.9411. Standards Cited: ANSI/ASSP Z10 risk-management framework; CCPS CPQRA for quantitative treatment of probability/failure information. Why Each Distractor Fails: A = incorrectly keeps only the first block; B = correct because it multiplies all required blocks; C = uses a parallel-style intuition but no active redundancy exists; D = adds reliabilities, which is not the series reliability rule.",
    "FORM",
    "Exam",
    [
      "Fails: Series does not equal the lowest or first reliability; all required blocks multiply.",
      "Correct: Required series blocks multiply.",
      "Fails: Independence does not turn a series chain into a parallel success logic.",
      "Fails: Reliability values are probabilities in this range, not additive capacities.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Series blocks all must work, so Rs = R1 × R2 × … × Rn. Independent active parallel redundancy succeeds if at least one branch works: Rp = 1 − [(1 − R1)(1 − R2)…]. For a constant failure rate, lambda = 1/MTBF and R(t)... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Two independent active parallel fans have R1 = 0.90 and R2 = 0.80. At least one fan is sufficient. What is Rp?",
    [
      "0.72.",
      "0.98.",
      "1.70.",
      "0.18.",
    ],
    1,
    "Core Rule: Active parallel succeeds when at least one independent branch succeeds: Rp = 1 − (1−R1)(1−R2). Calculation Steps: failures are 0.10 and 0.20; joint failure = 0.10 × 0.20 = 0.020; Rp = 1−0.020 = 0.980. Standards Cited: CCPS CPQRA for probability-based reliability/risk analysis; ANSI/ASSP Z10 for system-level risk reduction thinking. Why Each Distractor Fails: A = multiplies reliabilities as if both fans are required; B = correct; C = adds reliabilities and produces an impossible probability >1; D = multiplies/combines failure terms incorrectly and reports joint failure rather than success.",
    "FORM",
    "Exam",
    [
      "Fails: 0.90×0.80 is the probability both fans work, not the probability at least one works.",
      "Correct: One minus the joint failure probability.",
      "Fails: Reliability cannot exceed 1.0.",
      "Fails: 0.18 is not the correct joint-failure probability or redundant-system success probability.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Series blocks all must work, so Rs = R1 × R2 × … × Rn. Independent active parallel redundancy succeeds if at least one branch works: Rp = 1 − [(1 − R1)(1 − R2)…]. For a constant failure rate, lambda = 1/MTBF and R(t)... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "A device has MTBF = 25,000 hours under a constant failure-rate model. What is lambda in failures/hour?",
    [
      "25,000 failures/hour.",
      "0.00004 failures/hour.",
      "0.04 failures/hour.",
      "4 failures/hour.",
    ],
    1,
    "Core Rule: lambda = 1/MTBF when the constant failure-rate model is applicable. Calculation Steps: 1 ÷ 25,000 = 0.00004 h⁻¹ = 4.0×10⁻⁵ failures/hour. Standards Cited: MIL-HDBK-217F is a reliability-prediction reference for applicable equipment/components; the exam equation itself is the constant-rate exponential reliability model used in quantitative reliability work. Why Each Distractor Fails: A = reverses the equation; B = correct; C = misses three decimal places; D = misses four decimal places.",
    "UNIT",
    "Exam",
    [
      "Fails: MTBF is not itself a failure rate; the reciprocal is required.",
      "Correct: 1/25,000 h = 0.00004 h⁻¹.",
      "Fails: Decimal-place error by a factor of 1,000.",
      "Fails: Decimal-place error by a factor of 100,000.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Series blocks all must work, so Rs = R1 × R2 × … × Rn. Independent active parallel redundancy succeeds if at least one branch works: Rp = 1 − [(1 − R1)(1 − R2)…]. For a constant failure rate, lambda = 1/MTBF and R(t)... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at an offshore fabrication night shift. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Using lambda = 0.00004 h⁻¹, what is R(t) at t = 500 h.",
    [
      "0.0200.",
      "0.9600.",
      "0.9802.",
      "20.0.",
    ],
    2,
    "Core Rule: R(t) = exp(−lambda t). Calculation Steps: lambda×t = 0.00004×500 = 0.020000; R=e^(−0.020000)=0.98019867 → 0.9802. Standards Cited: MIL-HDBK-217F reliability-prediction context; CCPS CPQRA for quantitative probability use. Why Each Distractor Fails: A = reports lambda×t rather than reliability; B = linear approximation 1−lambda t without recognizing the requested exponential expression; C = correct exponential result; D = reverses the exponent/sign/scale and is impossible as a probability.",
    "FORM",
    "Exam",
    [
      "Fails: 0.0200 is the dimensionless lambda×time term, not the final reliability.",
      "Fails: 1−lambda t is only a rough approximation for small values; the stem explicitly calls for R(t)=exp(−lambda t).",
      "Correct: e^(−0.02) ≈ 0.9802.",
      "Fails: Reliability is bounded by 0 and 1 and should decrease as t increases.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Series blocks all must work, so Rs = R1 × R2 × … × Rn. Independent active parallel redundancy succeeds if at least one branch works: Rp = 1 − [(1 − R1)(1 − R2)…]. For a constant failure rate, lambda = 1/MTBF and R(t)... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Dual fans have R1 = 0.98 and R2 = 0.97. The flame arrestor has R = 0.99 and the pressure switch has R = 0.98. Both fans are capable of carrying the required exhaust duty. What is the full train reliability?",
    [
      "0.9411 because both fans are multiplied as if they were series blocks.",
      "0.9696 after calculating the redundant fan block, then multiplying the flame arrestor and pressure-switch reliabilities.",
      "0.9994 because only the redundant fan bank matters.",
      "0.9500 because the downstream devices are averaged with the fan bank.",
    ],
    1,
    "Core Rule: First collapse the active parallel fan block, then place that result in series with the flame arrestor and pressure switch. Calculation Steps: Rp=1−(0.02×0.03)=1−0.0006=0.9994. Then 0.9994×0.99=0.989406; 0.989406×0.98=0.96961788 → 0.9696. Standards Cited: CCPS CPQRA reliability-block reasoning; ANSI/ASSP Z10 system-level risk control. Why Each Distractor Fails: A = multiplies the fan branches as series; B = correct; C = stops after the parallel block and omits required downstream series blocks; D = averages unrelated reliabilities instead of applying block logic.",
    "FORM",
    "Expert",
    [
      "Fails: It treats both redundant fans as required simultaneously.",
      "Correct: 0.9994×0.99×0.98=0.96961788≈0.9696.",
      "Fails: 0.9994 is only the fan-bank reliability before series devices.",
      "Fails: No averaging operation belongs in the series reliability equation.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Series blocks all must work, so Rs = R1 × R2 × … × Rn. Independent active parallel redundancy succeeds if at least one branch works: Rp = 1 − [(1 − R1)(1 − R2)…]. For a constant failure rate, lambda = 1/MTBF and R(t)... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "The preceding item is recalculated correctly as Rp = 0.9994, flame arrestor = 0.99, pressure switch = 0.98. What is the final reliability to four decimals?",
    [
      "0.9696.",
      "0.9700.",
      "0.9994.",
      "0.9494.",
    ],
    0,
    "Core Rule: The redundant fan bank is one series block after it is collapsed. Calculation Steps: 0.9994×0.99=0.989406; 0.989406×0.98=0.96961788; four-decimal result = 0.9696. Standards Cited: CCPS CPQRA; ANSI/ASSP Z10 system-level risk management. Why Each Distractor Fails: A = correct rounded result; B = truncates/rounds too loosely and does not show the calculated precision; C = stops at the parallel block and omits required series devices; D = mixes branch values instead of completing the series multiplication.",
    "FORM",
    "Expert",
    [
      "Correct: 0.96961788 → 0.9696.",
      "Fails: Four-decimal reporting should round from the full intermediate result.",
      "Fails: 0.9994 is only the redundant fan block.",
      "Fails: Arithmetic does not represent the required block logic.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Series blocks all must work, so Rs = R1 × R2 × … × Rn. Independent active parallel redundancy succeeds if at least one branch works: Rp = 1 − [(1 − R1)(1 − R2)…]. For a constant failure rate, lambda = 1/MTBF and R(t)... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "A reliability model has MTBF = 10,000 h and the mission is 1,000 h. Which pair is closest?",
    [
      "lambda = 0.0001 h⁻¹ and R(1000) ≈ 0.9048.",
      "lambda = 0.001 h⁻¹ and R(1000) ≈ 0.3679.",
      "lambda = 10,000 h⁻¹ and R(1000) > 1.",
      "lambda = 0.0001 h⁻¹ and R(1000) = 0.10 exactly.",
    ],
    0,
    "Core Rule: lambda=1/MTBF=1/10,000=0.0001 h⁻¹; R=e^(−0.0001×1000)=e^(−0.1)=0.90483742≈0.9048. Standards Cited: MIL-HDBK-217F reliability-prediction framework for applicable equipment and CCPS CPQRA for quantitative probability use. Why Each Distractor Fails: A = correct; B = reciprocal error by factor 10; C = reverses MTBF/lambda and gives impossible reliability; D = replaces the exponential result with a linear value of 0.1.",
    "UNIT",
    "Exam",
    [
      "Correct: Reciprocal MTBF and exponential mission reliability.",
      "Fails: 0.001 is 1/1,000, not 1/10,000.",
      "Fails: MTBF cannot be used as failures per hour and reliability cannot exceed 1.",
      "Fails: 0.10 is lambda×t, not e^(−lambda t).",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Series blocks all must work, so Rs = R1 × R2 × … × Rn. Independent active parallel redundancy succeeds if at least one branch works: Rp = 1 − [(1 − R1)(1 − R2)…]. For a constant failure rate, lambda = 1/MTBF and R(t)... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "A design replaces one fan with two independent active-parallel fans. Fan reliabilities are each 0.95. What is the reliability gain for that block over a single 0.95 fan?",
    [
      "No gain; the pair is still 0.95.",
      "Gain to 0.9975, which is 0.0475 absolute reliability improvement.",
      "Gain to 1.90.",
      "Gain to 0.0975 because 0.95 + 0.95 − 0.95 = 0.95.",
    ],
    1,
    "Core Rule: Rp=1−(1−0.95)(1−0.95)=1−0.0025=0.9975. Calculation Steps: 0.05×0.05=0.0025; 1−0.0025=0.9975; improvement = 0.9975−0.95=0.0475. Standards Cited: CCPS CPQRA probability/redundancy analysis; ANSI/ASSP Z10 for engineered risk reduction. Why Each Distractor Fails: A = ignores redundancy; B = correct; C = adds reliabilities and exceeds probability bounds; D = algebraically cancels the redundancy.",
    "FORM",
    "Exam",
    [
      "Fails: Redundancy changes the probability that both branches fail.",
      "Correct: 0.9975, a 4.75 percentage-point absolute improvement.",
      "Fails: Probability cannot be 1.90.",
      "Fails: The correct complement formula does not cancel the second branch.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Series blocks all must work, so Rs = R1 × R2 × … × Rn. Independent active parallel redundancy succeeds if at least one branch works: Rp = 1 − [(1 − R1)(1 − R2)…]. For a constant failure rate, lambda = 1/MTBF and R(t)... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "A common-cause failure affects both redundant fans simultaneously. The stem provides no independence assumption. What is the best CSP conclusion about the simple parallel equation?",
    [
      "Use Rp=1−(1−R1)(1−R2) without qualification because all redundancy is independent.",
      "Do not blindly apply the independent-branch formula; common-cause dependence can reduce the benefit of redundancy and requires an appropriate dependency model/data.",
      "Add R1 and R2 and divide by 2.",
      "Set Rp equal to the lower fan reliability automatically.",
    ],
    1,
    "Core Rule: The simple active-parallel complement equation assumes the required branch independence model. Calculation Steps: identify the dependency; do not assign a false independence probability; use a common-cause or dependency model if the stem supplies one. Standards Cited: CCPS CPQRA emphasizes scenario and dependency modeling; ANSI/ASSP Z10 supports system-level risk analysis and feasible risk reduction. Why Each Distractor Fails: A = ignores the stated dependence; B = correct; C = computes an average, not a reliability model; D = invents a conservative rule without justification from the stem.",
    "HIER",
    "Expert",
    [
      "Fails: Blind independence is invalid when common-cause dependence is explicitly present.",
      "Correct: Dependency must be modeled or the stem must supply a valid assumption.",
      "Fails: Averaging reliabilities is not the block-diagram equation.",
      "Fails: Selecting the lower branch has no general probabilistic basis.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Series blocks all must work, so Rs = R1 × R2 × … × Rn. Independent active parallel redundancy succeeds if at least one branch works: Rp = 1 − [(1 − R1)(1 − R2)…]. For a constant failure rate, lambda = 1/MTBF and R(t)... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "A fan has MTBF = 20,000 h. The analyst uses lambda = 20,000 h⁻¹ in R(t). What is the primary error?",
    [
      "TIME: t must be in minutes only.",
      "UNIT/FORM: lambda is the reciprocal of MTBF, so it should be 0.00005 h⁻¹, not 20,000 h⁻¹.",
      "FIN: MTBF is an insurance metric.",
      "HIER: The analyst chose an engineering control.",
    ],
    1,
    "Core Rule: lambda=1/MTBF. Calculation Steps: 1/20,000=0.00005 h⁻¹. Standards Cited: MIL-HDBK-217F reliability-prediction context; CCPS CPQRA quantitative risk methods. Why Each Distractor Fails: A = time units must match lambda but the immediate error is the reciprocal; B = correct; C = MTBF is a reliability metric, not insurance; D = hierarchy is unrelated to the arithmetic error.",
    "UNIT",
    "Exam",
    [
      "Fails: Minutes are not required; hours are correct when lambda is h⁻¹.",
      "Correct: Reciprocal conversion is the error.",
      "Fails: MTBF is not an insurance concept.",
      "Fails: Control hierarchy does not explain the wrong failure-rate arithmetic.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Series blocks all must work, so Rs = R1 × R2 × … × Rn. Independent active parallel redundancy succeeds if at least one branch works: Rp = 1 − [(1 − R1)(1 − R2)…]. For a constant failure rate, lambda = 1/MTBF and R(t)... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "A pressure switch has reliability 0.995, a flame arrestor 0.99, and a redundant fan block 0.999. Which component most limits the series train?",
    [
      "The fan block because it has the smallest failure probability.",
      "The flame arrestor because it has the lowest reliability of the three.",
      "The pressure switch because 0.995 is above 0.99.",
      "None; series reliability is the arithmetic sum.",
    ],
    1,
    "Core Rule: In a series product, lower reliability contributes more strongly to the final product. Calculation Steps: compare 0.995, 0.99, and 0.999; 0.99 is lowest, so it is the largest individual reliability penalty among the three. Standards Cited: CCPS CPQRA quantitative probability framework; ANSI/ASSP Z10 system risk-reduction thinking. Why Each Distractor Fails: A = confuses failure probability with limiting reliability; B = correct; C = 0.995 is higher than 0.99, so it is less limiting; D = series reliability is multiplicative, not additive.",
    "FORM",
    "Exam",
    [
      "Fails: Smallest failure probability is best; it is not the limiting low-reliability block.",
      "Correct: 0.99 is the lowest reliability.",
      "Fails: 0.995 is higher than 0.99.",
      "Fails: Series composition is multiplication.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Series blocks all must work, so Rs = R1 × R2 × … × Rn. Independent active parallel redundancy succeeds if at least one branch works: Rp = 1 − [(1 − R1)(1 − R2)…]. For a constant failure rate, lambda = 1/MTBF and R(t)... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "A reliability target is 0.97 for a 500-hour mission. The calculated train reliability is 0.9696. What is the best interpretation?",
    [
      "It exceeds the target because 0.9696 is approximately 0.97.",
      "It narrowly misses the 0.97 target; rounding should not be used to claim compliance when the unrounded result is below the criterion.",
      "It automatically passes because the difference is less than 1%.",
      "It is exactly 97.0% because four-decimal and two-decimal values are identical.",
    ],
    1,
    "Core Rule: Compare the unrounded calculated value with the stated threshold unless the stem explicitly defines a rounding convention. Calculation Steps: 0.9696 < 0.9700, so the train misses by 0.0004, or 0.04 percentage points. Standards Cited: CCPS CPQRA for quantitative risk/criterion comparison; ANSI/ASSP Z10 for risk-management decisions using defined criteria. Why Each Distractor Fails: A = visual rounding does not reverse the inequality; B = correct; C = no generic 1% tolerance exists unless stated; D = 96.96% is not exactly 97.0%.",
    "STEM",
    "Expert",
    [
      "Fails: Approximation is not enough to claim a threshold is met.",
      "Correct: 0.9696 is below 0.9700.",
      "Fails: There is no automatic 1% acceptance band in the reliability equation.",
      "Fails: 96.96% and 97.00% are different values.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Series blocks all must work, so Rs = R1 × R2 × … × Rn. Independent active parallel redundancy succeeds if at least one branch works: Rp = 1 − [(1 − R1)(1 − R2)…]. For a constant failure rate, lambda = 1/MTBF and R(t)... Verify the critical step before accepting a lower-tier control.",
    }
  ),

];
