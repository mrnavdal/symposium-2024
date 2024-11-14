/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,css}",
    "./src/components/**/*.{js,ts,jsx,tsx,css}",
    "./src/styles/globals.css",
    "./src/styles/calendar.css",
    "./src/components/Calendar.css"
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'primary' : '#b8334a',
      'background' : '#2e334c',
      'muted' : '#2e334c',
      'border' : '#d3dce6',
      'white' : '#ffffff',
      'blue': '#1fb6ff',
      'yellow': '#ffff00' ,
      'red' :'#ff0000' ,
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['GeistSans', 'sans-serif'],
      serif: ['GeistSans', 'serif'],
      roboto: ['Roboto', 'sans-serif']
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}

