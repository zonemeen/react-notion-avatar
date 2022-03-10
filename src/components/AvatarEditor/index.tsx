import React, { useState, useEffect } from 'react'
import classnames from 'classnames'

import type { AvatarConfig, AvatarPart, ShapeTypes } from 'react-notion-avatar'

import Accessory from './parts/accessory/index'
import Beard from './parts/beard/index'
import Detail from './parts/detail/index'
import Eye from './parts/eye/index'
import Eyebrow from './parts/eyebrow/index'
import Face from './parts/face/index'
import Glass from './parts/glass/index'
import Hair from './parts/hair/index'
import Mouth from './parts/mouth/index'
import Nose from './parts/nose/index'

import SectionWrapper from './SectionWrapper/index'

import './index.scss'

type EditorProps = {
  config: AvatarConfig
  shape: ShapeTypes
  updateConfig?: (type: AvatarPart, value: number) => void
  updateShape?: (shape: ShapeTypes) => void
  downloadAvatar?: () => void
  getRandomStyle?: () => void
}

const AvatarConfigCount: AvatarConfig = {
  face: 10,
  nose: 10,
  mouth: 10,
  eye: 10,
  eyebrow: 10,
  glass: 10,
  hair: 30,
  accessory: 10,
  detail: 10,
  beard: 10,
}

const AvatarEditor = ({
  config,
  shape,
  updateConfig,
  updateShape,
  downloadAvatar,
  getRandomStyle,
}: EditorProps) => {
  const shapes = ['circle', 'rounded', 'square']
  const [isCodeShow, setIsCodeShow] = useState(false)
  const switchConfig = (type: AvatarPart, currentIdx: number) => {
    const optLength = AvatarConfigCount[type]
    const newIdx = (currentIdx + 1) % optLength
    if (updateConfig) {
      updateConfig(type, newIdx)
    }
  }
  const switchShape = (currentShape: ShapeTypes) => {
    const currentIdx = shapes.findIndex((item) => item === currentShape)
    const newIdx = (currentIdx + 1) % shapes.length
    if (updateShape) {
      updateShape(shapes[newIdx] as ShapeTypes)
    }
  }
  const toggleCodeShow = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.stopPropagation()
    setIsCodeShow(!isCodeShow)
  }
  const setCodeShowIsTrue = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.stopPropagation()
    setIsCodeShow(true)
  }
  const genCodeString = (config: AvatarConfig) => {
    const myConfig = Object.keys(config).reduce(
      (acc, key) => ({ ...acc, [key]: config[key as AvatarPart] }),
      {}
    )
    return (
      'const config = ' +
      JSON.stringify(myConfig, null, 2) +
      '\n' +
      `<NotionAvatar style={{ width: '5rem', height: '5rem' }} shape="${shape}" config={config} />`
    )
  }
  useEffect(() => {
    document.addEventListener('click', (e) => setIsCodeShow(false))
  }, [])
  return (
    <div className="AvatarEditor rounded-full px-3 py-2 flex items-center">
      <SectionWrapper
        isSvgElement={true}
        className="w-12 h-12 rounded-full p-2 mx-2"
        tip="Face"
        switchConfig={() => switchConfig('face', config.face)}
      >
        <Face type={config.face} />
      </SectionWrapper>
      <SectionWrapper
        isSvgElement={true}
        className="w-12 h-12 rounded-full p-2 mx-2"
        tip="Eye"
        switchConfig={() => switchConfig('eye', config.eye)}
      >
        <Eye type={config.eye} />
      </SectionWrapper>
      <SectionWrapper
        isSvgElement={true}
        className="w-12 h-12 rounded-full p-2 mx-2"
        tip="Eye"
        switchConfig={() => switchConfig('eyebrow', config.eyebrow)}
      >
        <Eyebrow type={config.eyebrow} />
      </SectionWrapper>
      <SectionWrapper
        isSvgElement={true}
        className="w-12 h-12 rounded-full p-2 mx-2"
        tip="Glass"
        switchConfig={() => switchConfig('glass', config.glass)}
      >
        <Glass type={config.glass} />
      </SectionWrapper>
      <SectionWrapper
        isSvgElement={true}
        className="w-12 h-12 rounded-full p-2 mx-2"
        tip="Hair"
        switchConfig={() => switchConfig('hair', config.hair)}
      >
        <Hair type={config.hair} />
      </SectionWrapper>
      <SectionWrapper
        isSvgElement={true}
        className="w-12 h-12 rounded-full p-2 mx-2"
        tip="Mouth"
        switchConfig={() => switchConfig('mouth', config.mouth)}
      >
        <Mouth type={config.mouth} />
      </SectionWrapper>
      <SectionWrapper
        isSvgElement={true}
        className="w-12 h-12 rounded-full p-2 mx-2"
        tip="Nose"
        switchConfig={() => switchConfig('nose', config.nose)}
      >
        <Nose type={config.nose} />
      </SectionWrapper>
      <SectionWrapper
        isSvgElement={true}
        className="w-12 h-12 rounded-full p-2 mx-2"
        tip="Beard"
        switchConfig={() => switchConfig('beard', config.beard)}
      >
        <Beard type={config.beard} />
      </SectionWrapper>
      <SectionWrapper
        isSvgElement={true}
        className="w-12 h-12 rounded-full p-2 mx-2"
        tip="Accessory"
        switchConfig={() => switchConfig('accessory', config.accessory)}
      >
        <Accessory type={config.accessory} />
      </SectionWrapper>
      <SectionWrapper
        isSvgElement={true}
        className="w-12 h-12 rounded-full p-2 mx-2"
        tip="Detail"
        switchConfig={() => switchConfig('detail', config.detail)}
      >
        <Detail type={config.detail} />
      </SectionWrapper>
      <SectionWrapper
        isSvgElement={false}
        className="w-12 h-12 rounded-full p-2 mx-2"
        tip="Shape"
        switchConfig={() => switchShape(shape)}
      >
        <div
          className={classnames('w-4 h-4 bg-black', {
            'rounded-full': shape === 'circle',
            rounded: shape === 'rounded',
          })}
        />
      </SectionWrapper>
      <div className="divider w-0.5 h-5 rounded mx-2" />
      <i
        className="iconfont icon-dice-d-solid text-xl mx-2 cursor-pointer transition duration-300 hover:text-green-100"
        data-tip="Random"
        onClick={getRandomStyle}
      />
      <div className="divider w-0.5 h-5 rounded mx-2" />
      <div className="mx-2 relative flex justify-center">
        <i
          className={classnames(
            'iconfont icon-code text-xl cursor-pointer transition duration-300 hover:text-green-100',
            {
              banTip: isCodeShow,
            }
          )}
          data-tip="Config"
          onClick={(e) => toggleCodeShow(e)}
        />
        {isCodeShow && (
          <div
            className={classnames(
              'rounded-lg bg-white p-5 absolute bottom-full codeBlock mb-4',
              {
                active: isCodeShow,
              }
            )}
            onClick={(e) => setCodeShowIsTrue(e)}
          >
            <pre className="text-xs highres:text-sm">
              {genCodeString(config)}
            </pre>
          </div>
        )}
      </div>
      <div className="divider w-0.5 h-5 rounded mx-2" />
      <i
        className="iconfont icon-download text-xl mx-2 cursor-pointer transition duration-300 hover:text-green-100"
        data-tip="Download"
        onClick={downloadAvatar}
      />
    </div>
  )
}

export default AvatarEditor
