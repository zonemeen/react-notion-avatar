import React from 'react'

import Beard0 from './0.jsx'
import Beard1 from './1.jsx'
import Beard2 from './2.jsx'
import Beard3 from './3.jsx'
import Beard4 from './4.jsx'
import Beard5 from './5.jsx'
import Beard6 from './6.jsx'
import Beard7 from './7.jsx'
import Beard8 from './8.jsx'
import Beard9 from './9.jsx'
import Beard10 from './10.jsx'

const Beard = ({ type }) => {
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
    default: {
      return <Beard0 />
    }
  }
}

export default Beard
