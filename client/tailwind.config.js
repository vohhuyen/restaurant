/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'open-sans-condensed': ['Open Sans Condensed', 'sans-serif'],
      },
      colors: {
        'custom-brown': '#715b3e',
        'custom-dark': '#0f1d22',
      },
      transitionDuration: {
        '500': '500ms',
      },
    },
  },
  plugins: [],
}
