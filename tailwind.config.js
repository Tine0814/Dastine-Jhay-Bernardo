/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-one": "#fffefe",
        "color-two": "#101011",
        "color-three": "#fafafa",
        "color-four": "#f5f4f4",
        "color-five": "#acabab",
        "text-one": "#948d8d",
        "text-two": "#FAFAFA",
        "text-three": "#d8d6d6",
        "text-four": "#414040",
      },
      backgroundImage: {
        "background-img": "url('background2.jpg')",
      },
      boxShadow: {
        "inner-top": "inset 0px 1px 0px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
