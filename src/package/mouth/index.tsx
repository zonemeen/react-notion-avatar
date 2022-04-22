import React from 'react'

import Mouth0 from './0'
import Mouth1 from './1'
import Mouth2 from './2'
import Mouth3 from './3'
import Mouth4 from './4'
import Mouth5 from './5'
import Mouth6 from './6'
import Mouth7 from './7'
import Mouth8 from './8'
import Mouth9 from './9'
import Mouth10 from './10'
import Mouth11 from './11'
import Mouth12 from './12'
import Mouth13 from './13'
import Mouth14 from './14'
import Mouth15 from './15'
import Mouth16 from './16'
import Mouth17 from './17'
import Mouth18 from './18'
import Mouth19 from './19'
import { TypeProps } from '../types'

const Mouth: React.FC<TypeProps> = ({ type }) => {
  switch (type) {
    case 0: {
      return <Mouth0 />
    }
    case 1: {
      return <Mouth1 />
    }
    case 2: {
      return <Mouth2 />
    }
    case 3: {
      return <Mouth3 />
    }
    case 4: {
      return <Mouth4 />
    }
    case 5: {
      return <Mouth5 />
    }
    case 6: {
      return <Mouth6 />
    }
    case 7: {
      return <Mouth7 />
    }
    case 8: {
      return <Mouth8 />
    }
    case 9: {
      return <Mouth9 />
    }
    case 10: {
      return <Mouth10 />
    }
    case 11: {
      return <Mouth11 />
    }
    case 12: {
      return <Mouth12 />
    }
    case 13: {
      return <Mouth13 />
    }
    case 14: {
      return <Mouth14 />
    }
    case 15: {
      return <Mouth15 />
    }
    case 16: {
      return <Mouth16 />
    }
    case 17: {
      return <Mouth17 />
    }
    case 18: {
      return <Mouth18 />
    }
    case 19: {
      return <Mouth19 />
    }
    default: {
      return <Mouth0 />
    }
  }
}

export default Mouth
