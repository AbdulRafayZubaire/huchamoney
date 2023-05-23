/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'base': '#21263A',
        'dark': '#1C1F2C',
        'light': '#373942',
        'lighttext': "#989AAA",
        // 'gradi': ""
      },
      backgroundImage: {
        'primary': 'linear-gradient(10deg, #E63232 0%, #4950F6 46.87%, #59BECF 100%)',
      },
      screens: {
        'mobile': { 'max': '550px' },
        // 'laptop': { 'min': '551px'},
      },
      fontSize:{
        'md': '16px',
      }
    },
    plugins: [],
  }
}