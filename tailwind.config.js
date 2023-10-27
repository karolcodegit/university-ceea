/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darker': '#03045e',
        'dark': '#0077b6',
        'medium': '#00b4d8',
        'light': '#006BBA',
        'lighter': '#88C8EC',

      },
      skew: {
        '40': '40deg',                                                                
      },
      width: {
        '30': '30%',
      },
      height: {
        '500': '31.25rem',
      }
    },
  },
  plugins: [],
}

