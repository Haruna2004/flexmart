/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      md: "960px",
      tablet: "770px",
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
