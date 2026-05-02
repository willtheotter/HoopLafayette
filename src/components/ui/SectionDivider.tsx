'use client'

import { motion } from 'framer-motion'
import { type PageTheme } from '@/types'

interface SectionDividerProps {
  theme: PageTheme
  variant?: 'wave' | 'angle' | 'curve' | 'straight'
  className?: string
}

export const SectionDivider = ({ theme, variant = 'wave', className = '' }: SectionDividerProps) => {
  const themeColorClasses = {
    fire: 'text-orange-500',
    owyhee: 'text-cyan-400',
    lakers: 'text-amber-400',
    venice: 'text-cyan-400',
    mamba: 'text-yellow-400',
    community: 'text-emerald-400',
    snl: 'text-yellow-400',
    'new-balance': 'text-blue-400',
    ballislife: 'text-red-500',
    
    // ========== NEW THEMES ==========
    gold: 'text-yellow-500',
    'basketball-brown': 'text-orange-500',
    green: 'text-green-500',
  }

  // Theme-specific animation variants
  const getAnimationConfig = () => {
    switch(theme) {
      case 'gold':
        return { duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] as const }
      case 'basketball-brown':
        return { duration: 0.5, type: "spring" as const, bounce: 0.4, stiffness: 200 }
      case 'green':
        return { duration: 0.5, ease: "easeOut" as const }
      default:
        return { duration: 0.8, ease: "easeOut" as const }
    }
  }

  const variants = {
    wave: (
      <svg className="w-full h-16 fill-current" preserveAspectRatio="none" viewBox="0 0 1200 120">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" />
        <path d="M0,0V15.81C13,21.25,27.93,25.68,44.5,28.45c69.76,11.37,141.21,7.89,212.11-2.58C366.32,8.12,457.38,31.74,543.75,46.58c78.14,13.45,158.08,14.52,236.27-5.47,39.56-10.1,79.44-20.62,119.48-25.66,46.15-5.8,92.3-5.66,138.5.58C1128.9,25.71,1169.39,44.09,1200,63.39V0Z" opacity=".5" />
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" />
      </svg>
    ),
    angle: (
      <svg className="w-full h-16 fill-current" preserveAspectRatio="none" viewBox="0 0 1200 120">
        <path d="M1200 120L0 16.48V0h1200v120z" />
      </svg>
    ),
    curve: (
      <svg className="w-full h-16 fill-current" preserveAspectRatio="none" viewBox="0 0 1200 120">
        <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" />
      </svg>
    ),
    straight: (
      <div className="w-full h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-30" />
    )
  }

  const animationConfig = getAnimationConfig()

  // Special animation for basketball-brown (spring bounce)
  const isSpringTheme = theme === 'basketball-brown'

  return (
    <div className={`w-full overflow-hidden ${themeColorClasses[theme]} ${className} section-divider`}>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={animationConfig}
        className="origin-left"
      >
        {/* Add subtle gradient overlay for gold theme */}
        {theme === 'gold' && (
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-transparent to-yellow-500/20 pointer-events-none" />
        )}
        
        {/* Add bounce effect container for basketball theme */}
        <motion.div
          animate={isSpringTheme ? {
            y: [0, -5, 0],
            scale: [1, 1.02, 1]
          } : {}}
          transition={isSpringTheme ? {
            duration: 0.3,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeOut"
          } : {}}
        >
          {variants[variant]}
        </motion.div>
        
        {/* Add subtle glow for green theme */}
        {theme === 'green' && (
          <div className="absolute inset-0 bg-gradient-to-t from-green-500/10 via-transparent to-transparent pointer-events-none" />
        )}
      </motion.div>
    </div>
  )
}