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
      colors: {
        primary: "#1E3A8A", // Màu chủ đạo
        secondary: "#9333EA", // Màu phụ
      },
      screens: {
        '3xl': "1920px", // 120em
        '2.5xl': "1504px", // 94em
        '2xl': "1280px", // 80em
        'xl': "1200px", // 75em
        'lg': "992px", // 62em
        'md': "768px", // 48em
        'sm': "480px", // 30em
        'xs': "320px", // 20em
      },
    },
  },
  plugins: [
   
  ],
};
