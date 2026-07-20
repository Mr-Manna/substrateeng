# Cloud Native — Service Page Documentation

**File:** `src/pages/cloud-native.astro`
**Route:** `/cloud-native`
**Navigation:** Updated `src/data/site.ts` (Cloud Native sub-item now links to `/cloud-native`)
**Build:** 23 pages, 2.86s (verified clean build)

---

## Page Structure (12 Sections)

| # | Section | Background | Grid |
|---|---------|------------|------|
| 1 | Hero | Paper (white + accent gradient) | Left-aligned text + 3 stat columns |
| 2 | What is Cloud Native? | Graphite (dark) | 2x2 grid (4 content blocks) |
| 3 | Business Challenges | Paper | 3-col card grid (9 challenges) |
| 4 | How Substrate Helps | Graphite | 4-col card grid (12 approach items) |
| 5 | Cloud Native Services | Paper | 3-col card grid (17 service cards) |
| 6 | Technologies | Graphite | 4-col tag groups (9 categories, ~65 tags) |
| 7 | Benefits | Paper | 2-col grid (4 benefit groups of 4) |
| 8 | Engagement Model | Graphite | 4-col timeline cards (7 phases) |
| 9 | Why Choose Substrate | Paper | 3-col card grid (9 reasons) |
| 10 | Industries | Graphite | 3-col card grid (9 industries) |
| 11 | FAQ | Paper | Single-column accordion (16 questions) |
| 12 | Call to Action | Graphite | Full-width centered |

---

## Design System Reference

All tokens, card patterns, dark card patterns, section heading usage, animations, and typography follow the exact same conventions as the Platform Engineering service page documented in `docs/service-page-platform-engineering.md`.

Key differences in content:
- Hero stats: 2.5x faster time-to-market, 80% infrastructure cost reduction, 90% faster recovery
- Approach items: Container Orchestration and Serverless & Event-Driven replace Golden Paths and Internal Developer Platforms (keeping the total at 12)
- Technology tags include Knative, Tempo, Falco, Jenkins X (additional cloud-native-specific tools)

---

## SEO

| Field | Value |
|---|---|
| **Title Tag** | `Cloud Native Services | Substrate` |
| **Meta Description** | `Substrate helps enterprises adopt cloud-native architectures with containers, Kubernetes, serverless, and microservices. Accelerate delivery, reduce costs, and build for scale.` |
| **Canonical URL** | `https://substrateeng.com/cloud-native` |
| **Slug** | `/cloud-native` |
| **H1** | `Build cloud-native systems that scale with your business.` |
| **Open Graph Title** | `Cloud Native Services | Substrate` |
| **Open Graph Description** | `Substrate helps enterprises adopt cloud-native architectures with containers, Kubernetes, serverless, and microservices. Accelerate delivery, reduce costs, and build for scale.` |

### H2 Hierarchy

1. `What is Cloud Native?` — An architectural approach built for scale, speed, and resilience.
2. `Business Challenges` — The cost of operating without cloud-native practices.
3. `How Substrate Helps` — A disciplined approach to cloud-native adoption.
4. `Our Services` — End-to-end cloud-native capabilities.
5. `Technologies` — Tools and platforms we work with.
6. `Benefits` — What cloud native delivers.
7. `Engagement Model` — How we work with your team.
8. `Why Choose Substrate` — Built by engineers, for engineering organizations.
9. `Industries` — Cloud-native across sectors.
10. `Frequently Asked Questions` — Common questions about cloud native.
11. `Ready to build a cloud-native platform that scales with your organization?` — CTA

### Schema.org Recommendations

- **Service schema** — Add `serviceType: "Cloud Native"` to `Base.astro` structured data
- **FAQPage schema** — Add JSON-LD for the 16 FAQ items
- **BreadcrumbList schema** — Add for breadcrumb navigation

### Suggested Internal Links

| Source | Target |
|--------|--------|
| `/cloud-native` → | `/contact` (all CTAs) |
| `/cloud-native` → | `/platform` |
| `/cloud-native` → | `/capabilities/cloud-architecture` |
| `/cloud-native` → | `/#capabilities` |
| `/cloud-native` → | `/about` |

### Suggested External References

- [Cloud Native Computing Foundation](https://www.cncf.io/)
- [CNCF Cloud Native Landscape](https://landscape.cncf.io/)
- [Kubernetes Documentation](https://kubernetes.io/docs/)
- [OpenTelemetry](https://opentelemetry.io/)
- [DORA Metrics — Google Cloud](https://cloud.google.com/devops)
- [State of Cloud Native Development — CNCF Survey](https://www.cncf.io/reports/)

---

## Content Inventory

| Element | Count |
|---------|-------|
| Total words | ~3,000 |
| Sections | 12 |
| Service cards | 17 |
| FAQ questions | 16 |
| Business challenges | 9 |
| Approach items | 12 |
| Why-choose reasons | 9 |
| Industries | 9 |
| Technology categories | 9 |
| Technology tags | ~65 |
| Benefit items | 16 (4 groups × 4) |
| Engagement phases | 7 |
| Hero statistics | 3 |
| CTAs | 2 (button + email) |

---

## Conversion Elements

Same recommendations as Platform Engineering page:
- Statistics (Hero)
- Consultation CTA (Section 12)
- Trust badges, client logos, testimonials (add when available)
- Architecture diagram (Section 4)
- Cloud-native maturity model (Section 3)
- ROI calculator (CTA adjacent)
- Process illustrations (Section 5)

---

## Design Recommendations

Same responsive breakpoints and animation notes as Platform Engineering. Specific illustration concepts for Cloud Native:

| Section | Illustration Concept |
|---------|---------------------|
| Hero | Container ship / shipping container stacks (brand-adjacent metaphor) |
| What is Cloud Native | Layered cloud architecture with CNCF landscape elements |
| Technologies | Constellation of CNCF project logos as connected nodes |

---

## Copy Guidelines

Same tone and voice as Platform Engineering page. Key distinction:
- "Cloud native" is used as a compound adjective (always hyphenated before a noun, not after)
- Educational tone focused on defining the term (still relatively new for enterprise decision makers)
- Emphasis on practicality: cloud native is an approach, not a religion

---

## Maintenance Notes

Same as Platform Engineering page. Technology tags include additional cloud-native-specific tools (Knative, Falco, Tempo, Jenkins X) — maintain these when updating the technology section.
