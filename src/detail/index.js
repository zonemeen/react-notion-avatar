import React from 'react'

import Detail0 from './0.jsx'
import Detail1 from './1.jsx'
import Detail2 from './2.jsx'
import Detail3 from './3.jsx'
import Detail4 from './4.jsx'
import Detail5 from './5.jsx'
import Detail6 from './6.jsx'
import Detail7 from './7.jsx'
import Detail8 from './8.jsx'
import Detail9 from './9.jsx'
import Detail10 from './10.jsx'

const Detail = ({ type }) => {
  switch (type) {
    case 0: {
      return <Detail0 />
    }
    case 1: {
      return <Detail1 />
    }
    case 2: {
      return <Detail2 />
    }
    case 3: {
      return <Detail3 />
    }
    case 4: {
      return <Detail4 />
    }
    case 5: {
      return <Detail5 />
    }
    case 6: {
      return <Detail6 />
    }
    case 7: {
      return <Detail7 />
    }
    case 8: {
      return <Detail8 />
    }
    case 9: {
      return <Detail9 />
    }
    case 10: {
      return <Detail10 />
    }
    default: {
      return <Detail0 />
    }
  }
}

export default Detail
