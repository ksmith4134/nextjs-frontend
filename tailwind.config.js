const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fancy': ['"Exo 2"'],
      },
      colors: {
        'teknic-blue': '#0072bc'
      }
    },
  },
  plugins: [],
}
