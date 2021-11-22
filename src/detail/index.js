import React from 'react'

import Detail0 from './0'
import Detail1 from './1'
import Detail2 from './2'
import Detail3 from './3'
import Detail4 from './4'
import Detail5 from './5'
import Detail6 from './6'
import Detail7 from './7'
import Detail8 from './8'
import Detail9 from './9'
import Detail10 from './10'

const Detail = ({ type }) => {
  return (
    <>
      {type === 0 && <Detail0 />}
      {type === 1 && <Detail1 />}
      {type === 2 && <Detail2 />}
      {type === 3 && <Detail3 />}
      {type === 4 && <Detail4 />}
      {type === 5 && <Detail5 />}
      {type === 6 && <Detail6 />}
      {type === 7 && <Detail7 />}
      {type === 8 && <Detail8 />}
      {type === 9 && <Detail9 />}
      {type === 10 && <Detail10 />}
    </>
  )
}

export default Detail
