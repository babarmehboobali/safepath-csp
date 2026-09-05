import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D5.05";

export const classFields: ClassFields = {
  hook: "An ESG slide claims “E is green” while a renovation disturbs TSI with no negative pressure, and a stack bypasses a baghouse to make a quarterly E-score look continuous. You are the CSP. The question is what exam-level air and asbestos still require when the brochure is pretty.",
  hookOilGas: `An ESG slide claims âE is greenâ while a turnaround disturbs TSI with no negative pressure, and a flare bypass makes a quarterly E-score look continuous. You are the CSP. The question is what exam-level air and asbestos still require when the brochure is pretty.`,
  hookConstruction: `An ESG slide claims âE is greenâ while a renovation disturbs TSI with no negative pressure, and a generator stack is the siteâs air story. You are the CSP. The question is what exam-level air and asbestos still require when the brochure is pretty.`,
  rule: "ESG reporting is not a control. Air at exam level: keep permitted controls in service (MACT/NESHAP/Title V ideas), do not bypass to paint a score, NAAQS are ambient goals not workplace PELs. Asbestos: identify PACM/TSI, class of work (I–IV), wet methods/negative pressure/HEPA, PEL 0.1 f/cc (8-hr) and excursion 1.0 f/cc (30 min) as legal numbers vs advisory TLVs. If two answers work, take higher hierarchy / system / design (don’t disturb; enclose; then PPE).",
  modelCaption:
    "Three panels: ESG brochure stamped “not a control” | Stack + baghouse ON | Asbestos Class I glovebag/negative-pressure with wet/HEPA. Caption: scores, permits, and fibers are different objects. PEL ≠ TLV ≠ NAAQS.",
  workedCase:
    "Boiler house reno. TSI is PACM until sampled. Class I if removing TSI. Controls: isolate, negative pressure, wet, HEPA vac, competent person, waste as asbestos. Do not dry-scrape to “save water for ESG.” Stack: baghouse is the MACT/NESHAP control — bypassing it for a prettier quarterly runtime chart is illegal and not “E.” Workplace asbestos PEL is not a NAAQS and not a TLV.",
  trapsJson: traps(
    "Treating an ESG score as a baghouse or as an asbestos negative-pressure enclosure.",
    "Using NAAQS or TLV as the OSHA asbestos PEL.",
    "Dry disturbance of TSI because “it’s only Class IV housekeeping.”",
  ),
  contrastJson: contrast([
    { looksLike: "ESG E-score", actually: "Disclosure/rating — not a permit condition or a glovebag" },
    { looksLike: "NAAQS / Title V / NESHAP", actually: "Ambient/permit/source air rules — not 8-hour worker PELs" },
    { looksLike: "Asbestos PEL 0.1 f/cc", actually: "OSHA legal workplace limit (plus 1.0 f/cc excursion)" },
    { looksLike: "TLV / REL", actually: "Advisory — PELTLV if swapped with the PEL" },
  ]),
  mustScoreJson: mustScore(
    "ESG reporting must match real controls \u2014 not theater.",
    "Air programs: know pollutants, permits, monitoring, and controls.",
    "Asbestos: assume suspect materials, survey before disturb, control exposure.",
    "Hierarchy for asbestos: avoid disturbance, enclose/encapsulate when appropriate, wet methods, HEPA, PPE residual.",
    "Air emission stacks and capture systems need maintenance.",
    "Community and worker exposures both matter.",
    "Do not DIY asbestos demolition to save schedule.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "renovation starts without asbestos survey", pick: "survey/assess before disturb" },
    { ifStem: "ESG report claims controls that are impaired", pick: "fix reality before reporting" },
    { ifStem: "only respirators proposed while capture is open", pick: "engineer capture/elimination paths first" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "monitoring shows exceedance", pick: "correct controls and investigate" },
  ),

  brief: `ESG reporting is not a control. Air at exam level: keep permitted controls in service (MACT/NESHAP/Title V ideas), do not bypass to paint a score, NAAQS are ambient goals not workplace PELs. Asbestos: identify PACM/TSI, class of work (IâIV), wet methods/negative pressure/HEPA, PEL 0.1 f/cc (8-hr) and excursion 1.0 f/cc (30 min) as legal numbers If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
ESG reporting is not a control. Air at exam level: keep permitted controls in service (MACT/NESHAP/Title V ideas), do not bypass to paint a score, NAAQS are ambient goals not workplace PELs. Asbestos: identify PACM/TSI, class of work (IâIV), wet methods/negative pressure/HEPA, PEL 0.1 f/cc (8-hr) and excursion 1.0 f/cc (30 min) as legal numbers vs advisory TLVs. If two answers work, take higher hierarchy / system / design (donât disturb; enclose; then PPE). Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
An ESG slide claims âE is greenâ while a renovation disturbs TSI with no negative pressure, and a stack bypasses a baghouse to make a quarterly E-score look continuous. You are the CSP. The question is what exam-level air and asbestos still require when the brochure is pretty. Oil-and-gas skin: An ESG slide claims âE is greenâ while a turnaround disturbs TSI with no negative pressure, and a flare bypass makes a quarterly E-score look continuous. You are the CSP. Construction skin: An ESG slide claims âE is greenâ while a renovation disturbs TSI with no negative pressure, and a generator stack is the siteâs air story. You are the CSP. Work the case: Boiler house reno. TSI is PACM until sampled. Class I if removing TSI. Controls: isolate, negative pressure, wet, HEPA vac, competent person, waste as asbestos. Do not dry-scrape to âsave water for ESG.â Stack: baghouse is the MACT/NESHAP control â bypassing it for a prettier quarterly runtime chart is illegal and not âE.â Workplace asbestos PEL is not a NAAQS and not a TLV. Classic traps: Treating an ESG score as a baghouse or as an asbestos negative-pressure enclosure.; Using NAAQS or TLV as the OSHA asbestos PEL.; Dry disturbance of TSI because “it’s only Class IV housekeeping.”. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for esg air asbestos. Verify whether a higher system or design fix is still open. Contrast labels: ESG E-score is actually Disclosure/rating — not a permit condition or a glovebag; NAAQS / Title V / NESHAP is actually Ambient/permit/source air rules — not 8-hour worker PELs; Asbestos PEL 0.1 f/cc is actually OSHA legal workplace limit (plus 1.0 f/cc excursion); TLV / REL is actually Advisory — PELTLV if swapped with the PEL. If the stem shows renovation starts without asbestos survey, pick survey/assess before disturb. If the stem shows ESG report claims controls that are impaired, pick fix reality before reporting. If the stem shows only respirators proposed while capture is open, pick engineer capture/elimination paths first. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows monitoring shows exceedance, pick correct controls and investigate. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `ESG vs baghouse vs asbestos PEL — which is a control? 0.1 of what sits in CSP-11 Domain 5 Environmental Management. The exam tests whether you apply the rule when a package already looks complete. Core rule: ESG reporting is not a control. Air at exam level: keep permitted controls in service (MACT/NESHAP/Title V ideas), do not bypass to paint a score, NAAQS are ambient goals not workplace PELs. Asbestos: identify PACM/TSI, class of work (IâIV), wet methods/negative pressure/HEPA, PEL 0.1 f/cc (8-hr) and excursion 1.0 f/cc (30 min) as legal numbers vs advisory TLVs. If two answers work, take higher hierarchy / system / design (donât disturb; enclose; then PPE). Field context: An ESG slide claims âE is greenâ while a renovation disturbs TSI with no negative pressure, and a stack bypasses a baghouse to make a quarterly E-score look continuous. You are the CSP. The question is what exam-level air and asbestos still require when the brochure is pretty. The oil-and-gas skin shifts the same decision into production pressure: An ESG slide claims âE is greenâ while a turnaround disturbs TSI with no negative pressure, and a flare bypass makes a quarterly E-score look continuous. You are the CSP. The construction skin shifts it into schedule and trade stacking: An ESG slide claims âE is greenâ while a renovation disturbs TSI with no negative pressure, and a generator stack is the siteâs air story. You are the CSP. Model caption for this class: Three panels: ESG brochure stamped ânot a controlâ | Stack + baghouse ON | Asbestos Class I glovebag/negative-pressure with wet/HEPA. Caption: scores, permits, and fibers are different objects. PEL â  TLV â  NAAQS. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) ESG reporting must match real controls — not theater. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Air programs: know pollutants, permits, monitoring, and controls. (3) Asbestos: assume suspect materials, survey before disturb, control exposure. (4) Hierarchy for asbestos: avoid disturbance, enclose/encapsulate when appropriate, wet methods, HEPA, PPE residual. (5) Air emission stacks and capture systems need maintenance. (6) Community and worker exposures both matter. (7) Do not DIY asbestos demolition to save schedule. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Boiler house reno. TSI is PACM until sampled. Class I if removing TSI. Controls: isolate, negative pressure, wet, HEPA vac, competent person, waste as asbestos. Do not dry-scrape to âsave water for ESG.â Stack: baghouse is the MACT/NESHAP control â bypassing it for a prettier quarterly runtime chart is illegal and not âE.â Workplace asbestos PEL is not a NAAQS and not a TLV. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Treating an ESG score as a baghouse or as an asbestos negative-pressure enclosure.; Using NAAQS or TLV as the OSHA asbestos PEL.; Dry disturbance of TSI because “it’s only Class IV housekeeping.”. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “ESG E-score” is really Disclosure/rating — not a permit condition or a glovebag; “NAAQS / Title V / NESHAP” is really Ambient/permit/source air rules — not 8-hour worker PELs; “Asbestos PEL 0.1 f/cc” is really OSHA legal workplace limit (plus 1.0 f/cc excursion); “TLV / REL” is really Advisory — PELTLV if swapped with the PEL. Stem-if-then map: if renovation starts without asbestos survey → survey/assess before disturb; if ESG report claims controls that are impaired → fix reality before reporting; if only respirators proposed while capture is open → engineer capture/elimination paths first; if two answers work → higher hierarchy / system / design; if monitoring shows exceedance → correct controls and investigate. Scoring favors evidence, owners, verification, and hierarchy-smart controls on esg air asbestos. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "ESG vs baghouse vs asbestos PEL — which is a control? 0.1 of what?",
  cardBack:
    "ESG is disclosure. Keep NESHAP/MACT controls on. Asbestos PEL 0.1 f/cc TWA, 1.0 f/cc excursion. Class I–IV, wet/HEPA/NP. NAAQS ≠ PEL ≠ TLV. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence says ESG is not a control, air devices stay in service, and asbestos uses class-of-work plus PEL 0.1 f/cc distinct from TLV/NAAQS.",
};

export const items: ClassItem[] = [
  exam(T, "ESG slide is green while the baghouse is bypassed to keep a runtime metric pretty. Best CSP comment?", [
    "Accept — E-score is the MACT.",
    "Reject: the control device in service is the air requirement. A score is disclosure, not a baghouse.",
    "Accept if RECs were purchased.",
    "Accept if NAAQS ozone is in attainment.",
  ], 1, "STEM: ESG ≠ permit control.", "STEM", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "ESG reporting is not a control. Air at exam level: keep permitted controls in service (MACT/NESHAP/Title V ideas), do not bypass to paint a score, NAAQS are ambient goals not workplace PELs. Asbestos: identify PACM/TS... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Renovation will disturb boiler TSI. No inspection, dry scrape, no NP, to “save water for sustainability.” Best action?", [
    "Dry scrape — water is Scope 3.",
    "Inspect, classify (likely Class I), wet methods, negative pressure/HEPA, competent person. Do not dry-disturb TSI for a green metric.",
    "Treat as Class IV housekeeping only.",
    "Treat as universal waste lamps.",
  ], 1, "HIER: don’t disturb / wet / enclose vs dry scrape.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "ESG reporting is not a control. Air at exam level: keep permitted controls in service (MACT/NESHAP/Title V ideas), do not bypass to paint a score, NAAQS are ambient goals not workplace PELs. Asbestos: identify PACM/TS... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "OSHA asbestos PEL vs a stem that also lists a different ACGIH TLV. Citation basis?", [
    "TLV — advisory is stricter so it is legal.",
    "PEL 0.1 f/cc TWA (and 1.0 f/cc excursion) is the OSHA legal limit; TLV is advisory (PELTLV).",
    "NAAQS PM2.5 is the worker limit.",
    "REL automatically becomes the PEL.",
  ], 1, "PELTLV: legal vs advisory.", "PELTLV",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "ESG reporting is not a control. Air at exam level: keep permitted controls in service (MACT/NESHAP/Title V ideas), do not bypass to paint a score, NAAQS are ambient goals not workplace PELs. Asbestos: identify PACM/TS... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Analyst converts 0.1 f/cc to ppm with 24.45 because “all air numbers are ppm.” Error?", [
    "None — 24.45 always applies.",
    "UNIT/FORM: fibers/cm³ is a count concentration, not a molar ppm; 24.45 is for gases.",
    "TIME — they used 8 hours as 24.45.",
    "FIN — they used ROI.",
  ], 1, "UNIT: f/cc is not ppm.", "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "ESG reporting is not a control. Air at exam level: keep permitted controls in service (MACT/NESHAP/Title V ideas), do not bypass to paint a score, NAAQS are ambient goals not workplace PELs. Asbestos: identify PACM/TS... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Last sentence: TSI can remain in place and be enclosed. Strip-and-photo vs enclose?", [
    "Strip — ESG photos need bare pipe.",
    "Enclose/leave in place (less disturbance) if the stem allows; stripping is extra exposure.",
    "Dry scrape in place.",
    "Ignore PACM because the brochure is green.",
  ], 1, "STEM + HIER: last sentence allowed enclosure.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "ESG reporting is not a control. Air at exam level: keep permitted controls in service (MACT/NESHAP/Title V ideas), do not bypass to paint a score, NAAQS are ambient goals not workplace PELs. Asbestos: identify PACM/TS... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "NAAQS ozone used as the worker 8-hour asbestos PEL. Issue?", [
    "None — ambient = workplace.",
    "Wrong object: NAAQS is ambient air quality; worker asbestos is f/cc PEL. Do not swap (PELTLV/TOOL).",
    "None if Title V is active.",
    "None if ESG E includes ozone.",
  ], 1, "PELTLV/TOOL: NAAQS ≠ PEL.", "PELTLV",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "ESG reporting is not a control. Air at exam level: keep permitted controls in service (MACT/NESHAP/Title V ideas), do not bypass to paint a score, NAAQS are ambient goals not workplace PELs. Asbestos: identify PACM/TS... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "NESHAP notice skipped to hit a renovation date on the ESG calendar. Status?", [
    "ESG calendars preempt NESHAP.",
    "Notice/inspection duties remain. A reporting date is not a control or a waiver.",
    "Fine if Class IV is claimed.",
    "Fine if a baghouse is nearby.",
  ], 1, "STEM: NESHAP vs brochure date.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "ESG reporting is not a control. Air at exam level: keep permitted controls in service (MACT/NESHAP/Title V ideas), do not bypass to paint a score, NAAQS are ambient goals not workplace PELs. Asbestos: identify PACM/TS... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "RECs (renewable certificates) purchased instead of HEPA/negative pressure. Classify.", [
    "Reduce — RECs capture fibers.",
    "FIN: certificates are money/claims, not asbestos engineering.",
    "Avoid — RECs delete TSI.",
    "Transfer of NAAQS.",
  ], 1, "FIN: RECs ≠ glovebag.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "ESG reporting is not a control. Air at exam level: keep permitted controls in service (MACT/NESHAP/Title V ideas), do not bypass to paint a score, NAAQS are ambient goals not workplace PELs. Asbestos: identify PACM/TS... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Hospitalization when a worker falls in the ACM work area. Team files only a NESHAP notice. OSHA clock?", [
    "NESHAP pauses 1904.",
    "Hospitalization: 24 hours to OSHA. Air/asbestos environmental notices are parallel.",
    "8 hours because asbestos is always a fatality clock.",
    "7 days.",
  ], 1, "TIME: 24-hour OSHA hospitalization.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "ESG reporting is not a control. Air at exam level: keep permitted controls in service (MACT/NESHAP/Title V ideas), do not bypass to paint a score, NAAQS are ambient goals not workplace PELs. Asbestos: identify PACM/TS... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Class IV vs Class I: sweeping debris from a TSI removal that was done dry by others, vs performing that TSI removal. Distinction?", [
    "Both are Class IV if brooms are green.",
    "Removal of TSI is Class I (highest). Cleanup of ACM dust is Class IV and still needs HEPA/wet — it is not permission to have done Class I dry.",
    "Both are Title V.",
    "Both are universal waste.",
  ], 1, "STEM: OSHA asbestos classes.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "ESG reporting is not a control. Air at exam level: keep permitted controls in service (MACT/NESHAP/Title V ideas), do not bypass to paint a score, NAAQS are ambient goals not workplace PELs. Asbestos: identify PACM/TS... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Wrong tool: FMEA RPN of “investor sad” as the asbestos competent-person plan. Comment?", [
    "Accept — RPN is 1926.1101.",
    "TOOL: class of work, negative pressure, wet/HEPA, and competent person are the method. Investor-feelings RPN is not.",
    "Accept if RPN < 100.",
    "Accept if ESG E is AAA.",
  ], 1, "TOOL: FMEA of investors ≠ asbestos plan.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "ESG reporting is not a control. Air at exam level: keep permitted controls in service (MACT/NESHAP/Title V ideas), do not bypass to paint a score, NAAQS are ambient goals not workplace PELs. Asbestos: identify PACM/TS... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Two funded moves: extra umbrella AND extra ESG photography, TSI to be dry-scraped. Pair and miss?", [
    "Avoid + reduce; photos are NP.",
    "Retain/transfer + disclosure; missing Reduce (inspect, wet, NP/HEPA or enclose).",
    "Two baghouses.",
    "PEL + TLV complete.",
  ], 1, "FIN: two financing/reporting moves in one stem do not control fibers.", "FIN", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "EPA RCRA/SPCC/EPCRA; OSHA HazCom",
      fieldTakeaway: "ESG reporting is not a control. Air at exam level: keep permitted controls in service (MACT/NESHAP/Title V ideas), do not bypass to paint a score, NAAQS are ambient goals not workplace PELs. Asbestos: identify PACM/TS... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
