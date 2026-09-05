import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D1.02";
const explain = (core: string, calc: string, standards: string, distractors: string) =>
  `Core Rule: ${core} Calculation Steps: ${calc} Standards Cited: ${standards} Why Each Distractor Fails: ${distractors}`;

export const classFields: ClassFields = {
  hook:
    "A solvent reactor has a high-high pressure shutdown, a relief valve, and a dike. The project team calls the arrangement “three independent layers.” A review finds the pressure transmitter for the BPCS and SIS is shared, and the relief scenario was calculated using the wrong blocked-outlet case. You are the CSP. The task is to test protection independence and the engineering basis before the process starts.",
  hookOilGas: `A hydrocarbon process has a BPCS alarm, a high-high trip, and a relief valve. Operations calls all three independent. The same transmitter feeds control and trip, and the PSV sizing basis does not match the credible blocked outlet. You are the CSP. The question is whether the layers are actually independent and adequate.`,
  hookConstruction: `A temporary chemical system is being commissioned with control alarms, a trip, and spill containment. The design team says the layers are complete. You are the CSP. The first job is to verify the process hazard scenario, the independent layers, and the pre-startup evidence â not simply count safeguards.`,
  rule:
    "Process safety asks what can happen when process control fails, then whether engineered and organizational barriers are independent, adequate, and timely. A BPCS alarm and an SIS sharing the same sensing element are not automatically independent layers. Relief protection must address the credible overpressure scenario and discharge safely. MOC, PSSR, mechanical integrity, operating procedures, and training close the loop before startup. Quantitative methods such as LOPA estimate scenario frequency and layer performance; they do not replace sound design.",
  modelCaption:
    "Bowtie-style barrier stack: INITIATING EVENT → CONSEQUENCE. Prevention side: inherent design → BPCS → independent SIS → relief as applicable. Mitigation side: containment → detection/response → emergency response. Under the stack: INDEPENDENCE · ADEQUACY · RESPONSE TIME · MAINTAINABILITY. A shared sensor is crossed out between BPCS and SIS.",
  workedCase:
    "Illustrative LOPA arithmetic: initiating-event frequency = 0.10 per year. An independent SIS is credited at a risk-reduction factor (RRF) of 100, so its approximate failure probability on demand is 1/100 = 0.01. A second independent layer is credited at RRF 10, giving 0.1. Estimated scenario frequency after those two layers = 0.10 × 0.01 × 0.1 = 0.0001 per year (1×10^-4/yr). If the SIS is not independent because it shares the BPCS transmitter and common power, you cannot simply multiply the factors. The arithmetic is only as valid as the independence and applicability assumptions.",
  trapsJson: traps(
    "Counting an alarm and an SIS as independent when they share the same sensor or logic path.",
    "Using insurance or emergency response as if it were an engineered prevention layer.",
    "Doing the PHA/LOPA after startup instead of using it while the design can still change.",
  ),
  contrastJson: contrast([
    { looksLike: "Two setpoints on one transmitter", actually: "Shared failure mode — not automatically independent" },
    { looksLike: "RRF 100", actually: "A modeled risk-reduction factor, valid only with the stated assumptions" },
    { looksLike: "PSSR", actually: "Pre-startup verification before hazardous inventory is introduced" },
    { looksLike: "Mechanical integrity", actually: "Keeping safety-critical equipment capable of doing its job" },
    { looksLike: "Emergency response", actually: "Mitigation/response — not a substitute for prevention layers" },
  ]),
  mustScoreJson: mustScore(
    "Process safety engineering: inherent safety, relief, SIS independence, facility siting.",
    "Relief sizing and disposal paths must be credible.",
    "SIS integrity depends on independent sensors/logic/final elements.",
    "Facility siting and occupied buildings risk assessment thinking.",
    "Mechanical integrity of critical safeguards.",
    "Human factors in control rooms and alarms.",
    "Hierarchy/inherent safety before adding detectors.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "inventory can be minimized", pick: "inherent safety first" },
    { ifStem: "SIS shares BPCS sensors", pick: "reject \u2014 not independent" },
    { ifStem: "relief discharges to unsafe location", pick: "fix disposal path" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "alarms flood operators", pick: "improve alarm management/human factors" },
  ),

  brief: `Process safety asks what can happen when process control fails, then whether engineered and organizational barriers are independent, adequate, and timely. A BPCS alarm and an SIS sharing the same sensing element are not automatically independent layers. Relief protection must address the credible overpressure scenario and discharge safely. MOC, PSSR, mechanical integrity, operating procedures, and If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Process safety asks what can happen when process control fails, then whether engineered and organizational barriers are independent, adequate, and timely. A BPCS alarm and an SIS sharing the same sensing element are not automatically independent layers. Relief protection must address the credible overpressure scenario and discharge safely. MOC, PSSR, mechanical integrity, operating procedures, and training close the loop before startup. Quantitative methods such as LOPA estimate scenario frequency and layer performance; they do not replace sound design. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
A solvent reactor has a high-high pressure shutdown, a relief valve, and a dike. The project team calls the arrangement âthree independent layers.â A review finds the pressure transmitter for the BPCS and SIS is shared, and the relief scenario was calculated using the wrong blocked-outlet case. You are the CSP. The task is to test protection independence and the engineering basis before the process starts. Oil-and-gas skin: A hydrocarbon process has a BPCS alarm, a high-high trip, and a relief valve. Operations calls all three independent. The same transmitter feeds control and trip, and the PSV sizing basis does not match the credible blocked outlet. You are the CSP. The question is whether the layers are actually independent and adequate. Construction skin: A temporary chemical system is being commissioned with control alarms, a trip, and spill containment. The design team says the layers are complete. You are the CSP. The first job is to verify the process hazard scenario, the independent layers, and the pre-startup evidence â not simply count safeguards. Work the case: Illustrative LOPA arithmetic: initiating-event frequency = 0.10 per year. An independent SIS is credited at a risk-reduction factor (RRF) of 100, so its approximate failure probability on demand is 1/100 = 0.01. A second independent layer is credited at RRF 10, giving 0.1. Estimated scenario frequency after those two layers = 0.10 Ã 0.01 Ã 0.1 = 0.0001 per year (1Ã10^-4/yr). If the SIS is not independent because it shares the BPCS transmitter and common power, you cannot simply multiply the factors. The arithmetic is only as valid as the independence and applicability assumptions. Classic traps: Counting an alarm and an SIS as independent when they share the same sensor or logic path.; Using insurance or emergency response as if it were an engineered prevention layer.; Doing the PHA/LOPA after startup instead of using it while the design can still change.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for process safety engineering. Verify whether a higher system or design fix is still open. Contrast labels: Two setpoints on one transmitter is actually Shared failure mode — not automatically independent; RRF 100 is actually A modeled risk-reduction factor, valid only with the stated assumptions; PSSR is actually Pre-startup verification before hazardous inventory is introduced; Mechanical integrity is actually Keeping safety-critical equipment capable of doing its job; Emergency response is actually Mitigation/response — not a substitute for prevention layers. If the stem shows inventory can be minimized, pick inherent safety first. If the stem shows SIS shares BPCS sensors, pick reject \u2014 not independent. If the stem shows relief discharges to unsafe location, pick fix disposal path. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows alarms flood operators, pick improve alarm management/human factors. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Process safety — count layers or prove them sits in CSP-11 Domain 1 Applied Safety Technology. The exam tests whether you apply the rule when a package already looks complete. Core rule: Process safety asks what can happen when process control fails, then whether engineered and organizational barriers are independent, adequate, and timely. A BPCS alarm and an SIS sharing the same sensing element are not automatically independent layers. Relief protection must address the credible overpressure scenario and discharge safely. MOC, PSSR, mechanical integrity, operating procedures, and training close the loop before startup. Quantitative methods such as LOPA estimate scenario frequency and layer performance; they do not replace sound design. Field context: A solvent reactor has a high-high pressure shutdown, a relief valve, and a dike. The project team calls the arrangement âthree independent layers.â A review finds the pressure transmitter for the BPCS and SIS is shared, and the relief scenario was calculated using the wrong blocked-outlet case. You are the CSP. The task is to test protection independence and the engineering basis before the process starts. The oil-and-gas skin shifts the same decision into production pressure: A hydrocarbon process has a BPCS alarm, a high-high trip, and a relief valve. Operations calls all three independent. The same transmitter feeds control and trip, and the PSV sizing basis does not match the credible blocked outlet. You are the CSP. The question is whether the layers are actually independent and adequate. The construction skin shifts it into schedule and trade stacking: A temporary chemical system is being commissioned with control alarms, a trip, and spill containment. The design team says the layers are complete. You are the CSP. The first job is to verify the process hazard scenario, the independent layers, and the pre-startup evidence â not simply count safeguards. Model caption for this class: Bowtie-style barrier stack: INITIATING EVENT â CONSEQUENCE. Prevention side: inherent design â BPCS â independent SIS â relief as applicable. Mitigation side: containment â detection/response â emergency response. Under the stack: INDEPENDENCE Â· ADEQUACY Â· RESPONSE TIME Â· MAINTAINABILITY. A shared sensor is crossed out between BPCS and SIS. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Process safety engineering: inherent safety, relief, SIS independence, facility siting. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Relief sizing and disposal paths must be credible. (3) SIS integrity depends on independent sensors/logic/final elements. (4) Facility siting and occupied buildings risk assessment thinking. (5) Mechanical integrity of critical safeguards. (6) Human factors in control rooms and alarms. (7) Hierarchy/inherent safety before adding detectors. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Illustrative LOPA arithmetic: initiating-event frequency = 0.10 per year. An independent SIS is credited at a risk-reduction factor (RRF) of 100, so its approximate failure probability on demand is 1/100 = 0.01. A second independent layer is credited at RRF 10, giving 0.1. Estimated scenario frequency after those two layers = 0.10 Ã 0.01 Ã 0.1 = 0.0001 per year (1Ã10^-4/yr). If the SIS is not independent because it shares the BPCS transmitter and common power, you cannot simply multiply the factors. The arithmetic is only as valid as the independence and applicability assumptions. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Counting an alarm and an SIS as independent when they share the same sensor or logic path.; Using insurance or emergency response as if it were an engineered prevention layer.; Doing the PHA/LOPA after startup instead of using it while the design can still change.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Two setpoints on one transmitter” is really Shared failure mode — not automatically independent; “RRF 100” is really A modeled risk-reduction factor, valid only with the stated assumptions; “PSSR” is really Pre-startup verification before hazardous inventory is introduced; “Mechanical integrity” is really Keeping safety-critical equipment capable of doing its job; “Emergency response” is really Mitigation/response — not a substitute for prevention layers. Stem-if-then map: if inventory can be minimized → inherent safety first; if SIS shares BPCS sensors → reject \u2014 not independent; if relief discharges to unsafe location → fix disposal path; if two answers work → higher hierarchy / system / design; if alarms flood operators → improve alarm management/human factors. Scoring favors evidence, owners, verification, and hierarchy-smart controls on process safety engineering. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Process safety — count layers or prove them?",
  cardBack:
    "Prove independence, adequacy, timing, and maintainability. Shared sensors/logic undermine independence. Use PHA/LOPA before startup; then MOC, PSSR, procedures, training, and mechanical integrity keep the barriers valid.",
  teachBackKey:
    "Pass if the answer distinguishes BPCS from independent SIS, states that layers must be independent/adequate/timely, and connects PHA → MOC/PSSR → maintenance.",
};

export const items: ClassItem[] = [
  exam(T, "A BPCS and SIS both use the same pressure transmitter but have different trip setpoints. Are they automatically two independent layers?", [
    "Yes, because the setpoints differ.",
    "No. The shared sensing element creates a common failure mode, so independence is not established.",
    "Yes, if the alarm horn is loud.",
    "No, because only relief valves count as layers.",
  ], 1, explain(
    "Independence requires avoiding relevant common failure modes, not merely assigning different setpoints.",
    "Identify the shared transmitter; if it fails, both functions may be lost together.",
    "CCPS protection-layer principles; OSHA 1910.119 PSM; CSP system-safety analysis task.",
    "A and C ignore common-cause failure; D overstates the role of relief devices."
  ), "TOOL", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Process safety asks what can happen when process control fails, then whether engineered and organizational barriers are independent, adequate, and timely. A BPCS alarm and an SIS sharing the same sensing element are n... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Initiating frequency is 0.10/yr. Two independent layers have RRF 100 and 10. Approximate remaining frequency?", [
    "0.10/yr.",
    "0.001/yr.",
    "0.0001/yr.",
    "10/yr.",
  ], 2, explain(
    "For independent credited layers, remaining frequency is initiating frequency multiplied by each layer's failure-on-demand probability.",
    "0.10 × (1/100) × (1/10) = 0.0001/yr.",
    "CCPS quantitative risk-analysis concepts; LOPA-style illustrative arithmetic.",
    "A ignores both layers; B applies only one tenfold reduction; D increases risk without basis."
  ), "FORM", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Process safety asks what can happen when process control fails, then whether engineered and organizational barriers are independent, adequate, and timely. A BPCS alarm and an SIS sharing the same sensing element are n... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A relief valve was sized for a fire case, but the PHA identifies a credible blocked-outlet overpressure case that is more demanding. Best CSP response?", [
    "Keep the valve because it is already installed.",
    "Revalidate the relief basis against the credible overpressure scenarios and size/protect accordingly.",
    "Add a warning sign.",
    "Credit the dike as pressure protection.",
  ], 1, explain(
    "Relief protection must address the credible scenario that can overpressure the equipment.",
    "List credible scenarios, identify the governing case, then verify the relief capacity and discharge path.",
    "OSHA 1910.119 process-safety principles; engineering good practice as referenced by the CSP blueprint.",
    "A relies on installed hardware without validating adequacy; C is administrative; D addresses liquid containment, not pressure."
  ), "STEM", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Process safety asks what can happen when process control fails, then whether engineered and organizational barriers are independent, adequate, and timely. A BPCS alarm and an SIS sharing the same sensing element are n... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A project is physically complete but operators have not been trained and procedures are still draft. Can hazardous inventory be introduced because construction passed inspection?", [
    "Yes, construction completion is enough.",
    "No. PSSR should confirm required equipment, procedures, and training are in place before startup.",
    "Yes, if the first batch is small.",
    "Yes, if emergency response is onsite.",
  ], 1, explain(
    "Pre-startup review is a readiness gate, not a construction-only inspection.",
    "Check design conformance, procedures, unresolved PHA/MOC items, and training before introducing hazardous material.",
    "29 CFR 1910.119(i) pre-startup safety review.",
    "A, C, and D treat partial readiness or emergency capacity as a substitute for startup controls."
  ), "TIME", "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Process safety asks what can happen when process control fails, then whether engineered and organizational barriers are independent, adequate, and timely. A BPCS alarm and an SIS sharing the same sensing element are n... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A temporary bypass is installed for two weeks, but no expiration date or return-to-original-state owner is assigned. Primary concern?", [
    "None; temporary changes are outside MOC.",
    "MOC control is incomplete; the temporary change needs defined duration, authorization, and restoration.",
    "Only the dike needs a work permit.",
    "The change can be left until the next turnaround.",
  ], 1, explain(
    "Temporary process changes remain changes and need controlled duration and restoration.",
    "Document purpose, risk, authorization, time limit, affected procedures, and the restoration step.",
    "29 CFR 1910.119(l) management of change.",
    "A and D ignore temporary-change risk; C is unrelated to the change-management problem."
  ), "STEM", "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Process safety asks what can happen when process control fails, then whether engineered and organizational barriers are independent, adequate, and timely. A BPCS alarm and an SIS sharing the same sensing element are n... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Which is the best reason to perform PHA/LOPA before the P&ID is frozen?", [
    "To satisfy a filing requirement only.",
    "To identify scenarios and barriers while the design can still be changed.",
    "To replace mechanical integrity.",
    "To eliminate the need for operating procedures.",
  ], 1, explain(
    "Risk analysis has the greatest value when findings can still change inventory, layout, controls, and protection layers.",
    "Run the analysis, document recommendations, then implement/resolve them before startup as applicable.",
    "OSHA PHA requirements; CCPS process-safety lifecycle concepts.",
    "A narrows the purpose to paperwork; C and D confuse different program elements."
  ), "TOOL", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Process safety asks what can happen when process control fails, then whether engineered and organizational barriers are independent, adequate, and timely. A BPCS alarm and an SIS sharing the same sensing element are n... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A firewater pump is described as an independent safeguard for a chemical-release scenario, but it needs the same failed PLC that controls the process. Best comment?", [
    "It is independent because it is a different skid.",
    "Its dependence on the same control system may defeat the assumed independence; review common-cause failure.",
    "It is automatically an IPL because water is passive.",
    "It is independent if the pump is larger than the vessel.",
  ], 1, explain(
    "Physical separation does not prove functional independence when systems share control or power dependencies.",
    "Trace sensor, logic, power, final element, and utilities for common dependencies.",
    "CCPS layer-independence principles; CSP system-safety analysis.",
    "A uses physical appearance; C misuses the word passive; D invents an unrelated size criterion."
  ), "TOOL", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Process safety asks what can happen when process control fails, then whether engineered and organizational barriers are independent, adequate, and timely. A BPCS alarm and an SIS sharing the same sensing element are n... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A PHA recommendation says the alarm response time is 6 minutes, but the runaway scenario reaches dangerous pressure in 3 minutes. Can the operator response be credited as the needed layer?", [
    "Yes, because operators always respond immediately.",
    "No. The credited action is not timely enough for the scenario as described.",
    "Yes, if the alarm is red.",
    "Yes, because the pressure vessel is rated for normal operation.",
  ], 1, explain(
    "A protection layer must act within the available process time.",
    "Compare required response window (3 min) with documented response (6 min); the action misses the window.",
    "CCPS layer/timing concepts; OSHA process-safety operating-procedure principles.",
    "A assumes ideal human performance; C changes color not response time; D confuses normal rating with upset protection."
  ), "TIME", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Process safety asks what can happen when process control fails, then whether engineered and organizational barriers are independent, adequate, and timely. A BPCS alarm and an SIS sharing the same sensing element are n... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Which activity best preserves the assumptions behind a safety-critical trip after startup?", [
    "Mechanical integrity inspection/testing with documented acceptance criteria.",
    "A new poster in the control room.",
    "Insurance renewal.",
    "A quarterly lunch-and-learn only.",
  ], 0, explain(
    "Safety-critical instruments and equipment must remain capable of performing their intended function.",
    "Inspect/test against defined criteria and document results; repair or manage impairment when required.",
    "29 CFR 1910.119(j) mechanical integrity.",
    "B and D are administrative; C finances consequences rather than preserves equipment function."
  ), "TOOL", "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Process safety asks what can happen when process control fails, then whether engineered and organizational barriers are independent, adequate, and timely. A BPCS alarm and an SIS sharing the same sensing element are n... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A process uses a single gas detector for both an automatic shutdown and the same-room control-room alarm. Best interpretation?", [
    "Two independent layers by definition.",
    "Potential common-mode loss; the independence claim needs analysis.",
    "No layer exists because detectors are administrative.",
    "The alarm is always independent if it has a different horn.",
  ], 1, explain(
    "One sensing failure can defeat multiple functions when the same detector is shared.",
    "Trace the sensor-to-logic paths and test whether one failure removes both claimed barriers.",
    "CCPS independence/common-cause principles.",
    "A and D overlook shared sensing; C misclassifies detection as purely administrative."
  ), "TOOL", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Process safety asks what can happen when process control fails, then whether engineered and organizational barriers are independent, adequate, and timely. A BPCS alarm and an SIS sharing the same sensing element are n... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A change replaces a steel valve with a different alloy because the new one is available faster. What should a CSP recognize?", [
    "Replacement in kind automatically; material changes cannot affect process safety.",
    "The material-of-construction change may affect compatibility and should be evaluated through the applicable change process.",
    "Only procurement needs approval.",
    "Only the training file needs updating.",
  ], 1, explain(
    "Material-of-construction changes can affect corrosion, compatibility, pressure integrity, and failure modes.",
    "Review technical basis, compatibility, safety impact, documentation, and affected procedures before implementation.",
    "29 CFR 1910.119(l); OSHA PSM process-safety-information concepts.",
    "A assumes equivalence without analysis; C and D ignore the engineering safety impact."
  ), "STEM", "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Process safety asks what can happen when process control fails, then whether engineered and organizational barriers are independent, adequate, and timely. A BPCS alarm and an SIS sharing the same sensing element are n... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A risk model gives 1×10^-4/yr based on two layers, but one layer shares the same power supply as the initiating control. What is the correct CSP conclusion?", [
    "Keep the number because arithmetic is objective.",
    "Revisit the independence assumption before accepting the calculated frequency.",
    "Multiply the risk by 100 to be conservative without analysis.",
    "Ignore the shared power because the valves are different.",
  ], 1, explain(
    "Risk arithmetic is only as valid as its dependency assumptions.",
    "Identify the shared power failure mode and re-estimate or remove the layer credit if independence is not defensible.",
    "CCPS quantitative risk-analysis principles; CSP system-safety analysis.",
    "A treats false precision as truth; C is arbitrary; D ignores common-cause failure."
  ), "FORM", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "Process safety asks what can happen when process control fails, then whether engineered and organizational barriers are independent, adequate, and timely. A BPCS alarm and an SIS sharing the same sensing element are n... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
