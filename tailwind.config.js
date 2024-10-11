/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#102C57",
        secondaryColor: "#DAC0A3",
        backgroundColor: "#FEFAF6",
        hoverColor: "#EADBC8",
      },
      screens: {
        '2xl': '1536px',
        'xl': '1150px',
        'lg': '1024px',
        'md': '850px',
        'sm': '640px',
        'vsm': '450px',
      },
    },
  },
  plugins: [],
}