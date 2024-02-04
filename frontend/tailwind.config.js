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
      },
      height: {
        '500': '28rem',
      }
    },
  },
  // plugins: [require("daisyui")],
}
