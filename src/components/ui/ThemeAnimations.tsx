'use client'

import { motion } from 'framer-motion'
import { type PageTheme } from '@/types'

interface ThemeAnimationProps {
  theme: PageTheme
  children: React.ReactNode
}

export const ThemeAnimations = ({ theme, children }: ThemeAnimationProps) => {
  // Simple animation variants without complex transitions
  const getAnimationProps = () => {
    switch(theme) {
      case 'fire':
        return {
          initial: { opacity: 0, scale: 0.9 },
          animate: { opacity: 1, scale: 1 },
          whileHover: { scale: 1.05 },
          transition: { duration: 0.3 }
        }
      case 'venice':
        return {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          whileHover: { y: -5 },
          transition: { duration: 0.3 }
        }
      case 'mamba':
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          whileHover: { scale: 1.02 },
          transition: { duration: 0.3 }
        }
      default:
        return {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          whileHover: { scale: 1.02 },
          transition: { duration: 0.3 }
        }
    }
  }

  return (
    <motion.div
      {...getAnimationProps()}
      className="w-full"
    >
      {children}
    </motion.div>
  )
}

// Simple page transitions
export const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}

export const itemVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 }
}