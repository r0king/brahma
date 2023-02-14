/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        bounce: "bounce 5s ease-in-out infinite",
      },
      keyframes: {
        bounce: {
          "0%": {
            transform: "translateY(-1%)",
            "animation-timing-function": "ease",
          },
          "50%": {
            transform: "translateY(0)",
            "animation-timing-function": "ease",
          },
          "100%": {
            transform: "translateY(-1%)",
            "animation-timing-function": "ease",
          },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
};
