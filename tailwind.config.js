/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        secondary: "#2563eb",
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
