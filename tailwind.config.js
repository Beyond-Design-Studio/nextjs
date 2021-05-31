module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "bg-img": "url('../public/bg.png')",
      }),
      colors: {
        "primary-color": "var(--primary-color)",
        // "secondary-color": "var(--secondary-color)",
        "font-color": "var(--font-color)",
        "accent-color": "var(--accent-color)",
      },
    },
  },

  variants: {
    extend: {
      inset: ["group-hover"],
      height: ["group-hover"],
      width: ["group-hover"],
      scale: ["group-hover"],
    },
  },

  plugins: [],
};
