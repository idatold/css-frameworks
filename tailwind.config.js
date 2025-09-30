/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js,mjs,ts}", "!./node_modules/**/*"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
