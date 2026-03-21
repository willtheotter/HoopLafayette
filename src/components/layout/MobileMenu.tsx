'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: "WHAT'S HOT", path: '/' },
  { name: 'GAME OF THE DAY', path: '/gotd' },
  { name: 'LAFFY MOMENTS', path: '/laffy-moments' },
  { name: 'SUMMER NIGHT LIGHTS', path: '/snl' },
  { name: 'NEW BALANCE', path: '/new-balance' },
  { name: 'VENICE BEACH', path: '/venice-beach' },
  { name: 'BALLISLIFE', path: '/ballislife' },
  { name: 'KOBE TRIBUTE', path: '/kobe-tribute' }
]

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

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

  const buttonClass = 'lg:hidden fixed top-8 left-4 z-[100] w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 shadow-lg flex items-center justify-center hover:scale-105 transition-all duration-300'

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

      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-[200]">
          <div 
            className="absolute inset-0 bg-black/95 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          ></div>
          
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
              {navItems.map((item, index) => {
                const isActive = pathname === item.path
                const linkClass = `block px-4 py-5 mb-2 rounded-xl text-white hover:bg-white/10 transition-all cursor-pointer transform hover:translate-x-2 ${
                  isActive ? 'bg-gradient-to-r from-yellow-500/20 to-transparent border-l-4 border-yellow-400 font-bold' : ''
                }`
                
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={linkClass}
                    onClick={() => setIsOpen(false)}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="text-base font-medium">{item.name}</span>
                  </Link>
                )
              })}
            </nav>

            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 bg-gradient-to-t from-black to-transparent">
              <div className="flex justify-around text-sm text-gray-400">
                <span>📱 v1.0</span>
                <span>🏀 est. 2024</span>
                <span>🔥 live</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}