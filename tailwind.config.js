/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ensure all your React files are included
  ],
  
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'gray': '#e8e8e8',
      'darkpurple': '#381560',
      'purple' : '#4501a8',
      'lightpurple': '#7523f5',
      'yellow' : '#faab18',
      'neon-yellow':'#ffff00',
      'pink': '#eb008b',
      'gradpurple':'#6b2c90',
    },

    extend: {
      fontFamily: {
        'montserrat': ["Montserrat", "sans-serif"],
    },
  }
  },
  plugins: [],
};