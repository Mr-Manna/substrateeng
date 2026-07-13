import { useEffect, useState } from 'react';
import type { NavItem } from '../../data/site';

interface Props {
  items: NavItem[];
}

export default function MobileNav({ items }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen(!open)}
        className="relative z-[70] inline-flex h-9 w-9 items-center justify-center rounded-full text-ink transition-colors hover:bg-paper-2"
      >
        <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden="true">
          {open ? (
            <path
              d="m5 5 10 10M15 5 5 15"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          ) : (
            <path
              d="M3 6.5h14M3 13.5h14"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          )}
        </svg>
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-[60] flex flex-col bg-paper px-6 pt-24 pb-10"
        >
          <nav aria-label="Primary">
            <ul className="divide-y divide-line border-y border-line">
              {items.map((item, i) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 py-4 text-2xl font-medium text-ink"
                  >
                    <span className="font-mono text-xs text-ink-3">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href="/#contact"
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-6 py-3.5 font-medium text-white dark:text-graphite"
          >
            Start a conversation
          </a>
        </div>
      )}
    </div>
  );
}
