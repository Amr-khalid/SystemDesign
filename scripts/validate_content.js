const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');

console.log('Validating repository content & datasets...');

// 1. Validate interview_questions.json
const questionsPath = path.join(root, 'interview_questions.json');
if (!fs.existsSync(questionsPath)) {
  throw new Error('interview_questions.json not found');
}
const questionsData = JSON.parse(fs.readFileSync(questionsPath, 'utf8'));
if (!Array.isArray(questionsData) || questionsData.length === 0) {
  throw new Error('interview_questions.json must contain a non-empty array');
}

console.log(`✔ interview_questions.json valid: ${questionsData.length} questions parsed.`);

// 2. Validate content.js
const contentPath = path.join(root, 'content.js');
if (!fs.existsSync(contentPath)) {
  throw new Error('content.js not found');
}
const contentSource = fs.readFileSync(contentPath, 'utf8');
if (!contentSource.includes('SystemDesignData')) {
  throw new Error('SystemDesignData object declaration missing in content.js');
}

console.log('✔ content.js verified.');
console.log('✔ All content validation checks passed!');
