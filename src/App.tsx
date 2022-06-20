import React, { useState } from 'react'
import domtoimage from 'dom-to-image'
import { saveAs } from 'file-saver'
import confetti from 'canvas-confetti'
import classnames from 'classnames'
import { useTranslation } from 'react-i18next'

import NotionAvatar, { getRandomConfig } from 'react-notion-avatar'
import type { AvatarConfig, AvatarPart, ShapeTypes } from 'react-notion-avatar'

import Header from './components/Header/index'
import AvatarEditor from './components/AvatarEditor/index'
import Footer from './components/Footer/index'

const App = () => {
  const { i18n } = useTranslation()
  const [config, setConfig] = useState({
    ...(getRandomConfig() as AvatarConfig),
  })
  const [shape, setShape] = useState<ShapeTypes>('circle')
  const [bgColor, setBgColor] = useState('#ffffff')
  const [flipped, setFlipped] = useState(false)
  const [language, setLanguage] = useState('en')

  const onChangeLanguage = (language: string) => {
    setLanguage(language)
    i18n.changeLanguage(language)
  }
  const updateConfig = (key: AvatarPart, value: number) => {
    config[key] = value
    setConfig({ ...config })
  }
  const getRandomStyle = () => {
    const randomConfig = getRandomConfig()
    setConfig(randomConfig as AvatarConfig)
  }
  const celebrate = () => {
    const defaults = {
      colors: ['#5D8C7B', '#F2D091', '#F2A679', '#D9695F', '#8C4646'],
      shapes: ['square'],
      ticks: 500,
    } as confetti.Options
    confetti({
      ...defaults,
      particleCount: 80,
      spread: 100,
      origin: { y: 0 },
    })
    setTimeout(() => {
      confetti({
        ...defaults,
        particleCount: 50,
        angle: 60,
        spread: 80,
        origin: { x: 0 },
      })
    }, 250)
    setTimeout(() => {
      confetti({
        ...defaults,
        particleCount: 50,
        angle: 120,
        spread: 80,
        origin: { x: 1 },
      })
    }, 400)
  }
  const downloadAvatar = async () => {
    celebrate()
    const scale = 2
    const node = document.getElementById('notionAvatar')
    if (node) {
      const blob = await domtoimage.toBlob(node, {
        height: node.offsetHeight * scale,
        style: {
          transform: `scale(${scale}) translate(${
            node.offsetWidth / 2 / scale
          }px, ${node.offsetHeight / 2 / scale}px)`,
          'border-radius': 0,
        },
        width: node.offsetWidth * scale,
      })
      saveAs(blob, 'notion-avatar.png')
    }
  }
  return (
    <div className="App flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center">
        <div id="notionAvatar" className="pb-32">
          <NotionAvatar
            className={classnames('w-64 h-64 highres:w-80 highres:h-80', {
              flip: flipped,
            })}
            shape={shape}
            bgColor={bgColor}
            config={config}
          />
        </div>
        <div>
          <AvatarEditor
            config={config}
            bgColor={bgColor}
            shape={shape}
            flipped={flipped}
            updateConfig={updateConfig}
            setShape={setShape}
            setBgColor={setBgColor}
            setFlipped={setFlipped}
            downloadAvatar={downloadAvatar}
            getRandomStyle={getRandomStyle}
          />
        </div>
      </main>
      <Footer language={language} onLanguageChange={onChangeLanguage} />
      <div className="gradient-bg">
        <div className="gradient-top" />
        <div className="gradient-bottom" />
      </div>
    </div>
  )
}

export default App
