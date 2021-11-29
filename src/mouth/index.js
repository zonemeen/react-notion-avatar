import React from 'react'

import Mouth0 from './0.jsx'
import Mouth1 from './1.jsx'
import Mouth2 from './2.jsx'
import Mouth3 from './3.jsx'
import Mouth4 from './4.jsx'
import Mouth5 from './5.jsx'
import Mouth6 from './6.jsx'
import Mouth7 from './7.jsx'
import Mouth8 from './8.jsx'
import Mouth9 from './9.jsx'
import Mouth10 from './10.jsx'

const Mouth = ({ type }) => {
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
