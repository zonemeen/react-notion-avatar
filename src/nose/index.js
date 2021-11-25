import React from 'react'

import Nose0 from './0.jsx'
import Nose1 from './1.jsx'
import Nose2 from './2.jsx'
import Nose3 from './3.jsx'
import Nose4 from './4.jsx'
import Nose5 from './5.jsx'
import Nose6 from './6.jsx'
import Nose7 from './7.jsx'
import Nose8 from './8.jsx'
import Nose9 from './9.jsx'
import Nose10 from './10.jsx'

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
