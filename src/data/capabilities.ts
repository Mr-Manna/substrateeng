export interface Capability {
  title: string;
  description: string;
  /** key into the glyph set in Capabilities.astro */
  glyph: string;
}

export const capabilities: Capability[] = [
  {
    title: 'Distributed Systems',
    description:
      'Systems designed for failure: consensus, partitioning, replication, and consistency models that behave predictably at scale.',
    glyph: 'distributed',
  },
  {
    title: 'Cloud Native',
    description:
      'Containers, orchestration, service meshes, and serverless — architectures born in the cloud, not lifted and shifted.',
    glyph: 'cloudnative',
  },
  {
    title: 'Security & Compliance',
    description:
      'Zero-trust architectures, policy-as-code, and compliance automation that treat security as a platform primitive.',
    glyph: 'security',
  },
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
    title: 'IoT and Industrial Automation',
    description:
      'Connected devices, real-time telemetry, edge processing, and industrial control systems that bring the factory floor into the platform.',
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
