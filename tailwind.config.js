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
        'teknic-blue': '#0072bc',
        'tailwindBlue': '#07b6d5',
        'javascriptYellow': '#f7df1e',
        'reactBlue': '#61dafb',
        'nextBlack': '#000000',
        'nodejsGreen': '#689f63',
        'graphqlPink': '#e535ab',
        'strapiPurple': '#9179ff'
      }
    },
  },
  plugins: [],
}
