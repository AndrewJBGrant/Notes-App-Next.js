/** @type {import('tailwindcss').Config} */
module.exports = {

darkMode: "class",

  content: [
     "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light
        'main':'#FCFCFC',
        'text-color': '#232020',
        'btn-color' : '#3D405B',
        'btn-hover' : '#4F5480',
        // Dark
        'dark-main' : '#121212'
      }
    }
  },
  plugins: [],
}
