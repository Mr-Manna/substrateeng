export interface Industry {
  /** key into the vignette set in Industries.astro */
  id: string;
  name: string;
  positioning: string;
  /** representative systems we build in this sector */
  systems: string[];
  /** figure caption under the vignette */
  caption: string;
}

export const industries: Industry[] = [
  {
    id: 'fs',
    name: 'Financial Services',
    positioning:
      'Systems where a millisecond is money and an audit is always on the calendar. We build for correctness first, latency second — and prove both.',
    systems: ['Real-time payment rails', 'Risk & regulatory reporting', 'Core banking integration'],
    caption: 'FIG. 03.1 — REAL-TIME RISK & SETTLEMENT',
  },
  {
    id: 'gov',
    name: 'Government & Public Sector',
    positioning:
      'Citizen-scale platforms with procurement-grade accountability: sovereign hosting, open standards, and services designed to outlast administrations.',
    systems: ['Digital service platforms', 'Identity & registries', 'Secure data exchange'],
    caption: 'FIG. 03.2 — CITIZEN SERVICE EXCHANGE',
  },
  {
    id: 'hc',
    name: 'Healthcare & Life Sciences',
    positioning:
      'The most personal data there is, moving between systems that were never designed to talk. We make interoperability dependable — and auditable.',
    systems: ['FHIR interoperability layers', 'Clinical data platforms', 'Research & trial pipelines'],
    caption: 'FIG. 03.3 — CLINICAL TELEMETRY',
  },
  {
    id: 'en',
    name: 'Energy & Utilities',
    positioning:
      'Infrastructure for infrastructure: telemetry from millions of assets, forecasts the grid can act on, and control systems with no appetite for surprises.',
    systems: ['Grid telemetry at scale', 'Demand forecasting', 'Asset monitoring & control'],
    caption: 'FIG. 03.4 — GRID TELEMETRY & LOAD',
  },
  {
    id: 'log',
    name: 'Logistics & Mobility',
    positioning:
      'Physical networks run on digital nervous systems. We build the tracking, routing, and orchestration that keep goods — and promises — moving.',
    systems: ['Fleet & shipment tracking', 'Routing & optimization', 'Network orchestration'],
    caption: 'FIG. 03.5 — NETWORK ROUTING',
  },
  {
    id: 'rc',
    name: 'Retail & Commerce',
    positioning:
      'Peak season is a load test you only get to run once a year. We engineer order, inventory, and pricing systems that treat it like a Tuesday.',
    systems: ['Order management at peak', 'Real-time inventory', 'Pricing & personalization'],
    caption: 'FIG. 03.6 — DEMAND VS. INVENTORY',
  },
];
