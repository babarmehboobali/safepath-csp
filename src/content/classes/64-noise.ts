import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D6.01";

export const classFields: ClassFields = {
  hook: "A mechanic is at 95 dBA for a full shift. Operations says “OSHA allows 8 hours at 90, so 95 is only a little over — NIOSH 3 dB is optional anyway.” You are the CSP. The question is which exchange rate and criterion the stem actually asked.",
  hookOilGas: "A mechanic on a compressor deck is at 95 dBA for a full shift. Operations says “OSHA allows 8 hours at 90, so 95 is only a little over — NIOSH 3 dB is optional anyway.” You are the CSP. The question is which exchange rate and criterion the stem actually asked.",
  hookConstruction: "A mechanic beside a pile driver is at 95 dBA for a full shift. Operations says “OSHA allows 8 hours at 90, so 95 is only a little over — NIOSH 3 dB is optional anyway.” You are the CSP. The question is which exchange rate and criterion the stem actually asked.",
  rule: "OSHA 90 dBA / 5 dB; NIOSH 85 dBA / 3 dB. T = 8 / 2^((L−criterion)/exchange). Dose adds Ci/Ti. Do not mix tables. Quiet the source before muffs.",
  modelCaption: "Two columns. OSHA: 90 dBA / 5 dB — 95 dBA → 4 h. NIOSH: 85 dBA / 3 dB — 88 dBA → 4 h. Caption: exchange rate is a unit system. Muffs sit under the table tagged LAST.",
  workedCase: "(1) Confirm the table: OSHA 95 dBA is (95−90)/5 = 1 doubling. (2) T = 8/2 = 4 hours; an 8-hour shift is 200% dose and a 95 dBA TWA. (3) NIOSH at 95 is a different table — do not mix. Losing answer: using NIOSH 3 dB times on an OSHA citation question, or calling muffs equivalent to quieting the machine.",
  trapsJson: traps(
    "Using NIOSH 3 dB allowable times in an OSHA 5 dB stem (UNIT).",
    "Treating 85 dBA as the OSHA PEL (it is the action level / NIOSH REL).",
    "Calling muffs equivalent to quieting the machine.",
  ),
  contrastJson: contrast([
    { looksLike: "OSHA PEL 90 dBA / 5 dB", actually: "Legal 8-hour PEL and exchange for OSHA dose/TWA" },
    { looksLike: "OSHA AL 85 dBA", actually: "Hearing conservation trigger — not the PEL" },
    { looksLike: "NIOSH REL 85 dBA / 3 dB", actually: "Advisory recommendation — different table" },
    { looksLike: "Hearing protectors", actually: "PPE — last; NRR is not a redesigned source" },
  ]),
  mustScoreJson: mustScore(
    "OSHA: 90 dBA PEL, 5 dB exchange, 85 dBA action level.",
    "NIOSH: 85 dBA REL, 3 dB exchange.",
    "T = 8 / 2^((L−criterion)/exchange) on the matched table.",
    "Dose D = 100 × Σ(Ci/Ti) — add time fractions, not raw dB.",
    "Do not mix 3 dB and 5 dB tables (UNIT).",
    "85 dBA is OSHA AL, not OSHA PEL.",
    "OSHA 95 dBA allowable time is 4 hours.",
    "Quiet / enclose / distance before muffs."
  ),
    stemIfThenJson: stemIfThen(
    { ifStem: "the stem asks OSHA citation TWA", pick: "use 90 dBA and 5 dB" },
    { ifStem: "the stem asks NIOSH REL duration", pick: "use 85 dBA and 3 dB" },
    { ifStem: "a quieter tool is still available", pick: "muffs lose" },
    { ifStem: "two times at two levels", pick: "add Ci/Ti — do not average dB" },
    { ifStem: "85 dBA OSHA TWA", pick: "that is AL/HCP, not a 90 dBA PEL citation" },
    { ifStem: "the calculator is open", pick: "use y^x for 2^n and pick the closest rounded value" },
  ),
  brief: `OSHA 90/5; NIOSH 85/3. T = 8 / 2^((L−criterion)/exchange). Don’t mix tables. Quiet the source first. Calculator: y^x, closest rounded value. If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
OSHA noise: 5 dB exchange, 90 dBA PEL for 8 hours, 85 dBA action level for hearing conservation. Allowable time T = 8 / 2^((L−90)/5). NIOSH: 3 dB exchange, 85 dBA REL, T = 8 / 2^((L−85)/3). Dose D = 100 × Σ(Ci/Ti). OSHA TWA ≈ 90 + 16.61 log10(D/100). Do not mix tables. Hierarchy: quiet the source, enclose, or use distance before muffs. If two answers work, take higher hierarchy / system / design.

Field move
A mechanic is at 95 dBA for a full shift. Operations will say OSHA allows 8 hours at 90, so 95 is only a little over, and NIOSH 3 dB is optional. Walk the matched pair. OSHA 95 dBA is one 5 dB doubling above 90, so T = 4 hours. An 8-hour shift at 95 is 200% dose and a 95 dBA TWA. NIOSH at 95 is a different table and a much shorter T. Using NIOSH times on an OSHA citation question is UNIT. 85 dBA is the OSHA action level and the NIOSH REL — it is not the OSHA PEL. Buy quieter tools or enclose before an earplug program. When the compressor has not been purchased, specify a quieter machine; do not commission custom muffs as the primary control.

Exam
Dose adds time fractions, not decibels. You do not average 90 and 100 as 95 dBA without time and exchange. Two hours at 100 dBA plus four hours at 90 dBA is 150% OSHA dose, not a gut 95. Calculator pitfall: use y^x for 2^n; DEG versus RAD is irrelevant to this power; pick the closest rounded listed value. When the last sentence says a quieter tool is still available, muffs lose. When the last sentence asks NIOSH REL duration, stay on 85/3. Acute acoustic-trauma hospitalization is still 24 hours to OSHA; annual audiograms are a parallel calendar, not that clock. 85 dBA OSHA TWA is AL/HCP, not a PEL citation.

Write the matched pair at the top of the scratch page before you calculate: OSHA 90/5 or NIOSH 85/3. Then T, then dose as a sum of Ci/Ti, then TWA only if asked. Hierarchy under the table: quieter source, enclosure, distance, time limits, then HPD. Calculator: y^x, log, closest listed value. Last sentence picks the table and picks whether muffs are still allowed to win.
`,
  deep: `CSP-11 Domain 6 Occupational Health and Ergonomics3 dB and 5 dB in one paragraph. Treat exchange rate and criterion as a unit system. OSHA 1910.95: PEL 90 dBA eight-hour TWA, 5 dB exchange, action level 85 dBA for a hearing conservation program (monitoring, audiograms, training, protectors as required). A-weighting for the PEL. Impulse and impact have additional notes; do not invent them if the stem is a continuous A-weighted TWA. NIOSH REL 85 dBA with 3 dB exchange is a health recommendation, not the OSHA PEL. Calling the REL the PEL is PELTLV. Using NIOSH times on an OSHA citation stem is UNIT. Using OSHA times on a NIOSH REL duration stem is the same miss in reverse.

Formulas you must be able to drive without a sheet. OSHA T = 8 / 2^((L−90)/5). NIOSH T = 8 / 2^((L−85)/3). Dose D = 100 × Σ(Ci/Ti). OSHA TWA ≈ 90 + 16.61 log10(D/100). Anchors worth memorizing because they are the distractors: OSHA 95 dBA → 4 h; OSHA 100 dBA → 2 h; NIOSH 88 dBA → 4 h; NIOSH 91 dBA → 2 h; NIOSH 100 dBA → 0.25 h (15 min). An 8-hour shift at OSHA 95 dBA is 200% dose; TWA = 90 + 16.61 log10(2) ≈ 95. Two hours at 100 dBA (OSHA T=2) plus four hours at 90 dBA (T=8) is D = 100 × (2/2 + 4/8) = 150%. Do not average 100 and 90 as 95 dBA by gut. That is FORM. A 250% dose is not 90 dBA and not 100 dBA by adding ten; it is 90 + 16.61 log10(2.5) ≈ 96.6, then the closest listed value.

Hierarchy still sits under the table. Specify a quieter tool, maintain, enclose, or use distance, then administrative time limits, then hearing-protection devices. NRR derating is a PPE calculation, not source control. When a quieter tool is still available, muffs with a high NRR lose. Finance pairing extra umbrella insurance with extra muffs while the blower can still be enclosed is transfer plus PPE, missing Reduce. FMEA “loud feelings” is not a dosimeter strategy. A-weighted personal dose with the correct exchange rate is the tool. Hearing conservation is required at the OSHA action level; it is not permission to skip source control while the machine is still a purchase.

Calculator pitfall for this class: 2^x on a TI-30XS-style practice calculator is y^x, not a guess from memory. log then multiply for the TWA intercept. DEG versus RAD does not change 2^x. Do not invent a formula sheet. Select the closest rounded listed value. Last-sentence discipline: if the stem asks OSHA citation TWA, stay on 90/5. If it asks NIOSH REL duration, stay on 85/3. 85 dBA eight-hour OSHA TWA is at/above the action level (hearing conservation) but not the 90 dBA PEL. TIME: an acute acoustic-trauma hospitalization is 24 hours to OSHA; the annual audiogram reminder is not that clock. If two answers work, take higher hierarchy / system / design — quiet the source before you derate an NRR. Residual HCP after a quieter purchase is allowed; HCP as the primary control while the 95 dBA compressor is still on the quote is not.

Practice the keystrokes until they are boring. OSHA 95: 95 − 90 = 5; ÷ 5 = 1; 2 y^x 1 = 2; 8 ÷ 2 = 4 hours. NIOSH 88: 88 − 85 = 3; ÷ 3 = 1; 2 y^x 1 = 2; 8 ÷ 2 = 4 hours. NIOSH 100: 100 − 85 = 15; ÷ 3 = 5; 2 y^x 5 = 32; 8 ÷ 32 = 0.25 hours. Dose for mixed times: each Ci/Ti is a fraction of that table’s allowance; add the fractions; multiply by 100. TWA from dose: 90 + 16.61 log(D/100). The distractors are always the other table, the action level dressed as a PEL, a dB average with no times, and muffs while a quieter purchase is still open. Mark UNIT, PELTLV, FORM, and HIER on the page before you pick. That is how this class is scored, and that is the only formula sheet you are allowed to carry in your head.`,
  cardFront: "OSHA 5 dB / 90 vs NIOSH 3 dB / 85 — 95 dBA allowed time?",
  cardBack: "OSHA T = 8/2^((L−90)/5) → 95 dBA = 4 h. NIOSH uses 85 and 3 dB. AL 85 ≠ PEL 90. Quiet source before muffs. y^x for 2^n. Study only — not allowed in the test center.",
  teachBackKey: "Pass if the sentence states OSHA 90 dBA with 5 dB exchange versus NIOSH 85 with 3 dB, gives 95 dBA OSHA = 4 hours, and says muffs are last.",
  formulaSlug: "osha-niosh-noise",
};

export const items: ClassItem[] = [
  exam(
    T,
    "You are the CSP reviewing a live decision at a pharma suite changeover. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: OSHA allowable time at a constant 95 dBA.",
    [
      "8 hours because PEL is “about 90.”",
      "4 hours. T = 8 / 2^((95−90)/5) = 8/2 = 4. Keystrokes (TI-30XS): 95 − 90 = 5; ÷ 5 = 1; 2 y^x 1 = 2; 8 ÷ 2 = 4.",
      "2 hours using a 3 dB table.",
      "16 hours using (90−95).",
    ],
    1,
    "OSHA 5 dB, criterion 90. 95 dBA is one doubling → half the time.",
    "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "OSHA 90 dBA / 5 dB; NIOSH 85 dBA / 3 dB. T = 8 / 2^((L−criterion)/exchange). Dose adds Ci/Ti. Do not mix tables. Quiet the source before muffs. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at a warehouse second-shift startup. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: NIOSH allowable time at a constant 88 dBA.",
    [
      "8 hours because 88 is under OSHA PEL.",
      "4 hours using OSHA 5 dB from 90 (wrong table).",
      "4 hours. T = 8 / 2^((88−85)/3) = 8/2 = 4. Keystrokes: 88 − 85 = 3; ÷ 3 = 1; 2 y^x 1 = 2; 8 ÷ 2 = 4.",
      "15 minutes using NIOSH at 100.",
    ],
    2,
    "NIOSH 3 dB from 85. 88 dBA is one doubling.",
    "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "OSHA 90 dBA / 5 dB; NIOSH 85 dBA / 3 dB. T = 8 / 2^((L−criterion)/exchange). Dose adds Ci/Ti. Do not mix tables. Quiet the source before muffs. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Stem asks OSHA citation TWA. Analyst uses NIOSH 3 dB times. Error?",
    [
      "None — 3 dB is always stricter so it is legal.",
      "UNIT: OSHA 5 dB / 90 dBA table is the legal PEL math. NIOSH 3 dB / 85 is advisory (also PELTLV if they call REL the PEL).",
      "TIME — they used 24 hours.",
      "FIN — they used ROI.",
    ],
    1,
    "Legal OSHA table versus NIOSH guideline.",
    "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "OSHA 90 dBA / 5 dB; NIOSH 85 dBA / 3 dB. T = 8 / 2^((L−criterion)/exchange). Dose adds Ci/Ti. Do not mix tables. Quiet the source before muffs. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at a hospital utility plant shutdown. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: 8 hours at 95 dBA, OSHA. Dose and TWA.",
    [
      "100% and 90 dBA because “shift is 8 hours.”",
      "50% dose.",
      "85 dBA TWA using AL as PEL.",
      "200% dose and 95 dBA TWA (two times the 4-hour allowance). TWA = 90 + 16.61 log10(2) ≈ 95. Keystrokes: 8 ÷ 4 = 2; × 100 = 200% dose; 2 log × 16.61 + 90 ≈ 95.",
    ],
    3,
    "Dose is time used / time allowed, not a free 8-hour reset.",
    "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "OSHA 90 dBA / 5 dB; NIOSH 85 dBA / 3 dB. T = 8 / 2^((L−criterion)/exchange). Dose adds Ci/Ti. Do not mix tables. Quiet the source before muffs. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "2 h at 100 dBA (OSHA T=2 h) plus 4 h at 90 dBA (T=8 h). OSHA dose?",
    [
      "Average of 100 and 90 = 95 dBA without times.",
      "150%. D = 100 × (2/2 + 4/8) = 100 × 1.5. Keystrokes: 2 ÷ 2 = 1; 4 ÷ 8 = 0.5; + ; × 100 = 150.",
      "100% ignoring the 90 dBA period.",
      "300% adding 100+90+8+2.",
    ],
    1,
    "Dose adds Ci/Ti fractions. Do not average dB by gut.",
    "FORM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "OSHA 90 dBA / 5 dB; NIOSH 85 dBA / 3 dB. T = 8 / 2^((L−criterion)/exchange). Dose adds Ci/Ti. Do not mix tables. Quiet the source before muffs. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at a semiconductor tool install. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: OSHA vs NIOSH allowable time at 100 dBA.",
    [
      "Both 8 hours.",
      "Both 2 hours.",
      "OSHA 2 hours (two 5 dB steps above 90). NIOSH 0.25 hours / 15 min (five 3 dB steps above 85). Keystrokes NIOSH: 100 − 85 = 15; ÷ 3 = 5; 2 y^x 5 = 32; 8 ÷ 32 = 0.25.",
      "OSHA 15 min, NIOSH 2 hours (swapped).",
    ],
    2,
    "Same dBA, different tables, very different T.",
    "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "OSHA 90 dBA / 5 dB; NIOSH 85 dBA / 3 dB. T = 8 / 2^((L−criterion)/exchange). Dose adds Ci/Ti. Do not mix tables. Quiet the source before muffs. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "85 dBA 8-hour TWA at a site using OSHA. Best classification?",
    [
      "Above the OSHA PEL — citation for 90 automatically.",
      "Below all programs — ignore.",
      "NIOSH 3 dB PEL for OSHA inspectors.",
      "At/above the OSHA action level (hearing conservation) but not the 90 dBA PEL. Don’t call 85 the PEL (PELTLV vs NIOSH REL).",
    ],
    3,
    "OSHA AL 85 vs PEL 90 vs NIOSH REL 85.",
    "PELTLV",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "OSHA 90 dBA / 5 dB; NIOSH 85 dBA / 3 dB. T = 8 / 2^((L−criterion)/exchange). Dose adds Ci/Ti. Do not mix tables. Quiet the source before muffs. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Quieter tool is still available. Team specifies muffs with a high NRR. Best CSP comment?",
    [
      "Specify the quieter tool / enclose / distance first. HPD is PPE last. NRR does not redesign the source.",
      "Approve muffs — NRR is PtD.",
      "Approve muffs plus a poster.",
      "Approve if dose is 200% because PPE erases dose.",
    ],
    0,
    "Source control over HPD.",
    "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "OSHA 90 dBA / 5 dB; NIOSH 85 dBA / 3 dB. T = 8 / 2^((L−criterion)/exchange). Dose adds Ci/Ti. Do not mix tables. Quiet the source before muffs. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Last sentence: the stem asks NIOSH REL duration, not OSHA. 91 dBA constant. T?",
    [
      "OSHA 2 hours anyway.",
      "8 hours.",
      "2 hours NIOSH: (91−85)/3 = 2 doublings; T = 8/4 = 2. Keystrokes: 91 − 85 = 6; ÷ 3 = 2; 2 y^x 2 = 4; 8 ÷ 4 = 2.",
      "15 minutes.",
    ],
    2,
    "Last sentence picked NIOSH. UNIT if you stay on OSHA 5 dB.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "OSHA 90 dBA / 5 dB; NIOSH 85 dBA / 3 dB. T = 8 / 2^((L−criterion)/exchange). Dose adds Ci/Ti. Do not mix tables. Quiet the source before muffs. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Wrong tool: FMEA RPN of “loud feelings” instead of a dosimeter strategy. Comment?",
    [
      "Accept — RPN is 1910.95.",
      "Accept if RPN = 90.",
      "Accept if muffs are stocked.",
      "TOOL: A-weighted personal dose/TWA with the correct exchange rate. Mood RPN is not a noise measurement.",
    ],
    3,
    "FMEA is not a noise dose.",
    "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "OSHA 90 dBA / 5 dB; NIOSH 85 dBA / 3 dB. T = 8 / 2^((L−criterion)/exchange). Dose adds Ci/Ti. Do not mix tables. Quiet the source before muffs. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Two funded moves: extra umbrella AND extra muffs; enclosing the blower is still open. Pair and miss?",
    [
      "Avoid + reduce; muffs are enclosures.",
      "Transfer + PPE; missing Reduce (enclose/quiet the source).",
      "Two OSHA PELs.",
      "3 dB + 5 dB complete Control.",
    ],
    1,
    "Insurance plus PPE is not source control.",
    "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "OSHA 90 dBA / 5 dB; NIOSH 85 dBA / 3 dB. T = 8 / 2^((L−criterion)/exchange). Dose adds Ci/Ti. Do not mix tables. Quiet the source before muffs. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Acute acoustic-trauma hospitalization; team files only an annual audiogram reminder. OSHA clock?",
    [
      "Audiometric annual is the 8-hour clock.",
      "Hospitalization: 24 hours to OSHA. Hearing-conservation calendars are parallel.",
      "7 days.",
      "No clock if NIOSH 3 dB was used.",
    ],
    1,
    "24-hour hospitalization versus annual audiograms.",
    "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "OSHA 90 dBA / 5 dB; NIOSH 85 dBA / 3 dB. T = 8 / 2^((L−criterion)/exchange). Dose adds Ci/Ti. Do not mix tables. Quiet the source before muffs. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "OSHA TWA from 250% dose. Closest value? TWA = 90 + 16.61 log10(D/100).",
    [
      "90 dBA because the shift was 8 hours.",
      "≈ 96.6 dBA. Keystrokes: 250 ÷ 100 = 2.5; log; × 16.61; + 90 ≈ 96.6. Pick the closest listed value.",
      "85 dBA using AL as the intercept.",
      "100 dBA by adding 10 to 90.",
    ],
    1,
    "Use 90 + 16.61 log10(D/100). Calculator: log then multiply. Do not treat dose percent as dB.",
    "FORM",
    "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "OSHA 90 dBA / 5 dB; NIOSH 85 dBA / 3 dB. T = 8 / 2^((L−criterion)/exchange). Dose adds Ci/Ti. Do not mix tables. Quiet the source before muffs. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "A 95 dBA compressor has not been purchased. Commissioning already lists custom muffs and annual audiograms. Best remaining control?",
    [
      "Implement the HCP as the primary control.",
      "Post a noise map and issue disposable plugs.",
      "Specify a quieter compressor or enclose it on the drawing; HCP only for residual.",
      "Rotate operators and skip engineering because 95 is “only a little over 90.”",
    ],
    2,
    "The machine is still a purchase decision. An HCP is not PtD while a quieter source can be specified.",
    "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "OSHA 90 dBA / 5 dB; NIOSH 85 dBA / 3 dB. T = 8 / 2^((L−criterion)/exchange). Dose adds Ci/Ti. Do not mix tables. Quiet the source before muffs. Verify the critical step before accepting a lower-tier control.",
    }
  ),
];

