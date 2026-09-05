import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D2.04";

export const classFields: ClassFields = {
  hook: "A lathe takes a fingertip at 21:00 Friday. The supervisor writes “not paying attention” and goes home. You are the CSP. The question is clocks, causes, and whether the guard was ever in the story.",
  hookOilGas: `A tong takes a fingertip at 21:00 Friday on a land rig. The company man writes ânot paying attentionâ and goes home. You are the CSP. The question is clocks, causes, and whether the guard was ever in the story.`,
  hookConstruction: `A chop saw takes a fingertip at 21:00 Friday. The foreman writes ânot paying attentionâ and goes home. You are the CSP. The question is clocks, causes, and whether the guard was ever in the story.`,
  rule: "Investigate to find system and design causes, not a scapegoat. OSHA 1904: fatality to OSHA in 8 hours; amputation / in-patient hospitalization / loss of an eye in 24 hours; record on the 300 in 7 calendar days. Weekends do not pause those clocks. Employee error is a finding only after barriers are examined.",
  modelCaption:
    "Timeline across the top: event → 8 h fatality / 24 h severe / 7 d record. Below: five-why / causal tree from energy and barriers backward — machine, MoC, supervision, then behavior last. Caption: if the first line is “human error,” you started at the wrong end.",
  workedCase:
    "Friday 21:00 amputation. Notify OSHA within 24 hours (not Monday). Record within 7 calendar days. Investigation: Why was the guard off? Why did production pressure outrank the interlock? Why was the interlock not in the LOTO/MoC? Retraining the operator without restoring the guard fails hierarchy and the investigation purpose.",
  trapsJson: traps(
    "Stopping at “employee inattention.”",
    "Using the 7-day 300 clock as the OSHA-notification clock.",
    "Waiting until Monday because the office was closed.",
  ),
  contrastJson: contrast([
    { looksLike: "Root cause = the operator", actually: "Usually a symptom; look at energy, design, MoC, incentives" },
    { looksLike: "8 hours", actually: "Fatality notification — not amputation" },
    { looksLike: "24 hours", actually: "Amputation, in-patient hospitalization, loss of an eye" },
    { looksLike: "7 calendar days", actually: "Record on the OSHA 300 — not the severe-injury call" },
  ]),
  mustScoreJson: mustScore(
    "Find systemic causes \u2014 not a single blame target.",
    "Preserve the scene and evidence before cleanup when safe.",
    "Five-why without evidence is storytelling.",
    "Corrective actions must address root causes with hierarchy preference.",
    "Timeline, people, process, equipment, and environment all get examined.",
    "Interim controls protect people while the investigation runs.",
    "Share lessons without creating a blame theater.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "only retraining is proposed after a design failure", pick: "fix the system/design cause" },
    { ifStem: "the scene is being cleaned before photos", pick: "preserve evidence when safe" },
    { ifStem: "five-why stops at operator error", pick: "keep asking for system factors" },
    { ifStem: "interim risk remains high", pick: "install interim controls immediately" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
  ),

  brief: `Investigate to find system and design causes, not a scapegoat. OSHA 1904: fatality to OSHA in 8 hours; amputation / in-patient hospitalization / loss of an eye in 24 hours; record on the 300 in 7 calendar days. Weekends do not pause those clocks. Employee error is a finding only after barriers are examined. If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Investigate to find system and design causes, not a scapegoat. OSHA 1904: fatality to OSHA in 8 hours; amputation / in-patient hospitalization / loss of an eye in 24 hours; record on the 300 in 7 calendar days. Weekends do not pause those clocks. Employee error is a finding only after barriers are examined. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
A lathe takes a fingertip at 21:00 Friday. The supervisor writes ânot paying attentionâ and goes home. You are the CSP. The question is clocks, causes, and whether the guard was ever in the story. Oil-and-gas skin: A tong takes a fingertip at 21:00 Friday on a land rig. The company man writes ânot paying attentionâ and goes home. You are the CSP. Construction skin: A chop saw takes a fingertip at 21:00 Friday. The foreman writes ânot paying attentionâ and goes home. You are the CSP. Work the case: Friday 21:00 amputation. Notify OSHA within 24 hours (not Monday). Record within 7 calendar days. Investigation: Why was the guard off? Why did production pressure outrank the interlock? Why was the interlock not in the LOTO/MoC? Retraining the operator without restoring the guard fails hierarchy and the investigation purpose. Classic traps: Stopping at “employee inattention.”; Using the 7-day 300 clock as the OSHA-notification clock.; Waiting until Monday because the office was closed.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for investigation. Verify whether a higher system or design fix is still open. Contrast labels: Root cause = the operator is actually Usually a symptom; look at energy, design, MoC, incentives; 8 hours is actually Fatality notification — not amputation; 24 hours is actually Amputation, in-patient hospitalization, loss of an eye; 7 calendar days is actually Record on the OSHA 300 — not the severe-injury call. If the stem shows only retraining is proposed after a design failure, pick fix the system/design cause. If the stem shows the scene is being cleaned before photos, pick preserve evidence when safe. If the stem shows five-why stops at operator error, pick keep asking for system factors. If the stem shows interim risk remains high, pick install interim controls immediately. If the stem shows two answers work, pick higher hierarchy / system / design. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Investigation — fingertip Friday 21:00. First clock and first cause question sits in CSP-11 Domain 2 Management Systems. The exam tests whether you apply the rule when a package already looks complete. Core rule: Investigate to find system and design causes, not a scapegoat. OSHA 1904: fatality to OSHA in 8 hours; amputation / in-patient hospitalization / loss of an eye in 24 hours; record on the 300 in 7 calendar days. Weekends do not pause those clocks. Employee error is a finding only after barriers are examined. Field context: A lathe takes a fingertip at 21:00 Friday. The supervisor writes ânot paying attentionâ and goes home. You are the CSP. The question is clocks, causes, and whether the guard was ever in the story. The oil-and-gas skin shifts the same decision into production pressure: A tong takes a fingertip at 21:00 Friday on a land rig. The company man writes ânot paying attentionâ and goes home. You are the CSP. The construction skin shifts it into schedule and trade stacking: A chop saw takes a fingertip at 21:00 Friday. The foreman writes ânot paying attentionâ and goes home. You are the CSP. Model caption for this class: Timeline across the top: event â 8 h fatality / 24 h severe / 7 d record. Below: five-why / causal tree from energy and barriers backward â machine, MoC, supervision, then behavior last. Caption: if the first line is âhuman error,â you started at the wrong end. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Find systemic causes — not a single blame target. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Preserve the scene and evidence before cleanup when safe. (3) Five-why without evidence is storytelling. (4) Corrective actions must address root causes with hierarchy preference. (5) Timeline, people, process, equipment, and environment all get examined. (6) Interim controls protect people while the investigation runs. (7) Share lessons without creating a blame theater. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Friday 21:00 amputation. Notify OSHA within 24 hours (not Monday). Record within 7 calendar days. Investigation: Why was the guard off? Why did production pressure outrank the interlock? Why was the interlock not in the LOTO/MoC? Retraining the operator without restoring the guard fails hierarchy and the investigation purpose. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Stopping at “employee inattention.”; Using the 7-day 300 clock as the OSHA-notification clock.; Waiting until Monday because the office was closed.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Root cause = the operator” is really Usually a symptom; look at energy, design, MoC, incentives; “8 hours” is really Fatality notification — not amputation; “24 hours” is really Amputation, in-patient hospitalization, loss of an eye; “7 calendar days” is really Record on the OSHA 300 — not the severe-injury call. Stem-if-then map: if only retraining is proposed after a design failure → fix the system/design cause; if the scene is being cleaned before photos → preserve evidence when safe; if five-why stops at operator error → keep asking for system factors; if interim risk remains high → install interim controls immediately; if two answers work → higher hierarchy / system / design. Scoring favors evidence, owners, verification, and hierarchy-smart controls on investigation. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Investigation — fingertip Friday 21:00. First clock and first cause question?",
  cardBack:
    "Amputation to OSHA in 24 hours (fatality 8 h; 300 log 7 calendar days). Causes start at energy and missing barriers, not “inattention.” Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence hits 8 h fatality / 24 h severe / 7 d record and says investigations chase system and design causes, not a scapegoat.",
};

export const items: ClassItem[] = [
  exam(T, "A chop-saw amputation occurs at 21:00 Friday. The office opens Monday at 07:00. When must OSHA be notified?", [
    "Monday 07:00 — offices were closed.",
    "Within 24 hours of the amputation; the weekend does not pause 1904.",
    "Within 8 hours — all severe injuries use the fatality clock.",
    "Within 7 calendar days when the 300 is updated.",
  ], 1, "TIME: amputation is a 24-hour OSHA report. 8 hours is fatality. 7 days is recording. Not business hours.", "TIME", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Investigate to find system and design causes, not a scapegoat. OSHA 1904: fatality to OSHA in 8 hours; amputation / in-patient hospitalization / loss of an eye in 24 hours; record on the 300 in 7 calendar days. Weeken... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A worker dies at 03:00 Sunday on a shutdown. Best notification clock?", [
    "24 hours — same as amputation.",
    "8 hours from the fatality.",
    "7 calendar days.",
    "February 1 with the 300A.",
  ], 1, "TIME: fatality → OSHA within 8 hours.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Investigate to find system and design causes, not a scapegoat. OSHA 1904: fatality to OSHA in 8 hours; amputation / in-patient hospitalization / loss of an eye in 24 hours; record on the 300 in 7 calendar days. Weeken... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Investigation first line: “Employee failed to pay attention.” The guard had been removed for a changeover three weeks ago and never replaced. Best CSP direction?", [
    "Accept inattention as root cause and close.",
    "Rework causes around why the guard was absent and why production ran without it; inattention is not the system cause.",
    "Close with a stretching video.",
    "Raise the insurance limit and stop.",
  ], 1, "Investigations that stop at the person miss the open engineering row.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Investigate to find system and design causes, not a scapegoat. OSHA 1904: fatality to OSHA in 8 hours; amputation / in-patient hospitalization / loss of an eye in 24 hours; record on the 300 in 7 calendar days. Weeken... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "ER treats a crushed hand and releases the worker the same night. No admission. No amputation. What 1904 notification is required?", [
    "24-hour OSHA notification because any ER visit is hospitalization.",
    "No 8/24-hour OSHA notification for treat-and-release without amputation; still decide 300 recording within 7 calendar days.",
    "8-hour notification because it was after midnight.",
    "Notify only if TRIR will exceed 1.0.",
  ], 1, "TIME: in-patient admission (or amputation / loss of eye) drives 24 hours. ER release is not automatic notification.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Investigate to find system and design causes, not a scapegoat. OSHA 1904: fatality to OSHA in 8 hours; amputation / in-patient hospitalization / loss of an eye in 24 hours; record on the 300 in 7 calendar days. Weeken... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A team runs an FMEA after a press incident and funds “better warning labels” because detection RPN was worst. The light curtain was unplugged. What went wrong?", [
    "Nothing — RPN ranked the right CAPA.",
    "Wrong tool use after an event: detection scoring hid the defeated engineering barrier.",
    "They should have used ISO 14001 aspects.",
    "They should have used a 3 dB exchange rate.",
  ], 1, "TOOL: post-event FMEA detection is not a substitute for barrier analysis.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Investigate to find system and design causes, not a scapegoat. OSHA 1904: fatality to OSHA in 8 hours; amputation / in-patient hospitalization / loss of an eye in 24 hours; record on the 300 in 7 calendar days. Weeken... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Finance says do not investigate deeply because the claim will be covered. Best CSP position?", [
    "Accept — transfer ends the learning duty.",
    "Reject: insurance finances the loss; it does not find or close the causal path.",
    "Raise the deductible instead of investigating.",
    "Call the reserve a leading indicator.",
  ], 1, "FIN: share/transfer is not investigation or control.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Investigate to find system and design causes, not a scapegoat. OSHA 1904: fatality to OSHA in 8 hours; amputation / in-patient hospitalization / loss of an eye in 24 hours; record on the 300 in 7 calendar days. Weeken... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "The last sentence: design freeze was last month; only field-installable barriers remain. Investigation of an in-running nip. Best recommendation set?", [
    "Specify a new process chemistry that needs a new machine.",
    "Bolt-on guard / presence sensing that fits the frozen frame, plus MoC and supervision; awareness cards are residual.",
    "Awareness cards only — freeze means no hardware.",
    "A pizza contest.",
  ], 1, "STEM closed substitution of the machine. Remaining engineering still beats admin.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Investigate to find system and design causes, not a scapegoat. OSHA 1904: fatality to OSHA in 8 hours; amputation / in-patient hospitalization / loss of an eye in 24 hours; record on the 300 in 7 calendar days. Weeken... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Which recommendation is weakest while an interlock can still be restored?", [
    "Restore and functionally test the interlock before restart.",
    "Redesign changeover so the guard need not come off.",
    "A laminated “be careful” card and a new slogan.",
    "Add the guard status to the start-up checklist after the hardware is back.",
  ], 2, "PPE/admin slogans lose to restored engineering.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Investigate to find system and design causes, not a scapegoat. OSHA 1904: fatality to OSHA in 8 hours; amputation / in-patient hospitalization / loss of an eye in 24 hours; record on the 300 in 7 calendar days. Weeken... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A recordable sprain happened Monday. Today is the following Tuesday (8 days later). The 300 line is still blank because “we investigate first.” Problem?", [
    "None — investigation may delay recording indefinitely.",
    "1904 requires recording within 7 calendar days of receiving information that a recordable occurred; investigation is not a pause button.",
    "Recording is due in 8 hours.",
    "Recording is due only on the 300A.",
  ], 1, "TIME: 7 calendar days to record. You can update later if facts change.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Investigate to find system and design causes, not a scapegoat. OSHA 1904: fatality to OSHA in 8 hours; amputation / in-patient hospitalization / loss of an eye in 24 hours; record on the 300 in 7 calendar days. Weeken... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Samples after a vapor release are 50% of PEL and 110% of the TLV the site uses internally. The investigation report says “no exposure issue because OSHA was not exceeded.” Best correction?", [
    "Keep the sentence — PEL is the only number.",
    "Report against both: legal PEL and the site’s TLV criterion; neither replaces the process-failure cause.",
    "Skip industrial hygiene; this is a culture event only.",
    "Convert mg/m³ without MW.",
  ], 1, "PELTLV: an investigation that hides the TLV criterion you adopted is incomplete.", "PELTLV",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Investigate to find system and design causes, not a scapegoat. OSHA 1904: fatality to OSHA in 8 hours; amputation / in-patient hospitalization / loss of an eye in 24 hours; record on the 300 in 7 calendar days. Weeken... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Someone computes whether to investigate by checking if one case changes TRIR, using (1 × 100,000) / 200,000 hours. Error?", [
    "None — 100,000 is acceptable for small sites.",
    "FORM: TRIR is (N × 200,000) / EH. The 100,000 constant is wrong and is not a gate for investigation.",
    "They should have used median injury cost.",
    "They should have used 24.45.",
  ], 1, "FORM: 200,000 hours is the TRIR constant. Investigation is not optional because a rate barely moves.", "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Investigate to find system and design causes, not a scapegoat. OSHA 1904: fatality to OSHA in 8 hours; amputation / in-patient hospitalization / loss of an eye in 24 hours; record on the 300 in 7 calendar days. Weeken... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A loss-of-eye occurs at 10:00. At 16:00 the same day a fatality occurs on another unit. Which statement is correct?", [
    "Both use the 24-hour clock.",
    "Fatality: 8 hours from 16:00. Loss of eye: 24 hours from 10:00. Separate 1904 notification duties.",
    "One call at 7 days covers both.",
    "Only the fatality is reportable.",
  ], 1, "TIME: two different clocks, two events. Do not let the worse event erase the 24-hour duty already running.", "TIME", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Investigate to find system and design causes, not a scapegoat. OSHA 1904: fatality to OSHA in 8 hours; amputation / in-patient hospitalization / loss of an eye in 24 hours; record on the 300 in 7 calendar days. Weeken... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
