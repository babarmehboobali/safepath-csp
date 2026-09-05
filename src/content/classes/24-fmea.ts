import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D2.06";

export const classFields: ClassFields = {
  hook: "A design FMEA lists “operator fails to don respirator,” RPN 720, and funds a better cartridge. The chemical can still be substituted. You are the CSP. The question is what RPN is allowed to decide.",
  hookOilGas: `A wellhead FMEA lists âoperator fails to don respirator,â RPN 720, and funds a better cartridge. The treatment chemical can still be substituted. You are the CSP. The question is what RPN is allowed to decide.`,
  hookConstruction: `A coating FMEA lists âoperator fails to don respirator,â RPN 720, and funds a better cartridge. A non-isocyanate spec is still allowed. You are the CSP. The question is what RPN is allowed to decide.`,
  rule: "FMEA is bottom-up: item → function → failure mode → effects → causes → controls. RPN = Severity × Occurrence × Detection (typical 1–10). RPN ranks rows; it is not a probability and not permission to skip hierarchy. Use FTA/bowtie when combinations of independent barriers are the story.",
  modelCaption:
    "Row anatomy: Item | Mode | Effect | S | Cause | O | Current controls | D | RPN=S×O×D | Recommended action at highest open row. Caption: lowering D with a brighter label is the attractive wrong action if S can still fall by design.",
  workedCase:
    "Gearbox leak. S=8 (slip/fire), O=6, D=9 (hidden) → RPN=432. Detection camera drops D to 3 (RPN=144) but leaves oil on the floor. Specifying a sealed design or containment drops S/O. Prefer design. If two independent lubes must fail to lose cooling, stop using FMEA as the only tool — that is FTA.",
  trapsJson: traps(
    "Treating RPN as P(failure).",
    "Funding detection because it is the cheapest RPN lever.",
    "Using FMEA on an AND of two SIS loops.",
  ),
  contrastJson: contrast([
    { looksLike: "High RPN", actually: "A ranking flag — still apply hierarchy to the action" },
    { looksLike: "Lower D", actually: "Better detection, not a lower hazard" },
    { looksLike: "FTA", actually: "Top-down combinations; no S×O×D" },
    { looksLike: "Bowtie / safety case", actually: "Barrier demonstration, not a component spreadsheet" },
  ]),
  mustScoreJson: mustScore(
    "FMEA ranks failure modes by severity, occurrence, and detection (RPN or action priority).",
    "High severity still demands action even if occurrence looks low.",
    "Detection controls are not as strong as prevention controls.",
    "FMEA must be able to change design or process \u2014 not only document risk.",
    "Update FMEA after MoC; stale FMEA is false assurance.",
    "Do not use FMEA RPN to justify skipping a still-open higher hierarchy control.",
    "Wrong tool: forcing FTA when the need is component failure mode coverage.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "severity is extreme but occurrence is scored low", pick: "still prioritize action on severity" },
    { ifStem: "only detection is improved while prevention is open", pick: "prefer prevention/design controls" },
    { ifStem: "FMEA is filed after startup with no actions", pick: "reject \u2014 FMEA must drive change" },
    { ifStem: "a higher hierarchy control is still open", pick: "do not let RPN ratify PPE-first" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
  ),

  brief: `FMEA is bottom-up: item â function â failure mode â effects â causes â controls. RPN = Severity Ã Occurrence Ã Detection (typical 1â10). RPN ranks rows; it is not a probability and not permission to skip hierarchy. Use FTA/bowtie when combinations of independent barriers are the story. If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
FMEA is bottom-up: item â function â failure mode â effects â causes â controls. RPN = Severity Ã Occurrence Ã Detection (typical 1â10). RPN ranks rows; it is not a probability and not permission to skip hierarchy. Use FTA/bowtie when combinations of independent barriers are the story. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
A design FMEA lists âoperator fails to don respirator,â RPN 720, and funds a better cartridge. The chemical can still be substituted. You are the CSP. The question is what RPN is allowed to decide. Oil-and-gas skin: A wellhead FMEA lists âoperator fails to don respirator,â RPN 720, and funds a better cartridge. The treatment chemical can still be substituted. You are the CSP. Construction skin: A coating FMEA lists âoperator fails to don respirator,â RPN 720, and funds a better cartridge. A non-isocyanate spec is still allowed. You are the CSP. Work the case: Gearbox leak. S=8 (slip/fire), O=6, D=9 (hidden) â RPN=432. Detection camera drops D to 3 (RPN=144) but leaves oil on the floor. Specifying a sealed design or containment drops S/O. Prefer design. If two independent lubes must fail to lose cooling, stop using FMEA as the only tool â that is FTA. Classic traps: Treating RPN as P(failure).; Funding detection because it is the cheapest RPN lever.; Using FMEA on an AND of two SIS loops.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for fmea. Verify whether a higher system or design fix is still open. Contrast labels: High RPN is actually A ranking flag — still apply hierarchy to the action; Lower D is actually Better detection, not a lower hazard; FTA is actually Top-down combinations; no S×O×D; Bowtie / safety case is actually Barrier demonstration, not a component spreadsheet. If the stem shows severity is extreme but occurrence is scored low, pick still prioritize action on severity. If the stem shows only detection is improved while prevention is open, pick prefer prevention/design controls. If the stem shows FMEA is filed after startup with no actions, pick reject \u2014 FMEA must drive change. If the stem shows a higher hierarchy control is still open, pick do not let RPN ratify PPE-first. If the stem shows two answers work, pick higher hierarchy / system / design. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `FMEA — RPN = ? What must it not decide sits in CSP-11 Domain 2 Management Systems. The exam tests whether you apply the rule when a package already looks complete. Core rule: FMEA is bottom-up: item â function â failure mode â effects â causes â controls. RPN = Severity Ã Occurrence Ã Detection (typical 1â10). RPN ranks rows; it is not a probability and not permission to skip hierarchy. Use FTA/bowtie when combinations of independent barriers are the story. Field context: A design FMEA lists âoperator fails to don respirator,â RPN 720, and funds a better cartridge. The chemical can still be substituted. You are the CSP. The question is what RPN is allowed to decide. The oil-and-gas skin shifts the same decision into production pressure: A wellhead FMEA lists âoperator fails to don respirator,â RPN 720, and funds a better cartridge. The treatment chemical can still be substituted. You are the CSP. The construction skin shifts it into schedule and trade stacking: A coating FMEA lists âoperator fails to don respirator,â RPN 720, and funds a better cartridge. A non-isocyanate spec is still allowed. You are the CSP. Model caption for this class: Row anatomy: Item | Mode | Effect | S | Cause | O | Current controls | D | RPN=SÃOÃD | Recommended action at highest open row. Caption: lowering D with a brighter label is the attractive wrong action if S can still fall by design. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) FMEA ranks failure modes by severity, occurrence, and detection (RPN or action priority). Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) High severity still demands action even if occurrence looks low. (3) Detection controls are not as strong as prevention controls. (4) FMEA must be able to change design or process — not only document risk. (5) Update FMEA after MoC; stale FMEA is false assurance. (6) Do not use FMEA RPN to justify skipping a still-open higher hierarchy control. (7) Wrong tool: forcing FTA when the need is component failure mode coverage. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Gearbox leak. S=8 (slip/fire), O=6, D=9 (hidden) â RPN=432. Detection camera drops D to 3 (RPN=144) but leaves oil on the floor. Specifying a sealed design or containment drops S/O. Prefer design. If two independent lubes must fail to lose cooling, stop using FMEA as the only tool â that is FTA. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Treating RPN as P(failure).; Funding detection because it is the cheapest RPN lever.; Using FMEA on an AND of two SIS loops.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “High RPN” is really A ranking flag — still apply hierarchy to the action; “Lower D” is really Better detection, not a lower hazard; “FTA” is really Top-down combinations; no S×O×D; “Bowtie / safety case” is really Barrier demonstration, not a component spreadsheet. Stem-if-then map: if severity is extreme but occurrence is scored low → still prioritize action on severity; if only detection is improved while prevention is open → prefer prevention/design controls; if FMEA is filed after startup with no actions → reject \u2014 FMEA must drive change; if a higher hierarchy control is still open → do not let RPN ratify PPE-first; if two answers work → higher hierarchy / system / design. Scoring favors evidence, owners, verification, and hierarchy-smart controls on fmea. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "FMEA — RPN = ? What must it not decide?",
  cardBack:
    "RPN = S × O × D. Ranks rows. Not a probability. Not permission to skip substitution/engineering. Combinations → FTA. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence states RPN = S × O × D, says it is a ranking aid, and names FTA/bowtie as the tool for independent-barrier combinations.",
  formulaSlug: "rpn",
};

export const items: ClassItem[] = [
  exam(T, "You are the CSP reviewing a live decision at a plastics compounding turnaround. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: S=8, O=7, D=9 on a 1–10 FMEA. RPN.", [
    "24 (sum).",
    "504 (product).",
    "8 (severity only).",
    "72 (S×O, ignore D).",
  ], 1, "FORM: RPN = S × O × D = 8×7×9 = 504. Adding is the classic miss.", "FORM", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "FMEA is bottom-up: item → function → failure mode → effects → causes → controls. RPN = Severity × Occurrence × Detection (typical 1–10). RPN ranks rows; it is not a probability and not permission to skip hierarchy. Us... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Worst RPN is “operator fails to don respirator.” Substitution of the isocyanate is still open. Best action?", [
    "Fund better cartridges — RPN has spoken.",
    "Specify the substitute; RPN must not outrank a still-open higher control.",
    "Fund a louder horn only.",
    "Fund insurance.",
  ], 1, "HIER: RPN is a ranking aid, not a hierarchy waiver.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "FMEA is bottom-up: item → function → failure mode → effects → causes → controls. RPN = Severity × Occurrence × Detection (typical 1–10). RPN ranks rows; it is not a probability and not permission to skip hierarchy. Us... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Two independent SIS loops must both fail for a catastrophic release. The team starts a DFMEA of each transmitter and never builds a tree. Problem?", [
    "None — FMEA covers combinations automatically.",
    "Wrong tool: the top event is an AND combination — use FTA (or bowtie/safety case), not RPN alone.",
    "They should have used Pareto of first aids.",
    "They should have used 14001 aspects.",
  ], 1, "TOOL: FTA vs FMEA. Combinations are not single-point RPN.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "FMEA is bottom-up: item → function → failure mode → effects → causes → controls. RPN = Severity × Occurrence × Detection (typical 1–10). RPN ranks rows; it is not a probability and not permission to skip hierarchy. Us... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A row has S=10 (fatality). O=2, D=2, RPN=40. Another row has S=3, O=8, D=8, RPN=192. Design freeze is not in effect. Best priority logic?", [
    "Always the higher RPN (192) first.",
    "Do not let a low RPN hide S=10; attack the catastrophic severity by design even if RPN is smaller.",
    "Ignore both and track TRIR.",
    "Average the RPNs.",
  ], 1, "STEM/HIER: many systems filter on high S before RPN. Catastrophic severity is not a 40.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "FMEA is bottom-up: item → function → failure mode → effects → causes → controls. RPN = Severity × Occurrence × Detection (typical 1–10). RPN ranks rows; it is not a probability and not permission to skip hierarchy. Us... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Which action reduces RPN the right way when a sealed design is still available?", [
    "Paint a brighter leak label (D only).",
    "Specify the sealed design (cuts S and/or O), then detection for residual.",
    "Add a daily smell test.",
    "Increase the liability limit.",
  ], 1, "Lower S/O by design. Detection is the cheap RPN cheat.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "FMEA is bottom-up: item → function → failure mode → effects → causes → controls. RPN = Severity × Occurrence × Detection (typical 1–10). RPN ranks rows; it is not a probability and not permission to skip hierarchy. Us... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A client asked for a safety-case bowtie on a major fire. The deliverable is an FMEA with RPNs. Best CSP comment?", [
    "Accept — RPN demonstrates barriers.",
    "Wrong method: a safety case/bowtie must show preventive and mitigative barriers around the top event; RPN tables are not that demonstration.",
    "Add more D scores.",
    "Replace S with TRIR.",
  ], 1, "TOOL: FMEA vs safety case/bowtie.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "FMEA is bottom-up: item → function → failure mode → effects → causes → controls. RPN = Severity × Occurrence × Detection (typical 1–10). RPN ranks rows; it is not a probability and not permission to skip hierarchy. Us... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Finance funds only the detection camera because it drops RPN below an internal threshold cheaper than a guard. The nip is still open. Best position?", [
    "Accept — the threshold is policy.",
    "Reject: crossing an RPN number with detection is not equivalent to engineering out the nip; insurance/cost is not the hierarchy.",
    "Raise the threshold instead.",
    "Transfer the nip risk.",
  ], 1, "FIN/HIER: cheap RPN reduction is not a control strategy.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "FMEA is bottom-up: item → function → failure mode → effects → causes → controls. RPN = Severity × Occurrence × Detection (typical 1–10). RPN ranks rows; it is not a probability and not permission to skip hierarchy. Us... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Last sentence: substitution closed yesterday. Remaining spend is an interlocked enclosure or a cartridge program that drops D. Best FMEA action?", [
    "Cartridges — D is a full RPN citizen.",
    "Interlocked enclosure — remaining engineering cuts S/O better than detection PPE.",
    "Neither — FMEA cannot proceed after freeze.",
    "A slogan.",
  ], 1, "STEM closed substitution. Highest remaining row is engineering.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "FMEA is bottom-up: item → function → failure mode → effects → causes → controls. RPN = Severity × Occurrence × Detection (typical 1–10). RPN ranks rows; it is not a probability and not permission to skip hierarchy. Us... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Analyst reports RPN as 8+5+4=17 and compares it to a 100 threshold copied from another plant that multiplies 1–10 scales. Errors?", [
    "None — sum and product are interchangeable.",
    "FORM: RPN is a product on a consistent scale; a sum cannot be compared to a product threshold.",
    "UNIT — they used meters.",
    "TIME — they used 8-hour TWA.",
  ], 1, "FORM: product vs sum, and mixed scales.", "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "FMEA is bottom-up: item → function → failure mode → effects → causes → controls. RPN = Severity × Occurrence × Detection (typical 1–10). RPN ranks rows; it is not a probability and not permission to skip hierarchy. Us... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A PFMEA on changeover lists “guard left off.” Best recommended action while a redesigned quick-change guard is still open?", [
    "Toolbox talk.",
    "Redesign changeover so the guard stays or interlocks to motion; talk is residual.",
    "A detection mirror.",
    "A bonus for speed.",
  ], 1, "HIER inside the recommended-action column.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "FMEA is bottom-up: item → function → failure mode → effects → causes → controls. RPN = Severity × Occurrence × Detection (typical 1–10). RPN ranks rows; it is not a probability and not permission to skip hierarchy. Us... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at an offshore fabrication night shift. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: When is FTA preferred over FMEA.", [
    "Ranking gasket leak modes on a new pump list.",
    "Quantifying a top event that requires two independent barriers to fail together.",
    "Scoring PPE donning on a packaging line as a single-point mode.",
    "Choosing poster colors.",
  ], 1, "TOOL: combinations → FTA. Single-point lists → FMEA.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "FMEA is bottom-up: item → function → failure mode → effects → causes → controls. RPN = Severity × Occurrence × Detection (typical 1–10). RPN ranks rows; it is not a probability and not permission to skip hierarchy. Us... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "After an amputation tied to a defeated interlock, the team starts a new FMEA instead of notifying OSHA because “RPN will prove it was minor.” Clock and method?", [
    "FMEA may delay notification until RPN < 100.",
    "Amputation: 24 hours to OSHA. Post-event FMEA is not the notification method and is a weak substitute for barrier analysis.",
    "8 hours for all FMEA events.",
    "7 days covers notification and FMEA.",
  ], 1, "TIME + TOOL: 24-hour clock; FMEA is not 1904.", "TIME", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "FMEA is bottom-up: item → function → failure mode → effects → causes → controls. RPN = Severity × Occurrence × Detection (typical 1–10). RPN ranks rows; it is not a probability and not permission to skip hierarchy. Us... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
