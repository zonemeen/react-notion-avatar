import { AvatarConfigCount } from './const'
import { AvatarConfig, AvatarPart } from './types'

export const getRandomConfig = (): AvatarConfig => {
  return Object.keys(AvatarConfigCount).reduce(
    (prev, next) =>
      Object.assign(prev, {
        [next]: Math.floor(
          Math.random() * (AvatarConfigCount[next as AvatarPart] + 1)
        ),
      }),
    {} as Record<keyof AvatarConfig, number>
  )
}
