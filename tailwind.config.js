/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef7ff',
          500: '#1769e0',
          700: '#0d47a1',
        },
      },
    },
  },
  plugins: [],
};
