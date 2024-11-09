/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing:{
        '47rem':'47rem',
        '54rem': '54rem',
        '26.625rem': '26.625rem',
        '39rem': '39rem',
        '45rem': '45rem',
        '648px': '648px',
        '398px': '398px',
        '354px': '354px',
        '480px': '480px',

      },
      borderRadius:{
        '200':'12.5rem',

      }
    },
  },
  plugins: [],
}

