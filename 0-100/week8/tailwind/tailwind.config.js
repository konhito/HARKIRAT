/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          700: "#146eb4",
        },
        cardcol: "#2163af",
        cardcoldown: "#19477e",
      },
    },
  },
  plugins: [],
};
