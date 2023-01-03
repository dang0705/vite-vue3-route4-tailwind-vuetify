module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {
      stage: 3,
      features: { 'nesting-rules': false }
    },
    'tailwindcss/nesting': {},
    tailwindcss: {},
    ...(process.env.NODE_ENV === 'production'
      ? {
          cssnano: {
            preset: [
              'default',
              {
                mergeLonghand: false /*fix the bugs*/
              }
            ]
          }
        }
      : {})
  }
};
