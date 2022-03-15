import React from 'react'

import Glass0 from './0'
import Glass1 from './1'
import Glass2 from './2'
import Glass3 from './3'
import Glass4 from './4'
import Glass5 from './5'
import Glass6 from './6'
import Glass7 from './7'
import Glass8 from './8'
import Glass9 from './9'
import Glass10 from './10'
import Glass11 from './11'
import Glass12 from './12'

const Glass = (props: { type: number }) => {
  const { type } = props
  switch (type) {
    case 0: {
      return <Glass0 />
    }
    case 1: {
      return <Glass1 />
    }
    case 2: {
      return <Glass2 />
    }
    case 3: {
      return <Glass3 />
    }
    case 4: {
      return <Glass4 />
    }
    case 5: {
      return <Glass5 />
    }
    case 6: {
      return <Glass6 />
    }
    case 7: {
      return <Glass7 />
    }
    case 8: {
      return <Glass8 />
    }
    case 9: {
      return <Glass9 />
    }
    case 10: {
      return <Glass10 />
    }
    case 11: {
      return <Glass11 />
    }
    case 12: {
      return <Glass12 />
    }
    default: {
      return <Glass0 />
    }
  }
}

export default Glass
