import type { Locale } from './config';
import en from './en.json';
import es from './es.json';
import fr from './fr.json';
import de from './de.json';
import bn from './bn.json';
import hi from './hi.json';

const all: Record<Locale, Record<string, unknown>> = { en, es, fr, de, bn, hi };

function getNested(obj: unknown, path: string): unknown {
  return path.split('.').reduce<unknown>((acc, key) => {
    if (acc && typeof acc === 'object' && key in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
}

export function useTranslations(locale: string) {
  const lang = (['en', 'es', 'fr', 'de', 'bn', 'hi'].includes(locale) ? locale : 'en') as Locale;
  const dict = all[lang] ?? all.en;
  const fallback = all.en;

  function t(path: string): string {
    const v = getNested(dict, path);
    if (typeof v === 'string') return v;
    const f = getNested(fallback, path);
    return typeof f === 'string' ? f : path;
  }

  function tRaw<R = unknown>(path: string): R {
    const v = getNested(dict, path);
    if (v !== undefined) return v as R;
    const f = getNested(fallback, path);
    return (f !== undefined ? f : path) as unknown as R;
  }

  return { t, tRaw };
}
