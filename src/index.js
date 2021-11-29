import React from 'react'
import PropTypes from 'prop-types'

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

const getRandomNumber = (number) => {
  return Math.floor(Math.random() * (number + 1))
}

const getConfig = (userConfig = {}) => {
  const config = {}

  config.accessory = userConfig.accessory || 0
  config.beard = userConfig.beard || 0
  config.detail = userConfig.detail || 0
  config.eye = userConfig.eye || getRandomNumber(10)
  config.eyebrow = userConfig.eyebrow || getRandomNumber(10)
  config.face = userConfig.face || getRandomNumber(10)
  config.glass = userConfig.glass || getRandomNumber(10)
  config.hair = userConfig.hair || getRandomNumber(30)
  config.mouth = userConfig.mouth || getRandomNumber(10)
  config.nose = userConfig.nose || getRandomNumber(10)

  return config
}

const NotionAvatar = (props) => {
  const realConfig = getConfig(props.config)
  return (
    <div {...props}>
      <svg
        viewBox="0 0 1080 1080"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Face type={parseInt(realConfig.face)} />
        <Eye type={parseInt(realConfig.eye)} />
        <Eyebrow type={parseInt(realConfig.eyebrow)} />
        <Glass type={parseInt(realConfig.glass)} />
        <Hair type={parseInt(realConfig.hair)} />
        <Mouth type={parseInt(realConfig.mouth)} />
        <Nose type={parseInt(realConfig.nose)} />
        <Accessory type={parseInt(realConfig.accessory)} />
        <Beard type={parseInt(realConfig.beard)} />
        <Detail type={parseInt(realConfig.detail)} />
      </svg>
    </div>
  )
}

const { number } = PropTypes

NotionAvatar.propTypes = {
  accessory: number,
  beard: number,
  detail: number,
  eye: number,
  eyebrow: number,
  face: number,
  glass: number,
  hair: number,
  mouth: number,
  nose: number,
}

export default NotionAvatar
