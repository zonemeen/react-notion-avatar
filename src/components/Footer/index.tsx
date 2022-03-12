import React from 'react'

export default function footer() {
  return (
    <footer className="flex items-center justify-center text-gray-400 text-sm pb-5">
      <a
        href="https://www.buymeacoffee.com/miqilin18P"
        className="transition-opacity duration-300 hover:opacity-75"
      >
        Buy Me A Coffee
      </a>
      <span className="mx-3 relative -top-1">.</span>
      <a
        href="https://github.com/zonemeen/react-notion-avatar"
        className="transition-opacity duration-300 hover:opacity-75"
      >
        English
      </a>
    </footer>
  )
}
