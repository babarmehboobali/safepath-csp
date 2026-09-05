import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D5.01";

export const classFields: ClassFields = {
  hook: "Stormwater asks for a SWPPP; someone files EPCRA Tier II and calls it done. Different programs, different triggers.",
  hookOilGas: `On a production platform or plant, swppp epcra shows up when operations push throughput while a higher control is still open. SWPPP (NPDES/CGP/MSGP stormwater) = site stormwater controls, inspections, and spill prevention for permitted discharges. Prefer a system/design fix over a polished lower-row program that keeps the wells online.`,
  hookConstruction: `On a busy jobsite, swppp epcra shows up when schedule pressure sells a permit, rotation, or PPE package while design still can change. SWPPP (NPDES/CGP/MSGP stormwater) = site stormwater controls, inspections, and spill prevention for permitted discharges. Discriminate the open row before you laminate another card.`,
  rule: "SWPPP (NPDES/CGP/MSGP stormwater) = site stormwater controls, inspections, and spill prevention for permitted discharges. EPCRA: 302 EHS planning notification; 304 emergency release notification; 311/312 SDS/Tier I-II chemical inventory to SERC/LEPC/FD; 313 TRI toxic release inventory. Do not swap forms.",
  modelCaption: "Framework → compute/classify → reject distractors → prefer system/design.",
  workedCase: "A warehouse stores reportable chemicals above thresholds and has industrial stormwater exposure. Needs both a stormwater permit/SWPPP track and EPCRA inventory/release logic — Tier II does not equal SWPPP.",
  trapsJson: traps("Filing Tier II as a SWPPP.", "Treating 313 TRI as emergency release 304.", "Ignoring LEPC/SERC recipients."),
  contrastJson: contrast([
    { looksLike: "SWPPP", actually: "Stormwater pollution prevention plan" },
    { looksLike: "302", actually: "EHS planning notification" },
    { looksLike: "304", actually: "Emergency release notify" },
    { looksLike: "311/312", actually: "SDS / Tier inventory" },
    { looksLike: "313", actually: "TRI releases/transfers" },
  ]),
  mustScoreJson: mustScore(
    "SWPPP: controls for stormwater pollution \u2014 structural and procedural BMPs.",
    "EPCRA: hazardous substance reporting thresholds and community right-to-know duties.",
    "Update plans after facility changes.",
    "Inspections and corrective actions keep SWPPP alive.",
    "Do not discharge process wastewater under a stormwater-only mindset.",
    "Report releases per applicable clocks (TIME).",
    "Hierarchy/P2 reduce what can leave the site.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "SWPPP inspections find failed BMPs", pick: "correct and document" },
    { ifStem: "EPCRA threshold exceeded without report", pick: "report per requirements" },
    { ifStem: "facility process changed", pick: "update SWPPP/EPCRA analyses" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "P2 can cut pollutant", pick: "prefer source reduction" },
  ),

  brief: `SWPPP (NPDES/CGP/MSGP stormwater) = site stormwater controls, inspections, and spill prevention for permitted discharges. EPCRA: 302 EHS planning notification; 304 emergency release notification; 311/312 SDS/Tier I-II chemical inventory to SERC/LEPC/FD; 313 TRI toxic release inventory. Do not swap forms. If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
SWPPP (NPDES/CGP/MSGP stormwater) = site stormwater controls, inspections, and spill prevention for permitted discharges. EPCRA: 302 EHS planning notification; 304 emergency release notification; 311/312 SDS/Tier I-II chemical inventory to SERC/LEPC/FD; 313 TRI toxic release inventory. Do not swap forms. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
Stormwater asks for a SWPPP; someone files EPCRA Tier II and calls it done. Different programs, different triggers. Oil-and-gas skin: On a production platform or plant, swppp epcra shows up when operations push throughput while a higher control is still open. SWPPP (NPDES/CGP/MSGP stormwater) = site stormwater controls, inspections, and spill prevention for permitted discharges. Prefer a system/design fix over a polished lower-row program that keeps the wells online. Construction skin: On a busy jobsite, swppp epcra shows up when schedule pressure sells a permit, rotation, or PPE package while design still can change. Discriminate the open row before you laminate another card. Work the case: A warehouse stores reportable chemicals above thresholds and has industrial stormwater exposure. Needs both a stormwater permit/SWPPP track and EPCRA inventory/release logic â Tier II does not equal SWPPP. Classic traps: Filing Tier II as a SWPPP.; Treating 313 TRI as emergency release 304.; Ignoring LEPC/SERC recipients.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for swppp epcra. Verify whether a higher system or design fix is still open. Contrast labels: SWPPP is actually Stormwater pollution prevention plan; 302 is actually EHS planning notification; 304 is actually Emergency release notify; 311/312 is actually SDS / Tier inventory; 313 is actually TRI releases/transfers. If the stem shows SWPPP inspections find failed BMPs, pick correct and document. If the stem shows EPCRA threshold exceeded without report, pick report per requirements. If the stem shows facility process changed, pick update SWPPP/EPCRA analyses. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows P2 can cut pollutant, pick prefer source reduction. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `SWPPP vs EPCRA map sits in CSP-11 Domain 5 Environmental Management. The exam tests whether you apply the rule when a package already looks complete. Core rule: SWPPP (NPDES/CGP/MSGP stormwater) = site stormwater controls, inspections, and spill prevention for permitted discharges. EPCRA: 302 EHS planning notification; 304 emergency release notification; 311/312 SDS/Tier I-II chemical inventory to SERC/LEPC/FD; 313 TRI toxic release inventory. Do not swap forms. Field context: Stormwater asks for a SWPPP; someone files EPCRA Tier II and calls it done. Different programs, different triggers. The oil-and-gas skin shifts the same decision into production pressure: On a production platform or plant, swppp epcra shows up when operations push throughput while a higher control is still open. SWPPP (NPDES/CGP/MSGP stormwater) = site stormwater controls, inspections, and spill prevention for permitted discharges. Prefer a system/design fix over a polished lower-row program that keeps the wells online. The construction skin shifts it into schedule and trade stacking: On a busy jobsite, swppp epcra shows up when schedule pressure sells a permit, rotation, or PPE package while design still can change. Discriminate the open row before you laminate another card. Model caption for this class: Framework â compute/classify â reject distractors â prefer system/design. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) SWPPP: controls for stormwater pollution — structural and procedural BMPs. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) EPCRA: hazardous substance reporting thresholds and community right-to-know duties. (3) Update plans after facility changes. (4) Inspections and corrective actions keep SWPPP alive. (5) Do not discharge process wastewater under a stormwater-only mindset. (6) Report releases per applicable clocks (TIME). (7) Hierarchy/P2 reduce what can leave the site. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: A warehouse stores reportable chemicals above thresholds and has industrial stormwater exposure. Needs both a stormwater permit/SWPPP track and EPCRA inventory/release logic â Tier II does not equal SWPPP. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Filing Tier II as a SWPPP.; Treating 313 TRI as emergency release 304.; Ignoring LEPC/SERC recipients.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “SWPPP” is really Stormwater pollution prevention plan; “302” is really EHS planning notification; “304” is really Emergency release notify; “311/312” is really SDS / Tier inventory; “313” is really TRI releases/transfers. Stem-if-then map: if SWPPP inspections find failed BMPs → correct and document; if EPCRA threshold exceeded without report → report per requirements; if facility process changed → update SWPPP/EPCRA analyses; if two answers work → higher hierarchy / system / design; if P2 can cut pollutant → prefer source reduction. Scoring favors evidence, owners, verification, and hierarchy-smart controls on swppp epcra. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "SWPPP vs EPCRA map?",
  cardBack: "SWPPP stormwater; EPCRA 302/304/311/312/313. Study only.",
  teachBackKey: "Map each EPCRA section and contrast SWPPP.",
  formulaSlug: null,
};

export const items: ClassItem[] = [
  exam(
    T,
    "A metal fabricator has industrial outdoor material storage and a stormwater outfall. What does a SWPPP primarily address?",
    [
      "Stormwater pollution prevention for industrial runoff pathways",
      "OSHA LOTO only",
      "ISO 45001 certification fees",
      "Arc-flash labeling alone",
    ],
    0,
    "Core Rule: classify the last sentence, then apply the topic rule. Calculation Steps: None unless numbers appear — then compute carefully. Standards Cited: CSP-11 teaching for this class. Why Each Distractor Fails: Stormwater pollution prevention for industrial runoff pathways: Correct: SWPPP targets industrial stormwater pollution pathways. | OSHA LOTO only: LOTO is energy control — different rule. | ISO 45001 certification fees: Fees are not the SWPPP purpose. | Arc-flash labeling alone: Arc labels are electrical — not SWPPP.",
    "STEM",
    "Exam",
    [
      "Correct: SWPPP targets industrial stormwater pollution pathways.",
      "LOTO is energy control — different rule.",
      "Fees are not the SWPPP purpose.",
      "Arc labels are electrical — not SWPPP.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "SWPPP (NPDES/CGP/MSGP stormwater) = site stormwater controls, inspections, and spill prevention for permitted discharges. EPCRA: 302 EHS planning notification; 304 emergency release notification; 311/312 SDS/Tier I-II... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "A reportable EPCRA release leaves the site. Which section is the emergency release notification clock?",
    [
      "EPCRA 304",
      "EPCRA 313 only",
      "SWPPP appendix C only",
      "ISO 19011",
    ],
    0,
    "Core Rule: classify the last sentence, then apply the topic rule. Calculation Steps: None unless numbers appear — then compute carefully. Standards Cited: CSP-11 teaching for this class. Why Each Distractor Fails: EPCRA 304: Correct: §304 is emergency release notification. | EPCRA 313 only: §313 is annual TRI — not the emergency call. | SWPPP appendix C only: SWPPP is stormwater — may be parallel, not 304. | ISO 19011: 19011 is audit guidance — not release notification.",
    "STEM",
    "Exam",
    [
      "Correct: §304 is emergency release notification.",
      "§313 is annual TRI — not the emergency call.",
      "SWPPP is stormwater — may be parallel, not 304.",
      "19011 is audit guidance — not release notification.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "SWPPP (NPDES/CGP/MSGP stormwater) = site stormwater controls, inspections, and spill prevention for permitted discharges. EPCRA: 302 EHS planning notification; 304 emergency release notification; 311/312 SDS/Tier I-II... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Local emergency planners need chemical inventory / Tier II style information. Best EPCRA match?",
    [
      "EPCRA 311/312",
      "Only 1904.39",
      "Only Hazen-Williams",
      "Only LOTO",
    ],
    0,
    "Core Rule: classify the last sentence, then apply the topic rule. Calculation Steps: None unless numbers appear — then compute carefully. Standards Cited: CSP-11 teaching for this class. Why Each Distractor Fails: EPCRA 311/312: Correct: 311/312 cover SDS/inventory / Tier II-style community info. | Only 1904.39: 1904.39 is OSHA severe-injury reporting. | Only Hazen-Williams: Hydraulics is unrelated. | Only LOTO: LOTO is unrelated.",
    "STEM",
    "Exam",
    [
      "Correct: 311/312 cover SDS/inventory / Tier II-style community info.",
      "1904.39 is OSHA severe-injury reporting.",
      "Hydraulics is unrelated.",
      "LOTO is unrelated.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "SWPPP (NPDES/CGP/MSGP stormwater) = site stormwater controls, inspections, and spill prevention for permitted discharges. EPCRA: 302 EHS planning notification; 304 emergency release notification; 311/312 SDS/Tier I-II... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Corporate EHS must file annual toxic release inventory for listed chemicals above thresholds. Which EPCRA piece?",
    [
      "EPCRA 313",
      "EPCRA 304 only",
      "SWPPP only",
      "VPP application only",
    ],
    0,
    "Core Rule: classify the last sentence, then apply the topic rule. Calculation Steps: None unless numbers appear — then compute carefully. Standards Cited: CSP-11 teaching for this class. Why Each Distractor Fails: EPCRA 313: Correct: §313 is TRI. | EPCRA 304 only: §304 is emergency notification. | SWPPP only: SWPPP is stormwater. | VPP application only: VPP is OSHA recognition.",
    "STEM",
    "Exam",
    [
      "Correct: §313 is TRI.",
      "§304 is emergency notification.",
      "SWPPP is stormwater.",
      "VPP is OSHA recognition.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "SWPPP (NPDES/CGP/MSGP stormwater) = site stormwater controls, inspections, and spill prevention for permitted discharges. EPCRA: 302 EHS planning notification; 304 emergency release notification; 311/312 SDS/Tier I-II... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "A plant has extremely hazardous substances on site and must coordinate planning with the LEPC. EPCRA 302 relates to?",
    [
      "EHS threshold planning / notification with LEPC/SERC context",
      "Hearing conservation only",
      "Machine guarding only",
      "Forklift stability only",
    ],
    0,
    "Core Rule: classify the last sentence, then apply the topic rule. Calculation Steps: None unless numbers appear — then compute carefully. Standards Cited: CSP-11 teaching for this class. Why Each Distractor Fails: EHS threshold planning / notification with LEPC/SERC context: Correct: §302 is EHS planning thresholds/notification context. | Hearing conservation only: Noise program is Domain 6. | Machine guarding only: Guarding is Domain 1. | Forklift stability only: PIT stability is Domain 1.",
    "STEM",
    "Exam",
    [
      "Correct: §302 is EHS planning thresholds/notification context.",
      "Noise program is Domain 6.",
      "Guarding is Domain 1.",
      "PIT stability is Domain 1.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "SWPPP (NPDES/CGP/MSGP stormwater) = site stormwater controls, inspections, and spill prevention for permitted discharges. EPCRA: 302 EHS planning notification; 304 emergency release notification; 311/312 SDS/Tier I-II... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Tier II was filed on time. Industrial stormwater exposure still exists. Is the SWPPP optional?",
    [
      "No — EPCRA inventory filing does not replace a required SWPPP",
      "Yes — Tier II always swallows SWPPP",
      "Yes — if TRIR is low",
      "Yes — if ISO 14001 logo exists",
    ],
    0,
    "Core Rule: classify the last sentence, then apply the topic rule. Calculation Steps: None unless numbers appear — then compute carefully. Standards Cited: CSP-11 teaching for this class. Why Each Distractor Fails: No — EPCRA inventory filing does not replace a required SWPPP: Correct: Tier II ≠ SWPPP — both can apply. | Yes — Tier II always swallows SWPPP: Inventory filing does not swallow SWPPP. | Yes — if TRIR is low: Injury rates do not waive stormwater rules. | Yes — if ISO 14001 logo exists: EMS logo is not a permit substitute.",
    "STEM",
    "Exam",
    [
      "Correct: Tier II ≠ SWPPP — both can apply.",
      "Inventory filing does not swallow SWPPP.",
      "Injury rates do not waive stormwater rules.",
      "EMS logo is not a permit substitute.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "SWPPP (NPDES/CGP/MSGP stormwater) = site stormwater controls, inspections, and spill prevention for permitted discharges. EPCRA: 302 EHS planning notification; 304 emergency release notification; 311/312 SDS/Tier I-II... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "For many EPCRA inventory / SDS community notices, who is in the usual recipient set?",
    [
      "SERC / LEPC / local fire department as applicable",
      "Only the marketing team",
      "Only Pearson VUE",
      "Only the crane vendor",
    ],
    0,
    "Core Rule: classify the last sentence, then apply the topic rule. Calculation Steps: None unless numbers appear — then compute carefully. Standards Cited: CSP-11 teaching for this class. Why Each Distractor Fails: SERC / LEPC / local fire department as applicable: Correct: SERC/LEPC/fire department as applicable. | Only the marketing team: Marketing is not the statutory audience. | Only Pearson VUE: Pearson VUE is exam delivery — irrelevant. | Only the crane vendor: Vendors are not the community planners.",
    "STEM",
    "Exam",
    [
      "Correct: SERC/LEPC/fire department as applicable.",
      "Marketing is not the statutory audience.",
      "Pearson VUE is exam delivery — irrelevant.",
      "Vendors are not the community planners.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "SWPPP (NPDES/CGP/MSGP stormwater) = site stormwater controls, inspections, and spill prevention for permitted discharges. EPCRA: 302 EHS planning notification; 304 emergency release notification; 311/312 SDS/Tier I-II... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "A tote ruptures into a storm drain during a rain event. Which program pair should you think about together?",
    [
      "SWPPP response/cleanup pathways and EPCRA release evaluation",
      "Only hearing tests",
      "Only LOTO permits",
      "Only ladder inspections",
    ],
    0,
    "Core Rule: classify the last sentence, then apply the topic rule. Calculation Steps: None unless numbers appear — then compute carefully. Standards Cited: CSP-11 teaching for this class. Why Each Distractor Fails: SWPPP response/cleanup pathways and EPCRA release evaluation: Correct: stormwater pathway + EPCRA release evaluation. | Only hearing tests: Audiograms do not address the spill. | Only LOTO permits: LOTO may be parallel but is not the spill program. | Only ladder inspections: Ladders are unrelated.",
    "STEM",
    "Exam",
    [
      "Correct: stormwater pathway + EPCRA release evaluation.",
      "Audiograms do not address the spill.",
      "LOTO may be parallel but is not the spill program.",
      "Ladders are unrelated.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "SWPPP (NPDES/CGP/MSGP stormwater) = site stormwater controls, inspections, and spill prevention for permitted discharges. EPCRA: 302 EHS planning notification; 304 emergency release notification; 311/312 SDS/Tier I-II... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "A stem says VERIFY thresholds and applicability before citing a filing clock. Meaning?",
    [
      "Confirm jurisdiction/threshold/edition from stem or reference — do not invent",
      "Always file 313 for every spill",
      "Skip SERC",
      "Treat SWPPP as optional forever",
    ],
    0,
    "Core Rule: classify the last sentence, then apply the topic rule. Calculation Steps: None unless numbers appear — then compute carefully. Standards Cited: CSP-11 teaching for this class. Why Each Distractor Fails: Confirm jurisdiction/threshold/edition from stem or reference — do not invent: Correct: VERIFY means use stem/reference thresholds — no folklore. | Always file 313 for every spill: Not every spill is 313 TRI. | Skip SERC: Skipping SERC can miss required notices. | Treat SWPPP as optional forever: SWPPP optionality is not universal.",
    "STEM",
    "Exam",
    [
      "Correct: VERIFY means use stem/reference thresholds — no folklore.",
      "Not every spill is 313 TRI.",
      "Skipping SERC can miss required notices.",
      "SWPPP optionality is not universal.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "SWPPP (NPDES/CGP/MSGP stormwater) = site stormwater controls, inspections, and spill prevention for permitted discharges. EPCRA: 302 EHS planning notification; 304 emergency release notification; 311/312 SDS/Tier I-II... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "A tank farm asks whether SPCC and SWPPP are the same binder. Best contrast?",
    [
      "SPCC is oil-spill prevention/containment; SWPPP is stormwater pollution prevention — related site, different triggers",
      "Identical always",
      "Both equal LOTO",
      "Both equal 1904 clocks",
    ],
    0,
    "Core Rule: classify the last sentence, then apply the topic rule. Calculation Steps: None unless numbers appear — then compute carefully. Standards Cited: CSP-11 teaching for this class. Why Each Distractor Fails: SPCC is oil-spill prevention/containment; SWPPP is stormwater pollution prevention — related site, different triggers: Correct: different triggers/programs on a shared site. | Identical always: Not identical. | Both equal LOTO: Neither is LOTO. | Both equal 1904 clocks: Neither is OSHA recordkeeping clocks.",
    "STEM",
    "Exam",
    [
      "Correct: different triggers/programs on a shared site.",
      "Not identical.",
      "Neither is LOTO.",
      "Neither is OSHA recordkeeping clocks.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "SWPPP (NPDES/CGP/MSGP stormwater) = site stormwater controls, inspections, and spill prevention for permitted discharges. EPCRA: 302 EHS planning notification; 304 emergency release notification; 311/312 SDS/Tier I-II... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Someone waits for a TRI annual mindset before calling an immediate EPCRA 304 release. Error?",
    [
      "Wrong tool/clock — 304 emergency notification is not a 313 annual cycle",
      "Correct — always wait a year",
      "SWPPP forbids calling",
      "ICS forbids calling",
    ],
    0,
    "Core Rule: classify the last sentence, then apply the topic rule. Calculation Steps: None unless numbers appear — then compute carefully. Standards Cited: CSP-11 teaching for this class. Why Each Distractor Fails: Wrong tool/clock — 304 emergency notification is not a 313 annual cycle: Correct: 304 is emergency; 313 is annual TRI — wrong clock. | Correct — always wait a year: Waiting a year fails 304. | SWPPP forbids calling: SWPPP does not forbid emergency calls. | ICS forbids calling: ICS supports emergency coordination.",
    "TIME",
    "Exam",
    [
      "Correct: 304 is emergency; 313 is annual TRI — wrong clock.",
      "Waiting a year fails 304.",
      "SWPPP does not forbid emergency calls.",
      "ICS supports emergency coordination.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "SWPPP (NPDES/CGP/MSGP stormwater) = site stormwater controls, inspections, and spill prevention for permitted discharges. EPCRA: 302 EHS planning notification; 304 emergency release notification; 311/312 SDS/Tier I-II... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Two answers both reduce environmental harm: eliminate the outdoor exposure source versus a polished Tier II cover sheet. Prefer?",
    [
      "Source/system control for the pathway over filing theater",
      "Cover sheet theater",
      "Ignore stormwater",
      "Equate SPCC and SWPPP",
    ],
    0,
    "Core Rule: classify the last sentence, then apply the topic rule. Calculation Steps: None unless numbers appear — then compute carefully. Standards Cited: CSP-11 teaching for this class. Why Each Distractor Fails: Source/system control for the pathway over filing theater: Correct: pathway source control beats filing theater. | Cover sheet theater: Cover sheets do not stop runoff. | Ignore stormwater: Ignoring stormwater leaves the pathway open. | Equate SPCC and SWPPP: Do not equate SPCC and SWPPP.",
    "HIER",
    "Exam",
    [
      "Correct: pathway source control beats filing theater.",
      "Cover sheets do not stop runoff.",
      "Ignoring stormwater leaves the pathway open.",
      "Do not equate SPCC and SWPPP.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "SWPPP (NPDES/CGP/MSGP stormwater) = site stormwater controls, inspections, and spill prevention for permitted discharges. EPCRA: 302 EHS planning notification; 304 emergency release notification; 311/312 SDS/Tier I-II... Verify the critical step before accepting a lower-tier control.",
    }
  )
];
