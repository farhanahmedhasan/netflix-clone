module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.125rem",
        md: "2rem",
        xl: "4rem",
        "2xl": "6rem",
      },
    },

    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },

      colors: {
        "main-color": "#0b0b0b",
      },
    },
  },
  plugins: [],
};
