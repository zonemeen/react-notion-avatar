import React, { useState } from 'react'
import { hot } from 'react-hot-loader'
import domtoimage from 'dom-to-image'
import { saveAs } from 'file-saver'

import NotionAvatar, { getRandomConfig } from '../../../src/index'
import { AvatarPart, ShapeTypes } from '../types'

import AvatarEditor from './AvatarEditor/index'
import AvatarList from './AvatarList/index'
import Footer from './Footer/index'

require('./index.scss')

const App = () => {
  const [config, setConfig] = useState({ ...getRandomConfig() })
  const [shape, setShape] = useState('circle' as ShapeTypes)
  const [bgColor, setBgColor] = useState('rgba(255, 0, 0, 0)')
  const updateConfig = (key, value) => {
    config[key] = value
    setConfig({ ...config })
  }
  const updateShape = (shape) => {
    setShape(shape)
  }
  const updateBgColor = (color) => {
    setBgColor(color)
  }
  const download = async () => {
    const scale = 2
    const node = document.getElementById('myAvatar')
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

      saveAs(blob, 'avatar.png')
    }
  }
  const selectConfig = (config) => {
    setConfig({ ...config })
  }
  return (
    <div className="App flex flex-col min-h-screen">
      <main className="flex-1 flex flex-col items-center justify-center">
        <div id="myAvatar" className="mb-10">
          <NotionAvatar
            className="w-64 h-64 highres:w-80 highres:h-80"
            shape={shape}
            bgColor={bgColor}
            {...config}
          />
        </div>
        <AvatarEditor
          config={config}
          shape={shape}
          updateConfig={updateConfig}
          updateShape={updateShape}
          updateBgColor={updateBgColor}
          download={download}
        />
      </main>

      {/* Avatar list */}
      <AvatarList selectConfig={selectConfig} />

      {/* Footer */}
      {/*<Footer />*/}
    </div>
  )
}

export default hot(module)(App)
