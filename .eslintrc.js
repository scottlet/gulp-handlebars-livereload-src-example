module.exports = {
  env: {
    node: true,
    es6: true,
    browser: true
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx']
      }
    }
  },
  extends: '../.eslintrc.js'
};
