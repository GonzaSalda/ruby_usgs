/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      primary:'Gilda Display'
    },
    container:{
      padding:{
        DEFAULT: '15px'
      }
    },
    screens:{
      sm:'640px',
      md:'768px',
      lg:'960px',
      xl:'1140px',
    },
    extend: {},
  },
  plugins: [],
}


