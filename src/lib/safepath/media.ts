import { CATALOG } from "@/lib/safepath/catalog";

export type LessonMedia = {
  still: string;
  video?: string;
  modelStill?: string;
  caption: string;
};

const DEFAULT: LessonMedia = {
  still: "/lessons/hero-control-room.jpg",
  video: "/lessons/hierarchy.mp4",
  caption: "Walk the control from the source, not from the paperwork.",
};

const LIBRARY: Record<string, LessonMedia> = {
  hierarchy: { still: "/lessons/hierarchy.jpg", video: "/lessons/hierarchy.mp4", caption: "Highest remaining row wins. A polished lower row is the trap." },
  ptd: { still: "/lessons/c01.jpg", video: "/lessons/c01.mp4", caption: "Move the work to grade while the drawing is still open." },
  loto: { still: "/lessons/loto.jpg", video: "/lessons/loto.mp4", caption: "Isolation is hardware plus verification, not a tag on a running circuit." },
  confined: { still: "/lessons/confined.jpg", video: "/lessons/confined.mp4", caption: "Atmosphere, attendant, and retrieval before anyone crosses the plane." },
  ventilation: { still: "/lessons/ventilation.jpg", video: "/lessons/ventilation.mp4", caption: "Capture at the source. Dilution is a different equation." },
  electrical: { still: "/lessons/electrical.jpg", video: "/lessons/electrical.mp4", caption: "Treat the circuit as live until the try-out proves otherwise." },
  falls: { still: "/lessons/falls.jpg", video: "/lessons/falls.mp4", caption: "Anchor, connector, and harness are a system. One weak link is a fall." },
  excavation: { still: "/lessons/excavation.jpg", video: "/lessons/excavation.mp4", caption: "Slope, shore, or shield before anyone stands in the cut." },
  crane: { still: "/lessons/crane.jpg", video: "/lessons/crane.mp4", caption: "The load path and the exclusion zone are the control. A horn is not." },
  fire: { still: "/lessons/fire.jpg", video: "/lessons/fire.mp4", caption: "Prevention removes a face of the tetrahedron. Protection answers after ignition." },
  ics: { still: "/lessons/ics.jpg", video: "/lessons/ics.mp4", caption: "One incident commander. Span of control 3–7. Objectives before tactics." },
  ih: { still: "/lessons/ih.jpg", video: "/lessons/noise.mp4", caption: "A number without a decision is decoration. Match the method to the question." },
  ghs: { still: "/lessons/ghs.jpg", video: "/lessons/ghs.mp4", caption: "Classify, label, segregate. A pretty pictogram is not containment." },
  dust: { still: "/lessons/dust.jpg", video: "/lessons/ventilation.mp4", caption: "Design dust out of the air. Housekeeping is a lag." },
  fleet: { still: "/lessons/fleet.jpg", video: "/lessons/fleet.mp4", caption: "Separate people from steel. Mirrors do not replace layout." },
  investigation: { still: "/lessons/investigation.jpg", video: "/lessons/investigation.mp4", caption: "Failed and missing controls first. The last unsafe act is last." },
  ergo: { still: "/lessons/ergo.jpg", video: "/lessons/ergo.mp4", caption: "A zero multiplier collapses RWL. Training is not the first lift control." },
  training: { still: "/lessons/training.jpg", video: "/lessons/training.mp4", caption: "A class roster is not competence. Design the evaluation first." },
  psm: { still: "/lessons/psm.jpg", video: "/lessons/psm.mp4", caption: "Independent layers beat detection. A worksheet is not the layer." },
  noise: { still: "/lessons/noise.jpg", video: "/lessons/noise.mp4", caption: "OSHA 90/5. NIOSH 85/3. Do not mix tables." },
  leadership: { still: "/lessons/leadership.jpg", video: "/lessons/training.mp4", caption: "One Accountable name. Two means none." },
  waste: { still: "/lessons/waste.jpg", video: "/lessons/waste.mp4", caption: "Characterize, contain, label. A drum in the rain is already a design choice." },
  exam: { still: "/lessons/exam.jpg", video: "/lessons/training.mp4", caption: "Closed book. Closest listed value. DEG not RAD." },
  water: { still: "/lessons/water.jpg", video: "/lessons/water.mp4", caption: "Rescue plan before the plane of the opening. A life ring is not the program." },
  radiation: { still: "/lessons/radiation.jpg", video: "/lessons/radiation.mp4", caption: "Time, distance, shielding. A badge is not the control." },
  muster: { still: "/lessons/muster.jpg", video: "/lessons/ics.mp4", caption: "Accountability at the point. A siren without a headcount is theater." },
  heat: { still: "/lessons/heat.jpg", video: "/lessons/ergo.mp4", caption: "WBGT and work-rest first. A hydration poster is not HVAC." },
  sms: { still: "/lessons/sms.jpg", video: "/lessons/psm.mp4", caption: "Plan, do, check, act. A framed certificate is not Check." },
  finance: { still: "/lessons/finance.jpg", video: "/lessons/investigation.mp4", caption: "Avoid, reduce, retain, transfer. Insurance is not a hierarchy row." },
  machine: { still: "/lessons/machine.jpg", video: "/lessons/machine.mp4", caption: "Guard the point of operation. A sleeve is not a fixed barrier." },
  stats: { still: "/lessons/stats.jpg", video: "/lessons/investigation.mp4", caption: "A chart is not a control. Name the decision the number will change." },
  classroom: { still: "/lessons/classroom.jpg", video: "/lessons/training.mp4", caption: "A class is not competence. Design the evaluation before the slide deck." },
  pha: { still: "/lessons/pha.jpg", video: "/lessons/psm.mp4", caption: "Name the deviation. Then the control. A worksheet is not the layer." },
  jha: { still: "/lessons/jha.jpg", video: "/lessons/jha.mp4", caption: "Task, hazard, control. If the last step is still PPE, walk the pyramid again." },
  hazmat: { still: "/lessons/hazmat.jpg", video: "/lessons/waste.mp4", caption: "Classify, segregate, and route. A placard is not containment." },
  bio: { still: "/lessons/bio.jpg", video: "/lessons/waste.mp4", caption: "Containment first. A protocol is not a cabinet." },
  culture: { still: "/lessons/culture.jpg", video: "/lessons/culture.mp4", caption: "What gets stopped on the floor is the culture. A slogan is not." },
  capa: { still: "/lessons/capa.jpg", video: "/lessons/investigation.mp4", caption: "An owner, a date, and a verified control. A ticket is not the close." },
  hotwork: { still: "/lessons/hotwork.jpg", video: "/lessons/hotwork.mp4", caption: "Permit, fire watch, and a clear 35 feet. A sticker is not the watch." },
  silica: { still: "/lessons/silica.jpg", video: "/lessons/ventilation.mp4", caption: "Wet, enclose, and exhaust. A dust mask is not the table." },
  pit: { still: "/lessons/pit.jpg", video: "/lessons/pit.mp4", caption: "Capacity plate and travel surface first. A horn is not the layout." },
  aerial: { still: "/lessons/aerial.jpg", video: "/lessons/falls.mp4", caption: "Rated platform on the wrong surface is still a fall and a struck-by." },
  drone: { still: "/lessons/drone.jpg", video: "/lessons/drone.mp4", caption: "A drone removes a climber. It does not remove the energy on the unit." },
  caught: { still: "/lessons/caught.jpg", video: "/lessons/caught.mp4", caption: "Guard the nip. A spotter is not a barrier." },
  records: { still: "/lessons/records.jpg", video: "/lessons/investigation.mp4", caption: "Minimum retain. Controlled access. Destroy on time." },
  egress: { still: "/lessons/egress.jpg", video: "/lessons/egress.mp4", caption: "Width, travel, and remoteness. A prettier horn is not occupant load." },
  gap: { still: "/lessons/gap.jpg", video: "/lessons/psm.mp4", caption: "Requirement versus current state. Count of findings is not the rank." },
  leading: { still: "/lessons/leading.jpg", video: "/lessons/investigation.mp4", caption: "A leading metric without an owner is a poster." },
  hero: DEFAULT,
};

function keyFromTitle(title: string, domain: number): keyof typeof LIBRARY {
  const t = title.toLowerCase();
  if (/ptd|prevention through/.test(t)) return "ptd";
  if (/hierarch/.test(t)) return "hierarchy";
  if (/loto|lockout|energy control/.test(t)) return "loto";
  if (/caught|struck|pinch/.test(t)) return "caught";
  if (/electrical|arc/.test(t)) return "electrical";
  if (/fall/.test(t)) return "falls";
  if (/excav|trench/.test(t)) return "excavation";
  if (/water\b|drown|rescue|sump/.test(t)) return "water";
  if (/radiat|ioniz|laser/.test(t)) return "radiation";
  if (/pit|forklift/.test(t)) return "pit";
  if (/aerial|boom|scissor/.test(t)) return "aerial";
  if (/drone/.test(t)) return "drone";
  if (/egress|occupant|life safety/.test(t)) return "egress";
  if (/gap analysis/.test(t)) return "gap";
  if (/leading|lagging|benchmark/.test(t)) return "leading";
  if (/retention|privacy|1904/.test(t)) return "records";
  if (/muster|evacuat|drill|workplace violence/.test(t)) return "muster";
  if (/heat|cold|iaq|thermal/.test(t)) return "heat";
  if (/iso 45001|z10|iso 14001|iso 19011|vpp|standard|plan|policy|culture|leader|raci|ethics/.test(t)) return "sms";
  if (/budget|roi|financial|cost|econ|trir|dart|emr|insurance/.test(t)) return "finance";
  if (/machine|guard|robot|tool|press/.test(t)) return "machine";
  if (/stats|descriptive|pareto|probability|ci |epidemi/.test(t)) return "stats";
  if (/crane|rigg/.test(t)) return "crane";
  if (/confined/.test(t)) return "confined";
  if (/fleet|vehicle/.test(t)) return "fleet";
  if (/fire|hot work|hydraul/.test(t)) return "fire";
  if (/ics|erp|bcp|cyber/.test(t)) return "ics";
  if (/ghs|sds|silica|chemical|hazmat/.test(t)) return "ghs";
  if (/waste|spill|spcc|rcra|epcra|sustain|esg|asbestos|p2/.test(t)) return "waste";
  if (/dust/.test(t)) return "dust";
  if (/ventila|containment|capture|dilution/.test(t)) return "ventilation";
  if (/noise/.test(t)) return "noise";
  if (/ergo|niosh|manual|rnle/.test(t)) return "ergo";
  if (/sample|ih |industrial hygiene|toxic|bio|pel|tlv|exposure/.test(t)) return "ih";
  if (/investig|fta|fmea|capa|mort|barrier|5-why|eta/.test(t)) return "investigation";
  if (/psm|process safety|moc|pssr/.test(t)) return "psm";
  if (/train|adult|kirkpatrick|z490|needs assess|competenc|delivery|teach/.test(t)) return "training";
  if (/exam|calculator|pacing|formula gym|physics/.test(t)) return "exam";
  const byDomain: Record<number, keyof typeof LIBRARY> = {
    1: "hierarchy",
    2: "investigation",
    3: "finance",
    4: "ics",
    5: "waste",
    6: "ih",
    7: "training",
  };
  return byDomain[domain] ?? "hero";
}

const BY_ID: Record<number, keyof typeof LIBRARY> = {
  1: "ptd", 2: "hierarchy", 3: "psm", 4: "electrical", 5: "loto",
  6: "falls", 7: "excavation", 8: "caught", 9: "confined", 10: "water",
  11: "egress", 12: "fleet", 13: "pit", 14: "crane", 15: "drone", 16: "machine",
  17: "gap", 18: "sms", 19: "culture", 20: "investigation", 21: "capa",
  22: "psm", 23: "investigation", 24: "pha", 25: "psm", 26: "leading",
  27: "sms", 28: "sms", 29: "waste", 30: "gap", 31: "sms", 32: "records",
  33: "finance", 34: "leadership", 35: "leadership", 36: "stats", 37: "stats", 38: "leading",
  39: "jha", 40: "jha", 41: "pha", 42: "hierarchy", 43: "gap", 44: "finance",
  45: "finance", 46: "leading",
  47: "ics", 48: "ics", 49: "muster", 50: "hotwork", 51: "fire", 52: "hazmat",
  53: "culture", 54: "muster",
  55: "waste", 56: "ghs", 57: "waste", 58: "waste", 59: "leading", 60: "silica",
  61: "ih", 62: "ih", 63: "silica", 64: "noise", 65: "radiation", 66: "heat",
  67: "bio", 68: "ih", 69: "ih", 70: "ergo", 71: "ventilation", 72: "exam",
  73: "classroom", 74: "classroom", 75: "training", 76: "training", 77: "classroom", 78: "training",
  79: "machine", 80: "dust", 81: "ventilation", 82: "hotwork", 83: "noise", 84: "ih",
  85: "records", 86: "investigation", 87: "psm", 88: "ics", 89: "classroom", 90: "exam",
  91: "machine", 92: "stats", 93: "electrical", 94: "psm", 95: "fire",
  96: "leadership", 97: "leading", 98: "finance", 99: "bio", 100: "classroom",
  101: "ventilation", 102: "egress", 103: "fire", 104: "caught", 105: "investigation",
  106: "finance", 107: "waste", 108: "hotwork", 109: "ergo", 110: "machine",
  111: "waste", 112: "sms", 113: "investigation", 114: "aerial", 115: "ics",
  116: "hierarchy", 117: "loto", 118: "psm", 119: "investigation", 120: "investigation",
  121: "finance", 122: "fire", 123: "waste", 124: "ventilation", 125: "noise",
  126: "ergo", 127: "classroom", 128: "classroom", 129: "leadership", 130: "exam",
};

const STILL_OVERRIDE: Record<number, string> = {
  1: "/lessons/c01.jpg",
  2: "/lessons/hierarchy.jpg",
  3: "/lessons/psm.jpg",
  4: "/lessons/electrical.jpg",
  5: "/lessons/loto.jpg",
  6: "/lessons/falls.jpg",
  7: "/lessons/excavation.jpg",
  8: "/lessons/caught.jpg",
  9: "/lessons/confined.jpg",
  10: "/lessons/water.jpg",
  11: "/lessons/egress.jpg",
  12: "/lessons/fleet.jpg",
  13: "/lessons/pit.jpg",
  14: "/lessons/crane.jpg",
  15: "/lessons/drone.jpg",
  16: "/lessons/machine.jpg",
  17: "/lessons/gap.jpg",
  18: "/lessons/sms.jpg",
  19: "/lessons/culture.jpg",
  20: "/lessons/investigation.jpg",
  21: "/lessons/capa.jpg",
  22: "/lessons/c22b.jpg",
  23: "/lessons/c23.jpg",
  24: "/lessons/pha.jpg",
  25: "/lessons/psm.jpg",
  26: "/lessons/leading.jpg",
  27: "/lessons/sms.jpg",
  28: "/lessons/sms.jpg",
  29: "/lessons/waste.jpg",
  30: "/lessons/gap.jpg",
  31: "/lessons/sms.jpg",
  32: "/lessons/records.jpg",
  33: "/lessons/finance.jpg",
  34: "/lessons/leadership.jpg",
  35: "/lessons/c35.jpg",
  36: "/lessons/stats.jpg",
  37: "/lessons/stats.jpg",
  38: "/lessons/leading.jpg",
  39: "/lessons/jha.jpg",
  40: "/lessons/jha.jpg",
  41: "/lessons/pha.jpg",
  42: "/lessons/hierarchy.jpg",
  43: "/lessons/gap.jpg",
  44: "/lessons/finance.jpg",
  45: "/lessons/c44.jpg",
  46: "/lessons/leading.jpg",
  47: "/lessons/ics.jpg",
  48: "/lessons/ics.jpg",
  49: "/lessons/muster.jpg",
  50: "/lessons/hotwork.jpg",
  51: "/lessons/fire.jpg",
  52: "/lessons/hazmat.jpg",
  53: "/lessons/culture.jpg",
  54: "/lessons/muster.jpg",
  55: "/lessons/waste.jpg",
  56: "/lessons/ghs.jpg",
  57: "/lessons/waste.jpg",
  58: "/lessons/waste.jpg",
  59: "/lessons/leading.jpg",
  60: "/lessons/silica.jpg",
  61: "/lessons/ih.jpg",
  62: "/lessons/ih.jpg",
  63: "/lessons/silica.jpg",
  64: "/lessons/noise.jpg",
  65: "/lessons/radiation.jpg",
  66: "/lessons/heat.jpg",
  67: "/lessons/bio.jpg",
  68: "/lessons/ih.jpg",
  69: "/lessons/ih.jpg",
  70: "/lessons/ergo.jpg",
  71: "/lessons/ventilation.jpg",
  72: "/lessons/exam.jpg",
  73: "/lessons/classroom.jpg",
  74: "/lessons/classroom.jpg",
  75: "/lessons/training.jpg",
  76: "/lessons/classroom.jpg",
  77: "/lessons/classroom.jpg",
  78: "/lessons/training.jpg",
  79: "/lessons/machine.jpg",
  80: "/lessons/dust.jpg",
  81: "/lessons/ventilation.jpg",
  82: "/lessons/hotwork.jpg",
  83: "/lessons/noise.jpg",
  84: "/lessons/ih.jpg",
  85: "/lessons/records.jpg",
  86: "/lessons/investigation.jpg",
  87: "/lessons/psm.jpg",
  88: "/lessons/ics.jpg",
  89: "/lessons/classroom.jpg",
  90: "/lessons/exam.jpg",
  91: "/lessons/machine.jpg",
  92: "/lessons/stats.jpg",
  93: "/lessons/electrical.jpg",
  94: "/lessons/psm.jpg",
  95: "/lessons/fire.jpg",
  96: "/lessons/leadership.jpg",
  97: "/lessons/leading.jpg",
  98: "/lessons/finance.jpg",
  99: "/lessons/bio.jpg",
  100: "/lessons/classroom.jpg",
  101: "/lessons/ventilation.jpg",
  102: "/lessons/egress.jpg",
  103: "/lessons/fire.jpg",
  104: "/lessons/caught.jpg",
  105: "/lessons/investigation.jpg",
  106: "/lessons/finance.jpg",
  107: "/lessons/waste.jpg",
  108: "/lessons/hotwork.jpg",
  109: "/lessons/ergo.jpg",
  110: "/lessons/machine.jpg",
  111: "/lessons/waste.jpg",
  112: "/lessons/sms.jpg",
  113: "/lessons/investigation.jpg",
  114: "/lessons/aerial.jpg",
  115: "/lessons/ics.jpg",
  116: "/lessons/hierarchy.jpg",
  117: "/lessons/loto.jpg",
  118: "/lessons/psm.jpg",
  119: "/lessons/investigation.jpg",
  120: "/lessons/investigation.jpg",
  121: "/lessons/finance.jpg",
  122: "/lessons/fire.jpg",
  123: "/lessons/waste.jpg",
  124: "/lessons/ventilation.jpg",
  125: "/lessons/noise.jpg",
  126: "/lessons/ergo.jpg",
  127: "/lessons/classroom.jpg",
  128: "/lessons/classroom.jpg",
  129: "/lessons/leadership.jpg",
  130: "/lessons/exam.jpg",
  131: "/lessons/machine.jpg",
  132: "/lessons/bio.jpg",
};

const VIDEO_OVERRIDE: Record<number, string> = {
  1: "/lessons/c01.mp4",
  2: "/lessons/hierarchy.mp4",
  3: "/lessons/c03.mp4",
  4: "/lessons/electrical.mp4",
  5: "/lessons/loto.mp4",
  6: "/lessons/falls.mp4",
  7: "/lessons/excavation.mp4",
  8: "/lessons/caught.mp4",
  9: "/lessons/confined.mp4",
  10: "/lessons/water.mp4",
  11: "/lessons/egress.mp4",
  12: "/lessons/fleet.mp4",
  13: "/lessons/pit.mp4",
  14: "/lessons/crane.mp4",
  15: "/lessons/drone.mp4",
  16: "/lessons/machine.mp4",
  17: "/lessons/psm.mp4",
  18: "/lessons/psm.mp4",
  19: "/lessons/culture.mp4",
  20: "/lessons/investigation.mp4",
};

const MODEL_STILL: Record<number, string> = {
  1: "/lessons/teach-c01.jpg",
  2: "/lessons/teach-c02.jpg",
  3: "/lessons/teach-c03.jpg",
  4: "/lessons/teach-c04.jpg",
  5: "/lessons/teach-c05.jpg",
  6: "/lessons/falls-clearance.jpg",
  7: "/lessons/teach-excavation.jpg",
  8: "/lessons/teach-caught.jpg",
  9: "/lessons/teach-confined.jpg",
  10: "/lessons/teach-water.jpg",
  11: "/lessons/teach-egress.jpg",
  12: "/lessons/teach-fleet.jpg",
  13: "/lessons/teach-pit.jpg",
  14: "/lessons/teach-crane.jpg",
  15: "/lessons/teach-drone.jpg",
  16: "/lessons/teach-machine.jpg",
  17: "/lessons/teach-gap.jpg",
  18: "/lessons/teach-sms.jpg",
  19: "/lessons/teach-culture.jpg",
  20: "/lessons/teach-investigation.jpg",
  21: "/lessons/teach-capa.jpg",
  22: "/lessons/teach-moc.jpg",
  23: "/lessons/teach-fta.jpg",
  24: "/lessons/teach-fmea.jpg",
  25: "/lessons/teach-safetycase.jpg",
  26: "/lessons/teach-leading.jpg",
  27: "/lessons/teach-45001.jpg",
  28: "/lessons/teach-z10.jpg",
  29: "/lessons/teach-14001.jpg",
  30: "/lessons/teach-19011.jpg",
  31: "/lessons/teach-plans.jpg",
  32: "/lessons/teach-records.jpg",
  33: "/lessons/teach-finance.jpg",
  34: "/lessons/teach-leadership.jpg",
  35: "/lessons/teach-raci.jpg",
  36: "/lessons/teach-stats.jpg",
  37: "/lessons/teach-ci.jpg",
  38: "/lessons/teach-pareto.jpg",
  39: "/lessons/teach-risk.jpg",
  40: "/lessons/teach-jha.jpg",
  41: "/lessons/pha.jpg",
  42: "/lessons/teach-c02.jpg",
  43: "/lessons/teach-register.jpg",
  44: "/lessons/teach-finance.jpg",
  45: "/lessons/teach-loss.jpg",
  46: "/lessons/teach-monitor.jpg",
  47: "/lessons/teach-erp.jpg",
  48: "/lessons/teach-ics.jpg",
  49: "/lessons/teach-bcp.jpg",
  50: "/lessons/teach-fireprev.jpg",
  51: "/lessons/teach-fire.jpg",
  52: "/lessons/teach-hazmat.jpg",
  53: "/lessons/teach-violence.jpg",
  54: "/lessons/teach-drills.jpg",
  55: "/lessons/teach-p2.jpg",
  56: "/lessons/teach-ghs.jpg",
  57: "/lessons/teach-hazwaste.jpg",
  58: "/lessons/teach-hazwaste.jpg",
  59: "/lessons/teach-14001.jpg",
  60: "/lessons/teach-silica.jpg",
  61: "/lessons/teach-arec.jpg",
  62: "/lessons/teach-arec.jpg",
  63: "/lessons/teach-silica.jpg",
  64: "/lessons/teach-noise.jpg",
  65: "/lessons/teach-radiation.jpg",
  66: "/lessons/teach-heat.jpg",
  67: "/lessons/teach-bio.jpg",
  68: "/lessons/teach-tox.jpg",
  69: "/lessons/teach-expplan.jpg",
  70: "/lessons/teach-ergo.jpg",
  71: "/lessons/teach-contain.jpg",
  72: "/lessons/teach-formula.jpg",
  73: "/lessons/teach-needs.jpg",
  74: "/lessons/teach-training.jpg",
  75: "/lessons/teach-training.jpg",
  76: "/lessons/teach-needs.jpg",
  77: "/lessons/teach-kirkpatrick.jpg",
  78: "/lessons/teach-competency.jpg",
  79: "/lessons/teach-machine.jpg",
  80: "/lessons/teach-dust.jpg",
  81: "/lessons/teach-vent.jpg",
  82: "/lessons/teach-hotwork.jpg",
  83: "/lessons/teach-noise.jpg",
  84: "/lessons/teach-pel.jpg",
  85: "/lessons/teach-1904.jpg",
  86: "/lessons/teach-tool.jpg",
  87: "/lessons/teach-c03.jpg",
  88: "/lessons/teach-cyber.jpg",
  89: "/lessons/teach-z490.jpg",
  90: "/lessons/teach-formula.jpg",
  91: "/lessons/teach-reliability.jpg",
  92: "/lessons/teach-ihstat.jpg",
  93: "/lessons/teach-arc.jpg",
  94: "/lessons/teach-c03.jpg",
  95: "/lessons/teach-fire.jpg",
  96: "/lessons/teach-ethics.jpg",
  97: "/lessons/teach-benchmark.jpg",
  98: "/lessons/teach-finance.jpg",
  99: "/lessons/teach-epi.jpg",
  100: "/lessons/teach-z490.jpg",
  101: "/lessons/teach-vent.jpg",
  102: "/lessons/teach-egress.jpg",
  103: "/lessons/teach-hazen.jpg",
  104: "/lessons/teach-standby.jpg",
  105: "/lessons/teach-mort.jpg",
  106: "/lessons/teach-trir.jpg",
  107: "/lessons/teach-spcc.jpg",
  108: "/lessons/teach-lfl.jpg",
  109: "/lessons/teach-ergo.jpg",
  110: "/lessons/teach-stopdist.jpg",
  111: "/lessons/teach-swppp.jpg",
  112: "/lessons/teach-45001.jpg",
  113: "/lessons/teach-eta.jpg",
  114: "/lessons/teach-pit.jpg",
  115: "/lessons/teach-bcp.jpg",
  116: "/lessons/teach-c02.jpg",
  117: "/lessons/teach-c05.jpg",
  118: "/lessons/teach-moc.jpg",
  119: "/lessons/teach-mort.jpg",
  120: "/lessons/teach-fta.jpg",
  121: "/lessons/teach-finance.jpg",
  122: "/lessons/teach-lfl.jpg",
  123: "/lessons/teach-hazwaste.jpg",
  124: "/lessons/teach-vent.jpg",
  125: "/lessons/teach-noise.jpg",
  126: "/lessons/teach-ergo.jpg",
  127: "/lessons/teach-kirkpatrick.jpg",
  128: "/lessons/teach-z490.jpg",
  129: "/lessons/teach-ethics.jpg",
  130: "/lessons/teach-formula.jpg",
  131: "/lessons/teach-machine.jpg",
  132: "/lessons/teach-epi.jpg",
};

export function modelStillFor(id: number, domain: number, title = "") {
  const t = title.toLowerCase();
  if (id === 1 || /ptd|prevention through/.test(t)) return "/lessons/teach-c01.jpg";
  if (id === 2 || /hierarch/.test(t)) return "/lessons/teach-c02.jpg";
  if (id === 3 || /process safety|psm|pssr/.test(t)) return "/lessons/teach-c03.jpg";
  if (id === 4 || /electrical|arc/.test(t)) return "/lessons/teach-c04.jpg";
  if (id === 5 || /loto|lockout/.test(t)) return "/lessons/teach-c05.jpg";
  if (id === 6 || /fall/.test(t)) return "/lessons/falls-clearance.jpg";
  if (id === 8 || /caught|struck|pinch/.test(t)) return "/lessons/teach-caught.jpg";
  if (id === 10 || /water\b|drown|rescue/.test(t)) return "/lessons/teach-water.jpg";
  if (id === 11 || /life safety|egress/.test(t)) return "/lessons/teach-egress.jpg";
  if (id === 12 || /fleet|vehicle/.test(t)) return "/lessons/teach-fleet.jpg";
  if (id === 13 || /pit|aerial|fork/.test(t)) return "/lessons/teach-pit.jpg";
  if (id === 14 || /crane|rigg|sling/.test(t)) return "/lessons/teach-crane.jpg";
  if (id === 15 || /drone|manual handling/.test(t)) return "/lessons/teach-drone.jpg";
  if (id === 16 || /tools \/ machines|robotics/.test(t)) return "/lessons/teach-machine.jpg";
  if (id === 17 || /gap analysis/.test(t)) return "/lessons/teach-gap.jpg";
  if (id === 18 || /standards to plan/.test(t)) return "/lessons/teach-sms.jpg";
  if (id === 19 || /^culture$|safety culture/.test(t)) return "/lessons/teach-culture.jpg";
  if (id === 20 || /investigation/.test(t)) return "/lessons/teach-investigation.jpg";
  if (id === 21 || /capa/.test(t)) return "/lessons/teach-capa.jpg";
  if (id === 22 || /management of change|\bmoc\b/.test(t)) return "/lessons/teach-moc.jpg";
  if (id === 23 || /\bfta\b|fault tree/.test(t)) return "/lessons/teach-fta.jpg";
  if (id === 24 || /\bfmea\b/.test(t)) return "/lessons/teach-fmea.jpg";
  if (id === 25 || /safety case/.test(t)) return "/lessons/teach-safetycase.jpg";
  if (id === 26 || /leading|lagging/.test(t)) return "/lessons/teach-leading.jpg";
  if (id === 27 || /45001/.test(t)) return "/lessons/teach-45001.jpg";
  if (id === 28 || /\bz10\b/.test(t)) return "/lessons/teach-z10.jpg";
  if (id === 29 || /14001/.test(t)) return "/lessons/teach-14001.jpg";
  if (id === 30 || /19011/.test(t)) return "/lessons/teach-19011.jpg";
  if (id === 31 || /plans \/ policies/.test(t)) return "/lessons/teach-plans.jpg";
  if (id === 32 || /retention|privacy/.test(t)) return "/lessons/teach-records.jpg";
  if (id === 33 || /budget|roi/.test(t)) return "/lessons/teach-finance.jpg";
  if (id === 34 || /leadership/.test(t)) return "/lessons/teach-leadership.jpg";
  if (id === 35 || /raci/.test(t)) return "/lessons/teach-raci.jpg";
  if (id === 36 || /descriptive stats/.test(t)) return "/lessons/teach-stats.jpg";
  if (id === 37 || /confidence|probability/.test(t)) return "/lessons/teach-ci.jpg";
  if (id === 38 || /pareto/.test(t)) return "/lessons/teach-pareto.jpg";
  if (id === 39 || /risk process/.test(t)) return "/lessons/teach-risk.jpg";
  if (id === 40 || /^jha$/.test(t)) return "/lessons/teach-jha.jpg";
  if (id === 41 || /^pha$/.test(t)) return "/lessons/pha.jpg";
  if (id === 42) return "/lessons/teach-c02.jpg";
  if (id === 43 || /registers/.test(t)) return "/lessons/teach-register.jpg";
  if (id === 44 || /financial four/.test(t)) return "/lessons/teach-finance.jpg";
  if (id === 45 || /loss prevention/.test(t)) return "/lessons/teach-loss.jpg";
  if (id === 46 || /monitoring/.test(t)) return "/lessons/teach-monitor.jpg";
  if (id === 47 || /erp contents/.test(t)) return "/lessons/teach-erp.jpg";
  if (id === 48 || /^ics$/.test(t)) return "/lessons/teach-ics.jpg";
  if (id === 49 || /^bcp$/.test(t)) return "/lessons/teach-bcp.jpg";
  if (id === 50 || /fire prevention/.test(t)) return "/lessons/teach-fireprev.jpg";
  if (id === 51 || /fire protection/.test(t)) return "/lessons/teach-fire.jpg";
  if (id === 52 || /hazmat/.test(t)) return "/lessons/teach-hazmat.jpg";
  if (id === 53 || /violence/.test(t)) return "/lessons/teach-violence.jpg";
  if (id === 54 || /drills/.test(t)) return "/lessons/teach-drills.jpg";
  if (id === 55 || /p2|spills/.test(t)) return "/lessons/teach-p2.jpg";
  if (id === 56 || /ghs/.test(t)) return "/lessons/teach-ghs.jpg";
  if (id === 57 || id === 58 || /hazardous waste|universal waste/.test(t)) return "/lessons/teach-hazwaste.jpg";
  if (id === 59 || /sustainability|esg/.test(t)) return "/lessons/teach-14001.jpg";
  if (id === 60 || /asbestos|silica/.test(t)) return "/lessons/teach-silica.jpg";
  if (id === 61 || /arec/.test(t)) return "/lessons/teach-arec.jpg";
  if (id === 62 || /sampling/.test(t)) return "/lessons/teach-arec.jpg";
  if (id === 63 || /chemical \/ sds/.test(t)) return "/lessons/teach-silica.jpg";
  if (id === 64) return "/lessons/teach-noise.jpg";
  if (id === 65 || /radiation/.test(t)) return "/lessons/teach-radiation.jpg";
  if (id === 66 || /heat|cold|iaq/.test(t)) return "/lessons/teach-heat.jpg";
  if (id === 67 || /^bio$/.test(t)) return "/lessons/teach-bio.jpg";
  if (id === 68 || /toxicology/.test(t)) return "/lessons/teach-tox.jpg";
  if (id === 69 || /exposure plans/.test(t)) return "/lessons/teach-expplan.jpg";
  if (id === 70) return "/lessons/teach-ergo.jpg";
  if (id === 71 || /containment/.test(t)) return "/lessons/teach-contain.jpg";
  if (id === 72 || /formula gym|physics/.test(t)) return "/lessons/teach-formula.jpg";
  if (id === 73 || /needs assessment/.test(t)) return "/lessons/teach-needs.jpg";
  if (id === 74 || id === 75) return "/lessons/teach-training.jpg";
  if (id === 76) return "/lessons/teach-needs.jpg";
  if (id === 77) return "/lessons/teach-kirkpatrick.jpg";
  if (id === 78) return "/lessons/teach-competency.jpg";
  if (id === 79) return "/lessons/teach-machine.jpg";
  if (id === 80 || /combustible dust|dust/.test(t)) return "/lessons/teach-dust.jpg";
  if (id === 81) return "/lessons/teach-vent.jpg";
  if (id === 82 || /hot work|molten/.test(t)) return "/lessons/teach-hotwork.jpg";
  if (id === 83) return "/lessons/teach-noise.jpg";
  if (id === 84 || /pel \/ tlv/.test(t)) return "/lessons/teach-pel.jpg";
  if (id === 85 || /1904/.test(t)) return "/lessons/teach-1904.jpg";
  if (id === 86 || /tool choice/.test(t)) return "/lessons/teach-tool.jpg";
  if (id === 87 || /psm 14/.test(t)) return "/lessons/teach-c03.jpg";
  if (id === 88 || /cyber/.test(t)) return "/lessons/teach-cyber.jpg";
  if (id === 89 || /z490/.test(t)) return "/lessons/teach-z490.jpg";
  if (id === 90 || /exam attack|calculator lab/.test(t)) return "/lessons/teach-formula.jpg";
  if (id === 91 || /reliability/.test(t)) return "/lessons/teach-reliability.jpg";
  if (id === 92 || /sampling statistics/.test(t)) return "/lessons/teach-ihstat.jpg";
  if (id === 93 || /arc flash/.test(t)) return "/lessons/teach-arc.jpg";
  if (id === 94) return "/lessons/teach-c03.jpg";
  if (id === 95) return "/lessons/teach-fire.jpg";
  if (id === 96 || /ethics/.test(t)) return "/lessons/teach-ethics.jpg";
  if (id === 97 || /benchmark/.test(t)) return "/lessons/teach-benchmark.jpg";
  if (id === 98 || /cost \/ economic/.test(t)) return "/lessons/teach-finance.jpg";
  if (id === 99 || /epidemiolog|public health/.test(t)) return "/lessons/teach-epi.jpg";
  if (id === 100) return "/lessons/teach-z490.jpg";
  if (id === 101) return "/lessons/teach-vent.jpg";
  if (id === 102 || /occupant|egress/.test(t)) return "/lessons/teach-egress.jpg";
  if (id === 103 || /hazen|fire pump/.test(t)) return "/lessons/teach-hazen.jpg";
  if (id === 104 || /standby|availability/.test(t)) return "/lessons/teach-standby.jpg";
  if (id === 105 || /mort|barrier/.test(t)) return "/lessons/teach-mort.jpg";
  if (id === 106 || /trir|dart|emr/.test(t)) return "/lessons/teach-trir.jpg";
  if (id === 107 || /spcc/.test(t)) return "/lessons/teach-spcc.jpg";
  if (id === 108 || /le chatelier|lfl/.test(t)) return "/lessons/teach-lfl.jpg";
  if (id === 109) return "/lessons/teach-ergo.jpg";
  if (id === 110 || /stop distance/.test(t)) return "/lessons/teach-stopdist.jpg";
  if (id === 111 || /swppp|epcra/.test(t)) return "/lessons/teach-swppp.jpg";
  if (id === 112 || /vpp/.test(t)) return "/lessons/teach-45001.jpg";
  if (id === 113 || /\beta\b|boolean/.test(t)) return "/lessons/teach-eta.jpg";
  if (id === 114 || /stability|moment/.test(t)) return "/lessons/teach-pit.jpg";
  if (id === 115 || /22301|bia/.test(t)) return "/lessons/teach-bcp.jpg";
  if (id === 116) return "/lessons/teach-c02.jpg";
  if (id === 117) return "/lessons/teach-c05.jpg";
  if (id === 118) return "/lessons/teach-moc.jpg";
  if (id === 119) return "/lessons/teach-mort.jpg";
  if (id === 120) return "/lessons/teach-fta.jpg";
  if (id === 121) return "/lessons/teach-finance.jpg";
  if (id === 122) return "/lessons/teach-lfl.jpg";
  if (id === 123) return "/lessons/teach-hazwaste.jpg";
  if (id === 124) return "/lessons/teach-vent.jpg";
  if (id === 125) return "/lessons/teach-noise.jpg";
  if (id === 126) return "/lessons/teach-ergo.jpg";
  if (id === 127) return "/lessons/teach-kirkpatrick.jpg";
  if (id === 128) return "/lessons/teach-z490.jpg";
  if (id === 129) return "/lessons/teach-ethics.jpg";
  if (id === 130) return "/lessons/teach-formula.jpg";
  if (id === 131) return "/lessons/teach-machine.jpg";
  if (id === 132) return "/lessons/teach-epi.jpg";
  if (/excav|trench/.test(t)) return "/lessons/teach-excavation.jpg";
  if (/confined/.test(t)) return "/lessons/teach-confined.jpg";
  if (/jha|jsa|task, hazard/.test(t)) return "/lessons/teach-jha.jpg";
  if (/ventila|capture|dilution|q =/.test(t)) return "/lessons/teach-vent.jpg";
  if (/ergo|niosh|rnle|lift/.test(t)) return "/lessons/teach-ergo.jpg";
  if (/fire|hot work|hydraul|lfl|le chatelier/.test(t)) return "/lessons/teach-fire.jpg";
  if (/ics|erp|bcp|cyber|drill|violence/.test(t)) return "/lessons/teach-ics.jpg";
  if (/noise|dose/.test(t)) return "/lessons/teach-noise.jpg";
  if (/train|adult|kirkpatrick|z490|competenc|needs assess|delivery/.test(t)) return "/lessons/teach-training.jpg";
  if (/moc|management of change/.test(t)) return "/lessons/teach-moc.jpg";
  if (domain === 1) return "/lessons/teach-c01.jpg";
  if (domain === 2) return "/lessons/teach-c03.jpg";
  if (domain === 4) return "/lessons/teach-ics.jpg";
  if (domain === 5) return "/lessons/teach-fire.jpg";
  if (domain === 6) return "/lessons/teach-noise.jpg";
  if (domain === 7) return "/lessons/teach-training.jpg";
  return "/lessons/teach-c03.jpg";
}

export function teachVideoFor(id: number, domain: number, title = "") {
  const t = title.toLowerCase();
  if (id === 1) return "/lessons/teach-c01.mp4";
  if (id === 2 || /hierarch/.test(t)) return "/lessons/teach-c02.mp4";
  if (id === 3) return "/lessons/teach-c03.mp4";
  if (id === 4 || /electrical|arc/.test(t)) return "/lessons/teach-c04.mp4";
  if (id === 5 || /loto|lockout/.test(t)) return "/lessons/teach-c05.mp4";
  if (id === 6 || /fall/.test(t)) return "/lessons/falls-clearance.mp4";
  if (id === 8 || /caught|struck/.test(t)) return "/lessons/caught.mp4";
  if (id === 10 || /water\b|drown/.test(t)) return "/lessons/water.mp4";
  if (id === 11 || /life safety|egress/.test(t)) return "/lessons/egress.mp4";
  if (id === 12 || /fleet/.test(t)) return "/lessons/fleet.mp4";
  if (id === 13 || /pit|aerial/.test(t)) return "/lessons/pit.mp4";
  if (id === 14 || /crane|rigg/.test(t)) return "/lessons/crane.mp4";
  if (id === 15 || /drone|manual/.test(t)) return "/lessons/drone.mp4";
  if (id === 16) return "/lessons/machine.mp4";
  if (id === 17 || id === 18) return "/lessons/psm.mp4";
  if (id === 19) return "/lessons/culture.mp4";
  if (id === 20 || /investigation/.test(t)) return "/lessons/investigation.mp4";
  if (id === 21) return "/lessons/investigation.mp4";
  if (id === 22 || id === 25) return "/lessons/psm.mp4";
  if (id === 23) return "/lessons/investigation.mp4";
  if (id === 24) return "/lessons/psm.mp4";
  if (id === 26 || id === 27 || id === 28 || id === 31) return "/lessons/culture.mp4";
  if (id === 29) return "/lessons/waste.mp4";
  if (id === 32) return "/lessons/culture.mp4";
  if (id === 33) return "/lessons/culture.mp4";
  if (id === 34 || id === 35) return "/lessons/culture.mp4";
  if (id >= 36 && id <= 45) return "/lessons/investigation.mp4";
  if (id === 46) return "/lessons/investigation.mp4";
  if (id === 47 || id === 48 || id === 49 || id === 54) return "/lessons/ics.mp4";
  if (id === 50 || id === 51) return "/lessons/fire.mp4";
  if (id === 52) return "/lessons/waste.mp4";
  if (id === 53) return "/lessons/culture.mp4";
  if (id === 55) return "/lessons/waste.mp4";
  if (id >= 56 && id <= 60) return "/lessons/waste.mp4";
  if (id === 64) return "/lessons/noise.mp4";
  if (id === 70) return "/lessons/ergo.mp4";
  if (id === 71) return "/lessons/ventilation.mp4";
  if (id >= 73 && id <= 75) return "/lessons/training.mp4";
  if (id >= 76 && id <= 78) return "/lessons/training.mp4";
  if (id === 79) return "/lessons/machine.mp4";
  if (id === 80) return "/lessons/fire.mp4";
  if (id === 81) return "/lessons/ventilation.mp4";
  if (id === 82) return "/lessons/hotwork.mp4";
  if (id === 83 || id === 84) return "/lessons/noise.mp4";
  if (id === 85) return "/lessons/investigation.mp4";
  if (id === 86) return "/lessons/investigation.mp4";
  if (id === 87 || id === 94) return "/lessons/psm.mp4";
  if (id === 88) return "/lessons/ics.mp4";
  if (id === 89) return "/lessons/training.mp4";
  if (id === 90) return "/lessons/noise.mp4";
  if (id === 91) return "/lessons/machine.mp4";
  if (id === 92) return "/lessons/noise.mp4";
  if (id === 93) return "/lessons/electrical.mp4";
  if (id === 95) return "/lessons/fire.mp4";
  if (id === 96 || id === 97) return "/lessons/culture.mp4";
  if (id === 98) return "/lessons/investigation.mp4";
  if (id === 99) return "/lessons/noise.mp4";
  if (id === 100) return "/lessons/training.mp4";
  if (id === 101) return "/lessons/ventilation.mp4";
  if (id === 102) return "/lessons/egress.mp4";
  if (id === 103) return "/lessons/fire.mp4";
  if (id === 104) return "/lessons/machine.mp4";
  if (id === 105) return "/lessons/investigation.mp4";
  if (id === 106) return "/lessons/investigation.mp4";
  if (id === 107 || id === 111) return "/lessons/waste.mp4";
  if (id === 108) return "/lessons/fire.mp4";
  if (id === 109) return "/lessons/ergo.mp4";
  if (id === 110) return "/lessons/machine.mp4";
  if (id === 112) return "/lessons/culture.mp4";
  if (id === 113) return "/lessons/investigation.mp4";
  if (id === 114) return "/lessons/pit.mp4";
  if (id === 115) return "/lessons/ics.mp4";
  if (id === 116) return "/lessons/teach-c02.mp4";
  if (id === 117) return "/lessons/loto.mp4";
  if (id === 118) return "/lessons/psm.mp4";
  if (id === 119 || id === 120) return "/lessons/investigation.mp4";
  if (id === 121) return "/lessons/investigation.mp4";
  if (id === 122) return "/lessons/fire.mp4";
  if (id === 123) return "/lessons/waste.mp4";
  if (id === 124) return "/lessons/ventilation.mp4";
  if (id === 125) return "/lessons/noise.mp4";
  if (id === 126) return "/lessons/ergo.mp4";
  if (id === 127 || id === 128) return "/lessons/training.mp4";
  if (id === 129) return "/lessons/culture.mp4";
  if (id === 130) return "/lessons/noise.mp4";
  if (id === 131) return "/lessons/machine.mp4";
  if (id === 132) return "/lessons/noise.mp4";
  if (id >= 61 && id <= 72) return "/lessons/noise.mp4";
  if (id === 30) return "/lessons/psm.mp4";
  if (/excav|trench/.test(t)) return "/lessons/teach-excavation.mp4";
  if (/confined/.test(t)) return "/lessons/teach-confined.mp4";
  if (/fire|hot work/.test(t)) return "/lessons/teach-fire.mp4";
  if (/ics|erp|bcp|cyber/.test(t)) return "/lessons/teach-ics.mp4";
  if (/noise|dose/.test(t)) return "/lessons/teach-noise.mp4";
  if (/train|adult|z490|kirkpatrick|competenc/.test(t)) return "/lessons/teach-training.mp4";
  if (domain === 1) return "/lessons/c01.mp4";
  if (domain === 2) return "/lessons/teach-c03.mp4";
  if (domain === 3) return "/lessons/jha.mp4";
  if (domain === 4) return "/lessons/teach-ics.mp4";
  if (domain === 5) return "/lessons/waste.mp4";
  if (domain === 6) return "/lessons/teach-noise.mp4";
  return "/lessons/teach-training.mp4";
}

export function mediaForClass(id: number, domain: number): LessonMedia {
  const row = CATALOG.find((item) => item.id === id);
  const fromId = BY_ID[id];
  const base = (fromId && LIBRARY[fromId]) || LIBRARY[keyFromTitle(row?.title ?? "", domain)] || DEFAULT;
  const still = STILL_OVERRIDE[id] ?? base.still;
  const video = VIDEO_OVERRIDE[id] ?? base.video;
  const modelStill = MODEL_STILL[id] ?? modelStillFor(id, domain, row?.title ?? "");
  return { ...base, still, video, modelStill };
}

export function stillForClass(id: number, domain: number): string {
  return mediaForClass(id, domain).still;
}
