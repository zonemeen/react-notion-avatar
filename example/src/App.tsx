import React from 'react'
import './index.scss'
import NotionAvatar, { getRandomConfig } from '../../src/index'

const App = () => {
  const config = getRandomConfig()
  return (
    <div className="flex items-center justify-center">
      <NotionAvatar className="w-48 h-48" bgColor="red" config={config} />
    </div>
  )
}

export default App
