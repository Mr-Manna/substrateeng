# Substrate — how to build with this design system

Substrate is a **style system first**: a token layer, a type system, and a Tailwind v4
utility vocabulary lifted from substrateeng.com. It ships only three React components
(`ThemeToggle`, `MobileNav`, `ContactForm`). Build screens out of **semantic utility
classes**, not out of a component library — that is the idiom here, not a workaround.

## Setup

No provider and no wrapper component. Load `styles.css` (it `@import`s the fonts and
the compiled utility/token sheet) and everything resolves.

Theme is an **attribute, not a class**: `data-theme="dark"` on any ancestor — normally
`<html>` — flips the whole token scale. Tailwind's `dark:` variant is wired to it
(`&:where([data-theme='dark'], [data-theme='dark'] *)`), so `dark:` works as expected.
`[dir="rtl"]` is likewise a real variant (`rtl:`) and swaps the sans/display families to
Noto Sans Arabic. **Prefer logical properties** — `ps-4`, `me-2`, `border-s` — over
`pl-4`/`mr-2`; the site ships in seven locales including Arabic.

## The color vocabulary

Every name below exists as `bg-*`, `text-*`, and `border-*`. Never invent a color, and
never reach for stock Tailwind palettes (`slate-800`, `blue-500`) — the theme deletes
them (`--color-*: initial`), so they will not resolve.

| Family | Names | Use |
|---|---|---|
| Surface | `paper`, `paper-2` | Page background and raised/inset panels. Flip with theme. |
| Text | `ink`, `ink-2`, `ink-3` | Primary, secondary, tertiary. Flip with theme. |
| Rules | `line`, `line-2` | Hairlines and stronger dividers. Flip with theme. |
| Accent | `accent`, `accent-hover`, `accent-soft` | The `#2447f5` brand blue; `accent-soft` is the tinted chip/badge background. |
| Graphite | `graphite`, `graphite-2`, `graphite-line`, `graphite-fg`, `graphite-fg-2`, `accent-bright` | **Always dark, in both themes.** This is the inverted-section palette — use it for full-bleed dark bands, and pair `graphite`/`graphite-2` backgrounds with `graphite-fg`/`graphite-fg-2` text and `accent-bright` for links. |

## Typography

Three families: `font-display` (Archivo Variable — headlines), `font-sans` (Instrument
Sans Variable — body, the default) and `font-mono` (IBM Plex Mono — labels, counters,
kickers). Two classes carry the house voice and should be used instead of hand-rolling
their properties:

- `.display` — expanded Archivo at 118% width, 440 weight, tight leading, balanced
  wrapping. Every headline. Pair with a size utility: `<h1 class="display text-5xl">`.
- `.kicker` — uppercase mono eyebrow at 0.8125rem with wide tracking. Substrate labels
  sections with a numbered kicker: `<p class="kicker text-accent">03 — Capabilities</p>`.

`.container-x` is the page container: centered, `max-w-[95rem]`, responsive inline
padding. Use it for every full-width section's inner wrapper.

## Where the truth lives

Read the design system's `styles.css` and the `_ds_bundle.css` it imports before
styling — the `:root` and `[data-theme='dark']` blocks list the raw `--c-*` tokens, and
the utility layer is the complete class inventory. For the three components, read their
`.prompt.md` and `.d.ts` in `components/islands/<Name>/`.

## An idiomatic section

```jsx
<section className="bg-graphite py-24">
  <div className="container-x">
    <p className="kicker text-accent-bright">02 — Reliability</p>
    <h2 className="display mt-4 text-4xl text-graphite-fg">Systems that hold under load</h2>
    <p className="mt-5 max-w-xl text-graphite-fg-2">
      Consensus, replication, and partition-tolerant design — proven at scale.
    </p>
    <a href="/capabilities"
       className="mt-8 inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent-hover">
      See our capabilities
    </a>
  </div>
</section>
```

The same section on a light band: swap `bg-graphite` → `bg-paper`, `text-graphite-fg` →
`text-ink`, `text-graphite-fg-2` → `text-ink-2`, `text-accent-bright` → `text-accent`.
