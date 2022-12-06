/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        bgshade: "#eeeffb",
        greytext: "#151875",
        primary: "#fb2e86",
        white: "#ffffff",
        text: "#151875",
        red: "#fb2448",
        subtextcolor: "#8a8fb9",
        bg: "#ebebeb",
        black: "#111111",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
