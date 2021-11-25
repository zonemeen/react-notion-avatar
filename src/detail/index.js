import React from 'react'

import Detail0 from './0.jsx'
import Detail1 from './1.jsx'
import Detail2 from './2.jsx'
import Detail3 from './3.jsx'
import Detail4 from './4.jsx'
import Detail5 from './5.jsx'
import Detail6 from './6.jsx'
import Detail7 from './7.jsx'
import Detail8 from './8.jsx'
import Detail9 from './9.jsx'
import Detail10 from './10.jsx'

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
