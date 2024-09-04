/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    daisyui: {
      themes: ['light'], // or ['cupcake'] for a light theme
    },
    extend: {},
    container: {
      center: true,
    },
  },
  plugins: [
    daisyui,
    // require('daisyui')
  ],
}

