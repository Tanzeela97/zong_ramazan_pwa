/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        urdu: ["Jameel Noori Nastaleeq Urdu", "serif"],
        roboto: ["Roboto", "sans-serif"],
        // 'poppins': ['Poppins', 'sans-serif'],
        quran: ["PDMS_Saleem_QuranFont-signed", "serif"],
        // 'mehr': ['Mehr_Nastaliq_Web_version_1.0_beta', 'serif'],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ec0081",
          secondary: "#8dc63f",
          accent: "#570DF8",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
          info: "#3ABFF8",
          success: "#10dc60",
          warning: "#ffce00",
          error: "#f53d3d",
        },
      },
    ],
  },
  plugins: [require("tailwind-rtl"), require("daisyui")],
};
