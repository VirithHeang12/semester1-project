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
      colors: {
        primary: {
            50: '#f6f6f6',
            100: '#e7e7e7',
            200: '#d1d1d1',
            300: '#b0b0b0',
            400: '#888888',
            500: '#6d6d6d',
            600: '#5d5d5d',
            700: '#4f4f4f',
            800: '#454545',
            900: '#3d3d3d',
            950: '#000000'
        }
      }
    },
  },
  plugins: [],
  important: false,
}

