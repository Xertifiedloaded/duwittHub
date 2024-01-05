/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          200: '#D5DAE1',
        },
        black: {
          DEFAULT: '#000',
          500: '#1D2235',
        },
        blue: {
          500: '#2b77e7',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        worksans: ['Work Sans', 'sans-serif'],
      },
      screens: {
        '1000px': '1000px',
        '1100px': '1100px',
        '1200px': '1200px',
        '1300px': '1300px',
        '1500px': '1500px',
        '800px': '800px',
        '700px': '700px',
        '400px': '400px',
      },
    },
  },
  plugins: [],
};
