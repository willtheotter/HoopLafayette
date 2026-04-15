/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Lakers colors
        'lakers-purple': '#552583',
        'lakers-gold': '#FDB927',
        
        // Owyhee colors
        'owyhee-blue': '#4A7A9C',
        'owyhee-cyan': '#2EC4B6',
        
        // Venice colors
        'venice-sand': '#E6D5B8',
        'venice-wave': '#0B4F6C',
        
        // Mamba/Black & Gold colors
        'mamba-black': '#1A1A1A',
        'mamba-silver': '#B0B7BC',
        
        // Fire colors
        'fire-orange': '#FF6B35',
        'fire-red': '#F72585',
        
        // Gold color family (for black & gold theme)
        'gold': {
          50: '#FFF9E6',
          100: '#FFF3CC',
          200: '#FFE799',
          300: '#FFDB66',
          400: '#FFCF33',
          500: '#FFC300',
          600: '#CC9C00',
          700: '#997500',
          800: '#664E00',
          900: '#332700',
        },
        
        // Purple color family (for Lakers theme)
        'purple': {
          50: '#FAF5FF',
          100: '#F3E8FF',
          200: '#E9D5FF',
          300: '#D8B4FE',
          400: '#C084FC',
          500: '#A855F7',
          600: '#9333EA',
          700: '#7E22CE',
          800: '#6B21A5',
          900: '#581C87',
        },
      },
      backgroundImage: {
        'snake-pattern': "url('/images/snake-texture.png')",
        'wave-pattern': "url('/images/wave-pattern.svg')",
        'fire-pattern': "url('/images/fire-pattern.png')",
        'gradient-radial': 'radial-gradient(circle at center, transparent 0%, black 100%)',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
      },
      animation: {
        'flicker': 'flicker 3s infinite',
        'wave': 'wave 8s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-shift': 'gradientShift 12s ease infinite',
        'breath': 'breath 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 6s ease-in-out infinite',
        'noise-shift': 'noiseShift 8s steps(2) infinite',
        'text-shimmer': 'textShimmer 3s ease-in-out infinite',
        'text-flow': 'textFlow 4s ease-in-out infinite',
        'title-glow': 'titleGlow 3s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'bounce': 'bounce 1s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.8 },
        },
        wave: {
          '0%': { transform: 'translateX(0) translateY(0)' },
          '50%': { transform: 'translateX(-10px) translateY(-5px)' },
          '100%': { transform: 'translateX(0) translateY(0)' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        breath: {
          '0%, 100%': { opacity: 0.5 },
          '50%': { opacity: 0.8 },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.3, transform: 'scale(1)' },
          '50%': { opacity: 0.5, transform: 'scale(1.05)' },
        },
        noiseShift: {
          '0%': { transform: 'translate(0%, 0%)' },
          '25%': { transform: 'translate(2%, -1%)' },
          '50%': { transform: 'translate(-1%, 2%)' },
          '75%': { transform: 'translate(1%, -2%)' },
          '100%': { transform: 'translate(0%, 0%)' },
        },
        textShimmer: {
          '0%, 100%': { 
            opacity: 1, 
            backgroundPosition: '0% 50%' 
          },
          '50%': { 
            opacity: 0.95, 
            backgroundPosition: '100% 50%' 
          },
        },
        textFlow: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        titleGlow: {
          '0%, 100%': { 
            opacity: 1, 
            textShadow: '0 0 20px rgba(239, 68, 68, 0.3)' 
          },
          '50%': { 
            opacity: 0.95, 
            textShadow: '0 0 40px rgba(239, 68, 68, 0.6)' 
          },
        },
        fadeInUp: {
          from: {
            opacity: 0,
            transform: 'translateY(30px)',
          },
          to: {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      backgroundSize: {
        '200%': '200% 200%',
      },
      boxShadow: {
        'glow-fire': '0 0 30px rgba(255, 69, 0, 0.7)',
        'glow-lakers': '0 0 30px rgba(253, 185, 39, 0.6)',
        'glow-mamba': '0 0 30px rgba(255, 215, 0, 0.3)',
        'glow-venice': '0 0 30px rgba(0, 255, 255, 0.5)',
      },
    },
  },
  plugins: [],
}