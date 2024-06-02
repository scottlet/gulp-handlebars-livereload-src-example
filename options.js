const { name, version } = require('./package.json');

const OPTIONS = {
  NAME: name,
  FULL_NAME: 'Gulp Handlebars LiveReload Src Example',
  VERSION: version,
  HOST: 'http://localhost:9000',
  PATH: '/',
  BREAKPOINTS: {
    OLD_MOBILE: 320,
    MOBILE: 767,
    SMALL_TABLET: 600,
    TABLET: 979,
    SMALL_DESKTOP: 1440
  },
  API: '/',
  CSS_NANO_PRESET: process.env.NODE_ENV === 'production' ? 'advanced' : 'lite'
};

module.exports = OPTIONS;
