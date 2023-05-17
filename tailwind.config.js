/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      height:{
        "128":"400px",
        "160":"500px",
      },
      width:{
        'xxxsm':"50px",
        "128":"360px"
      },
      translate:{
        '0.5':"2px",
      },
      maxWidth:{
        'xxxsm':"50px"
      },
      inset:{
        "0.75":"3px",
        "50":"50px",

      },
      padding:{
        "0.75":"3px",
      },
      colors:{
        'purple':'#603ADE',
        'black': '#111C37',
        'turk1':'#3C9DE8',
        'blue1':'#416CD2',
        'white1':'#FFFEFE',
        'white2': '#FFFFFF'
      },
    },
    
  },
  plugins: [],
}
