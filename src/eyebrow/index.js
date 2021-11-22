import React from 'react'

import Eyebrow0 from './0'
import Eyebrow1 from './1'
import Eyebrow2 from './2'
import Eyebrow3 from './3'
import Eyebrow4 from './4'
import Eyebrow5 from './5'
import Eyebrow6 from './6'
import Eyebrow7 from './7'
import Eyebrow8 from './8'
import Eyebrow9 from './9'
import Eyebrow10 from './10'

const Eyebrow = ({ type }) => {
  return (
    <>
      {type === 0 && <Eyebrow0 />}
      {type === 1 && <Eyebrow1 />}
      {type === 2 && <Eyebrow2 />}
      {type === 3 && <Eyebrow3 />}
      {type === 4 && <Eyebrow4 />}
      {type === 5 && <Eyebrow5 />}
      {type === 6 && <Eyebrow6 />}
      {type === 7 && <Eyebrow7 />}
      {type === 8 && <Eyebrow8 />}
      {type === 9 && <Eyebrow9 />}
      {type === 10 && <Eyebrow10 />}
    </>
  )
}

export default Eyebrow
