'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { createPortal } from 'react-dom'

const navItems = [
  { name: "WHAT'S HOT", path: '/' },
  { name: 'GAME OF THE DAY', path: '/gotd' },
  { name: 'LAFFY MOMENTS', path: '/laffy-moments' },
  { name: 'SUMMER NIGHT LIGHTS', path: '/snl' },
  { name: 'NEW BALANCE', path: '/new-balance' },
  { name: 'VENICE BEACH', path: '/venice-beach' },
  { name: 'BALLISLIFE', path: '/ballislife' },
  { name: 'KOBE TRIBUTE', path: '/kobe-tribute' },
  
  // ========== NEW PAGES ==========
  { name: '🏆 YOUTUBE CLASSICS', path: '/youtube-classics' },
  { name: '🏀 NBA HIGHLIGHTS', path: '/nba-highlights' },
  { name: '📧 NEWSLETTER', path: '/newsletter' },
]

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Don't render anything on server to avoid hydration mismatch
  if (!mounted) return null

  const buttonClass = 'lg:hidden fixed top-8 left-4 z-[100] w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 shadow-lg flex items-center justify-center hover:scale-105 transition-all duration-300'

  // Helper function to get theme-specific styles for active page
  const getActiveStyles = (path: string) => {
    if (pathname !== path) return ''
    
    switch(path) {
      case '/youtube-classics':
        return 'border-yellow-400 bg-gradient-to-r from-yellow-500/20 to-transparent'
      case '/nba-highlights':
        return 'border-orange-500 bg-gradient-to-r from-orange-500/20 to-transparent'
      case '/newsletter':
        return 'border-green-500 bg-gradient-to-r from-green-500/20 to-transparent'
      default:
        return 'border-yellow-400 bg-gradient-to-r from-yellow-500/20 to-transparent'
    }
  }

  // Helper function to get active text color
  const getActiveTextColor = (path: string) => {
    if (pathname !== path) return 'text-white'
    
    switch(path) {
      case '/youtube-classics':
        return 'text-yellow-400'
      case '/nba-highlights':
        return 'text-orange-400'
      case '/newsletter':
        return 'text-green-400'
      default:
        return 'text-yellow-400'
    }
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={buttonClass}
        aria-label="Open menu"
      >
        <div className="flex flex-col items-center justify-center gap-1.5">
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </div>
      </button>

      {isOpen && createPortal(
        <div className="fixed inset-0 z-[9999]">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/95 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          ></div>
          
          {/* Menu Panel */}
          <div className="absolute left-0 top-0 bottom-0 w-80 bg-gradient-to-b from-gray-900 to-black shadow-2xl rounded-r-3xl overflow-hidden">
            <div className="absolute -top-6 left-0 right-0 h-12 bg-gradient-to-b from-yellow-400/20 to-transparent rounded-t-full transform scale-x-110"></div>
            
            <div className="relative pt-32 pb-6 px-6 border-b border-white/10">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 text-transparent bg-clip-text">
                  LAFAYETTE HOOP
                </h2>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-110"
                >
                  ✕
                </button>
              </div>
              <p className="text-sm text-gray-400 mt-3">Street Basketball Culture</p>
            </div>

            <nav className="px-4 py-8 max-h-[calc(100vh-320px)] overflow-y-auto">
              {navItems.map((item) => {
                const isActive = pathname === item.path
                const activeStyles = getActiveStyles(item.path)
                const activeTextColor = getActiveTextColor(item.path)
                
                const linkClass = `block px-4 py-5 mb-2 rounded-xl transition-all cursor-pointer transform hover:translate-x-2 ${
                  isActive 
                    ? `${activeStyles} border-l-4 font-bold ${activeTextColor}`
                    : 'text-white hover:bg-white/10'
                }`
                
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={linkClass}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-base font-medium">{item.name}</span>
                  </Link>
                )
              })}
            </nav>

            {/* Special Section for New Pages Hint */}
            <div className="px-4 py-3 mx-4 mb-4 rounded-xl bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-green-500/10 border border-white/5">
              <p className="text-xs text-center text-gray-400">
                🏆 New: YouTube Classics • 🏀 NBA Highlights • 📧 Newsletter
              </p>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 bg-gradient-to-t from-black to-transparent">
              <div className="flex justify-around text-sm text-gray-400">
                <span>📱 v2.0</span>
                <span>🏀 est. 2024</span>
                <span>🔥 live</span>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}