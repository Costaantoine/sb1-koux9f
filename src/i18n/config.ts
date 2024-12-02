import { InitOptions } from 'i18next';

export const defaultNS = 'translation';

export const SUPPORTED_LANGUAGES = {
  en: { name: 'English', dir: 'ltr', flag: '🇬🇧' },
  fr: { name: 'Français', dir: 'ltr', flag: '🇫🇷' },
  pt: { name: 'Português', dir: 'ltr', flag: '🇵🇹' }
} as const;

export type SupportedLanguage = keyof typeof SUPPORTED_LANGUAGES;

export const i18nConfig: InitOptions = {
  fallbackLng: 'en',
  supportedLngs: Object.keys(SUPPORTED_LANGUAGES),
  defaultNS,
  fallbackNS: defaultNS,
  interpolation: {
    escapeValue: false
  },
  detection: {
    order: ['path', 'navigator'],
    lookupFromPathIndex: 0,
    checkWhitelist: true
  }
};