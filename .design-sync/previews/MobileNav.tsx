import { useEffect, useRef } from 'react';
import { MobileNav, navItems } from 'substrate';

// MobileNav is the site's only navigation at every width — the header bar has
// no inline nav row — and its panel is `fixed inset-0`, so it fills the
// viewport when open. cfg.overrides pins this card to a phone-sized viewport,
// which is the tightest case; see .design-sync/config.json.
//
// navItems is the real site navigation, re-exported from the bundle entry rather
// than copied here, so these cells stay true as the nav changes.

// The real mark is Logo.astro, which a React preview can't import; the site
// passes it into MobileNav as a slot. This stands in for it at the same size.
const logo = (
  <span className="inline-flex items-center gap-2.5">
    <span className="h-7 w-7 rounded-[7px] bg-accent" aria-hidden="true" />
    <span className="display text-[1.05rem] tracking-tight">Substrate</span>
  </span>
);

const labels = {
  navAria: 'Primary',
  openMenu: 'Open menu',
  closeMenu: 'Close menu',
  language: 'Language',
  cta: 'Start a conversation',
  home: 'Substrate — home',
};

/** The closed trigger, in the header bar it ships in. */
export const Closed = () => (
  <div className="bg-paper text-ink">
    <div className="flex items-center justify-between border-b border-line px-6 py-4">
      <span className="font-display text-lg tracking-tight">Substrate</span>
      <MobileNav items={navItems} locale="en" labels={labels} logo={logo} />
    </div>
  </div>
);

// The panel only opens on click and there is no `defaultOpen` prop, so the cell
// drives the real component through its own trigger on mount rather than
// reproducing the panel markup.
function OpenOnMount({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    ref.current?.querySelector('button')?.click();
  }, []);
  return <div ref={ref}>{children}</div>;
}

/** The full-screen panel: the mark, numbered top-level sections, expandable sub-navigation, locale switcher. */
export const Open = () => (
  <div className="bg-paper text-ink">
    <div className="flex items-center justify-between border-b border-line px-6 py-4">
      <span className="font-display text-lg tracking-tight">Substrate</span>
      <OpenOnMount>
        <MobileNav items={navItems} locale="en" labels={labels} logo={logo} />
      </OpenOnMount>
    </div>
  </div>
);
