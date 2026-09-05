#!/usr/bin/env node
/** Validate an extracted SafePath CSP upgrade package before database import.
 * Usage: node scripts/validate-upgrade-package.mjs ./upgrade
 * This gate rejects repetitive, template-heavy, poorly balanced or weakly explained content.
 */
import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

const root = process.argv[2] ?? "upgrade";
const files = await readdir(root);
const jsonFiles = files.filter((f) => f.endsWith(".json"));
const report = { files: jsonFiles.length, datasets: [], errors: [], warnings: [] };

const norm = (value) => String(value ?? "").toLowerCase().replace(/\s+/g, " ").replace(/[^a-z0-9 ]/g, "").trim();
const text = (value) => String(value ?? "").trim();

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
  const missing = questions.filter((q) => !text(q.question) || !Array.isArray(q.options) || q.options.length < 4 || !q.correct_option || !text(q.rationale)).length;
  const totalExamQuestions = exams.reduce((n, e) => n + (Array.isArray(e.questions) ? e.questions.length : 0), 0);
  const shortStems = questions.filter((q) => text(q.question ?? q.stem).length < 35).length;
  const shortRationales = questions.filter((q) => text(q.rationale).length < 60).length;
  const genericStemPatterns = questions.filter((q) => /action should be prioritized first|which answer is correct|what is the best answer\??$/i.test(text(q.question ?? q.stem))).length;
  const optionDuplicates = questions.filter((q) => { const opts = (q.options ?? []).map(norm); return opts.length !== new Set(opts).size; }).length;
  const answerPositionEntropy = Object.values(answerCounts).length ? Object.values(answerCounts).reduce((sum, n) => { const p = n / questions.length; return sum - p * Math.log2(p); }, 0) : 0;

  const item = { file, questions: questions.length, cards: cards.length, exams: exams.length, examQuestions: totalExamQuestions, duplicateIds, duplicateStems, missingFields: missing, shortStems, shortRationales, genericStemPatterns, optionDuplicates, answerCounts, answerPositionEntropy: Number(answerPositionEntropy.toFixed(3)) };
  report.datasets.push(item);

  if (duplicateIds) report.errors.push(`${file}: ${duplicateIds} duplicate IDs`);
  if (duplicateStems) report.errors.push(`${file}: ${duplicateStems} exact duplicate normalized question stems`);
  if (missing) report.errors.push(`${file}: ${missing} questions missing required fields`);
  if (optionDuplicates) report.errors.push(`${file}: ${optionDuplicates} questions contain duplicate options`);
  if (questions.length && Object.keys(answerCounts).length < 4) report.errors.push(`${file}: correct-answer distribution has fewer than four answer positions`);
  if (questions.length && Math.max(...Object.values(answerCounts)) === questions.length) report.errors.push(`${file}: every question uses the same correct-answer position`);
  if (questions.length && duplicateStems / questions.length > 0.02) report.errors.push(`${file}: duplicate-stem rate exceeds 2% quality threshold`);
  if (questions.length && shortRationales / questions.length > 0.10) report.errors.push(`${file}: more than 10% of rationales are too short to teach the concept`);
  if (questions.length && genericStemPatterns / questions.length > 0.05) report.errors.push(`${file}: generic/template stem rate exceeds 5%`);
  if (questions.length && answerPositionEntropy < 1.5) report.errors.push(`${file}: answer-position distribution is suspiciously predictable`);
  if (questions.length && shortStems / questions.length > 0.20) report.warnings.push(`${file}: more than 20% of stems are very short; review for insufficient context`);
}

console.log(JSON.stringify(report, null, 2));
if (report.errors.length) process.exitCode = 2;
