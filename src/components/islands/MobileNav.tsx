import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react';
import { localeNames, locales } from '../../i18n/config';
import { getLenis } from '../../scripts/lenis-handle';

interface SubItem {
  label: string;
  href: string;
  description?: string;
}

interface MegaMenuItem {
  label: string;
  href: string;
  items?: {
    label: string;
    href: string;
    items?: SubItem[];
  }[];
}

export interface MobileNavLabels {
  navAria: string;
  openMenu: string;
  closeMenu: string;
  language: string;
  cta: string;
  home: string;
}

interface Props {
  items: MegaMenuItem[];
  locale: string;
  labels: MobileNavLabels;
  /** Logo.astro, handed down as a named slot — the mark is an Astro component
      and this island can't import it, and copying the SVG in would leave two
      copies of the brand to keep in step. */
  logo?: ReactNode;
}

const FOCUSABLE = 'a[href], button:not([disabled])';

/* The panel has to outlive `open` by the length of its exit wipe, so closing
   is two steps: drop `open` (which starts the animation and hands focus back)
   and unmount a beat later. Keep in step with .menu-panel.is-closing's
   animation-duration in Header.astro. */
const EXIT_MS = 280;

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function SubNav({ items, onClose }: { items: SubItem[]; onClose: () => void }) {
  return (
    <ul className="mt-1 mb-3 border-s-2 border-line ps-4 ms-4">
      {items.map((sub) => (
        <li key={sub.href + sub.label}>
          <a
            href={sub.href}
            onClick={onClose}
            className="block py-2 text-sm text-ink-3 transition-colors hover:text-ink"
          >
            {sub.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function MobileNav({ items, locale, labels, logo }: Props) {
  const [open, setOpen] = useState(false);
  // `mounted` trails `open` on the way down so the exit animation has an
  // element to run on; on the way up the two flip in the same batch, which is
  // what lets every effect below keep keying off `open` with the panel already
  // in the DOM.
  const [mounted, setMounted] = useState(false);
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});
  const wrapRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setOpen(false), []);

  const toggle = () => {
    if (open) {
      setOpen(false);
    } else {
      setMounted(true);
      setOpen(true);
    }
  };

  useEffect(() => {
    if (open || !mounted) return;
    const t = window.setTimeout(() => setMounted(false), prefersReducedMotion() ? 0 : EXIT_MS);
    return () => window.clearTimeout(t);
  }, [open, mounted]);

  /* Freeze the page behind the panel. `body { overflow: hidden }` alone is not
     enough here: Lenis drives scrolling from its own rAF loop and keeps going
     straight through it, so the page slides around under the open menu.
     Hiding the overflow also takes the scrollbar away, which widens the
     viewport — --menu-gutter hands that width to the two things that would
     otherwise visibly jump sideways, the body and the fixed header.

     Keyed to `mounted` rather than `open`: releasing the lock at the start of
     the exit wipe would hand the scrollbar back — and take the gutter padding
     away — while the panel is still on screen to show the jump. */
  useEffect(() => {
    if (!mounted) return;

    const lenis = getLenis();
    lenis?.stop();

    const { body, documentElement: root } = document;
    const gutter = window.innerWidth - root.clientWidth;
    const prevOverflow = body.style.overflow;
    const prevPadding = body.style.paddingInlineEnd;
    body.style.overflow = 'hidden';
    if (gutter > 0) {
      body.style.paddingInlineEnd = `${gutter}px`;
      root.style.setProperty('--menu-gutter', `${gutter}px`);
    }

    // Header.astro watches this: the collapsed bar must not expand on hover or
    // focus while the panel is up, because the close button rides in it and
    // would slide out from under the pointer.
    root.setAttribute('data-menu-open', '');

    return () => {
      body.style.overflow = prevOverflow;
      body.style.paddingInlineEnd = prevPadding;
      root.style.removeProperty('--menu-gutter');
      root.removeAttribute('data-menu-open');
      lenis?.start();
    };
  }, [mounted]);

  /* Escape closes; Tab is trapped inside the panel. Without the trap, tabbing
     walks out of the panel and into the page underneath it, which is still
     rendered and still full of links the user can't see. */
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== 'Tab') return;

      const panel = panelRef.current;
      const trigger = buttonRef.current;
      if (!panel || !trigger) return;

      // The toggle sits outside the panel but belongs to the same widget — it
      // is the close button, so it anchors one end of the loop. Collapsed
      // groups stay in the DOM now that they animate open, so their links are
      // still matched here — the [inert] filter drops them, and without it the
      // loop's last stop could be a link the browser refuses to focus.
      const stops = [
        trigger,
        ...Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE)),
      ].filter((el) => !el.closest('[inert]'));
      const first = stops[0];
      const last = stops[stops.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (e.shiftKey && (active === first || !active || !stops.includes(active))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, close]);

  /* Move focus into the panel on open and hand it back to the toggle on close,
     so keyboard and screen-reader users don't get dropped at the top of the
     document. */
  const wasOpen = useRef(false);
  useEffect(() => {
    if (open) {
      panelRef.current?.querySelector<HTMLElement>(FOCUSABLE)?.focus();
    } else if (wasOpen.current) {
      buttonRef.current?.focus();
    }
    wasOpen.current = open;
  }, [open]);

  /* Safety net against the worst failure mode here: the panel getting hidden
     by CSS while its scroll lock stays clamped on the body, leaving the page
     frozen with nothing on screen to unfreeze it. The toggle renders at every
     width today, so this should never fire — it costs two listeners to make
     sure a future breakpoint can't reintroduce a locked page. */
  useEffect(() => {
    if (!open) return;
    const onResize = () => {
      if (wrapRef.current && wrapRef.current.offsetParent === null) close();
    };
    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('orientationchange', onResize);
    };
  }, [open, close]);

  const toggleExpanded = (idx: number) => {
    setExpanded((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div className="mobile-nav" ref={wrapRef}>
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? labels.closeMenu : labels.openMenu}
        onClick={toggle}
        data-open={open ? '' : undefined}
        className="menu-toggle relative z-[70] inline-flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-paper-2"
      >
        {/* Two permanent strokes that rotate into the X. Swapping one path's
            `d` for another's gives the browser nothing to interpolate, so the
            icon used to change between frames with no motion at all. */}
        <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden="true">
          <path
            className="menu-icon-bar"
            d="M3 6.5h14"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            className="menu-icon-bar"
            d="M3 13.5h14"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {mounted && (
        <div
          id="mobile-menu"
          ref={panelRef}
          inert={!open}
          className={`menu-panel fixed inset-0 z-[60] h-[100dvh] overflow-y-auto overscroll-contain bg-paper pb-[max(2.5rem,env(safe-area-inset-bottom))] ${
            open ? 'is-open' : 'is-closing'
          }`}
        >
          {/* An inner column rather than flex on the scroller itself: a flex
              container's overflowing content can't be scrolled back to on some
              mobile browsers once an expanded group makes it taller than the
              viewport. container-x is the site's own gutter, so the mark, the
              list and the close button in the bar above all land on the same
              vertical lines. */}
          <div className="container-x flex min-h-full flex-col">
            {/* Mirrors the header bar's height — including the collapsed strip,
                which Header.astro drives through .menu-logo-row — so the mark
                sits exactly where the header's mark was and doesn't jump when
                the panel opens over it. */}
            <div className="menu-logo-row flex h-16 shrink-0 items-center md:h-[4.5rem]">
              {logo && (
                <a href="/" onClick={close} className="text-ink" aria-label={labels.home}>
                  {logo}
                </a>
              )}
            </div>

            <nav aria-label={labels.navAria} className="mt-4 md:mt-8">
              <ul className="divide-y divide-line border-y border-line">
                {items.map((item, i) => (
                  <li
                    key={item.href}
                    className="menu-row menu-stagger"
                    style={{ '--i': i } as CSSProperties}
                  >
                    {item.items ? (
                      <>
                        <button
                          type="button"
                          onClick={() => toggleExpanded(i)}
                          aria-expanded={!!expanded[i]}
                          aria-controls={`menu-group-${i}`}
                          className="flex w-full items-center justify-between gap-3 py-4 text-start text-xl font-medium text-ink sm:gap-4 sm:text-2xl"
                        >
                          <span className="flex min-w-0 items-baseline gap-3 sm:gap-4">
                            <span className="menu-index shrink-0 font-mono text-xs text-ink-3">
                              {String(i + 1).padStart(2, '0')}
                            </span>
                            <span className="menu-label min-w-0 break-words">{item.label}</span>
                          </span>
                          <svg
                            className={`menu-chevron h-4 w-4 shrink-0 text-ink-3 transition-transform duration-300 ${expanded[i] ? 'rotate-180' : ''}`}
                            viewBox="0 0 16 16"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path d="M4 6 8 10 12 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>
                        {/* Stays mounted so the open and close can both be
                            animated; `inert` is what actually takes a
                            collapsed group out of reach of tab and screen
                            readers, since the row is only visually clipped. */}
                        <div
                          id={`menu-group-${i}`}
                          className="menu-sub"
                          data-expanded={expanded[i] ? '' : undefined}
                          inert={!expanded[i]}
                        >
                          <div className="menu-sub-clip">
                            <div className="pb-3 sm:grid sm:grid-cols-2 sm:gap-x-8 md:grid-cols-3 xl:grid-cols-4">
                              {item.items.map((col) => (
                                <div key={col.href + col.label} className="break-words">
                                  <a
                                    href={col.href}
                                    onClick={close}
                                    className="block py-2 text-sm font-semibold text-ink transition-colors hover:text-accent"
                                  >
                                    {col.label}
                                  </a>
                                  {col.items && <SubNav items={col.items} onClose={close} />}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <a
                        href={item.href}
                        onClick={close}
                        className="flex items-baseline gap-3 py-4 text-xl font-medium text-ink sm:gap-4 sm:text-2xl"
                      >
                        <span className="menu-index shrink-0 font-mono text-xs text-ink-3">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="menu-label min-w-0 break-words">{item.label}</span>
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Locale switcher in mobile menu. Carries on the same stagger the
                nav rows use, so the tail of the panel settles last. */}
            <div className="menu-stagger mt-8" style={{ '--i': items.length } as CSSProperties}>
              <p className="kicker text-ink-3 mb-3">{labels.language}</p>
              <div className="flex flex-wrap gap-2">
                {locales.map((l) => (
                  <a
                    key={l}
                    href={l === 'en' ? '/' : `/${l}/`}
                    onClick={close}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                      l === locale
                        ? 'border-accent bg-accent text-white'
                        : 'border-line-2 text-ink-2 hover:border-ink-2 hover:text-ink'
                    }`}
                    hrefLang={l}
                    aria-current={l === locale ? 'true' : undefined}
                  >
                    {localeNames[l]}
                  </a>
                ))}
              </div>
            </div>

            <a
              href="/contact"
              onClick={close}
              style={{ '--i': items.length + 1 } as CSSProperties}
              className="menu-stagger mt-6 inline-flex items-center justify-center rounded-full bg-accent px-6 py-3.5 text-center font-medium text-white sm:self-start dark:text-graphite"
            >
              {labels.cta}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
