import React from 'react'
import NotionAvatar from './NotionAvatar'

const App = () => {
  /* const config = {
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
  }*/
  return (
    <div>
      <NotionAvatar
        style={{
          width: '180px',
          height: '180px',
          position: 'absolute',
          left: '50%',
        }}
      />
    </div>
  )
}

export default App
