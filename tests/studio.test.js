const fs = require('fs');
const path = require('path');
const assert = require('assert');

// Load files
const contentEnSrc = fs.readFileSync(path.join(__dirname, '../content_en.js'), 'utf8');
const SystemDesignDataEn = new Function(contentEnSrc + '; return SystemDesignDataEn;')();

const contentArSrc = fs.readFileSync(path.join(__dirname, '../content.js'), 'utf8');
const SystemDesignData = new Function(contentArSrc + '; return SystemDesignData;')();

const diagramsSrc = fs.readFileSync(path.join(__dirname, '../diagrams.js'), 'utf8');
global.SystemDesignDiagrams = new Function(diagramsSrc + '; return SystemDesignDiagrams;')();

const appSrc = fs.readFileSync(path.join(__dirname, '../app.js'), 'utf8');
// Mock browser environment
const mockElem = {
  innerHTML: '',
  style: {},
  classList: { add: () => {}, remove: () => {} },
  querySelector: () => ({ textContent: '', addEventListener: () => {} }),
  querySelectorAll: () => [],
  addEventListener: () => {}
};
global.window = {
  location: { hash: '#module-8' },
  addEventListener: () => {},
  scrollTo: () => {}
};
global.document = {
  documentElement: { setAttribute: () => {} },
  getElementById: () => mockElem,
  querySelectorAll: () => []
};
global.localStorage = {
  getItem: (k) => (k === 'sd_lang' ? 'en' : '[]'),
  setItem: () => {}
};

const App = new Function(
  'SystemDesignData', 'SystemDesignDataEn', 'InterviewQuestionsData', 'InterviewQuestionsDataEn',
  appSrc + '; return App;'
)(SystemDesignData, SystemDesignDataEn, [], []);

// Test English Studio rendering for ALL 7 challenges
App.currentLang = 'en';
const mod8En = SystemDesignDataEn.modules.find(m => m.id === 'module-8');
const container = { innerHTML: '' };

mod8En.studioChallenges.forEach(ch => {
  App.activeStudioChallengeId = ch.id;
  try {
    App.renderStudioModule(mod8En, container, false, null, null);
    assert(container.innerHTML.includes(ch.appName), `Should render ${ch.appName}`);
    console.log(`✔ English Studio render OK: ${ch.id}`);
  } catch (err) {
    console.error(`✕ FAILED English Studio render: ${ch.id}`, err);
    process.exit(1);
  }
});

// Test Arabic Studio rendering for ALL 7 challenges
App.currentLang = 'ar';
const mod8Ar = SystemDesignData.modules.find(m => m.id === 'module-8');

mod8Ar.studioChallenges.forEach(ch => {
  App.activeStudioChallengeId = ch.id;
  try {
    App.renderStudioModule(mod8Ar, container, false, null, null);
    assert(container.innerHTML.includes(ch.appName), `Should render ${ch.appName}`);
    console.log(`✔ Arabic Studio render OK: ${ch.id}`);
  } catch (err) {
    console.error(`✕ FAILED Arabic Studio render: ${ch.id}`, err);
    process.exit(1);
  }
});

console.log('\n🎉 ALL 7 STUDIO CHALLENGES RENDER PERFECTLY IN BOTH LANGUAGES!');
