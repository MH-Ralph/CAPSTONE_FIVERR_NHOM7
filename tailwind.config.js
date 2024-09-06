/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1dbf73",
        "text-gray": "#62646a",
        "text-dark": "#222325",
        "text-darker": "#404145",
        "hover-gray": "#f5f5f5;",
      },
    },
  },
  plugins: [],
};
