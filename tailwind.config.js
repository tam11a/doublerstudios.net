/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Oxanium', 'sans-serif'],
        serif: ['Jost', 'sans-serif'],
        buda: ['Buda', 'cursive']
      },
      colors: {
        primary: {
          DEFAULT: '#ff0000'
        },
        secondary: {
          DEFAULT: '#B276FF'
        },
        faded: {
          DEFAULT: '#7A7A7A'
        }
      }
    }
  },
  plugins: []
}
