import React from 'react'
import { ShapeBorderRadius } from './const'
import { getConfig } from './utils'
import Accessory from './accessory'
import Beard from './beard'
import Detail from './detail'
import Eye from './eye'
import Eyebrow from './eyebrow'
import Face from './face'
import Glass from './glass'
import Hair from './hair'
import Mouth from './mouth'
import Nose from './nose'

const NotionAvatar = (props) => {
  const { className, style, shape, bgColor, config } = props
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
  } = getConfig(config)
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
        <Face type={parseInt(face)} />
        <Eye type={parseInt(eye)} />
        <Eyebrow type={parseInt(eyebrow)} />
        <Glass type={parseInt(glass)} />
        <Hair type={parseInt(hair)} />
        <Mouth type={parseInt(mouth)} />
        <Nose type={parseInt(nose)} />
        <Accessory type={parseInt(accessory)} />
        <Beard type={parseInt(beard)} />
        <Detail type={parseInt(detail)} />
      </svg>
    </div>
  )
}

export default NotionAvatar
