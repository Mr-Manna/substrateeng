export const defaultLocale = 'en';

export const locales = ['en', 'es', 'fr', 'de', 'bn', 'hi'] as const;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  bn: 'বাংলা',
  hi: 'हिन्दी',
};

export const localePrefixes: Record<Locale, string> = {
  en: '',
  es: 'es',
  fr: 'fr',
  de: 'de',
  bn: 'bn',
  hi: 'hi',
};
