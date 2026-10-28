/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      // The app's own palette (multiscan_ai/lib/utils/design.dart), plus a night tone and
      // a brighter mint for text on dark backgrounds.
      colors: {
        night: "#151A3B",
        paper: "#F7F4EE",
        deep: "#2E3667",
        brand: { DEFAULT: "#0F7A5A", dark: "#0B6248", soft: "#E3F4EE" },
        avocado: "#179E76",
        mint: "#3DDBAA",
        ink: { DEFAULT: "#1E2444", muted: "#5A6180", faint: "#6B7290" },
        page: "#F5F6FA",
        line: { DEFAULT: "#E2E5EE", strong: "#C9CEDD" },
        blood: { DEFAULT: "#B4474A", soft: "#FCE8E8" },
        urine: { DEFAULT: "#8A6A0A", soft: "#FEF5D8" },
        stool: { DEFAULT: "#7E5B33", soft: "#F4ECE2" },
        sputum: { DEFAULT: "#475C92", soft: "#E8EDF8" },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        serif: ["Instrument Serif", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
