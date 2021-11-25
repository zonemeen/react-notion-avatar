import React from 'react'

import Mouth0 from './0.jsx'
import Mouth1 from './1.jsx'
import Mouth2 from './2.jsx'
import Mouth3 from './3.jsx'
import Mouth4 from './4.jsx'
import Mouth5 from './5.jsx'
import Mouth6 from './6.jsx'
import Mouth7 from './7.jsx'
import Mouth8 from './8.jsx'
import Mouth9 from './9.jsx'
import Mouth10 from './10.jsx'

const Mouth = ({ type }) => {
  return (
    <>
      {type === 0 && <Mouth0 />}
      {type === 1 && <Mouth1 />}
      {type === 2 && <Mouth2 />}
      {type === 3 && <Mouth3 />}
      {type === 4 && <Mouth4 />}
      {type === 5 && <Mouth5 />}
      {type === 6 && <Mouth6 />}
      {type === 7 && <Mouth7 />}
      {type === 8 && <Mouth8 />}
      {type === 9 && <Mouth9 />}
      {type === 10 && <Mouth10 />}
    </>
  )
}

export default Mouth
