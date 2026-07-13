export const site = {
  name: 'Substrate',
  tagline: 'Engineering the layer beneath modern business.',
  email: 'hello@substrate.engineering',
} as const;

export interface NavItem {
  label: string;
  href: string;
}

/**
 * Primary navigation. Links target homepage sections for now; when inner
 * pages ship, swap hrefs to routes without touching the components.
 */
export const navItems: NavItem[] = [
  { label: 'Capabilities', href: '/#capabilities' },
  { label: 'Industries', href: '/#industries' },
  { label: 'Technology', href: '/#technology' },
  { label: 'Process', href: '/#process' },
  { label: 'Work', href: '/#work' },
  { label: 'Insights', href: '/#insights' },
];
