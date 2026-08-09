import type Lenis from 'lenis';

/**
 * Shared handle on the page's smooth-scroll instance.
 *
 * Deliberately its own module rather than a export from motion.ts: consumers
 * that only need to freeze the page (MobileNav) would otherwise pull gsap,
 * ScrollTrigger and Lenis into their hydration path just to read one
 * reference.
 *
 * Null under prefers-reduced-motion, where initMotion() bails out and Lenis
 * never starts. Anything that scrolls or freezes the page must go through
 * this — native scrollTo and `body { overflow: hidden }` don't reach Lenis,
 * which keeps driving the page from its own rAF loop.
 */
let instance: Lenis | null = null;

export function setLenis(l: Lenis | null): void {
  instance = l;
}

export function getLenis(): Lenis | null {
  return instance;
}
