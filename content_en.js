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
    }
  ]
};
