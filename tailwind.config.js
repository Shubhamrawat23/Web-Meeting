/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      'lg':{'max':'1024px'},//normal size of laptop
      'tb':{'max':'768px'},//tablets
    },
    extend: {},
  },
  plugins: [],
}