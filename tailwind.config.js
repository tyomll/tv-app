/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0c0c0c",
        accent: "#3b486d",
        gray: "#858688",
      },
      backgroundImage: {
        primaryBackground: "linear-gradient(159deg, #2727f5 0%, #001671 100%)",
      },
    },
  },
  plugins: [],
};
