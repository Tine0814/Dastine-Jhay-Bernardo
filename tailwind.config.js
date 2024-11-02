/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
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
        "primary-color-light": "#8B5CF6",
        "primary-color-dark": "#A78BFA",
        "main-background-light": "#f5f4f4",
        "main-background-dark": "#1F2937",

        "secondary-background-light": "#E5E7EB",
        "secondary-background-dark": "#374151",
        "background-header-light": "#F3F4F6",
        "background-header-dark": "#111827",

        "primary-text-light": "#1F2937",
        "primary-text-dark": "#F3F4F6",
        "secondary-text-light": "#4B5563",
        "secondary-text-dark": "#F3F4F6",
      },
      backgroundImage: {
        // "background-img": "url('background2.jpg')",
      },
      boxShadow: {
        "inner-top": "inset 0px 1px 0px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
