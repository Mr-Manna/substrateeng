# Platform Engineering — Service Page Documentation

**File:** `src/pages/platform.astro`
**Route:** `/platform`
**Build:** 22 pages, 3.32s (verified clean build)

---

## Page Structure (12 Sections)

| # | Section | Background | Grid |
|---|---------|------------|------|
| 1 | Hero | Paper (white + accent gradient) | Left-aligned text + 3 stat columns |
| 2 | What is Platform Engineering | Graphite (dark) | 2x2 grid (4 content blocks) |
| 3 | Business Challenges | Paper | 3-col card grid (9 challenges) |
| 4 | How Substrate Helps | Graphite | 4-col card grid (12 approach items) |
| 5 | Platform Engineering Services | Paper | 3-col card grid (17 service cards) |
| 6 | Technologies | Graphite | 4-col tag groups (9 categories, ~60 tags) |
| 7 | Benefits | Paper | 2-col grid (4 benefit groups of 4) |
| 8 | Engagement Model | Graphite | 4-col timeline cards (7 phases) |
| 9 | Why Choose Substrate | Paper | 3-col card grid (9 reasons) |
| 10 | Industries | Graphite | 3-col card grid (9 industries) |
| 11 | FAQ | Paper | Single-column accordion (16 questions) |
| 12 | Call to Action | Graphite | Full-width centered |

---

## Design System Reference

All tokens are defined in `src/styles/global.css` and consumed via Tailwind v4 `@theme` inline.

### Background tones

| Token | Usage |
|-------|-------|
| `bg-paper` | Light section backgrounds |
| `bg-graphite` | Dark section backgrounds |
| `bg-graphite-2` | Dark card backgrounds |
| `bg-accent` | Primary actions, CTAs |
| `bg-accent-soft` | Icon containers, subtle highlights |
| `bg-paper-2` | Secondary surfaces |

### Card pattern

```astro
<div class="rounded-lg border border-line-2 bg-paper p-6" data-reveal>
  <div class="flex items-center gap-3 mb-3">
    <span class="flex h-8 w-8 items-center justify-center rounded-full bg-accent-soft text-sm font-semibold text-accent">01</span>
    <h3 class="font-display font-semibold text-ink">Title</h3>
  </div>
  <p class="text-sm text-ink-2 leading-relaxed">Body text.</p>
</div>
```

### Dark card pattern

```astro
<div class="rounded-lg border border-graphite-line bg-graphite-2 p-6" data-reveal>
  <span class="block font-mono text-xs text-accent-bright mb-3">01</span>
  <h3 class="font-display font-semibold text-graphite-fg mb-2">Title</h3>
  <p class="text-sm text-graphite-fg-2 leading-relaxed">Body text.</p>
</div>
```

### Section heading

```astro
<SectionHeading
  id="section-id"
  index="02"
  label="Section Name"
  title="Display heading text."
  lede="Supporting paragraph."
  tone="paper" // or "graphite"
/>
```

### Animations

- `data-reveal` — fade + slide-up on scroll entry
- `data-reveal-group` — stagger children reveals
- All respect `prefers-reduced-motion`
- Handled by `src/scripts/motion.ts` (GSAP + ScrollTrigger + Lenis)

### Typography

| Class | Font | Use |
|-------|------|-----|
| `.display` | Archivo Variable (118% width, tight leading) | Headlines |
| `.kicker` | IBM Plex Mono, uppercase, tracked | Section index labels |
| `font-display` | Archivo Variable | Card headings |
| `font-sans` | Instrument Sans Variable | Body text |
| `font-mono` | IBM Plex Mono | Metadata, labels, code |

---

## SEO

| Field | Value |
|---|---|
| **Title Tag** | `Platform Engineering Services | Substrate` |
| **Meta Description** | `Substrate helps enterprises build internal developer platforms with golden paths, self-service infrastructure, and paved roads to production. Accelerate delivery, reduce complexity, and scale engineering.` |
| **Canonical URL** | `https://substrateeng.com/platform` |
| **Slug** | `/platform` |
| **H1** | `Ship software faster, operate with less friction.` |
| **Open Graph Title** | `Platform Engineering Services | Substrate` |
| **Open Graph Description** | `Substrate helps enterprises build internal developer platforms with golden paths, self-service infrastructure, and paved roads to production.` |

### H2 Hierarchy

1. `What is Platform Engineering` — An internal product that makes your engineering organization more efficient.
2. `Business Challenges` — The operational debt of unmanaged complexity.
3. `How Substrate Helps` — A systematic approach to platform engineering.
4. `Our Services` — End-to-end platform engineering capabilities.
5. `Technologies` — Tools and platforms we work with.
6. `Benefits` — What platform engineering delivers.
7. `Engagement Model` — How we work with your team.
8. `Why Choose Substrate` — Built by engineers, for engineering organizations.
9. `Industries` — Platform engineering across sectors.
10. `Frequently Asked Questions` — Common questions about platform engineering.
11. `Ready to build a platform that scales with your engineering organization?` — CTA

### Schema.org Recommendations

- **Service schema** — Add to `Base.astro` structured data block: `serviceType: "Platform Engineering"`
- **FAQPage schema** — Add JSON-LD for the 16 FAQ items to enable rich results
- **BreadcrumbList schema** — Add for the breadcrumb navigation

### Suggested Internal Links

| Source | Target |
|--------|--------|
| `/platform` → | `/contact` (all CTAs) |
| `/platform` → | `/capabilities/enterprise-architecture` |
| `/platform` → | `/capabilities/cloud-architecture` |
| `/platform` → | `/#capabilities` |
| `/platform` → | `/about` |

### Suggested External References

- [CNCF Platform Engineering Working Group](https://tag-app-delivery.cncf.io/wgs/platform-engineering/)
- [Team Topologies](https://teamtopologies.com/)
- [State of Platform Engineering Report — Puppet](https://www.puppet.com/resources/state-of-platform-engineering)
- [Internal Developer Platform — Humanitec](https://internaldeveloperplatform.org/)
- [DORA Metrics — Google Cloud](https://cloud.google.com/devops)

---

## Content Inventory

| Element | Count |
|---------|-------|
| Total words | ~3,200 |
| Sections | 12 |
| Service cards | 17 |
| FAQ questions | 16 |
| Business challenges | 9 |
| Approach items | 12 |
| Why-choose reasons | 9 |
| Industries | 9 |
| Technology categories | 9 |
| Technology tags | ~60 |
| Benefit items | 16 (4 groups × 4) |
| Engagement phases | 7 |
| Hero statistics | 3 |
| CTAs | 2 (button + email) |

---

## Conversion Elements

| Element | Placement | Status |
|---------|-----------|--------|
| **Statistics** | Hero section (3 counters) | Implemented |
| **Consultation CTA** | Section 12 + sticky sidebar | Implemented |
| **Trust badges** | Below hero stats (SOC 2, ISO 27001) | Not yet — add if certifications exist |
| **Client logos** | Between sections 1-2 or 11-12 | Not yet — add when available |
| **Testimonials** | Between sections 6-7 or 9-10 | Not yet — add quote cards |
| **Architecture diagram** | Section 4 | Not yet — SVG illustration |
| **Platform maturity model** | Section 3 or downloadable | Not yet — 5-level scale graphic |
| **Timeline** | Section 8 | Not yet — horizontal SVG |
| **Comparison table** | Between sections 6-7 | Not yet — with/without platform eng |
| **ROI calculator** | CTA adjacent | Not yet — interactive tool |
| **Process illustrations** | Section 5 per service | Not yet — service-specific icons |

---

## Design Recommendations

### Illustrations by Section

| Section | Illustration Concept | Style |
|---------|---------------------|-------|
| Hero | Abstract layered architecture (isometric cubes + connection lines) | Geometric, blue accent |
| What is Platform Engineering | Platform layer stack (app teams / platform / infrastructure) | 3-tier horizontal layers |
| Business Challenges | Tangled wireframe / messy connection graph | Monoline, ink color |
| How Substrate Helps | Conveyor belt / assembly line process flow | Sequential, directional |
| Services | Ecosystem diagram with interconnected nodes | Network graph |
| Technologies | Constellation / dot graph | Connected dots |
| Benefits | Growth chart / upward compound arrows | Ascending motion |
| Engagement Model | Horizontal timeline with 7 milestone nodes | Linear, numbered |
| Why Choose Substrate | Shield / badge emblems | Icon per reason |
| Industries | World map with sector pins | Geographic overlay |
| FAQ | Question mark / conversation bubbles | Minimal icons |
| CTA | Gradient glow / radial accent burst | Abstract glow |

### Responsive Breakpoints

| Breakpoint | Behavior |
|------------|----------|
| `<768px` | All grids → single column, cards stack, buttons full-width |
| `768-1024px` | 2-col grids, tech tags wrap 3 per row |
| `>1024px` | Full layout: 3-4 col grids |

### Animation Notes

- All GSAP scroll-triggered via `data-reveal` / `data-reveal-group`
- Hero: staggered reveal (kicker → h1 → subheadline → CTAs → stats)
- Stats: count-up animation on scroll entry
- FAQ: CSS transition on `max-height` for smooth open/close
- Service cards: scale + fade on scroll entry
- Engagement phases: sequential reveal with connecting line draw

---

## Copy Guidelines

### Tone
- Premium, corporate, enterprise
- Clear, technical, confident, honest
- No marketing hype, buzzwords, or clichés
- Plain English for technical concepts
- Business outcomes and engineering excellence focus

### Prohibited Phrases
- ~~"Unlock your potential"~~
- ~~"Next-generation"~~
- ~~"Game-changing"~~
- ~~"Revolutionary"~~
- ~~Any exaggerated claims~~

### Voice
Think Microsoft, AWS, Google Cloud, Thoughtworks, HashiCorp, Red Hat — authoritative but approachable, technical but accessible, confident without arrogance.

---

## Maintenance Notes

- Adding new services: add a card to the `Our Services` section grid (follow existing `.rounded-lg.border.border-line-2.bg-paper.p-7` pattern)
- Adding new FAQs: add a `<details>` element to the FAQ section accordion
- Adding new technologies: add a category `div` and populate with tag `span`s
- Updating stats: modify the three stat cards in the Hero section
- Adding testimonials: insert a new grid section between current sections 6-7 or 9-10
