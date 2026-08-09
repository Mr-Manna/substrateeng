// Builds the design-system stylesheet that ships to claude.ai/design.
//
// Source of truth is src/styles/global.css — the same file the site builds from.
// Two deliberate differences:
//   1. The @fontsource @import lines are stripped. Those resolve to url(./files/*.woff2)
//      relative to node_modules, which cannot survive the copy into the bundle. The
//      converter ships the same families itself via cfg.extraFonts, which rewrites the
//      urls into fonts/.
//   2. A @source inline() safelist is added. Tailwind v4 only emits utilities it finds
//      in the scanned source, so scanning src/ alone would ship exactly the classes this
//      site happens to use today. The design agent writes new markup, so the full brand
//      colour/typography vocabulary is force-generated.
import { execFileSync } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '..');
const CACHE = resolve(HERE, '.cache');
const ENTRY = resolve(CACHE, 'ds-entry.css');
const OUT = resolve(CACHE, 'substrate.css');

// Every colour in the @theme block, so bg-/text-/border-* all resolve.
const COLORS = [
  'paper', 'paper-2', 'ink', 'ink-2', 'ink-3', 'line', 'line-2',
  'accent', 'accent-hover', 'accent-soft',
  'graphite', 'graphite-2', 'graphite-line', 'graphite-fg', 'graphite-fg-2',
  'accent-bright', 'white', 'black',
].join(',');

// Scanning src/ alone yields only the variants this site happens to use today
// (`lg:hidden` exists, `lg:grid-cols-3` does not). The design agent writes new
// markup against a STATIC stylesheet — anything absent here silently does
// nothing — so the common layout scales are force-generated too.
const SP = '{0,1,2,3,4,5,6,8,10,12,16,20,24,32}';
const BP = '{sm:,md:,lg:,xl:}';
const SAFELIST = `
/* injected by .design-sync/build-css.mjs — see the header comment there */
@source "${resolve(ROOT, 'src').replace(/\\/g, '/')}";

/* brand vocabulary */
@source inline("{bg,text,border,ring,fill,stroke,divide,outline,decoration}-{${COLORS}}");
@source inline("{hover:,focus:,focus-visible:,dark:,group-hover:,${BP.slice(1, -1)}}{bg,text,border}-{${COLORS}}");
@source inline("font-{display,sans,mono}");
@source inline("{display,kicker,container-x}");

/* layout primitives, responsive */
@source inline("${BP}{block,inline-block,flex,inline-flex,grid,hidden}");
@source inline("${BP}{flex-row,flex-col,items-start,items-center,items-end,justify-start,justify-center,justify-between,justify-end,flex-wrap}");
@source inline("${BP}grid-cols-{1,2,3,4,5,6,12}");
@source inline("${BP}col-span-{1,2,3,4,5,6,12}");
@source inline("${BP}{gap,gap-x,gap-y}-${SP}");
@source inline("${BP}{p,px,py,pt,pb,ps,pe}-${SP}");
@source inline("${BP}{m,mx,my,mt,mb,ms,me}-${SP}");
@source inline("${BP}text-{xs,sm,base,lg,xl,2xl,3xl,4xl,5xl,6xl,7xl}");
@source inline("${BP}text-{start,center,end,left,right}");
@source inline("max-w-{xs,sm,md,lg,xl,2xl,3xl,4xl,5xl,6xl,7xl,prose,full,none}");
@source inline("rounded{,-sm,-md,-lg,-xl,-2xl,-3xl,-full}");
@source inline("{border,border-t,border-b,border-s,border-e,border-x,border-y}{,-2,-4}");
@source inline("font-{normal,medium,semibold,bold}");
@source inline("{w,h}-full");
`;

mkdirSync(CACHE, { recursive: true });

const global = readFileSync(resolve(ROOT, 'src/styles/global.css'), 'utf8');
const stripped = global
  .split('\n')
  .filter((l) => !/^@import\s+['"]@fontsource/.test(l))
  .join('\n');

if (!stripped.includes("@import 'tailwindcss'")) {
  console.error('[CSS] global.css no longer @imports tailwindcss — build-css.mjs needs updating');
  process.exit(1);
}
writeFileSync(ENTRY, stripped.replace("@import 'tailwindcss';", `@import 'tailwindcss';\n${SAFELIST}`));

// Invoke the CLI's .mjs directly rather than the .bin shim — spawning a .cmd
// wrapper fails with EINVAL on Windows.
execFileSync(
  process.execPath,
  [resolve(ROOT, '.ds-sync/node_modules/@tailwindcss/cli/dist/index.mjs'), '-i', ENTRY, '-o', OUT, '--minify'],
  { stdio: 'inherit', cwd: ROOT },
);
console.error(`[CSS] wrote ${OUT}`);
