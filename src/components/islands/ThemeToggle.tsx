/** Theme switch. Icons swap via [data-theme] CSS so no hydration state is needed. */
export default function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* private mode */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      className="inline-flex h-9 w-9 items-center justify-center rounded-full text-ink-2 transition-colors hover:bg-paper-2 hover:text-ink"
    >
      {/* sun — shown in dark mode */}
      <svg
        viewBox="0 0 20 20"
        fill="none"
        className="hidden h-[18px] w-[18px] dark:block"
        aria-hidden="true"
      >
        <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M10 1.5v2M10 16.5v2M18.5 10h-2M3.5 10h-2M16 4l-1.4 1.4M5.4 14.6 4 16M16 16l-1.4-1.4M5.4 5.4 4 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      {/* moon — shown in light mode */}
      <svg
        viewBox="0 0 20 20"
        fill="none"
        className="h-[18px] w-[18px] dark:hidden"
        aria-hidden="true"
      >
        <path
          d="M17 11.5A7.5 7.5 0 0 1 8.5 3 7.5 7.5 0 1 0 17 11.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
