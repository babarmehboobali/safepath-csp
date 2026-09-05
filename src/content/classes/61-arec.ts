import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D6.01";

export const classFields: ClassFields = {
  hook: "Operations wants respirators ordered this afternoon because a new solvent line starts Monday. No one has walked the process, named the agent, or asked whether substitution is still open. You are the CSP. The question is which industrial-hygiene step is actually first.",
  hookOilGas: `Operations wants respirators on the rack before a new solvent-cut crude blend hits the unit Monday. No one has walked the process, named the agent, or asked whether a different cut is still open. You are the CSP. The question is which industrial-hygiene step is actually first.`,
  hookConstruction: `The GC wants half-masks issued this afternoon because silica-producing demo starts Monday. No one has walked the cuts, named the task, or asked whether wet methods/Table 1 still apply. You are the CSP. The question is which industrial-hygiene step is actually first.`,
  rule: "AREC is the IH sequence: Anticipate → Recognize → Evaluate → Control. Do not skip to PPE. Anticipation uses process knowledge before the exposure exists. Recognition confirms agents and tasks. Evaluation is qualitative then quantitative. Control follows the hierarchy; respirators are last. If two answers work, take higher hierarchy / system / design.",
  modelCaption: "Four arrows: ANTICIPATE (P&ID / SDS / similar-exposure) → RECOGNIZE (walkthrough / complaints) → EVALUATE (strategy + numbers) → CONTROL (eliminate / LEV / admin / PPE). A respirator icon is tagged LAST. Caption: skipping left-to-right is the exam fail.",
  workedCase: "New parts washer. Anticipate: solvent identity, vapor pressure, temperature, nearby ignition, maintenance access. Recognize: walkdown finds heated open tank and a drain that aerosols. Evaluate: worst-task screening then personal TWA/STEL if needed. Control: aqueous substitute still open → specify it. Respirators this afternoon skip Anticipate and Control.",
  brief: `AREC is the IH sequence: Anticipate â Recognize â Evaluate â Control. Do not skip to PPE. Anticipation uses process knowledge before the exposure exists. Recognition confirms agents and tasks. Evaluation is qualitative then quantitative. Control follows the hierarchy; respirators are last. If two answers work, take higher hierarchy / system / design. If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
AREC is the IH sequence: Anticipate â Recognize â Evaluate â Control. Do not skip to PPE. Anticipation uses process knowledge before the exposure exists. Recognition confirms agents and tasks. Evaluation is qualitative then quantitative. Control follows the hierarchy; respirators are last. If two answers work, take higher hierarchy / system / design. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. Field move
Operations wants respirators ordered this afternoon because a new solvent line starts Monday. No one has walked the process, named the agent, or asked whether substitution is still open. You are the CSP. The question is which industrial-hygiene step is actually first. Oil-and-gas skin: Operations wants respirators on the rack before a new solvent-cut crude blend hits the unit Monday. No one has walked the process, named the agent, or asked whether a different cut is still open. You are the CSP. Construction skin: The GC wants half-masks issued this afternoon because silica-producing demo starts Monday. No one has walked the cuts, named the task, or asked whether wet methods/Table 1 still apply. You are the CSP. Work the case: New parts washer. Anticipate: solvent identity, vapor pressure, temperature, nearby ignition, maintenance access. Recognize: walkdown finds heated open tank and a drain that aerosols. Evaluate: worst-task screening then personal TWA/STEL if needed. Control: aqueous substitute still open â specify it. Respirators this afternoon skip Anticipate and Control. Classic traps: Ordering respirators (Control/PPE) before naming the agent (Anticipate/Recognize).; Calling a one-time area badge an evaluation of personal 8-hour TWA.; Treating SDS Section 8 PPE as the entire AREC process.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for arec. Verify whether a higher system or design fix is still open. Contrast labels: Anticipate is actually Process/chemistry knowledge before the job exists — P&ID, SDS, analogous data; Recognize is actually Confirm agents, tasks, and exposed groups in this workplace; Evaluate is actually Strategy + qualitative/quantitative comparison to OELs; Control is actually Hierarchy; PPE last — not the first purchase order; Walkthrough only is actually Recognition aid — not a finished evaluation or a control. If the stem shows PPE is issued before any evaluation, pick return to AREC \u2014 evaluate then control. If the stem shows a new process arrives, pick anticipate/recognize before startup. If the stem shows complaints exist but no evaluation, pick evaluate exposures. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows controls changed, pick re-evaluate. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `AREC — which step is first? Can respirators skip it sits in CSP-11 Domain 6 Occupational Health and Ergonomics. The exam tests whether you apply the rule when a package already looks complete. Core rule: AREC is the IH sequence: Anticipate â Recognize â Evaluate â Control. Do not skip to PPE. Anticipation uses process knowledge before the exposure exists. Recognition confirms agents and tasks. Evaluation is qualitative then quantitative. Control follows the hierarchy; respirators are last. If two answers work, take higher hierarchy / system / design. Field context: Operations wants respirators ordered this afternoon because a new solvent line starts Monday. No one has walked the process, named the agent, or asked whether substitution is still open. You are the CSP. The question is which industrial-hygiene step is actually first. The oil-and-gas skin shifts the same decision into production pressure: Operations wants respirators on the rack before a new solvent-cut crude blend hits the unit Monday. No one has walked the process, named the agent, or asked whether a different cut is still open. You are the CSP. The construction skin shifts it into schedule and trade stacking: The GC wants half-masks issued this afternoon because silica-producing demo starts Monday. No one has walked the cuts, named the task, or asked whether wet methods/Table 1 still apply. You are the CSP. Model caption for this class: Four arrows: ANTICIPATE (P&ID / SDS / similar-exposure) â RECOGNIZE (walkthrough / complaints) â EVALUATE (strategy + numbers) â CONTROL (eliminate / LEV / admin / PPE). A respirator icon is tagged LAST. Caption: skipping left-to-right is the exam fail. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Anticipation, Recognition, Evaluation, Control is the IH problem-solving sequence. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Do not jump to PPE before anticipation/recognition/evaluation. (3) Anticipation uses process knowledge before exposure exists. (4) Recognition uses walkthroughs, SDS, complaints, and history. (5) Evaluation uses qualitative judgment and quantitative sampling as needed. (6) Control follows hierarchy after evaluation. (7) Re-evaluate after MoC and controls change. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: New parts washer. Anticipate: solvent identity, vapor pressure, temperature, nearby ignition, maintenance access. Recognize: walkdown finds heated open tank and a drain that aerosols. Evaluate: worst-task screening then personal TWA/STEL if needed. Control: aqueous substitute still open â specify it. Respirators this afternoon skip Anticipate and Control. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Ordering respirators (Control/PPE) before naming the agent (Anticipate/Recognize).; Calling a one-time area badge an evaluation of personal 8-hour TWA.; Treating SDS Section 8 PPE as the entire AREC process.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Anticipate” is really Process/chemistry knowledge before the job exists — P&ID, SDS, analogous data; “Recognize” is really Confirm agents, tasks, and exposed groups in this workplace; “Evaluate” is really Strategy + qualitative/quantitative comparison to OELs; “Control” is really Hierarchy; PPE last — not the first purchase order; “Walkthrough only” is really Recognition aid — not a finished evaluation or a control. Stem-if-then map: if PPE is issued before any evaluation → return to AREC \u2014 evaluate then control; if a new process arrives → anticipate/recognize before startup; if complaints exist but no evaluation → evaluate exposures; if two answers work → higher hierarchy / system / design; if controls changed → re-evaluate. Scoring favors evidence, owners, verification, and hierarchy-smart controls on arec. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "AREC — which step is first? Can respirators skip it?",
  cardBack: "Anticipate → Recognize → Evaluate → Control. PPE is last, not a substitute for naming the agent or for hierarchy. SDS PPE tables are not AREC. Study only — not allowed in the test center.",
  teachBackKey: "Pass if the sentence lists Anticipate-Recognize-Evaluate-Control in order and says respirators/PPE cannot skip anticipation or hierarchy.",
  trapsJson: traps(
    "Ordering respirators (Control/PPE) before naming the agent (Anticipate/Recognize).",
    "Calling a one-time area badge an evaluation of personal 8-hour TWA.",
    "Treating SDS Section 8 PPE as the entire AREC process.",
  ),
  contrastJson: contrast([
    { looksLike: "Anticipate", actually: "Process/chemistry knowledge before the job exists — P&ID, SDS, analogous data" },
    { looksLike: "Recognize", actually: "Confirm agents, tasks, and exposed groups in this workplace" },
    { looksLike: "Evaluate", actually: "Strategy + qualitative/quantitative comparison to OELs" },
    { looksLike: "Control", actually: "Hierarchy; PPE last — not the first purchase order" },
    { looksLike: "Walkthrough only", actually: "Recognition aid — not a finished evaluation or a control" },
  ]),
  mustScoreJson: mustScore(
    "Anticipation, Recognition, Evaluation, Control is the IH problem-solving sequence.",
    "Do not jump to PPE before anticipation/recognition/evaluation.",
    "Anticipation uses process knowledge before exposure exists.",
    "Recognition uses walkthroughs, SDS, complaints, and history.",
    "Evaluation uses qualitative judgment and quantitative sampling as needed.",
    "Control follows hierarchy after evaluation.",
    "Re-evaluate after MoC and controls change.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "PPE is issued before any evaluation", pick: "return to AREC \u2014 evaluate then control" },
    { ifStem: "a new process arrives", pick: "anticipate/recognize before startup" },
    { ifStem: "complaints exist but no evaluation", pick: "evaluate exposures" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "controls changed", pick: "re-evaluate" },
  ),

  formulaSlug: null,
};

export const items: ClassItem[] = [
  exam(
    T,
    "New solvent line Monday. Operations ordered half-masks this afternoon. No process review. Best first CSP move?",
    [
      "Issue the masks and write the cartridge change schedule.",
      "Anticipate/recognize: identify the agent, process conditions, and whether substitution or enclosure is still open before any PPE buy.",
      "Hang one area badge overnight and call Evaluate done.",
      "Skip to a 1910.134 fit-test trailer.",
    ],
    1,
    "HIER + AREC: Control/PPE cannot precede Anticipate. Substitution may still be open.",
    "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "AREC is the IH sequence: Anticipate → Recognize → Evaluate → Control. Do not skip to PPE. Anticipation uses process knowledge before the exposure exists. Recognition confirms agents and tasks. Evaluation is qualitativ... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at a refinery coker outage. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Which pair is Anticipate vs Recognize.",
    [
      "Fit test vs medical questionnaire.",
      "P&ID/SDS vapor-pressure review before startup vs walkdown that finds a heated open tank on nights.",
      "STEL tube vs TWA tube.",
      "LEV hood vs respirator.",
    ],
    1,
    "STEM: anticipation is process knowledge; recognition confirms it in this workplace.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "AREC is the IH sequence: Anticipate → Recognize → Evaluate → Control. Do not skip to PPE. Anticipation uses process knowledge before the exposure exists. Recognition confirms agents and tasks. Evaluation is qualitativ... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "A column-mounted badge for one night is presented as the 8-hour personal TWA for the blender SEG. Issue?",
    [
      "None — area equals personal.",
      "Evaluate requires a strategy: personal breathing-zone samples representative of the SEG and the OEL averaging time. An area badge is not automatically a TWA.",
      "None if the badge color is amber.",
      "None if SDS Section 8 lists a respirator.",
    ],
    1,
    "TOOL: area badge ≠ personal TWA evaluation.",
    "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "AREC is the IH sequence: Anticipate → Recognize → Evaluate → Control. Do not skip to PPE. Anticipation uses process knowledge before the exposure exists. Recognition confirms agents and tasks. Evaluation is qualitativ... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Last sentence: an aqueous cleaner is still available. Team wants LEV + cartridges around the original solvent. Best Control step?",
    [
      "Approve LEV + cartridges — that is AREC Control.",
      "Substitute the aqueous cleaner (higher hierarchy still open). LEV/PPE are leftovers after substitution is closed.",
      "Approve cartridges only — cheaper Evaluate.",
      "Postpone Anticipate until after the first recordable.",
    ],
    1,
    "HIER: AREC Control still obeys the hierarchy. Last sentence left substitution open (STEM).",
    "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "AREC is the IH sequence: Anticipate → Recognize → Evaluate → Control. Do not skip to PPE. Anticipation uses process knowledge before the exposure exists. Recognition confirms agents and tasks. Evaluation is qualitativ... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "SDS Section 8 lists gloves and a half-mask. Team says AREC is complete. Best comment?",
    [
      "Agree — SDS is the exposure plan.",
      "SDS is a Recognize/Anticipate input, not Evaluate or Control. You still name tasks, decide if sampling is needed, and apply hierarchy.",
      "Agree if Section 2 has a pictogram.",
      "Agree if the TLV is printed in Section 8.",
    ],
    1,
    "STEM: SDS ≠ finished AREC. PELTLV if they treat a listed TLV as the legal PEL.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "AREC is the IH sequence: Anticipate → Recognize → Evaluate → Control. Do not skip to PPE. Anticipation uses process knowledge before the exposure exists. Recognition confirms agents and tasks. Evaluation is qualitativ... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Evaluate step uses an ACGIH TLV as the OSHA citation limit for a substance that has a different PEL. Error?",
    [
      "None — TLV always supersedes.",
      "PELTLV: PEL is the legal limit; TLV is advisory. Use the right object for the question asked.",
      "UNIT — they used ppm as mg/m³.",
      "TIME — they used 24 hours.",
    ],
    1,
    "PELTLV: legal vs guideline during Evaluate.",
    "PELTLV",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "AREC is the IH sequence: Anticipate → Recognize → Evaluate → Control. Do not skip to PPE. Anticipation uses process knowledge before the exposure exists. Recognition confirms agents and tasks. Evaluation is qualitativ... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Complaints of dizziness on nights. Operations wants to skip Recognize and buy fans. Best AREC path?",
    [
      "Fans first — complaints are not data.",
      "Recognize the night task and agent, then Evaluate (including night coverage), then Control by hierarchy — do not skip to a fan as if it were Anticipation.",
      "Fit tests first.",
      "Close the plant until an FMEA RPN exists.",
    ],
    1,
    "STEM: complaints trigger Recognize/Evaluate, not a random fan.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "AREC is the IH sequence: Anticipate → Recognize → Evaluate → Control. Do not skip to PPE. Anticipation uses process knowledge before the exposure exists. Recognition confirms agents and tasks. Evaluation is qualitativ... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Wrong tool: FMEA RPN of “IH sad” used instead of an exposure-assessment strategy. Comment?",
    [
      "Accept — RPN is AREC.",
      "TOOL: AREC Evaluate uses SEGs, OELs, and sampling/qualitative judgment. An RPN of feelings is not an exposure assessment.",
      "Accept if RPN < 100.",
      "Accept if respirators are already ordered.",
    ],
    1,
    "TOOL: FMEA ranking is not IH evaluation.",
    "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "AREC is the IH sequence: Anticipate → Recognize → Evaluate → Control. Do not skip to PPE. Anticipation uses process knowledge before the exposure exists. Recognition confirms agents and tasks. Evaluation is qualitativ... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "A hospitalization from solvent overexposure is reported only as an IH sampling note. OSHA clock?",
    [
      "AREC pauses 1904.",
      "Hospitalization: 24 hours to OSHA. Sampling notes are parallel, not a substitute clock.",
      "8 hours because solvents are always fatalities.",
      "30 years under 1910.1020.",
    ],
    1,
    "TIME: 24-hour hospitalization clock is not an IH form.",
    "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "AREC is the IH sequence: Anticipate → Recognize → Evaluate → Control. Do not skip to PPE. Anticipation uses process knowledge before the exposure exists. Recognition confirms agents and tasks. Evaluation is qualitativ... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Two funded moves: extra umbrella insurance AND a cartridge stock. Solvent substitution still open. Pair and miss?",
    [
      "Avoid + reduce; cartridges are substitution.",
      "Transfer + PPE; missing Anticipate/Control at substitution (Reduce/Avoid the agent).",
      "Two LEV systems.",
      "PEL + TLV complete Evaluate.",
    ],
    1,
    "FIN: insurance plus PPE is not AREC Control when substitution is open.",
    "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "AREC is the IH sequence: Anticipate → Recognize → Evaluate → Control. Do not skip to PPE. Anticipation uses process knowledge before the exposure exists. Recognition confirms agents and tasks. Evaluation is qualitativ... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "SEG definition skipped; one laborer’s 2-hour sample is applied to all 30 blender operators as the TWA. Issue?",
    [
      "None — one person represents all.",
      "Evaluate must define similar-exposure groups. A 2-hour sample on one person is not automatically everyone’s 8-hour TWA (STEM/FORM).",
      "None if the sample was an area badge.",
      "None if the TLV is 8 hours.",
    ],
    1,
    "STEM: SEG + averaging time. Don’t inflate one short sample into a crew TWA.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "AREC is the IH sequence: Anticipate → Recognize → Evaluate → Control. Do not skip to PPE. Anticipation uses process knowledge before the exposure exists. Recognition confirms agents and tasks. Evaluation is qualitativ... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at a plastics compounding turnaround. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Best statement of AREC.",
    [
      "PPE → sampling → SDS.",
      "Anticipate, Recognize, Evaluate, Control — a sequence that still obeys the hierarchy and does not start at respirators.",
      "Citation first, then walkthrough.",
      "Buy direct-reading instruments, skip process knowledge.",
    ],
    1,
    "STEM: AREC order is the class rule.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "AREC is the IH sequence: Anticipate → Recognize → Evaluate → Control. Do not skip to PPE. Anticipation uses process knowledge before the exposure exists. Recognition confirms agents and tasks. Evaluation is qualitativ... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];

