/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // No custom colors, use Tailwind's default blue, green, red, and white
    },
  },
  plugins: [],
  safelist: [
    // Only allow blue, green, red, and white classes
    'bg-blue-50', 'bg-blue-100', 'bg-blue-200', 'bg-blue-300', 'bg-blue-400', 'bg-blue-500', 'bg-blue-600', 'bg-blue-700', 'bg-blue-800', 'bg-blue-900',
    'bg-green-50', 'bg-green-100', 'bg-green-200', 'bg-green-300', 'bg-green-400', 'bg-green-500', 'bg-green-600', 'bg-green-700', 'bg-green-800', 'bg-green-900',
    'bg-red-50', 'bg-red-100', 'bg-red-200', 'bg-red-300', 'bg-red-400', 'bg-red-500', 'bg-red-600', 'bg-red-700', 'bg-red-800', 'bg-red-900',
    'bg-white',
    'text-blue-500', 'text-blue-600', 'text-blue-700', 'text-blue-800', 'text-blue-900',
    'text-green-500', 'text-green-600', 'text-green-700', 'text-green-800', 'text-green-900',
    'text-red-500', 'text-red-600', 'text-red-700', 'text-red-800', 'text-red-900',
    'text-white',
    'border-blue-500', 'border-green-500', 'border-red-500', 'border-white',
    'hover:bg-blue-600', 'hover:bg-green-600', 'hover:bg-red-600',
    'hover:text-blue-700', 'hover:text-green-700', 'hover:text-red-700',
    'hover:border-blue-700', 'hover:border-green-700', 'hover:border-red-700',
  ]
}
