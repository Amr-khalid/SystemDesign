/**
 * diagrams.js - High Precision Scalable Vector Graphics for System Design Mastery
 * Pure SVG diagrams for distributed systems concepts and architectures.
 */

const SystemDesignDiagrams = {
  // Helper to wrap SVG with standard responsive container
  wrapSVG(svgContent, viewBox = "0 0 900 420") {
    return `<div class="svg-diagram-wrapper">
      <svg viewBox="${viewBox}" xmlns="http://www.w3.org/2000/svg" class="sd-svg">
        <defs>
          <linearGradient id="gradPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.15"/>
            <stop offset="100%" stop-color="#1d4ed8" stop-opacity="0.05"/>
          </linearGradient>
          <linearGradient id="gradAccent" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#10b981" stop-opacity="0.2"/>
            <stop offset="100%" stop-color="#059669" stop-opacity="0.05"/>
          </linearGradient>
          <linearGradient id="gradWarn" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.2"/>
            <stop offset="100%" stop-color="#d97706" stop-opacity="0.05"/>
          </linearGradient>
          <linearGradient id="gradPurple" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.2"/>
            <stop offset="100%" stop-color="#6d28d9" stop-opacity="0.05"/>
          </linearGradient>
          <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#64748b"/>
          </marker>
          <marker id="arrowPrimary" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#38bdf8"/>
          </marker>
          <marker id="arrowEmerald" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#10b981"/>
          </marker>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        ${svgContent}
      </svg>
    </div>`;
  },

  // 1. Architecture Evolution (Monolith -> Horizontal Scale -> Microservices) [RTL Flow: Right -> Left]
  architectureEvolution() {
    return this.wrapSVG(`
      <g transform="translate(20, 20)">
        <!-- Stage 1: Monolith (Rightmost) -->
        <rect x="610" y="40" width="250" height="320" rx="8" class="diagram-box base-box" />
        <text x="735" y="70" class="diagram-title" text-anchor="middle">المستوى 1: النظام الأحادي (Monolith)</text>
        
        <rect x="640" y="100" width="190" height="70" rx="6" class="diagram-node node-blue" />
        <text x="735" y="130" class="diagram-node-title" text-anchor="middle">Monolithic App</text>
        <text x="735" y="150" class="diagram-node-sub" text-anchor="middle">All Services in 1 Binary</text>

        <path d="M 735 170 L 735 220" class="diagram-line" marker-end="url(#arrow)" />

        <rect x="640" y="230" width="190" height="70" rx="6" class="diagram-node node-orange" />
        <text x="735" y="260" class="diagram-node-title" text-anchor="middle">Single Database</text>
        <text x="735" y="280" class="diagram-node-sub" text-anchor="middle">ACID / Shared Data</text>

        <!-- Connector 1 to 2 (Points Left) -->
        <path d="M 610 200 L 580 200" class="diagram-line-flow" marker-end="url(#arrowPrimary)" />

        <!-- Stage 2: Horizontal Scaling (Center) -->
        <rect x="310" y="40" width="260" height="320" rx="8" class="diagram-box base-box" />
        <text x="440" y="70" class="diagram-title" text-anchor="middle">المستوى 2: التوسع الأفقي والكاش</text>
        
        <rect x="340" y="95" width="200" height="40" rx="6" class="diagram-node node-purple" />
        <text x="440" y="120" class="diagram-node-title" text-anchor="middle">Load Balancer (Nginx/HAProxy)</text>

        <path d="M 400 135 L 380 165" class="diagram-line" marker-end="url(#arrow)" />
        <path d="M 480 135 L 500 165" class="diagram-line" marker-end="url(#arrow)" />

        <rect x="340" y="165" width="90" height="45" rx="6" class="diagram-node node-blue" />
        <text x="385" y="192" class="diagram-node-title" text-anchor="middle">App Node 1</text>

        <rect x="450" y="165" width="90" height="45" rx="6" class="diagram-node node-blue" />
        <text x="495" y="192" class="diagram-node-title" text-anchor="middle">App Node 2</text>

        <rect x="340" y="230" width="200" height="40" rx="6" class="diagram-node node-emerald" />
        <text x="440" y="255" class="diagram-node-title" text-anchor="middle">Redis Distributed Cache</text>

        <rect x="340" y="290" width="90" height="45" rx="6" class="diagram-node node-orange" />
        <text x="385" y="315" class="diagram-node-title" text-anchor="middle">DB Master</text>

        <rect x="450" y="290" width="90" height="45" rx="6" class="diagram-node node-orange" />
        <text x="495" y="315" class="diagram-node-title" text-anchor="middle">DB Replica</text>

        <!-- Connector 2 to 3 (Points Left) -->
        <path d="M 310 200 L 280 200" class="diagram-line-flow" marker-end="url(#arrowPrimary)" />

        <!-- Stage 3: Modern Microservices (Leftmost) -->
        <rect x="10" y="40" width="260" height="320" rx="8" class="diagram-box base-box" />
        <text x="140" y="70" class="diagram-title" text-anchor="middle">المستوى 3: الخدمات المصغرة والتدفق</text>

        <rect x="40" y="95" width="200" height="35" rx="6" class="diagram-node node-purple" />
        <text x="140" y="117" class="diagram-node-title" text-anchor="middle">API Gateway + Mesh</text>

        <rect x="35" y="145" width="60" height="40" rx="4" class="diagram-node node-blue" />
        <text x="65" y="170" class="diagram-node-title" text-anchor="middle">Auth</text>

        <rect x="110" y="145" width="60" height="40" rx="4" class="diagram-node node-blue" />
        <text x="140" y="170" class="diagram-node-title" text-anchor="middle">Order</text>

        <rect x="185" y="145" width="60" height="40" rx="4" class="diagram-node node-blue" />
        <text x="215" y="170" class="diagram-node-title" text-anchor="middle">Payment</text>

        <rect x="35" y="200" width="210" height="35" rx="6" class="diagram-node node-red" />
        <text x="140" y="222" class="diagram-node-title" text-anchor="middle">Kafka Event Backbone (Pub/Sub)</text>

        <rect x="35" y="255" width="60" height="40" rx="4" class="diagram-node node-orange" />
        <text x="65" y="280" class="diagram-node-title" text-anchor="middle">Postgres</text>

        <rect x="110" y="255" width="60" height="40" rx="4" class="diagram-node node-emerald" />
        <text x="140" y="280" class="diagram-node-title" text-anchor="middle">Dynamo</text>

        <rect x="185" y="255" width="60" height="40" rx="4" class="diagram-node node-purple" />
        <text x="215" y="280" class="diagram-node-title" text-anchor="middle">Elastic</text>

        <rect x="35" y="310" width="210" height="35" rx="6" class="diagram-node node-emerald" />
        <text x="140" y="332" class="diagram-node-title" text-anchor="middle">Active-Active Multi-Region</text>
      </g>
    `);
  },

  // 2. 45-Minute Interview Timeline (RTL Flow: Right -> Left)
  interviewTimeline() {
    return this.wrapSVG(`
      <g transform="translate(30, 40)">
        <text x="420" y="10" class="diagram-title" text-anchor="middle">إطار الـ 45 دقيقة القياسي لمقابلات تصميم النظم (Standard 45-Min Framework)</text>
        
        <!-- Timeline Bar (Flows Right to Left) -->
        <rect x="20" y="45" width="800" height="12" rx="6" fill="#1e293b" />

        <!-- Phase 1 (Rightmost: x = 660 to 820) -->
        <rect x="670" y="45" width="150" height="12" rx="6" fill="#38bdf8" />
        <circle cx="745" cy="51" r="14" class="timeline-dot dot-blue" />
        <text x="745" y="55" class="diagram-number-badge" text-anchor="middle">1</text>
        <rect x="660" y="80" width="160" height="180" rx="8" class="diagram-node node-blue" />
        <text x="740" y="105" class="diagram-node-title" text-anchor="middle">1. فهم النطاق والمتطلبات</text>
        <text x="740" y="125" class="diagram-node-sub" text-anchor="middle">5 - 8 دقائق</text>
        <text x="675" y="155" class="diagram-body-text">• Functional Reqs</text>
        <text x="675" y="175" class="diagram-body-text">• Non-Functional</text>
        <text x="675" y="195" class="diagram-body-text">• QPS & Storage Est.</text>
        <text x="675" y="215" class="diagram-body-text">• تحديد القيود والحدود</text>

        <!-- Phase 2 (Center-Right: x = 440 to 620) -->
        <rect x="440" y="45" width="220" height="12" fill="#818cf8" />
        <circle cx="550" cy="51" r="14" class="timeline-dot dot-indigo" />
        <text x="550" y="55" class="diagram-number-badge" text-anchor="middle">2</text>
        <rect x="460" y="80" width="180" height="180" rx="8" class="diagram-node node-purple" />
        <text x="550" y="105" class="diagram-node-title" text-anchor="middle">2. التصميم عالي المستوى</text>
        <text x="550" y="125" class="diagram-node-sub" text-anchor="middle">10 - 15 دقيقة</text>
        <text x="475" y="155" class="diagram-body-text">• High-Level Blocks</text>
        <text x="475" y="175" class="diagram-body-text">• مسار القراءة والكتابة</text>
        <text x="475" y="195" class="diagram-body-text">• Database Choice</text>
        <text x="475" y="215" class="diagram-body-text">• API Endpoints Draft</text>

        <!-- Phase 3 (Center-Left: x = 200 to 430) -->
        <rect x="180" y="45" width="250" height="12" fill="#34d399" />
        <circle cx="310" cy="51" r="14" class="timeline-dot dot-emerald" />
        <text x="310" y="55" class="diagram-number-badge" text-anchor="middle">3</text>
        <rect x="200" y="80" width="230" height="180" rx="8" class="diagram-node node-emerald" />
        <text x="315" y="105" class="diagram-node-title" text-anchor="middle">3. التعمق في المكونات (Deep Dive)</text>
        <text x="315" y="125" class="diagram-node-sub" text-anchor="middle">15 - 20 دقيقة (قلب المقابلة)</text>
        <text x="215" y="155" class="diagram-body-text">• Caching & Concurrency Control</text>
        <text x="215" y="175" class="diagram-body-text">• Database Sharding & Schemas</text>
        <text x="215" y="195" class="diagram-body-text">• خوارزميات التجزئة والتوزيع</text>
        <text x="215" y="215" class="diagram-body-text">• معالجة التنافس (Race Cond)</text>

        <!-- Phase 4 (Leftmost: x = 20 to 170) -->
        <rect x="20" y="45" width="150" height="12" rx="6" fill="#fbbf24" />
        <circle cx="95" cy="51" r="14" class="timeline-dot dot-amber" />
        <text x="95" y="55" class="diagram-number-badge" text-anchor="middle">4</text>
        <rect x="20" y="80" width="160" height="180" rx="8" class="diagram-node node-orange" />
        <text x="100" y="105" class="diagram-node-title" text-anchor="middle">4. الاختناقات والخاتمة</text>
        <text x="100" y="125" class="diagram-node-sub" text-anchor="middle">3 - 5 دقائق</text>
        <text x="35" y="155" class="diagram-body-text">• SPOF Identification</text>
        <text x="35" y="175" class="diagram-body-text">• Metrics & Alerts</text>
        <text x="35" y="195" class="diagram-body-text">• المقايضات (Trade-offs)</text>
        <text x="35" y="215" class="diagram-body-text">• أسئلة استشرافية</text>

        <!-- Summary Note at bottom -->
        <rect x="20" y="280" width="800" height="55" rx="6" class="diagram-box note-box" />
        <text x="420" y="305" class="diagram-body-text" text-anchor="middle">قاعدة ذهبية: يبدأ التسلسل من اليمين (فهم النطاق والـ Scale) وينتهي في اليسار (معالجة نقاط الانهيار).</text>
        <text x="420" y="325" class="diagram-body-text" text-anchor="middle">المهندس المميز (Staff+) يقود الحوار ويبرر كل قرار باختبارات الأداء والأرقام البديلة.</text>
      </g>
    `, "0 0 900 400");
  },

  // 3. Caching Strategies Flow (RTL Flow: Right -> Left)
  cachingStrategies() {
    return this.wrapSVG(`
      <g transform="translate(30, 20)">
        <text x="420" y="20" class="diagram-title" text-anchor="middle">مقارنة أنماط التخزين المؤقت المعمارية (Caching Patterns Architecture)</text>

        <!-- 1. Cache-Aside (Top Right: x = 430 to 830) -->
        <rect x="430" y="45" width="400" height="160" rx="8" class="diagram-box base-box" />
        <text x="630" y="70" class="diagram-node-title" text-anchor="middle" fill="#38bdf8">1. نمط التحميل الكسول (Cache-Aside / Lazy Loading)</text>
        
        <rect x="720" y="90" width="95" height="40" rx="6" class="diagram-node node-blue" />
        <text x="767" y="115" class="diagram-node-title" text-anchor="middle">App</text>

        <rect x="580" y="90" width="95" height="40" rx="6" class="diagram-node node-emerald" />
        <text x="627" y="115" class="diagram-node-title" text-anchor="middle">Cache</text>

        <rect x="445" y="90" width="90" height="40" rx="6" class="diagram-node node-orange" />
        <text x="490" y="115" class="diagram-node-title" text-anchor="middle">Database</text>

        <path d="M 720 102 L 680 102" class="diagram-line" marker-end="url(#arrowPrimary)" />
        <text x="700" y="95" class="diagram-tag" text-anchor="middle">1. Check</text>

        <path d="M 720 120 L 540 120" class="diagram-line" marker-end="url(#arrow)" />
        <text x="630" y="140" class="diagram-tag" text-anchor="middle">2. Miss → Fetch DB</text>

        <text x="630" y="180" class="diagram-tag" text-anchor="middle">3. App Populates Cache | مناسب لعمليات القراءة الكثيفة (Read-Heavy)</text>

        <!-- 2. Write-Through (Top Left: x = 10 to 410) -->
        <rect x="10" y="45" width="400" height="160" rx="8" class="diagram-box base-box" />
        <text x="210" y="70" class="diagram-node-title" text-anchor="middle" fill="#34d399">2. الكتابة المتزامنة (Write-Through)</text>
        
        <rect x="300" y="90" width="95" height="40" rx="6" class="diagram-node node-blue" />
        <text x="347" y="115" class="diagram-node-title" text-anchor="middle">App</text>

        <rect x="160" y="90" width="95" height="40" rx="6" class="diagram-node node-emerald" />
        <text x="207" y="115" class="diagram-node-title" text-anchor="middle">Cache</text>

        <rect x="25" y="90" width="90" height="40" rx="6" class="diagram-node node-orange" />
        <text x="70" y="115" class="diagram-node-title" text-anchor="middle">Database</text>

        <path d="M 300 110 L 260 110" class="diagram-line" marker-end="url(#arrowEmerald)" />
        <text x="280" y="102" class="diagram-tag" text-anchor="middle">1. Write</text>

        <path d="M 160 110 L 120 110" class="diagram-line" marker-end="url(#arrow)" />
        <text x="140" y="102" class="diagram-tag" text-anchor="middle">2. Sync DB</text>

        <text x="210" y="180" class="diagram-tag" text-anchor="middle">الكاش يحدث الـ DB فوراً | يمنع تناقض البيانات ولكن يزيد زمن الكتابة</text>

        <!-- 3. Write-Back (Bottom Right: x = 430 to 830) -->
        <rect x="430" y="220" width="400" height="160" rx="8" class="diagram-box base-box" />
        <text x="630" y="245" class="diagram-node-title" text-anchor="middle" fill="#f59e0b">3. الكتابة الخلفية غير المتزامنة (Write-Back)</text>
        
        <rect x="720" y="265" width="95" height="40" rx="6" class="diagram-node node-blue" />
        <text x="767" y="290" class="diagram-node-title" text-anchor="middle">App</text>

        <rect x="580" y="265" width="95" height="40" rx="6" class="diagram-node node-emerald" />
        <text x="627" y="290" class="diagram-node-title" text-anchor="middle">Cache (Async)</text>

        <rect x="445" y="265" width="90" height="40" rx="6" class="diagram-node node-orange" />
        <text x="490" y="290" class="diagram-node-title" text-anchor="middle">Database</text>

        <path d="M 720 285 L 680 285" class="diagram-line" marker-end="url(#arrowEmerald)" />
        <text x="700" y="277" class="diagram-tag" text-anchor="middle">1. Ack Fast</text>

        <path d="M 580 285 L 540 285" class="diagram-line-flow" marker-end="url(#arrow)" />
        <text x="560" y="277" class="diagram-tag" text-anchor="middle">2. Async Batch</text>

        <text x="630" y="355" class="diagram-tag" text-anchor="middle">استجابة فائقة السرعة | خطر فقدان بيانات إذا تعطل الكاش قبل التفريغ</text>

        <!-- 4. Cache Crisis Mitigation (Bottom Left: x = 10 to 410) -->
        <rect x="10" y="220" width="400" height="160" rx="8" class="diagram-box base-box" />
        <text x="210" y="245" class="diagram-node-title" text-anchor="middle" fill="#f43f5e">4. حماية الأزمات (Stampede, Penetration, Avalanche)</text>
        
        <rect x="275" y="265" width="115" height="35" rx="6" class="diagram-node node-red" />
        <text x="332" y="287" class="diagram-node-title" text-anchor="middle">Stampede Fix</text>

        <rect x="150" y="265" width="115" height="35" rx="6" class="diagram-node node-purple" />
        <text x="207" y="287" class="diagram-node-title" text-anchor="middle">Penetration Fix</text>

        <rect x="25" y="265" width="115" height="35" rx="6" class="diagram-node node-blue" />
        <text x="82" y="287" class="diagram-node-title" text-anchor="middle">Avalanche Fix</text>

        <text x="332" y="325" class="diagram-tag" text-anchor="middle">Distributed Mutex / Lock</text>
        <text x="207" y="325" class="diagram-tag" text-anchor="middle">Bloom Filters + Null TTL</text>
        <text x="82" y="325" class="diagram-tag" text-anchor="middle">Random TTL Jitter</text>

        <text x="210" y="360" class="diagram-tag" text-anchor="middle">معمارية الـ L1 Local (Caffeine) + L2 Remote (Redis) لتوفير أقصى متانة</text>
      </g>
    `, "0 0 880 400");
  },

  // 4. Consistent Hashing Ring (RTL Flow: Ring on Right, Details on Left)
  consistentHashing() {
    return this.wrapSVG(`
      <g transform="translate(50, 20)">
        <text x="380" y="25" class="diagram-title" text-anchor="middle">التجزئة المتسقة وحلقة العقد الافتراضية (Consistent Hashing Ring & Virtual Nodes)</text>

        <!-- Big Circle Hash Ring (On Right Side: cx=560) -->
        <circle cx="560" cy="220" r="130" fill="none" stroke="#334155" stroke-width="6" stroke-dasharray="6,6" />
        
        <!-- Angle markers -->
        <text x="560" y="75" class="diagram-tag" text-anchor="middle">Hash 0 / 2^32-1</text>
        <text x="705" y="225" class="diagram-tag" text-anchor="start">90°</text>
        <text x="560" y="370" class="diagram-tag" text-anchor="middle">180°</text>
        <text x="415" y="225" class="diagram-tag" text-anchor="end">270°</text>

        <!-- Physical Node A (and its virtual nodes) -->
        <circle cx="560" cy="90" r="14" class="timeline-dot dot-blue" />
        <text x="560" y="95" class="diagram-number-badge" text-anchor="middle">A1</text>

        <circle cx="680" cy="275" r="12" class="timeline-dot dot-blue" opacity="0.8" />
        <text x="680" y="279" class="diagram-number-badge" text-anchor="middle">A2</text>

        <!-- Physical Node B -->
        <circle cx="690" cy="220" r="14" class="timeline-dot dot-emerald" />
        <text x="690" y="225" class="diagram-number-badge" text-anchor="middle">B1</text>

        <circle cx="440" cy="290" r="12" class="timeline-dot dot-emerald" opacity="0.8" />
        <text x="440" y="294" class="diagram-number-badge" text-anchor="middle">B2</text>

        <!-- Physical Node C -->
        <circle cx="500" cy="345" r="14" class="timeline-dot dot-purple" />
        <text x="500" y="350" class="diagram-number-badge" text-anchor="middle">C1</text>

        <circle cx="450" cy="135" r="12" class="timeline-dot dot-purple" opacity="0.8" />
        <text x="450" y="139" class="diagram-number-badge" text-anchor="middle">C2</text>

        <!-- Key Mapping Flow -->
        <circle cx="635" cy="120" r="8" fill="#f59e0b" />
        <text x="650" y="115" class="diagram-node-title" fill="#f59e0b">Key_104</text>
        
        <!-- Arrow showing clockwise routing -->
        <path d="M 640 130 A 130 130 0 0 1 685 200" fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="4,4" marker-end="url(#arrow)" />
        <text x="690" y="155" class="diagram-tag" fill="#f59e0b">Next Node → B1</text>

        <!-- Explanatory Box on the Left (x = 30 to 350) -->
        <rect x="30" y="60" width="330" height="300" rx="8" class="diagram-box base-box" />
        <text x="50" y="90" class="diagram-node-title" fill="#38bdf8">مميزات Consistent Hashing</text>

        <text x="50" y="125" class="diagram-body-text">• إعادة تعيين الحد الأدنى فقط (k/N) من المفاتيح</text>
        <text x="50" y="145" class="diagram-body-text">  عند إضافة أو إزالة أي خادم فيزيائي.</text>

        <text x="50" y="180" class="diagram-node-title" fill="#34d399">العقد الافتراضية (Virtual Nodes)</text>
        <text x="50" y="205" class="diagram-body-text">• كل خادم يملك 100 - 256 نقطة موزعة بانتظام</text>
        <text x="50" y="225" class="diagram-body-text">• القضاء التام على البقع الساخنة (Hotspots)</text>
        <text x="50" y="245" class="diagram-body-text">• تفاوت السعات حسب قوة الخادم الفيزيائي</text>

        <text x="50" y="280" class="diagram-node-title" fill="#a78bfa">النسخ الاحتياطي (Replication N=3)</text>
        <text x="50" y="305" class="diagram-body-text">• تخزين النسخة في العقد الـ N التالية مع مراعاة</text>
        <text x="50" y="325" class="diagram-body-text">  توزيعها عبر Rack-aware zones مختلفة.</text>
      </g>
    `, "0 0 860 410");
  },

  // 5. CAP & PACELC Matrix (RTL Flow: Triangle on Right, Matrix on Left)
  capTheorem() {
    return this.wrapSVG(`
      <g transform="translate(30, 20)">
        <text x="420" y="25" class="diagram-title" text-anchor="middle">نظرية CAP ونظرية PACELC لتفاضل الأنظمة الموزعة</text>

        <!-- CAP Triangle (On Right Side: x = 500 to 800) -->
        <polygon points="680,70 560,270 800,270" fill="url(#gradPrimary)" stroke="#38bdf8" stroke-width="2.5" />

        <!-- Nodes of triangle -->
        <circle cx="680" cy="70" r="16" class="timeline-dot dot-blue" />
        <text x="680" y="75" class="diagram-number-badge" text-anchor="middle">C</text>
        <text x="680" y="45" class="diagram-node-title" text-anchor="middle" fill="#38bdf8">الاتساق (Consistency)</text>

        <circle cx="800" cy="270" r="16" class="timeline-dot dot-emerald" />
        <text x="800" y="275" class="diagram-number-badge" text-anchor="middle">A</text>
        <text x="815" y="305" class="diagram-node-title" text-anchor="middle" fill="#34d399">التوافر (Availability)</text>

        <circle cx="560" cy="270" r="16" class="timeline-dot dot-amber" />
        <text x="560" y="275" class="diagram-number-badge" text-anchor="middle">P</text>
        <text x="540" y="305" class="diagram-node-title" text-anchor="middle" fill="#fbbf24">مقاومة الانقطاع (Partition)</text>

        <!-- Labels along edges -->
        <text x="600" y="165" class="diagram-tag">CP (Spanner, Raft)</text>
        <text x="750" y="165" class="diagram-tag">AP (Cassandra, Dynamo)</text>
        <text x="680" y="260" class="diagram-tag" text-anchor="middle" fill="#f43f5e">CA غير واقعي في الشبكات</text>

        <!-- PACELC Breakdown Card (On Left Side: x = 20 to 450) -->
        <rect x="20" y="60" width="440" height="290" rx="8" class="diagram-box base-box" />
        <text x="40" y="90" class="diagram-node-title" fill="#a78bfa">توسعة PACELC الشاملة</text>
        <text x="40" y="115" class="diagram-body-text">إذا حدث انقطاع (Partition): نختار بين A و C.</text>
        <text x="40" y="135" class="diagram-body-text">في الحالة الطبيعية (Else): نختار بين Latency (L) و Consistency (C).</text>

        <rect x="240" y="155" width="200" height="70" rx="6" class="diagram-node node-purple" />
        <text x="340" y="180" class="diagram-node-title" text-anchor="middle">PA / EL</text>
        <text x="340" y="205" class="diagram-node-sub" text-anchor="middle">DynamoDB, Cassandra</text>

        <rect x="30" y="155" width="200" height="70" rx="6" class="diagram-node node-blue" />
        <text x="130" y="180" class="diagram-node-title" text-anchor="middle">PC / EC</text>
        <text x="130" y="205" class="diagram-node-sub" text-anchor="middle">Google Spanner, Cockroach</text>

        <text x="40" y="255" class="diagram-node-title" fill="#34d399">معادلة النصاب القانوني (Quorum Formula)</text>
        <text x="40" y="280" class="diagram-body-text" fill="#38bdf8" font-weight="700">R + W > N  (لضمان الاتساق القوي المتزامن)</text>
        <text x="40" y="305" class="diagram-tag">N: عدد النسخ | W: موافقات الكتابة | R: موافقات القراءة</text>
      </g>
    `, "0 0 860 380");
  },

  // 6. B+ Tree vs LSM Tree Storage Engine (RTL Flow: B+ Tree on Right, LSM on Left)
  storageEngines() {
    return this.wrapSVG(`
      <g transform="translate(20, 20)">
        <text x="430" y="25" class="diagram-title" text-anchor="middle">محركات التخزين: B+ Tree (للقراءة) مقابل LSM-Tree (للكتابة الفائقة)</text>

        <!-- B+ Tree Side (Rightmost: x = 440 to 840) -->
        <rect x="440" y="55" width="400" height="330" rx="8" class="diagram-box base-box" />
        <text x="640" y="85" class="diagram-node-title" text-anchor="middle" fill="#38bdf8">B+ Tree (Postgres InnoDB, Oracle)</text>

        <!-- Root Node -->
        <rect x="570" y="105" width="140" height="30" rx="4" class="diagram-node node-blue" />
        <text x="640" y="125" class="diagram-node-title" text-anchor="middle">[ 20 | 50 | 80 ] Root</text>

        <path d="M 595 135 L 530 165" class="diagram-line" marker-end="url(#arrow)" />
        <path d="M 640 135 L 640 165" class="diagram-line" marker-end="url(#arrow)" />
        <path d="M 685 135 L 750 165" class="diagram-line" marker-end="url(#arrow)" />

        <!-- Internal Nodes -->
        <rect x="480" y="165" width="95" height="28" rx="4" class="diagram-node node-blue" />
        <text x="527" y="183" class="diagram-tag" text-anchor="middle">[ 5 | 12 ]</text>

        <rect x="593" y="165" width="95" height="28" rx="4" class="diagram-node node-blue" />
        <text x="640" y="183" class="diagram-tag" text-anchor="middle">[ 30 | 45 ]</text>

        <rect x="705" y="165" width="95" height="28" rx="4" class="diagram-node node-blue" />
        <text x="752" y="183" class="diagram-tag" text-anchor="middle">[ 60 | 75 ]</text>

        <!-- Leaf Level with Linked Pointers -->
        <rect x="460" y="225" width="360" height="30" rx="4" class="diagram-node node-emerald" />
        <text x="640" y="245" class="diagram-node-title" text-anchor="middle">Leaf Pages with Linked List (O(log N) Range)</text>

        <text x="465" y="290" class="diagram-body-text">• تحديث في نفس الصفحة الفيزيائية (In-place update)</text>
        <text x="465" y="315" class="diagram-body-text">• مضاعفة كتابة عالية بسبب عشوائية الـ Random I/O</text>
        <text x="465" y="340" class="diagram-body-text">• مثالي للبيانات العلائقية والاستعلام بالنطاق</text>

        <!-- LSM Tree Side (Leftmost: x = 20 to 420) -->
        <rect x="20" y="55" width="400" height="330" rx="8" class="diagram-box base-box" />
        <text x="220" y="85" class="diagram-node-title" text-anchor="middle" fill="#34d399">LSM-Tree (Cassandra, RocksDB, Scylla)</text>

        <!-- MemTable + WAL in RAM -->
        <rect x="230" y="105" width="170" height="40" rx="4" class="diagram-node node-emerald" />
        <text x="315" y="125" class="diagram-node-title" text-anchor="middle">RAM: MemTable</text>
        <text x="315" y="139" class="diagram-node-sub" text-anchor="middle">Sorted Red-Black Tree</text>

        <rect x="40" y="105" width="170" height="40" rx="4" class="diagram-node node-orange" />
        <text x="125" y="125" class="diagram-node-title" text-anchor="middle">Disk: Write-Ahead Log</text>
        <text x="125" y="139" class="diagram-node-sub" text-anchor="middle">Sequential Append (Crash)</text>

        <!-- Flush to SSTables -->
        <path d="M 315 145 L 315 185" class="diagram-line-flow" marker-end="url(#arrowEmerald)" />
        <text x="240" y="170" class="diagram-tag">Flush to Disk</text>

        <!-- SSTables Levels -->
        <rect x="40" y="185" width="360" height="35" rx="4" class="diagram-node node-purple" />
        <text x="220" y="207" class="diagram-node-title" text-anchor="middle">Level 0 SSTables (Immutable Sorted Files)</text>

        <rect x="40" y="230" width="360" height="35" rx="4" class="diagram-node node-purple" />
        <text x="220" y="252" class="diagram-node-title" text-anchor="middle">Level 1 & 2 SSTables (Compacted Merge)</text>

        <text x="40" y="295" class="diagram-body-text">• سرعة كتابة مذهلة عبر التسجيل التسلسلي (Sequential I/O)</text>
        <text x="40" y="320" class="diagram-body-text">• استخدام Bloom Filters لتسريع القراءة وتخطي الملفات</text>
        <text x="40" y="345" class="diagram-body-text">• دمج دوري (Compaction) لحذف البيانات وشواهد القبور</text>
      </g>
    `, "0 0 870 410");
  },

  // 7. Bitly URL Shortener Full Architecture (RTL Flow: Right -> Left)
  bitlyArchitecture() {
    return this.wrapSVG(`
      <g transform="translate(30, 20)">
        <text x="410" y="25" class="diagram-title" text-anchor="middle">معمارية تقصير الروابط الفائقة (Bitly URL Shortener Architecture)</text>

        <!-- Client (Rightmost: x = 710) -->
        <rect x="710" y="90" width="100" height="50" rx="6" class="diagram-node node-blue" />
        <text x="760" y="115" class="diagram-node-title" text-anchor="middle">Client</text>
        <text x="760" y="130" class="diagram-node-sub" text-anchor="middle">Browser / Mobile</text>

        <path d="M 710 115 L 670 115" class="diagram-line-flow" marker-end="url(#arrowPrimary)" />

        <!-- CDN -->
        <rect x="550" y="90" width="110" height="50" rx="6" class="diagram-node node-emerald" />
        <text x="605" y="115" class="diagram-node-title" text-anchor="middle">Cloudflare CDN</text>
        <text x="605" y="130" class="diagram-node-sub" text-anchor="middle">Edge 301/302 Cache</text>

        <path d="M 550 115 L 500 115" class="diagram-line-flow" marker-end="url(#arrowPrimary)" />

        <!-- Load Balancer & API Gateway -->
        <rect x="370" y="80" width="120" height="70" rx="6" class="diagram-node node-purple" />
        <text x="430" y="110" class="diagram-node-title" text-anchor="middle">API Gateway</text>
        <text x="430" y="130" class="diagram-node-sub" text-anchor="middle">Rate Limit & Auth</text>

        <!-- Read Flow (To Redis) -->
        <path d="M 370 100 L 310 70" class="diagram-line" marker-end="url(#arrowEmerald)" />
        <rect x="180" y="45" width="120" height="50" rx="6" class="diagram-node node-emerald" />
        <text x="240" y="70" class="diagram-node-title" text-anchor="middle">Redis Cluster</text>
        <text x="240" y="85" class="diagram-node-sub" text-anchor="middle">Top 20% Hot URLs</text>

        <!-- Write Flow (To Write Service) -->
        <path d="M 370 130 L 310 160" class="diagram-line" marker-end="url(#arrowPrimary)" />
        <rect x="180" y="140" width="120" height="50" rx="6" class="diagram-node node-blue" />
        <text x="240" y="165" class="diagram-node-title" text-anchor="middle">Write Service</text>
        <text x="240" y="180" class="diagram-node-sub" text-anchor="middle">URL Shortening</text>

        <!-- KGS Service -->
        <rect x="180" y="225" width="120" height="50" rx="6" class="diagram-node node-orange" />
        <text x="240" y="250" class="diagram-node-title" text-anchor="middle">KGS Service</text>
        <text x="240" y="265" class="diagram-node-sub" text-anchor="middle">Base62 Pre-gen</text>

        <path d="M 240 225 L 240 190" class="diagram-line" marker-end="url(#arrow)" />

        <!-- Sharded DB (Leftmost: x = 20) -->
        <rect x="20" y="90" width="130" height="100" rx="6" class="diagram-node node-orange" />
        <text x="85" y="125" class="diagram-node-title" text-anchor="middle">Sharded DB</text>
        <text x="85" y="150" class="diagram-node-sub" text-anchor="middle">hash(short_key)%N</text>
        <text x="85" y="170" class="diagram-tag" text-anchor="middle">6B records / 5 yrs</text>

        <path d="M 180 70 L 150 110" class="diagram-line" marker-end="url(#arrow)" />
        <path d="M 180 165 L 150 145" class="diagram-line" marker-end="url(#arrow)" />

        <!-- Analytics Pipeline -->
        <rect x="370" y="225" width="120" height="50" rx="6" class="diagram-node node-red" />
        <text x="430" y="250" class="diagram-node-title" text-anchor="middle">Kafka Topic</text>
        <text x="430" y="265" class="diagram-node-sub" text-anchor="middle">Click Events Stream</text>

        <path d="M 430 150 L 430 225" class="diagram-line" marker-end="url(#arrow)" />

        <rect x="550" y="225" width="110" height="50" rx="6" class="diagram-node node-purple" />
        <text x="605" y="250" class="diagram-node-title" text-anchor="middle">ClickHouse DB</text>
        <text x="605" y="265" class="diagram-node-sub" text-anchor="middle">Real-time Analytics</text>

        <path d="M 490 250 L 550 250" class="diagram-line-flow" marker-end="url(#arrowPrimary)" />

        <!-- Summary Banner -->
        <rect x="20" y="300" width="810" height="50" rx="6" class="diagram-box note-box" />
        <text x="425" y="322" class="diagram-body-text" text-anchor="middle">Base62 Encoding يوفر 3.5 تريليون مفتاح فريد عبر 7 خانات فقط [a-z, A-Z, 0-9]</text>
        <text x="425" y="340" class="diagram-tag" text-anchor="middle">يبدأ الطلب من العميل على اليمين ويمر بالبوابة حتى قواعد البيانات والتحليلات على اليسار.</text>
      </g>
    `, "0 0 860 380");
  },

  // 8. Uber / Ride Hailing Real-Time Architecture (RTL Flow: Right -> Left)
  uberArchitecture() {
    return this.wrapSVG(`
      <g transform="translate(20, 20)">
        <text x="430" y="25" class="diagram-title" text-anchor="middle">معمارية منصات النقل التشاركي والمطابقة الجغرافية (Uber / Lyft Architecture)</text>

        <!-- Driver App (Rightmost: x = 700) -->
        <rect x="700" y="60" width="130" height="60" rx="6" class="diagram-node node-blue" />
        <text x="765" y="85" class="diagram-node-title" text-anchor="middle">Driver App</text>
        <text x="765" y="105" class="diagram-node-sub" text-anchor="middle">GPS ping / 4 sec</text>

        <!-- Rider App -->
        <rect x="700" y="160" width="130" height="60" rx="6" class="diagram-node node-emerald" />
        <text x="765" y="185" class="diagram-node-title" text-anchor="middle">Rider App</text>
        <text x="765" y="205" class="diagram-node-sub" text-anchor="middle">Request Ride & ETA</text>

        <!-- WebSocket Gateway Cluster -->
        <rect x="500" y="60" width="160" height="160" rx="8" class="diagram-node node-purple" />
        <text x="580" y="95" class="diagram-node-title" text-anchor="middle">WebSocket Gateway</text>
        <text x="580" y="120" class="diagram-node-sub" text-anchor="middle">Millions of Open TCP</text>
        <text x="580" y="150" class="diagram-tag" text-anchor="middle">Connection Registry</text>
        <text x="580" y="170" class="diagram-tag" text-anchor="middle">Heartbeat Monitor</text>

        <path d="M 700 90 L 660 90" class="diagram-line-flow" marker-end="url(#arrowPrimary)" />
        <path d="M 700 190 L 660 190" class="diagram-line-flow" marker-end="url(#arrowEmerald)" />

        <!-- Location Ingestion & H3 Resolver -->
        <rect x="280" y="60" width="170" height="70" rx="6" class="diagram-node node-red" />
        <text x="365" y="85" class="diagram-node-title" text-anchor="middle">Location Ingestion</text>
        <text x="365" y="105" class="diagram-node-sub" text-anchor="middle">Uber H3 Hexagon Resolver</text>
        <text x="365" y="120" class="diagram-tag" text-anchor="middle">Resolution Index Res-8</text>

        <path d="M 500 95 L 450 95" class="diagram-line" marker-end="url(#arrow)" />

        <!-- Spatial In-Memory Storage (Leftmost: x = 30) -->
        <rect x="30" y="60" width="200" height="70" rx="6" class="diagram-node node-emerald" />
        <text x="130" y="85" class="diagram-node-title" text-anchor="middle">Redis Geospatial / RAM</text>
        <text x="130" y="105" class="diagram-node-sub" text-anchor="middle">Key: h3_cell_id</text>
        <text x="130" y="120" class="diagram-tag" text-anchor="middle">Value: Active Driver Set</text>

        <path d="M 280 95 L 230 95" class="diagram-line-flow" marker-end="url(#arrowEmerald)" />

        <!-- Dispatch & Match Engine -->
        <rect x="280" y="160" width="170" height="70" rx="6" class="diagram-node node-orange" />
        <text x="365" y="185" class="diagram-node-title" text-anchor="middle">Dispatch & Match Engine</text>
        <text x="365" y="205" class="diagram-node-sub" text-anchor="middle">Weighted Bipartite Match</text>
        <text x="365" y="220" class="diagram-tag" text-anchor="middle">Ring Search (k-ring 1, 2)</text>

        <path d="M 500 190 L 450 190" class="diagram-line" marker-end="url(#arrow)" />
        <path d="M 230 115 L 280 180" class="diagram-line" marker-end="url(#arrow)" />

        <!-- Dynamic Pricing & ML ETA Engine (Leftmost: x = 30) -->
        <rect x="30" y="160" width="200" height="70" rx="6" class="diagram-node node-purple" />
        <text x="130" y="185" class="diagram-node-title" text-anchor="middle">Surge Pricing & ML ETA</text>
        <text x="130" y="205" class="diagram-node-sub" text-anchor="middle">Supply/Demand Ratio</text>
        <text x="130" y="220" class="diagram-tag" text-anchor="middle">Recalculated every 10s</text>

        <path d="M 280 195 L 230 195" class="diagram-line" marker-end="url(#arrow)" />

        <!-- Storage & Trip Lifecycle -->
        <rect x="30" y="260" width="800" height="60" rx="6" class="diagram-box base-box" />
        <text x="430" y="285" class="diagram-node-title" text-anchor="middle">Trip Lifecycle Storage (PostgreSQL Sharded by City + Kafka Event Stream)</text>
        <text x="430" y="305" class="diagram-tag" text-anchor="middle">Driver Locking: Redis Mutex (10s TTL) عند تقديم العرض لمنع مطابقة السائق نفسه مع راكبين في نفس اللحظة.</text>
      </g>
    `, "0 0 860 360");
  },

  // 9. WhatsApp / Real-time Chat Architecture (RTL Flow: Right -> Left)
  chatArchitecture() {
    return this.wrapSVG(`
      <g transform="translate(20, 20)">
        <text x="430" y="25" class="diagram-title" text-anchor="middle">معمارية المحادثات الفورية المشفرة والتواجد (WhatsApp E2EE Architecture)</text>

        <!-- Sender App (Rightmost: x = 710) -->
        <rect x="710" y="70" width="120" height="60" rx="6" class="diagram-node node-blue" />
        <text x="770" y="95" class="diagram-node-title" text-anchor="middle">Sender (Alice)</text>
        <text x="770" y="115" class="diagram-node-sub" text-anchor="middle">E2EE Encrypted</text>

        <path d="M 710 100 L 660 100" class="diagram-line-flow" marker-end="url(#arrowPrimary)" />

        <!-- Chat Gateway Tier (Sender) -->
        <rect x="520" y="60" width="140" height="150" rx="8" class="diagram-node node-purple" />
        <text x="590" y="90" class="diagram-node-title" text-anchor="middle">Sender Gateway</text>
        <text x="590" y="110" class="diagram-node-sub" text-anchor="middle">Erlang / BEAM Node</text>
        <text x="590" y="140" class="diagram-tag" text-anchor="middle">Persistent Socket</text>
        <text x="590" y="160" class="diagram-tag" text-anchor="middle">Binary Payload</text>

        <!-- Presence & User Session Store -->
        <rect x="330" y="50" width="150" height="60" rx="6" class="diagram-node node-emerald" />
        <text x="405" y="75" class="diagram-node-title" text-anchor="middle">Presence Service</text>
        <text x="405" y="95" class="diagram-node-sub" text-anchor="middle">Redis Bitmaps (5s)</text>

        <path d="M 520 90 L 480 80" class="diagram-line" marker-end="url(#arrowEmerald)" />

        <rect x="330" y="130" width="150" height="60" rx="6" class="diagram-node node-orange" />
        <text x="405" y="155" class="diagram-node-title" text-anchor="middle">User Session Store</text>
        <text x="405" y="175" class="diagram-node-sub" text-anchor="middle">Redis (user→server)</text>

        <path d="M 520 135 L 480 150" class="diagram-line" marker-end="url(#arrow)" />

        <!-- Receiver Gateways (Bob) -->
        <rect x="150" y="60" width="140" height="150" rx="8" class="diagram-node node-purple" />
        <text x="220" y="90" class="diagram-node-title" text-anchor="middle">Receiver Gateway</text>
        <text x="220" y="110" class="diagram-node-sub" text-anchor="middle">Destination Server</text>
        <text x="220" y="150" class="diagram-tag" text-anchor="middle">Push to Socket</text>

        <path d="M 330 160 L 290 135" class="diagram-line-flow" marker-end="url(#arrowPrimary)" />

        <!-- Receiver App (Leftmost: x = 20) -->
        <rect x="20" y="70" width="100" height="60" rx="6" class="diagram-node node-emerald" />
        <text x="70" y="95" class="diagram-node-title" text-anchor="middle">Receiver (Bob)</text>
        <text x="70" y="115" class="diagram-node-sub" text-anchor="middle">Decrypts locally</text>

        <path d="M 150 100 L 120 100" class="diagram-line-flow" marker-end="url(#arrowEmerald)" />

        <!-- Offline Queue -->
        <rect x="200" y="220" width="370" height="60" rx="6" class="diagram-node node-red" />
        <text x="385" y="245" class="diagram-node-title" text-anchor="middle">Offline Message Store (Cassandra / RocksDB)</text>
        <text x="385" y="265" class="diagram-node-sub" text-anchor="middle">تحذف الرسالة نهائياً فور استلام علامتي الصح الزرقاء (Double Tick)</text>

        <path d="M 590 210 L 590 250 L 570 250" class="diagram-line" marker-end="url(#arrow)" />

        <!-- Summary Note -->
        <rect x="20" y="305" width="810" height="45" rx="6" class="diagram-box note-box" />
        <text x="425" y="330" class="diagram-body-text" text-anchor="middle">بروتوكول Double Ratchet يضمن السرية التامة — يبدأ الإرسال من اليمين وينتقل مشفراً نحو المستلم على اليسار.</text>
      </g>
    `, "0 0 860 370");
  },

  // 10. Distributed Saga Pattern (RTL Flow: Orchestration on Right, Steps Right -> Left)
  sagaPattern() {
    return this.wrapSVG(`
      <g transform="translate(20, 20)">
        <text x="430" y="25" class="diagram-title" text-anchor="middle">نمط Saga للمعاملات الموزعة (Orchestration & Workflow RTL)</text>

        <!-- Orchestration Workflow Box -->
        <rect x="20" y="55" width="820" height="230" rx="8" class="diagram-box base-box" />
        <text x="430" y="85" class="diagram-node-title" text-anchor="middle" fill="#38bdf8">تسلسل المعاملة الموزعة (Saga Orchestration Flow: من اليمين إلى اليسار)</text>

        <!-- Step 1: Orchestrator & Order (Rightmost: x = 630) -->
        <rect x="630" y="110" width="180" height="65" rx="6" class="diagram-node node-blue" />
        <text x="720" y="135" class="diagram-node-title" text-anchor="middle">1. Saga Orchestrator</text>
        <text x="720" y="155" class="diagram-node-sub" text-anchor="middle">OrderCreated (Tx Start)</text>

        <!-- Step 2: Payment Service (Center-Right: x = 430) -->
        <rect x="430" y="110" width="160" height="65" rx="6" class="diagram-node node-orange" />
        <text x="510" y="135" class="diagram-node-title" text-anchor="middle">2. Payment Service</text>
        <text x="510" y="155" class="diagram-node-sub" text-anchor="middle">Charge Card / Lock</text>

        <path d="M 630 142 L 590 142" class="diagram-line-flow" marker-end="url(#arrowPrimary)" />

        <!-- Step 3: Stock / Inventory (Center-Left: x = 230) -->
        <rect x="230" y="110" width="160" height="65" rx="6" class="diagram-node node-purple" />
        <text x="310" y="135" class="diagram-node-title" text-anchor="middle">3. Inventory Service</text>
        <text x="310" y="155" class="diagram-node-sub" text-anchor="middle">Reserve Stock Items</text>

        <path d="M 430 142 L 390 142" class="diagram-line-flow" marker-end="url(#arrowEmerald)" />

        <!-- Step 4: Shipping / Logistics (Leftmost: x = 40) -->
        <rect x="40" y="110" width="150" height="65" rx="6" class="diagram-node node-emerald" />
        <text x="115" y="135" class="diagram-node-title" text-anchor="middle">4. Delivery Service</text>
        <text x="115" y="155" class="diagram-node-sub" text-anchor="middle">Shipment Created</text>

        <path d="M 230 142 L 190 142" class="diagram-line-flow" marker-end="url(#arrowEmerald)" />

        <!-- Compensating Transaction Line (Rollback Arrow Left to Right on Failure) -->
        <path d="M 115 175 L 115 220 L 720 220 L 720 175" class="diagram-line" stroke="#ef4444" stroke-dasharray="4,4" />
        <text x="430" y="240" class="diagram-tag" text-anchor="middle" fill="#ef4444">Compensating Transactions: تراجع تعويضي تلقائي في حال فشل أي خطوة وسيطة</text>

        <!-- Summary -->
        <rect x="20" y="300" width="820" height="50" rx="6" class="diagram-box note-box" />
        <text x="430" y="322" class="diagram-body-text" text-anchor="middle">المنسق (Orchestrator) يبدأ على اليمين ويمرر الأوامر خطوة بخطوة باتجاه اليسار.</text>
        <text x="430" y="340" class="diagram-tag" text-anchor="middle">استخدام محرك الحالات (State Machine) يلغي الاعتماديات الدائرية ويضمن سلامة البيانات الموزعة.</text>
      </g>
    `, "0 0 860 370");
  },

  // 11. Kafka Topic Architecture (RTL Flow: Producers on Right -> Brokers -> Consumers on Left)
  kafkaArchitecture() {
    return this.wrapSVG(`
      <g transform="translate(20, 20)">
        <text x="430" y="25" class="diagram-title" text-anchor="middle">معمارية Apache Kafka: الأقسام ومجموعات المستهلكين (Partitions & Consumers RTL)</text>

        <!-- Producers (Rightmost: x = 680) -->
        <rect x="680" y="70" width="130" height="175" rx="8" class="diagram-node node-blue" />
        <text x="745" y="105" class="diagram-node-title" text-anchor="middle">Producers</text>
        <text x="745" y="130" class="diagram-node-sub" text-anchor="middle">Order App</text>
        <text x="745" y="155" class="diagram-node-sub" text-anchor="middle">Payment App</text>
        <text x="745" y="185" class="diagram-tag" text-anchor="middle">hash(key)%N</text>

        <path d="M 680 115 L 610 115" class="diagram-line-flow" marker-end="url(#arrowPrimary)" />
        <path d="M 680 165 L 610 165" class="diagram-line-flow" marker-end="url(#arrowPrimary)" />
        <path d="M 680 215 L 610 215" class="diagram-line-flow" marker-end="url(#arrowPrimary)" />

        <!-- Kafka Topic Box (Center: x = 240 to 610) -->
        <rect x="240" y="55" width="370" height="230" rx="8" class="diagram-box base-box" />
        <text x="425" y="80" class="diagram-node-title" text-anchor="middle" fill="#f43f5e">Topic: order-events (Append-Only Log)</text>

        <!-- Partition 0 -->
        <rect x="260" y="95" width="330" height="40" rx="4" class="diagram-node node-purple" />
        <text x="270" y="120" class="diagram-node-title" fill="#a78bfa">Partition 0</text>
        <rect x="360" y="102" width="25" height="25" rx="4" class="kafka-offset-box active" /><text x="372" y="119" class="kafka-offset-num active" text-anchor="middle">3</text>
        <rect x="390" y="102" width="25" height="25" rx="4" class="kafka-offset-box" /><text x="402" y="119" class="kafka-offset-num" text-anchor="middle">2</text>
        <rect x="420" y="102" width="25" height="25" rx="4" class="kafka-offset-box" /><text x="432" y="119" class="kafka-offset-num" text-anchor="middle">1</text>
        <rect x="450" y="102" width="25" height="25" rx="4" class="kafka-offset-box" /><text x="462" y="119" class="kafka-offset-num" text-anchor="middle">0</text>
        <text x="535" y="120" class="diagram-tag" fill="#38bdf8">Latest Offset</text>

        <!-- Partition 1 -->
        <rect x="260" y="150" width="330" height="40" rx="4" class="diagram-node node-purple" />
        <text x="270" y="175" class="diagram-node-title" fill="#a78bfa">Partition 1</text>
        <rect x="360" y="157" width="25" height="25" rx="4" class="kafka-offset-box active" /><text x="372" y="174" class="kafka-offset-num active" text-anchor="middle">2</text>
        <rect x="390" y="157" width="25" height="25" rx="4" class="kafka-offset-box" /><text x="402" y="174" class="kafka-offset-num" text-anchor="middle">1</text>
        <rect x="420" y="157" width="25" height="25" rx="4" class="kafka-offset-box" /><text x="432" y="174" class="kafka-offset-num" text-anchor="middle">0</text>

        <!-- Partition 2 -->
        <rect x="260" y="205" width="330" height="40" rx="4" class="diagram-node node-purple" />
        <text x="270" y="230" class="diagram-node-title" fill="#a78bfa">Partition 2</text>
        <rect x="360" y="212" width="25" height="25" rx="4" class="kafka-offset-box active" /><text x="372" y="229" class="kafka-offset-num active" text-anchor="middle">1</text>
        <rect x="390" y="212" width="25" height="25" rx="4" class="kafka-offset-box" /><text x="402" y="229" class="kafka-offset-num" text-anchor="middle">0</text>

        <!-- Consumer Group (Leftmost: x = 20) -->
        <rect x="20" y="55" width="190" height="230" rx="8" class="diagram-box base-box" />
        <text x="115" y="80" class="diagram-node-title" text-anchor="middle" fill="#34d399">Consumer Group A</text>

        <rect x="35" y="95" width="160" height="40" rx="4" class="diagram-node node-emerald" />
        <text x="115" y="120" class="diagram-node-title" text-anchor="middle">Consumer Node 1</text>

        <rect x="35" y="150" width="160" height="40" rx="4" class="diagram-node node-emerald" />
        <text x="115" y="175" class="diagram-node-title" text-anchor="middle">Consumer Node 2</text>

        <rect x="35" y="205" width="160" height="40" rx="4" class="diagram-node node-emerald" />
        <text x="115" y="230" class="diagram-node-title" text-anchor="middle">Consumer Node 3</text>

        <path d="M 260 115 L 195 115" class="diagram-line-flow" marker-end="url(#arrowEmerald)" />
        <path d="M 260 170 L 195 170" class="diagram-line-flow" marker-end="url(#arrowEmerald)" />
        <path d="M 260 225 L 195 225" class="diagram-line-flow" marker-end="url(#arrowEmerald)" />

        <!-- Highlights -->
        <rect x="20" y="300" width="810" height="50" rx="6" class="diagram-box note-box" />
        <text x="425" y="322" class="diagram-body-text" text-anchor="middle">المنتجون على اليمين يضخون الأحداث للـ Partitions وتستهلكها العقد المستقلة على اليسار.</text>
        <text x="425" y="340" class="diagram-tag" text-anchor="middle">ترتيب الرسائل مضمون 100% داخل الـ Partition الواحد مع قابلية توسع أفقية غير محدودة.</text>
      </g>
    `, "0 0 860 370");
  },

  // 12. Rate Limiting Sliding Window Architecture (RTL Flow: Right -> Left)
  rateLimiterArchitecture() {
    return this.wrapSVG(`
      <g transform="translate(30, 20)">
        <text x="410" y="25" class="diagram-title" text-anchor="middle">خوارزميات محدد معدل الطلبات والتوزيع (Rate Limiter Architecture RTL)</text>

        <!-- Incoming Requests (Rightmost: x = 680) -->
        <rect x="680" y="60" width="140" height="60" rx="6" class="diagram-node node-blue" />
        <text x="750" y="85" class="diagram-node-title" text-anchor="middle">Incoming Requests</text>
        <text x="750" y="105" class="diagram-node-sub" text-anchor="middle">10,000 req/sec</text>

        <path d="M 680 90 L 610 90" class="diagram-line-flow" marker-end="url(#arrowPrimary)" />

        <!-- Rate Limiter Middleware / Gateway -->
        <rect x="420" y="50" width="190" height="160" rx="8" class="diagram-node node-purple" />
        <text x="515" y="80" class="diagram-node-title" text-anchor="middle">Sliding Window Filter</text>
        <text x="515" y="100" class="diagram-node-sub" text-anchor="middle">Redis Cluster + Lua Script</text>
        <text x="515" y="130" class="diagram-tag" text-anchor="middle">ZREMRANGEBYSCORE</text>
        <text x="515" y="155" class="diagram-tag" text-anchor="middle">ZCARD &lt; Max Limit</text>
        <text x="515" y="180" class="diagram-tag" text-anchor="middle">Atomic Multi-key Lock</text>

        <!-- Allowed Traffic to Backend (Leftmost: x = 20) -->
        <path d="M 420 85 L 260 85" class="diagram-line-flow" marker-end="url(#arrowEmerald)" />
        <rect x="40" y="60" width="220" height="60" rx="6" class="diagram-node node-emerald" />
        <text x="150" y="85" class="diagram-node-title" text-anchor="middle">Allowed Traffic (200 OK)</text>
        <text x="150" y="105" class="diagram-node-sub" text-anchor="middle">Forward to Backend Services</text>

        <!-- Rejected Traffic Drop (429 Too Many Requests) -->
        <path d="M 420 160 L 260 160" class="diagram-line" stroke="#ef4444" marker-end="url(#arrow)" />
        <rect x="40" y="135" width="220" height="50" rx="6" class="diagram-node node-red" />
        <text x="150" y="160" class="diagram-node-title" text-anchor="middle">Rejected: 429 Rate Exceeded</text>
        <text x="150" y="175" class="diagram-node-sub" text-anchor="middle">Retry-After: 30s Header</text>

        <!-- Summary -->
        <rect x="20" y="230" width="800" height="50" rx="6" class="diagram-box note-box" />
        <text x="420" y="252" class="diagram-body-text" text-anchor="middle">تدخل الطلبات من اليمين، وتفحص ذرّياً في Redis عبر نصوص Lua، لتمر السليمة إلى اليسار.</text>
        <text x="420" y="270" class="diagram-tag" text-anchor="middle">خوارزمية Sliding Window Log تمنع ثغرة الـ Bursting المضاعف التي تعاني منها خوارزمية Fixed Window.</text>
      </g>
    `, "0 0 860 300");
  },

  // 13. YouTube Video Processing Pipeline (RTL Flow: Upload on Right -> CDN on Left)
  videoPipeline() {
    return this.wrapSVG(`
      <g transform="translate(20, 20)">
        <text x="430" y="25" class="diagram-title" text-anchor="middle">معمارية معالجة وبث الفيديو التكيفي (YouTube Video Processing Pipeline RTL)</text>

        <!-- Video Upload (Rightmost: x = 710) -->
        <rect x="710" y="70" width="130" height="70" rx="6" class="diagram-node node-blue" />
        <text x="775" y="95" class="diagram-node-title" text-anchor="middle">Video Creator</text>
        <text x="775" y="115" class="diagram-node-sub" text-anchor="middle">Multipart S3 Upload</text>
        <text x="775" y="127" class="diagram-tag" text-anchor="middle">Resumable Chunks</text>

        <path d="M 710 105 L 670 105" class="diagram-line-flow" marker-end="url(#arrowPrimary)" />

        <!-- S3 Blob Ingestion -->
        <rect x="520" y="70" width="150" height="70" rx="6" class="diagram-node node-orange" />
        <text x="595" y="95" class="diagram-node-title" text-anchor="middle">Raw Storage (S3)</text>
        <text x="595" y="115" class="diagram-node-sub" text-anchor="middle">Original 4K Raw</text>
        <text x="595" y="127" class="diagram-tag" text-anchor="middle">S3 Event Notification</text>

        <path d="M 520 105 L 480 105" class="diagram-line-flow" marker-end="url(#arrowEmerald)" />

        <!-- DAG Transcoding Cluster -->
        <rect x="260" y="55" width="220" height="100" rx="8" class="diagram-node node-purple" />
        <text x="370" y="80" class="diagram-node-title" text-anchor="middle">DAG Task Coordinator</text>
        <text x="370" y="100" class="diagram-node-sub" text-anchor="middle">Split into GOP Chunks</text>
        <text x="370" y="125" class="diagram-tag" text-anchor="middle">GPU Parallel Transcoder</text>
        <text x="370" y="145" class="diagram-tag" text-anchor="middle">1080p, 720p, 480p, AV1</text>

        <path d="M 260 105 L 210 105" class="diagram-line-flow" marker-end="url(#arrowEmerald)" />

        <!-- Global CDN & Player (Leftmost: x = 20) -->
        <rect x="20" y="65" width="190" height="80" rx="6" class="diagram-node node-emerald" />
        <text x="115" y="95" class="diagram-node-title" text-anchor="middle">Global Edge CDN</text>
        <text x="115" y="115" class="diagram-node-sub" text-anchor="middle">HLS / DASH Manifests</text>
        <text x="115" y="135" class="diagram-tag" text-anchor="middle">Adaptive Bitrate Streaming</text>

        <!-- Summary -->
        <rect x="20" y="180" width="820" height="60" rx="6" class="diagram-box note-box" />
        <text x="430" y="205" class="diagram-body-text" text-anchor="middle">يبدأ رفع الفيديو من صانع المحتوى على اليمين، ثم يقطع لـ GOPs متوازية، ويوزع عبر الـ CDN على اليسار.</text>
        <text x="430" y="225" class="diagram-tag" text-anchor="middle">تقنية Adaptive Bitrate Streaming تعدل الجودة تلقائياً لكل ثانية حسب سرعة إنترنت المشاهد بالمللي ثانية.</text>
      </g>
    `, "0 0 860 260");
  },

  // 14. InstaPay Real-Time Payment Architecture (RTL Flow: Right -> Left)
  instapayArchitecture() {
    return this.wrapSVG(`
      <g transform="translate(20, 20)">
        <text x="430" y="25" class="diagram-title" text-anchor="middle">معمارية التحويل المالي اللحظي (InstaPay / IPN Instant Payment Architecture RTL)</text>

        <!-- Sender Mobile App (Rightmost: x = 710) -->
        <rect x="710" y="70" width="130" height="65" rx="6" class="diagram-node node-blue" />
        <text x="775" y="95" class="diagram-node-title" text-anchor="middle">User App (IPN)</text>
        <text x="775" y="115" class="diagram-node-sub" text-anchor="middle">Biometric Auth</text>
        <text x="775" y="127" class="diagram-tag" text-anchor="middle">Idempotency Key</text>

        <path d="M 710 102 L 670 102" class="diagram-line-flow" marker-end="url(#arrowPrimary)" />

        <!-- API Gateway & HSM Security -->
        <rect x="530" y="60" width="140" height="160" rx="8" class="diagram-node node-purple" />
        <text x="600" y="90" class="diagram-node-title" text-anchor="middle">Secure Gateway</text>
        <text x="600" y="110" class="diagram-node-sub" text-anchor="middle">mTLS + HSM Token</text>
        <text x="600" y="140" class="diagram-tag" text-anchor="middle">Idempotency Check</text>
        <text x="600" y="165" class="diagram-tag" text-anchor="middle">PCI-DSS Level 1</text>
        <text x="600" y="190" class="diagram-tag" text-anchor="middle">Anti-Fraud Filter</text>

        <!-- Redis Idempotency Store -->
        <rect x="360" y="50" width="140" height="55" rx="6" class="diagram-node node-emerald" />
        <text x="430" y="75" class="diagram-node-title" text-anchor="middle">Redis Cluster</text>
        <text x="430" y="92" class="diagram-node-sub" text-anchor="middle">Idempotency Lock (24h)</text>

        <path d="M 530 90 L 500 78" class="diagram-line" marker-end="url(#arrowEmerald)" />

        <!-- Saga Orchestrator -->
        <rect x="360" y="130" width="140" height="90" rx="8" class="diagram-node node-orange" />
        <text x="430" y="155" class="diagram-node-title" text-anchor="middle">Saga Orchestrator</text>
        <text x="430" y="175" class="diagram-node-sub" text-anchor="middle">State Machine Engine</text>
        <text x="430" y="195" class="diagram-tag" text-anchor="middle">Compensating Tx</text>

        <path d="M 530 160 L 500 160" class="diagram-line-flow" marker-end="url(#arrowPrimary)" />

        <!-- Central Bank IPN Hub (Left Center: x = 180) -->
        <rect x="180" y="50" width="150" height="75" rx="6" class="diagram-node node-red" />
        <text x="255" y="75" class="diagram-node-title" text-anchor="middle">Central Bank IPN Hub</text>
        <text x="255" y="95" class="diagram-node-sub" text-anchor="middle">Inter-bank Settlement</text>
        <text x="255" y="110" class="diagram-tag" text-anchor="middle">Instant 24/7 Routing</text>

        <path d="M 360 145 L 330 110" class="diagram-line-flow" marker-end="url(#arrowPrimary)" />

        <!-- Core Banking Double-Entry Ledger -->
        <rect x="180" y="145" width="150" height="75" rx="6" class="diagram-node node-emerald" />
        <text x="255" y="170" class="diagram-node-title" text-anchor="middle">Core Double-Entry</text>
        <text x="255" y="190" class="diagram-node-sub" text-anchor="middle">PostgreSQL ACID (Debit=Credit)</text>
        <text x="255" y="205" class="diagram-tag" text-anchor="middle">Outbox Table CDC</text>

        <path d="M 360 180 L 330 180" class="diagram-line-flow" marker-end="url(#arrowEmerald)" />

        <!-- Receiver / Beneficiary Bank (Leftmost: x = 20) -->
        <rect x="20" y="60" width="130" height="65" rx="6" class="diagram-node node-blue" />
        <text x="85" y="85" class="diagram-node-title" text-anchor="middle">Beneficiary Bank</text>
        <text x="85" y="105" class="diagram-node-sub" text-anchor="middle">Credit Receiver</text>

        <path d="M 180 87 L 150 87" class="diagram-line-flow" marker-end="url(#arrowPrimary)" />

        <!-- Reconciliation Engine -->
        <rect x="20" y="240" width="460" height="50" rx="6" class="diagram-node node-purple" />
        <text x="250" y="262" class="diagram-node-title" text-anchor="middle">Automated Reconciliation Engine</text>
        <text x="250" y="278" class="diagram-node-sub" text-anchor="middle">Nightly GL matching against Central Bank Logs</text>

        <!-- Summary -->
        <rect x="20" y="305" width="820" height="50" rx="6" class="diagram-box note-box" />
        <text x="430" y="327" class="diagram-body-text" text-anchor="middle">يبدأ أمر التحويل من تطبيق العميل باليمين، ويمر بالـ Saga والبنك المركزي، حتى إيداع المبلغ بحساب المستفيد على اليسار.</text>
        <text x="430" y="345" class="diagram-tag" text-anchor="middle">دفتر الأستاذ المزدوج يضمن عدم إنشاء أو اختفاء قرش واحد دون سجل مدين ودائن متطابق 100%.</text>
      </g>
    `, "0 0 860 370");
  },

  // 15. Netflix Global Streaming & Recommendation Topology (RTL Flow: Right -> Left)
  netflixArchitecture() {
    return this.wrapSVG(`
      <g transform="translate(20, 20)">
        <text x="430" y="25" class="diagram-title" text-anchor="middle">معمارية Netflix: التوصيات المخصصة وتوزيع Open Connect CDN (RTL Flow)</text>

        <!-- Client Devices (Rightmost: x = 720) -->
        <rect x="720" y="70" width="120" height="65" rx="6" class="diagram-node node-blue" />
        <text x="780" y="95" class="diagram-node-title" text-anchor="middle">Smart TV / App</text>
        <text x="780" y="115" class="diagram-node-sub" text-anchor="middle">Netflix Client</text>

        <path d="M 720 90 L 670 90" class="diagram-line-flow" marker-end="url(#arrowPrimary)" />
        <path d="M 720 115 L 170 190" class="diagram-line-flow" marker-end="url(#arrowEmerald)" />

        <!-- Zuul Gateway -->
        <rect x="530" y="60" width="140" height="85" rx="8" class="diagram-node node-purple" />
        <text x="600" y="90" class="diagram-node-title" text-anchor="middle">Zuul Edge Gateway</text>
        <text x="600" y="110" class="diagram-node-sub" text-anchor="middle">Dynamic Routing</text>
        <text x="600" y="130" class="diagram-tag" text-anchor="middle">Circuit Breaker</text>

        <!-- Control Plane & Microservices -->
        <rect x="340" y="55" width="160" height="95" rx="8" class="diagram-node node-blue" />
        <text x="420" y="80" class="diagram-node-title" text-anchor="middle">Control Plane Services</text>
        <text x="420" y="100" class="diagram-node-sub" text-anchor="middle">User, Billing, DRM</text>
        <text x="420" y="125" class="diagram-tag" text-anchor="middle">Titus Containers (AWS)</text>

        <path d="M 530 95 L 500 95" class="diagram-line-flow" marker-end="url(#arrowPrimary)" />

        <!-- ML Recommendation Engine -->
        <rect x="150" y="55" width="160" height="95" rx="8" class="diagram-node node-orange" />
        <text x="230" y="80" class="diagram-node-title" text-anchor="middle">Personalized ML Ranker</text>
        <text x="230" y="100" class="diagram-node-sub" text-anchor="middle">Bandit & Collaborative</text>
        <text x="230" y="125" class="diagram-tag" text-anchor="middle">Personalized Artwork</text>

        <path d="M 340 95 L 310 95" class="diagram-line-flow" marker-end="url(#arrow)" />

        <!-- In-Memory & Cassandra Layer -->
        <rect x="150" y="170" width="350" height="60" rx="6" class="diagram-node node-emerald" />
        <text x="325" y="195" class="diagram-node-title" text-anchor="middle">EVCache (RAM) + ScyllaDB / Cassandra</text>
        <text x="325" y="215" class="diagram-node-sub" text-anchor="middle">Playback bookmarks, User history, Sharded by user_id</text>

        <path d="M 420 150 L 420 170" class="diagram-line" marker-end="url(#arrow)" />
        <path d="M 230 150 L 230 170" class="diagram-line" marker-end="url(#arrow)" />

        <!-- Open Connect CDN (Leftmost: x = 20) -->
        <rect x="20" y="150" width="150" height="95" rx="8" class="diagram-node node-red" />
        <text x="95" y="180" class="diagram-node-title" text-anchor="middle">Open Connect CDN</text>
        <text x="95" y="200" class="diagram-node-sub" text-anchor="middle">OCA Custom Appliances</text>
        <text x="95" y="225" class="diagram-tag" text-anchor="middle">Pre-cached Overnight</text>

        <!-- Summary -->
        <rect x="20" y="280" width="820" height="50" rx="6" class="diagram-box note-box" />
        <text x="430" y="302" class="diagram-body-text" text-anchor="middle">الطلب يبدأ من تطبيق المشاهد على اليمين، بينما يتدفق محتوى الفيديو مباشرة من خوادم الـ CDN المجهزة على اليسار.</text>
        <text x="430" y="320" class="diagram-tag" text-anchor="middle">أكثر من 95% من البث يخرج من كاشات Open Connect المحلية دون استهلاك شبكة الإنترنت الدولية.</text>
      </g>
    `, "0 0 860 340");
  },

  // 16. TikTok Short-Form Video Pipeline (RTL Flow: Right -> Left)
  tiktokArchitecture() {
    return this.wrapSVG(`
      <g transform="translate(20, 20)">
        <text x="430" y="25" class="diagram-title" text-anchor="middle">معمارية TikTok: توصيات الفيديو اللحظية والتحميل المسبق الذكي (For You Feed RTL)</text>

        <!-- Mobile User (Rightmost: x = 720) -->
        <rect x="720" y="70" width="120" height="65" rx="6" class="diagram-node node-blue" />
        <text x="780" y="95" class="diagram-node-title" text-anchor="middle">User App (FYP)</text>
        <text x="780" y="115" class="diagram-node-sub" text-anchor="middle">Infinite Swipe</text>
        <text x="780" y="127" class="diagram-tag" text-anchor="middle">Prefetch Next 3</text>

        <path d="M 720 102 L 670 102" class="diagram-line-flow" marker-end="url(#arrowPrimary)" />

        <!-- Edge CDN & API Gateway -->
        <rect x="530" y="60" width="140" height="150" rx="8" class="diagram-node node-purple" />
        <text x="600" y="90" class="diagram-node-title" text-anchor="middle">Edge API Gateway</text>
        <text x="600" y="110" class="diagram-node-sub" text-anchor="middle">Volcano CDN Edge</text>
        <text x="600" y="135" class="diagram-tag" text-anchor="middle">Sub-second Start</text>
        <text x="600" y="160" class="diagram-tag" text-anchor="middle">Byte-Range Stream</text>
        <text x="600" y="185" class="diagram-tag" text-anchor="middle">Watch-Time Pings</text>

        <!-- Real-time Engagement Stream -->
        <rect x="350" y="50" width="150" height="65" rx="6" class="diagram-node node-red" />
        <text x="425" y="75" class="diagram-node-title" text-anchor="middle">Kafka Event Stream</text>
        <text x="425" y="95" class="diagram-node-sub" text-anchor="middle">Watch Duration & Loops</text>
        <text x="425" y="107" class="diagram-tag" text-anchor="middle">Millions events / sec</text>

        <path d="M 530 90 L 500 82" class="diagram-line" marker-end="url(#arrow)" />

        <!-- Flink Real-time Feature Store (Left Center: x = 160) -->
        <rect x="160" y="50" width="160" height="65" rx="6" class="diagram-node node-emerald" />
        <text x="240" y="75" class="diagram-node-title" text-anchor="middle">Apache Flink & Redis</text>
        <text x="240" y="95" class="diagram-node-sub" text-anchor="middle">User Profile Features</text>
        <text x="240" y="107" class="diagram-tag" text-anchor="middle">Updated in &lt; 500ms</text>

        <path d="M 350 82 L 320 82" class="diagram-line-flow" marker-end="url(#arrowEmerald)" />

        <!-- Deep Learning Ranker -->
        <rect x="350" y="145" width="150" height="85" rx="8" class="diagram-node node-orange" />
        <text x="425" y="170" class="diagram-node-title" text-anchor="middle">DNN / Transformer</text>
        <text x="425" y="190" class="diagram-node-sub" text-anchor="middle">Multi-task Ranking</text>
        <text x="425" y="205" class="diagram-tag" text-anchor="middle">p(Like), p(Share), p(Finish)</text>

        <path d="M 530 160 L 500 160" class="diagram-line-flow" marker-end="url(#arrowPrimary)" />
        <path d="M 240 115 L 350 160" class="diagram-line" marker-end="url(#arrowEmerald)" />

        <!-- Candidate Generation & Vector DB (Leftmost: x = 20) -->
        <rect x="20" y="145" width="150" height="85" rx="8" class="diagram-node node-blue" />
        <text x="95" y="170" class="diagram-node-title" text-anchor="middle">Vector DB / HNSW</text>
        <text x="95" y="190" class="diagram-node-sub" text-anchor="middle">Top 1,000 Candidates</text>
        <text x="95" y="205" class="diagram-tag" text-anchor="middle">From 100M Videos Pool</text>

        <path d="M 350 190 L 170 190" class="diagram-line-flow" marker-end="url(#arrowPrimary)" />

        <!-- Summary -->
        <rect x="20" y="295" width="820" height="50" rx="6" class="diagram-box note-box" />
        <text x="430" y="317" class="diagram-body-text" text-anchor="middle">تتدفق نبضات المشاهدة من تطبيق الهاتف باليمين وتحدث نموذج التوصية باليسار في أقل من نصف ثانية.</text>
        <text x="430" y="335" class="diagram-tag" text-anchor="middle">يقوم التطبيق بالتحميل المسبق لأول 3 ثوانٍ من الفيديوهات التالية ليصبح التمرير فورياً بدون أي تأخير.</text>
      </g>
    `, "0 0 860 360");
  },

  // 17. E-Commerce Flash Sale Architecture (RTL Flow: Right -> Left)
  ecommerceArchitecture() {
    return this.wrapSVG(`
      <g transform="translate(20, 20)">
        <text x="430" y="25" class="diagram-title" text-anchor="middle">معمارية منصات التجارة والمبيعات الخاطفة (Amazon / Flash Sale Architecture RTL)</text>

        <!-- Millions of Shoppers (Rightmost: x = 710) -->
        <rect x="710" y="70" width="130" height="65" rx="6" class="diagram-node node-blue" />
        <text x="775" y="95" class="diagram-node-title" text-anchor="middle">1M Shoppers</text>
        <text x="775" y="115" class="diagram-node-sub" text-anchor="middle">Flash Sale Rush</text>
        <text x="775" y="127" class="diagram-tag" text-anchor="middle">100k items in 60s</text>

        <path d="M 710 102 L 670 102" class="diagram-line-flow" marker-end="url(#arrowPrimary)" />

        <!-- Cloudflare WAF & Virtual Queue -->
        <rect x="520" y="60" width="150" height="150" rx="8" class="diagram-node node-purple" />
        <text x="595" y="90" class="diagram-node-title" text-anchor="middle">Virtual Queue Room</text>
        <text x="595" y="110" class="diagram-node-sub" text-anchor="middle">Cloudflare Turnstile</text>
        <text x="595" y="135" class="diagram-tag" text-anchor="middle">Smooth Traffic Pacing</text>
        <text x="595" y="160" class="diagram-tag" text-anchor="middle">Anti-bot PoW Defense</text>
        <text x="595" y="185" class="diagram-tag" text-anchor="middle">Token Bucket Rate</text>

        <!-- Redis Hot Inventory Cluster -->
        <rect x="330" y="50" width="150" height="65" rx="6" class="diagram-node node-red" />
        <text x="405" y="75" class="diagram-node-title" text-anchor="middle">Redis Cluster (RAM)</text>
        <text x="405" y="95" class="diagram-node-sub" text-anchor="middle">Lua Script Atomic DECR</text>
        <text x="405" y="107" class="diagram-tag" text-anchor="middle">10-Min Reservation</text>

        <path d="M 520 90 L 480 82" class="diagram-line-flow" marker-end="url(#arrowEmerald)" />

        <!-- Saga Orchestrator -->
        <rect x="330" y="145" width="150" height="85" rx="8" class="diagram-node node-orange" />
        <text x="405" y="170" class="diagram-node-title" text-anchor="middle">Saga Orchestrator</text>
        <text x="405" y="190" class="diagram-node-sub" text-anchor="middle">Payment & Order Flow</text>
        <text x="405" y="205" class="diagram-tag" text-anchor="middle">Compensate on Fail</text>

        <path d="M 520 160 L 480 160" class="diagram-line-flow" marker-end="url(#arrowPrimary)" />
        <path d="M 405 115 L 405 145" class="diagram-line" marker-end="url(#arrow)" />

        <!-- Order Database + Outbox (Left Center: x = 160) -->
        <rect x="160" y="50" width="140" height="75" rx="6" class="diagram-node node-emerald" />
        <text x="230" y="75" class="diagram-node-title" text-anchor="middle">PostgreSQL Orders</text>
        <text x="230" y="95" class="diagram-node-sub" text-anchor="middle">Outbox Table (CDC)</text>
        <text x="230" y="110" class="diagram-tag" text-anchor="middle">Sharded DB</text>

        <path d="M 330 165 L 300 105" class="diagram-line-flow" marker-end="url(#arrowEmerald)" />

        <!-- Kafka Async Events Backbone (Left Center: x = 160) -->
        <rect x="160" y="155" width="140" height="75" rx="6" class="diagram-node node-purple" />
        <text x="230" y="180" class="diagram-node-title" text-anchor="middle">Kafka Event Backbone</text>
        <text x="230" y="200" class="diagram-node-sub" text-anchor="middle">OrderCreated, Paid</text>
        <text x="230" y="215" class="diagram-tag" text-anchor="middle">CDC via Debezium</text>

        <path d="M 330 190 L 300 190" class="diagram-line-flow" marker-end="url(#arrowPrimary)" />

        <!-- Payment Gateway & Delivery (Leftmost: x = 20) -->
        <rect x="20" y="70" width="120" height="160" rx="8" class="diagram-node node-blue" />
        <text x="80" y="105" class="diagram-node-title" text-anchor="middle">Payment / Visa</text>
        <text x="80" y="130" class="diagram-node-sub" text-anchor="middle">Stripe Gateway</text>
        <text x="80" y="155" class="diagram-tag" text-anchor="middle">Warehouse WMS</text>
        <text x="80" y="180" class="diagram-tag" text-anchor="middle">Push Notifs</text>

        <path d="M 160 190 L 140 190" class="diagram-line-flow" marker-end="url(#arrowPrimary)" />

        <!-- Summary -->
        <rect x="20" y="295" width="820" height="50" rx="6" class="diagram-box note-box" />
        <text x="430" y="317" class="diagram-body-text" text-anchor="middle">يبدأ طوفان المشترين من اليمين، ويتم حجز المخزون ذرياً في الذاكرة بالمنتصف، وتستقر العمليات بقواعد البيانات باليسار.</text>
        <text x="430" y="335" class="diagram-tag" text-anchor="middle">غرفة الانتظار الافتراضية تفلتر البوتات وتمرر المشترين بمعدل ثابت يطابق سعة بوابات الدفع البنكية.</text>
      </g>
    `, "0 0 860 360");
  },

// English localization dictionary for SVG diagram text
  diagramTranslationsEn: {
  "1. فهم النطاق والمتطلبات": "1. Scope & Requirements Clarification",
  "1. نمط التحميل الكسول (Cache-Aside / Lazy Loading)": "1. Cache-Aside Pattern (Lazy Loading)",
  "10 - 15 دقيقة": "10 - 15 mins",
  "15 - 20 دقيقة (قلب المقابلة)": "15 - 20 mins (Deep Dive Core)",
  "2. التصميم عالي المستوى": "2. High-Level Design",
  "2. الكتابة المتزامنة (Write-Through)": "2. Write-Through Caching",
  "3 - 5 دقائق": "3 - 5 mins",
  "3. App Populates Cache | مناسب لعمليات القراءة الكثيفة (Read-Heavy)": "3. App Populates Cache | Optimal for Read-Heavy Workloads",
  "3. التعمق في المكونات (Deep Dive)": "3. Deep Dive into Bottlenecks",
  "3. الكتابة الخلفية غير المتزامنة (Write-Back)": "3. Write-Back (Asynchronous Persistence)",
  "4. الاختناقات والخاتمة": "4. Bottlenecks & Wrap-Up",
  "4. حماية الأزمات (Stampede, Penetration, Avalanche)": "4. Crisis Protection (Stampede, Penetration, Avalanche)",
  "5 - 8 دقائق": "5 - 8 mins",
  "Base62 Encoding يوفر 3.5 تريليون مفتاح فريد عبر 7 خانات فقط [a-z, A-Z, 0-9]": "Base62 Encoding yields 3.5 Trillion unique keys across 7 characters [a-zA-Z0-9]",
  "CA غير واقعي في الشبكات": "CA is impractical over physical networks",
  "Compensating Transactions: تراجع تعويضي تلقائي في حال فشل أي خطوة وسيطة": "Compensating Transactions: Automated backward rollback if any intermediate step fails",
  "Driver Locking: Redis Mutex (10s TTL) عند تقديم العرض لمنع مطابقة السائق نفسه مع راكبين في نفس اللحظة.": "Driver Locking: Redis Mutex (10s TTL) on dispatch offer prevents dual-matching to two riders.",
  "N: عدد النسخ | W: موافقات الكتابة | R: موافقات القراءة": "N: Replicas | W: Write Quorum | R: Read Quorum",
  "R + W > N  (لضمان الاتساق القوي المتزامن)": "R + W > N (Guarantees Strong Linearizable Consistency)",
  "أكثر من 95% من البث يخرج من كاشات Open Connect المحلية دون استهلاك شبكة الإنترنت الدولية.": "Over 95% of video traffic is served directly from local Open Connect ISP caches.",
  "إذا حدث انقطاع (Partition): نختار بين A و C.": "On Network Partition (P): Choose between Availability (A) and Consistency (C).",
  "إطار الـ 45 دقيقة القياسي لمقابلات تصميم النظم (Standard 45-Min Framework)": "Standard 45-Minute System Design Interview Framework",
  "استجابة فائقة السرعة | خطر فقدان بيانات إذا تعطل الكاش قبل التفريغ": "Ultra-low latency | Data loss risk if cache crashes before disk flush",
  "استخدام محرك الحالات (State Machine) يلغي الاعتماديات الدائرية ويضمن سلامة البيانات الموزعة.": "State Machine orchestration eliminates cyclic dependencies and guarantees distributed data safety.",
  "الاتساق (Consistency)": "Consistency (C)",
  "التجزئة المتسقة وحلقة العقد الافتراضية (Consistent Hashing Ring & Virtual Nodes)": "Consistent Hashing Ring & Virtual Nodes",
  "التوافر (Availability)": "Availability (A)",
  "الطلب يبدأ من تطبيق المشاهد على اليمين، بينما يتدفق محتوى الفيديو مباشرة من خوادم الـ CDN المجهزة على اليسار.": "Viewer initiates playback from client; video byte streams flow directly from edge CDN servers.",
  "العقد الافتراضية (Virtual Nodes)": "Virtual Nodes (vnodes)",
  "الكاش يحدث الـ DB فوراً | يمنع تناقض البيانات ولكن يزيد زمن الكتابة": "Cache writes to DB synchronously | Eliminates inconsistency but increases write latency",
  "المستوى 1: النظام الأحادي (Monolith)": "Level 1: Monolithic Architecture",
  "المستوى 2: التوسع الأفقي والكاش": "Level 2: Horizontal Scaling & Caching",
  "المستوى 3: الخدمات المصغرة والتدفق": "Level 3: Microservices & Event Streams",
  "المنتجون على اليمين يضخون الأحداث للـ Partitions وتستهلكها العقد المستقلة على اليسار.": "Producers append event batches into Partitions; independent consumers read offsets sequentially.",
  "المنسق (Orchestrator) يبدأ على اليمين ويمرر الأوامر خطوة بخطوة باتجاه اليسار.": "Saga Orchestrator coordinates sequential workflow execution with compensating rollbacks.",
  "المهندس المميز (Staff+) يقود الحوار ويبرر كل قرار باختبارات الأداء والأرقام البديلة.": "Staff+ Engineers drive the narrative, validating decisions with metrics and concrete trade-offs.",
  "النسخ الاحتياطي (Replication N=3)": "Replication Factor (N=3)",
  "بروتوكول Double Ratchet يضمن السرية التامة — يبدأ الإرسال من اليمين وينتقل مشفراً نحو المستلم على اليسار.": "Double Ratchet Protocol ensures end-to-end forward secrecy from sender to recipient.",
  "تتدفق نبضات المشاهدة من تطبيق الهاتف باليمين وتحدث نموذج التوصية باليسار في أقل من نصف ثانية.": "Telemetry signals stream in real-time to update candidate ranking models in sub-second latency.",
  "تحذف الرسالة نهائياً فور استلام علامتي الصح الزرقاء (Double Tick)": "Message permanently purged from server immediately upon delivery acknowledgment (ACK)",
  "تدخل الطلبات من اليمين، وتفحص ذرّياً في Redis عبر نصوص Lua، لتمر السليمة إلى اليسار.": "Requests evaluated atomically in Redis via Lua scripts, allowing valid traffic through.",
  "ترتيب الرسائل مضمون 100% داخل الـ Partition الواحد مع قابلية توسع أفقية غير محدودة.": "Strict message ordering is guaranteed within each Partition with horizontal elasticity.",
  "تسلسل المعاملة الموزعة (Saga Orchestration Flow: من اليمين إلى اليسار)": "Saga Orchestration Workflow Sequence",
  "تقنية Adaptive Bitrate Streaming تعدل الجودة تلقائياً لكل ثانية حسب سرعة إنترنت المشاهد بالمللي ثانية.": "Adaptive Bitrate Streaming switches video quality seamlessly based on live viewer bandwidth.",
  "توزيعها عبر Rack-aware zones مختلفة.": "Replicated across diverse rack-aware failure domains.",
  "توسعة PACELC الشاملة": "PACELC Theorem Extension",
  "خوارزميات محدد معدل الطلبات والتوزيع (Rate Limiter Architecture RTL)": "Rate Limiter & Traffic Shaping Architecture",
  "خوارزمية Sliding Window Log تمنع ثغرة الـ Bursting المضاعف التي تعاني منها خوارزمية Fixed Window.": "Sliding Window Log eliminates boundary burst vulnerabilities present in fixed-window algorithms.",
  "دفتر الأستاذ المزدوج يضمن عدم إنشاء أو اختفاء قرش واحد دون سجل مدين ودائن متطابق 100%.": "Double-entry ledger ensures zero discrepancy with balanced debit and credit entries.",
  "عند إضافة أو إزالة أي خادم فيزيائي.": "When physical server nodes are added or removed dynamically.",
  "غرفة الانتظار الافتراضية تفلتر البوتات وتمرر المشترين بمعدل ثابت يطابق سعة بوابات الدفع البنكية.": "Virtual Waiting Room throttles bot bursts and drains users at a controlled, sustainable rate.",
  "في الحالة الطبيعية (Else): نختار بين Latency (L) و Consistency (C).": "In Normal State (Else): Choose between Latency (L) and Consistency (C).",
  "قاعدة ذهبية: يبدأ التسلسل من اليمين (فهم النطاق والـ Scale) وينتهي في اليسار (معالجة نقاط الانهيار).": "Golden Rule: Progress systematically from scope clarification to component deep dive.",
  "محركات التخزين: B+ Tree (للقراءة) مقابل LSM-Tree (للكتابة الفائقة)": "Storage Engines: B+ Tree (Read-Optimized) vs LSM-Tree (Write-Optimized)",
  "معادلة النصاب القانوني (Quorum Formula)": "Quorum Consensus Formula",
  "معمارية Apache Kafka: الأقسام ومجموعات المستهلكين (Partitions & Consumers RTL)": "Apache Kafka Architecture: Partitions & Consumer Groups",
  "معمارية Netflix: التوصيات المخصصة وتوزيع Open Connect CDN (RTL Flow)": "Netflix Architecture: Open Connect CDN & Recommendation Delivery",
  "معمارية TikTok: توصيات الفيديو اللحظية والتحميل المسبق الذكي (For You Feed RTL)": "TikTok Architecture: Real-Time For You Feed & Smart Pre-Buffering",
  "معمارية التحويل المالي اللحظي (InstaPay / IPN Instant Payment Architecture RTL)": "Instant Payment Network (IPN) Architecture",
  "معمارية الـ L1 Local (Caffeine) + L2 Remote (Redis) لتوفير أقصى متانة": "L1 Process Memory (Caffeine) + L2 Remote (Redis) for Multi-Tier Caching",
  "معمارية المحادثات الفورية المشفرة والتواجد (WhatsApp E2EE Architecture)": "WhatsApp End-to-End Encrypted Chat & Presence Architecture",
  "معمارية تقصير الروابط الفائقة (Bitly URL Shortener Architecture)": "Bitly High-Throughput URL Shortener Architecture",
  "معمارية معالجة وبث الفيديو التكيفي (YouTube Video Processing Pipeline RTL)": "YouTube Video Ingestion & Transcoding Pipeline",
  "معمارية منصات التجارة والمبيعات الخاطفة (Amazon / Flash Sale Architecture RTL)": "High-Concurrency Flash Sale Architecture",
  "معمارية منصات النقل التشاركي والمطابقة الجغرافية (Uber / Lyft Architecture)": "Uber Geospatial Proximity & Dispatching Architecture",
  "مقارنة أنماط التخزين المؤقت المعمارية (Caching Patterns Architecture)": "Distributed Caching Patterns Architecture",
  "مقاومة الانقطاع (Partition)": "Partition Tolerance (P)",
  "مميزات Consistent Hashing": "Key Benefits of Consistent Hashing",
  "نظرية CAP ونظرية PACELC لتفاضل الأنظمة الموزعة": "CAP & PACELC Distributed Systems Theorems",
  "نمط Saga للمعاملات الموزعة (Orchestration & Workflow RTL)": "Saga Pattern for Distributed Transactions",
  "يبدأ أمر التحويل من تطبيق العميل باليمين، ويمر بالـ Saga والبنك المركزي، حتى إيداع المبلغ بحساب المستفيد على اليسار.": "Transfer orchestrator reserves sender funds, interfaces with central bank switch, and credits recipient.",
  "يبدأ الطلب من العميل على اليمين ويمر بالبوابة حتى قواعد البيانات والتحليلات على اليسار.": "Client request passes through API gateway and cache tiers to core database and analytics.",
  "يبدأ رفع الفيديو من صانع المحتوى على اليمين، ثم يقطع لـ GOPs متوازية، ويوزع عبر الـ CDN على اليسار.": "Master video uploaded to S3, transcoded in parallel into adaptive chunks, and distributed via CDN.",
  "يبدأ طوفان المشترين من اليمين، ويتم حجز المخزون ذرياً في الذاكرة بالمنتصف، وتستقر العمليات بقواعد البيانات باليسار.": "Traffic throttled at edge; inventory reserved atomically in Redis; orders settled asynchronously in SQL.",
  "يقوم التطبيق بالتحميل المسبق لأول 3 ثوانٍ من الفيديوهات التالية ليصبح التمرير فورياً بدون أي تأخير.": "Client pre-buffers first 3 seconds of upcoming videos for instantaneous zero-latency feed scrolling.",
  "• أسئلة استشرافية": "• Proactive Exploratory Questions",
  "• إعادة تعيين الحد الأدنى فقط (k/N) من المفاتيح": "• Remaps minimal (k/N) keys on cluster size changes",
  "• استخدام Bloom Filters لتسريع القراءة وتخطي الملفات": "• Uses Bloom Filters to bypass reading irrelevant SSTables",
  "• القضاء التام على البقع الساخنة (Hotspots)": "• Completely eliminates cluster hotspot imbalances",
  "• المقايضات (Trade-offs)": "• Concrete Trade-offs Analysis",
  "• تحديث في نفس الصفحة الفيزيائية (In-place update)": "• In-place page mutations on disk blocks",
  "• تحديد القيود والحدود": "• Clarifying Constraints & SLA Targets",
  "• تخزين النسخة في العقد الـ N التالية مع مراعاة": "• Replicates keys to next N clockwise physical nodes",
  "• تفاوت السعات حسب قوة الخادم الفيزيائي": "• Weights virtual tokens according to hardware capacity",
  "• خوارزميات التجزئة والتوزيع": "• Partitioning & Routing Algorithms",
  "• دمج دوري (Compaction) لحذف البيانات وشواهد القبور": "• Periodic Compaction merges runs and purges tombstones",
  "• سرعة كتابة مذهلة عبر التسجيل التسلسلي (Sequential I/O)": "• Ultra-fast writes via sequential append-only commit logs",
  "• كل خادم يملك 100 - 256 نقطة موزعة بانتظام": "• Each server maps to 100 - 256 evenly spaced vnodes",
  "• مثالي للبيانات العلائقية والاستعلام بالنطاق": "• Ideal for relational range scans and point lookups",
  "• مسار القراءة والكتابة": "• Explicit Read & Write Data Flow",
  "• مضاعفة كتابة عالية بسبب عشوائية الـ Random I/O": "• Higher write amplification from random disk page I/O",
  "• معالجة التنافس (Race Cond)": "• Concurrency Control & Race Prevention"
},

  localizeToEnglish(svgString) {
    if (!svgString) return '';
    let res = svgString;
    const dict = this.diagramTranslationsEn;
    for (const [ar, en] of Object.entries(dict)) {
      if (res.includes(ar)) {
        res = res.split(ar).join(en);
      }
    }
    return res;
  },

  // Method to render diagram by ID
  render(diagramId) {
    if (typeof this[diagramId] === 'function') {
      let svg = this[diagramId]();
      const isEn = typeof App !== 'undefined' && App.currentLang === 'en';
      if (isEn && typeof this.localizeToEnglish === 'function') {
        svg = this.localizeToEnglish(svg);
      }
      return svg;
    }
    return '';
  }
};
