import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D6.02";

export const classFields: ClassFields = {
  hook: "A plant has 12 cases of occupational asthma. Leadership wants a screening slogan. You are asked whether the association is real and what to do.",
  hookOilGas: "A contractor crew has a cluster of similar illnesses after a turnaround. Same question.",
  hookConstruction: "A crew has a cluster of similar illnesses after silica-intensive demo. Same question.",
  rule: "Epidemiology describes association, not a control. Odds ratio and relative risk compare disease in exposed vs unexposed. BEI is a biological monitoring guidance value, not a PEL and not a hierarchy row.",
  modelCaption: "Exposed vs unexposed table → RR or OR → then industrial hygiene and hierarchy. A ratio is not a guard.",
  workedCase:
    "(1) Build the 2×2. (2) RR = (a/(a+b)) / (c/(c+d)). (3) OR = ad/bc. (4) If RR is high, walk the exposure: substitute, enclose, then BEI as a check — not as the control.",
  trapsJson: traps("Calling BEI the OSHA PEL.", "Treating a high OR as permission to skip substitution.", "Averaging cases without a denominator."),
  contrastJson: contrast([
    { looksLike: "BEI in range", actually: "Biological guidance, not the legal PEL" },
    { looksLike: "High relative risk", actually: "Association to investigate, not a control" },
    { looksLike: "Health fair", actually: "Admin / medical after the source" },
    { looksLike: "Remove the agent", actually: "Elimination / substitution" },
  ]),
  mustScoreJson: mustScore(
    "RR and OR need a 2×2 with denominators.",
    "BEI ≠ PEL ≠ TLV.",
    "A ratio does not close a hierarchy row.",
    "Cluster without hours or headcount is not a rate.",
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "the stem gives a/(a+b) and c/(c+d)", pick: "relative risk" },
    { ifStem: "the stem gives case-control counts a,b,c,d", pick: "odds ratio ad/bc" },
    { ifStem: "BEI is offered as the legal limit", pick: "reject — PEL is legal" },
  ),
  brief: "RR and OR measure association. BEI monitors body burden. Neither is a control or a PEL. Act on the source.",
  standard: "Rule\nRelative risk compares incidence. Odds ratio compares odds in case-control data. BEI is ACGIH biological monitoring guidance.\n\nField move\nIf asthma clusters on one line, compute the comparison, then walk substitution and enclosure. Medical screening is not the first row.",
  deep: "Public health tools sit in D6. They tell you whether exposure and outcome move together. Hierarchy still decides the fix. Do not mix BEI, TLV, REL, and PEL names.",
  cardFront: "High odds ratio on a chemical line",
  cardBack: "Association. Walk the source. BEI is not the PEL.",
  teachBackKey: "A ratio without a control is a finding, not a close.",
};

export const items: ClassItem[] = [
  exam(T, "Relative risk is best described as?", ["ad/bc", "Incidence in exposed divided by incidence in unexposed", "The OSHA PEL", "TRIR"], 1, "RR uses incidence proportions.", "FORM"),
  exam(T, "Odds ratio from a 2×2 is?", ["(a/(a+b))/(c/(c+d))", "ad/bc", "N×200000/hours", "Q=VA"], 1, "OR = ad/bc.", "FORM"),
  exam(T, "BEI is?", ["An OSHA citation limit", "ACGIH biological monitoring guidance", "A NIOSH REL for air", "A lockout step"], 1, "BEI is not the PEL.", "PELTLV"),
  exam(T, "12 cases, no worker-hours or headcount. You can report?", ["A rate", "A count that still needs a denominator", "TRIR", "EMR"], 1, "A cluster count is not a rate.", "UNIT"),
  exam(T, "RR = 3.0 for solvent asthma. Next CSP move?", ["Ignore hierarchy because the number is high", "Treat the association as a reason to walk substitution and enclosure", "Post the RR in the lunchroom as the control", "Switch the PEL name to BEI"], 1, "The number aims the walkdown.", "HIER"),
  exam(T, "Leadership wants only medical surveillance after a high OR. Problem?", ["Surveillance is elimination", "It is admin/medical around an open source", "OR forbids surveillance", "BEI replaces MoC"], 1, "Source first.", "HIER"),
  exam(T, "Case-control study of a rare cancer. Preferred comparison?", ["Incidence RR only", "Odds ratio", "TRIR", "WBGT"], 1, "Case-control → OR.", "TOOL"),
  exam(T, "Air PEL is met, urine BEI is exceeded. Reading?", ["Legal air limit may still miss dose route or work practice", "BEI overrides OSHA", "No issue", "Stop all sampling"], 0, "Different tools. Investigate route.", "PELTLV"),
  exam(T, "Confounding in a plant study means?", ["The calculator was in RAD", "Another factor is mixed with the exposure-disease link", "The PEL changed", "EMR rose"], 1, "Confounders distort association.", "STEM"),
  exam(T, "Healthy worker effect tends to?", ["Inflate workplace disease rates", "Make workers look healthier than the general population", "Replace hierarchy", "Set the BEI"], 1, "Selection can hide occupational disease.", "STEM"),
  exam(T, "Two answers: remove the sensitizer vs quarterly BEI. Pick?", ["BEI program", "Remove or substitute the sensitizer", "Equal", "Insurance"], 1, "Higher row.", "HIER"),
  exam(T, "Last sentence freezes substitution. Next?", ["Do nothing", "Engineer enclosure and exposure controls, use BEI as a check", "Only a slogan", "Change the OR formula"], 1, "Highest remaining control.", "HIER"),
];
