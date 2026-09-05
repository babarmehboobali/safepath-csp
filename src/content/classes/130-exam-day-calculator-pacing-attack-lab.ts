import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D2.14";

export const classFields: ClassFields = {
  hook: "A 200-item sitting, 330 minutes, a practice calculator, and a last sentence that freezes the form. Closest value, DEG, flag after you pick, breaks do not pause. Then still take the higher control if it is in the choices.",
  hookOilGas: "Same clock on a well-control calc. Do not burn eight minutes deriving a constant the stem already gave. Restore the trip if that option is open.",
  hookConstruction: "Same clock on a Q=VA hose item. Inches to feet, closest gpm, then exclusion zone if that option is still listed.",
  rule: "Closest listed value; DEG unless told; no invented sheet. Flag only with an answer. Breaks do not pause. ~99 s/item. Hierarchy still beats a prettier number.",
  modelCaption: "Read last sentence → pick form → keystroke → units → closest → hierarchy check. Side: flag only if answered; clock never sleeps on break.",
  workedCase: "(1) Last sentence: OSHA TWA-from-dose, D=200%. (2) 90+16.61 log10(2)≈95.0; pick 95 not 93 from using 10. (3) If options include specifying a quieter unpurchased machine, take that over an HCP. Losing answers: ln, flagging a blank, or spending 10 minutes while 40 items remain.",
  trapsJson: traps(
    "Flagging an unanswered item.",
    "Mixing ln/log10 or 3 dB/5 dB.",
    "Chasing extra digits instead of the closest option; letting break pause in your head.",
  ),
  contrastJson: contrast([
    { looksLike: "Closest value", actually: "Listed option nearest the calc" },
    { looksLike: "DEG vs RAD", actually: "Degrees unless stem says radians" },
    { looksLike: "Flag", actually: "Only after a selected answer" },
    { looksLike: "Break overlay", actually: "Does not pause the timer" },
    { looksLike: "82.5 / 165 / 330 min", actually: "50 / 100 / 200 item timers here" },
    { looksLike: "Pretest items", actually: "Unlabeled; still cost time" },
  ]),
  mustScoreJson: mustScore(
    "Pick the closest listed value.",
    "Degrees unless the stem requires radians.",
    "Do not invent a formula sheet — use the stem.",
    "Flag only after selecting an answer.",
    "Breaks do not pause the clock.",
    "Pacing ~99 s/item on a 330 min / 200 item sitting.",
    "ln vs log10 and 3 vs 5 dB are FORM/UNIT pits.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "two numeric options near your result", pick: "pick closest" },
    { ifStem: "trig and no radian note", pick: "DEG" },
    { ifStem: "want to flag", pick: "select an answer first" },
    { ifStem: "break overlay open", pick: "clock still runs" },
    { ifStem: "form given in the last sentence", pick: "obey that form" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" }
  ),
  brief: `Closest value, DEG, flag after answer, break does not pause, ~99 s/item. Stem form only. Exam default: if two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Exam-day arithmetic is stem-driven. Use the on-screen practice calculator as a calculator, not as Pearson software. Pick the closest listed value. Degrees unless the stem requires radians. Do not invent a formula sheet. Flag only after you select an answer. Pacing: ~99 seconds per item on a 200-item 330-minute sitting (internal pretest items still consume time). Breaks do not pause the clock. If two answers both compute, take the one that also matches the higher remaining control.

Field move
Attack sequence: read the last sentence first for the constraint, classify the form (TWA, dose, Q=VA, product, AND), keystroke, check units, pick closest, then ask hierarchy if a design option is still in the choices. Do not chase a 0.00001 disagreement. Do not mix OSHA 5 with NIOSH 3. Do not use ln when the stem’s TWA-from-dose uses log10. Blank items stay blank if time ends — do not flag empties.

Exam
If two answers work, take higher hierarchy / system / design. TIME traps: spending 8 minutes on a 1-point calc while 20 items remain. FORM traps: wrong base, missing square, adding AND probabilities. Last sentence may give the form — obey it. Redraw the decision sequence for exam-day calculator and pacing before looking at options. Cost and convenience will sell a lower control that looks busy. Attractive wrong answers on exam-day calculator and pacing are usually competent lower-row programs, busy paperwork, or a funded contract. Read the last sentence for constraints that close a higher control, then take the best remaining system or design fix for exam-day calculator and pacing. When capital or authority remains, spend it on the highest remaining hardware or independent layer, then use administrative controls and PPE only for residual exam-day calculator and pacing risk. Do not let schedule pressure invert the exam-day calculator and pacing sequence. Verification is a test with an owner, not a calendar invite. If two answers both look professional, take higher hierarchy / system / design on exam-day calculator and pacing. Teach-back restates the exam-day calculator and pacing rule, the sequence, and the verification step in one spoken sentence.
`,
  deep: `This lab is the sitting, not a new formula family. Mock timers in this product are 82.5 / 165 / 330 minutes for 50 / 100 / 200 items. That is about 99 seconds each including review. A 5.5-hour final does not pause when you open a break overlay. One item on screen. Previous/Next exist. Flag requires a selected answer first. Review list, then confirm submit. Explanations after submit only. Demo sittings are not stored.

Calculator rules that cost points: (1) closest value, not your extra digits; (2) DEG mode unless the stem says radians; (3) parentheses on mixed ×÷; (4) ln vs log; (5) square VP; (6) convert inches to feet before πr²; (7) 200,000 hours in TRIR, not 100,000; (8) 8-hour denominator on an 8-hour TWA unless the stem changes it. Write the form in the scratch area, then keystroke once, then glance at units.

Pacing attack: first pass, answer or skip; do not flag empty. Second pass, flagged-with-answers. If 30 items remain and 20 minutes remain, stop deriving new constants. Guessing after eliminating two options beats a blank. Pretest items are not labeled — treat every item as live. Domain weights still exist in the bank; you cannot see them during the sitting.

Content still sits under the keystrokes. If two answers work, take higher hierarchy / system / design. A perfect TWA with a respirator-only option while substitution is open is still a miss. Teach-back: name closest-value, DEG, flag-after-answer, non-pausing break, ~99 s/item, and the hierarchy sentence. Oil-and-gas, construction, and manufacturing skins do not change the clock. They change the story around the same keystrokes. Scoring on exam-day calculator and pacing favors evidence, owners, verification, and hierarchy-smart controls rather than binders that look complete. Last-sentence constraints may freeze a higher exam-day calculator and pacing control; then take the best remaining fix and verify it instead of wishing the freeze away. Shared assumptions and checkbox closures create false assurance on exam-day calculator and pacing; name the assumption and test it. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet. Hold the exam default on exam-day calculator and pacing: if two answers work, take higher hierarchy / system / design, and reject polished paperwork when a higher system or design fix remains. In teach-back, name the exam-day calculator and pacing decision, the highest open control, and the verification step without reciting fake clause trivia. Field skins change the equipment, not the logic: a skid, a site tent, and a paint line still fail the same exam-day calculator and pacing test. A funded lower-row contract does not freeze a higher exam-day calculator and pacing row the stem still leaves open. Design the next job so the exam-day calculator and pacing control is obvious, then still implement it, then still verify it. Do not restart exam-day calculator and pacing from the bottom because PPE and training are what the plant already knows how to buy. Units, clocks, and tool names are traps only when you skip the last sentence on exam-day calculator and pacing. Walk the exam-day calculator and pacing sequence until it is automatic, then apply the last sentence, then pick the higher remaining row. Independent engineered layers beat detection, watchstanders, and emergency response when those layers are still open on exam-day calculator and pacing. Paper, PPE, and insurance can sit beside a exam-day calculator and pacing control; they do not replace it. If production already started in the last sentence, the exam-day calculator and pacing answer is often stop, restore the gate, then proceed — not a memo. Name the exam-day calculator and pacing rule in one sentence, then name the verification, then name the attractive wrong answer you will refuse. A last-sentence freeze on exam-day calculator and pacing shrinks open rows; it does not invert them or authorize a skip to PPE.
`,
  cardFront: "Exam day — closest, DEG, flag, clock?",
  cardBack: "Closest listed; DEG; flag only with an answer; break does not pause; ~99 s/item. Then hierarchy. Study only.",
  teachBackKey: "Pass if closest-value, flag-after-answer, non-pausing break, and hierarchy default are all named.",
  formulaSlug: "twa",
};

export const items: ClassItem[] = [
  exam(
    "CSP-11 D2.14",
    "You are the CSP reviewing a live decision at an offshore fabrication night shift. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Computed 94.7. Options 95, 90, 85, 80. Exam pick.",
    [
      "95 — closest listed value.",
      "90 because it is the PEL.",
      "85 because it is the AL.",
      "Leave blank to be pure.",
    ],
    0,
    "Core Rule: Closest value rule. Calculation Steps: 94.7 nearest 95. Standards Cited: Exam calc literacy. Why Each Distractor Fails: 95 — closest listed value.: Correct: Closest. | 90 because it is the PEL.: Fails: PEL folklore. | 85 because it is the AL.: Fails: AL folklore. | Leave blank to be pure.: Fails: Blanks cost.",
    "FORM",
    "Foundation",
    [
      "Correct: Closest.",
      "Fails: PEL folklore.",
      "Fails: AL folklore.",
      "Fails: Blanks cost.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Closest listed value; DEG unless told; no invented sheet. Flag only with an answer. Breaks do not pause. ~99 s/item. Hierarchy still beats a prettier number. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.14",
    "You are the CSP reviewing a live decision at a municipal water-plant retrofit. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Trig item, stem silent on radians. Calculator mode.",
    [
      "Always radians on CSP.",
      "Degrees (DEG) unless the stem requires radians.",
      "Mode does not matter.",
      "Use ln for trig.",
    ],
    1,
    "Core Rule: DEG default. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: DEG vs RAD. Why Each Distractor Fails: Always radians on CSP.: Fails: Not always rad. | Degrees (DEG) unless the stem requires radians.: Correct: Degrees. | Mode does not matter.: Fails: Mode matters. | Use ln for trig.: Fails: Wrong function.",
    "FORM",
    "Exam",
    [
      "Fails: Not always rad.",
      "Correct: Degrees.",
      "Fails: Mode matters.",
      "Fails: Wrong function.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Closest listed value; DEG unless told; no invented sheet. Flag only with an answer. Breaks do not pause. ~99 s/item. Hierarchy still beats a prettier number. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.14",
    "You want to flag item 40 but have not selected an answer. Correct software behavior in this product?",
    [
      "Flag empties freely.",
      "Flagging pauses the timer.",
      "Select an answer first; flag-before-empty is blocked with a warning.",
      "Flagging submits the exam.",
    ],
    2,
    "Core Rule: Flag requires an answer. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Flag rule. Why Each Distractor Fails: Flag empties freely.: Fails: Blocked here. | Flagging pauses the timer.: Fails: Break also does not pause; flag does not pause. | Select an answer first; flag-before-empty is blocked with a warning.: Correct: Answer then flag. | Flagging submits the exam.: Fails: Does not submit.",
    "STEM",
    "Exam",
    [
      "Fails: Blocked here.",
      "Fails: Break also does not pause; flag does not pause.",
      "Correct: Answer then flag.",
      "Fails: Does not submit.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Closest listed value; DEG unless told; no invented sheet. Flag only with an answer. Breaks do not pause. ~99 s/item. Hierarchy still beats a prettier number. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.14",
    "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Break overlay open on a 330-minute sitting. Timer.",
    [
      "Pauses automatically.",
      "Adds 15 minutes.",
      "Resets to 82.5.",
      "Continues — break does not pause.",
    ],
    3,
    "Core Rule: Non-pausing break. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Break vs clock. Why Each Distractor Fails: Pauses automatically.: Fails: Does not pause. | Adds 15 minutes.: Fails: No gift time. | Resets to 82.5.: Fails: Wrong length. | Continues — break does not pause.: Correct: Clock runs.",
    "TIME",
    "Exam",
    [
      "Fails: Does not pause.",
      "Fails: No gift time.",
      "Fails: Wrong length.",
      "Correct: Clock runs.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Closest listed value; DEG unless told; no invented sheet. Flag only with an answer. Breaks do not pause. ~99 s/item. Hierarchy still beats a prettier number. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.14",
    "You are the CSP reviewing a live decision at a refinery coker outage. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: 200 items, 330 minutes. Approximate pace.",
    [
      "~99 seconds per item including review.",
      "10 minutes per item.",
      "~20 seconds per item.",
      "No need to pace.",
    ],
    0,
    "Core Rule: 330×60/200=99 s. Calculation Steps: 19800 s / 200 = 99 s. Standards Cited: Pacing. Why Each Distractor Fails: ~99 seconds per item including review.: Correct: ~99 s. | 10 minutes per item.: Fails: Far too slow. | ~20 seconds per item.: Fails: Too fast to think. | No need to pace.: Fails: Pacing is the lab.",
    "TIME",
    "Foundation",
    [
      "Correct: ~99 s.",
      "Fails: Far too slow.",
      "Fails: Too fast to think.",
      "Fails: Pacing is the lab.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Closest listed value; DEG unless told; no invented sheet. Flag only with an answer. Breaks do not pause. ~99 s/item. Hierarchy still beats a prettier number. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.14",
    "OSHA TWA-from-dose uses log10; candidate uses ln. Miss?",
    [
      "HIER — logs are hierarchy rows.",
      "FORM — wrong log base.",
      "FIN — logs are deductibles.",
      "TIME — logs are 1904.",
    ],
    1,
    "Core Rule: Obey the stem’s log. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: ln vs log10. Why Each Distractor Fails: HIER — logs are hierarchy rows.: Fails: Not a row. | FORM — wrong log base.: Correct: Wrong base. | FIN — logs are deductibles.: Fails: Not finance. | TIME — logs are 1904.: Fails: Not 1904.",
    "FORM",
    "Exam",
    [
      "Fails: Not a row.",
      "Correct: Wrong base.",
      "Fails: Not finance.",
      "Fails: Not 1904.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Closest listed value; DEG unless told; no invented sheet. Flag only with an answer. Breaks do not pause. ~99 s/item. Hierarchy still beats a prettier number. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.14",
    "Independent AND 0.01×0.02. Options 0.0002, 0.03, 0.01, 0.02. Pick?",
    [
      "0.03",
      "0.01",
      "0.0002",
      "0.02",
    ],
    2,
    "Core Rule: Multiply independent AND; closest is the product. Calculation Steps: 0.01×0.02=0.0002, not 0.03 from adding. Standards Cited: Boolean calc pitfall. Why Each Distractor Fails: 0.03: Fails: Added. | 0.01: Fails: Copied A. | 0.0002: Correct: Product. | 0.02: Fails: Copied B.",
    "FORM",
    "Exam",
    [
      "Fails: Added.",
      "Fails: Copied A.",
      "Correct: Product.",
      "Fails: Copied B.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Closest listed value; DEG unless told; no invented sheet. Flag only with an answer. Breaks do not pause. ~99 s/item. Hierarchy still beats a prettier number. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.14",
    "Last sentence gives Q=V(10X²+A) with X=12 inches. First keystroke issue?",
    [
      "Square 12 immediately.",
      "Ignore X.",
      "Use log10 of X.",
      "Convert X to 1 ft before squaring.",
    ],
    3,
    "Core Rule: Unit conversion before the form. Calculation Steps: 12 in=1 ft. Standards Cited: Capture form pitfall. Why Each Distractor Fails: Square 12 immediately.: Fails: Inch trap. | Ignore X.: Fails: Dropped tax. | Use log10 of X.: Fails: Wrong function. | Convert X to 1 ft before squaring.: Correct: Convert.",
    "UNIT",
    "Exam",
    [
      "Fails: Inch trap.",
      "Fails: Dropped tax.",
      "Fails: Wrong function.",
      "Correct: Convert.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Closest listed value; DEG unless told; no invented sheet. Flag only with an answer. Breaks do not pause. ~99 s/item. Hierarchy still beats a prettier number. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.14",
    "40 items left, 12 minutes left, one ugly derivation remaining. Best pacing attack?",
    [
      "Eliminate, pick closest remaining, move — do not donate all 12 minutes to one item.",
      "Spend all 12 on the ugly one and blank the rest.",
      "Walk out.",
      "Open break to pause.",
    ],
    0,
    "Core Rule: Blanks on 39 items lose more than a miss on one. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Pacing attack. Why Each Distractor Fails: Eliminate, pick closest remaining, move — do not donate all 12 minutes to one item.: Correct: Keep moving. | Spend all 12 on the ugly one and blank the rest.: Fails: Catastrophic. | Walk out.: Fails: Abandons the sitting. | Open break to pause.: Fails: Break does not pause.",
    "TIME",
    "Expert",
    [
      "Correct: Keep moving.",
      "Fails: Catastrophic.",
      "Fails: Abandons the sitting.",
      "Fails: Break does not pause.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Closest listed value; DEG unless told; no invented sheet. Flag only with an answer. Breaks do not pause. ~99 s/item. Hierarchy still beats a prettier number. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.14",
    "Two options: 95 dBA TWA with HCP only, or specify a quieter unpurchased machine. Calc is correct either way. Pick:",
    [
      "HCP because the number is pretty.",
      "Specify the quieter machine.",
      "Leave blank.",
      "Flag without answering.",
    ],
    1,
    "Core Rule: If two answers work, take higher hierarchy / system / design. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Calc then hierarchy. Why Each Distractor Fails: HCP because the number is pretty.: Fails: Number ≠ row. | Specify the quieter machine.: Correct: Higher control still open. | Leave blank.: Fails: Costs a point. | Flag without answering.: Fails: Flag needs an answer.",
    "HIER",
    "Expert",
    [
      "Fails: Number ≠ row.",
      "Correct: Higher control still open.",
      "Fails: Costs a point.",
      "Fails: Flag needs an answer.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Closest listed value; DEG unless told; no invented sheet. Flag only with an answer. Breaks do not pause. ~99 s/item. Hierarchy still beats a prettier number. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.14",
    "You are the CSP reviewing a live decision at a food packaging SKU change. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Timers in this product for 50 / 100 / 200 items.",
    [
      "50 / 100 / 200 minutes",
      "8 / 16 / 32 hours",
      "82.5 / 165 / 330 minutes",
      "90 / 5 / 3 minutes",
    ],
    2,
    "Core Rule: Scaled mock clocks. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Timer set. Why Each Distractor Fails: 50 / 100 / 200 minutes: Fails: One minute per item folklore. | 8 / 16 / 32 hours: Fails: Nonsense. | 82.5 / 165 / 330 minutes: Correct: 82.5/165/330. | 90 / 5 / 3 minutes: Fails: Noise numbers.",
    "TIME",
    "Foundation",
    [
      "Fails: One minute per item folklore.",
      "Fails: Nonsense.",
      "Correct: 82.5/165/330.",
      "Fails: Noise numbers.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Closest listed value; DEG unless told; no invented sheet. Flag only with an answer. Breaks do not pause. ~99 s/item. Hierarchy still beats a prettier number. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.14",
    "You are the CSP reviewing a live decision at a semiconductor tool install. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Pretest items during the sitting are:.",
    [
      "Marked with a star so you can skip.",
      "Always items 1–25.",
      "Paused during breaks only.",
      "Unlabeled and still consume time — treat every item as live.",
    ],
    3,
    "Core Rule: Unlabeled pretest. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Pretest handling. Why Each Distractor Fails: Marked with a star so you can skip.: Fails: Not marked. | Always items 1–25.: Fails: Not a fixed block you are told. | Paused during breaks only.: Fails: Break does not pause anything. | Unlabeled and still consume time — treat every item as live.: Correct: Treat as live.",
    "STEM",
    "Exam",
    [
      "Fails: Not marked.",
      "Fails: Not a fixed block you are told.",
      "Fails: Break does not pause anything.",
      "Correct: Treat as live.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Closest listed value; DEG unless told; no invented sheet. Flag only with an answer. Breaks do not pause. ~99 s/item. Hierarchy still beats a prettier number. Verify the critical step before accepting a lower-tier control.",
    }
  ),
];

