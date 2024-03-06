// use puppeteer provided Chrome for testing
process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function(karma) {
  karma.set({

    basePath: '../../',

    frameworks: [
      'mocha',
      'chai'
    ],

    files: [
      'dist/min-dom.min.js',
      'test/integration/umd.js',
      { pattern: 'test/integration/module.js', type: 'module' },
      { pattern: 'dist/index.esm.js', included: false }
    ],

    reporters: [ 'progress' ],

    browsers: [ 'ChromeHeadless' ],

    singleRun: true,
    autoWatch: false
  });
};
