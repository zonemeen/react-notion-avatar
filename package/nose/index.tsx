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

const Nose = (props: { type: number }) => {
  const { type } = props
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
    default: {
      return <Nose0 />
    }
  }
}

export default Nose
