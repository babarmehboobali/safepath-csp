import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D1.02";

export const classFields: ClassFields = {
  hook: "A weekend bypass around a high-level trip is already in the field. Operations wants to start Monday and catch paperwork in mechanical integrity. MoC and PSSR are the gates — not a memo after the fact.",
  hookOilGas: "A rented pump with a different seal plan sits on a covered process skid. Someone calls it like-in-kind. Open MoC; PSSR before it sees hydrocarbons.",
  hookConstruction: "A turnaround installs a temporary hose around a control valve. The superintendent wants to start the unit tonight and write MoC tomorrow. Gate startup.",
  rule: "A change that affects process safety triggers MoC before install. PSSR gates startup: design match, procedures/PSI, PHA closeout, training. MI and toolbox talks are not the gate.",
  modelCaption: "Change identified → MoC (PHA/PSI/procedures/training) → PSSR punchlist closed → startup. Side arrow: like-in-kind only if form/fit/function/risk truly match.",
  workedCase: "(1) Seal-plan swap is not like-in-kind — risk changed. (2) Open MoC; update P&ID, procedure, training; review PHA assumption on leaks. (3) PSSR walks construction vs design and blocks startup on open punchlist. Losing answer: start Monday and file MI later.",
  trapsJson: traps(
    "Calling any pump swap like-in-kind.",
    "Starting up with an open PSSR punchlist.",
    "Treating emergency as a verbal waiver of MoC.",
  ),
  contrastJson: contrast([
    { looksLike: "Like-in-kind", actually: "True form/fit/function/risk match — narrow" },
    { looksLike: "MoC", actually: "Authorize the change before install" },
    { looksLike: "PSSR", actually: "Gate startup of new/modified process" },
    { looksLike: "Mechanical integrity", actually: "Inspect existing equipment — not a design authorization" },
    { looksLike: "Temporary change", actually: "Time-limited MoC with restoration" },
    { looksLike: "Bypass log", actually: "Not a substitute for keeping the trip" },
  ]),
  mustScoreJson: mustScore(
    "MoC before install when chemicals, technology, equipment, procedures, or facilities change risk.",
    "Like-in-kind is narrow; risk change is MoC.",
    "PSSR before startup: design match, procedures/PSI, PHA, training.",
    "Emergency MoC is still MoC with a time limit.",
    "MI does not authorize a new design.",
    "An open punchlist blocks startup.",
    "Do not defeat an independent layer with a better bypass log.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "risk, metallurgy, logic, or capacity changed", pick: "open MoC — not like-in-kind" },
    { ifStem: "unit ready to start with open punchlist", pick: "block startup; finish PSSR" },
    { ifStem: "interlock defeat requested", pick: "refuse or engineer an independent layer" },
    { ifStem: "already running on a redline", pick: "shut down and complete the gate" },
    { ifStem: "training scheduled next quarter", pick: "not PSSR-ready" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" }
  ),
  brief: `MoC before install; PSSR before startup. Like-in-kind is narrow. MI is not the gate. Exam default: if two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
OSHA process-safety teaching treats Management of Change and pre-startup safety review as linked gates, not optional signatures. A change to process chemicals, technology, equipment, procedures, or facilities triggers MoC before it is installed. PSSR confirms construction and equipment match design, procedures and PSI are in place, hazards were analyzed, and training is complete — before startup. Starting on a redline and promising to catch it in mechanical integrity is the losing answer.

Field move
A pump swap to a different seal plan, a temporary bypass around an interlock, a recipe change, or a software setpoint that defeats a trip is a change. Open MoC. Update PSI, P&IDs, operating procedures, and training. Revisit PHA if the change introduces a new hazard or invalidates an assumption. Close PSSR with a punchlist that actually gates startup. Emergency MoC is still MoC — not a radio waiver. True like-in-kind form/fit/function can be MI; anything that changes risk is MoC.

Exam
If two answers work, take higher hierarchy / system / design. A completed MoC form without PSSR is not startup authorization. PSSR without updated procedures is not complete. Training later this quarter is not PSSR-ready. Mechanical integrity PM on the old pump does not cover new metallurgy. If two answers update documents, take the one that also prevents startup until verification. Last sentence may freeze production already started — then shut down and complete PSSR, not a memo. Temporary changes need time limits and restoration; they are not permanent by neglect. Employee participation belongs in the MoC review, not as a poster after the unit is live. A toolbox talk is not a substitute for updated operating procedures and training records. Oil-and-gas weekend bypasses, turnaround rental pumps, and recipe tweaks all fail the same test: did risk change, and is startup gated. PSI includes P&IDs, materials, relief design, SDS, and safe limits — a redline in a supervisor pocket is not PSI. If two answers update files, take the one that also prevents startup until verification is real. Do not let production pressure invert MoC then PSSR into start then paperwork. When capital remains, keep the independent layer rather than funding a prettier bypass log.
`,
  deep: `PSM’s fourteen elements fail as a stack of binders when MoC and PSSR are treated as signatures. The exam will offer a change that looks small: a different gasket, a temporary hose, a PLC logic tweak, a contractor’s rented pump, a new intermediate. 1910.119-style MoC asks whether process chemicals, technology, equipment, procedures, or facilities changed in a way that affects safety. Like-in-kind is a narrow door. If form, fit, function, or risk changed, it is MoC. Temporary changes have time limits and restoration. Emergency changes still get MoC; they do not get a radio waiver.

PSSR is the gate before startup of a new or modified covered process. Teaching points that show up on exams: construction and equipment match design specifications; safety, operating, maintenance, and emergency procedures are in place and adequate; a PHA was performed and recommendations resolved or scheduled before startup as the procedure requires; training of each employee involved in operating the process is complete. PSI — P&IDs, materials of construction, relief design, SDS, safe upper and lower limits — must reflect the as-built change. Starting on marked-up drawings is how plants ship the wrong energy into the next shift.

Integration is the discrimination skill. MoC without PHA review can miss a new scenario. PHA without updated procedures leaves operators with yesterday’s steps. Procedures without training leave a new trip undocumented in the field. Training without PSSR still allows a start with open punchlist items that were supposed to be complete. Mechanical integrity inspects equipment that exists; it does not authorize a new design. Incident investigation after a bypass is too late.

Hierarchy still governs the technical choice inside MoC. If the change is a request to defeat an interlock so production can run, the answer is not a better bypass log. The answer is to refuse the defeat or to engineer an independent layer that keeps the trip.

If two answers work, take higher hierarchy / system / design. A polished MoC checklist that ends in PPE and a watchstander while a safer metallurgy or a working trip is still open is a HIER miss wearing a PSM hat. Field skins: oil and gas will sell a weekend bypass around a high-level trip. Turnaround construction will sell a rental pump that is close enough. Manufacturing will sell a recipe tweak. In each case, open MoC, update PSI, train, PSSR, then start. If the last sentence says the unit is already running, shut it down and finish the gate. Do not let schedule invert the element order: verification is a signed PSSR with punchlist closure, not a calendar invite. Software setpoint changes that defeat trips are changes even when no flange is broken. Contractor equipment that alters capacity, relief, or interlocks is not automatically like-in-kind. PSI that still shows the old metallurgy is a startup blocker, not a backlog item for next month. If two documents are updated but startup is not gated, the PSSR failed even if the MoC form is signed. Refuse an interlock defeat; engineer an independent layer or keep the trip in service. Emergency MoC still names the change, the hazards, the time limit, and the restoration — a radio call is not the record. When capital remains, spend it on keeping the independent layer, then use procedures only for residual. Walk the chain until it is automatic: identify the change, open MoC, update PSI and procedures, train, PSSR, then start. A rented pump that changes capacity is in the host MoC even when a contractor owns the skid wheels. Software, recipes, and setpoints are technology; they do not get a hardware-only exemption. If the last sentence already started the unit, the answer is shut down and finish the gate, not a polite memo. Teach-back names the trigger, the MoC package, the PSSR checks, and the highest independent layer still open. Schedule pressure is not an element; verification is. Hold the reusable sentence: change identified, MoC complete, PSSR closed, then startup — never the reverse.
`,
  cardFront: "PSM — MoC then PSSR before startup?",
  cardBack: "Change → MoC (PSI/PHA/procedures/training) → PSSR punchlist closed → start. Attractive wrong: like-in-kind, MI later, verbal emergency. Study only.",
  teachBackKey: "Pass if MoC is before install, PSSR gates startup, and like-in-kind is described as narrow.",
  formulaSlug: null,
};

export const items: ClassItem[] = [
  exam(
    "CSP-11 D1.02",
    "You are the CSP reviewing a live decision at an offshore fabrication night shift. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: What is the primary purpose of PSSR on a modified covered process.",
    [
      "Confirm design match, procedures/PSI, PHA closeout, and training before startup.",
      "Replace mechanical integrity inspections.",
      "Compute LFL of a mixture.",
      "Authorize a verbal weekend bypass.",
    ],
    0,
    "Core Rule: PSSR is a startup gate. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: 1910.119-style PSSR teaching. Why Each Distractor Fails: Confirm design match, procedures/PSI, PHA closeout, and training before startup.: Correct: Those four checks are the gate. | Replace mechanical integrity inspections.: Fails: MI inspects existing gear. | Compute LFL of a mixture.: Fails: Wrong domain. | Authorize a verbal weekend bypass.: Fails: Verbal bypass is not PSSR.",
    "STEM",
    "Foundation",
    [
      "Correct: Those four checks are the gate.",
      "Fails: MI inspects existing gear.",
      "Fails: Wrong domain.",
      "Fails: Verbal bypass is not PSSR.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "A change that affects process safety triggers MoC before install. PSSR gates startup: design match, procedures/PSI, PHA closeout, training. MI and toolbox talks are not the gate. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.02",
    "A pump is swapped to a different seal plan. Operations calls it like-in-kind. Best classification?",
    [
      "Like-in-kind MI only.",
      "MoC — form/fit/function or risk changed.",
      "No action if the skid number is the same.",
      "PPE upgrade only.",
    ],
    1,
    "Core Rule: Like-in-kind is narrow. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: MoC trigger. Why Each Distractor Fails: Like-in-kind MI only.: Fails: Too narrow a door. | MoC — form/fit/function or risk changed.: Correct: Seal plan change is a risk change. | No action if the skid number is the same.: Fails: Asset tag is not the test. | PPE upgrade only.: Fails: PPE is not MoC.",
    "STEM",
    "Exam",
    [
      "Fails: Too narrow a door.",
      "Correct: Seal plan change is a risk change.",
      "Fails: Asset tag is not the test.",
      "Fails: PPE is not MoC.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "A change that affects process safety triggers MoC before install. PSSR gates startup: design match, procedures/PSI, PHA closeout, training. MI and toolbox talks are not the gate. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.02",
    "MoC form is signed. Procedures still show the old trip setpoints. Training is next quarter. May the unit start?",
    [
      "Yes — the MoC signature is the gate.",
      "Yes — MI will catch it.",
      "No — PSSR is not complete until procedures and training match the change.",
      "Yes if a watchstander is posted.",
    ],
    2,
    "Core Rule: MoC without PSSR is not startup authorization. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: MoC/PSSR integration. Why Each Distractor Fails: Yes — the MoC signature is the gate.: Fails: Signature ≠ PSSR. | Yes — MI will catch it.: Fails: MI is not the gate. | No — PSSR is not complete until procedures and training match the change.: Correct: Procedures and training are PSSR items. | Yes if a watchstander is posted.: Fails: Watchstander is residual at best.",
    "STEM",
    "Exam",
    [
      "Fails: Signature ≠ PSSR.",
      "Fails: MI is not the gate.",
      "Correct: Procedures and training are PSSR items.",
      "Fails: Watchstander is residual at best.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "A change that affects process safety triggers MoC before install. PSSR gates startup: design match, procedures/PSI, PHA closeout, training. MI and toolbox talks are not the gate. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.02",
    "Last sentence: the unit is already running on a redlined P&ID with an open PSSR punchlist. Best move?",
    [
      "File a memo and keep running.",
      "Schedule PHA for next revalidation only.",
      "Add a banner on the DCS.",
      "Shut down and complete PSSR before continued operation.",
    ],
    3,
    "Core Rule: Running on a redline with open punchlist is ungated startup. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Last-sentence shutdown. Why Each Distractor Fails: File a memo and keep running.: Fails: Paper around live risk. | Schedule PHA for next revalidation only.: Fails: Too late a PHA. | Add a banner on the DCS.: Fails: Admin around an open punchlist. | Shut down and complete PSSR before continued operation.: Correct: Finish the gate.",
    "STEM",
    "Expert",
    [
      "Fails: Paper around live risk.",
      "Fails: Too late a PHA.",
      "Fails: Admin around an open punchlist.",
      "Correct: Finish the gate.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "A change that affects process safety triggers MoC before install. PSSR gates startup: design match, procedures/PSI, PHA closeout, training. MI and toolbox talks are not the gate. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.02",
    "Operations wants a weekend bypass around a high-level trip with a radio waiver. Best CSP action?",
    [
      "Refuse the defeat or engineer an independent layer; emergency MoC is still MoC, not a radio waiver.",
      "Approve the radio waiver as emergency PSM.",
      "Approve if PPE is upgraded.",
      "Approve if insurance is increased.",
    ],
    0,
    "Core Rule: Do not defeat an independent layer with a log. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Hierarchy inside MoC. Why Each Distractor Fails: Refuse the defeat or engineer an independent layer; emergency MoC is still MoC, not a radio waiver.: Correct: Keep the trip or replace it with an independent layer. | Approve the radio waiver as emergency PSM.: Fails: Radio is not MoC. | Approve if PPE is upgraded.: Fails: PPE is lower. | Approve if insurance is increased.: Fails: Insurance is transfer.",
    "HIER",
    "Expert",
    [
      "Correct: Keep the trip or replace it with an independent layer.",
      "Fails: Radio is not MoC.",
      "Fails: PPE is lower.",
      "Fails: Insurance is transfer.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "A change that affects process safety triggers MoC before install. PSSR gates startup: design match, procedures/PSI, PHA closeout, training. MI and toolbox talks are not the gate. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.02",
    "A software setpoint change defeats a trip without breaking a flange. Is MoC required?",
    [
      "No — no flange, no MoC.",
      "Yes — technology/procedure of the process changed.",
      "Only if a contractor did it.",
      "Only after an incident.",
    ],
    1,
    "Core Rule: Logic changes are changes. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: MoC scope. Why Each Distractor Fails: No — no flange, no MoC.: Fails: Hardware-only view is a trap. | Yes — technology/procedure of the process changed.: Correct: Setpoint that defeats a trip is technology/procedure. | Only if a contractor did it.: Fails: Who turned the screw is irrelevant. | Only after an incident.: Fails: After-loss is too late.",
    "STEM",
    "Exam",
    [
      "Fails: Hardware-only view is a trap.",
      "Correct: Setpoint that defeats a trip is technology/procedure.",
      "Fails: Who turned the screw is irrelevant.",
      "Fails: After-loss is too late.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "A change that affects process safety triggers MoC before install. PSSR gates startup: design match, procedures/PSI, PHA closeout, training. MI and toolbox talks are not the gate. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.02",
    "Temporary hose around a control valve for a turnaround. Correct MoC feature?",
    [
      "Leave it in forever if it works.",
      "Toolbox talk only.",
      "Time limit and restoration to original design, plus PSSR before hydrocarbon.",
      "MI sticker on the hose.",
    ],
    2,
    "Core Rule: Temporary changes expire. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Temporary MoC. Why Each Distractor Fails: Leave it in forever if it works.: Fails: Neglect makes it permanent risk. | Toolbox talk only.: Fails: Talk is not MoC. | Time limit and restoration to original design, plus PSSR before hydrocarbon.: Correct: Time-limited restoration plus startup gate. | MI sticker on the hose.: Fails: Sticker is not PSSR.",
    "TIME",
    "Exam",
    [
      "Fails: Neglect makes it permanent risk.",
      "Fails: Talk is not MoC.",
      "Correct: Time-limited restoration plus startup gate.",
      "Fails: Sticker is not PSSR.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "A change that affects process safety triggers MoC before install. PSSR gates startup: design match, procedures/PSI, PHA closeout, training. MI and toolbox talks are not the gate. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.02",
    "You are the CSP reviewing a live decision at a warehouse second-shift startup. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Which is mechanical integrity rather than MoC/PSSR.",
    [
      "Installing a different relief orifice.",
      "Changing the chemical inventory above a threshold.",
      "Bypassing an interlock.",
      "Inspecting existing relief valves on their scheduled interval with no design change.",
    ],
    3,
    "Core Rule: MI maintains existing authorized equipment. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: MI vs MoC. Why Each Distractor Fails: Installing a different relief orifice.: Fails: Orifice change is MoC. | Changing the chemical inventory above a threshold.: Fails: Inventory change is MoC. | Bypassing an interlock.: Fails: Bypass is MoC, not MI. | Inspecting existing relief valves on their scheduled interval with no design change.: Correct: No design change — MI.",
    "TOOL",
    "Foundation",
    [
      "Fails: Orifice change is MoC.",
      "Fails: Inventory change is MoC.",
      "Fails: Bypass is MoC, not MI.",
      "Correct: No design change — MI.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "A change that affects process safety triggers MoC before install. PSSR gates startup: design match, procedures/PSI, PHA closeout, training. MI and toolbox talks are not the gate. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.02",
    "PHA recommendation from the change review is unresolved and not scheduled. PSSR status?",
    [
      "Not ready — PHA closeout is part of the startup gate.",
      "Ready if the MoC form is signed.",
      "Ready if PPE is issued.",
      "Ready if finance approved capital.",
    ],
    0,
    "Core Rule: Unresolved PHA items block PSSR. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: PHA/PSSR link. Why Each Distractor Fails: Not ready — PHA closeout is part of the startup gate.: Correct: Recommendations resolved or properly scheduled before startup. | Ready if the MoC form is signed.: Fails: Form ≠ closeout. | Ready if PPE is issued.: Fails: PPE is lower. | Ready if finance approved capital.: Fails: Money is not the gate.",
    "STEM",
    "Exam",
    [
      "Correct: Recommendations resolved or properly scheduled before startup.",
      "Fails: Form ≠ closeout.",
      "Fails: PPE is lower.",
      "Fails: Money is not the gate.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "A change that affects process safety triggers MoC before install. PSSR gates startup: design match, procedures/PSI, PHA closeout, training. MI and toolbox talks are not the gate. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.02",
    "Two answers both look busy: update the P&ID only, or update P&ID plus procedures, training, and a PSSR walkdown that can stop startup. Pick:",
    [
      "P&ID only — drawings are enough.",
      "The full PSI/procedure/training package with a PSSR that can actually stop startup.",
      "A laminated banner at the gate.",
      "Increase the insurance limit.",
    ],
    1,
    "Core Rule: If two answers work, take higher hierarchy / system / design. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Exam default on integration. Why Each Distractor Fails: P&ID only — drawings are enough.: Fails: Partial PSI. | The full PSI/procedure/training package with a PSSR that can actually stop startup.: Correct: Higher system completeness. | A laminated banner at the gate.: Fails: Admin. | Increase the insurance limit.: Fails: Transfer.",
    "HIER",
    "Exam",
    [
      "Fails: Partial PSI.",
      "Correct: Higher system completeness.",
      "Fails: Admin.",
      "Fails: Transfer.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "A change that affects process safety triggers MoC before install. PSSR gates startup: design match, procedures/PSI, PHA closeout, training. MI and toolbox talks are not the gate. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.02",
    "Contractor rented pump alters capacity. Host says the contractor owns PSM. Best host action?",
    [
      "Ignore — contractor license covers it.",
      "Wait for an incident investigation.",
      "Host still runs MoC/PSSR on the covered process; contractor gear that changes risk is in scope.",
      "Issue earplugs and start.",
    ],
    2,
    "Core Rule: Host process, host MoC. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Multi-employer PSM. Why Each Distractor Fails: Ignore — contractor license covers it.: Fails: License ≠ MoC. | Wait for an incident investigation.: Fails: After-loss is too late. | Host still runs MoC/PSSR on the covered process; contractor gear that changes risk is in scope.: Correct: Covered process remains host-owned. | Issue earplugs and start.: Fails: PPE around a capacity change.",
    "STEM",
    "Exam",
    [
      "Fails: License ≠ MoC.",
      "Fails: After-loss is too late.",
      "Correct: Covered process remains host-owned.",
      "Fails: PPE around a capacity change.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "A change that affects process safety triggers MoC before install. PSSR gates startup: design match, procedures/PSI, PHA closeout, training. MI and toolbox talks are not the gate. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    "CSP-11 D1.02",
    "You are the CSP reviewing a live decision at a semiconductor tool install. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Best like-in-kind example.",
    [
      "Any pump that fits the pad.",
      "A larger impeller because it bolts up.",
      "A different chemical because the tank is empty.",
      "Replacing a gasket with the specified equivalent that does not change risk.",
    ],
    3,
    "Core Rule: Like-in-kind = specified equivalent, same risk. Calculation Steps: None — classify the last sentence, then apply the rule. Standards Cited: Like-in-kind door. Why Each Distractor Fails: Any pump that fits the pad.: Fails: Fit is not function. | A larger impeller because it bolts up.: Fails: Larger impeller changes risk. | A different chemical because the tank is empty.: Fails: Chemical change is MoC. | Replacing a gasket with the specified equivalent that does not change risk.: Correct: Specified equivalent.",
    "STEM",
    "Exam",
    [
      "Fails: Fit is not function.",
      "Fails: Larger impeller changes risk.",
      "Fails: Chemical change is MoC.",
      "Correct: Specified equivalent.",
    ],
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Applicable OSHA / NFPA / ANSI / NIOSH public practice for the stem",
      fieldTakeaway: "A change that affects process safety triggers MoC before install. PSSR gates startup: design match, procedures/PSI, PHA closeout, training. MI and toolbox talks are not the gate. Verify the critical step before accepting a lower-tier control.",
    }
  ),
];

