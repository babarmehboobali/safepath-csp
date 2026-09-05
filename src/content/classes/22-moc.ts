import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D2.05";

export const classFields: ClassFields = {
  hook: "Maintenance swaps a pump for a “temporary” larger impeller on Saturday so Sunday’s batch can run. No review, no drawing update. You are the CSP. The question is what MoC required before, during, and after that swap.",
  hookOilGas: "A night crew installs a jumper around a control valve so a well can keep flowing. No review, no P&ID update. You are the CSP. The question is what MoC required before, during, and after that jumper.",
  hookConstruction: "A crane is swapped for a larger rental to catch schedule. Outrigger plan and lift radius are yesterday’s. You are the CSP. The question is what MoC required before, during, and after that swap.",
  rule: "MoC has three windows — before (review and authorize), during (control the work of changing), after (verify, update, expire temps). Replacement in kind is identical spec. A temporary that stays is still a change.",
  modelCaption: "Three columns — BEFORE (screen, risk, authorize, communicate), DURING (execute under temporary barriers), AFTER (verify, update documents, close temps). A dashed arrow loops “temporary still in field” back to BEFORE. Caption: emergency MoC still owes the after column.",
  workedCase: "(1) Larger impeller is not replacement in kind — before-column risk review, hierarchy, and authorization were due. (2) During: LOTO to install, temp barriers, named owner of the temp. (3) After: alignment check, update P&ID and SOP, expire or convert the temporary. Losing answer: running Sunday without the before column, or leaving a jumper because “it worked.”",
  trapsJson: traps(
    "Calling replacement-in-kind anything that is not identical.",
    "Leaving a jumper in place because “it worked.”",
    "Doing the risk review after the unit is already on-line.",
  ),
  contrastJson: contrast([
    { looksLike: "Replacement in kind", actually: "Same spec, same materials, same ratings — not a bigger impeller" },
    { looksLike: "Temporary change", actually: "Still needs before/during/after, plus an expiration" },
    { looksLike: "Emergency MoC", actually: "Minimum before to keep people alive, full after before it becomes normal" },
    { looksLike: "Document update only", actually: "After-column hygiene — not a substitute for the before review" },
  ]),
  mustScoreJson: mustScore(
    "Three windows: before, during, after.",
    "Replacement in kind is identical form, fit, function, and rating.",
    "Temporary still needs all three windows plus an expiration.",
    "Emergency MoC still owes the after column.",
    "Software, setpoints, and staffing cuts are changes.",
    "After includes P&IDs, procedures, and training.",
    "“It worked” is not authorization.",
    "MoC is a place to apply hierarchy, not to ratify PPE-first weekends."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "the impeller, gasket, or rating changed", pick: "it is not replacement in kind" },
    { ifStem: "a temporary is past expiration", pick: "treat it as unauthorized continuation" },
    { ifStem: "the unit is already running on a jumper", pick: "do remaining after/during — do not normalize" },
    { ifStem: "the last sentence is an emergency leak", pick: "life-saving during then full after" },
    { ifStem: "night-shift staffing or competence changed", pick: "it is still MoC" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design inside the review" },
  ),
  brief: `Before = review and authorize. During = control the work of changing. After = verify and update, including temps. Replacement in kind is identical, not close enough. A weekend temporary is still MoC. Exam default: if two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Management of change has three windows. Before: identify the change, run a risk and hierarchy review, authorize, communicate, and train. During: execute under temporary controls, isolation, and a named owner of the incomplete state. After: verify performance, update P&IDs, procedures, and training, close temporaries, and restore or convert to permanent. A “temporary” change that stays is still a change. Replacement in kind is identical form, fit, function, and rating — not a bigger impeller from a familiar vendor, not a gasket that “usually holds,” and not a 5% software setpoint.

Field move
Maintenance swaps a pump for a larger impeller on Saturday so Sunday’s batch can run. Treat it as a process change before anyone turns a wrench: vibration, relief, guarding, energy isolation, training. During the install, LOTO, temporary barriers, and a named owner of the temp. After: alignment check, update the P&ID and SOP, remove the temporary tag or open a permanent MoC. Running Sunday without the before column is unauthorized change, not hustle. Software setpoints, gasket polymers, contractor procedures, occupancy, crane radius, and night-shift staffing cuts are changes. Emergency clamps still owe a documented after-review before they become “how we run.” A 72-hour jumper at day 21 is unauthorized continuation.

Exam
If two answers work, take higher hierarchy / system / design. Do not MoC a warning sign when the review still allows a rated part or an engineered interlock. When the last sentence says the unit is already running on the jumper, you cannot rewind the before column perfectly — take remaining after/during: immediate risk review, engineered temporary, expiration, update drawings, or shut down if residual is unacceptable. Insurance does not authorize the impeller. An FMEA smell-test does not outrank a still-open substitute. 1904 clocks still run if the unauthorized change already injured someone. Stale P&IDs also poison the next LOTO.

Screen first: is it replacement in kind? If any rating, material, software, occupancy, or competence moved, it is a change. Authorize at the right level before the wrench, the jumper, or the rental crane. During the work, existing energy-control programs still apply. After the work, the drawing must match the field or the next isolation will be wrong. Temporary means dated. Emergency means after-action. Weekend means MoC anyway.
`,
  deep: `CSP-11 Domain 2 Management Systems. PSM 1910.119(l) is the chemical-process origin story, but MoC is also Z10 and ISO 45001 operational control and construction design change. The exam will not always say “PSM covered.” If form, fit, function, or rating moved, it is a change. Replacement in kind is identical spec, not vendor familiarity or “it usually holds.” A 20% larger impeller, a different gasket polymer, a software setpoint, a new solvent, a different contractor procedure, a crane with a new lift radius and outrigger footprint, or a cut from two competent persons to one on nights is a change. Hardware-only thinking is the trap.

Before-column failures: treating software, setpoints, and organizational changes as “not hardware so not MoC.” Treating a vendor’s “equivalent” as replacement in kind without checking ratings. Skipping worker participation on a change that alters tasks. Running an FMEA that scores detection as the worst RPN and funding a smell test while a less-hazardous substitute is still on the approved list. The before column is a place to apply hierarchy, not to ratify PPE-first weekends. A quieter compressor still beats an HCP-only package when purchasing is open. Relief-valve setpoint changes need the before review even when finance offers a higher liability limit.

During-column failures: installing the change without isolation; leaving two energy states live; no named owner of a jumper; no time limit; updating the ISO certificate footer before LOTO. During equals control the work of changing. Energy isolation, lift plans, open-vessel controls, and a named owner of the incomplete state beat paperwork. A construction pick on last week’s crane drawing is a during failure waiting to happen if the rental radius changed and the before column was skipped.

After-column failures: P&IDs that still show the old pump; relief calculations not rerun; training not refreshed; a 90-day temp at day 400; emergency MoC never retro-reviewed. Stale drawings also poison the next during — the next LOTO will isolate the wrong equipment. Temporary authorizations expire. Success is not authorization. “It worked” at day 21 on a 72-hour jumper is unauthorized continuation: review now, engineer or restore, update P&IDs, or shut down if risk is unacceptable. Document update only is after-column hygiene; it is not a substitute for the before review that never happened.

Overlap with other classes is how distractors are built. Investigation and CAPA often start at an unauthorized change. FTA and FMEA belong in the before review when the method fits — do not run RPN on a change that needs a cut-set of two failed valves (TOOL). 1904 clocks still run if the unauthorized change already injured someone (TIME): 24 hours on an amputation, not next month with CAPA. Insurance does not authorize the impeller (FIN). When the last sentence says the unit is already running on an unauthorized software setpoint, take remaining after/during: immediate risk review, restore or authorize with engineering controls, update procedures, and do not normalize the stealth change. Emergency leak at 02:00: life-saving during-controls first, then a full after-review before the clamp becomes normal operation. If two answers work, take higher hierarchy / system / design inside the review. Units rarely appear; the “math” is which window the last sentence left open, and whether replacement in kind was actually identical.

Hold the three-column sketch until you can redraw it from memory. Before is the only cheap place to apply hierarchy and to refuse replacement-in-kind theater. During is LOTO, lifts, and a named owner of a state the P&ID does not yet show. After is how you stop the temporary from becoming the new normal. The exam will put you in the wrong column on purpose. If the unit is already running, you are in remaining after/during, not a fantasy rewind of before. If the leak is spraying at 02:00, you are in during-to-save-life, then after before it is “how we run.” If the crane radius changed this morning, you are in before, not in “a crane is a crane.” If night-shift staffing dropped from two competent persons to one, you are in before, not in a climate survey. Redraw, name the window, apply hierarchy, expire the temp. That is Management of Change on this exam.`,
  cardFront: "MoC — temporary impeller on Saturday. Which window was skipped?",
  cardBack: "Before (review/authorize), during (controlled install), after (verify/update/expire temps). Temporary that stays is still a change. Study only — not allowed in the test center.",
  teachBackKey: "Pass if the sentence names before / during / after and says replacement-in-kind is identical, not “close enough,” with temps expiring.",
  formulaSlug: null,
};

export const items: ClassItem[] = [
  exam(
    T,
    "A larger impeller is fitted Saturday with no review so Sunday’s batch can run. Which MoC window was skipped first?",
    [
      "After — drawings can wait a quarter.",
      "Before — risk review and authorization were due before the swap.",
      "During is never required for rotating equipment.",
      "None — larger impeller is replacement in kind.",
    ],
    1,
    "A larger impeller is not replacement in kind. The before column (review/authorize) was skipped.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "MoC has three windows — before (review and authorize), during (control the work of changing), after (verify, update, expire temps). Replacement in kind is identical spec. A temporary that stays is still a change. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at a municipal water-plant retrofit. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Which is true replacement in kind.",
    [
      "A pump with 20% more capacity “from the same vendor.”",
      "A different gasket polymer that “usually holds.”",
      "An identical model, material, rating, and fit — same form/function.",
      "A software setpoint change of 5%.",
    ],
    2,
    "Replacement in kind is identical spec, not vendor familiarity or “usually.”",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "MoC has three windows — before (review and authorize), during (control the work of changing), after (verify, update, expire temps). Replacement in kind is identical spec. A temporary that stays is still a change. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "A jumper is authorized for 72 hours around a control valve. At day 21 it is still there because “it worked.” Best CSP call?",
    [
      "Leave it — successful temps become replacements in kind.",
      "Treat as unauthorized continuation: review now, engineer or restore, update P&IDs, or shut down if risk is unacceptable.",
      "Add a poster on the jumper.",
      "Raise insurance and keep flowing.",
    ],
    1,
    "After-column failure. Temps expire; success is not authorization.",
    "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "MoC has three windows — before (review and authorize), during (control the work of changing), after (verify, update, expire temps). Replacement in kind is identical spec. A temporary that stays is still a change. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Emergency leak. Crew clamps a line at 02:00 to protect people and the environment. What does MoC still require?",
    [
      "Nothing — emergencies are outside MoC.",
      "Only an FTA before the clamp.",
      "Only a 7-day OSHA 300 entry.",
      "Minimum during-controls to keep people alive, then a full after-review before the clamp becomes normal operation.",
    ],
    3,
    "Emergency MoC still owes the after column. You do not skip life-saving during-controls to hold a meeting.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "MoC has three windows — before (review and authorize), during (control the work of changing), after (verify, update, expire temps). Replacement in kind is identical spec. A temporary that stays is still a change. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "During installation of a new agitator, which is the during-window priority?",
    [
      "Update the ISO certificate first.",
      "Rewrite the corporate policy footer.",
      "Isolate energy (LOTO), control the lift and open vessel, named owner of the incomplete state.",
      "Compute RPN on the training slides.",
    ],
    2,
    "During = control the work of changing. Energy isolation beats paperwork.",
    "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "MoC has three windows — before (review and authorize), during (control the work of changing), after (verify, update, expire temps). Replacement in kind is identical spec. A temporary that stays is still a change. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "MoC review for a new solvent scores FMEA detection as the worst RPN and funds a smell test. A less-hazardous substitute is still on the approved list. What went wrong?",
    [
      "Nothing — RPN is the MoC method.",
      "Wrong tool use in the before column: detection scoring outranked still-open substitution.",
      "They should have used TRIR to authorize chemicals.",
      "They should have used 24.45 without MW.",
    ],
    1,
    "MoC review is not an RPN license to skip substitution.",
    "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "MoC has three windows — before (review and authorize), during (control the work of changing), after (verify, update, expire temps). Replacement in kind is identical spec. A temporary that stays is still a change. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Finance wants to skip MoC on a relief-valve setpoint change and buy a higher liability limit instead. Best position?",
    [
      "Accept — transfer replaces MoC.",
      "Skip before but do after.",
      "Skip if the premium falls.",
      "Reject: insurance is financing; a setpoint change is a process change that needs before/during/after.",
    ],
    3,
    "Share/transfer does not authorize a change.",
    "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "MoC has three windows — before (review and authorize), during (control the work of changing), after (verify, update, expire temps). Replacement in kind is identical spec. A temporary that stays is still a change. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Last sentence: the unit is already running on an unauthorized software setpoint. Best remaining move?",
    [
      "Immediate risk review now; restore the old setpoint or authorize with engineering controls; update procedures; do not normalize the stealth change.",
      "Pretend the before column happened.",
      "Wait for the annual audit.",
      "A pizza for the night crew.",
    ],
    0,
    "You cannot rewind, but you still do review/restore/authorize rather than normalize.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "MoC has three windows — before (review and authorize), during (control the work of changing), after (verify, update, expire temps). Replacement in kind is identical spec. A temporary that stays is still a change. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "After a change, P&IDs still show the old pump. The new pump is running. Which window failed?",
    [
      "Before — authorization is impossible if drawings lag.",
      "After — verification and document update did not close.",
      "During — LOTO is defined by old P&IDs only, so no issue.",
      "None — drawings are decorative.",
    ],
    1,
    "After includes drawings/procedures. Stale P&IDs also poison the next during (LOTO).",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "MoC has three windows — before (review and authorize), during (control the work of changing), after (verify, update, expire temps). Replacement in kind is identical spec. A temporary that stays is still a change. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "The unauthorized impeller fails at 22:00 Friday and amputates a fingertip. CAPA is scheduled next month. OSHA notification?",
    [
      "Next month with CAPA.",
      "Within 8 hours because it was mechanical.",
      "Within 24 hours of the amputation; MoC failure does not pause 1904.",
      "Within 7 days only.",
    ],
    2,
    "The 24-hour amputation clock is independent of MoC paperwork.",
    "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "MoC has three windows — before (review and authorize), during (control the work of changing), after (verify, update, expire temps). Replacement in kind is identical spec. A temporary that stays is still a change. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Organizational MoC: night-shift staffing cut from two competent persons to one, with no review. Best characterization?",
    [
      "Not a change — only hardware needs MoC.",
      "A climate survey issue only.",
      "A 14001 aspect only.",
      "A change: competence and supervision are operational controls; before-column review was due.",
    ],
    3,
    "People/process changes are MoC. “Hardware only” is a trap.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "MoC has three windows — before (review and authorize), during (control the work of changing), after (verify, update, expire temps). Replacement in kind is identical spec. A temporary that stays is still a change. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "A before-column review can still specify a quieter compressor instead of an HCP-only package. Operations prefers muffs because they are cheaper this weekend. Best MoC decision?",
    [
      "Approve muffs as the MoC control.",
      "Specify the quieter machine (or enclosure) as the change; HCP for residual.",
      "Approve neither — MoC cannot touch purchasing.",
      "Approve a higher deductible.",
    ],
    1,
    "MoC is a place to apply hierarchy, not to ratify PPE-first weekends.",
    "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "MoC has three windows — before (review and authorize), during (control the work of changing), after (verify, update, expire temps). Replacement in kind is identical spec. A temporary that stays is still a change. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "A construction lift plan used last week’s crane. A larger rental arrives with a different radius and outrigger footprint. Best MoC move before the pick?",
    [
      "Proceed — a crane is a crane.",
      "Treat as a change: re-authorize the lift plan, radius, and ground bearing before the pick; do not catch schedule on yesterday’s drawing.",
      "Add a spotter and keep last week’s plan.",
      "Call it replacement in kind because both are mobile cranes.",
    ],
    1,
    "Radius and outrigger loads are form/function. The before column is due before the pick.",
    "STEM",
    "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "MoC has three windows — before (review and authorize), during (control the work of changing), after (verify, update, expire temps). Replacement in kind is identical spec. A temporary that stays is still a change. Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Relief calculation was not rerun after a setpoint change. The valve is already in service. Best remaining after-column action?",
    [
      "Leave it — the setpoint is “close.”",
      "A poster on overpressure.",
      "Rerun the relief basis now; restore the old setpoint or engineer the new one; update the P&ID and procedure before normalizing.",
      "Wait for the next turnaround.",
    ],
    2,
    "After includes the calculations the change invalidated. Close the window or shut down.",
    "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Management-system PDCA / ISO 45001 public concepts",
      fieldTakeaway: "MoC has three windows — before (review and authorize), during (control the work of changing), after (verify, update, expire temps). Replacement in kind is identical spec. A temporary that stays is still a change. Verify the critical step before accepting a lower-tier control.",
    }
  ),
];

