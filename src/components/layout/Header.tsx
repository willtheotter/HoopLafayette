'use client'

import { MobileMenu } from './MobileMenu'
import { useState, useEffect } from 'react'

export const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? 'bg-black/80 backdrop-blur-md py-3' : 'bg-black/40 backdrop-blur-sm py-5'}`}
        suppressHydrationWarning
      >
        <div className="w-full px-4 flex items-center justify-between">
          <div className="w-16 lg:w-64" />

          <div className="flex items-center gap-4" suppressHydrationWarning>
            <span className="text-4xl lg:text-5xl filter drop-shadow-lg transform hover:scale-110 transition-transform">🏀</span>
            <h1 className="font-black text-5xl bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 text-transparent bg-clip-text tracking-tight">
              LAFAYETTE HOOP
            </h1>
            <span className="text-4xl lg:text-5xl filter drop-shadow-lg transform hover:scale-110 transition-transform">🏀</span>
          </div>

          <div className="w-16 lg:w-64 flex justify-end">
            <MobileMenu />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-400/70 to-transparent"
             style={{ left: '64px', right: '64px', width: 'calc(100% - 128px)' }} />
      </header>

      <div className="h-20 lg:h-24" />
    </>
  )
}