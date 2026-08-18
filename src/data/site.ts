export const site = {
  title: 'Substrate',
  tagline: 'Engineering the layer beneath modern business.',
  email: 'hello@substrateeng.com',
} as const;

export interface NavItem {
  label: string;
  href: string;
}

export interface MegaMenuSubItem {
  label: string;
  href: string;
  items?: { label: string; href: string; description?: string }[];
}

export interface MegaMenuItem {
  label: string;
  href: string;
  items?: MegaMenuSubItem[];
}

/**
 * Primary navigation with mega menu support.
 * Top-level items with `items` render a multi-column dropdown on hover.
 */
export const navItems: MegaMenuItem[] = [
  {
    label: 'Capabilities',
    href: '/capabilities',
    items: [
      {
        label: 'Distributed Systems',
        href: '#',
        items: [
          { label: 'Consensus & replication', href: '#' },
          { label: 'Partition-tolerant design', href: '#' },
          { label: 'Consistency models', href: '#' },
        ],
      },
      {
        label: 'Cloud Native',
        href: '/cloud-native',
        items: [
          { label: 'Container orchestration', href: '#' },
          { label: 'Service mesh', href: '#' },
          { label: 'Serverless architectures', href: '#' },
        ],
      },
      {
        label: 'Security & Compliance',
        href: '#',
        items: [
          { label: 'Zero-trust architecture', href: '#' },
          { label: 'Policy-as-code', href: '#' },
          { label: 'Compliance automation', href: '#' },
        ],
      },
      {
        label: 'Enterprise Architecture',
        href: '/enterprise-architecture',
        items: [
          { label: 'Domain-driven design', href: '#' },
          { label: 'Technology roadmaps', href: '#' },
          { label: 'Architecture governance', href: '#' },
        ],
      },
      {
        label: 'Cloud Architecture',
        href: '/capabilities/cloud-architecture',
        items: [
          { label: 'Multi-cloud strategy', href: '#' },
          { label: 'Landing zones', href: '#' },
          { label: 'Cost optimization', href: '#' },
        ],
      },
      {
        label: 'Platform Engineering',
        href: '/platform',
        items: [
          { label: 'IDP design & delivery', href: '#' },
          { label: 'Golden paths', href: '#' },
          { label: 'Developer portals', href: '#' },
        ],
      },
      {
        label: 'IoT and Industrial Automation',
        href: '#',
        items: [
          { label: 'CI/CD pipelines', href: '#' },
          { label: 'Infrastructure as code', href: '#' },
          { label: 'Toil elimination', href: '#' },
        ],
      },
      {
        label: 'Data Engineering',
        href: '#',
        items: [
          { label: 'Data Lake', href: '#', description: 'Lakehouse architecture, Iceberg, Delta Lake' },
          { label: 'Data Warehouse', href: '#', description: 'Cloud DW strategy, modelling, optimisation' },
          { label: 'Data Mesh', href: '#', description: 'Domain ownership, data products, governance' },
          { label: 'Streaming Pipelines', href: '#', description: 'Real-time ingestion, stream processing' },
          { label: 'Data Governance', href: '#', description: 'Catalog, lineage, quality, compliance' },
        ],
      },
      {
        label: 'AI-Native Engineering',
        href: '#',
        items: [
          { label: 'LLM applications', href: '#' },
          { label: 'RAG systems', href: '#' },
          { label: 'AI infrastructure', href: '#' },
        ],
      },
      {
        label: 'Agentic AI Systems',
        href: '#',
        items: [
          { label: 'Multi-agent orchestration', href: '#' },
          { label: 'Enterprise guardrails', href: '#' },
          { label: 'Audit & compliance', href: '#' },
        ],
      },
      {
        label: 'Performance Engineering',
        href: '#',
        items: [
          { label: 'Load modelling', href: '#' },
          { label: 'Profiling & tuning', href: '#' },
          { label: 'Capacity planning', href: '#' },
        ],
      },
      {
        label: 'SRE & Operations',
        href: '#',
        items: [
          { label: 'SLO frameworks', href: '#' },
          { label: 'Incident response', href: '#' },
          { label: 'Observability', href: '#' },
        ],
      },
    ],
  },
  {
    label: 'Industries',
    href: '/#industries',
    items: [
      {
        label: 'Financial Services',
        href: '#',
        items: [
          { label: 'Real-time payment rails', href: '#' },
          { label: 'Risk & regulatory reporting', href: '#' },
          { label: 'Core banking integration', href: '#' },
        ],
      },
      {
        label: 'Government & Public Sector',
        href: '#',
        items: [
          { label: 'Digital service platforms', href: '#' },
          { label: 'Identity & registries', href: '#' },
          { label: 'Secure data exchange', href: '#' },
        ],
      },
      {
        label: 'Healthcare & Life Sciences',
        href: '#',
        items: [
          { label: 'FHIR interoperability', href: '#' },
          { label: 'Clinical data platforms', href: '#' },
          { label: 'Research pipelines', href: '#' },
        ],
      },
      {
        label: 'Energy & Utilities',
        href: '#',
        items: [
          { label: 'Grid telemetry', href: '#' },
          { label: 'Demand forecasting', href: '#' },
          { label: 'Asset monitoring', href: '#' },
        ],
      },
      {
        label: 'Logistics & Mobility',
        href: '#',
        items: [
          { label: 'Fleet tracking', href: '#' },
          { label: 'Routing optimisation', href: '#' },
          { label: 'Network orchestration', href: '#' },
        ],
      },
      {
        label: 'Retail & Commerce',
        href: '#',
        items: [
          { label: 'Order management', href: '#' },
          { label: 'Real-time inventory', href: '#' },
          { label: 'Pricing & personalisation', href: '#' },
        ],
      },
    ],
  },
  {
    label: 'Technology',
    href: '/#technology',
    items: [
      {
        label: 'Languages',
        href: '#',
        items: [
          { label: 'TypeScript', href: '#' },
          { label: 'Python', href: '#' },
          { label: 'Go', href: '#' },
          { label: 'Rust', href: '#' },
          { label: 'SQL', href: '#' },
        ],
      },
      {
        label: 'Cloud & Runtime',
        href: '#',
        items: [
          { label: 'AWS', href: '#' },
          { label: 'Azure', href: '#' },
          { label: 'GCP', href: '#' },
          { label: 'Kubernetes', href: '#' },
          { label: 'Terraform', href: '#' },
        ],
      },
      {
        label: 'Data & Streaming',
        href: '#',
        items: [
          { label: 'PostgreSQL', href: '#' },
          { label: 'Kafka', href: '#' },
          { label: 'ClickHouse', href: '#' },
          { label: 'dbt', href: '#' },
          { label: 'Iceberg', href: '#' },
        ],
      },
      {
        label: 'AI Systems',
        href: '#',
        items: [
          { label: 'Claude', href: '#' },
          { label: 'PyTorch', href: '#' },
          { label: 'vLLM', href: '#' },
          { label: 'pgvector', href: '#' },
          { label: 'Ray', href: '#' },
        ],
      },
      {
        label: 'Delivery & Ops',
        href: '#',
        items: [
          { label: 'GitHub Actions', href: '#' },
          { label: 'Argo CD', href: '#' },
          { label: 'OpenTelemetry', href: '#' },
          { label: 'Prometheus', href: '#' },
          { label: 'Grafana', href: '#' },
        ],
      },
    ],
  },
  { label: 'Process', href: '/#process' },
  { label: 'Work', href: '/#work' },
  { label: 'Insights', href: '/#insights' },
  { label: 'Contact', href: '/contact' },
];
