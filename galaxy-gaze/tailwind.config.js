/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'platinum': {
        200: '#E4E4E4',
        300: '#DCE0E4',
      },
      'violet': {
        400: '#75547F',
        500: '#72497F',
      },
      'licorice': '#0E0004',
      'greenyellow': {
        200: '#D8FFB8',
        500: '#B7E95A',
      },
      'spacecadet': {
        400: '#3F4364',
        500: '#2A2D43',
      },
      'white': '#FFFFFF',
    },
    fontFamily: {
      sans: ['Quicksand', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    'prettier-plugin-tailwindcss'
  ],
}

