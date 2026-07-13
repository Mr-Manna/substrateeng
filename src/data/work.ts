export interface WorkStat {
  /** numeric target for the count-up animation */
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  note: string;
}

export interface WorkCase {
  /** internal engagement codename — clients stay behind NDAs */
  codename: string;
  sector: string;
  duration: string;
  title: string;
  body: string;
  stats: WorkStat[];
  /** key into the chart SVG map in Work.astro */
  chart: string;
  figCaption: string;
  figAlt: string;
}

export const workCases: WorkCase[] = [
  {
    codename: 'ATLAS',
    sector: 'Financial services',
    duration: '18 months',
    title: 'The payments core came off the mainframe without missing a settlement window.',
    body: 'A tier-one bank ran its payment rails on a core older than most of its engineers. We built the replacement beside it, mirrored six months of production traffic through both, and reconciled every transaction until the diff was zero. Then we cut over — one weekend, no missed windows.',
    stats: [
      { value: 180, suffix: 'ms', note: 'p99 settlement, down from 4.2s' },
      { value: 99.995, decimals: 3, suffix: '%', note: 'availability since cutover' },
      { value: 14, suffix: '×', note: 'peak throughput headroom' },
    ],
    chart: 'atlas',
    figCaption: 'FIG. 06.1 — SETTLEMENT LATENCY, BEFORE AND AFTER CUTOVER',
    figAlt: 'Chart: p99 settlement time holding near 4.2 seconds, then dropping to 180 milliseconds at the week-26 cutover',
  },
  {
    codename: 'MERIDIAN',
    sector: 'Logistics & mobility',
    duration: '14 months',
    title: 'A national delivery network that replans itself every ninety seconds.',
    body: 'A national parcel carrier planned routes overnight, in batch — by morning the plan was already wrong. We replaced it with a streaming optimizer that replans the entire network every ninety seconds and reroutes drivers mid-shift, using the traffic and load data it just watched happen.',
    stats: [
      { value: 90, suffix: 's', note: 'replanning cadence, was overnight' },
      { value: 96.4, decimals: 1, suffix: '%', note: 'on-time delivery, up from 88.1' },
      { value: 11, prefix: '−', suffix: '%', note: 'total fleet miles driven' },
    ],
    chart: 'meridian',
    figCaption: 'FIG. 06.2 — LIVE REPLANNING TOPOLOGY, ONE HUB OF NINE',
    figAlt: 'Diagram: a routing hub continuously dispatching to depots and ports, with live route pulses',
  },
  {
    codename: 'BOREAL',
    sector: 'Energy & utilities',
    duration: '12 months',
    title: 'Four thousand substations, one source of truth.',
    body: 'A utility’s substations reported into eleven systems that didn’t agree with each other. We consolidated grid telemetry onto one streaming platform — every reading queryable within seconds of hitting the wire, and clean enough to retrain the load forecasts that had been quietly drifting for years.',
    stats: [
      { value: 1.2, decimals: 1, suffix: 'M', note: 'readings ingested per second' },
      { value: 38, prefix: '−', suffix: '%', note: 'day-ahead forecast error' },
      { value: 4200, note: 'substations onboarded' },
    ],
    chart: 'boreal',
    figCaption: 'FIG. 06.3 — TELEMETRY INGEST RAMP, FIRST YEAR',
    figAlt: 'Chart: telemetry ingest volume climbing through the first year, with a dashed forecast continuing past today',
  },
];
