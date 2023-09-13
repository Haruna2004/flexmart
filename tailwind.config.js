/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#FF7C00",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      md: "960px",
      tablet: "770px",
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
