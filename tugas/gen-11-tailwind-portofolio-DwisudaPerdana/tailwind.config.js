/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        bgluar: "#5D52EA",
        bgdalam: "#EFEFEF",
        bgdua: "#080808",
        bgtiga: "#101010",
        warna1: "#B8B7BA",
      },
      fontFamily: {
        sans: ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
        title: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
