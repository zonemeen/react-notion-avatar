import React from 'react'

import Accessory0 from './0'
import Accessory1 from './1'
import Accessory2 from './2'
import Accessory3 from './3'
import Accessory4 from './4'
import Accessory5 from './5'
import Accessory6 from './6'
import Accessory7 from './7'
import Accessory8 from './8'
import Accessory9 from './9'
import Accessory10 from './10'

const Accessory = (props: { type: number }): React.ReactElement => {
  const { type } = props
  switch (type) {
    case 0: {
      return <Accessory0 />
    }
    case 1: {
      return <Accessory1 />
    }
    case 2: {
      return <Accessory2 />
    }
    case 3: {
      return <Accessory3 />
    }
    case 4: {
      return <Accessory4 />
    }
    case 5: {
      return <Accessory5 />
    }
    case 6: {
      return <Accessory6 />
    }
    case 7: {
      return <Accessory7 />
    }
    case 8: {
      return <Accessory8 />
    }
    case 9: {
      return <Accessory9 />
    }
    case 10: {
      return <Accessory10 />
    }
    default: {
      return <Accessory0 />
    }
  }
}

export default Accessory
