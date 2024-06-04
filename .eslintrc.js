module.exports = {
  env: {
    node: true,
    es6: true,
    browser: true
  },
  plugins: ['prefer-smart-quotes'],
  settings: {
    'import/resolver': {
      alias: [['~', './js/modules']]
    }
  },
  extends: '../.eslintrc.js'
};
