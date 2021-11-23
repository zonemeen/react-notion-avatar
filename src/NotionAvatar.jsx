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
      <Face type={Number(realConfig.face)} />
      <Eye type={Number(realConfig.eye)} />
      <Eyebrow type={Number(realConfig.eyebrow)} />
      <Glass type={Number(realConfig.glass)} />
      <Hair type={Number(realConfig.hair)} />
      <Mouth type={Number(realConfig.mouth)} />
      <Nose type={Number(realConfig.nose)} />
      <Accessory type={Number(realConfig.accessory)} />
      <Beard type={Number(realConfig.beard)} />
      <Detail type={Number(realConfig.detail)} />
    </div>
  )
}

const { number, string, oneOfType } = PropTypes

NotionAvatar.propTypes = {
  accessory: oneOfType([string, number]),
  beard: oneOfType([string, number]),
  detail: oneOfType([string, number]),
  eye: oneOfType([string, number]),
  eyebrow: oneOfType([string, number]),
  face: oneOfType([string, number]),
  glass: oneOfType([string, number]),
  hair: oneOfType([string, number]),
  mouth: oneOfType([string, number]),
  nose: oneOfType([string, number]),
}

export default NotionAvatar
