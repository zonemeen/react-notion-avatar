import React from 'react'

import Accessory0 from './0'
import Accessory1 from './1'
import Accessory2 from './2'
import Accessory3 from './3'
import Accessory4 from './4'
import Accessory5 from './5'
import Accessory6 from './6'
import Accessory7 from './7'
import Accessory8 from './8'
import Accessory9 from './9'
import Accessory10 from './10'

const Accessory = ({ type }) => {
  return (
    <>
      {type === 0 && <Accessory0 />}
      {type === 1 && <Accessory1 />}
      {type === 2 && <Accessory2 />}
      {type === 3 && <Accessory3 />}
      {type === 4 && <Accessory4 />}
      {type === 5 && <Accessory5 />}
      {type === 6 && <Accessory6 />}
      {type === 7 && <Accessory7 />}
      {type === 8 && <Accessory8 />}
      {type === 9 && <Accessory9 />}
      {type === 10 && <Accessory10 />}
    </>
  )
}

export default Accessory
