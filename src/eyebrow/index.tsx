import React from 'react'

import Eyebrow0 from './0'
import Eyebrow1 from './1'
import Eyebrow2 from './2'
import Eyebrow3 from './3'
import Eyebrow4 from './4'
import Eyebrow5 from './5'
import Eyebrow6 from './6'
import Eyebrow7 from './7'
import Eyebrow8 from './8'
import Eyebrow9 from './9'
import Eyebrow10 from './10'

const Eyebrow = (props: { type: number }): React.ReactElement => {
  const { type } = props
  switch (type) {
    case 0: {
      return <Eyebrow0 />
    }
    case 1: {
      return <Eyebrow1 />
    }
    case 2: {
      return <Eyebrow2 />
    }
    case 3: {
      return <Eyebrow3 />
    }
    case 4: {
      return <Eyebrow4 />
    }
    case 5: {
      return <Eyebrow5 />
    }
    case 6: {
      return <Eyebrow6 />
    }
    case 7: {
      return <Eyebrow7 />
    }
    case 8: {
      return <Eyebrow8 />
    }
    case 9: {
      return <Eyebrow9 />
    }
    case 10: {
      return <Eyebrow10 />
    }
    default: {
      return <Eyebrow0 />
    }
  }
}

export default Eyebrow
