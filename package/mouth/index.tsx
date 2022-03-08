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

const Mouth = (props: { type: number }) => {
  const { type } = props
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
    default: {
      return <Mouth0 />
    }
  }
}

export default Mouth
