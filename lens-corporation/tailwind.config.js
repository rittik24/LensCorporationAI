/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
        'popin': ['Poppins', 'sans-serif'],
    },
    gradientColorStops: theme => ({
      'gr-4': theme('colors.blue.200'),
      'gr-5': theme('colors.gray.100'),
    })
},
  plugins: [],
}

