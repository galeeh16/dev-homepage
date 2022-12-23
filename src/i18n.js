import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import id from './locales/id.json'

const messages = {
  en: en,
  id: id
};

// 2. Create i18n instance with options
export const i18n = createI18n({
  locale: 'en', // set locale
  legacy: true,
  messages,
});
