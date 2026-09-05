import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D2.06";

export const classFields: ClassFields = {
  hook: "The stem asks how overpressure can occur and then hands you two independent failure probabilities. Draw the right tree, multiply for AND, and still ask whether a second independent trip is open.",
  hookOilGas: "A separator overpressure TOP event with independent relief and trip. Compute the AND, then add a diverse independent layer rather than a prettier tree of a single tap.",
  hookConstruction: "A crane two-block TOP with independent limit switch and operator action. Do not treat the human as a fully independent redundant leg without the stem saying so.",
  rule: "FTA is deductive from a TOP; ETA is inductive from an initiator. Independent AND multiplies failure probabilities. MTBF is not a skip ticket for a still-open design layer.",
  modelCaption: "FTA: TOP → AND/OR → basic events. ETA: initiator → barrier success/fail branches. Caption: compute only with given numbers; common-cause kills independence.",
  workedCase: "(1) TOP = overpressure. Trip failure P=0.01 and relief failure P=0.02, independent, both required → AND → 0.0002. (2) Losing calc: 0.03 from adding. (3) Losing control: accept 0.0002 and skip a diverse independent high-level trip still on the P&ID option sheet.",
  trapsJson: traps(
    "Adding independent AND probabilities.",
    "Using FTA when the stem is an initiator-plus-barriers ETA.",
    "Treating MTBF as permission to skip a still-open independent layer.",
  ),
  contrastJson: contrast([
    { looksLike: "FTA", actually: "Deductive from TOP event" },
    { looksLike: "ETA", actually: "Inductive from initiator" },
    { looksLike: "AND gate", actually: "All inputs required" },
    { looksLike: "OR gate", actually: "Any input sufficient" },
    { looksLike: "MTBF", actually: "Mean — not a PEL or a skip ticket" },
    { looksLike: "Common-cause", actually: "Destroys independence" },
  ]),
  mustScoreJson: mustScore(
    "FTA: TOP down through AND/OR to basic events.",
    "ETA: initiator through barrier success/failure.",
    "Independent AND of failures: multiply.",
    "Series reliability: multiply success probabilities.",
    "Common-cause kills naive products.",
    "MTBF is not permission to skip design.",
    "Use the tree to add an independent layer.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "how can TOP occur", pick: "FTA" },
    { ifStem: "given initiator, barrier success/fail", pick: "ETA" },
    { ifStem: "independent AND of rare failures", pick: "multiply" },
    { ifStem: "shared power or shared tap", pick: "do not assume independence" },
    { ifStem: "tree is pretty but a second trip is open", pick: "add the independent layer" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" }
  ),
  brief: `FTA down from TOP; ETA out from initiator. Independent AND multiplies. Add an independent layer. Exam default: if two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Fault tree analysis is deductive: start from a TOP event and develop AND/OR gates to basic events. Event tree analysis is inductive: start from an initiator and branch on barrier success/failure. Reliability of independent series components multiplies; a parallel redundant set fails only if all legs fail. Do not mix the trees. Do not treat MTBF as a permit to skip a still-open design fix.

Field move
When the question is how can this vessel overpressure, draw FTA. When the question is given a leak, what happens if detection, isolation, and deluge succeed or fail, draw ETA. Compute a simple independent AND/OR only with the numbers the stem gives. Prefer adding an independent engineered layer over a more precise tree of an unsafe design. Shared utilities, common-cause, and human recovery are where naive products lie.

Exam
If two answers work, take higher hierarchy / system / design. TOOL misses: FMEA for a TOP-event combination question; 5-Why for a quantified cut set; FTA after occupancy when the stem still allows a design change. FORM misses: adding probabilities that should be multiplied under independence, or multiplying when an OR applies. Last sentence may give P(A)=0.01 and P(B)=0.02 independent AND — compute, then still ask whether a higher independent layer is open. Redraw the decision sequence for FTA/ETA reliability before looking at options. Cost and convenience will sell a lower control that looks busy. Attractive wrong answers on FTA/ETA reliability are usually competent lower-row programs, busy paperwork, or a funded contract. Read the last sentence for constraints that close a higher control, then take the best remaining system or design fix for FTA/ETA reliability. When capital or authority remains, spend it on the highest remaining hardware or independent layer, then use administrative controls and PPE only for residual FTA/ETA reliability risk. Do not let schedule pressure invert the FTA/ETA reliability sequence. Verification is a test with an owner, not a calendar invite. If two answers both look professional, take higher hierarchy / system / design on FTA/ETA reliability. Teach-back restates the FTA/ETA reliability rule, the sequence, and the verification step in one spoken sentence.
`,
  deep: `System safety on CSP-11 is tool choice plus a little Boolean arithmetic, not a software certificate. FTA asks how a TOP event can occur. An OR gate means any input causes the output. An AND gate means all inputs are required. A minimal cut set is a smallest set of basic events that takes the TOP. ETA asks, given an initiator, how downstream barriers succeed or fail, producing consequence branches. Mixing them without a reason wastes time.

Reliability and availability are related but not identical. Reliability is the probability of performing as required for a stated interval. Availability also includes downtime and restoration. MTBF is a mean, not a guarantee, and not an OSHA PEL. For independent components in series (all must work), system reliability is the product. For active parallel redundancy with independent failures, the system fails only if every leg fails, so failure probability is the product of failure probabilities. Common-cause (shared power, shared sensor tap, same maintenance error) destroys the independence assumption. The exam will either tell you to assume independence or will hint at a shared utility.

Calculator discipline: use the stem’s numbers. Independent AND of rare failures is a product, not a sum. Independent OR of rare failures can be approximated by a sum only when the stem says so. Pick the closest rounded value. Degrees unless the stem requires radians. Do not invent a formula sheet. If the stem gives P(A)=0.01, P(B)=0.02, independent, both required to fail the TOP, P(TOP)=0.0002. The losing answer is 0.03 from adding.

Hierarchy still wins. A more elegant tree of a pump that can still be specified with a second independent trip is the wrong investment. If two answers work, take higher hierarchy / system / design. Use FTA/ETA to change the design: add an independent layer, remove a common-cause, move a human action out of the cut set. A quantified residual that depends on a procedure is still a procedure. Standby systems need test intervals; untested redundancy is paper redundancy. Teach-back: name whether the stem asked FTA or ETA, name AND versus OR, compute only with given numbers, then name the highest independent layer still open. Scoring on FTA/ETA reliability favors evidence, owners, verification, and hierarchy-smart controls rather than binders that look complete. Last-sentence constraints may freeze a higher FTA/ETA reliability control; then take the best remaining fix and verify it instead of wishing the freeze away. Shared assumptions and checkbox closures create false assurance on FTA/ETA reliability; name the assumption and test it. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet. Hold the exam default on FTA/ETA reliability: if two answers work, take higher hierarchy / system / design, and reject polished paperwork when a higher system or design fix remains. In teach-back, name the FTA/ETA reliability decision, the highest open control, and the verification step without reciting fake clause trivia. Field skins change the equipment, not the logic: a skid, a site tent, and a paint line still fail the same FTA/ETA reliability test. A funded lower-row contract does not freeze a higher FTA/ETA reliability row the stem still leaves open. Design the next job so the FTA/ETA reliability control is obvious, then still implement it, then still verify it. Do not restart FTA/ETA reliability from the bottom because PPE and training are what the plant already knows how to buy. Units, clocks, and tool names are traps only when you skip the last sentence on FTA/ETA reliability. Walk the FTA/ETA reliability sequence until it is automatic, then apply the last sentence, then pick the higher remaining row. Independent engineered layers beat detection, watchstanders, and emergency response when those layers are still open on FTA/ETA reliability. Paper, PPE, and insurance can sit beside a FTA/ETA reliability control; they do not replace it. If production already started in the last sentence, the FTA/ETA reliability answer is often stop, restore the gate, then proceed — not a memo.
`,
  cardFront: "FTA vs ETA — AND/OR math?",
  cardBack: "FTA from TOP; ETA from initiator. Independent AND: 0.01×0.02=0.0002, not 0.03. Then add a diverse layer. Study only.",
  teachBackKey: "Pass if FTA vs ETA is named, AND multiplies independent failures, and a still-open independent layer beats a prettier tree.",
  formulaSlug: "combination-and",
};

export const items: ClassItem[] = [
  exam(
    "CSP-11 D2.06",
    "P(A)=0.01, P(B)=0.02, independent, both required to cause the TOP. P(TOP)?",
    [
      "0.0002",
      "0.03",
      "0.01",
      "1.00",
    ],
    0,
    "Core Rule: Independent AND multiplies. Calculation Steps: 0.01 × 0.02 = 0.0002. Do not add. Standards Cited: Boolean reliability teaching. Why Each Distractor Fails: 0.0002: Correct: Product of independent failures. | 0.03: Fails: Added instead of multiplied. | 0.01: Fails: Used only A. | 1.00: Fails: Nonsense certainty.",
    "FORM",
    "Exam",
    [
      "Correct: Product of independent failures.",
      "Fails: Added instead of multiplied.",
      "Fails: Used only A.",
      "Fails: Nonsense certainty.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "FTA is deductive from a TOP; ETA is inductive from an initiator. Independent AND multiplies failure probabilities. MTBF is not a skip ticket for a still-open design layer. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.06",
    "Stem: given a leak, what if detection, isolation, and deluge succeed or fail. Best tool?",
    [
      "Fault tree only, because trees are always FTA.",
      "Event tree from the initiator.",
      "5-Why on the gasket vendor.",
      "Kirkpatrick Level 1.",
    ],
    1,
    "Core Rule: Initiator plus barrier branches is ETA. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: ETA identification. Why Each Distractor Fails: Fault tree only, because trees are always FTA.: Fails: Wrong tree. | Event tree from the initiator.: Correct: Inductive barrier branches. | 5-Why on the gasket vendor.: Fails: Wrong tool. | Kirkpatrick Level 1.: Fails: Wrong domain.",
    "TOOL",
    "Exam",
    [
      "Fails: Wrong tree.",
      "Correct: Inductive barrier branches.",
      "Fails: Wrong tool.",
      "Fails: Wrong domain.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "FTA is deductive from a TOP; ETA is inductive from an initiator. Independent AND multiplies failure probabilities. MTBF is not a skip ticket for a still-open design layer. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.06",
    "How can overpressure occur from combinations of faults. Best tool?",
    [
      "ETA only.",
      "SPCC plan.",
      "Fault tree from the TOP event.",
      "Smile sheet.",
    ],
    2,
    "Core Rule: How-can-TOP is FTA. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: FTA identification. Why Each Distractor Fails: ETA only.: Fails: ETA is initiator-first. | SPCC plan.: Fails: Wrong domain. | Fault tree from the TOP event.: Correct: Deductive from TOP. | Smile sheet.: Fails: Wrong domain.",
    "TOOL",
    "Foundation",
    [
      "Fails: ETA is initiator-first.",
      "Fails: Wrong domain.",
      "Correct: Deductive from TOP.",
      "Fails: Wrong domain.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "FTA is deductive from a TOP; ETA is inductive from an initiator. Independent AND multiplies failure probabilities. MTBF is not a skip ticket for a still-open design layer. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.06",
    "Two independent trips share one pressure tap. Best reliability critique?",
    [
      "Independence is automatic if the tags differ.",
      "MTBF makes them independent.",
      "Insurance makes them independent.",
      "Common-cause: do not treat the legs as independent.",
    ],
    3,
    "Core Rule: Shared tap is common-cause. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Common-cause. Why Each Distractor Fails: Independence is automatic if the tags differ.: Fails: Tags ≠ independence. | MTBF makes them independent.: Fails: MTBF ≠ independence. | Insurance makes them independent.: Fails: Insurance ≠ independence. | Common-cause: do not treat the legs as independent.: Correct: Shared sensing destroys independence.",
    "STEM",
    "Expert",
    [
      "Fails: Tags ≠ independence.",
      "Fails: MTBF ≠ independence.",
      "Fails: Insurance ≠ independence.",
      "Correct: Shared sensing destroys independence.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "FTA is deductive from a TOP; ETA is inductive from an initiator. Independent AND multiplies failure probabilities. MTBF is not a skip ticket for a still-open design layer. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.06",
    "Independent series components with R=0.9 and R=0.9. System reliability?",
    [
      "0.81",
      "0.99",
      "1.80",
      "0.9",
    ],
    0,
    "Core Rule: Series success multiplies. Calculation Steps: 0.9 × 0.9 = 0.81. Standards Cited: Series reliability. Why Each Distractor Fails: 0.81: Correct: Product of success. | 0.99: Fails: OR approximation fantasy. | 1.80: Fails: Added. | 0.9: Fails: Used one component.",
    "FORM",
    "Exam",
    [
      "Correct: Product of success.",
      "Fails: OR approximation fantasy.",
      "Fails: Added.",
      "Fails: Used one component.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "FTA is deductive from a TOP; ETA is inductive from an initiator. Independent AND multiplies failure probabilities. MTBF is not a skip ticket for a still-open design layer. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.06",
    "A quantified FTA residual depends on a procedure. A second independent trip is still on the option sheet. Best move?",
    [
      "Accept the number because it is small.",
      "Add the independent trip; a procedure residual is still a procedure.",
      "Buy a nicer FTA package only.",
      "Post a watchstander as equivalent redundancy.",
    ],
    1,
    "Core Rule: If two answers work, take higher hierarchy / system / design. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Hierarchy vs quantification. Why Each Distractor Fails: Accept the number because it is small.: Fails: Small number ≠ skip ticket. | Add the independent trip; a procedure residual is still a procedure.: Correct: Independent engineered layer still open. | Buy a nicer FTA package only.: Fails: Software is not a layer. | Post a watchstander as equivalent redundancy.: Fails: Watchstander is admin.",
    "HIER",
    "Expert",
    [
      "Fails: Small number ≠ skip ticket.",
      "Correct: Independent engineered layer still open.",
      "Fails: Software is not a layer.",
      "Fails: Watchstander is admin.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "FTA is deductive from a TOP; ETA is inductive from an initiator. Independent AND multiplies failure probabilities. MTBF is not a skip ticket for a still-open design layer. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.06",
    "You are the CSP reviewing a live decision at a grain elevator maintenance day. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: OR gate meaning.",
    [
      "All inputs are required.",
      "The gate is a PEL.",
      "Any listed input can cause the output event.",
      "The gate pauses the exam timer.",
    ],
    2,
    "Core Rule: OR = any; AND = all. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Gate literacy. Why Each Distractor Fails: All inputs are required.: Fails: That is AND. | The gate is a PEL.: Fails: Not a PEL. | Any listed input can cause the output event.: Correct: Any input sufficient. | The gate pauses the exam timer.: Fails: Unrelated.",
    "STEM",
    "Foundation",
    [
      "Fails: That is AND.",
      "Fails: Not a PEL.",
      "Correct: Any input sufficient.",
      "Fails: Unrelated.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "FTA is deductive from a TOP; ETA is inductive from an initiator. Independent AND multiplies failure probabilities. MTBF is not a skip ticket for a still-open design layer. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.06",
    "MTBF of 10 years is offered as permission to skip a still-open independent relief. Best reading?",
    [
      "MTBF is an OSHA PEL.",
      "MTBF eliminates common-cause.",
      "MTBF is RPO.",
      "MTBF is a mean, not a skip ticket and not a PEL.",
    ],
    3,
    "Core Rule: Means are not legal limits or hierarchy. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: MTBF trap. Why Each Distractor Fails: MTBF is an OSHA PEL.: Fails: Not a PEL. | MTBF eliminates common-cause.: Fails: Does not fix common-cause. | MTBF is RPO.: Fails: RPO is continuity, not reliability. | MTBF is a mean, not a skip ticket and not a PEL.: Correct: Mean ≠ permission.",
    "PELTLV",
    "Exam",
    [
      "Fails: Not a PEL.",
      "Fails: Does not fix common-cause.",
      "Fails: RPO is continuity, not reliability.",
      "Correct: Mean ≠ permission.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "FTA is deductive from a TOP; ETA is inductive from an initiator. Independent AND multiplies failure probabilities. MTBF is not a skip ticket for a still-open design layer. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.06",
    "Untested standby pump advertised as redundancy. Best label?",
    [
      "Paper redundancy until test interval and start reliability are real.",
      "Perfect redundancy by brochure.",
      "A PEL.",
      "An ETA initiator.",
    ],
    0,
    "Core Rule: Standby needs tests. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Availability vs brochure. Why Each Distractor Fails: Paper redundancy until test interval and start reliability are real.: Correct: Tested standby is a layer. | Perfect redundancy by brochure.: Fails: Brochure ≠ layer. | A PEL.: Fails: Not a PEL. | An ETA initiator.: Fails: Wrong tool noun.",
    "STEM",
    "Exam",
    [
      "Correct: Tested standby is a layer.",
      "Fails: Brochure ≠ layer.",
      "Fails: Not a PEL.",
      "Fails: Wrong tool noun.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "FTA is deductive from a TOP; ETA is inductive from an initiator. Independent AND multiplies failure probabilities. MTBF is not a skip ticket for a still-open design layer. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.06",
    "Closest rounded value: 0.01 × 0.015 = 0.00015. Options 0.0002, 0.025, 0.01, 0.15. Pick?",
    [
      "0.025",
      "0.0002",
      "0.01",
      "0.15",
    ],
    1,
    "Core Rule: Multiply then pick closest. Calculation Steps: 0.00015 closest to 0.0002, not to 0.025 from adding. Standards Cited: Calculator closest-value rule. Why Each Distractor Fails: 0.025: Fails: Added 0.01+0.015. | 0.0002: Correct: Closest to 0.00015. | 0.01: Fails: Copied an input. | 0.15: Fails: Shifted decimal.",
    "FORM",
    "Exam",
    [
      "Fails: Added 0.01+0.015.",
      "Correct: Closest to 0.00015.",
      "Fails: Copied an input.",
      "Fails: Shifted decimal.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "FTA is deductive from a TOP; ETA is inductive from an initiator. Independent AND multiplies failure probabilities. MTBF is not a skip ticket for a still-open design layer. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.06",
    "FMEA is offered for a TOP-event combination question. Critique?",
    [
      "FMEA always replaces FTA.",
      "FMEA is ETA.",
      "Wrong tool — FTA structures combinations; FMEA is design-stage modes.",
      "FMEA is a 5 dB exchange.",
    ],
    2,
    "Core Rule: Tool fit. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: FMEA vs FTA. Why Each Distractor Fails: FMEA always replaces FTA.: Fails: Does not replace. | FMEA is ETA.: Fails: Not ETA. | Wrong tool — FTA structures combinations; FMEA is design-stage modes.: Correct: Different questions. | FMEA is a 5 dB exchange.: Fails: Wrong class.",
    "TOOL",
    "Exam",
    [
      "Fails: Does not replace.",
      "Fails: Not ETA.",
      "Correct: Different questions.",
      "Fails: Wrong class.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "FTA is deductive from a TOP; ETA is inductive from an initiator. Independent AND multiplies failure probabilities. MTBF is not a skip ticket for a still-open design layer. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D2.06",
    "Human recovery is listed as a fully independent redundant FTA leg with no stem support. Best action?",
    [
      "Treat the human as a 0.0 failure probability.",
      "Delete the TOP event.",
      "Ignore common-cause only if the person is trained.",
      "Do not assume independence; keep or add an engineered independent layer.",
    ],
    3,
    "Core Rule: Humans are not perfect independent legs. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Human in the cut set. Why Each Distractor Fails: Treat the human as a 0.0 failure probability.: Fails: Humans fail. | Delete the TOP event.: Fails: Cannot delete the TOP. | Ignore common-cause only if the person is trained.: Fails: Training ≠ independence. | Do not assume independence; keep or add an engineered independent layer.: Correct: Engineered independence.",
    "HIER",
    "Expert",
    [
      "Fails: Humans fail.",
      "Fails: Cannot delete the TOP.",
      "Fails: Training ≠ independence.",
      "Correct: Engineered independence.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "FTA is deductive from a TOP; ETA is inductive from an initiator. Independent AND multiplies failure probabilities. MTBF is not a skip ticket for a still-open design layer. Verify the critical step before accepting a lower-tier control.",
    }
  ),
];

