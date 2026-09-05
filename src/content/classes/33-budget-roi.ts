import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D2.11";

export const classFields: ClassFields = {
  hook: "Finance will fund a $50k guard if you “show ROI.” They also offer a cheaper insurance bump instead. You are the CSP. The question is how to compute ROI without letting financing impersonate a control.",
  hookOilGas: `Finance will fund a $50k well-control upgrade if you âshow ROI.â They also offer a cheaper insurance bump. You are the CSP. The question is how to compute ROI without letting financing impersonate a control.`,
  hookConstruction: `Finance will fund a $50k leading-edge system if you âshow ROI.â They also offer a cheaper insurance bump. You are the CSP. The question is how to compute ROI without letting financing impersonate a control.`,
  rule: "ROI = (Gain − Cost) / Cost × 100%. Gain is benefit or avoided loss in the same period basis as Cost. Payback (years) is not ROI percent. Insurance premium change is financing (retain/share/transfer), not a hierarchy control. Do not skip a required guard because ROI looks modest.",
  modelCaption:
    "ROI fraction on the left: (Gain − Cost)/Cost. A second box “Payback = Cost / Annual gain” tagged “not the same.” A third box “Insurance” tagged FIN — not a control. Caption: same units, same period; do not mix percent with years.",
  workedCase:
    "Guard costs $50,000. Expected avoided loss $80,000 in the same year (one prevented amputation + downtime). ROI = (80k − 50k)/50k = 60%. Payback = 50/80 = 0.63 years — do not call that “60% payback.” An insurance bump of $10,000 is not an alternative control; it is transfer.",
  trapsJson: traps(
    "Calling payback years an ROI percent.",
    "Using premium savings as the only “gain” while the energy stays open.",
    "Dividing by gain instead of by cost.",
  ),
  contrastJson: contrast([
    { looksLike: "ROI %", actually: "(Gain − Cost)/Cost × 100%" },
    { looksLike: "Payback", actually: "Cost / annual gain — years, not percent" },
    { looksLike: "Insurance", actually: "Share/transfer — not elimination of the nip" },
    { looksLike: "Required control", actually: "Fund it even if ROI is ugly — legal/hierarchy first" },
  ]),
  mustScoreJson: mustScore(
    "Safety budget decisions still follow hierarchy \u2014 cheap PPE is not automatically best.",
    "ROI compares benefits and costs; include avoided losses with honest assumptions.",
    "Do not use weak ROI to kill a required legal control.",
    "Capital for engineering often beats recurring admin cost over time.",
    "Track benefits with measures, not wishful narrative alone.",
    "Insurance premiums are not a substitute for hazard removal.",
    "Present options with residual risk clearly stated.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "PPE is cheaper upfront but engineering is open", pick: "prefer higher hierarchy despite sticker shock" },
    { ifStem: "a legal requirement has poor short-term ROI", pick: "fund the requirement \u2014 ROI does not waive duty" },
    { ifStem: "only insurance is proposed", pick: "reject as primary control" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "benefits are asserted with no measure", pick: "define measures before claiming ROI" },
  ),

  brief: `ROI = (Gain â Cost) / Cost Ã 100%. Gain is benefit or avoided loss in the same period basis as Cost. Payback (years) is not ROI percent. Insurance premium change is financing (retain/share/transfer), not a hierarchy control. Do not skip a required guard because ROI looks modest. If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
ROI = (Gain â Cost) / Cost Ã 100%. Gain is benefit or avoided loss in the same period basis as Cost. Payback (years) is not ROI percent. Insurance premium change is financing (retain/share/transfer), not a hierarchy control. Do not skip a required guard because ROI looks modest. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
Finance will fund a $50k guard if you âshow ROI.â They also offer a cheaper insurance bump instead. You are the CSP. The question is how to compute ROI without letting financing impersonate a control. Oil-and-gas skin: Finance will fund a $50k well-control upgrade if you âshow ROI.â They also offer a cheaper insurance bump. You are the CSP. Construction skin: Finance will fund a $50k leading-edge system if you âshow ROI.â They also offer a cheaper insurance bump. You are the CSP. Work the case: Guard costs $50,000. Expected avoided loss $80,000 in the same year (one prevented amputation + downtime). ROI = (80k â 50k)/50k = 60%. Payback = 50/80 = 0.63 years â do not call that â60% payback.â An insurance bump of $10,000 is not an alternative control; it is transfer. Classic traps: Calling payback years an ROI percent.; Using premium savings as the only “gain” while the energy stays open.; Dividing by gain instead of by cost.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for budget roi. Verify whether a higher system or design fix is still open. Contrast labels: ROI % is actually (Gain − Cost)/Cost × 100%; Payback is actually Cost / annual gain — years, not percent; Insurance is actually Share/transfer — not elimination of the nip; Required control is actually Fund it even if ROI is ugly — legal/hierarchy first. If the stem shows PPE is cheaper upfront but engineering is open, pick prefer higher hierarchy despite sticker shock. If the stem shows a legal requirement has poor short-term ROI, pick fund the requirement \u2014 ROI does not waive duty. If the stem shows only insurance is proposed, pick reject as primary control. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows benefits are asserted with no measure, pick define measures before claiming ROI. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `ROI — (Gain − Cost)/Cost. Can insurance replace the guard sits in CSP-11 Domain 2 Management Systems. The exam tests whether you apply the rule when a package already looks complete. Core rule: ROI = (Gain â Cost) / Cost Ã 100%. Gain is benefit or avoided loss in the same period basis as Cost. Payback (years) is not ROI percent. Insurance premium change is financing (retain/share/transfer), not a hierarchy control. Do not skip a required guard because ROI looks modest. Field context: Finance will fund a $50k guard if you âshow ROI.â They also offer a cheaper insurance bump instead. You are the CSP. The question is how to compute ROI without letting financing impersonate a control. The oil-and-gas skin shifts the same decision into production pressure: Finance will fund a $50k well-control upgrade if you âshow ROI.â They also offer a cheaper insurance bump. You are the CSP. The construction skin shifts it into schedule and trade stacking: Finance will fund a $50k leading-edge system if you âshow ROI.â They also offer a cheaper insurance bump. You are the CSP. Model caption for this class: ROI fraction on the left: (Gain â Cost)/Cost. A second box âPayback = Cost / Annual gainâ tagged ânot the same.â A third box âInsuranceâ tagged FIN â not a control. Caption: same units, same period; do not mix percent with years. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Safety budget decisions still follow hierarchy — cheap PPE is not automatically best. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) ROI compares benefits and costs; include avoided losses with honest assumptions. (3) Do not use weak ROI to kill a required legal control. (4) Capital for engineering often beats recurring admin cost over time. (5) Track benefits with measures, not wishful narrative alone. (6) Insurance premiums are not a substitute for hazard removal. (7) Present options with residual risk clearly stated. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Guard costs $50,000. Expected avoided loss $80,000 in the same year (one prevented amputation + downtime). ROI = (80k â 50k)/50k = 60%. Payback = 50/80 = 0.63 years â do not call that â60% payback.â An insurance bump of $10,000 is not an alternative control; it is transfer. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Calling payback years an ROI percent.; Using premium savings as the only “gain” while the energy stays open.; Dividing by gain instead of by cost.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “ROI %” is really (Gain − Cost)/Cost × 100%; “Payback” is really Cost / annual gain — years, not percent; “Insurance” is really Share/transfer — not elimination of the nip; “Required control” is really Fund it even if ROI is ugly — legal/hierarchy first. Stem-if-then map: if PPE is cheaper upfront but engineering is open → prefer higher hierarchy despite sticker shock; if a legal requirement has poor short-term ROI → fund the requirement \u2014 ROI does not waive duty; if only insurance is proposed → reject as primary control; if two answers work → higher hierarchy / system / design; if benefits are asserted with no measure → define measures before claiming ROI. Scoring favors evidence, owners, verification, and hierarchy-smart controls on budget roi. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "ROI — (Gain − Cost)/Cost. Can insurance replace the guard?",
  cardBack:
    "ROI = (Gain − Cost)/Cost × 100%. Payback is years, not percent. Insurance is transfer, not a control. Ugly ROI does not waive hierarchy. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence states ROI = (Gain − Cost)/Cost, distinguishes payback, and says insurance is financing not a hierarchy control.",
  formulaSlug: "roi",
};

export const items: ClassItem[] = [
  exam(T, "You are the CSP reviewing a live decision at a semiconductor tool install. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Cost $50,000. Gain $80,000 in the same period. ROI.", [
    "160% using Gain/Cost.",
    "60% using (80k − 50k)/50k.",
    "0.63% using payback years as percent.",
    "37.5% using (80k − 50k)/80k.",
  ], 1, "FORM: ROI = (Gain − Cost)/Cost = 30/50 = 60%. Dividing by Gain is the attractive miss.", "FORM", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ROI = (Gain − Cost) / Cost × 100%. Gain is benefit or avoided loss in the same period basis as Cost. Payback (years) is not ROI percent. Insurance premium change is financing (retain/share/transfer), not a hierarchy c... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at an offshore fabrication night shift. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Same numbers: Cost $50k, annual gain $80k. Payback.", [
    "60%.",
    "0.625 years (50/80) — do not label it ROI percent.",
    "1.6 years (80/50).",
    "30 years (1910.1020).",
  ], 1, "FORM: payback = Cost/annual gain in years, not a percent.", "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ROI = (Gain − Cost) / Cost × 100%. Gain is benefit or avoided loss in the same period basis as Cost. Payback (years) is not ROI percent. Insurance premium change is financing (retain/share/transfer), not a hierarchy c... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Finance offers a $10k insurance increase instead of a $50k guard on an open nip. Best CSP position?", [
    "Accept — cheaper ROI.",
    "Reject: insurance is risk transfer, not a control. Specify the guard; hierarchy/legal outrank a pretty premium.",
    "Accept if TRIR is already 0.",
    "Accept if RPN drops.",
  ], 1, "FIN + HIER: transfer ≠ guard.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ROI = (Gain − Cost) / Cost × 100%. Gain is benefit or avoided loss in the same period basis as Cost. Payback (years) is not ROI percent. Insurance premium change is financing (retain/share/transfer), not a hierarchy c... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A legally required 1910.212 guard has a weak first-year ROI. Operations wants to skip it. Best call?", [
    "Skip — ROI is the SMS.",
    "Fund the required/higher-order control; ROI does not waive the hierarchy or the law.",
    "Replace with a video because ROI is better.",
    "Raise the deductible instead.",
  ], 1, "HIER/legal beat ugly ROI.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ROI = (Gain − Cost) / Cost × 100%. Gain is benefit or avoided loss in the same period basis as Cost. Payback (years) is not ROI percent. Insurance premium change is financing (retain/share/transfer), not a hierarchy c... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Analyst reports ROI as (Gain − Cost)/Gain = (80 − 50)/80 = 37.5% and compares it to a 60% hurdle that uses /Cost. Error?", [
    "None — both formulas are ROI.",
    "FORM: the hurdle uses /Cost; 37.5% is a different ratio (profit margin on gain), not comparable.",
    "UNIT — they used meters.",
    "TIME — they used 8-hour TWA.",
  ], 1, "FORM: denominator must match the definition you claim.", "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ROI = (Gain − Cost) / Cost × 100%. Gain is benefit or avoided loss in the same period basis as Cost. Payback (years) is not ROI percent. Insurance premium change is financing (retain/share/transfer), not a hierarchy c... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Gain is defined as “premium decrease of $8k” while the mixer stays open and expected loss is $80k. Problem?", [
    "None — premium is the preferred gain.",
    "FIN/STEM: financing change is not avoided loss from a control; the energy is unchanged.",
    "They should have used 24.45.",
    "They should have used median.",
  ], 1, "Premium savings ≠ control gain if the hazard remains.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ROI = (Gain − Cost) / Cost × 100%. Gain is benefit or avoided loss in the same period basis as Cost. Payback (years) is not ROI percent. Insurance premium change is financing (retain/share/transfer), not a hierarchy c... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Last sentence: capital cap is $20k this quarter; the full interlock is $50k; a partial engineered barrier is $18k; posters are $2k. Best remaining spend?", [
    "Posters for 100% “coverage.”",
    "The $18k engineered barrier now, residual named, full interlock scheduled — not posters.",
    "Insurance with the $20k.",
    "A contest.",
  ], 1, "STEM capped capital. Remaining highest row still beats décor.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ROI = (Gain − Cost) / Cost × 100%. Gain is benefit or avoided loss in the same period basis as Cost. Payback (years) is not ROI percent. Insurance premium change is financing (retain/share/transfer), not a hierarchy c... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Which is loss prevention rather than risk transfer in a budget request?", [
    "Higher umbrella limit.",
    "Substitution of the solvent that removes fire load.",
    "Larger deductible.",
    "Captive insurance funding.",
  ], 1, "FIN: prevention/reduction vs share/transfer. Substitution is control.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ROI = (Gain − Cost) / Cost × 100%. Gain is benefit or avoided loss in the same period basis as Cost. Payback (years) is not ROI percent. Insurance premium change is financing (retain/share/transfer), not a hierarchy c... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A team uses FMEA RPN to pick budget items and funds detection cameras because they drop RPN cheapest per dollar. Substitution is open. Error?", [
    "None — $/RPN is modern ROI.",
    "Wrong tool plus hierarchy: RPN/detection is not ROI of a control, and substitution is still open.",
    "They should have used 14001 aspects.",
    "They should have used 100,000 hours.",
  ], 1, "TOOL + HIER inside a budget.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ROI = (Gain − Cost) / Cost × 100%. Gain is benefit or avoided loss in the same period basis as Cost. Payback (years) is not ROI percent. Insurance premium change is financing (retain/share/transfer), not a hierarchy c... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "TRIR dollars: someone converts one recordable to $1M gain without a stem basis, then gets ROI = 2000%. Issue?", [
    "None — $1M is a CSP default.",
    "FORM/STEM: invented gain. Use the stem’s loss figures; do not mint a TRIR lottery.",
    "Use 100,000 in TRIR first.",
    "Use PEL instead.",
  ], 1, "FORM: gain must come from the stem.", "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ROI = (Gain − Cost) / Cost × 100%. Gain is benefit or avoided loss in the same period basis as Cost. Payback (years) is not ROI percent. Insurance premium change is financing (retain/share/transfer), not a hierarchy c... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A fatality occurs during the budget meeting. Team delays OSHA to finish the ROI slide. Clock?", [
    "ROI slides pause 1904.",
    "Fatality: 8 hours to OSHA. Budget math is not a clock.",
    "24 hours.",
    "7 days.",
  ], 1, "TIME: 8-hour fatality notification.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ROI = (Gain − Cost) / Cost × 100%. Gain is benefit or avoided loss in the same period basis as Cost. Payback (years) is not ROI percent. Insurance premium change is financing (retain/share/transfer), not a hierarchy c... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Cost $40k. Five-year gain $40k total with no discount rate in the stem. Someone reports 100% ROI “over the project” and also “payback 1 year.” Check?", [
    "Both can be true together without extra assumptions.",
    "Inconsistent: simple ROI (40−40)/40 = 0% if Gain is $40k on $40k; payback 1 year would need ~$40k per year. FORM mix of period bases.",
    "Always use 30 years.",
    "Always use 200,000 hours.",
  ], 1, "FORM: period basis must be consistent; they mixed lump-sum gain with annual payback.", "FORM", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ROI = (Gain − Cost) / Cost × 100%. Gain is benefit or avoided loss in the same period basis as Cost. Payback (years) is not ROI percent. Insurance premium change is financing (retain/share/transfer), not a hierarchy c... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
