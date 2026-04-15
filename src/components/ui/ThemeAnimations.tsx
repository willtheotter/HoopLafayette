'use client'

import { motion } from 'framer-motion'
import { type PageTheme } from '@/types'

interface ThemeAnimationProps {
  theme: PageTheme
  children: React.ReactNode
  delay?: number
}

export const ThemeAnimations = ({ theme, children, delay = 0 }: ThemeAnimationProps) => {
  // Animation variants based on theme
  const getAnimationVariants = () => {
    switch(theme) {
      case 'fire':
        return {
          initial: { opacity: 0, scale: 0.9 },
          animate: { opacity: 1, scale: 1 },
          hover: { scale: 1.05 },
          transition: { duration: 0.3, delay }
        }
      case 'venice':
        return {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          hover: { y: -5 },
          transition: { duration: 0.3, delay }
        }
      case 'mamba':
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          hover: { scale: 1.02 },
          transition: { duration: 0.3, delay }
        }
      case 'lakers':
        return {
          initial: { opacity: 0, x: -20 },
          animate: { opacity: 1, x: 0 },
          hover: { scale: 1.02, x: 5 },
          transition: { duration: 0.4, delay }
        }
      case 'owyhee':
        return {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          hover: { y: -3 },
          transition: { duration: 0.4, delay, ease: "easeOut" }
        }
      case 'snl':
        return {
          initial: { opacity: 0, rotate: -5 },
          animate: { opacity: 1, rotate: 0 },
          hover: { rotate: 2 },
          transition: { duration: 0.35, delay }
        }
      case 'new-balance':
        return {
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: 1, scale: 1 },
          hover: { scale: 1.03 },
          transition: { duration: 0.3, delay }
        }
      case 'ballislife':
        return {
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 },
          hover: { y: -2 },
          transition: { duration: 0.35, delay }
        }
      default:
        return {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          hover: { scale: 1.02 },
          transition: { duration: 0.3, delay }
        }
    }
  }

  const variants = getAnimationVariants()

  return (
    <motion.div
      initial={variants.initial}
      animate={variants.animate}
      whileHover={variants.hover}
      transition={variants.transition}
      className="w-full"
    >
      {children}
    </motion.div>
  )
}

// Page transition variants
export const pageVariants = {
  initial: { 
    opacity: 0,
    y: 20
  },
  animate: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  exit: { 
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  }
}

// Staggered item variants
export const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

export const itemVariants = {
  initial: { 
    opacity: 0, 
    y: 20,
    scale: 0.95
  },
  animate: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
}

// Card hover animations
export const cardHoverVariants = {
  initial: { 
    scale: 1,
    y: 0
  },
  hover: { 
    scale: 1.03,
    y: -5,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1
    }
  }
}

// Fade in up animation
export const fadeInUpVariants = {
  initial: { 
    opacity: 0, 
    y: 30 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

// Scale animation
export const scaleVariants = {
  initial: { 
    scale: 0.9,
    opacity: 0
  },
  animate: { 
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
}

// Slide in from left
export const slideLeftVariants = {
  initial: { 
    x: -50,
    opacity: 0
  },
  animate: { 
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
}

// Slide in from right
export const slideRightVariants = {
  initial: { 
    x: 50,
    opacity: 0
  },
  animate: { 
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
}

// Theme-specific animation sequences
export const getThemeSequence = (theme: PageTheme) => {
  const sequences = {
    fire: {
      duration: 0.3,
      ease: "anticipate",
      scale: 1.05
    },
    mamba: {
      duration: 0.4,
      ease: "backOut",
      scale: 1.02
    },
    venice: {
      duration: 0.35,
      ease: "easeOut",
      y: -5
    },
    lakers: {
      duration: 0.3,
      ease: "easeInOut",
      x: 5
    },
    default: {
      duration: 0.3,
      ease: "easeOut",
      scale: 1.02
    }
  }
  
  return sequences[theme] || sequences.default
}