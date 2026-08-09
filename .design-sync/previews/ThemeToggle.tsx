import { ThemeToggle } from 'substrate';

// ThemeToggle has no props — its two looks come from the [data-theme] attribute
// on an ancestor, which is also how the real site drives it. Each cell wraps the
// toggle in the header strip it actually sits in on substrateeng.com.
function HeaderStrip({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-paper text-ink">
      <div className="flex items-center justify-between border-b border-line px-6 py-4">
        <span className="font-display text-lg tracking-tight">Substrate</span>
        <nav className="flex items-center gap-8 text-sm text-ink-2">
          <span>Capabilities</span>
          <span>Industries</span>
          <span>Insights</span>
        </nav>
        {children}
      </div>
    </div>
  );
}

/** Light theme — the toggle offers the moon, the switch into dark. */
export const Light = () => (
  <HeaderStrip>
    <ThemeToggle />
  </HeaderStrip>
);

/** Dark theme — [data-theme="dark"] flips the token scale and the icon swaps to the sun. */
export const Dark = () => (
  <div data-theme="dark">
    <HeaderStrip>
      <ThemeToggle />
    </HeaderStrip>
  </div>
);
