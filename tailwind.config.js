/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        porcelain: "#fbfaf7",
        linen: "#f0e8dc",
        champagne: "#c9a65b",
        "champagne-soft": "#ead8ad",
        obsidian: "#11100e",
        graphite: "#23211f",
        smoke: "#6f6a61",
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        luxury: "0 24px 70px rgba(17, 16, 14, 0.12)",
        "luxury-dark": "0 24px 70px rgba(0, 0, 0, 0.34)",
      },
    },
  },
  plugins: [],
};
