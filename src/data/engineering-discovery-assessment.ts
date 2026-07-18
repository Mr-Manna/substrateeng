/**
 * Engineering Discovery & Assessment — Content Data
 *
 * All copy, SEO metadata, UI/UX recommendations, and conversion component
 * specifications for the service page. Designed for direct implementation.
 */

// =============================================================================
// SERVICE NAME RECOMMENDATION
// =============================================================================
/*
 * RECOMMENDATION: Engineering Discovery & Assessment
 *
 * Rationale:
 * - "Discovery" implies uncovering unknown unknowns — the primary value prop
 * - "Assessment" communicates rigorous, evidence-based evaluation
 * - The pairing mirrors top-tier consulting nomenclature (McKinsey, Deloitte)
 * - "Engineering" grounds it in technical credibility, not generic consulting
 * - Pairs naturally with Substrate's existing "Discover" process phase
 *
 * Alternatives considered and why:
 * - "Engineering Health Check" — too transactional, implies pass/fail
 * - "Technology Strategy Assessment" — too broad, misses the discovery element
 * - "Engineering Maturity Assessment" — accurate but narrow, lacks strategic scope
 * - "Platform Readiness Assessment" — too focused on platform, misses breadth
 * - "Architecture Assessment" — too narrow, misses operations, process, team
 *
 * URL slug: /engineering-discovery-assessment
 */

// =============================================================================
// SEO
// =============================================================================

export const seo = {
  title: 'Engineering Discovery & Assessment | Substrate',
  metaDescription:
    'Substrate evaluates your technology landscape, engineering practices, and architecture maturity. Delivers an evidence-based roadmap with prioritized recommendations. Led by senior engineers with production experience.',
  urlSlug: 'engineering-discovery-assessment',
  canonicalUrl: 'https://substrate.engineering/engineering-discovery-assessment',
  h1: 'Understand where you are before you decide where to go.',

  // H2 / H3 hierarchy
  headings: {
    h2: [
      'Why Start with an Assessment',
      'What This Is',
      'What We Assess',
      'Assessment Methodology',
      'Deliverables',
      'Maturity Framework',
      'Business Outcomes',
      'Engagement Model',
      'Industries',
      'Why Substrate',
      'Frequently Asked Questions',
      'Start the conversation',
    ],
    h3: [
      'Purpose',
      'Business Value',
      'Engineering Value',
      'Expected Outcomes',
      'Not an IT audit',
      'Not an implementation pitch',
      // Maturity levels
      'Level 1: Reactive',
      'Level 2: Standardized',
      'Level 3: Automated',
      'Level 4: Platform Driven',
      'Level 5: AI-Native Enterprise',
      // 33 capability cards
      'Business Strategy Alignment',
      'Technology Landscape',
      'Enterprise Architecture',
      'Application Portfolio',
      'Cloud Architecture',
      'Platform Engineering',
      'Infrastructure',
      'DevOps',
      'Developer Experience',
      'Site Reliability Engineering',
      'Security',
      'Compliance',
      'Networking',
      'Identity & Access',
      'Data Platforms',
      'Data Quality',
      'Analytics',
      'AI Readiness',
      'Automation',
      'Performance',
      'Observability',
      'API Landscape',
      'Integration',
      'Technical Debt',
      'Governance',
      'Cloud Cost Optimization',
      'Operational Processes',
      'Disaster Recovery',
      'Business Continuity',
      'Knowledge Management',
      'Documentation',
      'Engineering Team Maturity',
      'Vendor Dependencies',
      // 19 deliverables
      'Executive Summary',
      'Technology Landscape Assessment',
      'Architecture Review',
      'Engineering Maturity Score',
      'Capability Maturity Matrix',
      'SWOT Analysis',
      'Technical Debt Report',
      'Cloud Assessment',
      'Security Findings',
      'Operational Findings',
      'Risk Register',
      'Quick Wins',
      'Medium-Term Recommendations',
      'Long-Term Strategy',
      'Prioritized Roadmap',
      'Investment Recommendations',
      'Implementation Phases',
      'Architecture Diagrams',
      'Executive Presentation',
      // Engagement model steps
      'Kickoff',
      'Discovery',
      'Assessment',
      'Analysis',
      'Recommendations',
      'Executive Review',
      'Roadmap Delivery',
      'Optional: Implementation',
      'Continuous Advisory',
      // 12 reasons
      'Independent Recommendations',
      'Vendor-Neutral Advice',
      'Engineering-First Mindset',
      'Enterprise Architecture Expertise',
      'Platform Engineering Expertise',
      'Cloud-Native Expertise',
      'AI Expertise',
      'Data Expertise',
      'Security-Focused Approach',
      'Actionable Recommendations',
      'Knowledge Transfer',
      'Long-Term Partnership',
      // Business outcomes
      'Reduced Operational Risk',
      'Lower Cloud Costs',
      'Higher Developer Productivity',
      'Improved Software Delivery',
      'Better Governance',
      'Improved Reliability',
      'Reduced Technical Debt',
      'Greater Business Agility',
      'Higher Security Posture',
      'AI Readiness',
      'Scalable Architecture',
      'Executive Visibility',
    ],
  },

  // Internal links
  suggestedInternalLinks: [
    { text: 'Enterprise Architecture', href: '/enterprise-architecture' },
    { text: 'Cloud Architecture', href: '/cloud-architecture' },
    { text: 'Platform Engineering', href: '/platform' },
    { text: 'Data Engineering', href: '/data-engineering' },
    { text: 'AI-Native Engineering', href: '/ai-native-engineering' },
    { text: 'SRE & Operations', href: '/sre-operations' },
    { text: 'Contact Substrate', href: '/contact' },
    { text: 'Engineering Capabilities', href: '/capabilities' },
    { text: 'Our Process', href: '/#process' },
  ],

  // External authority references
  suggestedExternalReferences: [
    {
      name: 'AWS Well-Architected Framework',
      url: 'https://aws.amazon.com/architecture/well-architected/',
    },
    {
      name: 'Google Cloud Architecture Framework',
      url: 'https://cloud.google.com/architecture/framework',
    },
    {
      name: 'Microsoft Azure Well-Architected Framework',
      url: 'https://learn.microsoft.com/en-us/azure/well-architected/',
    },
    {
      name: 'Team Topologies',
      url: 'https://teamtopologies.com/',
    },
    {
      name: 'CNCF Platform Maturity Model',
      url: 'https://tag-app-delivery.cncf.io/whitepapers/platform-eng-maturity-model/',
    },
    {
      name: 'ISO 27001 Information Security',
      url: 'https://www.iso.org/isoiec-27001-information-security.html',
    },
    {
      name: 'FinOps Foundation',
      url: 'https://www.finops.org/',
    },
  ],

  // Schema.org recommendations
  schemaOrg: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Engineering Discovery & Assessment',
    provider: {
      '@type': 'Organization',
      name: 'Substrate',
      url: 'https://substrate.engineering',
    },
    description:
      'A comprehensive evaluation of an organization\'s technology landscape, engineering practices, and architecture maturity. Delivers an evidence-based roadmap with prioritized recommendations.',
    serviceType: 'Engineering Assessment',
    audience: {
      '@type': 'Audience',
      audienceType: 'CIO, CTO, VP Engineering, Engineering Directors, Enterprise Architects',
    },
  },

  // Open Graph
  ogTitle: 'Engineering Discovery & Assessment | Substrate',
  ogDescription:
    'Understand your technology landscape, identify opportunities, and get an evidence-based roadmap for modernization. Substrate\'s Engineering Discovery & Assessment — led by senior engineers, not sales people.',
};

// =============================================================================
// UI / UX RECOMMENDATIONS
// =============================================================================

export const uiUx = {
  // 1. HERO
  hero: {
    layout: 'Full-width section with radial gradient accent at top-right. Left-aligned content column (max-w-4xl) on large screens. Breadcrumb above headline.',
    visualHierarchy: 'Breadcrumb (small, muted mono) > Kicker (accent mono) > Display headline (4.5rem Archivo expanded) > Body text (20px Instrument Sans) > CTA buttons (primary + secondary)',
    illustration: 'Abstract architectural diagram: layered strata (business, application, data, infrastructure) with a compass or survey marker overlay. SVG line-art style matching existing Substrate illustration language.',
    motion: 'Staggered reveal: breadcrumb first, kicker, headline, body text, CTA buttons. 100ms delay between each. Duration 600ms ease-out.',
  },

  // 2. WHY START WITH AN ASSESSMENT
  whyAssess: {
    layout: 'Two-column or three-column grid of numbered cards. Alternating background section (paper-2).',
    visualHierarchy: 'SectionHeading component > 10-card grid with numbered badges (01–10).',
    illustration: 'A subtle "iceberg" graphic: small visible tip above water, massive hidden structure below — metaphor for unknown technical debt. SVG line-art.',
    motion: 'Staggered card reveal from bottom. 80ms delay between cards.',
  },

  // 3. WHAT THIS IS
  whatIs: {
    layout: 'Side-by-side 2-column grid for purpose/value/outcomes. Below, two callout boxes with left accent border (border-l-2 border-accent) distinguishing from audit and implementation pitch.',
    visualHierarchy: 'Kicker > Display H2 > Four content blocks in 2x2 grid > Two distinction callouts below.',
    illustration: 'Diagram showing three boxes: "IT Audit" (checked against standards), "Implementation Pitch" (arrow from solution to problem), and "Engineering Assessment" (circular discovery-to-recommendation flow). Highlight the third.',
    motion: 'Content blocks fade in sequentially. Callout boxes slide in from left.',
  },

  // 4. WHAT WE ASSESS
  whatWeAssess: {
    layout: '3-column grid of compact capability cards. Each card: numbered index, title, one-sentence description. Background: paper-2 to visually separate from surrounding sections.',
    visualHierarchy: 'SectionHeading > 33 cards in 3-col grid (2-col on tablet, 1-col on mobile).',
    illustration: 'No per-card illustrations — keep clean and text-focused. Consider a hover state that reveals a subtle accent border or background shift.',
    iconRecommendations: 'No icons per card. Use the numeric index as the visual anchor. Clean, information-dense layout appropriate for 33 items.',
    responsiveBehavior: '3 columns → 2 columns at md → 1 column at sm. Cards stack vertically on mobile.',
    motion: 'Staggered card reveal in batches. 60ms delay between cards. Groups of 6 simultaneous entries.',
    interaction: 'Cards could be filterable by category (Architecture, Engineering, Operations, Security, Data, Business) via pill tabs at the top of the section.',
  },

  // 5. METHODOLOGY
  methodology: {
    layout: 'Vertical accordion (details/summary) listing all 15 phases. Each phase: numbered badge, title, expandable description. Single-column for readability.',
    visualHierarchy: 'SectionHeading > 15 accordion items with numbered badges (01–15).',
    illustration: 'A horizontal journey line at the top of the section showing all 15 phases as connected nodes. Highlights current phase when accordion is expanded. SVG line-art.',
    motion: 'Accordion expand/collapse with smooth height transition (max-height or grid-template-rows animation). Journey line node highlights synchronously.',
    interaction: 'Opening one accordion optionally closes others (accordion group behavior). Journey line scrolls horizontally on narrow screens.',
    responsiveBehavior: 'Journey line becomes a vertical timeline on mobile (< 768px). Accordion remains unchanged.',
  },

  // 6. DELIVERABLES
  deliverables: {
    layout: '3-column grid of deliverable cards. Compact format matching the What We Assess section for visual consistency.',
    visualHierarchy: 'SectionHeading > 19 cards in 3-col grid.',
    illustration: 'A stylized "document stack" SVG in the section header — layers suggesting a comprehensive report.',
    motion: 'Staggered card reveal matching capability cards pattern.',
    conversionComponent: 'Add a "Preview sample report" button that opens a modal or PDF preview. Place at the top-right of the section or between cards.',
  },

  // 7. MATURITY FRAMEWORK
  maturityFramework: {
    layout: 'Vertical stacked bar layout. Each level is a horizontal strip: level number (left column, vertically centered) + description (right column, padded).',
    visualHierarchy: 'SectionHeading > 5 horizontal strips. Level 5 (white text on dark background) stands out visually.',
    illustration: 'A visual maturity model bar: horizontal gradient bar from dark gray (#1) through accent blue (#3) to bright accent (#4) to white-on-dark (#5).',
    motion: 'Strips reveal sequentially from bottom. Level number fades in with a slight scale effect.',
    conversionComponent: 'Add interactive capability scorecard: users can self-assess each of the 33 capability areas against the 5-level model. Returns a visual radar chart. Place below the maturity model description.',
    responsiveBehavior: 'On mobile, stack number above description instead of side-by-side.',
  },

  // 8. BUSINESS OUTCOMES
  businessOutcomes: {
    layout: '3-column grid of outcome cards. Each card: outcome name (bold) + one-sentence description.',
    visualHierarchy: 'SectionHeading > 12 outcome cards in 3-col grid.',
    motion: 'Standard staggered card reveal.',
    conversionComponent: 'Add a "Current-state vs future-state comparison" toggle or slider. Show "Before assessment" metrics vs "After assessment" outcomes. Place after the outcomes grid.',
  },

  // 9. ENGAGEMENT MODEL
  engagementModel: {
    layout: '3-column or 4-column grid of step cards. Each card: numbered index, step name, description.',
    visualHierarchy: 'SectionHeading > 9 step cards in a responsive grid.',
    illustration: 'A horizontal process flow diagram connecting all 9 steps with arrows. Step 7 (Roadmap Delivery) marked as a milestone. "Optional" steps shown with dashed borders.',
    motion: 'Steps animate in sequence along the flow. Arrows draw in after each step appears.',
    responsiveBehavior: 'Process flow becomes vertical timeline on mobile. Arrows become connector lines.',
  },

  // 10. INDUSTRIES
  industries: {
    layout: '3-column grid of industry cards. Each card: industry name + one-sentence application of the assessment.',
    visualHierarchy: 'SectionHeading > 12 industry cards in 3-col grid.',
    motion: 'Standard staggered card reveal.',
  },

  // 11. WHY SUBSTRATE
  whySubstrate: {
    layout: '2-column grid of reason cards. Each card: numbered badge (01–12) + title + description. Matching the existing WhyChooseSubstrate component pattern.',
    visualHierarchy: 'SectionHeading > 12 reason cards in 2-col grid.',
    motion: 'Staggered card reveal matching existing implementation.',
  },

  // 12. FAQ
  faq: {
    layout: 'Vertical accordion. Single-column max-w-4xl centered.',
    visualHierarchy: 'SectionHeading > 24 accordion items.',
    motion: 'Accordion expand/collapse with smooth height transition.',
    interaction: 'Search/filter field at the top of the FAQ section to filter questions by keyword. "Expand all" / "Collapse all" toggle.',
    responsiveBehavior: 'Full width on all screen sizes. Padding adjusts on mobile.',
    conversionComponent: 'Add consultation scheduler CTA after FAQ #20: "Still have questions? Schedule a 30-minute discovery call."',
  },

  // 13. CTA
  cta: {
    layout: 'Full-width dark section (graphite background) with centered content. Radial gradient accent at bottom-left. Two CTAs: primary (schedule workshop) + secondary (view scope).',
    visualHierarchy: 'Kicker (accent-bright) > Display H2 (white) > Body text (graphite-fg-2) > Two CTA buttons > Email fallback text.',
    motion: 'Elements fade in with slight upward movement. Gradient pulse animation in background (optional, subtle).',
    responsiveBehavior: 'Buttons stack vertically on mobile. Same padding on all screen sizes.',
    conversionComponent: 'Place consultation scheduler immediately below. "Request an Assessment" form accessible from both CTAs and as an inline form at the bottom of the page.',
  },
};

// =============================================================================
// CONVERSION COMPONENT RECOMMENDATIONS
// =============================================================================

export const conversion = {
  // Primary conversion: "Request an Assessment" form
  requestForm: {
    placement: 'Sticky on desktop (right rail, after hero scrolls past). Inline section between FAQ and CTA on mobile.',
    fields: ['Full name', 'Company name', 'Business email', 'Job title', 'Company size', 'Industry', 'Current challenge (textarea, optional)', 'Preferred contact method'],
    submitText: 'Request an assessment',
    successMessage: 'Thank you. A practice lead will respond within two working days.',
    note: 'Matches existing contact form pattern in src/components/islands/ContactForm.tsx',
  },

  // Secondary conversion: Engineering maturity self-assessment
  maturitySelfAssessment: {
    placement: 'Inline in the Maturity Framework section. Also available as a standalone interactive widget.',
    implementation: 'A 33-question interactive scorecard. Each question: "Rate your organization\'s maturity in [capability area] from 1–5." Returns a visual radar chart comparing current maturity across all 33 areas.',
    outputVisualization: 'Radar chart (spider plot) with 33 axes. Color-coded by domain (Architecture, Engineering, Operations, Security, Data, Business). Optional overlay of industry benchmark.',
    downloadOption: 'PDF download of self-assessment results.',
    upsell: 'Prompt to schedule a professional assessment for validated results.',
  },

  // Tertiary conversion: Sample report preview
  sampleReportPreview: {
    placement: 'Deliverables section. Button: "Preview a sample executive summary" opens a modal.',
    implementation: 'A styled PDF-like document preview showing 2–3 pages of a sample executive summary. Anonymized, with realistic findings and recommendations.',
    conversion: 'Gated by email capture (optional — consider whether this improves or hinders conversion for enterprise buyers).',
  },

  // Supplementary conversion components
  supplementary: [
    {
      name: 'Interactive capability scorecard',
      placement: 'What We Assess section',
      description: 'Filterable card grid with category pill tabs (All, Architecture, Engineering, Operations, Security, Data, Business). Clicking a pill filters the 33 cards to show only relevant capabilities.',
    },
    {
      name: 'Technology landscape diagram',
      placement: 'What We Assess section or as a standalone visualization',
      description: 'An SVG line-art diagram showing a reference technology landscape: layers (business, application, data, infrastructure) with icons for each technology category. Interactive: hover to highlight related areas.',
    },
    {
      name: 'Current-state vs future-state comparison',
      placement: 'Business Outcomes section',
      description: 'A split-view component. Left side: "Before Assessment" (red/orange metrics — high risk, high cost, low velocity). Right side: "After Assessment" (green/blue metrics — reduced risk, optimized cost, improved delivery). Toggle or slider to compare.',
    },
    {
      name: 'Roadmap timeline',
      placement: 'After Deliverables section or as part of the Engagement Model',
      description: 'A horizontal timeline visualization showing Quick Wins (0–3 months), Medium-Term (3–6 months), and Long-Term (6–18 months) phases. Milestones for each phase. Color-coded by initiative type.',
    },
    {
      name: 'Case study previews',
      placement: 'Between Deliverables and Maturity Framework. Or as a floating carousel on the right side.',
      description: '2–3 anonymized case study cards showing "Before assessment: [problem]" → "After assessment: [outcome]" format. Links to full case studies if available.',
    },
    {
      name: 'Testimonials',
      placement: 'Scattered throughout the page. One near the hero (social proof early), one near the CTA (final reinforcement).',
      description: 'Short pull quotes from CTOs and VPs Engineering who have gone through the assessment. "The Substrate assessment saved us from a $2M investment in the wrong platform." — CTO, Financial Services (anonymized).',
    },
    {
      name: 'Trust badges',
      placement: 'Hero section or between hero and Why Assess section.',
      description: 'Logos of cloud providers (AWS, Azure, GCP), security frameworks (SOC 2, ISO 27001), and notable client logos (anonymized as "Trusted by platform teams at" — matching existing pattern).',
    },
    {
      name: 'Client logos',
      placement: 'Between hero and Why Assess section. Below the trust header.',
      description: 'Matching existing hero pattern: "Trusted by platform teams at" with 6 anonymized client names in mono font.',
    },
    {
      name: 'Consultation scheduler',
      placement: 'CTA section and as a persistent "Book a discovery call" button in the bottom-right corner.',
      description: 'A calendar-based scheduler (Calendly or similar integration) for booking a 30-minute discovery call. Multiple timezone support.',
    },
    {
      name: 'Sticky assessment CTA',
      placement: 'Bottom of viewport on mobile. Right rail on desktop (scrolls with page, appears after hero is scrolled past).',
      description: 'A persistent but unobtrusive CTA: "Schedule an assessment" or "Get your engineering maturity score." Links to the contact form.',
    },
  ],
};

// =============================================================================
// MATURITY MODEL — VISUAL SPECIFICATION
// =============================================================================

export const maturityModelVisualization = {
  type: 'Horizontal segmented bar chart',
  dimensions: 'Full width of content area (max 95rem). Height: 120px per level (600px total for 5 levels).',
  colors: [
    { level: 1, name: 'Reactive', fill: 'var(--c-ink-3)', text: 'var(--c-paper)' },
    { level: 2, name: 'Standardized', fill: 'var(--c-ink-2)', text: 'var(--c-paper)' },
    { level: 3, name: 'Automated', fill: 'var(--c-accent)', text: '#ffffff' },
    { level: 4, name: 'Platform Driven', fill: 'var(--c-accent-bright)', text: '#ffffff' },
    { level: 5, name: 'AI-Native Enterprise', fill: 'var(--c-graphite)', text: 'var(--c-graphite-fg)', border: '2px solid var(--c-accent-bright)' },
  ],
  capabilityMarkers: {
    render: 'Small circular markers plotted along each level bar, positioned by maturity score.',
    interaction: 'Hover reveals capability name and score. Click scrolls to detailed capability description.',
    grouping: 'Markers are color-coded by domain: Architecture (blue), Engineering (green), Operations (amber), Security (red), Data (purple), Business (gray).',
  },
  labels: {
    left: 'Level number (large, bold display font)',
    center: 'Level name and description',
    right: 'Optional: percentage of organizations at this level (benchmark data)',
  },
  interactive: {
    tooltip: true,
    filterByDomain: true,
    currentVsTarget: true,
    downloadImage: true,
  },
};

// =============================================================================
// ASSESSMENT JOURNEY DIAGRAM — VISUAL SPECIFICATION
// =============================================================================

export const assessmentJourneyDiagram = {
  type: 'Horizontal process flow with 15 connected nodes',
  layout: 'Top of Methodology section. Each node is a circle with number, connected by horizontal lines with directional arrows.',
  nodeStyle: {
    inactive: 'Circle, 48px, border-2 border-line, number in ink-3',
    active: 'Circle, 48px, fill-accent, number in white, with subtle glow',
    completed: 'Circle, 48px, fill-accent-soft, number in accent',
  },
  connectorStyle: 'Horizontal line, 1px solid var(--c-line), with arrowhead at end. Active segment: 2px solid var(--c-accent).',
  labels: 'Node name below each circle. 11px font, mono, uppercase, letter-spacing 0.1em.',
  responsive: {
    desktop: 'Horizontal flow, all 15 nodes visible, scrollable if needed',
    tablet: 'Horizontal flow, nodes scale down to 36px, smaller labels',
    mobile: 'Vertical flow, nodes stack vertically with vertical connectors between them',
  },
  animation: 'When an accordion item is opened, the corresponding node animates to active state. When closed, returns to inactive. Connecting segments animate as the active state progresses.',
};

// =============================================================================
// CAPABILITY MATRIX — VISUAL SPECIFICATION
// =============================================================================

export const capabilityMatrix = {
  type: 'Filterable card grid with domain categorization',
  domains: ['Architecture', 'Engineering', 'Operations', 'Security', 'Data', 'Business'],
  domainMapping: {
    Architecture: ['Enterprise Architecture', 'Technology Landscape', 'Application Portfolio', 'Cloud Architecture', 'API Landscape', 'Integration', 'Networking'],
    Engineering: ['Platform Engineering', 'DevOps', 'Developer Experience', 'Performance', 'Automation', 'Engineering Team Maturity', 'Technical Debt'],
    Operations: ['Site Reliability Engineering', 'Observability', 'Operational Processes', 'Disaster Recovery', 'Business Continuity', 'Cloud Cost Optimization', 'Knowledge Management'],
    Security: ['Security', 'Compliance', 'Identity & Access'],
    Data: ['Data Platforms', 'Data Quality', 'Analytics', 'AI Readiness'],
    Business: ['Business Strategy Alignment', 'Governance', 'Documentation', 'Vendor Dependencies'],
  },
  interaction: 'Pill tabs at top. Click a domain pill to filter cards. "All" selected by default. Active pill: accent background, white text. Inactive: transparent background, ink-2 text.',
  animation: 'Filtered cards fade in. Non-matching cards fade out with scale(0.95) transition. 300ms ease-in-out.',
  cards: {
    default: 'border-line, bg-paper',
    hover: 'border-accent/20, subtle background shift',
    selected: 'border-accent/30, bg-accent-soft',
  },
};

// =============================================================================
// STICKY NAV / TABLE OF CONTENTS — SPECIFICATION
// =============================================================================

export const stickyToc = {
  type: 'Right-rail sticky table of contents on desktop. Collapsible hamburger on mobile.',
  sections: [
    { id: 'why-assess-heading', label: 'Why Start with an Assessment' },
    { id: 'what-is-heading', label: 'What This Is' },
    { id: 'what-we-assess', label: 'What We Assess' },
    { id: 'methodology-heading', label: 'Methodology' },
    { id: 'deliverables-heading', label: 'Deliverables' },
    { id: 'framework-heading', label: 'Maturity Framework' },
    { id: 'outcomes-heading', label: 'Business Outcomes' },
    { id: 'engagement-heading', label: 'Engagement Model' },
    { id: 'industries-heading', label: 'Industries' },
    { id: 'why-substrate-heading', label: 'Why Substrate' },
    { id: 'faq-heading', label: 'FAQ' },
  ],
  behavior: 'Highlights current section in viewport. Click scrolls to section. Sticky position: top: 6rem. Max width: 180px.',
  mobile: 'Toggle button fixed at bottom-right. Opens overlay with section links. Close on selection.',
};
