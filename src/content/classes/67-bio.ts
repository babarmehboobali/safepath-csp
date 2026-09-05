import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D6.01";

export const classFields: ClassFields = {
  hook: "A clinic wants to skip the bloodborne plan because “we bought extra gloves and an AI poster about handwashing.” A needle is still recapped two-handed. You are the CSP. The question is engineering (sharps, biosafety) before posters.",
  hookOilGas: `A medic shack wants to skip the bloodborne plan because âwe bought extra gloves and an AI poster.â A needle is still recapped two-handed after a wellsite injury. You are the CSP. The question is engineering (sharps, biosafety) before posters.`,
  hookConstruction: `A first-aid trailer wants to skip the bloodborne plan because âwe bought extra gloves and an AI poster.â A needle is still recapped two-handed. You are the CSP. The question is engineering (sharps, biosafety) before posters.`,
  rule: "Biohazards: identify the agent and route (bloodborne, airborne, droplet, contact, zoonotic, water). Bloodborne 1910.1030: exposure control plan, universal precautions, engineering (sharps containers, safer devices), HBV vaccine, post-exposure. Biosafety levels are facility/practice packages — BSL-2 practices don’t become BSL-1 because gloves arrived. Legionella/mold are water/IAQ source problems. If two answers work, take higher hierarchy / system / design (safer sharp, don’t recap).",
  modelCaption: "Stack: AGENT/ROUTE → ENGINEERING (safer sharp, exhaust, water treatment) → ADMIN (plan, vaccine, training) → PPE. Two-handed recap tagged FAIL. Caption: gloves are not a biosafety level.",
  workedCase: "Needlestick program. Hierarchy: eliminate unnecessary sharps, safer devices, sharps container at point of use, never two-hand recap, then gloves/eye. Plan + HBV offer + post-exposure evaluation. An AI handwashing poster is admin/awareness, not the engineering control. Blood is not “universal waste.”",
  brief: `Biohazards: identify the agent and route (bloodborne, airborne, droplet, contact, zoonotic, water). Bloodborne 1910.1030: exposure control plan, universal precautions, engineering (sharps containers, safer devices), HBV vaccine, post-exposure. Biosafety levels are facility/practice packages â BSL-2 practices donât become BSL-1 because gloves arrived. Legionella/mold are water/IAQ source problems. If two answers work, take higher hierarchy / system If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Biohazards: identify the agent and route (bloodborne, airborne, droplet, contact, zoonotic, water). Bloodborne 1910.1030: exposure control plan, universal precautions, engineering (sharps containers, safer devices), HBV vaccine, post-exposure. Biosafety levels are facility/practice packages â BSL-2 practices donât become BSL-1 because gloves arrived. Legionella/mold are water/IAQ source problems. If two answers work, take higher hierarchy / system / design (safer sharp, donât recap). Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
A clinic wants to skip the bloodborne plan because âwe bought extra gloves and an AI poster about handwashing.â A needle is still recapped two-handed. You are the CSP. The question is engineering (sharps, biosafety) before posters. Oil-and-gas skin: A medic shack wants to skip the bloodborne plan because âwe bought extra gloves and an AI poster.â A needle is still recapped two-handed after a wellsite injury. You are the CSP. Construction skin: A first-aid trailer wants to skip the bloodborne plan because âwe bought extra gloves and an AI poster.â A needle is still recapped two-handed. You are the CSP. Work the case: Needlestick program. Hierarchy: eliminate unnecessary sharps, safer devices, sharps container at point of use, never two-hand recap, then gloves/eye. Plan + HBV offer + post-exposure evaluation. An AI handwashing poster is admin/awareness, not the engineering control. Blood is not âuniversal waste.â Classic traps: Two-handed recapping because gloves are new.; Calling a poster or AI module the exposure control plan.; Treating BSL as a PPE shopping list.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for bio. Verify whether a higher system or design fix is still open. Contrast labels: Safer sharp / sharps container is actually Engineering — first after elimination; Universal precautions is actually Treat all blood/OPIM as infectious — not a poster brand; HBV vaccine / post-exposure is actually Medical admin required by 1910.1030 — not optional folklore; BSL package is actually Facility + practices + PPE matched to agent — not gloves alone; Legionella / mold is actually Water/moisture source control — not a surgical mask as the system. If the stem shows recapping is proposed as the main control, pick safer sharps devices and no-recap practice. If the stem shows vaccination offer skipped for covered workers, pick offer HBV vaccination per program. If the stem shows only gloves proposed while sharps engineering open, pick engineered sharps controls first. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows exposure incident occurs, pick run post-exposure evaluation/follow-up. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Two-handed recap vs safer sharp? Is an AI poster the bloodborne plan sits in CSP-11 Domain 6 Occupational Health and Ergonomics. The exam tests whether you apply the rule when a package already looks complete. Core rule: Biohazards: identify the agent and route (bloodborne, airborne, droplet, contact, zoonotic, water). Bloodborne 1910.1030: exposure control plan, universal precautions, engineering (sharps containers, safer devices), HBV vaccine, post-exposure. Biosafety levels are facility/practice packages â BSL-2 practices donât become BSL-1 because gloves arrived. Legionella/mold are water/IAQ source problems. If two answers work, take higher hierarchy / system / design (safer sharp, donât recap). Field context: A clinic wants to skip the bloodborne plan because âwe bought extra gloves and an AI poster about handwashing.â A needle is still recapped two-handed. You are the CSP. The question is engineering (sharps, biosafety) before posters. The oil-and-gas skin shifts the same decision into production pressure: A medic shack wants to skip the bloodborne plan because âwe bought extra gloves and an AI poster.â A needle is still recapped two-handed after a wellsite injury. You are the CSP. The construction skin shifts it into schedule and trade stacking: A first-aid trailer wants to skip the bloodborne plan because âwe bought extra gloves and an AI poster.â A needle is still recapped two-handed. You are the CSP. Model caption for this class: Stack: AGENT/ROUTE â ENGINEERING (safer sharp, exhaust, water treatment) â ADMIN (plan, vaccine, training) â PPE. Two-handed recap tagged FAIL. Caption: gloves are not a biosafety level. Use it as a redraw before options, not as decoration. Worked case walkthrough: Needlestick program. Hierarchy: eliminate unnecessary sharps, safer devices, sharps container at point of use, never two-hand recap, then gloves/eye. Plan + HBV offer + post-exposure evaluation. An AI handwashing poster is admin/awareness, not the engineering control. Blood is not âuniversal waste.â Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Two-handed recapping because gloves are new.; Calling a poster or AI module the exposure control plan.; Treating BSL as a PPE shopping list.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Safer sharp / sharps container” is really Engineering — first after elimination; “Universal precautions” is really Treat all blood/OPIM as infectious — not a poster brand; “HBV vaccine / post-exposure” is really Medical admin required by 1910.1030 — not optional folklore; “BSL package” is really Facility + practices + PPE matched to agent — not gloves alone; “Legionella / mold” is really Water/moisture source control — not a surgical mask as the system. Stem-if-then map: if recapping is proposed as the main control → safer sharps devices and no-recap practice; if vaccination offer skipped for covered workers → offer HBV vaccination per program; if only gloves proposed while sharps engineering open → engineered sharps controls first; if two answers work → higher hierarchy / system / design; if exposure incident occurs → run post-exposure evaluation/follow-up. Scoring favors evidence, owners, verification, and hierarchy-smart controls on bio. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Two-handed recap vs safer sharp? Is an AI poster the bloodborne plan?",
  cardBack: "Engineering: safer devices, sharps containers, no two-hand recap. Plan + HBV + post-exposure. Posters are not BSL. Study only — not allowed in the test center.",
  teachBackKey: "Pass if the sentence puts safer sharps/containers before gloves, names a written bloodborne plan with vaccine/post-exposure, and rejects two-handed recap.",
  trapsJson: traps(
    "Two-handed recapping because gloves are new.",
    "Calling a poster or AI module the exposure control plan.",
    "Treating BSL as a PPE shopping list.",
  ),
  contrastJson: contrast([
    { looksLike: "Safer sharp / sharps container", actually: "Engineering — first after elimination" },
    { looksLike: "Universal precautions", actually: "Treat all blood/OPIM as infectious — not a poster brand" },
    { looksLike: "HBV vaccine / post-exposure", actually: "Medical admin required by 1910.1030 — not optional folklore" },
    { looksLike: "BSL package", actually: "Facility + practices + PPE matched to agent — not gloves alone" },
    { looksLike: "Legionella / mold", actually: "Water/moisture source control — not a surgical mask as the system" },
  ]),
  mustScoreJson: mustScore(
    "Biohazards: eliminate/substitute, contain, engineering (BSC), admin, PPE.",
    "Bloodborne pathogens: exposure control plan, universal precautions, sharps controls, HBV vaccination offer.",
    "Sharps with engineered sharps injury protection preferred when open.",
    "Infectious waste handling and laundry controls matter.",
    "Post-exposure follow-up is required \u2014 not optional.",
    "Do not recap needles as a primary control.",
    "Hierarchy: safer devices before training-only answers.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "recapping is proposed as the main control", pick: "safer sharps devices and no-recap practice" },
    { ifStem: "vaccination offer skipped for covered workers", pick: "offer HBV vaccination per program" },
    { ifStem: "only gloves proposed while sharps engineering open", pick: "engineered sharps controls first" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "exposure incident occurs", pick: "run post-exposure evaluation/follow-up" },
  ),

  formulaSlug: null,
};

export const items: ClassItem[] = [
  exam(
    T,
    "Clinic skips the bloodborne plan because gloves and an AI handwashing poster arrived. Needle still two-hand recapped. Best CSP position?",
    [
      "Approve — posters are 1910.1030.",
      "Reject: written plan, safer devices/sharps containers, no two-hand recap, HBV offer, post-exposure. Gloves/posters are not the plan.",
      "Approve if the poster mentions PPE.",
      "Approve if waste is shipped as universal waste lamps.",
    ],
    1,
    "HIER: engineering and a real plan vs awareness theater.",
    "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Biohazards: identify the agent and route (bloodborne, airborne, droplet, contact, zoonotic, water). Bloodborne 1910.1030: exposure control plan, universal precautions, engineering (sharps containers, safer devices), H... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Self-sheathing needle is still available. Team prefers two-hand recap “we’re careful.” Best control?",
    [
      "Two-hand recap — skill is engineering.",
      "Specify the safer device and point-of-use sharps containers. Recapping two-handed is the fail.",
      "Thicker gloves only.",
      "AI module only.",
    ],
    1,
    "HIER: safer sharp still open.",
    "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Biohazards: identify the agent and route (bloodborne, airborne, droplet, contact, zoonotic, water). Bloodborne 1910.1030: exposure control plan, universal precautions, engineering (sharps containers, safer devices), H... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Last sentence: cooling-tower water treatment can be restored. Legionella answer is N95s for the lobby. Comment?",
    [
      "N95s are the water treatment.",
      "Restore water-system control (temperature, biocide, no stagnation). Masks are not a cooling-tower program.",
      "Treat as bloodborne recapping.",
      "Ship the tower as universal waste.",
    ],
    1,
    "STEM + HIER: last sentence left source control open.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Biohazards: identify the agent and route (bloodborne, airborne, droplet, contact, zoonotic, water). Bloodborne 1910.1030: exposure control plan, universal precautions, engineering (sharps containers, safer devices), H... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at an offshore fabrication night shift. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Invented HIV PEL of 50 ppm using 24.45. Error.",
    [
      "None — all agents have ppm PELs.",
      "UNIT/FORM: bloodborne agents are not molar ppm PELs. Don’t run 24.45 on a virus.",
      "PELTLV — 50 ppm is the silica PEL.",
      "TIME — 24.45 hours.",
    ],
    1,
    "UNIT: bio agents ≠ ppm via 24.45.",
    "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Biohazards: identify the agent and route (bloodborne, airborne, droplet, contact, zoonotic, water). Bloodborne 1910.1030: exposure control plan, universal precautions, engineering (sharps containers, safer devices), H... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at a municipal water-plant retrofit. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: BSL-2 lab: team says gloves make it BSL-1. Issue.",
    [
      "Correct — PPE sets BSL.",
      "STEM: BSL is a package of facility, practices, equipment, and PPE matched to the agent. Gloves do not downgrade the lab.",
      "Correct if an AI poster is on the door.",
      "Correct if the TLV is 85 dBA.",
    ],
    1,
    "STEM: BSL ≠ glove count.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Biohazards: identify the agent and route (bloodborne, airborne, droplet, contact, zoonotic, water). Bloodborne 1910.1030: exposure control plan, universal precautions, engineering (sharps containers, safer devices), H... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "HBV vaccine declined in writing; team skips post-exposure protocol after a stick “because they declined.” Status?",
    [
      "Decline waives post-exposure forever.",
      "Post-exposure evaluation/follow-up still applies after an exposure incident. Vaccine declination is not a waiver of the incident procedure.",
      "Insurance certificate replaces 1910.1030.",
      "AI chatbot is the medical evaluation.",
    ],
    1,
    "STEM: declination ≠ no post-exposure.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Biohazards: identify the agent and route (bloodborne, airborne, droplet, contact, zoonotic, water). Bloodborne 1910.1030: exposure control plan, universal precautions, engineering (sharps containers, safer devices), H... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Wrong tool: FMEA RPN of “ick factor” as the exposure control plan. Comment?",
    [
      "Accept — RPN is 1910.1030.",
      "TOOL: plan, safer devices, containers, vaccine, post-exposure. Ick-factor RPN is not the method.",
      "Accept if RPN < 100.",
      "Accept if gloves are nitrile.",
    ],
    1,
    "TOOL: FMEA ≠ bloodborne plan.",
    "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Biohazards: identify the agent and route (bloodborne, airborne, droplet, contact, zoonotic, water). Bloodborne 1910.1030: exposure control plan, universal precautions, engineering (sharps containers, safer devices), H... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Two funded moves: extra umbrella AND extra posters; safer sharps still open. Pair and miss?",
    [
      "Avoid + reduce; posters sheath needles.",
      "Transfer + admin; missing Reduce (safer devices/containers).",
      "Two BSLs.",
      "PEL + TLV complete bio.",
    ],
    1,
    "FIN: insurance plus posters skip engineering.",
    "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Biohazards: identify the agent and route (bloodborne, airborne, droplet, contact, zoonotic, water). Bloodborne 1910.1030: exposure control plan, universal precautions, engineering (sharps containers, safer devices), H... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Needlestick hospitalization; team files only a training roster. OSHA clock?",
    [
      "Roster is the 8-hour clock.",
      "Hospitalization: 24 hours to OSHA. Training files and 1910.1030 post-exposure are parallel.",
      "7 days because it is bio.",
      "No clock if gloves were worn.",
    ],
    1,
    "TIME: 24-hour hospitalization.",
    "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Biohazards: identify the agent and route (bloodborne, airborne, droplet, contact, zoonotic, water). Bloodborne 1910.1030: exposure control plan, universal precautions, engineering (sharps containers, safer devices), H... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Infectious sharps in a soda bottle in the break room. Best control?",
    [
      "Keep the bottle — SDS for cola lists PPE.",
      "Point-of-use puncture-resistant sharps containers, labeled. Consumer bottles are not engineering.",
      "Universal waste lamp box.",
      "Recap two-handed then trash.",
    ],
    1,
    "HIER: proper container vs improvisation.",
    "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Biohazards: identify the agent and route (bloodborne, airborne, droplet, contact, zoonotic, water). Bloodborne 1910.1030: exposure control plan, universal precautions, engineering (sharps containers, safer devices), H... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Mold in a wet wall. Team buys N95s and leaves the leak. Best first move?",
    [
      "N95s are moisture control.",
      "Stop water intrusion and dry; then remediate. PPE supports the job; it does not replace source control.",
      "Bloodborne plan covers mold ppm.",
      "Salt tablets.",
    ],
    1,
    "HIER: moisture source vs masks.",
    "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Biohazards: identify the agent and route (bloodborne, airborne, droplet, contact, zoonotic, water). Bloodborne 1910.1030: exposure control plan, universal precautions, engineering (sharps containers, safer devices), H... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at a grain elevator maintenance day. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Universal precautions means.",
    [
      "Only treat patients who look sick.",
      "Treat all blood/OPIM as infectious — engineering and practices apply without a serology wait.",
      "A GHS pictogram on the fridge.",
      "NIOSH 3 dB for coughs.",
    ],
    1,
    "STEM: universal precautions definition.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Biohazards: identify the agent and route (bloodborne, airborne, droplet, contact, zoonotic, water). Bloodborne 1910.1030: exposure control plan, universal precautions, engineering (sharps containers, safer devices), H... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];

