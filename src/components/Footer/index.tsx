import React from 'react'

type FooterProps = {
  language: string
  onLanguageChange: (language: string) => void
}

export default function footer({ language, onLanguageChange }: FooterProps) {
  return (
    <footer className="flex items-center justify-center text-gray-400 text-sm pb-5">
      <a
        href="https://www.buymeacoffee.com/miqilin18P"
        target="_blank"
        rel="nofollow noopener noreferrer"
        className="transition-opacity duration-300 hover:opacity-75"
      >
        Buy Me A Coffee
      </a>
      <span className="mx-3 relative -top-1">.</span>
      <span
        className="transition-opacity cursor-pointer duration-300 hover:opacity-75"
        onClick={() => onLanguageChange(language === 'en' ? 'zh' : 'en')}
      >
        {language === 'en' ? '简体中文' : 'English'}
      </span>
    </footer>
  )
}
