/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      // From the app's palette (multiscan_ai/lib/utils/design.dart), plus a night tone and
      // a brighter mint for text on dark backgrounds.
      colors: {
        night: "#151A3B",
        paper: "#F7F4EE",
        deep: "#2E3667",
        avocado: "#179E76",
        mint: "#3DDBAA",
        ink: { DEFAULT: "#1E2444", muted: "#5A6180", faint: "#6B7290" },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        serif: ["Instrument Serif", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
