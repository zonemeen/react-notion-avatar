import React from 'react'

import Glass0 from './0.jsx'
import Glass1 from './1.jsx'
import Glass2 from './2.jsx'
import Glass3 from './3.jsx'
import Glass4 from './4.jsx'
import Glass5 from './5.jsx'
import Glass6 from './6.jsx'
import Glass7 from './7.jsx'
import Glass8 from './8.jsx'
import Glass9 from './9.jsx'
import Glass10 from './10.jsx'

const Glass = ({ type }) => {
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
    default: {
      return <Glass0 />
    }
  }
}

export default Glass
