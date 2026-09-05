import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D5.04";

export const classFields: ClassFields = {
  hook: "Marketing wants a sustainability banner: recycle 4% of a still-optional solvent, plant a tree, and skip the aqueous substitute because “circular is greener than boring P2.” You are the CSP. The question is where sustainability sits relative to hierarchy.",
  hookOilGas: `Marketing wants a sustainability banner: recycle 4% of a still-optional chemical, plant a tree, and skip inventory reduction because âcircular is greener than boring P2.â You are the CSP. The question is where sustainability sits relative to hierarchy.`,
  hookConstruction: `Marketing wants a sustainability banner: recycle 4% of a still-optional solvent, plant a tree, and skip the water-based spec because âcircular is greener than boring P2.â You are the CSP. The question is where sustainability sits relative to hierarchy.`,
  rule: "Sustainability (triple bottom line / life-cycle thinking) still uses the environmental hierarchy: prevent at source, then reuse, recycle, treat, dispose. It does not waive occupational hierarchy, PSM, or RCRA. A recycling story is not substitution. Energy and water efficiency are real, but not a reason to skip a guard or a dike. If two answers work, take higher hierarchy / system / design.",
  modelCaption:
    "Life-cycle arrow: extract → design → make → use → end-of-life. Under design: P2 / PtD. A recycle bin tagged “not the top row.” Caption: circular at end-of-pipe does not beat a cleaner process at concept.",
  workedCase:
    "Solvent washer. Sustainability claim: 4% recycle + trees. CSP: aqueous substitute cuts virgin use, fire load, waste, and worker exposure — that is sustainability and P2 and PtD. Recycle the residual if any remains. ISO 14001 (Class 29) can run the EMS; it does not pick the row. Do not take the guard off the washer to save 20 W of motor load.",
  trapsJson: traps(
    "Calling a recycle bin P2 or PtD.",
    "Dropping an occupational control for a green metric.",
    "Using a tree poster as a RCRA determination.",
  ),
  contrastJson: contrast([
    { looksLike: "Recycle / circular slogan", actually: "End-of-life tactic — below source reduction" },
    { looksLike: "P2 / PtD at concept", actually: "Real sustainability of the process" },
    { looksLike: "ISO 14001 certificate", actually: "EMS framework — not a substitute for hierarchy" },
    { looksLike: "Green energy saving", actually: "Good unless it disables a safety-critical utility" },
  ]),
  mustScoreJson: mustScore(
    "Sustainability integrates environment, social, and economic performance over time.",
    "Prefer prevention and efficiency over offsetting narratives alone.",
    "Metrics should be material to significant aspects/impacts.",
    "Green claims need evidence \u2014 avoid greenwashing on the exam.",
    "Life-cycle thinking links design, use, and end-of-life.",
    "Worker safety is part of social performance \u2014 not a tradeaway.",
    "Hierarchy and P2 align with credible sustainability.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "only carbon offsets are proposed while inefficiencies remain", pick: "reduce at source first" },
    { ifStem: "green marketing lacks evidence", pick: "require measurable performance" },
    { ifStem: "a project cuts cost by removing safeguards", pick: "reject \u2014 safety is not optional sustainability" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "design can cut energy and hazard together", pick: "take the design win" },
  ),

  brief: `Sustainability (triple bottom line / life-cycle thinking) still uses the environmental hierarchy: prevent at source, then reuse, recycle, treat, dispose. It does not waive occupational hierarchy, PSM, or RCRA. A recycling story is not substitution. Energy and water efficiency are real, but not a reason to skip a guard or a dike. If two answers If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Sustainability (triple bottom line / life-cycle thinking) still uses the environmental hierarchy: prevent at source, then reuse, recycle, treat, dispose. It does not waive occupational hierarchy, PSM, or RCRA. A recycling story is not substitution. Energy and water efficiency are real, but not a reason to skip a guard or a dike. If two answers work, take higher hierarchy / system / design. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. Field move
Marketing wants a sustainability banner: recycle 4% of a still-optional solvent, plant a tree, and skip the aqueous substitute because âcircular is greener than boring P2.â You are the CSP. The question is where sustainability sits relative to hierarchy. Oil-and-gas skin: Marketing wants a sustainability banner: recycle 4% of a still-optional chemical, plant a tree, and skip inventory reduction because âcircular is greener than boring P2.â You are the CSP. Construction skin: Marketing wants a sustainability banner: recycle 4% of a still-optional solvent, plant a tree, and skip the water-based spec because âcircular is greener than boring P2.â You are the CSP. Work the case: Solvent washer. Sustainability claim: 4% recycle + trees. CSP: aqueous substitute cuts virgin use, fire load, waste, and worker exposure â that is sustainability and P2 and PtD. Recycle the residual if any remains. ISO 14001 (Class 29) can run the EMS; it does not pick the row. Do not take the guard off the washer to save 20 W of motor load. Classic traps: Calling a recycle bin P2 or PtD.; Dropping an occupational control for a green metric.; Using a tree poster as a RCRA determination.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for sustainability. Verify whether a higher system or design fix is still open. Contrast labels: Recycle / circular slogan is actually End-of-life tactic — below source reduction; P2 / PtD at concept is actually Real sustainability of the process; ISO 14001 certificate is actually EMS framework — not a substitute for hierarchy; Green energy saving is actually Good unless it disables a safety-critical utility. If the stem shows only carbon offsets are proposed while inefficiencies remain, pick reduce at source first. If the stem shows green marketing lacks evidence, pick require measurable performance. If the stem shows a project cuts cost by removing safeguards, pick reject \u2014 safety is not optional sustainability. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows design can cut energy and hazard together, pick take the design win. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Sustainability — is 4% recycle the top row? Can you unplug the fire pump for kWh sits in CSP-11 Domain 5 Environmental Management. The exam tests whether you apply the rule when a package already looks complete. Core rule: Sustainability (triple bottom line / life-cycle thinking) still uses the environmental hierarchy: prevent at source, then reuse, recycle, treat, dispose. It does not waive occupational hierarchy, PSM, or RCRA. A recycling story is not substitution. Energy and water efficiency are real, but not a reason to skip a guard or a dike. If two answers work, take higher hierarchy / system / design. Field context: Marketing wants a sustainability banner: recycle 4% of a still-optional solvent, plant a tree, and skip the aqueous substitute because âcircular is greener than boring P2.â You are the CSP. The question is where sustainability sits relative to hierarchy. The oil-and-gas skin shifts the same decision into production pressure: Marketing wants a sustainability banner: recycle 4% of a still-optional chemical, plant a tree, and skip inventory reduction because âcircular is greener than boring P2.â You are the CSP. The construction skin shifts it into schedule and trade stacking: Marketing wants a sustainability banner: recycle 4% of a still-optional solvent, plant a tree, and skip the water-based spec because âcircular is greener than boring P2.â You are the CSP. Model caption for this class: Life-cycle arrow: extract â design â make â use â end-of-life. Under design: P2 / PtD. A recycle bin tagged ânot the top row.â Caption: circular at end-of-pipe does not beat a cleaner process at concept. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Sustainability integrates environment, social, and economic performance over time. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Prefer prevention and efficiency over offsetting narratives alone. (3) Metrics should be material to significant aspects/impacts. (4) Green claims need evidence — avoid greenwashing on the exam. (5) Life-cycle thinking links design, use, and end-of-life. (6) Worker safety is part of social performance — not a tradeaway. (7) Hierarchy and P2 align with credible sustainability. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Solvent washer. Sustainability claim: 4% recycle + trees. CSP: aqueous substitute cuts virgin use, fire load, waste, and worker exposure â that is sustainability and P2 and PtD. Recycle the residual if any remains. ISO 14001 (Class 29) can run the EMS; it does not pick the row. Do not take the guard off the washer to save 20 W of motor load. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Calling a recycle bin P2 or PtD.; Dropping an occupational control for a green metric.; Using a tree poster as a RCRA determination.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Recycle / circular slogan” is really End-of-life tactic — below source reduction; “P2 / PtD at concept” is really Real sustainability of the process; “ISO 14001 certificate” is really EMS framework — not a substitute for hierarchy; “Green energy saving” is really Good unless it disables a safety-critical utility. Stem-if-then map: if only carbon offsets are proposed while inefficiencies remain → reduce at source first; if green marketing lacks evidence → require measurable performance; if a project cuts cost by removing safeguards → reject \u2014 safety is not optional sustainability; if two answers work → higher hierarchy / system / design; if design can cut energy and hazard together → take the design win. Scoring favors evidence, owners, verification, and hierarchy-smart controls on sustainability. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Sustainability — is 4% recycle the top row? Can you unplug the fire pump for kWh?",
  cardBack:
    "Source reduction/PtD first. Recycle is lower. ISO 14001 is a frame, not a row. Do not disable safety utilities for a green metric. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence says sustainability still follows source reduction before recycle, and occupational/fire-safety controls are not traded for a green banner.",
};

export const items: ClassItem[] = [
  exam(T, "Marketing wants to skip an open aqueous substitute because a 4% solvent-recycle program photographs better. Best CSP call?", [
    "Skip substitute — circular beats P2.",
    "Specify the substitute (source reduction / PtD). Recycle is a lower row for residual, not a skip pass.",
    "Skip substitute if trees are planted 1:1.",
    "Skip substitute if ISO 14001 is certified.",
  ], 1, "HIER: recycle slogan vs substitution.", "HIER", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "Sustainability (triple bottom line / life-cycle thinking) still uses the environmental hierarchy: prevent at source, then reuse, recycle, treat, dispose. It does not waive occupational hierarchy, PSM, or RCRA. A recyc... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Energy team wants to de-energize the fire-pump generator at night to cut Scope 2. Occupancy is 24/7. Comment?", [
    "Do it — kWh is sustainability.",
    "Do not disable a safety-critical utility. Efficiency that kills protection is not sustainability.",
    "Do it if the umbrella is extra.",
    "Do it if ABC cans remain.",
  ], 1, "HIER: fire protection vs kWh.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "Sustainability (triple bottom line / life-cycle thinking) still uses the environmental hierarchy: prevent at source, then reuse, recycle, treat, dispose. It does not waive occupational hierarchy, PSM, or RCRA. A recyc... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "ISO 14001 certificate offered as proof that RCRA 90-day clocks do not apply. Issue?", [
    "Certificate preempts RCRA.",
    "14001 is an EMS framework, not a waste exclusion. Clocks remain.",
    "Certificate converts waste to UW.",
    "Certificate is a DOT placard.",
  ], 1, "TOOL: 14001 vs RCRA.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "Sustainability (triple bottom line / life-cycle thinking) still uses the environmental hierarchy: prevent at source, then reuse, recycle, treat, dispose. It does not waive occupational hierarchy, PSM, or RCRA. A recyc... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "LCA counts only recycle percent and ignores worker exposure and fire load of the remaining solvent. Error?", [
    "None — recycle is the LCA.",
    "TOOL/STEM: a partial LCA that hides the still-open substitute is the wrong decision tool.",
    "None if Scope 3 is blank.",
    "None if GHS is attached.",
  ], 1, "TOOL: incomplete LCA as a dodge.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "Sustainability (triple bottom line / life-cycle thinking) still uses the environmental hierarchy: prevent at source, then reuse, recycle, treat, dispose. It does not waive occupational hierarchy, PSM, or RCRA. A recyc... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Last sentence: substitute frozen. Remaining: closed-loop reuse of 80% vs a tree wall. Best remaining sustainability?", [
    "Trees — biodiversity is always the top remaining row.",
    "Closed-loop reuse/inventory cut of the residual solvent; trees are not a process control.",
    "Neither — freeze kills sustainability.",
    "Only carbon offsets.",
  ], 1, "STEM closed substitution; remaining is still source-adjacent reuse, not décor.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "Sustainability (triple bottom line / life-cycle thinking) still uses the environmental hierarchy: prevent at source, then reuse, recycle, treat, dispose. It does not waive occupational hierarchy, PSM, or RCRA. A recyc... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a pharma suite changeover. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Carbon offsets purchased instead of a dike. Classify.", [
    "P2 — offsets contain spills.",
    "FIN: offsets are money (transfer-like), not containment. The dike is Reduce.",
    "Avoid — offsets delete the tank.",
    "UW — offsets are lamps.",
  ], 1, "FIN: offsets ≠ dike.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "Sustainability (triple bottom line / life-cycle thinking) still uses the environmental hierarchy: prevent at source, then reuse, recycle, treat, dispose. It does not waive occupational hierarchy, PSM, or RCRA. A recyc... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Reusable packaging still causes a struck-by from an unguarded conveyor. Green team: “reuse outranks guards.” Call?", [
    "Reuse always beats occupational hierarchy.",
    "Keep reuse AND guard the conveyor. Sustainability does not waive 1910.212.",
    "Remove the guard to save motor watts.",
    "Transfer struck-by via offsets.",
  ], 1, "HIER: occupational control still applies.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "Sustainability (triple bottom line / life-cycle thinking) still uses the environmental hierarchy: prevent at source, then reuse, recycle, treat, dispose. It does not waive occupational hierarchy, PSM, or RCRA. A recyc... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Hospitalization from the unguarded “green” conveyor. Team delays OSHA to finish the sustainability report. Clock?", [
    "CSR reports pause 1904.",
    "Hospitalization: 24 hours to OSHA. Banners are not a clock.",
    "8 hours because green is always fatality.",
    "7 days.",
  ], 1, "TIME: 24-hour OSHA hospitalization.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "Sustainability (triple bottom line / life-cycle thinking) still uses the environmental hierarchy: prevent at source, then reuse, recycle, treat, dispose. It does not waive occupational hierarchy, PSM, or RCRA. A recyc... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Water program: reduce once-through cooling vs treat a larger blowdown vs a poster. Best?", [
    "Poster.",
    "Reduce/reuse at source (less water in); treatment is lower; posters are not water.",
    "Treat more so the metric of “gallons treated” rises.",
    "Buy bottled water offsets.",
  ], 1, "HIER: water P2.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "Sustainability (triple bottom line / life-cycle thinking) still uses the environmental hierarchy: prevent at source, then reuse, recycle, treat, dispose. It does not waive occupational hierarchy, PSM, or RCRA. A recyc... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "UNIT: energy save reported as 10,000 “watts per year” when the stem’s bill is kWh. Issue?", [
    "None — W and kWh are identical.",
    "UNIT: power vs energy, and time basis. Do not mix W with kWh-year claims.",
    "PELTLV.",
    "FORM — they should have used RPN.",
  ], 1, "UNIT: watts vs kilowatt-hours.", "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "Sustainability (triple bottom line / life-cycle thinking) still uses the environmental hierarchy: prevent at source, then reuse, recycle, treat, dispose. It does not waive occupational hierarchy, PSM, or RCRA. A recyc... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Wrong tool: FMEA RPN of “customer fails to admire the tree” as the EMS aspect. Comment?", [
    "Accept — RPN is 14001.",
    "TOOL: significant aspects/impacts and hierarchy/P2 are the method, not an RPN of marketing feelings.",
    "Accept if RPN < 100.",
    "Accept if ICS PIO owns trees.",
  ], 1, "TOOL: FMEA of admiration ≠ aspect.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "Sustainability (triple bottom line / life-cycle thinking) still uses the environmental hierarchy: prevent at source, then reuse, recycle, treat, dispose. It does not waive occupational hierarchy, PSM, or RCRA. A recyc... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Two funded moves: extra umbrella AND a recycle-photo day, solvent substitute still open. Pair and miss?", [
    "Avoid + reduce; photos are P2.",
    "Transfer + publicity; missing Reduce/P2 (the substitute).",
    "Two aqueous processes.",
    "14001 + RCRA complete.",
  ], 1, "FIN: financing + marketing in one stem do not substitute solvent.", "FIN", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "Sustainability (triple bottom line / life-cycle thinking) still uses the environmental hierarchy: prevent at source, then reuse, recycle, treat, dispose. It does not waive occupational hierarchy, PSM, or RCRA. A recyc... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
