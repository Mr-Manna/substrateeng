import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { setLenis } from './lenis-handle';

gsap.registerPlugin(ScrollTrigger);

export { getLenis } from './lenis-handle';

export { gsap, ScrollTrigger };

export const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let initialized = false;

/**
 * Single motion gate for the whole site. When the user prefers reduced
 * motion, nothing here runs: no Lenis, no reveals, no scroll timelines —
 * content stays fully visible and native scrolling applies.
 */
export function initMotion(): void {
  if (initialized || prefersReducedMotion()) return;
  initialized = true;

  document.documentElement.classList.add('motion-ok');

  const lenis = new Lenis({ lerp: 0.12 });
  setLenis(lenis);
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // Generic scroll reveals: any [data-reveal] rises into place once.
  // Elements sharing a parent [data-reveal-group] stagger together.
  const groups = new Map<Element, HTMLElement[]>();
  const singles: HTMLElement[] = [];

  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    const group = el.closest('[data-reveal-group]');
    if (group) {
      const list = groups.get(group) ?? [];
      list.push(el);
      groups.set(group, list);
    } else {
      singles.push(el);
    }
  });

  const reveal = (targets: HTMLElement[], trigger: Element) => {
    gsap.to(targets, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power3.out',
      stagger: 0.08,
      scrollTrigger: { trigger, start: 'top 85%', once: true },
      onComplete: () => targets.forEach((t) => t.classList.add('is-revealed')),
    });
  };

  groups.forEach((els, group) => reveal(els, group));
  singles.forEach((el) => reveal([el], el));
}
