module.exports = {
    plugins: {
      '@tailwindcss/postcss': {}, 
      autoprefixer: {},
      'postcss-pxtorem': {
        rootValue: 16,
        unitPrecision: 5,
        propList: ['*'],
        replace: true,
        mediaQuery: false,
        minPixelValue: 1,
      },
    },
  };
  