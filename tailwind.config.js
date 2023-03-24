/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        morganite: ["Morganite"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "var(--color-primary)",
        primarysub: "var(--color-primary-sub)",
        primarycontent: "var(--color-primary-content)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
      },
      keyframes: {
        moveDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0%)" },
        },
        moveUp: {
          "0%": { transform: "translateY(0%)", opacity: "1" },
          "100%": { transform: "translateY(-100%)", opacity: "0.8" },
        },
        moveUpOpQ: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-100%)" },
        },
        rotateIn: {
          "0%": { transform: "rotate(0deg)", scale: "0" },
          "100%": { transform: "rotate(360deg)", scale: "1" },
        },
        rotateOut: {
          "0%": { transform: "rotate(360deg)", scale: "1" },
          "100%": { transform: "rotate(0deg)", scale: "0" },
        },
        selectedHeptics: {
          "0%": { transform: "scale(0.8)" },
          "100%": { transform: "scale(1)"},
        },
      },
      animation: {
        moveDown: "moveDown 0.5s ease-in-out",
        moveUp: "moveUp 0.5s ease-in-out",
        moveUpFast: "moveUpOpQ 1s ease",
        rotateIn: "rotateIn 0.5s ease-in-out",
        rotateOut: "rotateOut 0.5s ease-in-out",
        selectedHeptics: "selectedHeptics 0.2s ease-in-out ",
      },
      
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [],
  },
};
