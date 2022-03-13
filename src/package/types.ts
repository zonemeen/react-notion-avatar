type Style = {
  [key: string]: string | number | boolean
}

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

export type ShapeTypes = 'circle' | 'rounded' | 'square'

export interface NotionAvatarProps {
  className?: string
  style?: Style
  shape?: ShapeTypes
  bgColor?: string
  config: AvatarConfig
}

export type AvatarPart = keyof AvatarConfig

declare const getRandomConfig: () => AvatarConfig

declare const NotionAvatar: (props: NotionAvatarProps) => JSX.Element

export { NotionAvatar, getRandomConfig }
