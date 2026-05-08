import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'uhuy-blue': '#0052CC',
        'uhuy-green': '#34D399',
        'uhuy-white': '#FFFFFF',
        'uhuy-light-gray': '#F4F7FA',
        'uhuy-dark': '#1F2937',
        'uhuy-border': '#E5E7EB',
      },
      fontFamily: {
        sans: ['Inter', 'Montserrat', 'Roboto', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
