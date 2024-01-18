/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gold: "#f8d600",
        darkslategray: "#323232",
      },
      fontFamily: {
        manrope: "Manrope",
        roboto: "Roboto",
      },
    },
  },

  plugins: [],
};
