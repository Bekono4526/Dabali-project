/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'custom-md': '770px',
      },
      colors: {
        "dark-purple": "#0e0b1d",
        "white": "#ffffff",
        "dark-blue": "#00002b",
        "deep-blue": "#02022f",
        "darker-blue": "#030233",
        "dark-violet": "#16183F",
        "violet": "#8884d8",
        "vert": "#82ca9d",
        'blue-500': '#007cf0',
        'blue-600': '#00dfd8',
        'white-opacity-20': 'rgba(255, 255, 255, 0.2)',
      },
    },
  },
  plugins: [],
}

