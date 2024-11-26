/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing:{
        '90rem':'90rem',
        '47rem':'47rem',
        '54rem': '54rem',
        '104rem': '104rem',
        '26rem': '26rem',
        '28.75rem': '28.75rem',
        '40rem': '40rem',
        '45rem': '45rem',
        '648px': '648px',
        '398px': '398px',
        '354px': '354px',
        '480px': '480px',

      },
      lineHeight: {
        'extra1': '4rem',
      },
      borderRadius:{
        '200':'12.5rem',

      },
      maxWidth:{
        'maxW': '82rem',
        'maxWs': '327px',
      }
    },
  },
  plugins: [],
}

