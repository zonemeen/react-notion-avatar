import React from 'react'

import './index.scss'

export default function header() {
  return (
    <header className="header">
      <div className="logo">
        <svg viewBox="0 0 1024 1024">
          <path
            d="M707.2 309.333333c2.645333 14.72-0.768 29.013333-14.421333 30.336l-22.698667 4.096-9.386667 354.858667c-19.968 10.666667-38.144 16.554667-53.12 16-24.192-0.853333-30.037333-9.173333-47.36-33.92l-141.056-253.738667-6.4 240.469334 46.421334 12.970666s-0.768 29.056-38.4 27.733334l-104.106667 2.901333c-2.816-6.613333 0.597333-22.698667 11.306667-25.429333l27.306666-7.210667 8.405334-317.866667-37.546667-4.522666c-2.645333-14.72 5.461333-35.370667 26.538667-36.266667l111.658666-4.224 146.986667 257.152 5.930667-222.762667-39.082667-6.272a26.453333 26.453333 0 0 1 24.917333-31.317333l104.106667-2.986667z"
            fill="#9da3ae"
            p-id="2595"
          />
          <path
            d="M736.341333 120.874667a2036.096 2036.096 0 0 0-448.682666 0c-85.845333 9.6-155.178667 77.226667-165.248 163.498666a1959.338667 1959.338667 0 0 0 0 455.253334c10.069333 86.272 79.36 153.898667 165.248 163.498666 147.882667 16.512 300.8 16.512 448.682666 0 85.845333-9.6 155.178667-77.226667 165.248-163.498666a1958.997333 1958.997333 0 0 0 0-455.253334c-10.069333-86.272-79.36-153.898667-165.248-163.498666z m-441.6 63.573333a1972.053333 1972.053333 0 0 1 434.517334 0c56.746667 6.4 102.186667 51.157333 108.8 107.392a1895.296 1895.296 0 0 1 0 440.32c-6.613333 56.234667-52.053333 101.034667-108.8 107.349333a1971.925333 1971.925333 0 0 1-434.517334 0c-56.746667-6.314667-102.186667-51.114667-108.8-107.349333a1895.296 1895.296 0 0 1 0-440.32c6.613333-56.234667 52.053333-101.034667 108.8-107.349333z"
            fill="#9da3ae"
            p-id="2596"
          />
        </svg>
        <h2 className="site-title">otion Avatar</h2>
      </div>
      <div className="header-right">
        <a
          href="https://github.com/zonemeen/react-notion-avatar"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <div className="github-logo">
            <svg viewBox="0 0 1024 1024">
              <path
                fill="#9da3ae"
                d="M512 42.666667A464.64 464.64 0 0 0 42.666667 502.186667 460.373333 460.373333 0 0 0 363.52 938.666667c23.466667 4.266667 32-9.813333 32-22.186667v-78.08c-130.56 27.733333-158.293333-61.44-158.293333-61.44a122.026667 122.026667 0 0 0-52.053334-67.413333c-42.666667-28.16 3.413333-27.733333 3.413334-27.733334a98.56 98.56 0 0 1 71.68 47.36 101.12 101.12 0 0 0 136.533333 37.973334 99.413333 99.413333 0 0 1 29.866667-61.44c-104.106667-11.52-213.333333-50.773333-213.333334-226.986667a177.066667 177.066667 0 0 1 47.36-124.16 161.28 161.28 0 0 1 4.693334-121.173333s39.68-12.373333 128 46.933333a455.68 455.68 0 0 1 234.666666 0c89.6-59.306667 128-46.933333 128-46.933333a161.28 161.28 0 0 1 4.693334 121.173333A177.066667 177.066667 0 0 1 810.666667 477.866667c0 176.64-110.08 215.466667-213.333334 226.986666a106.666667 106.666667 0 0 1 32 85.333334v125.866666c0 14.933333 8.533333 26.88 32 22.186667A460.8 460.8 0 0 0 981.333333 502.186667 464.64 464.64 0 0 0 512 42.666667"
              />
            </svg>
          </div>
        </a>
      </div>
    </header>
  )
}