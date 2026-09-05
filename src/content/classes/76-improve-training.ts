import { contrast, exam, mustScore, stemIfThen, traps, type ClassFields, type ClassItem } from "./types";

const T = "CSP-11 D7.03";

export const classFields: ClassFields = {
  hook: "After a failed drill, the team wants to “improve training” by adding 40 slides and a mandatory retake of the same CBT. The job aid is wrong and the prop is broken. You are the CSP. The question is what to change in the system — not how to lengthen the monologue.",
  hookOilGas: `After a failed well-control drill, the team wants to âimprove trainingâ by adding 40 slides and a retake of the same CBT. The isolation job aid is wrong and the prop is broken. You are the CSP. The question is what to change in the system â not how to lengthen the monologue.`,
  hookConstruction: `After a failed rescue drill, the team wants to âimprove trainingâ by adding 40 slides and a retake of the same CBT. The haul-system job aid is wrong and the prop is broken. You are the CSP. The question is what to change in the system â not how to lengthen the monologue.`,
  rule: "Improve training by attacking the diagnosed gap: content error, method mismatch, practice/feedback missing, job aid/tools, facilitator, or the work design itself. More minutes of the same failed method is not improvement. If two answers work, take higher hierarchy / system / design (fix the job/prop), then restyle the residual learning.",
  modelCaption: "Loop: EVAL evidence → GAP type → CHANGE (design/method/aid/practice) → re-eval. A box “+40 slides” tagged NOT IMPROVEMENT. Caption: change the cause, not the runtime.",
  workedCase: "Drill fail: crew couldn’t assemble the rescue haul. Root: job aid steps out of order, no practice with the real device, CBT was trivia. Improve: correct the aid, structured practice, observe performance. Not: 40 more slides on the history of rope. If the davit is undersized, that’s design — don’t train around it.",
  brief: `Improve training by attacking the diagnosed gap: content error, method mismatch, practice/feedback missing, job aid/tools, facilitator, or the work design itself. More minutes of the same failed method is not improvement. If two answers work, take higher hierarchy / system / design (fix the job/prop), then restyle the residual learning. If two answers work, take higher hierarchy / system / design.`,
  standard: `Rule
Improve training by attacking the diagnosed gap: content error, method mismatch, practice/feedback missing, job aid/tools, facilitator, or the work design itself. More minutes of the same failed method is not improvement. If two answers work, take higher hierarchy / system / design (fix the job/prop), then restyle the residual learning. Hold the last sentence as a freeze check: it can close a higher control without inventing a new hierarchy. If two answers work, take higher hierarchy / system / design. Field move
After a failed drill, the team wants to âimprove trainingâ by adding 40 slides and a mandatory retake of the same CBT. The job aid is wrong and the prop is broken. You are the CSP. The question is what to change in the system â not how to lengthen the monologue. Oil-and-gas skin: After a failed well-control drill, the team wants to âimprove trainingâ by adding 40 slides and a retake of the same CBT. The isolation job aid is wrong and the prop is broken. You are the CSP. Construction skin: After a failed rescue drill, the team wants to âimprove trainingâ by adding 40 slides and a retake of the same CBT. The haul-system job aid is wrong and the prop is broken. You are the CSP. Work the case: Drill fail: crew couldnât assemble the rescue haul. Root: job aid steps out of order, no practice with the real device, CBT was trivia. Improve: correct the aid, structured practice, observe performance. Not: 40 more slides on the history of rope. If the davit is undersized, thatâs design â donât train around it. Classic traps: Adding slides/time as the only improvement.; Retaking the same CBT that didn’t predict the drill fail.; Training around a broken/wrong tool instead of fixing the tool.. Redraw the decision sequence before looking at options. Cost and convenience will sell a lower control that looks busy. Exam
If two answers work, take higher hierarchy / system / design. Read the last sentence for constraints that close a higher control. Attractive wrong answers are usually competent lower-row programs for improve training. Verify whether a higher system or design fix is still open. Contrast labels: Improve is actually Change the cause: aid, method, practice, design; Lengthen is actually More of the same — not improvement; Retake same CBT is actually Same evidence, same miss; Job aid / prop is actually Part of the performance system — fix them; Work redesign is actually Sometimes the “training problem” is the job. If the stem shows only smile sheets guide improvement, pick add learning/behavior/results measures. If the stem shows field procedure changed, pick update training to match. If the stem shows training pushes PPE while engineering open, pick correct the hierarchy message. If the stem shows two answers work, pick higher hierarchy / system / design. If the stem shows incidents show skill decay, pick increase practice/refresher frequency. Do not let schedule pressure invert the hierarchy. When capital or authority remains, spend it on the highest remaining system fix, then use administrative controls and PPE only for residual risk. Name the open control and the verification step before you pick a letter.`,
  deep: `Failed drill: add 40 slides or fix the job aid/prop? What is “improve” sits in CSP-11 Domain 7 Training and Competency. The exam tests whether you apply the rule when a package already looks complete. Core rule: Improve training by attacking the diagnosed gap: content error, method mismatch, practice/feedback missing, job aid/tools, facilitator, or the work design itself. More minutes of the same failed method is not improvement. If two answers work, take higher hierarchy / system / design (fix the job/prop), then restyle the residual learning. Field context: After a failed drill, the team wants to âimprove trainingâ by adding 40 slides and a mandatory retake of the same CBT. The job aid is wrong and the prop is broken. You are the CSP. The question is what to change in the system â not how to lengthen the monologue. The oil-and-gas skin shifts the same decision into production pressure: After a failed well-control drill, the team wants to âimprove trainingâ by adding 40 slides and a retake of the same CBT. The isolation job aid is wrong and the prop is broken. You are the CSP. The construction skin shifts it into schedule and trade stacking: After a failed rescue drill, the team wants to âimprove trainingâ by adding 40 slides and a retake of the same CBT. The haul-system job aid is wrong and the prop is broken. You are the CSP. Model caption for this class: Loop: EVAL evidence â GAP type â CHANGE (design/method/aid/practice) â re-eval. A box â+40 slidesâ tagged NOT IMPROVEMENT. Caption: change the cause, not the runtime. Use it as a redraw before options, not as decoration. Must-score teaching for this topic: (1) Improve training using evaluation data, learner feedback, incident trends, and audit findings. Say it in one sentence on teach-back, then name what evidence would falsify it on the stem. (2) Kirkpatrick-style levels: reaction, learning, behavior, results — climb beyond smile sheets. (3) Fix content that conflicts with field procedures. (4) Update after MoC and regulatory change. (5) Remove modules that train the wrong control preference (PPE-first myths). (6) Pilot changes before full rollout when risk is high. (7) Improvement can conclude training is the wrong intervention. (8) Exam default: if two answers work, take higher hierarchy / system / design. Worked case walkthrough: Drill fail: crew couldnât assemble the rescue haul. Root: job aid steps out of order, no practice with the real device, CBT was trivia. Improve: correct the aid, structured practice, observe performance. Not: 40 more slides on the history of rope. If the davit is undersized, thatâs design â donât train around it. Losing answers usually polish a lower-row program while a higher system or design fix remains open. Circle the last-sentence freeze, name the open control, and state the verification step. Distractor patterns to reject: Adding slides/time as the only improvement.; Retaking the same CBT that didn’t predict the drill fail.; Training around a broken/wrong tool instead of fixing the tool.. Each looks busy; none climb the ranking when a higher control remains. Label discrimination: “Improve” is really Change the cause: aid, method, practice, design; “Lengthen” is really More of the same — not improvement; “Retake same CBT” is really Same evidence, same miss; “Job aid / prop” is really Part of the performance system — fix them; “Work redesign” is really Sometimes the “training problem” is the job. Stem-if-then map: if only smile sheets guide improvement → add learning/behavior/results measures; if field procedure changed → update training to match; if training pushes PPE while engineering open → correct the hierarchy message; if two answers work → higher hierarchy / system / design; if incidents show skill decay → increase practice/refresher frequency. Scoring favors evidence, owners, verification, and hierarchy-smart controls on improve training. Last-sentence constraints may freeze a higher control; then take the best remaining fix and verify it. Shared keys, shared instruments, and shared assumptions create false independence. If two answers work, take higher hierarchy / system / design. Hold that sentence once. Reject polished paperwork when a higher system or design fix remains. Calculator discipline still matters when numbers appear: pick the closest rounded value, use degrees unless the stem requires radians, and do not invent a formula sheet.`,
  cardFront: "Failed drill: add 40 slides or fix the job aid/prop? What is “improve”?",
  cardBack: "Improve the cause — method, practice, aid, or the job. More slides/retakes of the same CBT are not improvement. Study only — not allowed in the test center.",
  teachBackKey: "Pass if the sentence says improvement changes the diagnosed cause (aid/method/practice/design), not merely runtime or a retake of the same CBT.",
  trapsJson: traps(
    "Adding slides/time as the only improvement.",
    "Retaking the same CBT that didn’t predict the drill fail.",
    "Training around a broken/wrong tool instead of fixing the tool.",
  ),
  contrastJson: contrast([
    { looksLike: "Improve", actually: "Change the cause: aid, method, practice, design" },
    { looksLike: "Lengthen", actually: "More of the same — not improvement" },
    { looksLike: "Retake same CBT", actually: "Same evidence, same miss" },
    { looksLike: "Job aid / prop", actually: "Part of the performance system — fix them" },
    { looksLike: "Work redesign", actually: "Sometimes the “training problem” is the job" },
  ]),
  mustScoreJson: mustScore(
    "Improve training using evaluation data, learner feedback, incident trends, and audit findings.",
    "Kirkpatrick-style levels: reaction, learning, behavior, results \u2014 climb beyond smile sheets.",
    "Fix content that conflicts with field procedures.",
    "Update after MoC and regulatory change.",
    "Remove modules that train the wrong control preference (PPE-first myths).",
    "Pilot changes before full rollout when risk is high.",
    "Improvement can conclude training is the wrong intervention.",
    "Exam default: if two answers work, take higher hierarchy / system / design."
  ),
  stemIfThenJson: stemIfThen(
    { ifStem: "only smile sheets guide improvement", pick: "add learning/behavior/results measures" },
    { ifStem: "field procedure changed", pick: "update training to match" },
    { ifStem: "training pushes PPE while engineering open", pick: "correct the hierarchy message" },
    { ifStem: "two answers work", pick: "higher hierarchy / system / design" },
    { ifStem: "incidents show skill decay", pick: "increase practice/refresher frequency" },
  ),

  formulaSlug: null,
};

export const items: ClassItem[] = [
  exam(
    T,
    "Failed rescue drill. Plan: add 40 slides and retake the same CBT. Job aid is wrong; prop is broken. Best improvement?",
    [
      "Ship the 40 slides — runtime is quality.",
      "Fix the job aid and the prop, then structured practice with observation. Don’t lengthen the method that already failed.",
      "Retake CBT until the drill is waived.",
      "Buy AI seats instead of the prop.",
    ],
    1,
    "STEM: improve the cause (aid/prop/practice).",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a pharma suite changeover.",
      standardReference: "ANSI/ASSP Z490.1 training criteria (public)",
      fieldTakeaway: "Improve training by attacking the diagnosed gap: content error, method mismatch, practice/feedback missing, job aid/tools, facilitator, or the work design itself. More minutes of the same failed method is not improvem... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Last sentence: davit is undersized. Team adds a motivational poster hour. Comment?",
    [
      "Poster is PtD.",
      "Specify a correctly sized davit (design still open). Training hours do not raise capacity.",
      "Poster is 1910.66.",
      "Poster is Q=VA.",
    ],
    1,
    "HIER+STEM: last sentence left design open.",
    "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a warehouse second-shift startup.",
      standardReference: "ANSI/ASSP Z490.1 training criteria (public)",
      fieldTakeaway: "Improve training by attacking the diagnosed gap: content error, method mismatch, practice/feedback missing, job aid/tools, facilitator, or the work design itself. More minutes of the same failed method is not improvem... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Same CBT trivia predicted 100%; field skill 0%. Improvement move?",
    [
      "Harder trivia.",
      "Change the assessment and the practice to the skill (observe the task). The CBT was the wrong evidence.",
      "Shorter trivia.",
      "Hide the field data.",
    ],
    1,
    "STEM: method/evidence mismatch.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a grain elevator maintenance day.",
      standardReference: "ANSI/ASSP Z490.1 training criteria (public)",
      fieldTakeaway: "Improve training by attacking the diagnosed gap: content error, method mismatch, practice/feedback missing, job aid/tools, facilitator, or the work design itself. More minutes of the same failed method is not improvem... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Language was the fail. Team adds English slides. Status?",
    [
      "More English is improvement.",
      "Translate/plain-language the aid and practice in the crew’s language. Same-language-harder is not the diagnosed gap.",
      "AI chatbot in English is enough.",
      "Noise 5 dB will translate.",
    ],
    1,
    "STEM: diagnosed gap was language.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a hospital utility plant shutdown.",
      standardReference: "ANSI/ASSP Z490.1 training criteria (public)",
      fieldTakeaway: "Improve training by attacking the diagnosed gap: content error, method mismatch, practice/feedback missing, job aid/tools, facilitator, or the work design itself. More minutes of the same failed method is not improvem... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Facilitator unqualified on the haul system. Improvement?",
    [
      "More of their slides.",
      "Qualify/replace the coach; keep structured OJT. Slide count does not create a qualified coach.",
      "Let AI be the competent person.",
      "Skip observation.",
    ],
    1,
    "STEM: coach competence is part of delivery improvement.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a food packaging SKU change.",
      standardReference: "ANSI/ASSP Z490.1 training criteria (public)",
      fieldTakeaway: "Improve training by attacking the diagnosed gap: content error, method mismatch, practice/feedback missing, job aid/tools, facilitator, or the work design itself. More minutes of the same failed method is not improvem... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Wrong tool: FTA of the LMS color theme as the improvement plan. Comment?",
    [
      "Accept — FTA is ADDIE Act.",
      "TOOL: use eval evidence to change objectives/method/aids/design. Theme-color FTA is not instructional CAPA.",
      "Accept if RPN < 100.",
      "Accept if amber is #e4a11b.",
    ],
    1,
    "TOOL: FTA of theme ≠ improve training.",
    "TOOL",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a semiconductor tool install.",
      standardReference: "ANSI/ASSP Z490.1 training criteria (public)",
      fieldTakeaway: "Improve training by attacking the diagnosed gap: content error, method mismatch, practice/feedback missing, job aid/tools, facilitator, or the work design itself. More minutes of the same failed method is not improvem... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Two funded moves: extra umbrella AND extra slide licenses; the broken prop is unfunded. Pair and miss?",
    [
      "Avoid + reduce; slides are props.",
      "Transfer + content; missing Reduce (fix prop/aid/practice).",
      "Two CBTs.",
      "PEL + TLV complete improvement.",
    ],
    1,
    "FIN: insurance plus slides skip the performance system.",
    "FIN",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at an offshore fabrication night shift.",
      standardReference: "ANSI/ASSP Z490.1 training criteria (public)",
      fieldTakeaway: "Improve training by attacking the diagnosed gap: content error, method mismatch, practice/feedback missing, job aid/tools, facilitator, or the work design itself. More minutes of the same failed method is not improvem... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Drill injury hospitalization; team files only “training CAPA: +40 slides.” OSHA clock?",
    [
      "CAPA slides are the 8-hour clock.",
      "Hospitalization: 24 hours to OSHA. Slide CAPA is not 1904.",
      "7 days because it was a drill.",
      "No clock if CBT scores were 100%.",
    ],
    1,
    "TIME: 24-hour hospitalization.",
    "TIME",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a municipal water-plant retrofit.",
      standardReference: "ANSI/ASSP Z490.1 training criteria (public)",
      fieldTakeaway: "Improve training by attacking the diagnosed gap: content error, method mismatch, practice/feedback missing, job aid/tools, facilitator, or the work design itself. More minutes of the same failed method is not improvem... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Workers say the job aid step 4 is physically impossible as written. Improve by?",
    [
      "Train them to try harder.",
      "Rewrite the aid and/or redesign the task so it is possible. Impossible steps are a design/aid problem.",
      "Add 40 slides on trying harder.",
      "AI-generate a pep talk.",
    ],
    1,
    "HIER/STEM: performance system vs pep.",
    "HIER",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a plastics compounding turnaround.",
      standardReference: "ANSI/ASSP Z490.1 training criteria (public)",
      fieldTakeaway: "Improve training by attacking the diagnosed gap: content error, method mismatch, practice/feedback missing, job aid/tools, facilitator, or the work design itself. More minutes of the same failed method is not improvem... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "Improvement cycle missing re-evaluation after the aid is fixed. Issue?",
    [
      "None — fix is self-proving.",
      "STEM: re-observe the drill/task. Improvement is not claimed until evidence moves.",
      "None if slides were added too.",
      "None if insurance paid.",
    ],
    1,
    "STEM: PDCA/eval after the change.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a Gulf Coast chemical terminal.",
      standardReference: "ANSI/ASSP Z490.1 training criteria (public)",
      fieldTakeaway: "Improve training by attacking the diagnosed gap: content error, method mismatch, practice/feedback missing, job aid/tools, facilitator, or the work design itself. More minutes of the same failed method is not improvem... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "AI rewrites the job aid overnight with a swapped PEL/TLV. Improve next by?",
    [
      "Ship — speed is quality.",
      "Human technical review (PELTLV risk). Faster drafts are not automatically better aids.",
      "Add 40 slides of the wrong OEL.",
      "Retake the old CBT.",
    ],
    1,
    "PELTLV: AI can inject legal/advisory swaps; review is the improvement.",
    "PELTLV",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a refinery coker outage.",
      standardReference: "ANSI/ASSP Z490.1 training criteria (public)",
      fieldTakeaway: "Improve training by attacking the diagnosed gap: content error, method mismatch, practice/feedback missing, job aid/tools, facilitator, or the work design itself. More minutes of the same failed method is not improvem... Verify the critical step before accepting a lower-tier control.",
    }
  ),
  exam(
    T,
    "You are the CSP reviewing a live decision at a bridge deck pour laydown yard. Operations proposes a convenience path. Using the class rule, which option is strongest? Focus: Best “improve training” rule.",
    [
      "Always double the hours.",
      "Change the diagnosed cause — method, practice, aid, coach, or the job — then re-eval. More of the same is not improvement.",
      "Always add AI.",
      "Always add trivia.",
    ],
    1,
    "STEM: the class rule.",
    "STEM",
    "Exam",
    {
      scenarioText: "You are the CSP reviewing a live decision at a bridge deck pour laydown yard.",
      standardReference: "ANSI/ASSP Z490.1 training criteria (public)",
      fieldTakeaway: "Improve training by attacking the diagnosed gap: content error, method mismatch, practice/feedback missing, job aid/tools, facilitator, or the work design itself. More minutes of the same failed method is not improvem... Verify the critical step before accepting a lower-tier control.",
    }
  ),
];

