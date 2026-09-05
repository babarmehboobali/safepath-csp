import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D6.01";

export const classFields: ClassFields = {
  hook: "A 95 dBA OSHA item and an 88 dBA NIOSH item in the same sitting. Matched pairs only. Then specify the quieter machine if it is still on the bid.",
  hookOilGas: "Compressor skid 95 dBA. OSHA T=4 h. Do not grab NIOSH 3 dB. Quiet the source if the model is not purchased.",
  hookConstruction: "Site generator 95 dBA. Same OSHA 4 h. Distance, enclosure, and a quieter rental beat a case of muffs as primary.",
  rule: "OSHA 90/5 and NIOSH 85/3 travel as pairs. T=8/2^((L-criterion)/exchange). Dose sums C/T. HCP does not beat a still-open quieter source.",
  modelCaption: "Two columns: OSHA 90/5 vs NIOSH 85/3. T halves every exchange step. Caption: never cross the columns; then hierarchy.",
  workedCase: "(1) OSHA 95 dBA → T=4 h. (2) NIOSH 88 dBA → T=4 h. (3) OSHA 2 h@95 + 2 h@90 → D=50%+25%=75%. Losing answers: 3 dB on a 90 criterion, ln instead of log10, or muffs while a quieter rental is open.",
  trapsJson: traps(
    "Mixing 3 dB with 90 or 5 dB with 85.",
    "log10 vs ln on TWA-from-dose.",
    "HCP as the primary control while a quieter source is open.",
  ),
  contrastJson: contrast([
    { looksLike: "OSHA PEL package", actually: "90 dBA, 5 dB, AL 85" },
    { looksLike: "NIOSH REL package", actually: "85 dBA, 3 dB" },
    { looksLike: "Action level", actually: "50% dose trigger — not the PEL" },
    { looksLike: "Exchange rate", actually: "dB for doubling of dose" },
    { looksLike: "HCP", actually: "Admin/medical residual" },
    { looksLike: "Specify quiet", actually: "Substitution/engineering at purchase" },
  ]),
  mustScoreJson: mustScore(
    "OSHA: 90 dBA, 5 dB exchange, AL 85.",
    "NIOSH: 85 dBA, 3 dB exchange.",
    "T=8/2^((L-criterion)/exchange).",
    "Dose D=100×Σ(C/T) with matching T.",
    "Do not mix pairs.",
    "TWA-from-dose uses the stem’s log form (often log10).",
    "HCP does not beat a still-open quieter source.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "OSHA 95 dBA", pick: "T=4 h" },
    { ifStem: "NIOSH 88 dBA", pick: "T=4 h" },
    { ifStem: "mixed levels", pick: "sum C/T with matching table" },
    { ifStem: "TWA from dose", pick: "stem formula; log10 unless told otherwise" },
    { ifStem: "quieter machine still on the bid", pick: "specify it" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" }
  ),
  brief: `Matched pairs: OSHA 90/5, NIOSH 85/3. Sum C/T. Quiet the source if open. Exam default: if two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
OSHA and NIOSH noise packages travel as matched pairs. OSHA teaching: 90 dBA criterion, 5 dB exchange, 85 dBA action level, 140 dB peak. Allowable time T=8/2^((L-90)/5). NIOSH teaching: 85 dBA REL criterion, 3 dB exchange. T=8/2^((L-85)/3). Never mix 3 dB with 90, or 5 dB with 85. A hearing-conservation program is not a substitute for a quieter machine that has not been ordered.

Field move
At 95 dBA, OSHA T=4 h. At 88 dBA, NIOSH T=4 h. Dose D=100×Σ(C_i/T_i). TWA from dose: OSHA TWA=90+16.61 log10(D/100) when that form is in play. Pick closest. Units: dBA vs peak dB, hours vs minutes. If a quieter source is still on the bid sheet, specify it; HCP is residual.

Exam
If two answers work, take higher hierarchy / system / design. FORM/UNIT traps: mixed exchange and criterion, 16.61 vs 10, log10 vs ln, action level treated as PEL. Last sentence may freeze the machine already installed — then engineering on the existing source still beats earmuffs if feasible. Redraw the decision sequence for OSHA 5 dB versus NIOSH 3 dB noise before looking at options. Cost and convenience will sell a lower control that looks busy. Attractive wrong answers on OSHA 5 dB versus NIOSH 3 dB noise are usually competent lower-row programs, busy paperwork, or a funded contract. Read the last sentence for constraints that close a higher control, then take the best remaining system or design fix for OSHA 5 dB versus NIOSH 3 dB noise. When capital or authority remains, spend it on the highest remaining hardware or independent layer, then use administrative controls and PPE only for residual OSHA 5 dB versus NIOSH 3 dB noise risk. Do not let schedule pressure invert the OSHA 5 dB versus NIOSH 3 dB noise sequence. Verification is a test with an owner, not a calendar invite. If two answers both look professional, take higher hierarchy / system / design on OSHA 5 dB versus NIOSH 3 dB noise. Teach-back restates the OSHA 5 dB versus NIOSH 3 dB noise rule, the sequence, and the verification step in one spoken sentence.
`,
  deep: `Class 83 taught the pair. This lab is dose arithmetic plus hierarchy. The OSHA PEL package is a 90 dBA 8-hour TWA with a 5 dB exchange rate and a 50% action level at 85 dBA. Doubling time: every +5 dBA halves allowed duration. 90→8 h, 95→4 h, 100→2 h, 85→16 h (which is why AL is 50% of PEL dose at 85 for 8 h). NIOSH REL is 85 dBA with a 3 dB exchange: every +3 dBA halves allowed time. 85→8 h, 88→4 h, 91→2 h. Mixing the tables is the classic miss.

Dose for mixed levels: D=100×Σ(C_i/T_i) where T_i is the allowed time at that level from the matching table. Two hours at OSHA 95 (T=4) is 50% plus two hours at 90 (T=8) is 25% → D=75%. Do not use NIOSH T_i in an OSHA stem. Converting dose to TWA uses the stem’s formula — often TWA=90+16.61 log10(D/100) for OSHA. log10, not ln. 16.61 is 5/log10(2) approximately; using 10 is a 3 dB hangover.

Peak/impulse, dosimeter vs SLM, A-weighting vs C-weighting for peaks, and standard vs action-level clocks are last-sentence traps. A 140 dB peak question is not a TWA question. A 12-hour shift needs the stem’s adjustment method; do not invent one. Hearing protectors have NRR derating teaching when the stem gives it — do not apply a derate the stem did not ask.

Hierarchy: buy quiet, enclose, damp, isolate, then administrative time limits, then HPD. If two answers work, take higher hierarchy / system / design. An HCP with audiograms is not elimination of 110 dBA. If the blower is not yet purchased, specify 82 dBA. If it is already bolted down, remaining engineering still beats a poster about earmuffs. Teach-back: name the matched pair, compute T or dose, pick closest, then name the quieter design still open. Scoring on OSHA 5 dB versus NIOSH 3 dB noise favors evidence, owners, verification, and hierarchy-smart controls rather than binders that look complete. Last-sentence constraints may freeze a higher OSHA 5 dB versus NIOSH 3 dB noise control; then take the best remaining fix and verify it instead of wishing the freeze away. Shared assumptions and checkbox closures create false assurance on OSHA 5 dB versus NIOSH 3 dB noise; name the assumption and test it. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet. Hold the exam default on OSHA 5 dB versus NIOSH 3 dB noise: if two answers work, take higher hierarchy / system / design, and reject polished paperwork when a higher system or design fix remains. In teach-back, name the OSHA 5 dB versus NIOSH 3 dB noise decision, the highest open control, and the verification step without reciting fake clause trivia. Field skins change the equipment, not the logic: a skid, a site tent, and a paint line still fail the same OSHA 5 dB versus NIOSH 3 dB noise test. A funded lower-row contract does not freeze a higher OSHA 5 dB versus NIOSH 3 dB noise row the stem still leaves open. Design the next job so the OSHA 5 dB versus NIOSH 3 dB noise control is obvious, then still implement it, then still verify it. Do not restart OSHA 5 dB versus NIOSH 3 dB noise from the bottom because PPE and training are what the plant already knows how to buy. Units, clocks, and tool names are traps only when you skip the last sentence on OSHA 5 dB versus NIOSH 3 dB noise. Walk the OSHA 5 dB versus NIOSH 3 dB noise sequence until it is automatic, then apply the last sentence, then pick the higher remaining row. Independent engineered layers beat detection, watchstanders, and emergency response when those layers are still open on OSHA 5 dB versus NIOSH 3 dB noise. Paper, PPE, and insurance can sit beside a OSHA 5 dB versus NIOSH 3 dB noise control; they do not replace it.
`,
  cardFront: "OSHA 5 vs NIOSH 3 — T and dose?",
  cardBack: "OSHA 95→4 h; NIOSH 88→4 h. Never mix pairs. HCP loses to a still-open quiet machine. Study only.",
  teachBackKey: "Pass if pairs stay matched, T or dose is computed, and a quieter source still beats HCP.",
  formulaSlug: "osha-niosh-noise",
};

export const items: ClassItem[] = [
  exam(
    "CSP-11 D6.01",
    "You are the CSP reviewing a live decision at a warehouse second-shift startup. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: OSHA 95 dBA continuous. Allowed T.",
    [
      "4 hours",
      "8 hours",
      "2 hours (one extra doubling)",
      "4 hours on NIOSH table mixed in",
    ],
    0,
    "Core Rule: One 5 dB step above 90 halves 8 h to 4 h. Calculation Steps: (95-90)/5=1 doubling; T=8/2=4 h. Standards Cited: OSHA 90/5. Why Each Distractor Fails: 4 hours: Correct: Matched OSHA pair. | 8 hours: Fails: Used criterion as T. | 2 hours (one extra doubling): Fails: Two doublings. | 4 hours on NIOSH table mixed in: Fails: Wrong table.",
    "FORM",
    "Exam",
    [
      "Correct: Matched OSHA pair.",
      "Fails: Used criterion as T.",
      "Fails: Two doublings.",
      "Fails: Wrong table.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA 90/5 and NIOSH 85/3 travel as pairs. T=8/2^((L-criterion)/exchange). Dose sums C/T. HCP does not beat a still-open quieter source. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D6.01",
    "You are the CSP reviewing a live decision at a grain elevator maintenance day. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: NIOSH 88 dBA continuous. Allowed T.",
    [
      "8 hours",
      "4 hours",
      "5 hours (OSHA 5 mixed)",
      "16 hours",
    ],
    1,
    "Core Rule: One 3 dB step above 85 halves 8 h to 4 h. Calculation Steps: (88-85)/3=1; T=8/2=4 h. Standards Cited: NIOSH 85/3. Why Each Distractor Fails: 8 hours: Fails: No doubling. | 4 hours: Correct: Matched NIOSH pair. | 5 hours (OSHA 5 mixed): Fails: Wrong exchange. | 16 hours: Fails: Wrong direction.",
    "FORM",
    "Exam",
    [
      "Fails: No doubling.",
      "Correct: Matched NIOSH pair.",
      "Fails: Wrong exchange.",
      "Fails: Wrong direction.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA 90/5 and NIOSH 85/3 travel as pairs. T=8/2^((L-criterion)/exchange). Dose sums C/T. HCP does not beat a still-open quieter source. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D6.01",
    "You are the CSP reviewing a live decision at a hospital utility plant shutdown. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: OSHA: 2 h at 95 (T=4) and 2 h at 90 (T=8). Dose.",
    [
      "100%",
      "50%",
      "75%",
      "25%",
    ],
    2,
    "Core Rule: D=100×(2/4+2/8)=100×(0.5+0.25)=75%. Calculation Steps: C/T sum ×100. Standards Cited: OSHA dose. Why Each Distractor Fails: 100%: Fails: Pretend full shift at PEL. | 50%: Fails: Only the 95 part. | 75%: Correct: 75%. | 25%: Fails: Only the 90 part.",
    "FORM",
    "Exam",
    [
      "Fails: Pretend full shift at PEL.",
      "Fails: Only the 95 part.",
      "Correct: 75%.",
      "Fails: Only the 90 part.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA 90/5 and NIOSH 85/3 travel as pairs. T=8/2^((L-criterion)/exchange). Dose sums C/T. HCP does not beat a still-open quieter source. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D6.01",
    "Using NIOSH 3 dB times in an OSHA dose item is which miss?",
    [
      "HIER — exchange rates are hierarchy rows.",
      "TIME — 1904 clock.",
      "FIN — a deductible.",
      "UNIT/FORM — mixed pair.",
    ],
    3,
    "Core Rule: Pairs must stay matched. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Mix trap. Why Each Distractor Fails: HIER — exchange rates are hierarchy rows.: Fails: Not a row. | TIME — 1904 clock.: Fails: Not 1904. | FIN — a deductible.: Fails: Not finance. | UNIT/FORM — mixed pair.: Correct: Wrong table.",
    "UNIT",
    "Foundation",
    [
      "Fails: Not a row.",
      "Fails: Not 1904.",
      "Fails: Not finance.",
      "Correct: Wrong table.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA 90/5 and NIOSH 85/3 travel as pairs. T=8/2^((L-criterion)/exchange). Dose sums C/T. HCP does not beat a still-open quieter source. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D6.01",
    "You are the CSP reviewing a live decision at a semiconductor tool install. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Action level 85 dBA OSHA vs PEL 90. Best label.",
    [
      "AL is a 50% dose trigger; it is not the PEL.",
      "AL is the PEL.",
      "AL is NIOSH only.",
      "AL is a TLV ceiling for noise.",
    ],
    0,
    "Core Rule: AL ≠ PEL. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: AL vs PEL. Why Each Distractor Fails: AL is a 50% dose trigger; it is not the PEL.: Correct: 50% trigger. | AL is the PEL.: Fails: Not the PEL. | AL is NIOSH only.: Fails: OSHA has an AL. | AL is a TLV ceiling for noise.: Fails: TLV is another scheme.",
    "PELTLV",
    "Exam",
    [
      "Correct: 50% trigger.",
      "Fails: Not the PEL.",
      "Fails: OSHA has an AL.",
      "Fails: TLV is another scheme.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA 90/5 and NIOSH 85/3 travel as pairs. T=8/2^((L-criterion)/exchange). Dose sums C/T. HCP does not beat a still-open quieter source. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D6.01",
    "110 dBA blower not yet purchased; 82 dBA model on the bid; HCP already written. Pick:",
    [
      "HCP as the primary control.",
      "Specify the 82 dBA machine; HCP is residual.",
      "Earmuffs as elimination.",
      "A larger insurance limit.",
    ],
    1,
    "Core Rule: If two answers work, take higher hierarchy / system / design. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Quiet at purchase. Why Each Distractor Fails: HCP as the primary control.: Fails: HCP is residual. | Specify the 82 dBA machine; HCP is residual.: Correct: Substitution/engineering at spec. | Earmuffs as elimination.: Fails: PPE ≠ elimination. | A larger insurance limit.: Fails: Transfer.",
    "HIER",
    "Expert",
    [
      "Fails: HCP is residual.",
      "Correct: Substitution/engineering at spec.",
      "Fails: PPE ≠ elimination.",
      "Fails: Transfer.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA 90/5 and NIOSH 85/3 travel as pairs. T=8/2^((L-criterion)/exchange). Dose sums C/T. HCP does not beat a still-open quieter source. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D6.01",
    "OSHA TWA from D=200% with TWA=90+16.61 log10(D/100). TWA≈?",
    [
      "≈93 (used 10 instead of 16.61)",
      "90",
      "≈95 dBA",
      "85",
    ],
    2,
    "Core Rule: log10(2)≈0.3010; ×16.61≈5.0; +90=95. Calculation Steps: 90+16.61 log10(2)≈95. Standards Cited: OSHA TWA-from-dose. Why Each Distractor Fails: ≈93 (used 10 instead of 16.61): Fails: Wrong coefficient. | 90: Fails: Copied criterion. | ≈95 dBA: Correct: ≈95. | 85: Fails: Copied AL.",
    "FORM",
    "Exam",
    [
      "Fails: Wrong coefficient.",
      "Fails: Copied criterion.",
      "Correct: ≈95.",
      "Fails: Copied AL.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA 90/5 and NIOSH 85/3 travel as pairs. T=8/2^((L-criterion)/exchange). Dose sums C/T. HCP does not beat a still-open quieter source. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D6.01",
    "You are the CSP reviewing a live decision at a plastics compounding turnaround. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: ln used instead of log10 in TWA-from-dose. Result.",
    [
      "Acceptable because ln is always larger.",
      "Required by NIOSH 3 dB.",
      "A PEL.",
      "Wrong TWA — FORM pitfall; use log10 unless the stem says otherwise.",
    ],
    3,
    "Core Rule: Base of the log is part of the form. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: log10 vs ln. Why Each Distractor Fails: Acceptable because ln is always larger.: Fails: Not acceptable. | Required by NIOSH 3 dB.: Fails: Not a 3 dB rule. | A PEL.: Fails: Not a PEL. | Wrong TWA — FORM pitfall; use log10 unless the stem says otherwise.: Correct: Wrong base.",
    "FORM",
    "Exam",
    [
      "Fails: Not acceptable.",
      "Fails: Not a 3 dB rule.",
      "Fails: Not a PEL.",
      "Correct: Wrong base.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA 90/5 and NIOSH 85/3 travel as pairs. T=8/2^((L-criterion)/exchange). Dose sums C/T. HCP does not beat a still-open quieter source. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D6.01",
    "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: 140 dB peak item vs 90 dBA TWA item. Best discipline.",
    [
      "Peak is not a TWA; do not apply the exchange-rate T formula to a peak.",
      "Treat 140 as 5 dB above 90 and give T=4 h.",
      "Treat 140 as NIOSH 3 dB.",
      "Ignore peaks always.",
    ],
    0,
    "Core Rule: Different limits, different math. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Peak vs TWA. Why Each Distractor Fails: Peak is not a TWA; do not apply the exchange-rate T formula to a peak.: Correct: Separate limits. | Treat 140 as 5 dB above 90 and give T=4 h.: Fails: Wrong form. | Treat 140 as NIOSH 3 dB.: Fails: Wrong pair. | Ignore peaks always.: Fails: Peaks can be asked.",
    "STEM",
    "Exam",
    [
      "Correct: Separate limits.",
      "Fails: Wrong form.",
      "Fails: Wrong pair.",
      "Fails: Peaks can be asked.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA 90/5 and NIOSH 85/3 travel as pairs. T=8/2^((L-criterion)/exchange). Dose sums C/T. HCP does not beat a still-open quieter source. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D6.01",
    "Closest: computed T=3.96 h. Options 4.0 h, 8 h, 2 h, 16 h. Pick?",
    [
      "8 h",
      "4.0 h",
      "2 h",
      "16 h",
    ],
    1,
    "Core Rule: Closest rounded value. Calculation Steps: 3.96 nearest 4.0. Standards Cited: Closest-value. Why Each Distractor Fails: 8 h: Fails: Criterion hours. | 4.0 h: Correct: Nearest. | 2 h: Fails: Extra doubling. | 16 h: Fails: AL hours.",
    "FORM",
    "Exam",
    [
      "Fails: Criterion hours.",
      "Correct: Nearest.",
      "Fails: Extra doubling.",
      "Fails: AL hours.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA 90/5 and NIOSH 85/3 travel as pairs. T=8/2^((L-criterion)/exchange). Dose sums C/T. HCP does not beat a still-open quieter source. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D6.01",
    "You are the CSP reviewing a live decision at a bridge deck pour laydown yard. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: 12-hour shift noise. Best move.",
    [
      "Always divide OSHA 90 by 12/8 without instruction.",
      "Ignore the length.",
      "Use the stem’s adjustment method; do not invent a 12-hour PEL.",
      "Call it SPCC.",
    ],
    2,
    "Core Rule: Shift length is a last-sentence constraint. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Extended shift. Why Each Distractor Fails: Always divide OSHA 90 by 12/8 without instruction.: Fails: Invented rule. | Ignore the length.: Fails: Length matters if asked. | Use the stem’s adjustment method; do not invent a 12-hour PEL.: Correct: Follow stem. | Call it SPCC.: Fails: Wrong statute.",
    "STEM",
    "Expert",
    [
      "Fails: Invented rule.",
      "Fails: Length matters if asked.",
      "Correct: Follow stem.",
      "Fails: Wrong statute.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA 90/5 and NIOSH 85/3 travel as pairs. T=8/2^((L-criterion)/exchange). Dose sums C/T. HCP does not beat a still-open quieter source. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D6.01",
    "NRR derating: stem says subtract 7 from NRR then divide by 2. NRR=25. Field estimate?",
    [
      "25 dB",
      "7 dB",
      "50 dB",
      "(25-7)/2=9 dB",
    ],
    3,
    "Core Rule: Apply only the derate the stem gives. Calculation Steps: 25-7=18; /2=9. Standards Cited: NRR derate teaching. Why Each Distractor Fails: 25 dB: Fails: Raw NRR. | 7 dB: Fails: Copied 7. | 50 dB: Fails: Doubled. | (25-7)/2=9 dB: Correct: 9 dB.",
    "FORM",
    "Exam",
    [
      "Fails: Raw NRR.",
      "Fails: Copied 7.",
      "Fails: Doubled.",
      "Correct: 9 dB.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "OSHA 90/5 and NIOSH 85/3 travel as pairs. T=8/2^((L-criterion)/exchange). Dose sums C/T. HCP does not beat a still-open quieter source. Verify the critical step before accepting a lower-tier control.",
    }
  ),
];

