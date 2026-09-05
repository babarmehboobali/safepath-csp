import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D6.03";

export const classFields: ClassFields = {
  hook: "A manager wants one laminated “exposure plan” that says “wear PPE if dusty or loud,” covering silica, noise, lead, hex chrome, and respirators. Action levels were skipped because “we’re below the PEL in spirit.” You are the CSP. The question is which standard actually triggers which written program.",
  hookOilGas: `A manager wants one laminated âexposure planâ that says âwear PPE if dusty or loud,â covering silica, noise, H2S, benzene, and respirators. Action levels were skipped because âweâre below the PEL in spirit.â You are the CSP. The question is which standard actually triggers which written program.`,
  hookConstruction: `A manager wants one laminated âexposure planâ that says âwear PPE if dusty or loud,â covering silica, noise, lead, and respirators. Action levels were skipped because âweâre below the PEL in spirit.â You are the CSP. The question is which standard actually triggers which written program.`,
  rule: "Substance-specific and program standards write themselves: action level (or specified trigger) starts monitoring, medical, training, and a written plan — waiting for a PEL exceedance is often too late. Respiratory protection 1910.134 is its own program (medical, fit, cartridges) and is not a substitute for engineering. Don’t merge noise, silica, lead, and bloodborne into one slogan. If two answers work, take higher hierarchy / system / design (engineering so the plan is smaller).",
  modelCaption: "Hub: WRITTEN PLAN. Spokes: noise HCP at 85 dBA | silica at AL 25 μg/m³ | 1910.134 if respirators | lead/hex Cr/asbestos as named. A slogan sticker tagged “not a plan.” Caption: AL triggers programs; PEL is not the only switch.",
  workedCase: "Personal noise TWA 86 dBA OSHA: hearing conservation program is on (AL 85), even though PEL 90 is not exceeded. Silica AL 25 μg/m³ starts the silica plan duties. If respirators are required, 1910.134 applies in full — a toolbox talk is not a fit test. Hierarchy: quiet/wet/enclose so you may drop below AL; don’t write a thicker PPE plan as the preferred control.",
  brief: `Substance-specific and program standards write themselves: action level (or specified trigger) starts monitoring, medical, training, and a written plan â waiting for a PEL exceedance is often too late. Respiratory protection 1910.134 is its own program (medical, fit, cartridges) and is not a substitute for engineering. Donât merge noise, silica, lead, and bloodborne into one If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Substance-specific and program standards write themselves: action level (or specified trigger) starts monitoring, medical, training, and a written plan â waiting for a PEL exceedance is often too late. Respiratory protection 1910.134 is its own program (medical, fit, cartridges) and is not a substitute for engineering. Donât merge noise, silica, lead, and bloodborne into one slogan. If two answers work, take higher hierarchy / system / design (engineering so the plan is smaller). Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
A manager wants one laminated âexposure planâ that says âwear PPE if dusty or loud,â covering silica, noise, lead, hex chrome, and respirators. Action levels were skipped because âweâre below the PEL in spirit.â You are the CSP. The question is which standard actually triggers which written program. Oil-and-gas skin: A manager wants one laminated âexposure planâ that says âwear PPE if dusty or loud,â covering silica, noise, H2S, benzene, and respirators. Construction skin: A manager wants one laminated âexposure planâ that says âwear PPE if dusty or loud,â covering silica, noise, lead, and respirators. Work the case: Personal noise TWA 86 dBA OSHA: hearing conservation program is on (AL 85), even though PEL 90 is not exceeded. Silica AL 25 Î¼g/mÂ³ starts the silica plan duties. If respirators are required, 1910.134 applies in full â a toolbox talk is not a fit test. Hierarchy: quiet/wet/enclose so you may drop below AL; donât write a thicker PPE plan as the preferred control. Classic traps: Waiting for a PEL exceedance before starting an action-level program.; Using 1910.134 as a substitute for silica Table 1 / LEV.; One slogan covering unrelated standards.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for exposure plans. Verify whether a higher system or design fix is still open. Contrast labels: Action level is actually Program trigger — often below the PEL; PEL is actually Legal exposure limit — not the only switch; 1910.134 is actually Respirator program if respirators are used — not the silica/noise standard itself; Substance-specific plan is actually Silica, lead, hex Cr, asbestos, noise HCP — named duties; Toolbox slogan is actually Admin fragment — not a written exposure plan. If the stem shows respirators used without a program, pick implement a full respirator program. If the stem shows monitoring shows overexposure and plan unchanged, pick update controls/plan. If the stem shows plan lists PPE first while LEV open, pick rewrite methods with hierarchy. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows no owner for the plan, pick assign accountability. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Does 86 dBA start a hearing program? Is 1910.134 a silica control sits in CSP-11 Domain 6 Occupational Health and Ergonomics. The exam tests whether you apply the rule when a package already looks complete. Core rule: Substance-specific and program standards write themselves: action level (or specified trigger) starts monitoring, medical, training, and a written plan â waiting for a PEL exceedance is often too late. Respiratory protection 1910.134 is its own program (medical, fit, cartridges) and is not a substitute for engineering. Donât merge noise, silica, lead, and bloodborne into one slogan. If two answers work, take higher hierarchy / system / design (engineering so the plan is smaller). Field context: A manager wants one laminated âexposure planâ that says âwear PPE if dusty or loud,â covering silica, noise, lead, hex chrome, and respirators. Action levels were skipped because âweâre below the PEL in spirit.â You are the CSP. The question is which standard actually triggers which written program. The oil-and-gas skin shifts the same decision into production pressure: A manager wants one laminated âexposure planâ that says âwear PPE if dusty or loud,â covering silica, noise, H2S, benzene, and respirators. The construction skin shifts it into schedule and trade stacking: A manager wants one laminated âexposure planâ that says âwear PPE if dusty or loud,â covering silica, noise, lead, and respirators. Model caption for this class: Hub: WRITTEN PLAN. Spokes: noise HCP at 85 dBA | silica at AL 25 Î¼g/mÂ³ | 1910.134 if respirators | lead/hex Cr/asbestos as named. A slogan sticker tagged ânot a plan.â Caption: AL triggers programs; PEL is not the only switch. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Written exposure control plans turn evaluation into owned controls and medical pieces. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Plans name competent persons/owners, methods, PPE, training, and medical surveillance as required. (3) Update plans after MoC and monitoring results. (4) Respirator programs are formal when respirators are needed — not ad-hoc. (5) Plans must prefer higher controls in the method section. (6) Medical surveillance documents residual risk management. (7) A plan on a shelf without field implementation fails. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Personal noise TWA 86 dBA OSHA: hearing conservation program is on (AL 85), even though PEL 90 is not exceeded. Silica AL 25 Î¼g/mÂ³ starts the silica plan duties. If respirators are required, 1910.134 applies in full â a toolbox talk is not a fit test. Hierarchy: quiet/wet/enclose so you may drop below AL; donât write a thicker PPE plan as the preferred control. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Waiting for a PEL exceedance before starting an action-level program.; Using 1910.134 as a substitute for silica Table 1 / LEV.; One slogan covering unrelated standards.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Action level” is really Program trigger — often below the PEL; “PEL” is really Legal exposure limit — not the only switch; “1910.134” is really Respirator program if respirators are used — not the silica/noise standard itself; “Substance-specific plan” is really Silica, lead, hex Cr, asbestos, noise HCP — named duties; “Toolbox slogan” is really Admin fragment — not a written exposure plan. Stem-if-then map: if respirators used without a program → implement a full respirator program; if monitoring shows overexposure and plan unchanged → update controls/plan; if plan lists PPE first while LEV open → rewrite methods with hierarchy; if two answers work → higher hierarchy / system / design; if no owner for the plan → assign accountability. Scoring favors evidence, owners, verification, and hierarchy-smart controls on exposure plans. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Does 86 dBA start a hearing program? Is 1910.134 a silica control?",
  cardBack: "Action levels start programs (noise 85 dBA HCP; silica 25 μg/m³). PEL is not the only switch. Respirator programs don’t replace engineering. Study only — not allowed in the test center.",
  teachBackKey: "Pass if the sentence says action levels trigger written programs below the PEL and that 1910.134 is not a substitute for source/engineering controls.",
  trapsJson: traps(
    "Waiting for a PEL exceedance before starting an action-level program.",
    "Using 1910.134 as a substitute for silica Table 1 / LEV.",
    "One slogan covering unrelated standards.",
  ),
  contrastJson: contrast([
    { looksLike: "Action level", actually: "Program trigger — often below the PEL" },
    { looksLike: "PEL", actually: "Legal exposure limit — not the only switch" },
    { looksLike: "1910.134", actually: "Respirator program if respirators are used — not the silica/noise standard itself" },
    { looksLike: "Substance-specific plan", actually: "Silica, lead, hex Cr, asbestos, noise HCP — named duties" },
    { looksLike: "Toolbox slogan", actually: "Admin fragment — not a written exposure plan" },
  ]),
  mustScoreJson: mustScore(
    "Written exposure control plans turn evaluation into owned controls and medical pieces.",
    "Plans name competent persons/owners, methods, PPE, training, and medical surveillance as required.",
    "Update plans after MoC and monitoring results.",
    "Respirator programs are formal when respirators are needed \u2014 not ad-hoc.",
    "Plans must prefer higher controls in the method section.",
    "Medical surveillance documents residual risk management.",
    "A plan on a shelf without field implementation fails.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "respirators used without a program", pick: "implement a full respirator program" },
    { ifStem: "monitoring shows overexposure and plan unchanged", pick: "update controls/plan" },
    { ifStem: "plan lists PPE first while LEV open", pick: "rewrite methods with hierarchy" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "no owner for the plan", pick: "assign accountability" },
  ),

  formulaSlug: null,
};

export const items: ClassItem[] = [
  exam(
    T,
    "OSHA personal TWA 86 dBA. Team skips HCP because PEL is 90. Status?",
    [
      "Correct — programs start only at 90.",
      "HCP is triggered at the 85 dBA action level. 86 dBA is in the program even though it is below the PEL.",
      "Skip if NIOSH 3 dB was not used.",
      "Skip if muffs are in a drawer.",
    ],
    1,
    "STEM: AL 85 vs PEL 90.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Substance-specific and program standards write themselves: action level (or specified trigger) starts monitoring, medical, training, and a written plan — waiting for a PEL exceedance is often too late. Respiratory pro... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Silica AL 25 μg/m³ exceeded, PEL 50 not exceeded. Dry cutting continues; only a respirator slogan is added. Best CSP comment?",
    [
      "Slogan is the silica plan.",
      "AL already triggers silica-plan duties; hierarchy still wants wet/shroud/HEPA. 1910.134 is additional if respirators are required — not a replacement.",
      "Wait for 50 μg/m³.",
      "TLV poster replaces the plan.",
    ],
    1,
    "HIER + STEM: AL duties plus engineering.",
    "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Substance-specific and program standards write themselves: action level (or specified trigger) starts monitoring, medical, training, and a written plan — waiting for a PEL exceedance is often too late. Respiratory pro... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Respirators required on a task. Team files hazcom only. Missing?",
    [
      "Nothing — SDS Section 8 is 1910.134.",
      "1910.134: medical, fit, selection, maintenance, training. Hazcom is a different program.",
      "Only a noise HCP.",
      "Only universal waste.",
    ],
    1,
    "STEM: 1910.134 is its own program.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Substance-specific and program standards write themselves: action level (or specified trigger) starts monitoring, medical, training, and a written plan — waiting for a PEL exceedance is often too late. Respiratory pro... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "One laminated slogan covers noise, silica, lead, and bloodborne. Issue?",
    [
      "Fine — all dust and blood are PEL 90.",
      "STEM: named standards have named triggers and medical/monitoring duties. A slogan is not those plans.",
      "Fine if the slogan mentions PPE.",
      "Fine if the TLV is printed on the back.",
    ],
    1,
    "STEM: one sticker ≠ substance-specific programs.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Substance-specific and program standards write themselves: action level (or specified trigger) starts monitoring, medical, training, and a written plan — waiting for a PEL exceedance is often too late. Respiratory pro... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Last sentence: wet method will bring silica below AL. Team prefers a thicker respirator plan. Best move?",
    [
      "Thicker 1910.134 as PtD.",
      "Implement the wet method (engineering still open). Plans shrink when exposure drops below AL; PPE plans are not the preferred control.",
      "Insurance certificate as the plan.",
      "Wait for PEL exceedance then write nothing.",
    ],
    1,
    "HIER + STEM: last sentence left engineering open.",
    "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Substance-specific and program standards write themselves: action level (or specified trigger) starts monitoring, medical, training, and a written plan — waiting for a PEL exceedance is often too late. Respiratory pro... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at a refinery coker outage. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Plan cites only a TLV and ignores OSHA AL/PEL. Error.",
    [
      "None — TLV is OSHA.",
      "PELTLV: internal targets may be tighter, but OSHA plan triggers follow OSHA AL/PEL (and specified tables).",
      "UNIT — TLV is in dBA.",
      "TIME — TLV is 24 hours.",
    ],
    1,
    "PELTLV: guideline vs legal triggers.",
    "PELTLV",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Substance-specific and program standards write themselves: action level (or specified trigger) starts monitoring, medical, training, and a written plan — waiting for a PEL exceedance is often too late. Respiratory pro... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Voluntary filtering facepiece use: team says “no 1910.134 at all.” Best comment?",
    [
      "Agree — voluntary means zero program forever.",
      "STEM: voluntary use still has 1910.134 information/appendix duties; required use needs the full program. Neither replaces engineering.",
      "Agree if the TLV is 50 ppm.",
      "Agree if noise is 86 dBA.",
    ],
    1,
    "STEM: voluntary vs required respirator duties.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Substance-specific and program standards write themselves: action level (or specified trigger) starts monitoring, medical, training, and a written plan — waiting for a PEL exceedance is often too late. Respiratory pro... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Wrong tool: FMEA RPN of “dusty vibes” as the written exposure assessment. Comment?",
    [
      "Accept — RPN is 1910.1053.",
      "TOOL: monitoring, objective data, or Table 1. Mood RPN is not the assessment method in the plan.",
      "Accept if RPN = 85.",
      "Accept if a slogan exists.",
    ],
    1,
    "TOOL: FMEA ≠ exposure assessment.",
    "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Substance-specific and program standards write themselves: action level (or specified trigger) starts monitoring, medical, training, and a written plan — waiting for a PEL exceedance is often too late. Respiratory pro... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Two funded moves: extra umbrella AND extra cartridge stock; LEV still open. Pair and miss?",
    [
      "Avoid + reduce; cartridges are LEV.",
      "Transfer + PPE; missing Reduce (LEV/wet/quiet) that would shrink the plan.",
      "Two action levels.",
      "PEL + TLV complete the plan.",
    ],
    1,
    "FIN: insurance plus cartridges skip engineering.",
    "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Substance-specific and program standards write themselves: action level (or specified trigger) starts monitoring, medical, training, and a written plan — waiting for a PEL exceedance is often too late. Respiratory pro... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Medical removal / hospitalization; team files only a plan revision date. OSHA clock?",
    [
      "Plan date is the 8-hour clock.",
      "Hospitalization: 24 hours to OSHA. Plan revision dates are not 1904.",
      "7 days because it is medical surveillance.",
      "No clock if under PEL.",
    ],
    1,
    "TIME: 24-hour hospitalization vs plan dates.",
    "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Substance-specific and program standards write themselves: action level (or specified trigger) starts monitoring, medical, training, and a written plan — waiting for a PEL exceedance is often too late. Respiratory pro... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Fit-test expired; cartridges stocked. Task requires respirators. Status?",
    [
      "Stock equals fit.",
      "1910.134 fit testing (and medical) must be current for required use. Inventory is not a fit test.",
      "Hazcom covers fit.",
      "NIOSH 3 dB covers fit.",
    ],
    1,
    "STEM: fit test is a plan duty, not a warehouse count.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Substance-specific and program standards write themselves: action level (or specified trigger) starts monitoring, medical, training, and a written plan — waiting for a PEL exceedance is often too late. Respiratory pro... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Lead AL exceeded. Team copies the noise HCP and changes the title. Issue?",
    [
      "Fine — all ALs equal 85 dBA.",
      "STEM: lead has its own AL (30 μg/m³), monitoring, and medical removal. A relabeled audiometric program is the wrong object.",
      "Fine if 1910.134 is attached.",
      "Fine if TLV = PEL.",
    ],
    1,
    "STEM: substance-specific duties are not interchangeable.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "OSHA PELs; NIOSH methods; public IH / formula practice",
      fieldTakeaway: "Substance-specific and program standards write themselves: action level (or specified trigger) starts monitoring, medical, training, and a written plan — waiting for a PEL exceedance is often too late. Respiratory pro... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];

