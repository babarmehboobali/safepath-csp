import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D2.01";

export const classFields: ClassFields = {
  hook: "Corporate audit dumped 84 \"gaps\" on a plant. Operations wants a training blitz for every line. You are the CSP. The question is which gaps are actually missing controls versus missing paperwork.",
  hookOilGas: `A drilling contractor audit dumped 84 "gaps" on a land pad. The superintendent wants a training blitz for every line. You are the CSP. The question is which gaps are actually missing controls versus missing paperwork.`,
  hookConstruction: `A GC audit dumped 84 "gaps" on a steel-erection site. The superintendent wants a training blitz for every line. You are the CSP. The question is which gaps are actually missing controls versus missing paperwork.`,
  rule: "A gap is current state versus a stated requirement (legal, standard, or your own SMS). Rank by residual risk and open hierarchy row, not by count of findings or ease of closing. Paper without a control is not a close.",
  modelCaption:
    "Two columns: Required (standard / legal / SMS clause) versus Current (what is actually in the field). Arrows labeled Gap. A third column ranks: high residual energy first, then missing engineering, then admin/PPE, then documentation-only.",
  workedCase:
    "ISO 45001 clause on operational planning versus a mixer with no interlock. The gap is the missing engineering, not the missing procedure number. Close by specifying the interlock, then update the procedure. A toolbox talk does not close an energy-control gap.",
  trapsJson: traps(
    "Treating every audit comment as an equal gap.",
    "Closing gaps with training while the hardware row is still open.",
    "Calling a missing logo on a poster a system gap equal to an unguarded nip.",
  ),
  contrastJson: contrast([
    { looksLike: "84-line audit spreadsheet", actually: "A finding list — not yet a prioritized gap analysis" },
    { looksLike: "Training for every row", actually: "Admin around gaps that may still be engineering" },
    { looksLike: "Missing document number", actually: "Documentation gap only if the control already exists in the field" },
    { looksLike: "Requirement with no owner", actually: "True SMS gap — assign accountable, then close the control" },
  ]),
  mustScoreJson: mustScore(
    "A gap is requirement versus actual, not opinion versus preference.",
    "Scope the standard or regulation before scoring gaps.",
    "Prioritize gaps by risk and hierarchy leverage, not by easy paperwork.",
    "Evidence beats anecdotes when closing a gap.",
    "An action without an owner and due date is not a closure plan.",
    "Re-audit after changes \u2014 checking a box is not verification.",
    "Do not invent requirements the blueprint does not impose.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "the standard is not yet scoped", pick: "define applicable requirements before scoring gaps" },
    { ifStem: "two gaps exist and one is paperwork-only", pick: "prioritize the risk/hierarchy gap" },
    { ifStem: "closure is claimed without evidence", pick: "require verification evidence" },
    { ifStem: "leadership wants only easy wins listed", pick: "keep high-risk gaps visible" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
  ),

  brief: `A gap is current state versus a stated requirement (legal, standard, or your own SMS). Rank by residual risk and open hierarchy row, not by count of findings or ease of closing. Paper without a control is not a close. If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
A gap is current state versus a stated requirement (legal, standard, or your own SMS). Rank by residual risk and open hierarchy row, not by count of findings or ease of closing. Paper without a control is not a close. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
Corporate audit dumped 84 "gaps" on a plant. Operations wants a training blitz for every line. You are the CSP. The question is which gaps are actually missing controls versus missing paperwork. Oil-and-gas skin: A drilling contractor audit dumped 84 "gaps" on a land pad. The superintendent wants a training blitz for every line. You are the CSP. Construction skin: A GC audit dumped 84 "gaps" on a steel-erection site. You are the CSP. Work the case: ISO 45001 clause on operational planning versus a mixer with no interlock. The gap is the missing engineering, not the missing procedure number. Close by specifying the interlock, then update the procedure. A toolbox talk does not close an energy-control gap. Classic traps: Treating every audit comment as an equal gap.; Closing gaps with training while the hardware row is still open.; Calling a missing logo on a poster a system gap equal to an unguarded nip.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for gap analysis. Verify whether a higher system or design fix is still open. Contrast labels: 84-line audit spreadsheet is actually A finding list — not yet a prioritized gap analysis; Training for every row is actually Admin around gaps that may still be engineering; Missing document number is actually Documentation gap only if the control already exists in the field; Requirement with no owner is actually True SMS gap — assign accountable, then close the control. If the stem shows the standard is not yet scoped, pick define applicable requirements before scoring gaps. If the stem shows two gaps exist and one is paperwork-only, pick prioritize the risk/hierarchy gap. If the stem shows closure is claimed without evidence, pick require verification evidence. If the stem shows leadership wants only easy wins listed, pick keep high-risk gaps visible. If the stem shows two answers work, pick higher hierarchy / system / design. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Gap analysis — requirement minus current, ranked how sits in CSP-11 Domain 2 Management Systems. The exam tests whether you apply the rule when a package already looks complete. Core rule: A gap is current state versus a stated requirement (legal, standard, or your own SMS). Rank by residual risk and open hierarchy row, not by count of findings or ease of closing. Paper without a control is not a close. Field context: Corporate audit dumped 84 "gaps" on a plant. Operations wants a training blitz for every line. You are the CSP. The question is which gaps are actually missing controls versus missing paperwork. The oil-and-gas skin shifts the same decision into production pressure: A drilling contractor audit dumped 84 "gaps" on a land pad. The superintendent wants a training blitz for every line. You are the CSP. The construction skin shifts it into schedule and trade stacking: A GC audit dumped 84 "gaps" on a steel-erection site. You are the CSP. Model caption for this class: Two columns: Required (standard / legal / SMS clause) versus Current (what is actually in the field). Arrows labeled Gap. A third column ranks: high residual energy first, then missing engineering, then admin/PPE, then documentation-only. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) A gap is requirement versus actual, not opinion versus preference. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Scope the standard or regulation before scoring gaps. (3) Prioritize gaps by risk and hierarchy leverage, not by easy paperwork. (4) Evidence beats anecdotes when closing a gap. (5) An action without an owner and due date is not a closure plan. (6) Re-audit after changes — checking a box is not verification. (7) Do not invent requirements the blueprint does not impose. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: ISO 45001 clause on operational planning versus a mixer with no interlock. The gap is the missing engineering, not the missing procedure number. Close by specifying the interlock, then update the procedure. A toolbox talk does not close an energy-control gap. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Treating every audit comment as an equal gap.; Closing gaps with training while the hardware row is still open.; Calling a missing logo on a poster a system gap equal to an unguarded nip.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “84-line audit spreadsheet” is really A finding list — not yet a prioritized gap analysis; “Training for every row” is really Admin around gaps that may still be engineering; “Missing document number” is really Documentation gap only if the control already exists in the field; “Requirement with no owner” is really True SMS gap — assign accountable, then close the control. Stem-if-then map: if the standard is not yet scoped → define applicable requirements before scoring gaps; if two gaps exist and one is paperwork-only → prioritize the risk/hierarchy gap; if closure is claimed without evidence → require verification evidence; if leadership wants only easy wins listed → keep high-risk gaps visible; if two answers work → higher hierarchy / system / design. Scoring favors evidence, owners, verification, and hierarchy-smart controls on gap analysis. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Gap analysis — requirement minus current, ranked how?",
  cardBack:
    "Name the baseline, evidence the field, rank by residual energy and open hierarchy row. Attractive wrong: train-out every audit line. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence says a gap is requirement versus current state and ranking is by residual risk / highest open control, not by finding count.",
};

export const items: ClassItem[] = [
  exam(T, "A plant has 60 audit lines. Ten are unguarded nips versus 1910.212. Fifty are missing logo dates on JSAs. Operations wants one training day to close the list. Best CSP ranking?", [
    "Close all 60 with the training day — equal findings.",
    "Specify guards on the nips first; treat logo dates as documentation after the energy is controlled.",
    "Close logo dates first because they are quick wins that raise the score.",
    "Average all 60 into a single medium risk.",
  ], 1, "A gap analysis ranks by residual energy and open hierarchy, not by count. Training does not close an unguarded nip.", "HIER", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "A gap is current state versus a stated requirement (legal, standard, or your own SMS). Rank by residual risk and open hierarchy row, not by count of findings or ease of closing. Paper without a control is not a close. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "ISO 45001 operational planning is the stated baseline. The mixer SOP is current and signed. The mixer still has no lid interlock. What is the actual gap?", [
    "Missing SOP revision — documentation only.",
    "Missing engineering isolation on the mixer — the SOP is not the control.",
    "Missing TRIR target.",
    "Missing insurance rider.",
  ], 1, "Current-state evidence is the field. A signed SOP around an open mixer is not a closed operational-planning gap.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "A gap is current state versus a stated requirement (legal, standard, or your own SMS). Rank by residual risk and open hierarchy row, not by count of findings or ease of closing. Paper without a control is not a close. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "The last sentence of the stem says the client specification freezes the existing vessel geometry; only bolt-on hardware and procedures remain. The gap versus the guarding clause is an open gearbox. Best close?", [
    "Redesign the entire drivetrain to eliminate the gearbox.",
    "Specify a bolt-on interlocked guard; update the procedure after install.",
    "Add a toolbox talk only.",
    "Raise the liability limit.",
  ], 1, "STEM closed full redesign. Remaining engineering still beats admin and risk financing.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "A gap is current state versus a stated requirement (legal, standard, or your own SMS). Rank by residual risk and open hierarchy row, not by count of findings or ease of closing. Paper without a control is not a close. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A team scores each gap with FMEA RPN and funds the row with the worst detection score: “operator may not see the poster.” An unguarded shear is scored lower because “everyone knows it.” What went wrong?", [
    "Nothing — RPN correctly ranked communication.",
    "Wrong tool use: detection scoring was allowed to outrank a still-open higher control.",
    "They should have used TRIR instead of RPN.",
    "They should have used a 24-hour OSHA clock.",
  ], 1, "RPN is an FMEA ranking aid, not a gap-priority license to skip hierarchy. TOOL + HIER.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "A gap is current state versus a stated requirement (legal, standard, or your own SMS). Rank by residual risk and open hierarchy row, not by count of findings or ease of closing. Paper without a control is not a close. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Personal samples are at 40% of the OSHA PEL and 90% of the ACGIH TLV. The gap baseline is the corporate SMS, which adopted TLV as internal criteria. Engineering wants to declare no gap because the PEL is met. Best CSP position?", [
    "No gap — PEL is the only legal number that matters.",
    "A gap remains against the stated SMS/TLV baseline; PEL met is not permission to ignore the requirement you claimed.",
    "Issue APRs and close the gap.",
    "Wait for OSHA to pick the baseline.",
  ], 1, "The baseline is the requirement you named. PEL vs TLV is not a free pass to skip a still-open SMS criterion.", "PELTLV",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "A gap is current state versus a stated requirement (legal, standard, or your own SMS). Rank by residual risk and open hierarchy row, not by count of findings or ease of closing. Paper without a control is not a close. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Finance offers to close a machine-guarding gap by increasing the property-and-casualty limit instead of funding guards. Best CSP position?", [
    "Accept insurance as equivalent to the 1910.212 gap close.",
    "Reject: insurance is risk financing, not a control. The gap is still the unguarded energy.",
    "Keep the open machine and raise the deductible.",
    "Call the premium a leading indicator of close-out.",
  ], 1, "Transfer via insurance does not close a guarding gap. FIN distractor next to a HIER decision.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "A gap is current state versus a stated requirement (legal, standard, or your own SMS). Rank by residual risk and open hierarchy row, not by count of findings or ease of closing. Paper without a control is not a close. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Which option is least useful as evidence of current state in a gap analysis of lockout?", [
    "Observed try-out on a sample of isolations this week.",
    "A signed corporate LOTO policy from last year.",
    "Lock stations, unique keys, and isolation points walked down on the unit.",
    "Energy-isolation drawings matched to field valves.",
  ], 1, "Intent on letterhead is not current-state evidence. The field and the isolation hardware are.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "A gap is current state versus a stated requirement (legal, standard, or your own SMS). Rank by residual risk and open hierarchy row, not by count of findings or ease of closing. Paper without a control is not a close. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A construction site gap list includes missing GFCI on temp power and missing stretch-and-flex attendance sheets. One close-out slot this week. Best use of the slot?", [
    "Print attendance sheets — they are the ISO documentation gap.",
    "Install GFCI / assured-grounding on the temp circuits; sheets do not control electrocution.",
    "Hold a stand-down on stretching.",
    "Photograph the existing posters.",
  ], 1, "Electrocution energy outranks a stretching log. Higher control / system first.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "A gap is current state versus a stated requirement (legal, standard, or your own SMS). Rank by residual risk and open hierarchy row, not by count of findings or ease of closing. Paper without a control is not a close. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "An internal audit wrote “no evidence of worker consultation” against ISO 45001. The plant already has a functioning joint committee with minutes and closed actions. Best classification?", [
    "Hardware gap — install more guards.",
    "Evidence/documentation gap: retrieve the minutes and participation records; do not invent a new committee.",
    "Legal gap under 1904.",
    "FTA cut-set gap.",
  ], 1, "If the control exists, the gap may be evidence, not a missing system. Do not overbuild.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "A gap is current state versus a stated requirement (legal, standard, or your own SMS). Rank by residual risk and open hierarchy row, not by count of findings or ease of closing. Paper without a control is not a close. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A gap versus 1910.147 is that contractors isolate with a tag only, no personal lock, on a multi-employer turnaround. Operations wants a pocket card. Best close?", [
    "Pocket card as the primary close.",
    "Require contractor personal locks and try-out under the host energy-control program; card is residual.",
    "Host insurance covering contractor injuries.",
    "A single shared crew lock with the supervisor’s name.",
  ], 1, "The requirement is isolation with personal lock and verify, not a card. Shared locks and insurance do not close it.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "A gap is current state versus a stated requirement (legal, standard, or your own SMS). Rank by residual risk and open hierarchy row, not by count of findings or ease of closing. Paper without a control is not a close. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Hours on the OSHA 300 are 180,000. Someone computes a “gap” because TRIR used 100,000 in the denominator and looks worse than last year. What is the error?", [
    "None — 100,000 is the CSP default.",
    "Wrong formula: TRIR uses 200,000 hours, not 100,000. Recalculate before calling a performance gap.",
    "They should have used mg/m³.",
    "They should have used a 3 dB exchange rate.",
  ], 1, "FORM: the 200,000 hour constant is not optional. A math error is not a safety-system gap.", "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "A gap is current state versus a stated requirement (legal, standard, or your own SMS). Rank by residual risk and open hierarchy row, not by count of findings or ease of closing. Paper without a control is not a close. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A night-shift amputation occurred at 22:00 Friday. On Monday at 10:00 the team is still arguing whether the gap analysis of the investigation program is due. Separately, when must OSHA be notified of the amputation?", [
    "Within 8 hours of the amputation.",
    "Within 24 hours of the amputation — the weekend does not pause the 1904 severe-injury clock.",
    "Within 7 calendar days only, same as the 300 log.",
    "Only if the TRIR will change.",
  ], 1, "TIME: amputation / in-patient hospitalization / loss of an eye is a 24-hour OSHA report. 8 hours is fatality. 7 days is the 300 recording clock.", "TIME", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "A gap is current state versus a stated requirement (legal, standard, or your own SMS). Rank by residual risk and open hierarchy row, not by count of findings or ease of closing. Paper without a control is not a close. Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
