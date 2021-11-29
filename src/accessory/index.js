import React from 'react'

import Accessory0 from './0.jsx'
import Accessory1 from './1.jsx'
import Accessory2 from './2.jsx'
import Accessory3 from './3.jsx'
import Accessory4 from './4.jsx'
import Accessory5 from './5.jsx'
import Accessory6 from './6.jsx'
import Accessory7 from './7.jsx'
import Accessory8 from './8.jsx'
import Accessory9 from './9.jsx'
import Accessory10 from './10.jsx'

const Accessory = ({ type }) => {
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
