/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '10%': '10%',
      },
      boxShadow: {
        'sh': '0 5px 25px  rgba(1, 1, 1, 0.25)',
      },
    },
  },
  plugins: [],
}

