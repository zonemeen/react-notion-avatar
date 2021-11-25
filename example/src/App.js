import React from 'react'
import NotionAvatar from 'react-notion-avatar'

const App = () => {
  const config = {
    eye: 3,
    eyebrow: 3,
    face: 4,
    glass: 1,
    hair: 1,
    mouth: 2,
    nose: 3,
    accessory: 0,
    beard: 0,
    detail: 0,
  }
  return (
    <div>
      <NotionAvatar
        config={config}
        style={{
          width: '700px',
          height: '700px',
          position: 'absolute',
        }}
      />
    </div>
  )
}

export default App
