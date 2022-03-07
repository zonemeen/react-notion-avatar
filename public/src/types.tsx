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
