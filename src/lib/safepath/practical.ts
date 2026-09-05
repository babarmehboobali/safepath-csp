import { modelStillFor, teachVideoFor } from "@/lib/safepath/media";
import { CATALOG } from "@/lib/safepath/catalog";

export type PracticalStep = {
  title: string;
  say: string;
  look: string;
};

export type PracticalPack = {
  still: string;
  video: string;
  steps: PracticalStep[];
};

export const PRACTICAL: Record<number, PracticalPack> = {
  1: {
    still: "/lessons/teach-c01.jpg",
    video: "/lessons/teach-c01.mp4",
    steps: [
      { title: "Start at the drawing", say: "Prevention through design starts before steel is bought. Look at the model, not the permit.", look: "Left: late mezzanine ladder. Right: work at grade." },
      { title: "Name the energy", say: "Ask which energy the person would meet if the layout stays as drawn.", look: "If the task is at height, bring the work to grade." },
      { title: "Move the work down", say: "Change the design so the climb never happens. That is elimination.", look: "Grade-level access is the design change." },
      { title: "Only then write PPE", say: "If residual height remains, specify the system last. Do not start with the harness.", look: "PPE is the last row, written in full." },
    ],
  },
  2: {
    still: "/lessons/teach-c02.jpg",
    video: "/lessons/teach-c02.mp4",
    steps: [
      { title: "Elimination", say: "Remove the hazard so the energy never arrives.", look: "Top row: workstation with the hazard gone." },
      { title: "Substitution", say: "Keep the work. Change the agent. Water-based cleaner instead of solvent.", look: "Second row: safer process, not a new glove." },
      { title: "Engineering", say: "Hardware that still works if people are tired: a fixed guard, a hood, an interlock.", look: "Third row: guard and exhaust — not PPE." },
      { title: "Administrative then PPE", say: "Permits are administrative. Respirator, gloves, and glasses are PPE — last row.", look: "If a higher row is still open, do not stop on PPE." },
    ],
  },
  3: {
    still: "/lessons/teach-c03.jpg",
    video: "/lessons/teach-c03.mp4",
    steps: [
      { title: "Walk the unit", say: "A signed worksheet is not a layer.", look: "Common relief versus independent paths." },
      { title: "Ask what changed", say: "Shared relief is a new deviation. Hold charge.", look: "Independence of the relief path." },
      { title: "Verify the interlock", say: "An untried interlock is detection, not a closed layer.", look: "Try-out in the field." },
      { title: "Close MoC first", say: "Start-up pressure is not a reason to skip capacity.", look: "HOLD CHARGE until proven." },
    ],
  },
  4: {
    still: "/lessons/teach-c04.jpg",
    video: "/lessons/teach-c04.mp4",
    steps: [
      { title: "Treat it live", say: "Treat the circuit as live until try-out.", look: "Live dead live board." },
      { title: "Known live first", say: "Prove the meter on a known live source.", look: "Step one." },
      { title: "Then the circuit", say: "Test the isolated circuit.", look: "Step two." },
      { title: "Known live again", say: "A dark lamp is not proof.", look: "Step three. Not proof stamp." },
    ],
  },
  5: {
    still: "/lessons/teach-c05.jpg",
    video: "/lessons/teach-c05.mp4",
    steps: [
      { title: "Name every source", say: "Electrical, pneumatic, hydraulic, gravity, residual.", look: "Panel one." },
      { title: "Lock not tag only", say: "A tag without a lock is not control.", look: "Panel two." },
      { title: "Try-out", say: "Press start. The machine stays dead.", look: "Panel three." },
      { title: "Shift change", say: "A new person needs a new try-out.", look: "Panel four." },
    ],
  },
  6: {
    still: "/lessons/falls-clearance.jpg",
    video: "/lessons/falls-clearance.mp4",
    steps: [
      { title: "Measure the story", say: "This mezzanine is twelve feet. That is actual clearance.", look: "Left panel twelve foot story." },
      { title: "Add the kit", say: "Six plus three point five plus one plus five plus three equals eighteen point five.", look: "Required teaching clearance." },
      { title: "Watch the impact", say: "A six foot lanyard does not fit a twelve foot story.", look: "Not enough height." },
      { title: "Plan before you clip", say: "Change the system or the work height.", look: "Do not clip that six-foot EAL." },
    ],
  },
  7: {
    still: "/lessons/teach-excavation.jpg",
    video: "/lessons/teach-excavation.mp4",
    steps: [
      { title: "Do not stand in a raw cut", say: "An unsupported vertical wall is open energy.", look: "Left panel stamped NO." },
      { title: "Slope, shore, or shield", say: "One of those three before anyone enters the cut.", look: "Right panel sloped cut." },
      { title: "Ladder in the protected zone", say: "Access stays inside the protection.", look: "Ladder in the sloped area." },
      { title: "Spotter is not a shore", say: "A person watching is administrative. The wall still needs engineering.", look: "Hardware first." },
    ],
  },
  8: {
    still: "/lessons/teach-caught.jpg",
    video: "/lessons/caught.mp4",
    steps: [
      { title: "Name the nip", say: "Rotating coupling, in-running roll, unguarded point of operation.", look: "Left panel open energy." },
      { title: "Guard it", say: "A fixed guard is engineering. That is the row.", look: "Right panel guard on the nip." },
      { title: "A spotter is not a barrier", say: "Administrative around an open nip fails.", look: "Spotter label." },
      { title: "Try-out after the guard", say: "If the guard can come off without a tool, it is not the control.", look: "Prove the hardware." },
    ],
  },
  9: {
    still: "/lessons/teach-confined.jpg",
    video: "/lessons/teach-confined.mp4",
    steps: [
      { title: "Stop at the plane", say: "Nobody crosses until atmosphere is known.", look: "Left panel STOP." },
      { title: "Attendant and retrieval", say: "Attendant outside. Retrieval ready.", look: "Right panel line and attendant." },
      { title: "Meter at the opening", say: "Test the atmosphere before the body.", look: "Meter at the hatch." },
      { title: "Rescue is a plan", say: "A hope and a radio are not retrieval.", look: "Plan before entry." },
    ],
  },
  10: {
    still: "/lessons/teach-water.jpg",
    video: "/lessons/water.mp4",
    steps: [
      { title: "Plan before the plane", say: "Rescue staged before anyone works at the opening.", look: "Left panel no attendant STOP." },
      { title: "Attendant stays out", say: "The watcher does not become the second victim.", look: "Right panel attendant outside." },
      { title: "Line and ring staged", say: "A life ring in a locker is not the program.", look: "Retrieval in reach." },
      { title: "Hierarchy still applies", say: "Cover, guard, or keep people off the water first.", look: "Hardware before swimming skill." },
    ],
  },
  11: {
    still: "/lessons/teach-egress.jpg",
    video: "/lessons/egress.mp4",
    steps: [
      { title: "Keep the path", say: "A blocked corridor is not an exit.", look: "Left panel stamped NO." },
      { title: "Width follows occupant load", say: "Count people first, then check width and travel.", look: "Right panel clear marked door." },
      { title: "A horn is not width", say: "Detection does not create an exit.", look: "Door and width, not the alarm panel." },
      { title: "Two remote exits", say: "Remoteness still matters if one path fails.", look: "Do not stack both doors in one corner." },
    ],
  },
  12: {
    still: "/lessons/teach-fleet.jpg",
    video: "/lessons/fleet.mp4",
    steps: [
      { title: "Walk around then key", say: "Circle check before the cab.", look: "Left panel skip stamp." },
      { title: "Separate people from steel", say: "Layout and exclusion beat mirrors.", look: "Walk-around with chock." },
      { title: "Backup alarm is not layout", say: "Engineering the path first.", look: "Alarm plus habit, not alarm alone." },
      { title: "Chock and keys", say: "Parked energy still moves.", look: "Chock in the picture." },
    ],
  },
  13: {
    still: "/lessons/teach-pit.jpg",
    video: "/lessons/pit.mp4",
    steps: [
      { title: "Stability first", say: "Raised load on a ramp is a tip.", look: "Left panel TIP." },
      { title: "Load low, mast back", say: "Moment wins over hope.", look: "Right panel correct travel." },
      { title: "Capacity plate", say: "The plate is the limit, not the last successful lift.", look: "Plate before the ramp." },
      { title: "Belt on aerial", say: "Aerial work still needs the platform system.", look: "Operator belted." },
    ],
  },
  14: {
    still: "/lessons/teach-crane.jpg",
    video: "/lessons/crane.mp4",
    steps: [
      { title: "Angle first", say: "Tension rises as the sling angle falls.", look: "30 versus 60 degrees." },
      { title: "Use the sine", say: "Tension is load over n over sine theta. DEG mode.", look: "Formula on the board." },
      { title: "Exclusion zone", say: "Nobody under the load.", look: "Load path is the control." },
      { title: "A horn is not the zone", say: "Sound does not replace the barricade.", look: "Keep the path clear." },
    ],
  },
  15: {
    still: "/lessons/teach-drone.jpg",
    video: "/lessons/drone.mp4",
    steps: [
      { title: "Plan the path", say: "Twisting with a heavy box collapses the lift.", look: "Left panel zero multiplier risk." },
      { title: "RWL first", say: "Change the lift before custom belts.", look: "Team lift on the right." },
      { title: "Drone stay-back", say: "A drone removes a climber. Keep people out of the disc.", look: "Stay-back zone." },
      { title: "Energy still on the unit", say: "Inspection from the air does not isolate the line.", look: "LOTO still applies on the plant." },
    ],
  },
  16: {
    still: "/lessons/teach-machine.jpg",
    video: "/lessons/machine.mp4",
    steps: [
      { title: "Guard the nip", say: "Point of operation first. A sleeve is not a fixed barrier.", look: "Left panel open nip." },
      { title: "Then the jog", say: "Maintenance jog still needs designed access.", look: "Guard and two-hand control." },
      { title: "Separate people from robots", say: "A cell fence is engineering.", look: "Robot cell." },
      { title: "AI camera last", say: "Detection is not the guard.", look: "Hardware first." },
    ],
  },
  17: {
    still: "/lessons/teach-gap.jpg",
    video: "/lessons/psm.mp4",
    steps: [
      { title: "Requirement versus current", say: "A gap is the standard minus what is actually in the field.", look: "Three columns." },
      { title: "Rank residual energy", say: "High energy first. Paper-only last.", look: "LAST stamp on paperwork." },
      { title: "A finding list is not the analysis", say: "Eighty-four lines are not a rank.", look: "Rank column." },
      { title: "Close the control", say: "A document number is not a guard.", look: "Current versus required." },
    ],
  },
  18: {
    still: "/lessons/teach-sms.jpg",
    video: "/lessons/psm.mp4",
    steps: [
      { title: "Binder is not a plan", say: "A shelf of ISO pages has no owner.", look: "Left panel not a plan." },
      { title: "Clause to owner", say: "One clause, one name, one date.", look: "Right panel." },
      { title: "Check is evidence", say: "PDCA dies without Check.", look: "Due date." },
      { title: "Paper without an owner", say: "That is not a close.", look: "Name on the clause." },
    ],
  },
  19: {
    still: "/lessons/teach-culture.jpg",
    video: "/lessons/culture.mp4",
    steps: [
      { title: "Stop work is the act", say: "Culture is what gets stopped on the floor.", look: "Supervisor stopping the job." },
      { title: "TRIR can lie", say: "A falling rate with an open nip is a false win.", look: "Left panel false win." },
      { title: "SIF first", say: "Serious energy beats the metric.", look: "Unguarded nip still open." },
      { title: "Do not punish the stop", say: "Killing the stop-work is the culture failure.", look: "Right panel the stop." },
    ],
  },
  20: {
    still: "/lessons/teach-investigation.jpg",
    video: "/lessons/investigation.mp4",
    steps: [
      { title: "Cause not blame", say: "Pointing at a person is not the method.", look: "Left panel STOP." },
      { title: "Follow the missing control", say: "Five why should end at hardware or system.", look: "Missing guard." },
      { title: "Retraining is a lower row", say: "If the guard is still off, training is not root cause.", look: "Hardware end of the chain." },
      { title: "Fix then verify", say: "CAPA is the control in place, not the form.", look: "Guard back on." },
    ],
  },
  21: {
    still: "/lessons/teach-capa.jpg",
    video: "/lessons/investigation.mp4",
    steps: [
      { title: "Fix then verify", say: "A closed form is not a closed control.", look: "Paper only stamp." },
      { title: "Owner and date", say: "Someone named must prove the hardware is back.", look: "Sign-off on the guard." },
      { title: "Evidence", say: "Photo, try-out, or walkdown.", look: "Right panel guard in place." },
      { title: "Do not close on intent", say: "We will train is not CAPA close.", look: "Verified control." },
    ],
  },
  22: {
    still: "/lessons/teach-moc.jpg",
    video: "/lessons/psm.mp4",
    steps: [
      { title: "Hold charge", say: "A new still on an old relief is a new deviation.", look: "Common path stamp." },
      { title: "Independence", say: "Each layer must still stand alone.", look: "Layer closed." },
      { title: "Signature is not close", say: "The worksheet is paper.", look: "Hold charge." },
      { title: "PSSR before start", say: "Try the interlock in the field.", look: "Independent relief." },
    ],
  },
  23: {
    still: "/lessons/teach-fta.jpg",
    video: "/lessons/investigation.mp4",
    steps: [
      { title: "Which gate matters", say: "AND needs both. OR needs any path.", look: "Two gates labeled." },
      { title: "Art is not the answer", say: "The exam asks which gate changes the decision.", look: "AND versus OR." },
      { title: "Cut the path", say: "Break the OR at the source if you can.", look: "Highest remaining control." },
      { title: "Do not decorate the tree", say: "More boxes are not more safety.", look: "Decision, not drawing." },
    ],
  },
  24: {
    still: "/lessons/teach-fmea.jpg",
    video: "/lessons/psm.mp4",
    steps: [
      { title: "Severity first", say: "High S stays high even if occurrence is rare.", look: "Highlighted S row." },
      { title: "RPN trap", say: "A low RPN can hide a high severity SIF.", look: "S O D columns." },
      { title: "Detection is last", say: "Finding it late is not preventing it.", look: "D column." },
      { title: "Action on the high S", say: "Design out the energy.", look: "Severity first." },
    ],
  },
  25: {
    still: "/lessons/teach-safetycase.jpg",
    video: "/lessons/psm.mp4",
    steps: [
      { title: "Claim evidence argument", say: "A case needs all three.", look: "Three boxes." },
      { title: "Empty evidence", say: "Certificates without tests are not a case.", look: "NOT A CASE stamp." },
      { title: "Argument links them", say: "Why this evidence supports this claim.", look: "Middle arrow." },
      { title: "Keep it live", say: "A frozen case after a change is a lie.", look: "MoC the case." },
    ],
  },
  26: {
    still: "/lessons/teach-leading.jpg",
    video: "/lessons/culture.mp4",
    steps: [
      { title: "Lagging is after harm", say: "TRIR tells you who already got hurt.", look: "Left panel lagging." },
      { title: "Leading is the stop", say: "Open SIFs and stop-work counts.", look: "Right panel leading." },
      { title: "False win", say: "Falling TRIR with an open nip is a lie.", look: "Both panels together." },
      { title: "Act on the leading", say: "Close the energy, do not celebrate the rate.", look: "Open SIF list." },
    ],
  },
  27: {
    still: "/lessons/teach-45001.jpg",
    video: "/lessons/culture.mp4",
    steps: [
      { title: "PDCA", say: "Plan do check act. Check cannot be empty.", look: "Empty Check stamp." },
      { title: "Binder is not Check", say: "A certificate is not operation.", look: "Four boxes." },
      { title: "Context then leadership", say: "The standard starts with the organization, not the poster.", look: "PDCA board." },
      { title: "Operation is controls", say: "Hierarchy still lives in clause 8.", look: "Do and Check." },
    ],
  },
  28: {
    still: "/lessons/teach-z10.jpg",
    video: "/lessons/culture.mp4",
    steps: [
      { title: "Risk assessment is the engine", say: "Z10 turns on risk, not on the certificate.", look: "Center box." },
      { title: "SIF over rates", say: "Serious energy first.", look: "Not Z10 stamp on the wall cert." },
      { title: "PDCA still wraps it", say: "Plan the assessment, check the residual.", look: "Cycle." },
      { title: "Do not chase TRIR", say: "Manuele: serious injury prevention.", look: "Center engine." },
    ],
  },
  29: {
    still: "/lessons/teach-14001.jpg",
    video: "/lessons/waste.mp4",
    steps: [
      { title: "Aspect then impact", say: "The leak is the aspect. The river is the impact.", look: "Drum and river." },
      { title: "Control at source", say: "A spill kit is not the aspect control.", look: "Source first." },
      { title: "Significant aspects", say: "Rank by impact, not by paperwork ease.", look: "Two panels." },
      { title: "Same hierarchy", say: "Eliminate the leak path.", look: "Drum." },
    ],
  },
  30: {
    still: "/lessons/teach-19011.jpg",
    video: "/lessons/psm.mp4",
    steps: [
      { title: "Audit is evidence", say: "A tour of ticks is not 19011.", look: "TOUR stamp." },
      { title: "Sample records and floor", say: "Competence of the auditor matters.", look: "Right panel." },
      { title: "Findings need criteria", say: "Requirement versus actual.", look: "Evidence." },
      { title: "Do not audit the binder only", say: "Walk the control.", look: "Floor sample." },
    ],
  },
  31: {
    still: "/lessons/teach-plans.jpg",
    video: "/lessons/culture.mp4",
    steps: [
      { title: "Owner on the page", say: "A poster with no name is not a plan.", look: "NO OWNER." },
      { title: "Review date", say: "Dead policies stay on walls.", look: "Named accountable." },
      { title: "Policy vs plan", say: "Policy is intent. Plan is who and when.", look: "Right panel." },
      { title: "Link to the clause", say: "Same as standards to plan.", look: "Owner." },
    ],
  },
  32: {
    still: "/lessons/teach-records.jpg",
    video: "/lessons/culture.mp4",
    steps: [
      { title: "Keep what the law keeps", say: "Retention years are not optional taste.", look: "Calendar." },
      { title: "Medical stays locked", say: "Not in the lunchroom.", look: "Locked file." },
      { title: "Privacy is a control", say: "Exposure records have names.", look: "Stamp." },
      { title: "Destroy on time too", say: "Keeping forever is also a risk.", look: "Calendar." },
    ],
  },
  33: {
    still: "/lessons/teach-finance.jpg",
    video: "/lessons/culture.mp4",
    steps: [
      { title: "Control first", say: "Cheap training is a lower row.", look: "LOWER ROW stamp." },
      { title: "Then ROI", say: "ROI is benefit minus cost over cost.", look: "Guard cost panel." },
      { title: "Insurance is not a row", say: "EMR finances residual risk.", look: "Footer." },
      { title: "Payback last", say: "Do not pick the cheap wrong control.", look: "Engineering spend." },
    ],
  },
  34: {
    still: "/lessons/teach-leadership.jpg",
    video: "/lessons/culture.mp4",
    steps: [
      { title: "Resources and stop-work", say: "Leadership is money and backing the stop.", look: "Right panel." },
      { title: "Slogans are not leadership", say: "A banner is not a budget.", look: "NOT LEADERSHIP." },
      { title: "Time on the floor", say: "Visible priority.", look: "Manager at the stop." },
      { title: "Do not kill the metric stop", say: "Same culture rule.", look: "Stop-work." },
    ],
  },
  35: {
    still: "/lessons/teach-raci.jpg",
    video: "/lessons/culture.mp4",
    steps: [
      { title: "One accountable", say: "Two As is two bosses.", look: "TWO BOSSES stamp." },
      { title: "Consulted is not A", say: "C does not own the close.", look: "Single A." },
      { title: "Responsible does the work", say: "R executes. A owns.", look: "Matrix." },
      { title: "Informed last", say: "Do not hide the SIF from I.", look: "One A." },
    ],
  },
  36: {
    still: "/lessons/teach-stats.jpg",
    video: "/lessons/investigation.mp4",
    steps: [
      { title: "Mean is not the story", say: "The tail can be the SIF.", look: "Bell curve tail." },
      { title: "Spread matters", say: "A tight mean can hide a far event.", look: "SIF label." },
      { title: "Do not manage the average", say: "Rates average away the serious case.", look: "Tail." },
      { title: "Show the distribution", say: "Before you brief leadership.", look: "Curve." },
    ],
  },
  37: {
    still: "/lessons/teach-ci.jpg",
    video: "/lessons/investigation.mp4",
    steps: [
      { title: "Range not a point", say: "A single mean is not enough.", look: "95 percent bar." },
      { title: "Say the interval", say: "Act on the range.", look: "NOT ENOUGH stamp." },
      { title: "Sample size", say: "Narrow intervals need more data.", look: "Interval." },
      { title: "Do not fake precision", say: "Closest listed value still applies.", look: "Range." },
    ],
  },
  38: {
    still: "/lessons/teach-pareto.jpg",
    video: "/lessons/investigation.mp4",
    steps: [
      { title: "Vital few", say: "Eighty twenty on energy, not on ticket count.", look: "SIF bars." },
      { title: "Paper tail last", say: "Many small findings are not the rank.", look: "LAST stamp." },
      { title: "Cut the first bars", say: "That is the work.", look: "Tall bars." },
      { title: "Recount after the fix", say: "Pareto moves.", look: "Chart." },
    ],
  },
  39: {
    still: "/lessons/teach-risk.jpg",
    video: "/lessons/investigation.mp4",
    steps: [
      { title: "Identify analyze treat", say: "Three moves. Treat is hierarchy.", look: "Three arrows." },
      { title: "Color is not a control", say: "A red cell is a flag.", look: "Treat box." },
      { title: "Residual after treat", say: "Say what is left.", look: "Process." },
      { title: "Do not stop at the matrix", say: "Walk the floor.", look: "Treat." },
    ],
  },
  40: {
    still: "/lessons/teach-jha.jpg",
    video: "/lessons/jha.mp4",
    steps: [
      { title: "Task hazard control", say: "Three columns. Control must match the energy.", look: "JHA board." },
      { title: "Guard the nip", say: "PPE-only on a nip is a fail.", look: "WALK THE PYRAMID." },
      { title: "One task at a time", say: "Do not hide steps.", look: "Task column." },
      { title: "Living document", say: "After a change, rewrite the JHA.", look: "Control column." },
    ],
  },
  41: {
    still: "/lessons/pha.jpg",
    video: "/lessons/psm.mp4",
    steps: [
      { title: "Name the deviation", say: "PHA is what-if on the node.", look: "PHA still." },
      { title: "Then the control", say: "A worksheet is not the layer.", look: "Deviation." },
      { title: "Independence", say: "Same as process safety.", look: "Layer." },
      { title: "MoC the PHA", say: "A new still needs a new node.", look: "Hold charge." },
    ],
  },
  42: {
    still: "/lessons/teach-c02.jpg",
    video: "/lessons/teach-c02.mp4",
    steps: [
      { title: "Hierarchy in risk treat", say: "Treat means the highest remaining row.", look: "Five rows." },
      { title: "Engineering is hardware", say: "Not a poster.", look: "Guard row." },
      { title: "PPE last", say: "Full words.", look: "Bottom row." },
      { title: "Register color is not treat", say: "Same risk-process rule.", look: "Pyramid." },
    ],
  },
  43: {
    still: "/lessons/teach-register.jpg",
    video: "/lessons/investigation.mp4",
    steps: [
      { title: "Living list", say: "A frozen sheet is dead.", look: "DEAD stamp." },
      { title: "Owner residual review", say: "Three fields or it is wallpaper.", look: "Right panel." },
      { title: "Not the treatment", say: "The register records. Hierarchy treats.", look: "Footer." },
      { title: "Review date", say: "After MoC, reopen the row.", look: "Date." },
    ],
  },
  44: {
    still: "/lessons/teach-finance.jpg",
    video: "/lessons/investigation.mp4",
    steps: [
      { title: "Four strategies", say: "Avoid reduce retain transfer.", look: "Finance board." },
      { title: "Avoid is elimination", say: "Highest row.", look: "Control first." },
      { title: "Transfer is insurance", say: "Not a guard.", look: "Insurance note." },
      { title: "Retain only residual", say: "After the higher rows.", look: "ROI panel." },
    ],
  },
  45: {
    still: "/lessons/teach-loss.jpg",
    video: "/lessons/investigation.mp4",
    steps: [
      { title: "Prevention versus reduction", say: "A guard prevents. Insurance pays after.", look: "Two panels." },
      { title: "Insurance is reduction", say: "It is not prevention.", look: "Stamp." },
      { title: "Hierarchy first", say: "Do not buy the policy and skip the guard.", look: "Guard panel." },
      { title: "Retain residual only", say: "Same financial four.", look: "After." },
    ],
  },
  46: {
    still: "/lessons/teach-monitor.jpg",
    video: "/lessons/investigation.mp4",
    steps: [
      { title: "Measure the control", say: "Walk the guard, do not only watch the rate.", look: "Vanity metric stamp." },
      { title: "Field check", say: "Is the hardware still on?", look: "Right panel." },
      { title: "Owner the metric", say: "A leading chart with no owner is a poster.", look: "Dashboard." },
      { title: "Act on a miss", say: "Monitoring without CAPA is tourism.", look: "Guard check." },
    ],
  },
  47: {
    still: "/lessons/teach-erp.jpg",
    video: "/lessons/ics.mp4",
    steps: [
      { title: "Objectives then tactics", say: "An ERP has roles, comms, evac, shutdown, medical.", look: "Binder sections." },
      { title: "Empty section fails", say: "A phone tree is not the plan.", look: "NOT AN ERP." },
      { title: "ICS lives inside it", say: "Command is a section, not the whole book.", look: "Roles." },
      { title: "Practice the book", say: "Drills prove the ERP.", look: "Sections." },
    ],
  },
  48: {
    still: "/lessons/teach-ics.jpg",
    video: "/lessons/ics.mp4",
    steps: [
      { title: "One commander", say: "No two bosses.", look: "ICS chart." },
      { title: "Span three to seven", say: "Split sections when span breaks.", look: "Boxes." },
      { title: "Objectives first", say: "Tactics follow command.", look: "IC." },
      { title: "Unity of command", say: "Each person one boss.", look: "Stamp." },
    ],
  },
  49: {
    still: "/lessons/teach-bcp.jpg",
    video: "/lessons/ics.mp4",
    steps: [
      { title: "Recover critical work", say: "ICS runs the scene. BCP keeps the process.", look: "Two panels." },
      { title: "Name the critical", say: "Not every task is BCP.", look: "Alternate site." },
      { title: "Alternate site", say: "Where does the work live tomorrow?", look: "Right panel." },
      { title: "Do not confuse plans", say: "ERP is life safety. BCP is continuity.", look: "Footer." },
    ],
  },
  50: {
    still: "/lessons/teach-fireprev.jpg",
    video: "/lessons/fire.mp4",
    steps: [
      { title: "Remove a face", say: "Prevention takes fuel, oxygen, heat, or chain.", look: "Tetrahedron." },
      { title: "Before ignition", say: "Protection answers after.", look: "Lifted face." },
      { title: "Hot work is prevention", say: "Permit and cover are prevention rows.", look: "Faces." },
      { title: "Do not start at the sprinkler", say: "That is protection.", look: "Footer." },
    ],
  },
  51: {
    still: "/lessons/teach-fire.jpg",
    video: "/lessons/fire.mp4",
    steps: [
      { title: "After ignition", say: "Detection, suppression, compartmentation.", look: "Fire board." },
      { title: "Not prevention", say: "A sprinkler does not remove the fuel.", look: "Protection." },
      { title: "Life safety first", say: "Egress still wins.", look: "People out." },
      { title: "Design the system", say: "Hydraulics and listing matter.", look: "Board." },
    ],
  },
  52: {
    still: "/lessons/teach-hazmat.jpg",
    video: "/lessons/waste.mp4",
    steps: [
      { title: "Classify then package", say: "UN number and spec before the truck moves.", look: "Placard board." },
      { title: "Loose drums fail", say: "An open bed is not a package.", look: "NO stamp." },
      { title: "Security is custody", say: "Plus the spec, not a slogan.", look: "Footer." },
      { title: "Emergency on the road", say: "ERG is tactics after classify.", look: "Placard." },
    ],
  },
  53: {
    still: "/lessons/teach-violence.jpg",
    video: "/lessons/culture.mp4",
    steps: [
      { title: "Assess then design", say: "Access control is engineering.", look: "Lobby." },
      { title: "Two-exit room", say: "Interview design matters.", look: "Right panel." },
      { title: "Poster is not the program", say: "Admin last.", look: "Footer." },
      { title: "Train the stop", say: "After the design.", look: "Badge control." },
    ],
  },
  54: {
    still: "/lessons/teach-drills.jpg",
    video: "/lessons/ics.mp4",
    steps: [
      { title: "Objectives then the clock", say: "Time it. Count people.", look: "Stopwatch." },
      { title: "Muster fail", say: "A lot with no board is not accountability.", look: "MUSTER FAIL." },
      { title: "ICS in the drill", say: "Practice command, not only walking out.", look: "Org." },
      { title: "Write the gaps", say: "A drill without CAPA is theater.", look: "Clock." },
    ],
  },
  55: {
    still: "/lessons/teach-p2.jpg",
    video: "/lessons/waste.mp4",
    steps: [
      { title: "P2 at the source", say: "Stop the leak path first.", look: "Valve." },
      { title: "Kit is response", say: "A boom is not prevention.", look: "KIT stamp." },
      { title: "Then contain", say: "Response after the source control.", look: "Boom." },
      { title: "Same hierarchy", say: "Eliminate the spill path.", look: "P2 panel." },
    ],
  },
  56: { still: "/lessons/teach-ghs.jpg", video: "/lessons/waste.mp4", steps: [
    { title: "Pictogram then segregate", say: "The diamond is classification, not storage.", look: "NO stamp on incompatibles." },
    { title: "Incompatibles apart", say: "Acid next to cyanide fails.", look: "Pair." },
    { title: "SDS after the label", say: "Section 7 and 10 back the segregation.", look: "Pictograms." },
    { title: "A sticker is not a cabinet", say: "Engineering the store.", look: "Board." },
  ]},
  57: { still: "/lessons/teach-hazwaste.jpg", video: "/lessons/waste.mp4", steps: [
    { title: "Determine then label", say: "RCRA starts with the waste code.", look: "Drum start date." },
    { title: "Dumpster is not a determination", say: "Open trash is not a SAT.", look: "Stamp." },
    { title: "Words and date", say: "Hazardous waste and accumulation start.", look: "Label." },
    { title: "Then the clock", say: "Generator category sets time.", look: "Drum." },
  ]},
  58: { still: "/lessons/teach-hazwaste.jpg", video: "/lessons/waste.mp4", steps: [
    { title: "Universal is still waste", say: "Lamps and batteries have a rule, not a dumpster.", look: "Drum board." },
    { title: "Label the stream", say: "Universal waste words.", look: "Label." },
    { title: "Do not mix with trash", say: "Determination still exists.", look: "Stamp." },
    { title: "Time and container", say: "Closed, dated.", look: "Drum." },
  ]},
  59: { still: "/lessons/teach-14001.jpg", video: "/lessons/waste.mp4", steps: [
    { title: "Aspect then impact", say: "Sustainability still ranks source control.", look: "14001 board." },
    { title: "Not a brochure", say: "ESG text is not a control.", look: "Aspect." },
    { title: "Measure the leak", say: "Same P2 rule.", look: "Source." },
    { title: "Hierarchy", say: "Eliminate the aspect.", look: "Impact." },
  ]},
  60: { still: "/lessons/teach-silica.jpg", video: "/lessons/waste.mp4", steps: [
    { title: "Table then the task", say: "Asbestos and silica are task controls.", look: "Wet or vacuum." },
    { title: "SDS is not the saw", say: "Binder is not wet methods.", look: "Dry saw stamp." },
    { title: "Air last", say: "ESG air talk after the source.", look: "Task." },
    { title: "Contain the dust", say: "Engineering first.", look: "Saw." },
  ]},
  61: { still: "/lessons/teach-arec.jpg", video: "/lessons/noise.mp4", steps: [
    { title: "Anticipate first", say: "AREC starts before the pump.", look: "Four arrows." },
    { title: "Sampling is evaluate", say: "Not the first letter.", look: "Kit stamp." },
    { title: "Control is hierarchy", say: "After you know the energy.", look: "Control box." },
    { title: "Do not skip recognize", say: "Walk the job.", look: "Arrows." },
  ]},
  62: { still: "/lessons/teach-arec.jpg", video: "/lessons/noise.mp4", steps: [
    { title: "Sample with a plan", say: "What decision will the number change?", look: "Evaluate." },
    { title: "Blank and cal", say: "A pump without a blank is theater.", look: "Kit." },
    { title: "Match the method", say: "NIOSH / OSHA method number.", look: "Evaluate arrow." },
    { title: "Then control", say: "Do not sample forever.", look: "Control." },
  ]},
  63: { still: "/lessons/teach-silica.jpg", video: "/lessons/noise.mp4", steps: [
    { title: "SDS then wet cut", say: "Section 8 is a hint, not the saw.", look: "Wet or vacuum." },
    { title: "Silica is a task", say: "Table 1 logic: control the cut.", look: "Saw." },
    { title: "Binder last", say: "A sheet is not LEV.", look: "Stamp." },
    { title: "Exposure plan next", say: "Class 69.", look: "Task." },
  ]},
  64: { still: "/lessons/teach-noise.jpg", video: "/lessons/noise.mp4", steps: [
    { title: "Do not mix tables", say: "OSHA 90 and 5. NIOSH 85 and 3.", look: "Two tables." },
    { title: "Dose is time fractions", say: "Not average dB.", look: "Board." },
    { title: "Engineering the source", say: "Muffs are PPE.", look: "Tables." },
    { title: "Closest listed value", say: "Calculator in DEG.", look: "Footer." },
  ]},
  65: { still: "/lessons/teach-radiation.jpg", video: "/lessons/noise.mp4", steps: [
    { title: "Time distance shielding", say: "ALARA is engineering first.", look: "Shield wall." },
    { title: "Badge last", say: "Dosimetry is monitoring.", look: "Badge." },
    { title: "Distance cheap", say: "Move the source or the person.", look: "Arrow." },
    { title: "Shield the beam", say: "Hardware.", look: "Wall." },
  ]},
  66: { still: "/lessons/teach-heat.jpg", video: "/lessons/noise.mp4", steps: [
    { title: "WBGT then work rest", say: "Measure the environment.", look: "Instrument." },
    { title: "Fan is not the table", say: "Admin after the number.", look: "Stamp." },
    { title: "Cold is still measured", say: "Same discipline.", look: "Table." },
    { title: "IAQ is source first", say: "Ventilate the process.", look: "Measure." },
  ]},
  67: { still: "/lessons/teach-bio.jpg", video: "/lessons/noise.mp4", steps: [
    { title: "Contain then sharps", say: "Cabinet before the needle.", look: "BSC." },
    { title: "Open needle fails", say: "Sharps box is engineering plus practice.", look: "NO stamp." },
    { title: "Vaccine is not the cabinet", say: "Medical last.", look: "Footer." },
    { title: "Spill plan ready", say: "Before the work.", look: "Containment." },
  ]},
  68: { still: "/lessons/teach-tox.jpg", video: "/lessons/noise.mp4", steps: [
    { title: "Dose makes the poison", say: "Route matters.", look: "Curve." },
    { title: "PEL is not LD50", say: "Different tools.", look: "Footer." },
    { title: "Inhalation first at work", say: "Then skin.", look: "Routes." },
    { title: "BEI is not the PEL", say: "Class 132.", look: "Curve." },
  ]},
  69: { still: "/lessons/teach-expplan.jpg", video: "/lessons/noise.mp4", steps: [
    { title: "Trigger then the task", say: "Action level starts the plan.", look: "Line." },
    { title: "Binder is not the hood", say: "The plan names the control.", look: "Stamp." },
    { title: "Respirator last", say: "After engineering.", look: "Tree." },
    { title: "Write the trigger", say: "Before the slogan.", look: "Footer." },
  ]},
  70: { still: "/lessons/teach-ergo.jpg", video: "/lessons/ergo.mp4", steps: [
    { title: "Zero multiplier collapses RWL", say: "Fix the multiplier, not the belt.", look: "RWL boxes." },
    { title: "Training is not the first row", say: "Stamp.", look: "Poster." },
    { title: "Change the lift", say: "Height, distance, frequency.", look: "Boxes." },
    { title: "Then PPE", say: "Last.", look: "RWL." },
  ]},
  71: { still: "/lessons/teach-contain.jpg", video: "/lessons/ventilation.mp4", steps: [
    { title: "Q equals V times A", say: "Capture at the source.", look: "Hood math." },
    { title: "Wrong direction fails", say: "A grill past the face is not capture.", look: "Stamp." },
    { title: "Dilution is different", say: "Do not mix equations.", look: "Footer." },
    { title: "Measure after", say: "Smoke or velometer.", look: "Hood." },
  ]},
  72: { still: "/lessons/teach-formula.jpg", video: "/lessons/noise.mp4", steps: [
    { title: "Name the formula", say: "Then DEG.", look: "Calculator." },
    { title: "RAD only if the stem says", say: "Default degrees.", look: "Stamp." },
    { title: "Closest listed value", say: "Do not invent a sheet.", look: "TWA." },
    { title: "Unrounded middle", say: "Finucane discipline.", look: "Keys." },
  ]},
  73: { still: "/lessons/teach-needs.jpg", video: "/lessons/training.mp4", steps: [
    { title: "Gap then try-out", say: "Needs is the missing performance.", look: "Roster stamp." },
    { title: "Attendance is not needs", say: "A sign-in is not analysis.", look: "Left panel." },
    { title: "Design evaluation first", say: "Kirkpatrick starts at design.", look: "Footer." },
    { title: "Then slides", say: "Last.", look: "Skill check." },
  ]},
  74: { still: "/lessons/teach-training.jpg", video: "/lessons/training.mp4", steps: [
    { title: "Adults need the job", say: "Practice the task.", look: "Try-out." },
    { title: "Roster is not competence", say: "Stamp.", look: "Board." },
    { title: "Feedback in the room", say: "Not a week later only.", look: "Observed." },
    { title: "Change the work if they fail", say: "Training is not the guard.", look: "Competence." },
  ]},
  75: { still: "/lessons/teach-training.jpg", video: "/lessons/training.mp4", steps: [
    { title: "Delivery serves the objective", say: "AI slides are still slides.", look: "Training board." },
    { title: "Try-out stays", say: "A chatbot is not competence.", look: "Observed." },
    { title: "Pick the medium last", say: "After the need.", look: "Board." },
    { title: "Do not skip evaluation", say: "Class 73.", look: "Roster vs try-out." },
  ]},
  76: { still: "/lessons/teach-needs.jpg", video: "/lessons/training.mp4", steps: [
    { title: "Improve from the gap", say: "Fix the objective that failed the try-out.", look: "Needs board." },
    { title: "Not more slides", say: "More pages are not improvement.", look: "Roster stamp." },
    { title: "Change the practice", say: "Adults need the job again.", look: "Skill check." },
    { title: "Re-evaluate", say: "Kirkpatrick after the change.", look: "Try-out." },
  ]},
  77: { still: "/lessons/teach-kirkpatrick.jpg", video: "/lessons/training.mp4", steps: [
    { title: "Four levels", say: "Reaction learning behavior results.", look: "Levels." },
    { title: "Roster is level 1", say: "Smiles are not competence.", look: "LEVEL 1 ONLY." },
    { title: "Behavior on the job", say: "That is the proof.", look: "Footer." },
    { title: "Results last", say: "Rates after behavior.", look: "Level 4." },
  ]},
  78: { still: "/lessons/teach-competency.jpg", video: "/lessons/training.mp4", steps: [
    { title: "Observed try-out", say: "Watch the isolation.", look: "Pump." },
    { title: "Roster is not competence", say: "Stamp.", look: "Left panel." },
    { title: "Standard and conditions", say: "Say what good looks like.", look: "Watch." },
    { title: "Expire and refresh", say: "Competence ages.", look: "Try-out." },
  ]},
  79: { still: "/lessons/teach-machine.jpg", video: "/lessons/machine.mp4", steps: [
    { title: "Separate people", say: "R15.08 still wants distance or force limits.", look: "Fence." },
    { title: "Guard then jog", say: "Same machine rule, deeper.", look: "Nip." },
    { title: "AI is detection", say: "Not the fence.", look: "Hardware." },
    { title: "MoC the speed", say: "Firmware is a change.", look: "Cell." },
  ]},
  80: { still: "/lessons/teach-dust.jpg", video: "/lessons/fire.mp4", steps: [
    { title: "Pentagon", say: "Fuel oxygen heat suspension confinement.", look: "Five faces." },
    { title: "Housekeeping is fuel", say: "A broom after the cloud is late.", look: "Fuel face." },
    { title: "Do not suspend it", say: "Blow-down can complete the pentagon.", look: "Suspension." },
    { title: "Design the enclosure", say: "Relief and isolation.", look: "Confinement." },
  ]},
  81: { still: "/lessons/teach-vent.jpg", video: "/lessons/ventilation.mp4", steps: [
    { title: "Capture at the source", say: "Q equals V A.", look: "Hood." },
    { title: "Dilution is different", say: "Do not mix.", look: "Board." },
    { title: "Measure in the hood face", say: "Not in the room story.", look: "Arrows." },
    { title: "Make-up air", say: "A starved hood fails.", look: "Hood." },
  ]},
  82: { still: "/lessons/teach-hotwork.jpg", video: "/lessons/hotwork.mp4", steps: [
    { title: "Cover then the permit", say: "The slip is admin. The cover is engineering.", look: "Spark on drum." },
    { title: "Watch the slag", say: "Fire watch is time after the arc.", look: "Watch." },
    { title: "Molten and pressure", say: "Same energy: cover and isolate.", look: "OPEN stamp." },
    { title: "Do not start on paper", say: "Look under the grate.", look: "Cover." },
  ]},
  83: { still: "/lessons/teach-noise.jpg", video: "/lessons/noise.mp4", steps: [
    { title: "Two tables", say: "OSHA 5 dB. NIOSH 3 dB.", look: "Split tables." },
    { title: "Do not mix", say: "One line, one table.", look: "Stamp." },
    { title: "Dose fractions", say: "Ci over Ti.", look: "Board." },
    { title: "Engineering the source", say: "Same as 64, now the comparison.", look: "Tables." },
  ]},
  84: { still: "/lessons/teach-pel.jpg", video: "/lessons/noise.mp4", steps: [
    { title: "Do not mix names", say: "PEL legal. TLV ACGIH. REL NIOSH.", look: "Three columns." },
    { title: "Cite which one", say: "The stem will name it.", look: "NOT INTERCHANGEABLE." },
    { title: "BEI is still not PEL", say: "Biological guidance.", look: "Columns." },
    { title: "Control to the named limit", say: "Then hierarchy.", look: "Legal PEL." },
  ]},
  85: { still: "/lessons/teach-1904.jpg", video: "/lessons/investigation.mp4", steps: [
    { title: "When the case starts", say: "Day you knew, or should have known.", look: "Calendar." },
    { title: "First aid is not recordable", say: "Medical treatment starts it.", look: "Stamp." },
    { title: "Privacy cases", say: "Not on the wall log detail.", look: "Clock." },
    { title: "Do not reset for convenience", say: "The clock is the rule.", look: "Calendar." },
  ]},
  86: { still: "/lessons/teach-tool.jpg", video: "/lessons/investigation.mp4", steps: [
    { title: "Match the energy", say: "Pick the tool that can change the decision.", look: "Four tools." },
    { title: "5-Why on shared relief fails", say: "Wrong tool.", look: "Stamp." },
    { title: "FTA when paths combine", say: "Gates.", look: "FTA." },
    { title: "JHA when the task is the unit", say: "Not the whole unit.", look: "JHA." },
  ]},
  87: { still: "/lessons/teach-c03.jpg", video: "/lessons/psm.mp4", steps: [
    { title: "Fourteen elements", say: "MoC and PSSR are two of them.", look: "PSM board." },
    { title: "Signature is not a layer", say: "Same class 3 rule, now the whole standard.", look: "Common relief." },
    { title: "Information then analysis", say: "PSI before PHA.", look: "Board." },
    { title: "Hold charge", say: "Until independence is proven.", look: "Stamp." },
  ]},
  88: { still: "/lessons/teach-cyber.jpg", video: "/lessons/ics.mp4", steps: [
    { title: "OT is an emergency path", say: "A dead screen is an ERP problem.", look: "Shutdown screen." },
    { title: "Dashboard is not the ERP", say: "Stamp.", look: "Radio fallback." },
    { title: "Command still needs a path", say: "Voice, runner, radio.", look: "Footer." },
    { title: "Practice the outage", say: "Drill the dark board.", look: "Fallback." },
  ]},
  89: { still: "/lessons/teach-z490.jpg", video: "/lessons/training.mp4", steps: [
    { title: "Program not a class", say: "Needs design delivery evaluation.", look: "Cycle." },
    { title: "One roster is not Z490", say: "Stamp.", look: "NOT A PROGRAM." },
    { title: "Evaluation designed first", say: "Same adult-learning rule.", look: "Evaluation box." },
    { title: "Improve the program", say: "Not only the slide deck.", look: "Cycle." },
  ]},
  90: { still: "/lessons/teach-formula.jpg", video: "/lessons/noise.mp4", steps: [
    { title: "Attack the stem", say: "Name the formula. DEG.", look: "Calculator." },
    { title: "Closest listed value", say: "Do not invent a sheet.", look: "TWA." },
    { title: "Pace the sitting", say: "Flag and move.", look: "Keys." },
    { title: "RAD only if required", say: "Stamp.", look: "DEG." },
  ]},
  91: { still: "/lessons/teach-reliability.jpg", video: "/lessons/machine.mp4", steps: [
    { title: "AND versus OR", say: "Both must fail versus any path fails.", look: "Two gates." },
    { title: "Availability is a number", say: "Not a slogan.", look: "Footer." },
    { title: "Redundancy is OR", say: "Until common mode.", look: "Parallel." },
    { title: "Common mode kills AND hope", say: "Shared relief again.", look: "AND." },
  ]},
  92: { still: "/lessons/teach-ihstat.jpg", video: "/lessons/noise.mp4", steps: [
    { title: "UCL before the call", say: "One pump is not compliance.", look: "UCL line." },
    { title: "Point sample not enough", say: "Stamp.", look: "Distribution." },
    { title: "Say the interval", say: "Same as class 37, now IH.", look: "PEL line." },
    { title: "Then control", say: "Statistics do not replace the hood.", look: "UCL." },
  ]},
  93: { still: "/lessons/teach-arc.jpg", video: "/lessons/electrical.mp4", steps: [
    { title: "Incident energy then boundary", say: "Working distance first.", look: "Boundary." },
    { title: "Cal rating last", say: "PPE after isolate.", look: "LAST RESORT." },
    { title: "Live-dead-live still", say: "Class 4.", look: "Isolate." },
    { title: "Do not start in the flash", say: "De-energize.", look: "Footer." },
  ]},
  94: { still: "/lessons/teach-c03.jpg", video: "/lessons/psm.mp4", steps: [
    { title: "Engineering the layer", say: "Capacity and independence.", look: "Relief paths." },
    { title: "Common mode", say: "Shared relief is open.", look: "Stamp." },
    { title: "PSSR in the field", say: "Try the interlock.", look: "Layer closed." },
    { title: "Hold charge", say: "Until proven.", look: "Board." },
  ]},
  95: { still: "/lessons/teach-fire.jpg", video: "/lessons/fire.mp4", steps: [
    { title: "Protection after ignition", say: "Hydraulics and listing.", look: "Fire board." },
    { title: "Prevention still first", say: "Remove a face.", look: "Tetrahedron if shown." },
    { title: "Egress still wins", say: "People out.", look: "Life safety." },
    { title: "Design the system", say: "Do not guess GPM.", look: "Board." },
  ]},
  96: { still: "/lessons/teach-ethics.jpg", video: "/lessons/culture.mp4", steps: [
    { title: "Public first", say: "Competence and honesty.", look: "Scale." },
    { title: "Do not bury the incident", say: "Stamp.", look: "Hidden case." },
    { title: "Production is not the code", say: "Pressure is the trap.", look: "Scale." },
    { title: "Say the conflict", say: "Then the higher duty.", look: "Public." },
  ]},
  97: { still: "/lessons/teach-benchmark.jpg", video: "/lessons/culture.mp4", steps: [
    { title: "Compare then act", say: "Serious energy, not vanity TRIR.", look: "Two plants." },
    { title: "False benchmark", say: "Low rate high SIF.", look: "Stamp." },
    { title: "Same work same hours", say: "Do not mix trades.", look: "Charts." },
    { title: "Act on the SIF", say: "The comparison is a pointer.", look: "SIF count." },
  ]},
  98: { still: "/lessons/teach-finance.jpg", video: "/lessons/investigation.mp4", steps: [
    { title: "Control first then ROI", say: "Cheap training is a lower row.", look: "Finance board." },
    { title: "Insurance is transfer", say: "Not prevention.", look: "Footer." },
    { title: "Payback last", say: "After the right row.", look: "ROI." },
    { title: "Do not fund the wrong control", say: "Same class 33.", look: "Guard." },
  ]},
  99: { still: "/lessons/teach-epi.jpg", video: "/lessons/noise.mp4", steps: [
    { title: "RR and OR", say: "Incidence ratio versus ad over bc.", look: "2x2." },
    { title: "BEI is not the PEL", say: "Stamp.", look: "Footer." },
    { title: "A ratio is not a guard", say: "Walk the source.", look: "Table." },
    { title: "Need a denominator", say: "Counts are not rates.", look: "2x2." },
  ]},
  100: { still: "/lessons/teach-z490.jpg", video: "/lessons/training.mp4", steps: [
    { title: "Design the program", say: "Needs to evaluation.", look: "Cycle." },
    { title: "Not a class", say: "Same Z490 board.", look: "Roster stamp." },
    { title: "Evaluation first", say: "Then slides.", look: "Evaluation." },
    { title: "Improve the system", say: "Class 76 again.", look: "Cycle." },
  ]},
  101: { still: "/lessons/teach-vent.jpg", video: "/lessons/ventilation.mp4", steps: [
    { title: "Deep capture", say: "Q VA and make-up air.", look: "Hood." },
    { title: "Do not mix dilution", say: "Different equation.", look: "Board." },
    { title: "Measure the face", say: "Velometer.", look: "Arrows." },
    { title: "Fix the hood not the room story", say: "Source.", look: "Hood." },
  ]},
  102: { still: "/lessons/teach-egress.jpg", video: "/lessons/egress.mp4", steps: [
    { title: "Occupant then width", say: "Load first.", look: "Clear path." },
    { title: "Blocked path fails", say: "NO stamp.", look: "Left." },
    { title: "Remoteness", say: "Two ways out.", look: "Doors." },
    { title: "Horn is not width", say: "Class 11 deeper.", look: "YES path." },
  ]},
  103: { still: "/lessons/teach-hazen.jpg", video: "/lessons/fire.mp4", steps: [
    { title: "Pipe then pump", say: "C factor and friction first.", look: "Curve." },
    { title: "Do not guess GPM", say: "Stamp.", look: "NOT THE CURVE." },
    { title: "Listings", say: "The pump is listed for the duty.", look: "Pipe." },
    { title: "Then the occupancy", say: "Demand from the hazard.", look: "Curve." },
  ]},
  104: { still: "/lessons/teach-standby.jpg", video: "/lessons/machine.mp4", steps: [
    { title: "Redundancy until common mode", say: "Shared suction is not two trains.", look: "COMMON MODE." },
    { title: "Independent trains", say: "Available.", look: "Right." },
    { title: "Same as reliability gates", say: "Class 91.", look: "Pumps." },
    { title: "Test the standby", say: "Untried is undetected.", look: "Trains." },
  ]},
  105: { still: "/lessons/teach-mort.jpg", video: "/lessons/investigation.mp4", steps: [
    { title: "Which barrier failed", say: "Name the layer.", look: "Grid." },
    { title: "Retraining is not the missing guard", say: "Stamp.", look: "Arrow." },
    { title: "MORT is a map", say: "Not a blame chart.", look: "Barriers." },
    { title: "Fix the open hole", say: "Then verify.", look: "Guard." },
  ]},
  106: { still: "/lessons/teach-trir.jpg", video: "/lessons/investigation.mp4", steps: [
    { title: "Three clocks", say: "TRIR DART EMR are not the same.", look: "Formulas." },
    { title: "Hours in the denominator", say: "200,000 hours frame.", look: "Footer." },
    { title: "EMR is insurance", say: "Not a hierarchy row.", look: "Stamp." },
    { title: "DART is severity-ish", say: "Days away and restricted.", look: "Clocks." },
  ]},
  107: { still: "/lessons/teach-spcc.jpg", video: "/lessons/waste.mp4", steps: [
    { title: "Room for the rain", say: "Freeboard is planned volume.", look: "Dike." },
    { title: "Overfill fails", say: "NO FREEBOARD.", look: "Stamp." },
    { title: "Tank plus storm", say: "Add the rain.", look: "Labels." },
    { title: "A slogan is not volume", say: "Calculate it.", look: "Footer." },
  ]},
  108: { still: "/lessons/teach-lfl.jpg", video: "/lessons/fire.mp4", steps: [
    { title: "Le Chatelier mix", say: "100 over sum yi over LFLi.", look: "Formula." },
    { title: "Do not add LFLs", say: "WRONG MATH.", look: "Stamp." },
    { title: "Mole percent", say: "yi first.", look: "Two vapors." },
    { title: "Then compare to atmosphere", say: "Margin to LFL.", look: "Mix." },
  ]},
  109: { still: "/lessons/teach-ergo.jpg", video: "/lessons/ergo.mp4", steps: [
    { title: "Every multiplier", say: "Zero collapses RWL.", look: "Boxes." },
    { title: "Do not skip AM FM CM", say: "Full walkthrough.", look: "RWL." },
    { title: "Change the lift", say: "Not the belt.", look: "Stamp." },
    { title: "Then residual PPE", say: "Last.", look: "Boxes." },
  ]},
  110: { still: "/lessons/teach-stopdist.jpg", video: "/lessons/machine.mp4", steps: [
    { title: "Stop before the nip", say: "Distance must beat the hand.", look: "Roll." },
    { title: "Speed and stop time", say: "The formula.", look: "Board." },
    { title: "A painted line is not the calc", say: "Measure.", look: "Hand." },
    { title: "Then the guard type", say: "Presence versus fixed.", look: "Nip." },
  ]},
  111: { still: "/lessons/teach-swppp.jpg", video: "/lessons/waste.mp4", steps: [
    { title: "Water then notice", say: "SWPPP maps the outfall.", look: "Site map." },
    { title: "EPCRA is the call", say: "NOTIFY PATH.", look: "Stamp." },
    { title: "Plan the water first", say: "Source control.", look: "Outfall." },
    { title: "Then the report clock", say: "Do not hide the spill.", look: "Footer." },
  ]},
  112: { still: "/lessons/teach-45001.jpg", video: "/lessons/culture.mp4", steps: [
    { title: "VPP Z10 45001", say: "Systems. Check cannot be empty.", look: "PDCA." },
    { title: "Certificate is not Check", say: "Same 45001 board.", look: "Binder stamp." },
    { title: "Risk engine", say: "Z10 center.", look: "Cycle." },
    { title: "SIF over rates", say: "VPP is not TRIR worship.", look: "Check." },
  ]},
  113: { still: "/lessons/teach-eta.jpg", video: "/lessons/investigation.mp4", steps: [
    { title: "Success or fail", say: "Each gate a path.", look: "Tree." },
    { title: "Boolean not art", say: "Footer.", look: "OUTCOME." },
    { title: "Cut the fail branch", say: "Highest remaining control.", look: "Fail." },
    { title: "Do not decorate", say: "Same FTA rule.", look: "Gates." },
  ]},
  114: { still: "/lessons/teach-pit.jpg", video: "/lessons/pit.mp4", steps: [
    { title: "Moment wins", say: "Raised load on a ramp tips.", look: "TIP." },
    { title: "Capacity plate", say: "Not the last successful lift.", look: "Plate." },
    { title: "Load low mast back", say: "Travel.", look: "Right." },
    { title: "Aerial still belted", say: "Platform system.", look: "Belt." },
  ]},
  115: { still: "/lessons/teach-bcp.jpg", video: "/lessons/ics.mp4", steps: [
    { title: "BIA then BCP", say: "Name critical work first.", look: "22301." },
    { title: "ICS is the scene", say: "BCP is tomorrow's process.", look: "Two panels." },
    { title: "Alternate site", say: "Where the work lives.", look: "Right." },
    { title: "RTO is a number", say: "Not a hope.", look: "Critical." },
  ]},
  116: { still: "/lessons/teach-c02.jpg", video: "/lessons/teach-c02.mp4", steps: [
    { title: "Discriminate the row", say: "Engineering is hardware. PPE is on the body.", look: "Five rows." },
    { title: "Pretty lower row", say: "A permit is still admin.", look: "Admin row." },
    { title: "Two answers", say: "Higher remaining row.", look: "Pyramid." },
    { title: "Last sentence freeze", say: "Take the highest row still open.", look: "PPE last." },
  ]},
  117: { still: "/lessons/teach-c05.jpg", video: "/lessons/loto.mp4", steps: [
    { title: "Group and shift", say: "Every person a lock. Every shift a try-out.", look: "Four panels." },
    { title: "Tag only fails", say: "Not control.", look: "Panel two." },
    { title: "Try the start", say: "Dead machine.", look: "Panel three." },
    { title: "Missing one source", say: "Not lockout.", look: "Panel one." },
  ]},
  118: { still: "/lessons/teach-moc.jpg", video: "/lessons/psm.mp4", steps: [
    { title: "MoC plus PSSR", say: "Change then field prove.", look: "Hold charge." },
    { title: "Common relief", say: "Independence.", look: "Paths." },
    { title: "Signature not close", say: "PSSR is the walkdown.", look: "Stamp." },
    { title: "Start-up last", say: "After try-out.", look: "Layer closed." },
  ]},
  119: { still: "/lessons/teach-mort.jpg", video: "/lessons/investigation.mp4", steps: [
    { title: "Barrier versus 5-Why", say: "5-Why that ends on a person is incomplete.", look: "Grid." },
    { title: "Name the failed layer", say: "MORT.", look: "Holes." },
    { title: "Retraining last", say: "If the guard is off.", look: "Stamp." },
    { title: "Fix then verify", say: "CAPA.", look: "Guard." },
  ]},
  120: { still: "/lessons/teach-fta.jpg", video: "/lessons/investigation.mp4", steps: [
    { title: "Which tool", say: "FTA gates. ETA paths. Reliability AND/OR.", look: "Gates." },
    { title: "Decision not art", say: "Which gate changes the answer.", look: "AND OR." },
    { title: "Common mode", say: "Kills independence.", look: "Tree." },
    { title: "Cut the path", say: "Highest remaining control.", look: "Gate." },
  ]},
  121: { still: "/lessons/teach-finance.jpg", video: "/lessons/investigation.mp4", steps: [
    { title: "Avoid reduce retain transfer", say: "Scenario pick.", look: "Four." },
    { title: "Avoid is elimination", say: "Highest.", look: "Board." },
    { title: "Transfer is insurance", say: "Not a guard.", look: "Footer." },
    { title: "Retain residual only", say: "After treat.", look: "ROI." },
  ]},
  122: { still: "/lessons/teach-lfl.jpg", video: "/lessons/fire.mp4", steps: [
    { title: "Hydraulics then mix", say: "Pipe demand, then LFL mix.", look: "LFL board." },
    { title: "Do not add LFLs", say: "Le Chatelier.", look: "WRONG MATH." },
    { title: "Do not guess GPM", say: "Class 103.", look: "Mix." },
    { title: "DEG and listed value", say: "Calculator.", look: "Formula." },
  ]},
  123: { still: "/lessons/teach-hazwaste.jpg", video: "/lessons/waste.mp4", steps: [
    { title: "Triage the rule", say: "RCRA waste. SPCC volume. EPCRA notice.", look: "Drum." },
    { title: "Determine first", say: "Code before the dumpster.", look: "Stamp." },
    { title: "Freeboard if oil", say: "Class 107.", look: "Label." },
    { title: "Then the call", say: "EPCRA clock.", look: "Date." },
  ]},
  124: { still: "/lessons/teach-vent.jpg", video: "/lessons/ventilation.mp4", steps: [
    { title: "Capture equation", say: "Q and the 10 X squared plus A form when the stem gives it.", look: "Hood." },
    { title: "Dilution is different", say: "VP and SG line.", look: "Board." },
    { title: "Do not mix", say: "Two equations.", look: "Wrong direction." },
    { title: "Units", say: "fpm and ft squared.", look: "Q VA." },
  ]},
  125: { still: "/lessons/teach-noise.jpg", video: "/lessons/noise.mp4", steps: [
    { title: "OSHA 5 versus NIOSH 3", say: "Lab the two tables.", look: "Split." },
    { title: "Dose fractions", say: "Ci over Ti.", look: "Board." },
    { title: "Do not mix q", say: "One line one table.", look: "Stamp." },
    { title: "Closest listed", say: "DEG.", look: "Tables." },
  ]},
  126: { still: "/lessons/teach-ergo.jpg", video: "/lessons/ergo.mp4", steps: [
    { title: "Full multiplier walk", say: "LC HM VM DM AM FM CM. Zero collapses RWL.", look: "Boxes." },
    { title: "Do not skip AM", say: "Asymmetry still counts.", look: "RWL." },
    { title: "Change the lift", say: "Training last.", look: "Stamp." },
    { title: "Then residual", say: "PPE last.", look: "Boxes." },
  ]},
  127: { still: "/lessons/teach-kirkpatrick.jpg", video: "/lessons/training.mp4", steps: [
    { title: "Adults plus levels", say: "Behavior on the job is proof.", look: "Four levels." },
    { title: "Roster is level 1", say: "Stamp.", look: "LEVEL 1 ONLY." },
    { title: "Practice the task", say: "Adult learning.", look: "Try-out." },
    { title: "Evaluate at design", say: "Not after the party.", look: "Levels." },
  ]},
  128: { still: "/lessons/teach-z490.jpg", video: "/lessons/training.mp4", steps: [
    { title: "Program drill", say: "Needs design delivery evaluation.", look: "Cycle." },
    { title: "One class is not Z490", say: "Stamp.", look: "NOT A PROGRAM." },
    { title: "Write the evaluation", say: "First.", look: "Evaluation box." },
    { title: "Improve the system", say: "After the drill.", look: "Cycle." },
  ]},
  129: { still: "/lessons/teach-ethics.jpg", video: "/lessons/culture.mp4", steps: [
    { title: "Public first", say: "Scenario: production versus the worker.", look: "Scale." },
    { title: "Do not bury it", say: "Stamp.", look: "Hidden case." },
    { title: "Competence and honesty", say: "BCSP code.", look: "Footer." },
    { title: "Say the duty", say: "Then the action.", look: "Public." },
  ]},
  130: { still: "/lessons/teach-formula.jpg", video: "/lessons/noise.mp4", steps: [
    { title: "Exam-day keys", say: "Name it. DEG. Closest listed value.", look: "Calculator." },
    { title: "Pace and flag", say: "Do not marry item 4.", look: "Keys." },
    { title: "RAD only if required", say: "Stamp.", look: "DEG." },
    { title: "Unrounded middle", say: "Then the listed answer.", look: "TWA." },
  ]},
  131: { still: "/lessons/teach-machine.jpg", video: "/lessons/machine.mp4", steps: [
    { title: "Separate people", say: "R15.08 and TS 15066.", look: "Fence." },
    { title: "AI is detection", say: "Not the fence.", look: "Hardware." },
    { title: "Collaborative space is designed", say: "Not a hallway.", look: "Cell." },
    { title: "MoC the firmware", say: "Speed is a parameter.", look: "Jog." },
  ]},
  132: { still: "/lessons/teach-epi.jpg", video: "/lessons/noise.mp4", steps: [
    { title: "RR and OR", say: "2x2 first.", look: "Table." },
    { title: "BEI is not PEL", say: "Stamp.", look: "Footer." },
    { title: "Ratio is not a guard", say: "Walk the source.", look: "2x2." },
    { title: "Need a denominator", say: "Counts are not rates.", look: "Table." },
  ]},
};

function familyTeach(title: string, id: number) {
  const row = CATALOG.find((item) => item.id === id);
  const name = title || row?.title || "";
  const domain = row?.domain ?? 0;
  return {
    still: modelStillFor(id, domain, name),
    video: teachVideoFor(id, domain, name),
  };
}

export function practicalFor(id: number, title = "", rule = ""): PracticalPack {
  if (PRACTICAL[id]) return PRACTICAL[id]!;
  const family = familyTeach(title, id);
  const first = (rule.split(/(?<=\.)\s+/)[0] || rule || title).trim();
  return {
    still: family.still,
    video: family.video,
    steps: [
      { title: "Name the decision", say: `${title}. ${first}`, look: "Read the full poster. One rule. Matching example." },
      { title: "Match the picture to the row", say: "If this is engineering, you should see hardware. If this is PPE, you should see PPE on the body. Do not mix the rows.", look: "The labeled example on the board." },
      { title: "Name the usual trap", say: "A lower row dressed as a higher row. Training is not a guard.", look: "The stamp on the poster." },
      { title: "Prove it", say: "Verify the control in the field. Study poster only.", look: "Try-out, measure, or walkdown." },
    ],
  };
}
