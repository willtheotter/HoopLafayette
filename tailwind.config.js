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
        'lakers-purple': '#552583',
        'lakers-gold': '#FDB927',
        'owyhee-blue': '#4A7A9C',
        'owyhee-cyan': '#2EC4B6',
        'venice-sand': '#E6D5B8',
        'venice-wave': '#0B4F6C',
        'mamba-black': '#1A1A1A',
        'mamba-silver': '#B0B7BC',
        'fire-orange': '#FF6B35',
        'fire-red': '#F72585',
      },
      backgroundImage: {
        'snake-pattern': "url('/images/snake-texture.png')",
        'wave-pattern': "url('/images/wave-pattern.svg')",
        'fire-pattern': "url('/images/fire-pattern.png')",
      },
      animation: {
        'flicker': 'flicker 3s infinite',
        'wave': 'wave 8s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
        }
      }
    },
  },
  plugins: [],
}