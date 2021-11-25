import React from 'react'

import Beard0 from './0.jsx'
import Beard1 from './1.jsx'
import Beard2 from './2.jsx'
import Beard3 from './3.jsx'
import Beard4 from './4.jsx'
import Beard5 from './5.jsx'
import Beard6 from './6.jsx'
import Beard7 from './7.jsx'
import Beard8 from './8.jsx'
import Beard9 from './9.jsx'
import Beard10 from './10.jsx'

const Beard = ({ type }) => {
  return (
    <>
      {type === 0 && <Beard0 />}
      {type === 1 && <Beard1 />}
      {type === 2 && <Beard2 />}
      {type === 3 && <Beard3 />}
      {type === 4 && <Beard4 />}
      {type === 5 && <Beard5 />}
      {type === 6 && <Beard6 />}
      {type === 7 && <Beard7 />}
      {type === 8 && <Beard8 />}
      {type === 9 && <Beard9 />}
      {type === 10 && <Beard10 />}
    </>
  )
}

export default Beard
