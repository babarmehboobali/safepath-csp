export type CatalogEntry = {
  id: number;
  domain: number;
  title: string;
  taskCode: string;
  isMaximum: boolean;
  isDeep?: boolean;
};

const D1 = [
  "Prevention through Design",
  "Hierarchy of Controls",
  "Process Safety",
  "Electrical",
  "LOTO",
  "Falls",
  "Excavation",
  "Caught-in / Struck-by",
  "Confined Space",
  "Water",
  "Life Safety",
  "Fleet",
  "PIT / Aerial",
  "Cranes / Rigging",
  "Manual Handling / Drones",
  "Tools / Machines / Robotics",
];

const D2 = [
  "Gap Analysis",
  "Standards to Plan",
  "Culture",
  "Investigation",
  "CAPA",
  "Management of Change",
  "FTA",
  "FMEA",
  "Safety Case",
  "Leading / Lagging",
  "ISO 45001",
  "Z10",
  "ISO 14001",
  "ISO 19011",
  "Plans / Policies",
  "Retention / Privacy",
  "Budget / ROI",
  "Leadership",
  "RACI",
  "Descriptive Stats",
  "CI / Probability",
  "Pareto",
];

const D3 = [
  "Risk Process",
  "JHA",
  "PHA",
  "Hierarchy in Risk",
  "Registers",
  "Financial Four Strategies",
  "Loss Prevention vs Reduction",
  "Monitoring",
];

const D4 = [
  "ERP Contents",
  "ICS",
  "BCP",
  "Fire Prevention",
  "Fire Protection",
  "Hazmat Transport / Security",
  "Workplace Violence",
  "Drills",
];

const D5 = [
  "P2 / Spills",
  "GHS / Storage",
  "Hazardous Waste",
  "Universal Waste",
  "Sustainability",
  "ESG / Air / Asbestos (exam-level)",
];

const D6 = [
  "AREC",
  "Sampling",
  "Chemical / SDS / Silica",
  "Noise",
  "Radiation",
  "Heat / Cold / IAQ",
  "Bio",
  "Toxicology",
  "Exposure Plans",
  "Ergonomics",
  "Containment Calc",
  "Physics + Formula Gym",
];

const D7 = [
  "Needs Assessment",
  "Adult Learning",
  "Delivery incl. AI",
  "Improve Training",
  "Effectiveness",
  "Competency",
];

const MAX = [
  "Robotics Deep",
  "Combustible Dust",
  "Ventilation",
  "Hot Work / Molten / Pressure",
  "OSHA vs NIOSH Noise",
  "PEL / TLV / REL",
  "1904 Clocks",
  "Tool Choice",
  "PSM 14",
  "Cyber in ERP",
  "Z490.1",
  "Exam Attack + Calculator Lab",
];

const DEEP = [
  "System Reliability",
  "IH Sampling Statistics",
  "Arc Flash Engineering",
  "Process Safety Engineering",
  "Fire Protection Engineering",
  "Ethics / Professional Judgment",
  "Benchmarking / Performance",
  "Cost / Economic Analysis",
  "Public Health / Epidemiology",
  "Training Program Design",
];


const DEEP3 = [
  "Hierarchy Discrimination Lab",
  "LOTO Verification / Group-Shift Mastery",
  "PSM MoC + PSSR Integration",
  "Investigation Tools: MORT/Barrier vs 5-Why",
  "FTA/ETA/Reliability Decision Lab",
  "Financial Four Strategies Scenarios",
  "Fire Hydraulics + Mixture LFL Lab",
  "RCRA / SPCC / EPCRA Triage",
  "Ventilation Q=V(10X²+A) + Dilution/VP Lab",
  "Noise Dose OSHA 5 vs NIOSH 3 Lab",
  "NIOSH RNLE Full Multiplier Walkthrough",
  "Adult Learning + Kirkpatrick Evaluation",
  "Z490.1 Training Program Design Drill",
  "Ethics & Professional Judgment Scenarios",
  "Exam-Day Calculator + Pacing Attack Lab",
];

const DEEP2 = [
  "Ventilation Engineering Deep",
  "Life Safety Occupant / Egress",
  "Hazen-Williams / Fire Pump",
  "Standby / Availability",
  "MORT / Barrier Analysis",
  "TRIR / DART / EMR",
  "SPCC Freeboard",
  "Le Chatelier LFL",
  "NIOSH RNLE Multipliers",
  "Machine Guard Stop Distance",
  "SWPPP / EPCRA",
  "VPP / Z10 / ISO 45001",
  "ETA Boolean",
  "PIT Stability / Moment",
  "ISO 22301 BIA / BCP",
];

const CORE_TASK_CODES = {
  1: ["D1.01", "D1.01", "D1.02", "D1.03", "D1.03", "D1.03", "D1.03", "D1.03", "D1.03", "D1.03", "D1.04", "D1.05", "D1.06", "D1.06", "D1.06", "D1.07"],
  2: ["D2.01", "D2.02", "D2.03", "D2.04", "D2.04", "D2.05", "D2.06", "D2.06", "D2.06", "D2.07", "D2.08", "D2.08", "D2.08", "D2.08", "D2.09", "D2.10", "D2.11", "D2.12", "D2.13", "D2.14", "D2.14", "D2.14"],
  3: ["D3.01", "D3.02", "D3.02", "D3.02", "D3.04", "D3.03", "D3.03", "D3.04"],
  4: ["D4.01", "D4.02", "D4.02", "D4.03", "D4.03", "D4.04", "D4.05", "D4.02"],
  5: ["D5.01", "D5.02", "D5.03", "D5.03", "D5.04", "D5.05"],
  6: ["D6.01", "D6.01", "D6.01", "D6.01", "D6.01", "D6.01", "D6.01", "D6.03", "D6.03", "D6.04", "D6.05", "D6.06"],
  7: ["D7.01", "D7.06", "D7.05", "D7.03", "D7.04", "D7.05"],
} as const;

function pack(titles: string[], domain: number, startId: number, isMaximum = false): CatalogEntry[] {
  const taskCodes = CORE_TASK_CODES[domain as keyof typeof CORE_TASK_CODES];
  return titles.map((title, i) => {
    const id = startId + i;
    return {
      id,
      domain,
      title,
      taskCode: `CSP-11 ${taskCodes?.[i] ?? `D${domain}.XX`}`,
      isMaximum,
    };
  });
}

export const CATALOG: CatalogEntry[] = [
  ...pack(D1, 1, 1),
  ...pack(D2, 2, 17),
  ...pack(D3, 3, 39),
  ...pack(D4, 4, 47),
  ...pack(D5, 5, 55),
  ...pack(D6, 6, 61),
  ...pack(D7, 7, 73),
  ...pack(MAX, 1, 79, true).map((row, i) => {
    const domains = [1, 1, 6, 1, 6, 6, 2, 3, 1, 4, 7, 7];
    const taskCodes = ["D1.07", "D1.03", "D6.01", "D1.03", "D6.01", "D6.01", "D2.10", "D2.06", "D1.02", "D4.01", "D7.03", "D2.14"];
    return { ...row, domain: domains[i], taskCode: `CSP-11 ${taskCodes[i]}` };
  }),
  ...pack(DEEP, 2, 91, true).map((row, i) => {
    const domains = [2, 6, 1, 1, 4, 2, 2, 2, 6, 7];
    const taskCodes = ["D2.06", "D6.01", "D1.03", "D1.02", "D4.03", "D2.12", "D2.01", "D2.11", "D6.02", "D7.02"];
    return { ...row, domain: domains[i], taskCode: `CSP-11 ${taskCodes[i]}`, isMaximum: true, isDeep: true };
  }),
  ...pack(DEEP2, 2, 101, true).map((row, i) => {
    const domains = [6, 1, 4, 2, 2, 2, 5, 4, 6, 1, 5, 2, 2, 1, 4];
    const taskCodes = ["D6.01", "D1.04", "D4.03", "D2.06", "D2.04", "D2.01", "D5.01", "D4.03", "D6.04", "D1.07", "D5.01", "D2.08", "D2.06", "D1.06", "D4.02"];
    return { ...row, domain: domains[i], taskCode: `CSP-11 ${taskCodes[i]}`, isMaximum: true, isDeep: true };
  }),
  ...pack(DEEP3, 2, 116, true).map((row, i) => {
    const domains = [1, 1, 1, 2, 2, 3, 4, 5, 6, 6, 6, 7, 7, 2, 2];
    const taskCodes = ["D1.01", "D1.03", "D1.02", "D2.04", "D2.06", "D3.03", "D4.03", "D5.01", "D6.01", "D6.01", "D6.04", "D7.06", "D7.03", "D2.12", "D2.14"];
    return { ...row, domain: domains[i], taskCode: `CSP-11 ${taskCodes[i]}`, isMaximum: true, isDeep: true };
  }),
  { id: 131, domain: 1, title: "Emerging tech / robotics / AI monitoring", taskCode: "CSP-11 D1.07", isMaximum: true, isDeep: true },
  { id: 132, domain: 6, title: "Epidemiology / public health stats", taskCode: "CSP-11 D6.02", isMaximum: true, isDeep: true },
];

export function classCountForTrack(track: string): number {
  if (track === "compact") return 47;
  if (track === "maximum") return CATALOG.length;
  return 78;
}

/** Compact/recommended keep every domain. Depth is how many classes per domain, not a cutoff that drops D4–D7. */
const COMPACT_QUOTA: Record<number, number> = { 1: 12, 2: 12, 3: 7, 4: 4, 5: 3, 6: 5, 7: 4 };

export function idsForTrack(track: string): number[] {
  if (track === "maximum") return CATALOG.map((row) => row.id);
  const core = CATALOG.filter((row) => row.id <= 78);
  if (track !== "compact") return core.map((row) => row.id);
  const out: number[] = [];
  for (const domain of [1, 2, 3, 4, 5, 6, 7]) {
    const take = COMPACT_QUOTA[domain] ?? 0;
    out.push(
      ...core
        .filter((row) => row.domain === domain)
        .slice(0, take)
        .map((row) => row.id),
    );
  }
  return out;
}

export function catalogForTrack(track: string) {
  const ids = new Set(idsForTrack(track));
  return CATALOG.filter((row) => ids.has(row.id));
}

export function domainOfClass(id: number): number {
  return CATALOG.find((c) => c.id === id)?.domain ?? 1;
}

/** Position of a class inside its core domain pack (ids 1–78). */
export function domainPathForClass(classId: number): { index: number; count: number; domain: number } {
  const entry = CATALOG.find((row) => row.id === classId);
  const domain = entry?.domain ?? 1;
  const core = CATALOG.filter((row) => row.domain === domain && row.id <= 78);
  const pool = core.length ? core : CATALOG.filter((row) => row.domain === domain);
  const found = pool.findIndex((row) => row.id === classId);
  return {
    index: found >= 0 ? found + 1 : 1,
    count: pool.length || 1,
    domain,
  };
}

