import React from 'react'

import Face0 from './0'
import Face1 from './1'
import Face2 from './2'
import Face3 from './3'
import Face4 from './4'
import Face5 from './5'
import Face6 from './6'
import Face7 from './7'
import Face8 from './8'
import Face9 from './9'
import Face10 from './10'

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
