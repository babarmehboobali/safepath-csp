# SafePath Learning Engine — 2026 Product Specification

## Product goal

SafePath is not optimized for maximum question count. It is optimized for durable CSP-11 knowledge, applied judgment, retention and exam readiness.

## Evidence base

The learning architecture prioritizes retrieval practice, distributed/spaced practice, interleaving, elaboration/self-explanation, concrete examples and dual coding. A review in *Teaching the science of learning* identifies these as supported cognitive strategies; a 2024 systematic review in health-professions education found significant benefits in 43 of 63 experiments involving distributed and/or retrieval practice. Interleaved retrieval practice has also shown durable benefits in science learning.

## Competitive benchmark

### BCSP examCORE
- Blueprint-grounded, SME-developed content.
- Pre/post assessment.
- Videos, exercises, challenge questions.
- 1,000+ CSP questions.
- Strength: authoritative alignment and structured instruction.

### Pocket Prep
- 1,300 CSP questions across seven subjects.
- Missed Questions, Weakest Subject, Level Up, Timed Quiz, Build Your Own and Mock Exam modes.
- Strength: excellent practice-loop UX and progress feedback.

### Candidate-reported behavior
Recent 2025–2026 candidate discussions repeatedly emphasize using a blueprint, understanding concepts rather than memorizing questions, reviewing weak areas, doing repeated mocks and using multiple resources. These reports are directional user evidence, not scientific proof of exam content.

## SafePath differentiator

SafePath should combine the strongest elements above while adding an explicit error-intelligence and mastery loop:

`Blueprint → competency → concept → retrieval → feedback → error classification → repair → spaced retrieval → interleaving → simulation → readiness`

## Error taxonomy

1. Knowledge gap
2. Misapplication
3. Distractor trap
4. Calculation/unit error
5. Question-reading error
6. Risk-priority error
7. Overconfidence
8. Slow reasoning

## Mastery

A topic is not complete merely because a learner opened the lesson or answered one set correctly. Mastery evidence should require:

- at least 10 attempts
- at least 3 separate study sessions
- >=85% overall accuracy
- >=85% recent accuracy
- >=3 applied/scenario demonstrations
- acceptable confidence calibration

These are SafePath product thresholds, not BCSP requirements.

## Learning modes

### Learn
Short concept explanation, concrete example, diagram, one retrieval check.

### Practice
Immediate feedback with explanation and distractor analysis.

### Repair
Target the reason for the error, then retry a different item after a short delay.

### Interleave
Mix related CSP concepts once basic competence exists.

### Challenge
Higher difficulty, ambiguous scenarios and competing controls.

### Mock
Blueprint-weighted exam simulation with feedback withheld until submission.

## Spacing

Default review ladder: 1, 3, 7, 14, 30, 60, 120 days. The scheduler may shorten or extend intervals based on performance.

## Confidence calibration

Ask confidence before revealing the answer. High-confidence misses are treated as overconfidence evidence and are reviewed differently from low-confidence misses.

## Exam realism

Practice difficulty percentages are SafePath training controls, not official BCSP distributions. Mock exams should respect the current CSP-11 blueprint and should not claim to reproduce undisclosed BCSP scoring algorithms.

## Content quality gate

External question packages must never be imported because they increase volume. Required checks include:

- duplicate IDs
- duplicate stems
- missing options/rationales
- duplicate options
- answer-position balance
- suspicious answer entropy
- generic/template stems
- shallow rationales
- blueprint/task mapping
- reference/source mapping
- SME review before production release

## External package decision

The supplied 2,100-practice / 560-diagnostic / 1,200-mock package is not approved for direct learner-facing import. Its adaptive metadata and reference ideas can inform SafePath architecture, but repetitive/template-heavy question content must pass the quality gate and substantive review first.

## Product success metrics

Track:

- delayed retention, not only immediate score
- first-attempt vs repeat accuracy
- confidence calibration
- time to correct decision
- error-type reduction
- mastery durability after 7/30/60 days
- domain and competency coverage
- mock performance trend
- readiness confidence interval rather than a single unsupported pass prediction
