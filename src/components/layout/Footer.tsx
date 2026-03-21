'use client'

import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-md border-t border-white/10 py-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Lafayette Hoop</h3>
            <p className="text-gray-400 text-sm">The hottest street basketball highlights, reels, and community moments.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-yellow-400 transition">Home</Link></li>
              <li><Link href="/laffy-moments" className="hover:text-yellow-400 transition">Laffy Moments</Link></li>
              <li><Link href="/kobe-tribute" className="hover:text-yellow-400 transition">Kobe Tribute</Link></li>
              <li><Link href="/venice-beach" className="hover:text-yellow-400 transition">Venice Beach</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Highlights</li>
              <li>1s, 2s, 3s</li>
              <li>Park Takeovers</li>
              <li>Events & Leagues</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-2xl transition">📷</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-2xl transition">📺</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-2xl transition">🐦</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-2xl transition">📱</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-4 text-center text-gray-500 text-sm">
          © 2024 Lafayette Hoop. All rights reserved. | Street Basketball Culture
        </div>
      </div>
    </footer>
  )
}