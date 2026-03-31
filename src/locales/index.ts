import { ru } from './ru';
import { en } from './en';
import { uz } from './uz';

export type Locale = 'ru' | 'en' | 'uz';
export type Dictionary = typeof ru;

const dictionaries = { ru, en, uz };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.ru;
}

export const locales: Locale[] = ['ru', 'en', 'uz'];
export const defaultLocale: Locale = 'ru';
