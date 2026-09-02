<div align="center">

# 🏛️ System Design Mastery & Interactive Architecture Lab
### The Ultimate Comprehensive Handbook, Production Case Studies & Interactive Simulator for Distributed Systems & High-Scale Architecture (FAANG / Big Tech)

[![GitHub License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Architecture](https://img.shields.io/badge/Architecture-Distributed%20%26%20Microservices-emerald.svg)](#-table-of-contents)
[![Case Studies](https://img.shields.io/badge/Case%20Studies-31%20Real--World%20Systems-purple.svg)](#-real-world-case-studies-breakdown)
[![Interactive Code Lab](https://img.shields.io/badge/Code%20Lab-Interactive%20Algorithms-orange.svg)](#-interactive-code-lab--algorithm-playground)
[![Database Polyglot](https://img.shields.io/badge/Databases-Polyglot%20%26%20Schemas-cyan.svg)](#-polyglot-database-architecture--production-schemas)
[![Language Support](https://img.shields.io/badge/Languages-English%20%26%20Arabic-success.svg)](#)

<p align="center">
  <b>A zero-dependency, open-source interactive platform designed to help software engineers, solution architects, and engineering leaders master Distributed Systems, Polyglot Persistence, Concurrency, and Scalability — featuring 31 deep-dive production case studies, live architectural blueprints, runnable in-browser algorithms, and an end-to-end 45-minute FAANG/MAANG interview preparation roadmap.</b>
</p>

[🌐 Key Features](#-key-features--highlights) •
[📚 Curriculum & Modules](#-table-of-contents) •
[🏗️ 31 Real-World Case Studies](#-real-world-case-studies-breakdown) •
[⚡ Interactive Code Lab](#-interactive-code-lab--algorithm-playground) •
[🗄️ Polyglot Schemas](#-polyglot-database-architecture--production-schemas) •
[⏱️ 45-Min Interview Framework](#-the-45-minute-system-design-interview-framework) •
[🚀 Quick Start](#-quick-start)

---

</div>

## 📌 Topics & Keywords (GitHub SEO)

`system-design` • `distributed-systems` • `system-design-interview` • `system-design-cheat-sheet` • `software-architecture` • `scalability` • `microservices` • `faang-interview` • `high-availability` • `redis` • `apache-kafka` • `cassandra` • `consistent-hashing` • `database-sharding` • `rate-limiting` • `event-driven-architecture` • `load-balancing` • `cap-theorem` • `saga-pattern` • `vector-database` • `interview-preparation`

---

## 🌟 Key Features & Highlights

**System Design Mastery** goes far beyond static markdown cheat sheets. It is an ultra-fast, zero-dependency **Single Page Application (SPA)** crafted with modern HTML5, clean CSS3 (inspired by the **Next.js & Vercel Design System**), and pure vanilla JavaScript:

1. **🏛️ 10 Deep-Dive Modules:** Spanning foundational networking protocols (OSI, TCP/UDP, QUIC, HTTP/3), distributed algorithms, caching strategies, replication topologies, to petabyte-scale streaming pipelines.
2. **🧪 Interactive Architecture Studio:** 7 hands-on production challenges (*InstaPay, Uber, YouTube, WhatsApp, Netflix, TikTok, Amazon Flash Sale*) across 5 progressive stages — covering architectural trade-offs, capacity planning, database schemas, and failure isolation.
3. **💻 Live In-Browser Code Lab:** An interactive playground with real-time execution and microsecond benchmarks for core distributed algorithms:
   - **LRU Cache** ($O(1)$ Hash Map + Doubly Linked List)
   - **Consistent Hashing Ring** with Virtual Nodes & failover handling
   - **Token Bucket Rate Limiter** with dynamic burst capacity
   - **Bloom Filter** with multi-hash probabilistic checks
   - **Database Hash Sharding** with rebalancing simulation
   - **Leaky Bucket Traffic Shaper** for peak smoothing
4. **🗄️ Production-Grade Polyglot Database Schemas:** Complete Data Definition Language (DDL) schemas, indices (`B-Tree`, `LSM`, `Inverted`, `HNSW Vector`, `H3 Spatial`), partition keys, TTL rules, and atomic Lua scripts.
5. **⏱️ 45-Minute Interview Delivery Framework:** A structured time-management framework designed for Senior, Staff, and Principal engineering interviews at Google, Meta, Amazon, Apple, Netflix, Microsoft, Stripe, and Uber.
6. **🔍 Sub-Millisecond Instant Search:** Client-side instant full-text indexing across all 31 systems, patterns, concepts, and database tables.
7. **🌓 Dark & Light Modes + Dual-Language UI:** Seamless toggle between English and Arabic with persistent layout and progress tracking saved via `localStorage`.

---

## 📚 Table of Contents

```
├── 1. In a Hurry: Foundations & Interview Methodology
│   ├── 1.1 Introduction & Architectural Scope (Monolith to Multi-Region Active-Active)
│   ├── 1.2 System Preparation Roadmap (Junior -> Senior -> Staff / Principal)
│   ├── 1.3 The 45-Minute Interview Delivery Framework & Time Allocation
│   ├── 1.4 Key Technologies Decision Matrix (Redis, Kafka, Postgres, ScyllaDB, ES)
│   └── 🎯 Capstone: 45-Minute Global Payment Gateway Simulation (50k Peak QPS)
│
├── 2. Core Concepts & Distributed Fundamentals
│   ├── 2.1 Networking Essentials (OSI, TCP/UDP, HTTP/1.1 vs HTTP/2 vs HTTP/3 QUIC)
│   ├── 2.2 Layer 4 vs Layer 7 Load Balancing (Round Robin, Least Connections, IP Hash)
│   ├── 2.3 Caching Topologies & Eviction (Cache-Aside, Write-Through, Write-Back, LRU/LFU)
│   ├── 2.4 Consistent Hashing & Virtual Nodes (Hotspot Avoidance & Ring Rebalancing)
│   ├── 2.5 Data Layer Sharding & Partitioning (Range, Hash, Directory, Cross-Shard Joins)
│   ├── 2.6 Replication Topologies & Consensus (Single-Leader, Multi-Leader, Raft, Paxos)
│   └── 2.7 CAP & PACELC Theorems (ACID vs BASE, Eventual vs Linearizable Consistency)
│
├── 3. Question Breakdowns: 31 Real-World System Case Studies
│   ├── 3.1 Bitly / TinyURL (Distributed Hash System & Base62 Generation)
│   ├── 3.2 Pastebin (Blob Storage & Ephemeral Text Engine)
│   ├── 3.3 Twitter / X (Timeline Generation, Fan-out on Write vs Read, Hybrid Feed)
│   ├── 3.4 Instagram (Photo Storage Pipeline, Pre-signed URLs & Feed Cache)
│   ├── 3.5 YouTube / Netflix (Video Transcoding DAG, Chunking, HLS & CDN Architecture)
│   ├── 3.6 WhatsApp / Telegram (E2EE Messaging, WebSockets, Erlang Actor Mesh)
│   ├── 3.7 Uber / Careem (Proximity Dispatch, Geospatial Indexing H3, PostGIS)
│   ├── 3.8 Amazon Flash Sale (High-Concurrency Inventory Reservation & Zero Overselling)
│   ├── 3.9 Distributed Rate Limiter (Sliding Window Log, Token Bucket, Redis Cluster)
│   ├── 3.10 Distributed Web Crawler (Kafka Frontier, Robots.txt, Dedup Bloom Filter)
│   ├── 3.11 Stripe / Payment Gateway (Double-Entry Ledger, Idempotency Keys, Saga)
│   └── ... (+20 More Production Case Studies)
│
├── 4. Architectural Patterns & Concurrency Controls
│   ├── 4.1 Real-Time Communication Protocols (WebSockets vs SSE vs Long Polling)
│   ├── 4.2 Distributed Concurrency & Locking (Optimistic vs Pessimistic, Redis Redlock)
│   ├── 4.3 Distributed Transactions (Two-Phase Commit 2PC vs Saga Orchestration)
│   ├── 4.4 CQRS & Event Sourcing (Command Query Responsibility Segregation)
│   ├── 4.5 Write-Heavy vs Read-Heavy Scaling Patterns (LSM Trees, Caching, Read Replicas)
│   └── 4.6 Idempotency & Deduplication Patterns (Idempotency-Key Header, Unique Constraints)
│
├── 5. Key Technologies Deep-Dive
│   ├── 5.1 Redis: In-Memory Data Structures, Epoll I/O, Persistence & Cluster Slots
│   ├── 5.2 Apache Kafka: Commit Log, Partitions, Zero-Copy Transfer & Exactly-Once
│   ├── 5.3 Apache Cassandra & ScyllaDB: Masterless Architecture, LSM, Tunable Quorum
│   ├── 5.4 Amazon DynamoDB: Single-Table Design, Global Secondary Indexes, Global Tables
│   ├── 5.5 PostgreSQL & Citus: ACID Compliance, MVCC, B-Trees & Distributed Tables
│   └── 5.6 Elasticsearch & OpenSearch: Inverted Index, TF-IDF / BM25, Lucene Segments
│
├── 6. Advanced Architectural Topics
│   ├── 6.1 Proximity & Spatial Search (Geohash vs QuadTree vs Uber H3 vs Google S2)
│   ├── 6.2 Time-Series Data Pipelines (TSDB, Gorilla Compression, Downsampling)
│   ├── 6.3 Probabilistic Data Structures (Bloom Filter, HyperLogLog, Count-Min Sketch)
│   ├── 6.4 Vector Databases for AI & RAG (Embeddings, HNSW, IVF, Cosine Similarity)
│   └── 🎯 Capstone: 1,000,000 IoT Device Sensor Ingestion Pipeline
│
├── 7. In the Wild: Engineering Lessons from Tech Giants
│   ├── 7.1 Shopify: Black Friday Flash Sales with Redis Lua & Async Reconciliation
│   ├── 7.2 Discord: Migrating Trillions of Messages from Cassandra to ScyllaDB
│   ├── 7.3 Slack: Millions of Jobs with Fair-Queuing & Head-of-Line Prevention
│   ├── 7.4 Figma: Multiplayer Real-Time Sync with WebAssembly & Rust Coordinator
│   └── 7.5 Spotify: Event Processing & Discover Weekly ML Feature Store
│
├── 8. Interactive Architecture Studio
│   └── 7 Hands-on Design Simulations with Real-Time Architectural Scoring
│
├── 9. Interactive Code Lab & Algorithm Playground
│   └── 6 Runnable Distributed Algorithms with Visual Memory & Latency Inspector
│
└── 10. Comprehensive Interview Question Bank
    └── Tiered Questions (Junior, Mid, Senior, Staff+) with Rubrics & Answers
```

---

## 🏗️ Real-World Case Studies Breakdown

Here is a preview of the **31 production architectures** analyzed in depth within the platform:

| System | Primary Category | Core Engineering Bottleneck | Tech Stack & Persistence |
| :--- | :--- | :--- | :--- |
| **InstaPay** | Financial & Real-Time Settlement | Strict ACID, Zero Double-Spending & Sub-second Settlement | PostgreSQL, Redis Redlock, ClickHouse, ISO 20022, Saga |
| **Uber / Careem** | Geo-Spatial Dispatch & Telemetry | 100k msgs/sec location pings & < 500m driver-rider matching | Redis Geo / H3, PostGIS, ScyllaDB, Kafka, WebSockets |
| **YouTube** | High-Throughput Video Pipeline | Chunked DAG Transcoding, Adaptive Bitrate & CDN Caching | AWS S3, Vitess (MySQL), ClickHouse, HTTP/3 TUS, HLS |
| **WhatsApp** | End-to-End Encrypted Messaging | 100 Billion msgs/day, Offline queues & Sub-100ms delivery | Noise Protocol, Erlang Actor Mesh, Cassandra, Redis |
| **Netflix** | Video Streaming & Recommendations | 100k concurrent 4K streams & Zero re-buffering | Open Connect CDN (OCA), ScyllaDB, EVCache, gRPC |
| **TikTok** | Real-Time AI Recommendations | Sub-50ms Multi-Task Ranking & Smooth Feed Swiping | Qdrant Vector DB, Apache Flink, Kafka, Redis |
| **Amazon Flash Sale** | Ultra-High Concurrency E-Commerce | 100k items sold in 60s & Zero overselling guarantee | Virtual Queue, Redis Atomic Lua, PostgreSQL Outbox |
| **Twitter / X** | Social Graph & Real-Time Feed | Fan-out on Write (normal) vs Fan-out on Read (celebrities) | Redis Lists, Apache Kafka, Distributed Cache, MySQL |
| **Bitly / TinyURL** | Distributed URL Shortener | 100:1 Read/Write ratio & 10 Billion URLs with zero collision | Base62 Token Generator, Cassandra, Redis LRU |
| **Distributed Rate Limiter** | Traffic Shaping & DDoS Protection | Multi-Region Sliding Window Counter with minimal latency | Redis Cluster, Leaky Bucket, Envoy Token Bucket |
| **Distributed Web Crawler** | Peta-scale Distributed Graph Traversal | Politeness enforcement, Robots.txt & URL deduplication | Kafka Frontier, Cassandra, Bloom Filters, AWS S3 |
| **Stripe / Payment Gateway** | Idempotent Financial Engine | Exactly-Once processing, PCI-DSS & Double-Entry bookkeeping | Double-Entry Ledger, Idempotency-Key, Kafka, Postgres |
| **Robinhood / Stock Broker** | Low-Latency Financial Order Book | Deterministic order matching, audit trails & zero data loss | LMAX Disruptor, In-Memory Matching Engine, Raft, Postgres |
| **Airbnb** | Search & Dynamic Pricing Engine | Multi-attribute search, instant calendar availability locks | Elasticsearch, Redis distributed locks, Aurora MySQL |
| **Dropbox / Google Drive** | Distributed File Sync & Storage | Chunking, content deduplication & delta byte synchronization | Chunked Storage (S3), SQLite (client), MySQL metadata, Kafka |

---

## 🗄️ Polyglot Database Architecture & Production Schemas

Modern scalable systems never rely on a single database. The platform demonstrates how to orchestrate **Polyglot Persistence** across distributed tiers:

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

### Production Schema Examples Included:
- **`double_entry_ledger` (InstaPay/Stripe):** Immutable financial journal ensuring debits equal credits with zero arithmetic rounding leaks.
- **`redis_driver_spatial_h3` (Uber):** In-memory hexagonal spatial indexing enabling sub-2ms k-Nearest Neighbors (k-NN) queries.
- **`video_renditions` (YouTube/Netflix):** Multi-bitrate manifest metadata (1080p, 4K, 60fps) with adaptive HLS `.m3u8` playlists.
- **`user_realtime_features` & `video_embeddings` (TikTok):** In-memory feature vectors combined with 512-dimension HNSW indices for real-time semantic ranking.
- **`redis_flash_stock_lua` (Flash Sale):** Atomic Lua script that performs conditional stock deduction (`DECRBY`) and generates an ephemeral 10-minute checkout reservation token.

---

## ⚡ Interactive Code Lab & Algorithm Playground

Test, modify, and run foundational distributed algorithms directly in your browser with real-time memory and latency telemetry:

```javascript
// Consistent Hashing Ring with Virtual Nodes (O(log N) Lookup)
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
    return this.ring.get(this.sortedKeys[0]); // Wrap-around ring logic
  }
}
```

### Implemented Algorithms:
1. **LRU Cache (Least Recently Used):** $O(1)$ operations via Doubly Linked List + Hash Map with real-time hit/miss metrics.
2. **Consistent Hashing Ring:** Minimizes key movement during node addition/removal using configurable virtual nodes ($VN$).
3. **Token Bucket Rate Limiter:** Continuous token refill math for burst handling and API endpoint protection.
4. **Bloom Filter:** Multi-hash bit array providing $O(k)$ membership checks with zero false negatives.
5. **Database Hash Sharding:** Key routing across multiple shards with balance analysis and hotspot detection.
6. **Leaky Bucket Traffic Shaper:** Queued rate stabilization preventing downstream service saturation.

---

## ⏱️ The 45-Minute System Design Interview Framework

A structured, battle-tested framework for managing your time during Senior/Staff FAANG interviews:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       45-Minute Interview Timeline                          │
├───────────────┬───────────────────────────────┬──────────────┬──────────────┤
│  00:00-08:00  │          08:00-22:00          │ 22:00-40:00  │ 40:00-45:00  │
│  Phase 1:     │          Phase 2:             │ Phase 3:     │ Phase 4:     │
│  Scope & Math │     High-Level Design (HLD)   │  Deep Dive   │ Bottlenecks  │
└───────────────┴───────────────────────────────┴──────────────┴──────────────┘
```

| Phase | Time | Primary Focus & Deliverables |
| :--- | :--- | :--- |
| **1. Clarify & Scope** | 5 – 8 mins | Identify Functional & Non-Functional requirements (Availability vs Consistency, P99 Latency), perform Back-of-the-envelope calculations (QPS, Storage, Bandwidth). |
| **2. High-Level Design** | 10 – 15 mins | Diagram major components: Client, CDN/WAF, Load Balancers, API Gateway, Microservices, Primary/Replica DBs, Caches, and Message Queues. Define read/write flows. |
| **3. Component Deep Dive** | 15 – 20 mins | Drill down into 2-3 critical bottlenecks: Sharding keys, concurrency control, idempotency, data deduplication, distributed transactions (Saga), and cache invalidation. |
| **4. Bottlenecks & Wrap-Up** | 3 – 5 mins | Address Single Points of Failure (SPOF), telemetry & alerting (SLIs/SLOs), multi-region disaster recovery, cost optimization, and trade-off summary. |

---

## 🚀 Quick Start

The platform requires **zero external dependencies**, no `npm install`, and no build tools. All you need is a modern browser (*Chrome, Firefox, Safari, Edge*).

### Option 1: Direct Local Launch

```bash
# Clone the repository
git clone https://github.com/Amr-khalid/SystemDesign.git

# Navigate into the project folder
cd SystemDesign

# Open directly in your browser:
# On Windows:
start index.html

# On macOS:
open index.html

# On Linux:
xdg-open index.html
```

### Option 2: Lightweight Local Web Server

```bash
# Using Python 3:
python -m http.server 8080

# Or using Node.js:
npx serve .
```

Then navigate to: `http://localhost:8080`

---

## 📁 Repository Structure

```
.
├── index.html          # Semantic HTML5 application shell & navigation structure
├── styles.css          # Vercel-inspired CSS3 design system (Dark & Light themes, Responsive)
├── app.js              # Core application engine, client routing, search, & algorithm runner
├── content.js          # Knowledge base, 31 system case studies, polyglot schemas & interview guides
├── diagrams.js         # Interactive SVG vector architecture rendering engine
├── system_design.md    # Comprehensive theoretical reference guide
├── system_design2.md   # Advanced production architectures handbook
└── README.md           # Documentation & project overview (You are here)
```

---

## 🎯 Target Audience

- **Senior & Staff Software Engineers:** Transitioning from feature engineering to designing robust, highly scalable distributed platforms.
- **Systems & Solutions Architects:** Architecting mission-critical platforms requiring 99.999% availability (Five Nines) and multi-region disaster recovery.
- **Tech Interview Candidates:** Preparing for System Design interviews at top-tier companies (*Google, Meta, Amazon, Apple, Netflix, Microsoft, Stripe, Uber*).
- **Engineering Managers & Leads:** Establishing architectural standards, capacity planning guidelines, and engineering evaluation rubrics.

---

## 🤝 Contributing

Contributions are warmly welcomed! Whether you would like to add a new case study, optimize an algorithm in the Code Lab, or improve the documentation:

1. **Fork** the repository.
2. Create your feature branch (`git checkout -b feature/NewSystemArchitecture`).
3. Commit your changes (`git commit -m 'feat: Add Distributed Consensus Raft breakdown'`).
4. Push to the branch (`git push origin feature/NewSystemArchitecture`).
5. Open a **Pull Request** with a detailed explanation of your changes.

---

## 👤 Author & Acknowledgments

Curated, designed, and developed with passion by **[Amr Khalid](https://github.com/Amr-khalid)**.

- **GitHub:** [@Amr-khalid](https://github.com/Amr-khalid)
- **Repository:** [https://github.com/Amr-khalid/SystemDesign](https://github.com/Amr-khalid/SystemDesign)

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

<div align="center">

⭐ **If you find this repository helpful for your engineering journey or interview preparation, please star it on GitHub!** ⭐

</div>
