import { AvatarConfigCount } from './const'
import { AvatarConfig } from './types'

export const getConfig = (userConfig = {}): AvatarConfig => {
  return Object.keys(AvatarConfigCount).reduce(
    (prev, next) =>
      Object.assign(prev, {
        [next]:
          userConfig[next] ||
          Math.floor(Math.random() * (AvatarConfigCount[next] + 1)),
      }),
    {} as Record<keyof AvatarConfig, number>
  )
}
