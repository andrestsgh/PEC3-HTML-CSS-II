/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'primary': '#4A90E2',
        'secondary': '#27496D',
        'light': '#FFFFFF',
        'info': '#6C757D',
        'danger': '#FF4F4F',
        'warning': '#FFC107'
      },
      spacing: {
        '5px': '5px',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.row-start-unset': { 'grid-row-start': 'unset' },
        '.row-end-unset': { 'grid-row-end': 'unset' },
      });
    },
  ],
}

