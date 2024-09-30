/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#222831",
        "font-primary": "#00ADB5",
      },
      fontFamily: {
        "poppins": "Poppins",
        "oswald": "Oswald"
      }
    },
  },
  plugins: [],
}

