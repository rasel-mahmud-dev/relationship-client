/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        xss: "0px 5px 17px -5px #2563eb61"
      }
    },
  },
  plugins: [],
}