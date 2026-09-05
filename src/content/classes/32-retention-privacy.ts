import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D2.10";

export const classFields: ClassFields = {
  hook: "HR wants to shred clinic files at five years “because that’s the OSHA log rule,” and to post the 300 with diagnoses on the lunchroom board. You are the CSP. The question is which clock and which privacy rule actually apply.",
  hookOilGas: `The land-rig office wants to shred clinic files at five years âbecause thatâs the OSHA log rule,â and to radio diagnoses to the whole pad. You are the CSP. The question is which clock and which privacy rule actually apply.`,
  hookConstruction: `The GC office wants to shred clinic files at five years âbecause thatâs the OSHA log rule,â and to post the 300 with diagnoses in the dry shack. You are the CSP. The question is which clock and which privacy rule actually apply.`,
  rule: "1904: record on the 300/301 within 7 calendar days; fatality to OSHA in 8 hours; amputation / in-patient hospitalization / loss of an eye in 24 hours; retain 300/301/300A five years; post 300A Feb 1–Apr 30. 1910.1020: employee exposure and medical records kept duration of employment plus 30 years, with access rules. Do not mix the five-year log with the 30-year medical file. Do not publish diagnoses.",
  modelCaption:
    "Two retention bars: short bar “1904 logs — 5 years”; long bar “1910.1020 medical/exposure — employment + 30 years.” A clock cluster: 8 h / 24 h / 7 d. A lock icon on medical files. Caption: the 5-year shredder does not touch clinic charts.",
  workedCase:
    "Friday 21:00 amputation. Notify OSHA within 24 hours. Record within 7 calendar days. Privacy-concern case: do not put the name/diagnosis in the public 300 description. Clinic notes: 1910.1020 retention and access. The 300 itself: 5 years. Shredding the clinic file at year five fails 1910.1020.",
  trapsJson: traps(
    "Shredding medical/exposure files on the 1904 five-year clock.",
    "Using 8 hours for amputations or 7 days for fatalities.",
    "Posting diagnoses or privacy-concern names on the 300A board.",
  ),
  contrastJson: contrast([
    { looksLike: "8 hours", actually: "Fatality notification to OSHA" },
    { looksLike: "24 hours", actually: "Amputation, in-patient hospitalization, loss of an eye" },
    { looksLike: "7 calendar days", actually: "Record on the 300/301" },
    { looksLike: "Employment + 30 years", actually: "1910.1020 medical and exposure records — not the 300 log" },
  ]),
  mustScoreJson: mustScore(
    "Keep records as long as legal and system requirements demand \u2014 then dispose securely.",
    "Privacy and access control apply to medical and personal data in OH&S files.",
    "Retention schedules need owners; ad-hoc boxes are not a program.",
    "Litigation holds override routine destruction.",
    "Do not store sensitive medical details in general incident folders without controls.",
    "Audit trails matter for critical safety records.",
    "Destruction must be verifiable when retention ends.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "medical details sit in an open shared drive", pick: "restrict access and separate sensitive records" },
    { ifStem: "retention period is unknown", pick: "set a schedule from legal/system requirements" },
    { ifStem: "a litigation hold is active", pick: "suspend destruction" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "boxes have no inventory", pick: "inventory and assign retention owners" },
  ),

  brief: `1904: record on the 300/301 within 7 calendar days; fatality to OSHA in 8 hours; amputation / in-patient hospitalization / loss of an eye in 24 hours; retain 300/301/300A five years; post 300A Feb 1âApr 30. 1910.1020: employee exposure and medical records kept duration of employment plus 30 years, with access rules. Do not mix If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
1904: record on the 300/301 within 7 calendar days; fatality to OSHA in 8 hours; amputation / in-patient hospitalization / loss of an eye in 24 hours; retain 300/301/300A five years; post 300A Feb 1âApr 30. 1910.1020: employee exposure and medical records kept duration of employment plus 30 years, with access rules. Do not mix the five-year log with the 30-year medical file. Do not publish diagnoses. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
HR wants to shred clinic files at five years âbecause thatâs the OSHA log rule,â and to post the 300 with diagnoses on the lunchroom board. You are the CSP. The question is which clock and which privacy rule actually apply. Oil-and-gas skin: The land-rig office wants to shred clinic files at five years âbecause thatâs the OSHA log rule,â and to radio diagnoses to the whole pad. You are the CSP. Construction skin: The GC office wants to shred clinic files at five years âbecause thatâs the OSHA log rule,â and to post the 300 with diagnoses in the dry shack. You are the CSP. Work the case: Friday 21:00 amputation. Notify OSHA within 24 hours. Record within 7 calendar days. Privacy-concern case: do not put the name/diagnosis in the public 300 description. Clinic notes: 1910.1020 retention and access. The 300 itself: 5 years. Shredding the clinic file at year five fails 1910.1020. Classic traps: Shredding medical/exposure files on the 1904 five-year clock.; Using 8 hours for amputations or 7 days for fatalities.; Posting diagnoses or privacy-concern names on the 300A board.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for retention privacy. Verify whether a higher system or design fix is still open. Contrast labels: 8 hours is actually Fatality notification to OSHA; 24 hours is actually Amputation, in-patient hospitalization, loss of an eye; 7 calendar days is actually Record on the 300/301; Employment + 30 years is actually 1910.1020 medical and exposure records — not the 300 log. If the stem shows medical details sit in an open shared drive, pick restrict access and separate sensitive records. If the stem shows retention period is unknown, pick set a schedule from legal/system requirements. If the stem shows a litigation hold is active, pick suspend destruction. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows boxes have no inventory, pick inventory and assign retention owners. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Retention — shred clinic files at 5 years because of the 300 log sits in CSP-11 Domain 2 Management Systems. The exam tests whether you apply the rule when a package already looks complete. Core rule: 1904: record on the 300/301 within 7 calendar days; fatality to OSHA in 8 hours; amputation / in-patient hospitalization / loss of an eye in 24 hours; retain 300/301/300A five years; post 300A Feb 1âApr 30. 1910.1020: employee exposure and medical records kept duration of employment plus 30 years, with access rules. Do not mix the five-year log with the 30-year medical file. Do not publish diagnoses. Field context: HR wants to shred clinic files at five years âbecause thatâs the OSHA log rule,â and to post the 300 with diagnoses on the lunchroom board. You are the CSP. The question is which clock and which privacy rule actually apply. The oil-and-gas skin shifts the same decision into production pressure: The land-rig office wants to shred clinic files at five years âbecause thatâs the OSHA log rule,â and to radio diagnoses to the whole pad. You are the CSP. The construction skin shifts it into schedule and trade stacking: The GC office wants to shred clinic files at five years âbecause thatâs the OSHA log rule,â and to post the 300 with diagnoses in the dry shack. You are the CSP. Model caption for this class: Two retention bars: short bar â1904 logs â 5 yearsâ; long bar â1910.1020 medical/exposure â employment + 30 years.â A clock cluster: 8 h / 24 h / 7 d. A lock icon on medical files. Caption: the 5-year shredder does not touch clinic charts. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Keep records as long as legal and system requirements demand — then dispose securely. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Privacy and access control apply to medical and personal data in OH&S files. (3) Retention schedules need owners; ad-hoc boxes are not a program. (4) Litigation holds override routine destruction. (5) Do not store sensitive medical details in general incident folders without controls. (6) Audit trails matter for critical safety records. (7) Destruction must be verifiable when retention ends. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Friday 21:00 amputation. Notify OSHA within 24 hours. Record within 7 calendar days. Privacy-concern case: do not put the name/diagnosis in the public 300 description. Clinic notes: 1910.1020 retention and access. The 300 itself: 5 years. Shredding the clinic file at year five fails 1910.1020. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Shredding medical/exposure files on the 1904 five-year clock.; Using 8 hours for amputations or 7 days for fatalities.; Posting diagnoses or privacy-concern names on the 300A board.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “8 hours” is really Fatality notification to OSHA; “24 hours” is really Amputation, in-patient hospitalization, loss of an eye; “7 calendar days” is really Record on the 300/301; “Employment + 30 years” is really 1910.1020 medical and exposure records — not the 300 log. Stem-if-then map: if medical details sit in an open shared drive → restrict access and separate sensitive records; if retention period is unknown → set a schedule from legal/system requirements; if a litigation hold is active → suspend destruction; if two answers work → higher hierarchy / system / design; if boxes have no inventory → inventory and assign retention owners. Scoring favors evidence, owners, verification, and hierarchy-smart controls on retention privacy. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Retention — shred clinic files at 5 years because of the 300 log?",
  cardBack:
    "No. 1904 logs: 5 years. 1910.1020 medical/exposure: employment + 30 years. Clocks: 8 h fatality, 24 h severe, 7 d record. No public diagnoses. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence splits 1904 (8 h / 24 h / 7 d, 5-year logs, 300A posting) from 1910.1020 (employment + 30 years, access/privacy) and forbids mixing them.",
};

export const items: ClassItem[] = [
  exam(T, "HR will shred all clinic charts at five years “to match the OSHA log.” Best CSP call?", [
    "Approve — one clock is simpler.",
    "Stop: 1904 logs retain 5 years; 1910.1020 medical/exposure records are generally duration of employment plus 30 years.",
    "Shred at 7 days.",
    "Shred at 8 hours.",
  ], 1, "Do not mix 5-year 1904 retention with 1910.1020.", "TIME", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "1904: record on the 300/301 within 7 calendar days; fatality to OSHA in 8 hours; amputation / in-patient hospitalization / loss of an eye in 24 hours; retain 300/301/300A five years; post 300A Feb 1–Apr 30. 1910.1020:... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Amputation at 21:00 Friday. Office closed until Monday. OSHA notification due?", [
    "Monday morning.",
    "Within 24 hours of the amputation; weekends do not pause 1904.",
    "Within 8 hours — all severe injuries use the fatality clock.",
    "Within 7 calendar days.",
  ], 1, "TIME: 24 h for amputation; 8 h is fatality; 7 d is recording.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "1904: record on the 300/301 within 7 calendar days; fatality to OSHA in 8 hours; amputation / in-patient hospitalization / loss of an eye in 24 hours; retain 300/301/300A five years; post 300A Feb 1–Apr 30. 1910.1020:... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at an offshore fabrication night shift. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Worker dies at 04:00. Best notification clock.", [
    "24 hours.",
    "8 hours from the fatality.",
    "7 calendar days.",
    "Employment + 30 years.",
  ], 1, "TIME: fatality → 8 hours.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "1904: record on the 300/301 within 7 calendar days; fatality to OSHA in 8 hours; amputation / in-patient hospitalization / loss of an eye in 24 hours; retain 300/301/300A five years; post 300A Feb 1–Apr 30. 1910.1020:... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A recordable sprain is known Monday. The 300 is still blank the following Wednesday (9 days) because “privacy.” Problem?", [
    "Privacy pauses recording indefinitely.",
    "Recording is due in 7 calendar days; privacy-concern rules change name/description handling, not the clock.",
    "Must record within 8 hours.",
    "Must wait to post on the 300A only.",
  ], 1, "TIME: 7-day recording vs privacy mechanics.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "1904: record on the 300/301 within 7 calendar days; fatality to OSHA in 8 hours; amputation / in-patient hospitalization / loss of an eye in 24 hours; retain 300/301/300A five years; post 300A Feb 1–Apr 30. 1910.1020:... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a plastics compounding turnaround. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: 300A posting window.", [
    "January 1–December 31 in the lunchroom.",
    "February 1 through April 30 for the prior year’s summary.",
    "Only the day of the registrar visit.",
    "Five years continuously on the wall.",
  ], 1, "1904 posting is Feb 1–Apr 30, not all-year décor.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "1904: record on the 300/301 within 7 calendar days; fatality to OSHA in 8 hours; amputation / in-patient hospitalization / loss of an eye in 24 hours; retain 300/301/300A five years; post 300A Feb 1–Apr 30. 1910.1020:... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Which set is a 1910.1020 medical/exposure record rather than a 1904 log?", [
    "The OSHA 300 line for a sprain.",
    "Audiograms, fit-test medical opinions, and personal sampling results for a named employee.",
    "The 300A totals.",
    "The workers-comp reserve spreadsheet only.",
  ], 1, "1020 covers medical and exposure records, not the 300 itself.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "1904: record on the 300/301 within 7 calendar days; fatality to OSHA in 8 hours; amputation / in-patient hospitalization / loss of an eye in 24 hours; retain 300/301/300A five years; post 300A Feb 1–Apr 30. 1910.1020:... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A hallway CAPA board lists a worker’s diagnosis and prescription. Best action?", [
    "Keep it — 19011 transparency.",
    "Remove it: medical information is not public; apply 1910.1020 access/privacy and 1904 privacy-concern rules.",
    "Add a photo.",
    "Post it next to the 300A all year.",
  ], 1, "Privacy: diagnoses are not kanban décor.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "1904: record on the 300/301 within 7 calendar days; fatality to OSHA in 8 hours; amputation / in-patient hospitalization / loss of an eye in 24 hours; retain 300/301/300A five years; post 300A Feb 1–Apr 30. 1910.1020:... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Employee asks to see their exposure sampling file. Employer says “trade secret, never.” Best 1910.1020 posture?", [
    "Refuse forever.",
    "Access rights exist; trade-secret processes cannot erase the employee’s access to needed exposure information under 1910.1020.",
    "Provide only TRIR.",
    "Provide only the 300A.",
  ], 1, "1020 access is a system right, not a courtesy.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "1904: record on the 300/301 within 7 calendar days; fatality to OSHA in 8 hours; amputation / in-patient hospitalization / loss of an eye in 24 hours; retain 300/301/300A five years; post 300A Feb 1–Apr 30. 1910.1020:... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Insurer keeps claim files 3 years and tells the plant to match that for clinic charts. Best position?", [
    "Match the insurer — financing sets retention.",
    "Reject: insurer retention is not 1910.1020; keep employment + 30 years for covered medical/exposure records.",
    "Match 14001 certificate cycles.",
    "Match RPN worksheets.",
  ], 1, "FIN: insurance file rules ≠ OSHA medical retention.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "1904: record on the 300/301 within 7 calendar days; fatality to OSHA in 8 hours; amputation / in-patient hospitalization / loss of an eye in 24 hours; retain 300/301/300A five years; post 300A Feb 1–Apr 30. 1910.1020:... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Last sentence: a state privacy law forbids posting names that 1904 would otherwise allow on a non-privacy-concern case. Best remaining action?", [
    "Follow only 1904 names; ignore the state law.",
    "Meet 1904 recording/reporting clocks and apply the stricter publication/privacy rule; do not skip the 7-day record.",
    "Skip recording to be extra private.",
    "Shred the 301 at 24 hours.",
  ], 1, "STEM: stricter privacy on publication; clocks still run.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "1904: record on the 300/301 within 7 calendar days; fatality to OSHA in 8 hours; amputation / in-patient hospitalization / loss of an eye in 24 hours; retain 300/301/300A five years; post 300A Feb 1–Apr 30. 1910.1020:... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Someone stores audiograms in the same public folder as FMEA RPN sheets “for the SMS.” Problem?", [
    "None — SMS integration requires it.",
    "Wrong handling: medical records are not FMEA worksheets; 1910.1020 access controls apply. TOOL mix of analysis vs medical files.",
    "RPN should be retained 30 years instead.",
    "Audiograms belong on the 300A.",
  ], 1, "TOOL/privacy: analysis files ≠ medical files.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "1904: record on the 300/301 within 7 calendar days; fatality to OSHA in 8 hours; amputation / in-patient hospitalization / loss of an eye in 24 hours; retain 300/301/300A five years; post 300A Feb 1–Apr 30. 1910.1020:... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "ER treats and releases a worker the same night. No admission, no amputation, no loss of eye. Which is true?", [
    "24-hour OSHA notification is mandatory because of the ER.",
    "No 8/24-hour OSHA notification solely for treat-and-release; still decide 300 recording within 7 days; keep any 1020 medical pieces on the 1020 clock.",
    "8-hour notification.",
    "Must post a diagnosis on the 300A.",
  ], 1, "TIME: admission/amputation/eye drive 24 h. ER release is not automatic notification.", "TIME", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "1904: record on the 300/301 within 7 calendar days; fatality to OSHA in 8 hours; amputation / in-patient hospitalization / loss of an eye in 24 hours; retain 300/301/300A five years; post 300A Feb 1–Apr 30. 1910.1020:... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
