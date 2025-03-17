const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        '3xl': "120em", // 120em 1920px
        '2.5xl': "94em", // 94em 1504px
        '2xl': "80em", // 80em 1280px
        'xl': "75em", // 75em 1200px
        'lg': "62em", // 62em 992px
        'md': "48em", // 48em 768px
        'sm': "30em", // 30em 480px
        'xs': "20em", // 20em 320px
      },
    },
  },
  plugins: [
   
  ],
};
