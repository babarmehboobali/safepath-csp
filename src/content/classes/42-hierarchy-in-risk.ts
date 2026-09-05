import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D3.02";

export const classFields: ClassFields = {
  hook: "A risk ranking paints the open nip “yellow / ALARP” because sleeves dropped the score. Substitution of the whole operation is still in the charter. You are the CSP. The question is whether a color can outrank the hierarchy.",
  hookOilGas: `A risk ranking paints an open rotating coupling âyellow / ALARPâ because gloves dropped the score. A sealed coupling is still in the charter. You are the CSP. The question is whether a color can outrank the hierarchy.`,
  hookConstruction: `A risk ranking paints a leading-edge deck âyellow / ALARPâ because harnesses dropped the score. A horizontal lifeline and deck infill are still in the charter. You are the CSP. The question is whether a color can outrank the hierarchy.`,
  rule: "Risk treatment applies the hierarchy to residual energy: eliminate → substitute → engineer → admin → PPE. A matrix color, RPN, or ALARP label does not authorize a lower row while a higher row is still open. Financial strategies (avoid/retain/share/reduce) plug in after you know whether you are changing energy or changing who pays. If two answers work, take higher hierarchy / system / design.",
  modelCaption:
    "Left: hierarchy pyramid. Right: risk-process Treat box feeding the pyramid, with a red stamp “color ≠ permission.” Caption: ALARP is after higher rows are reasonably applied, not instead of them.",
  workedCase:
    "Open nip scored 12 (yellow) after a sleeve program. Charter still allows a redesigned enclosure this quarter. Treat is the enclosure, not “ALARP via PPE.” Residual after the enclosure: try-out, supervision of defeats, cut-resistant sleeves only if a residual reach-in remains. Insurance deductible change is retain, not a hierarchy row.",
  trapsJson: traps(
    "Calling yellow/ALARP a waiver of an open substitute or guard.",
    "Using RPN or a 5×5 as if it were the hierarchy.",
    "Putting insurance or a deductible in the Treat column as elimination.",
  ),
  contrastJson: contrast([
    { looksLike: "ALARP / yellow", actually: "A residual judgment after higher controls — not a skip pass" },
    { looksLike: "Risk score / RPN", actually: "Ranking aid — does not pick the row" },
    { looksLike: "Avoid (financial)", actually: "Stop the activity — overlaps elimination only if you actually stop" },
    { looksLike: "Reduce (financial)", actually: "Loss prevention/reduction — still implemented via hierarchy" },
  ]),
  mustScoreJson: mustScore(
    "Risk treatment uses the same hierarchy: eliminate, substitute, engineer, admin, PPE.",
    "Risk scores do not authorize skipping a still-open higher control.",
    "ALARP/residual risk talk cannot invert the pyramid when higher rows are open.",
    "Administrative controls support engineered controls \u2014 they do not replace them by default.",
    "Document why higher controls were closed before accepting lower ones.",
    "Monitoring verifies the chosen control still works.",
    "Finance and schedule pressure are not hierarchy rows.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "risk matrix rates PPE as acceptable while engineering is open", pick: "take engineering" },
    { ifStem: "ALARP is claimed without closing higher rows", pick: "reject \u2014 close higher rows first" },
    { ifStem: "only training is proposed for a machine hazard", pick: "guard/engineer first" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "higher control was honestly infeasible", pick: "document closure and take best remaining" },
  ),

  brief: `Risk treatment applies the hierarchy to residual energy: eliminate â substitute â engineer â admin â PPE. A matrix color, RPN, or ALARP label does not authorize a lower row while a higher row is still open. Financial strategies (avoid/retain/share/reduce) plug in after you know whether you are changing energy or changing who pays. If If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Risk treatment applies the hierarchy to residual energy: eliminate â substitute â engineer â admin â PPE. A matrix color, RPN, or ALARP label does not authorize a lower row while a higher row is still open. Financial strategies (avoid/retain/share/reduce) plug in after you know whether you are changing energy or changing who pays. If two answers work, take higher hierarchy / system / design. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. Field move
A risk ranking paints the open nip âyellow / ALARPâ because sleeves dropped the score. Substitution of the whole operation is still in the charter. You are the CSP. The question is whether a color can outrank the hierarchy. Oil-and-gas skin: A risk ranking paints an open rotating coupling âyellow / ALARPâ because gloves dropped the score. A sealed coupling is still in the charter. You are the CSP. Construction skin: A risk ranking paints a leading-edge deck âyellow / ALARPâ because harnesses dropped the score. A horizontal lifeline and deck infill are still in the charter. You are the CSP. Work the case: Open nip scored 12 (yellow) after a sleeve program. Charter still allows a redesigned enclosure this quarter. Treat is the enclosure, not âALARP via PPE.â Residual after the enclosure: try-out, supervision of defeats, cut-resistant sleeves only if a residual reach-in remains. Insurance deductible change is retain, not a hierarchy row. Classic traps: Calling yellow/ALARP a waiver of an open substitute or guard.; Using RPN or a 5×5 as if it were the hierarchy.; Putting insurance or a deductible in the Treat column as elimination.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for hierarchy in risk. Verify whether a higher system or design fix is still open. Contrast labels: ALARP / yellow is actually A residual judgment after higher controls — not a skip pass; Risk score / RPN is actually Ranking aid — does not pick the row; Avoid (financial) is actually Stop the activity — overlaps elimination only if you actually stop; Reduce (financial) is actually Loss prevention/reduction — still implemented via hierarchy. If the stem shows risk matrix rates PPE as acceptable while engineering is open, pick take engineering. If the stem shows ALARP is claimed without closing higher rows, pick reject \u2014 close higher rows first. If the stem shows only training is proposed for a machine hazard, pick guard/engineer first. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows higher control was honestly infeasible, pick document closure and take best remaining. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Can a yellow ALARP cell skip an open guard sits in CSP-11 Domain 3 Risk Management. The exam tests whether you apply the rule when a package already looks complete. Core rule: Risk treatment applies the hierarchy to residual energy: eliminate â substitute â engineer â admin â PPE. A matrix color, RPN, or ALARP label does not authorize a lower row while a higher row is still open. Financial strategies (avoid/retain/share/reduce) plug in after you know whether you are changing energy or changing who pays. If two answers work, take higher hierarchy / system / design. Field context: A risk ranking paints the open nip âyellow / ALARPâ because sleeves dropped the score. Substitution of the whole operation is still in the charter. You are the CSP. The question is whether a color can outrank the hierarchy. The oil-and-gas skin shifts the same decision into production pressure: A risk ranking paints an open rotating coupling âyellow / ALARPâ because gloves dropped the score. A sealed coupling is still in the charter. You are the CSP. The construction skin shifts it into schedule and trade stacking: A risk ranking paints a leading-edge deck âyellow / ALARPâ because harnesses dropped the score. A horizontal lifeline and deck infill are still in the charter. You are the CSP. Model caption for this class: Left: hierarchy pyramid. Right: risk-process Treat box feeding the pyramid, with a red stamp âcolor â  permission.â Caption: ALARP is after higher rows are reasonably applied, not instead of them. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Risk treatment uses the same hierarchy: eliminate, substitute, engineer, admin, PPE. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Risk scores do not authorize skipping a still-open higher control. (3) ALARP/residual risk talk cannot invert the pyramid when higher rows are open. (4) Administrative controls support engineered controls — they do not replace them by default. (5) Document why higher controls were closed before accepting lower ones. (6) Monitoring verifies the chosen control still works. (7) Finance and schedule pressure are not hierarchy rows. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Open nip scored 12 (yellow) after a sleeve program. Charter still allows a redesigned enclosure this quarter. Treat is the enclosure, not âALARP via PPE.â Residual after the enclosure: try-out, supervision of defeats, cut-resistant sleeves only if a residual reach-in remains. Insurance deductible change is retain, not a hierarchy row. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Calling yellow/ALARP a waiver of an open substitute or guard.; Using RPN or a 5×5 as if it were the hierarchy.; Putting insurance or a deductible in the Treat column as elimination.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “ALARP / yellow” is really A residual judgment after higher controls — not a skip pass; “Risk score / RPN” is really Ranking aid — does not pick the row; “Avoid (financial)” is really Stop the activity — overlaps elimination only if you actually stop; “Reduce (financial)” is really Loss prevention/reduction — still implemented via hierarchy. Stem-if-then map: if risk matrix rates PPE as acceptable while engineering is open → take engineering; if ALARP is claimed without closing higher rows → reject \u2014 close higher rows first; if only training is proposed for a machine hazard → guard/engineer first; if two answers work → higher hierarchy / system / design; if higher control was honestly infeasible → document closure and take best remaining. Scoring favors evidence, owners, verification, and hierarchy-smart controls on hierarchy in risk. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Can a yellow ALARP cell skip an open guard?",
  cardBack:
    "No. Colors rank; hierarchy treats. ALARP is after higher rows. Insurance/retain is not a row. Frozen stems honor the freeze, then remaining engineering. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence says risk treatment follows the hierarchy, matrix colors/RPN do not waive an open higher control, and insurance is not a hierarchy row.",
};

export const items: ClassItem[] = [
  exam(T, "Register paints an open nip yellow after sleeves. Enclosure is still in this quarter’s charter. Best Treat?", [
    "Accept yellow ALARP — color is the SMS.",
    "Specify the enclosure; yellow/PPE cannot outrank an open engineering row.",
    "Raise the deductible until the cell is green.",
    "Drop the enclosure because RPN fell.",
  ], 1, "HIER: colors are not permission.", "HIER", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Risk treatment applies the hierarchy to residual energy: eliminate → substitute → engineer → admin → PPE. A matrix color, RPN, or ALARP label does not authorize a lower row while a higher row is still open. Financial... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Which financial strategy can overlap elimination, and only if the activity actually stops?", [
    "Retain via a higher deductible.",
    "Avoid — stop the optional hazardous activity; retain/transfer do not eliminate energy.",
    "Share via an umbrella.",
    "Transfer via a hold-harmless alone.",
  ], 1, "FIN: avoid vs retain/share. Avoid is the only one that can be elimination.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Risk treatment applies the hierarchy to residual energy: eliminate → substitute → engineer → admin → PPE. A matrix color, RPN, or ALARP label does not authorize a lower row while a higher row is still open. Financial... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "RPN 48 on “operator misses cartridge change,” RPN 12 on “isocyanate used at all.” Substitution still open. Priority logic?", [
    "Always chase the higher RPN (cartridge).",
    "Substitution is still the higher row even if its RPN is smaller; RPN does not pick hierarchy.",
    "Average the RPNs.",
    "Transfer both.",
  ], 1, "HIER/TOOL: RPN ranks rows, it does not outrank substitution.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Risk treatment applies the hierarchy to residual energy: eliminate → substitute → engineer → admin → PPE. A matrix color, RPN, or ALARP label does not authorize a lower row while a higher row is still open. Financial... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a semiconductor tool install. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: ALARP is a defensible label when.", [
    "PPE was issued this morning.",
    "Higher rows were reasonably applied or truly not practicable, residual is named, and remaining risk meets stated criteria — not because a cell is yellow.",
    "The insurer smiled.",
    "TRIR is below 1.0.",
  ], 1, "STEM: ALARP is after higher controls, not a color.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Risk treatment applies the hierarchy to residual energy: eliminate → substitute → engineer → admin → PPE. A matrix color, RPN, or ALARP label does not authorize a lower row while a higher row is still open. Financial... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Last sentence: substitution closed; capital remains for an interlock or for a year of branded sleeves. Best remaining Treat?", [
    "Sleeves — residual is the brand.",
    "Interlock (engineering); sleeves only for residual. Stem closed substitution, not engineering.",
    "Neither — freeze kills Treat.",
    "Umbrella policy.",
  ], 1, "STEM + HIER: honor freeze, remaining highest row.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Risk treatment applies the hierarchy to residual energy: eliminate → substitute → engineer → admin → PPE. A matrix color, RPN, or ALARP label does not authorize a lower row while a higher row is still open. Financial... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Board offers two Treat lines in one vote: increase the fire deductible (retain) AND buy a larger umbrella (transfer), leaving fuel load unchanged. Missing strategy?", [
    "Nothing — two strategies complete Treat.",
    "Reduce/avoid (controls). Retain+transfer is financing; hierarchy still owes prevention/reduction of the fire load.",
    "A third policy.",
    "A higher RPN threshold.",
  ], 1, "FIN: two financing strategies in one stem still miss reduce/avoid.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Risk treatment applies the hierarchy to residual energy: eliminate → substitute → engineer → admin → PPE. A matrix color, RPN, or ALARP label does not authorize a lower row while a higher row is still open. Financial... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A 5×5 occupational yellow is used as SIL 2 verification on a toxic inventory. Problem?", [
    "None — yellow means SIL 2.",
    "Wrong tool: a matrix color is not LOPA/SIL; combinational process risk needs the right method.",
    "None if sleeves were issued.",
    "None if the deductible is $1M.",
  ], 1, "TOOL: 5×5 ≠ SIL.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Risk treatment applies the hierarchy to residual energy: eliminate → substitute → engineer → admin → PPE. A matrix color, RPN, or ALARP label does not authorize a lower row while a higher row is still open. Financial... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Severity is catastrophic; likelihood is painted low because of a camera. Enclosure still open. Best call?", [
    "Trust likelihood — cameras are engineering.",
    "Do not let detection-painted likelihood hide S=catastrophic; specify the enclosure.",
    "Accept yellow.",
    "Retain the fatality in the captive.",
  ], 1, "HIER: detection is not severity reduction.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Risk treatment applies the hierarchy to residual energy: eliminate → substitute → engineer → admin → PPE. A matrix color, RPN, or ALARP label does not authorize a lower row while a higher row is still open. Financial... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "ROI of sleeves is 400%; ROI of the guard is 15%. Legal 1910.212 still applies. Fund?", [
    "Sleeves — ROI is the hierarchy.",
    "The guard; ROI does not waive hierarchy or the standard. Sleeves are residual.",
    "Neither if payback exceeds 1 year.",
    "Insurance if ROI of premium is higher.",
  ], 1, "FIN/HIER: pretty ROI on PPE loses to required engineering.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Risk treatment applies the hierarchy to residual energy: eliminate → substitute → engineer → admin → PPE. A matrix color, RPN, or ALARP label does not authorize a lower row while a higher row is still open. Financial... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A fatality occurs while the ALARP debate runs. Team files the yellow cell before OSHA. Clock?", [
    "ALARP debates pause 1904.",
    "Fatality: 8 hours to OSHA. Risk colors are not a clock.",
    "24 hours because it was yellow.",
    "7 days.",
  ], 1, "TIME: 8-hour fatality notification.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Risk treatment applies the hierarchy to residual energy: eliminate → substitute → engineer → admin → PPE. A matrix color, RPN, or ALARP label does not authorize a lower row while a higher row is still open. Financial... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Likelihood 4, severity 5 on the stem’s 1–5 scale. Someone reports “risk = 9” and treats it as 9%. Error?", [
    "None — add then convert to percent.",
    "FORM: if the scheme is a product, 4×5=20, and neither 9 nor 9% is a probability unless calibrated.",
    "UNIT — they used meters.",
    "PELTLV — they used a PEL as severity.",
  ], 1, "FORM: ordinal math and fake percents.", "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Risk treatment applies the hierarchy to residual energy: eliminate → substitute → engineer → admin → PPE. A matrix color, RPN, or ALARP label does not authorize a lower row while a higher row is still open. Financial... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Two open controls: eliminate an optional lab-scale pyrophoric step, or write a better SOP and faceshield JHA. Best Treat?", [
    "SOP/JHA — documentation is Treat.",
    "Eliminate the optional step (higher hierarchy / system / design).",
    "Retain it in the captive.",
    "Transfer it by memo to a contractor with the same energy.",
  ], 1, "HIER: optional activity still allows elimination.", "HIER", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "Risk treatment applies the hierarchy to residual energy: eliminate → substitute → engineer → admin → PPE. A matrix color, RPN, or ALARP label does not authorize a lower row while a higher row is still open. Financial... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
