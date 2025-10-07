/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#0D6EFD',
        'dark-bg': '#1a202c',
        'dark-card': '#2d3748',
      }
    },
  },
  plugins: [],
}