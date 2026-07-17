# SRE & Operations — SEO, UX & Conversion Documentation

---

## SEO Metadata

| Field | Value |
|-------|-------|
| **SEO Title** | Site Reliability Engineering Services | Substrate |
| **Meta Description** | Substrate helps enterprises build reliable, observable, and automated platforms with SRE, platform engineering, and cloud operations. Reduce downtime, accelerate deployments, and operate at scale. |
| **URL Slug** | `/sre-operations` |
| **Canonical URL** | `https://substrate.xyz/sre-operations` |
| **H1** | Reliable systems. Automated operations. Engineering-led resilience. |
| **Open Graph Title** | Site Reliability Engineering Services | Substrate |
| **Open Graph Description** | Enterprise SRE services to reduce downtime, eliminate toil, and build resilient cloud-native platforms. |

---

## Heading Hierarchy

```
H1: Reliable systems. Automated operations. Engineering-led resilience.
├── H2: What is Site Reliability Engineering?
│   ├── H3: Definition and core principles
│   ├── H3: SRE, DevOps, Platform Engineering, and IT Operations
│   ├── H3: Why modern businesses adopt SRE
│   └── H3: Common misconceptions
├── H2: Business Challenges (14 challenge cards)
├── H2: Our Approach
│   └── H3: 11-phase methodology (Reliability Assessment through Continuous Improvement)
├── H2: Our Services (24 service cards)
├── H2: Core Capabilities (16 capability cards)
├── H2: Observability & Monitoring
│   ├── H3: The three pillars of observability
│   ├── H3: Advanced observability practices
│   └── H3: Health Checks, Service Dependency Mapping, Event Correlation
├── H2: Reliability Metrics (14 metrics)
├── H2: Technologies (11 categories)
├── H2: Benefits (4 stakeholder groups)
├── H2: Engagement Model (10 phases)
├── H2: Why Choose Substrate (10 reasons)
├── H2: Industries (11 industries)
├── H2: Frequently Asked Questions (20 questions)
└── H2: Get Started (CTA)
```

---

## Schema.org Recommendations

Add the following `JSON-LD` schemas to the page `<head>`:

### 1. Service Schema

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Site Reliability Engineering Services",
  "provider": {
    "@type": "Organization",
    "name": "Substrate"
  },
  "description": "Enterprise SRE services including reliability assessments, SLO implementation, incident management, and managed SRE operations.",
  "serviceType": "Site Reliability Engineering",
  "areaServed": "Worldwide",
  "audience": {
    "@type": "BusinessAudience",
    "audienceType": "Enterprise Engineering Leaders"
  }
}
```

### 2. FAQ Schema (for each question-answer pair)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "How long does it take to adopt SRE?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Most organizations see meaningful improvements within three months of implementing SLOs and structured incident response. Full cultural transformation typically takes six to twelve months."
    }
  }]
}
```

### 3. BreadcrumbList Schema

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://substrate.xyz/" },
    { "@type": "ListItem", "position": 2, "name": "Capabilities", "item": "https://substrate.xyz/#capabilities" },
    { "@type": "ListItem", "position": 3, "name": "SRE & Operations", "item": "https://substrate.xyz/sre-operations" }
  ]
}
```

---

## Suggested Internal Links

| Source Anchor | Target |
|---|---|
| "What is SRE" → Platform Engineering reference | `/platform-engineering` |
| "Infrastructure as Code" section | `/cloud-native#infrastructure-as-code` |
| "Observability" section | `/platform-engineering#observability-platforms` |
| "Incident Management" CTA | `/contact` |
| "Schedule an SRE assessment" (Hero + CTA) | `/contact` |
| "Return to top" (CTA) | `#what-is` |
| Breadcrumb "Capabilities" | `/#capabilities` |

---

## Suggested External Authority References

| Topic | Reference |
|---|---|
| SRE origins | Google's Site Reliability Engineering book (sre.google) |
| SLO methodology | Google's SRE Workbook |
| DORA metrics | Google Cloud DevOps Research and Assessment (dora.dev) |
| Incident management | PagerDuty Incident Response Handbook |
| Chaos engineering | Principles of Chaos Engineering (principlesofchaos.org) |
| Observability | OpenTelemetry documentation (opentelemetry.io) |

---

## UI/UX Recommendations

### Layout per Section

| Section | Recommended Layout |
|---|---|
| Hero | Split: left text (70%) + right stat cards (30%) or full-width with stats below |
| What is SRE | 2-column grid alternating between text blocks |
| Challenges | 3-column card grid, numbered |
| Approach | 3-column card grid with phase numbers |
| Services | 3-column card grid with bullet lists |
| Capabilities | 4-column card grid |
| Observability | 2-column layout + 3-column bottom row |
| Metrics | 3-column card grid |
| Technologies | 4-column tag groups |
| Benefits | 2-column grouped lists |
| Engagement | 3-column phase cards |
| Why Choose | 2-column feature cards with numbered badges |
| Industries | 3-column industry cards |
| FAQ | 2-column Q&A cards |
| CTA | Full-width centered on gradient background |

### Visual Hierarchy

- **Section headings**: Large display type (3.4rem), light weight, max-width constrained
- **Section lede**: 18px, secondary color, max-width 2xl
- **Card titles**: 15-18px, semibold, display font
- **Card body**: 14px, secondary text color
- **Index/label**: Monospace 12px uppercase, accent color

### Illustration Ideas

- **Hero**: Abstract SRE "control room" diagram showing interconnected services with reliability rings
- **The three pillars**: Three overlapping circles (M, L, T) with data flow arrows
- **Engagement model**: Horizontal timeline/stepper showing 10 phases as connected nodes
- **Metrics**: Gauge or dashboard widget mockups showing uptime %, error budget remaining, MTTR trend
- **Approach**: Circular or staggered flow diagram showing the iterative SRE cycle

### Icon Suggestions

| Section | Icon Style |
|---|---|
| Challenges | Warning/shield/exclamation icons in accent-soft circles |
| Services | Monoline service icons, 24x24px, accent color |
| Capabilities | Simple line icons in graphite cards |
| Benefits | Small decorative dots in accent-bright |
| Engagement | Numbered phases in accent |

### Background Treatment

| Section | Background |
|---|---|
| Hero | Radial gradient top-right accent-soft, grid pattern overlay |
| Even sections (2, 4, 6, 8, 10, 12, 14) | `bg-graphite` dark section |
| Odd sections (1, 3, 5, 7, 9, 11, 13) | Default paper background |
| CTA | Full-width radial gradient centered |

### Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Mobile (<768px) | Single column, stacked cards, full-width containers |
| Tablet (768-1024px) | 2-column grids, reduced padding |
| Desktop (>1024px) | 3-4 column grids, max-width container constraints |

### Motion Recommendations

- **Scroll-triggered reveals**: Cards fade up 26px with stagger (existing `data-reveal` pattern)
- **Hero entrance**: Text fades in from y:26, stats appear with counter animation
- **Section transitions**: Subtle gradient opacity shift between sections
- **Hover states**: Card lift of 2px + subtle border color change
- **Stats**: Count-up animation on scroll into viewport

---

## Conversion Components

### Recommended Placements

| Component | Placement | Priority |
|---|---|---|
| **Consultation form** | Sticky sidebar on desktop, bottom sheet on mobile, or inline after FAQ | High |
| **Reliability Maturity Assessment** | Interactive scored questionnaire, placed after "What is SRE" or in sidebar. 5-minute completion time. Results in a PDF report. | High |
| **Operational Health Score** | Quick 10-question interactive quiz, placed in "Business Challenges" section. Returns a score with CTA to book assessment. | Medium |
| **SRE Process Diagram** | After "Our Approach" section. Clickable expandable SVG showing the full SRE lifecycle. | Medium |
| **Incident Lifecycle Diagram** | In the "Incident Management" service card or as a standalone visual in the observability section. | Medium |
| **Service Reliability Dashboard Mockup** | In the "Observability" section. Interactive Figma embed or static SVG showing SLO burn rate, error budget, MTTR chart. | High |
| **Architecture Diagrams** | In the "High Availability Architecture" service card. Before/after architecture comparisons. | Medium |
| **Client Testimonials** | Carousel or grid of 3-4 quotes, placed between "Why Choose" and "Industries" or inline in services | High |
| **Success Metrics** | Before/after stat callouts within service descriptions (e.g., "Reduced MTTR from 45min to 8min") | High |
| **Case Study Previews** | 3-card grid after "Industries" section. Each card: industry, challenge, result, CTA to full case study | Medium |
| **Trust Badges** | Footer area: SOC 2, ISO 27001, AWS Partner, Kubernetes Certified, etc. | Medium |
| **Client Logos** | Below hero or before FAQ. Row of grayscale logos from recognizable brands. | Medium |

### Conversion Flow

```
Hero CTA → Contact form (Assessment scheduling)
         → Learn more → Internal anchor navigation

What is SRE → Reliability Maturity Assessment (interactive tool)
Business Challenges → Operational Health Score → Book Assessment

Services → Case study previews → Full case study → Contact

FAQ → Trust badges + Testimonials → Contact

Bottom CTA → Contact form
```

### Form Fields (SRE Assessment)

1. Full Name
2. Company Name  
3. Job Title
4. Email
5. Phone (optional)
6. Company Size (dropdown: <50, 50-200, 200-1000, 1000+)
7. Primary Challenge (multi-select: Frequent incidents, Deployment risk, Observability gaps, Cloud costs, Scaling, Compliance)
8. Current Stack (free text)
9. Message (free text)
10. How did you hear about us? (dropdown)
