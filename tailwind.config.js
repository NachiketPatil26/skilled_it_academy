/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'gray': '#e8e8e8',
      'darkpurple': '#381560',
      'purple': '#4501a8',
      'lightpurple': '#7523f5',
      'yellow': '#faab18',
      'neon-yellow': '#ffff00',
      'pink': '#eb008b',
      'gradpurple': '#6b2c90',
      'cyan': '#20ffff',
      'lavender': '#8696ef',
      'gradpink': '#e536e0',
      'red': '#ff0037',
      'black': '#000000',
      'lime':'#bed136',
    },

    extend: {
      fontFamily: {
        'montserrat': ["Montserrat", "sans-serif"],
      },
      animation: {
        'slide-groups': 'slide-groups 30s linear infinite',
      },
      keyframes: {
        'slide-groups': {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-200%)', // Move two full sets
          },
        },
      },
    },
  },

  plugins: [],
};