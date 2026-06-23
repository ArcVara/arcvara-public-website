import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en/translation.json'
import ar from './locales/ar/translation.json'

// Read language from URL before first render so there's no flash
const pathLang = window.location.pathname.split('/')[1]
const initialLang = pathLang === 'ar' ? 'ar' : 'en'

// Pre-apply dir/lang on <html> so the first paint is already RTL-correct
document.documentElement.dir = initialLang === 'ar' ? 'rtl' : 'ltr'
document.documentElement.lang = initialLang

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },
    lng: initialLang,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  })

export default i18n
