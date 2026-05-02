'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export const Footer = () => {
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Helper function to get theme-based accent color
  const getAccentColor = () => {
    if (!mounted) return 'hover:text-yellow-400'
    
    switch(pathname) {
      case '/youtube-classics':
        return 'hover:text-yellow-400'
      case '/nba-highlights':
        return 'hover:text-orange-400'
      case '/newsletter':
        return 'hover:text-green-400'
      case '/ballislife':
        return 'hover:text-red-400'
      case '/kobe-tribute':
        return 'hover:text-yellow-400'
      case '/snl':
        return 'hover:text-yellow-400'
      case '/venice-beach':
        return 'hover:text-cyan-400'
      case '/new-balance':
        return 'hover:text-red-400'
      case '/laffy-moments':
        return 'hover:text-cyan-400'
      case '/gotd':
        return 'hover:text-yellow-400'
      default:
        return 'hover:text-yellow-400'
    }
  }

  // Helper function to get theme-based border color
  const getBorderColor = () => {
    if (!mounted) return 'border-yellow-500/20'
    
    switch(pathname) {
      case '/youtube-classics':
        return 'border-yellow-500/20'
      case '/nba-highlights':
        return 'border-orange-500/20'
      case '/newsletter':
        return 'border-green-500/20'
      case '/ballislife':
        return 'border-red-500/20'
      case '/kobe-tribute':
        return 'border-yellow-500/20'
      case '/snl':
        return 'border-yellow-500/20'
      case '/venice-beach':
        return 'border-cyan-500/20'
      case '/new-balance':
        return 'border-red-500/20'
      case '/laffy-moments':
        return 'border-cyan-500/20'
      case '/gotd':
        return 'border-purple-500/20'
      default:
        return 'border-yellow-500/20'
    }
  }

  const accentColor = getAccentColor()
  const borderColor = getBorderColor()

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: "What's Hot", path: '/' },
    { name: 'Game of the Day', path: '/gotd' },
    { name: 'Laffy Moments', path: '/laffy-moments' },
    { name: 'Summer Night Lights', path: '/snl' },
    { name: 'New Balance', path: '/new-balance' },
    { name: 'Venice Beach', path: '/venice-beach' },
    { name: 'Ballislife', path: '/ballislife' },
    { name: 'Kobe Tribute', path: '/kobe-tribute' },
  ]

  const newPages = [
    { name: 'YouTube Classics', path: '/youtube-classics', icon: '🏆' },
    { name: 'NBA Highlights', path: '/nba-highlights', icon: '🏀' },
    { name: 'Newsletter', path: '/newsletter', icon: '📧' },
    { name: 'All Themes', path: '/themes', icon: '🎨' },
  ]

  const socialLinks = [
    { name: 'Instagram', url: 'https://www.instagram.com/lafayettehoop', icon: '📸', color: 'hover:text-pink-500' },
    { name: 'YouTube', url: 'https://www.youtube.com/@lafayettehoop', icon: '▶️', color: 'hover:text-red-600' },
    { name: 'Twitter/X', url: 'https://twitter.com/lafayettehoop', icon: '🐦', color: 'hover:text-blue-400' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@lafayettehoop', icon: '📱', color: 'hover:text-black' },
  ]

  const categories = [
    { name: '🏀 Highlights', count: '240+' },
    { name: '🔥 Streetball', count: '100+' },
    { name: '🏆 Championships', count: '15+' },
    { name: '🌟 Player Spotlights', count: '50+' },
    { name: '📅 Events & Leagues', count: '30+' },
    { name: '🎬 Documentaries', count: '12+' },
  ]

  return (
    <footer className={`bg-gradient-to-b from-black/80 to-black/95 backdrop-blur-md border-t ${borderColor} py-12 mt-20`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-3xl">🏀</span>
              <h3 className="text-white font-black text-xl tracking-tight">
                LAFAYETTE<span className="text-yellow-500">HOOP</span>
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              The hottest street basketball highlights, reels, and community moments. 
              Where legends are made and culture lives.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span>Always Live • Always Hooping</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <span>🔗</span> Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.slice(0, 6).map((link) => (
                <li key={link.path}>
                  <Link 
                    href={link.path} 
                    className={`text-gray-400 text-sm transition-all duration-300 ${accentColor} hover:translate-x-1 inline-block`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <span>📊</span> Categories
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {categories.map((category) => (
                <div key={category.name} className="group cursor-pointer">
                  <div className="text-gray-400 text-sm transition-all duration-300 group-hover:translate-x-1">
                    <span className={`${accentColor} transition-colors`}>{category.name}</span>
                    <span className="text-gray-600 text-xs ml-1">({category.count})</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* New Pages & Social */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <span>✨</span> New & Featured
            </h4>
            <ul className="space-y-2 mb-6">
              {newPages.map((page) => (
                <li key={page.path}>
                  <Link 
                    href={page.path} 
                    className={`text-gray-400 text-sm transition-all duration-300 ${accentColor} hover:translate-x-1 inline-flex items-center gap-2 group`}
                  >
                    <span className="text-base group-hover:scale-110 transition-transform">{page.icon}</span>
                    <span>{page.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <span>🌐</span> Follow Us
            </h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} text-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-1`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className={`border-t ${borderColor} pt-6 mb-6`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="group cursor-pointer">
              <div className="text-2xl font-black text-yellow-500 group-hover:scale-110 transition-transform">240+</div>
              <div className="text-xs text-gray-500">Videos</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-2xl font-black text-yellow-500 group-hover:scale-110 transition-transform">100K+</div>
              <div className="text-xs text-gray-500">Views</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-2xl font-black text-yellow-500 group-hover:scale-110 transition-transform">50+</div>
              <div className="text-xs text-gray-500">Players</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-2xl font-black text-yellow-500 group-hover:scale-110 transition-transform">∞</div>
              <div className="text-xs text-gray-500">Community</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`border-t ${borderColor} pt-6 flex flex-col md:flex-row justify-between items-center gap-4`}>
          <div className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Lafayette Hoop. All rights reserved. | Street Basketball Culture
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-xs">
            <Link href="/privacy" className="text-gray-500 hover:text-yellow-400 transition">Privacy Policy</Link>
            <span className="text-gray-700">•</span>
            <Link href="/terms" className="text-gray-500 hover:text-yellow-400 transition">Terms of Service</Link>
            <span className="text-gray-700">•</span>
            <Link href="/contact" className="text-gray-500 hover:text-yellow-400 transition">Contact</Link>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 bg-yellow-500/20 backdrop-blur-sm text-yellow-400 p-3 rounded-full hover:bg-yellow-500/40 transition-all duration-300 hover:scale-110 z-40 hidden md:block"
          aria-label="Back to top"
        >
          ↑
        </button>
      </div>
    </footer>
  )
}