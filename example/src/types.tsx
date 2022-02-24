type Style = {
  [key: string]: string | number | boolean
}

export type Sex = 'man' | 'woman'
export type EarSize = 'small' | 'big'
export type HairStyle =
  | 'normal'
  | 'thick'
  | 'mohawk'
  | 'womanLong'
  | 'womanShort'
export type HairStyleMan = 'normal' | 'thick' | 'mohawk'
export type HairStyleWoman = 'normal' | 'womanLong' | 'womanShort'
export type HatStyle = 'beanie' | 'turban' | 'none'
export type EyeStyle = 'circle' | 'oval' | 'smile'
export type GlassesStyle = 'round' | 'square' | 'none'
export type NoseStyle = 'short' | 'long' | 'round'
export type MouthStyle = 'laugh' | 'smile' | 'peace'
export type ShirtStyle = 'hoody' | 'short' | 'polo'
export type EyeBrowStyle = 'up' | 'upWoman'
export type ShapeTypes = 'circle' | 'rounded' | 'square'

export interface AvatarConfig {
  face: number
  eye: number
  eyebrow: number
  glass: number
  hair: number
  mouth: number
  nose: number
  accessory: number
  beard: number
  detail: number
}

export type AvatarPart = keyof AvatarConfig

export interface AvatarFullConfig extends AvatarConfig {
  eyeBrowStyle?: EyeBrowStyle
}

export interface AppComponentState {
  currentTab: string
  config: AvatarFullConfig
  theme: 'light' | 'dark'
}

export type Panel =
  | 'faceColorPanelOpen'
  | 'hairColorPanelOpen'
  | 'hatColorPanelOpen'
  | 'shirtColorPanelOpen'
  | 'bgColorPanelOpen'

export interface SingleComponentProps {
  updateConfig: (AvatarFullConfig) => void
  config: AvatarFullConfig
}

export interface SingleComponentState {
  bgShape: 'circle' | 'rounded' | 'square'
  size: number
  faceColorPanelOpen: boolean
  hairColorPanelOpen: boolean
  hatColorPanelOpen: boolean
  shirtColorPanelOpen: boolean
  bgColorPanelOpen: boolean
}
