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

  init() {
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
    if (labelEl) labelEl.textContent = `${pct}% (${count}/${total} أقسام)`;
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
    const current = document.documentElement.getAttribute('data-theme') || 'light';
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

    let html = `<div class="nav-group-header">الأقسام التعليمية الرئيسية</div>`;

    SystemDesignData.modules.forEach((mod) => {
      const itemCount = mod.sections ? mod.sections.length : (mod.problems ? mod.problems.length : (mod.caseStudies ? mod.caseStudies.length : (mod.studioChallenges ? mod.studioChallenges.length : (mod.algorithms ? mod.algorithms.length : 0))));
      const isCompleted = this.readModules.has(mod.id);

      html += `
        <a href="#${mod.id}" class="nav-link ${mod.id === this.currentModuleId ? 'active' : ''}" data-id="${mod.id}">
          <span>${mod.number}. ${mod.title.split('—')[0].trim()}</span>
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

    let contentHtml = `
      <div class="content-wrapper" data-level-filter="${this.activeLevelFilter}">
        <!-- Module Header -->
        <div class="module-header">
          <span class="module-tag">القسم ${mod.number} من 9</span>
          <h1 class="module-title">${mod.title}</h1>
          <p class="module-subtitle">${mod.subtitle}</p>
        </div>

        <!-- Level Filter & Controls Bar -->
        <div class="view-controls-bar">
          <div class="level-filters">
            <span style="font-size:0.825rem; font-weight:700; color:var(--text-subtle); margin-left:0.5rem;">تصفية المستويات:</span>
            <button class="filter-btn ${this.activeLevelFilter === 'all' ? 'active' : ''}" data-level="all" onclick="App.setLevelFilter('all')">كافة المستويات</button>
            <button class="filter-btn ${this.activeLevelFilter === '1' ? 'active' : ''}" data-level="1" onclick="App.setLevelFilter('1')">المستوى 1 (الأساسيات)</button>
            <button class="filter-btn ${this.activeLevelFilter === '2' ? 'active' : ''}" data-level="2" onclick="App.setLevelFilter('2')">المستوى 2 (المعمارية)</button>
            <button class="filter-btn ${this.activeLevelFilter === '3' ? 'active' : ''}" data-level="3" onclick="App.setLevelFilter('3')">المستوى 3 (Staff+)</button>
          </div>
          <div class="quick-actions">
            <button class="action-btn-sm" onclick="App.toggleAllSolutions(true)">فتح كافة الحلول</button>
            <button class="action-btn-sm" onclick="App.toggleAllSolutions(false)">طي الكل</button>
            <button class="action-btn-sm" data-mark-read="${mod.id}" onclick="App.toggleMarkRead('${mod.id}')">
              ${isRead ? 'إلغاء التحديد كـ مقروء' : 'تحديد القسم كـ مكتمل ✓'}
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
            <span class="nav-page-label">← القسم السابق</span>
            <span class="nav-page-title">${prevMod.number}. ${prevMod.title.split('—')[0]}</span>
          </a>
        ` : `<div></div>`}
        
        ${nextMod ? `
          <a href="#${nextMod.id}" class="nav-page-btn" style="text-align: left;">
            <span class="nav-page-label">القسم التالي →</span>
            <span class="nav-page-title">${nextMod.number}. ${nextMod.title.split('—')[0]}</span>
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
              ${isRead ? 'إلغاء التحديد كـ مقروء' : 'تحديد الاستوديو كـ مكتمل ✓'}
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
                    <strong>⚡ استراتيجية التكرار والتوافرية العالية:</strong> ${activeChallenge.databaseArchitecture.replicationStrategy}
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
                          <button class="ddl-copy-btn" onclick="App.copySnippetText(this, \`${encodeURIComponent(schema.ddl)}\`)">نسخ الكود 📋</button>
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
                    <button class="ddl-copy-btn" onclick="App.copySnippetText(this, \`${encodeURIComponent(activeChallenge.dataExchange.apiContractSample.snippet)}\`)">نسخ العقد 📋</button>
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
                ${isRead ? 'إلغاء التحديد كـ مقروء' : 'تحديد المختبر كـ مكتمل ✓'}
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
                <span>💻 محرر الكود التفاعلي (Interactive JavaScript Editor)</span>
                <span class="brand-badge" style="font-family:var(--font-mono); font-size:0.7rem;">ES6+ Runtime</span>
              </div>
              <div class="panel-actions-group">
                <button class="btn-editor-action" onclick="App.resetCurrentAlgoCode()" title="استعادة الكود الأصلي للخوارزمية">
                  ↺ إعادة ضبط
                </button>
                <button class="btn-editor-action" id="copyCodeBtn" onclick="App.copyCodeToClipboard()" title="نسخ الكود">
                  📋 نسخ
                </button>
                <button class="btn-editor-action btn-run-code" onclick="App.runCodeSandbox()" title="تشغيل الكود (Ctrl + Enter)">
                  ▶ تشغيل الكود (Run)
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
                <span>📟 نافذة المخرجات وسجلات التنفيذ (Execution Terminal)</span>
                <span class="execution-status-badge status-ready" id="executionStatusBadge">⚡ جاهز للتشغيل</span>
              </div>
              <div class="panel-actions-group">
                <button class="btn-editor-action" onclick="App.clearConsoleOutput()" title="مسح سجلات الشاشة">
                  🗑️ مسح الشاشة
                </button>
              </div>
            </div>

            <div class="terminal-body" id="terminalOutputBody">
              <div class="terminal-log-row log-info">// اضغط على زر "▶ تشغيل الكود (Run)" أو (Ctrl + Enter) لتشغيل الخوارزمية وملاحظة النتائج اللحظية...</div>
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
          
          <a href="#module-1" class="nav-page-btn" style="text-align: left;">
            <span class="nav-page-label">العودة للبداية</span>
            <span class="nav-page-title">1. المسار السريع ←</span>
          </a>
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
        statusBadge.textContent = `❌ خطأ في التنفيذ (${elapsed}ms)`;
      } else {
        statusBadge.className = 'execution-status-badge status-success';
        statusBadge.textContent = `✅ تم التنفيذ بنجاح (${elapsed}ms)`;
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
      terminal.innerHTML = `<div class="terminal-log-row log-info">// تم مسح الشاشة. اضغط على "▶ تشغيل الكود" للبدء مجدداً...</div>`;
    }
    if (statusBadge) {
      statusBadge.className = 'execution-status-badge status-ready';
      statusBadge.textContent = `⚡ جاهز للتشغيل`;
    }
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
            <span class="diagram-caption">المخطط التوضيحي للقسم</span>
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
          <div class="calc-box-title">المتطلبات والحسابات التقديرية (Back-of-the-envelope)</div>
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
          <span class="level-badge">المستوى 1 (الأساسيات): مسار البيانات المبدئي والتخزين</span>
          <p class="level-text">${prob.l1}</p>
        </div>
      `;
    }
    if (prob.l2) {
      html += `
        <div class="level-row level-2">
          <span class="level-badge">المستوى 2 (المعمارية): التوسع، الكاش، وتقسيم البيانات (Sharding)</span>
          <p class="level-text">${prob.l2}</p>
        </div>
      `;
    }
    if (prob.l3) {
      html += `
        <div class="level-row level-3">
          <span class="level-badge">المستوى 3 (Staff+ Edge Cases): التنافس العالي، مقاومة الأعطال، والإنتاج</span>
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
          <div class="case-subtitle">التحدي وعنق الزجاجة (The Bottleneck)</div>
          <p class="case-body">${cs.problem}</p>
        </div>

        <div class="case-section-block">
          <div class="case-subtitle">المعمارية والحل الهندسي (The Architectural Solution)</div>
          <p class="case-body">${cs.solution}</p>
        </div>

        <div class="case-insight">
          <strong>درس الإنتاج (Production Insight):</strong> ${cs.productionInsight}
        </div>
      </div>
    `;
  },

  renderCapstoneBlock(capstone, moduleId) {
    const solutionId = `sol-${moduleId}`;
    return `
      <div class="capstone-container">
        <div class="capstone-badge">مثال تطبيقي كبير وشامل (Capstone Example)</div>
        <h2 class="capstone-title">${capstone.title}</h2>
        <div class="capstone-scenario">
          <strong>السيناريو المطلوب:</strong> ${capstone.scenario}
        </div>

        <div class="hidden-solution-wrapper">
          <button class="solution-toggle-btn" onclick="App.toggleSolution('${solutionId}')">
            <span>عرض الحل المعماري الكامل والتفاصيل الهندسية</span>
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
    this.renderSidebarNav();
    
    // Update any mark read button in view immediately
    const isRead = this.readModules.has(modId);
    document.querySelectorAll(`[data-mark-read="${modId}"]`).forEach(btn => {
      if (modId === 'module-8') {
        btn.textContent = isRead ? 'إلغاء التحديد كـ مقروء' : 'تحديد الاستوديو كـ مكتمل ✓';
      } else if (modId === 'module-9') {
        btn.textContent = isRead ? 'إلغاء التحديد كـ مقروء' : 'تحديد المختبر كـ مكتمل ✓';
      } else {
        btn.textContent = isRead ? 'إلغاء التحديد كـ مقروء' : 'تحديد القسم كـ مكتمل ✓';
      }
    });
  },

  handleSearch(query) {
    const q = query.trim().toLowerCase();
    const searchPane = document.getElementById('searchOverlayPane');
    const mainContent = document.getElementById('mainContentArea');
    const clearBtn = document.getElementById('searchClearBtn');

    if (clearBtn) {
      clearBtn.style.display = q ? 'block' : 'none';
    }

    if (!q) {
      if (searchPane) searchPane.classList.remove('active');
      if (mainContent) mainContent.style.display = 'block';
      return;
    }

    if (mainContent) mainContent.style.display = 'none';
    if (!searchPane) return;
    searchPane.classList.add('active');

    const hits = [];

    SystemDesignData.modules.forEach(mod => {
      // Match module
      if (mod.title.toLowerCase().includes(q) || mod.subtitle.toLowerCase().includes(q)) {
        hits.push({
          title: `${mod.number}. ${mod.title}`,
          snippet: mod.subtitle,
          link: `#${mod.id}`
        });
      }
      // Match sections
      if (mod.sections) {
        mod.sections.forEach(sec => {
          if (sec.title.toLowerCase().includes(q) || sec.description.toLowerCase().includes(q)) {
            hits.push({
              title: `${sec.number} ${sec.title}`,
              snippet: sec.description,
              link: `#${sec.id}`
            });
          }
        });
      }
      // Match problems
      if (mod.problems) {
        mod.problems.forEach(prob => {
          if (prob.title.toLowerCase().includes(q) || (prob.l1 && prob.l1.toLowerCase().includes(q)) || (prob.l2 && prob.l2.toLowerCase().includes(q)) || (prob.l3 && prob.l3.toLowerCase().includes(q))) {
            hits.push({
              title: `${prob.number} ${prob.title}`,
              snippet: `${prob.category} — ${(prob.l1 || '').substring(0, 140)}...`,
              link: `#${prob.id}`
            });
          }
        });
      }

      // Match studio challenges & schemas
      if (mod.studioChallenges) {
        mod.studioChallenges.forEach(c => {
          const schemaMatch = c.databaseSchemas && c.databaseSchemas.some(s => s.tableName.toLowerCase().includes(q) || s.description.toLowerCase().includes(q));
          if (c.appName.toLowerCase().includes(q) || c.overview.toLowerCase().includes(q) || c.tag.toLowerCase().includes(q) || schemaMatch) {
            hits.push({
              title: `المختبر العملي: ${c.appName}`,
              snippet: `${c.tag} — ${c.overview.substring(0, 140)}...`,
              link: `#${c.id}`
            });
          }
        });
      }

      // Match Code Lab Algorithms
      if (mod.algorithms) {
        mod.algorithms.forEach(a => {
          if (a.name.toLowerCase().includes(q) || a.description.toLowerCase().includes(q) || a.category.toLowerCase().includes(q)) {
            hits.push({
              title: `مختبر الأكواد: ${a.name}`,
              snippet: `${a.category} — ${a.description.substring(0, 140)}...`,
              link: `#${a.id}`
            });
          }
        });
      }
    });

    if (hits.length === 0) {
      searchPane.innerHTML = `
        <div style="text-align: center; padding: 2.5rem; color: var(--text-muted);">
          <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">🔍</div>
          <div>لم يتم العثور على نتائج مطابقة لـ "<strong>${query}</strong>"</div>
        </div>
      `;
    } else {
      searchPane.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.25rem;">
          <h3 style="font-size: 1.1rem; color: var(--color-primary);">
            نتائج البحث (${hits.length}):
          </h3>
          <button class="action-btn-sm" onclick="App.clearSearch()">إغلاق نتائج البحث</button>
        </div>
        ${hits.map(hit => `
          <div class="search-hit-item" onclick="window.location.hash='${hit.link}'; App.clearSearch();">
            <div class="search-hit-title">${hit.title}</div>
            <div class="search-hit-snippet">${hit.snippet}</div>
          </div>
        `).join('')}
      `;
    }
  },

  clearSearch() {
    const searchInput = document.getElementById('globalSearchInput');
    if (searchInput) {
      searchInput.value = '';
    }
    const clearBtn = document.getElementById('searchClearBtn');
    if (clearBtn) {
      clearBtn.style.display = 'none';
    }
    const searchPane = document.getElementById('searchOverlayPane');
    const mainContent = document.getElementById('mainContentArea');
    if (searchPane) searchPane.classList.remove('active');
    if (mainContent) mainContent.style.display = 'block';
  }
};

// Expose App globally
window.App = App;

// Initialize on DOM Ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => App.init());
} else {
  App.init();
}
