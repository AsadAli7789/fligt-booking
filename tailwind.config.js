/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    boxShadow: {
      'custom': '0 4px 30px rgba(0, 0, 0, 0.1)',
    },
    extend: {},
  },
  plugins: [
    require('daisyui'),

  ],
}