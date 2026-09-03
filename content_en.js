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
        }
      ]
    }
  ]
};
