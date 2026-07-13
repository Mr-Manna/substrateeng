export interface Capability {
  title: string;
  description: string;
  /** key into the glyph set in Capabilities.astro */
  glyph: string;
}

export const capabilities: Capability[] = [
  {
    title: 'Enterprise Architecture',
    description:
      'Target-state architectures, domain boundaries, and technology roadmaps that survive contact with the organization.',
    glyph: 'enterprise',
  },
  {
    title: 'Cloud Architecture',
    description:
      'Multi-account, multi-region cloud foundations on AWS, Azure, and GCP — secure by default, priced for reality.',
    glyph: 'cloud',
  },
  {
    title: 'Platform Engineering',
    description:
      'Internal developer platforms with golden paths, self-service infrastructure, and paved roads to production.',
    glyph: 'platform',
  },
  {
    title: 'Automation Engineering',
    description:
      'Pipelines, provisioning, and operational toil engineered out of the system — everything as code, everything repeatable.',
    glyph: 'automation',
  },
  {
    title: 'AI-Native Engineering',
    description:
      'Products designed around models from the first line: retrieval, evaluation, guardrails, and cost control built in.',
    glyph: 'ai',
  },
  {
    title: 'Agentic AI Systems',
    description:
      'Multi-agent systems that act inside your business processes — with the permissions, audit trails, and oversight enterprises require.',
    glyph: 'agentic',
  },
  {
    title: 'Data Engineering',
    description:
      'Warehouses, lakes, and streaming pipelines that make data a dependable interface, not a nightly surprise.',
    glyph: 'data',
  },
  {
    title: 'Performance Engineering',
    description:
      'Load modeling, profiling, and capacity planning that turn latency budgets into engineering requirements.',
    glyph: 'performance',
  },
  {
    title: 'SRE & Operations',
    description:
      'SLOs, incident response, and reliability practices that keep mission-critical systems boring — in the best way.',
    glyph: 'sre',
  },
];
