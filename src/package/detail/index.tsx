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
import Detail11 from './11'
import Detail12 from './12'
import Detail13 from './13'
import { TypeProps } from '../types'

const Detail: React.FC<TypeProps> = ({ type }) => {
  switch (type) {
    case 0: {
      return <Detail0 />
    }
    case 1: {
      return <Detail1 />
    }
    case 2: {
      return <Detail2 />
    }
    case 3: {
      return <Detail3 />
    }
    case 4: {
      return <Detail4 />
    }
    case 5: {
      return <Detail5 />
    }
    case 6: {
      return <Detail6 />
    }
    case 7: {
      return <Detail7 />
    }
    case 8: {
      return <Detail8 />
    }
    case 9: {
      return <Detail9 />
    }
    case 10: {
      return <Detail10 />
    }
    case 11: {
      return <Detail11 />
    }
    case 12: {
      return <Detail12 />
    }
    case 13: {
      return <Detail13 />
    }
    default: {
      return <Detail0 />
    }
  }
}

export default Detail
