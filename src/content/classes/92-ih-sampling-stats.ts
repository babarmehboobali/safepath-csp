import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D6.01";

export const classFields: ClassFields = {
  hook:
    "An industrial hygienist samples a worker across an 8-hour shift, then the team combines several contaminants into one additive-mixture decision. The exam trap is usually not the calculator — it is using the wrong averaging time, forgetting the 480-minute denominator, or confusing an OSHA citation decision with a simple concentration comparison.",
  hookOilGas: `On a process unit, one worker has sequential exposures to three solvents and a separate full-period sample has an SAE value. The CSP must calculate the 8-hour TWA, the mixture severity, and the OSHA confidence limits without mixing ppm, mg/mÂ³, minutes, and hours.`,
  hookConstruction: `A coating crew rotates through enclosed and open tasks over one shift. Samples are reported for separate time blocks, then multiple chemical exposures must be assessed for additive effects. The exam question asks whether the measured result establishes an overexposure or remains in the possible-overexposure zone.`,
  rule:
    "For an OSHA 8-hour TWA, use Z = Σ(Ci × Ti) / 480 when Ci and Ti are the sample result and sample time in consistent units and the OSHA method assumes zero exposure for unsampled time. For additive chemical mixtures, Em = Σ(Ci / Li); compliance with the basic mixture equation is Em ≤ 1.0. For OSHA full-period single-sample confidence assessment, severity Y = Z/PEL, UCL95 = Y + SAE, and LCL95 = Y − SAE. OSHA's current OTM states: UCL ≤ 1.0 means no violation established; LCL ≤ 1.0 and UCL > 1.0 is possible overexposure; LCL > 1.0 establishes a violation. Consecutive full-period samples can require the more exact combined-error calculation rather than simply reusing a single-sample SAE.",
  modelCaption:
    "Three-step board: (1) Shift timeline → Σ(C×T)/480. (2) Mixture → Σ(C/L). (3) Confidence → Y=Z/PEL, then UCL=Y+SAE and LCL=Y−SAE; read the result against 1.0.",
  workedCase:
    "Worked case — eight-hour solvent shift. 120 minutes at 40 ppm, 180 minutes at 20 ppm, and 180 minutes at 10 ppm, with zero exposure assumed for the remaining 0 minutes. TWA = (40×120 + 20×180 + 10×180)/480 = (4800 + 3600 + 1800)/480 = 10,200/480 = 21.25 ppm. Suppose the OSHA PEL is 20 ppm and SAE = 0.08. Severity Y = 21.25/20 = 1.0625. UCL95 = 1.0625 + 0.08 = 1.1425. LCL95 = 1.0625 − 0.08 = 0.9825. Because LCL ≤1.0 while UCL >1.0, OSHA classifies this as a possible overexposure rather than a documented violation from this single full-period result. Mixture case: Chemical A 0.40 of its limit plus B 0.35 plus C 0.20 gives Em = 0.95, below 1.0. If C is increased to 0.30 of its limit, Em = 1.05; the raw mixture severity exceeds 1.0, but an OSHA citation decision still depends on the applicable sampling/error treatment and standard.",
  trapsJson: traps(
    "Dividing the weighted shift total by elapsed sampled minutes instead of the OSHA 480-minute 8-hour denominator.",
    "Declaring a violation from Y > 1.0 without considering OSHA's SAE confidence-limit classification.",
    "Applying the mixture sum to chemicals without a justified additive-effect relationship or mixing concentrations and limits in different units.",
  ),
  contrastJson: contrast([
    { looksLike: "Σ(C×T)/480", actually: "OSHA 8-hour TWA structure for full-shift comparison" },
    { looksLike: "Em = Σ(C/L)", actually: "Additive mixture severity; ≤1.0 is the basic compliant result" },
    { looksLike: "Y = Z/PEL", actually: "Severity ratio used for OSHA confidence assessment" },
    { looksLike: "UCL/LCL", actually: "One-sided 95% confidence treatment using SAE" },
    { looksLike: "LCL > 1.0", actually: "OSHA current OTM criterion for a violation under the stated method" },
  ]),
  mustScoreJson: mustScore(
    "IH stats: SEGs, descriptive stats, confidence around estimates, decision logic.",
    "Do not over-generalize from convenience samples.",
    "UCL/confidence ideas guide whether exposure is acceptably characterized.",
    "Non-detects need method-aware handling per stem.",
    "Compare to OEL with correct averaging time.",
    "Stats do not replace hierarchy after a clear overexposure.",
    "UNIT discipline when converting results.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "one sample clears a diverse SEG", pick: "strengthen sampling strategy" },
    { ifStem: "overexposure clear", pick: "control \u2014 do not wait for prettier stats" },
    { ifStem: "wrong averaging time vs OEL type", pick: "match STEL/TWA" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "non-detects ignored carelessly", pick: "handle per method/stem rules" },
  ),

  brief: `For an OSHA 8-hour TWA, use Z = Î£(Ci Ã Ti) / 480 when Ci and Ti are the sample result and sample time in consistent units and the OSHA method assumes zero exposure for unsampled time. For additive chemical mixtures, Em = Î£(Ci / Li); compliance with the basic mixture equation is Em â¤ If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
For an OSHA 8-hour TWA, use Z = Î£(Ci Ã Ti) / 480 when Ci and Ti are the sample result and sample time in consistent units and the OSHA method assumes zero exposure for unsampled time. For additive chemical mixtures, Em = Î£(Ci / Li); compliance with the basic mixture equation is Em â¤ 1.0. For OSHA full-period single-sample confidence assessment, severity Y = Z/PEL, UCL95 = Y + SAE, and LCL95 = Y â SAE. OSHA's current OTM states: UCL â¤ 1.0 means no violation established; LCL â¤ 1.0 and UCL > 1.0 is possible overexposure; LCL > 1.0 establishes a violation. Consecutive full-period samples can require the more exact combined-error calculation rather than simply reusing a single-sample SAE. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
An industrial hygienist samples a worker across an 8-hour shift, then the team combines several contaminants into one additive-mixture decision. The exam trap is usually not the calculator â it is using the wrong averaging time, forgetting the 480-minute denominator, or confusing an OSHA citation decision with a simple concentration comparison. Oil-and-gas skin: On a process unit, one worker has sequential exposures to three solvents and a separate full-period sample has an SAE value. The CSP must calculate the 8-hour TWA, the mixture severity, and the OSHA confidence limits without mixing ppm, mg/mÂ³, minutes, and hours. Construction skin: A coating crew rotates through enclosed and open tasks over one shift. Samples are reported for separate time blocks, then multiple chemical exposures must be assessed for additive effects. The exam question asks whether the measured result establishes an overexposure or remains in the possible-overexposure zone. Work the case: Worked case â eight-hour solvent shift. 120 minutes at 40 ppm, 180 minutes at 20 ppm, and 180 minutes at 10 ppm, with zero exposure assumed for the remaining 0 minutes. TWA = (40Ã120 + 20Ã180 + 10Ã180)/480 = (4800 + 3600 + 1800)/480 = 10,200/480 = 21.25 ppm. Suppose the OSHA PEL is 20 ppm and SAE = 0.08. Severity Y = 21.25/20 = 1.0625. UCL95 = 1.0625 + 0.08 = 1.1425. LCL95 = 1.0625 â 0.08 = 0.9825. Because LCL â¤1.0 while UCL >1.0, OSHA classifies this as a possible overexposure rather than a documented violation from this single full-period result. Mixture case: Chemical A 0.40 of its limit plus B 0.35 plus C 0.20 gives Em = 0.95, below 1.0. If C is increased to 0.30 of its limit, Em = 1.05; the raw mixture severity exceeds 1.0, but an OSHA citation decision still depends on the applicable sampling/error treatment and standard. Classic traps: Dividing the weighted shift total by elapsed sampled minutes instead of the OSHA 480-minute 8-hour denominator.; Declaring a violation from Y > 1.0 without considering OSHA's SAE confidence-limit classification.; Applying the mixture sum to chemicals without a justified additive-effect relationship or mixing concentrations and limits in different units.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for ih sampling stats. Verify whether a higher system or design fix is still open. Contrast labels: Σ(C×T)/480 is actually OSHA 8-hour TWA structure for full-shift comparison; Em = Σ(C/L) is actually Additive mixture severity; ≤1.0 is the basic compliant result; Y = Z/PEL is actually Severity ratio used for OSHA confidence assessment; UCL/LCL is actually One-sided 95% confidence treatment using SAE; LCL > 1.0 is actually OSHA current OTM criterion for a violation under the stated method. If the stem shows one sample clears a diverse SEG, pick strengthen sampling strategy. If the stem shows overexposure clear, pick control \u2014 do not wait for prettier stats. If the stem shows wrong averaging time vs OEL type, pick match STEL/TWA. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows non-detects ignored carelessly, pick handle per method/stem rules. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `8-hour TWA, Em=Σ(C/L), Y=Z/PEL, UCL=Y+SAE, LCL=Y−SAE; violation when LCL>1.0 under the stated OSHA method. sits in CSP-11 Domain 6 Occupational Health and Ergonomics. The exam tests whether you apply the rule when a package already looks complete. Core rule: For an OSHA 8-hour TWA, use Z = Î£(Ci Ã Ti) / 480 when Ci and Ti are the sample result and sample time in consistent units and the OSHA method assumes zero exposure for unsampled time. For additive chemical mixtures, Em = Î£(Ci / Li); compliance with the basic mixture equation is Em â¤ 1.0. For OSHA full-period single-sample confidence assessment, severity Y = Z/PEL, UCL95 = Y + SAE, and LCL95 = Y â SAE. OSHA's current OTM states: UCL â¤ 1.0 means no violation established; LCL â¤ 1.0 and UCL > 1.0 is possible overexposure; LCL > 1.0 establishes a violation. Consecutive full-period samples can require the more exact combined-error calculation rather than simply reusing a single-sample SAE. Field context: An industrial hygienist samples a worker across an 8-hour shift, then the team combines several contaminants into one additive-mixture decision. The exam trap is usually not the calculator â it is using the wrong averaging time, forgetting the 480-minute denominator, or confusing an OSHA citation decision with a simple concentration comparison. The oil-and-gas skin shifts the same decision into production pressure: On a process unit, one worker has sequential exposures to three solvents and a separate full-period sample has an SAE value. The CSP must calculate the 8-hour TWA, the mixture severity, and the OSHA confidence limits without mixing ppm, mg/mÂ³, minutes, and hours. The construction skin shifts it into schedule and trade stacking: A coating crew rotates through enclosed and open tasks over one shift. Samples are reported for separate time blocks, then multiple chemical exposures must be assessed for additive effects. The exam question asks whether the measured result establishes an overexposure or remains in the possible-overexposure zone. Model caption for this class: Three-step board: (1) Shift timeline â Î£(CÃT)/480. (2) Mixture â Î£(C/L). (3) Confidence â Y=Z/PEL, then UCL=Y+SAE and LCL=YâSAE; read the result against 1.0. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) IH stats: SEGs, descriptive stats, confidence around estimates, decision logic. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Do not over-generalize from convenience samples. (3) UCL/confidence ideas guide whether exposure is acceptably characterized. (4) Non-detects need method-aware handling per stem. (5) Compare to OEL with correct averaging time. (6) Stats do not replace hierarchy after a clear overexposure. (7) UNIT discipline when converting results. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Worked case â eight-hour solvent shift. 120 minutes at 40 ppm, 180 minutes at 20 ppm, and 180 minutes at 10 ppm, with zero exposure assumed for the remaining 0 minutes. TWA = (40Ã120 + 20Ã180 + 10Ã180)/480 = (4800 + 3600 + 1800)/480 = 10,200/480 = 21.25 ppm. Suppose the OSHA PEL is 20 ppm and SAE = 0.08. Severity Y = 21.25/20 = 1.0625. UCL95 = 1.0625 + 0.08 = 1.1425. LCL95 = 1.0625 â 0.08 = 0.9825. Because LCL â¤1.0 while UCL >1.0, OSHA classifies this as a possible overexposure rather than a documented violation from this single full-period result. Mixture case: Chemical A 0.40 of its limit plus B 0.35 plus C 0.20 gives Em = 0.95, below 1.0. If C is increased to 0.30 of its limit, Em = 1.05; the raw mixture severity exceeds 1.0, but an OSHA citation decision still depends on the applicable sampling/error treatment and standard. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Dividing the weighted shift total by elapsed sampled minutes instead of the OSHA 480-minute 8-hour denominator.; Declaring a violation from Y > 1.0 without considering OSHA's SAE confidence-limit classification.; Applying the mixture sum to chemicals without a justified additive-effect relationship or mixing concentrations and limits in different units.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Σ(C×T)/480” is really OSHA 8-hour TWA structure for full-shift comparison; “Em = Σ(C/L)” is really Additive mixture severity; ≤1.0 is the basic compliant result; “Y = Z/PEL” is really Severity ratio used for OSHA confidence assessment; “UCL/LCL” is really One-sided 95% confidence treatment using SAE; “LCL > 1.0” is really OSHA current OTM criterion for a violation under the stated method. Stem-if-then map: if one sample clears a diverse SEG → strengthen sampling strategy; if overexposure clear → control \u2014 do not wait for prettier stats; if wrong averaging time vs OEL type → match STEL/TWA; if two answers work → higher hierarchy / system / design; if non-detects ignored carelessly → handle per method/stem rules. Scoring favors evidence, owners, verification, and hierarchy-smart controls on ih sampling stats. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront:
    "8-hour TWA, Em=Σ(C/L), Y=Z/PEL, UCL=Y+SAE, LCL=Y−SAE; violation when LCL>1.0 under the stated OSHA method.",
  cardBack:
    "OSHA TWA denominator: 480 min. Example Z=21.25, PEL=20, SAE=0.08 → Y=1.0625, UCL=1.1425, LCL=0.9825 → possible overexposure, not established violation. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the learner writes the 480-minute TWA denominator, computes Em as Σ(C/L), converts Z to severity Y, applies SAE to Y, and states that LCL>1.0 establishes a violation under the cited OSHA method.",
  formulaSlug: null,
};

export const items: ClassItem[] = [
  exam(
    T,
    "A worker is exposed to 40 ppm for 120 min, 20 ppm for 180 min, and 10 ppm for 180 min. What is the OSHA 8-hour TWA?",
    [
      "21.25 ppm.",
      "28.33 ppm using only the sampled 480 minutes incorrectly.",
      "17.00 ppm by averaging the three concentrations.",
      "10.00 ppm because the last period was lowest.",
    ],
    0,
    "Core Rule: OSHA's 8-hour TWA equation is Z=Σ(C×T)/480 minutes. Calculation Steps: 40×120=4,800; 20×180=3,600; 10×180=1,800; total=10,200; 10,200/480=21.25 ppm. Standards Cited: OSHA Technical Manual Section II Chapter 1; 29 CFR 1910.1000 Subpart Z. Why Each Distractor Fails: A = correct; B = 13,600/480 would not match the stated times and ignores proper multiplication; C = simple arithmetic mean ignores duration; D = ignores the earlier exposures.",
    "FORM",
    "Exam",
    [
      "Correct: weighted total 10,200 / 480 = 21.25 ppm.",
      "Fails: A TWA is not a simple average and the stated products do not sum to the proposed result.",
      "Fails: 40,20,10 have unequal exposure durations, so a simple average is not valid.",
      "Fails: The last concentration does not erase earlier exposure periods.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "For an OSHA 8-hour TWA, use Z = Σ(Ci × Ti) / 480 when Ci and Ti are the sample result and sample time in consistent units and the OSHA method assumes zero exposure for unsampled time. For additive chemical mixtures, E... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at a semiconductor tool install. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Why is 480 used in the OSHA 8-hour TWA equation.",
    [
      "480 is the number of minutes in 8 hours, so the weighted exposure total is normalized to an 8-hour shift.",
      "480 is the number of minutes in a 12-hour shift.",
      "480 converts ppm to mg/m³.",
      "480 is the OSHA SAE constant.",
    ],
    0,
    "Core Rule: 8 hours × 60 minutes/hour = 480 minutes. Calculation Steps: 8×60=480, then Σ(C×T)/480. Standards Cited: OSHA Technical Manual Section II Chapter 1. Why Each Distractor Fails: A = correct; B = 12 hours is 720 minutes; C = 480 does not perform a mass/volume unit conversion; D = SAE is a separate uncertainty term.",
    "UNIT",
    "Foundation",
    [
      "Correct: 8 h × 60 = 480 min.",
      "Fails: 12 h equals 720 min.",
      "Fails: No ppm↔mg/m³ conversion is created by dividing by 480.",
      "Fails: SAE is not 480; it is a separate error quantity.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "For an OSHA 8-hour TWA, use Z = Σ(Ci × Ti) / 480 when Ci and Ti are the sample result and sample time in consistent units and the OSHA method assumes zero exposure for unsampled time. For additive chemical mixtures, E... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Three solvents have C/L ratios of 0.40, 0.35, and 0.20. What is Em?",
    [
      "0.95.",
      "0.317 by averaging the three ratios.",
      "1.15 by adding the limits instead of the ratios.",
      "0.55 by adding only the first and second ratios.",
    ],
    0,
    "Core Rule: For additive effects, Em=Σ(Ci/Li). Calculation Steps: 0.40+0.35+0.20=0.95. Standards Cited: OSHA OTM mixture formula; 29 CFR 1910.1000(d)(2); ACGIH TLV mixture methodology as a health-evaluation reference. Why Each Distractor Fails: A = correct; B = the terms are summed, not averaged; C = limits are not added; D = omits a contaminant term.",
    "FORM",
    "Exam",
    [
      "Correct: 0.95.",
      "Fails: No division by the number of chemicals is part of the mixture equation.",
      "Fails: The numerator is concentration and denominator is the matched limit inside each ratio.",
      "Fails: All relevant additive components belong in the sum.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "For an OSHA 8-hour TWA, use Z = Σ(Ci × Ti) / 480 when Ci and Ti are the sample result and sample time in consistent units and the OSHA method assumes zero exposure for unsampled time. For additive chemical mixtures, E... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "An additive mixture gives Em = 1.08 before uncertainty analysis. What does the raw mixture result indicate?",
    [
      "The measured mixture severity exceeds 1.0, so the basic mixture equation indicates an over-limit condition before the applicable error treatment is considered.",
      "The mixture is automatically OSHA-citable regardless of sampling design.",
      "The mixture is compliant because 1.08 is less than 1.80.",
      "Only the largest single chemical concentration matters.",
    ],
    0,
    "Core Rule: Em>1.0 means the additive-mixture calculation exceeds the basic combined limit. Calculation Steps: 1.08−1.00=0.08 above the criterion. Standards Cited: OSHA OTM mixture equation and 29 CFR 1910.1000(d)(2); ACGIH TLV mixture approach for additive health effects. Why Each Distractor Fails: A = correct characterization of the raw Em; B = citation status may depend on the applicable sampling/SAE method and legal standard; C = compares against an invented threshold; D = ignores the additive nature of the mixture rule.",
    "STEM",
    "Expert",
    [
      "Correct: Raw Em is above 1.0.",
      "Fails: Citation determination is not established by Em alone when the applicable error/confidence method must also be applied.",
      "Fails: 1.80 is not the mixture criterion stated by the rule.",
      "Fails: Additive mixture analysis uses multiple C/L terms.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "For an OSHA 8-hour TWA, use Z = Σ(Ci × Ti) / 480 when Ci and Ti are the sample result and sample time in consistent units and the OSHA method assumes zero exposure for unsampled time. For additive chemical mixtures, E... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "A full-period single sample has Z = 21.25 ppm, PEL = 20 ppm, and SAE = 0.08. What is Y?",
    [
      "1.0625.",
      "0.0625.",
      "1.25.",
      "21.33.",
    ],
    0,
    "Core Rule: OSHA severity Y=Z/PEL. Calculation Steps: 21.25/20=1.0625. Standards Cited: OSHA Technical Manual Section II Chapter 1, severity and confidence-limit equations. Why Each Distractor Fails: A = correct; B = subtracts the PEL rather than dividing; C = adds 0.25 to 1 rather than forming the ratio; D = adds SAE to concentration instead of using it later on the severity scale.",
    "FORM",
    "Exam",
    [
      "Correct: 1.0625.",
      "Fails: Severity is a ratio, not Z−PEL.",
      "Fails: 21.25/20 is 1.0625, not 1.25.",
      "Fails: SAE is not added to the raw ppm before calculating Y under this method.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "For an OSHA 8-hour TWA, use Z = Σ(Ci × Ti) / 480 when Ci and Ti are the sample result and sample time in consistent units and the OSHA method assumes zero exposure for unsampled time. For additive chemical mixtures, E... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Using Y = 1.0625 and SAE = 0.08, what are the one-sided OSHA UCL and LCL for the cited single-sample method?",
    [
      "UCL = 1.1425 and LCL = 0.9825.",
      "UCL = 1.0625 and LCL = 0.08.",
      "UCL = 0.9825 and LCL = 1.1425.",
      "UCL = 1.08 and LCL = 0.92.",
    ],
    0,
    "Core Rule: UCL=Y+SAE and LCL=Y−SAE. Calculation Steps: 1.0625+0.08=1.1425; 1.0625−0.08=0.9825. Standards Cited: OSHA Technical Manual Section II Chapter 1, UCL/LCL equations. Why Each Distractor Fails: A = correct; B = does not calculate either limit; C = reverses upper and lower; D = subtracts/rounds the wrong values.",
    "FORM",
    "Exam",
    [
      "Correct: upper adds SAE; lower subtracts SAE.",
      "Fails: UCL/LCL are derived from Y, not simply the SAE alone.",
      "Fails: The upper limit must be >= Y and the lower <= Y.",
      "Fails: It uses rounded, mismatched values instead of the stated inputs.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "For an OSHA 8-hour TWA, use Z = Σ(Ci × Ti) / 480 when Ci and Ti are the sample result and sample time in consistent units and the OSHA method assumes zero exposure for unsampled time. For additive chemical mixtures, E... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "For UCL = 1.1425 and LCL = 0.9825, what is the OSHA classification under the cited full-period single-sample method?",
    [
      "No violation because UCL is above 1.0.",
      "Possible overexposure because LCL ≤ 1.0 and UCL > 1.0.",
      "Established violation because Y > 1.0, regardless of LCL.",
      "Action level only; OSHA never uses LCL/UCL.",
    ],
    1,
    "Core Rule: OSHA OTM classifies LCL≤1.0 and UCL>1.0 as possible overexposure under this method. Calculation Steps: 0.9825≤1.0 and 1.1425>1.0, so the result straddles the criterion. Standards Cited: OSHA Technical Manual Section II Chapter 1. Why Each Distractor Fails: A = UCL>1 does not by itself establish a violation; B = correct; C = ignores SAE/confidence limits; D = contradicts OSHA's documented method.",
    "STEM",
    "Expert",
    [
      "Fails: UCL above 1.0 alone is not enough under the cited classification.",
      "Correct: The interval straddles 1.0.",
      "Fails: Y>1 does not bypass the confidence-limit decision.",
      "Fails: OSHA explicitly documents the UCL/LCL method for the applicable sampling case.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "For an OSHA 8-hour TWA, use Z = Σ(Ci × Ti) / 480 when Ci and Ti are the sample result and sample time in consistent units and the OSHA method assumes zero exposure for unsampled time. For additive chemical mixtures, E... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "A full-period single-sample result has Y = 1.15 and SAE = 0.05. Does LCL exceed 1.0?",
    [
      "Yes. LCL = 1.15 − 0.05 = 1.10.",
      "No. LCL = 0.95 because SAE is always subtracted from 1.0.",
      "Yes. LCL = 1.20 because SAE is added to create the lower limit.",
      "No. UCL/LCL cannot exceed 1.0 by definition.",
    ],
    0,
    "Core Rule: LCL=Y−SAE. Calculation Steps: 1.15−0.05=1.10>1.0. Standards Cited: OSHA Technical Manual Section II Chapter 1. Why Each Distractor Fails: A = correct; B = incorrectly subtracts from 1.0 instead of Y; C = reverses lower/upper logic; D = confidence limits may be above 1.0 because 1.0 is the compliance comparison point, not a hard mathematical cap.",
    "FORM",
    "Exam",
    [
      "Correct: LCL=1.10.",
      "Fails: LCL is based on Y, not 1.0.",
      "Fails: Adding SAE creates UCL, not LCL.",
      "Fails: UCL/LCL are not probabilities capped at 1 in this normalized severity calculation.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "For an OSHA 8-hour TWA, use Z = Σ(Ci × Ti) / 480 when Ci and Ti are the sample result and sample time in consistent units and the OSHA method assumes zero exposure for unsampled time. For additive chemical mixtures, E... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Two consecutive samples are specifically identified in the stem, and the question asks for the more exact OSHA full-period consecutive-sampling LCL. What is the best approach?",
    [
      "Reuse the single-sample LCL = Y−SAE without change in every case.",
      "Use the OSHA consecutive-sampling confidence-limit equation that combines the sample results, times, PEL, and SAE terms.",
      "Average the two concentrations and ignore sampling time.",
      "Use the ACGIH mixture formula because two samples were taken.",
    ],
    1,
    "Core Rule: OSHA distinguishes full-period consecutive sampling from the single-sample shortcut and provides a more exact combined-error calculation. Calculation Steps: preserve each Xn and Tn, apply the stated consecutive-sampling formula, and do not collapse the data prematurely. Standards Cited: OSHA Technical Manual Section II Chapter 1, full-period consecutive-sampling Equation (9) and related sections. Why Each Distractor Fails: A = ignores the sampling-design distinction; B = correct; C = loses time weighting; D = sampling count does not turn the problem into a chemical-mixture calculation.",
    "STEM",
    "Expert",
    [
      "Fails: OSHA explicitly gives a different equation for consecutive samples in the possible-overexposure region.",
      "Correct: Use the method matching the sampling design named by the stem.",
      "Fails: Concentrations without time cannot reconstruct the 8-hour exposure.",
      "Fails: ACGIH mixture math is about multiple contaminants, not two time-separated samples of one exposure.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "For an OSHA 8-hour TWA, use Z = Σ(Ci × Ti) / 480 when Ci and Ti are the sample result and sample time in consistent units and the OSHA method assumes zero exposure for unsampled time. For additive chemical mixtures, E... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Chemical A is 12 ppm with a limit of 20 ppm. Chemical B is 15 mg/m³ with a limit of 30 mg/m³. Assuming an additive mixture and compatible units within each ratio, what is Em?",
    [
      "0.90.",
      "0.60.",
      "1.10.",
      "1.50.",
    ],
    2,
    "Core Rule: Em=Σ(C/L), and each ratio is dimensionless. Calculation Steps: A=12/20=0.60; B=15/30=0.50; Em=0.60+0.50=1.10. Standards Cited: OSHA OTM mixture equation; 29 CFR 1910.1000(d)(2); ACGIH mixture methodology. Why Each Distractor Fails: A = under-adds the terms; B = includes only Chemical A; C = correct; D = adds an unsupported 0.40 to the correct result.",
    "FORM",
    "Expert",
    [
      "Fails: 0.60+0.50=1.10, not 0.90.",
      "Fails: 0.60 is only the Chemical A ratio.",
      "Fails: ppm and mg/m³ raw values cannot simply be added.",
      "Fails: 1.10 is the calculated mixture severity; 1.50 is unsupported.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "For an OSHA 8-hour TWA, use Z = Σ(Ci × Ti) / 480 when Ci and Ti are the sample result and sample time in consistent units and the OSHA method assumes zero exposure for unsampled time. For additive chemical mixtures, E... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "A worker's TWA is 18 ppm and the OSHA PEL in the stem is 20 ppm. SAE = 0.04. What are Y, UCL, and LCL?",
    [
      "Y=0.90, UCL=0.94, LCL=0.86.",
      "Y=1.11, UCL=1.15, LCL=1.07.",
      "Y=18, UCL=18.04, LCL=17.96.",
      "Y=0.04, UCL=0.94, LCL=0.86.",
    ],
    0,
    "Core Rule: Y=Z/PEL=18/20=0.90; then UCL=0.90+0.04=0.94 and LCL=0.90−0.04=0.86. Standards Cited: OSHA Technical Manual Section II Chapter 1. Why Each Distractor Fails: A = correct; B = reverses the ratio; C = applies SAE directly to the raw ppm; D = confuses SAE with severity.",
    "FORM",
    "Exam",
    [
      "Correct: 0.90, 0.94, 0.86.",
      "Fails: 20/18 is not Z/PEL.",
      "Fails: UCL/LCL are calculated on the severity scale for this method.",
      "Fails: SAE is uncertainty, not the exposure severity itself.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "For an OSHA 8-hour TWA, use Z = Σ(Ci × Ti) / 480 when Ci and Ti are the sample result and sample time in consistent units and the OSHA method assumes zero exposure for unsampled time. For additive chemical mixtures, E... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Which statement best distinguishes an OSHA PEL from an ACGIH TLV in a CSP sampling calculation?",
    [
      "ACGIH TLV is automatically the OSHA legal limit whenever it is numerically lower.",
      "The OSHA PEL is the legal limit when applicable; an ACGIH TLV is a health-based guideline and does not become an OSHA PEL merely because it is lower.",
      "Both are always interchangeable because both are concentrations.",
      "The TLV is used as SAE.",
    ],
    1,
    "Core Rule: Legal status and health-guideline status are distinct. Calculation Steps: use the applicable OSHA PEL for an OSHA citation calculation, while ACGIH TLV can inform health-protective evaluation. Standards Cited: 29 CFR 1910.1000 Subpart Z; ACGIH TLV methodology; OSHA OTM. Why Each Distractor Fails: A = lower does not make a guideline a legal OSHA limit; B = correct; C = numerical units do not erase legal and methodological differences; D = SAE is sampling and analytical error, not a TLV.",
    "PELTLV",
    "Exam",
    [
      "Fails: Numeric size does not transfer legal authority.",
      "Correct: Keep legal PEL and advisory TLV distinct.",
      "Fails: Same units do not mean same legal or methodological role.",
      "Fails: SAE is uncertainty; TLV is an exposure guideline.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "For an OSHA 8-hour TWA, use Z = Σ(Ci × Ti) / 480 when Ci and Ti are the sample result and sample time in consistent units and the OSHA method assumes zero exposure for unsampled time. For additive chemical mixtures, E... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
