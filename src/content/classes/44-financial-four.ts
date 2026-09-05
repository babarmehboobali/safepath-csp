import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D3.03";

export const classFields: ClassFields = {
  hook: "Finance puts two moves in one packet: raise the fire deductible from $100k to $1M and buy a $25M umbrella — and they want that packet instead of substituting the solvent. You are the CSP. The question is which two financial strategies they just named, and which one is still missing.",
  hookOilGas: `Finance puts two moves in one packet: raise the well-control deductible from $100k to $1M and buy a $25M umbrella â and they want that packet instead of reducing inventory. You are the CSP. The question is which two financial strategies they just named, and which one is still missing.`,
  hookConstruction: `Finance puts two moves in one packet: raise the OCIP deductible from $100k to $1M and buy a $25M umbrella â and they want that packet instead of a leading-edge system. You are the CSP. The question is which two financial strategies they just named, and which one is still missing.`,
  rule: "Four financial strategies: Avoid (do not do the activity), Retain (self-insure, deductibles, captives), Share/Transfer (insurance, contracts, indemnities), Reduce (loss prevention and loss reduction via hierarchy). Two financing moves in one stem (retain + transfer) still leave Reduce/Avoid missing. ROI = (Gain − Cost)/Cost is how you price a control — it is not a fifth strategy and does not turn a policy into a guard.",
  modelCaption:
    "Four boxes: Avoid | Retain | Share/Transfer | Reduce. Avoid tagged “stop the activity.” Retain tagged “deductible/captive.” Transfer tagged “policy/indemnity.” Reduce tagged “hierarchy — prevention + reduction.” Caption: two financing boxes ≠ a control. ROI sits under Reduce as math, not as a strategy.",
  workedCase:
    "Solvent washer. Packet A: deductible $1M (retain) + $25M umbrella (transfer). Packet B: aqueous substitute (avoid/reduce the flammable activity) costing $50k with $80k avoided loss the same year. ROI_B = (80−50)/50 = 60%. Packet A does not change LEL. CSP: B is the control strategy; A may sit beside residual money after B, not instead of B. Payback of B is 50/80 = 0.63 years — do not call that “60% payback.”",
  trapsJson: traps(
    "Calling a deductible change “loss prevention.”",
    "Treating retain + transfer as complete treatment while energy is unchanged.",
    "Mixing ROI percent with payback years, or using premium savings as Gain while the hazard stays open.",
  ),
  contrastJson: contrast([
    { looksLike: "Avoid", actually: "Stop the activity / do not enter the exposure" },
    { looksLike: "Retain", actually: "Keep the money risk (deductible, captive, uninsured)" },
    { looksLike: "Share / Transfer", actually: "Insurance, hold-harmless, additional insured — money, not energy" },
    { looksLike: "Reduce", actually: "Hierarchy: prevent frequency and/or reduce severity" },
  ]),
  mustScoreJson: mustScore(
    "Risk financing strategies: avoid, retain, transfer, control/reduce (loss prevention/reduction).",
    "Avoid removes the exposure; retain keeps it intentionally.",
    "Transfer shifts financial consequence (insurance/contracts) \u2014 not the hazard itself.",
    "Control/reduce changes probability or severity through hierarchy-smart actions.",
    "Do not call insurance elimination of the hazard.",
    "Combine strategies deliberately; state residual risk.",
    "Required legal controls are not optional because transfer looks cheaper.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "insurance is offered instead of feasible engineering", pick: "control/reduce first \u2014 insurance is transfer" },
    { ifStem: "the operation can stop the exposure entirely", pick: "avoid" },
    { ifStem: "deductible strategy with no controls", pick: "retain only with eyes open \u2014 still need control" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "a contract shifts blame but hazard remains", pick: "recognize transfer of finance, not hazard" },
  ),

  brief: `Four financial strategies: Avoid (do not do the activity), Retain (self-insure, deductibles, captives), Share/Transfer (insurance, contracts, indemnities), Reduce (loss prevention and loss reduction via hierarchy). Two financing moves in one stem (retain + transfer) still leave Reduce/Avoid missing. ROI = (Gain â Cost)/Cost is how you price a control â it is not a fifth If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Four financial strategies: Avoid (do not do the activity), Retain (self-insure, deductibles, captives), Share/Transfer (insurance, contracts, indemnities), Reduce (loss prevention and loss reduction via hierarchy). Two financing moves in one stem (retain + transfer) still leave Reduce/Avoid missing. ROI = (Gain â Cost)/Cost is how you price a control â it is not a fifth strategy and does not turn a policy into a guard. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
Finance puts two moves in one packet: raise the fire deductible from $100k to $1M and buy a $25M umbrella â and they want that packet instead of substituting the solvent. You are the CSP. The question is which two financial strategies they just named, and which one is still missing. Oil-and-gas skin: Finance puts two moves in one packet: raise the well-control deductible from $100k to $1M and buy a $25M umbrella â and they want that packet instead of reducing inventory. You are the CSP. Construction skin: Finance puts two moves in one packet: raise the OCIP deductible from $100k to $1M and buy a $25M umbrella â and they want that packet instead of a leading-edge system. You are the CSP. Work the case: Solvent washer. Packet A: deductible $1M (retain) + $25M umbrella (transfer). Packet B: aqueous substitute (avoid/reduce the flammable activity) costing $50k with $80k avoided loss the same year. ROI_B = (80â50)/50 = 60%. Packet A does not change LEL. CSP: B is the control strategy; A may sit beside residual money after B, not instead of B. Payback of B is 50/80 = 0.63 years â do not call that â60% payback.â Classic traps: Calling a deductible change “loss prevention.”; Treating retain + transfer as complete treatment while energy is unchanged.; Mixing ROI percent with payback years, or using premium savings as Gain while the hazard stays open.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for financial four. Verify whether a higher system or design fix is still open. Contrast labels: Avoid is actually Stop the activity / do not enter the exposure; Retain is actually Keep the money risk (deductible, captive, uninsured); Share / Transfer is actually Insurance, hold-harmless, additional insured — money, not energy; Reduce is actually Hierarchy: prevent frequency and/or reduce severity. If the stem shows insurance is offered instead of feasible engineering, pick control/reduce first \u2014 insurance is transfer. If the stem shows the operation can stop the exposure entirely, pick avoid. If the stem shows deductible strategy with no controls, pick retain only with eyes open \u2014 still need control. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows a contract shifts blame but hazard remains, pick recognize transfer of finance, not hazard. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Financial four — deductible + umbrella is which pair? What is missing sits in CSP-11 Domain 3 Risk Management. The exam tests whether you apply the rule when a package already looks complete. Core rule: Four financial strategies: Avoid (do not do the activity), Retain (self-insure, deductibles, captives), Share/Transfer (insurance, contracts, indemnities), Reduce (loss prevention and loss reduction via hierarchy). Two financing moves in one stem (retain + transfer) still leave Reduce/Avoid missing. ROI = (Gain â Cost)/Cost is how you price a control â it is not a fifth strategy and does not turn a policy into a guard. Field context: Finance puts two moves in one packet: raise the fire deductible from $100k to $1M and buy a $25M umbrella â and they want that packet instead of substituting the solvent. You are the CSP. The question is which two financial strategies they just named, and which one is still missing. The oil-and-gas skin shifts the same decision into production pressure: Finance puts two moves in one packet: raise the well-control deductible from $100k to $1M and buy a $25M umbrella â and they want that packet instead of reducing inventory. You are the CSP. The construction skin shifts it into schedule and trade stacking: Finance puts two moves in one packet: raise the OCIP deductible from $100k to $1M and buy a $25M umbrella â and they want that packet instead of a leading-edge system. You are the CSP. Model caption for this class: Four boxes: Avoid | Retain | Share/Transfer | Reduce. Avoid tagged âstop the activity.â Retain tagged âdeductible/captive.â Transfer tagged âpolicy/indemnity.â Reduce tagged âhierarchy â prevention + reduction.â Caption: two financing boxes â  a control. ROI sits under Reduce as math, not as a strategy. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Risk financing strategies: avoid, retain, transfer, control/reduce (loss prevention/reduction). Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Avoid removes the exposure; retain keeps it intentionally. (3) Transfer shifts financial consequence (insurance/contracts) — not the hazard itself. (4) Control/reduce changes probability or severity through hierarchy-smart actions. (5) Do not call insurance elimination of the hazard. (6) Combine strategies deliberately; state residual risk. (7) Required legal controls are not optional because transfer looks cheaper. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Solvent washer. Packet A: deductible $1M (retain) + $25M umbrella (transfer). Packet B: aqueous substitute (avoid/reduce the flammable activity) costing $50k with $80k avoided loss the same year. ROI_B = (80â50)/50 = 60%. Packet A does not change LEL. CSP: B is the control strategy; A may sit beside residual money after B, not instead of B. Payback of B is 50/80 = 0.63 years â do not call that â60% payback.â Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Calling a deductible change “loss prevention.”; Treating retain + transfer as complete treatment while energy is unchanged.; Mixing ROI percent with payback years, or using premium savings as Gain while the hazard stays open.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Avoid” is really Stop the activity / do not enter the exposure; “Retain” is really Keep the money risk (deductible, captive, uninsured); “Share / Transfer” is really Insurance, hold-harmless, additional insured — money, not energy; “Reduce” is really Hierarchy: prevent frequency and/or reduce severity. Stem-if-then map: if insurance is offered instead of feasible engineering → control/reduce first \u2014 insurance is transfer; if the operation can stop the exposure entirely → avoid; if deductible strategy with no controls → retain only with eyes open \u2014 still need control; if two answers work → higher hierarchy / system / design; if a contract shifts blame but hazard remains → recognize transfer of finance, not hazard. Scoring favors evidence, owners, verification, and hierarchy-smart controls on financial four. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Financial four — deductible + umbrella is which pair? What is missing?",
  cardBack:
    "Retain + transfer. Missing reduce/avoid (controls). Avoid = stop. Reduce = hierarchy. ROI = (Gain − Cost)/Cost on a control, not a premium. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence names avoid/retain/share-transfer/reduce, can label a deductible+umbrella pair as retain+transfer, and says that pair does not replace hierarchy.",
  formulaSlug: "roi",
};

export const items: ClassItem[] = [
  exam(T, "One packet: raise the fire deductible $100k → $1M and buy a $25M umbrella. Fuel load unchanged. Which two strategies is this, and what is missing?", [
    "Reduce + avoid; missing transfer.",
    "Retain + transfer; missing reduce/avoid (controls). Financing pair does not change fuel.",
    "Avoid + reduce; missing retain.",
    "Two forms of loss prevention.",
  ], 1, "FIN: deductible = retain, umbrella = transfer. Energy unchanged so reduce/avoid still owed.", "FIN", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Four financial strategies: Avoid (do not do the activity), Retain (self-insure, deductibles, captives), Share/Transfer (insurance, contracts, indemnities), Reduce (loss prevention and loss reduction via hierarchy). Tw... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Cost $50,000 aqueous substitute. Same-year avoided loss $80,000. ROI?", [
    "160% using Gain/Cost.",
    "60% using (80k − 50k)/50k.",
    "0.63% using payback years as percent.",
    "37.5% using (80k − 50k)/80k.",
  ], 1, "FORM: ROI = (Gain − Cost)/Cost = 30/50 = 60%.", "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Four financial strategies: Avoid (do not do the activity), Retain (self-insure, deductibles, captives), Share/Transfer (insurance, contracts, indemnities), Reduce (loss prevention and loss reduction via hierarchy). Tw... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at an offshore fabrication night shift. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Same numbers. Payback of the substitute.", [
    "60%.",
    "0.625 years (50/80) — do not label it ROI percent.",
    "1.6 years (80/50).",
    "30 years (1910.1020).",
  ], 1, "FORM: payback = Cost/annual gain in years.", "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Four financial strategies: Avoid (do not do the activity), Retain (self-insure, deductibles, captives), Share/Transfer (insurance, contracts, indemnities), Reduce (loss prevention and loss reduction via hierarchy). Tw... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Leadership wants the 60% ROI substitute dropped for the retain+transfer packet because “two strategies beat one.” Best CSP position?", [
    "Accept — two boxes are always better.",
    "Reject: two financing strategies do not outrank one reduce/avoid control. Hierarchy/legal still pick the substitute.",
    "Accept if the umbrella is admitted paper.",
    "Accept if RPN of “policy” is lower.",
  ], 1, "FIN + HIER: count of strategies is not quality. Controls beat financing.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Four financial strategies: Avoid (do not do the activity), Retain (self-insure, deductibles, captives), Share/Transfer (insurance, contracts, indemnities), Reduce (loss prevention and loss reduction via hierarchy). Tw... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Which pair is coherent reduce + retain rather than a dodge?", [
    "Umbrella + higher deductible, nip open.",
    "Install the interlock (reduce) and honestly keep a deductible on remaining money loss (retain).",
    "Hold-harmless + captive, inventory unchanged.",
    "Poster campaign + larger policy.",
  ], 1, "FIN: reduce energy, then retain residual money. Two strategies, one of them a control.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Four financial strategies: Avoid (do not do the activity), Retain (self-insure, deductibles, captives), Share/Transfer (insurance, contracts, indemnities), Reduce (loss prevention and loss reduction via hierarchy). Tw... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Gain is defined as “premium down $8k” while the washer still uses flammable solvent and expected loss is $80k. Problem?", [
    "None — premium is preferred Gain.",
    "FIN/STEM: financing change is not avoided loss from a control; energy is unchanged.",
    "They should have used 24.45.",
    "They should have used median.",
  ], 1, "Premium savings ≠ control gain.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Four financial strategies: Avoid (do not do the activity), Retain (self-insure, deductibles, captives), Share/Transfer (insurance, contracts, indemnities), Reduce (loss prevention and loss reduction via hierarchy). Tw... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Optional lab-scale pyrophoric step can be cancelled, or kept with a new policy and a higher captive retention. Best pairing?", [
    "Keep + policy + captive — two financing strategies complete treatment.",
    "Avoid (cancel the optional step) as the primary strategy; any retain/transfer is only for true residual, not a substitute for avoidance.",
    "Keep — avoid is not a financial strategy.",
    "Keep if ROI of the policy exceeds 12%.",
  ], 1, "FIN/HIER: avoid the optional activity; retain+transfer is the distractor pair.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Four financial strategies: Avoid (do not do the activity), Retain (self-insure, deductibles, captives), Share/Transfer (insurance, contracts, indemnities), Reduce (loss prevention and loss reduction via hierarchy). Tw... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A legally required 1910.212 guard has weak first-year ROI versus a cheap extra rider. Operations wants the rider. Best call?", [
    "Buy the rider — ROI is the SMS.",
    "Fund the required guard (reduce). ROI does not waive hierarchy or the standard; the rider is transfer.",
    "Raise the deductible instead (retain as the control).",
    "Skip both if payback > 1 year.",
  ], 1, "HIER/FIN: required reduce beats pretty transfer ROI.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Four financial strategies: Avoid (do not do the activity), Retain (self-insure, deductibles, captives), Share/Transfer (insurance, contracts, indemnities), Reduce (loss prevention and loss reduction via hierarchy). Tw... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Last sentence: capital this quarter is $20k. Full substitute $50k; engineered enclosure $18k; extra policy $20k. Best remaining spend?", [
    "The policy — transfer spends the cap cleanly.",
    "The $18k enclosure (reduce) now, residual named, substitute scheduled — not the policy as the control.",
    "Posters with the $20k.",
    "Increase the deductible only.",
  ], 1, "STEM capped capital. Remaining reduce still beats transfer-as-control.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Four financial strategies: Avoid (do not do the activity), Retain (self-insure, deductibles, captives), Share/Transfer (insurance, contracts, indemnities), Reduce (loss prevention and loss reduction via hierarchy). Tw... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Analyst reports ROI as (Gain − Cost)/Gain = 37.5% against a 60% hurdle that uses /Cost. Error?", [
    "None — both are ROI.",
    "FORM: hurdle uses /Cost; 37.5% is a different ratio and is not comparable.",
    "UNIT — they used meters.",
    "TIME — they used 8-hour TWA.",
  ], 1, "FORM: denominator must match the claimed definition.", "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Four financial strategies: Avoid (do not do the activity), Retain (self-insure, deductibles, captives), Share/Transfer (insurance, contracts, indemnities), Reduce (loss prevention and loss reduction via hierarchy). Tw... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A fatality occurs while the umbrella binder is being signed. Team delays OSHA until the policy incepts. Clock?", [
    "Inception pauses 1904.",
    "Fatality: 8 hours to OSHA. Transfer paperwork is not a clock.",
    "24 hours because it is a finance event.",
    "7 days.",
  ], 1, "TIME: 8-hour fatality notification.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Four financial strategies: Avoid (do not do the activity), Retain (self-insure, deductibles, captives), Share/Transfer (insurance, contracts, indemnities), Reduce (loss prevention and loss reduction via hierarchy). Tw... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Hold-harmless from a contractor plus an additional-insured endorsement, same unguarded rented compressor. Which two strategies, and the still-open duty?", [
    "Avoid + reduce; host has no duty.",
    "Share/transfer (contract + insurance); host still owes reduce (guard/energy control) — paper is not a coupling guard.",
    "Retain + avoid; duty transferred fully.",
    "Two loss-prevention strategies.",
  ], 1, "FIN: two transfer papers in one stem still miss reduce. Host hierarchy remains.", "FIN", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Four financial strategies: Avoid (do not do the activity), Retain (self-insure, deductibles, captives), Share/Transfer (insurance, contracts, indemnities), Reduce (loss prevention and loss reduction via hierarchy). Tw... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
