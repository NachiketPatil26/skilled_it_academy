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
      'cyan': '#20ffff',
      'lavender': '#8696ef',
      'gradpink': '#e536e0',
      'red':'#ff0037',
      'black':'#000000',
      
    },

    extend: {
      fontFamily: {
        'montserrat': ["Montserrat", "sans-serif"],
    },
  }
  },
  plugins: [],
};