import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D4.03";

export const classFields: ClassFields = {
  hook: "A warehouse adds more extinguishers and a prettier alarm panel while still storing oxidizers against flammables and running hot work without a permit. You are the CSP. The question is whether that is fire prevention or fire protection.",
  hookOilGas: `A pad adds more extinguishers and a prettier alarm panel while still storing oxidizers against hydrocarbons and running hot work without a permit. You are the CSP. The question is whether that is fire prevention or fire protection.`,
  hookConstruction: `A site adds more extinguishers and a prettier horn while still stacking lumber against hot-work and skipping the permit. You are the CSP. The question is whether that is fire prevention or fire protection.`,
  rule: "Fire prevention removes tetrahedron legs before ignition: fuel, heat/ignition, oxidizer, and the uninhibited chain reaction. Housekeeping, substitution of flammables, hot-work control, bonding/grounding, oxidizer segregation, and smoking controls are prevention. Sprinklers, extinguishers, detection, and fire walls are protection (Class 51). If prevention is still open, it beats more extinguishers. No ROI slug required — do not let a pretty panel impersonate substitution.",
  modelCaption:
    "Tetrahedron: Fuel | Heat | Oxidizer | Chain reaction. X on a leg = prevention. A side rack of extinguishers tagged “protection — next class.” Caption: take a leg off before the event; do not stock hoses instead.",
  workedCase:
    "Washer still using flammable solvent next to an oxidizer cage, welding 8 m away, no bonding. Prevention: aqueous substitute (fuel), move oxidizers (oxidizer), hot-work permit and 35 ft control (heat), bonding/grounding (ignition). Protection (sprinklers, extinguishers) is residual, not a skip of those four. An extra horn panel is detection/protection, not prevention.",
  trapsJson: traps(
    "Calling extra extinguishers “prevention.”",
    "Leaving fuel and ignition in contact because NFPA 13 is installed.",
    "Treating a hot-work permit as optional if sprinklers are wet.",
  ),
  contrastJson: contrast([
    { looksLike: "Fire prevention", actually: "Remove fuel, ignition, oxidizer, or chain reaction before fire" },
    { looksLike: "Fire protection", actually: "Detect, suppress, compartment, egress after ignition is possible" },
    { looksLike: "Hot-work permit / bonding", actually: "Prevention — ignition control" },
    { looksLike: "Sprinkler / extinguisher / alarm", actually: "Protection — Class 51" },
  ]),
  mustScoreJson: mustScore(
    "Prevention removes fuel, ignition, and oxygen opportunities before fire starts.",
    "Hot-work controls, housekeeping, and ignition-source management are prevention.",
    "Electrical maintenance prevents ignition from faults.",
    "Flammable liquid storage design prevents fire starts and limits spread.",
    "Do not call extinguishers prevention when the stem asks prevention.",
    "Link prevention to MoC when processes change.",
    "Hierarchy: eliminate flammables when open before relying on response.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "stem asks prevention and offers only extinguishers", pick: "fuel/ignition controls first" },
    { ifStem: "hot work lacks permit/controls", pick: "implement hot-work prevention controls" },
    { ifStem: "housekeeping fuel loads are high", pick: "reduce fuel load" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "substitution of solvent is open", pick: "prevent fire by substitution" },
  ),

  brief: `Fire prevention removes tetrahedron legs before ignition: fuel, heat/ignition, oxidizer, and the uninhibited chain reaction. Housekeeping, substitution of flammables, hot-work control, bonding/grounding, oxidizer segregation, and smoking controls are prevention. Sprinklers, extinguishers, detection, and fire walls are protection (Class 51). If prevention is still open, it beats more extinguishers. No ROI slug required â do not If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Fire prevention removes tetrahedron legs before ignition: fuel, heat/ignition, oxidizer, and the uninhibited chain reaction. Housekeeping, substitution of flammables, hot-work control, bonding/grounding, oxidizer segregation, and smoking controls are prevention. Sprinklers, extinguishers, detection, and fire walls are protection (Class 51). If prevention is still open, it beats more extinguishers. No ROI slug required â do not let a pretty panel impersonate substitution. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
A warehouse adds more extinguishers and a prettier alarm panel while still storing oxidizers against flammables and running hot work without a permit. You are the CSP. The question is whether that is fire prevention or fire protection. Oil-and-gas skin: A pad adds more extinguishers and a prettier alarm panel while still storing oxidizers against hydrocarbons and running hot work without a permit. You are the CSP. Construction skin: A site adds more extinguishers and a prettier horn while still stacking lumber against hot-work and skipping the permit. You are the CSP. Work the case: Washer still using flammable solvent next to an oxidizer cage, welding 8 m away, no bonding. Prevention: aqueous substitute (fuel), move oxidizers (oxidizer), hot-work permit and 35 ft control (heat), bonding/grounding (ignition). Protection (sprinklers, extinguishers) is residual, not a skip of those four. An extra horn panel is detection/protection, not prevention. Classic traps: Calling extra extinguishers “prevention.”; Leaving fuel and ignition in contact because NFPA 13 is installed.; Treating a hot-work permit as optional if sprinklers are wet.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for fire prevention. Verify whether a higher system or design fix is still open. Contrast labels: Fire prevention is actually Remove fuel, ignition, oxidizer, or chain reaction before fire; Fire protection is actually Detect, suppress, compartment, egress after ignition is possible; Hot-work permit / bonding is actually Prevention — ignition control; Sprinkler / extinguisher / alarm is actually Protection — Class 51. If the stem shows stem asks prevention and offers only extinguishers, pick fuel/ignition controls first. If the stem shows hot work lacks permit/controls, pick implement hot-work prevention controls. If the stem shows housekeeping fuel loads are high, pick reduce fuel load. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows substitution of solvent is open, pick prevent fire by substitution. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Fire tetrahedron — which leg does a sprinkler remove? Is that prevention sits in CSP-11 Domain 4 Emergency Management. The exam tests whether you apply the rule when a package already looks complete. Core rule: Fire prevention removes tetrahedron legs before ignition: fuel, heat/ignition, oxidizer, and the uninhibited chain reaction. Housekeeping, substitution of flammables, hot-work control, bonding/grounding, oxidizer segregation, and smoking controls are prevention. Sprinklers, extinguishers, detection, and fire walls are protection (Class 51). If prevention is still open, it beats more extinguishers. No ROI slug required â do not let a pretty panel impersonate substitution. Field context: A warehouse adds more extinguishers and a prettier alarm panel while still storing oxidizers against flammables and running hot work without a permit. You are the CSP. The question is whether that is fire prevention or fire protection. The oil-and-gas skin shifts the same decision into production pressure: A pad adds more extinguishers and a prettier alarm panel while still storing oxidizers against hydrocarbons and running hot work without a permit. You are the CSP. The construction skin shifts it into schedule and trade stacking: A site adds more extinguishers and a prettier horn while still stacking lumber against hot-work and skipping the permit. You are the CSP. Model caption for this class: Tetrahedron: Fuel | Heat | Oxidizer | Chain reaction. X on a leg = prevention. A side rack of extinguishers tagged âprotection â next class.â Caption: take a leg off before the event; do not stock hoses instead. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Prevention removes fuel, ignition, and oxygen opportunities before fire starts. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Hot-work controls, housekeeping, and ignition-source management are prevention. (3) Electrical maintenance prevents ignition from faults. (4) Flammable liquid storage design prevents fire starts and limits spread. (5) Do not call extinguishers prevention when the stem asks prevention. (6) Link prevention to MoC when processes change. (7) Hierarchy: eliminate flammables when open before relying on response. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Washer still using flammable solvent next to an oxidizer cage, welding 8 m away, no bonding. Prevention: aqueous substitute (fuel), move oxidizers (oxidizer), hot-work permit and 35 ft control (heat), bonding/grounding (ignition). Protection (sprinklers, extinguishers) is residual, not a skip of those four. An extra horn panel is detection/protection, not prevention. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Calling extra extinguishers “prevention.”; Leaving fuel and ignition in contact because NFPA 13 is installed.; Treating a hot-work permit as optional if sprinklers are wet.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Fire prevention” is really Remove fuel, ignition, oxidizer, or chain reaction before fire; “Fire protection” is really Detect, suppress, compartment, egress after ignition is possible; “Hot-work permit / bonding” is really Prevention — ignition control; “Sprinkler / extinguisher / alarm” is really Protection — Class 51. Stem-if-then map: if stem asks prevention and offers only extinguishers → fuel/ignition controls first; if hot work lacks permit/controls → implement hot-work prevention controls; if housekeeping fuel loads are high → reduce fuel load; if two answers work → higher hierarchy / system / design; if substitution of solvent is open → prevent fire by substitution. Scoring favors evidence, owners, verification, and hierarchy-smart controls on fire prevention. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Fire tetrahedron — which leg does a sprinkler remove? Is that prevention?",
  cardBack:
    "Prevention removes fuel/heat/oxidizer/chain reaction before ignition. Sprinklers/alarms/extinguishers are protection. Hot work, bonding, substitution, segregation = prevention. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence names the tetrahedron, distinguishes prevention from protection, and gives one example of taking a leg off before ignition.",
};

export const items: ClassItem[] = [
  exam(T, "Warehouse hangs extra extinguishers beside oxidizers stored against flammables. Best prevention move still open?", [
    "More extinguishers — that is prevention.",
    "Segregate oxidizers from fuels (and substitute/reduce fuel if open); extinguishers are protection.",
    "A louder alarm panel only.",
    "A larger umbrella.",
  ], 1, "HIER: segregation/substitution is prevention; extinguishers are protection.", "HIER", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Fire prevention removes tetrahedron legs before ignition: fuel, heat/ignition, oxidizer, and the uninhibited chain reaction. Housekeeping, substitution of flammables, hot-work control, bonding/grounding, oxidizer segr... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a bridge deck pour laydown yard. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Which is fire prevention rather than protection.", [
    "Wet-pipe sprinklers.",
    "Hot-work permit, 35 ft combustible control, and a fire watch — ignition/fuel control before welding.",
    "A fire wall.",
    "A pull station.",
  ], 1, "Prevention = tetrahedron legs. Sprinklers/walls/pulls are protection.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Fire prevention removes tetrahedron legs before ignition: fuel, heat/ignition, oxidizer, and the uninhibited chain reaction. Housekeeping, substitution of flammables, hot-work control, bonding/grounding, oxidizer segr... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Bonding/grounding during a flammable transfer removes which tetrahedron influence primarily?", [
    "Oxidizer inventory.",
    "Ignition/heat from static discharge — prevention, not a sprinkler.",
    "The need for egress.",
    "The insurance deductible.",
  ], 1, "STEM: bonding is ignition prevention.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Fire prevention removes tetrahedron legs before ignition: fuel, heat/ignition, oxidizer, and the uninhibited chain reaction. Housekeeping, substitution of flammables, hot-work control, bonding/grounding, oxidizer segr... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Last sentence: aqueous substitute was frozen yesterday. Remaining options: oxidizer segregation, or 12 more extinguishers. Best remaining prevention?", [
    "Extinguishers — count is prevention.",
    "Segregate oxidizers (still prevention). Extinguishers remain protection.",
    "Neither — freeze kills prevention.",
    "Raise the deductible.",
  ], 1, "STEM closed substitution; remaining prevention is still a tetrahedron leg.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Fire prevention removes tetrahedron legs before ignition: fuel, heat/ignition, oxidizer, and the uninhibited chain reaction. Housekeeping, substitution of flammables, hot-work control, bonding/grounding, oxidizer segr... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Sprinklers are in service so the hot-work program is retired. Comment?", [
    "Correct — protection equals prevention.",
    "Wrong: sprinklers are protection after ignition; hot work is prevention. Keep both.",
    "Correct if NFPA 13 density is extra.",
    "Correct if the umbrella is extra.",
  ], 1, "TOOL/STEM: prevention vs protection.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Fire prevention removes tetrahedron legs before ignition: fuel, heat/ignition, oxidizer, and the uninhibited chain reaction. Housekeeping, substitution of flammables, hot-work control, bonding/grounding, oxidizer segr... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Flash point listed as 100 in a stem that specified °F. Someone treats it as 100 °C and calls it non-flammable. Error?", [
    "None — 100 is 100.",
    "UNIT: 100 °F is not 100 °C. Use the stem’s unit before classifying fuel.",
    "FORM — they should have used ROI.",
    "PELTLV — they used a TLV.",
  ], 1, "UNIT: °F vs °C on flash point.", "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Fire prevention removes tetrahedron legs before ignition: fuel, heat/ignition, oxidizer, and the uninhibited chain reaction. Housekeeping, substitution of flammables, hot-work control, bonding/grounding, oxidizer segr... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Inerting a vessel with nitrogen to keep O2 below the limiting concentration is primarily?", [
    "Fire protection sprinklers.",
    "Prevention by removing/limiting the oxidizer leg.",
    "Transfer of fire risk.",
    "A BCP RTO tactic only.",
  ], 1, "Prevention: oxidizer leg.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Fire prevention removes tetrahedron legs before ignition: fuel, heat/ignition, oxidizer, and the uninhibited chain reaction. Housekeeping, substitution of flammables, hot-work control, bonding/grounding, oxidizer segr... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Finance skips housekeeping of oily rags because a new alarm panel has a 200% ROI versus brooms. Best call?", [
    "Buy the panel — ROI is prevention.",
    "Housekeeping is prevention of fuel; the panel is detection/protection. Do not skip the open higher/frequency control for a pretty ROI.",
    "Raise the deductible instead.",
    "Call oily rags “protection.”",
  ], 1, "FIN/HIER: ROI of detection does not replace prevention.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Fire prevention removes tetrahedron legs before ignition: fuel, heat/ignition, oxidizer, and the uninhibited chain reaction. Housekeeping, substitution of flammables, hot-work control, bonding/grounding, oxidizer segr... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A fatality in a flash fire. Team delays OSHA to rewrite the hot-work permit. Clock?", [
    "Permits pause 1904.",
    "Fatality: 8 hours to OSHA. Prevention paperwork is not the clock.",
    "24 hours because it was fire.",
    "7 days.",
  ], 1, "TIME: 8-hour fatality notification.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Fire prevention removes tetrahedron legs before ignition: fuel, heat/ignition, oxidizer, and the uninhibited chain reaction. Housekeeping, substitution of flammables, hot-work control, bonding/grounding, oxidizer segr... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Wrong tool: FMEA RPN on “operator fails to grab extinguisher” as the fire-prevention program while substitution is open. Comment?", [
    "Accept — RPN is tetrahedron.",
    "TOOL/HIER: that RPN is protection/PPE behavior. Prevention is still the open substitute.",
    "Accept if RPN < 100.",
    "Accept if ICS Logistics owns extinguishers.",
  ], 1, "TOOL: FMEA of grab-the-can is not prevention.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Fire prevention removes tetrahedron legs before ignition: fuel, heat/ignition, oxidizer, and the uninhibited chain reaction. Housekeeping, substitution of flammables, hot-work control, bonding/grounding, oxidizer segr... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Chain-reaction inhibitors (certain clean agents) act on which tetrahedron leg?", [
    "Only the insurance leg.",
    "The chemical chain reaction — classify as agent chemistry; stocking the bottles is still protection hardware unless the process is inherently inhibited.",
    "Only the fuel inventory on the SDS.",
    "Only RTO.",
  ], 1, "STEM: fourth leg exists; hardware is still mostly protection.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Fire prevention removes tetrahedron legs before ignition: fuel, heat/ignition, oxidizer, and the uninhibited chain reaction. Housekeeping, substitution of flammables, hot-work control, bonding/grounding, oxidizer segr... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Two moves in one packet: extra umbrella (transfer) AND extra extinguishers (protection), fuel/oxidizer still mixed. Missing?", [
    "Nothing — two strategies complete fire safety.",
    "Prevention (segregate/substitute/hot-work). Transfer + protection-without-prevention leaves the tetrahedron assembled.",
    "A third policy.",
    "A higher RPN.",
  ], 1, "FIN: financing + protection still miss prevention.", "FIN", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "Emergency planning, ICS, NFPA fire protection public concepts",
      fieldTakeaway: "Fire prevention removes tetrahedron legs before ignition: fuel, heat/ignition, oxidizer, and the uninhibited chain reaction. Housekeeping, substitution of flammables, hot-work control, bonding/grounding, oxidizer segr... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
