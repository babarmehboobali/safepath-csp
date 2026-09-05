import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D3.04";

export const classFields: ClassFields = {
  hook: "A plant manager wants the risk register to “prove we are legal” and to replace the OSHA 300, the PHA worksheet, and the insurance submission. You are the CSP. The question is what a register is allowed to be.",
  hookOilGas: `A production manager wants the well-work risk register to âprove we are legalâ and to replace the OSHA 300, the HAZOP, and the insurance submission. You are the CSP. The question is what a register is allowed to be.`,
  hookConstruction: `A PM wants the site risk register to âprove we are legalâ and to replace the OSHA 300, the JHA pack, and the OCIP submission. You are the CSP. The question is what a register is allowed to be.`,
  rule: "A risk register is the living log of identified risks: source, existing controls, likelihood/severity, residual after treatment, owner, review date, and status. It is not a 1904 log, not a PHA, not a JHA, and not a policy. MoC and monitoring update it. Hierarchy still decides treatment — a row number does not.",
  modelCaption:
    "Register columns: ID | Hazard/event | Existing controls | L | S | Residual | Treatment (hierarchy) | Owner | Review date | Status. Side stamps: “not 300 log,” “not PHA,” “not insurance.” Caption: living log of residual, not a trophy spreadsheet.",
  workedCase:
    "Row 17: Mixer 4 nip. Existing: partial guard. L/S intolerable. Treatment: full interlock this quarter (engineering), sleeves residual. Owner: Engineering. Review: after commissioning and quarterly defeat checks. Do not merge this row into the 300 log. Do not claim the row is a HAZOP node. If Finance wants to “close” the row by raising a deductible, the residual energy is still open.",
  trapsJson: traps(
    "Using the register as the OSHA 300 or as medical records.",
    "Closing a row because insurance was bound.",
    "Never reviewing dates — a frozen spreadsheet of 2019 scores.",
  ),
  contrastJson: contrast([
    { looksLike: "Risk register", actually: "Living log of residual risk, owners, and review dates" },
    { looksLike: "OSHA 300 / 301", actually: "Injury/illness recordkeeping — different legal object" },
    { looksLike: "PHA / JHA worksheet", actually: "Analysis that feeds the register, not the register itself" },
    { looksLike: "Insurance schedule", actually: "Transfer paperwork — not control status" },
  ]),
  mustScoreJson: mustScore(
    "Risk registers track hazards, ratings, controls, owners, residual risk, and review dates.",
    "Living registers beat annual shelfware.",
    "Link register entries to CAPA and MoC.",
    "Prioritize by risk, not by ease of paperwork.",
    "Stale residual-risk ratings after changes are false assurance.",
    "Make critical controls visible in the register.",
    "Do not hide catastrophic rare events under clutter.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "register is annual-only with no owners", pick: "assign owners and review cadence" },
    { ifStem: "MoC landed but residual risk unchanged", pick: "update the register entry" },
    { ifStem: "easy items crowd out high risk", pick: "re-prioritize by risk" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "critical control has no register owner", pick: "name an owner" },
  ),

  brief: `A risk register is the living log of identified risks: source, existing controls, likelihood/severity, residual after treatment, owner, review date, and status. It is not a 1904 log, not a PHA, not a JHA, and not a policy. MoC and monitoring update it. Hierarchy still decides treatment â a row number does not. If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
A risk register is the living log of identified risks: source, existing controls, likelihood/severity, residual after treatment, owner, review date, and status. It is not a 1904 log, not a PHA, not a JHA, and not a policy. MoC and monitoring update it. Hierarchy still decides treatment â a row number does not. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
A plant manager wants the risk register to âprove we are legalâ and to replace the OSHA 300, the PHA worksheet, and the insurance submission. You are the CSP. The question is what a register is allowed to be. Oil-and-gas skin: A production manager wants the well-work risk register to âprove we are legalâ and to replace the OSHA 300, the HAZOP, and the insurance submission. You are the CSP. Construction skin: A PM wants the site risk register to âprove we are legalâ and to replace the OSHA 300, the JHA pack, and the OCIP submission. You are the CSP. Work the case: Row 17: Mixer 4 nip. Existing: partial guard. L/S intolerable. Treatment: full interlock this quarter (engineering), sleeves residual. Owner: Engineering. Review: after commissioning and quarterly defeat checks. Do not merge this row into the 300 log. Do not claim the row is a HAZOP node. If Finance wants to âcloseâ the row by raising a deductible, the residual energy is still open. Classic traps: Using the register as the OSHA 300 or as medical records.; Closing a row because insurance was bound.; Never reviewing dates — a frozen spreadsheet of 2019 scores.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for registers. Verify whether a higher system or design fix is still open. Contrast labels: Risk register is actually Living log of residual risk, owners, and review dates; OSHA 300 / 301 is actually Injury/illness recordkeeping — different legal object; PHA / JHA worksheet is actually Analysis that feeds the register, not the register itself; Insurance schedule is actually Transfer paperwork — not control status. If the stem shows register is annual-only with no owners, pick assign owners and review cadence. If the stem shows MoC landed but residual risk unchanged, pick update the register entry. If the stem shows easy items crowd out high risk, pick re-prioritize by risk. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows critical control has no register owner, pick name an owner. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Risk register — is it the 300 log? Can insurance close a row sits in CSP-11 Domain 3 Risk Management. The exam tests whether you apply the rule when a package already looks complete. Core rule: A risk register is the living log of identified risks: source, existing controls, likelihood/severity, residual after treatment, owner, review date, and status. It is not a 1904 log, not a PHA, not a JHA, and not a policy. MoC and monitoring update it. Hierarchy still decides treatment â a row number does not. Field context: A plant manager wants the risk register to âprove we are legalâ and to replace the OSHA 300, the PHA worksheet, and the insurance submission. You are the CSP. The question is what a register is allowed to be. The oil-and-gas skin shifts the same decision into production pressure: A production manager wants the well-work risk register to âprove we are legalâ and to replace the OSHA 300, the HAZOP, and the insurance submission. You are the CSP. The construction skin shifts it into schedule and trade stacking: A PM wants the site risk register to âprove we are legalâ and to replace the OSHA 300, the JHA pack, and the OCIP submission. You are the CSP. Model caption for this class: Register columns: ID | Hazard/event | Existing controls | L | S | Residual | Treatment (hierarchy) | Owner | Review date | Status. Side stamps: ânot 300 log,â ânot PHA,â ânot insurance.â Caption: living log of residual, not a trophy spreadsheet. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Risk registers track hazards, ratings, controls, owners, residual risk, and review dates. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Living registers beat annual shelfware. (3) Link register entries to CAPA and MoC. (4) Prioritize by risk, not by ease of paperwork. (5) Stale residual-risk ratings after changes are false assurance. (6) Make critical controls visible in the register. (7) Do not hide catastrophic rare events under clutter. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Row 17: Mixer 4 nip. Existing: partial guard. L/S intolerable. Treatment: full interlock this quarter (engineering), sleeves residual. Owner: Engineering. Review: after commissioning and quarterly defeat checks. Do not merge this row into the 300 log. Do not claim the row is a HAZOP node. If Finance wants to âcloseâ the row by raising a deductible, the residual energy is still open. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Using the register as the OSHA 300 or as medical records.; Closing a row because insurance was bound.; Never reviewing dates — a frozen spreadsheet of 2019 scores.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Risk register” is really Living log of residual risk, owners, and review dates; “OSHA 300 / 301” is really Injury/illness recordkeeping — different legal object; “PHA / JHA worksheet” is really Analysis that feeds the register, not the register itself; “Insurance schedule” is really Transfer paperwork — not control status. Stem-if-then map: if register is annual-only with no owners → assign owners and review cadence; if MoC landed but residual risk unchanged → update the register entry; if easy items crowd out high risk → re-prioritize by risk; if two answers work → higher hierarchy / system / design; if critical control has no register owner → name an owner. Scoring favors evidence, owners, verification, and hierarchy-smart controls on registers. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Risk register — is it the 300 log? Can insurance close a row?",
  cardBack:
    "Living residual log with owners and dates. Not 1904, not PHA, not a policy. Insurance does not close energy. Hierarchy treats the row. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence says the register is a living residual log with owners/review dates, and it is not a 300 log, PHA, or insurance close-out.",
};

export const items: ClassItem[] = [
  exam(T, "Manager wants the risk register to replace the OSHA 300 because “both list harm.” Best CSP position?", [
    "Accept — one log is lean.",
    "Reject: the register is not 1904 recordkeeping. Keep both objects; do not hide cases in a risk spreadsheet.",
    "Accept if residual is green.",
    "Accept if the broker co-signs.",
  ], 1, "TOOL: register ≠ 300 log.", "TOOL", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "A risk register is the living log of identified risks: source, existing controls, likelihood/severity, residual after treatment, owner, review date, and status. It is not a 1904 log, not a PHA, not a JHA, and not a po... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A register row for an open nip is marked Closed because the umbrella was bound. Correct status?", [
    "Closed — transfer completes Treat.",
    "Open: transfer does not install the guard. Residual energy still needs hierarchy treatment and a real close-out.",
    "Closed if the deductible is high (retain).",
    "Closed if RPN < 100.",
  ], 1, "FIN: insurance does not close an energy row.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "A risk register is the living log of identified risks: source, existing controls, likelihood/severity, residual after treatment, owner, review date, and status. It is not a 1904 log, not a PHA, not a JHA, and not a po... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "PHA nodes were never copied into the register. The HAZOP exists as a 2019 PDF. Problem?", [
    "None — PHA replaces the register.",
    "The register should reflect significant process residuals with owners and review dates; a stale PDF is not living residual management. PHA still remains the analysis.",
    "None if JHAs are in the register instead.",
    "None if TRIR is in the register instead.",
  ], 1, "STEM: analysis feeds the living log; it does not immortalize it.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "A risk register is the living log of identified risks: source, existing controls, likelihood/severity, residual after treatment, owner, review date, and status. It is not a 1904 log, not a PHA, not a JHA, and not a po... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Two treatments listed on one row: posters this week or an interlock this quarter. Both funded. Which should the register show as primary treatment?", [
    "Posters — faster close.",
    "Interlock (engineering); posters are not the hierarchy treatment.",
    "Whichever paints the cell greener this Friday.",
    "The umbrella line.",
  ], 1, "HIER: register treatment column still climbs the pyramid.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "A risk register is the living log of identified risks: source, existing controls, likelihood/severity, residual after treatment, owner, review date, and status. It is not a 1904 log, not a PHA, not a JHA, and not a po... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Last sentence: MoC yesterday increased mixer speed 30%. The nip row review date is in 11 months. Best action?", [
    "Wait for the review date.",
    "Reopen/review the row now — significant MoC pulls the date forward.",
    "Close the row as “accepted operations.”",
    "Move the row to the 300 log.",
  ], 1, "STEM: MoC updates the register now.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "A risk register is the living log of identified risks: source, existing controls, likelihood/severity, residual after treatment, owner, review date, and status. It is not a 1904 log, not a PHA, not a JHA, and not a po... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A register likelihood cell is filled with last year’s TRIR of 1.2 and treated as 1.2% chance of amputation on that machine. Error?", [
    "None — TRIR is residual likelihood.",
    "FORM/TOOL: TRIR is a site rate, not a machine amputation probability, and 1.2 is not 1.2%.",
    "UNIT — they used meters.",
    "PELTLV — they used a PEL.",
  ], 1, "FORM: do not mint probabilities from TRIR.", "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "A risk register is the living log of identified risks: source, existing controls, likelihood/severity, residual after treatment, owner, review date, and status. It is not a 1904 log, not a PHA, not a JHA, and not a po... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Worker audiograms are pasted into a widely shared risk register “for completeness.” Issue?", [
    "Fine — registers need medical detail.",
    "Privacy/retention: medical records are not risk-register fields; keep residual noise risk without PHI.",
    "Fine if residual is yellow.",
    "Fine if encrypted as a screenshot.",
  ], 1, "STEM: wrong object for medical data (retention/privacy).", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "A risk register is the living log of identified risks: source, existing controls, likelihood/severity, residual after treatment, owner, review date, and status. It is not a 1904 log, not a PHA, not a JHA, and not a po... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Owner column is blank on every intolerable row. Status is “green.” Adequacy?", [
    "Fine — color implies ownership.",
    "Inadequate: no owner, no review date, and green on intolerable is a false close.",
    "Fine if the insurer is the implied owner.",
    "Fine if RPN was used.",
  ], 1, "STEM: owners and honest status are the point of a register.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "A risk register is the living log of identified risks: source, existing controls, likelihood/severity, residual after treatment, owner, review date, and status. It is not a 1904 log, not a PHA, not a JHA, and not a po... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "An amputation occurs on a row marked green. Team delays OSHA to “recolor the register.” Clock?", [
    "Recoloring pauses 1904.",
    "Amputation: 24 hours to OSHA. Register hygiene is not the clock.",
    "8 hours because the row was green.",
    "7 days.",
  ], 1, "TIME: 24-hour amputation notification.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "A risk register is the living log of identified risks: source, existing controls, likelihood/severity, residual after treatment, owner, review date, and status. It is not a 1904 log, not a PHA, not a JHA, and not a po... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a pharma suite changeover. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Best link from a register row back to analysis.", [
    "A motivational quote.",
    "Pointer to the JHA or PHA/FTA that identified the residual — the register does not replace that tool.",
    "The insurance binder only.",
    "The 300 log line only.",
  ], 1, "TOOL: register is the log; analysis remains the method.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "A risk register is the living log of identified risks: source, existing controls, likelihood/severity, residual after treatment, owner, review date, and status. It is not a 1904 log, not a PHA, not a JHA, and not a po... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Capital cap this quarter is $20k. Full interlock $50k; partial engineered barrier $18k; posters $2k. Register treatment to record now?", [
    "Posters for 100% “coverage.”",
    "Partial engineered barrier now, residual named, full interlock scheduled — not posters.",
    "Umbrella with the $20k.",
    "Close the row as transferred.",
  ], 1, "STEM capped capital. Remaining highest row still beats décor.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "A risk register is the living log of identified risks: source, existing controls, likelihood/severity, residual after treatment, owner, review date, and status. It is not a 1904 log, not a PHA, not a JHA, and not a po... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Which pair of financial strategies must not be used to paint an energy row Closed?", [
    "Avoid the activity and engineer a substitute process.",
    "Retain a high deductible and transfer via umbrella while the nip stays open.",
    "Reduce by substitution and then retain true residual.",
    "Avoid the optional job and monitor that it stayed avoided.",
  ], 1, "FIN: retain+transfer without reduce/avoid does not close energy. Two financing strategies in one stem.", "FIN", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Risk assessment, JHA/PHA public practice",
      fieldTakeaway: "A risk register is the living log of identified risks: source, existing controls, likelihood/severity, residual after treatment, owner, review date, and status. It is not a 1904 log, not a PHA, not a JHA, and not a po... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
