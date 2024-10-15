/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: {
    relative: true,
    files: [
      './index.html',
      './src/**/*.{vue,js,ts}',
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        kantumruy: ['Kantumruy Pro', 'sans-serif'],
      },
      keyframes: {
        gradient: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
      },
      animation: {
        'gradient-flow': 'gradient 3s ease infinite',
      },
      backgroundSize: {
        '200%': '200%',
      },
    },
  },
  plugins: [],
}

