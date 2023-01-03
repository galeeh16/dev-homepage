import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import id from './locales/id.json'
import jp from './locales/jp.json'
import th from './locales/th.json'
import de from './locales/de.json'
import kr from './locales/kr.json'

const messages = {
  en: en,
  id: id,
  jp: jp,
  th: th,
  de: de,
  kr: kr,
};

// 2. Create i18n instance with options
export const i18n = createI18n({
  locale: 'en', // set locale
  legacy: true,
  messages,
});
