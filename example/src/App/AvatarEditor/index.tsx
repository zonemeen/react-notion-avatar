import React, { Component, useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { getRandomConfig } from '../../../../src/index'
import { AvatarConfigCount } from '../../../../src/const'
import { AvatarConfig } from '../../types'

import Accessory from '../../../../src/accessory/index'
import Beard from '../../../../src/beard/index'
import Detail from '../../../../src/detail/index'
import Eye from '../../../../src/eye/index'
import Eyebrow from '../../../../src/eyebrow/index'
import Face from '../../../../src/face/index'
import Glass from '../../../../src/glass/index'
import Hair from '../../../../src/hair/index'
import Mouth from '../../../../src/mouth/index'
import Nose from '../../../../src/nose/index'

import SectionWrapper from './SectionWrapper/index'

import './index.scss'

type EditorProps = {
  config: AvatarConfig
  shape?: string
  updateConfig?: () => void
  updateShape?: () => void
  updateBgColor?: () => void
  download?: () => void
}

const AvatarEditor = ({
  config,
  shape,
  updateConfig,
  updateShape,
  updateBgColor,
  download,
}: EditorProps) => {
  const shapes = ['circle', 'rounded', 'square']
  const [isCodeShow, setIsCodeShow] = useState('false')
  const switchConfig = (type, currentIdx) => {
    const optLength = AvatarConfigCount[type]
    const newIdx = (currentIdx + 1) % optLength
    updateConfig(type, newIdx)
  }
  return (
    <div className="AvatarEditor rounded-full px-3 py-2 flex items-center">
      {/* Accessory */}
      <SectionWrapper
        className="w-8 h-8 rounded-full p-2 mx-2"
        tip="Face"
        switchConfig={switchConfig('accessory', config.accessory)}
      >
        <Accessory type={config.accessory} />
      </SectionWrapper>
      {/* Face */}
      <SectionWrapper
        className="w-8 h-8 rounded-full p-2 mx-2"
        tip="Face"
        switchConfig={this.switchConfig.bind(
          this,
          'faceColor',
          config.faceColor
        )}
      >
        <Face color={config.faceColor} />
      </SectionWrapper>
      {/* Hair style */}
      <SectionWrapper
        className="w-8 h-8 rounded-full p-2 mx-2"
        tip="Hair"
        switchConfig={this.switchConfig.bind(
          this,
          'hairStyle',
          config.hairStyle
        )}
      >
        <Hair style={config.hairStyle} color="#fff" colorRandom />
      </SectionWrapper>
      {/* Hat style */}
      <SectionWrapper
        className="w-8 h-8 rounded-full p-2 mx-2"
        tip="Hat"
        switchConfig={this.switchConfig.bind(this, 'hatStyle', config.hatStyle)}
      >
        <Hat style={config.hatStyle} color="#fff" />
      </SectionWrapper>
      {/* Eyes style */}
      <SectionWrapper
        className="w-8 h-8 rounded-full p-2 mx-2"
        tip="Eyes"
        switchConfig={this.switchConfig.bind(this, 'eyeStyle', config.eyeStyle)}
      >
        <Eyes style={config.eyeStyle} color="#fff" />
      </SectionWrapper>
      {/* Glasses style */}
      <SectionWrapper
        className="w-8 h-8 rounded-full p-2 mx-2"
        tip="Glasses"
        switchConfig={this.switchConfig.bind(
          this,
          'glassesStyle',
          config.glassesStyle
        )}
      >
        <Glasses style={config.glassesStyle} color="#fff" />
      </SectionWrapper>
      {/* Ear style */}
      <SectionWrapper
        className="w-8 h-8 rounded-full p-2 mx-2"
        tip="Ear"
        switchConfig={this.switchConfig.bind(this, 'earSize', config.earSize)}
      >
        <Ear size={config.earSize} color="#fff" />
      </SectionWrapper>
      {/* Nose style */}
      <SectionWrapper
        className="w-8 h-8 rounded-full p-2 mx-2"
        tip="Nose"
        switchConfig={this.switchConfig.bind(
          this,
          'noseStyle',
          config.noseStyle
        )}
      >
        <Nose style={config.noseStyle} color="#fff" />
      </SectionWrapper>
      {/* Mouth style */}
      <SectionWrapper
        className="w-8 h-8 rounded-full p-2 mx-2"
        tip="Mouth"
        switchConfig={this.switchConfig.bind(
          this,
          'mouthStyle',
          config.mouthStyle
        )}
      >
        <Mouth style={config.mouthStyle} color="#fff" />
      </SectionWrapper>
      {/* Shirt style */}
      <SectionWrapper
        className="w-8 h-8 rounded-full p-2 mx-2"
        tip="Shirt"
        switchConfig={this.switchConfig.bind(
          this,
          'shirtStyle',
          config.shirtStyle
        )}
      >
        <Shirt style={config.shirtStyle} color="#fff" />
      </SectionWrapper>

      {/* Shape style */}
      <SectionWrapper
        className="w-8 h-8 rounded-full p-2 mx-2"
        tip="Shape"
        switchConfig={this.switchShape.bind(this, shape)}
      >
        <div
          className={classnames('w-3 h-3 bg-white', {
            'rounded-full': shape === 'circle',
            rounded: shape === 'rounded',
          })}
        />
      </SectionWrapper>

      <div className="divider w-0.5 h-5 rounded mx-2" />
      <div className="mx-2 relative flex justify-center">
        <i
          className={classnames(
            'iconfont icon-code text-xl  cursor-pointer transition duration-300 hover:text-green-100',
            {
              banTip: isCodeShow,
            }
          )}
          data-tip="Config"
          onClick={this.toggleCodeShow.bind(this)}
        />
        <div
          className={classnames(
            'rounded-lg bg-white p-5 absolute bottom-full codeBlock mb-4',
            {
              active: isCodeShow,
            }
          )}
        >
          <pre className="text-xs highres:text-sm">
            {this.genCodeString(config)}
          </pre>
        </div>
      </div>

      <div className="divider w-0.5 h-5 rounded mx-2" />
      <i
        className="iconfont icon-download text-xl mx-2 cursor-pointer transition duration-300 hover:text-green-100"
        data-tip="Download"
        onClick={download}
      />
    </div>
  )
}

export default AvatarEditor
