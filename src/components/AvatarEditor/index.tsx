import React, { useState, useEffect } from 'react'
import classnames from 'classnames'
import { HexColorPicker } from 'react-colorful'
import type { AvatarConfig, AvatarPart, ShapeTypes } from 'react-notion-avatar'
import { useTranslation } from 'react-i18next'

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
  bgColor: string
  shape: ShapeTypes
  flipped: boolean
  updateConfig: (type: AvatarPart, value: number) => void
  setShape: (shape: ShapeTypes) => void
  setBgColor: (newColor: string) => void
  downloadAvatar: () => void
  getRandomStyle: () => void
  setFlipped: (flipped: boolean) => void
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
  bgColor,
  shape,
  flipped,
  updateConfig,
  setShape,
  setBgColor,
  downloadAvatar,
  getRandomStyle,
  setFlipped,
}: EditorProps) => {
  const { t } = useTranslation()
  const shapes = ['circle', 'rounded', 'square']
  const [isCodeShow, setIsCodeShow] = useState(false)
  const [isPaletteShow, setIsPaletteShow] = useState(false)
  const switchConfig = (type: AvatarPart, currentIdx: number) => {
    const optLength = AvatarConfigCount[type]
    const newIdx = (currentIdx + 1) % optLength
    updateConfig(type, newIdx)
  }
  const switchShape = (currentShape: ShapeTypes) => {
    const currentIdx = shapes.findIndex((item) => item === currentShape)
    const newIdx = (currentIdx + 1) % shapes.length
    setShape(shapes[newIdx] as ShapeTypes)
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
      `<NotionAvatar style={{ width: '5rem', height: '5rem' }} bgColor="${bgColor}" shape="${shape}" config={config} />`
    )
  }
  useEffect(() => {
    document.addEventListener('click', (e) => {
      setIsCodeShow(false)
      setIsPaletteShow(false)
    })
  }, [])
  return (
    <div className="AvatarEditor rounded-full px-3 py-2 flex items-center">
      <SectionWrapper
        isSvgElement={true}
        className="w-12 h-12 rounded-full p-2 mx-2"
        tip={t('tip.Face')}
        switchConfig={() => switchConfig('face', config.face)}
      >
        <Face type={config.face} />
      </SectionWrapper>
      <SectionWrapper
        isSvgElement={true}
        className="w-12 h-12 rounded-full p-2 mx-2"
        tip={t('tip.Eye')}
        switchConfig={() => switchConfig('eye', config.eye)}
      >
        <Eye type={config.eye} />
      </SectionWrapper>
      <SectionWrapper
        isSvgElement={true}
        className="w-12 h-12 rounded-full p-2 mx-2"
        tip={t('tip.Eyebrow')}
        switchConfig={() => switchConfig('eyebrow', config.eyebrow)}
      >
        <Eyebrow type={config.eyebrow} />
      </SectionWrapper>
      <SectionWrapper
        isSvgElement={true}
        className="w-12 h-12 rounded-full p-2 mx-2"
        tip={t('tip.Glass')}
        switchConfig={() => switchConfig('glass', config.glass)}
      >
        <Glass type={config.glass} />
      </SectionWrapper>
      <SectionWrapper
        isSvgElement={true}
        className="w-12 h-12 rounded-full p-2 mx-2"
        tip={t('tip.Hair')}
        switchConfig={() => switchConfig('hair', config.hair)}
      >
        <Hair type={config.hair} />
      </SectionWrapper>
      <SectionWrapper
        isSvgElement={true}
        className="w-12 h-12 rounded-full p-2 mx-2"
        tip={t('tip.Mouth')}
        switchConfig={() => switchConfig('mouth', config.mouth)}
      >
        <Mouth type={config.mouth} />
      </SectionWrapper>
      <SectionWrapper
        isSvgElement={true}
        className="w-12 h-12 rounded-full p-2 mx-2"
        tip={t('tip.Nose')}
        switchConfig={() => switchConfig('nose', config.nose)}
      >
        <Nose type={config.nose} />
      </SectionWrapper>
      <SectionWrapper
        isSvgElement={true}
        className="w-12 h-12 rounded-full p-2 mx-2"
        tip={t('tip.Beard')}
        switchConfig={() => switchConfig('beard', config.beard)}
      >
        <Beard type={config.beard} />
      </SectionWrapper>
      <SectionWrapper
        isSvgElement={true}
        className="w-12 h-12 rounded-full p-2 mx-2"
        tip={t('tip.Accessory')}
        switchConfig={() => switchConfig('accessory', config.accessory)}
      >
        <Accessory type={config.accessory} />
      </SectionWrapper>
      <SectionWrapper
        isSvgElement={true}
        className="w-12 h-12 rounded-full p-2 mx-2"
        tip={t('tip.Detail')}
        switchConfig={() => switchConfig('detail', config.detail)}
      >
        <Detail type={config.detail} />
      </SectionWrapper>
      <SectionWrapper
        isSvgElement={false}
        className="w-12 h-12 rounded-full p-2 mx-2"
        tip={t('tip.Shape')}
        switchConfig={() => switchShape(shape as ShapeTypes)}
      >
        <div
          className={classnames('w-4 h-4 bg-black', {
            'rounded-full': shape === 'circle',
            rounded: shape === 'rounded',
          })}
        />
      </SectionWrapper>
      <div className="divider w-0.5 h-5 rounded mx-2" />
      <div
        className="iconfont mx-2 cursor-pointer transition duration-300"
        data-tip={t('tip.Flip')}
        onClick={() => setFlipped(!flipped)}
      >
        <svg viewBox="0 0 1024 1024" width="22" height="22">
          <path
            d="M159.530667 810.666667H362.666667a21.333333 21.333333 0 0 0 21.333333-21.333334V281.429333a21.333333 21.333333 0 0 0-41.130667-7.893333L139.690667 781.397333A21.333333 21.333333 0 0 0 159.573333 810.666667z"
            fill={flipped ? '#000000' : '#ffffff'}
            opacity="0.8"
          />
          <path
            d="M864.469333 810.666667H661.333333a21.333333 21.333333 0 0 1-21.333333-21.333334V281.429333a21.333333 21.333333 0 0 1 41.130667-7.893333l203.178666 507.861333a21.333333 21.333333 0 0 1-19.84 29.269334z"
            fill={flipped ? '#ffffff' : '#000000'}
            opacity="0.8"
          />
          <path
            d="M469.333333 85.333333m42.666667 0l0 0q42.666667 0 42.666667 42.666667l0 768q0 42.666667-42.666667 42.666667l0 0q-42.666667 0-42.666667-42.666667l0-768q0-42.666667 42.666667-42.666667Z"
            fill="#ffffff"
            opacity="0.2"
          />
        </svg>
      </div>
      <div className="divider w-0.5 h-5 rounded mx-2" />
      <div className="relative flex justify-center">
        <i
          className="iconfont icon-Palette text-xl mx-2 cursor-pointer transition duration-300 opacity-80"
          data-tip={t('tip.Palette')}
          onClick={(e) => {
            e.stopPropagation()
            setIsPaletteShow(!isPaletteShow)
          }}
        />
        {isPaletteShow && (
          <div
            className={classnames('absolute bottom-full mb-4', {
              active: isPaletteShow,
            })}
            onClick={(e) => {
              e.stopPropagation()
              setIsPaletteShow(true)
            }}
          >
            <HexColorPicker
              color={bgColor}
              onChange={(newColor) => setBgColor(newColor)}
            />
          </div>
        )}
      </div>
      <div className="divider w-0.5 h-5 rounded mx-2" />
      <i
        className="iconfont icon-dice-d-solid text-xl mx-2 cursor-pointer transition duration-300 opacity-80"
        data-tip={t('tip.Random')}
        onClick={getRandomStyle}
      />
      <div className="divider w-0.5 h-5 rounded mx-2" />
      <div className="mx-2 relative flex justify-center">
        <i
          className={classnames(
            'iconfont icon-code text-xl cursor-pointer transition duration-300 opacity-80',
            {
              banTip: isCodeShow,
            }
          )}
          data-tip={t('tip.Config')}
          onClick={(e) => {
            e.stopPropagation()
            setIsCodeShow(!isCodeShow)
          }}
        />
        {isCodeShow && (
          <div
            className={classnames(
              'rounded-lg bg-white p-5 absolute bottom-full codeBlock mb-4',
              {
                active: isCodeShow,
              }
            )}
            onClick={(e) => {
              e.stopPropagation()
              setIsCodeShow(true)
            }}
          >
            <pre className="flex flex-wrap text-xs w-80 overFlow highres:text-sm">
              {genCodeString(config)}
            </pre>
          </div>
        )}
      </div>
      <div className="divider w-0.5 h-5 rounded mx-2" />
      <i
        className="iconfont icon-download text-xl mx-2 cursor-pointer transition duration-300 opacity-80"
        data-tip={t('tip.Download')}
        onClick={downloadAvatar}
      />
    </div>
  )
}

export default AvatarEditor
