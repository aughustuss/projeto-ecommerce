/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Roboto', 'sans-serif'],
        title: ['Oswald', 'sans-serif'],
      },
      colors: {
        primary: "#19456B",
        secondary: "#16C79A",
        tertiary: "#ffa500",
        quartiary: "#e6e6ff",
        quinary: "#007aff",
        gray: "#8c8b8b",
      }
    },
  },
  plugins: [],
}