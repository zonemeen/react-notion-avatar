import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
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
    select: string
  }
}

type IdType = 'en-US' | 'zh-CN'

type Resource = {
  [id in IdType]: TranslateType
}

const resources = Translations.reduce((obj, curr) => {
  obj[curr.id as IdType] = curr
  return obj
}, {} as Resource)

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en-US',
    resources,
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
