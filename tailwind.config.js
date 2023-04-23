/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        backgroundImage: 'url(src/backgrounds/beautiful-blue-sky-with-white-clouds.jpg)'
      }
    }
  },
  plugins: []
}
