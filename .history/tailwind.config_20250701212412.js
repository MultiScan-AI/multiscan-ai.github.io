/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': {
          DEFAULT: '#003382',
          'light': '#0052cc',
          '50': '#E6F0FF',
          '100': '#CCE0FF',
          '200': '#99C1FF',
          '300': '#66A3FF',
          '400': '#3384FF',
          '500': '#0066FF',
          '600': '#0052CC',
          '700': '#003D99',
          '800': '#002966',
          '900': '#001433',
          '950': '#000D1F',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
    },
  },
  plugins: [],
}
