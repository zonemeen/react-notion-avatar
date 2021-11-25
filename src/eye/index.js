import React from 'react'

import Eye0 from './0.jsx'
import Eye1 from './1.jsx'
import Eye2 from './2.jsx'
import Eye3 from './3.jsx'
import Eye4 from './4.jsx'
import Eye5 from './5.jsx'
import Eye6 from './6.jsx'
import Eye7 from './7.jsx'
import Eye8 from './8.jsx'
import Eye9 from './9.jsx'
import Eye10 from './10.jsx'

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
