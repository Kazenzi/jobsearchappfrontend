/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        'blueColor':'#2a68ff',
        'greyish':'#f1f4f8',
        'cardshadow':'#f7f8f9',
        'textcolor':'#252b36',
      }
    },
  },
  plugins: [],
}
