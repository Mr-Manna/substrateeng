export interface TechGroup {
  name: string;
  /** one-line stance on why this layer looks the way it does */
  note: string;
  items: string[];
}

export const techGroups: TechGroup[] = [
  {
    name: 'Languages',
    note: 'Typed, fast, and hiring-proof.',
    items: ['TypeScript', 'Python', 'Go', 'Rust', 'SQL'],
  },
  {
    name: 'Cloud & Runtime',
    note: 'Everything as code, everywhere.',
    items: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Terraform'],
  },
  {
    name: 'Data & Streaming',
    note: 'Data treated as an interface.',
    items: ['PostgreSQL', 'Kafka', 'ClickHouse', 'dbt', 'Iceberg'],
  },
  {
    name: 'AI Systems',
    note: 'Evaluated, never vibes-based.',
    items: ['Claude', 'PyTorch', 'vLLM', 'pgvector', 'Ray'],
  },
  {
    name: 'Delivery & Ops',
    note: 'Observable by default.',
    items: ['GitHub Actions', 'Argo CD', 'OpenTelemetry', 'Prometheus', 'Grafana'],
  },
];
