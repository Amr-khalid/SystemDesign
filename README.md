<div align="center">

# 🏛️ System Design Mastery & Interactive Architecture Lab
### الموسوعة والمختبر التفاعلي الشامل لتصميم النظم الموزعة والهندسة البرمجية للشركات الكبرى (FAANG / Big Tech)

[![GitHub License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Architecture](https://img.shields.io/badge/Architecture-Distributed%20%26%20Microservices-emerald.svg)](#-table-of-contents)
[![Case Studies](https://img.shields.io/badge/Case%20Studies-31%20Real--World%20Systems-purple.svg)](#-real-world-case-studies-breakdown)
[![Interactive Code Lab](https://img.shields.io/badge/Code%20Lab-Interactive%20Algorithms-orange.svg)](#-interactive-code-lab--algorithms)
[![Database Polyglot](https://img.shields.io/badge/Databases-Polyglot%20%26%20Schemas-cyan.svg)](#-polyglot-database-architecture--schemas)
[![Languages](https://img.shields.io/badge/Language-Arabic%20%26%20English-success.svg)](#)

<p align="center">
  <b>منصة تفاعلية متكاملة لتعلم وإتقان تصميم النظم الموزعة (Distributed Systems Architecture)، وقواعد البيانات متعددة النماذج (Polyglot Persistence)، وخوارزميات التزامن والتحجيم (Scalability & Concurrency)، مع محاكاة حية للأكواد والـ Schemas ومخططات الإنتاج لـ 31 نظاماً حقيقياً.</b>
</p>

[🌐 استعراض المنصة](#-live-overview--key-features) •
[📚 الفهرس والمحتويات](#-table-of-contents) •
[🏗️ الأنظمة ودراسات الحالة](#-real-world-case-studies-breakdown) •
[⚡ مختبر الخوارزميات الحية](#-interactive-code-lab--algorithms) •
[🗄️ معمارية قواعد البيانات](#-polyglot-database-architecture--schemas) •
[🚀 البدء السريع](#-getting-started)

---

</div>

## 🌟 Live Overview & Key Features

منصة **System Design Mastery** ليست مجرد مقالات نظرية، بل هي تطبيق ويب تفاعلي متطور (Single Page Application) خالي من أي مكتبات خارجية ثقيلة، تم تصميمه بهندسة فائقة السرعة ونظام تصميم مستوحى من معايير **Next.js & Vercel Design System** بالوضعين الداكن (Dark Mode) والفاتح (Light Mode):

1. **🏛️ 9 وحدات تعليمية تفاعلية (9 Deep-Dive Modules):** تبدأ من أساسيات الشبكات والبروتوكولات (OSI, TCP, UDP, QUIC, HTTP/3) حتى تصميم أنظمة المليارات متناهية الصغر (Peta-scale Architectures).
2. **🧪 المختبر العملي واستوديو التصميم المعماري (Interactive Architecture Studio):** 7 تحديات معمارية إنتاجية كاملة (InstaPay, Uber, YouTube, WhatsApp, Netflix, TikTok, Amazon Flash Sale) مقسمة عبر 5 مراحل تفاعلية تشمل اختيار القرارات، ومخططات الإنتاج، والـ Schemas، وبروتوكولات تبادل البيانات.
3. **💻 مختبر الأكواد ومحاكي الخوارزميات المباشر (Interactive Code Lab):** محرر برمجي حي لتعديل وتشغيل خوارزميات النظم الموزعة (LRU Cache, Token Bucket Rate Limiter, Consistent Hashing Ring, Bloom Filters, Database Hash Sharding) مع إخراج بصري حي وقياس لزمن التنفيذ بالميكروثانية.
4. **🗄️ معمارية قواعد البيانات متعددة النماذج (Polyglot Storage & Detailed Schemas):** جداول مفصلة بأسماء الحقول، وأنواع البيانات، والقيود (`PK`, `FK`, `INDEX`, `PARTITION`, `TTL`, `SPATIAL`, `HNSW VECTOR`) مع نصوص DDL و Lua Scripts جاهزة للنسخ.
5. **📡 مصفوفة بروتوكولات الاتصال وعقود الـ APIs:** توثيق عقود الـ Payload (Protobuf, JSON, HLS Playlists, ISO 20022 `pacs.008`) مع مسار تدفق الطلب الشامل من نقرة الهاتف حتى الـ CDN وقواعد البيانات.
6. **🔍 محرك بحث فوري وسريع (Instant Sub-millisecond Search):** فهرسة فورية لكافة المصطلحات، والخوارزميات، والأنظمة، وجداول الـ Schemas.
7. **📊 تتبع تقدم التعلم (Progress Tracking):** حفظ تقدمك وإنجازك لكل وحدة دراسية ومختبر محلياً عبر `localStorage`.

---

## 📚 Table of Contents

```
├── 1. Foundations of Scalable Architectures (الأساسيات والمفاهيم الجوهرية)
│   ├── Horizontal vs Vertical Scaling
│   ├── Latency vs Throughput & SLA/SLO/SLI
│   ├── Layer 4 vs Layer 7 Load Balancing (Round Robin, Least Conn, IP Hash)
│   └── Caching Strategies (Cache-Aside, Write-Through, Write-Back, Eviction Policies)
│
├── 2. Data Layer & Polyglot Persistence (قواعد البيانات وإدارة البيانات الموزعة)
│   ├── SQL vs NoSQL vs NewSQL Trade-offs
│   ├── Database Indexing (B-Tree, LSM-Tree, Inverted Index)
│   ├── Sharding, Partitioning & Rebalancing (Consistent Hashing)
│   └── Replication Topologies (Single-Leader, Multi-Leader, Leaderless Raft/Paxos)
│
├── 3. Distributed Systems Theory & Resilience (النظم الموزعة ونظريات الصمود)
│   ├── CAP Theorem & PACELC Trade-off Matrix
│   ├── ACID vs BASE & Eventual Consistency Models
│   ├── Distributed Transactions (2PC vs SAGA Orchestration/Choreography)
│   └── Fault Tolerance Patterns (Circuit Breaker, Bulkhead, Rate Limiting, Retry Jitter)
│
├── 4. Asynchronous Processing & Messaging (الاتصال غير المتزامن ومعالجة الأحداث)
│   ├── Message Queues vs Event Streams (RabbitMQ vs Apache Kafka)
│   ├── Idempotency Keys & Deduplication
│   ├── Zero-Copy Data Transfer (sendfile)
│   └── Real-time Communication (WebSockets, SSE, WebRTC, Long Polling)
│
├── 5. Microservices & API Architecture (معمارية الخدمات المصغرة والواجهات البرمجية)
│   ├── API Gateway (Kong, Envoy) & Service Mesh (Istio)
│   ├── Communication Protocols (REST, GraphQL, gRPC Protobuf)
│   ├── Microservices Security (OAuth2, JWT, mTLS)
│   └── Distributed Tracing & Observability (OpenTelemetry, Prometheus, Jaeger)
│
├── 6. Security, Compliance & High Availability (الأمان والاعتمادية الجغرافية)
│   ├── Edge Security & Anti-DDoS (Cloudflare, Anycast DNS, Web Application Firewall)
│   ├── End-to-End Encryption (E2EE, Signal Protocol, Double Ratchet)
│   └── Multi-Region Disaster Recovery (Active-Active vs Active-Passive)
│
├── 7. Global Case Studies Encyclopedia (موسوعة دراسات الحالة والأنظمة العالمية)
│   └── 31 In-Depth System Breakdowns (URL Shortener, Uber, Netflix, Twitter, Stripe...)
│
├── 8. Interactive Architecture Studio (الاستوديو التفاعلي والمختبر العملي)
│   └── 7 Enterprise Hands-on Challenges with 5-Stage Deep Dive
│
└── 9. Interactive Code Lab & Algorithm Playground (مختبر الأكواد التفاعلي المباشر)
    └── 6 Interactive Distributed Algorithms with Live JavaScript Engine
```

---

## 🏗️ Real-World Case Studies Breakdown

تحتوي المنصة على تفكيك معماري دقيق لـ **31 نظاماً وتطبيقاً عالمياً** يغطي كافة متطلبات مقابلات الـ System Design في كبرى شركات التقنية:

<div align="center">

| النظام | التصنيف المعماري | التحدي الهندسي الجوهري | التقنيات وقواعد البيانات المعتمدة |
| :--- | :--- | :--- | :--- |
| **InstaPay** | Financial & Real-Time Settlement | Strict ACID, Zero Double-Spending & Saga | PostgreSQL, Redis Redlock, ClickHouse, ISO 20022 |
| **Uber / Careem** | Geo-Spatial Dispatch & Tracking | 100k msgs/sec Telemetry & < 500m Dispatch | Redis Geo H3, PostGIS, ScyllaDB, Kafka, WebSockets |
| **YouTube** | High-Throughput Video Pipeline | Chunked DAG Transcoding & Adaptive Streaming | AWS S3, Vitess MySQL, ClickHouse, HTTP/3 TUS, HLS |
| **WhatsApp** | E2EE Messaging at Scale | 100 Billion msgs/day & Offline Delivery | Noise Protocol, Erlang Actor Mesh, Cassandra, Redis |
| **Netflix** | Video Streaming & Micro-Personalization | 100k Streams/sec & Zero Buffering | Open Connect CDN (OCA), ScyllaDB, EVCache, gRPC |
| **TikTok** | Real-Time AI Recommendations | Sub-50ms Multi-Task Ranking & Fast Swiping | Qdrant Vector DB, Flink Feature Store, Kafka, Redis |
| **Amazon Flash Sale** | Ultra-High Concurrency E-Commerce | 100k items in 60s & Zero Overselling | Virtual Queue, Redis Atomic Lua, PostgreSQL Outbox |
| **Twitter / X** | Social Graph & Real-Time Feed | Fan-out on Write vs Fan-out on Read | Redis Lists, Apache Kafka, Distributed Cache, MySQL |
| **TinyURL / Bitly** | High-Scale Distributed Hash System | 100:1 Read/Write Ratio & 10 Billion URLs | Base62 Token Generator, Cassandra, Redis LRU |
| **Distributed Rate Limiter** | Traffic Shaping & API Protection | Multi-Region Sliding Window Counter | Redis Cluster, Leaky Bucket, Envoy Token Bucket |
| **Distributed Web Crawler** | Peta-scale Distributed Graph Traversal | Politeness, Robots.txt & Deduplication | Kafka Frontier, Cassandra, Bloom Filters, S3 |
| **Stripe / Payment Gateway** | Idempotent Financial Engine | Exactly-Once Processing & PCI-DSS Compliance | Double-Entry Ledger, Idempotency-Key, Kafka, Postgres |

</div>

---

## 🗄️ Polyglot Database Architecture & Schemas

يقدم القسم الثامن (`#module-8`) تفكيكاً عميقاً لمخططات قواعد البيانات والـ Schemas الإنتاجية:

```
                  ┌───────────────────────────────────────────────┐
                  │          Client / Mobile Application          │
                  └──────────────────────┬────────────────────────┘
                                         │ (HTTP/3, WSS, mTLS)
                                         ▼
                  ┌───────────────────────────────────────────────┐
                  │            Cloudflare / Edge CDN              │
                  │   - Anycast Routing   - Rate Limiting / WAF   │
                  └──────────────────────┬────────────────────────┘
                                         │ (gRPC / REST)
                                         ▼
                  ┌───────────────────────────────────────────────┐
                  │          API Gateway (Envoy / Kong)           │
                  └───────┬──────────────┬──────────────┬─────────┘
                          │              │              │
        ┌─────────────────┘              │              └────────────────┐
        ▼                                ▼                               ▼
┌───────────────┐             ┌────────────────────┐            ┌─────────────────┐
│ In-Memory Tier│             │  Distributed Rel.  │            │ Event Streaming │
│ Redis Cluster │             │ PostgreSQL / Vitess│            │  Apache Kafka   │
│ - Hot Locks   │             │ - ACID Financial   │            │ - CDC Debezium  │
│ - Spatial H3  │             │ - Orders & Users   │            │ - High-Throughput│
│ - Feature RAM │             │ - Trans. Outbox    │            │ - Fan-out Bus   │
└───────┬───────┘             └──────────┬─────────┘            └────────┬────────┘
        │                                │                               │
        └────────────────────────────────┼───────────────────────────────┘
                                         ▼
                  ┌───────────────────────────────────────────────┐
                  │        Analytical & Big Data Stores           │
                  │  - ClickHouse (Real-time Analytics & Audit)   │
                  │  - ScyllaDB / Cassandra (Wide-Column Stream)  │
                  │  - Qdrant / Milvus (HNSW Vector Embeddings)   │
                  │  - Object Storage (AWS S3 / MinIO Chunks)     │
                  └───────────────────────────────────────────────┘
```

### أمثلة من الـ Schemas وجداول البيانات المتاحة في المنصة:
- **`double_entry_ledger` (InstaPay):** جدول القيود المزدوجة المحاسبية لمنع أي تلاعب مالي.
- **`redis_driver_spatial_h3` (Uber):** فهارس سداسية مكانية بالذاكرة لإجراء استعلامات الـ k-Nearest Neighbors في أقل من 2ms.
- **`video_renditions` (YouTube):** جدول مسارات الجودات التكيفية (1080p, 4K, 720p, 60fps) وروابط ملفات الـ HLS `.m3u8`.
- **`user_realtime_features` & `video_embeddings_vector` (TikTok):** مصفوفة تفضيلات المستخدم بالذاكرة مع فهارس متجهات 512-dim للبحث الدلالي اللحظي.
- **`redis_flash_stock_lua` (Flash Sale):** كود Lua متكامل لتنفيذ الخصم الذري في الذاكرة وإصدار رمز حجز مؤقت لمدة 10 دقائق.

---

## ⚡ Interactive Code Lab & Algorithms

يحتوي القسم التاسع (`#module-9`) على محرك برمجي مباشر يمكنك من تجربة وتعديل وتشغيل خوارزميات النظم الموزعة وملاحظة سلوك الذاكرة وزمن التنفيذ لحظياً:

```javascript
// Example: Consistent Hashing Ring Simulator (from Module 9)
class ConsistentHashRing {
  constructor(replicas = 3) {
    this.replicas = replicas;
    this.ring = new Map();
    this.sortedKeys = [];
  }

  hash(key) {
    let hash = 5381;
    for (let i = 0; i < key.length; i++) {
      hash = ((hash << 5) + hash) + key.charCodeAt(i);
      hash = hash & 0x7FFFFFFF;
    }
    return hash;
  }

  addNode(node) {
    for (let i = 0; i < this.replicas; i++) {
      const vNodeKey = `${node}#VN${i}`;
      const hashVal = this.hash(vNodeKey);
      this.ring.set(hashVal, node);
      this.sortedKeys.push(hashVal);
    }
    this.sortedKeys.sort((a, b) => a - b);
  }

  getNode(key) {
    if (this.ring.size === 0) return null;
    const hashVal = this.hash(key);
    for (const nodeHash of this.sortedKeys) {
      if (hashVal <= nodeHash) return this.ring.get(nodeHash);
    }
    return this.ring.get(this.sortedKeys[0]); // Wrap around
  }
}
```

### الخوارزميات المدعومة داخل المحاكي:
1. **LRU Cache (Least Recently Used):** تطبيق كامل باستخدام `Doubly Linked List + Hash Map` لتحقيق عمليات `get` و `put` في $O(1)$.
2. **Consistent Hashing Ring:** توزيع المفاتيح والعقد مع العقد الافتراضية (Virtual Nodes) ومنع الـ Cascading Failures.
3. **Token Bucket Rate Limiter:** خوارزمية تحديد معدل الطلبات وحماية الخوادم من الهجمات وحساب تراكم الـ Tokens.
4. **Bloom Filter:** فلتر احتمالي بالذاكرة للتحقق من وجود العناصر بسرعة $O(k)$ مع صفر أخطاء سلبية (Zero False Negatives).
5. **Database Hash Sharding:** تقسيم وتوجيه المفاتيح بين قواعد البيانات مع معالجة عقد السجلات وتفادي الـ Hotspots.
6. **Leaky Bucket Traffic Shaper:** خوارزمية تنعيم طفرات المرور وإخراج الطلبات بمعدل تدفق ثابت ومستقر.

---

## 🚀 Getting Started

المنصة مصممة بدون أي تبعيات (Zero Dependencies). كل ما تحتاجه هو متصفح حديث (Chrome, Firefox, Safari, Edge):

### 1. الاستنساخ والتشغيل محلياً:
```bash
# استنساخ المستودع
git clone https://github.com/Amr-khalid/SystemDesign.git

# الانتقال إلى مجلد المشروع
cd SystemDesign

# فتح المشروع مباشرة في المتصفح
# على نظام Windows:
start index.html

# على نظام macOS:
open index.html

# على نظام Linux:
xdg-open index.html
```

### 2. التشغيل عبر خادم محلي خفيف (اختياري):
```bash
# باستخدام Python 3:
python -m http.server 8080

# أو باستخدام Node.js:
npx serve .
```
ثم توجه إلى الرابط: `http://localhost:8080`

---

## 📁 Repository Structure

```
.
├── index.html          # الهيكل الدلالي للتطبيق وواجهة المستخدم (Semantic HTML5 Shell)
├── styles.css          # نظام التصميم المتكامل (Vercel-inspired CSS3, Responsive, Dark/Light Themes)
├── app.js              # محرك التطبيق، التوجيه، محرر الأكواد، والبحث الفوري (Vanilla JS Engine)
├── content.js          # المحتوى المعماري، 31 دراسة حالة، والـ Schemas وقواعد البيانات
├── diagrams.js         # محرك رسوم معمارية النظم الموزعة التفاعلية (Vector SVG Architectures)
├── system_design.md    # المرجع النظري الشامل للمفاهيم الأساسية
├── system_design2.md   # المرجع العملي المتقدم للأنظمة الضخمة
└── README.md           # دليل التوثيق والتعريف بالمشروع
```

---

## 🎯 Target Audience & Goals

هذا المستودع موجه إلى:
- **مهندسي البرمجيات (Software Engineers):** للترقي لمستوى Senior و Staff و Principal Engineer.
- **مهندسي الحلول والمعماريين (Solution Architects):** لبناء أنظمة مرنة تتحمل ملايين المستخدمين المتزامنين (High Concurrency & High Availability).
- **المرشحين لمقابلات الشركات العالمية (Tech Interviewees):** للتحضير المكثف لأسئلة System Design في Google, Meta, Amazon, Apple, Netflix, Microsoft, Stripe, Uber.

---

## 🤝 Contributing

المساهمات مرحب بها دائماً! إذا كنت ترغب في إضافة دراسة حالة جديدة، أو تحسين خوارزمية، أو إثراء المحتوى المعماري:

1. اعمل Fork للمستودع.
2. أنشئ فرعاً لميزتك (`git checkout -b feature/NewSystemBreakdown`).
3. احفظ تعديلاتك (`git commit -m 'feat: Add Distributed Locking breakdown'`).
4. ارفع الفرع (`git push origin feature/NewSystemBreakdown`).
5. افتح Pull Request للمراجعة والمناقشة.

---

## 👤 Author & Credits

تم بناء وتطوير هذا المشروع بواسطة **[Amr Khalid](https://github.com/Amr-khalid)**.

- **GitHub:** [@Amr-khalid](https://github.com/Amr-khalid)
- **Project Repository:** [https://github.com/Amr-khalid/SystemDesign](https://github.com/Amr-khalid/SystemDesign)

---

## 📄 License

هذا المشروع مرخص تحت رخصة **MIT License** - راجع ملف [LICENSE](LICENSE) لمزيد من التفاصيل.

<div align="center">
  <sub>⭐️ إذا استفدت من هذا المشروع، لا تنسَ ترك Star على المستودع لدعم المحتوى العربي التقني المتميز! ⭐️</sub>
</div>
