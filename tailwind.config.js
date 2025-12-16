/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'megalith': ['Orbitron', 'sans-serif'], // Using Orbitron as Megalith alternative (bold, futuristic)
      },
    },
  },
  plugins: [],
}

