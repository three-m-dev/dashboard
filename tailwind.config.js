/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1b1464",
        secondary: "#08061D",
      },
      height: {
        140: "35rem",
      },
    },
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
      bebas: ["Bebas Neue", "sans-serif"],
    },
  },
  plugins: [],
};
