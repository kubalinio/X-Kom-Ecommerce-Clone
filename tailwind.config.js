/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'xCom': '0 4px 8px 0 rgb(0 0 0 / 16%), 0 0 2px 1px rgb(0 0 0 / 8%)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}