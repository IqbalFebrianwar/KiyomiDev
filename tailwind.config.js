/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'blur1' : "url('./src/img/blur.png')",
      }
    },
  },
  plugins: [],
}

