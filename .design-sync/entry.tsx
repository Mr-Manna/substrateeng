// Barrel entry for the design-system bundle.
//
// Substrate is an Astro site, not a published component package, so there is no
// dist/ entry to point the converter at. The three React islands are default
// exports, which the converter's synth-entry (`export * from`) cannot see — this
// file gives them the named exports the bundle needs.
//
// navItems rides along so preview cards can compose MobileNav from the real
// site navigation instead of an inlined copy that would rot.
export { default as ThemeToggle } from '../src/components/islands/ThemeToggle';
export { default as MobileNav } from '../src/components/islands/MobileNav';
export { default as ContactForm } from '../src/components/islands/ContactForm';

export { navItems } from '../src/data/site';
