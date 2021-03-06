import React from 'react'

import Beard0 from './0'
import Beard1 from './1'
import Beard2 from './2'
import Beard3 from './3'
import Beard4 from './4'
import Beard5 from './5'
import Beard6 from './6'
import Beard7 from './7'
import Beard8 from './8'
import Beard9 from './9'
import Beard10 from './10'
import Beard11 from './11'
import Beard12 from './12'
import Beard13 from './13'
import Beard14 from './14'
import Beard15 from './15'
import Beard16 from './16'
import { TypeProps } from '../types'

const Beard: React.FC<TypeProps> = ({ type }) => {
  switch (type) {
    case 0: {
      return <Beard0 />
    }
    case 1: {
      return <Beard1 />
    }
    case 2: {
      return <Beard2 />
    }
    case 3: {
      return <Beard3 />
    }
    case 4: {
      return <Beard4 />
    }
    case 5: {
      return <Beard5 />
    }
    case 6: {
      return <Beard6 />
    }
    case 7: {
      return <Beard7 />
    }
    case 8: {
      return <Beard8 />
    }
    case 9: {
      return <Beard9 />
    }
    case 10: {
      return <Beard10 />
    }
    case 11: {
      return <Beard11 />
    }
    case 12: {
      return <Beard12 />
    }
    case 13: {
      return <Beard13 />
    }
    case 14: {
      return <Beard14 />
    }
    case 15: {
      return <Beard15 />
    }
    case 16: {
      return <Beard16 />
    }
    default: {
      return <Beard0 />
    }
  }
}

export default Beard
