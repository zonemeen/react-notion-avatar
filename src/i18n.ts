import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { Translations } from './translations'

interface TranslationMap {
  [key: string]: string
}

type TranslateType = {
  id: string
  name: string
  translation: TranslationMap
}

interface Resource {
  [id: string]: TranslateType
}

const resources = Translations.reduce((obj, curr) => {
  obj[curr.id] = curr
  return obj
}, {} as Resource)

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  resources,
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
