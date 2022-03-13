import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { Translations } from './translations'

type TranslateType = {
  id: string
  name: string
  translation: {
    'tip.Face': string
    'tip.Eye': string
    'tip.Eyebrow': string
    'tip.Glass': string
    'tip.Hair': string
    'tip.Mouth': string
    'tip.Nose': string
    'tip.Beard': string
    'tip.Accessory': string
    'tip.Detail': string
    'tip.Shape': string
    'tip.Flip': string
    'tip.Palette': string
    'tip.Random': string
    'tip.Config': string
    'tip.Download': string
  }
}

export type LangType = 'en' | 'zh'

type Resource = {
  [id in LangType]: TranslateType
}

const resources = Translations.reduce((obj, curr) => {
  obj[curr.id as LangType] = curr
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
