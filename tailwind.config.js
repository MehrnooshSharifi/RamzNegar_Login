/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        ramznegarbg: "#B0B0B0" ,
        primarycolor: "#212121" ,
        textcolor: "#616161" ,
        buttonColor : "#0050E5",
        gradientOne : "#00102F" ,
        gradientTwo : "#0052EB" ,
        linkColor: "#0050E5" ,
        borderColor : "#9E9E9E"
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
