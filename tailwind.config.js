/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
           secondary:"#662249",
           black:"#1B1931",
           green:"#83A6CE",
          //  secondary:"#935b88",
          //  black:"#0B1B32",
          //  green:"#83A6CE",
      },
    },
  },
  plugins: [],
});
