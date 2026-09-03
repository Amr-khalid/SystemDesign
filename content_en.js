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
        },
        {
          "id": "prob-3-27",
          "number": "3.27",
          "title": "Ad Click Aggregator & Fraud Detection — Google Ads",
          "category": "Stream Windowing & Deduplication",
          "calculations": "• 1B ad impressions and 100M ad clicks daily. Exactly-once billing semantics and fraud prevention.",
          "l1": "Write click events synchronously to relational database and aggregate billing via periodic SQL queries.",
          "l2": "Stream clicks to Apache Kafka with partitioning by `(advertiser_id, campaign_id)`. Process clicks in Apache Flink using 1-minute and 1-hour Tumbling / Sliding Windows.",
          "l3": "Detect click fraud (click farms, duplicate rapid clicks) using sliding window state in Flink with user IP / device fingerprints. Write aggregated billing metrics to ClickHouse for analytical dashboards."
        },
        {
          "id": "prob-3-28",
          "number": "3.28",
          "title": "Distributed File System — Google GFS / Apache HDFS",
          "category": "Block Storage & Master-Worker",
          "calculations": "• Petabyte-scale storage, 100M files, files appended rather than overwritten.",
          "l1": "Single file server with RAID disk storage. (Limited by disk capacity, bus throughput, and represents single point of failure).",
          "l2": "Master-Worker Architecture: A single Master node maintains filesystem metadata and directory tree in memory. Files are divided into fixed 64MB Chunks stored across ChunkServers with 3x replication.",
          "l3": "Clients contact Master only for metadata and chunk locations, then stream binary read/write operations directly to ChunkServers to eliminate Master I/O bottlenecks. Implement background chunk re-balancing and checksum verification."
        },
        {
          "id": "prob-3-29",
          "number": "3.29",
          "title": "Global Edge CDN & DDoS Mitigation — Cloudflare",
          "category": "Anycast & Edge Reverse Proxy",
          "calculations": "• 300+ edge data centers, 50M HTTP requests per second, absorbing multi-terabit DDoS attacks.",
          "l1": "Single reverse proxy (Nginx) fronting application servers.",
          "l2": "Deploy BGP Anycast routing: Multiple global edge servers advertise identical IP addresses; internet routing protocols naturally steer user requests to the topologically nearest edge PoP.",
          "l3": "Execute eBPF / XDP packet filtering inside Linux kernel at line rate to drop volumetric DDoS floods (SYN floods, UDP amplification) before reaching user space. Cache dynamic responses using stale-while-revalidate."
        },
        {
          "id": "prob-3-30",
          "number": "3.30",
          "title": "Real-Time Collaborative Document Editor — Google Docs",
          "category": "Operational Transformation & CRDT",
          "calculations": "• Thousands of concurrent active editors on a shared document with sub-50ms character synchronization.",
          "l1": "Lock document during editing to prevent concurrent overwrites. (Completely unacceptable user experience).",
          "l2": "Implement Operational Transformation (OT) with a centralized coordination server that transforms insert/delete operations based on concurrent operation logs.",
          "l3": "Adopt Conflict-Free Replicated Data Types (CRDTs - Yjs / Automerge) providing mathematically commutative and idempotent operations, allowing peer-to-peer divergence and convergence without a central transformation server."
        },
        {
          "id": "prob-3-31",
          "number": "3.31",
          "title": "Large Language Model (LLM) Inference Serving — vLLM / OpenAI API",
          "category": "GPU Memory & Continuous Batching",
          "calculations": "• Serve 70B parameter models (140GB FP16 weights) with sub-second time-to-first-token (TTFT) and high token throughput.",
          "l1": "Load model weights onto single GPU and execute synchronous forward-pass per user prompt. (Suffers from massive memory fragmentation and sequential idle time).",
          "l2": "Implement PagedAttention (vLLM pattern): Manage Key-Value (KV) cache memory like virtual memory pages in operating systems, eliminating fragmentation and enabling multi-sequence KV sharing for parallel branching.",
          "l3": "Adopt Continuous Batching (iteration-level scheduling) to insert new requests dynamically without waiting for previous requests to finish token generation. Utilize Speculative Decoding and Tensor Parallelism across multi-GPU clusters."
        }
      ]
    },
    {
      "id": "module-4",
      "number": "4",
      "title": "Patterns — Distributed Systems Architectural Patterns",
      "subtitle": "Real-time updates, concurrency control, multi-step distributed transactions, and read/write scaling patterns",
      "diagramId": "sagaPattern",
      "sections": [
        {
          "id": "sec-4-1",
          "number": "4.1",
          "title": "Real-Time Updates — WebSockets vs Server-Sent Events vs Polling",
          "description": "Evaluating persistent communication protocols and architecting gateway tiers to maintain millions of concurrent connections.",
          "levels": {
            "l1": {
              "badge": "Level 1",
              "text": "Short/Long Polling causes connection overhead and high latency. Server-Sent Events (SSE) provides lightweight unidirectional streaming from server to client over HTTP/2, ideal for live feeds and stock quotes. WebSockets provides full-duplex bidirectional communication essential for real-time collaboration and chat."
            },
            "l2": {
              "badge": "Level 2",
              "text": "WebSocket Gateway Architecture: Terminate and maintain persistent TCP/WebSocket connections in a dedicated stateless connection tier. Connect edge gateway instances to a centralized message bus (Redis Pub/Sub or Kafka) to route events to the exact server hosting the target user session."
            },
            "l3": {
              "badge": "Level 3",
              "text": "Manage Half-Open socket connections using periodic bidirectional heartbeat pings every 30 seconds. On mass network reconnects, enforce Exponential Backoff with Full Jitter to prevent devastating Thundering Herd surges against authentication gateways."
            }
          }
        },
        {
          "id": "sec-4-2",
          "number": "4.2",
          "title": "Resource Contention & Concurrency Control",
          "description": "Architectural strategies for handling extreme race conditions on scarce resources (seats, inventory, balances) under high concurrency.",
          "levels": {
            "l1": {
              "badge": "Level 1",
              "text": "Pessimistic Locking (`SELECT FOR UPDATE`) prevents conflicts by acquiring database exclusive row locks, but degrades throughput and risks deadlocks. Optimistic Locking (`WHERE version = expected_version`) eliminates locks by checking versions before committing, excelling in low-to-medium contention workloads."
            },
            "l2": {
              "badge": "Level 2",
              "text": "Distributed Mutex Locks in Redis (Redlock algorithm) with strict lease TTL expiration. Alternatively, execute modifications atomically in memory using Redis Lua scripts without heavy network locks."
            },
            "l3": {
              "badge": "Level 3",
              "text": "In extreme flash sale contention, abandon distributed locks completely. Decouple writes via single-threaded asynchronous queues (Disruptor pattern or Actor Model) where all requests are serialized and deducted in O(1) memory time."
            }
          }
        },
        {
          "id": "sec-4-3",
          "number": "4.3",
          "title": "Multi-Step Distributed Workflows — The Saga Pattern",
          "description": "Managing complex distributed transactions across microservices without blocking Two-Phase Commit (2PC) protocols.",
          "diagramId": "sagaPattern",
          "levels": {
            "l1": {
              "badge": "Level 1",
              "text": "Two-Phase Commit (2PC) fails in modern microservices because the coordinator holds distributed locks across all participating services throughout the prepare and commit phases, causing systemic latency and single points of failure."
            },
            "l2": {
              "badge": "Level 2",
              "text": "The Saga Pattern: Choreography (services react to domain events via Kafka without a centralized orchestrator, suitable for 2-4 step flows) vs Orchestration (a central state machine orchestrator directs commands to services, optimal for complex multi-step business transactions)."
            },
            "l3": {
              "badge": "Level 3",
              "text": "Compensating Transactions: Execute backward rollbacks when any step fails (e.g. refunding payment if inventory fails). Implement the Transactional Outbox Pattern with Change Data Capture (CDC) to guarantee local SQL persistence and Kafka event emission without message loss."
            }
          }
        },
        {
          "id": "sec-4-4",
          "number": "4.4",
          "title": "Scaling Reads & Writes — CQRS & Write-Behind Caching",
          "description": "Decoupling read and write data models, and leveraging LSM-trees and queues to absorb massive write throughput.",
          "levels": {
            "l1": {
              "badge": "Level 1",
              "text": "Route writes to a Primary/Master database and distribute read traffic across multiple Read Replicas. Batch write operations into single bulk queries to reduce database round-trip overhead."
            },
            "l2": {
              "badge": "Level 2",
              "text": "Command Query Responsibility Segregation (CQRS): Separate the normalized write model (optimized for consistency and validation) from denormalized read models (Elasticsearch / Redis views optimized for sub-millisecond query retrieval)."
            },
            "l3": {
              "badge": "Level 3",
              "text": "Write-Behind (Asynchronous Write): Ingest write payloads into Kafka, return HTTP 202 Accepted immediately, and write to datastores gradually in the background. Address replica replication lag using Read-Your-Own-Writes consistency tokens."
            }
          }
        }
      ],
      "capstone": {
        "title": "Capstone Case: Global E-Commerce Platform Architecture Combining All Core Patterns",
        "scenario": "Architect an enterprise e-commerce platform combining CQRS for product search, Saga Orchestration for checkout and fulfillment, Transactional Outbox to prevent event loss, and Write-Behind for customer reviews.",
        "hiddenSolution": {
          "summary": "Unified Architectural Pattern Blueprint:",
          "steps": [
            {
              "title": "1. Catalog Browsing & Search (CQRS + Multi-Tier Cache)",
              "content": "Search and browsing queries target Elasticsearch clusters and Redis L2 caches directly. Read models are updated asynchronously via Kafka events streamed from the master PostgreSQL product datastore."
            },
            {
              "title": "2. Checkout & Order Placement (Saga Orchestrator + Outbox)",
              "content": "A Temporal-based Saga Orchestrator coordinates sequential workflow steps: Authorize Payment -> Reserve Inventory -> Create Shipping Order. Each microservice writes to its local database and transactional outbox table within a single local transaction."
            },
            {
              "title": "3. Customer Product Reviews (Write-Behind + Kafka)",
              "content": "Incoming customer product reviews are written directly to Kafka partitions with immediate 202 Accepted return. Background asynchronous workers execute spam classification and persist reviews in batches to Cassandra."
            }
          ]
        }
      }
    },
    {
      "id": "module-5",
      "number": "5",
      "title": "Key Technologies — Deep Dive into Distributed Datastores",
      "subtitle": "In-depth engineering analysis of modern datastores and stream brokers: Redis, Kafka, Cassandra, ScyllaDB, DynamoDB, and PostgreSQL",
      "diagramId": "kafkaArchitecture",
      "sections": [
        {
          "id": "sec-5-1",
          "number": "5.1",
          "title": "Redis — In-Memory High-Throughput Engine",
          "description": "Memory architecture, advanced data structures, persistence strategies, and clustering mechanics.",
          "levels": {
            "l1": {
              "badge": "Level 1",
              "text": "In-memory key-value data structure store delivering microsecond latency. Supports Strings, Hashes, Lists, Sets, Sorted Sets (ZSET), Bitmaps, and HyperLogLogs."
            },
            "l2": {
              "badge": "Level 2",
              "text": "Single-threaded event loop utilizing non-blocking I/O multiplexing (epoll/kqueue) eliminating thread locking overhead. Persistence strategies: RDB (point-in-time binary snapshots) and AOF (Append-Only File logging every write command with fsync options)."
            },
            "l3": {
              "badge": "Level 3",
              "text": "Redis Cluster distributes keys across 16,384 hash slots using CRC16. Use Hash Tags `{user_123}:profile` to guarantee related keys hash to the same physical node for multi-key atomic transactions."
            }
          }
        },
        {
          "id": "sec-5-3",
          "number": "5.3",
          "title": "Apache Kafka — Distributed Event Streaming Backbone",
          "description": "Append-only commit logs, partition distribution, consumer groups, and exactly-once processing semantics.",
          "diagramId": "kafkaArchitecture",
          "levels": {
            "l1": {
              "badge": "Level 1",
              "text": "High-throughput distributed append-only commit log. Topics are partitioned across cluster brokers. Producers append messages to partitions; consumers track read offsets sequentially."
            },
            "l2": {
              "badge": "Level 2",
              "text": "Extreme throughput driven by sequential disk writes, OS page cache utilization, and Zero-Copy network transfer (`sendfile` system call). Parallel consumption enabled across distributed Consumer Groups."
            },
            "l3": {
              "badge": "Level 3",
              "text": "Configure `acks=all` with `min.insync.replicas=2` to guarantee zero message loss. Implement Exactly-Once Semantics (EOS) using Kafka Transactions. Modern Kafka utilizes KRaft (Kafka Raft consensus) eliminating ZooKeeper."
            }
          }
        },
        {
          "id": "sec-5-5",
          "number": "5.5",
          "title": "Apache Cassandra & ScyllaDB — Wide-Column Datastores",
          "description": "Masterless peer-to-peer architecture, Gossip protocols, LSM-tree storage, and tunable consistency.",
          "levels": {
            "l1": {
              "badge": "Level 1",
              "text": "Distributed wide-column NoSQL database with a decentralized peer-to-peer masterless architecture. Nodes discover cluster state and topology changes via the Gossip protocol."
            },
            "l2": {
              "badge": "Level 2",
              "text": "Optimized for ultra-fast writes: commits writes to an on-disk CommitLog and in-memory Memtable before flushing to immutable SSTables. Employs Bloom Filters to avoid unnecessary SSTable disk reads."
            },
            "l3": {
              "badge": "Level 3",
              "text": "Tunable Consistency (ONE, QUORUM, ALL). Manage deletion tombstones to prevent compaction bloat. Execute background anti-entropy node repairs using Merkle Trees to resolve replica divergence."
            }
          }
        },
        {
          "id": "sec-5-6",
          "number": "5.6",
          "title": "Amazon DynamoDB & Single-Table Design",
          "description": "Fully managed NoSQL datastore, constant single-digit millisecond latency, and single-table data modeling patterns.",
          "levels": {
            "l1": {
              "badge": "Level 1",
              "text": "Fully managed serverless NoSQL datastore providing predictable single-digit millisecond latency at any scale. Uses Partition Key (PK) or composite Partition + Sort Key (PK + SK)."
            },
            "l2": {
              "badge": "Level 2",
              "text": "Single-Table Design: Modeling multiple distinct entity types (Users, Orders, Items) within a single physical table using overloaded Global Secondary Indexes (GSI) to satisfy all access patterns in a single round-trip without relational joins."
            },
            "l3": {
              "badge": "Level 3",
              "text": "Enable DynamoDB Streams to capture real-time item mutations for event-driven AWS Lambda execution. Deploy Global Tables for automated multi-region active-active replication."
            }
          }
        }
      ],
      "capstone": {
        "title": "Capstone Case: Technology Selection Matrix for a Hyper-Growth Fintech Platform",
        "scenario": "A fast-growing fintech platform encompasses banking transactions, instant chat, and product search. Define the exact polyglot storage stack and justification for each functional tier.",
        "hiddenSolution": {
          "summary": "Production Polyglot Persistence Blueprint:",
          "steps": [
            {
              "title": "1. Financial Ledger & User Balances (PostgreSQL with PgBouncer)",
              "content": "Strict ACID compliance, foreign key validation, relational constraints, zero rounding errors, and connection pooling via PgBouncer with Citus for horizontal sharding."
            },
            {
              "title": "2. High-Throughput Chat History (ScyllaDB / Cassandra)",
              "content": "High write throughput powered by LSM-trees, zero single point of failure (masterless peer-to-peer), partitioned cleanly by `(channel_id, bucket_month)`."
            },
            {
              "title": "3. User Sessions, Rate Limiting & Presences (Redis Cluster)",
              "content": "Sub-millisecond latency, atomic Lua scripts for rate limiting, and Bitmaps for real-time user online presence."
            },
            {
              "title": "4. Product Catalog & Text Search (Elasticsearch)",
              "content": "Inverted index for fuzzy full-text matching, updated near real-time from PostgreSQL via Debezium CDC and Kafka."
            }
          ]
        }
      }
    },
    {
      "id": "module-6",
      "number": "6",
      "title": "Advanced Topics — Geospatial, Probabilistic Structures & Vector DBs",
      "subtitle": "Geospatial indexing (QuadTree/H3), probabilistic algorithms (Bloom/HyperLogLog), and vector databases for AI embeddings",
      "diagramId": "consistentHashing",
      "sections": [
        {
          "id": "sec-6-1",
          "number": "6.1",
          "title": "Proximity & Location Search — QuadTree vs Uber H3 vs Google S2",
          "description": "Indexing 2D geographic coordinates and hexagonal grids for ride-hailing and localized delivery platforms.",
          "levels": {
            "l1": {
              "badge": "Level 1",
              "text": "Challenge: Indexing two continuous 2D coordinates (latitude and longitude) efficiently without executing costly full table scans across millions of geographic records."
            },
            "l2": {
              "badge": "Level 2",
              "text": "Geohash (encoding 2D coordinates into base32 alphanumeric strings where common prefixes denote spatial proximity) and QuadTree (hierarchical 4-quadrant tree partitioning that adapts density to urban versus rural areas)."
            },
            "l3": {
              "badge": "Level 3",
              "text": "Uber H3 Hexagonal Hierarchical Spatial Index (uniform neighbor distances across all 6 directions, simplifying routing algorithms) and Google S2 space-filling Hilbert Curves for sphere projection."
            }
          }
        },
        {
          "id": "sec-6-3",
          "number": "6.3",
          "title": "Probabilistic Data Structures for Big Data",
          "description": "Bloom Filters, HyperLogLog, Count-Min Sketch: saving 99% memory across billions of streamed records.",
          "table": {
            "headers": [
              "Structure",
              "Core Purpose",
              "Complexity / Space",
              "Accuracy Trade-off"
            ],
            "rows": [
              [
                "Bloom Filter",
                "Set membership testing",
                "O(k) / a few bits per element",
                "Zero false negatives; small tunable false positive rate."
              ],
              [
                "Cuckoo Filter",
                "Set membership with item deletion support",
                "O(1) / compact space",
                "Supports dynamic deletion with higher lookup efficiency than Bloom."
              ],
              [
                "HyperLogLog (HLL)",
                "Cardinality estimation (distinct counts)",
                "O(1) / ~1.5KB for millions of items",
                "Standard error rate ≈ 1.04/√m without storing actual item data."
              ],
              [
                "Count-Min Sketch",
                "Frequency estimation in streams",
                "O(d) / fixed 2D array",
                "Guaranteed never to underestimate frequency; may slightly overestimate."
              ]
            ]
          },
          "levels": {
            "l1": {
              "badge": "Level 1",
              "text": "Trading absolute 100% precision for 99% accuracy to reduce memory consumption by orders of magnitude when processing billions of records."
            },
            "l2": {
              "badge": "Level 2",
              "text": "HyperLogLog tracks the maximum number of leading zeros in hashed stream values to estimate cardinality as 2^K with minimal memory footprint."
            },
            "l3": {
              "badge": "Level 3",
              "text": "Deploy Bloom Filters in database engines (RocksDB/Cassandra) to bypass disk reads for missing keys; deploy HyperLogLog in Reddit/Twitter for real-time unique view counts."
            }
          }
        },
        {
          "id": "sec-6-4",
          "number": "6.4",
          "title": "Vector Databases — AI Embeddings & RAG Architecture",
          "description": "Indexing high-dimensional vector embeddings, HNSW graph search, IVF partitioning, and hybrid retrieval.",
          "levels": {
            "l1": {
              "badge": "Level 1",
              "text": "Transforming text and images into high-dimensional vector embeddings. Similarity search identifies semantic closeness using Cosine Similarity or Euclidean Distance."
            },
            "l2": {
              "badge": "Level 2",
              "text": "Hierarchical Navigable Small World (HNSW) graph indexing enables logarithmic nearest-neighbor search O(log N). Inverted File (IVF) partitions vector space into Voronoi cells to narrow search scope."
            },
            "l3": {
              "badge": "Level 3",
              "text": "Product Quantization (PQ) compresses vector representations by 75-90% to fit memory. Deploy Hybrid Search combining dense semantic vectors with sparse BM25 keyword search."
            }
          }
        }
      ],
      "capstone": {
        "title": "Capstone Case: Real-Time IoT Telemetry & Anomaly Processing for 1 Million Sensors",
        "scenario": "Architect an ingestion pipeline processing pressure and temperature telemetry from 1,000,000 IoT sensors every 5 seconds, calculating distinct active sensors and detecting duplicate signals.",
        "hiddenSolution": {
          "summary": "Stream Ingestion & Analytics Architecture:",
          "steps": [
            {
              "title": "1. Telemetry Ingestion & Gorilla Compression",
              "content": "Sensors stream readings via MQTT to an Envoy gateway tier, which produces to Kafka. A VictoriaMetrics / Prometheus TSDB consumes the stream, compressing timestamps via Delta-of-Delta and values via XOR compression."
            },
            {
              "title": "2. Distinct Active Device Tracking (HyperLogLog)",
              "content": "A lightweight Redis HyperLogLog register tracks unique active sensor IDs daily, consuming only 1.5KB of memory with 99% accuracy."
            },
            {
              "title": "3. Duplicate Signal Deduplication (Bloom Filter)",
              "content": "Sensor message IDs pass through an in-memory Bloom Filter to immediately drop duplicate transmissions caused by intermittent cellular retries."
            }
          ]
        }
      }
    },
    {
      "id": "module-7",
      "number": "7",
      "title": "In the Wild — Real-World Enterprise Production Case Studies",
      "subtitle": "Architectural lessons and production post-mortems from Shopify, Discord, Slack, Figma, and Spotify",
      "diagramId": "architectureEvolution",
      "caseStudies": [
        {
          "id": "case-7-1",
          "company": "Shopify",
          "title": "Black Friday Flash Sale Inventory Reservations at Scale",
          "problem": "Hundreds of thousands of concurrent shoppers purchasing limited flash-sale inventory simultaneously caused severe MySQL row locking contention, degrading response times and crashing database masters.",
          "solution": "Extracted hot inventory counters to Redis Cluster and executed atomic inventory deductions in memory via Redis Lua scripts (`DECRBY` bounded at zero). Successful reservations receive a 10-minute temporary checkout hold token.",
          "productionInsight": "Confirmed reservations are flushed asynchronously to MySQL via Kafka. If checkout expires, an automated task re-increments Redis inventory without human intervention."
        },
        {
          "id": "case-7-2",
          "company": "Discord",
          "title": "Storing Trillions of Messages: Migrating from Cassandra to ScyllaDB",
          "problem": "Long JVM Garbage Collection pauses, tombstone accumulation, and intensive disk compaction stalls in Apache Cassandra as message volume scaled past trillions of rows.",
          "solution": "Migrated to ScyllaDB (built with C++ on the Seastar asynchronous thread-per-core architecture, eliminating GC pauses). Redesigned primary partition keys to `((channel_id, bucket), message_id)` to cap partition sizes at 100MB.",
          "productionInsight": "P99 read latency dropped from seconds to a predictable sub-5ms, while reducing overall cluster server count to one-third."
        },
        {
          "id": "case-7-3",
          "company": "Slack",
          "title": "Multi-Tenant Queue Fair-Queuing Engine",
          "problem": "Large enterprise customers enqueuing millions of tasks simultaneously caused Head-of-Line blocking, starving smaller organizations in shared task queues.",
          "solution": "Built a Fair-Queuing engine that shards tasks into virtual tenant queues, dispatching jobs using Weighted Fair Queuing (WFQ) to guarantee fair resource allocation across all teams.",
          "productionInsight": "Implemented dynamic tenant rate limits and diverted overflow jobs to secondary low-priority Kafka topics, protecting global queue latency."
        },
        {
          "id": "case-7-4",
          "company": "Figma",
          "title": "Real-Time Multiplayer Collaborative Canvas Engine",
          "problem": "Dozens of designers simultaneously modifying the same canvas required sub-50ms visual updates without operational transformation latency or CRDT memory explosion.",
          "solution": "Bypassed standard OT and CRDT complexity in favor of a centralized single-threaded authoritative Rust document server per file, maintaining strict chronological operation ordering.",
          "productionInsight": "Client canvas modifications apply optimistically in the browser via WebAssembly (C++), streaming updates over WebSockets to the Rust server, which broadcasts canonical state diffs to all collaborators."
        },
        {
          "id": "case-7-5",
          "company": "Spotify",
          "title": "Data Lake & Music Recommendation Pipeline for 500M Users",
          "problem": "Processing hundreds of millions of daily stream events for royalty payouts and generating weekly personalized Discover Weekly playlists.",
          "solution": "Streamed events to Google Cloud Pub/Sub, executed real-time stream aggregation via Apache Beam (Dataflow), and dumped raw logs into Google Cloud Storage as columnar Parquet files.",
          "productionInsight": "Collaborative filtering and matrix factorization models run on BigQuery and Spark, computing vector embeddings indexed in nearest-neighbor stores to refresh playlists for 500M+ users every Monday morning."
        }
      ],
      "capstone": {
        "title": "Capstone Case: FAANG Architectural Synthesis & Shared Principles",
        "scenario": "Comparative architectural analysis of the common patterns adopted by Shopify, Discord, Slack, Figma, and Spotify to overcome extreme scale.",
        "hiddenSolution": {
          "summary": "Core Staff+ Engineering Principles:",
          "steps": [
            {
              "title": "1. Replace Distributed Locks with Single-Threaded Event Loops",
              "content": "As proven by Figma (single-threaded Rust file server), ScyllaDB (thread-per-core), and Redis, avoiding network locking and serializing updates in memory eliminates CPU thrashing and yields highest throughput."
            },
            {
              "title": "2. Smart Partitioning & Bounded Buckets",
              "content": "As demonstrated by Discord and Uber, preventing individual partition bloat via temporal or spatial bucketing protects disks from compaction stalls and stabilizes P99 latency."
            },
            {
              "title": "3. Fairness & Blast Radius Isolation",
              "content": "As engineered by Slack and Shopify, isolating tenant resources via virtual queues prevents any single user or organization from causing cascading fleet outages."
            }
          ]
        }
      }
    },
    {
      "id": "module-8",
      "number": "8",
      "title": "Interactive Studio — Architectural Design Simulator",
      "subtitle": "Hands-on architectural workbench: design production systems (InstaPay, Netflix, WhatsApp) with instant feedback, polyglot schemas, protocols, and code",
      "isStudio": true,
      "diagramId": "instapayArchitecture",
      "studioChallenges": [
        {
          "id": "challenge-instapay",
          "appName": "InstaPay (Instant Payment Network)",
          "tag": "Financial / Strong Consistency",
          "badge": "ACID & Saga",
          "diagramId": "instapayArchitecture",
          "overview": "Architecting a National Instant Payment Network (IPN) connecting retail banks for instant peer-to-peer fund transfers with strict zero-loss and zero-duplicate guarantees under network partitions.",
          "targetSpecs": {
            "throughput": "50,000 tx/sec",
            "latency": "< 3s End-to-End",
            "consistency": "Strict ACID / Zero Data Loss",
            "availability": "99.999% (Five Nines)"
          },
          "trainingComponents": [
            {
              "name": "Idempotency Lock Layer",
              "role": "Redis Cluster running Lua scripts to evaluate unique transaction idempotency keys, eliminating duplicate charge requests."
            },
            {
              "name": "Saga State Machine",
              "role": "Distributed transaction orchestrator coordinating: reserve sender funds -> invoke central bank switch -> confirm recipient credit."
            },
            {
              "name": "Double-Entry Ledger",
              "role": "PostgreSQL database recording every balance mutation as dual offsetting debit and credit entries to ensure mathematical balance."
            },
            {
              "name": "Central Bank IPN Connector",
              "role": "Secure gateway maintaining encrypted mTLS tunnels and Hardware Security Modules (HSM) to interface with the central bank switch."
            },
            {
              "name": "Nightly Reconciliation Engine",
              "role": "Batch reconciliation engine matching internal ledger records against external central bank settlement clearing files."
            }
          ],
          "questionsToSolve": [
            {
              "step": "1. Idempotency & Duplicate Request Mitigation",
              "options": [
                {
                  "text": "Rely solely on auto-increment IDs in the relational database",
                  "correct": false,
                  "reason": "Fails to prevent mobile clients from re-submitting identical transfer requests when network connections drop."
                },
                {
                  "text": "Require client-generated UUID v4 Idempotency Key verified atomically in Redis via Lua script",
                  "correct": true,
                  "reason": "Excellent! Guarantees that retries with the same key return the original cached response without re-executing money movement."
                }
              ]
            },
            {
              "step": "2. Inter-Bank Distributed Transaction Coordination",
              "options": [
                {
                  "text": "Two-Phase Commit (2PC) holding locks across all commercial bank databases",
                  "correct": false,
                  "reason": "2PC locks resources across bank networks; if one bank lags, the entire payment network freezes."
                },
                {
                  "text": "Saga Pattern with Orchestration and automated compensating rollback transactions",
                  "correct": true,
                  "reason": "Optimal! Decouples bank operations into discrete steps with automated compensating refunds on timeout."
                }
              ]
            },
            {
              "step": "3. Financial Auditability & Ledger Reliability",
              "options": [
                {
                  "text": "Direct UPDATE queries: `UPDATE accounts SET balance = balance - amount`",
                  "correct": false,
                  "reason": "Overwrites historical state; leaves no tamper-evident audit trail if discrepancies arise."
                },
                {
                  "text": "Immutable Double-Entry Ledger with debit and credit journal entries",
                  "correct": true,
                  "reason": "Industry Standard! Every transaction logs balanced debit and credit entries, guaranteeing mathematically provable audits."
                }
              ]
            }
          ],
          "databaseArchitecture": {
            "overview": "Polyglot storage architecture isolating high-throughput volatile locking from immutable financial ledger tables and analytics.",
            "polyglotTiers": [
              {
                "dbName": "PostgreSQL (Core Ledger)",
                "dbType": "Relational RDBMS (ACID)",
                "role": "Immutable double-entry ledger, accounts, and transaction state.",
                "shardingKey": "bank_routing_code + hash(account_id)",
                "consistency": "Strict Serializable / Multi-AZ Sync"
              },
              {
                "dbName": "Redis Cluster (Distributed Locks)",
                "dbType": "In-Memory Key-Value",
                "role": "Atomic idempotency locks and fast session auth validation.",
                "shardingKey": "idempotency_key",
                "consistency": "Strong In-Memory Lock (TTL = 24h)"
              },
              {
                "dbName": "ClickHouse / TimescaleDB",
                "dbType": "Columnar OLAP",
                "role": "Audit logs and nightly inter-bank clearing reconciliation.",
                "shardingKey": "partition by toYYYYMM(created_at)",
                "consistency": "Append-only Immutable"
              }
            ],
            "replicationStrategy": "Multi-AZ Synchronous Replication with RPO = 0 (Zero Data Loss) and automated failover via Raft/Patroni in under 3 seconds."
          },
          "databaseSchemas": [
            {
              "tableName": "accounts",
              "engine": "PostgreSQL (ACID Core)",
              "description": "User bank accounts with optimistic locking to prevent race conditions.",
              "columns": [
                {
                  "name": "account_id",
                  "type": "UUID",
                  "key": "PK",
                  "nullable": false,
                  "description": "Unique bank account identifier."
                },
                {
                  "name": "user_id",
                  "type": "UUID",
                  "key": "FK",
                  "nullable": false,
                  "description": "Owner user identifier."
                },
                {
                  "name": "bank_code",
                  "type": "VARCHAR(10)",
                  "key": "INDEX",
                  "nullable": false,
                  "description": "Bank routing identifier (e.g. NBE, CIB)."
                },
                {
                  "name": "iban",
                  "type": "VARCHAR(34)",
                  "key": "UNIQUE",
                  "nullable": false,
                  "description": "International Bank Account Number (IBAN)."
                },
                {
                  "name": "currency",
                  "type": "CHAR(3)",
                  "key": "NONE",
                  "nullable": false,
                  "description": "Account currency (EGP, USD, SAR)."
                },
                {
                  "name": "balance_cents",
                  "type": "BIGINT",
                  "key": "NONE",
                  "nullable": false,
                  "description": "Current balance in smallest currency units (cents)."
                },
                {
                  "name": "held_cents",
                  "type": "BIGINT",
                  "key": "NONE",
                  "nullable": false,
                  "description": "Active in-flight reserved funds."
                },
                {
                  "name": "status",
                  "type": "VARCHAR(15)",
                  "key": "NONE",
                  "nullable": false,
                  "description": "Account status (ACTIVE, SUSPENDED, FROZEN)."
                },
                {
                  "name": "version",
                  "type": "BIGINT",
                  "key": "LOCK",
                  "nullable": false,
                  "description": "Optimistic concurrency control version number."
                },
                {
                  "name": "created_at",
                  "type": "TIMESTAMPTZ",
                  "key": "NONE",
                  "nullable": false,
                  "description": "Account creation timestamp."
                }
              ],
              "ddl": "CREATE TABLE accounts (\n  account_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n  user_id UUID NOT NULL REFERENCES users(user_id),\n  bank_code VARCHAR(10) NOT NULL,\n  iban VARCHAR(34) UNIQUE NOT NULL,\n  currency CHAR(3) NOT NULL DEFAULT 'EGP',\n  balance_cents BIGINT NOT NULL CHECK (balance_cents >= 0),\n  held_cents BIGINT NOT NULL DEFAULT 0 CHECK (held_cents >= 0),\n  status VARCHAR(15) NOT NULL DEFAULT 'ACTIVE',\n  version BIGINT NOT NULL DEFAULT 1,\n  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()\n);\nCREATE INDEX idx_accounts_bank_user ON accounts(bank_code, user_id);"
            }
          ],
          "dataExchange": {
            "protocolMatrix": [
              {
                "layer": "Mobile App ↔ API Gateway",
                "protocol": "HTTPS / TLS 1.3 + mTLS",
                "format": "Signed JSON + Biometric HSM Token",
                "latencyTarget": "< 150ms",
                "rationale": "Strict mutual authentication with cryptographic signing to protect customer funds."
              },
              {
                "layer": "API Gateway ↔ Saga Orchestrator",
                "protocol": "gRPC over HTTP/2",
                "format": "Protobuf Binary",
                "latencyTarget": "< 10ms",
                "rationale": "High-throughput binary multiplexing with minimal payload overhead."
              },
              {
                "layer": "Saga ↔ Central Bank IPN Hub",
                "protocol": "ISO 20022 (AS2 / IPSec VPN)",
                "format": "XML (pacs.008 / pacs.002)",
                "latencyTarget": "< 1500ms",
                "rationale": "Global banking telecommunications standard for inter-bank clearing."
              },
              {
                "layer": "Saga ↔ Async Event Backbone",
                "protocol": "Apache Kafka",
                "format": "Avro with Schema Registry",
                "latencyTarget": "< 25ms",
                "rationale": "Event streaming for audit trails, notifications, and reconciliation."
              }
            ],
            "apiContractSample": {
              "title": "Instant Transfer Initiation API Contract",
              "type": "POST /v1/transfers (JSON + mTLS Header)",
              "snippet": "{\n  \"headers\": {\n    \"X-Idempotency-Key\": \"9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d\",\n    \"X-Biometric-Signature\": \"MEQCIF98...h298sX=\",\n    \"X-Device-Fingerprint\": \"sha256:d89a2e4...\"\n  },\n  \"body\": {\n    \"source_account_id\": \"acc_8921034-egp\",\n    \"destination_type\": \"IBAN\",\n    \"destination_value\": \"EG38000200010000002891029384\",\n    \"beneficiary_bank\": \"CIB_EG\",\n    \"amount_cents\": 500000,\n    \"currency\": \"EGP\",\n    \"note\": \"Payment for software license\"\n  }\n}"
            },
            "e2eRequestFlow": [
              {
                "stepNumber": 1,
                "actor": "User App",
                "action": "Biometric Transfer Signing & Idempotency Key Generation",
                "component": "Mobile Client",
                "protocol": "mTLS / TLS 1.3",
                "detail": "Client generates UUID v4 idempotency key and signs the payload using keys stored in device Secure Enclave."
              },
              {
                "stepNumber": 2,
                "actor": "API Gateway",
                "action": "Atomic Idempotency Lock Acquisition",
                "component": "Envoy / Redis Cluster",
                "protocol": "gRPC / Lua",
                "detail": "Verifies JWT token and acquires atomic distributed lock in Redis to reject duplicate retries."
              },
              {
                "stepNumber": 3,
                "actor": "Saga Orchestrator",
                "action": "Debit Account Reservation & Hold",
                "component": "Saga Engine / PostgreSQL",
                "protocol": "SQL Transaction",
                "detail": "Moves funds from balance_cents to held_cents within an optimistic lock transaction."
              },
              {
                "stepNumber": 4,
                "actor": "Central Bank Gateway",
                "action": "Inter-Bank Clearing Message Transmission",
                "component": "IPN Switch",
                "protocol": "ISO 20022",
                "detail": "Transmits pacs.008 credit transfer message over encrypted IPSec tunnel to receiving bank."
              },
              {
                "stepNumber": 5,
                "actor": "Double-Entry Ledger",
                "action": "Immutable Balanced Entry Recording",
                "component": "Ledger Service",
                "protocol": "Kafka Event",
                "detail": "Commits matching debit and credit journal lines, settling transfer in sub-3 seconds."
              }
            ]
          }
        },
        {
          "id": "challenge-uber",
          "appName": "Uber / Careem (Ride Hailing & Spatial Matching)",
          "tag": "Geospatial / Ultra-High Ingress",
          "badge": "Uber H3 & Redis Cluster",
          "diagramId": "uberArchitecture",
          "overview": "Architecting an ultra-scale ride-hailing and matching engine ingesting 1.25 Million location updates per second, providing sub-100ms nearby driver discovery and dynamic matching.",
          "targetSpecs": {
            "throughput": "1.25M location pings/sec",
            "latency": "< 100ms Matching",
            "consistency": "Eventual (Locations) / Strict (Match Lock)",
            "availability": "99.999% High Availability"
          },
          "trainingComponents": [
            {
              "name": "Spatial Ingestion Gateway",
              "role": "High-throughput Netty / Go gateway absorbing continuous UDP/WebSocket driver GPS location telemetry."
            },
            {
              "name": "Uber H3 Hexagonal Grid Index",
              "role": "Hierarchical spatial indexing mapping coordinates to Resolution 8 hexagons (radius ~460m) for O(1) neighbor radius queries."
            },
            {
              "name": "In-Memory Geospatial Cluster",
              "role": "Redis Cluster maintaining transient driver positions purely in memory to protect disks from 1.25M writes/sec."
            },
            {
              "name": "Dynamic Dispatch & Lock Engine",
              "role": "Matching engine executing distributed mutex locks (Redlock) to prevent dispatching one driver to two riders."
            }
          ],
          "questionsToSolve": [
            {
              "step": "1. Ingesting 1.25M Location Pings per Second",
              "options": [
                {
                  "text": "Execute synchronous SQL UPDATE queries with PostGIS",
                  "correct": false,
                  "reason": "Disk I/O and replication lag collapse the database under 1.25M writes/second."
                },
                {
                  "text": "Ingest location telemetry into an in-memory Redis Geospatial cluster partitioned by H3 cell ID",
                  "correct": true,
                  "reason": "Optimal! Keeps volatile coordinates in memory, updating spatial sets in O(log N) without disk thrashing."
                }
              ]
            },
            {
              "step": "2. Preventing Dual-Matching Race Conditions",
              "options": [
                {
                  "text": "Broadcast trip offer to all nearby drivers simultaneously; first to accept wins",
                  "correct": false,
                  "reason": "Causes user frustration and high server load from simultaneous conflicting accepts."
                },
                {
                  "text": "Acquire 10-second temporary atomic lock on the target driver via Redis Mutex before offering ride",
                  "correct": true,
                  "reason": "Standard! Guarantees the driver is reserved exclusively for this trip offer during the decision window."
                }
              ]
            }
          ],
          "databaseArchitecture": {
            "overview": "Decoupled memory and persistent storage separating ephemeral location tracking from persistent ride contracts.",
            "polyglotTiers": [
              {
                "dbName": "Redis Geospatial Cluster",
                "dbType": "In-Memory Key-Value",
                "role": "Live driver positions and H3 spatial neighborhood indexes.",
                "shardingKey": "h3_cell_res8",
                "consistency": "Volatile In-Memory"
              },
              {
                "dbName": "PostgreSQL (Citus)",
                "dbType": "Sharded RDBMS",
                "role": "Trip records, fares, payment receipts, and billing ledgers.",
                "shardingKey": "city_id + trip_id",
                "consistency": "Strict ACID"
              }
            ],
            "replicationStrategy": "Independent regional clusters per metropolitan area, preventing cascading multi-city outages."
          },
          "databaseSchemas": [
            {
              "tableName": "trips",
              "engine": "PostgreSQL (Sharded Citus)",
              "description": "Historical and active ride records.",
              "columns": [
                {
                  "name": "trip_id",
                  "type": "UUID",
                  "key": "PK",
                  "nullable": false,
                  "description": "Unique trip identifier."
                },
                {
                  "name": "rider_id",
                  "type": "UUID",
                  "key": "INDEX",
                  "nullable": false,
                  "description": "Rider user identifier."
                },
                {
                  "name": "driver_id",
                  "type": "UUID",
                  "key": "INDEX",
                  "nullable": true,
                  "description": "Assigned driver identifier."
                },
                {
                  "name": "pickup_h3",
                  "type": "VARCHAR(15)",
                  "key": "INDEX",
                  "nullable": false,
                  "description": "Pickup location Uber H3 cell ID."
                },
                {
                  "name": "status",
                  "type": "VARCHAR(20)",
                  "key": "NONE",
                  "nullable": false,
                  "description": "REQUESTED, ASSIGNED, PICKED_UP, COMPLETED."
                }
              ],
              "ddl": "CREATE TABLE trips (\n  trip_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n  rider_id UUID NOT NULL,\n  driver_id UUID,\n  pickup_h3 VARCHAR(15) NOT NULL,\n  status VARCHAR(20) NOT NULL DEFAULT 'REQUESTED',\n  created_at TIMESTAMPTZ DEFAULT NOW()\n);"
            }
          ],
          "dataExchange": {
            "protocolMatrix": [
              {
                "layer": "Driver App ↔ Ingress Gateway",
                "protocol": "UDP / WebSocket over TLS",
                "format": "Binary Protobuf (lat, lng, bearing, speed)",
                "latencyTarget": "< 30ms",
                "rationale": "Ultra-low telemetry transmission overhead without connection teardown penalty."
              },
              {
                "layer": "Dispatch Engine ↔ Matching Workers",
                "protocol": "gRPC Streaming",
                "format": "Protobuf",
                "latencyTarget": "< 5ms",
                "rationale": "High-throughput inter-service streaming of candidate driver sets."
              }
            ],
            "apiContractSample": {
              "title": "Nearby Drivers Discovery API Contract",
              "type": "GET /v1/drivers/nearby?h3=882681a533fffff&radius_rings=2",
              "snippet": "{\n  \"center_cell\": \"882681a533fffff\",\n  \"drivers_count\": 8,\n  \"drivers\": [\n    { \"driver_id\": \"drv_901\", \"eta_seconds\": 180, \"bearing\": 45 },\n    { \"driver_id\": \"drv_442\", \"eta_seconds\": 240, \"bearing\": 180 }\n  ]\n}"
            },
            "e2eRequestFlow": [
              {
                "stepNumber": 1,
                "actor": "Driver Phone",
                "action": "Emit 4-Second GPS Telemetry Ping",
                "component": "Driver Client",
                "protocol": "UDP/Protobuf",
                "detail": "Driver app emits lightweight GPS ping containing coordinates, speed, and heading."
              },
              {
                "stepNumber": 2,
                "actor": "Ingress Proxy",
                "action": "Calculate H3 Hexagonal Cell",
                "component": "Envoy / H3 Lib",
                "protocol": "Internal Memory",
                "detail": "Computes H3 cell ID and updates Redis geospatial sorted index."
              },
              {
                "stepNumber": 3,
                "actor": "Rider Client",
                "action": "Request Ride Dispatch",
                "component": "Rider App",
                "protocol": "HTTPS / JSON",
                "detail": "Rider requests pickup; gateway queries rider's H3 cell and 6 neighboring cells."
              },
              {
                "stepNumber": 4,
                "actor": "Dispatch Engine",
                "action": "Acquire Driver Mutex Lock",
                "component": "Redis Redlock",
                "protocol": "TCP / Redis",
                "detail": "Locks candidate driver for 10 seconds and dispatches offer notification."
              }
            ]
          }
        },
        {
          "id": "challenge-youtube",
          "appName": "YouTube (Adaptive Video Transcoding & Ingestion)",
          "tag": "Media / Compute-Intensive",
          "badge": "DAG Pipeline & Multi-Bitrate HLS",
          "diagramId": "youtubeArchitecture",
          "overview": "Architecting an asynchronous video processing platform absorbing 500 hours of uploaded video per minute, transcoding in parallel, and delivering adaptive streams worldwide.",
          "targetSpecs": {
            "throughput": "500 hours uploaded/minute",
            "latency": "< 30s Transcoding Completion",
            "consistency": "Eventual Consistency",
            "availability": "99.99% Availability"
          },
          "trainingComponents": [
            {
              "name": "Direct S3 Upload Gateway",
              "role": "Pre-signed URL gateway allowing clients to upload multi-gigabyte master videos directly to object storage."
            },
            {
              "name": "DAG Transcoding Scheduler",
              "role": "Workflow orchestrator (Temporal / Step Functions) breaking videos into GOP chunks for parallel worker nodes."
            },
            {
              "name": "Hardware Transcoding Workers",
              "role": "GPU-accelerated workers encoding video chunks into 1080p, 720p, 480p H.264 and AV1 profiles."
            },
            {
              "name": "Adaptive Manifest Builder",
              "role": "Generates HLS .m3u8 and MPEG-DASH manifests stitching segments together for client player consumption."
            }
          ],
          "questionsToSolve": [
            {
              "step": "1. Ingesting Large Video Files",
              "options": [
                {
                  "text": "Upload entire video file through application web server to local disk",
                  "correct": false,
                  "reason": "Saturates web server bandwidth, risks out-of-memory crashes, and blocks application threads."
                },
                {
                  "text": "Issue S3 Pre-Signed URLs and upload chunks directly from client to Object Storage",
                  "correct": true,
                  "reason": "Industry Standard! Completely offloads heavy file uploads from backend compute servers."
                }
              ]
            },
            {
              "step": "2. Parallel Transcoding Architecture",
              "options": [
                {
                  "text": "Transcode the entire monolithic video on a single large compute instance",
                  "correct": false,
                  "reason": "Takes hours for 4K videos; causes massive user upload wait times."
                },
                {
                  "text": "Split video into Group-of-Pictures (GOP) chunks and transcode across worker fleet in parallel",
                  "correct": true,
                  "reason": "Excellent! Reduces transcoding time from hours to seconds by distributing GOP chunks across GPU nodes."
                }
              ]
            }
          ],
          "databaseArchitecture": {
            "overview": "Decoupled video metadata storage fronting distributed object storage and edge CDN caching.",
            "polyglotTiers": [
              {
                "dbName": "Amazon S3 / Google Cloud Storage",
                "dbType": "Object Storage",
                "role": "Raw master videos and transcoded .ts video chunks.",
                "shardingKey": "video_id/resolution/chunk_id",
                "consistency": "Strong Read-After-Write"
              },
              {
                "dbName": "Spanner / MySQL",
                "dbType": "RDBMS",
                "role": "Video metadata, title, channel owner, view counts, and comments.",
                "shardingKey": "video_id",
                "consistency": "Strict ACID"
              }
            ],
            "replicationStrategy": "Geo-redundant object storage with automated edge CDN caching on playback."
          },
          "databaseSchemas": [
            {
              "tableName": "videos",
              "engine": "Cloud Spanner / PostgreSQL",
              "description": "Video catalog and processing state records.",
              "columns": [
                {
                  "name": "video_id",
                  "type": "VARCHAR(11)",
                  "key": "PK",
                  "nullable": false,
                  "description": "Unique video base64 identifier."
                },
                {
                  "name": "channel_id",
                  "type": "UUID",
                  "key": "INDEX",
                  "nullable": false,
                  "description": "Uploader channel identifier."
                },
                {
                  "name": "status",
                  "type": "VARCHAR(20)",
                  "key": "NONE",
                  "nullable": false,
                  "description": "PROCESSING, READY, FAILED."
                },
                {
                  "name": "duration_sec",
                  "type": "INT",
                  "key": "NONE",
                  "nullable": false,
                  "description": "Total duration in seconds."
                },
                {
                  "name": "manifest_url",
                  "type": "TEXT",
                  "key": "NONE",
                  "nullable": true,
                  "description": "CDN URL to HLS master playlist .m3u8."
                }
              ],
              "ddl": "CREATE TABLE videos (\n  video_id VARCHAR(11) PRIMARY KEY,\n  channel_id UUID NOT NULL,\n  status VARCHAR(20) NOT NULL DEFAULT 'PROCESSING',\n  duration_sec INT NOT NULL,\n  manifest_url TEXT,\n  created_at TIMESTAMPTZ DEFAULT NOW()\n);"
            }
          ],
          "dataExchange": {
            "protocolMatrix": [
              {
                "layer": "Client ↔ Object Storage",
                "protocol": "HTTPS Multi-Part Upload",
                "format": "Binary Raw Video Streams",
                "latencyTarget": "< 100ms chunk write",
                "rationale": "Direct upload bypassing application servers."
              },
              {
                "layer": "Player ↔ Edge CDN",
                "protocol": "HTTPS over HTTP/3 (QUIC)",
                "format": "MPEG-DASH / HLS Segments",
                "latencyTarget": "< 30ms TTFB",
                "rationale": "High-throughput adaptive video delivery without transport HoL blocking."
              }
            ],
            "apiContractSample": {
              "title": "Video Upload Pre-Signed URL API Contract",
              "type": "POST /v1/videos/upload-url",
              "snippet": "{\n  \"video_id\": \"dQw4w9WgXcQ\",\n  \"upload_url\": \"https://storage.youtube.com/raw-ingest/dQw4w9WgXcQ?signature=abcdef123456\",\n  \"chunk_size_bytes\": 10485760,\n  \"expires_in_seconds\": 3600\n}"
            },
            "e2eRequestFlow": [
              {
                "stepNumber": 1,
                "actor": "Creator",
                "action": "Request Upload Pre-Signed URL",
                "component": "API Gateway",
                "protocol": "HTTPS / JSON",
                "detail": "Creator client requests authenticated multi-part upload URL from API gateway."
              },
              {
                "stepNumber": 2,
                "actor": "Client",
                "action": "Upload Video Direct to S3",
                "component": "Object Storage",
                "protocol": "HTTPS PUT",
                "detail": "Client streams 10MB chunks directly to cloud object storage."
              },
              {
                "stepNumber": 3,
                "actor": "S3 Event",
                "action": "Emit ObjectCreated Event",
                "component": "Kafka Broker",
                "protocol": "Async Message",
                "detail": "Object storage notifies transcoding pipeline orchestrator that master video is ready."
              },
              {
                "stepNumber": 4,
                "actor": "Transcoding Fleet",
                "action": "Parallel GOP Transcoding",
                "component": "GPU Worker Fleet",
                "protocol": "FFmpeg Internal",
                "detail": "Workers split video into 3-second segments and encode into 1080p, 720p, 480p formats."
              },
              {
                "stepNumber": 5,
                "actor": "Manifest Builder",
                "action": "Publish HLS Master Playlist",
                "component": "CDN Origin",
                "protocol": "HTTPS",
                "detail": "Assembles .m3u8 playlist manifest and pushes cache invalidation to Edge CDNs."
              }
            ]
          }
        },
        {
          "id": "challenge-whatsapp",
          "appName": "WhatsApp (Ultra-Scale Real-Time Chat)",
          "tag": "Messaging / Massive Concurrency",
          "badge": "WebSockets & ScyllaDB",
          "diagramId": "chatArchitecture",
          "overview": "Designing an end-to-end encrypted messaging engine supporting 2 Billion active users, processing 100 Billion messages daily with minimal server footprint.",
          "targetSpecs": {
            "throughput": "2 Million msgs/sec peak",
            "latency": "< 100ms Delivery",
            "consistency": "Strict Per-Conversation Ordering",
            "availability": "99.999% Availability"
          },
          "trainingComponents": [
            {
              "name": "Erlang/Elixir Connection Gateway",
              "role": "Lightweight actor processes holding millions of open bidirectional TCP connections per server."
            },
            {
              "name": "Session Presence Registry",
              "role": "Distributed in-memory directory tracking which gateway server holds each user's active socket."
            },
            {
              "name": "Undelivered Message Store",
              "role": "Ephemeral message queue holding messages until target offline recipients reconnect."
            },
            {
              "name": "Signal Protocol Key Service",
              "role": "Public identity keys and pre-keys distribution directory for end-to-end encryption."
            }
          ],
          "questionsToSolve": [
            {
              "step": "1. Managing Massive Concurrent Socket Connections",
              "options": [
                {
                  "text": "Spawn one OS thread per connected socket in Java/Node.js",
                  "correct": false,
                  "reason": "Thread memory overhead exhausts server RAM and causes excessive context-switching."
                },
                {
                  "text": "Use lightweight actor processes (Erlang BEAM / Go goroutines) using non-blocking epoll",
                  "correct": true,
                  "reason": "Standard! Allows a single modern server instance to maintain 2M+ concurrent open TCP connections."
                }
              ]
            },
            {
              "step": "2. Message Storage Strategy for Offline Users",
              "options": [
                {
                  "text": "Store all messages permanently on server in relational tables",
                  "correct": false,
                  "reason": "Violates privacy principles and inflates storage costs exponentially."
                },
                {
                  "text": "Ephemeral storage: delete message from server immediately upon receipt of delivery ACK",
                  "correct": true,
                  "reason": "Optimal! Servers store messages only while target is offline, purging upon delivery confirmation."
                }
              ]
            }
          ],
          "databaseArchitecture": {
            "overview": "Ephemeral queue storage combined with distributed wide-column historical tables.",
            "polyglotTiers": [
              {
                "dbName": "Redis Cluster",
                "dbType": "In-Memory Datastore",
                "role": "User session registry and online presence status.",
                "shardingKey": "user_id",
                "consistency": "Volatile"
              },
              {
                "dbName": "ScyllaDB",
                "dbType": "Wide-Column Datastore",
                "role": "Offline messages and group membership directory.",
                "shardingKey": "recipient_id",
                "consistency": "Tunable Quorum"
              }
            ],
            "replicationStrategy": "Multi-datacenter replication factor 3 with local DC quorum reads/writes."
          },
          "databaseSchemas": [
            {
              "tableName": "offline_messages",
              "engine": "ScyllaDB",
              "description": "Stores undelivered messages awaiting recipient reconnection.",
              "columns": [
                {
                  "name": "recipient_id",
                  "type": "BIGINT",
                  "key": "PK",
                  "nullable": false,
                  "description": "Target user phone/ID (Partition Key)."
                },
                {
                  "name": "message_id",
                  "type": "TIMEUUID",
                  "key": "CLUSTERING_KEY",
                  "nullable": false,
                  "description": "Monotonic timestamp-based message identifier."
                },
                {
                  "name": "sender_id",
                  "type": "BIGINT",
                  "key": "NONE",
                  "nullable": false,
                  "description": "Sender user ID."
                },
                {
                  "name": "payload_encrypted",
                  "type": "BLOB",
                  "key": "NONE",
                  "nullable": false,
                  "description": "End-to-end encrypted message ciphertext."
                }
              ],
              "ddl": "CREATE TABLE offline_messages (\n  recipient_id bigint,\n  message_id timeuuid,\n  sender_id bigint,\n  payload_encrypted blob,\n  PRIMARY KEY (recipient_id, message_id)\n) WITH CLUSTERING ORDER BY (message_id ASC);"
            }
          ],
          "dataExchange": {
            "protocolMatrix": [
              {
                "layer": "Client ↔ Gateway",
                "protocol": "Persistent TLS over TCP / WebSocket",
                "format": "Noise Protocol & Protobuf",
                "latencyTarget": "< 30ms",
                "rationale": "Minimal overhead, zero handshake penalty per message."
              },
              {
                "layer": "Internal Servers",
                "protocol": "gRPC",
                "format": "Protobuf",
                "latencyTarget": "< 2ms",
                "rationale": "High-throughput inter-cluster routing."
              }
            ],
            "apiContractSample": {
              "title": "Encrypted Chat Message Packet",
              "type": "Noise Protocol Binary Frame",
              "snippet": "{\n  \"message_id\": \"1e8a9d00-4b2a-11ee-be56-0242ac120002\",\n  \"conversation_id\": \"conv_998124\",\n  \"sender_id\": 98214451,\n  \"ciphertext_base64\": \"vL8jQz8p9X2...==\", \n  \"iv\": \"3d9a1024b8e1\",\n  \"timestamp_ms\": 1693740000000\n}"
            },
            "e2eRequestFlow": [
              {
                "stepNumber": 1,
                "actor": "Sender App",
                "action": "Client-Side Encryption via Signal Protocol",
                "component": "Mobile Client",
                "protocol": "Signal / E2EE",
                "detail": "Sender encrypts message with recipient's ratchet public key before transmission."
              },
              {
                "stepNumber": 2,
                "actor": "Connection Gateway",
                "action": "Lookup Recipient Socket Gateway",
                "component": "Redis Session Registry",
                "protocol": "TCP / Redis",
                "detail": "Gateway checks Redis to see if recipient currently has an active TCP socket."
              },
              {
                "stepNumber": 3,
                "actor": "Inter-Gateway Bus",
                "action": "Forward Message to Target Gateway",
                "component": "Kafka / gRPC",
                "protocol": "gRPC",
                "detail": "Routes ciphertext packet directly to gateway hosting recipient socket."
              },
              {
                "stepNumber": 4,
                "actor": "Recipient App",
                "action": "Push Over Active Socket & Emit Delivery ACK",
                "component": "Recipient Client",
                "protocol": "WebSocket",
                "detail": "Pushes packet to recipient, which acknowledges delivery receipt (Double Tick)."
              }
            ]
          }
        },
        {
          "id": "challenge-netflix",
          "appName": "Netflix (Global Adaptive Video Streaming)",
          "tag": "Media / Global Scale",
          "badge": "CDN & Transcoding",
          "diagramId": "netflixArchitecture",
          "overview": "Designing a global video-on-demand platform serving 200M+ concurrent viewers with sub-second playback initiation and zero mid-stream buffering.",
          "targetSpecs": {
            "throughput": "100 Million streams",
            "latency": "< 200ms TTFB",
            "consistency": "Eventual Consistency",
            "availability": "99.99% Availability"
          },
          "trainingComponents": [
            {
              "name": "Transcoding Pipeline",
              "role": "Distributed microservices splitting uploaded master videos into multi-bitrate HLS and DASH profiles."
            },
            {
              "name": "Open Connect CDN",
              "role": "Custom edge caching appliances deployed directly inside ISP datacenters worldwide."
            },
            {
              "name": "Dynamic Manifest Generator",
              "role": "Generates personalized playlist manifests pointing client media players to the closest ISP edge caches."
            },
            {
              "name": "Playback Telemetry Ingestion",
              "role": "Real-time streaming telemetry capturing buffering rates, bitrate shifts, and network diagnostics."
            }
          ],
          "questionsToSolve": [
            {
              "step": "1. Video Chunk Delivery Strategy",
              "options": [
                {
                  "text": "Stream entire monolithic MP4 files from centralized cloud storage",
                  "correct": false,
                  "reason": "Excessive startup latency; cannot adapt to fluctuating mobile bandwidth."
                },
                {
                  "text": "Segment videos into 2-6 second chunks with adaptive bitrate streaming (HLS / DASH)",
                  "correct": true,
                  "reason": "Standard! Players dynamically adjust bitrates to live network speeds, preventing playback stalls."
                }
              ]
            },
            {
              "step": "2. Global Edge Caching Strategy",
              "options": [
                {
                  "text": "Rely entirely on public third-party commercial CDNs",
                  "correct": false,
                  "reason": "Costly at massive petabyte scale; lacks integration with local ISP fiber loops."
                },
                {
                  "text": "Deploy dedicated edge appliances (Open Connect) inside regional ISP networks",
                  "correct": true,
                  "reason": "Superb! Offloads 95% of backbone traffic and serves videos from within the viewer's local ISP."
                }
              ]
            }
          ],
          "databaseArchitecture": {
            "overview": "Tiered catalog datastore fronted by distributed caching and asynchronous telemetry ingestion.",
            "polyglotTiers": [
              {
                "dbName": "Amazon DynamoDB",
                "dbType": "NoSQL Key-Value",
                "role": "User profiles, viewing bookmarks, and watch history.",
                "shardingKey": "user_id",
                "consistency": "Eventual"
              },
              {
                "dbName": "EVCache (Memcached)",
                "dbType": "Distributed Cache",
                "role": "Personalized catalog feeds and recommendation rows.",
                "shardingKey": "profile_id",
                "consistency": "Volatile"
              },
              {
                "dbName": "Apache Iceberg on S3",
                "dbType": "Data Lake",
                "role": "Analytics and offline machine learning recommendation training.",
                "shardingKey": "event_date",
                "consistency": "Batch"
              }
            ],
            "replicationStrategy": "Multi-region active-active DynamoDB global tables with automatic bi-directional replication."
          },
          "databaseSchemas": [
            {
              "tableName": "user_playback_state",
              "engine": "DynamoDB",
              "description": "Tracks exact playback timestamp per profile for resume functionality.",
              "columns": [
                {
                  "name": "profile_id",
                  "type": "String",
                  "key": "PK",
                  "nullable": false,
                  "description": "Unique profile identifier (Partition Key)."
                },
                {
                  "name": "video_id",
                  "type": "String",
                  "key": "CLUSTERING_KEY",
                  "nullable": false,
                  "description": "Unique video title identifier (Sort Key)."
                },
                {
                  "name": "playback_position_sec",
                  "type": "Number",
                  "key": "NONE",
                  "nullable": false,
                  "description": "Last watched position in seconds."
                },
                {
                  "name": "updated_at",
                  "type": "Number",
                  "key": "NONE",
                  "nullable": false,
                  "description": "Epoch timestamp of last update."
                }
              ],
              "ddl": "{\n  \"TableName\": \"user_playback_state\",\n  \"KeySchema\": [\n    {\"AttributeName\": \"profile_id\", \"KeyType\": \"HASH\"},\n    {\"AttributeName\": \"video_id\", \"KeyType\": \"RANGE\"}\n  ]\n}"
            }
          ],
          "dataExchange": {
            "protocolMatrix": [
              {
                "layer": "Client -> Edge CDN",
                "protocol": "HTTPS over QUIC / HTTP/3",
                "format": "MPEG-DASH / HLS Byte Streams",
                "latencyTarget": "< 50ms",
                "rationale": "High-throughput video chunk delivery without transport-level Head-of-Line blocking."
              },
              {
                "layer": "Player -> Telemetry Gateway",
                "protocol": "HTTP/2 POST",
                "format": "Protobuf",
                "latencyTarget": "< 200ms",
                "rationale": "Lightweight client metrics streaming."
              }
            ],
            "apiContractSample": {
              "title": "Playback Session License & Manifest API Contract",
              "type": "POST /v1/playback/license",
              "snippet": "{\n  \"session_token\": \"sess_89a12b4c\",\n  \"video_id\": \"stranger-things-s4e1\",\n  \"manifest_url\": \"https://cdn.netflix.com/manifests/st4_1.mpd\",\n  \"drm_key_system\": \"widevine\"\n}"
            },
            "e2eRequestFlow": [
              {
                "stepNumber": 1,
                "actor": "Viewer Client",
                "action": "Click Play Video",
                "component": "Smart TV App",
                "protocol": "HTTPS / JSON",
                "detail": "Client requests dynamic playback manifest tailored to device capabilities and ISP location."
              },
              {
                "stepNumber": 2,
                "actor": "Manifest Service",
                "action": "Generate ISP-Targeted Manifest",
                "component": "Manifest Engine",
                "protocol": "HTTPS",
                "detail": "Selects closest Open Connect CDN appliance embedded in the user's internet provider."
              },
              {
                "stepNumber": 3,
                "actor": "Player Media Engine",
                "action": "Stream Video Chunks via QUIC",
                "component": "Open Connect CDN",
                "protocol": "HTTP/3",
                "detail": "Streams 2-second media chunks, dynamically switching bitrates based on live network speeds."
              }
            ]
          }
        },
        {
          "id": "challenge-tiktok",
          "appName": "TikTok (Real-Time For You Feed & Smart Pre-Buffering)",
          "tag": "Short Video / Ultra-Fast Feedback",
          "badge": "Sub-Second Rec & Pre-buffer",
          "diagramId": "tiktokArchitecture",
          "overview": "Designing a high-retention short video platform serving personalized candidate feeds with sub-500ms recommendation updates and zero-latency swiping.",
          "targetSpecs": {
            "throughput": "1 Billion daily active users",
            "latency": "< 20ms Swipe Initiation",
            "consistency": "Eventual Consistency",
            "availability": "99.99% Availability"
          },
          "trainingComponents": [
            {
              "name": "Watch Signal Streamer",
              "role": "Captures instant watch percentage, replays, likes, and skips emitted by client mobile apps."
            },
            {
              "name": "Real-Time Feature Store",
              "role": "Low-latency Redis / Flink cluster maintaining live user interaction affinities over 5-minute sliding windows."
            },
            {
              "name": "Candidate Retrieval & Ranker",
              "role": "Two-stage ML ranking pipeline: Vector DB nearest-neighbor candidate filtering -> Deep Neural Net ranking."
            },
            {
              "name": "Client Smart Pre-Buffering",
              "role": "App downloads first 3 seconds of the next 3 candidate videos in background for instant swiping."
            }
          ],
          "questionsToSolve": [
            {
              "step": "1. Achieving Instantaneous Swiping Experience",
              "options": [
                {
                  "text": "Wait for user to swipe to next video before initiating download from CDN",
                  "correct": false,
                  "reason": "Causes visible buffering spinner and breaks user immersion."
                },
                {
                  "text": "Pre-buffer the first 3 seconds of the upcoming 3 candidate videos in client memory",
                  "correct": true,
                  "reason": "Optimal! Guarantees instantaneous playback start when user swipes, while downloading remaining chunks during playback."
                }
              ]
            },
            {
              "step": "2. Incorporating Live User Feedback into Feed",
              "options": [
                {
                  "text": "Re-train recommendation models nightly via offline batch MapReduce jobs",
                  "correct": false,
                  "reason": "Too slow; fails to adapt to session mood shifts or instant viral trends."
                },
                {
                  "text": "Stream engagement events directly to Apache Flink to update session vector weights in sub-second time",
                  "correct": true,
                  "reason": "Superb! Adapts the very next video recommendation to what the user liked or skipped 5 seconds ago."
                }
              ]
            }
          ],
          "databaseArchitecture": {
            "overview": "Real-time streaming feature store combined with vector nearest-neighbor databases.",
            "polyglotTiers": [
              {
                "dbName": "Redis (Session Feature Store)",
                "dbType": "In-Memory Datastore",
                "role": "Real-time user engagement features and short-term session vector.",
                "shardingKey": "user_id",
                "consistency": "Sub-millisecond"
              },
              {
                "dbName": "Milvus / Qdrant",
                "dbType": "Vector Database",
                "role": "High-dimensional video candidate embeddings for nearest-neighbor search.",
                "shardingKey": "category_id",
                "consistency": "Eventual"
              }
            ],
            "replicationStrategy": "Distributed regional vector index replicas with real-time stream ingestion."
          },
          "databaseSchemas": [
            {
              "tableName": "user_session_signals",
              "engine": "Redis Hash / In-Memory",
              "description": "Short-term real-time engagement features per active user.",
              "columns": [
                {
                  "name": "user_id",
                  "type": "String",
                  "key": "PK",
                  "nullable": false,
                  "description": "Active user identifier."
                },
                {
                  "name": "recent_tags_liked",
                  "type": "List<String>",
                  "key": "NONE",
                  "nullable": false,
                  "description": "Tags from videos watched > 80%."
                },
                {
                  "name": "session_skip_count",
                  "type": "Number",
                  "key": "NONE",
                  "nullable": false,
                  "description": "Skips within last 60 seconds."
                }
              ],
              "ddl": "HSET session:user_99182 recent_liked '[\"coding\", \"system_design\"]' skip_rate 0.15"
            }
          ],
          "dataExchange": {
            "protocolMatrix": [
              {
                "layer": "Mobile App ↔ Signal Ingestion",
                "protocol": "HTTP/2 POST Stream",
                "format": "Compact Protobuf",
                "latencyTarget": "< 50ms",
                "rationale": "High-frequency watch duration and interaction telemetry."
              },
              {
                "layer": "Ranker ↔ Feed Serving",
                "protocol": "gRPC Streaming",
                "format": "Protobuf",
                "latencyTarget": "< 15ms",
                "rationale": "Sub-second candidate recommendation ranking."
              }
            ],
            "apiContractSample": {
              "title": "For You Feed Generation API Contract",
              "type": "GET /v1/feed/foryou?count=10",
              "snippet": "{\n  \"feed_id\": \"foryou_batch_1920\",\n  \"candidates\": [\n    { \"video_id\": \"tk_8912\", \"prebuffer_url\": \"https://edge.tiktok.com/chunk_tk_8912_0.mp4\" },\n    { \"video_id\": \"tk_7721\", \"prebuffer_url\": \"https://edge.tiktok.com/chunk_tk_7721_0.mp4\" }\n  ]\n}"
            },
            "e2eRequestFlow": [
              {
                "stepNumber": 1,
                "actor": "User",
                "action": "Watch Video > 80%",
                "component": "Mobile App",
                "protocol": "HTTP/2",
                "detail": "App streams completion signal to real-time ingestion gateway."
              },
              {
                "stepNumber": 2,
                "actor": "Feature Engine",
                "action": "Update Session Vector",
                "component": "Flink / Redis",
                "protocol": "Stream",
                "detail": "Apache Flink updates user affinity vector in Redis in sub-500ms."
              },
              {
                "stepNumber": 3,
                "actor": "Feed Service",
                "action": "Pre-buffer Upcoming Videos",
                "component": "Edge CDN",
                "protocol": "HTTP/3",
                "detail": "Client fetches next candidate list and pre-buffers the first 3 seconds."
              }
            ]
          }
        },
        {
          "id": "challenge-ecommerce",
          "appName": "Amazon / Flash Sale (High-Concurrency Flash Sales)",
          "tag": "E-Commerce / Ultra-High Concurrency",
          "badge": "Virtual Waiting Room & Atomic Lua",
          "diagramId": "flashSaleArchitecture",
          "overview": "Architecting an enterprise flash sale platform handling 100,000 items selling out in 60 seconds with 1,000,000 concurrent shoppers, preventing overselling and database crashes.",
          "targetSpecs": {
            "throughput": "100,000 tx/sec peak",
            "latency": "< 200ms Checkout",
            "consistency": "Strict Linearizable Inventory",
            "availability": "99.999% Availability"
          },
          "trainingComponents": [
            {
              "name": "Virtual Waiting Room",
              "role": "Edge queuing system throttling traffic surges and draining buyers at a controlled rate matching downstream database capacity."
            },
            {
              "name": "In-Memory Atomic Inventory Engine",
              "role": "Redis Cluster executing atomic Lua scripts to verify availability and reserve items in memory in O(1)."
            },
            {
              "name": "Saga Checkout Coordinator",
              "role": "Orchestrator managing multi-step payments with automated inventory rollbacks on abandoned checkouts."
            },
            {
              "name": "Asynchronous Order Settlement",
              "role": "Kafka event pipeline persisting confirmed sales to PostgreSQL databases in orderly batches."
            }
          ],
          "questionsToSolve": [
            {
              "step": "1. Ingress Surge Protection",
              "options": [
                {
                  "text": "Allow all 1,000,000 concurrent users to query the primary database simultaneously",
                  "correct": false,
                  "reason": "Exhausts database connection pools immediately and crashes the entire website."
                },
                {
                  "text": "Deploy an Edge Virtual Waiting Room to queue users and admit buyers at a controlled rate",
                  "correct": true,
                  "reason": "Industry Standard! Protects backend services from traffic spikes by matching admission to database capacity."
                }
              ]
            },
            {
              "step": "2. Eliminating Inventory Overselling",
              "options": [
                {
                  "text": "Use database row locking: `SELECT FOR UPDATE` on the inventory table",
                  "correct": false,
                  "reason": "Causes massive lock contention and deadlocks under thousands of concurrent checkouts."
                },
                {
                  "text": "Execute atomic inventory deduction in Redis via Lua scripts: `DECRBY` bounded at zero",
                  "correct": true,
                  "reason": "Superb! Decouples hot inventory deductions to in-memory atomic operations with zero overselling."
                }
              ]
            }
          ],
          "databaseArchitecture": {
            "overview": "In-memory inventory reservation layer fronting partitioned relational order databases.",
            "polyglotTiers": [
              {
                "dbName": "Redis Cluster",
                "dbType": "In-Memory Key-Value",
                "role": "Atomic inventory counters, temporary 10-minute cart holds, and rate limiting.",
                "shardingKey": "item_id",
                "consistency": "Strict Atomic In-Memory"
              },
              {
                "dbName": "PostgreSQL (Aurora Multi-AZ)",
                "dbType": "Sharded RDBMS",
                "role": "Confirmed purchase orders, customer billing accounts, and invoices.",
                "shardingKey": "order_id",
                "consistency": "Strict ACID"
              }
            ],
            "replicationStrategy": "Multi-AZ synchronous replication with automated failover and read replicas."
          },
          "databaseSchemas": [
            {
              "tableName": "flash_sale_inventory",
              "engine": "PostgreSQL / Redis Mirror",
              "description": "Core inventory table recording total, reserved, and sold quantities.",
              "columns": [
                {
                  "name": "item_id",
                  "type": "UUID",
                  "key": "PK",
                  "nullable": false,
                  "description": "Unique product item identifier."
                },
                {
                  "name": "total_stock",
                  "type": "INT",
                  "key": "NONE",
                  "nullable": false,
                  "description": "Total initial inventory allocated."
                },
                {
                  "name": "reserved_stock",
                  "type": "INT",
                  "key": "NONE",
                  "nullable": false,
                  "description": "Currently held in active 10-minute checkouts."
                },
                {
                  "name": "sold_stock",
                  "type": "INT",
                  "key": "NONE",
                  "nullable": false,
                  "description": "Confirmed settled purchases."
                }
              ],
              "ddl": "CREATE TABLE flash_sale_inventory (\n  item_id UUID PRIMARY KEY,\n  total_stock INT NOT NULL CHECK (total_stock >= 0),\n  reserved_stock INT NOT NULL DEFAULT 0,\n  sold_stock INT NOT NULL DEFAULT 0\n);"
            }
          ],
          "dataExchange": {
            "protocolMatrix": [
              {
                "layer": "Shopper ↔ Waiting Room",
                "protocol": "HTTPS / SSE",
                "format": "JSON Queue Ticket",
                "latencyTarget": "< 100ms",
                "rationale": "Real-time queue position updates without polling."
              },
              {
                "layer": "Checkout ↔ Redis",
                "protocol": "RESP over TCP",
                "format": "Atomic Lua Script",
                "latencyTarget": "< 2ms",
                "rationale": "Sub-millisecond atomic inventory deductions."
              }
            ],
            "apiContractSample": {
              "title": "Inventory Reservation API Contract",
              "type": "POST /v1/checkout/reserve",
              "snippet": "{\n  \"item_id\": \"ps5_pro_console\",\n  \"quantity\": 1,\n  \"hold_token\": \"hold_98a72b11\",\n  \"expires_in_seconds\": 600\n}"
            },
            "e2eRequestFlow": [
              {
                "stepNumber": 1,
                "actor": "Shopper",
                "action": "Enter Flash Sale Page",
                "component": "Virtual Waiting Room",
                "protocol": "HTTPS",
                "detail": "Edge waiting room admits user when backend capacity allows."
              },
              {
                "stepNumber": 2,
                "actor": "Checkout Service",
                "action": "Atomic Lua Inventory Reservation",
                "component": "Redis Cluster",
                "protocol": "TCP / Lua",
                "detail": "Atomically checks remaining stock and reserves 1 item for 10 minutes."
              },
              {
                "stepNumber": 3,
                "actor": "Payment Service",
                "action": "Authorize Payment Charge",
                "component": "Payment Gateway",
                "protocol": "HTTPS / mTLS",
                "detail": "Processes customer credit card charge within the 10-minute window."
              },
              {
                "stepNumber": 4,
                "actor": "Order Settler",
                "action": "Asynchronous SQL Order Commit",
                "component": "Kafka / PostgreSQL",
                "protocol": "SQL Commit",
                "detail": "Emits confirmed purchase event and persists order row to relational datastore."
              }
            ]
          }
        }
      ]
    },
    {
      "id": "module-9",
      "number": "9",
      "title": "Interactive Code Lab — Distributed Algorithms Sandbox",
      "subtitle": "In-browser executable implementations of fundamental distributed systems algorithms: LRU Cache, Rate Limiter, Consistent Hashing, Bloom Filter, and Merkle Tree",
      "isCodeLab": true,
      "algorithms": [
        {
          "id": "algo-lru",
          "name": "LRU Cache (Least Recently Used)",
          "badge": "O(1) Hash Table + Doubly Linked List",
          "category": "In-Memory Caching",
          "description": "Production-grade LRU Cache implementation using a Doubly-Linked List with Hash Map achieving O(1) Get and Put operations, tracking hit rates, and evicting stale keys automatically.",
          "code": "// ============================================================================\n// 1. تطبيق LRU Cache (Doubly Linked List + Hash Map) - سرعة O(1)\n// ============================================================================\n\nclass Node {\n  constructor(key, value) {\n    this.key = key;\n    this.value = value;\n    this.prev = null;\n    this.next = null;\n  }\n}\n\nclass LRUCache {\n  constructor(capacity) {\n    this.capacity = capacity;\n    this.cache = new Map(); // key -> Node\n    this.head = new Node(0, 0); // الأكثر استخداماً (MRU)\n    this.tail = new Node(0, 0); // الأقل استخداماً (LRU)\n    this.head.next = this.tail;\n    this.tail.prev = this.head;\n    \n    this.stats = { hits: 0, misses: 0, evictions: 0, total: 0 };\n  }\n\n  _remove(node) {\n    node.prev.next = node.next;\n    node.next.prev = node.prev;\n  }\n\n  _add(node) {\n    node.next = this.head.next;\n    node.next.prev = node;\n    this.head.next = node;\n    node.prev = this.head;\n  }\n\n  get(key) {\n    this.stats.total++;\n    if (this.cache.has(key)) {\n      this.stats.hits++;\n      const node = this.cache.get(key);\n      this._remove(node);\n      this._add(node); // نقله للمقدمة كأحدث عنصر تم الوصول إليه\n      console.log(\\"
        },
        {
          "id": "algo-rate-limiter",
          "name": "Token Bucket Rate Limiter",
          "badge": "Traffic Shaping & Throttling",
          "category": "API Gateway & Security",
          "description": "Standard rate-limiting algorithm that maintains a bucket of tokens refilled at a constant rate, accommodating traffic bursts up to capacity.",
          "code": "// ============================================================================\n// 3. محدد معدل الطلبات (Token Bucket Rate Limiter)\n// ============================================================================\n\nclass TokenBucketRateLimiter {\n  constructor(capacity, refillRatePerSecond) {\n    this.capacity = capacity;               // أقصى سعة من الرموز (Tokens)\n    this.refillRate = refillRatePerSecond; // عدد الرموز المضافة كل ثانية\n    this.tokens = capacity;                 // الرموز الحالية\n    this.lastRefillTime = Date.now();       // الطابع الزمني لآخر تجديد\n    \n    this.stats = { allowed: 0, rejected: 0 };\n  }\n\n  _refill() {\n    const now = Date.now();\n    const elapsedTimeInSeconds = (now - this.lastRefillTime) / 1000;\n    const tokensToAdd = elapsedTimeInSeconds * this.refillRate;\n    \n    this.tokens = Math.min(this.capacity, this.tokens + tokensToAdd);\n    this.lastRefillTime = now;\n  }\n\n  allowRequest(tokensNeeded = 1) {\n    this._refill();\n\n    if (this.tokens >= tokensNeeded) {\n      this.tokens -= tokensNeeded;\n      this.stats.allowed++;\n      return { allowed: true, remainingTokens: Math.floor(this.tokens) };\n    } else {\n      this.stats.rejected++;\n      const timeToWait = ((tokensNeeded - this.tokens) / this.refillRate).toFixed(2);\n      return { allowed: false, remainingTokens: 0, retryAfterSeconds: timeToWait };\n    }\n  }\n}\n\n// ------------------- تشغيل سيناريو المحاكاة -------------------\nconsole.log(\"🚀 محاكاة محدد معدل الطلبات (Token Bucket Rate Limiter):\");\nconsole.log(\"السعة القصوى: 5 رموز | معدل التجديد: 1 رمز كل ثانية (1 token/sec)\");\n\nconst limiter = new TokenBucketRateLimiter(5, 1);\n\n// اختبار هجمة متزامنة (Burst) بـ 8 طلبات فورية\nconsole.log(\"\\\\n⚡ إرسال هجمة فورية (Burst) مكونة من 8 طلبات:\");\nfor (let i = 1; i <= 8; i++) {\n  const result = limiter.allowRequest(1);\n  if (result.allowed) {\n    console.log(\\"
        },
        {
          "id": "algo-consistent-hashing",
          "name": "Consistent Hashing Ring",
          "badge": "2^32 Ring + Virtual Nodes",
          "category": "Distributed Routing",
          "description": "Maps keys and server nodes to a 32-bit circular hash ring with virtual nodes to prevent hot spots and minimize key redistribution during cluster re-balancing."
        },
        {
          "id": "algo-bloom-filter",
          "name": "Bloom Filter",
          "badge": "Probabilistic Set Membership",
          "category": "Big Data Structures",
          "description": "A space-efficient probabilistic data structure that tests whether an element is in a set. Returns false positive with bounded probability; never returns false negative.",
          "code": "// ============================================================================\n// 5. فلتر بلوم الاحتمالي (Bloom Filter)\n// ============================================================================\n\nclass BloomFilter {\n  constructor(size = 64, hashCount = 3) {\n    this.size = size;\n    this.hashCount = hashCount;\n    this.bitArray = new Array(size).fill(0);\n  }\n\n  _hashes(str) {\n    const hashes = [];\n    let h1 = 0, h2 = 0;\n    for (let i = 0; i < str.length; i++) {\n      h1 = (h1 * 31 + str.charCodeAt(i)) & 0xFFFFFFFF;\n      h2 = (h2 * 37 + str.charCodeAt(i)) & 0xFFFFFFFF;\n    }\n    for (let i = 0; i < this.hashCount; i++) {\n      const combined = Math.abs((h1 + i * h2) % this.size);\n      hashes.push(combined);\n    }\n    return hashes;\n  }\n\n  add(str) {\n    const indices = this._hashes(str);\n    indices.forEach(idx => this.bitArray[idx] = 1);\n    console.log(\\"
        },
        {
          "id": "algo-merkle-tree",
          "name": "Merkle Tree (Hash Tree)",
          "badge": "Data Integrity & Anti-Entropy",
          "category": "Decentralized Systems",
          "description": "A cryptographic binary tree where leaf nodes store data block hashes and parent nodes store the combined hash of their children, enabling O(log N) verification of distributed replica synchronization."
        }
      ]
    },
    {
      "id": "module-10",
      "number": "10",
      "title": "Interview Questions — Complete Systems Interview Bank",
      "subtitle": "Comprehensive interactive interview prep bank across all levels with Staff+ model answers, hints, and code",
      "isInterviewQuestions": true
    }
  ]
};
