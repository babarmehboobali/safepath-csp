import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D2.08";

export const classFields: ClassFields = {
  hook: "EHS is told to “just use 14001” for the injury program because the plant already has an environmental certificate. You are the CSP. The question is what ISO 14001 is for — and what it is not.",
  hookOilGas: `The gas plant already has ISO 14001. Corporate says use it for personnel safety because âEHS is EHS.â You are the CSP. The question is what ISO 14001 is for â and what it is not.`,
  hookConstruction: `The project already has ISO 14001 for stormwater. The GC says use it for personnel safety because âEHS is EHS.â You are the CSP. The question is what ISO 14001 is for â and what it is not.`,
  rule: "ISO 14001 is an environmental management system: aspects and impacts, compliance obligations, life-cycle perspective, PDCA. It is not an OHSMS. Do not pick injury controls with aspect scoring. Integrated systems still keep environmental and OHS risk methods distinct.",
  modelCaption:
    "Two PDCA wheels side by side: 14001 labeled Aspects → Impacts → Controls (environment); 45001/Z10 labeled Hazards → OHS risk → Hierarchy. A thin link labeled “integrated documentation OK.” Caption: sharing a binder is not sharing a risk method.",
  workedCase:
    "A solvent. 14001: VOC, spill to storm sewer, waste codes — control with substitution, secondary containment, P2. 45001/Z10: inhalation, fire, dermatitis — hierarchy for people. Using only VOC aspect scores to drop the fire interlock is the wrong tool.",
  trapsJson: traps(
    "Running the injury program on aspect/impact sheets.",
    "Assuming Annex SL means one risk matrix for fire deaths and stormwater.",
    "Calling a 14001 certificate proof of machine guarding.",
  ),
  contrastJson: contrast([
    { looksLike: "Aspect / impact", actually: "14001 environmental significance" },
    { looksLike: "Hazard / OHS risk", actually: "45001 / Z10 — people" },
    { looksLike: "Life-cycle perspective", actually: "14001 view from raw material through disposal" },
    { looksLike: "Integrated SMS", actually: "Shared PDCA chassis, separate risk engines" },
  ]),
  mustScoreJson: mustScore(
    "ISO 14001 is environmental management-system PDCA: context, leadership, planning, support, operation, evaluation, improvement.",
    "Aspects and impacts drive objectives and operational controls.",
    "Compliance obligations must be determined and evaluated.",
    "Life-cycle perspective appears in planning \u2014 not only end-of-pipe.",
    "Emergency preparedness covers environmental incidents too.",
    "Do not confuse EMS paperwork with pollution-prevention hierarchy.",
    "Outsourced processes still need control or influence.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "aspects/impacts are not identified", pick: "complete aspects/impacts before objectives theater" },
    { ifStem: "only spill response is funded while prevention is open", pick: "prefer prevention/source control" },
    { ifStem: "compliance obligations are unknown", pick: "determine and evaluate obligations" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "a contractor process causes the aspect", pick: "control or influence the outsourced process" },
  ),

  brief: `ISO 14001 is an environmental management system: aspects and impacts, compliance obligations, life-cycle perspective, PDCA. It is not an OHSMS. Do not pick injury controls with aspect scoring. Integrated systems still keep environmental and OHS risk methods distinct. If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
ISO 14001 is an environmental management system: aspects and impacts, compliance obligations, life-cycle perspective, PDCA. It is not an OHSMS. Do not pick injury controls with aspect scoring. Integrated systems still keep environmental and OHS risk methods distinct. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
EHS is told to âjust use 14001â for the injury program because the plant already has an environmental certificate. You are the CSP. The question is what ISO 14001 is for â and what it is not. Oil-and-gas skin: The gas plant already has ISO 14001. Corporate says use it for personnel safety because âEHS is EHS.â You are the CSP. Construction skin: The project already has ISO 14001 for stormwater. The GC says use it for personnel safety because âEHS is EHS.â You are the CSP. Work the case: A solvent. 14001: VOC, spill to storm sewer, waste codes â control with substitution, secondary containment, P2. 45001/Z10: inhalation, fire, dermatitis â hierarchy for people. Using only VOC aspect scores to drop the fire interlock is the wrong tool. Classic traps: Running the injury program on aspect/impact sheets.; Assuming Annex SL means one risk matrix for fire deaths and stormwater.; Calling a 14001 certificate proof of machine guarding.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for iso 14001. Verify whether a higher system or design fix is still open. Contrast labels: Aspect / impact is actually 14001 environmental significance; Hazard / OHS risk is actually 45001 / Z10 — people; Life-cycle perspective is actually 14001 view from raw material through disposal; Integrated SMS is actually Shared PDCA chassis, separate risk engines. If the stem shows aspects/impacts are not identified, pick complete aspects/impacts before objectives theater. If the stem shows only spill response is funded while prevention is open, pick prefer prevention/source control. If the stem shows compliance obligations are unknown, pick determine and evaluate obligations. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows a contractor process causes the aspect, pick control or influence the outsourced process. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `ISO 14001 — can it run the injury program sits in CSP-11 Domain 2 Management Systems. The exam tests whether you apply the rule when a package already looks complete. Core rule: ISO 14001 is an environmental management system: aspects and impacts, compliance obligations, life-cycle perspective, PDCA. It is not an OHSMS. Do not pick injury controls with aspect scoring. Integrated systems still keep environmental and OHS risk methods distinct. Field context: EHS is told to âjust use 14001â for the injury program because the plant already has an environmental certificate. You are the CSP. The question is what ISO 14001 is for â and what it is not. The oil-and-gas skin shifts the same decision into production pressure: The gas plant already has ISO 14001. Corporate says use it for personnel safety because âEHS is EHS.â You are the CSP. The construction skin shifts it into schedule and trade stacking: The project already has ISO 14001 for stormwater. The GC says use it for personnel safety because âEHS is EHS.â You are the CSP. Model caption for this class: Two PDCA wheels side by side: 14001 labeled Aspects â Impacts â Controls (environment); 45001/Z10 labeled Hazards â OHS risk â Hierarchy. A thin link labeled âintegrated documentation OK.â Caption: sharing a binder is not sharing a risk method. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) ISO 14001 is environmental management-system PDCA: context, leadership, planning, support, operation, evaluation, improvement. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Aspects and impacts drive objectives and operational controls. (3) Compliance obligations must be determined and evaluated. (4) Life-cycle perspective appears in planning — not only end-of-pipe. (5) Emergency preparedness covers environmental incidents too. (6) Do not confuse EMS paperwork with pollution-prevention hierarchy. (7) Outsourced processes still need control or influence. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: A solvent. 14001: VOC, spill to storm sewer, waste codes â control with substitution, secondary containment, P2. 45001/Z10: inhalation, fire, dermatitis â hierarchy for people. Using only VOC aspect scores to drop the fire interlock is the wrong tool. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Running the injury program on aspect/impact sheets.; Assuming Annex SL means one risk matrix for fire deaths and stormwater.; Calling a 14001 certificate proof of machine guarding.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Aspect / impact” is really 14001 environmental significance; “Hazard / OHS risk” is really 45001 / Z10 — people; “Life-cycle perspective” is really 14001 view from raw material through disposal; “Integrated SMS” is really Shared PDCA chassis, separate risk engines. Stem-if-then map: if aspects/impacts are not identified → complete aspects/impacts before objectives theater; if only spill response is funded while prevention is open → prefer prevention/source control; if compliance obligations are unknown → determine and evaluate obligations; if two answers work → higher hierarchy / system / design; if a contractor process causes the aspect → control or influence the outsourced process. Scoring favors evidence, owners, verification, and hierarchy-smart controls on iso 14001. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "ISO 14001 — can it run the injury program?",
  cardBack:
    "No. 14001 is environment: aspects/impacts, life cycle, P2 then containment. 45001/Z10 are OHS. Shared PDCA chassis, separate risk engines. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence says 14001 is an EMS (aspects/impacts, life cycle) and is not an OHSMS, so injury controls are not chosen by aspect scores.",
};

export const items: ClassItem[] = [
  exam(T, "A plant wants to run injury control selection on its ISO 14001 aspect sheets. Best CSP call?", [
    "Accept — Annex SL makes them identical.",
    "Reject: 14001 aspects/impacts are environmental; OHS hazards need 45001/Z10 hierarchy.",
    "Accept if TRIR is low.",
    "Accept if the registrar is the same.",
  ], 1, "TOOL/STEM: 14001 is not an OHSMS.", "TOOL", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ISO 14001 is an environmental management system: aspects and impacts, compliance obligations, life-cycle perspective, PDCA. It is not an OHSMS. Do not pick injury controls with aspect scoring. Integrated systems still... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Significant aspect is solvent VOC and spill. A waterborne substitute is open. Draft control is a larger spill kit. Best 14001-consistent action?", [
    "Spill kit as primary P2.",
    "Substitute to waterborne (prevent at source); kit and containment for residual.",
    "Buy a pollution-liability policy only.",
    "Hang an EMS poster.",
  ], 1, "HIER/P2: source reduction beats a kit.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ISO 14001 is an environmental management system: aspects and impacts, compliance obligations, life-cycle perspective, PDCA. It is not an OHSMS. Do not pick injury controls with aspect scoring. Integrated systems still... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a hospital utility plant shutdown. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: What is a life-cycle perspective in 14001.", [
    "Only the outfall sampled this week.",
    "Considering environmental issues from raw material, design, use, and end-of-life, not just the stack today.",
    "A bowtie of injuries.",
    "The 300A posting period.",
  ], 1, "Life cycle is 14001’s wide frame.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ISO 14001 is an environmental management system: aspects and impacts, compliance obligations, life-cycle perspective, PDCA. It is not an OHSMS. Do not pick injury controls with aspect scoring. Integrated systems still... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Integrated SMS documentation is proposed. Which is still required?", [
    "One risk method for deaths and stormwater.",
    "Distinct environmental aspect evaluation and OHS hazard/hierarchy evaluation, even if PDCA meetings are shared.",
    "Retirement of Z10 and 45001.",
    "Retirement of SPCC because 14001 exists.",
  ], 1, "Shared chassis, separate engines.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ISO 14001 is an environmental management system: aspects and impacts, compliance obligations, life-cycle perspective, PDCA. It is not an OHSMS. Do not pick injury controls with aspect scoring. Integrated systems still... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A team scores environmental significance with FMEA detection RPN and funds a smell test while a dike is still unbuilt. Problem?", [
    "None — RPN is 14001’s specified method.",
    "Wrong tool emphasis: detection scoring is not aspect significance, and a dike is still-open engineering.",
    "They should have used TRIR.",
    "They should have used 1910.1020.",
  ], 1, "TOOL + HIER on the environmental side.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ISO 14001 is an environmental management system: aspects and impacts, compliance obligations, life-cycle perspective, PDCA. It is not an OHSMS. Do not pick injury controls with aspect scoring. Integrated systems still... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Finance skips secondary containment and buys a pollution-legal liability policy. Best position?", [
    "Accept — transfer is 14001 operational control.",
    "Reject: insurance is financing, not containment or P2.",
    "Accept if the premium falls.",
    "Accept if 45001 is certified.",
  ], 1, "FIN: transfer ≠ EMS operational control.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ISO 14001 is an environmental management system: aspects and impacts, compliance obligations, life-cycle perspective, PDCA. It is not an OHSMS. Do not pick injury controls with aspect scoring. Integrated systems still... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Last sentence: process chemistry is customer-frozen. Remaining budget is a dike/treatment package or posters and a kit. Best remaining 14001 Do?", [
    "Posters.",
    "Engineered containment/treatment; kit is residual.",
    "Cancel 14001.",
    "Switch the objective to TRIR.",
  ], 1, "STEM closed substitution. Remaining engineering still beats admin.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ISO 14001 is an environmental management system: aspects and impacts, compliance obligations, life-cycle perspective, PDCA. It is not an OHSMS. Do not pick injury controls with aspect scoring. Integrated systems still... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A worker is amputated by a mixer during a 14001 audit week. Team says notify the registrar, not OSHA. Clock?", [
    "Registrar notification replaces 1904.",
    "Amputation: 24 hours to OSHA. 14001 is not the injury clock.",
    "8 hours because EMS is involved.",
    "7 days only.",
  ], 1, "TIME: 1904 is independent of 14001.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ISO 14001 is an environmental management system: aspects and impacts, compliance obligations, life-cycle perspective, PDCA. It is not an OHSMS. Do not pick injury controls with aspect scoring. Integrated systems still... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Which belongs in 14001 planning rather than 45001.", [
    "Machine-guard interlock on a nip.",
    "Stormwater contamination from a drum yard — aspect/impact and containment/P2.",
    "OSHA 300 recording rules.",
    "Just-culture discipline matrix.",
  ], 1, "Environment vs people. Drum yard is 14001 territory.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ISO 14001 is an environmental management system: aspects and impacts, compliance obligations, life-cycle perspective, PDCA. It is not an OHSMS. Do not pick injury controls with aspect scoring. Integrated systems still... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Compliance obligations under 14001 are confused with ACGIH TLVs for worker exposure. Correction?", [
    "TLVs are 14001 compliance obligations by default.",
    "PELTLV: TLVs are OHS advisory criteria; 14001 compliance obligations are environmental legal/other requirements the EMS claims.",
    "PELs are environmental limits.",
    "TLVs replace NPDES permits.",
  ], 1, "PELTLV + family: do not park TLVs in 14001 as if they were effluent limits.", "PELTLV",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ISO 14001 is an environmental management system: aspects and impacts, compliance obligations, life-cycle perspective, PDCA. It is not an OHSMS. Do not pick injury controls with aspect scoring. Integrated systems still... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Management review for 14001 contains only the certificate. Missing?", [
    "Nothing.",
    "Aspect performance, compliance status, audit results, incidents/spills, objective progress, changing context — not a plaque.",
    "Only TRIR.",
    "Only RPN.",
  ], 1, "Check is evidence, not a logo.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ISO 14001 is an environmental management system: aspects and impacts, compliance obligations, life-cycle perspective, PDCA. It is not an OHSMS. Do not pick injury controls with aspect scoring. Integrated systems still... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "ISO 19011 is proposed as a replacement for 14001 operational controls. Best call?", [
    "Accept — 19011 installs dikes.",
    "Reject: 19011 is audit guidelines; 14001 is the EMS being audited.",
    "Accept if auditors are certified.",
    "Accept if 45001 is included.",
  ], 1, "TOOL: 19011 vs 14001.", "TOOL", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "ISO 14001 is an environmental management system: aspects and impacts, compliance obligations, life-cycle perspective, PDCA. It is not an OHSMS. Do not pick injury controls with aspect scoring. Integrated systems still... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
