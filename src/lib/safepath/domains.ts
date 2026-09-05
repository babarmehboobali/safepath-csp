export const CSP_DOMAIN_WEIGHTS = {
  1: 25,
  2: 25,
  3: 15,
  4: 9,
  5: 6,
  6: 10,
  7: 10,
} as const;

export const CSP_DOMAIN_NAMES = {
  1: "Advanced Application of Safety Principles",
  2: "Program Management",
  3: "Risk Management",
  4: "Emergency Management",
  5: "Environmental Management",
  6: "Occupational Health and Applied Science",
  7: "Training",
} as const;

export const DOMAIN_SHORT = {
  1: "Applied Safety",
  2: "Programs",
  3: "Risk",
  4: "Emergency",
  5: "Environment",
  6: "Health Science",
  7: "Training",
} as const;

export const CSP_DOMAIN_DETAILS = {
  1: {
    color: "amber",
    icon: "◆",
    tagline: "Control the hazard at the source.",
    summary:
      "The largest CSP-11 domain. It tests whether you can select and evaluate practical controls across design, process safety, workplace hazards, life safety, fleet safety, materials handling, and equipment.",
    focus: ["Prevention Through Design", "Process safety", "Common workplace hazards", "Life safety", "Fleet safety", "Materials handling", "Tools and equipment"],
    skills: [
      "Choose the strongest feasible control rather than defaulting to administrative measures.",
      "Recognize how design, process, equipment, and human factors change the risk profile.",
      "Evaluate field hazards such as electrical work, falls, confined spaces, LOTO, excavation, and caught-in/struck-by exposures.",
    ],
    tasks: [
      "Apply Prevention-Through-Design principles, including avoidance, elimination, substitution, and safety design criteria.",
      "Apply process-safety principles such as pressure relief, chemical compatibility, management of change, and process flow diagrams.",
      "Evaluate common workplace hazards including electrical, falls, confined spaces, LOTO, water, caught-in/struck-by, and excavation.",
      "Evaluate facility life-safety features such as public-space safety, floor loading, and occupancy loads.",
      "Apply fleet-safety principles covering drivers, equipment, maintenance, monitoring technology, impairment, and fatigue.",
      "Evaluate materials-handling controls for powered industrial trucks, lifts, cranes, hoists, rigging, manual handling, and drones.",
      "Evaluate tools, machines, and equipment including power tools, ladders, grinders, hydraulics, and robotics.",
    ],
  },
  2: {
    color: "blue",
    icon: "▦",
    tagline: "Turn safety activity into a managed system.",
    summary:
      "A high-weight management domain focused on measuring performance, investigating incidents, managing change, building systems, leading people, controlling records and resources, and interpreting data.",
    focus: ["Performance management", "EHS culture", "Incident investigation", "Management of Change", "System safety", "Audits & standards", "Leadership & data"],
    skills: [
      "Move from observations and incident data to measurable corrective action and improvement.",
      "Connect leadership, accountability, project management, budgeting, documentation, and EHS system requirements.",
      "Interpret safety data instead of treating a single metric as the whole picture.",
    ],
    tasks: [
      "Compare organizational performance with established benchmarks and identify gaps.",
      "Use performance standards to determine an appropriate plan of action.",
      "Measure, analyze, and improve EHS culture.",
      "Select incident-investigation techniques, identify root causes, and apply corrective actions.",
      "Apply Management of Change before, during, and after a change.",
      "Recognize system-safety methods such as fault trees, FMEA, Safety Case approaches, and risk summation.",
      "Evaluate leading and lagging indicators and recognize EHS management and audit systems.",
      "Build plans, systems, policies, document-retention practices, budgets, leadership approaches, and project-management structures.",
      "Analyze and interpret exposure, release, sampling, statistical, probability, and Pareto data.",
    ],
  },
  3: {
    color: "red",
    icon: "◇",
    tagline: "Make risk visible, ranked, and actionable.",
    summary:
      "CSP-11 expects safety professionals to evaluate risk systematically, select mitigation strategies, understand financial risk treatment, and keep risk under active review.",
    focus: ["Risk evaluation", "Hazard analysis", "Hierarchy of Controls", "Financial risk", "Risk monitoring", "Emergency & fire risk"],
    skills: [
      "Separate hazard identification from risk analysis and risk evaluation.",
      "Prioritize controls using a defensible, risk-based decision process.",
      "Understand avoidance, retention, sharing, transfer, loss prevention, and loss reduction.",
    ],
    tasks: [
      "Apply the safety risk process: identify, analyze, evaluate, monitor, and communicate risk.",
      "Apply risk strategies to EHS hazards using risk analysis, JHA/PHA concepts, and the hierarchy of controls.",
      "Differentiate financial risk treatments including avoidance, retention, sharing, transfer, prevention, and reduction.",
      "Identify, rank, and monitor risk in areas such as emergency preparedness, fire prevention, occupational health, hazardous materials, and environmental compliance.",
    ],
  },
  4: {
    color: "orange",
    icon: "✦",
    tagline: "Prepare before the incident becomes the test.",
    summary:
      "Emergency Management covers preparedness, response, recovery, fire protection, hazardous-material transportation/security, and workplace violence prevention.",
    focus: ["Emergency Response Plans", "Incident Command", "Business continuity", "Fire protection", "Hazmat movement", "Workplace violence"],
    skills: [
      "Build an emergency response framework that works before, during, and after an event.",
      "Connect incident command with continuity and recovery decisions.",
      "Recognize the purpose of prevention, protection, detection, suppression, and safe movement of hazardous materials.",
    ],
    tasks: [
      "Create, use, and maintain Emergency Response Plans for credible emergencies and disruptive events.",
      "Describe disaster response and recovery elements including incident command, business continuity, and contingency planning.",
      "Identify fire prevention, protection, and suppression system components.",
      "Prepare safe transportation and security procedures for hazardous materials.",
      "Implement workplace violence prevention programs.",
    ],
  },
  5: {
    color: "green",
    icon: "♻",
    tagline: "Prevent releases. Manage what remains.",
    summary:
      "Environmental Management focuses on pollution prevention, hazardous materials and waste, sustainability, and the effect of environmental issues on organizations and communities.",
    focus: ["Pollution prevention", "Hazardous materials", "Waste management", "Sustainability", "Environmental impacts", "ESG"],
    skills: [
      "Prefer prevention and containment over cleanup after a release.",
      "Distinguish hazardous-material management from broader waste-management controls.",
      "Connect environmental decisions with sustainability and organizational impact.",
    ],
    tasks: [
      "Describe environmental protection and pollution-prevention programs such as spill containment and abatement.",
      "Apply procedures for hazardous-material classification, storage, handling, policy, security, and hazardous-waste disposal.",
      "Apply waste-management practices for universal waste, recycling, cleanup, labeling, and remediation.",
      "Apply sustainability principles such as reduce, reuse, recycle, and responsible supply-chain choices.",
      "Describe organizational impacts from aging infrastructure, asbestos, air pollution, climate change, and ESG issues.",
    ],
  },
  6: {
    color: "teal",
    icon: "◉",
    tagline: "Measure the exposure before choosing the control.",
    summary:
      "This domain combines occupational hygiene with applied science: exposure assessment, public health, toxicology, ergonomics, chemistry, and physics.",
    focus: ["Exposure assessment", "Industrial hygiene", "Public health", "Toxicology", "Ergonomics", "Chemistry & physics"],
    skills: [
      "Anticipate, recognize, evaluate, and control occupational exposures using measurement and sampling.",
      "Translate toxicology and epidemiology concepts into practical exposure-control decisions.",
      "Use chemistry and physics concepts for containment, storage, energy, force, and other calculations.",
    ],
    tasks: [
      "Evaluate occupational exposures using measurement, sampling, and analysis for chemical, physical, biological, and environmental hazards.",
      "Apply public-health principles including epidemiology, infectious disease, risk factors, and statistical interpretation.",
      "Use toxicology concepts and exposure information to develop control and risk-mitigation plans.",
      "Evaluate ergonomics and human factors including body mechanics, lifting, vibration, anthropometrics, visual acuity, and fatigue.",
      "Apply chemistry to containment-volume and hazardous-material storage calculations.",
      "Apply physics concepts involving forms of energy, weights, forces, and stresses.",
    ],
  },
  7: {
    color: "purple",
    icon: "◎",
    tagline: "Make competence observable, not assumed.",
    summary:
      "Training is the domain for needs assessment, program design, implementation, effectiveness, delivery methods, AI-supported learning, coaching, and adult-learning principles.",
    focus: ["Needs assessment", "Competency", "Program design", "Effectiveness", "AI & coaching", "Adult learning"],
    skills: [
      "Define the gap between required competence and current worker capability.",
      "Choose delivery methods that fit the learner, task, risk, and environment.",
      "Verify effectiveness through evidence such as assessments, demonstrations, feedback, and workplace performance.",
    ],
    tasks: [
      "Assess worker training needs, competencies, and qualifications.",
      "Develop training programs and materials for different learning styles and delivery settings.",
      "Implement training using a continuous-improvement model.",
      "Determine training effectiveness through surveys, workplace compliance, feedback, assessments, demonstrations, and quizzes.",
      "Apply education and training methods including classroom, online, simulation, computer-based learning, AI, coaching, and on-the-job training.",
      "Apply adult-learning principles across visual, auditory, reading/writing, and kinesthetic preferences.",
    ],
  },
} as const;

export type CspDomainId = keyof typeof CSP_DOMAIN_NAMES;
