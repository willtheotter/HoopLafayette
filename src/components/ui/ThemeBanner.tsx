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
      shadow: 'shadow-[0_0_30px_rgba(255,69,0,0.7)]',
      text: 'text-white',
      border: 'border-orange-400'
    },
    owyhee: {
      gradient: 'bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-600',
      shadow: 'shadow-[0_0_30px_rgba(0,255,255,0.5)]',
      text: 'text-white',
      border: 'border-cyan-400'
    },
    lakers: {
      gradient: 'bg-gradient-to-r from-purple-700 via-yellow-500 to-purple-800',
      shadow: 'shadow-[0_0_30px_rgba(253,185,39,0.6)]',
      text: 'text-white',
      border: 'border-yellow-400'
    },
    venice: {
      gradient: 'bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600',
      shadow: 'shadow-[0_0_30px_rgba(0,255,255,0.5)]',
      text: 'text-white',
      border: 'border-cyan-300'
    },
    mamba: {
      gradient: 'bg-gradient-to-r from-zinc-800 via-gray-900 to-black',
      shadow: 'shadow-[0_0_30px_rgba(255,215,0,0.3)]',
      text: 'text-yellow-400',
      border: 'border-yellow-500'
    },
    community: {
      gradient: 'bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600',
      shadow: 'shadow-[0_0_30px_rgba(0,255,0,0.3)]',
      text: 'text-white',
      border: 'border-green-400'
    },
    snl: {
      gradient: 'bg-gradient-to-r from-purple-800 via-black to-yellow-600',
      shadow: 'shadow-[0_0_30px_rgba(168,85,247,0.5)]',
      text: 'text-white',
      border: 'border-yellow-500'
    },
    'new-balance': {
      gradient: 'bg-gradient-to-r from-red-600 via-purple-600 to-blue-600',
      shadow: 'shadow-[0_0_30px_rgba(220,38,38,0.5)]',
      text: 'text-white',
      border: 'border-blue-400'
    },
    ballislife: {
      gradient: 'bg-gradient-to-r from-white via-gray-100 to-black',
      shadow: 'shadow-[0_0_30px_rgba(0,0,0,0.5)]',
      text: 'text-black',
      border: 'border-yellow-500'
    }
  }

  const patternStyles = {
    flames: 'bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]',
    waves: 'bg-[repeating-linear-gradient(45deg,_transparent,_transparent_10px,_rgba(255,255,255,0.1)_10px,_rgba(255,255,255,0.1)_20px)]',
    snake: 'bg-[repeating-linear-gradient(45deg,_transparent,_transparent_20px,_rgba(255,215,0,0.1)_20px,_rgba(255,215,0,0.1)_40px)]',
    dots: 'bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:20px_20px]',
    stripes: 'bg-[repeating-linear-gradient(45deg,_rgba(255,255,255,0.1)_0px,_rgba(255,255,255,0.1)_10px,_transparent_10px,_transparent_20px)]',
    none: ''
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: 'spring' }}
      className={`relative w-full overflow-hidden ${sizeClasses[size]} ${themeStyles[theme].gradient} ${themeStyles[theme].shadow}`}
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
      <div className={`absolute bottom-0 left-0 right-0 h-1 ${themeStyles[theme].border} opacity-50`} />
    </motion.div>
  )
}