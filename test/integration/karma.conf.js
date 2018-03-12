module.exports = function(karma) {
  karma.set({

    basePath: '../../',

    frameworks: [
      'mocha',
      'chai'
    ],

    files: [
      'dist/min-dom.min.js',
      'test/integration/*.js'
    ],

    reporters: [ 'progress' ],

    browsers: [ 'PhantomJS' ],

    singleRun: true,
    autoWatch: false
  });
};
