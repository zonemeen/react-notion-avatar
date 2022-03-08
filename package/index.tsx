import React from 'react'
import { ShapeBorderRadius } from './const'
import Accessory from './accessory/index'
import Beard from './beard/index'
import Detail from './detail/index'
import Eye from './eye/index'
import Eyebrow from './eyebrow/index'
import Face from './face/index'
import Glass from './glass/index'
import Hair from './hair/index'
import Mouth from './mouth/index'
import Nose from './nose/index'
import { NotionAvatarProps, AvatarConfig } from './types'

const NotionAvatar = (props: NotionAvatarProps) => {
  const { className, style, shape = 'circle', bgColor, config } = props
  const {
    face,
    eye,
    eyebrow,
    glass,
    hair,
    mouth,
    nose,
    accessory,
    beard,
    detail,
  } = config as AvatarConfig
  const borderRadius = ShapeBorderRadius[shape]
  return (
    <div
      className={className}
      style={{
        backgroundColor:
          shape in ShapeBorderRadius ? bgColor : 'rgba(255, 0, 0, 0)',
        overflow: 'hidden',
        borderRadius,
        ...style,
      }}
    >
      <svg
        viewBox="0 0 1080 1080"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Face type={face} />
        <Eye type={eye} />
        <Eyebrow type={eyebrow} />
        <Glass type={glass} />
        <Hair type={hair} />
        <Mouth type={mouth} />
        <Nose type={nose} />
        <Accessory type={accessory} />
        <Beard type={beard} />
        <Detail type={detail} />
      </svg>
    </div>
  )
}

export { NotionAvatar }

export { getRandomConfig } from './utils'
