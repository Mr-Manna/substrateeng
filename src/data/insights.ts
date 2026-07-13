export interface Insight {
  title: string;
  category: string;
  date: string;
  readingTime: string;
  /** key into the glyph SVG map in Insights.astro */
  glyph: string;
  glyphAlt: string;
}

export const featuredInsight = {
  ref: 'FIELD NOTE 047',
  title: 'Anatomy of a 3.4-second request.',
  excerpt:
    'We walked one slow checkout through eleven services and five owning teams. The bottleneck wasn’t code — it was a lock nobody owned. On reading traces as org charts, and what to do when the two disagree.',
  date: 'JUL 2026',
  readingTime: '14 min',
};

export const insights: Insight[] = [
  {
    title: 'Strangler figs, not big bangs: retiring a mainframe in slices',
    category: 'Architecture',
    date: 'JUN 2026',
    readingTime: '12 min',
    glyph: 'strangler',
    glyphAlt: 'Sketch: a block divided into slices with an arrow extracting one',
  },
  {
    title: 'Ninety-second replanning: streaming optimization in production',
    category: 'Systems',
    date: 'MAY 2026',
    readingTime: '9 min',
    glyph: 'streaming',
    glyphAlt: 'Sketch: a hub node dispatching to three destinations',
  },
  {
    title: 'Evals before vibes: shipping LLM features you can regress-test',
    category: 'AI',
    date: 'APR 2026',
    readingTime: '11 min',
    glyph: 'evals',
    glyphAlt: 'Sketch: a grid of test cells with one checked',
  },
  {
    title: 'The on-call rotation is a design review',
    category: 'Operations',
    date: 'MAR 2026',
    readingTime: '7 min',
    glyph: 'oncall',
    glyphAlt: 'Sketch: a pager heartbeat trace',
  },
  {
    title: 'Schema migrations at 40,000 writes per second',
    category: 'Data',
    date: 'FEB 2026',
    readingTime: '10 min',
    glyph: 'migration',
    glyphAlt: 'Sketch: stacked data layers with an upward migration arrow',
  },
];
