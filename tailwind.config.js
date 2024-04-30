/** @type {import('tailwindcss').Config} */

import Colors from 'tailwindcss/colors';

module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },

    variants: {
      extend: {
        gap: ['responsive'], // Active the gap propriety
      },
    },

    colors: {
      ...Colors,

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
};
