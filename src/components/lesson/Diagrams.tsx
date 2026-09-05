import type { ReactNode } from "react";

function Boxes({ items, caption }: { items: string[]; caption: string }) {
  return (
    <div className="space-y-2">
      <div className={`grid gap-2 ${items.length > 4 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
        {items.map((item, i) => (
          <div key={item} className="rounded-md border border-border bg-bg px-3 py-3 text-sm">
            <p className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</p>
            <p className="mt-1 font-medium">{item}</p>
          </div>
        ))}
      </div>
      <p className="text-center text-sm text-fg-muted">{caption}</p>
    </div>
  );
}

const HIERARCHY = [
  { label: "Elimination", width: "100%", fill: "var(--color-accent)", ink: "var(--color-accent-fg)" },
  { label: "Substitution", width: "88%", fill: "var(--color-ok)", ink: "var(--color-accent-fg)" },
  { label: "Engineering", width: "74%", fill: "var(--color-pine-2)", ink: "var(--color-fg)" },
  { label: "Administrative", width: "60%", fill: "var(--color-pine)", ink: "var(--color-fg)" },
  { label: "PPE", width: "46%", fill: "#0f3d2e", ink: "var(--color-fg)" },
];

export function HierarchyPyramid() {
  return (
    <div className="grid gap-2">
      {HIERARCHY.map((row) => (
        <div
          key={row.label}
          className="pyramid-row text-sm"
          style={{ width: row.width, marginInline: "auto", background: row.fill, color: row.ink }}
        >
          {row.label}
        </div>
      ))}
      <p className="mt-2 text-center text-sm text-fg-muted">If a higher row is still open in the stem, that is the answer.</p>
    </div>
  );
}

export function IsolationStrip() {
  return <Boxes items={["Identify energy", "Shut down", "Isolate", "Lock / tag", "Try-out"]} caption="A missing energy type is a missing isolation. A missing try-out is not LOTO." />;
}

export function EnergyTypes() {
  return <Boxes items={["Electrical", "Mechanical", "Hydraulic / pneumatic", "Thermal / chemical", "Gravity / stored"]} caption="Lock the breaker and still ask what can move." />;
}

export function IcsSpan() {
  return (
    <div className="space-y-3">
      <div className="grid place-items-center">
        <div className="rounded-md border border-accent bg-accent px-4 py-2 font-semibold text-accent-fg">Incident Commander</div>
      </div>
      <div className="grid gap-2 sm:grid-cols-4">
        {["Ops", "Planning", "Logistics", "Finance"].map((label) => (
          <div key={label} className="rounded-md border border-border bg-bg px-3 py-3 text-center text-sm font-medium">{label}</div>
        ))}
      </div>
      <p className="text-center text-sm text-fg-muted">Span of control 3–7. Objectives before tactics.</p>
    </div>
  );
}

export function FireTetrahedron() {
  return <Boxes items={["Fuel", "Heat", "Oxygen", "Chain reaction"]} caption="Prevention removes a face before ignition. Protection answers after ignition is possible." />;
}

export function CaptureModel() {
  return (
    <div className="space-y-2 text-sm">
      <div className="rounded-md border border-border bg-bg px-3 py-3">
        <p className="font-mono text-xs text-accent">Q = V × A</p>
        <p className="mt-1">Capture at the hood face, not at the breathing zone.</p>
      </div>
      <div className="rounded-md border border-border bg-bg px-3 py-3">
        <p className="font-mono text-xs text-accent">Q = V (10X² + A)</p>
        <p className="mt-1">Distance X dominates a free-standing hood. Diameter is not radius.</p>
      </div>
    </div>
  );
}

export function NoiseDoseModel() {
  return (
    <div className="grid gap-2 sm:grid-cols-2 text-sm">
      <div className="rounded-md border border-border bg-bg px-3 py-3">
        <p className="font-medium">OSHA</p>
        <p className="mt-1 text-fg-muted">90 dBA / 5 dB. T = 8 / 2^((L−90)/5).</p>
      </div>
      <div className="rounded-md border border-border bg-bg px-3 py-3">
        <p className="font-medium">NIOSH</p>
        <p className="mt-1 text-fg-muted">85 dBA / 3 dB. T = 8 / 2^((L−85)/3).</p>
      </div>
    </div>
  );
}

export function RnleModel() {
  return (
    <div className="rounded-md border border-border bg-bg px-3 py-3 text-sm">
      <p className="font-mono text-xs text-accent">RWL = LC × HM × VM × DM × AM × FM × CM</p>
      <p className="mt-2 text-fg-muted">A zero multiplier collapses RWL. LI above 1 is a design problem first.</p>
    </div>
  );
}

export function BarrierStack() {
  return <Boxes items={["Failed control", "Missing control", "Latent condition", "Unsafe act last"]} caption="Do not start the story at the last unsafe act." />;
}

export function FallSystem() {
  return <Boxes items={["Anchor", "Connector", "Harness", "Clearance"]} caption="One weak link is a fall. Floor tape is not an anchor." />;
}

export function TrenchProtect() {
  return <Boxes items={["Slope", "Shore", "Shield", "Spoil setback"]} caption="Pick one protective system before anyone stands in the cut." />;
}

export function ConfinedEntry() {
  return <Boxes items={["Atmosphere", "Isolation", "Attendant", "Retrieval"]} caption="Test before the plane of the opening. A permit is not air." />;
}

export function MocWindows() {
  return <Boxes items={["Before: review / authorize", "During: control the work", "After: verify / update / expire"]} caption="A temporary that stays is still a change. Replacement in kind is identical spec." />;
}

export function Pdca() {
  return <Boxes items={["Plan", "Do", "Check", "Act"]} caption="A framed certificate is not Check. Evidence and owners are." />;
}

export function FinancialFour() {
  return <Boxes items={["Avoid", "Reduce", "Retain", "Transfer"]} caption="Insurance is transfer. It is not a hierarchy row." />;
}

export function LimitTrio() {
  return <Boxes items={["PEL — legal", "TLV — ACGIH advisory", "REL — NIOSH advisory"]} caption="Meeting a PEL does not close a still-open substitute." />;
}

export function Kirkpatrick() {
  return <Boxes items={["Reaction", "Learning", "Behavior", "Results"]} caption="A smile sheet is not competence. Design the evaluation first." />;
}

export function Clock1904() {
  return <Boxes items={["7 days — most recordables", "24 hours — severe events", "Do not wait for CAPA"]} caption="The clock is a reporting duty. It is not the investigation." />;
}

export function SeriesParallel() {
  return (
    <div className="grid gap-2 sm:grid-cols-2 text-sm">
      <div className="rounded-md border border-border bg-bg px-3 py-3">
        <p className="font-mono text-xs text-accent">Series</p>
        <p className="mt-1">Rs = R1 × R2. One failed unit drops the chain.</p>
      </div>
      <div className="rounded-md border border-border bg-bg px-3 py-3">
        <p className="font-mono text-xs text-accent">Parallel</p>
        <p className="mt-1">Independent layers multiply only if they are independent.</p>
      </div>
    </div>
  );
}

export function Bowtie() {
  return <Boxes items={["Threats", "Prevention barriers", "Top event", "Mitigation barriers"]} caption="Detection after the event is the right-hand side. Do not call it prevention." />;
}

export function SamplingStrategy() {
  return <Boxes items={["What to measure", "Whom / where", "How long", "What decision"]} caption="A number without a decision is decoration." />;
}

export function RiskProcess() {
  return <Boxes items={["Identify", "Analyze", "Evaluate", "Treat / monitor"]} caption="A register without an owner is a list, not a control." />;
}

export function RaciGrid() {
  return <Boxes items={["Responsible", "Accountable — one", "Consulted", "Informed"]} caption="Two Accountable names means no Accountable." />;
}

export function FormulaGym() {
  return <Boxes items={["Name the formula", "Match the units", "DEG not RAD", "Closest listed value"]} caption="There is no formula sheet in the center. Carry the named equation." />;
}

const MODEL: Record<number, () => ReactNode> = {
  1: () => <HierarchyPyramid />,
  2: () => <HierarchyPyramid />,
  3: () => <Bowtie />,
  4: () => <EnergyTypes />,
  5: () => <IsolationStrip />,
  6: () => <FallSystem />,
  7: () => <TrenchProtect />,
  8: () => <Boxes items={["Line of fire", "Exclusion", "Guarding", "Energy isolation"]} caption="A spotter is not a barrier." />,
  9: () => <ConfinedEntry />,
  10: () => <Boxes items={["Rescue plan", "Retrieval", "Atmosphere", "No free-swim"]} caption="A life ring is not a confined-space program." />,
  11: () => <Boxes items={["Detection", "Notification", "Egress", "Assembly"]} caption="A prettier horn is not occupant protection." />,
  12: () => <Boxes items={["Separate people from steel", "Speed", "Sight lines", "Restraint"]} caption="Mirrors and horns do not replace layout." />,
  13: () => <Boxes items={["Capacity plate", "Travel surface", "Spotter last", "Falling load"]} caption="A rated truck on the wrong surface is still a struck-by." />,
  14: () => <Boxes items={["Load path", "Exclusion zone", "Signal", "Rated gear"]} caption="The hook does not move until the path is clear." />,
  15: () => <RnleModel />,
  16: () => <Boxes items={["Guard the point of operation", "Interlock", "No glove as guard", "Maintenance access"]} caption="A sleeve is not a fixed barrier." />,
  17: () => <Boxes items={["Requirement", "Current state", "Gap", "Highest open row"]} caption="Count of findings is not the rank." />,
  18: () => <Pdca />,
  19: () => <Boxes items={["What gets stopped", "What gets rewarded", "What gets reported"]} caption="A slogan on the wall is not culture." />,
  20: () => <BarrierStack />,
  21: () => <Boxes items={["Cause", "Action", "Owner", "Verify"]} caption="A ticket without verification is not CAPA." />,
  22: () => <MocWindows />,
  23: () => <SeriesParallel />,
  24: () => <Boxes items={["Severity", "Occurrence", "Detection", "RPN is not permission"]} caption="A high RPN on PPE does not close substitution." />,
  25: () => <Bowtie />,
  26: () => <Boxes items={["Leading", "Lagging", "Owner", "Decision"]} caption="TRIR alone is a lagging rear-view." />,
  27: () => <Pdca />,
  28: () => <Pdca />,
  29: () => <Pdca />,
  30: () => <Boxes items={["Plan the audit", "Evidence", "Findings", "Close"]} caption="A certificate footer is not evidence." />,
  31: () => <Boxes items={["Policy", "Plan", "Procedure", "Record"]} caption="A binder without owners is not a plan." />,
  32: () => <Boxes items={["Need", "Minimum retain", "Access control", "Destroy"]} caption="A shared drive is not a privacy program." />,
  33: () => <FinancialFour />,
  34: () => <RaciGrid />,
  35: () => <RaciGrid />,
  36: () => <Boxes items={["Mean / median", "Range", "Outlier", "Decision"]} caption="A chart is not a control." />,
  37: () => <Boxes items={["Distribution", "Confidence", "Sample size", "Decision"]} caption="Do not treat a confidence interval as a PEL." />,
  38: () => <Boxes items={["Vital few", "Useful many", "Owner", "Control"]} caption="A pretty Pareto is not the fix." />,
  39: () => <RiskProcess />,
  40: () => <Boxes items={["Task", "Hazard", "Control", "Residual"]} caption="If the last line is PPE, walk the pyramid again." />,
  41: () => <Boxes items={["Node / deviation", "Cause", "Consequence", "Safeguard"]} caption="A worksheet is not the independent layer." />,
  42: () => <HierarchyPyramid />,
  43: () => <RiskProcess />,
  44: () => <FinancialFour />,
  45: () => <FinancialFour />,
  46: () => <Boxes items={["Metric", "Threshold", "Owner", "Response"]} caption="Monitoring without a trigger is decoration." />,
  47: () => <IcsSpan />,
  48: () => <IcsSpan />,
  49: () => <Boxes items={["BIA", "RTO", "RPO", "Alternate site"]} caption="ICS saves life first. BCP restores the function." />,
  50: () => <FireTetrahedron />,
  51: () => <Boxes items={["Detect", "Suppress", "Compartment", "Egress"]} caption="Extinguishers are protection, not prevention." />,
  52: () => <Boxes items={["Classify", "Contain", "Route", "Secure"]} caption="A placard is not a tank." />,
  53: () => <Boxes items={["Prevent", "Deny", "Detect", "Respond"]} caption="A poster is not a workplace-violence program." />,
  54: () => <IcsSpan />,
  55: () => <Boxes items={["Source reduction", "Contain", "Recover", "Dispose"]} caption="A mop after the spill is not P2." />,
  56: () => <Boxes items={["Classify", "Label", "Segregate", "SDS in reach"]} caption="A pretty label is not a control." />,
  57: () => <Boxes items={["Characterize", "Contain", "Label", "Ship / treat"]} caption="A drum in the rain is already a design choice." />,
  58: () => <Boxes items={["Universal list", "Closed container", "Date", "Ship"]} caption="Do not treat universal waste as household trash." />,
  59: () => <Boxes items={["Source", "Energy", "Waste", "Measure"]} caption="An ESG slide is not a spill plan." />,
  60: () => <Boxes items={["Asbestos survey", "Disturbance control", "Air", "Waste"]} caption="A renovation without a survey is the miss." />,
  61: () => <SamplingStrategy />,
  62: () => <SamplingStrategy />,
  63: () => <LimitTrio />,
  64: () => <NoiseDoseModel />,
  65: () => <Boxes items={["Time", "Distance", "Shielding", "Survey"]} caption="A badge is not the control." />,
  66: () => <Boxes items={["WBGT", "Work-rest", "Shade / HVAC", "PPE last"]} caption="A hydration poster is not heat engineering." />,
  67: () => <Boxes items={["Source", "Pathway", "Host", "Containment"]} caption="A protocol is not a cabinet." />,
  68: () => <LimitTrio />,
  69: () => <LimitTrio />,
  70: () => <RnleModel />,
  71: () => <CaptureModel />,
  72: () => <FormulaGym />,
  73: () => <Kirkpatrick />,
  74: () => <Kirkpatrick />,
  75: () => <Kirkpatrick />,
  76: () => <Pdca />,
  77: () => <Kirkpatrick />,
  78: () => <Boxes items={["Task", "Standard", "Observe", "Authorize"]} caption="A class roster is not competence." />,
  79: () => <Boxes items={["Fence", "Interlock", "Validated stop", "Maintenance access"]} caption="Floor tape is not a robot cell." />,
  80: () => <Boxes items={["Fuel", "Dispersion", "Oxidizer", "Ignition"]} caption="Housekeeping is a lag. Design dust out of the air." />,
  81: () => <CaptureModel />,
  82: () => <FireTetrahedron />,
  83: () => <NoiseDoseModel />,
  84: () => <LimitTrio />,
  85: () => <Clock1904 />,
  86: () => <Boxes items={["Question", "Tool", "Independent layers?", "Decision"]} caption="RPN on a cut-set problem is the wrong tool." />,
  87: () => <Bowtie />,
  88: () => <IcsSpan />,
  89: () => <Kirkpatrick />,
  90: () => <FormulaGym />,
  91: () => <SeriesParallel />,
  92: () => <SamplingStrategy />,
  93: () => <EnergyTypes />,
  94: () => <Bowtie />,
  95: () => <FireTetrahedron />,
  96: () => <Boxes items={["Duty", "Conflict", "Disclose", "Highest control"]} caption="A client request does not invert the pyramid." />,
  97: () => <Boxes items={["Peer set", "Metric", "Gap", "Action"]} caption="Benchmarking without a control is tourism." />,
  98: () => <FinancialFour />,
  99: () => <SamplingStrategy />,
  100: () => <Kirkpatrick />,
  101: () => <CaptureModel />,
  102: () => <Boxes items={["Occupant load", "Width", "Travel", "Arrangement"]} caption="A prettier horn is not egress width." />,
  103: () => <Boxes items={["Hazen-Williams", "Head", "Pump curve", "Demand"]} caption="Name the formula before you punch numbers." />,
  104: () => <SeriesParallel />,
  105: () => <BarrierStack />,
  106: () => <Boxes items={["TRIR = N×200000/EH", "DART", "EMR", "Hours not heads"]} caption="Do not use 100,000 hours or headcount." />,
  107: () => <Boxes items={["Containment", "Freeboard", "Inspection", "Close"]} caption="A drum in the rain is already the design." />,
  108: () => <Boxes items={["Le Chatelier", "Component LFL", "Mixture", "Closest value"]} caption="Do not average LFLs by gut." />,
  109: () => <RnleModel />,
  110: () => <Boxes items={["Stop time", "Safety distance", "Measure", "Interlock"]} caption="A painted line is not validated stopping time." />,
  111: () => <Boxes items={["SWPPP", "EPCRA threshold", "Notify", "Contain"]} caption="A pretty spill kit is not the report." />,
  112: () => <Pdca />,
  113: () => <SeriesParallel />,
  114: () => <Boxes items={["Load moment", "CG", "Surface", "Rated capacity"]} caption="A capacity plate is not the surface." />,
  115: () => <Boxes items={["BIA", "RTO", "RPO", "Test"]} caption="An untested BCP is a binder." />,
  116: () => <HierarchyPyramid />,
  117: () => <IsolationStrip />,
  118: () => <MocWindows />,
  119: () => <BarrierStack />,
  120: () => <SeriesParallel />,
  121: () => <FinancialFour />,
  122: () => <FireTetrahedron />,
  123: () => <Boxes items={["RCRA", "SPCC", "EPCRA", "Which clock"]} caption="Triage the statute before the kit." />,
  124: () => <CaptureModel />,
  125: () => <NoiseDoseModel />,
  126: () => <RnleModel />,
  127: () => <Kirkpatrick />,
  128: () => <Kirkpatrick />,
  129: () => <Boxes items={["Facts", "Duty", "Highest control", "Disclose"]} caption="Do not invent a clause you cannot cite." />,
  130: () => <FormulaGym />,
};

export function DiagramForClass({ classId }: { classId: number }) {
  const render = MODEL[classId];
  if (render) return <>{render()}</>;
  return <HierarchyPyramid />;
}
