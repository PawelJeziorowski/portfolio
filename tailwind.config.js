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
      boxShadow: {
        'shadowproject': 'inset 0 2px 0 0 rgba(255, 255, 255, 0.15)',
        'shadowproject2': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.25)',
      },
      lineHeight: {
        'extra1': '4rem',
        'extra2':'48px',
      },
      borderRadius:{
        '200':'12.5rem',

      },
      maxWidth:{
        'maxW': '82rem',
        'maxW': '82rem',
        'maxWs': '327px',
      },
      colors: {
        'bordergray': '#1F2937',
        'background': '#020916',
      },
      animation: {
        'spin-slow': 'spin 18s linear infinite'
      }
    },
  },
  plugins: [],
}