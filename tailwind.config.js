/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily : {
        sixcap: ["'Six Caps'", ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
};
