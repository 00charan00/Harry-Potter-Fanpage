/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'flags': "url('./assets/flags_houses.jpg')",
      },
      colors: {
        'hpgold': '#F6B910',
        'gryffindor':'#CB0F2A',
        'slytherin':'#0E5B51',
        'ravenclaw':'#0B5A89',
        'hufflepuff':'#ECAF1F',
        'ravenclaw-dark': '#072f42',
        'gryffindor-dark': '#6c071f',
        'slytherin-dark': '#073b34',
        'hufflepuff-dark': '#ae8e13',
      },
      height: {
        '500': '28rem',
      },
      keyframes: {
        'brightness-increase': {
          '0%': { filter: 'brightness(0.5)' },
          '50%': { filter: 'brightness(1.5)' },
          '100%': { filter: 'brightness(0.5)' },
        },
        'brightness-decrease': {
          '0%': { filter: 'brightness(1.5)' },
          '50%': { filter: 'brightness(0.5)' },
          '100%': { filter: 'brightness(1.5)' },
        },
      },
      animation: {
        'brightness-increase': 'brightness-increase 5s linear infinite',
        'brightness-decrease': 'brightness-decrease 2s linear infinite',
      },
    },
  },
}
