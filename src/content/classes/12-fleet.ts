import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D1.05";

export const classFields: ClassFields = {
  hook: "Ten new box trucks. Fleet wants cheaper units without automatic emergency braking or speed limiters and will “train harder.” You are the CSP on the spec. The question is whether the vehicle itself should be able to stop.",
  hookOilGas: `Ten new field trucks. Fleet wants cheaper units without automatic emergency braking or speed limiters and will âtrain harder.â You are the CSP on the spec. The question is whether the vehicle itself should be able to stop.`,
  hookConstruction: `Ten new crew trucks. Fleet wants cheaper units without automatic emergency braking or speed limiters and will âtrain harder.â You are the CSP on the spec. The question is whether the vehicle itself should be able to stop.`,
  rule: "Specify the vehicle (AEB, speed limiter, cameras, restraints, underride, blind-spot engineering) then journey management, then driver qualification. Training does not replace a vehicle that cannot stop. Telematics is monitoring, not vehicle design.",
  modelCaption:
    "Three stacked bars: Vehicle spec (engineering on the asset) → Journey / dispatch rules (admin) → Driver qualification and coaching (admin/PPE-adjacent). Caption: a defensive-driving course is not automatic braking; telematics watches the crash that AEB might have prevented.",
  workedCase:
    "Ten box trucks. (1) Spec AEB, limiter, camera/sensors, three-point belts, no phone in motion (hardware blocker if needed). (2) Journey management: night, weather, fatigue. (3) Then hire, train, coach with telematics. “Train harder on a cheaper truck” loses while the purchase order is still open.",
  trapsJson: traps(
    "Calling a defensive-driving day a substitute for AEB on a new spec.",
    "Telematics as “engineering” when it only records.",
    "Ignoring fatigue as a design of the schedule, not a character flaw.",
  ),
  contrastJson: contrast([
    { looksLike: "Defensive-driving blitz", actually: "Administrative" },
    { looksLike: "AEB and speed limiter on the spec", actually: "Engineering on the vehicle" },
    { looksLike: "Telematics coaching", actually: "Monitoring / admin after the fact" },
    { looksLike: "Phone policy without a blocker", actually: "Admin around a still-usable device" },
  ]),
  mustScoreJson: mustScore(
    "Specify vehicle engineering when purchase is open.",
    "Separate vulnerable road users by design where the site still allows it.",
    "Journey management and fatigue controls are administrative after engineering.",
    "Telematics supports behavior change; it does not replace vehicle spec.",
    "Maintenance of brakes, tires, and lights is a safety system.",
    "Driver qualification matches the vehicle and route risk.",
    "High-visibility clothing loses to site layout that removes pedestrian conflict.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "the purchase order is still open", pick: "specify collision avoidance and other engineering features" },
    { ifStem: "pedestrians share a yard with trucks", pick: "redesign segregation before vests alone" },
    { ifStem: "only a toolbox talk is proposed after a struck-by", pick: "fix layout/vehicle controls first" },
    { ifStem: "fatigue is in the last sentence", pick: "journey limits and staffing \u2014 not another poster" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
  ),

  brief: `Specify the vehicle (AEB, speed limiter, cameras, restraints, underride, blind-spot engineering) then journey management, then driver qualification. Training does not replace a vehicle that cannot stop. Telematics is monitoring, not vehicle design. If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Specify the vehicle (AEB, speed limiter, cameras, restraints, underride, blind-spot engineering) then journey management, then driver qualification. Training does not replace a vehicle that cannot stop. Telematics is monitoring, not vehicle design. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
Ten new box trucks. Fleet wants cheaper units without automatic emergency braking or speed limiters and will âtrain harder.â You are the CSP on the spec. The question is whether the vehicle itself should be able to stop. Oil-and-gas skin: Ten new field trucks. Construction skin: Ten new crew trucks. Work the case: Ten box trucks. (1) Spec AEB, limiter, camera/sensors, three-point belts, no phone in motion (hardware blocker if needed). (2) Journey management: night, weather, fatigue. (3) Then hire, train, coach with telematics. âTrain harder on a cheaper truckâ loses while the purchase order is still open. Classic traps: Calling a defensive-driving day a substitute for AEB on a new spec.; Telematics as “engineering” when it only records.; Ignoring fatigue as a design of the schedule, not a character flaw.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for fleet. Verify whether a higher system or design fix is still open. Contrast labels: Defensive-driving blitz is actually Administrative; AEB and speed limiter on the spec is actually Engineering on the vehicle; Telematics coaching is actually Monitoring / admin after the fact; Phone policy without a blocker is actually Admin around a still-usable device. If the stem shows the purchase order is still open, pick specify collision avoidance and other engineering features. If the stem shows pedestrians share a yard with trucks, pick redesign segregation before vests alone. If the stem shows only a toolbox talk is proposed after a struck-by, pick fix layout/vehicle controls first. If the stem shows fatigue is in the last sentence, pick journey limits and staffing \u2014 not another poster. If the stem shows two answers work, pick higher hierarchy / system / design. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Fleet — can the truck stop without a hero sits in CSP-11 Domain 1 Applied Safety Technology. The exam tests whether you apply the rule when a package already looks complete. Core rule: Specify the vehicle (AEB, speed limiter, cameras, restraints, underride, blind-spot engineering) then journey management, then driver qualification. Training does not replace a vehicle that cannot stop. Telematics is monitoring, not vehicle design. Field context: Ten new box trucks. Fleet wants cheaper units without automatic emergency braking or speed limiters and will âtrain harder.â You are the CSP on the spec. The question is whether the vehicle itself should be able to stop. The oil-and-gas skin shifts the same decision into production pressure: Ten new field trucks. The construction skin shifts it into schedule and trade stacking: Ten new crew trucks. Model caption for this class: Three stacked bars: Vehicle spec (engineering on the asset) â Journey / dispatch rules (admin) â Driver qualification and coaching (admin/PPE-adjacent). Caption: a defensive-driving course is not automatic braking; telematics watches the crash that AEB might have prevented. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Specify vehicle engineering when purchase is open. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Separate vulnerable road users by design where the site still allows it. (3) Journey management and fatigue controls are administrative after engineering. (4) Telematics supports behavior change; it does not replace vehicle spec. (5) Maintenance of brakes, tires, and lights is a safety system. (6) Driver qualification matches the vehicle and route risk. (7) High-visibility clothing loses to site layout that removes pedestrian conflict. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Ten box trucks. (1) Spec AEB, limiter, camera/sensors, three-point belts, no phone in motion (hardware blocker if needed). (2) Journey management: night, weather, fatigue. (3) Then hire, train, coach with telematics. âTrain harder on a cheaper truckâ loses while the purchase order is still open. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Calling a defensive-driving day a substitute for AEB on a new spec.; Telematics as “engineering” when it only records.; Ignoring fatigue as a design of the schedule, not a character flaw.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Defensive-driving blitz” is really Administrative; “AEB and speed limiter on the spec” is really Engineering on the vehicle; “Telematics coaching” is really Monitoring / admin after the fact; “Phone policy without a blocker” is really Admin around a still-usable device. Stem-if-then map: if the purchase order is still open → specify collision avoidance and other engineering features; if pedestrians share a yard with trucks → redesign segregation before vests alone; if only a toolbox talk is proposed after a struck-by → fix layout/vehicle controls first; if fatigue is in the last sentence → journey limits and staffing \u2014 not another poster; if two answers work → higher hierarchy / system / design. Scoring favors evidence, owners, verification, and hierarchy-smart controls on fleet. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Fleet — can the truck stop without a hero?",
  cardBack:
    "Spec the vehicle, then the journey, then the driver. Attractive wrong answer: train harder on a cheaper truck. Telematics watches; AEB acts. Study only — not allowed in the test center.",
  teachBackKey:
    "Pass if the sentence includes vehicle specification (AEB/limiter) before training, and names telematics as monitoring not engineering.",
};

export const items: ClassItem[] = [
  exam(T, "Ten new box trucks. Fleet wants the cheap spec without AEB or speed limiters and will add a defensive-driving day. Best CSP recommendation?", [
    "Approve cheap spec plus training — training is equivalent to AEB.",
    "Specify AEB and limiters on the purchase; training remains but does not replace the hardware.",
    "Telematics only.",
    "Insurance only.",
  ], 1, "The PO is still open. Vehicle engineering beats a class.", "HIER", "Foundation",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "OSHA powered industrial trucks / fleet safety practice",
      fieldTakeaway: "Specify the vehicle (AEB, speed limiter, cameras, restraints, underride, blind-spot engineering) then journey management, then driver qualification. Training does not replace a vehicle that cannot stop. Telematics is... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Telematics vendor calls their coaching dashboard an “engineering control.” Best CSP comment?", [
    "Agree — data is engineering.",
    "Disagree: telematics is monitoring/admin. It can support coaching but it does not brake the truck.",
    "Agree if the dashboard is yellow.",
    "Replace AEB with the dashboard.",
  ], 1, "Labels do not climb the hierarchy. Monitoring is not AEB.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "OSHA powered industrial trucks / fleet safety practice",
      fieldTakeaway: "Specify the vehicle (AEB, speed limiter, cameras, restraints, underride, blind-spot engineering) then journey management, then driver qualification. Training does not replace a vehicle that cannot stop. Telematics is... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Drivers use phones in motion. Policy already exists. Spec can still include a blocker that disables handheld use above 5 mph. Best control?", [
    "Rewrite the policy in a larger font.",
    "Specify the blocker (and the policy); a poster does not lock the device.",
    "Fire the next person caught, only.",
    "Add a sticker on the dash.",
  ], 1, "Hardware on the vehicle beats another policy.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "OSHA powered industrial trucks / fleet safety practice",
      fieldTakeaway: "Specify the vehicle (AEB, speed limiter, cameras, restraints, underride, blind-spot engineering) then journey management, then driver qualification. Training does not replace a vehicle that cannot stop. Telematics is... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Stem last sentence: “Units are already delivered without AEB; only software and policy remain.” Best remaining package?", [
    "Declare the hierarchy closed.",
    "Speed-limiter/camera retrofit if available, journey management, fatigue rules, telematics coaching — highest remaining rows; do not pretend a video is AEB.",
    "A nicer training video only.",
    "Cancel insurance.",
  ], 1, "Last sentence closed OEM AEB. Remaining system/design still beats video-only.", "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "OSHA powered industrial trucks / fleet safety practice",
      fieldTakeaway: "Specify the vehicle (AEB, speed limiter, cameras, restraints, underride, blind-spot engineering) then journey management, then driver qualification. Training does not replace a vehicle that cannot stop. Telematics is... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A driver is scheduled for 14 hours behind the wheel. A supervisor says injury reporting is an 8-hour clock so the trip is “half a report.” Best CSP action?", [
    "Allow the trip — 8-hour reporting makes 14 hours legal.",
    "Separate TIME from fatigue: do not dispatch beyond the hours/fatigue constraint in the stem; 8 vs 24 h reporting is not a driving limit.",
    "Wait 24 hours to dispatch.",
    "Wait 8 hours to dispatch.",
  ], 1, "TIME code distractor. Fatigue/hours are the control.", "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "OSHA powered industrial trucks / fleet safety practice",
      fieldTakeaway: "Specify the vehicle (AEB, speed limiter, cameras, restraints, underride, blind-spot engineering) then journey management, then driver qualification. Training does not replace a vehicle that cannot stop. Telematics is... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Site mix of trucks and pedestrians at the gate. Fleet wants backup alarms only. Layout can add a separated in/out and a defined walkway. Best control?", [
    "Alarms as primary.",
    "Separate the paths in layout; alarms/cameras supplement.",
    "Vests only.",
    "Faster trucks to reduce time at the gate.",
  ], 1, "Struck-by at the gate is design of the path.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "OSHA powered industrial trucks / fleet safety practice",
      fieldTakeaway: "Specify the vehicle (AEB, speed limiter, cameras, restraints, underride, blind-spot engineering) then journey management, then driver qualification. Training does not replace a vehicle that cannot stop. Telematics is... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Cargo can slide forward into the cab. Spec is still open. Best control?", [
    "Tell drivers to brake gently.",
    "Specify a bulkhead/load barrier and securement points on the vehicle.",
    "A poster on sudden stops.",
    "Hope for ABS only.",
  ], 1, "Struck-by from cargo is vehicle design.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "OSHA powered industrial trucks / fleet safety practice",
      fieldTakeaway: "Specify the vehicle (AEB, speed limiter, cameras, restraints, underride, blind-spot engineering) then journey management, then driver qualification. Training does not replace a vehicle that cannot stop. Telematics is... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Finance prefers a lower premium (good-driver discount) instead of AEB on the spec. Best position?", [
    "The discount is equivalent engineering.",
    "Reject the swap: a premium is FIN, not braking. Specify AEB.",
    "Raise deductibles and skip AEB.",
    "Call the discount a leading vehicle spec.",
  ], 1, "Insurance pricing is not a brake.", "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "OSHA powered industrial trucks / fleet safety practice",
      fieldTakeaway: "Specify the vehicle (AEB, speed limiter, cameras, restraints, underride, blind-spot engineering) then journey management, then driver qualification. Training does not replace a vehicle that cannot stop. Telematics is... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a food packaging SKU change. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Which analysis belongs before the trucks are ordered.", [
    "FTA after the first fatality.",
    "Spec review: crashworthiness, AEB, limiter, cameras, restraints, and the actual routes, written into the bid.",
    "FMEA on trainer charisma.",
    "Observation of speeding after delivery only.",
  ], 1, "The review must still change the purchase.", "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "OSHA powered industrial trucks / fleet safety practice",
      fieldTakeaway: "Specify the vehicle (AEB, speed limiter, cameras, restraints, underride, blind-spot engineering) then journey management, then driver qualification. Training does not replace a vehicle that cannot stop. Telematics is... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "A contractor fleet will enter the plant. Host wants only a video. Best system control?", [
    "Video is enough for all visiting trucks.",
    "Host vehicle/pedestrian rules plus minimum vehicle spec (lights, alarms, restraints) as a condition of entry; video is extra.",
    "Hope.",
    "Insurance certificates instead of brakes.",
  ], 1, "Other-employer fleet still needs hardware and rules, not only a video.", "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "OSHA powered industrial trucks / fleet safety practice",
      fieldTakeaway: "Specify the vehicle (AEB, speed limiter, cameras, restraints, underride, blind-spot engineering) then journey management, then driver qualification. Training does not replace a vehicle that cannot stop. Telematics is... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "Speed limiter set to 65 mph. A drawing from a SI vendor lists 65 km/h as “the same 65.” Best flag?", [
    "65 is 65.",
    "65 km/h is about 40 mph — UNIT error. Set the limiter in the unit the policy means.",
    "65 mm/h.",
    "Use RAD to convert.",
  ], 1, "UNIT: mph vs km/h on the limiter.", "UNIT",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "OSHA powered industrial trucks / fleet safety practice",
      fieldTakeaway: "Specify the vehicle (AEB, speed limiter, cameras, restraints, underride, blind-spot engineering) then journey management, then driver qualification. Training does not replace a vehicle that cannot stop. Telematics is... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(T, "You are the CSP reviewing a live decision at a municipal water-plant retrofit. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Least consistent with fleet hierarchy.", [
    "AEB on the spec.",
    "Journey cancellation in severe weather.",
    "A laminated “drive safe” card after three preventable crashes, with no spec or schedule change.",
    "Fatigue rules that actually cap dispatch.",
  ], 2, "A poster after crashes is not a vehicle.", "HIER", "Expert",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "OSHA powered industrial trucks / fleet safety practice",
      fieldTakeaway: "Specify the vehicle (AEB, speed limiter, cameras, restraints, underride, blind-spot engineering) then journey management, then driver qualification. Training does not replace a vehicle that cannot stop. Telematics is... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];
