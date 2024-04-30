/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    variants: {
      extend: {
        gap: ['responsive'], // Active the gap propriety
      },
    },

    colors: {
      primary: {
        DEFAULT: '#197586',
        dark: '#79D6E6',
      },

      secondary: {
        DEFAULT: '#EC8395',
        dark: '#7C1325',
      },

      accent: {
        DEFAULT: '#E5BE5D',
        dark: '#A27C1A',
      },

      text: {
        DEFAULT: '#04191A',
        dark: '#E5FAFB',
      },

      background: {
        DEFAULT: '#F2FBFD',
        dark: '#020B0D',
      },

      white: '#ffffff',
      black: '#000000',
    },

    fontFamily: {
    },

    extend: {},
  },
  plugins: [],
}

