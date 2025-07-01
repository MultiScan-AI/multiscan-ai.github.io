/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0F4C81',
        'secondary': '#FF6B35',
        'accent': '#FFD700',
        'dark': '#1A1A1A',
        'light': '#F5F5F5',
      },
      backgroundColor: {
        'light': '#F5F5F5',
        'dark': '#1A1A1A',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'display': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
