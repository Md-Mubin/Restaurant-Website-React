/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      // ========= For Container
      container: {
        center: true,
        width: "1300px",
      },

      // ========= For Font Family
      fontFamily:{
        DM_sans: ["DM Sans", "sans-serif"],
        PlayfairD: ["Playfair Display", "serif"],
      }
    },
  },
  plugins: [],
}