/**
 * tests/localization.test.js - Comprehensive Dual-Language & Localization Tests
 */
const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('Running localization test suite...');

// 1. Validate content_en.js
const contentEnSrc = fs.readFileSync(path.join(__dirname, '../content_en.js'), 'utf8');
const SystemDesignDataEn = new Function(contentEnSrc + '; return SystemDesignDataEn;')();

assert(SystemDesignDataEn && SystemDesignDataEn.modules, 'content_en.js must export SystemDesignDataEn with modules');
assert.strictEqual(SystemDesignDataEn.modules.length, 10, 'content_en.js must have 10 modules');

// Verify module 1
const mod1 = SystemDesignDataEn.modules.find(m => m.id === 'module-1');
assert(mod1, 'Module 1 must exist');
assert(mod1.title.includes('In a Hurry'), 'Module 1 must have English title');
assert.strictEqual(mod1.sections.length, 4, 'Module 1 must have 4 sections');

// Verify module 3 has all 31 problems
const mod3 = SystemDesignDataEn.modules.find(m => m.id === 'module-3');
assert(mod3, 'Module 3 must exist');
assert.strictEqual(mod3.problems.length, 31, 'Module 3 must have all 31 problems');
mod3.problems.forEach((p, idx) => {
  assert(p.title, `Problem ${idx + 1} must have a title`);
  assert(p.l1 && p.l2 && p.l3, `Problem ${p.id} must have l1, l2, and l3 levels`);
  assert(p.calculations, `Problem ${p.id} must have calculations`);
});

// Verify module 8 has 7 studio challenges
const mod8 = SystemDesignDataEn.modules.find(m => m.id === 'module-8');
assert(mod8, 'Module 8 must exist');
assert.strictEqual(mod8.studioChallenges.length, 7, 'Module 8 must have 7 challenges');
mod8.studioChallenges.forEach(c => {
  assert(c.dataExchange && c.dataExchange.e2eRequestFlow, `Challenge ${c.id} must have e2eRequestFlow`);
});

// Verify module 9 has 5 algorithms
const mod9 = SystemDesignDataEn.modules.find(m => m.id === 'module-9');
assert(mod9, 'Module 9 must exist');
assert.strictEqual(mod9.algorithms.length, 5, 'Module 9 must have 5 algorithms');

console.log('✔ content_en.js successfully verified (10 modules, 31 problems, 3 studio challenges, 5 algorithms).');

// 2. Validate interview_questions_en.js
const iqEnSrc = fs.readFileSync(path.join(__dirname, '../interview_questions_en.js'), 'utf8');
const InterviewQuestionsDataEn = new Function(iqEnSrc + '; return InterviewQuestionsDataEn;')();

assert(Array.isArray(InterviewQuestionsDataEn), 'InterviewQuestionsDataEn must be an array');
assert.strictEqual(InterviewQuestionsDataEn.length, 37, 'InterviewQuestionsDataEn must have 37 questions');

InterviewQuestionsDataEn.forEach((q, idx) => {
  assert(q.id, `Question #${idx} must have an id`);
  assert(q.title && q.title.length > 5, `Question ${q.id} must have English title`);
  assert(q.question && q.question.length > 10, `Question ${q.id} must have English question text`);
  assert(q.answer && q.answer.length > 20, `Question ${q.id} must have English answer text`);
  assert(Array.isArray(q.hints) && q.hints.length > 0, `Question ${q.id} must have hints`);
});

console.log('✔ interview_questions_en.js successfully verified (37 complete English questions with hints & answers).');

// 3. Validate diagrams.js localization
const diagramsSrc = fs.readFileSync(path.join(__dirname, '../diagrams.js'), 'utf8');
const SystemDesignDiagrams = new Function(diagramsSrc + '; return SystemDesignDiagrams;')();

// Test English rendering
global.App = { currentLang: 'en' };
const svgEn = SystemDesignDiagrams.render('interviewTimeline');
assert(svgEn && svgEn.includes('Scope & Requirements Clarification'), 'Diagram SVG should contain English text');
assert(!/[\u0600-\u06FF]/.test(svgEn), 'Diagram SVG in English mode should not contain Arabic characters');

// Test Arabic rendering
global.App = { currentLang: 'ar' };
const svgAr = SystemDesignDiagrams.render('interviewTimeline');
assert(svgAr && /[\u0600-\u06FF]/.test(svgAr), 'Diagram SVG in Arabic mode should contain Arabic text');

console.log('✔ diagrams.js language-aware rendering successfully verified.');

console.log('\n🎉 ALL LOCALIZATION TESTS PASSED WITH 100% SUCCESS!');
