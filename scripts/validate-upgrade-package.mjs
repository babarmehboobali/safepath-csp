#!/usr/bin/env node
/** Validate an extracted SafePath CSP upgrade package before database import.
 * Usage: node scripts/validate-upgrade-package.mjs ./upgrade
 * This is deliberately a quality gate: invalid/template-heavy content is not imported as learner-facing exam content.
 */
import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

const root = process.argv[2] ?? "upgrade";
const files = await readdir(root);
const jsonFiles = files.filter((f) => f.endsWith(".json"));
const report = { files: jsonFiles.length, datasets: [], errors: [], warnings: [] };

const norm = (value) => String(value ?? "").toLowerCase().replace(/\\s+/g, " ").replace(/[^a-z0-9 ]/g, "").trim();

for (const file of jsonFiles) {
  const path = join(root, file);
  let data;
  try { data = JSON.parse(await readFile(path, "utf8")); }
  catch (error) { report.errors.push(`${file}: invalid JSON (${error.message})`); continue; }

  const questions = Array.isArray(data.questions) ? data.questions : [];
  const cards = Array.isArray(data.cards) ? data.cards : [];
  const exams = Array.isArray(data.exams) ? data.exams : [];
  const rows = questions.length ? questions : cards;
  const idField = questions.length ? "question_id" : cards.length ? "card_id" : null;
  const ids = idField ? rows.map((r) => r[idField]) : [];
  const duplicateIds = ids.length - new Set(ids).size;
  const stems = questions.map((q) => norm(q.question ?? q.stem));
  const duplicateStems = stems.length - new Set(stems).size;
  const answerCounts = {};
  for (const q of questions) answerCounts[q.correct_option] = (answerCounts[q.correct_option] ?? 0) + 1;
  const missing = questions.filter((q) => !q.question || !q.options || !q.correct_option || !q.rationale).length;
  const totalExamQuestions = exams.reduce((n, e) => n + (Array.isArray(e.questions) ? e.questions.length : 0), 0);

  const item = { file, questions: questions.length, cards: cards.length, exams: exams.length, examQuestions: totalExamQuestions, duplicateIds, duplicateStems, missingFields: missing, answerCounts };
  report.datasets.push(item);

  if (duplicateIds) report.errors.push(`${file}: ${duplicateIds} duplicate IDs`);
  if (duplicateStems) report.errors.push(`${file}: ${duplicateStems} exact duplicate normalized question stems`);
  if (missing) report.errors.push(`${file}: ${missing} questions missing required fields`);
  if (questions.length && Object.keys(answerCounts).length < 4) report.errors.push(`${file}: correct-answer distribution has fewer than four answer positions`);
  if (questions.length && Math.max(...Object.values(answerCounts)) === questions.length) report.errors.push(`${file}: every question uses the same correct-answer position`);
}

console.log(JSON.stringify(report, null, 2));
if (report.errors.length) process.exitCode = 2;
