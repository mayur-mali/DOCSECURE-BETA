module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  variants: {
    extend: {
      textColor: ["group-hover"],
    },
  },
  plugins: [],
};
