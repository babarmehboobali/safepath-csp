import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D1.03";

export const classFields: ClassFields = {
  hook: "A welder will cut a 4-inch line that last held solvent, a ladle of molten metal sits one bay over, and a 150 psig air receiver is due for a gasket change. Operations wants “a hot-work permit, aluminized clothing, and a guy watching the gauge.” You are the CSP. The question is which energy is still in the work and which control is still design.",
  hookOilGas: `A welder will cut a 4-inch line that last held condensate, a molten-sulfur pit sits one bay over, and a 150 psig air receiver is due for a gasket change. Operations wants âa hot-work permit, aluminized clothing, and a guy watching the gauge.â You are the CSP. The question is which energy is still in the work and which control is still design.`,
  hookConstruction: `A welder will cut a 4-inch process line that last held solvent in a plant-turnaround, a lead pot sits one bay over, and a 150 psig air receiver is due for a gasket change. The superintendent wants âa hot-work permit, aluminized clothing, and a guy watching the gauge.â You are the CSP. The question is which energy is still in the work and which control is still design.`,
  rule: "Hot work, molten metal, and pressure are three stored-energy problems that share a permit costume. Isolate and remove the fuel/energy first (purge, drain, LOTO, depressurize, dump the ladle). Then control ignition and splash with design (screens, covers, relief, location). Fire watch and aluminized clothing are residual. A gauge-watcher is not a depressurized vessel. Water in molten metal is a steam explosion, not a housekeeping note. If two answers work, take higher hierarchy / system / design.",
  modelCaption:
    "Three columns: HOT WORK (isolate combustibles / purge the line → permit → fire watch residual) · MOLTEN (keep water out, cover the bath, pour design → PPE last) · PRESSURE (depressurize and isolate → relief is not a bypass → gasket change under zero energy). Caption: a permit does not empty the pipe.",
  workedCase:
    "Solvent line cut. (1) Can the cut be cold-work (shear, unbolt, hydraulic cutter)? That is substitution of the ignition. (2) If cutting remains: isolate, drain, purge, test the atmosphere, then permit; fire watch after the last spark as residual — watch does not replace isolation. Molten bay: cover, keep scrap dry, no water-cooled tools that can trap water, pour away from people; aluminized clothing is last. Receiver gasket: isolate, vent to zero, lock, verify; “watching 150 psig decay” is not isolation. Relief devices stay in service on operating vessels; they are not a substitute for LOTO on the vessel you are opening.",
  trapsJson: traps(
    "A hot-work permit as a substitute for isolating and purging the line.",
    "Aluminized clothing as the primary control on an open molten pour that could be covered or relocated.",
    "Changing a gasket on a “watched” 150 psig receiver instead of venting to zero and locking.",
  ),
  contrastJson: contrast([
    { looksLike: "Hot-work permit + fire watch", actually: "Admin residual after isolation, purge, and spark control" },
    { looksLike: "Cold work (unbolt, shear)", actually: "Substitution of the ignition source" },
    { looksLike: "Aluminized clothing at an open ladle", actually: "PPE — last; cover / dry charge / location first" },
    { looksLike: "Guy watching the pressure gauge", actually: "Not isolation — vent to zero, lock, verify" },
    { looksLike: "Relief valve", actually: "Operating protection — not a LOTO point by itself" },
  ]),
  mustScoreJson: mustScore(
    "Hot work needs permits, fire watch, area prep, and gas checks when required.",
    "Molten materials: PPE plus barriers, dry tools, and splash controls \u2014 design out exposure when open.",
    "Pressure systems: design relief, LOTO, and stored energy control.",
    "Never skip gas testing in confined/adjacent spaces for hot work.",
    "Wet molten contact with moisture causes explosions \u2014 control water.",
    "Impairments of fire protection during hot work need special precautions.",
    "Hierarchy: eliminate hot work via design/cold methods when open.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "cold method can replace hot work", pick: "eliminate hot work" },
    { ifStem: "fire watch missing on permit job", pick: "staff fire watch per procedure" },
    { ifStem: "moisture on molten tools", pick: "dry tools/control water \u2014 explosion risk" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "pressure energy not isolated", pick: "LOTO including residual pressure" },
  ),

  brief: `Hot work, molten metal, and pressure are three stored-energy problems that share a permit costume. Isolate and remove the fuel/energy first (purge, drain, LOTO, depressurize, dump the ladle). Then control ignition and splash with design (screens, covers, relief, location). Fire watch and aluminized clothing are residual. A gauge-watcher is not a depressurized vessel. Water in If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Hot work, molten metal, and pressure are three stored-energy problems that share a permit costume. Isolate and remove the fuel/energy first (purge, drain, LOTO, depressurize, dump the ladle). Then control ignition and splash with design (screens, covers, relief, location). Fire watch and aluminized clothing are residual. A gauge-watcher is not a depressurized vessel. Water in molten metal is a steam explosion, not a housekeeping note. If two answers work, take higher hierarchy / system / design. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. Field move
A welder will cut a 4-inch line that last held solvent, a ladle of molten metal sits one bay over, and a 150 psig air receiver is due for a gasket change. Operations wants âa hot-work permit, aluminized clothing, and a guy watching the gauge.â You are the CSP. The question is which energy is still in the work and which control is still design. Oil-and-gas skin: A welder will cut a 4-inch line that last held condensate, a molten-sulfur pit sits one bay over, and a 150 psig air receiver is due for a gasket change. Construction skin: A welder will cut a 4-inch process line that last held solvent in a plant-turnaround, a lead pot sits one bay over, and a 150 psig air receiver is due for a gasket change. The superintendent wants âa hot-work permit, aluminized clothing, and a guy watching the gauge.â You are the CSP. Work the case: Solvent line cut. (1) Can the cut be cold-work (shear, unbolt, hydraulic cutter)? That is substitution of the ignition. (2) If cutting remains: isolate, drain, purge, test the atmosphere, then permit; fire watch after the last spark as residual â watch does not replace isolation. Molten bay: cover, keep scrap dry, no water-cooled tools that can trap water, pour away from people; aluminized clothing is last. Receiver gasket: isolate, vent to zero, lock, verify; âwatching 150 psig decayâ is not isolation. Relief devices stay in service on operating vessels; they are not a substitute for LOTO on the vessel you are opening. Classic traps: A hot-work permit as a substitute for isolating and purging the line.; Aluminized clothing as the primary control on an open molten pour that could be covered or relocated.; Changing a gasket on a “watched” 150 psig receiver instead of venting to zero and locking.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for hot work molten pressure. Verify whether a higher system or design fix is still open. Contrast labels: Hot-work permit + fire watch is actually Admin residual after isolation, purge, and spark control; Cold work (unbolt, shear) is actually Substitution of the ignition source; Aluminized clothing at an open ladle is actually PPE — last; cover / dry charge / location first; Guy watching the pressure gauge is actually Not isolation — vent to zero, lock, verify; Relief valve is actually Operating protection — not a LOTO point by itself. If the stem shows cold method can replace hot work, pick eliminate hot work. If the stem shows fire watch missing on permit job, pick staff fire watch per procedure. If the stem shows moisture on molten tools, pick dry tools/control water \u2014 explosion risk. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows pressure energy not isolated, pick LOTO including residual pressure. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Hot work / molten / pressure — does the permit empty the pipe sits in CSP-11 Domain 1 Applied Safety Technology. The exam tests whether you apply the rule when a package already looks complete. Core rule: Hot work, molten metal, and pressure are three stored-energy problems that share a permit costume. Isolate and remove the fuel/energy first (purge, drain, LOTO, depressurize, dump the ladle). Then control ignition and splash with design (screens, covers, relief, location). Fire watch and aluminized clothing are residual. A gauge-watcher is not a depressurized vessel. Water in molten metal is a steam explosion, not a housekeeping note. If two answers work, take higher hierarchy / system / design. Field context: A welder will cut a 4-inch line that last held solvent, a ladle of molten metal sits one bay over, and a 150 psig air receiver is due for a gasket change. Operations wants âa hot-work permit, aluminized clothing, and a guy watching the gauge.â You are the CSP. The question is which energy is still in the work and which control is still design. The oil-and-gas skin shifts the same decision into production pressure: A welder will cut a 4-inch line that last held condensate, a molten-sulfur pit sits one bay over, and a 150 psig air receiver is due for a gasket change. The construction skin shifts it into schedule and trade stacking: A welder will cut a 4-inch process line that last held solvent in a plant-turnaround, a lead pot sits one bay over, and a 150 psig air receiver is due for a gasket change. The superintendent wants âa hot-work permit, aluminized clothing, and a guy watching the gauge.â You are the CSP. Model caption for this class: Three columns: HOT WORK (isolate combustibles / purge the line â permit â fire watch residual) Â· MOLTEN (keep water out, cover the bath, pour design â PPE last) Â· PRESSURE (depressurize and isolate â relief is not a bypass â gasket change under zero energy). Caption: a permit does not empty the pipe. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Hot work needs permits, fire watch, area prep, and gas checks when required. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Molten materials: PPE plus barriers, dry tools, and splash controls — design out exposure when open. (3) Pressure systems: design relief, LOTO, and stored energy control. (4) Never skip gas testing in confined/adjacent spaces for hot work. (5) Wet molten contact with moisture causes explosions — control water. (6) Impairments of fire protection during hot work need special precautions. (7) Hierarchy: eliminate hot work via design/cold methods when open. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Solvent line cut. (1) Can the cut be cold-work (shear, unbolt, hydraulic cutter)? That is substitution of the ignition. (2) If cutting remains: isolate, drain, purge, test the atmosphere, then permit; fire watch after the last spark as residual â watch does not replace isolation. Molten bay: cover, keep scrap dry, no water-cooled tools that can trap water, pour away from people; aluminized clothing is last. Receiver gasket: isolate, vent to zero, lock, verify; âwatching 150 psig decayâ is not isolation. Relief devices stay in service on operating vessels; they are not a substitute for LOTO on the vessel you are opening. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: A hot-work permit as a substitute for isolating and purging the line.; Aluminized clothing as the primary control on an open molten pour that could be covered or relocated.; Changing a gasket on a “watched” 150 psig receiver instead of venting to zero and locking.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Hot-work permit + fire watch” is really Admin residual after isolation, purge, and spark control; “Cold work (unbolt, shear)” is really Substitution of the ignition source; “Aluminized clothing at an open ladle” is really PPE — last; cover / dry charge / location first; “Guy watching the pressure gauge” is really Not isolation — vent to zero, lock, verify; “Relief valve” is really Operating protection — not a LOTO point by itself. Stem-if-then map: if cold method can replace hot work → eliminate hot work; if fire watch missing on permit job → staff fire watch per procedure; if moisture on molten tools → dry tools/control water \u2014 explosion risk; if two answers work → higher hierarchy / system / design; if pressure energy not isolated → LOTO including residual pressure. Scoring favors evidence, owners, verification, and hierarchy-smart controls on hot work molten pressure. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Hot work / molten / pressure — does the permit empty the pipe?",
  cardBack:
    "Isolate, purge, depressurize, cover, keep water out of melts. Permit, fire watch, and aluminized clothing are residual. A gauge-watcher is not zero energy. Attractive wrong answer: permit-only, PPE-only, watch-the-gauge. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence includes isolate/purge/depressurize (or cover/dry charge for molten) before permit/watch/PPE, and says a watcher is not zero pressure.",
};

export const items: ClassItem[] = [
  exam(T, "Welder will cut a solvent line. Isolation, drain, and purge are still possible. Operations wants a permit and a fire watch only. Best CSP call?", [
    "Permit and watch are sufficient — hot work is administrative by definition.",
    "Isolate, drain, purge, and test, then permit with watch as residual. A permit does not empty the pipe.",
    "Permit plus aluminized clothing only.",
    "Skip isolation if the watch lasts 8 hours (TIME).",
  ], 1, "Energy removal first. TIME/PPE do not purge.", "HIER", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Hot work, molten metal, and pressure are three stored-energy problems that share a permit costume. Isolate and remove the fuel/energy first (purge, drain, LOTO, depressurize, dump the ladle). Then control ignition and... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Cold cutting (hydraulic shear) is available instead of torch-cutting a gas line. Best PtD move?", [
    "Torch plus extra watch — tradition.",
    "Specify cold work to remove the ignition. Permit/watch become residual if any spark-producing step remains.",
    "Torch plus insurance (FIN).",
    "Torch if reported within 24 hours.",
  ], 1, "Substitution of the ignition beats a better permit.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Hot work, molten metal, and pressure are three stored-energy problems that share a permit costume. Isolate and remove the fuel/energy first (purge, drain, LOTO, depressurize, dump the ladle). Then control ignition and... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Molten pour over a grated walkway. Aluminized suits are issued. A cover and a relocated pour path are still open. Best control?", [
    "Suits are equivalent engineering.",
    "Cover the bath and relocate the pour so people are not the splash target. Clothing is residual.",
    "Suits plus a laminated splash card.",
    "Suits and extra workers’ compensation (FIN).",
  ], 1, "PPE while design is open is HIER.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Hot work, molten metal, and pressure are three stored-energy problems that share a permit costume. Isolate and remove the fuel/energy first (purge, drain, LOTO, depressurize, dump the ladle). Then control ignition and... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Wet scrap is charged into a melt. Training says “be careful.” Best control?", [
    "Training is sufficient — water is housekeeping.",
    "Design dry storage/preheat and reject wet charge. Trapped water is a steam explosion, not a toolbox topic as the primary control.",
    "Issue rain suits to the furnace crew.",
    "Report any splash within 8 hours and continue (TIME).",
  ], 1, "Water-in-melt is energy, not a habit. Design the charge.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Hot work, molten metal, and pressure are three stored-energy problems that share a permit costume. Isolate and remove the fuel/energy first (purge, drain, LOTO, depressurize, dump the ladle). Then control ignition and... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Gasket change on a 150 psig air receiver. A technician will “watch the gauge down.” Best energy control?", [
    "Watching the gauge is verification enough.",
    "Isolate, vent to zero, lock, and verify. A watcher is not a depressurized vessel; residual pressure is stored energy.",
    "Watch plus gloves.",
    "Watch for 24 hours then open (TIME).",
  ], 1, "LOTO/zero energy. TIME does not vent the tank.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Hot work, molten metal, and pressure are three stored-energy problems that share a permit costume. Isolate and remove the fuel/energy first (purge, drain, LOTO, depressurize, dump the ladle). Then control ignition and... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Last sentence: “A blind cannot be installed this shift; cold work is unavailable.” Best remaining sequence?", [
    "Torch immediately with a poster.",
    "Isolate with available valves, drain, purge, test, then permit and fire watch. STEM closed the blind and the shear — remaining isolation/purge still beat sparks in a full line.",
    "Torch and extra insurance.",
    "Wait 8 hours and torch without purge (TIME).",
  ], 1, "STEM closed two options; remaining engineering/energy control still exists.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Hot work, molten metal, and pressure are three stored-energy problems that share a permit costume. Isolate and remove the fuel/energy first (purge, drain, LOTO, depressurize, dump the ladle). Then control ignition and... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Which analysis belongs before the first torch cut on a new solvent line?", [
    "FTA after the first flash, then a longer watch.",
    "JHA / job procedure that forces isolation, purge, test, and a decision on cold work, written before the permit is printed.",
    "FMEA on watch-vest color.",
    "Pareto of welding rods.",
  ], 1, "JHA/procedure must still change the job. Vest-color FMEA is TOOL abuse.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Hot work, molten metal, and pressure are three stored-energy problems that share a permit costume. Isolate and remove the fuel/energy first (purge, drain, LOTO, depressurize, dump the ladle). Then control ignition and... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Relief valve on the receiver is assumed to make the vessel safe to open for a gasket. Best flag?", [
    "Accept — relief is isolation.",
    "Reject: relief protects the operating envelope. Opening the vessel requires isolation, venting, and LOTO. Relief is not a lock.",
    "Accept if the set pressure is 150 psig.",
    "Accept if the watch lasts 30 minutes.",
  ], 1, "Relief ≠ LOTO. Attractive wrong confuses operating protection with zero energy.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Hot work, molten metal, and pressure are three stored-energy problems that share a permit costume. Isolate and remove the fuel/energy first (purge, drain, LOTO, depressurize, dump the ladle). Then control ignition and... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Fire watch is proposed as 8 hours because “1904.39 uses 8 hours.” What happened?", [
    "Correct — OSHA watch duration is the fatality clock.",
    "TIME mix-up: 1904.39 is reporting (fatality 8 h; in-patient hospitalization/amputation/loss of eye 24 h). Fire-watch duration is a hot-work residual, not a recordkeeping clock.",
    "Correct if the injury might be recordable.",
    "Use 3 dB exchange for watch time.",
  ], 1, "Do not import 1904 clocks onto a fire watch.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Hot work, molten metal, and pressure are three stored-energy problems that share a permit costume. Isolate and remove the fuel/energy first (purge, drain, LOTO, depressurize, dump the ladle). Then control ignition and... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Hydraulic accumulator at 2,000 psig. Gauge is 2,000 psi; a drawing note says 2,000 psf. Best flag before cracking a fitting?", [
    "2,000 is 2,000 — open it.",
    "UNIT: psf vs psi is ×144. Do not diagnose from a corrupt unit. Isolate and depressurize; do not “crack to see.”",
    "Use RAD to convert psi.",
    "2,000 psf is safer than 2,000 psi.",
  ], 1, "UNIT on pressure labels. Zero energy still wins.", "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Hot work, molten metal, and pressure are three stored-energy problems that share a permit costume. Isolate and remove the fuel/energy first (purge, drain, LOTO, depressurize, dump the ladle). Then control ignition and... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Finance prefers extra insurance instead of a permanent screen between the pour and the aisle. Best position?", [
    "Insurance is a splash barrier.",
    "Reject: specify the screen (or relocate the pour). Insurance pays after the burn.",
    "Raise the deductible.",
    "Issue nicer aluminized coats only.",
  ], 1, "FIN vs a designed barrier.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Hot work, molten metal, and pressure are three stored-energy problems that share a permit costume. Isolate and remove the fuel/energy first (purge, drain, LOTO, depressurize, dump the ladle). Then control ignition and... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a semiconductor tool install. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Least consistent with hot work / molten / pressure control.", [
    "Cold work instead of a torch when isolation is hard.",
    "Vent receiver to zero and lock before the gasket.",
    "A laminated “sparks happen” card after three smoldering fires, with unpurged lines and an open pour unchanged.",
    "Covered melt and dry charge.",
  ], 2, "A poster does not empty the pipe or cover the bath.", "HIER", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Hot work, molten metal, and pressure are three stored-energy problems that share a permit costume. Isolate and remove the fuel/energy first (purge, drain, LOTO, depressurize, dump the ladle). Then control ignition and... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
