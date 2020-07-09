/* Use this to override any of the options in CONSTS.js inside the builder repo. Should probably not be necessary
except for name and version */
const OPTIONS = {
    NAME: 'Handlebars Source', // change to name of your project
    VERSION: '0.0.3', // increment with each release
    BREAKPOINTS: {
        OLD_MOBILE: 320,
        MOBILE: 767,
        SMALL_TABLET: 600,
        TABLET: 979,
        SMALL_DESKTOP: 1440
    }
};

module.exports = OPTIONS;
