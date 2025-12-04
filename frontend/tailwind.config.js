/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        nivOrange: "#fd6647",
        nivBlue: "#0259dd",
        nivSoft: "#ffe0d6",
        nivLightBlue: "#83aefa",
      },
      fontFamily: {
        display: ["NauryzRedKeds", "sans-serif"],
        body: ["AcuminPro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
