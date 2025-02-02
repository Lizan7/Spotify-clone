/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {

      fontFamily: {
        spotify: ['Spotify Circular', 'sans-serif'],
      },




      colors: {
        cardBackground: "#121212",
        background: "#000000",
        green: "#1DD25E",
        gray: "#898989",
        white: "#F0F0F0",
      },
    },
  },
  plugins: [],
};
