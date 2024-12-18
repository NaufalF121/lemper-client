/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'colors': {
          'primary':'#FDFFE2',
          'secondary': '#83B4FF',
          'tertiary': '#5A72A0',
          'fourtiary': '#1A2130'
        },
        'negative': '#EF4C53'
      }
    },
    
  },
  plugins: [],
}

