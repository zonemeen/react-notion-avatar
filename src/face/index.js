import React from 'react'

import Face0 from './0.jsx'
import Face1 from './1.jsx'
import Face2 from './2.jsx'
import Face3 from './3.jsx'
import Face4 from './4.jsx'
import Face5 from './5.jsx'
import Face6 from './6.jsx'
import Face7 from './7.jsx'
import Face8 from './8.jsx'
import Face9 from './9.jsx'
import Face10 from './10.jsx'

const Face = ({ type }) => {
  return (
    <>
      {type === 0 && <Face0 />}
      {type === 1 && <Face1 />}
      {type === 2 && <Face2 />}
      {type === 3 && <Face3 />}
      {type === 4 && <Face4 />}
      {type === 5 && <Face5 />}
      {type === 6 && <Face6 />}
      {type === 7 && <Face7 />}
      {type === 8 && <Face8 />}
      {type === 9 && <Face9 />}
      {type === 10 && <Face10 />}
    </>
  )
}

export default Face
