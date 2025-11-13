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
        luxury: {
          charcoal: {
            50: '#f5f5f5',
            100: '#e9e9e9',
            200: '#d4d4d4',
            300: '#afafaf',
            400: '#8a8a8a',
            500: '#6b6b6b',
            600: '#505050',
            700: '#404040',
            800: '#2a2a2a',
            900: '#1a1a1a',
          },
          gold: {
            50: '#fdfbf7',
            100: '#faf6ed',
            200: '#f3e9d3',
            300: '#ead7ab',
            400: '#dfc177',
            500: '#d4a750',
            600: '#c08c3a',
            700: '#a07030',
            800: '#82592e',
            900: '#6b4928',
          },
          wood: {
            50: '#f9f6f1',
            100: '#f1ebe0',
            200: '#e2d5be',
            300: '#d1ba96',
            400: '#c19f6f',
            500: '#b5885a',
            600: '#a8774f',
            700: '#8c6042',
            800: '#705039',
            900: '#5c4230',
          }
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
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
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
