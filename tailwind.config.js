/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#FF7C00",
        },
        select: {
          500: "rgba(255, 124, 0, 0.10)",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        xl: "1110px",
        md: { min: "800px", max: "1109px" },
        tablet: "770px",
        sm: { min: "490px", max: "770px" },
        xs: { min: "360px", max: "490px" },
      },
    },
  },
  plugins: [
    "prettier-plugin-tailwindcss",
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
