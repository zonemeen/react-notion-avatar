import { AvatarConfigCount } from './const'
import { AvatarConfig } from './types'

export const getConfig = (userConfig = {}): AvatarConfig => {
  const config: AvatarConfig = Object.keys(AvatarConfigCount).reduce(
    (prev, next) =>
      Object.assign(prev, {
        [next]:
          userConfig[next] ||
          Math.floor(Math.random() * (AvatarConfigCount[next] + 1)),
      }),
    {}
  )
  // for harmony
  config.beard = 0
  config.detail = 0
  config.accessory = 0
  return config
}
