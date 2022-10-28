/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          300: "#55ceff",
          500: "#226caa",
          600: "#094579",
          700: "#20355d",
        },
      },
    },
  },
  plugins: [],
};
