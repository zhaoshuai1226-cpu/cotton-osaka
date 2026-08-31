/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bishu: {
          50: '#faf9f6',
          100: '#f6f3ee',
          200: '#e8e3da',
          300: '#d4ccbd',
          400: '#b8ac97',
          500: '#9a8f7d',
          600: '#6b6354',
          700: '#4a4439',
          800: '#2e2a23',
          900: '#1a1a1a',
          950: '#0f0f0d',
        },
        accent: {
          DEFAULT: '#8b6f47',
          light: '#a8896a',
          dark: '#6b5436',
        },
        success: {
          DEFAULT: '#4a7c59',
          light: '#6b9b7a',
          dark: '#2d5a3d',
        },
        warning: {
          DEFAULT: '#c08552',
          light: '#d4a06a',
          dark: '#9a6633',
        },
        error: {
          DEFAULT: '#a64a3f',
          light: '#c46b60',
          dark: '#7d2e25',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Noto Sans JP', 'serif'],
        sans: ['Noto Sans JP', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
};
