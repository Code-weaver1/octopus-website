import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        octopus: {
          void: '#020204',
          ink: '#0A0A0C',
          charcoal: '#141418',
          ash: '#1E1E24',
          slate: '#2A2A32',
          muted: '#6B6B75',
          silver: '#9A9AA8',
          cream: '#F0EDE8',
          gold: '#D4A574',
          copper: '#C8956C',
          amber: '#E8B87D',
          teal: '#4A9EAF',
          cyan: '#5BC4D4',
        },
        border: 'rgba(255,255,255,0.06)',
        input: 'rgba(255,255,255,0.08)',
        ring: '#D4A574',
        background: '#020204',
        foreground: '#F0EDE8',
        primary: { DEFAULT: '#D4A574', foreground: '#020204' },
        secondary: { DEFAULT: '#141418', foreground: '#F0EDE8' },
        destructive: { DEFAULT: '#E5484D', foreground: '#F0EDE8' },
        muted: { DEFAULT: '#141418', foreground: '#6B6B75' },
        accent: { DEFAULT: '#1E1E24', foreground: '#F0EDE8' },
        card: { DEFAULT: '#0A0A0C', foreground: '#F0EDE8' },
        'card-foreground': '#F0EDE8',
      },
      fontFamily: {
        display: ['"Syne"', 'sans-serif'],
        body: ['"Outfit"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(3.5rem, 10vw, 9rem)', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
        'display-lg': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'display-md': ['clamp(1.8rem, 4vw, 3rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
      },
      animation: {
        spotlight: 'spotlight 2s ease .75s 1 forwards',
        marquee: 'marquee 40s linear infinite',
        'marquee-slow': 'marquee 60s linear infinite',
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 3s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'fade-in': 'fadeIn 0.8s ease forwards',
        'slide-up': 'slideUp 0.8s ease forwards',
        'scale-in': 'scaleIn 0.6s ease forwards',
        ping: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        spotlight: {
          '0%': { opacity: '0', transform: 'translate(-72%, -62%) scale(0.5)' },
          '100%': { opacity: '1', transform: 'translate(-50%,-40%) scale(1)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(212, 165, 116, 0.15)' },
          '100%': { boxShadow: '0 0 50px rgba(212, 165, 116, 0.3)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        'radial-fade': 'radial-gradient(ellipse at center, rgba(212,165,116,0.08) 0%, transparent 70%)',
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
    },
  },
  plugins: [],
} satisfies Config
