const plugin = require("tailwindcss/plugin");
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        xs: ".75rem",
        s: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
      },
    },
  },
  variants: {
    extend: {
      outline: ["focus", "focus-visible"],
    },
  },
  plugins: [
    /* Global Style */
    plugin(function ({ addBase }) {
      addBase({
        "*": {
          boxSizing: "border-box",
          fontFamily: "Arial Narrow, Arial, sans-serif",
        },
      });
    }),

    /* Custom Styles */
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".input-placeholder-font-weight::placeholder": {
          fontWeight: "900",
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
