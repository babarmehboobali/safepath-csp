import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D1.04";

export const classFields: ClassFields = {
  hook: "Gym conversion: occupant load from stem factor, egress parts, half-diagonal remoteness — no pirated tables.",
  hookOilGas: `Plant all-hands reclassifies a room as assembly: load and remoteness decide exits.`,
  hookConstruction: `Temp exhibit hall: refuse travel numbers from the wrong occupancy.`,
  rule: "Occupant load=area/factor when stem gives factor. Exit access ≠ exit ≠ exit discharge. Remoteness uses half-diagonal when stem invokes it (VERIFY edition exceptions). Refuse universal travel distances.",
  modelCaption: "Area÷factor → load → capacity → remoteness (½ diagonal) → protect exits.",
  workedCase: "4,500 ft^2 / 15 = 300 persons (stem factor). 90×50 diagonal≈102.96 ft; half≈51.5 ft. Doors 20 ft apart fail that remoteness test.",
  trapsJson: traps(
    "Wrong occupancy factor",
    "Calling corridor the exit",
    "Adjacent doors as remote",
  ),
  contrastJson: contrast([
    { looksLike: "Exit access", actually: "Path to exit" },
    { looksLike: "Exit", actually: "Protected way" },
    { looksLike: "Exit discharge", actually: "To public way" },
    { looksLike: "Occupant-load factor", actually: "Stem/edition specific" },
    { looksLike: "Half-diagonal", actually: "Remoteness teaching" },
    { looksLike: "Travel distance", actually: "Occupancy/protection specific" },
  ]),
  mustScoreJson: mustScore(
    "Occupant load, egress capacity, travel distance, common path, dead ends.",
    "Exit discharge to public way must remain available.",
    "Locking arrangements and delayed egress have strict conditions.",
    "Accessible means of egress considerations appear in stems.",
    "Fire-rated construction supports egress time.",
    "Drills verify human performance of the geometry.",
    "Blocked exits fail regardless of detection quality.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "exit blocked by storage", pick: "clear egress immediately" },
    { ifStem: "occupant load increases", pick: "recalculate capacity" },
    { ifStem: "common path excessive", pick: "add exits/redesign" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "only louder alarm for blocked stair", pick: "fix the stair" },
  ),

  brief: `Occupant load=area/factor when stem gives factor. Exit access â  exit â  exit discharge. Remoteness uses half-diagonal when stem invokes it (VERIFY edition exceptions). Refuse universal travel distances. If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Occupant load=area/factor when stem gives factor. Exit access â  exit â  exit discharge. Remoteness uses half-diagonal when stem invokes it (VERIFY edition exceptions). Refuse universal travel distances. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
Gym conversion: occupant load from stem factor, egress parts, half-diagonal remoteness â no pirated tables. Oil-and-gas skin: Plant all-hands reclassifies a room as assembly: load and remoteness decide exits. Construction skin: Temp exhibit hall: refuse travel numbers from the wrong occupancy. Work the case: 4,500 ft^2 / 15 = 300 persons (stem factor). 90Ã50 diagonalâ102.96 ft; halfâ51.5 ft. Doors 20 ft apart fail that remoteness test. Classic traps: Wrong occupancy factor; Calling corridor the exit; Adjacent doors as remote. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for life safety occupant egress. Verify whether a higher system or design fix is still open. Contrast labels: Exit access is actually Path to exit; Exit is actually Protected way; Exit discharge is actually To public way; Occupant-load factor is actually Stem/edition specific; Half-diagonal is actually Remoteness teaching. If the stem shows exit blocked by storage, pick clear egress immediately. If the stem shows occupant load increases, pick recalculate capacity. If the stem shows common path excessive, pick add exits/redesign. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows only louder alarm for blocked stair, pick fix the stair. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Occupant load? Access vs exit? Half-diagonal sits in CSP-11 Domain 1 Applied Safety Technology. The exam tests whether you apply the rule when a package already looks complete. Core rule: Occupant load=area/factor when stem gives factor. Exit access â  exit â  exit discharge. Remoteness uses half-diagonal when stem invokes it (VERIFY edition exceptions). Refuse universal travel distances. Field context: Gym conversion: occupant load from stem factor, egress parts, half-diagonal remoteness â no pirated tables. The oil-and-gas skin shifts the same decision into production pressure: Plant all-hands reclassifies a room as assembly: load and remoteness decide exits. The construction skin shifts it into schedule and trade stacking: Temp exhibit hall: refuse travel numbers from the wrong occupancy. Model caption for this class: AreaÃ·factor â load â capacity â remoteness (Â½ diagonal) â protect exits. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Occupant load, egress capacity, travel distance, common path, dead ends. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Exit discharge to public way must remain available. (3) Locking arrangements and delayed egress have strict conditions. (4) Accessible means of egress considerations appear in stems. (5) Fire-rated construction supports egress time. (6) Drills verify human performance of the geometry. (7) Blocked exits fail regardless of detection quality. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: 4,500 ft^2 / 15 = 300 persons (stem factor). 90Ã50 diagonalâ102.96 ft; halfâ51.5 ft. Doors 20 ft apart fail that remoteness test. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Wrong occupancy factor; Calling corridor the exit; Adjacent doors as remote. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Exit access” is really Path to exit; “Exit” is really Protected way; “Exit discharge” is really To public way; “Occupant-load factor” is really Stem/edition specific; “Half-diagonal” is really Remoteness teaching; “Travel distance” is really Occupancy/protection specific. Stem-if-then map: if exit blocked by storage → clear egress immediately; if occupant load increases → recalculate capacity; if common path excessive → add exits/redesign; if two answers work → higher hierarchy / system / design; if only louder alarm for blocked stair → fix the stair. Scoring favors evidence, owners, verification, and hierarchy-smart controls on life safety occupant egress. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet. Prevention and design still beat detection and emergency response for life safety occupant egress when those higher moves remain open in the stem.`,
  cardFront: "Occupant load? Access vs exit? Half-diagonal?",
  cardBack: "4500/15=300; ½ diagonal≈51.5 ft. Study only.",
  teachBackKey: "Computes stem load, names three parts, explains remoteness.",
  formulaSlug: "occupant-load",
};

export const items: ClassItem[] = [
  exam(
    "CSP-11 D1.04",
    "You are the CSP reviewing a live decision at a grain elevator maintenance day. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: 4,500 ft^2; stem factor 15. Load.",
    [
      "300",
      "15",
      "4,500",
      "67 (wrong factor)",
    ],
    0,
    "Core Rule: area/factor. Calculation Steps: 4500/15=300. Standards Cited: Stem factor. Why Each Distractor Fails: 300: Correct: 300 | 15: Fails: Factor alone | 4,500: Fails: Area | 67 (wrong factor): Fails: Wrong occ",
    "FORM",
    "Exam",
    [
      "Correct: 300",
      "Fails: Factor alone",
      "Fails: Area",
      "Fails: Wrong occ",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Occupant load=area/factor when stem gives factor. Exit access ≠ exit ≠ exit discharge. Remoteness uses half-diagonal when stem invokes it (VERIFY edition exceptions). Refuse universal travel distances. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.04",
    "You are the CSP reviewing a live decision at a hospital utility plant shutdown. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Exit discharge is.",
    [
      "Aisle in room",
      "Path from exit to public way",
      "Protected stair",
      "Load calc",
    ],
    1,
    "Core Rule: Discharge after exit. Calculation Steps: Sequence. Standards Cited: 101 parts. Why Each Distractor Fails: Path from exit to public way: Correct: Discharge | Aisle in room: Fails: Access | Protected stair: Fails: Often exit | Load calc: Fails: N/A",
    "TOOL",
    "Exam",
    [
      "Fails: Access",
      "Correct: Discharge",
      "Fails: Often exit",
      "Fails: N/A",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Occupant load=area/factor when stem gives factor. Exit access ≠ exit ≠ exit discharge. Remoteness uses half-diagonal when stem invokes it (VERIFY edition exceptions). Refuse universal travel distances. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.04",
    "You are the CSP reviewing a live decision at a food packaging SKU change. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: 90×50 ft room; half-diagonal ≈.",
    [
      "45 ft (half length)",
      "70 ft",
      "≈51.5 ft",
      "20 ft",
    ],
    2,
    "Core Rule: sqrt(90^2+50^2)/2. Calculation Steps: ≈102.96/2≈51.5. Standards Cited: Remoteness teaching. Why Each Distractor Fails: ≈51.5 ft: Correct: 51.5 | 45 ft (half length): Fails: Wrong | 70 ft: Fails: Guess | 20 ft: Fails: Wish",
    "FORM",
    "Exam",
    [
      "Fails: Wrong",
      "Fails: Guess",
      "Correct: 51.5",
      "Fails: Wish",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Occupant load=area/factor when stem gives factor. Exit access ≠ exit ≠ exit discharge. Remoteness uses half-diagonal when stem invokes it (VERIFY edition exceptions). Refuse universal travel distances. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.04",
    "You are the CSP reviewing a live decision at a semiconductor tool install. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Exits 18 ft apart; stem half-diagonal 51 ft.",
    [
      "OK because two exits",
      "OK if sprinklers w/o stem",
      "OK if load<50 always",
      "Likely fails remoteness",
    ],
    3,
    "Core Rule: Separation vs requirement. Calculation Steps: 18<<51. Standards Cited: Arrangement. Why Each Distractor Fails: Likely fails remoteness: Correct: Fails test | OK because two exits: Fails: Count≠arrange | OK if sprinklers w/o stem: Fails: No authority | OK if load<50 always: Fails: False",
    "STEM",
    "Exam",
    [
      "Fails: Count≠arrange",
      "Fails: No authority",
      "Fails: False",
      "Correct: Fails test",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Occupant load=area/factor when stem gives factor. Exit access ≠ exit ≠ exit discharge. Remoteness uses half-diagonal when stem invokes it (VERIFY edition exceptions). Refuse universal travel distances. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.04",
    "You are the CSP reviewing a live decision at an offshore fabrication night shift. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Corridor to stair is typically.",
    [
      "Exit access",
      "Exit discharge",
      "Public way",
      "Load factor",
    ],
    0,
    "Core Rule: Path to exit. Calculation Steps: Parts. Standards Cited: Terminology. Why Each Distractor Fails: Exit access: Correct: Access | Exit discharge: Fails: Wrong stage | Public way: Fails: Outside | Load factor: Fails: N/A",
    "TOOL",
    "Exam",
    [
      "Correct: Access",
      "Fails: Wrong stage",
      "Fails: Outside",
      "Fails: N/A",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Occupant load=area/factor when stem gives factor. Exit access ≠ exit ≠ exit discharge. Remoteness uses half-diagonal when stem invokes it (VERIFY edition exceptions). Refuse universal travel distances. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.04",
    "You are the CSP reviewing a live decision at a municipal water-plant retrofit. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Stem omits factor. Best refusal.",
    [
      "Using area as load",
      "Inventing a universal 15",
      "Using diagonal as load",
      "Assuming residential factor",
    ],
    1,
    "Core Rule: No factor, no load. Calculation Steps: Refuse universals. Standards Cited: VERIFY. Why Each Distractor Fails: Inventing a universal 15: Correct: Refuse inventing | Using area as load: Fails: Also wrong | Using diagonal as load: Fails: Wrong | Assuming residential factor: Fails: Wrong",
    "STEM",
    "Exam",
    [
      "Fails: Also wrong",
      "Correct: Refuse inventing",
      "Fails: Wrong",
      "Fails: Wrong",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Occupant load=area/factor when stem gives factor. Exit access ≠ exit ≠ exit discharge. Remoteness uses half-diagonal when stem invokes it (VERIFY edition exceptions). Refuse universal travel distances. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.04",
    "You are the CSP reviewing a live decision at a plastics compounding turnaround. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: 3,000 ft^2; stem factor 7. Load.",
    [
      "21",
      "3,000",
      "≈429",
      "7",
    ],
    2,
    "Core Rule: 3000/7≈428.6. Calculation Steps: Division. Standards Cited: Stem factor. Why Each Distractor Fails: ≈429: Correct: ≈429 | 21: Fails: Multiplied | 3,000: Fails: Area | 7: Fails: Factor",
    "FORM",
    "Exam",
    [
      "Fails: Multiplied",
      "Fails: Area",
      "Correct: ≈429",
      "Fails: Factor",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Occupant load=area/factor when stem gives factor. Exit access ≠ exit ≠ exit discharge. Remoteness uses half-diagonal when stem invokes it (VERIFY edition exceptions). Refuse universal travel distances. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.04",
    "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: OSHA vs NFPA 101 when stem asks consensus detail.",
    [
      "Always OSHA door numbers",
      "They are identical",
      "Use IBC only w/o stem",
      "Follow stem authority: 101 consensus vs OSHA floor",
    ],
    3,
    "Core Rule: Legal vs consensus. Calculation Steps: Answer named authority. Standards Cited: OSHA vs NFPA. Why Each Distractor Fails: Follow stem authority: 101 consensus vs OSHA floor: Correct: Authority | Always OSHA door numbers: Fails: Wrong | They are identical: Fails: False | Use IBC only w/o stem: Fails: Invented",
    "PELTLV",
    "Exam",
    [
      "Fails: Wrong",
      "Fails: False",
      "Fails: Invented",
      "Correct: Authority",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Occupant load=area/factor when stem gives factor. Exit access ≠ exit ≠ exit discharge. Remoteness uses half-diagonal when stem invokes it (VERIFY edition exceptions). Refuse universal travel distances. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.04",
    "You are the CSP reviewing a live decision at a refinery coker outage. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Protected stair enclosure is typically.",
    [
      "Exit",
      "Exit access only",
      "Exit discharge only",
      "Public way",
    ],
    0,
    "Core Rule: Protected way = exit. Calculation Steps: Parts. Standards Cited: 101. Why Each Distractor Fails: Exit: Correct: Exit | Exit access only: Fails: Before | Exit discharge only: Fails: After | Public way: Fails: Outside",
    "TOOL",
    "Exam",
    [
      "Correct: Exit",
      "Fails: Before",
      "Fails: After",
      "Fails: Outside",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Occupant load=area/factor when stem gives factor. Exit access ≠ exit ≠ exit discharge. Remoteness uses half-diagonal when stem invokes it (VERIFY edition exceptions). Refuse universal travel distances. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.04",
    "You are the CSP reviewing a live decision at a bridge deck pour laydown yard. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Why refuse universal 250 ft travel distance.",
    [
      "Travel is never limited",
      "Limits depend on occupancy/protection/edition",
      "Only metric allowed",
      "Load replaces travel",
    ],
    1,
    "Core Rule: No universal. Calculation Steps: VERIFY by edition. Standards Cited: Variability. Why Each Distractor Fails: Limits depend on occupancy/protection/edition: Correct: Correct | Travel is never limited: Fails: False | Only metric allowed: Fails: False | Load replaces travel: Fails: False",
    "STEM",
    "Exam",
    [
      "Fails: False",
      "Correct: Correct",
      "Fails: False",
      "Fails: False",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Occupant load=area/factor when stem gives factor. Exit access ≠ exit ≠ exit discharge. Remoteness uses half-diagonal when stem invokes it (VERIFY edition exceptions). Refuse universal travel distances. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.04",
    "You are the CSP reviewing a live decision at a pharma suite changeover. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: 6,000 ft^2 office; stem factor 100. Load.",
    [
      "100",
      "6,000",
      "60",
      "600",
    ],
    2,
    "Core Rule: 6000/100=60. Calculation Steps: Division. Standards Cited: Stem. Why Each Distractor Fails: 60: Correct: 60 | 100: Fails: Factor | 6,000: Fails: Area | 600: Fails: ×10",
    "FORM",
    "Exam",
    [
      "Fails: Factor",
      "Fails: Area",
      "Correct: 60",
      "Fails: ×10",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Occupant load=area/factor when stem gives factor. Exit access ≠ exit ≠ exit discharge. Remoteness uses half-diagonal when stem invokes it (VERIFY edition exceptions). Refuse universal travel distances. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.04",
    "You are the CSP reviewing a live decision at a warehouse second-shift startup. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Half-diagonal primarily tests.",
    [
      "Sprinkler density",
      "Occupant-load tables",
      "Fire pump churn",
      "Exit remoteness so one fire does not block both",
    ],
    3,
    "Core Rule: Remoteness. Calculation Steps: Arrangement. Standards Cited: 101 concept. Why Each Distractor Fails: Exit remoteness so one fire does not block both: Correct: Remoteness | Sprinkler density: Fails: Unrelated | Occupant-load tables: Fails: Load | Fire pump churn: Fails: FP",
    "TOOL",
    "Exam",
    [
      "Fails: Unrelated",
      "Fails: Load",
      "Fails: FP",
      "Correct: Remoteness",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Occupant load=area/factor when stem gives factor. Exit access ≠ exit ≠ exit discharge. Remoteness uses half-diagonal when stem invokes it (VERIFY edition exceptions). Refuse universal travel distances. Verify the critical step before accepting a lower-tier control.",
    }
  ),
];

