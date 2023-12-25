/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        jost: ["Jost", "sans-serif"],
      },
      colors: {
        bluemagenta: "#4F3BE5",
        caddiessilk: "#403A53",
        platinateblue: "#263FDE",
        midnightblue: "#20187B",
        freefall: "#5A556B",
      },
    },
  },
  plugins: [],
};
