/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        morganite: ["Morganite", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "pri-color": "#1f1f1f",
        "sec-color": "#d35c39",
        "acc-color": "#fafafa",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
};
