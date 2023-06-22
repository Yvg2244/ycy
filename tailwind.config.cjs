/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        150: "150px",
        190: "190px",
        225: "225px",
        275: "275px",
        300: "300px",
        340: "340px",
        350: "350px",
        375: "375px",
        460: "460px",
        656: "656px",
        880: "880px",
        508: "508px",
      },
      height: {
        80: "80px",
        150: "150px",
        190: "190px",
        225: "225px",
        275: "275px",
        300: "300px",
        340: "340px",
        350: "350px",
        375: "375px",
        460: "460px",
        600: "600px",
        656: "656px",
        880: "880px",
        508: "508px",
        "90vh": "90vh",
      },
      minWidth: {
        210: "210px",
        350: "350px",
        620: "620px",
      },

      colors: {
        primary_blue: "#1F1F1F",
        primary_green: "#3AFDD9",
        primary_red: "#FD3A51",
        primary_gray: "#000B8E",
      },
    },
    fontFamily: {
      raleway: ["Raleway", "serif"],
      monte: ["Montserrat", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      quicksand: ["Quicksand", "sans-serif"],
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
})
