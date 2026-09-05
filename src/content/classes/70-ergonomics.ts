import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D6.04";

export const classFields: ClassFields = {
  hook: "A crew lifts 51 lb parts from a pallet at arm’s length 200 times a shift. Operations says “NIOSH says 51 pounds is always OK” and offers back belts plus a stretch poster. You are the CSP. The question is RWL as a reduced number, not LC as a free pass.",
  hookOilGas: `A crew lifts 51 lb sample cases from a pallet at armâs length 200 times a shift. Operations says âNIOSH says 51 pounds is always OKâ and offers back belts plus a stretch poster. You are the CSP. The question is RWL as a reduced number, not LC as a free pass.`,
  hookConstruction: `A crew lifts 51 lb block from a pallet at armâs length 200 times a shift. Operations says âNIOSH says 51 pounds is always OKâ and offers back belts plus a stretch poster. You are the CSP. The question is RWL as a reduced number, not LC as a free pass.`,
  rule: "NIOSH RWL = 51 lb × HM × VM × DM × AM × FM × CM. The load constant 51 lb is not the RWL unless every multiplier is 1. Lifting Index LI = Load / RWL. Engineering (lift table, hoist, lower reach, better coupling) beats belts and stretches. Risk factors: force, repetition, posture, duration, vibration, contact stress, cold. If two answers work, take higher hierarchy / system / design.",
  modelCaption: "RWL = 51 × HM × VM × DM × AM × FM × CM. A 51 lb box tagged “LC, not automatically RWL.” Beside: hoist/lift table vs back belt. Caption: multipliers only shrink 51 — they never grow it.",
  workedCase: "Horizontal multiplier 0.5, others 1: RWL = 25.5 lb. A 51 lb load has LI = 2.0. 200 lifts/day tanks FM. Controls: pallet rotator, hoist, split the load, raise origin to knuckle height — not a belt. Office: monitor height and chair vs a poster. Don’t treat 23 kg as 51 lb without converting (UNIT).",
  brief: `NIOSH RWL = 51 lb Ã HM Ã VM Ã DM Ã AM Ã FM Ã CM. The load constant 51 lb is not the RWL unless every multiplier is 1. Lifting Index LI = Load / RWL. Engineering (lift table, hoist, lower reach, better coupling) beats belts and stretches. Risk factors: force, repetition, posture, If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
NIOSH RWL = 51 lb Ã HM Ã VM Ã DM Ã AM Ã FM Ã CM. The load constant 51 lb is not the RWL unless every multiplier is 1. Lifting Index LI = Load / RWL. Engineering (lift table, hoist, lower reach, better coupling) beats belts and stretches. Risk factors: force, repetition, posture, duration, vibration, contact stress, cold. If two answers work, take higher hierarchy / system / design. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. Field move
A crew lifts 51 lb parts from a pallet at armâs length 200 times a shift. Operations says âNIOSH says 51 pounds is always OKâ and offers back belts plus a stretch poster. You are the CSP. The question is RWL as a reduced number, not LC as a free pass. Oil-and-gas skin: A crew lifts 51 lb sample cases from a pallet at armâs length 200 times a shift. You are the CSP. Construction skin: A crew lifts 51 lb block from a pallet at armâs length 200 times a shift. You are the CSP. Work the case: Horizontal multiplier 0.5, others 1: RWL = 25.5 lb. A 51 lb load has LI = 2.0. 200 lifts/day tanks FM. Controls: pallet rotator, hoist, split the load, raise origin to knuckle height â not a belt. Office: monitor height and chair vs a poster. Donât treat 23 kg as 51 lb without converting (UNIT). Classic traps: Treating 51 lb as always acceptable (ignoring multipliers).; Back belts / stretch posters as the engineering control.; Using 23 kg in a pound stem without conversion.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for ergonomics. Verify whether a higher system or design fix is still open. Contrast labels: LC 51 lb is actually Load constant — starting point, not the job’s RWL; RWL is actually 51 × multipliers — always ≤ 51 lb; Lifting Index is actually Load / RWL — >1 means redesign pressure; Hoist / lift table / reach is actually Engineering; Back belt / stretches is actually Admin/PPE theater — not NIOSH RWL. If the stem shows only back belts proposed, pick redesign/engineer the job. If the stem shows RWL multipliers are poor, pick change load/geometry/frequency. If the stem shows symptoms ignored until recordable, pick encourage early reporting and intervene. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows lift assist is available, pick use engineering aid. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Is 51 lb always the NIOSH limit? LI formula sits in CSP-11 Domain 6 Occupational Health and Ergonomics. The exam tests whether you apply the rule when a package already looks complete. Core rule: NIOSH RWL = 51 lb Ã HM Ã VM Ã DM Ã AM Ã FM Ã CM. The load constant 51 lb is not the RWL unless every multiplier is 1. Lifting Index LI = Load / RWL. Engineering (lift table, hoist, lower reach, better coupling) beats belts and stretches. Risk factors: force, repetition, posture, duration, vibration, contact stress, cold. If two answers work, take higher hierarchy / system / design. Field context: A crew lifts 51 lb parts from a pallet at armâs length 200 times a shift. Operations says âNIOSH says 51 pounds is always OKâ and offers back belts plus a stretch poster. You are the CSP. The question is RWL as a reduced number, not LC as a free pass. The oil-and-gas skin shifts the same decision into production pressure: A crew lifts 51 lb sample cases from a pallet at armâs length 200 times a shift. You are the CSP. The construction skin shifts it into schedule and trade stacking: A crew lifts 51 lb block from a pallet at armâs length 200 times a shift. You are the CSP. Model caption for this class: RWL = 51 Ã HM Ã VM Ã DM Ã AM Ã FM Ã CM. A 51 lb box tagged âLC, not automatically RWL.â Beside: hoist/lift table vs back belt. Caption: multipliers only shrink 51 â they never grow it. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Fit the job to the worker: reduce force, repetition, awkward posture, vibration, contact stress. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Engineering workstation design beats back belts and pep talks. (3) NIOSH lifting logic changes multipliers — do not only coach technique. (4) Participatory ergonomics improves solutions. (5) Early reporting of MSD symptoms enables intervention. (6) Job rotation can help but may not fix a bad design. (7) Hierarchy: eliminate manual lifts with aids when open. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Horizontal multiplier 0.5, others 1: RWL = 25.5 lb. A 51 lb load has LI = 2.0. 200 lifts/day tanks FM. Controls: pallet rotator, hoist, split the load, raise origin to knuckle height â not a belt. Office: monitor height and chair vs a poster. Donât treat 23 kg as 51 lb without converting (UNIT). Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Treating 51 lb as always acceptable (ignoring multipliers).; Back belts / stretch posters as the engineering control.; Using 23 kg in a pound stem without conversion.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “LC 51 lb” is really Load constant — starting point, not the job’s RWL; “RWL” is really 51 × multipliers — always ≤ 51 lb; “Lifting Index” is really Load / RWL — >1 means redesign pressure; “Hoist / lift table / reach” is really Engineering; “Back belt / stretches” is really Admin/PPE theater — not NIOSH RWL. Stem-if-then map: if only back belts proposed → redesign/engineer the job; if RWL multipliers are poor → change load/geometry/frequency; if symptoms ignored until recordable → encourage early reporting and intervene; if two answers work → higher hierarchy / system / design; if lift assist is available → use engineering aid. Scoring favors evidence, owners, verification, and hierarchy-smart controls on ergonomics. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Is 51 lb always the NIOSH limit? LI formula?",
  cardBack: "LC = 51 lb; RWL = 51 × multipliers (always ≤ 51). LI = Load/RWL. Hoist/lift table > belt. Study only — not allowed in the test center.",
  teachBackKey: "Pass if the sentence says LC is 51 lb but RWL multiplies downward, LI = Load/RWL, and engineering beats belts.",
  trapsJson: traps(
    "Treating 51 lb as always acceptable (ignoring multipliers).",
    "Back belts / stretch posters as the engineering control.",
    "Using 23 kg in a pound stem without conversion.",
  ),
  contrastJson: contrast([
    { looksLike: "LC 51 lb", actually: "Load constant — starting point, not the job’s RWL" },
    { looksLike: "RWL", actually: "51 × multipliers — always ≤ 51 lb" },
    { looksLike: "Lifting Index", actually: "Load / RWL — >1 means redesign pressure" },
    { looksLike: "Hoist / lift table / reach", actually: "Engineering" },
    { looksLike: "Back belt / stretches", actually: "Admin/PPE theater — not NIOSH RWL" },
  ]),
  mustScoreJson: mustScore(
    "Fit the job to the worker: reduce force, repetition, awkward posture, vibration, contact stress.",
    "Engineering workstation design beats back belts and pep talks.",
    "NIOSH lifting logic changes multipliers \u2014 do not only coach technique.",
    "Participatory ergonomics improves solutions.",
    "Early reporting of MSD symptoms enables intervention.",
    "Job rotation can help but may not fix a bad design.",
    "Hierarchy: eliminate manual lifts with aids when open.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "only back belts proposed", pick: "redesign/engineer the job" },
    { ifStem: "RWL multipliers are poor", pick: "change load/geometry/frequency" },
    { ifStem: "symptoms ignored until recordable", pick: "encourage early reporting and intervene" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "lift assist is available", pick: "use engineering aid" },
  ),

  formulaSlug: "niosh-rwl",
};

export const items: ClassItem[] = [
  exam(
    T,
    "You are the CSP reviewing a live decision at an offshore fabrication night shift. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: All NIOSH multipliers = 1. RWL.",
    [
      "23 lb using kg as lb.",
      "51 lb. RWL = LC when every multiplier is 1. Keystrokes: 51 × 1 = 51. 51 is the ceiling, not a free pass on a worse geometry.",
      "102 lb doubling LC.",
      "90 lb using noise PEL.",
    ],
    1,
    "FORM: LC = 51 lb only if multipliers are 1.",
    "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "NIOSH RWL = 51 lb × HM × VM × DM × AM × FM × CM. The load constant 51 lb is not the RWL unless every multiplier is 1. Lifting Index LI = Load / RWL. Engineering (lift table, hoist, lower reach, better coupling) beats... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at a municipal water-plant retrofit. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: HM = 0.50, other multipliers = 1. RWL? 51 lb load LI.",
    [
      "RWL 51, LI 1.0 because LC is sacred.",
      "RWL 25.5 lb; LI = 51/25.5 = 2.0. Keystrokes: 51 × 0.5 = 25.5; 51 ÷ 25.5 = 2.",
      "RWL 0.5 lb.",
      "LI 51 using LC as index.",
    ],
    1,
    "FORM: multipliers shrink RWL; LI = Load/RWL.",
    "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "NIOSH RWL = 51 lb × HM × VM × DM × AM × FM × CM. The load constant 51 lb is not the RWL unless every multiplier is 1. Lifting Index LI = Load / RWL. Engineering (lift table, hoist, lower reach, better coupling) beats... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at a plastics compounding turnaround. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: 51 × 0.8 × 0.9 × 0.85. Closest RWL.",
    [
      "51 lb.",
      "31 lb. 51×0.8=40.8; ×0.9=36.72; ×0.85=31.21. Keystrokes: 51 × 0.8 × 0.9 × 0.85 ≈ 31.2 → closest 31.",
      "23 kg written as 23 lb.",
      "40.8 lb stopping after HM.",
    ],
    1,
    "FORM: multiply all given multipliers; pick closest rounded.",
    "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "NIOSH RWL = 51 lb × HM × VM × DM × AM × FM × CM. The load constant 51 lb is not the RWL unless every multiplier is 1. Lifting Index LI = Load / RWL. Engineering (lift table, hoist, lower reach, better coupling) beats... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Stem in pounds. Analyst uses 23 (kg LC) as 23 lb RWL. Error?",
    [
      "None — 23 equals 51.",
      "UNIT: 23 kg is the SI LC ≈ 51 lb. Using 23 lb understates LC by more than half.",
      "PELTLV — 23 is the OSHA PEL.",
      "TIME — 23 hours.",
    ],
    1,
    "UNIT: 23 kg vs 51 lb.",
    "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "NIOSH RWL = 51 lb × HM × VM × DM × AM × FM × CM. The load constant 51 lb is not the RWL unless every multiplier is 1. Lifting Index LI = Load / RWL. Engineering (lift table, hoist, lower reach, better coupling) beats... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Hoist is available. Team specifies back belts and a stretch poster for 51 lb at arm’s length. Best CSP comment?",
    [
      "Approve belts — they raise LC to 102.",
      "Specify the hoist / lift table / reduce reach. Belts and stretches are not NIOSH engineering.",
      "Approve because LI folklore is always <1 at 51 lb.",
      "Approve if insurance pays for belts.",
    ],
    1,
    "HIER: hoist vs belt.",
    "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "NIOSH RWL = 51 lb × HM × VM × DM × AM × FM × CM. The load constant 51 lb is not the RWL unless every multiplier is 1. Lifting Index LI = Load / RWL. Engineering (lift table, hoist, lower reach, better coupling) beats... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Last sentence: load can be split into two 20 lb totes. 40 lb at RWL 22 lb vs split?",
    [
      "Keep 40 lb — LC is 51.",
      "Split (or hoist). Last sentence left a lower load/better LI open. 40/22 ≈ 1.8 LI is redesign territory.",
      "Belts until LI is a poster.",
      "Use 5 dB exchange on LI.",
    ],
    1,
    "STEM + HIER: last sentence allowed a smaller load.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "NIOSH RWL = 51 lb × HM × VM × DM × AM × FM × CM. The load constant 51 lb is not the RWL unless every multiplier is 1. Lifting Index LI = Load / RWL. Engineering (lift table, hoist, lower reach, better coupling) beats... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Job rotation every hour among the same high-LI lifts. Team calls it elimination. Issue?",
    [
      "Correct — rotation is PtD elimination.",
      "STEM: rotation may share dose (admin). It does not raise RWL or remove the lift. Prefer hoist/redesign.",
      "Correct if belts are added.",
      "Correct if LC = 51 kg.",
    ],
    1,
    "HIER: rotation is admin, not elimination.",
    "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "NIOSH RWL = 51 lb × HM × VM × DM × AM × FM × CM. The load constant 51 lb is not the RWL unless every multiplier is 1. Lifting Index LI = Load / RWL. Engineering (lift table, hoist, lower reach, better coupling) beats... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "NIOSH 51 lb treated as an OSHA PEL in a citation file. Error?",
    [
      "None — 51 lb is 1910.95.",
      "PELTLV/TOOL: RWL is a NIOSH recommended equation, not an OSHA numbered PEL. Don’t cite it as 90 dBA either.",
      "UNIT — 51 dBA.",
      "TIME — 51 hours.",
    ],
    1,
    "PELTLV: recommended RWL vs legal PEL.",
    "PELTLV",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "NIOSH RWL = 51 lb × HM × VM × DM × AM × FM × CM. The load constant 51 lb is not the RWL unless every multiplier is 1. Lifting Index LI = Load / RWL. Engineering (lift table, hoist, lower reach, better coupling) beats... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Wrong tool: noise dose formula used as LI because both are “100%.” Comment?",
    [
      "Accept — 5 dB is HM.",
      "TOOL: LI = Load/RWL. Noise dose uses exchange rates. Don’t mix.",
      "Accept if 90 lb = PEL.",
      "Accept if 85 lb = AL.",
    ],
    1,
    "TOOL: noise math ≠ RWL.",
    "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "NIOSH RWL = 51 lb × HM × VM × DM × AM × FM × CM. The load constant 51 lb is not the RWL unless every multiplier is 1. Lifting Index LI = Load / RWL. Engineering (lift table, hoist, lower reach, better coupling) beats... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Two funded moves: extra umbrella AND extra belts; a lift table is still open. Pair and miss?",
    [
      "Avoid + reduce; belts are lift tables.",
      "Transfer + PPE/admin; missing Reduce (lift table/hoist/reach).",
      "Two LCs.",
      "HM + VM complete Control.",
    ],
    1,
    "FIN: insurance plus belts skip engineering.",
    "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "NIOSH RWL = 51 lb × HM × VM × DM × AM × FM × CM. The load constant 51 lb is not the RWL unless every multiplier is 1. Lifting Index LI = Load / RWL. Engineering (lift table, hoist, lower reach, better coupling) beats... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Hernia hospitalization after a 51 lb lift; team files only a stretch-calendar update. OSHA clock?",
    [
      "Stretch calendar is the 8-hour clock.",
      "Hospitalization: 24 hours to OSHA. Stretch dates are not 1904.",
      "7 days because ergo is wellness.",
      "No clock if LC is 51.",
    ],
    1,
    "TIME: 24-hour hospitalization.",
    "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "NIOSH RWL = 51 lb × HM × VM × DM × AM × FM × CM. The load constant 51 lb is not the RWL unless every multiplier is 1. Lifting Index LI = Load / RWL. Engineering (lift table, hoist, lower reach, better coupling) beats... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Office MSD: monitor too low, mouse reach long. Best first control?",
    [
      "Stretch poster and a back belt.",
      "Redesign the station (monitor height, reach, chair) — engineering of the work. Posters are last.",
      "NIOSH LC 51 lb for keystrokes.",
      "Insurance wellness app as RWL.",
    ],
    1,
    "HIER: workstation design vs poster.",
    "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "NIOSH RWL = 51 lb × HM × VM × DM × AM × FM × CM. The load constant 51 lb is not the RWL unless every multiplier is 1. Lifting Index LI = Load / RWL. Engineering (lift table, hoist, lower reach, better coupling) beats... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];

