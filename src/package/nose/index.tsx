import React from 'react'

import Nose0 from './0'
import Nose1 from './1'
import Nose2 from './2'
import Nose3 from './3'
import Nose4 from './4'
import Nose5 from './5'
import Nose6 from './6'
import Nose7 from './7'
import Nose8 from './8'
import Nose9 from './9'
import Nose10 from './10'
import Nose11 from './11'
import Nose12 from './12'
import Nose13 from './13'
import { TypeProps } from '../types'

const Nose: React.FC<TypeProps> = ({ type }) => {
  switch (type) {
    case 0: {
      return <Nose0 />
    }
    case 1: {
      return <Nose1 />
    }
    case 2: {
      return <Nose2 />
    }
    case 3: {
      return <Nose3 />
    }
    case 4: {
      return <Nose4 />
    }
    case 5: {
      return <Nose5 />
    }
    case 6: {
      return <Nose6 />
    }
    case 7: {
      return <Nose7 />
    }
    case 8: {
      return <Nose8 />
    }
    case 9: {
      return <Nose9 />
    }
    case 10: {
      return <Nose10 />
    }
    case 11: {
      return <Nose11 />
    }
    case 12: {
      return <Nose12 />
    }
    case 13: {
      return <Nose13 />
    }
    default: {
      return <Nose0 />
    }
  }
}

export default Nose
