/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#282924",
        sec: "#0FC9C9",
        tet: "#F5F5F5",
        foot: "#202020",
      },
    },
  },
  plugins: [],
};
