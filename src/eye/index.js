import React from 'react'

import Eye0 from './0.jsx'
import Eye1 from './1.jsx'
import Eye2 from './2.jsx'
import Eye3 from './3.jsx'
import Eye4 from './4.jsx'
import Eye5 from './5.jsx'
import Eye6 from './6.jsx'
import Eye7 from './7.jsx'
import Eye8 from './8.jsx'
import Eye9 from './9.jsx'
import Eye10 from './10.jsx'

const Eye = ({ type }) => {
  switch (type) {
    case 0: {
      return <Eye0 />
    }
    case 1: {
      return <Eye1 />
    }
    case 2: {
      return <Eye2 />
    }
    case 3: {
      return <Eye3 />
    }
    case 4: {
      return <Eye4 />
    }
    case 5: {
      return <Eye5 />
    }
    case 6: {
      return <Eye6 />
    }
    case 7: {
      return <Eye7 />
    }
    case 8: {
      return <Eye8 />
    }
    case 9: {
      return <Eye9 />
    }
    case 10: {
      return <Eye10 />
    }
    default: {
      return <Eye0 />
    }
  }
}

export default Eye
