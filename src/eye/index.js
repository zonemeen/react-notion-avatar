import React from 'react'

import Eye0 from './0'
import Eye1 from './1'
import Eye2 from './2'
import Eye3 from './3'
import Eye4 from './4'
import Eye5 from './5'
import Eye6 from './6'
import Eye7 from './7'
import Eye8 from './8'
import Eye9 from './9'
import Eye10 from './10'

const Eye = ({ type }) => {
  return (
    <>
      {type === 0 && <Eye0 />}
      {type === 1 && <Eye1 />}
      {type === 2 && <Eye2 />}
      {type === 3 && <Eye3 />}
      {type === 4 && <Eye4 />}
      {type === 5 && <Eye5 />}
      {type === 6 && <Eye6 />}
      {type === 7 && <Eye7 />}
      {type === 8 && <Eye8 />}
      {type === 9 && <Eye9 />}
      {type === 10 && <Eye10 />}
    </>
  )
}

export default Eye
