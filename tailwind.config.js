/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0D1F3C',
          light: '#142850',
          mid: '#0f2748',
          dark: '#081629',
          card: '#0e2240',
        },
        'arc-blue': {
          DEFAULT: '#1A7FAD',
          light: '#2191C3',
          dark: '#156890',
        },
        'vara-teal': {
          DEFAULT: '#00C2CB',
          light: '#20D4DD',
          dark: '#009ea6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'dash': 'dash 4s linear infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          from: { boxShadow: '0 0 10px #00C2CB40, 0 0 20px #00C2CB20' },
          to: { boxShadow: '0 0 20px #00C2CB80, 0 0 40px #00C2CB40' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'grid-navy': 'linear-gradient(rgba(26,127,173,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(26,127,173,0.05) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
    },
  },
  plugins: [],
}
