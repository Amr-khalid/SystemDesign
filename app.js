/**
 * app.js - Interactive Application Engine for System Design Mastery
 * Handles routing, sidebar toggle (open/close on desktop and mobile),
 * instant search, level filtering, interactive studio, interactive code lab,
 * and progress tracking.
 */

const App = {
  currentModuleId: 'module-1',
  activeLevelFilter: 'all', // 'all', '1', '2', '3'
  readModules: new Set(),
  activeStudioChallengeId: 'challenge-instapay',
  studioAnswers: {}, // key: `${challengeId}-${stepIndex}` -> optionIndex
  activeAlgoId: 'algo-lru',
  customCodeState: {}, // key: `${algoId}` -> edited code string
  activeQuizDifficultyFilter: 'all', // 'all', 'easy', 'medium', 'hard', 'expert'
  activeQuizCategoryFilter: 'all', // 'all', 'system-design', 'react', 'nextjs', 'express'
  openHints: new Set(),
  openAnswers: new Set(),
  currentLang: 'en',

  i18n: {
    ar: {
      brandTag: 'Enterprise Edition',
      searchPlaceholder: 'ابحث في المفاهيم والمسائل والتقنيات...',
      sidebarTitle: 'محتويات الموسوعة',
      progressLabel: 'معدل التقدم في المرجع',
      modulesUnit: 'أقسام',
      navGroupTitle: 'الأقسام التعليمية الرئيسية',
      moduleTag: (num) => `القسم ${num} من 10`,
      levelFilterLabel: 'تصفية المستويات:',
      allLevels: 'كافة المستويات',
      level1: 'المستوى 1 (الأساسيات)',
      level2: 'المستوى 2 (المعمارية)',
      level3: 'المستوى 3 (Staff+)',
      openAllSolutions: 'فتح كافة الحلول',
      collapseAll: 'طي الكل',
      markModuleRead: 'تحديد القسم كـ مكتمل ✓',
      unmarkModuleRead: 'إلغاء التحديد كـ مقروء',
      markStudioRead: 'تحديد الاستوديو كـ مكتمل ✓',
      markLabRead: 'تحديد المختبر كـ مكتمل ✓',
      prevModule: '← القسم السابق',
      nextModule: 'القسم التالي →',
      backToStart: 'العودة للبداية',
      diagramHeader: 'المخطط التوضيحي والمعماري للموضوع',
      sectionDiagram: 'المخطط التوضيحي للقسم',
      capstoneBadge: 'مثال تطبيقي كبير وشامل (Capstone Example)',
      scenarioLabel: 'السيناريو المطلوب:',
      showCapstoneSolution: 'عرض الحل المعماري الكامل والتفاصيل الهندسية',
      calcTitle: 'المتطلبات والحسابات التقديرية (Back-of-the-envelope)',
      l1Badge: 'المستوى 1 (الأساسيات): مسار البيانات المبدئي والتخزين',
      l2Badge: 'المستوى 2 (المعمارية): التوسع، الكاش، وتقسيم البيانات (Sharding)',
      l3Badge: 'المستوى 3 (Staff+ Edge Cases): التنافس العالي، مقاومة الأعطال، والإنتاج',
      caseBottleneck: 'التحدي وعنق الزجاجة (The Bottleneck)',
      caseSolution: 'المعمارية والحل الهندسي (The Architectural Solution)',
      caseInsight: 'درس الإنتاج (Production Insight):',
      // Module 10
      interviewTag: 'القسم 10 من 10: الاستعداد التام لمقابلات العمل',
      allTracks: 'جميع المسارات',
      reactTrack: 'محرك وداخليات React',
      nextTrack: 'معمارية Next.js',
      expressTrack: 'Express.js & Node Runtime',
      sdTrack: 'هندسة النظم الموزعة (Core SD)',
      questionsDisplayed: 'الأسئلة المعروضة',
      easyStat: 'المستوى التأسيسي (Easy)',
      medStat: 'المستوى المعماري (Medium)',
      hardStat: 'المستوى المتقدم (Hard)',
      expStat: 'مستوى الخبراء (Staff+)',
      allDifficulties: 'كافة درجات الصعوبة',
      diffEasy: 'سهل (Foundational)',
      diffMed: 'متوسط (Architectural)',
      diffHard: 'متقدم (Systems)',
      diffExp: 'خبير (Staff+)',
      openAllAnswers: 'فتح كافة الإجابات',
      questionNum: (idx) => `سؤال #${idx}`,
      interviewHints: (n) => `تلميحات توجيهية للمقابلة (${n} نقاط استرشادية)`,
      modelAnswerTitle: 'الإجابة المعمارية النموذجية الكاملة (Staff+ Model Answer)',
      keywordsLabel: 'الكلمات المفتاحية:',
      // Code Lab
      editorTitle: 'محرر الكود التفاعلي (Interactive JavaScript Editor)',
      resetCode: 'إعادة ضبط',
      copyCode: 'نسخ',
      runCode: 'تشغيل الكود (Run)',
      terminalTitle: 'نافذة المخرجات وسجلات التنفيذ (Execution Terminal)',
      statusReady: 'جاهز للتشغيل',
      clearTerminal: 'مسح الشاشة',
      runPrompt: '// اضغط على زر "تشغيل الكود (Run)" أو (Ctrl + Enter) لتشغيل الخوارزمية وملاحظة النتائج اللحظية...',
      // Search
      noResultsFor: (q) => `لم يتم العثور على نتائج مطابقة لـ "${q}"`,
      searchResultsTitle: (n) => `نتائج البحث (${n}):`,
      closeSearchResults: 'إغلاق نتائج البحث'
    },
    en: {
      brandTag: 'Enterprise Edition',
      searchPlaceholder: 'Search concepts, design problems, architectures...',
      sidebarTitle: 'Index of Modules',
      progressLabel: 'Overall Mastery Progress',
      modulesUnit: 'modules',
      navGroupTitle: 'Core Learning Curriculum',
      moduleTag: (num) => `Module ${num} of 10`,
      levelFilterLabel: 'Filter Levels:',
      allLevels: 'All Levels',
      level1: 'Level 1 (Foundations)',
      level2: 'Level 2 (Architecture)',
      level3: 'Level 3 (Staff+)',
      openAllSolutions: 'Open All Solutions',
      collapseAll: 'Collapse All',
      markModuleRead: 'Mark as Completed ✓',
      unmarkModuleRead: 'Unmark as Completed',
      markStudioRead: 'Mark Studio as Completed ✓',
      markLabRead: 'Mark Lab as Completed ✓',
      prevModule: '← Previous Module',
      nextModule: 'Next Module →',
      backToStart: 'Back to Start',
      diagramHeader: 'Architectural System Diagram',
      sectionDiagram: 'Topic Architecture Diagram',
      capstoneBadge: 'Comprehensive Capstone Case Study',
      scenarioLabel: 'Requirements Scenario:',
      showCapstoneSolution: 'Show Full Architectural Solution & Details',
      calcTitle: 'Capacity Planning & Calculations (Back-of-the-envelope)',
      l1Badge: 'Level 1 (Foundations): Initial Flow & Storage Engine',
      l2Badge: 'Level 2 (Architecture): Scaling, Caching & Partitioning',
      l3Badge: 'Level 3 (Staff+ Edge Cases): High Concurrency & Fault Tolerance',
      caseBottleneck: 'The Bottleneck & Constraints',
      caseSolution: 'The Architectural Solution',
      caseInsight: 'Production Insight:',
      // Module 10
      interviewTag: 'Module 10 of 10: Complete System Design Interview Bank',
      allTracks: 'All Tracks',
      reactTrack: 'React Internals & Engine',
      nextTrack: 'Next.js Architecture',
      expressTrack: 'Express & Node Runtime',
      sdTrack: 'Distributed Systems (Core SD)',
      questionsDisplayed: 'Questions Displayed',
      easyStat: 'Foundational (Easy)',
      medStat: 'Architectural (Medium)',
      hardStat: 'Advanced Systems (Hard)',
      expStat: 'Staff+ Deep Dive',
      allDifficulties: 'All Difficulties',
      diffEasy: 'Easy (Foundational)',
      diffMed: 'Medium (Architectural)',
      diffHard: 'Hard (Systems)',
      diffExp: 'Expert (Staff+)',
      openAllAnswers: 'Open All Answers',
      questionNum: (idx) => `Question #${idx}`,
      interviewHints: (n) => `Interview Guiding Hints (${n} points)`,
      modelAnswerTitle: 'Staff+ Architectural Model Answer',
      keywordsLabel: 'Key Technologies & Concepts:',
      // Code Lab
      editorTitle: 'Interactive JavaScript Editor',
      resetCode: 'Reset',
      copyCode: 'Copy',
      runCode: 'Run Code',
      terminalTitle: 'Execution Terminal & Logs',
      statusReady: 'Ready',
      clearTerminal: 'Clear Terminal',
      runPrompt: '// Press "Run Code" or (Ctrl + Enter) to execute and view real-time output...',
      // Search
      noResultsFor: (q) => `No matching results found for "${q}"`,
      searchResultsTitle: (n) => `Search Results (${n}):`,
      closeSearchResults: 'Close Search Results'
    }
  },

  t(key, ...args) {
    const langDict = this.i18n[this.currentLang] || this.i18n.ar;
    const val = langDict[key];
    if (typeof val === 'function') return val(...args);
    return val || key;
  },

  init() {
    this.loadTheme();
    this.loadLanguage();
    this.loadStoredProgress();
    this.loadSidebarState();
    this.bindEvents();
    this.renderSidebarNav();
    this.handleRoute();
    this.updateProgressBar();
  },

  // Load progress from localStorage
  loadStoredProgress() {
    try {
      const saved = localStorage.getItem('sd_read_modules');
      if (saved) {
        this.readModules = new Set(JSON.parse(saved));
      }
    } catch (e) {
      console.warn('Storage not available', e);
    }
  },

  saveProgress() {
    try {
      localStorage.setItem('sd_read_modules', JSON.stringify([...this.readModules]));
    } catch (e) {}
    this.updateProgressBar();
  },

  updateProgressBar() {
    const total = SystemDesignData.modules.length;
    const count = this.readModules.size;
    const pct = Math.round((count / total) * 100);
    const fillEl = document.getElementById('progressBarFill');
    const labelEl = document.getElementById('progressText');
    if (fillEl) fillEl.style.width = `${pct}%`;
    if (labelEl) labelEl.textContent = `${pct}% (${count}/${total} ${this.t('modulesUnit')})`;
  },

  loadTheme() {
    try {
      const savedTheme = localStorage.getItem('sd_theme') || 'dark';
      document.documentElement.setAttribute('data-theme', savedTheme);
    } catch (e) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  },

  loadLanguage() {
    try {
      const savedLang = localStorage.getItem('sd_lang') || 'en';
      this.currentLang = savedLang;
      document.documentElement.setAttribute('dir', this.currentLang === 'en' ? 'ltr' : 'rtl');
      document.documentElement.setAttribute('lang', this.currentLang);
    } catch (e) {
      this.currentLang = 'en';
    }
    this.updateLanguageButton();
  },

  setLanguage(lang) {
    if (this.currentLang === lang) return;
    this.currentLang = lang;
    try {
      localStorage.setItem('sd_lang', lang);
    } catch (e) {}
    document.documentElement.setAttribute('dir', lang === 'en' ? 'ltr' : 'rtl');
    document.documentElement.setAttribute('lang', lang);
    this.updateLanguageButton();
    this.updateProgressBar();
    this.renderSidebarNav();
    
    // Re-render active module
    const targetModule = SystemDesignData.modules.find(m => m.id === this.currentModuleId);
    if (targetModule) {
      this.renderModule(targetModule);
    }
  },

  toggleLanguage() {
    const nextLang = this.currentLang === 'ar' ? 'en' : 'ar';
    this.setLanguage(nextLang);
  },

  updateLanguageButton() {
    const btn = document.getElementById('langToggleBtn');
    if (btn) {
      const textSpan = btn.querySelector('.lang-btn-text');
      if (textSpan) {
        textSpan.textContent = this.currentLang === 'ar' ? 'English' : 'العربية';
      }
      btn.title = this.currentLang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية';
    }

    const searchInput = document.getElementById('globalSearchInput');
    if (searchInput) {
      searchInput.placeholder = this.t('searchPlaceholder');
    }

    const sidebarTitle = document.getElementById('sidebarTopTitle');
    if (sidebarTitle) {
      sidebarTitle.textContent = this.t('sidebarTitle');
    }

    const progressLabel = document.getElementById('progressLabelText');
    if (progressLabel) {
      progressLabel.textContent = this.t('progressLabel');
    }
  },

  loadSidebarState() {
    try {
      const isMobile = window.innerWidth <= 860;
      if (!isMobile) {
        const saved = localStorage.getItem('sd_sidebar_collapsed');
        if (saved === 'true') {
          document.body.classList.add('sidebar-collapsed');
          const toggleBtn = document.getElementById('sidebarToggleBtn');
          if (toggleBtn) toggleBtn.classList.add('active');
        }
      }
    } catch (e) {}
  },

  toggleSidebar() {
    const isMobile = window.innerWidth <= 860;
    const sidebar = document.getElementById('appSidebar');
    const backdrop = document.getElementById('sidebarBackdrop');
    const toggleBtn = document.getElementById('sidebarToggleBtn');

    if (isMobile) {
      if (sidebar) {
        sidebar.classList.toggle('open');
        const isOpen = sidebar.classList.contains('open');
        if (backdrop) {
          backdrop.classList.toggle('active', isOpen);
        }
      }
    } else {
      document.body.classList.toggle('sidebar-collapsed');
      const isCollapsed = document.body.classList.contains('sidebar-collapsed');
      try {
        localStorage.setItem('sd_sidebar_collapsed', isCollapsed ? 'true' : 'false');
      } catch (e) {}
      if (toggleBtn) {
        toggleBtn.classList.toggle('active', isCollapsed);
      }
    }
  },

  closeSidebarMobile() {
    const sidebar = document.getElementById('appSidebar');
    const backdrop = document.getElementById('sidebarBackdrop');
    if (sidebar) sidebar.classList.remove('open');
    if (backdrop) backdrop.classList.remove('active');
  },

  bindEvents() {
    // Hash change routing
    window.addEventListener('hashchange', () => this.handleRoute());

    // Sidebar Toggle Button
    const toggleBtn = document.getElementById('sidebarToggleBtn');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggleSidebar();
      });
    }

    // Mobile Sidebar Close Button
    const closeBtn = document.getElementById('sidebarCloseBtn');
    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.closeSidebarMobile();
      });
    }

    // Mobile Backdrop Click
    const backdrop = document.getElementById('sidebarBackdrop');
    if (backdrop) {
      backdrop.addEventListener('click', () => {
        this.closeSidebarMobile();
      });
    }

    // Search input
    const searchInput = document.getElementById('globalSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => this.handleSearch(e.target.value));
      searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          this.clearSearch();
        }
      });
    }

    // Search clear button
    const clearBtn = document.getElementById('searchClearBtn');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => this.clearSearch());
    }

    // Language toggle
    const langBtn = document.getElementById('langToggleBtn');
    if (langBtn) {
      langBtn.addEventListener('click', () => this.toggleLanguage());
    }

    // Theme toggle
    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => this.toggleTheme());
    }

    // Close mobile sidebar on window resize if switching to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 860) {
        this.closeSidebarMobile();
      }
    });
  },

  toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('sd_theme', next);
    } catch (e) {}
  },

  handleRoute() {
    const hash = window.location.hash.replace('#', '') || 'module-1';
    
    // Check if target is a module or a sub-item
    let targetModule = SystemDesignData.modules.find(m => m.id === hash);
    
    if (!targetModule) {
      // Search in questions or sections or algorithms
      for (const m of SystemDesignData.modules) {
        if (m.sections && m.sections.some(s => s.id === hash)) {
          targetModule = m;
          break;
        }
        if (m.problems && m.problems.some(p => p.id === hash)) {
          targetModule = m;
          break;
        }
        if (m.caseStudies && m.caseStudies.some(c => c.id === hash)) {
          targetModule = m;
          break;
        }
        if (m.studioChallenges && m.studioChallenges.some(sc => sc.id === hash)) {
          targetModule = m;
          this.activeStudioChallengeId = hash;
          break;
        }
        if (m.algorithms && m.algorithms.some(a => a.id === hash)) {
          targetModule = m;
          this.activeAlgoId = hash;
          break;
        }
        if (m.isInterviewQuestions && typeof InterviewQuestionsData !== 'undefined' && InterviewQuestionsData.some(q => q.id === hash)) {
          targetModule = m;
          break;
        }
      }
    }

    if (!targetModule) {
      targetModule = SystemDesignData.modules[0];
    }

    this.currentModuleId = targetModule.id;
    this.renderModule(targetModule);
    this.updateSidebarActive(targetModule.id);

    // Scroll to specific hash target if inside module
    if (hash && hash !== targetModule.id) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Close mobile drawer if open
    this.closeSidebarMobile();
  },

  renderSidebarNav() {
    const container = document.getElementById('navGroupsContainer');
    if (!container) return;

    let html = `<div class="nav-group-header">${this.t('navGroupTitle')}</div>`;

    SystemDesignData.modules.forEach((mod) => {
      let itemCount = 0;
      if (mod.sections) itemCount = mod.sections.length;
      else if (mod.problems) itemCount = mod.problems.length;
      else if (mod.caseStudies) itemCount = mod.caseStudies.length;
      else if (mod.studioChallenges) itemCount = mod.studioChallenges.length;
      else if (mod.algorithms) itemCount = mod.algorithms.length;
      else if (mod.isInterviewQuestions && typeof InterviewQuestionsData !== 'undefined') itemCount = InterviewQuestionsData.length;

      const isCompleted = this.readModules.has(mod.id);
      const titleDisplay = this.currentLang === 'en'
        ? mod.title.split('—')[0].trim()
        : (mod.title.includes('—') ? mod.title.split('—')[1].trim() : mod.title);

      html += `
        <a href="#${mod.id}" class="nav-link ${mod.id === this.currentModuleId ? 'active' : ''}" data-id="${mod.id}">
          <span>${mod.number}. ${titleDisplay}</span>
          <span class="nav-badge-count">${itemCount} ${isCompleted ? '✓' : ''}</span>
        </a>
      `;
    });

    container.innerHTML = html;

    // Close sidebar on mobile when a link is clicked
    container.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        this.closeSidebarMobile();
      });
    });
  },

  updateSidebarActive(moduleId) {
    document.querySelectorAll('.nav-link').forEach(link => {
      if (link.getAttribute('data-id') === moduleId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  },

  renderModule(mod) {
    const container = document.getElementById('mainContentArea');
    if (!container) return;

    const isRead = this.readModules.has(mod.id);
    const modIndex = SystemDesignData.modules.findIndex(m => m.id === mod.id);
    const prevMod = modIndex > 0 ? SystemDesignData.modules[modIndex - 1] : null;
    const nextMod = modIndex < SystemDesignData.modules.length - 1 ? SystemDesignData.modules[modIndex + 1] : null;

    // Check if it's the Interactive Studio (Module 8)
    if (mod.isStudio) {
      this.renderStudioModule(mod, container, isRead, prevMod, nextMod);
      return;
    }

    // Check if it's the Interactive Code Lab (Module 9)
    if (mod.isCodeLab) {
      this.renderCodeLabModule(mod, container, isRead, prevMod, nextMod);
      return;
    }

    // Check if it's the Interview Questions Bank (Module 10)
    if (mod.isInterviewQuestions) {
      this.renderInterviewQuestionsModule(mod, container, isRead, prevMod, nextMod);
      return;
    }

    let contentHtml = `
      <div class="content-wrapper" data-level-filter="${this.activeLevelFilter}">
        <!-- Module Header -->
        <div class="module-header">
          <span class="module-tag">${this.t('moduleTag', mod.number)}</span>
          <h1 class="module-title">${this.currentLang === 'en' ? (mod.title.split('—')[0].trim()) : mod.title}</h1>
          <p class="module-subtitle">${mod.subtitle}</p>
        </div>

        <!-- Level Filter & Controls Bar -->
        <div class="view-controls-bar">
          <div class="level-filters">
            <span style="font-size:0.825rem; font-weight:700; color:var(--text-subtle); margin-left:0.5rem; margin-right:0.5rem;">${this.t('levelFilterLabel')}</span>
            <button class="filter-btn ${this.activeLevelFilter === 'all' ? 'active' : ''}" data-level="all" onclick="App.setLevelFilter('all')">${this.t('allLevels')}</button>
            <button class="filter-btn ${this.activeLevelFilter === '1' ? 'active' : ''}" data-level="1" onclick="App.setLevelFilter('1')">${this.t('level1')}</button>
            <button class="filter-btn ${this.activeLevelFilter === '2' ? 'active' : ''}" data-level="2" onclick="App.setLevelFilter('2')">${this.t('level2')}</button>
            <button class="filter-btn ${this.activeLevelFilter === '3' ? 'active' : ''}" data-level="3" onclick="App.setLevelFilter('3')">${this.t('level3')}</button>
          </div>
          <div class="quick-actions">
            <button class="action-btn-sm" onclick="App.toggleAllSolutions(true)">${this.t('openAllSolutions')}</button>
            <button class="action-btn-sm" onclick="App.toggleAllSolutions(false)">${this.t('collapseAll')}</button>
            <button class="action-btn-sm" data-mark-read="${mod.id}" onclick="App.toggleMarkRead('${mod.id}')">
              ${isRead ? this.t('unmarkModuleRead') : this.t('markModuleRead')}
            </button>
          </div>
        </div>
    `;

    // Render Primary Diagram if exists for the module
    if (mod.diagramId && SystemDesignDiagrams[mod.diagramId]) {
      contentHtml += `
        <div class="diagram-container-card">
          <div class="diagram-header">
            <span class="diagram-caption">مخطط معماري تفاعلي: ${mod.title}</span>
          </div>
          ${SystemDesignDiagrams.render(mod.diagramId)}
        </div>
      `;
    }

    // Render Sections (Modules 1, 2, 4, 5, 6)
    if (mod.sections && mod.sections.length > 0) {
      mod.sections.forEach(sec => {
        contentHtml += this.renderSectionCard(sec);
      });
    }

    // Render Problems (Module 3 - 31 Questions)
    if (mod.problems && mod.problems.length > 0) {
      contentHtml += `<div class="problems-grid">`;
      mod.problems.forEach(prob => {
        contentHtml += this.renderProblemCard(prob);
      });
      contentHtml += `</div>`;
    }

    // Render Case Studies (Module 7)
    if (mod.caseStudies && mod.caseStudies.length > 0) {
      mod.caseStudies.forEach(cs => {
        contentHtml += this.renderCaseStudyCard(cs);
      });
    }

    // Render Major Capstone Example with Hidden Solution
    if (mod.capstone) {
      contentHtml += this.renderCapstoneBlock(mod.capstone, mod.id);
    }

    // Footer Navigation (Prev / Next)
    contentHtml += `
      <div class="module-footer-nav">
        ${prevMod ? `
          <a href="#${prevMod.id}" class="nav-page-btn">
            <span class="nav-page-label">${this.t('prevModule')}</span>
            <span class="nav-page-title">${prevMod.number}. ${this.currentLang === 'en' ? prevMod.title.split('—')[0].trim() : (prevMod.title.includes('—') ? prevMod.title.split('—')[1].trim() : prevMod.title)}</span>
          </a>
        ` : `<div></div>`}
        
        ${nextMod ? `
          <a href="#${nextMod.id}" class="nav-page-btn">
            <span class="nav-page-label">${this.t('nextModule')}</span>
            <span class="nav-page-title">${nextMod.number}. ${this.currentLang === 'en' ? nextMod.title.split('—')[0].trim() : (nextMod.title.includes('—') ? nextMod.title.split('—')[1].trim() : nextMod.title)}</span>
          </a>
        ` : `<div></div>`}
      </div>
    </div>`;

    container.innerHTML = contentHtml;
  },

  // Helper to escape HTML characters safely
  escapeHTML(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  },

  // Toggle Schema DDL Visibility in Module 8
  toggleSchemaDDL(challengeId, sIdx) {
    const box = document.getElementById(`ddl-box-${challengeId}-${sIdx}`);
    const arrow = document.getElementById(`ddl-arrow-${challengeId}-${sIdx}`);
    if (box) {
      const isHidden = box.style.display === 'none';
      box.style.display = isHidden ? 'block' : 'none';
      if (arrow) arrow.textContent = isHidden ? '▲' : '▼';
    }
  },

  // Copy Snippet or DDL text with visual confirmation
  copySnippetText(btn, encodedText) {
    try {
      const text = decodeURIComponent(encodedText);
      navigator.clipboard.writeText(text).then(() => {
        const orig = btn.innerHTML;
        btn.innerHTML = 'تم النسخ بنجاح ✓';
        btn.style.background = 'var(--color-success)';
        btn.style.color = '#ffffff';
        setTimeout(() => {
          btn.innerHTML = orig;
          btn.style.background = '';
          btn.style.color = '';
        }, 2000);
      });
    } catch (e) {
      console.error('Failed to copy', e);
    }
  },

  // Interactive Architecture Studio Renderer (Module 8)
  renderStudioModule(mod, container, isRead, prevMod, nextMod) {
    const activeChallenge = mod.studioChallenges.find(c => c.id === this.activeStudioChallengeId) || mod.studioChallenges[0];

    let html = `
      <div class="content-wrapper">
        <!-- Studio Header -->
        <div class="module-header">
          <span class="module-tag">القسم 8 من 9: المختبر العملي والاستوديو التفاعلي</span>
          <h1 class="module-title">${mod.title}</h1>
          <p class="module-subtitle">${mod.subtitle}</p>
        </div>

        <!-- Studio Tabs Row -->
        <div class="studio-tabs-row">
          ${mod.studioChallenges.map(c => `
            <button class="studio-tab-btn ${c.id === activeChallenge.id ? 'active' : ''}" onclick="App.selectStudioChallenge('${c.id}')">
              <span>${c.appName.split('(')[0].trim()}</span>
              <span style="font-size:0.75rem; opacity:0.8;">(${c.badge})</span>
            </button>
          `).join('')}
        </div>

        <!-- Active Challenge Card -->
        <div class="challenge-card" id="${activeChallenge.id}">
          <div class="challenge-header-top">
            <div>
              <span class="topic-category-tag">${activeChallenge.tag}</span>
              <h2 class="challenge-app-title" style="margin-top:0.4rem;">${activeChallenge.appName}</h2>
            </div>
            <button class="action-btn-sm" data-mark-read="${mod.id}" onclick="App.toggleMarkRead('${mod.id}')">
              ${isRead ? this.t('unmarkModuleRead') : this.t('markStudioRead')}
            </button>
          </div>

          <p class="topic-description">${activeChallenge.overview}</p>

          <!-- Target Specs Bar -->
          <div class="specs-bar">
            <div class="spec-item">
              <span class="spec-key">Throughput (حجم المرور)</span>
              <span class="spec-val">${activeChallenge.targetSpecs.throughput}</span>
            </div>
            <div class="spec-item">
              <span class="spec-key">Latency Target (زمن الاستجابة)</span>
              <span class="spec-val">${activeChallenge.targetSpecs.latency}</span>
            </div>
            <div class="spec-item">
              <span class="spec-key">Consistency (الاتساق المطلوب)</span>
              <span class="spec-val">${activeChallenge.targetSpecs.consistency}</span>
            </div>
            <div class="spec-item">
              <span class="spec-key">Availability (التوافرية)</span>
              <span class="spec-val">${activeChallenge.targetSpecs.availability}</span>
            </div>
          </div>

          <!-- Stage 1: Component Training & Breakdown -->
          <div class="training-section">
            <div class="training-title-row">
              <span class="training-phase-tag">المرحلة 1: تدريب المكونات</span>
              <h3 style="font-size:1.2rem; font-weight:800; color:var(--text-main);">فهم دور المكونات الأساسية للنظام</h3>
            </div>
            <div class="training-grid">
              ${activeChallenge.trainingComponents.map(comp => `
                <div class="training-card">
                  <div class="training-comp-name">${comp.name}</div>
                  <div class="training-comp-role">${comp.role}</div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Stage 2: Hands-on Architecture Builder / Decisions -->
          <div class="decisions-section">
            <div class="training-title-row">
              <span class="training-phase-tag" style="background:var(--color-warning-dim); color:var(--color-warning); border-color:var(--color-warning);">المرحلة 2: قرارات التصميم المعماري التفاعلي</span>
              <h3 style="font-size:1.2rem; font-weight:800; color:var(--text-main);">صمم المعمارية باختيار القرارات الهندسية الصحيحة</h3>
            </div>

            ${activeChallenge.questionsToSolve.map((q, stepIdx) => {
              const answerKey = `${activeChallenge.id}-${stepIdx}`;
              const selectedOptIdx = this.studioAnswers[answerKey];
              const hasSelected = selectedOptIdx !== undefined;

              return `
                <div class="step-card">
                  <div class="step-header">${q.step}</div>
                  <div class="options-list">
                    ${q.options.map((opt, optIdx) => {
                      const isChosen = selectedOptIdx === optIdx;
                      let btnClass = '';
                      if (isChosen) {
                        btnClass = opt.correct ? 'selected-correct' : 'selected-wrong';
                      }

                      return `
                        <button class="option-btn ${btnClass}" onclick="App.selectStudioOption('${activeChallenge.id}', ${stepIdx}, ${optIdx})">
                          <span style="font-weight:800; font-family:var(--font-mono);">${optIdx === 0 ? 'A' : 'B'}.</span>
                          <span>${opt.text}</span>
                        </button>
                      `;
                    }).join('')}
                  </div>

                  ${hasSelected ? `
                    <div class="feedback-bubble show ${q.options[selectedOptIdx].correct ? 'correct' : 'wrong'}">
                      <strong>${q.options[selectedOptIdx].correct ? '✓ اختيار صحيح ومثالي: ' : '✕ مفاضلة غير مناسبة: '}</strong>
                      ${q.options[selectedOptIdx].reason}
                    </div>
                  ` : ''}
                </div>
              `;
            }).join('')}
          </div>

          <!-- Stage 3: Golden Master Architecture Reveal -->
          <div class="studio-reveal-section">
            <div class="training-title-row" style="margin-bottom:1rem;">
              <span class="training-phase-tag" style="background:var(--color-success-dim); color:var(--color-success); border-color:var(--color-success);">المرحلة 3: المخطط المعماري المعتمد</span>
              <h3 style="font-size:1.2rem; font-weight:800; color:var(--text-main);">المعمارية الإنتاجية المعتمدة (Golden Reference Architecture)</h3>
            </div>

            <div class="diagram-container-card" style="margin: 1rem 0;">
              <div class="diagram-header">
                <span class="diagram-caption">مخطط الإنتاج الموزع: ${activeChallenge.appName}</span>
              </div>
              ${SystemDesignDiagrams.render(activeChallenge.diagramId)}
            </div>
          </div>

          <!-- Stage 4: Database Architecture & Detailed Schemas -->
          ${activeChallenge.databaseArchitecture || activeChallenge.databaseSchemas ? `
            <div class="schemas-section">
              <div class="training-title-row" style="margin-bottom:1rem;">
                <span class="training-phase-tag" style="background:var(--color-primary-dim); color:var(--color-primary); border-color:var(--color-primary);">المرحلة 4: معمارية ومخططات قواعد البيانات</span>
                <h3 style="font-size:1.2rem; font-weight:800; color:var(--text-main);">استراتيجية تخزين البيانات والـ Schemas والجداول التفصيلية</h3>
              </div>

              <!-- Polyglot Storage Strategy Overview -->
              ${activeChallenge.databaseArchitecture ? `
                <div class="db-strategy-card">
                  <div class="db-strategy-header">
                    <div class="db-badge">Polyglot Persistence Strategy</div>
                    <p class="db-strategy-overview">${activeChallenge.databaseArchitecture.overview}</p>
                  </div>

                  <div class="db-tiers-grid">
                    ${activeChallenge.databaseArchitecture.polyglotTiers.map(tier => `
                      <div class="db-tier-card">
                        <div class="db-tier-top">
                          <span class="db-tier-name">${tier.dbName}</span>
                          <span class="db-tier-type">${tier.dbType}</span>
                        </div>
                        <div class="db-tier-role">${tier.role}</div>
                        <div class="db-tier-meta">
                          <div class="meta-row"><strong>التقسيم (Sharding Key):</strong> <code>${tier.shardingKey}</code></div>
                          <div class="meta-row"><strong>نموذج التناسق:</strong> <span>${tier.consistency}</span></div>
                        </div>
                      </div>
                    `).join('')}
                  </div>

                  <div class="db-replication-note">
                    <strong>استراتيجية التكرار والتوافرية العالية:</strong> ${activeChallenge.databaseArchitecture.replicationStrategy}
                  </div>
                </div>
              ` : ''}

              <!-- Tables & Schemas List -->
              ${activeChallenge.databaseSchemas ? `
                <div class="schemas-list-container">
                  <h4 class="schemas-list-title">هياكل الجداول ومخططات الـ Schemas (${activeChallenge.databaseSchemas.length} هياكل معتمدة):</h4>
                  
                  ${activeChallenge.databaseSchemas.map((schema, sIdx) => `
                    <div class="schema-table-card">
                      <div class="schema-table-header">
                        <div class="schema-table-title-box">
                          <span class="schema-engine-badge">${schema.engine}</span>
                          <span class="schema-table-name">${schema.tableName}</span>
                        </div>
                        <button class="ddl-toggle-btn" onclick="App.toggleSchemaDDL('${activeChallenge.id}', ${sIdx})">
                          <span>عرض نص الـ DDL / الكود</span>
                          <span class="ddl-arrow" id="ddl-arrow-${activeChallenge.id}-${sIdx}">▼</span>
                        </button>
                      </div>

                      <p class="schema-description">${schema.description}</p>

                      <!-- Column Table -->
                      <div class="table-responsive">
                        <table class="schema-data-table">
                          <thead>
                            <tr>
                              <th style="width:23%;">الحقل (Column)</th>
                              <th style="width:20%;">النوع (Data Type)</th>
                              <th style="width:17%;">النوع المفتاحي (Key)</th>
                              <th style="width:10%;">Nullable</th>
                              <th style="width:30%;">الوظيفة والشرح المعماري</th>
                            </tr>
                          </thead>
                          <tbody>
                            ${schema.columns.map(col => {
                              let keyBadge = `<span class="col-badge badge-none">—</span>`;
                              if (col.key === 'PK') keyBadge = `<span class="col-badge badge-pk">PRIMARY KEY</span>`;
                              else if (col.key === 'FK') keyBadge = `<span class="col-badge badge-fk">FOREIGN KEY</span>`;
                              else if (col.key === 'UNIQUE') keyBadge = `<span class="col-badge badge-unique">UNIQUE</span>`;
                              else if (col.key === 'INDEX') keyBadge = `<span class="col-badge badge-index">INDEX</span>`;
                              else if (col.key === 'PARTITION_KEY' || col.key === 'PARTITION') keyBadge = `<span class="col-badge badge-partition">PARTITION</span>`;
                              else if (col.key === 'CLUSTERING_KEY') keyBadge = `<span class="col-badge badge-clustering">CLUSTERING</span>`;
                              else if (col.key === 'TTL' || col.key === 'TTL_MUTEX') keyBadge = `<span class="col-badge badge-ttl">TTL EXPIRE</span>`;
                              else if (col.key === 'SPATIAL') keyBadge = `<span class="col-badge badge-spatial">GIST SPATIAL</span>`;
                              else if (col.key === 'HNSW_INDEX') keyBadge = `<span class="col-badge badge-hnsw">HNSW VECTOR</span>`;
                              else if (col.key === 'LOCK' || col.key === 'MUTEX') keyBadge = `<span class="col-badge badge-lock">DISTRIBUTED LOCK</span>`;
                              else if (col.key === 'ATOMIC_COUNTER') keyBadge = `<span class="col-badge badge-atomic">ATOMIC COUNTER</span>`;
                              else if (col.key === 'FAST_BIT') keyBadge = `<span class="col-badge badge-bit">BITMAP BIT</span>`;
                              else if (col.key === 'ORDER_BY') keyBadge = `<span class="col-badge badge-order">ORDER KEY</span>`;
                              else if (col.key !== 'NONE') keyBadge = `<span class="col-badge badge-other">${col.key}</span>`;

                              return `
                                <tr>
                                  <td><code class="col-name-code">${col.name}</code></td>
                                  <td><span class="col-type-tag">${col.type}</span></td>
                                  <td>${keyBadge}</td>
                                  <td><span class="col-null-tag ${col.nullable ? 'null-yes' : 'null-no'}">${col.nullable ? 'YES' : 'NOT NULL'}</span></td>
                                  <td class="col-desc-text">${col.description}</td>
                                </tr>
                              `;
                            }).join('')}
                          </tbody>
                        </table>
                      </div>

                      <!-- DDL Code Container (Collapsible) -->
                      <div class="schema-ddl-wrapper" id="ddl-box-${activeChallenge.id}-${sIdx}" style="display:none;">
                        <div class="ddl-header">
                          <span>نص تعريف الجدول (DDL / Structure Definition)</span>
                          <button class="ddl-copy-btn" onclick="App.copySnippetText(this, \`${encodeURIComponent(schema.ddl)}\`)">نسخ الكود</button>
                        </div>
                        <pre class="ddl-pre"><code>${this.escapeHTML(schema.ddl)}</code></pre>
                      </div>
                    </div>
                  `).join('')}
                </div>
              ` : ''}
            </div>
          ` : ''}

          <!-- Stage 5: Data Exchange Protocols & End-to-End Request Flow -->
          ${activeChallenge.dataExchange ? `
            <div class="exchange-section">
              <div class="training-title-row" style="margin-bottom:1rem;">
                <span class="training-phase-tag" style="background:var(--color-orange-dim); color:var(--color-orange); border-color:var(--color-orange);">المرحلة 5: بروتوكولات ومسارات تبادل البيانات</span>
                <h3 style="font-size:1.2rem; font-weight:800; color:var(--text-main);">بروتوكولات الاتصال وتدفق الطلب الشامل (Data Exchange & Protocols)</h3>
              </div>

              <!-- Protocol Matrix -->
              <div class="protocol-matrix-card">
                <div class="protocol-matrix-header">
                  <h4 style="margin:0 0 0.5rem 0; font-size:1.05rem; font-weight:800; color:var(--text-main);">مصفوفة بروتوكولات الاتصال بين الطبقات (Communication Protocols Matrix)</h4>
                  <p style="font-size:0.875rem; color:var(--text-muted); margin:0;">تحديد المعيار والبروتوكول الأنسب لكل طبقة لتحقيق أعلى أداء وأمان مطلوب.</p>
                </div>

                <div class="protocol-grid">
                  ${activeChallenge.dataExchange.protocolMatrix.map(p => `
                    <div class="protocol-card">
                      <div class="protocol-card-top">
                        <span class="protocol-layer-label">${p.layer}</span>
                        <span class="protocol-pill">${p.protocol}</span>
                      </div>
                      <div class="protocol-meta-row">
                        <span class="protocol-meta-key">هيكل البيانات:</span>
                        <code class="protocol-meta-val">${p.format}</code>
                      </div>
                      <div class="protocol-meta-row">
                        <span class="protocol-meta-key">زمن الاستجابة المستهدف:</span>
                        <span class="protocol-latency-val">${p.latencyTarget}</span>
                      </div>
                      <div class="protocol-rationale">
                        <strong>لماذا تم اختياره؟</strong> ${p.rationale}
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- API Contract Sample -->
              ${activeChallenge.dataExchange.apiContractSample ? `
                <div class="api-contract-card">
                  <div class="api-contract-header">
                    <div>
                      <span class="api-contract-tag">API Payload / Contract</span>
                      <h4 style="margin:0.25rem 0 0 0; font-size:1rem; font-weight:800; color:var(--text-main);">${activeChallenge.dataExchange.apiContractSample.title}</h4>
                      <span class="api-contract-method">${activeChallenge.dataExchange.apiContractSample.type}</span>
                    </div>
                    <button class="ddl-copy-btn" onclick="App.copySnippetText(this, \`${encodeURIComponent(activeChallenge.dataExchange.apiContractSample.snippet)}\`)">نسخ العقد</button>
                  </div>
                  <pre class="contract-pre"><code>${this.escapeHTML(activeChallenge.dataExchange.apiContractSample.snippet)}</code></pre>
                </div>
              ` : ''}

              <!-- End-to-End Request Flow Steps -->
              <div class="e2e-flow-card">
                <div class="e2e-flow-header">
                  <h4 style="margin:0 0 0.5rem 0; font-size:1.05rem; font-weight:800; color:var(--text-main);">مسار تدفق البيانات والطلب خطوة بخطوة (End-to-End Request Lifecycle)</h4>
                  <p style="font-size:0.875rem; color:var(--text-muted); margin:0;">تتبع كامل لرحلة البيانات من نقرة المستخدم على الهاتف حتى استقرارها بقواعد البيانات وشبكات الـ CDN.</p>
                </div>

                <div class="e2e-steps-timeline">
                  ${activeChallenge.dataExchange.e2eRequestFlow.map(step => `
                    <div class="e2e-step-item">
                      <div class="step-num-badge">${step.stepNumber}</div>
                      <div class="step-content-box">
                        <div class="step-top-line">
                          <span class="step-actor">${step.actor}</span>
                          <span class="step-action">${step.action}</span>
                          <span class="step-protocol-badge">${step.protocol}</span>
                          <span class="step-comp-tag">${step.component}</span>
                        </div>
                        <p class="step-detail-text">${step.detail}</p>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
          ` : ''}
        </div>

        <!-- Footer Nav -->
        <div class="module-footer-nav">
          ${prevMod ? `
            <a href="#${prevMod.id}" class="nav-page-btn">
              <span class="nav-page-label">← القسم السابق</span>
              <span class="nav-page-title">${prevMod.number}. ${prevMod.title.split('—')[0]}</span>
            </a>
          ` : `<div></div>`}
          
          <a href="#module-9" class="nav-page-btn" style="text-align: left;">
            <span class="nav-page-label">القسم التالي →</span>
            <span class="nav-page-title">9. مختبر الأكواد والتطبيق البرمجي</span>
          </a>
        </div>
      </div>
    `;

    container.innerHTML = html;
  },

  selectStudioChallenge(challengeId) {
    this.activeStudioChallengeId = challengeId;
    const mod = SystemDesignData.modules.find(m => m.id === 'module-8');
    if (mod) this.renderModule(mod);
  },

  selectStudioOption(challengeId, stepIdx, optIdx) {
    this.studioAnswers[`${challengeId}-${stepIdx}`] = optIdx;
    const mod = SystemDesignData.modules.find(m => m.id === 'module-8');
    if (mod) this.renderModule(mod);
  },

  // ==========================================================================
  // Interactive Code Lab & Playground Renderer (Module 9)
  // ==========================================================================
  renderCodeLabModule(mod, container, isRead, prevMod, nextMod) {
    const activeAlgo = mod.algorithms.find(a => a.id === this.activeAlgoId) || mod.algorithms[0];
    const initialCode = this.customCodeState[activeAlgo.id] || activeAlgo.code;

    let html = `
      <div class="content-wrapper">
        <!-- Code Lab Header -->
        <div class="module-header">
          <span class="module-tag">القسم 9: مختبر الأكواد ومحاكي الخوارزميات</span>
          <h1 class="module-title">${mod.title}</h1>
          <p class="module-subtitle">${mod.subtitle}</p>
        </div>

        <!-- Algorithm Selector Tabs -->
        <div class="algo-tabs-scroll">
          ${mod.algorithms.map(a => `
            <button class="algo-tab-btn ${a.id === activeAlgo.id ? 'active' : ''}" onclick="App.selectAlgorithm('${a.id}')">
              <span>${a.name.split('(')[0].trim()}</span>
              <span class="algo-badge-pill">${a.badge}</span>
            </button>
          `).join('')}
        </div>

        <!-- Active Algorithm Info Card -->
        <div class="algo-intro-card" id="${activeAlgo.id}">
          <div class="algo-intro-header">
            <h2 class="algo-intro-title">${activeAlgo.name}</h2>
            <div style="display:flex; align-items:center; gap:0.5rem;">
              <span class="topic-category-tag">${activeAlgo.category}</span>
              <button class="action-btn-sm" data-mark-read="${mod.id}" onclick="App.toggleMarkRead('${mod.id}')">
                ${isRead ? this.t('unmarkModuleRead') : this.t('markLabRead')}
              </button>
            </div>
          </div>
          <p class="algo-intro-desc">${activeAlgo.description}</p>
        </div>

        <!-- Split Grid: Code Editor (Left) & Terminal Output (Right) -->
        <div class="code-playground-grid">
          <!-- Editor Panel -->
          <div class="editor-card">
            <div class="panel-header-bar">
              <div class="panel-title-group">
                <span>محرر الكود التفاعلي (Interactive JavaScript Editor)</span>
                <span class="brand-badge" style="font-family:var(--font-mono); font-size:0.7rem;">ES6+ Runtime</span>
              </div>
              <div class="panel-actions-group">
                <button class="btn-editor-action" onclick="App.resetCurrentAlgoCode()" title="استعادة الكود الأصلي للخوارزمية">
                  إعادة ضبط
                </button>
                <button class="btn-editor-action" id="copyCodeBtn" onclick="App.copyCodeToClipboard()" title="نسخ الكود">
                  نسخ
                </button>
                <button class="btn-editor-action btn-run-code" onclick="App.runCodeSandbox()" title="تشغيل الكود (Ctrl + Enter)">
                  تشغيل الكود (Run)
                </button>
              </div>
            </div>

            <div class="editor-body-wrapper">
              <div class="editor-gutter" id="editorGutter"></div>
              <textarea id="codeLabTextarea" class="editor-code-textarea" spellcheck="false" placeholder="// اكتب أو عدل كود الخوارزمية هنا...">${initialCode}</textarea>
            </div>
          </div>

          <!-- Terminal / Console Output Panel -->
          <div class="terminal-card">
            <div class="panel-header-bar">
              <div class="panel-title-group">
                <span>نافذة المخرجات وسجلات التنفيذ (Execution Terminal)</span>
                <span class="execution-status-badge status-ready" id="executionStatusBadge">جاهز للتشغيل</span>
              </div>
              <div class="panel-actions-group">
                <button class="btn-editor-action" onclick="App.clearConsoleOutput()" title="مسح سجلات الشاشة">
                  مسح الشاشة
                </button>
              </div>
            </div>

            <div class="terminal-body" id="terminalOutputBody">
              <div class="terminal-log-row log-info">// اضغط على زر "تشغيل الكود (Run)" أو (Ctrl + Enter) لتشغيل الخوارزمية وملاحظة النتائج اللحظية...</div>
            </div>
          </div>
        </div>

        <!-- Footer Nav -->
        <div class="module-footer-nav">
          ${prevMod ? `
            <a href="#${prevMod.id}" class="nav-page-btn">
              <span class="nav-page-label">← القسم السابق</span>
              <span class="nav-page-title">${prevMod.number}. ${prevMod.title.split('—')[0]}</span>
            </a>
          ` : `<div></div>`}
          
          ${nextMod ? `
            <a href="#${nextMod.id}" class="nav-page-btn" style="text-align: left;">
              <span class="nav-page-label">القسم التالي →</span>
              <span class="nav-page-title">${nextMod.number}. ${nextMod.title.split('—')[0]}</span>
            </a>
          ` : `
            <a href="#module-10" class="nav-page-btn" style="text-align: left;">
              <span class="nav-page-label">القسم التالي →</span>
              <span class="nav-page-title">10. بنك أسئلة المقابلات</span>
            </a>
          `}
        </div>
      </div>
    `;

    container.innerHTML = html;

    // Attach Editor Listeners (Line numbers, Tab indentation, Ctrl+Enter)
    setTimeout(() => {
      this.attachCodeEditorListeners();
      // Auto-run initially to show results
      this.runCodeSandbox();
    }, 50);
  },

  selectAlgorithm(algoId) {
    this.activeAlgoId = algoId;
    const mod = SystemDesignData.modules.find(m => m.id === 'module-9');
    if (mod) this.renderModule(mod);
  },

  attachCodeEditorListeners() {
    const textarea = document.getElementById('codeLabTextarea');
    const gutter = document.getElementById('editorGutter');
    if (!textarea || !gutter) return;

    const updateGutter = () => {
      const lines = textarea.value.split('\n').length;
      gutter.innerHTML = Array.from({ length: lines }, (_, i) => i + 1).join('\n');
    };

    updateGutter();

    // Sync scroll
    textarea.addEventListener('scroll', () => {
      gutter.scrollTop = textarea.scrollTop;
    });

    // Input changes
    textarea.addEventListener('input', () => {
      updateGutter();
      this.customCodeState[this.activeAlgoId] = textarea.value;
    });

    // Key handling (Tab indentation & Ctrl+Enter to Run)
    textarea.addEventListener('keydown', (e) => {
      // Ctrl + Enter or Cmd + Enter to Run
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        this.runCodeSandbox();
        return;
      }

      // Tab Key: Insert 2 spaces
      if (e.key === 'Tab') {
        e.preventDefault();
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const val = textarea.value;
        textarea.value = val.substring(0, start) + '  ' + val.substring(end);
        textarea.selectionStart = textarea.selectionEnd = start + 2;
        updateGutter();
        this.customCodeState[this.activeAlgoId] = textarea.value;
      }
    });
  },

  runCodeSandbox() {
    const textarea = document.getElementById('codeLabTextarea');
    const terminal = document.getElementById('terminalOutputBody');
    const statusBadge = document.getElementById('executionStatusBadge');
    if (!textarea || !terminal) return;

    const userCode = textarea.value;
    this.customCodeState[this.activeAlgoId] = userCode;

    terminal.innerHTML = '';
    const logs = [];

    // Custom Console Interceptor
    const sandboxConsole = {
      log: (...args) => {
        logs.push({ type: 'log', text: args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' ') });
      },
      info: (...args) => {
        logs.push({ type: 'info', text: args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' ') });
      },
      warn: (...args) => {
        logs.push({ type: 'warn', text: args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' ') });
      },
      error: (...args) => {
        logs.push({ type: 'error', text: args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' ') });
      }
    };

    const startTime = performance.now();
    let isError = false;

    try {
      // Execute in scoped sandbox
      const sandboxFn = new Function('console', userCode);
      sandboxFn(sandboxConsole);
    } catch (err) {
      isError = true;
      sandboxConsole.error(`Runtime Error: ${err.message}`);
    }

    const elapsed = (performance.now() - startTime).toFixed(2);

    // Update Status Badge
    if (statusBadge) {
      if (isError) {
        statusBadge.className = 'execution-status-badge status-error';
        statusBadge.textContent = `${this.currentLang === 'en' ? 'Execution Error' : 'خطأ في التنفيذ'} (${elapsed}ms)`;
      } else {
        statusBadge.className = 'execution-status-badge status-success';
        statusBadge.textContent = `${this.currentLang === 'en' ? 'Executed Successfully' : 'تم التنفيذ بنجاح'} (${elapsed}ms)`;
      }
    }

    // Render Logs in Terminal with Color Coding
    if (logs.length === 0) {
      terminal.innerHTML = `<div class="terminal-log-row log-info">// تم تشغيل الكود بنجاح دون طباعة مخرجات. استخدم console.log() لعرض النتائج.</div>`;
    } else {
      let outputHtml = '';
      logs.forEach(log => {
        let cls = 'log-info';
        const txt = log.text;

        if (log.type === 'error' || txt.includes('❌') || txt.includes('Error')) cls = 'log-error';
        else if (log.type === 'warn' || txt.includes('⚠️')) cls = 'log-warn';
        else if (txt.includes('✅') || txt.includes('🚀') || txt.includes('🎉')) cls = 'log-success';
        else if (txt.startsWith('===') || txt.startsWith('---')) cls = 'log-header';

        outputHtml += `<div class="terminal-log-row ${cls}">${this.escapeHtml(txt)}</div>`;
      });
      terminal.innerHTML = outputHtml;
    }

    terminal.scrollTop = terminal.scrollHeight;
  },

  escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  },

  resetCurrentAlgoCode() {
    const mod = SystemDesignData.modules.find(m => m.id === 'module-9');
    if (!mod) return;
    const algo = mod.algorithms.find(a => a.id === this.activeAlgoId);
    if (!algo) return;

    delete this.customCodeState[this.activeAlgoId];
    const textarea = document.getElementById('codeLabTextarea');
    if (textarea) {
      textarea.value = algo.code;
      const gutter = document.getElementById('editorGutter');
      if (gutter) {
        const lines = textarea.value.split('\n').length;
        gutter.innerHTML = Array.from({ length: lines }, (_, i) => i + 1).join('\n');
      }
      this.runCodeSandbox();
    }
  },

  copyCodeToClipboard() {
    const textarea = document.getElementById('codeLabTextarea');
    const btn = document.getElementById('copyCodeBtn');
    if (!textarea) return;

    navigator.clipboard.writeText(textarea.value).then(() => {
      if (btn) {
        const orig = btn.innerHTML;
        btn.innerHTML = '✓ تم النسخ!';
        btn.style.color = 'var(--color-success)';
        setTimeout(() => {
          btn.innerHTML = orig;
          btn.style.color = '';
        }, 1500);
      }
    });
  },

  clearConsoleOutput() {
    const terminal = document.getElementById('terminalOutputBody');
    const statusBadge = document.getElementById('executionStatusBadge');
    if (terminal) {
      terminal.innerHTML = `<div class="terminal-log-row log-info">// Output cleared. Ready to execute.</div>`;
    }
    if (statusBadge) {
      statusBadge.className = 'execution-status-badge status-ready';
      statusBadge.textContent = this.t('statusReady');
    }
  },

  // ==========================================================================
  // Interview Questions Bank Renderer (Module 10)
  // ==========================================================================
  setQuizDifficultyFilter(difficulty) {
    this.activeQuizDifficultyFilter = difficulty;
    const mod = SystemDesignData.modules.find(m => m.id === 'module-10');
    if (mod) this.renderModule(mod);
  },

  setQuizCategoryFilter(category) {
    this.activeQuizCategoryFilter = category;
    const mod = SystemDesignData.modules.find(m => m.id === 'module-10');
    if (mod) this.renderModule(mod);
  },

  toggleQuizHint(id) {
    if (this.openHints.has(id)) {
      this.openHints.delete(id);
    } else {
      this.openHints.add(id);
    }
    const pane = document.getElementById(`hint-pane-${id}`);
    const arrow = document.getElementById(`hint-arrow-${id}`);
    if (pane) pane.classList.toggle('show', this.openHints.has(id));
    if (arrow) arrow.textContent = this.openHints.has(id) ? '▲' : '▼';
  },

  toggleQuizAnswer(id) {
    if (this.openAnswers.has(id)) {
      this.openAnswers.delete(id);
    } else {
      this.openAnswers.add(id);
    }
    const pane = document.getElementById(`ans-pane-${id}`);
    const arrow = document.getElementById(`ans-arrow-${id}`);
    if (pane) pane.classList.toggle('show', this.openAnswers.has(id));
    if (arrow) arrow.textContent = this.openAnswers.has(id) ? '▲' : '▼';
  },

  toggleAllQuizAnswers(open) {
    const questions = typeof InterviewQuestionsData !== 'undefined' ? InterviewQuestionsData : [];
    questions.forEach(q => {
      if (open) {
        this.openAnswers.add(q.id);
      } else {
        this.openAnswers.delete(q.id);
      }
      const pane = document.getElementById(`ans-pane-${q.id}`);
      const arrow = document.getElementById(`ans-arrow-${q.id}`);
      if (pane) pane.classList.toggle('show', open);
      if (arrow) arrow.textContent = open ? '▲' : '▼';
    });
  },

  parseMarkdownSimple(md) {
    if (!md) return '';
    let html = md;

    // Headings
    html = html.replace(/^### (.*$)/gim, '<h4>$1</h4>');
    html = html.replace(/^## (.*$)/gim, '<h3>$1</h3>');

    // Bold and italics
    html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');
    html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>');

    // Code blocks
    html = html.replace(/```([a-z]*)\n([\s\S]*?)```/gim, (match, lang, code) => {
      return `<pre class="contract-pre" style="margin:0.75rem 0;"><code>${this.escapeHTML(code.trim())}</code></pre>`;
    });

    // Inline code
    html = html.replace(/`([^`]+)`/gim, '<code>$1</code>');

    // Markdown tables
    html = html.replace(/((?:\|[^\n]+\|\r?\n)+)/g, (match) => {
      const lines = match.trim().split('\n').map(l => l.trim()).filter(l => l.length > 0);
      if (lines.length < 2) return match;
      const headers = lines[0].split('|').slice(1, -1).map(c => c.trim());
      const bodyRows = lines.slice(2); // Skip separator row

      let tbl = `<div class="table-responsive"><table class="sd-table" style="margin:0.75rem 0;"><thead><tr>`;
      headers.forEach(h => { tbl += `<th>${h}</th>`; });
      tbl += `</tr></thead><tbody>`;
      bodyRows.forEach(row => {
        const cells = row.split('|').slice(1, -1).map(c => c.trim());
        tbl += `<tr>`;
        cells.forEach(c => { tbl += `<td>${c}</td>`; });
        tbl += `</tr>`;
      });
      tbl += `</tbody></table></div>`;
      return tbl;
    });

    // Unordered lists
    html = html.replace(/^\s*-\s+(.*$)/gim, '<li>$1</li>');
    html = html.replace(/((?:<li>.*<\/li>\s*)+)/gim, '<ul style="margin:0.5rem 0 0.75rem 1.25rem;">$1</ul>');

    // Paragraphs
    const paragraphs = html.split(/\n\n+/);
    html = paragraphs.map(p => {
      p = p.trim();
      if (p.startsWith('<h') || p.startsWith('<pre') || p.startsWith('<ul') || p.startsWith('<div')) {
        return p;
      }
      return `<p>${p.replace(/\n/g, '<br>')}</p>`;
    }).join('\n');

    return html;
  },

  renderInterviewQuestionsModule(mod, container, isRead, prevMod, nextMod) {
    const allQuestions = typeof InterviewQuestionsData !== 'undefined' ? InterviewQuestionsData : [];
    
    // Filter questions by category and difficulty
    const diffFilter = this.activeQuizDifficultyFilter;
    const catFilter = this.activeQuizCategoryFilter || 'all';

    // Categories Breakdown
    const reactCount = allQuestions.filter(q => q.category === 'React.js').length;
    const nextCount = allQuestions.filter(q => q.category === 'Next.js').length;
    const expressCount = allQuestions.filter(q => q.category === 'Node.js & Express').length;
    const sdCount = allQuestions.filter(q => q.category !== 'React.js' && q.category !== 'Next.js' && q.category !== 'Node.js & Express').length;

    // Apply Filters
    let filteredQuestions = allQuestions;

    if (catFilter === 'react') {
      filteredQuestions = filteredQuestions.filter(q => q.category === 'React.js');
    } else if (catFilter === 'nextjs') {
      filteredQuestions = filteredQuestions.filter(q => q.category === 'Next.js');
    } else if (catFilter === 'express') {
      filteredQuestions = filteredQuestions.filter(q => q.category === 'Node.js & Express');
    } else if (catFilter === 'system-design') {
      filteredQuestions = filteredQuestions.filter(q => q.category !== 'React.js' && q.category !== 'Next.js' && q.category !== 'Node.js & Express');
    }

    if (diffFilter !== 'all') {
      filteredQuestions = filteredQuestions.filter(q => q.difficulty === diffFilter);
    }

    // Current category counts for difficulty stats
    const easyCount = filteredQuestions.filter(q => q.difficulty === 'easy').length;
    const medCount = filteredQuestions.filter(q => q.difficulty === 'medium').length;
    const hardCount = filteredQuestions.filter(q => q.difficulty === 'hard').length;
    const expCount = filteredQuestions.filter(q => q.difficulty === 'expert').length;

    let html = `
      <div class="content-wrapper">
        <!-- Module Header -->
        <div class="module-header">
          <span class="module-tag">${this.t('interviewTag')}</span>
          <h1 class="module-title">${this.currentLang === 'en' ? mod.title.split('—')[0].trim() : mod.title}</h1>
          <p class="module-subtitle">${mod.subtitle}</p>
        </div>

        <!-- Track / Technology Category Selector Tabs -->
        <div class="iq-topic-tabs-row" style="display:flex; gap:0.5rem; flex-wrap:wrap; margin-bottom:1.25rem;">
          <button class="iq-topic-tab-btn ${catFilter === 'all' ? 'active' : ''}" onclick="App.setQuizCategoryFilter('all')">
            <span>${this.t('allTracks')}</span>
            <span class="iq-filter-badge">${allQuestions.length}</span>
          </button>
          <button class="iq-topic-tab-btn ${catFilter === 'react' ? 'active' : ''}" onclick="App.setQuizCategoryFilter('react')">
            <span>${this.t('reactTrack')}</span>
            <span class="iq-filter-badge">${reactCount}</span>
          </button>
          <button class="iq-topic-tab-btn ${catFilter === 'nextjs' ? 'active' : ''}" onclick="App.setQuizCategoryFilter('nextjs')">
            <span>${this.t('nextTrack')}</span>
            <span class="iq-filter-badge">${nextCount}</span>
          </button>
          <button class="iq-topic-tab-btn ${catFilter === 'express' ? 'active' : ''}" onclick="App.setQuizCategoryFilter('express')">
            <span>${this.t('expressTrack')}</span>
            <span class="iq-filter-badge">${expressCount}</span>
          </button>
          <button class="iq-topic-tab-btn ${catFilter === 'system-design' ? 'active' : ''}" onclick="App.setQuizCategoryFilter('system-design')">
            <span>${this.t('sdTrack')}</span>
            <span class="iq-filter-badge">${sdCount}</span>
          </button>
        </div>

        <!-- Quick Summary Stats Grid -->
        <div class="iq-stats-bar">
          <div class="iq-stat-card">
            <span class="iq-stat-num">${filteredQuestions.length}</span>
            <span class="iq-stat-label">${this.t('questionsDisplayed')}</span>
          </div>
          <div class="iq-stat-card">
            <span class="iq-stat-num" style="color:var(--color-success);">${easyCount}</span>
            <span class="iq-stat-label">${this.t('easyStat')}</span>
          </div>
          <div class="iq-stat-card">
            <span class="iq-stat-num" style="color:var(--color-warning);">${medCount}</span>
            <span class="iq-stat-label">${this.t('medStat')}</span>
          </div>
          <div class="iq-stat-card">
            <span class="iq-stat-num" style="color:var(--color-danger);">${hardCount}</span>
            <span class="iq-stat-label">${this.t('hardStat')}</span>
          </div>
          <div class="iq-stat-card">
            <span class="iq-stat-num" style="color:var(--color-purple);">${expCount}</span>
            <span class="iq-stat-label">${this.t('expStat')}</span>
          </div>
        </div>

        <!-- Filter Tabs & Quick Action Bar -->
        <div class="view-controls-bar">
          <div class="iq-filter-tabs-row" style="margin:0; border:none; padding:0; background:transparent;">
            <button class="iq-filter-btn ${diffFilter === 'all' ? 'active' : ''}" onclick="App.setQuizDifficultyFilter('all')">
              <span>${this.t('allDifficulties')}</span>
              <span class="iq-filter-badge">${filteredQuestions.length}</span>
            </button>
            <button class="iq-filter-btn ${diffFilter === 'easy' ? 'active' : ''}" onclick="App.setQuizDifficultyFilter('easy')">
              <span>${this.t('diffEasy')}</span>
              <span class="iq-filter-badge">${easyCount}</span>
            </button>
            <button class="iq-filter-btn ${diffFilter === 'medium' ? 'active' : ''}" onclick="App.setQuizDifficultyFilter('medium')">
              <span>${this.t('diffMed')}</span>
              <span class="iq-filter-badge">${medCount}</span>
            </button>
            <button class="iq-filter-btn ${diffFilter === 'hard' ? 'active' : ''}" onclick="App.setQuizDifficultyFilter('hard')">
              <span>${this.t('diffHard')}</span>
              <span class="iq-filter-badge">${hardCount}</span>
            </button>
            <button class="iq-filter-btn ${diffFilter === 'expert' ? 'active' : ''}" onclick="App.setQuizDifficultyFilter('expert')">
              <span>${this.t('diffExp')}</span>
              <span class="iq-filter-badge">${expCount}</span>
            </button>
          </div>

          <div class="quick-actions">
            <button class="action-btn-sm" onclick="App.toggleAllQuizAnswers(true)">${this.t('openAllAnswers')}</button>
            <button class="action-btn-sm" onclick="App.toggleAllQuizAnswers(false)">${this.t('collapseAll')}</button>
            <button class="action-btn-sm" data-mark-read="${mod.id}" onclick="App.toggleMarkRead('${mod.id}')">
              ${isRead ? this.t('unmarkModuleRead') : this.t('markModuleRead')}
            </button>
          </div>
        </div>

        <!-- Questions List Cards -->
        <div class="iq-questions-list">
          ${filteredQuestions.map((q, idx) => {
            const isHintOpen = this.openHints.has(q.id);
            const isAnsOpen = this.openAnswers.has(q.id);

            let diffClass = 'diff-easy';
            if (q.difficulty === 'medium') diffClass = 'diff-medium';
            else if (q.difficulty === 'hard') diffClass = 'diff-hard';
            else if (q.difficulty === 'expert') diffClass = 'diff-expert';

            return `
              <div class="iq-question-card" id="${q.id}">
                <div class="iq-card-top-bar">
                  <div class="iq-badges-group">
                    <span class="diff-badge ${diffClass}">${q.difficultyLabel}</span>
                    <span class="iq-cat-pill">${q.categoryAr} (${q.category})</span>
                  </div>
                  <span class="iq-num-badge">${this.t('questionNum', idx + 1)}</span>
                </div>

                <h2 class="iq-card-title-ar">${this.currentLang === 'en' ? q.titleEn : q.title}</h2>
                <div class="iq-card-title-en">${this.currentLang === 'en' ? q.title : q.titleEn}</div>

                <div class="iq-question-text">${q.question}</div>

                <!-- Collapsible Controls -->
                <div class="iq-collapsible-group">
                  <!-- Hints Toggle & Pane -->
                  ${q.hints && q.hints.length > 0 ? `
                    <button class="iq-toggle-btn" onclick="App.toggleQuizHint('${q.id}')">
                      <span>${this.t('interviewHints', q.hints.length)}</span>
                      <span id="hint-arrow-${q.id}">${isHintOpen ? '▲' : '▼'}</span>
                    </button>
                    <div class="iq-collapsible-pane ${isHintOpen ? 'show' : ''}" id="hint-pane-${q.id}">
                      <ul class="iq-hints-list">
                        ${q.hints.map(h => `
                          <li class="iq-hint-item">
                            <span class="iq-hint-bullet">▸</span>
                            <span>${h}</span>
                          </li>
                        `).join('')}
                      </ul>
                    </div>
                  ` : ''}

                  <!-- Model Answer Toggle & Pane -->
                  <button class="iq-toggle-btn btn-answer" onclick="App.toggleQuizAnswer('${q.id}')">
                    <span>${this.t('modelAnswerTitle')}</span>
                    <span id="ans-arrow-${q.id}">${isAnsOpen ? '▲' : '▼'}</span>
                  </button>
                  <div class="iq-collapsible-pane ${isAnsOpen ? 'show' : ''}" id="ans-pane-${q.id}">
                    <div class="iq-answer-body">
                      ${this.parseMarkdownSimple(q.answer)}
                    </div>
                  </div>
                </div>

                <!-- Keywords / Tags Footer -->
                ${q.keywords && q.keywords.length > 0 ? `
                  <div class="iq-keywords-row">
                    <span style="font-size:0.75rem; color:var(--text-subtle); font-weight:700;">${this.t("keywordsLabel")}</span>
                    ${q.keywords.map(kw => `<span class="iq-kw-tag">${kw}</span>`).join('')}
                  </div>
                ` : ''}
              </div>
            `;
          }).join('')}
        </div>

        <!-- Footer Navigation -->
        <div class="module-footer-nav" style="margin-top:2.5rem;">
          <a href="#module-9" class="nav-page-btn">
            <span class="nav-page-label">${this.t('prevModule')}</span>
            <span class="nav-page-title">9. ${this.currentLang === 'en' ? 'Interactive Code Lab' : 'مختبر الأكواد والتطبيق البرمجي'}</span>
          </a>
          
          <a href="#module-1" class="nav-page-btn">
            <span class="nav-page-label">${this.t('backToStart')}</span>
            <span class="nav-page-title">1. ${this.currentLang === 'en' ? 'In a Hurry & Framework' : 'المسار السريع ومنهجية المقابلة'}</span>
          </a>
        </div>
      </div>
    `;

    container.innerHTML = html;
  },

  renderSectionCard(sec) {
    let html = `
      <div class="topic-card" id="${sec.id}">
        <div class="topic-card-header">
          <div>
            <h2 class="topic-title">${sec.title}</h2>
          </div>
          <span class="topic-category-tag">${sec.number}</span>
        </div>
        <p class="topic-description">${sec.description}</p>
    `;

    // Inline Diagram for Section
    if (sec.diagramId && SystemDesignDiagrams[sec.diagramId]) {
      html += `
        <div class="diagram-container-card" style="margin: 1rem 0;">
          <div class="diagram-header">
            <span class="diagram-caption">${this.t("sectionDiagram")}</span>
          </div>
          ${SystemDesignDiagrams.render(sec.diagramId)}
        </div>
      `;
    }

    // Table if present
    if (sec.table) {
      html += `
        <div class="table-responsive">
          <table class="sd-table">
            <thead>
              <tr>
                ${sec.table.headers.map(h => `<th>${h}</th>`).join('')}
              </tr>
            </thead>
            <tbody>
              ${sec.table.rows.map(row => `
                <tr>
                  ${row.map(cell => `<td>${cell}</td>`).join('')}
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;
    }

    // Three Levels Progression
    if (sec.levels) {
      html += `<div class="levels-container">`;
      if (sec.levels.l1) {
        html += `
          <div class="level-row level-1">
            <span class="level-badge">${sec.levels.l1.badge}</span>
            <p class="level-text">${sec.levels.l1.text}</p>
          </div>
        `;
      }
      if (sec.levels.l2) {
        html += `
          <div class="level-row level-2">
            <span class="level-badge">${sec.levels.l2.badge}</span>
            <p class="level-text">${sec.levels.l2.text}</p>
          </div>
        `;
      }
      if (sec.levels.l3) {
        html += `
          <div class="level-row level-3">
            <span class="level-badge">${sec.levels.l3.badge}</span>
            <p class="level-text">${sec.levels.l3.text}</p>
          </div>
        `;
      }
      html += `</div>`;
    }

    html += `</div>`;
    return html;
  },

  renderProblemCard(prob) {
    let html = `
      <div class="topic-card" id="${prob.id}">
        <div class="topic-card-header">
          <div>
            <h2 class="topic-title">${prob.number} ${prob.title}</h2>
          </div>
          <span class="topic-category-tag">${prob.category}</span>
        </div>

        <!-- Calculations Callout -->
        <div class="calc-box">
          <div class="calc-box-title">${this.t("calcTitle")}</div>
          <div class="calc-box-content">${prob.calculations}</div>
        </div>
    `;

    // Diagram if available
    if (prob.diagramId && SystemDesignDiagrams[prob.diagramId]) {
      html += `
        <div class="diagram-container-card" style="margin: 1rem 0;">
          <div class="diagram-header">
            <span class="diagram-caption">معمارية النظام: ${prob.title.split('—')[0]}</span>
          </div>
          ${SystemDesignDiagrams.render(prob.diagramId)}
        </div>
      `;
    }

    // Three Levels
    html += `<div class="levels-container">`;
    if (prob.l1) {
      html += `
        <div class="level-row level-1">
          <span class="level-badge">${this.t("l1Badge")}</span>
          <p class="level-text">${prob.l1}</p>
        </div>
      `;
    }
    if (prob.l2) {
      html += `
        <div class="level-row level-2">
          <span class="level-badge">${this.t("l2Badge")}</span>
          <p class="level-text">${prob.l2}</p>
        </div>
      `;
    }
    if (prob.l3) {
      html += `
        <div class="level-row level-3">
          <span class="level-badge">${this.t("l3Badge")}</span>
          <p class="level-text">${prob.l3}</p>
        </div>
      `;
    }
    html += `</div></div>`;
    return html;
  },

  renderCaseStudyCard(cs) {
    return `
      <div class="case-card" id="${cs.id}">
        <div class="case-company-header">
          <h2 class="topic-title">${cs.title}</h2>
          <span class="company-pill">${cs.company}</span>
        </div>

        <div class="case-section-block">
          <div class="case-subtitle">${this.t("caseBottleneck")}</div>
          <p class="case-body">${cs.problem}</p>
        </div>

        <div class="case-section-block">
          <div class="case-subtitle">${this.t("caseSolution")}</div>
          <p class="case-body">${cs.solution}</p>
        </div>

        <div class="case-insight">
          <strong>${this.t("caseInsight")}</strong> ${cs.productionInsight}
        </div>
      </div>
    `;
  },

  renderCapstoneBlock(capstone, moduleId) {
    const solutionId = `sol-${moduleId}`;
    return `
      <div class="capstone-container">
        <div class="capstone-badge">${this.t("capstoneBadge")}</div>
        <h2 class="capstone-title">${capstone.title}</h2>
        <div class="capstone-scenario">
          <strong>${this.t("scenarioLabel")}</strong> ${capstone.scenario}
        </div>

        <div class="hidden-solution-wrapper">
          <button class="solution-toggle-btn" onclick="App.toggleSolution('${solutionId}')">
            <span>${this.t("showCapstoneSolution")}</span>
            <span class="toggle-arrow" id="arrow-${solutionId}">▼</span>
          </button>
          <div class="hidden-solution-content" id="${solutionId}">
            <p style="color:var(--text-subtle); margin-bottom:1rem; font-weight:600;">${capstone.hiddenSolution.summary}</p>
            ${capstone.hiddenSolution.steps.map(step => `
              <div class="solution-step">
                <div class="solution-step-title">${step.title}</div>
                <div class="solution-step-body">${step.content}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  },

  // Toggle single solution accordion
  toggleSolution(id) {
    const content = document.getElementById(id);
    const arrow = document.getElementById(`arrow-${id}`);
    if (!content) return;
    const isOpen = content.classList.contains('open');
    if (isOpen) {
      content.classList.remove('open');
      if (arrow) arrow.style.transform = 'rotate(0deg)';
    } else {
      content.classList.add('open');
      if (arrow) arrow.style.transform = 'rotate(180deg)';
    }
  },

  // Expand or Collapse All Solutions on page
  toggleAllSolutions(open) {
    document.querySelectorAll('.hidden-solution-content').forEach(content => {
      if (open) {
        content.classList.add('open');
      } else {
        content.classList.remove('open');
      }
    });
    document.querySelectorAll('.toggle-arrow').forEach(arrow => {
      arrow.style.transform = open ? 'rotate(180deg)' : 'rotate(0deg)';
    });
  },

  setLevelFilter(level) {
    this.activeLevelFilter = level;
    
    // Update data attribute on wrapper for instantaneous CSS-based filtering
    const wrapper = document.querySelector('.content-wrapper');
    if (wrapper) {
      wrapper.setAttribute('data-level-filter', level);
    }

    // Update active class on filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
      const btnLevel = btn.getAttribute('data-level');
      if (btnLevel === level) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  },

  toggleMarkRead(modId) {
    if (this.readModules.has(modId)) {
      this.readModules.delete(modId);
    } else {
      this.readModules.add(modId);
    }
    this.saveProgress();
