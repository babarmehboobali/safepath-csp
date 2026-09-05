import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D2.10";

export const classFields: ClassFields = {
  hook: "A forklift fatality at 07:10 and an amputation at 19:40 land on the same day. The plant manager says “everything serious is 8 hours — call Area Office in the morning.” You are the CSP. The question is 1904.39: which clock is 8 hours and which is 24.",
  hookOilGas: `A vacuum-truck fatality at 07:10 and an amputation at 19:40 land on the same pad day. The superintendent says âeverything serious is 8 hours â call Area Office in the morning.â You are the CSP. The question is 1904.39: which clock is 8 hours and which is 24.`,
  hookConstruction: `A crane fatality at 07:10 and an amputation at 19:40 land on the same site day. The PM says âeverything serious is 8 hours â call Area Office in the morning.â You are the CSP. The question is 1904.39: which clock is 8 hours and which is 24.`,
  rule: "OSHA 1904.39 reporting is not recordkeeping and not a fire watch. Fatality: report to OSHA within 8 hours of learning. In-patient hospitalization, amputation, or loss of an eye: within 24 hours of learning. Recordable (1904.7) can still be a 300-log case without being 1904.39-reportable. First aid is neither. The clock starts when the employer knows (or should know) the outcome, including a later hospitalization. If two answers work, take the correct clock over “call in the morning,” and take higher hierarchy / system / design on the hazard that caused the case.",
  modelCaption:
    "Two clocks. Left amber: FATALITY — 8 HOURS. Right navy: HOSPITALIZATION / AMPUTATION / LOSS OF EYE — 24 HOURS. Under both: knowledge starts the clock. Side tags: 300 log ≠ 1904.39; first aid ≠ recordable ≠ reportable. Caption: 8 is not 24; morning is not a clock.",
  workedCase:
    "07:10 fatality: 8-hour clock. Do not wait for corporate legal at 09:00 if that blows 8 hours. 19:40 amputation: 24-hour clock — not 8. An in-patient hospitalization that begins the next morning still gets 24 hours from knowledge of the hospitalization, not from the original incident time if you only learned of the admission later. A restricted-duty sprain is recordable on the 300 log if it meets 1904.7; it is not a 1904.39 call. Heart attack at work may still need a fatality call — do not self-exempt because “it was medical.” After the call: investigate and control the source (hierarchy). The phone call is compliance, not a safeguard.",
  trapsJson: traps(
    "Using the 8-hour fatality clock for hospitalization, amputation, or loss of an eye (or 24 for a fatality).",
    "Treating every 300-log recordable as 1904.39-reportable, or treating first aid as a 24-hour call.",
    "Waiting for “morning legal review” while the statutory clock runs from knowledge.",
  ),
  contrastJson: contrast([
    { looksLike: "Fatality", actually: "Report to OSHA within 8 hours of learning" },
    { looksLike: "In-patient hospitalization, amputation, loss of an eye", actually: "Report within 24 hours of learning" },
    { looksLike: "300-log recordable (1904.7)", actually: "May not be 1904.39-reportable (e.g., restricted duty, stitches rules)" },
    { looksLike: "First aid", actually: "Neither 300-log recordable (as first aid) nor 1904.39" },
    { looksLike: "Fire-watch 30/60 min or STEL 15 min", actually: "Not reporting clocks — do not import them" },
  ]),
  mustScoreJson: mustScore(
    "1904 recordkeeping clocks: work-relatedness, severity, day counts.",
    "Count calendar days for days away/restricted \u2014 know what the stem asks.",
    "Privacy cases and employee privacy in records.",
    "Do not use first-aid vs recordable confusion to hide cases.",
    "New cases vs continuation rules matter.",
    "Electronic vs paper systems still need accuracy and access rules.",
    "Time traps: when the clock starts for reporting to government vs internal logs.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "first aid only truly applies", pick: "do not record as 301 injury if not required" },
    { ifStem: "days away counting asked", pick: "count calendar days per rule in stem" },
    { ifStem: "privacy case identifiers exposed", pick: "protect employee privacy" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "reporting deadline in last sentence", pick: "honor the TIME requirement" },
  ),

  brief: `OSHA 1904.39 reporting is not recordkeeping and not a fire watch. Fatality: report to OSHA within 8 hours of learning. In-patient hospitalization, amputation, or loss of an eye: within 24 hours of learning. Recordable (1904.7) can still be a 300-log case without being 1904.39-reportable. First aid is neither. The clock starts when the employer knows If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
OSHA 1904.39 reporting is not recordkeeping and not a fire watch. Fatality: report to OSHA within 8 hours of learning. In-patient hospitalization, amputation, or loss of an eye: within 24 hours of learning. Recordable (1904.7) can still be a 300-log case without being 1904.39-reportable. First aid is neither. The clock starts when the employer knows (or should know) the outcome, including a later hospitalization. If two answers work, take the correct clock over âcall in the morning,â and take higher hierarchy / system / design on the hazard that caused the case. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
A forklift fatality at 07:10 and an amputation at 19:40 land on the same day. The plant manager says âeverything serious is 8 hours â call Area Office in the morning.â You are the CSP. The question is 1904.39: which clock is 8 hours and which is 24. Oil-and-gas skin: A vacuum-truck fatality at 07:10 and an amputation at 19:40 land on the same pad day. The superintendent says âeverything serious is 8 hours â call Area Office in the morning.â You are the CSP. Construction skin: A crane fatality at 07:10 and an amputation at 19:40 land on the same site day. The PM says âeverything serious is 8 hours â call Area Office in the morning.â You are the CSP. Work the case: 07:10 fatality: 8-hour clock. Do not wait for corporate legal at 09:00 if that blows 8 hours. 19:40 amputation: 24-hour clock â not 8. An in-patient hospitalization that begins the next morning still gets 24 hours from knowledge of the hospitalization, not from the original incident time if you only learned of the admission later. A restricted-duty sprain is recordable on the 300 log if it meets 1904.7; it is not a 1904.39 call. Heart attack at work may still need a fatality call â do not self-exempt because âit was medical.â After the call: investigate and control the source (hierarchy). The phone call is compliance, not a safeguard. Classic traps: Using the 8-hour fatality clock for hospitalization, amputation, or loss of an eye (or 24 for a fatality).; Treating every 300-log recordable as 1904.39-reportable, or treating first aid as a 24-hour call.; Waiting for “morning legal review” while the statutory clock runs from knowledge.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for 1904 clocks. Verify whether a higher system or design fix is still open. Contrast labels: Fatality is actually Report to OSHA within 8 hours of learning; In-patient hospitalization, amputation, loss of an eye is actually Report within 24 hours of learning; 300-log recordable (1904.7) is actually May not be 1904.39-reportable (e.g., restricted duty, stitches rules); First aid is actually Neither 300-log recordable (as first aid) nor 1904.39; Fire-watch 30/60 min or STEL 15 min is actually Not reporting clocks — do not import them. If the stem shows first aid only truly applies, pick do not record as 301 injury if not required. If the stem shows days away counting asked, pick count calendar days per rule in stem. If the stem shows privacy case identifiers exposed, pick protect employee privacy. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows reporting deadline in last sentence, pick honor the TIME requirement. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `1904.39 — 8 hours or 24? Recordable = reportable sits in CSP-11 Domain 2 Management Systems. The exam tests whether you apply the rule when a package already looks complete. Core rule: OSHA 1904.39 reporting is not recordkeeping and not a fire watch. Fatality: report to OSHA within 8 hours of learning. In-patient hospitalization, amputation, or loss of an eye: within 24 hours of learning. Recordable (1904.7) can still be a 300-log case without being 1904.39-reportable. First aid is neither. The clock starts when the employer knows (or should know) the outcome, including a later hospitalization. If two answers work, take the correct clock over âcall in the morning,â and take higher hierarchy / system / design on the hazard that caused the case. Field context: A forklift fatality at 07:10 and an amputation at 19:40 land on the same day. The plant manager says âeverything serious is 8 hours â call Area Office in the morning.â You are the CSP. The question is 1904.39: which clock is 8 hours and which is 24. The oil-and-gas skin shifts the same decision into production pressure: A vacuum-truck fatality at 07:10 and an amputation at 19:40 land on the same pad day. The superintendent says âeverything serious is 8 hours â call Area Office in the morning.â You are the CSP. The construction skin shifts it into schedule and trade stacking: A crane fatality at 07:10 and an amputation at 19:40 land on the same site day. The PM says âeverything serious is 8 hours â call Area Office in the morning.â You are the CSP. Model caption for this class: Two clocks. Left amber: FATALITY â 8 HOURS. Right navy: HOSPITALIZATION / AMPUTATION / LOSS OF EYE â 24 HOURS. Under both: knowledge starts the clock. Side tags: 300 log â  1904.39; first aid â  recordable â  reportable. Caption: 8 is not 24; morning is not a clock. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) 1904 recordkeeping clocks: work-relatedness, severity, day counts. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Count calendar days for days away/restricted — know what the stem asks. (3) Privacy cases and employee privacy in records. (4) Do not use first-aid vs recordable confusion to hide cases. (5) New cases vs continuation rules matter. (6) Electronic vs paper systems still need accuracy and access rules. (7) Time traps: when the clock starts for reporting to government vs internal logs. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: 07:10 fatality: 8-hour clock. Do not wait for corporate legal at 09:00 if that blows 8 hours. 19:40 amputation: 24-hour clock â not 8. An in-patient hospitalization that begins the next morning still gets 24 hours from knowledge of the hospitalization, not from the original incident time if you only learned of the admission later. A restricted-duty sprain is recordable on the 300 log if it meets 1904.7; it is not a 1904.39 call. Heart attack at work may still need a fatality call â do not self-exempt because âit was medical.â After the call: investigate and control the source (hierarchy). The phone call is compliance, not a safeguard. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Using the 8-hour fatality clock for hospitalization, amputation, or loss of an eye (or 24 for a fatality).; Treating every 300-log recordable as 1904.39-reportable, or treating first aid as a 24-hour call.; Waiting for “morning legal review” while the statutory clock runs from knowledge.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Fatality” is really Report to OSHA within 8 hours of learning; “In-patient hospitalization, amputation, loss of an eye” is really Report within 24 hours of learning; “300-log recordable (1904.7)” is really May not be 1904.39-reportable (e.g., restricted duty, stitches rules); “First aid” is really Neither 300-log recordable (as first aid) nor 1904.39; “Fire-watch 30/60 min or STEL 15 min” is really Not reporting clocks — do not import them. Stem-if-then map: if first aid only truly applies → do not record as 301 injury if not required; if days away counting asked → count calendar days per rule in stem; if privacy case identifiers exposed → protect employee privacy; if two answers work → higher hierarchy / system / design; if reporting deadline in last sentence → honor the TIME requirement. Scoring favors evidence, owners, verification, and hierarchy-smart controls on 1904 clocks. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "1904.39 — 8 hours or 24? Recordable = reportable?",
  cardBack:
    "Fatality 8 h. In-patient hospitalization, amputation, loss of an eye 24 h. Knowledge starts the clock. 300 log ≠ 1904.39. First aid is neither. Attractive wrong answer: “everything serious is 8 hours” or wait for morning legal. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence states fatality 8 hours vs hospitalization/amputation/loss of eye 24 hours, clock from knowledge, and recordable is not automatically reportable.",
};

export const items: ClassItem[] = [
  exam(T, "Employee dies at the scene at 07:10. You know immediately. OSHA reporting clock?", [
    "24 hours — all serious events are 24.",
    "8 hours from knowledge. Fatality is the 8-hour 1904.39 clock.",
    "7 days because 300-log recording is 7 days.",
    "Next business morning after legal review.",
  ], 1, "TIME: fatality = 8 hours. 7-day recording is a different 1904 family.", "TIME", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA 1904.39 reporting is not recordkeeping and not a fire watch. Fatality: report to OSHA within 8 hours of learning. In-patient hospitalization, amputation, or loss of an eye: within 24 hours of learning. Recordable... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Employee has a fingertip amputation at 19:40. You know at 19:45. OSHA reporting clock?", [
    "8 hours — amputations are “as bad as death.”",
    "24 hours from knowledge. Amputation is on the 24-hour list with in-patient hospitalization and loss of an eye.",
    "15 minutes using STEL folklore.",
    "No report — amputations are only 300-log.",
  ], 1, "TIME: amputation = 24 hours, not 8.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA 1904.39 reporting is not recordkeeping and not a fire watch. Fatality: report to OSHA within 8 hours of learning. In-patient hospitalization, amputation, or loss of an eye: within 24 hours of learning. Recordable... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "ER treats and releases a fractured arm; no admission. 1904.39 report?", [
    "Yes — 8 hours because bones are serious.",
    "No 1904.39 report for treat-and-release. It may still be a 300-log recordable under 1904.7. In-patient hospitalization (admission) is the 24-hour trigger.",
    "Yes — 24 hours for any fracture.",
    "Yes — 8 hours if it happened on night shift.",
  ], 1, "In-patient ≠ ER. Recordable ≠ reportable.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA 1904.39 reporting is not recordkeeping and not a fire watch. Fatality: report to OSHA within 8 hours of learning. In-patient hospitalization, amputation, or loss of an eye: within 24 hours of learning. Recordable... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Incident Monday 10:00. Worker admitted in-patient Tuesday 02:00. You learn of the admission Tuesday 02:15. 24-hour clock starts?", [
    "Monday 10:00 — incident time always starts reporting.",
    "Tuesday 02:15 — knowledge that the hospitalization occurred starts the 1904.39 clock.",
    "Monday 18:00 — 8 hours from the incident.",
    "Wednesday morning business hours.",
  ], 1, "STEM: knowledge of the outcome, not the original event time.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA 1904.39 reporting is not recordkeeping and not a fire watch. Fatality: report to OSHA within 8 hours of learning. In-patient hospitalization, amputation, or loss of an eye: within 24 hours of learning. Recordable... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Restricted-duty sprain, no death, no admission, no amputation, no eye loss. Best classification?", [
    "1904.39 in 8 hours.",
    "Likely 300-log recordable (days restricted) if work-related and a new case; not a 1904.39 report.",
    "1904.39 in 24 hours because restricted duty is “hospital-like.”",
    "First aid — never record.",
  ], 1, "Recordable ≠ reportable. Restricted duty is 1904.7, not 1904.39.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA 1904.39 reporting is not recordkeeping and not a fire watch. Fatality: report to OSHA within 8 hours of learning. In-patient hospitalization, amputation, or loss of an eye: within 24 hours of learning. Recordable... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Loss of an eye on a Saturday. Supervisor waits until Monday “because Area Office is closed.” Best flag?", [
    "Correct — clocks pause on weekends.",
    "TIME: 24-hour clock still runs. OSHA provides after-hours reporting methods the stem will honor. Weekend is not a stay.",
    "Correct if the 300 log is updated Monday.",
    "Correct if the fatality clock is 8 hours on weekdays only.",
  ], 1, "Clocks are hours, not business days.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA 1904.39 reporting is not recordkeeping and not a fire watch. Fatality: report to OSHA within 8 hours of learning. In-patient hospitalization, amputation, or loss of an eye: within 24 hours of learning. Recordable... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Fatality. Legal wants to wait 10 hours to “get the story straight.” Best CSP action?", [
    "Wait — accuracy beats the clock.",
    "Report within 8 hours with known facts; supplement later. The statutory clock is not a narrative workshop.",
    "Wait 24 hours to be conservative.",
    "Skip OSHA; call only the insurer (FIN).",
  ], 1, "8-hour fatality clock. FIN is not reporting.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA 1904.39 reporting is not recordkeeping and not a fire watch. Fatality: report to OSHA within 8 hours of learning. In-patient hospitalization, amputation, or loss of an eye: within 24 hours of learning. Recordable... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Which analysis is the wrong first tool after a fatality on an unguarded press?", [
    "Report within 8 hours, then design the guard / PtD on the sister presses.",
    "FMEA on the color of the 1904.39 phone tree as the primary action, leaving the press open.",
    "Investigation plus hierarchy on the source.",
    "Check 8 vs 24 against the outcome, then CAPA.",
  ], 1, "TOOL: a phone-tree FMEA is not the control. The press still needs a guard.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA 1904.39 reporting is not recordkeeping and not a fire watch. Fatality: report to OSHA within 8 hours of learning. In-patient hospitalization, amputation, or loss of an eye: within 24 hours of learning. Recordable... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Someone uses the 30-minute fire-watch rule as the OSHA reporting window for a welding fatality. What happened?", [
    "Correct — hot work uses 30 minutes for everything.",
    "TIME mix-up: fire watch is a hot-work residual. The fatality is 8 hours under 1904.39.",
    "Correct if the watch was documented.",
    "Use 3 dB exchange to convert 30 minutes to 8 hours.",
  ], 1, "Do not import Class 82 watch times onto 1904.39.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA 1904.39 reporting is not recordkeeping and not a fire watch. Fatality: report to OSHA within 8 hours of learning. In-patient hospitalization, amputation, or loss of an eye: within 24 hours of learning. Recordable... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Two remaining answers after the 8-hour call is made: add a laminated “drive slower” card on the PIT, or specify a pedestrian-separated aisle that is still purchasable. Best CSP pick?", [
    "The card — reporting closed the case.",
    "Specify the separated aisle (higher hierarchy). The 1904.39 call is compliance, not a safeguard.",
    "Extra insurance (FIN).",
    "Wait 24 hours to see if anyone else dies (TIME as control).",
  ], 1, "HIER after the clock. A call is not PtD.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA 1904.39 reporting is not recordkeeping and not a fire watch. Fatality: report to OSHA within 8 hours of learning. In-patient hospitalization, amputation, or loss of an eye: within 24 hours of learning. Recordable... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "First-aid bandage on a cut. Supervisor files 1904.39 “to be safe” within 8 hours. Best correction?", [
    "Good — extra reporting is required.",
    "First aid is not 1904.39 and usually not 300-log recordable. Extra reporting is not the rule; know the list: fatality 8 h; hospital/amputation/eye 24 h.",
    "It would have been correct at 24 hours.",
    "Convert the bandage to an amputation administratively.",
  ], 1, "Over-reporting the wrong category is still a TIME miss on the exam.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA 1904.39 reporting is not recordkeeping and not a fire watch. Fatality: report to OSHA within 8 hours of learning. In-patient hospitalization, amputation, or loss of an eye: within 24 hours of learning. Recordable... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a plastics compounding turnaround. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Least consistent with 1904.39.", [
    "Fatality called at hour 7 with known facts.",
    "Amputation called at hour 20.",
    "A laminated “call OSHA sometime” card after three fatalities, with no clock, no number, and the unguarded source unchanged.",
    "Admission called at hour 10 after learning at hour 0 of the admission.",
  ], 2, "A poster is not a clock and not a guard.", "TIME", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA 1904.39 reporting is not recordkeeping and not a fire watch. Fatality: report to OSHA within 8 hours of learning. In-patient hospitalization, amputation, or loss of an eye: within 24 hours of learning. Recordable... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
