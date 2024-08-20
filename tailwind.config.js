/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        width: "1300px",
      },
      fontFamily:{
        DM_sans: ["DM Sans", "sans-serif"],
        PlayfairD: ["Playfair Display", "serif"],
      }
    },
  },
  plugins: [],
}