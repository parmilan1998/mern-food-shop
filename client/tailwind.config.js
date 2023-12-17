/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        roboto: "'Roboto', sans-serif",
        inter: "'Inter', sans-serif",
      },
      colors: {
        primaryGreen: '#39DB4A',
        primaryRed: '#FF6868',
        secondary: '#555',
        primaryWhite: '#FCFCFC',
        secondaryColor: '#4A4A4A',
        primaryBlue: '#8873ef',
        headingColor: '#081e21',
        smallTextColor: '#193256',
      },
    },
  },
  plugins: [require('daisyui')],
}
