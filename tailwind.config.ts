import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Luxury Warm Neutral Palette (inspired by Bosco & Swede)
        brand: {
          // Cream & Taupe backgrounds
          cream: {
            50: '#fafaf9',
            100: '#faf9f6',   // Swede background
            200: '#f0f9f6',
            300: '#e3e1da',   // Bosco light gray
            400: '#dad2bf',   // Bosco warm beige
            500: '#c7bfb0',
          },
          // Rich Gold accents (from Think LUXE logo)
          bronze: {
            400: '#E5C76B',   // Light gold
            500: '#C9A858',   // Primary logo gold
            600: '#B8964A',   // Rich gold
            700: '#A67D3B',
            800: '#8D6730',
            900: '#6B4E25',   // Deep gold
          },
          // Warm Charcoal (not pure black)
          charcoal: {
            50: '#fafaf9',
            100: '#e3e1da',
            200: '#a8a8a6',
            300: '#6b6b69',
            400: '#4a4a48',
            500: '#2a2a29',
            600: '#222221',   // Swede primary text
            700: '#1a1a19',
            800: '#121211',
            900: '#0a0a09',
          },
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        display: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Dramatic scale for luxury
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.02em',
        normal: '0',
        wide: '0.02em',
        wider: '0.05em',
        widest: '0.1em',
        luxury: '-0.01em',      // Subtle refinement
        display: '-0.1em',      // Bosco headers
        subtitle: '0.06em',     // Swede subtitles
      },
      spacing: {
        // Generous luxury spacing
        '18': '4.5rem',   // 72px
        '22': '5.5rem',   // 88px
        '26': '6.5rem',   // 104px
        '30': '7.5rem',   // 120px
        '34': '8.5rem',   // 136px
        '38': '9.5rem',   // 152px
        '42': '10.5rem',  // 168px
        '46': '11.5rem',  // 184px
        '50': '12.5rem',  // 200px
      },
      maxWidth: {
        '8xl': '88rem',   // 1408px
        '9xl': '96rem',   // 1536px
        'screen-2xl': '1536px',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-down': 'slideDown 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        'scale-in': 'scaleIn 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        'border-draw': 'borderDraw 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        borderDraw: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '900': '900ms',
      },
      transitionDelay: {
        '100': '100ms',
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
      },
    },
  },
  plugins: [],
};
export default config;
