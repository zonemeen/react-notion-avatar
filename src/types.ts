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

export interface BackgroundShape {
  circle?: string
  rounded?: string
  square?: number
}

export interface NotionAvatarProps {
  className?: string
  style?: Style
  shape?: 'circle' | 'rounded' | 'square'
  bgColor?: string
  config?: AvatarConfig
}
