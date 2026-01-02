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
      // footers hooverr animation 
      keyframes: {
        arrowUpLoop: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '40%': { transform: 'translateY(-6px)', opacity: '0' },
          '60%': { transform: 'translateY(6px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        arrowUpLoop: 'arrowUpLoop 0.6s ease-in-out',
      },
    },
  },
  plugins: [],
};
