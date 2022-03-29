import React from 'react'

import './index.scss'

export default function sectionWrapper(props: {
  className?: string
  children: JSX.Element
  switchConfig?: () => void
  tip: string
  isSvgElement?: boolean
}) {
  const { className = '', children, switchConfig, tip, isSvgElement } = props
  return (
    <div
      className={'SectionWrapper ' + className}
      data-tip={tip}
      onClick={switchConfig}
    >
      <div className="w-12 h-12">
        <div className="childrenWrapper absolute top-0 left-0 w-full h-full flex items-center justify-center">
          {isSvgElement ? (
            <svg
              viewBox="0 0 1080 1080"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {children}
            </svg>
          ) : (
            <div>{children}</div>
          )}
        </div>
      </div>
    </div>
  )
}
