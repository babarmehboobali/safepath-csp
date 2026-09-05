export type BlueprintTask = {
  code: string;
  domain: number;
  weightPercent: number;
  title: string;
  classIds: number[];
};

/**
 * CSP-11 blueprint coverage map for the curriculum registry.
 * The task codes are the published blueprint task identifiers; class IDs are
 * internal curriculum modules that reinforce each task.
 */
export const BLUEPRINT_TASKS: BlueprintTask[] = [
  { code: "D1.01", domain: 1, weightPercent: 25, title: "Describe the principles of minimizing hazards using Prevention-Through-Design", classIds: [1, 2, 116] },
  { code: "D1.02", domain: 1, weightPercent: 25, title: "Apply the principles of process safety", classIds: [3, 87, 94, 118] },
  { code: "D1.03", domain: 1, weightPercent: 25, title: "Evaluate common workplace hazards", classIds: [4, 5, 6, 7, 8, 9, 10, 80, 82, 93, 117] },
  { code: "D1.04", domain: 1, weightPercent: 25, title: "Evaluate facility life safety features", classIds: [11, 102] },
  { code: "D1.05", domain: 1, weightPercent: 25, title: "Describe fleet safety principles", classIds: [12] },
  { code: "D1.06", domain: 1, weightPercent: 25, title: "Evaluate materials handling methods and controls", classIds: [13, 14, 15, 114] },
  { code: "D1.07", domain: 1, weightPercent: 25, title: "Evaluate the use of tools, machines, and equipment", classIds: [16, 79, 110] },

  { code: "D2.01", domain: 2, weightPercent: 25, title: "Compare performance against established benchmarks", classIds: [17, 97, 106] },
  { code: "D2.02", domain: 2, weightPercent: 25, title: "Analyze performance standards to determine plan of action", classIds: [18] },
  { code: "D2.03", domain: 2, weightPercent: 25, title: "Determine how to measure, analyze, and improve EHS culture", classIds: [19] },
  { code: "D2.04", domain: 2, weightPercent: 25, title: "Determine appropriate incident investigation techniques and apply corrective actions", classIds: [20, 21, 105, 119] },
  { code: "D2.05", domain: 2, weightPercent: 25, title: "Describe the Management of Change process", classIds: [22] },
  { code: "D2.06", domain: 2, weightPercent: 25, title: "Describe system safety analysis techniques", classIds: [23, 24, 25, 86, 91, 104, 113, 120] },
  { code: "D2.07", domain: 2, weightPercent: 25, title: "Evaluate leading and lagging indicators", classIds: [26, 106] },
  { code: "D2.08", domain: 2, weightPercent: 25, title: "Recognize safety, health, and environmental management and audit systems", classIds: [27, 28, 29, 30, 112] },
  { code: "D2.09", domain: 2, weightPercent: 25, title: "Describe required components for plans, systems, and policies", classIds: [31] },
  { code: "D2.10", domain: 2, weightPercent: 25, title: "Utilize document retention or management principles", classIds: [32, 85] },
  { code: "D2.11", domain: 2, weightPercent: 25, title: "Apply budgeting, finance, and economic analysis techniques and principles", classIds: [33, 98] },
  { code: "D2.12", domain: 2, weightPercent: 25, title: "Differentiate management leadership techniques", classIds: [34, 96, 129] },
  { code: "D2.13", domain: 2, weightPercent: 25, title: "Apply project management principles and techniques", classIds: [35] },
  { code: "D2.14", domain: 2, weightPercent: 25, title: "Analyze and/or interpret data", classIds: [36, 37, 38, 90, 130] },

  { code: "D3.01", domain: 3, weightPercent: 15, title: "Apply general principles of the safety risk evaluation process", classIds: [39] },
  { code: "D3.02", domain: 3, weightPercent: 15, title: "Apply risk management strategies to identify and mitigate EHS hazards", classIds: [40, 41, 42] },
  { code: "D3.03", domain: 3, weightPercent: 15, title: "Differentiate financial risk mitigation strategies", classIds: [44, 45, 121] },
  { code: "D3.04", domain: 3, weightPercent: 15, title: "Apply risk analysis process of identifying, ranking, and monitoring", classIds: [43, 46] },

  { code: "D4.01", domain: 4, weightPercent: 9, title: "Create, employ, and maintain an Emergency Response Plan", classIds: [47, 88] },
  { code: "D4.02", domain: 4, weightPercent: 9, title: "Describe the elements in disaster response and recovery", classIds: [48, 49, 54, 115] },
  { code: "D4.03", domain: 4, weightPercent: 9, title: "Identify key components of fire prevention, protection, and suppression systems", classIds: [50, 51, 95, 103, 108, 122] },
  { code: "D4.04", domain: 4, weightPercent: 9, title: "Prepare procedures for the safe transportation and security of hazardous materials", classIds: [52] },
  { code: "D4.05", domain: 4, weightPercent: 9, title: "Implement a workplace violence prevention program", classIds: [53] },

  { code: "D5.01", domain: 5, weightPercent: 6, title: "Describe environmental protection and pollution prevention programs", classIds: [55, 107, 111, 123] },
  { code: "D5.02", domain: 5, weightPercent: 6, title: "Identify procedures used to manage hazardous materials", classIds: [56] },
  { code: "D5.03", domain: 5, weightPercent: 6, title: "Identify procedures used to manage waste", classIds: [57, 58] },
  { code: "D5.04", domain: 5, weightPercent: 6, title: "Determine sustainability principles and practices", classIds: [59] },
  { code: "D5.05", domain: 5, weightPercent: 6, title: "Describe the impact of environmental issues", classIds: [60] },

  { code: "D6.01", domain: 6, weightPercent: 10, title: "Anticipate, recognize, evaluate, and control occupational exposures", classIds: [61, 62, 63, 64, 65, 66, 67, 81, 83, 84, 92, 101, 124, 125] },
  { code: "D6.02", domain: 6, weightPercent: 10, title: "Understand principles of public health as applicable", classIds: [99] },
  { code: "D6.03", domain: 6, weightPercent: 10, title: "Apply toxicology principles to create exposure control plans and develop risk mitigation plans", classIds: [68, 69] },
  { code: "D6.04", domain: 6, weightPercent: 10, title: "Evaluate principles related to ergonomics and human factors", classIds: [70, 109, 126] },
  { code: "D6.05", domain: 6, weightPercent: 10, title: "Apply chemistry principles to calculate required containment volumes and hazardous materials storage requirements", classIds: [71] },
  { code: "D6.06", domain: 6, weightPercent: 10, title: "Apply core concepts in physics", classIds: [72] },

  { code: "D7.01", domain: 7, weightPercent: 10, title: "Describe the needs assessment process to determine worker training, competencies, and qualifications", classIds: [73] },
  { code: "D7.02", domain: 7, weightPercent: 10, title: "Develop training programs with training materials to address various learning styles", classIds: [100] },
  { code: "D7.03", domain: 7, weightPercent: 10, title: "Describe how to implement training programs utilizing the Continuous Improvement model", classIds: [76, 89, 128] },
  { code: "D7.04", domain: 7, weightPercent: 10, title: "Determine the effectiveness of training programs", classIds: [77, 127] },
  { code: "D7.05", domain: 7, weightPercent: 10, title: "Demonstrate working knowledge of education and training methods and techniques", classIds: [75, 78] },
  { code: "D7.06", domain: 7, weightPercent: 10, title: "Understand adult learning principles", classIds: [74, 127] },
];

export const TASKS_WITHOUT_DEDICATED_CLASS = BLUEPRINT_TASKS.filter((task) => task.classIds.length === 0);

export function getBlueprintTask(code: string): BlueprintTask | undefined {
  return BLUEPRINT_TASKS.find((task) => task.code === code);
}

export function classesForBlueprintTask(code: string): number[] {
  return getBlueprintTask(code)?.classIds ?? [];
}
