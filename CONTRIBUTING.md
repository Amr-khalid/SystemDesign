# Contribution Guidelines | دليل المساهمة في المشروع

Welcome to the **System Design Mastery & Interactive Architecture Lab** repository. We welcome contributions from engineers, system architects, and technical writers to expand our reference architectures, interactive algorithm simulations, and polyglot database schemas.

مرحباً بك في مستودع **System Design Mastery**. نرحب بكافة المساهمات من مهندسي البرمجيات ومعماريي النظم لتطوير دراسات الحالة المعمارية، ومحاكاة الخوارزميات التفاعلية، وتوثيق قواعد البيانات الموزعة.

---

## 📋 Table of Contents | جدول المحتويات
1. [Core Principles | المبادئ الأساسية](#core-principles--المبادئ-الأساسية)
2. [Contribution Areas | مسارات المساهمة](#contribution-areas--مسارات-المساهمة)
3. [Git & Branching Workflow | مسار عمل Git والفروع](#git--branching-workflow--مسار-عمل-git-والفروع)
4. [Commit Message Standards | معايير رسائل الـ Commit](#commit-message-standards--معايير-رسائل-الـ-commit)
5. [Pull Request Process | خطوات تقديم الـ Pull Request](#pull-request-process--خطوات-تقديم-الـ-pull-request)
6. [Code Style & Conventions | المعايير البرمجية والتصميم](#code-style--conventions--المعايير-البرمجية-والتصميم)

---

## Core Principles | المبادئ الأساسية

- **Zero Bloat**: This project is built using native Vanilla HTML5, CSS3, and JavaScript without heavy external frameworks. Keep implementations fast, clean, and dependency-free.
- **Production Realism**: System designs must reflect real-world engineering constraints (SLA/SLO, network partitions, failovers, backpressure, idempotency).
- **Clarity & Bilingual Depth**: Architecture explanations should be precise, technical, and accessible in both Arabic and English.

---

## Contribution Areas | مسارات المساهمة

We actively welcome contributions in the following domains:

1. **System Breakdowns (Case Studies)**: Adding or refining production architectures (e.g., real-time bidding, distributed caching, payment settlement).
2. **Interactive Code Lab**: Adding or optimizing distributed algorithms (e.g., Raft consensus simulation, Two-Phase Commit visualizer, Token Bucket adjustments).
3. **Database Schemas & DDL**: Adding realistic SQL/NoSQL schema designs with indexing (`B-Tree`, `LSM`, `Inverted`, `HNSW Vector`).
4. **Documentation & Fixes**: Correcting technical typos, improving diagrams, or refining architectural terminology.

---

## Git & Branching Workflow | مسار عمل Git والفروع

Follow standard Git branching practices:

1. Create a descriptive branch from `main`:
   ```bash
   git checkout -b <type>/<short-description>
   ```
   **Branch Naming Examples:**
   - `feat/add-raft-simulation`
   - `docs/clarify-kafka-partitioning`
   - `fix/lru-cache-eviction-edge-case`
   - `ci/add-lint-workflow`

2. Make focused, atomic commits that address a single logical change.

---

## Commit Message Standards | معايير رسائل الـ Commit

We adhere to the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<optional scope>): <short description in present tense>

[optional longer body explaining context and rationale]

[optional footer(s) / trailers such as Co-authored-by:]
```

### Supported Types:
- `feat`: A new feature, module, or case study.
- `fix`: A bug fix in script logic or styles.
- `docs`: Documentation updates, markdown guides, or architecture notes.
- `style`: Formatting, CSS adjustments, UI polish without logic change.
- `refactor`: Code refactoring without changing observable behavior.
- `test`: Adding or updating validation tests.
- `ci`: Changes to CI/CD workflows and automated scripts.
- `chore`: Maintenance tasks, meta files, or repository config.

**Commit Example:**
```bash
git commit -m "docs(cap): add detailed PACELC latency vs consistency trade-off table

Provide concrete production examples for DynamoDB and Cassandra under network partition."
```

---

## Pull Request Process | خطوات تقديم الـ Pull Request

1. **Keep PRs Focused**: A pull request should accomplish one clear objective. Avoid bundling unrelated fixes into a single PR.
2. **Self-Review**: Verify your changes locally in the browser (`index.html`) across both Dark and Light themes.
3. **PR Title & Description**:
   - Use a clear title adhering to Conventional Commits.
   - Describe what changed, why the change is necessary, and how to verify it.
4. **Clean History**: Rebase or keep commits clean and readable before requesting review.

---

## Code Style & Conventions | المعايير البرمجية والتصميم

- **HTML**: Semantic elements (`<header>`, `<main>`, `<aside>`, `<section>`, `<article>`). Ensure accessibility with proper `aria-label` attributes.
- **CSS**: Use design system variables defined in `styles.css`. Maintain high contrast and responsive breakpoints (mobile, tablet, desktop).
- **JavaScript**: Modern ES6+ syntax, strict equality (`===`), defensive error handling, and documented function signatures.

Thank you for helping build and improve the **System Design Mastery** platform!
