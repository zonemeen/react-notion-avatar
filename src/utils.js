import { AvatarConfigCount } from './const'

export const getConfig = (userConfig = {}) => {
  const config = Object.keys(AvatarConfigCount).reduce(
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
