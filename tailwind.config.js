/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0066FF",
        secondary: "#3399FF",
        background: "#0D253F",
      },
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
    },
  },
  plugins: [],
};
