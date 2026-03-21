'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function OfflinePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-black 
                    flex items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md text-center"
      >
        <div className="text-9xl mb-6 animate-bounce">🏀</div>
        <h1 className="text-4xl font-bold text-white mb-4">You're Offline</h1>
        <p className="text-gray-300 mb-8">
          Don't worry! You can still check out your favorite cached highlights 
          or connect to the internet for the full experience.
        </p>
        <div className="space-y-4">
          <Link
            href="/"
            className="block w-full px-6 py-3 bg-gradient-to-r 
                     from-yellow-400 to-purple-600 text-white 
                     rounded-lg font-semibold hover:scale-105 
                     transform transition-all duration-300"
          >
            Try Home Page (Cached)
          </Link>
          <button
            onClick={() => window.location.reload()}
            className="block w-full px-6 py-3 bg-white/10 text-white 
                     rounded-lg font-semibold hover:bg-white/20 
                     transition-colors duration-300"
          >
            Retry Connection
          </button>
        </div>
      </motion.div>
    </div>
  )
}