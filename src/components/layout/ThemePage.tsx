'use client'

import { type PageTheme } from '@/types'
import { GradientBackground } from '@/components/ui/GradientBackground'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

interface ThemePageProps {
  children: React.ReactNode
  theme: PageTheme
  gradient?: string
  className?: string
  animated?: boolean
}

export const ThemePage = ({ 
  children, 
  theme, 
  gradient, 
  className = '',
  animated = true 
}: ThemePageProps) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Page transition variants with proper Framer Motion types
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1] as const,
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const
      }
    }
  }

  // Content wrapper variants for nested animations
  const contentVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  }

  // Theme-specific animation configurations with proper types
  const getThemeTransition = () => {
    switch(theme) {
      case 'gold':
        return { 
          duration: 0.6, 
          type: "spring" as const, 
          stiffness: 200, 
          damping: 20 
        }
      case 'basketball-brown':
        return { 
          duration: 0.5, 
          type: "spring" as const, 
          bounce: 0.3, 
          stiffness: 250 
        }
      case 'green':
        return { 
          duration: 0.5, 
          ease: [0.25, 0.1, 0.25, 1] as const 
        }
      case 'fire':
        return { 
          duration: 0.4, 
          type: "tween" as const, 
          ease: "anticipate" as const 
        }
      case 'mamba':
        return { 
          duration: 0.6, 
          type: "tween" as const, 
          ease: "backOut" as const 
        }
      default:
        return { 
          duration: 0.5, 
          ease: "easeOut" as const 
        }
    }
  }

  const themeTransition = getThemeTransition()

  if (!mounted) {
    // Return a simple div during SSR to avoid hydration mismatch
    return (
      <div className={`relative min-h-screen ${className}`}>
        <div className="relative z-10">
          {children}
        </div>
      </div>
    )
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={theme}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={animated ? pageVariants : undefined}
        transition={animated ? themeTransition : undefined}
        className={`relative min-h-screen ${className}`}
      >
        {/* Gradient Background */}
        <GradientBackground theme={theme} gradient={gradient} />
        
        {/* Animated Overlay for extra polish */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="fixed inset-0 pointer-events-none z-[5]"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20" />
        </motion.div>

        {/* Main Content */}
        <motion.div 
          className="relative z-10"
          variants={animated ? contentVariants : undefined}
        >
          {children}
        </motion.div>

        {/* Subtle vignette effect */}
        <div className="fixed inset-0 pointer-events-none z-[2] bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.3)_100%)]" />
        
        {/* Scanline effect for retro feel */}
        <div className="fixed inset-0 pointer-events-none z-[3] opacity-10 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.1)_2px,rgba(0,0,0,0.1)_4px)]" />
      </motion.div>
    </AnimatePresence>
  )
}

// Optional: HOC for wrapping pages with ThemePage
export const withTheme = (Component: React.ComponentType, theme: PageTheme, gradient?: string) => {
  return function ThemeWrappedPage(props: any) {
    return (
      <ThemePage theme={theme} gradient={gradient}>
        <Component {...props} />
      </ThemePage>
    )
  }
}

// Optional: Hook for theme-aware components
export const useThemePage = (theme: PageTheme) => {
  const [themeConfig, setThemeConfig] = useState({
    accent: '',
    border: '',
    text: ''
  })

  useEffect(() => {
    const configs = {
      gold: { accent: 'text-yellow-400', border: 'border-yellow-500', text: 'text-white' },
      'basketball-brown': { accent: 'text-orange-400', border: 'border-orange-500', text: 'text-orange-100' },
      green: { accent: 'text-green-400', border: 'border-green-500', text: 'text-white' },
      fire: { accent: 'text-orange-500', border: 'border-orange-500', text: 'text-white' },
      mamba: { accent: 'text-yellow-400', border: 'border-yellow-400', text: 'text-yellow-400' },
      lakers: { accent: 'text-amber-400', border: 'border-amber-400', text: 'text-white' },
      venice: { accent: 'text-cyan-400', border: 'border-cyan-400', text: 'text-white' },
      owyhee: { accent: 'text-cyan-400', border: 'border-cyan-400', text: 'text-white' },
      community: { accent: 'text-emerald-400', border: 'border-emerald-400', text: 'text-white' },
      snl: { accent: 'text-yellow-400', border: 'border-yellow-400', text: 'text-white' },
      'new-balance': { accent: 'text-blue-400', border: 'border-blue-400', text: 'text-white' },
      ballislife: { accent: 'text-red-500', border: 'border-red-500', text: 'text-white' }
    }

    setThemeConfig(configs[theme] || configs.fire)
  }, [theme])

  return themeConfig
}