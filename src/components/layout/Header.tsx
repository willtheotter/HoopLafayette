'use client'

import { MobileMenu } from './MobileMenu'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Helper function to get theme-based gradient for active page
  const getHeaderGradient = () => {
    if (!mounted) return 'from-yellow-400 via-amber-500 to-yellow-600'
    
    switch(pathname) {
      case '/youtube-classics':
        return 'from-amber-400 via-yellow-500 to-amber-600'
      case '/nba-highlights':
        return 'from-orange-500 via-amber-500 to-orange-600'
      case '/newsletter':
        return 'from-emerald-500 via-green-500 to-emerald-600'
      case '/ballislife':
        return 'from-red-600 via-slate-400 to-red-600'
      case '/kobe-tribute':
        return 'from-amber-500 via-yellow-500 to-amber-600'
      case '/snl':
        return 'from-purple-500 via-yellow-500 to-purple-600'
      case '/venice-beach':
        return 'from-cyan-500 via-blue-500 to-cyan-600'
      case '/new-balance':
        return 'from-red-600 via-blue-600 to-red-600'
      case '/laffy-moments':
        return 'from-cyan-500 via-teal-500 to-cyan-600'
      case '/gotd':
        return 'from-amber-500 via-purple-500 to-amber-600'
      default:
        return 'from-yellow-400 via-amber-500 to-yellow-600'
    }
  }

  // Helper function to get theme-based border color
  const getBorderColor = () => {
    if (!mounted) return 'via-yellow-400/70'
    
    switch(pathname) {
      case '/youtube-classics':
        return 'via-yellow-500/70'
      case '/nba-highlights':
        return 'via-orange-500/70'
      case '/newsletter':
        return 'via-green-500/70'
      case '/ballislife':
        return 'via-red-500/70'
      case '/kobe-tribute':
        return 'via-yellow-500/70'
      case '/snl':
        return 'via-yellow-500/70'
      case '/venice-beach':
        return 'via-cyan-500/70'
      case '/new-balance':
        return 'via-red-500/70'
      case '/laffy-moments':
        return 'via-cyan-500/70'
      case '/gotd':
        return 'via-purple-500/70'
      default:
        return 'via-yellow-400/70'
    }
  }

  const headerGradient = getHeaderGradient()
  const borderColor = getBorderColor()

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
        ${scrolled 
          ? 'bg-black/90 backdrop-blur-md py-3 shadow-2xl shadow-black/50' 
          : 'bg-black/40 backdrop-blur-sm py-5'}`}
        suppressHydrationWarning
      >
        {/* Animated background overlay */}
        <div className={`absolute inset-0 bg-gradient-to-r ${headerGradient} opacity-0 transition-opacity duration-500 ${
          scrolled ? 'opacity-5' : 'opacity-0'
        }`} />
        
        <div className="w-full px-4 flex items-center justify-between">
          {/* Left spacer - visible on desktop */}
          <div className="hidden lg:block w-64" />
          
          {/* Mobile left spacer - for balance */}
          <div className="lg:hidden w-16" />

          {/* Logo Section */}
          <Link href="/" className="group cursor-pointer">
            <div className="flex items-center gap-3 lg:gap-4 transition-all duration-300 hover:scale-105">
              <span className="text-3xl lg:text-5xl filter drop-shadow-lg transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                🏀
              </span>
              <div className="relative">
                <h1 className="font-black text-3xl lg:text-5xl bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 text-transparent bg-clip-text tracking-tight whitespace-nowrap">
                  LAFAYETTE HOOP
                </h1>
                {/* Animated underline on hover */}
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
              <span className="text-3xl lg:text-5xl filter drop-shadow-lg transform transition-all duration-300 group-hover:-rotate-12 group-hover:scale-110">
                🏀
              </span>
            </div>
          </Link>

          {/* Right side - Mobile menu */}
          <div className="hidden lg:block w-64" />
          <div className="lg:hidden">
            <MobileMenu />
          </div>
        </div>

        {/* Animated bottom border */}
        <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent ${borderColor} to-transparent transition-all duration-300`}
             style={{ left: '16px', right: '16px', width: 'calc(100% - 32px)' }} />
        
        {/* Animated glow effect on scroll */}
        {scrolled && (
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-4 bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent blur-xl animate-pulse" />
        )}
      </header>

      {/* Spacer to prevent content from hiding under fixed header */}
      <div className="h-20 lg:h-24" />
    </>
  )
}