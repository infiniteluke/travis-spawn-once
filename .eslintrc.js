module.exports = {
  parser: 'babel-eslint',
  plugins: ['jest', 'prettier'],
  env: { 'jest/globals': true },
  extends: ['airbnb-base', 'prettier'],
  rules: {
    'no-new': ['off'],
  },
};
