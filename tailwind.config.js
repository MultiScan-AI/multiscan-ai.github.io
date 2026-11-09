/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  // Hover styles only on devices that can really hover, so taps on phones do not stick.
  future: { hoverOnlyWhenSupported: true },
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
      transitionTimingFunction: {
        // Emil Kowalski's curves: a strong ease-out for UI, and an iOS-like drawer curve.
        out: "cubic-bezier(0.23, 1, 0.32, 1)",
        drawer: "cubic-bezier(0.32, 0.72, 0, 1)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        serif: ["Instrument Serif", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
