import React, { Suspense, useEffect, lazy, useState } from 'react'
import { TypeProps } from '../types'

const Glass: React.FC<TypeProps> = ({ type }) => {
  const [DynamicComponent, setDynamicComponent] =
    useState<React.ElementType | null>(null)

  useEffect(() => {
    const Component = lazy(() => import(`./${type}`))
    setDynamicComponent(Component)
  }, [type])

  return (
    <>
      <Suspense fallback={'Loading...'}>
        {DynamicComponent && <DynamicComponent />}
      </Suspense>
    </>
  )
}

export default Glass
