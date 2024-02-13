/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js", // add this line
  ],
  theme: {
    extend: {
      backgroundImage: {
        "greenGrad":
          "linear-gradient(90deg, rgba(80,221,174,1) 0%, rgba(105,183,255,1) 50%, rgba(169,108,255,1) 100%)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
