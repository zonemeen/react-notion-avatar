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
import Face11 from './11'
import Face12 from './12'
import Face13 from './13'
import Face14 from './14'
import Face15 from './15'

const Face = (props: { type: number }) => {
  const { type } = props
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
    case 11: {
      return <Face11 />
    }
    case 12: {
      return <Face12 />
    }
    case 13: {
      return <Face13 />
    }
    case 14: {
      return <Face14 />
    }
    case 15: {
      return <Face15 />
    }
    default: {
      return <Face0 />
    }
  }
}

export default Face
