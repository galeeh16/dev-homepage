import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import id from './locales/id.json'

import './assets/main.css'

const messages = {
  en: en,
  id: id
};

// 2. Create i18n instance with options
const i18n = createI18n({
  locale: 'en', // set locale
  // legacy: true,
  // fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
  // If you need to specify other options, you can set other options
  // ...
});

const app = createApp(App)
app.use(i18n)
app.mount('#app')
