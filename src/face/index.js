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
  switch (type) {
    case 0: {
      return <Face0 />
    }
    case 1: {
      return <Face1 />
    }
    case 2: {
      return <Face2 />
    }
    case 3: {
      return <Face3 />
    }
    case 4: {
      return <Face4 />
    }
    case 5: {
      return <Face5 />
    }
    case 6: {
      return <Face6 />
    }
    case 7: {
      return <Face7 />
    }
    case 8: {
      return <Face8 />
    }
    case 9: {
      return <Face9 />
    }
    case 10: {
      return <Face10 />
    }
    default: {
      return <Face0 />
    }
  }
}

export default Face
