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
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        // "primary": "#1f1f1f",
        // "secondary": "#d35c39",
        // "accent": "#fafafa",
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [],
  },
};
