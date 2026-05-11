import { enDictionary } from "./dictionaries/en";
import { thDictionary } from "./dictionaries/th";
import type { Locale } from "./locales";

const dictionaries = {
  en: enDictionary,
  th: thDictionary,
} as const;

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
