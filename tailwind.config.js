/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sixcaps: ["Six Caps", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
};
