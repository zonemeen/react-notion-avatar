import React from 'react'

import Nose0 from './0'
import Nose1 from './1'
import Nose2 from './2'
import Nose3 from './3'
import Nose4 from './4'
import Nose5 from './5'
import Nose6 from './6'
import Nose7 from './7'
import Nose8 from './8'
import Nose9 from './9'
import Nose10 from './10'

const Nose = ({ type }) => {
  return (
    <>
      {type === 0 && <Nose0 />}
      {type === 1 && <Nose1 />}
      {type === 2 && <Nose2 />}
      {type === 3 && <Nose3 />}
      {type === 4 && <Nose4 />}
      {type === 5 && <Nose5 />}
      {type === 6 && <Nose6 />}
      {type === 7 && <Nose7 />}
      {type === 8 && <Nose8 />}
      {type === 9 && <Nose9 />}
      {type === 10 && <Nose10 />}
    </>
  )
}

export default Nose
