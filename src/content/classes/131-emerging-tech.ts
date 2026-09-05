import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D1.07";

export const classFields: ClassFields = {
  hook: "A plant wants an autonomous mobile robot in an aisle that still has pedestrians. Vendors sell AI cameras as the control.",
  hookOilGas: "A pad wants a remotely operated vehicle near live process. Vendors sell AI cameras as the control.",
  hookConstruction: "A site wants a layout robot near an open edge. Vendors sell AI cameras as the control.",
  rule: "Robot and AI monitoring do not retire hierarchy. Separate people from the machine first. ANSI/RIA R15.08 and ISO/TS 15066 describe collaborative limits; they do not make detection equal to a guard or speed-and-separation design.",
  modelCaption: "People zone | speed-and-separation or collaborative power-and-force | then detection. AI watch is the last row if the energy is still open.",
  workedCase:
    "(1) Can the AMR stay out of the pedestrian aisle? (2) If not, speed-and-separation or a physical barrier. (3) Power-and-force limits only inside a designed collaborative workspace. (4) Cameras and AI alerts are detection, not the first layer.",
  trapsJson: traps("Calling an AI camera substitution.", "Treating R15.08 as a license to skip barriers.", "Power-and-force limits in an undesigned aisle."),
  contrastJson: contrast([
    { looksLike: "AI camera watching the aisle", actually: "Detection / admin unless it stops energy" },
    { looksLike: "Reroute the AMR", actually: "Elimination / substitution of the conflict" },
    { looksLike: "Speed-and-separation", actually: "Engineering in R15.08" },
    { looksLike: "Toolbox on robot etiquette", actually: "Administrative" },
  ]),
  mustScoreJson: mustScore(
    "Hierarchy still ranks robot controls.",
    "R15.08 / TS 15066 are design limits, not a camera program.",
    "Collaborative power-and-force needs a defined workspace.",
    "Detection is not isolation.",
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "the aisle still mixes people and AMRs", pick: "separate paths or speed-and-separation" },
    { ifStem: "vendor offers only AI alerts", pick: "reject as the first control" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
  ),
  brief: "Robots and AI watchers still sit on the hierarchy. Separate people from energy first. Standards name limits; they do not replace guards.",
  standard: "Rule\nAutonomous and collaborative robots are machines with stored energy. R15.08 and ISO/TS 15066 describe speed-and-separation and power-and-force. They do not make an AI camera a substitute for layout.\n\nField move\nIf pedestrians and AMRs share an aisle, move one population. Then engineer the remaining conflict. Training is last.",
  deep: "Robotics safety is applied D1: energy, people, layout. AI monitoring is a sensor. A sensor that does not stop the machine is not a layer. Collaborative mode is not a hallway.",
  cardFront: "AI camera on an AMR aisle",
  cardBack: "Detection. Separate paths or speed-and-separation first.",
  teachBackKey: "Name the open energy. Then name the highest row still available.",
};

export const items: ClassItem[] = [
  exam(T, "An AMR vendor offers only aisle cameras and a dashboard. Pedestrians still walk the same path. First control?", ["Install more cameras", "Retrain pedestrians", "Reroute people or the AMR", "Raise the dashboard refresh rate"], 2, "Separate the conflict. Cameras detect.", "HIER"),
  exam(T, "ISO/TS 15066 power-and-force limits apply when?", ["Any hallway with a robot", "A designed collaborative workspace", "After the first near miss", "When insurance is in force"], 1, "Collaborative limits need a defined workspace.", "STEM"),
  exam(T, "R15.08 speed-and-separation is closest to?", ["Administrative rotation", "Engineering that keeps distance or slows the machine", "PPE for the programmer", "AI labeling"], 1, "It is an engineered motion strategy.", "HIER"),
  exam(T, "An AI model flags 'unsafe posture' but the unguarded press still runs. The flag is?", ["Elimination", "Substitution", "Detection without stopping energy", "PtD complete"], 2, "A label is not a layer.", "HIER"),
  exam(T, "Best first question on a cobot cell review?", ["Which camera brand?", "Can the task be done with no person in reach?", "How many observations per hour?", "What is the EMR?"], 1, "Remove the person from reach first.", "HIER"),
  exam(T, "A collaborative robot is placed in an open fabrication bay with no scanned workspace. Risk?", ["Acceptable under TS 15066 by default", "Power-and-force claims without a designed space", "Solved by a poster", "Solved by EMR transfer"], 1, "Collaborative mode is not a bay-wide license.", "STEM"),
  exam(T, "Remote operation of a process robot. The operator cannot see a trapped worker. Missing layer?", ["Faster 5G", "Line-of-sight or interlocked presence at the energy", "A nicer HMI theme", "More AI frames"], 1, "Presence and isolation beat telemetry polish.", "HIER"),
  exam(T, "Machine learning predicts tomorrow's near misses. That metric is?", ["A leading analytic if it changes a control", "A substitute for guarding", "A lagging rate", "An OSHA PEL"], 0, "Prediction is leading only if someone acts.", "TOOL"),
  exam(T, "Two answers: AI alert vs physical fence at an AMR crossing. Pick?", ["AI alert", "Fence or separate path", "Both equal", "Insurance"], 1, "Higher remaining row.", "HIER"),
  exam(T, "Firmware update changes robot speed. This is?", ["Housekeeping", "Management of change on a control layer", "A training-only event", "An EMR issue"], 1, "Speed is a safety parameter. MoC it.", "STEM"),
  exam(T, "Why not treat facial recognition PPE compliance as the cell control?", ["It is substitution", "It watches people, not energy", "It eliminates the press", "It is PtD"], 1, "Watching faces is admin/detection.", "HIER"),
  exam(T, "Last sentence: drawings are frozen, aisle cannot move. Next?", ["Give up", "Engineer speed-and-separation or barriers in the remaining space", "Only a poster", "Only EMR"], 1, "Highest remaining engineered row.", "HIER"),
];
