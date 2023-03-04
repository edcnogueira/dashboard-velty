/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["DM Sans", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          background: "#F4F7FE",
          text: "#2B3674",
          red: "#EC7A7A",
          blue: "#7A85EC",
          green: "#65D4AC",
        },
        secondary: {
          text: "#707EAE",
          blue: "#4318FF",
        },
        success: "#05CD99",
        danger: "#CD0505",
        unSelected: "#A3AED0",
        inputText: "#8F9BBA",
      },
    },
  },
  plugins: [],
};
