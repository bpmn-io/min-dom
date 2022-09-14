const browsers = (process.env.TEST_BROWSERS || 'ChromeHeadless').split(',');

// use puppeteer provided Chrome for testing
process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function(karma) {
  karma.set({

    frameworks: [
      'browserify',
      'mocha',
      'chai'
    ],

    files: [
      'test/*.js'
    ],

    preprocessors: {
      'test/*.js': [ 'browserify' ]
    },

    reporters: [ 'progress' ],

    browsers,

    singleRun: true,
    autoWatch: false,

    // browserify configuration
    browserify: {
      debug: true,
      transform: [
        'babelify'
      ]
    }
  });
};
