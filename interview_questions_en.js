/**
 * interview_questions_en.js - Complete English Systems Interview Questions Bank
 * 37 Comprehensive System Design & Engineering Interview Questions
 */

const InterviewQuestionsDataEn = [
  {
    "id": "iq-easy-1",
    "difficulty": "easy",
    "difficultyLabel": "Foundational (Easy)",
    "category": "Scalability",
    "categoryAr": "قابلية التوسع",
    "title": "Vertical vs Horizontal Scaling: Core Trade-offs",
    "titleAr": "ما الفرق الجوهري بين التوسع الرأسي (Vertical Scaling) والتوسع الأفقي (Horizontal Scaling)؟",
    "question": "Explain the difference between vertical scaling (scale-up) and horizontal scaling (scale-out). When would you choose one over the other, and what are the technical limitations of each approach?",
    "hints": [
      "Consider the hardware cost curve and physical limits of single-node CPU/RAM.",
      "Analyze the impact of vertical scaling on Single Points of Failure (SPOF) and maintenance downtime.",
      "What software architecture requirements must be met before scaling horizontally (Stateless vs Stateful)?"
    ],
    "answer": "### 1. Vertical Scaling (Scale Up)\n- **Concept**: Upgrading the physical hardware capacity of an existing single server by adding more CPU cores, expanding RAM, or attaching high-throughput NVMe SSD storage.\n- **Advantages**:\n  - Absolute architectural simplicity: No code modifications, network coordination, or distributed data partitioning required.\n  - Ultra-low latency: Inter-process communication occurs across high-speed system buses rather than local area networks.\n- **Limitations & Drawbacks**:\n  - **Hardware Ceiling**: Physical server motherboards and hypervisors have strict hard limits on maximum CPU and RAM.\n  - **Exponential Cost Curve**: High-end enterprise multi-socket server hardware costs scale non-linearly.\n  - **Single Point of Failure (SPOF)**: Hardware failures crash the entire system, and hardware maintenance necessitates downtime.\n\n### 2. Horizontal Scaling (Scale Out)\n- **Concept**: Adding more standard commodity compute instances to a distributed cluster and balancing traffic across them via Load Balancers.\n- **Advantages**:\n  - Near-infinite elasticity: Dynamically add or remove instances based on real-time traffic demand (Auto-scaling).\n  - High Availability & Fault Tolerance: The failure of an individual node does not impact cluster availability.\n- **Challenges & Trade-offs**:\n  - Requires stateless application services (offloading session state to Redis clusters).\n  - Introduces network latency, distributed consensus challenges, and network partition risks.\n\n### Interview Rule of Thumb:\nAlways design software services to be stateless and horizontally scalable from day one. However, early-stage startups and MVPs can pragmatically utilize vertical scaling initially to accelerate developer velocity before distributed complexity is required.",
    "keywords": [
      "vertical scaling",
      "horizontal scaling",
      "scale up",
      "scale out",
      "spof",
      "stateless"
    ]
  },
  {
    "id": "iq-easy-2",
    "difficulty": "easy",
    "difficultyLabel": "Foundational (Easy)",
    "category": "Distributed Systems",
    "categoryAr": "الأنظمة الموزعة",
    "title": "Understanding CAP Theorem & Database Selection",
    "titleAr": "ما هي نظرية CAP (CAP Theorem) وكيف تطبقها في اختيار نوع قاعدة البيانات؟",
    "question": "The CAP theorem states that a distributed data store can simultaneously provide at most two out of three guarantees. What are these guarantees, and why is Partition Tolerance (P) non-negotiable in real-world distributed networks?",
    "hints": [
      "Remember that physical networks inevitably experience packet drops and severed fiber lines.",
      "Compare system behavior during a network split: Does the system reject requests to protect data correctness, or serve potentially stale data to stay available?"
    ],
    "answer": "### The Three Guarantees of CAP:\n1. **Consistency (C)**: Every read request receives the most recent successful write or an explicit error (all nodes view identical data at the same instant).\n2. **Availability (A)**: Every non-failing node returns a valid, non-error response for every request, without guarantee that it contains the latest write.\n3. **Partition Tolerance (P)**: The system continues to operate despite arbitrary packet loss or network communication partitions between nodes.\n\n### Why Partition Tolerance (P) is Non-Negotiable:\nPhysical network cables, routers, and switches are imperfect; network partitions (split-brain scenarios) are inevitable physical realities. Therefore, distributed systems cannot choose CA; they must retain P and decide between:\n- **CP (Consistency + Partition Tolerance)**: When a partition occurs, the system rejects or delays writes on minority partitions until nodes re-sync, prioritizing data correctness over availability (e.g., HBase, CockroachDB, etcd, ZooKeeper). Ideal for banking balances, ticket bookings, and inventory reservation.\n- **AP (Availability + Partition Tolerance)**: When a partition occurs, all nodes remain available and answer requests using locally available data, even if temporarily stale (Eventual Consistency), sacrificing immediate linearizability (e.g., Cassandra, DynamoDB, CouchDB). Ideal for social media feeds, chat history, and shopping cart browsing.",
    "keywords": [
      "cap theorem",
      "consistency",
      "availability",
      "partition tolerance",
      "eventual consistency"
    ]
  },
  {
    "id": "iq-easy-3",
    "difficulty": "easy",
    "difficultyLabel": "Foundational (Easy)",
    "category": "Networking",
    "categoryAr": "الشبكات والاتصال",
    "title": "Layer 4 vs Layer 7 Load Balancing",
    "titleAr": "ما الفرق بين موازن الأحمال في الطبقة الرابعة (L4) والطبقة السابعة (L7)؟",
    "question": "What is the architectural difference between a Layer 4 (Transport) and Layer 7 (Application) Load Balancer? When should you deploy each in an enterprise architecture?",
    "hints": [
      "Think about packet inspection: Does the load balancer read HTTP headers and cookies, or solely IP packets and TCP ports?",
      "How does SSL/TLS termination and compute overhead compare between L4 and L7?"
    ],
    "answer": "### 1. Layer 4 Load Balancing (Transport Layer)\n- **Mechanism**: Operates strictly at the TCP/UDP layer without inspecting application payload data. Routing decisions rely exclusively on Source/Destination IP and Port hashes (e.g., AWS Network Load Balancer - NLB, Linux Virtual Server - LVS, HAProxy in TCP mode).\n- **Key Characteristics**:\n  - Extremely high throughput and minimal CPU overhead (millions of packets per second per node).\n  - Incapable of inspecting HTTP paths, cookies, authorization tokens, or request headers.\n  - Cannot perform intelligent content routing or SSL/TLS decryption.\n\n### 2. Layer 7 Load Balancing (Application Layer)\n- **Mechanism**: Operates at the HTTP/HTTPS/gRPC layer. The load balancer terminates the client TCP connection, decrypts TLS, parses the full HTTP request (path, method, headers, cookies), and makes intelligent routing decisions (e.g., AWS Application Load Balancer - ALB, NGINX, Envoy, Traefik).\n- **Key Characteristics**:\n  - Path-based routing: `/api/v1/checkout` routes to the Payment Service, while `/static/*` routes to S3/CDN.\n  - Sticky sessions via cookie affinity, header-based canary deployments, and Web Application Firewall (WAF) rule enforcement.\n  - Higher CPU and memory utilization due to payload parsing and TLS cryptographic handshakes.\n\n### Enterprise Hybrid Architecture:\nDeploy a multi-tier ingress topology: An external Layer 4 Load Balancer (AWS NLB) accepts incoming internet traffic at line rate, distributing raw TCP streams across a fleet of Layer 7 Envoy / NGINX proxies that terminate TLS and execute path-based microservice routing.",
    "keywords": [
      "load balancer",
      "layer 4",
      "layer 7",
      "l4",
      "l7",
      "reverse proxy",
      "ssl termination"
    ]
  },
  {
    "id": "iq-easy-4",
    "difficulty": "easy",
    "difficultyLabel": "Foundational (Easy)",
    "category": "Databases",
    "categoryAr": "قواعد البيانات",
    "title": "SQL vs NoSQL: Decision Framework",
    "titleAr": "مقارنة حاسمة: متى تختار SQL ومتى تختار NoSQL؟",
    "question": "What is the core decision framework for selecting between a Relational Database (SQL) and a Non-Relational Database (NoSQL)?",
    "hints": [
      "Consider the structure of data: Strict schema with multi-table relationships versus flexible, dynamic documents or key-values.",
      "Compare ACID transaction requirements with horizontal scale-out requirements."
    ],
    "answer": "### 1. Relational Databases (SQL - PostgreSQL, MySQL)\n- **Strengths**:\n  - Strict ACID guarantees (Atomicity, Consistency, Isolation, Durability) ensuring zero financial or state corruption.\n  - Powerful relational joins across multiple normalized entities.\n  - Declarative SQL standard with rich secondary indexes and foreign key constraints.\n- **When to Choose**:\n  - Financial ledgers, payment processing, inventory records, and systems with complex relational dependencies.\n  - Horizontal write scaling is complex and requires application-level sharding (e.g. Citus, Vitess).\n\n### 2. Non-Relational Databases (NoSQL - Cassandra, MongoDB, DynamoDB, Redis)\n- **Strengths**:\n  - Horizontal scalability: Built from the ground up to scale out across commodity clusters via consistent hashing.\n  - Flexible or schema-less data structures (JSON documents, wide-column families, key-value stores).\n  - High-throughput write performance via append-only commit logs and LSM-trees.\n- **When to Choose**:\n  - Petabyte-scale datasets with high write QPS (sensor telemetry, real-time analytics, user clickstreams).\n  - Access patterns are known in advance and can be retrieved using primary partition keys without multi-table relational joins.\n\n### Staff+ Recommendation: Polyglot Persistence\nModern production architectures never choose one database exclusively. Instead, apply Polyglot Persistence: store financial balances in PostgreSQL, cache active sessions in Redis, store message streams in ScyllaDB, and power text search via Elasticsearch.",
    "keywords": [
      "sql vs nosql",
      "rdbms",
      "acid",
      "relational",
      "mongodb",
      "postgresql",
      "cassandra"
    ]
  },
  {
    "id": "iq-easy-5",
    "difficulty": "easy",
    "difficultyLabel": "Foundational (Easy)",
    "category": "Caching",
    "categoryAr": "التخزين المؤقت",
    "title": "Cache-Aside vs Write-Through Caching Patterns",
    "titleAr": "ما هو نمط Cache-Aside (التحميل الكسول) وما الفرق بينه وبين Write-Through؟",
    "question": "What is the difference between Cache-Aside (Lazy Loading) and Write-Through caching patterns? What are the consistency trade-offs of each?",
    "hints": [
      "Analyze what happens on a Cache Miss in both patterns.",
      "Which pattern experiences write latency penalties, and which risks serving stale data during concurrent updates?"
    ],
    "answer": "### 1. Cache-Aside (Lazy Loading)\n- **Workflow**:\n  1. The application queries the cache.\n  2. If Cache Hit: Return data immediately.\n  3. If Cache Miss: The application queries the database, writes the result to the cache, and returns it to the client.\n- **Strengths**:\n  - Cache contains only frequently requested data (zero memory wasted on cold data).\n  - Node failures in the cache tier degrade performance to the database, but do not halt the application.\n- **Weaknesses**:\n  - Penalty latency on initial cache misses (trips to both cache and DB).\n  - Potential data staleness if the database is updated directly without invalidating or updating the cache.\n\n### 2. Write-Through\n- **Workflow**:\n  - The application writes exclusively to the cache layer.\n  - The cache layer synchronously writes the update to the database before acknowledging success to the caller.\n- **Strengths**:\n  - High data consistency: Cache and database remain synchronized at all times.\n  - Subsequent read operations are guaranteed to be cache hits with zero staleness.\n- **Weaknesses**:\n  - Higher write latency: Every write must complete across both memory and disk before returning.\n  - Cache pollution: Infrequently accessed records consume cache memory unless paired with aggressive LRU eviction.\n\n### Production Recommendation:\nCache-Aside is the default pattern for most web applications. To guarantee data freshness, always **invalidate (delete)** the cache key upon DB updates rather than overwriting it, and set reasonable Time-To-Live (TTL) expiration timestamps.",
    "keywords": [
      "caching",
      "cache-aside",
      "write-through",
      "cache hit",
      "cache miss",
      "ttl"
    ]
  },
  {
    "id": "iq-easy-6",
    "difficulty": "easy",
    "difficultyLabel": "Foundational (Easy)",
    "category": "API & Protocols",
    "categoryAr": "الواجهات والبروتوكولات",
    "title": "REST vs gRPC in Microservices Architecture",
    "titleAr": "مقارنة الاتصال: متى تستخدم RESTful APIs ومتى تنتقل إلى gRPC؟",
    "question": "Compare RESTful APIs and gRPC for inter-service communication in a microservices architecture. When is gRPC preferred over REST?",
    "hints": [
      "Contrast JSON text serialization over HTTP/1.1 with Protocol Buffers binary serialization over HTTP/2.",
      "Consider public internet browser compatibility versus internal cluster microservice throughput."
    ],
    "answer": "### 1. RESTful APIs (HTTP/1.1 + JSON)\n- **Mechanism**: Text-based JSON payloads transmitted over HTTP/1.1.\n- **Advantages**:\n  - Universal client support: Native to every web browser, mobile client, and debugging tool (cURL, Postman).\n  - Human-readable payloads simplifying development and inspection.\n- **Drawbacks**:\n  - High serialization overhead: Text-based JSON parsing consumes substantial CPU cycles.\n  - Transport inefficiencies: HTTP/1.1 establishes new TCP connections or suffers from Head-of-Line blocking.\n\n### 2. gRPC (HTTP/2 + Protocol Buffers)\n- **Mechanism**: Binary serialization using strictly typed `.proto` schemas transmitted over persistent HTTP/2 multiplexed streams.\n- **Advantages**:\n  - **7x - 10x Higher Throughput**: Compact binary protobuf payloads drastically reduce network bandwidth and CPU parse latency.\n  - **Bi-directional Streaming**: Supports Client, Server, and Bidirectional real-time streaming natively.\n  - **Strict Contracts**: Automatic client SDK generation in Go, Java, TypeScript, and Python directly from protobuf definitions.\n- **Drawbacks**:\n  - Limited native browser support (requires gRPC-Web proxies).\n  - Non-human-readable binary streams requiring dedicated tools for inspection.\n\n### Industry Standard: The Dual-Protocol Pattern\nExpose public client-facing APIs (mobile, web) via RESTful JSON or GraphQL through an API Gateway, and utilize high-throughput gRPC for all internal East-West communication between backend microservices.",
    "keywords": [
      "rest",
      "grpc",
      "protobuf",
      "http/2",
      "microservices",
      "json"
    ]
  },
  {
    "id": "iq-easy-7",
    "difficulty": "easy",
    "difficultyLabel": "Foundational (Easy)",
    "category": "Architecture",
    "categoryAr": "المعمارية العامة",
    "title": "Single Point of Failure (SPOF) Mitigation Strategies",
    "titleAr": "ما هي نقطة الفشل المفردة (SPOF) وكيف يتم القضاء عليها في النظام؟",
    "question": "What is a Single Point of Failure (SPOF) in system design, and what architectural strategies eliminate SPOFs across compute, datastore, and networking layers?",
    "hints": [
      "Define the concept: What happens if a single component crashes?",
      "Identify strategies for compute instances, master-slave databases, and DNS routing."
    ],
    "answer": "### Definition of SPOF:\nA Single Point of Failure (SPOF) is any individual component whose failure causes the entire system or an entire critical user flow to stop functioning.\n\n### Strategies to Eliminate SPOFs Across Architectural Tiers:\n1. **Compute Layer**:\n   - Make application servers strictly **Stateless**.\n   - Deploy compute instances across multiple Availability Zones (Multi-AZ) behind redundant load balancers with auto-scaling health checks.\n2. **Database & Storage Layer**:\n   - Deploy **Primary-Replica** clusters with automated failover orchestrators (e.g., Patroni for PostgreSQL, AWS Aurora Multi-AZ).\n   - Adopt masterless peer-to-peer databases (Cassandra, DynamoDB) where all nodes are symmetrical.\n3. **Caching Layer**:\n   - Run Redis in **Redis Cluster** mode with master and replica shards distributed across separate physical failure domains.\n4. **Networking Layer**:\n   - Utilize dual Anycast IP addresses, redundant Layer 4 switches, and dual Tier-1 transit providers.\n   - Employ Geo-DNS failover to redirect traffic to secondary regions during catastrophic cloud outages.",
    "keywords": [
      "spof",
      "single point of failure",
      "redundancy",
      "failover",
      "high availability"
    ]
  },
  {
    "id": "iq-easy-8",
    "difficulty": "easy",
    "difficultyLabel": "Foundational (Easy)",
    "category": "Performance",
    "categoryAr": "الأداء والمراقبة",
    "title": "Latency Metrics: Average vs P95/P99 Percentiles",
    "titleAr": "ما الفرق بين مقاييس زمن الاستجابة: متوسط الوقت (Average) والنسب المئوية (P95 / P99)؟",
    "question": "Why is relying on Average Latency misleading in distributed systems, and why do Senior/Staff engineers design around P95 and P99 Percentiles?",
    "hints": [
      "Think about the impact of outliers and the long tail of latency distribution.",
      "What happens to user experience when a single webpage request triggers 50 parallel backend microservice calls?"
    ],
    "answer": "### Why Average Latency is Misleading:\nThe arithmetic mean (average) hides severe latency spikes caused by garbage collection pauses, disk compaction stalls, or network packet drops. If 95% of users experience 10ms latency but 5% experience 5,000ms, the average looks healthy (~260ms), while millions of users suffer unusable experiences.\n\n### The Power of Percentiles (P95 / P99):\n- **P95**: 95% of requests complete faster than this threshold; only 5% exceed it.\n- **P99 / P99.9 (The Long Tail)**: Represents the worst-case experience of the most active, high-value power users.\n\n### The Microservice Multiplier Effect:\nIn modern distributed architectures, loading a single home page initiates 50-100 parallel microservice requests:\n- If an individual service has a P99 latency failure rate of 1% (1 in 100 requests takes 2 seconds), the probability that a webpage requiring 100 internal calls completes without encountering a slow call drops dramatically:\n$$\text{Probability of Fast Page} = 0.99^{100} \u0007pprox 36.6\\%$$\nNearly **63.4% of users** will experience a painful multi-second delay!\n\n### Engineering Best Practice:\nAlways establish Service Level Objectives (SLOs) anchored on P95 and P99 metrics (e.g. `P99 Latency < 150ms`). Mitigate long-tail latency using aggressive timeouts, speculative retries with hedging, and load shedding.",
    "keywords": [
      "latency",
      "percentiles",
      "p50",
      "p95",
      "p99",
      "sla",
      "slo"
    ]
  },
  {
    "id": "iq-med-1",
    "difficulty": "medium",
    "difficultyLabel": "Architectural (Medium)",
    "category": "Distributed Caching",
    "categoryAr": "الكاش الموزع",
    "title": "Mitigating Cache Stampede, Penetration, and Avalanche",
    "titleAr": "كيف تحل أزمات الكاش الشهيرة: Thundering Herd و Cache Penetration و Cache Avalanche؟",
    "question": "How do you diagnose and architecturally mitigate the three classic production cache crises: Cache Stampede (Thundering Herd), Cache Penetration, and Cache Avalanche?",
    "hints": [
      "Cache Stampede: What happens when a viral key expires while 10,000 concurrent requests seek it?",
      "Cache Penetration: What happens when attackers query non-existent keys (e.g., negative IDs)?",
      "Cache Avalanche: What happens when 1,000,000 keys expire at the exact same second?"
    ],
    "answer": "### 1. Cache Stampede (Thundering Herd)\n- **Problem**: A highly popular viral cache key expires. Thousands of concurrent requests experience a cache miss simultaneously and hammer the database together to regenerate the value, causing database exhaustion and outages.\n- **Solutions**:\n  - **Distributed Mutex Lock**: The first worker to miss the cache acquires an atomic Redis lock (`SET lock_key uuid NX EX 10`), recomputes the value, and updates the cache. Other workers wait or return stale data.\n  - **Probabilistic Early Recomputation (XFetch)**: Background processes recalculate and refresh the cache key before it officially expires based on remaining TTL and access frequency.\n\n### 2. Cache Penetration\n- **Problem**: Requests query for keys that exist neither in the cache nor in the database (e.g. malicious requests querying `GET /user/-99999`). Every request bypasses the cache and queries the database.\n- **Solutions**:\n  - **Bloom Filter**: Place an in-memory Bloom Filter before the cache. If the filter confirms the key does not exist, reject the request immediately without querying DB.\n  - **Cache Null Objects**: If the database returns null for a key, store `key: null` in Redis with a short TTL (30-60 seconds) to block repeat queries.\n\n### 3. Cache Avalanche\n- **Problem**: A massive batch of cached keys are configured with identical TTLs (e.g. 1 hour) and expire at the exact same second, dumping entire traffic volumes onto database replicas.\n- **Solutions**:\n  - **TTL Jitter**: Add random variance to expiration times: `TTL = Base_TTL + Random(1, 300) seconds`.\n  - **Multi-AZ Redis Clustering** with automated replica promotion to prevent catastrophic cache cluster crashes.",
    "keywords": [
      "thundering herd",
      "cache stampede",
      "cache penetration",
      "cache avalanche",
      "bloom filter",
      "mutex lock"
    ]
  },
  {
    "id": "iq-med-2",
    "difficulty": "medium",
    "difficultyLabel": "Architectural (Medium)",
    "category": "Hashing & Routing",
    "categoryAr": "التوجيه والتجزئة",
    "title": "Consistent Hashing Algorithm & Virtual Nodes",
    "titleAr": "ما هي خوارزمية التجزئة المتسقة (Consistent Hashing) ولماذا نحتاج العقد الافتراضية (Virtual Nodes)؟",
    "question": "How does the Consistent Hashing algorithm function, and why are Virtual Nodes (vnodes) essential to prevent cluster hotspots?",
    "hints": [
      "Describe the 2^32-1 circular hash ring and clockwise traversal.",
      "What happens if physical servers have heterogeneous hardware capacities?"
    ],
    "answer": "### 1. Consistent Hashing Mechanism\n- **The Ring**: Map a 32-bit hash space ($0 \text{ to } 2^{32}-1$) onto a continuous circular ring.\n- **Node Mapping**: Hash server identifiers (e.g. `SHA1(IP + Port)`) to place physical nodes at specific positions on the ring.\n- **Key Routing**: Hash incoming keys (e.g. `SHA1(user_id)`). Traverse the ring clockwise until encountering the first server node. That node owns the key.\n- **Scaling Benefit**: When a node is added or removed, only $K/N$ keys are remapped on average (where $K$ is total keys and $N$ is total nodes), unlike traditional modulo partitioning where nearly 100% of keys remap.\n\n### 2. Why Virtual Nodes (vnodes) Are Essential:\n- **Hotspot Problem (Non-Uniform Distribution)**: With a small number of physical servers, hash distribution leaves vast empty arcs on the ring, causing one server to shoulder 70% of traffic while others sit idle.\n- **Virtual Nodes Solution**:\n  - Each physical server is assigned 100-256 virtual tokens on the ring (e.g. `NodeA#1`, `NodeA#2`, ..., `NodeA#200`).\n  - Keys are distributed uniformly across the entire cluster with minimal standard deviation.\n  - Hardware heterogeneity: Powerful physical servers can be assigned 500 virtual nodes, while smaller servers receive 100 virtual nodes, balancing load according to hardware capacity.",
    "keywords": [
      "consistent hashing",
      "hash ring",
      "virtual nodes",
      "vnodes",
      "distributed cache",
      "rehashing"
    ]
  },
  {
    "id": "iq-med-3",
    "difficulty": "medium",
    "difficultyLabel": "Architectural (Medium)",
    "category": "Database Sharding",
    "categoryAr": "تقسيم قواعد البيانات",
    "title": "Database Sharding Strategies & Shard Key Selection",
    "titleAr": "تقسيم قواعد البيانات (Database Sharding): كيف تختار Shard Key لتجنب السجلات الساخنة؟",
    "question": "What is Database Sharding, and what criteria determine the optimal Shard Key to prevent hotspot partitions?",
    "hints": [
      "Compare Range-based sharding with Hash-based sharding.",
      "What is the Celebrity Problem (e.g., Justin Bieber on Twitter), and how does it distort shard balancing?"
    ],
    "answer": "### 1. What is Database Sharding?\nDatabase Sharding is horizontal partitioning of a large database across multiple independent database instances. Each shard contains an identical schema but holds a mutually exclusive subset of the overall data.\n\n### 2. Sharding Strategies:\n- **Range-Based Sharding**: Partitioning by range (e.g. User IDs 1-1M -> Shard 1; 1M-2M -> Shard 2; or by Creation Date).\n  - *Risk*: Massive write hotspots on the latest date range.\n- **Hash-Based Sharding**: Applying a cryptographic hash: `shard_id = hash(shard_key) % num_shards`.\n  - *Advantage*: Uniform distribution across all nodes.\n- **Directory-Based Sharding**: A centralized lookup service maps keys to specific shard IDs, allowing dynamic data rebalancing.\n\n### 3. Selecting the Optimal Shard Key:\n- **High Cardinality**: Shard keys must have millions of distinct values (e.g. `user_id` or `uuid` instead of `country_code` or `gender`).\n- **Co-Locate Related Data**: Choose keys that allow 95%+ of queries to execute against a single shard without expensive cross-shard distributed joins.\n- **Mitigating the Celebrity Hotspot**:\n  - If a specific entity (e.g. celebrity account) receives millions of concurrent writes, append a random salt suffix to the key (`user_123_slot_4`), distributing writes across multiple shards and aggregating during read queries.",
    "keywords": [
      "sharding",
      "shard key",
      "scatter-gather",
      "horizontal partitioning",
      "hotspot",
      "cross-shard join"
    ]
  },
  {
    "id": "iq-med-4",
    "difficulty": "medium",
    "difficultyLabel": "Architectural (Medium)",
    "category": "Rate Limiting",
    "categoryAr": "تحديد معدل الطلبات",
    "title": "Rate Limiting Algorithms: Token Bucket vs Sliding Window",
    "titleAr": "مقارنة خوارزميات Rate Limiting: Token Bucket مقابل Sliding Window Log",
    "question": "Compare the Token Bucket and Sliding Window Log rate limiting algorithms. What are the space and time trade-offs of each?",
    "hints": [
      "How does Token Bucket handle short bursts of traffic?",
      "Why does Sliding Window Log consume high memory under high-throughput request rates?"
    ],
    "answer": "### 1. Token Bucket Algorithm\n- **Mechanism**: A bucket has a maximum capacity $C$ and is continuously refilled with tokens at a rate of $r$ tokens/second. Each request consumes 1 token. If the bucket is empty, the request is rejected (HTTP 429).\n- **Time & Space Complexity**:\n  - **Memory**: $O(1)$ constant memory per user (stores only `tokens_remaining` integer and `last_refill_timestamp`).\n  - **Time**: $O(1)$ computation per request.\n- **Trade-off**: Accommodates legitimate sudden bursts of traffic up to bucket capacity $C$.\n\n### 2. Sliding Window Log Algorithm\n- **Mechanism**: Tracks every request timestamp in a sorted set (e.g. Redis ZSET). When a request arrives, remove all timestamps older than `(now - window_size)` via `ZREMRANGEBYSCORE`. If remaining set size is within the limit, log the new timestamp and allow the request.\n- **Time & Space Complexity**:\n  - **Memory**: $O(M)$ memory where $M$ is the number of requests per window. If a user sends 10,000 requests, 10,000 timestamps must be stored in memory.\n  - **Time**: $O(\\log M)$ to insert and trim sorted sets.\n- **Trade-off**: 100% mathematically precise boundary enforcement with zero burst boundary exploits, but memory-prohibitive for high-throughput public APIs.\n\n### Production Solution: Sliding Window Counter\nCombine the low memory footprint of Fixed Window with the precision of Sliding Window by weighting previous window counts with current window progress:\n$$\text{Estimated Count} = (\text{Count}_{\text{prev}} \times (1 - \text{fraction})) + \text{Count}_{\text{curr}}$$\nDelivers $O(1)$ memory and time with 99%+ rate limiting accuracy.",
    "keywords": [
      "rate limiting",
      "token bucket",
      "leaky bucket",
      "sliding window",
      "redis zset",
      "http 429"
    ]
  },
  {
    "id": "iq-med-5",
    "difficulty": "medium",
    "difficultyLabel": "Architectural (Medium)",
    "category": "Message Queues",
    "categoryAr": "منظومات الرسائل",
    "title": "Message Broker Comparison: Kafka vs RabbitMQ",
    "titleAr": "معالجة الأحداث: ما الفرق بين Kafka و RabbitMQ ومتى تختار كلاً منهما؟",
    "question": "What are the core architectural differences between Apache Kafka and RabbitMQ? When should you deploy each in an enterprise architecture?",
    "hints": [
      "Compare Smart Broker / Dumb Consumer (RabbitMQ) with Dumb Broker / Smart Consumer (Kafka).",
      "What happens to messages after consumption in RabbitMQ versus Kafka?"
    ],
    "answer": "### 1. RabbitMQ (Traditional Message Broker)\n- **Architecture**: Smart Broker, Dumb Consumer.\n- **Message Lifecycle**: Messages are transient; once a consumer acknowledges a message, the broker deletes it from memory/disk.\n- **Routing**: Sophisticated routing topologies (Topic, Direct, Fanout, Headers exchanges).\n- **Throughput**: Moderate (tens of thousands of messages/sec per node).\n- **Best For**: Complex routing rules, individual task acknowledgment, background worker jobs (Celery/Sidekiq), priority queues.\n\n### 2. Apache Kafka (Distributed Append-Only Commit Log)\n- **Architecture**: Dumb Broker, Smart Consumer.\n- **Message Lifecycle**: Immutable sequential append-only log. Messages persist on disk for a configured retention period (e.g. 7 days) regardless of consumption status. Consumers independently manage and track their read offsets.\n- **Replayability**: Consumers can reset offsets and replay historical event streams at will.\n- **Throughput**: Extreme (millions of messages/sec) due to sequential disk I/O, PageCache, and Zero-Copy network transfer.\n- **Best For**: High-throughput event streaming, event sourcing, real-time analytics pipelines, audit logs, and data ingestion to lakes.\n\n### Summary Rule of Thumb:\nDeploy RabbitMQ when you need complex message routing with transactional job queues that delete after processing. Deploy Kafka when you need high-throughput event streaming, event replayability, or cross-system pub/sub integration.",
    "keywords": [
      "kafka",
      "rabbitmq",
      "message broker",
      "event streaming",
      "pub-sub",
      "commit log"
    ]
  },
  {
    "id": "iq-med-6",
    "difficulty": "medium",
    "difficultyLabel": "Architectural (Medium)",
    "category": "High Availability",
    "categoryAr": "التوافرية العالية",
    "title": "Database Replication: Master-Replica vs Multi-Master",
    "titleAr": "استراتيجية التكرار في قواعد البيانات: Master-Replica مقابل Multi-Master",
    "question": "Compare Primary-Replica (Master-Slave) and Multi-Master database replication architectures. What are the concurrency and consistency trade-offs of each?",
    "hints": [
      "Where do write queries route in each model?",
      "What is Replication Lag, and how do you prevent users from seeing stale data after submitting a form?"
    ],
    "answer": "### 1. Primary-Replica (Master-Replica)\n- **Mechanism**: All write operations route exclusively to a single Primary node. The Primary streams change logs (WAL / Binlog) to multiple Read Replicas asynchronously or semi-synchronously.\n- **Advantages**:\n  - Simple concurrency model: Zero write conflicts since all writes serialize through a single leader.\n  - Scales read capacity effortlessly by provisioning additional read replicas.\n- **Challenges**:\n  - **Replication Lag**: Replicas reflect state with slight delays (milliseconds to seconds).\n  - **Failover Downtime**: If the Primary crashes, an election must promote a replica, risking small data loss if replication was asynchronous.\n\n### 2. Multi-Master (Active-Active)\n- **Mechanism**: Multiple database nodes in different data centers accept write operations concurrently and replicate mutations to each other.\n- **Advantages**:\n  - High write availability: If Data Center A fails, Data Center B continues accepting writes immediately.\n  - Low local write latency for global users.\n- **Challenges**:\n  - **Write Conflicts**: Concurrent updates to the same row in two regions require conflict resolution (Last-Write-Wins based on timestamps, or CRDTs).\n  - Severe architectural complexity.\n\n### Mitigating Replication Lag (Read-Your-Own-Writes):\nIn Master-Replica setups, after a user submits an update (e.g. editing their profile), route their read queries to the **Primary** database for the next 5-10 seconds, while routing other users' read traffic to read replicas.",
    "keywords": [
      "replication",
      "master-replica",
      "multi-master",
      "replication lag",
      "read-your-own-writes",
      "active-active"
    ]
  },
  {
    "id": "iq-med-7",
    "difficulty": "medium",
    "difficultyLabel": "Architectural (Medium)",
    "category": "ID Generation",
    "categoryAr": "توليد المعرفات الفريدة",
    "title": "Designing a Distributed Unique ID Generator (Snowflake Approach)",
    "titleAr": "تصميم مولد معرفات فريد موزع (Distributed Unique ID Generator)",
    "question": "How do you design a distributed, strictly 64-bit unique ID generator operating at 100,000 IDs per second without centralized database coordination?",
    "hints": [
      "Why is UUID v4 (128-bit string) sub-optimal for database primary key indexes?",
      "Explain the bit layout of Twitter Snowflake: Timestamp, Machine ID, and Sequence number."
    ],
    "answer": "### Why Not UUID v4?\nUUID v4 values are 128-bit completely random strings. Using them as primary keys in B-Tree indexes (MySQL InnoDB) causes catastrophic random page fragmentation, continuous disk page splits, and severely degrades write performance.\n\n### Twitter Snowflake 64-Bit Structure:\nA distributed 64-bit integer generator produces roughly time-sorted (k-ordered) numerical IDs:\n- **1 bit**: Unused (reserved sign bit, always 0).\n- **41 bits**: Millisecond Epoch Timestamp ($2^{41} \text{ ms} \u0007pprox 69 \text{ years}$ of operational lifespan).\n- **10 bits**: Machine / Datacenter Node ID ($2^{10} = 1024$ unique server nodes).\n- **12 bits**: Monotonic Sequence Counter per node ($2^{12} = 4096$ IDs per millisecond per node).\n\n### Performance Capacity:\nEach machine node can generate $4096 \text{ IDs} \times 1000 \text{ ms} \u0007pprox 4.09 \text{ Million IDs/second}$. Across 1024 nodes, total cluster capacity exceeds 4 Billion IDs/second with zero network locks.\n\n### Critical Edge Case: Clock Drift (NTP)\nIf a node's operating system clock moves backward due to NTP synchronization:\n- If the drift is minor (< 5ms): Pause execution and sleep until the clock catches up.\n- If the drift is significant: Refuse to generate IDs and raise an immediate alert to prevent duplicate ID generation.",
    "keywords": [
      "unique id generator",
      "snowflake",
      "uuid",
      "auto-increment",
      "b-tree",
      "distributed id"
    ]
  },
  {
    "id": "iq-med-8",
    "difficulty": "medium",
    "difficultyLabel": "Architectural (Medium)",
    "category": "Search Engines",
    "categoryAr": "محركات البحث",
    "title": "Inverted Index Architecture in Elasticsearch",
    "titleAr": "كيف يعمل الفهرس المعكوس (Inverted Index) في محركات البحث مثل Elasticsearch؟",
    "question": "How does the Inverted Index data structure function in search engines like Elasticsearch, and how does it achieve sub-100ms full-text search across billions of documents?",
    "hints": [
      "Compare Forward Index (Doc -> Words) with Inverted Index (Word -> Docs).",
      "What is a Posting List, and how are lists intersected during multi-term queries (e.g. 'system AND design')?"
    ],
    "answer": "### 1. Inverted Index Architecture\n- **Forward Index**: Maps Document ID -> Array of Words contained in that document (like a book table of contents).\n- **Inverted Index**: Maps unique Terms (Tokens) -> Posting List of Document IDs containing that term (like the index at the back of a textbook).\n\n### Example:\n- Doc 1: `\"System Design Interview\"`\n- Doc 2: `\"Distributed System Architecture\"`\n\n**Inverted Index**:\n- `\"system\"` -> `[Doc 1, Doc 2]`\n- `\"design\"` -> `[Doc 1]`\n- `\"interview\"` -> `[Doc 1]`\n- `\"distributed\"` -> `[Doc 2]`\n- `\"architecture\"` -> `[Doc 2]`\n\n### 2. Query Execution & Posting List Intersection:\nWhen searching for `\"system AND design\"`:\n1. Lookup term `\"system\"` -> Posting List `[1, 2]`\n2. Lookup term `\"design\"` -> Posting List `[1]`\n3. Compute the Intersection (AND): `[1, 2] ∩ [1] = [1]`\n\n### 3. Production Optimizations in Lucene / Elasticsearch:\n- **Term Dictionary & Term Index**: Terms are organized in a memory-mapped Finite State Transducer (FST) for $O(\text{term length})$ prefix traversal.\n- **Posting List Compression**: Posting lists are sorted numerically and compressed using Frame of Reference (FOR) and Roaring Bitmaps, enabling bitwise SIMD parallel processor operations during intersections.",
    "keywords": [
      "elasticsearch",
      "inverted index",
      "full text search",
      "lucene",
      "tokenization",
      "bm25"
    ]
  },
  {
    "id": "iq-hard-1",
    "difficulty": "hard",
    "difficultyLabel": "Advanced Systems (Hard)",
    "category": "Full System Design",
    "categoryAr": "تصميم أنظمة متكاملة",
    "title": "Design a Scalable URL Shortener (TinyURL)",
    "titleAr": "تصميم خدمة اختصار الروابط على نطاق عالمي (Design TinyURL / Bitly)",
    "question": "Design a globally distributed URL Shortener service (Bitly / TinyURL) handling 100 Million new URLs monthly with 100:1 read-to-write ratio. Detail capacity planning, token generation, caching, and database partitioning.",
    "hints": [
      "Calculate write QPS and 5-year storage capacity.",
      "Compare hashing (MD5/SHA-256 with truncation) versus in-memory Key Generation Service (KGS) with Base62.",
      "Explain the difference between HTTP 301 and HTTP 302 redirects."
    ],
    "answer": "### 1. Capacity Estimation\n- **Writes**: $100\text{M} / (30 \times 86400) \u0007pprox 38 \text{ writes/sec}$ (peak 100 QPS).\n- **Reads (100:1)**: $38 \times 100 \u0007pprox 3,800 \text{ reads/sec}$ (peak 10,000 QPS).\n- **5-Year Storage**: $100\text{M} \times 12 \times 5 = 6 \text{ Billion records}$.\n  - $6\text{B} \times 500 \text{ bytes per entry} \u0007pprox 3\text{ TB}$ of storage.\n\n### 2. Token Generation Strategy\nA 7-character token using Base62 (`[a-zA-Z0-9]`) provides:\n$$62^7 = 3.52 \text{ Trillion unique URLs}$$\n- **Avoid Hashing MD5/SHA256**: Hashing causes collisions and requires database collision checks.\n- **Adopt In-Memory Key Generation Service (KGS)**:\n  - Pre-generate random 7-character Base62 keys and store in two tables: `available_keys` and `used_keys`.\n  - KGS loads 100,000 keys into memory. Dispenses keys in $O(1)$ without database locks or collision risks.\n\n### 3. Database & Caching Architecture\n- **Schema**: `url_mappings (id PK, short_key VARCHAR UNIQUE, original_url TEXT, user_id UUID, created_at TIMESTAMP)`.\n- **Datastore**: NoSQL Key-Value (DynamoDB / Cassandra) or Partitioned PostgreSQL sharded by `hash(short_key) % N`.\n- **Caching**: Redis Cluster caching top 20% viral URLs (Pareto 80/20 rule):\n  $$\text{Daily Cache Size} = (3,800 \times 86400) \times 0.2 \times 500 \text{ bytes} \u0007pprox 32.8\text{ GB RAM}$$\n\n### 4. HTTP 301 vs HTTP 302 Redirects:\n- **HTTP 301 (Permanent)**: Browser caches redirect locally. Reduces server load on repeat visits, but prevents analytics tracking.\n- **HTTP 302 (Found / Temporary)**: Browser queries service on every click. Essential for tracking click analytics, referrer metrics, and geographic demographics.",
    "keywords": [
      "tinyurl",
      "url shortener",
      "base62",
      "http 301 vs 302",
      "bloom filter",
      "dynamodb"
    ]
  },
  {
    "id": "iq-hard-2",
    "difficulty": "hard",
    "difficultyLabel": "Advanced Systems (Hard)",
    "category": "Real-Time & Messaging",
    "categoryAr": "الأنظمة اللحظية",
    "title": "Design Real-Time Scalable Chat Application (WhatsApp/Slack)",
    "titleAr": "تصميم منصة محادثات فورية على نطاق واتساب أو سلاك (Design a Chat System)",
    "question": "Architect a real-time messaging system at WhatsApp / Slack scale (2 Billion users, 100 Billion messages daily). Detail persistent connection management, message ordering, offline delivery, and end-to-end encryption.",
    "hints": [
      "Calculate peak connection count and message throughput.",
      "How do gateway servers route messages across clusters to reach the recipient's active socket?",
      "How do you guarantee strict message sequencing inside high-volume group chats?"
    ],
    "answer": "### 1. High-Level Metrics\n- 100B messages/day $\u0007pprox 1.2\text{M messages/sec avg}$ (5M peak).\n- 500M concurrent connected clients during peak hours.\n\n### 2. Connection Tier & Gateway Management\n- Deploy an Erlang/Elixir or Go WebSocket gateway cluster. Each node holds 100,000+ open persistent bidirectional TCP/WebSocket connections.\n- **Session Registry**: Maintain an in-memory distributed directory in Redis Cluster mapping:\n  `user_id -> gateway_server_ip`\n- When User A sends a message to User B:\n  1. Gateway A looks up User B in Redis.\n  2. If User B is online on Gateway B, Gateway A forwards the message via internal gRPC/Kafka to Gateway B, which pushes it over User B's open socket.\n\n### 3. Offline Message Delivery & Storage\n- If User B is offline:\n  - The message is enqueued in a wide-column datastore (ScyllaDB / Cassandra) partitioned by `recipient_id`.\n  - Trigger a push notification via APNs/FCM.\n  - When User B reconnects, their client queries undelivered messages sequentially, and sends delivery receipts (ACKs) that purge offline messages from server storage.\n\n### 4. Message Ordering in Group Chats\n- Allocate a Monotonic Sequence Number per conversation generated via distributed counters or Redis `INCR`.\n- Clients render messages ordered strictly by `(conversation_id, sequence_id)` rather than device wall-clock timestamps, preventing message interleaving from clock drift.",
    "keywords": [
      "chat system",
      "websockets",
      "cassandra",
      "redis pub-sub",
      "presence system",
      "push notifications"
    ]
  },
  {
    "id": "iq-hard-3",
    "difficulty": "hard",
    "difficultyLabel": "Advanced Systems (Hard)",
    "category": "Social Media Feed",
    "categoryAr": "شبكات التواصل الاجتماعي",
    "title": "Design Social Media News Feed Architecture (Fan-out on Read vs Write)",
    "titleAr": "تصميم الخط الزمني والتغذية الإخبارية (Design News Feed: Twitter / Instagram)",
    "question": "Design a Social Media News Feed architecture (Twitter / Instagram). Contrast Fan-out on Read versus Fan-out on Write, solve the Celebrity Hotspot problem, and explain feed ranking.",
    "hints": [
      "Analyze write amplification when a celebrity with 100M followers posts.",
      "How does Redis ZSET maintain pre-computed timeline feeds?"
    ],
    "answer": "### 1. Fan-out on Read (Pull Model)\n- When User A posts, write only to User A's post list.\n- When User B opens their home feed, query the follow table to find all 500 people User B follows, fetch the latest 20 posts for each from the database, merge and sort them in memory by timestamp.\n- **Pros**: Zero write overhead.\n- **Cons**: Severe read latency; massive multi-shard database query overhead on every feed refresh.\n\n### 2. Fan-out on Write (Push Model)\n- Each active user maintains a pre-computed timeline feed stored as a Redis Sorted Set (ZSET) holding the latest 800 post IDs scored by timestamp.\n- When User A posts, background workers enqueue fan-out jobs that append the new post ID into the Redis timeline of every follower.\n- **Pros**: Instantaneous $O(1)$ feed reads.\n- **Cons**: Extreme write amplification if a user has 50M followers (50M Redis writes per tweet).\n\n### 3. The Hybrid Fan-Out Architecture (Production Standard):\n- **Regular Users (< 25,000 followers)**: Use Fan-out on Write (Push). Posts are eagerly distributed into followers' Redis caches.\n- **Celebrities / Power Users (> 25,000 followers)**: Posts **bypass** write fan-out.\n- When an ordinary user loads their feed:\n  1. Fetch their pre-computed push timeline from Redis.\n  2. Fetch recent posts from the few celebrities they follow.\n  3. Merge the two lists in application memory in sub-10ms.\n\n### 4. Feed Ranking (ML Scoring):\nFeed rankers evaluate candidate post IDs using machine learning models (scoring predicted user engagement probability based on author affinity, media type, recency, and topic relevance) before rendering.",
    "keywords": [
      "news feed",
      "fanout on write",
      "fanout on read",
      "celebrity problem",
      "hybrid model",
      "redis zset"
    ]
  },
  {
    "id": "iq-hard-4",
    "difficulty": "hard",
    "difficultyLabel": "Advanced Systems (Hard)",
    "category": "Streaming & Media",
    "categoryAr": "بث ومعالجة الفيديو",
    "title": "Design Video Streaming Platform (YouTube/Netflix Architecture)",
    "titleAr": "تصميم منصة بث ومشاركة الفيديو مثل YouTube أو Netflix",
    "question": "Design an end-to-end Video Ingestion and Streaming Platform (YouTube / Netflix). Detail asynchronous transcoding pipelines, adaptive bitrate streaming (HLS/DASH), and CDN edge caching.",
    "hints": [
      "How do you process multi-gigabyte video uploads without memory exhaustion?",
      "Explain chunking and video manifest generation."
    ],
    "answer": "### 1. Video Ingestion Pipeline\n1. **Direct S3 Upload**: Client requests a pre-signed URL from API Gateway and uploads raw master video directly to Amazon S3 in multi-part chunks.\n2. **Event Trigger**: S3 emits an `ObjectCreated` event to an Apache Kafka / SQS topic.\n3. **DAG Transcoding Orchestrator**:\n   - A DAG workflow scheduler (Temporal / AWS Step Functions) splits the video into small chunks.\n   - Distributed worker nodes (using hardware-accelerated FFmpeg) transcode chunks in parallel into multiple target resolutions (1080p, 720p, 480p, 360p) and codec formats (H.264, AV1, VP9).\n\n### 2. Adaptive Bitrate Streaming (HLS & MPEG-DASH)\n- Chunks are sliced into 2-6 second `.ts` or `.m4s` segments.\n- Generate master playlist manifests (`.m3u8` or `.mpd`) listing available resolutions, bitrates, and segment URLs.\n- During playback, the client media player continuously monitors current download bandwidth. If Wi-Fi slows down, the player automatically requests the next 3-second chunk at 480p instead of 1080p, guaranteeing zero playback stutter.\n\n### 3. Global CDN Delivery Strategy\n- Video chunks are static, immutable byte streams with infinite cacheability (`Cache-Control: public, max-age=31536000`).\n- Deploy hierarchical caching: Edge CDN PoPs cache the first 10-15 seconds of trending videos to guarantee instantaneous playback initiation (< 200ms TTFB).",
    "keywords": [
      "youtube",
      "netflix",
      "video streaming",
      "hls",
      "dash",
      "transcoding",
      "s3",
      "cdn",
      "abr"
    ]
  },
  {
    "id": "iq-hard-5",
    "difficulty": "hard",
    "difficultyLabel": "Advanced Systems (Hard)",
    "category": "Geo-Distributed Systems",
    "categoryAr": "الأنظمة الجغرافية والمكانية",
    "title": "Design Location-Based Ride Sharing System (Uber/Careem Proximity)",
    "titleAr": "تصميم نظام تتبع سيارات الأجرة مثل Uber أو Careem (Proximity Service)",
    "question": "Design a Location-Based Ride Hailing System (Uber / Careem). Detail geospatial indexing (Uber H3 vs QuadTree), real-time driver dispatching, and handling millions of concurrent location broadcasts.",
    "hints": [
      "Calculate location ping QPS (5M drivers pinging every 4 seconds).",
      "Why is traditional RDBMS PostGIS bounding box queries unsuitable for 1.25M updates/sec?"
    ],
    "answer": "### 1. Scale & Concurrency\n- 5 Million active drivers broadcasting GPS coordinates every 4 seconds:\n$$\text{Ingress QPS} = 5,000,000 / 4 = 1,250,000 \text{ QPS}$$\n- Storing 1.25M writes/second in relational disk databases will crash replication. Location tracking must operate entirely in distributed memory.\n\n### 2. Geospatial Indexing: Uber H3\n- **Uber H3**: Partitions the earth into hierarchical hexagonal cells.\n- **Why Hexagons?**: Unlike squares or triangles, all 6 adjacent neighbors of a hexagon share an identical distance from the central cell centroid. This property simplifies radius search and route expansion algorithms.\n\n### 3. Location Ingestion & In-Memory Storage\n1. Driver mobile apps emit encrypted UDP/WebSocket telemetry packets containing `(driver_id, lat, lng, status)`.\n2. Edge proxies compute the driver's current H3 Cell ID (Resolution 8 $\u0007pprox 460\text{m}$ radius).\n3. Update an in-memory spatial cluster (Redis Geospatial or custom Go memory service):\n   `HSET h3:<cell_id> <driver_id> \"<lat>:<lng>:<timestamp>\"`\n\n### 4. Real-Time Driver Matching Algorithm\nWhen a passenger requests a ride:\n1. Identify the passenger's current H3 cell.\n2. Query the center cell and its $k$-ring neighbor hexagons (7 cells total) to fetch candidate available drivers in $O(1)$ memory lookup.\n3. Compute driving road distance and ETA using Contraction Hierarchies, routing the dispatch offer to the highest-scoring driver.",
    "keywords": [
      "uber",
      "geohash",
      "h3",
      "spatial indexing",
      "redis geo",
      "proximity service",
      "high throughput writes"
    ]
  },
  {
    "id": "iq-hard-6",
    "difficulty": "hard",
    "difficultyLabel": "Advanced Systems (Hard)",
    "category": "E-Commerce",
    "categoryAr": "التجارة الإلكترونية ومبيعات الفلاش",
    "title": "Design High-Concurrency Flash Sale / Ticketmaster Booking System",
    "titleAr": "تصميم نظام حجز ومبيعات سريعة (Flash Sale / Ticket Booking: Ticketmaster)",
    "question": "Architect a High-Concurrency Ticket Booking & Flash Sale System (Ticketmaster). How do you eliminate database deadlocks, handle 100,000 tickets selling out in 60 seconds, and prevent overselling?",
    "hints": [
      "What is the role of a virtual waiting room?",
      "How do atomic Lua scripts in Redis manage temporary inventory reservations with automatic expiration?"
    ],
    "answer": "### 1. Ingress Traffic Shaping: Virtual Waiting Room\n- Millions of users hit the website at 10:00 AM.\n- Directing 1,000,000 users directly to application databases will cause instantaneous connection pool exhaustion.\n- Place a **Virtual Waiting Room** at Cloudflare/Envoy Edge:\n  - Incoming requests receive an encrypted signed queue token.\n  - Users enter a queue, and the waiting room drains users into the checkout application at a fixed, controlled rate (e.g. 1,000 users/second) matching backend transaction capacity.\n\n### 2. High-Performance Inventory Reservation via Redis Lua\n- Store ticket inventory in Redis Cluster: `inventory:event_101:available_seats = 50000`.\n- Execute temporary seat reservation atomically using a Lua Script:\n```lua\nlocal available = redis.call('GET', KEYS[1])\nif tonumber(available) >= tonumber(ARGV[1]) then\n  redis.call('DECRBY', KEYS[1], ARGV[1])\n  redis.call('SETEX', KEYS[2], 600, ARGV[2]) -- 10-min reservation hold\n  return 1\nelse\n  return 0\nend\n```\n- Atomic Lua execution guarantees zero race conditions and zero overselling in memory.\n\n### 3. Asynchronous Checkout & Reconciliation\n- The user receives a 10-minute hold token to complete payment.\n- On payment confirmation: A Kafka event is emitted; workers persist the confirmed booking into PostgreSQL with row-level versioning.\n- If the 10-minute reservation expires without payment: An automated worker increments Redis inventory back to the available pool.",
    "keywords": [
      "flash sale",
      "ticketmaster",
      "overselling",
      "race condition",
      "redis lua",
      "pessimistic locking",
      "waiting room"
    ]
  },
  {
    "id": "iq-exp-1",
    "difficulty": "expert",
    "difficultyLabel": "Staff+ Deep Dive",
    "category": "Distributed Transactions",
    "categoryAr": "المعاملات الموزعة",
    "title": "Distributed Transactions: 2PC vs Saga Pattern (Orchestration & Choreography)",
    "titleAr": "المعاملات الموزعة: متى تتجنب Two-Phase Commit (2PC) وكيف تنفذ Saga Pattern؟",
    "question": "Deep dive into Distributed Transactions: Compare Two-Phase Commit (2PC) with the Saga Pattern (Orchestration vs Choreography). How do you handle compensating failures in distributed microservices?",
    "hints": [
      "Explain the Prepare and Commit phases of 2PC and why it fails across cloud microservices.",
      "How does a Saga manage partial failures when Step 3 fails after Steps 1 and 2 succeeded?"
    ],
    "answer": "### 1. Two-Phase Commit (2PC) - Distributed ACID\n- **Phase 1 (Prepare)**: Coordinator asks all participating resource managers (databases): 'Can you commit?' Participants acquire local database locks and vote YES/NO.\n- **Phase 2 (Commit)**: If all vote YES, coordinator sends COMMIT. If any votes NO or times out, coordinator sends ROLLBACK.\n- **Fatal Production Flaws in Microservices**:\n  - **Blocking Protocol**: Database locks are held across network hops throughout both phases, devastating system throughput.\n  - **Coordinator SPOF**: If coordinator fails after Phase 1, participants remain locked indefinitely, holding active database connections.\n\n### 2. Saga Pattern - Eventual Consistency\nA Saga is a sequence of local transactions where each microservice updates its local database and publishes a domain event that triggers the next step.\n\n#### Orchestration vs Choreography:\n- **Choreography**: Microservices react to events published on Kafka without a central coordinator.\n  - *Best For*: Simple 2-3 step workflows. Degrades into tangled 'event spaghetti' as complexity grows.\n- **Orchestration**: A dedicated orchestrator state machine (e.g. Temporal, Camunda) explicitly issues commands to microservices and monitors step execution.\n  - *Best For*: Complex enterprise business processes requiring centralized status tracking and timeout management.\n\n### 3. Handling Compensating Failures:\nDistributed Sagas cannot execute a physical database `ROLLBACK`. Instead, they execute forward **Compensating Transactions**:\n- Scenario: Flight Booked (Step 1) -> Hotel Booked (Step 2) -> Payment Failed (Step 3).\n- The Orchestrator halts forward execution and executes backward compensating steps: Cancel Hotel Reservation -> Cancel Flight Booking.\n- **Requirement**: All compensating endpoints must be strictly **Idempotent** and resilient to retries.",
    "keywords": [
      "saga pattern",
      "two-phase commit",
      "2pc",
      "distributed transactions",
      "compensating transaction",
      "temporal"
    ]
  },
  {
    "id": "iq-exp-2",
    "difficulty": "expert",
    "difficultyLabel": "Staff+ Deep Dive",
    "category": "Consensus Algorithms",
    "categoryAr": "التوافق والإجماع الموزع",
    "title": "Distributed Consensus: Raft Protocol Deep Dive (Leader Election & Log Replication)",
    "titleAr": "خوارزميات التوافق الموزع: كيف تحقق خوارزمية Raft الإجماع في أنظمة مثل etcd و Kafka؟",
    "question": "Deep dive into Distributed Consensus: Explain the Raft Consensus Algorithm. How does Raft elect a leader, replicate append-only logs, and guarantee safety under network partitions?",
    "hints": [
      "Explain the three node states: Follower, Candidate, Leader.",
      "What is Term number and Randomized Election Timeout?",
      "How does Raft resolve log divergence when a deposed leader rejoins the cluster?"
    ],
    "answer": "### 1. The Three Node States in Raft:\n1. **Follower**: Passive state; responds to heartbeats and election requests.\n2. **Candidate**: State entered when follower times out without receiving a heartbeat; initiates election.\n3. **Leader**: Single active node handling all client writes, log replication, and heartbeat emission.\n\n### 2. Leader Election Mechanism:\n- Every node maintains a **Randomized Election Timeout** (150ms - 300ms) to prevent split-vote deadlocks.\n- If a follower hears no heartbeat before timeout, it increments its **Term number**, transitions to Candidate, votes for itself, and broadcasts `RequestVote` RPCs.\n- If it receives votes from a majority ($\frac{N}{2} + 1$), it becomes the legitimate Leader and broadcasts immediate heartbeats.\n\n### 3. Log Replication & Safety Guarantees:\n1. Client writes are sent to the Leader, which appends the entry to its local log.\n2. Leader broadcasts `AppendEntries` RPCs to all followers.\n3. Once a majority of followers acknowledge appending the entry, the Leader marks it as **Committed** and applies it to its state machine.\n4. Leader notifies followers of commit index in subsequent heartbeats.\n\n### 4. Handling Network Partitions (Split-Brain Safety):\n- Cluster of 5 nodes splits into `{Node 1, Node 2}` (Minority) and `{Node 3, Node 4, Node 5}` (Majority).\n- Minority partition cannot elect a leader because it cannot achieve a majority vote ($\frac{5}{2} + 1 = 3$). Writes sent to the minority leader are never committed.\n- Majority partition elects a new leader with an incremented Term and continues committing client writes.\n- When the network partition heals: The old leader sees a higher Term number, steps down to Follower, and overwrites its uncommitted log entries to match the canonical majority log.",
    "keywords": [
      "raft",
      "consensus",
      "etcd",
      "split-brain",
      "paxos",
      "quorum",
      "log replication"
    ]
  },
  {
    "id": "iq-exp-3",
    "difficulty": "expert",
    "difficultyLabel": "Staff+ Deep Dive",
    "category": "Reliability & Resilience",
    "categoryAr": "المتانة ومقاومة الأعطال",
    "title": "Advanced Resilience Patterns: Circuit Breakers, Bulkheads & Load Shedding",
    "titleAr": "استراتيجيات الصمود المتقدمة: قاطع الدائرة (Circuit Breaker) وتقليص الحمل (Load Shedding)",
    "question": "Explain Advanced Resiliency Engineering: How do Circuit Breakers, Bulkheads, and Load Shedding protect distributed microservices from cascading systemic collapse?",
    "hints": [
      "Explain the three states of a Circuit Breaker: Closed, Open, Half-Open.",
      "How does the Bulkhead pattern isolate failure blast radius?",
      "How does Adaptive Load Shedding prioritize essential traffic over secondary background tasks?"
    ],
    "answer": "### 1. Circuit Breaker Pattern\n- **Closed**: Requests pass through normally. Failure counts are tracked.\n- **Open**: When failure rate exceeds a threshold (e.g. 50% errors over 10 seconds), the circuit trips OPEN. Requests fail immediately without attempting network calls, shielding the struggling downstream service from further load.\n- **Half-Open**: After a sleep timeout (e.g. 30 seconds), the breaker permits a limited trial of requests through. If successful, it transitions back to CLOSED; if failures persist, it returns to OPEN.\n\n### 2. Bulkhead Pattern (Ship Hull Compartmentalization)\n- In shipbuilding, bulkheads isolate hull breaches so water in one compartment does not sink the entire ship.\n- In software: Allocate isolated thread pools and connection pools per downstream dependency:\n  - Recommendation Service uses ThreadPool A (max 20 threads).\n  - Checkout Service uses ThreadPool B (max 100 threads).\n- If Recommendation Service hangs, ThreadPool A exhausts its 20 threads, but Checkout Service remains completely unaffected.\n\n### 3. Adaptive Load Shedding (Graceful Degradation)\n- When CPU or memory approaches 90%, systems enter a death spiral of queue latency and thread context switching.\n- **Load Shedding**: The gateway monitors internal queuing delays and actively rejects low-priority incoming requests with HTTP 503 / 429 to protect core services:\n  - Priority 1: Payment and Order Submission (always admitted).\n  - Priority 2: Browsing and Search (throttled).\n  - Priority 3: Analytics, Recommendation, and Marketing banners (dropped immediately).",
    "keywords": [
      "circuit breaker",
      "cascading failure",
      "load shedding",
      "bulkhead",
      "resilience",
      "graceful degradation"
    ]
  },
  {
    "id": "iq-exp-4",
    "difficulty": "expert",
    "difficultyLabel": "Staff+ Deep Dive",
    "category": "Change Data Capture",
    "categoryAr": "التقاط تغييرات البيانات",
    "title": "Transactional Outbox Pattern & Change Data Capture (CDC)",
    "titleAr": "نمط Transactional Outbox والتقاط تغييرات البيانات عبر CDC و Debezium",
    "question": "Explain the Transactional Outbox Pattern combined with Change Data Capture (CDC). Why is dual-writing to SQL and Kafka an anti-pattern that guarantees data inconsistency?",
    "hints": [
      "What happens if a service commits a database transaction, but crashes before sending the message to Kafka?",
      "How does Debezium read database Write-Ahead Logs (WAL) to publish events with zero data loss?"
    ],
    "answer": "### Why Dual-Writing is a Production Anti-Pattern:\n```javascript\n// ANTIPATTERN: Dual Writing\nawait db.orders.create(orderData); // Step 1: SQL commit\nawait kafka.publish(\"orders\", orderData); // Step 2: Kafka emit\n```\n- If Step 1 succeeds but the node crashes, network fails, or Kafka times out during Step 2: The database has the order, but the event is permanently lost. Downstream fulfillment services never process it!\n- If you invert the order (Kafka first, then DB), and the DB transaction fails: Kafka downstream services process an order that does not exist in the database!\n\n### The Transactional Outbox Pattern:\nInstead of writing to two separate distributed systems, write to an **Outbox table** inside the same database within a single local ACID transaction:\n```sql\nBEGIN TRANSACTION;\nINSERT INTO orders (id, customer_id, total) VALUES (...);\nINSERT INTO outbox_events (event_id, aggregate_type, payload, created_at) VALUES (...);\nCOMMIT;\n```\nDatabase ACID guarantees that either both rows are committed or neither is.\n\n### Change Data Capture (CDC) via Debezium:\n- A CDC daemon (Debezium / Kafka Connect) reads the database internal Write-Ahead Log (PostgreSQL WAL or MySQL Binlog) at the storage engine level.\n- When it detects a new committed row in `outbox_events`, it streams the event to Apache Kafka with guaranteed at-least-once delivery.\n- Guarantees absolute consistency between primary datastore and event streaming bus with zero dual-write vulnerabilities.",
    "keywords": [
      "transactional outbox",
      "cdc",
      "debezium",
      "dual-write",
      "wal",
      "kafka connect",
      "event-driven"
    ]
  },
  {
    "id": "iq-exp-5",
    "difficulty": "expert",
    "difficultyLabel": "Staff+ Deep Dive",
    "category": "Global Architecture",
    "categoryAr": "المعمارية العالمية والمناطق المتعددة",
    "title": "Multi-Region Active-Active Deployment: Challenges & Solutions",
    "titleAr": "معمارية المراكز المتعددة النشطة (Multi-Region Active-Active Architecture)",
    "question": "Architect a Multi-Region Active-Active deployment across multiple continents. How do you resolve write conflicts, handle data sovereignty regulations (GDPR), and orchestrate automated cross-region failover?",
    "hints": [
      "Compare Active-Passive (Disaster Recovery) with Active-Active.",
      "What is Conflict-Free Replicated Data Types (CRDTs) versus Last-Write-Wins (LWW)?",
      "How does Anycast DNS route users to their regional primary datastore?"
    ],
    "answer": "### 1. Active-Active vs Active-Passive\n- **Active-Passive**: Region A serves all traffic; Region B is idle standby. (Wastes 50% infrastructure cost, and failover takes minutes).\n- **Active-Active**: Both Region A (US-East) and Region B (EU-West) serve live read and write traffic simultaneously.\n\n### 2. Multi-Region Write Conflict Resolution\nWhen two users update the same record concurrently in US-East and EU-West:\n- **Strategy 1: Geographical Partitioning (Home Region Routing)**:\n  - Partition user data strictly by geographic residency (e.g. EU users home-routed to EU-West via Anycast IP routing).\n  - All writes for that user route to their home region, eliminating cross-region write concurrency. Satisfies GDPR residency compliance.\n- **Strategy 2: Conflict-Free Replicated Data Types (CRDTs)**:\n  - For collaborative shared state (e.g. counters, sets, shopping carts), use CRDT data structures that merge mathematically deterministically across regions without distributed locks.\n- **Strategy 3: Last-Write-Wins (LWW)** with TrueTime / Hybrid Logical Clocks (HLC) to break ties deterministically.\n\n### 3. Automated Cross-Region Failover\n- Regional edge proxies perform synthetic heartbeat health checks against regional application tiers.\n- If Region A fails: BGP Anycast automatically reroutes global traffic to Region B in under 30 seconds.\n- Secondary region provisions extra capacity using cloud auto-scaling, and background reconciliation resolves outstanding asynchronous replication lag.",
    "keywords": [
      "multi-region",
      "active-active",
      "truetime",
      "crdt",
      "disaster recovery",
      "geo-dns",
      "conflict resolution"
    ]
  },
  {
    "id": "iq-react-1",
    "difficulty": "medium",
    "difficultyLabel": "Architectural (Medium)",
    "category": "React.js",
    "categoryAr": "محرك وداخليات React",
    "title": "React Fiber Architecture & Reconciliation Algorithm Deep Dive",
    "titleAr": "المحرك الداخلي لـ React: كيف يعمل React Fiber وخوارزمية Reconciliation؟",
    "question": "Deep dive into React Internals: How does React Fiber function, and how does its Reconciliation algorithm enable concurrent scheduling, time-slicing, and interruptible rendering?",
    "hints": [
      "Compare the legacy Stack Reconciler (synchronous recursive) with the Fiber linked list structure.",
      "Explain the difference between the Render phase (interruptible) and the Commit phase (synchronous DOM mutation).",
      "What is Double Buffering (current vs workInProgress trees)?"
    ],
    "answer": "### 1. Legacy Stack Reconciler vs React Fiber\n- **Legacy Stack Reconciler (React 15 and below)**: Traversed the component tree recursively via the JavaScript call stack. Once rendering began, it could not be paused. For large component trees, rendering blocked the browser main thread for 100ms+, causing visual stutter and dropped frames.\n- **React Fiber (React 16+)**: Completely rewrote reconciliation. Represents the component tree as a mutable **Linked List of Fiber Nodes**. Because it is a manual linked list rather than recursive function calls, React can pause traversal, yield control back to the browser to handle user input, and resume work later.\n\n### 2. Fiber Node Architecture:\nEach Fiber node is a plain JavaScript object representing a unit of work:\n```javascript\nfiber = {\n  type: ComponentFunctionOrString,\n  key: string,\n  stateNode: DOMNodeOrInstance,\n  child: FiberNode,      // First child\n  sibling: FiberNode,    // Immediate sibling\n  return: FiberNode,     // Parent fiber\n  memoizedState: any,    // Hooks linked list\n  flags: Placement | Update | Deletion\n};\n```\n\n### 3. The Two Phases of Reconciliation:\n1. **Render Phase (Asynchronous & Interruptible)**:\n   - Traverses the `workInProgress` tree, calculates diffs, and assigns effect flags.\n   - Utilizes Cooperative Scheduling (`requestIdleCallback` / Scheduler package) with Time-Slicing (5ms execution budget).\n   - If a higher-priority event occurs (e.g. user typing in an input), React pauses the render phase, handles user input, and either resumes or discards the low-priority work.\n2. **Commit Phase (Synchronous & Uninterruptible)**:\n   - Takes all calculated effect flags and applies DOM mutations (inserts, updates, deletes) in a single fast, synchronous pass, ensuring the user never observes incomplete intermediate UI states.\n\n### 4. Double Buffering Pattern:\nReact maintains two Fiber trees simultaneously:\n- **current**: Represents the UI currently painted on screen.\n- **workInProgress**: The alternate tree being computed in memory.\nWhen the commit phase completes, React flips a single pointer (`root.current = workInProgress`), achieving instantaneous screen updates identical to graphics double-buffering.",
    "keywords": [
      "react fiber",
      "reconciliation",
      "virtual dom",
      "render phase",
      "commit phase",
      "time slicing",
      "double buffering"
    ]
  },
  {
    "id": "iq-react-2",
    "difficulty": "hard",
    "difficultyLabel": "Advanced Systems (Hard)",
    "category": "React.js",
    "categoryAr": "محرك وداخليات React",
    "title": "React Re-render Mechanics, Memoization Pitfalls & Context Performance",
    "titleAr": "تفكيك أزمات إعادة التصيير (Re-renders) وإدارة الحالة وأسرار useMemo و useCallback",
    "question": "Diagnose React re-render performance bottlenecks. What causes unnecessary re-renders, what are the subtle traps of React.memo, useCallback, and useMemo, and how do you resolve Context API performance collapse?",
    "hints": [
      "What triggers a component re-render?",
      "Why does inline anonymous functions or object literals break React.memo?",
      "How does Context Splitting prevent unrelated components from re-rendering?"
    ],
    "answer": "### 1. What Triggers a Component Re-Render?\nA component re-renders under only 4 conditions:\n1. State change via `useState` / `useReducer`.\n2. **Parent component re-renders** (default React behavior, even if child props have not changed!).\n3. Change in consumed Context value via `useContext`.\n4. State change in a Custom Hook utilized by the component.\n\n### 2. The Pitfalls of Memoization:\n- **React.memo**:\n  - Performs a shallow comparison (`Object.is`) of incoming props. If props are identical, it skips re-rendering.\n  - **The Anonymous Function Trap**: If the parent passes an inline function (`onClick={() => doSomething()}`) or object (`style={{ color: 'red' }}`), a new object reference is instantiated in memory on every parent render. Shallow comparison fails, rendering `React.memo` completely useless!\n- **useCallback**:\n  - Does not speed up the function itself! Its sole purpose is to preserve **Referential Identity** across renders to prevent invalidating `React.memo` on child components.\n- **useMemo**:\n  - Caches the result of an expensive calculation, or preserves referential identity of an object/array passed into a dependency array.\n\n### 3. The Context API Performance Collapse & Architectural Solutions:\n- **The Problem**: If you store multiple unrelated state values in a single Context (`<AppContext.Provider value={{ user, cart, theme }}>`), any update to `cart` forces **every component** calling `useContext(AppContext)` to re-render, even components that only read `theme`!\n- **Staff+ Solutions**:\n  1. **Context Splitting**: Split monolithic contexts into focused, isolated contexts (`UserContext`, `CartContext`, `ThemeContext`).\n  2. **Separate State and Dispatch**: Provide separate contexts for state data and updater functions (`CartStateContext` and `CartDispatchContext`).\n  3. **Atomic State Libraries**: For high-frequency state updates, migrate to atomic state management (Zustand, Jotai) supporting selector-based subscriptions (`useStore(state => state.cart.count)`).",
    "keywords": [
      "react rerender",
      "usememo",
      "usecallback",
      "react memo",
      "context api",
      "referential equality",
      "zustand"
    ]
  },
  {
    "id": "iq-react-3",
    "difficulty": "hard",
    "difficultyLabel": "Advanced Systems (Hard)",
    "category": "React.js",
    "categoryAr": "محرك وداخليات React",
    "title": "React Hooks Internals & Concurrent Features (useTransition, Suspense)",
    "titleAr": "داخليات الـ Hooks وقواعدها الصارمة ونمط Concurrent Features (useTransition)",
    "question": "Explain the internal mechanics of React Hooks. Why must Hooks never be invoked inside loops or conditions, and how do Concurrent Features (useTransition, Suspense) eliminate main-thread UI blocking?",
    "hints": [
      "How does React track hook state on the fiber node using an internal linked list?",
      "What is the difference between urgent updates and transition updates in React 18+?"
    ],
    "answer": "### 1. React Hooks Internal Mechanics\n- React does not track Hooks by variable names; it tracks them as a **Sequential Linked List of Hook Objects** stored on the component's Fiber node (`fiber.memoizedState`).\n- During initial mount:\n  - Each Hook invocation appends a node: `{ memoizedState: initialVal, next: nextHookNode }`.\n  - An internal pointer moves forward sequentially.\n- During re-renders:\n  - React resets its internal pointer to the head of the linked list. Each Hook call matches the next node in sequential order.\n- **Why Hooks Cannot Be Placed in `if` Statements or Loops (Rule of Hooks)**:\n  - If a Hook is conditionally skipped inside an `if` block, all subsequent Hooks shift index positions! The second Hook receives the state of the third Hook, causing instant state corruption and catastrophic crashes.\n\n### 2. Concurrent React: Urgent Updates vs Transitions\nPrior to React 18, all state updates were urgent and blocking. React 18 introduced Concurrent Features allowing developers to prioritize UI interactions:\n- **Urgent Updates**: Direct user input, typing in an input box, clicking buttons, dragging sliders. Must render immediately to maintain responsiveness.\n- **Transition Updates (Non-Urgent)**: Filtering a list of 10,000 items based on what the user typed. Can be computed in the background.\n\n### 3. useTransition Example:\n```javascript\nconst [isPending, startTransition] = useTransition();\n\nfunction handleSearch(e) {\n  // Urgent update: Reflect typed character immediately in input field\n  setInputValue(e.target.value);\n\n  // Transition update: Compute heavy filter in background without freezing input\n  startTransition(() => {\n    setSearchQuery(e.target.value);\n  });\n}\n```\n**Engineering Benefit**: The text input remains instantaneous and stutter-free. If the user types another character before the background filter completes, React automatically discards the outdated transition and prioritizes the new keystroke!",
    "keywords": [
      "hooks internals",
      "memoizedstate",
      "usetransition",
      "usedeferredvalue",
      "concurrent react",
      "linked list"
    ]
  },
  {
    "id": "iq-next-1",
    "difficulty": "medium",
    "difficultyLabel": "Architectural (Medium)",
    "category": "Next.js",
    "categoryAr": "معمارية Next.js",
    "title": "Next.js Rendering Strategies: SSR vs SSG vs ISR vs CSR Trade-offs",
    "titleAr": "مقارنة استراتيجيات الرندرة في Next.js: SSR مقابل SSG مقابل ISR مقابل CSR",
    "question": "Compare the core rendering strategies in Next.js: Server-Side Rendering (SSR), Static Site Generation (SSG), Incremental Static Regeneration (ISR), and Client-Side Rendering (CSR). How do you select the optimal strategy?",
    "hints": [
      "Evaluate Time-To-First-Byte (TTFB), build times, and SEO indexability.",
      "How does ISR allow static pages to revalidate in the background without rebuilding the entire application?"
    ],
    "answer": "### 1. Static Site Generation (SSG)\n- **Mechanism**: HTML is generated once at build time (`next build`) and deployed across CDN edge nodes.\n- **Pros**: Fastest possible TTFB (sub-20ms from CDN cache), zero database load on page requests, perfect SEO.\n- **Cons**: Build times balloon exponentially for sites with millions of dynamic pages; data becomes stale until next deployment.\n- **Best For**: Marketing landing pages, documentation, blogs.\n\n### 2. Server-Side Rendering (SSR)\n- **Mechanism**: HTML is dynamically computed and rendered on a Node.js server for every incoming request.\n- **Pros**: Always serves fresh, real-time data; complete personalization based on user authentication cookies; full SEO support.\n- **Cons**: High TTFB (browser waits for server DB queries and rendering); server compute costs scale directly with traffic volume.\n- **Best For**: User dashboards, personalized banking portals.\n\n### 3. Incremental Static Regeneration (ISR)\n- **Mechanism**: Serves cached static HTML from CDN while revalidating data in the background after a specified time window:\n```javascript\nexport const revalidate = 60; // Revalidate every 60 seconds\n```\n- **Stale-While-Revalidate Workflow**:\n  - User 1 visits after 60s: Receives instantly cached static page (fast TTFB), while Next.js triggers a background regeneration.\n  - User 2 visits: Receives the newly generated static page seamlessly.\n- **Best For**: E-commerce product catalog pages, news publications.\n\n### 4. Client-Side Rendering (CSR)\n- **Mechanism**: Server returns minimal HTML shell; browser downloads JavaScript bundle and executes data fetching via React.\n- **Best For**: Private internal enterprise portals where public SEO is irrelevant.",
    "keywords": [
      "next.js rendering",
      "ssr",
      "ssg",
      "isr",
      "csr",
      "stale-while-revalidate",
      "ttfb",
      "revalidatepath"
    ]
  },
  {
    "id": "iq-next-2",
    "difficulty": "hard",
    "difficultyLabel": "Advanced Systems (Hard)",
    "category": "Next.js",
    "categoryAr": "معمارية Next.js",
    "title": "React Server Components (RSC) Architecture in Next.js App Router",
    "titleAr": "مكونات الخادم والعميل (React Server Components - RSC) في App Router",
    "question": "Explain React Server Components (RSC) architecture in the Next.js App Router. What are the security, bundle size, and performance differences between Server Components and Client Components ('use client')?",
    "hints": [
      "Where do Server Components execute, and what is transmitted to the browser?",
      "Why can Server Components directly access database connections and secrets without exposing them to client bundles?"
    ],
    "answer": "### 1. What are React Server Components (RSC)?\nBy default, all components inside the Next.js App Router are **Server Components**. They execute exclusively on the server during request time or build time, and **never ship their JavaScript code to the browser bundle**.\n\n### 2. Key Differences: Server vs Client Components:\n| Feature | Server Components (Default) | Client Components (`'use client'`) |\n| :--- | :--- | :--- |\n| **Execution Environment** | Server only | Server (initial SSR) + Browser hydration |\n| **Client Bundle Impact** | **0 KB JavaScript** sent to client | Full component JS shipped to client |\n| **Direct Backend Access** | Direct access to DB, files, internal microservices | Restricted to HTTP fetch APIs |\n| **Secrets & Credentials** | Safe to read `process.env.DB_PASSWORD` | Never expose credentials |\n| **Interactivity & State** | No `useState`, `useEffect`, or event handlers | Full access to state, effects, and events |\n\n### 3. The RSC Wire Format (Streaming Serialization):\n- Server Components do not just return HTML; they stream an **RSC Payload**: a compact JSON-like serialized representation of the component tree with slots for Client Components.\n- The browser parses the stream and seamlessly slots in interactive Client Components without losing existing client UI state.\n\n### 4. Best Practice Pattern:\nKeep components as Server Components by default. Push Client Components (`'use client'`) down to the smallest leaves of the component tree (e.g. an interactive `<LikeButton />` or `<SearchBar />`), keeping parent data-fetching layouts as zero-bundle Server Components.",
    "keywords": [
      "react server components",
      "rsc",
      "use client",
      "rsc payload",
      "app router",
      "hydration boundary",
      "zero bundle size"
    ]
  },
  {
    "id": "iq-next-3",
    "difficulty": "expert",
    "difficultyLabel": "Staff+ Deep Dive",
    "category": "Next.js",
    "categoryAr": "معمارية Next.js",
    "title": "Next.js 14/15 Deep Dive: The 4 Caching Mechanisms & Cache Invalidation",
    "titleAr": "مستويات التخزين المؤقت الأربعة في Next.js (The 4 Caching Layers) وإدارتها",
    "question": "Deep dive into Next.js Caching Architecture: Explain the Four Distinct Caching Layers and how to precisely invalidate each.",
    "hints": [
      "Explain Request Memoization, Data Cache, Full Route Cache, and Router Cache.",
      "How do `revalidatePath` and `revalidateTag` selectively bust cached data?"
    ],
    "answer": "### The 4 Caching Mechanisms in Next.js:\n1. **Request Memoization (Server - Per-Request Scope)**:\n   - Deduplicates identical `fetch('https://api.com/user')` calls executed across multiple Server Components during the same server render cycle. Scope is short-lived for the duration of a single request.\n2. **Data Cache (Server - Persistent Across Deployments)**:\n   - Persists fetched data across incoming requests and user sessions in an in-memory or filesystem store. Controlled via:\n   `fetch(url, { next: { revalidate: 3600, tags: ['products'] } })`.\n3. **Full Route Cache (Server - Build & Invalidation Scope)**:\n   - Automatically caches the rendered HTML and RSC Payload of static routes on the server, serving them instantly to all users.\n4. **Router Cache (Client - Session In-Memory Cache)**:\n   - Stores visited RSC payloads in browser memory for instant backward/forward navigation without server round-trips.\n\n### Invalidation Strategies:\n- **On-Demand Time-Based**: `export const revalidate = 300` (auto-expires after 5 minutes).\n- **On-Demand Tag-Based Invalidation**:\n```javascript\nimport { revalidateTag, revalidatePath } from 'next/cache';\n\nexport async function updateProductAction() {\n  await db.products.update(...);\n  revalidateTag('products'); // Purges only data tagged with 'products' across all pages\n  revalidatePath('/products/[id]'); // Purges full route cache for this page\n}\n```\nTag-based invalidation allows updating millions of product pages precisely when product data changes without rebuilds.",
    "keywords": [
      "next.js caching",
      "request memoization",
      "data cache",
      "full route cache",
      "router cache",
      "revalidatetag",
      "prefetching"
    ]
  },
  {
    "id": "iq-node-1",
    "difficulty": "medium",
    "difficultyLabel": "Architectural (Medium)",
    "category": "Node.js & Express",
    "categoryAr": "محرك Node.js و Express",
    "title": "Node.js Event Loop Phases, Libuv & Microtasks Priority",
    "titleAr": "المحرك الداخلي لـ Node.js: تفكيك حلقة الأحداث (Event Loop) ومراحلها الست",
    "question": "Deconstruct the Node.js Event Loop and Libuv architecture: Explain the Six Distinct Event Loop Phases, Microtasks prioritization (`process.nextTick` vs `Promise`), and how the thread pool operates.",
    "hints": [
      "List the six phases: Timers, Pending Callbacks, Idle/Prepare, Poll, Check, Close.",
      "Why does `process.nextTick` preempt Promises and I/O callbacks?"
    ],
    "answer": "### 1. Node.js Single-Threaded Event Loop & Libuv\nNode.js executes user JavaScript code on a single main thread. Underlying asynchronous I/O (filesystem, DNS resolution, cryptographic operations) is delegated to **Libuv's C thread pool** (default 4 worker threads, configurable via `UV_THREADPOOL_SIZE`).\n\n### 2. The Six Event Loop Phases (Executed in Strict Order):\n1. **Timers Phase**: Executes callbacks scheduled by `setTimeout()` and `setInterval()` whose threshold has elapsed.\n2. **Pending Callbacks Phase**: Executes I/O callbacks deferred from previous loop iterations (e.g. TCP errors).\n3. **Idle, Prepare Phase**: Internal Libuv housekeeping.\n4. **Poll Phase**: Retrieves new I/O events (network connections, data reads). If poll queue is empty, the loop blocks and waits for incoming I/O events, unless `setImmediate()` timers exist.\n5. **Check Phase**: Executes callbacks scheduled by `setImmediate()`.\n6. **Close Callbacks Phase**: Executes closure callbacks (e.g. `socket.on('close')`).\n\n### 3. Microtask Queues (Highest Priority Preemption):\nBetween **every single phase** and between individual callback executions, the Event Loop pauses to completely drain the Microtask Queues:\n1. **`process.nextTick` Queue**: Highest priority; drains before any Promises.\n2. **Promise Microtask Queue**: Drains resolved `.then()`, `.catch()`, and `async/await` continuations.\n\n### The `nextTick` Starvation Trap:\nRecursively invoking `process.nextTick()` will starve the Event Loop, completely preventing it from ever reaching the Poll or Timers phases and causing server deadlocks!",
    "keywords": [
      "event loop",
      "libuv",
      "thread pool",
      "process.nexttick",
      "setimmediate",
      "microtasks",
      "macrotasks",
      "epoll"
    ]
  },
  {
    "id": "iq-node-2",
    "difficulty": "medium",
    "difficultyLabel": "Architectural (Medium)",
    "category": "Node.js & Express",
    "categoryAr": "محرك Node.js و Express",
    "title": "Express.js Internals: Middleware Onion Model, Router Stack & Error Handling",
    "titleAr": "معمارية Express.js الداخلية: تدفق البرمجيات الوسيطة (Middleware Pipeline) ومعالجة الأخطاء",
    "question": "Deconstruct Express.js internal architecture: Explain the Middleware Onion Model, Router Stack traversal, and centralized Error Handling mechanics.",
    "hints": [
      "How does `app.use()` populate the internal `app._router.stack` array?",
      "Why must error-handling middleware explicitly define four arguments: `(err, req, res, next)`?"
    ],
    "answer": "### 1. The Internal Router Stack (`_router.stack`)\nExpress is fundamentally a linked series of layers. When you register `app.use()` or `app.get()`, Express appends a new `Layer` object to an internal array (`app._router.stack`):\n```javascript\nLayer {\n  handle: [Function: middleware],\n  name: 'corsMiddleware',\n  route: undefined, // defined for route handlers\n  keys: [],\n  regexp: /^\\/api\\/v1\\/?(?=\\/|$)/i\n}\n```\nWhen an HTTP request arrives, Express invokes `router.handle()`, which iterates sequentially through `_router.stack`, executing regex matching against `req.url`.\n\n### 2. The Middleware Pipeline & Next()\n- Each middleware receives `(req, res, next)`.\n- Invoking `next()` tells Express to increment the internal stack index and execute the subsequent Layer.\n- Forgetting to call `next()` or send a response (`res.send()`) causes the client HTTP connection to hang until timeout.\n\n### 3. Centralized Error Handling Mechanics:\nExpress uses JavaScript's `Function.length` property to inspect how many arguments a middleware function declares:\n```javascript\n// Regular Middleware: length = 3\napp.use((req, res, next) => { ... });\n\n// Error-Handling Middleware: length = 4 (MANDATORY!)\napp.use((err, req, res, next) => {\n  console.error(\"Centralized Error:\", err.stack);\n  res.status(err.statusCode || 500).json({ error: err.message });\n});\n```\nIf an error occurs upstream (`next(err)` or an unhandled exception in async handlers), Express bypasses all remaining standard 3-argument middlewares, jumping directly to the first 4-argument error-handling layer.",
    "keywords": [
      "express middleware",
      "router stack",
      "next function",
      "error handling middleware",
      "function length",
      "async errors"
    ]
  },
  {
    "id": "iq-node-3",
    "difficulty": "hard",
    "difficultyLabel": "Advanced Systems (Hard)",
    "category": "Node.js & Express",
    "categoryAr": "محرك Node.js و Express",
    "title": "Memory Leak Diagnostics & Stream Pipeline Architecture in Node.js",
    "titleAr": "التعامل مع تسرب الذاكرة (Memory Leaks) ومعالجة الملفات الضخمة عبر Streams",
    "question": "Diagnose and resolve Node.js Memory Leaks and backpressure bottlenecks: How do you read Heap Snapshots to find leaks, and how do Node.js Streams prevent memory exhaustion during gigabyte file processing?",
    "hints": [
      "Identify classic leak sources: Global variables, uncleaned event listeners, closures.",
      "Explain Stream Backpressure: What happens if readable stream is faster than writable stream?"
    ],
    "answer": "### 1. Common Node.js Memory Leak Causes\n1. **Uncleaned Event Listeners**: Adding listeners (`emitter.on('data')`) on long-lived objects without calling `removeListener()` prevents garbage collection.\n2. **Accidental Global Variables & Unbounded Caches**: Global `Map` or `Set` objects storing user data without TTL eviction grow infinitely.\n3. **Closures**: Functions retaining references to large outer scopes prevent deallocation of large parent payloads.\n\n### 2. Diagnosing Leaks with Chrome DevTools:\n1. Start Node with `--inspect` flag (`node --inspect server.js`).\n2. Open Chrome (`chrome://inspect`) -> Memory tab.\n3. Take two **Heap Snapshots**:\n   - Baseline Snapshot under normal load.\n   - Comparison Snapshot after running load tests.\n4. Select **Comparison View** and sort by **Retained Size** (memory prevented from being collected) to pinpoint leaking constructor objects.\n\n### 3. Stream Backpressure Management:\n- Reading a 10GB file using `fs.readFile()` loads the entire 10GB into Node's V8 heap, causing immediate Out-of-Memory (OOM) crashes.\n- **Node.js Streams** process data in small 64KB chunks (`highWaterMark`).\n- **Backpressure Mechanism**:\n  - If a source stream produces data faster than a destination can write to disk, the destination buffer fills up.\n  - `writable.write(chunk)` returns `false`, signaling the readable stream to pause reading (`readable.pause()`).\n  - Once the buffer drains, the destination emits the `'drain'` event, resuming reading (`readable.resume()`).\n- Always utilize `stream.pipeline()` which manages backpressure, errors, and cleanup automatically.",
    "keywords": [
      "memory leak",
      "streams",
      "backpressure",
      "fs.readfile",
      "heap snapshot",
      "garbage collector",
      "v8 out of memory"
    ]
  },
  {
    "id": "iq-node-4",
    "difficulty": "expert",
    "difficultyLabel": "Staff+ Deep Dive",
    "category": "Node.js & Express",
    "categoryAr": "محرك Node.js و Express",
    "title": "Scaling Express.js: Cluster Mode, Worker Threads & Event Loop Blocking Defense",
    "titleAr": "توسيع Express للإنتاج الفائق: Cluster Module، Worker Threads، والحماية من حجب الـ Event Loop",
    "question": "Architect high-performance Express.js for production scale: How do you scale across multi-core CPUs via the Cluster Module, utilize Worker Threads for CPU-bound tasks, and prevent Event Loop blocking?",
    "hints": [
      "Explain Master-Worker process fork model and round-robin port sharing.",
      "Compare Worker Threads (shared memory) with Child Processes (isolated memory).",
      "What common operations block the Node.js event loop (e.g. JSON.parse on 100MB files, RegEx catastrophic backtracking)?"
    ],
    "answer": "### 1. Scaling Multi-Core via Cluster Module\nBecause Node.js runs single-threaded, a server with 16 CPU cores leaves 15 cores idle under basic execution.\n- **Cluster Module**: The Master process calls `cluster.fork()` for each CPU core, creating 16 independent worker processes.\n- **Port Sharing**: The Master process binds to port 80 and utilizes internal Round-Robin scheduling to distribute incoming TCP connections across child worker processes with zero port conflicts.\n- In production, manage this via container orchestration (Kubernetes pods) or PM2 (`pm2 start app.js -i max`).\n\n### 2. Cluster Processes vs Worker Threads:\n- **Cluster (Child Processes)**: Separate isolated memory spaces. If one worker crashes, others survive. Ideal for scaling I/O-bound Express web servers.\n- **Worker Threads (`worker_threads`)**: Lightweight threads running inside the *same* process sharing memory (`SharedArrayBuffer`). Ideal for offloading CPU-intensive algorithms (image resizing, cryptographic hashing, PDF generation) without blocking the main event loop.\n\n### 3. Preventing Event Loop Blocking:\nThe Golden Rule of Node.js: **Don't Block the Event Loop!**\n- **Avoid Synchronous APIs**: Never call `fs.readFileSync()`, `crypto.pbkdf2Sync()`, or `zlib.gzipSync()` in request paths.\n- **Avoid Catastrophic Backtracking in Regular Expressions (ReDoS)**: Complex nested regex expressions can freeze the CPU for minutes on crafted strings. Use regex validation tools.\n- **Chunk Large JSON Payloads**: Parsing massive 100MB JSON strings synchronously blocks the thread for seconds; stream large JSON datasets using streaming parsers (JSONStream / Oboe.js).",
    "keywords": [
      "cluster module",
      "worker threads",
      "event loop blocking",
      "pm2",
      "multi-core",
      "sharedarraybuffer",
      "round-robin"
    ]
  }
];
