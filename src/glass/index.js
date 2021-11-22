import React from 'react'

import Glass0 from './0'
import Glass1 from './1'
import Glass2 from './2'
import Glass3 from './3'
import Glass4 from './4'
import Glass5 from './5'
import Glass6 from './6'
import Glass7 from './7'
import Glass8 from './8'
import Glass9 from './9'
import Glass10 from './10'

const Glass = ({ type }) => {
  return (
    <>
      {type === 0 && <Glass0 />}
      {type === 1 && <Glass1 />}
      {type === 2 && <Glass2 />}
      {type === 3 && <Glass3 />}
      {type === 4 && <Glass4 />}
      {type === 5 && <Glass5 />}
      {type === 6 && <Glass6 />}
      {type === 7 && <Glass7 />}
      {type === 8 && <Glass8 />}
      {type === 9 && <Glass9 />}
      {type === 10 && <Glass10 />}
    </>
  )
}

export default Glass
