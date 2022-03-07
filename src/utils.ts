import { AvatarConfigCount } from './const'
import { AvatarConfig, AvatarPart } from './types'

export const getRandomConfig = (): AvatarConfig => {
  const randomConfig = Object.keys(AvatarConfigCount).reduce(
    (prev, next) =>
      Object.assign(prev, {
        [next]: Math.floor(
          Math.random() * (AvatarConfigCount[next as AvatarPart] + 1)
        ),
      }),
    {} as Record<keyof AvatarConfig, number>
  )
  randomConfig.detail = 0
  randomConfig.accessory = 0
  randomConfig.beard = 0
  return randomConfig
}
