/**
 * content_en.js - Complete English Knowledge Base for System Design Mastery
 * Dual-language English dataset mirroring SystemDesignData
 */

const SystemDesignDataEn = {
  "modules": [
    {
      "id": "module-1",
      "number": "1",
      "title": "In a Hurry — Fast Track & 45-Min Interview Delivery Framework",
      "subtitle": "Fast-track guide to core concepts, 45-minute interview delivery framework, and technology decision matrix",
      "diagramId": "interviewTimeline",
      "sections": [
        {
          "id": "sec-1-1",
          "number": "1.1",
          "title": "Introduction & Scope of System Design",
          "description": "System Design is the process of defining the architecture, components, interfaces, and data models of a software system to satisfy functional and non-functional requirements (scalability, reliability, availability, fault tolerance).",
          "levels": {
            "l1": {
              "badge": "Level 1: Foundations",
              "text": "Monolithic architectures begin with a single web server and a single relational database. As user traffic grows, bottlenecks appear. Scaling splits into Vertical Scaling (scaling up CPU, RAM, and NVMe on one machine) and Horizontal Scaling (scaling out by adding commodity servers behind Load Balancers)."
            },
            "l2": {
              "badge": "Level 2: Architecture & Trade-offs",
              "text": "Migrating to distributed microservices grants deployment autonomy and isolated scaling, but introduces network latency, data consistency challenges, and single points of failure (SPOFs). The core trade-off centers on developer velocity versus operational overhead."
            },
            "l3": {
              "badge": "Level 3: Staff+ High Availability",
              "text": "Architecting for Five Nines availability (99.999% = less than 5.26 minutes of downtime per year), Multi-Region Active-Active disaster recovery, strict blast-radius isolation, and strictly stateless service tiers."
            }
          },
          "diagramId": "architectureEvolution"
        },
        {
          "id": "sec-1-2",
          "number": "1.2",
          "title": "Systematic Preparation Roadmap — How to Prepare",
          "description": "A clear, pragmatic strategy to progress from foundational concepts to Staff/Principal level architectural discussions.",
          "levels": {
            "l1": {
              "badge": "Level 1: Theoretical Foundations",
              "text": "Master core primitives: Web servers, application runtimes, SQL vs NoSQL engines, in-memory caching (Redis/Memcached), and load balancing layers. Primary references: Designing Data-Intensive Applications (Martin Kleppmann) and System Design Interview (Alex Xu)."
            },
            "l2": {
              "badge": "Level 2: Back-of-the-Envelope Math & Problem Deconstruction",
              "text": "Practice capacity estimation for QPS, disk storage, memory cache sizing, and network ingress/egress bandwidth. Apply proven design patterns for newsfeeds, distributed messaging, and schema modeling."
            },
            "l3": {
              "badge": "Level 3: Real-World Failures & Deep Trade-offs",
              "text": "Conduct mock interviews, analyze engineering blogs (Netflix TechBlog, Uber Engineering, Meta Engineering), and master edge failure modes: network partitions (split-brain), race conditions under concurrency, and cache thundering herds."
            }
          }
        },
        {
          "id": "sec-1-3",
          "number": "1.3",
          "title": "Delivery Framework — 45-Minute Interview Strategy",
          "description": "Standardized time-boxing framework to systematically drive a 45-minute system design interview to an offer.",
          "table": {
            "headers": [
              "Stage",
              "Suggested Time",
              "Core Deliverables & Actions"
            ],
            "rows": [
              [
                "1. Scope & Requirements",
                "5 - 8 mins",
                "Clarify Functional Requirements (Core user flows), Non-Functional Requirements (Scale, Latency P99, Availability, Consistency model), and back-of-the-envelope capacity estimations (QPS, Storage)."
              ],
              [
                "2. High-Level Design",
                "10 - 15 mins",
                "Sketch end-to-end building blocks: Client, CDN, Load Balancers, API Gateway, Stateless Services, Datastores, Caches, and Message Queues. Trace primary Read and Write paths."
              ],
              [
                "3. Component Deep Dive",
                "15 - 20 mins",
                "Drill down into the 2-3 most critical architectural challenges: partitioning keys, distributed locking, concurrency control, caching tiers, and event streaming."
              ],
              [
                "4. Bottlenecks & Wrap-Up",
                "3 - 5 mins",
                "Address Single Points of Failure (SPOFs), telemetry & monitoring (SLOs/SLAs, metrics, alerts), failure recovery plans, and summarize architectural trade-offs."
              ]
            ]
          },
          "levels": {
            "l1": {
              "badge": "Level 1",
              "text": "Take ownership of scope and clarify assumptions before drawing boxes."
            },
            "l2": {
              "badge": "Level 2",
              "text": "Draft database schemas, API contracts (REST/gRPC), and end-to-end data flow clearly."
            },
            "l3": {
              "badge": "Level 3",
              "text": "Exhibit senior technical leadership, justify decisions with metrics, and present graceful degradation strategies."
            }
          }
        },
        {
          "id": "sec-1-4",
          "number": "1.4",
          "title": "Key Technologies Matrix",
          "description": "Quick-reference comparison matrix to select the optimal technology primitive for distributed system requirements.",
          "table": {
            "headers": [
              "Category",
              "Prominent Technologies",
              "Use Cases",
              "Strengths & Trade-offs"
            ],
            "rows": [
              [
                "In-Memory Cache",
                "Redis, Memcached",
                "User sessions, rate limiting counters, leaderboards, query acceleration.",
                "Sub-millisecond latency; bounded by physical RAM capacity."
              ],
              [
                "Message Broker / Log",
                "Kafka, RabbitMQ, Pulsar",
                "Event-driven decoupling, batch processing, stream analytics, async tasks.",
                "Kafka: immutable append-only log, ordered per partition, persistent event replay."
              ],
              [
                "Search Engine",
                "Elasticsearch, OpenSearch",
                "Full-text search, multi-faceted filtering, log aggregation (ELK).",
                "Inverted index; optimized for search queries; higher write latency on updates."
              ],
              [
                "Wide-Column / NoSQL",
                "Cassandra, ScyllaDB",
                "Time-series sensor telemetry, chat history, high-throughput write workloads.",
                "High write throughput via LSM-trees; masterless peer-to-peer with zero SPOF."
              ],
              [
                "RDBMS",
                "PostgreSQL, MySQL",
                "Financial transactions, billing ledgers, strictly consistent ACID data.",
                "Strong consistency, relational foreign keys, complex joins; horizontal write scaling requires sharding."
              ]
            ]
          }
        }
      ],
      "capstone": {
        "title": "Capstone Case: 45-Minute International Payment Gateway Interview Simulation",
        "scenario": "You are asked in a Staff Engineer interview to architect a global payment gateway handling 50,000 transactions per second at peak, guaranteeing zero duplicate charges and sub-200ms latency.",
        "hiddenSolution": {
          "summary": "Full architectural solution structured according to the standard 45-minute delivery framework:",
          "steps": [
            {
              "title": "1. Minutes 0-8: Scope & Requirements",
              "content": "Functional: Authorize, charge, refund, and reconcile payments. Non-functional: Strict ACID consistency for financial records, Exactly-Once processing semantics, P99 latency < 200ms, 99.999% availability. Back-of-the-envelope: 50k tx/sec * 1KB payload = 50 MB/s network ingress; 50k * 86,400 = 4.32B transactions/day = ~4.3TB daily storage."
            },
            {
              "title": "2. Minutes 8-22: High-Level Architecture",
              "content": "Client -> Global CDN/Anycast -> API Gateway (TLS termination, token bucket rate limiter, auth validation) -> Payment Orchestrator Service -> Idempotency Lock Layer (Redis Cluster) -> Core Ledger Service (PostgreSQL with Sharding) -> Asynchronous Event Broker (Kafka) -> External Card Networks / Acquiring Banks."
            },
            {
              "title": "3. Minutes 22-40: Architectural Deep Dive & Concurrency",
              "content": "Idempotency: Client transmits unique UUID v4 Idempotency-Key in HTTP header. The API layer acquires an atomic distributed lock in Redis via Lua script. Ledger: Implements double-entry bookkeeping (Debits equal Credits). Saga Orchestrator manages multi-step payment execution with compensating refunds on bank timeout."
            },
            {
              "title": "4. Minutes 40-45: Failure Modes & Wrap-Up",
              "content": "Mitigate network partition via Dead Letter Queues (DLQ) and transactional outbox. Reconcile asynchronous discrepancies via nightly batch jobs matching bank settlement files against internal ledger tables. Circuit Breakers protect acquiring bank connections."
            }
          ]
        }
      }
    },
    {
      "id": "module-2",
      "number": "2",
      "title": "Core Concepts — Distributed Systems Fundamentals",
      "subtitle": "Networking protocols, caching architectures, consistent hashing, distributed data models, and consensus theorems",
      "diagramId": "cachingStrategies",
      "sections": [
        {
          "id": "sec-2-1",
          "number": "2.1",
          "title": "Networking Essentials & Web Protocols",
          "description": "Understanding the OSI model, transport layer mechanics, HTTP evolution (HTTP/1.1 to HTTP/3), and load balancing tiers.",
          "levels": {
            "l1": {
              "badge": "Level 1: Protocols & OSI Model",
              "text": "OSI and TCP/IP models from physical wire to Layer 7. TCP provides reliable, ordered stream delivery via 3-way handshake (SYN, SYN-ACK, ACK) and flow control. UDP provides connectionless, low-overhead datagram transmission optimal for gaming, voice, and live video."
            },
            "l2": {
              "badge": "Level 2: HTTP Evolution & Load Balancing Tiers",
              "text": "HTTP/1.1 introduced persistent connections but suffers from Head-of-Line (HoL) blocking. HTTP/2 introduced binary framing, multiplexed streams over a single TCP connection, and HPACK header compression. HTTP/3 replaced TCP with QUIC over UDP, eliminating transport-level HoL blocking. Load balancers: Layer 4 (TCP/UDP IP/Port hashing for ultra-high throughput) vs Layer 7 (URL routing, cookie affinity, and SSL/TLS termination)."
            },
            "l3": {
              "badge": "Level 3: Global Routing & Socket Optimization",
              "text": "Geo-DNS and BGP Anycast routing advertise the same IP worldwide to steer traffic to the closest Edge data center. Implement TCP connection pooling and keep-alive tuning to avoid socket exhaustion under massive concurrency."
            }
          }
        },
        {
          "id": "sec-2-4",
          "number": "2.4",
          "title": "Advanced Caching Strategies & Crisis Mitigation",
          "description": "Cache design patterns, eviction policies, and proven mitigation strategies for critical production cache failures.",
          "diagramId": "cachingStrategies",
          "levels": {
            "l1": {
              "badge": "Level 1: The Four Cache Access Patterns",
              "text": "Cache-Aside (application queries cache, falls back to DB on miss, then populates cache), Write-Through (synchronous write to cache and datastore together), Write-Back / Write-Behind (write to cache first, write to DB asynchronously in batches), and Write-Around (write directly to datastore, bypassing cache)."
            },
            "l2": {
              "badge": "Level 2: Eviction Policies & Crisis Mitigation",
              "text": "Eviction algorithms: LRU (Least Recently Used), LFU (Least Frequently Used), FIFO. Mitigate Cache Stampede / Thundering Herd using distributed mutexes or probabilistic early recomputation (XFetch algorithm). Mitigate Cache Penetration (queries for non-existent keys) using Bloom Filters or caching null objects with short TTL. Mitigate Cache Avalanche (simultaneous mass expiration) by adding random jitter to TTLs."
            },
            "l3": {
              "badge": "Level 3: Multi-Tier Caching Architecture",
              "text": "Design hierarchical caching: L1 Process Memory (Caffeine in JVM or in-memory dictionary), L2 Distributed Cache (Redis Cluster), and L3 Edge CDN for static/public payloads. Coordinate cache invalidation via Change Data Capture (CDC) events streamed over Kafka."
            }
          }
        },
        {
          "id": "sec-2-6",
          "number": "2.6",
          "title": "Consistent Hashing & Virtual Nodes",
          "description": "Distributing keys across dynamic cluster nodes with minimal key movement during scaling events.",
          "diagramId": "consistentHashing",
          "levels": {
            "l1": {
              "badge": "Level 1: The Modulo Problem",
              "text": "Traditional hash partitioning `hash(key) % N` causes nearly all keys to remap when cluster size N changes by adding or removing a single node, causing devastating cache misses across the fleet."
            },
            "l2": {
              "badge": "Level 2: The Hash Ring & Virtual Nodes",
              "text": "Consistent Hashing maps both keys and nodes onto a 2^32-1 circular hash ring. A key maps to the first node encountered clockwise. Virtual Nodes (vnodes)—mapping each physical node to hundreds of discrete ring positions—solve hotspots and guarantee uniform load distribution."
            },
            "l3": {
              "badge": "Level 3: Dynamic Replication & Gossip Protocol",
              "text": "Replicating keys to the first K unique physical nodes clockwise ensures high availability. Nodes utilize decentralized Gossip protocols (such as in Cassandra and DynamoDB) to detect cluster membership changes and dynamically hand off partitions."
            }
          }
        },
        {
          "id": "sec-2-7",
          "number": "2.7",
          "title": "Distributed Systems Theorems — CAP & PACELC",
          "description": "Theoretical guarantees, trade-offs, and practical implications in modern geo-distributed architectures.",
          "diagramId": "capTheorem",
          "levels": {
            "l1": {
              "badge": "Level 1: CAP Theorem Foundations",
              "text": "Under network partition (P)—which is inevitable in real-world distributed networks—a system must choose between Consistency (C: every read returns the most recent write or errors) and Availability (A: every non-failing node returns a response, but potentially stale)."
            },
            "l2": {
              "badge": "Level 2: PACELC Theorem Extension",
              "text": "CAP only describes behavior during network partitions. PACELC expands this: If there is a Partition (P), choose Availability (A) or Consistency (C); Else (E), choose Latency (L) or Consistency (C). Example: DynamoDB and Cassandra are PA/EL systems, while MongoDB and HBase are PC/EC."
            },
            "l3": {
              "badge": "Level 3: Tunable Consistency & Vector Clocks",
              "text": "Configuring Quorum consensus: R + W > N guarantees strong consistency (where N is replication factor, W is write quorum, R is read quorum). Utilize Vector Clocks and Conflict-Free Replicated Data Types (CRDTs) to resolve concurrent diverging updates without centralized coordination."
            }
          }
        },
        {
          "id": "sec-2-8",
          "number": "2.8",
          "title": "Storage Engines — LSM-Trees vs B-Trees",
          "description": "Internal database storage engines, write amplification, compaction strategies, and disk access mechanics.",
          "diagramId": "storageEngines",
          "levels": {
            "l1": {
              "badge": "Level 1: In-Place vs Append-Only Storage",
              "text": "B-Trees (PostgreSQL, MySQL InnoDB) update data in-place on fixed-size disk pages (4KB-16KB). LSM-Trees (RocksDB, Cassandra, ScyllaDB) write sequentially to an append-only commit log and memory table (MemTable), then flush immutable SSTables to disk."
            },
            "l2": {
              "badge": "Level 2: Write Amplification & Compaction",
              "text": "LSM-Trees optimize for ultra-high write throughput by turning random writes into sequential writes. SSTable background compaction (Size-Tiered vs Leveled Compaction) merges sorted runs, purges tombstones, and reclaims disk space."
            },
            "l3": {
              "badge": "Level 3: Production Tuning & Bloom Optimization",
              "text": "Equip LSM-Trees with in-memory Bloom Filters to bypass reading SSTables that do not contain the searched key. Balance the RUM Conjecture: Read overhead, Update cost, and Memory footprint trade-offs for target query workloads."
            }
          }
        }
      ],
      "capstone": {
        "title": "Capstone Case: High-Throughput Distributed Counter with Zero Race Conditions",
        "scenario": "Design a distributed real-time view counter for a viral video platform processing 500,000 view events per second with high availability and eventual consistency.",
        "hiddenSolution": {
          "summary": "Architectural solution combining in-memory aggregation, sharded counters, and asynchronous batching:",
          "steps": [
            {
              "title": "1. Ingestion Layer & Buffering",
              "content": "Client requests terminate at Envoy edge proxies. Envoy buffers view events into local process memory and flushes aggregated increments every 100ms directly to Apache Kafka partitions mapped by video_id."
            },
            {
              "title": "2. Sharded Redis Counter Tier",
              "content": "A pool of stream processing workers consume from Kafka and execute atomic Redis INCRBY operations against a Sharded Counter model: `video:{id}:slot:{0..9}`. Sharding into 10 independent slots per video eliminates CPU contention on individual Redis keys."
            },
            {
              "title": "3. Persistent Storage & Read Path",
              "content": "A scheduled background flusher aggregates all 10 slots every 5 seconds and issues an asynchronous batch UPDATE to the primary relational datastore: `UPDATE video_stats SET views = views + ? WHERE video_id = ?`. Reads fetch cached totals from Redis in O(1) time."
            }
          ]
        }
      }
    },
    {
      "id": "module-3",
      "number": "3",
      "title": "Question Breakdowns — 31 Real-World Architectural Case Studies",
      "subtitle": "Comprehensive architectural deconstruction of 31 real-world systems from FAANG / Big Tech from foundations to Staff+ level",
      "problems": [
        {
          "id": "prob-3-1",
          "number": "3.1",
          "title": "URL Shortener — Bitly / TinyURL",
          "category": "Storage & Key Generation",
          "diagramId": "bitlyArchitecture",
          "calculations": "• 100M new URLs generated monthly (~38 write QPS)\n• 100:1 Read-to-Write ratio (~3,800 read QPS)\n• 5-Year Storage: 6 Billion URLs * 500 bytes ≈ 3 TB total disk.",
          "l1": "Generate a 7-character short token using Base62 encoding ([0-9, a-z, A-Z]), yielding 62^7 = 3.5 trillion unique keys. Store mappings in an RDBMS (id, short_url, original_url, created_at) with a B-tree index on short_url.",
          "l2": "Introduce an in-memory Key Generation Service (KGS) that pre-computes unique sequential keys in memory to dispense in O(1) without DB collisions. Cache viral/hot URLs in Redis Cluster (80/20 Pareto rule). Return HTTP 301 for permanent redirect caching or HTTP 302 to track click telemetry.",
          "l3": "Partition database using hash(short_key) % N. Inspect URLs against Google Safe Browsing API to prevent phishing. Deploy edge CDN caching for high-traffic links and publish asynchronous click analytics to Apache Kafka -> ClickHouse for real-time reporting."
        },
        {
          "id": "prob-3-2",
          "number": "3.2",
          "title": "Cloud Storage & File Synchronization — Dropbox / Google Drive",
          "category": "Large Blob Storage & Sync",
          "calculations": "• 500M total users, 100M daily active users, average file size 2MB.\n• Total Storage: 50PB raw storage with 3x replication factor.",
          "l1": "Decouple metadata storage (MySQL / PostgreSQL for file namespaces, directory trees, ownership) from raw binary file blobs stored in Amazon S3 / Object Storage. Split files into 4MB chunks and hash via SHA-256 for chunk-level deduplication.",
          "l2": "Deploy an intelligent Desktop/Mobile Sync Client that monitors filesystem events and applies rolling-hash algorithms (Rsync delta sync) to upload only modified byte ranges. Maintain WebSocket / Long-polling connections to fan out immediate file modification notifications to other user devices.",
          "l3": "Implement deterministic concurrency conflict resolution creating conflicted copy branches. Apply client-side zero-knowledge encryption before chunk transmission, and execute cross-user global deduplication to conserve petabytes of storage."
        },
        {
          "id": "prob-3-3",
          "number": "3.3",
          "title": "On-Demand Delivery & Matching Engine — DoorDash / Instacart",
          "category": "Geospatial & Batch Dispatch",
          "calculations": "• 1M orders placed daily (12 average QPS, 100 peak order QPS).\n• 100,000 active delivery couriers updating location every 4s = 25,000 location QPS.",
          "l1": "Manage stateful order lifecycle: Order Created -> Restaurant Accepted -> Driver Assigned -> Picked Up -> In Transit -> Delivered. Persist status in relational database with basic bounding-box spatial coordinates.",
          "l2": "Implement a Batch Dispatch Engine: Group incoming orders into 30-second time windows and execute the Hungarian / Weighted Bipartite Matching algorithm to minimize courier wait times and trip variance. Ingest driver location updates every 4s directly into Redis Geospatial (GEOADD / GEORADIUS).",
          "l3": "Calculate multi-variable dynamic ETAs via machine learning models (kitchen prep duration + driver arrival time + live street traffic). Handle driver drops/rejections automatically by rescheduling the dispatch pipeline with highest priority without re-triggering kitchen cooking."
        },
        {
          "id": "prob-3-4",
          "number": "3.4",
          "title": "High-Concurrency Ticket Booking — Ticketmaster",
          "category": "High Concurrency & Flash Sales",
          "calculations": "• Flash Sales: 100,000 concert tickets sell out in 60 seconds with 1,000,000 concurrent buyers.\n• Temporary reservation hold duration: 10 minutes during checkout.",
          "l1": "Model seat inventory in a relational database using Optimistic Concurrency Control (version column) to prevent double-booking the same seat.",
          "l2": "Deploy a Virtual Waiting Room (Cloudflare Waiting Room / AWS SQS Token Bucket) to throttle traffic surges, admitting buyers at a controlled rate matching downstream database capacity. Hold temporary 10-minute seat reservations in Redis with TTL expiration.",
          "l3": "Execute distributed reservations using atomic Redis Lua scripts to verify availability and deduct inventory in O(1) in memory. Propagate confirmed checkouts asynchronously to PostgreSQL via Kafka, with transactional rollback returning abandoned seats back to the available pool."
        },
        {
          "id": "prob-3-5",
          "number": "3.5",
          "title": "Adaptive Video Streaming Platform — Netflix / YouTube",
          "category": "Media Transcoding & Edge Delivery",
          "calculations": "• 2B active users, 1B hours of video streamed daily.\n• Ingress bandwidth: 500 hours uploaded per minute (30TB/hour).",
          "l1": "Store raw video files in Amazon S3. Ingest videos and transcode into standard resolutions (1080p, 720p, 480p) using FFmpeg workers, serving chunks through a global Content Delivery Network (CDN).",
          "l2": "Segment video files into 2-6 second chunks and generate adaptive manifests using HLS (HTTP Live Streaming) and MPEG-DASH. Client media players measure live network throughput and automatically switch bitrates dynamically without buffering.",
          "l3": "Deploy custom Open Connect appliances (custom ISP edge caches) inside local internet service provider datacenters. Pre-position popular regional catalog titles during overnight off-peak hours via predictive machine learning caches to offload 95% of backbone traffic."
        },
        {
          "id": "prob-3-6",
          "number": "3.6",
          "title": "Proximity Service & Ride Hailing — Uber / Careem",
          "category": "Geospatial Indexing & Routing",
          "calculations": "• 100M monthly active riders, 5M active drivers worldwide.\n• Driver location broadcasts: 5M drivers * 1 ping every 4s = 1.25M location QPS.",
          "l1": "Store spatial coordinates (latitude, longitude) with PostgreSQL PostGIS extension and query drivers using basic bounding boxes or distance formulas.",
          "l2": "Adopt Uber H3 Hexagonal Spatial Indexing or Google S2 spherical projection. Partition earth into discrete hierarchical cells. When a rider requests a pickup, query the rider's H3 cell and immediate 6 neighbor rings to locate nearest drivers in O(1).",
          "l3": "Maintain volatile driver locations purely in memory within a distributed Redis Cluster or custom Ringpop cluster. Isolate matching algorithms into city-level partition cells, preventing cross-region cascading failures and maintaining P99 matching latency under 100ms."
        },
        {
          "id": "prob-3-7",
          "number": "3.7",
          "title": "Distributed Real-Time Chat — WhatsApp / Slack",
          "category": "WebSockets & Message Sequencing",
          "calculations": "• 2B users, 100B messages transmitted daily (~1.2M messages/sec avg, 5M peak).\n• Message size: 1KB average = 100TB daily text storage.",
          "l1": "Maintain persistent bidirectional WebSocket connections between client devices and a stateless chat gateway tier. Store messages in a relational database with indexes on (conversation_id, created_at).",
          "l2": "Deploy a distributed Session Registry in Redis to track which gateway server hosts each active user connection. Route peer-to-peer messages across gateway clusters using Apache Kafka / RabbitMQ topics. Store chat history in wide-column datastores (ScyllaDB / Cassandra) partitioned by `(channel_id, bucket_month)`.",
          "l3": "Guarantee global message ordering within groups using distributed monotonic sequence generators. Implement Signal protocol end-to-end encryption (E2EE) with pre-keys. Store undelivered messages in ephemeral queues and deliver with delivery receipt acknowledgments (Sent, Delivered, Read)."
        },
        {
          "id": "prob-3-8",
          "number": "3.8",
          "title": "Social Media Newsfeed & Timeline — Twitter / Instagram",
          "category": "Fan-Out & Cache Curation",
          "calculations": "• 300M daily active users, 500M tweets posted daily (~6k writes/sec, 50k peak).\n• Timeline read requests: 3B timeline queries daily (~35,000 read QPS).",
          "l1": "Fetch feeds using Fan-out on Read: Query the user's follow list, fetch the latest posts for each followee from SQL, merge and sort by timestamp in application memory.",
          "l2": "Migrate to Fan-out on Write (Push Model): When an ordinary user posts, background workers push the post ID into the pre-computed in-memory timeline Redis lists (ZSET) of all their followers, enabling O(1) instant timeline reads.",
          "l3": "Implement Hybrid Fan-Out to solve the Celebrity / Hotspot problem (users with millions of followers, e.g., Taylor Swift). Posts by celebrities bypass write fan-out; instead, they are merged on-the-fly into the user's timeline during read requests."
        },
        {
          "id": "prob-3-9",
          "number": "3.9",
          "title": "E-Commerce Cart & Inventory Reservation — Amazon / Shopify",
          "category": "Distributed Inventory & ACID",
          "calculations": "• 10M active carts, 50,000 checkout transactions per second during Black Friday flash sales.",
          "l1": "Store shopping carts in relational tables. Deduct inventory synchronously during checkout using database row locking (SELECT FOR UPDATE).",
          "l2": "Move cart state to distributed key-value datastores (DynamoDB / Redis) indexed by session token. When user initiates checkout, acquire an atomic temporary 15-minute reservation on inventory counters in Redis via Lua scripts.",
          "l3": "Orchestrate the checkout pipeline using the Saga Pattern (Payment Auth -> Inventory Reservation -> Order Creation -> Fulfillment Notice). If payment fails, trigger compensating transactions to restore inventory reservations without blocking other concurrent buyers."
        },
        {
          "id": "prob-3-10",
          "number": "3.10",
          "title": "Financial Ledger & Real-Time Trading — Robinhood / E*Trade",
          "category": "Ledger Accounting & High Concurrency",
          "calculations": "• 20M accounts, 100,000 order submissions per second during market open.\n• Absolute requirement: Zero data corruption and zero floating-point arithmetic rounding errors.",
          "l1": "Enforce Immutable Double-Entry Bookkeeping: Money is neither created nor destroyed; every transaction consists of matching debits and credits that balance to zero. Store values in integer cents (e.g. $10.50 stored as 1050).",
          "l2": "Deploy an in-memory Single-Threaded Order Matching Engine (similar to LMAX Disruptor pattern) that processes order books sequentially at millions of operations/second without database locks.",
          "l3": "Persist transaction logs to append-only distributed journals with Raft replication. Replay journals to rebuild in-memory state during disaster recovery. Integrate nightly reconciliation jobs against clearing houses."
        },
        {
          "id": "prob-3-11",
          "number": "3.11",
          "title": "Full-Text Search Engine — Google Search / Elasticsearch",
          "category": "Inverted Index & Information Retrieval",
          "calculations": "• 100 Billion web documents indexed.\n• 100,000 search queries per second with P99 latency < 100ms.",
          "l1": "Build an Inverted Index mapping tokenized terms to Posting Lists (document IDs containing the term and position offsets).",
          "l2": "Partition the inverted index across clusters (Document Partitioning vs Term Partitioning). Compress posting lists using Frame-of-Reference (FOR) and Roaring Bitmaps. Rank documents using BM25 relevance score combined with PageRank link authority.",
          "l3": "Deploy multi-tier query caches (L1 exact query match, L2 posting list cache). Route queries via distributed scatter-gather coordinators that query shards in parallel and merge top-K candidates."
        },
        {
          "id": "prob-3-12",
          "number": "3.12",
          "title": "Hotel & Accommodation Booking — Airbnb / Booking.com",
          "category": "Calendar Availability & Spatial Search",
          "calculations": "• 10M listings worldwide, 100M search queries daily, 1M daily bookings.",
          "l1": "Model listings with availability calendar table `(listing_id, date, status, price)`. Query availability with SQL `WHERE status = 'available' AND date BETWEEN ? AND ?`.",
          "l2": "Optimize spatial search by pre-indexing listings into Geohash / H3 buckets. Maintain 365-day availability bitmasks in Redis (1 bit per day) to verify multi-night stays in sub-millisecond bitwise operations (AND bitwise match).",
          "l3": "Prevent double-booking during checkout using two-phase reservation with short expiration TTL. Apply dynamic pricing algorithms calculating localized demand spikes and seasonality."
        },
        {
          "id": "prob-3-13",
          "number": "3.13",
          "title": "Personalized Music Streaming — Spotify",
          "category": "Audio Caching & Recommendation",
          "calculations": "• 500M active listeners, 100M song library, 10B streams played daily.",
          "l1": "Store master audio tracks in object storage in multi-bitrate Ogg Vorbis / AAC formats. Stream tracks through CDN to client media players.",
          "l2": "Implement aggressive client-side LRU audio disk caching on user phones/desktops. Prefetch next track in playlist during current song playback to guarantee zero playback stutter.",
          "l3": "Generate personalized recommendations (Discover Weekly) via collaborative filtering on Apache Spark, generating vector embeddings stored in Milvus / Qdrant vector databases for instant nearest-neighbor similarity search."
        },
        {
          "id": "prob-3-14",
          "number": "3.14",
          "title": "Distributed Web Crawler — Google Bot / Bingbot",
          "category": "Graph Traversal & Politeness",
          "calculations": "• 1 Billion web pages crawled per month (~400 pages/second).\n• Average page size: 500KB = 500TB raw HTML monthly.",
          "l1": "Maintain a URL Frontier queue. Crawler worker nodes dequeue URLs, resolve DNS, fetch HTML content via HTTP, parse links, and enqueue discovered URLs.",
          "l2": "Enforce Politeness policies via host-based queues and delay timers to avoid overloading target web servers. Implement duplicate URL detection via Bloom Filters and document content deduplication via 64-bit SimHash.",
          "l3": "Scale to multi-datacenter crawlers with distributed Frontier partitions. Prioritize high-authority domains via PageRank-weighted queues, honoring robots.txt directives and canonical links."
        },
        {
          "id": "prob-3-15",
          "number": "3.15",
          "title": "Top-K Heavy Hitters — Twitter Trending Topics / YouTube Viral",
          "category": "Stream Analytics & Sketching",
          "calculations": "• 100,000 events/second stream. Goal: Find top 100 most frequent hashtags in real-time.",
          "l1": "Maintain hash map counters of hashtag occurrences. Sort entries by frequency periodically. (Fails at scale due to unbounded memory consumption).",
          "l2": "Implement Count-Min Sketch: Probabilistic fixed-size 2D array with d hash functions that tracks frequencies with bounded error in constant memory. Combine with a Min-Heap of size K to track current top items.",
          "l3": "Implement Space-Saving Algorithm / Lossy Counting over tumbling 1-minute and 1-hour time windows in Apache Flink, emitting real-time trending leaderboards to Redis with zero memory leaks."
        },
        {
          "id": "prob-3-16",
          "number": "3.16",
          "title": "Distributed Rate Limiter — Cloudflare / Stripe API",
          "category": "Throttling & Traffic Shaping",
          "calculations": "• 1M API requests/sec across 100 edge nodes. Limit users to 100 requests per minute.",
          "l1": "Basic Fixed Window counter in database: Count requests per minute bucket. (Suffers from edge burst vulnerability allowing 2x limit at window boundaries).",
          "l2": "Implement Token Bucket or Sliding Window Log in Redis. Sliding Window Log records timestamped sorted sets (ZSET), trimming entries older than window size and checking set cardinality.",
          "l3": "Adopt Sliding Window Counter combining current and previous bucket weights in memory for O(1) space and CPU. Synchronize local edge proxy counters asynchronously using Redis cluster or local memory batches to minimize Redis round-trip latency."
        },
        {
          "id": "prob-3-17",
          "number": "3.17",
          "title": "Navigation & Real-Time Traffic Routing — Google Maps",
          "category": "Graph Partitioning & Shortest Path",
          "calculations": "• Global road network with 1 Billion intersections (nodes) and 2 Billion road segments (edges).",
          "l1": "Model road network as a directed weighted graph. Calculate shortest path using Dijkstra's algorithm or A* with Euclidean distance heuristic.",
          "l2": "Partition global graph into hierarchical geographic cells. Pre-compute Contraction Hierarchies to compress long-distance highway traversal, reducing route calculation time from seconds to milliseconds.",
          "l3": "Ingest live traffic speeds from millions of active mobile devices into Apache Flink. Dynamically adjust road segment weight costs in real time and push live rerouting suggestions to drivers."
        },
        {
          "id": "prob-3-18",
          "number": "3.18",
          "title": "Video Conferencing Platform — Zoom / Google Meet",
          "category": "WebRTC & Media SFU",
          "calculations": "• 300M daily meeting participants, 1,000 attendees per large meeting with P99 audio latency < 150ms.",
          "l1": "Peer-to-Peer WebRTC mesh connections for 2-3 participants. (Fails at larger scale due to N*(N-1) uplink upload bandwidth explosion).",
          "l2": "Deploy Selective Forwarding Units (SFUs): Clients upload a single media stream to the SFU server, which selectively forwards packets to all other participants without re-encoding.",
          "l3": "Implement Simulcast / Scalable Video Coding (SVC) allowing clients to send high, medium, and low quality layers. SFU routes appropriate layers based on attendee network conditions and screen layout."
        },
        {
          "id": "prob-3-19",
          "number": "3.19",
          "title": "Payment Processing Platform — Stripe",
          "category": "Idempotency & Double-Entry Ledger",
          "calculations": "• $1 Trillion annual payment volume, 10,000 transactions/second, zero tolerance for double charging.",
          "l1": "Accept card details, make HTTP request to acquiring bank, and write transaction record to MySQL database.",
          "l2": "Enforce strict API Idempotency: Require unique client idempotency keys stored in Redis with atomic locks. If a retry occurs with the same key, return cached original response without re-executing payment.",
          "l3": "Implement an Immutable Double-Entry Ledger on partitioned PostgreSQL. Coordinate multi-party money movement via Saga Orchestration, persisting all state transitions before invoking external card networks."
        },
        {
          "id": "prob-3-20",
          "number": "3.20",
          "title": "Metrics & Distributed Telemetry — Datadog / Prometheus",
          "category": "Time-Series Datastores (TSDB)",
          "calculations": "• 10M server instances emitting 100 metrics every 10s = 100M data points/sec.",
          "l1": "Store time-series tuples (metric_name, timestamp, value, labels) in relational database with index on (metric_name, timestamp).",
          "l2": "Adopt Gorilla Time-Series Compression: XOR floating-point values and Delta-of-Delta timestamp compression, reducing storage footprint from 16 bytes to 1.37 bytes per metric point.",
          "l3": "Implement multi-tier downsampling: Retain raw 10-second data for 7 days, downsample to 1-minute averages for 30 days, and 1-hour averages for 1 year in columnar object storage (Parquet on S3)."
        },
        {
          "id": "prob-3-21",
          "number": "3.21",
          "title": "Distributed Unique ID Generator — Twitter Snowflake",
          "category": "Monotonic ID Generation",
          "calculations": "• Generate 100,000 unique 64-bit strictly monotonic IDs per second across distributed nodes.",
          "l1": "Use database auto-increment ID column or multi-master auto-increment offsets (step = N). (Suffers from single-point bottlenecks and lack of global sorting).",
          "l2": "Implement Twitter Snowflake 64-bit ID layout: 1 bit unused, 41 bits millisecond timestamp (69 years lifetime), 10 bits worker/datacenter machine ID (1024 nodes), 12 bits sequence number (4096 IDs/ms per node).",
          "l3": "Handle NTP Clock Drift safely: If system clock moves backward, buffer requests or sleep until clock catches up. Deploy as lightweight sidecar daemon providing sub-millisecond local generation."
        },
        {
          "id": "prob-3-22",
          "number": "3.22",
          "title": "Global Push Notification System — APNs / FCM Gateway",
          "category": "Priority Queues & Bulk Delivery",
          "calculations": "• 1B active devices, 10B push notifications delivered daily with breaking news alerts delivering to 50M devices in under 5 minutes.",
          "l1": "Store device tokens in relational database and loop through users synchronously making HTTP calls to Apple APNs and Google FCM.",
          "l2": "Decouple delivery pipeline into Priority Queues in Apache Kafka (High Priority for OTPs/2FA, Medium for Direct Messages, Low for Marketing). Worker pools consume batches and maintain persistent HTTP/2 connection pools to APNs/FCM.",
          "l3": "Respect user notification preferences, rate limits, and quiet hours. Maintain Dead Letter Queues (DLQ) for failed tokens, automatically invalidating stale and uninstalled device tokens."
        },
        {
          "id": "prob-3-23",
          "number": "3.23",
          "title": "Search Autocomplete & Typeahead — Google Suggest",
          "category": "Trie Prefix Trees & Caching",
          "calculations": "• 5B searches daily, 5 keystrokes per search = 25B autocomplete requests (~300,000 QPS) with latency < 30ms.",
          "l1": "Execute SQL queries with `SELECT query FROM searches WHERE query LIKE 'prefix%' ORDER BY count DESC LIMIT 5`.",
          "l2": "Construct an in-memory Trie (Prefix Tree) where each node stores the top 5 most frequent search terms for its prefix, eliminating deep subtree traversals on keystrokes.",
          "l3": "Pre-compute and distribute serialized Trie shards across edge memory nodes. Update term frequencies offline in batch via MapReduce / Spark, hot-swapping active Trie instances in memory without downtime."
        },
        {
          "id": "prob-3-24",
          "number": "3.24",
          "title": "Activity Newsfeed Architecture — Facebook / LinkedIn",
          "category": "Timeline Aggregation & Storage",
          "calculations": "• 2B users, 500M daily active users reading feeds 10 times daily = 5B feed views/day (~60,000 read QPS).",
          "l1": "Store user friendships and posts in database; query and sort friends' posts dynamically on feed load.",
          "l2": "Implement Fan-out on Write with Redis Sorted Sets (ZSET), where post IDs are scored by timestamp. Feed generation workers push post pointers to active followers' feed caches.",
          "l3": "Apply Feed Ranking ML models scoring relevance based on engagement affinity, recency, and media type. Invalidate cached feed items on post deletion and unfriend actions."
        },
        {
          "id": "prob-3-25",
          "number": "3.25",
          "title": "Real-Time Gaming Leaderboard — Battle Royale / Chess.com",
          "category": "Sorted Sets & SkipLists",
          "calculations": "• 10M active players, 500,000 score updates per second, instant global rank queries.",
          "l1": "Store player scores in SQL database: `SELECT rank FROM players ORDER BY score DESC`. (Table scans fail under heavy concurrent write loads).",
          "l2": "Utilize Redis Sorted Sets (ZSET) powered internally by SkipLists and Hash Maps. `ZADD` updates scores in O(log N) and `ZREVRANK` / `ZREVRANGE` retrieves rankings and leaderboard slices in O(log N).",
          "l3": "For hundred-million player scale, partition leaderboards into Score Ranges or percentiles across Redis instances. Cache Top 100 global leaderboards at CDN edges with sub-second TTL."
        },
        {
          "id": "prob-3-26",
          "number": "3.26",
          "title": "Distributed Job Scheduler — Quartz / Airbnb Chronos",
          "category": "Distributed Timers & Task Execution",
          "calculations": "• Schedule and reliably execute 100M jobs daily with varying recurrence schedules (Cron) and millisecond precision.",
          "l1": "Store scheduled jobs in SQL database with polling thread: `SELECT * FROM jobs WHERE execute_at <= NOW() AND status = 'PENDING'`.",
          "l2": "Decouple scheduler into Leader-Follower coordinators using ZooKeeper / etcd for leader election. The leader partitions job triggers into prioritized time buckets in Redis Sorted Sets.",
          "l3": "Distribute task execution to worker clusters via Apache Kafka topics. Implement heartbeats, distributed execution leases, and automatic retries with exponential backoff on worker failure."
        }
      ]
    }
  ]
};
