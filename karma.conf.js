var path = require('path');

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    frameworks: ['mocha', 'sinon'],

    // list of files / patterns to load in the browser
    files: [
      './node_modules/babel-polyfill/dist/polyfill.js',
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      './node_modules/whatwg-fetch/fetch.js',
      'tests.webpack.js'
    ],

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'tests.webpack.js': ['eslint', 'webpack', 'sourcemap']
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // reporters: ['mocha', 'coverage'],
    reporters: ['mocha', 'coverage'],

    coverageReporter: {
        type : 'html',
        dir : 'coverage/'
    },

    mochaReporter: {
      colors: {
        success: 'green',
        info: 'yellow',
        warning: 'orange',
        error: 'red'
      }
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    captureTimeout: 480000,
    browserNoActivityTimeout: 480000,
    browserNoActivityTimeout: 480000,
    browserDisconnectTimeout: 480000,

    browsers: ['Chrome', 'Firefox', 'Safari', 'PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Include timeout because of rsync
    autoWatchBatchDelay: 800,

    eslint: {
      stopOnError: true,
      stopOnWarning: false
    },

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    webpack: {
      devtool: 'inline-source-map',
      debug: true,
      module: {
        preLoaders: [
          {test: /\.js$/, exclude: /(node_modules|bower_components|material-ui|test)\//, loader: 'isparta-instrumenter'},
        ],
        loaders: [
          {test: /\.jsx?$/, exclude: /(node_modules|material-ui)/, loader: 'babel'},
        ],
        postLoaders: [
        ],
      },
      resolve: {
        alias: {
          react: path.resolve('./node_modules/react'),
        },
        fallback: path.join(__dirname, "node_modules"),
        root: __dirname,
      },
      resolveLoader: { fallback: path.join(__dirname, 'node_modules') },
    },


    webpackServer: {
      noInfo: true
    },


    webpackMiddleware: {
      stats: {
        // With console colors
        colors: true,
        // add the hash of the compilation
        hash: false,
        // add webpack version information
        version: false,
        // add timing information
        timings: false,
        // add assets information
        assets: false,
        // add chunk information
        chunks: false,
        // add built modules information to chunk information
        chunkModules: false,
        // add built modules information
        modules: false,
        // add also information about cached (not built) modules
        cached: false,
        // add information about the reasons why modules are included
        reasons: false,
        // add the source code of modules
        source: false,
        // add details to errors (like resolving log)
        errorDetails: false,
        // add the origins of chunks and chunk merging info
        chunkOrigins: false,
        // Add messages from child loaders
        children: false
      }
    },
  });
};
