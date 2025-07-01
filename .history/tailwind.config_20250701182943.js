/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Updated modern color palette
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        secondary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
        accent: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
          950: '#422006',
        },
        dark: '#111827',
        light: '#f9fafb',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'hover': '0 10px 40px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
  safelist: [
    // Keep your safelist but add new color classes
    'bg-primary-50', 'bg-primary-500', 'bg-primary-600', 'bg-primary-700',
    'bg-secondary-50', 'bg-secondary-500', 'bg-secondary-600',
    'bg-accent-50', 'bg-accent-500', 'bg-accent-600',
    'text-primary-500', 'text-primary-600', 'text-primary-700',
    'text-secondary-500', 'text-secondary-600',
    'text-accent-500', 'text-accent-600',
    'hover:bg-primary-600', 'hover:bg-primary-700',
    'hover:bg-secondary-600', 'hover:bg-secondary-700',
    'border-primary-500', 'border-secondary-500', 'border-accent-500',
  ]
}
