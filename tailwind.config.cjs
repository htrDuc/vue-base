/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "480",
      sm: "768px",
      md: "992px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1480px",
    },
  },
  plugins: [],
};
