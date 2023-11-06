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
        'primary':'#FCFCFC',
        'text':'#232020',
        'accent' :'#3D405B'
      }
    },
  },
  plugins: [],
}
