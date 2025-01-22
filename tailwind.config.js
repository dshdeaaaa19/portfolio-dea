/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "src/**/*.js"],
  darkMode: "class", // Aktifkan dark mode menggunakan class
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#14b8a6",
        secondary: "#64748b",
        dark: "#0f172a",
      },
      screens: {
        "2xl": "1320px",
      },
    },
    extend: {
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        slideIn: "slideIn 0.5s ease-out",
        fadeIn: "fadeIn 1s ease-in",
      },
      backgroundImage: {
        'hero-pattern': "url('/src/img/hero-pattern.png')",
        'footer-texture': "url('/src/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
