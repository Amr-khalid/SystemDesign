/**
 * content.js - Complete System Design Mastery Knowledge Base
 * 7 Modules, 31 Real-World System Breakdowns, Architectural Patterns, Key Technologies, and Capstones
 */

const SystemDesignData = {
  modules: [
    {
      id: "module-1",
      number: "1",
      title: "In a Hurry — المسار السريع ومنهجية المقابلة",
      subtitle: "دليل سريع للمفاهيم الأساسية، إطار إدارة المقابلة في 45 دقيقة، ومصفوفة اتخاذ القرارات",
      diagramId: "interviewTimeline",
      sections: [
        {
          id: "sec-1-1",
          number: "1.1",
          title: "المقدمة ونطاق هندسة النظم — Introduction & Scope",
          description: "هندسة وتصميم النظم (System Design) هي عملية تحديد المعمارية (Architecture)، والمكونات (Components)، والواجهات (Interfaces)، ونماذج البيانات (Data Models) لنظام برمجي معقد لتلبية متطلبات وظيفية وغير وظيفية مع مراعاة التوسع والموثوقية.",
          levels: {
            l1: {
              badge: "المستوى 1: الأساسيات",
              text: "الأنظمة الأحادية (Monolith) تبدأ بقاعدة بيانات واحدة وخادم واحد. مع زيادة عدد المستخدمين، ينشأ عنق الزجاجة (Bottleneck). التوسع ينقسم إلى رأسي (Vertical Scaling - تعزيز المعالج والذاكرة) وأفقي (Horizontal Scaling - إضافة خوادم وتوزيع الحمل عبر Load Balancers)."
            },
            l2: {
              badge: "المستوى 2: المعمارية والمفاضلات",
              text: "الانتقال إلى الأنظمة الموزعة والخدمات المصغرة (Microservices) يقدم ميزات الاستقلالية وقابلية التوسع الجزئي، لكنه يفرض تعقيدات شبكية مثل زمن الوصول (Latency)، وتحديات الاتساق (Consistency)، ونقاط الفشل المفردة (SPOF). المفاضلة تدور حول السرعة التشغيلية مقابل تعقيد الصيانة (Operational Overhead)."
            },
            l3: {
              badge: "المستوى 3: Staff+ والأنظمة الفائقة",
              text: "تقييم المعمارية وفق معايير التوافر العالي 99.999% (Five Nines = أقل من 5 دقائق توقف سنويًا)، مع بناء استراتيجيات التعافي من الكوارث في مراكز بيانات متعددة (Multi-Region Active-Active)، وعزل الإخفاقات (Blast Radius Reduction)، وتصميم النظم لتكون خالية من الحالة (Stateless Services)."
            }
          },
          diagramId: "architectureEvolution"
        },
        {
          id: "sec-1-2",
          number: "1.2",
          title: "خارطة الاستعداد المنهجي — How to Prepare",
          description: "خطة واضحة ومدروسة للمهندس للارتقاء من المفاهيم النظرية إلى مناقشات مهندسي الصف الأول (Staff/Principal).",
          levels: {
            l1: {
              badge: "المستوى 1: بناء الأساس النظري",
              text: "فهم البنيات الأساسية: خوادم الويب، خوادم التطبيقات، قواعد البيانات العلائقية وغير العلائقية، الكاش (Redis/Memcached)، وموازنات الأحمال. المراجع الأساسية: Designing Data-Intensive Applications لمارتن كليبمان و System Design Interview لأليكس شو."
            },
            l2: {
              badge: "المستوى 2: الحسابات التقديرية وتفكيك المشاكل",
              text: "التدرب على حسابات الحجم التقديرية (Back-of-the-envelope calculations) لحساب QPS والتخزين وسعة النطاق الترددي، واستخدام أنماط جاهزة لحل مشاكل التغذية الإخبارية، ومنظومات الرسائل، ونمذجة الواجهات وقواعد البيانات بدقة."
            },
            l3: {
              badge: "المستوى 3: المحاكاة ومناقشة المقايضات المعقدة",
              text: "إجراء مقابلات تجريبية (Mock Interviews)، قراءة مدونات الهندسة للشركات الكبرى (Netflix TechBlog, Uber Engineering, Meta Engineering)، ومناقشة تفاصيل الفشل الواقعية مثل تقسيم الشبكة (Network Partitions)، والسباق التزامني (Race Conditions)، وانهيار الكاش (Thundering Herd)."
            }
          }
        },
        {
          id: "sec-1-3",
          number: "1.3",
          title: "منهجية الحل وإدارة المقابلة — Delivery Framework",
          description: "إطار زمني معياري لإدارة مقابلة System Design مدتها 45 دقيقة بنجاح واحترافية.",
          table: {
            headers: ["المرحلة", "الوقت المقترح", "المهام الجوهرية والمخرجات"],
            rows: [
              ["1. فهم وتحديد النطاق (Scope & Requirements)", "5 - 8 دقائق", "تحديد المتطلبات الوظيفية (Core Features)، والمتطلبات غير الوظيفية (Scale, Latency, Availability, Consistency)، وتقدير الأرقام (QPS, Storage)."],
              ["2. التصميم عالي المستوى (High-Level Design)", "10 - 15 دقيقة", "رسم المكونات الكبرى: Client, CDN, Load Balancer, API Gateway, Microservices, Databases, Cache, Message Queues. تحديد مسار القراءة والكتابة."],
              ["3. التعمق في المكونات (Deep Dive)", "15 - 20 دقيقة", "التركيز على أكثر 2-3 مكونات حرجة: خوارزميات التجزئة، هياكل البيانات، تجنب السباق التزامني، تقسيم قواعد البيانات، وتدفق الأحداث."],
              ["4. معالجة الاختناقات والخاتمة (Bottlenecks & Wrap-up)", "3 - 5 دقائق", "مناقشة نقاط الفشل المفردة (SPOF)، المراقبة والمقاييس (Metrics/Alerts)، التوسع المستقبلي، وتلخيص المقايضات المتخذة."]
            ]
          },
          levels: {
            l1: { badge: "المستوى 1", text: "السيطرة على المتطلبات وتوضيح الافتراضات قبل البدء في الرسم المعماري." },
            l2: { badge: "المستوى 2", text: "رسم مخططات البيانات (Schemas) وواجهات REST/gRPC ومسار الطلب بالتفصيل." },
            l3: { badge: "المستوى 3", text: "القيادة الفنية، تبرير القرارات المعمارية بالأرقام والبدائل، وتقديم خطط الطوارئ (Graceful Degradation)." }
          }
        },
        {
          id: "sec-1-4",
          number: "1.4",
          title: "خريطة التقنيات الأساسية — Key Technologies Matrix",
          description: "جدول المقارنة السريعة لاختيار التقنية المناسبة لكل متطلب معماري في النظام الموزع.",
          table: {
            headers: ["الفئة", "أبرز التقنيات", "متى تستخدمها؟ (Use Cases)", "نقاط القوة والمفاضلة"],
            rows: [
              ["In-Memory Cache", "Redis, Memcached", "الجلسات، عدادات الإعجاب، Leaderboards، وتخزين الاستعلامات السريعة.", "سرعة فائقة (sub-millisecond)، مقيدة بحجم الذاكرة."],
              ["Message Broker / Log", "Kafka, RabbitMQ, Pulsar", "تدفق الأحداث، معالجة الدفعات، السجلات، والاتصال غير المتزامن.", "Kafka: سجل ثابت وترتيب بالأقسام وقابلية استرجاع الأحداث."],
              ["Search Engine", "Elasticsearch, OpenSearch", "البحث النصي الكامل (Full-text Search)، التصفية المعقدة، وتحليل السجلات.", "مبني على Inverted Index، ممتاز في القراءة، ومكلف في التحديث الفوري."],
              ["Wide-Column / NoSQL", "Cassandra, ScyllaDB", "بيانات السلاسل الزمنية، رسائل الدردشة، كتابة فائقة الكثافة.", "كتابة سريعة مع LSM-Trees وتوافر عالٍ بدون نقطة فشل مفردة (Masterless)."],
              ["RDBMS", "PostgreSQL, MySQL", "البيانات المالية، الحسابات البنكية، والبيانات ذات الاتساق الصارم (ACID).", "اتساق قوي ودعم علاقات معقدة، وتوسعه الأفقي في الكتابة يتطلب Sharding."]
            ]
          }
        }
      ],
      // Capstone Example for Module 1
      capstone: {
        title: "تطبيق عملي كبير: محاكاة مقابلة تصميم نظام دفع إلكتروني دولي في 45 دقيقة",
        scenario: "طُلب منك في مقابلة Staff Engineer تصميم بوابة دفع عالمية تستقبل 50,000 عملية دفع في الثانية في فترات الذروة، مع ضمان عدم خصم المبلغ مرتين إطلاقاً واستجابة أقل من 200ms.",
        hiddenSolution: {
          summary: "الحل المعماري الكامل مقسم وفق إطار الـ 45 دقيقة القياسي:",
          steps: [
            {
              title: "1. الدقائق (0-8): تحديد النطاق والحسابات",
              content: "• Peak Write QPS = 50,000 req/sec\n• Daily Storage = 50,000 × 86,400 × 1KB ≈ 4.3 TB/day\n• Non-Functional: Zero Data Loss (RPO=0), Strong Consistency (ACID), Sub-second P99, PCI-DSS compliance."
            },
            {
              title: "2. الدقائق (8-22): التصميم عالي المستوى (High Level Design)",
              content: "• Client → Global Anycast IP → Cloudflare CDN/WAF → API Gateway Tier (Envoy)\n• Idempotency Check Filter: مفتاح فريد (Idempotency Key) يتم فحصه ذرياً في Redis Cluster عبر Lua Script.\n• Core Payment Service يكتب في PostgreSQL مع Transactional Outbox Pattern.\n• Kafka Cluster ينقل أحداث الدفع لمنظومات التسوية المصرفية (Bank Acquirers)."
            },
            {
              title: "3. الدقائق (22-40): التعمق المعماري وحل معضلات التزامن (Deep Dive)",
              content: "• معالجة تكرار الدفع: Idempotency Key TTL = 24h في Redis. إذا كان المفتاح قيد المعالجة (IN_PROGRESS)، يرفض الطلب الثاني بكود 409 Conflict.\n• ضمان الاتساق دون 2PC: استخدام Saga Orchestrator (بواسطة Temporal) لإدارة خطوات: حجز المبلغ ← استدعاء البنك ← تأكيد الخصم ← إرسال الإشعار. عند فشل البنك، يتم تنفيذ Compensating Transaction فوراً.\n• تقسيم البيانات (Sharding): التقسيم بناءً على `hash(merchant_id) % N` لضمان وقوع معاملات التاجر الواحد في نفس الشارد."
            },
            {
              title: "4. الدقائق (40-45): معالجة الأعطال والاختناقات (Bottlenecks & SPOF)",
              content: "• Multi-Region Active-Active: نشر النظام في منطقتين مع مزامنة متسلسلة عبر Raft Consensus.\n• الدفعات المعلقة: محرك Daily Reconciliation يقارن كشوف حسابات البنوك مع دفاتر النظام لاكتشاف أي فروقات وتصحيحها آلياً."
            }
          ]
        }
      }
    },

    {
      id: "module-2",
      number: "2",
      title: "Core Concepts — المفاهيم الأساسية والجوهرية",
      subtitle: "الشبكات، نمذجة البيانات، التخزين المؤقت، التجزئة المتسقة، ونظريات النظم الموزعة",
      diagramId: "cachingStrategies",
      sections: [
        {
          id: "sec-2-1",
          number: "2.1",
          title: "أساسيات الشبكات والبروتوكولات — Networking Essentials",
          description: "فهم طبقات OSI وبروتوكولات النقل والتطبيقات وتطور الويب من HTTP/1.1 إلى HTTP/3 وموازنات الأحمال.",
          levels: {
            l1: {
              badge: "المستوى 1: البروتوكولات ونموذج OSI",
              text: "نموذج OSI و TCP/IP من الطبقة الفيزيائية حتى الطبقة السابعة. مقارنة TCP (موثوق، يضمن الترتيب عبر 3-Way Handshake، للويب والملفات) و UDP (عديم الحالة، سريع بدون ضمان وصول، للألعاب والبث المباشر)."
            },
            l2: {
              badge: "المستوى 2: تطور HTTP وموازنة الأحمال",
              text: "HTTP/1.1 (Keep-Alive مع Head-of-Line Blocking)، HTTP/2 (Multiplexing عبر اتصال TCP واحد مع HPACK)، HTTP/3 المبني على QUIC فوق UDP مع إلغاء حجب الحزم كلياً. موازنات الأحمال: L4 (توجيه IP/Port سريع) مقابل L7 (تحليل محتوى HTTP مع إمكانية إنهاء SSL/TLS)."
            },
            l3: {
              badge: "المستوى 3: التوجيه العالمي واستنزاف المنافذ",
              text: "استخدام Geo-DNS وتوجيه Anycast لمشاركة نفس عنوان IP عالمياً وحماية النظم من هجمات DDoS. ضبط مجمعات الاتصال (Connection Pooling) في خوادم التطبيقات لمنع استنزاف منافذ TCP (Socket Exhaustion)."
            }
          }
        },
        {
          id: "sec-2-4",
          number: "2.4",
          title: "التخزين المؤقت المتقدم — Caching Strategies & Crisis Mitigation",
          description: "أنماط الكاش، سياسات الإخلاء، وحلول هندسية لأزمات الكاش الأكثر خطورة في بيئات الإنتاج الضخمة.",
          diagramId: "cachingStrategies",
          levels: {
            l1: {
              badge: "المستوى 1: أنماط الكاش الأربعة",
              text: "Cache-Aside (التحميل الكسول)، Write-Through (الكتابة المتزامنة في الكاش والـ DB)، Write-Back (الكتابة غير المتزامنة في دفعات)، و Write-Around (تجاوز الكاش مباشرة للقاعدة)."
            },
            l2: {
              badge: "المستوى 2: سياسات الإخلاء وحل أزمات الكاش",
              text: "سياسات LRU, LFU, FIFO, ARC. حل أزمة Cache Stampede / Thundering Herd عبر الأقفال الموزعة أو التجديد الاستباقي. حل Cache Penetration بفلاتر Bloom Filters أو تخزين قيم فارغة. حل Cache Avalanche بإضافة Jitter عشوائي لـ TTL."
            },
            l3: {
              badge: "المستوى 3: الكاش متعدد المستويات (Multi-tier Caching)",
              text: "بناء تسلسل هرمي: L1 In-Memory Cache محلي (Caffeine في التطبيق)، يليه L2 Distributed Cache (Redis Cluster)، يليه CDN للمحتوى الثابت، مع تفريغ الكاش المعتمد على أحداث CDC via Debezium."
            }
          }
        },
        {
          id: "sec-2-6",
          number: "2.6",
          title: "التجزئة المتسقة — Consistent Hashing",
          description: "خوارزمية توزيع المفاتيح عبر الخوادم لتقليل حركة ترحيل البيانات عند تغيير حجم المجمع.",
          diagramId: "consistentHashing",
          levels: {
            l1: {
              badge: "المستوى 1: الفكرة الأساسية",
              text: "ترتيب فضاء الهاش على شكل حلقة دائرية (Hash Ring من 0 إلى 2^32-1)، وتعيين المفتاح إلى أول خادم في اتجاه عقارب الساعة لتجنب إعادة توزيع كافة المفاتيح عند إضافة أو حذف خوادم."
            },
            l2: {
              badge: "المستوى 2: العقد الافتراضية (Virtual Nodes)",
              text: "تعيين عدة نقاط افتراضية (100-256 نقطة) لكل خادم فيزيائي على الحلقة لضمان توزيع الحمل بالتساوي ومنع البقع الساخنة، مع تقليل نسبة ترحيل البيانات عند تغيير السعة إلى k/N فقط."
            },
            l3: {
              badge: "المستوى 3: التطبيقات في الإنتاج والنسخ الموزع",
              text: "تطبيق التكرار الموزع (Replication Factor = N) بتعيين النسخ الاحتياطية للخوادم الفيزيائية المتتالية عبر مناطق توفر مستقلة (Rack-aware)، واستخدام بروتوكول Gossip لمزامنة حالة الحلقة."
            }
          }
        },
        {
          id: "sec-2-7",
          number: "2.7",
          title: "نظريتا CAP و PACELC — Distributed Consensus & Trade-offs",
          description: "القواعد الحاكمة للمقايضات بين الاتساق، التوافر، ومقاومة الانقطاع الشبكي في النظم الموزعة.",
          diagramId: "capTheorem",
          levels: {
            l1: {
              badge: "المستوى 1: أضلاع CAP",
              text: "الاتساق (Consistency): كل قراءة تعيد أحدث كتابة أو خطأ. التوافر (Availability): كل عقدة سليمة تعيد استجابة مقبولة. مقاومة الانقطاع (Partition Tolerance): استمرار العمل رغم تعطل الشبكة بين العقد (إلزامية في أي شبكة موزعة)."
            },
            l2: {
              badge: "المستوى 2: نظرية PACELC ومستويات الاتساق",
              text: "إن وُجد Partition (P)، نفاضل بين التوافر (A) والاتساق (C)؛ وفي غيابه (Else - E)، نفاضل بين زمن الاستجابة (Latency - L) والاتساق (Consistency - C). نماذج الاتساق: Strong, Eventual, Causal, Read-Your-Writes."
            },
            l3: {
              badge: "المستوى 3: النصاب القانوني (Quorum) والأختام الزمنية",
              text: "معادلة النصاب: R + W > N لضمان الاتساق القوي. معالجة تضارب البيانات عبر Vector Clocks و Last-Write-Wins (LWW) باستخدام أختام زمنية هجينة (Hybrid Logical Clocks - HLC)."
            }
          }
        },
        {
          id: "sec-2-8",
          number: "2.8",
          title: "محركات التخزين والفهرسة — Database Indexing: B+ Trees vs LSM Trees",
          description: "المقارنة الهيكلية المعمقة بين هياكل B+ Trees المخصصة للقراءة السريعة وهياكل LSM-Trees المخصصة للكتابة الفائقة.",
          diagramId: "storageEngines",
          levels: {
            l1: {
              badge: "المستوى 1: الفهارس الأساسية",
              text: "الفهرس المجمع (Clustered Index) يحدد الترتيب الفيزيائي الفعلي للصفوف على القرص، بينما الفهرس غير المجمع (Non-Clustered Index) يحتوي مؤشرات تشير إلى موقع الصف الأصلي."
            },
            l2: {
              badge: "المستوى 2: مقارنة B+ Trees و LSM Trees",
              text: "B+ Tree تحدث البيانات في مكانها بالصفحات (In-place) مما يجعل القراءة ممتازة O(log N) لكن الكتابة تولد Random I/O مكلف. LSM-Tree تسجل البيانات تسلسلياً في MemTable بالذاكرة و WAL ثم تصدر SSTables غير قابلة للتعديل مما يجعل الكتابة فائقة السرعة."
            },
            l3: {
              badge: "المستوى 3: الفهارس المغطية والمركبة",
              text: "تصميم الفهارس المركبة وفق مبدأ أقصى اليسار (Leftmost Prefix Rule). استخدام الفهارس المغطية (Covering Indexes) لقراءة البيانات من الفهرس مباشرة (Index-Only Scan) دون الرجوع للجدول، والفهارس الجزئية (Partial Indexes) لتوفير الذاكرة."
            }
          }
        }
      ],
      capstone: {
        title: "تطبيق عملي كبير: تتبع مسار طلب شراء كامل (End-to-End Request Trace) عبر كل طبقات النظام الموزع",
        scenario: "تتبع خطوة بخطوة ما يحدث منذ نقر مستخدم في طوكيو على زر 'شراء منتج' على تطبيق تجارة عالمي حتى اكتمال الخصم وتحديث المخزون والمحاسبة في قاعدة البيانات الأمريكية.",
        hiddenSolution: {
          summary: "المسار الهندسي الدقيق للطلب عبر 10 خطوات متسلسلة:",
          steps: [
            {
              title: "1. طبقة الـ Edge والشبكات (DNS & Anycast)",
              content: "يقوم هاتف المستخدم بحل الـ DNS عبر Geo-DNS ليرتبط بأقرب نقطة تواجد (Edge POP) في طوكيو عبر بروتوكول HTTP/3 (QUIC فوق UDP) مع إنهاء الـ TLS 1.3 في أقل من 15ms."
            },
            {
              title: "2. طبقة الحماية وتحديد المعدل (API Gateway & Rate Limiter)",
              content: "تتحقق الـ Gateway من توقيع JWT وتقوم باستدعاء Rate Limiter في Redis Cluster (عبر Sliding Window Lua Script) للتأكد من عدم تجاوز العميل لحد 10 طلبات/دقيقة."
            },
            {
              title: "3. طبقة فحص الكاش L1 / L2 (Cache Lookup)",
              content: "يفحص التطبيق كاش المنتج في Redis Cluster للتأكد من أن المنتج لا يزال متاحاً ولم ينفذ، مستخدماً Consistent Hashing للوصول مباشرة للعقدة المعنية بـ 1ms."
            },
            {
              title: "4. طبقة التنافس على المخزون (Atomic Inventory Lock)",
              content: "تنفيذ نص Redis Lua لخصم المخزون ذرياً: `if stock > 0 then redis.call('decr', key) return 1 else return 0 end`. هذا يمنع البيع المزدوج دون إبطاء قواعد البيانات."
            },
            {
              title: "5. طبقة كتابة المعاملة المحلية (Transactional Outbox Pattern)",
              content: "يكتب خادم الطلبات في PostgreSQL المحلي سجل الطلب + سجل الحدث `OrderCreated` في نفس المعاملة الذرية (ACID Transaction) لضمان عدم ضياع أي أمر."
            },
            {
              title: "6. طبقة نقل الأحداث اللحظية (Debezium CDC & Kafka)",
              content: "يقرأ محرك Debezium سجل الـ WAL من PostgreSQL ويحول حدث الشراء إلى Kafka Partition محدد بـ `hash(order_id)` مع `acks=all` لضمان عدم الفقدان."
            },
            {
              title: "7. إدارة المعاملة الموزعة (Saga Orchestration)",
              content: "يسحب Saga Orchestrator الحدث ويقوم بالتنسيق مع خدمة الدفع Stripe API وإذا نجح الخصم يرسل أمر الشحن والتخزين، وإن فشل يقوم باستدعاء المعاملة التعويضية لإعادة المخزون في Redis."
            }
          ]
        }
      }
    },

    {
      id: "module-3",
      number: "3",
      title: "Question Breakdowns — مسائل وتطبيقات معمارية واقعية (31 مسألة)",
      subtitle: "تفكيك 31 مسألة مقابلة حقيقية للشركات الكبرى (FAANG / Big Tech) من الأساسيات حتى مستوى Staff+",
      problems: [
        {
          id: "prob-3-1",
          number: "3.1",
          title: "تقصير الروابط — Bitly (URL Shortener)",
          category: "Storage & Key Generation",
          diagramId: "bitlyArchitecture",
          calculations: "• 100M رابط جديد شهرياً (38 Write QPS)\n• نسبة القراءة للكتابة 100:1 (Read QPS ≈ 3,800)\n• التخزين لـ 5 سنوات: 6 مليار رابط × 500 بايت ≈ 3 تيرابايت.",
          l1: "توليد مفتاح بطول 7 أحرف باستخدام Base62 الذي يوفر 3.5 تريليون احتمال فريد. استخدام جدول علائقي (id, short_url, original_url, created_at) مع Index على short_url.",
          l2: "إنشاء خدمة توليد المفاتيح مسبقاً (Key Generation Service - KGS) وتخزينها في الذاكرة لتسليمها بـ O(1) دون تصادم. تخزين الروابط الساخنة في Redis (قاعدة 80/20)، واستخدام HTTP 301 للتوجيه الدائم أو HTTP 302 لجمع التحليلات.",
          l3: "تقسيم قاعدة البيانات بـ hash(short_key) % N، حماية المنظومة من الروابط الضارة (Google Safe Browsing API)، واستخدام CDN Caching عند الـ Edge للروابط الفيروسية مع تفريغ إحصائيات النقرات إلى Kafka ثم ClickHouse للتحليلات اللحظية."
        },
        {
          id: "prob-3-2",
          number: "3.2",
          title: "التخزين والمزامنة السحابية — Dropbox / Google Drive",
          category: "Large Blob Storage & Sync",
          calculations: "• 500M مستخدم، 100M نشط يومياً، متوسط حجم الملف 2MB.\n• سعة التخزين: 50PB مع تكرار النسخ (Replication Factor = 3x).",
          l1: "فصل البيانات الوصفية (Metadata في MySQL/PostgreSQL) عن محتوى الملفات الثنائي (Binary Blobs في S3/Blob Storage). تقطيع الملفات لأجزاء (Chunks بحجم 4MB) وتوليد SHA-256 لمنع تكرار تخزين الأجزاء المتطابقة (Deduplication).",
          l2: "عميل مزامنة ذكي (Sync Client) يراقب نظام الملفات المحلي، ويحسب الفروقات (Rolling Hash / Rsync) لرفع الأجزاء المعدلة فقط (Delta Sync). خادم تنبيهات عبر WebSockets/Long Polling لإشعار باقي أجهزة المستخدم بالتحديثات فوراً.",
          l3: "حل تضارب التعديلات المتزامنة (Conflict Resolution) بإنشاء نسخ متفرعة Conflicted Copy، وتطبيق التشفير الشامل من جانب العميل، وإلغاء التكرار على النطاق العام (Cross-user Global Deduplication) لتوفير ملايين الدولارات في التخزين."
        },
        {
          id: "prob-3-3",
          number: "3.3",
          title: "خدمات التوصيل المحلي والمطابقة — DoorDash / Instacart",
          category: "Geospatial & Batch Dispatch",
          calculations: "• 1M طلب يومياً (12 QPS متوسط، 100 QPS ذروة).\n• تحديث موقع 100,000 مندوب كل 4 ثوانٍ = 25,000 QPS موقع جغرافي.",
          l1: "دورة حياة الطلب: تم الإنشاء ← تأكيد المطعم ← تعيين المندوب ← استلام ← في الطريق ← تم التسليم. تخزين الحالات في PostgreSQL مع تقييد جغرافي أولي.",
          l2: "محرك التوزيع المجمع (Batch Dispatch Engine): تجميع الطلبات في نوافذ زمنية (30 ثانية) وتطبيق خوارزمية المطابقة الموزونة (Weighted Bipartite Matching) لتقليل زمن الانتظار. تتبع مواقع المندوبين كل 4 ثوانٍ في Redis Geospatial.",
          l3: "حساب ETA المركب بالـ ML (زمن تجهيز الطعام + زمن وصول المندوب + حركة المرور اللحظية). إدارة إلغاء المندوب للطلب تلقائياً وإعادة جدولته بأولوية قصوى دون إعادة طبخ الطعام مع حماية من انهيار المطاعم المزدحمة."
        },
        {
          id: "prob-3-4",
          number: "3.4",
          title: "حجز التذاكر والفعاليات الكبرى — Ticketmaster",
          category: "High Concurrency & Flash Sales",
          calculations: "• مبيعات خاطفة (Flash Sales): 100,000 تذكرة تباع في 60 ثانية لـ 1,000,000 مشتري متزامن.\n• القفل المؤقت: 10 دقائق أثناء الدفع.",
          l1: "جدول المقاعد في قاعدة البيانات مع قفل تفاؤلي (Optimistic Locking) باستخدام عمود version لمنع الحجز المزدوج لنفس المقعد.",
          l2: "غرفة الانتظار الافتراضية (Virtual Waiting Room) لتمرير دفعات بمعدل ثابت يطابق سعة بوابات الدفع. تنفيذ القفل الذري للمقعد في Redis بنصوص Lua مع TTL لمدة 10 دقائق: SET seat_123 user_456 NX EX 600.",
          l3: "إدارة معاملات الدفع عبر Saga Pattern، مع إعادة المقعد فوراً لحالة المتاح عبر حدث في Kafka عند فشل الدفع أو انقضاء المهلة. الحماية من البوتات عبر Proof-of-Work و Cloudflare Turnstile مع عزل المقاعد في فضاءات كاش مسبقة."
        },
        {
          id: "prob-3-5",
          number: "3.5",
          title: "شريط الأخبار والتغذية — Facebook / Twitter News Feed",
          category: "Fan-out & Feed Ranking",
          calculations: "• 1 مليار مستخدم نشط، كل مستخدم يملك 500 صديق.\n• 100,000 منشور جديد في الثانية، Read:Write = 10:1.",
          l1: "نموذج السحب الساذج (Pull Model) باستعلام SELECT ... WHERE user_id IN (friends)؛ بطيء جداً O(N) مع كثرة الأصدقاء ويتسبب في شلل قاعدة البيانات.",
          l2: "نموذج التوزيع المسبق (Push / Fan-out-on-write): عند النشر، تُحقن معرفات المنشور في Feed Cache الخاص بكل صديق في Redis لتصبح القراءة سريعة بـ O(1).",
          l3: "النموذج الهجين (Hybrid Fanout): Push للمستخدمين العاديين، و Pull للمشاهير والحسابات المليونية عند فتح التغذية لتقليل تكلفة الكتابة. ترتيب المنشورات بنماذج تعلم الآلة (Ranking Engine) بناءً على التفاعل والحداثة."
        },
        {
          id: "prob-3-6",
          number: "3.6",
          title: "منصات التوافق الجغرافي — Tinder",
          category: "Geospatial & Recommendation",
          calculations: "• 50M مستخدم نشط يومياً، 1.6 مليار سحب (Swipe) يومياً (≈ 18,500 Swipe/sec).",
          l1: "حفظ الإعجابات في جدول قاعدة بيانات، وإنشاء سجل Match عند تطابق رغبة الطرفين.",
          l2: "تقسيم العالم لخلايا جغرافية عبر Uber H3 / Google S2. توليد طابور توصيات مسبق (50-100 ملف شخصي) لكل مستخدم في Redis لتوفير تجربة سحب فورية.",
          l3: "معالجة مليارات عمليات السحب بدفع الأحداث إلى Kafka، واستخدام Bloom Filters لمنع ظهور الملفات المعروضة سابقاً، وحساب درجات الجاذبية (Elo Score) في الخلفية."
        },
        {
          id: "prob-3-7",
          number: "3.7",
          title: "منصات تقييم الأكواد المعزولة — LeetCode / HackerRank",
          category: "Compute Sandboxing & Queueing",
          calculations: "• 50,000 متسابق يرسلون حلولاً برمجية في مسابقات أسبوعية في غضون 90 دقيقة.",
          l1: "استقبال الكود عبر API، وضعه في طابور مهام (RabbitMQ)، وسحبه بواسطة Worker لتنفيذه وإرجاع النتيجة.",
          l2: "بيئة عزل آمنة (Sandboxing via Docker, Linux cgroups, namespaces, gVisor). تقييد الذاكرة (256MB)، والمعالج (2s)، وحظر الوصول إلى الشبكة تماماً لمنع الاختراقات وهجمات Fork Bombs.",
          l3: "تحميل حالات الاختبار الكبيرة مسبقاً في الذاكرة المشتركة (Shared Memory)، والتوسع التلقائي لعقد العمال (Auto-scaling Workers) في المسابقات، وبث نتائج الاختبارات لحظياً عبر SSE."
        },
        {
          id: "prob-3-8",
          number: "3.8",
          title: "المحادثات الفورية المشفرة — WhatsApp",
          category: "Real-time Messaging & E2EE",
          diagramId: "chatArchitecture",
          calculations: "• 2 مليار مستخدم، 100 مليار رسالة يومياً (1.2M رسالة في الثانية في المتوسط).",
          l1: "اتصالات مستمرة عبر WebSockets/XMPP. الخادم يمرر الرسالة للمستلم إن كان متصلاً، أو يحفظها في طابور غير متصل (Offline Queue).",
          l2: "التشفير الشامل عبر Signal Protocol (Double Ratchet). الخادم لا يملك مفاتيح فك التشفير. حذف الرسائل نهائياً من الخوادم فور تأكيد استلامها (Double Tick).",
          l3: "إدارة المجموعات بالتوزيع من جانب الخادم (Server-side fan-out). خدمة حالة الظهور (Presence) تعتمد على نبضات قلب دورية كل 5 ثوانٍ في Redis Bitmaps لتفادي إغراق الشبكة."
        },
        {
          id: "prob-3-9",
          number: "3.9",
          title: "محدد معدل الطلبات الموزع — Distributed Rate Limiter",
          category: "Traffic Management & Resilience",
          diagramId: "rateLimiterArchitecture",
          calculations: "• معالجة 1,000,000 req/sec عبر بوابات الـ API مع التحقق من الهوية وإرجاع 429 في أقل من 2ms.",
          l1: "تطبيق خوارزمية Token Bucket محلياً في ذاكرة الخادم وإرجاع كود 429 Too Many Requests عند نفاد الرموز.",
          l2: "التوزيع عبر Redis Cluster باستخدام خوارزمية Sliding Window Counter وتنفيذ المنطق ذرياً عبر نصوص Redis Lua Scripts لمنع مشاكل السباق التزامني.",
          l3: "معمارية متعددة المستويات: مزامنة دفعات الرموز محلياً على خوادم التطبيقات مع مزامنة غير متزامنة مع Redis، وتطبيق التقييد على مستوى API Gateway (Envoy/Kong) و Edge CDN."
        },
        {
          id: "prob-3-10",
          number: "3.10",
          title: "منصات بث ومشاركة الفيديو — YouTube / Netflix",
          category: "Video Processing & CDN",
          diagramId: "videoPipeline",
          calculations: "• 500 ساعة فيديو ترفع كل دقيقة. 1 مليار ساعة مشاهدة يومياً. Bandwidth = عدة تيرابت في الثانية.",
          l1: "رفع الفيديو لـ S3 ← تحويله بواسطة Transcoder لدقات مختلفة ← البث عبر مشغل الويب.",
          l2: "خط معالجة موزع (Chunked Transcoding Pipeline): تقطيع الفيديو لقطع صغيرة (GOPs مدتها 5-10 ثوانٍ) ومعالجتها بالتوازي عبر مئات خوادم GPU. دعم البث التكيفي (HLS/DASH).",
          l3: "التخزين المؤقت للفيديوهات الشهيرة في Edge CDNs القريبة من مزودي الإنترنت (ISPs). ترحيل الفيديوهات نادرة المشاهدة للتخزين البارد مع التشفير المضغوط (Erasure Coding)."
        },
        {
          id: "prob-3-11",
          number: "3.11",
          title: "التعليقات المباشرة للبث — Facebook Live Comments",
          category: "High Fan-out & Streaming",
          calculations: "• بث مباشر يتابعه 2 مليون مشاهد في نفس اللحظة، 100,000 تعليق في الثانية.",
          l1: "اتصال المشاهدين بخادم WebSockets ونشر التعليقات (Broadcast) لكافة المتصلين.",
          l2: "تطبيق شجرة خوادم توزيع (Edge Relay Tree) وتطبيق Sampling/Throttling لعرض 20-30 تعليق في الثانية فقط على شاشة الهاتف لمنع تجميد واجهة المستخدم.",
          l3: "حفظ التعليقات الحية في الذاكرة للبث المباشر، ودفع دفعات إلى Kafka لتخزينها في Cassandra مصحوبة بالطابع الزمني الدقيق للتشغيل المتزامن في وضع التسجيل (VOD Replay)."
        },
        {
          id: "prob-3-12",
          number: "3.12",
          title: "العناصر الأكثر تكراراً — YouTube Top K Heavy Hitters",
          category: "Streaming & Probabilistic DS",
          calculations: "• حساب أكثر 100 فيديو مشاهدة في آخر 10 دقائق من بين 10 مليارات حدث مشاهدة.",
          l1: "استخدام HashMap لكل فيديو وفرز النتائج بالـ Heap؛ ينهار سريعاً لاستهلاكه ذاكرة هائلة ومشاكل القفل.",
          l2: "هياكل بيانات احتمالية: Count-Min Sketch لتقدير تردد المشاهدات باستهلاك ذاكرة ثابت وصغير، مع الاحتفاظ بـ Min-Heap بحجم K لأفضل الفيديوهات.",
          l3: "المعالجة المتوازية عبر Apache Flink عبر نوافذ زمنية منزلقة، ودمج نتائج الـ Top K المحلية في مجمّع نهائي (Global Top K Reducer) وتخزين الناتج في Redis Sorted Set."
        },
        {
          id: "prob-3-13",
          number: "3.13",
          title: "تطبيقات النقل والمطابقة اللحظية — Uber / Lyft",
          category: "Geospatial & Real-time Matching",
          diagramId: "uberArchitecture",
          calculations: "• 100M مستخدم نشط، 5M سائق، 20M رحلة يومياً، تحديث موقع كل 4 ثوانٍ.",
          l1: "تحديث إحداثيات السائق كل 4 ثوانٍ عبر WebSocket وحفظها في قاعدة البيانات والاستعلام بالنطاق الجغرافي.",
          l2: "الفهرسة المكانية عبر Uber H3 (شبكة سداسية متداخلة). تخزين مواقع السائقين في الذاكرة حسب رقم الخلية السداسية وفحص الخلية الحالية والخلايا المجاورة فوراً.",
          l3: "حساب التسعير الديناميكي (Surge Pricing) بناءً على العرض والطلب في كل خلية H3 كل 10 ثوانٍ. قفل السائق في Redis لمدة 10 ثوانٍ عند إرسال العرض لمنع تضارب المطابقات."
        },
        {
          id: "prob-3-14",
          number: "3.14",
          title: "زاحف الويب الشامل — Distributed Web Crawler (Googlebot)",
          category: "Big Data & Graph Crawling",
          calculations: "• زحف 1 مليار صفحة ويب شهرياً (≈ 400 صفحة في الثانية) وتخزين 1PB من النصوص.",
          l1: "دورة زحف أساسية: Seed URLs ← Fetch Page ← Parse Links ← Enqueue Unvisited Links.",
          l2: "بنية URL Frontier: طوابير مقسمة حسب النطاق (Domain Queues) لاحترام قواعد الأدب ومعدلات robots.txt، واستخدام Bloom Filter لفحص الروابط المزارة مسبقاً.",
          l3: "كشف المحتوى المتطابق أو شبه المتطابق عبر خوارزمية SimHash / MinHash، وتوزيع مهام الزحف على آلاف الخوادم باستخدام Kafka و RocksDB لتخزين الحالات محلياً."
        },
        {
          id: "prob-3-15",
          number: "3.15",
          title: "مجمّع نقرات الإعلانات — Ad Click Aggregator",
          category: "Stream Processing & Exactly-Once",
          calculations: "• 10 مليارات نقرة إعلان يومياً (≈ 115,000 Click/sec)، محاسبة مالية دقيقة.",
          l1: "تسجيل النقرات في جدول واستخراج التقارير بمهمة Cron دورية كل ساعة.",
          l2: "مسار تدفق مباشر: توجيه النقرات إلى Kafka ← المعالجة بـ Apache Flink عبر نوافذ زمنية منزلقة وتراكمية ← تخزين المخرجات في ClickHouse لتغذية لوحات المعلنين.",
          l3: "تطبيق ضمانات المعالجة لمرة واحدة بالضبط (Exactly-Once Semantics via Two-Phase Commit & Checkpoints)، واكتشاف النقر الاحتيالي (Click Fraud) بالتحقق من بصمة الجهاز في Redis."
        },
        {
          id: "prob-3-16",
          number: "3.16",
          title: "البحث في المنشورات الاجتماعية — Facebook Post Search",
          category: "Full-text Search & Privacy",
          calculations: "• بحث نصي في 10 مليارات منشور يومياً بزمن استجابة أقل من 100ms.",
          l1: "تقطيع المنشورات لكلمات مفتاحية وبناء فهرس معكوس (Inverted Index) بسيط يربط الكلمة بالمنشورات.",
          l2: "تقسيم الفهرس المعكوس بناءً على معرف المستند (Document-based Partitioning)، وتوجيه استعلام البحث بالتوازي لكافة الأقسام وتجميع النتائج عبر Query Aggregator.",
          l3: "خط فهرسة مزدوج: فهرس لحظي في الذاكرة للمنشورات الحديثة جداً يدمج مع الفهرس التاريخي، مع تصفية النتائج بناءً على صلاحيات الخصوصية (Privacy Filters) ونماذج الترتيب المخصصة."
        },
        {
          id: "prob-3-17",
          number: "3.17",
          title: "دليل الأماكن والأنشطة القريبة — Yelp / Google Places",
          category: "Spatial Indexing (QuadTree)",
          calculations: "• 100M مكان، 100M مستخدم يبحثون عن المطاعم والمحلات القريبة، Read:Write = 1000:1.",
          l1: "استعلام SQL يحدد مستطيل الإحداثيات (Bounding Box Query).",
          l2: "الفهرسة الهرمية عبر QuadTree (تجزئة المربعات لأربعة مربعات فرعية كلما زادت الكثافة) أو Geohash للبحث السريع بمطابقة البادئة النصية (Prefix Match).",
          l3: "تخزين شجرة QuadTree بالكامل في ذاكرة خوادم متماثلة وموزعة جغرافياً (نظراً لأن القراءة تفوق الكتابة بنسبة 1000:1)، ومزامنة التقييمات عبر Kafka بشكل غير متزامن."
        },
        {
          id: "prob-3-18",
          number: "3.18",
          title: "مشاركة الصور والقصص المؤقتة — Instagram Stories",
          category: "Ephemeral Storage & CDN",
          calculations: "• 500M قصة يومياً تختفي بعد 24 ساعة، ملايين المشاهدات في الساعة الأولى.",
          l1: "رفع الصورة إلى S3، وتخزين مسارها وبياناتها في MySQL، وإضافتها لتغذية المتابعين.",
          l2: "تخزين القصص في Redis/DynamoDB مع ضبط مهلة انتهاء صلاحية تلقائية (TTL = 24h). رفع الوسائط مباشرة لـ S3 عبر Presigned URLs لتخفيف الحمل عن خوادم التطبيقات.",
          l3: "تحويل الوسائط لصيغ حديثة (WebP/AVIF) بعدة أحجام، وتنزيل المحتوى مسبقاً في خلفية تطبيق الهاتف (Prefetching) لتوفير تصفح فوري وسلس."
        },
        {
          id: "prob-3-19",
          number: "3.19",
          title: "تتبع الأنشطة الرياضية ولوحات الشرف — Strava",
          category: "GPS Simplification & Leaderboard",
          calculations: "• 50M مستخدم يرفعون مسارات GPS بدقة ثانية واحدة، لوحات صدارة لملايين المقاطع.",
          l1: "رفع ملفات GPX/FIT وحفظ نقاط الإحداثيات وحساب المسافة ومتوسط السرعة.",
          l2: "تبسيط مسار الـ GPS باستخدام خوارزمية Ramer-Douglas-Peucker لتقليل النقاط بنسبة 90%، وتصفية المقاطع المرشحة جغرافياً ومطابقتها بخوارزمية Frechet Distance.",
          l3: "توليد لوحات الصدارة والترتيب اللحظي (Leaderboards) عبر Redis Sorted Sets (ZADD segment_id time athlete_id) وتحديث لقب الملك (KOM) بزمن O(log N)."
        },
        {
          id: "prob-3-20",
          number: "3.20",
          title: "نظام التخزين المؤقت الموزع — Distributed Cache (Redis/Memcached Clone)",
          category: "In-Memory Systems & Gossip",
          diagramId: "consistentHashing",
          calculations: "• بناء مجمع كاش موزع يتحمل 10 ملايين QPS بزمن استجابة أقل من 1ms.",
          l1: "جدول تجزئة في الذاكرة (Hash Table) مدعوم بقائمة مزدوجة الربط لتطبيق سياسة الإخلاء LRU بـ O(1).",
          l2: "توزيع البيانات عبر العقد باستخدام Consistent Hashing with Virtual Nodes مع عميل ذكي (Smart Client) يوجه الطلب مباشرة للخادم المستهدف دون وسيط إضافي.",
          l3: "بنية Master-Replica مع مزامنة غير متزامنة، واستخدام بروتوكول Gossip لتبادل الحالة واكتشاف العقد المعطلة وتفعيل التبديل التلقائي (Failover)."
        },
        {
          id: "prob-3-21",
          number: "3.21",
          title: "المزادات العلنية والتنافس في الثواني الأخيرة — Online Auction (eBay)",
          category: "Concurrency & Soft Closing",
          calculations: "• ملايين المزادات، آلاف المزايدات في الثانية الأخيرة (Auction Sniping).",
          l1: "إنشاء المزاد وتقديم عروض أعلى من السعر الحالي وتحديد الفائز عند انتهاء الوقت.",
          l2: "تنفيذ المزايدة ذرياً في الذاكرة عبر نصوص Redis Lua أو القفل المتشائم (SELECT FOR UPDATE) لضمان صحة الترتيب، وبث الأسعار لجميع المتصلين عبر WebSockets.",
          l3: "طوابير تأخير دقيقة (Delayed Queues) لإنهاء المزاد في المللي ثانية المحددة، تمديد الوقت تلقائياً (Soft Close) عند المزايدة في آخر 30 ثانية، وبدء تحصيل الدفع عبر Saga Pattern."
        },
        {
          id: "prob-3-22",
          number: "3.22",
          title: "مجدول المهام الموزع — Distributed Job Scheduler",
          category: "Temporal Execution & Workers",
          calculations: "• جدولة وتنفيذ 100 مليون مهمة يومياً بدقة ثانية وضمان التنفيذ مرة واحدة على الأقل.",
          l1: "جدول مهام في قاعدة بيانات ومؤقت دوري (Cron) يفحص المهام المستحقة وينفذها.",
          l2: "تخزين المهام في Redis Sorted Set حيث الـ Score هو الطابع الزمني timestamp. خدمة التوزيع تسحب المهام المستحقة ZRANGEBYSCORE وتدفعها لطوابير RabbitMQ/Kafka.",
          l3: "تقسيم طوابير الجدولة (Bucket Partitioning) لمنع اختناق المفاتيح، واستخدام محركات سير العمل (Temporal) لإدارة المهام المعقدة، والتعامل مع حالات سقوط العمال عبر نبضات القلب وإعادة المحاولة بتراجع أسي."
        },
        {
          id: "prob-3-23",
          number: "3.23",
          title: "مجمّع الأخبار الذكي — News Aggregator (Google News)",
          category: "NLP Embeddings & Deduplication",
          calculations: "• سحب 100,000 موقع إخباري دورياً وتجميع آلاف المقالات حول نفس الحدث.",
          l1: "سحب دوري لروابط RSS والمواقع وتخزين النصوص وتصنيفها يدوياً حسب القسم.",
          l2: "توليد تضمينات دلالية (Embeddings via NLP) وتجميع المقالات المتشابهة في عنقود واحد (Story Cluster) بخوارزميات TF-IDF أو HDBSCAN لمنع تكرار نفس الخبر.",
          l3: "حساب درجات الجدارة الإخبارية (Freshness & Authority) وتوليد خلاصات مخصصة لكل مستخدم في Redis، وتوزيع الأخبار العاجلة عبر CDN Edge مع التحديث بـ SSE."
        },
        {
          id: "prob-3-24",
          number: "3.24",
          title: "تتبع وتقلبات الأسعار — Price Tracking (CamelCamelCamel)",
          category: "Adaptive Scraping & TSDB",
          calculations: "• تتبع أسعار 50 مليون منتج عبر المتاجر، وإطلاق ملايين التنبيهات اللحظية.",
          l1: "سحب صفحة المنتج دورياً ومقارنة السعر بالحد المطلوب وإرسال بريد إلكتروني.",
          l2: "جدولة سحب تكيفية (Adaptive Scraping): فحص المنتجات المتقلبة كل 15 دقيقة والمنتجات المستقرة يومياً. تخزين الأسعار في قاعدة بيانات سلاسل زمنية (TimescaleDB / InfluxDB).",
          l3: "إدارة شبكة وكلاء (Proxy Rotation) لتجاوز حظر البوتات، ومطابقة انخفاض الأسعار عبر محرك قواعد لحظي في Flink لإطلاق مئات آلاف الإشعارات عبر Kafka."
        },
        {
          id: "prob-3-25",
          number: "3.25",
          title: "منصة الإشعارات الشاملة — Notification System",
          category: "Multi-channel Fanout & Deduplication",
          calculations: "• إرسال 100M إشعار يومياً عبر قنوات متعددة (Push, SMS, Email) مع احترام ساعات النوم.",
          l1: "إرسال الطلب مباشرة إلى بوابات الطرف الثالث (APNs, FCM, Twilio, SendGrid).",
          l2: "فصل الطوابير حسب الأولوية (High Priority لرموز OTP، و Low Priority للتسويق)، وتطبيق خدمة تفضيلات المستخدم لفحص أوقات عدم الإزعاج (Quiet Hours).",
          l3: "منع تكرار الإشعارات في Redis (Deduplication)، وتجميع الإشعارات المتقاربة (Digest/Batching) في إشعار مجمع واحد لتفادي إزعاج المستخدم."
        },
        {
          id: "prob-3-26",
          number: "3.26",
          title: "تداول الأسهم والعملات اللحظي — Robinhood",
          category: "Matching Engine & Financial Ledger",
          calculations: "• مطابقة 100,000 أمر تداول في الثانية، بزمن استجابة أقل من 500 ميكروثانية، واتساق مالي صارم.",
          l1: "استقبال أمر التداول، التحقق من الرصيد، وتوجيه الأمر للسوق وتحديث المحفظة.",
          l2: "محرك مطابقة أوامر في الذاكرة (In-Memory Matching Engine) بترتيب السعر والوقت (FIFO). تطبيق دفتر الأستاذ المزدوج (Double-Entry Ledger) لضمان توازن الحسابات مديناً ودائناً.",
          l3: "بث أسعار السوق (Market Ticks) عبر WebSockets مدعومة بـ UDP Multicast داخل مراكز البيانات، وحفظ الأوامر في سجل ثابت غير قابل للتعديل (Append-Only Event Store via Raft)."
        },
        {
          id: "prob-3-27",
          number: "3.27",
          title: "المحررات التشاركية الحية — Google Docs / Notion",
          category: "Real-time Collaboration (OT/CRDT)",
          calculations: "• 100 مستخدم يعدلون نفس المستند في نفس اللحظة بزمن مزامنة أقل من 50ms.",
          l1: "اتصال WebSocket وإرسال عمليات الكتابة Insert(pos, char) وتوزيعها على المشاركين.",
          l2: "خوارزمية التحويل التشغيلي (Operational Transformation - OT) لتعديل إحداثيات العمليات المتزامنة وضمان اتساق النص على كافة الأجهزة، أو استخدام CRDTs للأنظمة اللامركزية.",
          l3: "دعم التحرير دون اتصال (Offline Editing) بإنشاء طابور محلي للعمليات ومزامنتها بالترتيب عند استعادة الاتصال، وتخزين لقطات دورية (Snapshots) مع شجرة العمليات للتراجع الزمني (Undo/Redo)."
        },
        {
          id: "prob-3-28",
          number: "3.28",
          title: "بوابات ومعالجة المدفوعات — Payment Gateway (Stripe)",
          category: "Financial Idempotency & Reconciliation",
          calculations: "• ملايين المعاملات المالية الدولية يومياً مع منع الخصم المزدوج ومطابقة الحسابات 100%.",
          l1: "استدعاء بوابة الدفع البنكية وتخزين النتيجة في قاعدة البيانات وإرجاع الإيصال.",
          l2: "طبقة Idempotency صارمة في Redis لمنع تكرار المعاملات. تطبيق معمارية Saga لتنفيذ خطوات الدفع مع معاملات تعويضية لاسترداد الأموال عند الفشل.",
          l3: "محرك التسوية اليومية (Daily Reconciliation) لمطابقة سجلات النظام الداخلية مع كشوف الحسابات المصرفية الفعلية لاكتشاف وتصحيح الفروقات، والالتزام بمعايير PCI-DSS."
        },
        {
          id: "prob-3-29",
          number: "3.29",
          title: "مراقبة المقاييس والتنبيهات الموزعة — Datadog / Prometheus",
          category: "TSDB & Gorilla Compression",
          calculations: "• جمع 100 مليار مقياس أداء يومياً من آلاف الخوادم ورسم لوحات المراقبة فورياً.",
          l1: "وكيل (Agent) يجمع استهلاك الذاكرة والمعالج ويرسله لخادم مركزي ورسمه بـ Grafana.",
          l2: "خط استقبال عبر Kafka ← التخزين في قاعدة بيانات سلاسل زمنية (Prometheus TSDB) تعتمد على خوارزمية ضغط Gorilla Float Compression لتقليل الحجم بنسبة 90%.",
          l3: "سياسات تقليل العينات التلقائي (Downsampling): بيانات ثوانٍ لـ 7 أيام، ودقائق لـ 30 يوماً، وساعات لـ سنة. محرك تنبيهات موزع يقيّم قواعد PromQL مع كبح التنبيهات المكررة."
        },
        {
          id: "prob-3-30",
          number: "3.30",
          title: "منصات الشطرنج المباشرة — Chess.com / Lichess",
          category: "Game Loop & Anti-cheat",
          calculations: "• 1M مباراة متزامنة، نقل آلاف الحركات في الثانية بزمن استجابة أقل من 50ms.",
          l1: "نقل الحركات بصيغة الجبر (Algebraic Notation) عبر WebSocket والتحقق من صحتها على الخادم.",
          l2: "تخزين حالة الرقعة بتنسيق FEN في Redis. إدارة توقيت المباراة من جانب الخادم لمنع التلاعب، وحساب تقييم ELO وتحديثه ذرياً عند نهاية المباراة.",
          l3: "محرك توفيق سريع يجمع اللاعبين في مجمعات تقييم متقاربة (±50) باستخدام Redis Sorted Sets. تحليل الحركات بعد المباراة ومقارنتها بمحرك Stockfish لاكتشاف الغش وحظر المخالفين."
        },
        {
          id: "prob-3-31",
          number: "3.31",
          title: "تقديم نماذج الذكاء الاصطناعي — ChatGPT / LLM Serving",
          category: "PagedAttention & Semantic Caching",
          calculations: "• استقبال 100,000 استفسار ذكاء اصطناعي متزامن وبث الرموز (Tokens) بزمن استجابة أقل من 50ms لكل Token.",
          l1: "استقبال الـ Prompt عبر HTTP وبث الرموز (Tokens) المولدة رمزاً برمز عبر Server-Sent Events (SSE).",
          l2: "التجميع التكراري المستمر (Continuous / Iteration-level Batching) لإدراج الطلبات الجديدة في كل خطوة توليد. استخدام تقنية PagedAttention (vLLM) لتجزئة ذاكرة KV Cache ومنع إهدار VRAM.",
          l3: "التخزين المؤقت الدلالي (Semantic Caching via Vector Search): إعادة الإجابات المخزنة للاستفسارات المتطابقة دلالياً لتوفير كلفة GPU. توجيه الطلبات عبر Model Router لنماذج صغيرة أو كبيرة حسب التعقيد."
        }
      ],
      capstone: {
        title: "تطبيق عملي كبير: معمارية نظام تواصل وتنسيق حوادث الطوارئ (Uber + WhatsApp + Maps)",
        scenario: "تصميم منصة وطنية لإدارة حوادث الطوارئ (الإسعاف والإطفاء) تجمع بين تتبع المواقع اللحظية، محادثات الفيديو والصوت المباشرة، وتعيين أقرب فرقة إغاثة في غضون 3 ثوانٍ.",
        hiddenSolution: {
          summary: "المعمارية الشاملة المقترحة للمنظومة الوطنية للطوارئ:",
          steps: [
            {
              title: "1. شبكة الاتصال اللحظية (WebSocket + WebRTC)",
              content: "طبقة خوادم Gateway موزعة جغرافياً تستقبل بلاغات المواطنين وتبث الصوت والفيديو مباشرة للمستشفيات عبر WebRTC P2P Mesh."
            },
            {
              title: "2. محرك التتبع والمطابقة الجغرافية (Uber H3 Indexing)",
              content: "تحديث إحداثيات سيارات الإسعاف كل ثانيتين في Redis Cluster مع خلايا سداسية H3 Resolution 8، واستخدام خوارزمية Dijkstra/A* الحسابية لاختيار أسرع مسار بناءً على الزحام اللحظي."
            },
            {
              title: "3. الاتساق الصارم وتفادي التنافس (Atomic Dispatch)",
              content: "استخدام قفل Redis Lua Mutex لحجز سيارة الإسعاف للمهمة ومنع إرسال نفس الطاقم لبلاغين، مع Transactional Outbox لدفع الحدث إلى Kafka Topic `emergency-events`."
            },
            {
              title: "4. التعافي من الكوارث (Active-Active Multi-Region)",
              content: "نشر كامل للنظام في 3 مراكز بيانات مستقلة عبر البلاد مع خطوط فايبر مخصصة، وإمكانية العمل في وضع محلي معزول (Offline-first Mode) في سيارة الإسعاف ومزامنة البيانات لاحقاً."
            }
          ]
        }
      }
    },

    {
      id: "module-4",
      number: "4",
      title: "Patterns — الأنماط المعمارية للأنظمة الموزعة",
      subtitle: "التحديثات اللحظية، إدارة التنافس، المعاملات متعددة الخطوات، وتوسيع القراءة والكتابة",
      diagramId: "sagaPattern",
      sections: [
        {
          id: "sec-4-1",
          number: "4.1",
          title: "التحديثات اللحظية — Real-time Updates (WebSockets vs SSE vs Polling)",
          description: "مقارنة بروتوكولات الاتصال المستمر وتصميم طبقات Gateway لإدارة ملايين الاتصالات المتزامنة.",
          levels: {
            l1: { badge: "المستوى 1", text: "Long Polling (استنزاف اتصالات HTTP)، Server-Sent Events (SSE - أحادي الاتجاه ممتاز للتحديثات والأخبار)، و WebSockets (ثنائي الاتجاه كامل Full-duplex للمحادثات والألعاب)." },
            l2: { badge: "المستوى 2", text: "معمارية WebSocket Gateway Tier لإدارة مئات آلاف اتصالات TCP المفتوحة في طبقة مستقلة، متصلة بـ Redis Pub/Sub أو Kafka كـ Message Bus مركزي لتوجيه الرسائل للخادم الصحيح." },
            l3: { badge: "المستوى 3", text: "التعامل مع Half-open connections بنبضات قلب دورية (Heartbeats كل 30 ثانية). تطبيق Exponential Backoff with Full Jitter عند انقطاع الاتصال الجماعي لمنع ظاهرة Thundering Herd." }
          }
        },
        {
          id: "sec-4-2",
          number: "4.2",
          title: "التعامل مع التنافس على الموارد — Dealing with Contention",
          description: "استراتيجيات معالجة التنافس الشديد على المقاعد، التذاكر، والمخزون في أوقات الذروة.",
          levels: {
            l1: { badge: "المستوى 1", text: "القفل المتشائم (SELECT FOR UPDATE) يضمن الأمان لكنه يبطئ النظام؛ القفل التفاؤلي (WHERE version = 1) ممتاز للتنافس المنخفض." },
            l2: { badge: "المستوى 2", text: "الأقفال الموزعة في Redis (Redlock) بمهلة إيجار (Lease TTL)، أو تنفيذ التعديلات ذرياً في الذاكرة عبر Redis Lua Scripts دون الحاجة لأقفال شبكية ثقيلة." },
            l3: { badge: "المستوى 3", text: "في حالات التنافس الشديدة (Flash Sales)، يتم التخلي عن الأقفال واستخدام نمط Queue Decoupling بتوجيه الطلبات لطابور أحادي المسار (Single-threaded Worker أو Actor Model) لمعالجتها تسلسلياً بـ O(1) في الذاكرة." }
          }
        },
        {
          id: "sec-4-3",
          number: "4.3",
          title: "العمليات متعددة الخطوات — Multi-step Processes (Saga Pattern)",
          description: "إدارة المعاملات الموزعة عبر الخدمات المصغرة دون الحاجة لبروتوكول 2PC الثقيل.",
          diagramId: "sagaPattern",
          levels: {
            l1: { badge: "المستوى 1", text: "فشل بروتوكول Two-Phase Commit (2PC) في الخدمات المصغرة لتسببه في شلل النظام وبطء الشبكة." },
            l2: { badge: "المستوى 2", text: "نمط Saga: Choreography (الخدمات تتواصل عبر أحداث Kafka، للعمليات البسيطة 2-4 خطوات)، و Orchestration (منسق مركزي يدير شجرة الحالات والأوامر، أفضل للعمليات المعقدة)." },
            l3: { badge: "المستوى 3", text: "تطبيق المعاملات التعويضية (Compensating Transactions) بالتراجع العكسي عند الفشل. استخدام نمط Transactional Outbox Pattern مع CDC لضمان حفظ الحدث محلياً في SQL ونشره لـ Kafka دون ضياع." }
          }
        },
        {
          id: "sec-4-4",
          number: "4.4",
          title: "توسيع عمليات القراءة والكتابة — Scaling Reads & Writes (CQRS & Write-Behind)",
          description: "فصل نماذج القراءة عن الكتابة، واستخدام قواعد بيانات LSM-Tree لامتصاص طوفان الكتابة.",
          levels: {
            l1: { badge: "المستوى 1", text: "توجيه الكتابة لـ Master DB وتوزيع القراءة عبر عدة نسخ متماثلة (Read Replicas). تجميع سجلات الكتابة في دفعات (Batching) لتقليل استدعاء الشبكة." },
            l2: { badge: "المستوى 2", text: "تطبيق نمط CQRS لفصل نموذج القراءة غير المطبع (Denormalized Views في Elasticsearch) عن نموذج الكتابة المتسق، والتقسيم الأفقي (Sharding) مع قواعد LSM-Trees." },
            l3: { badge: "المستوى 3", text: "امتصاص طوفان الكتابة بالكتابة غير المتزامنة (Write-Behind): استقبال الطلبات في Kafka وإرجاع 202 Accepted فوراً، وتفريغ البيانات تدريجياً، مع معالجة تأخر النسخ بنمط Read-Your-Own-Writes." }
          }
        }
      ],
      capstone: {
        title: "تطبيق عملي كبير: معمارية نظام تجارة إلكترونية عالمي يطبق كافة الأنماط المعمارية معاً",
        scenario: "بناء معمارية لمنصة مثل Amazon تجمع بين CQRS للقراءة السريعة للمنتجات، Saga لمعاملات الدفع والشحن، Transactional Outbox لمنع فقد الأحداث، و Write-Behind لمعالجة مراجعات المنتجات.",
        hiddenSolution: {
          summary: "المصفوفة المعمارية المتكاملة للأنماط:",
          steps: [
            {
              title: "1. تصفح المنتجات (CQRS + Multi-tier Cache)",
              content: "استعلامات التصفح والبحث موجهة بالكامل إلى مجمع Elasticsearch و Redis L2 Cache، مع تحديث هذه الفهارس عبر أحداث Kafka غير المتزامنة من قاعدة بيانات المنتجات الرئيسية."
            },
            {
              title: "2. خطوة الدفع والطلب (Saga Orchestration + Outbox)",
              content: "منسق Saga (مبني على Temporal) يدير خطوات: قفل رصيد المحفظة ← خصم المخزون ← طلب الشحن. كل خدمة تطبق Transactional Outbox داخل PostgreSQL لتسجيل الأحداث محلياً."
            },
            {
              title: "3. تقييمات ومراجعات المنتجات (Write-Behind + Kafka)",
              content: "يستقبل API التقييمات آلاف المراجعات ويكتبها مباشرة في Kafka مع إرجاع 202 Accepted، ويقوم عمال خلفيون بفحص النصوص ضد البريد المزعج وحفظها على دفعات في Cassandra."
            }
          ]
        }
      }
    },

    {
      id: "module-5",
      number: "5",
      title: "Key Technologies — التقنيات المعمارية الأساسية",
      subtitle: "تحليل معمق لمحركات التخزين والتدفق: Redis, Kafka, Cassandra, DynamoDB, Postgres, Elasticsearch",
      diagramId: "kafkaArchitecture",
      sections: [
        {
          id: "sec-5-1",
          number: "5.1",
          title: "Redis — المحرك فائق السرعة في الذاكرة",
          description: "بنية الذاكرة، هياكل البيانات المتقدمة، واستراتيجيات الحفظ الدائم والتوزيع العنقودي.",
          levels: {
            l1: { badge: "المستوى 1", text: "خزانة بيانات في الذاكرة بزمن استجابة ميكروثانية تدعم Strings, Hashes, Lists, Sets, Sorted Sets, Bitmaps, HyperLogLogs." },
            l2: { badge: "المستوى 2", text: "محرك أحادي المسار يعتمد على I/O Multiplexing (Epoll) يلغي قفل التنافس. استراتيجيات الحفظ الدائم: RDB (Snapshots سريعة) و AOF (تسجيل كل أمر كتابة)." },
            l3: { badge: "المستوى 3", text: "توزيع البيانات عبر 16,384 Hash Slot في Redis Cluster مع استخدام Hash Tags {user_123}:profile لضمان وقوع المفاتيح المترابطة في نفس الخادم الفيزيائي للمعاملات الذرية." }
          }
        },
        {
          id: "sec-5-3",
          number: "5.3",
          title: "Apache Kafka — العمود الفقري لتدفق الأحداث",
          description: "سجل الالتزام التسلسلي، الأقسام، مجموعات المستهلكين، وضمانات المعالجة لمرة واحدة بالضبط.",
          diagramId: "kafkaArchitecture",
          levels: {
            l1: { badge: "المستوى 1", text: "سجل التزام تسلسلي ثابت (Append-only Log). المواضيع (Topics) تنقسم إلى أقسام (Partitions) يكتب فيها المنتجون ويقرأ منها المستهلكون بناءً على الإزاحة (Offset)." },
            l2: { badge: "المستوى 2", text: "سرعة فائقة بفضل الكتابة التسلسلية، واستخدام Page Cache، وتقنية Zero-Copy (sendfile) لنقل البيانات من القرص للشبكة مباشرة. قراءة متوازية عبر مجموعات المستهلكين (Consumer Groups)." },
            l3: { badge: "المستوى 3", text: "ضبط acks=all مع min.insync.replicas=2 لمنع فقد البيانات. تطبيق معالجة لمرة واحدة بالضبط (Exactly-Once Semantics via Transactional API)، والاعتماد على عمارة KRaft (Kafka Raft) للاستغناء عن ZooKeeper." }
          }
        },
        {
          id: "sec-5-5",
          number: "5.5",
          title: "Apache Cassandra & ScyllaDB — قواعد بيانات الأعمدة العريضة",
          description: "معمارية Masterless اللامركزية، بروتوكول Gossip، والاتساق القابل للضبط.",
          levels: {
            l1: { badge: "المستوى 1", text: "قاعدة بيانات NoSQL بأعمدة عريضة لا مركزية (Masterless / Peer-to-Peer) بلا نقطة فشل مفردة، وتتواصل العقد عبر بروتوكول Gossip." },
            l2: { badge: "المستوى 2", text: "كتابة سريعة في CommitLog على القرص و Memtable في الذاكرة ثم تصديرها كملفات SSTables غير قابلة للتعديل، مع استخدام Bloom Filters لتخطي فحص الملفات غير المعنية." },
            l3: { badge: "المستوى 3", text: "اتساق قابل للضبط (Tunable Consistency: ONE, QUORUM, ALL). معالجة شواهد القبور (Tombstones) الناتجة عن الحذف، وإصلاح العقد غير المتزامن عبر Merkle Trees." }
          }
        },
        {
          id: "sec-5-6",
          number: "5.6",
          title: "Amazon DynamoDB & Single-Table Design",
          description: "قاعدة البيانات السحابية المدارة ذات الأداء الثابت وتصميم الجدول الموحد.",
          levels: {
            l1: { badge: "المستوى 1", text: "قاعدة بيانات NoSQL مدارة تضمن زمناً بالمللي ثانية بأي حجم، مع مفتاح أساسي بسيط (PK) أو مركب (PK + SK)." },
            l2: { badge: "المستوى 2", text: "تصميم الجدول الموحد (Single-Table Design) لوضع كافة الكيانات في جدول واحد بفهارس ثانوية (GSI) لتنفيذ جميع استعلامات النظام بطلب واحد دون JOINs." },
            l3: { badge: "المستوى 3", text: "تفعيل DynamoDB Streams لالتقاط التغييرات ومعالجتها بـ AWS Lambda. استخدام Global Tables للنسخ المتعدد ثنائي الاتجاه عبر قارات متعددة (Active-Active)." }
          }
        }
      ],
      capstone: {
        title: "تطبيق عملي كبير: بناء مصفوفة اتخاذ القرار التكنولوجي (Technology Selection Matrix) لشركة ناشئة سريعة النمو",
        scenario: "شركة ناشئة تقدم خدمات مالية + مراسلات فورية + محرك بحث للمنتجات، وتحتاج لتحديد مكدس التقنيات الدقيق وقواعد البيانات الأنسب لكل مجال وظيفي.",
        hiddenSolution: {
          summary: "المكدس التكنولوجي المعتمد وفق مبدأ Polyglot Persistence:",
          steps: [
            {
              title: "1. البيانات المالية والحسابات البنكية (PostgreSQL)",
              content: "السبب: دعم معاملات ACID الصارمة، منع تضارب الأرصدة، وسهولة إنشاء قيود Foreign Keys مع دعم التوسع الرأسي ثم استخدام PgBouncer و Citus للتقسيم."
            },
            {
              title: "2. سجل رسائل الدردشة اللحظية (ScyllaDB / Cassandra)",
              content: "السبب: كتابة فائقة السرعة بفضل محرك LSM-Tree، وعدم وجود نقطة فشل مفردة (Masterless)، وتقسيم الرسائل بسهولة بمفتاح `(channel_id, bucket_month)`."
            },
            {
              title: "3. الجلسات وتحديد المعدل والكاش (Redis Cluster)",
              content: "السبب: زمن استجابة دون المللي ثانية في الذاكرة، ودعم هياكل بيانات غنية مثل Bitmaps لحالة التواجد ونصوص Lua لتنفيذ العمليات الذرية."
            },
            {
              title: "4. البحث النصي في المنتجات (Elasticsearch)",
              content: "السبب: الفهرس المعكوس (Inverted Index) وتقطيع النصوص والتصحيح الإملائي، مع تحديث الفهرس من PostgreSQL عبر Debezium CDC و Kafka."
            }
          ]
        }
      }
    },

    {
      id: "module-6",
      number: "6",
      title: "Advanced Topics — المواضيع المعمارية المتقدمة",
      subtitle: "البحث الجغرافي، قواعد بيانات السلاسل الزمنية، الهياكل الاحتمالية، وقواعد بيانات المتجهات للذكاء الاصطناعي",
      diagramId: "consistentHashing",
      sections: [
        {
          id: "sec-6-1",
          number: "6.1",
          title: "البحث حسب القرب والموقع — Proximity Search (QuadTree vs H3 vs S2)",
          description: "فهرسة الإحداثيات ثنائية الأبعاد والشبكات السداسية لمنصات النقل والتوصيل.",
          levels: {
            l1: { badge: "المستوى 1", text: "التحدي: فهرسة بعدين متزامنين (خط الطول ودائرة العرض) دون إجراء مسح كامل لقاعدة البيانات." },
            l2: { badge: "المستوى 2", text: "Geohash (تحويل الإحداثيات لنصوص تشترك المواقع القريبة في بدايتها Prefix) وشجرة QuadTree (تقسيم هرمي يرفع الدقة في المدن المزدحمة ويخفضها في الأرياف)." },
            l3: { badge: "المستوى 3", text: "الشبكات السداسية Uber H3 (المسافة من المركز لكافة الجيران متطابقة تماماً لتبسيط خوارزميات الحركة)، والإسقاط الكروي Google S2 باستخدام منحنيات ملء الفضاء (Hilbert Curve)." }
          }
        },
        {
          id: "sec-6-3",
          number: "6.3",
          title: "هياكل البيانات الاحتمالية للبيانات الضخمة — Probabilistic Data Structures",
          description: "Bloom Filters, HyperLogLog, Count-Min Sketch وكيفية توفير 99% من الذاكرة في مليارات السجلات.",
          table: {
            headers: ["الهيكل", "الوظيفة الأساسية", "التعقيد / المساحة", "المفاضلة والدقة"],
            rows: [
              ["Bloom Filter", "فحص وجود عنصر في المجموعة (Set Membership)", "O(k) / بتات قليلة لكل عنصر", "لا يعطي False Negatives أبداً، ويحتمل نسبة False Positives ضئيلة."],
              ["Cuckoo Filter", "فحص الوجود مع دعم إمكانية حذف العناصر", "O(1) / مساحة مدمجة جداً", "يدعم الحذف الديناميكي بدقة أعلى من Bloom Filter."],
              ["HyperLogLog (HLL)", "حساب عدد العناصر الفريدة (Cardinality Estimation)", "O(1) / 1.5KB لملايين العناصر", "نسبة خطأ قياسية ضئيلة (≈ 1.04/√m) دون تخزين العناصر."],
              ["Count-Min Sketch", "تقدير تكرار العناصر في التدفق (Frequency Count)", "O(d) / مصفوفة ذات حجم ثابت", "يضمن عدم إنقاص التقدير أبداً، وقد يزيده قليلاً لتضارب الهاش."]
            ]
          },
          levels: {
            l1: { badge: "المستوى 1", text: "استبدال الدقة المطلقة 100% بدقة 99% لتوفير الذاكرة بآلاف المرات عند التعامل مع مليارات السجلات." },
            l2: { badge: "المستوى 2", text: "خوارزمية HyperLogLog تعتمد على حساب أقصى عدد من الأصفار المتتالية (Leading Zeros) في ناتج الهاش لتقدير الحجم كـ 2^K." },
            l3: { badge: "المستوى 3", text: "استخدام Bloom Filters في محركات قواعد البيانات لتخطي قراءة ملفات القرص، واستخدام HyperLogLog في Reddit و Twitter لحساب المشاهدات الفريدة فورياً." }
          }
        },
        {
          id: "sec-6-4",
          number: "6.4",
          title: "قواعد بيانات المتجهات — Vector Databases (AI & RAG Architecture)",
          description: "فهرسة التضمينات الرقمية (Embeddings)، خوارزميات HNSW و IVF، والبحث الهجين.",
          levels: {
            l1: { badge: "المستوى 1", text: "تحويل النصوص والصور لمتجهات رقمية (Embeddings). البحث يعتمد على التقارب الدلالي بحساب Cosine Similarity أو Euclidean Distance." },
            l2: { badge: "المستوى 2", text: "خوارزمية HNSW (شجرة طبقات بيانية تتيح القفز بين العناقيد ثم البحث الدقيق بـ O(log N)) وخوارزمية IVF (تقسيم الفضاء لخلايا Voronoi)." },
            l3: { badge: "المستوى 3", text: "تطبيق التكميم Product Quantization (PQ) لضغط المتجهات وتوفير 75-90% من الذاكرة، وفصل الفهارس بين الذاكرة والقرص (DiskANN)، وتطبيق البحث الهجين (Dense Vectors + Sparse BM25 Keywords)." }
          }
        }
      ],
      capstone: {
        title: "تطبيق عملي كبير: بناء خط معالجة وتحليل إشارات إنترنت الأشياء (IoT Sensor Pipeline) لمليون جهاز",
        scenario: "تصميم منصة تستقبل قراءات درجات الحرارة والضغط من 1,000,000 حساس كل 5 ثوانٍ مع كشف الحالات الشاذة وحساب المتوسطات الساعية والمشاهدات الفريدة.",
        hiddenSolution: {
          summary: "المعمارية المتقدمة لخط معالجة بيانات الـ IoT:",
          steps: [
            {
              title: "1. الاستقبال وضغط البيانات (Gorilla Compression & TSDB)",
              content: "توجيه القراءات إلى Kafka ثم تفريغها في TSDB (Prometheus/VictoriaMetrics) تعتمد على خوارزمية ضغط غوريلا Delta-of-Delta لتقليل حجم القراءة من 16 بايت إلى 1.37 بايت."
            },
            {
              title: "2. حساب الحساسات النشطة فريداً (HyperLogLog)",
              content: "استخدام Redis HyperLogLog لحساب عدد الحساسات الفريدة التي أرسلت إشارات اليوم باستهلاك 1.5KB فقط من الذاكرة وبدقة 99%."
            },
            {
              title: "3. كشف القراءات المتكررة مسبقاً (Bloom Filter)",
              content: "فحص معرفات القراءات عبر Bloom Filter في الذاكرة لتخطي معالجة الرسائل المكررة الناتجة عن إعادة الإرسال في الشبكات اللاسلكية."
            }
          ]
        }
      }
    },

    {
      id: "module-7",
      number: "7",
      title: "In the Wild — دراسات حالة تطبيقية من كبرى الشركات التقنية",
      subtitle: "دروس معمارية وتحديات إنتاجية حقيقية من Shopify, Discord, Slack, Figma, Spotify",
      diagramId: "architectureEvolution",
      caseStudies: [
        {
          id: "case-7-1",
          company: "Shopify",
          title: "حجوزات المخزون في الجمعة البيضاء (Inventory Reservations at Scale)",
          problem: "مئات الآلاف من المتسوقين يشترون نفس المنتج ذي المخزون المحدود (Flash Sale) في نفس الثانية مسببين انهيار MySQL بالقفل المتشائم (Row Locking).",
          solution: "نقل عدادات المخزون الساخنة إلى Redis Cluster واستخدام Lua Scripts لخصم المخزون ذرياً في خطوة واحدة (DECRBY بشرط ألا يقل عن صفر) وإعطاء المستخدم رمز حجز مؤقت لمدة 10 دقائق.",
          productionInsight: "تفريغ الحجوزات غير متزامنة في MySQL عبر Kafka، وإعادة المخزون تلقائياً إلى Redis في حال انقضاء مهلة الدفع دون إتمام الشراء."
        },
        {
          id: "case-7-2",
          company: "Discord",
          title: "تخزين تريليونات الرسائل والهجرة من Cassandra إلى ScyllaDB",
          problem: "توقفات Java Garbage Collection الطويلة (GC Pauses)، تراكم شواهد القبور (Tombstones)، واختناق أقراص NVMe بعمليات الدمج (Compaction) في Cassandra مع وصول الرسائل لتريليونات.",
          solution: "الهجرة الكاملة إلى ScyllaDB (المكتوبة بلغة C++ بنموذج Seastar Thread-per-core الخالي تماماً من الأقفال)، وإعادة تصميم مفتاح التقسيم إلى ((channel_id, bucket), message_id) لمنع تضخم الأقسام عن 100MB.",
          productionInsight: "انخفض زمن الاستجابة P99 من ثوانٍ طويلة إلى أقل من 5ms ثابتة، مع تقليل عدد الخوادم إلى الثلث."
        },
        {
          id: "case-7-3",
          company: "Slack",
          title: "طوابير المهام المليونية ومنع اختناق الشركات (Fair-Queuing Engine)",
          problem: "إطلاق مؤسسة ضخمة واحدة لمليون مهمة دفعة واحدة يعطل مهام باقي الشركات الصغيرة في الطوابير المشتركة (Head-of-Line Blocking).",
          solution: "بناء محرك Fair-Queuing يقسم المهام إلى طوابير افتراضية لكل فريق، وسحب المهام بنظام Weighted Fair Queuing لضمان حصة عادلة لكل شركة دون تأخير الآخرين.",
          productionInsight: "تطبيق حدود استهلاك ديناميكية (Dynamic Rate Limiting) ونقل المهام الزائدة لطوابير منخفضة الأولوية مدعومة بـ Kafka للتخزين المتين."
        },
        {
          id: "case-7-4",
          company: "Figma",
          title: "التعاون اللحظي متعدد المستخدمين (Multiplayer Sync Engine)",
          problem: "تعديل عشرات المصممين لنفس ملف التصميم في نفس اللحظة ورؤية مؤشرات وتعديلات الجميع فورياً بزمن وصول أقل من 50ms دون تعقيد الذاكرة.",
          solution: "التخلي عن تعقيدات OT وذاكرة CRDT لصالح خادم تنسيق مركزي أحادي المسار لكل مستند مكتوب بلغة Rust يحدد الترتيب الزمني الصارم لكافة العمليات.",
          productionInsight: "تطبيق التعديل محلياً وفورياً في المتصفح عبر محرك C++/WebAssembly وإرسال العملية للخادم عبر WebSockets ليقوم خادم Rust بدمجها وبثها للجميع وتصحيح أي تضارب طفيف في الذاكرة."
        },
        {
          id: "case-7-5",
          company: "Spotify",
          title: "بحيرة البيانات والتوصيات الموسيقية لـ 500 مليون مستخدم (Discover Weekly)",
          problem: "معالجة مئات الملايين من أحداث الاستماع اليومية لحساب عوائد الفنانين وتوليد قوائم التوصيات المخصصة (Discover Weekly).",
          solution: "توجيه الأحداث لـ Google Cloud Pub/Sub ← المعالجة اللحظية بـ Apache Beam (Dataflow) ← تفريغ البيانات الخام في بحيرة بيانات (GCS) بصيغة أعمدة مضغوطة Apache Parquet.",
          productionInsight: "تشغيل نماذج الترشيح التعاوني (Collaborative Filtering) وتوليد تضمينات موسيقية عبر BigQuery و Spark، وحساب التوافق الدلالي في مجمعات Vector Search لإنتاج قوائم مخصصة لـ 500+ مليون مستخدم كل صباح اثنين."
        }
      ],
      capstone: {
        title: "تطبيق عملي كبير: الدروس المستفادة والأنماط المشتركة بين عمالقة التقنية (FAANG Synthesis)",
        scenario: "تحليل معماري مقارن لأهم الأنماط المشتركة التي لجأت إليها Shopify, Discord, Slack, Figma, و Spotify لحل مشاكل التوسع الهائل.",
        hiddenSolution: {
          summary: "الخلاصات الهندسية الجوهرية للأنظمة الفائقة:",
          steps: [
            {
              title: "1. إلغاء الأقفال لصالح النماذج أحادية المسار (Thread-per-core & Actor Model)",
              content: "كما في Figma (خادم Rust لكل ملف) و ScyllaDB و Redis، تجنب الأقفال الشبكية الثقيلة والاعتماد على التسلسل في الذاكرة يلغي تنازع المعالج ويحقق أعلى أداء."
            },
            {
              title: "2. تقسيم فضاء البيانات الذكي (Smart Partitioning & Bucketing)",
              content: "كما في Discord و Uber، منع تضخم البارتيشن الواحد عبر تقسيم المفاتيح زمانياً أو مكانياً يحمي الأقراص من الانهيار ويضمن ثبات الـ P99 Latency."
            },
            {
              title: "3. العدالة وعزل الإخفاقات (Fairness & Blast Radius Reduction)",
              content: "كما في Slack و Shopify، عزل المستأجرين (Tenant Isolation) وحماية الموارد المشتركة عبر طوابير افتراضية يمنع عميلاً واحداً من إسقاط باقي المنظومة."
            }
          ]
        }
      }
    },

    {
      id: "module-8",
      number: "8",
      title: "Interactive Studio — مختبر تصميم التطبيقات الحقيقية واستوديو المعمارية",
      subtitle: "تدرب عملياً على مكونات النظم وصمم بنفسك معماريات أشهر التطبيقات (InstaPay, Uber, YouTube, WhatsApp, Netflix) مع تقييم معماري فوري",
      isStudio: true,
      diagramId: "instapayArchitecture",
      studioChallenges: [
        {
          id: "challenge-instapay",
          appName: "InstaPay (منظومة التحويل اللحظي الصارم)",
          tag: "Financial / Strong Consistency",
          badge: "ACID & Saga",
          diagramId: "instapayArchitecture",
          overview: "تصميم شبكة المدفوعات اللحظية (IPN) للربط بين البنوك وتحويل الأموال فورياً دون احتمال حدوث خصم مزدوج أو ضياع أموال عند انقطاع الشبكة.",
          targetSpecs: {
            throughput: "50,000 tx/sec",
            latency: "< 3s End-to-End",
            consistency: "Strict ACID / Zero Data Loss",
            availability: "99.999% (Five Nines)"
          },
          trainingComponents: [
            { name: "Idempotency Lock Layer", role: "Redis Cluster مع Lua Script لفحص مفتاح المعاملة الفريد ومنع تكرار التحويل." },
            { name: "Saga State Machine", role: "منسق المعاملات الموزعة لإدارة خطوات: حجز المبلغ ← استدعاء شبكة البنك المركزي ← تأكيد التحويل." },
            { name: "Double-Entry Ledger", role: "قاعدة بيانات PostgreSQL لتسجيل كل معاملة كقيدين متوازيين (مدين = دائن) لمنع توليد أو فقد أي قرش." },
            { name: "Central Bank IPN Connector", role: "بوابة اتصال آمنة ومشفرة عبر mTLS و HSM للربط اللحظي مع مجمع البنوك المركزي." },
            { name: "Nightly Reconciliation Engine", role: "محرك مطابقة السجلات المحاسبية بنهاية اليوم لاكتشاف أي فروقات مصرفية وتصحيحها." }
          ],
          questionsToSolve: [
            {
              step: "1. طبقة منع التكرار والأمان",
              options: [
                { text: "الاعتماد على Auto-increment ID في قاعدة البيانات فقط", correct: false, reason: "لا يمنع إرسال المستخدم لنفس الطلب مرتين عند تعليق الشبكة." },
                { text: "توليد Idempotency Key على هاتف المستخدم وفحصه ذرياً في Redis Cluster عبر Lua Script", correct: true, reason: "ممتاز! يضمن رفض أي طلب مكرر بنفس المعرف فوراً دون إرهاق قواعد البيانات." }
              ]
            },
            {
              step: "2. نمط إدارة المعاملة بين البنوك",
              options: [
                { text: "بروتوكول Two-Phase Commit (2PC) التقليدي عبر كافة البنوك", correct: false, reason: "2PC يسبب شلل وحجب الموارد (Blocking) إذا تعطل أحد البنوك أو بطؤ اتصاله." },
                { text: "نمط Saga Orchestration مع معاملات تعويضية (Compensating Transactions)", correct: true, reason: "صحيح! يضمن إكمال التحويل خطوة بخطوة والتراجع الآلي برد المبلغ في حال تعذر البنك المستلم." }
              ]
            },
            {
              step: "3. نموذج تخزين السجل المالي",
              options: [
                { text: "جدول NoSQL بسيط يحدث رصيد الحساب مباشرة `balance = balance - amount`", correct: false, reason: "كارثة محاسبية! التحديث المباشر يخفي أصل المعاملات ولا يتيح التدقيق الجنائي." },
                { text: "دفتر أستاذ مزدوج (Double-Entry Ledger) غير قابل للتعديل في RDBMS", correct: true, reason: "الاختيار المصرفي القياسي! كل عملية تسجل كسطرين (مدين ودائن) بحيث يكون المجموع صفراً دائماً." }
              ]
            }
          ],
          databaseArchitecture: {
            overview: "معمارية مالية هجينة تعتمد على مبدأ Polyglot Persistence المصرفي: التخزين الدائم في PostgreSQL مع دعم القيود الصارمة والتكرار المتزامن، واستخدام Redis Cluster في الذاكرة لمنع تكرار العمليات ذرياً، مع محرك ClickHouse المجدول للمطابقة الليلية.",
            polyglotTiers: [
              { dbName: "PostgreSQL (Core Ledger)", dbType: "Relational RDBMS (ACID)", role: "دفتر الأستاذ المزدوج غير القابل للتعديل وجداول الحسابات والمعاملات", shardingKey: "bank_routing_code + hash(account_id)", consistency: "Strict Serializable / Multi-AZ Sync Replication" },
              { dbName: "Redis Cluster (Distributed Locks)", dbType: "In-Memory Key-Value", role: "أقفال منع التكرار اللحظية (Idempotency Locks) وذاكرة التحقق السريع من الجلسات", shardingKey: "idempotency_key", consistency: "Strong In-Memory Lock (TTL = 24h)" },
              { dbName: "ClickHouse / TimescaleDB", dbType: "Columnar OLAP", role: "سجلات التدقيق الجنائي والمطابقة المحاسبية مع البنك المركزي (Reconciliation)", shardingKey: "partition by toYYYYMM(created_at)", consistency: "Append-only Immutable" }
            ],
            replicationStrategy: "Multi-AZ Synchronous Replication مع RPO = 0 (Zero Data Loss) و Failover أوتوماتيكي عبر Raft/Patroni خلال أقل من 3 ثوانٍ."
          },
          databaseSchemas: [
            {
              tableName: "accounts",
              engine: "PostgreSQL (ACID Core)",
              description: "جدول الحسابات البنكية للمستخدمين مع قفل التفاؤل لمنع Race Conditions.",
              columns: [
                { name: "account_id", type: "UUID", key: "PK", nullable: false, description: "المعرف الفريد للحساب البنكي" },
                { name: "user_id", type: "UUID", key: "FK", nullable: false, description: "معرف المستخدم المالك للحساب" },
                { name: "bank_code", type: "VARCHAR(10)", key: "INDEX", nullable: false, description: "كود البنك التابع له الحساب (مثل NBE, CIB)" },
                { name: "iban", type: "VARCHAR(34)", key: "UNIQUE", nullable: false, description: "رقم الحساب المصرفي الدولي (IBAN)" },
                { name: "currency", type: "CHAR(3)", key: "NONE", nullable: false, description: "العملة (EGP, USD, SAR)" },
                { name: "balance_cents", type: "BIGINT", key: "NONE", nullable: false, description: "الرصيد الفعلي الحالي بالقرش/السنت (لتجنب أخطاء الفاصلة العائمة)" },
                { name: "held_cents", type: "BIGINT", key: "NONE", nullable: false, description: "المبالغ المحجوزة قيد التنفيذ اللحظي" },
                { name: "status", type: "VARCHAR(15)", key: "NONE", nullable: false, description: "حالة الحساب (ACTIVE, SUSPENDED, FROZEN)" },
                { name: "version", type: "BIGINT", key: "LOCK", nullable: false, description: "رقم الإصدار لقفل التفاؤل (Optimistic Locking)" },
                { name: "created_at", type: "TIMESTAMPTZ", key: "NONE", nullable: false, description: "تاريخ فتح الحساب" }
              ],
              ddl: `CREATE TABLE accounts (
    account_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(user_id),
    bank_code VARCHAR(10) NOT NULL,
    iban VARCHAR(34) UNIQUE NOT NULL,
    currency CHAR(3) NOT NULL DEFAULT 'EGP',
    balance_cents BIGINT NOT NULL CHECK (balance_cents >= 0),
    held_cents BIGINT NOT NULL DEFAULT 0 CHECK (held_cents >= 0),
    status VARCHAR(15) NOT NULL DEFAULT 'ACTIVE',
    version BIGINT NOT NULL DEFAULT 1,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX idx_accounts_bank_user ON accounts(bank_code, user_id);`
            },
            {
              tableName: "double_entry_ledger",
              engine: "PostgreSQL (Immutable Ledger)",
              description: "دفتر الأستاذ المالي المزدوج: كل حركة تسجل كقيدين متوازيين (مدين = دائن) ولا تحذف أبداً.",
              columns: [
                { name: "entry_id", type: "UUID", key: "PK", nullable: false, description: "المعرف الفريد للقيد المحاسبي" },
                { name: "transaction_id", type: "UUID", key: "FK", nullable: false, description: "معرف عملية التحويل المرتبطة" },
                { name: "debit_account_id", type: "UUID", key: "FK", nullable: false, description: "الحساب المدين (المرسل / المخصوم منه)" },
                { name: "credit_account_id", type: "UUID", key: "FK", nullable: false, description: "الحساب الدائن (المستلم / المضاف إليه)" },
                { name: "amount_cents", type: "BIGINT", key: "NONE", nullable: false, description: "قيمة المعاملة بالقرش" },
                { name: "currency", type: "CHAR(3)", key: "NONE", nullable: false, description: "عملة المعاملة" },
                { name: "entry_type", type: "VARCHAR(25)", key: "NONE", nullable: false, description: "نوع القيد (P2P_TRANSFER, FEE, REVERSAL)" },
                { name: "idempotency_key", type: "VARCHAR(64)", key: "UNIQUE", nullable: false, description: "مفتاح منع التكرار الصادر من التطبيق" },
                { name: "created_at", type: "TIMESTAMPTZ", key: "INDEX", nullable: false, description: "وقت تسجيل القيد ذرياً" }
              ],
              ddl: `CREATE TABLE double_entry_ledger (
    entry_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    transaction_id UUID NOT NULL REFERENCES saga_transfers(tx_id),
    debit_account_id UUID NOT NULL REFERENCES accounts(account_id),
    credit_account_id UUID NOT NULL REFERENCES accounts(account_id),
    amount_cents BIGINT NOT NULL CHECK (amount_cents > 0),
    currency CHAR(3) NOT NULL,
    entry_type VARCHAR(25) NOT NULL,
    idempotency_key VARCHAR(64) UNIQUE NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX idx_ledger_tx ON double_entry_ledger(transaction_id);
CREATE INDEX idx_ledger_created ON double_entry_ledger(created_at);`
            },
            {
              tableName: "saga_transfers",
              engine: "PostgreSQL (State Machine)",
              description: "جدول تتبع آلة حالات نمط الـ Saga الموزع لإدارة خطوات التحويل والتراجع الآلي.",
              columns: [
                { name: "tx_id", type: "UUID", key: "PK", nullable: false, description: "معرف المعاملة الفريد" },
                { name: "idempotency_key", type: "VARCHAR(64)", key: "UNIQUE", nullable: false, description: "مفتاح منع التكرار اللحظي" },
                { name: "sender_account_id", type: "UUID", key: "FK", nullable: false, description: "حساب المرسل" },
                { name: "receiver_iban", type: "VARCHAR(34)", key: "NONE", nullable: false, description: "حساب المستلم أو رقم الهاتف" },
                { name: "dest_bank_code", type: "VARCHAR(10)", key: "NONE", nullable: false, description: "كود البنك المستقبل" },
                { name: "amount_cents", type: "BIGINT", key: "NONE", nullable: false, description: "المبلغ المحول" },
                { name: "state", type: "VARCHAR(25)", key: "INDEX", nullable: false, description: "الحالة (INITIATED, HOLD_PLACED, IPN_SUBMITTED, SETTLED, FAILED_REFUNDED)" },
                { name: "retry_count", type: "INT", key: "NONE", nullable: false, description: "عدد محاولات الإرسال لشبكة البنك المركزي" },
                { name: "timeout_at", type: "TIMESTAMPTZ", key: "NONE", nullable: false, description: "الوقت الأقصى قبل بدء المعاملة التعويضية" },
                { name: "created_at", type: "TIMESTAMPTZ", key: "NONE", nullable: false, description: "تاريخ بدء التحويل" }
              ],
              ddl: `CREATE TABLE saga_transfers (
    tx_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    idempotency_key VARCHAR(64) UNIQUE NOT NULL,
    sender_account_id UUID NOT NULL REFERENCES accounts(account_id),
    receiver_iban VARCHAR(34) NOT NULL,
    dest_bank_code VARCHAR(10) NOT NULL,
    amount_cents BIGINT NOT NULL CHECK (amount_cents > 0),
    state VARCHAR(25) NOT NULL DEFAULT 'INITIATED',
    retry_count INT NOT NULL DEFAULT 0,
    timeout_at TIMESTAMPTZ NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX idx_saga_state ON saga_transfers(state);`
            },
            {
              tableName: "redis_idempotency_locks",
              engine: "Redis Cluster (In-Memory Locks)",
              description: "بنية مفاتيح Redis لمنع تنفيذ نفس الطلب مرتين خلال 24 ساعة عبر نصوص Lua الذرية.",
              columns: [
                { name: "key", type: "STRING", key: "PK", nullable: false, description: "idempotency:ipn:{user_id}:{idempotency_key}" },
                { name: "value", type: "JSON", key: "NONE", nullable: false, description: "{ tx_id, status: 'PROCESSING' | 'COMPLETED', response_payload }" },
                { name: "ttl", type: "SECONDS", key: "TTL", nullable: false, description: "86,400 ثانية (24 ساعة)" }
              ],
              ddl: `-- Lua Script Execution on Redis Cluster:
local key = "idempotency:ipn:" .. KEYS[1]
local exists = redis.call("EXISTS", key)
if exists == 1 then
    return redis.call("GET", key)
else
    redis.call("SET", key, ARGV[1], "EX", 86400, "NX")
    return "ACQUIRED"
end`
            }
          ],
          dataExchange: {
            protocolMatrix: [
              { layer: "Mobile App ↔ API Gateway", protocol: "HTTPS / TLS 1.3 + mTLS", format: "Signed JSON + Biometric HSM Token", latencyTarget: "< 150ms", rationale: "توثيق ثنائي صارم مع تشفير القناة وتوقيع البصمة الرقمية لحماية أموال العميل." },
              { layer: "API Gateway ↔ Saga Orchestrator", protocol: "gRPC over HTTP/2", format: "Protobuf Binary", latencyTarget: "< 10ms", rationale: "سرعة اتصال فائقة وثنائية الاتجاه مع حجم رسائل صغير جداً." },
              { layer: "Saga ↔ Central Bank IPN Hub", protocol: "ISO 20022 (AS2 / IPSec VPN)", format: "XML (pacs.008 / pacs.002)", latencyTarget: "< 1500ms", rationale: "المعيار المصرفي العالمي المعتمد للتسوية اللحظية بين البنوك المركزية." },
              { layer: "Saga ↔ Async Event Backbone", protocol: "Apache Kafka", format: "Avro with Schema Registry", latencyTarget: "< 25ms", rationale: "بث أحداث اكتمال التحويل والتسوية للمطابقة الليلية وإرسال الإشعارات اللحظية." }
            ],
            apiContractSample: {
              title: "عقد طلب التحويل اللحظي (Transfer Initiation API Contract)",
              type: "POST /v1/transfers (JSON + mTLS Header)",
              snippet: `{
  "headers": {
    "X-Idempotency-Key": "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
    "X-Biometric-Signature": "MEQCIF98...h298sX=",
    "X-Device-Fingerprint": "sha256:d89a2e4..."
  },
  "body": {
    "source_account_id": "acc_8921034-egp",
    "destination_type": "IBAN",
    "destination_value": "EG38000200010000002891029384",
    "beneficiary_bank": "CIB_EG",
    "amount_cents": 500000,
    "currency": "EGP",
    "note": "Payment for software license"
  }
}`
            },
            e2eRequestFlow: [
              { stepNumber: 1, actor: "User App", action: "توقيع التحويل بالبصمة وتوليد Idempotency Key", component: "Mobile Client", protocol: "mTLS / TLS 1.3", detail: "يولد هاتف العميل مفتاح عدم التكرار ويوقع الطلب بمفتاح التشفير المحفوظ في Secure Enclave." },
              { stepNumber: 2, actor: "API Gateway", action: "فحص القفل الذري ومنع التكرار", component: "Redis Cluster", protocol: "Redis Lua", detail: "يفحص السيرفر مفتاح المعاملة في الذاكرة؛ إذا كان مكرراً يعيد الرد المخزن فوراً دون مساس بقاعدة البيانات." },
              { stepNumber: 3, actor: "Saga Coordinator", action: "إنشاء قيد الحجز المؤقت في الحساب", component: "PostgreSQL", protocol: "ACID Transaction", detail: "يتم حجز المبلغ من رصيد المرسل (held_cents) وتحديث حالة الـ Saga إلى HOLD_PLACED." },
              { stepNumber: 4, actor: "IPN Connector", action: "إرسال رسالة التسوية للبنك المركزي", component: "Central Bank Hub", protocol: "ISO 20022 pacs.008", detail: "توجيه أمر التحويل عبر شبكة البنك المركزي المشفرة للتحقق من حساب المستفيد وإيداع المبلغ." },
              { stepNumber: 5, actor: "Central Bank Hub", action: "تأكيد التحويل وإرسال إشعار النجاح", component: "Saga Orchestrator", protocol: "pacs.002 ACK", detail: "يستقبل الـ Orchestrator رد النجاح، ويثبت القيد المزدوج نهائياً (خصم حقيقي = إضافة حقيقية)." },
              { stepNumber: 6, actor: "Event Stream", action: "بث حدث الاكتمال وإشعار الطرفين", component: "Kafka & WebSocket", protocol: "Kafka Topic", detail: "إرسال إشعار فوري لهاتف المرسل والمستلم، وتمرير السجل لمحرك المطابقة الليلية (Reconciliation)." }
            ]
          }
        },

        {
          id: "challenge-uber",
          appName: "Uber / Careem (النقل التشاركي والمطابقة المكانية)",
          tag: "Geospatial & Real-time Matching",
          badge: "Spatial H3 & Redis",
          diagramId: "uberArchitecture",
          overview: "تصميم منصة تتبع ملايين السائقين لحظياً كل 4 ثوانٍ ومطابقة الراكب مع أفضل سائق متاح وتطبيق التسعير الديناميكي (Surge Pricing).",
          targetSpecs: {
            throughput: "100,000 Location pings/sec",
            latency: "< 200ms Matching",
            consistency: "Eventual for Locations, Strong for Trip Lock",
            availability: "99.99%"
          },
          trainingComponents: [
            { name: "WebSocket Gateway", role: "إدارة ملايين اتصالات الـ TCP المستمرة مع هواتف السائقين والركاب واستقبال نبضات الـ GPS." },
            { name: "Uber H3 Spatial Hexagons", role: "تقسيم الخريطة إلى شبكات سداسية Resolution-8 للبحث السريع في الخلية الحالية والخلايا المجاورة." },
            { name: "Redis In-Memory Spatial Set", role: "تخزين مواقع السائقين النشطين داخل خلايا الـ H3 في الذاكرة لتوفير بحث O(1)." },
            { name: "Weighted Dispatch Engine", role: "خوارزمية مطابقة موزونة تجمع بين أقرب مسافة، تقييم السائق، ووقت الوصول المتوقع (ETA)." },
            { name: "Redis Mutex Driver Lock", role: "قفل السائق لمدة 10 ثوانٍ عند تقديم العرض لمنع مطابقته لراكبين في نفس اللحظة." }
          ],
          questionsToSolve: [
            {
              step: "1. فهرسة المواقع الجغرافية",
              options: [
                { text: "حفظ خط الطول والعرض في MySQL والاستعلام بـ `WHERE lat BETWEEN ... AND lon BETWEEN ...`", correct: false, reason: "مسح بطيء جداً O(N) ينهار مع استقبال 100,000 إحداثية في الثانية." },
                { text: "تحويل الإحداثيات لمعرفات خلايا سداسية Uber H3 وتخزينها في Redis Sets", correct: true, reason: "رائع! الخلايا السداسية تجعل مسافة المركز لجميع الجيران متساوية وتتيح بحث O(1) بالذاكرة." }
              ]
            },
            {
              step: "2. منع تضارب مطابقة السائق",
              options: [
                { text: "إرسال الطلب لجميع السائقين في المدينة وأول من يقبل يفوز", correct: false, reason: "يسبب إزعاج السائقين وسباق تزامني شديد." },
                { text: "حجز السائق المرشح بقفل مؤقت في Redis (TTL=10s) وإرسال العرض له وحده", correct: true, reason: "صحيح! هذا هو النمط القياسي المتبع لمنع حجز السائق نفسه لأكثر من راكب." }
              ]
            }
          ],
          databaseArchitecture: {
            overview: "معمارية مكانية لحظية تعتمد على تقسيم الخريطة لملايين الخلايا السداسية (Uber H3 Indexing) المخزنة في Redis Sets للبحث المكاني الفوري O(1)، مع قاعدة بيانات PostgreSQL/PostGIS لتسجيل الرحلات، و Cassandra لسلاسل إحداثيات السائقين الزمنية.",
            polyglotTiers: [
              { dbName: "Redis In-Memory Spatial Cluster", dbType: "In-Memory Spatial / Key-Value", role: "تخزين مواقع السائقين النشطين لحظياً في خلايا H3 مع أقفال المطابقة المؤقتة", shardingKey: "h3_resolution_8_index", consistency: "Eventual (Location TTL = 10s), Strong for Driver Lock" },
              { dbName: "PostgreSQL + PostGIS", dbType: "Relational Spatial (ACID)", role: "إدارة بيانات الرحلات الرسمية، حسابات السائقين والركاب، والفواتير والمدفوعات", shardingKey: "city_id + trip_id", consistency: "Strong Consistency / Read Replicas" },
              { dbName: "Apache Cassandra / ScyllaDB", dbType: "Wide-Column Time-Series", role: "أرشيف مسارات القيادة التاريخية (GPS Breadcrumb Telemetry) لحساب المسافات والنزاعات", shardingKey: "driver_id + bucket_date", consistency: "Tunable Eventual (QUORUM Write)" }
            ],
            replicationStrategy: "تقسيم جغرافي حسب المدن (Geographic Sharding by City). مراكز بيانات محلية في كل إقليم مع مزامنة غير متزامنة للمركز الرئيسي."
          },
          databaseSchemas: [
            {
              tableName: "trips",
              engine: "PostgreSQL + PostGIS",
              description: "جدول الرحلات الرسمي متضمناً الإحداثيات المكانية ومؤشرات H3 وحالة الرحلة.",
              columns: [
                { name: "trip_id", type: "UUID", key: "PK", nullable: false, description: "المعرف الفريد للرحلة" },
                { name: "rider_id", type: "UUID", key: "FK", nullable: false, description: "معرف الراكب" },
                { name: "driver_id", type: "UUID", key: "FK", nullable: true, description: "معرف السائق المقبول للرحلة" },
                { name: "city_id", type: "INT", key: "PARTITION", nullable: false, description: "معرف المدينة لتقسيم البيانات" },
                { name: "pickup_h3_res8", type: "BIGINT", key: "INDEX", nullable: false, description: "معرف خلية H3 السداسية لموقع الركوب" },
                { name: "dropoff_h3_res8", type: "BIGINT", key: "INDEX", nullable: false, description: "معرف خلية H3 لموقع النزول" },
                { name: "pickup_geom", type: "GEOMETRY(Point, 4326)", key: "SPATIAL", nullable: false, description: "الإحداثيات الجغرافية لموقع الالتقاء" },
                { name: "dropoff_geom", type: "GEOMETRY(Point, 4326)", key: "SPATIAL", nullable: false, description: "الإحداثيات الجغرافية لموقع الوصول" },
                { name: "status", type: "VARCHAR(20)", key: "INDEX", nullable: false, description: "الحالة (REQUESTED, MATCHING, ACCEPTED, IN_PROGRESS, COMPLETED, CANCELLED)" },
                { name: "fare_cents", type: "INT", key: "NONE", nullable: false, description: "التكلفة التقديرية أو الفعلية" },
                { name: "surge_multiplier", type: "DECIMAL(3,2)", key: "NONE", nullable: false, description: "مضاعف التسعير الديناميكي (1.00 إلى 3.50)" },
                { name: "created_at", type: "TIMESTAMPTZ", key: "INDEX", nullable: false, description: "وقت طلب الرحلة" }
              ],
              ddl: `CREATE TABLE trips (
    trip_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    rider_id UUID NOT NULL REFERENCES users(user_id),
    driver_id UUID REFERENCES drivers(driver_id),
    city_id INT NOT NULL,
    pickup_h3_res8 BIGINT NOT NULL,
    dropoff_h3_res8 BIGINT NOT NULL,
    pickup_geom GEOMETRY(Point, 4326) NOT NULL,
    dropoff_geom GEOMETRY(Point, 4326) NOT NULL,
    status VARCHAR(20) NOT NULL DEFAULT 'REQUESTED',
    fare_cents INT NOT NULL,
    surge_multiplier DECIMAL(3,2) NOT NULL DEFAULT 1.00,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
) PARTITION BY LIST (city_id);

CREATE INDEX idx_trips_pickup_h3 ON trips(pickup_h3_res8);
CREATE INDEX idx_trips_status ON trips(status);
CREATE INDEX idx_trips_spatial ON trips USING GIST(pickup_geom);`
            },
            {
              tableName: "redis_driver_spatial_h3",
              engine: "Redis Cluster (In-Memory)",
              description: "هياكل بيانات Redis لتخزين معرفات السائقين المتاحين داخل كل خلية H3 سداسية (Resolution 8).",
              columns: [
                { name: "h3_cell_key", type: "SET", key: "PK", nullable: false, description: "h3:res8:{h3_cell_index} -> Set of driver_ids" },
                { name: "driver_state_key", type: "HASH", key: "INDEX", nullable: false, description: "driver:{driver_id}:location -> { lat, lng, bearing, updated_at, status }" },
                { name: "driver_lock_key", type: "STRING", key: "MUTEX", nullable: true, description: "lock:driver:{driver_id} (TTL = 10s NX)" }
              ],
              ddl: `-- Redis Command Flow for Driver Location Update:
-- 1. Remove driver from old H3 cell set:
SREM h3:res8:882681a547fffff "driver_1092"
-- 2. Add driver to new H3 cell set:
SADD h3:res8:882681a545fffff "driver_1092"
-- 3. Update driver telemetry hash with TTL:
HSET driver:driver_1092:location lat 30.0444 lng 31.2357 bearing 180 updated_at 1714520930 status "AVAILABLE"
EXPIRE driver:driver_1092:location 15`
            },
            {
              tableName: "driver_telemetry_history",
              engine: "Apache Cassandra (ScyllaDB)",
              description: "جدول تخزين نبضات السائقين التاريخية (Telemetry) مقسمة بالأيام والسائقين.",
              columns: [
                { name: "driver_id", type: "UUID", key: "PARTITION_KEY", nullable: false, description: "معرف السائق" },
                { name: "bucket_date", type: "DATE", key: "PARTITION_KEY", nullable: false, description: "تاريخ اليوم لتفادي تضخم البارتيشن" },
                { name: "ping_timestamp", type: "TIMESTAMP", key: "CLUSTERING_KEY", nullable: false, description: "وقت النبضة الدقيق (مرتب تنازلياً)" },
                { name: "lat", type: "DOUBLE", key: "NONE", nullable: false, description: "خط العرض" },
                { name: "lng", type: "DOUBLE", key: "NONE", nullable: false, description: "خط الطول" },
                { name: "speed_kmh", type: "FLOAT", key: "NONE", nullable: false, description: "سرعة المركبة" },
                { name: "bearing", type: "FLOAT", key: "NONE", nullable: false, description: "زاوية اتجاه الحركة (0-360)" }
              ],
              ddl: `CREATE TABLE driver_telemetry_history (
    driver_id UUID,
    bucket_date DATE,
    ping_timestamp TIMESTAMP,
    lat DOUBLE,
    lng DOUBLE,
    speed_kmh FLOAT,
    bearing FLOAT,
    PRIMARY KEY ((driver_id, bucket_date), ping_timestamp)
) WITH CLUSTERING ORDER BY (ping_timestamp DESC);`
            }
          ],
          dataExchange: {
            protocolMatrix: [
              { layer: "Driver App ↔ WebSocket Gateway", protocol: "Persistent WebSocket (WSS)", format: "Protobuf GPS Telemetry Ping (4s)", latencyTarget: "< 50ms", rationale: "اتصال دائم ثنائي الاتجاه منخفض استهلاك البيانات لنقل الإحداثيات كل 4 ثوانٍ." },
              { layer: "Rider App ↔ API Gateway", protocol: "HTTPS / HTTP/3", format: "JSON Request / SSE for Status", latencyTarget: "< 150ms", rationale: "طلب سريع لحساب التكلفة والـ Surge وتلقي عروض الرحلة المتزامنة." },
              { layer: "Gateway ↔ Match/Dispatch Engine", protocol: "gRPC over HTTP/2", format: "Protobuf Streaming", latencyTarget: "< 15ms", rationale: "استدعاء لحظي عالي السرعة بين بوابات الاتصال ومحرك المطابقة الموزونة." },
              { layer: "Location Pipeline ↔ Kafka", protocol: "Apache Kafka (100k msg/s)", format: "Binary Avro Messages", latencyTarget: "< 20ms", rationale: "بث نبضات المواقع لتحليل حركة المرور، حساب التسعير الديناميكي، وكشف التلاعب." }
            ],
            apiContractSample: {
              title: "عقد نبضة موقع السائق اللحظية (Driver Location Telemetry Protobuf)",
              type: "WebSocket Binary Frame (Every 4 seconds)",
              snippet: `syntax = "proto3";

message DriverLocationPing {
  string driver_id = 1;
  double latitude = 2;
  double longitude = 3;
  float speed_kmh = 4;
  float bearing_degrees = 5;
  int64 timestamp_epoch_ms = 6;
  enum DriverStatus {
    AVAILABLE = 0;
    ON_TRIP = 1;
    GOING_OFFLINE = 2;
  }
  DriverStatus status = 7;
}`
            },
            e2eRequestFlow: [
              { stepNumber: 1, actor: "Driver App", action: "إرسال نبضة GPS عبر WebSocket كل 4 ثوانٍ", component: "WebSocket Gateway", protocol: "WSS / Protobuf", detail: "يستقبل السيرفر النبضة، ويحسب معرف خلية H3 الحالية من الإحداثيات (Resolution 8)." },
              { stepNumber: 2, actor: "Location Ingestion", action: "تحديث خلية H3 في الذاكرة وإرسال للـ Kafka", component: "Redis Cluster", protocol: "Redis Commands", detail: "إضافة السائق لـ H3 Set وتحديث هاش موقعه مع TTL 15 ثانية، وبث النبضة لـ Kafka." },
              { stepNumber: 3, actor: "Rider App", action: "طلب رحلة مع تحديد موقع الركوب والوصول", component: "API Gateway", protocol: "HTTPS / HTTP/3", detail: "يقوم الراكب بتأكيد الرحلة؛ يحسب النظام خلية H3 لموقع الركوب ومضاعف الـ Surge." },
              { stepNumber: 4, actor: "Dispatch Engine", action: "استعلام الجوار السداسي K-Ring في Redis", component: "Redis & H3 Engine", protocol: "gRPC / Memory Query", detail: "جلب السائقين المتاحين في الخلية المركزية وخلايا الجوار المحيطة (Ring 1 & 2) بزمن O(1)." },
              { stepNumber: 5, actor: "Matching Algorithm", action: "ترتيب المرشحين وتطبيق قفل السائق المؤقت", component: "Redis Mutex Lock", protocol: "SET NX EX 10", detail: "اختيار أفضل سائق بناءً على ETA والتقييم وقفل السائق 10 ثوانٍ لمنع حجزه لراكب آخر." },
              { stepNumber: 6, actor: "Driver Offer Push", action: "دفع العرض لشاشة السائق وتأكيد الرحلة", component: "WebSocket & Postgres", protocol: "WSS Offer Frame", detail: "يقبل السائق العرض خلال 10 ثوانٍ -> إنشاء سجل الرحلة في PostgreSQL وبدء التتبع الحي." }
            ]
          }
        },

        {
          id: "challenge-youtube",
          appName: "YouTube (معالجة وبث الفيديو التكيفي)",
          tag: "Video Processing & Streaming",
          badge: "HLS & Transcoding DAG",
          diagramId: "videoPipeline",
          overview: "بناء خط استيعاب ومعالجة آلاف ساعات الفيديو المرفوعة كل دقيقة، وتحويلها لعدة دقات بالتوازي، وتوزيعها للبث التكيفي عبر شبكات CDN.",
          targetSpecs: {
            throughput: "500 Hours uploaded/min",
            latency: "Instant Playback (< 1s start)",
            storage: "Petabytes / Day",
            availability: "99.99%"
          },
          trainingComponents: [
            { name: "Resumable Chunked Upload", role: "رفع الفيديو لأجزاء 5MB مباشرة لـ S3 عبر Pre-signed URLs مع إمكانية استئناف الرفع." },
            { name: "DAG Task Splitter", role: "تقطيع الفيديو لـ GOPs مدتها 5-10 ثوانٍ ومعالجتها بالتوازي عبر مئات خوادم الـ GPU." },
            { name: "HLS / DASH Packager", role: "إنشاء ملفات الفهرسة Manifests والبث التكيفي (Adaptive Bitrate Streaming)." },
            { name: "Edge CDN Tier", role: "تخزين الأجزاء الساخنة من الفيديو قرب مزودي الإنترنت (ISPs) لتقليل زمن التحميل." }
          ],
          questionsToSolve: [
            {
              step: "1. معالجة الفيديو فائق الدقة 4K",
              options: [
                { text: "معالجة الفيديو كملف واحد كامل على خادم واحد من البداية للنهاية", correct: false, reason: "سيستغرق ساعات وسيفشل كلياً إذا تعطل الخادم قبل النهاية بثانية واحدة." },
                { text: "تقطيع الفيديو لقطع GOPs صغيرة (5 ثوانٍ) ومعالجتها بالتوازي عبر GPU Workers", correct: true, reason: "ممتاز! تقطيع الفيديو يتيح معالجة فيديو مدته ساعة في غضون 60 ثانية فقط بالتوازي." }
              ]
            },
            {
              step: "2. دعم سرعات الإنترنت المتفاوتة للمستخدمين",
              options: [
                { text: "تقديم نسخة MP4 واحدة متوسطة الجودة للجميع", correct: false, reason: "تجربة سيئة للمستخدمين أصحاب الإنترنت البطيء ولن تستغل سرعات الشاشات الفائقة." },
                { text: "توليد ملفات HLS / DASH بدرجات جودة متعددة لضبط الجودة ديناميكياً كل بضع ثوانٍ", correct: true, reason: "صحيح! هذا هو مبدأ Adaptive Bitrate Streaming المتبع عالمياً." }
              ]
            }
          ],
          databaseArchitecture: {
            overview: "معمارية معالجة وسائط فائقة الضخامة: تخزين ملفات الفيديو الخام والنسخ المشفرة في Object Storage (S3/GCS)، واستخدام Vitess/MySQL المقسم للبيانات الوصفية وقنوات المشتركين، مع محرك ClickHouse العملاق لتجميع مليارات مشاهدات الفيديو وإحصائيات المشاهدة.",
            polyglotTiers: [
              { dbName: "AWS S3 / GCS (Object Store)", dbType: "Distributed Object Storage", role: "تخزين أجزاء الفيديو المرفوعة وملفات الـ HLS (.m3u8, .ts, .m4s) لكافة الدقات", shardingKey: "video_id/resolution/chunk_001.ts", consistency: "Strong Read-After-Write Consistency" },
              { dbName: "Vitess (Sharded MySQL)", dbType: "Relational Sharded RDBMS", role: "البيانات الوصفية للفيديوهات، القنوات، الاشتراكات، والتعليقات", shardingKey: "channel_id / video_id", consistency: "Eventual for Counters, Strong for Ownership" },
              { dbName: "ClickHouse Columnar OLAP", dbType: "Columnar Big Data Engine", role: "تسجيل أحداث المشاهدة (Watch Time)، مصادر الزيارات، والأرباح الحية", shardingKey: "toYYYYMM(timestamp) + video_id", consistency: "High-Throughput Batch Ingest via Kafka" }
            ],
            replicationStrategy: "توزيع الأصول المشفرة عبر شبكة CDN عالمية (Cloudflare, Fastly, Google Edge) مع التخزين الجغرافي المتعدد (Multi-Region S3)."
          },
          databaseSchemas: [
            {
              tableName: "videos",
              engine: "Vitess (MySQL Sharded)",
              description: "البيانات الوصفية الأساسية للفيديو وحالة خط المعالجة والترميز.",
              columns: [
                { name: "video_id", type: "VARCHAR(11)", key: "PK", nullable: false, description: "معرف الفيديو الفريد ذو 11 حرفاً (مثل dQw4w9WgXcQ)" },
                { name: "channel_id", type: "UUID", key: "INDEX", nullable: false, description: "معرف القناة المالكة" },
                { name: "title", type: "VARCHAR(255)", key: "NONE", nullable: false, description: "عنوان الفيديو" },
                { name: "description", type: "TEXT", key: "NONE", nullable: true, description: "وصف الفيديو والوسوم" },
                { name: "duration_seconds", type: "INT", key: "NONE", nullable: false, description: "مدة الفيديو بالثواني" },
                { name: "status", type: "VARCHAR(20)", key: "INDEX", nullable: false, description: "الحالة (UPLOADING, PROCESSING, READY, FAILED, PRIVATE)" },
                { name: "master_manifest_url", type: "VARCHAR(500)", key: "NONE", nullable: true, description: "رابط ملف الفهرس الرئيسي (HLS master.m3u8)" },
                { name: "views_count", type: "BIGINT", key: "NONE", nullable: false, description: "عدد المشاهدات التقريبي" },
                { name: "created_at", type: "DATETIME", key: "INDEX", nullable: false, description: "تاريخ الرفع" }
              ],
              ddl: `CREATE TABLE videos (
    video_id VARCHAR(11) PRIMARY KEY,
    channel_id UUID NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    duration_seconds INT NOT NULL DEFAULT 0,
    status VARCHAR(20) NOT NULL DEFAULT 'UPLOADING',
    master_manifest_url VARCHAR(500),
    views_count BIGINT NOT NULL DEFAULT 0,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_channel (channel_id),
    INDEX idx_status_created (status, created_at)
) ENGINE=InnoDB;`
            },
            {
              tableName: "video_renditions",
              engine: "Vitess (MySQL)",
              description: "سجل جودات الفيديو المختلفة المولدة عبر خط التحويل التكيفي (HLS / DASH).",
              columns: [
                { name: "rendition_id", type: "UUID", key: "PK", nullable: false, description: "معرف النسخة الفريد" },
                { name: "video_id", type: "VARCHAR(11)", key: "FK", nullable: false, description: "معرف الفيديو الأصلي" },
                { name: "resolution", type: "VARCHAR(10)", key: "NONE", nullable: false, description: "الدقة (2160p_4K, 1080p, 720p, 480p, 360p)" },
                { name: "bitrate_kbps", type: "INT", key: "NONE", nullable: false, description: "معدل البت للنسخة" },
                { name: "codec", type: "VARCHAR(15)", key: "NONE", nullable: false, description: "الترميز المستخدم (H264, VP9, AV1)" },
                { name: "playlist_url", type: "VARCHAR(500)", key: "NONE", nullable: false, description: "رابط قائمة التشغيل الخاصة بالجودة (720p.m3u8)" },
                { name: "file_size_bytes", type: "BIGINT", key: "NONE", nullable: false, description: "إجمالي حجم هذه الجودة" }
              ],
              ddl: `CREATE TABLE video_renditions (
    rendition_id UUID PRIMARY KEY,
    video_id VARCHAR(11) NOT NULL REFERENCES videos(video_id),
    resolution VARCHAR(10) NOT NULL,
    bitrate_kbps INT NOT NULL,
    codec VARCHAR(15) NOT NULL,
    playlist_url VARCHAR(500) NOT NULL,
    file_size_bytes BIGINT NOT NULL,
    INDEX idx_video_rendition (video_id, resolution)
);`
            },
            {
              tableName: "video_views_clickhouse",
              engine: "ClickHouse Columnar",
              description: "جدول استيعاب نبضات المشاهدة بالمليارات لحساب زمن البث بدقة فائقة.",
              columns: [
                { name: "event_id", type: "UUID", key: "PK", nullable: false, description: "معرف حدث المشاهدة" },
                { name: "video_id", type: "FixedString(11)", key: "ORDER_BY", nullable: false, description: "معرف الفيديو" },
                { name: "user_id", type: "UUID", key: "NONE", nullable: true, description: "معرف المشاهد (أو null للزائر)" },
                { name: "watch_seconds", type: "UInt32", key: "NONE", nullable: false, description: "عدد الثواني التي تمت مشاهدتها" },
                { name: "quality_played", type: "LowCardinality(String)", key: "NONE", nullable: false, description: "الجودة التي تم البث بها" },
                { name: "country_code", type: "FixedString(2)", key: "NONE", nullable: false, description: "كود دولة المشاهد" },
                { name: "timestamp", type: "DateTime", key: "PARTITION", nullable: false, description: "وقت المشاهدة" }
              ],
              ddl: `CREATE TABLE video_views_stream (
    event_id UUID,
    video_id FixedString(11),
    user_id UUID,
    watch_seconds UInt32,
    quality_played LowCardinality(String),
    country_code FixedString(2),
    timestamp DateTime
) ENGINE = MergeTree()
PARTITION BY toYYYYMM(timestamp)
ORDER BY (video_id, timestamp);`
            }
          ],
          dataExchange: {
            protocolMatrix: [
              { layer: "Creator ↔ S3 Direct Upload", protocol: "HTTP/3 Resumable Chunked (TUS)", format: "Binary 5MB Chunks + S3 Pre-signed URL", latencyTarget: "Max Bandwidth", rationale: "رفع مباشر لـ S3 لتفادي إرهاق خوادم التطبيقات ودعم استئناف الرفع عند انقطاع الشبكة." },
              { layer: "DAG Splitter ↔ GPU Transcoders", protocol: "gRPC Streaming / Kafka", format: "Protobuf Video Job Specs", latencyTarget: "< 10ms", rationale: "توزيع أجزاء الـ GOP (5 ثوانٍ) على مئات خوادم GPU لمعالجتها في نفس اللحظة." },
              { layer: "Viewer ↔ Edge CDN (Streaming)", protocol: "HLS / MPEG-DASH over HTTP/3", format: "M3U8 Manifests + .m4s / .ts segments", latencyTarget: "< 200ms TTFB", rationale: "البث التكيفي الذكي الذي يعدل دقة العرض تلقائياً حسب سرعة اتصال المشاهد الحالية." }
            ],
            apiContractSample: {
              title: "ملف الفهرسة الرئيسي للبث التكيفي (HLS Master Manifest Contract)",
              type: "GET /videos/{id}/master.m3u8",
              snippet: `#EXTM3U
#EXT-X-VERSION:6

# 4K UHD - 14 Mbps (AV1)
#EXT-X-STREAM-INF:BANDWIDTH=14000000,RESOLUTION=3840x2160,CODECS="av01.0.12M.08,mp4a.40.2"
2160p/index.m3u8

# 1080p Full HD - 4.5 Mbps (H.264)
#EXT-X-STREAM-INF:BANDWIDTH=4500000,RESOLUTION=1920x1080,CODECS="avc1.640028,mp4a.40.2"
1080p/index.m3u8

# 720p HD - 2.2 Mbps (H.264)
#EXT-X-STREAM-INF:BANDWIDTH=2200000,RESOLUTION=1280x720,CODECS="avc1.4d401f,mp4a.40.2"
720p/index.m3u8

# 360p Mobile - 600 Kbps (H.264)
#EXT-X-STREAM-INF:BANDWIDTH=600000,RESOLUTION=640x360,CODECS="avc1.42e01e,mp4a.40.2"
360p/index.m3u8`
            },
            e2eRequestFlow: [
              { stepNumber: 1, actor: "Creator App", action: "طلب رابط رفع مؤقت متعدد الأجزاء", component: "API Gateway", protocol: "HTTPS / REST", detail: "طلب Pre-signed Multi-part URLs من S3 مباشرة لتخطي خوادم النظام." },
              { stepNumber: 2, actor: "S3 Object Store", action: "استقبال أجزاء الفيديو وإطلاق حدث الاكتمال", component: "AWS S3 / GCS", protocol: "S3 Event Notification", detail: "فور اكتمال الرفع، يطلق S3 حدث SQS/Kafka لتنبيه محرك تقطيع المهام." },
              { stepNumber: 3, actor: "DAG Task Splitter", action: "تقطيع الفيديو لـ GOPs مدتها 5 ثوانٍ", component: "DAG Orchestrator", protocol: "Kafka Queue", detail: "تقسيم ملف الفيديو إلى مئات المهام المتوازية وضخها في طابور الـ GPU Workers." },
              { stepNumber: 4, actor: "GPU Transcode Pool", action: "ترميز الأجزاء المتوازية لجميع الدقات", component: "GPU Transcoders", protocol: "Hardware NVENC / AV1", detail: "تحويل الأجزاء بالتوازي لدقات (4K, 1080p, 720p, 360p) وحفظ ملفات .ts في التخزين." },
              { stepNumber: 5, actor: "HLS Packager", action: "توليد ملفات الـ Manifests وتحديث الحالة", component: "Vitess & CDN", protocol: "gRPC & S3 Put", detail: "إنشاء ملف master.m3u8 وتحديث حالة الفيديو في Vitess إلى READY." },
              { stepNumber: 6, actor: "Viewer Video Player", action: "جلب المانيفست وبث المقاطع من أقرب CDN", component: "Edge CDN & Player", protocol: "HTTP/3 Byte-Range", detail: "يبدأ المشغل بتحميل أول 3 ثوانٍ فوراً ويبدل الجودة ديناميكياً كل 5 ثوانٍ." }
            ]
          }
        },

        {
          id: "challenge-whatsapp",
          appName: "WhatsApp (المراسلات الفورية المشفرة)",
          tag: "Real-time Messaging & E2EE",
          badge: "Signal E2EE & Erlang",
          diagramId: "chatArchitecture",
          overview: "تصميم منظومة تراسل فورية مشفرة بالكامل بين طرفين (E2EE) تتحمل 100 مليار رسالة يومياً مع إدارة حالة التواجد والرسائل غير المتصلة.",
          targetSpecs: {
            throughput: "1.2 Million msgs/sec",
            latency: "< 100ms Delivery",
            privacy: "Zero Server Decryption (Signal Double Ratchet)",
            availability: "99.999%"
          },
          trainingComponents: [
            { name: "Persistent WebSocket Tier", role: "خوادم Erlang/BEAM خفيفة تدير ملايين اتصالات TCP المفتوحة باستهلاك ذاكرة ضئيل." },
            { name: "Redis Bitmaps Presence", role: "إدارة حالة متصل/غير متصل عبر نبضات قلب دورية كل 5 ثوانٍ في مصفوفة بتات." },
            { name: "Offline Message Queue", role: "حفظ الرسائل المشفرة مؤقتاً في Cassandra/RocksDB وحذفها نهائياً فور استلام المستلم لها." },
            { name: "Signal Double Ratchet", role: "بروتوكول تشفير متجدد يمنع الخادم من الاطلاع على محتوى المحادثات إطلاقاً." }
          ],
          questionsToSolve: [
            {
              step: "1. بروتوكول الاتصال بالهاتف",
              options: [
                { text: "استدعاء HTTP REST API كل ثانيتين لفحص وجود رسائل جديدة (Polling)", correct: false, reason: "يستنزف بطارية الهاتف والشبكة ويولد مليارات الطلبات غير الضرورية." },
                { text: "اتصال TCP WebSocket مفتوح ومستمر مع خوادم Gateway مخصصة", correct: true, reason: "صحيح! يتيح دفع الرسائل للمستلم فور وصولها بزمن استجابة أقل من 50ms." }
              ]
            },
            {
              step: "2. تخزين الرسائل في السيرفرات",
              options: [
                { text: "الاحتفاظ بجميع رسائل المستخدمين إلى الأبد في قواعد بيانات مركزية", correct: false, reason: "يكلف مساحات هائلة ويمثل خطراً أمنياً هائلاً على الخصوصية." },
                { text: "تخزين مؤقت للرسائل غير المستلمة فقط وحذفها فور تأكيد وصولها بهاتف المستلم", correct: true, reason: "ممتاز! يحقق الخصوصية القصوى ويوفر تيرابايتات من تكاليف التخزين." }
              ]
            }
          ],
          databaseArchitecture: {
            overview: "معمارية عابرة (Transient Architecture) تعتمد على صفرية تخزين الرسائل المستلمة (Zero Retention): تُحفظ الرسائل المشفرة بـ E2EE في Cassandra فقط أثناء عدم اتصال المستلم مع مؤقت حذف تلقائي (TTL = 30 days)، بينما تخزن مفاتيح التشفير العامة في PostgreSQL، وتدار اتصالات الجلسات بالذاكرة عبر Redis Cluster.",
            polyglotTiers: [
              { dbName: "Apache Cassandra (Offline Queue)", dbType: "Wide-Column Ephemeral Storage", role: "طابور الرسائل المؤقتة غير المستلمة فقط؛ تُحذف فور استلام المستلم (ACK)", shardingKey: "recipient_user_id + message_timeuuid", consistency: "Eventual (Default TTL = 30 days)" },
              { dbName: "PostgreSQL / Spanner", dbType: "Relational Sharded", role: "دليل الهوية والمفاتيح العامة (Identity Keys & Pre-keys Pool) وحسابات المستخدمين", shardingKey: "hash(phone_number)", consistency: "Strong Consistency / Read Replicas" },
              { dbName: "Redis Cluster (Presence & Routing)", dbType: "In-Memory Hash & Bitmaps", role: "دليل توجيه الاتصالات (User -> Gateway Server IP) وحالة التواجد اللحظية (Online/Offline)", shardingKey: "user_id", consistency: "In-Memory Fast Lookup (< 1ms)" }
            ],
            replicationStrategy: "تشفير كامل للبيانات المخزنة والمتحركة؛ لا يمتلك السيرفر أي مفاتيح لفك تشفير النصوص أو الوسائط."
          },
          databaseSchemas: [
            {
              tableName: "user_e2ee_keys",
              engine: "PostgreSQL (Key Directory)",
              description: "دليل المفاتيح العامة لبروتوكول Signal لتأسيس جلسات التشفير بين الطرفين.",
              columns: [
                { name: "user_id", type: "UUID", key: "PK", nullable: false, description: "معرف المستخدم" },
                { name: "phone_number", type: "VARCHAR(20)", key: "UNIQUE", nullable: false, description: "رقم الهاتف الدولي للمستخدم" },
                { name: "identity_key_public", type: "BYTEA", key: "NONE", nullable: false, description: "المفتاح العام لهوية المستخدم (Curve25519)" },
                { name: "signed_prekey_public", type: "BYTEA", key: "NONE", nullable: false, description: "المفتاح المسبق الموقع دورياً" },
                { name: "signed_prekey_sig", type: "BYTEA", key: "NONE", nullable: false, description: "توقيع المفتاح المسبق" },
                { name: "registration_id", type: "INT", key: "NONE", nullable: false, description: "معرف تثبيت التطبيق" },
                { name: "updated_at", type: "TIMESTAMPTZ", key: "NONE", nullable: false, description: "تاريخ آخر تحديث للمفاتيح" }
              ],
              ddl: `CREATE TABLE user_e2ee_keys (
    user_id UUID PRIMARY KEY,
    phone_number VARCHAR(20) UNIQUE NOT NULL,
    identity_key_public BYTEA NOT NULL,
    signed_prekey_public BYTEA NOT NULL,
    signed_prekey_sig BYTEA NOT NULL,
    registration_id INT NOT NULL,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX idx_e2ee_phone ON user_e2ee_keys(phone_number);`
            },
            {
              tableName: "offline_messages",
              engine: "Apache Cassandra (Ephemeral CQL)",
              description: "طابور الرسائل المشفرة غير المستلمة؛ تُحذف ذرياً بمجرد تأكيد التسليم بهاتف المستلم.",
              columns: [
                { name: "recipient_id", type: "UUID", key: "PARTITION_KEY", nullable: false, description: "معرف المستخدم المستلم للرسالة" },
                { name: "message_id", type: "TIMEUUID", key: "CLUSTERING_KEY", nullable: false, description: "معرف الرسالة الزمني (مرتب تصاعدياً)" },
                { name: "sender_id", type: "UUID", key: "NONE", nullable: false, description: "معرف المرسل" },
                { name: "encrypted_payload", type: "BLOB", key: "NONE", nullable: false, description: "الحمولة المشفرة بـ AES-256-GCM (لا يمكن للسيرفر قراءتها)" },
                { name: "message_type", type: "TINYINT", key: "NONE", nullable: false, description: "نوع الرسالة (1: نص, 2: صورة, 3: صوت, 4: وثيقة)" },
                { name: "created_at", type: "TIMESTAMP", key: "NONE", nullable: false, description: "وقت إرسال الرسالة" }
              ],
              ddl: `CREATE TABLE offline_messages (
    recipient_id UUID,
    message_id TIMEUUID,
    sender_id UUID,
    encrypted_payload BLOB,
    message_type TINYINT,
    created_at TIMESTAMP,
    PRIMARY KEY (recipient_id, message_id)
) WITH default_time_to_live = 2592000; -- 30 Days Auto Eviction`
            },
            {
              tableName: "redis_gateway_routing",
              engine: "Redis Cluster (Routing Map)",
              description: "خريطة توجيه الجلسات الحية التي تربط كل مستخدم بسيرفر الـ Gateway المتصل به حالياً.",
              columns: [
                { name: "user_session_key", type: "HASH", key: "PK", nullable: false, description: "session:user:{user_id} -> { gateway_ip, socket_descriptor, connected_at }" },
                { name: "presence_bitmap_key", type: "BITMAP", key: "FAST_BIT", nullable: false, description: "presence:shard_{n} -> بت يمثل حالة (متصل = 1 / غير متصل = 0)" }
              ],
              ddl: `-- Redis Session Registration on Connection Open:
HSET session:user:u_89102 gateway_ip "10.0.12.44" socket_id 8092 connected_at 1714520930
EXPIRE session:user:u_89102 60
-- Set Online Presence Bit:
SETBIT presence:shard_0 89102 1`
            }
          ],
          dataExchange: {
            protocolMatrix: [
              { layer: "App ↔ Chat Gateway", protocol: "Persistent TCP (Noise Protocol / WSS)", format: "Compact Binary Frames (< 50 bytes header)", latencyTarget: "< 30ms", rationale: "اتصال خفيف جداً يقلل استهلاك بطارية الهاتف ويسمح بملايين الاتصالات المتزامنة لكل خادم Erlang." },
              { layer: "Gateway ↔ Gateway (Inter-server)", protocol: "Distributed Erlang Actor Mesh / gRPC", format: "Binary Actor Messaging", latencyTarget: "< 5ms", rationale: "تمرير الرسائل المباشر بين سيرفرات البوابة دون المرور بأي قاعدة بيانات عند اتصال الطرفين." },
              { layer: "Media Transfer (Photos/Videos)", protocol: "HTTPS Chunked Direct to Encrypted CDN", format: "AES-GCM-256 Ciphertext Encrypted Media", latencyTarget: "< 500ms", rationale: "رفع الوسائط مشفرة بالكامل بمفتاح سري يتداوله الطرفان فقط عبر قناة المحادثة." }
            ],
            apiContractSample: {
              title: "إطار رسالة المحادثة المشفرة (Encrypted Chat Message Binary Frame)",
              type: "WebSocket / TCP Binary Frame (Noise Protocol)",
              snippet: `{
  "msg_id": "8fa1b930-072a-11ef-9345-0242ac120002",
  "sender_id": "usr_99102938",
  "recipient_id": "usr_10293847",
  "cipher_type": "SIGNAL_DOUBLE_RATCHET_V3",
  "ephemeral_public_key": "3a09e81b...f01",
  "ratchet_step": 14,
  "ciphertext_payload": "ZDU4YjVhOGViMmY4OGY2YzM3ZWEwMmU0MjM4OWI3... (AES-256-GCM)",
  "auth_tag": "9f82ab410d8a4e12",
  "timestamp": 1714520935000
}`
            },
            e2eRequestFlow: [
              { stepNumber: 1, actor: "Sender Client", action: "تشفير الرسالة على الهاتف بـ Signal Double Ratchet", component: "Device Local Crypto", protocol: "AES-256-GCM", detail: "يشفر الهاتف الرسالة بمفتاح محادثة متجدد لا يغادر الجهاز ولا يعلمه السيرفر إطلاقاً." },
              { stepNumber: 2, actor: "Sender Phone", action: "إرسال الإطار المشفر عبر اتصال TCP الدائم", component: "Chat Gateway (Erlang)", protocol: "TCP Noise Protocol", detail: "يستلم خادم الـ Gateway الإطار ويفحص معرف المستلم لتحديد وجهة التوجيه." },
              { stepNumber: 3, actor: "Chat Gateway", action: "الاستعلام اللحظي عن مكان المستلم في Redis", component: "Redis Routing Cache", protocol: "HGET session", detail: "يبحث السيرفر عن سيرفر البوابة المتصل به المستلم في أقل من 1ms." },
              { stepNumber: 4, actor: "Gateway Routing", action: "التوجيه المباشر للمستلم إذا كان متصلاً", component: "Recipient Gateway", protocol: "Erlang Actor Msg", detail: "إذا كان المستلم Online، تُدفع الرسالة مباشرة لهاتفه دون لمس أي قاعدة بيانات." },
              { stepNumber: 5, actor: "Offline Buffer", action: "حفظ مؤقت في Cassandra في حال عدم الاتصال", component: "Cassandra (TTL 30d)", protocol: "CQL Write", detail: "إذا كان المستلم Offline، تُحفظ الرسالة بطابور Cassandra ويُرسل Push Notification (APNS/FCM)." },
              { stepNumber: 6, actor: "Recipient Client", action: "إرسال إشعار الاستلام وحذف الرسالة نهائياً", component: "Sender & Cassandra", protocol: "Delivery ACK", detail: "فور وصول الرسالة لهاتف المستلم وفك تشفيرها، يرسل ACK فيحذفها السيرفر فوراً وتظهر علامتا الصح (✓✓)." }
            ]
          }
        },

        {
          id: "challenge-netflix",
          appName: "Netflix (التوصيات الذكية والبث المخصص)",
          tag: "Personalization & Edge Delivery",
          badge: "Open Connect & Bandits",
          diagramId: "netflixArchitecture",
          overview: "تصميم منصة البث الرائدة عالمياً لتقديم توصيات وأغلفة أفلام مخصصة لكل مستخدم وبث أكثر من 95% من الفيديو عبر أجهزة CDN داخل مزودي الإنترنت المحليين.",
          targetSpecs: {
            throughput: "Millions of concurrent streams",
            bandwidth: "Tens of Terabits / sec",
            personalization: "Real-time Multi-Armed Bandits",
            availability: "99.999%"
          },
          trainingComponents: [
            { name: "Zuul API Edge Gateway", role: "بوابة ذكية لإدارة المسارات وفحص الصلاحيات وقطع الدوائر الكهربائية (Circuit Breaker)." },
            { name: "Personalized ML Ranker", role: "نماذج تعلم آلة تختار حتى صورة غلاف الفيلم بناءً على اهتمامات المستخدم الفردية." },
            { name: "EVCache + ScyllaDB", role: "تخزين مؤقت هائل في الذاكرة لحفظ إشارات استئناف المشاهدة (Playback Bookmarks) لكل ثانية." },
            { name: "Open Connect Appliances", role: "خوادم كاش مخصصة يتم تركيبها مجاناً داخل مراكز شركات الاتصالات في كافة دول العالم." }
          ],
          questionsToSolve: [
            {
              step: "1. توصيل الفيديو لملايين المشاهدين في وقت واحد",
              options: [
                { text: "بث كافة الفيديوهات من مركز بيانات مركزي في الولايات المتحدة", correct: false, reason: "مستحيل فيزيائياً بسبب اختناق كابلات الإنترنت الدولية وارتفاع زمن الاستجابة." },
                { text: "توزيع خوادم Open Connect داخل شركات الاتصالات المحلية وتنزيل الأفلام فيها ليلاً", correct: true, reason: "رائع! هذا يزيل 95% من الحمل عن شبكة الإنترنت العالمية ويضمن جودة 4K دون تقطيع." }
              ]
            },
            {
              step: "2. استئناف المشاهدة بدقة ثانية واحدة",
              options: [
                { text: "كتابة الـ Bookmark في RDBMS مع كل ثانية مشاهدة", correct: false, reason: "سيسقط قاعدة البيانات بملايين عمليات الكتابة المتزامنة في الثانية." },
                { text: "كتابة غير متزامنة في كاش EVCache بالذاكرة ثم تفريغ دفعات دورية في ScyllaDB", correct: true, reason: "صحيح! يضمن سرعة فائقة مع الحفاظ على البيانات." }
              ]
            }
          ],
          databaseArchitecture: {
            overview: "معمارية بث وتخصيص متعددة الأقاليم (Multi-Region Active-Active): تعتمد على كاش EVCache فائق السرعة في الذاكرة لتحديث مؤشرات المشاهدة (Bookmarks) بالثواني، وقاعدة بيانات ScyllaDB/Cassandra المقسمة بملفات المستخدمين لتخزين تاريخ المشاهدة، وشبكة Open Connect CDN لتوزيع الفيديو محلياً داخل مزودي الخدمة (ISPs).",
            polyglotTiers: [
              { dbName: "EVCache (Distributed Memcached)", dbType: "In-Memory Key-Value", role: "تخزين إشارات تقدم المشاهدة اللحظية (Playback Bookmarks) والملفات النشطة", shardingKey: "account_id:profile_id", consistency: "Sub-millisecond In-Memory Reads/Writes" },
              { dbName: "ScyllaDB / Cassandra", dbType: "Wide-Column Distributed NoSQL", role: "سجل المشاهدات التاريخي، قوائم المشاهدة (My List)، وتفضيلات المستخدمين", shardingKey: "account_id + profile_id", consistency: "Eventual Consistency (QUORUM Reads/Writes)" },
              { dbName: "Open Connect Appliances (OCA CDN)", dbType: "Custom Edge Storage Hardware", role: "تخزين ملفات الفيديو المشفرة مسبقاً وتفريغها ليلاً داخل شبكات الـ ISP المحلية", shardingKey: "movie_id/bitrate/chunk.mp4", consistency: "Scheduled Nightly Proactive Caching" }
            ],
            replicationStrategy: "بث متزامن ونشط عبر 3 أقاليم سحابية (AWS Multi-Region Active-Active) لضمان استمرار البث حتى في حال انقطاع قارة كاملة."
          },
          databaseSchemas: [
            {
              tableName: "playback_bookmarks",
              engine: "EVCache (RAM) + ScyllaDB",
              description: "سجل استئناف المشاهدة بالثانية؛ يُكتب بالذاكرة ويُفرغ دورياً في ScyllaDB.",
              columns: [
                { name: "account_id", type: "UUID", key: "PARTITION_KEY", nullable: false, description: "معرف الحساب الرئيسي" },
                { name: "profile_id", type: "UUID", key: "PARTITION_KEY", nullable: false, description: "معرف الملف الشخصي داخل الحساب" },
                { name: "movie_id", type: "VARCHAR(20)", key: "CLUSTERING_KEY", nullable: false, description: "معرف الفيلم أو الحلقة" },
                { name: "bookmark_seconds", type: "INT", key: "NONE", nullable: false, description: "ثانية التوقف الحالية" },
                { name: "duration_seconds", type: "INT", key: "NONE", nullable: false, description: "إجمالي مدة الفيلم" },
                { name: "device_type", type: "VARCHAR(30)", key: "NONE", nullable: false, description: "نوع الجهاز (SmartTV, AppleTV, Android)" },
                { name: "updated_at", type: "TIMESTAMP", key: "NONE", nullable: false, description: "تاريخ آخر نبضة تشغيل" }
              ],
              ddl: `CREATE TABLE playback_bookmarks (
    account_id UUID,
    profile_id UUID,
    movie_id VARCHAR(20),
    bookmark_seconds INT,
    duration_seconds INT,
    device_type VARCHAR(30),
    updated_at TIMESTAMP,
    PRIMARY KEY ((account_id, profile_id), movie_id)
);`
            },
            {
              tableName: "user_viewing_history",
              engine: "ScyllaDB (Wide-Column)",
              description: "أرشيف تاريخ المشاهدات الكامل المستخدم لتدريب نماذج التوصية المخصصة.",
              columns: [
                { name: "account_id", type: "UUID", key: "PARTITION_KEY", nullable: false, description: "معرف الحساب" },
                { name: "profile_id", type: "UUID", key: "PARTITION_KEY", nullable: false, description: "معرف الملف الشخصي" },
                { name: "event_time", type: "TIMESTAMP", key: "CLUSTERING_KEY", nullable: false, description: "وقت المشاهدة (مرتب تنازلياً)" },
                { name: "movie_id", type: "VARCHAR(20)", key: "NONE", nullable: false, description: "معرف الفيلم" },
                { name: "completed_percent", type: "FLOAT", key: "NONE", nullable: false, description: "نسبة الإكمال (0.0 إلى 1.0)" },
                { name: "rating", type: "TINYINT", key: "NONE", nullable: true, description: "التقييم (Thumbs Up / Down)" }
              ],
              ddl: `CREATE TABLE user_viewing_history (
    account_id UUID,
    profile_id UUID,
    event_time TIMESTAMP,
    movie_id VARCHAR(20),
    completed_percent FLOAT,
    rating TINYINT,
    PRIMARY KEY ((account_id, profile_id), event_time)
) WITH CLUSTERING ORDER BY (event_time DESC);`
            },
            {
              tableName: "personalized_artwork_cache",
              engine: "EVCache / RocksDB",
              description: "تخزين خيارات أغلفة الأفلام المخصصة التي تم توقع جاذبيتها للمستخدم عبر Bandit ML.",
              columns: [
                { name: "cache_key", type: "STRING", key: "PK", nullable: false, description: "artwork:{profile_id}:{movie_id}" },
                { name: "image_url", type: "VARCHAR(300)", key: "NONE", nullable: false, description: "رابط الغلاف الأنسب لاهتمامات المستخدم" },
                { name: "predicted_affinity_score", type: "FLOAT", key: "NONE", nullable: false, description: "درجة التطابق المتوقعة من نموذج الذكاء الاصطناعي" }
              ],
              ddl: `-- EVCache Key-Value Mapping:
Key: "art:p_90128:mov_stranger_things_s4"
Value: {
  "hero_artwork_url": "https://occ-0-2773-2774.1.nflxso.net/art/hero_action_v2.webp",
  "predicted_ctr": 0.884,
  "model_ver": "bandit_v4.8"
}`
            }
          ],
          dataExchange: {
            protocolMatrix: [
              { layer: "Client App ↔ Zuul Edge Gateway", protocol: "HTTPS / HTTP/2 + TLS 1.3", format: "JSON + DRM License Exchange", latencyTarget: "< 100ms", rationale: "توجيه ذكي وفحص الصلاحيات مع حماية الدوائر الكهربائية (Hystrix Circuit Breaker)." },
              { layer: "Client App ↔ Open Connect Appliance (CDN)", protocol: "HTTP/2 Byte-Range Progressive", format: "Direct Encrypted Video Bitstream", latencyTarget: "< 20ms", rationale: "سحب مباشر لملفات الفيديو من خوادم الكاش الموجودة داخل نفس شركة الاتصالات (ISP)." },
              { layer: "Microservices ↔ ML Ranker", protocol: "gRPC over HTTP/2", format: "Protobuf Vector Payloads", latencyTarget: "< 30ms", rationale: "حساب التوصيات وترتيب الصفوف والأغلفة في زمن فوري قبل عرض الشاشة الرئيسية." }
            ],
            apiContractSample: {
              title: "عقد استجابة توجيه البث (CDN Playback Routing API Contract)",
              type: "POST /v2/playback/route",
              snippet: `{
  "movie_id": "80057281",
  "profile_id": "prof_991823",
  "preferred_cdn_nodes": [
    {
      "oca_server_ip": "196.218.44.12",
      "isp_name": "Telecom Egypt (TE Data Local OCA)",
      "latency_score_ms": 8,
      "manifest_url": "https://ipv4-c001-cai001-ix.oca.nflxvideo.net/manifest.mpd"
    },
    {
      "oca_server_ip": "156.210.12.90",
      "isp_name": "Orange Egypt OCA",
      "latency_score_ms": 14,
      "manifest_url": "https://ipv4-c002-cai001-ix.oca.nflxvideo.net/manifest.mpd"
    }
  ],
  "drm_license_token": "eyJhbGciOiJSUzI1NiIsIn...",
  "resume_offset_seconds": 1420
}`
            },
            e2eRequestFlow: [
              { stepNumber: 1, actor: "Smart TV / App", action: "فتح التطبيق وإرسال معرف الملف الشخصي", component: "Zuul Edge Gateway", protocol: "HTTPS / HTTP/2", detail: "تستقبل بوابة Zuul الطلب وتوجهه لموزع التوصيات الشخصية." },
              { stepNumber: 2, actor: "Recommendation Engine", action: "توليد الصفوف المخصصة واختيار أغلفة الأفلام", component: "ML Bandit Ranker", protocol: "gRPC", detail: "يقوم النموذج باختيار الأفلام وترتيبها واختيار الصورة الأنسب بناءً على اهتمامات المستخدم." },
              { stepNumber: 3, actor: "Viewer", action: "الضغط على زر التشغيل (Play)", component: "Playback Director", protocol: "HTTPS API", detail: "يفحص النظام حقوق الـ DRM ويحدد أقرب خادم Open Connect (OCA) داخل مزود الإنترنت للمستخدم." },
              { stepNumber: 4, actor: "Local ISP OCA", action: "بث محتوى الفيديو بدقة 4K من الكاش المحلي", component: "Open Connect CDN", protocol: "HTTP/2 Byte-Range", detail: "يبدأ البث الفوري من السيرفر المحلي داخل مصر دون استهلاك كابلات الإنترنت الدولية." },
              { stepNumber: 5, actor: "Video Player", action: "إرسال نبضات تقدم المشاهدة كل ثانية", component: "EVCache (RAM)", protocol: "Async Heartbeat", detail: "تحديث ثانية التوقف الحالية في كاش الذاكرة EVCache لتحقيق استئناف فوري من أي جهاز آخر." },
              { stepNumber: 6, actor: "Data Pipeline", action: "تفريغ دفعات السجلات في ScyllaDB وتدريب الذكاء الاصطناعي", component: "Kafka & ScyllaDB", protocol: "Kafka Batch Event", detail: "تحديث تاريخ المشاهدات في ScyllaDB وتغذية نماذج تعلم الآلة بسلوك المشاهدة." }
            ]
          }
        },

        {
          id: "challenge-tiktok",
          appName: "TikTok (توصيات الفيديو القصير اللحظية)",
          tag: "AI Recommendation & Fast Feed",
          badge: "Vector DB & Flink",
          diagramId: "tiktokArchitecture",
          overview: "تصميم خلاصة For You التكيفية التي تتعلم اهتمامات المستخدم خلال ثوانٍ وتوفر سحباً لانهائياً دون أي تأخير مع تحميل مسبق للأجزاء الأولى.",
          targetSpecs: {
            throughput: "Millions of swipes / sec",
            latency: "< 50ms Ranking",
            streaming: "Byte-Range Progressive Video",
            availability: "99.999%"
          },
          trainingComponents: [
            { name: "Real-time Engagement Stream", role: "Kafka Topics تستقبل نبضات المشاهدة، الإعجاب، وإعادة المشاهدة (Loops)." },
            { name: "Flink Real-time Feature Store", role: "تحديث مصفوفة اهتمامات المستخدم في Redis خلال أقل من 500ms من مشاهدة الفيديو." },
            { name: "Vector Candidate Retriever", role: "استرجاع أفضل 1,000 فيديو مرشح من بين 100 مليون فيديو عبر فهارس HNSW." },
            { name: "Deep Neural Ranker (DNN)", role: "نموذج ذكاء اصطناعي متعدد المهام يتوقع احتمالية الإعجاب والمشاركة والإكمال." },
            { name: "Edge Prefetch Engine", role: "تحميل أول 3 ثوانٍ من الفيديوهات القادمة في خلفية التطبيق لتوفير سحب فوري." }
          ],
          questionsToSolve: [
            {
              step: "1. تحديث خوارزمية التوصية باهتمامات المستخدم اللحظية",
              options: [
                { text: "إعادة تدريب النموذج بالكامل في مهمة ليلية (Nightly Batch)", correct: false, reason: "توصيات بطيئة لن تلتقط اهتمام المستخدم الحالي في نفس جلسة التصفح." },
                { text: "بث أحداث التفاعل لـ Kafka وتحديث ميزات المستخدم بالـ Flink في أقل من 500ms", correct: true, reason: "ممتاز! هذا هو سر الإدمان والسرعة الفائقة لخوارزمية تيك توك." }
              ]
            },
            {
              step: "2. منع تقطيع الفيديو أثناء السحب السريع (Swipe)",
              options: [
                { text: "تنزيل كل فيديو بالكامل قبل عرضه للمستخدم", correct: false, reason: "يهدر باقة الإنترنت ويبطئ التمرير الأولي بشكل ملحوظ." },
                { text: "تقسيم الفيديو لـ Chunks وتحميل أول 3 ثوانٍ فقط من الفيديوهات الثلاثة القادمة", correct: true, reason: "صحيح! يضمن تشغيل الفيديو في الصفر ثانية مع ترشيد استهلاك البيانات." }
              ]
            }
          ],
          databaseArchitecture: {
            overview: "معمارية ذكاء اصطناعي لحظية فائقة السرعة: تعتمد على مصفوفة ميزات بالذاكرة (Real-time Feature Store) تُحدث بواسطة Apache Flink في أقل من نصف ثانية، وقاعدة بيانات متجهات (Vector Database HNSW) لاسترجاع أفضل 1000 فيديو مرشح من بين 100 مليون فيديو، مع محرك ScyllaDB لحفظ البيانات الوصفية للفيديوهات ومقاطع الصوت.",
            polyglotTiers: [
              { dbName: "Redis + Apache Flink Feature Store", dbType: "In-Memory Real-Time Feature Store", role: "تخزين مصفوفة اهتمامات وسلوك المستخدم اللحظي خلال آخر 10 دقائق من التصفح", shardingKey: "user_id", consistency: "Real-time Streaming Updates (< 500ms)" },
              { dbName: "Vector DB (Qdrant / Milvus / HNSW)", dbType: "High-Dimensional Vector Index", role: "البحث الدلالي التقريبي (ANN) في فضاء 512-dim لاسترجاع الفيديوهات الشبيهة باهتمامات المستخدم", shardingKey: "vector_cluster_id", consistency: "Sub-10ms Approximate Nearest Neighbor" },
              { dbName: "ScyllaDB / MongoDB", dbType: "Distributed Document Store", role: "بيانات الفيديوهات، ملفات الصوت، الهاشتاج، والمؤلفين", shardingKey: "video_id", consistency: "Eventual Consistency / High Read Throughput" },
              { dbName: "ClickHouse + Kafka", dbType: "Real-Time Telemetry Stream", role: "استيعاب مليارات تفاعلات المشاهدة، الإعجاب، والتخطي (Skip/Loop Telemetry)", shardingKey: "toYYYYMM(timestamp)", consistency: "Append-only High Throughput" }
            ],
            replicationStrategy: "تحديث فوري للميزات بالذاكرة مع تدريب متواصل للنماذج العصبية ونشر الأوزان المحدثة كل دقائق."
          },
          databaseSchemas: [
            {
              tableName: "user_realtime_features",
              engine: "Redis Cluster (Feature Store)",
              description: "مصفوفة سلوك المستخدم اللحظية المستخدمة كمدخلات لنموذج التوصية العميق (DNN).",
              columns: [
                { name: "user_feature_key", type: "HASH", key: "PK", nullable: false, description: "features:user:{user_id}" },
                { name: "tag_affinity_weights", type: "JSON", key: "NONE", nullable: false, description: "أوزان اهتمام المستخدم بالوسوم مع عامل التضاؤل الزمني (Time Decay)" },
                { name: "sound_affinity_vector", type: "BLOB", key: "NONE", nullable: false, description: "متجه تفضيلات الأصوات والموسيقى" },
                { name: "skip_rate_last_50", type: "FLOAT", key: "NONE", nullable: false, description: "معدل تخطي الفيديوهات في آخر 50 تمريرة" },
                { name: "last_loop_video_id", type: "BIGINT", key: "NONE", nullable: true, description: "آخر فيديو قام المستخدم بإعادة مشاهدته مراراً" },
                { name: "updated_at_ms", type: "BIGINT", key: "NONE", nullable: false, description: "وقت آخر تحديث بالمللي ثانية بواسطة Flink" }
              ],
              ddl: `-- Redis Feature Store Hash Snapshot:
HSET features:user:usr_991823 
  tag_weights '{"gaming": 0.89, "standup_comedy": 0.74, "tech_ai": 0.96, "cooking": 0.12}'
  skip_rate_50 0.18
  avg_watch_time_pct 0.82
  last_updated 1714520935120
EXPIRE features:user:usr_991823 86400`
            },
            {
              tableName: "video_embeddings_vector",
              engine: "Vector DB (Qdrant Collection)",
              description: "فهرس متجهات الفيديوهات عالية الأبعاد (512-dim) المستخرجة بنماذج الـ Multimodal Transformer.",
              columns: [
                { name: "id", type: "UINT64", key: "PK", nullable: false, description: "معرف السجل النقطي" },
                { name: "vector", type: "FLOAT[512]", key: "HNSW_INDEX", nullable: false, description: "متجه التمثيل البصري والصوتي للفيديو" },
                { name: "payload.video_id", type: "BIGINT", key: "INDEX", nullable: false, description: "معرف الفيديو الأصلي" },
                { name: "payload.author_id", type: "BIGINT", key: "NONE", nullable: false, description: "معرف صانع المحتوى" },
                { name: "payload.tags", type: "ARRAY[STRING]", key: "FILTER", nullable: false, description: "وسوم الفيديو للتصفية المسبقة" },
                { name: "payload.freshness_score", type: "FLOAT", key: "FILTER", nullable: false, description: "درجة حداثة الفيديو لمنع عرض محتوى قديم" }
              ],
              ddl: `-- Qdrant Vector Collection Schema:
PUT /collections/tiktok_video_embeddings
{
  "vectors": {
    "size": 512,
    "distance": "Cosine"
  },
  "hnsw_config": {
    "m": 16,
    "ef_construct": 100,
    "full_scan_threshold": 10000
  }
}`
            },
            {
              tableName: "feed_interactions_stream",
              engine: "Kafka -> ClickHouse",
              description: "جدول استيعاب تفاعلات المشاهدة الدقيقة لكل فيديو بالمللي ثانية.",
              columns: [
                { name: "event_id", type: "UUID", key: "PK", nullable: false, description: "معرف الحدث" },
                { name: "user_id", type: "BIGINT", key: "NONE", nullable: false, description: "معرف المستخدم" },
                { name: "video_id", type: "BIGINT", key: "ORDER_BY", nullable: false, description: "معرف الفيديو" },
                { name: "watch_duration_ms", type: "INT", key: "NONE", nullable: false, description: "مدة المشاهدة الفعلية بالمللي ثانية" },
                { name: "video_duration_ms", type: "INT", key: "NONE", nullable: false, description: "إجمالي مدة الفيديو" },
                { name: "action", type: "VARCHAR(20)", key: "NONE", nullable: false, description: "نوع التفاعل (SKIP, FINISH, LOOP, LIKE, SHARE, COMMENT)" },
                { name: "timestamp", type: "DateTime64(3)", key: "PARTITION", nullable: false, description: "وقت التفاعل بالمللي ثانية" }
              ],
              ddl: `CREATE TABLE feed_interactions_stream (
    event_id UUID,
    user_id BIGINT,
    video_id BIGINT,
    watch_duration_ms INT,
    video_duration_ms INT,
    action Enum8('SKIP'=1, 'FINISH'=2, 'LOOP'=3, 'LIKE'=4, 'SHARE'=5, 'COMMENT'=6),
    timestamp DateTime64(3)
) ENGINE = MergeTree()
PARTITION BY toYYYYMM(timestamp)
ORDER BY (video_id, user_id, timestamp);`
            }
          ],
          dataExchange: {
            protocolMatrix: [
              { layer: "Mobile App ↔ Edge API Gateway", protocol: "HTTP/3 over QUIC", format: "Protobuf Feed Request", latencyTarget: "< 40ms", rationale: "بروتوكول QUIC يمنع Head-of-Line Blocking ويتيح جلب الفيديوهات المتزامنة بسرعة قصوى." },
              { layer: "Candidate Retriever ↔ Vector DB", protocol: "gRPC", format: "Protobuf Vector Query (HNSW ANN)", latencyTarget: "< 10ms", rationale: "استرجاع سريع لأفضل 1000 فيديو مرشح من بين 100 مليون فيديو في أجزاء من الثانية." },
              { layer: "Telemetry Pings ↔ Ingestion Pipeline", protocol: "WebSocket / HTTP/2 Batch POST", format: "Binary Compact Telemetry Stream", latencyTarget: "< 25ms", rationale: "إرسال نبضات تفاعل المستخدم (Watch time, loops) فوراً دون التأثير على أداء الهاتف." }
            ],
            apiContractSample: {
              title: "عقد استجابة خلاصة For You (TikTok Feed Batch API Contract)",
              type: "GET /api/v2/feed?count=8",
              snippet: `{
  "status_code": 0,
  "feed_list": [
    {
      "video_id": "7361829103912093",
      "author_name": "@tech_lead_alex",
      "caption": "How System Design actually works in Big Tech #coding #architecture",
      "video_stream_url": "https://v16-webapp-prime.tiktokcdn.com/stream/73618291.m4s",
      "prefetch_chunk_url": "https://v16-webapp-prime.tiktokcdn.com/stream/73618291_001_3s.m4s",
      "cover_image_url": "https://p16-sign-va.tiktokcdn.com/cover_73618291.webp",
      "duration_ms": 34000,
      "sound_title": "Original Sound - Tech Beats",
      "metrics": {
        "predicted_p_finish": 0.91,
        "predicted_p_like": 0.68
      }
    }
  ]
}`
            },
            e2eRequestFlow: [
              { stepNumber: 1, actor: "User App", action: "سحب الشاشة للأعلى (Swipe Up)", component: "Mobile Client", protocol: "HTTP/3 / QUIC", detail: "يبدأ تشغيل الفيديو التالي فوراً من الذاكرة المخزنة مسبقاً (Prefetched Chunk)." },
              { stepNumber: 2, actor: "Engagement Stream", action: "إرسال نبضة مشاهدة الفيديو السابق لـ Kafka", component: "Kafka Event Cluster", protocol: "Binary Telemetry", detail: "إرسال إحصائية: شاهد المستخدم الفيديو السابق مرتين كاملتين (2 Loops) وأعجب به." },
              { stepNumber: 3, actor: "Apache Flink", action: "تحديث ميزات المستخدم بالذاكرة خلال 400ms", component: "Flink & Redis", protocol: "Stateful Stream", detail: "تحديث أوزان الوسوم ومصفوفة الاهتمامات اللحظية فوراً في Redis Feature Store." },
              { stepNumber: 4, actor: "Candidate Retrieval", action: "استرجاع أفضل 1,000 فيديو عبر Vector DB", component: "Vector DB (HNSW)", protocol: "gRPC Vector Search", detail: "جلب الفيديوهات المرشحة الأقرب لمتجه اهتمامات المستخدم الحالي." },
              { stepNumber: 5, actor: "DNN Multi-Task Ranker", action: "ترتيب الفيديوهات بنموذج التعلم العميق", component: "AI Model Server", protocol: "TensorRT / GPU", detail: "توقع احتمالات التفاعل: $P(\\text{Like})$, $P(\\text{Finish})$, $P(\\text{Share})$ واختيار أفضل 8 فيديوهات." },
              { stepNumber: 6, actor: "Edge Prefetcher", action: "إرسال القائمة والتحميل المسبق لأول 3 ثوانٍ", component: "Edge CDN & Client", protocol: "Byte-Range Prefetch", detail: "يقوم التطبيق بتحميل أول 3 ثوانٍ من الفيديوهات الثلاثة القادمة لضمان سحب فوري مستمر." }
            ]
          }
        },

        {
          id: "challenge-ecommerce",
          appName: "Amazon / Flash Sale (المبيعات الخاطفة والمخزون)",
          tag: "High Concurrency & Flash Sales",
          badge: "Atomic Locks & Virtual Queue",
          diagramId: "ecommerceArchitecture",
          overview: "تصميم منصة لبيع 100,000 سلعة نادرة في الجمعة البيضاء لمليون متسوق متزامن في أقل من دقيقة دون بيع أي قطعة مرتين أو انهيار بوابات الدفع.",
          targetSpecs: {
            throughput: "1,000,000 concurrent buyers",
            inventoryLock: "100k items in 60s",
            dataIntegrity: "Zero Overselling (Zero Double-Booking)",
            availability: "100% during sale window"
          },
          trainingComponents: [
            { name: "Virtual Waiting Room", role: "Cloudflare Turnstile وحاجز انتظار يمرر المشترين بمعدل ثابت يطابق سعة النظام." },
            { name: "Redis In-Memory Stock Lock", role: "تنفيذ DECRBY ذري عبر نصوص Lua في الذاكرة لتخصيص رمز حجز مؤقت لمدة 10 دقائق." },
            { name: "Transactional Outbox", role: "حفظ أمر الشراء والحدث في نفس المعاملة الذرية بـ PostgreSQL مع CDC عبر Debezium." },
            { name: "Saga Payment Orchestrator", role: "تنسيق استدعاء Stripe API وإلغاء حجز المخزون آلياً عند فشل الدفع." }
          ],
          questionsToSolve: [
            {
              step: "1. حماية النظام من طوفان المليون طلب في الثانية الأولى",
              options: [
                { text: "تمرير جميع الطلبات فوراً إلى خوادم التطبيقات وقاعدة البيانات", correct: false, reason: "كارثة حتمية تؤدي إلى انهيار الخوادم بالكامل (Cascading Failure)." },
                { text: "وضع غرفة انتظار افتراضية (Virtual Queue) مع فحص البوتات وتمرير دفعات متوازنة", correct: true, reason: "ممتاز! يحمي خوادم الدفع ويحافظ على استقرار النظام 100%." }
              ]
            },
            {
              step: "2. خصم المخزون دون بيع مزدوج",
              options: [
                { text: "قفل السجل في MySQL بـ SELECT FOR UPDATE", correct: false, reason: "الـ Row Lock يسبب اختناقاً هائلاً وطوابير انتظار بطيئة جداً في قاعدة البيانات." },
                { text: "خصم ذري في Redis بنص Lua وإعطاء رمز حجز لمدة 10 دقائق للدفع", correct: true, reason: "الاختيار الهندسي المثالي المتبع في أمازون وشوبيفاي!" }
              ]
            }
          ],
          databaseArchitecture: {
            overview: "معمارية صمود فائقة التزامن للمبيعات الخاطفة: عزل قواعد البيانات العلائقية تماماً عن طوفان الطلبات الأولي باستخدام Redis Cluster مع نصوص Lua الذرية للخصم بالذاكرة وإصدار رموز الحجز المؤقتة (10-Minute Reservations)، مع نمط Transactional Outbox بـ PostgreSQL و Debezium CDC لتنسيق الدفع والشحن عبر Kafka دون أي بيع مزدوج إطلاقاً.",
            polyglotTiers: [
              { dbName: "Redis Cluster (Hot Inventory)", dbType: "In-Memory Atomic Engine", role: "إدارة المخزون الساخن لحظياً وحجزه ذرياً بنصوص Lua وإصدار Reservation Tokens", shardingKey: "sku_id", consistency: "Atomic In-Memory Guarantees (Zero Overselling)" },
              { dbName: "PostgreSQL (Orders & Transactional Outbox)", dbType: "Relational Sharded RDBMS", role: "حفظ أوامر الشراء المؤكدة وأحداث الـ Outbox في معاملة ACID ذرية واحدة", shardingKey: "user_id / order_id", consistency: "Strict Serializable ACID" },
              { dbName: "Apache Kafka + Debezium CDC", dbType: "Event-Driven Streaming Bus", role: "نقل أحداث الدفع والشحن وتحديث المخزون الفعلي بالمستودعات", shardingKey: "order_id", consistency: "At-Least-Once with Idempotent Consumer" }
            ],
            replicationStrategy: "Multi-AZ Sync Replication لقواعد بيانات الطلبات مع قراءة من التكرارات (Read Replicas) لصفحات المنتجات وتفريغ الكاش."
          },
          databaseSchemas: [
            {
              tableName: "redis_flash_stock_lua",
              engine: "Redis Cluster (Atomic Memory)",
              description: "هياكل بيانات Redis لإدارة عداد المخزون الساخن وحجزه ذرياً خلال أجزاء من المللي ثانية.",
              columns: [
                { name: "stock_key", type: "STRING", key: "ATOMIC_COUNTER", nullable: false, description: "stock:{sku_id} -> integer representing available items" },
                { name: "reservation_key", type: "HASH", key: "TTL_MUTEX", nullable: false, description: "reserve:{sku_id}:{token} -> { user_id, qty, expires_at } (TTL = 600s)" },
                { name: "user_limit_key", type: "STRING", key: "ANTI_HOARD", nullable: false, description: "user_claimed:{sku_id}:{user_id} -> 1 (منع نفس المستخدم من شراء أكثر من قطعة)" }
              ],
              ddl: `-- Lua Script for Atomic Stock Reservation:
local sku_id = KEYS[1]
local user_id = ARGV[1]
local qty = tonumber(ARGV[2])
local token = ARGV[3]

local claimed_key = "user_claimed:" .. sku_id .. ":" .. user_id
if redis.call("EXISTS", claimed_key) == 1 then
    return {err = "USER_ALREADY_PURCHASED"}
end

local stock = tonumber(redis.call("GET", "stock:" .. sku_id) or "0")
if stock >= qty then
    redis.call("DECRBY", "stock:" .. sku_id, qty)
    redis.call("SET", "reserve:" .. sku_id .. ":" .. token, user_id, "EX", 600)
    redis.call("SET", claimed_key, "1", "EX", 86400)
    return {ok = "RESERVED", token = token, remaining_stock = stock - qty}
else
    return {err = "OUT_OF_STOCK"}
end`
            },
            {
              tableName: "orders",
              engine: "PostgreSQL (Sharded by user_id)",
              description: "جدول طلبات الشراء المؤكدة مع ربط رمز الحجز المؤقت الصادر من Redis.",
              columns: [
                { name: "order_id", type: "UUID", key: "PK", nullable: false, description: "معرف الطلب الفريد" },
                { name: "user_id", type: "UUID", key: "INDEX", nullable: false, description: "معرف المشتري" },
                { name: "sku_id", type: "UUID", key: "NONE", nullable: false, description: "معرف المنتج المخصص بالبيع الخاطف" },
                { name: "quantity", type: "INT", key: "NONE", nullable: false, description: "الكمية المشتراة" },
                { name: "total_cents", type: "BIGINT", key: "NONE", nullable: false, description: "إجمالي المبلغ المطلوب بالقرش" },
                { name: "reservation_token", type: "VARCHAR(64)", key: "UNIQUE", nullable: false, description: "رمز الحجز المؤقت للتحقق من الصلاحية" },
                { name: "status", type: "VARCHAR(20)", key: "INDEX", nullable: false, description: "الحالة (RESERVED, PAID, PAYMENT_FAILED, CANCELLED, SHIPPED)" },
                { name: "payment_id", type: "VARCHAR(64)", key: "NONE", nullable: true, description: "معرف الدفع الصادر من بوابة الدفع" },
                { name: "created_at", type: "TIMESTAMPTZ", key: "NONE", nullable: false, description: "تاريخ إنشاء الطلب" }
              ],
              ddl: `CREATE TABLE orders (
    order_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    sku_id UUID NOT NULL,
    quantity INT NOT NULL CHECK (quantity > 0),
    total_cents BIGINT NOT NULL,
    reservation_token VARCHAR(64) UNIQUE NOT NULL,
    status VARCHAR(20) NOT NULL DEFAULT 'RESERVED',
    payment_id VARCHAR(64),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX idx_orders_user ON orders(user_id);
CREATE INDEX idx_orders_status ON orders(status);`
            },
            {
              tableName: "transactional_outbox",
              engine: "PostgreSQL (Transactional CDC)",
              description: "جدول نمط الـ Outbox لتسجيل أحداث النظام ذرياً مع كتابة الطلب وإرسالها لـ Kafka عبر Debezium.",
              columns: [
                { name: "outbox_id", type: "UUID", key: "PK", nullable: false, description: "معرف الحدث" },
                { name: "aggregate_type", type: "VARCHAR(50)", key: "NONE", nullable: false, description: "نوع الكيان ('ORDER', 'PAYMENT')" },
                { name: "aggregate_id", type: "UUID", key: "NONE", nullable: false, description: "معرف الكيان (order_id)" },
                { name: "event_type", type: "VARCHAR(50)", key: "NONE", nullable: false, description: "نوع الحدث ('OrderReserved', 'OrderPaid')" },
                { name: "payload", type: "JSONB", key: "NONE", nullable: false, description: "بيانات الحدث الكاملة" },
                { name: "created_at", type: "TIMESTAMPTZ", key: "INDEX", nullable: false, description: "وقت إنشاء الحدث" }
              ],
              ddl: `CREATE TABLE transactional_outbox (
    outbox_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    aggregate_type VARCHAR(50) NOT NULL,
    aggregate_id UUID NOT NULL,
    event_type VARCHAR(50) NOT NULL,
    payload JSONB NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
-- Debezium captures changes from Postgres WAL log directly`
            }
          ],
          dataExchange: {
            protocolMatrix: [
              { layer: "Buyer ↔ Virtual Queue Room", protocol: "Cloudflare Turnstile / Edge Waiting Room", format: "Queue Pass Cookie + PoW Token", latencyTarget: "< 50ms Edge", rationale: "فلترة روبوتات الشراء الآلي وتمرير المشترين بمعدل ثابت يطابق سعة بوابات الدفع (5,000/s)." },
              { layer: "API Gateway ↔ Redis Lock Cluster", protocol: "Redis Serialization Protocol (RESP3)", format: "Atomic Lua Script", latencyTarget: "< 2ms", rationale: "خصم فوري للمخزون في الذاكرة وإصدار رمز حجز مؤقت لمدة 10 دقائق." },
              { layer: "Order Service ↔ Payment Gateway", protocol: "HTTPS / REST with Idempotency Key", format: "JSON to Stripe / Bank Gateway", latencyTarget: "< 1200ms", rationale: "تنفيذ الخصم المالي الآمن مع ضمان عدم تكرار الخصم في حال انقطاع الشبكة." },
              { layer: "Transactional Outbox ↔ Kafka", protocol: "Debezium CDC (Postgres WAL)", format: "Avro Event Stream", latencyTarget: "< 15ms", rationale: "ضمان نشر أحداث الشراء المؤكدة بنسبة 100% دون أي فجوات بين قاعدة البيانات والـ Broker." }
            ],
            apiContractSample: {
              title: "عقد تأكيد حجز المخزون الفوري (Flash Stock Reservation API Contract)",
              type: "POST /v1/flash-sale/reserve",
              snippet: `{
  "headers": {
    "X-Queue-Token": "jwt_edge_pass_9921039",
    "X-Idempotency-Key": "req_flash_01928374"
  },
  "body": {
    "sku_id": "sku_ps5_limited_edition",
    "quantity": 1,
    "user_id": "usr_77182930"
  },
  "response": {
    "status": "RESERVED_SUCCESS",
    "reservation_token": "res_tok_99ab281c0091",
    "expires_in_seconds": 600,
    "payment_checkout_url": "/checkout/res_tok_99ab281c0091"
  }
}`
            },
            e2eRequestFlow: [
              { stepNumber: 1, actor: "Million Buyers", action: "الضغط على زر الشراء فور بدء التخفيض", component: "Edge Virtual Queue", protocol: "Cloudflare Turnstile", detail: "تمسك غرفة الانتظار المليون طلب، وتمرر دفعات متوازنة (5,000 متسوق/ثانية) بعد فحص البوتات." },
              { stepNumber: 2, actor: "API Gateway", action: "تنفيذ نص Lua الذري على Redis Cluster", component: "Redis Cluster", protocol: "Redis Lua (RESP)", detail: "فحص رصيد المخزون، وخصم الكمية ذرياً (DECRBY)، وتوليد رمز حجز مؤقت لمدة 10 دقائق." },
              { stepNumber: 3, actor: "Redis Engine", action: "الرد الفوري بالنجاح أو نفاد الكمية في < 2ms", component: "In-Memory Cache", protocol: "Fast Return", detail: "إذا نفد المخزون، يُرد على المتسوق فوراً 'Sold Out' دون إرسال أي استعلام لقواعد البيانات." },
              { stepNumber: 4, actor: "Order Service", action: "كتابة الطلب وسجل الـ Outbox في معاملة واحدة", component: "PostgreSQL (ACID)", protocol: "Single Transaction", detail: "حفظ سجل الطلب بحالة RESERVED وسجل الـ Outbox معاً في PostgreSQL." },
              { stepNumber: 5, actor: "Debezium CDC", action: "التقاط حدث الـ Outbox وبثه لطابور Kafka", component: "Kafka Event Bus", protocol: "CDC Streaming", detail: "نقل حدث OrderCreated إلى منسق الدفع (Saga Payment Orchestrator) للشحن المالي." },
              { stepNumber: 6, actor: "Payment Orchestrator", action: "خصم البطاقة البنكية وتثبيت الشراء نهائياً", component: "Payment Gateway", protocol: "HTTPS / REST", detail: "إذا تم الدفع -> تحديث الطلب إلى PAID وإبلاغ المستودع. وإذا فشل أو انقضت الـ 10 دقائق -> إعادة السلعة للمخزون ذرياً في Redis." }
            ]
          }
        }
      ]
    },

    {
      id: "module-9",
      number: "9",
      title: "Interactive Code Lab — مختبر الأكواد ومحاكي الخوارزميات التفاعلي",
      subtitle: "محرر برمجي مباشر لتشغيل وتجربة خوارزميات تصميم النظم الموزعة (LRU Cache, Load Balancers, Rate Limiters, Consistent Hashing, Bloom Filters, Sharding) مع إمكانية تعديل الأكواد ومشاهدة النتائج الحية.",
      isCodeLab: true,
      algorithms: [
        {
          id: "algo-lru",
          name: "LRU Cache (Least Recently Used)",
          category: "Caching & Eviction",
          badge: "O(1) Hash + Doubly Linked List",
          description: "تطبيق متكامل لذاكرة الكاش LRU باستخدام Doubly-Linked List مع Hash Map لتحقيق عمليات Get و Put في زمن ثابت O(1)، مع تتبع إحصائيات الـ Hit Rate وإخلاء المفاتيح القديمة تلقائياً.",
          code: `// ============================================================================
// 1. تطبيق LRU Cache (Doubly Linked List + Hash Map) - سرعة O(1)
// ============================================================================

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map(); // key -> Node
    this.head = new Node(0, 0); // الأكثر استخداماً (MRU)
    this.tail = new Node(0, 0); // الأقل استخداماً (LRU)
    this.head.next = this.tail;
    this.tail.prev = this.head;
    
    this.stats = { hits: 0, misses: 0, evictions: 0, total: 0 };
  }

  _remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  _add(node) {
    node.next = this.head.next;
    node.next.prev = node;
    this.head.next = node;
    node.prev = this.head;
  }

  get(key) {
    this.stats.total++;
    if (this.cache.has(key)) {
      this.stats.hits++;
      const node = this.cache.get(key);
      this._remove(node);
      this._add(node); // نقله للمقدمة كأحدث عنصر تم الوصول إليه
      console.log(\`[GET] \${key} -> "\${node.value}" (✅ Cache HIT)\`);
      return node.value;
    }
    this.stats.misses++;
    console.log(\`[GET] \${key} -> غير موجود (❌ Cache MISS)\`);
    return null;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      const oldNode = this.cache.get(key);
      this._remove(oldNode);
    }
    const newNode = new Node(key, value);
    this._add(newNode);
    this.cache.set(key, newNode);

    console.log(\`[PUT] \${key} = "\${value}" (حجم الكاش الحالي: \${this.cache.size}/\${this.capacity})\`);

    // إخلاء العنصر الأقدم عند تجاوز السعة
    if (this.cache.size > this.capacity) {
      const lru = this.tail.prev;
      this._remove(lru);
      this.cache.delete(lru.key);
      this.stats.evictions++;
      console.log(\`[EVICT] ⚠️ تم إخلاء المفتاح الأقدم: "\${lru.key}" لتوفير المساحة\`);
    }
  }

  getKeysInOrder() {
    const keys = [];
    let curr = this.head.next;
    while (curr !== this.tail) {
      keys.push(\`\${curr.key}: "\${curr.value}"\`);
      curr = curr.next;
    }
    return keys;
  }
}

// ------------------- تشغيل سيناريو المحاكاة -------------------
console.log("🚀 بدء محاكاة LRU Cache بسعة 3 عناصر:");
const lru = new LRUCache(3);

lru.put("user_101", "أحمد علي");
lru.put("user_102", "سارة حسن");
lru.put("user_103", "عمر خالد");

lru.get("user_101"); // قراءة user_101 لتجعله الأحدث
lru.put("user_104", "فاطمة نور"); // سعة ممتلئة: سيتم إخلاء user_102 (LRU)

lru.get("user_102"); // ستفشل (Cache Miss) لأنه أُخلي
lru.get("user_103"); // ستنجح (Cache Hit)
lru.put("user_105", "زيد طارق"); // سيتم إخلاء user_101

console.log("\\n=== حالة الكاش بالذاكرة (من الأحدث للأقدم) ===");
console.log(lru.getKeysInOrder().join(" -> "));

const hitRate = Math.round((lru.stats.hits / lru.stats.total) * 100);
console.log(\`\\n📊 الإحصائيات: Hits: \${lru.stats.hits} | Misses: \${lru.stats.misses} | Hit Rate: \${hitRate}% | عمليات الإخلاء: \${lru.stats.evictions}\`);`
        },
        {
          id: "algo-lb",
          name: "Load Balancer (موازن الأحمال)",
          category: "Traffic Distribution",
          badge: "Round Robin & Weighted",
          description: "محاكي لأنظمة توزيع الحمل يدعم 4 خوارزميات شهيرة: Round Robin، Weighted Round Robin، Least Connections، و IP Hash للجلسات الثابتة.",
          code: `// ============================================================================
// 2. محاكي موازن الأحمال (Load Balancer Simulator)
// ============================================================================

class Server {
  constructor(id, ip, weight = 1) {
    this.id = id;
    this.ip = ip;
    this.weight = weight;
    this.activeConnections = 0;
    this.totalHandled = 0;
  }
}

class LoadBalancer {
  constructor(strategy = "weighted") {
    this.strategy = strategy; // "round-robin", "weighted", "least-connections", "ip-hash"
    this.servers = [];
    this.currentIndex = 0;
  }

  addServer(server) {
    this.servers.push(server);
  }

  // 1. التوزيع الدائري البسيط (Round Robin)
  _roundRobin() {
    const server = this.servers[this.currentIndex];
    this.currentIndex = (this.currentIndex + 1) % this.servers.length;
    return server;
  }

  // 2. التوزيع الموزون (Weighted Round Robin)
  _weightedRoundRobin() {
    const totalWeight = this.servers.reduce((sum, s) => sum + s.weight, 0);
    let rand = Math.floor(Math.random() * totalWeight);
    for (const server of this.servers) {
      if (rand < server.weight) return server;
      rand -= server.weight;
    }
    return this.servers[0];
  }

  // 3. الأقل اتصالات (Least Connections)
  _leastConnections() {
    return this.servers.reduce((min, s) => s.activeConnections < min.activeConnections ? s : min, this.servers[0]);
  }

  // 4. تجزئة الـ IP للجلسات الثابتة (IP Hash)
  _ipHash(clientIp) {
    let hash = 0;
    for (let i = 0; i < clientIp.length; i++) {
      hash = (hash << 5) - hash + clientIp.charCodeAt(i);
      hash |= 0;
    }
    const idx = Math.abs(hash) % this.servers.length;
    return this.servers[idx];
  }

  routeRequest(reqId, clientIp = "192.168.1.1") {
    let server;
    if (this.strategy === "round-robin") server = this._roundRobin();
    else if (this.strategy === "weighted") server = this._weightedRoundRobin();
    else if (this.strategy === "least-connections") server = this._leastConnections();
    else if (this.strategy === "ip-hash") server = this._ipHash(clientIp);

    server.activeConnections++;
    server.totalHandled++;
    return server;
  }
}

// ------------------- تشغيل سيناريو المحاكاة -------------------
console.log("🚀 بدء محاكاة موازن الأحمال (Load Balancer):");

const lb = new LoadBalancer("weighted"); // يمكنك تجربة: "round-robin", "weighted", "least-connections", "ip-hash"
lb.addServer(new Server("Server-Alpha", "10.0.0.1", 3)); // سعة عالية (وزن 3)
lb.addServer(new Server("Server-Beta",  "10.0.0.2", 2)); // سعة متوسطة (وزن 2)
lb.addServer(new Server("Server-Gamma", "10.0.0.3", 1)); // سعة منخفضة (وزن 1)

console.log(\`الاستراتيجية المطبقة: \${lb.strategy.toUpperCase()}\`);
console.log("توجيه 100 طلب متتالي...");

for (let i = 1; i <= 100; i++) {
  const clientIp = \`192.168.1.\${(i % 8) + 1}\`;
  const assigned = lb.routeRequest(i, clientIp);
  if (i <= 6 || i === 100) {
    console.log(\`[REQ #\${i.toString().padStart(3, '0')}] من \${clientIp} -> توجيه إلى: \${assigned.id} (\${assigned.ip})\`);
  }
}

console.log("\\n=== التوزيع النهائي للطلبات على الخوادم ===");
lb.servers.forEach(s => {
  const pct = Math.round((s.totalHandled / 100) * 100);
  console.log(\`🖥️ \${s.id} (الوزن: \${s.weight}): استقبل \${s.totalHandled} طلب (\${pct}% من إجمالي الترافيك)\`);
});`
        },
        {
          id: "algo-rate-limiter",
          name: "Token Bucket Rate Limiter",
          category: "Traffic & Security",
          badge: "DDoS & Throttling",
          description: "خوارزمية سلة الرموز (Token Bucket) المستخدمة في Stripe و Cloudflare لتمرير الطلبات المشروعة وحظر الهجمات بكود 429 Too Many Requests مع مهلة المحاولة.",
          code: `// ============================================================================
// 3. محدد معدل الطلبات (Token Bucket Rate Limiter)
// ============================================================================

class TokenBucketRateLimiter {
  constructor(capacity, refillRatePerSecond) {
    this.capacity = capacity;               // أقصى سعة من الرموز (Tokens)
    this.refillRate = refillRatePerSecond; // عدد الرموز المضافة كل ثانية
    this.tokens = capacity;                 // الرموز الحالية
    this.lastRefillTime = Date.now();       // الطابع الزمني لآخر تجديد
    
    this.stats = { allowed: 0, rejected: 0 };
  }

  _refill() {
    const now = Date.now();
    const elapsedTimeInSeconds = (now - this.lastRefillTime) / 1000;
    const tokensToAdd = elapsedTimeInSeconds * this.refillRate;
    
    this.tokens = Math.min(this.capacity, this.tokens + tokensToAdd);
    this.lastRefillTime = now;
  }

  allowRequest(tokensNeeded = 1) {
    this._refill();

    if (this.tokens >= tokensNeeded) {
      this.tokens -= tokensNeeded;
      this.stats.allowed++;
      return { allowed: true, remainingTokens: Math.floor(this.tokens) };
    } else {
      this.stats.rejected++;
      const timeToWait = ((tokensNeeded - this.tokens) / this.refillRate).toFixed(2);
      return { allowed: false, remainingTokens: 0, retryAfterSeconds: timeToWait };
    }
  }
}

// ------------------- تشغيل سيناريو المحاكاة -------------------
console.log("🚀 محاكاة محدد معدل الطلبات (Token Bucket Rate Limiter):");
console.log("السعة القصوى: 5 رموز | معدل التجديد: 1 رمز كل ثانية (1 token/sec)");

const limiter = new TokenBucketRateLimiter(5, 1);

// اختبار هجمة متزامنة (Burst) بـ 8 طلبات فورية
console.log("\\n⚡ إرسال هجمة فورية (Burst) مكونة من 8 طلبات:");
for (let i = 1; i <= 8; i++) {
  const result = limiter.allowRequest(1);
  if (result.allowed) {
    console.log(\`[REQ #\${i}] ✅ 200 OK - تم تمرير الطلب (الرموز المتبقية: \${result.remainingTokens})\`);
  } else {
    console.log(\`[REQ #\${i}] ❌ 429 Too Many Requests - تم حظر الطلب! يمكنك المحاولة بعد: \${result.retryAfterSeconds}s\`);
  }
}

console.log(\`\\n📊 النتيجة الإجمالية: تم قبول \${limiter.stats.allowed} طلبات | تم حظر \${limiter.stats.rejected} طلبات.\`);`
        },
        {
          id: "algo-consistent-hash",
          name: "Consistent Hashing with Virtual Nodes",
          category: "Distributed Hash Ring",
          badge: "Minimal Key Migration",
          description: "حلقة التجزئة المتسقة مع عقد افتراضية (Virtual Nodes) لتوزيع المفاتيح ومنع البقع الساخنة وتقليل نسبة ترحيل البيانات عند إضافة أو إزالة الخوادم.",
          code: `// ============================================================================
// 4. حلقة التجزئة المتسقة (Consistent Hashing with Virtual Nodes)
// ============================================================================

class ConsistentHashRing {
  constructor(virtualNodes = 3) {
    this.virtualNodes = virtualNodes; // عدد النقاط الافتراضية لكل خادم
    this.ring = new Map();             // hash -> nodeName
    this.sortedKeys = [];              // مصفوفة الهاش المرتبة تصاعدياً
  }

  _hash(str) {
    let hash = 5381;
    for (let i = 0; i < str.length; i++) {
      hash = ((hash << 5) + hash) + str.charCodeAt(i);
      hash = hash & 0xFFFFFFFF;
    }
    return Math.abs(hash);
  }

  addNode(nodeName) {
    for (let i = 0; i < this.virtualNodes; i++) {
      const vNodeKey = \`\${nodeName}#vNode-\${i}\`;
      const hash = this._hash(vNodeKey);
      this.ring.set(hash, nodeName);
      this.sortedKeys.push(hash);
    }
    this.sortedKeys.sort((a, b) => a - b);
    console.log(\`[NODE ADDED] العقدة "\${nodeName}" أضيفت بنجاح مع \${this.virtualNodes} نقاط افتراضية.\`);
  }

  getNode(key) {
    if (this.sortedKeys.length === 0) return null;
    const hash = this._hash(key);
    
    // البحث عن أول عقدة قيمة الهاش الخاصة بها أكبر من أو تساوي هاش المفتاح (في اتجاه عقارب الساعة)
    for (const nodeHash of this.sortedKeys) {
      if (nodeHash >= hash) {
        return this.ring.get(nodeHash);
      }
    }
    // العودة للبداية (Wrap around)
    return this.ring.get(this.sortedKeys[0]);
  }
}

// ------------------- تشغيل سيناريو المحاكاة -------------------
console.log("🚀 محاكاة حلقة التجزئة المتسقة (Consistent Hashing):");
const ring = new ConsistentHashRing(5); // 5 نقاط افتراضية لكل خادم

ring.addNode("Server-US-East");
ring.addNode("Server-EU-Central");
ring.addNode("Server-AP-East");

const keys = ["user_1001", "order_409", "session_abc", "video_8821", "auth_token_99", "chat_msg_77"];
const initialDistribution = {};

console.log("\\n📦 توزيع المفاتيح الأولي:");
keys.forEach(k => {
  const node = ring.getNode(k);
  initialDistribution[k] = node;
  console.log(\`المفتاح [\${k}] -> مخصص للخادم: \${node}\`);
});

console.log("\\n⚡ إضافة خادم جديد 'Server-ME-South' وملاحظة كم مفتاح سينتقل:");
ring.addNode("Server-ME-South");

let migratedCount = 0;
keys.forEach(k => {
  const newNode = ring.getNode(k);
  const changed = newNode !== initialDistribution[k];
  if (changed) migratedCount++;
  console.log(\`المفتاح [\${k}] -> الآن في: \${newNode} \${changed ? '⚠️ (تم الترحيل)' : '✅ (لم يتغير)'}\`);
});

const pct = Math.round((migratedCount / keys.length) * 100);
console.log(\`\\n📊 نسبة البيانات المنقولة: \${migratedCount}/\${keys.length} (\${pct}%) فقط - بدلاً من نقل 100% كما في الهاش التقليدي!\`);`
        },
        {
          id: "algo-bloom-filter",
          name: "Bloom Filter (فلتر بلوم الاحتمالي)",
          category: "Probabilistic Data Structure",
          badge: "Zero False Negatives",
          description: "هيكل بيانات احتمالي موفر للمساحة يفحص وجود العناصر في قواعد البيانات الضخمة لمنع عمليات القراءة غير الضرورية من القرص.",
          code: `// ============================================================================
// 5. فلتر بلوم الاحتمالي (Bloom Filter)
// ============================================================================

class BloomFilter {
  constructor(size = 64, hashCount = 3) {
    this.size = size;
    this.hashCount = hashCount;
    this.bitArray = new Array(size).fill(0);
  }

  _hashes(str) {
    const hashes = [];
    let h1 = 0, h2 = 0;
    for (let i = 0; i < str.length; i++) {
      h1 = (h1 * 31 + str.charCodeAt(i)) & 0xFFFFFFFF;
      h2 = (h2 * 37 + str.charCodeAt(i)) & 0xFFFFFFFF;
    }
    for (let i = 0; i < this.hashCount; i++) {
      const combined = Math.abs((h1 + i * h2) % this.size);
      hashes.push(combined);
    }
    return hashes;
  }

  add(str) {
    const indices = this._hashes(str);
    indices.forEach(idx => this.bitArray[idx] = 1);
    console.log(\`[ADD] إدراج "\${str}" -> تعيين البتات: [\${indices.join(', ')}]\`);
  }

  contains(str) {
    const indices = this._hashes(str);
    const definitelyNot = indices.some(idx => this.bitArray[idx] === 0);
    return !definitelyNot;
  }
}

// ------------------- تشغيل سيناريو المحاكاة -------------------
console.log("🚀 محاكاة فلتر بلوم الاحتمالي (Bloom Filter):");
const bf = new BloomFilter(64, 3);

// إضافة مستخدمين قاموا بالإعجاب
const registeredUsers = ["ahmed@tech.com", "sara@cloud.com", "omar@scale.com", "nour@dev.io"];
registeredUsers.forEach(u => bf.add(u));

console.log("\\n🔍 فحص المستخدمين المسجلين:");
registeredUsers.forEach(u => {
  console.log(\`هل "\${u}" مسجل؟ \${bf.contains(u) ? '✅ نعم (محتمل جداً)' : '❌ قطعاً لا'}\`);
});

console.log("\\n🔍 فحص مستخدمين جدد (لم يسجلوا مسبقاً):");
const newUsers = ["hassan@test.com", "mona@example.com", "tariq@unknown.com", "fake@spam.com"];
newUsers.forEach(u => {
  const result = bf.contains(u);
  if (result) {
    console.log(\`هل "\${u}" مسجل؟ ⚠️ نعم (False Positive محتمل!)\`);
  } else {
    console.log(\`هل "\${u}" مسجل؟ ❌ قطعاً غير موجود 100%\`);
  }
});`
        },
        {
          id: "algo-sharding",
          name: "Database Sharding & Key Routing",
          category: "Database Partitioning",
          badge: "Horizontal Scaling",
          description: "محاكاة لتقسيم قواعد البيانات علائقياً عبر عدة Shards بناءً على مفتاح التقسيم (Partition Key) وتنفيذ استعلامات موجهة دون مسح باقي الشاردز.",
          code: `// ============================================================================
// 6. محاكي تقسيم قواعد البيانات (Database Sharding Simulator)
// ============================================================================

class ShardedDatabase {
  constructor(shardCount = 3) {
    this.shardCount = shardCount;
    this.shards = Array.from({ length: shardCount }, (_, i) => ({
      id: \`Shard-\${i + 1}\`,
      records: new Map()
    }));
  }

  _getShardIndex(partitionKey) {
    let hash = 0;
    for (let i = 0; i < partitionKey.length; i++) {
      hash = ((hash << 5) - hash) + partitionKey.charCodeAt(i);
      hash |= 0;
    }
    return Math.abs(hash) % this.shardCount;
  }

  insert(user) {
    const shardIdx = this._getShardIndex(user.id);
    const shard = this.shards[shardIdx];
    shard.records.set(user.id, user);
    console.log(\`[INSERT] المستخدم "\${user.name}" (\${user.id}) -> خُزن في [\${shard.id}]\`);
  }

  find(userId) {
    const shardIdx = this._getShardIndex(userId);
    const shard = this.shards[shardIdx];
    const user = shard.records.get(userId);
    console.log(\`[QUERY] البحث عن \${userId} -> استعلام مباشر على [\${shard.id}] فقط دون فحص باقي الشاردز!\`);
    return user;
  }
}

// ------------------- تشغيل سيناريو المحاكاة -------------------
console.log("🚀 محاكاة تقسيم قواعد البيانات (Database Sharding):");
const db = new ShardedDatabase(3);

const sampleUsers = [
  { id: "usr_101", name: "أحمد", country: "EG" },
  { id: "usr_102", name: "سارة", country: "SA" },
  { id: "usr_103", name: "خالد", country: "AE" },
  { id: "usr_104", name: "فاطمة", country: "KW" },
  { id: "usr_105", name: "زيد", country: "QA" },
  { id: "usr_106", name: "ريم", country: "EG" }
];

sampleUsers.forEach(u => db.insert(u));

console.log("\\n=== استعلامات موجهة مباشرة (Point Queries) ===");
db.find("usr_103");
db.find("usr_105");

console.log("\\n=== التوزيع النهائي للبيانات على كل الشاردز ===");
db.shards.forEach(s => {
  console.log(\`💾 \${s.id}: يحتوي على \${s.records.size} سجلات -> [\${[...s.records.keys()].join(', ')}]\`);
});`
        }
      ]
    }
  ]
};


