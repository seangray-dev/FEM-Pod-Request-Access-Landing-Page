/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      screens: {
        "2xl": "1440px",
      },

      fontFamily: {
        Chivo: "'Chivo', 'sans-serif'",
      },

      fontSize: {
        "body-l": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "body-s": ["15px", { lineHeight: "25px", fontWeight: "400" }],
        "heading-l": ["52px", { lineHeight: "62px", fontWeight: "400" }],
        "heading-m": ["48px", { lineHeight: "56px", fontWeight: "400" }],
        "heading-s": ["26px", { lineHeight: "38px", fontWeight: "400" }],
      },

      colors: {
        darkBlue: "#121725",
        accent: "#54E6AF",
        accentHover: "#B3FFE2",
        darkGrey: "#2C344B",
        grey: "#5A668A",
        lightGrey: "#c2cbe5",
        error: "#FB3E3E",
      },

      backgroundImage: {
        "bg-tablet": "url('../assets/tablet/image-host.jpg')",
        "bg-desktop": "url('../assets/desktop/image-host.jpg')",
      },
    },
  },
  plugins: [],
};
