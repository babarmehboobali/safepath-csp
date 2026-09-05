import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D2.04";

export const classFields: ClassFields = {
  hook: "A CAPA tracker shows 40 actions “closed — trained all.” The same mixer eats another glove. You are the CSP. The question is whether corrective action changed the energy or only the slide deck.",
  hookOilGas: `A CAPA tracker on a gas plant shows 40 actions âclosed â trained all.â The same compressor coupling eats another glove. You are the CSP. The question is whether corrective action changed the energy or only the slide deck.`,
  hookConstruction: `A CAPA tracker on a tower job shows 40 actions âclosed â trained all.â The same unguarded rebar cutter eats another glove. You are the CSP. The question is whether corrective action changed the energy or only the slide deck.`,
  rule: "Corrective action removes or controls the cause of a detected nonconformity. Preventive action removes the cause of a potential one. Effectiveness is verified in the field after enough time and exposure. Training closes a competence gap, not an open nip.",
  modelCaption:
    "Flow: Problem → cause (system) → action at highest open row → owner/date → effectiveness check (did the energy stay down?). Side note: 1904 clocks still run even if the CAPA is open.",
  workedCase:
    "Repeat catch on a mixer. Containment: stop and isolate. Corrective: specify and install the interlocked lid; update the SOP. Preventive: add mixer guarding to the capital checklist for the sister plant. Effectiveness: 90-day observation with zero defeats. “Trained all” is not the close.",
  trapsJson: traps(
    "Closing CAPA with attendance sheets while the guard is still off.",
    "Calling a new inspection the same thing as a design change.",
    "Letting an open CAPA pause the 1904 recording clock.",
  ),
  contrastJson: contrast([
    { looksLike: "Corrective", actually: "Fixes a cause that already happened" },
    { looksLike: "Preventive", actually: "Fixes a cause that has not yet happened — sister unit, same design" },
    { looksLike: "Containment", actually: "Immediate barrier so work can pause — not the CAPA close" },
    { looksLike: "Effectiveness", actually: "Field evidence the cause cannot easily return" },
  ]),
  mustScoreJson: mustScore(
    "Corrective action fixes the cause; preventive action reduces recurrence elsewhere.",
    "Actions need owners, due dates, and effectiveness checks.",
    "Hierarchy preference applies inside CAPA selection.",
    "Closing on paper without field verification is false closure.",
    "Interim controls bridge until permanent CAPA lands.",
    "Systemic CAPA beats one-off local patches when the cause is systemic.",
    "Track aging CAPA as a leading management metric.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "only a poster is proposed for a missing interlock", pick: "engineer the control in CAPA" },
    { ifStem: "CAPA is marked closed without verification", pick: "require effectiveness evidence" },
    { ifStem: "the same failure mode exists on sister units", pick: "expand preventive action" },
    { ifStem: "permanent engineering is weeks away", pick: "set interim controls now" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
  ),

  brief: `Corrective action removes or controls the cause of a detected nonconformity. Preventive action removes the cause of a potential one. Effectiveness is verified in the field after enough time and exposure. Training closes a competence gap, not an open nip. If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Corrective action removes or controls the cause of a detected nonconformity. Preventive action removes the cause of a potential one. Effectiveness is verified in the field after enough time and exposure. Training closes a competence gap, not an open nip. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
A CAPA tracker shows 40 actions âclosed â trained all.â The same mixer eats another glove. You are the CSP. The question is whether corrective action changed the energy or only the slide deck. Oil-and-gas skin: A CAPA tracker on a gas plant shows 40 actions âclosed â trained all.â The same compressor coupling eats another glove. You are the CSP. Construction skin: A CAPA tracker on a tower job shows 40 actions âclosed â trained all.â The same unguarded rebar cutter eats another glove. You are the CSP. Work the case: Repeat catch on a mixer. Containment: stop and isolate. Corrective: specify and install the interlocked lid; update the SOP. Preventive: add mixer guarding to the capital checklist for the sister plant. Effectiveness: 90-day observation with zero defeats. âTrained allâ is not the close. Classic traps: Closing CAPA with attendance sheets while the guard is still off.; Calling a new inspection the same thing as a design change.; Letting an open CAPA pause the 1904 recording clock.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for capa. Verify whether a higher system or design fix is still open. Contrast labels: Corrective is actually Fixes a cause that already happened; Preventive is actually Fixes a cause that has not yet happened — sister unit, same design; Containment is actually Immediate barrier so work can pause — not the CAPA close; Effectiveness is actually Field evidence the cause cannot easily return. If the stem shows only a poster is proposed for a missing interlock, pick engineer the control in CAPA. If the stem shows CAPA is marked closed without verification, pick require effectiveness evidence. If the stem shows the same failure mode exists on sister units, pick expand preventive action. If the stem shows permanent engineering is weeks away, pick set interim controls now. If the stem shows two answers work, pick higher hierarchy / system / design. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `CAPA — trained all. Is it closed sits in CSP-11 Domain 2 Management Systems. The exam tests whether you apply the rule when a package already looks complete. Core rule: Corrective action removes or controls the cause of a detected nonconformity. Preventive action removes the cause of a potential one. Effectiveness is verified in the field after enough time and exposure. Training closes a competence gap, not an open nip. Field context: A CAPA tracker shows 40 actions âclosed â trained all.â The same mixer eats another glove. You are the CSP. The question is whether corrective action changed the energy or only the slide deck. The oil-and-gas skin shifts the same decision into production pressure: A CAPA tracker on a gas plant shows 40 actions âclosed â trained all.â The same compressor coupling eats another glove. You are the CSP. The construction skin shifts it into schedule and trade stacking: A CAPA tracker on a tower job shows 40 actions âclosed â trained all.â The same unguarded rebar cutter eats another glove. You are the CSP. Model caption for this class: Flow: Problem â cause (system) â action at highest open row â owner/date â effectiveness check (did the energy stay down?). Side note: 1904 clocks still run even if the CAPA is open. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Corrective action fixes the cause; preventive action reduces recurrence elsewhere. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Actions need owners, due dates, and effectiveness checks. (3) Hierarchy preference applies inside CAPA selection. (4) Closing on paper without field verification is false closure. (5) Interim controls bridge until permanent CAPA lands. (6) Systemic CAPA beats one-off local patches when the cause is systemic. (7) Track aging CAPA as a leading management metric. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Repeat catch on a mixer. Containment: stop and isolate. Corrective: specify and install the interlocked lid; update the SOP. Preventive: add mixer guarding to the capital checklist for the sister plant. Effectiveness: 90-day observation with zero defeats. âTrained allâ is not the close. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Closing CAPA with attendance sheets while the guard is still off.; Calling a new inspection the same thing as a design change.; Letting an open CAPA pause the 1904 recording clock.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Corrective” is really Fixes a cause that already happened; “Preventive” is really Fixes a cause that has not yet happened — sister unit, same design; “Containment” is really Immediate barrier so work can pause — not the CAPA close; “Effectiveness” is really Field evidence the cause cannot easily return. Stem-if-then map: if only a poster is proposed for a missing interlock → engineer the control in CAPA; if CAPA is marked closed without verification → require effectiveness evidence; if the same failure mode exists on sister units → expand preventive action; if permanent engineering is weeks away → set interim controls now; if two answers work → higher hierarchy / system / design. Scoring favors evidence, owners, verification, and hierarchy-smart controls on capa. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "CAPA — trained all. Is it closed?",
  cardBack:
    "Not if the energy is unchanged. Corrective = this cause; preventive = the same cause elsewhere. Effectiveness is field evidence. 1904 clocks do not wait. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence distinguishes containment / corrective / preventive / effectiveness and says training does not close an open engineering cause.",
};

export const items: ClassItem[] = [
  exam(T, "CAPA for an unguarded shear is marked closed: “trained 42 people.” The shear is still unguarded. Status?", [
    "Properly closed — competence was the root cause.",
    "Still open: the engineering cause is unchanged; training was not an effectiveness check on the energy.",
    "Closed if attendance exceeded 80%.",
    "Closed because insurance was notified.",
  ], 1, "Training does not close a missing guard. Effectiveness is field control of the energy.", "HIER", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Corrective action removes or controls the cause of a detected nonconformity. Preventive action removes the cause of a potential one. Effectiveness is verified in the field after enough time and exposure. Training clos... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Building 1 mixer injures a finger. Building 2 has the identical open mixer and no event yet. Installing a lid on Building 2 is:", [
    "Containment only.",
    "Preventive action on the same latent design.",
    "A leading indicator contest.",
    "Risk transfer.",
  ], 1, "Preventive action addresses a cause that has not yet produced the event on that unit.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Corrective action removes or controls the cause of a detected nonconformity. Preventive action removes the cause of a potential one. Effectiveness is verified in the field after enough time and exposure. Training clos... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "An amputation occurs Tuesday 09:00. CAPA board meets next Friday. When is OSHA notified?", [
    "After the CAPA board defines the cause.",
    "Within 24 hours of the amputation; CAPA schedule does not move 1904.",
    "Within 7 days with the 300 line.",
    "Within 8 hours — all CAPA events are fatalities.",
  ], 1, "TIME: 24-hour severe-injury notification is independent of CAPA cadence.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Corrective action removes or controls the cause of a detected nonconformity. Preventive action removes the cause of a potential one. Effectiveness is verified in the field after enough time and exposure. Training clos... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Which is containment rather than corrective action after a solvent splash?", [
    "Substitute to a non-flammable aqueous cleaner on the line.",
    "Stop the line, isolate remaining solvent, and send the injured worker for care.",
    "Enclose the pour point.",
    "Change the purchasing spec for the sister plant.",
  ], 1, "Containment stops the immediate harm. Substitution/enclosure is the CAPA.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Corrective action removes or controls the cause of a detected nonconformity. Preventive action removes the cause of a potential one. Effectiveness is verified in the field after enough time and exposure. Training clos... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A team picks CAPA by worst FMEA detection score and funds a louder alarm. Substitution of the chemical is still open. What went wrong?", [
    "Nothing — detection is corrective action.",
    "Wrong tool use: RPN/detection was allowed to outrank a still-open higher control.",
    "They should have used 14001 aspects.",
    "They should have used a 5 dB exchange rate.",
  ], 1, "TOOL + HIER: CAPA is not an RPN shopping list.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Corrective action removes or controls the cause of a detected nonconformity. Preventive action removes the cause of a potential one. Effectiveness is verified in the field after enough time and exposure. Training clos... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Finance closes CAPA because the claim was paid and the reserve released. Best CSP position?", [
    "Accept — transfer completed the action.",
    "Reject: paying a claim is financing, not an effective control of the cause.",
    "Close if the deductible was met.",
    "Convert the reserve into a leading KPI.",
  ], 1, "FIN: claim payment ≠ corrective action.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Corrective action removes or controls the cause of a detected nonconformity. Preventive action removes the cause of a potential one. Effectiveness is verified in the field after enough time and exposure. Training clos... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Last sentence: customer freezes the solvent. Budget remains for enclosure or for PPE and a new video. Best CAPA?", [
    "Video and PPE — freeze makes PPE the top of the hierarchy.",
    "Enclosure at the pour point; PPE/video for residual.",
    "Cancel the customer.",
    "A pizza for 30 injury-free days.",
  ], 1, "STEM closed substitution. Remaining engineering still beats PPE.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Corrective action removes or controls the cause of a detected nonconformity. Preventive action removes the cause of a potential one. Effectiveness is verified in the field after enough time and exposure. Training clos... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Effectiveness check due at 90 days. At 30 days the interlock is defeated with a magnet. Best status?", [
    "Keep closed — too early to judge.",
    "Reopen: effectiveness failed; remove the defeat mode (design the magnet out) before any close.",
    "Add a poster and keep closed.",
    "Mark preventive only.",
  ], 1, "Failed field check means the CAPA is not effective. Redesign the defeat, do not poster it.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Corrective action removes or controls the cause of a detected nonconformity. Preventive action removes the cause of a potential one. Effectiveness is verified in the field after enough time and exposure. Training clos... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A CAPA board posts the worker’s diagnosis and prescription on a hallway kanban. Which requirement is in play besides courtesy?", [
    "Only the 300A posting rule.",
    "Medical information belongs under 1910.1020 access/privacy controls, not a public board; 1904 privacy-concern rules also restrict descriptions on the log.",
    "ISO 14001 aspect confidentiality.",
    "FTA cut-set secrecy.",
  ], 1, "Retention/privacy: employee medical details are not public CAPA décor.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Corrective action removes or controls the cause of a detected nonconformity. Preventive action removes the cause of a potential one. Effectiveness is verified in the field after enough time and exposure. Training clos... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Recordable determined Wednesday. CAPA is still investigating next Thursday (8 days). 300 line blank “until CAPA closes.” Problem?", [
    "None — CAPA pauses recording.",
    "1904 recording is 7 calendar days; CAPA closure is a separate clock.",
    "Must record within 8 hours.",
    "Must record only if DART.",
  ], 1, "TIME: 7-day recording clock is not the CAPA clock.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Corrective action removes or controls the cause of a detected nonconformity. Preventive action removes the cause of a potential one. Effectiveness is verified in the field after enough time and exposure. Training clos... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "IH follow-up after a release: 70% of PEL, 120% of the TLV the CAPA named as the internal criterion. Team wants to close “within OSHA.” Best call?", [
    "Close — PEL is the legal CAPA criterion.",
    "Keep open against the TLV criterion the site chose; add controls until that baseline is met or changed by MoC.",
    "Close with APRs only while substitution remains open.",
    "Close because TRIR did not change.",
  ], 1, "PELTLV: CAPA must honor the criterion it published.", "PELTLV",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Corrective action removes or controls the cause of a detected nonconformity. Preventive action removes the cause of a potential one. Effectiveness is verified in the field after enough time and exposure. Training clos... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A tracker reports “CAPA effectiveness 100%” because 12 of 12 actions have signatures. Two signatures are “will train next quarter” on still-open nips. Error type?", [
    "UNIT — mixed feet and meters.",
    "The metric counts paper, not energy control — a system/STEM failure dressed as 100%.",
    "FIN — deductible too high.",
    "FORM — should have used 200,000 in the signature count.",
  ], 1, "A percent of signatures is not effectiveness. The stem’s last facts show open energy.", "STEM", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "Corrective action removes or controls the cause of a detected nonconformity. Preventive action removes the cause of a potential one. Effectiveness is verified in the field after enough time and exposure. Training clos... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
