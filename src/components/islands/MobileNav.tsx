import { useEffect, useState } from 'react';
import type { MegaMenuItem } from '../../data/site';

interface Props {
  items: MegaMenuItem[];
}

function SubNav({ items, onClose }: { items: { label: string; href: string }[]; onClose: () => void }) {
  return (
    <ul className="mt-1 mb-3 border-l-2 border-line pl-4 ml-4">
      {items.map((sub) => (
        <li key={sub.href + sub.label}>
          <a
            href={sub.href}
            onClick={onClose}
            className="block py-1.5 text-sm text-ink-3 transition-colors hover:text-ink"
          >
            {sub.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function MobileNav({ items }: Props) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

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

  const toggleExpanded = (idx: number) => {
    setExpanded((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const close = () => setOpen(false);

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
          className="fixed inset-0 z-[60] flex flex-col bg-paper px-6 pt-24 pb-10 overflow-y-auto"
        >
          <nav aria-label="Primary">
            <ul className="divide-y divide-line border-y border-line">
              {items.map((item, i) => (
                <li key={item.href}>
                  {item.items ? (
                    <>
                      <button
                        type="button"
                        onClick={() => toggleExpanded(i)}
                        className="flex w-full items-center justify-between gap-4 py-4 text-left text-2xl font-medium text-ink"
                      >
                        <span className="flex items-baseline gap-4">
                          <span className="font-mono text-xs text-ink-3">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          {item.label}
                        </span>
                        <svg
                          className={`h-4 w-4 shrink-0 text-ink-3 transition-transform duration-200 ${expanded[i] ? 'rotate-180' : ''}`}
                          viewBox="0 0 16 16"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path d="M4 6 8 10 12 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                      {expanded[i] && (
                        <div className="pb-3">
                          {item.items.map((col) => (
                            <div key={col.href + col.label}>
                              <a
                                href={col.href}
                                onClick={close}
                                className="block py-1.5 text-sm font-semibold text-ink hover:text-accent"
                              >
                                {col.label}
                              </a>
                              {col.items && <SubNav items={col.items} onClose={close} />}
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.href}
                      onClick={close}
                      className="flex items-baseline gap-4 py-4 text-2xl font-medium text-ink"
                    >
                      <span className="font-mono text-xs text-ink-3">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <a
            href="/#contact"
            onClick={close}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-6 py-3.5 font-medium text-white dark:text-graphite"
          >
            Start a conversation
          </a>
        </div>
      )}
    </div>
  );
}
