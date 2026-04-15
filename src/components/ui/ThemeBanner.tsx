'use client'

import { motion } from 'framer-motion'
import { type PageTheme } from '@/types'

interface ThemeBannerProps {
  theme: PageTheme
  title: string
  subtitle?: string
  pattern?: 'dots' | 'stripes' | 'waves' | 'snake' | 'flames' | 'none'
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export const ThemeBanner = ({ theme, title, subtitle, pattern = 'none', size = 'lg' }: ThemeBannerProps) => {
  const sizeClasses = {
    sm: 'py-12 text-4xl',
    md: 'py-16 text-5xl',
    lg: 'py-24 text-6xl',
    xl: 'py-32 text-7xl'
  }

  const themeStyles = {
    fire: {
      gradient: 'bg-gradient-to-r from-orange-600 via-red-600 to-orange-800',
      text: 'text-white',
    },
    owyhee: {
      gradient: 'bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-600',
      text: 'text-white',
    },
    lakers: {
      gradient: 'bg-gradient-to-r from-purple-700 via-yellow-500 to-purple-800',
      text: 'text-white',
    },
    venice: {
      gradient: 'bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600',
      text: 'text-white',
    },
    mamba: {
      gradient: 'bg-gradient-to-r from-zinc-800 via-gray-900 to-black',
      text: 'text-gold-400',
    },
    community: {
      gradient: 'bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600',
      text: 'text-white',
    },
    snl: {
      gradient: 'bg-gradient-to-r from-purple-800 via-black to-yellow-600',
      text: 'text-white',
    },
    'new-balance': {
      gradient: 'bg-gradient-to-r from-red-600 via-purple-600 to-blue-600',
      text: 'text-white',
    },
    ballislife: {
      gradient: 'bg-gradient-to-r from-white via-gray-100 to-black',
      text: 'text-black',
    }
  }

  const patternStyles = {
    flames: 'flame-pattern',
    waves: 'wave-pattern',
    snake: 'snake-pattern',
    dots: 'dots-pattern',
    stripes: 'stripes-pattern',
    none: ''
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: 'spring' }}
      className={`relative w-full overflow-hidden ${sizeClasses[size]} ${themeStyles[theme].gradient} banner-glow`}
    >
      {/* Pattern Overlay */}
      {pattern !== 'none' && (
        <div className={`absolute inset-0 ${patternStyles[pattern]} opacity-30`} />
      )}

      {/* Animated Glow Effect */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-white/10 blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h1 
          className={`font-black ${themeStyles[theme].text} mb-4 drop-shadow-2xl`}
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p 
            className={`text-xl md:text-2xl ${themeStyles[theme].text} opacity-90 max-w-3xl mx-auto`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      {/* Decorative Border */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-50 ${themeStyles[theme].text}`} />
    </motion.div>
  )
}